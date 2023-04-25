"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1624],{61471:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(45721),o=n(64965),a=n(4094),u=n(31026),i=n(6115);function s(e){const{href:t}=e,n=(0,o.g)({href:t}),s=(0,a.g)(n.iconOptions),c=t.includes("github")?u.Z:i.Z;return r.createElement("a",n.link,r.createElement(c,s),e.children)}},92773:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return l}});var r=n(81648),o=(n(45721),n(70167)),a=n(61471);const u={tags:["React","Menu","Submenu state"],title:"useSubmenuInteraction"},i=void 0,s={unversionedId:"reference/react-hooks/useSubmenuInteraction",id:"version-0.4.1/reference/react-hooks/useSubmenuInteraction",title:"useSubmenuInteraction",description:"A hook for handling submenu interactions and state within a menu role.",source:"@site/versioned_docs/version-0.4.1/reference/react-hooks/useSubmenuInteraction.mdx",sourceDirName:"reference/react-hooks",slug:"/reference/react-hooks/useSubmenuInteraction",permalink:"/docs/reference/react-hooks/useSubmenuInteraction",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/versioned_docs/version-0.4.1/reference/react-hooks/useSubmenuInteraction.mdx",tags:[{label:"React",permalink:"/docs/tags/react"},{label:"Menu",permalink:"/docs/tags/menu"},{label:"Submenu state",permalink:"/docs/tags/submenu-state"}],version:"0.4.1",lastUpdatedBy:"Tom Pietrosanti",frontMatter:{tags:["React","Menu","Submenu state"],title:"useSubmenuInteraction"},sidebar:"reference",previous:{title:"useRovingTabIndex",permalink:"/docs/reference/react-hooks/useRovingTabIndex"},next:{title:"useTabs",permalink:"/docs/reference/react-hooks/useTabs"}},c={},l=[{value:"Import",id:"import",level:2},{value:"Reference",id:"reference",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}],p={toc:l};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",{className:"size-xxl"},"A hook for handling submenu interactions and state within a menu role."),(0,o.kt)(a.Z,{icon:"github",href:"https://github.com/pluralsight/tva/blob/main/packages/react-utils/src/hooks/useSubmenuInteraction.ts",mdxType:"ViewSourceLink"},"View source"),(0,o.kt)("h2",{id:"import"},"Import"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useSubmenuInteraction } from '@pluralsight/react-utils'\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"useSubmenuInteraction()\n")),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("p",null,"Call ",(0,o.kt)("inlineCode",{parentName:"p"},"useSubmenuInteraction")," at the top level of the Submenu component to which you would like to add interactive features:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"showLineNumbers {2,6,8}",showLineNumbers:!0,"{2,6,8}":!0},"export function Submenu(props) {\n  const submenuInteractionProps = useSubmenuInteraction()\n\n  return (\n    <li>\n      <button {...submenuInteractionProps.trigger}>{props.label}</button>\n\n      <menu {...submenuInteractionProps.menu}>{props.children}</menu>\n    </li>\n  )\n}\n")),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,"This hook doesn't accept any parameters."),(0,o.kt)("h3",{id:"returns"},"Returns"),(0,o.kt)("p",null,"An Object containing an ",(0,o.kt)("inlineCode",{parentName:"p"},"expanded")," property of a Boolean value related to the state of the menu. A ",(0,o.kt)("inlineCode",{parentName:"p"},"menu")," property to containing both event delegation and accessbility properties to spread on the ",(0,o.kt)("inlineCode",{parentName:"p"},"menu")," element. A ",(0,o.kt)("inlineCode",{parentName:"p"},"trigger")," property containing event delegation, ref, and dataset properties to spread on the element responsible for triggering the state of the menu (usually a ",(0,o.kt)("inlineCode",{parentName:"p"},"button"),")."),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"))}m.isMDXComponent=!0}}]);