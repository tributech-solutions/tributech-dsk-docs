"use strict";(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[4436],{76560:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=a(58168),n=(a(96540),a(15680));const s={title:"API",sidebar_position:4},i=void 0,o={unversionedId:"consume_data/api",id:"version-1.10.0/consume_data/api",title:"API",description:"The Tributech DataSpace Kit provides two REST APIs:",source:"@site/versioned_docs/version-1.10.0/consume_data/api.md",sourceDirName:"consume_data",slug:"/consume_data/api",permalink:"/1.10.0/consume_data/api",draft:!1,editUrl:"https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/versioned_docs/version-1.10.0/consume_data/api.md",tags:[],version:"1.10.0",sidebarPosition:4,frontMatter:{title:"API",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Stream Explorer",permalink:"/1.10.0/consume_data/streamexplorer"},next:{title:"Audit",permalink:"/1.10.0/consume_data/audit"}},p={},l=[{value:"Data-API Specifications",id:"data-api-specifications",level:2},{value:"Trust-API Specifications",id:"trust-api-specifications",level:2},{value:"Clients",id:"clients",level:2},{value:"Use Case Examples",id:"use-case-examples",level:3},{value:"Store values",id:"store-values",level:4},{value:"Get values",id:"get-values",level:4},{value:"Store proofs",id:"store-proofs",level:4},{value:"Get proofs",id:"get-proofs",level:4},{value:"Validate proofs",id:"validate-proofs",level:4},{value:"Step-by-Step Example: <strong>Get a Double Value with its ValueMetadataId</strong>",id:"step-by-step-example-get-a-double-value-with-its-valuemetadataid",level:3}],d={toc:l},g="wrapper";function u(e){let{components:t,...s}=e;return(0,n.yg)(g,(0,r.A)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"The Tributech DataSpace Kit provides two REST APIs:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Data-API"),(0,n.yg)("li",{parentName:"ul"},"Trust-API")),(0,n.yg)("p",null,"The image below shows you how the APIs are integrated into the DataSpace Kit.\n",(0,n.yg)("img",{alt:"Integration via APIs",src:a(33072).A,width:"3200",height:"2350"})),(0,n.yg)("p",null,"In short, the Data-API is used for values whereas the Trust-API is used for proofs. Proofs are required in order to verify the validity and consistency of data. The Trust-API also offers some endpoints which integrate the Data-API."),(0,n.yg)("hr",null),(0,n.yg)("h2",{id:"data-api-specifications"},"Data-API Specifications"),(0,n.yg)("p",null,'Data-API calls and specifications can be found by clicking the "Data-API" tab on the node dashboard.\n',(0,n.yg)("img",{alt:"image",src:a(80165).A,width:"1776",height:"1072"})),(0,n.yg)("p",null,"The page gives an overview of the available calls and actions.\n",(0,n.yg)("img",{alt:"image",src:a(18225).A,width:"1873",height:"1226"})),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("p",{parentName:"admonition"},"Please note that all timestamps need to be provided in microseconds!")),(0,n.yg)("h2",{id:"trust-api-specifications"},"Trust-API Specifications"),(0,n.yg)("p",null,"The Trust-API specifications can also be found on the node dashboard.\n",(0,n.yg)("img",{alt:"image",src:a(84613).A,width:"698",height:"935"})),(0,n.yg)("p",null,"The page gives an overview of the available calls and actions.\n",(0,n.yg)("img",{alt:"image",src:a(29809).A,width:"1486",height:"869"})),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("p",{parentName:"admonition"},"Please note that all timestamps need to be provided in microseconds!")),(0,n.yg)("h2",{id:"clients"},"Clients"),(0,n.yg)("p",null,'For both APIs, the "OpenAPI" (Swagger) specifications can be found in the top left, which can be used to generate a clients for the APIs.\n',(0,n.yg)("img",{alt:"image",src:a(65564).A,width:"793",height:"401"})),(0,n.yg)("p",null,"If C# is the programming language of choice, our already prepared clients can be found here: ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("a",{parentName:"strong",href:"https://github.com/tributech-solutions/tributech-dsk-api-clients"},"https://github.com/tributech-solutions/tributech-dsk-api-clients"))),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"use-case-examples"},"Use Case Examples"),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"The following use cases should help to understand when to use which API.")),(0,n.yg)("h4",{id:"store-values"},"Store values"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Unless the proofs are created directly on an external device")," (e.g. DataSpace Agent Edge), the ",(0,n.yg)("strong",{parentName:"p"},"Trust-API")," should be used to store values and automatically create and persist the respective proofs. The ",(0,n.yg)("inlineCode",{parentName:"p"},"/value")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"/values")," HTTP POST endpoints of the Trust API can be used to do so."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"If however the proofs are created separately"),", then the ",(0,n.yg)("inlineCode",{parentName:"p"},"/value")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"/values")," HTTP POST endpoints of the ",(0,n.yg)("strong",{parentName:"p"},"Data-API")," can be used to only store values - the proofs are then stored manually through the ",(0,n.yg)("inlineCode",{parentName:"p"},"/proof")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"/proofs")," HTTP POST endpoints of the Trust-API."),(0,n.yg)("h4",{id:"get-values"},"Get values"),(0,n.yg)("p",null,"The ",(0,n.yg)("strong",{parentName:"p"},"Data-API")," provides various ",(0,n.yg)("inlineCode",{parentName:"p"},"/values")," HTTP GET endpoints to fetch values.\nValues can also be retrieved together with the respective proof through the ",(0,n.yg)("inlineCode",{parentName:"p"},"/proofvalues")," HTTP GET endpoint of the Trust-API."),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Note: The Data-API also handles the syncing of values between DataSpace Nodes (as far as approved through the parties). The status for this syncing process is available through the Status endpoints of the Data-API.")),(0,n.yg)("h4",{id:"store-proofs"},"Store proofs"),(0,n.yg)("p",null,"The ",(0,n.yg)("strong",{parentName:"p"},"Trust-API")," ",(0,n.yg)("inlineCode",{parentName:"p"},"/proof")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"/proofs")," HTTP POST endpoints can be used to store proofs."),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Note: Each proof is stored tamperproof within the Distributed Ledger (Blockchain) across the Tributech DataSpace network. Consequently, each proof is assigned a unique TransactionId - which can be used to fetch the proof from the Ledger. This endpoint to retrieve the proof from the Blockchain is called ProofLocation and can be accessed through the available endpoints in the Data-API.")),(0,n.yg)("h4",{id:"get-proofs"},"Get proofs"),(0,n.yg)("p",null,"Proofs can be fetched through the ",(0,n.yg)("inlineCode",{parentName:"p"},"/proof")," HTTP GET endpoint of the ",(0,n.yg)("strong",{parentName:"p"},"Trust-API"),". A proof can also be retrieved together with the assigned values through the ",(0,n.yg)("inlineCode",{parentName:"p"},"/proofvalues")," HTTP GET endpoint of the Trust-API."),(0,n.yg)("h4",{id:"validate-proofs"},"Validate proofs"),(0,n.yg)("p",null,"A proof can be validated through the ",(0,n.yg)("inlineCode",{parentName:"p"},"/validate/proof")," HTTP POST endpoint of the ",(0,n.yg)("strong",{parentName:"p"},"Trust-API"),"."),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("p",{parentName:"admonition"},"Please note that all timestamps need to be provided in microseconds!")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"step-by-step-example-get-a-double-value-with-its-valuemetadataid"},"Step-by-Step Example: ",(0,n.yg)("strong",{parentName:"h3"},"Get a Double Value with its ValueMetadataId")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Note")," that this requires double values to be provided on the Data-API. If the values originate from an external data provider in the Dataspace, they are available in the ",(0,n.yg)("a",{parentName:"p",href:"/1.10.0/consume_data/subscribe_dataset"},(0,n.yg)("strong",{parentName:"a"},"Dataset subscriptions")),". Otherwise check out the ",(0,n.yg)("a",{parentName:"p",href:"/1.10.0/provide_data/overview"},(0,n.yg)("strong",{parentName:"a"},"Provide Data"))," documentation, to provide the values yourself."),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},'On your node dashboard: Access your profile on the top right and head to "Administration->API Keys" to find your Data-API client secret. Copy it.',(0,n.yg)("br",{parentName:"li"}),(0,n.yg)("img",{alt:"image",src:a(78730).A,width:"536",height:"304"})),(0,n.yg)("li",{parentName:"ol"},"Head to the Data-API specification page.",(0,n.yg)("br",{parentName:"li"}),(0,n.yg)("img",{alt:"image",src:a(69081).A,width:"231",height:"285"})),(0,n.yg)("li",{parentName:"ol"},'Click the "Authorize" button and paste the Data-API client secret.',(0,n.yg)("br",{parentName:"li"}),(0,n.yg)("img",{alt:"image",src:a(69399).A,width:"240",height:"66"}),(0,n.yg)("br",{parentName:"li"}),(0,n.yg)("img",{alt:"image",src:a(23580).A,width:"562",height:"509"})),(0,n.yg)("li",{parentName:"ol"},'Scroll down and select the "GET/values/double/{valueMetadataId}" endpoint.',(0,n.yg)("br",{parentName:"li"}),(0,n.yg)("img",{alt:"image",src:a(47386).A,width:"862",height:"57"})),(0,n.yg)("li",{parentName:"ol"},'Click "Try it out" and replace the ValueMetadataId parameter with your own.',(0,n.yg)("br",{parentName:"li"}),(0,n.yg)("img",{alt:"image",src:a(81652).A,width:"1206",height:"1006"})),(0,n.yg)("li",{parentName:"ol"},"In the response message, you should now be able to find the double value.",(0,n.yg)("br",{parentName:"li"}),(0,n.yg)("img",{alt:"image",src:a(62987).A,width:"687",height:"362"}))))}u.isMDXComponent=!0},15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>h});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),g=l(a),c=n,h=g["".concat(p,".").concat(c)]||g[c]||u[c]||s;return a?r.createElement(h,i(i({ref:t},d),{},{components:a})):r.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[g]="string"==typeof e?e:n,i[1]=o;for(var l=2;l<s;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},78730:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/administration-a9a26b77947761373bb5dfacc6191862.png"},69399:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/authorize-900cf3240afd11d8e5c1b0214e079a6a.png"},23580:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/authorize_secret-fb2c904bd91de44f12a2188d72b7b257.png"},18225:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/data_api_base-ab8d01687617320b9a60ee11999ab6d2.png"},81652:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/data_api_enter_id-7bcc7ea45a5b1d685cb6ce934929eb0c.png"},47386:(e,t,a)=>{a.d(t,{A:()=>r});const r="data:image/png;base64,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"},65564:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/data_api_swagger-6c12d67942d173b94389267e5b448e59.png"},80165:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/data_api_tab-2e0c7946834479c8698b8ed50e6d53ac.png"},69081:(e,t,a)=>{a.d(t,{A:()=>r});const r="data:image/png;base64,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"},33072:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/integration-2022252a107241bf5ae8f88284a3b4ad.png"},62987:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/server_response_success-e727c18cb4cb9329256b04a7eb722443.png"},29809:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/trust_api_base-a978abf738f5293d18141a83618a3e06.png"},84613:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/trust_api_tab-b67bf725fc7c408fb956121553d40113.png"}}]);