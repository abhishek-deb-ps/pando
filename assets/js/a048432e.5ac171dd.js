"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4950],{40736:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(45721),i={base:"base_M3w8",column:"column_mb9C base_M3w8",grid:"grid_EiLr base_M3w8"};const o={alignItems:"center",column:!1,gridCols:0,justifyContent:"space-between",textAlign:"center",type:"base"};function l(e){void 0===e&&(e=o);const t=e.type??o.type,n=e.gridColumns?`repeat(${e.gridColumns}, minmax(auto, max-content))`:"initial",l={alignItems:e.alignItems,gridTemplateColumns:n,justifyContent:e.justifyContent,textAlign:e.textAlign??"center",gap:e.gap??"1rem",columnGap:e.columnGap};return a.createElement("div",{className:i[t],style:l},e.children)}},15566:function(e,t,n){n.d(t,{dS:function(){return d},fK:function(){return s},C9:function(){return c},ZP:function(){return u}});var a=n(45721),i=n(84140),o="linkList_sLwJ",l="linkItem_ESvF";function r(e){return a.createElement("li",{className:l},a.createElement(i.Z,e,e.children))}function s(e){return a.createElement(r,{href:e.href},e.children??"View on Github")}function d(e){return a.createElement(r,{href:e.href},"View on Figma")}function c(e){return a.createElement("ul",{className:o},e.children)}function u(e){const{figma:t,github:n}=e;return a.createElement("ul",{className:o},n&&a.createElement(s,{href:n}),t&&a.createElement(d,{href:t}))}},45945:function(e,t,n){n(45721)},84140:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(45721),i=n(32662),o=n(51596),l=n(44070),r=n(42949);function s(e){const{href:t}=e,n=(0,o.L)({ariaHidden:!0,size:"s"}),s=t.includes("github")?l.Z:r.Z;return a.createElement(i.TextLink,e,a.createElement(s,n),e.children)}},99160:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return k},metadata:function(){return g},toc:function(){return b}});var a=n(81648),i=n(45721),o=n(70167),l=n(15566),r=n(32662),s=n(40736);function d(){return i.createElement(r.FormControlProvider,{readOnly:!0},i.createElement(r.GridItem,{col:"1 / span 6"},i.createElement(r.Radio,{checked:!0,id:"checked"},"Checked")))}function c(){return i.createElement(r.FormControlProvider,{disabled:!0},i.createElement(r.GridItem,{col:"1 / span 6"},i.createElement(r.Radio,{id:"disabled"},"Disabled")))}function u(){return i.createElement(r.FormControlProvider,{invalid:!0,readOnly:!0},i.createElement(r.GridItem,{col:"1 / span 6"},i.createElement(r.Radio,{checked:!0,id:"invalid",label:"Invalid"},"Invalid")))}function m(){return i.createElement(r.FormControlProvider,{readOnly:!0},i.createElement(r.GridItem,{col:"1 / span 6"},i.createElement(r.Radio,{id:"readOnly"},"Read only")))}function p(){return i.createElement(r.FormControlProvider,{required:!0},i.createElement(r.GridItem,{col:"1 / span 6"},i.createElement(r.Radio,{id:"required"},"Required")))}var h=function(){return i.createElement(s.Z,null,i.createElement(r.Grid,{"data-site-override":"initialTextAlign",cols:12,gap:16},i.createElement(d,null),i.createElement(c,null),i.createElement(u,null),i.createElement(m,null),i.createElement(p,null)))};n(45945);const k={tags:["single-select","field","form"],title:"Radio"},f=void 0,g={unversionedId:"reference/components/radio",id:"reference/components/radio",title:"Radio",description:"Used when when only one choice may be selected from a series of options.",source:"@site/docs/reference/components/radio.mdx",sourceDirName:"reference/components",slug:"/reference/components/radio",permalink:"/docs/reference/components/radio",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/reference/components/radio.mdx",tags:[{label:"single-select",permalink:"/docs/tags/single-select"},{label:"field",permalink:"/docs/tags/field"},{label:"form",permalink:"/docs/tags/form"}],version:"current",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["single-select","field","form"],title:"Radio"},sidebar:"reference",previous:{title:"Prompt Dialog",permalink:"/docs/reference/components/prompt-dialog"},next:{title:"Select",permalink:"/docs/reference/components/select"}},v={},b=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Radio",id:"basic-radio",level:3},{value:"States",id:"states",level:3},{value:"Customizing",id:"customizing",level:3},{value:"1. Unused Classes",id:"1-unused-classes",level:4},{value:"2. Passing a <code>className</code> prop",id:"2-passing-a-classname-prop",level:4},{value:"3. Ejected Radio",id:"3-ejected-radio",level:4},{value:"Behavior",id:"behavior",level:2},{value:"Layout",id:"layout",level:3},{value:"Usage",id:"usage-1",level:3},{value:"API",id:"api",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Accessibility",id:"accessibility",level:2}],N={toc:b};function y(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",{className:"size-xxl"},"Used when when only one choice may be selected from a series of options."),(0,o.kt)(l.C9,{mdxType:"DocsLinkList"},(0,o.kt)(l.fK,{href:"https://github.com/pluralsight/pando/tree/main/packages/react/src/components/Radio.tsx",mdxType:"DocsGithubLink"}),(0,o.kt)(l.fK,{href:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/Radio/radioCSS.ts",mdxType:"DocsGithubLink"},"View Core API"),(0,o.kt)(l.dS,{href:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsFigmaLink"})),(0,o.kt)("h2",{id:"import"},"Import"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Radio } from '@pluralsight/react'\n")),(0,o.kt)("h2",{id:"anatomy"},"Anatomy"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Container"),(0,o.kt)("li",{parentName:"ol"},"Control"),(0,o.kt)("li",{parentName:"ol"},"Input"),(0,o.kt)("li",{parentName:"ol"},"Label")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"basic-radio"},"Basic Radio"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function RadioList() {\n  const [options, setOptions] = useState(\'\')\n\n  function handleSetOptions(e) {\n    setOptions(e.target.value)\n  }\n\n  return (\n    <FormControlProvider>\n      <Fieldset name="option">\n        <Legend>Choose an option</Legend>\n        <Radio\n          checked={options === \'1\'}\n          id="option1"\n          onChange={handleSetOptions}\n          value="1"\n        >\n          Option 1\n        </Radio>\n        <Radio\n          checked={options === \'2\'}\n          id="option2"\n          onChange={handleSetOptions}\n          value="2"\n        >\n          Option 2\n        </Radio>\n        <Radio\n          checked={options === \'3\'}\n          id="option3"\n          onChange={handleSetOptions}\n          value="3"\n        >\n          Option 3\n        </Radio>\n      </Fieldset>\n      <FieldMessage>This will be added to your profile.</FieldMessage>\n    </FormControlProvider>\n  )\n}\n')),(0,o.kt)("h3",{id:"states"},"States"),(0,o.kt)(h,{mdxType:"RadioStates"}),(0,o.kt)("h3",{id:"customizing"},"Customizing"),(0,o.kt)("p",null,"There are 3 ways to customize the Radio component."),(0,o.kt)("h4",{id:"1-unused-classes"},"1. Unused Classes"),(0,o.kt)("p",null,"Each component layer of the Radio has a unused class name that can be utilized in your local CSS to customize the Radio at any level."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"pando-radio-container"),": The container element of the Radio."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"pando-radio-input"),": The input element of the Radio."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"pando-radio-control"),": The control element of the Radio.")),(0,o.kt)("h4",{id:"2-passing-a-classname-prop"},"2. Passing a ",(0,o.kt)("inlineCode",{parentName:"h4"},"className")," prop"),(0,o.kt)("p",null,"You can pass a ",(0,o.kt)("inlineCode",{parentName:"p"},"className")," prop to the Radio component to customize the Radio. This is useful if your project uses ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/css-modules/css-modules"},"CSS Modules")," or a CSS-in-JS library like ",(0,o.kt)("a",{parentName:"p",href:"https://emotion.sh/docs/introduction"},"Emotion"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Example of using CSS Modules to customize the Radio." showLineNumbers',title:'"Example',of:!0,using:!0,CSS:!0,Modules:!0,to:!0,customize:!0,the:!0,'Radio."':!0,showLineNumbers:!0},"import customStyles from './customStyles.module.css'\n\nfunction CustomRadio(props) {\n  return <Radio className={customStyles.custom} {...props} />\n}\n")),(0,o.kt)("h4",{id:"3-ejected-radio"},"3. Ejected Radio"),(0,o.kt)("p",null,'For a low-level "ejected" approach, you can use the Headless-styles API to customize the Radio however you prefer while keeping the accessibility behavior.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"showLineNumbers",showLineNumbers:!0},"import { getRadioProps } from '@pluralsight/headless-styles'\n")),(0,o.kt)("p",null,"To learn more about the Headless-styles API, check out the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pluralsight/pando/blob/main/packages/headless-styles/src/components/Radio/radioCSS.ts"},"Headless-styles documentation"),"."),(0,o.kt)("h2",{id:"behavior"},"Behavior"),(0,o.kt)("h3",{id:"layout"},"Layout"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do")," use multiple Radios in a vertical list."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Don't")," use multiple Radios in a single row."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do")," provide a Label with a Radio."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Don't")," use a Radio inline without a Label."),(0,o.kt)("h3",{id:"usage-1"},"Usage"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do")," use a Radio for giving users a group of options from which they can select a single item."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Don't")," use a Radio for showing/hiding content."),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type RadioProps = InputHTMLAttributes<HTMLInputElement>\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Any props that the HTMLInputElement accepts")),(0,o.kt)("h2",{id:"accessibility"},"Accessibility"),(0,o.kt)("p",null,"The Pando Radio is fully accessible and screen-readable through the following features:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"aria-invalid")," attribute is set to ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," when the input is invalid."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"aria-describedby")," attribute is set to the ",(0,o.kt)("inlineCode",{parentName:"li"},"id")," of the FieldMessage or ErrorMessage that describes the input."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"aria-required")," attribute is set to ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," when the input is required."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"aria-disabled")," attribute is set to ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," when the input is disabled."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"aria-checked")," attribute is set to ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," when the input is checked."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"aria-checked")," attribute is set to ",(0,o.kt)("inlineCode",{parentName:"li"},"mixed")," when the input is indeterminate."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"aria-hidden")," attribute is set to ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," on the input control and icon to hide it from screen readers.")))}y.isMDXComponent=!0}}]);