"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5358],{20180:function(e,t,n){const r=n(86521);t.Z=function(e){return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img",fill:"currentColor",className:"ps-icon-svg","aria-label":"danger diamond filled icon",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.293 21.707a.997.997 0 0 0 1.414 0l9-9a.999.999 0 0 0 0-1.414l-9-9a.999.999 0 0 0-1.414 0l-9 9a.999.999 0 0 0 0 1.414l9 9ZM12.5 14a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h1Zm0 3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1Z"})})}},93577:function(e,t,n){n.d(t,{P:function(){return o}});var r=n(45721);function o(e,t){var n=function(e){var t;return{blockScroll:null===(t=null==e?void 0:e.blockScroll)||void 0===t||t}}(t),o=(0,r.useRef)(null),a=(0,r.useCallback)((function(){var e,t,n=null!==(e=null===(t=o.current)||void 0===t?void 0:t.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'))&&void 0!==e?e:[];return{firstItem:n[0],lastItem:n[n.length-1]}}),[o]),l=(0,r.useCallback)((function(e){var t=document.activeElement,n=a(),r=n.firstItem,o=n.lastItem;"Tab"===e.key&&(e.shiftKey?t===r&&(e.preventDefault(),o.focus()):t===o&&(e.preventDefault(),r.focus()))}),[a]),c=(0,r.useCallback)((function(){if(i(n.blockScroll),null!=o.current){var e=a().firstItem;document.activeElement!==e&&(null==e||e.focus())}}),[n.blockScroll,a]);return(0,r.useEffect)((function(){var t=null==e?void 0:e.current;return function(){i(!1),null==t||t.focus()}}),[e]),(0,r.useEffect)((function(){c()}),[c]),{ref:o,onKeyDown:l}}function i(e){e?document.body.setAttribute("data-modal-open","true"):document.body.removeAttribute("data-modal-open")}},25233:function(e,t,n){n.d(t,{bZ:function(){return v},FB:function(){return x},T2:function(){return C},rq:function(){return D},qM:function(){return w},MJ:function(){return k},Y9:function(){return b},kw:function(){return E},io:function(){return A},QP:function(){return y}});var r=n(81648),o=n(45721),i=n(23752),a=n(93577),l=n(9166),c=n(4094),u=n(51362),s=n(76881),d=n(20180),m=n(69746),f=n(47274);function p(e){const{fieldOptions:t}=(0,u.g)(e),n=(0,f.g)({...t,...e}),{value:i,...a}=n.input;return o.createElement("div",n.inputWrapper,o.createElement("input",(0,r.Z)({},a,{value:i,onChange:e.onChange})),t.invalid&&o.createElement("span",n.invalidIconWrapper,o.createElement(m.Z,(0,c.g)(n.invalidIconOptions))))}function h(e){const{onClose:t,...n}=e,a=(0,o.useRef)(null),{focusGuard:c,...u}=(0,l.g)(n);return(0,i.A)(t),o.createElement("div",u.backdrop,o.createElement("div",c),o.createElement("div",(0,r.Z)({},u.wrapper,{ref:a,onClick:function(e){e.stopPropagation(),a.current===e.target&&t()}}),e.children),o.createElement("div",c))}function g(e,t){const{onClose:n,children:i,...c}=e,u=(0,l.j)(),{ref:s,onKeyDown:d}=(0,a.P)(t);return o.createElement(h,(0,r.Z)({onClose:n},c),o.createElement("section",(0,r.Z)({},u,{ref:s,onKeyDown:d}),i))}const v=(0,o.memo)((0,o.forwardRef)(g));function k(e){const t=(0,l.e)(e.kind);return o.createElement("header",t.header,"destructive"===e.kind&&o.createElement("span",t.iconWrapper,o.createElement(d.Z,(0,c.g)(t.iconOptions))),e.children)}function b(e){const t=(0,l.f)(e.id);return o.createElement("h4",(0,r.Z)({"data-site-override":"clearMarginBottom"},t),e.children)}function C(e){const t=(0,l.a)(e.id);return o.createElement("div",t,e.children)}function y(e){return o.createElement("p",null,e.children)}function A(e){const t=(0,l.i)(e.htmlFor);return o.createElement("label",t,e.children)}function E(e){const{onChange:t,...n}=e,{fieldOptions:i}=(0,u.g)({invalid:Boolean(e.value)&&e.value!==e.confirmKey}),a=(0,l.h)({...i,...n});return o.createElement("div",a.inputWrapper,o.createElement(p,(0,r.Z)({},a.inputOptions,{onChange:t})))}function w(e){const t=(0,l.d)();return o.createElement("footer",t,e.children)}function D(e){const t=(0,l.b)();return o.createElement("span",t.button,o.createElement("button",(0,r.Z)({},(0,s.g)(t.btnOptions).button,e),e.children))}function x(e){const{kind:t,...n}=e,i=(0,l.c)(t);return o.createElement("button",(0,r.Z)({},(0,s.g)(i.btnOptions).button,n),e.children)}},1025:function(e,t,n){var r=n(81648),o=n(45721),i=n(77674),a=n(76881),l=n(80087),c=n(25233);t.Z=function(){const e=(0,o.useRef)(null),[t,n]=(0,o.useState)(!1),u=(0,o.useCallback)((()=>{n(!1)}),[]);return o.createElement(l.Z,null,o.createElement("button",(0,r.Z)({},(0,a.g)().button,{onClick:function(){n(!0)},ref:e}),"Confirm payment"),t&&(0,i.createPortal)(o.createElement(c.bZ,{bodyId:"non-destructiveAlert-body",headingId:"non-destructiveAlert-heading",id:"non-destructive-alert",onClose:u,ref:e},o.createElement(c.MJ,{kind:"non-destructive"},o.createElement(c.Y9,{id:"non-destructiveAlert-heading"},"Confirm payment")),o.createElement(c.T2,{id:"non-destructiveAlert-body"},o.createElement(c.QP,null,"Are you sure you want to make this payment?")),o.createElement(c.qM,null,o.createElement(c.rq,{onClick:u},"Cancel"),o.createElement(c.FB,{kind:"non-destructive"},"Confirm"))),document.body))}},81963:function(e,t,n){var r=n(81648),o=n(45721),i=n(77674),a=n(76881),l=n(80087),c=n(25233);t.Z=function(){const e=(0,o.useRef)(null),[t,n]=(0,o.useState)(!1),u=(0,o.useCallback)((()=>{n(!1)}),[]);return o.createElement(l.Z,null,o.createElement("button",(0,r.Z)({},(0,a.g)({sentiment:"danger"}).button,{onClick:function(){n(!0)},ref:e}),"Delete channel"),t&&(0,i.createPortal)(o.createElement(c.bZ,{bodyId:"destructiveAlert-body",headingId:"destructiveAlert-heading",id:"destructive-alert",onClose:u,ref:e},o.createElement(c.MJ,{kind:"destructive"},o.createElement(c.Y9,{id:"destructiveAlert-heading"},"Delete channel?")),o.createElement(c.T2,{id:"destructiveAlert-body"},o.createElement(c.QP,null,"Are you sure you want to delete this channel? This action cannot be undone.")),o.createElement(c.qM,null,o.createElement(c.rq,{onClick:u},"Cancel"),o.createElement(c.FB,{kind:"destructive"},"Delete"))),document.body))}},80087:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(45721),o={base:"base_M3w8",column:"column_mb9C base_M3w8",grid:"grid_EiLr base_M3w8"};const i={alignItems:"center",column:!1,gridCols:0,justifyContent:"space-between",textAlign:"center",type:"base"};function a(e){void 0===e&&(e=i);const t=e.type??i.type,n=e.gridColumns?`repeat(${e.gridColumns}, minmax(auto, max-content))`:"initial",a={alignItems:e.alignItems,gridTemplateColumns:n,justifyContent:e.justifyContent,textAlign:e.textAlign??"center",gap:e.gap??"1rem",columnGap:e.columnGap};return r.createElement("div",{className:o[t],style:a},e.children)}},72032:function(e,t,n){n.d(t,{dS:function(){return s},fK:function(){return u},C9:function(){return d},ZP:function(){return m}});var r=n(81648),o=n(45721),i=n(71397),a=n(61471),l="grid_cC7H";function c(e){return o.createElement("li",(0,i.a)({colSpan:2}),o.createElement(a.Z,e,e.children))}function u(e){return o.createElement(c,{href:e.href},e.children??"View on Github")}function s(e){return o.createElement(c,{href:e.href},"View on Figma")}function d(e){const{className:t,...n}=(0,i.g)({cols:12,gap:8});return o.createElement("ul",(0,r.Z)({className:`${t} ${l}`},n),e.children)}function m(e){const{figma:t,github:n}=e,{className:a,...c}=(0,i.g)({cols:12,gap:8});return o.createElement("ul",(0,r.Z)({className:`${a} ${l}`},c),n&&o.createElement(u,{href:n}),t&&o.createElement(s,{href:t}))}},27505:function(e,t,n){n(45721)},61471:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(45721),o=n(64965),i=n(4094),a=n(59393),l=n(79719);function c(e){const{href:t}=e,n=(0,o.g)({href:t}),c=(0,i.g)(n.iconOptions),u=t.includes("github")?a.Z:l.Z;return r.createElement("a",n.link,r.createElement(u,c),e.children)}},57775:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return m}});var r=n(81648),o=(n(45721),n(70167)),i=n(1025),a=n(81963),l=n(72032);n(27505);const c={tags:["alert","dialog","user confirmation"],title:"Confirm Dialog"},u=void 0,s={unversionedId:"reference/components/confirm-dialog",id:"reference/components/confirm-dialog",title:"Confirm Dialog",description:"Used to interrupt the user with a mandatory confirmation or action.",source:"@site/docs/reference/components/confirm-dialog.mdx",sourceDirName:"reference/components",slug:"/reference/components/confirm-dialog",permalink:"/docs/next/reference/components/confirm-dialog",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/reference/components/confirm-dialog.mdx",tags:[{label:"alert",permalink:"/docs/next/tags/alert"},{label:"dialog",permalink:"/docs/next/tags/dialog"},{label:"user confirmation",permalink:"/docs/next/tags/user-confirmation"}],version:"current",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["alert","dialog","user confirmation"],title:"Confirm Dialog"},sidebar:"reference",previous:{title:"Circular Progress",permalink:"/docs/next/reference/components/circular-progress"},next:{title:"Field Messages",permalink:"/docs/next/reference/components/field-message"}},d={},m=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Non-destructive",id:"non-destructive",level:3},{value:"Destructive",id:"destructive",level:3},{value:"Reference",id:"reference",level:2},{value:"Behavior",id:"behavior",level:2},{value:"Patterns",id:"patterns",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Accessibility",id:"accessibility",level:2}],f={toc:m};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",{className:"size-xxl"},"Used to interrupt the user with a mandatory confirmation or action."),(0,o.kt)(l.ZP,{github:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/Alert",figma:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsLinkBar"}),(0,o.kt)("h2",{id:"import"},"Import"),(0,o.kt)("p",null,"Confirm Dialog shares the same import as the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/reference/components/alert"},"Alert")," component."),(0,o.kt)("h2",{id:"anatomy"},"Anatomy"),(0,o.kt)("p",null,"Confirm Dialog shares the same anatomy as the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/reference/components/alert"},"Alert")," component."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"non-destructive"},"Non-destructive"),(0,o.kt)("p",null,"Use a non-destructive Confirm Dialog when you need a confirmation that does not result in a destructive behavior."),(0,o.kt)(i.Z,{mdxType:"BasicConfirmDialog"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'showLineNumbers title="Confirm Dialog Component."',showLineNumbers:!0,title:'"Confirm',Dialog:!0,'Component."':!0},"import { useCallback, useRef, useState } from 'react'\nimport { createPortal } from 'react-dom'\nimport { getButtonProps } from '@pluralsight/headless-styles'\nimport {\n  Alert,\n  AlertBody,\n  AlertActionButton,\n  AlertCancelButton,\n  AlertFooter,\n  AlertHeader,\n  AlertHeading,\n  AlertText,\n} from '../Alert'\n\nfunction NonDestructiveConfirmDialog(props) {\n  const triggerRef = useRef(null)\n  const [showAlert, setShowAlert] = useState(false)\n\n  const handleCloseAlert = useCallback(() => {\n    setShowAlert(false)\n  }, [])\n\n  function handleShowAlert() {\n    setShowAlert(true)\n  }\n\n  return (\n    <Container>\n      <button\n        {...getButtonProps().button}\n        onClick={handleShowAlert}\n        ref={triggerRef}\n      >\n        Confirm payment\n      </button>\n\n      {showAlert &&\n        createPortal(\n          <Alert\n            bodyId={props.bodyId}\n            headingId={props.headingId}\n            id={props.id}\n            onClose={handleCloseAlert}\n            ref={triggerRef}\n          >\n            <AlertHeader kind=\"non-destructive\">\n              <AlertHeading id={props.headingId}>\n                {props.heading || 'Confirm payment'}\n              </AlertHeading>\n            </AlertHeader>\n            <AlertBody id=\"non-destructiveAlert-body\">\n              <AlertText>\n                {props.text ||\n                  'Are you sure you would like to make this payment?'}\n              </AlertText>\n            </AlertBody>\n            <AlertFooter>\n              <AlertCancelButton onClick={handleCloseAlert}>\n                Cancel\n              </AlertCancelButton>\n              <AlertActionButton\n                kind=\"non-destructive\"\n                onClick={props.onConfirm}\n              >\n                Confirm\n              </AlertActionButton>\n            </AlertFooter>\n          </Alert>,\n          document.body\n        )}\n    </Container>\n  )\n}\n\nexport default NonDestructiveConfirmDialog\n")),(0,o.kt)("h3",{id:"destructive"},"Destructive"),(0,o.kt)("p",null,"When you need a confirmation from a user that will result in a destructive action."),(0,o.kt)(a.Z,{mdxType:"DestructiveConfirmDialog"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can copy and paste the example from the ",(0,o.kt)("a",{parentName:"p",href:"#non-destructive"},"non-destructive section")," and pass ",(0,o.kt)("inlineCode",{parentName:"p"},'kind="destructive"')," to all the components that accept the ",(0,o.kt)("inlineCode",{parentName:"p"},"kind")," option to get this same result.")),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("p",null,"Confirm Dialog shares the same reference information as the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/reference/components/alert#reference"},"Alert Component"),"."),(0,o.kt)("h2",{id:"behavior"},"Behavior"),(0,o.kt)("p",null,"Confirm dialogs are to be used to interrupt the user's task with important, critical, or warning information. This is the Pluralsight themed version of a browser's native ",(0,o.kt)("inlineCode",{parentName:"p"},"window.confirm()")," function."),(0,o.kt)("h3",{id:"patterns"},"Patterns"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do")," use the Confirm Dialog when you need the user to confirm a decision."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Don't")," use the Modal when you need the user to confirm a decision."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do")," keep Confirm Dialog layout unaltered."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Don't")," manipulate or add any additional elements/styles to the Confirm Dialog."),(0,o.kt)("h3",{id:"usage-1"},"Usage"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do")," use sparingly in a user experience."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Don't")," abuse the use of this Dialog by using multiple times within a page."),(0,o.kt)("h2",{id:"accessibility"},"Accessibility"),(0,o.kt)("p",null,"The Pando Confirm Dialog, Button, and Icon APIs combined with semantic HTML allow the Confirm Dialog to be fully accessible and screen-readable."))}p.isMDXComponent=!0}}]);