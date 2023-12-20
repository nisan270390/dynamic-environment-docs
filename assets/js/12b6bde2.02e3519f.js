"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[436],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=i,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6073:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_label:"Tips and Tricks",sidebar_position:2},a="Tips and Tricks",s={unversionedId:"advanced/tips-and-tricks",id:"advanced/tips-and-tricks",title:"Tips and Tricks",description:"This document offers advanced tips and tricks for working with DynamicEnvironment.",source:"@site/docs/advanced/tips-and-tricks.md",sourceDirName:"advanced",slug:"/advanced/tips-and-tricks",permalink:"/dynamic-environment-doc/advanced/tips-and-tricks",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/advanced/tips-and-tricks.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Tips and Tricks",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Technical Overview",permalink:"/dynamic-environment-doc/advanced/technical-overview"},next:{title:"Extensions",permalink:"/dynamic-environment-doc/advanced/extensions"}},c={},l=[{value:"SourceLabels Propagation",id:"sourcelabels-propagation",level:2}],d={toc:l},p="wrapper";function u(e){let{components:t,...o}=e;return(0,i.kt)(p,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tips-and-tricks"},"Tips and Tricks"),(0,i.kt)("p",null,"This document offers advanced tips and tricks for working with ",(0,i.kt)("em",{parentName:"p"},"DynamicEnvironment"),"."),(0,i.kt)("h2",{id:"sourcelabels-propagation"},"SourceLabels Propagation"),(0,i.kt)("p",null,"While ",(0,i.kt)("em",{parentName:"p"},"DynamicEnvironment")," is not responsible for propagating source-labels throughout the services\npath, it does provide the option to add specific source-labels to the deployments it creates. You\ncan achieve this using the ",(0,i.kt)("inlineCode",{parentName:"p"},"podLabels")," field in\nthe ",(0,i.kt)("a",{parentName:"p",href:"/dynamic-environment-doc/references/crd#subset"},"CRD Subset reference"),"."),(0,i.kt)("p",null,"It's important to note that you cannot solely rely on this mechanism to carry source-labels across\nthe entire service flow. Consider the following scenario:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"service-with-non-linear-overrides",src:n(9205).Z,width:"1334",height:"501"})),(0,i.kt)("p",null,"In this situation, when controlling routing based on source-labels, you may encounter a challenge:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The test client sends a request with valid source-labels to ",(0,i.kt)("inlineCode",{parentName:"li"},"Service A"),', resulting in it reaching\nthe "Test Version" due to the source-labels.'),(0,i.kt)("li",{parentName:"ol"},'However, when "Service A" sends a request to ',(0,i.kt)("inlineCode",{parentName:"li"},"Service B"),', the lack of duplication for "Service B"\nresults in it reaching the production version of "Service B".'),(0,i.kt)("li",{parentName:"ol"},'The testing flow requires reaching the "Test Version" of "Service C" when sending a request to "\nService C." However, since "Service B" is in production and lacks the required source-labels,\nthe "Test Version" of "Service C" is never reached within this flow.')),(0,i.kt)("p",null,'To address this issue, you can override "Service B" by adding source-labels without any other\nmodifications. This allows you to complete the entire flow of your application successfully.'))}u.isMDXComponent=!0},9205:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/source-labels-78d8d21bc26b289685d2dc27981d8bf7.svg"}}]);