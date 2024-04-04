"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[13925],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,k=u["".concat(l,".").concat(d)]||u[d]||m[d]||s;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const s={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>T});var a=n(87462),r=n(67294),s=n(86010),o=n(12466),i=n(16550),l=n(91980),p=n(67392),c=n(50012);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=m(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[l,p]=k({queryString:n,groupId:a}),[u,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),g=(()=>{const e=l??u;return d({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),h(e)}),[p,h,s]),tabValues:s}}var g=n(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=p[n].value;a!==i&&(u(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},o,{className:(0,s.Z)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":i===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=h(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",f.tabList)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(b,(0,a.Z)({},e,t)))}function T(e){const t=(0,g.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},46300:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(50012);function s(e){let{path:t}=e;const[n]=(0,r.Nk)("docusaurus.tab.js-ts"),s=t.lastIndexOf("{"),o=t.slice(s+1,t.length-1),[i,l]=o.split(","),p=t.slice(0,s);return a.createElement("code",null,p+("js"===n?i:l))}},38734:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),s=(n(46300),n(85162)),o=n(74866);const i={title:"Testing"},l=void 0,p={unversionedId:"project/testing",id:"version-0.13.11/project/testing",title:"Testing",description:"Wasp is in beta, so keep in mind there might be some kinks / bugs, and possibly some changes with testing support in the future. If you encounter any issues, reach out to us on Discord and we will make sure to help you out!",source:"@site/versioned_docs/version-0.13.11/project/testing.md",sourceDirName:"project",slug:"/project/testing",permalink:"/docs/project/testing",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/versioned_docs/version-0.13.11/project/testing.md",tags:[],version:"0.13.11",frontMatter:{title:"Testing"},sidebar:"docs",previous:{title:"Env Variables",permalink:"/docs/project/env-vars"},next:{title:"Dependencies",permalink:"/docs/project/dependencies"}},c={},u=[{value:"Testing Your React App",id:"testing-your-react-app",level:2},{value:"Writing Tests",id:"writing-tests",level:3},{value:"Running Tests",id:"running-tests",level:3},{value:"React Testing Helpers",id:"react-testing-helpers",level:3},{value:"Testing Your Server-Side Code",id:"testing-your-server-side-code",level:2},{value:"Examples",id:"examples",level:2},{value:"Client Unit Tests",id:"client-unit-tests",level:3},{value:"React Component Tests",id:"react-component-tests",level:3},{value:"Testing With Mocked APIs",id:"testing-with-mocked-apis",level:3}],m={toc:u},d="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Wasp is in beta, so keep in mind there might be some kinks / bugs, and possibly some changes with testing support in the future. If you encounter any issues, reach out to us on ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/rzdnErX"},"Discord")," and we will make sure to help you out!")),(0,r.kt)("h2",{id:"testing-your-react-app"},"Testing Your React App"),(0,r.kt)("p",null,"Wasp enables you to quickly and easily write both unit tests and React component tests for your frontend code. Because Wasp uses ",(0,r.kt)("a",{parentName:"p",href:"https://vitejs.dev/"},"Vite"),", we support testing web apps through ",(0,r.kt)("a",{parentName:"p",href:"https://vitest.dev/"},"Vitest"),"."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Included Libraries"),(0,r.kt)("div",null,(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/vitest"},(0,r.kt)("inlineCode",{parentName:"a"},"vitest")),": Unit test framework with native Vite support."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@vitest/ui"},(0,r.kt)("inlineCode",{parentName:"a"},"@vitest/ui")),": A nice UI for seeing your test results."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/jsdom"},(0,r.kt)("inlineCode",{parentName:"a"},"jsdom")),": A web browser test environment for Node.js."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@testing-library/react"},(0,r.kt)("inlineCode",{parentName:"a"},"@testing-library/react"))," / ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@testing-library/jest-dom"},(0,r.kt)("inlineCode",{parentName:"a"},"@testing-library/jest-dom")),": Testing helpers."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/msw"},(0,r.kt)("inlineCode",{parentName:"a"},"msw")),": A server mocking library."))),(0,r.kt)("h3",{id:"writing-tests"},"Writing Tests"),(0,r.kt)("p",null,"For Wasp to pick up your tests, they should be placed within the ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," directory and use an extension that matches ",(0,r.kt)("a",{parentName:"p",href:"https://vitest.dev/config#include"},"these glob patterns"),". Some of the file names that Wasp will pick up as tests:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yourFile.test.ts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"YourComponent.spec.jsx"))),(0,r.kt)("p",null,"Within test files, you can import your other source files as usual. For example, if you have a component ",(0,r.kt)("inlineCode",{parentName:"p"},"Counter.jsx"),", you test it by creating a file in the same directory called ",(0,r.kt)("inlineCode",{parentName:"p"},"Counter.test.jsx")," and import the component with ",(0,r.kt)("inlineCode",{parentName:"p"},"import Counter from './Counter'"),"."),(0,r.kt)("h3",{id:"running-tests"},"Running Tests"),(0,r.kt)("p",null,"Running ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp test client")," will start Vitest in watch mode and recompile your Wasp project when changes are made."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you want to see a real-time UI, pass ",(0,r.kt)("inlineCode",{parentName:"li"},"--ui")," as an option."),(0,r.kt)("li",{parentName:"ul"},"To run the tests just once, use ",(0,r.kt)("inlineCode",{parentName:"li"},"wasp test client run"),".")),(0,r.kt)("p",null,"All arguments after ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp test client")," are passed directly to the Vitest CLI, so check out ",(0,r.kt)("a",{parentName:"p",href:"https://vitest.dev/guide/cli.html"},"their documentation")," for all of the options."),(0,r.kt)("admonition",{title:"Be Careful",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"You should not run ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp test")," while ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp start")," is running. Both will try to compile your project to ",(0,r.kt)("inlineCode",{parentName:"p"},".wasp/out"),".")),(0,r.kt)("h3",{id:"react-testing-helpers"},"React Testing Helpers"),(0,r.kt)("p",null,"Wasp provides several functions to help you write React tests:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"renderInContext"),": Takes a React component, wraps it inside a ",(0,r.kt)("inlineCode",{parentName:"p"},"QueryClientProvider")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Router"),", and renders it. This is the function you should use to render components in your React component tests."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { renderInContext } from "wasp/client/test";\n\nrenderInContext(<MainPage />);\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"mockServer"),": Sets up the mock server and returns an object containing the ",(0,r.kt)("inlineCode",{parentName:"p"},"mockQuery")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"mockApi")," utilities. This should be called outside of any test case, in each file that wants to use those helpers."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { mockServer } from "wasp/client/test";\n\nconst { mockQuery, mockApi } = mockServer();\n')),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"mockQuery"),": Takes a Wasp ",(0,r.kt)("a",{parentName:"p",href:"../data-model/operations/queries"},"query")," to mock and the JSON data it should return."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { getTasks } from "wasp/client/operations";\n\nmockQuery(getTasks, []);\n')),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Helpful when your component uses ",(0,r.kt)("inlineCode",{parentName:"li"},"useQuery"),"."),(0,r.kt)("li",{parentName:"ul"},"Behind the scenes, Wasp uses ",(0,r.kt)("a",{parentName:"li",href:"https://npmjs.com/package/msw"},(0,r.kt)("inlineCode",{parentName:"a"},"msw"))," to create a server request handle that responds with the specified data."),(0,r.kt)("li",{parentName:"ul"},"Mock are cleared between each test."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"mockApi"),": Similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"mockQuery"),", but for ",(0,r.kt)("a",{parentName:"p",href:"../advanced/apis"},"APIs"),". Instead of a Wasp query, it takes a route containing an HTTP method and a path."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { HttpMethod } from "wasp/client";\n\nmockApi({ method: HttpMethod.Get, path: "/foor/bar" }, { res: "hello" });\n')))))),(0,r.kt)("h2",{id:"testing-your-server-side-code"},"Testing Your Server-Side Code"),(0,r.kt)("p",null,"Wasp currently does not provide a way to test your server-side code, but we will be adding support soon. You can track the progress at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/issues/110"},"this GitHub issue")," and express your interest by commenting."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"You can see some tests in a Wasp project ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/blob/release/waspc/examples/todoApp/src/client/pages/auth/helpers.test.ts"},"here"),"."),(0,r.kt)("h3",{id:"client-unit-tests"},"Client Unit Tests"),(0,r.kt)(o.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/helpers.js"',title:'"src/helpers.js"'},"export function areThereAnyTasks(tasks) {\n  return tasks.length === 0;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/helpers.test.js"',title:'"src/helpers.test.js"'},'import { test, expect } from "vitest";\n\nimport { areThereAnyTasks } from "./helpers";\n\ntest("areThereAnyTasks", () => {\n  expect(areThereAnyTasks([])).toBe(false);\n});\n'))),(0,r.kt)(s.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/helpers.ts"',title:'"src/helpers.ts"'},'import { type Task } from "wasp/entities";\n\nexport function areThereAnyTasks(tasks: Task[]): boolean {\n  return tasks.length === 0;\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/helpers.test.ts"',title:'"src/helpers.test.ts"'},'import { test, expect } from "vitest";\n\nimport { areThereAnyTasks } from "./helpers";\n\ntest("areThereAnyTasks", () => {\n  expect(areThereAnyTasks([])).toBe(false);\n});\n')))),(0,r.kt)("h3",{id:"react-component-tests"},"React Component Tests"),(0,r.kt)(o.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/Todo.jsx"',title:'"src/Todo.jsx"'},'import { useQuery, getTasks } from "wasp/client/operations";\n\nconst Todo = (_props) => {\n  const { data: tasks } = useQuery(getTasks);\n  return (\n    <ul>\n      {tasks &&\n        tasks.map((task) => (\n          <li key={task.id}>\n            <input type="checkbox" value={task.isDone} />\n            {task.description}\n          </li>\n        ))}\n    </ul>\n  );\n};\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=src/Todo.test.jsx",title:"src/Todo.test.jsx"},'import { test, expect } from "vitest";\nimport { screen } from "@testing-library/react";\n\nimport { mockServer, renderInContext } from "wasp/client/test";\nimport { getTasks } from "wasp/client/operations";\nimport Todo from "./Todo";\n\nconst { mockQuery } = mockServer();\n\nconst mockTasks = [\n  {\n    id: 1,\n    description: "test todo 1",\n    isDone: true,\n    userId: 1,\n  },\n];\n\ntest("handles mock data", async () => {\n  mockQuery(getTasks, mockTasks);\n\n  renderInContext(<Todo />);\n\n  await screen.findByText("test todo 1");\n\n  expect(screen.getByRole("checkbox")).toBeChecked();\n\n  screen.debug();\n});\n'))),(0,r.kt)(s.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/Todo.tsx"',title:'"src/Todo.tsx"'},'import { useQuery, getTasks } from "wasp/client/operations";\n\nconst Todo = (_props: {}) => {\n  const { data: tasks } = useQuery(getTasks);\n\n  return (\n    <ul>\n      {tasks &&\n        tasks.map((task) => (\n          <li key={task.id}>\n            <input type="checkbox" value={task.isDone} />\n            {task.description}\n          </li>\n        ))}\n    </ul>\n  );\n};\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=src/Todo.test.tsx",title:"src/Todo.test.tsx"},'import { test, expect } from "vitest";\nimport { screen } from "@testing-library/react";\n\nimport { mockServer, renderInContext } from "wasp/client/test";\nimport { getTasks } from "wasp/client/operations";\nimport Todo from "./Todo";\n\nconst { mockQuery } = mockServer();\n\nconst mockTasks = [\n  {\n    id: 1,\n    description: "test todo 1",\n    isDone: true,\n    userId: 1,\n  },\n];\n\ntest("handles mock data", async () => {\n  mockQuery(getTasks, mockTasks);\n\n  renderInContext(<Todo />);\n\n  await screen.findByText("test todo 1");\n\n  expect(screen.getByRole("checkbox")).toBeChecked();\n\n  screen.debug();\n});\n')))),(0,r.kt)("h3",{id:"testing-with-mocked-apis"},"Testing With Mocked APIs"),(0,r.kt)(o.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/Todo.jsx"',title:'"src/Todo.jsx"'},'import { api } from "wasp/client/api";\n\nconst Todo = (_props) => {\n  const [tasks, setTasks] = useState([]);\n  useEffect(() => {\n    api\n      .get("/tasks")\n      .then((res) => res.json())\n      .then((tasks) => setTasks(tasks))\n      .catch((err) => window.alert(err));\n  });\n\n  return (\n    <ul>\n      {tasks &&\n        tasks.map((task) => (\n          <li key={task.id}>\n            <input type="checkbox" value={task.isDone} />\n            {task.description}\n          </li>\n        ))}\n    </ul>\n  );\n};\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=src/Todo.test.jsx",title:"src/Todo.test.jsx"},'import { test, expect } from "vitest";\nimport { screen } from "@testing-library/react";\n\nimport { mockServer, renderInContext } from "wasp/client/test";\nimport Todo from "./Todo";\n\nconst { mockApi } = mockServer();\n\nconst mockTasks = [\n  {\n    id: 1,\n    description: "test todo 1",\n    isDone: true,\n    userId: 1,\n  },\n];\n\ntest("handles mock data", async () => {\n  mockApi("/tasks", { res: mockTasks });\n\n  renderInContext(<Todo />);\n\n  await screen.findByText("test todo 1");\n\n  expect(screen.getByRole("checkbox")).toBeChecked();\n\n  screen.debug();\n});\n'))),(0,r.kt)(s.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/Todo.tsx"',title:'"src/Todo.tsx"'},'import { type Task } from "wasp/entities";\nimport { api } from "wasp/client/api";\n\nconst Todo = (_props: {}) => {\n  const [tasks, setTasks] = useState<Task>([]);\n  useEffect(() => {\n    api\n      .get("/tasks")\n      .then((res) => res.json() as Task[])\n      .then((tasks) => setTasks(tasks))\n      .catch((err) => window.alert(err));\n  });\n\n  return (\n    <ul>\n      {tasks &&\n        tasks.map((task) => (\n          <li key={task.id}>\n            <input type="checkbox" value={task.isDone} />\n            {task.description}\n          </li>\n        ))}\n    </ul>\n  );\n};\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=src/Todo.test.tsx",title:"src/Todo.test.tsx"},'import { test, expect } from "vitest";\nimport { screen } from "@testing-library/react";\n\nimport { mockServer, renderInContext } from "wasp/client/test";\nimport Todo from "./Todo";\n\nconst { mockApi } = mockServer();\n\nconst mockTasks = [\n  {\n    id: 1,\n    description: "test todo 1",\n    isDone: true,\n    userId: 1,\n  },\n];\n\ntest("handles mock data", async () => {\n  mockApi("/tasks", mockTasks);\n\n  renderInContext(<Todo />);\n\n  await screen.findByText("test todo 1");\n\n  expect(screen.getByRole("checkbox")).toBeChecked();\n\n  screen.debug();\n});\n')))))}k.isMDXComponent=!0}}]);