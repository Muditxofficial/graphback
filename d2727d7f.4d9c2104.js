(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{237:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return d}));var a=t(1),r=t(6),o=(t(0),t(270)),i={title:"Data Model",id:"datamodel"},c={id:"version-0.11.x/intro/datamodel",isDocsHomePage:!1,title:"Data Model",description:"Graphback processes your data model to generate a server and client side using best patterns for production ready applications and reduces amount of boilerplate code needed to be added by you.",source:"@site/versioned_docs/version-0.11.x/intro/datamodel.md",permalink:"/docs/0.11.x/intro/datamodel",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.11.x/intro/datamodel.md",version:"0.11.x",sidebar:"version-0.11.x/",previous:{title:"Running an API without code",permalink:"/docs/0.11.x/intro/graphqlserve"},next:{title:"Config",permalink:"/docs/0.11.x/intro/config"},latestVersionMainDocPermalink:"/docs/introduction"},l=[{value:"Model",id:"model",children:[]},{value:"Primary key",id:"primary-key",children:[]},{value:"Relationships",id:"relationships",children:[{value:"OneToMany",id:"onetomany",children:[]},{value:"OneToOne",id:"onetoone",children:[]}]}],p={rightToc:l};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Graphback processes your data model to generate a server and client side using best patterns for production ready applications and reduces amount of boilerplate code needed to be added by you.\nDevelopers can focus on data and application requirements by modeling them using a GraphQL SDL."),Object(o.b)("h2",{id:"model"},"Model"),Object(o.b)("p",null,"Graphback operates on GraphQL Schema types annotated with ",Object(o.b)("inlineCode",{parentName:"p"},"@model"),".\nAdding this annotation to your type will enable Graphback to add additional elements to the schema and generate related code in JavaScript or TypeScript."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype Note {\n  ...\n}\n')),Object(o.b)("h2",{id:"primary-key"},"Primary key"),Object(o.b)("p",null,"Graphback requires your data models to have one primary key field which is used to uniquely represent every object in the database."),Object(o.b)("p",null,"By default Graphback will use ",Object(o.b)("inlineCode",{parentName:"p"},"id: ID")," as the primary key."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype Note {\n  id: ID!\n  ...\n}\n')),Object(o.b)("p",null,"You can set a custom primary key field using the ",Object(o.b)("inlineCode",{parentName:"p"},"@db.primary")," field annotation."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype Note {\n  id: ID!\n  """\n  @db.primary\n  """\n  email: String\n}\n')),Object(o.b)("h2",{id:"relationships"},"Relationships"),Object(o.b)("p",null,"Graphback provides support for one-to-many and one-to-one relationships."),Object(o.b)("h3",{id:"onetomany"},"OneToMany"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype Note {\n  id: ID!\n  title: String!\n  """\n  @oneToMany field: \'note\'\n  """\n  comments: [Comment]\n}\n')),Object(o.b)("p",null,"This creates a one-to-many relationship between ",Object(o.b)("inlineCode",{parentName:"p"},"Note.comments")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Comment.note"),". If ",Object(o.b)("inlineCode",{parentName:"p"},"Comment.note")," does not exist Graphback will generate it for you, otherwise you can define it yourself."),Object(o.b)("p",null,"By default this maps to ",Object(o.b)("inlineCode",{parentName:"p"},"comment.noteId")," in the underlying data source. Yon can customise this by adding ",Object(o.b)("inlineCode",{parentName:"p"},"key")," to the ",Object(o.b)("inlineCode",{parentName:"p"},"@oneToMany")," annotation:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype Note {\n  id: ID!\n  title: String!\n  """\n  @oneToMany field: \'note\', key: \'note_id\'\n  """\n  comments: [Comment]\n}\n')),Object(o.b)("h3",{id:"onetoone"},"OneToOne"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype Profile {\n  id: ID!\n  """\n  @oneToOne\n  """\n  user: User!\n}\n')),Object(o.b)("p",null,"This creates a one-sided relationship between the ",Object(o.b)("inlineCode",{parentName:"p"},"Profile")," and ",Object(o.b)("inlineCode",{parentName:"p"},"User")," models."),Object(o.b)("p",null,"By default this maps to ",Object(o.b)("inlineCode",{parentName:"p"},"profile.userId")," in the underlying data source. Yon can customise this by adding ",Object(o.b)("inlineCode",{parentName:"p"},"key")," to the ",Object(o.b)("inlineCode",{parentName:"p"},"@oneToOne")," annotation:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype Profile {\n  id: ID!\n  """\n  @oneToOne key: \'user_id\'\n  """\n  user: User!\n}\n')))}d.isMDXComponent=!0},270:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),d=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},s=function(e){var n=d(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(t),u=a,m=s["".concat(i,".").concat(u)]||s[u]||b[u]||o;return t?r.a.createElement(m,c({ref:n},p,{components:t})):r.a.createElement(m,c({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);