"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[94976],{70167:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(45721);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return a?n.createElement(f,o(o({ref:t},p),{},{components:a})):n.createElement(f,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},52115:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var n=a(60953),r=a(59005),i=(a(45721),a(70167)),o=["components"],l={tags:["Photo","Headshot","Profile"],title:"Avatar"},s=void 0,u={unversionedId:"design/components/avatar",id:"version-0.3.1-beta/design/components/avatar",title:"Avatar",description:"Description",source:"@site/versioned_docs/version-0.3.1-beta/design/components/avatar.md",sourceDirName:"design/components",slug:"/design/components/avatar",permalink:"/docs/design/components/avatar",draft:!1,editUrl:"https://github.com/pluralsight/tva/edit/main/website/versioned_docs/version-0.3.1-beta/design/components/avatar.md",tags:[{label:"Photo",permalink:"/docs/tags/photo"},{label:"Headshot",permalink:"/docs/tags/headshot"},{label:"Profile",permalink:"/docs/tags/profile"}],version:"0.3.1-beta",lastUpdatedBy:"Brad Bice",frontMatter:{tags:["Photo","Headshot","Profile"],title:"Avatar"},sidebar:"design",previous:{title:"Admonition",permalink:"/docs/design/components/admonition"},next:{title:"Badge",permalink:"/docs/design/components/badge"}},p={},c=[{value:"Description",id:"description",level:2},{value:"Anatomy/Structure",id:"anatomystructure",level:2},{value:"Usage",id:"usage",level:2},{value:"Sentiment",id:"sentiment",level:3},{value:"Sizes",id:"sizes",level:3},{value:"Content states",id:"content-states",level:3},{value:"Dos and don&#39;ts",id:"dos-and-donts",level:3},{value:"States",id:"states",level:2},{value:"Figma usage",id:"figma-usage",level:2},{value:"Feedback on this component",id:"feedback-on-this-component",level:2}],d={toc:c};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"An avatar is a thumbnail representation of a user or an organization."),(0,i.kt)("h2",{id:"anatomystructure"},"Anatomy/Structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Container",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Image"),(0,i.kt)("li",{parentName:"ul"},"Initials"),(0,i.kt)("li",{parentName:"ul"},"Icon")))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"An Avatar is designed to display a profile image, initials, or a fallback icon. Primary source for the image will use anything uploaded by the user, then fall back to utilizing the Gravatar service, then the pattern defaults and fallbacks."),(0,i.kt)("h3",{id:"sentiment"},"Sentiment"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For use with non-actionable avatars."))),(0,i.kt)("li",{parentName:"ul"},"Action",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For any interactive avatars")))),(0,i.kt)("h3",{id:"sizes"},"Sizes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"XS - 32x32",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Use in menu bars or tight areas where multiple users may be listed in one area."))),(0,i.kt)("li",{parentName:"ul"},"S - 48x48",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Use to reference a user or author in a meta data space, or as reference on a card."))),(0,i.kt)("li",{parentName:"ul"},"M (default) - 80x80",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Use in single page or focused experiences to identify the author or current user profile."))),(0,i.kt)("li",{parentName:"ul"},"L - 120x120",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For use in a profile card as the primary image."))),(0,i.kt)("li",{parentName:"ul"},"XL - 160x160",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Use as part of a hero header or primary image on a profile page.")))),(0,i.kt)("h3",{id:"content-states"},"Content states"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Image (preferred)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A profile image should be used for all Avatars no matter the context (i.e. person, platform, etc.). This will give the best visual experience for the user and should be used over all other options."))),(0,i.kt)("li",{parentName:"ul"},"Initials (fallback)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"In the absence of an image, the avatar's initials (up to 2 characters) should be displayed. This is not ideal but allows the user to still quickly put the dots together of who the avatar is meant to represent."))),(0,i.kt)("li",{parentName:"ul"},"Icon (last resort)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If neither the image nor initials are available, display an icon to represent a person.")))),(0,i.kt)("h3",{id:"dos-and-donts"},"Dos and don'ts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Do not obscure or visually block any portion of the avatar image."),(0,i.kt)("li",{parentName:"ul"},"Do not reshape the avatar. Maintain a circular shape and size as offered.")),(0,i.kt)("h2",{id:"states"},"States"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default"),(0,i.kt)("li",{parentName:"ul"},"Hover/Focus - When actionable, a hover/focus state indicates to users that an action can be performed, such as linking to a profile page, triggering a menu, or other.")),(0,i.kt)("p",null,"Note: To indicate an editable avatar photo, apply a floating action icon button (size M, round, action sentiment) placed in the bottom trailing edge of the avatar container, utilizing the pencil icon."),(0,i.kt)("h2",{id:"figma-usage"},"Figma usage"),(0,i.kt)("h2",{id:"feedback-on-this-component"},"Feedback on this component"))}m.isMDXComponent=!0}}]);