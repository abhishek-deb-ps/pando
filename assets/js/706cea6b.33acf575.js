"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7528],{72032:function(t,e,n){n.d(e,{dS:function(){return p},fK:function(){return u},C9:function(){return c},ZP:function(){return d}});var o=n(81648),a=n(45721),i=n(71397),r=n(61471),s="grid_cC7H";function l(t){return a.createElement("li",(0,i.a)({colSpan:2}),a.createElement(r.Z,t,t.children))}function u(t){return a.createElement(l,{href:t.href},t.children??"View on Github")}function p(t){return a.createElement(l,{href:t.href},"View on Figma")}function c(t){const{className:e,...n}=(0,i.g)({cols:12,gap:8});return a.createElement("ul",(0,o.Z)({className:`${e} ${s}`},n),t.children)}function d(t){const{figma:e,github:n}=t,{className:r,...l}=(0,i.g)({cols:12,gap:8});return a.createElement("ul",(0,o.Z)({className:`${r} ${s}`},l),n&&a.createElement(u,{href:n}),e&&a.createElement(p,{href:e}))}},27505:function(t,e,n){n(45721)},61471:function(t,e,n){n.d(e,{Z:function(){return l}});var o=n(45721),a=n(64965),i=n(4094),r=n(59393),s=n(79719);function l(t){const{href:e}=t,n=(0,a.g)({href:e}),l=(0,i.g)(n.iconOptions),u=e.includes("github")?r.Z:s.Z;return o.createElement("a",n.link,o.createElement(u,l),t.children)}},64786:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return p}});var o=n(81648),a=(n(45721),n(70167)),i=n(72032);n(27505);const r={tags:[],title:"Button"},s=void 0,l={unversionedId:"reference/components/button",id:"version-0.4.1/reference/components/button",title:"Button",description:"Used to perform an action, such as submitting a form, opening/closing a",source:"@site/versioned_docs/version-0.4.1/reference/components/button.mdx",sourceDirName:"reference/components",slug:"/reference/components/button",permalink:"/docs/reference/components/button",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/versioned_docs/version-0.4.1/reference/components/button.mdx",tags:[],version:"0.4.1",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:[],title:"Button"},sidebar:"reference",previous:{title:"Badge",permalink:"/docs/reference/components/badge"},next:{title:"Checkbox",permalink:"/docs/reference/components/checkbox"}},u={},p=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Buttons",id:"basic-buttons",level:3},{value:"Button with icon",id:"button-with-icon",level:3},{value:"Sizes",id:"sizes",level:3},{value:"Size Mapping",id:"size-mapping",level:4},{value:"Reference",id:"reference",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Behavior",id:"behavior",level:2},{value:"Patterns",id:"patterns",level:3},{value:"Sentiment",id:"sentiment",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Sizing",id:"sizing",level:3},{value:"Accessibility",id:"accessibility",level:2}],c={toc:p};function d(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",{className:"size-xxl"},"Used to perform an action, such as submitting a form, opening/closing a dialog, or using a cancel action."),(0,a.kt)(i.ZP,{github:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/Button",figma:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsLinkBar"}),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getButtonProps } from '@pluralsight/headless-styles'\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ButtonOptions {\n  disabled?: boolean\n  sentiment?: 'default' | 'action' | 'danger'\n  usage?: 'filled' | 'outline' | 'text'\n  size?: 'm' | 'l'\n  icon?: 'start' | 'end'\n}\n\ngetButtonProps(options?: ButtonOptions)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import type { ButtonOptions } from '@pluralsight/headless-styles/types'\n")),(0,a.kt)("h2",{id:"anatomy"},"Anatomy"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Leading Icon (optional)"),(0,a.kt)("li",{parentName:"ol"},"Label"),(0,a.kt)("li",{parentName:"ol"},"Trailing Icon (optional)")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"basic-buttons"},"Basic Buttons"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function BasicButtons() {\n  const gridItem = getGridItemProps({ colSpan: 2 })\n\n  return (\n    <div {...getGridProps({ cols: 12, gap: 8 })}>\n      <div {...gridItem}>\n        <button {...getButtonProps().button}>Action</button>\n      </div>\n\n      <div {...gridItem}>\n        <button {...getButtonProps({ sentiment: 'default' }).button}>\n          Default\n        </button>\n      </div>\n\n      <div {...gridItem}>\n        <button {...getButtonProps({ sentiment: 'danger' }).button}>\n          Danger\n        </button>\n      </div>\n\n      <div {...gridItem}>\n        <button {...getButtonProps({ usage: 'outline' }).button}>\n          Outline\n        </button>\n      </div>\n\n      <div {...gridItem}>\n        <button {...getButtonProps({ usage: 'text' }).button}>Text</button>\n      </div>\n\n      <div {...gridItem}>\n        <button {...getButtonProps({ disabled: true }).button}>Disabled</button>\n      </div>\n    </div>\n  )\n}\n")),(0,a.kt)("h3",{id:"button-with-icon"},"Button with icon"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function ButtonWithIcon() {\n  const gridItem = getGridItemProps({ colSpan: 3 })\n  const { button, iconOptions } = getButtonProps({\n    icon: 'start',\n  })\n  const { button: trailButton } = getButtonProps({\n    icon: 'end',\n  })\n\n  return (\n    <div {...getGridProps({ cols: 12, gap: 16 })}>\n      <div {...gridItem}>\n        <button {...button}>\n          <PlaceholderIcon {...getIconProps(iconOptions)} />\n          Leading icon\n        </button>\n      </div>\n\n      <div {...gridItem}>\n        <button {...trailButton}>\n          Trailing icon\n          <PlaceholderIcon {...getIconProps(iconOptions)} />\n        </button>\n      </div>\n    </div>\n  )\n}\n")),(0,a.kt)("h3",{id:"sizes"},"Sizes"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function ButtonSizes() {\n  const gridItem = getGridItemProps({ colSpan: 2 })\n\n  return (\n    <div\n      data-site-override=\"alignGridCenter\"\n      {...getGridProps({ cols: 12, gap: 16 })}\n    >\n      <div {...gridItem}>\n        <button {...getButtonProps({ size: 'm' }).button}>Medium</button>\n      </div>\n\n      <div {...gridItem}>\n        <button {...getButtonProps({ size: 'l' }).button}>\n          Large (default)\n        </button>\n      </div>\n    </div>\n  )\n}\n")),(0,a.kt)("h4",{id:"size-mapping"},"Size Mapping"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Button size rules."',title:'"Button',size:!0,'rules."':!0},"{\n  m: 'Use in condensed areas where the default size is too large.',\n  l: 'Should be used in most, if not all cases.'\n}\n")),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"getButtonProps(options?: ButtonOptions)\n")),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options"),": A String value of a theme sentiment ",(0,a.kt)("inlineCode",{parentName:"li"},"'default' | 'action' | 'danger'")," which determines the styling color theme produced. An optional usage property that accepts a String value of ",(0,a.kt)("inlineCode",{parentName:"li"},"'filled' | 'outline' | 'text'")," to determine the styling. An optional size property that accepts a String value of either ",(0,a.kt)("inlineCode",{parentName:"li"},"'m' | 'l'")," to display the size styles. An Optional disabled property of a Boolean value to display the disabled styles and Accessibility properties. An optional icon property that accepts a string value of ",(0,a.kt)("inlineCode",{parentName:"li"},"'start' | 'end'")," to display styling support for icons within a Button.")),(0,a.kt)("h3",{id:"returns"},"Returns"),(0,a.kt)("p",null,"An Object matching the ",(0,a.kt)("a",{parentName:"p",href:"#anatomy"},"Anatomy")," containing ",(0,a.kt)("inlineCode",{parentName:"p"},"className")," and a11y properties relevant to each element/section. Additionally, it returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"iconOptions")," Object to use as the parameters for the Icon API."),(0,a.kt)("h2",{id:"behavior"},"Behavior"),(0,a.kt)("h3",{id:"patterns"},"Patterns"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do")," use the Button for an actionable event needed from the user."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't")," use the Button for navigation or styled links. Instead use the TextLink component."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do")," keep Button usage minimal within an area."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't")," use more than three Buttons in a single area."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do")," space Buttons apart by 16px (1rem)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't")," space Buttons apart greater or less than 16px (1rem)."),(0,a.kt)("h3",{id:"sentiment"},"Sentiment"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do"),' use the "action" sentiment for all use cases where possible.'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't"),' use the "default" sentiment ',(0,a.kt)("em",{parentName:"p"},"unless")," it is a ",(0,a.kt)("strong",{parentName:"p"},"last resort"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do"),' use the "danger" sentiment for cancel or destructive actions.'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't"),' use the "default" sentiment for cancel or destructive actions.'),(0,a.kt)("h3",{id:"usage-1"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do"),' use the "outline" usage for a ',(0,a.kt)("strong",{parentName:"p"},"lower priority alternative"),' use case to the "default" sentiment.'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't"),' use the "outline" usage for cancel or destructive actions.'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do"),' use the "text" usage for the ',(0,a.kt)("strong",{parentName:"p"},"lowest")," priority action."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't"),' use the "text" usage as a high-priority action.'),(0,a.kt)("h3",{id:"sizing"},"Sizing"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do")," use the default size for all use cases where possible of the Button."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't"),' use the "m" size ',(0,a.kt)("em",{parentName:"p"},"unless")," it is a ",(0,a.kt)("strong",{parentName:"p"},"last resort"),"."),(0,a.kt)("h2",{id:"accessibility"},"Accessibility"),(0,a.kt)("p",null,"The Pando Button, and Icon APIs combined with semantic HTML allow the Button to be fully accessible and screen-readable."))}d.isMDXComponent=!0},71397:function(t,e,n){n.d(e,{a:function(){return p},g:function(){return u}});var o=n(1801),a=n(23909),i=n(31519);const r="gridCSS-module_gridContainer__sQmao",s="gridCSS-module_gridItem__nVMyV";(0,i.s)(".gridCSS-module_gridContainer__sQmao{display:grid;width:100%}.gridCSS-module_gridItem__nVMyV{min-width:0}");const l="pando-grid";function u(t){const e=(0,a.g)(t);return{...(0,a.c)(e),...(0,o.c)(l,r,...e.classNames)}}function p(t){const e=(0,a.a)(t);return{...(0,a.b)(e),...(0,o.c)(`${l}-item`,s,...e.classNames)}}},23909:function(t,e,n){n.d(e,{a:function(){return i},b:function(){return s},c:function(){return r},g:function(){return a}});const o={6:.375,8:.5,12:.75,16:1,32:2};function a(t){return{classNames:(null==t?void 0:t.classNames)??[],cols:(null==t?void 0:t.cols)??12,gap:(null==t?void 0:t.gap)??16,rows:(null==t?void 0:t.rows)??1}}function i(t){return{classNames:(null==t?void 0:t.classNames)??[],colSpan:(null==t?void 0:t.colSpan)??12,rowSpan:(null==t?void 0:t.rowSpan)??null}}function r(t){return{style:{gridTemplateRows:`repeat(${t.rows}, 1fr)`,gridTemplateColumns:`repeat(${t.cols}, 1fr)`,gap:`${o[t.gap]}rem`}}}function s(t){const{colSpan:e,rowSpan:n}=t;return n?{style:{gridArea:`span ${n} / span ${e} / span ${n} / span ${e}`}}:{style:{gridColumn:`span ${e} / span ${e}`}}}}}]);