(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[820],{3154:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var n=a(2122),i=a(9756),r=(a(7294),a(3905)),o=["components"],s={title:"Overview DataSpace Kit",sidebar_position:3},d="Overview DataSpace Kit",c={unversionedId:"introduction/overview_dsk",id:"introduction/overview_dsk",isDocsHomePage:!1,title:"Overview DataSpace Kit",description:"In this part we provide an overview of the Tributech DataSpace Kit components, architecture and key aspects of the technology. The three fundamental components for the DSK are the DataSpace Hub, the DataSpace Node and the DataSpace Agent. An overview of the DSK components is presented below.",source:"@site/docs/introduction/overview_dsk.md",sourceDirName:"introduction",slug:"/introduction/overview_dsk",permalink:"/docs/introduction/overview_dsk",editUrl:"https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/docs/introduction/overview_dsk.md",version:"current",sidebarPosition:3,frontMatter:{title:"Overview DataSpace Kit",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Data Ecosystems & Dataspaces",permalink:"/docs/introduction/data_ecosystems_spaces"},next:{title:"Node Architecture",permalink:"/docs/introduction/node_architecture"}},l=[{value:"Architecture Overview",id:"architecture-overview",children:[]},{value:"DataSpace Hub",id:"dataspace-hub",children:[]},{value:"DataSpace Node",id:"dataspace-node",children:[]},{value:"DataSpace Agent",id:"dataspace-agent",children:[]},{value:"Definition of Data Assets",id:"definition-of-data-assets",children:[{value:"Data Streams",id:"data-streams",children:[]},{value:"Self-description",id:"self-description",children:[]},{value:"Quality Seals",id:"quality-seals",children:[]}]}],u={toc:l};function p(e){var t=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview-dataspace-kit"},"Overview DataSpace Kit"),(0,r.kt)("p",null,"In this part we provide an overview of the Tributech DataSpace Kit components, architecture and key aspects of the technology. The three fundamental components for the DSK are the DataSpace Hub, the DataSpace Node and the DataSpace Agent. An overview of the DSK components is presented below."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Product Overview",src:a(4724).Z})),(0,r.kt)("h2",{id:"architecture-overview"},"Architecture Overview"),(0,r.kt)("p",null,"With these building blocks, organizations can set up dataspaces, consisting of a DSK Hub that acts as metadata broker and DSK Nodes providing data management middleware for data providers and consumers. Data sources can be connected to DSK Nodes through open API interfaces, data pipelines and DSK Agents."),(0,r.kt)("p",null,"The high-level architecture below shows how the DSK components form a dataspace communicate with each other."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Product Overview",src:a(7260).Z})),(0,r.kt)("h2",{id:"dataspace-hub"},"DataSpace Hub"),(0,r.kt)("p",null,"The DSK Hub acts as a metadata broker and clearinghouse between data providers and data consumers within a dataspace. Users can publish metadata into public and private data catalogs and agree on data contracts that define what data should be shared with whom and under which conditions. These data contracts define for example: a selection of data streams (e.g. the datapoints temperature and pressure of a machine), the timeframe (e.g. from one month in the past to an open end in the future) and a legal contract for data usage terms which are attached by the data provider."),(0,r.kt)("p",null,"Note that the Hub does not hold any data itself, thus guaranteeing the data sovereignty of the node owners. We are also continuously working on increasing the decentralization of the system\u2019s metadata and identity management to eliminate the necessity of the hub in the mid-term future, while always keeping an eye on enterprise readiness and usability."),(0,r.kt)("h2",{id:"dataspace-node"},"DataSpace Node"),(0,r.kt)("p",null,"The DSK Node acts as connector and middleware that allows data providers and data consumers to participate in dataspaces."),(0,r.kt)("p",null,"Data providers can connect their data sources by using open API interfaces, data pipelines or DSK Agents. The included intelligent cache and storage layer allows users to easily manage the data between warm and cold storage paths as well as accessing audit trails and well-structured metadata for each data assets. Connected data sources are described and contextualized through digital twins and indexed in private or public data catalogs. For each data point or package, data quality seals are created to provide trust, traceability and auditability to potential data consumers."),(0,r.kt)("p",null,"Data consumers can access and analyze shared data by using the open API interfaces, data pipelines or the integrated visualization and dashboarding capabilities. In addition, data consumers can verify and audit the data quality seals of shared data via API or web portal, before they use it in their applications or take business-critical actions."),(0,r.kt)("h2",{id:"dataspace-agent"},"DataSpace Agent"),(0,r.kt)("p",null,"The DSK Agent is an application for edge and embedded IoT devices that can easily be integrated into any IoT platform stack."),(0,r.kt)("p",null,"The core features of the DSK Agent are the standardized contextualization and data management via digital twins as well as the creation of data quality seals for providing trust, traceability and auditability of data streams. The Agent also includes connectivity to the blockchain-based trust layer to store data quality seals as well as connectivity to the data layer of DSK Nodes or other IoT middleware solutions in-between (e.g. Azure IoT Hub)."),(0,r.kt)("p",null,"Data providers can use the DSK Agent to easily connect different green- or brownfield IoT solutions to their DSK Nodes and extend IoT data sources with required contextualization via digital twins and auditability via data quality seals."),(0,r.kt)("h2",{id:"definition-of-data-assets"},"Definition of Data Assets"),(0,r.kt)("p",null,"In general, we differentiate between three different types of data that are managed by DSK services. You already heard about them in previous parts of this documentation but let us go into more detail now."),(0,r.kt)("p",null,"The DSK is built to integrate, qualify and manage any kind of data assets between data providers and data consumers. Data assets in the DSK are defined by three elements: data streams (e.g. time-series data of a sensor or a document from an ERP system), a self-description of the data asset\u2019s properties and a data quality seal that provides cross-system data verification and audit capabilities."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Asset Definition",src:a(9373).Z})),(0,r.kt)("h3",{id:"data-streams"},"Data Streams"),(0,r.kt)("p",null,"This type of data contains the runtime data of connected data sources that is owned by data providers. It may contain intellectual property and is in general classified as sensitive data within the DSK technology stack. This data is always stored or cached within the data layer of a DSK Node. By default, this data never leaves the data owners/providers system. It requires the so-called \u201cdata contract\u201d that defines the data sharing conditions, and if granted by the owner, data gets synced peer-to-peer between the data provider and consumer."),(0,r.kt)("h3",{id:"self-description"},"Self-description"),(0,r.kt)("p",null,"Each data stream that is processed by the DSK includes a self-description, consisting of a twin describing the data asset\u2019s properties and relations to represent a hierarchy or dependencies. The self-descriptions are based on the open DTDL (Digital Twin Definition Language) standard and managed by DSK users through public and private data catalogs."),(0,r.kt)("h3",{id:"quality-seals"},"Quality Seals"),(0,r.kt)("p",null,"To enable the verification of data integrity and authenticity between a data source and a data consumer across different infrastructures/systems, the DSK provides a blockchain-based trust layer to store verifiable data quality seals, also called proofs. For each (raw) datapoint or set of datapoints (depending on the configuration), a signed SHA 256 root hash is created and stored on-chain within a DSK Node. Each quality seal includes a reference pointing to the raw data that is stored off-chain in the data layer of a DSK Node or an external storage system."),(0,r.kt)("p",null,"Data consumers can use the Trust API or Audit Tool (included in the DSK Node web portal) to perform a data audit and verify the integrity and authenticity of consumed data points."))}p.isMDXComponent=!0},3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return l},kt:function(){return h}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=n.createContext({}),c=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(a),h=i,f=p["".concat(d,".").concat(h)]||p[h]||u[h]||r;return a?n.createElement(f,o(o({ref:t},l),{},{components:a})):n.createElement(f,o({ref:t},l))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},7260:function(e,t,a){"use strict";t.Z=a.p+"assets/images/architecture-7baab403ff8fb797ba10d0878bbabcde.png"},9373:function(e,t,a){"use strict";t.Z=a.p+"assets/images/asset_definition-b655c74a52d47769d0b3a9ae9be08827.svg"},4724:function(e,t,a){"use strict";t.Z=a.p+"assets/images/productoverview-711914a043a81556e3340277cbb900df.png"}}]);