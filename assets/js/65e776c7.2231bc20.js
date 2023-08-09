"use strict";(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[3880],{89232:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=n(36110),l=["components"],s={title:"OPC-UA Source",sidebar_position:3},u=void 0,c={unversionedId:"tributech_agent/sources/opcua_source",id:"tributech_agent/sources/opcua_source",title:"OPC-UA Source",description:"The Tributech OPC-UA Source allows to connect to an OPC Unified Architecture (UA) server and receive data.  The Tributech OPC-UA Source acts like a OPC-UA Client in a docker environment and enables the forwarding of the data to a Tributech Agent stream.",source:"@site/docs/tributech_agent/sources/opcua_source.mdx",sourceDirName:"tributech_agent/sources",slug:"/tributech_agent/sources/opcua_source",permalink:"/next/tributech_agent/sources/opcua_source",draft:!1,editUrl:"https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/docs/tributech_agent/sources/opcua_source.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"OPC-UA Source",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"ADS Source",permalink:"/next/tributech_agent/sources/ads_source"},next:{title:"Simulated Source",permalink:"/next/tributech_agent/sources/simulated_source"}},p={},d=[{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Value Change Options",id:"value-change-options",level:3},{value:"Providing Data",id:"providing-data",level:2},{value:"Mock Server",id:"mock-server",level:3}],m={toc:d};function g(e){var t=e.components,s=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Tributech OPC-UA Source allows to connect to an ",(0,o.kt)("a",{parentName:"p",href:"https://opcfoundation.org/about/opc-technologies/opc-ua/"},(0,o.kt)("strong",{parentName:"a"},"OPC Unified Architecture (UA)"))," server and receive data.  The Tributech OPC-UA Source acts like a OPC-UA Client in a docker environment and enables the forwarding of the data to a Tributech Agent stream."),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"The Tributech OPC-UA Source image can be started without any dependencies but will not be functional without a valid Twin Configuration or MessageBroker connect to the Tributech Agent. The TwinConfiguration can be provided via the Tributech Node (recommended) or MessageBroker (see ",(0,o.kt)("a",{parentName:"p",href:"../source_integration#twin-model"},"Source Integration"),"). The OPC-UA Source will automatically connect to the Tributech Agent if the Tributech Agent is running and correct MessageBroker settings are set. In the following part we will describe the setup of a Tributech OPC-UA Source:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Setup the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"docker environment"))," by creating a ",(0,o.kt)("inlineCode",{parentName:"li"},".env")," file with the following content and replace the placeholder values with your values:")),(0,o.kt)(i.Z,{className:"language-plain",title:".env",mdxType:"CodeBlock"},"AGENT_TAG=3.2.0\nAGENT_ID=00000000-0000-0000-0000-000000000007"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Setup the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"docker-compose.yml"))," file by creating a ",(0,o.kt)("inlineCode",{parentName:"li"},"docker-compose.yml")," file with the following content in the same folder as the  ",(0,o.kt)("inlineCode",{parentName:"li"},".env")," file:")),(0,o.kt)(i.Z,{className:"language-yml",title:"docker-compose.yml",mdxType:"CodeBlock"},'version: \'3.5\'\n\nservices:\n  source-opcua:\n    restart: unless-stopped\n    image: ${DOCKER_REGISTRY-tributech.azurecr.io/}tributech-source-opcua:${SOURCE_TAG:-latest}\n    environment:\n      - MqttOptions__MQTTHost=mosquitto-server-opcua\n      - Logging__LogLevel__Default=Debug\n      - Logging__LogLevel__ADSRouter=Error\n    networks:\n      - opcua-net\n    logging:\n      driver: "json-file"\n      options:\n        max-size: "2m"\n        max-file: "5"\n\n  tributech-agent-opcua:\n    image: ${DOCKER_REGISTRY-tributech.azurecr.io/}tributech-agent:${AGENT_TAG:-latest}\n    depends_on:\n      - mosquitto-server-opcua\n    environment:\n      - Logging__LogLevel__Default=Information\n      - MqttOptions__MQTTHost=mosquitto-server-opcua\n      # general DSK edge agent configuration\n      - EdgeDeviceOptions__AgentID=${AGENT_ID:?"The variable AGENT_ID needs to be configured in the .env file."}\n    networks:\n      - opcua-net\n    ports:\n      - "5000:80" # enable access to agent REST-API (e.g. for configuration with Agent-Companion)\n    volumes:\n      - ./volumes/opcua/agent:/app/data # volume mapping for permanent storage of keys and datatwin file\n    restart: unless-stopped\n    logging:\n      driver: "json-file"\n      options:\n        max-size: "2m"\n        max-file: "5"\n\n  mosquitto-server-opcua:\n    image: eclipse-mosquitto:${MQTT_TAG:-1.6}\n    restart: unless-stopped\n    networks:\n      - opcua-net\n\nnetworks:\n  opcua-net:\n    ipam:\n      config:\n        - subnet: 172.24.1.0/24\n'),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"After setting up the Tributech OPC-UA Source we need to link it to the Tributech Node (see ",(0,o.kt)("a",{parentName:"p",href:"/next/tributech_agent/quickstart#link-agent"},"QuickStart"),") and configure the TwinConfiguration."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"**&quot;Configure Agent**",src:n(52438).Z,width:"1909",height:"351"})),(0,o.kt)("p",null,"We can save the settings by clicking on the ",(0,o.kt)("inlineCode",{parentName:"p"},"SAVE IN WORKSPACE")," button in the bottom right corner and add a new OPC-UA Stream by right clicking on the OPC-UA Source entry:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"**&quot;Add OPCUA Source**",src:n(73737).Z,width:"715",height:"807"})),(0,o.kt)("p",null,"In order to connect to the OPC-UA Server we need to configure the OPC-UA Server settings. The following table contains the description for each setting for our MockClient (later we will describe how to setup a ",(0,o.kt)("a",{parentName:"p",href:"#mock-server"},"MockServer")," if you don't have a real OPC-UA Server available, i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"opc.tcp://off_opcua_server:62541/Quickstarts/ReferenceServer"),"):"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"**&quot;Add OPCUA Source config**",src:n(27717).Z,width:"1909",height:"740"})),(0,o.kt)("p",null,"Next we can add a new OPC-UA Stream by clicking on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Add Streams")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"OPC UA Stream"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"**&quot;Add OPCUA Source stream**",src:n(34707).Z,width:"670",height:"602"})),(0,o.kt)("p",null,"The OPC-UA Stream can be configured with the following settings (the Identifier is specific to the ",(0,o.kt)("a",{parentName:"p",href:"#mock-server"},"MockServer"),"):"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"**&quot;Add OPCUA Source stream**",src:n(42193).Z,width:"2545",height:"1133"})),(0,o.kt)("p",null,"We can save the settings by clicking on the ",(0,o.kt)("inlineCode",{parentName:"p"},"SAVE IN WORKSPACE")," button in the bottom right corner and continue adding every Identifier we want to read from the OPC-UA Server."),(0,o.kt)("p",null,"After all streams have been configured, we can apply the configuration to the Tributech Agent by clicking on the ",(0,o.kt)("inlineCode",{parentName:"p"},"APPLY CONFIGURATION")," button in the top right corner."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Without the MockServer Setup or a real OPC-UA Source we will not receive any data on the Tributech Node.")),(0,o.kt)("h3",{id:"value-change-options"},"Value Change Options"),(0,o.kt)("p",null,"The basic handling of Value Change Options (VCO) can be found in ",(0,o.kt)("a",{parentName:"p",href:"/next/tributech_agent/source_integration"},"Source Integration"),". This section contains the concrete handling of the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Step (Delta)"))," for the simulated source. The following list contains the description for each supported ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Stream Data Encoding"))," where ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"X"))," represents the value for ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Step (Delta)")),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Double")),", ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Int32")),", ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Long")),", ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Float")),": defines the minimum difference between values to be submitted, the change is always compared to the last successful submitted value, e.g. if ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"X")),"= 3 if the double values 1, 2, 5, 8, 10, 11, 14 are received by the Tributech Source only 1, 5, 8, 11, 14 will be submitted."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Byte Array")),": will only be submitted if the current and last submitted value are not equal"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"String UTF 8")),": will only be submitted if the current and last submitted value are not equal"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Boolean")),": will only be submitted if the current and last submitted value are not equal")),(0,o.kt)("h2",{id:"providing-data"},"Providing Data"),(0,o.kt)("p",null,"If a OPC UA Server is used as a source, no specific settings are required, only the settings described in ",(0,o.kt)("a",{parentName:"p",href:"#configuration"},"Configuration"),". If no OPC UA Server is available the Tributech ADS Source can use a ",(0,o.kt)("a",{parentName:"p",href:"https://www.unified-automation.com/products/development-tools/uaexpert.html"},"OPC-UA Demo Server")," from Unified Automation to provide data to the Tributech ADS Source."),(0,o.kt)("h3",{id:"mock-server"},"Mock Server"),(0,o.kt)("p",null,"The following steps describe how to setup a MockServer with the ",(0,o.kt)("a",{parentName:"p",href:"https://www.unified-automation.com/products/development-tools/uaexpert.html"},"OPC-UA Demo Server")," from Unified Automation. The Mock Server can be started by downloading the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.override.yml")," file into the same folder as the Tributech ADS source."),(0,o.kt)(i.Z,{className:"language-yml",title:"docker-compose.override.yml",mdxType:"CodeBlock"},'version: "3.5"\n\nservices:\n  official-opcua-server:\n    image: ghcr.io/opcfoundation/uanetstandard/refserver:1.4.371.91\n    hostname: off_opcua_server\n    networks:\n      - opcua-net\n    volumes:\n      - ./volumes/opcua/mock-server:/root/.local/share/OPC Foundation\n    logging:\n      driver: "json-file"\n      options:\n        max-size: "2m"\n        max-file: "5"\n  \nvolumes:\n   official_opcua:\n'),(0,o.kt)("p",null,"The Mock Server needs access to the same docker network as the Tributech OPC UA Source. The Mock Server will be started automatically when the Tributech ADS Source is started."),(0,o.kt)("p",null,"The following table contains the description for each available Identifier path of the Mock Server:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Identifier"),(0,o.kt)("th",{parentName:"tr",align:null},"DataType"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ns=3;i=2822")),(0,o.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ns=3;i=2824")),(0,o.kt)("td",{parentName:"tr",align:null},"Byte Array")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ns=3;i=2832")),(0,o.kt)("td",{parentName:"tr",align:null},"Double")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ns=3;i=2831")),(0,o.kt)("td",{parentName:"tr",align:null},"Float")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ns=3;i=2827")),(0,o.kt)("td",{parentName:"tr",align:null},"Integer")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ns=3;i=2829")),(0,o.kt)("td",{parentName:"tr",align:null},"Long")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ns=3;i=2833")),(0,o.kt)("td",{parentName:"tr",align:null},"UTF8 String")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"**&quot;Add OPCUA Mock Server data**",src:n(67551).Z,width:"1727",height:"785"})))}g.isMDXComponent=!0},52438:function(e,t,n){t.Z=n.p+"assets/images/node-agent-configure-7ae7cf405f48c53a50f626b64ce56f49.png"},27717:function(e,t,n){t.Z=n.p+"assets/images/node-source-opcua-add-config-674f84c4cd6fe7a7b47eb3d7b966faf7.png"},42193:function(e,t,n){t.Z=n.p+"assets/images/node-source-opcua-add-stream-config-5ef1124d6fa72ec3a83378c205c0f0d7.png"},34707:function(e,t,n){t.Z=n.p+"assets/images/node-source-opcua-add-stream-9f1c6bca7965423317ae1a7fca347605.png"},73737:function(e,t,n){t.Z=n.p+"assets/images/node-source-opcua-add-47a8531e67202e9a5cb222c7a579413d.png"},67551:function(e,t,n){t.Z=n.p+"assets/images/node-source-opcua-mock-data-graph-a7e1289e6f9e0e85f551a657b9550f71.png"}}]);