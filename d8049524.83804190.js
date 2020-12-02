(window.webpackJsonp=window.webpackJsonp||[]).push([[1067],{1137:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return o})),t.d(a,"rightToc",(function(){return l})),t.d(a,"default",(function(){return b}));var n=t(3),r=t(7),c=(t(0),t(1329)),i={id:"graphback-cli",title:"Graphback CLI",sidebar_label:"Graphback CLI"},o={unversionedId:"cli/graphback-cli",id:"version-0.16.x/cli/graphback-cli",isDocsHomePage:!1,title:"Graphback CLI",description:"Graphback helps you to kickstart your experience with any existing GraphQL implementation by generating backend and client side CRUD layer using your GraphQL data model. The CLI exposes a single generate command.",source:"@site/versioned_docs/version-0.16.x/cli/graphback-cli.md",slug:"/cli/graphback-cli",permalink:"/docs/0.16.x/cli/graphback-cli",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.16.x/cli/graphback-cli.md",version:"0.16.x",sidebar_label:"Graphback CLI",sidebar:"version-0.16.x/docs",previous:{title:"Create Graphback",permalink:"/docs/0.16.x/cli/create-graphback"},next:{title:"buildGraphbackAPI",permalink:"/docs/0.16.x/api/graphback/modules/_buildgraphbackapi_"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[{value:"Prerequisite",id:"prerequisite",children:[]},{value:"Using the command",id:"using-the-command",children:[]}]}],p={rightToc:l};function b(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,t,{components:a,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Graphback helps you to kickstart your experience with any existing GraphQL implementation by generating backend and client side CRUD layer using your ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/0.16.x/model/datamodel"}),"GraphQL data model"),". The CLI exposes a single ",Object(c.b)("inlineCode",{parentName:"p"},"generate")," command.  "),Object(c.b)("h2",{id:"installation"},"Installation"),Object(c.b)("p",null,"You can add ",Object(c.b)("inlineCode",{parentName:"p"},"Graphback CLI")," on your existing GraphQL project using either of the following commands. "),Object(c.b)("p",null,"With npm:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm install --save-dev graphback-cli\n")),Object(c.b)("p",null,"Or with yarn: "),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add --dev graphback-cli\n")),Object(c.b)("h2",{id:"usage"},"Usage"),Object(c.b)("h3",{id:"prerequisite"},"Prerequisite"),Object(c.b)("p",null,"You project must contain the configuration file that follows the format described by the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://graphql-config.com/introduction"}),"graphql-config"),"."),Object(c.b)("p",null,"Taking a ",Object(c.b)("inlineCode",{parentName:"p"},".graphqlrc.yml")," configuration file for example, your configuration should have the following minimum required entry:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"## Please review configuration and adjust it for your own project\nschema: ./src/schema/schema.graphql\nextensions:\n  graphback:\n    model: ./model/**/*.graphql\n    ## You can add as many Graphback plugins as you wish\n    ## Here we are only adding the Schema and Client plugin\n    plugins:\n      graphback-schema:\n        format: graphql\n        outputPath: ./src/schema/schema.graphql\n      graphback-client:\n        format: 'graphql'\n        outputFile: ./src/graphql/graphback.graphql   \n")),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"If you used ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Urigo/graphql-cli"}),"graphql-cli")," to initialize\nthe project, this file will be automatic setup for you. Otherwise, you can still use the ",Object(c.b)("inlineCode",{parentName:"p"},"init")," command from the CLI to initialize\nthis configuration setup."))),Object(c.b)("h3",{id:"using-the-command"},"Using the command"),Object(c.b)("p",null,"To use Graphback generate command. In your ",Object(c.b)("inlineCode",{parentName:"p"},"package.json")," file, edit the ",Object(c.b)("inlineCode",{parentName:"p"},"scripts")," parts and add the following line:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'"generate": "graphback generate"\n')),Object(c.b)("p",null,"And finally, use npm or yarn to run it:"),Object(c.b)("p",null,"With yarn:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn generate\n")),Object(c.b)("p",null,"With npm:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm run generate\n")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"generate")," command will execute generation process that will generate GraphQL server based on your data model."),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Graphback CLI is now part of the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Urigo/graphql-cli"}),"graphql-cli")," command line tool. Please consider installing it for wider set of features"))))}b.isMDXComponent=!0},1329:function(e,a,t){"use strict";t.d(a,"a",(function(){return s})),t.d(a,"b",(function(){return u}));var n=t(0),r=t.n(n);function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){c(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),b=function(e){var a=r.a.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},s=function(e){var a=b(e.components);return r.a.createElement(p.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},m=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(t),m=n,u=s["".concat(i,".").concat(m)]||s[m]||d[m]||c;return t?r.a.createElement(u,o(o({ref:a},p),{},{components:t})):r.a.createElement(u,o({ref:a},p))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var c=t.length,i=new Array(c);i[0]=m;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<c;p++)i[p]=t[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);