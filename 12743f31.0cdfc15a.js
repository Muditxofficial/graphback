/*! For license information please see 12743f31.0cdfc15a.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{1329:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return y}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),b=n,y=p["".concat(o,".").concat(b)]||p[b]||f[b]||c;return r?a.a.createElement(y,i(i({ref:t},u),{},{components:r})):a.a.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<c;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},1330:function(e,t,r){"use strict";e.exports=r(1331)},1331:function(e,t,r){"use strict";var n=r(1332),a="function"==typeof Symbol&&Symbol.for,c=a?Symbol.for("react.element"):60103,o=a?Symbol.for("react.portal"):60106,i=a?Symbol.for("react.fragment"):60107,s=a?Symbol.for("react.strict_mode"):60108,u=a?Symbol.for("react.profiler"):60114,l=a?Symbol.for("react.provider"):60109,p=a?Symbol.for("react.context"):60110,f=a?Symbol.for("react.forward_ref"):60112,b=a?Symbol.for("react.suspense"):60113,y=a?Symbol.for("react.memo"):60115,d=a?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function g(e,t,r){this.props=e,this.context=t,this.refs=O,this.updater=r||v}function j(){}function _(e,t,r){this.props=e,this.context=t,this.refs=O,this.updater=r||v}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=g.prototype;var S=_.prototype=new j;S.constructor=_,n(S,g.prototype),S.isPureReactComponent=!0;var k={current:null},w=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,r){var n,a={},o=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(o=""+t.key),t)w.call(t,n)&&!x.hasOwnProperty(n)&&(a[n]=t[n]);var s=arguments.length-2;if(1===s)a.children=r;else if(1<s){for(var u=Array(s),l=0;l<s;l++)u[l]=arguments[l+2];a.children=u}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===a[n]&&(a[n]=s[n]);return{$$typeof:c,type:e,key:o,ref:i,props:a,_owner:k.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var E=/\/+/g,D=[];function N(e,t,r,n){if(D.length){var a=D.pop();return a.result=e,a.keyPrefix=t,a.func=r,a.context=n,a.count=0,a}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>D.length&&D.push(e)}function $(e,t,r,n){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var i=!1;if(null===e)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case c:case o:i=!0}}if(i)return r(n,e,""===t?"."+U(e,0):t),1;if(i=0,t=""===t?".":t+":",Array.isArray(e))for(var s=0;s<e.length;s++){var u=t+U(a=e[s],s);i+=$(a,u,r,n)}else if(null===e||"object"!=typeof e?u=null:u="function"==typeof(u=m&&e[m]||e["@@iterator"])?u:null,"function"==typeof u)for(e=u.call(e),s=0;!(a=e.next()).done;)i+=$(a=a.value,u=t+U(a,s++),r,n);else if("object"===a)throw r=""+e,Error(h(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return i}function T(e,t,r){return null==e?0:$(e,"",t,r)}function U(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function L(e,t){e.func.call(e.context,t,e.count++)}function I(e,t,r){var n=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?A(e,n,r,(function(e){return e})):null!=e&&(C(e)&&(e=function(e,t){return{$$typeof:c,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+r)),n.push(e))}function A(e,t,r,n,a){var c="";null!=r&&(c=(""+r).replace(E,"$&/")+"/"),T(e,I,t=N(t,c,n,a)),R(t)}var M={current:null};function q(){var e=M.current;if(null===e)throw Error(h(321));return e}var F={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return A(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;T(e,L,t=N(null,null,t,r)),R(t)},count:function(e){return T(e,(function(){return null}),null)},toArray:function(e){var t=[];return A(e,t,null,(function(e){return e})),t},only:function(e){if(!C(e))throw Error(h(143));return e}},t.Component=g,t.Fragment=i,t.Profiler=u,t.PureComponent=_,t.StrictMode=s,t.Suspense=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,t.cloneElement=function(e,t,r){if(null==e)throw Error(h(267,e));var a=n({},e.props),o=e.key,i=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,s=k.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(l in t)w.call(t,l)&&!x.hasOwnProperty(l)&&(a[l]=void 0===t[l]&&void 0!==u?u[l]:t[l])}var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){u=Array(l);for(var p=0;p<l;p++)u[p]=arguments[p+2];a.children=u}return{$$typeof:c,type:e.type,key:o,ref:i,props:a,_owner:s}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=P,t.createFactory=function(e){var t=P.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:f,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:d,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return q().useCallback(e,t)},t.useContext=function(e,t){return q().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return q().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return q().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return q().useLayoutEffect(e,t)},t.useMemo=function(e,t){return q().useMemo(e,t)},t.useReducer=function(e,t,r){return q().useReducer(e,t,r)},t.useRef=function(e){return q().useRef(e)},t.useState=function(e){return q().useState(e)},t.version="16.14.0"},1332:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var r,i,s=o(e),u=1;u<arguments.length;u++){for(var l in r=Object(arguments[u]))a.call(r,l)&&(s[l]=r[l]);if(n){i=n(r);for(var p=0;p<i.length;p++)c.call(r,i[p])&&(s[i[p]]=r[i[p]])}}return s}},158:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),c=(r(1330),r(1329)),o={id:"_services_datasynccrudservice_.synclist",title:"SyncList",sidebar_label:"SyncList"},i={unversionedId:"api/graphback-datasync/interfaces/_services_datasynccrudservice_.synclist",id:"api/graphback-datasync/interfaces/_services_datasynccrudservice_.synclist",isDocsHomePage:!1,title:"SyncList",description:"Type parameters",source:"@site/../docs/api/graphback-datasync/interfaces/_services_datasynccrudservice_.synclist.md",slug:"/api/graphback-datasync/interfaces/_services_datasynccrudservice_.synclist",permalink:"/docs/next/api/graphback-datasync/interfaces/_services_datasynccrudservice_.synclist",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-datasync/interfaces/_services_datasynccrudservice_.synclist.md",version:"current",sidebar_label:"SyncList",sidebar:"docs",previous:{title:"DataSyncProvider",permalink:"/docs/next/api/graphback-datasync/interfaces/_providers_datasyncprovider_.datasyncprovider"},next:{title:"CreateDataSyncCRUDServiceOptions",permalink:"/docs/next/api/graphback-datasync/interfaces/_services_createdatasyncservice_.createdatasynccrudserviceoptions"}},s=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"items",id:"items",children:[]},{value:"lastSync",id:"lastsync",children:[]},{value:"limit",id:"limit",children:[]}]}],u={rightToc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"type-parameters"},"Type parameters"),Object(c.b)("p",null,"\u25aa ",Object(c.b)("strong",{parentName:"p"},"T")),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"SyncList"))),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"properties"},"Properties"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/interfaces/_services_datasynccrudservice_.synclist#items"}),"items")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/interfaces/_services_datasynccrudservice_.synclist#lastsync"}),"lastSync")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/interfaces/_services_datasynccrudservice_.synclist#limit"}),"limit"))),Object(c.b)("h2",{id:"properties-1"},"Properties"),Object(c.b)("h3",{id:"items"},"items"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"items"),": ",Object(c.b)("em",{parentName:"p"},"T[]")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/5353fa2/packages/graphback-datasync/src/services/DataSyncCRUDService.ts#L7"}),"packages/graphback-datasync/src/services/DataSyncCRUDService.ts:7"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"lastsync"},"lastSync"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"lastSync"),": ",Object(c.b)("em",{parentName:"p"},"Date")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/5353fa2/packages/graphback-datasync/src/services/DataSyncCRUDService.ts#L8"}),"packages/graphback-datasync/src/services/DataSyncCRUDService.ts:8"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"limit"},"limit"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"limit"),": ",Object(c.b)("em",{parentName:"p"},"number")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/5353fa2/packages/graphback-datasync/src/services/DataSyncCRUDService.ts#L9"}),"packages/graphback-datasync/src/services/DataSyncCRUDService.ts:9"))))}l.isMDXComponent=!0}}]);