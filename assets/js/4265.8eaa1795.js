/*! For license information please see 4265.8eaa1795.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4265],{18745:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(60953),o=t(59005),a=t(45721),i=t(88795),c=t(58618),l=t(89749),u="anchorWithStickyNavbar_hnQX",s="anchorWithHideOnScrollNavbar_bcO6",f=["as","id"];function d(e){var n=e.as,t=e.id,d=(0,o.Z)(e,f),p=(0,l.L)().navbar.hideOnScroll;return"h1"!==n&&t?a.createElement(n,(0,r.Z)({},d,{className:(0,i.Z)("anchor",p?s:u),id:t}),d.children,a.createElement("a",{className:"hash-link",href:"#"+t,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):a.createElement(n,(0,r.Z)({},d,{id:void 0}))}},20181:function(e,n,t){t.d(n,{Z:function(){return R}});var r=t(45721),o=t(70167),a=t(60953),i=t(59005),c=t(12339),l=["mdxType","originalType"];var u=t(48921);var s=t(53434);var f=t(88795),d=t(76190),p=t(9888),m="details_o2yl",y="isBrowser_xp4X",h="collapsibleContent_NVxL",v=["summary","children"];function b(e){return!!e&&("SUMMARY"===e.tagName||b(e.parentElement))}function _(e,n){return!!e&&(e===n||_(e.parentElement,n))}function g(e){var n=e.summary,t=e.children,o=(0,i.Z)(e,v),c=(0,d.Z)(),l=(0,r.useRef)(null),u=(0,p.u)({initialState:!o.open}),s=u.collapsed,g=u.setCollapsed,w=(0,r.useState)(o.open),E=w[0],O=w[1];return r.createElement("details",(0,a.Z)({},o,{ref:l,open:E,"data-collapsed":s,className:(0,f.Z)(m,c&&y,o.className),onMouseDown:function(e){b(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var n=e.target;b(n)&&_(n,l.current)&&(e.preventDefault(),s?(g(!1),O(!0)):g(!0))}}),null!=n?n:r.createElement("summary",null,"Details"),r.createElement(p.z,{lazy:!1,collapsed:s,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){g(e),O(!e)}},r.createElement("div",{className:h},t)))}var w="details_M2W2";function E(e){var n=Object.assign({},e);return r.createElement(g,(0,a.Z)({},n,{className:(0,f.Z)("alert alert--info",w,n.className)}))}var O=t(18745);function S(e){return r.createElement(O.Z,e)}var C="containsTaskList_Jg1k";var P="img_RIpp";var I=t(11593),T=t(58618),j="admonition_Us13",z="admonitionHeading_ZDTE",x="admonitionIcon_ef9e",Z="admonitionContent_JQVi";var N={note:{infimaClassName:"secondary",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:r.createElement(T.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:r.createElement(T.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:r.createElement(T.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:r.createElement(T.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:r.createElement(T.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},k={secondary:"note",important:"info",success:"tip",warning:"danger"};function A(e){var n,t=function(e){var n=r.Children.toArray(e),t=n.find((function(e){var n;return r.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(n=e.props)?void 0:n.mdxType)})),o=r.createElement(r.Fragment,null,n.filter((function(e){return e!==t})));return{mdxAdmonitionTitle:t,rest:o}}(e.children),o=t.mdxAdmonitionTitle,a=t.rest;return Object.assign({},e,{title:null!=(n=e.title)?n:o,children:a})}var D={head:function(e){var n=r.Children.map(e.children,(function(e){return r.isValidElement(e)?function(e){var n;if(null!=(n=e.props)&&n.mdxType&&e.props.originalType){var t=e.props,o=(t.mdxType,t.originalType,(0,i.Z)(t,l));return r.createElement(e.props.originalType,o)}return e}(e):e}));return r.createElement(c.Z,e,n)},code:function(e){var n=["a","b","big","i","span","em","strong","sup","sub","small"];return r.Children.toArray(e.children).every((function(e){var t;return"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&n.includes(null==(t=e.props)?void 0:t.mdxType)}))?r.createElement("code",e):r.createElement(u.Z,e)},a:function(e){return r.createElement(s.Z,e)},pre:function(e){var n;return r.createElement(u.Z,(0,r.isValidElement)(e.children)&&"code"===(null==(n=e.children.props)?void 0:n.originalType)?e.children.props:Object.assign({},e))},details:function(e){var n=r.Children.toArray(e.children),t=n.find((function(e){var n;return r.isValidElement(e)&&"summary"===(null==(n=e.props)?void 0:n.mdxType)})),o=r.createElement(r.Fragment,null,n.filter((function(e){return e!==t})));return r.createElement(E,(0,a.Z)({},e,{summary:t}),o)},ul:function(e){return r.createElement("ul",(0,a.Z)({},e,{className:(n=e.className,(0,f.Z)(n,(null==n?void 0:n.includes("contains-task-list"))&&C))}));var n},img:function(e){return r.createElement("img",(0,a.Z)({loading:"lazy"},e,{className:(n=e.className,(0,f.Z)(n,P))}));var n},h1:function(e){return r.createElement(S,(0,a.Z)({as:"h1"},e))},h2:function(e){return r.createElement(S,(0,a.Z)({as:"h2"},e))},h3:function(e){return r.createElement(S,(0,a.Z)({as:"h3"},e))},h4:function(e){return r.createElement(S,(0,a.Z)({as:"h4"},e))},h5:function(e){return r.createElement(S,(0,a.Z)({as:"h5"},e))},h6:function(e){return r.createElement(S,(0,a.Z)({as:"h6"},e))},admonition:function(e){var n=A(e),t=n.children,o=n.type,a=n.title,i=n.icon,c=function(e){var n,t=null!=(n=k[e])?n:e;return N[t]||(console.warn('No admonition config found for admonition type "'+t+'". Using Info as fallback.'),N.info)}(o),l=null!=a?a:c.label,u=c.iconComponent,s=null!=i?i:r.createElement(u,null);return r.createElement("div",{className:(0,f.Z)(I.k.common.admonition,I.k.common.admonitionType(e.type),"alert","alert--"+c.infimaClassName,j)},r.createElement("div",{className:z},r.createElement("span",{className:x},s),l),r.createElement("div",{className:Z},t))}};function R(e){var n=e.children;return r.createElement(o.Zo,{components:D},n)}},4716:function(e,n,t){t.r(n),n.default={psIcon:"psIcon_g8Pu",sIconSize:"sIconSize_FYB5 psIcon_g8Pu",mIconSize:"mIconSize_BW26 psIcon_g8Pu",lIconSize:"lIconSize__pmJ psIcon_g8Pu",customIconSize:"customIconSize_ocRT psIcon_g8Pu"}},71651:function(e,n,t){n.L=void 0;const r=t(6495),o=t(3097),a=t(49065),i=r.__importDefault(t(4716));n.L=function(e){const n=(0,a.getDefaultIconOptions)(e),{size:t,tech:r,...c}=n,l=(0,a.getA11yIconProps)(c),{sizeClass:u}=(0,a.createIconSelectorClasses)(t,n.customSize);return{...l,...(0,o.createClassProp)(r,{svelteClass:`ps-icon psIcon ${u}`,defaultClass:`ps-icon ${i.default[u]}`}),...e?.customSize&&{height:e.customSize,width:e.customSize}}}},49065:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getA11yIconProps=n.createIconSelectorClasses=n.getDefaultIconOptions=n.defaultIconOptions=void 0,n.defaultIconOptions={ariaHidden:!1,ariaLabel:"icon",size:"m",tech:""},n.getDefaultIconOptions=function(e){return{ariaHidden:e?.ariaHidden??n.defaultIconOptions.ariaHidden,ariaLabel:e?.ariaLabel??n.defaultIconOptions.ariaLabel,customSize:e?.customSize,size:e?.size??n.defaultIconOptions.size,tech:e?.tech??n.defaultIconOptions.tech}},n.createIconSelectorClasses=function(e,n){return{sizeClass:n?"customIconSize":`${e}IconSize`}},n.getA11yIconProps=function(e){return{"aria-label":e?.ariaLabel,"aria-hidden":e?.ariaHidden,role:"img"}}},3097:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),n.transformProperty=n.transformCasing=n.getSyntaxType=n.transformStyles=n.createJSProps=n.createClassProp=n.createCSSObj=n.createSvelteObj=n.createA11yProps=void 0;const r=t(6495).__importDefault(t(98118));const o={htmlFor:"for"};function a(e=""){return{class:e}}function i(e,n){return{className:e,...n}}n.createA11yProps=function(e){const{disabled:n,invalid:t,required:r,readOnly:o}=e;return{"aria-invalid":t,"data-disabled":n,"data-invalid":t,"data-readonly":o,"data-required":r,disabled:n,readOnly:o,required:r}},n.createSvelteObj=a,n.createCSSObj=i,n.createClassProp=function(e,n){return"svelte"===e?a(n.svelteClass):i(n.defaultClass)},n.createJSProps=function(e,n,t){return{cssProps:e,styles:n,...t}},n.transformStyles=function(e){return Object.keys(e).reduce(((n,t)=>{const o=function(e){return e.includes("&")?e:`${(0,r.default)(e)}:`}(t);return`\n      ${n.trim()}\n      ${o} ${a=e[t],"string"==typeof a?`${a.trim()};`:`{${Object.keys(a).reduce(((e,n)=>`\n      ${e.trim()}\n      ${(0,r.default)(n)}: ${a[n]};\n    `),"")}}`}\n    `;var a}),"").trim().replace(/^ {2,12}/gm,"")},n.getSyntaxType=function(e){return"svelte"===e?"html":"jsx"},n.transformCasing=function(e,n){return"html"===n?(0,r.default)(e):e},n.transformProperty=function(e,n){const t=o[e]??"";return function(e){return"svelte"===e}(n)?t:e}},98118:function(e,n){var t=/[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g,r=/-[a-z\u00E0-\u00F6\u00F8-\u00FE]/g;e.exports=n=function(e){return e.replace(t,(function(e){return"-"+e.toLowerCase()}))},n.reverse=function(e){return e.replace(r,(function(e){return e.slice(1).toUpperCase()}))}},35657:function(e,n,t){var r=t(45721),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(e,n,t){var r,a={},u=null,s=null;for(r in void 0!==t&&(u=""+t),void 0!==n.key&&(u=""+n.key),void 0!==n.ref&&(s=n.ref),n)i.call(n,r)&&!l.hasOwnProperty(r)&&(a[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===a[r]&&(a[r]=n[r]);return{$$typeof:o,type:e,key:u,ref:s,props:a,_owner:c.current}}n.Fragment=a,n.jsx=u,n.jsxs=u},86521:function(e,n,t){e.exports=t(35657)},6495:function(e,n,t){t.r(n),t.d(n,{__assign:function(){return a},__asyncDelegator:function(){return w},__asyncGenerator:function(){return g},__asyncValues:function(){return E},__await:function(){return _},__awaiter:function(){return s},__classPrivateFieldGet:function(){return I},__classPrivateFieldIn:function(){return j},__classPrivateFieldSet:function(){return T},__createBinding:function(){return d},__decorate:function(){return c},__exportStar:function(){return p},__extends:function(){return o},__generator:function(){return f},__importDefault:function(){return P},__importStar:function(){return C},__makeTemplateObject:function(){return O},__metadata:function(){return u},__param:function(){return l},__read:function(){return y},__rest:function(){return i},__spread:function(){return h},__spreadArray:function(){return b},__spreadArrays:function(){return v},__values:function(){return m}});var r=function(e,n){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},r(e,n)};function o(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function t(){this.constructor=e}r(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}var a=function(){return a=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},a.apply(this,arguments)};function i(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t}function c(e,n,t,r){var o,a=arguments.length,i=a<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,n,t,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(n,t,i):o(n,t))||i);return a>3&&i&&Object.defineProperty(n,t,i),i}function l(e,n){return function(t,r){n(t,r,e)}}function u(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)}function s(e,n,t,r){return new(t||(t=Promise))((function(o,a){function i(e){try{l(r.next(e))}catch(n){a(n)}}function c(e){try{l(r.throw(e))}catch(n){a(n)}}function l(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,c)}l((r=r.apply(e,n||[])).next())}))}function f(e,n){var t,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=n.call(e,i)}catch(c){a=[6,c],r=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}var d=Object.create?function(e,n,t,r){void 0===r&&(r=t);var o=Object.getOwnPropertyDescriptor(n,t);o&&!("get"in o?!n.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return n[t]}}),Object.defineProperty(e,r,o)}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]};function p(e,n){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(n,t)||d(n,e,t)}function m(e){var n="function"==typeof Symbol&&Symbol.iterator,t=n&&e[n],r=0;if(t)return t.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function y(e,n){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,a=t.call(e),i=[];try{for(;(void 0===n||n-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(c){o={error:c}}finally{try{r&&!r.done&&(t=a.return)&&t.call(a)}finally{if(o)throw o.error}}return i}function h(){for(var e=[],n=0;n<arguments.length;n++)e=e.concat(y(arguments[n]));return e}function v(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;var r=Array(e),o=0;for(n=0;n<t;n++)for(var a=arguments[n],i=0,c=a.length;i<c;i++,o++)r[o]=a[i];return r}function b(e,n,t){if(t||2===arguments.length)for(var r,o=0,a=n.length;o<a;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))}function _(e){return this instanceof _?(this.v=e,this):new _(e)}function g(e,n,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=t.apply(e,n||[]),a=[];return r={},i("next"),i("throw"),i("return"),r[Symbol.asyncIterator]=function(){return this},r;function i(e){o[e]&&(r[e]=function(n){return new Promise((function(t,r){a.push([e,n,t,r])>1||c(e,n)}))})}function c(e,n){try{(t=o[e](n)).value instanceof _?Promise.resolve(t.value.v).then(l,u):s(a[0][2],t)}catch(r){s(a[0][3],r)}var t}function l(e){c("next",e)}function u(e){c("throw",e)}function s(e,n){e(n),a.shift(),a.length&&c(a[0][0],a[0][1])}}function w(e){var n,t;return n={},r("next"),r("throw",(function(e){throw e})),r("return"),n[Symbol.iterator]=function(){return this},n;function r(r,o){n[r]=e[r]?function(n){return(t=!t)?{value:_(e[r](n)),done:"return"===r}:o?o(n):n}:o}}function E(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,t=e[Symbol.asyncIterator];return t?t.call(e):(e=m(e),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(t){n[t]=e[t]&&function(n){return new Promise((function(r,o){(function(e,n,t,r){Promise.resolve(r).then((function(n){e({value:n,done:t})}),n)})(r,o,(n=e[t](n)).done,n.value)}))}}}function O(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}var S=Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n};function C(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&d(n,e,t);return S(n,e),n}function P(e){return e&&e.__esModule?e:{default:e}}function I(e,n,t,r){if("a"===t&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof n?e!==n||!r:!n.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===t?r:"a"===t?r.call(e):r?r.value:n.get(e)}function T(e,n,t,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof n?e!==n||!o:!n.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(e,t):o?o.value=t:n.set(e,t),t}function j(e,n){if(null===n||"object"!=typeof n&&"function"!=typeof n)throw new TypeError("Cannot use 'in' operator on non-object");return"function"==typeof e?n===e:e.has(n)}}}]);