"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[7420],{3840:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>f,frontMatter:()=>d,metadata:()=>m,toc:()=>u});var a=t(74848),s=t(28453),o=t(13842),i=t(91435),r=(t(21432),t(79162)),c=t(34421);const d={sidebar_position:187},l="H.2 Documentation of Implementation Decisions",m={id:"arm/AA-H/AA-H.2",title:"H.2 Documentation of Implementation Decisions",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-H/AA-H.2.mdx",sourceDirName:"arm/AA-H",slug:"/arm/AA-H/AA-H.2",permalink:"/docs/arm/AA-H/AA-H.2",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:187,frontMatter:{sidebar_position:187},sidebar:"referenceManualSidebar",previous:{title:"H.1 Pragma Normalize_Scalars",permalink:"/docs/arm/AA-H/AA-H.1"},next:{title:"H.3 Reviewable Object Code",permalink:"/docs/arm/AA-H/AA-H.3"}},h={},u=[{value:"Documentation Requirements",id:"documentation-requirements",level:4}];function p(e){const n={a:"a",admonition:"admonition",h1:"h1",h4:"h4",p:"p",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"h2-documentation-of-implementation-decisions",children:"H.2 Documentation of Implementation Decisions"}),"\n",(0,a.jsx)(n.admonition,{type:"danger",children:(0,a.jsxs)(n.p,{children:["This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,a.jsx)(n.a,{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20",children:"tracking issue"})]})}),"\n","\n","\n",(0,a.jsx)(n.h4,{id:"documentation-requirements",children:"Documentation Requirements"}),"\n",(0,a.jsx)(r.A,{children:"1/5"}),"\n",(0,a.jsx)(c.A,{items:["AI12-0439-1"]}),"\n",(0,a.jsxs)("p",{children:["The implementation shall document the range of effects for each situation that the language rules identify as either a bounded error or as having an unspecified effect. If the implementation can constrain the effects of erroneous execution for a given construct, then it shall document such constraints. [The documentation may be provided either independently of any compilation unit or partition, or as part of an annotated listing for a given unit or partition. See also ",(0,a.jsx)("a",{href:"/docs/arm/AA-1/AA-1.1#Subclause_1.1.3",children:"1.1.3"}),", and ",(0,a.jsx)("a",{href:"/docs/arm/AA-1/AA-1.1#Subclause_1.1.2",children:"1.1.2"}),".] ",(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(r.A,{children:"1.a/2"}),(0,a.jsxs)(o.A,{type:"aarm",aarm:"note",children:[(0,a.jsx)("em",{children:"This paragraph was deleted."}),(0,a.jsx)("br",{})]})]}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(r.A,{children:"1.b/2"}),(0,a.jsx)(o.A,{type:"aarm",aarm:"note",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)("strong",{children:"Documentation Requirement: "}),"The range of effects for each bounded error and each unspecified effect. If the effects of a given erroneous construct are constrained, the constraints shall be documented.",(0,a.jsx)("br",{})]})})]}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(r.A,{children:"2"}),(0,a.jsx)(o.A,{type:"aarm",aarm:"note",children:(0,a.jsxs)(n.p,{children:["NOTE   Among the situations to be documented are the conventions chosen for parameter passing, the methods used for the management of run-time storage, and the method used to evaluate numeric expressions if this involves extended range or extra precision.",(0,a.jsx)("br",{})]})})]}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(r.A,{children:"2.a"}),(0,a.jsx)(o.A,{type:"aarm",aarm:"discussion",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)("strong",{}),"Look up \u201cunspecified\u201d and \u201cerroneous execution\u201d in the index for a list of the cases.",(0,a.jsx)("br",{})]})})]}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(r.A,{children:"2.b"}),(0,a.jsx)(o.A,{type:"aarm",aarm:"note",children:(0,a.jsxs)(n.p,{children:["The management of run-time storage is particularly important. For safety applications, it is often necessary to show that a program cannot raise Storage","_","Error, and for security applications that information cannot leak via the run-time system. Users are likely to prefer a simple storage model that can be easily validated.",(0,a.jsx)("br",{})]})})]}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(r.A,{children:"2.c"}),(0,a.jsx)(o.A,{type:"aarm",aarm:"note",children:(0,a.jsxs)(n.p,{children:["The documentation could helpfully take into account that users may well adopt a subset to avoid some forms of erroneous execution, for instance, not using the abort statement, so that the effects of a partly completed ",(0,a.jsx)("code",{children:(0,a.jsx)("a",{href:"/docs/arm/AA-5/AA-5.2#S0173",children:"assignment_statement"})})," do not have to be considered in the validation of a program (see ",(0,a.jsx)("a",{href:"/docs/arm/AA-9/AA-9.8",children:"9.8"}),"). For this reason documentation linked to an actual compilation may be most useful. Similarly, an implementation may be able to take into account use of the Restrictions pragma. ",(0,a.jsx)("br",{})]})})]})]})}function f(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}}}]);