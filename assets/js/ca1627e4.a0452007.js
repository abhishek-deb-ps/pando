"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8038],{70167:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var r=n(45721);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,g=c["".concat(i,".").concat(u)]||c[u]||d[u]||l;return n?r.createElement(g,o(o({ref:t},m),{},{components:n})):r.createElement(g,o({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},24217:function(e,t,n){const r=n(86521);t.Z=function(e){return(0,r.jsx)("svg",{"aria-label":"github logo",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12a10 10 0 0 0-20 0Z"})})}},96122:function(e,t,n){const r=n(86521);t.Z=function(e){return(0,r.jsx)("svg",{"aria-label":"NPM logo",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,r.jsx)("path",{d:"M12 12.444h-1.111v-2.222H12v2.222ZM22 8v6.667H12v1.11H7.556v-1.11H2V8h20ZM7.556 9.111H3.11v4.445h2.222v-3.334h1.111v3.334h1.112V9.11Zm5.555 0H8.667v5.556h2.222v-1.111h2.222V9.11Zm7.778 0h-6.667v4.445h2.222v-3.334h1.112v3.334h1.11v-3.334h1.112v3.334h1.11V9.11Z"})})}},60853:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(45721),a={base:"base_M3w8",column:"column_mb9C base_M3w8",grid:"grid_EiLr base_M3w8"},l={alignItems:"center",column:!1,gridCols:0,justifyContent:"space-between",textAlign:"center",type:"base"};function o(e){var t,n;void 0===e&&(e=l);var o=null!=(t=e.type)?t:l.type,s=e.gridColumns?"repeat("+e.gridColumns+", minmax(auto, max-content))":"initial",i={alignItems:e.alignItems,gridTemplateColumns:s,justifyContent:e.justifyContent,textAlign:null!=(n=e.textAlign)?n:"center"};return r.createElement("div",{className:a[o],style:i},e.children)}},79043:function(e,t,n){var r=n(60953),a=n(59005),l=n(45721),o=n(95971),s=n(60853),i=["value"],p=["value"],m="basic";t.Z=function(){var e=(0,l.useState)(""),t=e[0],n=e[1],d=(0,o.Np)().fieldOptions,c=(0,o.HI)(Object.assign({},d,{htmlFor:m,value:"Email alerts"})),u=c.value,g=(0,a.Z)(c,i),h=(0,o.b7)({id:"email:help",message:"We will never share your email."}),f=h.value,v=(0,a.Z)(h,p),k=(0,o.TC)(Object.assign({},d,{describedBy:v.id,id:m,name:"basic-example",placeholder:"email@example.com",type:"email",value:t}));return l.createElement(s.Z,{alignItems:"flex-start",textAlign:"start"},l.createElement("div",k.inputWrapper,l.createElement("label",g,u),l.createElement("input",(0,r.Z)({},k.input,{onChange:function(e){n(e.target.value)}})),l.createElement("small",v,f)))}},69961:function(e,t,n){var r=n(60953),a=n(59005),l=n(45721),o=n(95971),s=n(60853),i=["value"];t.Z=function(){var e=(0,l.useState)(""),t=e[0],n=e[1],p=(0,o.Np)({invalid:!0}).fieldOptions,m=(0,o.HI)(Object.assign({},p,{htmlFor:"email",value:"Email alerts"})),d=m.value,c=(0,a.Z)(m,i),u=(0,o._l)(Object.assign({},p,{id:"email-address",message:"Email address is required."})),g=(0,o.TC)(Object.assign({},p,{describedBy:u.container.id,id:"email",name:"required",placeholder:"email@example.com",value:t}));return l.createElement(s.Z,{alignItems:"flex-start",textAlign:"start"},l.createElement("div",g.inputWrapper,l.createElement("label",c,d),l.createElement("input",(0,r.Z)({},g.input,{onChange:function(){n("")}})),l.createElement("div",u.container,l.createElement("small",u.message,u.message.value))))}},41810:function(e,t,n){var r=n(60953),a=n(45721),l=n(95971),o=n(60853),s=n(56502);t.Z=function(){var e=(0,a.useState)(null),t=e[0],n=e[1],i=(0,l.Np)({groupType:"radiogroup"}),p=i.control,m=i.fieldOptions;function d(e){n(e.target.value)}return a.createElement(o.Z,null,a.createElement("div",p,a.createElement(s.Z,(0,r.Z)({},m,{checked:"0"===t,htmlFor:"First",id:"first",label:"First",value:"0",onClick:d})),a.createElement(s.Z,(0,r.Z)({},m,{checked:"1"===t,htmlFor:"Second",id:"second",label:"Second",value:"1",onClick:d})),a.createElement(s.Z,(0,r.Z)({},m,{checked:"2"===t,htmlFor:"Third",id:"third",label:"Third",value:"2",onClick:d}))))}},41504:function(e,t,n){var r=n(60953),a=n(59005),l=n(45721),o=n(95971),s=n(60853),i=["value"],p="required";t.Z=function(){var e=(0,l.useState)(""),t=e[0],n=e[1],m=(0,o.Np)({required:!0}).fieldOptions,d=(0,o.HI)(Object.assign({},m,{htmlFor:p,value:"Email alerts"})),c=d.value,u=(0,a.Z)(d,i),g=(0,o.TC)(Object.assign({},m,{id:p,name:"required-example",placeholder:"email@example.com",type:"email",value:t}));return l.createElement(s.Z,null,l.createElement("div",g.inputWrapper,l.createElement("label",(0,r.Z)({},u,{style:{marginInlineEnd:"initial",width:"100%"}}),c),l.createElement("input",(0,r.Z)({},g.input,{onChange:function(e){n(e.target.value)}}))))}},26652:function(e,t,n){n.d(t,{Z:function(){return O}});var r=n(60953),a=n(59005),l=n(45721),o=n(95971),s="button_sEkW",i="chakra_ow8e",p="chakraCircle_c8Xz",m="list_rMMG",d="listItem_bLPI",c="icon_nzIq",u="svelteBackground_c8BA",g="svelteOutline_tdvb",h=["className"],f=l.createElement("svg",{"aria-hidden":"true",className:c,focusable:"false",viewBox:"0 0 24 24"},l.createElement("path",{fillRule:"evenodd",d:"m14.266 4.311.94.342a.5.5 0 0 1 .299.641l-5.13 14.096a.5.5 0 0 1-.641.299l-.94-.343a.5.5 0 0 1-.299-.64l5.13-14.096a.5.5 0 0 1 .641-.299zm1.791 11.044.798.793a.5.5 0 0 0 .706-.002l3.788-3.802a.5.5 0 0 0 0-.707L17.56 7.853a.5.5 0 0 0-.706 0l-.796.794a.5.5 0 0 0 0 .708l2.642 2.639-2.644 2.654a.5.5 0 0 0 .001.707zm-8.706.793.797-.793a.5.5 0 0 0 .001-.707l-2.644-2.654 2.642-2.64a.5.5 0 0 0 0-.707l-.795-.794a.5.5 0 0 0-.707 0l-3.788 3.784a.5.5 0 0 0-.001.707l3.788 3.802a.5.5 0 0 0 .707.002z"})),v=l.createElement("svg",{"aria-hidden":"true",className:c,focusable:"false",viewBox:"0 0 1024 1024"},l.createElement("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"})),k=l.createElement("svg",{"aria-hidden":"true",className:""+c,fill:"none",focusable:"false",viewBox:"0 0 98.1 118",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{className:g,d:"M91.8 15.6C80.9-.1 59.2-4.7 43.6 5.2L16.1 22.8C8.6 27.5 3.4 35.2 1.9 43.9c-1.3 7.3-.2 14.8 3.3 21.3-2.4 3.6-4 7.6-4.7 11.8-1.6 8.9.5 18.1 5.7 25.4 11 15.7 32.6 20.3 48.2 10.4l27.5-17.5c7.5-4.7 12.7-12.4 14.2-21.1 1.3-7.3.2-14.8-3.3-21.3 2.4-3.6 4-7.6 4.7-11.8 1.7-9-.4-18.2-5.7-25.5"}),l.createElement("path",{className:u,d:"M40.9 103.9c-8.9 2.3-18.2-1.2-23.4-8.7-3.2-4.4-4.4-9.9-3.5-15.3.2-.9.4-1.7.6-2.6l.5-1.6 1.4 1c3.3 2.4 6.9 4.2 10.8 5.4l1 .3-.1 1c-.1 1.4.3 2.9 1.1 4.1 1.6 2.3 4.4 3.4 7.1 2.7.6-.2 1.2-.4 1.7-.7L65.5 72c1.4-.9 2.3-2.2 2.6-3.8.3-1.6-.1-3.3-1-4.6-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7l-10.5 6.7c-1.7 1.1-3.6 1.9-5.6 2.4-8.9 2.3-18.2-1.2-23.4-8.7-3.1-4.4-4.4-9.9-3.4-15.3.9-5.2 4.1-9.9 8.6-12.7l27.5-17.5c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.2.9-.4 1.7-.7 2.6l-.5 1.6-1.4-1c-3.3-2.4-6.9-4.2-10.8-5.4l-1-.3.1-1c.1-1.4-.3-2.9-1.1-4.1-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7L32.4 46.1c-1.4.9-2.3 2.2-2.6 3.8s.1 3.3 1 4.6c1.6 2.3 4.4 3.3 7.1 2.6.6-.2 1.2-.4 1.7-.7l10.5-6.7c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.9 5.2-4.1 9.9-8.6 12.7l-27.5 17.5c-1.7 1.1-3.6 1.9-5.6 2.5"}));var b={items:["source","styled","chakra","joy","svelte"],results:{source:{icon:f,id:"source",href:"",label:"Show full source"},styled:{icon:v,id:"styled",label:"View styled components \ud83d\udc85"},chakra:{icon:l.createElement("svg",{"aria-hidden":"true",className:c+" "+i,fill:"none",focusable:"false",viewBox:"0 0 582 582",xmlns:"http://www.w3.org/2000/svg"},l.createElement("rect",{className:p,width:"582",height:"582",rx:"291"}),l.createElement("path",{d:"M157.521 303.421L355.881 106.426C359.587 102.746 365.55 107.225 363.049 111.809L289.22 247.123C287.573 250.141 289.758 253.821 293.196 253.821H420.782C424.892 253.821 426.877 258.857 423.872 261.661L200.293 470.326C196.284 474.067 190.317 468.796 193.536 464.356L299.373 318.351C301.543 315.357 299.404 311.164 295.706 311.164H160.713C156.67 311.164 154.653 306.27 157.521 303.421Z"})),id:"chakra",label:"View Chakra"},joy:{icon:l.createElement("svg",{"aria-hidden":"true",className:c,fill:"none",focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 32"},l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z",fill:"#007FFF"})),id:"joy",label:"View MUI / Joy"},svelte:{icon:k,id:"svelte",label:"View Svelte"}}},N={size:"m",usage:"text"};function y(e){var t=b.results[e.techId],n=(0,o.Bb)(N).button.className,r="https://codesandbox.io/s/"+e.href+"?file=/src/App.tsx";return l.createElement("a",{"aria-label":t.label,className:n+" "+s,href:r,name:t.label,rel:"noopener noreferrer",target:"_blank",title:t.label},e.children)}function C(e){var t=e.techId,n=Object.assign({},(0,o.Bb)(N)).button,i=n.className,p=(0,a.Z)(n,h);return l.createElement("button",(0,r.Z)({className:i+" "+s,onClick:e.onToggleShow,title:b.results[t].label},p),l.createElement(P,{tabId:t}))}function P(e){return b.results[e.tabId].icon}function F(e){var t=e.techId;return l.createElement("li",{className:d},"source"===t?l.createElement(C,{onToggleShow:e.onToggleShow,techId:t}):l.createElement(y,{techId:t,href:e.sandboxList[t]},l.createElement(P,{tabId:t})))}function x(e){return l.createElement("ul",{className:m},b.items.map((function(t){return l.createElement(F,{key:t,onToggleShow:e.onToggleShow,sandboxList:e.sandboxList,techId:t})})))}function E(e){var t=(0,l.useState)(!1),n=t[0],r=t[1];return l.createElement("div",null,l.createElement(x,{onToggleShow:function(){r((function(e){return!e}))},sandboxList:e.sandboxList}),n?e.fullCode:e.children)}var O=(0,l.memo)(E)},56502:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(60953),a=n(59005),l=n(45721),o=n(95971),s=["onClick"],i=["value"],p=["checked"];function m(e){var t=e.onClick,n=(0,a.Z)(e,s),m=(0,o.Bl)(n),d=(0,o.HI)(Object.assign({},n,{value:e.label})),c=d.value,u=(0,a.Z)(d,i),g=m.input,h=g.checked,f=(0,a.Z)(g,p);return l.createElement("label",m.radioContainer,t&&l.createElement("input",(0,r.Z)({},f,{onChange:t,checked:h})),!t&&l.createElement("input",(0,r.Z)({},f,{defaultChecked:h})),l.createElement("span",m.radioControl),l.createElement("span",u,c))}},94880:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(45721),a=n(95971),l=n(24217),o=n(96122);function s(e){var t=e.href,n=(0,a.j8)({href:t}),s=(0,a.L1)(n.iconOptions),i=t.includes("github")?l.Z:o.Z;return r.createElement("a",n.link,r.createElement(i,s),e.children)}},51939:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return c},metadata:function(){return g},toc:function(){return f}});var r=n(60953),a=n(59005),l=(n(45721),n(70167)),o=n(79043),s=n(41810),i=n(69961),p=n(41504),m=n(94880),d=(n(26652),["components"]),c={tags:["Development","Packages","Components","Headless Styles","FormControl","FormLabel","ErrorMessage"]},u=void 0,g={unversionedId:"development/headless-styles/FormControl",id:"development/headless-styles/FormControl",title:"FormControl",description:"FormControl provides context such as invalid, disabled, required, and readOnly to form elements in addition to following the WAI specifications for forms.",source:"@site/docs/development/headless-styles/FormControl.mdx",sourceDirName:"development/headless-styles",slug:"/development/headless-styles/FormControl",permalink:"/docs/next/development/headless-styles/FormControl",draft:!1,editUrl:"https://github.com/pluralsight/tva/edit/main/website/docs/development/headless-styles/FormControl.mdx",tags:[{label:"Development",permalink:"/docs/next/tags/development"},{label:"Packages",permalink:"/docs/next/tags/packages"},{label:"Components",permalink:"/docs/next/tags/components"},{label:"Headless Styles",permalink:"/docs/next/tags/headless-styles"},{label:"FormControl",permalink:"/docs/next/tags/form-control"},{label:"FormLabel",permalink:"/docs/next/tags/form-label"},{label:"ErrorMessage",permalink:"/docs/next/tags/error-message"}],version:"current",lastUpdatedBy:"Brad Bice",frontMatter:{tags:["Development","Packages","Components","Headless Styles","FormControl","FormLabel","ErrorMessage"]},sidebar:"development",previous:{title:"Confirm Dialog",permalink:"/docs/next/development/headless-styles/ConfirmDialog"},next:{title:"Icon",permalink:"/docs/next/development/headless-styles/Icon"}},h={},f=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"BasicExample",id:"basicexample",level:3},{value:"Radio or checkbox group example",id:"radio-or-checkbox-group-example",level:3},{value:"Error messasge",id:"error-messasge",level:3},{value:"Help Text",id:"help-text",level:3},{value:"Making a field required",id:"making-a-field-required",level:3},{value:"Usage with Form Libraries",id:"usage-with-form-libraries",level:3},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:2},{value:"FormControlOptions",id:"formcontroloptions",level:3},{value:"FormLabelOptions",id:"formlabeloptions",level:3},{value:"FieldMessageOptions",id:"fieldmessageoptions",level:3},{value:"ErrorMessageOptions",id:"errormessageoptions",level:3},{value:"Props",id:"props",level:2},{value:"FormControlProps",id:"formcontrolprops",level:3},{value:"FormLabelProps",id:"formlabelprops",level:3},{value:"FieldMessageProps",id:"fieldmessageprops",level:3},{value:"ErrorMessageProps",id:"errormessageprops",level:3},{value:"JSFormControlProps",id:"jsformcontrolprops",level:3},{value:"JSFormLabelProps",id:"jsformlabelprops",level:3},{value:"JSFieldMessageProps",id:"jsfieldmessageprops",level:3},{value:"JSErrorMessageProps",id:"jserrormessageprops",level:3}],v={toc:f};function k(e){var t=e.components,n=(0,a.Z)(e,d);return(0,l.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"FormControl provides context such as ",(0,l.kt)("inlineCode",{parentName:"p"},"invalid"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"disabled"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"required"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"readOnly")," to form elements in addition to following the ",(0,l.kt)("a",{parentName:"p",href:"https://www.w3.org/WAI/tutorials/forms/"},"WAI specifications")," for forms."),(0,l.kt)(m.Z,{icon:"github",href:"https://github.com/pluralsight/tva/tree/main/packages/headless-styles/src/components/FormControl",mdxType:"ViewSourceLink"},"View source"),(0,l.kt)("h2",{id:"import"},"Import"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import {\n  getFormControlProps,\n  getFormLabelProps,\n  getFieldMessageProps,\n  getErrorMessageProps,\n} from '@pluralsight/headless-styles'\n")),(0,l.kt)("p",null,"Headless Styles exports two helpers for Form Control:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"getFormControlProps"),": The wrapper that provides context for all children"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"getFormLabelProps"),": The label of a form section. The usage is similar to ",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label"},"html label")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"getFieldMessageProps"),": The helper text that tells users more information about a form field."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"getErrorMessageProps"),": The message that shows up when an error occurs.")),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("h3",{id:"basicexample"},"BasicExample"),(0,l.kt)(o.Z,{mdxType:"BasicFormControl"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useState } from 'react'\nimport {\n  getFieldMessageProps,\n  getFormControlProps,\n  getFormLabelProps,\n  getInputProps,\n} from '@pluralsight/headless-styles'\n\nfunction BasicFormControl(props) {\n  const { formId, ...formProps } = props\n  const [email, setEmail] = useState('')\n  const { fieldOptions } = getFormControlProps(formProps)\n  const { value, ...labelProps } = getFormLabelProps({\n    ...fieldOptions,\n    htmlFor: formId,\n    value: 'Email alerts',\n  })\n  const { value: helpText, ...message } = getFieldMessageProps({\n    id: 'email:help',\n    message: 'We will never share your email'\n  })\n  const inputProps = getInputProps({\n    ...fieldOptions,\n    describedBy: message.id,\n    id: formId,\n    name: props.formName,\n    placeholder: 'email@example.com',\n    type: 'email',\n    value: email,\n  })\n\n  function handleChange(e) {\n    setEmail(e.target.value)\n  }\n\n  return (\n    <div {...inputProps.inputWrapper}>\n      <label\n        {...labelProps}\n        style={{\n          marginInlineEnd: 'initial',\n          width: '100%',\n        }}\n      >\n        {value}\n      </label>\n      <input {...inputProps.input} onChange={handleChange} />\n      <small {...message}>{helpText}</small>\n    </div>\n  )\n}\n")),(0,l.kt)("h3",{id:"radio-or-checkbox-group-example"},"Radio or checkbox group example"),(0,l.kt)(s.Z,{mdxType:"RadioGroup"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useState } from \'react\'\nimport { getFormControlProps } from \'@pluralsight/headless-styles\'\nimport Radio from \'./Radio\'\n\nfunction BasicRadio() {\n  const [checked, setChecked] = useState(null)\n  const { control, fieldOptions } = getFormControlProps({\n    groupType: \'radiogroup\',\n  })\n\n  function handleCheck(e) {\n    setChecked(e.target.value)\n  }\n\n  return (\n    <div>\n      <div {...control}>\n        <Radio\n          {...fieldOptions}\n          checked={checked === \'0\'}\n          htmlFor="First"\n          id="first"\n          label="First"\n          value="0"\n          onClick={handleCheck}\n        />\n        <Radio\n          {...fieldOptions}\n          checked={checked === \'1\'}\n          htmlFor="Second"\n          id="second"\n          label="Second"\n          value="1"\n          onClick={handleCheck}\n        />\n        <Radio\n          {...fieldOptions}\n          checked={checked === \'2\'}\n          htmlFor="Third"\n          id="third"\n          label="Third"\n          value="2"\n          onClick={handleCheck}\n        />\n      </div>\n    </div>\n  )\n}\n')),(0,l.kt)("h3",{id:"error-messasge"},"Error messasge"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"getFormErrorMessageProps")," will return a styled error message when the ",(0,l.kt)("inlineCode",{parentName:"p"},"invalid")," option is true (this should come from the ",(0,l.kt)("inlineCode",{parentName:"p"},"getFormControlProps.fieldOptions")," property)."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"When using Error messages for ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/development/headless-styles/Input"},"Input")," fields, it is recommended to pass the ",(0,l.kt)("inlineCode",{parentName:"p"},"ErrorMessageOptions.id")," to the ",(0,l.kt)("inlineCode",{parentName:"p"},"InputOptions.describedBy")," value in order to allow your error message to be fully accessble to all users.")),(0,l.kt)(i.Z,{mdxType:"ErrorFormControl"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Make your error messages accessible by passing the same value to the InputOptions.describedBy"',title:'"Make',your:!0,error:!0,messages:!0,accessible:!0,by:!0,passing:!0,the:!0,same:!0,value:!0,to:!0,'InputOptions.describedBy"':!0},"import { useState } from 'react'\nimport {\n  getFormControlProps,\n  getFormLabelProps,\n  getErrorMessageProps,\n  getInputProps,\n} from '@pluralsight/headless-styles'\n\nfunction BasicFormControl(props) {\n  const { id, ...formOptions } = props\n  const [email, setEmail] = useState('')\n  const { fieldOptions } = getFormControlProps(formOptions)\n  const { value, ...labelProps } = getFormLabelProps({\n    ...fieldOptions,\n    htmlFor: 'email',\n    value: 'Email alerts',\n  })\n  const error = getErrorMessageProps({\n    ...fieldOptions,\n    // highlight-next-line\n    id: 'bad-email-alert',\n    message: 'Email address is required.',\n  })\n  const inputProps = getInputProps({\n    ...fieldOptions,\n    // highlight-next-line\n    describedBy: error.container.id,\n    id,\n    name: 'email_alerts',\n    placeholder: 'email@example.com',\n    value: email,\n  })\n\n  function handleChange(e) {\n    setEmail(e.target.value)\n  }\n\n  return (\n    <div {...inputProps.inputWrapper}>\n      <label\n        {...labelProps}\n        style={{\n          marginInlineEnd: 'initial',\n          width: '100%',\n        }}\n      >\n        {value}\n      </label>\n      <input {...inputProps.input} onChange={handleChange} />\n      {fieldOptions.invalid && (\n        <div {...error.container}>\n          <small {...error.message}>{error.message.value}</small>\n        </div>\n      )}\n    </div>\n  )\n}\n")),(0,l.kt)("h3",{id:"help-text"},"Help Text"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"getFieldMessageProps")," will return a styled help text message for your input field."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"When using help text messages for ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/development/headless-styles/Input"},"Input")," fields, it is recommended to pass the ",(0,l.kt)("inlineCode",{parentName:"p"},"FieldMessageOptions.id")," to the ",(0,l.kt)("inlineCode",{parentName:"p"},"InputOptions.describedBy")," value in order to allow your error message to be fully accessble to all users.")),(0,l.kt)(o.Z,{mdxType:"BasicFormControl"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Make your help messages accessible by passing the same value to the InputOptions.describedBy"',title:'"Make',your:!0,help:!0,messages:!0,accessible:!0,by:!0,passing:!0,the:!0,same:!0,value:!0,to:!0,'InputOptions.describedBy"':!0},"import { useState } from 'react'\nimport {\n  getFieldMessageProps,\n  getFormControlProps,\n  getFormLabelProps,\n  getInputProps,\n} from '@pluralsight/headless-styles'\n\nfunction BasicFormControl(props) {\n  const { id, ...formOptions } = props\n  const [email, setEmail] = useState('')\n  const { fieldOptions } = getFormControlProps(formOptions)\n  const { value, ...labelProps } = getFormLabelProps({\n    ...fieldOptions,\n    htmlFor: 'email',\n    value: 'Email alerts',\n  })\n  const { value: helpText, ...message } = getFieldMessageProps({\n    // highlight-next-line\n    id: 'email:help',\n    message: 'We will never share your email.',\n  })\n  const inputProps = getInputProps({\n    ...fieldOptions,\n    // highlight-next-line\n    describedBy: message.id,\n    id,\n    name: 'email_alerts',\n    placeholder: 'email@example.com',\n    value: email,\n  })\n\n  function handleChange(e) {\n    setEmail(e.target.value)\n  }\n\n  return (\n    <div {...inputProps.inputWrapper}>\n      <label\n        {...labelProps}\n        style={{\n          marginInlineEnd: 'initial',\n          width: '100%',\n        }}\n      >\n        {value}\n      </label>\n      <input {...inputProps.input} onChange={handleChange} />\n      <small {...message}>{helpText}</small>\n    </div>\n  )\n}\n")),(0,l.kt)("h3",{id:"making-a-field-required"},"Making a field required"),(0,l.kt)("p",null,"When you pass ",(0,l.kt)("inlineCode",{parentName:"p"},"required")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"getFormControlProps")," and use the ",(0,l.kt)("inlineCode",{parentName:"p"},"fieldOptions.required")," as an option to the ",(0,l.kt)("inlineCode",{parentName:"p"},"getFormLabelProps"),", the ",(0,l.kt)("inlineCode",{parentName:"p"},"getFormLabel"),' will add a "(required)" at the end of the label value.'),(0,l.kt)(p.Z,{mdxType:"RequiredFormControl"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useState } from 'react'\nimport {\n  getFormControlProps,\n  getFormLabelProps,\n  getInputProps,\n} from '@pluralsight/headless-styles'\n\nfunction BasicFormControl(props) {\n  const { formId, ...formProps } = props\n  const [email, setEmail] = useState('')\n  const { fieldOptions } = getFormControlProps({\n    ...formProps,\n    required: true,\n  })\n  const { value, ...labelProps } = getFormLabelProps({\n    ...fieldOptions,\n    htmlFor: formId,\n    value: 'Email alerts',\n  })\n  const inputProps = getInputProps({\n    ...fieldOptions,\n    id: formId,\n    name: props.formName,\n    placeholder: 'email@example.com',\n    type: 'email',\n    value: email,\n  })\n\n  function handleChange(e) {\n    setEmail(e.target.value)\n  }\n\n  return (\n    <div {...inputProps.inputWrapper}>\n      <label\n        {...labelProps}\n        style={{\n          marginInlineEnd: 'initial',\n          width: '100%',\n        }}\n      >\n        {value}\n      </label>\n      <input {...inputProps.input} onChange={handleChange} />\n    </div>\n  )\n}\n")),(0,l.kt)("h3",{id:"usage-with-form-libraries"},"Usage with Form Libraries"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://formik.org/"},"Formik")," is just one example of how managing forms can be very easy. You can combine most form libraries with our API."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"function validateName(value) {\n  let error\n  if (!value) {\n    error = 'Name is required'\n  } else if (value.toLowerCase() !== 'naruto') {\n    error = \"Jeez! You're not a fan \ud83d\ude31\"\n  }\n  return error\n}\n\nfunction NameField(props) {\n  const { field, form } = props\n  const { control, fieldOptions } = getFieldControlProps({\n    invalid: form.errors.name && form.touched.name,\n  })\n  const { invalid } = fieldOptions\n  const { a11yProps, value } = getFieldLabelProps({\n    htmlFor: 'name',\n    invalid,\n    value: props.value,\n  })\n\n  return (\n    <div {...control}>\n      <label {...a11yProps}>{value}</label>\n      <input value=\"TBD\" />\n      <FormErrorMessage>{form.errors.name}</FormErrorMessage>\n    </div>\n  )\n}\n\nfunction FormikExample() {\n  return (\n    <Formik\n      initialValues={{ name: 'Sasuke' }}\n      onSubmit={(values, actions) => {\n        setTimeout(() => {\n          alert(JSON.stringify(values, null, 2))\n          actions.setSubmitting(false)\n        }, 1000)\n      }}\n    >\n      {(props) => (\n        <Form>\n          <Field name=\"name\" validate={validateName}>\n            {(props) => <NameField {...props} />}\n          </Field>\n          <button {...getButtonProps()} type=\"submit\">\n            Submit\n          </button>\n        </Form>\n      )}\n    </Formik>\n  )\n}\n")),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Argument Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"getFormControlProps")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"options"),": ",(0,l.kt)("a",{parentName:"td",href:"#formcontroloptions"},"FormControlOptions")),(0,l.kt)("td",{parentName:"tr",align:null},"groupType: ",(0,l.kt)("inlineCode",{parentName:"td"},"default"),", ",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"false")," for all fieldOptions"),(0,l.kt)("td",{parentName:"tr",align:null},"Get form control styles & field states for CSS usage.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"getFormLabelProps")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"options"),": ",(0,l.kt)("a",{parentName:"td",href:"#formlabeloptions"},"FormLabelOptions")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"htmlFor"),": empty String"),(0,l.kt)("td",{parentName:"tr",align:null},"Get form label styles and a11y props for CSS usage.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"getFieldMessageProps")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"options"),": ",(0,l.kt)("a",{parentName:"td",href:"#fieldmessageoptions"},"FieldMessageOptions")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"id"),": empty String",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"message"),": empty String"),(0,l.kt)("td",{parentName:"tr",align:null},"Get help message styles and content for CSS usage.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"getErrorMessageProps")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"options"),": ",(0,l.kt)("a",{parentName:"td",href:"#errormessageoptions"},"ErrorMessageOptions")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"invalid"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"Get error message styles and content for CSS usage.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"getJSFormControlProps")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"options"),": ",(0,l.kt)("a",{parentName:"td",href:"#formcontroloptions"},"FormControlOptions")),(0,l.kt)("td",{parentName:"tr",align:null},"same as CSS API"),(0,l.kt)("td",{parentName:"tr",align:null},"CSS-in-JS API")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"getJSFormLabelProps")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"options"),": ",(0,l.kt)("a",{parentName:"td",href:"#formlabeloptions"},"FormLabelOptions")),(0,l.kt)("td",{parentName:"tr",align:null},"same as CSS API"),(0,l.kt)("td",{parentName:"tr",align:null},"CSS-in-JS API")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"getJSFieldMessageProps")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"options"),": ",(0,l.kt)("a",{parentName:"td",href:"#fieldmessageoptions"},"FieldMessageOptions")),(0,l.kt)("td",{parentName:"tr",align:null},"same as CSS API"),(0,l.kt)("td",{parentName:"tr",align:null},"CSS-in-JS API")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"getJSErrorMessageProps")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"options"),": ",(0,l.kt)("a",{parentName:"td",href:"#errormessageoptions"},"ErrorMessageOptions")),(0,l.kt)("td",{parentName:"tr",align:null},"same as CSS API"),(0,l.kt)("td",{parentName:"tr",align:null},"CSS-in-JS API")))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"formcontroloptions"},"FormControlOptions"),(0,l.kt)("p",null,"This interface is available as an ",(0,l.kt)("inlineCode",{parentName:"p"},"import")," for use."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"interface FormControlOptions {\n  disabled?: boolean\n  groupType?: 'default' | 'radiogroup'\n  invalid?: boolean\n  readOnly?: boolean\n  required?: boolean\n  tech?: 'svelte'\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Import example"',title:'"Import','example"':!0},"import type { FormControlOptions } from '@pluralsight/headless-styles/types'\n")),(0,l.kt)("h3",{id:"formlabeloptions"},"FormLabelOptions"),(0,l.kt)("p",null,"This interface is available as an ",(0,l.kt)("inlineCode",{parentName:"p"},"import")," for use."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"interface FormLabelOptions {\n  htmlFor: string\n  required?: boolean\n  tech?: 'svelte'\n  value: string\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Import example"',title:'"Import','example"':!0},"import type { FormLabelOptions } from '@pluralsight/headless-styles/types'\n")),(0,l.kt)("h3",{id:"fieldmessageoptions"},"FieldMessageOptions"),(0,l.kt)("p",null,"This interface is available as an ",(0,l.kt)("inlineCode",{parentName:"p"},"import")," for use."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"interface FieldMessageOptions {\n  id: string\n  message: string\n  tech?: 'svelte'\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Import example"',title:'"Import','example"':!0},"import type { FieldMessageOptions } from '@pluralsight/headless-styles/types'\n")),(0,l.kt)("h3",{id:"errormessageoptions"},"ErrorMessageOptions"),(0,l.kt)("p",null,"This interface is available as an ",(0,l.kt)("inlineCode",{parentName:"p"},"import")," for use."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ErrorMessageOptions {\n  id: string\n  invalid: boolean\n  message: string\n  tech?: 'svelte'\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Import example"',title:'"Import','example"':!0},"import type { ErrorMessageOptions } from '@pluralsight/headless-styles/types'\n")),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("h3",{id:"formcontrolprops"},"FormControlProps"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"interface FormControlProps {\n  control: {\n    'data-disabled': boolean\n    role: string\n    className: string\n  }\n  fieldOptions: {\n    disabled: boolean\n    invalid: boolean\n    readOnly: boolean\n    required: boolean\n  }\n}\n")),(0,l.kt)("h3",{id:"formlabelprops"},"FormLabelProps"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"interface FormLabelProps {\n  htmlFor: string\n  className: string\n  value: string\n}\n")),(0,l.kt)("h3",{id:"fieldmessageprops"},"FieldMessageProps"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"interface FieldMessageProps {\n  className: string\n  id: string\n  value: string\n}\n")),(0,l.kt)("h3",{id:"errormessageprops"},"ErrorMessageProps"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ErrorMessageProps {\n  container: {\n    'aria-live': 'polite'\n    id: string\n  }\n  message: {\n    className: string\n    value: string\n  }\n}\n")),(0,l.kt)("h3",{id:"jsformcontrolprops"},"JSFormControlProps"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"interface JSFormControlProps {\n  a11yProps: {\n    role: string\n    'data-disabled': boolean\n  }\n  control: {\n    cssProps: TemplateStringLiteralArray\n    styles: Record<CSSProps, unknown>\n  }\n  fieldOptions: {\n    disabled?: boolean\n    invalid?: boolean\n    readOnly?: boolean\n    required?: boolean\n  }\n}\n")),(0,l.kt)("h3",{id:"jsformlabelprops"},"JSFormLabelProps"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"interface JSFormLabelProps {\n  a11yProps: {\n    htmlFor: string\n  }\n  label: {\n    cssProps: TemplateStringLiteralArray\n    styles: Record<CSSProps, unknown>\n  }\n  value: string\n}\n")),(0,l.kt)("h3",{id:"jsfieldmessageprops"},"JSFieldMessageProps"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"interface JSFieldMessageProps {\n  id: string\n  cssProps: TemplateStringLiteralArray\n  styles: Record<CSSProps, unknown>\n  value: string\n}\n")),(0,l.kt)("h3",{id:"jserrormessageprops"},"JSErrorMessageProps"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"interface JSErrorMessageProps {\n  container: {\n    'aria-live': 'polite'\n    id: string\n  }\n  message: {\n    cssProps: TemplateStringLiteralArray\n    styles: Record<CSSProps, unknown>\n    value: string\n  }\n}\n")))}k.isMDXComponent=!0}}]);