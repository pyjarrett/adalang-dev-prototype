"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[1845],{1513:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=t(9440),i=(t(6687),t(1716));t(2526);const o={sidebar_position:83},r="10 Program Structure and Compilation Issues",s={unversionedId:"arm/AA-10",id:"arm/AA-10",title:"10 Program Structure and Compilation Issues",description:"We're still working on the Reference manual output.  Internal links are broken,",source:"@site/docs/arm/AA-10.mdx",sourceDirName:"arm",slug:"/arm/AA-10",permalink:"/docs/arm/AA-10",draft:!1,tags:[],version:"current",sidebarPosition:83,frontMatter:{sidebar_position:83},sidebar:"tutorialSidebar",previous:{title:"9.11  Example of Tasking and Synchronization",permalink:"/docs/arm/AA-9.11"},next:{title:"10.1  Separate Compilation",permalink:"/docs/arm/AA-10.1"}},l={},p=[{value:"Language Design Principles",id:"language-design-principles",level:4},{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83",level:4}],u={toc:p};function c(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"10-program-structure-and-compilation-issues"},"10 Program Structure and Compilation Issues"),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"We're still working on the Reference manual output.  Internal links are broken,\nas are a bunch of other things.\nSee the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"},"tracking issue"))),(0,i.kt)("p",null,"{",(0,i.kt)("em",null,"AI05-0299-1"),"}"," [The overall structure of programs and the facilities for separate compilation are described in this clause. A ",(0,i.kt)("em",null,"program")," is a set of ",(0,i.kt)("em",null,"partitions"),", each of which may execute in a separate address space, possibly on a separate computer. "),(0,i.kt)("p",null,(0,i.kt)("strong",null,"Glossary entry: "),"A ",(0,i.kt)("em",null,"program")," is a set of ",(0,i.kt)("em",null,"partitions"),", each of which may execute in a separate address space, possibly on a separate computer. A partition consists of a set of library units."),(0,i.kt)("p",null,(0,i.kt)("strong",null,"Glossary entry: "),"A ",(0,i.kt)("em",null,"partition")," is a part of a program. Each partition consists of a set of library units. Each partition may run in a separate address space, possibly on a separate computer. A program may contain just one partition. A distributed program typically contains multiple partitions, which can execute concurrently."),(0,i.kt)("p",null,"Version=[5],Kind=(AddedNormal),Group=[C],Term=[program], Def=[a set of partitions, each of which can execute in a separate address space, possibly on a separate computer] Version=[5],Kind=(AddedNormal),Group=[C],Term=[partition], Def=[a part of a program, which consists of a set of interdependent library units], Note1=[Each partition can run in a separate address space, possibly on a separate computer. A program can contain just one partition, or it can be distributed across multiple partitions, which can execute concurrently.]"),(0,i.kt)("p",null,"As explained below, a partition is constructed from ",(0,i.kt)("em",null,"library units"),". Syntactically, the declaration of a library unit is a ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"./AA-10.1#S0287"},"library_item")),", as is the body of a library unit. An implementation may support a concept of a ",(0,i.kt)("em",null,"program library"),' (or simply, a "library"), which contains ',(0,i.kt)("code",null,(0,i.kt)("a",{href:"./AA-10.1#S0287"},"library_item")),"s and their subunits. Library units may be organized into a hierarchy of children, grandchildren, and so on.]"),(0,i.kt)("p",null,"{",(0,i.kt)("em",null,"AI05-0299-1"),"}",' This clause has two subclauses: 10.1, "Separate Compilation" discusses compile-time issues related to separate compilation. 10.2, "Program Execution" discusses issues related to what is traditionally known as "link time" and "run time" - building and executing partitions.'),(0,i.kt)("h4",{id:"language-design-principles"},"Language Design Principles"),(0,i.kt)("p",null,"We should avoid specifying details that are outside the domain of the language itself. The standard is intended (at least in part) to promote portability of Ada programs at the source level. It is not intended to standardize extra-language issues such as how one invokes the compiler (or other tools), how one's source is represented and organized, version management, the format of error messages, etc."),(0,i.kt)("p",null,"The rules of the language should be enforced even in the presence of separate compilation. Using separate compilation should not make a program less safe."),(0,i.kt)("p",null,"It should be possible to determine the legality of a compilation unit by looking only at the compilation unit itself and the compilation units upon which it depends semantically. As an example, it should be possible to analyze the legality of two compilation units in parallel if they do not depend semantically upon each other."),(0,i.kt)("p",null,"On the other hand, it may be necessary to look outside that set in order to generate code - this is generally true for generic instantiation and inlining, for example. Also on the other hand, it is generally necessary to look outside that set in order to check Post-Compilation Rules."),(0,i.kt)("p",null,'See also the "generic contract model" Language Design Principle of 12.3, "Generic Instantiation". '),(0,i.kt)("h4",{id:"wording-changes-from-ada-83"},"Wording Changes from Ada 83"),(0,i.kt)("p",null,"{",(0,i.kt)("em",null,"AI05-0299-1"),"}"," The clause organization mentioned above is different from that of RM83. "))}c.isMDXComponent=!0}}]);