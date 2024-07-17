"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[36011],{85162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(86010);const i={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,s),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),i=a(86010),s=a(12466),l=a(16550),o=a(91980),u=a(67392),c=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=d(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[o,u]=b({queryString:a,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),f=(()=>{const e=o??p;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),h(e)}),[u,h,i]),tabValues:i}}var f=a(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:l,selectValue:o,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==l&&(p(t),o(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},s,{className:(0,i.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":l===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:n}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=h(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",g.tabList)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(k,(0,n.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},48863:(e,t,a)=>{a.d(t,{A:()=>s,v:()=>l});var n=a(67294),r=a(50012),i=a(49875);function s(e){let{children:t}=e;const[a]=(0,r.Nk)("docusaurus.tab.js-ts");return"ts"===a&&n.createElement(i.Z,null,t)}function l(e){let{children:t}=e;const[a]=(0,r.Nk)("docusaurus.tab.js-ts");return"js"===a&&n.createElement(i.Z,null,t)}},56492:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),i=a(85162),s=a(74866),l=a(48863);const o={title:"Static Asset Handling"},u=void 0,c={unversionedId:"project/static-assets",id:"version-0.11.8/project/static-assets",title:"Static Asset Handling",description:"Importing Asset as URL",source:"@site/versioned_docs/version-0.11.8/project/static-assets.md",sourceDirName:"project",slug:"/project/static-assets",permalink:"/docs/0.11.8/project/static-assets",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/versioned_docs/version-0.11.8/project/static-assets.md",tags:[],version:"0.11.8",frontMatter:{title:"Static Asset Handling"},sidebar:"docs",previous:{title:"Server Config",permalink:"/docs/0.11.8/project/server-config"},next:{title:"Env Variables",permalink:"/docs/0.11.8/project/env-vars"}},p={},d=[{value:"Importing Asset as URL",id:"importing-asset-as-url",level:2},{value:"The <code>public</code> Directory",id:"the-public-directory",level:2}],m={toc:d},b="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(b,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"importing-asset-as-url"},"Importing Asset as URL"),(0,r.kt)("p",null,"Importing a static asset (e.g. an image) will return its URL. For example:"),(0,r.kt)(s.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/client/App.jsx"',title:'"src/client/App.jsx"'},"import imgUrl from './img.png'\n\nfunction App() {\n  return <img src={imgUrl} alt=\"img\" />\n}\n"))),(0,r.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/client/App.tsx"',title:'"src/client/App.tsx"'},"import imgUrl from './img.png'\n\nfunction App() {\n  return <img src={imgUrl} alt=\"img\" />\n}\n")))),(0,r.kt)("p",null,"For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"imgUrl")," will be ",(0,r.kt)("inlineCode",{parentName:"p"},"/img.png")," during development, and become ",(0,r.kt)("inlineCode",{parentName:"p"},"/assets/img.2d8efhg.png")," in the production build."),(0,r.kt)("p",null,"This is what you want to use most of the time, as it ensures that the asset file exists and is included in the bundle."),(0,r.kt)("p",null,"We are using Vite under the hood, read more about importing static assets in Vite's ",(0,r.kt)("a",{parentName:"p",href:"https://vitejs.dev/guide/assets.html#importing-asset-as-url"},"docs"),"."),(0,r.kt)("h2",{id:"the-public-directory"},"The ",(0,r.kt)("inlineCode",{parentName:"h2"},"public")," Directory"),(0,r.kt)("p",null,"If you have assets that are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Never referenced in source code (e.g. robots.txt)"),(0,r.kt)("li",{parentName:"ul"},"Must retain the exact same file name (without hashing)"),(0,r.kt)("li",{parentName:"ul"},"...or you simply don't want to have to import an asset first just to get its URL")),(0,r.kt)("p",null,"Then you can place the asset in a special ",(0,r.kt)("inlineCode",{parentName:"p"},"public")," directory in the ",(0,r.kt)("inlineCode",{parentName:"p"},"client")," folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"src\n\u2514\u2500\u2500 client\n    \u251c\u2500\u2500 public\n    \u2502   \u251c\u2500\u2500 favicon.ico\n    \u2502   \u2514\u2500\u2500 robots.txt\n    \u2514\u2500\u2500 ...\n")),(0,r.kt)("p",null,"Assets in this directory will be served at root path ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," during dev, and copied to the root of the dist directory as-is."),(0,r.kt)("p",null,"For example, if you have a file ",(0,r.kt)("inlineCode",{parentName:"p"},"favicon.ico")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"public")," directory, and your app is hosted at ",(0,r.kt)("inlineCode",{parentName:"p"},"https://myapp.com"),", it will be made available at ",(0,r.kt)("inlineCode",{parentName:"p"},"https://myapp.com/favicon.ico"),"."),(0,r.kt)("admonition",{title:"Usage in client code",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Note that:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"You should always reference public assets using root absolute path - for example, ",(0,r.kt)("inlineCode",{parentName:"li"},"src/client/public/icon.png")," should be referenced in source code as ",(0,r.kt)("inlineCode",{parentName:"li"},"/icon.png"),"."),(0,r.kt)("li",{parentName:"ul"},"Assets in the ",(0,r.kt)("inlineCode",{parentName:"li"},"public")," directory ",(0,r.kt)("strong",{parentName:"li"},"cannot be imported")," from ",(0,r.kt)(l.v,{mdxType:"ShowForJs"},"JavaScript"),(0,r.kt)(l.A,{mdxType:"ShowForTs"},"TypeScript"),"."))))}h.isMDXComponent=!0}}]);