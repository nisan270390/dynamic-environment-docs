"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[338],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>N});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),o=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=o(t.components);return n.createElement(m.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=o(a),k=r,N=d["".concat(m,".").concat(k)]||d[k]||u[k]||l;return a?n.createElement(N,i(i({ref:e},p),{},{components:a})):n.createElement(N,i({ref:e},p))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var s={};for(var m in e)hasOwnProperty.call(e,m)&&(s[m]=e[m]);s.originalType=t,s[d]="string"==typeof t?t:r,i[1]=s;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},3275:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var n=a(7462),r=(a(7294),a(3905));const l={},i="DynamicEnv CRD Reference",s={unversionedId:"references/crd",id:"references/crd",title:"DynamicEnv CRD Reference",description:"Packages",source:"@site/docs/references/crd.md",sourceDirName:"references",slug:"/references/crd",permalink:"/dynamic-environment-doc/references/crd",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/references/crd.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Custom Settings",permalink:"/dynamic-environment-doc/references/custom-settings"},next:{title:"Supported Versions",permalink:"/dynamic-environment-doc/references/supported-versions"}},m={},o=[{value:"Packages",id:"packages",level:2},{value:"riskified.com/v1alpha1",id:"riskifiedcomv1alpha1",level:2},{value:"Resource Types",id:"resource-types",level:3},{value:"ConsumerStatus",id:"consumerstatus",level:4},{value:"ContainerOverrides",id:"containeroverrides",level:4},{value:"DynamicEnv",id:"dynamicenv",level:4},{value:"DynamicEnvSpec",id:"dynamicenvspec",level:4},{value:"DynamicEnvStatus",id:"dynamicenvstatus",level:4},{value:"IstioMatch",id:"istiomatch",level:4},{value:"ResourceStatus",id:"resourcestatus",level:4},{value:"StatusError",id:"statuserror",level:4},{value:"StringMatch",id:"stringmatch",level:4},{value:"Subset",id:"subset",level:4},{value:"SubsetErrors",id:"subseterrors",level:4},{value:"SubsetStatus",id:"subsetstatus",level:4}],p={toc:o},d="wrapper";function u(t){let{components:e,...a}=t;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dynamicenv-crd-reference"},"DynamicEnv CRD Reference"),(0,r.kt)("h2",{id:"packages"},"Packages"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#riskifiedcomv1alpha1"},"riskified.com/v1alpha1"))),(0,r.kt)("h2",{id:"riskifiedcomv1alpha1"},"riskified.com/v1alpha1"),(0,r.kt)("p",null,"Package v1alpha1 contains API Schema definitions for the riskified v1alpha1 API group"),(0,r.kt)("h3",{id:"resource-types"},"Resource Types"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#dynamicenv"},"DynamicEnv"))),(0,r.kt)("h4",{id:"consumerstatus"},"ConsumerStatus"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Appears in:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#dynamicenvstatus"},"DynamicEnvStatus"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")," ",(0,r.kt)("em",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the resource")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"namespace")," ",(0,r.kt)("em",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The namespace where the resource is created")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"status")," ",(0,r.kt)("em",{parentName:"td"},"LifeCycleStatus")),(0,r.kt)("td",{parentName:"tr",align:null},"The life cycle status of the resource")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hash")," ",(0,r.kt)("em",{parentName:"td"},"integer")),(0,r.kt)("td",{parentName:"tr",align:null},"Hash of the current consumer - for internal use")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"errors")," ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"#statuserror"},"StatusError")," array")),(0,r.kt)("td",{parentName:"tr",align:null},"List of errors related to the consumer")))),(0,r.kt)("h4",{id:"containeroverrides"},"ContainerOverrides"),(0,r.kt)("p",null,"Defines the details of the container on which changes need to be made and the relevant overrides"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Appears in:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#subset"},"Subset"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"containerName")," ",(0,r.kt)("em",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Container name to override in multiple containers' environment. If not specified we will use the first container.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"image")," ",(0,r.kt)("em",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Docker image name overridden to the desired subset The Docker image found in the original deployment is used if this is not provided.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"command")," ",(0,r.kt)("em",{parentName:"td"},"string array")),(0,r.kt)("td",{parentName:"tr",align:null},"Entrypoint array overridden to the desired subset The docker image's ENTRYPOINT is used if this is not provided.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"env")," ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.26/#envvar-v1-core"},"EnvVar")," array")),(0,r.kt)("td",{parentName:"tr",align:null},"Additional environment variable to the given deployment")))),(0,r.kt)("h4",{id:"dynamicenv"},"DynamicEnv"),(0,r.kt)("p",null,"DynamicEnv is the Schema for the dynamicenvs API"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"apiVersion")," ",(0,r.kt)("em",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"riskified.com/v1alpha1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"kind")," ",(0,r.kt)("em",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DynamicEnv"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"metadata")," ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.26/#objectmeta-v1-meta"},"ObjectMeta"))),(0,r.kt)("td",{parentName:"tr",align:null},"Refer to Kubernetes API documentation for fields of ",(0,r.kt)("inlineCode",{parentName:"td"},"metadata"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"spec")," ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"#dynamicenvspec"},"DynamicEnvSpec"))),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"status")," ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"#dynamicenvstatus"},"DynamicEnvStatus"))),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"dynamicenvspec"},"DynamicEnvSpec"),(0,r.kt)("p",null,"DynamicEnvSpec defines the desired state of DynamicEnv"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Appears in:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#dynamicenv"},"DynamicEnv"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"istioMatches")," ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"#istiomatch"},"IstioMatch")," array")),(0,r.kt)("td",{parentName:"tr",align:null},"A list of matchers (partly corresponds to IstioMatch). Each match will have a rule of its own (merged with existing rules) ordered by their order here.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"subsets")," ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"#subset"},"Subset")," array")),(0,r.kt)("td",{parentName:"tr",align:null},"Who should participate in the given dynamic environment")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"consumers")," ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"#subset"},"Subset")," array")),(0,r.kt)("td",{parentName:"tr",align:null},"Consumers are like subsets but for deployments that do not open a service but connect to external resources for their work (e.g, offline workers). They are equivalent to subsets in the sense that they launch overriding deployments with custom image and/or settings. However, since they are only consumers no virtual service or destination route will be pointing to them.")))),(0,r.kt)("h4",{id:"dynamicenvstatus"},"DynamicEnvStatus"),(0,r.kt)("p",null,"DynamicEnvStatus defines the observed state of DynamicEnv"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Appears in:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#dynamicenv"},"DynamicEnv"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"subsetsStatus")," ",(0,r.kt)("em",{parentName:"td"},"object (keys:string, values:",(0,r.kt)("a",{parentName:"em",href:"#subsetstatus"},"SubsetStatus"),")")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"consumersStatus")," ",(0,r.kt)("em",{parentName:"td"},"object (keys:string, values:",(0,r.kt)("a",{parentName:"em",href:"#consumerstatus"},"ConsumerStatus"),")")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"state")," ",(0,r.kt)("em",{parentName:"td"},"GlobalReadyStatus")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"totalCount")," ",(0,r.kt)("em",{parentName:"td"},"integer")),(0,r.kt)("td",{parentName:"tr",align:null},"desired subsets and consumers count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"totalReady")," ",(0,r.kt)("em",{parentName:"td"},"integer")),(0,r.kt)("td",{parentName:"tr",align:null},"number of available subsets and consumers")))),(0,r.kt)("h4",{id:"istiomatch"},"IstioMatch"),(0,r.kt)("p",null,"specifies a set of criterion to be met in order for the rule to be applied to the HTTP request This\nfield is immutable after creation."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Appears in:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#dynamicenvspec"},"DynamicEnvSpec"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"headers")," ",(0,r.kt)("em",{parentName:"td"},"object (keys:string, values:",(0,r.kt)("a",{parentName:"em",href:"#stringmatch"},"StringMatch"),")")),(0,r.kt)("td",{parentName:"tr",align:null},"Header values are case-sensitive and formatted as follows:",(0,r.kt)("br",null)," - ",(0,r.kt)("inlineCode",{parentName:"td"},'exact: "value"')," for exact string match",(0,r.kt)("br",null)," - ",(0,r.kt)("inlineCode",{parentName:"td"},'prefix: "value"')," for prefix-based match",(0,r.kt)("br",null)," - ",(0,r.kt)("inlineCode",{parentName:"td"},'regex: "value"')," for RE2 style regex-based match (",(0,r.kt)("a",{parentName:"td",href:"https://github.com/google/re2/wiki/Syntax"},"https://github.com/google/re2/wiki/Syntax"),").")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sourceLabels")," ",(0,r.kt)("em",{parentName:"td"},"object (keys:string, values:string)")),(0,r.kt)("td",{parentName:"tr",align:null},"One or more labels that constrain the applicability of a rule to source (client) workloads with the given labels.")))),(0,r.kt)("h4",{id:"resourcestatus"},"ResourceStatus"),(0,r.kt)("p",null,"ResourceStatus shows the status of each item created/edited by DynamicEnv"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Appears in:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#consumerstatus"},"ConsumerStatus")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#subsetstatus"},"SubsetStatus"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")," ",(0,r.kt)("em",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the resource")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"namespace")," ",(0,r.kt)("em",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The namespace where the resource is created")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"status")," ",(0,r.kt)("em",{parentName:"td"},"LifeCycleStatus")),(0,r.kt)("td",{parentName:"tr",align:null},"The life cycle status of the resource")))),(0,r.kt)("h4",{id:"statuserror"},"StatusError"),(0,r.kt)("p",null,"StatusError shows an error we want to display in the status with the last time it happened. This\n",(0,r.kt)("em",{parentName:"p"},"does not")," have to be the only time it happened. The idea is that a list of errors should only\ncontain single occurrence of an error (just the last)."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Appears in:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#consumerstatus"},"ConsumerStatus")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#subseterrors"},"SubsetErrors"))),(0,r.kt)("h4",{id:"stringmatch"},"StringMatch"),(0,r.kt)("p",null,"Describes how to match a given string in HTTP headers. Match is case-sensitive. one and only one of\nthe fields needs to be defined (oneof)"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Appears in:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#istiomatch"},"IstioMatch"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"exact")," ",(0,r.kt)("em",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"prefix")," ",(0,r.kt)("em",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"regex")," ",(0,r.kt)("em",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"subset"},"Subset"),(0,r.kt)("p",null,"Subsets defines how to generate subsets from existing Deployments"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Appears in:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#dynamicenvspec"},"DynamicEnvSpec"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")," ",(0,r.kt)("em",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Deployment name (without namespace)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"namespace")," ",(0,r.kt)("em",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Namespace where the deployment is deployed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"podLabels")," ",(0,r.kt)("em",{parentName:"td"},"object (keys:string, values:string)")),(0,r.kt)("td",{parentName:"tr",align:null},"Labels to add to the pods of the deployment launched by this subset. Could be used in conjunction with 'SourceLabels' in the ",(0,r.kt)("inlineCode",{parentName:"td"},"IstioMatches"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"replicas")," ",(0,r.kt)("em",{parentName:"td"},"integer")),(0,r.kt)("td",{parentName:"tr",align:null},"Number of deployment replicas. Default is 1. Note: 0 is ",(0,r.kt)("em",{parentName:"td"},"invalid"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"containers")," ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"#containeroverrides"},"ContainerOverrides")," array")),(0,r.kt)("td",{parentName:"tr",align:null},"A list of container overrides (at least one of Containers or InitContainers must not be empty)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"initContainers")," ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"#containeroverrides"},"ContainerOverrides")," array")),(0,r.kt)("td",{parentName:"tr",align:null},"A list of init container overrides (at least one of Containers or InitContainers must not be empty)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"defaultVersion")," ",(0,r.kt)("em",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Default version for this subset (if different then the global default version). This is the version that will get the default route.")))),(0,r.kt)("h4",{id:"subseterrors"},"SubsetErrors"),(0,r.kt)("p",null,"SubsetErrors contains all global errors related to set subset."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Appears in:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#subsetstatus"},"SubsetStatus"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"deployment")," ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"#statuserror"},"StatusError")," array")),(0,r.kt)("td",{parentName:"tr",align:null},"Subset's deployment global errors.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"destinationRule")," ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"#statuserror"},"StatusError")," array")),(0,r.kt)("td",{parentName:"tr",align:null},"Subset's destination-rule global errors.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"virtualServices")," ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"#statuserror"},"StatusError")," array")),(0,r.kt)("td",{parentName:"tr",align:null},"Subset's virtual-services global errors.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"subset")," ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"#statuserror"},"StatusError")," array")),(0,r.kt)("td",{parentName:"tr",align:null},"Errors related to subset but not to any of the launched resources")))),(0,r.kt)("h4",{id:"subsetstatus"},"SubsetStatus"),(0,r.kt)("p",null,"SubsetStatus Contains aggregation of all resources status connected to set subset."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Appears in:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#dynamicenvstatus"},"DynamicEnvStatus"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"deployment")," ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"#resourcestatus"},"ResourceStatus"))),(0,r.kt)("td",{parentName:"tr",align:null},"Status of the deployment that belongs to the subset")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"destinationRules")," ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"#resourcestatus"},"ResourceStatus")," array")),(0,r.kt)("td",{parentName:"tr",align:null},"Status of the destination-rule that belongs to the subset")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"virtualServices")," ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"#resourcestatus"},"ResourceStatus")," array")),(0,r.kt)("td",{parentName:"tr",align:null},"Status of the virtual-service that belongs to the subset")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"subsetErrors")," ",(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"#subseterrors"},"SubsetErrors"))),(0,r.kt)("td",{parentName:"tr",align:null},"A list of global errors related to subset resources")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hash")," ",(0,r.kt)("em",{parentName:"td"},"integer")),(0,r.kt)("td",{parentName:"tr",align:null},"Hash of the current subset - for internal use")))))}u.isMDXComponent=!0}}]);