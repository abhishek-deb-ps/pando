"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3022],{15566:function(e,n,t){t.d(n,{dS:function(){return u},fK:function(){return l},C9:function(){return m},ZP:function(){return p}});var a=t(45721),o=t(84140),i="linkList_sLwJ",r="linkItem_ESvF";function s(e){return a.createElement("li",{className:r},a.createElement(o.Z,e,e.children))}function l(e){return a.createElement(s,{href:e.href},e.children??"View on Github")}function u(e){return a.createElement(s,{href:e.href},"View on Figma")}function m(e){return a.createElement("ul",{className:i},e.children)}function p(e){const{figma:n,github:t}=e;return a.createElement("ul",{className:i},t&&a.createElement(l,{href:t}),n&&a.createElement(u,{href:n}))}},45945:function(e,n,t){t(45721)},84140:function(e,n,t){t.d(n,{Z:function(){return l}});var a=t(45721),o=t(32662),i=t(51596),r=t(44070),s=t(42949);function l(e){const{href:n}=e,t=(0,i.L)({ariaHidden:!0,size:"s"}),l=n.includes("github")?r.Z:s.Z;return a.createElement(o.TextLink,e,a.createElement(l,t),e.children)}},8971:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return m}});var a=t(81648),o=(t(45721),t(70167)),i=t(15566);t(45945);const r={tags:["nav menu","nav"],title:"Menu"},s=void 0,l={unversionedId:"reference/components/menu",id:"reference/components/menu",title:"Menu",description:"Used to display a list of navigational locations.",source:"@site/docs/reference/components/menu.mdx",sourceDirName:"reference/components",slug:"/reference/components/menu",permalink:"/docs/reference/components/menu",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/reference/components/menu.mdx",tags:[{label:"nav menu",permalink:"/docs/tags/nav-menu"},{label:"nav",permalink:"/docs/tags/nav"}],version:"current",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["nav menu","nav"],title:"Menu"},sidebar:"reference",previous:{title:"Input",permalink:"/docs/reference/components/input"},next:{title:"Modal",permalink:"/docs/reference/components/modal"}},u={},m=[{value:"Import",id:"import",level:2},{value:"Anatomy",id:"anatomy",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Menu",id:"basic-menu",level:3},{value:"Menu Items with Icons",id:"menu-items-with-icons",level:3},{value:"Menu Items with Dividers",id:"menu-items-with-dividers",level:3},{value:"Customizing",id:"customizing",level:3},{value:"1. Unused Classes",id:"1-unused-classes",level:4},{value:"2. Passing a <code>className</code> prop",id:"2-passing-a-classname-prop",level:4},{value:"3. Ejected Menu",id:"3-ejected-menu",level:4},{value:"Behavior",id:"behavior",level:2},{value:"API",id:"api",level:2},{value:"<code>MenuProvider</code>",id:"menuprovider",level:3},{value:"Parameters",id:"parameters",level:4},{value:"<code>MenuButton</code>",id:"menubutton",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"<code>MenuList</code>",id:"menulist",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"<code>MenuItem</code>",id:"menuitem",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"<code>MenuDivider</code>",id:"menudivider",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Accessibility",id:"accessibility",level:2},{value:"Keyboard Navigation",id:"keyboard-navigation",level:3},{value:"Screen Readers",id:"screen-readers",level:3},{value:"Color Contrast",id:"color-contrast",level:3},{value:"Focus Management",id:"focus-management",level:3}],p={toc:m};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",{className:"size-xxl"},"Used to display a list of navigational locations."),(0,o.kt)(i.C9,{mdxType:"DocsLinkList"},(0,o.kt)(i.fK,{href:"https://github.com/pluralsight/pando/tree/main/packages/react/src/components/Menu",mdxType:"DocsGithubLink"}),(0,o.kt)(i.fK,{href:"https://github.com/pluralsight/pando/tree/main/packages/headless-styles/src/components/Menu/menu.ts",mdxType:"DocsGithubLink"},"View Core API"),(0,o.kt)(i.dS,{href:"https://www.figma.com/file/ZmH4XsZS5WnKeo28ylM5x1/Pando-UI-kit-(Web)?node-id=1214%3A50560&t=YLA3FBYLefNvfeuf-0",mdxType:"DocsFigmaLink"})),(0,o.kt)("h2",{id:"import"},"Import"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import {\n  MenuProvider,\n  MenuButton,\n  MenuList,\n  MenuItem,\n  MenuDivider,\n} from '@pluralsight/headless-styles'\n")),(0,o.kt)("h2",{id:"anatomy"},"Anatomy"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Trigger"),(0,o.kt)("li",{parentName:"ol"},"Container"),(0,o.kt)("li",{parentName:"ol"},"Menu"),(0,o.kt)("li",{parentName:"ol"},"Menu Item"),(0,o.kt)("li",{parentName:"ol"},"Icon (optional)"),(0,o.kt)("li",{parentName:"ol"},"Label Text"),(0,o.kt)("li",{parentName:"ol"},"Divider (optional)")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("admonition",{title:"Docs Note",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The Menu events are currently being over-writen by the docs site so the interactions here won't be exactly the same as using it in your app. We are working on a fix for this and hope to have a ",(0,o.kt)("strong",{parentName:"p"},"new docs site")," soon.")),(0,o.kt)("h3",{id:"basic-menu"},"Basic Menu"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function MenuExample() {\n  return (\n    <MenuProvider>\n      <MenuButton>Show Menu</MenuButton>\n      <MenuList>\n        <MenuItem href="/">Page one</MenuItem>\n        <MenuItem href="/">Page two</MenuItem>\n        <MenuItem href="/">Page three</MenuItem>\n      </MenuList>\n    </MenuProvider>\n  )\n}\n')),(0,o.kt)("admonition",{title:"Need a custom Link component?",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you need to use a custom Link component for frameworks like Next or Remix, you can pass it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"as")," prop on the ",(0,o.kt)("inlineCode",{parentName:"p"},"MenuItem")," component.")),(0,o.kt)("h3",{id:"menu-items-with-icons"},"Menu Items with Icons"),(0,o.kt)("p",null,"To add an icon to the start of a ",(0,o.kt)("inlineCode",{parentName:"p"},"MenuItem"),", pass the icon component to the ",(0,o.kt)("inlineCode",{parentName:"p"},"icon")," prop on the ",(0,o.kt)("inlineCode",{parentName:"p"},"MenuItem")," component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function MenuItemIconExample() {\n  return (\n    <MenuProvider>\n      <MenuButton>Show Menu</MenuButton>\n      <MenuList>\n        <MenuItem href="/" icon={PlaceholderIcon}>\n          Page one\n        </MenuItem>\n        <MenuItem href="/" icon={PlaceholderIcon}>\n          Page two\n        </MenuItem>\n        <MenuItem href="/" icon={PlaceholderIcon}>\n          Page three\n        </MenuItem>\n      </MenuList>\n    </MenuProvider>\n  )\n}\n')),(0,o.kt)("h3",{id:"menu-items-with-dividers"},"Menu Items with Dividers"),(0,o.kt)("p",null,"To add a divider between ",(0,o.kt)("inlineCode",{parentName:"p"},"MenuItem"),"s, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"MenuDivider")," component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function MenuItemDividerExample() {\n  return (\n    <MenuProvider>\n      <MenuButton>Show Menu</MenuButton>\n      <MenuList>\n        <MenuItem href="/">Page one</MenuItem>\n        <MenuDivider />\n        <MenuItem href="/">Page two</MenuItem>\n        <MenuDivider />\n        <MenuItem href="/">Page three</MenuItem>\n      </MenuList>\n    </MenuProvider>\n  )\n}\n')),(0,o.kt)("h3",{id:"customizing"},"Customizing"),(0,o.kt)("p",null,"There are 3 ways to customize the Menu components."),(0,o.kt)("h4",{id:"1-unused-classes"},"1. Unused Classes"),(0,o.kt)("p",null,"Each component layer of the Menu has a unused class name that can be utilized in your local CSS to customize the Menu at any level."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"pando-menu-list-container"),": The container of the Menu."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"pando-menu-list"),": The list elmenet of the Menu."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"pando-menu-list-item"),": The list item element of the Menu."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"pando-menu-list-item-content"),": The content of the Menu."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"pando-menu-list-item-divider"),": The divider element of the Menu."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"pando-icon"),": The icon element of the Menu."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"pando-btn"),": The button element of the Menu.")),(0,o.kt)("h4",{id:"2-passing-a-classname-prop"},"2. Passing a ",(0,o.kt)("inlineCode",{parentName:"h4"},"className")," prop"),(0,o.kt)("p",null,"You can pass a ",(0,o.kt)("inlineCode",{parentName:"p"},"className")," prop to the Menu components to customize the Menu at the container, heading, or text level. This is useful if your project uses ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/css-modules/css-modules"},"CSS Modules")," or a CSS-in-JS library like ",(0,o.kt)("a",{parentName:"p",href:"https://emotion.sh/docs/introduction"},"Emotion"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Example of using CSS Modules to customize the Menu." showLineNumbers',title:'"Example',of:!0,using:!0,CSS:!0,Modules:!0,to:!0,customize:!0,the:!0,'Menu."':!0,showLineNumbers:!0},'import customStyles from \'./customStyles.module.css\'\n\nfunction CustomMenu(props) {\n  return (\n    <MenuProvider>\n      <MenuButton className={customStyles.btn}>Settings</MenuButton>\n      <MenuList className={customStyles.list}>\n        <MenuItem href="/" className={customStyles.item}>\n          Page one\n        </MenuItem>\n        <MenuItem href="/" className={customStyles.item}>\n          Page two\n        </MenuItem>\n        <MenuItem href="/" className={customStyles.item}>\n          Page three\n        </MenuItem>\n      </MenuList>\n    </MenuProvider>\n  )\n}\n')),(0,o.kt)("h4",{id:"3-ejected-menu"},"3. Ejected Menu"),(0,o.kt)("p",null,'For a low-level "ejected" approach, you can use the Headless-styles API to customize the Menu however you prefer while keeping the accessibility behavior.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"showLineNumbers",showLineNumbers:!0},"import {\n  getMenuListContainer,\n  getMenuButtonProps,\n  getMenuListProps,\n  getMenuListItemProps,\n} from '@pluralsight/headless-styles'\n")),(0,o.kt)("p",null,"To learn more about the Headless-styles API, check out the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pluralsight/pando/blob/main/packages/headless-styles/src/components/Menu/menu.ts"},"Headless-styles documentation"),"."),(0,o.kt)("h2",{id:"behavior"},"Behavior"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do:")," use the Menu component to display a list of navigational locations."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Don't:")," use the Menu component to display a list of actions. Instead use the ActionMenu component."),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("h3",{id:"menuprovider"},(0,o.kt)("inlineCode",{parentName:"h3"},"MenuProvider")),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"MenuProvider")," component does not accept any parameters."),(0,o.kt)("h3",{id:"menubutton"},(0,o.kt)("inlineCode",{parentName:"h3"},"MenuButton")),(0,o.kt)("h4",{id:"parameters-1"},"Parameters"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type MenuButtonProps = HTMLAttributes<HTMLButtonElement>\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"MenuButton")," component accepts all props that a standard HTML ",(0,o.kt)("inlineCode",{parentName:"p"},"button")," element accepts and returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"text")," usage of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/components/button"},"Button component"),"."),(0,o.kt)("h3",{id:"menulist"},(0,o.kt)("inlineCode",{parentName:"h3"},"MenuList")),(0,o.kt)("h4",{id:"parameters-2"},"Parameters"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type MenuListProps = HTMLAttributes<HTMLUListElement>\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"MenuList")," component accepts all props that a standard HTML ",(0,o.kt)("inlineCode",{parentName:"p"},"ul")," element accepts."),(0,o.kt)("h3",{id:"menuitem"},(0,o.kt)("inlineCode",{parentName:"h3"},"MenuItem")),(0,o.kt)("h4",{id:"parameters-3"},"Parameters"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface MenuItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {\n  as?: AnchorHTMLAttributes<HTMLAnchorElement> | ElementType\n  icon?: ElementType\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"any props that a standard HTML ",(0,o.kt)("inlineCode",{parentName:"li"},"a")," element accepts"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"as"),": The ",(0,o.kt)("inlineCode",{parentName:"li"},"as")," prop allows you to render the ",(0,o.kt)("inlineCode",{parentName:"li"},"MenuItem")," as a different HTML element or React component. This is useful if you want to render the ",(0,o.kt)("inlineCode",{parentName:"li"},"MenuItem")," as a ",(0,o.kt)("inlineCode",{parentName:"li"},"Link")," component from a routing library like ",(0,o.kt)("a",{parentName:"li",href:"https://reactrouter.com/"},"React Router"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"icon"),": The ",(0,o.kt)("inlineCode",{parentName:"li"},"icon")," prop allows you to render an icon component to the start of the ",(0,o.kt)("inlineCode",{parentName:"li"},"MenuItem"),".")),(0,o.kt)("h3",{id:"menudivider"},(0,o.kt)("inlineCode",{parentName:"h3"},"MenuDivider")),(0,o.kt)("h4",{id:"parameters-4"},"Parameters"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"MenuDivider")," component does not accept any parameters."),(0,o.kt)("h2",{id:"accessibility"},"Accessibility"),(0,o.kt)("p",null,"The Pando Menu and Icon APIs combined with semantic HTML allow the Menu to be fully accessible and screen-readable."),(0,o.kt)("h3",{id:"keyboard-navigation"},"Keyboard Navigation"),(0,o.kt)("p",null,"The Menu component supports keyboard navigation. When the Menu is open, the user can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Home/End")," key to navigate to the start or end the MenuItems. The user can also use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ArrowUp")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ArrowDown")," keys to navigate through the MenuItems."),(0,o.kt)("h3",{id:"screen-readers"},"Screen Readers"),(0,o.kt)("p",null,"The Menu component is screen-reader accessible. When the Menu is open, the screen reader will read the MenuItems in the order they appear in the DOM."),(0,o.kt)("h3",{id:"color-contrast"},"Color Contrast"),(0,o.kt)("p",null,"The Menu component meets the WCAG AA contrast ratio requirements for text and icons."),(0,o.kt)("h3",{id:"focus-management"},"Focus Management"),(0,o.kt)("p",null,"The Menu component manages focus. When the Menu is open, the MenuItems are focusable and the MenuButton is not focusable. When the Menu is closed, the MenuButton is focusable and the MenuItems are not focusable."))}c.isMDXComponent=!0}}]);