"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3146],{72032:function(e,t,n){n.d(t,{dS:function(){return c},fK:function(){return p},C9:function(){return u},ZP:function(){return d}});var o=n(81648),i=n(45721),r=n(71397),a=n(61471),s="grid_cC7H";function l(e){return i.createElement("li",(0,r.a)({colSpan:2}),i.createElement(a.Z,e,e.children))}function p(e){return i.createElement(l,{href:e.href},e.children??"View on Github")}function c(e){return i.createElement(l,{href:e.href},"View on Figma")}function u(e){const{className:t,...n}=(0,r.g)({cols:12,gap:8});return i.createElement("ul",(0,o.Z)({className:`${t} ${s}`},n),e.children)}function d(e){const{figma:t,github:n}=e,{className:a,...l}=(0,r.g)({cols:12,gap:8});return i.createElement("ul",(0,o.Z)({className:`${a} ${s}`},l),n&&i.createElement(p,{href:n}),t&&i.createElement(c,{href:t}))}},27505:function(e,t,n){n(45721)},61471:function(e,t,n){n.d(t,{Z:function(){return l}});var o=n(45721),i=n(64965),r=n(4094),a=n(59393),s=n(79719);function l(e){const{href:t}=e,n=(0,i.g)({href:t}),l=(0,r.g)(n.iconOptions),p=t.includes("github")?a.Z:s.Z;return o.createElement("a",n.link,o.createElement(p,l),e.children)}},54130:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c}});var o=n(81648),i=(n(45721),n(70167)),r=n(72032);n(27505);const a={tags:[],title:"Tooltip"},s=void 0,l={unversionedId:"reference/components/tooltip",id:"version-0.4.1/reference/components/tooltip",title:"Tooltip",description:"Used to display a brief, informative message that appears when a user focuses",source:"@site/versioned_docs/version-0.4.1/reference/components/tooltip.mdx",sourceDirName:"reference/components",slug:"/reference/components/tooltip",permalink:"/docs/reference/components/tooltip",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/versioned_docs/version-0.4.1/reference/components/tooltip.mdx",tags:[],version:"0.4.1",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:[],title:"Tooltip"},sidebar:"reference",previous:{title:"Text Link",permalink:"/docs/reference/components/text-link"},next:{title:"useAutoFormatDate",permalink:"/docs/reference/react-hooks/useAutoFormatDate"}},p={},c=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Tooltip",id:"basic-tooltip",level:3},{value:"Positions",id:"positions",level:3},{value:"Reference",id:"reference",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Behavior",id:"behavior",level:2},{value:"Patterns",id:"patterns",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Accessibility",id:"accessibility",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",{className:"size-xxl"},"Used to display a brief, informative message that appears when a user focuses on an element."),(0,i.kt)(r.ZP,{github:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/Tooltip",figma:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsLinkBar"}),(0,i.kt)("h2",{id:"import"},"Import"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getTooltipProps } from '@pluralsight/headless-styles'\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface TooltipOptions {\n  disabled?: boolean\n  id: string\n  position?:\n    | 'topStart'\n    | 'top'\n    | 'topEnd'\n    | 'rightStart'\n    | 'right'\n    | 'rightEnd'\n    | 'bottomStart'\n    | 'bottom'\n    | 'bottomEnd'\n    | 'leftStart'\n    | 'left'\n    | 'leftEnd'\n}\n\ngetTooltipProps(options?: TooltipOptions)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import type { TooltipOptions } from '@pluralsight/headless-styles/types'\n")),(0,i.kt)("h2",{id:"anatomy"},"Anatomy"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Container"),(0,i.kt)("li",{parentName:"ol"},"Trigger"),(0,i.kt)("li",{parentName:"ol"},"Tooltip"),(0,i.kt)("li",{parentName:"ol"},"Content")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"basic-tooltip"},"Basic Tooltip"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Tooltip() {\n  const [disabled, setDisabled] = useState(false)\n\n  const tooltipProps = getTooltipProps({\n    disabled: disabled,\n    id: 'moreInfo',\n  })\n\n  const disable = useCallback(() => {\n    setDisabled(true)\n  }, [])\n\n  function enable() {\n    setDisabled(false)\n  }\n\n  useEscToClose(disable)\n\n  return (\n    <div {...tooltipProps.wrapper} onMouseEnter={enable} onFocus={enable}>\n      <div {...tooltipProps.trigger}>Hover over me</div>\n      <div {...tooltipProps.tooltip}>\n        <div {...tooltipProps.tooltipContent}>Here is more context.</div>\n      </div>\n    </div>\n  )\n}\n")),(0,i.kt)("h3",{id:"positions"},"Positions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function TooltipPositions() {\n  const tooltipProps = getTooltipProps({\n    id: 'tooltipPositions',\n    // Change this value to any of the Position options\n    position: 'bottom',\n  })\n\n  return (\n    <div {...tooltipProps.wrapper}>\n      <div {...tooltipProps.trigger}>Hover over me</div>\n      <div {...tooltipProps.tooltip}>\n        <div {...tooltipProps.tooltipContent}>Here is more context.</div>\n      </div>\n    </div>\n  )\n}\n")),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"getTooltipProps(options?: TooltipOptions)\n")),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options"),": A String value for the property id which determine styling and a11y props for all Tooltip elements. A position property that takes a String value of ",(0,i.kt)("inlineCode",{parentName:"li"},"<BoxModelPosition><''|Start|End>")," to determine the positioning styles for the Tooltip.")),(0,i.kt)("h3",{id:"returns"},"Returns"),(0,i.kt)("p",null,"An Object matching the ",(0,i.kt)("a",{parentName:"p",href:"#anatomy"},"Anatomy")," containing ",(0,i.kt)("inlineCode",{parentName:"p"},"className")," and a11y properties relevant to each element/section."),(0,i.kt)("h2",{id:"behavior"},"Behavior"),(0,i.kt)("admonition",{title:"Popover vs. Tooltip",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"A Popover should be used when you need to provide more context to a user whereas a Tooltip displays a short description of only a few words (like the HTML ",(0,i.kt)("inlineCode",{parentName:"p"},"title")," attribute).")),(0,i.kt)("h3",{id:"patterns"},"Patterns"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Do")," use the Tooltip to display small, additional supportive information about an element."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Don't")," put essential information in a Tooltip."),(0,i.kt)("h3",{id:"usage-1"},"Usage"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Do")," keep Tooltip content restricted to a few words."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Don't")," exceed a single sentence for the Tooltip content."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Do")," keep the Tooltip minimal and restricted to text."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Don't")," use Tooltips with actionable content. Instead use a Modal."),(0,i.kt)("h2",{id:"accessibility"},"Accessibility"),(0,i.kt)("p",null,"The Pando Tooltip API combined with semantic HTML allow the Tooltip to be fully accessible and screen-readable."))}d.isMDXComponent=!0},71397:function(e,t,n){n.d(t,{a:function(){return c},g:function(){return p}});var o=n(1801),i=n(23909),r=n(31519);const a="gridCSS-module_gridContainer__sQmao",s="gridCSS-module_gridItem__nVMyV";(0,r.s)(".gridCSS-module_gridContainer__sQmao{display:grid;width:100%}.gridCSS-module_gridItem__nVMyV{min-width:0}");const l="pando-grid";function p(e){const t=(0,i.g)(e);return{...(0,i.c)(t),...(0,o.c)(l,a,...t.classNames)}}function c(e){const t=(0,i.a)(e);return{...(0,i.b)(t),...(0,o.c)(`${l}-item`,s,...t.classNames)}}},23909:function(e,t,n){n.d(t,{a:function(){return r},b:function(){return s},c:function(){return a},g:function(){return i}});const o={6:.375,8:.5,12:.75,16:1,32:2};function i(e){return{classNames:(null==e?void 0:e.classNames)??[],cols:(null==e?void 0:e.cols)??12,gap:(null==e?void 0:e.gap)??16,rows:(null==e?void 0:e.rows)??1}}function r(e){return{classNames:(null==e?void 0:e.classNames)??[],colSpan:(null==e?void 0:e.colSpan)??12,rowSpan:(null==e?void 0:e.rowSpan)??null}}function a(e){return{style:{gridTemplateRows:`repeat(${e.rows}, 1fr)`,gridTemplateColumns:`repeat(${e.cols}, 1fr)`,gap:`${o[e.gap]}rem`}}}function s(e){const{colSpan:t,rowSpan:n}=e;return n?{style:{gridArea:`span ${n} / span ${t} / span ${n} / span ${t}`}}:{style:{gridColumn:`span ${t} / span ${t}`}}}}}]);