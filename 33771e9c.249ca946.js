/*! For license information please see 33771e9c.249ca946.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[256],{1315:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),u=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(r),f=a,d=s["".concat(o,".").concat(f)]||s[f]||b[f]||i;return r?n.a.createElement(d,l(l({ref:t},p),{},{components:r})):n.a.createElement(d,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1316:function(e,t,r){"use strict";e.exports=r(1317)},1317:function(e,t,r){"use strict";var a=r(1318),n="function"==typeof Symbol&&Symbol.for,i=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,l=n?Symbol.for("react.fragment"):60107,c=n?Symbol.for("react.strict_mode"):60108,p=n?Symbol.for("react.profiler"):60114,u=n?Symbol.for("react.provider"):60109,s=n?Symbol.for("react.context"):60110,b=n?Symbol.for("react.forward_ref"):60112,f=n?Symbol.for("react.suspense"):60113,d=n?Symbol.for("react.memo"):60115,h=n?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function g(e,t,r){this.props=e,this.context=t,this.refs=j,this.updater=r||O}function k(){}function v(e,t,r){this.props=e,this.context=t,this.refs=j,this.updater=r||O}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=g.prototype;var _=v.prototype=new k;_.constructor=v,a(_,g.prototype),_.isPureReactComponent=!0;var w={current:null},N=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function R(e,t,r){var a,n={},o=null,l=null;if(null!=t)for(a in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(o=""+t.key),t)N.call(t,a)&&!x.hasOwnProperty(a)&&(n[a]=t[a]);var c=arguments.length-2;if(1===c)n.children=r;else if(1<c){for(var p=Array(c),u=0;u<c;u++)p[u]=arguments[u+2];n.children=p}if(e&&e.defaultProps)for(a in c=e.defaultProps)void 0===n[a]&&(n[a]=c[a]);return{$$typeof:i,type:e,key:o,ref:l,props:n,_owner:w.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var P=/\/+/g,E=[];function C(e,t,r,a){if(E.length){var n=E.pop();return n.result=e,n.keyPrefix=t,n.func=r,n.context=a,n.count=0,n}return{result:e,keyPrefix:t,func:r,context:a,count:0}}function M(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>E.length&&E.push(e)}function F(e,t,r,a){var n=typeof e;"undefined"!==n&&"boolean"!==n||(e=null);var l=!1;if(null===e)l=!0;else switch(n){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case i:case o:l=!0}}if(l)return r(a,e,""===t?"."+$(e,0):t),1;if(l=0,t=""===t?".":t+":",Array.isArray(e))for(var c=0;c<e.length;c++){var p=t+$(n=e[c],c);l+=F(n,p,r,a)}else if(null===e||"object"!=typeof e?p=null:p="function"==typeof(p=m&&e[m]||e["@@iterator"])?p:null,"function"==typeof p)for(e=p.call(e),c=0;!(n=e.next()).done;)l+=F(n=n.value,p=t+$(n,c++),r,a);else if("object"===n)throw r=""+e,Error(y(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return l}function T(e,t,r){return null==e?0:F(e,"",t,r)}function $(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function D(e,t){e.func.call(e.context,t,e.count++)}function B(e,t,r){var a=e.result,n=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?L(e,a,r,(function(e){return e})):null!=e&&(S(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,n+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+r)),a.push(e))}function L(e,t,r,a,n){var i="";null!=r&&(i=(""+r).replace(P,"$&/")+"/"),T(e,B,t=C(t,i,a,n)),M(t)}var I={current:null};function A(){var e=I.current;if(null===e)throw Error(y(321));return e}var U={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:w,IsSomeRendererActing:{current:!1},assign:a};t.Children={map:function(e,t,r){if(null==e)return e;var a=[];return L(e,a,null,t,r),a},forEach:function(e,t,r){if(null==e)return e;T(e,D,t=C(null,null,t,r)),M(t)},count:function(e){return T(e,(function(){return null}),null)},toArray:function(e){var t=[];return L(e,t,null,(function(e){return e})),t},only:function(e){if(!S(e))throw Error(y(143));return e}},t.Component=g,t.Fragment=l,t.Profiler=p,t.PureComponent=v,t.StrictMode=c,t.Suspense=f,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,t.cloneElement=function(e,t,r){if(null==e)throw Error(y(267,e));var n=a({},e.props),o=e.key,l=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,c=w.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var p=e.type.defaultProps;for(u in t)N.call(t,u)&&!x.hasOwnProperty(u)&&(n[u]=void 0===t[u]&&void 0!==p?p[u]:t[u])}var u=arguments.length-2;if(1===u)n.children=r;else if(1<u){p=Array(u);for(var s=0;s<u;s++)p[s]=arguments[s+2];n.children=p}return{$$typeof:i,type:e.type,key:o,ref:l,props:n,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=R,t.createFactory=function(e){var t=R.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:b,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:h,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return A().useCallback(e,t)},t.useContext=function(e,t){return A().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return A().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return A().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return A().useLayoutEffect(e,t)},t.useMemo=function(e,t){return A().useMemo(e,t)},t.useReducer=function(e,t,r){return A().useReducer(e,t,r)},t.useRef=function(e){return A().useRef(e)},t.useState=function(e){return A().useState(e)},t.version="16.13.1"},1318:function(e,t,r){"use strict";var a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(n){return!1}}()?Object.assign:function(e,t){for(var r,l,c=o(e),p=1;p<arguments.length;p++){for(var u in r=Object(arguments[p]))n.call(r,u)&&(c[u]=r[u]);if(a){l=a(r);for(var s=0;s<l.length;s++)i.call(r,l[s])&&(c[l[s]]=r[l[s]])}}return c}},311:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var a=r(2),n=r(6),i=(r(1316),r(1315)),o={id:"_relationships_relationshipmetadatabuilder_.fieldrelationshipmetadata",title:"FieldRelationshipMetadata",sidebar_label:"FieldRelationshipMetadata"},l={unversionedId:"api/graphback-core/interfaces/_relationships_relationshipmetadatabuilder_.fieldrelationshipmetadata",id:"api/graphback-core/interfaces/_relationships_relationshipmetadatabuilder_.fieldrelationshipmetadata",isDocsHomePage:!1,title:"FieldRelationshipMetadata",description:"Hierarchy",source:"@site/../docs/api/graphback-core/interfaces/_relationships_relationshipmetadatabuilder_.fieldrelationshipmetadata.md",slug:"/api/graphback-core/interfaces/_relationships_relationshipmetadatabuilder_.fieldrelationshipmetadata",permalink:"/docs/next/api/graphback-core/interfaces/_relationships_relationshipmetadatabuilder_.fieldrelationshipmetadata",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-core/interfaces/_relationships_relationshipmetadatabuilder_.fieldrelationshipmetadata.md",version:"current",sidebar_label:"FieldRelationshipMetadata"},c=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"kind",id:"kind",children:[]},{value:"owner",id:"owner",children:[]},{value:"ownerField",id:"ownerfield",children:[]},{value:"relationFieldName",id:"relationfieldname",children:[]},{value:"<code>Optional</code> relationFieldType",id:"optional-relationfieldtype",children:[]},{value:"<code>Optional</code> relationForeignKey",id:"optional-relationforeignkey",children:[]},{value:"relationType",id:"relationtype",children:[]}]}],p={rightToc:c};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"FieldRelationshipMetadata"))),Object(i.b)("h2",{id:"index"},"Index"),Object(i.b)("h3",{id:"properties"},"Properties"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_relationships_relationshipmetadatabuilder_.fieldrelationshipmetadata#kind"}),"kind")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_relationships_relationshipmetadatabuilder_.fieldrelationshipmetadata#owner"}),"owner")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_relationships_relationshipmetadatabuilder_.fieldrelationshipmetadata#ownerfield"}),"ownerField")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_relationships_relationshipmetadatabuilder_.fieldrelationshipmetadata#relationfieldname"}),"relationFieldName")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_relationships_relationshipmetadatabuilder_.fieldrelationshipmetadata#optional-relationfieldtype"}),"relationFieldType")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_relationships_relationshipmetadatabuilder_.fieldrelationshipmetadata#optional-relationforeignkey"}),"relationForeignKey")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_relationships_relationshipmetadatabuilder_.fieldrelationshipmetadata#relationtype"}),"relationType"))),Object(i.b)("h2",{id:"properties-1"},"Properties"),Object(i.b)("h3",{id:"kind"},"kind"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"kind"),": ",Object(i.b)("em",{parentName:"p"},'"oneToMany" | "oneToOne" | "manyToOne"')),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/05664aa/packages/graphback-core/src/relationships/RelationshipMetadataBuilder.ts#L10"}),"packages/graphback-core/src/relationships/RelationshipMetadataBuilder.ts:10"))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"owner"},"owner"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"owner"),": ",Object(i.b)("em",{parentName:"p"},"GraphQLObjectType")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/05664aa/packages/graphback-core/src/relationships/RelationshipMetadataBuilder.ts#L11"}),"packages/graphback-core/src/relationships/RelationshipMetadataBuilder.ts:11"))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"ownerfield"},"ownerField"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"ownerField"),": ",Object(i.b)("em",{parentName:"p"},"GraphQLField\u2039any, any\u203a")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/05664aa/packages/graphback-core/src/relationships/RelationshipMetadataBuilder.ts#L12"}),"packages/graphback-core/src/relationships/RelationshipMetadataBuilder.ts:12"))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"relationfieldname"},"relationFieldName"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"relationFieldName"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/05664aa/packages/graphback-core/src/relationships/RelationshipMetadataBuilder.ts#L14"}),"packages/graphback-core/src/relationships/RelationshipMetadataBuilder.ts:14"))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"optional-relationfieldtype"},Object(i.b)("inlineCode",{parentName:"h3"},"Optional")," relationFieldType"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"relationFieldType"),"? : ",Object(i.b)("em",{parentName:"p"},"GraphQLScalarType")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/05664aa/packages/graphback-core/src/relationships/RelationshipMetadataBuilder.ts#L15"}),"packages/graphback-core/src/relationships/RelationshipMetadataBuilder.ts:15"))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"optional-relationforeignkey"},Object(i.b)("inlineCode",{parentName:"h3"},"Optional")," relationForeignKey"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"relationForeignKey"),"? : ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/05664aa/packages/graphback-core/src/relationships/RelationshipMetadataBuilder.ts#L16"}),"packages/graphback-core/src/relationships/RelationshipMetadataBuilder.ts:16"))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"relationtype"},"relationType"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"relationType"),": ",Object(i.b)("em",{parentName:"p"},"GraphQLObjectType")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/05664aa/packages/graphback-core/src/relationships/RelationshipMetadataBuilder.ts#L13"}),"packages/graphback-core/src/relationships/RelationshipMetadataBuilder.ts:13"))))}u.isMDXComponent=!0}}]);