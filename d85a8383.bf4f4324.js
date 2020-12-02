(window.webpackJsonp=window.webpackJsonp||[]).push([[1068],{1138:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),i=(a(0),a(1329)),o={title:"Rising above GraphQL Subscriptions with Graphback DataSync",author:"Shibani Shankar Dash",author_title:"Aerogear community contributor",author_url:"https://github.com/ssd71",author_image_url:"https://avatars1.githubusercontent.com/u/20183094?s=460&u=dc7003f2886fbefe348ab88db9db6087fd23cb29&v=4",tags:["graphql","graphback","graphqlcrud","graphql-js","nodejs","datasync","graphql-subscriptions"],image:"https://graphback.dev/img/logo.png"},l={permalink:"/blog/2020/10/01/graphback-datasync",source:"@site/blog/2020-10-1-graphback-datasync.md",description:"GraphQL Subscriptions are a perfect fit for situations where users like to receive instant updates for some specific types of data. Subscriptions are very flexible and allow developers to connect directly to the stream of the changes generated on the server side.",date:"2020-10-01T00:00:00.000Z",tags:[{label:"graphql",permalink:"/blog/tags/graphql"},{label:"graphback",permalink:"/blog/tags/graphback"},{label:"graphqlcrud",permalink:"/blog/tags/graphqlcrud"},{label:"graphql-js",permalink:"/blog/tags/graphql-js"},{label:"nodejs",permalink:"/blog/tags/nodejs"},{label:"datasync",permalink:"/blog/tags/datasync"},{label:"graphql-subscriptions",permalink:"/blog/tags/graphql-subscriptions"}],title:"Rising above GraphQL Subscriptions with Graphback DataSync",readingTime:5.38,truncated:!0,prevItem:{title:"Announcing the Release of Graphback 1.0",permalink:"/blog/2020/10/01/announcing-graphback-1.0"},nextItem:{title:"Improving the GraphQL experience with Graphback 0.14",permalink:"/blog/2020/07/22/new-graphback-release-0-14"}},s=[{value:"Delta queries",id:"delta-queries",children:[]},{value:"Delete is challenging",id:"delete-is-challenging",children:[]},{value:"Conflict resolution",id:"conflict-resolution",children:[{value:"Solution?",id:"solution",children:[]},{value:"GraphQL CRUD spec for delta queries",id:"graphql-crud-spec-for-delta-queries",children:[]}]},{value:"What is DataSync?",id:"what-is-datasync",children:[]},{value:"Server-side Conflict Resolution",id:"server-side-conflict-resolution",children:[{value:"Setting Up a DataSync server",id:"setting-up-a-datasync-server",children:[]}]}],c={rightToc:s};function d(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"GraphQL Subscriptions are a perfect fit for situations where users like to receive instant updates for some specific types of data. Subscriptions are very flexible and allow developers to connect directly to the stream of the changes generated on the server side.\nSubscriptions deliver delta updates to the client only when clients are subscribed. To receive partial updates after an application is restarted developers can use the concept of delta queries."),Object(i.b)("h2",{id:"delta-queries"},"Delta queries"),Object(i.b)("p",null,"Delta queries are a concept that allow users to perform a query that will return partial data based on a specific separator that is usually represented as a sequence or timestamp or any date series that will separate a sorted dataset into data we have seen and a delta that should be returned to clients."),Object(i.b)("p",null,Object(i.b)("img",{src:a(1363).default})),Object(i.b)("h2",{id:"delete-is-challenging"},"Delete is challenging"),Object(i.b)("p",null,"Not every dataset can support delta queries. Every deletion of the data will remove it from the database which means that sorting and splitting the dataset to retrieve updates will destroy it."),Object(i.b)("h2",{id:"conflict-resolution"},"Conflict resolution"),Object(i.b)("p",null,"In an offline-first application, where a client may often switch between being online and offline, conflicts between client-side and server-side data are almost guaranteed to occur. It is of utmost importance these conflicts are detected and some mechanism is in place to resolve these conflicts."),Object(i.b)("p",null,Object(i.b)("img",{src:a(1363).default})),Object(i.b)("h3",{id:"solution"},"Solution?"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://i.memeful.com/memes/R8nXE1b/Matrix-Morpheus.jpg",alt:null}))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Stop deleting data in the table to introduce soft deletes "),Object(i.b)("li",{parentName:"ul"},"Have separate table for delete operations and merging results when sending data to clients"),Object(i.b)("li",{parentName:"ul"},"Have separate table that can be used to query diffs ")),Object(i.b)("p",null,"These concepts are very common and are often needed when building applications that will consume large amount of data that needs to be available on the client - especially when the client is designed to work without network connectivity."),Object(i.b)("h3",{id:"graphql-crud-spec-for-delta-queries"},"GraphQL CRUD spec for delta queries"),Object(i.b)("p",null,"That is why we have built and included delta operations as well as conflict resolution into ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://graphqlcrud.org/"}),"GraphQLCRUD")," specification.\nToday we are glad to announce that DeltaQueries as well as Server-side Conflict Resolution are officially available as part of the Graphback.dev project that implements this specification.\nGraphback is a library that lets you auto-generate your GraphQL Data layer at runtime. The latest release of Graphback provides support for delta queries as well as server-side conflict resolution."),Object(i.b)("h2",{id:"what-is-datasync"},"What is DataSync?"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../../docs/datasync/intro.md"}),"DataSync")," is short for data synchronization and that\u2019s what we set out to do with this package. When a GraphQL client goes offline for sometime, e.g. because of a poor network connection, the data cached by the client can get outdated pretty fast and without a live subscription to fetch those changes it becomes imperative that a client provide some way to be up to date with the data as soon as it comes back online. That is DataSync."),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../../docs/datasync/intro.md"}),"DataSync"),"is the reference implementation for the Delta Queries and Conflict Resolution extension of the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://graphqlcrud.org/"}),"GraphQLCRUD")," spec."),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../../docs/datasync/intro.md"}),"DataSync")," achieves this by providing a special type of query we like to call a delta query and extends the existing update resolvers to give out of the box server-side Conflict Resolution.\nDelta Queries"),Object(i.b)("p",null,"A delta query is a GraphQL query that helps the client know what changed while they were offline. So as an example scenario if we were to fetch notes that were changed when we were offline, with DataSync this would go like:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql",metastring:'title="Example delta query"',title:'"Example',delta:!0,'query"':!0}),'query {\n  syncNotes(lastSync: 1590679886048, filter: { id: "e12jk12j4b214j1" }) {\n      id\n      text\n      content\n      _lastUpdatedAt\n      _deleted\n  }\n}\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json",metastring:'title="Example response"',title:'"Example','response"':!0}),'{\n  "data": {\n    "syncNotes": {\n      "items": [\n        {\n          "id": "e12jk12j4b214j1",\n          "text": "Weekly Agenda",\n          "content": "All Done",\n          "_lastUpdatedAt": 1591852693075,\n          "_deleted": true\n        }\n      ],\n      "lastSync": "1591852700920",\n      "limit": null\n    }\n  }\n}\n')),Object(i.b)("p",null,"Notice that we not only get the required fields like id and text, but also ",Object(i.b)("inlineCode",{parentName:"p"},"_lastUpdatedAt")," as well as if the post was ",Object(i.b)("inlineCode",{parentName:"p"},"_deleted"),", all of which are automatically maintained by DataSync."),Object(i.b)("h2",{id:"server-side-conflict-resolution"},"Server-side Conflict Resolution"),Object(i.b)("p",null,Object(i.b)("img",{src:a(1387).default})),Object(i.b)("p",null,"Server-side Conflict resolution is the ability to resolve conflicts between the data that the client has, and the data present in the database. In offline-first applications, it is crucial to address availability problems to ensure the consistency of data between the server and the client. Graphback DataSync does this out of the box by maintaining a ",Object(i.b)("inlineCode",{parentName:"p"},"_version")," field and using it to track changes in data with delta tables that store intermediate versions of documents which can be used to implement their own conflict resolution strategies, on top of the DataSync provided strategies."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql",metastring:'title="Final schema when using server-side conflict resolution"',title:'"Final',schema:!0,when:!0,using:!0,"server-side":!0,conflict:!0,'resolution"':!0}),"type Comment {\n  _id: GraphbackObjectID!\n  text: String\n  description: String\n  _lastUpdatedAt: GraphbackTimestamp\n  _version: Int\n}\n\ninput MutateCommentInput {\n  _id: GraphbackObjectID!\n  text: String\n  description: String\n  _version: Int!\n}\n")),Object(i.b)("p",null,"As it can be seen, when server-side conflict resolution is enabled, this changes the schema in two ways:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Adding a ",Object(i.b)("inlineCode",{parentName:"li"},"_version")," field to the base GraphQL type"),Object(i.b)("li",{parentName:"ul"},"Adding a ",Object(i.b)("inlineCode",{parentName:"li"},"_version")," field to the Mutation Input type")),Object(i.b)("p",null,"With this, a client can pass their version of the data and the server can detect inconsistencies between the client-side and server-side by using the ",Object(i.b)("inlineCode",{parentName:"p"},"_version")," field. The conflicts can then be resolved by a specified conflict resolution strategy. DataSync provides two conflict resolution strategies out of the box:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"ClientSideWins: The edits made by the client are never discarded and will always be persisted to the database"),Object(i.b)("li",{parentName:"ul"},"ServerSideWins: The fields edited by the client never overwrite fields that have been updated on the server")),Object(i.b)("p",null,"In addition to this, custom conflict resolution strategies can also be built to suit specific use cases. All of this information and more can be found in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../../docs/datasync/intro.md"}),"DataSync docs"),"."),Object(i.b)("p",null,"All of this can be easily setup with our DataSync enabled ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../../docs/graphqlserve/graphqlserve.md"}),"graphql-serve"),"."),Object(i.b)("h3",{id:"setting-up-a-datasync-server"},"Setting Up a DataSync server"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Define your data model using GraphQL")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),'""" \n@model\n@datasync\n"""\ntype Comment {\n  _id: GraphbackObjectID!\n  text: String\n  description: String\n}\n\nscalar GraphbackObjectID\n')),Object(i.b)("p",null,"This is going to be our data model. Notice that both types are annotated with ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../../docs/model/annotations.md#model"}),Object(i.b)("inlineCode",{parentName:"a"},"@model"))," and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../../docs/datasync/delta-queries.md/#annotate-the-required-models"}),Object(i.b)("inlineCode",{parentName:"a"},"@datasync")),". The former is required for Graphback to recognise model types and the latter is required to enable DataSync for a specific model."),Object(i.b)("p",null,"Visit the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../../docs/datasync/intro.md"}),"docs")," for a complete reference to all Graphback supported annotations as well as a more involved introduction to DataSync."),Object(i.b)("p",null,"Edit the data model as desired and move on."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"npx graphql-serve serve model.graphql --datasync -p 4000\n")),Object(i.b)("p",null,"Navigate to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:4000/graphql"}),"http://localhost:4000/graphql")," and test out queries.\nBe sure to check out our docs for tons of other cool things that you can do with Graphback and DataSync!"))}d.isMDXComponent=!0},1329:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(a),u=n,h=p["".concat(o,".").concat(u)]||p[u]||b[u]||i;return a?r.a.createElement(h,l(l({ref:t},c),{},{components:a})):r.a.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1363:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/syncdiagram-97eef2ef5cf682e7930093f5f656faac.png"},1387:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/conflictresolution-4b1c5af32e35098cde8efdec85846c28.png"}}]);