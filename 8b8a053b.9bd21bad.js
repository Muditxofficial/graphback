/*! For license information please see 8b8a053b.9bd21bad.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[679],{1315:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,f=p["".concat(o,".").concat(m)]||p[m]||s[m]||c;return r?a.a.createElement(f,l(l({ref:t},b),{},{components:r})):a.a.createElement(f,l({ref:t},b))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var b=2;b<c;b++)o[b]=r[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1316:function(e,t,r){"use strict";e.exports=r(1317)},1317:function(e,t,r){"use strict";var n=r(1318),a="function"==typeof Symbol&&Symbol.for,c=a?Symbol.for("react.element"):60103,o=a?Symbol.for("react.portal"):60106,l=a?Symbol.for("react.fragment"):60107,i=a?Symbol.for("react.strict_mode"):60108,b=a?Symbol.for("react.profiler"):60114,u=a?Symbol.for("react.provider"):60109,p=a?Symbol.for("react.context"):60110,s=a?Symbol.for("react.forward_ref"):60112,m=a?Symbol.for("react.suspense"):60113,f=a?Symbol.for("react.memo"):60115,h=a?Symbol.for("react.lazy"):60116,O="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function y(e,t,r){this.props=e,this.context=t,this.refs=j,this.updater=r||d}function v(){}function _(e,t,r){this.props=e,this.context=t,this.refs=j,this.updater=r||d}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=y.prototype;var N=_.prototype=new v;N.constructor=_,n(N,y.prototype),N.isPureReactComponent=!0;var k={current:null},C=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,r){var n,a={},o=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(o=""+t.key),t)C.call(t,n)&&!w.hasOwnProperty(n)&&(a[n]=t[n]);var i=arguments.length-2;if(1===i)a.children=r;else if(1<i){for(var b=Array(i),u=0;u<i;u++)b[u]=arguments[u+2];a.children=b}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===a[n]&&(a[n]=i[n]);return{$$typeof:c,type:e,key:o,ref:l,props:a,_owner:k.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var T=/\/+/g,S=[];function q(e,t,r,n){if(S.length){var a=S.pop();return a.result=e,a.keyPrefix=t,a.func=r,a.context=n,a.count=0,a}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function E(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>S.length&&S.push(e)}function $(e,t,r,n){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var l=!1;if(null===e)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case c:case o:l=!0}}if(l)return r(n,e,""===t?"."+R(e,0):t),1;if(l=0,t=""===t?".":t+":",Array.isArray(e))for(var i=0;i<e.length;i++){var b=t+R(a=e[i],i);l+=$(a,b,r,n)}else if(null===e||"object"!=typeof e?b=null:b="function"==typeof(b=O&&e[O]||e["@@iterator"])?b:null,"function"==typeof b)for(e=b.call(e),i=0;!(a=e.next()).done;)l+=$(a=a.value,b=t+R(a,i++),r,n);else if("object"===a)throw r=""+e,Error(g(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return l}function D(e,t,r){return null==e?0:$(e,"",t,r)}function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function I(e,t){e.func.call(e.context,t,e.count++)}function L(e,t,r){var n=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?A(e,n,r,(function(e){return e})):null!=e&&(P(e)&&(e=function(e,t){return{$$typeof:c,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(T,"$&/")+"/")+r)),n.push(e))}function A(e,t,r,n,a){var c="";null!=r&&(c=(""+r).replace(T,"$&/")+"/"),D(e,L,t=q(t,c,n,a)),E(t)}var M={current:null};function U(){var e=M.current;if(null===e)throw Error(g(321));return e}var V={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return A(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;D(e,I,t=q(null,null,t,r)),E(t)},count:function(e){return D(e,(function(){return null}),null)},toArray:function(e){var t=[];return A(e,t,null,(function(e){return e})),t},only:function(e){if(!P(e))throw Error(g(143));return e}},t.Component=y,t.Fragment=l,t.Profiler=b,t.PureComponent=_,t.StrictMode=i,t.Suspense=m,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V,t.cloneElement=function(e,t,r){if(null==e)throw Error(g(267,e));var a=n({},e.props),o=e.key,l=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,i=k.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var b=e.type.defaultProps;for(u in t)C.call(t,u)&&!w.hasOwnProperty(u)&&(a[u]=void 0===t[u]&&void 0!==b?b[u]:t[u])}var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){b=Array(u);for(var p=0;p<u;p++)b[p]=arguments[p+2];a.children=b}return{$$typeof:c,type:e.type,key:o,ref:l,props:a,_owner:i}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:h,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return U().useCallback(e,t)},t.useContext=function(e,t){return U().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return U().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return U().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return U().useLayoutEffect(e,t)},t.useMemo=function(e,t){return U().useMemo(e,t)},t.useReducer=function(e,t,r){return U().useReducer(e,t,r)},t.useRef=function(e){return U().useRef(e)},t.useState=function(e){return U().useState(e)},t.version="16.13.1"},1318:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var r,l,i=o(e),b=1;b<arguments.length;b++){for(var u in r=Object(arguments[b]))a.call(r,u)&&(i[u]=r[u]);if(n){l=n(r);for(var p=0;p<l.length;p++)c.call(r,l[p])&&(i[l[p]]=r[l[p]])}}return i}},734:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),c=(r(1316),r(1315)),o={id:"_abstract_tablecolumn_.tablecolumn",title:"TableColumn",sidebar_label:"TableColumn"},l={unversionedId:"api/graphql-migrations/interfaces/_abstract_tablecolumn_.tablecolumn",id:"api/graphql-migrations/interfaces/_abstract_tablecolumn_.tablecolumn",isDocsHomePage:!1,title:"TableColumn",description:"Hierarchy",source:"@site/../docs/api/graphql-migrations/interfaces/_abstract_tablecolumn_.tablecolumn.md",slug:"/api/graphql-migrations/interfaces/_abstract_tablecolumn_.tablecolumn",permalink:"/docs/next/api/graphql-migrations/interfaces/_abstract_tablecolumn_.tablecolumn",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphql-migrations/interfaces/_abstract_tablecolumn_.tablecolumn.md",version:"current",sidebar_label:"TableColumn"},i=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"annotations",id:"annotations",children:[]},{value:"args",id:"args",children:[]},{value:"autoIncrementable",id:"autoincrementable",children:[]},{value:"comment",id:"comment",children:[]},{value:"defaultValue",id:"defaultvalue",children:[]},{value:"foreign",id:"foreign",children:[]},{value:"isPrimaryKey",id:"isprimarykey",children:[]},{value:"name",id:"name",children:[]},{value:"nullable",id:"nullable",children:[]},{value:"type",id:"type",children:[]}]}],b={rightToc:i};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"TableColumn"))),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"properties"},"Properties"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphql-migrations/interfaces/_abstract_tablecolumn_.tablecolumn#annotations"}),"annotations")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphql-migrations/interfaces/_abstract_tablecolumn_.tablecolumn#args"}),"args")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphql-migrations/interfaces/_abstract_tablecolumn_.tablecolumn#autoincrementable"}),"autoIncrementable")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphql-migrations/interfaces/_abstract_tablecolumn_.tablecolumn#comment"}),"comment")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphql-migrations/interfaces/_abstract_tablecolumn_.tablecolumn#defaultvalue"}),"defaultValue")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphql-migrations/interfaces/_abstract_tablecolumn_.tablecolumn#foreign"}),"foreign")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphql-migrations/interfaces/_abstract_tablecolumn_.tablecolumn#isprimarykey"}),"isPrimaryKey")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphql-migrations/interfaces/_abstract_tablecolumn_.tablecolumn#name"}),"name")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphql-migrations/interfaces/_abstract_tablecolumn_.tablecolumn#nullable"}),"nullable")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphql-migrations/interfaces/_abstract_tablecolumn_.tablecolumn#type"}),"type"))),Object(c.b)("h2",{id:"properties-1"},"Properties"),Object(c.b)("h3",{id:"annotations"},"annotations"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"annotations"),": ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/05664aa/packages/graphql-migrations/src/abstract/TableColumn.ts#L29"}),"abstract/TableColumn.ts:29"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"args"},"args"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"args"),": ",Object(c.b)("em",{parentName:"p"},"any[]")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/05664aa/packages/graphql-migrations/src/abstract/TableColumn.ts#L31"}),"abstract/TableColumn.ts:31"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"autoincrementable"},"autoIncrementable"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"autoIncrementable"),": ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/05664aa/packages/graphql-migrations/src/abstract/TableColumn.ts#L36"}),"abstract/TableColumn.ts:36"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"comment"},"comment"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"comment"),": ",Object(c.b)("em",{parentName:"p"},"string | undefined")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/05664aa/packages/graphql-migrations/src/abstract/TableColumn.ts#L28"}),"abstract/TableColumn.ts:28"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"defaultvalue"},"defaultValue"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"defaultValue"),": ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/05664aa/packages/graphql-migrations/src/abstract/TableColumn.ts#L34"}),"abstract/TableColumn.ts:34"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"foreign"},"foreign"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"foreign"),": ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphql-migrations/interfaces/_abstract_tablecolumn_.foreignkey"}),"ForeignKey")," | undefined")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/05664aa/packages/graphql-migrations/src/abstract/TableColumn.ts#L33"}),"abstract/TableColumn.ts:33"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"isprimarykey"},"isPrimaryKey"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"isPrimaryKey"),": ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/05664aa/packages/graphql-migrations/src/abstract/TableColumn.ts#L35"}),"abstract/TableColumn.ts:35"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"name"},"name"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"name"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/05664aa/packages/graphql-migrations/src/abstract/TableColumn.ts#L27"}),"abstract/TableColumn.ts:27"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"nullable"},"nullable"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"nullable"),": ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/05664aa/packages/graphql-migrations/src/abstract/TableColumn.ts#L32"}),"abstract/TableColumn.ts:32"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"type"},"type"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"type"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/05664aa/packages/graphql-migrations/src/abstract/TableColumn.ts#L30"}),"abstract/TableColumn.ts:30"))))}u.isMDXComponent=!0}}]);