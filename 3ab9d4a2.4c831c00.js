/*! For license information please see 3ab9d4a2.4c831c00.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[293],{1315:function(e,r,t){"use strict";t.d(r,"a",(function(){return f})),t.d(r,"b",(function(){return m}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var r=a.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},f=function(e){var r=u(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=u(t),b=n,m=f["".concat(i,".").concat(b)]||f[b]||s[b]||o;return t?a.a.createElement(m,c(c({ref:r},l),{},{components:t})):a.a.createElement(m,c({ref:r},l))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=b;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},1316:function(e,r,t){"use strict";e.exports=t(1317)},1317:function(e,r,t){"use strict";var n=t(1318),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,i=a?Symbol.for("react.portal"):60106,c=a?Symbol.for("react.fragment"):60107,p=a?Symbol.for("react.strict_mode"):60108,l=a?Symbol.for("react.profiler"):60114,u=a?Symbol.for("react.provider"):60109,f=a?Symbol.for("react.context"):60110,s=a?Symbol.for("react.forward_ref"):60112,b=a?Symbol.for("react.suspense"):60113,m=a?Symbol.for("react.memo"):60115,y=a?Symbol.for("react.lazy"):60116,d="function"==typeof Symbol&&Symbol.iterator;function O(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function j(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||h}function v(){}function _(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||h}j.prototype.isReactComponent={},j.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(O(85));this.updater.enqueueSetState(this,e,r,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=j.prototype;var w=_.prototype=new v;w.constructor=_,n(w,j.prototype),w.isPureReactComponent=!0;var N={current:null},k=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function x(e,r,t){var n,a={},i=null,c=null;if(null!=r)for(n in void 0!==r.ref&&(c=r.ref),void 0!==r.key&&(i=""+r.key),r)k.call(r,n)&&!P.hasOwnProperty(n)&&(a[n]=r[n]);var p=arguments.length-2;if(1===p)a.children=t;else if(1<p){for(var l=Array(p),u=0;u<p;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(n in p=e.defaultProps)void 0===a[n]&&(a[n]=p[n]);return{$$typeof:o,type:e,key:i,ref:c,props:a,_owner:N.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var E=/\/+/g,C=[];function q(e,r,t,n){if(C.length){var a=C.pop();return a.result=e,a.keyPrefix=r,a.func=t,a.context=n,a.count=0,a}return{result:e,keyPrefix:r,func:t,context:n,count:0}}function $(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>C.length&&C.push(e)}function D(e,r,t,n){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case i:c=!0}}if(c)return t(n,e,""===r?"."+T(e,0):r),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var p=0;p<e.length;p++){var l=r+T(a=e[p],p);c+=D(a,l,t,n)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=d&&e[d]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),p=0;!(a=e.next()).done;)c+=D(a=a.value,l=r+T(a,p++),t,n);else if("object"===a)throw t=""+e,Error(O(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t,""));return c}function R(e,r,t){return null==e?0:D(e,"",r,t)}function T(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return r[e]}))}(e.key):r.toString(36)}function I(e,r){e.func.call(e.context,r,e.count++)}function A(e,r,t){var n=e.result,a=e.keyPrefix;e=e.func.call(e.context,r,e.count++),Array.isArray(e)?L(e,n,t,(function(e){return e})):null!=e&&(S(e)&&(e=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||r&&r.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+t)),n.push(e))}function L(e,r,t,n,a){var o="";null!=t&&(o=(""+t).replace(E,"$&/")+"/"),R(e,A,r=q(r,o,n,a)),$(r)}var M={current:null};function U(){var e=M.current;if(null===e)throw Error(O(321));return e}var F={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:N,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:function(e,r,t){if(null==e)return e;var n=[];return L(e,n,null,r,t),n},forEach:function(e,r,t){if(null==e)return e;R(e,I,r=q(null,null,r,t)),$(r)},count:function(e){return R(e,(function(){return null}),null)},toArray:function(e){var r=[];return L(e,r,null,(function(e){return e})),r},only:function(e){if(!S(e))throw Error(O(143));return e}},r.Component=j,r.Fragment=c,r.Profiler=l,r.PureComponent=_,r.StrictMode=p,r.Suspense=b,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,r.cloneElement=function(e,r,t){if(null==e)throw Error(O(267,e));var a=n({},e.props),i=e.key,c=e.ref,p=e._owner;if(null!=r){if(void 0!==r.ref&&(c=r.ref,p=N.current),void 0!==r.key&&(i=""+r.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in r)k.call(r,u)&&!P.hasOwnProperty(u)&&(a[u]=void 0===r[u]&&void 0!==l?l[u]:r[u])}var u=arguments.length-2;if(1===u)a.children=t;else if(1<u){l=Array(u);for(var f=0;f<u;f++)l[f]=arguments[f+2];a.children=l}return{$$typeof:o,type:e.type,key:i,ref:c,props:a,_owner:p}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:f,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},r.createElement=x,r.createFactory=function(e){var r=x.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:s,render:e}},r.isValidElement=S,r.lazy=function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},r.memo=function(e,r){return{$$typeof:m,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return U().useCallback(e,r)},r.useContext=function(e,r){return U().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return U().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return U().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return U().useLayoutEffect(e,r)},r.useMemo=function(e,r){return U().useMemo(e,r)},r.useReducer=function(e,r,t){return U().useReducer(e,r,t)},r.useRef=function(e){return U().useRef(e)},r.useState=function(e){return U().useState(e)},r.version="16.13.1"},1318:function(e,r,t){"use strict";var n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,r){for(var t,c,p=i(e),l=1;l<arguments.length;l++){for(var u in t=Object(arguments[l]))a.call(t,u)&&(p[u]=t[u]);if(n){c=n(t);for(var f=0;f<c.length;f++)o.call(t,c[f])&&(p[c[f]]=t[c[f]])}}return p}},348:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return p})),t.d(r,"default",(function(){return u}));var n=t(2),a=t(6),o=(t(1316),t(1315)),i={id:"_diff_operation_.tableprimarydropoperation",title:"TablePrimaryDropOperation",sidebar_label:"TablePrimaryDropOperation"},c={unversionedId:"api/graphql-migrations/interfaces/_diff_operation_.tableprimarydropoperation",id:"api/graphql-migrations/interfaces/_diff_operation_.tableprimarydropoperation",isDocsHomePage:!1,title:"TablePrimaryDropOperation",description:"Hierarchy",source:"@site/../docs/api/graphql-migrations/interfaces/_diff_operation_.tableprimarydropoperation.md",slug:"/api/graphql-migrations/interfaces/_diff_operation_.tableprimarydropoperation",permalink:"/docs/next/api/graphql-migrations/interfaces/_diff_operation_.tableprimarydropoperation",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphql-migrations/interfaces/_diff_operation_.tableprimarydropoperation.md",version:"current",sidebar_label:"TablePrimaryDropOperation"},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"primaryKeyName",id:"primarykeyname",children:[]},{value:"priority",id:"priority",children:[]},{value:"table",id:"table",children:[]},{value:"type",id:"type",children:[]}]}],l={rightToc:p};function u(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphql-migrations/interfaces/_diff_operation_.operation"}),"Operation")),Object(o.b)("p",{parentName:"li"},"\u21b3 ",Object(o.b)("strong",{parentName:"p"},"TablePrimaryDropOperation")))),Object(o.b)("h2",{id:"index"},"Index"),Object(o.b)("h3",{id:"properties"},"Properties"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphql-migrations/interfaces/_diff_operation_.tableprimarydropoperation#primarykeyname"}),"primaryKeyName")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphql-migrations/interfaces/_diff_operation_.tableprimarydropoperation#priority"}),"priority")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphql-migrations/interfaces/_diff_operation_.tableprimarydropoperation#table"}),"table")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphql-migrations/interfaces/_diff_operation_.tableprimarydropoperation#type"}),"type"))),Object(o.b)("h2",{id:"properties-1"},"Properties"),Object(o.b)("h3",{id:"primarykeyname"},"primaryKeyName"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"primaryKeyName"),": ",Object(o.b)("em",{parentName:"p"},"string")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/05664aa/packages/graphql-migrations/src/diff/Operation.ts#L79"}),"diff/Operation.ts:79"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"priority"},"priority"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"priority"),": ",Object(o.b)("em",{parentName:"p"},"number")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Inherited from ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphql-migrations/interfaces/_diff_operation_.operation"}),"Operation"),".",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphql-migrations/interfaces/_diff_operation_.operation#priority"}),"priority"))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/05664aa/packages/graphql-migrations/src/diff/Operation.ts#L23"}),"diff/Operation.ts:23"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"table"},"table"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"table"),": ",Object(o.b)("em",{parentName:"p"},"string")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/05664aa/packages/graphql-migrations/src/diff/Operation.ts#L78"}),"diff/Operation.ts:78"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"type"},"type"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"type"),": ",Object(o.b)("em",{parentName:"p"},'"table.primary.drop"')),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Overrides ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphql-migrations/interfaces/_diff_operation_.operation"}),"Operation"),".",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphql-migrations/interfaces/_diff_operation_.operation#type"}),"type"))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/05664aa/packages/graphql-migrations/src/diff/Operation.ts#L77"}),"diff/Operation.ts:77"))))}u.isMDXComponent=!0}}]);