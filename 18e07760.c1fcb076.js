(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{1329:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),u=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(r),d=a,m=s["".concat(c,".").concat(d)]||s[d]||b[d]||o;return r?n.a.createElement(m,i(i({ref:t},l),{},{components:r})):n.a.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},204:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return u}));var a=r(3),n=r(7),o=(r(0),r(1329)),c={id:"create-new-app",title:"Creating a new application",sidebar_label:"Create a new application"},i={unversionedId:"getting-started/create-new-app",id:"version-0.14.x/getting-started/create-new-app",isDocsHomePage:!1,title:"Creating a new application",description:"Prerequisites",source:"@site/versioned_docs/version-0.14.x/getting-started/creating-a-new-application.md",slug:"/getting-started/create-new-app",permalink:"/docs/0.14.x/getting-started/create-new-app",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.14.x/getting-started/creating-a-new-application.md",version:"0.14.x",sidebar_label:"Create a new application",sidebar:"version-0.14.x/docs",previous:{title:"Why use Graphback?",permalink:"/docs/0.14.x/introduction"},next:{title:"Adding Graphback to your project",permalink:"/docs/0.14.x/getting-started/add-to-project"}},p=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Create your application",id:"create-your-application",children:[]}],l={rightToc:p};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("p",null,"Before you start, check to make sure you have the following installed:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://nodejs.org/en/"}),"Node.js")," v10.15.x or later"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.npmjs.com/"}),"npm")," v5.x or later"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://yarnpkg.com/"}),"yarn")," v1.x or later (optional)")),Object(o.b)("h2",{id:"create-your-application"},"Create your application"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.14.x/cli/create-graphback"}),"Create Graphback")," is a command-line utility for creating Graphback applications."),Object(o.b)("p",null,"Create a Graphback application with npx:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npx create-graphback my-awesome-project\n")),Object(o.b)("p",null,"The CLI will ask you to pick from one of a number of templates. Once chosen, the template will be downloaded to your computer."),Object(o.b)("p",null,"Change into your project folder:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd my-awesome-project\n")),Object(o.b)("p",null,"The project will have a GraphQL schema file with some example types which you will likely want to change. Learn how to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../model/datamodel"}),"design your data models"),"."),Object(o.b)("p",null,"Each template will be different, so you should follow the guide in your new project's ",Object(o.b)("inlineCode",{parentName:"p"},"README")," to complete the setup."))}u.isMDXComponent=!0}}]);