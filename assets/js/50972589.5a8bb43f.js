"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[1758],{9561:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>x,contentTitle:()=>A,default:()=>p,frontMatter:()=>h,metadata:()=>n,toc:()=>j});const n=JSON.parse('{"id":"arm/AA-7/AA-7.5","title":"7.5. Limited Types","description":"This Reference Manual output has not been verified,","source":"@site/docs/arm/AA-7/AA-7.5.mdx","sourceDirName":"arm/AA-7","slug":"/arm/AA-7/AA-7.5","permalink":"/docs/arm/AA-7/AA-7.5","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":64,"frontMatter":{"sidebar_position":64},"sidebar":"referenceManualSidebar","previous":{"title":"7.4. Deferred Constants","permalink":"/docs/arm/AA-7/AA-7.4"},"next":{"title":"7.6. Assignment and Finalization","permalink":"/docs/arm/AA-7/AA-7.6"}}');var r=i(4848),a=i(8453),t=i(3204),d=i(4220),c=i(8069),l=i(8011),o=i(6465);const h={sidebar_position:64},A="7.5. Limited Types",x={},j=[{value:"Legality Rules",id:"legality-rules",level:4},{value:"Static Semantics",id:"static-semantics",level:4},{value:"Examples",id:"examples",level:4},{value:"Extensions to Ada 83",id:"extensions-to-ada-83",level:4},{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83",level:4},{value:"Extensions to Ada 95",id:"extensions-to-ada-95",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4},{value:"Wording Changes from Ada 2005",id:"wording-changes-from-ada-2005",level:4},{value:"Extensions to Ada 2012",id:"extensions-to-ada-2012",level:4},{value:"Wording Changes from Ada 2012",id:"wording-changes-from-ada-2012",level:4}];function m(e){const s={a:"a",admonition:"admonition",h1:"h1",h4:"h4",header:"header",p:"p",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"75-limited-types",children:"7.5. Limited Types"})}),"\n",(0,r.jsx)(s.admonition,{type:"danger",children:(0,r.jsxs)(s.p,{children:["This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,r.jsx)(s.a,{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20",children:"tracking issue"})]})}),"\n","\n",(0,r.jsx)(l.A,{children:"1/2"}),"\n",(0,r.jsx)(o.A,{items:["AI95-00287-01"]}),"\n",(0,r.jsxs)("p",{children:["[A limited type is (a view of) a type for which copying (such as for an ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-5/AA-5.2#S0173",children:"assignment_statement"})}),") is not allowed. A nonlimited type is a (view of a) type for which copying is allowed.] ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(d.A,{children:[(0,r.jsx)(l.A,{children:"1.a"}),(0,r.jsx)(t.A,{type:"aarm",aarm:"discussion",children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)("b",{}),"The concept of the ",(0,r.jsx)("i",{children:"value"})," of a limited type is difficult to define, since the abstract value of a limited type often extends beyond its physical representation. In some sense, values of a limited type cannot be divorced from their object. The value ",(0,r.jsx)("i",{children:"is"})," the object.",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsxs)(d.A,{children:[(0,r.jsx)(l.A,{children:"1.b/2"}),(0,r.jsx)(o.A,{items:["AI95-00318-02"]}),(0,r.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(s.p,{children:["In Ada 83, in the two places where limited types were defined by the language, namely tasks and files, an implicit level of indirection was implied by the semantics to avoid the separation of the value from an associated object. In Ada 95, most limited types are passed by reference, and even return-ed by reference. In Ada 2005, most limited types are built-in-place upon return, rather than returned by reference. Thus the object \u201cidentity\u201d is part of the logical value of most limited types. ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsxs)(d.A,{children:[(0,r.jsx)(l.A,{children:"1.c/2"}),(0,r.jsx)(o.A,{items:["AI95-00287-01","AI95-00419-01"]}),(0,r.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)("b",{children:"To be honest: "}),"For a limited partial view whose full view is nonlimited, copying is possible on parameter passing and function return. To prevent any copying whatsoever, one should make both the partial ",(0,r.jsx)("i",{children:"and"})," full views limited. ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsxs)(d.A,{children:[(0,r.jsx)(l.A,{children:"1.d/5"}),(0,r.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)("b",{children:"Term entry: "}),(0,r.jsx)("b",{children:"limited type"})," \u2014 type for which copying (such as in an ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-5/AA-5.2#S0173",children:"assignment_statement"})}),") is not allowed",(0,r.jsx)("br",{}),"Note: All types are either limited types or nonlimited types.",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsxs)(d.A,{children:[(0,r.jsx)(l.A,{children:"1.e/5"}),(0,r.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)("b",{children:"Term entry: "}),(0,r.jsx)("b",{children:"nonlimited type"})," \u2014 type for which copying is allowed",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"legality-rules",children:"Legality Rules"}),"\n",(0,r.jsx)(l.A,{children:"2/2"}),"\n",(0,r.jsx)(o.A,{items:["AI95-00419-01"]}),"\n",(0,r.jsxs)("p",{children:["If a tagged record type has any limited components, then the reserved word ",(0,r.jsx)("b",{children:"limited"})," shall appear in its ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.8#S0066",children:"record_type_definition"})}),". [If the reserved word ",(0,r.jsx)("b",{children:"limited"})," appears in the definition of a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.4#S0035",children:"derived_type_definition"})}),", its parent type and any progenitor interfaces shall be limited.] ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(d.A,{children:[(0,r.jsx)(l.A,{children:"2.a.1/5"}),(0,r.jsx)(o.A,{items:["AI95-00419-01","AI12-0005-1"]}),(0,r.jsx)(t.A,{type:"aarm",aarm:"proof",children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)("b",{}),"The rule about the parent type being required to be limited can be found in ",(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.4",children:"3.4"}),". Rules about progenitor interfaces can be found in ",(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.9#Subclause_3.9.4",children:"3.9.4"}),"; specifically, a nonlimited interface can appear only on a nonlimited type. We repeat these rules here to gather these scattered rules in one obvious place. ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsxs)(d.A,{children:[(0,r.jsx)(l.A,{children:"2.a"}),(0,r.jsx)(t.A,{type:"aarm",aarm:"reason",children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)("b",{}),"This prevents tagged limited types from becoming nonlimited. Otherwise, the following could happen: ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsxs)(d.A,{children:[(0,r.jsx)(l.A,{children:"2.b"}),(0,r.jsx)(c.A,{language:"ada",children:(0,r.jsxs)(s.p,{children:["package P is","\n","    type T is limited private;","\n","    type R is tagged","\n","        record -- Illegal!","\n","               -- This should say \u201climited record\u201d.","\n","            X : T;","\n","        end record;","\n","private","\n","    type T is new Integer; -- R becomes nonlimited here.","\n","end P;","\n","\n",(0,r.jsx)(l.A,{children:"2.c/2"}),"\npackage Q is","\n","    type R2 is new R with","\n","        record","\n","            Y : Some","_","Task","_","Type;","\n","        end record;","\n","end Q;","\n"]})})]}),"\n",(0,r.jsxs)(d.A,{children:[(0,r.jsx)(l.A,{children:"2.d/2"}),(0,r.jsx)(o.A,{items:["AI95-00230-01"]}),(0,r.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(s.p,{children:["If the above were legal, then assignment would be defined for R'Class in the body of P, which is bad news, given the task. ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(l.A,{children:"2.1/5"}),"\n",(0,r.jsx)(o.A,{items:["AI95-00287-01","AI95-00318-02","AI05-0147-1","AI12-0172-1","AI12-0236-1","AI12-0317-1"]}),"\n",(0,r.jsxs)("p",{children:["In the following contexts, an ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})})," of a limited type is permitted only if each of its operative constituents is newly constructed (see ",(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4",children:"4.4"}),"): ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(l.A,{children:"2.2/2"}),"\n",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["the initialization ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})})," of an ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.3#S0032",children:"object_declaration"})})," (see ",(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.3#Subclause_3.3.1",children:"3.3.1"}),")",(0,r.jsx)("br",{})]}),(0,r.jsx)(l.A,{children:"2.3/2"}),(0,r.jsxs)("li",{children:["the ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.7#S0063",children:"default_expression"})})," of a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.8#S0070",children:"component_declaration"})})," (see ",(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.8",children:"3.8"}),")",(0,r.jsx)("br",{})]}),(0,r.jsx)(l.A,{children:"2.4/2"}),(0,r.jsxs)("li",{children:["the ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})})," of a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.3#S0109",children:"record_component_association"})})," (see ",(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.3#Subclause_4.3.1",children:"4.3.1"}),")",(0,r.jsx)("br",{})]}),(0,r.jsx)(l.A,{children:"2.5/2"}),(0,r.jsxs)("li",{children:["the ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})})," for an ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.3#S0112",children:"ancestor_part"})})," of an ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.3#S0111",children:"extension_aggregate"})})," (see ",(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.3#Subclause_4.3.2",children:"4.3.2"}),")",(0,r.jsx)("br",{})]}),(0,r.jsx)(l.A,{children:"2.6/2"}),(0,r.jsxs)("li",{children:["an ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})})," of a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.3#S0114",children:"positional_array_aggregate"})})," or the ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})})," of an ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.3#S0118",children:"array_component_association"})})," (see ",(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.3#Subclause_4.3.3",children:"4.3.3"}),")",(0,r.jsx)("br",{})]}),(0,r.jsx)(l.A,{children:"2.7/5"}),(0,r.jsx)(o.A,{items:["AI12-0127-1"]}),(0,r.jsxs)("li",{children:["the ",(0,r.jsxs)("i",{children:["base","_"]}),(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})})," of a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.3#S0121",children:"record_delta_aggregate"})})," (see ",(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.3#Subclause_4.3.4",children:"4.3.4"}),") ",(0,r.jsx)("br",{})]})]}),"\n",(0,r.jsxs)(d.A,{children:[(0,r.jsx)(l.A,{children:"2.d.1/5"}),(0,r.jsx)(o.A,{items:["AI12-0127-1"]}),(0,r.jsx)(t.A,{type:"aarm",aarm:"ramification",children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)("b",{}),"We don't need to mention the ",(0,r.jsxs)("i",{children:["base","_"]}),(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})})," of an ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.3#S0122",children:"array_delta_aggregate"})})," here, as its type cannot be limited (see ",(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.3#Subclause_4.3.4",children:"4.3.4"}),"), and thus neither can its ",(0,r.jsxs)("i",{children:["base","_"]}),(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})}),". Similarly, we do not need any rules for components of a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.3#S0120",children:"delta_aggregate"})})," nor the elements of a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.3#S0123",children:"container_aggregate"})}),", as neither are allowed to be limited (see ",(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.3#Subclause_4.3.4",children:"4.3.4"})," and ",(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.3#Subclause_4.3.5",children:"4.3.5"}),") ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(l.A,{children:"2.8/5"}),"\n",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["the ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.7#S0163",children:"qualified_expression"})})," of an initialized allocator (see ",(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.8",children:"4.8"}),")",(0,r.jsx)("br",{})]}),(0,r.jsx)(l.A,{children:"2.9/5"}),(0,r.jsxs)("li",{children:["the ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})})," of a return statement (see ",(0,r.jsx)("a",{href:"/docs/arm/AA-6/AA-6.5",children:"6.5"}),")",(0,r.jsx)("br",{})]}),(0,r.jsx)(l.A,{children:"2.10/5"}),(0,r.jsx)(o.A,{items:["AI05-0177-1","AI12-0157-1"]}),(0,r.jsxs)("li",{children:["the return expression of an expression function (see ",(0,r.jsx)("a",{href:"/docs/arm/AA-6/AA-6.8",children:"6.8"}),")",(0,r.jsx)("br",{})]}),(0,r.jsx)(l.A,{children:"2.11/5"}),(0,r.jsxs)("li",{children:["the ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.7#S0063",children:"default_expression"})})," or actual parameter for a formal object of mode ",(0,r.jsx)("b",{children:"in"})," (see ",(0,r.jsx)("a",{href:"/docs/arm/AA-12/AA-12.4",children:"12.4"}),")",(0,r.jsx)("br",{})]})]}),"\n",(0,r.jsxs)(d.A,{children:[(0,r.jsx)(l.A,{children:"2.e/2"}),(0,r.jsx)(t.A,{type:"aarm",aarm:"discussion",children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)("b",{}),"All of these contexts normally require copying; by restricting the uses as above, we can require the new object to be built-in-place. ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"static-semantics",children:"Static Semantics"}),"\n",(0,r.jsx)(l.A,{children:"3/3"}),"\n",(0,r.jsx)(o.A,{items:["AI95-00419-01","AI05-0178-1"]}),"\n",(0,r.jsxs)("p",{children:["A view of a type is ",(0,r.jsx)("i",{children:"limited"})," if it is one of the following: ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(l.A,{children:"4/2"}),"\n",(0,r.jsx)(o.A,{items:["AI95-00411-01","AI95-00419-01"]}),"\n",(0,r.jsx)("ul",{children:(0,r.jsxs)("li",{children:["a type with the reserved word ",(0,r.jsx)("b",{children:"limited"}),", ",(0,r.jsx)("b",{children:"synchronized"}),", ",(0,r.jsx)("b",{children:"task"}),", or ",(0,r.jsx)("b",{children:"protected"})," in its definition; ",(0,r.jsx)("br",{})]})}),"\n",(0,r.jsxs)(d.A,{children:[(0,r.jsx)(l.A,{children:"4.a"}),(0,r.jsx)(t.A,{type:"aarm",aarm:"ramification",children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)("b",{}),"Note that there is always a \u201cdefinition\u201d, conceptually, even if there is no syntactic category called \u201c...","_","definition\u201d.",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsxs)(d.A,{children:[(0,r.jsx)(l.A,{children:"4.b/2"}),(0,r.jsx)(o.A,{items:["AI95-00419-01"]}),(0,r.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(s.p,{children:["This includes interfaces of the above kinds, derived types with the reserved word ",(0,r.jsx)("b",{children:"limited"}),", as well as task and protected types. ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(l.A,{children:"5/3"}),"\n",(0,r.jsx)(o.A,{items:["AI95-00419-01","AI05-0087-1"]}),"\n",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["a class-wide type whose specific type is limited;",(0,r.jsx)("br",{})]}),(0,r.jsx)(l.A,{children:"6/2"}),(0,r.jsx)(o.A,{items:["AI95-00419-01"]}),(0,r.jsxs)("li",{children:["a composite type with a limited component;",(0,r.jsx)("br",{})]}),(0,r.jsx)(l.A,{children:"6.1/3"}),(0,r.jsx)(o.A,{items:["AI05-0178-1"]}),(0,r.jsxs)("li",{children:["an incomplete view;",(0,r.jsx)("br",{})]}),(0,r.jsx)(l.A,{children:"6.2/2"}),(0,r.jsx)(o.A,{items:["AI95-00419-01"]}),(0,r.jsxs)("li",{children:["a derived type whose parent is limited and is not an interface.",(0,r.jsx)("br",{})]})]}),"\n",(0,r.jsxs)(d.A,{children:[(0,r.jsx)(l.A,{children:"6.a/2"}),(0,r.jsx)(o.A,{items:["AI95-00419-01"]}),(0,r.jsx)(t.A,{type:"aarm",aarm:"ramification",children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)("b",{}),"Limitedness is not inherited from interfaces; it must be explicitly specified when the parent is an interface. ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsxs)(d.A,{children:[(0,r.jsx)(l.A,{children:"6.b/2"}),(0,r.jsx)(o.A,{items:["AI95-00419-01"]}),(0,r.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)("b",{children:"To be honest: "}),"A derived type can become nonlimited if ",(0,r.jsx)("b",{children:"limited"})," does not appear and the derivation takes place in the visible part of a child package, and the parent type is nonlimited as viewed from the private part or body of the child package. ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsxs)(d.A,{children:[(0,r.jsx)(l.A,{children:"6.c/2"}),(0,r.jsx)(o.A,{items:["AI95-00419-01"]}),(0,r.jsx)(t.A,{type:"aarm",aarm:"reason",children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)("b",{}),"We considered a rule where limitedness was always inherited from the parent for derived types, but in the case of a type whose parent is an interface, this meant that the first interface is treated differently than other interfaces. It also would have forced users to declare dummy nonlimited interfaces just to get the limitedness right. We also considered a syntax like ",(0,r.jsx)("b",{children:"not limited"})," to specify nonlimitedness when the parent was limited, but that was unsavory. The rule given is more uniform and simpler to understand.",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsxs)(d.A,{children:[(0,r.jsx)(l.A,{children:"6.d/2"}),(0,r.jsx)(o.A,{items:["AI95-00419-01"]}),(0,r.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(s.p,{children:["The rules for interfaces are asymmetrical, but the language is not: if the parent interface is limited, the presence of the word ",(0,r.jsx)("b",{children:"limited"})," determines the limitedness, and nonlimited progenitors are illegal by the rules in ",(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.9#Subclause_3.9.4",children:"3.9.4"})," if ",(0,r.jsx)("b",{children:"limited"})," is present. If the parent interface is nonlimited, the word ",(0,r.jsx)("b",{children:"limited"})," is illegal by the rules in ",(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.4",children:"3.4"}),". The net effect is that the order of the interfaces doesn't matter. ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(l.A,{children:"7"}),"\n",(0,r.jsxs)("p",{children:["Otherwise, the type is nonlimited.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(l.A,{children:"8"}),"\n",(0,r.jsxs)("p",{children:["[There are no predefined equality operators for a limited type.]",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(l.A,{children:"8.1/3"}),"\n",(0,r.jsx)(o.A,{items:["AI05-0052-1"]}),"\n",(0,r.jsxs)("p",{children:["A type is ",(0,r.jsx)("i",{children:"immutably limited"})," if it is one of the following:",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(l.A,{children:"8.2/3"}),"\n",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["An explicitly limited record type;",(0,r.jsx)("br",{})]}),(0,r.jsx)(l.A,{children:"8.3/3"}),(0,r.jsx)(o.A,{items:["AI05-0217-1"]}),(0,r.jsxs)("li",{children:["A record extension with the reserved word ",(0,r.jsx)("b",{children:"limited"}),";",(0,r.jsx)("br",{})]}),(0,r.jsx)(l.A,{children:"8.4/3"}),(0,r.jsxs)("li",{children:["A nonformal limited private type that is tagged or has at least one access discriminant with a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.7#S0063",children:"default_expression"})}),";",(0,r.jsx)("br",{})]})]}),"\n",(0,r.jsxs)(d.A,{children:[(0,r.jsx)(l.A,{children:"8.a/3"}),(0,r.jsx)(t.A,{type:"aarm",aarm:"reason",children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)("b",{}),"The full type in both of these cases must necessarily be immutably limited. We need to include private types as much as possible so that we aren't unintentionally discouraging the use of private types. ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(l.A,{children:"8.5/3"}),"\n",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["A task type, a protected type, or a synchronized interface;",(0,r.jsx)("br",{})]}),(0,r.jsx)(l.A,{children:"8.6/3"}),(0,r.jsxs)("li",{children:["A type derived from an immutably limited type.",(0,r.jsx)("br",{})]})]}),"\n",(0,r.jsxs)(d.A,{children:[(0,r.jsx)(l.A,{children:"8.b/3"}),(0,r.jsx)(t.A,{type:"aarm",aarm:"discussion",children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)("b",{}),"An immutably limited type is a type that cannot become nonlimited subsequently in a private part or in a child unit. If a view of the type makes it immutably limited, then no copying (assignment) operations are ever available for objects of the type. This allows other properties; for instance, it is safe for such objects to have access discriminants that have defaults or designate other limited objects. ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsxs)(d.A,{children:[(0,r.jsx)(l.A,{children:"8.c/3"}),(0,r.jsx)(t.A,{type:"aarm",aarm:"ramification",children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)("b",{}),"A nonsynchronized limited interface type is not immutably limited; a type derived from it can be nonlimited. ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(l.A,{children:"8.7/3"}),"\n",(0,r.jsx)(o.A,{items:["AI05-0052-1"]}),"\n",(0,r.jsxs)("p",{children:["A descendant of a generic formal limited private type is presumed to be immutably limited except within the body of a generic unit or a body declared within the declarative region of a generic unit, if the formal type is declared within the formal part of the generic unit.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(d.A,{children:[(0,r.jsx)(l.A,{children:"8.d/3"}),(0,r.jsx)(t.A,{type:"aarm",aarm:"ramification",children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)("b",{}),"In an instance, a type is descended from the actual type corresponding to the formal, and all rules are rechecked in the specification. Bodies are excepted so that we assume the worst there; the complex wording is required to handle children of generics and unrelated bodies properly. ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsxs)(d.A,{children:[(0,r.jsx)(l.A,{children:"9/5"}),(0,r.jsx)(o.A,{items:["AI95-00287-01","AI95-00318-02","AI05-0067-1","AI12-0442-1"]}),(0,r.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(s.p,{children:["NOTE 1   While it is allowed to write initializations of limited objects, such initializations never copy a limited object. The source of such an assignment operation will be an ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.3#S0106",children:"aggregate"})})," or ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-6/AA-6.4#S0218",children:"function_call"})}),", and such ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.3#S0106",children:"aggregate"})}),"s and ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-6/AA-6.4#S0218",children:"function_call"})}),"s will be built directly in the target object (see ",(0,r.jsx)("a",{href:"/docs/arm/AA-7/AA-7.6",children:"7.6"}),"). ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsxs)(d.A,{children:[(0,r.jsx)(l.A,{children:"9.a/2"}),(0,r.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)("b",{children:"To be honest: "}),"This isn't quite true if the type can become nonlimited (see below); ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-6/AA-6.4#S0218",children:"function_call"})}),"s only are required to be build-in-place for \u201creally\u201d limited types. ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(d.A,{children:(0,r.jsxs)(t.A,{type:"aarm",aarm:"note",children:[(0,r.jsx)("i",{children:"Paragraphs 10 through 15 were deleted."}),(0,r.jsx)("br",{})]})}),"\n",(0,r.jsxs)(d.A,{children:[(0,r.jsx)(l.A,{children:"16"}),(0,r.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(s.p,{children:["NOTE 2   As illustrated in ",(0,r.jsx)("a",{href:"/docs/arm/AA-7/AA-7.3#Subclause_7.3.1",children:"7.3.1"}),", an untagged limited type can become nonlimited under certain circumstances. ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsxs)(d.A,{children:[(0,r.jsx)(l.A,{children:"16.a"}),(0,r.jsx)(t.A,{type:"aarm",aarm:"ramification",children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)("b",{}),"Limited private types do not become nonlimited; instead, their full view can be nonlimited, which has a similar effect.",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsxs)(d.A,{children:[(0,r.jsx)(l.A,{children:"16.b"}),(0,r.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(s.p,{children:["It is important to remember that a single nonprivate type can be both limited and nonlimited in different parts of its scope. In other words, \u201climited\u201d is a property that depends on where you are in the scope of the type. We don't call this a \u201cview property\u201d because there is no particular declaration to declare the nonlimited view.",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsxs)(d.A,{children:[(0,r.jsx)(l.A,{children:"16.c"}),(0,r.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(s.p,{children:["Tagged types never become nonlimited. ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(l.A,{children:"17"}),"\n",(0,r.jsxs)("p",{children:[(0,r.jsx)("i",{children:"Example of a package with a limited type:"})," ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(l.A,{children:"18"}),"\n",(0,r.jsx)(c.A,{language:"ada",children:(0,r.jsxs)(s.p,{children:["package IO","_","Package is","\n","   type File","_","Name is limited private;","\n","\n",(0,r.jsx)(l.A,{children:"19"}),"\nprocedure Open (F : in out File","_","Name);","\n","   procedure Close(F : in out File","_","Name);","\n","   procedure Read (F : in File","_","Name; Item : out Integer);","\n","   procedure Write(F : in File","_","Name; Item : in  Integer);","\n","private","\n","   type File","_","Name is","\n","      limited record","\n","         Internal","_","Name : Integer := 0;","\n","      end record;","\n","end IO","_","Package;","\n","\n",(0,r.jsx)(l.A,{children:"20"}),"\npackage body IO","_","Package is","\n","   Limit : constant := 200;","\n","   type File","_","Descriptor is record  ...  end record;","\n","   Directory : array (1 .. Limit) of File","_","Descriptor;","\n","   ...","\n","   procedure Open (F : in out File","_","Name) is  ...  end;","\n","   procedure Close(F : in out File","_","Name) is  ...  end;","\n","   procedure Read (F : in File","_","Name; Item : out Integer) is ... end;","\n","   procedure Write(F : in File","_","Name; Item : in  Integer) is ... end;","\n","begin","\n","   ...","\n","end IO","_","Package;","\n"]})}),"\n",(0,r.jsx)(l.A,{children:"21/5"}),"\n",(0,r.jsx)(o.A,{items:["AI12-0440-1","AI12-0452-1"]}),"\n",(0,r.jsxs)("p",{children:["In the example, an outside subprogram making use of IO","_","Package can obtain a file name by calling Open and later use it in calls to Read and Write. Thus, outside the package, a file name obtained from Open acts as a kind of password; its internal properties (such as containing a numeric value) are not known and no other operations (such as addition or comparison of internal names) can be performed on a file name. Most importantly, clients of the package cannot make copies of objects of type File","_","Name.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(l.A,{children:"22/5"}),"\n",(0,r.jsx)(o.A,{items:["AI12-0442-1","AI12-0452-1"]}),"\n",(0,r.jsxs)("p",{children:["This example is characteristic of any case where complete control over the operations of a type is desired. Such packages serve a dual purpose. They prevent a user from making use of the internal structure of the type. They also implement the notion of an encapsulated data type where the only operations on the type are those given in the package specification.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(l.A,{children:"23/5"}),"\n",(0,r.jsx)(o.A,{items:["AI12-0442-1","AI12-0452-1"]}),"\n",(0,r.jsxs)("p",{children:["The fact that the full view of File","_","Name is explicitly declared ",(0,r.jsx)("b",{children:"limited"})," means that parameter passing will always be by reference and function results will always be built directly in the result object (see ",(0,r.jsx)("a",{href:"/docs/arm/AA-6/AA-6.2",children:"6.2"})," and ",(0,r.jsx)("a",{href:"/docs/arm/AA-6/AA-6.5",children:"6.5"}),").",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(d.A,{children:(0,r.jsx)(s.h4,{id:"extensions-to-ada-83",children:"Extensions to Ada 83"})}),"\n",(0,r.jsxs)(d.A,{children:[(0,r.jsx)(l.A,{children:"26.a"}),(0,r.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(s.p,{children:["The restrictions in RM83-7.4.4(4), which disallowed ",(0,r.jsx)("b",{children:"out"})," parameters of limited types in certain cases, are removed. ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(d.A,{children:(0,r.jsx)(s.h4,{id:"wording-changes-from-ada-83",children:"Wording Changes from Ada 83"})}),"\n",(0,r.jsxs)(d.A,{children:[(0,r.jsx)(l.A,{children:"26.b/3"}),(0,r.jsx)(o.A,{items:["AI05-0299-1"]}),(0,r.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(s.p,{children:["Since limitedness and privateness are orthogonal in Ada 95 (and to some extent in Ada 83), this is now its own subclause rather than being a subclause of ",(0,r.jsx)("a",{href:"/docs/arm/AA-7/AA-7.3",children:"7.3"}),", \u201c",(0,r.jsx)("a",{href:"/docs/arm/AA-7/AA-7.3",children:"Private Types and Private Extensions"}),"\u201d. ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(d.A,{children:(0,r.jsx)(s.h4,{id:"extensions-to-ada-95",children:"Extensions to Ada 95"})}),"\n",(0,r.jsxs)(d.A,{children:[(0,r.jsx)(l.A,{children:"26.c/2"}),(0,r.jsx)(o.A,{items:["AI95-00287-01","AI95-00318-02"]}),(0,r.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(s.p,{children:["Limited types now have an assignment operation, but its use is restricted such that all uses are build-in-place. This is accomplished by restricting uses to ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.3#S0106",children:"aggregate"})}),"s and ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-6/AA-6.4#S0218",children:"function_call"})}),"s. ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.3#S0106",children:"Aggregate"})}),"s were not allowed to have a limited type in Ada 95, which causes a compatibility issue discussed in ",(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.3",children:"4.3"}),", \u201c",(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.3",children:"Aggregates"}),"\u201d. Compatibility issues with return statements for limited ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-6/AA-6.4#S0218",children:"function_call"})}),"s are discussed in ",(0,r.jsx)("a",{href:"/docs/arm/AA-6/AA-6.5",children:"6.5"}),", \u201c",(0,r.jsx)("a",{href:"/docs/arm/AA-6/AA-6.5",children:"Return Statements"}),"\u201d. ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(d.A,{children:(0,r.jsx)(s.h4,{id:"wording-changes-from-ada-95",children:"Wording Changes from Ada 95"})}),"\n",(0,r.jsxs)(d.A,{children:[(0,r.jsx)(l.A,{children:"26.d/2"}),(0,r.jsx)(o.A,{items:["AI95-00411-01","AI95-00419-01"]}),(0,r.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(s.p,{children:["Rewrote the definition of limited to ensure that interfaces are covered, but that limitedness is not inherited from interfaces. Derived types that explicitly include ",(0,r.jsx)("b",{children:"limited"})," are now also covered. ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(d.A,{children:(0,r.jsx)(s.h4,{id:"wording-changes-from-ada-2005",children:"Wording Changes from Ada 2005"})}),"\n",(0,r.jsxs)(d.A,{children:[(0,r.jsx)(l.A,{children:"26.e/3"}),(0,r.jsx)(o.A,{items:["AI05-0052-1","AI05-0217-1"]}),(0,r.jsx)(t.A,{type:"aarm",aarm:"correction",children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)("b",{})," Added a definition for immutably limited types, so that the fairly complex definition does not need to be repeated in rules elsewhere in the Reference Manual.",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsxs)(d.A,{children:[(0,r.jsx)(l.A,{children:"26.f/3"}),(0,r.jsx)(o.A,{items:["AI05-0067-1","AI05-0299-1"]}),(0,r.jsx)(t.A,{type:"aarm",aarm:"correction",children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)("b",{})," The built-in-place rules are consolidated in ",(0,r.jsx)("a",{href:"/docs/arm/AA-7/AA-7.6",children:"7.6"}),", and thus they are removed from this subclause.",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsxs)(d.A,{children:[(0,r.jsx)(l.A,{children:"26.g/3"}),(0,r.jsx)(o.A,{items:["AI05-0087-1"]}),(0,r.jsx)(t.A,{type:"aarm",aarm:"correction",children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)("b",{})," Fixed an oversight: class-wide types were never defined to be limited, even if their associated specific type is. It is thought that this oversight was never implemented incorrectly by any compiler, thus we have not classified it as an incompatibility.",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsxs)(d.A,{children:[(0,r.jsx)(l.A,{children:"26.h/3"}),(0,r.jsx)(o.A,{items:["AI05-0147-1"]}),(0,r.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(s.p,{children:["Allowed ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.5#S0148",children:"conditional_expression"})}),"s in limited constructor contexts \u2014 we want to treat these as closely to parentheses as possible.",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsxs)(d.A,{children:[(0,r.jsx)(l.A,{children:"26.i/3"}),(0,r.jsx)(o.A,{items:["AI05-0177-1"]}),(0,r.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(s.p,{children:["Added wording so that expression functions can return limited entities.",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsxs)(d.A,{children:[(0,r.jsx)(l.A,{children:"26.j/3"}),(0,r.jsx)(o.A,{items:["AI05-0178-1"]}),(0,r.jsx)(t.A,{type:"aarm",aarm:"correction",children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)("b",{})," Added incomplete views to the list of reasons for a view of a type to be limited. This is not a change as the definition already was in ",(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.10#Subclause_3.10.1",children:"3.10.1"}),". But it is much better to have all of the reasons for limitedness together. ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(d.A,{children:(0,r.jsx)(s.h4,{id:"extensions-to-ada-2012",children:"Extensions to Ada 2012"})}),"\n",(0,r.jsxs)(d.A,{children:[(0,r.jsx)(l.A,{children:"26.k/5"}),(0,r.jsx)(o.A,{items:["AI12-0172-1"]}),(0,r.jsx)(t.A,{type:"aarm",aarm:"correction",children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)("b",{})," A ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-11/AA-11.3#S0309",children:"raise_expression"})})," can be used in an expression used in a limited context. This is harmless (no object will be created if an exception is raised instead), useful, and thus appears to have been an omission when ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-11/AA-11.3#S0309",children:"raise_expression"})}),"s were added to the language. ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(d.A,{children:(0,r.jsx)(s.h4,{id:"wording-changes-from-ada-2012",children:"Wording Changes from Ada 2012"})}),"\n",(0,r.jsxs)(d.A,{children:[(0,r.jsx)(l.A,{children:"26.l/5"}),(0,r.jsx)(o.A,{items:["AI12-0127-1"]}),(0,r.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(s.p,{children:["Added the ",(0,r.jsxs)("i",{children:["base","_"]}),(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})})," of a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.3#S0120",children:"delta_aggregate"})})," as a limited context. ",(0,r.jsx)("br",{})]})})]})]})}function p(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}}}]);