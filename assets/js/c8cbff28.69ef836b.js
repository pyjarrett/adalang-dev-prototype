"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[4991],{26738:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>p,contentTitle:()=>m,default:()=>x,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var s=n(74848),t=n(28453),r=n(13842),a=n(91435),o=(n(21432),n(79162)),d=n(34421);const l={sidebar_position:171},m="Annex E Distributed Systems",c={id:"arm/AA-E/AA-E",title:"Annex E Distributed Systems",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-E/AA-E.mdx",sourceDirName:"arm/AA-E",slug:"/arm/AA-E/",permalink:"/docs/arm/AA-E/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:171,frontMatter:{sidebar_position:171},sidebar:"referenceManualSidebar",previous:{title:"D.16 Multiprocessor Implementation",permalink:"/docs/arm/AA-D/AA-D.16"},next:{title:"E.1 Partitions",permalink:"/docs/arm/AA-E/AA-E.1"}},p={},h=[{value:"Extensions to Ada 83",id:"extensions-to-ada-83",level:4},{value:"Post-Compilation Rules",id:"post-compilation-rules",level:4},{value:"Implementation Requirements",id:"implementation-requirements",level:4},{value:"Implementation Permissions",id:"implementation-permissions",level:4}];function u(e){const i={a:"a",admonition:"admonition",h1:"h1",h4:"h4",p:"p",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"annex-e-distributed-systems",children:"Annex E Distributed Systems"}),"\n",(0,s.jsx)(i.admonition,{type:"danger",children:(0,s.jsxs)(i.p,{children:["This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,s.jsx)(i.a,{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20",children:"tracking issue"})]})}),"\n","\n","\n",(0,s.jsx)(o.A,{children:"1"}),"\n",(0,s.jsxs)("p",{children:["[This Annex defines facilities for supporting the implementation of distributed systems using multiple partitions working cooperatively as part of a single Ada program.] ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(a.A,{children:(0,s.jsx)(i.h4,{id:"extensions-to-ada-83",children:"Extensions to Ada 83"})}),"\n",(0,s.jsxs)(a.A,{children:[(0,s.jsx)(o.A,{children:"1.a"}),(0,s.jsx)(r.A,{type:"aarm",aarm:"note",children:(0,s.jsxs)(i.p,{children:["This Annex is new to Ada 95. ",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsx)(i.h4,{id:"post-compilation-rules",children:"Post-Compilation Rules"}),"\n",(0,s.jsx)(o.A,{children:"2"}),"\n",(0,s.jsxs)("p",{children:["A ",(0,s.jsx)("em",{children:"distributed system"})," is an interconnection of one or more ",(0,s.jsx)("em",{children:"processing nodes"})," (a system resource that has both computational and storage capabilities), and zero or more ",(0,s.jsx)("em",{children:"storage nodes"})," (a system resource that has only storage capabilities, with the storage addressable by one or more processing nodes).",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(o.A,{children:"3"}),"\n",(0,s.jsxs)("p",{children:["A ",(0,s.jsx)("em",{children:"distributed program"})," comprises one or more partitions that execute independently (except when they communicate) in a distributed system.",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(o.A,{children:"4"}),"\n",(0,s.jsxs)("p",{children:["The process of mapping the partitions of a program to the nodes in a distributed system is called ",(0,s.jsx)("em",{children:"configuring the partitions of the program"}),". ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(i.h4,{id:"implementation-requirements",children:"Implementation Requirements"}),"\n",(0,s.jsx)(o.A,{children:"5"}),"\n",(0,s.jsxs)("p",{children:["The implementation shall provide means for explicitly assigning library units to a partition and for the configuring and execution of a program consisting of multiple partitions on a distributed system; the means are implementation defined. ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(a.A,{children:[(0,s.jsx)(o.A,{children:"5.a"}),(0,s.jsx)(r.A,{type:"aarm",aarm:"implementation-defined",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)("strong",{}),"The means for creating and executing distributed programs.",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsx)(i.h4,{id:"implementation-permissions",children:"Implementation Permissions"}),"\n",(0,s.jsx)(o.A,{children:"6"}),"\n",(0,s.jsxs)("p",{children:["An implementation may require that the set of processing nodes of a distributed system be homogeneous.",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(a.A,{children:[(0,s.jsx)(o.A,{children:"7/5"}),(0,s.jsx)(d.A,{items:["AI12-0440-1"]}),(0,s.jsx)(r.A,{type:"aarm",aarm:"note",children:(0,s.jsxs)(i.p,{children:["NOTE 1   The partitions comprising a program can be executed on differently configured distributed systems or on a nondistributed system without requiring recompilation. A distributed program can be partitioned differently from the same set of library units without recompilation. The resulting execution is semantically equivalent.",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsxs)(a.A,{children:[(0,s.jsx)(o.A,{children:"8"}),(0,s.jsx)(r.A,{type:"aarm",aarm:"note",children:(0,s.jsxs)(i.p,{children:["NOTE 2   A distributed program retains the same type safety as the equivalent single partition program.",(0,s.jsx)("br",{})]})})]})]})}function x(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}}}]);