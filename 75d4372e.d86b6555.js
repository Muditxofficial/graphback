(window.webpackJsonp=window.webpackJsonp||[]).push([[582],{1329:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),f=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=f(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},l=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),s=f(a),l=r,u=s["".concat(c,".").concat(l)]||s[l]||m[l]||i;return a?n.a.createElement(u,o(o({ref:t},p),{},{components:a})):n.a.createElement(u,o({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,c=new Array(i);c[0]=l;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var p=2;p<i;p++)c[p]=a[p];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}l.displayName="MDXCreateElement"},651:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return f}));var r=a(3),n=a(7),i=(a(0),a(1329)),c={id:"_diff_computediff_",title:"diff/computeDiff",sidebar_label:"diff/computeDiff"},o={unversionedId:"api/graphql-migrations/modules/_diff_computediff_",id:"version-0.16.x/api/graphql-migrations/modules/_diff_computediff_",isDocsHomePage:!1,title:"diff/computeDiff",description:"Index",source:"@site/versioned_docs/version-0.16.x/api/graphql-migrations/modules/_diff_computediff_.md",slug:"/api/graphql-migrations/modules/_diff_computediff_",permalink:"/docs/0.16.x/api/graphql-migrations/modules/_diff_computediff_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.16.x/api/graphql-migrations/modules/_diff_computediff_.md",version:"0.16.x",sidebar_label:"diff/computeDiff"},b=[{value:"Index",id:"index",children:[{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"computeDiff",id:"computediff",children:[]}]}],p={rightToc:b};function f(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"index"},"Index"),Object(i.b)("h3",{id:"functions"},"Functions"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphql-migrations/modules/_diff_computediff_#computediff"}),"computeDiff"))),Object(i.b)("h2",{id:"functions-1"},"Functions"),Object(i.b)("h3",{id:"computediff"},"computeDiff"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"computeDiff"),"(",Object(i.b)("inlineCode",{parentName:"p"},"from"),": ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/0.16.x/api/graphql-migrations/interfaces/_abstract_abstractdatabase_.abstractdatabase"}),"AbstractDatabase"),", ",Object(i.b)("inlineCode",{parentName:"p"},"to"),": ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/0.16.x/api/graphql-migrations/interfaces/_abstract_abstractdatabase_.abstractdatabase"}),"AbstractDatabase"),", ",Object(i.b)("inlineCode",{parentName:"p"},"__namedParameters"),": object): ",Object(i.b)("em",{parentName:"p"},"Promise\u2039",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/0.16.x/api/graphql-migrations/interfaces/_diff_operation_.operation"}),"Operation"),"[]\u203a")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphql-migrations/src/diff/computeDiff.ts#L9"}),"diff/computeDiff.ts:9"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters:")),Object(i.b)("p",null,"\u25aa ",Object(i.b)("strong",{parentName:"p"},"from"),": ",Object(i.b)("em",{parentName:"p"},Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/0.16.x/api/graphql-migrations/interfaces/_abstract_abstractdatabase_.abstractdatabase"}),"AbstractDatabase"))),Object(i.b)("p",null,"\u25aa ",Object(i.b)("strong",{parentName:"p"},"to"),": ",Object(i.b)("em",{parentName:"p"},Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/0.16.x/api/graphql-migrations/interfaces/_abstract_abstractdatabase_.abstractdatabase"}),"AbstractDatabase"))),Object(i.b)("p",null,"\u25aa",Object(i.b)("inlineCode",{parentName:"p"},"Default value"),"  ",Object(i.b)("strong",{parentName:"p"},"__namedParameters"),": ",Object(i.b)("em",{parentName:"p"},"object"),"= {}"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"updateComments")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"any"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"false")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"Promise\u2039",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/0.16.x/api/graphql-migrations/interfaces/_diff_operation_.operation"}),"Operation"),"[]\u203a")))}f.isMDXComponent=!0}}]);