/*! For license information please see 7e131f3f.ebfcc0e0.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[612],{1315:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),b=p(r),s=n,d=b["".concat(o,".").concat(s)]||b[s]||f[s]||c;return r?a.a.createElement(d,i(i({ref:t},l),{},{components:r})):a.a.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<c;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},1316:function(e,t,r){"use strict";e.exports=r(1317)},1317:function(e,t,r){"use strict";var n=r(1318),a="function"==typeof Symbol&&Symbol.for,c=a?Symbol.for("react.element"):60103,o=a?Symbol.for("react.portal"):60106,i=a?Symbol.for("react.fragment"):60107,u=a?Symbol.for("react.strict_mode"):60108,l=a?Symbol.for("react.profiler"):60114,p=a?Symbol.for("react.provider"):60109,b=a?Symbol.for("react.context"):60110,f=a?Symbol.for("react.forward_ref"):60112,s=a?Symbol.for("react.suspense"):60113,d=a?Symbol.for("react.memo"):60115,m=a?Symbol.for("react.lazy"):60116,O="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function g(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||j}function v(){}function _(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||j}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=g.prototype;var k=_.prototype=new v;k.constructor=_,n(k,g.prototype),k.isPureReactComponent=!0;var N={current:null},w=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var n,a={},o=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(o=""+t.key),t)w.call(t,n)&&!x.hasOwnProperty(n)&&(a[n]=t[n]);var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){for(var l=Array(u),p=0;p<u;p++)l[p]=arguments[p+2];a.children=l}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===a[n]&&(a[n]=u[n]);return{$$typeof:c,type:e,key:o,ref:i,props:a,_owner:N.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var P=/\/+/g,E=[];function D(e,t,r,n){if(E.length){var a=E.pop();return a.result=e,a.keyPrefix=t,a.func=r,a.context=n,a.count=0,a}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function $(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>E.length&&E.push(e)}function T(e,t,r,n){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var i=!1;if(null===e)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case c:case o:i=!0}}if(i)return r(n,e,""===t?"."+I(e,0):t),1;if(i=0,t=""===t?".":t+":",Array.isArray(e))for(var u=0;u<e.length;u++){var l=t+I(a=e[u],u);i+=T(a,l,r,n)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=O&&e[O]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),u=0;!(a=e.next()).done;)i+=T(a=a.value,l=t+I(a,u++),r,n);else if("object"===a)throw r=""+e,Error(h(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return i}function R(e,t,r){return null==e?0:T(e,"",t,r)}function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function M(e,t){e.func.call(e.context,t,e.count++)}function A(e,t,r){var n=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?L(e,n,r,(function(e){return e})):null!=e&&(C(e)&&(e=function(e,t){return{$$typeof:c,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+r)),n.push(e))}function L(e,t,r,n,a){var c="";null!=r&&(c=(""+r).replace(P,"$&/")+"/"),R(e,A,t=D(t,c,n,a)),$(t)}var U={current:null};function G(){var e=U.current;if(null===e)throw Error(h(321));return e}var q={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:N,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return L(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;R(e,M,t=D(null,null,t,r)),$(t)},count:function(e){return R(e,(function(){return null}),null)},toArray:function(e){var t=[];return L(e,t,null,(function(e){return e})),t},only:function(e){if(!C(e))throw Error(h(143));return e}},t.Component=g,t.Fragment=i,t.Profiler=l,t.PureComponent=_,t.StrictMode=u,t.Suspense=s,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,t.cloneElement=function(e,t,r){if(null==e)throw Error(h(267,e));var a=n({},e.props),o=e.key,i=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,u=N.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(p in t)w.call(t,p)&&!x.hasOwnProperty(p)&&(a[p]=void 0===t[p]&&void 0!==l?l[p]:t[p])}var p=arguments.length-2;if(1===p)a.children=r;else if(1<p){l=Array(p);for(var b=0;b<p;b++)l[b]=arguments[b+2];a.children=l}return{$$typeof:c,type:e.type,key:o,ref:i,props:a,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:b,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:p,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:f,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return G().useCallback(e,t)},t.useContext=function(e,t){return G().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return G().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return G().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return G().useLayoutEffect(e,t)},t.useMemo=function(e,t){return G().useMemo(e,t)},t.useReducer=function(e,t,r){return G().useReducer(e,t,r)},t.useRef=function(e){return G().useRef(e)},t.useState=function(e){return G().useState(e)},t.version="16.13.1"},1318:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var r,i,u=o(e),l=1;l<arguments.length;l++){for(var p in r=Object(arguments[l]))a.call(r,p)&&(u[p]=r[p]);if(n){i=n(r);for(var b=0;b<i.length;b++)c.call(r,i[b])&&(u[i[b]]=r[i[b]])}}return u}},667:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),c=(r(1316),r(1315)),o={id:"_runtime_interfaces_",title:"runtime/interfaces",sidebar_label:"runtime/interfaces"},i={unversionedId:"api/graphback-core/modules/_runtime_interfaces_",id:"api/graphback-core/modules/_runtime_interfaces_",isDocsHomePage:!1,title:"runtime/interfaces",description:"Index",source:"@site/../docs/api/graphback-core/modules/_runtime_interfaces_.md",slug:"/api/graphback-core/modules/_runtime_interfaces_",permalink:"/docs/next/api/graphback-core/modules/_runtime_interfaces_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-core/modules/_runtime_interfaces_.md",version:"current",sidebar_label:"runtime/interfaces"},u=[{value:"Index",id:"index",children:[{value:"Interfaces",id:"interfaces",children:[]},{value:"Type aliases",id:"type-aliases",children:[]}]},{value:"Type aliases",id:"type-aliases-1",children:[{value:"DataProviderCreator",id:"dataprovidercreator",children:[]},{value:"ServiceCreator",id:"servicecreator",children:[]},{value:"SortDirection",id:"sortdirection",children:[]}]}],l={rightToc:u};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"interfaces"},"Interfaces"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_interfaces_.findbyargs"}),"FindByArgs")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_interfaces_.graphbackcontext"}),"GraphbackContext")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_interfaces_.graphbackorderby"}),"GraphbackOrderBy")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_interfaces_.graphbackpage"}),"GraphbackPage")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_interfaces_.graphbackserviceconfigmap"}),"GraphbackServiceConfigMap"))),Object(c.b)("h3",{id:"type-aliases"},"Type aliases"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/modules/_runtime_interfaces_#dataprovidercreator"}),"DataProviderCreator")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/modules/_runtime_interfaces_#servicecreator"}),"ServiceCreator")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/modules/_runtime_interfaces_#sortdirection"}),"SortDirection"))),Object(c.b)("h2",{id:"type-aliases-1"},"Type aliases"),Object(c.b)("h3",{id:"dataprovidercreator"},"DataProviderCreator"),Object(c.b)("p",null,"\u01ac ",Object(c.b)("strong",{parentName:"p"},"DataProviderCreator"),": ",Object(c.b)("em",{parentName:"p"},"function")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/05664aa/packages/graphback-core/src/runtime/interfaces.ts#L50"}),"packages/graphback-core/src/runtime/interfaces.ts:50"))),Object(c.b)("p",null,"Creator method that can be used by underlying implementation to create new data service"),Object(c.b)("h4",{id:"type-declaration"},"Type declaration:"),Object(c.b)("p",null,"\u25b8 (",Object(c.b)("inlineCode",{parentName:"p"},"model"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphback-core/modules/_plugin_modeldefinition_#modeldefinition"}),"ModelDefinition"),"): ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_graphbackdataprovider_.graphbackdataprovider"}),"GraphbackDataProvider"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"model")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/graphback-core/modules/_plugin_modeldefinition_#modeldefinition"}),"ModelDefinition"))))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"servicecreator"},"ServiceCreator"),Object(c.b)("p",null,"\u01ac ",Object(c.b)("strong",{parentName:"p"},"ServiceCreator"),": ",Object(c.b)("em",{parentName:"p"},"function")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/05664aa/packages/graphback-core/src/runtime/interfaces.ts#L55"}),"packages/graphback-core/src/runtime/interfaces.ts:55"))),Object(c.b)("p",null,"Creator method that can be used by underlying implementation to create new data service"),Object(c.b)("h4",{id:"type-declaration-1"},"Type declaration:"),Object(c.b)("p",null,"\u25b8 (",Object(c.b)("inlineCode",{parentName:"p"},"model"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphback-core/modules/_plugin_modeldefinition_#modeldefinition"}),"ModelDefinition"),", ",Object(c.b)("inlineCode",{parentName:"p"},"dataProvider"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_graphbackdataprovider_.graphbackdataprovider"}),"GraphbackDataProvider"),"): ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice"}),"GraphbackCRUDService"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"model")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/graphback-core/modules/_plugin_modeldefinition_#modeldefinition"}),"ModelDefinition"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"dataProvider")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_graphbackdataprovider_.graphbackdataprovider"}),"GraphbackDataProvider"))))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"sortdirection"},"SortDirection"),Object(c.b)("p",null,"\u01ac ",Object(c.b)("strong",{parentName:"p"},"SortDirection"),": ",Object(c.b)("em",{parentName:"p"},'"asc" | "desc"')),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/05664aa/packages/graphback-core/src/runtime/interfaces.ts#L28"}),"packages/graphback-core/src/runtime/interfaces.ts:28"))))}p.isMDXComponent=!0}}]);