"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[2680],{9254:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var l=a(9440),n=(a(6687),a(1716)),o=a(2526);const i={sidebar_position:36},s="4.8  Allocators",r={unversionedId:"arm/AA-4.8",id:"arm/AA-4.8",title:"4.8  Allocators",description:"We're still working on the Reference manual output.  Internal links are broken,",source:"@site/docs/arm/AA-4.8.mdx",sourceDirName:"arm",slug:"/arm/AA-4.8",permalink:"/docs/arm/AA-4.8",draft:!1,tags:[],version:"current",sidebarPosition:36,frontMatter:{sidebar_position:36},sidebar:"tutorialSidebar",previous:{title:"4.7  Qualified Expressions",permalink:"/docs/arm/AA-4.7"},next:{title:"4.9  Static Expressions and Static Subtypes",permalink:"/docs/arm/AA-4.9"}},c={},d=[{value:"Syntax",id:"syntax",level:4},{value:"Name Resolution Rules",id:"name-resolution-rules",level:4},{value:"Legality Rules",id:"legality-rules",level:4},{value:"Static Semantics",id:"static-semantics",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics",level:4},{value:"Bounded (Run-Time) Errors",id:"bounded-run-time-errors",level:4},{value:"Examples",id:"examples",level:4},{value:"Incompatibilities With Ada 83",id:"incompatibilities-with-ada-83",level:4},{value:"Extensions to Ada 83",id:"extensions-to-ada-83",level:4},{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83",level:4},{value:"Inconsistencies With Ada 95",id:"inconsistencies-with-ada-95",level:4},{value:"Incompatibilities With Ada 95",id:"incompatibilities-with-ada-95",level:4},{value:"Extensions to Ada 95",id:"extensions-to-ada-95",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4},{value:"Incompatibilities With Ada 2005",id:"incompatibilities-with-ada-2005",level:4},{value:"Extensions to Ada 2005",id:"extensions-to-ada-2005",level:4},{value:"Wording Changes from Ada 2005",id:"wording-changes-from-ada-2005",level:4}],h={toc:d};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"48--allocators"},"4.8  Allocators"),(0,n.kt)("admonition",{type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"We're still working on the Reference manual output.  Internal links are broken,\nas are a bunch of other things.\nSee the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"},"tracking issue"))),(0,n.kt)("p",null,"[The evaluation of an ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0164"},"allocator"))," creates an object and yields an access value that designates the object. ]"),(0,n.kt)("h4",{id:"syntax"},"Syntax"),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI05-0111-3"),"}"," ",(0,n.kt)("code",null,"allocator"),(0,n.kt)("a",{id:"S0164"}),(0,n.kt)("code",null," ::= "),"   ",(0,n.kt)("strong",null,"new")," [",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0165"},"subpool_specification")),"] ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-3.2#S0027"},"subtype_indication"))," | ",(0,n.kt)("strong",null,"new")," [",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0165"},"subpool_specification")),"] ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.7#S0163"},"qualified_expression"))),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI05-0111-3"),"}"," ",(0,n.kt)("code",null,"subpool_specification"),(0,n.kt)("a",{id:"S0165"}),(0,n.kt)("code",null," ::= "),"(",(0,n.kt)("em",null,"subpool_handle_"),(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.1#S0091"},"name")),")"),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI05-0104-1"),"}"," For an ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0164"},"allocator"))," with a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-3.2#S0027"},"subtype_indication")),", the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-3.2#S0027"},"subtype_indication"))," shall not specify a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-3.10#S0083"},"null_exclusion")),"."),(0,n.kt)("p",null,(0,n.kt)("strong",null,"Reason: "),"Such an uninitialized ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0164"},"allocator"))," would necessarily raise Constraint_Error, as the default value is ",(0,n.kt)("strong",null,"null"),". Also note that the syntax does not allow a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-3.10#S0083"},"null_exclusion"))," in an initialized ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0164"},"allocator")),", so it makes sense to make the uninitialized case illegal as well. "),(0,n.kt)("h4",{id:"name-resolution-rules"},"Name Resolution Rules"),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"8652/0010"),"}"," ","{",(0,n.kt)("em",null,"AI95-00127-01"),"}"," ","{",(0,n.kt)("em",null,"AI05-0111-3"),"}"," ","{",(0,n.kt)("em",null,"AI05-0269-1"),"}"," The expected type for an ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0164"},"allocator"))," shall be a single access-to-object type with designated type ",(0,n.kt)("em",null,"D")," such that either ",(0,n.kt)("em",null,"D")," covers the type determined by the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-3.2#S0028"},"subtype_mark"))," of the ",(0,n.kt)("code",null,"[subtype_indication](./AA-3.2#S0027)")," or ",(0,n.kt)("code",null,"[qualified_expression](./AA-4.7#S0163)"),", or the expected type is anonymous and the determined type is ",(0,n.kt)("em",null,"D"),"'Class. A ",(0,n.kt)("em",null,"subpool_handle_"),(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.1#S0091"},"name"))," is expected to be of any type descended from Subpool_Handle, which is the type used to identify a subpool, declared in package System.Storage_Pools.Subpools (see 13.11.4). "),(0,n.kt)("p",null,(0,n.kt)("strong",null,"Discussion: "),'See 8.6, "The Context of Overload Resolution" for the meaning of "shall be a single ... type whose ...". '),(0,n.kt)("p",null,(0,n.kt)("strong",null,"Ramification: "),"{",(0,n.kt)("em",null,"8652/0010"),"}"," ","{",(0,n.kt)("em",null,"AI95-00127-01"),"}"," An ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0164"},"allocator"))," is allowed as a controlling parameter of a dispatching call (see 3.9.2). "),(0,n.kt)("h4",{id:"legality-rules"},"Legality Rules"),(0,n.kt)("p",null,"An ",(0,n.kt)("em",null,"initialized")," allocator is an ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0164"},"allocator"))," with a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.7#S0163"},"qualified_expression")),". An ",(0,n.kt)("em",null,"uninitialized")," allocator is one with a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-3.2#S0027"},"subtype_indication")),". In the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-3.2#S0027"},"subtype_indication"))," of an uninitialized allocator, a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-3.2#S0029"},"constraint"))," is permitted only if the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-3.2#S0028"},"subtype_mark"))," denotes an [unconstrained] composite subtype; if there is no ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-3.2#S0029"},"constraint")),", then the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-3.2#S0028"},"subtype_mark"))," shall denote a definite subtype. "),(0,n.kt)("p",null,(0,n.kt)("strong",null,"Ramification: "),"For example, ... ",(0,n.kt)("strong",null,"new")," S'Class ... (with no initialization expression) is illegal, but ... ",(0,n.kt)("strong",null,"new")," S'Class'(X) ... is legal, and takes its tag and constraints from the initial value X. (Note that the former case cannot have a constraint.) "),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00287-01"),"}"," If the type of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0164"},"allocator"))," is an access-to-constant type, the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0164"},"allocator"))," shall be an initialized allocator. "),(0,n.kt)("p",null,(0,n.kt)("em",null,"This paragraph was deleted."),"{",(0,n.kt)("em",null,"AI95-00287-01"),"}"," "),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI05-0111-3"),"}"," If a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0165"},"subpool_specification"))," is given, the type of the storage pool of the access type shall be a descendant of Root_Storage_Pool_With_Subpools."),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00344-01"),"}"," If the designated type of the type of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0164"},"allocator"))," is class-wide, the accessibility level of the type determined by the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-3.2#S0027"},"subtype_indication"))," or ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.7#S0163"},"qualified_expression"))," shall not be statically deeper than that of the type of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0164"},"allocator")),". "),(0,n.kt)("p",null,(0,n.kt)("strong",null,"Reason: "),"This prevents the allocated object from outliving its type. "),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00416-01"),"}"," ","{",(0,n.kt)("em",null,"AI05-0051-1"),"}"," If the subtype determined by the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-3.2#S0027"},"subtype_indication"))," or ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.7#S0163"},"qualified_expression"))," of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0164"},"allocator"))," has one or more access discriminants, then the accessibility level of the anonymous access type of each access discriminant shall not be statically deeper than that of the type of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0164"},"allocator"))," (see 3.10.2). "),(0,n.kt)("p",null,(0,n.kt)("strong",null,"Reason: "),"This prevents the allocated object from outliving its discriminants. "),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00366-01"),"}"," ","{",(0,n.kt)("em",null,"AI05-0052-1"),"}"," ","{",(0,n.kt)("em",null,"AI05-0157-1"),"}"," An ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0164"},"allocator"))," shall not be of an access type for which the Storage_Size has been specified by a static expression with value zero or is defined by the language to be zero. "),(0,n.kt)("p",null,(0,n.kt)("strong",null,"Reason: "),"An ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0164"},"allocator"))," for an access type that has Storage_Size specified to be zero is required to raise Storage_Error anyway. It's better to detect the error at compile-time, as the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0164"},"allocator"))," might be executed infrequently. This also simplifies the rules for Pure units, where we do not want to allow any allocators for library-level access types, as they would represent state."),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI05-0157-1"),"}"," We don't need a special rule to cover generic formals (unlike many other similar Legality Rules). There are only two cases of interest. For formal access types, the Storage_Size property is not known in the generic, and surely isn't static, so this Legality Rule can never apply. For a formal derived type, this Legality Rule can only be triggered by a parent type having one of the appropriate properties. But Storage_Size can never be specified for a derived access type, so it always has the same value for all child types; additionally, a type derived from a remote access type (which has Storage_Size defined to be zero) is also a remote access type. That means that any actual that would match the formal derived type necessarily has the same Storage_Size properties, so it is harmless (and preferable) to check them in the body - they are always known in that case. For other formal types,",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0164"},"allocator")),"s are not allowed, so we don't need to consider them. So we don't need an assume-the-best rule here. "),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI05-0052-1"),"}"," If the designated type of the type of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0164"},"allocator"))," is limited, then the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0164"},"allocator"))," shall not be used to define the value of an access discriminant, unless the discriminated type is immutably limited (see 7.5)."),(0,n.kt)("p",null,(0,n.kt)("strong",null,"Reason: "),"Because coextensions work very much like parts, we don't want users creating limited coextensions for nonlimited types. This would be similar to extending a nonlimited type with a limited component. We check this on the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0164"},"allocator")),". Note that there is an asymmetry in what types are considered limited; this is required to preserve privacy. We have to assume that the designated type might be limited as soon as we see a limited partial view, but we want to ensure that the containing object is of a type that is always limited. "),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI05-0052-1"),"}"," In addition to the places where Legality Rules normally apply (see 12.3), these rules apply also in the private part of an instance of a generic unit. "),(0,n.kt)("p",null,(0,n.kt)("strong",null,"Discussion: "),"This applies to all of the Legality Rules of this subclause. "),(0,n.kt)("h4",{id:"static-semantics"},"Static Semantics"),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00363-01"),"}"," ","{",(0,n.kt)("em",null,"AI05-0041-1"),"}"," If the designated type of the type of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0164"},"allocator"))," is elementary, then the subtype of the created object is the designated subtype. If the designated type is composite, then the subtype of the created object is the designated subtype when the designated subtype is constrained or there is an ancestor of the designated type that has a constrained partial view; otherwise, the created object is constrained by its initial value [(even if the designated subtype is unconstrained with defaults)]. "),(0,n.kt)("p",null,(0,n.kt)("strong",null,"Discussion: "),"See AI83-00331. "),(0,n.kt)("p",null,(0,n.kt)("strong",null,"Reason: "),"{",(0,n.kt)("em",null,"AI95-00363-01"),"}"," All objects created by an ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0164"},"allocator"))," are aliased, and most aliased composite objects need to be constrained so that access subtypes work reasonably. Problematic access subtypes are prohibited for types with a constrained partial view. "),(0,n.kt)("p",null,(0,n.kt)("strong",null,"Discussion: "),"{",(0,n.kt)("em",null,"AI95-00363-01"),"}"," If there is a constrained partial view of the type, this allows the objects to be unconstrained. This eliminates privacy breaking (we don't want the objects to act differently simply because they're allocated). Such a created object is effectively constrained by its initial value if the access type is an access-to-constant type, or the designated type is limited (in all views), but we don't need to state that here. It is implicit in other rules. Note, however, that a value of an access-to-constant type can designate a variable object via 'Access or conversion, and the variable object might be assigned by some other access path, and that assignment might alter the discriminants. "),(0,n.kt)("h4",{id:"dynamic-semantics"},"Dynamic Semantics"),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00373-01"),"}"," For the evaluation of an initialized allocator, the evaluation of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.7#S0163"},"qualified_expression"))," is performed first. An object of the designated type is created and the value of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.7#S0163"},"qualified_expression"))," is converted to the designated subtype and assigned to the object. "),(0,n.kt)("p",null,(0,n.kt)("strong",null,"Ramification: "),"The conversion might raise Constraint_Error. "),(0,n.kt)("p",null,"For the evaluation of an uninitialized allocator, the elaboration of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-3.2#S0027"},"subtype_indication"))," is performed first. Then: "),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00373-01"),"}"," If the designated type is elementary, an object of the designated subtype is created and any implicit initial value is assigned;"),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"8652/0002"),"}"," ","{",(0,n.kt)("em",null,"AI95-00171-01"),"}"," ","{",(0,n.kt)("em",null,"AI95-00373-01"),"}"," If the designated type is composite, an object of the designated type is created with tag, if any, determined by the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-3.2#S0028"},"subtype_mark"))," of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-3.2#S0027"},"subtype_indication")),". This object is then initialized by default (see 3.3.1) using the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-3.2#S0027"},"subtype_indication"))," to determine its nominal subtype. A check is made that the value of the object belongs to the designated subtype. Constraint_Error is raised if this check fails. This check and the initialization of the object are performed in an arbitrary order."),(0,n.kt)("p",null,(0,n.kt)("strong",null,"Discussion: "),"AI83-00150. "),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00344-01"),"}"," ","{",(0,n.kt)("em",null,"AI95-00416-01"),"}"," ","{",(0,n.kt)("em",null,"AI05-0024-1"),"}"," ","{",(0,n.kt)("em",null,"AI05-0051-1"),"}"," ","{",(0,n.kt)("em",null,"AI05-0234-1"),"}"," For any ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0164"},"allocator")),", if the designated type of the type of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0164"},"allocator"))," is class-wide, then a check is made that the master of the type determined by the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-3.2#S0027"},"subtype_indication")),", or by the tag of the value of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.7#S0163"},"qualified_expression")),", includes the elaboration of the type of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0164"},"allocator")),". If any part of the subtype determined by the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-3.2#S0027"},"subtype_indication"))," or ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.7#S0163"},"qualified_expression"))," of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0164"},"allocator"))," (or by the tag of the value if the type of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.7#S0163"},"qualified_expression"))," is class-wide) has one or more access discriminants, then a check is made that the accessibility level of the anonymous access type of each access discriminant is not deeper than that of the type of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0164"},"allocator")),". Program_Error is raised if either such check fails. "),(0,n.kt)("p",null,(0,n.kt)("strong",null,"Reason: "),"{",(0,n.kt)("em",null,"AI95-00344-01"),"}"," ","{",(0,n.kt)("em",null,"AI05-0024-1"),"}"," The master check on class-wide types prevents the allocated object from outliving its type. We need the run-time check in instance bodies, or when the type of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.7#S0163"},"qualified_expression"))," is class-wide (other cases are statically detected)."),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI05-0024-1"),"}",' We can\'t use the normal accessibility level "deeper than" check here because we may have "incomparable" levels if the appropriate master and the type declaration belong to two different tasks. This can happen when checking the master of the tag for an allocator initialized by a parameter passed in to an accept statement, if the type of the allocator is an access type declared in the enclosing task body. For example:'),(0,n.kt)(o.Z,{mdxType:"CodeBlock"},"task body TT is","\n","   type Acc_TC is access T'Class;","\n","   P : Acc_TC;","\n","begin","\n","   accept E(X : T'Class) do","\n","      P := new T'Class'(X);","\n","         --  Master check on tag of X.","\n",'         --  Can\'t use "accessibility levels" since they might be incomparable.',"\n","         --  Must revert to checking that the master of the type identified by","\n","         --  X'tag includes the elaboration of Acc_TC, so it is sure to outlive it.","\n","   end E;","\n"),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00416-01"),"}"," The accessibility check on access discriminants prevents the allocated object from outliving its discriminants."),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00280-01"),"}"," If the object to be created by an ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0164"},"allocator"))," has a controlled or protected part, and the finalization of the collection of the type of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0164"},"allocator"))," (see 7.6.1) has started, Program_Error is raised. "),(0,n.kt)("p",null,(0,n.kt)("strong",null,"Reason: "),"If the object has a controlled or protected part, its finalization is likely to be nontrivial. If the allocation was allowed, we could not know whether the finalization would actually be performed. That would be dangerous to otherwise safe abstractions, so we mandate a check here. On the other hand, if the finalization of the object will be trivial, we do not require (but allow) the check, as no real harm could come from late allocation. "),(0,n.kt)("p",null,(0,n.kt)("strong",null,"Discussion: "),"This check can only fail if an ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0164"},"allocator"))," is evaluated in code reached from a Finalize routine for a type declared in the same master. That's highly unlikely; Finalize routines are much more likely to be deallocating objects than allocating them. "),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00280-01"),"}"," If the object to be created by an ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0164"},"allocator"))," contains any tasks, and the master of the type of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0164"},"allocator"))," is completed, and all of the dependent tasks of the master are terminated (see 9.3), then Program_Error is raised. "),(0,n.kt)("p",null,(0,n.kt)("strong",null,"Reason: "),"A task created after waiting for tasks has finished could depend on freed data structures, and certainly would never be awaited. "),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI05-0111-3"),"}"," If the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0164"},"allocator"))," includes a ",(0,n.kt)("em",null,"subpool_handle_"),(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.1#S0091"},"name")),", Constraint_Error is raised if the subpool handle is ",(0,n.kt)("strong",null,"null"),". Program_Error is raised if the subpool does not ",(0,n.kt)("em",null,"belong")," (see 13.11.4) to the storage pool of the access type of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0164"},"allocator")),". "),(0,n.kt)("p",null,(0,n.kt)("strong",null,"Implementation Note: "),"This can be implemented by comparing the result of Pool_of_Subpool to a reference to the storage pool object. Pool_of_Subpool's parameter is ",(0,n.kt)("strong",null,"not null"),", so the check for null falls out naturally. "),(0,n.kt)("p",null,(0,n.kt)("strong",null,"Reason: "),"This detects cases where the subpool belongs to another pool, or to no pool at all. This includes detecting dangling subpool handles so long as the subpool object (the object designated by the handle) still exists. (If the subpool object has been deallocated, execution is erroneous; it is likely that this check will still detect the problem, but there cannot be a guarantee.) "),(0,n.kt)("p",null,"[If the created object contains any tasks, they are activated (see 9.2).] Finally, an access value that designates the created object is returned. "),(0,n.kt)("h4",{id:"bounded-run-time-errors"},"Bounded (Run-Time) Errors"),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00280-01"),"}","  It is a bounded error if the finalization of the collection of the type (see 7.6.1) of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0164"},"allocator"))," has started. If the error is detected, Program_Error is raised. Otherwise, the allocation proceeds normally. "),(0,n.kt)("p",null,(0,n.kt)("strong",null,"Discussion: "),"This check is required in some cases; see above. "),(0,n.kt)("p",null,"NOTE 1   Allocators cannot create objects of an abstract type. See 3.9.3."),(0,n.kt)("p",null,"NOTE 2   If any part of the created object is controlled, the initialization includes calls on corresponding Initialize or Adjust procedures. See 7.6."),(0,n.kt)("p",null,"NOTE 3   ","{",(0,n.kt)("em",null,"AI12-0440-1"),"}",' As explained in 13.11, "Storage Management", the storage for an object allocated by an ',(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0164"},"allocator"))," comes from a storage pool (possibly user defined). The exception Storage_Error is raised by an ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0164"},"allocator"))," if there is not enough storage. Instances of Unchecked_Deallocation can be used to explicitly reclaim storage."),(0,n.kt)("p",null,"NOTE 4   ","{",(0,n.kt)("em",null,"AI05-0229-1"),"}"," ","{",(0,n.kt)("em",null,"AI12-0442-1"),"}"," Implementations can, if desired, provide garbage collection. "),(0,n.kt)("p",null,(0,n.kt)("strong",null,"Ramification: "),"Note that in an ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0164"},"allocator")),", the exception Constraint_Error can be raised by the evaluation of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.7#S0163"},"qualified_expression")),", by the elaboration of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-3.2#S0027"},"subtype_indication")),", or by the initialization. "),(0,n.kt)("p",null,(0,n.kt)("strong",null,"Discussion: "),"By default, the implementation provides the storage pool. The user may exercise more control over storage management by associating a user-defined pool with an access type. "),(0,n.kt)("h4",{id:"examples"},"Examples"),(0,n.kt)("p",null,(0,n.kt)("em",null,"Examples of allocators:")," "),(0,n.kt)(o.Z,{mdxType:"CodeBlock"},"new Cell'(0, null, null)                          -- initialized explicitly, see 3.10.1","\n","new Cell'(Value =",">"," 0, Succ =",">"," null, Pred =",">"," null) -- initialized explicitly","\n","new Cell                                          -- not initialized","\n"),(0,n.kt)(o.Z,{mdxType:"CodeBlock"},"new Matrix(1 .. 10, 1 .. 20)                      -- the bounds only are given","\n","new Matrix'(1 .. 10 =",">"," (1 .. 20 =",">"," 0.0))          -- initialized explicitly","\n"),(0,n.kt)(o.Z,{mdxType:"CodeBlock"},"new Buffer(100)                                   -- the discriminant only is given","\n","new Buffer'(Size =",">"," 80, Pos =",">"," 0, Value =",">"," (1 .. 80 =",">"," 'A')) -- initialized explicitly","\n"),(0,n.kt)(o.Z,{mdxType:"CodeBlock"},"Expr_Ptr'(new Literal)                  -- allocator for access-to-class-wide type, see 3.9.1","\n","Expr_Ptr'(new Literal'(Expression with 3.5))      -- initialized explicitly","\n"),(0,n.kt)("h4",{id:"incompatibilities-with-ada-83"},"Incompatibilities With Ada 83"),(0,n.kt)("p",null,"The ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-3.2#S0027"},"subtype_indication"))," of an uninitialized allocator may not have an explicit ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-3.2#S0029"},"constraint"))," if the designated type is an access type. In Ada 83, this was permitted even though the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-3.2#S0029"},"constraint"))," had no effect on the subtype of the created object. "),(0,n.kt)("h4",{id:"extensions-to-ada-83"},"Extensions to Ada 83"),(0,n.kt)("p",null,"Allocators creating objects of type ",(0,n.kt)("em",null,"T")," are now overloaded on access types designating ",(0,n.kt)("em",null,"T'"),"Class and all class-wide types that cover ",(0,n.kt)("em",null,"T"),"."),(0,n.kt)("p",null,"Implicit array subtype conversion (sliding) is now performed as part of an initialized allocator. "),(0,n.kt)("h4",{id:"wording-changes-from-ada-83"},"Wording Changes from Ada 83"),(0,n.kt)("p",null,"We have used a new organization, inspired by the ACID document, that makes it clearer what is the subtype of the created object, and what subtype conversions take place."),(0,n.kt)("p",null,'Discussion of storage management issues, such as garbage collection and the raising of Storage_Error, has been moved to 13.11, "Storage Management". '),(0,n.kt)("h4",{id:"inconsistencies-with-ada-95"},"Inconsistencies With Ada 95"),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00363-01"),"}"," If the designated type has a constrained partial view, the allocated object can be unconstrained. This might cause the object to take up a different amount of memory, and might cause the operations to work where they previously would have raised Constraint_Error. It's unlikely that the latter would actually matter in a real program (Constraint_Error usually indicates a bug that would be fixed, not left in a program.) The former might cause Storage_Error to be raised at a different time than in an Ada 95 program. "),(0,n.kt)("h4",{id:"incompatibilities-with-ada-95"},"Incompatibilities With Ada 95"),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00366-01"),"}"," An ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0164"},"allocator"))," for an access type that has Storage_Size specified to be zero is now illegal. Ada 95 allowed the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0164"},"allocator")),", but it had to raise Storage_Error if executed. The primary impact of this change should be to detect bugs. "),(0,n.kt)("h4",{id:"extensions-to-ada-95"},"Extensions to Ada 95"),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"8652/0010"),"}"," ","{",(0,n.kt)("em",null,"AI95-00127-01"),"}"," ",(0,n.kt)("strong",null,"Corrigendum:")," An ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0164"},"allocator"))," can be a controlling parameter of a dispatching call. This was an oversight in Ada 95."),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00287-01"),"}"," Initialized ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0164"},"allocator")),"s are allowed when the designated type is limited. "),(0,n.kt)("h4",{id:"wording-changes-from-ada-95"},"Wording Changes from Ada 95"),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"8652/0002"),"}"," ","{",(0,n.kt)("em",null,"AI95-00171-01"),"}"," ",(0,n.kt)("strong",null,"Corrigendum:")," Clarified the elaboration of per-object constraints for an uninitialized allocator."),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00280-01"),"}"," Program_Error is now raised if the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0164"},"allocator"))," occurs after the finalization of the collection or the waiting for tasks. This is not listed as an incompatibility as the Ada 95 behavior was unspecified, and Ada 95 implementations tend to generate programs that crash in this case."),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00344-01"),"}"," Added accessibility checks to class-wide ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0164"},"allocator")),"s. These checks could not fail in Ada 95 (as all of the designated types had to be declared at the same level, so the access type would necessarily have been at the same level or more nested than the type of allocated object)."),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00373-01"),"}",' Revised the description of evaluation of uninitialized allocators to use "initialized by default" so that the ordering requirements are the same for all kinds of objects that are default-initialized.'),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00416-01"),"}"," Added accessibility checks to access discriminants of ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0164"},"allocator")),"s. These checks could not fail in Ada 95 as the discriminants always have the accessibility of the object. "),(0,n.kt)("h4",{id:"incompatibilities-with-ada-2005"},"Incompatibilities With Ada 2005"),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI05-0052-1"),"}"," ",(0,n.kt)("strong",null,"Correction:")," Added a rule to prevent limited coextensions of nonlimited types. Allowing this would have far-reaching implementation costs. Because of those costs, it seems unlikely that any implementation ever supported it properly and thus it is unlikely that any existing code depends on this capability."),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI05-0104-1"),"}"," ",(0,n.kt)("strong",null,"Correction:")," Added a rule to make ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-3.10#S0083"},"null_exclusion")),"s illegal for uninitialized ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0164"},"allocator")),"s, as such an ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0164"},"allocator"))," would always raise Constraint_Error. Programs that depend on the unconditional raising of a predefined exception should be very rare. "),(0,n.kt)("h4",{id:"extensions-to-ada-2005"},"Extensions to Ada 2005"),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI05-0111-3"),"}"," Subpool handles (see 13.11.4) can be specified in an ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"./AA-4.8#S0164"},"allocator")),". "),(0,n.kt)("h4",{id:"wording-changes-from-ada-2005"},"Wording Changes from Ada 2005"),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI05-0024-1"),"}"," ",(0,n.kt)("strong",null,"Correction:")," Corrected the master check for tags since the masters may be for different tasks and thus incomparable."),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI05-0041-1"),"}"," ",(0,n.kt)("strong",null,"Correction:")," Corrected the rules for when a designated object is constrained by its initial value so that types derived from a partial view are handled properly."),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI05-0051-1"),"}"," ","{",(0,n.kt)("em",null,"AI05-0234-1"),"}"," ",(0,n.kt)("strong",null,"Correction:")," Corrected the accessibility check for access discriminants so that it does not depend on the designated type (which might not have discriminants when the allocated type does). "))}u.isMDXComponent=!0}}]);