"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6050],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,f=s["".concat(p,".").concat(m)]||s[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},51699:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Deployment"},p=void 0,u={unversionedId:"modules/dataproxy/quick_start",id:"modules/dataproxy/quick_start",title:"Deployment",description:"All deploying files at inlong-dataproxy directory.",source:"@site/docs/modules/dataproxy/quick_start.md",sourceDirName:"modules/dataproxy",slug:"/modules/dataproxy/quick_start",permalink:"/docs/next/modules/dataproxy/quick_start",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/docs/modules/dataproxy/quick_start.md",tags:[],version:"current",frontMatter:{title:"Deployment"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/next/modules/dataproxy/overview"},next:{title:"Overview",permalink:"/docs/next/modules/tubemq/overview"}},d={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Configure InLong-Manager URL",id:"configure-inlong-manager-url",level:3},{value:"run",id:"run",level:2},{value:"check",id:"check",level:2},{value:"Add DataProxy configuration to InLong-Manager",id:"add-dataproxy-configuration-to-inlong-manager",level:2}],s={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"All deploying files at ",(0,o.kt)("inlineCode",{parentName:"p"},"inlong-dataproxy")," directory."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("h3",{id:"configure-inlong-manager-url"},"Configure InLong-Manager URL"),(0,o.kt)("p",null,"configuration file: ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/common.properties"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# manager address\nmanager.hosts=127.0.0.1:8083\n# audit proxy address\naudit.proxys=127.0.0.1:10081\n")),(0,o.kt)("h2",{id:"run"},"run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#By default, pulsar is used as the message middleware, and the dataproxy-pulsar.conf configuration file is loaded.\nbash +x bin/dataproxy-start.sh\nor\nbash +x bin/dataproxy-start.sh pulsar\n# If using Inlong TubeMQ\n# bash +x bin/dataproxy-start.sh tube\n")),(0,o.kt)("h2",{id:"check"},"check"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"telnet 127.0.0.1 46801\n")),(0,o.kt)("h2",{id:"add-dataproxy-configuration-to-inlong-manager"},"Add DataProxy configuration to InLong-Manager"),(0,o.kt)("p",null,"After installing the DataProxy, you need to add the IP of the DataProxy service into the InLong-Manager."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Modify the following information and execute command:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl --header "Content-Type: application/json" --request POST http://your_manager_host:8083/api/inlong/manager/openapi/cluster/save --data \'\n{\n   "name": "default_dataproxy",\n   "type": "DATA_PROXY",\n   "ip": "your_dataproxy_ip",\n   "port": 46801,\n   "mqSetName": "default_set_name",\n   "inCharges": "admin",\n   "creator": "admin"\n}\n\'\n')),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"[Note]")),(0,o.kt)("p",{parentName:"blockquote"},"Please modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"ip")," field to the real IP (or hostname) of the DataProxy, the format is ",(0,o.kt)("inlineCode",{parentName:"p"},"node1:port1,node2:port2"),", and separate them with ",(0,o.kt)("inlineCode",{parentName:"p"},","),"."),(0,o.kt)("p",{parentName:"blockquote"},"If all nodes in the ",(0,o.kt)("inlineCode",{parentName:"p"},"ip")," field have the same port, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"node1,node2")," and modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"port")," field to the default port for those nodes.")))))}m.isMDXComponent=!0}}]);