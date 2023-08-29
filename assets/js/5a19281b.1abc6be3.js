"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9717],{38570:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(70079);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(t),g=o,m=c["".concat(s,".").concat(g)]||c[g]||u[g]||i;return t?a.createElement(m,r(r({ref:n},p),{},{components:t})):a.createElement(m,r({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},95497:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=t(10328),o=(t(70079),t(38570));const i={tags:["Pagination","lazy loading","large lists"],title:"Displaying Large Lists"},r=void 0,l={unversionedId:"learn/learn-pando/design-patterns/pagination",id:"learn/learn-pando/design-patterns/pagination",title:"Displaying Large Lists",description:"Pando offers multiple pagination patterns to display large lists of content in more manageable chunks so you can optimize the experience based on the scenario.",source:"@site/docs/learn/learn-pando/design-patterns/pagination.mdx",sourceDirName:"learn/learn-pando/design-patterns",slug:"/learn/learn-pando/design-patterns/pagination",permalink:"/docs/learn/learn-pando/design-patterns/pagination",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/learn/learn-pando/design-patterns/pagination.mdx",tags:[{label:"Pagination",permalink:"/docs/tags/pagination"},{label:"lazy loading",permalink:"/docs/tags/lazy-loading"},{label:"large lists",permalink:"/docs/tags/large-lists"}],version:"current",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["Pagination","lazy loading","large lists"],title:"Displaying Large Lists"},sidebar:"learn",previous:{title:"Page Loading",permalink:"/docs/learn/learn-pando/design-patterns/page-loading"},next:{title:"Migrating from Classic",permalink:"/docs/learn/learn-pando/migration"}},s={},d=[{value:"Manual Loading vs. Modern vs. Pagination Bar",id:"manual-loading-vs-modern-vs-pagination-bar",level:2},{value:"Manual Loading",id:"manual-loading",level:3},{value:"Modern",id:"modern",level:3},{value:"Pagination Bar",id:"pagination-bar",level:3},{value:"Manual Loading for Simple Lists",id:"manual-loading-for-simple-lists",level:2},{value:"Modern for Simple Lists",id:"modern-for-simple-lists",level:2},{value:"Pagination Bar for Advanced Lists",id:"pagination-bar-for-advanced-lists",level:2}],p={toc:d},c="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Pando offers multiple pagination patterns to display large lists of content in more manageable chunks so you can optimize the experience based on the scenario."),(0,o.kt)("h2",{id:"manual-loading-vs-modern-vs-pagination-bar"},"Manual Loading vs. Modern vs. Pagination Bar"),(0,o.kt)("h3",{id:"manual-loading"},"Manual Loading"),(0,o.kt)("p",null,"Manual loading is like infinite scrolling, but the user controls when the next set of content is loaded. This approach appends the next set of content to the end of the list, allowing the user to continue scrolling with minimal disruption."),(0,o.kt)("p",null,'This pattern works well in a "discovery" scenario when the user is browsing',"\u2014","not looking for anything specific","\u2014","and ",(0,o.kt)("strong",{parentName:"p"},"aren't likely to need to revisit previously viewed content"),"."),(0,o.kt)("admonition",{title:"When to use this approach",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},'Ask yourself: "If I was a user, would I care about needing an organized approach for viewing old and new content?'),(0,o.kt)("p",{parentName:"admonition"},'Use this solution if you answered "no".')),(0,o.kt)("h3",{id:"modern"},"Modern"),(0,o.kt)("p",null,"This approach displays only one set of content at a time while providing controls for the user to navigate forward or backward through the full list usually in the order of most recent data to oldest."),(0,o.kt)("p",null,"This is useful when navigating ordered content, such as comments or course listings and is what ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pluralsight/pando/commits/main"},"Github currently uses"),"."),(0,o.kt)("admonition",{title:"When to use this approach",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},'Ask yourself: "If I was a user, would I care about seeing the most recent information first and need a simple way to view older information?'),(0,o.kt)("p",{parentName:"admonition"},'Use this solution if you answered "yes".')),(0,o.kt)("h3",{id:"pagination-bar"},"Pagination Bar"),(0,o.kt)("p",null,"The Pagination Bar expands on the Modern approach, offering more information and control to the user. This approach adds controls for the page size (number of items displayed) and indicates the size of the list, along with the user's position within that list."),(0,o.kt)("p",null,"The extra controls can be helpful when searching for content within larger, more complex lists, such as data tables, and works well when paired with more granular search/filtering controls."),(0,o.kt)("admonition",{title:"when to use this approach",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},'Ask yourself: "If I was a user, would I care about needing to view more information and have full control over how it is displayed and navigated through?'),(0,o.kt)("p",{parentName:"admonition"},'Use this solution if you answered "yes".')),(0,o.kt)("h2",{id:"manual-loading-for-simple-lists"},"Manual Loading for Simple Lists"),(0,o.kt)("p",null,"For Manual Loading, we place the button at the end of the content and append the next set when it is pressed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function ShowMoreButton() {\n  const [content, setContent] = useState(\n    Array(5).fill('Most recent information'),\n  )\n\n  function handleFetchMoreData() {\n    setContent((prev) => [\n      ...prev.fill('Most recent information'),\n      ...Array(5).fill('New content'),\n    ])\n  }\n\n  return (\n    <div>\n      <ul>\n        {content.map((item) => (\n          <li>{item}</li>\n        ))}\n      </ul>\n      <Button onClick={handleFetchMoreData}>Show more</Button>\n    </div>\n  )\n}\n")),(0,o.kt)("h2",{id:"modern-for-simple-lists"},"Modern for Simple Lists"),(0,o.kt)("p",null,"For the Modern approach, we use two buttons that replace the displayed content with the next set from the indicated direction. If there is no more content in that direction, the corresponding button should be disabled."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function PaginationButtons() {\n  const [activePage, setActivePage] = useState(0)\n  const content = ['first page', 'second page', 'third page']\n\n  function loadNewerContent() {\n    setActivePage((prev) => prev - 1)\n  }\n\n  function loadOlderContent() {\n    setActivePage((prev) => prev + 1)\n  }\n\n  return (\n    <div>\n      {content[activePage]}\n      <Flex align=\"center\" justify=\"center\" gap={16}>\n        <Button disabled={activePage <= 0} onClick={loadNewerContent}>\n          Newer\n        </Button>\n        <Button\n          disabled={activePage >= content.length - 1}\n          onClick={loadOlderContent}\n        >\n          Older\n        </Button>\n      </Flex>\n    </div>\n  )\n}\n")),(0,o.kt)("h2",{id:"pagination-bar-for-advanced-lists"},"Pagination Bar for Advanced Lists"),(0,o.kt)("p",null,"For the Pagination Bar, we add page information combined with a Select component and the Modern approach appended to the end of the bar which shows disabled states based on the list data available for the user to navigate through."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function PaginationBar() {\n  const [rowOption, setRowOption] = useState(\'5\')\n  const marginReset = useRef(\'8px\')\n\n  function handleSelectChange(e) {\n    setRowOption(e.target.value)\n  }\n\n  return (\n    <Flex align="center" justify="flex-end">\n      <FlexItem grow={0}>\n        <small\n          style={{\n            display: \'inline-block\',\n            marginTop: marginReset.current,\n          }}\n        >\n          <strong>1-25</strong> of 12,345\n        </small>\n      </FlexItem>\n\n      <FlexItem grow={0.5}>\n        <FormControlProvider>\n          <Label htmlFor="pagination" kind="hidden">\n            Search by rows\n          </Label>\n          <Select onChange={handleSelectChange} pandoSize="m">\n            <Option value="5">5 Rows</Option>\n            <Option value="10">10 Rows</Option>\n            <Option value="25">25 Rows</Option>\n          </Select>\n        </FormControlProvider>\n      </FlexItem>\n\n      <FlexItem>\n        <Flex align="center" gap={6} style={{ marginTop: marginReset.current }}>\n          <IconButton icon={CaretLeftIcon} disabled size="m" />\n          <IconButton icon={CaretRightIcon} size="m" />\n        </Flex>\n      </FlexItem>\n    </Flex>\n  )\n}\n')))}u.isMDXComponent=!0}}]);