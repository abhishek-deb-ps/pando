"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[548],{61471:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(45721),i=n(64965),o=n(4094),s=n(31026),r=n(6115);function l(e){const{href:t}=e,n=(0,i.g)({href:t}),l=(0,o.g)(n.iconOptions),h=t.includes("github")?s.Z:r.Z;return a.createElement("a",n.link,a.createElement(h,l),e.children)}},71887:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return r},default:function(){return u},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return m}});var a=n(81648),i=(n(45721),n(70167)),o=n(61471);const s={tags:["React","theme","theme hook"],title:"useTheme"},r=void 0,l={unversionedId:"reference/react-hooks/useTheme",id:"reference/react-hooks/useTheme",title:"useTheme",description:"A hook for managing and extending Pando themes.",source:"@site/docs/reference/react-hooks/useTheme.mdx",sourceDirName:"reference/react-hooks",slug:"/reference/react-hooks/useTheme",permalink:"/docs/next/reference/react-hooks/useTheme",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/reference/react-hooks/useTheme.mdx",tags:[{label:"React",permalink:"/docs/next/tags/react"},{label:"theme",permalink:"/docs/next/tags/theme"},{label:"theme hook",permalink:"/docs/next/tags/theme-hook"}],version:"current",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["React","theme","theme hook"],title:"useTheme"},sidebar:"reference",previous:{title:"useTabs",permalink:"/docs/next/reference/react-hooks/useTabs"}},h={},m=[{value:"Import",id:"import",level:2},{value:"Reference",id:"reference",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Extending themes with Typescript",id:"extending-themes-with-typescript",level:2},{value:"Example usage in Component (Client-side)",id:"example-usage-in-component-client-side",level:2},{value:"SSR Helpers",id:"ssr-helpers",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"My theme is not changing when I update it",id:"my-theme-is-not-changing-when-i-update-it",level:3}],p={toc:m};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",{className:"size-xxl"},"A hook for managing and extending Pando themes."),(0,i.kt)(o.Z,{icon:"github",href:"https://github.com/pluralsight/tva/blob/main/packages/react-utils/src/hooks/useTheme.ts",mdxType:"ViewSourceLink"},"View source"),(0,i.kt)("h2",{id:"import"},"Import"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useTheme } from '@pluralsight/react-utils'\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"type Themes = 'light' | 'dark' | 'system'\ntype CustomThemes<T extends string> = T | Themes\n\ninterface ThemeProps {\n  updateTheme: (theme: string) => void,\n  theme: CustomThemes<T>,\n}\n\nuseTheme<T extends string>(initialTheme?: CustomThemes<T>): ThemeProps\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import type { CustomThemes } from '@pluralsight/react-utils/types'\n")),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("p",null,"Call ",(0,i.kt)("inlineCode",{parentName:"p"},"useTheme")," at the top level of your component to store and cache the theme state between re-renders:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"showLineNumbers {4}",showLineNumbers:!0,"{4}":!0},"import { useTheme } from '@pluralsight/react-utils'\n\nexport default function App() {\n  const { theme, updateTheme } = useTheme()\n\n  function handleToggleTheme(e) {\n    // gets value from a data-theme={theme} prop set on a button\n    updateTheme(e.target.dataset.theme)\n  }\n\n  return <div>...</div>\n}\n")),(0,i.kt)("admonition",{title:"Automatic Theme Caching",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"This hook automatically caches the theme to the ",(0,i.kt)("inlineCode",{parentName:"p"},"localStorage")," Object so that your users will have it saved for as long as they keep the cache alive. \ud83c\udf89")),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"initialTheme"),": An optional string value of any of the CustomThemes offered or extended via Typescript.")),(0,i.kt)("h2",{id:"extending-themes-with-typescript"},"Extending themes with Typescript"),(0,i.kt)("p",null,"If you are a Typescript user and would like to extend the themes beyond the default options provided, pass in your themes as a type parameter."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"type NewThemes = 'pizza-sight' | 'flow-dark'\nconst { theme, updateTheme } = useTheme<NewThemes>()\n")),(0,i.kt)("h2",{id:"example-usage-in-component-client-side"},"Example usage in Component (Client-side)"),(0,i.kt)("p",null,"Here is an example of how you might use ",(0,i.kt)("inlineCode",{parentName:"p"},"useTheme")," to manage theme toggling between ",(0,i.kt)("inlineCode",{parentName:"p"},"light")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"dark")," mode in an App component."),(0,i.kt)("admonition",{title:"Client-side API",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"useTheme")," hook should only be used on the client side due to its design\nof updating the ",(0,i.kt)("inlineCode",{parentName:"p"},"localStorage")," Object.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"showLineNumbers {2}",showLineNumbers:!0,"{2}":!0},"function App() {\n  const { theme, updateTheme } = useTheme()\n\n  function handleToggleTheme() {\n    const newTheme = theme === 'light' ? 'dark' : 'light'\n    updateTheme(newTheme)\n  }\n\n  return (\n    <div>\n      <div>\n        <h2>Hello there!</h2>\n        <p>This is an example with Theme toggling!</p>\n        <button {...getButtonProps().button} onClick={handleToggleTheme}>\n          Toggle Theme\n        </button>\n      </div>\n    </div>\n  )\n}\n")),(0,i.kt)("h2",{id:"ssr-helpers"},"SSR Helpers"),(0,i.kt)("p",null,"If you are using an SSR app (like ",(0,i.kt)("a",{parentName:"p",href:"https://nextjs.org/"},"NextJS"),") and are unable to use the hook on the client-side, we provide some additional helpers."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getCachedTheme, setCachedTheme } from '@pluralsight/react-utils'\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"These helpers use the ",(0,i.kt)("inlineCode",{parentName:"p"},"window")," object conditionally to try and help prevent\nSSR errors.")),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("h3",{id:"my-theme-is-not-changing-when-i-update-it"},"My theme is not changing when I update it"),(0,i.kt)("p",null,"Make sure you are using a theme name that is either a Pando theme or one that has been defined in your global CSS styling. This means the hook is updating values that are not mapping to any existing styles."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Make sure you have followed the Pando ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/learn/get-started/installation/"},"installation guide"),"."),(0,i.kt)("li",{parentName:"ol"},"Make sure you are using the ",(0,i.kt)("a",{parentName:"li",href:"#import"},"correct theme names"),"."),(0,i.kt)("li",{parentName:"ol"},"Make sure you have a theme defined in your CSS using the ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/reference/general/themes/"},"Pando guidelines"),".")))}u.isMDXComponent=!0}}]);