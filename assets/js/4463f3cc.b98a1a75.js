"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2648],{15566:function(e,t,n){n.d(t,{dS:function(){return c},fK:function(){return r},C9:function(){return p},ZP:function(){return u}});var a=n(45721),l=n(84140),o="linkList_sLwJ",i="linkItem_ESvF";function s(e){return a.createElement("li",{className:i},a.createElement(l.Z,e,e.children))}function r(e){return a.createElement(s,{href:e.href},e.children??"View on Github")}function c(e){return a.createElement(s,{href:e.href},"View on Figma")}function p(e){return a.createElement("ul",{className:o},e.children)}function u(e){const{figma:t,github:n}=e;return a.createElement("ul",{className:o},n&&a.createElement(r,{href:n}),t&&a.createElement(c,{href:t}))}},45945:function(e,t,n){n(45721)},84140:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(45721),l=n(32662),o=n(51596),i=n(44070),s=n(42949);function r(e){const{href:t}=e,n=(0,o.L)({ariaHidden:!0,size:"s"}),r=t.includes("github")?i.Z:s.Z;return a.createElement(l.TextLink,e,a.createElement(r,n),e.children)}},14124:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return r},toc:function(){return p}});var a=n(81648),l=(n(45721),n(70167)),o=n(15566);n(45945);const i={tags:["page loading","route loading"],title:"Skeleton"},s=void 0,r={unversionedId:"reference/components/skeleton",id:"reference/components/skeleton",title:"Skeleton",description:"Used to display a loading state for page content.",source:"@site/docs/reference/components/skeleton.mdx",sourceDirName:"reference/components",slug:"/reference/components/skeleton",permalink:"/docs/reference/components/skeleton",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/reference/components/skeleton.mdx",tags:[{label:"page loading",permalink:"/docs/tags/page-loading"},{label:"route loading",permalink:"/docs/tags/route-loading"}],version:"current",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["page loading","route loading"],title:"Skeleton"},sidebar:"reference",previous:{title:"Show",permalink:"/docs/reference/components/show"},next:{title:"Table",permalink:"/docs/reference/components/table"}},c={},p=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Text Skeleton",id:"text-skeleton",level:3},{value:"Content Block Skeleton",id:"content-block-skeleton",level:3},{value:"Circular Skeleton",id:"circular-skeleton",level:3},{value:"Fallback Example",id:"fallback-example",level:3},{value:"Customizing",id:"customizing",level:3},{value:"1. Unused Classes",id:"1-unused-classes",level:4},{value:"2. Passing a <code>className</code> prop",id:"2-passing-a-classname-prop",level:4},{value:"3. Ejected Skeleton",id:"3-ejected-skeleton",level:4},{value:"Behavior",id:"behavior",level:2},{value:"Layout",id:"layout",level:3},{value:"Usage",id:"usage-1",level:3},{value:"API",id:"api",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Accessibility",id:"accessibility",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",{className:"size-xxl"},"Used to display a loading state for page content."),(0,l.kt)(o.C9,{mdxType:"DocsLinkList"},(0,l.kt)(o.fK,{href:"https://github.com/pluralsight/pando/tree/main/packages/react/src/components/Skeleton.tsx",mdxType:"DocsGithubLink"}),(0,l.kt)(o.fK,{href:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/Skeleton/skeletonCSS.ts",mdxType:"DocsGithubLink"},"View Core API"),(0,l.kt)(o.dS,{href:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsFigmaLink"})),(0,l.kt)("h2",{id:"import"},"Import"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Skeleton } from '@pluralsight/react'\n")),(0,l.kt)("h2",{id:"anatomy"},"Anatomy"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Container"),(0,l.kt)("li",{parentName:"ol"},"Content (optional)"),(0,l.kt)("li",{parentName:"ol"},"Text (optional)")),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("h3",{id:"text-skeleton"},"Text Skeleton"),(0,l.kt)("p",null,"Used to represent where lines of text may appear within your page."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function TextSkeletonExamples() {\n  return (\n    <div>\n      <Skeleton kind="text" />\n      <Skeleton kind="text" />\n      <Skeleton kind="text" />\n    </div>\n  )\n}\n')),(0,l.kt)("h3",{id:"content-block-skeleton"},"Content Block Skeleton"),(0,l.kt)("p",null,"Used to represent where a block of content may appear within your page."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function ContentSkeletonExample() {\n  return (\n    <Skeleton kind="content">\n      <h2 data-site-override="hidden">Some Title</h2>\n      <p>A description of the content.</p>\n    </Skeleton>\n  )\n}\n')),(0,l.kt)("h3",{id:"circular-skeleton"},"Circular Skeleton"),(0,l.kt)("p",null,"Used to represent where circular shaped content may appear within your page."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function CircleSkeletonExample() {\n  return <Skeleton kind="circle" />\n}\n')),(0,l.kt)("h3",{id:"fallback-example"},"Fallback Example"),(0,l.kt)("p",null,"Used to design a Profile Card loading state to pass into a React ",(0,l.kt)("inlineCode",{parentName:"p"},"Suspense")," component via the ",(0,l.kt)("inlineCode",{parentName:"p"},"fallback")," property to easily managing the show/hide logic."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function ProfileCardFallback() {\n  return (\n    <div\n      style={{\n        border: '1px solid var(--ps-border-weak)',\n        borderRadius: '6px',\n        padding: '1rem',\n        textAlign: 'center',\n        width: '33%',\n      }}\n    >\n      <div style={{ paddingBottom: '1rem' }}>\n        <Skeleton\n          kind=\"circle\"\n          style={{ height: '5rem', margin: '0 auto', width: '5rem' }}\n        />\n      </div>\n      <Skeleton\n        kind=\"content\"\n        style={{\n          margin: '0 auto',\n        }}\n      >\n        <h3 data-site-override=\"hidden\">That Person</h3>\n      </Skeleton>\n      <Skeleton kind=\"text\" style={{ margin: '0 auto', width: '8rem' }} />\n    </div>\n  )\n}\n")),(0,l.kt)("admonition",{title:"Diving deeper into page loading",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Learn more about the page loading pattern in the ",(0,l.kt)("a",{parentName:"p",href:"../../learn/learn-pando/design-patterns/page-loading"},"Page Loading Pattern")," lesson.")),(0,l.kt)("h3",{id:"customizing"},"Customizing"),(0,l.kt)("p",null,"There are 3 ways to customize the Skeleton component."),(0,l.kt)("h4",{id:"1-unused-classes"},"1. Unused Classes"),(0,l.kt)("p",null,"Each component layer of the Skeleton has a unused class name that can be utilized in your local CSS to customize the Skeleton at any level."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"pando-skeleton"),": The element of the Skeleton.")),(0,l.kt)("h4",{id:"2-passing-a-classname-prop"},"2. Passing a ",(0,l.kt)("inlineCode",{parentName:"h4"},"className")," prop"),(0,l.kt)("p",null,"You can pass a ",(0,l.kt)("inlineCode",{parentName:"p"},"className")," prop to the Skeleton component to customize the Skeleton. This is useful if your project uses ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/css-modules/css-modules"},"CSS Modules")," or a CSS-in-JS library like ",(0,l.kt)("a",{parentName:"p",href:"https://emotion.sh/docs/introduction"},"Emotion"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Example of using CSS Modules to customize the Skeleton." showLineNumbers',title:'"Example',of:!0,using:!0,CSS:!0,Modules:!0,to:!0,customize:!0,the:!0,'Skeleton."':!0,showLineNumbers:!0},"import customStyles from './customStyles.module.css'\n\nfunction CustomTextSkeleton(props) {\n  return (\n    <Skeleton kind=\"text\" className={customStyles.customSkeleton}>\n      {props.children}\n    </Skeleton>\n  )\n}\n")),(0,l.kt)("h4",{id:"3-ejected-skeleton"},"3. Ejected Skeleton"),(0,l.kt)("p",null,'For a low-level "ejected" approach, you can use the Headless-styles API to customize the Skeleton however you prefer while keeping the accessibility behavior.'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"showLineNumbers",showLineNumbers:!0},"import { getSkeletonProps } from '@pluralsight/headless-styles'\n")),(0,l.kt)("p",null,"To learn more about the Headless-styles API, check out the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pluralsight/pando/blob/main/packages/headless-styles/src/components/Skeleton/skeletonCSS.ts"},"Headless-styles documentation"),"."),(0,l.kt)("h2",{id:"behavior"},"Behavior"),(0,l.kt)("h3",{id:"layout"},"Layout"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Do")," use a 1px border when creating a container for Skeleton content."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Don't")," use the Skeleton for a container. Instead, use a border with multiple Skeletons that match the content within the container."),(0,l.kt)("h3",{id:"usage-1"},"Usage"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Do")," use a Skeleton to represent content of a ",(0,l.kt)("strong",{parentName:"p"},"page")," that is in the process of loading."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Don't")," use a Skeleton for static content or as a placeholder for dynamic content."),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {\n  kind?: 'content' | 'text' | 'circle'\n}\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Any props that can be passed to a ",(0,l.kt)("inlineCode",{parentName:"li"},"div")," element."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"kind")," - determines the style of the Skeleton. The default value is ",(0,l.kt)("inlineCode",{parentName:"li"},"content"),".")),(0,l.kt)("h2",{id:"accessibility"},"Accessibility"),(0,l.kt)("p",null,"The Pando Skeleton combined with semantic HTML allow the Skeleton to be fully accessible and screen-readable by default."))}d.isMDXComponent=!0}}]);