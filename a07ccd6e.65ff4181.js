/*! For license information please see a07ccd6e.65ff4181.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[787],{1314:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),i=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=i(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,u=b(e,["components","mdxType","originalType","parentName"]),s=i(r),d=n,f=s["".concat(o,".").concat(d)]||s[d]||p[d]||c;return r?a.a.createElement(f,l(l({ref:t},u),{},{components:r})):a.a.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=d;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<c;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1315:function(e,t,r){"use strict";e.exports=r(1316)},1316:function(e,t,r){"use strict";var n=r(1317),a="function"==typeof Symbol&&Symbol.for,c=a?Symbol.for("react.element"):60103,o=a?Symbol.for("react.portal"):60106,l=a?Symbol.for("react.fragment"):60107,b=a?Symbol.for("react.strict_mode"):60108,u=a?Symbol.for("react.profiler"):60114,i=a?Symbol.for("react.provider"):60109,s=a?Symbol.for("react.context"):60110,p=a?Symbol.for("react.forward_ref"):60112,d=a?Symbol.for("react.suspense"):60113,f=a?Symbol.for("react.memo"):60115,m=a?Symbol.for("react.lazy"):60116,O="function"==typeof Symbol&&Symbol.iterator;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function g(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||h}function N(){}function v(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||h}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(j(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},N.prototype=g.prototype;var k=v.prototype=new N;k.constructor=v,n(k,g.prototype),k.isPureReactComponent=!0;var _={current:null},S=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var n,a={},o=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(o=""+t.key),t)S.call(t,n)&&!P.hasOwnProperty(n)&&(a[n]=t[n]);var b=arguments.length-2;if(1===b)a.children=r;else if(1<b){for(var u=Array(b),i=0;i<b;i++)u[i]=arguments[i+2];a.children=u}if(e&&e.defaultProps)for(n in b=e.defaultProps)void 0===a[n]&&(a[n]=b[n]);return{$$typeof:c,type:e,key:o,ref:l,props:a,_owner:_.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var x=/\/+/g,D=[];function T(e,t,r,n){if(D.length){var a=D.pop();return a.result=e,a.keyPrefix=t,a.func=r,a.context=n,a.count=0,a}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function E(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>D.length&&D.push(e)}function M(e,t,r,n){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var l=!1;if(null===e)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case c:case o:l=!0}}if(l)return r(n,e,""===t?"."+$(e,0):t),1;if(l=0,t=""===t?".":t+":",Array.isArray(e))for(var b=0;b<e.length;b++){var u=t+$(a=e[b],b);l+=M(a,u,r,n)}else if(null===e||"object"!=typeof e?u=null:u="function"==typeof(u=O&&e[O]||e["@@iterator"])?u:null,"function"==typeof u)for(e=u.call(e),b=0;!(a=e.next()).done;)l+=M(a=a.value,u=t+$(a,b++),r,n);else if("object"===a)throw r=""+e,Error(j(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return l}function R(e,t,r){return null==e?0:M(e,"",t,r)}function $(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function L(e,t){e.func.call(e.context,t,e.count++)}function I(e,t,r){var n=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?A(e,n,r,(function(e){return e})):null!=e&&(C(e)&&(e=function(e,t){return{$$typeof:c,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(x,"$&/")+"/")+r)),n.push(e))}function A(e,t,r,n,a){var c="";null!=r&&(c=(""+r).replace(x,"$&/")+"/"),R(e,I,t=T(t,c,n,a)),E(t)}var F={current:null};function B(){var e=F.current;if(null===e)throw Error(j(321));return e}var U={ReactCurrentDispatcher:F,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return A(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;R(e,L,t=T(null,null,t,r)),E(t)},count:function(e){return R(e,(function(){return null}),null)},toArray:function(e){var t=[];return A(e,t,null,(function(e){return e})),t},only:function(e){if(!C(e))throw Error(j(143));return e}},t.Component=g,t.Fragment=l,t.Profiler=u,t.PureComponent=v,t.StrictMode=b,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,t.cloneElement=function(e,t,r){if(null==e)throw Error(j(267,e));var a=n({},e.props),o=e.key,l=e.ref,b=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,b=_.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(i in t)S.call(t,i)&&!P.hasOwnProperty(i)&&(a[i]=void 0===t[i]&&void 0!==u?u[i]:t[i])}var i=arguments.length-2;if(1===i)a.children=r;else if(1<i){u=Array(i);for(var s=0;s<i;s++)u[s]=arguments[s+2];a.children=u}return{$$typeof:c,type:e.type,key:o,ref:l,props:a,_owner:b}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=w,t.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return B().useCallback(e,t)},t.useContext=function(e,t){return B().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return B().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return B().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return B().useLayoutEffect(e,t)},t.useMemo=function(e,t){return B().useMemo(e,t)},t.useReducer=function(e,t,r){return B().useReducer(e,t,r)},t.useRef=function(e){return B().useRef(e)},t.useState=function(e){return B().useState(e)},t.version="16.13.1"},1317:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var r,l,b=o(e),u=1;u<arguments.length;u++){for(var i in r=Object(arguments[u]))a.call(r,i)&&(b[i]=r[i]);if(n){l=n(r);for(var s=0;s<l.length;s++)c.call(r,l[s])&&(b[l[s]]=r[l[s]])}}return b}},842:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return i}));var n=r(2),a=r(6),c=(r(1315),r(1314)),o={id:"_deltasource_.mongodeltasource",title:"MongoDeltaSource",sidebar_label:"MongoDeltaSource"},l={unversionedId:"api/graphback-datasync/classes/_deltasource_.mongodeltasource",id:"api/graphback-datasync/classes/_deltasource_.mongodeltasource",isDocsHomePage:!1,title:"MongoDeltaSource",description:"Provides the ability to insert delta snapshots into MongoDB collections",source:"@site/../docs/api/graphback-datasync/classes/_deltasource_.mongodeltasource.md",slug:"/api/graphback-datasync/classes/_deltasource_.mongodeltasource",permalink:"/docs/next/api/graphback-datasync/classes/_deltasource_.mongodeltasource",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-datasync/classes/_deltasource_.mongodeltasource.md",version:"current",sidebar_label:"MongoDeltaSource"},b=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Constructors",id:"constructors",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Methods",id:"methods",children:[]}]},{value:"Constructors",id:"constructors-1",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"<code>Protected</code> collectionName",id:"protected-collectionname",children:[]},{value:"<code>Protected</code> db",id:"protected-db",children:[]},{value:"<code>Protected</code> deltaTTL",id:"protected-deltattl",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"findBaseForConflicts",id:"findbaseforconflicts",children:[]},{value:"insertDiff",id:"insertdiff",children:[]}]}],u={rightToc:b};function i(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Provides the ability to insert delta snapshots into MongoDB collections\nand get base for conflict resolution"),Object(c.b)("h2",{id:"type-parameters"},"Type parameters"),Object(c.b)("p",null,"\u25aa ",Object(c.b)("strong",{parentName:"p"},"Type")),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"MongoDeltaSource"))),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"constructors"},"Constructors"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/classes/_deltasource_.mongodeltasource#constructor"}),"constructor"))),Object(c.b)("h3",{id:"properties"},"Properties"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/classes/_deltasource_.mongodeltasource#protected-collectionname"}),"collectionName")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/classes/_deltasource_.mongodeltasource#protected-db"}),"db")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/classes/_deltasource_.mongodeltasource#protected-deltattl"}),"deltaTTL"))),Object(c.b)("h3",{id:"methods"},"Methods"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/classes/_deltasource_.mongodeltasource#findbaseforconflicts"}),"findBaseForConflicts")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/classes/_deltasource_.mongodeltasource#insertdiff"}),"insertDiff"))),Object(c.b)("h2",{id:"constructors-1"},"Constructors"),Object(c.b)("h3",{id:"constructor"},"constructor"),Object(c.b)("p",null,"+"," ",Object(c.b)("strong",{parentName:"p"},"new MongoDeltaSource"),"(",Object(c.b)("inlineCode",{parentName:"p"},"model"),": ModelDefinition, ",Object(c.b)("inlineCode",{parentName:"p"},"db"),": Db, ",Object(c.b)("inlineCode",{parentName:"p"},"deltaTTL"),": number): ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphback-datasync/classes/_deltasource_.mongodeltasource"}),"MongoDeltaSource"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/03847b2/packages/graphback-datasync/src/deltaSource.ts#L17"}),"packages/graphback-datasync/src/deltaSource.ts:17"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"model")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ModelDefinition")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"db")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Db")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"deltaTTL")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphback-datasync/classes/_deltasource_.mongodeltasource"}),"MongoDeltaSource"))),Object(c.b)("h2",{id:"properties-1"},"Properties"),Object(c.b)("h3",{id:"protected-collectionname"},Object(c.b)("inlineCode",{parentName:"h3"},"Protected")," collectionName"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"collectionName"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/03847b2/packages/graphback-datasync/src/deltaSource.ts#L16"}),"packages/graphback-datasync/src/deltaSource.ts:16"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"protected-db"},Object(c.b)("inlineCode",{parentName:"h3"},"Protected")," db"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"db"),": ",Object(c.b)("em",{parentName:"p"},"Db")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/03847b2/packages/graphback-datasync/src/deltaSource.ts#L15"}),"packages/graphback-datasync/src/deltaSource.ts:15"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"protected-deltattl"},Object(c.b)("inlineCode",{parentName:"h3"},"Protected")," deltaTTL"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"deltaTTL"),": ",Object(c.b)("em",{parentName:"p"},"number")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/03847b2/packages/graphback-datasync/src/deltaSource.ts#L17"}),"packages/graphback-datasync/src/deltaSource.ts:17"))),Object(c.b)("h2",{id:"methods-1"},"Methods"),Object(c.b)("h3",{id:"findbaseforconflicts"},"findBaseForConflicts"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"findBaseForConflicts"),"(",Object(c.b)("inlineCode",{parentName:"p"},"updateDocument"),": any): ",Object(c.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/03847b2/packages/graphback-datasync/src/deltaSource.ts#L47"}),"packages/graphback-datasync/src/deltaSource.ts:47"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"updateDocument")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"insertdiff"},"insertDiff"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"insertDiff"),"(",Object(c.b)("inlineCode",{parentName:"p"},"updatedDocument"),": Type): ",Object(c.b)("em",{parentName:"p"},"Promise\u2039void\u203a")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/03847b2/packages/graphback-datasync/src/deltaSource.ts#L35"}),"packages/graphback-datasync/src/deltaSource.ts:35"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"updatedDocument")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Type")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise\u2039void\u203a")))}i.isMDXComponent=!0}}]);