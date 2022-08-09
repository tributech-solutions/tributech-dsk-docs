"use strict";(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[5426],{24712:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return s}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],d={title:"Overview",sidebar_position:1},u="IoT Integration Overview",c={unversionedId:"provide_data/iot/overview",id:"version-2.0.0/provide_data/iot/overview",title:"Overview",description:"The Tributech Agent Edge supports direct integration using the MQTT based message bus or by using one of our additional Edge Source services on the edge:",source:"@site/versioned_docs/version-2.0.0/provide_data/iot/overview.md",sourceDirName:"provide_data/iot",slug:"/provide_data/iot/overview",permalink:"/docs/provide_data/iot/overview",draft:!1,editUrl:"https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/versioned_docs/version-2.0.0/provide_data/iot/overview.md",tags:[],version:"2.0.0",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"API Integration",permalink:"/docs/provide_data/rest"},next:{title:"MQTT Source",permalink:"/docs/provide_data/iot/mqtt"}},p={},s=[],l={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"iot-integration-overview"},"IoT Integration Overview"),(0,o.kt)("p",null,"The Tributech Agent Edge supports direct integration using the ",(0,o.kt)("a",{parentName:"p",href:"https://mqtt.org/"},(0,o.kt)("strong",{parentName:"a"},"MQTT"))," based message bus or by using one of our additional Edge Source services on the edge:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Source"),(0,o.kt)("th",{parentName:"tr",align:null},"Guide"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MQTT"),(0,o.kt)("td",{parentName:"tr",align:null},"To provide data through an MQTT message bus, follow the ",(0,o.kt)("a",{parentName:"td",href:"/docs/provide_data/iot/mqtt"},(0,o.kt)("strong",{parentName:"a"},"MQTT Source Guide")),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"OPC-UA"),(0,o.kt)("td",{parentName:"tr",align:null},"For an OPC-UA conform interface, check out the ",(0,o.kt)("a",{parentName:"td",href:"/docs/provide_data/iot/opc-ua"},(0,o.kt)("strong",{parentName:"a"},"OPC-UA Source Guide")),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Beckhoff ADS"),(0,o.kt)("td",{parentName:"tr",align:null},"To provide data through an Beckhoff ADS PLC Server, check out the ",(0,o.kt)("a",{parentName:"td",href:"/docs/provide_data/iot/ads"},(0,o.kt)("strong",{parentName:"a"},"ADS Source Guide")),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Simulated Sensor"),(0,o.kt)("td",{parentName:"tr",align:null},"To provide generated test data, a ",(0,o.kt)("a",{parentName:"td",href:"/docs/provide_data/iot/simulated"},(0,o.kt)("strong",{parentName:"a"},"Simulated Source"))," can be used.")))))}m.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),l=c(r),m=a,v=l["".concat(u,".").concat(m)]||l[m]||s[m]||o;return r?n.createElement(v,i(i({ref:t},p),{},{components:r})):n.createElement(v,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=l;var d={};for(var u in t)hasOwnProperty.call(t,u)&&(d[u]=t[u]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"}}]);