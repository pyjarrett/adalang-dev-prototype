"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[9017],{4873:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=n(9440),i=(n(6687),n(1716));n(2526);const o={sidebar_position:187},l="H.5  Pragma Detect_Blocking",r={unversionedId:"arm/AA-H.5",id:"arm/AA-H.5",title:"H.5  Pragma Detect_Blocking",description:"We're still working on the Reference manual output.  Internal links are broken,",source:"@site/docs/arm/AA-H.5.mdx",sourceDirName:"arm",slug:"/arm/AA-H.5",permalink:"/docs/arm/AA-H.5",draft:!1,tags:[],version:"current",sidebarPosition:187,frontMatter:{sidebar_position:187},sidebar:"tutorialSidebar",previous:{title:"H.4  High Integrity Restrictions",permalink:"/docs/arm/AA-H.4"},next:{title:"H.6  Pragma Partition_Elaboration_Policy",permalink:"/docs/arm/AA-H.6"}},s={},c=[{value:"Syntax",id:"syntax",level:4},{value:"Post-Compilation Rules",id:"post-compilation-rules",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics",level:4},{value:"Implementation Permissions",id:"implementation-permissions",level:4},{value:"Extensions to Ada 95",id:"extensions-to-ada-95",level:4},{value:"Extensions to Ada 2012",id:"extensions-to-ada-2012",level:4}],m={toc:c};function p(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"h5--pragma-detect_blocking"},"H.5  Pragma Detect_Blocking"),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"We're still working on the Reference manual output.  Internal links are broken,\nas are a bunch of other things.\nSee the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"},"tracking issue"))),(0,i.kt)("p",null,"{",(0,i.kt)("em",null,"AI95-00305-01"),"}"," ","{",(0,i.kt)("em",null,"AI12-0267-1"),"}"," The following ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"./AA-2.8#S0019"},"pragma"))," requires an implementation to detect potentially blocking operations during the execution of a protected operation or a parallel construct. "),(0,i.kt)("h4",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,"{",(0,i.kt)("em",null,"AI95-00305-01"),"}"," The form of a ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"./AA-2.8#S0019"},"pragma"))," Detect_Blocking is as follows: "),(0,i.kt)("p",null,"  ",(0,i.kt)("strong",null,"pragma")," Detect_Blocking; "),(0,i.kt)("h4",{id:"post-compilation-rules"},"Post-Compilation Rules"),(0,i.kt)("p",null,"{",(0,i.kt)("em",null,"AI95-00305-01"),"}"," A ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"./AA-2.8#S0019"},"pragma"))," Detect_Blocking is a configuration pragma. "),(0,i.kt)("h4",{id:"dynamic-semantics"},"Dynamic Semantics"),(0,i.kt)("p",null,"{",(0,i.kt)("em",null,"AI95-00305-01"),"}"," ","{",(0,i.kt)("em",null,"AI12-0247-1"),"}"," ","{",(0,i.kt)("em",null,"AI12-0267-1"),"}"," An implementation is required to detect a potentially blocking operation that occurs during the execution of a protected operation or a parallel construct defined within a compilation unit to which the pragma applies, and to raise Program_Error (see 9.5). "),(0,i.kt)("h4",{id:"implementation-permissions"},"Implementation Permissions"),(0,i.kt)("p",null,"{",(0,i.kt)("em",null,"AI95-00305-01"),"}"," ","{",(0,i.kt)("em",null,"AI12-0267-1"),"}"," An implementation is allowed to reject a ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"./AA-10.1#S0286"},"compilation_unit"))," to which a pragma Detect_Blocking applies if a potentially blocking operation is present directly within an ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"./AA-9.5#S0260"},"entry_body")),", the body of a protected subprogram, or a parallel construct occurring within the compilation unit. "),(0,i.kt)("p",null,"NOTE 1   ","{",(0,i.kt)("em",null,"AI95-00305-01"),"}"," ","{",(0,i.kt)("em",null,"AI12-0442-1"),"}"," An operation that causes a task to be blocked within a foreign language domain is not defined to be potentially blocking, and is unlikely to be detected. "),(0,i.kt)("h4",{id:"extensions-to-ada-95"},"Extensions to Ada 95"),(0,i.kt)("p",null,"{",(0,i.kt)("em",null,"AI95-00305-01"),"}"," Pragma Detect_Blocking is new. "),(0,i.kt)("h4",{id:"extensions-to-ada-2012"},"Extensions to Ada 2012"),(0,i.kt)("p",null,"{",(0,i.kt)("em",null,"AI12-0267-1"),"}"," Pragma Detect_Blocking now applies to parallel constructs as well as protected actions. "))}p.isMDXComponent=!0}}]);