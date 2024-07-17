"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[84416],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),u=i,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:i,o[1]=p;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},46300:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),i=n(50012);function r(e){let{path:t}=e;const[n]=(0,i.Nk)("docusaurus.tab.js-ts"),r=t.lastIndexOf("{"),o=t.slice(r+1,t.length-1),[p,l]=o.split(","),s=t.slice(0,r);return a.createElement("code",null,s+("js"===n?p:l))}},87587:(e,t,n)=>{n.d(t,{Jp:()=>r,aH:()=>o});var a=n(67294);const i=e=>{let{color:t,children:n}=e;return a.createElement("span",{style:{border:`2px solid ${t}`,display:"inline-block",padding:"0.2em 0.4em",color:t,borderRadius:"0.4em",fontSize:"0.8em",lineHeight:"1",fontWeight:"bold"}},n)};function r(){return a.createElement(i,{color:"#0b62f5"},"internal")}function o(){return a.createElement(i,{color:"#f59e0b"},"required")}},24134:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),i=(n(67294),n(3905)),r=(n(46300),n(87587));const o={title:"Customizing the App"},p=void 0,l={unversionedId:"project/customizing-app",id:"version-0.14.0/project/customizing-app",title:"Customizing the App",description:"Each Wasp project can have only one app type declaration. It is used to configure your app and its components.",source:"@site/versioned_docs/version-0.14.0/project/customizing-app.md",sourceDirName:"project",slug:"/project/customizing-app",permalink:"/docs/project/customizing-app",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/versioned_docs/version-0.14.0/project/customizing-app.md",tags:[],version:"0.14.0",frontMatter:{title:"Customizing the App"},sidebar:"docs",previous:{title:"Starter Templates",permalink:"/docs/project/starter-templates"},next:{title:"Client Config",permalink:"/docs/project/client-config"}},s={},c=[{value:"Changing the App Title",id:"changing-the-app-title",level:3},{value:"Adding Additional Lines to the Head",id:"adding-additional-lines-to-the-head",level:3},{value:"API Reference",id:"api-reference",level:2}],d={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Each Wasp project can have only one ",(0,i.kt)("inlineCode",{parentName:"p"},"app")," type declaration. It is used to configure your app and its components."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wasp"},'app todoApp {\n  wasp: {\n    version: "^0.13.0"\n  },\n  title: "ToDo App",\n  head: [\n    "<link rel=\\"stylesheet\\" href=\\"https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap\\" />"\n  ]\n}\n')),(0,i.kt)("p",null,"We'll go through some common customizations you might want to do to your app. For more details on each of the fields, check out the ",(0,i.kt)("a",{parentName:"p",href:"#api-reference"},"API Reference"),"."),(0,i.kt)("h3",{id:"changing-the-app-title"},"Changing the App Title"),(0,i.kt)("p",null,"You may want to change the title of your app, which appears in the browser tab, next to the favicon. You can change it by changing the ",(0,i.kt)("inlineCode",{parentName:"p"},"title")," field of your ",(0,i.kt)("inlineCode",{parentName:"p"},"app")," declaration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wasp"},'app myApp {\n  wasp: {\n    version: "^0.13.0"\n  },\n  title: "BookFace"\n}\n')),(0,i.kt)("h3",{id:"adding-additional-lines-to-the-head"},"Adding Additional Lines to the Head"),(0,i.kt)("p",null,"If you are looking to add additional style sheets or scripts to your app, you can do so by adding them to the ",(0,i.kt)("inlineCode",{parentName:"p"},"head")," field of your ",(0,i.kt)("inlineCode",{parentName:"p"},"app")," declaration."),(0,i.kt)("p",null,"An example of adding extra style sheets and scripts:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wasp"},'app myApp {\n  wasp: {\n    version: "^0.13.0"\n  },\n  title: "My App",\n  head: [  // optional\n    "<link rel=\\"stylesheet\\" href=\\"https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap\\" />",\n    "<script src=\\"https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js\\"><\/script>",\n    "<meta name=\\"viewport\\" content=\\"minimum-scale=1, initial-scale=1, width=device-width\\" />"\n  ]\n}\n')),(0,i.kt)("h2",{id:"api-reference"},"API Reference"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wasp"},'app todoApp {\n  wasp: {\n    version: "^0.13.0"\n  },\n  title: "ToDo App",\n  head: [\n    "<link rel=\\"stylesheet\\" href=\\"https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap\\" />"\n  ],\n  auth: {\n    // ...\n  },\n  client: {\n    // ...\n  },\n  server: {\n    // ...\n  },\n  db: {\n    // ...\n  },\n  emailSender: {\n    // ...\n  },\n  webSocket: {\n    // ...\n  }\n}\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"app")," declaration has the following fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"wasp: dict")," ",(0,i.kt)(r.aH,{mdxType:"Required"}),"\nWasp compiler configuration. It is a dictionary with a single field:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"version: string")," ",(0,i.kt)(r.aH,{mdxType:"Required"})),(0,i.kt)("p",{parentName:"li"},"The version specifies which versions of Wasp are compatible with the app. It should contain a valid ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/npm/node-semver#ranges"},"SemVer range")),(0,i.kt)("admonition",{parentName:"li",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For now, the version field only supports caret ranges (i.e., ",(0,i.kt)("inlineCode",{parentName:"p"},"^x.y.z"),"). Support for the full specification will come in a future version of Wasp"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"title: string")," ",(0,i.kt)(r.aH,{mdxType:"Required"})),(0,i.kt)("p",{parentName:"li"},"Title of your app. It will appear in the browser tab, next to the favicon.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"head: [string]")),(0,i.kt)("p",{parentName:"li"},"List of additional lines (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"<link>")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"<script>")," tags) to be included in the ",(0,i.kt)("inlineCode",{parentName:"p"},"<head>")," of your HTML document."))),(0,i.kt)("p",null,"The rest of the fields are covered in dedicated sections of the docs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"auth: dict")),(0,i.kt)("p",{parentName:"li"},"Authentication configuration. Read more in the ",(0,i.kt)("a",{parentName:"p",href:"../auth/overview"},"authentication section")," of the docs.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"client: dict")),(0,i.kt)("p",{parentName:"li"},"Configuration for the client side of your app. Read more in the ",(0,i.kt)("a",{parentName:"p",href:"../project/client-config"},"client configuration section")," of the docs.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"server: dict")),(0,i.kt)("p",{parentName:"li"},"Configuration for the server side of your app. Read more in the ",(0,i.kt)("a",{parentName:"p",href:"../project/server-config"},"server configuration section")," of the docs.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"db: dict")),(0,i.kt)("p",{parentName:"li"},"Database configuration. Read more in the ",(0,i.kt)("a",{parentName:"p",href:"../data-model/backends"},"database configuration section")," of the docs.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"emailSender: dict")),(0,i.kt)("p",{parentName:"li"},"Email sender configuration. Read more in the ",(0,i.kt)("a",{parentName:"p",href:"../advanced/email"},"email sending section")," of the docs.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"webSocket: dict")),(0,i.kt)("p",{parentName:"li"},"WebSocket configuration. Read more in the ",(0,i.kt)("a",{parentName:"p",href:"../advanced/web-sockets"},"WebSocket section")," of the docs."))))}u.isMDXComponent=!0}}]);