module Wasp.Project.Analyze
  ( analyzeWaspProject,
    readPackageJsonFile,
    analyzeWaspFileContent,
    findWaspFile,
    findPackageJsonFile,
    analyzePrismaSchema,
    WaspFile (..),
  )
where

import Control.Applicative ((<|>))
import Control.Arrow (ArrowChoice (left))
import Control.Concurrent (newChan, readChan)
import Control.Concurrent.Async (concurrently)
import Control.Concurrent.Chan (Chan)
import Control.Monad.IO.Class (liftIO)
import qualified Data.Aeson as Aeson
import qualified Data.Conduit.Combinators as T
import Data.Conduit.Process.Typed (ExitCode (..))
import Data.List (find, isSuffixOf)
import qualified Data.Text as T
import StrongPath (Abs, Dir, File', Path', toFilePath, (</>))
import qualified StrongPath as SP
import StrongPath.Types (File)
import qualified Wasp.Analyzer as Analyzer
import Wasp.Analyzer.AnalyzeError (getErrorMessageAndCtx)
import Wasp.Analyzer.Parser.Ctx (Ctx)
import qualified Wasp.AppSpec as AS
import Wasp.AppSpec.PackageJson (PackageJson)
import qualified Wasp.AppSpec.Valid as ASV
import Wasp.CompileOptions (CompileOptions)
import qualified Wasp.CompileOptions as CompileOptions
import qualified Wasp.ConfigFile as CF
import Wasp.Error (showCompilerErrorForTerminal)
import qualified Wasp.Generator.ConfigFile as G.CF
import qualified Wasp.Generator.Job as J
import Wasp.Generator.Job.IO (readJobMessagesAndPrintThemPrefixed)
import Wasp.Generator.Job.IO.PrefixedWriter (printJobMessagePrefixed, runPrefixedWriter)
import Wasp.Generator.Job.Process (runNodeCommandAsJob)
import Wasp.Project.Common
  ( CompileError,
    CompileWarning,
    WaspProjectDir,
    findFileInWaspProjectDir,
    packageJsonInWaspProjectDir,
    prismaSchemaFileInWaspProjectDir,
  )
import Wasp.Project.Db (makeDevDatabaseUrl)
import Wasp.Project.Db.Migrations (findMigrationsDir)
import Wasp.Project.Deployment (loadUserDockerfileContents)
import Wasp.Project.Env (readDotEnvClient, readDotEnvServer)
import qualified Wasp.Project.ExternalFiles as ExternalFiles
import Wasp.Project.Vite (findCustomViteConfigPath)
import qualified Wasp.Psl.Ast.Schema as Psl.Schema
import qualified Wasp.Psl.Parser.Schema as Psl.Parser
import Wasp.Psl.Valid (getValidDbSystemFromPrismaSchema)
import qualified Wasp.Psl.Valid as PslV
import Wasp.Util (maybeToEither)
import qualified Wasp.Util.IO as IOUtil
import Wasp.Valid (ValidationError)
import qualified Wasp.Valid as Valid

analyzeWaspProject ::
  Path' Abs (Dir WaspProjectDir) ->
  CompileOptions ->
  IO (Either [CompileError] AS.AppSpec, [CompileWarning])
analyzeWaspProject waspDir options = do
  waspFilePathOrError <- maybeToEither [fileNotFoundMessage] <$> findWaspFile waspDir

  case waspFilePathOrError of
    Left err -> return (Left err, [])
    Right waspFilePath ->
      analyzePrismaSchema waspDir >>= \case
        (Left prismaSchemaErrors, prismaSchemaWarnings) -> return (Left prismaSchemaErrors, prismaSchemaWarnings)
        -- NOTE: we are ignoring prismaSchemaWarnings if the schema was parsed successfully
        (Right prismaSchemaAst, _) ->
          analyzeWaspFile prismaSchemaAst waspFilePath >>= \case
            Left errors -> return (Left errors, [])
            Right declarations ->
              analyzePackageJsonContent waspDir >>= \case
                Left errors -> return (Left errors, [])
                Right packageJsonContent -> constructAppSpec waspDir options packageJsonContent prismaSchemaAst declarations
  where
    fileNotFoundMessage = "Couldn't find the *.wasp file in the " ++ toFilePath waspDir ++ " directory"

analyzeWaspFile :: Psl.Schema.Schema -> WaspFile -> IO (Either [CompileError] [AS.Decl])
analyzeWaspFile prismaSchemaAst = \case
  WaspLangFile waspFilePath -> analyzeWaspLangFile prismaSchemaAst waspFilePath
  WaspTsFile waspFilePath -> analyzeWaspTsFile prismaSchemaAst waspFilePath

