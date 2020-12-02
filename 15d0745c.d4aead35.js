(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{1329:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return g}));var a=t(0),n=t.n(a);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var b=n.a.createContext({}),l=function(e){var r=n.a.useContext(b),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return n.a.createElement(b.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},d=n.a.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),u=l(t),d=a,g=u["".concat(o,".").concat(d)]||u[d]||s[d]||c;return t?n.a.createElement(g,i(i({ref:r},b),{},{components:t})):n.a.createElement(g,i({ref:r},b))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=d;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var b=2;b<c;b++)o[b]=t[b];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},178:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return p})),t.d(r,"default",(function(){return l}));var a=t(3),n=t(7),c=(t(0),t(1329)),o={id:"index",title:"@graphback/core",sidebar_label:"README"},i={unversionedId:"api/graphback-core/index",id:"version-1.0/api/graphback-core/index",isDocsHomePage:!1,title:"@graphback/core",description:"Graphback",source:"@site/versioned_docs/version-1.0/api/graphback-core/index.md",slug:"/api/graphback-core/index",permalink:"/docs/api/graphback-core/index",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-1.0/api/graphback-core/index.md",version:"1.0",sidebar_label:"README"},p=[{value:"Graphback",id:"graphback",children:[]},{value:"Graphback-Core",id:"graphback-core",children:[]}],b={rightToc:p};function l(e){var r=e.components,t=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"graphback"},"Graphback"),Object(c.b)("p",{align:"center"},Object(c.b)("img",{width:"400",src:"https://raw.githubusercontent.com/aerogear/graphback/master/website/static/img/logo.png"}),Object(c.b)("br",null),"Auto generate database structure, ",Object(c.b)("br",null),"GraphQL Resolvers and Queries from GraphQL types \ud83d\ude80"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Documentation"),": ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://graphback.dev"}),"https://graphback.dev"),"\n",Object(c.b)("strong",{parentName:"p"},"Repository"),": ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/aerogear/graphback/"}),"https://github.com/aerogear/graphback/")),Object(c.b)("h2",{id:"graphback-core"},"Graphback-Core"),Object(c.b)("p",null,"Core package is an abstraction that provides common entry point to all graphback concepts:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Plugins"),Object(c.b)("li",{parentName:"ul"},"Helpers for building ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://graphqlcrud.org"}),"https://graphqlcrud.org")," schema"),Object(c.b)("li",{parentName:"ul"},"GraphbackCRUDService abstraction"),Object(c.b)("li",{parentName:"ul"},"DataProvider abstraction")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"NOTE: This package is not designed to be used directly.")))}l.isMDXComponent=!0}}]);