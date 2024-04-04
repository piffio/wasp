"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[53707],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(b,i(i({ref:t},c),{},{components:n})):r.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84780:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294);const o=e=>r.createElement("span",null,r.createElement("a",{href:"https://discord.gg/rzdnErX"}," Discord "))},46300:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294),o=n(50012);function a(e){let{path:t}=e;const[n]=(0,o.Nk)("docusaurus.tab.js-ts"),a=t.lastIndexOf("{"),i=t.slice(a+1,t.length-1),[l,s]=i.split(","),u=t.slice(0,a);return r.createElement("code",null,u+("js"===n?l:s))}},52527:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905)),a=(n(46300),n(84780));const i={title:"Contributing",sidebar_label:"Contributing",slug:"/contributing"},l=void 0,s={unversionedId:"contributing",id:"version-0.13.11/contributing",title:"Contributing",description:"Any way you want to contribute is a good way, and we'd be happy to meet you! A single entry point for all contributors is the CONTRIBUTING.md file in our Github repo. All the requirements and instructions are there, so please check CONTRIBUTING.md for more details.",source:"@site/versioned_docs/version-0.13.11/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/docs/contributing",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/versioned_docs/version-0.13.11/contributing.md",tags:[],version:"0.13.11",frontMatter:{title:"Contributing",sidebar_label:"Contributing",slug:"/contributing"},sidebar:"docs",previous:{title:"CLI Reference",permalink:"/docs/general/cli"},next:{title:"Telemetry",permalink:"/docs/telemetry"}},u={},c=[],p={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Any way you want to contribute is a good way, and we'd be happy to meet you! A single entry point for all contributors is the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/blob/main/CONTRIBUTING.md"},"CONTRIBUTING.md")," file in our Github repo. All the requirements and instructions are there, so please check ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/blob/main/CONTRIBUTING.md"},"CONTRIBUTING.md")," for more details."),(0,o.kt)("p",null,"Some side notes to make your journey easier:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Join us on ",(0,o.kt)(a.Z,{mdxType:"DiscordLink"})," and let's talk! We can discuss language design, new/existing features, and weather, or you can tell us how you feel about Wasp :).")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Wasp's compiler is built with Haskell. That means you'll need to be somewhat familiar with this language if you'd like to contribute to the compiler itself. But Haskell is just a part of Wasp, and you can contribute to lot of parts that require web dev skills, either by coding or by suggesting how to improve Wasp and its design as a web framework. If you don't have Haskell knowledge (or any dev experience at all) - no problem. There are a lot of JS-related tasks and documentation updates as well!")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If there's something you'd like to bring to our attention, go to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp"},"docs GitHub repo")," and make an issue/PR!"))),(0,o.kt)("p",null,"Happy hacking!"))}m.isMDXComponent=!0}}]);