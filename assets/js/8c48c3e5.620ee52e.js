"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[166],{64183:(e,t,n)=>{n.d(t,{dS:()=>s,fK:()=>o,C9:()=>d,ZP:()=>m});var r=n(70079),a=n(5735);const i={linkList:"linkList_sLwJ",linkItem:"linkItem_ESvF"};function l(e){return r.createElement("li",{className:i.linkItem},r.createElement(a.Z,e,e.children))}function o(e){return r.createElement(l,{href:e.href},e.children??"View on Github")}function s(e){return r.createElement(l,{href:e.href},"View on Figma")}function d(e){return r.createElement("ul",{className:i.linkList},e.children)}function m(e){const{figma:t,github:n}=e;return r.createElement("ul",{className:i.linkList},n&&r.createElement(o,{href:n}),t&&r.createElement(s,{href:t}))}},12107:(e,t,n)=>{n(70079)},5735:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(70079),a=n(59788),i=n(65710),l=n(15537),o=n(28754);function s(e){const{href:t}=e,n=(0,i.L)({ariaHidden:!0,size:"s"}),s=t.includes("github")?l.Z:o.Z;return r.createElement(a.TextLink,e,r.createElement(s,n),e.children)}},10858:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var r=n(10328),a=(n(70079),n(38570)),i=n(64183);n(12107);const l={tags:["field"],title:"Form Control"},o=void 0,s={unversionedId:"reference/components/form-control",id:"reference/components/form-control",title:"Form Control",description:"Used to centrally manage form field and grouped field states.",source:"@site/docs/reference/components/form-control.mdx",sourceDirName:"reference/components",slug:"/reference/components/form-control",permalink:"/docs/reference/components/form-control",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/reference/components/form-control.mdx",tags:[{label:"field",permalink:"/docs/tags/field"}],version:"current",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["field"],title:"Form Control"},sidebar:"reference",previous:{title:"For",permalink:"/docs/reference/components/for"},next:{title:"Form Label",permalink:"/docs/reference/components/form-label"}},d={},m=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Example",id:"basic-example",level:3},{value:"Behavior",id:"behavior",level:2},{value:"Patterns",id:"patterns",level:3},{value:"Usage",id:"usage-1",level:3},{value:"API",id:"api",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Accessibility",id:"accessibility",level:2}],p={toc:m},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",{className:"size-xxl"},"Used to centrally manage form field and grouped field states."),(0,a.kt)(i.ZP,{github:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/FormControl",figma:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsLinkBar"}),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { FormControlProvider } from '@pluralsight/react'\n")),(0,a.kt)("h2",{id:"anatomy"},"Anatomy"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Form Control"),(0,a.kt)("li",{parentName:"ol"},"Label"),(0,a.kt)("li",{parentName:"ol"},"Input"),(0,a.kt)("li",{parentName:"ol"},"Message")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("admonition",{title:"Form Control manages validity",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"FormControlProvider")," was designed to manage the state of each ",(0,a.kt)("strong",{parentName:"p"},"individual")," field you are using instead of repeating it yourself for each child component. The ",(0,a.kt)("inlineCode",{parentName:"p"},"FormControlProvider")," should wrap each field you want to include in your form/view.")),(0,a.kt)("h3",{id:"basic-example"},"Basic Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function BasicFormControl() {\n  // This is normally done outside of the component and via a 3rd party library\n  const [formState, setFormState] = useState({\n    input1: {\n      disabled: false,\n      invalid: true,\n      readOnly: false,\n      required: true,\n    },\n    input2: {\n      disabled: false,\n      invalid: false,\n      readOnly: false,\n      required: false,\n    },\n  })\n\n  return (\n    <form>\n      <FormControlProvider {...formState.input1}>\n        <Label htmlFor="input1">Input 1</Label>\n        <Input\n          describedBy="input1:help,input1:error"\n          id="input1"\n          name="input1"\n          type="text"\n          value=""\n        />\n        <FieldMessage id="input1:help">\n          This is a help message for Input 1\n        </FieldMessage>\n        <ErrorMessage id="input1:error">\n          This is an error message for Input 1\n        </ErrorMessage>\n      </FormControlProvider>\n\n      <br />\n\n      <FormControlProvider {...formState.input2}>\n        <Label htmlFor="input2">Input 2</Label>\n        <Input\n          describedBy="input2:help,input2:error"\n          id="input2"\n          name="input2"\n          type="text"\n          value=""\n        />\n        <FieldMessage id="input2:help">\n          This is a help message for Input 1\n        </FieldMessage>\n        <ErrorMessage id="input2:error">\n          This is an error message for Input 1\n        </ErrorMessage>\n      </FormControlProvider>\n    </form>\n  )\n}\n')),(0,a.kt)("h2",{id:"behavior"},"Behavior"),(0,a.kt)("h3",{id:"patterns"},"Patterns"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do")," use the WarningTriangleFilled Icon for all invalid input fields."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't")," use any other Icon to represent an invalid input field."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do")," stack form fields vertically when displaying a set."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't")," use more than one form field within the same row."),(0,a.kt)("h3",{id:"usage-1"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do"),' use the "(required)" text flag on all required form field labels.'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't"),' use a "',"*",'" to represent a required field; this pattern is not accessible.'),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface FormControlOptions {\n  disabled?: boolean\n  invalid?: boolean\n  readOnly?: boolean\n  required?: boolean\n}\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"disabled"),": whether the field is disabled."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"invalid"),": whether the field is invalid."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"readOnly"),": whether the field is read only."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"required"),": whether the field is required.")),(0,a.kt)("h2",{id:"accessibility"},"Accessibility"),(0,a.kt)("p",null,"The Pando Form Control and Icon APIs combined with semantic HTML allow the Form Control to be fully accessible and screen-readable."))}c.isMDXComponent=!0}}]);