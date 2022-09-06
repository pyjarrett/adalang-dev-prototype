"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[2845],{2454:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(9440),i=(n(6687),n(1716));n(2526);const o={sidebar_position:211},r="M.1  Specific Documentation Requirements",s={unversionedId:"arm/AA-M.1",id:"arm/AA-M.1",title:"M.1  Specific Documentation Requirements",description:"We're still working on the Reference manual output.  Internal links are broken,",source:"@site/docs/arm/AA-M.1.mdx",sourceDirName:"arm",slug:"/arm/AA-M.1",permalink:"/docs/arm/AA-M.1",draft:!1,tags:[],version:"current",sidebarPosition:211,frontMatter:{sidebar_position:211},sidebar:"tutorialSidebar",previous:{title:"Annex M Summary of Documentation Requirements",permalink:"/docs/arm/AA-M"},next:{title:"M.2  Implementation-Defined Characteristics",permalink:"/docs/arm/AA-M.2"}},l={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"m1--specific-documentation-requirements"},"M.1  Specific Documentation Requirements"),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"We're still working on the Reference manual output.  Internal links are broken,\nas are a bunch of other things.\nSee the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"},"tracking issue"))),(0,i.kt)("p",null,"{",(0,i.kt)("em",null,"AI12-0442-1"),"}"," In addition to implementation-defined characteristics, each Ada implementation is required to document various properties of the implementation: "),(0,i.kt)("p",null,(0,i.kt)("strong",null,"Ramification: "),"Most of the items in this list require documentation only for implementations that conform to Specialized Needs Annexes. "),(0,i.kt)("p",null,'The behavior of implementations in implementation-defined situations shall be documented - see M.2, "Implementation-Defined Characteristics" for a listing. See 1.1.1(77).'),(0,i.kt)("p",null,"The set of values that a user-defined Allocate procedure needs to accept for the Alignment parameter. How the standard storage pool is chosen, and how storage is allocated by standard storage pools. See 13.11(23)."),(0,i.kt)("p",null,"The algorithm used for random number generation, including a description of its period. See A.5.2(44)."),(0,i.kt)("p",null,"The minimum time interval between calls to the time-dependent Reset procedure that is guaranteed to initiate different random number sequences. See A.5.2(45)."),(0,i.kt)("p",null,"The conditions under which Io_Exceptions.Name_Error, Io_Exceptions.Use_Error, and Io_Exceptions.Device_Error are propagated. See A.13(15)."),(0,i.kt)("p",null,"The behavior of package Environment_Variables when environment variables are changed by external mechanisms. See A.17(30/2)."),(0,i.kt)("p",null,"The overhead of calling machine-code or intrinsic subprograms. See C.1(6)."),(0,i.kt)("p",null,"The types and attributes used in machine code insertions. See C.1(7)."),(0,i.kt)("p",null,"The subprogram calling conventions for all supported convention identifiers. See C.1(8/3)."),(0,i.kt)("p",null,"The mapping between the Link_Name or Ada designator and the external link name. See C.1(9)."),(0,i.kt)("p",null,"The treatment of interrupts. See C.3(22)."),(0,i.kt)("p",null,"The metrics for interrupt handlers. See C.3.1(16)."),(0,i.kt)("p",null,"If the Ceiling_Locking policy is in effect, the default ceiling priority for a protected object that specifies an interrupt handler aspect. See C.3.2(24/5)."),(0,i.kt)("p",null,"Any circumstances when the elaboration of a preelaborated package causes code to be executed. See C.4(12)."),(0,i.kt)("p",null,"Whether a partition can be restarted without reloading. See C.4(13)."),(0,i.kt)("p",null,"The effect of calling Current_Task from an entry body or interrupt handler. See C.7.1(19)."),(0,i.kt)("p",null,"For package Task_Attributes, limits on the number and size of task attributes, and how to configure any limits. See C.7.2(19)."),(0,i.kt)("p",null,"The metrics for the Task_Attributes package. See C.7.2(27)."),(0,i.kt)("p",null,"The details of the configuration used to generate the values of all metrics. See D(2)."),(0,i.kt)("p",null,"The maximum priority inversion a user task can experience from the implementation. See D.2.3(12/2)."),(0,i.kt)("p",null,"The amount of time that a task can be preempted for processing on behalf of lower-priority tasks. See D.2.3(13/2)."),(0,i.kt)("p",null,"The quantum values supported for round robin dispatching. See D.2.5(16/2)."),(0,i.kt)("p",null,"The accuracy of the detection of the exhaustion of the budget of a task for round robin dispatching. See D.2.5(17/2)."),(0,i.kt)("p",null,"Any conditions that cause the completion of the setting of the deadline of a task to be delayed for a multiprocessor. See D.2.6(32/2)."),(0,i.kt)("p",null,"Any conditions that cause the completion of the setting of the priority of a task to be delayed for a multiprocessor. See D.5.1(12.1/2)."),(0,i.kt)("p",null,"The metrics for Set_Priority. See D.5.1(14)."),(0,i.kt)("p",null,"The metrics for setting the priority of a protected object. See D.5.2(10)."),(0,i.kt)("p",null,"On a multiprocessor, any conditions that cause the completion of an aborted construct to be delayed later than what is specified for a single processor. See D.6(3)."),(0,i.kt)("p",null,"The metrics for aborts. See D.6(8)."),(0,i.kt)("p",null,"The values of Time_First, Time_Last, Time_Span_First, Time_Span_Last, Time_Span_Unit, and Tick for package Real_Time. See D.8(33)."),(0,i.kt)("p",null,"The properties of the underlying time base used in package Real_Time. See D.8(34)."),(0,i.kt)("p",null,"Any synchronization of package Real_Time with external time references. See D.8(35)."),(0,i.kt)("p",null,"Any aspects of the external environment that can interfere with package Real_Time. See D.8(36/5)."),(0,i.kt)("p",null,"The metrics for package Real_Time. See D.8(45)."),(0,i.kt)("p",null,"The minimum value of the delay expression of a ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"./AA-9.6#S0268"},"delay_relative_statement"))," that causes a task to actually be blocked. See D.9(7)."),(0,i.kt)("p",null,"The minimum difference between the value of the delay expression of a ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"./AA-9.6#S0267"},"delay_until_statement"))," and the value of Real_Time.Clock, that causes the task to actually be blocked. See D.9(8)."),(0,i.kt)("p",null,"The metrics for delay statements. See D.9(13)."),(0,i.kt)("p",null,"The upper bound on the duration of interrupt blocking caused by the implementation. See D.12(5)."),(0,i.kt)("p",null,"The metrics for entry-less protected objects. See D.12(12)."),(0,i.kt)("p",null,"The values of CPU_Time_First, CPU_Time_Last, CPU_Time_Unit, and CPU_Tick of package Execution_Time. See D.14(21/2)."),(0,i.kt)("p",null,"The properties of the mechanism used to implement package Execution_Time, including the values of the constants defined in the package. See D.14(22/2)."),(0,i.kt)("p",null,"The metrics for execution time. See D.14(27)."),(0,i.kt)("p",null,"The metrics for timing events. See D.15(24)."),(0,i.kt)("p",null,"The processor(s) on which the clock interrupt is handled; the processors on which each Interrupt_Id can be handled. See D.16.1(32)."),(0,i.kt)("p",null,"Whether the RPC-receiver is invoked from concurrent tasks, and if so, the number of such tasks. See E.5(25)."),(0,i.kt)("p",null,"Any techniques used to reduce cancellation errors in Numerics.Generic_Real_Arrays shall be documented. See G.3.1(86/2)."),(0,i.kt)("p",null,"Any techniques used to reduce cancellation errors in Numerics.Generic_Complex_Arrays shall be documented. See G.3.2(155/2)."),(0,i.kt)("p",null,"If a ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"./AA-2.8#S0019"},"pragma"))," Normalize_Scalars applies, the implicit initial values of scalar subtypes shall be documented. Such a value should be an invalid representation when possible; any cases when is it not shall be documented. See H.1(5/2)."),(0,i.kt)("p",null,"The range of effects for each bounded error and each unspecified effect. If the effects of a given erroneous construct are constrained, the constraints shall be documented. See H.2(1)."),(0,i.kt)("p",null,"For each inspection point, a mapping between each inspectable object and the machine resources where the object's value can be obtained shall be provided. See H.3.2(8)."),(0,i.kt)("p",null,"If a pragma Restrictions(No_Exceptions) is specified, the effects of all constructs where language-defined checks are still performed. See H.4(25)."),(0,i.kt)("p",null,"The interrupts to which a task entry may be attached. See J.7.1(12)."),(0,i.kt)("p",null,"The type of entry call invoked for an interrupt entry. See J.7.1(13)."))}p.isMDXComponent=!0}}]);