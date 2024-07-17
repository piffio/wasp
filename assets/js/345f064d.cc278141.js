"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[11099],{3905:(e,t,o)=>{o.d(t,{Zo:()=>h,kt:()=>c});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},h=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=u(o),m=n,c=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return o?a.createElement(c,r(r({ref:t},h),{},{components:o})):a.createElement(c,r({ref:t},h))}));function c(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,r[1]=s;for(var u=2;u<i;u++)r[u]=o[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},38610:(e,t,o)=>{o.d(t,{Z:()=>i});var a=o(67294),n=o(44996);const i=e=>a.createElement("div",null,a.createElement("p",{align:"center"},a.createElement("figure",null,a.createElement("img",{style:{width:e.width},alt:e.alt,src:(0,n.Z)(e.source)}),a.createElement("figcaption",{class:"image-caption",style:{fontStyle:"italic",opacity:.6,fontSize:"0.9rem"}},e.caption))))},5349:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var a=o(87462),n=(o(67294),o(3905)),i=o(38610);const r={title:"On the Importance of RFCs in Programming",authors:["matijasos"],image:"/img/writing-rfcs/rfc-prophet.png",tags:["programming","clean-code"]},s=void 0,l={permalink:"/blog/2023/12/05/writing-rfcs",editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/blog/2023-12-05-writing-rfcs.md",source:"@site/blog/2023-12-05-writing-rfcs.md",title:"On the Importance of RFCs in Programming",description:"Imagine you\u2019ve been tasked to implement a sizeable new feature for the product you\u2019re working on. That\u2019s the opportunity you\u2019ve been waiting for - everybody will see what a 10x developer you are! You open a list of the coolest new libraries and design patterns you\u2019ve wanted to try out and get right into it, full \u201cbasement\u201d mode. One week later, you victoriously emerge and present your perfect pull request!",date:"2023-12-05T00:00:00.000Z",formattedDate:"December 5, 2023",tags:[{label:"programming",permalink:"/blog/tags/programming"},{label:"clean-code",permalink:"/blog/tags/clean-code"}],readingTime:13.185,hasTruncateMarker:!1,authors:[{name:"Matija Sosic",title:"Co-founder & CEO @ Wasp",url:"https://github.com/matijasos",email:"matija@wasp-lang.dev",imageURL:"https://github.com/matijasos.png",key:"matijasos"}],frontMatter:{title:"On the Importance of RFCs in Programming",authors:["matijasos"],image:"/img/writing-rfcs/rfc-prophet.png",tags:["programming","clean-code"]},prevItem:{title:"Wasp Launch Week #5: Waspnado \ud83d\udc1d \ud83c\udf2a\ufe0f",permalink:"/blog/2024/01/23/wasp-launch-week-five"},nextItem:{title:"A Guide to Windows Development with Wasp & WSL",permalink:"/blog/2023/11/21/guide-windows-development-wasp-wsl"}},u={authorsImageUrls:[void 0]},h=[{value:"So, what is an RFC?",id:"so-what-is-an-rfc",level:2},{value:"When should I write RFC, and when can I skip it?",id:"when-should-i-write-rfc-and-when-can-i-skip-it",level:2},{value:"It sounds useful. But what\u2019s in it for me?",id:"it-sounds-useful-but-whats-in-it-for-me",level:2},{value:"Ok, ok, I\u2019m sold! So, how do I go about writing one?",id:"ok-ok-im-sold-so-how-do-i-go-about-writing-one",level:2},{value:"Metadata \u2317",id:"metadata-",level:2},{value:"The problem \ud83e\udd14",id:"the-problem-",level:2},{value:"Non-goals \ud83d\uded1",id:"non-goals-",level:3},{value:"Solution &amp; Implementation \ud83d\udee0\ufe0f",id:"solution--implementation-\ufe0f",level:2},{value:"Write pseudocode",id:"write-pseudocode",level:3},{value:"Find out how are others doing it",id:"find-out-how-are-others-doing-it",level:3},{value:"Leave things unfinished &amp; don&#39;t make it perfect",id:"leave-things-unfinished--dont-make-it-perfect",level:3},{value:"Remarks &amp; open questions \ud83c\udfaf",id:"remarks--open-questions-",level:2},{value:"Now I know when and how to write an RFC! Do you have any templates I could use as a starting point?",id:"now-i-know-when-and-how-to-write-an-rfc-do-you-have-any-templates-i-could-use-as-a-starting-point",level:2},{value:"What tool should I use to write my RFCs? There are so many choices!",id:"what-tool-should-i-use-to-write-my-rfcs-there-are-so-many-choices",level:2},{value:"Summary",id:"summary",level:2}],p={toc:h},d="wrapper";function m(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Imagine you\u2019ve been tasked to implement a sizeable new feature for the product you\u2019re working on. That\u2019s the opportunity you\u2019ve been waiting for - everybody will see what a 10x developer you are! You open a list of the coolest new libraries and design patterns you\u2019ve wanted to try out and get right into it, full \u201cbasement\u201d mode. One week later, you victoriously emerge and present your perfect pull request!"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"But then, the senior dev in a team immediately rejects it - ",(0,n.kt)("em",{parentName:"strong"},"\u201cToo complex, you should have simply used library X and reused Y.\u201d")),". What!? Before you know it, you\u2019re looking at 100 comments on your PR and days of refactoring to follow."),(0,n.kt)("p",null,"If only there were ",(0,n.kt)("strong",{parentName:"p"},"a way of knowing about X and Y before implementing everything"),". Well, it is, and it\u2019s called RFC!"),(0,n.kt)(i.Z,{alt:"The revelation of RFC",source:"img/writing-rfcs/rfc-prophet.png",mdxType:"ImgWithCaption"}),(0,n.kt)("p",null,"We\u2019ll learn about it through the example of ",(0,n.kt)("a",{parentName:"p",href:"https://wasp-lang.notion.site/RFC-Auth-without-user-defined-entities-6d2925439627456ab01b74ff4b4cd087?pvs=4"},"RFC about implementing an authentication system in a web framework Wasp"),". ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp"},"Wasp")," is a full-stack web framework built on top of React, Node.js and Prisma. It is used by ",(0,n.kt)("a",{parentName:"p",href:"https://usemage.ai/"},"MAGE"),", a free GPT-powered codebase generator, which has been used to start over 30,000 applications."),(0,n.kt)("p",null,"Let's dive in!"),(0,n.kt)("h2",{id:"so-what-is-an-rfc"},"So, what is an RFC?"),(0,n.kt)("p",null,"RFC (",(0,n.kt)("em",{parentName:"p"},"Request For Comments"),") is, simply explained, a document proposing a codebase change to solve a specific problem. ",(0,n.kt)("strong",{parentName:"p"},"Its main purpose is to find the best way to solve a problem, as a team effort, before the implementation starts"),". RFCs were first adopted by the open-source community, but today, they are used in almost any type of developer organization."),(0,n.kt)(i.Z,{alt:"RFC overivew",source:"img/writing-rfcs/rfc-overview.png",caption:"A simplified schema of a typical RFC.",mdxType:"ImgWithCaption"}),(0,n.kt)("p",null,"There are other names for this type of document you might encounter in the industry, like TDD (",(0,n.kt)("em",{parentName:"p"},"Technical Design Document"),") or SDD (",(0,n.kt)("em",{parentName:"p"},"Software Design Document"),"). Some people argue over the distinction between them, but we won\u2019t."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Fun fact"),": RFCs were invented by IETF (",(0,n.kt)("em",{parentName:"p"},"Internet Engineering Task Force"),"), the engineering organization behind some of the most important internet standards and protocols we use today, like TCP/IP! Not too shabby, right?"),(0,n.kt)("h2",{id:"when-should-i-write-rfc-and-when-can-i-skip-it"},"When should I write RFC, and when can I skip it?"),(0,n.kt)(i.Z,{alt:"RFC overivew",source:"img/writing-rfcs/rfc-meme-when.png",mdxType:"ImgWithCaption"}),(0,n.kt)("p",null,"So, why bother writing about what you will eventually code, instead of saving time and simply doing it? ",(0,n.kt)("strong",{parentName:"p"},"If you\u2019re dealing with a bug or a relatively simple feature, where it\u2019s very clear what you must do and doesn\u2019t affect project structure, then there\u2019s no need for an RFC - fire up that IDE and get cracking!")),(0,n.kt)("p",null,"But, if you are introducing a completely new concept (e.g., introducing a role-based permission system) or altering the project\u2019s architecture (e.g., adding support for running background jobs), then you might want to take a step back before typing ",(0,n.kt)("inlineCode",{parentName:"p"},"git checkout -b my-new-feature")," and diving into that sweet coding zone."),(0,n.kt)("p",null,"All the above being said, sometimes it's not easy to figure out if you should write an RFC or not. Maybe it\u2019s a more prominent feature, but you\u2019ve done something similar before, and you\u2019ve already mapped everything out in your head and pretty much have no questions. To help with that, here\u2019s a simple heuristic I like to use: ",(0,n.kt)("strong",{parentName:"p"},"Is there more than one obvious way to implement this feature? Is there a new library/service we have to pick?"),' If the answer to both of these is \u201cNo", you probably don\u2019t need an RFC. Otherwise, there\u2019s a discussion to be had, and RFC is the way to do it.'),(0,n.kt)(i.Z,{alt:"RFC decision flowchart",source:"img/writing-rfcs/rfc-flowchart.png",mdxType:"ImgWithCaption"}),(0,n.kt)("h2",{id:"it-sounds-useful-but-whats-in-it-for-me"},"It sounds useful. But what\u2019s in it for me?"),(0,n.kt)("p",null,"We\u2019ve established how to decide ",(0,n.kt)("em",{parentName:"p"},"when")," to write an RFC, but here is also ",(0,n.kt)("em",{parentName:"p"},"why")," you should do it:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"You will organize your thoughts and get clarity"),". If you\u2019ve decided to write an RFC, that means you\u2019re dealing with a non-trivial, open-ended problem. Writing things down will help distill your thoughts and have an objective look at them."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"You will learn more")," than if you just jumped into coding. You will give yourself space to explore different approaches and oftentimes discover something you haven\u2019t even thought of initially."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"You will crowdsource your team\u2019s knowledge.")," By asking your team for feedback (hence Request For Comments), you will get a complete picture of the problem you\u2019re solving and fill in any remaining gaps."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"You will advance your team\u2019s understanding of the codebase.")," By collaborating on your RFC, everybody on the team will understand what you\u2019re doing and how you eventually did it. That means next time somebody has to touch that part of the code, they will need to ask you much less questions (=== more uninterrupted coding time!)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"PR reviews will go ",(0,n.kt)("em",{parentName:"strong"},"much")," smoother"),'. Remember that situation from the beginning of this article, when your PR got rejected as "too complex"? That\u2019s because the reviewer is missing the context, and you made a sizeable change without a previous buy-in from the rest of the team. By writing an RFC first, you\u2019ll never encounter this type of situation again.'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Your documentation is already 50% done!")," To be clear, RFC is not the final documentation, and you cannot simply point to it, but you can likely reuse a lot - images, diagrams, paragraphs, etc.")),(0,n.kt)("p",null,"Wow, this sounds so good that I want to come up with a new feature right now just so I can write an RFC for it! Joke aside, going through with the RFC first makes the coding part so much more enjoyable - you know exactly what you need to do, and you don\u2019t need to question your approach and how it will be received once you create that PR."),(0,n.kt)("h2",{id:"ok-ok-im-sold-so-how-do-i-go-about-writing-one"},"Ok, ok, I\u2019m sold! So, how do I go about writing one?"),(0,n.kt)("p",null,"Glad you asked! Many different formats are being used, more or less formal, but I prefer to keep it simple. RFCs that we write at Wasp don\u2019t follow a strict format, but there are some common parts:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Metadata")," - Title, date, reviewers, etc\u2026"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Problem / Goal")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Proposed solution")," (or more of them)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Implementation overview")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Remarks / open questions"))),(0,n.kt)("p",null,"That\u2019s pretty much the gist of it! Each of these can be further broken down and refined, but this is the basic outline you can start with."),(0,n.kt)("p",null,"Let\u2019s now go over each of these and see what they look like in practice, on our ",(0,n.kt)("a",{parentName:"p",href:"https://wasp-lang.notion.site/RFC-Auth-without-user-defined-entities-6d2925439627456ab01b74ff4b4cd087?pvs=4"},"Authentication in Wasp")," example."),(0,n.kt)("h2",{id:"metadata-"},"Metadata \u2317"),(0,n.kt)(i.Z,{alt:"RFC metadata",source:"img/writing-rfcs/rfc-metadata.png",mdxType:"ImgWithCaption"}),(0,n.kt)("p",null,"This one is pretty self-explanatory - you will want to track some basic info about your RFCs - status, date of creation, etc. "),(0,n.kt)("p",null,"Some templates also explicitly list the reviewers and the status of their \u201capproval\u201d of the RFC, similar to the PR review process - we don\u2019t have it since we\u2019re a small team where communication happens fast, but it can be handy for larger teams where not everybody knows everybody, and you want to have a bit more of a process in place (e.g. when mentoring junior developers)."),(0,n.kt)(i.Z,{alt:"RFC reviewer status",source:"img/writing-rfcs/rfc-reviewer-status-example.png",caption:"Some RFCs require explicit approval by each reviewer.",mdxType:"ImgWithCaption"}),(0,n.kt)("h2",{id:"the-problem-"},"The problem \ud83e\udd14"),(0,n.kt)("p",null,"This is where things get interesting. ",(0,n.kt)("strong",{parentName:"p"},"The better you define the problem or the goal/feature you need to implement, and why you need to do it, the easier all the following steps will be"),". So this is something worth investing in even before you start writing your RFC - make sure you talk to all the involved parties (e.g., product owner, other developers, and even users) to refine your understanding of the issue you\u2019re about to tackle."),(0,n.kt)("p",null,"By doing this, you will also very likely get first hints and pointers on the possible solutions, and develop a rough sense of the problem space you\u2019re in."),(0,n.kt)(i.Z,{alt:"RFC problem definition",source:"img/writing-rfcs/rfc-problem.png",mdxType:"ImgWithCaption"}),(0,n.kt)("p",null,"Here are a few tips from the example above:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Start with a high-level summary")," - that way, readers can quickly decide if this is relevant to them or not and whether they should keep reading."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Provide some context")," - Explain a bit about the current state of the world, as it is right now. This can be a single sentence or a whole chapter, depending on the intended audience."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Clearly state the problem/goal")," - explain why there is a problem and connect it with the user\u2019s/company\u2019s pain, so that motivation is clear."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Provide extra details if possible")," - diagrams, code examples, \u2026 \u2192 anything that can help the reader get faster to that \u201caha\u201d moment. Extra points for using collapsible sections, so the central part of the RFC remains of digestible length.")),(0,n.kt)("p",null,"If you did all this, you\u2019re already well on your way to the excellent RFC! Since defining the problem well is essential, don\u2019t be afraid to add more to it and break things down further."),(0,n.kt)("h3",{id:"non-goals-"},"Non-goals \ud83d\uded1"),(0,n.kt)("p",null,'This is the sub-section of the "Problem" or "Goal" section that can sometimes be super valuable. Writing what we don\'t want or will not be doing in this codebase change can help set the expectations and better define its scope.'),(0,n.kt)("p",null,"For example, if we are working on adding a role-based authentication system to our app, people might assume that we will also build some sort of an admin panel for it to manage users and add/remove roles. By explicitly stating it won't be done (and briefly explaining why - not needed, it would take too long, it will be done in the next iteration, ...), reviewers will get a better understanding of what your goal is and you will skip unnecessary discussion."),(0,n.kt)("h2",{id:"solution--implementation-\ufe0f"},"Solution & Implementation \ud83d\udee0\ufe0f"),(0,n.kt)("p",null,"Once we know what we want to do, we have to figure out the best way of doing it! You might have already hinted at the possible solution in the Problem section, but now is the moment to dive deeper - research different approaches, evaluate their pros and cons, and sketch how they could fit into the existing system."),(0,n.kt)("p",null,"This section is probably the most free-form of all - since it highly depends on the nature of what you are doing, it doesn\u2019t make sense to impose many restrictions here. You may want to stay at the higher level of, e.g., system architecture, or you may need to dive deep into the code and start writing parts of the code you will need. Due to that, I don\u2019t have an exact format for you to follow, but rather a set of guidelines:"),(0,n.kt)("h3",{id:"write-pseudocode"},"Write pseudocode"),(0,n.kt)("p",null,"The purpose of RFC is to convey ideas and principles, not production-grade code that compiles and covers all the edge cases. Feel free to invent/imagine/sketch whatever you need (e.g., imagine you already have a function that sends an email and just use it, even if you don\u2019t), and don\u2019t encumber yourself or the reader with the implementation details (unless that\u2019s exactly what the RFC is about)."),(0,n.kt)("p",null,"It\u2019s better to start at the higher level, and then go deeper when you realize you need it or if one of the reviewers suggests it."),(0,n.kt)("h3",{id:"find-out-how-are-others-doing-it"},"Find out how are others doing it"),(0,n.kt)(i.Z,{alt:"See what others are doing",source:"img/writing-rfcs/existing-solutions.png",mdxType:"ImgWithCaption"}),(0,n.kt)("p",null,"How you find this out may differ depending on the type of product you\u2019re developing, but there is almost always a way to do it. If you\u2019re developing an open-source tool like ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp"},"Wasp")," you can simply check out other popular solutions (that are also open-source) and learn how they did it. If you\u2019re working on a SaaS and need to figure out whether to use cookies or JWTs for the authentication, you likely have some friends who have done it before, and you can ask them. Lastly, simply Google/GPT it."),(0,n.kt)("p",null,"Why is this so helpful? ",(0,n.kt)("strong",{parentName:"p"},"The reason is that it gives you (and the reviewers) confidence in your solution. If somebody else did it successfully this way, it might be a promising direction.")," It also might help you discover approaches you haven\u2019t thought of before, or serve as a basis on top of which you can build. Of course, never take anything for granted and take into account the specific needs of your situation, but definitely make use of the knowledge and expertise of others."),(0,n.kt)("h3",{id:"leave-things-unfinished--dont-make-it-perfect"},"Leave things unfinished & don't make it perfect"),(0,n.kt)("p",null,'The main point of RFC is the \u201cC\u201d part, so collaboration (yes, I know it actually stands for "',(0,n.kt)("em",{parentName:"p"},"comments"),'"). ',(0,n.kt)("strong",{parentName:"p"},"RFC is not a test where you have to get the perfect score and have no questions asked - if that happens, you probably shouldn\u2019t have written it in the first place.")),(0,n.kt)("p",null,"Solving a problem is a team effort, and you\u2019re just the person taking the first stab at it and pushing things forward. Your task is to lay as much groundwork as you reasonably can (refine the problem, explore multiple approaches to solving it, identify new subproblems that came to light) so the reviewers can quickly grasp the status and provide efficient feedback, directed where it\u2019s needed the most."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"The main job of your RFC is to identify the most important problems and direct the reviewer\u2019s attention to them, not solve them.")),(0,n.kt)("p",null,"The RFC you\u2019re writing should be looked at as a discussion area and a work-in-progress, not a piece of art that has to be perfected before it\u2019s displayed in front of the audience."),(0,n.kt)("h2",{id:"remarks--open-questions-"},"Remarks & open questions \ud83c\udfaf"),(0,n.kt)("p",null,"In this final section of the document, you can summarise the main thoughts and highlight the biggest open questions. After going through everything, it can be helpful for the reader to be reminded of where his attention can be most valuable."),(0,n.kt)("h2",{id:"now-i-know-when-and-how-to-write-an-rfc-do-you-have-any-templates-i-could-use-as-a-starting-point"},"Now I know when and how to write an RFC! Do you have any templates I could use as a starting point?"),(0,n.kt)("p",null,"Of course! As mentioned, our format is extremely lightweight, but feel free to take a look at ",(0,n.kt)("a",{parentName:"p",href:"https://wasp-lang.notion.site/RFC-Auth-without-user-defined-entities-6d2925439627456ab01b74ff4b4cd087?pvs=4"},"the RFC we used as an example")," to get inspired. Your company could also already have a ready template they recommend."),(0,n.kt)("p",null,"Here are a few you can use and/or adapt to your needs:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://engineering.squarespace.com/s/Squarespace-RFC-Template.pdf"},"Squarespace RFC template")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Do you have a template you would recommend? I'm happy to list it here!"))),(0,n.kt)("h2",{id:"what-tool-should-i-use-to-write-my-rfcs-there-are-so-many-choices"},"What tool should I use to write my RFCs? There are so many choices!"),(0,n.kt)("p",null,"The exact tool you\u2019re using is probably the least important part of RFC-ing, but it still matters since it sets the workflow around it. If your company has already selected a tool, then of course stick with that. If not, here are the most common choices I\u2019ve come across, along with quick comments:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Google Docs")," - the classic choice. Super easy to comment on any part of the doc, which is the most important feature."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Notion")," - also great for collaboration, plus offers some markdown components such as collapsibles and tables, which can make your RFC more readable."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"GitHub issues / PRs")," - this is sometimes used, especially for OSS projects. The drawback is that it is harder to comment on the specific part of the document (you can only comment on the whole line), plus inserting diagrams is also quite clunky. The pro is that everything (code and RFCs) stays on the same platform")),(0,n.kt)("p",null,"We currently use Notion, but any of the above can be a good choice."),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,"Just as it is the best practice to write a summary at the end of your RFC, we will do the same here! This article came out longer than I expected, but there were so many things to mention - I hope you'll find it useful!"),(0,n.kt)("p",null,"Finally, ",(0,n.kt)("strong",{parentName:"p"},"being able to clearly express your thoughts, formulate the problem, and objectively analyze the possible solutions, with feedback from the team, is what will help you develop the right thing, which is the ultimate productivity hack"),". This is how you become a 10x engineer."),(0,n.kt)("p",null,"And don't forget: ",(0,n.kt)("em",{parentName:"p"},"Weeks of coding can save you hours of planning.")))}m.isMDXComponent=!0}}]);