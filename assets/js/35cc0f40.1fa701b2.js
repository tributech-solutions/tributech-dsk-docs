"use strict";(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[9571],{94464:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>D,contentTitle:()=>C,default:()=>O,frontMatter:()=>A,metadata:()=>v,toc:()=>N});var o=t(58168),i=(t(96540),t(15680));const a={toc:[]},r="wrapper";function g(e){let{components:n,...t}=e;return(0,i.yg)(r,(0,o.A)({},a,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://tributechioapps.blob.core.windows.net/tributech-dsk-agent-companion/dist/packages/Tributech%20Agent%20Companion%202.0.0.exe"},(0,i.yg)("strong",{parentName:"a"},"Download (Windows)"))))}g.isMDXComponent=!0;const c={toc:[]},s="wrapper";function p(e){let{components:n,...t}=e;return(0,i.yg)(s,(0,o.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://tributechioapps.blob.core.windows.net/tributech-dsk-agent-companion/dist/packages/Tributech%20Agent%20Companion-2.0.0.dmg"},(0,i.yg)("strong",{parentName:"a"},"Download (macOS)"))))}p.isMDXComponent=!0;const l={toc:[]},d="wrapper";function m(e){let{components:n,...a}=e;return(0,i.yg)(d,(0,o.A)({},l,a,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Click Login (top right corner)."),(0,i.yg)("li",{parentName:"ul"},"Enter the name/domain of your DSK Hub and DSK Node and click Login (below).",(0,i.yg)("br",{parentName:"li"}),"(The provided information defines to which DSK Node an DSK Agent will be connected during the linking process.)\n",(0,i.yg)("img",{alt:"AgentCompanion - Login 1",src:t(90954).A,width:"1883",height:"1103"})),(0,i.yg)("li",{parentName:"ul"},"A window with the login page of the authentication server will pop-up where you can sign in with your personal user account of your DSK Node.\n",(0,i.yg)("img",{alt:"AgentCompanion - Login 2",src:t(5185).A,width:"2076",height:"1310"})),(0,i.yg)("li",{parentName:"ul"},"The window will be closed on successful login and the Agent Companion will be connected to the DSK Node (indicated by the green sign on top right at the DSK Node name).\n",(0,i.yg)("img",{alt:"AgentCompanion - Login 3",src:t(84056).A,width:"1883",height:"1103"}))))}m.isMDXComponent=!0;const u={toc:[]},h="wrapper";function y(e){let{components:n,...a}=e;return(0,i.yg)(h,(0,o.A)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"We need to be able to connect to the API of the DSK Edge Agent to link & configure it with the Agent Companion.",(0,i.yg)("br",{parentName:"li"}),"Our recommended option is to open an SSH connection to the deployed virtual machine of the DSK Edge Agent with an SSH tunnel/port forwarding for the remote port of the API forwarding it to an local port on your localhost.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"ssh <vm-user>@<vm-ip> -L <local-port>:localhost:5000\n# e.g.\nssh tributech@20.86.158.183 -L 5000:localhost:5000\n")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"AgentCompanion - Connect 1",src:t(68811).A,width:"1965",height:"849"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"After the SSH connection with the tunnel/port forwarding is established we can connect to the DSK Edge Agent with the Agent-Companion.",(0,i.yg)("br",{parentName:"li"}),"(e.g. ",(0,i.yg)("inlineCode",{parentName:"li"},"http://localhost:5000"),")\n",(0,i.yg)("img",{alt:"AgentCompanion - Connect 2",src:t(81168).A,width:"2076",height:"1310"}))))}y.isMDXComponent=!0;const f={toc:[]},b="wrapper";function w(e){let{components:n,...a}=e;return(0,i.yg)(b,(0,o.A)({},f,a,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"By linking the DSK Edge Agent all metadata for the agent is created on the DSK Node and we establish the trust between the parties.\nWe need to be logged in to the desired target Node and connected to the DSK Edge Agent (indicated by the green signs on the top right).\n",(0,i.yg)("img",{alt:"AgentCompanion - Link 1",src:t(64261).A,width:"2076",height:"1310"})),(0,i.yg)("li",{parentName:"ul"},"Click on Link/Relink Agent\n",(0,i.yg)("img",{alt:"AgentCompanion - Link 2",src:t(61838).A,width:"2076",height:"1310"})),(0,i.yg)("li",{parentName:"ul"},"The next step after linking is to configure the DSK Edge Agent.\n",(0,i.yg)("img",{alt:"AgentCompanion - Link 3",src:t(35479).A,width:"2076",height:"1310"})),(0,i.yg)("li",{parentName:"ul"},"Currently we support two different ways to configure the Agent, whereby using the ",(0,i.yg)("a",{parentName:"li",href:"/2.0.0/setup/agent_configuration"},(0,i.yg)("strong",{parentName:"a"},"Dataspace Admin Agent Configuration"))," is the preferred option.")))}w.isMDXComponent=!0;const A={title:"Tributech Agent Companion",sidebar_position:4},C=void 0,v={unversionedId:"setup/agent_companion",id:"version-2.0.0/setup/agent_companion",title:"Tributech Agent Companion",description:"The Tributech Agent Companion is an application for the management of the Tributech Agent Edge & OEM.",source:"@site/versioned_docs/version-2.0.0/setup/agent_companion.mdx",sourceDirName:"setup",slug:"/setup/agent_companion",permalink:"/2.0.0/setup/agent_companion",draft:!1,editUrl:"https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/versioned_docs/version-2.0.0/setup/agent_companion.mdx",tags:[],version:"2.0.0",sidebarPosition:4,frontMatter:{title:"Tributech Agent Companion",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Source Setup",permalink:"/2.0.0/setup/agent/setup/azure/source-setup"},next:{title:"Tributech Agent Configuration",permalink:"/2.0.0/setup/agent_configuration"}},D={},N=[{value:"Download &amp; Run",id:"download--run",level:2},{value:"Windows",id:"windows",level:3},{value:"macOS",id:"macos",level:3},{value:"Login to Tributech Node",id:"agent-companion-login",level:2},{value:"Connect to Agent Edge",id:"agent-companion-connect",level:2},{value:"Link Agent",id:"link-agent",level:2}],T={toc:N},k="wrapper";function O(e){let{components:n,...a}=e;return(0,i.yg)(k,(0,o.A)({},T,a,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"The Tributech Agent Companion is an application for the management of the Tributech Agent Edge & OEM.\nIt allows to link them to a Tributech Node and configure them based on digital twins.\nIt offers a twin builder UI (which can also be used stand-alone).\nIt communicates with the APIs of the Tributech Node and Tributech Agent Edge / OEM and must be connected accordingly."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"AgentCompanion",src:t(57878).A,width:"2546",height:"1385"})),(0,i.yg)("h2",{id:"download--run"},"Download & Run"),(0,i.yg)("h3",{id:"windows"},"Windows"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)(g,{mdxType:"AgentCompanionDownloadWin"})),(0,i.yg)("li",{parentName:"ul"},"Identify ",(0,i.yg)("inlineCode",{parentName:"li"},"Tributech Agent Companion X.X.X")," executable and double-click ",(0,i.yg)("img",{alt:"AgentCompanion - Download&amp;Installation 1",src:t(60922).A,width:"1912",height:"715"}))),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"Depending on your system configuration you might see a security warning from e.g. Microsoft Defender on the first run of the app executable.\nThis is since our app is currently not signed. We will improve this in one of the future releases. In the meanwhile we recommend that you check the file with your antivirus software and ignore the warning if everything looks good.\n",(0,i.yg)("img",{alt:"AgentCompanion - Download&amp;Installation 2",src:t(91089).A,width:"798",height:"747"}),"\nIgnore Microsoft Defender warning and run application anyway.\n",(0,i.yg)("img",{alt:"AgentCompanion - Download&amp;Installation 3",src:t(93224).A,width:"798",height:"747"}))),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The Tributech Agent Companion should now be started.\n",(0,i.yg)("img",{alt:"AgentCompanion - Download&amp;Installation 4",src:t(68391).A,width:"1883",height:"1103"}))),(0,i.yg)("h3",{id:"macos"},"macOS"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)(p,{mdxType:"AgentCompanionDownloadMac"}))),(0,i.yg)("h2",{id:"agent-companion-login"},"Login to Tributech Node"),(0,i.yg)(m,{mdxType:"AgentCompanionLogin"}),(0,i.yg)("h2",{id:"agent-companion-connect"},"Connect to Agent Edge"),(0,i.yg)(y,{mdxType:"AgentCompanionConnect"}),(0,i.yg)("h2",{id:"link-agent"},"Link Agent"),(0,i.yg)(w,{mdxType:"AgentCompanionLink"}))}O.isMDXComponent=!0},15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>u});var o=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function g(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=g(e,["components","mdxType","originalType","parentName"]),l=s(t),m=i,u=l["".concat(c,".").concat(m)]||l[m]||d[m]||a;return t?o.createElement(u,r(r({ref:n},p),{},{components:t})):o.createElement(u,r({ref:n},p))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=m;var g={};for(var c in n)hasOwnProperty.call(n,c)&&(g[c]=n[c]);g.originalType=e,g[l]="string"==typeof e?e:i,r[1]=g;for(var s=2;s<a;s++)r[s]=t[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},68811:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/agent-companion-connect-1-e70997740f3f046ed20641d78ff8506c.png"},81168:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/agent-companion-connect-2-33934b0c5e6a604535005585033d9104.png"},64261:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/agent-companion-link-1-fba89f8ecf427b4573951e2bb4d037fb.png"},61838:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/agent-companion-link-2-8dd63bb0111cebee25790d828dd12f30.png"},35479:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/agent-companion-link-3-c4707cfb78c6989ec951272d57c2c797.png"},90954:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/agent-companion-login-1-7414606146c3bb95cb15d7ac2e131375.png"},5185:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/agent-companion-login-2-15f7c62ef39903a88e12ff9445f25848.png"},84056:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/agent-companion-login-3-8448a6b45fbfe0829287b1f7f55df5a7.png"},60922:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/agent-companion-install-1-8c5b30971703af573ee3c5ebc3f0e718.png"},91089:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/agent-companion-install-2-d1acb5e104acb1d33a5a484074c5725d.png"},93224:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/agent-companion-install-3-7cbf12af9ff138bee2ecd3144d4be3ce.png"},68391:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/agent-companion-install-4-2026712738cba37c0b37268de0752671.png"},57878:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/agent-companion-cb78f787808ff5aa516e5741989c711d.png"}}]);