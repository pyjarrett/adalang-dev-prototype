"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[1807],{3904:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>m,contentTitle:()=>l,default:()=>A,frontMatter:()=>h,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"arm/AA-C/AA-C.5","title":"C.5. Aspect Discard_Names","description":"This Reference Manual output has not been verified,","source":"@site/docs/arm/AA-C/AA-C.5.mdx","sourceDirName":"arm/AA-C","slug":"/arm/AA-C/AA-C.5","permalink":"/docs/arm/AA-C/AA-C.5","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":151,"frontMatter":{"sidebar_position":151},"sidebar":"referenceManualSidebar","previous":{"title":"C.4. Preelaboration Requirements","permalink":"/docs/arm/AA-C/AA-C.4"},"next":{"title":"C.6. Shared Variable Control","permalink":"/docs/arm/AA-C/AA-C.6"}}');var n=i(4848),t=i(8453),r=i(3204),d=i(4220),c=(i(8069),i(8011)),o=i(6465);const h={sidebar_position:151},l="C.5. Aspect Discard_Names",m={},p=[{value:"Static Semantics",id:"static-semantics",level:4},{value:"Syntax",id:"syntax",level:4},{value:"Legality Rules",id:"legality-rules",level:4},{value:"Static Semantics",id:"static-semantics-1",level:4},{value:"Implementation Advice",id:"implementation-advice",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4},{value:"Wording Changes from Ada 2012",id:"wording-changes-from-ada-2012",level:4}];function x(e){const a={a:"a",admonition:"admonition",h1:"h1",h4:"h4",header:"header",p:"p",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.header,{children:(0,n.jsx)(a.h1,{id:"c5-aspect-discard_names",children:"C.5. Aspect Discard_Names"})}),"\n",(0,n.jsx)(a.admonition,{type:"danger",children:(0,n.jsxs)(a.p,{children:["This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,n.jsx)(a.a,{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20",children:"tracking issue"})]})}),"\n","\n",(0,n.jsx)(c.A,{children:"1/4"}),"\n",(0,n.jsx)(o.A,{items:["AI12-0072-1"]}),"\n",(0,n.jsxs)("p",{children:["[Specifying the aspect Discard","_","Names can be used to request a reduction in storage used for the names of entities with runtime name text.] ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(a.h4,{id:"static-semantics",children:"Static Semantics"}),"\n",(0,n.jsx)(c.A,{children:"1.1/4"}),"\n",(0,n.jsx)(o.A,{items:["AI12-0072-1"]}),"\n",(0,n.jsxs)("p",{children:["An entity with ",(0,n.jsx)("i",{children:"runtime name text"})," is a nonderived enumeration first subtype, a tagged first subtype, or an exception.",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(c.A,{children:"1.2/4"}),"\n",(0,n.jsx)(o.A,{items:["AI12-0072-1"]}),"\n",(0,n.jsxs)("p",{children:["For an entity with runtime name text, the following language-defined representation aspect may be specified:",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(c.A,{children:"1.3/4"}),"\n",(0,n.jsxs)("dt",{children:[(0,n.jsx)("br",{}),"Discard","_","Names"]}),"\n",(0,n.jsx)("dl",{children:(0,n.jsxs)("dd",{children:["The type of aspect Discard","_","Names is Boolean. If directly specified, the ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-13/AA-13.1#S0348",children:"aspect_definition"})})," shall be a static expression. If not specified (including by inheritance), the aspect is False.",(0,n.jsx)("br",{})]})}),"\n",(0,n.jsxs)(d.A,{children:[(0,n.jsx)(c.A,{children:"1.a.1/4"}),(0,n.jsx)(r.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(a.p,{children:[(0,n.jsx)("b",{children:"Aspect Description for "}),(0,n.jsxs)("b",{children:["Discard","_","Names: "]}),"Requests a reduction in storage for names associated with an entity.",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(a.h4,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(c.A,{children:"2"}),"\n",(0,n.jsxs)("p",{class:"Indented2",children:["The form of a ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-2/AA-2.8#S0019",children:"pragma"})})," Discard","_","Names is as follows: ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(c.A,{children:"3"}),"\n",(0,n.jsxs)("p",{class:"Indented2",children:["  ",(0,n.jsx)("b",{children:"pragma"})," Discard","_","Names[([On =",">"," ] ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-13/AA-13.1#S0345",children:"local_name"})}),")];",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(c.A,{children:"4"}),"\n",(0,n.jsxs)("p",{class:"Indented2",children:["A ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-2/AA-2.8#S0019",children:"pragma"})})," Discard","_","Names is allowed only immediately within a ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-3/AA-3.11#S0086",children:"declarative_part"})}),", immediately within a ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-7/AA-7.1#S0230",children:"package_specification"})}),", or as a configuration pragma. ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(a.h4,{id:"legality-rules",children:"Legality Rules"}),"\n",(0,n.jsx)(c.A,{children:"5/4"}),"\n",(0,n.jsx)(o.A,{items:["AI12-0072-1"]}),"\n",(0,n.jsxs)("p",{children:["The ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-13/AA-13.1#S0345",children:"local_name"})})," (if present) shall denote an entity with runtime name text. The pragma specifies that the aspect Discard","_","Names for the type or exception has the value True. Without a ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-13/AA-13.1#S0345",children:"local_name"})}),", the pragma specifies that all entities with runtime name text declared after the pragma, within the same declarative region have the value True for aspect Discard","_","Names. Alternatively, the pragma can be used as a configuration pragma. If the configuration pragma Discard","_","Names applies to a compilation unit, all entities with runtime name text declared in the compilation unit have the value True for the aspect Discard","_","Names.",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(d.A,{children:[(0,n.jsx)(c.A,{children:"5.a/4"}),(0,n.jsx)(o.A,{items:["AI12-0072-1"]}),(0,n.jsx)(r.A,{type:"aarm",aarm:"ramification",children:(0,n.jsxs)(a.p,{children:[(0,n.jsx)("b",{}),"If the aspect is specified for a type, then it is inherited by all descendants of the type. The aspect cannot be specified as False on a derived type (because specifying the aspect is not allowed on derived enumeration types, and by rule applying to all aspects for other types (see ",(0,n.jsx)("a",{href:"/docs/arm/AA-13/AA-13.1#Subclause_13.1.1",children:"13.1.1"}),")). ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(a.h4,{id:"static-semantics-1",children:"Static Semantics"}),"\n",(0,n.jsx)(c.A,{children:"6"}),"\n",(0,n.jsxs)("p",{children:["If a ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-13/AA-13.1#S0345",children:"local_name"})})," is given, then a ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-2/AA-2.8#S0019",children:"pragma"})})," Discard","_","Names is a representation pragma.",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(d.A,{children:[(0,n.jsx)(c.A,{children:"6.a/4"}),(0,n.jsx)(o.A,{items:["AI05-0229-1","AI12-0072-1"]}),(0,n.jsxs)(r.A,{type:"aarm",aarm:"note",children:[(0,n.jsx)("i",{children:"This paragraph was deleted."}),(0,n.jsx)("br",{})]})]}),"\n",(0,n.jsx)(c.A,{children:"7/4"}),"\n",(0,n.jsx)(o.A,{items:["AI95-00285-01","AI95-00400-01","AI12-0072-1"]}),"\n",(0,n.jsxs)("p",{children:["If the aspect Discard","_","Names is True for an enumeration type, then the semantics of the Wide","_","Wide","_","Image and Wide","_","Wide","_","Value attributes are implementation defined for that type[; the semantics of Image, Wide","_","Image, Value, and Wide","_","Value are still defined in terms of Wide","_","Wide","_","Image and Wide","_","Wide","_","Value]. In addition, the semantics of Text","_","IO.Enumeration","_","IO are implementation defined. If the aspect Discard","_","Names is True for a tagged type, then the semantics of the Tags.Wide","_","Wide","_","Expanded","_","Name function are implementation defined for that type[; the semantics of Tags.Expanded","_","Name and Tags.Wide","_","Expanded","_","Name are still defined in terms of Tags.Wide","_","Wide","_","Expanded","_","Name]. If the aspect Discard","_","Names is True for an exception, then the semantics of the Exceptions.Wide","_","Wide","_","Exception","_","Name function are implementation defined for that exception[; the semantics of Exceptions.Exception","_","Name and Exceptions.Wide","_","Exception","_","Name are still defined in terms of Exceptions.Wide","_","Wide","_","Exception","_","Name].",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(d.A,{children:[(0,n.jsx)(c.A,{children:"7.a/4"}),(0,n.jsx)(r.A,{type:"aarm",aarm:"implementation-defined",children:(0,n.jsxs)(a.p,{children:[(0,n.jsx)("b",{}),"The semantics of some attributes and functions of an entity for which aspect Discard","_","Names is True.",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsxs)(d.A,{children:[(0,n.jsx)(c.A,{children:"7.b"}),(0,n.jsx)(r.A,{type:"aarm",aarm:"ramification",children:(0,n.jsxs)(a.p,{children:[(0,n.jsx)("b",{}),"The Width attribute is still defined in terms of Image.",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsxs)(d.A,{children:[(0,n.jsx)(c.A,{children:"7.c/4"}),(0,n.jsx)(o.A,{items:["AI95-00285-01","AI12-0072-1"]}),(0,n.jsx)(r.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(a.p,{children:["The semantics of S'Wide","_","Wide","_","Image and S'Wide","_","Wide","_","Value are implementation defined for any subtype of an enumeration type for which the aspect is True. (The pragma, if used, actually names the first subtype, of course.) ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(a.h4,{id:"implementation-advice",children:"Implementation Advice"}),"\n",(0,n.jsx)(c.A,{children:"8/4"}),"\n",(0,n.jsx)(o.A,{items:["AI12-0072-1"]}),"\n",(0,n.jsxs)("p",{children:["If the aspect Discard","_","Names is True for an entity, then the implementation should reduce the amount of storage used for storing names associated with that entity. ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(d.A,{children:[(0,n.jsx)(c.A,{children:"8.a/4"}),(0,n.jsx)(r.A,{type:"aarm",aarm:"implementation-advice",children:(0,n.jsxs)(a.p,{children:[(0,n.jsx)("b",{}),"If aspect Discard","_","Names is True for an entity, then the amount of storage used for storing names associated with that entity should be reduced.",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsxs)(d.A,{children:[(0,n.jsx)(c.A,{children:"8.b"}),(0,n.jsx)(r.A,{type:"aarm",aarm:"reason",children:(0,n.jsxs)(a.p,{children:[(0,n.jsx)("b",{}),"A typical implementation of the Image attribute for enumeration types is to store a table containing the names of all the enumeration literals. Aspect Discard","_","Names allows the implementation to avoid storing such a table without having to prove that the Image attribute is never used (which can be difficult in the presence of separate compilation).",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsxs)(d.A,{children:[(0,n.jsx)(c.A,{children:"8.c"}),(0,n.jsx)(r.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(a.p,{children:["We did not specify the semantics of the Image attribute when aspect Discard","_","Names is True because different semantics might be desirable in different situations. In some cases, it might make sense to use the Image attribute to print out a useful value that can be used to identify the entity given information in compiler-generated listings. In other cases, it might make sense to get an error at compile time or at run time. In cases where memory is plentiful, the simplest implementation makes sense: ignore the aspect. Implementations that are capable of avoiding the extra storage in cases where the Image attribute is never used might also wish to ignore the aspect.",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsxs)(d.A,{children:[(0,n.jsx)(c.A,{children:"8.d"}),(0,n.jsx)(r.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(a.p,{children:["The same applies to the Tags.Expanded","_","Name and Exceptions.Exception","_","Name functions. ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(d.A,{children:(0,n.jsx)(a.h4,{id:"wording-changes-from-ada-95",children:"Wording Changes from Ada 95"})}),"\n",(0,n.jsxs)(d.A,{children:[(0,n.jsx)(c.A,{children:"8.e/2"}),(0,n.jsx)(o.A,{items:["AI95-00285-01","AI95-00400-01"]}),(0,n.jsx)(r.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(a.p,{children:["Updated the wording to reflect that the double wide image and value functions are now the master versions that the others are defined from. ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(d.A,{children:(0,n.jsx)(a.h4,{id:"wording-changes-from-ada-2012",children:"Wording Changes from Ada 2012"})}),"\n",(0,n.jsxs)(d.A,{children:[(0,n.jsx)(c.A,{children:"8.f/4"}),(0,n.jsx)(o.A,{items:["AI12-0072-1"]}),(0,n.jsx)(r.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(a.p,{children:[(0,n.jsx)("b",{children:"Corrigendum:"})," Defined the pragma in terms of the aspect Discard","_","Names, and added a missing definition of the meaning of the configuration pragma. This is not intended to make any semantic change (Ada 2012 has an aspect Discard","_","Names defined via blanket rules for representation pragmas in ",(0,n.jsx)("a",{href:"/docs/arm/AA-13/AA-13.1",children:"13.1"})," and ",(0,n.jsx)("a",{href:"/docs/arm/AA-13/AA-13.1#Subclause_13.1.1",children:"13.1.1"}),"), just to clarify the meaning. ",(0,n.jsx)("br",{})]})})]})]})}function A(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}}}]);