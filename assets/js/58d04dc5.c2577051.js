"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4470],{64183:(e,t,r)=>{r.d(t,{dS:()=>o,fK:()=>l,C9:()=>p,ZP:()=>c});var a=r(70079),s=r(5735);const i={linkList:"linkList_sLwJ",linkItem:"linkItem_ESvF"};function n(e){return a.createElement("li",{className:i.linkItem},a.createElement(s.Z,e,e.children))}function l(e){return a.createElement(n,{href:e.href},e.children??"View on Github")}function o(e){return a.createElement(n,{href:e.href},"View on Figma")}function p(e){return a.createElement("ul",{className:i.linkList},e.children)}function c(e){const{figma:t,github:r}=e;return a.createElement("ul",{className:i.linkList},r&&a.createElement(l,{href:r}),t&&a.createElement(o,{href:t}))}},12107:(e,t,r)=>{r(70079)},5735:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(70079),s=r(59788),i=r(65710),n=r(15537),l=r(28754);function o(e){const{href:t}=e,r=(0,i.L)({ariaHidden:!0,size:"s"}),o=t.includes("github")?n.Z:l.Z;return a.createElement(s.TextLink,e,a.createElement(o,r),e.children)}},40594:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var a=r(10328),s=(r(70079),r(38570)),i=r(64183);r(12107);const n={tags:["async loading","inline loading"],title:"Circular Progress"},l=void 0,o={unversionedId:"reference/components/circular-progress",id:"reference/components/circular-progress",title:"Circular Progress",description:"Used to display the progress status for a task that takes a long time or",source:"@site/docs/reference/components/circular-progress.mdx",sourceDirName:"reference/components",slug:"/reference/components/circular-progress",permalink:"/docs/reference/components/circular-progress",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/reference/components/circular-progress.mdx",tags:[{label:"async loading",permalink:"/docs/tags/async-loading"},{label:"inline loading",permalink:"/docs/tags/inline-loading"}],version:"current",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["async loading","inline loading"],title:"Circular Progress"},sidebar:"reference",previous:{title:"Checkbox",permalink:"/docs/reference/components/checkbox"},next:{title:"Confirm Dialog",permalink:"/docs/reference/components/confirm-dialog"}},p={},c=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Circular Progress",id:"basic-circular-progress",level:3},{value:"Indeterminate (loading) State",id:"indeterminate-loading-state",level:3},{value:"Sizes",id:"sizes",level:3},{value:"Customizing",id:"customizing",level:3},{value:"1. Unused Classes",id:"1-unused-classes",level:4},{value:"2. Passing a <code>className</code> prop",id:"2-passing-a-classname-prop",level:4},{value:"3. Ejected CircularProgress",id:"3-ejected-circularprogress",level:4},{value:"Behavior",id:"behavior",level:2},{value:"Loading",id:"loading",level:3},{value:"Text",id:"text",level:3},{value:"Sizing",id:"sizing",level:3},{value:"API",id:"api",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Size Mapping",id:"size-mapping",level:3},{value:"Accessibility",id:"accessibility",level:2}],u={toc:c},m="wrapper";function d(e){let{components:t,...r}=e;return(0,s.kt)(m,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",{className:"size-xxl"},"Used to display the progress status for a task that takes a long time or consists of several steps within a page."),(0,s.kt)("admonition",{title:"Not for page loading",type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"Circular Progress ",(0,s.kt)("strong",{parentName:"p"},"should not be used for initial page loading"),". Check out the ",(0,s.kt)("a",{parentName:"p",href:"/docs/learn/learn-pando/design-patterns/page-loading"},"Page Loading")," design pattern for more information.")),(0,s.kt)(i.C9,{mdxType:"DocsLinkList"},(0,s.kt)(i.fK,{href:"https://github.com/pluralsight/pando/tree/main/packages/react/src/components/CircularProgress.tsx",mdxType:"DocsGithubLink"}),(0,s.kt)(i.fK,{href:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/CircularProgress/circularProgressCSS.ts",mdxType:"DocsGithubLink"},"View Core API"),(0,s.kt)(i.dS,{href:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsFigmaLink"})),(0,s.kt)("h2",{id:"import"},"Import"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import { CircularProgress } from '@pluralsight/react'\n")),(0,s.kt)("h2",{id:"anatomy"},"Anatomy"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Container"),(0,s.kt)("li",{parentName:"ol"},"SVG Box"),(0,s.kt)("li",{parentName:"ol"},"Base Circle"),(0,s.kt)("li",{parentName:"ol"},"Now Cirlce"),(0,s.kt)("li",{parentName:"ol"},"Label")),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("h3",{id:"basic-circular-progress"},"Basic Circular Progress"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function CircularProgressExample() {\n  return <CircularProgress ariaLabel="fifty percent" now={50} />\n}\n')),(0,s.kt)("h3",{id:"indeterminate-loading-state"},"Indeterminate (loading) State"),(0,s.kt)("p",null,"When you need to show the user that content ",(0,s.kt)("strong",{parentName:"p"},"within a page")," (that has already been loaded) is updating, use the indeterminate state. To do this, set the ",(0,s.kt)("inlineCode",{parentName:"p"},"kind")," prop to ",(0,s.kt)("inlineCode",{parentName:"p"},"indeterminate"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function IndeterminateCircularProgressExample() {\n  return (\n    <CircularProgress ariaLabel="Loading new courses" kind="indeterminate" />\n  )\n}\n')),(0,s.kt)("h3",{id:"sizes"},"Sizes"),(0,s.kt)("p",null,"The default size of the Circular Progress is ",(0,s.kt)("inlineCode",{parentName:"p"},"m"),". This size should be used in most, if not all cases. The ",(0,s.kt)("inlineCode",{parentName:"p"},"xs")," size should only be used when the default size is too large."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function SizesCircularProgressExample() {\n  return (\n    <Grid cols="repeat(12, 1fr)" gap={8} data-site-override="alignGridCenter">\n      <GridItem>\n        <CircularProgress ariaLabel="Xtra small progress" now={25} size="xs" />\n      </GridItem>\n\n      <GridItem>\n        <CircularProgress ariaLabel="Medium progress" now={50} size="m" />\n      </GridItem>\n    </Grid>\n  )\n}\n')),(0,s.kt)("h3",{id:"customizing"},"Customizing"),(0,s.kt)("p",null,"There are 3 ways to customize the CircularProgress component."),(0,s.kt)("h4",{id:"1-unused-classes"},"1. Unused Classes"),(0,s.kt)("p",null,"Each component layer of the CircularProgress has a unused class name that can be utilized in your local CSS to customize the CircularProgress at any level."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"pando-circular-progress"),": The container element of the Progress."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"pando-circular-progress-box"),": The SVG element that contains the Progress."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"pando-circular-progress-base"),": The base circle of the Progress."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"pando-circular-progress-now"),": The now circle of the Progress.")),(0,s.kt)("h4",{id:"2-passing-a-classname-prop"},"2. Passing a ",(0,s.kt)("inlineCode",{parentName:"h4"},"className")," prop"),(0,s.kt)("p",null,"You can pass a ",(0,s.kt)("inlineCode",{parentName:"p"},"className")," prop to the CircularProgress component to customize the CircularProgress wrapper div element. This is useful if your project uses ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/css-modules/css-modules"},"CSS Modules")," or a CSS-in-JS library like ",(0,s.kt)("a",{parentName:"p",href:"https://emotion.sh/docs/introduction"},"Emotion"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Example of using CSS Modules to customize the CircularProgress." showLineNumbers',title:'"Example',of:!0,using:!0,CSS:!0,Modules:!0,to:!0,customize:!0,the:!0,'CircularProgress."':!0,showLineNumbers:!0},"import customStyles from './customStyles.module.css'\n\nfunction CustomCircularProgress(props) {\n  return (\n    <CircularProgress\n      className={customStyles.customProgressWrapper}\n      ariaLabel=\"50%\"\n      now={50}\n    />\n  )\n}\n")),(0,s.kt)("h4",{id:"3-ejected-circularprogress"},"3. Ejected CircularProgress"),(0,s.kt)("p",null,'For a low-level "ejected" approach, you can use the Headless-styles API to customize the CircularProgress however you prefer while keeping the accessibility behavior.'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"showLineNumbers",showLineNumbers:!0},"import { getCircularProgressProps } from '@pluralsight/headless-styles'\n")),(0,s.kt)("p",null,"To learn more about the Headless-styles API, check out the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/pluralsight/pando/blob/main/packages/headless-styles/src/components/CircularProgress/circularProgressCSS.ts"},"Headless-styles documentation"),"."),(0,s.kt)("h2",{id:"behavior"},"Behavior"),(0,s.kt)("h3",{id:"loading"},"Loading"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Do")," use Circular Progress to display an update of information to a ",(0,s.kt)("strong",{parentName:"p"},"specific part of a previously loaded page"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Don't")," use the Circular Progress to show page load progress. Instead, use a Skeleton."),(0,s.kt)("h3",{id:"text"},"Text"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Do")," use text describing the progress in close proximity."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Don't")," use text or other elements within the Circular Progress."),(0,s.kt)("h3",{id:"sizing"},"Sizing"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Do")," use the default size for all use cases where possible of the Circular Progress."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Don't"),' use the "xs" size ',(0,s.kt)("em",{parentName:"p"},"unless")," it is a ",(0,s.kt)("strong",{parentName:"p"},"last resort"),"."),(0,s.kt)("h2",{id:"api"},"API"),(0,s.kt)("h3",{id:"parameters"},"Parameters"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"interface CircularProgressOptions extends HTMLAttributes<HTMLDivElement> {\n  ariaLabel: string\n  displayLabel?: boolean\n  kind?: 'determinate' | 'indeterminate'\n  max?: number\n  min?: number\n  now?: number\n  size?: 'xs' | 'm'\n}\n")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Any props that are allowed on the ",(0,s.kt)("inlineCode",{parentName:"li"},"div")," element."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"ariaLabel")," - A string that describes the progress to screen readers."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"displayLabel")," - A boolean that determines whether or not to display the progress percentage."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"kind")," - A string that determines whether the progress is determinate or indeterminate."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"max")," - A number that determines the maximum value of the progress. The default value is 100."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"min")," - A number that determines the minimum value of the progress. The default value is 0."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"now")," - A number that determines the current value of the progress. The default value is 0."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"size")," - A string that determines the size of the progress. The default value is 'm'.")),(0,s.kt)("h3",{id:"size-mapping"},"Size Mapping"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Circular Progress size rules."',title:'"Circular',Progress:!0,size:!0,'rules."':!0},"{\n  xs: 'Should only be used when the default size (M) is too large.',\n  m: 'Should be used in most, if not all cases.'\n}\n")),(0,s.kt)("h2",{id:"accessibility"},"Accessibility"),(0,s.kt)("p",null,"The Pando CircularProgress is fully accessible and screen-readable through the following features:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"The ",(0,s.kt)("inlineCode",{parentName:"li"},"ariaLabel")," prop is required and is used to describe the progress to screen readers."),(0,s.kt)("li",{parentName:"ol"},"The ",(0,s.kt)("inlineCode",{parentName:"li"},"aria-valuenow")," attribute is used to describe the current value of the progress to screen readers."),(0,s.kt)("li",{parentName:"ol"},"The ",(0,s.kt)("inlineCode",{parentName:"li"},"aria-valuemin")," attribute is used to describe the minimum value of the progress to screen readers."),(0,s.kt)("li",{parentName:"ol"},"The ",(0,s.kt)("inlineCode",{parentName:"li"},"aria-valuemax")," attribute is used to describe the maximum value of the progress to screen readers."),(0,s.kt)("li",{parentName:"ol"},"The ",(0,s.kt)("inlineCode",{parentName:"li"},"role")," attribute is set to ",(0,s.kt)("inlineCode",{parentName:"li"},"progressbar")," to describe the type of progress to screen readers.")))}d.isMDXComponent=!0}}]);