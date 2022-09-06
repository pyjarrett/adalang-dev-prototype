"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[6093],{2898:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=n(9440),l=(n(6687),n(1716)),o=n(2526);const s={sidebar_position:47},r="5.8  Goto Statements",i={unversionedId:"arm/AA-5.8",id:"arm/AA-5.8",title:"5.8  Goto Statements",description:"We're still working on the Reference manual output.  Internal links are broken,",source:"@site/docs/arm/AA-5.8.mdx",sourceDirName:"arm",slug:"/arm/AA-5.8",permalink:"/docs/arm/AA-5.8",draft:!1,tags:[],version:"current",sidebarPosition:47,frontMatter:{sidebar_position:47},sidebar:"tutorialSidebar",previous:{title:"5.7  Exit Statements",permalink:"/docs/arm/AA-5.7"},next:{title:"6 Subprograms",permalink:"/docs/arm/AA-6"}},u={},c=[{value:"Syntax",id:"syntax",level:4},{value:"Name Resolution Rules",id:"name-resolution-rules",level:4},{value:"Legality Rules",id:"legality-rules",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics",level:4},{value:"Examples",id:"examples",level:4}],k={toc:c};function m(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"58--goto-statements"},"5.8  Goto Statements"),(0,l.kt)("admonition",{type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"We're still working on the Reference manual output.  Internal links are broken,\nas are a bunch of other things.\nSee the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"},"tracking issue"))),(0,l.kt)("p",null,"[A ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"./AA-5.8#S0194"},"goto_statement"))," specifies an explicit transfer of control from this ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"./AA-5.1#S0167"},"statement"))," to a target statement with a given label.] "),(0,l.kt)("h4",{id:"syntax"},"Syntax"),(0,l.kt)("p",null,(0,l.kt)("code",null,"goto_statement"),(0,l.kt)("a",{id:"S0194"}),(0,l.kt)("code",null," ::= "),(0,l.kt)("strong",null,"goto")," ",(0,l.kt)("em",null,"label_"),(0,l.kt)("code",null,(0,l.kt)("a",{href:"./AA-4.1#S0091"},"name")),";"),(0,l.kt)("h4",{id:"name-resolution-rules"},"Name Resolution Rules"),(0,l.kt)("p",null,"The ",(0,l.kt)("em",null,"label_"),(0,l.kt)("code",null,(0,l.kt)("a",{href:"./AA-4.1#S0091"},"name"))," shall resolve to denote a ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"./AA-5.1#S0171"},"label")),"; the ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"./AA-5.1#S0167"},"statement"))," with that ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"./AA-5.1#S0171"},"label"))," is the ",(0,l.kt)("em",null,"target statement"),". "),(0,l.kt)("h4",{id:"legality-rules"},"Legality Rules"),(0,l.kt)("p",null,"The innermost ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"./AA-5.1#S0166"},"sequence_of_statements"))," that encloses the target statement shall also enclose the ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"./AA-5.8#S0194"},"goto_statement")),". Furthermore, if a ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"./AA-5.8#S0194"},"goto_statement"))," is enclosed by an ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"./AA-9.5#S0258"},"accept_statement"))," or a body, then the target statement shall not be outside this enclosing construct. "),(0,l.kt)("p",null,(0,l.kt)("strong",null,"Ramification: "),"The ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"./AA-5.8#S0194"},"goto_statement"))," can be a ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"./AA-5.1#S0167"},"statement"))," of an inner ",(0,l.kt)("code",null,"sequence_"),"."),(0,l.kt)("p",null,"It follows from the second rule that if the target ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"./AA-5.1#S0167"},"statement"))," is enclosed by such a construct, then the ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"./AA-5.8#S0194"},"goto_statement"))," cannot be outside. "),(0,l.kt)("h4",{id:"dynamic-semantics"},"Dynamic Semantics"),(0,l.kt)("p",null,"The execution of a ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"./AA-5.8#S0194"},"goto_statement"))," transfers control to the target statement, completing the execution of any ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"./AA-5.1#S0169"},"compound_statement"))," that encloses the ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"./AA-5.8#S0194"},"goto_statement"))," but does not enclose the target. "),(0,l.kt)("p",null,"NOTE 1   The above rules allow transfer of control to a ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"./AA-5.1#S0167"},"statement"))," of an enclosing ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"./AA-5.1#S0166"},"sequence_of_statements"))," but not the reverse. Similarly, they prohibit transfers of control such as between alternatives of a ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"./AA-5.4#S0176"},"case_statement")),", ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"./AA-5.3#S0175"},"if_statement")),", or ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"./AA-9.7#S0269"},"select_statement")),"; between ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"./AA-11.2#S0305"},"exception_handler")),"s; or from an ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"./AA-11.2#S0305"},"exception_handler"))," of a ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"./AA-11.2#S0304"},"handled_sequence_of_statements"))," back to its ",(0,l.kt)("code",null,(0,l.kt)("a",{href:"./AA-5.1#S0166"},"sequence_of_statements")),". "),(0,l.kt)("h4",{id:"examples"},"Examples"),(0,l.kt)("p",null,(0,l.kt)("em",null,"Example of a loop containing a goto statement:")," "),(0,l.kt)(o.Z,{mdxType:"CodeBlock"},"<","<","Sort",">",">","\n","for I in 1 .. N-1 loop","\n","   if A(I) ",">"," A(I+1) then","\n","      Exchange(A(I), A(I+1));","\n","      goto Sort;","\n","   end if;","\n","end loop;","\n"))}m.isMDXComponent=!0}}]);