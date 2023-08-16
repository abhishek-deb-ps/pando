"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6878],{15566:function(e,t,r){r.d(t,{dS:function(){return p},fK:function(){return l},C9:function(){return u},ZP:function(){return m}});var s=r(45721),a=r(84140),n="linkList_sLwJ",i="linkItem_ESvF";function o(e){return s.createElement("li",{className:i},s.createElement(a.Z,e,e.children))}function l(e){return s.createElement(o,{href:e.href},e.children??"View on Github")}function p(e){return s.createElement(o,{href:e.href},"View on Figma")}function u(e){return s.createElement("ul",{className:n},e.children)}function m(e){const{figma:t,github:r}=e;return s.createElement("ul",{className:n},r&&s.createElement(l,{href:r}),t&&s.createElement(p,{href:t}))}},45945:function(e,t,r){r(45721)},84140:function(e,t,r){r.d(t,{Z:function(){return l}});var s=r(45721),a=r(95799),n=r(80404),i=r(38345),o=r(35125);function l(e){const{href:t}=e,r=(0,n.L)({ariaHidden:!0,size:"s"}),l=t.includes("github")?i.Z:o.Z;return s.createElement(a.TextLink,e,s.createElement(l,r),e.children)}},60492:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var s=r(81648),a=(r(45721),r(70167)),n=r(15566);r(45945);const i={tags:["linear progress"],title:"Progress Bar"},o=void 0,l={unversionedId:"reference/components/progress-bar",id:"reference/components/progress-bar",title:"Progress Bar",description:"Used to display the progress status for a task that takes a long time or",source:"@site/docs/reference/components/progress-bar.mdx",sourceDirName:"reference/components",slug:"/reference/components/progress-bar",permalink:"/docs/reference/components/progress-bar",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/reference/components/progress-bar.mdx",tags:[{label:"linear progress",permalink:"/docs/tags/linear-progress"}],version:"current",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["linear progress"],title:"Progress Bar"},sidebar:"reference",previous:{title:"Portal",permalink:"/docs/reference/components/portal"},next:{title:"Prompt Dialog",permalink:"/docs/reference/components/prompt-dialog"}},p={},u=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Progress",id:"basic-progress",level:3},{value:"Sizes",id:"sizes",level:3},{value:"Customizing",id:"customizing",level:3},{value:"1. Unused Classes",id:"1-unused-classes",level:4},{value:"2. Passing a <code>className</code> prop",id:"2-passing-a-classname-prop",level:4},{value:"3. Ejected ProgressBar",id:"3-ejected-progressbar",level:4},{value:"Behavior",id:"behavior",level:2},{value:"Loading",id:"loading",level:3},{value:"Text",id:"text",level:3},{value:"Sizing",id:"sizing",level:3},{value:"API",id:"api",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Size Mapping",id:"size-mapping",level:3},{value:"Accessibility",id:"accessibility",level:2}],m={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,s.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",{className:"size-xxl"},"Used to display the progress status for a task that takes a long time or consists of several steps."),(0,a.kt)(n.C9,{mdxType:"DocsLinkList"},(0,a.kt)(n.fK,{href:"https://github.com/pluralsight/pando/tree/main/packages/react/src/components/ProgressBar.tsx",mdxType:"DocsGithubLink"}),(0,a.kt)(n.fK,{href:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/Progress/progressCSS.ts",mdxType:"DocsGithubLink"},"View Core API"),(0,a.kt)(n.dS,{href:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsFigmaLink"})),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { ProgressBar } from '@pluralsight/react'\n")),(0,a.kt)("h2",{id:"anatomy"},"Anatomy"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Container"),(0,a.kt)("li",{parentName:"ol"},"Bar")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"basic-progress"},"Basic Progress"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function BasicProgressBar() {\n  return (\n    <div>\n      <ProgressBar ariaLabel="25%" now={25} kind="inset" />\n      <br />\n      <ProgressBar ariaLabel="50%" now={50} kind="linear" />\n    </div>\n  )\n}\n')),(0,a.kt)("h3",{id:"sizes"},"Sizes"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function ProgressSizes() {\n  return (\n    <div>\n      <ProgressBar ariaLabel="xtra small progress bar" now={50} size="xs" />\n      <br />\n      <ProgressBar ariaLabel="small progress bar" now={75} size="s" />\n    </div>\n  )\n}\n')),(0,a.kt)("h3",{id:"customizing"},"Customizing"),(0,a.kt)("p",null,"There are 3 ways to customize the ProgressBar component."),(0,a.kt)("h4",{id:"1-unused-classes"},"1. Unused Classes"),(0,a.kt)("p",null,"Each component layer of the ProgressBar has a unused class name that can be utilized in your local CSS to customize the ProgressBar at any level."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"pando-progress"),": The container element of the Progress Bar."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"pando-progress-bar"),': The "now" element of the Progress Bar.')),(0,a.kt)("h4",{id:"2-passing-a-classname-prop"},"2. Passing a ",(0,a.kt)("inlineCode",{parentName:"h4"},"className")," prop"),(0,a.kt)("p",null,"You can pass a ",(0,a.kt)("inlineCode",{parentName:"p"},"className")," prop to the ProgressBar component to customize the ProgressBar wrapper div element. This is useful if your project uses ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/css-modules/css-modules"},"CSS Modules")," or a CSS-in-JS library like ",(0,a.kt)("a",{parentName:"p",href:"https://emotion.sh/docs/introduction"},"Emotion"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Example of using CSS Modules to customize the ProgressBar." showLineNumbers',title:'"Example',of:!0,using:!0,CSS:!0,Modules:!0,to:!0,customize:!0,the:!0,'ProgressBar."':!0,showLineNumbers:!0},"import customStyles from './customStyles.module.css'\n\nfunction CustomProgressBar(props) {\n  return (\n    <ProgressBar\n      className={customStyles.customProgressWrapper}\n      ariaLabel=\"50%\"\n      now={50}\n    />\n  )\n}\n")),(0,a.kt)("h4",{id:"3-ejected-progressbar"},"3. Ejected ProgressBar"),(0,a.kt)("p",null,'For a low-level "ejected" approach, you can use the Headless-styles API to customize the ProgressBar however you prefer while keeping the accessibility behavior.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"showLineNumbers",showLineNumbers:!0},"import { getProgressProps } from '@pluralsight/headless-styles'\n")),(0,a.kt)("p",null,"To learn more about the Headless-styles API, check out the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pluralsight/pando/blob/main/packages/headless-styles/src/components/Progress/progressCSS.ts"},"Headless-styles documentation"),"."),(0,a.kt)("h2",{id:"behavior"},"Behavior"),(0,a.kt)("h3",{id:"loading"},"Loading"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do")," use Progress to display an update of information to a ",(0,a.kt)("strong",{parentName:"p"},"specific part of a previously loaded page"),", like a video."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't")," use the Progress to show page load progress. Instead, use a Skeleton."),(0,a.kt)("h3",{id:"text"},"Text"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do")," use text describing the progress in close proximity."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't")," use text or other elements within the Progress."),(0,a.kt)("h3",{id:"sizing"},"Sizing"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do")," use the default size for all use cases where possible of the Progress."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't"),' use the "xs" size ',(0,a.kt)("em",{parentName:"p"},"unless")," it is a ",(0,a.kt)("strong",{parentName:"p"},"last resort"),"."),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ProgressProps extends HTMLAttributes<HTMLDivElement> {\n  ariaLabel: string\n  kind?: 'linear' | 'inset'\n  max?: number\n  min?: number\n  now?: number\n  size?: 'xs' | 's'\n}\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Any props that can be passed to a div element."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"ariaLabel")," - A string that describes the progress to screen readers."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"displayLabel")," - A boolean that determines whether or not to display the progress percentage."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"kind")," - A string that determines whether the progress is determinate or indeterminate."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"max")," - A number that determines the maximum value of the progress. The default value is 100."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"min")," - A number that determines the minimum value of the progress. The default value is 0."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"now")," - A number that determines the current value of the progress. The default value is 0."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"size")," - A string that determines the size of the progress. The default value is 's'.")),(0,a.kt)("h3",{id:"size-mapping"},"Size Mapping"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="ProgressBar size rules."',title:'"ProgressBar',size:!0,'rules."':!0},"{\n  xs: 'Should only be used when the default size (s) is too large.',\n  s: 'Should be used in most, if not all cases.'\n}\n")),(0,a.kt)("h2",{id:"accessibility"},"Accessibility"),(0,a.kt)("p",null,"The Pando ProgressBar is fully accessible and screen-readable through the following features:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"ariaLabel")," prop is required and is used to describe the progress to screen readers."),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"aria-valuenow")," attribute is used to describe the current value of the progress to screen readers."),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"aria-valuemin")," attribute is used to describe the minimum value of the progress to screen readers."),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"aria-valuemax")," attribute is used to describe the maximum value of the progress to screen readers."),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"role")," attribute is set to ",(0,a.kt)("inlineCode",{parentName:"li"},"progressbar")," to describe the type of progress to screen readers.")))}c.isMDXComponent=!0}}]);