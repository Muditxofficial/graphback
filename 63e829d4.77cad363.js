/*! For license information please see 63e829d4.77cad363.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[503],{1329:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),b=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=b(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=b(r),f=n,d=p["".concat(o,".").concat(f)]||p[f]||s[f]||c;return r?a.a.createElement(d,u(u({ref:t},i),{},{components:r})):a.a.createElement(d,u({ref:t},i))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=f;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:n,o[1]=u;for(var i=2;i<c;i++)o[i]=r[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1330:function(e,t,r){"use strict";e.exports=r(1331)},1331:function(e,t,r){"use strict";var n=r(1332),a="function"==typeof Symbol&&Symbol.for,c=a?Symbol.for("react.element"):60103,o=a?Symbol.for("react.portal"):60106,u=a?Symbol.for("react.fragment"):60107,l=a?Symbol.for("react.strict_mode"):60108,i=a?Symbol.for("react.profiler"):60114,b=a?Symbol.for("react.provider"):60109,p=a?Symbol.for("react.context"):60110,s=a?Symbol.for("react.forward_ref"):60112,f=a?Symbol.for("react.suspense"):60113,d=a?Symbol.for("react.memo"):60115,h=a?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function O(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function g(e,t,r){this.props=e,this.context=t,this.refs=j,this.updater=r||y}function k(){}function v(e,t,r){this.props=e,this.context=t,this.refs=j,this.updater=r||y}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(O(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=g.prototype;var N=v.prototype=new k;N.constructor=v,n(N,g.prototype),N.isPureReactComponent=!0;var C={current:null},_=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,r){var n,a={},o=null,u=null;if(null!=t)for(n in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(o=""+t.key),t)_.call(t,n)&&!w.hasOwnProperty(n)&&(a[n]=t[n]);var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){for(var i=Array(l),b=0;b<l;b++)i[b]=arguments[b+2];a.children=i}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===a[n]&&(a[n]=l[n]);return{$$typeof:c,type:e,key:o,ref:u,props:a,_owner:C.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var E=/\/+/g,P=[];function R(e,t,r,n){if(P.length){var a=P.pop();return a.result=e,a.keyPrefix=t,a.func=r,a.context=n,a.count=0,a}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function z(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>P.length&&P.push(e)}function A(e,t,r,n){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var u=!1;if(null===e)u=!0;else switch(a){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case c:case o:u=!0}}if(u)return r(n,e,""===t?"."+F(e,0):t),1;if(u=0,t=""===t?".":t+":",Array.isArray(e))for(var l=0;l<e.length;l++){var i=t+F(a=e[l],l);u+=A(a,i,r,n)}else if(null===e||"object"!=typeof e?i=null:i="function"==typeof(i=m&&e[m]||e["@@iterator"])?i:null,"function"==typeof i)for(e=i.call(e),l=0;!(a=e.next()).done;)u+=A(a=a.value,i=t+F(a,l++),r,n);else if("object"===a)throw r=""+e,Error(O(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return u}function $(e,t,r){return null==e?0:A(e,"",t,r)}function F(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function I(e,t){e.func.call(e.context,t,e.count++)}function T(e,t,r){var n=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?D(e,n,r,(function(e){return e})):null!=e&&(S(e)&&(e=function(e,t){return{$$typeof:c,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+r)),n.push(e))}function D(e,t,r,n,a){var c="";null!=r&&(c=(""+r).replace(E,"$&/")+"/"),$(e,T,t=R(t,c,n,a)),z(t)}var L={current:null};function M(){var e=L.current;if(null===e)throw Error(O(321));return e}var U={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:C,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return D(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;$(e,I,t=R(null,null,t,r)),z(t)},count:function(e){return $(e,(function(){return null}),null)},toArray:function(e){var t=[];return D(e,t,null,(function(e){return e})),t},only:function(e){if(!S(e))throw Error(O(143));return e}},t.Component=g,t.Fragment=u,t.Profiler=i,t.PureComponent=v,t.StrictMode=l,t.Suspense=f,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,t.cloneElement=function(e,t,r){if(null==e)throw Error(O(267,e));var a=n({},e.props),o=e.key,u=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,l=C.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(b in t)_.call(t,b)&&!w.hasOwnProperty(b)&&(a[b]=void 0===t[b]&&void 0!==i?i[b]:t[b])}var b=arguments.length-2;if(1===b)a.children=r;else if(1<b){i=Array(b);for(var p=0;p<b;p++)i[p]=arguments[p+2];a.children=i}return{$$typeof:c,type:e.type,key:o,ref:u,props:a,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:b,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:h,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return M().useCallback(e,t)},t.useContext=function(e,t){return M().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return M().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return M().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return M().useLayoutEffect(e,t)},t.useMemo=function(e,t){return M().useMemo(e,t)},t.useReducer=function(e,t,r){return M().useReducer(e,t,r)},t.useRef=function(e){return M().useRef(e)},t.useState=function(e){return M().useState(e)},t.version="16.14.0"},1332:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var r,u,l=o(e),i=1;i<arguments.length;i++){for(var b in r=Object(arguments[i]))a.call(r,b)&&(l[b]=r[b]);if(n){u=n(r);for(var p=0;p<u.length;p++)c.call(r,u[p])&&(l[u[p]]=r[u[p]])}}return l}},571:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),c=(r(1330),r(1329)),o={id:"_utils_",title:"utils",sidebar_label:"utils"},u={unversionedId:"api/graphback-keycloak-authz/modules/_utils_",id:"api/graphback-keycloak-authz/modules/_utils_",isDocsHomePage:!1,title:"utils",description:"Index",source:"@site/../docs/api/graphback-keycloak-authz/modules/_utils_.md",slug:"/api/graphback-keycloak-authz/modules/_utils_",permalink:"/docs/next/api/graphback-keycloak-authz/modules/_utils_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-keycloak-authz/modules/_utils_.md",version:"current",sidebar_label:"utils"},l=[{value:"Index",id:"index",children:[{value:"Classes",id:"classes",children:[]},{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"checkAuthRulesForInput",id:"checkauthrulesforinput",children:[]},{value:"checkAuthRulesForSelections",id:"checkauthrulesforselections",children:[]},{value:"getEmptyServiceConfig",id:"getemptyserviceconfig",children:[]}]}],i={rightToc:l};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"classes"},"Classes"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-keycloak-authz/classes/_utils_.unauthorizederror"}),"UnauthorizedError"))),Object(c.b)("h3",{id:"functions"},"Functions"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-keycloak-authz/modules/_utils_#checkauthrulesforinput"}),"checkAuthRulesForInput")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-keycloak-authz/modules/_utils_#checkauthrulesforselections"}),"checkAuthRulesForSelections")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-keycloak-authz/modules/_utils_#getemptyserviceconfig"}),"getEmptyServiceConfig"))),Object(c.b)("h2",{id:"functions-1"},"Functions"),Object(c.b)("h3",{id:"checkauthrulesforinput"},"checkAuthRulesForInput"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"checkAuthRulesForInput"),"(",Object(c.b)("inlineCode",{parentName:"p"},"context"),": GraphbackContext, ",Object(c.b)("inlineCode",{parentName:"p"},"authConfig"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphback-keycloak-authz/modules/_keycloakconfig_#crudserviceauthconfig"}),"CrudServiceAuthConfig"),", ",Object(c.b)("inlineCode",{parentName:"p"},"inputKeys"),": string[]): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/5353fa2/packages/graphback-keycloak-authz/src/utils.ts#L20"}),"packages/graphback-keycloak-authz/src/utils.ts:20"))),Object(c.b)("p",null,"Checks if user is allowed to create/update particular field"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"context")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GraphbackContext")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"authConfig")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/graphback-keycloak-authz/modules/_keycloakconfig_#crudserviceauthconfig"}),"CrudServiceAuthConfig"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"inputKeys")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string[]")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"checkauthrulesforselections"},"checkAuthRulesForSelections"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"checkAuthRulesForSelections"),"(",Object(c.b)("inlineCode",{parentName:"p"},"context"),": GraphbackContext, ",Object(c.b)("inlineCode",{parentName:"p"},"authConfig"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphback-keycloak-authz/modules/_keycloakconfig_#crudserviceauthconfig"}),"CrudServiceAuthConfig"),", ",Object(c.b)("inlineCode",{parentName:"p"},"selectedFields?"),": string[]): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/5353fa2/packages/graphback-keycloak-authz/src/utils.ts#L36"}),"packages/graphback-keycloak-authz/src/utils.ts:36"))),Object(c.b)("p",null,"Checks if user is allowed to request particular field"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"context")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GraphbackContext")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"authConfig")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/graphback-keycloak-authz/modules/_keycloakconfig_#crudserviceauthconfig"}),"CrudServiceAuthConfig"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"selectedFields?")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string[]")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"getemptyserviceconfig"},"getEmptyServiceConfig"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"getEmptyServiceConfig"),"(): ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphback-keycloak-authz/modules/_keycloakconfig_#crudserviceauthconfig"}),"CrudServiceAuthConfig"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/5353fa2/packages/graphback-keycloak-authz/src/utils.ts#L8"}),"packages/graphback-keycloak-authz/src/utils.ts:8"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphback-keycloak-authz/modules/_keycloakconfig_#crudserviceauthconfig"}),"CrudServiceAuthConfig"))))}b.isMDXComponent=!0}}]);