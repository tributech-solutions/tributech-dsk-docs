"use strict";(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[9967],{396:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],s={title:"Simulated Source",sidebar_position:5},u=void 0,c={unversionedId:"provide_data/iot/simulated",id:"version-2.0.0/provide_data/iot/simulated",title:"Simulated Source",description:"The Tributech Simulated Sensor/Source allows to simulate a data source on the edge side for testing purposes. The generated data for the streams is transmitted to the Tributech Edge Agent service (dsk-agent) via our MQTT broker.",source:"@site/versioned_docs/version-2.0.0/provide_data/iot/simulated.md",sourceDirName:"provide_data/iot",slug:"/provide_data/iot/simulated",permalink:"/docs/provide_data/iot/simulated",draft:!1,editUrl:"https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/versioned_docs/version-2.0.0/provide_data/iot/simulated.md",tags:[],version:"2.0.0",sidebarPosition:5,frontMatter:{title:"Simulated Source",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"ADS Source",permalink:"/docs/provide_data/iot/ads"},next:{title:"Overview",permalink:"/docs/provide_data/sharedata/overview"}},d={},p=[],l={toc:p};function m(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Tributech Simulated Sensor/Source allows to simulate a data source on the edge side for testing purposes. The generated data for the streams is transmitted to the Tributech Edge Agent service (",(0,o.kt)("inlineCode",{parentName:"p"},"dsk-agent"),") via our MQTT broker.",(0,o.kt)("br",{parentName:"p"}),"\n","If the ",(0,o.kt)("a",{parentName:"p",href:"../../setup/agent/sources/simulated"},(0,o.kt)("strong",{parentName:"a"},"Tributech Simulated Sensor/Source (",(0,o.kt)("inlineCode",{parentName:"strong"},"simulated-sensor"),")"))," is deployed along with our DSK Edge Agent services it can be configured based on twins with our ",(0,o.kt)("a",{parentName:"p",href:"../../setup/agent_companion"},(0,o.kt)("strong",{parentName:"a"},"Agent Companion"))," as described in the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open the ",(0,o.kt)("a",{parentName:"li",href:"../../setup/agent_companion"},(0,o.kt)("strong",{parentName:"a"},"Agent Companion")),", ",(0,o.kt)("a",{parentName:"li",href:"../../setup/agent_companion#agent-companion-login"},(0,o.kt)("strong",{parentName:"a"},"login"))," to the DSK Node and ",(0,o.kt)("a",{parentName:"li",href:"../../setup/agent_companion#agent-companion-connect"},(0,o.kt)("strong",{parentName:"a"},"connect"))," with the DKS Edge Agent"),(0,o.kt)("li",{parentName:"ul"},"Add Simulated Source\n",(0,o.kt)("img",{alt:"Simulated Sensor/Source 0",src:r(93803).Z,width:"1920",height:"937"}),(0,o.kt)("img",{alt:"Simulated Sensor/Source 1",src:r(36078).Z,width:"1916",height:"868"})),(0,o.kt)("li",{parentName:"ul"},"Add Simulated Stream(s)",(0,o.kt)("br",{parentName:"li"}),"Various parameters for the simulated stream can be adapted but important are the ",(0,o.kt)("em",{parentName:"li"},"Type")," which defines the actual generated value type and the ",(0,o.kt)("em",{parentName:"li"},"Frequency")," which the amount of generated data.\n",(0,o.kt)("img",{alt:"Simulated Sensor/Source 2",src:r(69803).Z,width:"1906",height:"872"})),(0,o.kt)("li",{parentName:"ul"},"Apply Configuration")))}m.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=c(r),m=a,f=l["".concat(u,".").concat(m)]||l[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=l;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},93803:function(e,t,r){t.Z=r.p+"assets/images/simulated-sensor-0-3416cf821f251accc97d96e1fa2a1c13.png"},36078:function(e,t,r){t.Z=r.p+"assets/images/simulated-sensor-1-aa844fa80d3912fa999ef646f82545ef.png"},69803:function(e,t,r){t.Z=r.p+"assets/images/simulated-sensor-2-00b0aa7fd05fd121ef8ca4e548185456.png"}}]);