"use strict";(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[3665],{36195:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>g});var r=n(58168),o=(n(96540),n(15680));const a={title:"Integration",sidebar_position:2},i=void 0,l={unversionedId:"tributech_node/api_category/API_integration",id:"version-4.0.0/tributech_node/api_category/API_integration",title:"Integration",description:"Rest API",source:"@site/versioned_docs/version-4.0.0/tributech_node/api_category/API_integration.md",sourceDirName:"tributech_node/api_category",slug:"/tributech_node/api_category/API_integration",permalink:"/4.0.0/tributech_node/api_category/API_integration",draft:!1,editUrl:"https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/versioned_docs/version-4.0.0/tributech_node/api_category/API_integration.md",tags:[],version:"4.0.0",sidebarPosition:2,frontMatter:{title:"Integration",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Usage",permalink:"/4.0.0/tributech_node/api_category/API_usage"},next:{title:"Webhooks Integration",permalink:"/4.0.0/tributech_node/Webhook_integration"}},s={},g=[{value:"Rest API",id:"rest-api",level:2},{value:"Authorization",id:"authorization",level:2},{value:"Authorization Flow",id:"authorization-flow",level:4},{value:"Client Credential Flow",id:"client-credential-flow",level:4}],p={toc:g},u="wrapper";function c(e){let{components:t,...a}=e;return(0,o.yg)(u,(0,r.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"rest-api"},"Rest API"),(0,o.yg)("p",null,"Our REST API provides the interfaces as ",(0,o.yg)("a",{parentName:"p",href:"https://swagger.io/specification/v3/"},"OAS V3")," which can be used to generate REST API clients for multiple languages. "),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Tributech Node - API Integraton Focus",src:n(62054).A,width:"741",height:"340"})," "),(0,o.yg)("p",null,"The api is generally reachable via the url ",(0,o.yg)("inlineCode",{parentName:"p"},"<your-node-url>/demeter/api/"),"  there you can find the json document and a swagger doc website with an general overview of the rest api endpoints. "),(0,o.yg)("p",null,'The API is structured with following "Topics" :'),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},(0,o.yg)("em",{parentName:"strong"},"Agent"))," provides all management regarding a single Tributech Agent"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},(0,o.yg)("em",{parentName:"strong"},"Agents"))," for query propose of multiple agents "),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},(0,o.yg)("em",{parentName:"strong"},"Credentials"))," to fetch the credentials of the api, docker registry etc... "),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},(0,o.yg)("em",{parentName:"strong"},"Graph"))," provides the Twin Configuration Instance as graph"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},(0,o.yg)("em",{parentName:"strong"},"Model"))," fetching DTDL Model Information"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},(0,o.yg)("em",{parentName:"strong"},"ModelManagement"))," CRUD Methods for the DTDL Models"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},(0,o.yg)("em",{parentName:"strong"},"Relationships"))," CRUD Methods for the Relationships between DTDL Instances"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},(0,o.yg)("em",{parentName:"strong"},"Twins"))," CRUD Methods for DTDL Instances"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},(0,o.yg)("em",{parentName:"strong"},"Validation"))," Validation for DTDL Models"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},(0,o.yg)("em",{parentName:"strong"},"WebHookSubscription"))," CRUD Methods for Webhook related Subscriptions"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},(0,o.yg)("em",{parentName:"strong"},"WebHookTopic"))," Query all available Webhook Events"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},(0,o.yg)("em",{parentName:"strong"},"Values"))," Fetch or Insert Values from or to the Node"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},(0,o.yg)("em",{parentName:"strong"},"Proofs"))," Validate , insert or fetch proofs from the Node")),(0,o.yg)("p",null,"To do some example request just visit the above url, authorize yourself ",(0,o.yg)("em",{parentName:"p"},"(see below)")," and try it out ! "),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Tributech Node - OAS",src:n(37383).A,width:"1729",height:"1224"})),(0,o.yg)("h2",{id:"authorization"},"Authorization"),(0,o.yg)("p",null,"Our API Authorization is handled via a Keycloak instance. We support following authorization flows : "),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://auth0.com/docs/get-started/authentication-and-authorization-flow/client-credentials-flow"},"Client Crediential Flow")," (for api access)"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://auth0.com/docs/get-started/authentication-and-authorization-flow/authorization-code-flow-with-proof-key-for-code-exchange-pkce"},"Authorization Code Flow with PCKE (sha256)")," (for browser)")),(0,o.yg)("p",null,"Both can be configured within the Keycloak instance hosted on our Tributech Node Instance. "),(0,o.yg)("p",null,"We provide no user or group permissions for our node. "),(0,o.yg)("p",null,"In general following urls are used for authorization and token : "),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Authorization: ",(0,o.yg)("inlineCode",{parentName:"li"},"https://auth.<your-tributech-node-url>/realms/node/protocol/openid-connect/auth")),(0,o.yg)("li",{parentName:"ul"},"Token: ",(0,o.yg)("inlineCode",{parentName:"li"},"https://auth.<your-tributech-node-url>/realms/node/protocol/openid-connect/token"))),(0,o.yg)("p",null,"Client Id and Client Credentials can be retrieved by our Node website or on request."),(0,o.yg)("p",null,"Example Request done with ",(0,o.yg)("a",{parentName:"p",href:"https://insomnia.rest/"},"Insomnia")),(0,o.yg)("h4",{id:"authorization-flow"},"Authorization Flow"),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Tributech Node - Authorization Flow",src:n(92400).A,width:"1475",height:"1556"})),(0,o.yg)("h4",{id:"client-credential-flow"},"Client Credential Flow"),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Tributech Node - Client Credential Flow",src:n(20692).A,width:"1483",height:"1030"})))}c.isMDXComponent=!0},15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),g=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=g(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=g(n),d=o,y=u["".concat(s,".").concat(d)]||u[d]||c[d]||a;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var g=2;g<a;g++)i[g]=n[g];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92400:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/AuthorizationCodeFlow-277acb6fe67f701bc4e0c49c4d459c19.png"},20692:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/ClientCredentialFlow-5c3a4f8d81946976221f51f6cecfe768.png"},62054:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/DemeterArchitectureOverviewAPIIntegration-bb490df3ba6cfd71c4f49a4729829d00.png"},37383:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/OAS-d3e9fbc21a91b37331154f6e83af47c3.png"}}]);