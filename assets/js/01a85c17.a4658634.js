"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4013],{63955:function(e,t,a){a.d(t,{Z:function(){return Z}});var n=a(59005),r=a(20411),l=a(88795),i=a(16615),c=a(36680),s=a(49047),m=a(92973),o="sidebar_i4ov",u="sidebarItemTitle_ug2n",g="sidebarItemList_bXf0",f="sidebarItem_CHjh",b="sidebarItemLink_NC2Z",d="sidebarItemLinkActive_ewx2";function E(e){var t=e.sidebar;return r.createElement("aside",{className:"col col--3"},r.createElement("nav",{className:(0,l.Z)(o,"thin-scrollbar"),"aria-label":(0,m.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(u,"margin-bottom--md")},t.title),r.createElement("ul",{className:(0,l.Z)(g,"clean-list")},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:f},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:b,activeClassName:d},e.title))})))))}var p=a(26268);function v(e){var t=e.sidebar;return r.createElement("ul",{className:"menu__list"},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:"menu__list-item"},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function h(e){return r.createElement(p.Zo,{component:v,props:e})}function N(e){var t=e.sidebar,a=(0,c.i)();return null!=t&&t.items.length?"mobile"===a?r.createElement(h,{sidebar:t}):r.createElement(E,{sidebar:t}):null}var k=["sidebar","toc","children"];function Z(e){var t=e.sidebar,a=e.toc,c=e.children,s=(0,n.Z)(e,k),m=t&&t.items.length>0;return r.createElement(i.Z,s,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement(N,{sidebar:t}),r.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},c),a&&r.createElement("div",{className:"col col--2"},a))))}},93010:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(20411),r=a(88795),l=a(44146),i=a(10226),c=a(34264),s=a(63955),m=a(9799),o=a(6723);function u(e){var t=e.tags,a=e.sidebar,u=(0,l.M)();return n.createElement(i.FG,{className:(0,r.Z)(c.k.wrapper.blogPages,c.k.page.blogTagsListPage)},n.createElement(i.d,{title:u}),n.createElement(o.Z,{tag:"blog_tags_list"}),n.createElement(s.Z,{sidebar:a},n.createElement("h1",null,u),n.createElement(m.Z,{tags:t})))}},90168:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(20411),r=a(88795),l=a(49047),i="tag_qAje",c="tagRegular_GuTO",s="tagWithCount_KsZT";function m(e){var t=e.permalink,a=e.label,m=e.count;return n.createElement(l.Z,{href:t,className:(0,r.Z)(i,m?s:c)},a,m&&n.createElement("span",null,m))}},9799:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(20411),r=a(44146),l=a(90168),i="tag_r1lx";function c(e){var t=e.letterEntry;return n.createElement("article",null,n.createElement("h2",null,t.letter),n.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return n.createElement("li",{key:e.permalink,className:i},n.createElement(l.Z,e))}))),n.createElement("hr",null))}function s(e){var t=e.tags,a=(0,r.P)(t);return n.createElement("section",{className:"margin-vert--lg"},a.map((function(e){return n.createElement(c,{key:e.letter,letterEntry:e})})))}},44146:function(e,t,a){a.d(t,{M:function(){return r},P:function(){return l}});var n=a(92973),r=function(){return(0,n.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"})};function l(e){var t={};return Object.values(e).forEach((function(e){var a=function(e){return e[0].toUpperCase()}(e.label);null!=t[a]||(t[a]=[]),t[a].push(e)})),Object.entries(t).sort((function(e,t){var a=e[0],n=t[0];return a.localeCompare(n)})).map((function(e){return{letter:e[0],tags:e[1].sort((function(e,t){return e.label.localeCompare(t.label)}))}}))}}}]);