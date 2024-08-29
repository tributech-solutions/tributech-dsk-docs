"use strict";(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[7943],{65504:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>n,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(58168),i=(r(96540),r(15680));const o={title:"Overview",sidebar_position:1},n="Overview",s={unversionedId:"oem_module/overview",id:"version-4.0.0/oem_module/overview",title:"Overview",description:"This Tributech OEM module documentation is deprecated and only works with Tributech DSK version 3.6, which is no longer actively maintained.",source:"@site/versioned_docs/version-4.0.0/oem_module/overview.md",sourceDirName:"oem_module",slug:"/oem_module/overview",permalink:"/oem_module/overview",draft:!1,editUrl:"https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/versioned_docs/version-4.0.0/oem_module/overview.md",tags:[],version:"4.0.0",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"REST Source",permalink:"/tributech_agent/sources/rest_source"},next:{title:"Hardware Options",permalink:"/oem_module/hardware_options"}},d={},c=[{value:"Hardware Modules",id:"hardware-modules",level:2},{value:"Software Stack",id:"software-stack",level:2},{value:"Connectivity",id:"connectivity",level:2}],l={toc:c},u="wrapper";function m(e){let{components:t,...o}=e;return(0,i.yg)(u,(0,a.A)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"overview"},"Overview"),(0,i.yg)("admonition",{type:"caution"},(0,i.yg)("p",{parentName:"admonition"},"This Tributech OEM module documentation is deprecated and only works with Tributech DSK version 3.6, which is no longer actively maintained.")),(0,i.yg)("p",null,"This documentation provides the hardware and software specifications of the Tributech OEM Module for embedded IoT devices.\nThe miniaturized 32 x 22 x 3 mm IoT module is packaged as a system-on-module (SoM) that includes Nordic Semiconductor low-power nRF9160 SiP with integrated LTE-M/NB IoT modem, a GPS sensor, eSIM and Infineon Technologies high-end OPTIGA\u2122 Trust M hardware security module. Together with Tributech\u2019s IoT and data platform middleware, it provides all core functionalities of an IoT device like managing telemetry data, configurations, updates, provisioning, and security. Beside these core functionalities, the platform includes unique features like blockchain-based data verification, digital twin-based configuration and data management as well as built-in data sharing.\nThis allows builders to design embedded IoT devices that are perfectly optimized (in terms of interfaces, form factor and costs) for their use cases without the need to take care of all the complexity of a connectivity and data management platform. "),(0,i.yg)("h2",{id:"hardware-modules"},"Hardware Modules"),(0,i.yg)("p",null,"For the development of embedded IoT devices we offer two hardware variants. The Tributech OEM Module itself, which can be directly integrated into the PCB hardware design as a SoM and an Arduino Shield for prototyping. The shield can be used with all popular hardware development platforms like Arduino Uno, STM32 Nucelo, Infineon XMC Relax Kit and more.  "),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Hardware Options",src:r(44030).A,width:"1920",height:"1090"})),(0,i.yg)("h2",{id:"software-stack"},"Software Stack"),(0,i.yg)("p",null,"The software stack consists of the OEM Module firmware and an middleware that includes connectivity services, device management, IoT data management, digital twin workspace, data verification services and more.\nOn the device side, the OEM module provides a UART interface for exchanging configurations, providing telemetry data and performing updates. This allows developers to focus on firmware development for data pre-processing and sensor/interface integration, as all complexity is abstracted via an easy-to-use interface.\nOn the middleware / backend side, the captured data can be consumed via APIs, a message broker or stream explorer. The configuration- and device-management is available through the web portal and APIs."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Architecture",src:r(78628).A,width:"1500",height:"1090"})),(0,i.yg)("h2",{id:"connectivity"},"Connectivity"),(0,i.yg)("p",null,"The Tributech OEM module includes a multimode LTE-M/NB-IoT modem with GNSS and is certified for global operation. The availability of these connectivity standards has already reached global scale. The current status of the network rollout can be checked via GSMA's Mobile IoT Deployment Map."),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://www.gsma.com/iot/deployment-map/"},"https://www.gsma.com/iot/deployment-map/")," "),(0,i.yg)("p",null,"LTE-M and NB-IoT were designed for IoT applications that use low to medium data rates, need to be low cost, operate in hard-to-reach places, or require long battery life. With these properties, they are suitable for many sensing and monitoring applications in the mobile sector, but also for many stationary applications in the area of smart building, smart infrastructure, or smart factory. The following graphic provides an overview about the differences between the cellular connectivity standards."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Connectivity",src:r(8168).A,width:"1920",height:"700"})))}m.isMDXComponent=!0},15680:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>h});var a=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=a.createContext({}),c=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(r),p=i,h=u["".concat(d,".").concat(p)]||u[p]||m[p]||o;return r?a.createElement(h,n(n({ref:t},l),{},{components:r})):a.createElement(h,n({ref:t},l))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,n=new Array(o);n[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[u]="string"==typeof e?e:i,n[1]=s;for(var c=2;c<o;c++)n[c]=r[c];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},78628:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/Architecture-f91bd051a616bb5a565934f9dfd1ccd5.jpg"},8168:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/Connectivity-11fbe04711de1d867d9769b48fd877ba.jpg"},44030:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/Hardware_Options-c294a075c397a70f2b6bc6235783a487.jpg"}}]);