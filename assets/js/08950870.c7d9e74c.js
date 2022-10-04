"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2910],{96122:function(e,t,n){const a=n(86521);t.Z=function(e){return(0,a.jsx)("svg",{"aria-label":"NPM logo",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,a.jsx)("path",{d:"M12 12.444h-1.111v-2.222H12v2.222ZM22 8v6.667H12v1.11H7.556v-1.11H2V8h20ZM7.556 9.111H3.11v4.445h2.222v-3.334h1.111v3.334h1.112V9.11Zm5.555 0H8.667v5.556h2.222v-1.111h2.222V9.11Zm7.778 0h-6.667v4.445h2.222v-3.334h1.112v3.334h1.11v-3.334h1.112v3.334h1.11V9.11Z"})})}},84637:function(e,t,n){const a=n(86521);t.Z=function(e){return(0,a.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg","aria-label":"eye icon",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23 12.5c-1.73 4.39-6 7.5-11 7.5s-9.27-3.11-11-7.5C2.73 8.11 7 5 12 5s9.27 3.11 11 7.5Zm-8 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM12 18c-3.76 0-7.17-2.14-8.82-5.5a9.821 9.821 0 0 1 17.64 0A9.821 9.821 0 0 1 12 18Z"})})}},5314:function(e,t,n){const a=n(86521);t.Z=function(e){return(0,a.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg","aria-label":"eye off icon",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.648 20.868 3.632 4.852a.5.5 0 0 0-.706-.001l-.57.565-.001.002a.5.5 0 0 0 0 .707L4.19 7.96C2.79 9.19 1.69 10.74 1 12.5 2.73 16.89 7 20 12 20c1.28 0 2.5-.2 3.65-.58l2.725 2.725.002.001a.5.5 0 0 0 .707-.002l.565-.57a.5.5 0 0 0-.001-.706ZM14.83 13.5A3 3 0 0 0 11 9.67l3.83 3.83Zm8.17-1a11.79 11.79 0 0 1-4 5.19l-1.42-1.43a9.863 9.863 0 0 0 3.24-3.76A9.821 9.821 0 0 0 12 7c-1.09 0-2.16.18-3.16.5L7.3 5.97C8.74 5.35 10.33 5 12 5c5 0 9.27 3.11 11 7.5ZM12 18c-3.76 0-7.17-2.14-8.82-5.5.6-1.22 1.43-2.28 2.42-3.13L9 12.78a3.064 3.064 0 0 0 2.72 2.72L14 17.79c-.63.14-1.31.21-2 .21Z"})})}},86906:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(45721),s="base_M3w8",i="column_mb9C base_M3w8",o={alignItems:"center",column:!1,justifyContent:"space-between",textAlign:"center"};function l(e){var t;void 0===e&&(e=o);var n=e.column?i:s;return a.createElement("div",{className:n,style:{alignItems:e.alignItems,justifyContent:e.justifyContent,textAlign:null!=(t=e.textAlign)?t:"center"}},e.children)}},92501:function(e,t,n){var a=n(60953),s=n(45721),i=n(19681),o=n(13836),l=n(86906);t.Z=function(){var e=(0,s.useState)(""),t=e[0],n=e[1],r=(0,i.N)().fieldOptions,p=(0,o.T)(Object.assign({},r,{id:"name",name:"full_name",placeholder:"Basic input",value:t}));return s.createElement(l.Z,null,s.createElement("input",(0,a.Z)({},p.input,{onChange:function(e){n(e.target.value)}})))}},39197:function(e,t,n){n.d(t,{J:function(){return o},e:function(){return l}});var a=n(45721),s=n(48921),i=n(18502);function o(){return a.createElement(s.Z,null,"const { fieldOptions } = getFormControlProps()\nconst inputProps = getInputProps({\n  ...fieldOptions,\n  id: 'basic-input',\n  name: 'basic_input',\n  placeholder: 'Basic input',\n  value: ''\n})\n\n<input {...inputProps.input} onChange={handleCheck} />")}function l(){return i.Z}},18502:function(e,t,n){var a=n(45721),s=n(48921),i=a.createElement(s.Z,null,"import {\n    getErrorMessageProps,\n    getFormControlProps,\n    getFormLabelProps,\n    getInputProps\n} from '@pluralsight/headless-styles';\n\nexport default function BasicInput(props) {\nconst { id, onChange, ...inputOptions } = props\nconst { fieldOptions } = getFormControlProps(inputOptions)\nconst { value, ...labelProps } = getFormLabelProps({\n  ...fieldOptions,\n  value: props.label,\n})\nconst inputProps = getInputProps({\n  ...fieldOptions,\n  id,\n  name: props.name,\n  placeholder: props.placeholder,\n  size: props.size,\n  value: props.value\n})\nconst error = getErrorMessageProps({\n  ...fieldOptions,\n  id,\n  message: props.errorMessage\n})\n\nreturn (\n  <div>\n    <label {...labelProps}>{value}</label>\n    <input {...inputProps} onChange={props.onChange} />\n    {fieldOptions.invalid && (\n      <div {...error.container}>\n        <p {...error.message}>{error.message.value}</p>\n      </div>\n    )}\n  </div>\n);\n}");t.Z=i},88323:function(e,t,n){var a=n(60953),s=n(59005),i=n(45721),o=n(19681),l=n(13836),r=n(86906),p=["value"],u=["value"];t.Z=function(){var e=(0,i.useState)("Medium input"),t=e[0],n=e[1],c=(0,i.useState)("Large input (default)"),d=c[0],m=c[1],g=(0,o.N)().fieldOptions,f=(0,l.T)(Object.assign({},g,{id:"name",name:"full_name",placeholder:"Basic input",size:"m",value:t})),h=f.value,v=(0,s.Z)(f,p),b=(0,l.T)(Object.assign({},g,{id:"name",name:"full_name",placeholder:"Basic input",value:d})),k=b.value,I=(0,s.Z)(b,u);return i.createElement(r.Z,{column:!0},i.createElement("input",(0,a.Z)({},v.input,{value:h,onChange:function(e){n(e.target.value)}})),i.createElement("input",(0,a.Z)({},I.input,{value:k,onChange:function(e){m(e.target.value)}})))}},38236:function(e,t,n){n.d(t,{L:function(){return l},o:function(){return o}});var a=n(45721),s=n(48921),i=n(18502);function o(){return a.createElement(s.Z,null,"const { fieldOptions } = getFormControlProps()\nconst mInputProps = getInputProps({\n  ...fieldOptions,\n  id: 'basic-input',\n  name: 'basic_input',\n  placeholder: 'Basic input',\n  size: 'm',\n  value: ''\n})\nconst inputProps = getInputProps({\n  ...fieldOptions,\n  id: 'basic-input',\n  name: 'basic_input',\n  placeholder: 'Basic input',\n  size: 'l',\n  value: ''\n})\n\n<input {...mInputProps.input} onChange={handleCheck} />\n<input {...inputProps.input} onChange={handleCheck} />")}function l(){return i.Z}},63882:function(e,t,n){var a=n(60953),s=n(45721),i=n(19681),o=n(13836),l=n(74646),r=n(71651),p=n(84637),u=n(5314),c=n(86906),d={position:"absolute",right:"0.3rem",top:"12px",zIndex:"100"};t.Z=function(){var e=(0,s.useState)(!1),t=e[0],n=e[1],m=(0,s.useState)(""),g=m[0],f=m[1],h=(0,i.N)().fieldOptions,v=(0,o.T)(Object.assign({},h,{id:"password",name:"user_password",placeholder:"Basic input",type:t?"text":"password",value:g}));return s.createElement(c.Z,null,s.createElement("div",v.inputWrapper,s.createElement("input",(0,a.Z)({},v.input,{onChange:function(e){f(e.target.value)}})),s.createElement("button",(0,a.Z)({},(0,l._)({kind:"weak",size:"s"}),{style:d}),s.createElement("span",(0,a.Z)({},(0,r.L)({size:"m"}),{onClick:function(){n((function(e){return!e}))}}),t?s.createElement(p.Z,null):s.createElement(u.Z,null)))))}},54288:function(e,t,n){n.d(t,{Z:function(){return N}});var a=n(60953),s=n(59005),i=n(45721),o=n(87430),l="button_sEkW",r="chakra_ow8e",p="chakraCircle_c8Xz",u="list_rMMG",c="listItem_bLPI",d="icon_nzIq",m="svelteBackground_c8BA",g="svelteOutline_tdvb",f=["className"],h=i.createElement("svg",{"aria-hidden":"true",className:d,focusable:"false",viewBox:"0 0 24 24"},i.createElement("path",{fillRule:"evenodd",d:"m14.266 4.311.94.342a.5.5 0 0 1 .299.641l-5.13 14.096a.5.5 0 0 1-.641.299l-.94-.343a.5.5 0 0 1-.299-.64l5.13-14.096a.5.5 0 0 1 .641-.299zm1.791 11.044.798.793a.5.5 0 0 0 .706-.002l3.788-3.802a.5.5 0 0 0 0-.707L17.56 7.853a.5.5 0 0 0-.706 0l-.796.794a.5.5 0 0 0 0 .708l2.642 2.639-2.644 2.654a.5.5 0 0 0 .001.707zm-8.706.793.797-.793a.5.5 0 0 0 .001-.707l-2.644-2.654 2.642-2.64a.5.5 0 0 0 0-.707l-.795-.794a.5.5 0 0 0-.707 0l-3.788 3.784a.5.5 0 0 0-.001.707l3.788 3.802a.5.5 0 0 0 .707.002z"})),v=i.createElement("svg",{"aria-hidden":"true",className:d,focusable:"false",viewBox:"0 0 1024 1024"},i.createElement("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"})),b=i.createElement("svg",{"aria-hidden":"true",className:""+d,fill:"none",focusable:"false",viewBox:"0 0 98.1 118",xmlns:"http://www.w3.org/2000/svg"},i.createElement("path",{className:g,d:"M91.8 15.6C80.9-.1 59.2-4.7 43.6 5.2L16.1 22.8C8.6 27.5 3.4 35.2 1.9 43.9c-1.3 7.3-.2 14.8 3.3 21.3-2.4 3.6-4 7.6-4.7 11.8-1.6 8.9.5 18.1 5.7 25.4 11 15.7 32.6 20.3 48.2 10.4l27.5-17.5c7.5-4.7 12.7-12.4 14.2-21.1 1.3-7.3.2-14.8-3.3-21.3 2.4-3.6 4-7.6 4.7-11.8 1.7-9-.4-18.2-5.7-25.5"}),i.createElement("path",{className:m,d:"M40.9 103.9c-8.9 2.3-18.2-1.2-23.4-8.7-3.2-4.4-4.4-9.9-3.5-15.3.2-.9.4-1.7.6-2.6l.5-1.6 1.4 1c3.3 2.4 6.9 4.2 10.8 5.4l1 .3-.1 1c-.1 1.4.3 2.9 1.1 4.1 1.6 2.3 4.4 3.4 7.1 2.7.6-.2 1.2-.4 1.7-.7L65.5 72c1.4-.9 2.3-2.2 2.6-3.8.3-1.6-.1-3.3-1-4.6-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7l-10.5 6.7c-1.7 1.1-3.6 1.9-5.6 2.4-8.9 2.3-18.2-1.2-23.4-8.7-3.1-4.4-4.4-9.9-3.4-15.3.9-5.2 4.1-9.9 8.6-12.7l27.5-17.5c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.2.9-.4 1.7-.7 2.6l-.5 1.6-1.4-1c-3.3-2.4-6.9-4.2-10.8-5.4l-1-.3.1-1c.1-1.4-.3-2.9-1.1-4.1-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7L32.4 46.1c-1.4.9-2.3 2.2-2.6 3.8s.1 3.3 1 4.6c1.6 2.3 4.4 3.3 7.1 2.6.6-.2 1.2-.4 1.7-.7l10.5-6.7c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.9 5.2-4.1 9.9-8.6 12.7l-27.5 17.5c-1.7 1.1-3.6 1.9-5.6 2.5"}));var k={items:["source","styled","chakra","joy","svelte"],results:{source:{icon:h,id:"source",href:"",label:"Show full source"},styled:{icon:v,id:"styled",label:"View styled components \ud83d\udc85"},chakra:{icon:i.createElement("svg",{"aria-hidden":"true",className:d+" "+r,fill:"none",focusable:"false",viewBox:"0 0 582 582",xmlns:"http://www.w3.org/2000/svg"},i.createElement("rect",{className:p,width:"582",height:"582",rx:"291"}),i.createElement("path",{d:"M157.521 303.421L355.881 106.426C359.587 102.746 365.55 107.225 363.049 111.809L289.22 247.123C287.573 250.141 289.758 253.821 293.196 253.821H420.782C424.892 253.821 426.877 258.857 423.872 261.661L200.293 470.326C196.284 474.067 190.317 468.796 193.536 464.356L299.373 318.351C301.543 315.357 299.404 311.164 295.706 311.164H160.713C156.67 311.164 154.653 306.27 157.521 303.421Z"})),id:"chakra",label:"View Chakra"},joy:{icon:i.createElement("svg",{"aria-hidden":"true",className:d,fill:"none",focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 32"},i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z",fill:"#007FFF"})),id:"joy",label:"View MUI / Joy"},svelte:{icon:b,id:"svelte",label:"View Svelte"}}},I={size:"m",usage:"text"};function y(e){var t=k.results[e.techId],n=(0,o.B)(I).button.className,a="https://codesandbox.io/s/"+e.href+"?file=/src/App.tsx";return i.createElement("a",{"aria-label":t.label,className:n+" "+l,href:a,name:t.label,rel:"noopener noreferrer",target:"_blank",title:t.label},e.children)}function C(e){var t=e.techId,n=Object.assign({},(0,o.B)(I)).button,r=n.className,p=(0,s.Z)(n,f);return i.createElement("button",(0,a.Z)({className:r+" "+l,onClick:e.onToggleShow,title:k.results[t].label},p),i.createElement(B,{tabId:t}))}function B(e){return k.results[e.tabId].icon}function w(e){var t=e.techId;return i.createElement("li",{className:c},"source"===t?i.createElement(C,{onToggleShow:e.onToggleShow,techId:t}):i.createElement(y,{techId:t,href:e.sandboxList[t]},i.createElement(B,{tabId:t})))}function P(e){return i.createElement("ul",{className:u},k.items.map((function(t){return i.createElement(w,{key:t,onToggleShow:e.onToggleShow,sandboxList:e.sandboxList,techId:t})})))}function x(e){var t=(0,i.useState)(!1),n=t[0],a=t[1];return i.createElement("div",null,i.createElement(P,{onToggleShow:function(){a((function(e){return!e}))},sandboxList:e.sandboxList}),n?e.fullCode:e.children)}var N=(0,i.memo)(x)},35053:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(45721),s=n(57465),i=n(71651),o=n(24217),l=n(96122);function r(e){var t=e.href,n=(0,s.j)({href:t}),r=(0,i.L)(n.iconOptions),p=t.includes("github")?o.Z:l.Z;return a.createElement("a",n.link,a.createElement(p,r),e.children)}},92338:function(e,t,n){var a=n(45721),s=n(71651),i=n(22534),o=Object.assign({React:a},a,{getIconProps:s.L,PlaceholderIcon:i.Z});t.Z=o},54356:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return f},default:function(){return I},frontMatter:function(){return g},metadata:function(){return h},toc:function(){return b}});var a=n(60953),s=n(59005),i=(n(45721),n(70167)),o=n(92501),l=n(39197),r=n(88323),p=n(38236),u=n(63882),c=n(35053),d=n(54288),m=["components"],g={tags:["Development","Packages","Components","Headless Styles","Input"]},f=void 0,h={unversionedId:"development/headless-styles/Input",id:"version-0.1.0-alpha/development/headless-styles/Input",title:"Input",description:"The getInputProps helper is used to get user input in a text-like field.",source:"@site/versioned_docs/version-0.1.0-alpha/development/headless-styles/Input.mdx",sourceDirName:"development/headless-styles",slug:"/development/headless-styles/Input",permalink:"/docs/development/headless-styles/Input",draft:!1,editUrl:"https://github.com/pluralsight/tva/edit/main/website/versioned_docs/version-0.1.0-alpha/development/headless-styles/Input.mdx",tags:[{label:"Development",permalink:"/docs/tags/development"},{label:"Packages",permalink:"/docs/tags/packages"},{label:"Components",permalink:"/docs/tags/components"},{label:"Headless Styles",permalink:"/docs/tags/headless-styles"},{label:"Input",permalink:"/docs/tags/input"}],version:"0.1.0-alpha",lastUpdatedBy:"Tom Pietrosanti",frontMatter:{tags:["Development","Packages","Components","Headless Styles","Input"]},sidebar:"development",previous:{title:"IconButton",permalink:"/docs/development/headless-styles/IconButton"},next:{title:"Progress",permalink:"/docs/development/headless-styles/Progress"}},v={},b=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Input",id:"basic-input",level:3},{value:"Sizes",id:"sizes",level:3},{value:"Password Input Example",id:"password-input-example",level:3},{value:"Accessibility and messages",id:"accessibility-and-messages",level:2},{value:"Using both error &amp; field messages",id:"using-both-error--field-messages",level:3},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:2},{value:"InputOptions",id:"inputoptions",level:3},{value:"FieldOptions",id:"fieldoptions",level:3},{value:"Props",id:"props",level:2},{value:"InputProps",id:"inputprops",level:3},{value:"JSInputProps",id:"jsinputprops",level:3}],k={toc:b};function I(e){var t=e.components,n=(0,s.Z)(e,m);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"getInputProps")," helper is used to get user input in a text-like field."),(0,i.kt)(c.Z,{icon:"github",href:"https://github.com/pluralsight/tva/tree/main/packages/headless-styles/src/components/Input",mdxType:"ViewSourceLink"},"View source"),(0,i.kt)("h2",{id:"import"},"Import"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getInputProps } from '@pluralsight/headless-styles'\n")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"basic-input"},"Basic Input"),(0,i.kt)(o.Z,{mdxType:"BasicInput"}),(0,i.kt)(d.Z,{fullCode:(0,i.kt)(l.e,{mdxType:"BasicInputFullPreview"}),sandboxList:{chakra:"ps-react-chakra-5of7jo",joy:"basic-mui-wjvohy",styled:"sc-qeofuk",svelte:"ps-svelte-o1yfdy"},mdxType:"LiveExampleTabs"},(0,i.kt)(l.J,{mdxType:"BasicInputPreview"})),(0,i.kt)("h3",{id:"sizes"},"Sizes"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"getInputProps")," helper comes with two sizes: ",(0,i.kt)("inlineCode",{parentName:"p"},"m")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"l")," (default)."),(0,i.kt)(r.Z,{mdxType:"InputSizes"}),(0,i.kt)(d.Z,{fullCode:(0,i.kt)(p.L,{mdxType:"InputSizesFullPreview"}),sandboxList:{chakra:"ps-react-chakra-5of7jo",joy:"basic-mui-wjvohy",styled:"sc-qeofuk",svelte:"ps-svelte-o1yfdy"},mdxType:"LiveExampleTabs"},(0,i.kt)(p.o,{mdxType:"InputSizesPreview"})),(0,i.kt)("h3",{id:"password-input-example"},"Password Input Example"),(0,i.kt)("p",null,"You can combine helpers to create a password input with show/hide functionality:"),(0,i.kt)(u.Z,{mdxType:"PasswordInput"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useState } from 'react'\nimport {\n  getButtonProps,\n  getFormControlProps,\n  getIconProps,\n  getInputProps,\n} from '@pluralsight/headless-styles'\nimport { EyeIcon, EyeOffIcon } from '@pluralsight/icons'\n\nconst btnStyle = {\n  position: 'absolute',\n  right: '0.3rem',\n  top: '12px',\n  zIndex: '100',\n}\n\nfunction PasswordInput() {\n  const [show, setShow] = useState(false)\n  const [password, setPassword] = useState('')\n  const { fieldOptions } = getFormControlProps()\n  const inputProps = getInputProps({\n    ...fieldOptions,\n    id: 'password',\n    name: 'user_password',\n    placeholder: 'Basic input',\n    type: show ? 'text' : 'password',\n    value: password,\n  })\n\n  function handleChange(e) {\n    setPassword(e.target.value)\n  }\n\n  function handleToggleShow() {\n    setShow((prev) => !prev)\n  }\n\n  return (\n    <div {...inputProps.inputWrapper}>\n      <input {...inputProps.input} onChange={handleChange} />\n      <button {...getButtonProps({ kind: 'weak', size: 's' })} style={btnStyle}>\n        <span {...getIconProps({ size: 'm' })} onClick={handleToggleShow}>\n          {show ? <EyeIcon /> : <EyeOffIcon />}\n        </span>\n      </button>\n    </div>\n  )\n}\n\nexport default PasswordInput\n")),(0,i.kt)("h2",{id:"accessibility-and-messages"},"Accessibility and messages"),(0,i.kt)("p",null,"When displaying ",(0,i.kt)("a",{parentName:"p",href:"/docs/development/headless-styles/FormControl#error-messasge"},"Error Messages")," or ",(0,i.kt)("a",{parentName:"p",href:"/docs/development/headless-styles/FormControl#help-text"},"Help Text")," it is required to pass the ",(0,i.kt)("inlineCode",{parentName:"p"},"options.id")," value to the ",(0,i.kt)("inlineCode",{parentName:"p"},"InputOptions.describedBy")," field. This will add a ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby"},"aria-describedby")," attribute to the ",(0,i.kt)("inlineCode",{parentName:"p"},"input")," which establishes a relationship between the ",(0,i.kt)("inlineCode",{parentName:"p"},"input")," and message you are displaying."),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"Not providing a ",(0,i.kt)("inlineCode",{parentName:"p"},"describedBy")," option that matches the Error/Field Message ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," will result in a poor accessbility experience. Please make sure you are using both of these in order to provide the best experience to all of your users.")),(0,i.kt)("h3",{id:"using-both-error--field-messages"},"Using both error & field messages"),(0,i.kt)("p",null,"When using both the field message and error message API, pass a comma-separated String to the ",(0,i.kt)("inlineCode",{parentName:"p"},"InputOptions.describedBy")," option."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Example using both messages for an input"',title:'"Example',using:!0,both:!0,messages:!0,for:!0,an:!0,'input"':!0},"const { value: helpText, ...message } = getFieldMessageProps({\n  id: 'email:help',\n  message: 'We will never share your email.',\n})\nconst error = getErrorMessageProps({\n  id: 'bad:email',\n  invalid,\n  message: 'An email address is required.',\n})\nconst inputProps = getInputProps({\n  ...fieldOptions,\n  // highlight-next-line\n  describedBy: `${message.id},${error.container.id}`,\n  id: 'email',\n  name: 'user_email',\n  value,\n})\n")),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Argument Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"getInputProps")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"options"),": ",(0,i.kt)("a",{parentName:"td",href:"#inputoptions"},"InputOptions")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"size"),": 'l'"),(0,i.kt)("td",{parentName:"tr",align:null},"Get input styles for CSS usage.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"getJSInputProps")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"options"),": ",(0,i.kt)("a",{parentName:"td",href:"#inputoptions"},"InputOptions")),(0,i.kt)("td",{parentName:"tr",align:null},"same as CSS API"),(0,i.kt)("td",{parentName:"tr",align:null},"CSS-in-JS API")))),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"inputoptions"},"InputOptions"),(0,i.kt)("p",null,"This interface is available as an ",(0,i.kt)("inlineCode",{parentName:"p"},"import")," for use."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface InputOptions extends FieldOptions {\n  describedBy?: string\n  id: string\n  name: string\n  placeholder: string\n  size?: 'm' | 'l'\n  tech?: 'svelte'\n  type: 'text' | 'email' | 'password' | 'tel' | 'url'\n  value: string\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Import example"',title:'"Import','example"':!0},"import type { InputOptions } from '@pluralsight/headless-styles/types'\n")),(0,i.kt)("h3",{id:"fieldoptions"},"FieldOptions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface FieldOptions {\n  disabled?: boolean\n  invalid?: boolean\n  readOnly?: boolean\n  required?: boolean\n}\n")),(0,i.kt)("h2",{id:"props"},"Props"),(0,i.kt)("h3",{id:"inputprops"},"InputProps"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface InputProps {\n  iconOptions: {\n    ariaHidden: boolean\n    ariaLabel: string\n    size: string\n    tech: string\n  }\n  iconWrapper: {\n    'aria-invalid': boolean\n    className: string\n  }\n  input: {\n    'aria-describedby': string\n    'aria-invalid': boolean\n    'data-disabled': boolean\n    'data-invalid': boolean\n    'data-readonly': boolean\n    'data-required': boolean\n    className: string\n    disabled: boolean\n    id: string\n    name: string\n    placeholder: string\n    readOnly: boolean\n    required: boolean\n    type: string\n    value: string\n  }\n  inputWrapper: {\n    className: string\n  }\n}\n")),(0,i.kt)("h3",{id:"jsinputprops"},"JSInputProps"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface JSInputProps {\n  iconOptions: {\n    ariaHidden: boolean\n    ariaLabel: string\n    size: string\n    tech: string\n  }\n  iconWrapper: {\n    a11yProps: {\n      'data-invalid': boolean\n    }\n    styles: Record<string, unknown>\n    cssProps: TemplateLiteralString\n  }\n  input: {\n    a11yProps: {\n      'aria-describedby': string\n      'aria-invalid': boolean\n      'data-disabled': boolean\n      'data-invalid': boolean\n      'data-readonly': boolean\n      'data-required': boolean\n      disabled: boolean\n      id: string\n      name: string\n      placeholder: string\n      readOnly: boolean\n      required: boolean\n      type: string\n      value: string\n    }\n    styles: Record<string, unknown>\n    cssProps: TemplateLiteralString\n  }\n  inputWrapper: {\n    styles: Record<string, unknown>\n    cssProps: TemplateLiteralString\n  }\n}\n")))}I.isMDXComponent=!0},19616:function(e,t,n){n.r(t),t.default={btnBase:"btnBase_hGSE",actionButton:"actionButton_gF4M",defaultButton:"defaultButton_vNwA",dangerButton:"dangerButton_YE9k",filledButton:"filledButton_gioj btnBase_hGSE",outlineButton:"outlineButton_jkWw btnBase_hGSE",textButton:"textButton_x9iW btnBase_hGSE",mButton:"mButton_DO9P",lButton:"lButton_S_c4"}},80201:function(e,t,n){n.r(t),t.default={formControlBase:"formControlBase_iTgb"}},78375:function(e,t,n){n.r(t),t.default={actionIconButton:"actionIconButton_NZ1e",defaultIconButton:"defaultIconButton_nzfZ",squareIconButton:"squareIconButton_VRvk",roundIconButton:"roundIconButton_cvea",textIconButton:"textIconButton_e2F_",mIconButton:"mIconButton_kLF2",lIconButton:"lIconButton_rHp7"}},93786:function(e,t,n){n.r(t),t.default={inputWrapper:"inputWrapper_rbM8",inputBase:"inputBase_dvMs",inputIcon:"inputIcon_so3t",mInputIcon:"mInputIcon_CtoT inputIcon_so3t",lInputIcon:"lInputIcon_geUl inputIcon_so3t",mInputBase:"mInputBase_zVNo inputBase_dvMs",lInputBase:"lInputBase_j1fe inputBase_dvMs"}},95419:function(e,t,n){n.r(t),t.default={textLinkBase:"textLinkBase_oJHd"}},74646:function(e,t,n){t._=void 0;const a=n(6495),s=n(3097),i=n(60084),o=a.__importDefault(n(19616));t._=function(e){const t=(0,i.getDefaultButtonOptions)(e),n=(0,i.createButtonProps)(t),{sentimentClass:a,sizeClass:l,usageClass:r}=(0,i.getButtonClasses)(t),{tech:p}=t;return{...n,button:{...n.button,...(0,s.createClassProp)(p,{defaultClass:`ps-btn ${o.default[r]} ${o.default[a]} ${o.default[l]}`,svelteClass:`ps-btn btnBase ${r} ${a} ${l}`})}}}},60084:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.createButtonProps=t.getButtonClasses=t.getDefaultButtonOptions=void 0;const n=!1,a="",s="action",i="l",o="filled",l="";function r(e){return e?`${e}Button`:""}t.getDefaultButtonOptions=function(e){return{disabled:e?.disabled??n,icon:e?.icon??a,sentiment:e?.sentiment??s,usage:e?.usage??o,size:e?.size??i,tech:e?.tech??l}},t.getButtonClasses=function(e){return{sentimentClass:r(e.sentiment),sizeClass:r(e.size),usageClass:r(e.usage)}},t.createButtonProps=function(e){var t;return{...e.icon&&{iconOptions:{ariaHidden:!0,ariaLabel:"",size:(t=e.size,"m"===t?"s":"m"),tech:e.tech}},button:{"data-disabled":e.disabled}}}},19681:function(e,t,n){t.N=void 0;const a=n(6495),s=n(3097),i=n(57051),o=a.__importDefault(n(80201));t.N=function(e){const{tech:t,groupType:n,...a}=(0,i.getDefaultFormControlOptions)(e);return{control:{...{role:n},"data-disabled":a.disabled,...(0,s.createClassProp)(t,{svelteClass:"ps-form-control formControlBase",defaultClass:`ps-form-control ${o.default.formControlBase}`})},fieldOptions:a}}},57051:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getDefaultFormControlOptions=void 0;const n=!1,a="group",s=!1,i=!1,o=!1,l="";t.getDefaultFormControlOptions=function(e){return{disabled:e?.disabled??n,groupType:e?.groupType??a,invalid:e?.invalid??s,readOnly:e?.readOnly??i,required:e?.required??o,tech:e?.tech??l}}},87430:function(e,t,n){t.B=void 0;const a=n(6495),s=n(3097),i=n(97147),o=a.__importDefault(n(19616)),l=a.__importDefault(n(78375));t.B=function(e){const t=(0,i.getDefaultIconButtonOptions)(e),n=(0,i.createIconButtonProps)(t),{sentimentClass:a,sizeClass:r,usageClass:p}=(0,i.getIconButtonClasses)(t),{tech:u}=t;return{...n,button:{...n.button,...(0,s.createClassProp)(u,{defaultClass:`ps-icon-btn ${o.default.btnBase} ${l.default[p]} ${l.default[a]} ${l.default[r]}`,svelteClass:`ps-icon-btn btnBase ${p} ${a} ${r}`})}}}},97147:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.createIconButtonProps=t.getIconButtonClasses=t.getDefaultIconButtonOptions=void 0;const n="button with icon",a=!1,s="action",i="l",o="square",l="";function r(e){return e?`${e}IconButton`:""}t.getDefaultIconButtonOptions=function(e){return{ariaLabel:e?.ariaLabel??n,disabled:e?.disabled??a,sentiment:e?.sentiment??s,usage:e?.usage??o,size:e?.size??i,tech:e?.tech??l}},t.getIconButtonClasses=function(e){return{sentimentClass:r(e.sentiment),sizeClass:r(e.size),usageClass:r(e.usage)}},t.createIconButtonProps=function(e){return{iconOptions:{ariaHidden:!0,ariaLabel:"button with icon",size:(t=e.size,"m"===t?"s":"m"),tech:e.tech},button:{"aria-label":e.ariaLabel,"data-disabled":e.disabled}};var t}},13836:function(e,t,n){t.T=void 0;const a=n(6495),s=n(3097),i=n(26660),o=a.__importDefault(n(93786));t.T=function(e){const{tech:t,size:n,...a}=(0,i.getDefaultInputOptions)(e),{baseSizeClass:l,iconSizeClass:r}=(0,i.createInputClasses)(n),p=(0,i.createInputProps)(a);return{...p,input:{...p.input,...(0,s.createClassProp)(t,{defaultClass:`ps-input ${o.default[l]}`,svelteClass:`ps-input inputBase ${l}`})},inputWrapper:{...p.inputWrapper,...(0,s.createClassProp)(t,{defaultClass:`ps-input-wrapper ${o.default.inputWrapper}`,svelteClass:"ps-input-wrapper inputWrapper"})},iconWrapper:{...p.iconWrapper,...(0,s.createClassProp)(t,{defaultClass:`ps-input-icon ${o.default[r]}`,svelteClass:`ps-input-icon ${r} inputIcon`})}}}},26660:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.createInputProps=t.createInputClasses=t.getDefaultInputOptions=void 0;const a=n(3097),s=!1,i="",o="",l=!1,r="",p="Enter text",u=!1,c=!1,d="l",m="",g="text",f="";t.getDefaultInputOptions=function(e){return{disabled:e?.disabled??s,describedBy:e?.describedBy??i,id:e?.id??o,invalid:e?.invalid??l,name:e?.name??r,placeholder:e?.placeholder??p,readOnly:e?.readOnly??u,required:e?.required??c,size:e?.size??d,tech:e?.tech??m,type:e?.type??g,value:e?.value??f}},t.createInputClasses=function(e){return{baseSizeClass:`${e}InputBase`,iconSizeClass:`${e}InputIcon`}},t.createInputProps=function(e){const{describedBy:t}=e,n=(0,a.createA11yProps)(e),s=t&&{"aria-describedby":t};return{...e.invalid&&{iconOptions:{ariaHidden:!0,ariaLabel:"",size:"m",tech:e.tech},iconWrapper:{"data-invalid":e.invalid}},input:{...n,...s,id:e.id,name:e.name,placeholder:e.placeholder,type:e.type,value:e.value},inputWrapper:{}}}},55334:function(e,t){function n(e){return/^https?:\/\//.test(e)}function a(e){return{ariaHidden:!1,ariaLabel:"(opens in a new window)",customSize:t.textLinkIconSize,tech:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.createTextLinkProps=t.getDefaultTextLinkOptions=t.defaultTextLinkOptions=t.textLinkIconSize=void 0,t.textLinkIconSize="1em",t.defaultTextLinkOptions={href:"",tech:""},t.getDefaultTextLinkOptions=function(e){return{href:e?.href??t.defaultTextLinkOptions.href,tech:e?.tech??t.defaultTextLinkOptions.tech}},t.createTextLinkProps=function(e,t){const s=function(e){return n(e)?{rel:"noopener external",target:"_blank"}:{}}(e);return{link:{href:e,...s},...n(e)&&{iconOptions:a(t)}}}},57465:function(e,t,n){t.j=void 0;const a=n(6495),s=n(3097),i=n(55334),o=a.__importDefault(n(95419));t.j=function(e){const t=(0,i.getDefaultTextLinkOptions)(e),n=(0,i.createTextLinkProps)(t.href,t.tech);return{...n,link:{...n.link,...(0,s.createClassProp)(t.tech,{defaultClass:`ps-text-link ${o.default.textLinkBase}`,svelteClass:"textLinkBase"})}}}}}]);