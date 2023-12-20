"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[152],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),m=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=m(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=m(t),d=r,g=p["".concat(s,".").concat(d)]||p[d]||u[d]||i;return t?a.createElement(g,o(o({ref:n},c),{},{components:t})):a.createElement(g,o({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=t[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},681:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var a=t(7462),r=(t(7294),t(3905));const i={sidebar_label:"Installation",sidebar_position:2},o="Installation",l={unversionedId:"getting-started/installation",id:"getting-started/installation",title:"Installation",description:"Assuming you've successfully set up your environment, following the guidelines provided on",source:"@site/docs/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/dynamic-environment-doc/getting-started/installation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Installation",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Requirements",permalink:"/dynamic-environment-doc/getting-started/requirements"},next:{title:"Running Sample",permalink:"/dynamic-environment-doc/getting-started/running"}},s={},m=[{value:"Deployment via Kustomize",id:"deployment-via-kustomize",level:3},{value:"Deploy via Helm",id:"deploy-via-helm",level:3}],c={toc:m},p="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Assuming you've successfully set up your environment, following the guidelines provided on\nthe ",(0,r.kt)("a",{parentName:"p",href:"/dynamic-environment-doc/getting-started/requirements"},"requirements page"),", you can proceed to generate manifests and deploy the\ncontroller:"),(0,r.kt)("h3",{id:"deployment-via-kustomize"},"Deployment via Kustomize"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Edit the ",(0,r.kt)("inlineCode",{parentName:"li"},"$REPOSITORY_ROOT/config/manager/manager.yaml")," file and set the ",(0,r.kt)("inlineCode",{parentName:"li"},"image")," field to the\ncurrent version (see below example of defining the image as an environment variable):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# ...\nspec:\n  # ...\n  template:\n    # ...\n    spec:\n      # ...\n      containers:\n        # ...\n        image: ghcr.io/Riskified/dynamic-environment:TAG\n")),(0,r.kt)("p",null,"You can further customize the deployment by adjusting the following settings:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dynamic-environment-doc/references/custom-settings#versionlabel-and-defaultversion"},(0,r.kt)("em",{parentName:"a"},"VersionLabel"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dynamic-environment-doc/references/custom-settings#versionlabel-and-defaultversion"},(0,r.kt)("em",{parentName:"a"},"DefaultVersion"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dynamic-environment-doc/references/custom-settings#labels-to-remove-when-creating-overriding-deployments"},(0,r.kt)("em",{parentName:"a"},"--remove-labels")))),(0,r.kt)("p",null,"These settings can be changed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"config/manager/manager.yaml")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# ...\nspec:\n  # ...\n  template:\n    # ...\n    spec:\n      # ...\n      containers:\n        # ...\n        args:\n          - --leader-elect\n          - --version-label\n          - version <-- this should be replaced to change the label\n          - --default-version\n          - shared <-- this should be replaced to change the default version\n        # Uncomment the lines below (and modify as needed) to specify labels to be removed (comma-separated list)\n        #- --remove-labels\n        #- argocd.argoproj.io/instance\n")),(0,r.kt)("p",null,"Once you have configured everything, deploy the controller using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'make deploy\n# or with image as environment varible\nmake deploy IMG="ghcr.io/Riskified/dynamic-environment:TAG"\n')),(0,r.kt)("h3",{id:"deploy-via-helm"},"Deploy via Helm"),(0,r.kt)("p",null,"Helm uses a ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml")," file (",(0,r.kt)("inlineCode",{parentName:"p"},"helm/dynamic-environment/values.yaml"),") with predefined values\nyou can override. At the very least, ensure you correctly set up the image details:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=values.yaml",title:"values.yaml"},"[ ... ]\nimage:\n  repository: ghcr.io/Riskified/dynamic-environment\n  tag: TAG\n  pullPolicy: IfNotPresent\n  [ ... ]\n")),(0,r.kt)("p",null,"For more extensive customization, refer to the comments in the values file and compare them to\nthe ",(0,r.kt)("a",{parentName:"p",href:"/dynamic-environment-doc/references/custom-settings"},"custom settings")," for in-depth details."),(0,r.kt)("p",null,"Once you've finished making your edits, execute the following command (from within the ",(0,r.kt)("inlineCode",{parentName:"p"},"helm"),"\ndirectory):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# you can edit this command to set values or specify alternative settings file\nhelm install dynamic-environment-operator .\n")))}u.isMDXComponent=!0}}]);