"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[4490],{7803:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>m,contentTitle:()=>h,default:()=>u,frontMatter:()=>c,metadata:()=>n,toc:()=>A});const n=JSON.parse('{"id":"arm/AA-D/AA-D.9","title":"D.9. Delay Accuracy","description":"This Reference Manual output has not been verified,","source":"@site/docs/arm/AA-D/AA-D.9.mdx","sourceDirName":"arm/AA-D","slug":"/arm/AA-D/AA-D.9","permalink":"/docs/arm/AA-D/AA-D.9","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":163,"frontMatter":{"sidebar_position":163},"sidebar":"referenceManualSidebar","previous":{"title":"D.8. Monotonic Time","permalink":"/docs/arm/AA-D/AA-D.8"},"next":{"title":"D.10. Synchronous Task Control","permalink":"/docs/arm/AA-D/AA-D.10"}}');var t=a(4848),r=a(8453),i=a(3204),l=a(4220),o=(a(8069),a(8011)),d=a(6465);const c={sidebar_position:163},h="D.9. Delay Accuracy",m={},A=[{value:"Dynamic Semantics",id:"dynamic-semantics",level:4},{value:"Documentation Requirements",id:"documentation-requirements",level:4},{value:"Metrics",id:"metrics",level:4},{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4}];function x(e){const s={a:"a",admonition:"admonition",h1:"h1",h4:"h4",header:"header",p:"p",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"d9-delay-accuracy",children:"D.9. Delay Accuracy"})}),"\n",(0,t.jsx)(s.admonition,{type:"danger",children:(0,t.jsxs)(s.p,{children:["This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,t.jsx)(s.a,{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20",children:"tracking issue"})]})}),"\n","\n",(0,t.jsx)(o.A,{children:"1/3"}),"\n",(0,t.jsx)(d.A,{items:["AI05-0299-1"]}),"\n",(0,t.jsxs)("p",{children:["[This subclause specifies performance requirements for the ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-9/AA-9.6#S0266",children:"delay_statement"})}),". The rules apply both to ",(0,t.jsx)("code",{children:(0,t.jsxs)("a",{href:"/docs/arm/AA-9/AA-9.6#S0268",children:["delay","_","relative","_","statement"]})})," and to ",(0,t.jsx)("code",{children:(0,t.jsxs)("a",{href:"/docs/arm/AA-9/AA-9.6#S0267",children:["delay","_","until","_","statement"]})}),". Similarly, they apply equally to a simple ",(0,t.jsx)("code",{children:(0,t.jsxs)("a",{href:"/docs/arm/AA-9/AA-9.6#S0266",children:["delay","_","statement"]})})," and to one which appears in a ",(0,t.jsx)("code",{children:(0,t.jsxs)("a",{href:"/docs/arm/AA-9/AA-9.7#S0274",children:["delay","_","alternative"]})}),".] ",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(s.h4,{id:"dynamic-semantics",children:"Dynamic Semantics"}),"\n",(0,t.jsx)(o.A,{children:"2"}),"\n",(0,t.jsxs)("p",{children:["The effect of the ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-9/AA-9.6#S0266",children:"delay_statement"})})," for Real","_","Time.Time is defined in terms of Real","_","Time.Clock: ",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(o.A,{children:"3"}),"\n",(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:["If C1 is a value of Clock read before a task executes a ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-9/AA-9.6#S0268",children:"delay_relative_statement"})})," with duration D, and C2 is a value of Clock read after the task resumes execution following that ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-9/AA-9.6#S0266",children:"delay_statement"})}),", then C2 \u2013 C1 ",">","= D.",(0,t.jsx)("br",{})]}),(0,t.jsx)(o.A,{children:"4"}),(0,t.jsxs)("li",{children:["If C is a value of Clock read after a task resumes execution following a ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-9/AA-9.6#S0267",children:"delay_until_statement"})})," with Real","_","Time.Time value T, then C ",">","= T. ",(0,t.jsx)("br",{})]})]}),"\n",(0,t.jsx)(o.A,{children:"5"}),"\n",(0,t.jsxs)("p",{children:["A simple ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-9/AA-9.6#S0266",children:"delay_statement"})})," with a negative or zero value for the expiration time does not cause the calling task to be blocked; it is nevertheless a potentially blocking operation (see ",(0,t.jsx)("a",{href:"/docs/arm/AA-9/AA-9.5#Subclause_9.5.1",children:"9.5.1"}),").",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(o.A,{children:"6/3"}),"\n",(0,t.jsx)(d.A,{items:["AI05-0004-1"]}),"\n",(0,t.jsxs)("p",{children:["When a ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-9/AA-9.6#S0266",children:"delay_statement"})})," appears in a ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-9/AA-9.7#S0274",children:"delay_alternative"})})," of a ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-9/AA-9.7#S0276",children:"timed_entry_call"})})," the selection of the entry call is attempted, regardless of the specified expiration time. When a ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-9/AA-9.6#S0266",children:"delay_statement"})})," appears in a ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-9/AA-9.7#S0272",children:"select_alternative"})}),", and a call is queued on one of the open entries, the selection of that entry call proceeds, regardless of the value of the delay expression. ",(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(l.A,{children:[(0,t.jsx)(o.A,{children:"6.a"}),(0,t.jsx)(i.A,{type:"aarm",aarm:"ramification",children:(0,t.jsxs)(s.p,{children:[(0,t.jsx)("b",{}),"The effect of these requirements is that one has to always attempt a rendezvous, regardless of the value of the delay expression. This can be tested by issuing a ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-9/AA-9.7#S0276",children:"timed_entry_call"})})," with an expiration time of zero, to an open entry. ",(0,t.jsx)("br",{})]})})]}),"\n",(0,t.jsx)(s.h4,{id:"documentation-requirements",children:"Documentation Requirements"}),"\n",(0,t.jsx)(o.A,{children:"7"}),"\n",(0,t.jsxs)("p",{children:["The implementation shall document the minimum value of the delay expression of a ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-9/AA-9.6#S0268",children:"delay_relative_statement"})})," that causes the task to actually be blocked. ",(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(l.A,{children:[(0,t.jsx)(o.A,{children:"7.a/2"}),(0,t.jsx)(i.A,{type:"aarm",aarm:"note",children:(0,t.jsxs)(s.p,{children:[(0,t.jsx)("b",{children:"Documentation Requirement: "}),"The minimum value of the delay expression of a ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-9/AA-9.6#S0268",children:"delay_relative_statement"})})," that causes a task to actually be blocked.",(0,t.jsx)("br",{})]})})]}),"\n",(0,t.jsx)(o.A,{children:"8"}),"\n",(0,t.jsxs)("p",{children:["The implementation shall document the minimum difference between the value of the delay expression of a ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-9/AA-9.6#S0267",children:"delay_until_statement"})})," and the value of Real","_","Time.Clock, that causes the task to actually be blocked. ",(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(l.A,{children:[(0,t.jsx)(o.A,{children:"8.a/2"}),(0,t.jsxs)(i.A,{type:"aarm",aarm:"note",children:[(0,t.jsx)("i",{children:"This paragraph was deleted."}),(0,t.jsx)("br",{})]})]}),"\n",(0,t.jsxs)(l.A,{children:[(0,t.jsx)(o.A,{children:"8.b/2"}),(0,t.jsx)(i.A,{type:"aarm",aarm:"note",children:(0,t.jsxs)(s.p,{children:[(0,t.jsx)("b",{children:"Documentation Requirement: "}),"The minimum difference between the value of the delay expression of a ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-9/AA-9.6#S0267",children:"delay_until_statement"})})," and the value of Real","_","Time.Clock, that causes the task to actually be blocked.",(0,t.jsx)("br",{})]})})]}),"\n",(0,t.jsx)(s.h4,{id:"metrics",children:"Metrics"}),"\n",(0,t.jsx)(o.A,{children:"9"}),"\n",(0,t.jsxs)("p",{children:["The implementation shall document the following metrics: ",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(o.A,{children:"10"}),"\n",(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:["An upper bound on the execution time, in processor clock cycles, of a ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-9/AA-9.6#S0268",children:"delay_relative_statement"})})," whose requested value of the delay expression is less than or equal to zero.",(0,t.jsx)("br",{})]}),(0,t.jsx)(o.A,{children:"11"}),(0,t.jsxs)("li",{children:["An upper bound on the execution time, in processor clock cycles, of a ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-9/AA-9.6#S0267",children:"delay_until_statement"})})," whose requested value of the delay expression is less than or equal to the value of Real","_","Time.Clock at the time of executing the statement. Similarly, for Calendar.Clock.",(0,t.jsx)("br",{})]}),(0,t.jsx)(o.A,{children:"12/5"}),(0,t.jsx)(d.A,{items:["AI12-0445-1"]}),(0,t.jsxs)("li",{children:["An upper bound on the ",(0,t.jsx)("i",{children:"lateness"})," of a ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-9/AA-9.6#S0268",children:"delay_relative_statement"})}),", for a positive value of the delay expression, in a situation where the task has sufficient priority to preempt the processor as soon as it becomes ready, and can proceed without waiting for any other execution resources. The upper bound is expressed as a function of the value of the delay expression. The lateness is obtained by subtracting the value of the delay expression from the ",(0,t.jsx)("i",{children:"actual duration"}),". The actual duration is measured from a point immediately before a task executes the ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-9/AA-9.6#S0266",children:"delay_statement"})})," to a point immediately after the task resumes execution following this statement.",(0,t.jsx)("br",{})]}),(0,t.jsx)(o.A,{children:"13/5"}),(0,t.jsx)(d.A,{items:["AI12-0445-1"]}),(0,t.jsxs)("li",{children:["An upper bound on the lateness of a ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-9/AA-9.6#S0267",children:"delay_until_statement"})}),", in a situation where the value of the requested expiration time is after the time the task begins executing the statement, the task has sufficient priority to preempt the processor as soon as it becomes ready, and it can proceed without waiting for any other execution resources. The upper bound is expressed as a function of the difference between the requested expiration time and the clock value at the time the statement begins execution. The lateness of a ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-9/AA-9.6#S0267",children:"delay_until_statement"})})," is obtained by subtracting the requested expiration time from the real time that the task resumes execution following this statement. ",(0,t.jsx)("br",{})]})]}),"\n",(0,t.jsxs)(l.A,{children:[(0,t.jsx)(o.A,{children:"13.a/2"}),(0,t.jsx)(i.A,{type:"aarm",aarm:"note",children:(0,t.jsxs)(s.p,{children:[(0,t.jsx)("b",{children:"Documentation Requirement: "}),"The metrics for delay statements.",(0,t.jsx)("br",{})]})})]}),"\n",(0,t.jsx)(l.A,{children:(0,t.jsx)(s.h4,{id:"wording-changes-from-ada-83",children:"Wording Changes from Ada 83"})}),"\n",(0,t.jsxs)(l.A,{children:[(0,t.jsx)(o.A,{children:"14.a"}),(0,t.jsx)(i.A,{type:"aarm",aarm:"note",children:(0,t.jsxs)(s.p,{children:["The rules regarding a ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-9/AA-9.7#S0276",children:"timed_entry_call"})})," with a very small positive Duration value, have been tightened to always require the check whether the rendezvous is immediately possible.",(0,t.jsx)("br",{})]})})]}),"\n",(0,t.jsx)(l.A,{children:(0,t.jsx)(s.h4,{id:"wording-changes-from-ada-95",children:"Wording Changes from Ada 95"})}),"\n",(0,t.jsxs)(l.A,{children:[(0,t.jsx)(o.A,{children:"14.b/2"}),(0,t.jsx)(d.A,{items:["AI95-00355-01"]}),(0,t.jsx)(i.A,{type:"aarm",aarm:"note",children:(0,t.jsxs)(s.p,{children:["The note about \u201cvoluntary round-robin\u2019, while still true, has been deleted as potentially confusing as it is describing a different kind of round-robin than is defined by the round-robin dispatching policy.",(0,t.jsx)("br",{})]})})]})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}}}]);