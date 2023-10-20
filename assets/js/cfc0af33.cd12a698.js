"use strict";(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[9782],{6985:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=n(36110),l=["components"],s={title:"ADS Source",sidebar_position:2},u=void 0,d={unversionedId:"tributech_agent/sources/ads_source",id:"version-3.6.0/tributech_agent/sources/ads_source",title:"ADS Source",description:"The Tributech ADS Source allows to connect to an Beckhoff ADS Server and receive or write values to the ADS Server.",source:"@site/versioned_docs/version-3.6.0/tributech_agent/sources/ads_source.mdx",sourceDirName:"tributech_agent/sources",slug:"/tributech_agent/sources/ads_source",permalink:"/tributech_agent/sources/ads_source",draft:!1,editUrl:"https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/versioned_docs/version-3.6.0/tributech_agent/sources/ads_source.mdx",tags:[],version:"3.6.0",sidebarPosition:2,frontMatter:{title:"ADS Source",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"MQTT Source",permalink:"/tributech_agent/sources/mqtt_source"},next:{title:"OPC-UA Source",permalink:"/tributech_agent/sources/opcua_source"}},c={},p=[{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Value Change Options",id:"value-change-options",level:3},{value:"Providing Data",id:"providing-data",level:2},{value:"Mock Server",id:"mock-server",level:3}],m={toc:p};function g(e){var t=e.components,s=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Tributech ADS Source allows to connect to an ",(0,o.kt)("a",{parentName:"p",href:"https://infosys.beckhoff.com/english.php?content=../content/1033/cx8190_hw/5091854987.html"},"Beckhoff ADS Server")," and receive or write values to the ADS Server.\nThe Source acts like a ADS Client in a docker environment and enables the forwarding of the data to a Tributech Agent stream."),(0,o.kt)("p",null,"The Tributech ADS Source provides control over the single symbol paths:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Which symbol path to receive"),(0,o.kt)("li",{parentName:"ul"},"How and when to receive a value from the symbol"),(0,o.kt)("li",{parentName:"ul"},"What kind of datatype should be received from the symbol"),(0,o.kt)("li",{parentName:"ul"},"When should a symbol be written to (Optional)")),(0,o.kt)("p",null,"We generally provide two different ways to configure the Tributech ADS Source read operations for each symbol path individually:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Cyclic Reading"))," - The symbol path will be read in a defined interval"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"On Change"))," - The symbol path will be read when the value of the symbol has been changed")),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"The Tributech ADS Source image can be started without any dependencies but will not be functional without a valid Twin Configuration or MessageBroker connect to the Tributech Agent. The TwinConfiguration can be provided via the Tributech Node (recommended) or MessageBroker (see ",(0,o.kt)("a",{parentName:"p",href:"../source_integration#twin-model"},"Source Integration"),"). The ADS Source will automatically connect to the Tributech Agent if the Tributech Agent is running and correct MessageBroker settings are set."),(0,o.kt)("p",null,"In the following part we will describe the setup of a Tributech ADS Source."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Setup the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"docker environment"))," by creating a ",(0,o.kt)("inlineCode",{parentName:"li"},".env")," file with the following content and replace the placeholder values with your values:")),(0,o.kt)(i.Z,{className:"language-plain",title:".env",mdxType:"CodeBlock"},"AGENT_TAG=3.6.0\nAGENT_ID=00000000-0000-0000-0000-000000000007\nSOURCE_TAG=3.6.0\n"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Setup the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"docker-compose.yml"))," file by creating a ",(0,o.kt)("inlineCode",{parentName:"li"},"docker-compose.yml")," file with the following content in the same folder as the  ",(0,o.kt)("inlineCode",{parentName:"li"},".env")," file:")),(0,o.kt)(i.Z,{className:"language-yml",title:"docker-compose.yml",mdxType:"CodeBlock"},'version: \'3.6\'\n\nservices:\n  source-ads:\n    restart: unless-stopped\n    image: ${DOCKER_REGISTRY-tributech.azurecr.io/}tributech-source-ads:${SOURCE_TAG:-latest}\n    environment:\n      - MqttOptions__MQTTHost=mosquitto-server-ads\n      - Logging__LogLevel__Default=Debug\n      - Logging__LogLevel__ADSRouter=Error\n    networks:\n      ads-net:\n        ipv4_address: 172.24.1.5\n    logging:\n      driver: "json-file"\n      options:\n        max-size: "2m"\n        max-file: "5"\n\n  tributech-agent-ads:\n    image: ${DOCKER_REGISTRY-tributech.azurecr.io/}tributech-agent:${AGENT_TAG:-latest}\n    depends_on:\n      - mosquitto-server-ads\n    environment:\n      - Logging__LogLevel__Default=Information\n      - MqttOptions__MQTTHost=mosquitto-server-ads\n      # general DSK edge agent configuration\n      - EdgeDeviceOptions__AgentID=${AGENT_ID:?"The variable AGENT_ID needs to be configured in the .env file."}\n    networks:\n      ads-net:\n        ipv4_address: 172.24.1.7\n    ports:\n      - "5000:80" # enable access to agent REST-API (e.g. for configuration with Agent-Companion)\n    volumes:\n      - ./volumes/ads/agent:/app/data # volume mapping for permanent storage of keys and datatwin file\n    restart: unless-stopped\n    logging:\n      driver: "json-file"\n      options:\n        max-size: "2m"\n        max-file: "5"\n\n  mosquitto-server-ads:\n    image: eclipse-mosquitto:${MQTT_TAG:-1.6}\n    restart: unless-stopped\n    networks:\n      ads-net:\n         ipv4_address: 172.24.1.3\n\nnetworks:\n  ads-net:\n    ipam:\n      config:\n        - subnet: 172.24.1.0/24\n'),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"After setting up the Tributech ADS Source we need to link it to the Tributech Node (see ",(0,o.kt)("a",{parentName:"p",href:"/tributech_agent/quickstart#link-agent"},"QuickStart"),") and configure the TwinConfiguration."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"**&quot;Configure Agent**",src:n(62726).Z,width:"1909",height:"351"})),(0,o.kt)("p",null,"We can now add by right clicking the Device Edge entry a new Beckhoff TwinCat ADS Source."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"**&quot;Add ADS Source**",src:n(57564).Z,width:"672",height:"857"})),(0,o.kt)("p",null,"In order to connect to the ADS Server we need to configure the ADS Server settings. The following table contains the description for each setting for our MockClient. The table contents can also be found here: ",(0,o.kt)("a",{parentName:"p",href:"#mock-server"},"MockServer"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"**&quot;Config ADS Source**",src:n(73357).Z,width:"2545",height:"1212"})),(0,o.kt)("p",null,"Description for the settings:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Setting"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Server AMS Net Id")),(0,o.kt)("td",{parentName:"tr",align:null},"AMS Net Id of the PLC ADS Server")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"ADS Server Port")),(0,o.kt)("td",{parentName:"tr",align:null},"Port of the PLC ADS Server")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"ADS Server IP Address")),(0,o.kt)("td",{parentName:"tr",align:null},"IP-Address of the PLC ADS Server (needed for whitelist)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Client AMS Net Id")),(0,o.kt)("td",{parentName:"tr",align:null},"AMS Net Id of the ADS Source")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"InProcess Router Port")),(0,o.kt)("td",{parentName:"tr",align:null},"Should always be ",(0,o.kt)("strong",{parentName:"td"},"48898"),", only needs to be changed if the network configuration changes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Read Cycle Default Interval")),(0,o.kt)("td",{parentName:"tr",align:null},"Default read interval value for all cyclic streams, will only be overruled if defined in the stream itself")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Configuration writing Cycle")),(0,o.kt)("td",{parentName:"tr",align:null},"Write function cycle time to write values to the server (used for every parameter)")))),(0,o.kt)("p",null,"We can save the settings by clicking on the ",(0,o.kt)("inlineCode",{parentName:"p"},"SAVE IN WORKSPACE")," button in the bottom right corner and add a new ADS Stream by right clicking on the ADS Source entry:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"**&quot;Add ADS Source stream**",src:n(47442).Z,width:"743",height:"640"})),(0,o.kt)("p",null,"The following screenshot contains the information for each setting for the ADS Stream path for a type LREAL (double), that will be read every 10sec from the MockServer:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"**&quot;Add ADS Stream config**",src:n(70467).Z,width:"2545",height:"1270"})),(0,o.kt)("p",null,"We can save the settings by clicking on the ",(0,o.kt)("inlineCode",{parentName:"p"},"SAVE IN WORKSPACE")," button in the bottom right corner and continue adding every symbol path we want to read from the ADS Server."),(0,o.kt)("p",null,"After all symbol paths have been configured, we can apply the configuration to the Tributech Agent by clicking on the ",(0,o.kt)("inlineCode",{parentName:"p"},"APPLY CONFIGURATION")," button in the top right corner."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Without the MockServer Setup or a real ADS Server we will not receive any data on the Tributech Node.")),(0,o.kt)("p",null,"We can now see the value of the symbol path in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Beckhoff TwinCat ADS Stream"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"**&quot;Add MQTT Stream data**",src:n(15115).Z,width:"2302",height:"643"})),(0,o.kt)("h3",{id:"value-change-options"},"Value Change Options"),(0,o.kt)("p",null,"The basic handling of Value Change Options (VCO) can be found in ",(0,o.kt)("a",{parentName:"p",href:"/tributech_agent/source_integration#value-change-options"},"Source Integration"),". This section contains the concrete handling of the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Step (Delta)"))," for the simulated source. The following list contains the description for each supported ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"ADSDataType"))," where ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"X"))," represents the value for ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Step (Delta)")),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"INT")),", ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"UINT")),", ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"WORD")),", ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"SINT")),", ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"DINT")),", ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"UDINT")),", ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"DWORD")),", ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"REAL")),", ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"LREAL")),": defines the minimum difference between values to be submitted, the change is always compared to the last successful submitted value, e.g. if ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"X")),"= 3 if the values 1, 2, 5, 8, 10, 11, 14 are received by the Tributech Source only 1, 5, 8, 11, 14 will be submitted."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"USINT")),",  ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"BYTE")),": will only be submitted if the value of the first byte of the current value is bigger or equal than the previous value"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"BOOL")),": will only be submitted if the current and last submitted value are not equal"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"STRING")),": will only be submitted if the current and last submitted value are not equal")),(0,o.kt)("h2",{id:"providing-data"},"Providing Data"),(0,o.kt)("p",null,"If a Beckhoff ADS Server is used as a source, no specific settings are required, only the settings described in ",(0,o.kt)("a",{parentName:"p",href:"#configuration"},"Configuration"),". If no Beckhoff ADS Server is available the Tributech ADS Source can use a Tributech ADS Mock to provide data to the Tributech ADS Source."),(0,o.kt)("h3",{id:"mock-server"},"Mock Server"),(0,o.kt)("p",null,"The Mock Server is an application based on the ",(0,o.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/Beckhoff.TwinCAT.Ads"},"Beckhoff.TwinCAT.Ads.Server")," to generate a ADS Server with a symbol paths. The Mock Server can be started by downloading the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.override.yml")," file into the same folder as the Tributech ADS source."),(0,o.kt)(i.Z,{className:"language-yml",title:"docker-compose.override.yml",mdxType:"CodeBlock"},'version: "3.6"\n\nservices:\n mock-server-ads:\n    image: ${DOCKER_REGISTRY-tributech.azurecr.io/}tributech-source-ads-mock:${SOURCE_TAG:-latest}\n    restart: unless-stopped\n    environment:\n     - ASPNETCORE_ENVIRONMENT=Development\n     - ASPNETCORE_URLS=http://+:5000\n     - AdsSettings__ServerName=MockADS\n     - AdsSettings__ServerPort=851\n     - AdsSettings__NeedsRouter=true\n     - ServerStructureSettings__InitValues__0__Value=2200215101\n     - ServerStructureSettings__InitValues__0__Path=Settings.stConfigFile.sSerialNumber\n     - AmsRouter__Name=MockServerRouter\n     - AmsRouter__NetId=172.24.1.6.1.1\n     - AmsRouter__RemoteConnections__0__Name=TestClient\n     - AmsRouter__RemoteConnections__0__NetId=172.24.1.5.1.1\n     - AmsRouter__RemoteConnections__0__Address=172.24.1.5\n     - ValueGeneratorSettings__Enabled=true\n     - ValueGeneratorSettings__ChangeAllValuesEveryInterval=true\n    #ports:\n      # - "127.0.0.1:5000:5000" # SwaggerUI\n      # - "127.0.0.1:48898:48898" # TCP Router Port\n      # - "127.0.0.1:48899:49999/udp" # UDP Router Port\n    networks:\n      ads-net:\n         ipv4_address: 172.24.1.6\n'),(0,o.kt)("p",null,"The Mock Server needs access to the same docker network as the Tributech ADS Source, therefore the IP addresses and environment variables need to be adjusted if they are not identical to our provided ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file (see ",(0,o.kt)("a",{parentName:"p",href:"#setup"},"Setup"),"). After starting the Mock Server the configuration has to be pushed to the ADS Source again. To accomplish this go back to the Tributech ADS Source configuration window in the Tributech Node and click again on the ",(0,o.kt)("inlineCode",{parentName:"p"},"APPLY CONFIGURATION")," button again. The ADS Source will now generate data points."),(0,o.kt)("p",null,"The following table contains the description for each available symbol path of the Mock Server:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Path"),(0,o.kt)("th",{parentName:"tr",align:null},"TypeName"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"GVL_Cloudtest.bValue")),(0,o.kt)("td",{parentName:"tr",align:null},"BOOL")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"GVL_Cloudtest.byValue")),(0,o.kt)("td",{parentName:"tr",align:null},"BYTE")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"GVL_Cloudtest.iValue")),(0,o.kt)("td",{parentName:"tr",align:null},"INT")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"GVL_Cloudtest.uiValue")),(0,o.kt)("td",{parentName:"tr",align:null},"UINT")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"GVL_Cloudtest.siValue")),(0,o.kt)("td",{parentName:"tr",align:null},"SINT")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"GVL_Cloudtest.usiValue")),(0,o.kt)("td",{parentName:"tr",align:null},"USINT")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"GVL_Cloudtest.dwValue")),(0,o.kt)("td",{parentName:"tr",align:null},"DWORD")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"GVL_Cloudtest.diValue")),(0,o.kt)("td",{parentName:"tr",align:null},"DINT")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"GVL_Cloudtest.udiValue")),(0,o.kt)("td",{parentName:"tr",align:null},"UDINT")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"GVL_Cloudtest.rValue")),(0,o.kt)("td",{parentName:"tr",align:null},"REAL")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"GVL_Cloudtest.lrValue")),(0,o.kt)("td",{parentName:"tr",align:null},"LREAL")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"GVL_Cloudtest.s50Value")),(0,o.kt)("td",{parentName:"tr",align:null},"STRING(50)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"GVL_Cloudtest.s201Value")),(0,o.kt)("td",{parentName:"tr",align:null},"STRING(201)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"GVL_Cloudtest.ws80Value")),(0,o.kt)("td",{parentName:"tr",align:null},"WSTRING(80)")))))}g.isMDXComponent=!0},62726:function(e,t,n){t.Z=n.p+"assets/images/node-agent-configure-7ae7cf405f48c53a50f626b64ce56f49.png"},57564:function(e,t,n){t.Z=n.p+"assets/images/node-source-ads-add-7ad3a3fd7e83773b5aaaf398592e9090.png"},73357:function(e,t,n){t.Z=n.p+"assets/images/node-source-ads-config-c39ffcc09412e9b760e39e8ad0051f32.png"},47442:function(e,t,n){t.Z=n.p+"assets/images/node-source-ads-stream-add-973e7ddc46a69a863db472396c1c0ab9.png"},70467:function(e,t,n){t.Z=n.p+"assets/images/node-source-ads-stream-config-139fbe23dfaceae2f4f1f095e8ca84b2.png"},15115:function(e,t,n){t.Z=n.p+"assets/images/node-source-ads-stream-data-c3d8b2d166ab965558584476f1e7503a.png"}}]);