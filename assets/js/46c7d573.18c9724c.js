"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[1760],{9530:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>x,contentTitle:()=>A,default:()=>m,frontMatter:()=>l,metadata:()=>n,toc:()=>j});const n=JSON.parse('{"id":"arm/AA-4/AA-4.7","title":"4.7. Qualified Expressions","description":"This Reference Manual output has not been verified,","source":"@site/docs/arm/AA-4/AA-4.7.mdx","sourceDirName":"arm/AA-4","slug":"/arm/AA-4/AA-4.7","permalink":"/docs/arm/AA-4/AA-4.7","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":37,"frontMatter":{"sidebar_position":37},"sidebar":"referenceManualSidebar","previous":{"title":"4.6. Type Conversions","permalink":"/docs/arm/AA-4/AA-4.6"},"next":{"title":"4.8. Allocators","permalink":"/docs/arm/AA-4/AA-4.8"}}');var r=i(4848),a=i(8453),d=i(3204),c=i(4220),o=i(8069),t=i(8011),h=i(6465);const l={sidebar_position:37},A="4.7. Qualified Expressions",x={},j=[{value:"Syntax",id:"syntax",level:4},{value:"Name Resolution Rules",id:"name-resolution-rules",level:4},{value:"Static Semantics",id:"static-semantics",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics",level:4},{value:"Examples",id:"examples",level:4},{value:"Wording Changes from Ada 2005",id:"wording-changes-from-ada-2005",level:4},{value:"Inconsistencies With Ada 2012",id:"inconsistencies-with-ada-2012",level:4},{value:"Wording Changes from Ada 2012",id:"wording-changes-from-ada-2012",level:4}];function p(e){const s={a:"a",admonition:"admonition",h1:"h1",h4:"h4",header:"header",p:"p",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"47-qualified-expressions",children:"4.7. Qualified Expressions"})}),"\n",(0,r.jsx)(s.admonition,{type:"danger",children:(0,r.jsxs)(s.p,{children:["This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,r.jsx)(s.a,{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20",children:"tracking issue"})]})}),"\n","\n",(0,r.jsx)(t.A,{children:"1"}),"\n",(0,r.jsxs)("p",{children:["[A ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.7#S0163",children:"qualified_expression"})})," is used to state explicitly the type, and to verify the subtype, of an operand that is either an ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})})," or an ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.3#S0106",children:"aggregate"})}),". ]",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(s.h4,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(t.A,{children:"2"}),"\n",(0,r.jsx)(o.A,{children:(0,r.jsxs)(s.p,{children:[(0,r.jsxs)("code",{children:["qualified","_","expression"]}),(0,r.jsx)("a",{id:"S0163"}),(0,r.jsx)("code",{children:" ::= "}),(0,r.jsx)("br",{}),"   ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.2#S0028",children:"subtype_mark"})}),"'(",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})}),") | ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.2#S0028",children:"subtype_mark"})}),"'",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.3#S0106",children:"aggregate"})}),(0,r.jsx)("br",{})]})}),"\n",(0,r.jsx)(s.h4,{id:"name-resolution-rules",children:"Name Resolution Rules"}),"\n",(0,r.jsx)(t.A,{children:"3/5"}),"\n",(0,r.jsx)(h.A,{items:["AI12-0325-1"]}),"\n",(0,r.jsxs)("p",{children:["The expected type for the ",(0,r.jsx)("i",{children:"operand"})," (the ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})})," or ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.3#S0106",children:"aggregate"})}),") is determined by the ",(0,r.jsx)("code",{children:(0,r.jsxs)("a",{href:"/docs/arm/AA-3/AA-3.2#S0028",children:["subtype","_","mark"]})}),". Furthermore, the operand shall resolve to be either the specified expected type or a universal type that covers it. ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(c.A,{children:[(0,r.jsx)(t.A,{children:"3.a/5"}),(0,r.jsx)(h.A,{items:["AI12-0325-1"]}),(0,r.jsx)(d.A,{type:"aarm",aarm:"reason",children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)("b",{}),"The first sentence defines the expected type for rules that assume one is defined. The second sentence prevents the use of the various implicit conversions that are usually allowed for expected types (except the one for numeric literals). The intent is that a qualified expression is similar to an assertion about the subtype of the operand, and thus implicit conversions would interfere with that intent. ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"static-semantics",children:"Static Semantics"}),"\n",(0,r.jsx)(t.A,{children:"3.1/3"}),"\n",(0,r.jsx)(h.A,{items:["AI05-0003-1"]}),"\n",(0,r.jsxs)("p",{children:["[If the operand of a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.7#S0163",children:"qualified_expression"})})," denotes an object, the ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.7#S0163",children:"qualified_expression"})})," denotes a constant view of that object.] The nominal subtype of a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.7#S0163",children:"qualified_expression"})})," is the subtype denoted by the ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.2#S0028",children:"subtype_mark"})}),". ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(c.A,{children:[(0,r.jsx)(t.A,{children:"3.b/3"}),(0,r.jsx)(h.A,{items:["AI05-0003-1"]}),(0,r.jsx)(d.A,{type:"aarm",aarm:"proof",children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)("b",{}),"This is stated in ",(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.3",children:"3.3"}),". ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"dynamic-semantics",children:"Dynamic Semantics"}),"\n",(0,r.jsx)(t.A,{children:"4/5"}),"\n",(0,r.jsx)(h.A,{items:["AI12-0100-1","AI12-0449-1"]}),"\n",(0,r.jsxs)("p",{children:["The evaluation of a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.7#S0163",children:"qualified_expression"})})," evaluates the operand (and if of a universal type, converts it to the type determined by the ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.2#S0028",children:"subtype_mark"})}),") and checks that its value belongs to the subtype denoted by the ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.2#S0028",children:"subtype_mark"})}),". The exception Constraint","_","Error is raised if this check fails. Furthermore, if predicate checks are enabled for the subtype denoted by the ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.2#S0028",children:"subtype_mark"})}),", a check is performed as defined in ",(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.2#Subclause_3.2.4",children:"3.2.4"})," that the value satifies the predicates of the subtype. ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(c.A,{children:[(0,r.jsx)(t.A,{children:"4.a"}),(0,r.jsx)(d.A,{type:"aarm",aarm:"ramification",children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)("b",{}),"This is one of the few contexts in Ada 95 where implicit subtype conversion is not performed prior to a constraint check, and hence no \u201csliding\u201d of array bounds is provided.",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsxs)(c.A,{children:[(0,r.jsx)(t.A,{children:"4.a.1/4"}),(0,r.jsx)(h.A,{items:["AI12-0100-1"]}),(0,r.jsx)(d.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(s.p,{children:["The effect of a failed predicate check is as defined in ",(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.2#Subclause_3.2.4",children:"3.2.4"}),"; such a check could raise any exception, not just Constraint","_","Error or Assertion","_","Error. ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsxs)(c.A,{children:[(0,r.jsx)(t.A,{children:"4.b"}),(0,r.jsx)(d.A,{type:"aarm",aarm:"reason",children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)("b",{}),"Implicit subtype conversion is not provided because a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.7#S0163",children:"qualified_expression"})})," with a constrained target subtype is essentially an assertion about the subtype of the operand, rather than a request for conversion. An explicit ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.6#S0162",children:"type_conversion"})})," can be used rather than a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.7#S0163",children:"qualified_expression"})})," if subtype conversion is desired.",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsxs)(c.A,{children:[(0,r.jsx)(t.A,{children:"4.c/4"}),(0,r.jsx)(h.A,{items:["AI12-0100-1"]}),(0,r.jsx)(d.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(s.p,{children:["We do a predicate check here so that a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.7#S0163",children:"qualified_expression"})})," never allows something that the equivalent ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.6#S0162",children:"type_conversion"})})," would not allow. ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsxs)(c.A,{children:[(0,r.jsx)(t.A,{children:"5/5"}),(0,r.jsx)(h.A,{items:["AI12-0440-1"]}),(0,r.jsx)(d.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(s.p,{children:["NOTE   When a given context does not uniquely identify an expected type, a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.7#S0163",children:"qualified_expression"})})," can be used to do so. In particular, if an overloaded ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#S0091",children:"name"})})," or ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.3#S0106",children:"aggregate"})})," is passed to an overloaded subprogram, it can be necessary to qualify the operand to resolve its type. ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.A,{children:"6"}),"\n",(0,r.jsxs)("p",{children:[(0,r.jsx)("i",{children:"Examples of disambiguating expressions using qualification:"})," ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(t.A,{children:"7"}),"\n",(0,r.jsxs)(o.A,{language:"ada",children:[(0,r.jsxs)(s.p,{children:["type Mask is (Fix, Dec, Exp, Signif);","\n","type Code is (Fix, Cla, Dec, Tnz, Sub);","\n","\n",(0,r.jsx)(t.A,{children:"8"}),"\nPrint (Mask'(Dec));  --  Dec is of type Mask","\n","Print (Code'(Dec));  --  Dec is of type Code ","\n","\n",(0,r.jsx)(t.A,{children:"9/5"})]}),(0,r.jsx)(h.A,{items:["AI12-0442-1"]}),(0,r.jsxs)(s.p,{children:["for J in Code'(Fix) .. Code'(Dec) loop ... -- qualification is necessary for either Fix or Dec","\n","for J in Code range Fix .. Dec loop ...    -- qualification unnecessary","\n","for J in Code'(Fix) .. Dec loop ...        -- qualification unnecessary for Dec","\n","\n",(0,r.jsx)(t.A,{children:"10"}),"\nDozen'(1 | 3 | 5 | 7 =",">"," 2, others =",">"," 0) -- see ",(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.6",children:"4.6"})," ","\n"]})]}),"\n",(0,r.jsx)(c.A,{children:(0,r.jsx)(s.h4,{id:"wording-changes-from-ada-2005",children:"Wording Changes from Ada 2005"})}),"\n",(0,r.jsxs)(c.A,{children:[(0,r.jsx)(t.A,{children:"10.a/3"}),(0,r.jsx)(h.A,{items:["AI05-0003-1"]}),(0,r.jsx)(d.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(s.p,{children:["Added a definition of the nominal subtype of a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.7#S0163",children:"qualified_expression"})}),". ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(c.A,{children:(0,r.jsx)(s.h4,{id:"inconsistencies-with-ada-2012",children:"Inconsistencies With Ada 2012"})}),"\n",(0,r.jsxs)(c.A,{children:[(0,r.jsx)(t.A,{children:"10.b/5"}),(0,r.jsx)(h.A,{items:["AI12-0005-1","AI12-0100-1"]}),(0,r.jsx)(d.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)("b",{children:"Corrigendum:"})," A ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.7#S0163",children:"qualified_expression"})})," now performs a predicate check for the named subtype (if it is enabled). Original Ada 2012 did not include that check (an omission). While this is formally inconsistent (an exception could be raised when none would be raised by original Ada 2012), cases where this scenario arises are likely to be rare (the qualified expression would have to have a stricter subtype than the following usage) and the check is more likely to detect bugs than be unexpected. ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(c.A,{children:(0,r.jsx)(s.h4,{id:"wording-changes-from-ada-2012",children:"Wording Changes from Ada 2012"})}),"\n",(0,r.jsxs)(c.A,{children:[(0,r.jsx)(t.A,{children:"10.c/5"}),(0,r.jsx)(h.A,{items:["AI12-0325-1"]}),(0,r.jsx)(d.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(s.p,{children:["Reworded the resolution rule so that the operand of a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.7#S0163",children:"qualified_expression"})})," has an expected type. This eliminates an annoying inconsistency in the language definition. ",(0,r.jsx)("br",{})]})})]})]})}function m(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}}}]);