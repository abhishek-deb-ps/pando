"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8837],{70167:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(45721);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96122:function(e,t,n){const a=n(86521);t.Z=function(e){return(0,a.jsx)("svg",{"aria-label":"NPM logo",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,a.jsx)("path",{d:"M12 12.444h-1.111v-2.222H12v2.222ZM22 8v6.667H12v1.11H7.556v-1.11H2V8h20ZM7.556 9.111H3.11v4.445h2.222v-3.334h1.111v3.334h1.112V9.11Zm5.555 0H8.667v5.556h2.222v-1.111h2.222V9.11Zm7.778 0h-6.667v4.445h2.222v-3.334h1.112v3.334h1.11v-3.334h1.112v3.334h1.11V9.11Z"})})}},81536:function(e,t,n){const a=n(86521);t.Z=function(e){return(0,a.jsx)("svg",{"aria-label":"external link",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,a.jsx)("path",{d:"M14.5 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3.09l-8.476 8.476a.5.5 0 0 0 0 .708l.702.702a.5.5 0 0 0 .708 0L19 6.41V9.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-6ZM18 18H6V6h3.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V18Z"})})}},42242:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(45721),r=n(88795),o="tabItem_kWFq";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},99862:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(60953),r=n(45721),o=n(88795),i=n(76190),l=n(15043),s=n(8873),c=n(11113),u="tabList_LErV",p="tabItem_NVZ2";function d(e){var t,n,i=e.lazy,d=e.block,m=e.defaultValue,h=e.values,v=e.groupId,f=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,l.l)(b,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),x=w.tabGroupChoices,I=w.setTabGroupChoices,T=(0,r.useState)(y),N=T[0],O=T[1],j=[],Z=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var E=x[v];null!=E&&E!==N&&b.some((function(e){return e.value===E}))&&O(E)}var L=function(e){var t=e.currentTarget,n=j.indexOf(t),a=b[n].value;a!==N&&(Z(t),O(a),null!=v&&I(v,String(a)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=j.indexOf(e.currentTarget)+1;n=null!=(a=j[r])?a:j[0];break;case"ArrowLeft":var o,i=j.indexOf(e.currentTarget)-1;n=null!=(o=j[i])?o:j[j.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},f)},b.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return j.push(e)},onKeyDown:P,onFocus:L,onClick:L},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(g.filter((function(e){return e.props.value===N}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function m(e){var t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},35053:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(45721),r=n(57465),o=n(71651),i=n(24217),l=n(96122);function s(e){var t=e.href,n=(0,r.j)({href:t}),s=(0,o.L)(n.iconOptions),c=t.includes("github")?i.Z:l.Z;return a.createElement("a",n.link,a.createElement(c,s),e.children)}},12394:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return m},default:function(){return b},frontMatter:function(){return d},metadata:function(){return h},toc:function(){return f}});var a=n(60953),r=n(59005),o=(n(45721),n(70167)),i=n(99862),l=n(42242),s=n(71651),c=n(81536),u=n(35053),p=["components"],d={sidebar_position:1,tags:["Development","Usage","Intro","Icons"]},m="Intro",h={unversionedId:"development/icons/intro",id:"version-0.1.0-alpha/development/icons/intro",title:"Intro",description:"The icons package provides icons ready to insert into your application as",source:"@site/versioned_docs/version-0.1.0-alpha/development/icons/intro.mdx",sourceDirName:"development/icons",slug:"/development/icons/intro",permalink:"/docs/development/icons/intro",draft:!1,editUrl:"https://github.com/pluralsight/tva/edit/main/website/versioned_docs/version-0.1.0-alpha/development/icons/intro.mdx",tags:[{label:"Development",permalink:"/docs/tags/development"},{label:"Usage",permalink:"/docs/tags/usage"},{label:"Intro",permalink:"/docs/tags/intro"},{label:"Icons",permalink:"/docs/tags/icons"}],version:"0.1.0-alpha",lastUpdatedBy:"Tom Pietrosanti",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["Development","Usage","Intro","Icons"]},sidebar:"development",previous:{title:"Typography",permalink:"/docs/development/headless-styles/Typography"},next:{title:"Usage",permalink:"/docs/development/icons/usage"}},v={},f=[{value:"Installation",id:"installation",level:2},{value:"SVG vs. icon font",id:"svg-vs-icon-font",level:2},{value:"Icon labels and accessibility",id:"icon-labels-and-accessibility",level:2},{value:"Bundlers without tree shaking",id:"bundlers-without-tree-shaking",level:2},{value:"React",id:"react",level:3},{value:"Svelte",id:"svelte",level:3},{value:"SVG",id:"svg",level:3}],g={toc:f};function b(e){var t=e.components,n=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"intro"},"Intro"),(0,o.kt)("strong",null,(0,o.kt)("p",{class:"page-subheadline",markdown:"1"},"The icons package provides icons ready to insert into your application as inline SVG elements.")),(0,o.kt)(u.Z,{href:"https://www.npmjs.com/package/@pluralsight/icons",mdxType:"ViewSourceLink"},"@pluralsight/icons"),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"To use Icons install the package with your preferred manager."),(0,o.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @pluralsight/icons\n"))),(0,o.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @pluralsight/icons\n")))),(0,o.kt)("h2",{id:"svg-vs-icon-font"},"SVG vs. icon font"),(0,o.kt)("p",null,"After a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pluralsight/tva/discussions/70"},"thorough and unbiased comparison of the performance and quality of icon fonts vs inline SVG")," we determined that the most performant approach will be to use inline SVG elements. In the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pluralsight/tva-rfcs/blob/main/text/0000-icons.md"},"RFC for the Icons package")," we continued to refine our approach for delivering and rendering icons on the web."),(0,o.kt)("h2",{id:"icon-labels-and-accessibility"},"Icon labels and accessibility"),(0,o.kt)("p",null,"Icons are used to convey meaning at a glance, therefore it is important that their usage is consistent and that any meaning conveyed visually is also available to those without vision."),(0,o.kt)("p",null,"An ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label"},"accessible label"),' is included in each SVG.\nIn most cases the label describes the image (e.g., "arrow pointing left"), in others what it represents (e.g., "exit fullscreen").'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"By default, the label will be read by screen readers.")," The label may be overridden or disabled when a different label is needed or provided as part of a higher-order component (such as a button)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<svg\n  aria-label="arrow pointing right"\n  viewBox="0 -2 18 18"\n  role="img"\n  fill="currentColor"\n  class="ps-icon-svg"\n>\n  <path d="M9.864 13.01a.5.5 0 0 1 0-.708L14.166 8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5\n  6h13.668L9.864 1.696a.5.5 0 0 1 0-.708l.707-.707a.5.5 0 0 1 .707 0l6.364 6.364a.5.5\n  0 0 1 0 .707l-6.364 6.364a.5.5 0 0 1-.707 0l-.707-.707Z"/>\n</svg>\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If an icon provides meaning visually, be sure to provide the same meaning in the icon's ",(0,o.kt)("inlineCode",{parentName:"p"},"aria-label"),".\nFor example, the icon in this link:\n",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/WAI/tutorials/images/functional/"},"W3C: Functional Images ",(0,o.kt)(c.Z,{className:(0,s.L)().className,"aria-label":"opens in new window",mdxType:"ExternalLinkIcon"})),"\nvisually indicates that the link opens in a new window.\nIn this case we should add ",(0,o.kt)("inlineCode",{parentName:"p"},'aria-label="opens in new window"')," to the icon.")),(0,o.kt)("h2",{id:"bundlers-without-tree-shaking"},"Bundlers without tree shaking"),(0,o.kt)("p",null,"Tree shaking of @pluralsight/icons works out of the box in modern frameworks.\nIf you're using ES6 modules and a bundler that supports tree shaking you can safely use named imports and still get an optimized bundle size automatically:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { BookmarkIcon, MenuIcon } from '@pluralsight/icons'\n")),(0,o.kt)("p",null,"Without tree shaking, you can reduce your bundle size by directly importing the icons you need with a pathed import.\nTo do this, append the framework and category to the path."),(0,o.kt)("h3",{id:"react"},"React"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import PlayIcon from '@pluralsight/icons/react/audio-video/PlayIcon'\n")),(0,o.kt)("h3",{id:"svelte"},"Svelte"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import PlayIcon from '@pluralsight/icons/svelte/audio-video/PlayIcon'\n")),(0,o.kt)("h3",{id:"svg"},"SVG"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import playSvg from '@pluralsight/icons/svg/audio-video/play.svg'\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Some systems may not support the package.json ",(0,o.kt)("inlineCode",{parentName:"p"},"exports")," field.\nIf the pathed imports are not working, you may need to reference the file directly.\nTo do this, prepend ",(0,o.kt)("inlineCode",{parentName:"p"},"build/")," to the path, and, in some cases, append the file extension."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"import PlayIcon from '@pluralsight/icons/build/svelte/audio-video/PlayIcon.svelte'"))))}b.isMDXComponent=!0},95419:function(e,t,n){n.r(t),t.default={textLinkBase:"textLinkBase_oJHd"}},55334:function(e,t){function n(e){return/^https?:\/\//.test(e)}function a(e){return{ariaHidden:!1,ariaLabel:"(opens in a new window)",customSize:t.textLinkIconSize,tech:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.createTextLinkProps=t.getDefaultTextLinkOptions=t.defaultTextLinkOptions=t.textLinkIconSize=void 0,t.textLinkIconSize="1em",t.defaultTextLinkOptions={href:"",tech:""},t.getDefaultTextLinkOptions=function(e){return{href:e?.href??t.defaultTextLinkOptions.href,tech:e?.tech??t.defaultTextLinkOptions.tech}},t.createTextLinkProps=function(e,t){const r=function(e){return n(e)?{rel:"noopener external",target:"_blank"}:{}}(e);return{link:{href:e,...r},...n(e)&&{iconOptions:a(t)}}}},57465:function(e,t,n){t.j=void 0;const a=n(6495),r=n(3097),o=n(55334),i=a.__importDefault(n(95419));t.j=function(e){const t=(0,o.getDefaultTextLinkOptions)(e),n=(0,o.createTextLinkProps)(t.href,t.tech);return{...n,link:{...n.link,...(0,r.createClassProp)(t.tech,{defaultClass:`ps-text-link ${i.default.textLinkBase}`,svelteClass:"textLinkBase"})}}}}}]);