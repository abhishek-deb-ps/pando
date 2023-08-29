"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9305],{33233:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(70079);const i={base:"base_M3w8",column:"column_mb9C base_M3w8",grid:"grid_EiLr base_M3w8"},l={alignItems:"center",column:!1,gridCols:0,justifyContent:"space-between",textAlign:"center",type:"base"};function o(e){void 0===e&&(e=l);const t=e.type??l.type,n=e.gridColumns?`repeat(${e.gridColumns}, minmax(auto, max-content))`:"initial",o={alignItems:e.alignItems,gridTemplateColumns:n,justifyContent:e.justifyContent,textAlign:e.textAlign??"center",gap:e.gap??"1rem",columnGap:e.columnGap};return a.createElement("div",{className:i[t],style:o},e.children)}},64183:(e,t,n)=>{n.d(t,{dS:()=>s,fK:()=>r,C9:()=>c,ZP:()=>m});var a=n(70079),i=n(5735);const l={linkList:"linkList_sLwJ",linkItem:"linkItem_ESvF"};function o(e){return a.createElement("li",{className:l.linkItem},a.createElement(i.Z,e,e.children))}function r(e){return a.createElement(o,{href:e.href},e.children??"View on Github")}function s(e){return a.createElement(o,{href:e.href},"View on Figma")}function c(e){return a.createElement("ul",{className:l.linkList},e.children)}function m(e){const{figma:t,github:n}=e;return a.createElement("ul",{className:l.linkList},n&&a.createElement(r,{href:n}),t&&a.createElement(s,{href:t}))}},12107:(e,t,n)=>{n(70079)},5735:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(70079),i=n(59788),l=n(65710),o=n(15537),r=n(28754);function s(e){const{href:t}=e,n=(0,l.L)({ariaHidden:!0,size:"s"}),s=t.includes("github")?o.Z:r.Z;return a.createElement(i.TextLink,e,a.createElement(s,n),e.children)}},26655:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>w,contentTitle:()=>y,default:()=>L,frontMatter:()=>N,metadata:()=>E,toc:()=>I});var a=n(10328),i=n(70079),l=n(38570),o=n(64183),r=n(59788),s=n(33233);const c=i.createElement(r.GridItem,null,i.createElement(r.FormControlProvider,{readOnly:!0},i.createElement(r.Checkbox,{checked:!0,id:"checked",name:"checked"},"Checked")));function m(){return c}const d=i.createElement(r.GridItem,null,i.createElement(r.FormControlProvider,{readOnly:!0},i.createElement(r.Checkbox,{checked:!0,indeterminate:!0,id:"indeterminate",name:"indeterminate"},"Indeterminate")));function u(){return d}const h=i.createElement(r.GridItem,null,i.createElement(r.FormControlProvider,{readOnly:!0,disabled:!0},i.createElement(r.Checkbox,{checked:!0,id:"disabled",name:"disabled"},"Disabled")));function p(){return h}const k=i.createElement(r.GridItem,null,i.createElement(r.FormControlProvider,{readOnly:!0,invalid:!0},i.createElement(r.Checkbox,{checked:!0,id:"invalid",name:"invalid"},"Invalid")));function b(){return k}const C=i.createElement(r.GridItem,null,i.createElement(r.FormControlProvider,{readOnly:!0},i.createElement(r.Checkbox,{checked:!0,id:"readOnly",name:"readOnly"},"Read only")));function g(){return C}const f=i.createElement(r.GridItem,null,i.createElement(r.FormControlProvider,{readOnly:!0,required:!0},i.createElement(r.Checkbox,{checked:!0,id:"required",name:"required"},"Required")));function x(){return f}const v=function(){return i.createElement(s.Z,null,i.createElement(r.Grid,{cols:"1fr 1fr",gap:0,style:{textAlign:"left"}},i.createElement(m,null),i.createElement(p,null),i.createElement(b,null),i.createElement(g,null),i.createElement(x,null),i.createElement(u,null)))};n(12107);const N={tags:["multi-select","field","form"],title:"Checkbox"},y=void 0,E={unversionedId:"reference/components/checkbox",id:"reference/components/checkbox",title:"Checkbox",description:"Used when a user needs to select multiple values from options in a form.",source:"@site/docs/reference/components/checkbox.mdx",sourceDirName:"reference/components",slug:"/reference/components/checkbox",permalink:"/docs/reference/components/checkbox",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/reference/components/checkbox.mdx",tags:[{label:"multi-select",permalink:"/docs/tags/multi-select"},{label:"field",permalink:"/docs/tags/field"},{label:"form",permalink:"/docs/tags/form"}],version:"current",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["multi-select","field","form"],title:"Checkbox"},sidebar:"reference",previous:{title:"Button",permalink:"/docs/reference/components/button"},next:{title:"Circular Progress",permalink:"/docs/reference/components/circular-progress"}},w={},I=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Checkbox",id:"basic-checkbox",level:3},{value:"Indeterminate Checkbox",id:"indeterminate-checkbox",level:3},{value:"States",id:"states",level:3},{value:"Customizing",id:"customizing",level:3},{value:"1. Unused Classes",id:"1-unused-classes",level:4},{value:"2. Passing a <code>className</code> prop",id:"2-passing-a-classname-prop",level:4},{value:"3. Ejected Checkbox",id:"3-ejected-checkbox",level:4},{value:"Behavior",id:"behavior",level:2},{value:"Layout",id:"layout",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Interactions",id:"interactions",level:3},{value:"API",id:"api",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Accessibility",id:"accessibility",level:2}],S={toc:I},T="wrapper";function L(e){let{components:t,...n}=e;return(0,l.kt)(T,(0,a.Z)({},S,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",{className:"size-xxl"},"Used when a user needs to select multiple values from options in a form."),(0,l.kt)(o.C9,{mdxType:"DocsLinkList"},(0,l.kt)(o.fK,{href:"https://github.com/pluralsight/pando/tree/main/packages/react/src/components/Checkbox.tsx",mdxType:"DocsGithubLink"}),(0,l.kt)(o.fK,{href:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/Checkbox/checkboxCSS.ts",mdxType:"DocsGithubLink"},"View Core API"),(0,l.kt)(o.dS,{href:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsFigmaLink"})),(0,l.kt)("h2",{id:"import"},"Import"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Checkbox } from '@pluralsight/react'\n")),(0,l.kt)("h2",{id:"anatomy"},"Anatomy"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Container"),(0,l.kt)("li",{parentName:"ol"},"Control"),(0,l.kt)("li",{parentName:"ol"},"Input"),(0,l.kt)("li",{parentName:"ol"},"Label")),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("h3",{id:"basic-checkbox"},"Basic Checkbox"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function BasicCheckbox() {\n  const [checked, setChecked] = useState(false)\n\n  function handleChange(e) {\n    setChecked(e.target.checked)\n  }\n\n  return (\n    <FormControlProvider>\n      <Checkbox\n        checked={checked}\n        id="sign_up"\n        name="sign_up"\n        onChange={handleChange}\n      >\n        Sign up for something\n      </Checkbox>\n    </FormControlProvider>\n  )\n}\n')),(0,l.kt)("h3",{id:"indeterminate-checkbox"},"Indeterminate Checkbox"),(0,l.kt)("p",null,"To display an indeterminate state, pass the ",(0,l.kt)("inlineCode",{parentName:"p"},"indeterminate")," prop along with the ",(0,l.kt)("inlineCode",{parentName:"p"},"checked")," to the Checkbox component."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function IndeterminateCheckbox() {\n  return (\n    <FormControlProvider readOnly={true}>\n      <Checkbox\n        checked={true}\n        id="select_all"\n        indeterminate={true}\n        name="select_all"\n      >\n        Select all\n      </Checkbox>\n    </FormControlProvider>\n  )\n}\n')),(0,l.kt)("h3",{id:"states"},"States"),(0,l.kt)(v,{mdxType:"CheckboxStates"}),(0,l.kt)("h3",{id:"customizing"},"Customizing"),(0,l.kt)("p",null,"There are 3 ways to customize the Checkbox component."),(0,l.kt)("h4",{id:"1-unused-classes"},"1. Unused Classes"),(0,l.kt)("p",null,"Each component layer of the Checkbox has a unused class name that can be utilized in your local CSS to customize the Checkbox at any level."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"pando-checkbox-container"),": The container element of the Checkbox."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"pando-checkbox-input"),": The input element of the Checkbox."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"pando-checkbox-control"),": The control element of the Checkbox.")),(0,l.kt)("h4",{id:"2-passing-a-classname-prop"},"2. Passing a ",(0,l.kt)("inlineCode",{parentName:"h4"},"className")," prop"),(0,l.kt)("p",null,"You can pass a ",(0,l.kt)("inlineCode",{parentName:"p"},"className")," prop to the Checkbox component to customize the Checkbox. This is useful if your project uses ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/css-modules/css-modules"},"CSS Modules")," or a CSS-in-JS library like ",(0,l.kt)("a",{parentName:"p",href:"https://emotion.sh/docs/introduction"},"Emotion"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Example of using CSS Modules to customize the Checkbox." showLineNumbers',title:'"Example',of:!0,using:!0,CSS:!0,Modules:!0,to:!0,customize:!0,the:!0,'Checkbox."':!0,showLineNumbers:!0},"import customStyles from './customStyles.module.css'\n\nfunction CustomCheckbox(props) {\n  return <Checkbox className={customStyles.custom} {...props} />\n}\n")),(0,l.kt)("h4",{id:"3-ejected-checkbox"},"3. Ejected Checkbox"),(0,l.kt)("p",null,'For a low-level "ejected" approach, you can use the Headless-styles API to customize the Checkbox however you prefer while keeping the accessibility behavior.'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"showLineNumbers",showLineNumbers:!0},"import { getCheckboxProps } from '@pluralsight/headless-styles'\n")),(0,l.kt)("p",null,"To learn more about the Headless-styles API, check out the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pluralsight/pando/blob/main/packages/headless-styles/src/components/Checkbox/checkboxCSS.ts"},"Headless-styles documentation"),"."),(0,l.kt)("h2",{id:"behavior"},"Behavior"),(0,l.kt)("h3",{id:"layout"},"Layout"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Do")," use multiple Checkboxes in a vertical list."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Don't")," use multiple Checkboxes in a single row."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Do")," provide a Label with a Checkbox."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Don't")," use a Checkbox inline without a Label."),(0,l.kt)("h3",{id:"usage-1"},"Usage"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Do"),' use a Checkbox for giving users an option to "opt-in" to a choice.'),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Don't")," use a Checkbox for showing/hiding content."),(0,l.kt)("h3",{id:"interactions"},"Interactions"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Do")," use the indeterminate state for a parent option of a nested group."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Don't")," use the indeterminate state for a single option within a group."),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {\n  checked: boolean\n  id: string\n  indeterminate?: boolean\n  name?: string\n}\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"checked"),": boolean - Whether the Checkbox is checked or not."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"id"),": string - The id of the Checkbox."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"indeterminate"),": boolean - Whether the Checkbox is in an indeterminate state or not."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"name"),": string - The name of the Checkbox.")),(0,l.kt)("h2",{id:"accessibility"},"Accessibility"),(0,l.kt)("p",null,"The Pando Checkbox is fully accessible and screen-readable through the following features:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"aria-invalid")," attribute is set to ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," when the input is invalid."),(0,l.kt)("li",{parentName:"ol"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"aria-describedby")," attribute is set to the ",(0,l.kt)("inlineCode",{parentName:"li"},"id")," of the FieldMessage or ErrorMessage that describes the input."),(0,l.kt)("li",{parentName:"ol"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"aria-required")," attribute is set to ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," when the input is required."),(0,l.kt)("li",{parentName:"ol"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"aria-disabled")," attribute is set to ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," when the input is disabled."),(0,l.kt)("li",{parentName:"ol"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"aria-checked")," attribute is set to ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," when the input is checked."),(0,l.kt)("li",{parentName:"ol"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"aria-checked")," attribute is set to ",(0,l.kt)("inlineCode",{parentName:"li"},"mixed")," when the input is indeterminate."),(0,l.kt)("li",{parentName:"ol"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"aria-hidden")," attribute is set to ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," on the input control and icon to hide it from screen readers.")))}L.isMDXComponent=!0}}]);