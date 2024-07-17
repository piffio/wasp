"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[75591],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(a),h=i,c=m["".concat(l,".").concat(h)]||m[h]||d[h]||o;return a?n.createElement(c,r(r({ref:t},u),{},{components:a})):n.createElement(c,r({ref:t},u))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},46300:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),i=a(50012);function o(e){let{path:t}=e;const[a]=(0,i.Nk)("docusaurus.tab.js-ts"),o=t.lastIndexOf("{"),r=t.slice(o+1,t.length-1),[s,l]=r.split(","),p=t.slice(0,o);return n.createElement("code",null,p+("js"===a?s:l))}},81576:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));a(46300);const o={},r="Wasp docs writing guide",s={unversionedId:"writingguide",id:"version-0.11.8/writingguide",title:"Wasp docs writing guide",description:"Our docs are the first touch point for new Wasp users.",source:"@site/versioned_docs/version-0.11.8/writingguide.md",sourceDirName:".",slug:"/writingguide",permalink:"/docs/0.11.8/writingguide",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/versioned_docs/version-0.11.8/writingguide.md",tags:[],version:"0.11.8",frontMatter:{}},l={},p=[{value:"A word of caution",id:"a-word-of-caution",level:2},{value:"Principles",id:"principles",level:2},{value:"Organization",id:"organization",level:2},{value:"Organization of pages",id:"organization-of-pages",level:3},{value:"Organization inside a page",id:"organization-inside-a-page",level:3},{value:"Guide",id:"guide",level:4},{value:"API reference",id:"api-reference",level:4},{value:"General",id:"general",level:4},{value:"Grammar and writing style",id:"grammar-and-writing-style",level:2},{value:"Style",id:"style",level:3},{value:"Grammar",id:"grammar",level:3},{value:"Content and Communication",id:"content-and-communication",level:2},{value:"Processes",id:"processes",level:2},{value:"Possible improvements",id:"possible-improvements",level:2}],u={toc:p},m="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"wasp-docs-writing-guide"},"Wasp docs writing guide"),(0,i.kt)("p",null,"Our docs are the first touch point for new Wasp users.\nIt's the top of our funnel.\nIf we lose them on the docs, they will never get a chance to use Wasp (even if they might like it)."),(0,i.kt)("p",null,"This guide combines the excellent ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/vuejs/v2.vuejs.org/blob/master/writing-guide.md"},"Vue Docs Writing Guide")," and our own learnings from the process of writing documentation.\nWe've copied many of the points (mostly) verbatim, removed some that don't apply to Wasp, and added some that do.\nWe've also changed examples to be more relevant for Wasp."),(0,i.kt)("h2",{id:"a-word-of-caution"},"A word of caution"),(0,i.kt)("p",null,"Writing the docs will take longer than you expect (even if you expect it will take a long time).\nTo make the process as painless as possible, read this guide thoroughly(with particular emphasis on the ",(0,i.kt)("a",{parentName:"p",href:"#processes"},"Processes section"),")."),(0,i.kt)("h2",{id:"principles"},"Principles"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"A feature doesn't exist until it's well-documented.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Respect users' cognitive capacity (i.e., brain power).")," When a user starts reading, they begin with a certain amount of limited brain power. When they run out of brain power, they stop learning.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Cognitive capacity is ",(0,i.kt)("strong",{parentName:"li"},"depleted faster")," by complex sentences, having to learn more than one concept at a time, and abstract examples that don't directly relate to a user's work."),(0,i.kt)("li",{parentName:"ul"},"Cognitive capacity is ",(0,i.kt)("strong",{parentName:"li"},"depleted more slowly")," when we help them feel consistently smart, powerful, and curious. Breaking things down into digestible pieces and minding the flow of the document can help keep them in this state."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Always try to see things from the user's perspective.")," When we understand something thoroughly, it becomes obvious to us. This is called ",(0,i.kt)("em",{parentName:"li"},"the curse of knowledge"),". In order to write good documentation, try to remember what you first needed to know when learning this concept. What jargon did you need to learn? What did you misunderstand? What took a long time to really grasp? Good documentation meets users where they are. It can be helpful to practice explaining the concept to people in person before and during the writing process."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Describe the ",(0,i.kt)("em",{parentName:"strong"},"problem")," first, then the solution.")," Before showing how a feature works, it's important to explain why it exists. Otherwise, users won't have the context to know if this information is important to them (is it a problem they experience?) or what prior knowledge/experience to connect it to.")),(0,i.kt)("h2",{id:"organization"},"Organization"),(0,i.kt)("h3",{id:"organization-of-pages"},"Organization of pages"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Getting Started"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Introduction")," - Provides a less than 10-minute overview of the problems Wasp solves and explains why it exists."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Quick Start")," - Provides short (less than 5 minutes) instructions on installing Wasp and starting the demo app. At the end, it links to the tutorial and the rest of our resources (Discord, editor setup, newsletter)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Editor Setup")," - Provides short instructions (less than 5 minutes) on how to get the most out of Wasp in your editor, and which editors we currently support."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Tutorial"),": Takes users through the journey of building a simple application in Wasp from scratch.\nThe goal is to make users feel smart, powerful, and curious.\nTutorial pages are meant to be read sequentially. Their order depends on how the implemented features depend on each other (e.g., to query the database, the user must first define database models)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Feature pages"),": Explores all of Wasp's features.\nThe features are divided into several sections and don't need to be read sequentially.\nSee ",(0,i.kt)("a",{parentName:"li",href:"#organization-inside-a-page"},"Organization inside a page")," to see how to organize each page.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Data model"),": Goes deeper into the Wasp's central feature - its data model (Entities, Actions, and Queries)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Authentication"),": Covers everything there is to know about authentication in Wasp."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Project setup"),": Explains how to customize and configure Wasp projects, how to run tests, how to set environment variables, etc. It goes into everything you could run into while building a project besides programming."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Advanced Features"),": Describes all the remaining features. This section also follows the rules from ",(0,i.kt)("a",{parentName:"li",href:"#organization-inside-a-page"},"Organization inside a page"),".\nThese are either features that most small apps won't need but are bound to come up in production-ready projects (e.g., deployment, recurring jobs, sending emails) or features useful for apps of all sizes that require more skill/familiarity with Wasp or TypeScript (e.g., Type-safe links)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"General"),": Includes an overview of the Wasp language and the CLI Reference."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Miscellaneous"),": Talks about our vision, ways to contribute, the data we collect, and how to contact us.")),(0,i.kt)("h3",{id:"organization-inside-a-page"},"Organization inside a page"),(0,i.kt)("p",null,"Each feature page is divided into two sections: ",(0,i.kt)("strong",{parentName:"p"},"The guide"),", and ",(0,i.kt)("strong",{parentName:"p"},"The API reference"),"."),(0,i.kt)("h4",{id:"guide"},"Guide"),(0,i.kt)("p",null,"The guide tells a story about a feature and takes the reader through a step-by-step process to get the feature working.\nIt goes through the feature's most important parts and does not have to be exhaustive. The goal is to provide 20% of the knowledge that helps users handle 80% of use cases."),(0,i.kt)("p",null,"The guide is almost a tutorial, the only difference being that it can assume some context for the rest of the application.\nThe text can link to parts of the API reference, but you should avoid such links in most cases.\nWhen you provide them, you also need to provide a context so users know whether they should follow this link on their first reading.\nOtherwise, many users end up exhausting their cognitive capacity link-hopping, trying to fully learn every aspect of a feature before moving on, and as a result, never finish that first read-through of the guide.\nRemember that a smooth read is more important than being thorough.\nWe want to give people the information they need to avoid a frustrating experience, but they can always come back and read further, or Google a less common problem when they encounter it."),(0,i.kt)("h4",{id:"api-reference"},"API reference"),(0,i.kt)("p",null,"The API reference is an exhaustive list of the feature's API and must describe everything:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The Wasp API (e.g., a declaration, mandatory and optional fields)"),(0,i.kt)("li",{parentName:"ol"},"The JavaScript API (e.g., imports, available functions, arguments, etc.)"),(0,i.kt)("li",{parentName:"ol"},"The CLI (i.e. CLI commands, their arguments, and usage examples)")),(0,i.kt)("h4",{id:"general"},"General"),(0,i.kt)("p",null,"Both the guide and the API Reference should be self-sufficient and contain examples showcasing the feature.\nAlways assume that the reader is only reading one or the other.\nThe guide doesn't need to explain everything about the feature, only the most important bits, but the API reference must be exhaustive."),(0,i.kt)("p",null,"Make sure to feature each example in all languages Wasp supports (currently TypeScript and JavaScript) using tabs.\nYou should almost always use tabs, even when there's no difference between the example in TypeScript and the example in JavaScript.\nThis might seem redundant, but it makes our examples future-proof and helps reassure the reader we haven't forgotten about their language."),(0,i.kt)("h2",{id:"grammar-and-writing-style"},"Grammar and writing style"),(0,i.kt)("h3",{id:"style"},"Style"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Headings should describe problems"),', not solutions. For example, a less effective heading might be "The ',(0,i.kt)("inlineCode",{parentName:"li"},"useQuery"),' hook" because it describes a solution.\nA better heading might be "Making Query data reactive" because it provides the context of the problem the ',(0,i.kt)("inlineCode",{parentName:"li"},"useQuery")," hook solves.\nUsers won't start paying attention to the explanation of a feature until they have some idea of why/when they'd use it."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"When you assume knowledge, declare it")," at the beginning and link to resources for the knowledge you expect."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Introduce only one new concept at a time whenever possible")," (including both text and code examples). Some (maybe even many) people will be able to understand multiple concepts at once. Still, many will also become lost - and even those who don't become lost will have depleted more of their cognitive capacity."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Avoid special content blocks for tips and caveats when possible.")," It's generally preferable to blend these more naturally into the main content (e.g., by building on examples to demonstrate an edge case)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Don't include more than two interwoven tips and caveats per page.")," If you find that more than two tips are needed on a page, consider adding a caveats section to address these issues. The guide is meant to be read straight through, and tips and caveats can overwhelm or distract someone trying to understand the base concepts."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Avoid appeals to authority"),' (e.g., "You should do X because that\'s a best practice" or "X is best because it gives you full separation of concerns"). Instead, demonstrate with examples the specific human problems caused and/or solved by a pattern.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"When deciding what to teach first, think of what knowledge provides the best power/effort ratio.")," That means teaching whatever will help users solve the greatest pains or greatest number of problems, with the relatively least effort to learn. This helps learners feel smart, powerful, and curious, so their cognitive capacity will drain more slowly."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Show, don't tell."),' For example, "You can make the data a Query returns reactive using the ',(0,i.kt)("inlineCode",{parentName:"li"},"useQuery"),' hook" (then show import and usage of the ',(0,i.kt)("inlineCode",{parentName:"li"},"useQuery"),' hook), instead of "To make the data Query returns reactive, you can pass it into the ',(0,i.kt)("inlineCode",{parentName:"li"},"useQuery")," hook and destructure the ",(0,i.kt)("inlineCode",{parentName:"li"},"data"),' field from the returned object."'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Almost always avoid humor"),", especially sarcasm and pop culture references, as it doesn't translate well across cultures."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Never assume a more advanced context than you have to.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"In most cases, prefer links between sections of the docs over repeating the same content in multiple sections.")," Some repetition in content is unavoidable and even essential for learning. However, too much repetition also makes the docs more difficult to maintain because a change in the API will require changes in many places, making it easy to miss something. This is a difficult balance to strike."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Specific is better than generic.")," For example, a ",(0,i.kt)("inlineCode",{parentName:"li"},"<BlogPost>")," component example is better than ",(0,i.kt)("inlineCode",{parentName:"li"},"<ComponentA>"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Relatable is better than obscure.")," For example, a ",(0,i.kt)("inlineCode",{parentName:"li"},"<BlogPost>")," component example is better than ",(0,i.kt)("inlineCode",{parentName:"li"},"<CurrencyExchangeSettings>"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Be emotionally relevant.")," Explanations and examples that relate to something people have experience with and care about will always be more effective."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Always prefer simpler language over complex or jargony language.")," For example:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'"You can begin defining an Action by declaring it in Wasp." instead of "In order to define an Action, it must first be declared via a Wasp declaration."'),(0,i.kt)("li",{parentName:"ul"},'"function that returns a function" instead of "higher order function" (while technically correct and more concise, higher order function requires knowledge and context the reader doesn\'t necessarily have)'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Avoid language that invalidates struggle"),', such as "easy", "just", "obviously", etc. For reference, see ',(0,i.kt)("a",{parentName:"li",href:"https://css-tricks.com/words-avoid-educational-writing/"},"Words To Avoid in Educational Writing"),".")),(0,i.kt)("h3",{id:"grammar"},"Grammar"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Don't use emojis (except in discussions).")," Emojis are cute and friendly, but they can be a distraction in documentation. Some emojis even convey different meanings in different cultures. They also make the documentation seem unprofessional and of lower quality."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Don't use memes and funny pictures.")," Everything said about emojis applies to memes as well. It's hard to focus on the text and take it seriously when it contains jokes and memes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Avoid passive voice."),' Instead of "The Wasp app can be deployed...", write "You can deploy the Wasp app..."'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Avoid abbreviations")," in writing and code examples (e.g., ",(0,i.kt)("inlineCode",{parentName:"li"},"attribute")," is better than ",(0,i.kt)("inlineCode",{parentName:"li"},"attr"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"message")," is better than ",(0,i.kt)("inlineCode",{parentName:"li"},"msg"),"), unless you want to specifically reference an abbreviation in the API (e.g., the ",(0,i.kt)("inlineCode",{parentName:"li"},"auth")," declaration). Abbreviation symbols included on standard keyboards (e.g., ",(0,i.kt)("inlineCode",{parentName:"li"},"@"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"#"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"&"),") are OK."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Avoid too many exclamation points.")," False excitement can alienate readers and also make the docs seem less professional."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Address the reader directly."),' Instead of "We can implement a Query..." or "A Query can be implemented..." or "The user can implement a Query...", say "You can implement a Query..."\nThe docs should speak to the reader and address them directly to avoid possible confusion (e.g., Who are we? The Wasp team? The reader together with the Wasp team? etc.).\nUse the word ',(0,i.kt)("em",{parentName:"li"},"user"),' only to refer to the user of the software that your reader is developing.\nYou can sometimes use first-person plural pronouns to refer to the organization (Wasp). For example, "We support both TypeScript and JavaScript" is OK, but "Wasp supports both TypeScript and JavaScript" is usually better.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Avoid using too many pronouns.")," Whenever possible, try to call a thing by its name instead of relying on a previous context. This will sometimes sound strange (it's OK to use pronouns in those cases), but it should work most of the time."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"When referencing a directly following example, use a colon (",(0,i.kt)("inlineCode",{parentName:"strong"},":"),") to end a sentence"),", rather than a period (",(0,i.kt)("inlineCode",{parentName:"li"},"."),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"When referencing the name of a project, prioritize the broader conventions of English over internal branding conventions of that project."),' For example, "webpack" and "npm" both disregard conventions such as "always start a word at the beginning of a sentence with a capital letter," "project names always use Title Case," and "acronyms are always capitalized." Instead, always write "Webpack and NPM" to provide a more consistent experience in the docs and avoid sentences like "If you don\'t want to use Vue CLI, you can use webpack or Rollup directly by installing them via npm or Yarn."'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Do not use Title Case for headings"),' - There\'s research suggesting that sentence case (only the first word of the heading starts with a capital) is superior for legibility and also reduces the cognitive overhead for documentation writers since they don\'t have to try to remember whether to capitalize words like "and", "with", and "about."\nMany of our titles are currently in title-case, we should start phasing those out.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Use the Oxford comma"),' (e.g., "a, b, and c" instead of "a, b and c"). ',(0,i.kt)("img",{parentName:"li",src:"https://raw.githubusercontent.com/vuejs/v2.vuejs.org/master/src/images/oxford-comma.jpg",alt:"Why the Oxford comma is important"}))),(0,i.kt)("h2",{id:"content-and-communication"},"Content and Communication"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Excellence comes from iteration.")," First drafts are always bad, but writing them is a vital part of the process. It's extremely difficult to avoid the slow progression of Bad -> OK -> Good -> Great -> Inspiring -> Transcendent."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},'Only wait until something is "Good" before publishing.')," Vue's guide originally says: \"The community will help you push it further down the chain.\" We don't yet have that luxury, as our community isn't large enough. Still, we can't afford to invest ",(0,i.kt)("em",{parentName:"li"},"too much"),' time into the docs, so "Good" will have to do for now.')),(0,i.kt)("h2",{id:"processes"},"Processes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Ideally, you should write the docs before you implement the feature.")," This will help you see the feature from the user's perspective and better spot the API's deficiencies and improvement potential. If something is difficult to explain, it's most likely difficult to understand. If it is difficult to understand, there might be a better way of designing it."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Try not to get defensive when receiving feedback.")," Our writing can be very personal to us, but if we get upset with the people who help us improve it, they will either stop giving feedback or start limiting the kind of feedback they give."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Proofread your work before showing it to others (and use Grammarly).")," If you show someone work with many spelling/grammar mistakes, you'll get feedback about spelling grammar/mistakes instead of more valuable notes about whether the writing is achieving your goals."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"When you ask people for feedback, tell reviewers:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"What you're trying to do.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"What your fears are.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Which balances you're trying to strike.")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Do your best to come up with a good and straighforward way to say something.")," Again, this will help the reviewer focus on high-level issues instead of rephrasing your sentences."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Read and correct your text several times before submitting it (preferably with some time between the readings).")," This is similar to proofreading but has more to do with content and communication style than grammar.\nA time offset is beneficial because it removes the text from your short-term memory, helping you view it more objectively."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"It's OK to ask AI to improve your text.")," Just make sure to check it and correct it. You should always sign off on the last version."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"When someone reports a problem, there is almost always a problem"),", even if the solution they proposed isn't quite right. Keep asking follow-up questions to learn more."),(0,i.kt)("li",{parentName:"ul"},"People need to feel safe asking questions when contributing/reviewing content. Here's how you can do that:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Thank people for their contributions/reviews, even if you're feeling grumpy.")," For example:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'"Great question!"'),(0,i.kt)("li",{parentName:"ul"},'"Thanks for taking the time to explain. \ud83d\ude42"'),(0,i.kt)("li",{parentName:"ul"},'"This is actually intentional, but thanks for taking the time to contribute. \ud83d\ude0a"'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Listen to what people are saying and mirror if you're not sure you're understanding correctly.")," This can help validate people's feelings and experiences while also understanding if ",(0,i.kt)("em",{parentName:"li"},"you're")," understanding ",(0,i.kt)("em",{parentName:"li"},"them")," correctly."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Use a lot of positive and empathetic emojis.")," It's always better to seem a little strange than mean or impatient.\nThis primarily applies to Wasp team members speaking to outside contributors. Since most of the core team knows each other pretty well, there's no need to go overboard with the emojis and pleasantries."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Kindly communicate rules/boundaries.")," If someone behaves in a way that's abusive/inappropriate, respond only with kindness and maturity, but also make it clear that this behavior is not acceptable and what will happen (according to the code of conduct) if they continue behaving poorly."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"All docs must go through the review cycle, preferably with more than a single reviewer.")," Different people focus on different things. Some of us are great at coming up with examples, others easily come up with analogies and explain complex topics, some have a clear and concise writing style, etc. Therefore, try to get at least two or three people to review your document.")),(0,i.kt)("h2",{id:"possible-improvements"},"Possible improvements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Some parts of our docs don't follow all the guidelines outlined in this document. There's no need to start fixing all the issues right away. We can slowly improve the docs as we edit them."),(0,i.kt)("li",{parentName:"ul"},"We've discussed having a git repo with all the example code in the docs. This should make copying, pasting, testing, and maintaining code snippets easier.")))}d.isMDXComponent=!0}}]);