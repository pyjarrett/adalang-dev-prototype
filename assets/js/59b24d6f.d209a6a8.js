"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[294],{1146:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var i=n(9440),a=(n(6687),n(1716)),o=n(2526);const l={sidebar_position:114},r="13.12  Pragma Restrictions and Pragma Profile",s={unversionedId:"arm/AA-13.12",id:"arm/AA-13.12",title:"13.12  Pragma Restrictions and Pragma Profile",description:"We're still working on the Reference manual output.  Internal links are broken,",source:"@site/docs/arm/AA-13.12.mdx",sourceDirName:"arm",slug:"/arm/AA-13.12",permalink:"/docs/arm/AA-13.12",draft:!1,tags:[],version:"current",sidebarPosition:114,frontMatter:{sidebar_position:114},sidebar:"tutorialSidebar",previous:{title:"13.11  Storage Management",permalink:"/docs/arm/AA-13.11"},next:{title:"13.13  Streams",permalink:"/docs/arm/AA-13.13"}},u={},m=[{value:"Syntax",id:"syntax",level:4},{value:"Name Resolution Rules",id:"name-resolution-rules",level:4},{value:"Legality Rules",id:"legality-rules",level:4},{value:"Post-Compilation Rules",id:"post-compilation-rules",level:4},{value:"Implementation Permissions",id:"implementation-permissions",level:4},{value:"Syntax",id:"syntax-1",level:4},{value:"Legality Rules",id:"legality-rules-1",level:4},{value:"Static Semantics",id:"static-semantics",level:4},{value:"Post-Compilation Rules",id:"post-compilation-rules-1",level:4},{value:"Implementation Permissions",id:"implementation-permissions-1",level:4},{value:"Extensions to Ada 83",id:"extensions-to-ada-83",level:4},{value:"Extensions to Ada 95",id:"extensions-to-ada-95",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4},{value:"Wording Changes from Ada 2005",id:"wording-changes-from-ada-2005",level:4},{value:"13.12.1  Language-Defined Restrictions and Profiles",id:"13121--language-defined-restrictions-and-profiles",level:2},{value:"Static Semantics",id:"static-semantics-1",level:4},{value:"Legality Rules",id:"legality-rules-2",level:4},{value:"Post-Compilation Rules",id:"post-compilation-rules-2",level:4},{value:"Static Semantics",id:"static-semantics-2",level:4},{value:"Extensions to Ada 95",id:"extensions-to-ada-95-1",level:4},{value:"Extensions to Ada 2005",id:"extensions-to-ada-2005",level:4},{value:"Extensions to Ada 2012",id:"extensions-to-ada-2012",level:4}],c={toc:m};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"1312--pragma-restrictions-and-pragma-profile"},"13.12  Pragma Restrictions and Pragma Profile"),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"We're still working on the Reference manual output.  Internal links are broken,\nas are a bunch of other things.\nSee the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"},"tracking issue"))),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI05-0246-1"),"}"," [A ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-2.8#S0019"},"pragma"))," Restrictions expresses the user's intent to abide by certain restrictions. A ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-2.8#S0019"},"pragma"))," Profile expresses the user's intent to abide by a set of Restrictions or other specified run-time policies. These may facilitate the construction of simpler run-time environments.] "),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,"The form of a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-2.8#S0019"},"pragma"))," Restrictions is as follows: "),(0,a.kt)("p",null,"  ",(0,a.kt)("strong",null,"pragma")," Restrictions(",(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-13.12#S0359"},"restriction")),"{",", ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-13.12#S0359"},"restriction")),"}",");"),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI95-00381-01"),"}"," ",(0,a.kt)("code",null,"restriction"),(0,a.kt)("a",{id:"S0359"}),(0,a.kt)("code",null," ::= "),(0,a.kt)("em",null,"restriction_"),(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-2.3#S0002"},"identifier")),"    | ",(0,a.kt)("em",null,"restriction_parameter_"),(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-2.3#S0002"},"identifier"))," =",">"," ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-13.12#S0360"},"restriction_parameter_argument"))),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI95-00381-01"),"}"," ",(0,a.kt)("code",null,"restriction_parameter_argument"),(0,a.kt)("a",{id:"S0360"}),(0,a.kt)("code",null," ::= "),(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-4.1#S0091"},"name"))," | ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-4.4#S0132"},"expression"))),(0,a.kt)("h4",{id:"name-resolution-rules"},"Name Resolution Rules"),(0,a.kt)("p",null,"Unless otherwise specified for a particular restriction, the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-4.4#S0132"},"expression"))," is expected to be of any integer type. "),(0,a.kt)("h4",{id:"legality-rules"},"Legality Rules"),(0,a.kt)("p",null,"Unless otherwise specified for a particular restriction, the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-4.4#S0132"},"expression"))," shall be static, and its value shall be nonnegative. "),(0,a.kt)("p",null,(0,a.kt)("em",null,"This paragraph was deleted.")),(0,a.kt)("p",null,(0,a.kt)("em",null,"Paragraph 7 was deleted.")," "),(0,a.kt)("h4",{id:"post-compilation-rules"},"Post-Compilation Rules"),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI05-0013-1"),"}"," A ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-2.8#S0019"},"pragma"))," Restrictions is a configuration pragma. If a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-2.8#S0019"},"pragma"))," Restrictions applies to any compilation unit included in the partition, this may impose either (or both) of two kinds of requirements, as specified for the particular restriction:"),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI05-0013-1"),"}"," A restriction may impose requirements on some or all of the units comprising the partition. Unless otherwise specified for a particular restriction, such a requirement applies to all of the units comprising the partition and is enforced via a post-compilation check."),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI05-0013-1"),"}"," A restriction may impose requirements on the run-time behavior of the program, as indicated by the specification of run-time behavior associated with a violation of the requirement."),(0,a.kt)("p",null,(0,a.kt)("strong",null,"Ramification: "),"In this latter case, there is no post-compilation check needed for the requirement. "),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"8652/0042"),"}"," ","{",(0,a.kt)("em",null,"AI95-00130-01"),"}"," For the purpose of checking whether a partition contains constructs that violate any restriction (unless specified otherwise for a particular restriction):"),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"8652/0042"),"}"," ","{",(0,a.kt)("em",null,"AI95-00130-01"),"}"," Generic instances are logically expanded at the point of instantiation;"),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"8652/0042"),"}"," ","{",(0,a.kt)("em",null,"AI95-00130-01"),"}"," If an object of a type is declared or allocated and not explicitly initialized, then all expressions appearing in the definition for the type and any of its ancestors are presumed to be used;"),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"8652/0042"),"}"," ","{",(0,a.kt)("em",null,"AI95-00130-01"),"}"," A ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-3.7#S0063"},"default_expression"))," for a formal parameter or a generic formal object is considered to be used if and only if the corresponding actual parameter is not provided in a given call or instantiation. "),(0,a.kt)("h4",{id:"implementation-permissions"},"Implementation Permissions"),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI05-0269-1"),"}"," An implementation may provide implementation-defined restrictions; the identifier for an implementation-defined restriction shall differ from those of the language-defined restrictions. "),(0,a.kt)("p",null,(0,a.kt)("strong",null,"Implementation defined: "),"Implementation-defined restrictions allowed in a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-2.8#S0019"},"pragma"))," Restrictions."),(0,a.kt)("p",null,"An implementation may place limitations on the values of the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-4.4#S0132"},"expression"))," that are supported, and limitations on the supported combinations of restrictions. The consequences of violating such limitations are implementation defined. "),(0,a.kt)("p",null,(0,a.kt)("strong",null,"Implementation defined: "),"The consequences of violating limitations on Restrictions ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-2.8#S0019"},"pragma")),"s."),(0,a.kt)("p",null,(0,a.kt)("strong",null,"Ramification: "),"Such limitations may be enforced at compile time or at run time. Alternatively, the implementation is allowed to declare violations of the restrictions to be erroneous, and not enforce them at all. "),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"8652/0042"),"}"," ","{",(0,a.kt)("em",null,"AI95-00130-01"),"}"," An implementation is permitted to omit restriction checks for code that is recognized at compile time to be unreachable and for which no code is generated."),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"8652/0043"),"}"," ","{",(0,a.kt)("em",null,"AI95-00190-01"),"}"," Whenever enforcement of a restriction is not required prior to execution, an implementation may nevertheless enforce the restriction prior to execution of a partition to which the restriction applies, provided that every execution of the partition would violate the restriction. "),(0,a.kt)("h4",{id:"syntax-1"},"Syntax"),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI95-00249-01"),"}"," ","{",(0,a.kt)("em",null,"AI05-0246-1"),"}"," The form of a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-2.8#S0019"},"pragma"))," Profile is as follows: "),(0,a.kt)("p",null,"  ",(0,a.kt)("strong",null,"pragma")," Profile (",(0,a.kt)("em",null,"profile_"),(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-2.3#S0002"},"identifier"))," ","{",", ",(0,a.kt)("em",null,"profile_"),(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-2.8#S0020"},"pragma_argument_association")),"}",");"),(0,a.kt)("h4",{id:"legality-rules-1"},"Legality Rules"),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI95-00249-01"),"}"," ","{",(0,a.kt)("em",null,"AI05-0246-1"),"}"," The ",(0,a.kt)("em",null,"profile_"),(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-2.3#S0002"},"identifier"))," shall be the name of a usage profile. The semantics of any ",(0,a.kt)("em",null,"profile_"),(0,a.kt)("code",null,"[pragma_argument_association](./AA-2.8#S0020)"),"s are defined by the usage profile specified by the ",(0,a.kt)("em",null,"profile_"),(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-2.3#S0002"},"identifier")),". "),(0,a.kt)("h4",{id:"static-semantics"},"Static Semantics"),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI95-00249-01"),"}"," ","{",(0,a.kt)("em",null,"AI05-0246-1"),"}"," A profile is equivalent to the set of configuration pragmas that is defined for each usage profile. "),(0,a.kt)("h4",{id:"post-compilation-rules-1"},"Post-Compilation Rules"),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI95-00249-01"),"}"," A ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-2.8#S0019"},"pragma"))," Profile is a configuration pragma. There may be more than one ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-2.8#S0019"},"pragma"))," Profile for a partition. "),(0,a.kt)("h4",{id:"implementation-permissions-1"},"Implementation Permissions"),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI05-0269-1"),"}"," An implementation may provide implementation-defined usage profiles; the identifier for an implementation-defined usage profile shall differ from those of the language-defined usage profiles."),(0,a.kt)("p",null,(0,a.kt)("strong",null,"Implementation defined: "),"Implementation-defined usage profiles allowed in a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-2.8#S0019"},"pragma"))," Profile."),(0,a.kt)("p",null,"NOTE 1   ","{",(0,a.kt)("em",null,"AI95-00347-01"),"}"," Restrictions intended to facilitate the construction of efficient tasking run-time systems are defined in D.7. Restrictions intended for use when constructing high integrity systems are defined in H.4."),(0,a.kt)("p",null,"NOTE 2   An implementation has to enforce the restrictions in cases where enforcement is required, even if it chooses not to take advantage of the restrictions in terms of efficiency. "),(0,a.kt)("p",null,(0,a.kt)("strong",null,"Discussion: "),"It is not the intent that an implementation will support a different run-time system for every possible combination of restrictions. An implementation might support only two run-time systems, and document a set of restrictions that is sufficient to allow use of the more efficient and safe one. "),(0,a.kt)("h4",{id:"extensions-to-ada-83"},"Extensions to Ada 83"),(0,a.kt)("p",null,"Pragma Restrictions is new to Ada 95. "),(0,a.kt)("h4",{id:"extensions-to-ada-95"},"Extensions to Ada 95"),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI95-00249-01"),"}"," ","{",(0,a.kt)("em",null,"AI05-0246-1"),"}"," ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-2.8#S0019"},"Pragma")),' Profile is new; it was moved here by Ada 2012 and renamed to a "usage profile" but was otherwise unchanged. '),(0,a.kt)("h4",{id:"wording-changes-from-ada-95"},"Wording Changes from Ada 95"),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"8652/0042"),"}"," ","{",(0,a.kt)("em",null,"AI95-00130-01"),"}"," ",(0,a.kt)("strong",null,"Corrigendum:")," Corrected the wording so that restrictions are checked inside of generic instantiations and in default expressions. Since not making these checks would violate the purpose of restrictions, we are not documenting this as an incompatibility."),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"8652/0043"),"}"," ","{",(0,a.kt)("em",null,"AI95-00190-01"),"}"," ",(0,a.kt)("strong",null,"Corrigendum:")," Added a permission that restrictions can be enforced at compile-time. While this is technically incompatible, documenting it as such would be unnecessarily alarming - there should not be any programs depending on the runtime failure of restrictions."),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI95-00381-01"),"}"," The syntax of a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-13.12#S0360"},"restriction_parameter_argument"))," has been defined to better support restriction No_Dependence (see 13.12.1). "),(0,a.kt)("h4",{id:"wording-changes-from-ada-2005"},"Wording Changes from Ada 2005"),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI05-0013-1"),"}"," ",(0,a.kt)("strong",null,"Correction"),": When restrictions are checked has been clarified. "),(0,a.kt)("h2",{id:"13121--language-defined-restrictions-and-profiles"},"13.12.1  Language-Defined Restrictions and Profiles"),(0,a.kt)("h4",{id:"static-semantics-1"},"Static Semantics"),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI95-00257-01"),"}"," The following ",(0,a.kt)("em",null,"restriction_"),(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-2.3#S0002"},"identifier")),"s are language defined (additional restrictions are defined in the Specialized Needs Annexes):"),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI05-0241-1"),"}"," No_Implementation_Aspect_Specifications There are no implementation-defined aspects specified by an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-13.1#S0346"},"aspect_specification")),". This restriction applies only to the current compilation or environment, not the entire partition. "),(0,a.kt)("p",null,(0,a.kt)("strong",null,"Discussion: "),"{",(0,a.kt)("em",null,"AI05-0241-1"),"}"," This restriction (as well as others below) applies only to the current compilation, because it is likely that the runtime (and possibly user-written low-level code) will need to use implementation-defined aspects. But a partition-wide restriction applies everywhere, including the runtime. "),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI95-00257-01"),"}"," No_Implementation_Attributes There are no implementation-defined attributes. This restriction applies only to the current compilation or environment, not the entire partition. "),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI05-0246-1"),"}"," ","{",(0,a.kt)("em",null,"AI05-0269-1"),"}"," No_Implementation_Identifiers There are no usage names that denote declarations with implementation-defined identifiers that occur within language-defined packages or instances of language-defined generic packages. Such identifiers can arise as follows: "),(0,a.kt)("p",null,"The following language-defined packages and generic packages allow implementation-defined identifiers:"),(0,a.kt)("p",null,"package System (see 13.7);"),(0,a.kt)("p",null,"package Standard (see A.1);"),(0,a.kt)("p",null,"package Ada.Command_Line (see A.15);"),(0,a.kt)("p",null,"package Interfaces.C (see B.3);"),(0,a.kt)("p",null,"package Interfaces.C.Strings (see B.3.1);"),(0,a.kt)("p",null,"package Interfaces.C.Pointers (see B.3.2);"),(0,a.kt)("p",null,"package Interfaces.COBOL (see B.4);"),(0,a.kt)("p",null,"package Interfaces.Fortran (see B.5); "),(0,a.kt)("p",null,"The following language-defined packages contain only implementation-defined identifiers:"),(0,a.kt)("p",null,"package System.Machine_Code (see 13.8);"),(0,a.kt)("p",null,"package Ada.Directories.Information (see A.16);"),(0,a.kt)("p",null,"nested Implementation packages of the Queue containers (see A.18.28-31);"),(0,a.kt)("p",null,"package Interfaces (see B.2);"),(0,a.kt)("p",null,"package Ada.Interrupts.Names (see C.3.2)."),(0,a.kt)("p",null,"For package Standard, Standard.Long_Integer and Standard.Long_Float are considered language-defined identifiers, but identifiers such as Standard.Short_Short_Integer are considered implementation-defined."),(0,a.kt)("p",null,"This restriction applies only to the current compilation or environment, not the entire partition."),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI95-00257-01"),"}"," No_Implementation_Pragmas There are no implementation-defined pragmas or pragma arguments. This restriction applies only to the current compilation or environment, not the entire partition."),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI05-0242-1"),"}"," No_Implementation_Units There is no mention in the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-10.1#S0292"},"context_clause"))," of any implementation-defined descendants of packages Ada, Interfaces, or System. This restriction applies only to the current compilation or environment, not the entire partition."),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI95-00368-01"),"}"," ","{",(0,a.kt)("em",null,"AI05-0229-1"),"}"," No_Obsolescent_Features There is no use of language features defined in Annex J. It is implementation defined whether uses of the renamings of J.1 and of the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-2.8#S0019"},"pragma")),"s of J.15 are detected by this restriction. This restriction applies only to the current compilation or environment, not the entire partition. "),(0,a.kt)("p",null,(0,a.kt)("strong",null,"Reason: "),"A user could compile a rename like "),(0,a.kt)(o.Z,{mdxType:"CodeBlock"},"with Ada.Text_IO;","\n","package Text_IO renames Ada.Text_IO;","\n"),(0,a.kt)("p",null,"Such a rename must not be disallowed by this restriction, nor should the compilation of such a rename be restricted by an implementation. Many implementations implement the renames of J.1 by compiling them normally; we do not want to require implementations to use a special mechanism to implement these renames."),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI05-0229-1"),"}"," The pragmas have the same functionality as the corresponding aspect (unlike the typical obsolescent feature), and rejecting them could be a significant portability problem for existing code. "),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI95-00381-01"),"}"," ","{",(0,a.kt)("em",null,"AI05-0241-1"),"}"," The following ",(0,a.kt)("em",null,"restriction_parameter_"),(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-2.3#S0002"},"identifier")),"s are language defined:"),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI95-00381-01"),"}"," No_Dependence Specifies a library unit on which there are no semantic dependences."),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI05-0241-1"),"}"," No_Specification_of_Aspect Identifies an aspect for which no ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-13.1#S0346"},"aspect_specification")),", ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-13.3#S0349"},"attribute_definition_clause")),", or ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-2.8#S0019"},"pragma"))," is given."),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI05-0272-1"),"}"," No_Use_Of_Attribute Identifies an attribute for which no ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-4.1#S0100"},"attribute_reference"))," or ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-13.3#S0349"},"attribute_definition_clause"))," is given."),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI05-0272-1"),"}"," No_Use_Of_Pragma Identifies a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-2.8#S0019"},"pragma"))," which is not to be used."),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI12-0389-1"),"}"," No_Unrecognized_Aspects There are no ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-13.1#S0346"},"aspect_specification")),"s having an unrecognized ",(0,a.kt)("em",null,"aspect_"),(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-2.3#S0002"},"identifier")),". This restriction applies only to the current compilation or environment, not the entire partition."),(0,a.kt)("p",null,(0,a.kt)("strong",null,"Ramification: "),"When this restriction is in effect, unrecognized aspects cannot be ignored in the current compilation; they violate the restriction. This is true despite the Implementation Permissions of 13.1.1. "),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI12-0389-1"),"}"," No_Unrecognized_Pragmas There are no ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-2.8#S0019"},"pragma")),"s having an unrecognized pragma ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-2.3#S0002"},"identifier")),". This restriction applies only to the current compilation or environment, not the entire partition."),(0,a.kt)("p",null,(0,a.kt)("strong",null,"Ramification: "),"When this restriction is in effect, unrecognized pragmas cannot be ignored in the current compilation; they violate the restriction. This is true despite the rules of 2.8. "),(0,a.kt)("h4",{id:"legality-rules-2"},"Legality Rules"),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI95-00381-01"),"}"," ","{",(0,a.kt)("em",null,"AI12-0444-1"),"}"," The ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-13.12#S0360"},"restriction_parameter_argument"))," of a No_Dependence restriction shall be a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-4.1#S0091"},"name")),"; the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-4.1#S0091"},"name"))," shall have the form of a full expanded name of a library unit, but can be a name that has no corresponding unit currently present in the environment."),(0,a.kt)("p",null,(0,a.kt)("strong",null,"Ramification: "),"This ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-4.1#S0091"},"name"))," is not resolved. "),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI05-0241-1"),"}"," The ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-13.12#S0360"},"restriction_parameter_argument"))," of a No_Specification_of_Aspect restriction shall be an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-2.3#S0002"},"identifier")),"; this is an identifier specific to a pragma (see 2.8) and does not denote any declaration."),(0,a.kt)("p",null,(0,a.kt)("strong",null,"Ramification: "),"This ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-13.12#S0360"},"restriction_parameter_argument"))," is not resolved as it is an identifier specific to a pragma. As for No_Dependence, there is no check that the aspect ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-2.3#S0002"},"identifier"))," is meaningful; it might refer to an implementation-defined aspect on one implementation, but nothing at all on another implementation. "),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI05-0272-1"),"}"," The ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-13.12#S0360"},"restriction_parameter_argument"))," of a No_Use_Of_Attribute restriction shall be an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-2.3#S0002"},"identifier"))," or one of the reserved words Access, Delta, Digits, Mod, or Range; this is an identifier specific to a pragma."),(0,a.kt)("p",null,(0,a.kt)("strong",null,"Ramification: "),"This ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-13.12#S0360"},"restriction_parameter_argument"))," is not resolved as it is an identifier specific to a pragma. There is no check that the attribute identifier refers to a known ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-4.1#S0101"},"attribute_designator")),"; it might refer to an implementation-defined attribute on one implementation, but nothing at all on another implementation. "),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI05-0272-1"),"}"," The ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-13.12#S0360"},"restriction_parameter_argument"))," of a No_Use_Of_Pragma restriction shall be an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-2.3#S0002"},"identifier"))," or the reserved word Interface; this is an identifier specific to a pragma."),(0,a.kt)("p",null,(0,a.kt)("strong",null,"Ramification: "),"This ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-13.12#S0360"},"restriction_parameter_argument"))," is not resolved as it is an identifier specific to a pragma. There is no check that the pragma identifier refers to a known ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-2.8#S0019"},"pragma")),"; it might refer to an implementation-defined pragma on one implementation, but nothing at all on another implementation. "),(0,a.kt)("h4",{id:"post-compilation-rules-2"},"Post-Compilation Rules"),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI95-00381-01"),"}"," ","{",(0,a.kt)("em",null,"AI05-0241-1"),"}"," No compilation unit included in the partition shall depend semantically on the library unit identified by the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-4.1#S0091"},"name"))," of a No_Dependence restriction."),(0,a.kt)("p",null,(0,a.kt)("strong",null,"Ramification: "),"{",(0,a.kt)("em",null,"AI12-0005-1"),"}"," There is no requirement that the library unit actually exists. One possible use of the pragma is to prevent the use of implementation-defined units; when the program is ported to a different compiler, it is perfectly reasonable that no unit with the name exists. "),(0,a.kt)("h4",{id:"static-semantics-2"},"Static Semantics"),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI05-0246-1"),"}"," The following ",(0,a.kt)("em",null,"profile_"),(0,a.kt)("code",null,(0,a.kt)("a",{href:"./AA-2.3#S0002"},"identifier"))," is language defined:"),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI05-0246-1"),"}"," No_Implementation_Extensions "),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI05-0246-1"),"}"," For usage profile No_Implementation_Extensions, there shall be no ",(0,a.kt)("em",null,"profile_"),(0,a.kt)("code",null,"[pragma_argument_association](./AA-2.8#S0020)"),"s."),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI05-0246-1"),"}"," The No_Implementation_Extensions usage profile is equivalent to the following restrictions: "),(0,a.kt)(o.Z,{mdxType:"CodeBlock"},"No_Implementation_Aspect_Specifications,","\n","No_Implementation_Attributes,","\n","No_Implementation_Identifiers,","\n","No_Implementation_Pragmas,","\n","No_Implementation_Units.","\n"),(0,a.kt)("h4",{id:"extensions-to-ada-95-1"},"Extensions to Ada 95"),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI95-00257-01"),"}"," ","{",(0,a.kt)("em",null,"AI95-00368-01"),"}"," Restrictions No_Implementation_Attributes, No_Implementation_Pragmas, and No_Obsolescent_Features are new."),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI95-00381-01"),"}"," Restriction No_Dependence is new. "),(0,a.kt)("h4",{id:"extensions-to-ada-2005"},"Extensions to Ada 2005"),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI05-0241-1"),"}"," ","{",(0,a.kt)("em",null,"AI05-0242-1"),"}"," ","{",(0,a.kt)("em",null,"AI05-0246-1"),"}"," ","{",(0,a.kt)("em",null,"AI05-0272-1"),"}"," Restrictions No_Implementation_Aspect_Specifications, No_Implementation_Identifiers, No_Implementation_Units, No_Specification_of_Aspect, No_Use_of_Attribute, and No_Use_of_Pragma are new."),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI05-0246-1"),"}"," Profile No_Implementation_Extensions is new. "),(0,a.kt)("h4",{id:"extensions-to-ada-2012"},"Extensions to Ada 2012"),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI12-0389-1"),"}"," Restrictions No_Unrecognized_Aspects and No_Unrecognized_Pragmas are new. "))}d.isMDXComponent=!0}}]);