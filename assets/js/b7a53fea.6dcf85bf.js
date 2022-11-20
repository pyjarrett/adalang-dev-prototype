"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[1671],{5214:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>y,default:()=>S,frontMatter:()=>f,metadata:()=>x,toc:()=>T});var a=n(1716),l=n(1256),o=n(4895),r=n(8090),i=n(8424),d=n(2262),A=Object.defineProperty,s=Object.defineProperties,m=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&h(e,n,t[n]);if(k)for(var n of k(t))u.call(t,n)&&h(e,n,t[n]);return e};const f={sidebar_position:42},y="5.1 Simple and Compound Statements - Sequences of Statements",x={unversionedId:"arm/AA-5/AA-5.1",id:"arm/AA-5/AA-5.1",title:"5.1 Simple and Compound Statements - Sequences of Statements",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-5/AA-5.1.mdx",sourceDirName:"arm/AA-5",slug:"/arm/AA-5/AA-5.1",permalink:"/docs/arm/AA-5/AA-5.1",draft:!1,tags:[],version:"current",sidebarPosition:42,frontMatter:{sidebar_position:42},sidebar:"referenceManualSidebar",previous:{title:"5 Statements",permalink:"/docs/arm/AA-5/"},next:{title:"5.2 Assignment Statements",permalink:"/docs/arm/AA-5/AA-5.2"}},g={},T=[{value:"Syntax",id:"syntax",level:4},{value:"Name Resolution Rules",id:"name-resolution-rules",level:4},{value:"Legality Rules",id:"legality-rules",level:4},{value:"Static Semantics",id:"static-semantics",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics",level:4},{value:"Bounded (Run-Time) Errors",id:"bounded-run-time-errors",level:4},{value:"Examples",id:"examples",level:4},{value:"Extensions to Ada 83",id:"extensions-to-ada-83",level:4},{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83",level:4},{value:"Extensions to Ada 95",id:"extensions-to-ada-95",level:4},{value:"Extensions to Ada 2005",id:"extensions-to-ada-2005",level:4},{value:"Extensions to Ada 2012",id:"extensions-to-ada-2012",level:4}],b={toc:T};function S(e){var t,n=e,{components:A}=n,h=((e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&k)for(var a of k(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=p(p({},b),h),s(t,m({components:A,mdxType:"MDXLayout"}))),(0,a.kt)("h1",p({},{id:"51-simple-and-compound-statements---sequences-of-statements"}),"5.1 Simple and Compound Statements - Sequences of Statements"),(0,a.kt)("admonition",p({},{type:"warning"}),(0,a.kt)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,a.kt)("a",p({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,a.kt)(i.Z,{mdxType:"MarginText"},"1/5"),(0,a.kt)(d.Z,{items:["AI12-0119-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"[A ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0167"},"statement"))," is either simple or compound. A ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0168"},"simple_statement"))," encloses no other ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0167"},"statement")),". A ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0169"},"compound_statement"))," can enclose ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0168"},"simple_statement")),"s and other ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0169"},"compound_statement")),"s.] A ",(0,a.kt)("em",null,"parallel construct")," is a construct that introduces additional logical threads of control (see clause ",(0,a.kt)("a",{href:"../AA-9/"},"9"),") without creating a new task. Parallel loops (see ",(0,a.kt)("a",{href:"../AA-5/AA-5.5"},"5.5"),") and ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.6#S0192"},"parallel_block_statement")),"s (see ",(0,a.kt)("a",{href:"../AA-5/AA-5.6#Subclause_5.6.1"},"5.6.1"),") are parallel constructs. ",(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(i.Z,{mdxType:"MarginText"},"1.a.1/5"),(0,a.kt)(l.Z,{type:"aarm",aarm:"glossary-entry",mdxType:"Admonition"},(0,a.kt)("strong",null),"A parallel construct is an executable construct that defines multiple activities of a single task that can proceed in parallel, via the execution of multiple logical threads of control.",(0,a.kt)("br",null))),(0,a.kt)(i.Z,{mdxType:"MarginText"},"2"),(0,a.kt)("h4",p({},{id:"syntax"}),"Syntax"),(0,a.kt)(i.Z,{mdxType:"MarginText"},"3/3"),(0,a.kt)(d.Z,{items:["AI05-0179-1"],mdxType:"MarginInfo"}),(0,a.kt)(r.Z,{mdxType:"CodeBlock"},(0,a.kt)("code",null,"sequence_of_statements"),(0,a.kt)("a",{id:"S0166"}),(0,a.kt)("code",null," ::= "),(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0167"},"statement"))," ","{",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0167"},"statement")),"}"," ","{",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0171"},"label")),"}",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{mdxType:"MarginText"},"4"),(0,a.kt)(r.Z,{mdxType:"CodeBlock"},(0,a.kt)("code",null,"statement"),(0,a.kt)("a",{id:"S0167"}),(0,a.kt)("code",null," ::= "),(0,a.kt)("br",null),"   ","{",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0171"},"label")),"}"," ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0168"},"simple_statement"))," | ","{",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0171"},"label")),"}"," ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0169"},"compound_statement")),(0,a.kt)("br",null)),(0,a.kt)(i.Z,{mdxType:"MarginText"},"5/2"),(0,a.kt)(d.Z,{items:["AI95-00318-02"],mdxType:"MarginInfo"}),(0,a.kt)(r.Z,{mdxType:"CodeBlock"},(0,a.kt)("code",null,"simple_statement"),(0,a.kt)("a",{id:"S0168"}),(0,a.kt)("code",null," ::= "),(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0170"},"null_statement")),(0,a.kt)("br",null),"   | ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.2#S0173"},"assignment_statement")),"\t| ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.7#S0193"},"exit_statement")),(0,a.kt)("br",null),"   | ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.8#S0194"},"goto_statement")),"\t| ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-6/AA-6.4#S0217"},"procedure_call_statement")),(0,a.kt)("br",null),"   | ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-6/AA-6.5#S0222"},"simple_return_statement")),"\t| ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-9/AA-9.5#S0264"},"entry_call_statement")),(0,a.kt)("br",null),"   | ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-9/AA-9.5#S0265"},"requeue_statement")),"\t| ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-9/AA-9.6#S0266"},"delay_statement")),(0,a.kt)("br",null),"   | ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-9/AA-9.8#S0284"},"abort_statement")),"\t| ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-11/AA-11.3#S0308"},"raise_statement")),(0,a.kt)("br",null),"   | ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-13/AA-13.8#S0357"},"code_statement")),(0,a.kt)("br",null)),(0,a.kt)(i.Z,{mdxType:"MarginText"},"6/5"),(0,a.kt)(d.Z,{items:["AI95-00318-02","AI12-0119-1"],mdxType:"MarginInfo"}),(0,a.kt)(r.Z,{mdxType:"CodeBlock"},(0,a.kt)("code",null,"compound_statement"),(0,a.kt)("a",{id:"S0169"}),(0,a.kt)("code",null," ::= "),(0,a.kt)("br",null),"     ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.3#S0175"},"if_statement")),"\t| ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.4#S0176"},"case_statement")),(0,a.kt)("br",null),"   | ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.5#S0178"},"loop_statement")),"\t| ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.6#S0191"},"block_statement")),(0,a.kt)("br",null),"   | ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-6/AA-6.5#S0225"},"extended_return_statement")),(0,a.kt)("br",null),"   | ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.6#S0192"},"parallel_block_statement")),(0,a.kt)("br",null),"   | ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-9/AA-9.5#S0258"},"accept_statement")),"\t| ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-9/AA-9.7#S0269"},"select_statement")),(0,a.kt)("br",null)),(0,a.kt)(i.Z,{mdxType:"MarginText"},"7"),(0,a.kt)(r.Z,{mdxType:"CodeBlock"},(0,a.kt)("code",null,"null_statement"),(0,a.kt)("a",{id:"S0170"}),(0,a.kt)("code",null," ::= "),(0,a.kt)("strong",null,"null"),";",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{mdxType:"MarginText"},"8"),(0,a.kt)(r.Z,{mdxType:"CodeBlock"},(0,a.kt)("code",null,"label"),(0,a.kt)("a",{id:"S0171"}),(0,a.kt)("code",null," ::= "),"<","<",(0,a.kt)("em",null,"label_"),(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0172"},"statement_identifier")),">",">",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{mdxType:"MarginText"},"9"),(0,a.kt)(r.Z,{mdxType:"CodeBlock"},(0,a.kt)("code",null,"statement_identifier"),(0,a.kt)("a",{id:"S0172"}),(0,a.kt)("code",null," ::= "),(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.1#S0092"},"direct_name")),(0,a.kt)("br",null)),(0,a.kt)(i.Z,{mdxType:"MarginText"},"10"),(0,a.kt)("p",null,"The ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.1#S0092"},"direct_name"))," of a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0172"},"statement_identifier"))," shall be an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier"))," (not an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-6/AA-6.1#S0202"},"operator_symbol")),"). ",(0,a.kt)("br",null)),(0,a.kt)("h4",p({},{id:"name-resolution-rules"}),"Name Resolution Rules"),(0,a.kt)(i.Z,{mdxType:"MarginText"},"11"),(0,a.kt)("p",null,"The ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.1#S0092"},"direct_name"))," of a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0172"},"statement_identifier"))," shall resolve to denote its corresponding implicit declaration (see below). ",(0,a.kt)("br",null)),(0,a.kt)("h4",p({},{id:"legality-rules"}),"Legality Rules"),(0,a.kt)(i.Z,{mdxType:"MarginText"},"12"),(0,a.kt)("p",null,"Distinct ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier")),"s shall be used for all ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0172"},"statement_identifier")),"s that appear in the same body, including inner ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.6#S0191"},"block_statement")),"s but excluding inner program units. ",(0,a.kt)("br",null)),(0,a.kt)("h4",p({},{id:"static-semantics"}),"Static Semantics"),(0,a.kt)(i.Z,{mdxType:"MarginText"},"13"),(0,a.kt)("p",null,"For each ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0172"},"statement_identifier")),", there is an implicit declaration (with the specified ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier")),") at the end of the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.11#S0086"},"declarative_part"))," of the innermost ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.6#S0191"},"block_statement"))," or body that encloses the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0172"},"statement_identifier")),". The implicit declarations occur in the same order as the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0172"},"statement_identifier")),"s occur in the source text. If a usage name denotes such an implicit declaration, the entity it denotes is the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0171"},"label")),", ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.5#S0178"},"loop_statement")),", or ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.6#S0191"},"block_statement"))," with the given ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0172"},"statement_identifier")),". ",(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(i.Z,{mdxType:"MarginText"},"13.a"),(0,a.kt)(l.Z,{type:"aarm",aarm:"reason",mdxType:"Admonition"},(0,a.kt)("strong",null),"We talk in terms of individual ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0172"},"statement_identifier")),"s here rather than in terms of the corresponding statements, since a given ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0167"},"statement"))," may have multiple ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0172"},"statement_identifier")),"s.",(0,a.kt)("br",null))),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(i.Z,{mdxType:"MarginText"},"13.b"),(0,a.kt)(l.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"A ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.6#S0191"},"block_statement"))," that has no explicit ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.11#S0086"},"declarative_part"))," has an implicit empty ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.11#S0086"},"declarative_part")),", so this rule can safely refer to the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.11#S0086"},"declarative_part"))," of a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.6#S0191"},"block_statement")),".",(0,a.kt)("br",null))),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(i.Z,{mdxType:"MarginText"},"13.c"),(0,a.kt)(l.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"The scope of a declaration starts at the place of the declaration itself (see ",(0,a.kt)("a",{href:"../AA-8/AA-8.2"},"8.2"),"). In the case of a label, loop, or block name, it follows from this rule that the scope of the implicit declaration starts before the first explicit occurrence of the corresponding name, since this occurrence is either in a statement label, a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.5#S0178"},"loop_statement")),", a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.6#S0191"},"block_statement")),", or a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.8#S0194"},"goto_statement")),". An implicit declaration in a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.6#S0191"},"block_statement"))," may hide a declaration given in an outer program unit or ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.6#S0191"},"block_statement"))," (according to the usual rules of hiding explained in ",(0,a.kt)("a",{href:"../AA-8/AA-8.3"},"8.3"),").",(0,a.kt)("br",null))),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(i.Z,{mdxType:"MarginText"},"13.d"),(0,a.kt)(l.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"The syntax rule for ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0171"},"label"))," uses ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0172"},"statement_identifier"))," which is a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.1#S0092"},"direct_name"))," (not a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.1#S0022"},"defining_identifier")),"), because labels are implicitly declared. The same applies to loop and block names. In other words, the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0171"},"label"))," itself is not the defining occurrence; the implicit declaration is.",(0,a.kt)("br",null))),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(i.Z,{mdxType:"MarginText"},"13.e"),(0,a.kt)(l.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"We cannot consider the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0171"},"label"))," to be a defining occurrence. An example that can tell the difference is this: ",(0,a.kt)("br",null))),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(i.Z,{mdxType:"MarginText"},"13.f"),(0,a.kt)(r.Z,{language:"ada",mdxType:"CodeBlock"},"declare","\n","    -- Label Foo is implicitly declared here.","\n","begin","\n","    for Foo in ... loop","\n","        ...","\n","        ","<","<","Foo",">",">"," -- Illegal.","\n","        ...","\n","    end loop;","\n","end;","\n","  ","\n")),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(i.Z,{mdxType:"MarginText"},"13.g/3"),(0,a.kt)(d.Z,{items:["AI05-0299-1"],mdxType:"MarginInfo"}),(0,a.kt)(l.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"The label in this example is hidden from itself by the loop parameter with the same name; the example is illegal. We considered creating a new syntactic category name, separate from ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.1#S0092"},"direct_name"))," and ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.1#S0099"},"selector_name")),", for use in the case of statement labels. However, that would confuse the rules in Clause 8, so we didn't do it. ",(0,a.kt)("br",null))),(0,a.kt)(i.Z,{mdxType:"MarginText"},"13.1/3"),(0,a.kt)(d.Z,{items:["AI05-0179-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"If one or more ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0171"},"label")),"s end a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0166"},"sequence_of_statements")),", an implicit ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0170"},"null_statement"))," follows the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0171"},"label")),"s before any following constructs.",(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(i.Z,{mdxType:"MarginText"},"13.g.1/3"),(0,a.kt)(l.Z,{type:"aarm",aarm:"reason",mdxType:"Admonition"},(0,a.kt)("strong",null),"The semantics of a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.8#S0194"},"goto_statement"))," is defined in terms of the statement having (following) that label. Thus we ensure that every label has a following statement, which might be implicit. ",(0,a.kt)("br",null))),(0,a.kt)("h4",p({},{id:"dynamic-semantics"}),"Dynamic Semantics"),(0,a.kt)(i.Z,{mdxType:"MarginText"},"14"),(0,a.kt)("p",null,"The execution of a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0170"},"null_statement"))," has no effect.",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{mdxType:"MarginText"},"15/2"),(0,a.kt)(d.Z,{items:["AI95-00318-02"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"A ",(0,a.kt)("em",null,"transfer of control")," is the run-time action of an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.7#S0193"},"exit_statement")),", return statement, ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.8#S0194"},"goto_statement")),", or ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-9/AA-9.5#S0265"},"requeue_statement")),", selection of a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-9/AA-9.7#S0275"},"terminate_alternative")),", raising of an exception, or an abort, which causes the next action performed to be one other than what would normally be expected from the other rules of the language. [As explained in ",(0,a.kt)("a",{href:"../AA-7/AA-7.6#Subclause_7.6.1"},"7.6.1"),", a transfer of control can cause the execution of constructs to be completed and then left, which may trigger finalization.]",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{mdxType:"MarginText"},"16"),(0,a.kt)("p",null,"The execution of a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0166"},"sequence_of_statements"))," consists of the execution of the individual ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0167"},"statement")),"s in succession until the ",(0,a.kt)("code",null,"sequence_")," is completed. ",(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(i.Z,{mdxType:"MarginText"},"16.a"),(0,a.kt)(l.Z,{type:"aarm",aarm:"ramification",mdxType:"Admonition"},(0,a.kt)("strong",null),"It could be completed by reaching the end of it, or by a transfer of control. ",(0,a.kt)("br",null))),(0,a.kt)(i.Z,{mdxType:"MarginText"},"17/5"),(0,a.kt)(d.Z,{items:["AI12-0119-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"Within a parallel construct, if a transfer of control out of the construct is initiated by one of the logical threads of control, an attempt is made to ",(0,a.kt)("em",null,"cancel")," all other logical threads of control initiated by the parallel construct. Once all other logical threads of control of the construct either complete or are canceled, the transfer of control occurs. If two or more logical threads of control of the same construct initiate such a transfer of control concurrently, one of them is chosen arbitrarily and the others are canceled.",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{mdxType:"MarginText"},"18/5"),(0,a.kt)(d.Z,{items:["AI12-0119-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"When a logical thread of control is canceled, the cancellation causes it to complete as though it had performed a transfer of control to the point where it would have finished its execution. Such a cancellation is deferred while the logical thread of control is executing within an abort-deferred operation (see ",(0,a.kt)("a",{href:"../AA-9/AA-9.8"},"9.8"),"), and may be deferred further, but not past a point where the logical thread initiates a new nested parallel construct or reaches an exception handler that is outside such an abort-deferred operation. ",(0,a.kt)("br",null)),(0,a.kt)("h4",p({},{id:"bounded-run-time-errors"}),"Bounded (Run-Time) Errors"),(0,a.kt)(i.Z,{mdxType:"MarginText"},"19/5"),(0,a.kt)(d.Z,{items:["AI12-0119-1","AI12-0442-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"During the execution of a parallel construct, it is a bounded error to invoke an operation that is potentially blocking (see ",(0,a.kt)("a",{href:"../AA-9/AA-9.5"},"9.5"),"). Program_Error is raised if the error is detected by the implementation; otherwise, the execution of the potentially blocking operation can either proceed normally, or it can result in the indefinite blocking of some or all of the logical threads of control making up the current task. ",(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(i.Z,{mdxType:"MarginText"},"20"),(0,a.kt)(l.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"NOTE   A ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0172"},"statement_identifier"))," that appears immediately within the declarative region of a named ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.5#S0178"},"loop_statement"))," or an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-9/AA-9.5#S0258"},"accept_statement"))," is nevertheless implicitly declared immediately within the declarative region of the innermost enclosing body or ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.6#S0191"},"block_statement")),"; in other words, the expanded name for a named statement is not affected by whether the statement occurs inside or outside a named loop or an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-9/AA-9.5#S0258"},"accept_statement"))," \u2014 only nesting within ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.6#S0191"},"block_statement")),"s is relevant to the form of its expanded name. ",(0,a.kt)("br",null))),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(i.Z,{mdxType:"MarginText"},"20.a"),(0,a.kt)(l.Z,{type:"aarm",aarm:"discussion",mdxType:"Admonition"},(0,a.kt)("strong",null),"Each comment in the following example gives the expanded name associated with an entity declared in the task body: ",(0,a.kt)("br",null))),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(i.Z,{mdxType:"MarginText"},"20.b"),(0,a.kt)(r.Z,{language:"ada",mdxType:"CodeBlock"},"task body Compute is","\n","   Sum : Integer := 0;                       -- Compute.Sum","\n","begin","\n"," Outer:                                      -- Compute.Outer","\n","   for I in 1..10 loop     -- Compute.Outer.I","\n","    Blk:                                     -- Compute.Blk","\n","      declare","\n","         Sum : Integer := 0;                 -- Compute.Blk.Sum","\n","      begin","\n","         accept Ent(I : out Integer; J : in Integer) do","\n","                                             -- Compute.Ent.I, Compute.Ent.J","\n","            Compute.Ent.I := Compute.Outer.I;","\n","          Inner:                             -- Compute.Blk.Inner","\n","            for J in 1..10 loop","\n","                                             -- Compute.Blk.Inner.J","\n","               Sum := Sum + Compute.Blk.Inner.J * Compute.Ent.J;","\n","            end loop Inner;","\n","         end Ent;","\n","         Compute.Sum := Compute.Sum + Compute.Blk.Sum;","\n","      end Blk;","\n","   end loop Outer;","\n","   Record_Result(Sum);","\n","end Compute;","\n")),(0,a.kt)("h4",p({},{id:"examples"}),"Examples"),(0,a.kt)(i.Z,{mdxType:"MarginText"},"21"),(0,a.kt)("p",null,(0,a.kt)("em",null,"Examples of labeled statements:")," ",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{mdxType:"MarginText"},"22"),(0,a.kt)(r.Z,{language:"ada",mdxType:"CodeBlock"},"<","<","Here",">",">"," ","<","<","Ici",">",">"," ","<","<","Aqui",">",">"," ","<","<","Hier",">",">"," null;","\n",(0,a.kt)(i.Z,{mdxType:"MarginText"},"23"),"<","<","After",">",">"," X := 1;","\n"),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)("h4",p({},{id:"extensions-to-ada-83"}),"Extensions to Ada 83")),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(i.Z,{mdxType:"MarginText"},"23.a"),(0,a.kt)(l.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"The ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-9/AA-9.5#S0265"},"requeue_statement"))," is new. ",(0,a.kt)("br",null))),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)("h4",p({},{id:"wording-changes-from-ada-83"}),"Wording Changes from Ada 83")),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(i.Z,{mdxType:"MarginText"},"23.b"),(0,a.kt)(l.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"We define the syntactic category ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0172"},"statement_identifier"))," to simplify the description. It is used for labels, loop names, and block names. We define the entity associated with the implicit declarations of statement names.",(0,a.kt)("br",null))),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(i.Z,{mdxType:"MarginText"},"23.c"),(0,a.kt)(l.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"Completion includes completion caused by a transfer of control, although RM83-5.1(6) did not take this view. ",(0,a.kt)("br",null))),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)("h4",p({},{id:"extensions-to-ada-95"}),"Extensions to Ada 95")),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(i.Z,{mdxType:"MarginText"},"23.d/2"),(0,a.kt)(d.Z,{items:["AI95-00318-02"],mdxType:"MarginInfo"}),(0,a.kt)(l.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"The ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-6/AA-6.5#S0225"},"extended_return_statement"))," is new (",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-6/AA-6.5#S0222"},"simple_return_statement"))," is merely renamed). ",(0,a.kt)("br",null))),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)("h4",p({},{id:"extensions-to-ada-2005"}),"Extensions to Ada 2005")),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(i.Z,{mdxType:"MarginText"},"23.e/3"),(0,a.kt)(d.Z,{items:["AI05-0179-1"],mdxType:"MarginInfo"}),(0,a.kt)(l.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"A ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0171"},"label"))," can end a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0166"},"sequence_of_statements")),", eliminating the requirement for having an explicit ",(0,a.kt)("strong",null,"null"),"; statement after an ending label (a common use). ",(0,a.kt)("br",null))),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)("h4",p({},{id:"extensions-to-ada-2012"}),"Extensions to Ada 2012")),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(i.Z,{mdxType:"MarginText"},"23.f/5"),(0,a.kt)(d.Z,{items:["AI12-0119-1"],mdxType:"MarginInfo"}),(0,a.kt)(l.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"The definition of \u201cparallel constructs\u201d and the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.6#S0192"},"parallel_block_statement"))," are new. ",(0,a.kt)("br",null))))}S.isMDXComponent=!0}}]);