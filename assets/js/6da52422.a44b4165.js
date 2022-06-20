"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3031],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=o,f=s["".concat(c,".").concat(m)]||s[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9360:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={title:"How to Build",sidebar_position:1},c=void 0,u={unversionedId:"quick_start/how_to_build",id:"quick_start/how_to_build",title:"How to Build",description:"Download Source Code",source:"@site/docs/quick_start/how_to_build.md",sourceDirName:"quick_start",slug:"/quick_start/how_to_build",permalink:"/docs/next/quick_start/how_to_build",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/quick_start/how_to_build.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"How to Build",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Data Node Plugin",permalink:"/docs/next/design_and_concept/inlong_data_node_plugin"},next:{title:"Hive Example",permalink:"/docs/next/quick_start/hive_example"}},d={},p=[{value:"Download Source Code",id:"download-source-code",level:2},{value:"Build Binary Package",id:"build-binary-package",level:2},{value:"Build Docker Images",id:"build-docker-images",level:2}],s={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"download-source-code"},"Download Source Code"),(0,a.kt)("p",null,"Download Source Code from ",(0,a.kt)("a",{parentName:"p",href:"https://inlong.apache.org/download/main/"},"InLong Download Page"),"."),(0,a.kt)("h2",{id:"build-binary-package"},"Build Binary Package"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Java ",(0,a.kt)("a",{parentName:"li",href:"https://adoptopenjdk.net/?variant=openjdk8"},"JDK 8")),(0,a.kt)("li",{parentName:"ul"},"Maven 3.6.1+")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ mvn clean install -DskipTests\n")),(0,a.kt)("p",null,"(Optional) Compile using docker image:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ docker pull maven:3.6-openjdk-8\n$ docker run -v `pwd`:/inlong  -w /inlong maven:3.6-openjdk-8 mvn clean install -DskipTests\n")),(0,a.kt)("p",null,"after compile successfully, you could find distribution file at ",(0,a.kt)("inlineCode",{parentName:"p"},"inlong-distribution/target")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"tar.gz")," format, it includes following files:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker\ninlong-agent\ninlong-audit\ninlong-dataproxy\ninlong-manager\ninlong-sort\ninlong-tubemq-manager\ninlong-tubemq-server\ninlong-dashboard\n")),(0,a.kt)("h2",{id:"build-docker-images"},"Build Docker Images"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"Docker")," 19.03.1+")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mvn clean package -DskipTests -Pdocker\n")))}m.isMDXComponent=!0}}]);