"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9305],{75932:function(e,n,t){const o=t(86521);n.Z=function(e){return(0,o.jsx)("svg",{"aria-label":"checkmark",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg",...e,children:(0,o.jsx)("path",{d:"m9.59 14.58-2.818-2.818a.5.5 0 0 0-.706 0l-.71.704a.5.5 0 0 0-.003.708h.002l3.881 3.882a.5.5 0 0 0 .707 0l9.293-9.292a.5.5 0 0 0 0-.708l-.703-.702a.5.5 0 0 0-.707 0L9.59 14.58Z"})})}},22436:function(e,n,t){const o=t(86521);n.Z=function(e){return(0,o.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:"currentColor",className:"ps-icon-svg","aria-label":"indeterminate icon",...e,children:(0,o.jsx)("path",{d:"M18.5 13h-13a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5Z"})})}},31945:function(e,n,t){t.d(n,{Z:function(){return C}});var o=t(81648),r=t(45721),a=t(51362),l=t(342),i=t(80087),c=t(4094),s=t(51441),u=t(22436),d=t(75932);function m(e){const{checked:n}=e,t=(0,c.g)(e.iconOptions);return n?"true"===e.indeterminate?r.createElement(u.Z,t):r.createElement(d.Z,t):null}function p(e){const{onClick:n}=e,{fieldOptions:t}=(0,a.g)({...e}),i=(0,s.g)({...t,...e}),{value:c,...u}=(0,l.g)({...e,value:e.label}),{checked:d,...p}=i.input;return r.createElement("label",i.checkboxContainer,n&&r.createElement("input",(0,o.Z)({},p,{checked:d,onChange:e.onClick})),!n&&r.createElement("input",(0,o.Z)({},p,{defaultChecked:d})),r.createElement("span",i.checkboxControl,r.createElement(m,{checked:d,iconOptions:i.iconOptions,indeterminate:i.input.indeterminate})),r.createElement("span",u,c))}const h={justifyContent:"space-between",width:"100%"};function b(){const{control:e,fieldOptions:n}=(0,a.g)(),{value:t,...i}=(0,l.g)({htmlFor:"checked-example",value:"checked:"});return r.createElement("div",(0,o.Z)({},e,{style:{...h}}),r.createElement("label",i,t),r.createElement(p,(0,o.Z)({},n,{checked:!0})))}function k(){const{control:e,fieldOptions:n}=(0,a.g)(),{value:t,...i}=(0,l.g)({htmlFor:"indeterminate-example",value:"indeterminate:"});return r.createElement("div",(0,o.Z)({},e,{style:{...h}}),r.createElement("label",i,t),r.createElement(p,(0,o.Z)({},n,{checked:!0,indeterminate:!0})))}function f(){const{control:e,fieldOptions:n}=(0,a.g)({disabled:!0}),{value:t,...i}=(0,l.g)({htmlFor:"disabled-exampled",value:"disabled:"});return r.createElement("div",(0,o.Z)({},e,{style:{...h}}),r.createElement("label",i,t),r.createElement(p,n))}function g(){const{control:e,fieldOptions:n}=(0,a.g)({invalid:!0}),{value:t,...i}=(0,l.g)({htmlFor:"invalid-exampled",value:"invalid:"});return r.createElement("div",(0,o.Z)({},e,{style:h}),r.createElement("label",i,t),r.createElement(p,(0,o.Z)({},n,{checked:!0})))}function x(){const{control:e,fieldOptions:n}=(0,a.g)({readOnly:!0}),{value:t,...i}=(0,l.g)({htmlFor:"readOnly-exampled",value:"readOnly:"});return r.createElement("div",(0,o.Z)({},e,{style:{...h}}),r.createElement("label",i,t),r.createElement(p,n))}function v(e){const{control:n,fieldOptions:t}=(0,a.g)({required:!0}),i=(0,l.g)({htmlFor:"required-exampled",value:""});return r.createElement("div",(0,o.Z)({},n,{style:{...h}}),r.createElement("label",i,"required:"),r.createElement(p,(0,o.Z)({},t,{checked:e.checked,onClick:e.onClick})))}var C=function(){const[e,n]=(0,r.useState)(!1);return r.createElement(i.Z,null,r.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem 5rem",width:"75%"}},r.createElement(b,null),r.createElement(f,null),r.createElement(g,null),r.createElement(x,null),r.createElement(v,{checked:e,onClick:function(e){n(e.target.checked)}}),r.createElement(k,null)))}},80087:function(e,n,t){t.d(n,{Z:function(){return l}});var o=t(45721),r={base:"base_M3w8",column:"column_mb9C base_M3w8",grid:"grid_EiLr base_M3w8"};const a={alignItems:"center",column:!1,gridCols:0,justifyContent:"space-between",textAlign:"center",type:"base"};function l(e){void 0===e&&(e=a);const n=e.type??a.type,t=e.gridColumns?`repeat(${e.gridColumns}, minmax(auto, max-content))`:"initial",l={alignItems:e.alignItems,gridTemplateColumns:t,justifyContent:e.justifyContent,textAlign:e.textAlign??"center",gap:e.gap??"1rem",columnGap:e.columnGap};return o.createElement("div",{className:r[n],style:l},e.children)}},72032:function(e,n,t){t.d(n,{dS:function(){return u},fK:function(){return s},C9:function(){return d},ZP:function(){return m}});var o=t(81648),r=t(45721),a=t(71397),l=t(61471),i="grid_cC7H";function c(e){return r.createElement("li",(0,a.a)({colSpan:2}),r.createElement(l.Z,e,e.children))}function s(e){return r.createElement(c,{href:e.href},e.children??"View on Github")}function u(e){return r.createElement(c,{href:e.href},"View on Figma")}function d(e){const{className:n,...t}=(0,a.g)({cols:12,gap:8});return r.createElement("ul",(0,o.Z)({className:`${n} ${i}`},t),e.children)}function m(e){const{figma:n,github:t}=e,{className:l,...c}=(0,a.g)({cols:12,gap:8});return r.createElement("ul",(0,o.Z)({className:`${l} ${i}`},c),t&&r.createElement(s,{href:t}),n&&r.createElement(u,{href:n}))}},27505:function(e,n,t){t(45721)},61471:function(e,n,t){t.d(n,{Z:function(){return c}});var o=t(45721),r=t(64965),a=t(4094),l=t(59393),i=t(79719);function c(e){const{href:n}=e,t=(0,r.g)({href:n}),c=(0,a.g)(t.iconOptions),s=n.includes("github")?l.Z:i.Z;return o.createElement("a",t.link,o.createElement(s,c),e.children)}},64942:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var o=t(81648),r=(t(45721),t(70167)),a=t(31945),l=t(72032);t(27505);const i={tags:["multi-select","field","form"],title:"Checkbox"},c=void 0,s={unversionedId:"reference/components/checkbox",id:"reference/components/checkbox",title:"Checkbox",description:"Used when a user needs to select multiple values from options in a form.",source:"@site/docs/reference/components/checkbox.mdx",sourceDirName:"reference/components",slug:"/reference/components/checkbox",permalink:"/docs/next/reference/components/checkbox",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/reference/components/checkbox.mdx",tags:[{label:"multi-select",permalink:"/docs/next/tags/multi-select"},{label:"field",permalink:"/docs/next/tags/field"},{label:"form",permalink:"/docs/next/tags/form"}],version:"current",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["multi-select","field","form"],title:"Checkbox"},sidebar:"reference",previous:{title:"Button",permalink:"/docs/next/reference/components/button"},next:{title:"Circular Progress",permalink:"/docs/next/reference/components/circular-progress"}},u={},d=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Checkbox",id:"basic-checkbox",level:3},{value:"Indeterminate Checkbox",id:"indeterminate-checkbox",level:3},{value:"States",id:"states",level:3},{value:"Reference",id:"reference",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Behavior",id:"behavior",level:2},{value:"Layout",id:"layout",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Interactions",id:"interactions",level:3},{value:"Accessibility",id:"accessibility",level:2}],m={toc:d};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",{className:"size-xxl"},"Used when a user needs to select multiple values from options in a form."),(0,r.kt)(l.ZP,{github:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/Checkbox",figma:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsLinkBar"}),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getCheckboxProps } from '@pluralsight/headless-styles'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface CheckboxOptions {\n  checked: boolean\n  disabled?: boolean\n  id: string\n  indeterminate?: boolean\n  invalid?: boolean\n  name: string\n  readOnly?: boolean\n  required?: boolean\n  value: string\n}\n\ngetCheckboxProps(options?: CheckboxOptions)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import type { CheckboxOptions } from '@pluralsight/headless-styles/types'\n")),(0,r.kt)("h2",{id:"anatomy"},"Anatomy"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Container"),(0,r.kt)("li",{parentName:"ol"},"Control"),(0,r.kt)("li",{parentName:"ol"},"Input"),(0,r.kt)("li",{parentName:"ol"},"Label")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"basic-checkbox"},"Basic Checkbox"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function BasicCheckbox() {\n  const [checked, setChecked] = useState(false)\n  const { fieldOptions } = getFormControlProps()\n  const checkbox = getCheckboxProps({ ...fieldOptions, checked })\n  const { value, ...labelProps } = getFormLabelProps({\n    value: 'Sign up for something.',\n  })\n  const icon = getIconProps(checkbox.iconOptions)\n\n  function handleChange() {\n    setChecked((prev) => !prev)\n  }\n\n  return (\n    <label {...checkbox.checkboxContainer}>\n      <input {...checkbox.input} onChange={handleChange} />\n      <span {...checkbox.checkboxControl}>\n        {checkbox.input.checked && <CheckIcon {...icon} />}\n      </span>\n      <span {...labelProps}>{value}</span>\n    </label>\n  )\n}\n")),(0,r.kt)("h3",{id:"indeterminate-checkbox"},"Indeterminate Checkbox"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function IndeterminateCheckbox() {\n  const { fieldOptions } = getFormControlProps()\n  const checkbox = getCheckboxProps({\n    ...fieldOptions,\n    indeterminate: true,\n    checked: true,\n  })\n  const { value, ...labelProps } = getFormLabelProps({\n    value: 'Sign up for something.',\n  })\n  const icon = getIconProps(checkbox.iconOptions)\n\n  return (\n    <label {...checkbox.checkboxContainer}>\n      <input {...checkbox.input} onChange={() => null} />\n      <span {...checkbox.checkboxControl}>\n        {checkbox.input.checked && <IndeterminateIcon {...icon} />}\n      </span>\n    </label>\n  )\n}\n")),(0,r.kt)("admonition",{title:"use the pando hook",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},'To easily determine the "indeterminate" state, use the ',(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/react-hooks/useIsIndeterminate"},"useIsIndeterminate custom hook"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'showLineNumbers title="How to use the useIsIndeterminateHook." {7,12-13}',showLineNumbers:!0,title:'"How',to:!0,use:!0,the:!0,'useIsIndeterminateHook."':!0,"{7,12-13}":!0},"const [allSelected, setAllSelected] = useState(false)\nconst [checkboxOptions, setCheckboxOptions] = useState({\n  email: false,\n  sms: false,\n  phone: false\n})\nconst isIndeterminate = useIsIndeterminate(checkboxOptions)\n\n...\n\n// The select-all Checkbox\n<Checkbox\n  checked={allSelected || isIndeterminate}\n  indeterminate={isIndeterminate}\n  ...\n/>\n")),(0,r.kt)("h3",{id:"states"},"States"),(0,r.kt)(a.Z,{mdxType:"CheckboxStates"}),(0,r.kt)("admonition",{title:"Form field and state",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In order to easily manage the state and maintain Accessibility of your form field, the basic state statuses should come from the result of the FormControl API.")),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"getCheckboxProps(options?: CheckboxOptions)\n")),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options"),": An Object containing properties derived from the FormControl.fieldOptions results (disabled, invalid, readOnly, required) to determine the styling of the Checkbox state. An id and optional name property that accept a String value which connect Accessibility properties from the label to the Checkbox. A checked and optional indeterminate property that accept a Boolean value to determine the styling of the Checkbox state. A value property that accepts a String for form submission.")),(0,r.kt)("h3",{id:"returns"},"Returns"),(0,r.kt)("p",null,"An Object matching the ",(0,r.kt)("a",{parentName:"p",href:"#anatomy"},"Anatomy")," containing ",(0,r.kt)("inlineCode",{parentName:"p"},"className")," and a11y properties relevant to each element/section. Additionally, it returns an ",(0,r.kt)("inlineCode",{parentName:"p"},"iconOptions")," Object to use as the parameters for the Icon API."),(0,r.kt)("h2",{id:"behavior"},"Behavior"),(0,r.kt)("h3",{id:"layout"},"Layout"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do")," use multiple Checkboxes in a vertical list."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don't")," use multiple Checkboxes in a single row."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do")," provide a Label with a Checkbox."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don't")," use a Checkbox inline without a Label."),(0,r.kt)("h3",{id:"usage-1"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do"),' use a Checkbox for giving users an option to "opt-in" to a choice.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don't")," use a Checkbox for showing/hiding content."),(0,r.kt)("h3",{id:"interactions"},"Interactions"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do")," use the indeterminate state for a parent option of a nested group."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don't")," use the indeterminate state for a single option within a group."),(0,r.kt)("h2",{id:"accessibility"},"Accessibility"),(0,r.kt)("p",null,"The Pando Checkbox, and Icon APIs combined with semantic HTML allow the Checkbox to be fully accessible and screen-readable."))}p.isMDXComponent=!0},51441:function(e,n,t){t.d(n,{g:function(){return s}});var o=t(1801),r=t(29022),a=t(31519);const l="checkboxCSS-module_checkboxContainer__TJ7sq",i="checkboxCSS-module_checkboxInput__wuNe5",c="checkboxCSS-module_checkboxControl__UWcOY";(0,a.s)(".checkboxCSS-module_checkboxContainer__TJ7sq{align-items:center;cursor:pointer;display:inline-flex;position:relative;vertical-align:top}.checkboxCSS-module_checkboxInput__wuNe5{clip:rect(0,0,0,0);border:0;box-sizing:border-box;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.checkboxCSS-module_checkboxControl__UWcOY{-webkit-margin-end:.437rem;align-items:center;border-color:var(--ps-action-border);-o-border-image:initial;border-image:initial;border-radius:2px;border-style:solid;border-width:2px;color:var(--ps-action-text);display:inline-flex;flex-shrink:0;height:1.125rem;justify-content:center;margin-bottom:2px;margin-inline-end:.437rem;transition-duration:.15s;transition-property:background,background-color,border,box-shadow;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:top;width:1.125rem}.checkboxCSS-module_checkboxControl__UWcOY:not([disabled]):hover{background:var(--ps-background-hover);border-color:var(--ps-background-hover)}.checkboxCSS-module_checkboxInput__wuNe5:focus+[data-control]{outline:3px solid var(--ps-action-border-focus);outline-offset:2px}.checkboxCSS-module_checkboxInput__wuNe5:focus:not(:focus-visible)+[data-control]{box-shadow:none;outline:none}.checkboxCSS-module_checkboxContainer__TJ7sq[data-readonly=true],.checkboxCSS-module_checkboxContainer__TJ7sq[disabled]{cursor:not-allowed}.checkboxCSS-module_checkboxControl__UWcOY[data-checked=true]{background:var(--ps-action-background);border-color:var(--ps-action-background)}.checkboxCSS-module_checkboxControl__UWcOY[data-checked=true]:hover{background:var(--ps-action-background-hover);border-color:var(--ps-action-background-hover)}.checkboxCSS-module_checkboxControl__UWcOY[disabled]{background:var(--ps-background);border-color:var(--ps-background)}.checkboxCSS-module_checkboxControl__UWcOY[data-invalid=true]{background:var(--ps-danger-surface);border-color:var(--ps-danger-surface);color:var(--ps-danger-text)}.checkboxCSS-module_checkboxControl__UWcOY[data-invalid=true]:hover{background:var(--ps-danger-surface);border-color:var(--ps-danger-surface)}.checkboxCSS-module_checkboxControl__UWcOY[data-readonly=true]:hover{background-color:initial}");function s(e){const n=(0,r.g)(e),t=(0,r.c)(n);return{...t,input:{...t.input,...(0,o.c)("ps-checkbox-input",i)},checkboxContainer:{...t.checkboxContainer,...(0,o.c)("ps-checkbox-container",l)},checkboxControl:{...t.checkboxControl,...(0,o.c)("ps-checkbox-control",c)}}}},29022:function(e,n,t){t.d(n,{c:function(){return a},g:function(){return r}});var o=t(59315);function r(e){return{...(0,o.g)(e),indeterminate:(null==e?void 0:e.indeterminate)??!1}}function a(e){const n=(0,o.b)(e);return{iconOptions:(0,o.c)({size:"s"}),input:{...n.input,...e.indeterminate&&{"aria-checked":"mixed"},indeterminate:e.indeterminate.toString(),type:"checkbox"},checkboxContainer:{...n.container},checkboxControl:{...n.control}}}},51362:function(e,n,t){t.d(n,{g:function(){return i}});var o=t(1801),r=t(57953),a=t(31519);const l={formControlBase:"formControlCSS-module_formControlBase__Q1Q7H",rowFormControl:"formControlCSS-module_rowFormControl__ek6X- formControlCSS-module_formControlBase__Q1Q7H",colFormControl:"formControlCSS-module_colFormControl__jC13A formControlCSS-module_formControlBase__Q1Q7H"};(0,a.s)(".formControlCSS-module_formControlBase__Q1Q7H{align-items:center;display:flex;gap:1rem;position:relative;width:100%}.formControlCSS-module_formControlBase__Q1Q7H[disabled]{opacity:.5}.formControlCSS-module_colFormControl__jC13A{align-items:flex-start;flex-direction:column}");function i(e){const{groupType:n,direction:t,...a}=(0,r.g)(e),{directionClass:i}=(0,r.a)(t);return{control:{...{role:n},disabled:a.disabled,...(0,o.c)("ps-form-control",l.formControlBase,l[i])},fieldOptions:a}}},57953:function(e,n,t){function o(e){return{directionClass:`${e}FormControl`}}function r(e){return{direction:(null==e?void 0:e.direction)??"row",disabled:(null==e?void 0:e.disabled)??!1,groupType:(null==e?void 0:e.groupType)??"group",invalid:(null==e?void 0:e.invalid)??!1,readOnly:(null==e?void 0:e.readOnly)??!1,required:(null==e?void 0:e.required)??!1}}t.d(n,{a:function(){return o},g:function(){return r}})},342:function(e,n,t){t.d(n,{g:function(){return i}});var o=t(1801),r=t(12170),a=t(31519);const l={defaultFormLabel:"formLabelCSS-module_defaultFormLabel__xDgsw",hiddenFormLabel:"formLabelCSS-module_hiddenFormLabel__Im12t"};(0,a.s)(".formLabelCSS-module_defaultFormLabel__xDgsw{-webkit-margin-end:0;align-items:center;display:flex;font-family:inherit;font-size:1rem;gap:.75rem;margin-bottom:0;margin-inline-end:0;opacity:1;text-align:start;-webkit-user-select:none;-moz-user-select:none;user-select:none}.formLabelCSS-module_hiddenFormLabel__Im12t{clip:rect(0 0 0 0);border:0;height:1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}");function i(e){const{htmlFor:n,value:t,...a}=(0,r.g)(e),i=(0,r.a)(t,a.required),{labelClass:c}=(0,r.b)(a.kind);return{htmlFor:n,...i,...(0,o.c)("ps-form-label",l[c])}}},12170:function(e,n,t){function o(e){return{labelClass:`${e}FormLabel`}}function r(e){return{htmlFor:(null==e?void 0:e.htmlFor)??"",kind:(null==e?void 0:e.kind)??"default",required:(null==e?void 0:e.required)??!1,value:(null==e?void 0:e.value)??"Form label"}}function a(e,n){let t=e;return n&&(t=`${e} (required)`),{value:t}}t.d(n,{a:function(){return a},b:function(){return o},g:function(){return r}})},71397:function(e,n,t){t.d(n,{a:function(){return u},g:function(){return s}});var o=t(1801),r=t(23909),a=t(31519);const l="gridCSS-module_gridContainer__sQmao",i="gridCSS-module_gridItem__nVMyV";(0,a.s)(".gridCSS-module_gridContainer__sQmao{display:grid;width:100%}.gridCSS-module_gridItem__nVMyV{min-width:0}");const c="pando-grid";function s(e){const n=(0,r.g)(e);return{...(0,r.c)(n),...(0,o.c)(c,l,...n.classNames)}}function u(e){const n=(0,r.a)(e);return{...(0,r.b)(n),...(0,o.c)(`${c}-item`,i,...n.classNames)}}},23909:function(e,n,t){t.d(n,{a:function(){return a},b:function(){return i},c:function(){return l},g:function(){return r}});const o={6:.375,8:.5,12:.75,16:1,32:2};function r(e){return{classNames:(null==e?void 0:e.classNames)??[],cols:(null==e?void 0:e.cols)??12,gap:(null==e?void 0:e.gap)??16,rows:(null==e?void 0:e.rows)??1}}function a(e){return{classNames:(null==e?void 0:e.classNames)??[],colSpan:(null==e?void 0:e.colSpan)??12,rowSpan:(null==e?void 0:e.rowSpan)??null}}function l(e){return{style:{gridTemplateRows:`repeat(${e.rows}, 1fr)`,gridTemplateColumns:`repeat(${e.cols}, 1fr)`,gap:`${o[e.gap]}rem`}}}function i(e){const{colSpan:n,rowSpan:t}=e;return t?{style:{gridArea:`span ${t} / span ${n} / span ${t} / span ${n}`}}:{style:{gridColumn:`span ${n} / span ${n}`}}}}}]);