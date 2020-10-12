(window.webpackJsonp=window.webpackJsonp||[]).push([[779],{1315:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return u}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),b=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=b(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=b(r),f=a,u=s["".concat(o,".").concat(f)]||s[f]||m[f]||i;return r?n.a.createElement(u,p(p({ref:t},l),{},{components:r})):n.a.createElement(u,p({ref:t},l))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=r[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},834:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return b}));var a=r(2),n=r(6),i=(r(0),r(1315)),o={id:"_plugin_migrateoperationfilter_.migrateoperationfilter",title:"MigrateOperationFilter",sidebar_label:"MigrateOperationFilter"},p={unversionedId:"api/graphql-migrations/interfaces/_plugin_migrateoperationfilter_.migrateoperationfilter",id:"version-0.15.x/api/graphql-migrations/interfaces/_plugin_migrateoperationfilter_.migrateoperationfilter",isDocsHomePage:!1,title:"MigrateOperationFilter",description:"Method that can be used to filter out operations that we do not want to execute.",source:"@site/versioned_docs/version-0.15.x/api/graphql-migrations/interfaces/_plugin_migrateoperationfilter_.migrateoperationfilter.md",slug:"/api/graphql-migrations/interfaces/_plugin_migrateoperationfilter_.migrateoperationfilter",permalink:"/docs/0.15.x/api/graphql-migrations/interfaces/_plugin_migrateoperationfilter_.migrateoperationfilter",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.15.x/api/graphql-migrations/interfaces/_plugin_migrateoperationfilter_.migrateoperationfilter.md",version:"0.15.x",sidebar_label:"MigrateOperationFilter"},c=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Methods",id:"methods",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"filter",id:"filter",children:[]}]}],l={rightToc:c};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Method that can be used to filter out operations that we do not want to execute.\nFor example if we want to prevent deletion of the tables filter can remove ",Object(i.b)("inlineCode",{parentName:"p"},"table.drop")," operations\nfrom array"),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"MigrateOperationFilter"))),Object(i.b)("h2",{id:"index"},"Index"),Object(i.b)("h3",{id:"methods"},"Methods"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphql-migrations/interfaces/_plugin_migrateoperationfilter_.migrateoperationfilter#filter"}),"filter"))),Object(i.b)("h2",{id:"methods-1"},"Methods"),Object(i.b)("h3",{id:"filter"},"filter"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"filter"),"(",Object(i.b)("inlineCode",{parentName:"p"},"operations"),": ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.15.x/api/graphql-migrations/interfaces/_diff_operation_.operation"}),"Operation"),"[]): ",Object(i.b)("em",{parentName:"p"},Object(i.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/0.15.x/api/graphql-migrations/interfaces/_diff_operation_.operation"}),"Operation"),"[]")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphql-migrations/src/plugin/MigrateOperationFilter.ts#L10"}),"plugin/MigrateOperationFilter.ts:10"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters:")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"operations")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/0.15.x/api/graphql-migrations/interfaces/_diff_operation_.operation"}),"Operation"),"[]")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},Object(i.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/0.15.x/api/graphql-migrations/interfaces/_diff_operation_.operation"}),"Operation"),"[]")))}b.isMDXComponent=!0}}]);