/*! For license information please see e8c1fef7.f92d76da.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1144],{1214:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),i=(n(1330),n(1329)),a={id:"conflict-resolution-strategies",title:"Conflict Resolution strategies",sidebar_label:"Conflict Resolution strategies"},c={unversionedId:"datasync/conflict-resolution-strategies",id:"datasync/conflict-resolution-strategies",isDocsHomePage:!1,title:"Conflict Resolution strategies",description:"A conflict resolution strategy is used to resolve conflicts during Update and Delete Mutations respectively. In order to use a specific strategy, one has to specify it in the call to createDataSyncAPI for every model that they want to use the strategy with:",source:"@site/../docs/datasync/conflict-resolution-strategies.md",slug:"/datasync/conflict-resolution-strategies",permalink:"/docs/next/datasync/conflict-resolution-strategies",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/datasync/conflict-resolution-strategies.md",version:"current",sidebar_label:"Conflict Resolution strategies",sidebar:"docs",previous:{title:"Setting up Conflict Resolution",permalink:"/docs/next/datasync/conflict-resolution-intro"},next:{title:"GraphQL Migrations",permalink:"/docs/next/graphql-migrations/intro"}},l=[{value:"ClientSideWins",id:"clientsidewins",children:[]},{value:"ServerSideWins",id:"serversidewins",children:[]},{value:"ThrowOnConflict",id:"throwonconflict",children:[]},{value:"Custom Conflict Strategy",id:"custom-conflict-strategy",children:[]},{value:"ConflictError",id:"conflicterror",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A conflict resolution strategy is used to resolve conflicts during Update and Delete Mutations respectively. In order to use a specific strategy, one has to specify it in the call to ",Object(i.b)("inlineCode",{parentName:"p"},"createDataSyncAPI")," for every model that they want to use the strategy with:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import {\n  createDataSyncAPI,\n  ClientSideWins,\n  ServerSideWins\n} from '@graphback/datasync';\n\n\nconst {\n  typeDefs,\n  resolvers,\n  contextCreator\n} = createDataSyncAPI(\n  modelDefs, \n  { \n    db,\n    conflictConfig: {\n      enabled: true,\n      models: {\n        Comment: {\n          // highlight-next-line\n          conflictResolution: ClientSideWins\n        },\n        Note: {\n          // highlight-next-line\n          conflictResolution: ServerSideWins\n        }\n      }\n    }\n  }\n);\n")),Object(i.b)("p",null,"Graphback DataSync has three built-in conflict resolution strategies that come with it:"),Object(i.b)("h3",{id:"clientsidewins"},"ClientSideWins"),Object(i.b)("p",null,"This strategy ensures that updates always resolve to whatever the client had sent, even in the event of a conflict. If the corresponding object has been deleted in the database, it is restored when the client tries to update it. For delete conflicts, the corresponding object is always deleted, regardless of if it had been updated since the client last fetched it."),Object(i.b)("h3",{id:"serversidewins"},"ServerSideWins"),Object(i.b)("p",null,"This strategy ensures that in the event of a update conflict, the client's update will never overwrite any field that has changed since the client last fetched it. If the object has been deleted in the database, the client will be notified of it by way of a ",Object(i.b)("inlineCode",{parentName:"p"},"ConflictError"),". For delete conflicts, the client is informed of the conflict via a ",Object(i.b)("inlineCode",{parentName:"p"},"ConflictError"),"."),Object(i.b)("h3",{id:"throwonconflict"},"ThrowOnConflict"),Object(i.b)("p",null,"This strategy throws a ",Object(i.b)("inlineCode",{parentName:"p"},"ConflictError")," whenever a client tries to change a field on a document, that has also been changed on the server since the client last fetched it."),Object(i.b)("h3",{id:"custom-conflict-strategy"},"Custom Conflict Strategy"),Object(i.b)("p",null,"A custom conflict resolution strategy can be created by implementing ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictresolutionstrategy"}),"ConflictResolutionStrategy"),". As an example, take the implementation of the ",Object(i.b)("inlineCode",{parentName:"p"},"ClientSideWins")," strategy:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"export const ClientSideWins: ConflictResolutionStrategy = {\n  resolveUpdate(conflict: ConflictMetadata): any {\n    // highlight-start\n    const { serverData, clientDiff } = conflict\n\n    const resolved = Object.assign(serverData, clientDiff);\n\n    if (serverData[DataSyncFieldNames.deleted] === true) {\n      resolved[DataSyncFieldNames.deleted] = false;\n    }\n\n    return resolved;\n    // highlight-end\n  },\n  resolveDelete(conflict: ConflictMetadata): any {\n    // highlight-start\n    const { serverData, clientData } = conflict;\n\n    if (serverData[DataSyncFieldNames.deleted] === true) {\n      throw new ConflictError(conflict);\n    }\n\n    const resolved = Object.assign(serverData, { [DataSyncFieldNames.deleted]: true });\n\n    return resolved\n    // highlight-end\n  }\n}\n")),Object(i.b)("h4",{id:"resolveupdate"},Object(i.b)("inlineCode",{parentName:"h4"},"resolveUpdate")),Object(i.b)("p",null,"In the ",Object(i.b)("inlineCode",{parentName:"p"},"resolveUpdate")," function, it can be seen that the resolved object's fields are always set to what the client updated in the event of an update conflict. It can also be seen that if the object has been deleted, it will be restored, along with the updates."),Object(i.b)("h4",{id:"resolvedelete"},Object(i.b)("inlineCode",{parentName:"h4"},"resolveDelete")),Object(i.b)("p",null,"In the ",Object(i.b)("inlineCode",{parentName:"p"},"resolveDelete")," function, it can be seen that in the event of a delete conflict, the object is always deleted."),Object(i.b)("h3",{id:"conflicterror"},"ConflictError"),Object(i.b)("p",null,"This error is thrown when a Conflict Resolution Strategy is unable to resolve the conflict, and needs the client to resolve it instead. It is a subclass of ",Object(i.b)("inlineCode",{parentName:"p"},"Error")," with a ",Object(i.b)("inlineCode",{parentName:"p"},"conflictInfo")," property which is of the ",Object(i.b)("inlineCode",{parentName:"p"},"ConflictMetadata")," type. It can be created by passing a ",Object(i.b)("inlineCode",{parentName:"p"},"ConflictMetadata")," object in it's constructor:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const conflictError = new ConflictError({\n\n  /**\n   * This is the common base object for conflicts i.e. the object that the \n   * client had fetched in the past.\n   */\n  base,\n\n  /**\n   * This is the object as currently present in the database \n   */\n  serverData,\n\n  /**\n   * This is a map of the fields that have changed on the server since the\n   * client fetched it i.e. it is the diff of the `serverData` object against\n   * the `base` object\n   */\n  serverDiff,\n\n  /**\n   * This is the object sent by the client in the mutation\n   */\n  clientData,\n\n  /**\n   * This is a map of the fields that the client has changed i.e it is the diff\n   * of the `clientData` object against the `base` object\n   */\n  clientDiff,\n  operation: GraphbackOperationType.UPDATE;\n})\n")))}u.isMDXComponent=!0},1329:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(n),d=r,h=f["".concat(a,".").concat(d)]||f[d]||p[d]||i;return n?o.a.createElement(h,c(c({ref:t},s),{},{components:n})):o.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1330:function(e,t,n){"use strict";e.exports=n(1331)},1331:function(e,t,n){"use strict";var r=n(1332),o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,s=o?Symbol.for("react.profiler"):60114,u=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,h=o?Symbol.for("react.memo"):60115,b=o?Symbol.for("react.lazy"):60116,y="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function j(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||v}function O(){}function w(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||v}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},O.prototype=j.prototype;var C=w.prototype=new O;C.constructor=w,r(C,j.prototype),C.isPureReactComponent=!0;var S={current:null},D=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var r,o={},a=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(a=""+t.key),t)D.call(t,r)&&!E.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:i,type:e,key:a,ref:c,props:o,_owner:S.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var x=/\/+/g,_=[];function N(e,t,n,r){if(_.length){var o=_.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>_.length&&_.push(e)}function T(e,t,n,r){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var c=!1;if(null===e)c=!0;else switch(o){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case i:case a:c=!0}}if(c)return n(r,e,""===t?"."+$(e,0):t),1;if(c=0,t=""===t?".":t+":",Array.isArray(e))for(var l=0;l<e.length;l++){var s=t+$(o=e[l],l);c+=T(o,s,n,r)}else if(null===e||"object"!=typeof e?s=null:s="function"==typeof(s=y&&e[y]||e["@@iterator"])?s:null,"function"==typeof s)for(e=s.call(e),l=0;!(o=e.next()).done;)c+=T(o=o.value,s=t+$(o,l++),n,r);else if("object"===o)throw n=""+e,Error(m(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return c}function I(e,t,n){return null==e?0:T(e,"",t,n)}function $(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function A(e,t){e.func.call(e.context,t,e.count++)}function M(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?U(e,r,n,(function(e){return e})):null!=e&&(P(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(x,"$&/")+"/")+n)),r.push(e))}function U(e,t,n,r,o){var i="";null!=n&&(i=(""+n).replace(x,"$&/")+"/"),I(e,M,t=N(t,i,r,o)),R(t)}var F={current:null};function W(){var e=F.current;if(null===e)throw Error(m(321));return e}var q={ReactCurrentDispatcher:F,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:S,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return U(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;I(e,A,t=N(null,null,t,n)),R(t)},count:function(e){return I(e,(function(){return null}),null)},toArray:function(e){var t=[];return U(e,t,null,(function(e){return e})),t},only:function(e){if(!P(e))throw Error(m(143));return e}},t.Component=j,t.Fragment=c,t.Profiler=s,t.PureComponent=w,t.StrictMode=l,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,t.cloneElement=function(e,t,n){if(null==e)throw Error(m(267,e));var o=r({},e.props),a=e.key,c=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,l=S.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)D.call(t,u)&&!E.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==s?s[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){s=Array(u);for(var f=0;f<u;f++)s[f]=arguments[f+2];o.children=s}return{$$typeof:i,type:e.type,key:a,ref:c,props:o,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:b,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:h,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return W().useCallback(e,t)},t.useContext=function(e,t){return W().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return W().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return W().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return W().useLayoutEffect(e,t)},t.useMemo=function(e,t){return W().useMemo(e,t)},t.useReducer=function(e,t,n){return W().useReducer(e,t,n)},t.useRef=function(e){return W().useRef(e)},t.useState=function(e){return W().useState(e)},t.version="16.14.0"},1332:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,c,l=a(e),s=1;s<arguments.length;s++){for(var u in n=Object(arguments[s]))o.call(n,u)&&(l[u]=n[u]);if(r){c=r(n);for(var f=0;f<c.length;f++)i.call(n,c[f])&&(l[c[f]]=n[c[f]])}}return l}}}]);