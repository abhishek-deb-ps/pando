"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[52357],{70167:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(45721);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2409:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var n=a(60953),r=a(59005),i=(a(45721),a(70167)),l=["components"],o={tags:["text","text box","field","label","helper"],title:"Input and Textarea"},s=void 0,u={unversionedId:"design/components/input",id:"design/components/input",title:"Input and Textarea",description:"Description",source:"@site/docs/design/components/input.md",sourceDirName:"design/components",slug:"/design/components/input",permalink:"/docs/next/design/components/input",draft:!1,editUrl:"https://github.com/pluralsight/tva/edit/main/website/docs/design/components/input.md",tags:[{label:"text",permalink:"/docs/next/tags/text"},{label:"text box",permalink:"/docs/next/tags/text-box"},{label:"field",permalink:"/docs/next/tags/field"},{label:"label",permalink:"/docs/next/tags/label"},{label:"helper",permalink:"/docs/next/tags/helper"}],version:"current",lastUpdatedBy:"Brad Bice",frontMatter:{tags:["text","text box","field","label","helper"],title:"Input and Textarea"},sidebar:"design",previous:{title:"Form Control",permalink:"/docs/next/design/components/form-control"},next:{title:"Lists",permalink:"/docs/next/design/components/lists"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Anatomy/Structure",id:"anatomystructure",level:2},{value:"Usage",id:"usage",level:2},{value:"Size",id:"size",level:3},{value:"Dos and don&#39;ts",id:"dos-and-donts",level:3},{value:"Best practices",id:"best-practices",level:3},{value:"Content Guidance",id:"content-guidance",level:2},{value:"Microcopy",id:"microcopy",level:3},{value:"Content considerations",id:"content-considerations",level:3},{value:"States (visual examples)",id:"states-visual-examples",level:2},{value:"Behavior",id:"behavior",level:2}],p={toc:d};function m(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Text inputs and textareas allow users to insert and interact with data."),(0,i.kt)("h2",{id:"anatomystructure"},"Anatomy/Structure"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Container"),(0,i.kt)("li",{parentName:"ol"},"Leading icon"),(0,i.kt)("li",{parentName:"ol"},"Placeholder/Value"),(0,i.kt)("li",{parentName:"ol"},"Trailing icon"),(0,i.kt)("li",{parentName:"ol"},"Resize (textarea)")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Input and Textarea will be used as part of the Form Control component, which can be configured to include either type of input type, or a Select dropdown."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Input (text):"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Short form, single-line data collection and interaction"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Textarea:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Long form, multiple line data collection and interaction")))),(0,i.kt)("p",null,"Note: Required and invalid messaging will be represented in form-control."),(0,i.kt)("h3",{id:"size"},"Size"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"L",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Default, use in most cases"))),(0,i.kt)("li",{parentName:"ul"},"M",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Use within another widget or experience, when space is at a premium, eg. Pagination (table)")))),(0,i.kt)("h3",{id:"dos-and-donts"},"Dos and don'ts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Do always provide a label or allow access to a label for assistive technologies if it is not shown visually (applied using the Form Control component)"),(0,i.kt)("li",{parentName:"ul"},"Do adjust the size of the input according to the data being asked for, e.g. ZIP code would use a shorter input width to accommodate only 10 max characters."),(0,i.kt)("li",{parentName:"ul"},"Do not use placeholders to communicate critical information, as they disappear as soon as the user begins entering data. ",(0,i.kt)("a",{parentName:"li",href:"#content-considerations"},"See more about Placeholders")),(0,i.kt)("li",{parentName:"ul"},"Use a text input with type: date for date entries, which will format the date as ",(0,i.kt)("inlineCode",{parentName:"li"},"MM/DD/YYYY"))),(0,i.kt)("h3",{id:"best-practices"},"Best practices"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Input masks (such as date or phone number formatting) would use the same styling as placeholder text."),(0,i.kt)("li",{parentName:"ul"},"Consider ",(0,i.kt)("em",{parentName:"li"},"not")," using placeholder values in most cases. Empty fields draw more attention than those with placeholders, which users are more likely to skip as the hint can get mistaken for pre-filled data."),(0,i.kt)("li",{parentName:"ul"},"Use freeform Inputs or Textareas when a particular type of data is easier for users to enter themselves rather than manipulating a prerendered widget, e.g. entering an address instead of choosing from a widget. Many users take advantage of browser or 3rd party quickfill features as well."),(0,i.kt)("li",{parentName:"ul"},"Similarly, using typeahead or similar suggestive/search technologies with a text input may be more efficient for the user than choosing from a Select, so consider these cases when selecting a control.")),(0,i.kt)("h2",{id:"content-guidance"},"Content Guidance"),(0,i.kt)("h3",{id:"microcopy"},"Microcopy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Placeholders: Use sentence case capitalization"),(0,i.kt)("li",{parentName:"ul"},"Validation: Validate all numbers, email addresses, and other applicable information according to our content guides.")),(0,i.kt)("h3",{id:"content-considerations"},"Content considerations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Placeholder text",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Placeholder text is not required, and should only be utilized in addition to helper text to guide the user as to what information should be entered, and in what format."),(0,i.kt)("li",{parentName:"ul"},"Placeholder text should never repeat the label associated with an input.")))),(0,i.kt)("h2",{id:"states-visual-examples"},"States (visual examples)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default"),(0,i.kt)("li",{parentName:"ul"},"Hover"),(0,i.kt)("li",{parentName:"ul"},"Focus"),(0,i.kt)("li",{parentName:"ul"},"Error",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Note: The warning icon is required for all error-state input fields, as an additional indicator that doesn't rely on color."))),(0,i.kt)("li",{parentName:"ul"},"Disabled")),(0,i.kt)("h2",{id:"behavior"},"Behavior"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Input masking",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Data masks (auto formatting of input content) should be used in the following types of data: numbers, time, dates, phone numbers, currency, and social security numbers (dashes)."))),(0,i.kt)("li",{parentName:"ul"},"Icons",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A leading icon may be used as an assistive indicator of the purpose of a field, e.g. Search fields using a magnifying glass icon. These should be used sparingly otherwise, as they add more cognitive load, may confuse the user, and may not provide enough info via assistive technologies. Rely on a label, helper text, or (lastly) placeholder text to direct the user instead."))),(0,i.kt)("li",{parentName:"ul"},"Text overflow",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Text will overflow, and scroll horizontally as needed, in all Input fields. While the users are able to enter or manipulate as much data as needed, if a minimum or maximum limit or specific format is required, it should be communicated via helper text."),(0,i.kt)("li",{parentName:"ul"},"Textareas will only overflow and scroll vertically as needed."))),(0,i.kt)("li",{parentName:"ul"},"Resizing (textarea)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Textarea elements should be allowed to be resized at least vertically by the user, to allow for a larger area to enter or manipulate data. Ensure that surrounding elements or layouts will not be affected by this.")))))}m.isMDXComponent=!0}}]);