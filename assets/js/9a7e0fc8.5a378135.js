"use strict";(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[9446],{39381:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>g,toc:()=>d});var a=r(58168),n=(r(96540),r(15680));r(21386);const i={title:"Requirements",sidebar_position:2},o=void 0,g={unversionedId:"tributech_agent/requirements",id:"version-4.0.0/tributech_agent/requirements",title:"Requirements",description:"In the following section we describe the hard- and software requirements to run a Tributech Agent and a Tributech Source on a edge device. An edge device serves as an endpoint on the network, bridging the gap between the Tributech Node and the real world (here representated as Customer Data).",source:"@site/versioned_docs/version-4.0.0/tributech_agent/requirements.mdx",sourceDirName:"tributech_agent",slug:"/tributech_agent/requirements",permalink:"/4.0.0/tributech_agent/requirements",draft:!1,editUrl:"https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/versioned_docs/version-4.0.0/tributech_agent/requirements.mdx",tags:[],version:"4.0.0",sidebarPosition:2,frontMatter:{title:"Requirements",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/4.0.0/tributech_agent/overview"},next:{title:"Quickstart",permalink:"/4.0.0/tributech_agent/quickstart"}},l={},d=[{value:"Edge Device Requirements",id:"edge-device-requirements",level:2},{value:"Hardware Requirements",id:"hardware-requirements",level:4},{value:"Software Requirements",id:"software-requirements",level:4},{value:"Network requirements",id:"network-requirements",level:4},{value:"Tributech Agent Source Requirements",id:"tributech-agent-source-requirements",level:4},{value:"Container environment",id:"container-environment",level:4},{value:"Docker login",id:"docker-login",level:5}],u={toc:d},m="wrapper";function s(e){let{components:t,...i}=e;return(0,n.yg)(m,(0,a.A)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"In the following section we describe the hard- and software requirements to run a ",(0,n.yg)("a",{parentName:"p",href:"/4.0.0/tributech_agent/overview"},"Tributech Agent")," and a ",(0,n.yg)("a",{parentName:"p",href:"/4.0.0/tributech_agent/source_integration"},"Tributech Source")," on a edge device. An edge device serves as an endpoint on the network, bridging the gap between the ",(0,n.yg)("a",{parentName:"p",href:"/4.0.0/tributech_node/overview"},"Tributech Node")," and the real world (here representated as Customer Data). "),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Tributech Edge Device - Overview",src:r(91071).A,width:"691",height:"198"})),(0,n.yg)("p",null,"We will show how to gain access to the private Tributech Docker Images and what requirements need to be satisfied to\nsend Customer Data to a running ",(0,n.yg)("a",{parentName:"p",href:"/4.0.0/tributech_node/overview"},"Tributech Node"),"."),(0,n.yg)("p",null,"\u26a0\ufe0f ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"Access to a running Tributech Node Instance is required"))),(0,n.yg)("p",null," If you have any questions regarding infrastructure requirements, please talk to your contact person at Tributech or create a support ticket."),(0,n.yg)("h2",{id:"edge-device-requirements"},"Edge Device Requirements"),(0,n.yg)("p",null,"First we need to setup an environment that supports running ",(0,n.yg)("a",{parentName:"p",href:"https://www.docker.com/resources/what-container/"},"Docker Containers"),"\nin order to start the private Tributech Docker Images for the ",(0,n.yg)("a",{parentName:"p",href:"/4.0.0/tributech_agent/overview"},"Tributech Agent")," and a ",(0,n.yg)("a",{parentName:"p",href:"/4.0.0/tributech_agent/source_integration"},"Tributech Source")," on the edge device, e.g. ",(0,n.yg)("a",{parentName:"p",href:"https://docs.docker.com/desktop/install/linux-install/"},"Linux"),"."),(0,n.yg)("p",null,"Additional to the Docker Runtime requirements the environment must meet the following hardware and software requirements:"),(0,n.yg)("h4",{id:"hardware-requirements"},"Hardware Requirements"),(0,n.yg)("p",null,"The following table shows the recommended minimum hardware requirements for the overall system."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Minimum Requirement"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Additional Information"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"CPU"),(0,n.yg)("td",{parentName:"tr",align:"left"},"1 Core (x86-64 / ARM 32/64) or more"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The minimum requirements for small and medium workloads.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"RAM"),(0,n.yg)("td",{parentName:"tr",align:"left"},"1 GB"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The minimum requirements for small and medium workloads.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"Storage"),(0,n.yg)("td",{parentName:"tr",align:"left"},"221 MB"),(0,n.yg)("td",{parentName:"tr",align:"left"},"A typical setup requires around 500MB consisting of the Tributech Agent = 221 MB, the Tributech Source = 227 MB and the Mosquitto broker = 11,6 MB.")))),(0,n.yg)("p",null,"Dependended on the frequency of data processing the requirements will increase and requirements may be different dependend on the ",(0,n.yg)("a",{parentName:"p",href:"/4.0.0/tributech_agent/source_integration"},"Tributech Source")," used. The following table shows an example for a Tributech Agent with one simulated source."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Value per second"),(0,n.yg)("th",{parentName:"tr",align:"left"},"CPU load(1 core 2.2GHz)"),(0,n.yg)("th",{parentName:"tr",align:"left"},"RAM"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1"),(0,n.yg)("td",{parentName:"tr",align:"left"},"0,54%"),(0,n.yg)("td",{parentName:"tr",align:"left"},"103,1MB")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"10"),(0,n.yg)("td",{parentName:"tr",align:"left"},"2,45%"),(0,n.yg)("td",{parentName:"tr",align:"left"},"112,2MB")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"100"),(0,n.yg)("td",{parentName:"tr",align:"left"},"13,55%"),(0,n.yg)("td",{parentName:"tr",align:"left"},"129MB")))),(0,n.yg)("h4",{id:"software-requirements"},"Software Requirements"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Requirement"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Additional Information"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"OS"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Any current Linux Distribution"),(0,n.yg)("td",{parentName:"tr",align:"left"},"We recommend to select a managed solution from an IoT device or infrastructure provider which also takes care of operating system updates for example a vendor like ",(0,n.yg)("a",{parentName:"td",href:"https://www.welotec.com/"},"Welotec"),".")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"Runtime"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Any current Docker environment"),(0,n.yg)("td",{parentName:"tr",align:"left"},"We recommend a managed solution for docker container orchestration e.g.: ",(0,n.yg)("a",{parentName:"td",href:"https://azure.microsoft.com/de-de/products/iot-edge"},"Azure IoT Edge Runtime"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"File System"),(0,n.yg)("td",{parentName:"tr",align:"left"},"any suppoerted docker file system"),(0,n.yg)("td",{parentName:"tr",align:"left"},"The user/instance which runs the docker containers must have read and write permission for the volume where the docker containers are situated.")))),(0,n.yg)("h4",{id:"network-requirements"},"Network requirements"),(0,n.yg)("p",null,"In the following Table we provide an overview of the required port for the communication between\nTributech Node (public network) to the Tributech Agent (private network) (see ",(0,n.yg)("a",{parentName:"p",href:"/4.0.0/"},"Overview"),").\nThis communication will take place via a public accessable network."),(0,n.yg)("p",null,"\u26a0\ufe0f All of this ports are required for a Tributech Agent"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Port"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Protocol"),(0,n.yg)("th",{parentName:"tr",align:"left"},"From"),(0,n.yg)("th",{parentName:"tr",align:"left"},"To"),(0,n.yg)("th",{parentName:"tr",align:"left"},"direction"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Information"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"443"),(0,n.yg)("td",{parentName:"tr",align:"left"},"HTTPS"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Tributech Agent/Source"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Azure Container Registry"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Outbound"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Access to the private Azure Container Registry containing ",(0,n.yg)("a",{parentName:"td",href:"#docker-login"},"Tributech Docker Images"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1883"),(0,n.yg)("td",{parentName:"tr",align:"left"},"MQTTS"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Tributech Agent"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Tributech Node"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Outbound"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Communication protocol used between Tributech Agent and Node. MQTTS is the secure version of the MQTT protocol using TLS.")))),(0,n.yg)("h4",{id:"tributech-agent-source-requirements"},"Tributech Agent Source Requirements"),(0,n.yg)("p",null,"For the Tributech Agent Source we require dependend on the source different ports. Its important to note\nthat those ports need only be exposed in a private network between the customer data location and the edge device."),(0,n.yg)("p",null,"\u26a0\ufe0f No Source requires access to a public network."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Port"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Protocol"),(0,n.yg)("th",{parentName:"tr",align:"left"},"From"),(0,n.yg)("th",{parentName:"tr",align:"left"},"To"),(0,n.yg)("th",{parentName:"tr",align:"left"},"direction"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Source"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"5000"),(0,n.yg)("td",{parentName:"tr",align:"left"},"HTTP"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Customer"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Tributech Source"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Inbound"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"/4.0.0/tributech_agent/sources/rest_source"},"Tributech REST Source"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"1883"),(0,n.yg)("td",{parentName:"tr",align:"left"},"HTTP"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Customer"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Tributech Source"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Inbound"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"/4.0.0/tributech_agent/sources/mqtt_source"},"Tributech MQTT Source"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"62541"),(0,n.yg)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Customer"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Tributech Source"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Outbound"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"/4.0.0/tributech_agent/sources/opcua_source"},"Tributech OPCUA Source"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"48898"),(0,n.yg)("td",{parentName:"tr",align:"left"},"ADS"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Customer"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Tributech Source"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Outbound"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"/4.0.0/tributech_agent/sources/ads_source"},"Tributech ADS Source"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"851"),(0,n.yg)("td",{parentName:"tr",align:"left"},"ADS"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Customer"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Tributech Source"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Outbound"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"/4.0.0/tributech_agent/sources/ads_source"},"Tributech ADS Source"))))),(0,n.yg)("h4",{id:"container-environment"},"Container environment"),(0,n.yg)("p",null,"In our examples we use the ",(0,n.yg)("a",{parentName:"p",href:"https://docs.docker.com/engine/"},(0,n.yg)("strong",{parentName:"a"},"Docker Engine"))," and ",(0,n.yg)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},(0,n.yg)("strong",{parentName:"a"},"Docker Compose"))," for the management/orchestration of the Docker services on an Ubuntu x86 system, for other systems visit the ",(0,n.yg)("a",{parentName:"p",href:"https://docs.docker.com/engine/install"},"official docker documentation"),". "),(0,n.yg)("p",null,"The ",(0,n.yg)("a",{parentName:"p",href:"/4.0.0/tributech_agent/overview"},"Tributech Agent")," and ",(0,n.yg)("a",{parentName:"p",href:"/4.0.0/tributech_agent/source_integration"},"Tributech Sources")," support the following architectures"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"ARM 32/64"),(0,n.yg)("li",{parentName:"ul"},"x86/x64")),(0,n.yg)("h5",{id:"docker-login"},"Docker login"),(0,n.yg)("p",null,"In Order to gain access to the private Azure Container Registry we must visit the ",(0,n.yg)("inlineCode",{parentName:"p"},"Tributech Node Secrets section"),"\nand use the information provided in the ",(0,n.yg)("inlineCode",{parentName:"p"},"Docker Registry Token")," to authenticate our environment."),(0,n.yg)("p",null,"\u26a0\ufe0f ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"Access to a running Tributech Node Instance is required"))),(0,n.yg)("p",null,"In order to gain access to the Tributech Agent docker image we need to provide docker with the credentials to access the private Tributech Docker Registry (see ",(0,n.yg)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/commandline/login/"},"docker login"),"). The authentication information can be found in the ",(0,n.yg)("inlineCode",{parentName:"p"},"Secrets")," section of the Tributech Node."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"**&quot;Tributech Node Secrets area**",src:r(99631).A,width:"1433",height:"442"})))}s.isMDXComponent=!0},91071:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/EdgeDeviceOverview-e8996c169f078c0d3e5dc2f7b3a7c819.png"},99631:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/secrets-docker-registry-64dbad486febf504ec046edf1cb53da5.png"}}]);