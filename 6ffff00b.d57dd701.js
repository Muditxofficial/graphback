/*! For license information please see 6ffff00b.d57dd701.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[437],{1082:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),o=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=o(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},j=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=o(a),j=r,d=u["".concat(c,".").concat(j)]||u[j]||O[j]||b;return a?n.a.createElement(d,l(l({ref:t},p),{},{components:a})):n.a.createElement(d,l({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=j;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var p=2;p<b;p++)c[p]=a[p];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},1083:function(e,t,a){"use strict";e.exports=a(1084)},1084:function(e,t,a){"use strict";var r=a(1085),n="function"==typeof Symbol&&Symbol.for,b=n?Symbol.for("react.element"):60103,c=n?Symbol.for("react.portal"):60106,l=n?Symbol.for("react.fragment"):60107,i=n?Symbol.for("react.strict_mode"):60108,p=n?Symbol.for("react.profiler"):60114,o=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,O=n?Symbol.for("react.forward_ref"):60112,j=n?Symbol.for("react.suspense"):60113,d=n?Symbol.for("react.memo"):60115,m=n?Symbol.for("react.lazy"):60116,s="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function N(e,t,a){this.props=e,this.context=t,this.refs=g,this.updater=a||f}function y(){}function k(e,t,a){this.props=e,this.context=t,this.refs=g,this.updater=a||f}N.prototype.isReactComponent={},N.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},N.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=N.prototype;var v=k.prototype=new y;v.constructor=k,r(v,N.prototype),v.isPureReactComponent=!0;var C={current:null},_=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function R(e,t,a){var r,n={},c=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(c=""+t.key),t)_.call(t,r)&&!x.hasOwnProperty(r)&&(n[r]=t[r]);var i=arguments.length-2;if(1===i)n.children=a;else if(1<i){for(var p=Array(i),o=0;o<i;o++)p[o]=arguments[o+2];n.children=p}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===n[r]&&(n[r]=i[r]);return{$$typeof:b,type:e,key:c,ref:l,props:n,_owner:C.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===b}var D=/\/+/g,G=[];function T(e,t,a,r){if(G.length){var n=G.pop();return n.result=e,n.keyPrefix=t,n.func=a,n.context=r,n.count=0,n}return{result:e,keyPrefix:t,func:a,context:r,count:0}}function P(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>G.length&&G.push(e)}function w(e,t,a){return null==e?0:function e(t,a,r,n){var l=typeof t;"undefined"!==l&&"boolean"!==l||(t=null);var i=!1;if(null===t)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(t.$$typeof){case b:case c:i=!0}}if(i)return r(n,t,""===a?"."+U(t,0):a),1;if(i=0,a=""===a?".":a+":",Array.isArray(t))for(var p=0;p<t.length;p++){var o=a+U(l=t[p],p);i+=e(l,o,r,n)}else if(null===t||"object"!=typeof t?o=null:o="function"==typeof(o=s&&t[s]||t["@@iterator"])?o:null,"function"==typeof o)for(t=o.call(t),p=0;!(l=t.next()).done;)i+=e(l=l.value,o=a+U(l,p++),r,n);else if("object"===l)throw r=""+t,Error(h(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return i}(e,"",t,a)}function U(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function L(e,t){e.func.call(e.context,t,e.count++)}function I(e,t,a){var r=e.result,n=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?E(e,r,a,(function(e){return e})):null!=e&&(S(e)&&(e=function(e,t){return{$$typeof:b,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,n+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(D,"$&/")+"/")+a)),r.push(e))}function E(e,t,a,r,n){var b="";null!=a&&(b=(""+a).replace(D,"$&/")+"/"),w(e,I,t=T(t,b,r,n)),P(t)}var q={current:null};function Q(){var e=q.current;if(null===e)throw Error(h(321));return e}var $={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:C,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,a){if(null==e)return e;var r=[];return E(e,r,null,t,a),r},forEach:function(e,t,a){if(null==e)return e;w(e,L,t=T(null,null,t,a)),P(t)},count:function(e){return w(e,(function(){return null}),null)},toArray:function(e){var t=[];return E(e,t,null,(function(e){return e})),t},only:function(e){if(!S(e))throw Error(h(143));return e}},t.Component=N,t.Fragment=l,t.Profiler=p,t.PureComponent=k,t.StrictMode=i,t.Suspense=j,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=function(e,t,a){if(null==e)throw Error(h(267,e));var n=r({},e.props),c=e.key,l=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,i=C.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var p=e.type.defaultProps;for(o in t)_.call(t,o)&&!x.hasOwnProperty(o)&&(n[o]=void 0===t[o]&&void 0!==p?p[o]:t[o])}var o=arguments.length-2;if(1===o)n.children=a;else if(1<o){p=Array(o);for(var u=0;u<o;u++)p[u]=arguments[u+2];n.children=p}return{$$typeof:b,type:e.type,key:c,ref:l,props:n,_owner:i}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:u,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:o,_context:e},e.Consumer=e},t.createElement=R,t.createFactory=function(e){var t=R.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:O,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return Q().useCallback(e,t)},t.useContext=function(e,t){return Q().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return Q().useEffect(e,t)},t.useImperativeHandle=function(e,t,a){return Q().useImperativeHandle(e,t,a)},t.useLayoutEffect=function(e,t){return Q().useLayoutEffect(e,t)},t.useMemo=function(e,t){return Q().useMemo(e,t)},t.useReducer=function(e,t,a){return Q().useReducer(e,t,a)},t.useRef=function(e){return Q().useRef(e)},t.useState=function(e){return Q().useState(e)},t.version="16.13.1"},1085:function(e,t,a){"use strict";var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},a=0;a<10;a++)t["_"+String.fromCharCode(a)]=a;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(n){return!1}}()?Object.assign:function(e,t){for(var a,l,i=c(e),p=1;p<arguments.length;p++){for(var o in a=Object(arguments[p]))n.call(a,o)&&(i[o]=a[o]);if(r){l=r(a);for(var u=0;u<l.length;u++)b.call(a,l[u])&&(i[l[u]]=a[l[u]])}}return i}},492:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return o}));var r=a(2),n=a(6),b=(a(1083),a(1082)),c={id:"_runtime_graphbackcrudservice_.graphbackcrudservice",title:"GraphbackCRUDService",sidebar_label:"GraphbackCRUDService"},l={unversionedId:"api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice",id:"api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice",isDocsHomePage:!1,title:"GraphbackCRUDService",description:"Graphback layered architecture component that can be called",source:"@site/../docs/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice.md",slug:"/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice",permalink:"/docs/next/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice.md",version:"current",sidebar_label:"GraphbackCRUDService",sidebar:"docs",previous:{title:"runtime/createCRUDService",permalink:"/docs/next/api/graphback-core/modules/_runtime_createcrudservice_"},next:{title:"CRUDService",permalink:"/docs/next/api/graphback-core/classes/_runtime_crudservice_.crudservice"}},i=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implemented by",id:"implemented-by",children:[]},{value:"Index",id:"index",children:[{value:"Methods",id:"methods",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"batchLoadData",id:"batchloaddata",children:[]},{value:"create",id:"create",children:[]},{value:"delete",id:"delete",children:[]},{value:"findBy",id:"findby",children:[]},{value:"findOne",id:"findone",children:[]},{value:"subscribeToCreate",id:"subscribetocreate",children:[]},{value:"subscribeToDelete",id:"subscribetodelete",children:[]},{value:"subscribeToUpdate",id:"subscribetoupdate",children:[]},{value:"update",id:"update",children:[]}]}],p={rightToc:i};function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Graphback layered architecture component that can be called\nfrom the resolver layer in GraphQL and Middlerware layer in RESTfull approach."),Object(b.b)("p",null,"Graphback implements server side procesing using following flow:"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"GraphQL Resolvers")," ->  ",Object(b.b)("inlineCode",{parentName:"p"},"GraphbackCRUDService")," ","[1-*]"," -> ",Object(b.b)("inlineCode",{parentName:"p"},"GraphbackDataProvider")),Object(b.b)("p",null,"Services can be composable (each service can reference multiple layers of other services).\nFor data abstraction Graphback ",Object(b.b)("inlineCode",{parentName:"p"},"GraphbackDataProvider")," can be being used."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"see"))," GraphbackDataProvider"),Object(b.b)("h2",{id:"type-parameters"},"Type parameters"),Object(b.b)("p",null,"\u25aa ",Object(b.b)("strong",{parentName:"p"},"Type")),Object(b.b)("p",null,"\u25aa ",Object(b.b)("strong",{parentName:"p"},"GraphbackContext")),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"GraphbackCRUDService"))),Object(b.b)("h2",{id:"implemented-by"},"Implemented by"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/classes/_runtime_crudservice_.crudservice"}),"CRUDService")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/classes/_runtime_graphbackproxyservice_.graphbackproxyservice"}),"GraphbackProxyService"))),Object(b.b)("h2",{id:"index"},"Index"),Object(b.b)("h3",{id:"methods"},"Methods"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice#batchloaddata"}),"batchLoadData")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice#create"}),"create")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice#delete"}),"delete")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice#findby"}),"findBy")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice#findone"}),"findOne")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice#subscribetocreate"}),"subscribeToCreate")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice#subscribetodelete"}),"subscribeToDelete")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice#subscribetoupdate"}),"subscribeToUpdate")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice#update"}),"update"))),Object(b.b)("h2",{id:"methods-1"},"Methods"),Object(b.b)("h3",{id:"batchloaddata"},"batchLoadData"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"batchLoadData"),"(",Object(b.b)("inlineCode",{parentName:"p"},"relationField"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"id"),": string | number, ",Object(b.b)("inlineCode",{parentName:"p"},"filter"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/graphback-core/modules/_runtime_queryfilter_#queryfilter"}),"QueryFilter"),", ",Object(b.b)("inlineCode",{parentName:"p"},"context"),": GraphbackContext, ",Object(b.b)("inlineCode",{parentName:"p"},"info?"),": GraphQLResolveInfo): ",Object(b.b)("em",{parentName:"p"},"any")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b2b3a76/packages/graphback-core/src/runtime/GraphbackCRUDService.ts#L106"}),"packages/graphback-core/src/runtime/GraphbackCRUDService.ts:106"))),Object(b.b)("p",null,"Specialized function that can utilize batching the data basing on\nDataLoader library"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"relationField")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"name of the field that will be used to match ids")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"id")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string ","|"," number"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"id of the object we want to load")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"filter")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/graphback-core/modules/_runtime_queryfilter_#queryfilter"}),"QueryFilter")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"context")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackContext"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"resolver context object that will be used to apply new loader")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"info?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphQLResolveInfo"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphQL resolver info")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"any")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"create"},"create"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"create"),"(",Object(b.b)("inlineCode",{parentName:"p"},"data"),": Type, ",Object(b.b)("inlineCode",{parentName:"p"},"context?"),": GraphbackContext, ",Object(b.b)("inlineCode",{parentName:"p"},"info?"),": GraphQLResolveInfo): ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b2b3a76/packages/graphback-core/src/runtime/GraphbackCRUDService.ts#L33"}),"packages/graphback-core/src/runtime/GraphbackCRUDService.ts:33"))),Object(b.b)("p",null,"Implementation for object creation"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"data")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"input data")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"context?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackContext"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"context object passed from graphql or rest layer")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"info?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphQLResolveInfo"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"delete"},"delete"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"delete"),"(",Object(b.b)("inlineCode",{parentName:"p"},"data"),": Partial\u2039Type\u203a, ",Object(b.b)("inlineCode",{parentName:"p"},"context?"),": GraphbackContext, ",Object(b.b)("inlineCode",{parentName:"p"},"info?"),": GraphQLResolveInfo): ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b2b3a76/packages/graphback-core/src/runtime/GraphbackCRUDService.ts#L49"}),"packages/graphback-core/src/runtime/GraphbackCRUDService.ts:49"))),Object(b.b)("p",null,"Implementation for object deletes"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"data")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Partial\u2039Type\u203a"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"data used for consistency reasons")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"context?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackContext"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"context object passed from graphql or rest layer")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"info?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphQLResolveInfo"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"findby"},"findBy"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"findBy"),"(",Object(b.b)("inlineCode",{parentName:"p"},"args?"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_interfaces_.findbyargs"}),"FindByArgs"),", ",Object(b.b)("inlineCode",{parentName:"p"},"context?"),": GraphbackContext, ",Object(b.b)("inlineCode",{parentName:"p"},"info?"),": GraphQLResolveInfo, ",Object(b.b)("inlineCode",{parentName:"p"},"path?"),": string): ",Object(b.b)("em",{parentName:"p"},"Promise\u2039",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.resultlist"}),"ResultList"),"\u2039Type\u203a\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b2b3a76/packages/graphback-core/src/runtime/GraphbackCRUDService.ts#L70"}),"packages/graphback-core/src/runtime/GraphbackCRUDService.ts:70"))),Object(b.b)("p",null,"Implementation for reading objects with filtering capabilities"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"args?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_interfaces_.findbyargs"}),"FindByArgs"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"context?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackContext")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"info?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphQLResolveInfo")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"path?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise\u2039",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.resultlist"}),"ResultList"),"\u2039Type\u203a\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"findone"},"findOne"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"findOne"),"(",Object(b.b)("inlineCode",{parentName:"p"},"filter"),": Partial\u2039Type\u203a, ",Object(b.b)("inlineCode",{parentName:"p"},"context?"),": GraphbackContext, ",Object(b.b)("inlineCode",{parentName:"p"},"info?"),": GraphQLResolveInfo): ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b2b3a76/packages/graphback-core/src/runtime/GraphbackCRUDService.ts#L57"}),"packages/graphback-core/src/runtime/GraphbackCRUDService.ts:57"))),Object(b.b)("p",null,"Fetch a single record by its unique attribute(s)"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"filter")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Partial\u2039Type\u203a"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"the unique attributes to fetch the record with")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"context?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackContext"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"context object from GraphQL/REST layer")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"info?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphQLResolveInfo"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"subscribetocreate"},"subscribeToCreate"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"subscribeToCreate"),"(",Object(b.b)("inlineCode",{parentName:"p"},"filter?"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/graphback-core/modules/_runtime_queryfilter_#queryfilter"}),"QueryFilter"),", ",Object(b.b)("inlineCode",{parentName:"p"},"context?"),": GraphbackContext): ",Object(b.b)("em",{parentName:"p"},"AsyncIterator\u2039Type\u203a | undefined")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b2b3a76/packages/graphback-core/src/runtime/GraphbackCRUDService.ts#L78"}),"packages/graphback-core/src/runtime/GraphbackCRUDService.ts:78"))),Object(b.b)("p",null,"Subscription for all creation events"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"filter?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/graphback-core/modules/_runtime_queryfilter_#queryfilter"}),"QueryFilter")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"filter used in subscription")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"context?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackContext"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"additional context")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"AsyncIterator\u2039Type\u203a | undefined")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"subscribetodelete"},"subscribeToDelete"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"subscribeToDelete"),"(",Object(b.b)("inlineCode",{parentName:"p"},"filter?"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/graphback-core/modules/_runtime_queryfilter_#queryfilter"}),"QueryFilter"),", ",Object(b.b)("inlineCode",{parentName:"p"},"context?"),": GraphbackContext): ",Object(b.b)("em",{parentName:"p"},"AsyncIterator\u2039Type\u203a | undefined")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b2b3a76/packages/graphback-core/src/runtime/GraphbackCRUDService.ts#L94"}),"packages/graphback-core/src/runtime/GraphbackCRUDService.ts:94"))),Object(b.b)("p",null,"Subscription for all deletion events"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"filter?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/graphback-core/modules/_runtime_queryfilter_#queryfilter"}),"QueryFilter")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"filter used in subscription")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"context?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackContext"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"additional context")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"AsyncIterator\u2039Type\u203a | undefined")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"subscribetoupdate"},"subscribeToUpdate"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"subscribeToUpdate"),"(",Object(b.b)("inlineCode",{parentName:"p"},"filter?"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/graphback-core/modules/_runtime_queryfilter_#queryfilter"}),"QueryFilter"),", ",Object(b.b)("inlineCode",{parentName:"p"},"context?"),": GraphbackContext): ",Object(b.b)("em",{parentName:"p"},"AsyncIterator\u2039Type\u203a | undefined")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b2b3a76/packages/graphback-core/src/runtime/GraphbackCRUDService.ts#L86"}),"packages/graphback-core/src/runtime/GraphbackCRUDService.ts:86"))),Object(b.b)("p",null,"Subscription for all update events"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"filter?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/graphback-core/modules/_runtime_queryfilter_#queryfilter"}),"QueryFilter")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"filter used in subscription")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"context?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackContext"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"additional context")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"AsyncIterator\u2039Type\u203a | undefined")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"update"},"update"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"update"),"(",Object(b.b)("inlineCode",{parentName:"p"},"data"),": Partial\u2039Type\u203a, ",Object(b.b)("inlineCode",{parentName:"p"},"context?"),": GraphbackContext, ",Object(b.b)("inlineCode",{parentName:"p"},"info?"),": GraphQLResolveInfo): ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b2b3a76/packages/graphback-core/src/runtime/GraphbackCRUDService.ts#L41"}),"packages/graphback-core/src/runtime/GraphbackCRUDService.ts:41"))),Object(b.b)("p",null,"Implementation for object updates"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"data")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Partial\u2039Type\u203a"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"input data including id")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"context?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackContext"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"context object passed from graphql or rest layer")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"info?")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphQLResolveInfo"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")))}o.isMDXComponent=!0}}]);