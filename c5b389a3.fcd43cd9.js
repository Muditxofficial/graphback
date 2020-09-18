/*! For license information please see c5b389a3.fcd43cd9.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[802],{1084:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return h}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),i=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=i(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=i(a),d=r,h=s["".concat(b,".").concat(d)]||s[d]||u[d]||c;return a?n.a.createElement(h,o(o({ref:t},l),{},{components:a})):n.a.createElement(h,o({ref:t},l))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,b=new Array(c);b[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,b[1]=o;for(var l=2;l<c;l++)b[l]=a[l];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1085:function(e,t,a){"use strict";e.exports=a(1086)},1086:function(e,t,a){"use strict";var r=a(1087),n="function"==typeof Symbol&&Symbol.for,c=n?Symbol.for("react.element"):60103,b=n?Symbol.for("react.portal"):60106,o=n?Symbol.for("react.fragment"):60107,p=n?Symbol.for("react.strict_mode"):60108,l=n?Symbol.for("react.profiler"):60114,i=n?Symbol.for("react.provider"):60109,s=n?Symbol.for("react.context"):60110,u=n?Symbol.for("react.forward_ref"):60112,d=n?Symbol.for("react.suspense"):60113,h=n?Symbol.for("react.memo"):60115,m=n?Symbol.for("react.lazy"):60116,g="function"==typeof Symbol&&Symbol.iterator;function O(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f={};function k(e,t,a){this.props=e,this.context=t,this.refs=f,this.updater=a||j}function y(){}function N(e,t,a){this.props=e,this.context=t,this.refs=f,this.updater=a||j}k.prototype.isReactComponent={},k.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(O(85));this.updater.enqueueSetState(this,e,t,"setState")},k.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=k.prototype;var v=N.prototype=new y;v.constructor=N,r(v,k.prototype),v.isPureReactComponent=!0;var _={current:null},C=Object.prototype.hasOwnProperty,M={key:!0,ref:!0,__self:!0,__source:!0};function G(e,t,a){var r,n={},b=null,o=null;if(null!=t)for(r in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(b=""+t.key),t)C.call(t,r)&&!M.hasOwnProperty(r)&&(n[r]=t[r]);var p=arguments.length-2;if(1===p)n.children=a;else if(1<p){for(var l=Array(p),i=0;i<p;i++)l[i]=arguments[i+2];n.children=l}if(e&&e.defaultProps)for(r in p=e.defaultProps)void 0===n[r]&&(n[r]=p[r]);return{$$typeof:c,type:e,key:b,ref:o,props:n,_owner:_.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var x=/\/+/g,S=[];function P(e,t,a,r){if(S.length){var n=S.pop();return n.result=e,n.keyPrefix=t,n.func=a,n.context=r,n.count=0,n}return{result:e,keyPrefix:t,func:a,context:r,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>S.length&&S.push(e)}function D(e,t,a,r){var n=typeof e;"undefined"!==n&&"boolean"!==n||(e=null);var o=!1;if(null===e)o=!0;else switch(n){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case c:case b:o=!0}}if(o)return a(r,e,""===t?"."+E(e,0):t),1;if(o=0,t=""===t?".":t+":",Array.isArray(e))for(var p=0;p<e.length;p++){var l=t+E(n=e[p],p);o+=D(n,l,a,r)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=g&&e[g]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),p=0;!(n=e.next()).done;)o+=D(n=n.value,l=t+E(n,p++),a,r);else if("object"===n)throw a=""+e,Error(O(31,"[object Object]"===a?"object with keys {"+Object.keys(e).join(", ")+"}":a,""));return o}function L(e,t,a){return null==e?0:D(e,"",t,a)}function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function T(e,t){e.func.call(e.context,t,e.count++)}function $(e,t,a){var r=e.result,n=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?I(e,r,a,(function(e){return e})):null!=e&&(w(e)&&(e=function(e,t){return{$$typeof:c,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,n+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(x,"$&/")+"/")+a)),r.push(e))}function I(e,t,a,r,n){var c="";null!=a&&(c=(""+a).replace(x,"$&/")+"/"),L(e,$,t=P(t,c,r,n)),R(t)}var Q={current:null};function q(){var e=Q.current;if(null===e)throw Error(O(321));return e}var A={ReactCurrentDispatcher:Q,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,a){if(null==e)return e;var r=[];return I(e,r,null,t,a),r},forEach:function(e,t,a){if(null==e)return e;L(e,T,t=P(null,null,t,a)),R(t)},count:function(e){return L(e,(function(){return null}),null)},toArray:function(e){var t=[];return I(e,t,null,(function(e){return e})),t},only:function(e){if(!w(e))throw Error(O(143));return e}},t.Component=k,t.Fragment=o,t.Profiler=l,t.PureComponent=N,t.StrictMode=p,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.cloneElement=function(e,t,a){if(null==e)throw Error(O(267,e));var n=r({},e.props),b=e.key,o=e.ref,p=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,p=_.current),void 0!==t.key&&(b=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(i in t)C.call(t,i)&&!M.hasOwnProperty(i)&&(n[i]=void 0===t[i]&&void 0!==l?l[i]:t[i])}var i=arguments.length-2;if(1===i)n.children=a;else if(1<i){l=Array(i);for(var s=0;s<i;s++)l[s]=arguments[s+2];n.children=l}return{$$typeof:c,type:e.type,key:b,ref:o,props:n,_owner:p}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=G,t.createFactory=function(e){var t=G.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:h,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return q().useCallback(e,t)},t.useContext=function(e,t){return q().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return q().useEffect(e,t)},t.useImperativeHandle=function(e,t,a){return q().useImperativeHandle(e,t,a)},t.useLayoutEffect=function(e,t){return q().useLayoutEffect(e,t)},t.useMemo=function(e,t){return q().useMemo(e,t)},t.useReducer=function(e,t,a){return q().useReducer(e,t,a)},t.useRef=function(e){return q().useRef(e)},t.useState=function(e){return q().useState(e)},t.version="16.13.1"},1087:function(e,t,a){"use strict";var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function b(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},a=0;a<10;a++)t["_"+String.fromCharCode(a)]=a;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(n){return!1}}()?Object.assign:function(e,t){for(var a,o,p=b(e),l=1;l<arguments.length;l++){for(var i in a=Object(arguments[l]))n.call(a,i)&&(p[i]=a[i]);if(r){o=r(a);for(var s=0;s<o.length;s++)c.call(a,o[s])&&(p[o[s]]=a[o[s]])}}return p}},859:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return i}));var r=a(2),n=a(6),c=(a(1085),a(1084)),b={id:"_plugin_graphbackcoremetadata_.graphbackcoremetadata",title:"GraphbackCoreMetadata",sidebar_label:"GraphbackCoreMetadata"},o={unversionedId:"api/graphback-core/classes/_plugin_graphbackcoremetadata_.graphbackcoremetadata",id:"api/graphback-core/classes/_plugin_graphbackcoremetadata_.graphbackcoremetadata",isDocsHomePage:!1,title:"GraphbackCoreMetadata",description:"Contains Graphback Core Models",source:"@site/../docs/api/graphback-core/classes/_plugin_graphbackcoremetadata_.graphbackcoremetadata.md",slug:"/api/graphback-core/classes/_plugin_graphbackcoremetadata_.graphbackcoremetadata",permalink:"/docs/next/api/graphback-core/classes/_plugin_graphbackcoremetadata_.graphbackcoremetadata",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-core/classes/_plugin_graphbackcoremetadata_.graphbackcoremetadata.md",version:"current",sidebar_label:"GraphbackCoreMetadata"},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Constructors",id:"constructors",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Methods",id:"methods",children:[]}]},{value:"Constructors",id:"constructors-1",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"<code>Private</code> models",id:"private-models",children:[]},{value:"<code>Private</code> resolvers",id:"private-resolvers",children:[]},{value:"<code>Private</code> schema",id:"private-schema",children:[]},{value:"<code>Private</code> supportedCrudMethods",id:"private-supportedcrudmethods",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"addResolvers",id:"addresolvers",children:[]},{value:"<code>Private</code> buildModel",id:"private-buildmodel",children:[]},{value:"getGraphQLTypesWithModel",id:"getgraphqltypeswithmodel",children:[]},{value:"getModelDefinitions",id:"getmodeldefinitions",children:[]},{value:"getResolvers",id:"getresolvers",children:[]},{value:"getSchema",id:"getschema",children:[]},{value:"setSchema",id:"setschema",children:[]}]}],l={rightToc:p};function i(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Contains Graphback Core Models"),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"GraphbackCoreMetadata"))),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"constructors"},"Constructors"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/classes/_plugin_graphbackcoremetadata_.graphbackcoremetadata#constructor"}),"constructor"))),Object(c.b)("h3",{id:"properties"},"Properties"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/classes/_plugin_graphbackcoremetadata_.graphbackcoremetadata#private-models"}),"models")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/classes/_plugin_graphbackcoremetadata_.graphbackcoremetadata#private-resolvers"}),"resolvers")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/classes/_plugin_graphbackcoremetadata_.graphbackcoremetadata#private-schema"}),"schema")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/classes/_plugin_graphbackcoremetadata_.graphbackcoremetadata#private-supportedcrudmethods"}),"supportedCrudMethods"))),Object(c.b)("h3",{id:"methods"},"Methods"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/classes/_plugin_graphbackcoremetadata_.graphbackcoremetadata#addresolvers"}),"addResolvers")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/classes/_plugin_graphbackcoremetadata_.graphbackcoremetadata#private-buildmodel"}),"buildModel")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/classes/_plugin_graphbackcoremetadata_.graphbackcoremetadata#getgraphqltypeswithmodel"}),"getGraphQLTypesWithModel")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/classes/_plugin_graphbackcoremetadata_.graphbackcoremetadata#getmodeldefinitions"}),"getModelDefinitions")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/classes/_plugin_graphbackcoremetadata_.graphbackcoremetadata#getresolvers"}),"getResolvers")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/classes/_plugin_graphbackcoremetadata_.graphbackcoremetadata#getschema"}),"getSchema")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/classes/_plugin_graphbackcoremetadata_.graphbackcoremetadata#setschema"}),"setSchema"))),Object(c.b)("h2",{id:"constructors-1"},"Constructors"),Object(c.b)("h3",{id:"constructor"},"constructor"),Object(c.b)("p",null,"+"," ",Object(c.b)("strong",{parentName:"p"},"new GraphbackCoreMetadata"),"(",Object(c.b)("inlineCode",{parentName:"p"},"globalConfig"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/graphback-core/interfaces/_plugin_graphbackglobalconfig_.graphbackglobalconfig"}),"GraphbackGlobalConfig"),", ",Object(c.b)("inlineCode",{parentName:"p"},"schema"),": GraphQLSchema): ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-core/classes/_plugin_graphbackcoremetadata_.graphbackcoremetadata"}),"GraphbackCoreMetadata"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4b39940/packages/graphback-core/src/plugin/GraphbackCoreMetadata.ts#L31"}),"packages/graphback-core/src/plugin/GraphbackCoreMetadata.ts:31"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"globalConfig")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/graphback-core/interfaces/_plugin_graphbackglobalconfig_.graphbackglobalconfig"}),"GraphbackGlobalConfig"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"schema")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphQLSchema")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-core/classes/_plugin_graphbackcoremetadata_.graphbackcoremetadata"}),"GraphbackCoreMetadata"))),Object(c.b)("h2",{id:"properties-1"},"Properties"),Object(c.b)("h3",{id:"private-models"},Object(c.b)("inlineCode",{parentName:"h3"},"Private")," models"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"models"),": ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-core/modules/_plugin_modeldefinition_#modeldefinition"}),"ModelDefinition"),"[]")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4b39940/packages/graphback-core/src/plugin/GraphbackCoreMetadata.ts#L31"}),"packages/graphback-core/src/plugin/GraphbackCoreMetadata.ts:31"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"private-resolvers"},Object(c.b)("inlineCode",{parentName:"h3"},"Private")," resolvers"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"resolvers"),": ",Object(c.b)("em",{parentName:"p"},"IResolvers")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4b39940/packages/graphback-core/src/plugin/GraphbackCoreMetadata.ts#L30"}),"packages/graphback-core/src/plugin/GraphbackCoreMetadata.ts:30"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"private-schema"},Object(c.b)("inlineCode",{parentName:"h3"},"Private")," schema"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"schema"),": ",Object(c.b)("em",{parentName:"p"},"GraphQLSchema")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4b39940/packages/graphback-core/src/plugin/GraphbackCoreMetadata.ts#L29"}),"packages/graphback-core/src/plugin/GraphbackCoreMetadata.ts:29"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"private-supportedcrudmethods"},Object(c.b)("inlineCode",{parentName:"h3"},"Private")," supportedCrudMethods"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"supportedCrudMethods"),": ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-core/interfaces/_plugin_graphbackcrudgeneratorconfig_.graphbackcrudgeneratorconfig"}),"GraphbackCRUDGeneratorConfig"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4b39940/packages/graphback-core/src/plugin/GraphbackCoreMetadata.ts#L28"}),"packages/graphback-core/src/plugin/GraphbackCoreMetadata.ts:28"))),Object(c.b)("h2",{id:"methods-1"},"Methods"),Object(c.b)("h3",{id:"addresolvers"},"addResolvers"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"addResolvers"),"(",Object(c.b)("inlineCode",{parentName:"p"},"resolvers"),": IResolvers): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4b39940/packages/graphback-core/src/plugin/GraphbackCoreMetadata.ts#L46"}),"packages/graphback-core/src/plugin/GraphbackCoreMetadata.ts:46"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"resolvers")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"IResolvers")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"private-buildmodel"},Object(c.b)("inlineCode",{parentName:"h3"},"Private")," buildModel"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"buildModel"),"(",Object(c.b)("inlineCode",{parentName:"p"},"modelType"),": GraphQLObjectType, ",Object(c.b)("inlineCode",{parentName:"p"},"relationships"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/graphback-core/interfaces/_relationships_relationshipmetadatabuilder_.fieldrelationshipmetadata"}),"FieldRelationshipMetadata"),"[]): ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-core/modules/_plugin_modeldefinition_#modeldefinition"}),"ModelDefinition"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4b39940/packages/graphback-core/src/plugin/GraphbackCoreMetadata.ts#L93"}),"packages/graphback-core/src/plugin/GraphbackCoreMetadata.ts:93"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"modelType")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphQLObjectType")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"relationships")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/graphback-core/interfaces/_relationships_relationshipmetadatabuilder_.fieldrelationshipmetadata"}),"FieldRelationshipMetadata"),"[]")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-core/modules/_plugin_modeldefinition_#modeldefinition"}),"ModelDefinition"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"getgraphqltypeswithmodel"},"getGraphQLTypesWithModel"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"getGraphQLTypesWithModel"),"(): ",Object(c.b)("em",{parentName:"p"},"GraphQLObjectType[]")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4b39940/packages/graphback-core/src/plugin/GraphbackCoreMetadata.ts#L87"}),"packages/graphback-core/src/plugin/GraphbackCoreMetadata.ts:87"))),Object(c.b)("p",null,"Helper for plugins to fetch all types that should be processed by Graphback plugins.\nTo mark type as enabled for graphback generators we need to add ",Object(c.b)("inlineCode",{parentName:"p"},"model")," annotations over the type."),Object(c.b)("p",null,"Returns all user types that have @model in description"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"GraphQLObjectType[]")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"getmodeldefinitions"},"getModelDefinitions"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"getModelDefinitions"),"(): ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-core/modules/_plugin_modeldefinition_#modeldefinition"}),"ModelDefinition"),"[]")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4b39940/packages/graphback-core/src/plugin/GraphbackCoreMetadata.ts#L63"}),"packages/graphback-core/src/plugin/GraphbackCoreMetadata.ts:63"))),Object(c.b)("p",null,"Get Graphback Models - GraphQL Types with additional CRUD configuration"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-core/modules/_plugin_modeldefinition_#modeldefinition"}),"ModelDefinition"),"[]")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"getresolvers"},"getResolvers"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"getResolvers"),"(): ",Object(c.b)("em",{parentName:"p"},"IResolvers")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4b39940/packages/graphback-core/src/plugin/GraphbackCoreMetadata.ts#L56"}),"packages/graphback-core/src/plugin/GraphbackCoreMetadata.ts:56"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"IResolvers")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"getschema"},"getSchema"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"getSchema"),"(): ",Object(c.b)("em",{parentName:"p"},"GraphQLSchema\u2039\u203a")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4b39940/packages/graphback-core/src/plugin/GraphbackCoreMetadata.ts#L38"}),"packages/graphback-core/src/plugin/GraphbackCoreMetadata.ts:38"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"GraphQLSchema\u2039\u203a")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"setschema"},"setSchema"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"setSchema"),"(",Object(c.b)("inlineCode",{parentName:"p"},"newSchema"),": GraphQLSchema): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4b39940/packages/graphback-core/src/plugin/GraphbackCoreMetadata.ts#L42"}),"packages/graphback-core/src/plugin/GraphbackCoreMetadata.ts:42"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"newSchema")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphQLSchema")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"void")))}i.isMDXComponent=!0}}]);