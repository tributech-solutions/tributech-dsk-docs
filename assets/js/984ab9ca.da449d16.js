"use strict";(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[7814],{53142:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(58168),r=(n(96540),n(15680));const i={title:"Webhooks Integration",sidebar_position:4},o=void 0,l={unversionedId:"tributech_node/Webhook_integration",id:"version-4.0.0/tributech_node/Webhook_integration",title:"Webhooks Integration",description:"General",source:"@site/versioned_docs/version-4.0.0/tributech_node/Webhook_integration.md",sourceDirName:"tributech_node",slug:"/tributech_node/Webhook_integration",permalink:"/tributech_node/Webhook_integration",draft:!1,editUrl:"https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/versioned_docs/version-4.0.0/tributech_node/Webhook_integration.md",tags:[],version:"4.0.0",sidebarPosition:4,frontMatter:{title:"Webhooks Integration",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Integration",permalink:"/tributech_node/api_category/API_integration"},next:{title:"Overview",permalink:"/tributech_agent/overview"}},s={},d=[{value:"General",id:"general",level:2},{value:"Webhook Subscription Management",id:"webhook-subscription-management",level:2},{value:"Create",id:"create",level:3},{value:"Edit",id:"edit",level:3},{value:"Deactivate",id:"deactivate",level:3},{value:"Deletion",id:"deletion",level:3},{value:"Webhook Events",id:"webhook-events",level:2},{value:"Headers",id:"headers",level:3},{value:"Event Types",id:"event-types",level:3},{value:"Device Events",id:"device-events",level:4},{value:"Proof Events",id:"proof-events",level:4},{value:"Stream Events",id:"stream-events",level:4},{value:"Twin Events",id:"twin-events",level:4},{value:"Value Events",id:"value-events",level:4},{value:"Error Handling",id:"error-handling",level:3},{value:"Verification",id:"verification",level:2},{value:"Openssl",id:"openssl",level:3},{value:"C# Code",id:"c-code",level:3}],g={toc:d},h="wrapper";function p(e){let{components:t,...i}=e;return(0,r.yg)(h,(0,a.A)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"general"},"General"),(0,r.yg)("p",null,"We provide the possibility within our Tributech Node for external services to receive a wide variety of notifications about internal events via ",(0,r.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Webhook"},"Webhooks"),". A webhook is an HTTP-based callback function that enables lightweight, event-driven communication between a Tributech Node and a client. The only requirement for a client is to provide a HTTP POST endpoint that returns Status code 200 if an event was successfully received (see ",(0,r.yg)("a",{parentName:"p",href:"#error-handling"},"Error Handling")," for more details).\nIn the following section, we will demonstrate how to setup a Tributech Node to send events to an client and how a user can ",(0,r.yg)("a",{parentName:"p",href:"#verification"},"verify")," that the received event data has not been tampered with. "),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Tributech Node - Webhooks Focus",src:n(13985).A,width:"739",height:"341"})," "),(0,r.yg)("h2",{id:"webhook-subscription-management"},"Webhook Subscription Management"),(0,r.yg)("p",null,"In order to receive information about a Tributech Node ",(0,r.yg)("a",{parentName:"p",href:"#event-types"},"Event")," we need to create a webhook subscription.\nA webhook subscription defines the clients HTTP POST endpoint, a selection of ",(0,r.yg)("a",{parentName:"p",href:"#event-types"},"Events")," and a secret to sign the event data.\nIn this section we will show how to create and manage a webhook subscription for a specific event in the Tributech Node ",(0,r.yg)("inlineCode",{parentName:"p"},"Webhook")," Section."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Tributech Node - Webhooks",src:n(4471).A,width:"1262",height:"529"})," "),(0,r.yg)("h3",{id:"create"},"Create"),(0,r.yg)("p",null,"We can create a Subscription by simple clicking the ",(0,r.yg)("inlineCode",{parentName:"p"},"ADD SUBSCRIPTION")," button on the right side of the Tributech Node ",(0,r.yg)("inlineCode",{parentName:"p"},"Webhook")," Section."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Tributech Node - Webhooks Add Subscription",src:n(20620).A,width:"1547",height:"527"})," "),(0,r.yg)("p",null,"In the following Dialog Box we add our clients HTTP POST endpoint (e.g. ",(0,r.yg)("a",{parentName:"p",href:"https://webhook.site/"},"Webhook.site"),"), choose the desired ",(0,r.yg)("a",{parentName:"p",href:"#event-types"},"Event Types")," and add a secret for the event information ",(0,r.yg)("a",{parentName:"p",href:"#verification"},"verification"),". Its important to note that the secret can later only be updated and not retrieved.\nIn this example we subscribe to the Events ",(0,r.yg)("inlineCode",{parentName:"p"},"SourceCommandRequestEvent"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"SourceCommandResponseEvent")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"SourceCommandStateUpdateEvent")," that occurs when interacting with Source commands that we can trigger within our ",(0,r.yg)("a",{parentName:"p",href:"/tributech_agent/quickstart"},"Quickstart Example")," (more information about events can be found ",(0,r.yg)("a",{parentName:"p",href:"#event-types"},"Events"),")."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Tributech Node - Webhooks Create Wizard",src:n(38122).A,width:"855",height:"465"})," "),(0,r.yg)("h3",{id:"edit"},"Edit"),(0,r.yg)("p",null,"If we want to update the settings for a Webhook subscription, we can do that via the three dots in the actions column. "),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Tributech Node - Webhooks Overview Edit",src:n(31514).A,width:"1270",height:"638"})," "),(0,r.yg)("p",null,"This way the events, webhook url or secret can be adjusted for the current Subscription."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Tributech Node - Webhooks Edit",src:n(61472).A,width:"802",height:"493"})),(0,r.yg)("h3",{id:"deactivate"},"Deactivate"),(0,r.yg)("p",null,"We can disable the previously created Webhook by clicking the three dots in the action colum and choosing ",(0,r.yg)("inlineCode",{parentName:"p"},"Toggle Active")," button to pause the notifications."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Tributech Node - Webhooks Deactivate",src:n(77653).A,width:"1270",height:"638"})," "),(0,r.yg)("h3",{id:"deletion"},"Deletion"),(0,r.yg)("p",null,"If we want to delete a Webhook subscription we can do that via the three dots in the actions column. "),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Tributech Node - Webhooks Overview Edit",src:n(53063).A,width:"1270",height:"638"})," "),(0,r.yg)("h2",{id:"webhook-events"},"Webhook Events"),(0,r.yg)("p",null,"A Webhook Event is a ",(0,r.yg)("inlineCode",{parentName:"p"},"json")," object that is generated by a Tributech Node containing Event specific information when a certain condition is met.\nThis ",(0,r.yg)("inlineCode",{parentName:"p"},"json object")," is send within a HTTP object to a Webhook Subscription previously defined by a User. In this section we will go into detail which events are supported and what information can be retrieved from it."),(0,r.yg)("h3",{id:"headers"},"Headers"),(0,r.yg)("p",null,"Webhooks send by the Tributech Node are HTTP objects that contain default HTTP information and some Tributech specific attributes, which we will discuss in the following section. The following Headers are included in the HTTP response and contain Tributech specific information: "),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Attribute"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Sample Value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"x-tributech-correlationid"),(0,r.yg)("td",{parentName:"tr",align:null},"A trace id to track the data through our node"),(0,r.yg)("td",{parentName:"tr",align:null},"00000000-0000-0000-0000-000000000000")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"x-tributech-eventid"),(0,r.yg)("td",{parentName:"tr",align:null},"unique identifier through the node (guid) to identify the event"),(0,r.yg)("td",{parentName:"tr",align:null},"49acaa7b-fa72-4863-ab4b-7933fedeb59a")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"x-tributech-event"),(0,r.yg)("td",{parentName:"tr",align:null},"event name to identify the type of event"),(0,r.yg)("td",{parentName:"tr",align:null},"ValueReceivedEvent")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"x-tributech-signaturetimestamp"),(0,r.yg)("td",{parentName:"tr",align:null},"creation timestamp utc of the signature (timestamp format: ",(0,r.yg)("a",{parentName:"td",href:"https://de.wikipedia.org/wiki/ISO_8601"},"ISO 8601"),")"),(0,r.yg)("td",{parentName:"tr",align:null},"06/16/2023 05:08:46 +00:00")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"x-tributech-signature"),(0,r.yg)("td",{parentName:"tr",align:null},"signature of the webhook event"),(0,r.yg)("td",{parentName:"tr",align:null},"sha256=0316443119ED851EE18AA6176E8281E6A28",(0,r.yg)("br",null),"D02A52EAF5DC85D45A6149173F412")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"x-tributech-timestamp"),(0,r.yg)("td",{parentName:"tr",align:null},"event timestamp utc (timestamp format: ",(0,r.yg)("a",{parentName:"td",href:"https://de.wikipedia.org/wiki/ISO_8601"},"ISO 8601"),")"),(0,r.yg)("td",{parentName:"tr",align:null},"06/16/2023 05:08:43 +00:00")))),(0,r.yg)("h3",{id:"event-types"},"Event Types"),(0,r.yg)("p",null,"When creating a Webhook subscription, we can choose what type of events we want to receive. We will describe in the following section the Events based on type of information they are providing, e.g. Device, Proof, Stream,.. . "),(0,r.yg)("p",null,"Its important to note that each of the Event Types contain a predefined property ",(0,r.yg)("inlineCode",{parentName:"p"},"EventQoS")," which will be contained in each\nwebhook event indicating the frequency of the events. This property is used by the redelivery mechanism to know how often a event should be handled in case\nthe HTTP POST client response with an error code (more details in ",(0,r.yg)("a",{parentName:"p",href:"#error-handling"},"Error Handling"),"). "),(0,r.yg)("h4",{id:"device-events"},"Device Events"),(0,r.yg)("p",null,"Device Events are triggered by interactions with devices and device status changes,\nthis includes enrollments, configuration and source commands."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DeviceConnectionEvent"),(0,r.yg)("td",{parentName:"tr",align:null},"Occurs when a Device has changed its connection status")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DeviceStateEvent"),(0,r.yg)("td",{parentName:"tr",align:null},"Occurs when a Device has changed its own state")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"GetConfigurationRequestEvent"),(0,r.yg)("td",{parentName:"tr",align:null},"Occurs when the Get Configuration Command has been requested")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"GetConfigurationResponseEvent"),(0,r.yg)("td",{parentName:"tr",align:null},"Occurs when the Get Configuration Command has finished and the response was received")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"IncomingEnrollmentRequestEvent"),(0,r.yg)("td",{parentName:"tr",align:null},"Occurs when an Enrollment request was received")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SetConfigurationRequestEvent"),(0,r.yg)("td",{parentName:"tr",align:null},"Occurs when the Set Configuration Command has been requested")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SetConfigurationResponseEvent"),(0,r.yg)("td",{parentName:"tr",align:null},"Occurs when the Set Configuration Command has finished and the response was received")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SourceCommandRequestEvent"),(0,r.yg)("td",{parentName:"tr",align:null},"Occurs when a Source Command is invoked and sent to the Agent")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SourceCommandResponseEvent"),(0,r.yg)("td",{parentName:"tr",align:null},"Occurs when the Source Command has finished and the response was received")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SourceCommandStateUpdateEvent"),(0,r.yg)("td",{parentName:"tr",align:null},"Occurs when a Agent or Agent Source has sent a execution state of the current Command")))),(0,r.yg)("h4",{id:"proof-events"},"Proof Events"),(0,r.yg)("p",null,"Proof Events describe events related to proof handling and status, e.g. received, valid, stored."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ProofConfirmedEvent"),(0,r.yg)("td",{parentName:"tr",align:null},"Occurs when the Proof is successfully placed on the BlockChain")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ProofReceivedEvent"),(0,r.yg)("td",{parentName:"tr",align:null},"Occurs when a Proof is received from a Device")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ProofStoredEvent"),(0,r.yg)("td",{parentName:"tr",align:null},"Occurs when the Proof is stored into the Persistence Layer and passed into the Block Chain")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ProofValidatedEvent"),(0,r.yg)("td",{parentName:"tr",align:null},"Occurs when the Proof is validated")))),(0,r.yg)("h4",{id:"stream-events"},"Stream Events"),(0,r.yg)("p",null,"Stream Events provide information when stream management operations are executed."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"StreamDeletedEvent"),(0,r.yg)("td",{parentName:"tr",align:null},"Occurs when a Agent or Stream is deleted and will be removed from the Node")))),(0,r.yg)("h4",{id:"twin-events"},"Twin Events"),(0,r.yg)("p",null,"Twin Events provide information when Digital Twin management operations are executed."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TwinInstanceDeletedEvent"),(0,r.yg)("td",{parentName:"tr",align:null},"Occurs when a Digital Twin Instance was removed from the Node")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TwinModelDeletedEvent"),(0,r.yg)("td",{parentName:"tr",align:null},"Occurs when a Digital Twin Model was removed from the Node")))),(0,r.yg)("h4",{id:"value-events"},"Value Events"),(0,r.yg)("p",null,"Value Events are triggered when the Tributech Node interacts with Stream Values."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ValueReceivedEvent"),(0,r.yg)("td",{parentName:"tr",align:null},"Occurs when a Value is received from an Device")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ValueStoredEvent"),(0,r.yg)("td",{parentName:"tr",align:null},"Occurs when a Value is stored into the Persistence Layer")))),(0,r.yg)("h3",{id:"error-handling"},"Error Handling"),(0,r.yg)("p",null,"The error handling of webhook events is based on the status code of the HTTP POST responses to the clients HTTP POST\nendpoint. Commonly errors occur in the following situations:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Network is not available"),(0,r.yg)("li",{parentName:"ul"},"Endpoint described within the subscription is not reachable"),(0,r.yg)("li",{parentName:"ul"},"Endpoint returns something else then a HTTP 200 (OK) ")),(0,r.yg)("p",null,"In the case of an error during Webhook Event delivery we implemented an back-off redelivery mechanism that calculates retries based on the formula  ",(0,r.yg)("inlineCode",{parentName:"p"},"(Attempt Count + 0,7) ^ 4 + Minimum Retry Interval"),". The ",(0,r.yg)("inlineCode",{parentName:"p"},"Attempt Count")," in this formula is dependent on the ",(0,r.yg)("inlineCode",{parentName:"p"},"EventQoS")," property value (contained in ever webhook event) which is predefined and cannot be changed.\nA value of ",(0,r.yg)("inlineCode",{parentName:"p"},"1")," indicates that the event is a high frequency event (like data received) and a ",(0,r.yg)("inlineCode",{parentName:"p"},"2")," marks standard frequency events."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"High frequency events will not be retried "),(0,r.yg)("li",{parentName:"ul"},"Standard Frequency events have ",(0,r.yg)("strong",{parentName:"li"},"10 retries")," before they are discarded.")),(0,r.yg)("h2",{id:"verification"},"Verification"),(0,r.yg)("p",null,"In order to verify that the received Webhook Event has not been tempered with can verify the event using either ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/openssl/openssl"},"OpenSSL")," or ",(0,r.yg)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/csharp/"},"Microsoft C#"),". We will show in this section how to use both approaches with examples based on the previously created webhook. We will use an arbitrary  secret ",(0,r.yg)("inlineCode",{parentName:"p"},"foobar")," and choose as event ",(0,r.yg)("inlineCode",{parentName:"p"},"ProofStoredEvent")," (see ",(0,r.yg)("a",{parentName:"p",href:"#event-types"},"Event Types"),") and assume that a Tributech Source is already successfully sending data to a Tributech Node (see ",(0,r.yg)("a",{parentName:"p",href:"/tributech_agent/quickstart"},"QuickStarter Guide"),"). "),(0,r.yg)("p",null,"In our examples we use the free Webhook client ",(0,r.yg)("a",{parentName:"p",href:"https://webhook.site/"},"Webhook.site")," to provide the HTTP POST endpoint for the subscription. We will use the website to inspect the received events ",(0,r.yg)("inlineCode",{parentName:"p"},"json")," payload and HTTP Header attributes. The URL ",(0,r.yg)("inlineCode",{parentName:"p"},"https://webhook.site/#!/view/c445d2cb-bbcb-4db6-b71c-04ca220eea6d")," in our samples needs to be adjusted to your HTTP POST endpoint. Note that ",(0,r.yg)("a",{parentName:"p",href:"https://webhook.site/"},"Webhook.site")," limits the amount of events you can receive and high frequency events will reach those limits quickly."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Tributech Node - Webhooks Overview",src:n(3864).A,width:"1043",height:"466"})," "),(0,r.yg)("p",null,"Make sure that the Webhook Subscription is configured to listen to ",(0,r.yg)("inlineCode",{parentName:"p"},"ProofStoredEvent")," events. Shortly after starting the Source and activating the Webhook Subscription we should receive our first events from an active Stream:"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Tributech Node - Webhooks Received Event",src:n(22193).A,width:"1717",height:"786"})," "),(0,r.yg)("p",null,"On ",(0,r.yg)("a",{parentName:"p",href:"https://webhook.site/"},"Webhook.site")," we see the Tributech Headers with the following headers (excerpt) on the right side:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Headers"),(0,r.yg)("th",{parentName:"tr",align:null}))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"x-tributech-webhook-version"),(0,r.yg)("td",{parentName:"tr",align:null},"2.0.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"x-tributech-event"),(0,r.yg)("td",{parentName:"tr",align:null},"ProofStoredEvent")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"x-tributech-signaturetimestamp"),(0,r.yg)("td",{parentName:"tr",align:null},"2024-05-28T06:31:14.851318+00:00")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"x-tributech-signature"),(0,r.yg)("td",{parentName:"tr",align:null},"sha256=065CF4E993CF1DF7399B2DF64A147567552EB4BB7DD91ACC73840D5B8411B940")))),(0,r.yg)("p",null,"The Headers contains the Tributech specific Attribute ",(0,r.yg)("inlineCode",{parentName:"p"},"x-tributech-signature")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"x-tributech-signaturetimestamp")," which we will use in the next section to verify that the Payload was not tempered with. The payload itself contains the ",(0,r.yg)("inlineCode",{parentName:"p"},"EventQoS")," flag for Standard Frequency (see ",(0,r.yg)("a",{parentName:"p",href:"#error-handling"},"Error Handling"),") and some information about the Agent, Stream and the Proof. Important to note is that in this example the Root hash of the MerkleTree and the Signature of the RootHash are ",(0,r.yg)("inlineCode",{parentName:"p"},"BASE64")," encoded strings in byte array form."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "TransactionId":null,\n  "StreamId":"15caf997-2f2f-43c2-b5e9-6a3ac00b1edb",\n  "MerkleTreeDepth":5,\n  "LastTimestamp":"2024-05-28T06:31:14.851318+00:00",\n  "RootHash":[199,51,64,165,193,234,157,113,156,124,186,212,182,137,146,243,6,114,177,215,234,61,38,199,138,227,179,195,27,237,88,198],\n  "Signature":[61,212,2,199,55,23,184,147,251,18,36,229,59,39,152,32,196,18,189,170,34,162,147,255,69,59,56,31,63,221,41,226,20,128,238,106,148,148,192,217,48,16,67,197,217,118,56,232,167,63,229,27,247,105,208,79,185,193,254,26,17,200,186,154,192,117,153,60,81,232,196,251,28,128,151,44,32,2,41,188,252,224,241,46,172,77,247,81,61,247,32,220,166,141,107,150,149,230,206,5,114,182,111,202,245,217,172,90,178,75,143,113,43,225,34,4,127,85,167,116,150,114,35,47,124,66,196,194,58,114,12,73,253,13,68,181,11,151,152,212,171,189,146,5,187,71,111,212,88,228,246,246,14,33,88,114,151,17,71,23,231,152,56,219,108,220,60,226,241,53,77,104,153,98,200,127,77,153,160,138,245,76,204,171,68,52,236,169,8,238,46,18,58,231,196,104,77,34,190,14,85,41,220,39,180,117,22,77,18,20,229,55,25,170,22,151,157,254,9,199,52,205,71,51,67,135,229,143,248,27,45,19,141,72,72,43,215,87,85,243,93,186,53,202,186,96,120,202,188,215,125,80,115,120,143,97],\n  "AgentId":"a324b439-c03b-4e0f-a63e-8067c4423b7b",\n  "EventQoS":1\n}\n')),(0,r.yg)("h3",{id:"openssl"},"Openssl"),(0,r.yg)("p",null,"With the following ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/openssl/openssl"},"OpenSSL")," command we verify the previous example values of the ",(0,r.yg)("inlineCode",{parentName:"p"},"x-tributech-signature")," ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"HMAC SHA256"))," signature on a unix system:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"echo -n '<event-json><signature-timestamp>' | openssl dgst -sha256 -hmac \"<webhook-secret>\"\n")),(0,r.yg)("p",null,"In order to work we need to replace the placeholders with concrete values"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"event-json")," - The received raw json content from the webhook event"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"signature-timestamp")," - The Header attribute ",(0,r.yg)("inlineCode",{parentName:"li"},"x-tributech-signaturetimestamp")," value"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"webhook-secret")," - the secret used to create the webhook in the Tributech Node UI")),(0,r.yg)("p",null,"Explicit Example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'echo -n \'{"TransactionId":null,"StreamId":"15caf997-2f2f-43c2-b5e9-6a3ac00b1edb","MerkleTreeDepth":5,"LastTimestamp":"2024-05-28T06:31:14.851318+00:00","RootHash":[199,51,64,165,193,234,157,113,156,124,186,212,182,137,146,243,6,114,177,215,234,61,38,199,138,227,179,195,27,237,88,198],"Signature":[61,212,2,199,55,23,184,147,251,18,36,229,59,39,152,32,196,18,189,170,34,162,147,255,69,59,56,31,63,221,41,226,20,128,238,106,148,148,192,217,48,16,67,197,217,118,56,232,167,63,229,27,247,105,208,79,185,193,254,26,17,200,186,154,192,117,153,60,81,232,196,251,28,128,151,44,32,2,41,188,252,224,241,46,172,77,247,81,61,247,32,220,166,141,107,150,149,230,206,5,114,182,111,202,245,217,172,90,178,75,143,113,43,225,34,4,127,85,167,116,150,114,35,47,124,66,196,194,58,114,12,73,253,13,68,181,11,151,152,212,171,189,146,5,187,71,111,212,88,228,246,246,14,33,88,114,151,17,71,23,231,152,56,219,108,220,60,226,241,53,77,104,153,98,200,127,77,153,160,138,245,76,204,171,68,52,236,169,8,238,46,18,58,231,196,104,77,34,190,14,85,41,220,39,180,117,22,77,18,20,229,55,25,170,22,151,157,254,9,199,52,205,71,51,67,135,229,143,248,27,45,19,141,72,72,43,215,87,85,243,93,186,53,202,186,96,120,202,188,215,125,80,115,120,143,97],"AgentId":"a324b439-c03b-4e0f-a63e-8067c4423b7b","EventQoS":1}2024-05-28T06:31:37.3121930+00:00\' | openssl dgst -sha256 -hmac "foobar"\n')),(0,r.yg)("p",null,"We can now compare the output ",(0,r.yg)("inlineCode",{parentName:"p"},"SHA2-256(stdin)= 065cf4e993cf1df7399b2df64a147567552eb4bb7dd91acc73840d5b8411b940")," of the command with the value of the Webhook Header attribute ",(0,r.yg)("inlineCode",{parentName:"p"},"x-tributech-signature")," which does have matching hexadecimal values. "),(0,r.yg)("h3",{id:"c-code"},"C# Code"),(0,r.yg)("p",null,"In the following section we use the previous example values to verify the ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"HMAC SHA256"))," signatures by using ",(0,r.yg)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/csharp/"},"MS C#"),"\nwhich can be pasted into ",(0,r.yg)("a",{parentName:"p",href:"https://dotnetfiddle.net/"},"Fiddle")," or Locale Development Environment:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Linq;\nusing System.Security.Cryptography;\nusing System.Globalization;\n                    \npublic class Program\n{\n    public static void Main()\n    {\n        Console.WriteLine(HashHMAC("foobar",@"{""TransactionId"":null,""StreamId"":""15caf997-2f2f-43c2-b5e9-6a3ac00b1edb"",""MerkleTreeDepth"":5,""LastTimestamp"":""2024-05-28T06:31:14.851318+00:00"",""RootHash"":[199,51,64,165,193,234,157,113,156,124,186,212,182,137,146,243,6,114,177,215,234,61,38,199,138,227,179,195,27,237,88,198],""Signature"":[61,212,2,199,55,23,184,147,251,18,36,229,59,39,152,32,196,18,189,170,34,162,147,255,69,59,56,31,63,221,41,226,20,128,238,106,148,148,192,217,48,16,67,197,217,118,56,232,167,63,229,27,247,105,208,79,185,193,254,26,17,200,186,154,192,117,153,60,81,232,196,251,28,128,151,44,32,2,41,188,252,224,241,46,172,77,247,81,61,247,32,220,166,141,107,150,149,230,206,5,114,182,111,202,245,217,172,90,178,75,143,113,43,225,34,4,127,85,167,116,150,114,35,47,124,66,196,194,58,114,12,73,253,13,68,181,11,151,152,212,171,189,146,5,187,71,111,212,88,228,246,246,14,33,88,114,151,17,71,23,231,152,56,219,108,220,60,226,241,53,77,104,153,98,200,127,77,153,160,138,245,76,204,171,68,52,236,169,8,238,46,18,58,231,196,104,77,34,190,14,85,41,220,39,180,117,22,77,18,20,229,55,25,170,22,151,157,254,9,199,52,205,71,51,67,135,229,143,248,27,45,19,141,72,72,43,215,87,85,243,93,186,53,202,186,96,120,202,188,215,125,80,115,120,143,97],""AgentId"":""a324b439-c03b-4e0f-a63e-8067c4423b7b"",""EventQoS"":1}", DateTimeOffset.Parse("2024-05-28T06:31:37.3121930+00:00") ));\n    }\n    \n    public static string HashHMAC(string secret, string webHookPayloadJson, DateTimeOffset signatureTimestamp) {\n        var encoding = new System.Text.ASCIIEncoding();\n        var messageHash = new HMACSHA256(encoding.GetBytes(secret));\n        var payload = encoding.GetBytes(webHookPayloadJson)\n                              .Concat(encoding.GetBytes(signatureTimestamp.ToString(CultureInfo.InvariantCulture)))\n                              .ToArray();\n        var signature = messageHash.ComputeHash(payload);\n        return BitConverter.ToString(signature).Replace("-", "");\n    }\n}\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"secret")," - The webhook secret defined during the creation"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"webHookPayloadJson")," - The whole received Json object"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"signature-timestamp")," - The Header attribute ",(0,r.yg)("inlineCode",{parentName:"li"},"x-tributech-signaturetimestamp")," value")),(0,r.yg)("p",null,"This code example can be used to output the exact same signature which is present in the header (without the ",(0,r.yg)("inlineCode",{parentName:"p"},"sha256=")," prefix, i.e. ",(0,r.yg)("inlineCode",{parentName:"p"},"D633514A1CE9688E816F33B2A6A48E08ED6FE621246483B0F219BB3B873C1B5E"),")."))}p.isMDXComponent=!0},15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>u});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),h=d(n),c=r,u=h["".concat(s,".").concat(c)]||h[c]||p[c]||i;return n?a.createElement(u,o(o({ref:t},g),{},{components:n})):a.createElement(u,o({ref:t},g))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},13985:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/DemeterArchitectureOverviewWebhookFocus-ccf949918089ef81a78b90214eaf049f.png"},3864:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/Webhook.site-fbcca8d9b59a2d4149fae17a699b1490.png"},20620:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/Webhook_AddSubscription-79b7cbaa5d3b18b724033753c25c0d31.png"},38122:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/Webhook_CreationWizard-cc4ca9f5b6e4fc8cee02f2d40db564b9.png"},61472:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/Webhook_Edit-4adf420684a949232ecc3c1120755bdb.png"},77653:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/Webhook_Overview_ActivateToggle-c53ce1e3b48607c59fdc98211ebd1dbd.png"},53063:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/Webhook_Overview_Delete-c3a46fe91214ba5520abdd49f2d3d926.png"},31514:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/Webhook_Overview_Edit-f7bd9469028de6d25e09a9311ec7a094.png"},4471:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/Webhook_Overview_Empty-015d1166401119869261310e93a1a03d.png"},22193:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/Webhook_ProofStoredEvent-f54dad54148eaa300f25ce092847e173.png"}}]);