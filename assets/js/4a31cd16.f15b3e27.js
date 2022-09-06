"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[3578],{1579:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=i(9440),n=(i(6687),i(1716));i(2526);const r={sidebar_position:154},a="D.3  Priority Ceiling Locking",l={unversionedId:"arm/AA-D.3",id:"arm/AA-D.3",title:"D.3  Priority Ceiling Locking",description:"We're still working on the Reference manual output.  Internal links are broken,",source:"@site/docs/arm/AA-D.3.mdx",sourceDirName:"arm",slug:"/arm/AA-D.3",permalink:"/docs/arm/AA-D.3",draft:!1,tags:[],version:"current",sidebarPosition:154,frontMatter:{sidebar_position:154},sidebar:"tutorialSidebar",previous:{title:"D.2  Priority Scheduling",permalink:"/docs/arm/AA-D.2"},next:{title:"D.4  Entry Queuing Policies",permalink:"/docs/arm/AA-D.4"}},s={},c=[{value:"Syntax",id:"syntax",level:4},{value:"Legality Rules",id:"legality-rules",level:4},{value:"Post-Compilation Rules",id:"post-compilation-rules",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics",level:4},{value:"Bounded (Run-Time) Errors",id:"bounded-run-time-errors",level:4},{value:"Implementation Permissions",id:"implementation-permissions",level:4},{value:"Implementation Advice",id:"implementation-advice",level:4},{value:"Extensions to Ada 95",id:"extensions-to-ada-95",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4},{value:"Wording Changes from Ada 2005",id:"wording-changes-from-ada-2005",level:4},{value:"Extensions to Ada 2012",id:"extensions-to-ada-2012",level:4},{value:"Wording Changes from Ada 2012",id:"wording-changes-from-ada-2012",level:4}],p={toc:c};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"d3--priority-ceiling-locking"},"D.3  Priority Ceiling Locking"),(0,n.kt)("admonition",{type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"We're still working on the Reference manual output.  Internal links are broken,\nas are a bunch of other things.\nSee the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"},"tracking issue"))),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI05-0299-1"),"}"," [This subclause specifies the interactions between priority task scheduling and protected object ceilings. This interaction is based on the concept of the ",(0,n.kt)("em",null,"ceiling priority")," of a protected object.] "),(0,n.kt)("h4",{id:"syntax"},"Syntax"),(0,n.kt)("p",null,"The form of a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-2.8#S0019"},"pragma"))," Locking_Policy is as follows: "),(0,n.kt)("p",null,"  ",(0,n.kt)("strong",null,"pragma")," Locking_Policy(",(0,n.kt)("em",null,"policy_"),(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-2.3#S0002"},"identifier")),"); "),(0,n.kt)("h4",{id:"legality-rules"},"Legality Rules"),(0,n.kt)("p",null,"The ",(0,n.kt)("em",null,"policy_"),(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-2.3#S0002"},"identifier"))," shall either be Ceiling_Locking or an implementation-defined ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-2.3#S0002"},"identifier")),". "),(0,n.kt)("p",null,(0,n.kt)("strong",null,"Implementation defined: "),"Implementation-defined ",(0,n.kt)("em",null,"policy_"),(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-2.3#S0002"},"identifier")),"s allowed in a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-2.8#S0019"},"pragma"))," Locking_Policy."),(0,n.kt)("h4",{id:"post-compilation-rules"},"Post-Compilation Rules"),(0,n.kt)("p",null,"A Locking_Policy pragma is a configuration pragma."),(0,n.kt)("h4",{id:"dynamic-semantics"},"Dynamic Semantics"),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"8652/0073"),"}"," ","{",(0,n.kt)("em",null,"AI95-00091-01"),"}"," ","{",(0,n.kt)("em",null,"AI95-00327-01"),"}"," [A locking policy specifies the details of protected object locking. All protected objects have a priority. The locking policy specifies the meaning of the priority of a protected object, and the relationships between these priorities and task priorities. In addition, the policy specifies the state of a task when it executes a protected action, and how its active priority is affected by the locking.] The ",(0,n.kt)("em",null,"locking policy")," is specified by a Locking_Policy pragma. For implementation-defined locking policies, the meaning of the priority of a protected object is implementation defined. If no Locking_Policy pragma applies to any of the program units comprising a partition, the locking policy for that partition, as well as the meaning of the priority of a protected object, are implementation defined. "),(0,n.kt)("p",null,(0,n.kt)("strong",null,"Implementation defined: "),"The locking policy if no Locking_Policy pragma applies to any unit of a partition."),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00327-01"),"}"," ","{",(0,n.kt)("em",null,"AI05-0229-1"),"}"," The ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.4#S0132"},"expression"))," specified for the Priority or Interrupt_Priority aspect (see D.1) is evaluated as part of the creation of the corresponding protected object and converted to the subtype System.Any_Priority or System.Interrupt_Priority, respectively. The value of the expression is the initial priority of the corresponding protected object. If no Priority or Interrupt_Priority aspect is specified for a protected object, the initial priority is specified by the locking policy. "),(0,n.kt)("p",null,"There is one predefined locking policy, Ceiling_Locking; this policy is defined as follows: "),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00327-01"),"}"," ","{",(0,n.kt)("em",null,"AI05-0229-1"),"}"," Every protected object has a ",(0,n.kt)("em",null,"ceiling priority"),", which is determined by either a Priority or Interrupt_Priority aspect as defined in D.1, or by assignment to the Priority attribute as described in D.5.2. The ceiling priority of a protected object (or ceiling, for short) is an upper bound on the active priority a task can have when it calls protected operations of that protected object."),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00327-01"),"}"," The initial ceiling priority of a protected object is equal to the initial priority for that object."),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00327-01"),"}"," ","{",(0,n.kt)("em",null,"AI05-0229-1"),"}"," ","{",(0,n.kt)("em",null,"AI12-0051-1"),"}"," If an Interrupt_Handler or Attach_Handler aspect (see C.3.1) is specified for a protected subprogram of a protected type that does not have either the Priority or Interrupt_Priority aspect specified, the initial priority of protected objects of that type is implementation defined, but in the range of the subtype System.Interrupt_Priority. "),(0,n.kt)("p",null,(0,n.kt)("strong",null,"Implementation defined: "),"Default ceiling priorities."),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00327-01"),"}"," ","{",(0,n.kt)("em",null,"AI05-0229-1"),"}"," If neither aspect Priority nor Interrupt_Priority is specified for a protected type, and no protected subprogram of the type has aspect Interrupt_Handler or Attach_Handler specified, then the initial priority of the corresponding protected object is System.Priority'Last."),(0,n.kt)("p",null,"While a task executes a protected action, it inherits the ceiling priority of the corresponding protected object."),(0,n.kt)("p",null,"When a task calls a protected operation, a check is made that its active priority is not higher than the ceiling of the corresponding protected object; Program_Error is raised if this check fails."),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI12-0230-1"),"}"," ","{",(0,n.kt)("em",null,"AI12-0404-1"),"}"," If the task dispatching policy specified for the ceiling priority of a protected object is EDF_Within_Priorities, the following additional rules apply:"),(0,n.kt)("p",null,"Every protected object has a ",(0,n.kt)("em",null,"relative deadline"),", which is determined by a Relative_Deadline aspect as defined in D.2.6, or by assignment to the Relative_Deadline attribute as described in D.5.2. The relative deadline of a protected object represents a lower bound on the relative deadline a task may have when it calls a protected operation of that protected object."),(0,n.kt)("p",null,"If aspect Relative_Deadline is not specified for a protected type then the initial relative deadline of the corresponding protected object is Ada.Real_Time.Time_Span_Zero."),(0,n.kt)("p",null,"While a task executes a protected action on a protected object ",(0,n.kt)("em",null,"P"),", it inherits the relative deadline of ",(0,n.kt)("em",null,"P"),". In this case, let ",(0,n.kt)("em",null,"DF")," be 'now' ('now' is obtained via a call on Ada.Real_Time.Clock at the start of the action) plus the deadline floor of ",(0,n.kt)("em",null,"P"),". If the active deadline of the task is later than ",(0,n.kt)("em",null,"DF"),", its active deadline is reduced to ",(0,n.kt)("em",null,"DF"),"[; the active deadline is unchanged otherwise]."),(0,n.kt)("p",null,"When a task calls a protected operation, a check is made that its active deadline minus its last release time is not less than the relative deadline of the corresponding protected object; Program_Error is raised if this check fails. "),(0,n.kt)("h4",{id:"bounded-run-time-errors"},"Bounded (Run-Time) Errors"),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00327-01"),"}"," ","{",(0,n.kt)("em",null,"AI12-0230-1"),"}"," Following any change of priority, it is a bounded error for the active priority of any task with a call queued on an entry of a protected object to be higher than the ceiling priority of the protected object. In this case one of the following applies:"),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI12-0404-1"),"}"," at any time prior to executing the entry body, Program_Error is raised in the calling task;"),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI12-0404-1"),"}"," when the entry is open,  the entry body is executed at the ceiling priority of the protected object;"),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI12-0404-1"),"}"," when the entry is open,  the entry body is executed at the ceiling priority of the protected object and then Program_Error is raised in the calling task; or"),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI12-0404-1"),"}"," when the entry is open, the entry body is executed at the ceiling priority of the protected object that was in effect when the entry call was queued. "),(0,n.kt)("p",null,(0,n.kt)("strong",null,"Ramification: "),'Note that the error is "blamed" on the task that did the entry call, not the task that changed the priority of the task or protected object. This seems to make sense for the case of changing the priority of a task blocked on a call, since if the Set_Priority had happened a little bit sooner, before the task queued a call, the entry-calling task would get the error. Similarly, there is no reason not to raise the priority of a task that is executing in an ',(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-9.7#S0283"},"abortable_part")),", so long as its priority is lowered before it gets to the end and needs to cancel the call. The priority might need to be lowered to allow it to remove the call from the entry queue, in order to avoid violating the ceiling. This seems relatively harmless, since there is an error, and the task is about to start raising an exception anyway. "),(0,n.kt)("h4",{id:"implementation-permissions"},"Implementation Permissions"),(0,n.kt)("p",null,"The implementation is allowed to round all ceilings in a certain subrange of System.Priority or System.Interrupt_Priority up to the top of that subrange, uniformly. "),(0,n.kt)("p",null,(0,n.kt)("strong",null,"Discussion: "),'For example, an implementation might use Priority\'Last for all ceilings in Priority, and Interrupt_Priority\'Last for all ceilings in Interrupt_Priority. This would be equivalent to having two ceiling priorities for protected objects, "nonpreemptible" and "noninterruptible", and is an allowed behavior.'),(0,n.kt)("p",null,"Note that the implementation cannot choose a subrange that crosses the boundary between normal and interrupt priorities. "),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00256-01"),"}"," ","{",(0,n.kt)("em",null,"AI12-0444-1"),"}"," Implementations are allowed to define other locking policies, but are not required to support specifying more than one locking policy per partition."),(0,n.kt)("p",null,"[Since implementations are allowed to place restrictions on code that runs at an interrupt-level active priority (see C.3.1 and D.2.1), the implementation may implement a language feature in terms of a protected object with an implementation-defined ceiling, but the ceiling shall be no less than Priority'Last.] "),(0,n.kt)("p",null,(0,n.kt)("strong",null,"Implementation defined: "),"The ceiling of any protected object used internally by the implementation."),(0,n.kt)("p",null,(0,n.kt)("strong",null,"Proof: "),"This permission follows from the fact that the implementation can place restrictions on interrupt handlers and on any other code that runs at an interrupt-level active priority."),(0,n.kt)("p",null,"The implementation might protect a storage pool with a protected object whose ceiling is Priority'Last, which would cause ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0164"},"allocator")),"s to fail when evaluated at interrupt priority. Note that the ceiling of such an object has to be at least Priority'Last, since there is no permission for ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0164"},"allocator")),"s to fail when evaluated at a noninterrupt priority. "),(0,n.kt)("h4",{id:"implementation-advice"},"Implementation Advice"),(0,n.kt)("p",null,'The implementation should use names that end with "_Locking" for implementation-defined locking policies.'),(0,n.kt)("p",null,(0,n.kt)("strong",null,"Implementation Advice: "),'Names that end with "_Locking" should be used for implementation-defined locking policies.'),(0,n.kt)("p",null,"NOTE 1   While a task executes in a protected action, it can be preempted only by tasks whose active priorities are higher than the ceiling priority of the protected object."),(0,n.kt)("p",null,"NOTE 2   If a protected object has a ceiling priority in the range of Interrupt_Priority, certain interrupts are blocked while protected actions of that object execute. In the extreme, if the ceiling is Interrupt_Priority'Last, all blockable interrupts are blocked during that time."),(0,n.kt)("p",null,"NOTE 3   The ceiling priority of a protected object has to be in the Interrupt_Priority range if one of its procedures is to be used as an interrupt handler (see C.3)."),(0,n.kt)("p",null,"NOTE 4   ","{",(0,n.kt)("em",null,"AI12-0442-1"),"}"," When specifying the ceiling of a protected object, a correct value is one that is at least as high as the highest active priority at which tasks can be executing when they call protected operations of that object. In determining this value the following factors, which can affect active priority, are relevant: the effect of Set_Priority, nested protected operations, entry calls, task activation, and other implementation-defined factors."),(0,n.kt)("p",null,"NOTE 5   Attaching a protected procedure whose ceiling is below the interrupt hardware priority to an interrupt causes the execution of the program to be erroneous (see C.3.1)."),(0,n.kt)("p",null,"NOTE 6   On a single processor implementation, the ceiling priority rules guarantee that there is no possibility of deadlock involving only protected subprograms (excluding the case where a protected operation calls another protected operation on the same protected object)."),(0,n.kt)("h4",{id:"extensions-to-ada-95"},"Extensions to Ada 95"),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00327-01"),"}"," All protected objects now have a priority, which is the value of the Priority attribute of D.5.2. How this value is interpreted depends on the locking policy; for instance, the ceiling priority is derived from this value when the locking policy is Ceiling_Locking. "),(0,n.kt)("h4",{id:"wording-changes-from-ada-95"},"Wording Changes from Ada 95"),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"8652/0073"),"}"," ","{",(0,n.kt)("em",null,"AI95-00091-01"),"}"," ",(0,n.kt)("strong",null,"Corrigendum:")," Corrected the wording to reflect that pragma Locking_Policy cannot be inside of a program unit."),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00256-01"),"}"," Clarified that an implementation need support only one locking policy (of any kind, language-defined or otherwise) per partition."),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00327-01"),"}"," The bounded error for the priority of a task being higher than the ceiling of an object it is currently in was moved here from D.5, so that it applies no matter how the situation arises. "),(0,n.kt)("h4",{id:"wording-changes-from-ada-2005"},"Wording Changes from Ada 2005"),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI05-0229-1"),"}"," Revised to use aspects Priority and Interrupt_Priority as ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-2.8#S0019"},"pragma")),"s Priority and Interrupt_Priority are now obsolescent. "),(0,n.kt)("h4",{id:"extensions-to-ada-2012"},"Extensions to Ada 2012"),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI12-0230-1"),"}"," All protected objects now have a relative deadline, which is the value of the Relative_Deadline attribute of D.5.2. How this value is interpreted depends on the locking policy. "),(0,n.kt)("h4",{id:"wording-changes-from-ada-2012"},"Wording Changes from Ada 2012"),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI12-0051-1"),"}"," ",(0,n.kt)("strong",null,"Corrigendum:")," Clarified that the Priority aspect can be used to set the initial ceiling priority of a protected object that contains an interrupt handler. "))}d.isMDXComponent=!0}}]);