analyzeWaspTsFile :: Psl.Schema.Schema -> Path' Abs File' -> IO (Either [CompileError] [AS.Decl])
analyzeWaspTsFile _prismaSchemaAst waspFilePath = do
  let workingDir = SP.parent waspFilePath
  chan <- newChan
  (_, tscExitCode) <-
    concurrently
      (readJobMessagesAndPrintThemPrefixed chan)
      (runNodeCommandAsJob workingDir "npx" ["tsc", "-p", "tsconfig.node.json"] J.Wasp chan)

  case tscExitCode of
    ExitFailure _status -> return $ Left ["Error while running TypeScript compiler on the *.wasp.mts file."]
    ExitSuccess -> do
      otherChan <- newChan
      (_, runExitCode) <-
        concurrently
          (handleRunJsMessages otherChan)
          ( runNodeCommandAsJob
              workingDir
              "node"
              [ SP.fromAbsDir workingDir ++ "node_modules/wasp-ts-sdk/dist/run.js",
                SP.fromAbsDir workingDir ++ ".wasp/config/main.wasp.mjs"
              ]
              J.Wasp
              otherChan
          )
      case runExitCode of
        ExitFailure _status -> return $ Left ["Error while running the compiled *.wasp.mts file."]
        ExitSuccess -> return $ Right []
  where
    handleRunJsMessages :: Chan J.JobMessage -> IO ()
    handleRunJsMessages = runPrefixedWriter . processMessages
    processMessages chan = do
      jobMsg <- liftIO $ readChan chan
      case J._data jobMsg of
        J.JobOutput payload J.Stdout -> do
          -- let payload:: String = read $ T.unpack text
          liftIO $ putStrLn "Ovo smo dobili na stdout"
          -- parse payload as json
          let json = Aeson.toJSON payload
          liftIO $ print json
          return ()
        J.JobOutput _ J.Stderr -> printJobMessagePrefixed jobMsg >> processMessages chan
        J.JobExit {} -> return ()

analyzeWaspLangFile :: Psl.Schema.Schema -> Path' Abs File' -> IO (Either [CompileError] [AS.Decl])
analyzeWaspLangFile prismaSchemaAst waspFilePath = do
  waspFileContent <- IOUtil.readFile waspFilePath
  left (map $ showCompilerErrorForTerminal (waspFilePath, waspFileContent))
    <$> analyzeWaspFileContent prismaSchemaAst waspFileContent

analyzeWaspFileContent :: Psl.Schema.Schema -> String -> IO (Either [(String, Ctx)] [AS.Decl])
analyzeWaspFileContent prismaSchemaAst = return . left (map getErrorMessageAndCtx) . Analyzer.analyze prismaSchemaAst

constructAppSpec ::
  Path' Abs (Dir WaspProjectDir) ->
  CompileOptions ->
  PackageJson ->
  Psl.Schema.Schema ->
  [AS.Decl] ->
  IO (Either [CompileError] AS.AppSpec, [CompileWarning])
constructAppSpec waspDir options packageJson parsedPrismaSchema decls = do
  externalCodeFiles <- ExternalFiles.readCodeFiles waspDir
  externalPublicFiles <- ExternalFiles.readPublicFiles waspDir
  customViteConfigPath <- findCustomViteConfigPath waspDir

  maybeMigrationsDir <- findMigrationsDir waspDir
  maybeUserDockerfileContents <- loadUserDockerfileContents waspDir
  configFiles <- CF.discoverConfigFiles waspDir G.CF.configFileRelocationMap
  let dbSystem = getValidDbSystemFromPrismaSchema parsedPrismaSchema
  let devDbUrl = makeDevDatabaseUrl waspDir dbSystem decls
  serverEnvVars <- readDotEnvServer waspDir
  clientEnvVars <- readDotEnvClient waspDir

  let appSpec =
        AS.AppSpec
          { AS.decls = decls,
            AS.prismaSchema = parsedPrismaSchema,
            AS.packageJson = packageJson,
            AS.waspProjectDir = waspDir,
            AS.externalCodeFiles = externalCodeFiles,
            AS.externalPublicFiles = externalPublicFiles,
            AS.migrationsDir = maybeMigrationsDir,
            AS.devEnvVarsServer = serverEnvVars,
            AS.devEnvVarsClient = clientEnvVars,
            AS.isBuild = CompileOptions.isBuild options,
            AS.userDockerfileContents = maybeUserDockerfileContents,
            AS.configFiles = configFiles,
            AS.devDatabaseUrl = devDbUrl,
            AS.customViteConfigPath = customViteConfigPath
          }

  return $ runValidation ASV.validateAppSpec appSpec

