"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[336],{6115:function(e,t,n){const o=n(86521);t.Z=function(e){return(0,o.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg","aria-label":"figma icon",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.25 5.5A4.25 4.25 0 0 1 8.5 1.25h7A4.25 4.25 0 0 1 17.912 9a4.25 4.25 0 1 1-5.162 6.74v3.76A4.25 4.25 0 1 1 6.088 16a4.245 4.245 0 0 1-1.838-3.5c0-1.452.728-2.733 1.838-3.5A4.245 4.245 0 0 1 4.25 5.5Zm4.25 9.75h2.75v-5.5H8.5a2.75 2.75 0 1 0 0 5.5Zm2.75 1.5H8.5a2.75 2.75 0 1 0 2.75 2.75v-2.75Zm7-11.25a2.75 2.75 0 0 1-2.75 2.75h-2.75v-5.5h2.75a2.75 2.75 0 0 1 2.75 2.75ZM15.5 9.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Zm-7-1.5h2.75v-5.5H8.5a2.75 2.75 0 0 0 0 5.5Z"})})}},31026:function(e,t,n){const o=n(86521);t.Z=function(e){return(0,o.jsx)("svg",{"aria-label":"github logo",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12a10 10 0 0 0-20 0Z"})})}},67235:function(e,t,n){n.d(t,{Z:function(){return i}});var o=n(45721),r={base:"base_M3w8",column:"column_mb9C base_M3w8",grid:"grid_EiLr base_M3w8"};const a={alignItems:"center",column:!1,gridCols:0,justifyContent:"space-between",textAlign:"center",type:"base"};function i(e){void 0===e&&(e=a);const t=e.type??a.type,n=e.gridColumns?`repeat(${e.gridColumns}, minmax(auto, max-content))`:"initial",i={alignItems:e.alignItems,gridTemplateColumns:n,justifyContent:e.justifyContent,textAlign:e.textAlign??"center",gap:e.gap??"1rem",columnGap:e.columnGap};return o.createElement("div",{className:r[t],style:i},e.children)}},95428:function(e,t,n){n.d(t,{Z:function(){return s}});var o=n(81648),r=n(45721),a=n(17493),i=n(69477),l="grid_cC7H";function d(e){return r.createElement("li",(0,a.a)({colSpan:2}),r.createElement(i.Z,e,e.children))}function s(e){const{figma:t,github:n}=e,{className:i,...s}=(0,a.g)({cols:12,gap:8});return r.createElement("ul",(0,o.Z)({className:`${i} ${l}`},s),n&&r.createElement(d,{href:n},"View on Github"),t&&r.createElement(d,{href:t},"Figma Design"))}},25302:function(e,t,n){n(45721)},88331:function(e,t,n){n.d(t,{Z:function(){return v}});var o=n(81648),r=n(45721),a=n(39636),i=n(78338),l=n(17493),d=n(67235),s=n(96261);function c(e){const{onClick:t,...n}=e,i=(0,s.g)(n),{value:l,...d}=(0,a.g)({...n,value:e.label}),{checked:c,...u}=i.input;return r.createElement("label",i.radioContainer,t&&r.createElement("input",(0,o.Z)({},u,{onChange:t,checked:c})),!t&&r.createElement("input",(0,o.Z)({},u,{defaultChecked:c})),r.createElement("span",i.radioControl),r.createElement("span",d,l))}function u(e){const{value:t,...n}=(0,a.g)(e);return r.createElement("label",(0,o.Z)({},n,{style:{display:"initial"}}),t)}function m(){const{control:e,fieldOptions:t}=(0,i.g)();return r.createElement("div",(0,o.Z)({},e,(0,l.a)({colSpan:6})),r.createElement(u,{htmlFor:"checked-example",value:"checked:"}),r.createElement(c,(0,o.Z)({},t,{checked:!0})))}function p(){const{control:e,fieldOptions:t}=(0,i.g)({disabled:!0});return r.createElement("div",(0,o.Z)({},e,(0,l.a)({colSpan:6})),r.createElement(u,{htmlFor:"disabled-example",value:"disabled:"}),r.createElement(c,t))}function f(){const{control:e,fieldOptions:t}=(0,i.g)({invalid:!0});return r.createElement("div",(0,o.Z)({},e,(0,l.a)({colSpan:6})),r.createElement(u,{htmlFor:"invalid-example",value:"invalid:"}),r.createElement(c,(0,o.Z)({},t,{checked:!0})))}function g(){const{control:e,fieldOptions:t}=(0,i.g)({readOnly:!0});return r.createElement("div",(0,o.Z)({},e,(0,l.a)({colSpan:6})),r.createElement(u,{htmlFor:"readOnly-example",value:"readOnly:"}),r.createElement(c,t))}function h(e){const{control:t,fieldOptions:n}=(0,i.g)({required:!0});return r.createElement("div",(0,o.Z)({},t,(0,l.a)({colSpan:6})),r.createElement(u,{htmlFor:"required-example",value:"required:"}),r.createElement(c,(0,o.Z)({},n,{checked:e.checked,onClick:e.onClick})))}var v=function(){const[e,t]=(0,r.useState)(!1);return r.createElement(d.Z,null,r.createElement("div",(0,o.Z)({"data-site-override":"initialTextAlign"},(0,l.g)({cols:12,gap:16})),r.createElement(m,null),r.createElement(p,null),r.createElement(f,null),r.createElement(g,null),r.createElement(h,{checked:e,onClick:function(e){t(e.target.checked)}})))}},69477:function(e,t,n){n.d(t,{Z:function(){return d}});var o=n(45721),r=n(60146),a=n(59280),i=n(31026),l=n(6115);function d(e){const{href:t}=e,n=(0,r.g)({href:t}),d=(0,a.g)(n.iconOptions),s=t.includes("github")?i.Z:l.Z;return o.createElement("a",n.link,o.createElement(s,d),e.children)}},45848:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return p},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var o=n(81648),r=(n(45721),n(70167)),a=n(88331),i=n(95428);n(25302);const l={tags:["single-select","field","form"],title:"Radio"},d=void 0,s={unversionedId:"reference/components/radio",id:"version-0.4.1/reference/components/radio",title:"Radio",description:"Used when when only one choice may be selected from a series of options.",source:"@site/versioned_docs/version-0.4.1/reference/components/radio.mdx",sourceDirName:"reference/components",slug:"/reference/components/radio",permalink:"/docs/reference/components/radio",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/versioned_docs/version-0.4.1/reference/components/radio.mdx",tags:[{label:"single-select",permalink:"/docs/tags/single-select"},{label:"field",permalink:"/docs/tags/field"},{label:"form",permalink:"/docs/tags/form"}],version:"0.4.1",lastUpdatedBy:"tim-roberts1",frontMatter:{tags:["single-select","field","form"],title:"Radio"},sidebar:"reference",previous:{title:"Progress",permalink:"/docs/reference/components/progress"},next:{title:"Select",permalink:"/docs/reference/components/select"}},c={},u=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Radio",id:"basic-radio",level:3},{value:"States",id:"states",level:3},{value:"Reference",id:"reference",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Behavior",id:"behavior",level:2},{value:"Layout",id:"layout",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Accessbility",id:"accessbility",level:2}],m={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",{className:"size-xxl"},"Used when when only one choice may be selected from a series of options."),(0,r.kt)(i.Z,{github:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/Radio",figma:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsLinkBar"}),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getRadioProps } from '@pluralsight/headless-styles'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface RadioOptions {\n  checked: boolean\n  disabled?: boolean\n  id: string\n  invalid?: boolean\n  name: string\n  readOnly?: boolean\n  required?: boolean\n  value: string\n}\n\ngetRadioProps(options?: RadioOptions)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import type { RadioOptions } from '@pluralsight/headless-styles/types'\n")),(0,r.kt)("h2",{id:"anatomy"},"Anatomy"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Container"),(0,r.kt)("li",{parentName:"ol"},"Control"),(0,r.kt)("li",{parentName:"ol"},"Input"),(0,r.kt)("li",{parentName:"ol"},"Label")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"basic-radio"},"Basic Radio"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Radio() {\n  const { control, fieldOptions } = getFormControlProps({\n    groupType: 'radiogroup',\n  })\n  const radioProps = getRadioProps({\n    ...fieldOptions,\n    checked: true,\n  })\n  const { value, ...labelProps } = getFormLabelProps({\n    ...fieldOptions,\n    value: 'Basic Example',\n  })\n  const { checked, ...inputProps } = radioProps.input\n\n  return (\n    <div {...control}>\n      <label {...radioProps.radioContainer}>\n        <input {...inputProps} defaultChecked={checked} />\n        <span {...radioProps.radioControl} />\n        <span {...labelProps}>{value}</span>\n      </label>\n    </div>\n  )\n}\n")),(0,r.kt)("h3",{id:"states"},"States"),(0,r.kt)(a.Z,{mdxType:"RadioStates"}),(0,r.kt)("admonition",{title:"Form field and state",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In order to easily manage the state and maintain accessbility of your form field, the basic state statuses should come from the result of the FormControl API.")),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"getRadioProps(options?: RadioOptions)\n")),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options"),": An Object containing properties derived from the FormControl.fieldOptions results (disabled, invalid, readOnly, required) to determine the styling of the Radio state. An id and optional name property that accept a String value which connected accessbility properties from the label to the Radio. A checked property that accepts a Boolean value to determine the styling of the Radio state. A value property that accepts a String for form submission.")),(0,r.kt)("h3",{id:"returns"},"Returns"),(0,r.kt)("p",null,"An Object matching the ",(0,r.kt)("a",{parentName:"p",href:"#anatomy"},"Anatomy")," containing ",(0,r.kt)("inlineCode",{parentName:"p"},"className")," and a11y properties relevant to each element/section."),(0,r.kt)("h2",{id:"behavior"},"Behavior"),(0,r.kt)("h3",{id:"layout"},"Layout"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do")," use multiple Radios in a vertical list."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don't")," use multiple Radios in a single row."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do")," provide a Label with a Radio."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don't")," use a Radio inline without a Label."),(0,r.kt)("h3",{id:"usage-1"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do")," use a Radio for giving users a group of options from which they can select a single item."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don't")," use a Radio for showing/hiding content."),(0,r.kt)("h2",{id:"accessbility"},"Accessbility"),(0,r.kt)("p",null,"The Pando Radio, and Icon APIs combined with semantic HTML allow the Radio to be fully accessible and screen-readable."))}p.isMDXComponent=!0},78338:function(e,t,n){n.d(t,{g:function(){return l}});var o=n(89020),r=n(3189),a=n(26730);const i={formControlBase:"formControlCSS-module_formControlBase__Q1Q7H",rowFormControl:"formControlCSS-module_rowFormControl__ek6X- formControlCSS-module_formControlBase__Q1Q7H",colFormControl:"formControlCSS-module_colFormControl__jC13A formControlCSS-module_formControlBase__Q1Q7H"};(0,a.s)(".formControlCSS-module_formControlBase__Q1Q7H{align-items:center;display:flex;gap:1rem;position:relative;width:100%}.formControlCSS-module_formControlBase__Q1Q7H[disabled]{opacity:.5}.formControlCSS-module_colFormControl__jC13A{align-items:flex-start;flex-direction:column}");function l(e){const{groupType:t,direction:n,...a}=(0,r.g)(e),{directionClass:l}=(0,r.a)(n);return{control:{...{role:t},disabled:a.disabled,...(0,o.c)("ps-form-control",i.formControlBase,i[l])},fieldOptions:a}}},3189:function(e,t,n){function o(e){return{directionClass:`${e}FormControl`}}function r(e){return{direction:(null==e?void 0:e.direction)??"row",disabled:(null==e?void 0:e.disabled)??!1,groupType:(null==e?void 0:e.groupType)??"group",invalid:(null==e?void 0:e.invalid)??!1,readOnly:(null==e?void 0:e.readOnly)??!1,required:(null==e?void 0:e.required)??!1}}n.d(t,{a:function(){return o},g:function(){return r}})},39636:function(e,t,n){n.d(t,{g:function(){return l}});var o=n(89020),r=n(57995),a=n(26730);const i={defaultFormLabel:"formLabelCSS-module_defaultFormLabel__xDgsw",hiddenFormLabel:"formLabelCSS-module_hiddenFormLabel__Im12t"};(0,a.s)(".formLabelCSS-module_defaultFormLabel__xDgsw{-webkit-margin-end:0;align-items:center;display:flex;font-family:inherit;font-size:1rem;gap:.75rem;margin-bottom:0;margin-inline-end:0;opacity:1;text-align:start;-webkit-user-select:none;-moz-user-select:none;user-select:none}.formLabelCSS-module_hiddenFormLabel__Im12t{clip:rect(0 0 0 0);border:0;height:1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}");function l(e){const{htmlFor:t,value:n,...a}=(0,r.g)(e),l=(0,r.a)(n,a.required),{labelClass:d}=(0,r.b)(a.kind);return{htmlFor:t,...l,...(0,o.c)("ps-form-label",i[d])}}},57995:function(e,t,n){function o(e){return{labelClass:`${e}FormLabel`}}function r(e){return{htmlFor:(null==e?void 0:e.htmlFor)??"",kind:(null==e?void 0:e.kind)??"default",required:(null==e?void 0:e.required)??!1,value:(null==e?void 0:e.value)??"Form label"}}function a(e,t){let n=e;return t&&(n=`${e} (required)`),{value:n}}n.d(t,{a:function(){return a},b:function(){return o},g:function(){return r}})},96261:function(e,t,n){n.d(t,{g:function(){return c}});var o=n(89020),r=n(93216),a=n(92605),i=n(26730);const l="radioCSS-module_radioContainer__AJpTR",d="radioCSS-module_radioInput__T3aWf",s="radioCSS-module_radioControl__9qgbA";(0,i.s)('.radioCSS-module_radioGroup__cbDP7{align-items:center;display:flex}.radioCSS-module_radioContainer__AJpTR{-webkit-margin-start:1rem;align-items:center;cursor:pointer;display:inline-flex;margin-inline-start:1rem;vertical-align:top}.radioCSS-module_radioInput__T3aWf{clip:rect(0,0,0,0);border:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.radioCSS-module_radioControl__9qgbA{-webkit-margin-end:.437rem;align-items:center;border-color:var(--ps-action-border);-o-border-image:initial;border-image:initial;border-radius:50%;border-style:solid;border-width:2px;color:var(--ps-text);display:inline-flex;flex-shrink:0;height:1.125rem;justify-content:center;margin-bottom:2px;margin-inline-end:.437rem;transition-duration:.15s;transition-property:background,box-shadow;width:1.125rem}.radioCSS-module_radioControl__9qgbA:not([disabled]):hover{background:var(--ps-background-hover)}.radioCSS-module_radioInput__T3aWf:focus+[data-control]{outline:3px solid var(--ps-action-border-focus);outline-offset:2px}.radioCSS-module_radioInput__T3aWf:focus:not(:focus-visible)+[data-control]{box-shadow:none;outline:none}.radioCSS-module_radioContainer__AJpTR[data-readonly=true],.radioCSS-module_radioContainer__AJpTR[disabled]{cursor:not-allowed}.radioCSS-module_radioControl__9qgbA[data-checked=true]{background:var(--ps-action-background);border-color:var(--ps-action-background);border-width:initial}.radioCSS-module_radioControl__9qgbA[data-checked=true]:hover{background:var(--ps-action-background-hover);border-color:var(--ps-action-background-hover)}.radioCSS-module_radioControl__9qgbA[data-checked=true]:before{background:var(--ps-action-text);border-radius:50%;content:"";display:inline-block;height:50%;position:relative;width:50%}.radioCSS-module_radioControl__9qgbA[disabled]{background:var(--ps-background);border-color:var(--ps-background)}.radioCSS-module_radioControl__9qgbA[data-invalid=true],.radioCSS-module_radioControl__9qgbA[data-invalid=true]:hover{background:var(--ps-danger-surface);border-color:var(--ps-danger-surface)}.radioCSS-module_radioControl__9qgbA[data-readonly=true]:hover{background-color:initial}');function c(e){const t=(0,a.g)(e),n=(0,r.a)(t);return{input:{...n.input,type:"radio",...(0,o.c)("ps-radio-input",d)},radioContainer:{...n.container,...(0,o.c)("ps-radio-container",l)},radioControl:{...n.control,...(0,o.c)("ps-radio-control",s)}}}},92605:function(e,t,n){n.d(t,{g:function(){return r}});var o=n(93216);function r(e){return(0,o.g)(e)}}}]);