(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[370],{4690:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return l},default:function(){return p}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),o=["components"],s={title:"Node Architecture",sidebar_position:4},c="Node Architecture",d={unversionedId:"introduction/node_architecture",id:"introduction/node_architecture",isDocsHomePage:!1,title:"Node Architecture",description:"In this section, we go into more detail regarding the DSK Node architecture and services to give you a better understanding of the system and the concepts behind it.",source:"@site/docs/introduction/node_architecture.md",sourceDirName:"introduction",slug:"/introduction/node_architecture",permalink:"/docs/introduction/node_architecture",editUrl:"https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/docs/introduction/node_architecture.md",version:"current",sidebarPosition:4,frontMatter:{title:"Node Architecture",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Overview DataSpace Kit",permalink:"/docs/introduction/overview_dsk"},next:{title:"Agent Architecture",permalink:"/docs/introduction/agent_architecture"}},l=[{value:"Data Management Architecture",id:"data-management-architecture",children:[]},{value:"API Interfaces",id:"api-interfaces",children:[]},{value:"Data and Life Cycle Management",id:"data-and-life-cycle-management",children:[]},{value:"Trust Layer",id:"trust-layer",children:[]}],u={toc:l};function p(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"node-architecture"},"Node Architecture"),(0,i.kt)("p",null,"In this section, we go into more detail regarding the DSK Node architecture and services to give you a better understanding of the system and the concepts behind it."),(0,i.kt)("p",null,"The DSK Node offers a middleware for data providers and consumers to exchange data directly (peer-to-peer) between their cloud, hybrid or on-premises infrastructures. To initiate the data exchange, data providers and consumers agree on data contracts that specify the data sharing conditions via the metadata broker (DSK Hub)."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Node Architecture",src:a(8198).Z})),(0,i.kt)("h2",{id:"data-management-architecture"},"Data Management Architecture"),(0,i.kt)("p",null,"As described in the definition of data assets, the DSK Node provides a middleware to manage data streams, self-descriptions (twins) and data quality seals between platforms of data providers and consumers. The following figure provides a simplified view of different storage layers and interfaces that are available on each DSK Node."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Data Management Architecture",src:a(4270).Z})),(0,i.kt)("h2",{id:"api-interfaces"},"API Interfaces"),(0,i.kt)("p",null,"To integrate data sources and/or consume data streams, the DSK Node offers REST APIs based on the OAS3 specification, the following table provides an overview of the available interfaces."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Interface"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Capabilities"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Data API"),(0,i.kt)("td",{parentName:"tr",align:null},"OAS3 REST API"),(0,i.kt)("td",{parentName:"tr",align:null},"Provide or consume data streams, statistics, sync state")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Trust API"),(0,i.kt)("td",{parentName:"tr",align:null},"OAS3 REST API"),(0,i.kt)("td",{parentName:"tr",align:null},"Store proofs / data quality seals, data verification & audits")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Agent API"),(0,i.kt)("td",{parentName:"tr",align:null},"OAS3 REST API"),(0,i.kt)("td",{parentName:"tr",align:null},"Provisioning, linking configuration and updates of DSK Agents / SSMs")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Twin API"),(0,i.kt)("td",{parentName:"tr",align:null},"OAS3 REST API"),(0,i.kt)("td",{parentName:"tr",align:null},"Store, update and query digital twins of data sources and applications")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Message Bus"),(0,i.kt)("td",{parentName:"tr",align:null},"RabbitMQ Message Broker"),(0,i.kt)("td",{parentName:"tr",align:null},"Publish and subscribe to near real time streaming data")))),(0,i.kt)("p",null,"API clients are available as C# client on GitHub and NuGet. In addition, clients can be generated in any programming language based on the OAS3 specification."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/tributech-solutions/tributech-dsk-api-clients"},(0,i.kt)("strong",{parentName:"a"},"GitHub Repo"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.nuget.org/profiles/Tributech"},(0,i.kt)("strong",{parentName:"a"},"NuGet Packages")))),(0,i.kt)("h2",{id:"data-and-life-cycle-management"},"Data and Life Cycle Management"),(0,i.kt)("p",null,"To manage data between hot, warm and cold data paths, the DSK offers flexible data and lifecycle management. Each DSK Node represents a data management instance and includes two different kinds of internal database technologies, PostgreSQL and InfluxDB, for storing and caching data."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Lifecycle Management",src:a(1073).Z})),(0,i.kt)("p",null,"Hot data is categorized as freshly ingested data which is not necessarily persisted on the DSK Node or somewhere else. Hot data will be retrieved from a message-bus. The Data-API publishes data on the message bus."),(0,i.kt)("p",null,"Warm data is categorized as persisted data on a DSK Node which can have a defined retention period (e.g. permanent, 3 months, \u2026). Warm data will be retrieved via calls towards the Data-API."),(0,i.kt)("p",null,"Cold data is categorized as data that is transferred to external storage systems (e.g. Azure Data Lake), to use cost effective and saleable storage systems for long-term data analysis. Based on the configuration (which can be set for each data stream) the DSK Node prepares, transforms and packages data to supported cold storage formats (e.g. Parquet) and continuously transfers data to the target system via a cold storage adapter."),(0,i.kt)("h2",{id:"trust-layer"},"Trust Layer"),(0,i.kt)("p",null,"Each DataSpace Ecosystem includes a blockchain-based trust layer to store data quality seals that are generated by the Trust-API or DSK Agents. The trust layer provides an immutable storage (based on the underlying consensus mechanism), that allows data consumers to verify data quality seals cross-system or cross-company. Each DSK Node includes an instance of this trust layer."),(0,i.kt)("p",null,"Data consumers can use the Trust API or Audit Tool (part of the DSK Node web portal) to perform a data audit and verify the integrity and authenticity of consumed data points."))}p.isMDXComponent=!0},3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return l},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(a),m=r,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return a?n.createElement(f,o(o({ref:t},l),{},{components:a})):n.createElement(f,o({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4270:function(e,t,a){"use strict";t.Z=a.p+"assets/images/datamgmt_architecture-6f1c04a4587e310a7d1a8920d17f6138.png"},1073:function(e,t,a){"use strict";t.Z=a.p+"assets/images/lifecycle_mgmt-3eed990cff051d6cc7d8bc138afc93c9.png"},8198:function(e,t,a){"use strict";t.Z=a.p+"assets/images/node_architecture-b3ba75ba54b99edf54a17f381f3a8d23.png"}}]);