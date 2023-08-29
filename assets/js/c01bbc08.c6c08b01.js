"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8586],{5735:(e,t,o)=>{o.d(t,{Z:()=>i});var s=o(70079),r=o(59788),a=o(65710),n=o(15537),l=o(28754);function i(e){const{href:t}=e,o=(0,a.L)({ariaHidden:!0,size:"s"}),i=t.includes("github")?n.Z:l.Z;return s.createElement(r.TextLink,e,s.createElement(i,o),e.children)}},9900:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>k,frontMatter:()=>n,metadata:()=>i,toc:()=>u});var s=o(10328),r=(o(70079),o(38570)),a=o(5735);const n={tags:["React","Confirm Dialog","Modal","Keyboard Event"],title:"useEscToClose"},l=void 0,i={unversionedId:"reference/react-hooks/useEscToClose",id:"reference/react-hooks/useEscToClose",title:"useEscToClose",description:'A hook for calling a function when the user presses the "Escape" key.',source:"@site/docs/reference/react-hooks/useEscToClose.mdx",sourceDirName:"reference/react-hooks",slug:"/reference/react-hooks/useEscToClose",permalink:"/docs/reference/react-hooks/useEscToClose",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/reference/react-hooks/useEscToClose.mdx",tags:[{label:"React",permalink:"/docs/tags/react"},{label:"Confirm Dialog",permalink:"/docs/tags/confirm-dialog"},{label:"Modal",permalink:"/docs/tags/modal"},{label:"Keyboard Event",permalink:"/docs/tags/keyboard-event"}],version:"current",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["React","Confirm Dialog","Modal","Keyboard Event"],title:"useEscToClose"},sidebar:"reference",previous:{title:"useAutoFormatDate",permalink:"/docs/reference/react-hooks/useAutoFormatDate"},next:{title:"useFocusTrap",permalink:"/docs/reference/react-hooks/useFocusTrap"}},c={},u=[{value:"Import",id:"import",level:2},{value:"Reference",id:"reference",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"My hook keeps re-rendering constantly",id:"my-hook-keeps-re-rendering-constantly",level:3}],p={toc:u},d="wrapper";function k(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,s.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",{className:"size-xxl"},'A hook for calling a function when the user presses the "Escape" key.'),(0,r.kt)(a.Z,{icon:"github",href:"https://github.com/pluralsight/tva/blob/main/packages/react-utils/src/hooks/useEscToClose.ts",mdxType:"ViewSourceLink"},"View source"),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useEscToClose } from '@pluralsight/react-utils'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"useEscToClose(onClose: memoizedCallback)\n")),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("p",null,"Call ",(0,r.kt)("inlineCode",{parentName:"p"},"useEscToClose"),' at the Effect level of the component in which you wish to call an event when the "Esc" key is pressed:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"showLineNumbers {18}",showLineNumbers:!0,"{18}":!0},"function ConfirmDialog(props, triggerRef) {\n  const { onClose, ...dialogProps } = props\n\n  useEscToClose(onClose)\n")),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"onClose"),": a ",(0,r.kt)("strong",{parentName:"li"},"memoized Callback")," created from the ",(0,r.kt)("inlineCode",{parentName:"li"},"useCallback")," hook.")),(0,r.kt)("h3",{id:"returns"},"Returns"),(0,r.kt)("p",null,"This hook returns ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("h3",{id:"my-hook-keeps-re-rendering-constantly"},"My hook keeps re-rendering constantly"),(0,r.kt)("p",null,"Make sure you are passing in a function that has been created using the ",(0,r.kt)("inlineCode",{parentName:"p"},"useCallback")," hook provided by React."))}k.isMDXComponent=!0}}]);