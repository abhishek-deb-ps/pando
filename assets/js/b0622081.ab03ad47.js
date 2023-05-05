"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5864],{70167:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return g}});var a=n(45721);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),c=u(n),g=o,h=c["".concat(s,".").concat(g)]||c[g]||d[g]||r;return n?a.createElement(h,i(i({ref:e},p),{},{components:n})):a.createElement(h,i({ref:e},p))}));function g(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},70329:function(t,e,n){n.d(e,{Z:function(){return i}});var a=n(45721),o=n(88795),r="tabItem_oizw";function i(t){let{children:e,hidden:n,className:i}=t;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:n},e)}},24444:function(t,e,n){n.d(e,{Z:function(){return S}});var a=n(81648),o=n(45721),r=n(88795),i=n(2760),l=n(95418),s=n(99817),u=n(94037);function p(t){return function(t){return o.Children.map(t,(t=>{if(!t||(0,o.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(t).map((t=>{let{props:{value:e,label:n,attributes:a,default:o}}=t;return{value:e,label:n,attributes:a,default:o}}))}function d(t){const{values:e,children:n}=t;return(0,o.useMemo)((()=>{const t=e??p(n);return function(t){const e=(0,s.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,n])}function c(t){let{value:e,tabValues:n}=t;return n.some((t=>t.value===e))}function g(t){let{queryString:e=!1,groupId:n}=t;const a=(0,i.k6)(),r=function(t){let{queryString:e=!1,groupId:n}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:e,groupId:n});return[(0,l._X)(r),(0,o.useCallback)((t=>{if(!r)return;const e=new URLSearchParams(a.location.search);e.set(r,t),a.replace({...a.location,search:e.toString()})}),[r,a])]}function h(t){const{defaultValue:e,queryString:n=!1,groupId:a}=t,r=d(t),[i,l]=(0,o.useState)((()=>function(t){let{defaultValue:e,tabValues:n}=t;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!c({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=n.find((t=>t.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:e,tabValues:r}))),[s,p]=g({queryString:n,groupId:a}),[h,m]=function(t){let{groupId:e}=t;const n=function(t){return t?`docusaurus.tab.${t}`:null}(e),[a,r]=(0,u.Nk)(n);return[a,(0,o.useCallback)((t=>{n&&r.set(t)}),[n,r])]}({groupId:a}),f=(()=>{const t=s??h;return c({value:t,tabValues:r})?t:null})();(0,o.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,o.useCallback)((t=>{if(!c({value:t,tabValues:r}))throw new Error(`Can't select invalid tab value=${t}`);l(t),p(t),m(t)}),[p,m,r]),tabValues:r}}var m=n(13790),f=n(33672),b="tabList_LfCh",k="tabItem_SAQu";function y(t){let{className:e,block:n,selectedValue:i,selectValue:l,tabValues:s}=t;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,m.o5)(),d=t=>{const e=t.currentTarget,n=u.indexOf(e),a=s[n].value;a!==i&&(p(e),l(a))},c=t=>{let e=null;switch(t.key){case"Enter":d(t);break;case"ArrowRight":{const n=u.indexOf(t.currentTarget)+1;e=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(t.currentTarget)-1;e=u[n]??u[u.length-1];break}}e?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},e)},s.map((t=>{let{value:e,label:n,attributes:l}=t;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===e?0:-1,"aria-selected":i===e,key:e,ref:t=>u.push(t),onKeyDown:c,onClick:d},l,{className:(0,r.Z)("tabs__item",k,l?.className,{"tabs__item--active":i===e})}),n??e)})))}function w(t){let{lazy:e,children:n,selectedValue:a}=t;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const t=r.find((t=>t.props.value===a));return t?(0,o.cloneElement)(t,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((t,e)=>(0,o.cloneElement)(t,{key:e,hidden:t.props.value!==a}))))}function v(t){const e=h(t);return o.createElement("div",{className:(0,r.Z)("tabs-container",b)},o.createElement(y,(0,a.Z)({},t,e)),o.createElement(w,(0,a.Z)({},t,e)))}function S(t){const e=(0,f.Z)();return o.createElement(v,(0,a.Z)({key:String(e)},t))}},15111:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var a=n(81648),o=(n(45721),n(70167)),r=n(24444),i=n(70329);const l={sidebar_position:2,tags:["star rating","how to","developer"],title:"Tutorial: StarRating Component"},s=void 0,u={unversionedId:"learn/get-started/quick-start/tutorial-star-rating",id:"version-0.4.1/learn/get-started/quick-start/tutorial-star-rating",title:"Tutorial: StarRating Component",description:"You will build a small Star Rating system during this tutorial. This tutorial does not assume any existing Pando or React knowledge. The techniques you'll learn in the tutorial are fundamental to building any React component and using Pando. Following this tutorial should help give you a deeper understanding of Pando.",source:"@site/versioned_docs/version-0.4.1/learn/get-started/quick-start/tutorial-star-rating.mdx",sourceDirName:"learn/get-started/quick-start",slug:"/learn/get-started/quick-start/tutorial-star-rating",permalink:"/docs/learn/get-started/quick-start/tutorial-star-rating",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/versioned_docs/version-0.4.1/learn/get-started/quick-start/tutorial-star-rating.mdx",tags:[{label:"star rating",permalink:"/docs/tags/star-rating"},{label:"how to",permalink:"/docs/tags/how-to"},{label:"developer",permalink:"/docs/tags/developer"}],version:"0.4.1",lastUpdatedBy:"Casey Baggz",sidebarPosition:2,frontMatter:{sidebar_position:2,tags:["star rating","how to","developer"],title:"Tutorial: StarRating Component"},sidebar:"learn",previous:{title:"Quick Start",permalink:"/docs/learn/get-started/quick-start/"},next:{title:"Design Patterns",permalink:"/docs/learn/learn-pando/design-patterns/"}},p={},d=[{value:"What are you building?",id:"what-are-you-building",level:3},{value:"Setup your environment",id:"setup-your-environment",level:2},{value:"Deconstructing the design",id:"deconstructing-the-design",level:2},{value:"Add the Pando CSS Setup",id:"add-the-pando-css-setup",level:2},{value:"Installing Pando",id:"installing-pando",level:2},{value:"Building the Grid",id:"building-the-grid",level:2},{value:"Adding the IconButton",id:"adding-the-iconbutton",level:2},{value:"Adding the Icons",id:"adding-the-icons",level:2},{value:"Creating a rating Array",id:"creating-a-rating-array",level:2},{value:"Add the filled props",id:"add-the-filled-props",level:2},{value:"Add the remaining props",id:"add-the-remaining-props",level:2},{value:"Where to go from here",id:"where-to-go-from-here",level:2}],c={toc:d};function g(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You will build a small Star Rating system during this tutorial. This tutorial does not assume any existing Pando or React knowledge. The techniques you'll learn in the tutorial are fundamental to building any React component and using Pando. Following this tutorial should help give you a deeper understanding of Pando."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This tutorial is designed for people who prefer to ",(0,o.kt)("strong",{parentName:"p"},"learn by doing")," and want to quickly try making something tangible.")),(0,o.kt)("h3",{id:"what-are-you-building"},"What are you building?"),(0,o.kt)("p",null,"In this tutorial, you'll build a StarRating component with Pando Headless-styles and React."),(0,o.kt)("p",null,"You can see what it will look like when you're finished here:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function StarRating(props) {\n  // Change the 0 to any number 1 - 5 to see stars filled\n  const rating = props.rating || 0\n  const ratingList = new Array(5).fill('')\n\n  return (\n    <ul {...getGridProps({ cols: 12, gap: 6 })}>\n      {ratingList.map((_, idx) => (\n        <li key={`rating-${idx}`} {...getGridItemProps({ colSpan: 1 })}>\n          <button\n            {...getIconButtonProps({ usage: 'text' }).button}\n            onClick={props.onClick}\n          >\n            {rating >= idx + 1 ? (\n              <StarFilledIcon {...getIconProps()} />\n            ) : (\n              <StarIcon {...getIconProps()} />\n            )}\n          </button>\n        </li>\n      ))}\n    </ul>\n  )\n}\n")),(0,o.kt)("p",null,"There are a few important patterns that we are executing here, but the most important one we want to point out from the start is that we are creating a ",(0,o.kt)("a",{parentName:"p",href:"https://www.patterns.dev/posts/presentational-container-pattern/"},"presentational component"),"."),(0,o.kt)("p",null,"By allowing this component to have the single responsibility of ",(0,o.kt)("em",{parentName:"p"},"only")," displaying the status, we help reduce the risks of bugs and allow this component to be more reusable throughout the life span of the code base."),(0,o.kt)("admonition",{title:"Clean Code Practices",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"When building components, remember that they are just functions, so you should approach them with the same clean code standards - having a single responsibility.")),(0,o.kt)("h2",{id:"setup-your-environment"},"Setup your environment"),(0,o.kt)("p",null,"We recommend creating a sandbox via ",(0,o.kt)("a",{parentName:"p",href:"https://codesandbox.io/"},"CodeSandbox")," so you can dive as deep as you need with access to a full project environment (HTML, CSS, etc.)."),(0,o.kt)("p",null,"If you are using CodeSandbox, create a new Sanbox with React or React/Typescript if you prefer a typed environment."),(0,o.kt)("p",null,"All of our libraries are built with Typescript, so we ship type helpers if you ever need them."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You can also follow this tutorial using your local development environment. To do so, create a new project using one of your favorite scaffolding tools: ",(0,o.kt)("a",{parentName:"p",href:"https://vitejs.dev/"},"ViteJS")," and ",(0,o.kt)("a",{parentName:"p",href:"https://create-react-app.dev/"},"Create React App")," are great starting points.")),(0,o.kt)("h2",{id:"deconstructing-the-design"},"Deconstructing the design"),(0,o.kt)("p",null,"Normally, when you start building a component, you start with the design file. In ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/thinking-in-react.html#gatsby-focus-wrapper"},"Thinking in React"),", we learn how to divide each part of a design into single responsibility sections that will in turn become components."),(0,o.kt)("p",null,"Our StarRating design looks like there are 3 different parts:"),(0,o.kt)("ul",{className:"ul-list"},(0,o.kt)("li",{className:"ul-list-item"},"Wrapper, which is a ",(0,o.kt)("strong",null,"list")," of stars using a"," ",(0,o.kt)("strong",null,"grid")," layout."),(0,o.kt)("li",{className:"ul-list-item"},"Each ",(0,o.kt)("strong",null,"list item")," should be actionable via a click, so they should be ",(0,o.kt)("strong",null,"buttons"),"."),(0,o.kt)("li",{className:"ul-list-item"},"Each button will display either a filled or empty ",(0,o.kt)("strong",null,"icon"),".")),(0,o.kt)("p",null,"This means that the parent component should be responsible for fetching the data and the StarRating only responsible for displaying that data (presentational)."),(0,o.kt)("h2",{id:"add-the-pando-css-setup"},"Add the Pando CSS Setup"),(0,o.kt)("p",null,"In order to use Pando, we first need to install it! Open the ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," in your project and add the following to the bottom of the ",(0,o.kt)("inlineCode",{parentName:"p"},"head")," section:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'showLineNumbers title="Add to head section of index.html"',showLineNumbers:!0,title:'"Add',to:!0,head:!0,section:!0,of:!0,'index.html"':!0},'<link\n  rel="preload"\n  href="https://fonts.pluralsight.com/ps-tt-commons/v1/ps-tt-commons-variable-roman.woff2"\n  as="font"\n  type="font/woff2"\n  crossorigin\n/>\n<link\n  rel="stylesheet"\n  href="https://cdn.jsdelivr.net/npm/@pluralsight/design-tokens@0.4.1/fonts.css"\n/>\n<link\n  rel="stylesheet"\n  href="https://cdn.jsdelivr.net/npm/@pluralsight/design-tokens@0.4.1/npm/normalize/normalize.css"\n/>\n')),(0,o.kt)("p",null,"This adds the fonts, themes, and CSS resets Pando relies on."),(0,o.kt)("p",null,"Next, make sure you don't have any initial CSS being used. If you have content in a CSS file being imported into your ",(0,o.kt)("inlineCode",{parentName:"p"},"App")," file, go ahead and remove the import so we can start fresh."),(0,o.kt)("p",null,"At this point, you should see the background color and typography change to use the Pluralsight Commons font and styles."),(0,o.kt)("h2",{id:"installing-pando"},"Installing Pando"),(0,o.kt)("p",null,"Now that we have the CSS reset in place, we are ready to install Pando into our project. For this tutorial, we only need the Headless-styles and Icons packages."),(0,o.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @pluralsight/{headless-styles,icons}\n"))),(0,o.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @pluralsight/{headless-styles,icons}\n"))),(0,o.kt)(i.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @pluralsight/{headless-styles,icons}\n")))),(0,o.kt)("p",null,"Once the packages are installed, we are ready to build!"),(0,o.kt)("h2",{id:"building-the-grid"},"Building the Grid"),(0,o.kt)("p",null,"In your project, let's create a new file called ",(0,o.kt)("inlineCode",{parentName:"p"},"StarRating"),". Inside that file, we will create the initial component and include the grid layout using the Pando Grid API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'showLineNumbers title="Copy and paste this into StarRating.jsx"',showLineNumbers:!0,title:'"Copy',and:!0,paste:!0,this:!0,into:!0,'StarRating.jsx"':!0},"import { getGridProps, getGridItemProps } from '@pluralsight/headless-styles'\n\nexport function StarRating() {\n  return (\n    <ul {...getGridProps({ cols: 12, gap: 6 })}>\n      <li {...getGridItemProps({ colSpan: 1 })}>Star</li>\n    </ul>\n  )\n}\n")),(0,o.kt)("p",null,"On line 1 we import the Pando Grid APIs and on line 3 create our StarRating component. On lines 5 and 6 we use the Grid Layout APIs via Object Spreading."),(0,o.kt)("p",null,"We are specifically using ",(0,o.kt)("inlineCode",{parentName:"p"},"ul")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"li")," elements because with Pando, we focus on using ",(0,o.kt)("a",{parentName:"p",href:"https://web.dev/learn/html/semantic-html/"},"Semantic HTML")," so that our components are naturally accessbile. \ud83c\udf89"),(0,o.kt)("p",null,"With Headless-styles there is no reason to use anything outside of plain React JSX, which helps simplify development and can dramatically improve performance."),(0,o.kt)("p",null,"Your app should now look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function StarRating() {\n  return (\n    <ul {...getGridProps({ cols: 12, gap: 6 })}>\n      <li {...getGridItemProps({ colSpan: 1 })}>Star</li>\n    </ul>\n  )\n}\n")),(0,o.kt)("h2",{id:"adding-the-iconbutton"},"Adding the IconButton"),(0,o.kt)("p",null,"In Pando, there are different types of Button APIs for accessbility reasons. Not only does Headless-styles add styling, it also adds all the accessbility properties you need to make your app 100% accessbile! \ud83c\udf89"),(0,o.kt)("p",null,"Because we need a ",(0,o.kt)("inlineCode",{parentName:"p"},"button")," element that only displays an Icon, we should use the IconButton API."),(0,o.kt)("p",null,"Add the following to your code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff",metastring:'showLineNumbers title="Add the IconButton API to StarRating.jsx"',showLineNumbers:!0,title:'"Add',the:!0,IconButton:!0,API:!0,to:!0,'StarRating.jsx"':!0},"import {\n  getGridProps,\n  getGridItemProps,\n+ getIconButtonProps\n} from '@pluralsight/headless-styles'\n\nexport function StarRating() {\n+  const { button, iconOptions } = getIconButtonProps({\n+    ariaLabel: 'Star rating',\n+    usage: 'text',\n+  })\n\n  return (\n    <ul {...getGridProps({ cols: 12, gap: 6 })}>\n      <li {...getGridItemProps({ colSpan: 1 })}>\n+       <button {...button}>Star</button>\n      </li>\n    </ul>\n  )\n}\n")),(0,o.kt)("p",null,"With the IconButton API, we are using the ",(0,o.kt)("inlineCode",{parentName:"p"},"ariaLabel")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"usage")," options. ",(0,o.kt)("inlineCode",{parentName:"p"},"ariaLabel")," sets the ",(0,o.kt)("inlineCode",{parentName:"p"},"aria-label")," attribute on the ",(0,o.kt)("inlineCode",{parentName:"p"},"button")," element and ",(0,o.kt)("inlineCode",{parentName:"p"},"usage"),' tells the API to style the component like a "text" button.'),(0,o.kt)("p",null,"Your result should now look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function StarRating() {\n  const { button, iconOptions } = getIconButtonProps({\n    ariaLabel: 'Star rating',\n    usage: 'text',\n  })\n\n  return (\n    <ul {...getGridProps({ cols: 12, gap: 6 })}>\n      <li {...getGridItemProps({ colSpan: 1 })}>\n        <button {...button}>Star</button>\n      </li>\n    </ul>\n  )\n}\n")),(0,o.kt)("h2",{id:"adding-the-icons"},"Adding the Icons"),(0,o.kt)("p",null,"Now that we have the foundation created, let's add the final missing UI piece: Icons. Add the new Icons to your file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff",metastring:'showLineNumbers title="Add the StarIcon and StarFilled icons to the StarRating.js file."',showLineNumbers:!0,title:'"Add',the:!0,StarIcon:!0,and:!0,StarFilled:!0,icons:!0,to:!0,"StarRating.js":!0,'file."':!0},"import {\n  getGridProps,\n  getGridItemProps,\n  getIconButtonProps,\n+ getIconProps\n} from '@pluralsight/headless-styles'\n+ import { StarIcon, StarFilledIcon } from '@pluralsight/icons'\n\nexport function StarRating() {\n  const { button, iconOptions } = getIconButtonProps({\n    ariaLabel: 'Star rating',\n    usage: 'text',\n  })\n\n  return (\n    <ul {...getGridProps({ cols: 12, gap: 6 })}>\n      <li {...getGridItemProps({ colSpan: 1 })}>\n        <button {...button}>\n+         <StarIcon {...getIconProps(iconOptions)} />\n        </button>\n      </li>\n    </ul>\n  )\n}\n")),(0,o.kt)("p",null,"Now that we are using multiple Headless-styles APIs, we can see that some work together, like the IconButton API, which provides the options you need for the Icon API."),(0,o.kt)("p",null,"Headless-styles was built from the start to be compound, so they can be combined and used in whichever combination you need (just like Lego blocks)."),(0,o.kt)("p",null,"Your result should now look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function StarRating() {\n  const { button, iconOptions } = getIconButtonProps({\n    ariaLabel: 'Star rating',\n    usage: 'text',\n  })\n\n  return (\n    <ul {...getGridProps({ cols: 12, gap: 6 })}>\n      <li {...getGridItemProps({ colSpan: 1 })}>\n        <button {...button}>\n          <StarIcon {...getIconProps(iconOptions)} />\n        </button>\n      </li>\n    </ul>\n  )\n}\n")),(0,o.kt)("p",null,"At this point, we have the UI ready for the logic, so let's add that in now!"),(0,o.kt)("admonition",{title:"Dive Deeper",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Want to create a more performant pattern? Go ahead and create a new component in the StarRating file called ",(0,o.kt)("inlineCode",{parentName:"p"},"StarButton")," and move the button contents into that! Now you have more single responsibility components!")),(0,o.kt)("h2",{id:"creating-a-rating-array"},"Creating a rating Array"),(0,o.kt)("p",null,"Now that we have the foundational UI setup, let's start adding the logic to our component. To do this, we are going to create a dynamic Array and fill its contents with an empty String so React can successfully loop through it."),(0,o.kt)("p",null,"Update your code with the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff",metastring:'showLineNumbers title="Add the array logic to StarRating.jsx"',showLineNumbers:!0,title:'"Add',the:!0,array:!0,logic:!0,to:!0,'StarRating.jsx"':!0},"import {\n  getGridProps,\n  getGridItemProps,\n  getIconButtonProps,\n  getIconProps\n} from '@pluralsight/headless-styles'\nimport { StarIcon, StarFilledIcon } from '@pluralsight/icons'\n\nexport function StarButton() {\n  const { button, iconOptions } = getIconButtonProps({\n    ariaLabel: 'Star rating',\n    usage: 'text',\n  })\n\n  return (\n    <button {...button}>\n      <StarIcon {...getIconProps(iconOptions)} />\n    </button>\n  )\n}\n\nexport function StarRating() {\n+ const ratingList = new Array(5).fill('')\n\n  return (\n    <ul {...getGridProps({ cols: 12, gap: 6 })}>\n+      {ratingList.map((_, idx) => (\n+        <li key={`rating-${idx}`} {...getGridItemProps({ colSpan: 1 })}>\n+          <StarButton />\n+        </li>\n+      ))}\n    </ul>\n  )\n}\n")),(0,o.kt)("p",null,"Here you can see we are doing a few things. First, we split our button jsx into its own component called ",(0,o.kt)("inlineCode",{parentName:"p"},"StarButton")," to keep our StarRating responsibility to just showing the list."),(0,o.kt)("p",null,"Next, we created a new constant called ",(0,o.kt)("inlineCode",{parentName:"p"},"rating list")," which creates a new Array of 5 items which are filled with an empty String. The fill method is important and is required by React in order to be able to map through a dynamic list."),(0,o.kt)("p",null,"At this point, your result should look like this (unfortunately, we are limited in our live sandbox and have to provide a single component \ud83d\ude2d)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function StarRating() {\n  const ratingList = new Array(5).fill('')\n\n  return (\n    <ul {...getGridProps({ cols: 12, gap: 6 })}>\n      {ratingList.map((_, idx) => (\n        <li key={`rating-${idx}`} {...getGridItemProps({ colSpan: 1 })}>\n          <button {...getIconButtonProps({ usage: 'text' }).button}>\n            <StarIcon {...getIconProps()} />\n          </button>\n        </li>\n      ))}\n    </ul>\n  )\n}\n")),(0,o.kt)("h2",{id:"add-the-filled-props"},"Add the filled props"),(0,o.kt)("p",null,"We are on the final step now of adding our props to each component! This is the easy part. We know that at the end of the day, the rating is just a number and in order to update the number and display the new rating, we need to click the button; that leaves us with three properties."),(0,o.kt)("p",null,"In order to keep it simple, let's start by adding the properties responsible for showing a StarFilledIcon based on the rating given to StarRating."),(0,o.kt)("p",null,"Add the following to your code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff",metastring:'showLineNumbers title="Add the filled props to StarRating and StarButton."',showLineNumbers:!0,title:'"Add',the:!0,filled:!0,props:!0,to:!0,StarRating:!0,and:!0,'StarButton."':!0},"import {\n  getGridProps,\n  getGridItemProps,\n  getIconButtonProps,\n  getIconProps\n} from '@pluralsight/headless-styles'\nimport { StarIcon, StarFilledIcon } from '@pluralsight/icons'\n\n+ export function StarButton(props) {\n  const { button, iconOptions } = getIconButtonProps({\n    ariaLabel: 'Star rating',\n    usage: 'text',\n  })\n\n  return (\n    <button {...button}>\n+      {\n+        props.filled ?\n+          <StarFilledIcon {...getIconProps(iconOptions)} /> :\n+          <StarIcon {...getIconProps(iconOptions)} />\n+      }\n    </button>\n  )\n}\n\n+ export function StarRating(props) {\n+ const rating = props.rating || 0\n const ratingList = new Array(5).fill('')\n\n  return (\n    <ul {...getGridProps({ cols: 12, gap: 6 })}>\n      {ratingList.map((_, idx) => (\n        <li key={`rating-${idx}`} {...getGridItemProps({ colSpan: 1 })}>\n+          <StarButton filled={rating >= idx + 1} />\n        </li>\n      ))}\n    </ul>\n  )\n}\n")),(0,o.kt)("p",null,"Here we have added the ",(0,o.kt)("inlineCode",{parentName:"p"},"props")," parameter to both StarRating and StarButton and included our new ",(0,o.kt)("inlineCode",{parentName:"p"},"filled")," prop with the logic that will determine its state."),(0,o.kt)("p",null,"The result should look similar to below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function StarRating(props) {\n  // Change the 0 to any number 1 - 5 to see stars filled\n  const rating = props.rating || 0\n  const ratingList = new Array(5).fill('')\n\n  return (\n    <ul {...getGridProps({ cols: 12, gap: 6 })}>\n      {ratingList.map((_, idx) => (\n        <li key={`rating-${idx}`} {...getGridItemProps({ colSpan: 1 })}>\n          <button\n            {...getIconButtonProps({ usage: 'text' }).button}\n            onClick={props.onClick}\n          >\n            {rating >= idx + 1 ? (\n              <StarFilledIcon {...getIconProps()} />\n            ) : (\n              <StarIcon {...getIconProps()} />\n            )}\n          </button>\n        </li>\n      ))}\n    </ul>\n  )\n}\n")),(0,o.kt)("h2",{id:"add-the-remaining-props"},"Add the remaining props"),(0,o.kt)("p",null,"At this point, we are home free and ready to add the remaining props we need to create a fully functioning StarRating component. Let's udpate our code to include a click handler and even add in some advanced React to make sure StarRating only updates if the rating property changes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff",metastring:'showLineNumbers title="Add the remaining props to StarRating."',showLineNumbers:!0,title:'"Add',the:!0,remaining:!0,props:!0,to:!0,'StarRating."':!0},"+ import { memo } from 'react'\nimport {\n  getGridProps,\n  getGridItemProps,\n  getIconButtonProps,\n  getIconProps\n} from '@pluralsight/headless-styles'\nimport { StarIcon, StarFilledIcon } from '@pluralsight/icons'\n\nexport function StarButton(props) {\n  const { button, iconOptions } = getIconButtonProps({\n    ariaLabel: 'Star rating',\n    usage: 'text',\n  })\n\n  return (\n+    <button {...button} onClick={props.onClick}>\n     {\n       props.filled ?\n         <StarFilledIcon {...getIconProps(iconOptions)} /> :\n         <StarIcon {...getIconProps(iconOptions)} />\n     }\n    </button>\n  )\n}\n\n+ function StarRating(props) {\n  const rating = props.rating || 0\n  const ratingList = new Array(5).fill('')\n\n  return (\n    <ul {...getGridProps({ cols: 12, gap: 6 })}>\n      {ratingList.map((_, idx) => (\n        <li key={`rating-${idx}`} {...getGridItemProps({ colSpan: 1 })}>\n+         <StarButton filled={rating >= idx + 1} onClick={props.onClick} />\n       </li>\n      ))}\n    </ul>\n  )\n}\n\n+ export default memo(StarRating)\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You only need to use ",(0,o.kt)("inlineCode",{parentName:"p"},"memo")," on components that accept properties ",(0,o.kt)("strong",{parentName:"p"},"outside of primitive types"),". We are using it on StarRating because it will accept a Function for the click event.")),(0,o.kt)("h2",{id:"where-to-go-from-here"},"Where to go from here"),(0,o.kt)("p",null,"This was a very brief introduction to building a component using Pando. You can start a Pando project right now or ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/components/admonition"},"dive deeper on all the syntax")," used in this tutorial."))}g.isMDXComponent=!0}}]);