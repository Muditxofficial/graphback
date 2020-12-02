(window.webpackJsonp=window.webpackJsonp||[]).push([[1025],{1095:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(1329)),c={id:"intro",title:"Introduction to Data Synchronization",sidebar_label:"What is Data Synchronization?"},o={unversionedId:"datasync/intro",id:"version-1.0/datasync/intro",isDocsHomePage:!1,title:"Introduction to Data Synchronization",description:"The @graphback/datasync package consists of the Data Synchronization Schema plugin and compatible data sources, provides out of the box Data Synchronization strategies for GraphQL clients with offline functionality e.g. Offix.",source:"@site/versioned_docs/version-1.0/datasync/intro.md",slug:"/datasync/intro",permalink:"/docs/datasync/intro",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-1.0/datasync/intro.md",version:"1.0",sidebar_label:"What is Data Synchronization?",sidebar:"version-1.0/docs",previous:{title:"Authentication with Keycloak",permalink:"/docs/authentication/keycloak"},next:{title:"Setting up Delta Queries",permalink:"/docs/datasync/delta-queries"}},s=[{value:"Motivation",id:"motivation",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]}],l={rightToc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"@graphback/datasync")," package consists of the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin"}),"Data Synchronization Schema plugin")," and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/graphback-datasync/classes/_providers_datasyncmongodbdataprovider_.datasyncmongodbdataprovider"}),"compatible data sources"),", provides out of the box Data Synchronization strategies for GraphQL clients with offline functionality e.g. ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://offix.dev"}),"Offix"),". "),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Currently this plugin ",Object(i.b)("strong",{parentName:"p"},"only")," supports MongoDB data sources, with support for other kinds of data sources coming in a future release."))),Object(i.b)("h2",{id:"motivation"},"Motivation"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"@graphback/datasync")," package is meant to be naturally extend ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://offix.dev"}),"Offix")," with a GraphQLCRUD compliant API:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Fetch data that was changed based on the client side timestamp"),Object(i.b)("li",{parentName:"ul"},"Ensure data consistency using timestamp provided")),Object(i.b)("p",null,"It achieves this by:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Providing Delta Queries"),": Delta queries can be used by GraphQL clients to refresh changes in data between periods of connectivity outages. "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Providing server-side Conflict Resolution capabilities"),": For mutations that are applied offline, this provides the server with the ability to resolve conflicts between server and client.")),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"The Graphback Data Synchronization package provides schema plugins as well as data sources for all supported data synchronization features."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm install @graphback/datasync\n")),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"Add annotations to your data models:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n// highlight-next-line\n@datasync\n"""\ntype User {\n  id: _GraphbackObjectID\n  name: String\n}\n')),Object(i.b)("p",null,"The preferred and simpest way to add data sync functionality is to use the ",Object(i.b)("inlineCode",{parentName:"p"},"createDataSyncAPI")," function which wraps ",Object(i.b)("inlineCode",{parentName:"p"},"buildGraphbackAPI"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { createDataSyncAPI } from '@graphback/datasync'\n\nconst { typeDefs, resolvers, contextCreator } = createDataSyncAPI(modelDefs, { db });\n")),Object(i.b)("p",null,"Alternatively, you can use the default ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/getting-started/add-to-project#configure-graphback"}),Object(i.b)("inlineCode",{parentName:"a"},"buildGraphbackAPI"))," and add the ",Object(i.b)("inlineCode",{parentName:"p"},"DataSyncPlugin")," plugin directly:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { buildGraphbackAPI } from 'graphback';\nimport { DataSyncPlugin } from '@graphback/datasync'\n\nconst { typeDefs, resolvers, contextCreator } = buildGraphbackAPI(schema, {\n  ...,\n  plugins: [\n    new DataSyncPlugin({\n      enabled: true\n    })\n  ]\n});\n")),Object(i.b)("p",null,"Or if you are invoking the plugin with ",Object(i.b)("inlineCode",{parentName:"p"},"graphback generate"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title=".graphqlrc"',title:'".graphqlrc"'}),"schema: './src/schema.graphql'\ndocuments: './client/src/graphql/**/*.graphql'\nextensions:\n  graphback:\n    # path to data mode file(s)\n    model: './model/datamodel.graphql'\n    plugins:\n      ...\n      graphback-datasync:\n        packageName: '@graphback/datasync' # required to dynamically load\n        conflictConfig: \n          models:\n            Note:\n              enabled: true\n")),Object(i.b)("p",null,"For a more in-depth guide to setting up data synchronization features, check ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/datasync/delta-queries"}),"this")," page."))}p.isMDXComponent=!0},1329:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(a),u=n,h=b["".concat(c,".").concat(u)]||b[u]||d[u]||i;return a?r.a.createElement(h,o(o({ref:t},l),{},{components:a})):r.a.createElement(h,o({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);