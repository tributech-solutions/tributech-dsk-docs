"use strict";(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[6819],{34254:function(t,e,n){n.r(e),n.d(e,{assets:function(){return l},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return d}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=["components"],u={title:"Manual Audit",sidebar_position:3},c=void 0,s={unversionedId:"verify_data/manual_audit",id:"verify_data/manual_audit",title:"Manual Audit",description:'For streams that continuously produce data it would be quite hard to manually re-trigger validation for all proofs, so for this use-case we can utilize the "Manual Audit" section. You can navigate to it by using the tab control in the Data audit section.',source:"@site/docs/verify_data/manual_audit.md",sourceDirName:"verify_data",slug:"/verify_data/manual_audit",permalink:"/docs/next/verify_data/manual_audit",draft:!1,editUrl:"https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/docs/verify_data/manual_audit.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Manual Audit",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Audit Results",permalink:"/docs/next/verify_data/audit_results"},next:{title:"API",permalink:"/docs/next/verify_data/api"}},l={},d=[],f={toc:d};function p(t){var e=t.components,u=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,a.Z)({},f,u,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'For streams that continuously produce data it would be quite hard to manually re-trigger validation for all proofs, so for this use-case we can utilize the "Manual Audit" section. You can navigate to it by using the tab control in the Data audit section.\n',(0,i.kt)("img",{alt:"Manual Audit",src:n(356).Z,width:"2558",height:"682"})),(0,i.kt)("p",null,'In this section you can choose a timeframe that should be verified, by default the date with the first available data is inserted.\nAfter choosing your desired timeframe you can press the "Start Audit" button to execute the job.'),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Depending on your configuration and selected timeframe this process can take a long time, which is mainly affected by the number of proofs and the timeframe that should be evaluated. If processing takes to long, try to select a smaller time range and work your way forwards."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Manual Audit",src:n(82946).Z,width:"1993",height:"409"})))}p.isMDXComponent=!0},3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return p}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),s=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},l=function(t){var e=s(t.components);return a.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},f=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,l=u(t,["components","mdxType","originalType","parentName"]),f=s(n),p=r,m=f["".concat(c,".").concat(p)]||f[p]||d[p]||i;return n?a.createElement(m,o(o({ref:e},l),{},{components:n})):a.createElement(m,o({ref:e},l))}));function p(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=f;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u.mdxType="string"==typeof t?t:r,o[1]=u;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},82946:function(t,e,n){e.Z=n.p+"assets/images/data_audit_4-0298ab0a7d09d0661ac8d38c0bf1e2b6.png"},356:function(t,e,n){e.Z=n.p+"assets/images/data_audit_6-227afc94388f1b2f1e0f417256563169.png"}}]);