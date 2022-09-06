"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[1135],{6357:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=n(9440),o=(n(6687),n(1716)),i=n(2526);const s={sidebar_position:161},r="D.10  Synchronous Task Control",l={unversionedId:"arm/AA-D.10",id:"arm/AA-D.10",title:"D.10  Synchronous Task Control",description:"We're still working on the Reference manual output.  Internal links are broken,",source:"@site/docs/arm/AA-D.10.mdx",sourceDirName:"arm",slug:"/arm/AA-D.10",permalink:"/docs/arm/AA-D.10",draft:!1,tags:[],version:"current",sidebarPosition:161,frontMatter:{sidebar_position:161},sidebar:"tutorialSidebar",previous:{title:"D.9  Delay Accuracy",permalink:"/docs/arm/AA-D.9"},next:{title:"D.11  Asynchronous Task Control",permalink:"/docs/arm/AA-D.11"}},u={},d=[{value:"Static Semantics",id:"static-semantics",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics",level:4},{value:"Bounded (Run-Time) Errors",id:"bounded-run-time-errors",level:4},{value:"Implementation Requirements",id:"implementation-requirements",level:4},{value:"Extensions to Ada 95",id:"extensions-to-ada-95",level:4},{value:"Extensions to Ada 2005",id:"extensions-to-ada-2005",level:4},{value:"Wording Changes from Ada 2012",id:"wording-changes-from-ada-2012",level:4},{value:"D.10.1  Synchronous Barriers",id:"d101--synchronous-barriers",level:2},{value:"Static Semantics",id:"static-semantics-1",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics-1",level:4},{value:"Bounded (Run-Time) Errors",id:"bounded-run-time-errors-1",level:4},{value:"Extensions to Ada 2005",id:"extensions-to-ada-2005-1",level:4}],c={toc:d};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"d10--synchronous-task-control"},"D.10  Synchronous Task Control"),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"We're still working on the Reference manual output.  Internal links are broken,\nas are a bunch of other things.\nSee the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"},"tracking issue"))),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI05-0299-1"),"}"," [This subclause describes a language-defined private semaphore (suspension object), which can be used for ",(0,o.kt)("em",null,"two-stage suspend")," operations and as a simple building block for implementing higher-level queues.] "),(0,o.kt)("h4",{id:"static-semantics"},"Static Semantics"),(0,o.kt)("p",null,"The following language-defined package exists: "),(0,o.kt)(i.Z,{mdxType:"CodeBlock"},"{","AI95-00362-01","}"," ","{","AI12-0241-1","}"," ","{","AI12-0302-1","}"," package Ada.Synchronous_Task_Control","\n","  with Preelaborate, Nonblocking, Global =",">"," in out synchronized is","\n"),(0,o.kt)(i.Z,{mdxType:"CodeBlock"},"{","AI12-0241-1","}","   type Suspension_Object is limited private;","\n","  procedure Set_True(S : in out Suspension_Object);","\n","  procedure Set_False(S : in out Suspension_Object);","\n","  function Current_State(S : Suspension_Object) return Boolean;","\n","  procedure Suspend_Until_True(S : in out Suspension_Object)","\n","     with Nonblocking =",">"," False;","\n","private","\n","     ... -- not specified by the language","\n","end Ada.Synchronous_Task_Control;","\n"),(0,o.kt)("p",null,"The type Suspension_Object is a by-reference type."),(0,o.kt)("p",null,(0,o.kt)("strong",null,"Implementation Note: "),"{",(0,o.kt)("em",null,"AI95-00318-02"),"}"," The implementation can ensure this by, for example, making the full view an explicitly limited record type."),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI05-0168-1"),"}"," The following language-defined package exists: "),(0,o.kt)(i.Z,{mdxType:"CodeBlock"},"{","AI05-0168-1","}"," ","{","AI12-0241-1","}"," ","{","AI12-0302-1","}"," with Ada.Real_Time;","\n","package Ada.Synchronous_Task_Control.EDF","\n","   with Nonblocking, Global =",">"," in out synchronized is","\n","   procedure Suspend_Until_True_And_Set_Deadline","\n","      (S  : in out Suspension_Object;","\n","       TS : in     Ada.Real_Time.Time_Span)","\n","      with Nonblocking =",">"," False;","\n","end Ada.Synchronous_Task_Control.EDF;","\n"),(0,o.kt)("h4",{id:"dynamic-semantics"},"Dynamic Semantics"),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI95-00114-01"),"}"," An object of the type Suspension_Object has two visible states: True and False. Upon initialization, its value is set to False. "),(0,o.kt)("p",null,(0,o.kt)("strong",null,"Discussion: "),"This object is assumed to be private to the declaring task, i.e. only that task will call Suspend_Until_True on this object, and the count of callers is at most one. Other tasks can, of course, change and query the state of this object. "),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI95-00114-01"),"}"," The operations Set_True and Set_False are atomic with respect to each other and with respect to Suspend_Until_True; they set the state to True and False respectively."),(0,o.kt)("p",null,"Current_State returns the current state of the object. "),(0,o.kt)("p",null,(0,o.kt)("strong",null,"Discussion: "),"This state can change immediately after the operation returns. "),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI95-00114-01"),"}"," The procedure Suspend_Until_True blocks the calling task until the state of the object S is True; at that point the task becomes ready and the state of the object becomes False."),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI12-0241-1"),"}"," Program_Error is raised upon calling Suspend_Until_True if another task is already waiting on that suspension object."),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI05-0168-1"),"}"," ","{",(0,o.kt)("em",null,"AI05-0269-1"),"}"," ","{",(0,o.kt)("em",null,"AI12-0241-1"),"}"," The procedure Suspend_Until_True_And_Set_Deadline blocks the calling task until the state of the object S is True; at that point the task becomes ready with a deadline of Ada.Real_Time.Clock + TS, and the state of the object becomes False. Program_Error is raised upon calling Suspend_Until_True_And_Set_Deadline if another task is already waiting on that suspension object. "),(0,o.kt)("h4",{id:"bounded-run-time-errors"},"Bounded (Run-Time) Errors"),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI12-0171-1"),"}"," ","{",(0,o.kt)("em",null,"AI12-0439-1"),"}"," It is a bounded error for two or more tasks to call Suspend_Until_True on the same Suspension_Object concurrently. For each task, Program_Error can be raised, the task can proceed without suspending, or the task can suspend, potentially indefinitely. The state of the suspension object can end up either True or False. "),(0,o.kt)("h4",{id:"implementation-requirements"},"Implementation Requirements"),(0,o.kt)("p",null,"The implementation is required to allow the calling of Set_False and Set_True during any protected action, even one that has its ceiling priority in the Interrupt_Priority range."),(0,o.kt)("p",null,"NOTE 1   ","{",(0,o.kt)("em",null,"AI05-0168-1"),"}"," More complex schemes, such as setting the deadline relative to when Set_True is called, can be programmed using a protected object. "),(0,o.kt)("h4",{id:"extensions-to-ada-95"},"Extensions to Ada 95"),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI95-00362-01"),"}"," Synchronous_Task_Control is now Preelaborated, so it can be used in preelaborated units. "),(0,o.kt)("h4",{id:"extensions-to-ada-2005"},"Extensions to Ada 2005"),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI05-0168-1"),"}"," Child package Ada.Synchronous_Task_Control.EDF is new. "),(0,o.kt)("h4",{id:"wording-changes-from-ada-2012"},"Wording Changes from Ada 2012"),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI12-0171-1"),"}"," ",(0,o.kt)("strong",null,"Correction:")," Clarified that Suspend_Until_True should only be called from a single task, and what happens if that is violated. "),(0,o.kt)("h2",{id:"d101--synchronous-barriers"},"D.10.1  Synchronous Barriers"),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI05-0174-1"),"}"," ","{",(0,o.kt)("em",null,"AI05-0299-1"),"}"," This subclause introduces a language-defined package to synchronously release a group of tasks after the number of blocked tasks reaches a specified count value. "),(0,o.kt)("h4",{id:"static-semantics-1"},"Static Semantics"),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI05-0174-1"),"}"," The following language-defined library package exists: "),(0,o.kt)(i.Z,{mdxType:"CodeBlock"},"{","AI12-0241-1","}"," ","{","AI12-0302-1","}"," package Ada.Synchronous_Barriers","\n","   with Preelaborate, Nonblocking, Global =",">"," in out synchronized is","\n"),(0,o.kt)(i.Z,{mdxType:"CodeBlock"},"subtype Barrier_Limit is Positive range 1 .. implementation-defined;","\n"),(0,o.kt)("p",null,(0,o.kt)("strong",null,"Implementation defined: "),"The value of Barrier_Limit'Last in Synchronous_Barriers."),(0,o.kt)(i.Z,{mdxType:"CodeBlock"},"type Synchronous_Barrier (Release_Threshold : Barrier_Limit) is limited private;","\n"),(0,o.kt)(i.Z,{mdxType:"CodeBlock"},"{","AI12-0241-1","}","    procedure Wait_For_Release (The_Barrier : in out Synchronous_Barrier;","\n","                               Notified    :    out Boolean)","\n","      with Nonblocking =",">"," False;","\n"),(0,o.kt)(i.Z,{mdxType:"CodeBlock"},"private","\n","   -- not specified by the language","\n","end Ada.Synchronous_Barriers;","\n"),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI05-0174-1"),"}"," Type Synchronous_Barrier needs finalization (see 7.6). "),(0,o.kt)("h4",{id:"dynamic-semantics-1"},"Dynamic Semantics"),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI05-0174-1"),"}"," Each call to Wait_For_Release blocks the calling task until the number of blocked tasks associated with the Synchronous_Barrier object is equal to Release_Threshold, at which time all blocked tasks are released. Notified is set to True for one of the released tasks, and set to False for all other released tasks."),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI05-0174-1"),"}"," The mechanism for determining which task sets Notified to True is implementation defined."),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI05-0174-1"),"}"," Once all tasks have been released, a Synchronous_Barrier object may be reused to block another Release_Threshold number of tasks."),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI05-0174-1"),"}"," As the first step of the finalization of a Synchronous_Barrier, each blocked task is unblocked and Program_Error is raised at the place of the call to Wait_For_Release."),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI05-0174-1"),"}"," It is implementation defined whether an abnormal task which is waiting on a Synchronous_Barrier object is aborted immediately or aborted when the tasks waiting on the object are released. "),(0,o.kt)("p",null,(0,o.kt)("strong",null,"Implementation defined: "),"When an aborted task that is waiting on a Synchronous_Barrier is aborted."),(0,o.kt)("p",null,(0,o.kt)("em",null,"This paragraph was deleted."),"{",(0,o.kt)("em",null,"AI05-0174-1"),"}"," ","{",(0,o.kt)("em",null,"AI12-0241-1"),"}"," "),(0,o.kt)("h4",{id:"bounded-run-time-errors-1"},"Bounded (Run-Time) Errors"),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI05-0174-1"),"}"," It is a bounded error to call Wait_For_Release on a Synchronous_Barrier object after that object is finalized. If the error is detected, Program_Error is raised. Otherwise, the call proceeds normally, which may leave a task blocked forever. "),(0,o.kt)("h4",{id:"extensions-to-ada-2005-1"},"Extensions to Ada 2005"),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI05-0174-1"),"}"," The package Ada.Synchronous_Barriers is new. "))}h.isMDXComponent=!0}}]);