"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6557],{85826:function(t,e,n){n.d(e,{ETn:function(){return c.Z},Ncx:function(){return g.Z},NeF:function(){return a.Z},Oqj:function(){return b.Z},T67:function(){return h.Z},Tk0:function(){return B.Z},Two:function(){return O.Z},VpB:function(){return p.Z},XCv:function(){return o.Z},Xl7:function(){return d.Z},_8t:function(){return _.Z},cMR:function(){return w.Z},dTc:function(){return u.Z},h0n:function(){return v.Z},jJm:function(){return i.Z},nQG:function(){return N.Z},o1U:function(){return r.Z},o_L:function(){return l.Z},pJl:function(){return y.Z},r7p:function(){return T.Z},rE2:function(){return D.Z},tEF:function(){return f.Z},tvw:function(){return k.Z},uMt:function(){return m.Z},vdY:function(){return C.Z},xbZ:function(){return s.Z}});var o=n(49240),a=n(65701),r=n(17307),i=n(15817),u=n(37735),l=n(94618),s=n(22638),c=n(2111),p=n(96598),d=n(37330),f=n(17650),m=n(32392),g=n(93390),h=n(70104),v=n(63353),k=n(86995),b=n(98768),B=n(91256),D=n(82986),N=n(14430),O=n(71080),y=n(67405),_=n(13582),w=n(87001),C=n(98389),T=n(57012)},95777:function(t,e,n){n.d(e,{Z:function(){return f}});var o=n(20411),a=n(93131),r=n(51790),i=n(85826),u="icon_t5Zl",l="npmIcon_uVGz icon_t5Zl",s="link_GZb0";var c=o.createElement("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 576 512",focusable:"false",height:"2rem",width:"2rem",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M288 288h-32v-64h32v64zm288-128v192H288v32H160v-32H0V160h576zm-416 32H32v128h64v-96h32v96h32V192zm160 0H192v160h64v-32h64V192zm224 0H352v128h64v-96h32v96h32v-96h32v96h32V192z"})),p=(0,a.getButtonProps)({kind:"weak",size:"s"}).className,d=(0,r.L)({size:"s"});function f(t){var e="github"===t.icon,n=e?u:l,a=e?o.createElement(i.ETn,d):c;return o.createElement("a",{className:p+" "+s,href:t.href,rel:"noopener",target:"_blank"},o.createElement("span",{className:n},a)," ",t.children)}},55829:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var o=n(60953),a=n(59005),r=(n(20411),n(70167)),i=n(95777),u=["components"],l={tags:["Development","Packages","React","React utils","useFocusTrap"]},s="useFocusTrap",c={unversionedId:"development/react-utils/use-focus-trap",id:"development/react-utils/use-focus-trap",title:"useFocusTrap",description:"A custom hook for trapping focus within Modal and Dialog components.",source:"@site/docs/development/react-utils/use-focus-trap.mdx",sourceDirName:"development/react-utils",slug:"/development/react-utils/use-focus-trap",permalink:"/docs/development/react-utils/use-focus-trap",draft:!1,editUrl:"https://github.com/pluralsight/tva/edit/main/website/docs/development/react-utils/use-focus-trap.mdx",tags:[{label:"Development",permalink:"/docs/tags/development"},{label:"Packages",permalink:"/docs/tags/packages"},{label:"React",permalink:"/docs/tags/react"},{label:"React utils",permalink:"/docs/tags/react-utils"},{label:"useFocusTrap",permalink:"/docs/tags/use-focus-trap"}],version:"current",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["Development","Packages","React","React utils","useFocusTrap"]},sidebar:"development",previous:{title:"useEscToClose",permalink:"/docs/development/react-utils/use-esc-to-close"},next:{title:"Roadmap",permalink:"/docs/development/discover-more/roadmap"}},p={},d=[{value:"Import",id:"import",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Example usage in Component",id:"example-usage-in-component",level:2}],f={toc:d};function m(t){var e=t.components,n=(0,a.Z)(t,u);return(0,r.kt)("wrapper",(0,o.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"usefocustrap"},"useFocusTrap"),(0,r.kt)("p",null,"A custom hook for trapping focus within Modal and Dialog components."),(0,r.kt)(i.Z,{icon:"github",href:"https://github.com/pluralsight/tva/blob/main/packages/react-utils/src/hooks/useFocusTrap.ts",mdxType:"ViewSourceLink"},"View source"),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useFocusTrap } from '@pluralsight/react-utils'\n")),(0,r.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,r.kt)("p",null,"To use ",(0,r.kt)("inlineCode",{parentName:"p"},"useFocusTrap")," you only need to pass in a ",(0,r.kt)("inlineCode",{parentName:"p"},"ref")," Object that is attached to the Button that triggers the dialog/modal to open."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const { ref, onKeydown, setupFocusTrap } = useFocusTrap(triggerRef)\n")),(0,r.kt)("h2",{id:"return-value"},"Return Value"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useFocusTrap")," hook returns an Object with the following properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ref"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RefObject<HTMLElement>")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"ref")," to place on the container component of your dialog/modal (i.e. the element that holds the content users see).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"setupFocusTrap"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Function")),(0,r.kt)("td",{parentName:"tr",align:null},"A setup function to use in a ",(0,r.kt)("inlineCode",{parentName:"td"},"useEffect")," onMount hook (i.e. empty Array of dependencies)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onKeydown"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Function")),(0,r.kt)("td",{parentName:"tr",align:null},"An event handler to place on the container component of your dialog/modal via the ",(0,r.kt)("inlineCode",{parentName:"td"},"onKeyDown")," property.")))),(0,r.kt)("h2",{id:"example-usage-in-component"},"Example usage in Component"),(0,r.kt)("p",null,"Here is an example of how you might use ",(0,r.kt)("inlineCode",{parentName:"p"},"useFocusTrap")," for an Alert Dialog combined with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/development/react-utils/use-esc-to-close"},"useEscToClose")," hook, and ",(0,r.kt)("a",{parentName:"p",href:"/docs/development/headless-styles/intro"},"headless-styles")," package."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"When using ",(0,r.kt)("inlineCode",{parentName:"p"},"useFocusTrap")," within a component, make sure you are wrapping the component in ",(0,r.kt)("inlineCode",{parentName:"p"},"forwardRef")," so you can safely pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"triggerRef")," from the parent into the hook."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Not doing this will prevent the hook from placing the focus back on the trigger when the modal is closed (a11y error)."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"function AlertDialog(props, triggerRef) {\n  const { onClose, ...alertProps } = props\n  const wrapperRef = useRef(null)\n  const alert = getAlertDialogProps(alertProps)\n  const { cancelBtnProps, primaryBtnProps } = getButtonStyleProps(props.kind, {\n    cancel: alert.cancelBtnOptions,\n    primary: alert.primaryBtnOptions,\n  })\n  // highlight-next-line\n  const { ref, onKeydown, setupFocusTrap } = useFocusTrap(triggerRef)\n\n  function handleBackdropClick(event) {\n    event.stopPropagation()\n    if (wrapperRef.current === event.target) {\n      onClose()\n    }\n  }\n\n  useEscToClose(onClose)\n\n  useEffect(() => {\n    // highlight-next-line\n    setupFocusTrap()\n  }, [setupFocusTrap])\n\n  return (\n    <div {...alert.backdrop}>\n      <div {...alert.focusGuard} />\n\n      <div {...alert.wrapper} ref={wrapperRef} onClick={handleBackdropClick}>\n        // highlight-next-line\n        <section {...alert.section} ref={ref} onKeyDown={onKeydown}>\n          <header {...alert.alertTitle}>Example Alert</header>\n          <p {...alert.alertBody}>\n            Performing this action will be permanent. Are you sure you want to\n            do it?\n          </p>\n          <footer {...alert.buttonGroup}>\n            <button {...cancelBtnProps} onClick={onClose}>\n              Cancel\n            </button>\n            <button {...primaryBtnProps}>Action</button>\n          </footer>\n        </section>\n      </div>\n\n      <div {...alert.focusGuard} />\n    </div>\n  )\n}\n\n// highlight-next-line\nconst AlertDialogEl = memo(forwardRef(NormalAlert))\n")))}m.isMDXComponent=!0},5840:function(t,e,n){n.r(e),e.default={base:"base_cs3A",text:"text_ytme base_cs3A",textWeak:"textWeak_Qyq3 base_cs3A",weak:"weak_TRjD base_cs3A",medium:"medium_Tahr base_cs3A",strong:"strong_PIlR base_cs3A",xs:"xs_zDPu base_cs3A",s:"s_NbmH base_cs3A",m:"m_URfZ base_cs3A",l:"l__coW base_cs3A",textDanger:"textDanger_ZEQS base_cs3A",mediumDanger:"mediumDanger_tO8O base_cs3A",strongDanger:"strongDanger_aSX8 base_cs3A",baseIconButton:"baseIconButton_eguX",defaultIconButton:"defaultIconButton_GW6A baseIconButton_eguX",roundIconButton:"roundIconButton_EznD baseIconButton_eguX",light:"light_cEIQ"}},93131:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.getButtonProps=e.getDangerButtonProps=void 0;const o=n(94550),a=n(11445),r=n(84331),i=(0,o.__importDefault)(n(5840));function u(t,e){return Object.assign(Object.assign({},(0,a.createClassProp)(t,e)),{type:"button"})}e.getDangerButtonProps=function(t){const e=(0,r.getDefaultDangerOptions)(t),{kind:n,size:o}=e,a=`${n}Danger`;return u(e.tech,{defaultClass:`ps-danger-btn ${i.default[a]} ${i.default[o]}`,svelteClass:`base ${n}Danger ${o}`})},e.getButtonProps=function(t){const e=(0,r.getDefaultOptions)(t),{kind:n,size:o}=e;return u(e.tech,{defaultClass:`ps-btn ${i.default[n]} ${i.default[o]}`,svelteClass:`base ${n} ${o}`})}},84331:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.getIconButtonReturnProps=e.getButtonIconOptions=e.getDefaultDangerIconButtonOptions=e.defaultDangerIconButtonOptions=e.getDefaultIconButtonOptions=e.defaultIconButtonOptions=e.getDefaultDangerOptions=e.defaultDangerButtonOptions=e.getDefaultOptions=e.defaultButtonOptions=void 0,e.defaultButtonOptions={kind:"text",size:"m",tech:""},e.getDefaultOptions=function(t){var n,o,a;return{kind:null!==(n=null==t?void 0:t.kind)&&void 0!==n?n:e.defaultButtonOptions.kind,size:null!==(o=null==t?void 0:t.size)&&void 0!==o?o:e.defaultButtonOptions.size,tech:null!==(a=null==t?void 0:t.tech)&&void 0!==a?a:e.defaultButtonOptions.tech}},e.defaultDangerButtonOptions={kind:"text",size:"m",tech:""},e.getDefaultDangerOptions=function(t){var n,o,a;return{kind:null!==(n=null==t?void 0:t.kind)&&void 0!==n?n:e.defaultDangerButtonOptions.kind,size:null!==(o=null==t?void 0:t.size)&&void 0!==o?o:e.defaultDangerButtonOptions.size,tech:null!==(a=null==t?void 0:t.tech)&&void 0!==a?a:e.defaultDangerButtonOptions.tech}},e.defaultIconButtonOptions={kind:"text",size:"m",tech:"",variant:"default",ariaLabel:""},e.getDefaultIconButtonOptions=function(t){var n,o,a,r,i;return{kind:null!==(n=null==t?void 0:t.kind)&&void 0!==n?n:e.defaultIconButtonOptions.kind,size:null!==(o=null==t?void 0:t.size)&&void 0!==o?o:e.defaultIconButtonOptions.size,tech:null!==(a=null==t?void 0:t.tech)&&void 0!==a?a:e.defaultIconButtonOptions.tech,ariaLabel:null!==(r=null==t?void 0:t.ariaLabel)&&void 0!==r?r:e.defaultIconButtonOptions.ariaLabel,variant:null!==(i=null==t?void 0:t.variant)&&void 0!==i?i:e.defaultIconButtonOptions.variant}},e.defaultDangerIconButtonOptions=Object.assign(Object.assign({},e.defaultDangerButtonOptions),{variant:"default",ariaLabel:""}),e.getDefaultDangerIconButtonOptions=function(t){var n,o,a,r,i;return{kind:null!==(n=null==t?void 0:t.kind)&&void 0!==n?n:e.defaultDangerIconButtonOptions.kind,size:null!==(o=null==t?void 0:t.size)&&void 0!==o?o:e.defaultDangerIconButtonOptions.size,tech:null!==(a=null==t?void 0:t.tech)&&void 0!==a?a:e.defaultDangerIconButtonOptions.tech,ariaLabel:null!==(r=null==t?void 0:t.ariaLabel)&&void 0!==r?r:e.defaultDangerIconButtonOptions.ariaLabel,variant:null!==(i=null==t?void 0:t.variant)&&void 0!==i?i:e.defaultDangerIconButtonOptions.variant}};const n={xs:"s",s:"m",m:"m",l:"l"};function o(t,e){return{ariaHidden:!0,ariaLabel:"",size:n[t],tech:e}}e.getButtonIconOptions=o,e.getIconButtonReturnProps=function(t){return{button:{"aria-label":t.ariaLabel,type:"button"},iconOptions:o(t.size,t.tech)}}}}]);