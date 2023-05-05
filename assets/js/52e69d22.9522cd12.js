"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3232],{70167:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(45721);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51143:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l}});var a=n(81648),r=(n(45721),n(70167));const i={tags:["Dates","DatePicker","Field"],title:"Entering Dates"},o=void 0,s={unversionedId:"learn/learn-pando/design-patterns/entering-dates",id:"learn/learn-pando/design-patterns/entering-dates",title:"Entering Dates",description:"In order to provide an accessible user experience, you should design and develop date picking experiences to use an Input rather than a Date Picker.",source:"@site/docs/learn/learn-pando/design-patterns/entering-dates.mdx",sourceDirName:"learn/learn-pando/design-patterns",slug:"/learn/learn-pando/design-patterns/entering-dates",permalink:"/docs/next/learn/learn-pando/design-patterns/entering-dates",draft:!1,editUrl:"https://github.com/pluralsight/pando/edit/main/website/docs/learn/learn-pando/design-patterns/entering-dates.mdx",tags:[{label:"Dates",permalink:"/docs/next/tags/dates"},{label:"DatePicker",permalink:"/docs/next/tags/date-picker"},{label:"Field",permalink:"/docs/next/tags/field"}],version:"current",lastUpdatedBy:"Casey Baggz",frontMatter:{tags:["Dates","DatePicker","Field"],title:"Entering Dates"},sidebar:"learn",previous:{title:"Design Patterns",permalink:"/docs/next/learn/learn-pando/design-patterns/"},next:{title:"Page Loading",permalink:"/docs/next/learn/learn-pando/design-patterns/page-loading"}},p={},l=[{value:"Calendar Picker vs. Input",id:"calendar-picker-vs-input",level:2},{value:"Date Pickers",id:"date-pickers",level:3},{value:"Text Input",id:"text-input",level:3},{value:"Text Input for Date Entry",id:"text-input-for-date-entry",level:2}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In order to provide an accessible user experience, you should design and develop date picking experiences to use an Input rather than a Date Picker."),(0,r.kt)("h2",{id:"calendar-picker-vs-input"},"Calendar Picker vs. Input"),(0,r.kt)("h3",{id:"date-pickers"},"Date Pickers"),(0,r.kt)("p",null,"Date Pickers are most useful for scheduling applications, where the user is selecting an unknown date with the aid of calendar context. They primarily benefit sighted users using a pointing device or touchscreen and most importantly ",(0,r.kt)("strong",{parentName:"p"},"are not fully accessible"),"."),(0,r.kt)("p",null,"Despite what many articles claim, Date Pickers cannot be made accessible either. To learn more about why you should avoid using a Date Picker we highly recommend you read the article:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://adrianroselli.com/2019/07/maybe-you-dont-need-a-date-picker.html"},"Maybe You Don't Need a Date Picker"),"."),(0,r.kt)("h3",{id:"text-input"},"Text Input"),(0,r.kt)("p",null,"The text-based Input is accessible by default and is easier use in most cases where the user needs to enter a ",(0,r.kt)("em",{parentName:"p"},"known")," date which applies to most applications and what we recommend using in Pando."),(0,r.kt)("admonition",{title:"date Inputs are not accessible",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Please note we are specifically using the ",(0,r.kt)("inlineCode",{parentName:"p"},'type="text"')," input element and ",(0,r.kt)("strong",{parentName:"p"},"not")," the ",(0,r.kt)("inlineCode",{parentName:"p"},'type="date"'),". This is because the date version of an input is (shockingly) ",(0,r.kt)("strong",{parentName:"p"},"not accessible"),".")),(0,r.kt)("h2",{id:"text-input-for-date-entry"},"Text Input for Date Entry"),(0,r.kt)("p",null,"In Pando, we recommend using the text-based Input combined with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/reference/react-hooks/useAutoFormatDate"},"useAutoFormatDate")," hook for displaying a way to enter a date."),(0,r.kt)("p",null,"In this example, we are creating a DateInput component that can be used anywhere in your application."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live showLineNumbers",live:!0,showLineNumbers:!0},"function DateInput() {\n  const formatOptions = useAutoFormatDate()\n  const { fieldOptions } = getFormControlProps()\n  const { value: helpText, ...message } = getFieldMessageProps({\n    id: 'date-input-help',\n    message: `Enter a date in the format of ${formatOptions.placeholder}`,\n  })\n  const inputProps = getInputProps({\n    ...fieldOptions,\n    describedBy: message.id,\n    id: 'date-input',\n    kind: 'icon',\n    name: 'user_date',\n    placeholder: formatOptions.placeholder,\n    value: formatOptions.value,\n  })\n  const { value: labelText, ...labelProps } = getFormLabelProps({\n    ...fieldOptions,\n    htmlFor: inputProps.input.id,\n    value: 'Date input',\n  })\n\n  return (\n    <div>\n      <label {...labelProps}>{labelText}</label>\n      <div {...inputProps.inputWrapper}>\n        <span {...inputProps.iconWrapper}>\n          <CalendarIcon {...getIconProps(inputProps.iconOptions)} />\n        </span>\n        <input {...inputProps.input} onChange={formatOptions.onChange} />\n      </div>\n      <small {...message}>{helpText}</small>\n    </div>\n  )\n}\n")))}u.isMDXComponent=!0}}]);