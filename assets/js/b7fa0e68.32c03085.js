"use strict";(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[2728],{63294:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return l},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return f}});var i=n(83117),r=n(80102),o=(n(67294),n(3905)),a=["components"],u={title:"Tributech Agent Configuration",sidebar_position:5},c=void 0,s={unversionedId:"setup/agent_configuration",id:"version-2.0.0/setup/agent_configuration",title:"Tributech Agent Configuration",description:"After successfully linking an Agent using the Agent Companion it can be configured.",source:"@site/versioned_docs/version-2.0.0/setup/agent_configuration.mdx",sourceDirName:"setup",slug:"/setup/agent_configuration",permalink:"/2.0.0/setup/agent_configuration",draft:!1,editUrl:"https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/versioned_docs/version-2.0.0/setup/agent_configuration.mdx",tags:[],version:"2.0.0",sidebarPosition:5,frontMatter:{title:"Tributech Agent Configuration",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Tributech Agent Companion",permalink:"/2.0.0/setup/agent_companion"},next:{title:"Overview",permalink:"/2.0.0/provide_data/overview"}},p={},f=[{value:"Configure Agent",id:"configure-agent",level:2}],g={toc:f};function l(e){var t=e.components,u=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},g,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"After successfully linking an Agent using the ",(0,o.kt)("a",{parentName:"p",href:"/2.0.0/setup/agent_companion"},(0,o.kt)("strong",{parentName:"a"},"Agent Companion"))," it can be configured.\nThe recommended option is to configure the Agent via the Dataspace Admin (DSA)."),(0,o.kt)("h2",{id:"configure-agent"},"Configure Agent"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Login into Tributech Node"),(0,o.kt)("li",{parentName:"ul"},"Navigate to the Agent Section\n",(0,o.kt)("img",{alt:"DSA &amp; Configure 1",src:n(25431).Z,width:"2556",height:"1283"})),(0,o.kt)("li",{parentName:"ul"},"Locate your newly linked Agent and click on it\n",(0,o.kt)("img",{alt:"DSA &amp; Configure 2",src:n(24291).Z,width:"2556",height:"1283"})),(0,o.kt)("li",{parentName:"ul"},"Ensure your device is online\n",(0,o.kt)("img",{alt:"DSA &amp; Configure 3",src:n(30823).Z,width:"2554",height:"1282"})),(0,o.kt)("li",{parentName:"ul"},'Click on "Configuration"\n',(0,o.kt)("img",{alt:"DSA &amp; Configure 4",src:n(12159).Z,width:"2554",height:"1282"})),(0,o.kt)("li",{parentName:"ul"},"The current state of your device will automatically be loaded\n",(0,o.kt)("img",{alt:"DSA &amp; Configure 5",src:n(17365).Z,width:"2560",height:"1289"})),(0,o.kt)("li",{parentName:"ul"},"By right-clicking on the device you can open the edit menu\n",(0,o.kt)("img",{alt:"DSA &amp; Configure 6",src:n(54393).Z,width:"2560",height:"1232"})),(0,o.kt)("li",{parentName:"ul"},"Here you can also link new sources\n",(0,o.kt)("img",{alt:"DSA &amp; Configure 7",src:n(62337).Z,width:"2560",height:"1232"})),(0,o.kt)("li",{parentName:"ul"},"As an alternative you can also import an existing twin configuration defined with ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Azure/opendigitaltwins-dtdl/blob/master/DTDL/v2/dtdlv2.md"},(0,o.kt)("strong",{parentName:"a"},"Digital Twins Definition Language (DTDL) Version 2"))," or a template\n",(0,o.kt)("img",{alt:"DSA &amp; Configure 8",src:n(1817).Z,width:"2560",height:"1232"}))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"  After editing the form you need to press the Apply button on the bottom of the form to store the changes. To apply the configuration to the device you need to press the Apply Configuration button in the header of the editor.")))}l.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return l}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),g=s(n),l=r,d=g["".concat(c,".").concat(l)]||g[l]||f[l]||o;return n?i.createElement(d,a(a({ref:t},p),{},{components:n})):i.createElement(d,a({ref:t},p))}));function l(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=g;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},25431:function(e,t,n){t.Z=n.p+"assets/images/configure_dsa_1-5fee814480f3e85558c9f45f21672a06.png"},24291:function(e,t,n){t.Z=n.p+"assets/images/configure_dsa_2-037e51d64a05d0498a383d6461545a63.png"},30823:function(e,t,n){t.Z=n.p+"assets/images/configure_dsa_3-5bb118fad19d8af100234f6e2d7f7732.png"},12159:function(e,t,n){t.Z=n.p+"assets/images/configure_dsa_4-ecd09692e1ce30131119a3da733c979c.png"},17365:function(e,t,n){t.Z=n.p+"assets/images/configure_dsa_5-d9051b7bd0db778358aa4196a7a00874.png"},54393:function(e,t,n){t.Z=n.p+"assets/images/configure_dsa_6-c56a65678c5380e9b2f6d5170f8f8748.png"},62337:function(e,t,n){t.Z=n.p+"assets/images/configure_dsa_7-38471719adc170b862c6e4f3f59b716b.png"},1817:function(e,t,n){t.Z=n.p+"assets/images/configure_dsa_8-7329ad4e300e839dd3041713f2b3efbb.png"}}]);