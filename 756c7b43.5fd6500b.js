/*! For license information please see 756c7b43.5fd6500b.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[580],{1329:function(e,r,t){"use strict";t.d(r,"a",(function(){return i})),t.d(r,"b",(function(){return m}));var a=t(0),n=t.n(a);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function b(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?b(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=n.a.createContext({}),s=function(e){var r=n.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},i=function(e){var r=s(e.components);return n.a.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},h=n.a.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,b=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),i=s(t),h=a,m=i["".concat(b,".").concat(h)]||i[h]||u[h]||c;return t?n.a.createElement(m,p(p({ref:r},l),{},{components:t})):n.a.createElement(m,p({ref:r},l))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=t.length,b=new Array(c);b[0]=h;var p={};for(var o in r)hasOwnProperty.call(r,o)&&(p[o]=r[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,b[1]=p;for(var l=2;l<c;l++)b[l]=t[l];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},1330:function(e,r,t){"use strict";e.exports=t(1331)},1331:function(e,r,t){"use strict";var a=t(1332),n="function"==typeof Symbol&&Symbol.for,c=n?Symbol.for("react.element"):60103,b=n?Symbol.for("react.portal"):60106,p=n?Symbol.for("react.fragment"):60107,o=n?Symbol.for("react.strict_mode"):60108,l=n?Symbol.for("react.profiler"):60114,s=n?Symbol.for("react.provider"):60109,i=n?Symbol.for("react.context"):60110,u=n?Symbol.for("react.forward_ref"):60112,h=n?Symbol.for("react.suspense"):60113,m=n?Symbol.for("react.memo"):60115,d=n?Symbol.for("react.lazy"):60116,O="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function v(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||j}function y(){}function N(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||j}v.prototype.isReactComponent={},v.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,r,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var k=N.prototype=new y;k.constructor=N,a(k,v.prototype),k.isPureReactComponent=!0;var S={current:null},_=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function w(e,r,t){var a,n={},b=null,p=null;if(null!=r)for(a in void 0!==r.ref&&(p=r.ref),void 0!==r.key&&(b=""+r.key),r)_.call(r,a)&&!P.hasOwnProperty(a)&&(n[a]=r[a]);var o=arguments.length-2;if(1===o)n.children=t;else if(1<o){for(var l=Array(o),s=0;s<o;s++)l[s]=arguments[s+2];n.children=l}if(e&&e.defaultProps)for(a in o=e.defaultProps)void 0===n[a]&&(n[a]=o[a]);return{$$typeof:c,type:e,key:b,ref:p,props:n,_owner:S.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var q=/\/+/g,x=[];function E(e,r,t,a){if(x.length){var n=x.pop();return n.result=e,n.keyPrefix=r,n.func=t,n.context=a,n.count=0,n}return{result:e,keyPrefix:r,func:t,context:a,count:0}}function G(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>x.length&&x.push(e)}function R(e,r,t,a){var n=typeof e;"undefined"!==n&&"boolean"!==n||(e=null);var p=!1;if(null===e)p=!0;else switch(n){case"string":case"number":p=!0;break;case"object":switch(e.$$typeof){case c:case b:p=!0}}if(p)return t(a,e,""===r?"."+$(e,0):r),1;if(p=0,r=""===r?".":r+":",Array.isArray(e))for(var o=0;o<e.length;o++){var l=r+$(n=e[o],o);p+=R(n,l,t,a)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=O&&e[O]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),o=0;!(n=e.next()).done;)p+=R(n=n.value,l=r+$(n,o++),t,a);else if("object"===n)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t,""));return p}function D(e,r,t){return null==e?0:R(e,"",r,t)}function $(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return r[e]}))}(e.key):r.toString(36)}function L(e,r){e.func.call(e.context,r,e.count++)}function M(e,r,t){var a=e.result,n=e.keyPrefix;e=e.func.call(e.context,r,e.count++),Array.isArray(e)?T(e,a,t,(function(e){return e})):null!=e&&(C(e)&&(e=function(e,r){return{$$typeof:c,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(e,n+(!e.key||r&&r.key===e.key?"":(""+e.key).replace(q,"$&/")+"/")+t)),a.push(e))}function T(e,r,t,a,n){var c="";null!=t&&(c=(""+t).replace(q,"$&/")+"/"),D(e,M,r=E(r,c,a,n)),G(r)}var U={current:null};function H(){var e=U.current;if(null===e)throw Error(f(321));return e}var I={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:S,IsSomeRendererActing:{current:!1},assign:a};r.Children={map:function(e,r,t){if(null==e)return e;var a=[];return T(e,a,null,r,t),a},forEach:function(e,r,t){if(null==e)return e;D(e,L,r=E(null,null,r,t)),G(r)},count:function(e){return D(e,(function(){return null}),null)},toArray:function(e){var r=[];return T(e,r,null,(function(e){return e})),r},only:function(e){if(!C(e))throw Error(f(143));return e}},r.Component=v,r.Fragment=p,r.Profiler=l,r.PureComponent=N,r.StrictMode=o,r.Suspense=h,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,r.cloneElement=function(e,r,t){if(null==e)throw Error(f(267,e));var n=a({},e.props),b=e.key,p=e.ref,o=e._owner;if(null!=r){if(void 0!==r.ref&&(p=r.ref,o=S.current),void 0!==r.key&&(b=""+r.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in r)_.call(r,s)&&!P.hasOwnProperty(s)&&(n[s]=void 0===r[s]&&void 0!==l?l[s]:r[s])}var s=arguments.length-2;if(1===s)n.children=t;else if(1<s){l=Array(s);for(var i=0;i<s;i++)l[i]=arguments[i+2];n.children=l}return{$$typeof:c,type:e.type,key:b,ref:p,props:n,_owner:o}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:i,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},r.createElement=w,r.createFactory=function(e){var r=w.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:u,render:e}},r.isValidElement=C,r.lazy=function(e){return{$$typeof:d,_ctor:e,_status:-1,_result:null}},r.memo=function(e,r){return{$$typeof:m,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return H().useCallback(e,r)},r.useContext=function(e,r){return H().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return H().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return H().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return H().useLayoutEffect(e,r)},r.useMemo=function(e,r){return H().useMemo(e,r)},r.useReducer=function(e,r,t){return H().useReducer(e,r,t)},r.useRef=function(e){return H().useRef(e)},r.useState=function(e){return H().useState(e)},r.version="16.14.0"},1332:function(e,r,t){"use strict";var a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function b(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(n){return!1}}()?Object.assign:function(e,r){for(var t,p,o=b(e),l=1;l<arguments.length;l++){for(var s in t=Object(arguments[l]))n.call(t,s)&&(o[s]=t[s]);if(a){p=a(t);for(var i=0;i<p.length;i++)c.call(t,p[i])&&(o[p[i]]=t[p[i]])}}return o}},649:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return b})),t.d(r,"metadata",(function(){return p})),t.d(r,"rightToc",(function(){return o})),t.d(r,"default",(function(){return s}));var a=t(3),n=t(7),c=(t(1330),t(1329)),b={id:"_graphbackserver_.graphbackserver",title:"GraphbackServer",sidebar_label:"GraphbackServer"},p={unversionedId:"api/graphql-serve/classes/_graphbackserver_.graphbackserver",id:"api/graphql-serve/classes/_graphbackserver_.graphbackserver",isDocsHomePage:!1,title:"GraphbackServer",description:"Hierarchy",source:"@site/../docs/api/graphql-serve/classes/_graphbackserver_.graphbackserver.md",slug:"/api/graphql-serve/classes/_graphbackserver_.graphbackserver",permalink:"/docs/next/api/graphql-serve/classes/_graphbackserver_.graphbackserver",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphql-serve/classes/_graphbackserver_.graphbackserver.md",version:"current",sidebar_label:"GraphbackServer"},o=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Constructors",id:"constructors",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Methods",id:"methods",children:[]}]},{value:"Constructors",id:"constructors-1",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"<code>Protected</code> db",id:"protected-db",children:[]},{value:"<code>Protected</code> <code>Readonly</code> graphqlSchema",id:"protected-readonly-graphqlschema",children:[]},{value:"<code>Protected</code> <code>Readonly</code> httpServer",id:"protected-readonly-httpserver",children:[]},{value:"<code>Protected</code> <code>Optional</code> serverPort",id:"protected-optional-serverport",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"getDb",id:"getdb",children:[]},{value:"getHttpPort",id:"gethttpport",children:[]},{value:"getHttpUrl",id:"gethttpurl",children:[]},{value:"getSchema",id:"getschema",children:[]},{value:"getWsUrl",id:"getwsurl",children:[]},{value:"start",id:"start",children:[]},{value:"stop",id:"stop",children:[]}]}],l={rightToc:o};function s(e){var r=e.components,t=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"GraphbackServer"))),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"constructors"},"Constructors"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphql-serve/classes/_graphbackserver_.graphbackserver#constructor"}),"constructor"))),Object(c.b)("h3",{id:"properties"},"Properties"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphql-serve/classes/_graphbackserver_.graphbackserver#protected-db"}),"db")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphql-serve/classes/_graphbackserver_.graphbackserver#protected-readonly-graphqlschema"}),"graphqlSchema")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphql-serve/classes/_graphbackserver_.graphbackserver#protected-readonly-httpserver"}),"httpServer")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphql-serve/classes/_graphbackserver_.graphbackserver#protected-optional-serverport"}),"serverPort"))),Object(c.b)("h3",{id:"methods"},"Methods"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphql-serve/classes/_graphbackserver_.graphbackserver#getdb"}),"getDb")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphql-serve/classes/_graphbackserver_.graphbackserver#gethttpport"}),"getHttpPort")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphql-serve/classes/_graphbackserver_.graphbackserver#gethttpurl"}),"getHttpUrl")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphql-serve/classes/_graphbackserver_.graphbackserver#getschema"}),"getSchema")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphql-serve/classes/_graphbackserver_.graphbackserver#getwsurl"}),"getWsUrl")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphql-serve/classes/_graphbackserver_.graphbackserver#start"}),"start")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphql-serve/classes/_graphbackserver_.graphbackserver#stop"}),"stop"))),Object(c.b)("h2",{id:"constructors-1"},"Constructors"),Object(c.b)("h3",{id:"constructor"},"constructor"),Object(c.b)("p",null,"+"," ",Object(c.b)("strong",{parentName:"p"},"new GraphbackServer"),"(",Object(c.b)("inlineCode",{parentName:"p"},"httpServer"),": Server, ",Object(c.b)("inlineCode",{parentName:"p"},"graphqlSchema"),": string, ",Object(c.b)("inlineCode",{parentName:"p"},"dbClient"),": MongoClient): ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/next/api/graphql-serve/classes/_graphbackserver_.graphbackserver"}),"GraphbackServer"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/5353fa2/packages/graphql-serve/src/GraphbackServer.ts#L23"}),"GraphbackServer.ts:23"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"httpServer")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Server")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"graphqlSchema")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"dbClient")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"MongoClient")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/next/api/graphql-serve/classes/_graphbackserver_.graphbackserver"}),"GraphbackServer"))),Object(c.b)("h2",{id:"properties-1"},"Properties"),Object(c.b)("h3",{id:"protected-db"},Object(c.b)("inlineCode",{parentName:"h3"},"Protected")," db"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"db"),": ",Object(c.b)("em",{parentName:"p"},"MongoClient")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/5353fa2/packages/graphql-serve/src/GraphbackServer.ts#L22"}),"GraphbackServer.ts:22"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"protected-readonly-graphqlschema"},Object(c.b)("inlineCode",{parentName:"h3"},"Protected")," ",Object(c.b)("inlineCode",{parentName:"h3"},"Readonly")," graphqlSchema"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"graphqlSchema"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/5353fa2/packages/graphql-serve/src/GraphbackServer.ts#L20"}),"GraphbackServer.ts:20"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"protected-readonly-httpserver"},Object(c.b)("inlineCode",{parentName:"h3"},"Protected")," ",Object(c.b)("inlineCode",{parentName:"h3"},"Readonly")," httpServer"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"httpServer"),": ",Object(c.b)("em",{parentName:"p"},"Server")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/5353fa2/packages/graphql-serve/src/GraphbackServer.ts#L21"}),"GraphbackServer.ts:21"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"protected-optional-serverport"},Object(c.b)("inlineCode",{parentName:"h3"},"Protected")," ",Object(c.b)("inlineCode",{parentName:"h3"},"Optional")," serverPort"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"serverPort"),"? : ",Object(c.b)("em",{parentName:"p"},"number")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/5353fa2/packages/graphql-serve/src/GraphbackServer.ts#L23"}),"GraphbackServer.ts:23"))),Object(c.b)("h2",{id:"methods-1"},"Methods"),Object(c.b)("h3",{id:"getdb"},"getDb"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"getDb"),"(): ",Object(c.b)("em",{parentName:"p"},"MongoClient")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/5353fa2/packages/graphql-serve/src/GraphbackServer.ts#L70"}),"GraphbackServer.ts:70"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"MongoClient")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"gethttpport"},"getHttpPort"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"getHttpPort"),"(): ",Object(c.b)("em",{parentName:"p"},"number")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/5353fa2/packages/graphql-serve/src/GraphbackServer.ts#L84"}),"GraphbackServer.ts:84"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"number")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"gethttpurl"},"getHttpUrl"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"getHttpUrl"),"(): ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/5353fa2/packages/graphql-serve/src/GraphbackServer.ts#L74"}),"GraphbackServer.ts:74"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"getschema"},"getSchema"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"getSchema"),"(): ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/5353fa2/packages/graphql-serve/src/GraphbackServer.ts#L98"}),"GraphbackServer.ts:98"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"getwsurl"},"getWsUrl"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"getWsUrl"),"(): ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/5353fa2/packages/graphql-serve/src/GraphbackServer.ts#L88"}),"GraphbackServer.ts:88"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"start"},"start"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"start"),"(",Object(c.b)("inlineCode",{parentName:"p"},"port?"),": number): ",Object(c.b)("em",{parentName:"p"},"Promise\u2039void\u203a")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/5353fa2/packages/graphql-serve/src/GraphbackServer.ts#L31"}),"GraphbackServer.ts:31"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"port?")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise\u2039void\u203a")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"stop"},"stop"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"stop"),"(): ",Object(c.b)("em",{parentName:"p"},"Promise\u2039void\u203a")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/5353fa2/packages/graphql-serve/src/GraphbackServer.ts#L52"}),"GraphbackServer.ts:52"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise\u2039void\u203a")))}s.isMDXComponent=!0}}]);