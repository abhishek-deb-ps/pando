"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[77414],{70167:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return c}});var n=a(45721);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),c=s,m=d["".concat(i,".").concat(c)]||d[c]||h[c]||r;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function c(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,o=new Array(r);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:s,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},41322:function(e,t,a){a.r(t),a.d(t,{assets:function(){return i},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return p}});var n=a(81648),s=(a(45721),a(70167));const r={slug:"v0.3.1-beta-release",title:"Announcing Beta Release",authors:["casey"],tags:["pluralsight","development","v0.3.1-beta-release","headless-styles","ui-library","design-tokens","react-utils"],hide_table_of_contents:!1},o=void 0,l={permalink:"/blog/v0.3.1-beta-release",editUrl:"https://github.com/pluralsight/pando/edit/main/website/blog/blog/2022-011-30-dev-beta/index.md",source:"@site/blog/2022-011-30-dev-beta/index.md",title:"Announcing Beta Release",description:"Today marks a big milestone for the developer suite as we happily introduce the Beta version!",date:"2023-02-16T19:09:05.000Z",formattedDate:"February 16, 2023",tags:[{label:"pluralsight",permalink:"/blog/tags/pluralsight"},{label:"development",permalink:"/blog/tags/development"},{label:"v0.3.1-beta-release",permalink:"/blog/tags/v-0-3-1-beta-release"},{label:"headless-styles",permalink:"/blog/tags/headless-styles"},{label:"ui-library",permalink:"/blog/tags/ui-library"},{label:"design-tokens",permalink:"/blog/tags/design-tokens"},{label:"react-utils",permalink:"/blog/tags/react-utils"}],readingTime:3.86,hasTruncateMarker:!0,authors:[{name:"Casey Baggz",title:"Admin & Maintainer (Pluralsight Design Suite)",url:"https://caseybaggz.com",imageURL:"https://github.com/caseybaggz.png",key:"casey"}],frontMatter:{slug:"v0.3.1-beta-release",title:"Announcing Beta Release",authors:["casey"],tags:["pluralsight","development","v0.3.1-beta-release","headless-styles","ui-library","design-tokens","react-utils"],hide_table_of_contents:!1},nextItem:{title:"Announcing RC Release",permalink:"/blog/v0.4.1-rc-release"}},i={authorsImageUrls:[void 0]},p=[{value:"Beta Cometh",id:"beta-cometh",level:2},{value:"Design Tokens",id:"design-tokens",level:2},{value:"Mobile support",id:"mobile-support",level:2},{value:"Headless Styles",id:"headless-styles",level:2},{value:"New Style Objects",id:"new-style-objects",level:3},{value:"React Utils",id:"react-utils",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2},{value:"Early Adopter Questions",id:"early-adopter-questions",level:3},{value:"Thanks \ud83c\udf89",id:"thanks-",level:2},{value:"Upgrading",id:"upgrading",level:2},{value:"Installing",id:"installing",level:2}],u={toc:p};function h(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Today marks a big milestone for the developer suite as we happily introduce the Beta version! \ud83c\udf89"),(0,s.kt)("h2",{id:"beta-cometh"},"Beta Cometh"),(0,s.kt)("p",null,"As of today we are ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/pluralsight/pando/projects/2"},"feature complete"),' for all of our packages! This means that from this point forward, we are focusing on delivering a stable "rc" release. In order to do this we need ',(0,s.kt)("em",{parentName:"p"},"YOU"),", the early adopter, to test out migration and help us reveal the areas we can improve our packages. \u26a1"),(0,s.kt)("h2",{id:"design-tokens"},"Design Tokens"),(0,s.kt)("p",null,"Thanks to ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/dan-davidson-ps"},"Dan Davidson"),", we have an improvement for the Normalize.css file to support setting the ",(0,s.kt)("inlineCode",{parentName:"p"},"background-color")," to help ease migration from Classic."),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"Interested in learning more about Migration? Check out the ",(0,s.kt)("a",{parentName:"p",href:"https://design.pluralsight.com/docs/development/getting-started/migration"},"NEW Migration docs"),".")),(0,s.kt)("h2",{id:"mobile-support"},"Mobile support"),(0,s.kt)("p",null,"Thanks to ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/cantocass"},"Cassidy Swallow"),", we have full Android/Kotlin support for our Design Tokens! This is the first time in Pluralsight history that a design system has supported both mobile and web teams and it only gets better from here!"),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"We also support iOS/Swift teams, but need some help verifying if there needs to be more work done. If you are a iOS developer, please ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/pluralsight/pando/issues/724"},"check out this issue"),".")),(0,s.kt)("h2",{id:"headless-styles"},"Headless Styles"),(0,s.kt)("p",null,"A massive update in this package delivers all the style helpers for the components available to designers in the new Web UI Kit. Everything from ",(0,s.kt)("a",{parentName:"p",href:"https://design.pluralsight.com/docs/development/headless-styles/Grid"},"Grid helpers")," to ",(0,s.kt)("a",{parentName:"p",href:"https://design.pluralsight.com/docs/development/headless-styles/Tabs"},"Tabs"),", Headless styles is now Web Kit complete!"),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Classic is ",(0,s.kt)("strong",{parentName:"p"},"not"),' a 1:1 comparison to our current system. When Classic was created, Pluralsight was a single product brand. Now that we are multi-product, the new UI Kit acts as the "core" library allowing teams across all products to own their own custom solutions where needed.')),(0,s.kt)("h3",{id:"new-style-objects"},"New Style Objects"),(0,s.kt)("p",null,"Most people wonder why we don't offer a Component library for our new system. The reason is quite simple: in a world full of Component libraries, we don't need another one. Let's face it, the reality is that for the people who use them, there are plenty of loyalists out there."),(0,s.kt)("p",null,"This is where Headless Styles shines. Instead of forcing another component library, we have built a system that allows people to ",(0,s.kt)("em",{parentName:"p"},"easily extend the libraries they already love.")," \ud83c\udf89"),(0,s.kt)("p",null,"In Beta, we introduce a new export path that allows you to extend your library of choice even more easily! This means that your team can keep using the tech stack you already love and utilize the power of Headless Styles to customize the themes at your convenience!"),(0,s.kt)("p",null,"Special thanks to ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/josh-degraw"},"Josh Degraw")," for testing out Headless Styles migration with v5 of MUI and helping us improve our library. \u2764\ufe0f"),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Interested in learning more about customizing 3rd party component libraries with Headless Styles? Check out the ",(0,s.kt)("a",{parentName:"p",href:"https://design.pluralsight.com/docs/development/headless-styles/customization/components"},"NEW Customization Docs"),".")),(0,s.kt)("h2",{id:"react-utils"},"React Utils"),(0,s.kt)("p",null,"Beta introduces a ton of new hooks for people who are React users. Everything from ",(0,s.kt)("a",{parentName:"p",href:"https://design.pluralsight.com/docs/development/react-utils/use-preloaded-img"},"Preloading Images")," to ",(0,s.kt)("a",{parentName:"p",href:"https://design.pluralsight.com/docs/development/react-utils/use-auto-format-date"},"Autoformatting Dates"),", we have it covered!"),(0,s.kt)("p",null,"Check out the latest hooks in the ",(0,s.kt)("a",{parentName:"p",href:"https://design.pluralsight.com/docs/development/react-utils/use-auto-format-date"},"React Utils docs"),"."),(0,s.kt)("h2",{id:"whats-next"},"What's Next?"),(0,s.kt)("p",null,"From this point until v1 it's all about the ",(0,s.kt)("strong",{parentName:"p"},"stabilizing")," and ",(0,s.kt)("strong",{parentName:"p"},"we need your help!")),(0,s.kt)("p",null,"In order for us to make sure our system is ready for mass integration, we need more early adopters to test out migrating in their apps. This is the only way we can fix or improve our library before we release the official v1."),(0,s.kt)("h3",{id:"early-adopter-questions"},"Early Adopter Questions"),(0,s.kt)("p",null,"If you are someone that would like to test our migration with your team, ask yourself these questions during your experience:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Is this easy to use for how we need to use it?"),' If the answer is "no" or anything similar to "not really", ',(0,s.kt)("a",{parentName:"li",href:"https://github.com/pluralsight/pando/discussions"},"start a new discussion")," to help us become aware of your experience."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Is there something that feels buggy?")," ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/pluralsight/pando/issues/new?assignees=&labels=bug%2Cneeds+triage&template=bug.yml&title=%5BBug%3F%5D%3A+"},"Submit a new issue")," so we can fix it!")),(0,s.kt)("p",null,"We value all feedback and keep a pulse on all of the above and want to make sure v1 has all the features or bugfixes needed to ensure a satisfactory experience with everyone! \ud83c\udf89"),(0,s.kt)("h2",{id:"thanks-"},"Thanks \ud83c\udf89"),(0,s.kt)("p",null,"Some features in this release wouldn't be possible without the contribution of the following people:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/cantocass"},"Cassidy Swallow")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/dan-davidson-ps"},"Dan Davidson")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/kaydenthomson"},"Kayden Thomson")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/josh-degraw"},"Josh Degraw"))),(0,s.kt)("h2",{id:"upgrading"},"Upgrading"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# npm\nnpm install @pluralsight/{headless-styles,react-utils}@latest\n\n# Yarn Classic\nyarn upgrade @pluralsight/{headless-styles,react-utils}@latest\n\n# Yarn Berry\nyarn up @pluralsight/{headless-styles,react-utils}@latest\n")),(0,s.kt)("h2",{id:"installing"},"Installing"),(0,s.kt)("p",null,"If it is your first time using any of our packages, check out our\n",(0,s.kt)("a",{parentName:"p",href:"https://design.pluralsight.com/docs/development/getting-started/installation"},"Installation Guide"),"\nor the ",(0,s.kt)("a",{parentName:"p",href:"https://design.pluralsight.com/docs/development/react-utils/intro"},"Intro Page"),"\nof whichever package you are interested in using."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"As always, if you have any questions or ideas, please drop us a thread in our\n",(0,s.kt)("a",{parentName:"strong",href:"https://github.com/pluralsight/pando/discussions"},"Discussions Page"),".")))}h.isMDXComponent=!0}}]);