"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[86190],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=l,y=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(y,r(r({ref:t},d),{},{components:n})):a.createElement(y,r({ref:t},d))}));function y(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:l,r[1]=i;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46300:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),l=n(50012);function o(e){let{path:t}=e;const[n]=(0,l.Nk)("docusaurus.tab.js-ts"),o=t.lastIndexOf("{"),r=t.slice(o+1,t.length-1),[i,p]=r.split(","),s=t.slice(0,o);return a.createElement("code",null,s+("js"===n?i:p))}},87587:(e,t,n)=>{n.d(t,{Jp:()=>o,aH:()=>r});var a=n(67294);const l=e=>{let{color:t,children:n}=e;return a.createElement("span",{style:{border:`2px solid ${t}`,display:"inline-block",padding:"0.2em 0.4em",color:t,borderRadius:"0.4em",fontSize:"0.8em",lineHeight:"1",fontWeight:"bold"}},n)};function o(){return a.createElement(l,{color:"#0b62f5"},"internal")}function r(){return a.createElement(l,{color:"#f59e0b"},"required")}},90539:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var a=n(87462),l=(n(67294),n(3905)),o=(n(46300),n(87587));const r={title:"Deploying with the Wasp CLI"},i=void 0,p={unversionedId:"advanced/deployment/cli",id:"version-0.12.0/advanced/deployment/cli",title:"Deploying with the Wasp CLI",description:"Wasp CLI can deploy your full-stack application with only a single command.",source:"@site/versioned_docs/version-0.12.0/advanced/deployment/cli.md",sourceDirName:"advanced/deployment",slug:"/advanced/deployment/cli",permalink:"/docs/0.12.0/advanced/deployment/cli",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/versioned_docs/version-0.12.0/advanced/deployment/cli.md",tags:[],version:"0.12.0",frontMatter:{title:"Deploying with the Wasp CLI"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/0.12.0/advanced/deployment/overview"},next:{title:"Deploying Manually",permalink:"/docs/0.12.0/advanced/deployment/manually"}},s={},d=[{value:"Supported Providers",id:"supported-providers",level:2},{value:"Fly.io",id:"flyio",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Deploying",id:"deploying",level:3},{value:"Using a Custom Domain For Your App",id:"using-a-custom-domain-for-your-app",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"<code>launch</code>",id:"launch",level:3},{value:"Environment Variables",id:"environment-variables",level:4},{value:"<code>setup</code>",id:"setup",level:3},{value:"<code>create-db</code>",id:"create-db",level:3},{value:"<code>deploy</code>",id:"deploy",level:3},{value:"<code>cmd</code>",id:"cmd",level:3},{value:"Fly.io Regions",id:"flyio-regions",level:3},{value:"Environment Variables",id:"environment-variables-1",level:4},{value:"Multiple Fly Organizations",id:"multiple-fly-organizations",level:3},{value:"Building Locally",id:"building-locally",level:3}],u={toc:d},c="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Wasp CLI can deploy your full-stack application with only a single command.\nThe command automates the manual deployment process and is the recommended way of deploying Wasp apps."),(0,l.kt)("h2",{id:"supported-providers"},"Supported Providers"),(0,l.kt)("p",null,"Wasp supports automated deployment to the following providers:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#flyio"},"Fly.io")," - they offer 5$ free credit each month"),(0,l.kt)("li",{parentName:"ul"},"Railway (coming soon, track it here ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/wasp-lang/wasp/pull/1157"},"#1157"),")")),(0,l.kt)("h2",{id:"flyio"},"Fly.io"),(0,l.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"Fly provides ",(0,l.kt)("a",{parentName:"p",href:"https://fly.io/docs/about/pricing/#plans"},"free allowances")," for up to 3 VMs (so deploying a Wasp app to a new account is free), but all plans require you to add your credit card information before you can proceed. If you don't, the deployment will fail."),(0,l.kt)("p",null,"You can add the required credit card information on the ",(0,l.kt)("a",{parentName:"p",href:"https://fly.io/dashboard/personal/billing"},"account's billing page"),"."),(0,l.kt)("admonition",{title:"Fly.io CLI",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"You will need the ",(0,l.kt)("a",{parentName:"p",href:"https://fly.io/docs/hands-on/install-flyctl/"},(0,l.kt)("inlineCode",{parentName:"a"},"flyctl")," CLI")," installed on your machine before you can deploy to Fly.io.")),(0,l.kt)("h3",{id:"deploying"},"Deploying"),(0,l.kt)("p",null,"Using the Wasp CLI, you can easily deploy a new app to ",(0,l.kt)("a",{parentName:"p",href:"https://fly.io"},"Fly.io")," with just a single command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"wasp deploy fly launch my-wasp-app mia\n")),(0,l.kt)("admonition",{title:"Specifying Org",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"If your account is a member of more than one organization on Fly.io, you will need to specify under which one you want to execute the command. To do that, provide an additional ",(0,l.kt)("inlineCode",{parentName:"p"},"--org <org-slug>")," option. You can find out the names(slugs) of your organizations by running ",(0,l.kt)("inlineCode",{parentName:"p"},"fly orgs list"),".")),(0,l.kt)("small",null,(0,l.kt)("p",null,"Please do not CTRL-C or exit your terminal while the commands are running.")),(0,l.kt)("p",null,"Under the covers, this runs the equivalent of the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"wasp deploy fly setup my-wasp-app mia\nwasp deploy fly create-db mia\nwasp deploy fly deploy\n")),(0,l.kt)("p",null,"The commands above use the app basename ",(0,l.kt)("inlineCode",{parentName:"p"},"my-wasp-app")," and deploy it to the ",(0,l.kt)("em",{parentName:"p"},"Miami, Florida (US) region")," (called ",(0,l.kt)("inlineCode",{parentName:"p"},"mia"),"). Read more about Fly.io regions ",(0,l.kt)("a",{parentName:"p",href:"#flyio-regions"},"here"),"."),(0,l.kt)("admonition",{title:"Unique Name",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Your app name must be unique across all of Fly or deployment will fail.")),(0,l.kt)("p",null,"The basename is used to create all three app tiers, resulting in three separate apps in your Fly dashboard:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"my-wasp-app-client")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"my-wasp-app-server")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"my-wasp-app-db"))),(0,l.kt)("p",null,"You'll notice that Wasp creates two new files in your project root directory:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"fly-server.toml")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"fly-client.toml"))),(0,l.kt)("p",null,"You should include these files in your version control so that you can deploy your app with a single command in the future."),(0,l.kt)("h3",{id:"using-a-custom-domain-for-your-app"},"Using a Custom Domain For Your App"),(0,l.kt)("p",null,"Setting up a custom domain is a three-step process:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"You need to add your domain to your Fly client app. You can do this by running:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"wasp deploy fly cmd --context client certs create mycoolapp.com\n")),(0,l.kt)("admonition",{title:"Use Your Domain",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Make sure to replace ",(0,l.kt)("inlineCode",{parentName:"p"},"mycoolapp.com")," with your domain in all of the commands mentioned in this section.")),(0,l.kt)("p",null,"This command will output the instructions to add the DNS records to your domain. It will look something like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell-session"},"You can direct traffic to mycoolapp.com by:\n\n1: Adding an A record to your DNS service which reads\n\n    A @ 66.241.1XX.154\n\nYou can validate your ownership of mycoolapp.com by:\n\n2: Adding an AAAA record to your DNS service which reads:\n\n    AAAA @ 2a09:82XX:1::1:ff40\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"You need to add the DNS records for your domain:"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("em",{parentName:"p"},"This will depend on your domain provider, but it should be a matter of adding an A record for ",(0,l.kt)("inlineCode",{parentName:"em"},"@")," and an AAAA record for ",(0,l.kt)("inlineCode",{parentName:"em"},"@")," with the values provided by the previous command."))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"You need to set your domain as the ",(0,l.kt)("inlineCode",{parentName:"p"},"WASP_WEB_CLIENT_URL")," environment variable for your server app:"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"wasp deploy fly cmd --context server secrets set WASP_WEB_CLIENT_URL=https://mycoolapp.com\n")),(0,l.kt)("small",null,(0,l.kt)("p",null,"We need to do this to keep our CORS configuration up to date.")),(0,l.kt)("p",null,"That's it, your app should be available at ",(0,l.kt)("inlineCode",{parentName:"p"},"https://mycoolapp.com"),"! \ud83c\udf89"),(0,l.kt)("h2",{id:"api-reference"},"API Reference"),(0,l.kt)("h3",{id:"launch"},(0,l.kt)("inlineCode",{parentName:"h3"},"launch")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"launch")," is a convenience command that runs ",(0,l.kt)("inlineCode",{parentName:"p"},"setup"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"create-db"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"deploy")," in sequence."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"wasp deploy fly launch <app-name> <region>\n")),(0,l.kt)("p",null,"It accepts the following arguments:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"<app-name>")," - the name of your app ",(0,l.kt)(o.aH,{mdxType:"Required"}))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"<region>")," - the region where your app will be deployed ",(0,l.kt)(o.aH,{mdxType:"Required"})),(0,l.kt)("p",{parentName:"li"},"Read how to find the available regions ",(0,l.kt)("a",{parentName:"p",href:"#flyio-regions"},"here"),"."))),(0,l.kt)("p",null,"It gives you the same result as running the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"wasp deploy fly setup <app-name> <region>\nwasp deploy fly create-db <region>\nwasp deploy fly deploy\n")),(0,l.kt)("h4",{id:"environment-variables"},"Environment Variables"),(0,l.kt)("p",null,"If you are deploying an app that requires any other environment variables (like social auth secrets), you can set them with the ",(0,l.kt)("inlineCode",{parentName:"p"},"--server-secret")," option:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"wasp deploy fly launch my-wasp-app mia --server-secret GOOGLE_CLIENT_ID=<...> --server-secret GOOGLE_CLIENT_SECRET=<...>\n")),(0,l.kt)("h3",{id:"setup"},(0,l.kt)("inlineCode",{parentName:"h3"},"setup")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"setup")," will create your client and server apps on Fly, and add some secrets, but does ",(0,l.kt)("em",{parentName:"p"},"not")," deploy them."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"wasp deploy fly setup <app-name> <region>\n")),(0,l.kt)("p",null,"It accepts the following arguments:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"<app-name>")," - the name of your app ",(0,l.kt)(o.aH,{mdxType:"Required"}))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"<region>")," - the region where your app will be deployed ",(0,l.kt)(o.aH,{mdxType:"Required"})),(0,l.kt)("p",{parentName:"li"},"Read how to find the available regions ",(0,l.kt)("a",{parentName:"p",href:"#flyio-regions"},"here"),"."))),(0,l.kt)("p",null,"After running ",(0,l.kt)("inlineCode",{parentName:"p"},"setup"),", Wasp creates two new files in your project root directory: ",(0,l.kt)("inlineCode",{parentName:"p"},"fly-server.toml")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"fly-client.toml"),".\nYou should include these files in your version control."),(0,l.kt)("p",null,"You ",(0,l.kt)("strong",{parentName:"p"},"can edit the ",(0,l.kt)("inlineCode",{parentName:"strong"},"fly-server.toml")," and ",(0,l.kt)("inlineCode",{parentName:"strong"},"fly-client.toml")," files")," to further configure your Fly deployments. Wasp will use the TOML files when you run ",(0,l.kt)("inlineCode",{parentName:"p"},"deploy"),"."),(0,l.kt)("p",null,"If you want to maintain multiple apps, you can add the ",(0,l.kt)("inlineCode",{parentName:"p"},"--fly-toml-dir <abs-path>"),' option to point to different directories, like "dev" or "staging".'),(0,l.kt)("admonition",{title:"Execute Only Once",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"You should only run ",(0,l.kt)("inlineCode",{parentName:"p"},"setup")," once per app. If you run it multiple times, it will create unnecessary apps on Fly.")),(0,l.kt)("h3",{id:"create-db"},(0,l.kt)("inlineCode",{parentName:"h3"},"create-db")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"create-db")," will create a new database for your app."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"wasp deploy fly create-db <region>\n")),(0,l.kt)("p",null,"It accepts the following arguments:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"<region>")," - the region where your app will be deployed ",(0,l.kt)(o.aH,{mdxType:"Required"})),(0,l.kt)("p",{parentName:"li"},"Read how to find the available regions ",(0,l.kt)("a",{parentName:"p",href:"#flyio-regions"},"here"),"."))),(0,l.kt)("admonition",{title:"Execute Only Once",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"You should only run ",(0,l.kt)("inlineCode",{parentName:"p"},"create-db")," once per app. If you run it multiple times, it will create multiple databases, but your app needs only one.")),(0,l.kt)("h3",{id:"deploy"},(0,l.kt)("inlineCode",{parentName:"h3"},"deploy")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"wasp deploy fly deploy\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"deploy")," pushes your client and server live."),(0,l.kt)("p",null,"Run this command whenever you want to ",(0,l.kt)("strong",{parentName:"p"},"update your deployed app")," with the latest changes:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"wasp deploy fly deploy\n")),(0,l.kt)("h3",{id:"cmd"},(0,l.kt)("inlineCode",{parentName:"h3"},"cmd")),(0,l.kt)("p",null,"If want to run arbitrary Fly commands (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"flyctl secrets list")," for your server app), here's how to do it:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"wasp deploy fly cmd secrets list --context server\n")),(0,l.kt)("h3",{id:"flyio-regions"},"Fly.io Regions"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Fly.io runs applications physically close to users: in datacenters around the world, on servers we run ourselves. You can currently deploy your apps in 34 regions, connected to a global Anycast network that makes sure your users hit our nearest server, whether they\u2019re in Tokyo, S\xe3o Paolo, or Frankfurt.")),(0,l.kt)("small",null,(0,l.kt)("p",null,"Read more on Fly regions ",(0,l.kt)("a",{parentName:"p",href:"https://fly.io/docs/reference/regions/"},"here"),".")),(0,l.kt)("p",null,"You can find the list of all available Fly regions by running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"flyctl platform regions\n")),(0,l.kt)("h4",{id:"environment-variables-1"},"Environment Variables"),(0,l.kt)("p",null,"If you are deploying an app that requires any other environment variables (like social auth secrets), you can set them with the ",(0,l.kt)("inlineCode",{parentName:"p"},"secrets set")," command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"wasp deploy fly cmd secrets set GOOGLE_CLIENT_ID=<...> GOOGLE_CLIENT_SECRET=<...> --context=server\n")),(0,l.kt)("h3",{id:"multiple-fly-organizations"},"Multiple Fly Organizations"),(0,l.kt)("p",null,"If you have multiple organizations, you can specify a ",(0,l.kt)("inlineCode",{parentName:"p"},"--org")," option. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"wasp deploy fly launch my-wasp-app mia --org hive\n")),(0,l.kt)("h3",{id:"building-locally"},"Building Locally"),(0,l.kt)("p",null,"Fly.io offers support for both ",(0,l.kt)("strong",{parentName:"p"},"locally")," built Docker containers and ",(0,l.kt)("strong",{parentName:"p"},"remotely")," built ones. However, for simplicity and reproducibility, the CLI defaults to the use of a remote Fly.io builder."),(0,l.kt)("p",null,"If you want to build locally, supply the ",(0,l.kt)("inlineCode",{parentName:"p"},"--build-locally")," option to ",(0,l.kt)("inlineCode",{parentName:"p"},"wasp deploy fly launch")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"wasp deploy fly deploy"),"."))}m.isMDXComponent=!0}}]);