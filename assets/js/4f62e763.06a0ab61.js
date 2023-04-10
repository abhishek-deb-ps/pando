"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9165],{70167:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(45721);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8042:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var a=n(81648),r=(n(45721),n(70167));const o={sidebar_position:1,tags:["concepts","developer experience","design patterns"],title:"Quick Start"},i=void 0,s={unversionedId:"learn/get-started/quick-start/index",id:"learn/get-started/quick-start/index",title:"Quick Start",description:"Welcome to the Pando documentation! This page will give you an introduction, from a design and developer experience, to the majority of the Pando concepts that you will use on a daily basis.",source:"@site/docs/learn/get-started/quick-start/index.mdx",sourceDirName:"learn/get-started/quick-start",slug:"/learn/get-started/quick-start/",permalink:"/docs/next/learn/get-started/quick-start/",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/learn/get-started/quick-start/index.mdx",tags:[{label:"concepts",permalink:"/docs/next/tags/concepts"},{label:"developer experience",permalink:"/docs/next/tags/developer-experience"},{label:"design patterns",permalink:"/docs/next/tags/design-patterns"}],version:"current",lastUpdatedBy:"Casey Baggz",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["concepts","developer experience","design patterns"],title:"Quick Start"},sidebar:"learn",previous:{title:"Using the Figma UI Kit",permalink:"/docs/next/learn/get-started/installation/using-figma-kit"},next:{title:"Tutorial: StarRating Component",permalink:"/docs/next/learn/get-started/quick-start/tutorial-star-rating"}},l={},c=[{value:"Using Themes",id:"using-themes",level:2},{value:"Adding styles and accessbility",id:"adding-styles-and-accessbility",level:2},{value:"Using Icons",id:"using-icons",level:2},{value:"Advanced React Logic",id:"advanced-react-logic",level:2},{value:"Next Steps",id:"next-steps",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Welcome to the Pando documentation! This page will give you an introduction, from a design and developer experience, to the majority of the Pando concepts that you will use on a daily basis."),(0,r.kt)("admonition",{title:"You will learn",type:"note"},(0,r.kt)("ul",{className:"ul-list"},(0,r.kt)("li",{className:"ul-list-item"},"How to use themes"),(0,r.kt)("li",{className:"ul-list-item"},"How to add styling and accessbility via Headless-styles"),(0,r.kt)("li",{className:"ul-list-item"},"Using Icons"),(0,r.kt)("li",{className:"ul-list-item"},"How to add advanced logic with React Utils"))),(0,r.kt)("h2",{id:"using-themes"},"Using Themes"),(0,r.kt)("p",null,"Pando ships with theme support using design-tokens that utilize a semantic naming convention. This means that our themes are created to scale and be easily used for both the design and developer experience."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# "usage" is the only required property\n\nps-[sentiment?]-[usage]-[prominence?]-[interaction?]\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Sentiment"),' - "default", "action", "info", "success", "warning", "danger"'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Usage (required)"),' - "background", "border", "navigation", "surface", "text"'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Prominence"),' - "default", "weak", "medium", "strong", "inverse"'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Interaction"),' - "default", "hover", "active", "visited"')),(0,r.kt)("p",null,"What this looks like in terms of an actual token can be seen in an example of some of the tokens:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Example of tokens (not actual values)"',title:'"Example',of:!0,tokens:!0,"(not":!0,actual:!0,'values)"':!0},":root {\n  --ps-border-weak: #000;\n  --ps-text: #000;\n  --ps-action-text: #fff;\n  --ps-action-background-hover: #fff1;\n}\n")),(0,r.kt)("h2",{id:"adding-styles-and-accessbility"},"Adding styles and accessbility"),(0,r.kt)("p",null,"In Pando, our Headless-styles library is responsible for styling components and making sure they are accessbile. We do this by providing a library of Javascript helper functions that deliver the component props you need so you can spread them onto your component."),(0,r.kt)("p",null,"It looks something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Button() {\n  return <button {...getButtonProps().button}>Action</button>\n}\n")),(0,r.kt)("p",null,"This approach allows Pando to increase the performance of your application by relying on the use of Semantic HTML and plain JSX."),(0,r.kt)("h2",{id:"using-icons"},"Using Icons"),(0,r.kt)("p",null,"Icons help enhance our pages and features. Our Icons library was created to provide icons for different solutions, including: React, Svelte, and SVG icons."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function IconButton() {\n  const { button, iconOptions } = getIconButtonProps()\n  return (\n    <button {...button}>\n      <PlaceholderIcon {...getIconProps(iconOptions)} />\n    </button>\n  )\n}\n")),(0,r.kt)("p",null,"Here you can see how some of our Headless-styles API work together to help the developer experience!"),(0,r.kt)("h2",{id:"advanced-react-logic"},"Advanced React Logic"),(0,r.kt)("p",null,"When building more complex components, you may need some additional logic. In these scenarios, our React-utils library provides custom hooks and helpers to advance your components in a scalable way:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"showLineNumbers",showLineNumbers:!0},"import { getButtonProps } from '@pluralsight/headless-styles'\nimport { useTheme } from '@pluralsight/react-utils'\n\nfunction ThemeSwitcher() {\n  const { theme, updateTheme } = useTheme()\n\n  function handleToggleTheme() {\n    const newTheme = theme === 'light' ? 'dark' : 'light'\n    updateTheme(newTheme)\n  }\n\n  return (\n    <div>\n      <button {...getButtonProps().button} onClick={handleToggleTheme}>\n        Toggle Theme\n      </button>\n\n      <code>Theme: {theme} </code>\n    </div>\n  )\n}\n")),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("p",null,"Now that you know the basics of using Pando, check out a ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/learn/get-started/quick-start/tutorial-star-rating"},"Tutorial")," to put them into practice."))}p.isMDXComponent=!0}}]);