"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8366],{64183:(e,t,a)=>{a.d(t,{dS:()=>o,fK:()=>l,C9:()=>c,ZP:()=>m});var n=a(70079),r=a(5735);const i={linkList:"linkList_sLwJ",linkItem:"linkItem_ESvF"};function s(e){return n.createElement("li",{className:i.linkItem},n.createElement(r.Z,e,e.children))}function l(e){return n.createElement(s,{href:e.href},e.children??"View on Github")}function o(e){return n.createElement(s,{href:e.href},"View on Figma")}function c(e){return n.createElement("ul",{className:i.linkList},e.children)}function m(e){const{figma:t,github:a}=e;return n.createElement("ul",{className:i.linkList},a&&n.createElement(l,{href:a}),t&&n.createElement(o,{href:t}))}},12107:(e,t,a)=>{a(70079)},5735:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(70079),r=a(59788),i=a(65710),s=a(15537),l=a(28754);function o(e){const{href:t}=e,a=(0,i.L)({ariaHidden:!0,size:"s"}),o=t.includes("github")?s.Z:l.Z;return n.createElement(r.TextLink,e,n.createElement(o,a),e.children)}},46516:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>m});var n=a(10328),r=(a(70079),a(38570)),i=a(64183);a(12107);const s={tags:["Profile Image"],title:"Avatar"},l=void 0,o={unversionedId:"reference/components/avatar",id:"reference/components/avatar",title:"Avatar",description:"Used to represent a user with either a profile image, initials, or icon.",source:"@site/docs/reference/components/avatar.mdx",sourceDirName:"reference/components",slug:"/reference/components/avatar",permalink:"/docs/reference/components/avatar",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/reference/components/avatar.mdx",tags:[{label:"Profile Image",permalink:"/docs/tags/profile-image"}],version:"current",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["Profile Image"],title:"Avatar"},sidebar:"reference",previous:{title:"Admonition",permalink:"/docs/reference/components/admonition"},next:{title:"Badge",permalink:"/docs/reference/components/badge"}},c={},m=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Static Avatar",id:"static-avatar",level:3},{value:"Actionable Avatar",id:"actionable-avatar",level:3},{value:"Sizes",id:"sizes",level:3},{value:"Customizing",id:"customizing",level:3},{value:"1. Unused Classes",id:"1-unused-classes",level:4},{value:"2. Passing a <code>className</code> prop",id:"2-passing-a-classname-prop",level:4},{value:"3. Ejected Avatar",id:"3-ejected-avatar",level:4},{value:"Behavior",id:"behavior",level:2},{value:"Placement",id:"placement",level:3},{value:"States",id:"states",level:3},{value:"Static/Action Scenarios",id:"staticaction-scenarios",level:3},{value:"API",id:"api",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Size Mapping",id:"size-mapping",level:3},{value:"Accessibility",id:"accessibility",level:2}],p={toc:m},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",{className:"size-xxl"},"Used to represent a user with either a profile image, initials, or icon."),(0,r.kt)(i.C9,{mdxType:"DocsLinkList"},(0,r.kt)(i.fK,{href:"https://github.com/pluralsight/pando/tree/main/packages/react/src/components/Avatar.tsx",mdxType:"DocsGithubLink"}),(0,r.kt)(i.fK,{href:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/Avatar/avatarCSS.ts",mdxType:"DocsGithubLink"},"View Core API"),(0,r.kt)(i.dS,{href:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsFigmaLink"})),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Avatar } from '@pluralsight/react'\n")),(0,r.kt)("admonition",{title:"Pitfall",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"This component is only compatible with ",(0,r.kt)("strong",{parentName:"p"},"React v18 and above")," and is a ",(0,r.kt)("strong",{parentName:"p"},"client component"),". This is due to the use of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Suspense")," tag and advanced preloading logic. If you are using an older version of React, we highly recommend you upgrade for both security and performance reasons.")),(0,r.kt)("h2",{id:"anatomy"},"Anatomy"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Container"),(0,r.kt)("li",{parentName:"ol"},"Image, initials, or icon")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"static-avatar"},"Static Avatar"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function BasicAvatar() {\n  return (\n    <Grid cols="12" gap={16}>\n      <GridItem col="span 2">\n        <Avatar\n          name="some person"\n          src="https://source.unsplash.com/random/?face&fit=facearea&facepad=2&w=256&h=256&q=80"\n        />\n      </GridItem>\n\n      <GridItem col="span 2">\n        <Avatar name="some person" src="http://badURL" />\n      </GridItem>\n\n      <GridItem col="span 2">\n        <Avatar />\n      </GridItem>\n    </Grid>\n  )\n}\n')),(0,r.kt)("h3",{id:"actionable-avatar"},"Actionable Avatar"),(0,r.kt)("p",null,"When an avatar is meant to be interactive, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," sentiment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function ActionableAvatar() {\n  function handleAvatarClick() {\n    // show user profile in sidebar\n  }\n\n  return (\n    <div style={{ paddingTop: \'1rem\', paddingBottom: \'1rem\' }}>\n      <Grid cols="12" gap={16}>\n        <GridItem col="span 2">\n          <a href="/" target="_blank">\n            <Avatar\n              name="some person"\n              sentiment="action"\n              src="https://source.unsplash.com/random/?face&fit=facearea&facepad=2&w=256&h=256&q=80"\n            />\n          </a>\n        </GridItem>\n\n        <GridItem col="span 2">\n          <Button\n            data-site-override="resetHeight"\n            usage="text"\n            onClick={handleAvatarClick}\n          >\n            <Avatar name="some person" sentiment="action" src="" />\n          </Button>\n        </GridItem>\n      </Grid>\n    </div>\n  )\n}\n')),(0,r.kt)("h3",{id:"sizes"},"Sizes"),(0,r.kt)("p",null,"To adjust the size, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"size")," prop. The default size is ",(0,r.kt)("inlineCode",{parentName:"p"},"m"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function AvatarSizes() {\n  const src =\n    \'https://source.unsplash.com/random/?face&fit=facearea&facepad=2&w=256&h=256&q=80\'\n\n  return (\n    <Grid cols="12" gap={16} data-site-override="alignGridCenter">\n      <GridItem col="span 1">\n        <Avatar name="xtra small" size="xs" src={src} />\n      </GridItem>\n\n      <GridItem col="span 1">\n        <Avatar name="small" size="s" src={src} />\n      </GridItem>\n\n      <GridItem col="span 2">\n        <Avatar name="medium" size="m" src={src} />\n      </GridItem>\n\n      <GridItem col="span 2">\n        <Avatar name="large" size="l" src={src} />\n      </GridItem>\n\n      <GridItem col="span 3">\n        <Avatar name="xtra large" size="xl" src={src} />\n      </GridItem>\n    </Grid>\n  )\n}\n')),(0,r.kt)("h3",{id:"customizing"},"Customizing"),(0,r.kt)("p",null,"There are 3 ways to customize the Avatar component."),(0,r.kt)("h4",{id:"1-unused-classes"},"1. Unused Classes"),(0,r.kt)("p",null,"Each component layer of the Avatar has a unused class name that can be utilized in your local CSS to customize the Avatar at any level."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"pando-avatar"),": The container of the Avatar."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"pando-avatar-image"),": The image element."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"pando-avatar-label"),": The text element."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"pando-avatar-icon"),": The icon element.")),(0,r.kt)("h4",{id:"2-passing-a-classname-prop"},"2. Passing a ",(0,r.kt)("inlineCode",{parentName:"h4"},"className")," prop"),(0,r.kt)("p",null,"You can pass a ",(0,r.kt)("inlineCode",{parentName:"p"},"className")," prop to the Avatar components to customize the Avatar at the container level. This is useful if your project uses ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/css-modules/css-modules"},"CSS Modules")," or a CSS-in-JS library like ",(0,r.kt)("a",{parentName:"p",href:"https://emotion.sh/docs/introduction"},"Emotion"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Example of using CSS Modules to customize the Avatar." showLineNumbers',title:'"Example',of:!0,using:!0,CSS:!0,Modules:!0,to:!0,customize:!0,the:!0,'Avatar."':!0,showLineNumbers:!0},"import customStyles from './customStyles.module.css'\n\nfunction CustomAvatar(props) {\n  return (\n    <Avatar\n      className={customStyles.customAvatar}\n      name={props.name}\n      src={props.src}\n    />\n  )\n}\n")),(0,r.kt)("h4",{id:"3-ejected-avatar"},"3. Ejected Avatar"),(0,r.kt)("p",null,'For a low-level "ejected" approach, you can use the Headless-styles API to customize the Avatar however you prefer while keeping the accessibility behavior.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"showLineNumbers",showLineNumbers:!0},"import {\n  getAvatarProps,\n  getAvatarImageProps,\n  getAvatarLabelProps,\n  getAvatarIconOptions,\n} from '@pluralsight/headless-styles'\n")),(0,r.kt)("p",null,"To learn more about the Headless-styles API, check out the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pluralsight/pando/blob/main/packages/headless-styles/src/components/Avatar/avatarCSS.ts"},"Headless-styles documentation"),"."),(0,r.kt)("h2",{id:"behavior"},"Behavior"),(0,r.kt)("h3",{id:"placement"},"Placement"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do")," keep the original shape of the Avatar and clear from any portion being blocked."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don't")," change the shape of the Avatar or block a portion of the component."),(0,r.kt)("h3",{id:"states"},"States"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do")," use the Image version as the preferred solution, then the Initials as a fallback version."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don't")," use the Icon version ",(0,r.kt)("em",{parentName:"p"},"unless")," it is a ",(0,r.kt)("strong",{parentName:"p"},"last resort"),"."),(0,r.kt)("h3",{id:"staticaction-scenarios"},"Static/Action Scenarios"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do")," use the actionable Avatar when you need the Avatar to trigger an action."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don't")," use the static Avatar when you need the Avatar to trigger an action."),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface AvatarProps extends HTMLAttributes<HTMLImageElement> {\n  name?: string\n  size?: 'xs' | 's' | 'm' | 'l' | 'xl'\n  src?: string\n  sentiment?: 'action' | 'default'\n}\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Any props that can be passed to a ",(0,r.kt)("inlineCode",{parentName:"li"},"div")," element."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," - The name of the user."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"src")," - The URL of the image."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"size")," - The size of the Avatar."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"sentiment")," - The sentiment of the Avatar.")),(0,r.kt)("h3",{id:"size-mapping"},"Size Mapping"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Avatar sizes converted to pixels."',title:'"Avatar',sizes:!0,converted:!0,to:!0,'pixels."':!0},"{\n  // Menu bars or tight areas where multiple users may be listed\n  xs: '32px',\n\n  // Reference user/author in meta data space or reference card\n  s: '48px',\n\n  // Single-page or focused experience to identify the author or user profile\n  m: '80px',\n\n  // Profile card as the primary image\n  l: '120px',\n\n  // Hero header or primary image in Profile page\n  xl: '160px',\n}\n")),(0,r.kt)("h2",{id:"accessibility"},"Accessibility"),(0,r.kt)("p",null,"The Pando Avatar is fully accessible and screen-readable through the following features:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"alt")," attribute is added for the ",(0,r.kt)("inlineCode",{parentName:"li"},"img")," element/version."),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"aria-label")," attribute is added for the label element/version."),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"aria-hidden")," attribute is added for the icon element/version.")))}u.isMDXComponent=!0}}]);