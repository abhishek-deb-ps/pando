"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3751],{55773:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var a=n(45721),l=n(88795),r=n(24064),c=n(30909),s=n(74988),u=n(36577),o=n(59648),i=n(7690);function m(e){let{tags:t}=e;const n=(0,r.M)();return a.createElement(c.FG,{className:(0,l.Z)(s.k.wrapper.docsPages,s.k.page.docsTagsListPage)},a.createElement(c.d,{title:n}),a.createElement(i.Z,{tag:"doc_tags_list"}),a.createElement(u.Z,null,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},a.createElement("main",{className:"col col--8 col--offset-2"},a.createElement("h1",null,n),a.createElement(o.Z,{tags:t}))))))}},865:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(45721),l=n(88795),r=n(69316),c="tag_mxjR",s="tagRegular_Sycj",u="tagWithCount_twj9";function o(e){let{permalink:t,label:n,count:o}=e;return a.createElement(r.Z,{href:t,className:(0,l.Z)(c,o?u:s)},n,o&&a.createElement("span",null,o))}},59648:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(45721),l=n(24064),r=n(865),c="tag_lTiG";function s(e){let{letterEntry:t}=e;return a.createElement("article",null,a.createElement("h2",null,t.letter),a.createElement("ul",{className:"padding--none"},t.tags.map((e=>a.createElement("li",{key:e.permalink,className:c},a.createElement(r.Z,e))))),a.createElement("hr",null))}function u(e){let{tags:t}=e;const n=(0,l.P)(t);return a.createElement("section",{className:"margin-vert--lg"},n.map((e=>a.createElement(s,{key:e.letter,letterEntry:e}))))}},24064:function(e,t,n){n.d(t,{M:function(){return l},P:function(){return r}});var a=n(31065);const l=()=>(0,a.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function r(e){const t={};return Object.values(e).forEach((e=>{const n=function(e){return e[0].toUpperCase()}(e.label);t[n]??=[],t[n].push(e)})),Object.entries(t).sort(((e,t)=>{let[n]=e,[a]=t;return n.localeCompare(a)})).map((e=>{let[t,n]=e;return{letter:t,tags:n.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}}}]);