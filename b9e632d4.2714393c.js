/*! For license information please see b9e632d4.2714393c.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[931],{1329:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return y}));var n=r(0),c=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var l=c.a.createContext({}),f=function(e){var t=c.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=f(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},b=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=f(r),b=n,y=p["".concat(a,".").concat(b)]||p[b]||s[b]||o;return r?c.a.createElement(y,u(u({ref:t},l),{},{components:r})):c.a.createElement(y,u({ref:t},l))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=b;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,a[1]=u;for(var l=2;l<o;l++)a[l]=r[l];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},1330:function(e,t,r){"use strict";e.exports=r(1331)},1331:function(e,t,r){"use strict";var n=r(1332),c="function"==typeof Symbol&&Symbol.for,o=c?Symbol.for("react.element"):60103,a=c?Symbol.for("react.portal"):60106,u=c?Symbol.for("react.fragment"):60107,i=c?Symbol.for("react.strict_mode"):60108,l=c?Symbol.for("react.profiler"):60114,f=c?Symbol.for("react.provider"):60109,p=c?Symbol.for("react.context"):60110,s=c?Symbol.for("react.forward_ref"):60112,b=c?Symbol.for("react.suspense"):60113,y=c?Symbol.for("react.memo"):60115,d=c?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function O(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||k}function g(){}function j(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||k}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=O.prototype;var S=j.prototype=new g;S.constructor=j,n(S,O.prototype),S.isPureReactComponent=!0;var _={current:null},C=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,r){var n,c={},a=null,u=null;if(null!=t)for(n in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(a=""+t.key),t)C.call(t,n)&&!w.hasOwnProperty(n)&&(c[n]=t[n]);var i=arguments.length-2;if(1===i)c.children=r;else if(1<i){for(var l=Array(i),f=0;f<i;f++)l[f]=arguments[f+2];c.children=l}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===c[n]&&(c[n]=i[n]);return{$$typeof:o,type:e,key:a,ref:u,props:c,_owner:_.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g,E=[];function R(e,t,r,n){if(E.length){var c=E.pop();return c.result=e,c.keyPrefix=t,c.func=r,c.context=n,c.count=0,c}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function D(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>E.length&&E.push(e)}function $(e,t,r,n){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var u=!1;if(null===e)u=!0;else switch(c){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case a:u=!0}}if(u)return r(n,e,""===t?"."+T(e,0):t),1;if(u=0,t=""===t?".":t+":",Array.isArray(e))for(var i=0;i<e.length;i++){var l=t+T(c=e[i],i);u+=$(c,l,r,n)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=m&&e[m]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),i=0;!(c=e.next()).done;)u+=$(c=c.value,l=t+T(c,i++),r,n);else if("object"===c)throw r=""+e,Error(h(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return u}function U(e,t,r){return null==e?0:$(e,"",t,r)}function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function z(e,t){e.func.call(e.context,t,e.count++)}function A(e,t,r){var n=e.result,c=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?I(e,n,r,(function(e){return e})):null!=e&&(N(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,c+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+r)),n.push(e))}function I(e,t,r,n,c){var o="";null!=r&&(o=(""+r).replace(P,"$&/")+"/"),U(e,A,t=R(t,o,n,c)),D(t)}var K={current:null};function F(){var e=K.current;if(null===e)throw Error(h(321));return e}var L={ReactCurrentDispatcher:K,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return I(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;U(e,z,t=R(null,null,t,r)),D(t)},count:function(e){return U(e,(function(){return null}),null)},toArray:function(e){var t=[];return I(e,t,null,(function(e){return e})),t},only:function(e){if(!N(e))throw Error(h(143));return e}},t.Component=O,t.Fragment=u,t.Profiler=l,t.PureComponent=j,t.StrictMode=i,t.Suspense=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,t.cloneElement=function(e,t,r){if(null==e)throw Error(h(267,e));var c=n({},e.props),a=e.key,u=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,i=_.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(f in t)C.call(t,f)&&!w.hasOwnProperty(f)&&(c[f]=void 0===t[f]&&void 0!==l?l[f]:t[f])}var f=arguments.length-2;if(1===f)c.children=r;else if(1<f){l=Array(f);for(var p=0;p<f;p++)l[p]=arguments[p+2];c.children=l}return{$$typeof:o,type:e.type,key:a,ref:u,props:c,_owner:i}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=N,t.lazy=function(e){return{$$typeof:d,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return F().useCallback(e,t)},t.useContext=function(e,t){return F().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return F().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return F().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return F().useLayoutEffect(e,t)},t.useMemo=function(e,t){return F().useMemo(e,t)},t.useReducer=function(e,t,r){return F().useReducer(e,t,r)},t.useRef=function(e){return F().useRef(e)},t.useState=function(e){return F().useState(e)},t.version="16.14.0"},1332:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(c){return!1}}()?Object.assign:function(e,t){for(var r,u,i=a(e),l=1;l<arguments.length;l++){for(var f in r=Object(arguments[l]))c.call(r,f)&&(i[f]=r[f]);if(n){u=n(r);for(var p=0;p<u.length;p++)o.call(r,u[p])&&(i[u[p]]=r[u[p]])}}return i}},999:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return f}));var n=r(3),c=r(7),o=(r(1330),r(1329)),a={id:"_createkeycloakcrudservice_",title:"createKeycloakCRUDService",sidebar_label:"createKeycloakCRUDService"},u={unversionedId:"api/graphback-keycloak-authz/modules/_createkeycloakcrudservice_",id:"api/graphback-keycloak-authz/modules/_createkeycloakcrudservice_",isDocsHomePage:!1,title:"createKeycloakCRUDService",description:"Index",source:"@site/../docs/api/graphback-keycloak-authz/modules/_createkeycloakcrudservice_.md",slug:"/api/graphback-keycloak-authz/modules/_createkeycloakcrudservice_",permalink:"/docs/next/api/graphback-keycloak-authz/modules/_createkeycloakcrudservice_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-keycloak-authz/modules/_createkeycloakcrudservice_.md",version:"current",sidebar_label:"createKeycloakCRUDService",sidebar:"docs",previous:{title:"KeycloakCrudService",permalink:"/docs/next/api/graphback-keycloak-authz/classes/_keycloakcrudservice_.keycloakcrudservice"},next:{title:"KeycloakConfig",permalink:"/docs/next/api/graphback-keycloak-authz/modules/_keycloakconfig_"}},i=[{value:"Index",id:"index",children:[{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"createKeycloakCRUDService",id:"createkeycloakcrudservice",children:[]}]}],l={rightToc:i};function f(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"index"},"Index"),Object(o.b)("h3",{id:"functions"},"Functions"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-keycloak-authz/modules/_createkeycloakcrudservice_#createkeycloakcrudservice"}),"createKeycloakCRUDService"))),Object(o.b)("h2",{id:"functions-1"},"Functions"),Object(o.b)("h3",{id:"createkeycloakcrudservice"},"createKeycloakCRUDService"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("strong",{parentName:"p"},"createKeycloakCRUDService"),"(",Object(o.b)("inlineCode",{parentName:"p"},"authConfigList"),": ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphback-keycloak-authz/modules/_keycloakconfig_#crudservicesauthconfig"}),"CrudServicesAuthConfig"),", ",Object(o.b)("inlineCode",{parentName:"p"},"serviceCreator"),": ServiceCreator): ",Object(o.b)("em",{parentName:"p"},"(Anonymous function)")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/5353fa2/packages/graphback-keycloak-authz/src/createKeycloakCRUDService.ts#L12"}),"packages/graphback-keycloak-authz/src/createKeycloakCRUDService.ts:12"))),Object(o.b)("p",null,"Creates a new KeycloakCrudService by wrapping original service.\nThis method can work with both CRUDService (default) and DataSyncService"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters:")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"authConfigList")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/graphback-keycloak-authz/modules/_keycloakconfig_#crudservicesauthconfig"}),"CrudServicesAuthConfig")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"serviceCreator")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ServiceCreator"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function that creates wrapper service")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("em",{parentName:"p"},"(Anonymous function)")))}f.isMDXComponent=!0}}]);