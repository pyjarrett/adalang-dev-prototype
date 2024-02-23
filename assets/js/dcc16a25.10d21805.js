"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[572],{62517:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>m,contentTitle:()=>h,default:()=>x,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var s=n(74848),a=n(28453),t=n(13842),r=n(91435),o=(n(21432),n(79162)),c=n(34421);const l={sidebar_position:188},h="H.3 Reviewable Object Code",d={id:"arm/AA-H/AA-H.3",title:"H.3 Reviewable Object Code",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-H/AA-H.3.mdx",sourceDirName:"arm/AA-H",slug:"/arm/AA-H/AA-H.3",permalink:"/docs/arm/AA-H/AA-H.3",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:188,frontMatter:{sidebar_position:188},sidebar:"referenceManualSidebar",previous:{title:"H.2 Documentation of Implementation Decisions",permalink:"/docs/arm/AA-H/AA-H.2"},next:{title:"H.4 High Integrity Restrictions",permalink:"/docs/arm/AA-H/AA-H.4"}},m={},p=[{value:"H.3.1  Pragma Reviewable",id:"h31--pragma-reviewable",level:2},{value:"Syntax",id:"syntax",level:4},{value:"Post-Compilation Rules",id:"post-compilation-rules",level:4},{value:"Implementation Requirements",id:"implementation-requirements",level:4},{value:"Implementation Advice",id:"implementation-advice",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4},{value:"H.3.2  Pragma Inspection_Point",id:"h32--pragma-inspection_point",level:2},{value:"Syntax",id:"syntax-1",level:4},{value:"Legality Rules",id:"legality-rules",level:4},{value:"Static Semantics",id:"static-semantics",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics",level:4},{value:"Implementation Requirements",id:"implementation-requirements-1",level:4},{value:"Documentation Requirements",id:"documentation-requirements",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95-1",level:4}];function j(e){const i={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h4:"h4",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"h3-reviewable-object-code",children:"H.3 Reviewable Object Code"}),"\n",(0,s.jsx)(i.admonition,{type:"danger",children:(0,s.jsxs)(i.p,{children:["This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,s.jsx)(i.a,{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20",children:"tracking issue"})]})}),"\n","\n","\n",(0,s.jsx)(o.A,{children:"1"}),"\n",(0,s.jsxs)("p",{children:["Object code review and validation are supported by pragmas Reviewable and Inspection","_","Point. ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)("a",{id:"Subclause_H.3.1"}),"\n",(0,s.jsx)(i.h2,{id:"h31--pragma-reviewable",children:"H.3.1  Pragma Reviewable"}),"\n",(0,s.jsx)(o.A,{children:"1_H.3.1"}),"\n",(0,s.jsxs)("p",{children:["This pragma directs the implementation to provide information to facilitate analysis and review of a program's object code, in particular to allow determination of execution time and storage usage and to identify the correspondence between the source and object programs. ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(o.A,{children:"1.a_H.3.1"}),(0,s.jsx)(t.A,{type:"aarm",aarm:"discussion",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)("strong",{}),"Since the purpose of this pragma is to provide information to the user, it is hard to objectively test for conformity. In practice, users want the information in an easily understood and convenient form, but neither of these properties can be easily measured.",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsx)(i.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(o.A,{children:"2_H.3.1"}),"\n",(0,s.jsxs)("p",{class:"Indented2",children:["The form of a ",(0,s.jsx)("code",{children:(0,s.jsx)("a",{href:"/docs/arm/AA-2/AA-2.8#S0019",children:"pragma"})})," Reviewable is as follows: ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(o.A,{children:"3_H.3.1"}),"\n",(0,s.jsxs)("p",{class:"Indented2",children:["  ",(0,s.jsx)("strong",{children:"pragma"})," Reviewable; ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(i.h4,{id:"post-compilation-rules",children:"Post-Compilation Rules"}),"\n",(0,s.jsx)(o.A,{children:"4_H.3.1"}),"\n",(0,s.jsxs)("p",{children:["Pragma Reviewable is a configuration pragma. It applies to all ",(0,s.jsx)("code",{children:(0,s.jsx)("a",{href:"/docs/arm/AA-10/AA-10.1#S0286",children:"compilation_unit"})}),"s included in a partition. ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(i.h4,{id:"implementation-requirements",children:"Implementation Requirements"}),"\n",(0,s.jsx)(o.A,{children:"5_H.3.1"}),"\n",(0,s.jsxs)("p",{children:["The implementation shall provide the following information for any compilation unit to which such a pragma applies: ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(o.A,{children:"5.a_H.3.1"}),(0,s.jsx)(t.A,{type:"aarm",aarm:"discussion",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)("strong",{}),"The list of requirements can be checked for, even if issues like intelligibility are not addressed.",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsx)(o.A,{children:"6_H.3.1"}),"\n",(0,s.jsx)("ul",{children:(0,s.jsxs)("li",{children:["Where compiler-generated runtime checks remain; ",(0,s.jsx)("br",{})]})}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(o.A,{children:"6.a_H.3.1"}),(0,s.jsx)(t.A,{type:"aarm",aarm:"discussion",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)("strong",{}),"A constraint check which is implemented via a check on the upper and lower bound should clearly be indicated. If a check is implicit in the form of machine instructions used (such an overflow checking), this should also be covered by the documentation. It is particularly important to cover those checks which are not obvious from the source code, such as that for stack overflow.",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsx)(o.A,{children:"7_H.3.1"}),"\n",(0,s.jsx)("ul",{children:(0,s.jsxs)("li",{children:["An identification of any construct with a language-defined check that is recognized prior to run time as certain to fail if executed (even if the generation of runtime checks has been suppressed); ",(0,s.jsx)("br",{})]})}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(o.A,{children:"7.a_H.3.1"}),(0,s.jsx)(t.A,{type:"aarm",aarm:"discussion",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)("strong",{}),"In this case, if the compiler determines that a check must fail, the user should be informed of this. However, since it is not in general possible to know what the compiler will detect, it is not easy to test for this. In practice, it is thought that compilers claiming conformity to this Annex will perform significant optimizations and therefore ",(0,s.jsx)("em",{children:"will"})," detect such situations. Of course, such events could well indicate a programmer error.",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsx)(o.A,{children:"8/2_H.3.1"}),"\n",(0,s.jsx)(c.A,{items:["AI95-00209-01"]}),"\n",(0,s.jsx)("ul",{children:(0,s.jsxs)("li",{children:["For each read of a scalar object, an identification of the read as either \u201cknown to be initialized\u201d, or \u201cpossibly uninitialized\u201d, independent of whether pragma Normalize","_","Scalars applies; ",(0,s.jsx)("br",{})]})}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(o.A,{children:"8.a_H.3.1"}),(0,s.jsx)(t.A,{type:"aarm",aarm:"discussion",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)("strong",{}),"This issue again raises the question as to what the compiler has determined. A lazy implementation could clearly mark all scalars as \u201cpossibly uninitialized\u201d, but this would be very unhelpful to the user. It should be possible to analyze a range of scalar uses and note the percentage in each class. Note that an access marked \u201cknown to be initialized\u201d does not imply that the value is in range, since the initialization could be from an (erroneous) call of unchecked conversion, or by means external to the Ada program.",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsx)(o.A,{children:"9_H.3.1"}),"\n",(0,s.jsx)("ul",{children:(0,s.jsxs)("li",{children:["Where run-time support routines are implicitly invoked; ",(0,s.jsx)("br",{})]})}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(o.A,{children:"9.a_H.3.1"}),(0,s.jsx)(t.A,{type:"aarm",aarm:"discussion",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)("strong",{}),"Validators will need to know the calls invoked in order to check for the correct functionality. For instance, for some safety applications, it may be necessary to ensure that certain sections of code can execute in a particular time.",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsx)(o.A,{children:"10_H.3.1"}),"\n",(0,s.jsx)("ul",{children:(0,s.jsxs)("li",{children:["An object code listing, including: ",(0,s.jsx)("br",{})]})}),"\n",(0,s.jsx)(o.A,{children:"11_H.3.1"}),"\n",(0,s.jsx)("ul",{children:(0,s.jsxs)("li",{children:["Machine instructions, with relative offsets; ",(0,s.jsx)("br",{})]})}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(o.A,{children:"11.a_H.3.1"}),(0,s.jsx)(t.A,{type:"aarm",aarm:"discussion",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)("strong",{}),"The machine instructions should be in a format that is easily understood, such as the symbolic format of the assembler. The relative offsets are needed in numeric format, to check any alignment restrictions that the architecture might impose.",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsx)(o.A,{children:"12_H.3.1"}),"\n",(0,s.jsx)("ul",{children:(0,s.jsxs)("li",{children:["Where each data object is stored during its lifetime; ",(0,s.jsx)("br",{})]})}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(o.A,{children:"12.a_H.3.1"}),(0,s.jsx)(t.A,{type:"aarm",aarm:"discussion",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)("strong",{}),"This requirement implies that if the optimizer assigns a variable to a register, this needs to be evident.",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsx)(o.A,{children:"13_H.3.1"}),"\n",(0,s.jsx)("ul",{children:(0,s.jsxs)("li",{children:["Correspondence with the source program, including an identification of the code produced per declaration and per statement. ",(0,s.jsx)("br",{})]})}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(o.A,{children:"13.a_H.3.1"}),(0,s.jsx)(t.A,{type:"aarm",aarm:"discussion",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)("strong",{}),"This correspondence will be quite complex when extensive optimization is performed. In particular, address calculation to access some data structures could be moved from the actual access. However, when all the machine code arising from a statement or declaration is in one basic block, this must be indicated by the implementation.",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsx)(o.A,{children:"14_H.3.1"}),"\n",(0,s.jsx)("ul",{children:(0,s.jsxs)("li",{children:["An identification of each construct for which the implementation detects the possibility of erroneous execution; ",(0,s.jsx)("br",{})]})}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(o.A,{children:"14.a_H.3.1"}),(0,s.jsx)(t.A,{type:"aarm",aarm:"discussion",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)("strong",{}),"This requirement is quite vague. In general, it is hard for compilers to detect erroneous execution and therefore the requirement will be rarely invoked. However, if the pragma Suppress is used and the compiler can show that a predefined exception will be raised, then such an identification would be useful.",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsx)(o.A,{children:"15_H.3.1"}),"\n",(0,s.jsx)("ul",{children:(0,s.jsxs)("li",{children:["For each subprogram, block, task, or other construct implemented by reserving and subsequently freeing an area on a run-time stack, an identification of the length of the fixed-size portion of the area and an indication of whether the non-fixed size portion is reserved on the stack or in a dynamically-managed storage region. ",(0,s.jsx)("br",{})]})}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(o.A,{children:"15.a_H.3.1"}),(0,s.jsx)(t.A,{type:"aarm",aarm:"discussion",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)("strong",{}),"This requirement is vital for those requiring to show that the storage available to a program is sufficient. This is crucial in those cases in which the internal checks for stack overflow are suppressed (perhaps by ",(0,s.jsx)("strong",{children:"pragma"})," Restrictions(No","_","Exceptions)). ",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsx)(o.A,{children:"16_H.3.1"}),"\n",(0,s.jsxs)("p",{children:["The implementation shall provide the following information for any partition to which the pragma applies: ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(o.A,{children:"17_H.3.1"}),"\n",(0,s.jsx)("ul",{children:(0,s.jsxs)("li",{children:["An object code listing of the entire partition, including initialization and finalization code as well as run-time system components, and with an identification of those instructions and data that will be relocated at load time; ",(0,s.jsx)("br",{})]})}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(o.A,{children:"17.a_H.3.1"}),(0,s.jsx)(t.A,{type:"aarm",aarm:"discussion",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)("strong",{}),"The object code listing should enable a validator to estimate upper bounds for the time taken by critical parts of a program. Similarly, by an analysis of the entire partition, it should be possible to ensure that the storage requirements are suitably bounded, assuming that the partition was written in an appropriate manner.",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsx)(o.A,{children:"18_H.3.1"}),"\n",(0,s.jsx)("ul",{children:(0,s.jsxs)("li",{children:["A description of the run-time model relevant to the partition. ",(0,s.jsx)("br",{})]})}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(o.A,{children:"18.a_H.3.1"}),(0,s.jsx)(t.A,{type:"aarm",aarm:"discussion",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)("strong",{}),"For example, a description of the storage model is vital, since the Ada language does not explicitly define such a model. ",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsx)(o.A,{children:"18.1_H.3.1"}),"\n",(0,s.jsxs)("p",{children:["The implementation shall provide control- and data-flow information, both within each compilation unit and across the compilation units of the partition. ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(o.A,{children:"18.b_H.3.1"}),(0,s.jsx)(t.A,{type:"aarm",aarm:"discussion",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)("strong",{}),"This requirement is quite vague, since it is unclear what control and data flow information the compiler has produced. It is really a plea not to throw away information that could be useful to the validator. Note that the data flow information is relevant to the detection of \u201cpossibly uninitialized\u201d objects referred to above. ",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsx)(i.h4,{id:"implementation-advice",children:"Implementation Advice"}),"\n",(0,s.jsx)(o.A,{children:"19_H.3.1"}),"\n",(0,s.jsxs)("p",{children:["The implementation should provide the above information in both a human-readable and machine-readable form, and should document the latter so as to ease further processing by automated tools. ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(o.A,{children:"19.a/2_H.3.1"}),(0,s.jsx)(t.A,{type:"aarm",aarm:"implementation-advice",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)("strong",{}),"The information produced by ",(0,s.jsx)("code",{children:(0,s.jsx)("a",{href:"/docs/arm/AA-2/AA-2.8#S0019",children:"pragma"})})," Reviewable should be provided in both a human-readable and machine-readable form, and the latter form should be documented.",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsx)(o.A,{children:"20_H.3.1"}),"\n",(0,s.jsxs)("p",{children:["Object code listings should be provided both in a symbolic format and also in an appropriate numeric format (such as hexadecimal or octal). ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(o.A,{children:"20.a/2_H.3.1"}),(0,s.jsx)(t.A,{type:"aarm",aarm:"implementation-advice",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)("strong",{}),"Object code listings should be provided both in a symbolic format and in a numeric format.",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(o.A,{children:"20.b_H.3.1"}),(0,s.jsx)(t.A,{type:"aarm",aarm:"reason",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)("strong",{}),"This is to enable other tools to perform any analysis that the user needed to aid validation. The format should be in some agreed form.",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(o.A,{children:"21_H.3.1"}),(0,s.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,s.jsxs)(i.p,{children:["NOTE   The order of elaboration of library units will be documented even in the absence of ",(0,s.jsx)("code",{children:(0,s.jsx)("a",{href:"/docs/arm/AA-2/AA-2.8#S0019",children:"pragma"})})," Reviewable (see ",(0,s.jsx)("a",{href:"/docs/arm/AA-10/AA-10.2",children:"10.2"}),"). ",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(o.A,{children:"21.a_H.3.1"}),(0,s.jsx)(t.A,{type:"aarm",aarm:"discussion",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)("strong",{}),"There might be some interactions between pragma Reviewable and compiler optimizations. For example, an implementation may disable some optimizations when pragma Reviewable is in force if it would be overly complicated to provide the detailed information to allow review of the optimized object code. See also ",(0,s.jsx)("code",{children:(0,s.jsx)("a",{href:"/docs/arm/AA-2/AA-2.8#S0019",children:"pragma"})})," Optimize (",(0,s.jsx)("a",{href:"/docs/arm/AA-2/AA-2.8",children:"2.8"}),"). ",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsx)(r.A,{children:(0,s.jsx)(i.h4,{id:"wording-changes-from-ada-95",children:"Wording Changes from Ada 95"})}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(o.A,{children:"21.b/2_H.3.1"}),(0,s.jsx)(c.A,{items:["AI95-00209-01"]}),(0,s.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,s.jsxs)(i.p,{children:["The wording was clarified that pragma Reviewable applies to each read of an object, as it makes no sense to talk about the state of an object that will immediately be overwritten. ",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsx)("a",{id:"Subclause_H.3.2"}),"\n",(0,s.jsx)(i.h2,{id:"h32--pragma-inspection_point",children:"H.3.2  Pragma Inspection_Point"}),"\n",(0,s.jsx)(o.A,{children:"1_H.3.2"}),"\n",(0,s.jsxs)("p",{children:["An occurrence of a pragma Inspection","_","Point identifies a set of objects each of whose values is to be available at the point(s) during program execution corresponding to the position of the pragma in the compilation unit. The purpose of such a pragma is to facilitate code validation. ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(o.A,{children:"1.a_H.3.2"}),(0,s.jsx)(t.A,{type:"aarm",aarm:"discussion",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)("strong",{}),"Inspection points are a high level equivalent of break points used by debuggers.",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsx)(i.h4,{id:"syntax-1",children:"Syntax"}),"\n",(0,s.jsx)(o.A,{children:"2_H.3.2"}),"\n",(0,s.jsxs)("p",{class:"Indented2",children:["The form of a ",(0,s.jsx)("code",{children:(0,s.jsx)("a",{href:"/docs/arm/AA-2/AA-2.8#S0019",children:"pragma"})})," Inspection","_","Point is as follows: ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(o.A,{children:"3_H.3.2"}),"\n",(0,s.jsxs)("p",{class:"Indented2",children:["  ",(0,s.jsx)("strong",{children:"pragma"})," Inspection","_","Point[(",(0,s.jsxs)("em",{children:["object","_"]}),(0,s.jsx)("code",{children:(0,s.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#S0091",children:"name"})})," ","{",", ",(0,s.jsxs)("em",{children:["object","_"]}),(0,s.jsx)("code",{children:(0,s.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#S0091",children:"name"})}),"}",")]; ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(i.h4,{id:"legality-rules",children:"Legality Rules"}),"\n",(0,s.jsx)(o.A,{children:"4_H.3.2"}),"\n",(0,s.jsxs)("p",{children:["A pragma Inspection","_","Point is allowed wherever a ",(0,s.jsx)("code",{children:(0,s.jsx)("a",{href:"/docs/arm/AA-3/AA-3.11#S0087",children:"declarative_item"})})," or ",(0,s.jsx)("code",{children:(0,s.jsx)("a",{href:"/docs/arm/AA-5/AA-5.1#S0167",children:"statement"})})," is allowed. Each ",(0,s.jsxs)("em",{children:["object","_"]}),"name shall statically denote the declaration of an object. ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(o.A,{children:"4.a_H.3.2"}),(0,s.jsx)(t.A,{type:"aarm",aarm:"discussion",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)("strong",{}),"The static denotation is required, since no dynamic evaluation of a name is involved in this pragma.",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsx)(i.h4,{id:"static-semantics",children:"Static Semantics"}),"\n",(0,s.jsx)(o.A,{children:"5/2_H.3.2"}),"\n",(0,s.jsx)(c.A,{items:["AI95-00207-01","AI95-00434-01"]}),"\n",(0,s.jsxs)("p",{children:["{",(0,s.jsx)("em",{children:"8652/0093"}),"}"," An ",(0,s.jsx)("em",{children:"inspection point"})," is a point in the object code corresponding to the occurrence of a pragma Inspection","_","Point in the compilation unit. An object is ",(0,s.jsx)("em",{children:"inspectable"})," at an inspection point if the corresponding pragma Inspection","_","Point either has an argument denoting that object, or has no arguments and the declaration of the object is visible at the inspection point. ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(o.A,{children:"5.a_H.3.2"}),(0,s.jsx)(t.A,{type:"aarm",aarm:"ramification",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)("strong",{}),"If a pragma Inspection","_","Point is in an in-lined subprogram, there might be numerous inspection points in the object code corresponding to the single occurrence of the pragma in the source; similar considerations apply if such a pragma is in a generic, or in a loop that has been \u201cunrolled\u201d by an optimizer.",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(o.A,{children:"5.a.1/1_H.3.2"}),(0,s.jsx)(c.A,{items:["AI95-00207-01"]}),(0,s.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,s.jsxs)(i.p,{children:["{",(0,s.jsx)("em",{children:"8652/0093"}),"}"," The short form of the pragma is a convenient shorthand for listing all objects which could be explicitly made inspectable by the long form of the pragma; thus only visible objects are made inspectable by it. Objects that are not visible at the point of the pragma are not made inspectable by the short form pragma. This is necessary so that implementations need not keep information about (or prevent optimizations on) a unit simply because some other unit ",(0,s.jsx)("em",{children:"might"})," contain a short form Inspection","_","Point pragma. ",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(o.A,{children:"5.b/1_H.3.2"}),(0,s.jsx)(c.A,{items:["AI95-00207-01"]}),(0,s.jsx)(t.A,{type:"aarm",aarm:"discussion",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)("strong",{}),"{",(0,s.jsx)("em",{children:"8652/0093"}),"}"," If the short form of the pragma is used, then all visible objects are inspectable. This implies that global objects from other compilation units are inspectable. A good interactive debugging system could provide information similar to a post-mortem dump at such inspection points. The annex does not require that any inspection facility is provided, merely that the information is available to understand the state of the machine at those points. ",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsx)(i.h4,{id:"dynamic-semantics",children:"Dynamic Semantics"}),"\n",(0,s.jsx)(o.A,{children:"6_H.3.2"}),"\n",(0,s.jsxs)("p",{children:["Execution of a pragma Inspection","_","Point has no effect. ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(o.A,{children:"6.a/2_H.3.2"}),(0,s.jsx)(c.A,{items:["AI95-00114-01"]}),(0,s.jsx)(t.A,{type:"aarm",aarm:"discussion",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)("strong",{}),"Although an inspection point has no (semantic) effect, the removal or adding of a new point could change the machine code generated by the compiler.",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsx)(i.h4,{id:"implementation-requirements-1",children:"Implementation Requirements"}),"\n",(0,s.jsx)(o.A,{children:"7_H.3.2"}),"\n",(0,s.jsxs)("p",{children:["Reaching an inspection point is an external interaction with respect to the values of the inspectable objects at that point (see ",(0,s.jsx)("a",{href:"/docs/arm/AA-1/AA-1.1#Subclause_1.1.3",children:"1.1.3"}),"). ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(o.A,{children:"7.a_H.3.2"}),(0,s.jsx)(t.A,{type:"aarm",aarm:"ramification",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)("strong",{}),"The compiler is inhibited from moving an assignment to an inspectable variable past an inspection point for that variable. On the other hand, the evaluation of an expression that might raise an exception may be moved past an inspection point (see ",(0,s.jsx)("a",{href:"/docs/arm/AA-11/AA-11.6",children:"11.6"}),").",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsx)(i.h4,{id:"documentation-requirements",children:"Documentation Requirements"}),"\n",(0,s.jsx)(o.A,{children:"8_H.3.2"}),"\n",(0,s.jsxs)("p",{children:["For each inspection point, the implementation shall identify a mapping between each inspectable object and the machine resources (such as memory locations or registers) from which the object's value can be obtained. ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(o.A,{children:"8.a/2_H.3.2"}),(0,s.jsxs)(t.A,{type:"aarm",aarm:"note",children:[(0,s.jsx)("em",{children:"This paragraph was deleted."}),(0,s.jsx)("br",{})]})]}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(o.A,{children:"8.b/2_H.3.2"}),(0,s.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)("strong",{children:"Documentation Requirement: "}),"For each inspection point, a mapping between each inspectable object and the machine resources where the object's value can be obtained shall be provided.",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(o.A,{children:"9/5_H.3.2"}),(0,s.jsx)(c.A,{items:["AI95-00209-01","AI12-0447-1"]}),(0,s.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,s.jsxs)(i.p,{children:["NOTE 1   Because reaching an inspection point is considered an external interaction relative to the values of the inspectable variables, the implementation cannot perform \u201cdead store elimination\u201d on the last assignment to such a variable prior to an inspection point. Thus an inspection point has the effect of an implicit read of each of its inspectable objects.",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(o.A,{children:"10_H.3.2"}),(0,s.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,s.jsxs)(i.p,{children:["NOTE 2   Inspection points are useful in maintaining a correspondence between the state of the program in source code terms, and the machine state during the program's execution. Assertions about the values of program objects can be tested in machine terms at inspection points. Object code between inspection points can be processed by automated tools to verify programs mechanically. ",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(o.A,{children:"10.a_H.3.2"}),(0,s.jsx)(t.A,{type:"aarm",aarm:"discussion",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)("strong",{}),"Although it is not a requirement of the annex, it would be useful if the state of the stack and heap could be interrogated. This would allow users to check that a program did not have a `storage leak'.",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(o.A,{children:"11/5_H.3.2"}),(0,s.jsx)(c.A,{items:["AI12-0447-1"]}),(0,s.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,s.jsxs)(i.p,{children:["NOTE 3   The identification of the mapping from source program objects to machine resources can be in the form of an annotated object listing, in human-readable or tool-processable form. ",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(o.A,{children:"11.a_H.3.2"}),(0,s.jsx)(t.A,{type:"aarm",aarm:"discussion",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)("strong",{}),"In principle, it is easy to check an implementation for this pragma, since one merely needs to check the content of objects against those values known from the source listing. In practice, one needs a tool similar to an interactive debugger to perform the check.",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsx)(r.A,{children:(0,s.jsx)(i.h4,{id:"wording-changes-from-ada-95-1",children:"Wording Changes from Ada 95"})}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(o.A,{children:"11.b/2_H.3.2"}),(0,s.jsx)(c.A,{items:["AI95-00207-01"]}),(0,s.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,s.jsxs)(i.p,{children:["{",(0,s.jsx)("em",{children:"8652/0093"}),"}"," ",(0,s.jsx)("strong",{children:"Corrigendum:"})," Corrected the definition of the Inspection","_","Point pragma to apply to only variables visible at the point of the pragma. Otherwise, the compiler would have to assume that some other code somewhere could have a pragma Inspection","_","Point, preventing many optimizations (such as unused object elimination). ",(0,s.jsx)("br",{})]})})]})]})}function x(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}}}]);