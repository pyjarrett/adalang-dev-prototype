"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[5841],{1317:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(9440),o=(n(6687),n(1716));n(2526);const i={sidebar_position:184},r="H.2  Documentation of Implementation Decisions",s={unversionedId:"arm/AA-H.2",id:"arm/AA-H.2",title:"H.2  Documentation of Implementation Decisions",description:"We're still working on the Reference manual output.  Internal links are broken,",source:"@site/docs/arm/AA-H.2.mdx",sourceDirName:"arm",slug:"/arm/AA-H.2",permalink:"/docs/arm/AA-H.2",draft:!1,tags:[],version:"current",sidebarPosition:184,frontMatter:{sidebar_position:184},sidebar:"tutorialSidebar",previous:{title:"H.1  Pragma Normalize_Scalars",permalink:"/docs/arm/AA-H.1"},next:{title:"H.3  Reviewable Object Code",permalink:"/docs/arm/AA-H.3"}},l={},u=[{value:"Documentation Requirements",id:"documentation-requirements",level:4}],c={toc:u};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"h2--documentation-of-implementation-decisions"},"H.2  Documentation of Implementation Decisions"),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"We're still working on the Reference manual output.  Internal links are broken,\nas are a bunch of other things.\nSee the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"},"tracking issue"))),(0,o.kt)("h4",{id:"documentation-requirements"},"Documentation Requirements"),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI12-0439-1"),"}"," The implementation shall document the range of effects for each situation that the language rules identify as either a bounded error or as having an unspecified effect. If the implementation can constrain the effects of erroneous execution for a given construct, then it shall document such constraints. [The documentation may be provided either independently of any compilation unit or partition, or as part of an annotated listing for a given unit or partition. See also , and .] "),(0,o.kt)("p",null,(0,o.kt)("em",null,"This paragraph was deleted.")),(0,o.kt)("p",null,(0,o.kt)("strong",null,"Documentation Requirement: "),"The range of effects for each bounded error and each unspecified effect. If the effects of a given erroneous construct are constrained, the constraints shall be documented."),(0,o.kt)("p",null,"NOTE   Among the situations to be documented are the conventions chosen for parameter passing, the methods used for the management of run-time storage, and the method used to evaluate numeric expressions if this involves extended range or extra precision."),(0,o.kt)("p",null,(0,o.kt)("strong",null,"Discussion: "),'Look up "unspecified" and "erroneous execution" in the index for a list of the cases.'),(0,o.kt)("p",null,"The management of run-time storage is particularly important. For safety applications, it is often necessary to show that a program cannot raise Storage_Error, and for security applications that information cannot leak via the run-time system. Users are likely to prefer a simple storage model that can be easily validated."),(0,o.kt)("p",null,"The documentation could helpfully take into account that users may well adopt a subset to avoid some forms of erroneous execution, for instance, not using the abort statement, so that the effects of a partly completed ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"./AA-5.2#S0173"},"assignment_statement"))," do not have to be considered in the validation of a program (see 9.8). For this reason documentation linked to an actual compilation may be most useful. Similarly, an implementation may be able to take into account use of the Restrictions pragma. "))}m.isMDXComponent=!0}}]);