"use strict";(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[8304],{24633:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(58168),r=(a(96540),a(15680));const i={title:"Node Architecture",sidebar_position:4},o="Node Architecture",s={unversionedId:"introduction/node_architecture",id:"version-1.10.0/introduction/node_architecture",title:"Node Architecture",description:"In this section, we go into more detail regarding the DSK Node architecture and services to give you a better understanding of the system and the concepts behind it.",source:"@site/versioned_docs/version-1.10.0/introduction/node_architecture.md",sourceDirName:"introduction",slug:"/introduction/node_architecture",permalink:"/1.10.0/introduction/node_architecture",draft:!1,editUrl:"https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/versioned_docs/version-1.10.0/introduction/node_architecture.md",tags:[],version:"1.10.0",sidebarPosition:4,frontMatter:{title:"Node Architecture",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Overview DataSpace Kit",permalink:"/1.10.0/introduction/overview_dsk"},next:{title:"Agent Architecture",permalink:"/1.10.0/introduction/agent_architecture"}},l={},d=[{value:"Data Management Architecture",id:"data-management-architecture",level:2},{value:"API Interfaces",id:"api-interfaces",level:2},{value:"Data and Life Cycle Management",id:"data-and-life-cycle-management",level:2},{value:"Trust Layer",id:"trust-layer",level:2},{value:"Data Sharing",id:"data-sharing",level:2}],c={toc:d},u="wrapper";function g(e){let{components:t,...i}=e;return(0,r.yg)(u,(0,n.A)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"node-architecture"},"Node Architecture"),(0,r.yg)("p",null,"In this section, we go into more detail regarding the DSK Node architecture and services to give you a better understanding of the system and the concepts behind it."),(0,r.yg)("h2",{id:"data-management-architecture"},"Data Management Architecture"),(0,r.yg)("p",null,"As described in the definition of data assets, the DSK Node provides a middleware to manage data streams, self-descriptions (twins) and data quality seals between platforms of data providers and consumers. The following figure provides a simplified view of different storage layers and interfaces that are available on each DSK Node."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Data Management Architecture",src:a(57352).A,width:"4567",height:"2820"})),(0,r.yg)("h2",{id:"api-interfaces"},"API Interfaces"),(0,r.yg)("p",null,"To integrate data sources and/or consume data streams, the DSK Node offers REST APIs based on the OAS3 specification, the following table provides an overview of the available interfaces."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Interface"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Capabilities"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Data API"),(0,r.yg)("td",{parentName:"tr",align:null},"OAS3 REST API"),(0,r.yg)("td",{parentName:"tr",align:null},"Provide or consume data streams, statistics, sync state")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Trust API"),(0,r.yg)("td",{parentName:"tr",align:null},"OAS3 REST API"),(0,r.yg)("td",{parentName:"tr",align:null},"Store proofs / data quality seals, data verification & audits")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Agent API"),(0,r.yg)("td",{parentName:"tr",align:null},"OAS3 REST API"),(0,r.yg)("td",{parentName:"tr",align:null},"Provisioning, linking configuration and updates of DSK Agents / SSMs")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Twin API"),(0,r.yg)("td",{parentName:"tr",align:null},"OAS3 REST API"),(0,r.yg)("td",{parentName:"tr",align:null},"Store, update and query digital twins of data sources and applications")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Message Bus"),(0,r.yg)("td",{parentName:"tr",align:null},"RabbitMQ Message Broker"),(0,r.yg)("td",{parentName:"tr",align:null},"Publish and subscribe to near real time streaming data")))),(0,r.yg)("p",null,"API clients are available as C# client on GitHub and NuGet. In addition, clients can be generated in any programming language based on the OAS3 specification."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/tributech-solutions/tributech-dsk-api-clients"},(0,r.yg)("strong",{parentName:"a"},"GitHub Repo"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://www.nuget.org/profiles/Tributech"},(0,r.yg)("strong",{parentName:"a"},"NuGet Packages")))),(0,r.yg)("h2",{id:"data-and-life-cycle-management"},"Data and Life Cycle Management"),(0,r.yg)("p",null,"To manage data between hot, warm and cold data paths, the DSK offers flexible data and lifecycle management. Each DSK Node represents a data management instance and includes two different kinds of internal database technologies, PostgreSQL and InfluxDB, for storing and caching data."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Lifecycle Management",src:a(99463).A,width:"1339",height:"798"})),(0,r.yg)("p",null,"Hot data is categorized as freshly ingested data which is not necessarily persisted on the DSK Node or somewhere else. Hot data will be retrieved from a message-bus. The Data-API publishes data on the message bus."),(0,r.yg)("p",null,"Warm data is categorized as persisted data on a DSK Node which can have a defined retention period (e.g. permanent, 3 months, \u2026). Warm data will be retrieved via calls towards the Data-API."),(0,r.yg)("p",null,"Cold data is categorized as data that is transferred to external storage systems (e.g. Azure Data Lake), to use cost effective and saleable storage systems for long-term data analysis. Based on the configuration (which can be set for each data stream) the DSK Node prepares, transforms and packages data to supported cold storage formats (e.g. Parquet) and continuously transfers data to the target system via a cold storage adapter."),(0,r.yg)("h2",{id:"trust-layer"},"Trust Layer"),(0,r.yg)("p",null,"Each DataSpace Ecosystem includes a blockchain-based trust layer to store data quality seals that are generated by the Trust-API or DSK Agents. The trust layer provides an immutable storage (based on the underlying consensus mechanism), that allows data consumers to verify data quality seals cross-system or cross-company. Each DSK Node includes an instance of this trust layer."),(0,r.yg)("p",null,"Data consumers can use the Trust API or Audit Tool (part of the DSK Node web portal) to perform a data audit and verify the integrity and authenticity of consumed data points."),(0,r.yg)("h2",{id:"data-sharing"},"Data Sharing"),(0,r.yg)("p",null,"To initiate the data exchange, data providers and consumers agree on data contracts that specify the data sharing conditions via the metadata broker (DSK Hub).\n",(0,r.yg)("img",{alt:"Node Architecture",src:a(58386).A})))}g.isMDXComponent=!0},15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>m});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(a),p=r,m=u["".concat(l,".").concat(p)]||u[p]||g[p]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},57352:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/datamgmt_architecture-1eeb0057b59506d947c7a028a9899258.png"},99463:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/lifecycle_mgmt-3eed990cff051d6cc7d8bc138afc93c9.png"},58386:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/node_architecture-be11b4b3b125631a6151170ca9c317fc.svg"}}]);