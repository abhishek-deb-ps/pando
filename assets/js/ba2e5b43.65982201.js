"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6156],{70167:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(45721);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,b=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(b,s(s({ref:t},p),{},{components:n})):a.createElement(b,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96122:function(e,t,n){const a=n(86521);t.Z=function(e){return(0,a.jsx)("svg",{"aria-label":"NPM logo",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,a.jsx)("path",{d:"M12 12.444h-1.111v-2.222H12v2.222ZM22 8v6.667H12v1.11H7.556v-1.11H2V8h20ZM7.556 9.111H3.11v4.445h2.222v-3.334h1.111v3.334h1.112V9.11Zm5.555 0H8.667v5.556h2.222v-1.111h2.222V9.11Zm7.778 0h-6.667v4.445h2.222v-3.334h1.112v3.334h1.11v-3.334h1.112v3.334h1.11V9.11Z"})})}},35053:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(45721),r=n(57465),o=n(71651),s=n(24217),i=n(96122);function l(e){var t=e.href,n=(0,r.j)({href:t}),l=(0,o.L)(n.iconOptions),u=t.includes("github")?s.Z:i.Z;return a.createElement("a",n.link,a.createElement(u,l),e.children)}},35031:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var a=n(60953),r=n(59005),o=(n(45721),n(70167)),s=n(35053),i=["components"],l={tags:["Development","Packages","React","React utils","useTabs","hooks"],title:"useTabs"},u=void 0,p={unversionedId:"development/react-utils/use-tabs",id:"development/react-utils/use-tabs",title:"useTabs",description:"A custom set of custom hooks for controlling state and a11y for Tab components.",source:"@site/docs/development/react-utils/use-tabs.mdx",sourceDirName:"development/react-utils",slug:"/development/react-utils/use-tabs",permalink:"/docs/next/development/react-utils/use-tabs",draft:!1,editUrl:"https://github.com/pluralsight/tva/edit/main/website/docs/development/react-utils/use-tabs.mdx",tags:[{label:"Development",permalink:"/docs/next/tags/development"},{label:"Packages",permalink:"/docs/next/tags/packages"},{label:"React",permalink:"/docs/next/tags/react"},{label:"React utils",permalink:"/docs/next/tags/react-utils"},{label:"useTabs",permalink:"/docs/next/tags/use-tabs"},{label:"hooks",permalink:"/docs/next/tags/hooks"}],version:"current",lastUpdatedBy:"Tom Pietrosanti",frontMatter:{tags:["Development","Packages","React","React utils","useTabs","hooks"],title:"useTabs"},sidebar:"development",previous:{title:"usePreloadedImage",permalink:"/docs/next/development/react-utils/use-preloaded-img"},next:{title:"Roadmap",permalink:"/docs/next/development/discover-more/roadmap"}},c={},d=[{value:"Import",id:"import",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Hooks Usage",id:"hooks-usage",level:2},{value:"Example usage in Component",id:"example-usage-in-component",level:2},{value:"Props",id:"props",level:2},{value:"TabData",id:"tabdata",level:3},{value:"Provider State",id:"provider-state",level:3},{value:"Types",id:"types",level:2}],m={toc:d};function b(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A custom set of custom hooks for controlling state and a11y for Tab components."),(0,o.kt)(s.Z,{icon:"github",href:"https://github.com/pluralsight/tva/blob/main/packages/react-utils/src/hooks/useTabs",mdxType:"ViewSourceLink"},"View source"),(0,o.kt)("h2",{id:"import"},"Import"),(0,o.kt)("p",null,"The useTab set comes with four hooks and a context provider."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"TabsProvider: controls the context and data for all of the Tab-related hooks"),(0,o.kt)("li",{parentName:"ul"},"useTabList: custom hook for a component that displays the list of tabs"),(0,o.kt)("li",{parentName:"ul"},"useTab: custom hook for a component that displays a single tab"),(0,o.kt)("li",{parentName:"ul"},"usePanelList: custom hook for a component that displays the list of panels"),(0,o.kt)("li",{parentName:"ul"},"usePanel: custom hook for a component that displays a single panel")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import {\n  TabsProvider,\n  useTabList,\n  useTab,\n  usePanelList,\n  usePanel,\n} from '@pluralsight/react-utils'\n")),(0,o.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,o.kt)("p",null,"To use any of the hooks, just pass in your ",(0,o.kt)("a",{parentName:"p",href:"#tabdata"},"tab data")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"TabsProvider"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<TabsProvider data={tabData}>\n  <Tabs />\n</TabsProvider>\n")),(0,o.kt)("p",null,"The Provider will normalize the data, insert all the accessbility attributes, and return a flat Object of ",(0,o.kt)("a",{parentName:"p",href:"#provider-state"},"provider state"),"."),(0,o.kt)("h2",{id:"hooks-usage"},"Hooks Usage"),(0,o.kt)("p",null,"To use each hook, we recommend approaching your component design using the single responsibility method (React way)."),(0,o.kt)("p",null,"This means, instead of building one component that owns ",(0,o.kt)("em",{parentName:"p"},"everything"),", you build four components that own a single thing (i.e. displaying a tab)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function Tab({ id }) {\n  const { tabs, ...tabProps } = useTab()\n  const data = tabs[id]\n\n  return (\n    <button {...data} {...tabProps}>\n      {data.label}\n    </button>\n  )\n}\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"By using this design, you will gain more control, and performance in your UI rendering. This will also reduce the risk of bugs over time.")),(0,o.kt)("h2",{id:"example-usage-in-component"},"Example usage in Component"),(0,o.kt)("p",null,"Here is an example of how you might use these hooks in a Tabs component alongside the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/development/headless-styles/Tabs"},"Tabs")," Headless-styles helper."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"We performance test our hooks to ensure the highest quality of rendering and can guarantee they will not negatively impact your UI when following our design recommendations.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const tabStyles = getTabProps()\n\nfunction TabsEl() {\n  return (\n    <div {...tabStyles.wrapper}>\n      <TabList />\n      <PanelList />\n    </div>\n  )\n}\n\nfunction TabList() {\n  const { onKeyDown, tabList } = useTabList()\n  return (\n    <div {...tabStyles.tabList} onKeyDown={onKeyDown}>\n      {tabList.map((tabId) => (\n        <Tab id={tabId} key={tabId} />\n      ))}\n    </div>\n  )\n}\n\nfunction Tab(props) {\n  const { tabs, ...tab } = useTab()\n  const data = tabs[props.id]\n\n  return (\n    <button {...tabStyles.tab} {...tab} {...data}>\n      {data.label}\n    </button>\n  )\n}\n\nfunction PanelList() {\n  const data = usePanelList()\n  return (\n    <div {...tabStyles.panelWrapper}>\n      {data.panelList.map((panelId) => (\n        <TabPanel id={panelId} key={panelId} />\n      ))}\n    </div>\n  )\n}\n\nfunction TabPanel(props) {\n  const { panels } = usePanel()\n  const data = panels[props.id]\n\n  return (\n    <div {...tabStyles.tabPanel} {...data}>\n      {data.id}\n    </div>\n  )\n}\n\nfunction Tabs({ data }) {\n  return (\n    <TabsProvider data={data}>\n      <TabsEl />\n    </TabsProvider>\n  )\n}\n\nexport default memo(Tabs)\n")),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("h3",{id:"tabdata"},"TabData"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface TabData {\n  id: string\n  label: string\n  children: {\n    id: string\n  }\n}\n")),(0,o.kt)("h3",{id:"provider-state"},"Provider State"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ProviderState {\n  panelList: Array<TabId>\n  panels: Record<TabId, FormattedPanel>\n  tabList: Array<TabId>\n  tabFocus: number\n  tabs: Record<TabId, FormattedTab>\n  refList: Array<HTMLElement>\n  dispatch: Dispatch<TabsActions>\n}\n")),(0,o.kt)("h2",{id:"types"},"Types"),(0,o.kt)("p",null,"This helper exports an interface for use in Typescript:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import type { TabsData } from '@pluralsight/react-utils/types'\n")))}b.isMDXComponent=!0},95419:function(e,t,n){n.r(t),t.default={textLinkBase:"textLinkBase_oJHd"}},55334:function(e,t){function n(e){return/^https?:\/\//.test(e)}function a(e){return{ariaHidden:!1,ariaLabel:"(opens in a new window)",customSize:t.textLinkIconSize,tech:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.createTextLinkProps=t.getDefaultTextLinkOptions=t.defaultTextLinkOptions=t.textLinkIconSize=void 0,t.textLinkIconSize="1em",t.defaultTextLinkOptions={href:"",tech:""},t.getDefaultTextLinkOptions=function(e){return{href:e?.href??t.defaultTextLinkOptions.href,tech:e?.tech??t.defaultTextLinkOptions.tech}},t.createTextLinkProps=function(e,t){const r=function(e){return n(e)?{rel:"noopener external",target:"_blank"}:{}}(e);return{link:{href:e,...r},...n(e)&&{iconOptions:a(t)}}}},57465:function(e,t,n){t.j=void 0;const a=n(6495),r=n(3097),o=n(55334),s=a.__importDefault(n(95419));t.j=function(e){const t=(0,o.getDefaultTextLinkOptions)(e),n=(0,o.createTextLinkProps)(t.href,t.tech);return{...n,link:{...n.link,...(0,r.createClassProp)(t.tech,{defaultClass:`ps-text-link ${s.default.textLinkBase}`,svelteClass:"textLinkBase"})}}}}}]);