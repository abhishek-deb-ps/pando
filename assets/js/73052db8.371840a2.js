"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[71],{6115:function(e,t,n){const a=n(86521);t.Z=function(e){return(0,a.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg","aria-label":"figma icon",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.25 5.5A4.25 4.25 0 0 1 8.5 1.25h7A4.25 4.25 0 0 1 17.912 9a4.25 4.25 0 1 1-5.162 6.74v3.76A4.25 4.25 0 1 1 6.088 16a4.245 4.245 0 0 1-1.838-3.5c0-1.452.728-2.733 1.838-3.5A4.245 4.245 0 0 1 4.25 5.5Zm4.25 9.75h2.75v-5.5H8.5a2.75 2.75 0 1 0 0 5.5Zm2.75 1.5H8.5a2.75 2.75 0 1 0 2.75 2.75v-2.75Zm7-11.25a2.75 2.75 0 0 1-2.75 2.75h-2.75v-5.5h2.75a2.75 2.75 0 0 1 2.75 2.75ZM15.5 9.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Zm-7-1.5h2.75v-5.5H8.5a2.75 2.75 0 0 0 0 5.5Z"})})}},31026:function(e,t,n){const a=n(86521);t.Z=function(e){return(0,a.jsx)("svg",{"aria-label":"github logo",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12a10 10 0 0 0-20 0Z"})})}},67235:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(45721),s={base:"base_M3w8",column:"column_mb9C base_M3w8",grid:"grid_EiLr base_M3w8"};const r={alignItems:"center",column:!1,gridCols:0,justifyContent:"space-between",textAlign:"center",type:"base"};function o(e){void 0===e&&(e=r);const t=e.type??r.type,n=e.gridColumns?`repeat(${e.gridColumns}, minmax(auto, max-content))`:"initial",o={alignItems:e.alignItems,gridTemplateColumns:n,justifyContent:e.justifyContent,textAlign:e.textAlign??"center",gap:e.gap??"1rem",columnGap:e.columnGap};return a.createElement("div",{className:s[t],style:o},e.children)}},95428:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(81648),s=n(45721),r=n(17493),o=n(69477),i="grid_cC7H";function l(e){return s.createElement("li",(0,r.a)({colSpan:2}),s.createElement(o.Z,e,e.children))}function c(e){const{figma:t,github:n}=e,{className:o,...c}=(0,r.g)({cols:12,gap:8});return s.createElement("ul",(0,a.Z)({className:`${o} ${i}`},c),n&&s.createElement(l,{href:n},"View on Github"),t&&s.createElement(l,{href:t},"Figma Design"))}},25302:function(e,t,n){n(45721)},5805:function(e,t,n){n.d(t,{Z:function(){return x}});var a=n(81648),s=n(45721),r=n(17273);const o="setActive",i="setFocus",l="setRefList",c="setTabFocus";function u(e,t){e({type:c,idx:t})}function d(e){return e?0:-1}function p(e,t){switch(t.type){case o:return e.tabList.reduce(((e,n)=>{const a=n===t.id,s=`${n}:panel`;return{...e,tabs:{...e.tabs,[n]:{...e.tabs[n],"aria-selected":a,tabIndex:d(a)}},panels:{...e.panels,[s]:{...e.panels[s],"aria-hidden":!a,"aria-expanded":a,tabIndex:d(a)}}}}),e);case i:return e.tabList.reduce(((e,n,a)=>{const s=a===t.idx;return{...e,tabs:{...e.tabs,[n]:{...e.tabs[n],tabIndex:d(s)}}}}),e);case l:return{...e,refList:[...e.refList,t.el]};case c:return{...e,tabFocus:t.idx};default:throw new Error("Unable to update useTabs state due to an internal error.")}}var b=n(86521);const m=(0,s.createContext)({panelList:[],panels:{},tabList:[],tabFocus:-1,tabs:{},refList:[],dispatch:()=>null});function f(e){const{data:t}=e,n=(0,s.useMemo)((()=>t.reduce(((e,t,n)=>{const{id:a}=t,s=0===n,r=`${a}:panel`;return{...e,tabList:[...e.tabList,a],tabs:{...e.tabs,[a]:{"aria-selected":!!s,"aria-controls":r,id:a,label:t.label,role:"tab",tabIndex:s?0:-1}},panelList:[...e.panelList,r],panels:{...e.panels,[r]:{"aria-expanded":!!s,"aria-hidden":!s,"aria-labelledby":a,id:r,role:"tabpanel",tabIndex:s?0:-1}}}}),{panelList:[],panels:{},tabList:[],tabFocus:-1,tabs:{},refList:[],dispatch:()=>null})),[t]),[a,r]=(0,s.useReducer)(p,n),o=(0,s.useMemo)((()=>({...a,dispatch:r})),[a,r]);return(0,b.jsx)(m.Provider,{value:o,children:e.children})}function g(){const{dispatch:e,refList:t,tabList:n,tabFocus:a}=(0,s.useContext)(m),r=(0,s.useCallback)((t=>{const s=t.key,r=n.length;if("ArrowRight"===s){const t=a+1;if(t>=r)return void u(e,0);u(e,t)}else if("ArrowLeft"===s){const t=a-1;if(t<0)return void u(e,r-1);u(e,t)}}),[e,n,a]);return(0,s.useEffect)((()=>{a>=0&&(!function(e,t){e({type:i,idx:t})}(e,a),t[a]?.focus())}),[e,t,a]),(0,s.useMemo)((()=>({onKeyDown:r,tabList:n})),[r,n])}function h(e){const t=(0,s.useRef)(null),{dispatch:n,tabList:a,tabs:r}=(0,s.useContext)(m),{onClick:i}={onClick:e?.onClick??null};const c=(0,s.useCallback)((e=>{const t=e.currentTarget.id;i&&i(t),function(e,t){e({type:o,id:t})}(n,t),u(n,a.indexOf(t))}),[n,i,a]);return(0,s.useEffect)((()=>{null!==t.current&&function(e,t){e({type:l,el:t})}(n,t.current)}),[n]),(0,s.useMemo)((()=>({onClick:c,ref:t,tabs:r})),[c,r])}var v=n(67235),k=[{id:"1",label:"Tab 1",children:{id:"1:panel"}},{id:"2",label:"Tab 2",children:{id:"2:panel"}},{id:"3",label:"Tab 3",children:{id:"3:panel"}},{id:"4",label:"Tab 4",children:{id:"4:panel"}}];const _=(0,r.g)();function w(){return s.createElement("div",_.wrapper,s.createElement(y,null),s.createElement(S,null))}function y(){const{onKeyDown:e,tabList:t}=g();return s.createElement("div",(0,a.Z)({},_.tabList,{onKeyDown:e}),t.map((e=>s.createElement(T,{id:e,key:e}))))}function T(e){const{tabs:t,...n}=h(),r=t[e.id];return s.createElement("button",(0,a.Z)({},_.tab,n,r),r.label)}function S(){const e=function(){const{panelList:e}=(0,s.useContext)(m);return(0,s.useMemo)((()=>({panelList:e})),[e])}();return s.createElement("div",_.panelWrapper,e.panelList.map((e=>s.createElement(C,{id:e,key:e}))))}function C(e){const{panels:t}=function(){const{panels:e}=(0,s.useContext)(m);return(0,s.useMemo)((()=>({panels:e})),[e])}(),n=t[e.id];return s.createElement("div",(0,a.Z)({},_.tabPanel,n),n.id," Content")}var x=function(){return s.createElement(v.Z,null,s.createElement(f,{data:k},s.createElement(w,null)))}},69477:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(45721),s=n(60146),r=n(59280),o=n(31026),i=n(6115);function l(e){const{href:t}=e,n=(0,s.g)({href:t}),l=(0,r.g)(n.iconOptions),c=t.includes("github")?o.Z:i.Z;return a.createElement("a",n.link,a.createElement(c,l),e.children)}},33031:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var a=n(81648),s=(n(45721),n(70167)),r=n(5805),o=n(95428);n(25302);const i={tags:["vertical tabs","horizontal tabs","view toggle"],title:"Tabs"},l=void 0,c={unversionedId:"reference/components/tabs",id:"version-0.4.1/reference/components/tabs",title:"Tabs",description:"Used to alternate between content views within the same context.",source:"@site/versioned_docs/version-0.4.1/reference/components/tabs.mdx",sourceDirName:"reference/components",slug:"/reference/components/tabs",permalink:"/docs/reference/components/tabs",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/versioned_docs/version-0.4.1/reference/components/tabs.mdx",tags:[{label:"vertical tabs",permalink:"/docs/tags/vertical-tabs"},{label:"horizontal tabs",permalink:"/docs/tags/horizontal-tabs"},{label:"view toggle",permalink:"/docs/tags/view-toggle"}],version:"0.4.1",lastUpdatedBy:"tim-roberts1",frontMatter:{tags:["vertical tabs","horizontal tabs","view toggle"],title:"Tabs"},sidebar:"reference",previous:{title:"Table",permalink:"/docs/reference/components/table"},next:{title:"Tag",permalink:"/docs/reference/components/tag"}},u={},d=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Tabs",id:"basic-tabs",level:3},{value:"Reference",id:"reference",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Behavior",id:"behavior",level:2},{value:"Patterns",id:"patterns",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Accessbility",id:"accessbility",level:2}],p={toc:d};function b(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",{className:"size-xxl"},"Used to alternate between content views within the same context."),(0,s.kt)(o.Z,{github:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/Tabs",figma:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsLinkBar"}),(0,s.kt)("h2",{id:"import"},"Import"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getTabsProps } from '@pluralsight/headless-styles'\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"getTabsProps(options?: TabsOptions)\n")),(0,s.kt)("admonition",{title:"Use with the tabs hook",type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"This API controls only the styling. To add functionality to your Tabs components, combine it with the ",(0,s.kt)("a",{parentName:"p",href:"/docs/reference/react-hooks/useTabs"},"useTabs hook family"),".")),(0,s.kt)("h2",{id:"anatomy"},"Anatomy"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Container"),(0,s.kt)("li",{parentName:"ol"},"List"),(0,s.kt)("li",{parentName:"ol"},"Tab"),(0,s.kt)("li",{parentName:"ol"},"Panel Container"),(0,s.kt)("li",{parentName:"ol"},"Panel")),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("h3",{id:"basic-tabs"},"Basic Tabs"),(0,s.kt)(r.Z,{mdxType:"BasicTabs"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'showLineNumbers title="Tabs family components."',showLineNumbers:!0,title:'"Tabs',family:!0,'components."':!0},"import { getTabsProps } from '@pluralsight/headless-styles'\nimport {\n  TabsProvider,\n  useTabList,\n  useTab,\n  usePanelList,\n  usePanel,\n} from '@pluralsight/react-utils'\nimport data from './tabs.data'\n\nconst tabStyles = getTabsProps()\n\nfunction Tabs() {\n  return (\n    <div {...tabStyles.wrapper}>\n      <TabList />\n      <PanelList />\n    </div>\n  )\n}\n\nfunction TabList() {\n  const { onKeyDown, tabList } = useTabList()\n  return (\n    <div {...tabStyles.tabList} onKeyDown={onKeyDown}>\n      {tabList.map((tabId) => (\n        <Tab id={tabId} key={tabId} />\n      ))}\n    </div>\n  )\n}\n\nfunction Tab(props) {\n  const { tabs, ...tab } = useTab()\n  const data = tabs[props.id]\n\n  return (\n    <button {...tabStyles.tab} {...tab} {...data}>\n      {data.label}\n    </button>\n  )\n}\n\nfunction PanelList() {\n  const data = usePanelList()\n  return (\n    <div {...tabStyles.panelWrapper}>\n      {data.panelList.map((panelId) => (\n        <TabPanel id={panelId} key={panelId} />\n      ))}\n    </div>\n  )\n}\n\nfunction TabPanel(props) {\n  const { panels } = usePanel()\n  const data = panels[props.id]\n\n  return (\n    <div {...tabStyles.tabPanel} {...data}>\n      {data.id} Content\n    </div>\n  )\n}\n\nfunction App() {\n  return (\n    <TabsProvider data={data}>\n      <Tabs />\n    </TabsProvider>\n  )\n}\n")),(0,s.kt)("h2",{id:"reference"},"Reference"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"getTabsProps()\n")),(0,s.kt)("h3",{id:"parameters"},"Parameters"),(0,s.kt)("p",null,"There are no parameters required for this component."),(0,s.kt)("h3",{id:"returns"},"Returns"),(0,s.kt)("p",null,"An Object matching the ",(0,s.kt)("a",{parentName:"p",href:"#anatomy"},"Anatomy")," containing ",(0,s.kt)("inlineCode",{parentName:"p"},"className")," and a11y properties relevant to each element/section."),(0,s.kt)("h2",{id:"behavior"},"Behavior"),(0,s.kt)("h3",{id:"patterns"},"Patterns"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Do")," use Tabs when you need to display different content relative to the same page."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Don't")," use Tabs to navigate to different areas of a page or app."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Do")," keep the Tabs restricted to a single row."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Don't")," use present multiple rows of Tabs."),(0,s.kt)("h3",{id:"usage-1"},"Usage"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Do")," restrict the use of Tabs to once per page."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Don't")," use multiple Tabs within the same page."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Do")," keep the Tabs located on top of the panel content it is displaying."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Don't")," position the Tabs or realign them outside of the default top-left positioning."),(0,s.kt)("h2",{id:"accessbility"},"Accessbility"),(0,s.kt)("p",null,"The Pando Tabs API combined with semantic HTML allow the Tabs to be fully accessible and screen-readable."))}b.isMDXComponent=!0},73767:function(e,t,n){function a(e){return{size:(null==e?void 0:e.size)??"m"}}function s(e){return{sizeClass:`${e}Tab`}}function r(){return{tabList:{role:"tablist"},tab:{"aria-selected":!1,role:"tab",tabIndex:-1},tabPanel:{"aria-expanded":!0,"aria-hidden":!1,role:"tabpanel"},panelWrapper:{},wrapper:{}}}n.d(t,{a:function(){return s},c:function(){return r},g:function(){return a}})},17273:function(e,t,n){n.d(t,{g:function(){return l}});var a=n(89020),s=n(73767),r=n(26730);const o={tabWrapper:"tabsCSS-module_tabWrapper__8RDj6",tabList:"tabsCSS-module_tabList__cmFYs",tabBase:"tabsCSS-module_tabBase__9Opdb",mTab:"tabsCSS-module_mTab__oyUZE tabsCSS-module_tabBase__9Opdb",sTab:"tabsCSS-module_sTab__3UOSe tabsCSS-module_tabBase__9Opdb",tabPanel:"tabsCSS-module_tabPanel__mr7dW"};(0,r.s)('.tabsCSS-module_tabWrapper__8RDj6{width:100%}.tabsCSS-module_tabList__cmFYs{-webkit-overflow-scrolling:touch;-webkit-padding-after:1rem;background-image:linear-gradient(to top,transparent 0,transparent 1rem,var(--ps-border-weak) 1.0625rem,var(--ps-border-weak) 1.125rem,transparent 1.1875rem,transparent 100%);border-radius:6px;display:flex;overflow-y:auto;padding:5px;padding-block-end:1rem}.tabsCSS-module_tabBase__9Opdb{-webkit-margin-end:2rem;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;border:0;border-radius:6px;color:var(--ps-action-text-weak);cursor:pointer;font-family:inherit;font-size:1rem;font-variation-settings:"wght" 500;font-weight:500;height:4rem;margin-inline-end:2rem;padding:0;position:relative;white-space:nowrap}.tabsCSS-module_sTab__3UOSe{-webkit-margin-end:1.5rem;font-size:.875rem;height:3rem;margin-inline-end:1.5rem}.tabsCSS-module_tabBase__9Opdb:after{background-color:var(--ps-background-hover);border-radius:2px 2px 0 0;bottom:.125rem;content:"";display:block;height:0;left:0;margin-top:1.125rem;position:absolute;right:0;transition:height .15s ease-in-out,background-color .25s ease-in-out;width:100%}.tabsCSS-module_sTab__3UOSe:after{margin-top:.72rem}.tabsCSS-module_tabBase__9Opdb:hover:after{height:.25rem}.tabsCSS-module_tabBase__9Opdb[aria-selected=true]{color:var(--ps-action-text-inverse)}.tabsCSS-module_tabBase__9Opdb[aria-selected=true]:after{background-color:var(--ps-action-border);height:.25rem}.tabsCSS-module_tabPanel__mr7dW{border-radius:6px;width:100%}.tabsCSS-module_tabPanel__mr7dW[aria-hidden=true]{display:none}.tabsCSS-module_tabBase__9Opdb:focus,.tabsCSS-module_tabList__cmFYs:focus,.tabsCSS-module_tabPanel__mr7dW:focus{outline:3px solid var(--ps-action-border-focus);outline-offset:2px}.tabsCSS-module_tabBase__9Opdb:focus:not(:focus-visible),.tabsCSS-module_tabList__cmFYs:focus:not(:focus-visible),.tabsCSS-module_tabPanel__mr7dW:focus:not(:focus-visible){box-shadow:none;outline:none}');const i="ps-tabs";function l(e){const t=(0,s.g)(e),n=(0,s.c)(),{sizeClass:r}=(0,s.a)(t.size);return{...n,wrapper:{...n.wrapper,...(0,a.c)(`${i}-wrapper`,o.tabWrapper)},tabList:{...n.tabList,...(0,a.c)(`${i}-list`,o.tabList)},tab:{...n.tab,...(0,a.c)(i,o[r])},tabPanel:{...n.tabPanel,...(0,a.c)(`${i}-tabPanel`,o.tabPanel)}}}}}]);