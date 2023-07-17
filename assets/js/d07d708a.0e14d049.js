"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2022],{15566:function(e,t,n){n.d(t,{dS:function(){return u},fK:function(){return l},C9:function(){return p},ZP:function(){return m}});var a=n(45721),o=n(84140),i="linkList_sLwJ",s="linkItem_ESvF";function r(e){return a.createElement("li",{className:s},a.createElement(o.Z,e,e.children))}function l(e){return a.createElement(r,{href:e.href},e.children??"View on Github")}function u(e){return a.createElement(r,{href:e.href},"View on Figma")}function p(e){return a.createElement("ul",{className:i},e.children)}function m(e){const{figma:t,github:n}=e;return a.createElement("ul",{className:i},n&&a.createElement(l,{href:n}),t&&a.createElement(u,{href:t}))}},45945:function(e,t,n){n(45721)},84140:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(45721),o=n(32662),i=n(51596),s=n(44070),r=n(42949);function l(e){const{href:t}=e,n=(0,i.L)({ariaHidden:!0,size:"s"}),l=t.includes("github")?s.Z:r.Z;return a.createElement(o.TextLink,e,a.createElement(l,n),e.children)}},54927:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return r},default:function(){return c},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var a=n(81648),o=(n(45721),n(70167)),i=n(15566);n(45945);const s={tags:["action"],title:"Button"},r=void 0,l={unversionedId:"reference/components/button",id:"reference/components/button",title:"Button",description:"Used to perform an action, such as submitting a form, opening/closing a",source:"@site/docs/reference/components/button.mdx",sourceDirName:"reference/components",slug:"/reference/components/button",permalink:"/docs/reference/components/button",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/reference/components/button.mdx",tags:[{label:"action",permalink:"/docs/tags/action"}],version:"current",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["action"],title:"Button"},sidebar:"reference",previous:{title:"Badge",permalink:"/docs/reference/components/badge"},next:{title:"Checkbox",permalink:"/docs/reference/components/checkbox"}},u={},p=[{value:"Anatomy",id:"anatomy",level:2},{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Buttons",id:"basic-buttons",level:3},{value:"Outline Buttons",id:"outline-buttons",level:3},{value:"Text Buttons",id:"text-buttons",level:3},{value:"Button with icon",id:"button-with-icon",level:3},{value:"Sizes",id:"sizes",level:3},{value:"Customizing",id:"customizing",level:3},{value:"1. Unused Classes",id:"1-unused-classes",level:4},{value:"2. Passing a <code>className</code> prop",id:"2-passing-a-classname-prop",level:4},{value:"3. Ejected Button",id:"3-ejected-button",level:4},{value:"Behavior",id:"behavior",level:2},{value:"Patterns",id:"patterns",level:3},{value:"Sentiment",id:"sentiment",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Sizing",id:"sizing",level:3},{value:"API",id:"api",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Size Mapping",id:"size-mapping",level:3},{value:"Accessibility",id:"accessibility",level:2}],m={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",{className:"size-xxl"},"Used to perform an action, such as submitting a form, opening/closing a dialog, or using a cancel action."),(0,o.kt)(i.C9,{mdxType:"DocsLinkList"},(0,o.kt)(i.fK,{href:"https://github.com/pluralsight/pando/tree/main/packages/react/src/components/Button.tsx",mdxType:"DocsGithubLink"}),(0,o.kt)(i.fK,{href:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/Button/buttonCSS.ts",mdxType:"DocsGithubLink"},"View Core API"),(0,o.kt)(i.dS,{href:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsFigmaLink"})),(0,o.kt)("h2",{id:"anatomy"},"Anatomy"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Leading Icon (optional)"),(0,o.kt)("li",{parentName:"ol"},"Label"),(0,o.kt)("li",{parentName:"ol"},"Trailing Icon (optional)")),(0,o.kt)("h2",{id:"import"},"Import"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Button } from '@pluralsight/react'\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"basic-buttons"},"Basic Buttons"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function BasicButtonExample() {\n  return (\n    <Grid cols="repeat(6, 1fr)" gap={8}>\n      <GridItem>\n        <Button>Action</Button>\n      </GridItem>\n\n      <GridItem>\n        <Button sentiment="default">Default</Button>\n      </GridItem>\n\n      <GridItem>\n        <Button sentiment="danger">Danger</Button>\n      </GridItem>\n\n      <GridItem>\n        <Button usage="outline">Outline</Button>\n      </GridItem>\n\n      <GridItem>\n        <Button usage="text">Text</Button>\n      </GridItem>\n\n      <GridItem>\n        <Button disabled>Disabled</Button>\n      </GridItem>\n    </Grid>\n  )\n}\n')),(0,o.kt)("h3",{id:"outline-buttons"},"Outline Buttons"),(0,o.kt)("p",null,"When you need a button that is not the primary focus of the page, use an outline button. To create an outline button, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"usage")," prop and set it to ",(0,o.kt)("inlineCode",{parentName:"p"},"outline"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function OutlineButtonExample() {\n  return (\n    <Grid cols="repeat(6, 1fr)" gap={8}>\n      <GridItem>\n        <Button sentiment="action" usage="outline">\n          Action\n        </Button>\n      </GridItem>\n\n      <GridItem>\n        <Button sentiment="default" usage="outline">\n          Default\n        </Button>\n      </GridItem>\n\n      <GridItem>\n        <Button sentiment="danger" usage="outline">\n          Danger\n        </Button>\n      </GridItem>\n\n      <GridItem>\n        <Button disabled={true} usage="outline">\n          Disabled\n        </Button>\n      </GridItem>\n    </Grid>\n  )\n}\n')),(0,o.kt)("h3",{id:"text-buttons"},"Text Buttons"),(0,o.kt)("p",null,"When you need a button that is not the primary or secondary focus of the page, use a text button. To create a text button, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"usage")," prop and set it to ",(0,o.kt)("inlineCode",{parentName:"p"},"text"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function TextButtonExample() {\n  return (\n    <Grid cols="repeat(6, 1fr)" gap={8}>\n      <GridItem>\n        <Button usage="text">Action</Button>\n      </GridItem>\n\n      <GridItem>\n        <Button sentiment="default" usage="text">\n          Default\n        </Button>\n      </GridItem>\n\n      <GridItem>\n        <Button sentiment="danger" usage="text">\n          Danger\n        </Button>\n      </GridItem>\n\n      <GridItem>\n        <Button disabled={true} usage="text">\n          Disabled\n        </Button>\n      </GridItem>\n    </Grid>\n  )\n}\n')),(0,o.kt)("h3",{id:"button-with-icon"},"Button with icon"),(0,o.kt)("p",null,"To display an Icon at the start or end of a button, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"startIcon")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"endIcon")," prop."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"// import { PlaceholderIcon } from '@pluralsight/icons'\n\nfunction ButtonWithIconExample() {\n  return (\n    <Grid cols=\"repeat(5, 1fr)\" gap={8}>\n      <GridItem>\n        <Button startIcon={PlaceholderIcon}>Start icon</Button>\n      </GridItem>\n\n      <GridItem>\n        <Button endIcon={PlaceholderIcon}>End icon</Button>\n      </GridItem>\n    </Grid>\n  )\n}\n")),(0,o.kt)("h3",{id:"sizes"},"Sizes"),(0,o.kt)("p",null,"Buttons come in two sizes: ",(0,o.kt)("inlineCode",{parentName:"p"},"m")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"l"),". The default size is ",(0,o.kt)("inlineCode",{parentName:"p"},"l"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function ButtonSizes() {\n  return (\n    <Grid cols="repeat(5, 1fr)" gap={8} data-site-override="alignGridCenter">\n      <GridItem>\n        <Button size="m">Medium</Button>\n      </GridItem>\n\n      <GridItem>\n        <Button size="l">Large (default)</Button>\n      </GridItem>\n    </Grid>\n  )\n}\n')),(0,o.kt)("h3",{id:"customizing"},"Customizing"),(0,o.kt)("p",null,"There are 3 ways to customize the Button component."),(0,o.kt)("h4",{id:"1-unused-classes"},"1. Unused Classes"),(0,o.kt)("p",null,"Each component layer of the Button has a unused class name that can be utilized in your local CSS to customize the Button at any level."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"pando-button"),": The element of the Button.")),(0,o.kt)("h4",{id:"2-passing-a-classname-prop"},"2. Passing a ",(0,o.kt)("inlineCode",{parentName:"h4"},"className")," prop"),(0,o.kt)("p",null,"You can pass a ",(0,o.kt)("inlineCode",{parentName:"p"},"className")," prop to the Button component to customize the Button. This is useful if your project uses ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/css-modules/css-modules"},"CSS Modules")," or a CSS-in-JS library like ",(0,o.kt)("a",{parentName:"p",href:"https://emotion.sh/docs/introduction"},"Emotion"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Example of using CSS Modules to customize the Button." showLineNumbers',title:'"Example',of:!0,using:!0,CSS:!0,Modules:!0,to:!0,customize:!0,the:!0,'Button."':!0,showLineNumbers:!0},"import customStyles from './customStyles.module.css'\n\nfunction CustomButton(props) {\n  return <Button className={customStyles.customButton}>{props.children}</Button>\n}\n")),(0,o.kt)("h4",{id:"3-ejected-button"},"3. Ejected Button"),(0,o.kt)("p",null,'For a low-level "ejected" approach, you can use the Headless-styles API to customize the Button however you prefer while keeping the accessibility behavior.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"showLineNumbers",showLineNumbers:!0},"import {\n  getButtonProps,\n  getButtonIconOptions,\n} from '@pluralsight/headless-styles'\n")),(0,o.kt)("p",null,"To learn more about the Headless-styles API, check out the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pluralsight/pando/blob/main/packages/headless-styles/src/components/Button/buttonCSS.ts"},"Headless-styles documentation"),"."),(0,o.kt)("h2",{id:"behavior"},"Behavior"),(0,o.kt)("h3",{id:"patterns"},"Patterns"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do")," use the Button for an actionable event needed from the user."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Don't")," use the Button for navigation or styled links. Instead use the TextLink component."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do")," keep Button usage minimal within an area."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Don't")," use more than three Buttons in a single area."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do")," space Buttons apart by 16px (1rem)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Don't")," space Buttons apart greater or less than 16px (1rem)."),(0,o.kt)("h3",{id:"sentiment"},"Sentiment"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do"),' use the "action" sentiment for all use cases where possible.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Don't"),' use the "default" sentiment ',(0,o.kt)("em",{parentName:"p"},"unless")," it is a ",(0,o.kt)("strong",{parentName:"p"},"last resort"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do"),' use the "danger" sentiment for cancel or destructive actions.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Don't"),' use the "default" sentiment for cancel or destructive actions.'),(0,o.kt)("h3",{id:"usage-1"},"Usage"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do"),' use the "outline" usage for a ',(0,o.kt)("strong",{parentName:"p"},"lower priority alternative"),' use case to the "default" sentiment.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Don't"),' use the "outline" usage for cancel or destructive actions.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do"),' use the "text" usage for the ',(0,o.kt)("strong",{parentName:"p"},"lowest")," priority action."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Don't"),' use the "text" usage as a high-priority action.'),(0,o.kt)("h3",{id:"sizing"},"Sizing"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do")," use the default size for all use cases where possible of the Button."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Don't"),' use the "m" size ',(0,o.kt)("em",{parentName:"p"},"unless")," it is a ",(0,o.kt)("strong",{parentName:"p"},"last resort"),"."),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ButtonOptions extends ButtonHTMLAttributes<HTMLButtonElement> {\n  sentiment?: 'default' | 'action' | 'danger'\n  usage?: 'filled' | 'outline' | 'text'\n  size?: 'm' | 'l'\n  endIcon?: ElementType\n  startIcon?: ElementType\n}\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Any props that can be passed to an HTML button element."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"sentiment")," - Determines the theme of the button. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"action"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"usage")," - Determines the visual style of the button. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"filled"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"size")," - Determines the size of the button. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"l"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"endIcon")," - Determines the icon to display at the end of the button."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"startIcon")," - Determines the icon to display at the start of the button.")),(0,o.kt)("h3",{id:"size-mapping"},"Size Mapping"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Button size rules."',title:'"Button',size:!0,'rules."':!0},"{\n  m: 'Use in condensed areas where the default size is too large.',\n  l: 'Should be used in most, if not all cases.'\n}\n")),(0,o.kt)("h2",{id:"accessibility"},"Accessibility"),(0,o.kt)("p",null,"The Pando Button, and Icon APIs combined with semantic HTML allow the Button to be fully accessible and screen-readable by default."))}c.isMDXComponent=!0}}]);