"use strict";(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[2408],{11510:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),o=["components"],s={title:"Node Architecture",sidebar_position:2},c="Node Architecture",l={unversionedId:"introduction/node_architecture",id:"version-2.0.0/introduction/node_architecture",title:"Node Architecture",description:"In this section, we go into more detail covering Tributech's Node architecture and services to provide you with a better understanding of the system and the concepts behind it.",source:"@site/versioned_docs/version-2.0.0/introduction/node_architecture.md",sourceDirName:"introduction",slug:"/introduction/node_architecture",permalink:"/2.0.0/introduction/node_architecture",draft:!1,editUrl:"https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/versioned_docs/version-2.0.0/introduction/node_architecture.md",tags:[],version:"2.0.0",sidebarPosition:2,frontMatter:{title:"Node Architecture",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/2.0.0/"},next:{title:"Agent Architecture",permalink:"/2.0.0/introduction/agent_architecture"}},d={},u=[{value:"Data Management Architecture",id:"data-management-architecture",level:2},{value:"API Interfaces",id:"api-interfaces",level:2},{value:"Data and Life Cycle Management",id:"data-and-life-cycle-management",level:2},{value:"Trust Layer",id:"trust-layer",level:2},{value:"Data Sharing",id:"data-sharing",level:2}],p={toc:u};function h(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"node-architecture"},"Node Architecture"),(0,i.kt)("p",null,"In this section, we go into more detail covering Tributech's Node architecture and services to provide you with a better understanding of the system and the concepts behind it."),(0,i.kt)("h2",{id:"data-management-architecture"},"Data Management Architecture"),(0,i.kt)("p",null,"As described in the definition of data assets, the Tributech Node provides a middleware to manage data streams, self-descriptions (twins) and data quality seals between platforms of data providers and consumers. The following figure provides a simplified view of different storage layers and interfaces that are available on each Node."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Data Management Architecture",src:a(50768).Z,width:"4567",height:"2820"})),(0,i.kt)("h2",{id:"api-interfaces"},"API Interfaces"),(0,i.kt)("p",null,"To integrate data sources and/or consume data streams, the Tributech Node offers REST APIs based on the OAS3 specification, the following table provides an overview of the available interfaces."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Interface"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Capabilities"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Data API"),(0,i.kt)("td",{parentName:"tr",align:null},"OAS3 REST API"),(0,i.kt)("td",{parentName:"tr",align:null},"Provide or consume data streams, statistics, sync state")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Trust API"),(0,i.kt)("td",{parentName:"tr",align:null},"OAS3 REST API"),(0,i.kt)("td",{parentName:"tr",align:null},"Store proofs / data quality seals, data verification & audits")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Agent API"),(0,i.kt)("td",{parentName:"tr",align:null},"OAS3 REST API"),(0,i.kt)("td",{parentName:"tr",align:null},"Provisioning, linking configuration and updates of Tributech Agents")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Twin API"),(0,i.kt)("td",{parentName:"tr",align:null},"OAS3 REST API"),(0,i.kt)("td",{parentName:"tr",align:null},"Store, update and query digital twins of data sources and applications")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Message Bus"),(0,i.kt)("td",{parentName:"tr",align:null},"RabbitMQ Message Broker"),(0,i.kt)("td",{parentName:"tr",align:null},"Publish and subscribe to near real time streaming data")))),(0,i.kt)("p",null,"API clients are available as C# client on GitHub and NuGet. In addition, clients can be generated in any programming language based on the OAS3 specification."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/tributech-solutions/tributech-dsk-api-clients"},(0,i.kt)("strong",{parentName:"a"},"GitHub Repo"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.nuget.org/profiles/Tributech"},(0,i.kt)("strong",{parentName:"a"},"NuGet Packages")))),(0,i.kt)("h2",{id:"data-and-life-cycle-management"},"Data and Life Cycle Management"),(0,i.kt)("p",null,"To manage data between hot, warm and cold data paths, we offer flexible data and lifecycle management. Each Tributech Node represents a data management instance and includes two different kinds of internal database technologies, PostgreSQL and InfluxDB, for storing and caching data."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Lifecycle Management",src:a(83862).Z,width:"1339",height:"798"})),(0,i.kt)("p",null,"Hot data is categorized as freshly ingested data which is not necessarily persisted on the Node or somewhere else. Hot data will be retrieved from a message-bus. The Data-API publishes data on the message bus."),(0,i.kt)("p",null,"Warm data is categorized as persisted data on a Node which can have a defined retention period (e.g. permanent, 3 months, \u2026). Warm data will be retrieved via calls towards the Data-API."),(0,i.kt)("p",null,"Cold data is categorized as data that is transferred to external storage systems (e.g. Azure Data Lake), to use cost effective and saleable storage systems for long-term data analysis. Based on the configuration (which can be set for each data stream), our Node prepares, transforms and packages data to supported cold storage formats (e.g. Parquet) and continuously transfers data to the target system via a cold storage adapter."),(0,i.kt)("h2",{id:"trust-layer"},"Trust Layer"),(0,i.kt)("p",null,"Each DataSpace includes a blockchain-based trust layer to store data quality seals that are generated by the Trust-API or Tributech Agents. The trust layer provides an immutable storage (based on the underlying consensus mechanism), that allows data consumers to verify data quality seals cross-system or cross-company. Each Tributech Node includes an instance of this trust layer."),(0,i.kt)("p",null,"Data consumers can use the Trust API or Audit Tool (part of the Node's web portal) to perform a data audit and verify the integrity and authenticity of consumed data points."),(0,i.kt)("h2",{id:"data-sharing"},"Data Sharing"),(0,i.kt)("p",null,"To initiate the data exchange, data providers and consumers agree on data contracts that specify the required data sharing conditions.\n",(0,i.kt)("img",{alt:"Node Architecture",src:a(44343).Z,width:"1296",height:"840"})))}h.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(a),h=r,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||i;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},50768:function(e,t,a){t.Z=a.p+"assets/images/datamgmt_architecture-1eeb0057b59506d947c7a028a9899258.png"},83862:function(e,t,a){t.Z=a.p+"assets/images/lifecycle_mgmt-3eed990cff051d6cc7d8bc138afc93c9.png"},44343:function(e,t,a){t.Z=a.p+"assets/images/node_architecture-be11b4b3b125631a6151170ca9c317fc.svg"}}]);