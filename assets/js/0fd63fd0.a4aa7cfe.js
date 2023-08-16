"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7386],{15566:function(e,n,t){t.d(n,{dS:function(){return c},fK:function(){return s},C9:function(){return u},ZP:function(){return d}});var o=t(45721),a=t(84140),i="linkList_sLwJ",l="linkItem_ESvF";function r(e){return o.createElement("li",{className:l},o.createElement(a.Z,e,e.children))}function s(e){return o.createElement(r,{href:e.href},e.children??"View on Github")}function c(e){return o.createElement(r,{href:e.href},"View on Figma")}function u(e){return o.createElement("ul",{className:i},e.children)}function d(e){const{figma:n,github:t}=e;return o.createElement("ul",{className:i},t&&o.createElement(s,{href:t}),n&&o.createElement(c,{href:n}))}},45945:function(e,n,t){t(45721)},84140:function(e,n,t){t.d(n,{Z:function(){return s}});var o=t(45721),a=t(95799),i=t(80404),l=t(38345),r=t(35125);function s(e){const{href:n}=e,t=(0,i.L)({ariaHidden:!0,size:"s"}),s=n.includes("github")?l.Z:r.Z;return o.createElement(a.TextLink,e,o.createElement(s,t),e.children)}},76843:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return r},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var o=t(81648),a=(t(45721),t(70167)),i=t(15566);t(45945);const l={tags:["logical components","toggle ui"],title:"Show"},r=void 0,s={unversionedId:"reference/components/show",id:"reference/components/show",title:"Show",description:"Used to conditionally show/hide components based on a Boolean value.",source:"@site/docs/reference/components/show.mdx",sourceDirName:"reference/components",slug:"/reference/components/show",permalink:"/docs/reference/components/show",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/reference/components/show.mdx",tags:[{label:"logical components",permalink:"/docs/tags/logical-components"},{label:"toggle ui",permalink:"/docs/tags/toggle-ui"}],version:"current",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["logical components","toggle ui"],title:"Show"},sidebar:"reference",previous:{title:"Select",permalink:"/docs/reference/components/select"},next:{title:"Skeleton",permalink:"/docs/reference/components/skeleton"}},c={},u=[{value:"Anatomy",id:"anatomy",level:2},{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic",id:"basic",level:3},{value:"Behavior",id:"behavior",level:2},{value:"API",id:"api",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Accessibility",id:"accessibility",level:2}],d={toc:u};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",{className:"size-xxl"},"Used to conditionally show/hide components based on a Boolean value."),(0,a.kt)(i.C9,{mdxType:"DocsLinkList"},(0,a.kt)(i.fK,{href:"https://github.com/pluralsight/pando/tree/main/packages/react/src/components/Show.tsx",mdxType:"DocsGithubLink"})),(0,a.kt)("h2",{id:"anatomy"},"Anatomy"),(0,a.kt)("p",null,"This component is a utility and does not render any DOM elements."),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Show } from '@pluralsight/react'\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"basic"},"Basic"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function BasicExample() {\n  const [loggedIn, setLoggedIn] = useState(false)\n\n  function handleLogin() {\n    setLoggedIn(true)\n  }\n\n  function handleLogout() {\n    setLoggedIn(false)\n  }\n\n  return (\n    <Show\n      when={loggedIn}\n      fallback={\n        <Button onClick={handleLogin} type="button">\n          Log In\n        </Button>\n      }\n    >\n      <Button onClick={handleLogout} sentiment="default" type="button">\n        Log Out\n      </Button>\n    </Show>\n  )\n}\n')),(0,a.kt)("h2",{id:"behavior"},"Behavior"),(0,a.kt)("p",null,"There are no behaviors associated with this component."),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ShowProps {\n  fallback?: NonNullable<ReactNode> | null\n  when: boolean\n}\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"fallback"),": A ReactNode to render when ",(0,a.kt)("inlineCode",{parentName:"li"},"when")," is false."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"when"),": A boolean value to determine whether to render the children or the fallback.")),(0,a.kt)("h2",{id:"accessibility"},"Accessibility"),(0,a.kt)("p",null,"There is no special accessibility considerations for this component."))}m.isMDXComponent=!0}}]);