"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[3667],{5970:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>m,contentTitle:()=>h,default:()=>x,frontMatter:()=>d,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"arm/AA-H/AA-H.1","title":"H.1 Pragma Normalize_Scalars","description":"This Reference Manual output has not been verified,","source":"@site/docs/arm/AA-H/AA-H.1.mdx","sourceDirName":"arm/AA-H","slug":"/arm/AA-H/AA-H.1","permalink":"/docs/arm/AA-H/AA-H.1","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":186,"frontMatter":{"sidebar_position":186},"sidebar":"referenceManualSidebar","previous":{"title":"Annex H High Integrity Systems","permalink":"/docs/arm/AA-H/"},"next":{"title":"H.2 Documentation of Implementation Decisions","permalink":"/docs/arm/AA-H/AA-H.2"}}');var s=i(4848),r=i(8453),t=i(3204),o=i(4220),l=(i(8069),i(8011)),c=i(6465);const d={sidebar_position:186},h="H.1 Pragma Normalize_Scalars",m={},p=[{value:"Syntax",id:"syntax",level:4},{value:"Post-Compilation Rules",id:"post-compilation-rules",level:4},{value:"Documentation Requirements",id:"documentation-requirements",level:4},{value:"Implementation Advice",id:"implementation-advice",level:4}];function u(e){const a={a:"a",admonition:"admonition",h1:"h1",h4:"h4",header:"header",p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.header,{children:(0,s.jsx)(a.h1,{id:"h1-pragma-normalize_scalars",children:"H.1 Pragma Normalize_Scalars"})}),"\n",(0,s.jsx)(a.admonition,{type:"danger",children:(0,s.jsxs)(a.p,{children:["This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,s.jsx)(a.a,{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20",children:"tracking issue"})]})}),"\n","\n",(0,s.jsx)(l.A,{children:"1"}),"\n",(0,s.jsxs)("p",{children:["This pragma ensures that an otherwise uninitialized scalar object is set to a predictable value, but out of range if possible. ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(o.A,{children:[(0,s.jsx)(l.A,{children:"1.a"}),(0,s.jsx)(t.A,{type:"aarm",aarm:"discussion",children:(0,s.jsxs)(a.p,{children:[(0,s.jsx)("strong",{}),"The goal of the pragma is to reduce the impact of a bounded error that results from a reference to an uninitialized scalar object, by having such a reference violate a range check and thus raise Constraint","_","Error. ",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsx)(a.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(l.A,{children:"2"}),"\n",(0,s.jsxs)("p",{class:"Indented2",children:["The form of a ",(0,s.jsx)("code",{children:(0,s.jsx)("a",{href:"/docs/arm/AA-2/AA-2.8#S0019",children:"pragma"})})," Normalize","_","Scalars is as follows: ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(l.A,{children:"3"}),"\n",(0,s.jsxs)("p",{class:"Indented2",children:["  ",(0,s.jsx)("strong",{children:"pragma"})," Normalize","_","Scalars; ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(a.h4,{id:"post-compilation-rules",children:"Post-Compilation Rules"}),"\n",(0,s.jsx)(l.A,{children:"4"}),"\n",(0,s.jsxs)("p",{children:["Pragma Normalize","_","Scalars is a configuration pragma. It applies to all ",(0,s.jsx)("code",{children:(0,s.jsx)("a",{href:"/docs/arm/AA-10/AA-10.1#S0286",children:"compilation_unit"})}),"s included in a partition. ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(a.h4,{id:"documentation-requirements",children:"Documentation Requirements"}),"\n",(0,s.jsx)(l.A,{children:"5/2"}),"\n",(0,s.jsx)(c.A,{items:["AI95-00434-01"]}),"\n",(0,s.jsxs)("p",{children:["If a ",(0,s.jsx)("code",{children:(0,s.jsx)("a",{href:"/docs/arm/AA-2/AA-2.8#S0019",children:"pragma"})})," Normalize","_","Scalars applies, the implementation shall document the implicit initial values for scalar subtypes, and shall identify each case in which such a value is used and is not an invalid representation. ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(o.A,{children:[(0,s.jsx)(l.A,{children:"5.a/2"}),(0,s.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,s.jsxs)(a.p,{children:[(0,s.jsx)("strong",{children:"Documentation Requirement: "}),"If a ",(0,s.jsx)("code",{children:(0,s.jsx)("a",{href:"/docs/arm/AA-2/AA-2.8#S0019",children:"pragma"})})," Normalize","_","Scalars applies, the implicit initial values of scalar subtypes shall be documented. Such a value should be an invalid representation when possible; any cases when is it not shall be documented.",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsxs)(o.A,{children:[(0,s.jsx)(l.A,{children:"5.b"}),(0,s.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,s.jsxs)(a.p,{children:[(0,s.jsx)("strong",{children:"To be honest: "}),"It's slightly inaccurate to say that the value is a representation, but the point should be clear anyway. ",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsxs)(o.A,{children:[(0,s.jsx)(l.A,{children:"5.c"}),(0,s.jsx)(t.A,{type:"aarm",aarm:"discussion",children:(0,s.jsxs)(a.p,{children:[(0,s.jsx)("strong",{}),"By providing a type with a size specification so that spare bits are present, it is possible to force an implementation of Normalize","_","Scalars to use an out of range value. This can be tested for by ensuring that Constraint","_","Error is raised. Similarly, for an unconstrained integer type, in which no spare bit is surely present, one can check that the initialization takes place to the value specified in the documentation of the implementation. For a floating point type, spare bits might not be available, but a range constraint can provide the ability to use an out of range value.",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsxs)(o.A,{children:[(0,s.jsx)(l.A,{children:"5.d"}),(0,s.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,s.jsxs)(a.p,{children:["If it is difficult to document the general rule for the implicit initial value, the implementation might choose instead to record the value on the object code listing or similar output produced during compilation.",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsx)(a.h4,{id:"implementation-advice",children:"Implementation Advice"}),"\n",(0,s.jsx)(l.A,{children:"6/2"}),"\n",(0,s.jsx)(c.A,{items:["AI95-00434-01"]}),"\n",(0,s.jsxs)("p",{children:["Whenever possible, the implicit initial values for a scalar subtype should be an invalid representation (see ",(0,s.jsx)("a",{href:"/docs/arm/AA-13/AA-13.9#Subclause_13.9.1",children:"13.9.1"}),"). ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(o.A,{children:[(0,s.jsx)(l.A,{children:"6.a"}),(0,s.jsx)(t.A,{type:"aarm",aarm:"discussion",children:(0,s.jsxs)(a.p,{children:[(0,s.jsx)("strong",{}),"When an out of range value is used for the initialization, it is likely that constraint checks will detect it. In addition, it can be detected by the Valid attribute.",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsxs)(o.A,{children:[(0,s.jsx)(l.A,{children:"6.b/2"}),(0,s.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,s.jsxs)(a.p,{children:["This rule is included in the documentation requirements, and thus does not need a separate summary item.",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsxs)(o.A,{children:[(0,s.jsx)(l.A,{children:"7"}),(0,s.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,s.jsxs)(a.p,{children:["NOTE 1   The initialization requirement applies to uninitialized scalar objects that are subcomponents of composite objects, to allocated objects, and to stand-alone objects. It also applies to scalar ",(0,s.jsx)("strong",{children:"out"})," parameters. Scalar subcomponents of composite ",(0,s.jsx)("strong",{children:"out"})," parameters are initialized to the corresponding part of the actual, by virtue of ",(0,s.jsx)("a",{href:"/docs/arm/AA-6/AA-6.4#Subclause_6.4.1",children:"6.4.1"}),".",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsxs)(o.A,{children:[(0,s.jsx)(l.A,{children:"8"}),(0,s.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,s.jsxs)(a.p,{children:["NOTE 2   The initialization requirement does not apply to a scalar for which pragma Import has been specified, since initialization of an imported object is performed solely by the foreign language environment (see ",(0,s.jsx)("a",{href:"/docs/arm/AA-B/AA-B.1",children:"B.1"}),").",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsxs)(o.A,{children:[(0,s.jsx)(l.A,{children:"9/5"}),(0,s.jsx)(c.A,{items:["AI12-0440-1"]}),(0,s.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,s.jsxs)(a.p,{children:["NOTE 3   The use of pragma Normalize","_","Scalars in conjunction with Pragma Restrictions(No","_","Exceptions) can result in erroneous execution (see ",(0,s.jsx)("a",{href:"/docs/arm/AA-H/AA-H.4",children:"H.4"}),"). ",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsxs)(o.A,{children:[(0,s.jsx)(l.A,{children:"9.a"}),(0,s.jsx)(t.A,{type:"aarm",aarm:"discussion",children:(0,s.jsxs)(a.p,{children:[(0,s.jsx)("strong",{}),"Since the effect of an access to an out of range value will often be to raise Constraint","_","Error, it is clear that suppressing the exception mechanism could result in erroneous execution. In particular, the assignment to an array, with the array index out of range, will result in a write to an arbitrary store location, having unpredictable effects.",(0,s.jsx)("br",{})]})})]})]})}function x(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}}}]);