"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[99499],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46300:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(50012);function i(e){let{path:t}=e;const[n]=(0,r.Nk)("docusaurus.tab.js-ts"),i=t.lastIndexOf("{"),o=t.slice(i+1,t.length-1),[s,l]=o.split(","),p=t.slice(0,i);return a.createElement("code",null,p+("js"===n?s:l))}},47387:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));n(46300);const i={title:"Vision"},o=void 0,s={unversionedId:"vision",id:"version-0.13.0/vision",title:"Vision",description:"With Wasp, we want to make developing web apps easy and enjoyable, for novices and experts in web development alike.",source:"@site/versioned_docs/version-0.13.0/vision.md",sourceDirName:".",slug:"/vision",permalink:"/docs/0.13.0/vision",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/versioned_docs/version-0.13.0/vision.md",tags:[],version:"0.13.0",frontMatter:{title:"Vision"},sidebar:"docs",previous:{title:"Telemetry",permalink:"/docs/0.13.0/telemetry"},next:{title:"Contact",permalink:"/docs/0.13.0/contact"}},l={},p=[],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"With Wasp, we want to make developing web apps easy and enjoyable, for novices and experts in web development alike."),(0,r.kt)("p",null,"Ideal we are striving for is that programming in Wasp feels like describing an app using a human language - like writing a specification document where you describe primarily your requirements and as little implementation details as possible.\nCreating a new production-ready web app should be easy and deploying it to production should be straightforward."),(0,r.kt)("p",null,"That is why we believe Wasp needs to be a programming language (DSL) and not a library - we want to capture all parts of the web app into one integrated system that is perfectly tailored just for that purpose.",(0,r.kt)("br",{parentName:"p"}),"\n",'On the other hand, we believe that trying to capture every single detail in one language would not be reasonable.\nThere are solutions out there that work very well for the specific task they aim to solve (React for web components, CSS/HTML for design/markup, JS/TS for logic, ...) and we don\'t want to replace them with Wasp.\nInstead, we see Wasp as a declarative "glue" code uniting all these specific solutions and providing a higher-level notion of the web app above them.'),(0,r.kt)("p",null,"Wasp is still early in its development and therefore far from where we imagine it will be in the future.\nThis is what we imagine:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Declarative, static language")," with simple basic rules and ",(0,r.kt)("strong",{parentName:"li"},"that understands a lot of web app concepts"),' - "horizontal language". Supports multiple files/modules, libraries.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Integrates seamlessly with the most popular technologies")," for building specific, more complex parts of the web app (React, CSS, JS, ...).\nThey can be used inline (mixed with Wasp code) or provided via external files."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Has hatches (escape mechanisms) that allow you to customize your web app")," in all the right places, but remain hidden until you need them."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Entity (data model) is a first-class citizen")," - defined via custom Wasp syntax and it integrates very closely with the rest of the features, serving as one of the central concepts around which everything is built."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Out of the box")," support for CRUD UI based on the Entities, to get you quickly going, but also customizable to some level."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},'"Smart" operations (queries and actions)')," that in most cases automatically figure out when to update, and if not it is easy to define custom logic to compensate for that. User worries about client-server gap as little as possible."),(0,r.kt)("li",{parentName:"ul"},"Support, directly in Wasp, for ",(0,r.kt)("strong",{parentName:"li"},"declaratively defining simple components and operations"),"."),(0,r.kt)("li",{parentName:"ul"},"Besides Wasp as a programming language, there will also be a ",(0,r.kt)("strong",{parentName:"li"},"visual builder that generates/edits Wasp code"),", allowing non-developers to participate in development. Since Wasp is declarative, we imagine such builder to naturally follow from Wasp language."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Server side rendering, caching, packaging, security"),", ... -> all those are taken care of by Wasp.\nYou tell Wasp what you want, and Wasp figures out how to do it."),(0,r.kt)("li",{parentName:"ul"},"As ",(0,r.kt)("strong",{parentName:"li"},"simple deployment to production/staging")," as it gets."),(0,r.kt)("li",{parentName:"ul"},"While it comes with the official implementation(s), ",(0,r.kt)("strong",{parentName:"li"},"Wasp language will not be coupled with the single implementation"),".\nOthers can provide implementations that compile to different web app stacks.")))}d.isMDXComponent=!0}}]);