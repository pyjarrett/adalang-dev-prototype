"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[4268],{7107:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>j,contentTitle:()=>x,default:()=>m,frontMatter:()=>h,metadata:()=>i,toc:()=>p});const i=JSON.parse('{"id":"arm/AA-H/AA-H.7","title":"H.7. Extensions to Global and Global\'Class Aspects","description":"This Reference Manual output has not been verified,","source":"@site/docs/arm/AA-H/AA-H.7.mdx","sourceDirName":"arm/AA-H","slug":"/arm/AA-H/AA-H.7","permalink":"/docs/arm/AA-H/AA-H.7","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":192,"frontMatter":{"sidebar_position":192},"sidebar":"referenceManualSidebar","previous":{"title":"H.6. Pragma Partition_Elaboration_Policy","permalink":"/docs/arm/AA-H/AA-H.6"},"next":{"title":"Annex J. Obsolescent Features","permalink":"/docs/arm/AA-J/"}}');var n=a(4848),r=a(8453),t=a(3204),o=a(4220),c=a(8069),l=a(8011),d=a(6465);const h={sidebar_position:192},x="H.7. Extensions to Global and Global'Class Aspects",j={},p=[{value:"Syntax",id:"syntax",level:4},{value:"Name Resolution Rules",id:"name-resolution-rules",level:4},{value:"Static Semantics",id:"static-semantics",level:4},{value:"Legality Rules",id:"legality-rules",level:4},{value:"Extensions to Ada 2012",id:"extensions-to-ada-2012",level:4},{value:"H.7.1  The Use_Formal and Dispatching Aspects",id:"h71--the-use_formal-and-dispatching-aspects",level:2},{value:"Name Resolution Rules",id:"name-resolution-rules-1",level:4},{value:"Static Semantics",id:"static-semantics-1",level:4},{value:"Legality Rules",id:"legality-rules-1",level:4},{value:"Examples",id:"examples",level:4},{value:"Extensions to Ada 2012",id:"extensions-to-ada-2012-1",level:4}];function A(e){const s={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h4:"h4",header:"header",p:"p",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"h7-extensions-to-global-and-globalclass-aspects",children:"H.7. Extensions to Global and Global'Class Aspects"})}),"\n",(0,n.jsx)(s.admonition,{type:"danger",children:(0,n.jsxs)(s.p,{children:["This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,n.jsx)(s.a,{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20",children:"tracking issue"})]})}),"\n","\n",(0,n.jsx)(l.A,{children:"1/5"}),"\n",(0,n.jsx)(d.A,{items:["AI12-0079-3"]}),"\n",(0,n.jsxs)("p",{children:["In addition to the entities specified in ",(0,n.jsx)("a",{href:"/docs/arm/AA-6/AA-6.1#Subclause_6.1.2",children:"6.1.2"}),", the Global aspect may be specified for a subtype (including a formal subtype), formal package, formal subprogram, and formal object of an anonymous access-to-subprogram type. ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(s.h4,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(l.A,{children:"2/5"}),"\n",(0,n.jsx)(d.A,{items:["AI12-0079-3","AI12-0380-1"]}),"\n",(0,n.jsxs)("p",{class:"Indented2",children:["The following additional syntax is provided to override the mode of a formal parameter to reflect indirect effects on variables reachable from the formal parameter by one or more access-value dereferences:",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(l.A,{children:"3/5"}),"\n",(0,n.jsxs)(c.A,{children:[(0,n.jsxs)("code",{children:["extended","_","global","_","mode"]}),(0,n.jsx)("a",{id:"S0361"}),(0,n.jsx)("code",{children:" ::= "}),(0,n.jsx)("br",{}),(0,n.jsx)("b",{children:"overriding"}),(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-6/AA-6.1#S0212",children:"basic_global_mode"})}),(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(s.h4,{id:"name-resolution-rules",children:"Name Resolution Rules"}),"\n",(0,n.jsx)(l.A,{children:"4/5"}),"\n",(0,n.jsx)(d.A,{items:["AI12-0079-3"]}),"\n",(0,n.jsxs)("p",{children:["The ",(0,n.jsxs)("i",{children:["object","_"]}),(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#S0091",children:"name"})})," that is associated with an ",(0,n.jsx)("b",{children:"overriding"})," mode shall resolve to statically denote a formal object, or a formal parameter of the associated entity. ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(s.h4,{id:"static-semantics",children:"Static Semantics"}),"\n",(0,n.jsx)(l.A,{children:"5/5"}),"\n",(0,n.jsx)(d.A,{items:["AI12-0079-3"]}),"\n",(0,n.jsxs)("p",{children:["The presence of the reserved word ",(0,n.jsx)("b",{children:"overriding"})," in a global mode indicates that the specification is overriding the mode of a formal parameter with another mode to reflect the overall effect of an invocation of the callable entity on the state associated with the corresponding actual parameter.",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(l.A,{children:"6/5"}),"\n",(0,n.jsx)(d.A,{items:["AI12-0380-1"]}),"\n",(0,n.jsxs)("p",{children:["[As described in ",(0,n.jsx)("a",{href:"/docs/arm/AA-6/AA-6.1#Subclause_6.1.2",children:"6.1.2"}),", the following rules are defined in terms of operations that are performed by or on behalf of an entity.]",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(l.A,{children:"7/5"}),"\n",(0,n.jsx)(d.A,{items:["AI12-0079-3","AI12-0431-1","AI12-0439-1"]}),"\n",(0,n.jsxs)("p",{children:["The Global aspect for a subtype identifies the global variables that can be referenced during default initialization, adjustment as part of assignment, finalization of an object of the subtype, or conversion to the subtype, including the evaluation of any assertion expressions that apply. If not specified for the first subtype of a derived type, the aspect defaults to that of the ancestor subtype; if not specified for a nonderived composite first subtype the aspect defaults to that of the enclosing library unit; if not specified for a nonderived elementary first subtype (or scalar base subtype), the aspect defaults to ",(0,n.jsx)("b",{children:"null"})," in the absence of a predicate (or when the predicate is statically True), and to that of the enclosing library unit otherwise. If not specified for a nonfirst subtype ",(0,n.jsx)("i",{children:"S"}),", the Global aspect defaults to that of the subtype identified in the ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-3/AA-3.2#S0027",children:"subtype_indication"})})," defining ",(0,n.jsx)("i",{children:"S"}),".",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(l.A,{children:"8/5"}),"\n",(0,n.jsx)(d.A,{items:["AI12-0079-3"]}),"\n",(0,n.jsxs)("p",{children:["The Global'Class aspect may be specified for the first subtype of a tagged type ",(0,n.jsx)("i",{children:"T"}),", indicating an upper bound on the Global aspect of any descendant of ",(0,n.jsx)("i",{children:"T"}),". If not specified, it defaults to Unspecified. ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(s.h4,{id:"legality-rules",children:"Legality Rules"}),"\n",(0,n.jsx)(l.A,{children:"9/5"}),"\n",(0,n.jsx)(d.A,{items:["AI12-0079-3"]}),"\n",(0,n.jsxs)("p",{children:["For a tagged subtype ",(0,n.jsx)("i",{children:"T"}),", each mode of its Global aspect shall identify a subset of the variables identified either by the corresponding mode, or by the ",(0,n.jsx)("b",{children:"in out"})," mode, of the Global'Class aspect of the first subtype of any ancestor of ",(0,n.jsx)("i",{children:"T"}),". ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(o.A,{children:(0,n.jsx)(s.h4,{id:"extensions-to-ada-2012",children:"Extensions to Ada 2012"})}),"\n",(0,n.jsxs)(o.A,{children:[(0,n.jsx)(l.A,{children:"9.a/5"}),(0,n.jsx)(d.A,{items:["AI12-0079-3","AI12-0380-1"]}),(0,n.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(s.p,{children:["These extensions to the Global aspect are new. ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)("a",{id:"Subclause_H.7.1"}),"\n",(0,n.jsx)(s.h2,{id:"h71--the-use_formal-and-dispatching-aspects",children:"H.7.1  The Use_Formal and Dispatching Aspects"}),"\n",(0,n.jsx)(l.A,{children:"1/5_H.7.1"}),"\n",(0,n.jsx)(d.A,{items:["AI12-0380-1"]}),"\n",(0,n.jsxs)("p",{children:["The Use","_","Formal and Dispatching aspects are provided to more precisely describe the use of generic formal parameters and dispatching calls within the execution of an operation, enabling more precise checking of conformance with the Nonblocking and global aspects that apply at the point of invocation of the operation.",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(l.A,{children:"2/5_H.7.1"}),"\n",(0,n.jsx)(d.A,{items:["AI12-0079-3","AI12-0380-1"]}),"\n",(0,n.jsxs)("p",{children:["For any declaration within a generic unit for which a global or Nonblocking aspect may be specified, other than a ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-12/AA-12.1#S0314",children:"generic_formal_parameter_declaration"})}),", the following aspect may be specified to indicate which generic formal parameters are ",(0,n.jsx)("i",{children:"used"})," by the associated entity:",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(l.A,{children:"3/5_H.7.1"}),"\n",(0,n.jsx)(d.A,{items:["AI12-0380-1"]}),"\n",(0,n.jsxs)("dt",{children:[(0,n.jsx)("br",{}),"Use","_","Formal"]}),"\n",(0,n.jsx)("dl",{children:(0,n.jsxs)("dd",{children:["The aspect is specified with a ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-H/AA-H.7#S0362",children:"formal_parameter_set"})}),", with the following form:",(0,n.jsx)("br",{})]})}),"\n",(0,n.jsxs)(o.A,{children:[(0,n.jsx)(l.A,{children:"3.a/5_H.7.1"}),(0,n.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)("b",{children:"Aspect Description for "}),(0,n.jsxs)("b",{children:["Use","_","Formal: "]}),"Generic formal parameters used in the implementation of an entity.",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(l.A,{children:"4/5_H.7.1"}),"\n",(0,n.jsxs)("dl",{children:[(0,n.jsxs)("dd",{children:[(0,n.jsxs)("code",{children:["formal","_","parameter","_","set"]}),(0,n.jsx)("a",{id:"S0362"}),(0,n.jsx)("code",{children:" ::= "}),(0,n.jsx)("br",{}),"    ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-H/AA-H.7#S0363",children:"formal_group_designator"})}),(0,n.jsx)("br",{}),"  | ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-H/AA-H.7#S0364",children:"formal_parameter_name"})}),(0,n.jsx)("br",{}),"  | (",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-H/AA-H.7#S0364",children:"formal_parameter_name"})}),"{",", ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-H/AA-H.7#S0364",children:"formal_parameter_name"})}),"}",")",(0,n.jsx)("br",{})]}),(0,n.jsx)(l.A,{children:"5/5_H.7.1"}),(0,n.jsxs)("dd",{children:[(0,n.jsxs)("code",{children:["formal","_","group","_","designator"]}),(0,n.jsx)("a",{id:"S0363"}),(0,n.jsx)("code",{children:" ::= "}),(0,n.jsx)("b",{children:"null"})," | ",(0,n.jsx)("b",{children:"all"}),(0,n.jsx)("br",{})]}),(0,n.jsx)(l.A,{children:"6/5_H.7.1"}),(0,n.jsxs)("dd",{children:[(0,n.jsxs)("code",{children:["formal","_","parameter","_","name"]}),(0,n.jsx)("a",{id:"S0364"}),(0,n.jsx)("code",{children:" ::= "}),(0,n.jsx)("br",{}),"    ",(0,n.jsxs)("i",{children:["formal","_"]}),(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-3/AA-3.2#S0028",children:"subtype_mark"})}),(0,n.jsx)("br",{}),"  | ",(0,n.jsxs)("i",{children:["formal","_","subprogram","_"]}),(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#S0091",children:"name"})}),(0,n.jsx)("br",{}),"  | ",(0,n.jsxs)("i",{children:["formal","_","access","_","to","_","subprogram","_","object","_"]}),(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#S0091",children:"name"})}),(0,n.jsx)("br",{})]})]}),"\n",(0,n.jsx)(l.A,{children:"7/5_H.7.1"}),"\n",(0,n.jsx)(d.A,{items:["AI12-0079-3","AI12-0380-1"]}),"\n",(0,n.jsxs)("p",{children:["For any declaration for which a global or Nonblocking aspect may be specified, other than for a library package, a generic library package, or a generic formal, the following aspect may be specified:",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(l.A,{children:"8/5_H.7.1"}),"\n",(0,n.jsx)(d.A,{items:["AI12-0380-1"]}),"\n",(0,n.jsxs)("dt",{children:[(0,n.jsx)("br",{}),"Dispatching"]}),"\n",(0,n.jsx)("dl",{children:(0,n.jsxs)("dd",{children:[" The aspect is specified with a ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-H/AA-H.7#S0365",children:"dispatching_operation_set"})}),", with the following form:",(0,n.jsx)("br",{})]})}),"\n",(0,n.jsxs)(o.A,{children:[(0,n.jsx)(l.A,{children:"8.a/5_H.7.1"}),(0,n.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)("b",{children:"Aspect Description for "}),(0,n.jsx)("b",{children:"Dispatching: "}),"Generic formal parameters used in the implementation of an entity.",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(l.A,{children:"9/5_H.7.1"}),"\n",(0,n.jsxs)("dl",{children:[(0,n.jsxs)("dd",{children:[(0,n.jsxs)("code",{children:["dispatching","_","operation","_","set"]}),(0,n.jsx)("a",{id:"S0365"}),(0,n.jsx)("code",{children:" ::= "}),(0,n.jsx)("br",{}),"    ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-H/AA-H.7#S0366",children:"dispatching_operation_specifier"})}),(0,n.jsx)("br",{}),"  | (",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-H/AA-H.7#S0366",children:"dispatching_operation_specifier"})}),"{",", ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-H/AA-H.7#S0366",children:"dispatching_operation_specifier"})}),"}",")",(0,n.jsx)("br",{})]}),(0,n.jsx)(l.A,{children:"10/5_H.7.1"}),(0,n.jsxs)("dd",{children:[(0,n.jsxs)("code",{children:["dispatching","_","operation","_","specifier"]}),(0,n.jsx)("a",{id:"S0366"}),(0,n.jsx)("code",{children:" ::= "}),(0,n.jsx)("br",{}),"    ",(0,n.jsxs)("i",{children:["dispatching","_","operation","_"]}),(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#S0091",children:"name"})})," (",(0,n.jsxs)("i",{children:["object","_"]}),(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#S0091",children:"name"})}),")",(0,n.jsx)("br",{})]})]}),"\n",(0,n.jsx)(s.h4,{id:"name-resolution-rules-1",children:"Name Resolution Rules"}),"\n",(0,n.jsx)(l.A,{children:"11/5_H.7.1"}),"\n",(0,n.jsx)(d.A,{items:["AI12-0380-1"]}),"\n",(0,n.jsxs)("p",{children:["A ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-H/AA-H.7#S0364",children:"formal_parameter_name"})})," in a Use","_","Formal aspect shall resolve to statically denote a formal subtype, a formal subprogram, or a formal object of an anonymous access-to-subprogram type[ of an enclosing generic unit or visible formal package].",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(l.A,{children:"12/5_H.7.1"}),"\n",(0,n.jsx)(d.A,{items:["AI12-0380-1"]}),"\n",(0,n.jsxs)("p",{children:["The ",(0,n.jsxs)("i",{children:["object","_"]}),(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#S0091",children:"name"})})," of a ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-H/AA-H.7#S0366",children:"dispatching_operation_specifier"})})," shall resolve to statically name an object (including possibly a formal parameter) of a tagged class-wide type ",(0,n.jsx)("i",{children:"T"}),"'Class, or of an access type designating a tagged class-wide type ",(0,n.jsx)("i",{children:"T"}),"'Class; the ",(0,n.jsxs)("i",{children:["dispatching","_","operation","_"]}),(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#S0091",children:"name"})})," of the ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-H/AA-H.7#S0366",children:"dispatching_operation_specifier"})})," shall resolve to statically denote a dispatching operation associated with ",(0,n.jsx)("i",{children:"T"}),". ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(s.h4,{id:"static-semantics-1",children:"Static Semantics"}),"\n",(0,n.jsx)(l.A,{children:"13/5_H.7.1"}),"\n",(0,n.jsx)(d.A,{items:["AI12-0380-1","AI12-0439-1"]}),"\n",(0,n.jsxs)("p",{children:["The ",(0,n.jsx)("i",{children:"formal parameter set"})," is identified by a set of ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-H/AA-H.7#S0364",children:"formal_parameter_name"})}),"s. Alternatively, the reserved word ",(0,n.jsx)("b",{children:"null"})," may be used to indicate none of the generic formal parameters, or ",(0,n.jsx)("b",{children:"all"})," to indicate all of the generic formal parameters, of any enclosing generic unit (or visible formal package) can be used within the execution of the operation. If there is no formal parameter set specified for an entity declared within a generic unit, it defaults to ",(0,n.jsx)("b",{children:"all"}),".",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(l.A,{children:"14/5_H.7.1"}),"\n",(0,n.jsx)(d.A,{items:["AI12-0380-1","AI12-0404-1","AI12-0444-1"]}),"\n",(0,n.jsxs)("p",{children:["The ",(0,n.jsx)("i",{children:"dispatching operation set"})," is identified by a set of ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-H/AA-H.7#S0366",children:"dispatching_operation_specifier"})}),"s. It indicates that the Nonblocking and global effects of dispatching calls that match one of the specifiers, rather than being accounted for by the Nonblocking or global aspect, are instead to be accounted for by the invoker of the operation. A dispatching call matches a ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-H/AA-H.7#S0366",children:"dispatching_operation_specifier"})})," if the ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#S0091",children:"name"})})," or ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#S0093",children:"prefix"})})," of the call statically denotes the same operation(s) as that of the ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-H/AA-H.7#S0366",children:"dispatching_operation_specifier"})}),", and at least one of the objects controlling the call is denoted by, or designated by, a ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#S0091",children:"name"})})," that statically names the same object as that denoted by the ",(0,n.jsxs)("i",{children:["object","_"]}),(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#S0091",children:"name"})})," of the ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-H/AA-H.7#S0366",children:"dispatching_operation_specifier"})}),".",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(o.A,{children:[(0,n.jsx)(l.A,{children:"14.a/5_H.7.1"}),(0,n.jsx)(t.A,{type:"aarm",aarm:"ramification",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)("b",{}),'The object "controlling the call" is not necessarily a controlling parameter of the call if the call is a function with a controlling result or has parameters that is such a function. It is one of the objects that provide the dispatching tag used for the call; that could, for example, be a parameter of a function used as a parameter to the call, or an object being assigned to, or a parameter of an enclosing call. ',(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(l.A,{children:"15/5_H.7.1"}),"\n",(0,n.jsx)(d.A,{items:["AI12-0380-1","AI12-0404-1"]}),"\n",(0,n.jsxs)("p",{children:["In the absence of any ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-H/AA-H.7#S0366",children:"dispatching_operation_specifier"})}),"s, or if none of them match a dispatching call ",(0,n.jsx)("i",{children:"C"})," within an operation ",(0,n.jsx)("i",{children:"P"}),", Nonblocking and global aspects checks are performed at the point of the call ",(0,n.jsx)("i",{children:"C"})," within ",(0,n.jsx)("i",{children:"P"})," using the Nonblocking and Global'Class aspects that apply to the dispatching operation named in call ",(0,n.jsx)("i",{children:"C"}),". If there is a match, any global access or potential blocking within the subprogram body invoked by the call ",(0,n.jsx)("i",{children:"C"})," is ignored at the point of call within ",(0,n.jsx)("i",{children:"P"}),". Instead, when the operation ",(0,n.jsx)("i",{children:"P"})," itself is invoked, Nonblocking and global aspect checks are performed presuming each named dispatching operation is called at least once (with the named object controlling the call), but similarly ignoring those dispatching calls that would match a ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-H/AA-H.7#S0366",children:"dispatching_operation_specifier"})})," applicable at the point of invocation of ",(0,n.jsx)("i",{children:"P"}),".",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(s.h4,{id:"legality-rules-1",children:"Legality Rules"}),"\n",(0,n.jsx)(l.A,{children:"16/5_H.7.1"}),"\n",(0,n.jsx)(d.A,{items:["AI12-0380-1"]}),"\n",(0,n.jsxs)("p",{children:["Within an operation to which a Use","_","Formal aspect applies, if the formal parameter set is anything but ",(0,n.jsx)("b",{children:"all"}),", then the only generic formal subtypes that may be used, the only formal subprograms that may be called, and the only formal objects of an anonymous access-to-subprogram type that may be dereferenced as part of a call or passed as the actual for an access parameter, are those included in the formal parameter set.",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(l.A,{children:"17/5_H.7.1"}),"\n",(0,n.jsx)(d.A,{items:["AI12-0380-1"]}),"\n",(0,n.jsxs)("p",{children:["When an operation (or instance thereof) to which a Use","_","Formal aspect applies is invoked, Nonblocking and global aspect checks are performed presuming each generic formal parameter (or corresponding actual parameter) of the formal parameter set is used at least once. ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(s.h4,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(l.A,{children:"18/5_H.7.1"}),"\n",(0,n.jsx)(d.A,{items:["AI12-0430-1"]}),"\n",(0,n.jsxs)("p",{children:[(0,n.jsx)("i",{children:"An example of use of the Dispatching aspect:"})," ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(l.A,{children:"19/5_H.7.1"}),"\n",(0,n.jsx)(c.A,{language:"ada",children:(0,n.jsxs)(s.p,{children:["procedure My","_","Write(  --  see ",(0,n.jsx)("a",{href:"/docs/arm/AA-13/AA-13.13#Subclause_13.13.2",children:"13.13.2"}),"\n","   Stream : not null access Ada.Streams.Root","_","Stream","_","Type'Class;","\n","   Item   : My","_","Integer'Base)","\n","   with Dispatching =",">"," Write(Stream);","\n","for My","_","Integer'Write use My","_","Write;","\n"]})}),"\n",(0,n.jsx)(l.A,{children:"20/5_H.7.1"}),"\n",(0,n.jsx)(d.A,{items:["AI12-0430-1"]}),"\n",(0,n.jsxs)("p",{children:[(0,n.jsxs)("i",{children:["For examples of use of the Use","_","Formal aspect, see the Element functions of Hashed","_","Sets in ",(0,n.jsx)("a",{href:"/docs/arm/AA-A/AA-A.18#Subclause_A.18.8",children:"A.18.8"}),"."]}),(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(o.A,{children:(0,n.jsx)(s.h4,{id:"extensions-to-ada-2012-1",children:"Extensions to Ada 2012"})}),"\n",(0,n.jsxs)(o.A,{children:[(0,n.jsx)(l.A,{children:"20.a/5_H.7.1"}),(0,n.jsx)(d.A,{items:["AI12-0079-3"]}),(0,n.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(s.p,{children:["The aspects Use","_","Formal and Dispatching are new. ",(0,n.jsx)("br",{})]})})]})]})}function m(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(A,{...e})}):A(e)}}}]);