"use strict";(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[5651],{1161:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return g}});var i=n(83117),a=n(80102),r=(n(67294),n(3905)),o=n(36110),s=n(84531),l=["components"],c={title:"QuickStart",sidebar_position:2},u=void 0,d={unversionedId:"tributech_agent/quickstart",id:"tributech_agent/quickstart",title:"QuickStart",description:"In this QuickStart Guide we give a shortened overview on how to setup a Tributech Agent with a Simulated Source and connect it to a Tributech Node to display the random generated data.",source:"@site/docs/tributech_agent/quickstart.mdx",sourceDirName:"tributech_agent",slug:"/tributech_agent/quickstart",permalink:"/next/tributech_agent/quickstart",draft:!1,editUrl:"https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/docs/tributech_agent/quickstart.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"QuickStart",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/next/tributech_agent/overview"},next:{title:"Agent Integration",permalink:"/next/tributech_agent/agent_integration"}},p={},g=[{value:"Requirements",id:"requirements",level:2},{value:"Docker-Compose Up",id:"docker-compose-up",level:2},{value:"Link Agent",id:"link-agent",level:2},{value:"Source Configuration",id:"source-configuration",level:2},{value:"Verify",id:"verify",level:2}],m={toc:g};function h(e){var t=e.components,c=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this QuickStart Guide we give a shortened overview on how to setup a Tributech Agent with a ",(0,r.kt)("a",{parentName:"p",href:"/next/tributech_agent/sources/simulated_source"},"Simulated Source")," and connect it to a Tributech Node to display the random generated data.\nFor a more detailed description on how to setup the Tributech Agent visit ",(0,r.kt)("a",{parentName:"p",href:"/next/tributech_agent/agent_integration"},"Agent Integration"),"."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"In Order to link a Tributech Agent to a Tributech node we need the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Access to an existing ",(0,r.kt)("a",{parentName:"li",href:"/next/tributech_node/overview"},"Tributech Node")),(0,r.kt)("li",{parentName:"ul"},"Access to an environment with ",(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/"},"Docker Compose"),", which meets the ",(0,r.kt)("a",{parentName:"li",href:"/next/tributech_agent/agent_integration#requirements"},"Tributech Agent Requirements"))),(0,r.kt)("h2",{id:"docker-compose-up"},"Docker-Compose Up"),(0,r.kt)("p",null,"We start by setting up the docker-compose environment for the Tributech Agent and Tributech Simulated Source as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Authenticate docker"))," to retrieve the relevant docker images from the private ",(0,r.kt)("a",{parentName:"p",href:"/next/tributech_agent/agent_integration#authentication"},"Tributech Docker Registry"),"."),(0,r.kt)(o.Z,{className:"bash",title:"terminal",mdxType:"CodeBlock"},"echo <Client Secret> | docker login --username <Client ID> --password-stdin <Endpoint>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Setup the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"docker environment"))," by creating a ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file with the following content and replace the placeholder values with your values:"),(0,r.kt)(o.Z,{className:"language-plain",title:".env",mdxType:"CodeBlock"},"AGENT_TAG=3.2.0\nAGENT_ID=<Unique-Agent-GUID>\n"),(0,r.kt)("p",{parentName:"li"}," We will use the ",(0,r.kt)("inlineCode",{parentName:"p"},"AGENT_ID")," ",(0,r.kt)("inlineCode",{parentName:"p"},"00000000-0000-0000-0000-000000000007")," in our example.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Download"))," the file ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," and save it in the same folder containing the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,r.kt)(o.Z,{className:"language-yml",title:"docker-compose.yml",mdxType:"CodeBlock"},s.Z)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Startup"))," the environment"),(0,r.kt)(o.Z,{className:"bash",title:"terminal",mdxType:"CodeBlock"},"docker-compose up -d")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Validate"))," that all containers are running. The output should return that every container is in the state ",(0,r.kt)("inlineCode",{parentName:"p"},"Up")),(0,r.kt)(o.Z,{className:"bash",title:"terminal",mdxType:"CodeBlock"},"docker-compose ps"))),(0,r.kt)("h2",{id:"link-agent"},"Link Agent"),(0,r.kt)("p",null,"After starting the Tributech Agent we need to link the Agent to a Tributech Node in order to receive data. In the agent overview we can click ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"LINK NEW AGENT"))," to initialize this process."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"***Agent Linking***",src:n(89089).Z,width:"1734",height:"338"})),(0,r.kt)("p",null,"Our prepared ",(0,r.kt)("a",{target:"_blank",href:n(96702).Z},"docker-compose.yml")," from the previous step exposes the port ",(0,r.kt)("inlineCode",{parentName:"p"},"5000")," of the Agent to interact with the Tributech Node."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"***Agent Connect***",src:n(9924).Z,width:"1008",height:"523"})),(0,r.kt)("p",null,"After pressing connect we can see the ",(0,r.kt)("inlineCode",{parentName:"p"},"AGENT_ID")," ",(0,r.kt)("inlineCode",{parentName:"p"},"00000000-0000-0000-0000-000000000007")," we previously defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"***Connect link***",src:n(20467).Z,width:"1413",height:"510"})),(0,r.kt)("p",null,"Now we can proceed in the linking process by clicking ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Link/Relink Agent")),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"***Connect link***",src:n(57357).Z,width:"1090",height:"443"})),(0,r.kt)("p",null,"After a successfully completed linking process we will add a ",(0,r.kt)("a",{parentName:"p",href:"./sources/simulated_source#configuration"},"Tributech Simulated Source"),".\nIf you would prefer another type of source you can now visit the ",(0,r.kt)("a",{parentName:"p",href:"/next/tributech_agent/source_integration"},"Tributech Agent Sources")," overview."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"***Connect link***",src:n(75256).Z,width:"1908",height:"665"})),(0,r.kt)("h2",{id:"source-configuration"},"Source Configuration"),(0,r.kt)("p",null,"The previous steps established the communication between an Tributech Agent and a Tributech Node. Next we will setup a ",(0,r.kt)("a",{parentName:"p",href:"/next/tributech_agent/source_integration"},"Tributech Source")," to provide data for the Tributech Agent. The Tributech agent will then be used to send the data to the Tributech Node. In the following section we complete our Tributech Agent QuickStart Setup by configuring a simple double stream for the ",(0,r.kt)("a",{parentName:"p",href:"/next/tributech_agent/sources/simulated_source"},"Tributech Simulated Source")," (the Agent Name depends on the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file ",(0,r.kt)("inlineCode",{parentName:"p"},"AGENT_ID")," value defined in the previous section)."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"**&quot;Activate Overview**",src:n(14375).Z,width:"1723",height:"482"})),(0,r.kt)("p",null,"Next we need to configure the Agent to receive data for the Tributech Simulated Source we defined in the docker-compose setup:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"**&quot;Configure Agent**",src:n(52438).Z,width:"1909",height:"351"})),(0,r.kt)("p",null,"We have prepared a Simulated Source configuration containing a double data stream, save the following ",(0,r.kt)("a",{target:"_blank",href:n(34638).Z},"TwinConfiguration Template File")," locally and import it in the Agent Configuration:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"**&quot;Configure Agent**",src:n(88333).Z,width:"494",height:"435"})),(0,r.kt)("p",null,"After successfully importing the ",(0,r.kt)("inlineCode",{parentName:"p"},"TwinConfiguration Template File")," click the ",(0,r.kt)("inlineCode",{parentName:"p"},"APPLY CONFIGURATION")," Button in the top right corner to persist the changes."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"**&quot;Apply configuration**",src:n(57816).Z,width:"1911",height:"845"})),(0,r.kt)("p",null,"We can now select the Simulated Stream of our newly configured ",(0,r.kt)("inlineCode",{parentName:"p"},"QuickStart Simulated Source")," Agent"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"**&quot;Select stream**",src:n(31323).Z,width:"1735",height:"553"})),(0,r.kt)("p",null,"The Stream generates a new data point between 1 and 10 every second."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"**&quot;QuickStart Stream Data**",src:n(1229).Z,width:"1706",height:"776"})),(0,r.kt)("h2",{id:"verify"},"Verify"),(0,r.kt)("p",null,"In order to detect ",(0,r.kt)("a",{parentName:"p",href:"https://www.tributech.io/blog/cybersecurity-threat-data-tampering"},"data tampering")," we provide the possibility to audit each stream proofs individually. We provide the two possibilities to view the audit results:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A Graph view, which displays pending validation in grey, successful validations in green and failed in red.\n",(0,r.kt)("img",{alt:"***Audit Graph***",src:n(39277).Z,width:"1725",height:"741"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A Table view, which includes a list of all proofs. For each proof the validation can be retriggered with a button click or display the history of validations by selecting a table entry.\n",(0,r.kt)("img",{alt:"***Select audit***",src:n(31647).Z,width:"1712",height:"781"})),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("img",{alt:"***Audit overview***",src:n(62523).Z,width:"1717",height:"893"})))),(0,r.kt)("p",null,"This completes the QuickStart, for a more detailed guide and information about the audito process visit ",(0,r.kt)("a",{parentName:"p",href:"/next/tributech_agent/agent_integration"},"Tributech Agent Integration"),". For more information on how to add other types of Tributech Sources visit ",(0,r.kt)("a",{parentName:"p",href:"/next/tributech_agent/source_integration"},"Source Integration"),"."))}h.isMDXComponent=!0},34638:function(e,t,n){t.Z=n.p+"assets/files/quick-start-6915db8cd15de445cee33be5179bc4ca.json"},96702:function(e,t,n){t.Z=n.p+"assets/files/docker-compose-3026803590eb17e98711b45d1738aaaf.yml"},84531:function(e,t){t.Z='version: "3.5"\n\nservices:\n  source-simulated:\n    image: ${DOCKER_REGISTRY-tributech.azurecr.io/}tributech-source-simulated:${SOURCE_TAG:-latest}         \n    depends_on:\n      - mosquitto-server-simulated\n      - tributech-agent-simulated\n    environment:\n      - MqttOptions__MQTTHost=mosquitto-server-simulated\n      - Logging__LogLevel__Default=Debug\n    networks:\n      - simulated-net\n    restart: unless-stopped\n    logging:\n      driver: "json-file"\n      options:\n        max-size: "2m"\n        max-file: "5"\n        \n  tributech-agent-simulated:\n    image: ${DOCKER_REGISTRY-tributech.azurecr.io/}tributech-agent:${AGENT_TAG:-latest}\n    depends_on:\n      - mosquitto-server-simulated  \n    environment:\n      - Logging__LogLevel__Default=Debug\n      - Logging__Console__FormatterName=simple\n      - MqttOptions__MQTTHost=mosquitto-server-simulated\n      - EdgeDeviceOptions__AgentID=${AGENT_ID:?"The variable AGENT_ID needs to be configured in the .env file."}\n    ports:\n      - "5000:80"\n    networks:\n      - simulated-net      \n    volumes:\n      - ./volumes/simulated/agent/:/app/data # volume mapping for permanent storage of keys and datatwin file\n    restart: unless-stopped\n    logging:\n      driver: "json-file"\n      options:\n        max-size: "2m"\n        max-file: "5"\n\n  mosquitto-server-simulated:\n    image: eclipse-mosquitto:${MQTT_TAG:-latest}\n    networks:\n      - simulated-net\n    # ports: \n    # - \'1883:1883\' # MQTT\n    # - "127.0.0.1:9001:9001" # web-socket\n    restart: unless-stopped\n\nnetworks:\n  simulated-net:\n\n'},52438:function(e,t,n){t.Z=n.p+"assets/images/node-agent-configure-7ae7cf405f48c53a50f626b64ce56f49.png"},57357:function(e,t,n){t.Z=n.p+"assets/images/node-agent-linking-connect-link-2-3ddd990522ae730624f5cdbe3bc82f9e.png"},75256:function(e,t,n){t.Z=n.p+"assets/images/node-agent-linking-connect-link-configure-06fedd0258c645c5866f8863140761dd.png"},20467:function(e,t,n){t.Z=n.p+"assets/images/node-agent-linking-connect-link-53a5b77ab0d1a746d6f45360e7153bc4.png"},9924:function(e,t,n){t.Z=n.p+"assets/images/node-agent-linking-connect-6d6ca8578fce09e0b26f9176457dee18.png"},89089:function(e,t,n){t.Z=n.p+"assets/images/node-agent-linking-9d36be29b7fd8dce413826efcb0ded3d.png"},14375:function(e,t,n){t.Z=n.p+"assets/images/node-agents-overview-01aa04fdd6ed95a0b1b1d5f05da72a2a.png"},39277:function(e,t,n){t.Z=n.p+"assets/images/node-source-audit-graph-a2e89f9e399364db896efcd0bc7a7f26.png"},62523:function(e,t,n){t.Z=n.p+"assets/images/node-source-audit-overview-84a6d4a98dc5392032260e4046179619.png"},88333:function(e,t,n){t.Z=n.p+"assets/images/node-source-import-from-template-e55203f31a9820ec73aa363b1de14baa.png"},57816:function(e,t,n){t.Z=n.p+"assets/images/node-source-quickstart-apply-config-e32b42eacafcbf1afe87e7be626cdb52.png"},31323:function(e,t,n){t.Z=n.p+"assets/images/node-source-quickstart-select-stream-d93056fcd9603cd6d827785a820add96.png"},1229:function(e,t,n){t.Z=n.p+"assets/images/node-source-quickstart-stream-graph-d025b04cd11e17d92ddcef6add0ffc5f.png"},31647:function(e,t,n){t.Z=n.p+"assets/images/node-source-select-audit-6e6e1c7e6ede89ae09f401ff1686a3b7.png"}}]);