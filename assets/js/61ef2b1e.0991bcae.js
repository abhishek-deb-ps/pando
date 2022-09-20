"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5288],{96122:function(e,t,a){const n=a(86521);t.Z=function(e){return(0,n.jsx)("svg",{"aria-label":"NPM logo",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,n.jsx)("path",{d:"M12 12.444h-1.111v-2.222H12v2.222ZM22 8v6.667H12v1.11H7.556v-1.11H2V8h20ZM7.556 9.111H3.11v4.445h2.222v-3.334h1.111v3.334h1.112V9.11Zm5.555 0H8.667v5.556h2.222v-1.111h2.222V9.11Zm7.778 0h-6.667v4.445h2.222v-3.334h1.112v3.334h1.11v-3.334h1.112v3.334h1.11V9.11Z"})})}},8626:function(e,t,a){const n=a(86521);t.Z=function(e){return(0,n.jsx)("svg",{"aria-label":"person",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 8c0 2.206 1.794 4 4 4s4-1.794 4-4-1.794-4-4-4-4 1.794-4 4Zm2 0c0-1.104.897-2 2-2s2 .896 2 2c0 1.103-.897 2-2 2s-2-.897-2-2ZM4.5 20a.5.5 0 0 1-.5-.5V19c0-3.533 3.29-6 8-6s8 2.467 8 6v.5a.5.5 0 0 1-.5.5h-15Zm13.342-2H6.159c.598-1.808 2.834-3 5.842-3 3.008 0 5.243 1.192 5.841 3Z"})})}},16487:function(e,t,a){var n=a(45721),r=a(40050),l=a(86906);function s(e){var t=(0,r.l)({label:e.label,sentiment:"default",size:e.size});return n.createElement("span",t.wrapper,n.createElement("span",t.label,e.size))}t.Z=function(){return n.createElement(l.Z,null,n.createElement(s,{size:"xs"}),n.createElement(s,{size:"s"}),n.createElement(s,{size:"m"}),n.createElement(s,{size:"l"}),n.createElement(s,{size:"xl"}))}},98187:function(e,t,a){a.d(t,{K:function(){return l},m:function(){return s}});var n=a(45721),r=a(48921);function l(){return n.createElement(r.Z,null,"const avatar = getAvatarProps({\n  label: 'extra large avatar',\n  size: 'xl'\n})\n\n<span {...avatar.wrapper}>\n  <span {...avatar.label}>xl</span>\n</span>")}function s(){return n.createElement(r.Z,null,"import { getAvatarProps } from '@pluralsight/headless-styles'\n\nexport default function Avatar(props) {\n  const avatar = getAvatarProps({\n    label: props.label\n    sentiment: props.sentiment,\n    // highlight-next-line\n    size: props.size,\n  })\n\n  return (\n    <span {...avatar.wrapper}>\n      <span {...avatar.label}>{avatar.label.value}</span>\n    </span>\n  )\n}")}},40888:function(e,t,a){var n=a(45721),r=a(40050),l=a(98336),s=a(8626),i=a(86906);function o(e){var t=(0,r.l)({label:e.label,sentiment:e.sentiment,size:e.size});return n.createElement("span",t.wrapper,n.createElement(s.Z,(0,l.L)(t.iconOptions)))}function c(e){var t=(0,r.l)({label:e.label,sentiment:e.sentiment,size:e.size});return n.createElement("span",t.wrapper,n.createElement("span",t.label,t.label.value))}t.Z=function(){return n.createElement(i.Z,null,n.createElement(c,{sentiment:"default",label:"default avatar"}),n.createElement(o,{sentiment:"default",label:"default icon avatar"}),n.createElement(c,{sentiment:"action",label:"action avatar"}),n.createElement(o,{sentiment:"action",label:"action icon avatar"}))}},7051:function(e,t,a){a.d(t,{W:function(){return s},v:function(){return l}});var n=a(45721),r=a(48921);function l(){return n.createElement(r.Z,null,"const avatar = getAvatarProps({\n  label: 'Pluralsight avatar'\n  sentiment: 'default',\n})\n\n<span {...avatar.wrapper}>\n  <span {...avatar.label}>{avatar.label.value}</span>\n</span>")}function s(){return n.createElement(r.Z,null,"import { getAvatarProps } from '@pluralsight/headless-styles'\n\nexport default function Avatar(props) {\n  const avatar = getAvatarProps({\n    label: props.label,\n    // highlight-next-line\n    sentiment: props.sentiment,\n    size: props.size,\n  })\n\n  return (\n    <span {...avatar.wrapper}>\n      <span {...avatar.label}>{avatar.label.value}</span>\n    </span>\n  )\n}")}},86906:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(45721),r="base_M3w8",l="column_mb9C base_M3w8",s={alignItems:"center",column:!1,justifyContent:"space-between",textAlign:"center"};function i(e){var t;void 0===e&&(e=s);var a=e.column?l:r;return n.createElement("div",{className:a,style:{alignItems:e.alignItems,justifyContent:e.justifyContent,textAlign:null!=(t=e.textAlign)?t:"center"}},e.children)}},54288:function(e,t,a){a.d(t,{Z:function(){return L}});var n=a(60953),r=a(59005),l=a(45721),s=a(90079),i="button_sEkW",o="chakra_ow8e",c="chakraCircle_c8Xz",p="list_rMMG",u="listItem_bLPI",d="icon_nzIq",v="svelteBackground_c8BA",m="svelteOutline_tdvb",f=["className"],h=l.createElement("svg",{"aria-hidden":"true",className:d,focusable:"false",viewBox:"0 0 24 24"},l.createElement("path",{fillRule:"evenodd",d:"m14.266 4.311.94.342a.5.5 0 0 1 .299.641l-5.13 14.096a.5.5 0 0 1-.641.299l-.94-.343a.5.5 0 0 1-.299-.64l5.13-14.096a.5.5 0 0 1 .641-.299zm1.791 11.044.798.793a.5.5 0 0 0 .706-.002l3.788-3.802a.5.5 0 0 0 0-.707L17.56 7.853a.5.5 0 0 0-.706 0l-.796.794a.5.5 0 0 0 0 .708l2.642 2.639-2.644 2.654a.5.5 0 0 0 .001.707zm-8.706.793.797-.793a.5.5 0 0 0 .001-.707l-2.644-2.654 2.642-2.64a.5.5 0 0 0 0-.707l-.795-.794a.5.5 0 0 0-.707 0l-3.788 3.784a.5.5 0 0 0-.001.707l3.788 3.802a.5.5 0 0 0 .707.002z"})),g=l.createElement("svg",{"aria-hidden":"true",className:d,focusable:"false",viewBox:"0 0 1024 1024"},l.createElement("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"})),b=l.createElement("svg",{"aria-hidden":"true",className:""+d,fill:"none",focusable:"false",viewBox:"0 0 98.1 118",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{className:m,d:"M91.8 15.6C80.9-.1 59.2-4.7 43.6 5.2L16.1 22.8C8.6 27.5 3.4 35.2 1.9 43.9c-1.3 7.3-.2 14.8 3.3 21.3-2.4 3.6-4 7.6-4.7 11.8-1.6 8.9.5 18.1 5.7 25.4 11 15.7 32.6 20.3 48.2 10.4l27.5-17.5c7.5-4.7 12.7-12.4 14.2-21.1 1.3-7.3.2-14.8-3.3-21.3 2.4-3.6 4-7.6 4.7-11.8 1.7-9-.4-18.2-5.7-25.5"}),l.createElement("path",{className:v,d:"M40.9 103.9c-8.9 2.3-18.2-1.2-23.4-8.7-3.2-4.4-4.4-9.9-3.5-15.3.2-.9.4-1.7.6-2.6l.5-1.6 1.4 1c3.3 2.4 6.9 4.2 10.8 5.4l1 .3-.1 1c-.1 1.4.3 2.9 1.1 4.1 1.6 2.3 4.4 3.4 7.1 2.7.6-.2 1.2-.4 1.7-.7L65.5 72c1.4-.9 2.3-2.2 2.6-3.8.3-1.6-.1-3.3-1-4.6-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7l-10.5 6.7c-1.7 1.1-3.6 1.9-5.6 2.4-8.9 2.3-18.2-1.2-23.4-8.7-3.1-4.4-4.4-9.9-3.4-15.3.9-5.2 4.1-9.9 8.6-12.7l27.5-17.5c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.2.9-.4 1.7-.7 2.6l-.5 1.6-1.4-1c-3.3-2.4-6.9-4.2-10.8-5.4l-1-.3.1-1c.1-1.4-.3-2.9-1.1-4.1-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7L32.4 46.1c-1.4.9-2.3 2.2-2.6 3.8s.1 3.3 1 4.6c1.6 2.3 4.4 3.3 7.1 2.6.6-.2 1.2-.4 1.7-.7l10.5-6.7c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.9 5.2-4.1 9.9-8.6 12.7l-27.5 17.5c-1.7 1.1-3.6 1.9-5.6 2.5"}));var k={items:["source","styled","chakra","joy","svelte"],results:{source:{icon:h,id:"source",href:"",label:"Show full source"},styled:{icon:g,id:"styled",label:"View styled components \ud83d\udc85"},chakra:{icon:l.createElement("svg",{"aria-hidden":"true",className:d+" "+o,fill:"none",focusable:"false",viewBox:"0 0 582 582",xmlns:"http://www.w3.org/2000/svg"},l.createElement("rect",{className:c,width:"582",height:"582",rx:"291"}),l.createElement("path",{d:"M157.521 303.421L355.881 106.426C359.587 102.746 365.55 107.225 363.049 111.809L289.22 247.123C287.573 250.141 289.758 253.821 293.196 253.821H420.782C424.892 253.821 426.877 258.857 423.872 261.661L200.293 470.326C196.284 474.067 190.317 468.796 193.536 464.356L299.373 318.351C301.543 315.357 299.404 311.164 295.706 311.164H160.713C156.67 311.164 154.653 306.27 157.521 303.421Z"})),id:"chakra",label:"View Chakra"},joy:{icon:l.createElement("svg",{"aria-hidden":"true",className:d,fill:"none",focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 32"},l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z",fill:"#007FFF"})),id:"joy",label:"View MUI / Joy"},svelte:{icon:b,id:"svelte",label:"View Svelte"}}},A={size:"m",usage:"text"};function x(e){var t=k.results[e.techId],a=(0,s.B)(A).button.className,n="https://codesandbox.io/s/"+e.href+"?file=/src/App.tsx";return l.createElement("a",{"aria-label":t.label,className:a+" "+i,href:n,name:t.label,rel:"noopener noreferrer",target:"_blank",title:t.label},e.children)}function w(e){var t=e.techId,a=Object.assign({},(0,s.B)(A)).button,o=a.className,c=(0,r.Z)(a,f);return l.createElement("button",(0,n.Z)({className:o+" "+i,onClick:e.onToggleShow,title:k.results[t].label},c),l.createElement(y,{tabId:t}))}function y(e){return k.results[e.tabId].icon}function C(e){var t=e.techId;return l.createElement("li",{className:u},"source"===t?l.createElement(w,{onToggleShow:e.onToggleShow,techId:t}):l.createElement(x,{techId:t,href:e.sandboxList[t]},l.createElement(y,{tabId:t})))}function N(e){return l.createElement("ul",{className:p},k.items.map((function(t){return l.createElement(C,{key:t,onToggleShow:e.onToggleShow,sandboxList:e.sandboxList,techId:t})})))}function P(e){var t=(0,l.useState)(!1),a=t[0],n=t[1];return l.createElement("div",null,l.createElement(N,{onToggleShow:function(){n((function(e){return!e}))},sandboxList:e.sandboxList}),a?e.fullCode:e.children)}var L=(0,l.memo)(P)},35053:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(45721),r=a(45635),l=a(98336),s=a(24217),i=a(96122);function o(e){var t=e.href,a=(0,r.j)({href:t}),o=(0,l.L)(a.iconOptions),c=t.includes("github")?s.Z:i.Z;return n.createElement("a",a.link,n.createElement(c,o),e.children)}},92338:function(e,t,a){var n=a(45721),r=a(98336),l=a(22534),s=Object.assign({React:n},n,{getIconProps:r.L,PlaceholderIcon:l.Z});t.Z=s},36451:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return v},metadata:function(){return f},toc:function(){return g}});var n=a(60953),r=a(59005),l=(a(45721),a(70167)),s=a(40888),i=a(7051),o=a(16487),c=a(98187),p=a(35053),u=a(54288),d=["components"],v={tags:["Development","Packages","Components","Headless Styles","Avatar"]},m=void 0,f={unversionedId:"development/headless-styles/Avatar",id:"development/headless-styles/Avatar",title:"Avatar",description:"The Avatar is used to represent a user and is designed to display",source:"@site/docs/development/headless-styles/Avatar.mdx",sourceDirName:"development/headless-styles",slug:"/development/headless-styles/Avatar",permalink:"/docs/next/development/headless-styles/Avatar",draft:!1,editUrl:"https://github.com/pluralsight/tva/edit/main/website/docs/development/headless-styles/Avatar.mdx",tags:[{label:"Development",permalink:"/docs/next/tags/development"},{label:"Packages",permalink:"/docs/next/tags/packages"},{label:"Components",permalink:"/docs/next/tags/components"},{label:"Headless Styles",permalink:"/docs/next/tags/headless-styles"},{label:"Avatar",permalink:"/docs/next/tags/avatar"}],version:"current",lastUpdatedBy:"Tom Pietrosanti",frontMatter:{tags:["Development","Packages","Components","Headless Styles","Avatar"]},sidebar:"development",previous:{title:"Admonition",permalink:"/docs/next/development/headless-styles/Admonition"},next:{title:"Badge",permalink:"/docs/next/development/headless-styles/Badge"}},h={},g=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Avatar Kinds (fallback only)",id:"avatar-kinds-fallback-only",level:3},{value:"Avatar Sizes",id:"avatar-sizes",level:3},{value:"Avatar Content",id:"avatar-content",level:3},{value:"Image (preferred)",id:"image-preferred",level:4},{value:"Initials (fallback)",id:"initials-fallback",level:4},{value:"Icon (last resort)",id:"icon-last-resort",level:4},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:2},{value:"AvatarOptions",id:"avataroptions",level:3},{value:"Props",id:"props",level:2},{value:"AvatarProps",id:"avatarprops",level:3},{value:"JSAvatarProps",id:"jsavatarprops",level:3}],b={toc:g};function k(e){var t=e.components,a=(0,r.Z)(e,d);return(0,l.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The Avatar is used to represent a user and is designed to display\na profile image, initials, or fallback icon."),(0,l.kt)(p.Z,{icon:"github",href:"https://github.com/pluralsight/tva/tree/main/packages/headless-styles/src/components/Avatar",mdxType:"ViewSourceLink"},"View source"),(0,l.kt)("h2",{id:"import"},"Import"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getAvatarProps } from '@pluralsight/headless-styles'\n")),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("h3",{id:"avatar-kinds-fallback-only"},"Avatar Kinds (fallback only)"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"getAvatarProps")," helper has two kinds to change the visual color of the avatar fallback that directly correlate to our ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/development/tokens/intro#naming-convention"},"design-tokens"),". You can use ",(0,l.kt)("inlineCode",{parentName:"p"},"default")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"action"),"."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"When using Avatars, make sure there is a purpose behind the fallback colors you are choosing. ",(0,l.kt)("a",{parentName:"p",href:"#avatar-content"},"Follow our guide")," to learn how to display avatars for the best user experience.")),(0,l.kt)(s.Z,{mdxType:"BasicAvatar"}),(0,l.kt)(u.Z,{fullCode:(0,l.kt)(i.W,{mdxType:"BasicAvatarFullPreview"}),sandboxList:{chakra:"basic-avatar-react-chakra-tvxvqs",joy:"basic-avatar-mui-uv5bks",styled:"basic-avatar-css-in-js-sc-jb5imx",svelte:"basic-avatar-svelte-t60wvw"},mdxType:"LiveExampleTabs"},(0,l.kt)(i.v,{mdxType:"BasicAvatarPreview"})),(0,l.kt)("h3",{id:"avatar-sizes"},"Avatar Sizes"),(0,l.kt)("p",null,"To change the size of an Avatar, use the ",(0,l.kt)("inlineCode",{parentName:"p"},"size")," option.\nThe options are: ",(0,l.kt)("inlineCode",{parentName:"p"},"xs"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"s"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"m")," (default), ",(0,l.kt)("inlineCode",{parentName:"p"},"l"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"xl"),"."),(0,l.kt)(o.Z,{mdxType:"AvatarSizes"}),(0,l.kt)(u.Z,{fullCode:(0,l.kt)(c.m,{mdxType:"AvatarSizesFullPreview"}),sandboxList:{chakra:"basic-avatar-react-chakra-tvxvqs",joy:"basic-avatar-mui-uv5bks",styled:"basic-avatar-css-in-js-sc-jb5imx",svelte:"basic-avatar-svelte-t60wvw"},mdxType:"LiveExampleTabs"},(0,l.kt)(c.K,{mdxType:"AvatarSizesPreview"})),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"We use the standard clothing size shorthand values for all ",(0,l.kt)("inlineCode",{parentName:"p"},"size")," related options in any library we provide (i.e. xs-xxl).")),(0,l.kt)("h3",{id:"avatar-content"},"Avatar Content"),(0,l.kt)("p",null,"The DS Avatars have three different states to display to the user. Each state has a different purpose for usage and should follow the guides below."),(0,l.kt)("h4",{id:"image-preferred"},"Image (preferred)"),(0,l.kt)("p",null,"A profile image should be used for all Avatars no matter the context (i.e. person, platform, etc.). This will give the best visual experience for the user and should be used over all other options."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"const avatarProps = getAvatarProps({\n  label: 'Harry Potter',\n  src: 'http://harrypotter.com/avatar'\n})\n\n<span {...avatarProps.wrapper}>\n  <img {...avatarProps.image} />\n</span>\n")),(0,l.kt)("h4",{id:"initials-fallback"},"Initials (fallback)"),(0,l.kt)("p",null,"In the absence of an image, the avatar's initials (up to 2 characters) should be displayed. ",(0,l.kt)("strong",{parentName:"p"},"This is not ideal")," but allows the user to still quickly put the dots together of who the avatar is meant to represent."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"const avatarProps = getAvatarProps({\n  label: 'Harry Potter',\n  src: ''\n})\n\n<span {...avatarProps.wrapper}>\n  <div {...avatarProps.label}>{avatarProps.label.value}</div>\n</span>\n")),(0,l.kt)("h4",{id:"icon-last-resort"},"Icon (last resort)"),(0,l.kt)("p",null,"If neither the image nor initials are available, display an icon\nusing the ",(0,l.kt)("inlineCode",{parentName:"p"},"iconOptions")," from the ",(0,l.kt)("a",{parentName:"p",href:"#avatar-props"},"AvatarProps")," Object to represent a person."),(0,l.kt)("admonition",{type:"danger"},(0,l.kt)("p",{parentName:"admonition"},"Although this option exists, ",(0,l.kt)("strong",{parentName:"p"},"it is not recommended to be used")," as it provides a vague user experience. If you have to use this option, you need to update your API to require a name for each user.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"const avatarProps = getAvatarProps({\n  label: '',\n  src: ''\n})\n\n<span {...avatarProps.wrapper}>\n  <PersonIcon {...getIconProps(avatarProps.iconOptions)} />\n</span>\n")),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Argument Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"getAvatarProps")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"options"),": ",(0,l.kt)("a",{parentName:"td",href:"#avataroptions"},"AvatarOptions")),(0,l.kt)("td",{parentName:"tr",align:null},"kind: 'neutral'",(0,l.kt)("br",null),"size: 'm'"),(0,l.kt)("td",{parentName:"tr",align:null},"Get avatar container and image element props (CSS), and options for icon API")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"getJSAvatarProps")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"options"),": ",(0,l.kt)("a",{parentName:"td",href:"#avataroptions"},"AvatarOptions")),(0,l.kt)("td",{parentName:"tr",align:null},"same as CSS API"),(0,l.kt)("td",{parentName:"tr",align:null},"CSS-in-JS API")))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"avataroptions"},"AvatarOptions"),(0,l.kt)("p",null,"This interface is available as an ",(0,l.kt)("inlineCode",{parentName:"p"},"import")," for use."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface AvatarOptions {\n  label: string\n  sentiment?: 'default' | 'strong'\n  size?: 'xs' | 's' | 'm' | 'l' | 'xl'\n  src: string\n  tech?: 'svelte' | ''\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Import example"',title:'"Import','example"':!0},"import type { AvatarOptions } from '@pluralsight/headless-styles/types'\n")),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("h3",{id:"avatarprops"},"AvatarProps"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"interface AvatarProps {\n  iconOptions: {\n    ariaHidden: true\n    customSize: string\n    tech: string\n  }\n  wrapper: {\n    className: string\n  }\n  image: {\n    alt: string\n    className: string\n    src: string\n  }\n  label: {\n    'aria-label': string\n    className: string\n    value: string\n  }\n}\n")),(0,l.kt)("h3",{id:"jsavatarprops"},"JSAvatarProps"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"interface JSAvatarProps {\n  iconOptions: {\n    ariaHidden: true\n    customSize: string\n    tech: string\n  }\n  wrapper: {\n    cssProps: TemplateLiteralStringArray | string\n    styles: Record<CSSProps, string>\n  }\n  image: {\n    a11yProps: {\n      alt: string\n      src: string\n    }\n    cssProps: TemplateLiteralStringArray | string\n    styles: Record<CSSProps, string>\n  }\n  label: {\n    a11yProps: {\n      'aria-label': string\n      value: string\n    }\n    cssProps: TemplateLiteralStringArray | string\n    styles: Record<CSSProps, string>\n  }\n}\n")))}k.isMDXComponent=!0},62089:function(e,t,a){a.r(t),t.default={baseAvatar:"baseAvatar_Kb8D",avatarImage:"avatarImage_edvT",defaultAvatar:"defaultAvatar_tGMT baseAvatar_Kb8D",actionAvatar:"actionAvatar_wFxh baseAvatar_Kb8D",avatarLabel:"avatarLabel_DThu",xsAvatar:"xsAvatar_c9Y4",xsAvatarLabel:"xsAvatarLabel_bC3T",sAvatar:"sAvatar_J8Ol",sAvatarLabel:"sAvatarLabel_yWKZ",mAvatar:"mAvatar_uuzs",mAvatarLabel:"mAvatarLabel_IlCS",lAvatar:"lAvatar_Ngik",lAvatarLabel:"lAvatarLabel_bt21",xlAvatar:"xlAvatar_mAZH",xlAvatarLabel:"xlAvatarLabel_mhyn"}},58127:function(e,t,a){a.r(t),t.default={btnBase:"btnBase_mw39",actionButton:"actionButton_SdX0",defaultButton:"defaultButton_X_C7",dangerButton:"dangerButton_DPDY",filledButton:"filledButton_jxyi btnBase_mw39",outlineButton:"outlineButton_HOSu btnBase_mw39",textButton:"textButton_DGUG btnBase_mw39",mButton:"mButton_jP8s",lButton:"lButton_WtZs"}},94012:function(e,t,a){a.r(t),t.default={actionIconButton:"actionIconButton_TGX_",defaultIconButton:"defaultIconButton_Mskn",squareIconButton:"squareIconButton_Bsfr",roundIconButton:"roundIconButton_Kftl",textIconButton:"textIconButton_twbd",mIconButton:"mIconButton_zSLo",lIconButton:"lIconButton_HJPO"}},27535:function(e,t,a){a.r(t),t.default={textLinkBase:"textLinkBase_C0fh"}},40050:function(e,t,a){t.l=void 0;const n=a(6495),r=a(46678),l=a(95026),s=n.__importDefault(a(62089));t.l=function(e){const t=(0,l.getDefaultAvatarOptions)(e),{labelClass:a,sentimentClass:n,sizeClass:i}=(0,l.createAvatarSelectorClasses)(t.sentiment,t.size),o=(0,l.createAvatarProps)(t);return{...o,wrapper:{...o.wrapper,...(0,r.createClassProp)(t.tech,{svelteClass:`ps-avatar baseAvatar ${n} ${i}`,defaultClass:`ps-avatar ${s.default[n]} ${s.default[i]}`})},image:{...o.image,...(0,r.createClassProp)(t.tech,{svelteClass:"ps-avatar-image avatarImage",defaultClass:`ps-avatar-image ${s.default.avatarImage}`})},label:{...o.label,...(0,r.createClassProp)(t.tech,{svelteClass:`ps-avatar-label avatarLabel ${a}`,defaultClass:`ps-avatar-label ${s.default.avatarLabel} ${s.default[a]}`})}}}},95026:function(e,t){function a(e){return e?.slice(0,1)??""}Object.defineProperty(t,"__esModule",{value:!0}),t.createAvatarProps=t.createAvatarSelectorClasses=t.getDefaultAvatarOptions=t.iconSizeMap=t.defaultAvatarOptions=void 0,t.defaultAvatarOptions={label:"",sentiment:"default",size:"m",src:"",tech:""},t.iconSizeMap={xs:"1.5rem",s:"2.5rem",m:"4rem",l:"6rem",xl:"8rem"},t.getDefaultAvatarOptions=function(e){return{label:e?.label??t.defaultAvatarOptions.label,sentiment:e?.sentiment??t.defaultAvatarOptions.sentiment,size:e?.size??t.defaultAvatarOptions.size,src:e?.src??t.defaultAvatarOptions.src,tech:e?.tech??t.defaultAvatarOptions.tech}},t.createAvatarSelectorClasses=function(e,t){return{labelClass:`${t}AvatarLabel`,sentimentClass:`${e}Avatar`,sizeClass:`${t}Avatar`}},t.createAvatarProps=function(e){const{label:n}=e,r=function(e){const{firstLetter:t,lastLetter:a}=e;return a?`${t}${a}`:t}(function(e){const t=e.split(" ");return{word:e,firstLetter:a(t[0]),lastLetter:a(t[1])}}(n));return{iconOptions:{ariaHidden:!0,customSize:t.iconSizeMap[e.size],tech:e.tech},wrapper:{},label:{"aria-label":n,value:r},image:{alt:n,src:e.src}}}},90079:function(e,t,a){t.B=void 0;const n=a(6495),r=a(46678),l=a(70070),s=n.__importDefault(a(58127)),i=n.__importDefault(a(94012));t.B=function(e){const t=(0,l.getDefaultIconButtonOptions)(e),a=(0,l.createIconButtonProps)(t),{sentimentClass:n,sizeClass:o,usageClass:c}=(0,l.getIconButtonClasses)(t),{tech:p}=t;return{...a,button:{...a.button,...(0,r.createClassProp)(p,{defaultClass:`ps-icon-btn ${s.default.btnBase} ${i.default[c]} ${i.default[n]} ${i.default[o]}`,svelteClass:`ps-icon-btn btnBase ${c} ${n} ${o}`})}}}},70070:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.createIconButtonProps=t.getIconButtonClasses=t.getDefaultIconButtonOptions=void 0;const a="button with icon",n=!1,r="action",l="l",s="square",i="";function o(e){return e?`${e}IconButton`:""}t.getDefaultIconButtonOptions=function(e){return{ariaLabel:e?.ariaLabel??a,disabled:e?.disabled??n,sentiment:e?.sentiment??r,usage:e?.usage??s,size:e?.size??l,tech:e?.tech??i}},t.getIconButtonClasses=function(e){return{sentimentClass:o(e.sentiment),sizeClass:o(e.size),usageClass:o(e.usage)}},t.createIconButtonProps=function(e){return{iconOptions:{ariaHidden:!0,ariaLabel:"button with icon",size:(t=e.size,"m"===t?"s":"m"),tech:e.tech},button:{"aria-label":e.ariaLabel,"data-disabled":e.disabled}};var t}},51393:function(e,t){function a(e){return/^https?:\/\//.test(e)}function n(e){return{ariaHidden:!1,ariaLabel:"(opens in a new window)",customSize:t.textLinkIconSize,tech:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.createTextLinkProps=t.getDefaultTextLinkOptions=t.defaultTextLinkOptions=t.textLinkIconSize=void 0,t.textLinkIconSize="1em",t.defaultTextLinkOptions={href:"",tech:""},t.getDefaultTextLinkOptions=function(e){return{href:e?.href??t.defaultTextLinkOptions.href,tech:e?.tech??t.defaultTextLinkOptions.tech}},t.createTextLinkProps=function(e,t){const r=function(e){return a(e)?{rel:"noopener external",target:"_blank"}:{}}(e);return{link:{href:e,...r},...a(e)&&{iconOptions:n(t)}}}},45635:function(e,t,a){t.j=void 0;const n=a(6495),r=a(46678),l=a(51393),s=n.__importDefault(a(27535));t.j=function(e){const t=(0,l.getDefaultTextLinkOptions)(e),a=(0,l.createTextLinkProps)(t.href,t.tech);return{...a,link:{...a.link,...(0,r.createClassProp)(t.tech,{defaultClass:`ps-text-link ${s.default.textLinkBase}`,svelteClass:"textLinkBase"})}}}}}]);