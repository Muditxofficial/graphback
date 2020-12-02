/*! For license information please see ae859c11.c420da17.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[868],{1329:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),i=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=i(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=b(e,["components","mdxType","originalType","parentName"]),p=i(n),f=r,s=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return n?a.a.createElement(s,c(c({ref:t},u),{},{components:n})):a.a.createElement(s,c({ref:t},u))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=f;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var u=2;u<o;u++)l[u]=n[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1330:function(e,t,n){"use strict";e.exports=n(1331)},1331:function(e,t,n){"use strict";var r=n(1332),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,l=a?Symbol.for("react.portal"):60106,c=a?Symbol.for("react.fragment"):60107,b=a?Symbol.for("react.strict_mode"):60108,u=a?Symbol.for("react.profiler"):60114,i=a?Symbol.for("react.provider"):60109,p=a?Symbol.for("react.context"):60110,d=a?Symbol.for("react.forward_ref"):60112,f=a?Symbol.for("react.suspense"):60113,s=a?Symbol.for("react.memo"):60115,m=a?Symbol.for("react.lazy"):60116,O="function"==typeof Symbol&&Symbol.iterator;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function g(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||y}function N(){}function v(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||y}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(j(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},N.prototype=g.prototype;var _=v.prototype=new N;_.constructor=v,r(_,g.prototype),_.isPureReactComponent=!0;var k={current:null},w=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function M(e,t,n){var r,a={},l=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(l=""+t.key),t)w.call(t,r)&&!C.hasOwnProperty(r)&&(a[r]=t[r]);var b=arguments.length-2;if(1===b)a.children=n;else if(1<b){for(var u=Array(b),i=0;i<b;i++)u[i]=arguments[i+2];a.children=u}if(e&&e.defaultProps)for(r in b=e.defaultProps)void 0===a[r]&&(a[r]=b[r]);return{$$typeof:o,type:e,key:l,ref:c,props:a,_owner:k.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var x=/\/+/g,S=[];function P(e,t,n,r){if(S.length){var a=S.pop();return a.result=e,a.keyPrefix=t,a.func=n,a.context=r,a.count=0,a}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function E(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>S.length&&S.push(e)}function R(e,t,n,r){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case l:c=!0}}if(c)return n(r,e,""===t?"."+L(e,0):t),1;if(c=0,t=""===t?".":t+":",Array.isArray(e))for(var b=0;b<e.length;b++){var u=t+L(a=e[b],b);c+=R(a,u,n,r)}else if(null===e||"object"!=typeof e?u=null:u="function"==typeof(u=O&&e[O]||e["@@iterator"])?u:null,"function"==typeof u)for(e=u.call(e),b=0;!(a=e.next()).done;)c+=R(a=a.value,u=t+L(a,b++),n,r);else if("object"===a)throw n=""+e,Error(j(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return c}function $(e,t,n){return null==e?0:R(e,"",t,n)}function L(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function D(e,t){e.func.call(e.context,t,e.count++)}function I(e,t,n){var r=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?F(e,r,n,(function(e){return e})):null!=e&&(T(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(x,"$&/")+"/")+n)),r.push(e))}function F(e,t,n,r,a){var o="";null!=n&&(o=(""+n).replace(x,"$&/")+"/"),$(e,I,t=P(t,o,r,a)),E(t)}var G={current:null};function A(){var e=G.current;if(null===e)throw Error(j(321));return e}var Q={ReactCurrentDispatcher:G,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return F(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;$(e,D,t=P(null,null,t,n)),E(t)},count:function(e){return $(e,(function(){return null}),null)},toArray:function(e){var t=[];return F(e,t,null,(function(e){return e})),t},only:function(e){if(!T(e))throw Error(j(143));return e}},t.Component=g,t.Fragment=c,t.Profiler=u,t.PureComponent=v,t.StrictMode=b,t.Suspense=f,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,t.cloneElement=function(e,t,n){if(null==e)throw Error(j(267,e));var a=r({},e.props),l=e.key,c=e.ref,b=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,b=k.current),void 0!==t.key&&(l=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(i in t)w.call(t,i)&&!C.hasOwnProperty(i)&&(a[i]=void 0===t[i]&&void 0!==u?u[i]:t[i])}var i=arguments.length-2;if(1===i)a.children=n;else if(1<i){u=Array(i);for(var p=0;p<i;p++)u[p]=arguments[p+2];a.children=u}return{$$typeof:o,type:e.type,key:l,ref:c,props:a,_owner:b}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=M,t.createFactory=function(e){var t=M.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:d,render:e}},t.isValidElement=T,t.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:s,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return A().useCallback(e,t)},t.useContext=function(e,t){return A().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return A().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return A().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return A().useLayoutEffect(e,t)},t.useMemo=function(e,t){return A().useMemo(e,t)},t.useReducer=function(e,t,n){return A().useReducer(e,t,n)},t.useRef=function(e){return A().useRef(e)},t.useState=function(e){return A().useState(e)},t.version="16.14.0"},1332:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function l(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var n,c,b=l(e),u=1;u<arguments.length;u++){for(var i in n=Object(arguments[u]))a.call(n,i)&&(b[i]=n[i]);if(r){c=r(n);for(var p=0;p<c.length;p++)o.call(n,c[p])&&(b[c[p]]=n[c[p]])}}return b}},936:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return i}));var r=n(3),a=n(7),o=(n(1330),n(1329)),l={id:"_db_buildmodeltablemap_",title:"db/buildModelTableMap",sidebar_label:"db/buildModelTableMap"},c={unversionedId:"api/graphback-core/modules/_db_buildmodeltablemap_",id:"api/graphback-core/modules/_db_buildmodeltablemap_",isDocsHomePage:!1,title:"db/buildModelTableMap",description:"Index",source:"@site/../docs/api/graphback-core/modules/_db_buildmodeltablemap_.md",slug:"/api/graphback-core/modules/_db_buildmodeltablemap_",permalink:"/docs/next/api/graphback-core/modules/_db_buildmodeltablemap_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-core/modules/_db_buildmodeltablemap_.md",version:"current",sidebar_label:"db/buildModelTableMap"},b=[{value:"Index",id:"index",children:[{value:"Interfaces",id:"interfaces",children:[]},{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"<code>Const</code> buildModelTableMap",id:"const-buildmodeltablemap",children:[]},{value:"getColumnName",id:"getcolumnname",children:[]},{value:"getTableName",id:"gettablename",children:[]}]}],u={rightToc:b};function i(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"index"},"Index"),Object(o.b)("h3",{id:"interfaces"},"Interfaces"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_db_buildmodeltablemap_.modeltablemap"}),"ModelTableMap"))),Object(o.b)("h3",{id:"functions"},"Functions"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/modules/_db_buildmodeltablemap_#const-buildmodeltablemap"}),"buildModelTableMap")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/modules/_db_buildmodeltablemap_#getcolumnname"}),"getColumnName")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/modules/_db_buildmodeltablemap_#gettablename"}),"getTableName"))),Object(o.b)("h2",{id:"functions-1"},"Functions"),Object(o.b)("h3",{id:"const-buildmodeltablemap"},Object(o.b)("inlineCode",{parentName:"h3"},"Const")," buildModelTableMap"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("strong",{parentName:"p"},"buildModelTableMap"),"(",Object(o.b)("inlineCode",{parentName:"p"},"model"),": GraphQLObjectType): ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-core/interfaces/_db_buildmodeltablemap_.modeltablemap"}),"ModelTableMap"))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/5353fa2/packages/graphback-core/src/db/buildModelTableMap.ts#L75"}),"packages/graphback-core/src/db/buildModelTableMap.ts:75"))),Object(o.b)("p",null,"Builds a database mapping model of a GraphQLObject type."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters:")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"model")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphQLObjectType"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The GraphQL object data model representation")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-core/interfaces/_db_buildmodeltablemap_.modeltablemap"}),"ModelTableMap"))),Object(o.b)("p",null,"A model containing the table name, any field customisations and a mapping of the primary key field."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"getcolumnname"},"getColumnName"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("strong",{parentName:"p"},"getColumnName"),"(",Object(o.b)("inlineCode",{parentName:"p"},"field"),": GraphQLField\u2039any, any\u203a): ",Object(o.b)("em",{parentName:"p"},"string")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/5353fa2/packages/graphback-core/src/db/buildModelTableMap.ts#L44"}),"packages/graphback-core/src/db/buildModelTableMap.ts:44"))),Object(o.b)("p",null,"Gets the datase column name for a GraphQL field.\nChecks for the ",Object(o.b)("inlineCode",{parentName:"p"},"@db(name)")," annotation for a customised name"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters:")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"field")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphQLField\u2039any, any\u203a"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}))))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("em",{parentName:"p"},"string")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"gettablename"},"getTableName"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("strong",{parentName:"p"},"getTableName"),"(",Object(o.b)("inlineCode",{parentName:"p"},"model"),": GraphQLObjectType): ",Object(o.b)("em",{parentName:"p"},"string")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/5353fa2/packages/graphback-core/src/db/buildModelTableMap.ts#L27"}),"packages/graphback-core/src/db/buildModelTableMap.ts:27"))),Object(o.b)("p",null,"Gets the datase column name for a GraphQL type.\nChecks for the ",Object(o.b)("inlineCode",{parentName:"p"},"@db(name)")," annotation for a customised name"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters:")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"model")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphQLObjectType")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("em",{parentName:"p"},"string")))}i.isMDXComponent=!0}}]);