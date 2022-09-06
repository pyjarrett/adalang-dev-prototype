"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[620],{8523:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>u});var n=t(9440),i=(t(6687),t(1716)),l=t(2526);const o={sidebar_position:119},s="A.2  The Package Ada",r={unversionedId:"arm/AA-A.2",id:"arm/AA-A.2",title:"A.2  The Package Ada",description:"We're still working on the Reference manual output.  Internal links are broken,",source:"@site/docs/arm/AA-A.2.mdx",sourceDirName:"arm",slug:"/arm/AA-A.2",permalink:"/docs/arm/AA-A.2",draft:!1,tags:[],version:"current",sidebarPosition:119,frontMatter:{sidebar_position:119},sidebar:"tutorialSidebar",previous:{title:"A.1  The Package Standard",permalink:"/docs/arm/AA-A.1"},next:{title:"A.3  Character Handling",permalink:"/docs/arm/AA-A.3"}},d={},u=[{value:"Static Semantics",id:"static-semantics",level:4},{value:"Legality Rules",id:"legality-rules",level:4},{value:"Extensions to Ada 83",id:"extensions-to-ada-83",level:4}],c={toc:u};function m(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"a2--the-package-ada"},"A.2  The Package Ada"),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"We're still working on the Reference manual output.  Internal links are broken,\nas are a bunch of other things.\nSee the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"},"tracking issue"))),(0,i.kt)("h4",{id:"static-semantics"},"Static Semantics"),(0,i.kt)("p",null,"The following language-defined library package exists: "),(0,i.kt)(l.Z,{mdxType:"CodeBlock"},"{","AI12-0414-1","}"," package Ada","\n","   with Pure is","\n","end Ada;","\n"),(0,i.kt)("p",null,"{",(0,i.kt)("em",null,"AI12-0414-1"),"}"," Ada serves as the parent of most of the other language-defined library units; its declaration is empty. "),(0,i.kt)("h4",{id:"legality-rules"},"Legality Rules"),(0,i.kt)("p",null,"In the standard mode, it is illegal to compile a child of package Ada. "),(0,i.kt)("p",null,(0,i.kt)("strong",null,"Reason: "),"The intention is that mentioning, say, Ada.Text_IO in a ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"./AA-10.1#S0294"},"with_clause"))," is guaranteed (at least in the standard mode) to refer to the standard version of Ada.Text_IO. The user can compile a root library unit Text_IO that has no relation to the standard version of Text_IO. "),(0,i.kt)("p",null,(0,i.kt)("strong",null,"Ramification: "),"Note that Ada can have non-language-defined grandchildren, assuming the implementation allows it. Also, packages System and Interfaces can have children, assuming the implementation allows it. "),(0,i.kt)("p",null,(0,i.kt)("strong",null,"Implementation Note: "),"An implementation will typically support a nonstandard mode in which compiling the language defined library units is allowed. Whether or not this mode is made available to users is up to the implementer."),(0,i.kt)("p",null,"An implementation could theoretically have private children of Ada, since that would be semantically neutral. However, a programmer cannot compile such a library unit. "),(0,i.kt)("h4",{id:"extensions-to-ada-83"},"Extensions to Ada 83"),(0,i.kt)("p",null,"{",(0,i.kt)("em",null,"AI05-0299-1"),"}"," This subclause is new to Ada 95. "))}m.isMDXComponent=!0}}]);