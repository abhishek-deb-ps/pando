"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[166],{72032:function(e,n,t){t.d(n,{dS:function(){return d},fK:function(){return p},C9:function(){return c},ZP:function(){return m}});var a=t(81648),r=t(45721),o=t(71397),l=t(61471),i="grid_cC7H";function s(e){return r.createElement("li",(0,o.a)({colSpan:2}),r.createElement(l.Z,e,e.children))}function p(e){return r.createElement(s,{href:e.href},e.children??"View on Github")}function d(e){return r.createElement(s,{href:e.href},"View on Figma")}function c(e){const{className:n,...t}=(0,o.g)({cols:12,gap:8});return r.createElement("ul",(0,a.Z)({className:`${n} ${i}`},t),e.children)}function m(e){const{figma:n,github:t}=e,{className:l,...s}=(0,o.g)({cols:12,gap:8});return r.createElement("ul",(0,a.Z)({className:`${l} ${i}`},s),t&&r.createElement(p,{href:t}),n&&r.createElement(d,{href:n}))}},27505:function(e,n,t){t(45721)},61471:function(e,n,t){t.d(n,{Z:function(){return s}});var a=t(45721),r=t(64965),o=t(4094),l=t(31026),i=t(6115);function s(e){const{href:n}=e,t=(0,r.g)({href:n}),s=(0,o.g)(t.iconOptions),p=n.includes("github")?l.Z:i.Z;return a.createElement("a",t.link,a.createElement(p,s),e.children)}},21670:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var a=t(81648),r=(t(45721),t(70167)),o=t(72032);t(27505);const l={tags:["field"],title:"Form Control"},i=void 0,s={unversionedId:"reference/components/form-control",id:"reference/components/form-control",title:"Form Control",description:"Used to centrally manage form field and grouped field states.",source:"@site/docs/reference/components/form-control.mdx",sourceDirName:"reference/components",slug:"/reference/components/form-control",permalink:"/docs/next/reference/components/form-control",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/reference/components/form-control.mdx",tags:[{label:"field",permalink:"/docs/next/tags/field"}],version:"current",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["field"],title:"Form Control"},sidebar:"reference",previous:{title:"Field Messages",permalink:"/docs/next/reference/components/field-message"},next:{title:"Form Label",permalink:"/docs/next/reference/components/form-label"}},p={},d=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Valid Example",id:"valid-example",level:3},{value:"Invalid Example",id:"invalid-example",level:3},{value:"Reference",id:"reference",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Behavior",id:"behavior",level:2},{value:"Patterns",id:"patterns",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Accessbility",id:"accessbility",level:2}],c={toc:d};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",{className:"size-xxl"},"Used to centrally manage form field and grouped field states."),(0,r.kt)(o.ZP,{github:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/FormControl",figma:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsLinkBar"}),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getFormControlProps } from '@pluralsight/headless-styles'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface FormControlOptions {\n  disabled?: boolean\n  direction?: 'row' | 'col'\n  groupType?: 'group' | 'radiogroup'\n  invalid?: boolean\n  readOnly?: boolean\n  required?: boolean\n}\n\ngetFormControlProps(options?: FormControlOptions)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import type { FormControlOptions } from '@pluralsight/headless-styles/types'\n")),(0,r.kt)("h2",{id:"anatomy"},"Anatomy"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Form Control"),(0,r.kt)("li",{parentName:"ol"},"Label"),(0,r.kt)("li",{parentName:"ol"},"Input"),(0,r.kt)("li",{parentName:"ol"},"Message")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("admonition",{title:"Form Control manages state",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The Form Control was designed to manage the state of the field you are using it on instead of managing it yourself in all the sister components.")),(0,r.kt)("h3",{id:"valid-example"},"Valid Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function BasicFormControl() {\n  const formId = 'email'\n  const [email, setEmail] = useState('')\n  const { fieldOptions } = getFormControlProps()\n  const { value, ...labelProps } = getFormLabelProps({\n    ...fieldOptions,\n    htmlFor: formId,\n    value: 'Email alerts',\n  })\n  const { value: helpText, ...message } = getFieldMessageProps({\n    id: 'email:help',\n    message: 'We will never share your email.',\n  })\n  const inputProps = getInputProps({\n    ...fieldOptions,\n    describedBy: message.id,\n    id: formId,\n    name: 'basic-form',\n    placeholder: 'email@example.com',\n    type: 'email',\n    value: email,\n  })\n\n  function handleChange(e) {\n    setEmail(e.target.value)\n  }\n\n  return (\n    <div>\n      <label {...labelProps}>{value}</label>\n      <div {...inputProps.inputWrapper}>\n        <input {...inputProps.input} onChange={handleChange} />\n      </div>\n      <small {...message}>{helpText}</small>\n    </div>\n  )\n}\n")),(0,r.kt)("h3",{id:"invalid-example"},"Invalid Example"),(0,r.kt)("admonition",{title:"Easy to understand invalid states",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To display an invalid state that is easy to understand for the user, pass in the ",(0,r.kt)("inlineCode",{parentName:"p"},"fieldOptions")," to your Error Message component and add a WarningTriangleFilled ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/general/icons"},"Icon"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function ErrorEmailField() {\n  const fieldId = 'email'\n  const [email, setEmail] = useState('')\n  const { fieldOptions } = getFormControlProps({\n    invalid: true,\n    required: true,\n  })\n  const { value, ...labelProps } = getFormLabelProps({\n    ...fieldOptions,\n    htmlFor: fieldId,\n    value: 'Email alerts',\n  })\n  const error = getErrorMessageProps({\n    ...fieldOptions,\n    id: 'fieldId',\n    message: 'Please enter your email.',\n  })\n  const inputProps = getInputProps({\n    ...fieldOptions,\n    describedBy: `${error.container.id},${error.id}`,\n    id: fieldId,\n    name: 'basic-form',\n    placeholder: 'email@example.com',\n    type: 'email',\n    value: email,\n  })\n\n  function handleChange(e) {\n    setEmail(e.target.value)\n  }\n\n  return (\n    <div>\n      <label {...labelProps}>{value}</label>\n      <div {...inputProps.inputWrapper}>\n        <input {...inputProps.input} onChange={handleChange} />\n        {fieldOptions.invalid && (\n          <span {...inputProps.invalidIconWrapper}>\n            <WarningTriangleFilledIcon\n              {...getIconProps(inputProps.invalidIconOptions)}\n            />\n          </span>\n        )}\n      </div>\n      {fieldOptions.invalid && (\n        <div {...error.container}>\n          <small {...error.message}>{error.message.value}</small>\n        </div>\n      )}\n    </div>\n  )\n}\n")),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"getFormControlProps(options?: FormControlOptions)\n")),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options"),": A boolean value for the properties of disabled, invalid, readOnly, and required which manage the state of the field. A direction property that accepts a String value of ",(0,r.kt)("inlineCode",{parentName:"li"},"'row' | 'col'")," which controls styling directions. A groupType property that accepts a String value of ",(0,r.kt)("inlineCode",{parentName:"li"},"'group' | 'radiogroup'")," that create a11y props for the form control element.")),(0,r.kt)("h3",{id:"returns"},"Returns"),(0,r.kt)("p",null,"An Object matching the ",(0,r.kt)("a",{parentName:"p",href:"#anatomy"},"Anatomy")," containing ",(0,r.kt)("inlineCode",{parentName:"p"},"className")," and a11y properties relevant to the control element. Additionally, it returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"fieldOptions")," property that manages the state of the field in context."),(0,r.kt)("h2",{id:"behavior"},"Behavior"),(0,r.kt)("h3",{id:"patterns"},"Patterns"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do")," use the WarningTriangleFilled Icon for all invalid input fields."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don't")," use any other Icon to represent an invalid input field."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do")," stack form fields vertically when displaying a set."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don't")," use more than one form field within the same row."),(0,r.kt)("h3",{id:"usage-1"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do"),' use the "(required)" text flag on all required form field labels.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Don't"),' use a "',"*",'" to represent a required field; this pattern is not accessible.'),(0,r.kt)("h2",{id:"accessbility"},"Accessbility"),(0,r.kt)("p",null,"The Pando Form Control and Icon APIs combined with semantic HTML allow the Form Control to be fully accessible and screen-readable."))}m.isMDXComponent=!0},71397:function(e,n,t){t.d(n,{a:function(){return d},g:function(){return p}});var a=t(1801),r=t(23909),o=t(31519);const l="gridCSS-module_gridContainer__sQmao",i="gridCSS-module_gridItem__nVMyV";(0,o.s)(".gridCSS-module_gridContainer__sQmao{display:grid;width:100%}.gridCSS-module_gridItem__nVMyV{min-width:0}");const s="pando-grid";function p(e){const n=(0,r.g)(e);return{...(0,r.c)(n),...(0,a.c)(s,l,...n.classNames)}}function d(e){const n=(0,r.a)(e);return{...(0,r.b)(n),...(0,a.c)(`${s}-item`,i,...n.classNames)}}},23909:function(e,n,t){t.d(n,{a:function(){return o},b:function(){return i},c:function(){return l},g:function(){return r}});const a={6:.375,8:.5,12:.75,16:1,32:2};function r(e){return{classNames:(null==e?void 0:e.classNames)??[],cols:(null==e?void 0:e.cols)??12,gap:(null==e?void 0:e.gap)??16,rows:(null==e?void 0:e.rows)??1}}function o(e){return{classNames:(null==e?void 0:e.classNames)??[],colSpan:(null==e?void 0:e.colSpan)??12,rowSpan:(null==e?void 0:e.rowSpan)??null}}function l(e){return{style:{gridTemplateRows:`repeat(${e.rows}, 1fr)`,gridTemplateColumns:`repeat(${e.cols}, 1fr)`,gap:`${a[e.gap]}rem`}}}function i(e){const{colSpan:n,rowSpan:t}=e;return t?{style:{gridArea:`span ${t} / span ${n} / span ${t} / span ${n}`}}:{style:{gridColumn:`span ${n} / span ${n}`}}}}}]);