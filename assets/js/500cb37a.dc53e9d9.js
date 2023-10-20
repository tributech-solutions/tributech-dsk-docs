"use strict";(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[9437],{64643:function(e,t,o){o.r(t),o.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d}});var n=o(83117),r=o(80102),a=(o(67294),o(3905)),i=o(36110),s=["components"],c={title:"Source Setup",sidebar_position:3},u=void 0,p={unversionedId:"setup/agent/setup/docker-compose/source-setup",id:"version-2.0.0/setup/agent/setup/docker-compose/source-setup",title:"Source Setup",description:"In the folder cotaining the .env file and docker-compose.yml we can now copy a docker-compose.override.yml",source:"@site/versioned_docs/version-2.0.0/setup/agent/setup/docker-compose/source-setup.mdx",sourceDirName:"setup/agent/setup/docker-compose",slug:"/setup/agent/setup/docker-compose/source-setup",permalink:"/2.0.0/setup/agent/setup/docker-compose/source-setup",draft:!1,editUrl:"https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/versioned_docs/version-2.0.0/setup/agent/setup/docker-compose/source-setup.mdx",tags:[],version:"2.0.0",sidebarPosition:3,frontMatter:{title:"Source Setup",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Edge Agent Setup",permalink:"/2.0.0/setup/agent/setup/docker-compose/docker-compose-setup"},next:{title:"Agent Setup",permalink:"/2.0.0/setup/agent/setup/azure/azure-setup"}},l={},d=[{value:"Simulated Source",id:"docker-compose-simulated-source",level:2},{value:"OPC-UA",id:"docker-compose-opc-ua-source",level:2},{value:"MQTT",id:"docker-compose-mqqt-source",level:2},{value:"ADS",id:"docker-compose-ads-source",level:2}],m={toc:d};function h(e){var t=e.components,c=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In the folder cotaining the ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file and ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," we can now copy a ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.override.yml"),"\ncontaining the configuration for a source (",(0,a.kt)("a",{parentName:"p",href:"#docker-compose-simulated-source"},"Simulated"),", ",(0,a.kt)("a",{parentName:"p",href:"#docker-compose-opc-ua-source"},"OPC-UA"),", ",(0,a.kt)("a",{parentName:"p",href:"#docker-compose-mqqt-source"},"MQTT"),", ",(0,a.kt)("a",{parentName:"p",href:"#docker-compose-ads-source"},"ADS"),").\nAfter completing this step we can start all services with the following command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d\n")),(0,a.kt)("p",null,"For more information about a ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.override.yml")," see the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/extends/#understanding-multiple-compose-files"},(0,a.kt)("strong",{parentName:"a"},"official Docker documentation")),".\nIf the  Docker images are not automatically retrieve verify your ",(0,a.kt)("a",{parentName:"p",href:"/2.0.0/setup/agent/setup/docker-compose/docker-compose-setup#private-docker-registry"},(0,a.kt)("strong",{parentName:"a"},"Docker authentication")),". For more information on how to check the status or shutdown the services visit our summary of ",(0,a.kt)("a",{parentName:"p",href:"/2.0.0/setup/agent/requirements#docker-compose-commands"},(0,a.kt)("strong",{parentName:"a"},"Docker management commands")),"."),(0,a.kt)("p",null,"After starting all services we are ready to continue with ",(0,a.kt)("a",{parentName:"p",href:"/2.0.0/setup/agent_companion#agent-companion-connect"},(0,a.kt)("strong",{parentName:"a"},"connecting to, linking & configuring"))," the Tributech Edge Agent to a ",(0,a.kt)("a",{parentName:"p",href:"/2.0.0/setup/node"},(0,a.kt)("strong",{parentName:"a"},"Tributech Node")),"."),(0,a.kt)("h2",{id:"docker-compose-simulated-source"},"Simulated Source"),(0,a.kt)("p",null,"For the manual setup of the Tributech Edge Simulated Sensor (",(0,a.kt)("inlineCode",{parentName:"p"},"simulated-sensor"),") we provide the ",(0,a.kt)("a",{target:"_blank",href:o(50427).Z},(0,a.kt)("code",null,"docker-compose.override.yml"))," file."),(0,a.kt)(i.Z,{className:"language-yml",title:"docker-compose.override.yml",mdxType:"CodeBlock"},'version: "3.3"\n\nservices:\n  simulated-sensor:\n    image: ${DOCKER_REGISTRY-tributech.azurecr.io/}simulated-sensor:${SOURCE_TAG:-latest}\n    depends_on:\n      - mosquitto-server\n      - dsk-agent\n    environment:\n      - MqttOptions__MQTTHost=mosquitto-server\n      - Logging__LogLevel__Default=Information\n      # push logs to Loki at server via promtail\n      - TelemetryOptions__LokiUrl=https://promtail-push.${NODE_NAME:?"The variable NODE_NAME needs to be configured in the .env file."}.dataspace-node.com\n      - TelemetryOptions__LokiUser=tributech\n      - TelemetryOptions__LokiPassword=${LOKI_PROMTAIL_PW:?"The variable LOKI_PROMTAIL_PW needs to be configured in the .env file."}\n      - TelemetryOptions__ServiceName=${AGENT_NAME:?"The variable AGENT_NAME needs to be configured in the .env file."}-simulated-sensor\n      - TelemetryOptions__ServiceId=${AGENT_ID:?"The variable AGENT_ID needs to be configured in the .env file."}\n    networks:\n      - edge-net\n    restart: unless-stopped\n    logging:\n      driver: "json-file"\n      options:\n        max-size: "2m"\n        max-file: "5"\n'),(0,a.kt)("h2",{id:"docker-compose-opc-ua-source"},"OPC-UA"),(0,a.kt)("p",null,"The Tributech OPC UA Source allows to connect to ",(0,a.kt)("a",{parentName:"p",href:"https://opcfoundation.org/about/opc-technologies/opc-ua/"},(0,a.kt)("strong",{parentName:"a"},"OPC Unified Architecture (UA)"))," based servers for data integration. The OPC UA Source act's as a OPC UA client and forwards the received data for a stream to the Tributech Agent via our MQTT broker.\nFor the manual setup of the Tributech OPC UA Source (",(0,a.kt)("inlineCode",{parentName:"p"},"opcua-source"),") and an OPC UA server/simulator (",(0,a.kt)("inlineCode",{parentName:"p"},"opcua-server"),") we provide the ",(0,a.kt)("a",{target:"_blank",href:o(41124).Z},(0,a.kt)("code",null,"docker-compose.override.yml"))," file."),(0,a.kt)(i.Z,{className:"language-yml",title:"docker-compose.override.yml",mdxType:"CodeBlock"},'version: "3.3"\n\nservices:\n  # DSK OPC-UA Source - Connects to the OPC-UA Server and publishes the values via MQTT to the DSK agent\n  opcua-source:\n    image: ${DOCKER_REGISTRY-tributech.azurecr.io/}opcua-source:${SOURCE_TAG:-latest}\n    depends_on:\n      - mosquitto-server\n      - opcua-server\n      - dsk-agent\n    environment:\n      - Logging__LogLevel__Default=Information\n      - MqttOptions__MQTTHost=mosquitto-server\n      - OPCUASourceOptions__OPCUAServerUrl=opc.tcp://opcua-server:4840/va_tt_demo\n      # use fixed hostname (instead of hostname based on Docker container id) to avoid changing application client certitifcate\n      - OPCUASourceOptions__OverrideHostName=localhost\n      # push logs to Loki at server via promtail\n      - TelemetryOptions__LokiUrl=https://promtail-push.${NODE_NAME:?"The variable NODE_NAME needs to be configured in the .env file."}.dataspace-node.com\n      - TelemetryOptions__LokiUser=tributech\n      - TelemetryOptions__LokiPassword=${LOKI_PROMTAIL_PW:?"The variable LOKI_PROMTAIL_PW needs to be configured in the .env file."}\n      - TelemetryOptions__ServiceName=${AGENT_NAME:?"The variable AGENT_NAME needs to be configured in the .env file."}-opcua-source\n      - TelemetryOptions__ServiceId=${AGENT_ID:?"The variable AGENT_ID needs to be configured in the .env file."}\n    networks:\n      - edge-net\n    # samples for mapping folders with certificates (see also https://github.com/OPCFoundation/UA-.NETStandard/blob/master/Docs/Certificates.md#certificate-stores)\n    # e.g. to have permanent application client certitifcate and/or to trust OPC-UA server certificate\n    volumes:\n      - ./volumes/opcua-source/own/private/:/app/certs/OPC Foundation/CertificateStores/MachineDefault/private # ApplicationCertificate (with private keys)\n      - ./volumes/opcua-source/own/certs/:/app/certs/OPC Foundation/CertificateStores/MachineDefault/certs/ # ApplicationCertificate\n      - ./volumes/opcua-source/trusted/certs/:/app/certs/OPC Foundation/CertificateStores/UA Applications/certs/ # TrustedPeerCertificates\n      - ./volumes/opcua-source/issuer/certs/:/app/certs/OPC Foundation/CertificateStores/UA Certificate Authorities/certs/ # TrustedIssuerCertificates\n      - ./volumes/opcua-source/rejected/certs/:/app/certs/OPC Foundation/CertificateStores/RejectedCertificates/certs/ # RejectedCertificateStore\n    restart: unless-stopped\n    logging:\n      driver: "json-file"\n      options:\n        max-size: "2m"\n        max-file: "5"\n\n  # OPC-UA server/simulated data generator\n  opcua-server:\n    image: ${DOCKER_REGISTRY-tributech.azurecr.io/}va_tt_srv_1.0:latest\n    networks:\n      - edge-net\n    # Expose ports for development and testing purposes\n    #ports:\n    #  - "4840:4840"\n    restart: unless-stopped\n    logging:\n      driver: "json-file"\n      options:\n        max-size: "2m"\n        max-file: "5"\n'),(0,a.kt)("h2",{id:"docker-compose-mqqt-source"},"MQTT"),(0,a.kt)("p",null,"For the manual setup of the Tributech MQTT Source (",(0,a.kt)("inlineCode",{parentName:"p"},"mqtt-source"),") we provide the ",(0,a.kt)("a",{target:"_blank",href:o(57416).Z},(0,a.kt)("code",null,"docker-compose.override.yml"))," file and configure the MQTT Source via our DTDL Model and setup your custom Topics in ",(0,a.kt)("a",{parentName:"p",href:"/2.0.0/setup/agent_configuration"},(0,a.kt)("strong",{parentName:"a"},"Tributech Agent Configuration")),"."),(0,a.kt)(i.Z,{className:"language-yml",title:"docker-compose.override.yml",mdxType:"CodeBlock"},'version: "3.3"\n\nservices:\n  mqtt-source:\n    image: ${DOCKER_REGISTRY-tributech.azurecr.io/}mqtt-source:${SOURCE_TAG:-latest}\n    depends_on:\n      - mosquitto-server\n      - dsk-agent\n    environment:\n      - MqttOptions__MQTTHost=mosquitto-server\n      - Logging__LogLevel__Default=Information\n      # push logs to Loki at server via promtail\n      - TelemetryOptions__LokiUrl=https://promtail-push.${NODE_NAME:?"The variable NODE_NAME needs to be configured in the .env file."}.dataspace-node.com\n      - TelemetryOptions__LokiUser=tributech\n      - TelemetryOptions__LokiPassword=${LOKI_PROMTAIL_PW:?"The variable LOKI_PROMTAIL_PW needs to be configured in the .env file."}\n      - TelemetryOptions__ServiceName=${AGENT_NAME:?"The variable AGENT_NAME needs to be configured in the .env file."}-ads-source\n      - TelemetryOptions__ServiceId=${AGENT_ID:?"The variable AGENT_ID needs to be configured in the .env file."}\n    networks:\n      - edge-net\n    restart: unless-stopped\n    logging:\n      driver: "json-file"\n      options:\n        max-size: "2m"\n        max-file: "5"\n'),(0,a.kt)("h2",{id:"docker-compose-ads-source"},"ADS"),(0,a.kt)("p",null,"The Tributech ADS Source allows to connect to an Beckhoff ADS Server which can be used to ingest or write data.\nThe ADS Source allows to build a connection as a ADS client and forwards the polled or on change data notifications to our Tributech Agent and to the corresponding stream via our MQTT Broker.\nIt is also possible to write values to specific symbol in a cyclic manner (see ADS Parameter Twin)"),(0,a.kt)("p",null,"Following Features are supported : "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Failure Handling"),(0,a.kt)("li",{parentName:"ul"},"Poll or On Change Data notifications (see ADS Stream Twin)"),(0,a.kt)("li",{parentName:"ul"},"Write values to the ADS Server via Parameters in a cyclic manner "),(0,a.kt)("li",{parentName:"ul"},"Data Control via Data Change Options (PMIN, PMAX, Step)")),(0,a.kt)("p",null,"For the manual setup of the Tributech ADS Source (",(0,a.kt)("inlineCode",{parentName:"p"},"ads-source"),") we provide the ",(0,a.kt)("a",{target:"_blank",href:o(41124).Z},(0,a.kt)("code",null,"docker-compose.override.yml"))," file and configure the MQTT ADS via our DTDL Model and add an entry to the server ADS AMS Router in ",(0,a.kt)("a",{parentName:"p",href:"/2.0.0/setup/agent_configuration"},(0,a.kt)("strong",{parentName:"a"},"Tributech Agent Configuration")),"."),(0,a.kt)(i.Z,{className:"language-yml",title:"docker-compose.override.yml",mdxType:"CodeBlock"},'version: "3.3"\n\nservices:\n  ads-source:\n    image: ${DOCKER_REGISTRY-tributech.azurecr.io/}ads-source:${SOURCE_TAG:-latest}\n    depends_on:\n      - mosquitto-server\n      - dsk-agent\n    environment:\n      - MqttOptions__MQTTHost=mosquitto-server\n      - Logging__LogLevel__Default=Information\n      # push logs to Loki at server via promtail\n      - TelemetryOptions__LokiUrl=https://promtail-push.${NODE_NAME:?"The variable NODE_NAME needs to be configured in the .env file."}.dataspace-node.com\n      - TelemetryOptions__LokiUser=tributech\n      - TelemetryOptions__LokiPassword=${LOKI_PROMTAIL_PW:?"The variable LOKI_PROMTAIL_PW needs to be configured in the .env file."}\n      - TelemetryOptions__ServiceName=${AGENT_NAME:?"The variable AGENT_NAME needs to be configured in the .env file."}-ads-source\n      - TelemetryOptions__ServiceId=${AGENT_ID:?"The variable AGENT_ID needs to be configured in the .env file."}\n    networks:\n      - edge-net\n    restart: unless-stopped\n    logging:\n      driver: "json-file"\n      options:\n        max-size: "2m"\n        max-file: "5"\n'))}h.isMDXComponent=!0},57416:function(e,t,o){t.Z=o.p+"assets/files/docker-compose.override-a5b0d02a5cf6236cdea59a6892705109.yml"},41124:function(e,t,o){t.Z=o.p+"assets/files/docker-compose.override-7a86165d90635fa8d23b20619cfa6a46.yml"},50427:function(e,t,o){t.Z=o.p+"assets/files/docker-compose.override-d0d94f187dbf1d7fd97fa4440a37d36a.yml"}}]);