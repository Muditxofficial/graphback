(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{1329:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,f=p["".concat(c,".").concat(d)]||p[d]||u[d]||i;return n?a.a.createElement(f,l(l({ref:t},s),{},{components:n})):a.a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var s=2;s<i;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},256:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(1329)),c={id:"_utils_istransientfield_",title:"utils/isTransientField",sidebar_label:"utils/isTransientField"},l={unversionedId:"api/graphback-core/modules/_utils_istransientfield_",id:"version-0.16.x/api/graphback-core/modules/_utils_istransientfield_",isDocsHomePage:!1,title:"utils/isTransientField",description:"Index",source:"@site/versioned_docs/version-0.16.x/api/graphback-core/modules/_utils_istransientfield_.md",slug:"/api/graphback-core/modules/_utils_istransientfield_",permalink:"/docs/0.16.x/api/graphback-core/modules/_utils_istransientfield_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.16.x/api/graphback-core/modules/_utils_istransientfield_.md",version:"0.16.x",sidebar_label:"utils/isTransientField"},o=[{value:"Index",id:"index",children:[{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"isTransientField",id:"istransientfield",children:[]}]}],s={rightToc:o};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"index"},"Index"),Object(i.b)("h3",{id:"functions"},"Functions"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphback-core/modules/_utils_istransientfield_#istransientfield"}),"isTransientField"))),Object(i.b)("h2",{id:"functions-1"},"Functions"),Object(i.b)("h3",{id:"istransientfield"},"isTransientField"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"isTransientField"),"(",Object(i.b)("inlineCode",{parentName:"p"},"field"),": GraphQLField\u2039any, any\u203a): ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-core/src/utils/isTransientField.ts#L9"}),"packages/graphback-core/src/utils/isTransientField.ts:9"))),Object(i.b)("p",null," Return true if the GraphQL field has a @transient annotation"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters:")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"field")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphQLField\u2039any, any\u203a"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}))))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"boolean")))}b.isMDXComponent=!0}}]);