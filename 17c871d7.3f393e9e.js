/*! For license information please see 17c871d7.3f393e9e.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{1315:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return y}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=o.a.createContext({}),p=function(e){var t=o.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},f=function(e){var t=p(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),f=p(r),b=n,y=f["".concat(c,".").concat(b)]||f[b]||s[b]||a;return r?o.a.createElement(y,u(u({ref:t},i),{},{components:r})):o.a.createElement(y,u({ref:t},i))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=b;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:n,c[1]=u;for(var i=2;i<a;i++)c[i]=r[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},1316:function(e,t,r){"use strict";e.exports=r(1317)},1317:function(e,t,r){"use strict";var n=r(1318),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,u=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,i=o?Symbol.for("react.profiler"):60114,p=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,s=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.memo"):60115,d=o?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function j(e,t,r){this.props=e,this.context=t,this.refs=O,this.updater=r||g}function v(){}function w(e,t,r){this.props=e,this.context=t,this.refs=O,this.updater=r||g}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=j.prototype;var k=w.prototype=new v;k.constructor=w,n(k,j.prototype),k.isPureReactComponent=!0;var C={current:null},S=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var n,o={},c=null,u=null;if(null!=t)for(n in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(c=""+t.key),t)S.call(t,n)&&!x.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var i=Array(l),p=0;p<l;p++)i[p]=arguments[p+2];o.children=i}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===o[n]&&(o[n]=l[n]);return{$$typeof:a,type:e,key:c,ref:u,props:o,_owner:C.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var _=/\/+/g,$=[];function N(e,t,r,n){if($.length){var o=$.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>$.length&&$.push(e)}function T(e,t,r,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var u=!1;if(null===e)u=!0;else switch(o){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case a:case c:u=!0}}if(u)return r(n,e,""===t?"."+I(e,0):t),1;if(u=0,t=""===t?".":t+":",Array.isArray(e))for(var l=0;l<e.length;l++){var i=t+I(o=e[l],l);u+=T(o,i,r,n)}else if(null===e||"object"!=typeof e?i=null:i="function"==typeof(i=m&&e[m]||e["@@iterator"])?i:null,"function"==typeof i)for(e=i.call(e),l=0;!(o=e.next()).done;)u+=T(o=o.value,i=t+I(o,l++),r,n);else if("object"===o)throw r=""+e,Error(h(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return u}function D(e,t,r){return null==e?0:T(e,"",t,r)}function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function G(e,t){e.func.call(e.context,t,e.count++)}function A(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?L(e,n,r,(function(e){return e})):null!=e&&(P(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(_,"$&/")+"/")+r)),n.push(e))}function L(e,t,r,n,o){var a="";null!=r&&(a=(""+r).replace(_,"$&/")+"/"),D(e,A,t=N(t,a,n,o)),R(t)}var M={current:null};function U(){var e=M.current;if(null===e)throw Error(h(321));return e}var q={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:C,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return L(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;D(e,G,t=N(null,null,t,r)),R(t)},count:function(e){return D(e,(function(){return null}),null)},toArray:function(e){var t=[];return L(e,t,null,(function(e){return e})),t},only:function(e){if(!P(e))throw Error(h(143));return e}},t.Component=j,t.Fragment=u,t.Profiler=i,t.PureComponent=w,t.StrictMode=l,t.Suspense=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,t.cloneElement=function(e,t,r){if(null==e)throw Error(h(267,e));var o=n({},e.props),c=e.key,u=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,l=C.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(p in t)S.call(t,p)&&!x.hasOwnProperty(p)&&(o[p]=void 0===t[p]&&void 0!==i?i[p]:t[p])}var p=arguments.length-2;if(1===p)o.children=r;else if(1<p){i=Array(p);for(var f=0;f<p;f++)i[f]=arguments[f+2];o.children=i}return{$$typeof:a,type:e.type,key:c,ref:u,props:o,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:p,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:d,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return U().useCallback(e,t)},t.useContext=function(e,t){return U().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return U().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return U().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return U().useLayoutEffect(e,t)},t.useMemo=function(e,t){return U().useMemo(e,t)},t.useReducer=function(e,t,r){return U().useReducer(e,t,r)},t.useRef=function(e){return U().useRef(e)},t.useState=function(e){return U().useState(e)},t.version="16.13.1"},1318:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,u,l=c(e),i=1;i<arguments.length;i++){for(var p in r=Object(arguments[i]))o.call(r,p)&&(l[p]=r[p]);if(n){u=n(r);for(var f=0;f<u.length;f++)a.call(r,u[f])&&(l[u[f]]=r[u[f]])}}return l}},180:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(6),a=(r(1316),r(1315)),c={id:"create-graphback",title:"Create Graphback",sidebar_label:"Create Graphback"},u={unversionedId:"cli/create-graphback",id:"cli/create-graphback",isDocsHomePage:!1,title:"Create Graphback",description:"Create Graphback is a command-line utility for creating Graphback applications.",source:"@site/../docs/cli/create-graphback.md",slug:"/cli/create-graphback",permalink:"/docs/next/cli/create-graphback",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/cli/create-graphback.md",version:"current",sidebar_label:"Create Graphback",sidebar:"docs",previous:{title:"Create your own Graphback plugin",permalink:"/docs/next/plugins/create"},next:{title:"Graphback CLI",permalink:"/docs/next/cli/graphback-cli"}},l=[{value:"Usage",id:"usage",children:[]}],i={rightToc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/create-graphback"}),"Create Graphback")," is a command-line utility for creating Graphback applications."),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("p",null,"You can initialise a Graphback project by either of the following commands:"),Object(a.b)("p",null,"With npx:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npx create-graphback my-project\n")),Object(a.b)("p",null,"With npm init:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm init graphback my-project\n")),Object(a.b)("p",null,"The CLI will ask you to pick from one of a number of templates. Once chosen, the template will be downloaded to your computer."),Object(a.b)("p",null,"Change into your project folder:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"cd my-awesome-project\n")),Object(a.b)("p",null,"Install dependencies with yarn (or npm):"),Object(a.b)("p",null,"yarn:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn\n")),Object(a.b)("p",null,"npm:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm install\n")),Object(a.b)("p",null,"The project will have a GraphQL schema file with some example types which you will likely want to change. Learn how to ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"../model/datamodel"}),"design your data models"),"."),Object(a.b)("p",null,"Each template will be different, so you should follow the guide in your new project's ",Object(a.b)("inlineCode",{parentName:"p"},"README")," to complete the setup."))}p.isMDXComponent=!0}}]);