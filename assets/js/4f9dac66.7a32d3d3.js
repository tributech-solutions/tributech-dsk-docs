"use strict";(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[7086],{21160:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>h});var i=n(58168),o=(n(96540),n(15680));const a={title:"Development Setup",sidebar_position:3},r="Development Setup",l={unversionedId:"oem_module/development_setup",id:"version-4.0.0/oem_module/development_setup",title:"Development Setup",description:"This Tributech OEM module documentation is deprecated and only works with Tributech DSK version 3.6, which is no longer actively maintained.",source:"@site/versioned_docs/version-4.0.0/oem_module/development_setup.md",sourceDirName:"oem_module",slug:"/oem_module/development_setup",permalink:"/4.0.0/oem_module/development_setup",draft:!1,editUrl:"https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/versioned_docs/version-4.0.0/oem_module/development_setup.md",tags:[],version:"4.0.0",sidebarPosition:3,frontMatter:{title:"Development Setup",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Hardware Options",permalink:"/4.0.0/oem_module/hardware_options"},next:{title:"UART Interface Specification",permalink:"/4.0.0/oem_module/uart_interface_specification"}},s={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Set Configuration",id:"set-configuration",level:2},{value:"Verify Communication",id:"verify-communication",level:2},{value:"Get started with your project",id:"get-started-with-your-project",level:2},{value:"Setup Dev Environment",id:"setup-dev-environment",level:3},{value:"Configure OEM Module",id:"configure-oem-module",level:3}],c={toc:h},d="wrapper";function u(e){let{components:t,...a}=e;return(0,o.yg)(d,(0,i.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"development-setup"},"Development Setup"),(0,o.yg)("admonition",{type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"This Tributech OEM module documentation is deprecated and only works with Tributech DSK version 3.6, which is no longer actively maintained.")),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"Prefer video over text? Watch our ",(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("a",{parentName:"strong",href:"https://5705912.fs1.hubspotusercontent-na1.net/hubfs/5705912/Tributech_Academy01.mp4"},"IoT Starter Kit Tutorial"))," covering the whole setup process for the Tributech OEM Module with the Infineon XMC board online."),(0,o.yg)("p",{parentName:"admonition"},"Links mentioned in the tutorial video:"),(0,o.yg)("ul",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://softwaretools.infineon.com/tools/com.ifx.tb.tool.daveide"},"Infineon DAVE IDE")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://www.segger.com/downloads/jlink/"},"Segger JLink Driver")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/tributech-solutions/tributech-oem-module-iot-kit-examples"},"Tributech Github repository")))),(0,o.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Tributech OEM Shield"),(0,o.yg)("li",{parentName:"ul"},"Antenna with U.FL connector (LTE CAT-M capable)"),(0,o.yg)("li",{parentName:"ul"},"micro LTE SIM card"),(0,o.yg)("li",{parentName:"ul"},"USB A to micro USB cable or 5V power adapter with micro USB"),(0,o.yg)("li",{parentName:"ul"},"Username and Password for Tributech Web portal access"),(0,o.yg)("li",{parentName:"ul"},"Arduino pin compatible development board",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/tributech-solutions/tributech-oem-module-iot-kit-examples/tree/main/nRF52840-DK"},"nRF52840")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/tributech-solutions/tributech-oem-module-iot-kit-examples/tree/main/IoT-KIT-Infineon-XMC47_RELAX_5V_AD_V1/XMC4700_USB_to_UART"},"XMC4700 Relax Kit"))))),(0,o.yg)("h2",{id:"set-configuration"},"Set Configuration"),(0,o.yg)("p",null,'The following steps represent the general procedure to setup the "Tributech OEM Arduino Shield" sample kit:'),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Open the OEM SIM card socket, for this push the socket cover back and then tilt up the socket lit and insert a valid SIM card.")),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"OEM SIM card socket opening",src:n(51102).A,width:"629",height:"663"})),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},"Connect the antenna to the Tributech OEM shield.")),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"OEM antenna connection",src:n(85735).A,width:"685",height:"585"})),(0,o.yg)("ol",{start:3},(0,o.yg)("li",{parentName:"ol"},"Connect the Tributech OEM shield with the chosen Development kit."),(0,o.yg)("li",{parentName:"ol"},"Connect the chosen sensor to the sample kit.")),(0,o.yg)("p",null,"After the steps above the sample kit is ready to send data."),(0,o.yg)("h2",{id:"verify-communication"},"Verify Communication"),(0,o.yg)("p",null,"The verification of the connection and communication can be done in the Tributech web portal. The user has to access url of the node which is linked to their device and complete the login. The address always follows the following format:"),(0,o.yg)("p",null,"  node-name.tributech-node.com"),(0,o.yg)("p",null,'The "node-name" is dependent on the node which is linked to the device. The node-name as well as the login credentials will be provided by Tributech via email. The main page of the web portal shows multiple sections all with their own information, but for the verification the user needs to look at the left-hand side an click on the "Agents" tap.'),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"List of all Agents linked to node",src:n(77652).A,width:"1920",height:"968"})),(0,o.yg)("p",null,"This tap lists all agents which are linked to the node. They are listed with the following information:"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Online/Status"),(0,o.yg)("th",{parentName:"tr",align:null},"Name"),(0,o.yg)("th",{parentName:"tr",align:null},"Type"),(0,o.yg)("th",{parentName:"tr",align:null},"Key Storage Type"),(0,o.yg)("th",{parentName:"tr",align:null},"Proof Kind"),(0,o.yg)("th",{parentName:"tr",align:null},"Actions"),(0,o.yg)("th",{parentName:"tr",align:null})))),(0,o.yg)("p",null,'"Online" shows if the agents is online or offline. Name depicts the different names of the agents. Type lists the device type of the respective agents. Key Storage Type will show the user where the private keys are stored and ProofKind depicts which key format is used for the proof signatures. The Actions tap gives the suer more options to handle the linked device.'),(0,o.yg)("p",null,'Here the user has to select their own device and click on it. The names of the device will be provided by Tributech via email and will be depicted either on the device box or on the device itself. This will lead the user to the "Agent Management" page. An example of the agent management page is shown in the following picture:'),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Agent management page: agent: Tributech OEM node:dev-node-a",src:n(5552).A,width:"1366",height:"660"})),(0,o.yg)("p",null,"Since the connectivity already is verified when the device is listed as online the next step is to verify the device communication. This can be done via clicking on the on of the listed streams. This action will show the stream information and it's associated values link in the picture below:"),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Temperature stream of an agent",src:n(22293).A,width:"1920",height:"970"})),(0,o.yg)("p",null,"The stream values will be depicted in a graph or table format below the stream information."),(0,o.yg)("h2",{id:"get-started-with-your-project"},"Get started with your project"),(0,o.yg)("h3",{id:"setup-dev-environment"},"Setup Dev Environment"),(0,o.yg)("p",null,"The dev environment setup depends on the development kit which is chosen by the user. At the moment two dev kits are supported by Tributech. The setups For their respective dev environments can be found here:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://softwaretools.infineon.com/tools/com.ifx.tb.tool.daveide"},"Infineon DAVE IDE")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://www.nordicsemi.com/Products/Development-tools/nRF-Connect-for-desktop"},"Nordic nRF Connect for Desktop"))),(0,o.yg)("h3",{id:"configure-oem-module"},"Configure OEM Module"),(0,o.yg)("p",null,'The Tributech OEM shield only acknowledges values provided via UART which have a valid stream ID. These stream IDs are generated automatically when a new stream is added to the Twin configuration of the OEM shield. The Twin configuration is a electronic representation of a IoT-device, it contains the configuration parameters like metadata, configurations and conditions of the device and their different correlations to each other. Parts of this Twin configuration can be altered by the user like adding sources and streams to the configuration. Thus the user has to configure the OEM shield via the Data-Space-Admin. For more in depth information on device twins follow this link Twin "',(0,o.yg)("a",{parentName:"p",href:"https://tributech.io/blog/digital-twins-for-IoT-device-configurations"},"How to use digital Twins for IoT devices configurations"),'".'),(0,o.yg)("p",null,'The configuration is sent to the OEM shield via a MQTT connection which means the device has to be online for a configuration update. If the device is online a new tap can be seen in the Agent management page called "Configuration". This is depicted in the picture below:'),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Agent management page Configuration tap",src:n(77939).A,width:"1920",height:"970"})),(0,o.yg)("p",null,"When the configuration tap is accessed the first action is triggered and the configuration is pulled form the linked OEM shield. This configuration is then depicted on the webpage:"),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Tributech OEM shield Twin configuration",src:n(35554).A,width:"1920",height:"970"})),(0,o.yg)("p",null,'Depending on the location where the OEM shield is stationed and the LTE CAT-M connection the configuration pull can last several seconds. When the current configuration is shown in the web portal the user can start changing the configuration. The most important part of the configuration change is to add a custom stream. To be able to add a new stream first the user should add a new source. To add a new source right-click on the device name and choose "Add Source". Furthermore search for "Embedded Source" this is the only source which can be added to a OEM shield device all other sources will be ignored.'),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Add additional source to a pre-conditioned device",src:n(32735).A,width:"692",height:"903"})),(0,o.yg)("p",null,'After the source is added the name of the source can be changed on the right-hand side. The changes have to be finalized by clicking on the "Apply" button on the bottom of the configuration. If the changes are done a stream can be added to the source. Again via right-clicking on the source a dropdown menu is shown. In this menu navigate to "Add Streams" and use the only available option "Embedded Stream". The configuration of the stream follows the same principle as the name change of the Source.'),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Add stream to source",src:n(16824).A,width:"682",height:"906"})),(0,o.yg)("p",null,'The last change which needs to be done is the addition of the "Value change options". Adding these options is shown in the following picture. The "value change options" consist of three values: PMIN, PMAX, ST. The PMIN value depicts the time frame which has to pass until a new value can be provided to the OEM in seconds. This value has to be at least 10 seconds. PMAX depicts the maximum time frame where no value is published by the OEM. If the user has at least supplied the OEM with at least one value the PMAX value will be activated. Afterwards if no value is supplied to the OEM in the PMAX specified time frame the last received value will be published by the OEM automatically. ST(step) is a threshold value. If the new value does not exceed "last value + ST" then the new value will not be published. '),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Add value change options to a stream",src:n(64989).A,width:"682",height:"905"})),(0,o.yg)("p",null,'With these changes the configuration can be send to the OEM shield via the "Apply Configuration" button.'))}u.isMDXComponent=!0},15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var i=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),h=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=h(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=h(n),p=o,g=d["".concat(s,".").concat(p)]||d[p]||u[p]||a;return n?i.createElement(g,r(r({ref:t},c),{},{components:n})):i.createElement(g,r({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var h=2;h<a;h++)r[h]=n[h];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},77652:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/AgentManagementTap-355e139c70b01b716aa8973346e8afdd.png"},51102:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/OEM_SIM_card_socket_opening-d1ab8738f5a37a0ed322565884116030.png"},85735:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/OEM_connect_antenna-16c688d88b551d3932e6d46001979ca7.png"},32735:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/TributechPlatformAgentAddSource-ae45df011665fa614791db8d686a1c3c.png"},16824:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/TributechPlatformAgentAddStream-221a728c9f5ef190f13483b02e5dec86.png"},64989:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/TributechPlatformAgentAddValueChange-e9b274eb5d577d7c8d66c76363291a0d.png"},77939:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/TributechPlatformAgentConfiguration-467dc15c454f2dfbf94912fa838e1d54.png"},35554:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/TributechPlatformAgentConfigurationPage-43ebf3971fa561689cf2a2540ef47a53.png"},5552:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/TributechPlatformAgentManagement-012ec5fb1788cbad9a389afba1c16e39.png"},22293:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/TributechPlatformAgentStream-822487be27bd6b1f6392dded85223bc2.png"}}]);