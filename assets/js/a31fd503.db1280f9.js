"use strict";(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[2984],{72157:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return u}});var n=a(83117),i=a(80102),o=(a(67294),a(3905)),s=["components"],r={title:"API",sidebar_position:3},p=void 0,l={unversionedId:"consume_data/api",id:"version-2.0.0/consume_data/api",title:"API",description:"Tributech provides two REST APIs:",source:"@site/versioned_docs/version-2.0.0/consume_data/api.md",sourceDirName:"consume_data",slug:"/consume_data/api",permalink:"/docs/consume_data/api",draft:!1,editUrl:"https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/versioned_docs/version-2.0.0/consume_data/api.md",tags:[],version:"2.0.0",sidebarPosition:3,frontMatter:{title:"API",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Stream Explorer",permalink:"/docs/consume_data/streamexplorer"},next:{title:"Grafana",permalink:"/docs/consume_data/grafana"}},d={},u=[{value:"Data-API Specifications",id:"data-api-specifications",level:2},{value:"Trust-API Specifications",id:"trust-api-specifications",level:2},{value:"Clients",id:"clients",level:2},{value:"Use Case Examples",id:"use-case-examples",level:3},{value:"Store values",id:"store-values",level:4},{value:"Get values",id:"get-values",level:4},{value:"Store proofs",id:"store-proofs",level:4},{value:"Get proofs",id:"get-proofs",level:4},{value:"Validate proofs",id:"validate-proofs",level:4},{value:"Step-by-Step Example: <strong>Get a Double Value with its ValueMetadataId</strong>",id:"step-by-step-example-get-a-double-value-with-its-valuemetadataid",level:3}],c={toc:u};function h(e){var t=e.components,r=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Tributech provides two REST APIs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Data-API (data-api.","[node name]",".dataspace-node.com)"),(0,o.kt)("li",{parentName:"ul"},"Trust-API (trust-api.","[node name]",".dataspace-node.com)")),(0,o.kt)("p",null,"The image below shows you how the APIs are integrated.\n",(0,o.kt)("img",{alt:"Integration via APIs",src:a(89633).Z,width:"3200",height:"2350"})),(0,o.kt)("p",null,"In short, the Data-API is used for values whereas the Trust-API is used for proofs. Proofs are required in order to verify the validity and consistency of data. The Trust-API also offers some endpoints which integrate the Data-API."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"data-api-specifications"},"Data-API Specifications"),(0,o.kt)("p",null,"Data-API calls and specifications can be found at data-api.","[node name]",".dataspace-node.com"),(0,o.kt)("p",null,"The page gives an overview of the available calls and actions.\n",(0,o.kt)("img",{alt:"image",src:a(25246).Z,width:"1873",height:"1226"})),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please note that all timestamps need to be provided in microseconds!"))),(0,o.kt)("h2",{id:"trust-api-specifications"},"Trust-API Specifications"),(0,o.kt)("p",null,"Trust-API calls and specifications can be found at trust-api.","[node name]",".dataspace-node.com"),(0,o.kt)("p",null,"The page gives an overview of the available calls and actions.\n",(0,o.kt)("img",{alt:"image",src:a(80377).Z,width:"2543",height:"2299"})),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please note that all timestamps need to be provided in microseconds!"))),(0,o.kt)("h2",{id:"clients"},"Clients"),(0,o.kt)("p",null,'For both APIs, the "OpenAPI" (Swagger) specifications can be found in the top left, which can be used to generate a clients for the APIs.\n',(0,o.kt)("img",{alt:"image",src:a(31060).Z,width:"793",height:"401"})),(0,o.kt)("p",null,"If C# is the programming language of choice, our already prepared clients can be found here: ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/tributech-solutions/tributech-dsk-api-clients"},"https://github.com/tributech-solutions/tributech-dsk-api-clients"))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"use-case-examples"},"Use Case Examples"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"The following use cases should help to understand when to use which API.")),(0,o.kt)("h4",{id:"store-values"},"Store values"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Unless the proofs are created directly on an external device")," (e.g. Tributech Agent Edge), the ",(0,o.kt)("strong",{parentName:"p"},"Trust-API")," should be used to store values and automatically create and persist the respective proofs. The ",(0,o.kt)("inlineCode",{parentName:"p"},"/value")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"/values")," HTTP POST endpoints of the Trust API can be used to do so."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If however the proofs are created separately"),", then the ",(0,o.kt)("inlineCode",{parentName:"p"},"/value")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"/values")," HTTP POST endpoints of the ",(0,o.kt)("strong",{parentName:"p"},"Data-API")," can be used to only store values - the proofs are then stored manually through the ",(0,o.kt)("inlineCode",{parentName:"p"},"/proof")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"/proofs")," HTTP POST endpoints of the Trust-API."),(0,o.kt)("h4",{id:"get-values"},"Get values"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Data-API")," provides various ",(0,o.kt)("inlineCode",{parentName:"p"},"/values")," HTTP GET endpoints to fetch values.\nValues can also be retrieved together with the respective proof through the ",(0,o.kt)("inlineCode",{parentName:"p"},"/proofvalues")," HTTP GET endpoint of the Trust-API."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note: The Data-API also handles the syncing of values between Tributech Nodes (as far as approved through the parties). The status for this syncing process is available through the Status endpoints of the Data-API.")),(0,o.kt)("h4",{id:"store-proofs"},"Store proofs"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Trust-API")," ",(0,o.kt)("inlineCode",{parentName:"p"},"/proof")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"/proofs")," HTTP POST endpoints can be used to store proofs."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note: Each proof is stored tamperproof within the Distributed Ledger (Blockchain) across the Tributech network. Consequently, each proof is assigned a unique TransactionId - which can be used to fetch the proof from the Ledger. This endpoint to retrieve the proof from the Blockchain is called ProofLocation and can be accessed through the available endpoints in the Data-API.")),(0,o.kt)("h4",{id:"get-proofs"},"Get proofs"),(0,o.kt)("p",null,"Proofs can be fetched through the ",(0,o.kt)("inlineCode",{parentName:"p"},"/proof")," HTTP GET endpoint of the ",(0,o.kt)("strong",{parentName:"p"},"Trust-API"),". A proof can also be retrieved together with the assigned values through the ",(0,o.kt)("inlineCode",{parentName:"p"},"/proofvalues")," HTTP GET endpoint of the Trust-API."),(0,o.kt)("h4",{id:"validate-proofs"},"Validate proofs"),(0,o.kt)("p",null,"A proof can be validated through the ",(0,o.kt)("inlineCode",{parentName:"p"},"/validate/proof")," HTTP POST endpoint of the ",(0,o.kt)("strong",{parentName:"p"},"Trust-API"),"."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please note that all timestamps need to be provided in microseconds!"))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"step-by-step-example-get-a-double-value-with-its-valuemetadataid"},"Step-by-Step Example: ",(0,o.kt)("strong",{parentName:"h3"},"Get a Double Value with its ValueMetadataId")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note")," that this requires double values to be provided on the Data-API. If the values originate from an external data provider, they are available in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/consume_data/shared_data"},(0,o.kt)("strong",{parentName:"a"},"Dataset subscriptions")),". Otherwise check out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/provide_data/overview"},(0,o.kt)("strong",{parentName:"a"},"Provide Data"))," documentation, to provide the values yourself."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'On your node dashboard: Access your profile on the top right and head to "Administration->API Keys" to find your Data-API client secret. Copy it.',(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("img",{alt:"image",src:a(92893).Z,width:"592",height:"291"})),(0,o.kt)("li",{parentName:"ol"},"Head to the Data-API specification page (data-api.","[node name]",".dataspace-node.com).",(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("img",{alt:"image",src:a(21379).Z,width:"777",height:"382"})),(0,o.kt)("li",{parentName:"ol"},'Click the "Authorize" button and paste the Data-API client secret.',(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("img",{alt:"image",src:a(77289).Z,width:"240",height:"66"}),(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("img",{alt:"image",src:a(63489).Z,width:"562",height:"509"})),(0,o.kt)("li",{parentName:"ol"},'Scroll down and select the "GET/values/double/{valueMetadataId}" endpoint.',(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("img",{alt:"image",src:a(18787).Z,width:"862",height:"57"})),(0,o.kt)("li",{parentName:"ol"},'Click "Try it out" and replace the ValueMetadataId parameter with your own.',(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("img",{alt:"image",src:a(42077).Z,width:"1206",height:"1006"})),(0,o.kt)("li",{parentName:"ol"},"In the response message, you should now be able to find the double value.",(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("img",{alt:"image",src:a(51028).Z,width:"687",height:"362"}))))}h.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=l(a),h=i,m=c["".concat(p,".").concat(h)]||c[h]||u[h]||o;return a?n.createElement(m,s(s({ref:t},d),{},{components:a})):n.createElement(m,s({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,s=new Array(o);s[0]=c;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var l=2;l<o;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},92893:function(e,t,a){t.Z=a.p+"assets/images/administration-c3c3b5d28d4ef3d0f0e203a0365f1a2a.png"},77289:function(e,t,a){t.Z=a.p+"assets/images/authorize-900cf3240afd11d8e5c1b0214e079a6a.png"},63489:function(e,t,a){t.Z=a.p+"assets/images/authorize_secret-fb2c904bd91de44f12a2188d72b7b257.png"},25246:function(e,t,a){t.Z=a.p+"assets/images/data_api_base-ab8d01687617320b9a60ee11999ab6d2.png"},42077:function(e,t,a){t.Z=a.p+"assets/images/data_api_enter_id-7bcc7ea45a5b1d685cb6ce934929eb0c.png"},18787:function(e,t){t.Z="data:image/png;base64,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"},31060:function(e,t,a){t.Z=a.p+"assets/images/data_api_swagger-6c12d67942d173b94389267e5b448e59.png"},21379:function(e,t,a){t.Z=a.p+"assets/images/data_api_swagger_small-1ff82d23db3da2f4ad6f17f5e7305f40.png"},89633:function(e,t,a){t.Z=a.p+"assets/images/integration-2022252a107241bf5ae8f88284a3b4ad.png"},51028:function(e,t,a){t.Z=a.p+"assets/images/server_response_success-e727c18cb4cb9329256b04a7eb722443.png"},80377:function(e,t,a){t.Z=a.p+"assets/images/trust_api_base-1224024294dbbc3be5202975c78c194b.png"}}]);