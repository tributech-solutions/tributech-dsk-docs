"use strict";(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[7274],{36284:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"3.6.0","label":"3.6.0","banner":null,"badge":true,"noIndex":false,"className":"docs-version-3.6.0","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/","docId":"introduction"},{"type":"category","label":"Tributech Node","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/tributech_node/overview","docId":"tributech_node/overview"},{"type":"link","label":"API Integration","href":"/tributech_node/API_integration","docId":"tributech_node/API_integration"},{"type":"link","label":"API Usage","href":"/tributech_node/API_usage","docId":"tributech_node/API_usage"}]},{"type":"category","label":"Tributech Agent","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/tributech_agent/overview","docId":"tributech_agent/overview"},{"type":"link","label":"QuickStart","href":"/tributech_agent/quickstart","docId":"tributech_agent/quickstart"},{"type":"link","label":"Agent Integration","href":"/tributech_agent/agent_integration","docId":"tributech_agent/agent_integration"},{"type":"link","label":"Source Integration","href":"/tributech_agent/source_integration","docId":"tributech_agent/source_integration"},{"type":"category","label":"Tributech Sources","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"MQTT Source","href":"/tributech_agent/sources/mqtt_source","docId":"tributech_agent/sources/mqtt_source"},{"type":"link","label":"ADS Source","href":"/tributech_agent/sources/ads_source","docId":"tributech_agent/sources/ads_source"},{"type":"link","label":"OPC-UA Source","href":"/tributech_agent/sources/opcua_source","docId":"tributech_agent/sources/opcua_source"},{"type":"link","label":"Simulated Source","href":"/tributech_agent/sources/simulated_source","docId":"tributech_agent/sources/simulated_source"},{"type":"link","label":"REST Source","href":"/tributech_agent/sources/rest_source","docId":"tributech_agent/sources/rest_source"}]}]},{"type":"category","label":"Tributech OEM Module","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/oem_module/overview","docId":"oem_module/overview"},{"type":"link","label":"Hardware Options","href":"/oem_module/hardware_options","docId":"oem_module/hardware_options"},{"type":"link","label":"Development Setup","href":"/oem_module/development_setup","docId":"oem_module/development_setup"},{"type":"link","label":"UART Interface Specification","href":"/oem_module/uart_interface_specification","docId":"oem_module/uart_interface_specification"},{"type":"link","label":"Hardware Design Guideline","href":"/oem_module/hardware_design_guideline","docId":"oem_module/hardware_design_guideline"},{"type":"link","label":"Additional Resources","href":"/oem_module/additional_resources","docId":"oem_module/additional_resources"}]}]},"docs":{"introduction":{"id":"introduction","title":"Introduction","description":"Welcome to our official documentation page!","sidebar":"tutorialSidebar"},"oem_module/additional_resources":{"id":"oem_module/additional_resources","title":"Additional Resources","description":"Technical resources and documentation references:","sidebar":"tutorialSidebar"},"oem_module/development_setup":{"id":"oem_module/development_setup","title":"Development Setup","description":"Prefer video over text? Watch our IoT Starter Kit Tutorial covering the whole setup process for the Tributech OEM Module with the Infineon XMC board online.","sidebar":"tutorialSidebar"},"oem_module/hardware_design_guideline":{"id":"oem_module/hardware_design_guideline","title":"Hardware Design Guideline","description":"This document should help users and manufacturers to implement the system on a chip (SOC) \u201cTributech OEM module\u201d. The given information is tailored to allow an easy incorporation of the module on manufacturer printed circuit boards. The document includes a recommended footprint, mechanical dimensions, placement and soldering guidelines. For further information or ambiguities please contact us at Tributech.","sidebar":"tutorialSidebar"},"oem_module/hardware_options":{"id":"oem_module/hardware_options","title":"Hardware Options","description":"For the development of embedded IoT devices we offer two hardware variants. The Tributech OEM Module itself, which can be directly integrated into the PCB hardware design as a SoM and an Arduino Shield for prototyping. The shield can be used with all popular hardware development platforms like Arduino Uno, STM32 Nucelo, Infineon XMC Relax Kit and more.","sidebar":"tutorialSidebar"},"oem_module/overview":{"id":"oem_module/overview","title":"Overview","description":"This documentation provides the hardware and software specifications of the Tributech OEM Module for embedded IoT devices.","sidebar":"tutorialSidebar"},"oem_module/uart_interface_specification":{"id":"oem_module/uart_interface_specification","title":"UART Interface Specification","description":"Prerequisites","sidebar":"tutorialSidebar"},"tributech_agent/agent_integration":{"id":"tributech_agent/agent_integration","title":"Agent Integration","description":"In the following section we describe in detail how to setup and link an Tributech Agent with an existing Tributech Node.","sidebar":"tutorialSidebar"},"tributech_agent/overview":{"id":"tributech_agent/overview","title":"Overview","description":"The Tributech Agents are responsible for securing the data collected by Tributech Sources (officially supported protocols) or custom sources implemented based on our specification. Agents also provide a secure bidirectional communication channel between the Tributech Node platform and Tributech Agent which enables not only the secure gathering of data points and proofs, but also the issuing of commands back to the connected environment.","sidebar":"tutorialSidebar"},"tributech_agent/quickstart":{"id":"tributech_agent/quickstart","title":"QuickStart","description":"In this QuickStart Guide we give a shortened overview on how to setup a Tributech Agent with a Simulated Source and connect it to a Tributech Node to display the random generated data.","sidebar":"tutorialSidebar"},"tributech_agent/source_integration":{"id":"tributech_agent/source_integration","title":"Source Integration","description":"Source Definition","sidebar":"tutorialSidebar"},"tributech_agent/sources/ads_source":{"id":"tributech_agent/sources/ads_source","title":"ADS Source","description":"The Tributech ADS Source allows to connect to an Beckhoff ADS Server and receive or write values to the ADS Server.","sidebar":"tutorialSidebar"},"tributech_agent/sources/mqtt_source":{"id":"tributech_agent/sources/mqtt_source","title":"MQTT Source","description":"The Tributech Agent supports the integration of external data sources using the MQTT messaging protocol with the  Tributech MQTT Source. The MQTT Source itself is configured via the Twin Configuration and will be described in the following sections.","sidebar":"tutorialSidebar"},"tributech_agent/sources/opcua_source":{"id":"tributech_agent/sources/opcua_source","title":"OPC-UA Source","description":"The Tributech OPC-UA Source allows to connect to an OPC Unified Architecture (UA) server and receive data.  The Tributech OPC-UA Source acts like a OPC-UA Client in a docker environment and enables the forwarding of the data to a Tributech Agent stream.","sidebar":"tutorialSidebar"},"tributech_agent/sources/rest_source":{"id":"tributech_agent/sources/rest_source","title":"REST Source","description":"The Tributech Agent supports the integration of external data sources using REST with the  Tributech REST Source. The REST Source is configured via the Twin Configuration and is used to send data to the Tributech Agent via MQTT.","sidebar":"tutorialSidebar"},"tributech_agent/sources/simulated_source":{"id":"tributech_agent/sources/simulated_source","title":"Simulated Source","description":"The Tributech Simulated Source allows us to simulate a data source for testing purposes.","sidebar":"tutorialSidebar"},"tributech_node/API_integration":{"id":"tributech_node/API_integration","title":"API Integration","description":"Rest API","sidebar":"tutorialSidebar"},"tributech_node/API_usage":{"id":"tributech_node/API_usage","title":"API Usage","description":"This page should show some of the most used endpoints from our node.","sidebar":"tutorialSidebar"},"tributech_node/overview":{"id":"tributech_node/overview","title":"Overview","description":"The Tributech Node is the central layer of our Tributech Platform where every data will be collected, secured by our Tributech Agents. Additionally, it will provide functionality to configure and execute commands to the given Tributech Agents.","sidebar":"tutorialSidebar"}}}')}}]);