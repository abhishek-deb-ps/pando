"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8610],{39602:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(70079),l=a(4924),r=a(81068);function s(e){const{metadata:t}=e,{previousPage:a,nextPage:s}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,l.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(r.Z,{permalink:a,title:n.createElement(l.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),s&&n.createElement(r.Z,{permalink:s,title:n.createElement(l.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},46638:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(70079),l=a(60725),r=a(24202);function s(e){let{items:t,component:a=r.Z}=e;return n.createElement(n.Fragment,null,t.map((e=>{let{content:t}=e;return n.createElement(l.n,{key:t.metadata.permalink,content:t},n.createElement(a,null,n.createElement(t,null)))})))}},14:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var n=a(70079),l=a(19841),r=a(4924),s=a(62321),o=a(36236),i=a(47100),g=a(53339),c=a(56093),m=a(39602),p=a(52488),u=a(46638);function d(e){const t=function(){const{selectMessage:e}=(0,s.c)();return t=>e(t,(0,r.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,r.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function h(e){let{tag:t}=e;const a=d(t);return n.createElement(n.Fragment,null,n.createElement(o.d,{title:a}),n.createElement(p.Z,{tag:"blog_tags_posts"}))}function b(e){let{tag:t,items:a,sidebar:l,listMetadata:s}=e;const o=d(t);return n.createElement(c.Z,{sidebar:l},n.createElement("header",{className:"margin-bottom--xl"},n.createElement("h1",null,o),n.createElement(g.Z,{href:t.allTagsPath},n.createElement(r.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),n.createElement(u.Z,{items:a}),n.createElement(m.Z,{metadata:s}))}function E(e){return n.createElement(o.FG,{className:(0,l.Z)(i.k.wrapper.blogPages,i.k.page.blogTagPostListPage)},n.createElement(h,e),n.createElement(b,e))}},27663:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(70079),l=a(97183),r=a(65710),s=a(72835),o=a(59788),i=a(18072);const g={React:n,...n,...o,...i,getButtonProps:l._,getButtonIconOptions:l.T,getIconProps:r.L,getPopoverProps:s.J}}}]);