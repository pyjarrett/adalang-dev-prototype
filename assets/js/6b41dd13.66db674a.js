"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[3922],{8846:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>A,contentTitle:()=>x,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>j});const s=JSON.parse('{"id":"arm/AA-4/AA-4.2","title":"4.2. Literals","description":"This Reference Manual output has not been verified,","source":"@site/docs/arm/AA-4/AA-4.2.mdx","sourceDirName":"arm/AA-4","slug":"/arm/AA-4/AA-4.2","permalink":"/docs/arm/AA-4/AA-4.2","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":32,"frontMatter":{"sidebar_position":32},"sidebar":"referenceManualSidebar","previous":{"title":"4.1. Names","permalink":"/docs/arm/AA-4/AA-4.1"},"next":{"title":"4.3. Aggregates","permalink":"/docs/arm/AA-4/AA-4.3"}}');var r=n(4848),a=n(8453),t=n(3204),l=n(4220),c=n(8069),d=n(8011),h=n(6465);const o={sidebar_position:32},x="4.2. Literals",A={},j=[{value:"Name Resolution Rules",id:"name-resolution-rules",level:4},{value:"Legality Rules",id:"legality-rules",level:4},{value:"Static Semantics",id:"static-semantics",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics",level:4},{value:"Examples",id:"examples",level:4},{value:"Incompatibilities With Ada 83",id:"incompatibilities-with-ada-83",level:4},{value:"Extensions to Ada 83",id:"extensions-to-ada-83",level:4},{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83",level:4},{value:"Extensions to Ada 95",id:"extensions-to-ada-95",level:4},{value:"Wording Changes from Ada 2012",id:"wording-changes-from-ada-2012",level:4},{value:"4.2.1  User-Defined Literals",id:"421--user-defined-literals",level:2},{value:"Static Semantics",id:"static-semantics-1",level:4},{value:"Legality Rules",id:"legality-rules-1",level:4},{value:"Bounded (Run-Time) Errors",id:"bounded-run-time-errors",level:4},{value:"Examples",id:"examples-1",level:4},{value:"Extensions to Ada 2012",id:"extensions-to-ada-2012",level:4}];function p(e){const i={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h4:"h4",header:"header",p:"p",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"42-literals",children:"4.2. Literals"})}),"\n",(0,r.jsx)(i.admonition,{type:"danger",children:(0,r.jsxs)(i.p,{children:["This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,r.jsx)(i.a,{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20",children:"tracking issue"})]})}),"\n","\n",(0,r.jsx)(d.A,{children:"1"}),"\n",(0,r.jsxs)("p",{children:["[ A ",(0,r.jsx)("i",{children:"literal"})," represents a value literally, that is, by means of notation suited to its kind.] A literal is either a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-2/AA-2.4#S0006",children:"numeric_literal"})}),", a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-2/AA-2.5#S0015",children:"character_literal"})}),", the literal ",(0,r.jsx)("b",{children:"null"}),", or a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-2/AA-2.6#S0016",children:"string_literal"})}),". ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(d.A,{children:"1.a"}),(0,r.jsx)(t.A,{type:"aarm",aarm:"discussion",children:(0,r.jsxs)(i.p,{children:[(0,r.jsx)("b",{}),"An enumeration literal that is an ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-2/AA-2.3#S0002",children:"identifier"})})," rather than a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-2/AA-2.5#S0015",children:"character_literal"})})," is not considered a ",(0,r.jsx)("i",{children:"literal"})," in the above sense, because it involves no special notation \u201csuited to its kind\u201d. It might more properly be called an ",(0,r.jsxs)("code",{children:["enumeration","_","identifier"]}),", except for historical reasons. ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(i.h4,{id:"name-resolution-rules",children:"Name Resolution Rules"}),"\n",(0,r.jsx)(d.A,{children:"2/2"}),"\n",(0,r.jsx)(h.A,{items:["AI95-00230-01"]}),"\n",(0,r.jsxs)("p",{children:[(0,r.jsx)("i",{children:"This paragraph was deleted."}),(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(d.A,{children:"3"}),"\n",(0,r.jsxs)("p",{children:["For a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#S0091",children:"name"})})," that consists of a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-2/AA-2.5#S0015",children:"character_literal"})}),", either its expected type shall be a single character type, in which case it is interpreted as a parameterless ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-6/AA-6.4#S0218",children:"function_call"})})," that yields the corresponding value of the character type, or its expected profile shall correspond to a parameterless function with a character result type, in which case it is interpreted as the name of the corresponding parameterless function declared as part of the character type's definition (see ",(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.5#Subclause_3.5.1",children:"3.5.1"}),"). In either case, the ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-2/AA-2.5#S0015",children:"character_literal"})})," denotes the ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.5#S0039",children:"enumeration_literal_specification"})}),". ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(d.A,{children:"3.a"}),(0,r.jsx)(t.A,{type:"aarm",aarm:"discussion",children:(0,r.jsxs)(i.p,{children:[(0,r.jsx)("b",{}),"See ",(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#Subclause_4.1.3",children:"4.1.3"})," for the resolution rules for a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#S0099",children:"selector_name"})})," that is a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-2/AA-2.5#S0015",children:"character_literal"})}),". ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(d.A,{children:"4/5"}),"\n",(0,r.jsx)(h.A,{items:["AI12-0325-1","AI12-0373-1"]}),"\n",(0,r.jsxs)("p",{children:["The expected type for a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0141",children:"primary"})})," that is a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-2/AA-2.6#S0016",children:"string_literal"})})," shall be a single string type or a type with a specified String","_","Literal aspect (see ",(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.2#Subclause_4.2.1",children:"4.2.1"}),"). In either case, the ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-2/AA-2.6#S0016",children:"string_literal"})})," is interpreted to be of its expected type. If the expected type of an integer literal is a type with a specified Integer","_","Literal aspect (see ",(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.2#Subclause_4.2.1",children:"4.2.1"}),"), the literal is interpreted to be of its expected type; otherwise it is interpreted to be of type ",(0,r.jsxs)("i",{children:["universal","_","integer"]}),". If the expected type of a real literal is a type with a specified Real","_","Literal aspect (see ",(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.2#Subclause_4.2.1",children:"4.2.1"}),"), it is interpreted to be of its expected type; otherwise, it is interpreted to be of type ",(0,r.jsxs)("i",{children:["universal","_","real"]}),". ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(i.h4,{id:"legality-rules",children:"Legality Rules"}),"\n",(0,r.jsx)(d.A,{children:"5"}),"\n",(0,r.jsxs)("p",{children:["A ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-2/AA-2.5#S0015",children:"character_literal"})})," that is a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#S0091",children:"name"})})," shall correspond to a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.5#S0040",children:"defining_character_literal"})})," of the expected type, or of the result type of the expected profile.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(d.A,{children:"6/5"}),"\n",(0,r.jsx)(h.A,{items:["AI12-0295-1","AI12-0325-1"]}),"\n",(0,r.jsxs)("p",{children:["If the expected type for a string","_","literal is a string type, then for each character of the ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-2/AA-2.6#S0016",children:"string_literal"})})," there shall be a corresponding ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.5#S0040",children:"defining_character_literal"})})," of the component type of the expected string type.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(d.A,{children:"7/2"}),"\n",(0,r.jsx)(h.A,{items:["AI95-00230-01","AI95-00231-01"]}),"\n",(0,r.jsxs)("p",{children:[(0,r.jsx)("i",{children:"This paragraph was deleted."}),(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(i.h4,{id:"static-semantics",children:"Static Semantics"}),"\n",(0,r.jsx)(d.A,{children:"8/5"}),"\n",(0,r.jsx)(h.A,{items:["AI95-00230-01","AI12-0373-1"]}),"\n",(0,r.jsxs)("p",{children:["The literal ",(0,r.jsx)("b",{children:"null"})," is of type ",(0,r.jsxs)("i",{children:["universal","_","access"]}),". ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(i.h4,{id:"dynamic-semantics",children:"Dynamic Semantics"}),"\n",(0,r.jsx)(d.A,{children:"9/5"}),"\n",(0,r.jsx)(h.A,{items:["AI12-0249-1"]}),"\n",(0,r.jsxs)("p",{children:["If its expected type is a numeric type, the evaluation of a numeric literal yields the represented value. [In other cases, the effect of evaluating a numeric literal is determined by the Integer","_","Literal or Real","_","Literal aspect that applies (see ",(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.2#Subclause_4.2.1",children:"4.2.1"}),").]",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(d.A,{children:"9.1/5"}),"\n",(0,r.jsx)(h.A,{items:["AI12-0249-1"]}),"\n",(0,r.jsxs)("p",{children:["The evaluation of the literal ",(0,r.jsx)("b",{children:"null"})," yields the null value of the expected type.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(d.A,{children:"10/5"}),"\n",(0,r.jsx)(h.A,{items:["AI12-0295-1","AI12-0325-1"]}),"\n",(0,r.jsxs)("p",{children:["The evaluation of a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-2/AA-2.6#S0016",children:"string_literal"})})," that is a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0141",children:"primary"})})," and has an expected type that is a string type, yields an array value containing the value of each character of the sequence of characters of the ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-2/AA-2.6#S0016",children:"string_literal"})}),", as defined in ",(0,r.jsx)("a",{href:"/docs/arm/AA-2/AA-2.6",children:"2.6"}),". The bounds of this array value are determined according to the rules for ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.3#S0114",children:"positional_array_aggregate"})}),"s (see ",(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.3#Subclause_4.3.3",children:"4.3.3"}),"), except that for a null string literal, the upper bound is the predecessor of the lower bound. [In other cases, the effect of evaluating a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-2/AA-2.6#S0016",children:"string_literal"})})," is determined by the String","_","Literal aspect that applies (see ",(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.2#Subclause_4.2.1",children:"4.2.1"}),").]",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(d.A,{children:"11/5"}),"\n",(0,r.jsx)(h.A,{items:["AI12-0295-1","AI12-0325-1"]}),"\n",(0,r.jsxs)("p",{children:["For the evaluation of a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-2/AA-2.6#S0016",children:"string_literal"})})," of a string type ",(0,r.jsx)("i",{children:"T"}),", a check is made that the value of each character of the ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-2/AA-2.6#S0016",children:"string_literal"})})," belongs to the component subtype of ",(0,r.jsx)("i",{children:"T"}),". For the evaluation of a null string literal of a string type, a check is made that its lower bound is greater than the lower bound of the base range of the index type. The exception Constraint","_","Error is raised if either of these checks fails. ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(d.A,{children:"11.a/5"}),(0,r.jsx)(h.A,{items:["AI12-0005-1"]}),(0,r.jsx)(t.A,{type:"aarm",aarm:"ramification",children:(0,r.jsxs)(i.p,{children:[(0,r.jsx)("b",{}),"If no predicates apply to the component subtype, the checks on the characters need not involve more than two checks altogether, since one need only check the characters of the string with the lowest and highest position numbers against the range of the component subtype. ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(d.A,{children:"12"}),(0,r.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(i.p,{children:["NOTE   Enumeration literals that are ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-2/AA-2.3#S0002",children:"identifier"})}),"s rather than ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-2/AA-2.5#S0015",children:"character_literal"})}),"s follow the normal rules for ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-2/AA-2.3#S0002",children:"identifier"})}),"s when used in a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#S0091",children:"name"})})," (see ",(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1",children:"4.1"})," and ",(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#Subclause_4.1.3",children:"4.1.3"}),"). ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-2/AA-2.5#S0015",children:"Character_literal"})}),"s used as ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#S0099",children:"selector_name"})}),"s follow the normal rules for expanded names (see ",(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#Subclause_4.1.3",children:"4.1.3"}),"). ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(i.h4,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(d.A,{children:"13"}),"\n",(0,r.jsxs)("p",{children:[(0,r.jsx)("i",{children:"Examples of literals:"})," ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(d.A,{children:"14"}),"\n",(0,r.jsx)(c.A,{language:"ada",children:(0,r.jsxs)(i.p,{children:["3.14159","_","26536 \t--  a real literal","\n","1","_","345 \t--  an integer literal","\n","'A' \t--  a character literal","\n",'"Some Text" \t--  a string literal ',"\n"]})}),"\n",(0,r.jsx)(l.A,{children:(0,r.jsx)(i.h4,{id:"incompatibilities-with-ada-83",children:"Incompatibilities With Ada 83"})}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(d.A,{children:"14.a"}),(0,r.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(i.p,{children:["Because ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-2/AA-2.5#S0015",children:"character_literal"})}),"s are now treated like other literals, in that they are resolved using context rather than depending on direct visibility, additional qualification might be necessary when passing a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-2/AA-2.5#S0015",children:"character_literal"})})," to an overloaded subprogram. ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(l.A,{children:(0,r.jsx)(i.h4,{id:"extensions-to-ada-83",children:"Extensions to Ada 83"})}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(d.A,{children:"14.b"}),(0,r.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(i.p,{children:[(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-2/AA-2.5#S0015",children:"Character_literal"})}),"s are now treated analogously to ",(0,r.jsx)("b",{children:"null"})," and ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-2/AA-2.6#S0016",children:"string_literal"})}),"s, in that they are resolved using context, rather than their content; the declaration of the corresponding ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.5#S0040",children:"defining_character_literal"})})," need not be directly visible. ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(l.A,{children:(0,r.jsx)(i.h4,{id:"wording-changes-from-ada-83",children:"Wording Changes from Ada 83"})}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(d.A,{children:"14.c"}),(0,r.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(i.p,{children:["Name Resolution rules for enumeration literals that are not ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-2/AA-2.5#S0015",children:"character_literal"})}),'s are not included anymore, since they are neither syntactically nor semantically "literals" but are rather names of parameterless functions. ',(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(l.A,{children:(0,r.jsx)(i.h4,{id:"extensions-to-ada-95",children:"Extensions to Ada 95"})}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(d.A,{children:"14.d/2"}),(0,r.jsx)(h.A,{items:["AI95-00230-01","AI95-00231-01"]}),(0,r.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(i.p,{children:[(0,r.jsx)("b",{children:"Null"})," now has type ",(0,r.jsxs)("i",{children:["universal","_","access"]}),", which is similar to other literals. ",(0,r.jsx)("b",{children:"Null"})," can be used with anonymous access types. ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(l.A,{children:(0,r.jsx)(i.h4,{id:"wording-changes-from-ada-2012",children:"Wording Changes from Ada 2012"})}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(d.A,{children:"14.e/5"}),(0,r.jsx)(h.A,{items:["AI12-0249-1","AI12-0295-1"]}),(0,r.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(i.p,{children:["The rules in this subclause are adjusted to allow for the possibility of user-defined literals. These are fully documented in the next subclause. ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)("a",{id:"Subclause_4.2.1"}),"\n",(0,r.jsx)(i.h2,{id:"421--user-defined-literals",children:"4.2.1  User-Defined Literals"}),"\n",(0,r.jsx)(d.A,{children:"1/5_4.2.1"}),"\n",(0,r.jsx)(h.A,{items:["AI12-0249-1"]}),"\n",(0,r.jsxs)("p",{children:["Using one or more of the aspects defined below, a type may be specified to allow the use of one or more kinds of literals as values of the type. ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(i.h4,{id:"static-semantics-1",children:"Static Semantics"}),"\n",(0,r.jsx)(d.A,{children:"2/5_4.2.1"}),"\n",(0,r.jsx)(h.A,{items:["AI12-0249-1","AI12-0342-1"]}),"\n",(0,r.jsxs)("p",{children:["The following type-related operational aspects (collectively known as ",(0,r.jsx)("i",{children:"user-defined literal aspects"}),") may be specified for a type ",(0,r.jsx)("i",{children:"T"}),":",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(d.A,{children:"3/5_4.2.1"}),"\n",(0,r.jsx)(h.A,{items:["AI12-0249-1","AI12-0342-1","AI12-0373-1"]}),"\n",(0,r.jsxs)("dt",{children:[(0,r.jsx)("br",{}),"Integer","_","Literal"]}),"\n",(0,r.jsx)("dl",{children:(0,r.jsxs)("dd",{children:["This aspect is specified by a ",(0,r.jsxs)("i",{children:["function","_"]}),(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#S0091",children:"name"})})," that statically denotes a function with a result type of ",(0,r.jsx)("i",{children:"T"})," and one ",(0,r.jsx)("b",{children:"in"})," parameter that is of type String and is not explicitly aliased.",(0,r.jsx)("br",{})]})}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(d.A,{children:"3.a/5_4.2.1"}),(0,r.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(i.p,{children:[(0,r.jsx)("b",{children:"Aspect Description for "}),(0,r.jsxs)("b",{children:["Integer","_","Literal: "]}),"Defines a function to implement user-defined integer literals.",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(d.A,{children:"4/5_4.2.1"}),"\n",(0,r.jsx)(h.A,{items:["AI12-0249-1","AI12-0342-1","AI12-0373-1","AI12-0394-1"]}),"\n",(0,r.jsxs)("dt",{children:[(0,r.jsx)("br",{}),"Real","_","Literal"]}),"\n",(0,r.jsx)("dl",{children:(0,r.jsxs)("dd",{children:["This aspect is specified by a ",(0,r.jsxs)("i",{children:["function","_"]}),(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#S0091",children:"name"})})," that statically denotes a function with a result type of ",(0,r.jsx)("i",{children:"T"})," and one ",(0,r.jsx)("b",{children:"in"})," parameter that is of type String and is not explicitly aliased, and optionally a second function [(overloading the first) ]with a result type of ",(0,r.jsx)("i",{children:"T"})," and two ",(0,r.jsx)("b",{children:"in"})," parameters of type String that are not explicitly aliased.",(0,r.jsx)("br",{})]})}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(d.A,{children:"4.a/5_4.2.1"}),(0,r.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(i.p,{children:[(0,r.jsx)("b",{children:"Aspect Description for "}),(0,r.jsxs)("b",{children:["Real","_","Literal: "]}),"Defines a function or functions to implement user-defined real literals.",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(d.A,{children:"5/5_4.2.1"}),"\n",(0,r.jsx)(h.A,{items:["AI12-0295-1","AI12-0342-1","AI12-0373-1"]}),"\n",(0,r.jsxs)("dt",{children:[(0,r.jsx)("br",{}),"String","_","Literal"]}),"\n",(0,r.jsx)("dl",{children:(0,r.jsxs)("dd",{children:["This aspect is specified by a ",(0,r.jsxs)("i",{children:["function","_"]}),(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#S0091",children:"name"})})," that statically denotes a function with a result type of ",(0,r.jsx)("i",{children:"T"})," and one ",(0,r.jsx)("b",{children:"in"})," parameter that is of type Wide","_","Wide","_","String and is not explicitly aliased.",(0,r.jsx)("br",{})]})}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(d.A,{children:"5.a/5_4.2.1"}),(0,r.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(i.p,{children:[(0,r.jsx)("b",{children:"Aspect Description for "}),(0,r.jsxs)("b",{children:["String","_","Literal: "]}),"Defines a function to implement user-defined string literals.",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(d.A,{children:"5.b/5_4.2.1"}),(0,r.jsx)(h.A,{items:["AI12-0342-1"]}),(0,r.jsx)(t.A,{type:"aarm",aarm:"ramification",children:(0,r.jsxs)(i.p,{children:[(0,r.jsx)("b",{}),"The following example is legal because the resolution of an ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-13/AA-13.1#S0348",children:"aspect_definition"})})," for an aspect that is defined to be a subprogram is based on the profile required for that aspect (see ",(0,r.jsx)("a",{href:"/docs/arm/AA-13/AA-13.1#Subclause_13.1.1",children:"13.1.1"}),"): ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(d.A,{children:"5.c/5_4.2.1"}),(0,r.jsx)(c.A,{language:"ada",children:(0,r.jsxs)(i.p,{children:["package Pkg1 is","\n","   type T is record X, Y : Integer; end record","\n","     with Integer","_","Literal =",">"," Int","_","Lit;","\n","   function Int","_","Lit (X, Y : T) return Duration;    -- Wrong profile.","\n","   function Int","_","Lit (Lit","_","Image : String) return T; -- Right profile.","\n","end Pkg1;","\n"]})})]}),"\n",(0,r.jsx)(d.A,{children:"6/5_4.2.1"}),"\n",(0,r.jsx)(h.A,{items:["AI12-0342-1","AI12-0419-1"]}),"\n",(0,r.jsxs)("p",{children:["User-defined literal aspects are nonoverridable (see ",(0,r.jsx)("a",{href:"/docs/arm/AA-13/AA-13.1#Subclause_13.1.1",children:"13.1.1"}),"). ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(d.A,{children:"6.a/5_4.2.1"}),(0,r.jsx)(t.A,{type:"aarm",aarm:"discussion",children:(0,r.jsxs)(i.p,{children:[(0,r.jsx)("b",{}),"This means that in this example",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(d.A,{children:"6.b/5_4.2.1"}),(0,r.jsx)(c.A,{language:"ada",children:(0,r.jsxs)(i.p,{children:["package Pkg2 is","\n","   type T1 is record","\n","      X, Y : Integer;","\n","   end record with Integer","_","Literal =",">"," I","_","L;","\n","\n",(0,r.jsx)(d.A,{children:"6.c/5_4.2.1"}),"\nfunction I","_","L (S : String) return T1 is ((0, 0));","\n","\n",(0,r.jsx)(d.A,{children:"6.d/5_4.2.1"}),"\ntype T2 is new T1;","\n","   function I","_","L (S : String) return T2 is ((1, 1));","\n","   X : T2 := 123;","\n","end Pkg2;","\n"]})})]}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(d.A,{children:"6.e/5_4.2.1"}),(0,r.jsx)(h.A,{items:["AI12-0005-1","AI12-0342-1","AI12-0419-1"]}),(0,r.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(i.p,{children:["the initial value of Pkg2.X is (1,1), not (0,0). ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(d.A,{children:"7/5_4.2.1"}),"\n",(0,r.jsx)(h.A,{items:["AI12-0342-1","AI12-0427-1"]}),"\n",(0,r.jsxs)("p",{children:["When a numeric literal is interpreted as a value of a non-numeric type ",(0,r.jsx)("i",{children:"T"})," or a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-2/AA-2.6#S0016",children:"string_literal"})})," is interpreted as a value of a type ",(0,r.jsx)("i",{children:"T"})," that is not a string type (see ",(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.2",children:"4.2"}),"), it is equivalent to a call to the subprogram denoted by the corresponding aspect of ",(0,r.jsx)("i",{children:"T"}),": the Integer","_","Literal aspect for an integer literal, the Real","_","Literal aspect for a real literal, and the String","_","Literal aspect for a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-2/AA-2.6#S0016",children:"string_literal"})}),". The actual parameter of this notional call is a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-2/AA-2.6#S0016",children:"string_literal"})})," representing a sequence of characters that is the same as the sequence of characters in the original numeric literal, or the sequence represented by the original string literal.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(d.A,{children:"7.a/5_4.2.1"}),(0,r.jsx)(t.A,{type:"aarm",aarm:"discussion",children:(0,r.jsxs)(i.p,{children:[(0,r.jsx)("b",{}),"This equivalence defines, for example, the nominal type, the nominal subtype, and the accessibility level of a user-defined literal. It also has the consequence that a user-defined literal shall not be of an abstract type (because that would be equivalent to a nondispatching call to an abstract function). This equivalence also defines the Dynamic Semantics of evaluating a user-defined literal.",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(d.A,{children:"7.b/5_4.2.1"}),(0,r.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(i.p,{children:["The (sub)type of the actual parameter to this call is determined by the profile of the appropriate aspect, and the bounds of the ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-2/AA-2.6#S0016",children:"string_literal"})})," are defined by the usual rules for the bounds of a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-2/AA-2.6#S0016",children:"string_literal"})}),". ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(d.A,{children:"8/5_4.2.1"}),"\n",(0,r.jsx)(h.A,{items:["AI12-0342-1"]}),"\n",(0,r.jsxs)("p",{children:["Such a literal is said to be a ",(0,r.jsx)("i",{children:"user-defined literal"}),".",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(d.A,{children:"9/5_4.2.1"}),"\n",(0,r.jsx)(h.A,{items:["AI12-0394-1"]}),"\n",(0,r.jsxs)("p",{children:["When a named number that denotes a value of type ",(0,r.jsxs)("i",{children:["universal","_","integer"]})," is interpreted as a value of a non-numeric type ",(0,r.jsx)("i",{children:"T"}),", it is equivalent to a call to the function denoted by the Integer","_","Literal aspect of ",(0,r.jsx)("i",{children:"T"}),". The actual parameter of this notional call is a String having a textual representation of a decimal integer literal optionally preceded by a minus sign, representing the same value as the named number.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(d.A,{children:"10/5_4.2.1"}),"\n",(0,r.jsx)(h.A,{items:["AI12-0394-1"]}),"\n",(0,r.jsxs)("p",{children:["When a named number that denotes a value of type ",(0,r.jsxs)("i",{children:["universal","_","real"]})," is interpreted as a value of a non-numeric type ",(0,r.jsx)("i",{children:"T"}),", it is equivalent to a call to the two-parameter function denoted by the Real","_","Literal aspect of ",(0,r.jsx)("i",{children:"T"}),", if any. The actual parameters of this notional call are each a String with the textual representation of a decimal integer literal, with the first optionally preceded by a minus sign, where the first String represents the same value as the numerator, and the second the same value as the denominator, of the named number when represented as a rational number in lowest terms, with a positive denominator.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(i.h4,{id:"legality-rules-1",children:"Legality Rules"}),"\n",(0,r.jsx)(d.A,{children:"11/5_4.2.1"}),"\n",(0,r.jsx)(h.A,{items:["AI12-0249-1","AI12-0295-1","AI12-0325-1","AI12-0342-1"]}),"\n",(0,r.jsxs)("p",{children:["The Integer","_","Literal or Real","_","Literal aspect shall not be specified for a type ",(0,r.jsx)("i",{children:"T"})," if the full view of ",(0,r.jsx)("i",{children:"T"})," is a numeric type. The String","_","Literal aspect shall not be specified for a type ",(0,r.jsx)("i",{children:"T"})," if the full view of ",(0,r.jsx)("i",{children:"T"})," is a string type.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(d.A,{children:"12/5_4.2.1"}),"\n",(0,r.jsx)(h.A,{items:["AI12-0342-1"]}),"\n",(0,r.jsxs)("p",{children:["For a nonabstract type, the function directly specified for a user-defined literal aspect shall not be abstract.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(d.A,{children:"13/5_4.2.1"}),"\n",(0,r.jsx)(h.A,{items:["AI12-0342-1"]}),"\n",(0,r.jsxs)("p",{children:["For a tagged type with a partial view, a user-defined literal aspect shall not be directly specified on the full type.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(d.A,{children:"14/5_4.2.1"}),"\n",(0,r.jsx)(h.A,{items:["AI12-0342-1","AI12-0394-1"]}),"\n",(0,r.jsxs)("p",{children:["If a nonabstract tagged type inherits any user-defined literal aspect, then each inherited aspect shall be directly specified as a nonabstract function for the type unless the inherited aspect denotes a nonabstract function, or functions, and the type is a null extension.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(d.A,{children:"15/5_4.2.1"}),"\n",(0,r.jsx)(h.A,{items:["AI12-0394-1"]}),"\n",(0,r.jsxs)("p",{children:["If a named number that denotes a value of type ",(0,r.jsxs)("i",{children:["universal","_","integer"]})," is interpreted as a value of a non-numeric type ",(0,r.jsx)("i",{children:"T"}),", ",(0,r.jsx)("i",{children:"T"})," shall have an Integer","_","Literal aspect. If a named number that denotes a value of type ",(0,r.jsxs)("i",{children:["universal","_","real"]})," is interpreted as a value of a non-numeric type ",(0,r.jsx)("i",{children:"T"}),", ",(0,r.jsx)("i",{children:"T"})," shall have a Real","_","Literal aspect, and the aspect shall denote a function that has two ",(0,r.jsx)("b",{children:"in"})," parameters, both of type String, with result of type ",(0,r.jsx)("i",{children:"T"}),".",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(d.A,{children:"16/5_4.2.1"}),"\n",(0,r.jsx)(h.A,{items:["AI12-0249-1","AI12-0342-1"]}),"\n",(0,r.jsxs)("p",{children:["In addition to the places where Legality Rules normally apply (see ",(0,r.jsx)("a",{href:"/docs/arm/AA-12/AA-12.3",children:"12.3"}),"), these rules also apply in the private part of an instance of a generic unit. ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(i.h4,{id:"bounded-run-time-errors",children:"Bounded (Run-Time) Errors"}),"\n",(0,r.jsx)(d.A,{children:"17/5_4.2.1"}),"\n",(0,r.jsx)(h.A,{items:["AI12-0249-1","AI12-0325-1","AI12-0342-1","AI12-0394-1"]}),"\n",(0,r.jsxs)("p",{children:["It is a bounded error if the evaluation of a literal or named number that has an expected type with a specified user-defined literal aspect propagates an exception. Either Program","_","Error or the exception propagated by the evaluation is raised at the point of use of the value of the literal or named number. If it is recognized prior to run time that evaluation of such a literal or named number will inevitably (if executed) result in such a bounded error, then this may be reported as an error prior to run time.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(d.A,{children:"17.a/5_4.2.1"}),(0,r.jsx)(h.A,{items:["AI12-0249-1"]}),(0,r.jsx)(t.A,{type:"aarm",aarm:"implementation-note",children:(0,r.jsxs)(i.p,{children:[(0,r.jsx)("b",{}),'As always, an implementation may apply "as-if" optimizations (those that result in the same external effects in the absence of erroneous execution) to the function calls associated with user-defined literals. In particular, if the function associated with a user-defined literal aspect has a Global aspect that indicates no references to global variables, then a number of optimizations are available to the implementation: ',(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(d.A,{children:"17.b/5_4.2.1"}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["The implementation can evaluate a user-defined literal function at compile-time if it has access to the body of the function (for example, if it is inlined), and that body doesn't reference anything evaluated at runtime. If the compile-time evaluation results in an exception, this bounded error allows the compilation unit to be rejected.",(0,r.jsx)("br",{})]}),(0,r.jsx)(d.A,{children:"17.c/5_4.2.1"}),(0,r.jsxs)("li",{children:["Implementations can use existing permissions (see ",(0,r.jsx)("a",{href:"/docs/arm/AA-6/AA-6.1#Subclause_6.1.2",children:"6.1.2"}),') to avoid evaluating the function associated with a user-defined literal more than once for a particular literal value. This evaluation can be "hoisted" (done once per compilation unit during the elaboration of the unit) if the compiler can prove that the function doesn\'t depend on any constants or locals with a runtime value not yet elaborated.',(0,r.jsx)("br",{})]}),(0,r.jsx)(d.A,{children:"17.d/5_4.2.1"}),(0,r.jsxs)("li",{children:["If the literal value is not needed by the execution of the program, the function call can be omitted even if it might have side-effects (again, see ",(0,r.jsx)("a",{href:"/docs/arm/AA-6/AA-6.1#Subclause_6.1.2",children:"6.1.2"}),"). ",(0,r.jsx)("br",{})]})]})]}),"\n",(0,r.jsx)(i.h4,{id:"examples-1",children:"Examples"}),"\n",(0,r.jsx)(d.A,{children:"18/5_4.2.1"}),"\n",(0,r.jsx)(h.A,{items:["AI12-0429-1"]}),"\n",(0,r.jsxs)("p",{children:[(0,r.jsx)("i",{children:"Examples of the specification and use of user-defined literals:"}),(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(d.A,{children:"19/5_4.2.1"}),"\n",(0,r.jsx)(h.A,{items:["AI12-0312-1"]}),"\n",(0,r.jsxs)(c.A,{language:"ada",children:[(0,r.jsxs)(i.p,{children:["subtype Roman","_","Character is Wide","_","Wide","_","Character","\n","   with Static","_","Predicate =",">","\n","      Roman","_","Character in 'I' | 'V' | 'X' | 'L' | 'C' | 'D' | 'M';","\n","\n",(0,r.jsx)(d.A,{children:"20/5_4.2.1"})]}),(0,r.jsx)(h.A,{items:["AI12-0312-1"]}),(0,r.jsxs)(i.p,{children:["Max","_","Roman","_","Number : constant := 3","_","999;  -- MMMCMXCIX","\n","\n",(0,r.jsx)(d.A,{children:"21/5_4.2.1"})]}),(0,r.jsx)(h.A,{items:["AI12-0312-1"]}),(0,r.jsxs)(i.p,{children:["type Roman","_","Number is range 1 .. Max","_","Roman","_","Number","\n","   with String","_","Literal =",">"," To","_","Roman","_","Number;","\n","\n",(0,r.jsx)(d.A,{children:"22/5_4.2.1"})]}),(0,r.jsx)(h.A,{items:["AI12-0312-1"]}),(0,r.jsxs)(i.p,{children:["function To","_","Roman","_","Number (S : Wide","_","Wide","_","String) return Roman","_","Number","\n","   with Pre =",">"," S'Length ",">"," 0 and then","\n","      (for all Char of S =",">"," Char in Roman","_","Character);","\n","\n",(0,r.jsx)(d.A,{children:"23/5_4.2.1"})]}),(0,r.jsx)(h.A,{items:["AI12-0312-1","AI12-0386-1"]}),(0,r.jsxs)(i.p,{children:["function To","_","Roman","_","Number (S : Wide","_","Wide","_","String) return Roman","_","Number is","\n","   (declare","\n","      R : constant array (Integer range ","<",">",") of Roman","_","Number :=","\n","         (for D in S'Range =",">"," Roman","_","Digit'Enum","_","Rep","\n","             (Roman","_","Digit'Wide","_","Wide","_","Value (''' & S(D) & ''')));","\n","                     -- See ",(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.5#Subclause_3.5.2",children:"3.5.2"})," and ",(0,r.jsx)("a",{href:"/docs/arm/AA-13/AA-13.4",children:"13.4"}),"\n","    begin","\n","      [for I in R'Range =",">","\n","         (if I ","<"," R'Last and then R(I) ","<"," R(I + 1) then -1 else 1) ","*"," R(I)]","\n",'            \'Reduce("+", 0)',"\n","   );","\n","\n",(0,r.jsx)(d.A,{children:"24/5_4.2.1"})]}),(0,r.jsx)(h.A,{items:["AI12-0312-1"]}),(0,r.jsxs)(i.p,{children:["X : Roman","_",'Number := "III" ',"*",' "IV" ',"*",' "XII"; -- 144 (that is, CXLIV)',"\n"]})]}),"\n",(0,r.jsx)(l.A,{children:(0,r.jsx)(i.h4,{id:"extensions-to-ada-2012",children:"Extensions to Ada 2012"})}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(d.A,{children:"24.a/5_4.2.1"}),(0,r.jsx)(h.A,{items:["AI12-0249-1","AI12-0295-1","AI12-0325-1","AI12-0342-1"]}),(0,r.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(i.p,{children:["The user-defined literal aspects Integer","_","Literal, Real","_","Literal, and String","_","Literal are new. ",(0,r.jsx)("br",{})]})})]})]})}function m(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}}}]);