"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4716],{61471:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(45721),a=n(64965),o=n(4094),s=n(59393),i=n(79719);function c(e){const{href:t}=e,n=(0,a.g)({href:t}),c=(0,o.g)(n.iconOptions),u=t.includes("github")?s.Z:i.Z;return r.createElement("a",n.link,r.createElement(u,c),e.children)}},62548:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var r=n(81648),a=(n(45721),n(70167)),o=n(61471);const s={tags:["React","Checkbox State","Indeterminate"],title:"useIsIndeterminate"},i=void 0,c={unversionedId:"reference/react-hooks/useIsIndeterminate",id:"reference/react-hooks/useIsIndeterminate",title:"useIsIndeterminate",description:"A hook for determining whether a Checkbox group has an indeterminate state.",source:"@site/docs/reference/react-hooks/useIsIndeterminate.mdx",sourceDirName:"reference/react-hooks",slug:"/reference/react-hooks/useIsIndeterminate",permalink:"/docs/next/reference/react-hooks/useIsIndeterminate",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/reference/react-hooks/useIsIndeterminate.mdx",tags:[{label:"React",permalink:"/docs/next/tags/react"},{label:"Checkbox State",permalink:"/docs/next/tags/checkbox-state"},{label:"Indeterminate",permalink:"/docs/next/tags/indeterminate"}],version:"current",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["React","Checkbox State","Indeterminate"],title:"useIsIndeterminate"},sidebar:"reference",previous:{title:"useFocusTrap",permalink:"/docs/next/reference/react-hooks/useFocusTrap"},next:{title:"useMenuInteraction",permalink:"/docs/next/reference/react-hooks/useMenuInteraction"}},u={},l=[{value:"Import",id:"import",level:2},{value:"Reference",id:"reference",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"My hook only returns false even though my Checkboxes are updating in the browser",id:"my-hook-only-returns-false-even-though-my-checkboxes-are-updating-in-the-browser",level:3}],h={toc:l};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",{className:"size-xxl"},"A hook for determining whether a Checkbox group has an indeterminate state."),(0,a.kt)(o.Z,{icon:"github",href:"https://github.com/pluralsight/tva/blob/main/packages/react-utils/src/hooks/useIsIndeterminate.ts",mdxType:"ViewSourceLink"},"View source"),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { unstable_useIsIndeterminate } from '@pluralsight/react-utils'\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface CheckboxGroup {\n  [k: string]: boolean\n}\n\nuseIsIndeterminate(group: CheckboxGroup)\n")),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("p",null,"Call ",(0,a.kt)("inlineCode",{parentName:"p"},"useIsIndeterminate")," at the Effect level of the component in which you wish to determine the state of a Checkbox group:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"showLineNumbers {8}",showLineNumbers:!0,"{8}":!0},"function Form() {\n  const [allSelected, setAllSelected] = useState(false)\n  const [checkboxGroup, setCheckboxGroup] = useState({\n    one: false,\n    two: false,\n    three: false\n  })\n  const isIndeterminate = useIsIndeterminate(checkboxGroup)\n")),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"checkboxGroup"),': an Object containing the available Checkbox items in a group containing Boolean values describing thier "checked" state.')),(0,a.kt)("h3",{id:"returns"},"Returns"),(0,a.kt)("p",null,"This hook returns a Boolean value representing if the group is indeterminate."),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("h3",{id:"my-hook-only-returns-false-even-though-my-checkboxes-are-updating-in-the-browser"},"My hook only returns false even though my Checkboxes are updating in the browser"),(0,a.kt)("p",null,'Make sure you are passing in the correct type of state of an Object containg property names that match the selector of choice you are using for the Checkboxes "checked" state with a Boolean value.'),(0,a.kt)("p",null,"Likewise, make sure you are passing in an Object created from the ",(0,a.kt)("inlineCode",{parentName:"p"},"useState")," hook to ensure the checkboxGroup parameter is actually changing with the UI."))}m.isMDXComponent=!0}}]);