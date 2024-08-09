"use strict";(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[642],{48214:(e,t,a)=>{a.d(t,{Ay:()=>s});var n=a(58168),r=(a(96540),a(15680));const o={toc:[]},i="wrapper";function s(e){let{components:t,...s}=e;return(0,r.yg)(i,(0,n.A)({},o,s,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Login to the DataspaceAdmin"),(0,r.yg)("li",{parentName:"ul"},"Click on your account (top right) and than Administration\n",(0,r.yg)("img",{alt:"API Keys - 1",src:a(57617).A,width:"519",height:"382"})),(0,r.yg)("li",{parentName:"ul"},"Go to API Keys\n",(0,r.yg)("img",{alt:"API Keys - 2",src:a(27450).A,width:"3834",height:"1710"}))))}s.isMDXComponent=!0},66579:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=a(58168),r=(a(96540),a(15680));a(21386),a(48214);const o={title:"Agent Setup",sidebar_position:2},i=void 0,s={unversionedId:"setup/agent/setup/azure/azure-setup",id:"version-2.0.0/setup/agent/setup/azure/azure-setup",title:"Agent Setup",description:"To simply get started with the Tributech Edge Agent services running on Docker / Docker Compose runtime we provide a fully automated option which deploys a Linux virtual machine on Azure with everything pre-installed/configured and up and running.",source:"@site/versioned_docs/version-2.0.0/setup/agent/setup/azure/azure-setup.mdx",sourceDirName:"setup/agent/setup/azure",slug:"/setup/agent/setup/azure/azure-setup",permalink:"/2.0.0/setup/agent/setup/azure/azure-setup",draft:!1,editUrl:"https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/versioned_docs/version-2.0.0/setup/agent/setup/azure/azure-setup.mdx",tags:[],version:"2.0.0",sidebarPosition:2,frontMatter:{title:"Agent Setup",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Source Setup",permalink:"/2.0.0/setup/agent/setup/docker-compose/source-setup"},next:{title:"Source Setup",permalink:"/2.0.0/setup/agent/setup/azure/source-setup"}},p={},u=[{value:"Create Virtual Machine",id:"agent-automated-setup",level:2},{value:"Basics Configuration",id:"basics-configuration",level:3},{value:"VM Configuration",id:"vm-configuration",level:3},{value:"DSK Configuration",id:"dsk-configuration",level:3},{value:"Create VM",id:"create-vm",level:3}],g={toc:u},d="wrapper";function m(e){let{components:t,...o}=e;return(0,r.yg)(d,(0,n.A)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"To simply get started with the Tributech Edge Agent services running on ",(0,r.yg)("a",{parentName:"p",href:"/2.0.0/setup/agent/requirements#docker-runtime"},(0,r.yg)("strong",{parentName:"a"},"Docker / Docker Compose"))," runtime we provide a fully automated option which deploys a Linux virtual machine on ",(0,r.yg)("a",{parentName:"p",href:"#agent-automated-setup"},(0,r.yg)("strong",{parentName:"a"},"Azure"))," with everything pre-installed/configured and up and running.\nFor the manual setup on your device with the Docker runtime we provide instructions and sample files in our ",(0,r.yg)("a",{parentName:"p",href:"/2.0.0/setup/agent/setup/docker-compose/docker-compose-setup"},(0,r.yg)("strong",{parentName:"a"},"Docker-Compose Setup"))," section."),(0,r.yg)("h2",{id:"agent-automated-setup"},"Create Virtual Machine"),(0,r.yg)("p",null,'Use the "Deploy to Azure" button directly below to create a Linux virtual machine on Azure with everything pre-installed/configured and the Tributech DSK Edge services up and running.\nPreview the Azure resources that will be created with the "Visualize" button.  '),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Ftributech-solutions%2Ftributech-dsk-docs%2Fmaster%2Fversioned_docs%2Fversion-2.0.0%2Fdeployments%2Fdsk-agent%2Fazuredeploy.json/createUIDefinitionUri/https%3A%2F%2Fraw.githubusercontent.com%2Ftributech-solutions%2Ftributech-dsk-docs%2Fmaster%2Fversioned_docs%2Fversion-2.0.0%2Fdeployments%2Fdsk-agent%2FcreateUiDefinition.json"},(0,r.yg)("img",{parentName:"a",src:"https://aka.ms/deploytoazurebutton",alt:"Deploy to Azure"})),"\n",(0,r.yg)("a",{parentName:"p",href:"http://armviz.io/#/?load=https%3A%2F%2Fraw.githubusercontent.com%2Ftributech-solutions%2Ftributech-dsk-docs%2Fmaster%2Fversioned_docs%2Fversion-2.0.0%2Fdeployments%2Fdsk-agent%2Fazuredeploy.json"},(0,r.yg)("img",{parentName:"a",src:"https://raw.githubusercontent.com/Azure/azure-quickstart-templates/master/1-CONTRIBUTION-GUIDE/images/visualizebutton.svg?sanitize=true",alt:"Visualize"}))),(0,r.yg)("h3",{id:"basics-configuration"},"Basics Configuration"),(0,r.yg)("p",null,"Select desired Azure Subscription/Resource Group/Region and define the name for the Agent related Azure resources (VM, Network security group,...). The Agent name must be unique within your Resource Group."),(0,r.yg)("p",null,"  ",(0,r.yg)("img",{alt:"Agent deployment - Provide basic data",src:a(78190).A,width:"1270",height:"1018"})),(0,r.yg)("h3",{id:"vm-configuration"},"VM Configuration"),(0,r.yg)("p",null,"Define virtual machine Size (",(0,r.yg)("a",{parentName:"p",href:"../../requirements#hardware-requirements"},(0,r.yg)("strong",{parentName:"a"},"Hardware Requirements")),") and authentication related properties. For the size we recommend ",(0,r.yg)("inlineCode",{parentName:"p"},"Standard_B1ms")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"Standard_DS1_v2"),". SSH access allows to connect to the VM for ",(0,r.yg)("a",{parentName:"p",href:"../../requirements#docker-compose-commands"},(0,r.yg)("strong",{parentName:"a"},"management purposes"))," and to support SSH tunneling/port forwarding used for connections to the DSK Agent from the ",(0,r.yg)("a",{parentName:"p",href:"../../../agent_companion"},(0,r.yg)("strong",{parentName:"a"},"Tributech Agent Companion"))," (see ",(0,r.yg)("a",{parentName:"p",href:"../../../agent_companion#agent-companion-connect"},(0,r.yg)("strong",{parentName:"a"},"Connect to Agent Edge")),").  "),(0,r.yg)("p",null,"  ",(0,r.yg)("img",{alt:"Agent deployment - Provide VM data",src:a(89669).A,width:"1345",height:"1011"})),(0,r.yg)("h3",{id:"dsk-configuration"},"DSK Configuration"),(0,r.yg)("p",null,"  To access the client secrets and some other information required in the next steps we require ",(0,r.yg)("a",{parentName:"p",href:"/2.0.0/setup/agent/requirements#api-keys"},(0,r.yg)("strong",{parentName:"a"},"Api Keys")),"."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("em",{parentName:"p"},"DSK Agent id"),": globally unique identifier (UUID) for the Agent")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("em",{parentName:"p"},"DSK Hub name"),": The name of the DSK Hub to which your DSK Node is connected.",(0,r.yg)("br",{parentName:"p"}),"\n","(e.g. ",(0,r.yg)("inlineCode",{parentName:"p"},"your-hub")," for ",(0,r.yg)("inlineCode",{parentName:"p"},"your-hub.dataspace-hub.com"),")"),(0,r.yg)("admonition",{parentName:"li",type:"note"},(0,r.yg)("p",{parentName:"admonition"},"On our ",(0,r.yg)("a",{parentName:"p",href:"https://tributech.io/playground"},(0,r.yg)("strong",{parentName:"a"},"Playground Ecosystem"))," this is ",(0,r.yg)("inlineCode",{parentName:"p"},"play")," for ",(0,r.yg)("inlineCode",{parentName:"p"},"play.dataspace-hub.com"),"."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("em",{parentName:"p"},"DSK Node name"),": The name of your DSK Node to which the DSK Agent will be linked.",(0,r.yg)("br",{parentName:"p"}),"\n","(e.g. ",(0,r.yg)("inlineCode",{parentName:"p"},"your-node")," for ",(0,r.yg)("inlineCode",{parentName:"p"},"your-node.dataspace-node.com"),")")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("em",{parentName:"p"},"Promtail (Loki push API) password"),': The client secret for the authentication at Promtail (Loki push API) from "API Keys".')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("em",{parentName:"p"},"Docker Registry Token (DSK Edge) name"),': The name of the token used for authentication at the private Docker Registry hosting the DSK Agent Docker images from "API Keys". Default: ',(0,r.yg)("inlineCode",{parentName:"p"},"tributech-io-dsk-edge"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("em",{parentName:"p"},"Docker Registry Token (DSK Edge) secret"),': The access token for authentication at the private Docker Registry hosting the DSK Agent Docker images from "API Keys".')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("em",{parentName:"p"},"DSK Agent Docker Image Tag"),": The Docker Image tag defining the DSK Agent version to be deployed.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("em",{parentName:"p"},"Additional DSK Edge Source services"),":"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"None"),": Only the main DSK Edge services (DSK Agent and mosquitto MQTT broker) will be deployed."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"DSK Edge Simulated Sensor"),": Additionally deploy the ",(0,r.yg)("a",{parentName:"li",href:"/2.0.0/setup/agent/setup/azure/source-setup#azure-simulated-source"},(0,r.yg)("strong",{parentName:"a"},"DSK Edge Simulated Sensor"))," service."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"OPC UA Source and Server/Simulator"),": Additionally deploy the ",(0,r.yg)("a",{parentName:"li",href:"/2.0.0/setup/agent/setup/azure/source-setup#azure-opc-ua-source"},(0,r.yg)("strong",{parentName:"a"},"OPC UA Source and Server/Simulator"))," service."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("em",{parentName:"p"},"DSK Source Docker Image Tag"),": The Docker Image tag defining the DSK Edge Source version to be deployed."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{alt:"Agent deployment - Provide DSK data",src:a(53756).A,width:"1311",height:"1024"})))),(0,r.yg)("h3",{id:"create-vm"},"Create VM"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Review terms and provided input and create the Azure resources.\n",(0,r.yg)("img",{alt:"Agent deployment - Review + Create",src:a(51155).A,width:"1243",height:"1021"})),(0,r.yg)("li",{parentName:"ul"},"Successful deployment\ud83c\udf89.\n",(0,r.yg)("img",{alt:"Agent deployment - Successful deployment",src:a(19242).A,width:"1258",height:"743"})),(0,r.yg)("li",{parentName:"ul"},"Output of the deployment showing sample command to connect to the VM using SSH incl. port forwarding for access to the DSK Agent (e.g. for the Agent Companion).\n",(0,r.yg)("img",{alt:"Agent deployment - Deployment output",src:a(99054).A,width:"1258",height:"743"}))),(0,r.yg)("p",null,"You can now continue to link and configure the ",(0,r.yg)("a",{parentName:"p",href:"../../overview"},(0,r.yg)("strong",{parentName:"a"},"Tributech Edge Agent"))," to a\n",(0,r.yg)("a",{parentName:"p",href:"/2.0.0/setup/node"},(0,r.yg)("strong",{parentName:"a"},"Tributech Node"))," with the help of the ",(0,r.yg)("a",{parentName:"p",href:"/2.0.0/setup/agent_companion"},(0,r.yg)("strong",{parentName:"a"},"Tributech Agent Companion")),".\nIn Order to send data to the ",(0,r.yg)("a",{parentName:"p",href:"/2.0.0/setup/node"},(0,r.yg)("strong",{parentName:"a"},"Tributech Node"))," a ",(0,r.yg)("a",{parentName:"p",href:"/2.0.0/setup/agent/setup/azure/source-setup"},(0,r.yg)("strong",{parentName:"a"},"Source"))," must be connected to the agent."))}m.isMDXComponent=!0},57617:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/api-credentials-1-dac62fa56ea0e14ec6a197de98e44beb.png"},27450:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/api-credentials-2-e14e5df7247ba58c0d4636653d8d0b93.png"},78190:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/agent-docker-deploy-1-6dc32625346703e55abfe6f0b9a7ede5.png"},89669:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/agent-docker-deploy-2-694712ef295ce336bf41527ba7acf8f6.png"},53756:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/agent-docker-deploy-3-b5ef35cec47c743dcbdb35d04f621aaa.png"},51155:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/agent-docker-deploy-4-f8fc83e90f5d3627e0791af812ac9351.png"},19242:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/agent-docker-deploy-5-bf835d404ca9107cb78a580871d5fb8f.png"},99054:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/agent-docker-deploy-6-a7139ac52558635b1bd6691ddd6b72be.png"}}]);