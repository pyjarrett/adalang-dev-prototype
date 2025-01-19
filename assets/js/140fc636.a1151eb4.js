"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[138],{7965:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>j,contentTitle:()=>x,default:()=>m,frontMatter:()=>h,metadata:()=>r,toc:()=>A});const r=JSON.parse('{"id":"arm/AA-13/AA-13.4","title":"13.4. Enumeration Representation Clauses","description":"This Reference Manual output has not been verified,","source":"@site/docs/arm/AA-13/AA-13.4.mdx","sourceDirName":"arm/AA-13","slug":"/arm/AA-13/AA-13.4","permalink":"/docs/arm/AA-13/AA-13.4","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":108,"frontMatter":{"sidebar_position":108},"sidebar":"referenceManualSidebar","previous":{"title":"13.3. Operational and Representation Attributes","permalink":"/docs/arm/AA-13/AA-13.3"},"next":{"title":"13.5. Record Layout","permalink":"/docs/arm/AA-13/AA-13.5"}}');var i=s(4848),a=s(8453),t=s(3204),l=s(4220),o=s(8069),d=s(8011),c=s(6465);const h={sidebar_position:108},x="13.4. Enumeration Representation Clauses",j={},A=[{value:"Syntax",id:"syntax",level:4},{value:"Name Resolution Rules",id:"name-resolution-rules",level:4},{value:"Legality Rules",id:"legality-rules",level:4},{value:"Static Semantics",id:"static-semantics",level:4},{value:"Implementation Requirements",id:"implementation-requirements",level:4},{value:"Implementation Advice",id:"implementation-advice",level:4},{value:"Static Semantics",id:"static-semantics-1",level:4},{value:"Examples",id:"examples",level:4},{value:"Extensions to Ada 83",id:"extensions-to-ada-83",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4},{value:"Extensions to Ada 2012",id:"extensions-to-ada-2012",level:4}];function u(e){const n={a:"a",admonition:"admonition",h1:"h1",h4:"h4",header:"header",p:"p",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"134-enumeration-representation-clauses",children:"13.4. Enumeration Representation Clauses"})}),"\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsxs)(n.p,{children:["This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,i.jsx)(n.a,{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20",children:"tracking issue"})]})}),"\n","\n",(0,i.jsx)(d.A,{children:"1"}),"\n",(0,i.jsxs)("p",{children:["[An ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-13/AA-13.4#S0350",children:"enumeration_representation_clause"})})," specifies the internal codes for enumeration literals.] ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(d.A,{children:"2"}),"\n",(0,i.jsx)(o.A,{children:(0,i.jsxs)(n.p,{children:[(0,i.jsxs)("code",{children:["enumeration","_","representation","_","clause"]}),(0,i.jsx)("a",{id:"S0350"}),(0,i.jsx)("code",{children:" ::= "}),(0,i.jsx)("br",{}),"    ",(0,i.jsx)("b",{children:"for"})," ",(0,i.jsxs)("i",{children:["first","_","subtype","_"]}),(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-13/AA-13.1#S0345",children:"local_name"})})," ",(0,i.jsx)("b",{children:"use"})," ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-13/AA-13.4#S0351",children:"enumeration_aggregate"})}),";",(0,i.jsx)("br",{})]})}),"\n",(0,i.jsx)(d.A,{children:"3"}),"\n",(0,i.jsxs)(o.A,{children:[(0,i.jsxs)("code",{children:["enumeration","_","aggregate"]}),(0,i.jsx)("a",{id:"S0351"}),(0,i.jsx)("code",{children:" ::= "}),(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.3#S0113",children:"array_aggregate"})}),(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.h4,{id:"name-resolution-rules",children:"Name Resolution Rules"}),"\n",(0,i.jsx)(d.A,{children:"4"}),"\n",(0,i.jsxs)("p",{children:["The ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-13/AA-13.4#S0351",children:"enumeration_aggregate"})})," shall be written as a one-dimensional ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.3#S0113",children:"array_aggregate"})}),", for which the index subtype is the unconstrained subtype of the enumeration type, and each component expression is expected to be of any integer type. ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(l.A,{children:[(0,i.jsx)(d.A,{children:"4.a"}),(0,i.jsx)(t.A,{type:"aarm",aarm:"ramification",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)("b",{}),"The \u201cfull coverage rules\u201d for ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.3#S0106",children:"aggregate"})}),"s applies. An ",(0,i.jsx)("b",{children:"others"})," is not allowed \u2014 there is no applicable index constraint in this context. ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"legality-rules",children:"Legality Rules"}),"\n",(0,i.jsx)(d.A,{children:"5"}),"\n",(0,i.jsxs)("p",{children:["The ",(0,i.jsxs)("i",{children:["first","_","subtype","_"]}),(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-13/AA-13.1#S0345",children:"local_name"})})," of an ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-13/AA-13.4#S0350",children:"enumeration_representation_clause"})})," shall denote an enumeration subtype. ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(l.A,{children:[(0,i.jsx)(d.A,{children:"5.a"}),(0,i.jsx)(t.A,{type:"aarm",aarm:"ramification",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)("b",{}),"As for all type-related representation items, the ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-13/AA-13.1#S0345",children:"local_name"})})," is required to denote a first subtype. ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsx)(d.A,{children:"6/2"}),"\n",(0,i.jsx)(c.A,{items:["AI95-00287-01"]}),"\n",(0,i.jsxs)("p",{children:["Each component of the ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.3#S0113",children:"array_aggregate"})})," shall be given by an ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})})," rather than a ","<",">",". The ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})}),"s given in the ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.3#S0113",children:"array_aggregate"})})," shall be static, and shall specify distinct integer codes for each value of the enumeration type; the associated integer codes shall satisfy the predefined ordering relation of the type. ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(l.A,{children:[(0,i.jsx)(d.A,{children:"6.a"}),(0,i.jsx)(t.A,{type:"aarm",aarm:"reason",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)("b",{}),"Each value of the enumeration type has to be given an internal code, even if the first subtype of the enumeration type is constrained to only a subrange (this is only possible if the enumeration type is a derived type). This \u201cfull coverage\u201d requirement is important because one may refer to Enum'Base'First and Enum'Base'Last, which need to have defined representations. ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"static-semantics",children:"Static Semantics"}),"\n",(0,i.jsx)(d.A,{children:"7"}),"\n",(0,i.jsxs)("p",{children:["An ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-13/AA-13.4#S0350",children:"enumeration_representation_clause"})})," specifies the ",(0,i.jsx)("i",{children:"coding"})," aspect of representation. The coding consists of the ",(0,i.jsx)("i",{children:"internal code"})," for each enumeration literal, that is, the integral value used internally to represent each literal.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(l.A,{children:[(0,i.jsx)(d.A,{children:"7.a/3"}),(0,i.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)("b",{children:"Aspect Description for "}),(0,i.jsx)("b",{children:"Coding: "}),"Internal representation of enumeration literals. Specified by an ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-13/AA-13.4#S0350",children:"enumeration_representation_clause"})}),", not by an ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-13/AA-13.1#S0346",children:"aspect_specification"})}),".",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"implementation-requirements",children:"Implementation Requirements"}),"\n",(0,i.jsx)(d.A,{children:"8"}),"\n",(0,i.jsxs)("p",{children:["For nonboolean enumeration types, if the coding is not specified for the type, then for each value of the type, the internal code shall be equal to its position number. ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(l.A,{children:[(0,i.jsx)(d.A,{children:"8.a"}),(0,i.jsx)(t.A,{type:"aarm",aarm:"reason",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)("b",{}),"This default representation is already used by all known Ada compilers for nonboolean enumeration types. Therefore, we make it a requirement so users can depend on it, rather than feeling obliged to supply for every enumeration type an enumeration representation clause that is equivalent to this default rule. ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsxs)(l.A,{children:[(0,i.jsx)(d.A,{children:"8.b"}),(0,i.jsx)(t.A,{type:"aarm",aarm:"discussion",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)("b",{}),"For boolean types, it is relatively common to use all ones for True, and all zeros for False, since some hardware supports that directly. Of course, for a one-bit Boolean object (like in a packed array), False is presumably zero and True is presumably one (choosing the reverse would be extremely unfriendly!). ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"implementation-advice",children:"Implementation Advice"}),"\n",(0,i.jsx)(d.A,{children:"9"}),"\n",(0,i.jsxs)("p",{children:["The recommended level of support for ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-13/AA-13.4#S0350",children:"enumeration_representation_clause"})}),"s is: ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(d.A,{children:"10/5"}),"\n",(0,i.jsx)(c.A,{items:["AI12-0444-1"]}),"\n",(0,i.jsx)("ul",{children:(0,i.jsxs)("li",{children:["An implementation should support at least the internal codes in the range System.Min","_","Int .. System.Max","_","Int. An implementation is not required to support ",(0,i.jsx)("code",{children:(0,i.jsxs)("a",{href:"/docs/arm/AA-13/AA-13.4#S0350",children:["enumeration","_","representation","_","clause"]})}),"s for boolean types. ",(0,i.jsx)("br",{})]})}),"\n",(0,i.jsxs)(l.A,{children:[(0,i.jsx)(d.A,{children:"10.a"}),(0,i.jsx)(t.A,{type:"aarm",aarm:"ramification",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)("b",{}),"The implementation may support numbers outside the above range, such as numbers greater than System.Max","_","Int. See AI83-00564. ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsxs)(l.A,{children:[(0,i.jsx)(d.A,{children:"10.b"}),(0,i.jsx)(t.A,{type:"aarm",aarm:"reason",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)("b",{}),"The benefits of specifying the internal coding of a boolean type do not outweigh the implementation costs. Consider, for example, the implementation of the logical operators on a packed array of booleans with strange internal codes. It's implementable, but not worth it. ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsxs)(l.A,{children:[(0,i.jsx)(d.A,{children:"10.c/2"}),(0,i.jsx)(t.A,{type:"aarm",aarm:"implementation-advice",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)("b",{}),"The recommended level of support for ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-13/AA-13.4#S0350",children:"enumeration_representation_clause"})}),"s should be followed.",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"static-semantics-1",children:"Static Semantics"}),"\n",(0,i.jsx)(d.A,{children:"10.1/5"}),"\n",(0,i.jsx)(c.A,{items:["AI12-0237-1"]}),"\n",(0,i.jsxs)("p",{children:["For every discrete subtype S, the following attributes are defined: ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(d.A,{children:"10.2/5"}),"\n",(0,i.jsxs)("dt",{children:[(0,i.jsx)("br",{}),"S'Enum","_","Rep"]}),"\n",(0,i.jsx)(c.A,{items:["AI12-0237-1"]}),"\n",(0,i.jsx)("dl",{children:(0,i.jsxs)("dd",{children:["S'Enum","_","Rep denotes a function with the following specification: ",(0,i.jsx)("br",{})]})}),"\n",(0,i.jsx)(d.A,{children:"10.3/5"}),"\n",(0,i.jsx)(o.A,{language:"ada",children:(0,i.jsxs)(n.p,{children:["function S'Enum","_","Rep (Arg : S'Base) return universal","_","integer","\n"]})}),"\n",(0,i.jsx)(d.A,{children:"10.4/5"}),"\n",(0,i.jsxs)("dl",{children:[(0,i.jsxs)("dd",{children:["This function returns the representation value of the value of Arg, as a value of type ",(0,i.jsxs)("i",{children:["universal","_","integer"]}),". The ",(0,i.jsx)("i",{children:"representation value"})," is the internal code specified in an enumeration representation clause, if any, for the type corresponding to the value of Arg, and otherwise is the position number of the value.",(0,i.jsx)("br",{})]}),(0,i.jsx)(d.A,{children:"10.5/5"}),(0,i.jsxs)("dt",{children:[(0,i.jsx)("br",{}),"S'Enum","_","Val"]}),(0,i.jsx)(c.A,{items:["AI12-0237-1"]}),(0,i.jsxs)("dd",{children:["S'Enum","_","Val denotes a function with the following specification: ",(0,i.jsx)("br",{})]})]}),"\n",(0,i.jsx)(d.A,{children:"10.6/5"}),"\n",(0,i.jsx)(o.A,{language:"ada",children:(0,i.jsxs)(n.p,{children:["function S'Enum","_","Val (Arg : universal","_","integer) return S'Base","\n"]})}),"\n",(0,i.jsx)(d.A,{children:"10.7/5"}),"\n",(0,i.jsx)("dl",{children:(0,i.jsxs)("dd",{children:["This function returns a value of the type of S whose representation value equals the value of Arg. For the evaluation of a call on S'Enum","_","Val, if there is no value in the base range of its type with the given representation value, Constraint","_","Error is raised.",(0,i.jsx)("br",{})]})}),"\n",(0,i.jsxs)(l.A,{children:[(0,i.jsx)(d.A,{children:"10.d/5"}),(0,i.jsx)(t.A,{type:"aarm",aarm:"reason",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)("b",{}),"We define these on all discrete types so that they can be used inside of a generic unit on a subtype of a generic formal discrete type. They're not useful on integer types (they have the same effect as S'Pos and S'Val). ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsxs)(l.A,{children:[(0,i.jsx)(d.A,{children:"11/5"}),(0,i.jsx)(c.A,{items:["AI95-00137-01","AI05-0299-1","AI12-0237-1","AI12-0442-1"]}),(0,i.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(n.p,{children:["NOTE   ","{",(0,i.jsx)("i",{children:"8652/0009"}),"}"," Attribute Enum","_","Rep can be used to query the internal codes used for an enumeration type; attribute Enum","_","Val can be used to convert from an internal code to an enumeration value. The other attributes of the type, such as Succ, Pred, and Pos, are unaffected by an ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-13/AA-13.4#S0350",children:"enumeration_representation_clause"})}),". For example, Pos always returns the position number, ",(0,i.jsx)("i",{children:"not"})," an internal integer code that was specified in an ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-13/AA-13.4#S0350",children:"enumeration_representation_clause"})}),". ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsxs)(l.A,{children:[(0,i.jsx)(d.A,{children:"11.a"}),(0,i.jsx)(t.A,{type:"aarm",aarm:"discussion",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)("b",{}),"Suppose the enumeration type in question is derived: ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsxs)(l.A,{children:[(0,i.jsx)(d.A,{children:"11.b"}),(0,i.jsx)(o.A,{language:"ada",children:(0,i.jsxs)(n.p,{children:["type T1 is (Red, Green, Blue);","\n","subtype S1 is T1 range Red .. Green;","\n","type S2 is new S1;","\n","for S2 use (Red =",">"," 10, Green =",">"," 20, Blue =",">"," 30);","\n"]})})]}),"\n",(0,i.jsxs)(l.A,{children:[(0,i.jsx)(d.A,{children:"11.c/1"}),(0,i.jsx)(c.A,{items:["AI95-00137-01"]}),(0,i.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(n.p,{children:["{",(0,i.jsx)("i",{children:"8652/0009"}),"}"," The ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-13/AA-13.4#S0350",children:"enumeration_representation_clause"})})," has to specify values for all enumerals, even ones that are not in S2 (such as Blue). The Base attribute can be used to get at these values. For example: ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsxs)(l.A,{children:[(0,i.jsx)(d.A,{children:"11.d"}),(0,i.jsx)(o.A,{language:"ada",children:(0,i.jsxs)(n.p,{children:["for I in S2'Base loop","\n","    ... -- When I equals Blue, the internal code is 30.","\n","end loop;","\n"]})})]}),"\n",(0,i.jsxs)(l.A,{children:[(0,i.jsx)(d.A,{children:"11.e"}),(0,i.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(n.p,{children:["We considered allowing or requiring \u201c",(0,i.jsx)("b",{children:"for"})," S2'Base ",(0,i.jsx)("b",{children:"use"})," ...\u201d in cases like this, but it didn't seem worth the trouble. ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(d.A,{children:"12/5"}),"\n",(0,i.jsx)(c.A,{items:["AI12-0312-1"]}),"\n",(0,i.jsxs)("p",{children:[(0,i.jsx)("i",{children:"Examples of enumeration representation clauses:"})," ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(d.A,{children:"13"}),"\n",(0,i.jsxs)(o.A,{language:"ada",children:[(0,i.jsxs)(n.p,{children:["type Mix","_","Code is (ADD, SUB, MUL, LDA, STA, STZ);","\n","\n",(0,i.jsx)(d.A,{children:"14"}),"\nfor Mix","_","Code use","\n","   (ADD =",">"," 1, SUB =",">"," 2, MUL =",">"," 3, LDA =",">"," 8, STA =",">"," 24, STZ =",">","33);","\n","\n",(0,i.jsx)(d.A,{children:"15/5"})]}),(0,i.jsx)(c.A,{items:["AI12-0312-1"]}),(0,i.jsxs)(n.p,{children:["-- See ",(0,i.jsx)("a",{href:"/docs/arm/AA-3/AA-3.5#Subclause_3.5.2",children:"3.5.2"}),".","\n","for Roman","_","Digit use ('I' =",">"," 1,","\n","                     'V' =",">"," 5,","\n","                     'X' =",">"," 10,","\n","                     'L' =",">"," 50,","\n","                     'C' =",">"," 100,","\n","                     'D' =",">"," 500,","\n","                     'M' =",">"," 1000);","\n","\n",(0,i.jsx)(d.A,{children:"16/5"})]}),(0,i.jsx)(c.A,{items:["AI12-0312-1"]}),(0,i.jsxs)(n.p,{children:["-- For an example of the use of attribute Enum","_","Rep, see ",(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.2#Subclause_4.2.1",children:"4.2.1"}),".","\n"]})]}),"\n",(0,i.jsx)(l.A,{children:(0,i.jsx)(n.h4,{id:"extensions-to-ada-83",children:"Extensions to Ada 83"})}),"\n",(0,i.jsxs)(l.A,{children:[(0,i.jsx)(d.A,{children:"16.a"}),(0,i.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(n.p,{children:["As in other similar contexts, Ada 95 allows expressions of any integer type, not just expressions of type ",(0,i.jsxs)("i",{children:["universal","_","integer"]}),", for the component expressions in the ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-13/AA-13.4#S0351",children:"enumeration_aggregate"})}),". The preference rules for the predefined operators of ",(0,i.jsxs)("i",{children:["root","_","integer"]})," eliminate any ambiguity.",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsxs)(l.A,{children:[(0,i.jsx)(d.A,{children:"16.b"}),(0,i.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(n.p,{children:["For portability, we now require that the default coding for an enumeration type be the \u201cobvious\u201d coding using position numbers. This is satisfied by all known implementations. ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsx)(l.A,{children:(0,i.jsx)(n.h4,{id:"wording-changes-from-ada-95",children:"Wording Changes from Ada 95"})}),"\n",(0,i.jsxs)(l.A,{children:[(0,i.jsx)(d.A,{children:"16.c/2"}),(0,i.jsx)(c.A,{items:["AI95-00137-01"]}),(0,i.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(n.p,{children:["{",(0,i.jsx)("i",{children:"8652/0009"}),"}"," ",(0,i.jsx)("b",{children:"Corrigendum:"})," Updated to reflect that we no longer have something called ",(0,i.jsxs)("code",{children:["representation","_","clause"]}),".",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsxs)(l.A,{children:[(0,i.jsx)(d.A,{children:"16.d/2"}),(0,i.jsx)(c.A,{items:["AI95-00287-01"]}),(0,i.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(n.p,{children:["Added wording to prevent the use of ","<",">"," in a ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-13/AA-13.4#S0350",children:"enumeration_representation_clause"})}),". (","<",">"," is newly added to ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.3#S0113",children:"array_aggregate"})}),"s.) ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsx)(l.A,{children:(0,i.jsx)(n.h4,{id:"extensions-to-ada-2012",children:"Extensions to Ada 2012"})}),"\n",(0,i.jsxs)(l.A,{children:[(0,i.jsx)(d.A,{children:"16.e/5"}),(0,i.jsx)(c.A,{items:["AI12-0237-1"]}),(0,i.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(n.p,{children:["Attributes Enum","_","Rep and Enum","_","Val are new. ",(0,i.jsx)("br",{})]})})]})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}}}]);