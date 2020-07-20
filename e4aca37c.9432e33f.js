/*! For license information please see e4aca37c.9432e33f.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{250:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(1),o=(n(271),n(270));const a={id:"mongodb",title:"Using MongoDB in Graphback",sidebar_label:"MongoDB"},c={id:"databases/mongodb",isDocsHomePage:!1,title:"Using MongoDB in Graphback",description:"MongoDB is a general purpose, document-based, distributed database built for modern application developers.",source:"@site/../docs/databases/mongodb.md",permalink:"/docs/next/databases/mongodb",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/databases/mongodb.md",version:"next",sidebar_label:"MongoDB",sidebar:"docs",previous:{title:"Overview",permalink:"/docs/next/databases/overview"},next:{title:"Using PostgreSQL with Graphback",permalink:"/docs/next/databases/postgres"},latestVersionMainDocPermalink:"/docs/introduction"},i=[{value:"Installation",id:"installation",children:[]},{value:"Creating Database Connection",id:"creating-database-connection",children:[]},{value:"Using MongoDB Provider",id:"using-mongodb-provider",children:[]}],l={rightToc:i};function u({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.mongodb.com/"}),"MongoDB")," is a general purpose, document-based, distributed database built for modern application developers.\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@graphback/runtime-mongo"}),"Graphback MongoDB Provider")," package provides instant integration to your Mongo database, giving you a full implementation of the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/crud/overview"}),"CRUD API"),". "),Object(o.b)("p",null,"The package is built on top of the official ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://mongodb.github.io/node-mongodb-native"}),"MongoDB Node.js Driver"),"."),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,"Install with npm:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install @graphback/runtime-mongo mongodb\n")),Object(o.b)("p",null,"Install with yarn:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @graphback/runtime-mongo mongodb\n")),Object(o.b)("p",null,"Running either of the two commands will install the ",Object(o.b)("inlineCode",{parentName:"p"},"Graphback MongoDB Provider")," (",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@graphback/runtime-mongo"}),Object(o.b)("inlineCode",{parentName:"a"},"@graphback/runtime-mongo")),") and the MongoDB Driver (",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/mongodb"}),Object(o.b)("inlineCode",{parentName:"a"},"mongodb")),")."),Object(o.b)("h2",{id:"creating-database-connection"},"Creating Database Connection"),Object(o.b)("p",null,"You'll need a running MongoDB instance before initializing the connection. "),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If you do not have a running instance, you can use ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.docker.com/"}),"Docker")," to quickly spin up a MongoDB container by following the instructions given in\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.docker.com/_/mongo"}),"MongoDB Docker Image"),"."))),Object(o.b)("p",null,"The following code can be used to connect to your MongoDB."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { Db, MongoClient } from \"mongodb\";\n\n// Example Mongo Connection URL\nconst url = 'mongodb://localhost:27017';\n\nconst mongoClient: MongoClient = await MongoClient.connect(url);\n// get db instance\nconst db: Db = mongoClient.db('users');\n")),Object(o.b)("p",null,"Here we are connecting to the ",Object(o.b)("inlineCode",{parentName:"p"},"users")," database, on a MongoDB instance running locally."),Object(o.b)("p",null,"You can change the configurations variables to match the one you have."),Object(o.b)("p",null,"To learn more about the accepted configuration, visit the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://mongodb.github.io/node-mongodb-native/3.5/reference/connecting/"}),"MongoDB Driver Connection Options")," documentation."),Object(o.b)("h2",{id:"using-mongodb-provider"},"Using MongoDB Provider"),Object(o.b)("p",null,"The Graphback MongoDB provider exposes a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/create-mongodb-provider"}),Object(o.b)("inlineCode",{parentName:"a"},"createMongoDbProvider"))," method, which can be used to create data providers for each of your  data models. "),Object(o.b)("p",null,"The code below shows how you can create such a data provider creator and how it can be passed to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/build-graphback-api"}),Object(o.b)("inlineCode",{parentName:"a"},"buildGraphbackAPI")),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { Db, MongoClient } from \"mongodb\";\nimport { buildGraphbackAPI } from 'graphback';\nimport { createMongoDbProvider } from '@graphback/runtime-mongo';\n\n// highlight-start\n// Example Mongo Connection URL\nconst url = 'mongodb://localhost:27017';\n\nconst mongoClient: MongoClient = await MongoClient.connect(url);\n\n// get db instance\nconst db: Db = mongoClient.db('users');\n\n// create the MongoDB Data provider creator function\nconst dataProviderCreator = createMongoDbProvider(db);\n\n// highlight-end\n\n// the business model\nconst userModel = `\n \"\"\"\n @model\n \"\"\"\n type User {\n     id: ID!\n     username: String!\n }\n`;\n\n// Use the dataProvider in buildGraphbackAPI\nconst { resolvers, services, contextCreator } = buildGraphbackAPI(userModel, { dataProviderCreator });\n")),Object(o.b)("p",null,"The highlighted code does the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Define connection URL to the MongoDB."),Object(o.b)("li",{parentName:"ul"},"Create a connection to our Mongo database."),Object(o.b)("li",{parentName:"ul"},"Select the ",Object(o.b)("inlineCode",{parentName:"li"},"users")," database."),Object(o.b)("li",{parentName:"ul"},"And finally, create a data provider creator by using the ",Object(o.b)("inlineCode",{parentName:"li"},"createMongoDbProvider")," API. ")),Object(o.b)("p",null,"The rest of the code uses ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../api/build-graphback-api"}),Object(o.b)("inlineCode",{parentName:"a"},"buildGraphbackAPI"))," to create Graphback CRUD API based on the defined ",Object(o.b)("inlineCode",{parentName:"p"},"userModel")," model."),Object(o.b)("p",null,"Visit ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/model/datamodel"}),"Data Models")," to learn more about how to design your business models."))}u.isMDXComponent=!0},270:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,d=p["".concat(c,".").concat(f)]||p[f]||b[f]||a;return n?o.a.createElement(d,i({ref:t},u,{components:n})):o.a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},271:function(e,t,n){"use strict";e.exports=n(272)},272:function(e,t,n){"use strict";var r=n(273),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,u=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,b=o?Symbol.for("react.forward_ref"):60112,f=o?Symbol.for("react.suspense"):60113,d=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116,g="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function v(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||y}function j(){}function w(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||y}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=v.prototype;var k=w.prototype=new j;k.constructor=w,r(k,v.prototype),k.isPureReactComponent=!0;var C={current:null},D=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,n){var r,o={},c=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)D.call(t,r)&&!N.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var u=Array(l),s=0;s<l;s++)u[s]=arguments[s+2];o.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:a,type:e,key:c,ref:i,props:o,_owner:C.current}}function M(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var x=/\/+/g,S=[];function E(e,t,n,r){if(S.length){var o=S.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function _(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>S.length&&S.push(e)}function R(e,t,n){return null==e?0:function e(t,n,r,o){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var l=!1;if(null===t)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case a:case c:l=!0}}if(l)return r(o,t,""===n?"."+B(t,0):n),1;if(l=0,n=""===n?".":n+":",Array.isArray(t))for(var u=0;u<t.length;u++){var s=n+B(i=t[u],u);l+=e(i,s,r,o)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=g&&t[g]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),u=0;!(i=t.next()).done;)l+=e(i=i.value,s=n+B(i,u++),r,o);else if("object"===i)throw r=""+t,Error(h(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return l}(e,"",t,n)}function B(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function I(e,t){e.func.call(e.context,t,e.count++)}function $(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?T(e,r,n,(function(e){return e})):null!=e&&(M(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(x,"$&/")+"/")+n)),r.push(e))}function T(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(x,"$&/")+"/"),R(e,$,t=E(t,a,r,o)),_(t)}var A={current:null};function U(){var e=A.current;if(null===e)throw Error(h(321));return e}var G={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:C,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return T(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;R(e,I,t=E(null,null,t,n)),_(t)},count:function(e){return R(e,(function(){return null}),null)},toArray:function(e){var t=[];return T(e,t,null,(function(e){return e})),t},only:function(e){if(!M(e))throw Error(h(143));return e}},t.Component=v,t.Fragment=i,t.Profiler=u,t.PureComponent=w,t.StrictMode=l,t.Suspense=f,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G,t.cloneElement=function(e,t,n){if(null==e)throw Error(h(267,e));var o=r({},e.props),c=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=C.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in t)D.call(t,s)&&!N.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==u?u[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){u=Array(s);for(var p=0;p<s;p++)u[p]=arguments[p+2];o.children=u}return{$$typeof:a,type:e.type,key:c,ref:i,props:o,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=P,t.createFactory=function(e){var t=P.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:b,render:e}},t.isValidElement=M,t.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return U().useCallback(e,t)},t.useContext=function(e,t){return U().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return U().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return U().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return U().useLayoutEffect(e,t)},t.useMemo=function(e,t){return U().useMemo(e,t)},t.useReducer=function(e,t,n){return U().useReducer(e,t,n)},t.useRef=function(e){return U().useRef(e)},t.useState=function(e){return U().useState(e)},t.version="16.13.1"},273:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,i,l=c(e),u=1;u<arguments.length;u++){for(var s in n=Object(arguments[u]))o.call(n,s)&&(l[s]=n[s]);if(r){i=r(n);for(var p=0;p<i.length;p++)a.call(n,i[p])&&(l[i[p]]=n[i[p]])}}return l}}}]);