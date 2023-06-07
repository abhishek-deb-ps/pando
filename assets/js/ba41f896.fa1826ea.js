"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9305],{24346:function(e,t,n){var a=n(45721),i=n(76448),l=n(84285),o=n(1073),r=n(40736);const s=a.createElement(i.P,null,a.createElement(l.s,{readOnly:!0},a.createElement(o.X,{checked:!0,id:"checked",name:"checked"},"Checked")));function c(){return s}const u=a.createElement(i.P,null,a.createElement(l.s,{readOnly:!0},a.createElement(o.X,{checked:!0,indeterminate:!0,id:"indeterminate",name:"indeterminate"},"Indeterminate")));function m(){return u}const d=a.createElement(i.P,null,a.createElement(l.s,{readOnly:!0,disabled:!0},a.createElement(o.X,{checked:!0,id:"disabled",name:"disabled"},"Disabled")));function p(){return d}const h=a.createElement(i.P,null,a.createElement(l.s,{readOnly:!0,invalid:!0},a.createElement(o.X,{checked:!0,id:"invalid",name:"invalid"},"Invalid")));function k(){return h}const b=a.createElement(i.P,null,a.createElement(l.s,{readOnly:!0},a.createElement(o.X,{checked:!0,id:"readOnly",name:"readOnly"},"Read only")));function f(){return b}const g=a.createElement(i.P,null,a.createElement(l.s,{readOnly:!0,required:!0},a.createElement(o.X,{checked:!0,id:"required",name:"required"},"Required")));function C(){return g}t.Z=function(){return a.createElement(r.Z,null,a.createElement(i.r,{cols:"1fr 1fr",gap:0,style:{textAlign:"left"}},a.createElement(c,null),a.createElement(p,null),a.createElement(k,null),a.createElement(f,null),a.createElement(C,null),a.createElement(m,null)))}},40736:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(45721),i={base:"base_M3w8",column:"column_mb9C base_M3w8",grid:"grid_EiLr base_M3w8"};const l={alignItems:"center",column:!1,gridCols:0,justifyContent:"space-between",textAlign:"center",type:"base"};function o(e){void 0===e&&(e=l);const t=e.type??l.type,n=e.gridColumns?`repeat(${e.gridColumns}, minmax(auto, max-content))`:"initial",o={alignItems:e.alignItems,gridTemplateColumns:n,justifyContent:e.justifyContent,textAlign:e.textAlign??"center",gap:e.gap??"1rem",columnGap:e.columnGap};return a.createElement("div",{className:i[t],style:o},e.children)}},15566:function(e,t,n){n.d(t,{dS:function(){return c},fK:function(){return s},C9:function(){return u},ZP:function(){return m}});var a=n(45721),i=n(84140),l="linkList_sLwJ",o="linkItem_ESvF";function r(e){return a.createElement("li",{className:o},a.createElement(i.Z,e,e.children))}function s(e){return a.createElement(r,{href:e.href},e.children??"View on Github")}function c(e){return a.createElement(r,{href:e.href},"View on Figma")}function u(e){return a.createElement("ul",{className:l},e.children)}function m(e){const{figma:t,github:n}=e;return a.createElement("ul",{className:l},n&&a.createElement(s,{href:n}),t&&a.createElement(c,{href:t}))}},45945:function(e,t,n){n(45721)},84140:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(45721),i=n(65086),l=n(62818),o=n(67718),r=n(22227);function s(e){const{href:t}=e,n=(0,l.L)({ariaHidden:!0,size:"s"}),s=t.includes("github")?o.Z:r.Z;return a.createElement(i.h,e,a.createElement(s,n),e.children)}},36664:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return m}});var a=n(81648),i=(n(45721),n(70167)),l=n(15566),o=n(24346);n(45945);const r={tags:["multi-select","field","form"],title:"Checkbox"},s=void 0,c={unversionedId:"reference/components/checkbox",id:"reference/components/checkbox",title:"Checkbox",description:"Used when a user needs to select multiple values from options in a form.",source:"@site/docs/reference/components/checkbox.mdx",sourceDirName:"reference/components",slug:"/reference/components/checkbox",permalink:"/docs/next/reference/components/checkbox",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/reference/components/checkbox.mdx",tags:[{label:"multi-select",permalink:"/docs/next/tags/multi-select"},{label:"field",permalink:"/docs/next/tags/field"},{label:"form",permalink:"/docs/next/tags/form"}],version:"current",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["multi-select","field","form"],title:"Checkbox"},sidebar:"reference",previous:{title:"Button",permalink:"/docs/next/reference/components/button"},next:{title:"Circular Progress",permalink:"/docs/next/reference/components/circular-progress"}},u={},m=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Checkbox",id:"basic-checkbox",level:3},{value:"Indeterminate Checkbox",id:"indeterminate-checkbox",level:3},{value:"States",id:"states",level:3},{value:"Customizing",id:"customizing",level:3},{value:"1. Unused Classes",id:"1-unused-classes",level:4},{value:"2. Passing a <code>className</code> prop",id:"2-passing-a-classname-prop",level:4},{value:"3. Ejected Checkbox",id:"3-ejected-checkbox",level:4},{value:"Behavior",id:"behavior",level:2},{value:"Layout",id:"layout",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Interactions",id:"interactions",level:3},{value:"API",id:"api",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Accessibility",id:"accessibility",level:2}],d={toc:m};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",{className:"size-xxl"},"Used when a user needs to select multiple values from options in a form."),(0,i.kt)(l.C9,{mdxType:"DocsLinkList"},(0,i.kt)(l.fK,{href:"https://github.com/pluralsight/pando/tree/main/packages/react/src/components/Checkbox.tsx",mdxType:"DocsGithubLink"}),(0,i.kt)(l.fK,{href:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/Checkbox/checkboxCSS.ts",mdxType:"DocsGithubLink"},"View Core API"),(0,i.kt)(l.dS,{href:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsFigmaLink"})),(0,i.kt)("h2",{id:"import"},"Import"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Checkbox } from '@pluralsight/react'\n")),(0,i.kt)("h2",{id:"anatomy"},"Anatomy"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Container"),(0,i.kt)("li",{parentName:"ol"},"Control"),(0,i.kt)("li",{parentName:"ol"},"Input"),(0,i.kt)("li",{parentName:"ol"},"Label")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"basic-checkbox"},"Basic Checkbox"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function BasicCheckbox() {\n  const [checked, setChecked] = useState(false)\n\n  function handleChange(e) {\n    setChecked(e.target.checked)\n  }\n\n  return (\n    <FormControlProvider>\n      <Checkbox\n        checked={checked}\n        id="sign_up"\n        name="sign_up"\n        onChange={handleChange}\n      >\n        Sign up for something\n      </Checkbox>\n    </FormControlProvider>\n  )\n}\n')),(0,i.kt)("h3",{id:"indeterminate-checkbox"},"Indeterminate Checkbox"),(0,i.kt)("p",null,"To display an indeterminate state, pass the ",(0,i.kt)("inlineCode",{parentName:"p"},"indeterminate")," prop along with the ",(0,i.kt)("inlineCode",{parentName:"p"},"checked")," to the Checkbox component."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function IndeterminateCheckbox() {\n  return (\n    <FormControlProvider readOnly={true}>\n      <Checkbox\n        checked={true}\n        id="select_all"\n        indeterminate={true}\n        name="select_all"\n      >\n        Select all\n      </Checkbox>\n    </FormControlProvider>\n  )\n}\n')),(0,i.kt)("h3",{id:"states"},"States"),(0,i.kt)(o.Z,{mdxType:"CheckboxStates"}),(0,i.kt)("h3",{id:"customizing"},"Customizing"),(0,i.kt)("p",null,"There are 3 ways to customize the Checkbox component."),(0,i.kt)("h4",{id:"1-unused-classes"},"1. Unused Classes"),(0,i.kt)("p",null,"Each component layer of the Checkbox has a unused class name that can be utilized in your local CSS to customize the Checkbox at any level."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"pando-checkbox-container"),": The container element of the Checkbox."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"pando-checkbox-input"),": The input element of the Checkbox."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"pando-checkbox-control"),": The control element of the Checkbox.")),(0,i.kt)("h4",{id:"2-passing-a-classname-prop"},"2. Passing a ",(0,i.kt)("inlineCode",{parentName:"h4"},"className")," prop"),(0,i.kt)("p",null,"You can pass a ",(0,i.kt)("inlineCode",{parentName:"p"},"className")," prop to the Checkbox component to customize the Checkbox. This is useful if your project uses ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/css-modules/css-modules"},"CSS Modules")," or a CSS-in-JS library like ",(0,i.kt)("a",{parentName:"p",href:"https://emotion.sh/docs/introduction"},"Emotion"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Example of using CSS Modules to customize the Checkbox." showLineNumbers',title:'"Example',of:!0,using:!0,CSS:!0,Modules:!0,to:!0,customize:!0,the:!0,'Checkbox."':!0,showLineNumbers:!0},"import customStyles from './customStyles.module.css'\n\nfunction CustomCheckbox(props) {\n  return <Checkbox className={customStyles.custom} {...props} />\n}\n")),(0,i.kt)("h4",{id:"3-ejected-checkbox"},"3. Ejected Checkbox"),(0,i.kt)("p",null,'For a low-level "ejected" approach, you can use the Headless-styles API to customize the Checkbox however you prefer while keeping the accessibility behavior.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"showLineNumbers",showLineNumbers:!0},"import { getCheckboxProps } from '@pluralsight/headless-styles'\n")),(0,i.kt)("p",null,"To learn more about the Headless-styles API, check out the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pluralsight/pando/blob/main/packages/headless-styles/src/components/Checkbox/checkboxCSS.ts"},"Headless-styles documentation"),"."),(0,i.kt)("h2",{id:"behavior"},"Behavior"),(0,i.kt)("h3",{id:"layout"},"Layout"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Do")," use multiple Checkboxes in a vertical list."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Don't")," use multiple Checkboxes in a single row."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Do")," provide a Label with a Checkbox."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Don't")," use a Checkbox inline without a Label."),(0,i.kt)("h3",{id:"usage-1"},"Usage"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Do"),' use a Checkbox for giving users an option to "opt-in" to a choice.'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Don't")," use a Checkbox for showing/hiding content."),(0,i.kt)("h3",{id:"interactions"},"Interactions"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Do")," use the indeterminate state for a parent option of a nested group."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Don't")," use the indeterminate state for a single option within a group."),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {\n  checked: boolean\n  id: string\n  indeterminate?: boolean\n  name?: string\n}\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"checked"),": boolean - Whether the Checkbox is checked or not."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"id"),": string - The id of the Checkbox."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"indeterminate"),": boolean - Whether the Checkbox is in an indeterminate state or not."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"name"),": string - The name of the Checkbox.")),(0,i.kt)("h2",{id:"accessibility"},"Accessibility"),(0,i.kt)("p",null,"The Pando Checkbox is fully accessible and screen-readable through the following features:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"aria-invalid")," attribute is set to ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," when the input is invalid."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"aria-describedby")," attribute is set to the ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," of the FieldMessage or ErrorMessage that describes the input."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"aria-required")," attribute is set to ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," when the input is required."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"aria-disabled")," attribute is set to ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," when the input is disabled."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"aria-checked")," attribute is set to ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," when the input is checked."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"aria-checked")," attribute is set to ",(0,i.kt)("inlineCode",{parentName:"li"},"mixed")," when the input is indeterminate."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"aria-hidden")," attribute is set to ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," on the input control and icon to hide it from screen readers.")))}p.isMDXComponent=!0}}]);