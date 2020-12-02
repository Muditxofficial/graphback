(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{1329:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},s=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),s=p(a),m=n,O=s["".concat(c,".").concat(m)]||s[m]||d[m]||i;return a?r.a.createElement(O,b(b({ref:t},l),{},{components:a})):r.a.createElement(O,b({ref:t},l))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=m;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:n,c[1]=b;for(var l=2;l<i;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},244:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(1329)),c={id:"scalars",title:"Graphback Scalars",sidebar_label:"Graphback Scalars"},b={unversionedId:"model/scalars",id:"version-0.16.x/model/scalars",isDocsHomePage:!1,title:"Graphback Scalars",description:"Graphback supports commonly used Int, Float, String, Boolean, ID GraphQL scalars types. On top of these scalars, Graphback goes a step further by bringing in support of additional integration of scalar types making writing modern applications easy. This integration, offers",source:"@site/versioned_docs/version-0.16.x/model/scalars.md",slug:"/model/scalars",permalink:"/docs/0.16.x/model/scalars",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.16.x/model/scalars.md",version:"0.16.x",sidebar_label:"Graphback Scalars",sidebar:"version-0.16.x/docs",previous:{title:"Annotations",permalink:"/docs/0.16.x/model/annotations"},next:{title:"CRUD Overview",permalink:"/docs/0.16.x/crud/overview"}},o=[{value:"Table Summary",id:"table-summary",children:[]},{value:"Example Usage",id:"example-usage",children:[]}],l={rightToc:o};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Graphback supports commonly used ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://graphql.org/learn/schema/#scalar-types"}),Object(i.b)("inlineCode",{parentName:"a"},"Int"),", ",Object(i.b)("inlineCode",{parentName:"a"},"Float"),", ",Object(i.b)("inlineCode",{parentName:"a"},"String"),", ",Object(i.b)("inlineCode",{parentName:"a"},"Boolean"),", ",Object(i.b)("inlineCode",{parentName:"a"},"ID")," GraphQL scalars")," types. On top of these scalars, Graphback goes a step further by bringing in support of ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#table-summary"}),"additional integration of scalar types")," making writing modern applications easy. This integration, offers "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Out of the box proven scalar resolvers thanks to ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.npmjs.com/package/graphql-scalars"}),"GraphQL Scalars")," library. "),Object(i.b)("li",{parentName:"ul"},"Generation of the required input types for filtering except for ",Object(i.b)("inlineCode",{parentName:"li"},"GraphbackJSONObject")," and ",Object(i.b)("inlineCode",{parentName:"li"},"GraphbackJSON"),".   "),Object(i.b)("li",{parentName:"ul"},"Automatic inferring of the required underlying database when using the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/0.16.x/graphql-migrations/intro"}),"GraphQL Migrations")," package.")),Object(i.b)("p",null,"The table below shows the scalar types that Graphback supports out of the box."),Object(i.b)("h2",{id:"table-summary"},"Table Summary"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Scalar"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Database Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"GraphbackTime")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A time string at UTC, such as 10:15:30Z, compliant with the ",Object(i.b)("inlineCode",{parentName:"td"},"full-time")," format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"time"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"GraphbackDate")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A date string, such as 2007-12-03, compliant with the ",Object(i.b)("inlineCode",{parentName:"td"},"full-date")," format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"date"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"GraphbackDateTime")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the ",Object(i.b)("inlineCode",{parentName:"td"},"date-time")," format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"datetime"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"GraphbackObjectID")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A field whose value conforms with the standard mongodb object ID as described here: ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"https://docs.mongodb.com/manual/reference/method/ObjectId/#ObjectId"}),"https://docs.mongodb.com/manual/reference/method/ObjectId/#ObjectId"),". You will need to have the ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"https://www.npmjs.com/package/mongodb"}),Object(i.b)("inlineCode",{parentName:"a"},"mongodb"))," package installed in order to use this"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"varchar(24)"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"GraphbackJSONObject")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The ",Object(i.b)("inlineCode",{parentName:"td"},"JSONObject")," scalar type represents JSON objects as specified by ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf"}),"ECMA-404"),"."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"json"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"GraphbackJSON")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The ",Object(i.b)("inlineCode",{parentName:"td"},"JSON")," scalar type represents JSON values as specified by ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf"}),"ECMA-404"),"."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"json"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"GraphbackTimestamp")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The javascript ",Object(i.b)("inlineCode",{parentName:"td"},"Date")," as integer. Type represents date and time as number of milliseconds from start of UNIX epoch."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"timestamp"))))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"To be able to use either of those scalars, they will need to be defined in your ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/0.16.x/model/datamodel"}),"Graphback Business Model")," file as shown in the example below."))),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Custom scalar types will need to be specified as you normally would i.e specifying the scalar in the model and configuring the corresponding resolvers."))),Object(i.b)("h2",{id:"example-usage"},"Example Usage"),Object(i.b)("p",null,"Take an example ",Object(i.b)("inlineCode",{parentName:"p"},"Note")," model, which uses each of the scalar types: ",Object(i.b)("inlineCode",{parentName:"p"},"ID"),", ",Object(i.b)("inlineCode",{parentName:"p"},"String"),", ",Object(i.b)("inlineCode",{parentName:"p"},"GraphbackDateTime"),". "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),'// highlight-start\n# Graphback DateTime scalar.\nscalar GraphbackDateTime\n// highlight-end\n\n""" @model """\ntype Note {\n  id: ID!\n  title: String!\n  // highlight-start\n  """\n  Usage of the Graphback DateTime scalar\n  """\n  createdAt: GraphbackDateTime\n  // highlight-end\n}\n')),Object(i.b)("p",null,"The highlighted code shows how you can define and use one of the Graphback scalars."),Object(i.b)("p",null,"Graphback generates a filter input type for each model in the schema."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql",metastring:"{4}","{4}":!0}),"input NoteFilter {\n  id: IDInput\n  title: StringInput\n  createdAt: GraphbackDateTimeInput\n  and: [NoteFilter!]\n  or: [NoteFilter!]\n  not: NoteFilter\n}\n")),Object(i.b)("p",null,"With the generated ",Object(i.b)("inlineCode",{parentName:"p"},"GraphbackDateTimeInput")," having the following fields:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),"input GraphbackDateTimeInput {\n  ne: GraphbackDateTime\n  eq: GraphbackDateTime\n  le: GraphbackDateTime\n  lt: GraphbackDateTime\n  ge: GraphbackDateTime\n  gt: GraphbackDateTime\n  in: [GraphbackDateTime!]\n  between: [GraphbackDateTime!]\n}\n")),Object(i.b)("p",null,"So you can perform filtering of the data like this to retrive notes created after ",Object(i.b)("inlineCode",{parentName:"p"},"2020-07-27T12:11:41.288Z"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),'query {\n  findNotes(filter: {\n    createdAt: {\n      gt: "2020-07-27T12:11:41.288Z"\n    }\n  }) {\n    items {\n      id\n      title\n      createdAt\n    }\n  }\n}\n')),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"For your convenience, Graphback generates a filter input for ",Object(i.b)("inlineCode",{parentName:"p"},"Date"),", ",Object(i.b)("inlineCode",{parentName:"p"},"DateTime"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Time"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Timestamp")," scalars. However we only fully support the scalars outlined above and we recommend you to use these."))))}p.isMDXComponent=!0}}]);