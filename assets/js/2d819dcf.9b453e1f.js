"use strict";(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[1564],{14779:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>g,toc:()=>u});var a=n(58168),l=(n(96540),n(15680));const r={title:"Hardware Design Guideline",sidebar_position:5},i="Hardware Design Guideline",g={unversionedId:"oem_module/hardware_design_guideline",id:"version-2.0.0/oem_module/hardware_design_guideline",title:"Hardware Design Guideline",description:"This document should help users and manufacturers to implement the system on a chip (SOC) \u201cTributech OEM module\u201d. The given information is tailored to allow an easy incorporation of the module on manufacturer printed circuit boards. The document includes a recommended footprint, mechanical dimensions, placement and soldering guidelines. For further information or ambiguities please contact us at Tributech.",source:"@site/versioned_docs/version-2.0.0/oem_module/hardware_design_guideline.md",sourceDirName:"oem_module",slug:"/oem_module/hardware_design_guideline",permalink:"/2.0.0/oem_module/hardware_design_guideline",draft:!1,editUrl:"https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/versioned_docs/version-2.0.0/oem_module/hardware_design_guideline.md",tags:[],version:"2.0.0",sidebarPosition:5,frontMatter:{title:"Hardware Design Guideline",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"UART Interface Specification",permalink:"/2.0.0/oem_module/uart_interface_specification"},next:{title:"Additional Resources",permalink:"/2.0.0/oem_module/additional_resources"}},d={},u=[{value:"Safety Information",id:"safety-information",level:2},{value:"Pin Assignment",id:"pin-assignment",level:2},{value:"Pin Definition",id:"pin-definition",level:3},{value:"PCB Design Guide",id:"pcb-design-guide",level:2},{value:"Tributech OEM Module Placement",id:"tributech-oem-module-placement",level:3},{value:"Mechanical Dimensions and Recommended Footprint",id:"mechanical-dimensions-and-recommended-footprint",level:2},{value:"Dimensions",id:"dimensions",level:3},{value:"Recommended Footprint",id:"recommended-footprint",level:3},{value:"Manufacturing and Packaging",id:"manufacturing-and-packaging",level:2},{value:"Packaging",id:"packaging",level:3},{value:"Manufacturing and Soldering",id:"manufacturing-and-soldering",level:3},{value:"Tributech OEM Module Reference Design",id:"tributech-oem-module-reference-design",level:2}],o={toc:u},m="wrapper";function p(e){let{components:t,...r}=e;return(0,l.yg)(m,(0,a.A)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"hardware-design-guideline"},"Hardware Design Guideline"),(0,l.yg)("p",null,"This document should help users and manufacturers to implement the system on a chip (SOC) \u201cTributech OEM module\u201d. The given information is tailored to allow an easy incorporation of the module on manufacturer printed circuit boards. The document includes a recommended footprint, mechanical dimensions, placement and soldering guidelines. For further information or ambiguities please contact us at Tributech."),(0,l.yg)("h2",{id:"safety-information"},"Safety Information"),(0,l.yg)("p",null,"To be able to work with the Tributech OEM module certain safety precautions must be adhered to throughout all phases of operation. "),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"The user\u2019s use case has to adhere to all local regulations and that the use case is allowed under these regulations. Also all local safety and environment regulations have to be upheld."),(0,l.yg)("li",{parentName:"ul"},"The Tributech OEM module cannot be used in explosive or flammable environments. The use in such hazardous environment may lead to fire or explosion accidents."),(0,l.yg)("li",{parentName:"ul"},"To ensure a proper operational state of the Tributech OEM module the product has to be powered by a stable voltage source and the wiring have to adhere to security precautions and fire regulations."),(0,l.yg)("li",{parentName:"ul"},"To avoid ESD damage to the module or other components proper ESD handling procedures must be followed throughout the handling of the product.")),(0,l.yg)("h2",{id:"pin-assignment"},"Pin Assignment"),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Tributech OEM module Pin Assignment",src:n(22806).A,width:"3318",height:"2592"})),(0,l.yg)("h3",{id:"pin-definition"},"Pin Definition"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Pin Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Pin No."),(0,l.yg)("th",{parentName:"tr",align:null},"I/O"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"),(0,l.yg)("th",{parentName:"tr",align:null},"DC Characteristics"),(0,l.yg)("th",{parentName:"tr",align:null},"Comment"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1"),(0,l.yg)("td",{parentName:"tr",align:null},"VDD"),(0,l.yg)("td",{parentName:"tr",align:null},"I"),(0,l.yg)("td",{parentName:"tr",align:null},"Main Power Supply"),(0,l.yg)("td",{parentName:"tr",align:null},"Vmax = 5.5V",(0,l.yg)("br",null),"Vmin = 3.0V",(0,l.yg)("br",null),"Vnom = 3.3V"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"2"),(0,l.yg)("td",{parentName:"tr",align:null},"VDD"),(0,l.yg)("td",{parentName:"tr",align:null},"I"),(0,l.yg)("td",{parentName:"tr",align:null},"Main Power Supply"),(0,l.yg)("td",{parentName:"tr",align:null},"Vmax = 5.5V",(0,l.yg)("br",null),"Vmin = 3.0V",(0,l.yg)("br",null),"Vnom = 3.3V"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"3"),(0,l.yg)("td",{parentName:"tr",align:null},"VDD"),(0,l.yg)("td",{parentName:"tr",align:null},"I"),(0,l.yg)("td",{parentName:"tr",align:null},"Main Power Supply"),(0,l.yg)("td",{parentName:"tr",align:null},"Vmax = 5.5V",(0,l.yg)("br",null),"Vmin = 3.0V",(0,l.yg)("br",null),"Vnom = 3.3V"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"4-6"),(0,l.yg)("td",{parentName:"tr",align:null},"Reserved"),(0,l.yg)("td",{parentName:"tr",align:null},"I/O"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Do not connect. Reserved for future use.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"7"),(0,l.yg)("td",{parentName:"tr",align:null},"GND"),(0,l.yg)("td",{parentName:"tr",align:null},"I"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Ground")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"8"),(0,l.yg)("td",{parentName:"tr",align:null},"VDD_GPIO"),(0,l.yg)("td",{parentName:"tr",align:null},"I"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Vmax = 3.9V",(0,l.yg)("br",null),"Vmin = 3.0V",(0,l.yg)("br",null),"Vnom = 3.3V"),(0,l.yg)("td",{parentName:"tr",align:null},"The voltage on this pin determines the logical voltage level of the I7O pins of the OEM module.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"9-13"),(0,l.yg)("td",{parentName:"tr",align:null},"Reserved"),(0,l.yg)("td",{parentName:"tr",align:null},"I/O"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Do not connect. Reserved for future use.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"14"),(0,l.yg)("td",{parentName:"tr",align:null},"VDD"),(0,l.yg)("td",{parentName:"tr",align:null},"I"),(0,l.yg)("td",{parentName:"tr",align:null},"Main Power Supply"),(0,l.yg)("td",{parentName:"tr",align:null},"Vmax = 5.5V",(0,l.yg)("br",null),"Vmin = 3.0V",(0,l.yg)("br",null),"Vnom = 3.3V"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"15"),(0,l.yg)("td",{parentName:"tr",align:null},"VDD"),(0,l.yg)("td",{parentName:"tr",align:null},"I"),(0,l.yg)("td",{parentName:"tr",align:null},"Main Power Supply"),(0,l.yg)("td",{parentName:"tr",align:null},"Vmax = 5.5V",(0,l.yg)("br",null),"Vmin = 3.0V",(0,l.yg)("br",null),"Vnom = 3.3V"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"16"),(0,l.yg)("td",{parentName:"tr",align:null},"VDD"),(0,l.yg)("td",{parentName:"tr",align:null},"I"),(0,l.yg)("td",{parentName:"tr",align:null},"Main Power Supply"),(0,l.yg)("td",{parentName:"tr",align:null},"Vmax = 5.5V",(0,l.yg)("br",null),"Vmin = 3.0V",(0,l.yg)("br",null),"Vnom = 3.3V"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"17-23"),(0,l.yg)("td",{parentName:"tr",align:null},"Reserved"),(0,l.yg)("td",{parentName:"tr",align:null},"I/O"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Do not connect. Reserved for future use.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"24"),(0,l.yg)("td",{parentName:"tr",align:null},"Reset"),(0,l.yg)("td",{parentName:"tr",align:null},"I"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Reset Pin of the Tributech OEM module.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"25-30"),(0,l.yg)("td",{parentName:"tr",align:null},"Reserved"),(0,l.yg)("td",{parentName:"tr",align:null},"I/O"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Do not connect. Reserved for future use.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"31-32"),(0,l.yg)("td",{parentName:"tr",align:null},"GND"),(0,l.yg)("td",{parentName:"tr",align:null},"I"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Ground")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"33"),(0,l.yg)("td",{parentName:"tr",align:null},"SIM_RST"),(0,l.yg)("td",{parentName:"tr",align:null},"I/O"),(0,l.yg)("td",{parentName:"tr",align:null},"Digital I/O"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Ext. SIM card reset")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"34"),(0,l.yg)("td",{parentName:"tr",align:null},"SIM_DET"),(0,l.yg)("td",{parentName:"tr",align:null},"I/O"),(0,l.yg)("td",{parentName:"tr",align:null},"Digital I/O"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Ext. SIM card detection")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"35"),(0,l.yg)("td",{parentName:"tr",align:null},"SIM_CLK"),(0,l.yg)("td",{parentName:"tr",align:null},"I/O"),(0,l.yg)("td",{parentName:"tr",align:null},"Digital I/O"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Ext. SIM card clock signal")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"36"),(0,l.yg)("td",{parentName:"tr",align:null},"SIM_IO"),(0,l.yg)("td",{parentName:"tr",align:null},"I/O"),(0,l.yg)("td",{parentName:"tr",align:null},"Digital I/O"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Ext. SIM card data signal")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"37"),(0,l.yg)("td",{parentName:"tr",align:null},"SIM_1V8"),(0,l.yg)("td",{parentName:"tr",align:null},"I/O"),(0,l.yg)("td",{parentName:"tr",align:null},"Digital I/O"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Ext. SIM card power supply")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"38"),(0,l.yg)("td",{parentName:"tr",align:null},"GND"),(0,l.yg)("td",{parentName:"tr",align:null},"I"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Ground")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"39"),(0,l.yg)("td",{parentName:"tr",align:null},"GND"),(0,l.yg)("td",{parentName:"tr",align:null},"I"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Ground")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"40-43"),(0,l.yg)("td",{parentName:"tr",align:null},"Reserved"),(0,l.yg)("td",{parentName:"tr",align:null},"I/O"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Do not connect. Reserved for future use.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"44-60"),(0,l.yg)("td",{parentName:"tr",align:null},"GND"),(0,l.yg)("td",{parentName:"tr",align:null},"I"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Ground")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"61-62"),(0,l.yg)("td",{parentName:"tr",align:null},"Reserved"),(0,l.yg)("td",{parentName:"tr",align:null},"I/O"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Do not connect. Reserved for future use.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"63-64"),(0,l.yg)("td",{parentName:"tr",align:null},"VDD"),(0,l.yg)("td",{parentName:"tr",align:null},"I"),(0,l.yg)("td",{parentName:"tr",align:null},"Main Power Supply"),(0,l.yg)("td",{parentName:"tr",align:null},"Vmax = 5.5V",(0,l.yg)("br",null),"Vmin = 3.0V",(0,l.yg)("br",null),"Vnom = 3.3V"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"65"),(0,l.yg)("td",{parentName:"tr",align:null},"GND"),(0,l.yg)("td",{parentName:"tr",align:null},"I"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Ground")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"66-68"),(0,l.yg)("td",{parentName:"tr",align:null},"Reserved"),(0,l.yg)("td",{parentName:"tr",align:null},"I/O"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Do not connect. Reserved for future use.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"69"),(0,l.yg)("td",{parentName:"tr",align:null},"UART_RX"),(0,l.yg)("td",{parentName:"tr",align:null},"I"),(0,l.yg)("td",{parentName:"tr",align:null},"UART receive pin of the OEM"),(0,l.yg)("td",{parentName:"tr",align:null},"The logic level depends on the voltage supplied to VDD_GPIO"),(0,l.yg)("td",{parentName:"tr",align:null},"UART_RX connect external TX here")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"70"),(0,l.yg)("td",{parentName:"tr",align:null},"UART_TX"),(0,l.yg)("td",{parentName:"tr",align:null},"O"),(0,l.yg)("td",{parentName:"tr",align:null},"UART transmit pin of the OEM"),(0,l.yg)("td",{parentName:"tr",align:null},"The logic level depends on the voltage supplied to VDD_GPIO"),(0,l.yg)("td",{parentName:"tr",align:null},"UART_TX connect external RX here")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"71"),(0,l.yg)("td",{parentName:"tr",align:null},"Reserved"),(0,l.yg)("td",{parentName:"tr",align:null},"I/O"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Do not connect. Reserved for future use.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"72"),(0,l.yg)("td",{parentName:"tr",align:null},"GND"),(0,l.yg)("td",{parentName:"tr",align:null},"I"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Ground")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"73-74"),(0,l.yg)("td",{parentName:"tr",align:null},"Reserved"),(0,l.yg)("td",{parentName:"tr",align:null},"I/O"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Do not connect. Reserved for future use.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"75"),(0,l.yg)("td",{parentName:"tr",align:null},"GND"),(0,l.yg)("td",{parentName:"tr",align:null},"I"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Ground")))),(0,l.yg)("h2",{id:"pcb-design-guide"},"PCB Design Guide"),(0,l.yg)("h3",{id:"tributech-oem-module-placement"},"Tributech OEM Module Placement"),(0,l.yg)("p",null,"The Tributech OEM Module should, if possible, always be placed at the edge of the PCB. This is due to the antenna connection which has to be fastened to the Tributech OEM."),(0,l.yg)("h2",{id:"mechanical-dimensions-and-recommended-footprint"},"Mechanical Dimensions and Recommended Footprint"),(0,l.yg)("h3",{id:"dimensions"},"Dimensions"),(0,l.yg)("p",null,"The dimensions are given in millimeters for the Tributech OEM module.\n",(0,l.yg)("img",{alt:"Tributech OEM module dimensions",src:n(95762).A,width:"610",height:"714"})),(0,l.yg)("h3",{id:"recommended-footprint"},"Recommended Footprint"),(0,l.yg)("p",null,"The dimensions are given in millimeters for the Tributech OEM module."),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Tributech OEM module recommended footprint",src:n(64796).A,width:"3158",height:"2184"})),(0,l.yg)("p",null,"The Footprint is also available as a KiCad V6.0.7 library and can be found via this ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/tributech-solutions/tributech-oem-module-iot-kit-examples/tree/main/Hardware%20reference%20design"},"Link (Tributech OEM module KiCad footprint.zip)"),"."),(0,l.yg)("h2",{id:"manufacturing-and-packaging"},"Manufacturing and Packaging"),(0,l.yg)("h3",{id:"packaging"},"Packaging"),(0,l.yg)("p",null,"The Tributech OEM module is provided in an ESD packaging with a self-sealing zipper. The recommended storage conditions for the module are: a temperature of 23\xb15 \xb0C and a relative humidity of about 35%-60%."),(0,l.yg)("h3",{id:"manufacturing-and-soldering"},"Manufacturing and Soldering"),(0,l.yg)("p",null,"The soldering temperature of the OEM depends on two parts: the solder paste and the nRF9160. The absolute maximum reflow temperature is 230\xb0C to avoid damage to the components of the system on a chip. If the manufactured PCB has components on the bottom and top side it is strongly recommended to first manufacture the side without the Tributech OEM module in order to minimize the reflow cycles for the module. "),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Solder thermal Profile",src:n(86526).A,width:"747",height:"369"})),(0,l.yg)("h2",{id:"tributech-oem-module-reference-design"},"Tributech OEM Module Reference Design"),(0,l.yg)("p",null,"The following ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/tributech-solutions/tributech-oem-module-iot-kit-examples/tree/main/Hardware%20reference%20design"},"link (Tributech_OEM_Reference_Design_for_case.zip)")," leads to a reference design for the Tributech OEM module done in KiCad V6.0.7:"),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Tributech OEm module reference design",src:n(62513).A,width:"1513",height:"883"})),(0,l.yg)("p",null,"The reference design of the Tributech OEM module contains:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Tributech OEM module"),(0,l.yg)("li",{parentName:"ul"},"SIM card socket"),(0,l.yg)("li",{parentName:"ul"},"Micro-controller XMC1404 from Infineon"),(0,l.yg)("li",{parentName:"ul"},"GNSS module L86 from Quectel"),(0,l.yg)("li",{parentName:"ul"},"USB to UART controller"),(0,l.yg)("li",{parentName:"ul"},"Power Supply 5V to 3.3V with 1A")))}p.isMDXComponent=!0},15680:(e,t,n)=>{n.d(t,{xA:()=>o,yg:()=>s});var a=n(96540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=a.createContext({}),u=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,o=g(e,["components","mdxType","originalType","parentName"]),m=u(n),y=l,s=m["".concat(d,".").concat(y)]||m[y]||p[y]||r;return n?a.createElement(s,i(i({ref:t},o),{},{components:n})):a.createElement(s,i({ref:t},o))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=y;var g={};for(var d in t)hasOwnProperty.call(t,d)&&(g[d]=t[d]);g.originalType=e,g[m]="string"==typeof e?e:l,i[1]=g;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},86526:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/Solder_thermal_Profile-5f83577abe225113d4fdcfbce0c20cd9.png"},95762:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/Tributech_OEM_Module_Dimensions-02b9f24c881ee8054c5c0c52820787db.png"},22806:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/Tributech_OEM_Module_Pin_Assignment-0a32754d33fc458afd69430bb63b0ffb.png"},62513:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/Tributech_OEM_module_Reference_Design-1ae2c14b82b71e427a83e24e7a86779a.png"},64796:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/Tributech_OEM_module_recommended_footprint-dff71fbe674a2a7208753290028ab201.png"}}]);