data WaspFile
  = WaspLangFile {_path :: !(Path' Abs File')}
  | WaspTsFile {_path :: !(Path' Abs File')}
  deriving (Show)

findWaspFile :: Path' Abs (Dir WaspProjectDir) -> IO (Maybe WaspFile)
findWaspFile waspDir = do
  files <- fst <$> IOUtil.listDirectory waspDir
  return $ findWaspTsFile files <|> findWaspLangFile files
  where
    findWaspTsFile files = WaspTsFile . (waspDir </>) <$> find (`hasExtension` ".wasp.mts") files
    findWaspLangFile files = WaspLangFile . (waspDir </>) <$> find isWaspLangFile files
    isWaspLangFile path =
      path `hasExtension` ".wasp"
        && (length (toFilePath path) > length (".wasp" :: String))

hasExtension :: Path' s (File f) -> String -> Bool
hasExtension path ext = ext `isSuffixOf` toFilePath path

analyzePackageJsonContent :: Path' Abs (Dir WaspProjectDir) -> IO (Either [CompileError] PackageJson)
analyzePackageJsonContent waspProjectDir =
  findPackageJsonFile waspProjectDir >>= \case
    Just packageJsonFile -> readPackageJsonFile packageJsonFile
    Nothing -> return $ Left [fileNotFoundMessage]
  where
    fileNotFoundMessage = "Couldn't find the package.json file in the " ++ toFilePath waspProjectDir ++ " directory"

findPackageJsonFile :: Path' Abs (Dir WaspProjectDir) -> IO (Maybe (Path' Abs File'))
findPackageJsonFile waspProjectDir = findFileInWaspProjectDir waspProjectDir packageJsonInWaspProjectDir

readPackageJsonFile :: Path' Abs File' -> IO (Either [CompileError] PackageJson)
readPackageJsonFile packageJsonFile = do
  byteString <- IOUtil.readFileBytes packageJsonFile
  return $ maybeToEither ["Error parsing the package.json file"] $ Aeson.decode byteString

analyzePrismaSchema :: Path' Abs (Dir WaspProjectDir) -> IO (Either [CompileError] Psl.Schema.Schema, [CompileWarning])
analyzePrismaSchema waspProjectDir = do
  findPrismaSchemaFile waspProjectDir >>= \case
    Just pathToPrismaSchemaFile -> do
      prismaSchemaContent <- IOUtil.readFile pathToPrismaSchemaFile

      case Psl.Parser.parsePrismaSchema prismaSchemaContent of
        Left err ->
          return (Left [couldntParsePrismaSchemaMessage ++ "\n\n" ++ show err], [])
        Right parsedPrismaSchema -> return $ runValidation PslV.validatePrismaSchema parsedPrismaSchema
    Nothing -> return (Left [couldntFindPrismaSchemaMessage], [])
  where
    couldntParsePrismaSchemaMessage = "Wasp couldn't parse your schema.prisma file, please check if you have any errors in it."

    -- NOTE: linking here to migration docs because I think it's the most common reason why schema.prisma file is missing.
    -- After people mostly start using 0.14.0+ they will have schema.prisma file, so this message will be less relevant.
    -- If we see that this message is still relevant, we can change it to be more general.
    couldntFindPrismaSchemaMessage = "Couldn't find the schema.prisma file in the " ++ toFilePath waspProjectDir ++ " directory. \nRead more: https://wasp-lang.dev/docs/migrate-from-0-13-to-0-14#migrate-to-the-new-schemaprisma-file"

runValidation :: (result -> [ValidationError]) -> result -> (Either [CompileError] result, [CompileWarning])
runValidation getErrorsAndWarnings result =
  if null errors
    then (Right result, warnings)
    else (Left errors, warnings)
  where
    errors = showErrorsBy Valid.isValidationError errsAndWarns
    warnings = showErrorsBy Valid.isValidationWarning errsAndWarns
    errsAndWarns = getErrorsAndWarnings result
    showErrorsBy predicate = map show . filter predicate

findPrismaSchemaFile :: Path' Abs (Dir WaspProjectDir) -> IO (Maybe (Path' Abs File'))
findPrismaSchemaFile waspProjectDir = findFileInWaspProjectDir waspProjectDir prismaSchemaFileInWaspProjectDir
