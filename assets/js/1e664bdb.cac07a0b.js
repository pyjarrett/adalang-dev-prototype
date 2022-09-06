"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[4442],{4358:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(9440),o=(n(6687),n(1716)),r=n(2526);const i={sidebar_position:126},s="A.9  The Generic Package Storage_IO",l={unversionedId:"arm/AA-A.9",id:"arm/AA-A.9",title:"A.9  The Generic Package Storage_IO",description:"We're still working on the Reference manual output.  Internal links are broken,",source:"@site/docs/arm/AA-A.9.mdx",sourceDirName:"arm",slug:"/arm/AA-A.9",permalink:"/docs/arm/AA-A.9",draft:!1,tags:[],version:"current",sidebarPosition:126,frontMatter:{sidebar_position:126},sidebar:"tutorialSidebar",previous:{title:"A.8  Sequential and Direct Files",permalink:"/docs/arm/AA-A.8"},next:{title:"A.10  Text Input-Output",permalink:"/docs/arm/AA-A.10"}},p={},u=[{value:"Static Semantics",id:"static-semantics",level:4},{value:"Extensions to Ada 83",id:"extensions-to-ada-83",level:4}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"a9--the-generic-package-storage_io"},"A.9  The Generic Package Storage_IO"),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"We're still working on the Reference manual output.  Internal links are broken,\nas are a bunch of other things.\nSee the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"},"tracking issue"))),(0,o.kt)("p",null,"The generic package Storage_IO provides for reading from and writing to an in-memory buffer. This generic package supports the construction of user-defined input-output packages. "),(0,o.kt)("p",null,(0,o.kt)("strong",null,"Reason: "),'This package exists to allow the portable construction of user-defined direct-access-oriented input-output packages. The Write procedure writes a value of type Element_Type into a Storage_Array of size Buffer_Size, flattening out any implicit levels of indirection used in the representation of the type. The Read procedure reads a value of type Element_Type from the buffer, reconstructing any implicit levels of indirection used in the representation of the type. It also properly initializes any type tags that appear within the value, presuming that the buffer was written by a different program and that tag values for the"same" type might vary from one executable to another. '),(0,o.kt)("h4",{id:"static-semantics"},"Static Semantics"),(0,o.kt)("p",null,"The generic library package Storage_IO has the following declaration: "),(0,o.kt)(r.Z,{mdxType:"CodeBlock"},"{","AI12-0302-1","}"," with Ada.IO_Exceptions;","\n","with System.Storage_Elements;","\n","generic","\n","   type Element_Type is private;","\n","package Ada.Storage_IO","\n","   with Preelaborate, Global =",">"," in out synchronized is","\n"),(0,o.kt)(r.Z,{mdxType:"CodeBlock"},"Buffer_Size : constant System.Storage_Elements.Storage_Count :=","\n","      implementation-defined;","\n","   subtype Buffer_Type is","\n","      System.Storage_Elements.Storage_Array(1..Buffer_Size);","\n"),(0,o.kt)(r.Z,{mdxType:"CodeBlock"},"-- Input and output operations","\n"),(0,o.kt)(r.Z,{mdxType:"CodeBlock"},"procedure Read (Buffer : in  Buffer_Type; Item : out Element_Type);","\n"),(0,o.kt)(r.Z,{mdxType:"CodeBlock"},"procedure Write(Buffer : out Buffer_Type; Item : in  Element_Type);","\n"),(0,o.kt)(r.Z,{mdxType:"CodeBlock"},"-- Exceptions","\n"),(0,o.kt)(r.Z,{mdxType:"CodeBlock"},"Data_Error   : exception renames IO_Exceptions.Data_Error;","\n","end Ada.Storage_IO;","\n"),(0,o.kt)("p",null,"In each instance, the constant Buffer_Size has a value that is the size (in storage elements) of the buffer required to represent the content of an object of subtype Element_Type, including any implicit levels of indirection used by the implementation. The Read and Write procedures of Storage_IO correspond to the Read and Write procedures of Direct_IO (see A.8.4), but with the content of the Item parameter being read from or written into the specified Buffer, rather than an external file."),(0,o.kt)("p",null,(0,o.kt)("strong",null,"Reason: "),"As with Direct_IO, the Element_Type formal of Storage_IO does not have an ",(0,o.kt)("code",null,(0,o.kt)("a",{href:"./AA-3.7#S0060"},"unknown_discriminant_part"))," so that there is a well-defined upper bound on the size of the buffer needed to hold the content of an object of the formal subtype (i.e. Buffer_Size). If there are no implicit levels of indirection, Buffer_Size will typically equal: "),(0,o.kt)(r.Z,{mdxType:"CodeBlock"},"(Element_Type'Size + System.Storage_Unit - 1) / System.Storage_Unit","\n"),(0,o.kt)("p",null,(0,o.kt)("strong",null,"Implementation defined: "),"The value of Buffer_Size in Storage_IO."),(0,o.kt)("p",null,"NOTE 1   A buffer used for Storage_IO holds only one element at a time; an external file used for Direct_IO holds a sequence of elements. "),(0,o.kt)("h4",{id:"extensions-to-ada-83"},"Extensions to Ada 83"),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI05-0005-1"),"}"," Storage_IO is new in Ada 95. "))}c.isMDXComponent=!0}}]);