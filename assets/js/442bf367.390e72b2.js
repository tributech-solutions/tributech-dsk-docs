"use strict";(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[5799],{10226:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=a(58168),n=(a(96540),a(15680));const r={slug:"/",title:"Overview",sidebar_position:1},o=void 0,s={unversionedId:"introduction/overview",id:"version-2.0.0/introduction/overview",title:"Overview",description:"Welcome to our official documentation page!",source:"@site/versioned_docs/version-2.0.0/introduction/overview.md",sourceDirName:"introduction",slug:"/",permalink:"/2.0.0/",draft:!1,editUrl:"https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/versioned_docs/version-2.0.0/introduction/overview.md",tags:[],version:"2.0.0",sidebarPosition:1,frontMatter:{slug:"/",title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Node Architecture",permalink:"/2.0.0/introduction/node_architecture"}},d={},l=[{value:"Tributech Node",id:"tributech-node",level:2},{value:"Tributech Agent",id:"tributech-agent",level:2},{value:"Tributech OEM Module",id:"tributech-oem-module",level:2},{value:"Definition of Data Assets",id:"definition-of-data-assets",level:2},{value:"Data Streams",id:"data-streams",level:3},{value:"Self-description",id:"self-description",level:3},{value:"Quality Seals",id:"quality-seals",level:3},{value:"Quick Links",id:"quick-links",level:2}],c={toc:l},u="wrapper";function p(e){let{components:t,...r}=e;return(0,n.yg)(u,(0,i.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Welcome to our official documentation page!"),(0,n.yg)("p",null,"At Tribuech we offer a solution for trustworthy data as a service by providing a data management middleware and an IoT stack that includes a novel security layer to notarize data between source and consumer. Our core components consist of a Tributech Node and the Tributech Agent Edge or Embedded in form of our Tributech OEM Module."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Product Overview",src:a(86436).A,width:"1638",height:"810"})),(0,n.yg)("h2",{id:"tributech-node"},"Tributech Node"),(0,n.yg)("p",null,"The Tributech Node acts as connector and middleware for data providers and data consumers."),(0,n.yg)("p",null,"Data providers can connect their data sources by using open API interfaces, data pipelines or Tributech Agents (edge or embedded). The included intelligent cache and storage layer allows users to easily manage the data between warm and cold storage paths as well as accessing audit trails and well-structured metadata for each data assets. Connected data sources are described and contextualized through digital twins and indexed in private or public data catalogs. For each data point or package, data quality seals are created to provide trust, traceability and auditability to potential data consumers."),(0,n.yg)("p",null,"Data consumers can access and analyze shared data by using the open API interfaces, data pipelines or the integrated visualization and dashboarding capabilities. In addition, data consumers can verify and audit the data quality seals of shared data via API or web portal, before they use it in their applications or take business-critical actions."),(0,n.yg)("h2",{id:"tributech-agent"},"Tributech Agent"),(0,n.yg)("p",null,"The Tributech Agent is an application for edge and embedded IoT devices that can easily be integrated into any IoT platform stack."),(0,n.yg)("p",null,"The core features of the Tributech Agent are the standardized contextualization and data management via digital twins as well as the creation of data quality seals for providing trust, traceability and auditability of data streams. The Agent also includes connectivity to the blockchain-based trust layer to store data quality seals as well as connectivity to the data layer of Tributech Nodes or other IoT middleware solutions in-between."),(0,n.yg)("p",null,"Data providers can use the Tributech Agent to easily connect different green- or brownfield IoT solutions to their Tributech Nodes and extend IoT data sources with required contextualization via digital twins and auditability via data quality seals."),(0,n.yg)("h2",{id:"tributech-oem-module"},"Tributech OEM Module"),(0,n.yg)("p",null,"The Tributech OEM Module for smart and connected products, providing a competitive foundation for your IoT application. It includes connectivity for NB-IoT and LTE-M standard and unique features such as digital-twin-based configuration & data management, high-end hardware security, blockchain-based data verification & audits and built-in data sharing."),(0,n.yg)("p",null,"The Tributech OEM module is packaged as a system-on-module (SoM) to allow an easy integration into the hardware design of embedded devices. Furthermore we offe it in form of an Arduino Shield for easy prototyping."),(0,n.yg)("p",null,"Find out more about our ",(0,n.yg)("a",{parentName:"p",href:"/2.0.0/oem_module/overview"},(0,n.yg)("strong",{parentName:"a"},"Tributech OEM Module"))),(0,n.yg)("h2",{id:"definition-of-data-assets"},"Definition of Data Assets"),(0,n.yg)("p",null,"In general, we differentiate between three different types of data that are managed by Tributech's services."),(0,n.yg)("p",null,"Our services are built to integrate, qualify and manage any kind of data assets between data providers and data consumers. Data assets are defined by three elements: data streams (e.g. time-series data of a sensor or a document from an ERP system), a self-description of the data asset\u2019s properties and a data quality seal that provides cross-system data verification and audit capabilities."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Asset Definition",src:a(8366).A,width:"2303",height:"256"})),(0,n.yg)("h3",{id:"data-streams"},"Data Streams"),(0,n.yg)("p",null,"This type of data contains the runtime data of connected data sources that is owned by data providers. It may contain intellectual property and is in general classified as sensitive data within the Tributech technology stack. This data is always stored or cached within the data layer of a Tributech Node. By default, this data never leaves the data owners/providers system. It requires the so-called \u201cdata contract\u201d that defines the data sharing conditions, and if granted by the owner, data gets synced peer-to-peer between the data provider and consumer."),(0,n.yg)("h3",{id:"self-description"},"Self-description"),(0,n.yg)("p",null,"Each data stream that is processed by Tributech's services includes a self-description, consisting of a twin describing the data asset\u2019s properties and relations to represent a hierarchy or dependencies. The self-descriptions are based on the open DTDL (Digital Twin Definition Language) standard and managed by our users through public and private data catalogs."),(0,n.yg)("h3",{id:"quality-seals"},"Quality Seals"),(0,n.yg)("p",null,"To enable the verification of data integrity and authenticity between a data source and a data consumer across different infrastructures/systems, our software provides a blockchain-based trust layer to store verifiable data quality seals, also called proofs. For each (raw) datapoint or set of datapoints (depending on the configuration), a signed SHA 256 root hash is created and stored on-chain within a Node. Each quality seal includes a reference pointing to the raw data that is stored off-chain in the data layer of a Tributech Node or an external storage system."),(0,n.yg)("p",null,"Data consumers can use the Trust API or Audit Tool (included in the Node's web portal) to perform a data audit and verify the integrity and authenticity of consumed data points."),(0,n.yg)("h2",{id:"quick-links"},"Quick Links"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Head over to our ",(0,n.yg)("a",{parentName:"p",href:"/2.0.0/setup/overview"},(0,n.yg)("strong",{parentName:"a"},"Setup Section"))," to get a better understanding of our core components and available deployment options.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"See ",(0,n.yg)("a",{parentName:"p",href:"/2.0.0/provide_data/overview"},(0,n.yg)("strong",{parentName:"a"},"Provide Data"))," if you want to learn more about the different integration and data management options.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"/2.0.0/consume_data/overview"},(0,n.yg)("strong",{parentName:"a"},"Consume Data"))," provides insights about different options to consume, visualize and audit data.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Check out ",(0,n.yg)("a",{parentName:"p",href:"/2.0.0/verify_data/overview"},(0,n.yg)("strong",{parentName:"a"},"Verify Data"))," if you want to find out more about our built-in data verification and the available data audit options.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"/2.0.0/oem_module/overview"},(0,n.yg)("strong",{parentName:"a"},"Tributech OEM Module"))," for embedded IoT devices."))))}p.isMDXComponent=!0},15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>g});var i=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=i.createContext({}),l=function(e){var t=i.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return i.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(a),h=n,g=u["".concat(d,".").concat(h)]||u[h]||p[h]||r;return a?i.createElement(g,o(o({ref:t},c),{},{components:a})):i.createElement(g,o({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=h;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var l=2;l<r;l++)o[l]=a[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8366:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/asset_definition-b655c74a52d47769d0b3a9ae9be08827.svg"},86436:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/overviewnew-59ba389fa1d2a386d7f46457235ad936.png"}}]);