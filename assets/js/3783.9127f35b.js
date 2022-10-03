"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3783],{96122:function(t,e,n){const a=n(86521);e.Z=function(t){return(0,a.jsx)("svg",{"aria-label":"NPM logo",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...t,children:(0,a.jsx)("path",{d:"M12 12.444h-1.111v-2.222H12v2.222ZM22 8v6.667H12v1.11H7.556v-1.11H2V8h20ZM7.556 9.111H3.11v4.445h2.222v-3.334h1.111v3.334h1.112V9.11Zm5.555 0H8.667v5.556h2.222v-1.111h2.222V9.11Zm7.778 0h-6.667v4.445h2.222v-3.334h1.112v3.334h1.11v-3.334h1.112v3.334h1.11V9.11Z"})})}},17853:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.TabsProvider=e.TabsContext=void 0;const a=n(86521),s=n(45721),o=n(81178),i=n(8427);e.TabsContext=(0,s.createContext)((0,i.normalizeData)()),e.TabsProvider=function(t){const{data:n}=t,r=(0,s.useMemo)((()=>(0,i.setupData)(n)),[n]),[u,c]=(0,s.useReducer)(o.reducer,r),l=(0,s.useMemo)((()=>({...u,dispatch:c})),[u,c]);return(0,a.jsx)(e.TabsContext.Provider,{value:l,children:t.children})}},6388:function(t,e,n){e.uR=e.IT=e.xD=e.hp=void 0;const a=n(80565),s=n(45721),o=n(17853),i=n(81178);e.hp=function(){const{dispatch:t,refList:e,tabList:n,tabFocus:r}=(0,s.useContext)(o.TabsContext),u=(0,s.useCallback)((e=>{const a=e.key,s=n.length;if("ArrowRight"===a){const e=r+1;if(e>=s)return void(0,i.setTabFocusDispatch)(t,0);(0,i.setTabFocusDispatch)(t,e)}else if("ArrowLeft"===a){const e=r-1;if(e<0)return void(0,i.setTabFocusDispatch)(t,s-1);(0,i.setTabFocusDispatch)(t,e)}}),[t,n,r]);return(0,s.useEffect)((()=>{r>=0&&((0,i.setFocusDispatch)(t,r),e[r]?.focus())}),[t,e,r]),(0,s.useMemo)((()=>a.tabsHook?{onKeyDown:u,tabList:n}:null),[u,n])},e.xD=function(t){const e=(0,s.useRef)(null),{dispatch:n,tabList:r,tabs:u}=(0,s.useContext)(o.TabsContext),{onClick:c}={onClick:t?.onClick??null},l=(0,s.useCallback)((t=>{const e=t.currentTarget.id;c&&c(e),(0,i.setActiveDispatch)(n,e),(0,i.setTabFocusDispatch)(n,r.indexOf(e))}),[n,c,r]);return(0,s.useEffect)((()=>{null!==e.current&&(0,i.setRefListDispatch)(n,e.current)}),[n]),(0,s.useMemo)((()=>a.tabsHook?{onClick:l,ref:e,tabs:u}:null),[l,u])},e.IT=function(){const{panelList:t}=(0,s.useContext)(o.TabsContext);return(0,s.useMemo)((()=>a.tabsHook?{panelList:t}:null),[t])},e.uR=function(){const{panels:t}=(0,s.useContext)(o.TabsContext);return(0,s.useMemo)((()=>a.tabsHook?{panels:t}:null),[t])}},81178:function(t,e){function n(t){return t?0:-1}Object.defineProperty(e,"__esModule",{value:!0}),e.reducer=e.setTabFocusDispatch=e.setRefListDispatch=e.setFocusDispatch=e.setActiveDispatch=e.actionTypes=void 0,e.actionTypes={SET_ACTIVE:"setActive",SET_FOCUS:"setFocus",SET_REF_LIST:"setRefList",SET_TAB_FOCUS:"setTabFocus"},e.setActiveDispatch=function(t,n){t({type:e.actionTypes.SET_ACTIVE,id:n})},e.setFocusDispatch=function(t,n){t({type:e.actionTypes.SET_FOCUS,idx:n})},e.setRefListDispatch=function(t,n){t({type:e.actionTypes.SET_REF_LIST,el:n})},e.setTabFocusDispatch=function(t,n){t({type:e.actionTypes.SET_TAB_FOCUS,idx:n})},e.reducer=function(t,a){switch(a.type){case e.actionTypes.SET_ACTIVE:return t.tabList.reduce(((t,e)=>{const s=e===a.id,o=`${e}:panel`;return{...t,tabs:{...t.tabs,[e]:{...t.tabs[e],"aria-selected":s,tabIndex:n(s)}},panels:{...t.panels,[o]:{...t.panels[o],"aria-hidden":!s,"aria-expanded":s,tabIndex:n(s)}}}}),t);case e.actionTypes.SET_FOCUS:return t.tabList.reduce(((t,e,s)=>{const o=s===a.idx;return{...t,tabs:{...t.tabs,[e]:{...t.tabs[e],tabIndex:n(o)}}}}),t);case e.actionTypes.SET_REF_LIST:return{...t,refList:[...t.refList,a.el]};case e.actionTypes.SET_TAB_FOCUS:return{...t,tabFocus:a.idx};default:throw new Error("Unable to update useTabs state due to an internal error.")}}},8427:function(t,e){function n(){return{panelList:[],panels:{},tabList:[],tabFocus:-1,tabs:{},refList:[],dispatch:()=>null}}Object.defineProperty(e,"__esModule",{value:!0}),e.setupData=e.normalizeData=void 0,e.normalizeData=n,e.setupData=function(t){return t.reduce(((t,e,n)=>{const{id:a}=e,s=0===n,o=`${a}:panel`;return{...t,tabList:[...t.tabList,a],tabs:{...t.tabs,[a]:{"aria-selected":!!s,"aria-controls":o,id:a,label:e.label,role:"tab",tabIndex:s?0:-1}},panelList:[...t.panelList,o],panels:{...t.panels,[o]:{"aria-expanded":!!s,"aria-hidden":!s,"aria-labelledby":a,id:o,role:"tabpanel",tabIndex:s?0:-1}}}}),{panelList:[],panels:{},tabList:[],tabFocus:-1,tabs:{},refList:[],dispatch:()=>null})}},794:function(t,e,n){n.r(e),e.default={btnBase:"btnBase_DtNf",actionButton:"actionButton_A85B",defaultButton:"defaultButton_MrN1",dangerButton:"dangerButton_NMiY",filledButton:"filledButton_Pk9Q btnBase_DtNf",outlineButton:"outlineButton_P8ge btnBase_DtNf",textButton:"textButton_cYmR btnBase_DtNf",mButton:"mButton_TBC_",lButton:"lButton_QMKP"}},57449:function(t,e,n){n.r(e),e.default={actionIconButton:"actionIconButton_MqnL",defaultIconButton:"defaultIconButton_L60t",squareIconButton:"squareIconButton_e0tt",roundIconButton:"roundIconButton_ZEKe",textIconButton:"textIconButton_O7fz",mIconButton:"mIconButton_cD64",lIconButton:"lIconButton_gzvP"}},9272:function(t,e,n){n.r(e),e.default={tabWrapper:"tabWrapper_qznU",tabList:"tabList_MAzR",tabBase:"tabBase_SDrT",mTab:"mTab_vlGI tabBase_SDrT",sTab:"sTab_eGfm tabBase_SDrT",tabPanel:"tabPanel_KK7j"}},26261:function(t,e,n){n.r(e),e.default={textLinkBase:"textLinkBase_mmlQ"}},70765:function(t,e,n){e.B=void 0;const a=n(6495),s=n(17819),o=n(82499),i=a.__importDefault(n(794)),r=a.__importDefault(n(57449));e.B=function(t){const e=(0,o.getDefaultIconButtonOptions)(t),n=(0,o.createIconButtonProps)(e),{sentimentClass:a,sizeClass:u,usageClass:c}=(0,o.getIconButtonClasses)(e),{tech:l}=e;return{...n,button:{...n.button,...(0,s.createClassProp)(l,{defaultClass:`ps-icon-btn ${i.default.btnBase} ${r.default[c]} ${r.default[a]} ${r.default[u]}`,svelteClass:`ps-icon-btn btnBase ${c} ${a} ${u}`})}}}},82499:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.createIconButtonProps=e.getIconButtonClasses=e.getDefaultIconButtonOptions=void 0;const n="button with icon",a=!1,s="action",o="l",i="square",r="";function u(t){return t?`${t}IconButton`:""}e.getDefaultIconButtonOptions=function(t){return{ariaLabel:t?.ariaLabel??n,disabled:t?.disabled??a,sentiment:t?.sentiment??s,usage:t?.usage??i,size:t?.size??o,tech:t?.tech??r}},e.getIconButtonClasses=function(t){return{sentimentClass:u(t.sentiment),sizeClass:u(t.size),usageClass:u(t.usage)}},e.createIconButtonProps=function(t){return{iconOptions:{ariaHidden:!0,ariaLabel:"button with icon",size:(e=t.size,"m"===e?"s":"m"),tech:t.tech},button:{"aria-label":t.ariaLabel,"data-disabled":t.disabled}};var e}},7759:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.createTabProps=e.getTabClasses=e.getDefaultTabOptions=e.defaultTabOptions=void 0,e.defaultTabOptions={size:"m",tech:""},e.getDefaultTabOptions=function(t){return{size:t?.size??e.defaultTabOptions.size,tech:t?.tech??e.defaultTabOptions.tech}},e.getTabClasses=function(t){return{sizeClass:`${t}Tab`}},e.createTabProps=function(){return{tabList:{role:"tablist"},tab:{"aria-selected":!1,role:"tab",tabIndex:-1},tabPanel:{"aria-expanded":!0,"aria-hidden":!1,role:"tabpanel"},panelWrapper:{},wrapper:{}}}},24632:function(t,e,n){e.K=void 0;const a=n(6495),s=n(80565),o=n(17819),i=n(7759),r=a.__importDefault(n(9272));e.K=function(t){const e=(0,i.getDefaultTabOptions)(t),n=(0,i.createTabProps)(),{sizeClass:a}=(0,i.getTabClasses)(e.size);return s.tabs?{...n,wrapper:{...n.wrapper,...(0,o.createClassProp)(e.tech,{defaultClass:`ps-tab-wrapper ${r.default.tabWrapper}`,svelteClass:"tabWrapper"})},tabList:{...n.tabList,...(0,o.createClassProp)(e.tech,{defaultClass:`ps-tab-list ${r.default.tabList}`,svelteClass:"tabList"})},tab:{...n.tab,...(0,o.createClassProp)(e.tech,{defaultClass:`ps-tab ${r.default[a]}`,svelteClass:`tabBase ${a}`})},tabPanel:{...n.tabPanel,...(0,o.createClassProp)(e.tech,{defaultClass:`ps-tab-tabPanel ${r.default.tabPanel}`,svelteClass:"tabPanel"})}}:null}},95256:function(t,e){function n(t){return/^https?:\/\//.test(t)}function a(t){return{ariaHidden:!1,ariaLabel:"(opens in a new window)",customSize:e.textLinkIconSize,tech:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.createTextLinkProps=e.getDefaultTextLinkOptions=e.defaultTextLinkOptions=e.textLinkIconSize=void 0,e.textLinkIconSize="1em",e.defaultTextLinkOptions={href:"",tech:""},e.getDefaultTextLinkOptions=function(t){return{href:t?.href??e.defaultTextLinkOptions.href,tech:t?.tech??e.defaultTextLinkOptions.tech}},e.createTextLinkProps=function(t,e){const s=function(t){return n(t)?{rel:"noopener external",target:"_blank"}:{}}(t);return{link:{href:t,...s},...n(t)&&{iconOptions:a(e)}}}},37541:function(t,e,n){e.j=void 0;const a=n(6495),s=n(17819),o=n(95256),i=a.__importDefault(n(26261));e.j=function(t){const e=(0,o.getDefaultTextLinkOptions)(t),n=(0,o.createTextLinkProps)(e.href,e.tech);return{...n,link:{...n.link,...(0,s.createClassProp)(e.tech,{defaultClass:`ps-text-link ${i.default.textLinkBase}`,svelteClass:"textLinkBase"})}}}},79550:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.modal=e.tabsHook=e.tabs=e.preloadImgHook=e.menu=void 0;const a=n(86074),s=(0,a.createFlag)("experimental"),o=(0,a.createFlag)("next");e.menu=o,e.preloadImgHook=o,e.tabs=o,e.tabsHook=o,e.modal=s},80565:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.warning=e.modal=e.tabsHook=e.tabs=e.preloadImgHook=e.menu=void 0;var a=n(79550);Object.defineProperty(e,"menu",{enumerable:!0,get:function(){return a.menu}}),Object.defineProperty(e,"preloadImgHook",{enumerable:!0,get:function(){return a.preloadImgHook}}),Object.defineProperty(e,"tabs",{enumerable:!0,get:function(){return a.tabs}}),Object.defineProperty(e,"tabsHook",{enumerable:!0,get:function(){return a.tabsHook}}),Object.defineProperty(e,"modal",{enumerable:!0,get:function(){return a.modal}});var s=n(86074);Object.defineProperty(e,"warning",{enumerable:!0,get:function(){return s.warning}})},86074:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.warning=e.createFlag=void 0;const n=Boolean("false")&&!1;e.createFlag=function(t){return!!n||function(t){return"next"===t}(t)},e.warning=function(t,e){t||console.error(e)}}}]);