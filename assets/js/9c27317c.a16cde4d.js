"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4939],{72032:function(e,n,t){t.d(n,{dS:function(){return c},fK:function(){return d},C9:function(){return p},ZP:function(){return g}});var a=t(81648),i=t(45721),s=t(71397),r=t(61471),o="grid_cC7H";function l(e){return i.createElement("li",(0,s.a)({colSpan:2}),i.createElement(r.Z,e,e.children))}function d(e){return i.createElement(l,{href:e.href},e.children??"View on Github")}function c(e){return i.createElement(l,{href:e.href},"View on Figma")}function p(e){const{className:n,...t}=(0,s.g)({cols:12,gap:8});return i.createElement("ul",(0,a.Z)({className:`${n} ${o}`},t),e.children)}function g(e){const{figma:n,github:t}=e,{className:r,...l}=(0,s.g)({cols:12,gap:8});return i.createElement("ul",(0,a.Z)({className:`${r} ${o}`},l),t&&i.createElement(d,{href:t}),n&&i.createElement(c,{href:n}))}},27505:function(e,n,t){t(45721)},61471:function(e,n,t){t.d(n,{Z:function(){return l}});var a=t(45721),i=t(64965),s=t(4094),r=t(31026),o=t(6115);function l(e){const{href:n}=e,t=(0,i.g)({href:n}),l=(0,s.g)(t.iconOptions),d=n.includes("github")?r.Z:o.Z;return a.createElement("a",t.link,a.createElement(d,l),e.children)}},330:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return o},default:function(){return g},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return c}});var a=t(81648),i=(t(45721),t(70167)),s=t(72032);t(27505);const r={tags:["Meta data","Static Tag"],title:"Badge"},o=void 0,l={unversionedId:"reference/components/badge",id:"reference/components/badge",title:"Badge",description:"Used to highlight a category in a non-interactive way for quick recognition.",source:"@site/docs/reference/components/badge.mdx",sourceDirName:"reference/components",slug:"/reference/components/badge",permalink:"/docs/next/reference/components/badge",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/reference/components/badge.mdx",tags:[{label:"Meta data",permalink:"/docs/next/tags/meta-data"},{label:"Static Tag",permalink:"/docs/next/tags/static-tag"}],version:"current",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["Meta data","Static Tag"],title:"Badge"},sidebar:"reference",previous:{title:"Avatar",permalink:"/docs/next/reference/components/avatar"},next:{title:"Button",permalink:"/docs/next/reference/components/button"}},d={},c=[{value:"Anatomy",id:"anatomy",level:2},{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Filled Badges",id:"filled-badges",level:3},{value:"Outline Badges",id:"outline-badges",level:3},{value:"Badge with icon",id:"badge-with-icon",level:3},{value:"Sizes",id:"sizes",level:3},{value:"Size Mapping",id:"size-mapping",level:4},{value:"Reference",id:"reference",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Behavior",id:"behavior",level:2},{value:"Types",id:"types",level:3},{value:"States",id:"states",level:3},{value:"Static/Action Scenarios",id:"staticaction-scenarios",level:3},{value:"Accessbility",id:"accessbility",level:2}],p={toc:c};function g(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",{className:"size-xxl"},"Used to highlight a category in a non-interactive way for quick recognition."),(0,i.kt)(s.ZP,{github:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/Badge",figma:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsLinkBar"}),(0,i.kt)("h2",{id:"anatomy"},"Anatomy"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Container"),(0,i.kt)("li",{parentName:"ol"},"Icon (optional)"),(0,i.kt)("li",{parentName:"ol"},"Label")),(0,i.kt)("h2",{id:"import"},"Import"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getBadgeProps } from '@pluralsight/headless-styles'\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import type { BadgeOptions } from '@pluralsight/headless-styles/types'\n")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"filled-badges"},"Filled Badges"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function FilledBadges() {\n  const gridItem = getGridItemProps({ colSpan: 2 })\n\n  return (\n    <div\n      {...getGridProps({ cols: 12, gap: 16 })}\n      data-site-override=\"marginBottom\"\n    >\n      <div {...gridItem}>\n        <span {...getBadgeProps().badge}>default filled</span>\n      </div>\n\n      <div {...gridItem}>\n        <span {...getBadgeProps({ sentiment: 'info' }).badge}>info filled</span>\n      </div>\n\n      <div {...gridItem}>\n        <span {...getBadgeProps({ sentiment: 'success' }).badge}>\n          success filled\n        </span>\n      </div>\n\n      <div {...gridItem}>\n        <span {...getBadgeProps({ sentiment: 'warning' }).badge}>\n          warning filled\n        </span>\n      </div>\n\n      <div {...gridItem}>\n        <span {...getBadgeProps({ sentiment: 'danger' }).badge}>\n          danger filled\n        </span>\n      </div>\n    </div>\n  )\n}\n")),(0,i.kt)("h3",{id:"outline-badges"},"Outline Badges"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function OutlineBadges() {\n  const gridItem = getGridItemProps({ colSpan: 2 })\n\n  return (\n    <div {...getGridProps({ cols: 12, gap: 16 })}>\n      <div {...gridItem}>\n        <span {...getBadgeProps({ usage: 'outline' }).badge}>\n          default outline\n        </span>\n      </div>\n\n      <div {...gridItem}>\n        <span {...getBadgeProps({ sentiment: 'info', usage: 'outline' }).badge}>\n          info outline\n        </span>\n      </div>\n\n      <div {...gridItem}>\n        <span\n          {...getBadgeProps({ sentiment: 'success', usage: 'outline' }).badge}\n        >\n          success outline\n        </span>\n      </div>\n\n      <div {...gridItem}>\n        <span\n          {...getBadgeProps({ sentiment: 'warning', usage: 'outline' }).badge}\n        >\n          warning outline\n        </span>\n      </div>\n\n      <div {...gridItem}>\n        <span\n          {...getBadgeProps({ sentiment: 'danger', usage: 'outline' }).badge}\n        >\n          danger outline\n        </span>\n      </div>\n    </div>\n  )\n}\n")),(0,i.kt)("h3",{id:"badge-with-icon"},"Badge with icon"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function BadgeWithIcon() {\n  const { badge, iconWrapper, iconOptions } = getBadgeProps()\n\n  return (\n    <div {...getGridProps({ cols: 12, gap: 16 })}>\n      <div {...getGridItemProps({ colSpan: 2 })}>\n        <span {...badge}>\n          <span {...iconWrapper}>\n            <PlaceholderIcon {...getIconProps(iconOptions)} />\n          </span>\n          Badge with Icon\n        </span>\n      </div>\n    </div>\n  )\n}\n")),(0,i.kt)("h3",{id:"sizes"},"Sizes"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function BadgeSize() {\n  const gridItem = getGridItemProps({ colSpan: 1 })\n\n  return (\n    <div {...getGridProps({ cols: 12, gap: 16 })}>\n      <div {...gridItem}>\n        <span {...getBadgeProps({ size: 'xs' }).badge}>xs badge</span>\n      </div>\n      <div {...gridItem}>\n        <span {...getBadgeProps().badge}>s (default)</span>\n      </div>\n    </div>\n  )\n}\n")),(0,i.kt)("h4",{id:"size-mapping"},"Size Mapping"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Badge size rules."',title:'"Badge',size:!0,'rules."':!0},"{\n  xs: 'For smaller/tighter experiences where the default size (s) cannot be supported.',\n  s: 'Should be used in most, if not all cases.'\n}\n")),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"getBadgeProps(options?: BadgeOptions)\n")),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface BadgeOptions {\n  classNames?: string[]\n  sentiment?: 'default' | 'info' | 'success' | 'warning' | 'danger'\n  usage?: 'filled' | 'outline'\n  size?: 'xs' | 's'\n}\n")),(0,i.kt)("h3",{id:"returns"},"Returns"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"An Object matching the ",(0,i.kt)("a",{parentName:"li",href:"#anatomy"},"Anatomy")," containing ",(0,i.kt)("inlineCode",{parentName:"li"},"className")," and a11y properties relevant to each element/section including an unused class consisting of the naming pattern ",(0,i.kt)("inlineCode",{parentName:"li"},"pando-badge"),"."),(0,i.kt)("li",{parentName:"ol"},"An ",(0,i.kt)("inlineCode",{parentName:"li"},"iconOptions")," Object to use as the parameters for the Icon API and an ",(0,i.kt)("inlineCode",{parentName:"li"},"iconWrapper")," property to spread on the wrapper element containing the Icon.")),(0,i.kt)("h2",{id:"behavior"},"Behavior"),(0,i.kt)("h3",{id:"types"},"Types"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Do")," use the filled Badge as the default use case for all badges."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Don't")," change the color of the Badge."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Do"),' use the outline Badge as the "low priority" use case for a badge.'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Don't")," use the outline Badge as the default use case."),(0,i.kt)("h3",{id:"states"},"States"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Do")," use the default size for all use cases where possible of the Badge."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Don't"),' use the "xs" size ',(0,i.kt)("em",{parentName:"p"},"unless")," it is a ",(0,i.kt)("strong",{parentName:"p"},"last resort"),"."),(0,i.kt)("h3",{id:"staticaction-scenarios"},"Static/Action Scenarios"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Do")," use the Badge as a non-interactive element."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Don't")," link to new pages, or use any other interactive actions for a Badge."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Do")," use the sentiment colors or a custom color option."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Don't")," use any color in the action sentiment theme category."),(0,i.kt)("h2",{id:"accessbility"},"Accessbility"),(0,i.kt)("p",null,"The Pando Badge, and Icon APIs combined with semantic HTML allow the Badge to be fully accessible and screen-readable."))}g.isMDXComponent=!0},71397:function(e,n,t){t.d(n,{a:function(){return c},g:function(){return d}});var a=t(1801),i=t(23909),s=t(31519);const r="gridCSS-module_gridContainer__sQmao",o="gridCSS-module_gridItem__nVMyV";(0,s.s)(".gridCSS-module_gridContainer__sQmao{display:grid;width:100%}.gridCSS-module_gridItem__nVMyV{min-width:0}");const l="pando-grid";function d(e){const n=(0,i.g)(e);return{...(0,i.c)(n),...(0,a.c)(l,r,...n.classNames)}}function c(e){const n=(0,i.a)(e);return{...(0,i.b)(n),...(0,a.c)(`${l}-item`,o,...n.classNames)}}},23909:function(e,n,t){t.d(n,{a:function(){return s},b:function(){return o},c:function(){return r},g:function(){return i}});const a={6:.375,8:.5,12:.75,16:1,32:2};function i(e){return{classNames:(null==e?void 0:e.classNames)??[],cols:(null==e?void 0:e.cols)??12,gap:(null==e?void 0:e.gap)??16,rows:(null==e?void 0:e.rows)??1}}function s(e){return{classNames:(null==e?void 0:e.classNames)??[],colSpan:(null==e?void 0:e.colSpan)??12,rowSpan:(null==e?void 0:e.rowSpan)??null}}function r(e){return{style:{gridTemplateRows:`repeat(${e.rows}, 1fr)`,gridTemplateColumns:`repeat(${e.cols}, 1fr)`,gap:`${a[e.gap]}rem`}}}function o(e){const{colSpan:n,rowSpan:t}=e;return t?{style:{gridArea:`span ${t} / span ${n} / span ${t} / span ${n}`}}:{style:{gridColumn:`span ${n} / span ${n}`}}}}}]);