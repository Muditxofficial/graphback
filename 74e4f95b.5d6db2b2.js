(window.webpackJsonp=window.webpackJsonp||[]).push([[575],{1329:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return u}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),s=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=s(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,u=d["".concat(i,".").concat(m)]||d[m]||p[m]||r;return t?o.a.createElement(u,c(c({ref:n},l),{},{components:t})):o.a.createElement(u,c({ref:n},l))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var c={};for(var b in n)hasOwnProperty.call(n,b)&&(c[b]=n[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},644:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return b})),t.d(n,"default",(function(){return s}));var a=t(3),o=t(7),r=(t(0),t(1329)),i={id:"mongodb",title:"Using MongoDB in Graphback",sidebar_label:"MongoDB"},c={unversionedId:"databases/mongodb",id:"version-0.16.x/databases/mongodb",isDocsHomePage:!1,title:"Using MongoDB in Graphback",description:"MongoDB is a general purpose, document-based, distributed database built for modern application developers.",source:"@site/versioned_docs/version-0.16.x/databases/mongodb.md",slug:"/databases/mongodb",permalink:"/docs/0.16.x/databases/mongodb",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.16.x/databases/mongodb.md",version:"0.16.x",sidebar_label:"MongoDB",sidebar:"version-0.16.x/docs",previous:{title:"Overview",permalink:"/docs/0.16.x/databases/overview"},next:{title:"Using PostgreSQL with Graphback",permalink:"/docs/0.16.x/databases/postgres"}},b=[{value:"Installation",id:"installation",children:[]},{value:"Creating Database Connection",id:"creating-database-connection",children:[]},{value:"Using MongoDB Provider",id:"using-mongodb-provider",children:[]}],l={rightToc:b};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.mongodb.com/"}),"MongoDB")," is a general purpose, document-based, distributed database built for modern application developers.\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@graphback/runtime-mongo"}),"Graphback MongoDB Provider")," package provides instant integration to your Mongo database, giving you a full implementation of the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.16.x/crud/overview"}),"CRUD API"),". "),Object(r.b)("p",null,"The package is built on top of the official ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://mongodb.github.io/node-mongodb-native"}),"MongoDB Node.js Driver"),"."),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("p",null,"Install with npm:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install @graphback/runtime-mongo mongodb\n")),Object(r.b)("p",null,"Install with yarn:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @graphback/runtime-mongo mongodb\n")),Object(r.b)("p",null,"Running either of the two commands will install the ",Object(r.b)("inlineCode",{parentName:"p"},"Graphback MongoDB Provider")," (",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@graphback/runtime-mongo"}),Object(r.b)("inlineCode",{parentName:"a"},"@graphback/runtime-mongo")),") and the MongoDB Driver (",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/mongodb"}),Object(r.b)("inlineCode",{parentName:"a"},"mongodb")),")."),Object(r.b)("h2",{id:"creating-database-connection"},"Creating Database Connection"),Object(r.b)("p",null,"You'll need a running MongoDB instance before initializing the connection. "),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If you do not have a running instance, you can use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.docker.com/"}),"Docker")," to quickly spin up a MongoDB container by following the instructions given in\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://hub.docker.com/_/mongo"}),"MongoDB Docker Image"),"."))),Object(r.b)("p",null,"The following code can be used to connect to your MongoDB."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { Db, MongoClient } from \"mongodb\";\n\n// Example Mongo Connection URL\nconst url = 'mongodb://localhost:27017';\n\nconst mongoClient: MongoClient = await MongoClient.connect(url);\n// get db instance\nconst db: Db = mongoClient.db('users');\n")),Object(r.b)("p",null,"Here we are connecting to the ",Object(r.b)("inlineCode",{parentName:"p"},"users")," database, on a MongoDB instance running locally."),Object(r.b)("p",null,"You can change the configurations variables to match the one you have."),Object(r.b)("p",null,"To learn more about the accepted configuration, visit the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://mongodb.github.io/node-mongodb-native/3.5/reference/connecting/"}),"MongoDB Driver Connection Options")," documentation."),Object(r.b)("h2",{id:"using-mongodb-provider"},"Using MongoDB Provider"),Object(r.b)("p",null,"The Graphback MongoDB provider exposes a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.16.x/api/graphback-runtime-mongodb/modules/_createmongodbprovider_"}),Object(r.b)("inlineCode",{parentName:"a"},"createMongoDbProvider"))," method, which can be used to create data providers for each of your  data models. "),Object(r.b)("p",null,"The code below shows how you can create such a data provider creator and how it can be passed to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.16.x/api/graphback/modules/_buildgraphbackapi_"}),Object(r.b)("inlineCode",{parentName:"a"},"buildGraphbackAPI")),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { Db, MongoClient } from \"mongodb\";\nimport { buildGraphbackAPI } from 'graphback';\nimport { createMongoDbProvider } from '@graphback/runtime-mongo';\n\n// highlight-start\n// Example Mongo Connection URL\nconst url = 'mongodb://localhost:27017';\n\nconst mongoClient: MongoClient = await MongoClient.connect(url);\n\n// get db instance\nconst db: Db = mongoClient.db('users');\n\n// create the MongoDB Data provider creator function\nconst dataProviderCreator = createMongoDbProvider(db);\n\n// highlight-end\n\n// the business model\nconst userModel = `\n \"\"\"\n @model\n \"\"\"\n type User {\n     _id: GraphbackObjectID!\n     username: String!\n }\n\n scalar GraphbackObjectID\n`;\n\n// Use the dataProvider in buildGraphbackAPI\nconst { resolvers, services, contextCreator } = buildGraphbackAPI(userModel, { dataProviderCreator });\n")),Object(r.b)("p",null,"The highlighted code does the following:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Define connection URL to the MongoDB."),Object(r.b)("li",{parentName:"ul"},"Create a connection to our Mongo database."),Object(r.b)("li",{parentName:"ul"},"Select the ",Object(r.b)("inlineCode",{parentName:"li"},"users")," database."),Object(r.b)("li",{parentName:"ul"},"And finally, create a data provider creator by using the ",Object(r.b)("inlineCode",{parentName:"li"},"createMongoDbProvider")," API. ")),Object(r.b)("p",null,"The rest of the code uses ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.16.x/api/graphback/modules/_buildgraphbackapi_"}),Object(r.b)("inlineCode",{parentName:"a"},"buildGraphbackAPI"))," to create Graphback CRUD API based on the defined ",Object(r.b)("inlineCode",{parentName:"p"},"userModel")," model."),Object(r.b)("p",null,"Visit ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.16.x/model/datamodel"}),"Data Models")," to learn more about how to design your business models."))}s.isMDXComponent=!0}}]);