"use strict";(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[6095],{17784:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var a=n(83117),i=n(80102),r=(n(67294),n(3905)),o=n(36110),s=["components"],u={title:"Simulated Source",sidebar_position:4},l=void 0,c={unversionedId:"tributech_agent/sources/simulated_source",id:"version-3.6.0/tributech_agent/sources/simulated_source",title:"Simulated Source",description:"The Tributech Simulated Source allows us to simulate a data source for testing purposes.",source:"@site/versioned_docs/version-3.6.0/tributech_agent/sources/simulated_source.mdx",sourceDirName:"tributech_agent/sources",slug:"/tributech_agent/sources/simulated_source",permalink:"/tributech_agent/sources/simulated_source",draft:!1,editUrl:"https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/versioned_docs/version-3.6.0/tributech_agent/sources/simulated_source.mdx",tags:[],version:"3.6.0",sidebarPosition:4,frontMatter:{title:"Simulated Source",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"OPC-UA Source",permalink:"/tributech_agent/sources/opcua_source"},next:{title:"REST Source",permalink:"/tributech_agent/sources/rest_source"}},m={},d=[{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Value Change Options (VCO) Handling",id:"value-change-options-vco-handling",level:3}],g={toc:d};function p(e){var t=e.components,u=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},g,u,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Tributech Simulated Source allows us to simulate a data source for testing purposes."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"The Tributech Simulated Source image can be started without any dependencies but will not be functional without a valid Twin Configuration or MessageBroker connect to the Tributech Agent. The TwinConfiguration can be provided via the Tributech Node (recommended) or MessageBroker (see ",(0,r.kt)("a",{parentName:"p",href:"../source_integration#twin-model"},"Source Integration"),"). The Simulated Source will automatically connect to the Tributech Agent if the Tributech Agent is running and the Simulated Source is configured with the correct MessageBroker settings. In the following section we will describe the setup of a Tributech Simulated Source:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Setup the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"docker environment"))," by creating a ",(0,r.kt)("inlineCode",{parentName:"li"},".env")," file with the following content and replace the placeholder values with your values:")),(0,r.kt)(o.Z,{className:"language-plain",title:".env",mdxType:"CodeBlock"},"AGENT_TAG=3.6.0\nAGENT_ID=00000000-0000-0000-0000-000000000007\nSOURCE_TAG=3.6.0\n"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Setup the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"docker-compose.yml"))," file by creating a ",(0,r.kt)("inlineCode",{parentName:"li"},"docker-compose.yml")," file with the following content in the same folder as the  ",(0,r.kt)("inlineCode",{parentName:"li"},".env")," file:")),(0,r.kt)(o.Z,{className:"language-yml",title:"docker-compose.yml",mdxType:"CodeBlock"},'version: "3.6"\n\nservices:\n  source-simulated:\n    image: ${DOCKER_REGISTRY-tributech.azurecr.io/}tributech-source-simulated:${SOURCE_TAG:-latest}\n    depends_on:\n      - mosquitto-server-simulated\n      - tributech-agent-simulated\n    environment:\n      - Logging__LogLevel__Default=Trace\n      - Logging__Console__FormatterName=simple\n      - MqttOptions__MQTTHost=mosquitto-server-simulated\n    networks:\n      - simulated-net\n    restart: unless-stopped\n    logging:\n      driver: "json-file"\n      options:\n        max-size: "2m"\n        max-file: "5"\n\n  tributech-agent-simulated:\n    image: ${DOCKER_REGISTRY-tributech.azurecr.io/}tributech-agent:${AGENT_TAG:-latest}\n    depends_on:\n      - mosquitto-server-simulated\n    environment:\n      - Logging__LogLevel__Default=Trace\n      - Logging__Console__FormatterName=simple\n      - MqttOptions__MQTTHost=mosquitto-server-simulated\n      - EdgeDeviceOptions__AgentID=${AGENT_ID:?"The variable AGENT_ID needs to be configured in the .env file."}\n    ports:\n      - "5000:80"\n    networks:\n      - simulated-net\n    volumes:\n      - ./volumes/simulated/agent/:/app/data # volume mapping for permanent storage of keys and datatwin file\n    restart: unless-stopped\n    logging:\n      driver: "json-file"\n      options:\n        max-size: "2m"\n        max-file: "5"\n\n  mosquitto-server-simulated:\n    image: eclipse-mosquitto:${MQTT_TAG:-1.6}\n    networks:\n      - simulated-net\n    # ports:\n    # - \'1883:1883\' # MQTT\n    # - "127.0.0.1:9001:9001" # web-socket\n    restart: unless-stopped\n\nnetworks:\n  simulated-net:\n\n'),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"**Configure agent**",src:n(62726).Z,width:"1909",height:"351"})),(0,r.kt)("p",null,"Right click the Edge Device and add a Simulated Source:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"**Simulated Source Add**",src:n(11314).Z,width:"739",height:"646"})),(0,r.kt)("p",null,"Right click the newly added ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Simulated Source"))," and add a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Simulated Stream")),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"**Simulated Stream Add**",src:n(58603).Z,width:"705",height:"530"})),(0,r.kt)("p",null,"Adjust the Stream settings to your needs and save the settings by clicking ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Save in workspace")),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"**Apply Stream Settings**",src:n(46385).Z,width:"2559",height:"1276"})),(0,r.kt)("p",null,"Repeat this step for every stream you need."),(0,r.kt)("p",null,"After saving all streams in the workspace we can send the configuration to the Tributech Agent and update currently running Tributech Source configuration by clicking ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Apply configuration")),"\n",(0,r.kt)("img",{alt:"**Save Simulated Source0**",src:n(969).Z,width:"2551",height:"754"})),(0,r.kt)("h3",{id:"value-change-options-vco-handling"},"Value Change Options (VCO) Handling"),(0,r.kt)("p",null,"The basic handling of VCO can be found in ",(0,r.kt)("a",{parentName:"p",href:"/tributech_agent/source_integration"},"Source Integration"),". This section contains the concrete handling of the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Step (Delta)"))," for the simulated source. The following list contains the description for each supported ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Stream Data Encoding"))," where ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"X"))," represents the value for ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Step (Delta)")),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Double")),", ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Int32")),", ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Long")),", ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Float")),": defines the minimum difference between values to be submitted, the change is always compared to the last successful submitted value, e.g. if ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"X")),"= 3 if the double values 1, 2, 5, 8, 10, 11, 14 are received by the Tributech Source only 1, 5, 8, 11, 14 will be submitted."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Byte Array")),": will only be submitted if the current and last submitted value are not equal "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"String UTF 8")),": will only be submitted if the current and last submitted value are not equal"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Boolean")),": will only be submitted if the current and last submitted value are not equal")))}p.isMDXComponent=!0},62726:function(e,t,n){t.Z=n.p+"assets/images/node-agent-configure-7ae7cf405f48c53a50f626b64ce56f49.png"},58603:function(e,t,n){t.Z=n.p+"assets/images/node-source-simulated-add-simulated-stream-79a08db01a5cec63e5aed4148df25ba5.png"},46385:function(e,t,n){t.Z=n.p+"assets/images/node-source-simulated-add-stream-1f361a28176a9d228d5fcacef11f0528.png"},11314:function(e,t,n){t.Z=n.p+"assets/images/node-source-simulated-add-f10c92952f265b7ebd55d86f457cf2c9.png"},969:function(e,t,n){t.Z=n.p+"assets/images/node-source-simulated-apply-5fac98fe43dcde1af728f77176e736c5.png"}}]);