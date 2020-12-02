(window.webpackJsonp=window.webpackJsonp||[]).push([[1248],{1318:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),o=(n(0),n(1329)),i={id:"create",title:"Create your own Graphback plugin",sidebar_label:"Create your own plugin"},c={unversionedId:"plugins/create",id:"version-1.0/plugins/create",isDocsHomePage:!1,title:"Create your own Graphback plugin",description:"You can build your own custom Graphback plugin to:",source:"@site/versioned_docs/version-1.0/plugins/creating-your-own-plugin.md",slug:"/plugins/create",permalink:"/docs/plugins/create",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-1.0/plugins/creating-your-own-plugin.md",version:"1.0",sidebar_label:"Create your own plugin",sidebar:"version-1.0/docs",previous:{title:"ClientCRUD Plugin",permalink:"/docs/plugins/crud-client"},next:{title:"Create Graphback",permalink:"/docs/cli/create-graphback"}},l=[{value:"transformSchema",id:"transformschema",children:[]},{value:"createResolvers",id:"createresolvers",children:[]},{value:"createResources",id:"createresources",children:[]},{value:"getPluginName",id:"getpluginname",children:[]},{value:"Usage",id:"usage",children:[{value:"At application start-up",id:"at-application-start-up",children:[]},{value:"With <code>graphback generate</code>",id:"with-graphback-generate",children:[]}]}],p={rightToc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can build your own custom Graphback plugin to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"automate additional customisations to the final generated schema"),Object(o.b)("li",{parentName:"ul"},"build dynamic resolvers"),Object(o.b)("li",{parentName:"ul"},"create file resources such as client-side queries.")),Object(o.b)("p",null,"To create your own plugin, start by creating a class that extends ",Object(o.b)("inlineCode",{parentName:"p"},"GraphbackPlugin"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { GraphbackPlugin } from 'graphback';\n\nexport class MyGraphbackPlugin extends GraphbackPlugin {\n  ...\n}\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"GraphbackPlugin")," has a number of methods for performing different extensions to your Graphback API."),Object(o.b)("p",null,"For the rest of this documentation, we will be using the following business model:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'""" @model """\ntype Note {\n  id: ID!\n  title: String!\n  archived: Boolean!\n  description: String\n  """\n  @oneToMany(field: \'note\')\n  """\n  comments: [Comment]!\n}\n\n""" @model """\ntype Comment {\n  id: ID!\n  text: String\n  archived: Boolean! \n  description: String\n}\n')),Object(o.b)("h2",{id:"transformschema"},"transformSchema"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"transformSchema")," lets you make modifications to the current iteration of the GraphQL schema object. In here you can create or modify any type or field in the schema. "),Object(o.b)("p",null,"As the ",Object(o.b)("inlineCode",{parentName:"p"},"GraphQLSchema")," and its types are immutable we highly recommend you to install and use the amazing ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://graphql-compose.github.io/"}),"GraphQL Compose")," to modify the schema."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"// highlight-start\nimport { GraphbackPlugin, GraphbackCoreMetadata } from 'graphback';\nimport { GraphQLSchema, GraphQLSchema, GraphQLList, GraphQLNonNull } from 'graphql';\nimport { SchemaComposer } from 'graphql-compose';\n// highlight-end\n\nexport class MyGraphbackPlugin extends GraphbackPlugin {\n  // highlight-start\n  transformSchema(metadata: GraphbackCoreMetadata): GraphQLSchema {\n    const schema = metadata.getSchema()\n    const schemaComposer = new SchemaComposer(schema)\n    const graphbackModels = metadata.getModelDefinitions()\n\n    for (const model of graphbackModels) {\n      schemaComposer.Query.addFields({\n        [`getArchived${model.graphqlType.name}s`]: {\n          type: GraphQLNonNull(GraphQLList(model.graphqlType))\n        }\n      })\n    }\n\n    return schemaComposer.buildSchema()\n  }\n  // highlight-end\n  ...\n}\n")),Object(o.b)("p",null,"In ",Object(o.b)("inlineCode",{parentName:"p"},"MyGraphbackPlugin"),", the ",Object(o.b)("inlineCode",{parentName:"p"},"transformSchema")," hook adds a new query field to the schema for each of the data models to retrieve all archived models."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type Query {\n  getNote(id: ID!): Note\n  findNotes(filter: NoteFilter, page: PageRequest, orderBy: OrderByInput): NoteResultList!\n  getComment(id: ID!): Comment\n  findComments(filter: CommentFilter, page: PageRequest, orderBy: OrderByInput): CommentResultList!\n  // highlight-start\n  getArchivedNotes: [Note]!\n  getArchivedComments: [Comment]!\n  // highlight-end\n}\n")),Object(o.b)("h2",{id:"createresolvers"},"createResolvers"),Object(o.b)("p",null,"With the ",Object(o.b)("inlineCode",{parentName:"p"},"createResolvers")," hook you can create and return resolvers using the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.graphql-tools.com/docs/resolvers/"}),Object(o.b)("inlineCode",{parentName:"a"},"graphql-tools"))," format."),Object(o.b)("p",null,"To use ",Object(o.b)("inlineCode",{parentName:"p"},"createResolvers")," you will first need to install ",Object(o.b)("inlineCode",{parentName:"p"},"@graphql-tools/utils"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @graphql-tools/utils\n")),Object(o.b)("p",null,"Here ",Object(o.b)("inlineCode",{parentName:"p"},"createResolvers")," is creating a new query resolver for each query field added to the schema in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#transformschema"}),Object(o.b)("inlineCode",{parentName:"a"},"transformSchema")),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { GraphbackPlugin, GraphbackCoreMetadata } from 'graphback';\nimport { GraphbackContext, getSelectedFieldsFromResolverInfo, QueryFilter  } from '@graphback/core';\nimport { GraphQLResolveInfo } from 'graphql';\n\n// highlight-start\nimport { IResolvers, IObjectTypeResolver } from '@graphql-tools/utils';\n// highlight-end\n\nexport class MyGraphbackPlugin extends GraphbackPlugin {\n  ...\n  // highlight-start\n  createResolvers(metadata: GraphbackCoreMetadata): IResolvers {\n    const resolvers: IResolvers = {};\n    const queryObj: IObjectTypeResolver = {};\n\n    // loop through every Graphback model\n    for (const model of metadata.getModelDefinitions()) {\n      const modelName = model.graphqlType.name;\n\n      // create a resolver function for every query field created in `transformSchema`\n      queryObj[`getArchived${modelName}s`] = async (_: any, args: any, context: GraphbackContext, info: GraphQLResolveInfo) => {\n        const crudService = context.graphback[modelName];\n\n        // create a filter in the GraphQLCRUD format to retrieve only archived Notes\n        const customFilter: QueryFilter = {\n          archived: {\n            eq: true\n          }\n        };\n\n        // use the model service created by Graphback to query the database\n        const { items } = await crudService.findBy({ filter: customFilter });\n\n        return items;\n      }\n    }\n\n    resolvers.Query = queryObj;\n\n    return resolvers;\n  }\n  // highlight-end\n}\n")),Object(o.b)("h2",{id:"createresources"},"createResources"),Object(o.b)("p",null,"Since Graphback is primarily a runtime framework, you probably won't use ",Object(o.b)("inlineCode",{parentName:"p"},"createResources")," too often. However it is a very useful method if you ever need to output something to a file, such as your schema."),Object(o.b)("p",null,"Here ",Object(o.b)("inlineCode",{parentName:"p"},"createResources")," is creating a GraphQL schema file from the schema generated by Graphback."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { GraphbackPlugin, GraphbackCoreMetadata } from 'graphback';\n// highlight-start\nimport { writeFileSync } from 'fs';\nimport { printSchema } from 'graphql';\n// highlight-end\n\nexport class MyGraphbackPlugin extends GraphbackPlugin {\n  ...\n  // highlight-start\n  createResources(metadata: GraphbackCoreMetadata): void {\n    const schema = metadata.getSchema()\n    const schemaSDL = printSchema(schema)\n\n    writeFileSync('./schema.graphql', schemaSDL);\n  }\n  // highlight-end\n}\n")),Object(o.b)("h2",{id:"getpluginname"},"getPluginName"),Object(o.b)("p",null,"Returns a unique name of the plugin. The will be used by plugin registry to uniquely identify the plugin.  "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { GraphbackPlugin, GraphbackCoreMetadata } from 'graphback';\n// highlight-next-line\nimport { writeFileSync } from 'fs';\n\nexport class MyGraphbackPlugin extends GraphbackPlugin {\n  ...\n  // highlight-start\n  getPluginName() {\n    return 'MyGraphbackPlugin';\n  }\n  // highlight-end\n}\n")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("h3",{id:"at-application-start-up"},"At application start-up"),Object(o.b)("p",null,"To use the plugin, add it to the ",Object(o.b)("inlineCode",{parentName:"p"},"plugins")," array in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../api/build-graphback-api#plugins"}),Object(o.b)("inlineCode",{parentName:"a"},"buildGraphbackAPI")),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const { resolvers, typeDefs, contextCreator } = buildGraphbackAPI(modelDefs, {\n  dataProviderCreator: createKnexDbProvider(db),\n  plugins: [\n    // highlight-start\n    new MyGraphbackPlugin()\n    // highlight-end\n  ]\n});\n\nconst apolloServer = new ApolloServer({\n    typeDefs,\n    resolvers,\n    context: contextCreator\n})\n\n...\n")),Object(o.b)("p",null,"Archived ",Object(o.b)("inlineCode",{parentName:"p"},"Notes")," or ",Object(o.b)("inlineCode",{parentName:"p"},"Comments")," can be retrieved by the following query:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"query archivedNotesAndComments {\n  getArchivedNotes {\n    id\n    title\n    comments {\n      id\n      archived\n      text\n    }\n  }\n\n  getArchivedComments {\n    id\n    text\n    note {\n      id\n      archived\n      title\n    }\n  }\n}\n")),Object(o.b)("h3",{id:"with-graphback-generate"},"With ",Object(o.b)("inlineCode",{parentName:"h3"},"graphback generate")),Object(o.b)("p",null,"Some plugins are designed to be invoked through the Graphback CLI, such as those that output files to the local project. See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/plugins/overview#file-generation-with-cli"}),"Plugin Overview"),"."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"graphback generate")," dynamically loads the plugin package by its name defined in the ",Object(o.b)("inlineCode",{parentName:"p"},".graphqlrc"),". For plugin packages that begin with ",Object(o.b)("inlineCode",{parentName:"p"},"@"),", due to a limitation where keys in a YAML object cannot begin with ",Object(o.b)("inlineCode",{parentName:"p"},"@"),", your plugin documentation should explicitly specify the package name with the ",Object(o.b)("inlineCode",{parentName:"p"},"packageName")," configuration value."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"...\nplugins:\n  my-cool-plugin:\n    format: 'graphql'\n    packageName: '@your-namespace/my-cool-plugin' # Graphabck will load this package instead\n    outputPath: './src/schema/schema.graphql'\n")))}s.isMDXComponent=!0},1329:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},h=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=s(n),u=a,m=h["".concat(i,".").concat(u)]||h[u]||b[u]||o;return n?r.a.createElement(m,c(c({ref:t},p),{},{components:n})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);