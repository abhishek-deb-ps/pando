"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1759],{70167:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var a=t(45721);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(t),u=i,g=m["".concat(o,".").concat(u)]||m[u]||c[u]||r;return t?a.createElement(g,l(l({ref:n},d),{},{components:t})):a.createElement(g,l({ref:n},d))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=m;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var p=2;p<r;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6906:function(e,n,t){t.r(n),t.d(n,{assets:function(){return o},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return p}});var a=t(81648),i=(t(45721),t(70167));const r={tags:["Heading","Paragraph","Code","List","Text"],title:"Typography"},l=void 0,s={unversionedId:"reference/general/typography",id:"reference/general/typography",title:"Typography",description:"Our typography relies on the correct usage of text syntax which will help your designs and development to become more accessible by nature.",source:"@site/docs/reference/general/typography.mdx",sourceDirName:"reference/general",slug:"/reference/general/typography",permalink:"/docs/next/reference/general/typography",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/reference/general/typography.mdx",tags:[{label:"Heading",permalink:"/docs/next/tags/heading"},{label:"Paragraph",permalink:"/docs/next/tags/paragraph"},{label:"Code",permalink:"/docs/next/tags/code"},{label:"List",permalink:"/docs/next/tags/list"},{label:"Text",permalink:"/docs/next/tags/text"}],version:"current",lastUpdatedBy:"Brad Bice",frontMatter:{tags:["Heading","Paragraph","Code","List","Text"],title:"Typography"},sidebar:"reference",previous:{title:"Icons",permalink:"/docs/next/reference/general/icons"},next:{title:"Admonition",permalink:"/docs/next/reference/components/admonition"}},o={},p=[{value:"Font families",id:"font-families",level:2},{value:"Headings",id:"headings",level:2},{value:"Display Headings",id:"display-headings",level:2},{value:"Non-heading Text",id:"non-heading-text",level:2},{value:"Lists",id:"lists",level:2},{value:"CodeBlocks",id:"codeblocks",level:2},{value:"Line lengths",id:"line-lengths",level:2}],d={toc:p};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Our typography relies on the ",(0,i.kt)("strong",{parentName:"p"},"correct usage of ",(0,i.kt)("a",{parentName:"strong",href:"https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals"},"text syntax"))," which will help your designs and development to become more accessible by nature."),(0,i.kt)("admonition",{title:"Initial Setup Required",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This page requires the use of our ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/learn/get-started/installation/"},"initial setup")," for the Pando library.")),(0,i.kt)("h2",{id:"font-families"},"Font families"),(0,i.kt)("p",null,"Pando uses the Pluralsight custom variable font called ",(0,i.kt)("strong",{parentName:"p"},"PS Commons")," for text and ",(0,i.kt)("strong",{parentName:"p"},"DM Mono")," for code blocks. Browsers that do not support variable fonts will use the system sans-serif fallback."),(0,i.kt)("h2",{id:"headings"},"Headings"),(0,i.kt)("p",null,"Our Heading text is based on the browser heading elements. Below you can see the recommended use case to keep the typography semantic and naturally accessbile."),(0,i.kt)("p",null,"All of our Headings have a weight of ",(0,i.kt)("inlineCode",{parentName:"p"},"600")," and use ",(0,i.kt)("inlineCode",{parentName:"p"},"rem")," units for sizing. We will display the pixel equivalent here for easier translation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Headings() {\n  return (\n    <header>\n      <h1>Page headings, 40px</h1>\n      <h2>Section headings, 32px</h2>\n      <h3>Nested or sidebar section headings, 24px</h3>\n      <h4>Nested sidebar section headings, 18px</h4>\n      <h5>Smaller in-content labels/headings, 16px</h5>\n      <h6>Smallest in-content label/heading, 14px</h6>\n    </header>\n  )\n}\n")),(0,i.kt)("h2",{id:"display-headings"},"Display Headings"),(0,i.kt)("p",null,"Display headings are based on extending the Headline elements by combining the ",(0,i.kt)("inlineCode",{parentName:"p"},"black-heading")," class with the ",(0,i.kt)("inlineCode",{parentName:"p"},"display-<size>"),", available in ",(0,i.kt)("inlineCode",{parentName:"p"},"l"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"m"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"s"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'live title="Display Heading options"',live:!0,title:'"Display',Heading:!0,'options"':!0},'function DisplayHeadings() {\n  return (\n    <header>\n      <h1 className="black-heading display-l">Display 1</h1>\n      <h2 className="black-heading display-m">Display 2</h2>\n      <h3 className="black-heading display-s">Display 3</h3>\n    </header>\n  )\n}\n')),(0,i.kt)("h2",{id:"non-heading-text"},"Non-heading Text"),(0,i.kt)("p",null,"All other text elements that are not Headings are based on the browser text elements."),(0,i.kt)("p",null,"For ",(0,i.kt)("strong",{parentName:"p"},"bold")," text, wrap your text in a ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong"},(0,i.kt)("inlineCode",{parentName:"a"},"strong"))," element if the contents has importance, or ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b"},(0,i.kt)("inlineCode",{parentName:"a"},"b"))," element if you just need to bring attention to something."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'live title="Non-heading options"',live:!0,title:'"Non-heading','options"':!0},'function NonHeadings() {\n  return (\n    <div>\n      <div>\n        <small className="size-xs">\n          Smallest text for labels or descriptions, 12px / 500\n        </small>\n      </div>\n      <div>\n        <small className="size-xs">\n          <strong>Strong version, 12px / 700</strong>\n        </small>\n      </div>\n      <div>\n        <small>Card titles, subtitles, smaller descriptions, 14px / 500</small>\n      </div>\n      <div>\n        <small>\n          <strong>Strong version, 14px / 700</strong>\n        </small>\n      </div>\n      <div>\n        <p>Default body copy, 16px / 500</p>\n      </div>\n      <div>\n        <p>\n          <strong>Strong version, 16px / 700</strong>\n        </p>\n      </div>\n      <div>\n        <p className="size-l">Large form text, subheadings</p>\n      </div>\n      <div>\n        <p className="size-l">\n          <strong>Strong version, 16px / 700</strong>\n        </p>\n      </div>\n      <div>\n        <p className="size-xl">Large Labels, 20px / 500</p>\n      </div>\n      <div>\n        <p className="size-xl">\n          <strong>Strong version, 20px / 700</strong>\n        </p>\n      </div>\n      <div>\n        <p className="size-xxl">Large, emphasized text, 24px / 500</p>\n      </div>\n      <div>\n        <strong>\n          <p className="size-xxl">\n            <strong>Strong version, 24px / 700</strong>\n          </p>\n        </strong>\n      </div>\n    </div>\n  )\n}\n')),(0,i.kt)("h2",{id:"lists"},"Lists"),(0,i.kt)("p",null,"We support ",(0,i.kt)("inlineCode",{parentName:"p"},"ul"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ol"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"dl")," list styling."),(0,i.kt)("p",null,"For bulleted lists, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ul-list")," class as shown in the following example."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'live title="Lists examples"',live:!0,title:'"Lists','examples"':!0},'function Lists() {\n  return (\n    <div>\n      <ul className="ul-list">\n        <li className="ul-list-item">Harry</li>\n        <li className="ul-list-item">Ron</li>\n        <li className="ul-list-item">Hermoine</li>\n      </ul>\n      <ol>\n        <li>One</li>\n        <li>\n          Two\n          <ol>\n            <li>We even support nested lists.</li>\n          </ol>\n        </li>\n      </ol>\n      <dl>\n        <dt>Single Definition</dt>\n        <dd>A term with only one definition.</dd>\n        <dt>Multiple Definitions</dt>\n        <dd>Some terminology has more than one definition.</dd>\n        <dd>This would be an alternate definition.</dd>\n      </dl>\n    </div>\n  )\n}\n')),(0,i.kt)("h2",{id:"codeblocks"},"CodeBlocks"),(0,i.kt)("p",null,"For codeblocks, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"code"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"kbd"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"samp")," tags."),(0,i.kt)("p",null,"If you need to change the sizes of the code, you can add the ",(0,i.kt)("inlineCode",{parentName:"p"},"<size>-code")," class."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'live title="Code styles"',live:!0,title:'"Code','styles"':!0},'function CodeStyles() {\n  return (\n    <div>\n      <p>\n        This is some text with an <code>inline code</code> example.\n      </p>\n      <p>\n        This is a keyboard shortcut <kbd>shift + K</kbd> example.\n      </p>\n\n      <p>This is an output log example:</p>\n      <p>\n        <samp>Keyboard not found Press F1 to continue</samp>\n      </p>\n      <p>\n        <samp className="large-code">Large code</samp>\n      </p>\n      <p>\n        <samp className="small-code">Small code</samp>\n      </p>\n      <p>\n        <samp className="xs-code">Xtra-small code</samp>\n      </p>\n    </div>\n  )\n}\n')),(0,i.kt)("h2",{id:"line-lengths"},"Line lengths"),(0,i.kt)("p",null,"Wide lines of text can be difficult for people to read, and require increased focus. While there is no way to measure a perfect line length for everyone, a general rule of ",(0,i.kt)("strong",{parentName:"p"},"60-100 characters is often cited as a best practice"),"."),(0,i.kt)("p",null,"When designing, this should be taken into consideration according to font size and responsive layout. Users may change the width and size of their viewports, as well as their font size, thereby altering the perceived line length."))}c.isMDXComponent=!0}}]);