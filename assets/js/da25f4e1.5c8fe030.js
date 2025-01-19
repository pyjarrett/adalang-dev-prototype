"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[6941],{1981:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>x,contentTitle:()=>m,default:()=>A,frontMatter:()=>h,metadata:()=>t,toc:()=>j});const t=JSON.parse('{"id":"arm/AA-D/AA-D.15","title":"D.15. Timing Events","description":"This Reference Manual output has not been verified,","source":"@site/docs/arm/AA-D/AA-D.15.mdx","sourceDirName":"arm/AA-D","slug":"/arm/AA-D/AA-D.15","permalink":"/docs/arm/AA-D/AA-D.15","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":169,"frontMatter":{"sidebar_position":169},"sidebar":"referenceManualSidebar","previous":{"title":"D.14. Execution Time","permalink":"/docs/arm/AA-D/AA-D.14"},"next":{"title":"D.16. Multiprocessor Implementation","permalink":"/docs/arm/AA-D/AA-D.16"}}');var s=i(4848),r=i(8453),a=i(3204),l=i(4220),d=i(8069),c=i(8011),o=i(6465);const h={sidebar_position:169},m="D.15. Timing Events",x={},j=[{value:"Static Semantics",id:"static-semantics",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics",level:4},{value:"Implementation Requirements",id:"implementation-requirements",level:4},{value:"Metrics",id:"metrics",level:4},{value:"Implementation Advice",id:"implementation-advice",level:4},{value:"Extensions to Ada 95",id:"extensions-to-ada-95",level:4},{value:"Wording Changes from Ada 2005",id:"wording-changes-from-ada-2005",level:4}];function p(e){const n={a:"a",admonition:"admonition",h1:"h1",h4:"h4",header:"header",p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"d15-timing-events",children:"D.15. Timing Events"})}),"\n",(0,s.jsx)(n.admonition,{type:"danger",children:(0,s.jsxs)(n.p,{children:["This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,s.jsx)(n.a,{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20",children:"tracking issue"})]})}),"\n","\n",(0,s.jsx)(c.A,{children:"1/5"}),"\n",(0,s.jsx)(o.A,{items:["AI95-00297-01","AI05-0299-1","AI12-0445-1"]}),"\n",(0,s.jsxs)("p",{children:["This subclause describes a language-defined package to allow user-defined protected procedures to be executed at a specified time without the use of a task or a delay statement. ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(n.h4,{id:"static-semantics",children:"Static Semantics"}),"\n",(0,s.jsx)(c.A,{children:"2/2"}),"\n",(0,s.jsx)(o.A,{items:["AI95-00297-01"]}),"\n",(0,s.jsxs)("p",{children:["The following language-defined library package exists: ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(c.A,{children:"3/5"}),"\n",(0,s.jsx)(o.A,{items:["AI12-0241-1","AI12-0302-1"]}),"\n",(0,s.jsxs)(d.A,{language:"ada",children:[(0,s.jsxs)(n.p,{children:["package Ada.Real","_","Time.Timing","_","Events","\n","  with Nonblocking, Global =",">"," in out synchronized is","\n","\n",(0,s.jsx)(c.A,{children:"4/5"})]}),(0,s.jsx)(o.A,{items:["AI12-0241-1"]}),(0,s.jsxs)(n.p,{children:["type Timing","_","Event is tagged limited private;","\n","  type Timing","_","Event","_","Handler","\n","       is access protected procedure (Event : in out Timing","_","Event)","\n","       with Nonblocking =",">"," False;","\n","\n",(0,s.jsx)(c.A,{children:"5/2"}),"\nprocedure Set","_","Handler (Event   : in out Timing","_","Event;","\n","                         At","_","Time : in Time;","\n","                         Handler : in Timing","_","Event","_","Handler);","\n","  procedure Set","_","Handler (Event   : in out Timing","_","Event;","\n","                         In","_","Time : in Time","_","Span;","\n","                         Handler : in Timing","_","Event","_","Handler);","\n","  function Current","_","Handler (Event : Timing","_","Event)","\n","       return Timing","_","Event","_","Handler;","\n","  procedure Cancel","_","Handler (Event     : in out Timing","_","Event;","\n","                            Cancelled : out Boolean);","\n","\n",(0,s.jsx)(c.A,{children:"6/2"}),"\nfunction Time","_","Of","_","Event (Event : Timing","_","Event) return Time;","\n","\n",(0,s.jsx)(c.A,{children:"7/2"}),"\nprivate","\n","  ... -- not specified by the language","\n","end Ada.Real","_","Time.Timing","_","Events;","\n"]})]}),"\n",(0,s.jsx)(c.A,{children:"8/2"}),"\n",(0,s.jsx)(o.A,{items:["AI95-00297-01"]}),"\n",(0,s.jsxs)("p",{children:["The type Timing","_","Event represents a time in the future when an event is to occur. The type Timing","_","Event needs finalization (see ",(0,s.jsx)("a",{href:"/docs/arm/AA-7/AA-7.6",children:"7.6"}),").",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(c.A,{children:"9/2"}),"\n",(0,s.jsx)(o.A,{items:["AI95-00297-01"]}),"\n",(0,s.jsxs)("p",{children:["An object of type Timing","_","Event is said to be ",(0,s.jsx)("i",{children:"set"})," if it is associated with a nonnull value of type Timing","_","Event","_","Handler and ",(0,s.jsx)("i",{children:"cleared"})," otherwise. All Timing","_","Event objects are initially cleared. ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(c.A,{children:"10/2"}),"\n",(0,s.jsx)(o.A,{items:["AI95-00297-01"]}),"\n",(0,s.jsxs)("p",{children:["The type Timing","_","Event","_","Handler identifies a protected procedure to be executed by the implementation when the timing event occurs. Such a protected procedure is called a ",(0,s.jsx)("i",{children:"handler"}),". ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(l.A,{children:[(0,s.jsx)(c.A,{children:"10.a/2"}),(0,s.jsx)(a.A,{type:"aarm",aarm:"discussion",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)("b",{}),"Type Timing","_","Event is tagged. This makes it possible to share a handler between several events. In simple cases, 'Access can be used to compare the parameter with a specific timing event object (this works because a tagged type is a by-reference type). In more complex cases, a type extension of type Timing","_","Event can be declared; a double type conversion can be used to access the extension data. For example:",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsxs)(l.A,{children:[(0,s.jsx)(c.A,{children:"10.b/2"}),(0,s.jsx)(d.A,{language:"ada",children:(0,s.jsxs)(n.p,{children:["type Toaster","_","Timing","_","Event is new Timing","_","Event with record","\n","   Slot : Natural;","\n","end record;","\n","\n",(0,s.jsx)(c.A,{children:"10.c/2"}),"\n...","\n","\n",(0,s.jsx)(c.A,{children:"10.d/2"}),"\nprotected body Toaster is","\n","\n",(0,s.jsx)(c.A,{children:"10.e/2"}),"\nprocedure Timer (Event : in out Timing","_","Event) is","\n","   begin","\n","      Pop","_","Up","_","Toast (Toaster","_","Timing","_","Event(Timing","_","Event'Class(Event)).Slot);","\n","   end Timer;","\n","\n",(0,s.jsx)(c.A,{children:"10.f/2"}),"\n...","\n","end Toaster;","\n"]})})]}),"\n",(0,s.jsxs)(l.A,{children:[(0,s.jsx)(c.A,{children:"10.g/2"}),(0,s.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,s.jsxs)(n.p,{children:["The extra conversion to the class-wide type is necessary to make the conversions legal. While this usage is clearly ugly, we think that the need for this sort of usage will be rare, so we can live with it. It's certainly better than having no way to associate data with an event. ",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"dynamic-semantics",children:"Dynamic Semantics"}),"\n",(0,s.jsx)(c.A,{children:"11/3"}),"\n",(0,s.jsx)(o.A,{items:["AI95-00297-01","AI05-0264-1"]}),"\n",(0,s.jsxs)("p",{children:["The procedures Set","_","Handler associate the handler Handler with the event Event: if Handler is ",(0,s.jsx)("b",{children:"null"}),", the event is cleared; otherwise, it is set. The first procedure Set","_","Handler sets the execution time for the event to be At","_","Time. The second procedure Set","_","Handler sets the execution time for the event to be Real","_","Time.Clock + In","_","Time.",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(c.A,{children:"12/2"}),"\n",(0,s.jsx)(o.A,{items:["AI95-00297-01"]}),"\n",(0,s.jsxs)("p",{children:["A call of a procedure Set","_","Handler for an event that is already set replaces the handler and the time of execution; if Handler is not ",(0,s.jsx)("b",{children:"null"}),", the event remains set.",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(c.A,{children:"13/2"}),"\n",(0,s.jsx)(o.A,{items:["AI95-00297-01"]}),"\n",(0,s.jsxs)("p",{children:["As soon as possible after the time set for the event, the handler is executed, passing the event as parameter. The handler is only executed if the timing event is in the set state at the time of execution. The initial action of the execution of the handler is to clear the event.",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(l.A,{children:[(0,s.jsx)(c.A,{children:"13.a/2"}),(0,s.jsx)(a.A,{type:"aarm",aarm:"reason",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)("b",{}),"The second sentence of this paragraph is because of a potential race condition. The time might expire and yet before the handler is executed, some task could call Cancel","_","Handler (or equivalently call Set","_","Handler with a ",(0,s.jsx)("b",{children:"null"})," parameter) and thus clear the handler. ",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsx)(c.A,{children:"14/2"}),"\n",(0,s.jsx)(o.A,{items:["AI95-00297-01"]}),"\n",(0,s.jsxs)("p",{children:["If the Ceiling","_","Locking policy (see ",(0,s.jsx)("a",{href:"/docs/arm/AA-D/AA-D.3",children:"D.3"}),") is in effect when a procedure Set","_","Handler is called, a check is made that the ceiling priority of Handler.",(0,s.jsx)("b",{children:"all"})," is Interrupt","_","Priority'Last. If the check fails, Program","_","Error is raised.",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(c.A,{children:"15/3"}),"\n",(0,s.jsx)(o.A,{items:["AI95-00297-01","AI05-0094-1","AI05-0264-1"]}),"\n",(0,s.jsxs)("p",{children:["If a procedure Set","_","Handler is called with zero or negative In","_","Time or with At","_","Time indicating a time in the past, then the handler is executed as soon as possible after the completion of the call of Set","_","Handler.",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(l.A,{children:[(0,s.jsx)(c.A,{children:"15.a/3"}),(0,s.jsx)(o.A,{items:["AI05-0094-1"]}),(0,s.jsx)(a.A,{type:"aarm",aarm:"ramification",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)("b",{}),"The handler will still be executed. Under no circumstances is a scheduled call of a handler lost. ",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsxs)(l.A,{children:[(0,s.jsx)(c.A,{children:"15.b/3"}),(0,s.jsx)(o.A,{items:["AI05-0094-1"]}),(0,s.jsx)(a.A,{type:"aarm",aarm:"discussion",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)("b",{}),"We say \u201cas soon as possible\u201d so that we do not deadlock if we are executing the handler when Set","_","Handler is called. In that case, the current invocation of the handler must complete before the new handler can start executing. ",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsx)(c.A,{children:"16/3"}),"\n",(0,s.jsx)(o.A,{items:["AI95-00297-01","AI05-0264-1"]}),"\n",(0,s.jsxs)("p",{children:["The function Current","_","Handler returns the handler associated with the event Event if that event is set; otherwise, it returns ",(0,s.jsx)("b",{children:"null"}),".",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(c.A,{children:"17/3"}),"\n",(0,s.jsx)(o.A,{items:["AI95-00297-01","AI05-0264-1"]}),"\n",(0,s.jsxs)("p",{children:["The procedure Cancel","_","Handler clears the event if it is set. Cancelled is assigned True if the event was set prior to it being cleared; otherwise, it is assigned False.",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(c.A,{children:"18/3"}),"\n",(0,s.jsx)(o.A,{items:["AI95-00297-01","AI05-0264-1"]}),"\n",(0,s.jsxs)("p",{children:["The function Time","_","Of","_","Event returns the time of the event if the event is set; otherwise, it returns Real","_","Time.Time","_","First.",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(c.A,{children:"19/2"}),"\n",(0,s.jsx)(o.A,{items:["AI95-00297-01"]}),"\n",(0,s.jsxs)("p",{children:["As part of the finalization of an object of type Timing","_","Event, the Timing","_","Event is cleared.",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(l.A,{children:[(0,s.jsx)(c.A,{children:"19.a/2"}),(0,s.jsx)(a.A,{type:"aarm",aarm:"implementation-note",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)("b",{}),"This is the only finalization defined by the language that has a visible effect; but an implementation may have other finalization that it needs to perform. Implementations need to ensure that the event is cleared before anything else is finalized that would prevent a set event from being triggered. ",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsx)(c.A,{children:"20/2"}),"\n",(0,s.jsx)(o.A,{items:["AI95-00297-01"]}),"\n",(0,s.jsxs)("p",{children:["If several timing events are set for the same time, they are executed in FIFO order of being set.",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(c.A,{children:"21/2"}),"\n",(0,s.jsx)(o.A,{items:["AI95-00297-01"]}),"\n",(0,s.jsxs)("p",{children:["An exception propagated from a handler invoked by a timing event has no effect.",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(n.h4,{id:"implementation-requirements",children:"Implementation Requirements"}),"\n",(0,s.jsx)(c.A,{children:"22/2"}),"\n",(0,s.jsx)(o.A,{items:["AI95-00297-01"]}),"\n",(0,s.jsxs)("p",{children:["For a given Timing","_","Event object, the implementation shall perform the operations declared in this package atomically with respect to any of these operations on the same Timing","_","Event object. The replacement of a handler by a call of Set","_","Handler shall be performed atomically with respect to the execution of the handler.",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(l.A,{children:[(0,s.jsx)(c.A,{children:"22.a/2"}),(0,s.jsx)(a.A,{type:"aarm",aarm:"reason",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)("b",{}),"This prevents various race conditions. In particular it ensures that if an event occurs when Set","_","Handler is changing the handler then either the new or old handler is executed in response to the appropriate event. It is never possible for a new handler to be executed in response to an old event. ",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"metrics",children:"Metrics"}),"\n",(0,s.jsx)(c.A,{children:"23/2"}),"\n",(0,s.jsx)(o.A,{items:["AI95-00297-01"]}),"\n",(0,s.jsxs)("p",{children:["The implementation shall document the following metric: ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(c.A,{children:"24/3"}),"\n",(0,s.jsx)(o.A,{items:["AI05-0210-1"]}),"\n",(0,s.jsx)("ul",{children:(0,s.jsxs)("li",{children:["An upper bound on the lateness of the execution of a handler. That is, the maximum time between the time specified for the event and when a handler is actually invoked assuming no other handler or task is executing during this interval.",(0,s.jsx)("br",{})]})}),"\n",(0,s.jsxs)(l.A,{children:[(0,s.jsx)(c.A,{children:"24.a/2"}),(0,s.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)("b",{children:"Documentation Requirement: "}),"The metrics for timing events.",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"implementation-advice",children:"Implementation Advice"}),"\n",(0,s.jsx)(c.A,{children:"25/2"}),"\n",(0,s.jsx)(o.A,{items:["AI95-00297-01"]}),"\n",(0,s.jsxs)("p",{children:["The protected handler procedure should be executed directly by the real-time clock interrupt mechanism.",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(l.A,{children:[(0,s.jsx)(c.A,{children:"25.a/2"}),(0,s.jsx)(a.A,{type:"aarm",aarm:"implementation-advice",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)("b",{}),"For a timing event, the handler should be executed directly by the real-time clock interrupt mechanism.",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsxs)(l.A,{children:[(0,s.jsx)(c.A,{children:"26/2"}),(0,s.jsx)(o.A,{items:["AI95-00297-01"]}),(0,s.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,s.jsxs)(n.p,{children:["NOTE 1   Since a call of Set","_","Handler is not a potentially blocking operation, it can be called from within a handler.",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsxs)(l.A,{children:[(0,s.jsx)(c.A,{children:"27/2"}),(0,s.jsx)(o.A,{items:["AI95-00297-01"]}),(0,s.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,s.jsxs)(n.p,{children:["NOTE 2   A Timing","_","Event","_","Handler can be associated with several Timing","_","Event objects.",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsx)(l.A,{children:(0,s.jsx)(n.h4,{id:"extensions-to-ada-95",children:"Extensions to Ada 95"})}),"\n",(0,s.jsxs)(l.A,{children:[(0,s.jsx)(c.A,{children:"27.a/2"}),(0,s.jsx)(o.A,{items:["AI95-00297-01"]}),(0,s.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,s.jsxs)(n.p,{children:["The package Real","_","Time.Timing","_","Events is new. ",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsx)(l.A,{children:(0,s.jsx)(n.h4,{id:"wording-changes-from-ada-2005",children:"Wording Changes from Ada 2005"})}),"\n",(0,s.jsxs)(l.A,{children:[(0,s.jsx)(c.A,{children:"27.b/3"}),(0,s.jsx)(o.A,{items:["AI05-0094-1"]}),(0,s.jsx)(a.A,{type:"aarm",aarm:"correction",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)("b",{})," Reworded to eliminate a deadlock condition if the event time is in the past and a handler is currently executing. This is technically an inconsistency, but only if a program is depending on deadlocking; since it is impossible to imagine how that could be useful, we have not documented this as an inconsistency.",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsxs)(l.A,{children:[(0,s.jsx)(c.A,{children:"27.c/3"}),(0,s.jsx)(o.A,{items:["AI05-0210-1"]}),(0,s.jsx)(a.A,{type:"aarm",aarm:"correction",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)("b",{})," Clarified the metric for lateness of a timing event to exclude interference from other handlers and tasks. This change might change the documentation of an implementation, but not the implementation itself, so there is no inconsistency. ",(0,s.jsx)("br",{})]})})]})]})}function A(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}}}]);