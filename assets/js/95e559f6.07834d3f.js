"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[6503],{1821:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(9440),o=(n(6687),n(1716)),a=n(2526);const i={sidebar_position:108},s="13.6  Change of Representation",c={unversionedId:"arm/AA-13.6",id:"arm/AA-13.6",title:"13.6  Change of Representation",description:"We're still working on the Reference manual output.  Internal links are broken,",source:"@site/docs/arm/AA-13.6.mdx",sourceDirName:"arm",slug:"/arm/AA-13.6",permalink:"/docs/arm/AA-13.6",draft:!1,tags:[],version:"current",sidebarPosition:108,frontMatter:{sidebar_position:108},sidebar:"tutorialSidebar",previous:{title:"13.5  Record Layout",permalink:"/docs/arm/AA-13.5"},next:{title:"13.7  The Package System",permalink:"/docs/arm/AA-13.7"}},p={},l=[{value:"Examples",id:"examples",level:4}],d={toc:l};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"136--change-of-representation"},"13.6  Change of Representation"),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"We're still working on the Reference manual output.  Internal links are broken,\nas are a bunch of other things.\nSee the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"},"tracking issue"))),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI05-0229-1"),"}"," ","{",(0,o.kt)("em",null,"AI12-0445-1"),"}"," [ A ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"./AA-4.6#S0162"},"type_conversion"))," (see 4.6) can be used to convert between two different representations of the same array or record. To convert an array from one representation to another, two array types with matching component subtypes and convertible index types are required. If one type has Pack specified and the other does not, then explicit conversion can be used to pack or unpack an array."),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI12-0425-1"),"}"," ","{",(0,o.kt)("em",null,"AI12-0445-1"),"}"," To convert an untagged record from one representation to another, two record types with a common ancestor type are required. Distinct representations can then be specified for the record types, and explicit conversion between the types can be used to effect a change in representation.] "),(0,o.kt)("p",null,(0,o.kt)("strong",null,"Ramification: "),"{",(0,o.kt)("em",null,"AI12-0425-1"),"}"," The language does not allow implicit copying of by-reference types, so it also does not allow different representations of related by-reference types. Similarly, language rules prevent related tagged types from having different representations of the parent part. Therefore, this technique cannot be used for tagged or by-reference types. "),(0,o.kt)("h4",{id:"examples"},"Examples"),(0,o.kt)("p",null,(0,o.kt)("em",null,"Example of change of representation:")," "),(0,o.kt)(a.Z,{mdxType:"CodeBlock"},"-- Packed_Descriptor and Descriptor are two different types","\n","-- with identical characteristics, apart from their","\n","-- representation","\n"),(0,o.kt)(a.Z,{mdxType:"CodeBlock"},"type Descriptor is","\n","    record","\n","      -- components of a descriptor","\n","    end record;","\n"),(0,o.kt)(a.Z,{mdxType:"CodeBlock"},"type Packed_Descriptor is new Descriptor;","\n"),(0,o.kt)(a.Z,{mdxType:"CodeBlock"},"for Packed_Descriptor use","\n","    record","\n","      -- component clauses for some or for all components","\n","    end record;","\n"),(0,o.kt)(a.Z,{mdxType:"CodeBlock"},"-- Change of representation can now be accomplished by explicit type conversions:","\n"),(0,o.kt)(a.Z,{mdxType:"CodeBlock"},"D : Descriptor;","\n","P : Packed_Descriptor;","\n"),(0,o.kt)(a.Z,{mdxType:"CodeBlock"},"P := Packed_Descriptor(D);  -- pack D","\n","D := Descriptor(P);         -- unpack P","\n"))}m.isMDXComponent=!0}}]);