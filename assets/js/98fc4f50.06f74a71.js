"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8709],{70167:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var s=a(45721);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,s,n=function(e,t){if(null==e)return{};var a,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=s.createContext({}),u=function(e){var t=s.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return s.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(a),d=n,v=m["".concat(c,".").concat(d)]||m[d]||l[d]||r;return a?s.createElement(v,o(o({ref:t},p),{},{components:a})):s.createElement(v,o({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<r;u++)o[u]=a[u];return s.createElement.apply(null,o)}return s.createElement.apply(null,a)}m.displayName="MDXCreateElement"},77907:function(e,t,a){a.d(t,{Z:function(){return o}});var s=a(45721),n=a(88795),r="tabItem_C7m6";function o(e){var t=e.children,a=e.hidden,o=e.className;return s.createElement("div",{role:"tabpanel",className:(0,n.Z)(r,o),hidden:a},t)}},98568:function(e,t,a){a.d(t,{Z:function(){return d}});var s=a(60953),n=a(45721),r=a(88795),o=a(63631),i=a(99595),c=a(2825),u=a(13554),p="tabList_C4Ea",l="tabItem_W41a";function m(e){var t,a,o=e.lazy,m=e.block,d=e.defaultValue,v=e.values,g=e.groupId,k=e.className,f=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=v?v:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,i.l)(N,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var x=null===d?d:null!=(t=null!=d?d:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:f[0].props.value;if(null!==x&&!N.some((function(e){return e.value===x})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+x+'" but none of its children has the corresponding value. Available values are: '+N.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,c.U)(),T=b.tabGroupChoices,S=b.setTabGroupChoices,y=(0,n.useState)(x),w=y[0],B=y[1],A=[],j=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var D=T[g];null!=D&&D!==w&&N.some((function(e){return e.value===D}))&&B(D)}var C=function(e){var t=e.currentTarget,a=A.indexOf(t),s=N[a].value;s!==w&&(j(t),B(s),null!=g&&S(g,String(s)))},W=function(e){var t,a=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":var s,n=A.indexOf(e.currentTarget)+1;a=null!=(s=A[n])?s:A[0];break;case"ArrowLeft":var r,o=A.indexOf(e.currentTarget)-1;a=null!=(r=A[o])?r:A[A.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",p)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},k)},N.map((function(e){var t=e.value,a=e.label,o=e.attributes;return n.createElement("li",(0,s.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return A.push(e)},onKeyDown:W,onClick:C},o,{className:(0,r.Z)("tabs__item",l,null==o?void 0:o.className,{"tabs__item--active":w===t})}),null!=a?a:t)}))),o?(0,n.cloneElement)(f.filter((function(e){return e.props.value===w}))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function d(e){var t=(0,o.Z)();return n.createElement(m,(0,s.Z)({key:String(t)},e))}},11523:function(e,t,a){a.d(t,{Z:function(){return Ne}});var s={};a.r(s),a.d(s,{psActionBackground:function(){return o},psActionBackgroundActive:function(){return c},psActionBackgroundHover:function(){return i},psActionBackgroundWeak:function(){return u},psActionBackgroundWeakActive:function(){return l},psActionBackgroundWeakHover:function(){return p},psActionBorder:function(){return m},psActionBorderFocus:function(){return d},psActionNavigation:function(){return v},psActionNavigationHover:function(){return g},psActionNavigationVisited:function(){return k},psActionText:function(){return f},psActionTextInverse:function(){return x},psActionTextMedium:function(){return h},psActionTextWeak:function(){return N},psBackground:function(){return C},psBackgroundActive:function(){return I},psBackgroundHover:function(){return W},psBorder:function(){return F},psBorderStrong:function(){return E},psBorderWeak:function(){return $},psDangerBackground:function(){return b},psDangerBackgroundActive:function(){return S},psDangerBackgroundHover:function(){return T},psDangerBorder:function(){return y},psDangerSurface:function(){return w},psDangerText:function(){return B},psDangerTextInverse:function(){return D},psDangerTextMedium:function(){return j},psDangerTextWeak:function(){return A},psInfoBorder:function(){return L},psInfoSurface:function(){return X},psInfoText:function(){return U},psInfoTextMedium:function(){return R},psInfoTextWeak:function(){return q},psSuccessBorder:function(){return Y},psSuccessSurface:function(){return K},psSuccessText:function(){return Q},psSuccessTextMedium:function(){return te},psSuccessTextWeak:function(){return ee},psSurface:function(){return M},psSurfaceInverse:function(){return P},psSurfaceMedium:function(){return Z},psSurfaceStrong:function(){return H},psSurfaceWeak:function(){return O},psText:function(){return _},psTextInverse:function(){return J},psTextMedium:function(){return G},psTextStrong:function(){return V},psTextWeak:function(){return z},psWarningBorder:function(){return ae},psWarningSurface:function(){return se},psWarningText:function(){return ne},psWarningTextMedium:function(){return oe},psWarningTextWeak:function(){return re}});var n=a(60953),r=a(45721);const o="var(--ps-action-background)",i="var(--ps-action-background-hover)",c="var(--ps-action-background-active)",u="var(--ps-action-background-weak)",p="var(--ps-action-background-weak-hover)",l="var(--ps-action-background-weak-active)",m="var(--ps-action-border)",d="var(--ps-action-border-focus)",v="var(--ps-action-navigation)",g="var(--ps-action-navigation-hover)",k="var(--ps-action-navigation-visited)",f="var(--ps-action-text)",N="var(--ps-action-text-weak)",h="var(--ps-action-text-medium)",x="var(--ps-action-text-inverse)",b="var(--ps-danger-background)",T="var(--ps-danger-background-hover)",S="var(--ps-danger-background-active)",y="var(--ps-danger-border)",w="var(--ps-danger-surface)",B="var(--ps-danger-text)",A="var(--ps-danger-text-weak)",j="var(--ps-danger-text-medium)",D="var(--ps-danger-text-inverse)",C="var(--ps-background)",W="var(--ps-background-hover)",I="var(--ps-background-active)",F="var(--ps-border)",$="var(--ps-border-weak)",E="var(--ps-border-strong)",M="var(--ps-surface)",O="var(--ps-surface-weak)",Z="var(--ps-surface-medium)",H="var(--ps-surface-strong)",P="var(--ps-surface-inverse)",_="var(--ps-text)",z="var(--ps-text-weak)",G="var(--ps-text-medium)",V="var(--ps-text-strong)",J="var(--ps-text-inverse)",L="var(--ps-info-border)",X="var(--ps-info-surface)",U="var(--ps-info-text)",q="var(--ps-info-text-weak)",R="var(--ps-info-text-medium)",Y="var(--ps-success-border)",K="var(--ps-success-surface)",Q="var(--ps-success-text)",ee="var(--ps-success-text-weak)",te="var(--ps-success-text-medium)",ae="var(--ps-warning-border)",se="var(--ps-warning-surface)",ne="var(--ps-warning-text)",re="var(--ps-warning-text-weak)",oe="var(--ps-warning-text-medium)";var ie=a(61481),ce="colorGroup_AYpI",ue="labelcontainer_EC1G",pe="label_LGml",le="list_zgT8",me="item_kpsV",de="swab_SijF",ve="syntax_C4sE";function ge(e){return r.createElement("p",{className:pe},e.children)}function ke(e){var t=ie.X[e.sentiment],a=Object.keys(t);return r.createElement("section",{className:ce},r.createElement("ul",{className:le},a.map((function(e){return r.createElement(fe,(0,n.Z)({},t[e],{key:t[e].id}))}))))}function fe(e){return r.createElement("li",{className:me},r.createElement("div",{className:de,style:{backgroundColor:s[e.jsName]}}),r.createElement("div",{className:ue},r.createElement(ge,null,r.createElement("span",{className:ve},"CSS:")," ",e.cssName),r.createElement(ge,null,r.createElement("span",{className:ve},"SASS:")," ",e.sassName),r.createElement(ge,null,r.createElement("span",{className:ve},"JS:")," ",e.jsName)))}var Ne=function(e){return r.createElement("div",null,r.createElement(ke,{sentiment:e.sentiment}))}},37862:function(e,t,a){a.r(t),a.d(t,{assets:function(){return v},contentTitle:function(){return m},default:function(){return f},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return g}});var s=a(60953),n=a(59005),r=(a(45721),a(70167)),o=a(98568),i=a(77907),c=a(61481),u=a(11523),p=["components"],l={tags:["Development","Packages","Tokens","Colors"],title:"Colors"},m=void 0,d={unversionedId:"development/tokens/colors",id:"development/tokens/colors",title:"Colors",description:"Installation",source:"@site/docs/development/tokens/colors.mdx",sourceDirName:"development/tokens",slug:"/development/tokens/colors",permalink:"/docs/next/development/tokens/colors",draft:!1,editUrl:"https://github.com/pluralsight/tva/edit/main/website/docs/development/tokens/colors.mdx",tags:[{label:"Development",permalink:"/docs/next/tags/development"},{label:"Packages",permalink:"/docs/next/tags/packages"},{label:"Tokens",permalink:"/docs/next/tags/tokens"},{label:"Colors",permalink:"/docs/next/tags/colors"}],version:"current",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["Development","Packages","Tokens","Colors"],title:"Colors"},sidebar:"development",previous:{title:"Intro",permalink:"/docs/next/development/tokens/intro"},next:{title:"Intro",permalink:"/docs/next/development/headless-styles/intro"}},v={},g=[{value:"Installation",id:"installation",level:2},{value:"List of tokens",id:"list-of-tokens",level:2},{value:"Default",id:"default",level:3},{value:"Action",id:"action",level:3},{value:"Info",id:"info",level:3},{value:"Success",id:"success",level:3},{value:"Warning",id:"warning",level:3},{value:"Danger",id:"danger",level:3},{value:"Themes",id:"themes",level:2},{value:"Custom Theming",id:"custom-theming",level:2},{value:"CSS custom theming",id:"css-custom-theming",level:3},{value:"JS custom theming",id:"js-custom-theming",level:3},{value:"A note on custom tokens in CSS",id:"a-note-on-custom-tokens-in-css",level:2},{value:"SCSS tokens",id:"scss-tokens",level:3}],k={toc:g};function f(e){var t=e.components,a=(0,n.Z)(e,p);return(0,r.kt)("wrapper",(0,s.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @pluralsight/design-tokens\n"))),(0,r.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @pluralsight/design-tokens\n")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("strong",{parentName:"p"},"headless-styles")," package uses the ",(0,r.kt)("strong",{parentName:"p"},"design-tokens")," package internall for both CSS or JS APIs. This means ",(0,r.kt)("strong",{parentName:"p"},"you do not need to install this package")," if you are using headless-styles.")),(0,r.kt)("h2",{id:"list-of-tokens"},"List of tokens"),(0,r.kt)("p",null,"These are the tokens we provide (i.e. a theme). Our ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/development/getting-started/installation#normalizecss"},"normalize setup")," comes with two themes: ",(0,r.kt)("strong",{parentName:"p"},"light")," and ",(0,r.kt)("strong",{parentName:"p"},"dark"),". For every theme, we overwrite the values shown in this list so the token names are the same for all themes."),(0,r.kt)("p",null,"The tokens are presented by ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/development/tokens/intro#naming-convention"},"sentiment"),"."),(0,r.kt)("h3",{id:"default"},"Default"),(0,r.kt)(u.Z,{sentiment:c.s[2],mdxType:"TokensColorMap"}),(0,r.kt)("h3",{id:"action"},"Action"),(0,r.kt)(u.Z,{sentiment:c.s[0],mdxType:"TokensColorMap"}),(0,r.kt)("h3",{id:"info"},"Info"),(0,r.kt)(u.Z,{sentiment:c.s[3],mdxType:"TokensColorMap"}),(0,r.kt)("h3",{id:"success"},"Success"),(0,r.kt)(u.Z,{sentiment:c.s[4],mdxType:"TokensColorMap"}),(0,r.kt)("h3",{id:"warning"},"Warning"),(0,r.kt)(u.Z,{sentiment:c.s[5],mdxType:"TokensColorMap"}),(0,r.kt)("h3",{id:"danger"},"Danger"),(0,r.kt)(u.Z,{sentiment:c.s[1],mdxType:"TokensColorMap"}),(0,r.kt)("h2",{id:"themes"},"Themes"),(0,r.kt)("p",null,"The design-tokens package comes with two themes: ",(0,r.kt)("strong",{parentName:"p"},"dark (default)")," and ",(0,r.kt)("strong",{parentName:"p"},"light"),"."),(0,r.kt)("p",null,'This website uses the "dark" and "light" themes.'),(0,r.kt)("p",null,"Themes are controlled by using an attribute on the ",(0,r.kt)("inlineCode",{parentName:"p"},"html")," tag of ",(0,r.kt)("inlineCode",{parentName:"p"},"data-theme"),' for a full page takeover (what we do on this site), or a CSS class of the theme name (i.e. "light", "dark") for component level control. The default token values that you will receive will be for the dark theme.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Data-theme attribute example"',title:'"Data-theme',attribute:!0,'example"':!0},'<html data-theme="dark"></html>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Class level example"',title:'"Class',level:!0,'example"':!0},'<SomeParent>\n  {/* only this component will be light-mode */}\n  <SomeChild className="light" />\n</SomeParent>\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Themes ",(0,r.kt)("strong",{parentName:"p"},"depend on the normalize.css")," file to be used in your project. Check out our ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/development/getting-started/installation#normalizecss"},"getting started")," docs to learn how to add the normalize.css file to your project.")),(0,r.kt)("h2",{id:"custom-theming"},"Custom Theming"),(0,r.kt)("p",null,"Our semantic-token system allows for easily customizing the themes. Instead of adding new tokens, simply overwrite the tokens we provide in the list above. We default the ",(0,r.kt)("inlineCode",{parentName:"p"},":root"),' to use dark mode and only overwrite for any theme outside of that (i.e. "light", etc.).'),(0,r.kt)("h3",{id:"css-custom-theming"},"CSS custom theming"),(0,r.kt)("p",null,"In CSS all you need to do is to overwrite ",(0,r.kt)("a",{parentName:"p",href:"#list-of-tokens"},"the tokens")," you want to update in the ",(0,r.kt)("inlineCode",{parentName:"p"},":root")," CSS selector in your project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Global CSS file for your project"',title:'"Global',CSS:!0,file:!0,for:!0,your:!0,'project"':!0},":root {\n  --ps-text: #fff;\n}\n")),(0,r.kt)("p",null,'To create your own light theme, you will need to do the exact same thing, except target our "light" selectors.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Global CSS file for your project"',title:'"Global',CSS:!0,file:!0,for:!0,your:!0,'project"':!0},"html[data-theme='light'],\n.light {\n  --ps-text: #000;\n}\n")),(0,r.kt)("h3",{id:"js-custom-theming"},"JS custom theming"),(0,r.kt)("p",null,"Due to the nature of our CSS-in-JS design in ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/development/headless-styles/intro"},"headless-styles"),", you can extend our components to use whichever custom theme solution you prefer with your chosen library (i.e. styled-components, emotion, etc.)."),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/development/headless-styles/Button#extending"},"Button example")," for more details."),(0,r.kt)("h2",{id:"a-note-on-custom-tokens-in-css"},"A note on custom tokens in CSS"),(0,r.kt)("p",null,"Because we limit tokens to our semantic color theme (which should provide you with anything you will more than likely ever need), your team may feel the need to extend and add additional variables to your project. In this scenario, for performance reasons, ",(0,r.kt)("strong",{parentName:"p"},"you should use static variables when you need a color/value not in the list"),". Once you pass 60 CSS tokens, additional tokens will start to negatively impact the performance of page loads."),(0,r.kt)("p",null,"There is enough data on the web now that proves it is more performant to use static values than repeat CSS properties."),(0,r.kt)("p",null,"This means that doing this..."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"padding-top: 1rem;\n")),(0,r.kt)("p",null,"Is much more performant than doing this 100 times in your code-base:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"padding-top: var(--padding-top);\n")),(0,r.kt)("p",null,"This is exactly why we limit our tokens at 60 in quantity and only using color values."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If your team would like to define a large number of tokens to make your code seem more valuable, ",(0,r.kt)("strong",{parentName:"p"},"we highly recommend the use of SCSS in your project which will produce the most performant outcome in this scenario."))),(0,r.kt)("h3",{id:"scss-tokens"},"SCSS tokens"),(0,r.kt)("p",null,"SCSS tokens differ from CSS variables in that they are pre-processed out of existence and into your code base. This means that when you use SCSS, there are no tokens that are stored in browser memory. This is a ",(0,r.kt)("strong",{parentName:"p"},"huge")," benefit because you can essentially create as many tokens as you want with ",(0,r.kt)("strong",{parentName:"p"},"no negative side effects to performance.")))}f.isMDXComponent=!0},61481:function(e){e.exports=JSON.parse('{"s":["action","danger","default","info","success","warning"],"X":{"action":{"psActionBackground":{"id":"psActionBackground","cssName":"--ps-action-background","sassName":"$ps-action-background","jsName":"psActionBackground","value":"#4A33D1"},"psActionBackgroundHover":{"id":"psActionBackgroundHover","cssName":"--ps-action-background-hover","sassName":"$ps-action-background-hover","jsName":"psActionBackgroundHover","value":"#3C28B1"},"psActionBackgroundActive":{"id":"psActionBackgroundActive","cssName":"--ps-action-background-active","sassName":"$ps-action-background-active","jsName":"psActionBackgroundActive","value":"#30208D"},"psActionBackgroundWeak":{"id":"psActionBackgroundWeak","cssName":"--ps-action-background-weak","sassName":"$ps-action-background-weak","jsName":"psActionBackgroundWeak","value":"#24186A"},"psActionBackgroundWeakHover":{"id":"psActionBackgroundWeakHover","cssName":"--ps-action-background-weak-hover","sassName":"$ps-action-background-weak-hover","jsName":"psActionBackgroundWeakHover","value":"#30208D"},"psActionBackgroundWeakActive":{"id":"psActionBackgroundWeakActive","cssName":"--ps-action-background-weak-active","sassName":"$ps-action-background-weak-active","jsName":"psActionBackgroundWeakActive","value":"#24186A"},"psActionBorder":{"id":"psActionBorder","cssName":"--ps-action-border","sassName":"$ps-action-border","jsName":"psActionBorder","value":"#6855D9"},"psActionBorderFocus":{"id":"psActionBorderFocus","cssName":"--ps-action-border-focus","sassName":"$ps-action-border-focus","jsName":"psActionBorderFocus","value":"#3895FF"},"psActionNavigation":{"id":"psActionNavigation","cssName":"--ps-action-navigation","sassName":"$ps-action-navigation","jsName":"psActionNavigation","value":"#3895FF"},"psActionNavigationHover":{"id":"psActionNavigationHover","cssName":"--ps-action-navigation-hover","sassName":"$ps-action-navigation-hover","jsName":"psActionNavigationHover","value":"#3895FF"},"psActionNavigationVisited":{"id":"psActionNavigationVisited","cssName":"--ps-action-navigation-visited","sassName":"$ps-action-navigation-visited","jsName":"psActionNavigationVisited","value":"#B17DD4"},"psActionText":{"id":"psActionText","cssName":"--ps-action-text","sassName":"$ps-action-text","jsName":"psActionText","value":"#E1DDF7"},"psActionTextWeak":{"id":"psActionTextWeak","cssName":"--ps-action-text-weak","sassName":"$ps-action-text-weak","jsName":"psActionTextWeak","value":"#A499E8"},"psActionTextMedium":{"id":"psActionTextMedium","cssName":"--ps-action-text-medium","sassName":"$ps-action-text-medium","jsName":"psActionTextMedium","value":"#8677E0"},"psActionTextInverse":{"id":"psActionTextInverse","cssName":"--ps-action-text-inverse","sassName":"$ps-action-text-inverse","jsName":"psActionTextInverse","value":"#E1DDF7"}},"danger":{"psDangerBackground":{"id":"psDangerBackground","cssName":"--ps-danger-background","sassName":"$ps-danger-background","jsName":"psDangerBackground","value":"#B9004B"},"psDangerBackgroundHover":{"id":"psDangerBackgroundHover","cssName":"--ps-danger-background-hover","sassName":"$ps-danger-background-hover","jsName":"psDangerBackgroundHover","value":"#8B0038"},"psDangerBackgroundActive":{"id":"psDangerBackgroundActive","cssName":"--ps-danger-background-active","sassName":"$ps-danger-background-active","jsName":"psDangerBackgroundActive","value":"#5C0026"},"psDangerBorder":{"id":"psDangerBorder","cssName":"--ps-danger-border","sassName":"$ps-danger-border","jsName":"psDangerBorder","value":"#FF1675"},"psDangerSurface":{"id":"psDangerSurface","cssName":"--ps-danger-surface","sassName":"$ps-danger-surface","jsName":"psDangerSurface","value":"#5C0026"},"psDangerText":{"id":"psDangerText","cssName":"--ps-danger-text","sassName":"$ps-danger-text","jsName":"psDangerText","value":"#FFF0F6"},"psDangerTextWeak":{"id":"psDangerTextWeak","cssName":"--ps-danger-text-weak","sassName":"$ps-danger-text-weak","jsName":"psDangerTextWeak","value":"#FFA2C8"},"psDangerTextMedium":{"id":"psDangerTextMedium","cssName":"--ps-danger-text-medium","sassName":"$ps-danger-text-medium","jsName":"psDangerTextMedium","value":"#FF73AC"},"psDangerTextInverse":{"id":"psDangerTextInverse","cssName":"--ps-danger-text-inverse","sassName":"$ps-danger-text-inverse","jsName":"psDangerTextInverse","value":"#FFF0F6"}},"default":{"psBackground":{"id":"psBackground","cssName":"--ps-background","sassName":"$ps-background","jsName":"psBackground","value":"#393B6B"},"psBackgroundHover":{"id":"psBackgroundHover","cssName":"--ps-background-hover","sassName":"$ps-background-hover","jsName":"psBackgroundHover","value":"#404376"},"psBackgroundActive":{"id":"psBackgroundActive","cssName":"--ps-background-active","sassName":"$ps-background-active","jsName":"psBackgroundActive","value":"#2D2D55"},"psBorder":{"id":"psBorder","cssName":"--ps-border","sassName":"$ps-border","jsName":"psBorder","value":"#404376"},"psBorderWeak":{"id":"psBorderWeak","cssName":"--ps-border-weak","sassName":"$ps-border-weak","jsName":"psBorderWeak","value":"#2D2D55"},"psBorderStrong":{"id":"psBorderStrong","cssName":"--ps-border-strong","sassName":"$ps-border-strong","jsName":"psBorderStrong","value":"#585FA2"},"psSurface":{"id":"psSurface","cssName":"--ps-surface","sassName":"$ps-surface","jsName":"psSurface","value":"#130F25"},"psSurfaceWeak":{"id":"psSurfaceWeak","cssName":"--ps-surface-weak","sassName":"$ps-surface-weak","jsName":"psSurfaceWeak","value":"#1B1834"},"psSurfaceMedium":{"id":"psSurfaceMedium","cssName":"--ps-surface-medium","sassName":"$ps-surface-medium","jsName":"psSurfaceMedium","value":"#242145"},"psSurfaceStrong":{"id":"psSurfaceStrong","cssName":"--ps-surface-strong","sassName":"$ps-surface-strong","jsName":"psSurfaceStrong","value":"#2A2753"},"psSurfaceInverse":{"id":"psSurfaceInverse","cssName":"--ps-surface-inverse","sassName":"$ps-surface-inverse","jsName":"psSurfaceInverse","value":"#F3F3F8"},"psText":{"id":"psText","cssName":"--ps-text","sassName":"$ps-text","jsName":"psText","value":"#D1D2E6"},"psTextWeak":{"id":"psTextWeak","cssName":"--ps-text-weak","sassName":"$ps-text-weak","jsName":"psTextWeak","value":"#8B90C1"},"psTextMedium":{"id":"psTextMedium","cssName":"--ps-text-medium","sassName":"$ps-text-medium","jsName":"psTextMedium","value":"#A5AACF"},"psTextStrong":{"id":"psTextStrong","cssName":"--ps-text-strong","sassName":"$ps-text-strong","jsName":"psTextStrong","value":"#F3F3F8"},"psTextInverse":{"id":"psTextInverse","cssName":"--ps-text-inverse","sassName":"$ps-text-inverse","jsName":"psTextInverse","value":"#130F25"}},"info":{"psInfoBorder":{"id":"psInfoBorder","cssName":"--ps-info-border","sassName":"$ps-info-border","jsName":"psInfoBorder","value":"#00A3FF"},"psInfoSurface":{"id":"psInfoSurface","cssName":"--ps-info-surface","sassName":"$ps-info-surface","jsName":"psInfoSurface","value":"#003655"},"psInfoText":{"id":"psInfoText","cssName":"--ps-info-text","sassName":"$ps-info-text","jsName":"psInfoText","value":"#D5F0FF"},"psInfoTextWeak":{"id":"psInfoTextWeak","cssName":"--ps-info-text-weak","sassName":"$ps-info-text-weak","jsName":"psInfoTextWeak","value":"#80D1FF"},"psInfoTextMedium":{"id":"psInfoTextMedium","cssName":"--ps-info-text-medium","sassName":"$ps-info-text-medium","jsName":"psInfoTextMedium","value":"#2BB2FF"}},"success":{"psSuccessBorder":{"id":"psSuccessBorder","cssName":"--ps-success-border","sassName":"$ps-success-border","jsName":"psSuccessBorder","value":"#02E088"},"psSuccessSurface":{"id":"psSuccessSurface","cssName":"--ps-success-surface","sassName":"$ps-success-surface","jsName":"psSuccessSurface","value":"#014B2D"},"psSuccessText":{"id":"psSuccessText","cssName":"--ps-success-text","sassName":"$ps-success-text","jsName":"psSuccessText","value":"#D0FFEC"},"psSuccessTextWeak":{"id":"psSuccessTextWeak","cssName":"--ps-success-text-weak","sassName":"$ps-success-text-weak","jsName":"psSuccessTextWeak","value":"#43FDB4"},"psSuccessTextMedium":{"id":"psSuccessTextMedium","cssName":"--ps-success-text-medium","sassName":"$ps-success-text-medium","jsName":"psSuccessTextMedium","value":"#02BB71"}},"warning":{"psWarningBorder":{"id":"psWarningBorder","cssName":"--ps-warning-border","sassName":"$ps-warning-border","jsName":"psWarningBorder","value":"#FFBA0D"},"psWarningSurface":{"id":"psWarningSurface","cssName":"--ps-warning-surface","sassName":"$ps-warning-surface","jsName":"psWarningSurface","value":"#6B4C00"},"psWarningText":{"id":"psWarningText","cssName":"--ps-warning-text","sassName":"$ps-warning-text","jsName":"psWarningText","value":"#FFF6E0"},"psWarningTextWeak":{"id":"psWarningTextWeak","cssName":"--ps-warning-text-weak","sassName":"$ps-warning-text-weak","jsName":"psWarningTextWeak","value":"#FFE4A1"},"psWarningTextMedium":{"id":"psWarningTextMedium","cssName":"--ps-warning-text-medium","sassName":"$ps-warning-text-medium","jsName":"psWarningTextMedium","value":"#FFD262"}}}}')}}]);