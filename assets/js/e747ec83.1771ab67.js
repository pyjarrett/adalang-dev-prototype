"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[2291],{1970:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var o=a(9440),i=(a(6687),a(1716));const n={sidebar_position:90},r="Glossary",l={unversionedId:"glossary",id:"glossary",title:"Glossary",description:"Terminology",source:"@site/docs/glossary.md",sourceDirName:".",slug:"/glossary",permalink:"/docs/glossary",draft:!1,tags:[],version:"current",sidebarPosition:90,frontMatter:{sidebar_position:90},sidebar:"tutorialSidebar",previous:{title:"Syntax Cheat Sheet",permalink:"/docs/cheat-sheet"},next:{title:"Contribute",permalink:"/docs/contribute"}},s={},c=[{value:"<code>&lt;&gt;</code>",id:"",level:3},{value:"<code>&#39;</code>",id:"-1",level:3},{value:"ABE",id:"abe",level:3},{value:"allocator",id:"allocator",level:3},{value:"access type",id:"access-type",level:3},{value:"access-to-object type",id:"access-to-object-type",level:3},{value:"access-to-subprogram type",id:"access-to-subprogram-type",level:3},{value:"aggregate",id:"aggregate",level:3},{value:"aliased",id:"aliased",level:3},{value:"aspect",id:"aspect",level:3},{value:"attribute",id:"attribute",level:3},{value:"ATC",id:"atc",level:3},{value:"bounded error",id:"bounded-error",level:3},{value:"completion",id:"completion",level:3},{value:"component",id:"component",level:3},{value:"configuration pragma",id:"configuration-pragma",level:3},{value:"controlled type",id:"controlled-type",level:3},{value:"definite type",id:"definite-type",level:3},{value:"discriminant",id:"discriminant",level:3},{value:"entry",id:"entry",level:3},{value:"erroneous behavior",id:"erroneous-behavior",level:3},{value:"indefinite type",id:"indefinite-type",level:3},{value:"imited type",id:"imited-type",level:3},{value:"parent",id:"parent",level:3},{value:"pragma",id:"pragma",level:3},{value:"progenitor",id:"progenitor",level:3},{value:"qualification",id:"qualification",level:3},{value:"subprogram",id:"subprogram",level:3},{value:"subtype",id:"subtype",level:3},{value:"tagged type",id:"tagged-type",level:3},{value:"type conversion",id:"type-conversion",level:3},{value:"unchecked type conversion",id:"unchecked-type-conversion",level:3}],d={toc:c};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"glossary"},"Glossary"),(0,i.kt)("p",null,"Terminology"),(0,i.kt)("h3",{id:""},(0,i.kt)("inlineCode",{parentName:"h3"},"<>")),(0,i.kt)("p",null,'"Box". Used for defaults or also "not specified."'),(0,i.kt)("h3",{id:"-1"},(0,i.kt)("inlineCode",{parentName:"h3"},"'")),(0,i.kt)("p",null,'"Tick". Access built-in attributes of types.'),(0,i.kt)("h3",{id:"abe"},"ABE"),(0,i.kt)("p",null,'"Access before elaboration"'),(0,i.kt)("h3",{id:"allocator"},"allocator"),(0,i.kt)("p",null,'"new" construct that allocates storage and returns a pointer.\nFailure to allocate results in an exception being raised.'),(0,i.kt)("h3",{id:"access-type"},"access type"),(0,i.kt)("p",null,"Similar to a pointer, a type which refers to the placement of another object in memory."),(0,i.kt)("h3",{id:"access-to-object-type"},"access-to-object type"),(0,i.kt)("p",null,"Pointer type that points to an object in memory. It can be divided further into access-to-constant vs access-to-variable, named access vs anonymous access, pool-specific access (that can only point to the heap) vs general access (that can point to both heap and stack)."),(0,i.kt)("h3",{id:"access-to-subprogram-type"},"access-to-subprogram type"),(0,i.kt)("p",null,"Pointer type that points to a subprogram (function or procedure)."),(0,i.kt)("h3",{id:"aggregate"},"aggregate"),(0,i.kt)("p",null,"The literal value for a composite object (array, record or container). A comma-separated list of values enclosed in parentheses or square-brackets (for homogeneous collections only, and only since Ada 2022)."),(0,i.kt)("h3",{id:"aliased"},"aliased"),(0,i.kt)("p",null,"Objects (both variables and components) can be declared explicitly as aliased, so that it is valid to use attribute Access to point to the object."),(0,i.kt)("h3",{id:"aspect"},"aspect"),(0,i.kt)("p",null,"Additional specification attached to a declaration, either related to its behavior (like preconditions and postcondition for subprograms) or its representation (like size or alignment for objects)."),(0,i.kt)("h3",{id:"attribute"},"attribute"),(0,i.kt)("p",null,"Value or function attached to a type or object, which can be retrieved using the syntax Type'Attribute or Object'Attribute. For example, attributes First and Last denote the first and last indexes of a (constrained) array type, or of any array object."),(0,i.kt)("h3",{id:"atc"},"ATC"),(0,i.kt)("p",null,'"Asynchronous transfer of control"'),(0,i.kt)("h3",{id:"bounded-error"},"bounded error"),(0,i.kt)("p",null,"The result of a violation of Ada program semantics, when the consequences of the error are precisely bounded by the language. E.g. reading an uninitialized variable may lead to any value of the corresponding base type being read."),(0,i.kt)("h3",{id:"completion"},"completion"),(0,i.kt)("p",null,"An initial declaration for a type, constant, subprogram or package may be completed by a second declaration, called the completion of the initial declaration."),(0,i.kt)("h3",{id:"component"},"component"),(0,i.kt)("p",null,"A record field or array element."),(0,i.kt)("h3",{id:"configuration-pragma"},"configuration pragma"),(0,i.kt)("p",null,"A pragma at the very start of a file, or even provided in a separate file depending on the compiler, that applies to the compilation unit as a whole."),(0,i.kt)("h3",{id:"controlled-type"},"controlled type"),(0,i.kt)("p",null,"Type that supports RAII (Resource Acquisition Is Initialization) through the insertion by the compiler of calls to specific procedures at object creation, assignment and end-of-life."),(0,i.kt)("h3",{id:"definite-type"},"definite type"),(0,i.kt)("p",null,"A type for which which requires no explicit constraint or initial value when declared."),(0,i.kt)("h3",{id:"discriminant"},"discriminant"),(0,i.kt)("p",null,"Special field in record types, which may be used to control the structure of the type itself, either through a variant-clause (so the presence of other fields depends on the value of the discriminant) or through the constraint on the array subtype for the last field (so the size of this field depends on the value of the discriminant)."),(0,i.kt)("h3",{id:"entry"},"entry"),(0,i.kt)("p",null,"The other kind of callable entities, in addition to subprograms. It is used for queued operations called concurrently, as part of a task or protected object API."),(0,i.kt)("h3",{id:"erroneous-behavior"},"erroneous behavior"),(0,i.kt)("p",null,"The result of a violation of Ada program semantics, when the consequences of the error are not bounded by the language. E.g. deactivating runtime checks and violating the corresponding conditions may lead to arbitrary code execution."),(0,i.kt)("h3",{id:"indefinite-type"},"indefinite type"),(0,i.kt)("p",null,"A type for which you cannot declare an object without supply bounds a constraint or an initial value."),(0,i.kt)("h3",{id:"imited-type"},"imited type"),(0,i.kt)("p",null,"An uncopyable type."),(0,i.kt)("h3",{id:"parent"},"parent"),(0,i.kt)("p",null,"Non-abstract tagged type being extended."),(0,i.kt)("h3",{id:"pragma"},"pragma"),(0,i.kt)("p",null,"A directive to the compiler. There are many different pragmas defined in Ada, and even more are compiler-specific."),(0,i.kt)("h3",{id:"progenitor"},"progenitor"),(0,i.kt)("p",null,"Additional interfaces inherited."),(0,i.kt)("h3",{id:"qualification"},"qualification"),(0,i.kt)("p",null,"Expression used to verify that an object respects the constraint of a subtype, using the syntax Subtype'Object. This is different from type conversion, as the object and its qualification share the same type."),(0,i.kt)("h3",{id:"subprogram"},"subprogram"),(0,i.kt)("p",null,"A function (returning a result) or procedure (with no result). This does not include entries of tasks or protected objects, which are used for queued operations called concurrently."),(0,i.kt)("h3",{id:"subtype"},"subtype"),(0,i.kt)("p",null,"A type together with additional constraints, like a range of values for a scalar type. An object can be freely converted to a different subtype of the same type, but the corresponding constraint will be checked at runtime if necessary."),(0,i.kt)("h3",{id:"tagged-type"},"tagged type"),(0,i.kt)("p",null,'A type with an associated "tag", which specifies its type and allows for dynamic dispatch.'),(0,i.kt)("h3",{id:"type-conversion"},"type conversion"),(0,i.kt)("p",null,"Expression to change the type of its argument, typically between different scalar types. There are no implicit type conversions in Ada."),(0,i.kt)("h3",{id:"unchecked-type-conversion"},"unchecked type conversion"),(0,i.kt)("p",null,"Blind conversion of a bit pattern from one type to another, using the predefined generic function Ada.Unchecked_Conversion which must be instantiated with the types of source and target."))}p.isMDXComponent=!0}}]);