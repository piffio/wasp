"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[87752],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,g=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return n?i.createElement(g,s(s({ref:t},c),{},{components:n})):i.createElement(g,s({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<r;p++)s[p]=n[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},75849:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));n(44996);const r={title:"CSS Frameworks"},s=void 0,o={unversionedId:"project/css-frameworks",id:"version-0.12.0/project/css-frameworks",title:"CSS Frameworks",description:"Tailwind",source:"@site/versioned_docs/version-0.12.0/project/css-frameworks.md",sourceDirName:"project",slug:"/project/css-frameworks",permalink:"/docs/0.12.0/project/css-frameworks",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/versioned_docs/version-0.12.0/project/css-frameworks.md",tags:[],version:"0.12.0",frontMatter:{title:"CSS Frameworks"},sidebar:"docs",previous:{title:"Dependencies",permalink:"/docs/0.12.0/project/dependencies"},next:{title:"Custom Vite Config",permalink:"/docs/0.12.0/project/custom-vite-config"}},l={},p=[{value:"Tailwind",id:"tailwind",level:2},{value:"Enabling Tailwind Step-by-Step",id:"enabling-tailwind-step-by-step",level:3},{value:"Adding Tailwind Plugins",id:"adding-tailwind-plugins",level:3}],c={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"tailwind"},"Tailwind"),(0,a.kt)("p",null,"To enable support for Tailwind in your project, you need to add two config files \u2014 ",(0,a.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/configuration#configuration-options"},(0,a.kt)("inlineCode",{parentName:"a"},"tailwind.config.cjs"))," and ",(0,a.kt)("inlineCode",{parentName:"p"},"postcss.config.cjs")," \u2014 to the root directory."),(0,a.kt)("p",null,"With these files present, Wasp installs the necessary dependencies and copies your configuration to the generated project. You can then use ",(0,a.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/functions-and-directives#directives"},"Tailwind CSS directives")," in your CSS and Tailwind classes on your React components."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="tree ."',title:'"tree','."':!0},".\n\u251c\u2500\u2500 main.wasp\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u251c\u2500\u2500 Main.css\n\u2502\xa0\xa0 \u251c\u2500\u2500 MainPage.jsx\n\u2502\xa0\xa0 \u251c\u2500\u2500 vite-env.d.ts\n\u2502\xa0\xa0 \u2514\u2500\u2500 waspLogo.png\n\u251c\u2500\u2500 public\n\u251c\u2500\u2500 tsconfig.json\n\u251c\u2500\u2500 vite.config.ts\n# highlight-start\n\u251c\u2500\u2500 postcss.config.cjs\n\u2514\u2500\u2500 tailwind.config.cjs\n# highlight-end\n")),(0,a.kt)("admonition",{title:"Tailwind not working?",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you can not use Tailwind after adding the required config files, make sure to restart ",(0,a.kt)("inlineCode",{parentName:"p"},"wasp start"),". This is sometimes needed to ensure that Wasp picks up the changes and enables Tailwind integration.")),(0,a.kt)("h3",{id:"enabling-tailwind-step-by-step"},"Enabling Tailwind Step-by-Step"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Make sure to use the ",(0,a.kt)("inlineCode",{parentName:"p"},".cjs")," extension for these config files, if you name them with a ",(0,a.kt)("inlineCode",{parentName:"p"},".js")," extension, Wasp will not detect them.")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add ",(0,a.kt)("inlineCode",{parentName:"p"},"./tailwind.config.cjs"),"."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./tailwind.config.cjs"',title:'"./tailwind.config.cjs"'},"const { resolveProjectPath } = require('wasp/dev')\n\n/** @type {import('tailwindcss').Config} */\nmodule.exports = {\n  content: [resolveProjectPath('./src/**/*.{js,jsx,ts,tsx}')],\n  theme: {\n    extend: {},\n  },\n  plugins: [],\n}\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add ",(0,a.kt)("inlineCode",{parentName:"p"},"./postcss.config.cjs"),"."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./postcss.config.cjs"',title:'"./postcss.config.cjs"'},"module.exports = {\n  plugins: {\n    tailwindcss: {},\n    autoprefixer: {},\n  },\n}\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Import Tailwind into your CSS file. For example, in a new project you might import Tailwind into ",(0,a.kt)("inlineCode",{parentName:"p"},"Main.css"),"."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="./src/Main.css" {1-3}',title:'"./src/Main.css"',"{1-3}":!0},"@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n/* ... */\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start using Tailwind \ud83e\udd73"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="./src/MainPage.jsx"',title:'"./src/MainPage.jsx"'},'// ...\n\n<h1 className="text-3xl font-bold underline">\n  Hello world!\n</h1>\n\n// ...\n')))),(0,a.kt)("h3",{id:"adding-tailwind-plugins"},"Adding Tailwind Plugins"),(0,a.kt)("p",null,"To add Tailwind plugins, install them as npm development ",(0,a.kt)("a",{parentName:"p",href:"../project/dependencies"},"dependencies")," and add them to the plugins list in your ",(0,a.kt)("inlineCode",{parentName:"p"},"tailwind.config.cjs")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install -D @tailwindcss/forms\nnpm install -D @tailwindcss/typography\n")),(0,a.kt)("p",null,"and also"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./tailwind.config.cjs" {5-6}',title:'"./tailwind.config.cjs"',"{5-6}":!0},"/** @type {import('tailwindcss').Config} */\nmodule.exports = {\n  // ...\n  plugins: [\n    require('@tailwindcss/forms'),\n    require('@tailwindcss/typography'),\n  ],\n  // ...\n}\n")))}m.isMDXComponent=!0}}]);