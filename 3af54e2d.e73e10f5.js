/*! For license information please see 3af54e2d.e73e10f5.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[294],{1315:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,d=p["".concat(i,".").concat(f)]||p[f]||b[f]||o;return n?a.a.createElement(d,c(c({ref:t},u),{},{components:n})):a.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1316:function(e,t,n){"use strict";e.exports=n(1317)},1317:function(e,t,n){"use strict";var r=n(1318),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,i=a?Symbol.for("react.portal"):60106,c=a?Symbol.for("react.fragment"):60107,l=a?Symbol.for("react.strict_mode"):60108,u=a?Symbol.for("react.profiler"):60114,s=a?Symbol.for("react.provider"):60109,p=a?Symbol.for("react.context"):60110,b=a?Symbol.for("react.forward_ref"):60112,f=a?Symbol.for("react.suspense"):60113,d=a?Symbol.for("react.memo"):60115,m=a?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function O(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||y}function j(){}function w(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||y}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=O.prototype;var k=w.prototype=new j;k.constructor=w,r(k,O.prototype),k.isPureReactComponent=!0;var x={current:null},S=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,n){var r,a={},i=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)S.call(t,r)&&!P.hasOwnProperty(r)&&(a[r]=t[r]);var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){for(var u=Array(l),s=0;s<l;s++)u[s]=arguments[s+2];a.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===a[r]&&(a[r]=l[r]);return{$$typeof:o,type:e,key:i,ref:c,props:a,_owner:x.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var _=/\/+/g,D=[];function E(e,t,n,r){if(D.length){var a=D.pop();return a.result=e,a.keyPrefix=t,a.func=n,a.context=r,a.count=0,a}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function L(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>D.length&&D.push(e)}function q(e,t,n,r){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case i:c=!0}}if(c)return n(r,e,""===t?"."+R(e,0):t),1;if(c=0,t=""===t?".":t+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=t+R(a=e[l],l);c+=q(a,u,n,r)}else if(null===e||"object"!=typeof e?u=null:u="function"==typeof(u=h&&e[h]||e["@@iterator"])?u:null,"function"==typeof u)for(e=u.call(e),l=0;!(a=e.next()).done;)c+=q(a=a.value,u=t+R(a,l++),n,r);else if("object"===a)throw n=""+e,Error(g(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return c}function I(e,t,n){return null==e?0:q(e,"",t,n)}function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function $(e,t){e.func.call(e.context,t,e.count++)}function Q(e,t,n){var r=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?A(e,r,n,(function(e){return e})):null!=e&&(C(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(_,"$&/")+"/")+n)),r.push(e))}function A(e,t,n,r,a){var o="";null!=n&&(o=(""+n).replace(_,"$&/")+"/"),I(e,Q,t=E(t,o,r,a)),L(t)}var M={current:null};function T(){var e=M.current;if(null===e)throw Error(g(321));return e}var U={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return A(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;I(e,$,t=E(null,null,t,n)),L(t)},count:function(e){return I(e,(function(){return null}),null)},toArray:function(e){var t=[];return A(e,t,null,(function(e){return e})),t},only:function(e){if(!C(e))throw Error(g(143));return e}},t.Component=O,t.Fragment=c,t.Profiler=u,t.PureComponent=w,t.StrictMode=l,t.Suspense=f,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,t.cloneElement=function(e,t,n){if(null==e)throw Error(g(267,e));var a=r({},e.props),i=e.key,c=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,l=x.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in t)S.call(t,s)&&!P.hasOwnProperty(s)&&(a[s]=void 0===t[s]&&void 0!==u?u[s]:t[s])}var s=arguments.length-2;if(1===s)a.children=n;else if(1<s){u=Array(s);for(var p=0;p<s;p++)u[p]=arguments[p+2];a.children=u}return{$$typeof:o,type:e.type,key:i,ref:c,props:a,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=N,t.createFactory=function(e){var t=N.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:b,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return T().useCallback(e,t)},t.useContext=function(e,t){return T().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return T().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return T().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return T().useLayoutEffect(e,t)},t.useMemo=function(e,t){return T().useMemo(e,t)},t.useReducer=function(e,t,n){return T().useReducer(e,t,n)},t.useRef=function(e){return T().useRef(e)},t.useState=function(e){return T().useState(e)},t.version="16.13.1"},1318:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var n,c,l=i(e),u=1;u<arguments.length;u++){for(var s in n=Object(arguments[u]))a.call(n,s)&&(l[s]=n[s]);if(r){c=r(n);for(var p=0;p<c.length;p++)o.call(n,c[p])&&(l[c[p]]=n[c[p]])}}return l}},349:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),o=(n(1316),n(1315)),i={id:"sqlite",title:"Using SQLite with Graphback",sidebar_label:"SQLite"},c={unversionedId:"databases/sqlite",id:"databases/sqlite",isDocsHomePage:!1,title:"Using SQLite with Graphback",description:"SQLite is an open-source, zero-configuration, self-contained, stand-alone, transaction relational database engine designed to be embedded into an application. Graphback Knex Provider package provides instant integration to your SQLite database, giving you implementation of the CRUD API.",source:"@site/../docs/databases/sqlite.md",slug:"/databases/sqlite",permalink:"/docs/next/databases/sqlite",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/databases/sqlite.md",version:"current",sidebar_label:"SQLite",sidebar:"docs",previous:{title:"Using PostgreSQL with Graphback",permalink:"/docs/next/databases/postgres"},next:{title:"Subscriptions",permalink:"/docs/next/subscriptions/intro"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Configuring the Database",id:"configuring-the-database",children:[]},{value:"Using Knex Provider",id:"using-knex-provider",children:[]}],u={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.sqlite.org/index.html"}),"SQLite")," is an open-source, zero-configuration, self-contained, stand-alone, transaction relational database engine designed to be embedded into an application. ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@graphback/runtime-knex"}),"Graphback Knex Provider")," package provides instant integration to your SQLite database, giving you implementation of the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/crud/overview"}),"CRUD API"),". "),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"}," SQLite is a good choice for testing or development purposes. We do not recommend using it in production environment. For a production setup, you can use ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/databases/postgres"}),"PostgreSQL"),". "))),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,"Install with npm:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install @graphback/runtime-knex knex\n")),Object(o.b)("p",null,"Install with yarn:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @graphback/runtime-knex knex\n")),Object(o.b)("h2",{id:"configuring-the-database"},"Configuring the Database"),Object(o.b)("p",null,"The following code shows how a SQLite database can be configured."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'import Knex from \'knex\';\n\nconst dbConfig = {\n    client: "sqlite3",\n    connection: {\n      filename: "./users.sqlite"\n    }\n};\n\nconst db = Knex(dbConfig);\n')),Object(o.b)("p",null,"Visit ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://knexjs.org/#Installation-client"}),"Knex Connection Options")," to learn more about the different connection options. "),Object(o.b)("h2",{id:"using-knex-provider"},"Using Knex Provider"),Object(o.b)("p",null,"The provider exposes a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider"}),Object(o.b)("inlineCode",{parentName:"a"},"SQLiteKnexDBDataProvider"))," API, which can be used to create a SQLite data providers for each of your data models. "),Object(o.b)("p",null,"The code below shows how to create a data provider creator for a SQLite database and how to use it in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/graphback/modules/_buildgraphbackapi_"}),Object(o.b)("inlineCode",{parentName:"a"},"buildGraphbackAPI")),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'import Knex from \'knex\';\nimport { migrateDB } from \'graphql-migrations\';\nimport { ModelDefinition } from \'@graphback/core\';\nimport { SQLiteKnexDBDataProvider } from \'@graphback/runtime-knex\';\n\n// highlight-start\n// database configuration\nconst dbConfig = {\n    client: "sqlite3",\n    connection: {\n      filename: "./users.sqlite"\n    }\n};\n\n// create the connection to the database\nconst db = Knex(dbConfig);\n\n// the business model\nconst userModel = `\n """\n @model\n """\n type User {\n     id: ID!\n     username: String!\n }\n`;\n\n// create the user table in database \nmigrateDB(dbConfig, userModel, { }).then(() => {\n  console.log("Migrated database");\n});\n\n// create the SQLite data provider\nconst dataProviderCreator = (model: ModelDefinition) => new SQLiteKnexDBDataProvider(model, db);\n\n// highlight-end\n\n// Use the dataProvider in buildGraphbackAPI\nconst { resolvers, services, contextCreator } = buildGraphbackAPI(userModel, { dataProviderCreator });\n')),Object(o.b)("p",null,"The highlighted code does the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Define connection configuration to the database."),Object(o.b)("li",{parentName:"ul"},"Create a connection to SQLite database using Knex."),Object(o.b)("li",{parentName:"ul"},"Define the user model."),Object(o.b)("li",{parentName:"ul"},"Perform the migrations using ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/graphql-migrations/intro"}),"GraphQL Migrations")," to create the ",Object(o.b)("inlineCode",{parentName:"li"},"user")," table."),Object(o.b)("li",{parentName:"ul"},"And finally, create a data provider creator which will be applied to our model, using the ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider"}),Object(o.b)("inlineCode",{parentName:"a"},"SQLiteKnexDBDataProvider"))," API. ")),Object(o.b)("p",null,"The rest of the code uses ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/graphback/modules/_buildgraphbackapi_"}),Object(o.b)("inlineCode",{parentName:"a"},"buildGraphbackAPI"))," to create Graphback CRUD API based on the defined ",Object(o.b)("inlineCode",{parentName:"p"},"userModel")," model."),Object(o.b)("p",null,"Visit ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/model/datamodel"}),"Data Models")," to learn more about how to design your business models."))}s.isMDXComponent=!0}}]);