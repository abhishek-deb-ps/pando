"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6059],{64183:(e,t,n)=>{n.d(t,{dS:()=>o,fK:()=>s,C9:()=>p,ZP:()=>d});var a=n(70079),l=n(5735);const r={linkList:"linkList_sLwJ",linkItem:"linkItem_ESvF"};function i(e){return a.createElement("li",{className:r.linkItem},a.createElement(l.Z,e,e.children))}function s(e){return a.createElement(i,{href:e.href},e.children??"View on Github")}function o(e){return a.createElement(i,{href:e.href},"View on Figma")}function p(e){return a.createElement("ul",{className:r.linkList},e.children)}function d(e){const{figma:t,github:n}=e;return a.createElement("ul",{className:r.linkList},n&&a.createElement(s,{href:n}),t&&a.createElement(o,{href:t}))}},12107:(e,t,n)=>{n(70079)},5735:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(70079),l=n(59788),r=n(65710),i=n(15537),s=n(28754);function o(e){const{href:t}=e,n=(0,r.L)({ariaHidden:!0,size:"s"}),o=t.includes("github")?i.Z:s.Z;return a.createElement(l.TextLink,e,a.createElement(o,n),e.children)}},98151:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>v,frontMatter:()=>k,metadata:()=>T,toc:()=>N});var a=n(10328),l=n(70079),r=n(38570),i=n(64183),s=(n(12107),n(20605)),o=n(94357),p=n(64418);const d="0.5.1-next-74eedd",m={entry:"/index.tsx",dependencies:{"@pluralsight/headless-styles":d,"@pluralsight/react":d,"@pluralsight/icons":d,"core-js":"latest"}},b={code:'import React from "react";\nimport ReactDOM from "react-dom/client";\nimport \'core-js/stable\';\n\nimport App from "./App";\nimport "./styles.css"\n\nReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>\n);\n',hidden:!0},c={code:"@import url('https://fonts.pluralsight.com/ps-tt-commons/v1/ps-tt-commons-variable-roman.woff2');\n  @import url('https://cdn.jsdelivr.net/npm/@pluralsight/design-tokens@next/fonts.css');\n  @import url('https://cdn.jsdelivr.net/npm/@pluralsight/design-tokens@next/npm/normalize/normalize.css');\n\n  body {\n    padding: 1rem;\n  }\n  ",hidden:!0};function u(e){const t=function(e){return e.reduce(((e,t)=>{if("pre"!==t.props.mdxType)return e;const{props:n}=t.props.children;let a,l=!1,r=!1;if(n.metastring){const[e,...t]=n.metastring.split(" ");a="/"+e,t.includes("hidden")&&(l=!0),t.includes("active")&&(r=!0)}else if("language-tsx"===n.className)a="/App.tsx";else{if("language-css"!==n.className)throw new Error(`Code block is missing a filename: ${n.children}`);a="/styles.css"}if(e[a])throw new Error(`File ${a} was defined multiple times. Each file snippet should have a unique path name`);return e[a]={code:n.children||"",hidden:l,active:r},e}),{})}(l.Children.toArray(e.children));return t["/index.tsx"]=b,t["/styles.css"]=c,l.createElement(l.Suspense,{fallback:l.createElement("div",null,"Loading...")},l.createElement(s.oT,{customSetup:m,files:t,template:"vite-react-ts",theme:o.I2},l.createElement(s.sp,null,l.createElement(s._V,{extensions:[(0,p.ys)()],extensionsKeymap:[p.B1],showTabs:!0,showLineNumbers:!0,showInlineErrors:!0,wrapContent:!0}),l.createElement(s.Gj,null))))}const k={sidebar_class_name:"new-api",tags:["vertical tabs","horizontal tabs","navigation"],title:"Tabs"},h=void 0,T={unversionedId:"reference/components/tabs",id:"reference/components/tabs",title:"Tabs",description:"Used to display a list of tabs that can be used to navigate between different",source:"@site/docs/reference/components/tabs.mdx",sourceDirName:"reference/components",slug:"/reference/components/tabs",permalink:"/docs/reference/components/tabs",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/reference/components/tabs.mdx",tags:[{label:"vertical tabs",permalink:"/docs/tags/vertical-tabs"},{label:"horizontal tabs",permalink:"/docs/tags/horizontal-tabs"},{label:"navigation",permalink:"/docs/tags/navigation"}],version:"current",lastUpdatedBy:"Casey Baggz",frontMatter:{sidebar_class_name:"new-api",tags:["vertical tabs","horizontal tabs","navigation"],title:"Tabs"},sidebar:"reference",previous:{title:"Table",permalink:"/docs/reference/components/table"},next:{title:"Tag",permalink:"/docs/reference/components/tag"}},g={},N=[{value:"Anatomy",id:"anatomy",level:2},{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Static Tabs",id:"static-tabs",level:3},{value:"Dynamic Tabs",id:"dynamic-tabs",level:3},{value:"Disabled Tabs",id:"disabled-tabs",level:3},{value:"Custom Tabs Components",id:"custom-tabs-components",level:3},{value:"Headless Styles",id:"headless-styles",level:3},{value:"Behavoir",id:"behavoir",level:2},{value:"Patterns",id:"patterns",level:3},{value:"Usage",id:"usage-1",level:3},{value:"API",id:"api",level:2},{value:"TabsProvider",id:"tabsprovider",level:3},{value:"Props",id:"props",level:4},{value:"TabsList",id:"tabslist",level:3},{value:"Props",id:"props-1",level:4},{value:"Tab",id:"tab",level:3},{value:"Props",id:"props-2",level:4},{value:"TabsPanel",id:"tabspanel",level:3},{value:"Props",id:"props-3",level:4},{value:"Accessibility",id:"accessibility",level:2},{value:"Screen Reader Interactions",id:"screen-reader-interactions",level:3},{value:"Keyboard Interactions",id:"keyboard-interactions",level:3}],f={toc:N},y="wrapper";function v(e){let{components:t,...n}=e;return(0,r.kt)(y,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",{className:"size-xxl"},"Used to display a list of tabs that can be used to navigate between different sections of a page."),(0,r.kt)(i.C9,{mdxType:"DocsLinkList"},(0,r.kt)(i.fK,{href:"https://github.com/pluralsight/pando/blob/main/packages/react/src/components/tabs.tsx",mdxType:"DocsGithubLink"}),(0,r.kt)(i.fK,{href:"https://github.com/pluralsight/pando/blob/main/packages/headless-styles/src/components/Tabs/tabs.ts",mdxType:"DocsGithubLink"},"View Headless Styles"),(0,r.kt)(i.fK,{href:"https://github.com/pluralsight/pando/blob/main/packages/react-aria/src/tabs.ts",mdxType:"DocsGithubLink"},"View React Aria"),(0,r.kt)(i.dS,{href:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsFigmaLink"})),(0,r.kt)("h2",{id:"anatomy"},"Anatomy"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Tab Wrapper"),(0,r.kt)("li",{parentName:"ol"},"Tab List"),(0,r.kt)("li",{parentName:"ol"},"Tab"),(0,r.kt)("li",{parentName:"ol"},"Tab Panel")),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { TabsProvider, TabsList, Tab, TabsPanel } from '@pluralsight/react'\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("admonition",{title:"Tab Accessibility",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"In order for the Tabs be accessible, you must provide a matching ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," for each Tab that is unique to the Tab list.")),(0,r.kt)("h3",{id:"static-tabs"},"Static Tabs"),(0,r.kt)("p",null,"When you want to display set of Tabs that use static content, you can render all the components directly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function StaticTabs() {\n  const tabs = useMemo(() => {\n    return [\n      {\n        id: 'tab-1',\n        label: 'Tab 1',\n        panel: 'panel-1',\n      },\n      {\n        id: 'tab-2',\n        label: 'Tab 2',\n        panel: 'panel-2',\n      },\n      {\n        id: 'tab-3',\n        label: 'Tab 3',\n        panel: 'panel-3',\n      },\n    ]\n  }, [])\n\n  return (\n    <TabsProvider defaultActiveTab={tabs[0].id}>\n      <TabsList>\n        <For each={tabs}>\n          {(tab) => (\n            <Tab key={tab.id} controls={tab.panel} id={tab.id} value={tab.id}>\n              {tab.label}\n            </Tab>\n          )}\n        </For>\n      </TabsList>\n\n      <For each={tabs}>\n        {(tab) => (\n          <TabsPanel key={tab.panel} labelledBy={tab.id} id={tab.panel}>\n            {tab.panel} Content\n          </TabsPanel>\n        )}\n      </For>\n    </TabsProvider>\n  )\n}\n")),(0,r.kt)("h3",{id:"dynamic-tabs"},"Dynamic Tabs"),(0,r.kt)("p",null,"When you want to display a set of Tabs that use dynamic content, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"useTabs")," hook to render the Tabs and Panels."),(0,r.kt)("admonition",{title:"Automatic loading states",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"When fetching data for a Tab Panel, the Tabs will automatically display a loading state until the data is available. This is because we utilize ",(0,r.kt)("inlineCode",{parentName:"p"},"Supsense")," under the hood.")),(0,r.kt)(u,{mdxType:"PandoSandbox"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { lazy, useMemo } from 'react'\nimport {\n  TabsProvider,\n  TabsList,\n  Tab,\n  useTabs,\n  For,\n  Show,\n} from '@pluralsight/react'\nimport StaticPanel from './StaticPanel'\n\n// Lazy load DynamicPanel for performance\nconst LazySlowPanel = lazy(() => import('./DynamicPanel'))\n\nfunction PanelList() {\n  const { activeTab } = useTabs()\n\n  return (\n    <Show\n      when={activeTab !== 'tab-2'}\n      fallback={<LazySlowPanel id=\"panel-2\" labelledBy=\"tab-2\" />}\n    >\n      <StaticPanel\n        id={`panel-${activeTab.split('-')[0]}`}\n        labelledBy={activeTab}\n      >\n        <p>{activeTab} Content</p>\n      </StaticPanel>\n    </Show>\n  )\n}\n\nexport default function App() {\n  const tabs = useMemo(\n    () => [\n      {\n        id: 'tab-1',\n        label: 'Tab 1',\n        panel: 'panel-1',\n      },\n      {\n        id: 'tab-2',\n        label: 'Tab 2',\n        panel: 'panel-2',\n      },\n      {\n        id: 'tab-3',\n        label: 'Tab 3',\n        panel: 'panel-3',\n      },\n    ],\n    [],\n  )\n\n  return (\n    <TabsProvider defaultActiveTab={tabs[0].id}>\n      <TabsList>\n        <For each={tabs}>\n          {(tab) => (\n            <Tab key={tab.id} controls={tab.panel} id={tab.id} value={tab.id}>\n              {tab.label}\n            </Tab>\n          )}\n        </For>\n      </TabsList>\n\n      <PanelList />\n    </TabsProvider>\n  )\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"StaticPanel.tsx","StaticPanel.tsx":!0},"import { TabsPanel, type TabsPanelProps } from '@pluralsight/react'\n\nexport default function StaticPanel(props: TabsPanelProps) {\n  return (\n    <TabsPanel id={props.id} labelledBy={props.labelledBy}>\n      {props.children}\n    </TabsPanel>\n  )\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"DynamicPanel.tsx","DynamicPanel.tsx":!0},"import { memo } from 'react'\nimport { TabsPanel, type TabsPanelProps } from '@pluralsight/react'\n\nconst DynamicPanel = memo((props: TabsPanelProps) => {\n  // Log once. The actual slowdown is inside DynamicContent.\n  console.log('[ARTIFICIALLY SLOW] Rendering 500 <DynamicContent />')\n\n  const items = []\n  for (let i = 0; i < 500; i++) {\n    items.push(<DynamicContent key={i} />)\n  }\n\n  return (\n    <TabsPanel id={props.id} labelledBy={props.labelledBy}>\n      {items}\n    </TabsPanel>\n  )\n})\nDynamicPanel.displayName = 'DynamicPanel'\n\nfunction DynamicContent() {\n  const startTime = performance.now()\n  while (performance.now() - startTime < 1) {\n    // Do nothing for 1 ms per item to emulate extremely slow code\n  }\n  return <p>Dynamic Content</p>\n}\n\nexport default DynamicPanel\n"))),(0,r.kt)("h3",{id:"disabled-tabs"},"Disabled Tabs"),(0,r.kt)("p",null,"When you want to disable a Tab, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"disabled")," prop on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Tab")," component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function StaticTabs() {\n  const tabs = useMemo(() => {\n    return [\n      {\n        id: 'tab-1',\n        label: 'Tab 1',\n        panel: 'panel-1',\n      },\n      {\n        id: 'tab-2',\n        label: 'Tab 2',\n        panel: 'panel-2',\n      },\n      {\n        id: 'tab-3',\n        label: 'Tab 3',\n        panel: 'panel-3',\n      },\n    ]\n  }, [])\n\n  return (\n    <TabsProvider defaultActiveTab={tabs[0].id}>\n      <TabsList>\n        <For each={tabs}>\n          {(tab) => (\n            <Tab\n              key={tab.id}\n              controls={tab.panel}\n              disabled={tab.id === 'tab-2'}\n              id={tab.id}\n              value={tab.id}\n            >\n              {tab.label}\n            </Tab>\n          )}\n        </For>\n      </TabsList>\n\n      <For each={tabs}>\n        {(tab) => (\n          <TabsPanel key={tab.panel} labelledBy={tab.id} id={tab.panel}>\n            {tab.panel} Content\n          </TabsPanel>\n        )}\n      </For>\n    </TabsProvider>\n  )\n}\n")),(0,r.kt)("h3",{id:"custom-tabs-components"},"Custom Tabs Components"),(0,r.kt)("p",null,"When you want to customize the Tab family of components, you can use any of the native React features to overwrite styling for the elements."),(0,r.kt)(u,{mdxType:"PandoSandbox"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { TabsProvider, Tab, type TabProps } from \'@pluralsight/react\'\nimport \'./custom.css\'\n\nfunction CustomTab(props: TabProps) {\n  return (\n    <Tab {...props} className="custom-tab">\n      Custom Tab element\n    </Tab>\n  )\n}\n\nexport default function App() {\n  return (\n    <TabsProvider>\n      <CustomTab id="tab-1" value="tab-1" />\n    </TabsProvider>\n  )\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:"custom.css","custom.css":!0},".custom-tab {\n  background: #eee;\n  border: 1px solid #ccc;\n  border-bottom: none;\n  border-radius: 4px 4px 0 0;\n  color: #333;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 8px 16px;\n  text-decoration: none;\n  transition: background 0.1s ease-out;\n}\n"))),(0,r.kt)("h3",{id:"headless-styles"},"Headless Styles"),(0,r.kt)("p",null,"When you want to create a set of your own Tab components from scratch, you can use the Headless Styles API along with the React Aria to make them accessible."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'showLineNumbers title="A custom TabsList component"',showLineNumbers:!0,title:'"A',custom:!0,TabsList:!0,'component"':!0},"import {\n  getTabWrapperStyles,\n  getTabListStyles,\n  splitClassNameProp,\n} from '@pluralsight/headless-styles'\nimport {\n  useAriaTabList,\n  type UseTabListOptions,\n} from '@pluralsight/react-aria'\n\ninterface CustomTabListProps extends HTMLAttributes<HTMLDivElement>, UseTabListOptions {\n  activeTab: string,\n}\n\nexport function CustomTabList(props: CustomTabListProps) {\n  const { activeTab, labelledBy, setFocus, tabsRefList, ...nativeProps } = props\n  const pandoStyles = getTabListStyles({\n    classNames: splitClassNameProp(nativeProps.className),\n  })\n  const ariaProps = useAriaTabList({\n    activeTabValue: ,\n    labelledBy,\n    setFocus: onTabClick,\n    tabsRefList,\n  })\n\n  return <div {...nativeProps} {...pandoStyles} {...ariaProps} />\n}\n")),(0,r.kt)("h2",{id:"behavoir"},"Behavoir"),(0,r.kt)("h3",{id:"patterns"},"Patterns"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do")," use Tabs when you need to display different content relative to the same page."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don't")," use Tabs to navigate to different areas of a page or app."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do")," keep the Tabs restricted to a single row."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don't")," use present multiple rows of Tabs."),(0,r.kt)("h3",{id:"usage-1"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do")," restrict the use of Tabs to once per page."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don't")," use multiple Tabs within the same page."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do")," keep the Tabs located on top of the panel content it is displaying."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don't")," position the Tabs or realign them outside of the default top-left positioning."),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"tabsprovider"},"TabsProvider"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"TabsProvider")," component is used to provide the context for the Tabs components. It is required to be used in order for the Tabs components to work."),(0,r.kt)("h4",{id:"props"},"Props"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Prop"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"defaultActiveTab")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The default active tab value. This is used to set the initial active tab.")))),(0,r.kt)("h3",{id:"tabslist"},"TabsList"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"TabsList")," component is used to wrap the ",(0,r.kt)("inlineCode",{parentName:"p"},"Tab")," components. It is required to be used in order for the Tabs components to work."),(0,r.kt)("h4",{id:"props-1"},"Props"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Prop"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"labelledBy")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"id")," of a ",(0,r.kt)("a",{parentName:"td",href:"/docs/reference/components/form-label"},"Form Label")," associated with the Tab group.")))),(0,r.kt)("h3",{id:"tab"},"Tab"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Tab")," component is used to represent a single tab within the ",(0,r.kt)("inlineCode",{parentName:"p"},"TabsList")," component."),(0,r.kt)("h4",{id:"props-2"},"Props"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Prop"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"controls")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"id")," of the ",(0,r.kt)("inlineCode",{parentName:"td"},"TabsPanel")," component that the Tab controls.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"disabled")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether or not the Tab is disabled.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"id")," of the Tab.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The value of the Tab which ",(0,r.kt)("strong",{parentName:"td"},"should match the ",(0,r.kt)("inlineCode",{parentName:"strong"},"id")),".")))),(0,r.kt)("h3",{id:"tabspanel"},"TabsPanel"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"TabsPanel")," component is used to represent the content of a single tab within the ",(0,r.kt)("inlineCode",{parentName:"p"},"TabsList")," component."),(0,r.kt)("h4",{id:"props-3"},"Props"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Prop"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"labelledBy")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"id")," of the ",(0,r.kt)("inlineCode",{parentName:"td"},"Tab")," component that the Tab Panel is associated with.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"id")," of the Tab Panel.")))),(0,r.kt)("h2",{id:"accessibility"},"Accessibility"),(0,r.kt)("p",null,"The Tabs component is built to be accessible to screen readers and keyboard users alike."),(0,r.kt)("h3",{id:"screen-reader-interactions"},"Screen Reader Interactions"),(0,r.kt)("p",null,"Screen readers will announce the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The number of Tabs"),(0,r.kt)("li",{parentName:"ol"},"The selected Tab"),(0,r.kt)("li",{parentName:"ol"},"The Tab Panel content")),(0,r.kt)("h3",{id:"keyboard-interactions"},"Keyboard Interactions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Tab")),(0,r.kt)("td",{parentName:"tr",align:null},"Moves focus to the next focusable element.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Shift + Tab")),(0,r.kt)("td",{parentName:"tr",align:null},"Moves focus to the previous focusable element.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Left Arrow")),(0,r.kt)("td",{parentName:"tr",align:null},"Moves focus to the previous Tab.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Right Arrow")),(0,r.kt)("td",{parentName:"tr",align:null},"Moves focus to the next Tab.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Home")),(0,r.kt)("td",{parentName:"tr",align:null},"Moves focus to the first Tab.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"End")),(0,r.kt)("td",{parentName:"tr",align:null},"Moves focus to the last Tab.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Space")),(0,r.kt)("td",{parentName:"tr",align:null},"Selects the current Tab.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Enter")),(0,r.kt)("td",{parentName:"tr",align:null},"Selects the current Tab.")))))}v.isMDXComponent=!0}}]);