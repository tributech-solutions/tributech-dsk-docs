"use strict";(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[2218],{4841:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(83117),i=n(80102),o=(n(67294),n(3905)),r=["components"],s={title:"MQTT Source",sidebar_position:2},l=void 0,p={unversionedId:"provide_data/iot/mqtt",id:"version-1.10.0/provide_data/iot/mqtt",title:"MQTT Source",description:"The DSK Edge Agent service supports integration of external data sources using the MQTT messaging protocol.",source:"@site/versioned_docs/version-1.10.0/provide_data/iot/mqtt.md",sourceDirName:"provide_data/iot",slug:"/provide_data/iot/mqtt",permalink:"/1.10.0/provide_data/iot/mqtt",draft:!1,editUrl:"https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/versioned_docs/version-1.10.0/provide_data/iot/mqtt.md",tags:[],version:"1.10.0",sidebarPosition:2,frontMatter:{title:"MQTT Source",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/1.10.0/provide_data/iot/overview"},next:{title:"OPC-UA Source",permalink:"/1.10.0/provide_data/iot/opc-ua"}},c={},u=[{value:"Connect to the MQTT broker",id:"connect-to-the-mqtt-broker",level:2},{value:"Custom/Configurable MQTT topics",id:"mqtt-custom-topics",level:2},{value:"Predefined MQTT topics",id:"mqtt-predefined-topics",level:2},{value:"Double topic",id:"double-topic",level:3},{value:"String topic",id:"string-topic",level:3},{value:"ValueSource topic",id:"valuesource-topic",level:3},{value:"GenericValueSource topic",id:"genericvaluesource-topic",level:3},{value:"Data encoding",id:"data-encoding",level:2}],m={toc:u};function d(e){var t=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The DSK Edge Agent service supports integration of external data sources using the ",(0,o.kt)("a",{parentName:"p",href:"https://mqtt.org/"},(0,o.kt)("strong",{parentName:"a"},"MQTT messaging protocol")),".\nYour MQTT client needs to connect to our MQTT message broker (",(0,o.kt)("inlineCode",{parentName:"p"},"eclipse-mosquitto"),") and publish MQTT messages with a specific payload format on one of our ",(0,o.kt)("a",{parentName:"p",href:"#mqtt-predefined-topics"},(0,o.kt)("strong",{parentName:"a"},"pre-defined MQTT topics"))," or using the ",(0,o.kt)("a",{parentName:"p",href:"#mqtt-custom-topics"},(0,o.kt)("strong",{parentName:"a"},"custom/configurable MQTT topics")),". The published message will be processed from our main DSK Edge Agent service (",(0,o.kt)("inlineCode",{parentName:"p"},"dsk-agent"),") and enriched to achieve data authenticity and integrity support."),(0,o.kt)("p",null,"Such an MQTT client could be any of your existing edge services or implemented specifically for the use case in your desired programming language and run as additional Docker sidecar container."),(0,o.kt)("p",null,"We recommend the configuration of the MQTT source based on twins which can be done with our ",(0,o.kt)("a",{parentName:"p",href:"../../setup/agent_companion"},(0,o.kt)("strong",{parentName:"a"},"Agent Companion"))," and is described in the subsequent chapters."),(0,o.kt)("h2",{id:"connect-to-the-mqtt-broker"},"Connect to the MQTT broker"),(0,o.kt)("p",null,"By default the MQTT broker is only available within the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/network/bridge/"},(0,o.kt)("strong",{parentName:"a"},"Docker bridge network"))," ",(0,o.kt)("inlineCode",{parentName:"p"},"edge-net")," with the service name ",(0,o.kt)("inlineCode",{parentName:"p"},"mosquitto-server")," on port ",(0,o.kt)("inlineCode",{parentName:"p"},"1883"),".",(0,o.kt)("br",{parentName:"p"}),"\n","Accordingly you need to either ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/network/bridge/#connect-a-container-to-a-user-defined-bridge"},(0,o.kt)("strong",{parentName:"a"},"connect"))," your custom MQTT client running as Docker container to the ",(0,o.kt)("inlineCode",{parentName:"p"},"edge-net"),(0,o.kt)("br",{parentName:"p"}),"\n","or ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/config/containers/container-networking/#published-ports"},(0,o.kt)("strong",{parentName:"a"},"publish/expose the port"))," of the MQTT broker on the host with a configuration like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{6-7}","{6-7}":!0},'# MQTT broker/server\nmosquitto-server:\n  image: eclipse-mosquitto:1.6\n  networks:\n    - edge-net\n  ports:\n    - "127.0.0.1:1883:1883" # publish/expose port to host\n')),(0,o.kt)("p",null,"which enable access on ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost")," with port ",(0,o.kt)("inlineCode",{parentName:"p"},"1883"),"."),(0,o.kt)("p",null,"In the default setup we do not use user/password authentication nor SSL/TLS since we are in a closed environment. If you want to refine this setup please talk to your contact person at Tributech or send an email to our ",(0,o.kt)("a",{parentName:"p",href:"https://www.tributech.io/about-us/"},(0,o.kt)("strong",{parentName:"a"},"Customer Advisory Team")),"."),(0,o.kt)("p",null,"For testing purposes we can recommend tools like ",(0,o.kt)("a",{parentName:"p",href:"https://mqttx.app/"},(0,o.kt)("strong",{parentName:"a"},"MQTTX"))," or ",(0,o.kt)("a",{parentName:"p",href:"http://mqtt-explorer.com/"},(0,o.kt)("strong",{parentName:"a"},"MQTT Explorer")),".",(0,o.kt)("br",{parentName:"p"}),"\n","If the port was published to the host as described above we can connect with such tools and post test messages (as used in the subsequent samples).\n",(0,o.kt)("img",{alt:"MQTTX - Connection",src:n(8500).Z,width:"1984",height:"1114"}),"\nRegister for the wildcard topic ",(0,o.kt)("inlineCode",{parentName:"p"},"#")," to see all messages.\n",(0,o.kt)("img",{alt:"MQTTX - Wildcard Topic",src:n(57754).Z,width:"1984",height:"1114"})),(0,o.kt)("p",null,"If you are connecting to your agent via SSH and are using SSH tunneling/port-forwarding you might want to additionally forward traffic for the MQTT broker port ",(0,o.kt)("inlineCode",{parentName:"p"},"1883")," for testing purposes so that you can connect from your local machine."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ssh <vm-user>@<vm-ip> -L 5000:localhost:5000 -L 1883:localhost:1883\n# e.g.\nssh tributech@20.86.158.183 -L 5000:localhost:5000 -L 1883:localhost:1883\n")),(0,o.kt)("p",null,"Otherwise you need to ensure that the port ",(0,o.kt)("inlineCode",{parentName:"p"},"1883")," is accessible on the edge device (firewall rules)."),(0,o.kt)("h2",{id:"mqtt-custom-topics"},"Custom/Configurable MQTT topics"),(0,o.kt)("p",null,"You can configure a custom MQTT topic for a stream on which the main DSK Edge Agent service will listen and process all MQTT messages published at the MQTT broker."),(0,o.kt)("p",null,"The mapping of MQTT message to the value for the stream works like the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ValueMetadataId"),": All MQTT messages matching the ",(0,o.kt)("em",{parentName:"li"},"MQTT custom topic")," will be created as value with ",(0,o.kt)("em",{parentName:"li"},"ValueMetadataID")," of the stream."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Timestamp"),": Current time of the edge-device when the topic gets read by the DSK Edge Agent."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Values"),": The payload in raw-bytes representing the value (see ",(0,o.kt)("a",{parentName:"li",href:"#data-encoding"},(0,o.kt)("strong",{parentName:"a"},"Data encoding")),").")),(0,o.kt)("p",null,"Configure:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open the ",(0,o.kt)("a",{parentName:"li",href:"../../setup/agent_companion"},(0,o.kt)("strong",{parentName:"a"},"Agent Companion")),", ",(0,o.kt)("a",{parentName:"li",href:"../../setup/agent_companion#agent-companion-login"},(0,o.kt)("strong",{parentName:"a"},"login"))," to the DSK Node and ",(0,o.kt)("a",{parentName:"li",href:"../../setup/agent_companion#agent-companion-connect"},(0,o.kt)("strong",{parentName:"a"},"connect"))," with the DKS Edge Agent"),(0,o.kt)("li",{parentName:"ul"},"Add MQTT Source\n",(0,o.kt)("img",{alt:"MQTT Source",src:n(57568).Z,width:"2206",height:"1363"})),(0,o.kt)("li",{parentName:"ul"},"Add MQTT Stream(s)",(0,o.kt)("br",{parentName:"li"}),"",(0,o.kt)("em",{parentName:"li"},"MQTT custom topic")," must follow the ",(0,o.kt)("a",{parentName:"li",href:"http://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.html#_Toc398718106"},(0,o.kt)("strong",{parentName:"a"},"MQTT specification"))," and the same topic can not be used for multiple streams.",(0,o.kt)("br",{parentName:"li"}),"",(0,o.kt)("em",{parentName:"li"},"Data Encoding")," defines the actual value type (since provided as raw-bytes in the message).\n",(0,o.kt)("img",{alt:"MQTT Source - Custom Topic 1 - 1",src:n(4638).Z,width:"2206",height:"1363"}),(0,o.kt)("img",{alt:"MQTT Source - Custom Topic 2 - 1",src:n(820).Z,width:"2206",height:"1363"})),(0,o.kt)("li",{parentName:"ul"},"Upload To Device")),(0,o.kt)("p",null,"Test and verify:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Publish MQTT message for configured topic\n",(0,o.kt)("img",{alt:"MQTT Source - Custom Topic 1 - 2",src:n(70271).Z,width:"1984",height:"1114"}),(0,o.kt)("img",{alt:"MQTT Source - Custom Topic 2 - 2",src:n(16623).Z,width:"1984",height:"1114"})),(0,o.kt)("li",{parentName:"ul"},"Verify value for published message in DataSpace-Admin at Streams of Agent\n",(0,o.kt)("img",{alt:"MQTT Source - Custom Topic 1 - 3",src:n(3877).Z,width:"2085",height:"1616"}),(0,o.kt)("img",{alt:"MQTT Source - Custom Topic 2 - 3",src:n(95940).Z,width:"2085",height:"1616"}))),(0,o.kt)("h2",{id:"mqtt-predefined-topics"},"Predefined MQTT topics"),(0,o.kt)("p",null,"The DSK Edge Agent has certain predefined MQTT topics he is listening on. If we publish MQTT messages in the required format on such topics they are automatically processed and converted into values for streams.",(0,o.kt)("br",{parentName:"p"}),"\n","For representation as twins in the configuration we use ",(0,o.kt)("em",{parentName:"p"},"Generic Source")," and ",(0,o.kt)("em",{parentName:"p"},"Generic Stream"),"."),(0,o.kt)("h3",{id:"double-topic"},"Double topic"),(0,o.kt)("p",null,"TOPIC: ",(0,o.kt)("inlineCode",{parentName:"p"},"DSK/EdgeAgent/Double/<ValueMetadataId>")),(0,o.kt)("p",null,"For publishing of floating point number values represented as ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/floating-point-numeric-types"},(0,o.kt)("strong",{parentName:"a"},"double")),"."),(0,o.kt)("p",null,"The mapping of MQTT message to the value for the stream works like the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ValueMetadataId"),": Taken from ",(0,o.kt)("inlineCode",{parentName:"li"},"ValueMetadataId")," placeholder inside the topic."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Timestamp"),": Current time of the edge-device when the topic gets read by the DSK Edge Agent."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Values"),": The payload in raw-bytes of an little-endian-encoded 64-bit ",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Double-precision_floating-point_format"},(0,o.kt)("strong",{parentName:"a"},"IEEE 754"))," floating point number (see ",(0,o.kt)("a",{parentName:"li",href:"#data-encoding"},(0,o.kt)("strong",{parentName:"a"},"Data encoding")),").")),(0,o.kt)("p",null,"Configure:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open the ",(0,o.kt)("a",{parentName:"li",href:"../../setup/agent_companion"},(0,o.kt)("strong",{parentName:"a"},"Agent Companion")),", ",(0,o.kt)("a",{parentName:"li",href:"../../setup/agent_companion#agent-companion-login"},(0,o.kt)("strong",{parentName:"a"},"login"))," to the DSK Node and ",(0,o.kt)("a",{parentName:"li",href:"../../setup/agent_companion#agent-companion-connect"},(0,o.kt)("strong",{parentName:"a"},"connect"))," with the DKS Edge Agent"),(0,o.kt)("li",{parentName:"ul"},"Add Generic Source\n",(0,o.kt)("img",{alt:"MQTT GenericSource",src:n(83226).Z,width:"2206",height:"1363"})),(0,o.kt)("li",{parentName:"ul"},"Add Generic Stream(s) and use ",(0,o.kt)("inlineCode",{parentName:"li"},"ValueMetadataId")," that will be used in the topic",(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("img",{alt:"MQTT GenericSource - Double Topic - 1",src:n(37319).Z,width:"2206",height:"1363"})),(0,o.kt)("li",{parentName:"ul"},"Upload To Device")),(0,o.kt)("p",null,"Test and verify (sample uses different id's):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Publish MQTT message for double topic with ",(0,o.kt)("inlineCode",{parentName:"li"},"ValueMetadataId"),(0,o.kt)("img",{alt:"MQTT Source - Double Topic 2",src:n(63772).Z,width:"703",height:"421"})),(0,o.kt)("li",{parentName:"ul"},"Verify value for published message in DataSpace-Admin at Streams of Agent\n",(0,o.kt)("img",{alt:"MQTT Source - Double Topic 3",src:n(18728).Z,width:"1791",height:"1146"}))),(0,o.kt)("h3",{id:"string-topic"},"String topic"),(0,o.kt)("p",null,"TOPIC: ",(0,o.kt)("inlineCode",{parentName:"p"},"DSK/EdgeAgent/String/<ValueMetadataId>")),(0,o.kt)("p",null,"For publishing of UTF-8 encoded strings."),(0,o.kt)("p",null,"The mapping of MQTT message to the value for the stream works like the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ValueMetadataId"),": Taken from ",(0,o.kt)("inlineCode",{parentName:"li"},"ValueMetadataId")," placeholder inside the topic."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Timestamp"),": Current time of the edge-device when the topic gets read by the DSK Edge Agent."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Values"),": The payload in raw-bytes of an UTF8-encoded string (see ",(0,o.kt)("a",{parentName:"li",href:"#data-encoding"},(0,o.kt)("strong",{parentName:"a"},"Data encoding")),").")),(0,o.kt)("p",null,"Configure:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open the ",(0,o.kt)("a",{parentName:"li",href:"../../setup/agent_companion"},(0,o.kt)("strong",{parentName:"a"},"Agent Companion")),", ",(0,o.kt)("a",{parentName:"li",href:"../../setup/agent_companion#agent-companion-login"},(0,o.kt)("strong",{parentName:"a"},"login"))," to the DSK Node and ",(0,o.kt)("a",{parentName:"li",href:"../../setup/agent_companion#agent-companion-connect"},(0,o.kt)("strong",{parentName:"a"},"connect"))," with the DKS Edge Agent"),(0,o.kt)("li",{parentName:"ul"},"Add Generic Source\n",(0,o.kt)("img",{alt:"MQTT GenericSource",src:n(83226).Z,width:"2206",height:"1363"})),(0,o.kt)("li",{parentName:"ul"},"Add Generic Stream(s) and use ",(0,o.kt)("inlineCode",{parentName:"li"},"ValueMetadataId")," that will be used in the topic",(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("img",{alt:"MQTT GenericSource - String Topic - 1",src:n(9958).Z,width:"2206",height:"1363"})),(0,o.kt)("li",{parentName:"ul"},"Upload To Device")),(0,o.kt)("p",null,"Test and verify (sample uses different id's):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Publish MQTT message for string topic with ",(0,o.kt)("inlineCode",{parentName:"li"},"ValueMetadataId"),(0,o.kt)("img",{alt:"MQTT Source - String Topic 2",src:n(54483).Z,width:"676",height:"391"})),(0,o.kt)("li",{parentName:"ul"},"Verify value for published message in DataSpace-Admin at Streams of Agent\n",(0,o.kt)("img",{alt:"MQTT Source - String Topic 3",src:n(31131).Z,width:"1729",height:"955"}))),(0,o.kt)("h3",{id:"valuesource-topic"},"ValueSource topic"),(0,o.kt)("p",null,"TOPIC: ",(0,o.kt)("inlineCode",{parentName:"p"},"DSK/EdgeAgent/ValueSource")),(0,o.kt)("p",null,"For publishing of various typed values with custom timestamp and ValueMetadataId (UUID)."),(0,o.kt)("p",null,"The payload provided for the topic needs to be a UTF8-encoded string which represents a JSON-object as shown in the following example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "DataStreamID": "8235326b-6f43-4402-8bdf-bcfbd0999b70", // ValueMetadataId of the stream\n  "Timestamp": "2020-01-01T00:00:01+00:00", // Timestamp for the value\n  "Value": "9ihcj8I1RUA=" // Base64-encoded raw-bytes of the actual value\n}\n')),(0,o.kt)("p",null,"The mapping of MQTT message to the value for the stream works like the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ValueMetadataId"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"DataStreamID")," from the JSON-object. Currently there is no check that a matching stream exist we however recommend to create a ",(0,o.kt)("em",{parentName:"li"},"Generic Stream")," for each published ",(0,o.kt)("inlineCode",{parentName:"li"},"DataStreamID")," for easier management."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Timestamp"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"Timestamp")," from the JSON-object. (",(0,o.kt)("em",{parentName:"li"},"Format ISO 8601-1:2019"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Values"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"Value")," from the JSON-object as Base64-encoded raw-bytes of the actual value (see ",(0,o.kt)("a",{parentName:"li",href:"#data-encoding"},(0,o.kt)("strong",{parentName:"a"},"Data encoding")),").")),(0,o.kt)("p",null,"Configure:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open the ",(0,o.kt)("a",{parentName:"li",href:"../../setup/agent_companion"},(0,o.kt)("strong",{parentName:"a"},"Agent Companion")),", ",(0,o.kt)("a",{parentName:"li",href:"../../setup/agent_companion#agent-companion-login"},(0,o.kt)("strong",{parentName:"a"},"login"))," to the DSK Node and ",(0,o.kt)("a",{parentName:"li",href:"../../setup/agent_companion#agent-companion-connect"},(0,o.kt)("strong",{parentName:"a"},"connect"))," with the DKS Edge Agent"),(0,o.kt)("li",{parentName:"ul"},"Add Generic Source\n",(0,o.kt)("img",{alt:"MQTT GenericSource",src:n(83226).Z,width:"2206",height:"1363"})),(0,o.kt)("li",{parentName:"ul"},"Add Generic Stream(s) with ",(0,o.kt)("inlineCode",{parentName:"li"},"ValueMetadataId")," matching the ",(0,o.kt)("inlineCode",{parentName:"li"},"DataStreamID")," in the message\n",(0,o.kt)("img",{alt:"MQTT Source - Value Source Topic - 1",src:n(63545).Z,width:"2206",height:"1363"})),(0,o.kt)("li",{parentName:"ul"},"Upload To Device")),(0,o.kt)("p",null,"Test and verify:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Publish MQTT message on topic\n",(0,o.kt)("img",{alt:"MQTT Source - Value Source Topic - 2",src:n(20661).Z,width:"1984",height:"1114"})),(0,o.kt)("li",{parentName:"ul"},"Verify value for published message in DataSpace-Admin at Streams of Agent\n",(0,o.kt)("img",{alt:"MQTT Source - Value Source Topic - 3",src:n(32043).Z,width:"2085",height:"1127"}))),(0,o.kt)("h3",{id:"genericvaluesource-topic"},"GenericValueSource topic"),(0,o.kt)("p",null,"TOPIC: ",(0,o.kt)("inlineCode",{parentName:"p"},"DSK/EdgeAgent/GenericValueSource")),(0,o.kt)("p",null,"For publishing of various typed values with custom timestamp and ValueMetadataId derived from custom identifiers."),(0,o.kt)("p",null,"The payload provided for the topic needs to be a UTF8-encoded string which represents a JSON-object as shown in the following example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ValueSourceID": "Machine1", // ID of the source\n  "SensorID": "OperatingIndicator", // ID of the sensor\n  "Timestamp": "2020-01-01T00:00:01+00:00", // Timestamp for the value\n  "Value": "9ihcj8I1RUA=" // Base64-encoded raw-bytes of the actual value\n}\n')),(0,o.kt)("p",null,"The mapping of MQTT message to the value for the stream works like the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ValueMetadataId"),": Derived automatically in a deterministic manner based on ",(0,o.kt)("inlineCode",{parentName:"li"},"ValueSourceID")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"SensorID")," from the JSON-object. Currently there is no check that a matching stream exist we however recommend to create a ",(0,o.kt)("em",{parentName:"li"},"Generic Stream")," for each published ",(0,o.kt)("inlineCode",{parentName:"li"},"ValueSourceID")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"SensorID")," combination for easier management."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Timestamp"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"Timestamp")," from the JSON-object. (",(0,o.kt)("em",{parentName:"li"},"Format ISO 8601-1:2019"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Values"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"Value")," from the JSON-object as Base64-encoded raw-bytes of the actual value (see ",(0,o.kt)("a",{parentName:"li",href:"#data-encoding"},(0,o.kt)("strong",{parentName:"a"},"Data encoding")),").")),(0,o.kt)("p",null,"Configure:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open the ",(0,o.kt)("a",{parentName:"li",href:"../../setup/agent_companion"},(0,o.kt)("strong",{parentName:"a"},"Agent Companion")),", ",(0,o.kt)("a",{parentName:"li",href:"../../setup/agent_companion#agent-companion-login"},(0,o.kt)("strong",{parentName:"a"},"login"))," to the DSK Node and ",(0,o.kt)("a",{parentName:"li",href:"../../setup/agent_companion#agent-companion-connect"},(0,o.kt)("strong",{parentName:"a"},"connect"))," with the DKS Edge Agent"),(0,o.kt)("li",{parentName:"ul"},"Add Generic Source\n",(0,o.kt)("img",{alt:"MQTT GenericSource",src:n(83226).Z,width:"2206",height:"1363"})),(0,o.kt)("li",{parentName:"ul"},"Add Generic Stream(s) and use ",(0,o.kt)("inlineCode",{parentName:"li"},"ValueMetadataId")," derived from ",(0,o.kt)("inlineCode",{parentName:"li"},"AgentID"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"ValueSourceID")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"SensorID"),(0,o.kt)("br",{parentName:"li"}),"Can be derived using the following script ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://dotnetfiddle.net/5UeG7C"},"https://dotnetfiddle.net/5UeG7C")),".\n",(0,o.kt)("img",{alt:"MQTT Source - Generic Value Source Topic - 1",src:n(28702).Z,width:"2206",height:"1363"})),(0,o.kt)("li",{parentName:"ul"},"Upload To Device")),(0,o.kt)("p",null,"Test and verify:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Publish MQTT message on topic\n",(0,o.kt)("img",{alt:"MQTT Source - Generic Value Source Topic - 2",src:n(64454).Z,width:"1984",height:"1114"})),(0,o.kt)("li",{parentName:"ul"},"Verify value for published message in DataSpace-Admin at Streams of Agent\n",(0,o.kt)("img",{alt:"MQTT Source - Generic Value Source Topic - 3",src:n(33743).Z,width:"2085",height:"1289"}))),(0,o.kt)("h2",{id:"data-encoding"},"Data encoding"),(0,o.kt)("p",null,"For the data encoding and conversion to other formats we use the industry standards as e.g. implemented by the .NET framework (see e.g. ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/system.bitconverter?view=net-5.0"},(0,o.kt)("strong",{parentName:"a"},"System.BitConverter")),").\nThe following sample program demonstrates conversions for various value types which might be handy."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\n\npublic class Program\n{\n  public static void Main()\n  {\n    const string formatter = "{0,-10}{1,10}{2,20}{3,15}{4,40}";\n\n    // float\n    float floatValue = 3.1415926535f;\n    byte[] floatAsBytes = BitConverter.GetBytes(floatValue);\n    string floatBase64 = Convert.ToBase64String(floatAsBytes, 0, floatAsBytes.Length);\n    string floatHex = BitConverter.ToString(floatAsBytes).Replace("-","");\n    float floatFromBytes = BitConverter.ToSingle(floatAsBytes);\n\n    // double\n    double doubleValue = 42.42d;\n    byte[] doubleAsBytes = BitConverter.GetBytes(doubleValue);\n    string doubleBase64 = Convert.ToBase64String(doubleAsBytes, 0, doubleAsBytes.Length);\n    string doubleHex = BitConverter.ToString(doubleAsBytes).Replace("-","");\n    double doubleFromBytes = BitConverter.ToDouble(doubleAsBytes);\n\n    // int (aka int32)\n    int intValue = 123;\n    byte[] intAsBytes = BitConverter.GetBytes(intValue);\n    string intBase64 = Convert.ToBase64String(intAsBytes, 0, intAsBytes.Length);\n    string intHex = BitConverter.ToString(intAsBytes).Replace("-","");\n    int intFromBytes = BitConverter.ToInt32(intAsBytes);\n\n    // long (aka int64)\n    long longValue = 9999;\n    byte[] longAsBytes = BitConverter.GetBytes(longValue);\n    string longBase64 = Convert.ToBase64String(longAsBytes, 0, longAsBytes.Length);\n    string longHex = BitConverter.ToString(longAsBytes).Replace("-","");\n    long longFromBytes = BitConverter.ToInt64(longAsBytes);\n\n    // string\n    string stringValue = "foo";\n    byte[] stringAsBytes = System.Text.UTF8Encoding.UTF8.GetBytes(stringValue);\n    string stringBase64 = Convert.ToBase64String(stringAsBytes, 0, stringAsBytes.Length);\n    string stringHex = BitConverter.ToString(stringAsBytes).Replace("-","");\n    string stringFromBytes = System.Text.UTF8Encoding.UTF8.GetString(stringAsBytes);\n\n    // byte[]\n    byte[] byteArray = new byte[]{ 0, 100, 120, 210, 255 };\n    string byteArrayBase64 = Convert.ToBase64String(byteArray, 0, byteArray.Length);\n    string byteArrayHex = BitConverter.ToString(byteArray).Replace("-","");\n\n    // print\n    Console.WriteLine(formatter, "Type", "Value", "HEX", "Base64", "Bytes");\n    Console.WriteLine(formatter, "float", floatValue, floatHex, floatBase64, $"[{string.Join(", ", floatAsBytes)}]");\n    Console.WriteLine(formatter, "double", doubleValue, doubleHex, doubleBase64, $"[{string.Join(", ", doubleAsBytes)}]");\n    Console.WriteLine(formatter, "int", intValue, intHex, intBase64, $"[{string.Join(", ", intAsBytes)}]");\n    Console.WriteLine(formatter, "long", longValue, longHex, longBase64, $"[{string.Join(", ", longAsBytes)}]");\n    Console.WriteLine(formatter, "string", stringValue, stringHex, stringBase64, $"[{string.Join(", ", stringAsBytes)}]");\n    Console.WriteLine(formatter, "byte[]", "--", byteArrayHex, byteArrayBase64, $"[{string.Join(", ", byteArray)}]");\n  }\n}\n')),(0,o.kt)("p",null,"The script can be run online at ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://dotnetfiddle.net/5ggm0T"},"https://dotnetfiddle.net/5ggm0T")),"."),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Type           Value                 HEX         Base64                                   Bytes\nfloat      3.1415927            DB0F4940       2w9JQA==                       [219, 15, 73, 64]\ndouble         42.42    F6285C8FC2354540   9ihcj8I1RUA=     [246, 40, 92, 143, 194, 53, 69, 64]\nint              123            7B000000       ewAAAA==                          [123, 0, 0, 0]\nlong            9999    0F27000000000000   DycAAAAAAAA=              [15, 39, 0, 0, 0, 0, 0, 0]\nstring           foo              666F6F           Zm9v                         [102, 111, 111]\nbyte[]            --          006478D2FF       AGR40v8=                 [0, 100, 120, 210, 255]\n")))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(g,r(r({ref:t},c),{},{components:n})):a.createElement(g,r({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4638:function(e,t,n){t.Z=n.p+"assets/images/mqtt-custom-topic-1-1-3aba7be68ef6438295e9401778af4400.png"},70271:function(e,t,n){t.Z=n.p+"assets/images/mqtt-custom-topic-1-2-a24f9846fce3e5dd320be98aa68d6ac4.png"},3877:function(e,t,n){t.Z=n.p+"assets/images/mqtt-custom-topic-1-3-271fe7b34e5f187d531870067b64687e.png"},820:function(e,t,n){t.Z=n.p+"assets/images/mqtt-custom-topic-2-1-705f93058547e3bafb78ee6700442220.png"},16623:function(e,t,n){t.Z=n.p+"assets/images/mqtt-custom-topic-2-2-7ec1ccdd59a6b8c529398b4f44208f86.png"},95940:function(e,t,n){t.Z=n.p+"assets/images/mqtt-custom-topic-2-3-6c8d84dfd851f2882212135e064b01cd.png"},37319:function(e,t,n){t.Z=n.p+"assets/images/mqtt-double-topic-1-924fd2756f6c6b7e212846d17e62fbb2.png"},63772:function(e,t,n){t.Z=n.p+"assets/images/mqtt-double-topic-2-a1d19b406c9a3323fffdcb783d105726.png"},18728:function(e,t,n){t.Z=n.p+"assets/images/mqtt-double-topic-3-a525c5502822cddda0b1ed074c5e63cd.png"},83226:function(e,t,n){t.Z=n.p+"assets/images/mqtt-generic-source-0a8fe9eeffc8276b785a7c9fc3b43bd9.png"},28702:function(e,t,n){t.Z=n.p+"assets/images/mqtt-generic-value-source-topic-1-1f7c964b927fb86b2929ace26da1b6a0.png"},64454:function(e,t,n){t.Z=n.p+"assets/images/mqtt-generic-value-source-topic-2-a3ae646770e89c568c28601fa6e3e4d5.png"},33743:function(e,t,n){t.Z=n.p+"assets/images/mqtt-generic-value-source-topic-3-a5c6519959bdb21b517c4cda477038b5.png"},57568:function(e,t,n){t.Z=n.p+"assets/images/mqtt-source-f08f4c2e83b243d98ed3410cdd8c4d7e.png"},9958:function(e,t,n){t.Z=n.p+"assets/images/mqtt-string-topic-1-bb63fc9e6d661db1d595d01a60c09934.png"},54483:function(e,t,n){t.Z=n.p+"assets/images/mqtt-string-topic-2-3a9cc3e760e7ff8041db7669a5632bc8.png"},31131:function(e,t,n){t.Z=n.p+"assets/images/mqtt-string-topic-3-b9f3988c29a7d20a3e8790bd44388162.png"},63545:function(e,t,n){t.Z=n.p+"assets/images/mqtt-value-source-topic-1-4d28740c5b38aeb919d6d8d6ccec0fc1.png"},20661:function(e,t,n){t.Z=n.p+"assets/images/mqtt-value-source-topic-2-f727ace83cc889d07d6f4418b8e0c88c.png"},32043:function(e,t,n){t.Z=n.p+"assets/images/mqtt-value-source-topic-3-012885a5b3ec1a433eea8a70dd8d4823.png"},8500:function(e,t,n){t.Z=n.p+"assets/images/mqttx-connection-e4063848bf19f516e4960be347c356ea.png"},57754:function(e,t,n){t.Z=n.p+"assets/images/mqttx-topic-ef067db979dbdc8b2edc6d52a3401e9d.png"}}]);