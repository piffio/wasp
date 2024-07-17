"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[56189],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(a),u=r,m=p["".concat(s,".").concat(u)]||p[u]||g[u]||o;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},38610:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(44996);const o=e=>n.createElement("div",null,n.createElement("p",{align:"center"},n.createElement("figure",null,n.createElement("img",{style:{width:e.width},alt:e.alt,src:(0,r.Z)(e.source)}),n.createElement("figcaption",{class:"image-caption",style:{fontStyle:"italic",opacity:.6,fontSize:"0.9rem"}},e.caption))))},92908:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(39960);a(44996);const o=()=>n.createElement("span",{className:"in-blog-cta--divider"}," \u2192 "),i=()=>n.createElement("p",{className:"in-blog-cta-link-container"},n.createElement(r.Z,{className:"in-blog-cta--link",to:"https://e44cy1h4s0q.typeform.com/to/ycUzQa5A"},"We are in Beta (try it out)!"),n.createElement(o,null),n.createElement(r.Z,{className:"in-blog-cta--link",to:"https://discord.gg/rzdnErX"},"Join our community"),n.createElement(o,null),n.createElement(r.Z,{className:"in-blog-cta--link",to:"https://wasp-lang.notion.site/Founding-Engineer-at-Wasp-402274568afa4d7eb7f428f8fa2c0816"},"Work with us"))},6217:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));a(39960),a(44996),a(92908),a(70589),a(38610);const o={title:"How and why I got started with Haskell",authors:["shayneczyzewski"],image:"/img/filip-headshot-min.jpeg",tags:["webdev","haskell","language"]},i=void 0,l={permalink:"/blog/2022/08/26/how-and-why-i-got-started-with-haskell",editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/blog/2022-08-26-how-and-why-i-got-started-with-haskell.md",source:"@site/blog/2022-08-26-how-and-why-i-got-started-with-haskell.md",title:"How and why I got started with Haskell",description:"I have been programming professionally for over a decade, using a variety of languages day-to-day including Ada, C, Java, Ruby, Elixir, and JavaScript. I\u2019ve also tried some obscure ones, albeit less frequently and for different purposes: MIPS assembly language and OCaml for academic work (I\u2019m a BS, MS, and PhD dropout in CS), and Zig for some side projects. In short, I like learning new languages (at least at a surface level) and have been exposed to different programming paradigms, including functional.",date:"2022-08-26T00:00:00.000Z",formattedDate:"August 26, 2022",tags:[{label:"webdev",permalink:"/blog/tags/webdev"},{label:"haskell",permalink:"/blog/tags/haskell"},{label:"language",permalink:"/blog/tags/language"}],readingTime:7.575,hasTruncateMarker:!0,authors:[{name:"Shayne Czyzewski",title:"Founding Engineer @ Wasp",url:"https://github.com/shayneczyzewski",imageURL:"https://github.com/shayneczyzewski.png",key:"shayneczyzewski"}],frontMatter:{title:"How and why I got started with Haskell",authors:["shayneczyzewski"],image:"/img/filip-headshot-min.jpeg",tags:["webdev","haskell","language"]},prevItem:{title:"How to get started with Haskell in 2022 (the straightforward way)",permalink:"/blog/2022/09/02/how-to-get-started-with-haskell-in-2022"},nextItem:{title:"How to communicate why your startup is worth joining",permalink:"/blog/2022/08/15/how-to-communicate-why-your-startup-is-worth-joining"}},s={authorsImageUrls:[void 0]},c=[],d={toc:c},p="wrapper";function g(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"I have been programming professionally for over a decade, using a variety of languages day-to-day including Ada, C, Java, Ruby, Elixir, and JavaScript. I\u2019ve also tried some obscure ones, albeit less frequently and for different purposes: MIPS assembly language and OCaml for academic work (I\u2019m a BS, MS, and PhD dropout in CS), and Zig for some side projects. In short, I like learning new languages (at least at a surface level) and have been exposed to different programming paradigms, including functional."),(0,r.kt)("p",null,"Yet, I have never done Haskell. I\u2019ve wanted to learn it since my college days, but never got the time. In late 2021, though, my curiosity took over. I wanted to see for myself if the mystique and the Kool-Aid hype (or hate) around it are justified. :P So, I decided I\u2019d start learning it on the side and also look for a company that uses it as my next gig. That\u2019s how my Haskell journey started, and ",(0,r.kt)("a",{parentName:"p",href:"https://wasp-lang.dev/blog/2021/12/21/shayne-intro"},"how I got into Wasp")," a few months later."))}g.isMDXComponent=!0},70589:(e,t,a)=>{a.d(t,{ZP:()=>l});var n=a(87462),r=(a(67294),a(3905));const o={toc:[]},i="wrapper";function l(e){let{components:t,...a}=e;return(0,r.kt)(i,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Wasp is a configuration language (DSL) for building full-stack web apps with less code and best practices that works alongside React and Node.js. We are on a mission to streamline web app development while empowering developers to continue using the power of code and their favorite tools. We are backed by Y Combinator and engineers from Airbnb, Facebook, and Lyft.")))}l.isMDXComponent=!0}}]);