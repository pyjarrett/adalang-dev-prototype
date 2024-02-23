"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[7451],{57821:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>u,frontMatter:()=>h,metadata:()=>m,toc:()=>x});var n=i(74848),s=i(28453),r=i(13842),a=i(91435),o=i(21432),l=i(79162),c=i(34421);const h={sidebar_position:176},d="E.5 Partition Communication Subsystem",m={id:"arm/AA-E/AA-E.5",title:"E.5 Partition Communication Subsystem",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-E/AA-E.5.mdx",sourceDirName:"arm/AA-E",slug:"/arm/AA-E/AA-E.5",permalink:"/docs/arm/AA-E/AA-E.5",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:176,frontMatter:{sidebar_position:176},sidebar:"referenceManualSidebar",previous:{title:"E.4 Remote Subprogram Calls",permalink:"/docs/arm/AA-E/AA-E.4"},next:{title:"Annex F Information Systems",permalink:"/docs/arm/AA-F/"}},p={},x=[{value:"Static Semantics",id:"static-semantics",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics",level:4},{value:"Implementation Requirements",id:"implementation-requirements",level:4},{value:"Documentation Requirements",id:"documentation-requirements",level:4},{value:"Implementation Permissions",id:"implementation-permissions",level:4},{value:"Implementation Advice",id:"implementation-advice",level:4},{value:"Incompatibilities With Ada 95",id:"incompatibilities-with-ada-95",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4}];function j(e){const t={a:"a",admonition:"admonition",h1:"h1",h4:"h4",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"e5-partition-communication-subsystem",children:"E.5 Partition Communication Subsystem"}),"\n",(0,n.jsx)(t.admonition,{type:"danger",children:(0,n.jsxs)(t.p,{children:["This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,n.jsx)(t.a,{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20",children:"tracking issue"})]})}),"\n","\n","\n",(0,n.jsx)(l.A,{children:"1/2"}),"\n",(0,n.jsx)(c.A,{items:["AI95-00273-01"]}),"\n",(0,n.jsxs)("p",{children:["[The ",(0,n.jsx)("em",{children:"Partition Communication Subsystem"})," (PCS) provides facilities for supporting communication between the active partitions of a distributed program. The package System.RPC is a language-defined interface to the PCS.] ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(l.A,{children:"1.a"}),(0,n.jsx)(r.A,{type:"aarm",aarm:"reason",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)("strong",{}),"The prefix RPC is used rather than RSC because the term remote procedure call and its acronym are more familiar. ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(t.h4,{id:"static-semantics",children:"Static Semantics"}),"\n",(0,n.jsx)(l.A,{children:"2"}),"\n",(0,n.jsxs)("p",{children:["The following language-defined library package exists: ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(l.A,{children:"3/5"}),"\n",(0,n.jsx)(c.A,{items:["AI12-0241-1","AI12-0302-1"]}),"\n",(0,n.jsx)(o.A,{language:"ada",children:(0,n.jsxs)(t.p,{children:["with Ada.Streams; -- see ",(0,n.jsx)("a",{href:"/docs/arm/AA-13/AA-13.13#Subclause_13.13.1",children:"13.13.1"}),"\n","package System.RPC","\n","   with Nonblocking =",">"," False, Global =",">"," in out synchronized is","\n","\n",(0,n.jsx)(l.A,{children:"4"}),"\ntype Partition","_","Id is range 0 .. implementation-defined;","\n","\n",(0,n.jsx)(l.A,{children:"5"}),"\nCommunication","_","Error : exception;","\n","\n",(0,n.jsx)(l.A,{children:"6"}),"\ntype Params","_","Stream","_","Type (","\n","      Initial","_","Size : Ada.Streams.Stream","_","Element","_","Count) is new","\n","      Ada.Streams.Root","_","Stream","_","Type with private;","\n","\n",(0,n.jsx)(l.A,{children:"7"}),"\nprocedure Read(","\n","      Stream : in out Params","_","Stream","_","Type;","\n","      Item : out Ada.Streams.Stream","_","Element","_","Array;","\n","      Last : out Ada.Streams.Stream","_","Element","_","Offset);","\n","\n",(0,n.jsx)(l.A,{children:"8"}),"\nprocedure Write(","\n","      Stream : in out Params","_","Stream","_","Type;","\n","      Item : in Ada.Streams.Stream","_","Element","_","Array);","\n","\n",(0,n.jsx)(l.A,{children:"9"}),"\n-- Synchronous call","\n","   procedure Do","_","RPC(","\n","      Partition  : in Partition","_","Id;","\n","      Params     : access Params","_","Stream","_","Type;","\n","      Result     : access Params","_","Stream","_","Type);","\n","\n",(0,n.jsx)(l.A,{children:"10"}),"\n-- Asynchronous call","\n","   procedure Do","_","APC(","\n","      Partition  : in Partition","_","Id;","\n","      Params     : access Params","_","Stream","_","Type);","\n","\n",(0,n.jsx)(l.A,{children:"11"}),"\n-- The handler for incoming RPCs","\n","   type RPC","_","Receiver is access procedure(","\n","      Params     : access Params","_","Stream","_","Type;","\n","      Result     : access Params","_","Stream","_","Type);","\n","\n",(0,n.jsx)(l.A,{children:"12"}),"\nprocedure Establish","_","RPC","_","Receiver(","\n","      Partition : in Partition","_","Id;","\n","      Receiver  : in RPC","_","Receiver);","\n","\n",(0,n.jsx)(l.A,{children:"13"}),"\nprivate","\n","   ... -- not specified by the language","\n","end System.RPC;","\n"]})}),"\n",(0,n.jsx)(l.A,{children:"14"}),"\n",(0,n.jsxs)("p",{children:["A value of the type Partition","_","Id is used to identify a partition. ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(l.A,{children:"14.a/2"}),(0,n.jsx)(r.A,{type:"aarm",aarm:"implementation-defined",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)("strong",{}),"The range of type System.RPC.Partition","_","Id.",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(l.A,{children:"15"}),"\n",(0,n.jsxs)("p",{children:["An object of the type Params","_","Stream","_","Type is used for identifying the particular remote subprogram that is being called, as well as marshalling and unmarshalling the parameters or result of a remote subprogram call, as part of sending them between partitions.",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(l.A,{children:"16"}),"\n",(0,n.jsxs)("p",{children:["[The Read and Write procedures override the corresponding abstract operations for the type Params","_","Stream","_","Type.]",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(t.h4,{id:"dynamic-semantics",children:"Dynamic Semantics"}),"\n",(0,n.jsx)(l.A,{children:"17"}),"\n",(0,n.jsxs)("p",{children:["The Do","_","RPC and Do","_","APC procedures send a message to the active partition identified by the Partition parameter. ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(l.A,{children:"17.a"}),(0,n.jsx)(r.A,{type:"aarm",aarm:"implementation-note",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)("strong",{}),"It is assumed that the RPC interface is above the message-passing layer of the network protocol stack and is implemented in terms of it. ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(l.A,{children:"18"}),"\n",(0,n.jsxs)("p",{children:["After sending the message, Do","_","RPC blocks the calling task until a reply message comes back from the called partition or some error is detected by the underlying communication system in which case Communication","_","Error is raised at the point of the call to Do","_","RPC. ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(l.A,{children:"18.a"}),(0,n.jsx)(r.A,{type:"aarm",aarm:"reason",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)("strong",{}),"Only one exception is defined in System.RPC, although many sources of errors might exist. This is so because it is not always possible to distinguish among these errors. In particular, it is often impossible to tell the difference between a failing communication link and a failing processing node. Additional information might be associated with a particular Exception","_","Occurrence for a Communication","_","Error. ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(l.A,{children:"19"}),"\n",(0,n.jsxs)("p",{children:["Do","_","APC operates in the same way as Do","_","RPC except that it is allowed to return immediately after sending the message.",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(l.A,{children:"20"}),"\n",(0,n.jsxs)("p",{children:["Upon normal return, the stream designated by the Result parameter of Do","_","RPC contains the reply message.",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(l.A,{children:"21"}),"\n",(0,n.jsxs)("p",{children:["The procedure System.RPC.Establish","_","RPC","_","Receiver is called once, immediately after elaborating the library units of an active partition (that is, right after the ",(0,n.jsx)("em",{children:"elaboration of the partition"}),") if the partition includes an RCI library unit, but prior to invoking the main subprogram, if any. The Partition parameter is the Partition","_","Id of the active partition being elaborated. The Receiver parameter designates an implementation-provided procedure called the ",(0,n.jsx)("em",{children:"RPC-receiver"})," which will handle all RPCs received by the partition from the PCS. Establish","_","RPC","_","Receiver saves a reference to the RPC-receiver; when a message is received at the called partition, the RPC-receiver is called with the Params stream containing the message. When the RPC-receiver returns, the contents of the stream designated by Result is placed in a message and sent back to the calling partition. ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(l.A,{children:"21.a"}),(0,n.jsx)(r.A,{type:"aarm",aarm:"implementation-note",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)("strong",{}),"It is defined by the PCS implementation whether one or more threads of control should be available to process incoming messages and to wait for their completion. ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(l.A,{children:"21.b"}),(0,n.jsx)(r.A,{type:"aarm",aarm:"implementation-note",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)("strong",{}),"At link-time, the linker provides the RPC-receiver and the necessary tables to support it. A call on Establish","_","RPC","_","Receiver is inserted just before the call on the main subprogram. ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(l.A,{children:"21.c"}),(0,n.jsx)(r.A,{type:"aarm",aarm:"reason",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)("strong",{}),"The interface between the PCS (the System.RPC package) and the RPC-receiver is defined to be dynamic in order to allow the elaboration sequence to notify the PCS that all packages have been elaborated and that it is safe to call the receiving stubs. It is not guaranteed that the PCS units will be the last to be elaborated, so some other indication that elaboration is complete is needed. ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(l.A,{children:"22"}),"\n",(0,n.jsxs)("p",{children:["If a call on Do","_","RPC is aborted, a cancellation message is sent to the called partition, to request that the execution of the remotely called subprogram be aborted. ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(l.A,{children:"22.a"}),(0,n.jsx)(r.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)("strong",{children:"To be honest: "}),"The full effects of this message are dependent on the implementation of the PCS. ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(l.A,{children:"23/5"}),"\n",(0,n.jsx)(c.A,{items:["AI12-0241-1"]}),"\n",(0,n.jsxs)("p",{children:[(0,n.jsx)("em",{children:"This paragraph was deleted."}),(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(t.h4,{id:"implementation-requirements",children:"Implementation Requirements"}),"\n",(0,n.jsx)(l.A,{children:"24"}),"\n",(0,n.jsxs)("p",{children:["The implementation of the RPC-receiver shall be reentrant[, thereby allowing concurrent calls on it from the PCS to service concurrent remote subprogram calls into the partition]. ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(l.A,{children:"24.a"}),(0,n.jsx)(r.A,{type:"aarm",aarm:"reason",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)("strong",{}),"There seems no reason to allow the implementation of RPC-receiver to be nonreentrant, even though we don't require that every implementation of the PCS actually perform concurrent calls on the RPC-receiver. ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(l.A,{children:"24.1/1"}),"\n",(0,n.jsx)(c.A,{items:["AI95-00082-01"]}),"\n",(0,n.jsxs)("p",{children:["{",(0,n.jsx)("em",{children:"8652/0087"}),"}"," An implementation shall not restrict the replacement of the body of System.RPC. An implementation shall not restrict children of System.RPC. [The related implementation permissions in the introduction to Annex A do not apply.] ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(l.A,{children:"24.a.1/1"}),(0,n.jsx)(r.A,{type:"aarm",aarm:"reason",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)("strong",{}),"The point of System.RPC is to let the user tailor the communications mechanism without requiring changes to or other cooperation from the compiler. However, implementations can restrict the replacement of language-defined units. This requirement overrides that permission for System.RPC. ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(l.A,{children:"24.2/1"}),"\n",(0,n.jsx)(c.A,{items:["AI95-00082-01"]}),"\n",(0,n.jsxs)("p",{children:["{",(0,n.jsx)("em",{children:"8652/0087"}),"}"," If the implementation of System.RPC is provided by the user, an implementation shall support remote subprogram calls as specified. ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(l.A,{children:"24.b/2"}),(0,n.jsx)(c.A,{items:["AI95-00273-01"]}),(0,n.jsx)(r.A,{type:"aarm",aarm:"discussion",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)("strong",{}),"If the implementation takes advantage of the implementation permission to use a different specification for System.RPC, it still needs to use it for remote subprogram calls, and allow the user to replace the body of System.RPC. It just isn't guaranteed to be portable to do so in Ada 2005 - an advantage which was more theoretical than real anyway. ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(t.h4,{id:"documentation-requirements",children:"Documentation Requirements"}),"\n",(0,n.jsx)(l.A,{children:"25"}),"\n",(0,n.jsxs)("p",{children:["The implementation of the PCS shall document whether the RPC-receiver is invoked from concurrent tasks. If there is an upper limit on the number of such tasks, this limit shall be documented as well, together with the mechanisms to configure it (if this is supported). ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(l.A,{children:"25.a/2"}),(0,n.jsxs)(r.A,{type:"aarm",aarm:"note",children:[(0,n.jsx)("em",{children:"This paragraph was deleted."}),(0,n.jsx)("br",{})]})]}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(l.A,{children:"25.a.1/2"}),(0,n.jsx)(r.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)("strong",{children:"Documentation Requirement: "}),"Whether the RPC-receiver is invoked from concurrent tasks, and if so, the number of such tasks.",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(t.h4,{id:"implementation-permissions",children:"Implementation Permissions"}),"\n",(0,n.jsx)(l.A,{children:"26"}),"\n",(0,n.jsxs)("p",{children:["The PCS is allowed to contain implementation-defined interfaces for explicit message passing, broadcasting, etc. Similarly, it is allowed to provide additional interfaces to query the state of some remote partition (given its partition ID) or of the PCS itself, to set timeouts and retry parameters, to get more detailed error status, etc. These additional interfaces should be provided in child packages of System.RPC. ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(l.A,{children:"26.a"}),(0,n.jsx)(r.A,{type:"aarm",aarm:"implementation-defined",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)("strong",{}),"Implementation-defined interfaces in the PCS.",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(l.A,{children:"27/5"}),"\n",(0,n.jsx)(c.A,{items:["AI12-0444-1"]}),"\n",(0,n.jsxs)("p",{children:["A body for the package System.RPC is not required to be supplied by the implementation. ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(l.A,{children:"27.a"}),(0,n.jsx)(r.A,{type:"aarm",aarm:"reason",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)("strong",{}),"It is presumed that a body for the package System.RPC might be extremely environment specific. Therefore, we do not require that a body be provided by the (compiler) implementation. The user will have to write a body, or acquire one, appropriate for the target environment. ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(l.A,{children:"27.1/3"}),"\n",(0,n.jsx)(c.A,{items:["AI95-00273-01","AI05-0299-1"]}),"\n",(0,n.jsxs)("p",{children:["An alternative declaration is allowed for package System.RPC as long as it provides a set of operations that is substantially equivalent to the specification defined in this subclause. ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(l.A,{children:"27.b/2"}),(0,n.jsx)(r.A,{type:"aarm",aarm:"reason",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)("strong",{}),"Experience has proved that the definition of System.RPC given here is inadequate for interfacing to existing distribution mechanisms (such as CORBA), especially on heterogeneous systems. Rather than mandate a change in the mechanism (which would break existing systems), require implementations to support multiple mechanisms (which is impractical), or prevent the use of Annex E facilities with existing systems (which would be silly), we simply make this facility optional.",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(l.A,{children:"27.c/2"}),(0,n.jsx)(r.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(t.p,{children:["One of the purposes behind System.RPC was that knowledgeable users, rather than compiler vendors, could create this package tailored to their networks. Experience has shown that users get their RPC from vendors anyway; users have not taken advantage of the flexibility provided by this defined interface. Moreover, one could compare this defined interface to requiring Ada compilers to use a defined interface to implement tasking. No one thinks that the latter is a good idea, why should anyone believe that the former is?",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(l.A,{children:"27.d/3"}),(0,n.jsx)(c.A,{items:["AI05-0299-1"]}),(0,n.jsx)(r.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(t.p,{children:["Therefore, this subclause is made optional. We considered deleting the subclause outright, but we still require that users may replace the package (whatever its interface). Also, it still provides a useful guide to the implementation of this feature. ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(t.h4,{id:"implementation-advice",children:"Implementation Advice"}),"\n",(0,n.jsx)(l.A,{children:"28"}),"\n",(0,n.jsxs)("p",{children:["Whenever possible, the PCS on the called partition should allow for multiple tasks to call the RPC-receiver with different messages and should allow them to block until the corresponding subprogram body returns. ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(l.A,{children:"28.a/2"}),(0,n.jsx)(r.A,{type:"aarm",aarm:"implementation-advice",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)("strong",{}),"The PCS should allow for multiple tasks to call the RPC-receiver.",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(l.A,{children:"29"}),"\n",(0,n.jsxs)("p",{children:["The Write operation on a stream of type Params","_","Stream","_","Type should raise Storage","_","Error if it runs out of space trying to write the Item into the stream. ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(l.A,{children:"29.a.1/2"}),(0,n.jsx)(r.A,{type:"aarm",aarm:"implementation-advice",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)("strong",{}),"The System.RPC.Write operation should raise Storage","_","Error if it runs out of space when writing an item.",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(l.A,{children:"29.a"}),(0,n.jsx)(r.A,{type:"aarm",aarm:"implementation-note",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)("strong",{}),"An implementation could also dynamically allocate more space as needed, only propagating Storage","_","Error if the ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-4/AA-4.8#S0164",children:"allocator"})})," it calls raises Storage","_","Error. This storage could be managed through a controlled component of the stream object, to ensure that it is reclaimed when the stream object is finalized. ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(l.A,{children:"30"}),(0,n.jsx)(r.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(t.p,{children:["NOTE   The package System.RPC is not designed for direct calls by user programs. It is instead designed for use in the implementation of remote subprograms calls, being called by the calling stubs generated for a remote call interface library unit to initiate a remote call, and in turn calling back to an RPC-receiver that dispatches to the receiving stubs generated for the body of a remote call interface, to handle a remote call received from elsewhere. ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(a.A,{children:(0,n.jsx)(t.h4,{id:"incompatibilities-with-ada-95",children:"Incompatibilities With Ada 95"})}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(l.A,{children:"30.a/2"}),(0,n.jsx)(c.A,{items:["AI95-00273-01"]}),(0,n.jsx)(r.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(t.p,{children:["The specification of System.RPC can now be tailored for an implementation. If a program replaces the body of System.RPC with a user-defined body, it might not compile in a given implementation of Ada 2005 (if the specification of System.RPC has been changed). ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(a.A,{children:(0,n.jsx)(t.h4,{id:"wording-changes-from-ada-95",children:"Wording Changes from Ada 95"})}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(l.A,{children:"30.b/2"}),(0,n.jsx)(c.A,{items:["AI95-00082-01"]}),(0,n.jsx)(r.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(t.p,{children:["{",(0,n.jsx)("em",{children:"8652/0087"}),"}"," ",(0,n.jsx)("strong",{children:"Corrigendum:"})," Clarified that the user can replace System.RPC. ",(0,n.jsx)("br",{})]})})]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(j,{...e})}):j(e)}}}]);