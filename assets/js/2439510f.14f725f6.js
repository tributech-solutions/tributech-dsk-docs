(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[149],{704:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=["components"],s={title:"Simulated Source",sidebar_position:4},u=void 0,c={unversionedId:"provide_data/iot/simulated",id:"provide_data/iot/simulated",isDocsHomePage:!1,title:"Simulated Source",description:"The DSK Simulated Sensor/Source allows to simulate a data source on the edge side for testing purposes. The generated data for the streams is transmitted to the DSK Edge Agent service (dsk-agent) via our MQTT broker.",source:"@site/docs/provide_data/iot/simulated.md",sourceDirName:"provide_data/iot",slug:"/provide_data/iot/simulated",permalink:"/docs/provide_data/iot/simulated",editUrl:"https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/docs/provide_data/iot/simulated.md",version:"current",sidebarPosition:4,frontMatter:{title:"Simulated Source",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"OPC-UA Source",permalink:"/docs/provide_data/iot/opc-ua"},next:{title:"Overview",permalink:"/docs/consume_data/overview"}},d=[],l={toc:d};function p(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The DSK Simulated Sensor/Source allows to simulate a data source on the edge side for testing purposes. The generated data for the streams is transmitted to the DSK Edge Agent service (",(0,o.kt)("inlineCode",{parentName:"p"},"dsk-agent"),") via our MQTT broker.",(0,o.kt)("br",{parentName:"p"}),"\n","If the ",(0,o.kt)("a",{parentName:"p",href:"../../setup/agent/sources/simulated"},"DSK Simulated Sensor/Source (",(0,o.kt)("inlineCode",{parentName:"a"},"simulated-sensor"),")")," is deployed along with our DSK Edge Agent services it can be configured based on twins with our ",(0,o.kt)("a",{parentName:"p",href:"../../setup/agent_companion"},"Agent Companion")," as described in the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open the ",(0,o.kt)("a",{parentName:"li",href:"../../setup/agent_companion"},"Agent Companion"),", ",(0,o.kt)("a",{parentName:"li",href:"../../setup/agent_companion#agent-companion-login"},"login")," to the DSK Node and ",(0,o.kt)("a",{parentName:"li",href:"../../setup/agent_companion#agent-companion-connect"},"connect")," with the DKS Edge Agent"),(0,o.kt)("li",{parentName:"ul"},"Add Simulated Source\n",(0,o.kt)("img",{alt:"Simulated Sensor/Source 1",src:r(8905).Z})),(0,o.kt)("li",{parentName:"ul"},"Add Simulated Stream(s)",(0,o.kt)("br",{parentName:"li"}),"Various parameters for the simulated stream can be adapted but important are the ",(0,o.kt)("em",{parentName:"li"},"Type")," which defines the actual generated value type and the ",(0,o.kt)("em",{parentName:"li"},"Frequency")," which the amount of generated data.\n",(0,o.kt)("img",{alt:"Simulated Sensor/Source 2",src:r(765).Z})),(0,o.kt)("li",{parentName:"ul"},"Upload To Device")))}p.isMDXComponent=!0},3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,f=p["".concat(u,".").concat(m)]||p[m]||l[m]||o;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8905:function(e,t,r){"use strict";t.Z=r.p+"assets/images/simulated-sensor-1-ad27bd7fc1bf1eabc9491bfe4f1cbec1.png"},765:function(e,t,r){"use strict";t.Z=r.p+"assets/images/simulated-sensor-2-adab2c5039c8ed498b1fa932b31f9640.png"}}]);