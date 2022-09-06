"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[5681],{8239:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(9440),a=(n(6687),n(1716));n(2526);const o={sidebar_position:178},r="Annex G Numerics",s={unversionedId:"arm/AA-G",id:"arm/AA-G",title:"Annex G Numerics",description:"We're still working on the Reference manual output.  Internal links are broken,",source:"@site/docs/arm/AA-G.mdx",sourceDirName:"arm",slug:"/arm/AA-G",permalink:"/docs/arm/AA-G",draft:!1,tags:[],version:"current",sidebarPosition:178,frontMatter:{sidebar_position:178},sidebar:"tutorialSidebar",previous:{title:"F.3  Edited Output for Decimal Types",permalink:"/docs/arm/AA-F.3"},next:{title:"G.1  Complex Arithmetic",permalink:"/docs/arm/AA-G.1"}},l={},c=[{value:"Implementation Advice",id:"implementation-advice",level:4},{value:"Extensions to Ada 83",id:"extensions-to-ada-83",level:4}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"annex-g-numerics"},"Annex G Numerics"),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"We're still working on the Reference manual output.  Internal links are broken,\nas are a bunch of other things.\nSee the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"},"tracking issue"))),(0,a.kt)("p",null,"The Numerics Annex specifies "),(0,a.kt)("p",null,"features for complex arithmetic, including complex I/O;"),(0,a.kt)("p",null,'a mode ("strict mode"), in which the predefined arithmetic operations of floating point and fixed point types and the functions and operations of various predefined packages have to provide guaranteed accuracy or conform to other numeric performance requirements, which the Numerics Annex also specifies;'),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI12-0445-1"),"}",' a mode ("relaxed mode"), in which there are no accuracy or other numeric performance requirements to be satisfied, as for implementations not conforming to the Numerics Annex;'),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI95-00296-01"),"}"," models of floating point and fixed point arithmetic on which the accuracy requirements of strict mode are based;"),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI95-00296-01"),"}"," the definitions of the model-oriented attributes of floating point types that apply in the strict mode; and"),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI95-00296-01"),"}"," features for the manipulation of real and complex vectors and matrices. "),(0,a.kt)("h4",{id:"implementation-advice"},"Implementation Advice"),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI05-0229-1"),"}"," If Fortran (respectively, C) is widely supported in the target environment, implementations supporting the Numerics Annex should provide the child package Interfaces.Fortran (respectively, Interfaces.C) specified in Annex B and should support a ",(0,a.kt)("em",null,"convention_"),(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-2.3#S0002"},"identifier"))," of Fortran (respectively, C) for the Convention aspect (see Annex B), thus allowing Ada programs to interface with programs written in that language. "),(0,a.kt)("p",null,(0,a.kt)("strong",null,"Implementation Advice: "),"If Fortran (respectively, C) is supported in the target environment, then interfacing to Fortran (respectively, C) should be supported as specified in Annex B."),(0,a.kt)("h4",{id:"extensions-to-ada-83"},"Extensions to Ada 83"),(0,a.kt)("p",null,"This Annex is new to Ada 95. "))}d.isMDXComponent=!0}}]);