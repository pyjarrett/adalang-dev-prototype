"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[6835],{321:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>g,frontMatter:()=>d,metadata:()=>a,toc:()=>p});const a=JSON.parse('{"id":"arm/AA-12/AA-12","title":"12 Generic Units","description":"This Reference Manual output has not been verified,","source":"@site/docs/arm/AA-12/AA-12.mdx","sourceDirName":"arm/AA-12","slug":"/arm/AA-12/","permalink":"/docs/arm/AA-12/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":95,"frontMatter":{"sidebar_position":95},"sidebar":"referenceManualSidebar","previous":{"title":"11.6 Exceptions and Optimization","permalink":"/docs/arm/AA-11/AA-11.6"},"next":{"title":"12.1 Generic Declarations","permalink":"/docs/arm/AA-12/AA-12.1"}}');var i=r(4848),s=r(8453),t=r(3204),c=r(4220),o=(r(8069),r(8011));r(6465);const d={sidebar_position:95},l="12 Generic Units",h={},p=[];function m(e){const n={a:"a",admonition:"admonition",h1:"h1",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"12-generic-units",children:"12 Generic Units"})}),"\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsxs)(n.p,{children:["This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,i.jsx)(n.a,{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20",children:"tracking issue"})]})}),"\n","\n",(0,i.jsx)(o.A,{children:"1"}),"\n",(0,i.jsxs)("p",{children:["A ",(0,i.jsx)("em",{children:"generic unit"})," is a program unit that is either a generic subprogram or a generic package. A generic unit is a ",(0,i.jsx)("em",{children:"template"}),"[, which can be parameterized, and from which corresponding (nongeneric) subprograms or packages can be obtained]. The resulting program units are said to be ",(0,i.jsx)("em",{children:"instances"})," of the original generic unit. ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(c.A,{children:[(0,i.jsx)(o.A,{children:"1.a/5"}),(0,i.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)("strong",{children:"Term entry: "}),(0,i.jsx)("strong",{children:"generic unit"})," \u2014 template for a (nongeneric) program unit",(0,i.jsx)("br",{}),"Note 1: The template can be parameterized by objects, types, subprograms, and packages.",(0,i.jsx)("br",{}),"Note 2: Generic units can be used to perform the role that macros sometimes play in other languages.",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsxs)(c.A,{children:[(0,i.jsx)(o.A,{children:"1.b/5"}),(0,i.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)("strong",{children:"Term entry: "}),(0,i.jsx)("strong",{children:"generic instance"})," \u2014 nongeneric unit created by the instantiation of a generic unit",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsx)(o.A,{children:"2"}),"\n",(0,i.jsxs)("p",{children:["[A generic unit is declared by a ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-12/AA-12.1#S0310",children:"generic_declaration"})}),". This form of declaration has a ",(0,i.jsx)("code",{children:(0,i.jsxs)("a",{href:"/docs/arm/AA-12/AA-12.1#S0313",children:["generic","_","formal","_","part"]})})," declaring any generic formal parameters. An instance of a generic unit is obtained as the result of a ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-12/AA-12.3#S0315",children:"generic_instantiation"})})," with appropriate generic actual parameters for the generic formal parameters. An instance of a generic subprogram is a subprogram. An instance of a generic package is a package.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(o.A,{children:"3"}),"\n",(0,i.jsxs)("p",{children:["Generic units are templates. As templates they do not have the properties that are specific to their nongeneric counterparts. For example, a generic subprogram can be instantiated but it cannot be called. In contrast, an instance of a generic subprogram is a (nongeneric) subprogram; hence, this instance can be called but it cannot be used to produce further instances.] ",(0,i.jsx)("br",{})]})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}}}]);