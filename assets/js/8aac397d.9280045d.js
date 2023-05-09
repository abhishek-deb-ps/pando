"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2397],{72032:function(e,n,t){t.d(n,{dS:function(){return c},fK:function(){return u},C9:function(){return p},ZP:function(){return d}});var o=t(81648),a=t(45721),r=t(71397),i=t(61471),s="grid_cC7H";function l(e){return a.createElement("li",(0,r.a)({colSpan:2}),a.createElement(i.Z,e,e.children))}function u(e){return a.createElement(l,{href:e.href},e.children??"View on Github")}function c(e){return a.createElement(l,{href:e.href},"View on Figma")}function p(e){const{className:n,...t}=(0,r.g)({cols:12,gap:8});return a.createElement("ul",(0,o.Z)({className:`${n} ${s}`},t),e.children)}function d(e){const{figma:n,github:t}=e,{className:i,...l}=(0,r.g)({cols:12,gap:8});return a.createElement("ul",(0,o.Z)({className:`${i} ${s}`},l),t&&a.createElement(u,{href:t}),n&&a.createElement(c,{href:n}))}},27505:function(e,n,t){t(45721)},61471:function(e,n,t){t.d(n,{Z:function(){return l}});var o=t(45721),a=t(64965),r=t(4094),i=t(59393),s=t(79719);function l(e){const{href:n}=e,t=(0,a.g)({href:n}),l=(0,r.g)(t.iconOptions),u=n.includes("github")?i.Z:s.Z;return o.createElement("a",t.link,o.createElement(u,l),e.children)}},75067:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var o=t(81648),a=(t(45721),t(70167)),r=t(72032);t(27505);const i={tags:[],title:"Icon Button"},s=void 0,l={unversionedId:"reference/components/icon-button",id:"version-0.4.1/reference/components/icon-button",title:"Icon Button",description:"Used to perform an action, such as submitting a form, opening/closing a",source:"@site/versioned_docs/version-0.4.1/reference/components/icon-button.mdx",sourceDirName:"reference/components",slug:"/reference/components/icon-button",permalink:"/docs/reference/components/icon-button",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/versioned_docs/version-0.4.1/reference/components/icon-button.mdx",tags:[],version:"0.4.1",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:[],title:"Icon Button"},sidebar:"reference",previous:{title:"Grid",permalink:"/docs/reference/components/grid"},next:{title:"Icon",permalink:"/docs/reference/components/icon"}},u={},c=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Buttons",id:"basic-buttons",level:3},{value:"Sizes",id:"sizes",level:3},{value:"Size Mapping",id:"size-mapping",level:4},{value:"Reference",id:"reference",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Behavior",id:"behavior",level:2},{value:"Patterns",id:"patterns",level:3},{value:"Sentiment",id:"sentiment",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Sizing",id:"sizing",level:3},{value:"Accessibility",id:"accessibility",level:2}],p={toc:c};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",{className:"size-xxl"},"Used to perform an action, such as submitting a form, opening/closing a dialog, or using a cancel action."),(0,a.kt)(r.ZP,{github:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/IconButton",figma:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsLinkBar"}),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getIconButtonProps } from '@pluralsight/headless-styles'\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface IconButtonOptions {\n  ariaLabel: string\n  disabled?: boolean\n  sentiment?: 'default' | 'action' | 'danger'\n  usage?: 'square' | 'round' | 'text'\n  size?: 'm' | 'l'\n}\n\ngetIconButtonProps(options?: IconButtonOptions)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import type { IconButtonOptions } from '@pluralsight/headless-styles/types'\n")),(0,a.kt)("h2",{id:"anatomy"},"Anatomy"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Button"),(0,a.kt)("li",{parentName:"ol"},"Icon")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"basic-buttons"},"Basic Buttons"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function BasicIconButtons() {\n  const gridItem = getGridItemProps({ colSpan: 1 })\n  const actionBtn = getIconButtonProps({\n    ariaLabel: 'action icon button example',\n  })\n  const defaultBtn = getIconButtonProps({\n    ariaLabel: 'default icon button example',\n    sentiment: 'default',\n  })\n  const dangerBtn = getIconButtonProps({\n    ariaLabel: 'danger icon button example',\n    sentiment: 'danger',\n  })\n  const squareBtn = getIconButtonProps({\n    ariaLabel: 'square icon button example',\n    usage: 'square',\n  })\n  const roundBtn = getIconButtonProps({\n    ariaLabel: 'round icon button example',\n    usage: 'round',\n  })\n  const textBtn = getIconButtonProps({\n    ariaLabel: 'text icon button example',\n    usage: 'text',\n  })\n  const disabledBtn = getIconButtonProps({\n    ariaLabel: 'disabled icon button example',\n    disabled: true,\n  })\n\n  return (\n    <div {...getGridProps({ cols: 12, gap: 8 })}>\n      <div {...gridItem}>\n        <button {...actionBtn.button}>\n          <PlaceholderIcon {...getIconProps(actionBtn.iconOptions)} />\n        </button>\n      </div>\n\n      <div {...gridItem}>\n        <button {...defaultBtn.button}>\n          <PlaceholderIcon {...getIconProps(defaultBtn.iconOptions)} />\n        </button>\n      </div>\n\n      <div {...gridItem}>\n        <button {...dangerBtn.button}>\n          <PlaceholderIcon {...getIconProps(dangerBtn.iconOptions)} />\n        </button>\n      </div>\n\n      <div {...gridItem}>\n        <button {...squareBtn.button}>\n          <PlaceholderIcon {...getIconProps(squareBtn.iconOptions)} />\n        </button>\n      </div>\n\n      <div {...gridItem}>\n        <button {...roundBtn.button}>\n          <PlaceholderIcon {...getIconProps(roundBtn.iconOptions)} />\n        </button>\n      </div>\n\n      <div {...gridItem}>\n        <button {...textBtn.button}>\n          <PlaceholderIcon {...getIconProps(textBtn.iconOptions)} />\n        </button>\n      </div>\n\n      <div {...gridItem}>\n        <button {...disabledBtn.button}>\n          <PlaceholderIcon {...getIconProps(disabledBtn.iconOptions)} />\n        </button>\n      </div>\n    </div>\n  )\n}\n")),(0,a.kt)("h3",{id:"sizes"},"Sizes"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function BasicButtons() {\n  const gridItem = getGridItemProps({ colSpan: 1 })\n  const mediumBtn = getIconButtonProps({\n    ariaLabel: 'medium icon button example',\n    size: 'm',\n  })\n  const largeBtn = getIconButtonProps({\n    ariaLabel: 'large icon button example',\n    size: 'l',\n  })\n\n  return (\n    <div\n      data-site-override=\"alignGridCenter\"\n      {...getGridProps({ cols: 12, gap: 8 })}\n    >\n      <div {...gridItem}>\n        <button {...mediumBtn.button}>\n          <PlaceholderIcon {...getIconProps(mediumBtn.iconOptions)} />\n        </button>\n      </div>\n\n      <div {...gridItem}>\n        <button {...largeBtn.button}>\n          <PlaceholderIcon {...getIconProps(largeBtn.iconOptions)} />\n        </button>\n      </div>\n    </div>\n  )\n}\n")),(0,a.kt)("h4",{id:"size-mapping"},"Size Mapping"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Icon Button size rules."',title:'"Icon',Button:!0,size:!0,'rules."':!0},"{\n  m: 'Use in condensed areas where the default size is too large.',\n  l: 'Should be used in most, if not all cases.'\n}\n")),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"getIconButtonProps(options?: IconButtonOptions)\n")),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options"),": A String value of a theme sentiment ",(0,a.kt)("inlineCode",{parentName:"li"},"'default' | 'action' | 'danger'")," which determines the styling color theme produced. An optional usage property that accepts a String value of ",(0,a.kt)("inlineCode",{parentName:"li"},"'square' | 'round' | 'text'")," to determine the styling. An optional size property that accepts a String value of either ",(0,a.kt)("inlineCode",{parentName:"li"},"'m' | 'l'")," to display the size styles. An Optional disabled property of a Boolean value to display the disabled styles and Accessibility properties.")),(0,a.kt)("h3",{id:"returns"},"Returns"),(0,a.kt)("p",null,"An Object matching the ",(0,a.kt)("a",{parentName:"p",href:"#anatomy"},"Anatomy")," containing ",(0,a.kt)("inlineCode",{parentName:"p"},"className")," and a11y properties relevant to each element/section. Additionally, it returns an ",(0,a.kt)("inlineCode",{parentName:"p"},"iconOptions")," Object to use as the parameters for the Icon API."),(0,a.kt)("h2",{id:"behavior"},"Behavior"),(0,a.kt)("h3",{id:"patterns"},"Patterns"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do")," use the Button for an actionable event needed from the user."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't")," use the Button for navigation or styled links. Instead use the TextLink component."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do")," keep Button usage minimal within an area."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't")," use more than three Buttons in a single area."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do")," space Buttons apart by 16px (1rem)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't")," space Buttons apart greater or less than 16px (1rem)."),(0,a.kt)("h3",{id:"sentiment"},"Sentiment"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do"),' use the "action" sentiment for all use cases where possible.'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't"),' use the "default" sentiment ',(0,a.kt)("em",{parentName:"p"},"unless")," it is a ",(0,a.kt)("strong",{parentName:"p"},"last resort"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do"),' use the "danger" sentiment for cancel or destructive actions.'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't"),' use the "default" sentiment for cancel or destructive actions.'),(0,a.kt)("h3",{id:"usage-1"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do"),' use the "outline" usage for a ',(0,a.kt)("strong",{parentName:"p"},"lower priority alternative"),' use case to the "default" sentiment.'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't"),' use the "outline" usage for cancel or destructive actions.'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do"),' use the "text" usage for the ',(0,a.kt)("strong",{parentName:"p"},"lowest")," priority action."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't"),' use the "text" usage as a high-priority action.'),(0,a.kt)("h3",{id:"sizing"},"Sizing"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do")," use the default size for all use cases where possible of the Button."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't"),' use the "m" size ',(0,a.kt)("em",{parentName:"p"},"unless")," it is a ",(0,a.kt)("strong",{parentName:"p"},"last resort"),"."),(0,a.kt)("h2",{id:"accessibility"},"Accessibility"),(0,a.kt)("p",null,"The Pando Icon Button, and Icon APIs combined with semantic HTML allow the Icon Button to be fully accessible and screen-readable."))}d.isMDXComponent=!0},71397:function(e,n,t){t.d(n,{a:function(){return c},g:function(){return u}});var o=t(1801),a=t(23909),r=t(31519);const i="gridCSS-module_gridContainer__sQmao",s="gridCSS-module_gridItem__nVMyV";(0,r.s)(".gridCSS-module_gridContainer__sQmao{display:grid;width:100%}.gridCSS-module_gridItem__nVMyV{min-width:0}");const l="pando-grid";function u(e){const n=(0,a.g)(e);return{...(0,a.c)(n),...(0,o.c)(l,i,...n.classNames)}}function c(e){const n=(0,a.a)(e);return{...(0,a.b)(n),...(0,o.c)(`${l}-item`,s,...n.classNames)}}},23909:function(e,n,t){t.d(n,{a:function(){return r},b:function(){return s},c:function(){return i},g:function(){return a}});const o={6:.375,8:.5,12:.75,16:1,32:2};function a(e){return{classNames:(null==e?void 0:e.classNames)??[],cols:(null==e?void 0:e.cols)??12,gap:(null==e?void 0:e.gap)??16,rows:(null==e?void 0:e.rows)??1}}function r(e){return{classNames:(null==e?void 0:e.classNames)??[],colSpan:(null==e?void 0:e.colSpan)??12,rowSpan:(null==e?void 0:e.rowSpan)??null}}function i(e){return{style:{gridTemplateRows:`repeat(${e.rows}, 1fr)`,gridTemplateColumns:`repeat(${e.cols}, 1fr)`,gap:`${o[e.gap]}rem`}}}function s(e){const{colSpan:n,rowSpan:t}=e;return t?{style:{gridArea:`span ${t} / span ${n} / span ${t} / span ${n}`}}:{style:{gridColumn:`span ${n} / span ${n}`}}}}}]);