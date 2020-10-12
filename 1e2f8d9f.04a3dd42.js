(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{1315:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return p}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},h=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=d(n),b=i,p=h["".concat(o,".").concat(b)]||h[b]||f[b]||a;return n?r.a.createElement(p,c(c({ref:t},l),{},{components:n})):r.a.createElement(p,c({ref:t},l))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},217:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var i=n(2),r=n(6),a=(n(0),n(1315)),o={id:"conflict-resolution-strategies",title:"Conflict Resolution strategies",sidebar_label:"Conflict Resolution strategies"},c={unversionedId:"datasync/conflict-resolution-strategies",id:"version-0.16.x/datasync/conflict-resolution-strategies",isDocsHomePage:!1,title:"Conflict Resolution strategies",description:"A conflict resolution strategy is used to resolve conflicts during Update and Delete Mutations respectively. In order to use a specific strategy, one has to specify it in the call to createDataSyncAPI for every model that they want to use the strategy with:",source:"@site/versioned_docs/version-0.16.x/datasync/conflict-resolution-strategies.md",slug:"/datasync/conflict-resolution-strategies",permalink:"/docs/0.16.x/datasync/conflict-resolution-strategies",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.16.x/datasync/conflict-resolution-strategies.md",version:"0.16.x",sidebar_label:"Conflict Resolution strategies",sidebar:"version-0.16.x/docs",previous:{title:"Setting up Conflict Resolution",permalink:"/docs/0.16.x/datasync/conflict-resolution-intro"},next:{title:"GraphQL Migrations",permalink:"/docs/0.16.x/graphql-migrations/intro"}},s=[{value:"ClientSideWins",id:"clientsidewins",children:[]},{value:"ServerSideWins",id:"serversidewins",children:[]},{value:"ThrowOnConflict",id:"throwonconflict",children:[]},{value:"Custom Conflict Strategy",id:"custom-conflict-strategy",children:[]},{value:"ConflictError",id:"conflicterror",children:[]}],l={rightToc:s};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A conflict resolution strategy is used to resolve conflicts during Update and Delete Mutations respectively. In order to use a specific strategy, one has to specify it in the call to ",Object(a.b)("inlineCode",{parentName:"p"},"createDataSyncAPI")," for every model that they want to use the strategy with:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-typescript"}),"import {\n  createDataSyncAPI,\n  ClientSideWins,\n  ServerSideWins\n} from '@graphback/datasync';\n\n\nconst {\n  typeDefs,\n  resolvers,\n  contextCreator\n} = createDataSyncAPI(\n  modelDefs, \n  { \n    db,\n    conflictConfig: {\n      enabled: true,\n      models: {\n        Comment: {\n          // highlight-next-line\n          conflictResolution: ClientSideWins\n        },\n        Note: {\n          // highlight-next-line\n          conflictResolution: ServerSideWins\n        }\n      }\n    }\n  }\n);\n")),Object(a.b)("p",null,"Graphback DataSync has three built-in conflict resolution strategies that come with it:"),Object(a.b)("h3",{id:"clientsidewins"},"ClientSideWins"),Object(a.b)("p",null,"This strategy ensures that updates always resolve to whatever the client had sent, even in the event of a conflict. If the corresponding object has been deleted in the database, it is restored when the client tries to update it. For delete conflicts, the corresponding object is always deleted, regardless of if it had been updated since the client last fetched it."),Object(a.b)("h3",{id:"serversidewins"},"ServerSideWins"),Object(a.b)("p",null,"This strategy ensures that in the event of a update conflict, the client's update will never overwrite any field that has changed since the client last fetched it. If the object has been deleted in the database, the client will be notified of it by way of a ",Object(a.b)("inlineCode",{parentName:"p"},"ConflictError"),". For delete conflicts, the client is informed of the conflict via a ",Object(a.b)("inlineCode",{parentName:"p"},"ConflictError"),"."),Object(a.b)("h3",{id:"throwonconflict"},"ThrowOnConflict"),Object(a.b)("p",null,"This strategy throws a ",Object(a.b)("inlineCode",{parentName:"p"},"ConflictError")," whenever a client tries to change a field on a document, that has also been changed on the server since the client last fetched it."),Object(a.b)("h3",{id:"custom-conflict-strategy"},"Custom Conflict Strategy"),Object(a.b)("p",null,"A custom conflict resolution strategy can be created by implementing ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/0.16.x/api/graphback-datasync/interfaces/_util_.conflictresolutionstrategy"}),"ConflictResolutionStrategy"),". As an example, take the implementation of the ",Object(a.b)("inlineCode",{parentName:"p"},"ClientSideWins")," strategy:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-typescript"}),"export const ClientSideWins: ConflictResolutionStrategy = {\n  resolveUpdate(conflict: ConflictMetadata): any {\n    // highlight-start\n    const { serverData, clientDiff } = conflict\n\n    const resolved = Object.assign(serverData, clientDiff);\n\n    if (serverData[DataSyncFieldNames.deleted] === true) {\n      resolved[DataSyncFieldNames.deleted] = false;\n    }\n\n    return resolved;\n    // highlight-end\n  },\n  resolveDelete(conflict: ConflictMetadata): any {\n    // highlight-start\n    const { serverData, clientData } = conflict;\n\n    if (serverData[DataSyncFieldNames.deleted] === true) {\n      throw new ConflictError(conflict);\n    }\n\n    const resolved = Object.assign(serverData, { [DataSyncFieldNames.deleted]: true });\n\n    return resolved\n    // highlight-end\n  }\n}\n")),Object(a.b)("h4",{id:"resolveupdate"},Object(a.b)("inlineCode",{parentName:"h4"},"resolveUpdate")),Object(a.b)("p",null,"In the ",Object(a.b)("inlineCode",{parentName:"p"},"resolveUpdate")," function, it can be seen that the resolved object's fields are always set to what the client updated in the event of an update conflict. It can also be seen that if the object has been deleted, it will be restored, along with the updates."),Object(a.b)("h4",{id:"resolvedelete"},Object(a.b)("inlineCode",{parentName:"h4"},"resolveDelete")),Object(a.b)("p",null,"In the ",Object(a.b)("inlineCode",{parentName:"p"},"resolveDelete")," function, it can be seen that in the event of a delete conflict, the object is always deleted."),Object(a.b)("h3",{id:"conflicterror"},"ConflictError"),Object(a.b)("p",null,"This error is thrown when a Conflict Resolution Strategy is unable to resolve the conflict, and needs the client to resolve it instead. It is a subclass of ",Object(a.b)("inlineCode",{parentName:"p"},"Error")," with a ",Object(a.b)("inlineCode",{parentName:"p"},"conflictInfo")," property which is of the ",Object(a.b)("inlineCode",{parentName:"p"},"ConflictMetadata")," type. It can be created by passing a ",Object(a.b)("inlineCode",{parentName:"p"},"ConflictMetadata")," object in it's constructor:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-typescript"}),"const conflictError = new ConflictError({\n\n  /**\n   * This is the common base object for conflicts i.e. the object that the \n   * client had fetched in the past.\n   */\n  base,\n\n  /**\n   * This is the object as currently present in the database \n   */\n  serverData,\n\n  /**\n   * This is a map of the fields that have changed on the server since the\n   * client fetched it i.e. it is the diff of the `serverData` object against\n   * the `base` object\n   */\n  serverDiff,\n\n  /**\n   * This is the object sent by the client in the mutation\n   */\n  clientData,\n\n  /**\n   * This is a map of the fields that the client has changed i.e it is the diff\n   * of the `clientData` object against the `base` object\n   */\n  clientDiff,\n  operation: GraphbackOperationType.UPDATE;\n})\n")))}d.isMDXComponent=!0}}]);