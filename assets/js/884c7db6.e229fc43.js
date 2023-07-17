"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6169],{15566:function(e,t,a){a.d(t,{dS:function(){return c},fK:function(){return l},C9:function(){return u},ZP:function(){return p}});var n=a(45721),s=a(84140),i="linkList_sLwJ",r="linkItem_ESvF";function o(e){return n.createElement("li",{className:r},n.createElement(s.Z,e,e.children))}function l(e){return n.createElement(o,{href:e.href},e.children??"View on Github")}function c(e){return n.createElement(o,{href:e.href},"View on Figma")}function u(e){return n.createElement("ul",{className:i},e.children)}function p(e){const{figma:t,github:a}=e;return n.createElement("ul",{className:i},a&&n.createElement(l,{href:a}),t&&n.createElement(c,{href:t}))}},45945:function(e,t,a){a(45721)},84140:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(45721),s=a(32662),i=a(51596),r=a(44070),o=a(42949);function l(e){const{href:t}=e,a=(0,i.L)({ariaHidden:!0,size:"s"}),l=t.includes("github")?r.Z:o.Z;return n.createElement(s.TextLink,e,n.createElement(l,a),e.children)}},60466:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return u}});var n=a(81648),s=(a(45721),a(70167)),i=a(15566);a(45945);const r={tags:["breadcrumb"],title:"Tag"},o=void 0,l={unversionedId:"reference/components/tag",id:"reference/components/tag",title:"Tag",description:"Used to label and link to categorized content.",source:"@site/docs/reference/components/tag.mdx",sourceDirName:"reference/components",slug:"/reference/components/tag",permalink:"/docs/reference/components/tag",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/reference/components/tag.mdx",tags:[{label:"breadcrumb",permalink:"/docs/tags/breadcrumb"}],version:"current",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["breadcrumb"],title:"Tag"},sidebar:"reference",previous:{title:"Tabs",permalink:"/docs/reference/components/tabs"},next:{title:"Textarea",permalink:"/docs/reference/components/text-area"}},c={},u=[{value:"Anatomy",id:"anatomy",level:2},{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Tag",id:"basic-tag",level:3},{value:"Customizing",id:"customizing",level:3},{value:"1. Unused Classes",id:"1-unused-classes",level:4},{value:"2. Passing a <code>className</code> prop",id:"2-passing-a-classname-prop",level:4},{value:"3. Ejected Tag",id:"3-ejected-tag",level:4},{value:"Behavior",id:"behavior",level:2},{value:"Usage",id:"usage-1",level:3},{value:"API",id:"api",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Size Mapping",id:"size-mapping",level:3},{value:"Accessibility",id:"accessibility",level:2}],p={toc:u};function m(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",{className:"size-xxl"},"Used to label and link to categorized content."),(0,s.kt)(i.C9,{mdxType:"DocsLinkList"},(0,s.kt)(i.fK,{href:"https://github.com/pluralsight/pando/tree/main/packages/react/src/components/Tag.tsx",mdxType:"DocsGithubLink"}),(0,s.kt)(i.fK,{href:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/Tag/tagCSS.ts",mdxType:"DocsGithubLink"},"View Core API"),(0,s.kt)(i.dS,{href:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsFigmaLink"})),(0,s.kt)("h2",{id:"anatomy"},"Anatomy"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Icon (optional)"),(0,s.kt)("li",{parentName:"ol"},"Tag")),(0,s.kt)("h2",{id:"import"},"Import"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Tag } from '@pluralsight/react'\n")),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("h3",{id:"basic-tag"},"Basic Tag"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'// import { PlaceholderIcon } from \'@pluralsight/icons\'\n\nfunction BasicTags() {\n  return (\n    <Grid cols="repeat(3, 1fr)" gap={8} data-site-override="alignGridCenter">\n      <GridItem>\n        <Tag href="#" size="s">\n          small\n        </Tag>\n      </GridItem>\n\n      <GridItem>\n        <Tag href="#">default</Tag>\n      </GridItem>\n\n      <GridItem>\n        <Tag href="#" icon={PlaceholderIcon}>\n          With Icon\n        </Tag>\n      </GridItem>\n    </Grid>\n  )\n}\n')),(0,s.kt)("h3",{id:"customizing"},"Customizing"),(0,s.kt)("p",null,"There are 3 ways to customize the Tag component."),(0,s.kt)("h4",{id:"1-unused-classes"},"1. Unused Classes"),(0,s.kt)("p",null,"Each component layer of the Tag has a unused class name that can be utilized in your local CSS to customize the Tag at any level."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"pando-tag"),": The element of the Tag.")),(0,s.kt)("h4",{id:"2-passing-a-classname-prop"},"2. Passing a ",(0,s.kt)("inlineCode",{parentName:"h4"},"className")," prop"),(0,s.kt)("p",null,"You can pass a ",(0,s.kt)("inlineCode",{parentName:"p"},"className")," prop to the Tag component to customize the Tag. This is useful if your project uses ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/css-modules/css-modules"},"CSS Modules")," or a CSS-in-JS library like ",(0,s.kt)("a",{parentName:"p",href:"https://emotion.sh/docs/introduction"},"Emotion"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Example of using CSS Modules to customize the Tag." showLineNumbers',title:'"Example',of:!0,using:!0,CSS:!0,Modules:!0,to:!0,customize:!0,the:!0,'Tag."':!0,showLineNumbers:!0},"import customStyles from './customStyles.module.css'\n\nfunction CustomTag(props) {\n  return (\n    <Tag className={customStyles.tag} href=\"/\">\n      {props.children}\n    </Tag>\n  )\n}\n")),(0,s.kt)("h4",{id:"3-ejected-tag"},"3. Ejected Tag"),(0,s.kt)("p",null,'For a low-level "ejected" approach, you can use the Headless-styles API to customize the Tag however you prefer while keeping the accessibility behavior.'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"showLineNumbers",showLineNumbers:!0},"import { getTagProps } from '@pluralsight/headless-styles'\n")),(0,s.kt)("p",null,"To learn more about the Headless-styles API, check out the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/pluralsight/pando/blob/main/packages/headless-styles/src/components/Tag/tagCSS.ts"},"Headless-styles documentation"),"."),(0,s.kt)("h2",{id:"behavior"},"Behavior"),(0,s.kt)("h3",{id:"usage-1"},"Usage"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Do")," use the Tag when you need to link to a category/content."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Don't")," use a Tag without a link to a category. Instead use a Badge."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Do")," use the Pando Icons within the Tag for visual interest."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Don't")," use emojis within the Tag."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Do")," use in moderation to prevent too much visual noise."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Don't")," exceed more than 3 rows of Tags within a page."),(0,s.kt)("h2",{id:"api"},"API"),(0,s.kt)("h3",{id:"parameters"},"Parameters"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"interface TagProps extends AnchorHTMLAttributes<HTMLAnchorElement> {\n  size?: 's' | 'm'\n}\n")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Any props that can be passed to an HTML anchor element."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"size")," - The size of the Tag. Defaults to ",(0,s.kt)("inlineCode",{parentName:"li"},"m"),".")),(0,s.kt)("h3",{id:"size-mapping"},"Size Mapping"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Tag size rules."',title:'"Tag',size:!0,'rules."':!0},"{\n  s: 'For smaller/tighter experiences where the default size (m) cannot be supported.',\n  m: 'Should be used in most, if not all cases.'\n}\n")),(0,s.kt)("h2",{id:"accessibility"},"Accessibility"),(0,s.kt)("p",null,"The Pando Tag, and Icon APIs combined with semantic HTML allow the Tag to be fully accessible and screen-readable by default."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"When using an Icon, the ",(0,s.kt)("inlineCode",{parentName:"li"},"aria-hidden")," attribute is set to ",(0,s.kt)("inlineCode",{parentName:"li"},"true")," on the Icon to prevent the screen reader from reading the Icon's name.")))}m.isMDXComponent=!0}}]);