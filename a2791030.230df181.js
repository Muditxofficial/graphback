/*! For license information please see a2791030.230df181.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[449],{503:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return f}));var r=n(2),o=n(6),a=(n(781),n(780)),i={id:"_index_",title:"index",sidebar_label:"index"},c={unversionedId:"api/graphback-runtime-mongodb/modules/_index_",id:"api/graphback-runtime-mongodb/modules/_index_",isDocsHomePage:!1,title:"index",description:"Index",source:"@site/../docs/api/graphback-runtime-mongodb/modules/_index_.md",permalink:"/docs/next/api/graphback-runtime-mongodb/modules/_index_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-runtime-mongodb/modules/_index_.md",version:"next",sidebar_label:"index"},u=[{value:"Index",id:"index",children:[{value:"References",id:"references",children:[]}]},{value:"References",id:"references-1",children:[{value:"MongoDBDataProvider",id:"mongodbdataprovider",children:[]},{value:"applyIndexes",id:"applyindexes",children:[]},{value:"createMongoDbProvider",id:"createmongodbprovider",children:[]},{value:"findAndCreateIndexes",id:"findandcreateindexes",children:[]},{value:"getCustomIndex",id:"getcustomindex",children:[]},{value:"getIndexFields",id:"getindexfields",children:[]},{value:"getRelationIndex",id:"getrelationindex",children:[]}]}],l={rightToc:u};function f(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"index"},"Index"),Object(a.b)("h3",{id:"references"},"References"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-mongodb/modules/_index_#mongodbdataprovider"}),"MongoDBDataProvider")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-mongodb/modules/_index_#applyindexes"}),"applyIndexes")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-mongodb/modules/_index_#createmongodbprovider"}),"createMongoDbProvider")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-mongodb/modules/_index_#findandcreateindexes"}),"findAndCreateIndexes")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-mongodb/modules/_index_#getcustomindex"}),"getCustomIndex")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-mongodb/modules/_index_#getindexfields"}),"getIndexFields")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-mongodb/modules/_index_#getrelationindex"}),"getRelationIndex"))),Object(a.b)("h2",{id:"references-1"},"References"),Object(a.b)("h3",{id:"mongodbdataprovider"},"MongoDBDataProvider"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"MongoDBDataProvider"),":"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"applyindexes"},"applyIndexes"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"applyIndexes"),":"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"createmongodbprovider"},"createMongoDbProvider"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"createMongoDbProvider"),":"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"findandcreateindexes"},"findAndCreateIndexes"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"findAndCreateIndexes"),":"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"getcustomindex"},"getCustomIndex"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"getCustomIndex"),":"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"getindexfields"},"getIndexFields"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"getIndexFields"),":"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"getrelationindex"},"getRelationIndex"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"getRelationIndex"),":"))}f.isMDXComponent=!0},780:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),f=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=f(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=f(n),s=r,b=d["".concat(i,".").concat(s)]||d[s]||p[s]||a;return n?o.a.createElement(b,c(c({ref:t},l),{},{components:n})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=s;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},781:function(e,t,n){"use strict";e.exports=n(782)},782:function(e,t,n){"use strict";var r=n(783),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,d=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,s=o?Symbol.for("react.suspense"):60113,b=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116,y="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function v(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||h}function j(){}function x(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=v.prototype;var _=x.prototype=new j;_.constructor=x,r(_,v.prototype),_.isPureReactComponent=!0;var w={current:null},k=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,n){var r,o={},i=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)k.call(t,r)&&!P.hasOwnProperty(r)&&(o[r]=t[r]);var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){for(var l=Array(u),f=0;f<u;f++)l[f]=arguments[f+2];o.children=l}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===o[r]&&(o[r]=u[r]);return{$$typeof:a,type:e,key:i,ref:c,props:o,_owner:w.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var I=/\/+/g,E=[];function N(e,t,n,r){if(E.length){var o=E.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>E.length&&E.push(e)}function D(e,t,n){return null==e?0:function e(t,n,r,o){var c=typeof t;"undefined"!==c&&"boolean"!==c||(t=null);var u=!1;if(null===t)u=!0;else switch(c){case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case a:case i:u=!0}}if(u)return r(o,t,""===n?"."+$(t,0):n),1;if(u=0,n=""===n?".":n+":",Array.isArray(t))for(var l=0;l<t.length;l++){var f=n+$(c=t[l],l);u+=e(c,f,r,o)}else if(null===t||"object"!=typeof t?f=null:f="function"==typeof(f=y&&t[y]||t["@@iterator"])?f:null,"function"==typeof f)for(t=f.call(t),l=0;!(c=t.next()).done;)u+=e(c=c.value,f=n+$(c,l++),r,o);else if("object"===c)throw r=""+t,Error(g(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return u}(e,"",t,n)}function $(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function M(e,t){e.func.call(e.context,t,e.count++)}function A(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?T(e,r,n,(function(e){return e})):null!=e&&(C(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(I,"$&/")+"/")+n)),r.push(e))}function T(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(I,"$&/")+"/"),D(e,A,t=N(t,a,r,o)),R(t)}var F={current:null};function U(){var e=F.current;if(null===e)throw Error(g(321));return e}var q={ReactCurrentDispatcher:F,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:w,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return T(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;D(e,M,t=N(null,null,t,n)),R(t)},count:function(e){return D(e,(function(){return null}),null)},toArray:function(e){var t=[];return T(e,t,null,(function(e){return e})),t},only:function(e){if(!C(e))throw Error(g(143));return e}},t.Component=v,t.Fragment=c,t.Profiler=l,t.PureComponent=x,t.StrictMode=u,t.Suspense=s,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,t.cloneElement=function(e,t,n){if(null==e)throw Error(g(267,e));var o=r({},e.props),i=e.key,c=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,u=w.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(f in t)k.call(t,f)&&!P.hasOwnProperty(f)&&(o[f]=void 0===t[f]&&void 0!==l?l[f]:t[f])}var f=arguments.length-2;if(1===f)o.children=n;else if(1<f){l=Array(f);for(var d=0;d<f;d++)l[d]=arguments[d+2];o.children=l}return{$$typeof:a,type:e.type,key:i,ref:c,props:o,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:d,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return U().useCallback(e,t)},t.useContext=function(e,t){return U().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return U().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return U().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return U().useLayoutEffect(e,t)},t.useMemo=function(e,t){return U().useMemo(e,t)},t.useReducer=function(e,t,n){return U().useReducer(e,t,n)},t.useRef=function(e){return U().useRef(e)},t.useState=function(e){return U().useState(e)},t.version="16.13.1"},783:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,c,u=i(e),l=1;l<arguments.length;l++){for(var f in n=Object(arguments[l]))o.call(n,f)&&(u[f]=n[f]);if(r){c=r(n);for(var d=0;d<c.length;d++)a.call(n,c[d])&&(u[c[d]]=n[c[d]])}}return u}}}]);