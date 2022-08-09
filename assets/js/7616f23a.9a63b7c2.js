"use strict";(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[2247],{50816:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var n=a(83117),i=a(80102),r=(a(67294),a(3905)),o=["components"],s={title:"Overview",sidebar_position:1},d=void 0,c={unversionedId:"introduction/overview",id:"introduction/overview",title:"Overview",description:"Welcome to our official documentation page!",source:"@site/docs/introduction/overview.md",sourceDirName:"introduction",slug:"/introduction/overview",permalink:"/docs/next/introduction/overview",draft:!1,editUrl:"https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/docs/introduction/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Node Architecture",permalink:"/docs/next/introduction/node_architecture"}},u={},l=[{value:"Tributech Node",id:"tributech-node",level:2},{value:"Tributech Agent",id:"tributech-agent",level:2},{value:"Tributech OEM Module",id:"tributech-oem-module",level:2},{value:"Definition of Data Assets",id:"definition-of-data-assets",level:2},{value:"Data Streams",id:"data-streams",level:3},{value:"Self-description",id:"self-description",level:3},{value:"Quality Seals",id:"quality-seals",level:3},{value:"Quick Links",id:"quick-links",level:2}],p={toc:l};function f(e){var t=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Welcome to our official documentation page!"),(0,r.kt)("p",null,"At Tribuech we offer a solution for trustworthy data as a service by providing a data management middleware and an IoT stack that includes a novel security layer to notarize data between source and consumer. Our core components consist of a Tributech Node and the Tributech Agent Edge or Embedded in form of our Tributech OEM Module."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Product Overview",src:a(90864).Z,width:"1638",height:"810"})),(0,r.kt)("h2",{id:"tributech-node"},"Tributech Node"),(0,r.kt)("p",null,"The Tributech Node acts as connector and middleware for data providers and data consumers."),(0,r.kt)("p",null,"Data providers can connect their data sources by using open API interfaces, data pipelines or Tributech Agents (edge or embedded). The included intelligent cache and storage layer allows users to easily manage the data between warm and cold storage paths as well as accessing audit trails and well-structured metadata for each data assets. Connected data sources are described and contextualized through digital twins and indexed in private or public data catalogs. For each data point or package, data quality seals are created to provide trust, traceability and auditability to potential data consumers."),(0,r.kt)("p",null,"Data consumers can access and analyze shared data by using the open API interfaces, data pipelines or the integrated visualization and dashboarding capabilities. In addition, data consumers can verify and audit the data quality seals of shared data via API or web portal, before they use it in their applications or take business-critical actions."),(0,r.kt)("h2",{id:"tributech-agent"},"Tributech Agent"),(0,r.kt)("p",null,"The Tributech Agent is an application for edge and embedded IoT devices that can easily be integrated into any IoT platform stack."),(0,r.kt)("p",null,"The core features of the Tributech Agent are the standardized contextualization and data management via digital twins as well as the creation of data quality seals for providing trust, traceability and auditability of data streams. The Agent also includes connectivity to the blockchain-based trust layer to store data quality seals as well as connectivity to the data layer of Tributech Nodes or other IoT middleware solutions in-between."),(0,r.kt)("p",null,"Data providers can use the Tributech Agent to easily connect different green- or brownfield IoT solutions to their Tributech Nodes and extend IoT data sources with required contextualization via digital twins and auditability via data quality seals."),(0,r.kt)("h2",{id:"tributech-oem-module"},"Tributech OEM Module"),(0,r.kt)("p",null,"The Tributech OEM Module for smart and connected products, providing a competitive foundation for your IoT application. It includes connectivity for NB-IoT and LTE-M standard and unique features such as digital-twin-based configuration & data management, high-end hardware security, blockchain-based data verification & audits and built-in data sharing. "),(0,r.kt)("p",null,"The Tributech OEM module is packaged as a system-on-module (SoM) to allow an easy integration into the hardware design of embedded devices. Furthermore we offe it in form of an Arduino Shield for easy prototyping."),(0,r.kt)("p",null,"Find out more about our ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/oem_module/overview"},(0,r.kt)("strong",{parentName:"a"},"Tributech OEM Module"))),(0,r.kt)("h2",{id:"definition-of-data-assets"},"Definition of Data Assets"),(0,r.kt)("p",null,"In general, we differentiate between three different types of data that are managed by Tributech's services."),(0,r.kt)("p",null,"Our services are built to integrate, qualify and manage any kind of data assets between data providers and data consumers. Data assets are defined by three elements: data streams (e.g. time-series data of a sensor or a document from an ERP system), a self-description of the data asset\u2019s properties and a data quality seal that provides cross-system data verification and audit capabilities."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Asset Definition",src:a(11704).Z,width:"2303",height:"256"})),(0,r.kt)("h3",{id:"data-streams"},"Data Streams"),(0,r.kt)("p",null,"This type of data contains the runtime data of connected data sources that is owned by data providers. It may contain intellectual property and is in general classified as sensitive data within the Tributech technology stack. This data is always stored or cached within the data layer of a Tributech Node. By default, this data never leaves the data owners/providers system. It requires the so-called \u201cdata contract\u201d that defines the data sharing conditions, and if granted by the owner, data gets synced peer-to-peer between the data provider and consumer."),(0,r.kt)("h3",{id:"self-description"},"Self-description"),(0,r.kt)("p",null,"Each data stream that is processed by Tributech's services includes a self-description, consisting of a twin describing the data asset\u2019s properties and relations to represent a hierarchy or dependencies. The self-descriptions are based on the open DTDL (Digital Twin Definition Language) standard and managed by our users through public and private data catalogs."),(0,r.kt)("h3",{id:"quality-seals"},"Quality Seals"),(0,r.kt)("p",null,"To enable the verification of data integrity and authenticity between a data source and a data consumer across different infrastructures/systems, our software provides a blockchain-based trust layer to store verifiable data quality seals, also called proofs. For each (raw) datapoint or set of datapoints (depending on the configuration), a signed SHA 256 root hash is created and stored on-chain within a Node. Each quality seal includes a reference pointing to the raw data that is stored off-chain in the data layer of a Tributech Node or an external storage system."),(0,r.kt)("p",null,"Data consumers can use the Trust API or Audit Tool (included in the Node's web portal) to perform a data audit and verify the integrity and authenticity of consumed data points."),(0,r.kt)("h2",{id:"quick-links"},"Quick Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Head over to our ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/setup/overview"},(0,r.kt)("strong",{parentName:"a"},"Setup Section"))," to get a better understanding of our core components and available deployment options.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/provide_data/overview"},(0,r.kt)("strong",{parentName:"a"},"Provide Data"))," if you want to learn more about the different integration and data management options.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/next/consume_data/overview"},(0,r.kt)("strong",{parentName:"a"},"Consume Data"))," provides insights about different options to consume, visualize and audit data.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Check out ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/verify_data/overview"},(0,r.kt)("strong",{parentName:"a"},"Verify Data"))," if you want to find out more about our built-in data verification and the available data audit options.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/next/oem_module/overview"},(0,r.kt)("strong",{parentName:"a"},"Tributech OEM Module"))," for embedded IoT devices."))))}f.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return f}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=n.createContext({}),c=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),f=i,h=p["".concat(d,".").concat(f)]||p[f]||l[f]||r;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},11704:function(e,t,a){t.Z=a.p+"assets/images/asset_definition-b655c74a52d47769d0b3a9ae9be08827.svg"},90864:function(e,t,a){t.Z=a.p+"assets/images/overviewnew-59ba389fa1d2a386d7f46457235ad936.png"}}]);