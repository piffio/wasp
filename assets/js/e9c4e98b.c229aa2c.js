"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[98249],{85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),s=a(86010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>b});var n=a(87462),s=a(67294),r=a(86010),i=a(12466),l=a(16550),o=a(91980),u=a(67392),p=a(50012);function d(e){return function(e){return s.Children.map(e,(e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:s}}=e;return{value:t,label:a,attributes:n,default:s}}))}function c(e){const{values:t,children:a}=e;return(0,s.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function k(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(r),(0,s.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=c(e),[i,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!k({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[o,u]=m({queryString:a,groupId:n}),[d,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,p.Nk)(a);return[n,(0,s.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),y=(()=>{const e=o??d;return k({value:e,tabValues:r})?e:null})();(0,s.useLayoutEffect)((()=>{y&&l(y)}),[y]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!k({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),h(e)}),[u,h,r]),tabValues:r}}var y=a(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:l,selectValue:o,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),c=e=>{const t=e.currentTarget,a=p.indexOf(t),n=u[a].value;n!==l&&(d(t),o(n))},k=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:k,onClick:c},i,{className:(0,r.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function T(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return s.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=h(e);return s.createElement("div",{className:(0,r.Z)("tabs-container",f.tabList)},s.createElement(g,(0,n.Z)({},e,t)),s.createElement(T,(0,n.Z)({},e,t)))}function b(e){const t=(0,y.Z)();return s.createElement(v,(0,n.Z)({key:String(t)},e))}},46300:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294),s=a(50012);function r(e){let{path:t}=e;const[a]=(0,s.Nk)("docusaurus.tab.js-ts"),r=t.lastIndexOf("{"),i=t.slice(r+1,t.length-1),[l,o]=i.split(","),u=t.slice(0,r);return n.createElement("code",null,u+("js"===a?l:o))}},48863:(e,t,a)=>{a.d(t,{A:()=>i,v:()=>l});var n=a(67294),s=a(50012),r=a(49875);function i(e){let{children:t}=e;const[a]=(0,s.Nk)("docusaurus.tab.js-ts");return"ts"===a&&n.createElement(r.Z,null,t)}function l(e){let{children:t}=e;const[a]=(0,s.Nk)("docusaurus.tab.js-ts");return"js"===a&&n.createElement(r.Z,null,t)}},17804:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>d,default:()=>f,frontMatter:()=>p,metadata:()=>c,toc:()=>m});var n=a(87462),s=(a(67294),a(3905)),r=a(46300),i=a(85162),l=a(74866),o=a(44996),u=a(48863);const p={title:"5. Querying the Database"},d=void 0,c={unversionedId:"tutorial/queries",id:"version-0.13.11/tutorial/queries",title:"5. Querying the Database",description:"We want to know which tasks we need to do, so let's list them!",source:"@site/versioned_docs/version-0.13.11/tutorial/05-queries.md",sourceDirName:"tutorial",slug:"/tutorial/queries",permalink:"/docs/tutorial/queries",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/versioned_docs/version-0.13.11/tutorial/05-queries.md",tags:[],version:"0.13.11",sidebarPosition:5,frontMatter:{title:"5. Querying the Database"},sidebar:"docs",previous:{title:"4. Database Entities",permalink:"/docs/tutorial/entities"},next:{title:"6. Modifying Data",permalink:"/docs/tutorial/actions"}},k={},m=[{value:"Defining the Query",id:"defining-the-query",level:2},{value:"Declaring a Query",id:"declaring-a-query",level:3},{value:"Implementing a Query",id:"implementing-a-query",level:3},{value:"Invoking the Query On the Frontend",id:"invoking-the-query-on-the-frontend",level:2}],h={toc:m},y="wrapper";function f(e){let{components:t,...a}=e;return(0,s.kt)(y,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"We want to know which tasks we need to do, so let's list them!"),(0,s.kt)("p",null,"The primary way of working with Entities in Wasp is with ",(0,s.kt)("a",{parentName:"p",href:"../data-model/operations/overview"},"Queries and Actions"),", collectively known as ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"Operations")),"."),(0,s.kt)("p",null,"Queries are used to read an entity, while Actions are used to create, modify, and delete entities. Since we want to list the tasks, we'll want to use a Query."),(0,s.kt)("p",null,"To list the tasks, you must:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Create a Query that fetches the tasks from the database."),(0,s.kt)("li",{parentName:"ol"},"Update the ",(0,s.kt)(r.Z,{path:"MainPage.{jsx,tsx}",mdxType:"FileExtSwitcher"})," to use that Query and display the results.")),(0,s.kt)("h2",{id:"defining-the-query"},"Defining the Query"),(0,s.kt)("p",null,"We'll create a new Query called ",(0,s.kt)("inlineCode",{parentName:"p"},"getTasks"),". We'll need to declare the Query in the Wasp file and write its implementation in ",(0,s.kt)(u.v,{mdxType:"ShowForJs"},"JS"),(0,s.kt)(u.A,{mdxType:"ShowForTs"},"TS"),"."),(0,s.kt)("h3",{id:"declaring-a-query"},"Declaring a Query"),(0,s.kt)("p",null,"We need to add a ",(0,s.kt)("strong",{parentName:"p"},"query")," declaration to ",(0,s.kt)("inlineCode",{parentName:"p"},"main.wasp")," so that Wasp knows it exists:"),(0,s.kt)(l.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'// ...\n\nquery getTasks {\n  // Specifies where the implementation for the query function is.\n  // The path `@src/queries` resolves to `src/queries.js`.\n  // No need to specify an extension.\n  fn: import { getTasks } from "@src/queries",\n  // Tell Wasp that this query reads from the `Task` entity. Wasp will\n  // automatically update the results of this query when tasks are modified.\n  entities: [Task]\n}\n'))),(0,s.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'// ...\n\nquery getTasks {\n  // Specifies where the implementation for the query function is.\n  // The path `@src/queries` resolves to `src/queries.ts`.\n  // No need to specify an extension.\n  fn: import { getTasks } from "@src/queries",\n  // Tell Wasp that this query reads from the `Task` entity. Wasp will\n  // automatically update the results of this query when tasks are modified.\n  entities: [Task]\n}\n')))),(0,s.kt)("h3",{id:"implementing-a-query"},"Implementing a Query"),(0,s.kt)(u.v,{mdxType:"ShowForJs"},(0,s.kt)("p",null,"Next, create a new file called ",(0,s.kt)("inlineCode",{parentName:"p"},"src/queries.js")," and define the JavaScript function we've just imported in our ",(0,s.kt)("inlineCode",{parentName:"p"},"query")," declaration:")),(0,s.kt)(u.A,{mdxType:"ShowForTs"},(0,s.kt)("p",null,"Next, create a new file called ",(0,s.kt)("inlineCode",{parentName:"p"},"src/queries.ts")," and define the TypeScript function we've just imported in our ",(0,s.kt)("inlineCode",{parentName:"p"},"query")," declaration:")),(0,s.kt)(l.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/queries.js"',title:'"src/queries.js"'},"export const getTasks = async (args, context) => {\n  return context.entities.Task.findMany({\n    orderBy: { id: 'asc' },\n  })\n}\n"))),(0,s.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/queries.ts"',title:'"src/queries.ts"'},"import { Task } from 'wasp/entities'\nimport { type GetTasks } from 'wasp/server/operations'\n\nexport const getTasks: GetTasks<void, Task[]> = async (args, context) => {\n  return context.entities.Task.findMany({\n    orderBy: { id: 'asc' },\n  })\n}\n")),(0,s.kt)("p",null,"Wasp automatically generates the types ",(0,s.kt)("inlineCode",{parentName:"p"},"GetTasks")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"Task")," based on the contents of ",(0,s.kt)("inlineCode",{parentName:"p"},"main.wasp"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"Task")," is a type corresponding to the ",(0,s.kt)("inlineCode",{parentName:"li"},"Task")," entity we've defined in ",(0,s.kt)("inlineCode",{parentName:"li"},"main.wasp"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"GetTasks")," is a generic type Wasp automatically generated based on the ",(0,s.kt)("inlineCode",{parentName:"li"},"getTasks")," Query we've defined in ",(0,s.kt)("inlineCode",{parentName:"li"},"main.wasp"),".")),(0,s.kt)("p",null,"You can use these types to specify the Query's input and output types. This Query doesn't expect any arguments (its input type is ",(0,s.kt)("inlineCode",{parentName:"p"},"void"),"), but it does return an array of tasks (its output type is ",(0,s.kt)("inlineCode",{parentName:"p"},"Task[]"),")."),(0,s.kt)("p",null,"Annotating the Queries is optional, but highly recommended because doing so enables ",(0,s.kt)("strong",{parentName:"p"},"full-stack type safety"),". We'll see what this means in the next step."))),(0,s.kt)("p",null,"Query function parameters:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"args: object")," "),(0,s.kt)("p",{parentName:"li"},"The arguments the caller passes to the Query.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"context")),(0,s.kt)("p",{parentName:"li"},"An object with extra information injected by Wasp. Its type depends on the Query declaration."))),(0,s.kt)("p",null,"Since the Query declaration in ",(0,s.kt)("inlineCode",{parentName:"p"},"main.wasp")," says that the ",(0,s.kt)("inlineCode",{parentName:"p"},"getTasks")," Query uses ",(0,s.kt)("inlineCode",{parentName:"p"},"Task")," entity, Wasp injected a ",(0,s.kt)("a",{parentName:"p",href:"https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/crud"},"Prisma client")," for the ",(0,s.kt)("inlineCode",{parentName:"p"},"Task")," entity as ",(0,s.kt)("inlineCode",{parentName:"p"},"context.entities.Task")," - we used it above to fetch all the tasks from the database."),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Queries and Actions are NodeJS functions executed on the server.")),(0,s.kt)("h2",{id:"invoking-the-query-on-the-frontend"},"Invoking the Query On the Frontend"),(0,s.kt)("p",null,"While we implement Queries on the server, Wasp generates client-side functions that automatically take care of serialization, network calls, and cache invalidation, allowing you to call the server code like it's a regular function."),(0,s.kt)("p",null,"This makes it easy for us to use the ",(0,s.kt)("inlineCode",{parentName:"p"},"getTasks")," Query we just created in our React component:"),(0,s.kt)(l.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'{1,4-13,16-35} title="src/MainPage.jsx"',"{1,4-13,16-35}":!0,title:'"src/MainPage.jsx"'},"import { getTasks, useQuery } from 'wasp/client/operations'\n\nexport const MainPage = () => {\n  const { data: tasks, isLoading, error } = useQuery(getTasks)\n\n  return (\n    <div>\n      {tasks && <TasksList tasks={tasks} />}\n\n      {isLoading && 'Loading...'}\n      {error && 'Error: ' + error}\n    </div>\n  )\n}\n\nconst TaskView = ({ task }) => {\n  return (\n    <div>\n      <input type=\"checkbox\" id={String(task.id)} checked={task.isDone} />\n      {task.description}\n    </div>\n  )\n}\n\nconst TasksList = ({ tasks }) => {\n  if (!tasks?.length) return <div>No tasks</div>\n\n  return (\n    <div>\n      {tasks.map((task, idx) => (\n        <TaskView task={task} key={idx} />\n      ))}\n    </div>\n  )\n}\n"))),(0,s.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'{1-2,5-14,17-36} title="src/MainPage.tsx"',"{1-2,5-14,17-36}":!0,title:'"src/MainPage.tsx"'},"import { Task } from 'wasp/entities'\nimport { getTasks, useQuery } from 'wasp/client/operations'\n\nexport const MainPage = () => {\n  const { data: tasks, isLoading, error } = useQuery(getTasks)\n\n  return (\n    <div>\n      {tasks && <TasksList tasks={tasks} />}\n\n      {isLoading && 'Loading...'}\n      {error && 'Error: ' + error}\n    </div>\n  )\n}\n\nconst TaskView = ({ task }: { task: Task }) => {\n  return (\n    <div>\n      <input type=\"checkbox\" id={String(task.id)} checked={task.isDone} />\n      {task.description}\n    </div>\n  )\n}\n\nconst TasksList = ({ tasks }: { tasks: Task[] }) => {\n  if (!tasks?.length) return <div>No tasks</div>\n\n  return (\n    <div>\n      {tasks.map((task, idx) => (\n        <TaskView task={task} key={idx} />\n      ))}\n    </div>\n  )\n}\n")))),(0,s.kt)("p",null,"Most of this code is regular React, the only exception being the ",(0,s.kt)(u.v,{mdxType:"ShowForJs"},"two"),(0,s.kt)(u.A,{mdxType:"ShowForTs"},"three")," special ",(0,s.kt)("inlineCode",{parentName:"p"},"wasp")," imports:"),(0,s.kt)(u.v,{mdxType:"ShowForJs"},(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"getTasks")," - The client-side Query function Wasp generated based on the ",(0,s.kt)("inlineCode",{parentName:"li"},"getTasks")," declaration in ",(0,s.kt)("inlineCode",{parentName:"li"},"main.wasp"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"useQuery")," - Wasp's ",(0,s.kt)("a",{parentName:"li",href:"../data-model/operations/queries#the-usequery-hook-1"},"useQuery")," React hook, which is based on ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/tannerlinsley/react-query"},"react-query"),"'s hook with the same name."))),(0,s.kt)(u.A,{mdxType:"ShowForTs"},(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"getTasks")," - The client-side Query function Wasp generated based on the ",(0,s.kt)("inlineCode",{parentName:"li"},"getTasks")," declaration in ",(0,s.kt)("inlineCode",{parentName:"li"},"main.wasp"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"useQuery")," - Wasp's ",(0,s.kt)("a",{parentName:"li",href:"../data-model/operations/queries#the-usequery-hook-1"},"useQuery")," React hook, which is based on ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/tannerlinsley/react-query"},"react-query"),"'s hook with the same name."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"Task")," - The type for the Task entity defined in ",(0,s.kt)("inlineCode",{parentName:"li"},"main.wasp"),".")),(0,s.kt)("p",null,"Notice how you don't need to annotate the type of the Query's return value: Wasp uses the types you defined while implementing the Query for the generated client-side function. This is ",(0,s.kt)("strong",{parentName:"p"},"full-stack type safety"),": the types on the client always match the types on the server.")),(0,s.kt)("p",null,"We could have called the Query directly using ",(0,s.kt)("inlineCode",{parentName:"p"},"getTasks()"),", but the ",(0,s.kt)("inlineCode",{parentName:"p"},"useQuery")," hook makes it reactive: React will re-render the component every time the Query changes. Remember that Wasp automatically refreshes Queries whenever the data is modified."),(0,s.kt)("p",null,'With these changes, you should be seeing the text "No tasks" on the screen:'),(0,s.kt)("img",{alt:"Todo App - No Tasks",src:(0,o.Z)("img/todo-app-no-tasks.png"),style:{border:"1px solid black"}}),(0,s.kt)("p",null,"We'll create a form to add tasks in the next step \ud83e\ude84"))}f.isMDXComponent=!0}}]);