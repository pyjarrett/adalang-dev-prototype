"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[5032],{1069:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var a=n(9440),i=(n(6687),n(1716));n(2526);const o={sidebar_position:64},s="8 Visibility Rules",r={unversionedId:"arm/AA-8",id:"arm/AA-8",title:"8 Visibility Rules",description:"We're still working on the Reference manual output.  Internal links are broken,",source:"@site/docs/arm/AA-8.mdx",sourceDirName:"arm",slug:"/arm/AA-8",permalink:"/docs/arm/AA-8",draft:!1,tags:[],version:"current",sidebarPosition:64,frontMatter:{sidebar_position:64},sidebar:"tutorialSidebar",previous:{title:"7.6  Assignment and Finalization",permalink:"/docs/arm/AA-7.6"},next:{title:"8.1  Declarative Region",permalink:"/docs/arm/AA-8.1"}},l={},d=[{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83",level:4}],h={toc:d};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"8-visibility-rules"},"8 Visibility Rules"),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"We're still working on the Reference manual output.  Internal links are broken,\nas are a bunch of other things.\nSee the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"},"tracking issue"))),(0,i.kt)("p",null,"{",(0,i.kt)("em",null,"AI05-0299-1"),"}"," [The rules defining the scope of declarations and the rules defining which ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"./AA-2.3#S0002"},"identifier")),"s, ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"./AA-2.5#S0015"},"character_literal")),"s, and ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"./AA-6.1#S0202"},"operator_symbol")),"s are visible at (or from) various places in the text of the program are described in this clause. The formulation of these rules uses the notion of a declarative region."),(0,i.kt)("p",null,"{",(0,i.kt)("em",null,"AI05-0299-1"),"}"," ","{",(0,i.kt)("em",null,"AI12-0439-1"),"}"," As explained in Clause 3, a declaration declares a view of an entity and associates a defining name with that view. The view comprises an identification of the viewed entity, and possibly additional properties. A usage name denotes a declaration. It also denotes the view declared by that declaration, and denotes the entity of that view. Thus, two different usage names can denote two different views of the same entity; in this case they denote the same entity.] "),(0,i.kt)("p",null,(0,i.kt)("strong",null,"To be honest: "),"In some cases, a usage name that denotes a declaration does not denote the view declared by that declaration, nor the entity of that view, but instead denotes a view of the current instance of the entity, and denotes the current instance of the entity. This sometimes happens when the usage name occurs inside the declarative region of the declaration. "),(0,i.kt)("h4",{id:"wording-changes-from-ada-83"},"Wording Changes from Ada 83"),(0,i.kt)("p",null,'We no longer define the term "basic operation;" thus we no longer have to worry about the visibility of them. Since they were essentially always visible in Ada 83, this change has no effect. The reason for this change is that the definition in Ada 83 was confusing, and not quite correct, and we found it difficult to fix. For example, one wonders why an ',(0,i.kt)("code",null,(0,i.kt)("a",{href:"./AA-5.3#S0175"},"if_statement")),' was not a basic operation of type Boolean. For another example, one wonders what it meant for a basic operation to be "inherent in" something. Finally, this fixes the problem addressed by AI83-00027/07. '))}c.isMDXComponent=!0}}]);