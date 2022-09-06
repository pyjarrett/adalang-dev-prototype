"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[6385],{7995:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var a=n(9440),r=(n(6687),n(1716)),o=n(2526);const i={sidebar_position:141},s="B.4  Interfacing with COBOL",l={unversionedId:"arm/AA-B.4",id:"arm/AA-B.4",title:"B.4  Interfacing with COBOL",description:"We're still working on the Reference manual output.  Internal links are broken,",source:"@site/docs/arm/AA-B.4.mdx",sourceDirName:"arm",slug:"/arm/AA-B.4",permalink:"/docs/arm/AA-B.4",draft:!1,tags:[],version:"current",sidebarPosition:141,frontMatter:{sidebar_position:141},sidebar:"tutorialSidebar",previous:{title:"B.3  Interfacing with C and C++",permalink:"/docs/arm/AA-B.3"},next:{title:"B.5  Interfacing with Fortran",permalink:"/docs/arm/AA-B.5"}},d={},m=[{value:"Static Semantics",id:"static-semantics",level:4},{value:"Implementation Requirements",id:"implementation-requirements",level:4},{value:"Implementation Permissions",id:"implementation-permissions",level:4},{value:"Implementation Advice",id:"implementation-advice",level:4},{value:"Examples",id:"examples",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4}],c={toc:m};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"b4--interfacing-with-cobol"},"B.4  Interfacing with COBOL"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"We're still working on the Reference manual output.  Internal links are broken,\nas are a bunch of other things.\nSee the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"},"tracking issue"))),(0,r.kt)("p",null,"{",(0,r.kt)("em",null,"AI05-0229-1"),"}"," The facilities relevant to interfacing with the COBOL language are the package Interfaces.COBOL and support for specifying the Convention aspect with ",(0,r.kt)("em",null,"convention_"),(0,r.kt)("code",null,(0,r.kt)("a",{href:"./AA-2.3#S0002"},"identifier"))," COBOL."),(0,r.kt)("p",null,"The COBOL interface package supplies several sets of facilities: "),(0,r.kt)("p",null,'A set of types corresponding to the native COBOL types of the supported COBOL implementation (so-called "internal COBOL representations"), allowing Ada data to be passed as parameters to COBOL programs'),(0,r.kt)("p",null,"{",(0,r.kt)("em",null,"AI12-0439-1"),"}"," A set of types and constants reflecting external data representations such as can be found in files or databases, allowing COBOL-generated data to be read by an Ada program, and Ada-generated data to be read by COBOL programs"),(0,r.kt)("p",null,"A generic package for converting between an Ada decimal type value and either an internal or external COBOL representation "),(0,r.kt)("h4",{id:"static-semantics"},"Static Semantics"),(0,r.kt)("p",null,"The library package Interfaces.COBOL has the following declaration: "),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"{","AI12-0241-1","}"," ","{","AI12-0302-1","}"," package Interfaces.COBOL ","\n","   with Preelaborate, Nonblocking, Global =",">"," in out synchronized is","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"-- Types and operations for internal data representations","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"type Floating      is digits implementation-defined;","\n","   type Long_Floating is digits implementation-defined;","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"type Binary      is range implementation-defined;","\n","   type Long_Binary is range implementation-defined;","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"Max_Digits_Binary      : constant := implementation-defined;","\n","   Max_Digits_Long_Binary : constant := implementation-defined;","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"{","AI05-0229-1","}","    type Decimal_Element  is mod implementation-defined;","\n","   type Packed_Decimal is array (Positive range ","<",">",") of Decimal_Element","\n","      with Pack;","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"type COBOL_Character is implementation-defined character type;","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"Ada_To_COBOL : array (Character) of COBOL_Character := implementation-defined;","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"COBOL_To_Ada : array (COBOL_Character) of Character := implementation-defined;","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"{","AI05-0229-1","}","    type Alphanumeric is array (Positive range ","<",">",") of COBOL_Character","\n","      with Pack;","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"function To_COBOL (Item : in String) return Alphanumeric;","\n","   function To_Ada   (Item : in Alphanumeric) return String;","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"procedure To_COBOL (Item       : in String;","\n","                       Target     : out Alphanumeric;","\n","                       Last       : out Natural);","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"procedure To_Ada (Item     : in Alphanumeric;","\n","                     Target   : out String;","\n","                     Last     : out Natural);","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"{","AI05-0229-1","}","    type Numeric is array (Positive range ","<",">",") of COBOL_Character","\n","      with Pack;","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"-- Formats for COBOL data representations","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"type Display_Format is private;","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"Unsigned             : constant Display_Format;","\n","   Leading_Separate     : constant Display_Format;","\n","   Trailing_Separate    : constant Display_Format;","\n","   Leading_Nonseparate  : constant Display_Format;","\n","   Trailing_Nonseparate : constant Display_Format;","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"type Binary_Format is private;","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"High_Order_First  : constant Binary_Format;","\n","   Low_Order_First   : constant Binary_Format;","\n","   Native_Binary     : constant Binary_Format;","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"type Packed_Format is private;","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"Packed_Unsigned   : constant Packed_Format;","\n","   Packed_Signed     : constant Packed_Format;","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"-- Types for external representation of COBOL binary data","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"{","AI05-0229-1","}","    type Byte is mod 2**COBOL_Character'Size;","\n","   type Byte_Array is array (Positive range ","<",">",") of Byte","\n","      with Pack;","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"Conversion_Error : exception;","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"generic","\n","      type Num is delta ","<",">"," digits ","<",">",";","\n","   package Decimal_Conversions is","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"-- Display Formats: data values are represented as Numeric","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"function Valid (Item   : in Numeric;","\n","                      Format : in Display_Format) return Boolean;","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"function Length (Format : in Display_Format) return Natural;","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"function To_Decimal (Item   : in Numeric;","\n","                           Format : in Display_Format) return Num;","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"function To_Display (Item   : in Num;","\n","                           Format : in Display_Format) return Numeric;","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"-- Packed Formats: data values are represented as Packed_Decimal","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"function Valid (Item   : in Packed_Decimal;","\n","                      Format : in Packed_Format) return Boolean;","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"function Length (Format : in Packed_Format) return Natural;","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"function To_Decimal (Item   : in Packed_Decimal;","\n","                           Format : in Packed_Format) return Num;","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"function To_Packed (Item   : in Num;","\n","                          Format : in Packed_Format) return Packed_Decimal;","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"-- Binary Formats: external data values are represented as Byte_Array","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"function Valid (Item   : in Byte_Array;","\n","                      Format : in Binary_Format) return Boolean;","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"function Length (Format : in Binary_Format) return Natural;","\n","      function To_Decimal (Item   : in Byte_Array;","\n","                           Format : in Binary_Format) return Num;","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"function To_Binary (Item   : in Num;","\n","                        Format : in Binary_Format) return Byte_Array;","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"-- Internal Binary formats: data values are of type Binary or Long_Binary","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"function To_Decimal (Item : in Binary)      return Num;","\n","      function To_Decimal (Item : in Long_Binary) return Num;","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"function To_Binary      (Item : in Num)  return Binary;","\n","      function To_Long_Binary (Item : in Num)  return Long_Binary;","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"end Decimal_Conversions;","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"private","\n","   ... -- not specified by the language","\n","end Interfaces.COBOL;","\n"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"Implementation defined: "),"The types Floating, Long_Floating, Binary, Long_Binary, Decimal_Element, and COBOL_Character; and the initializations of the variables Ada_To_COBOL and COBOL_To_Ada, in Interfaces.COBOL."),(0,r.kt)("p",null,"Each of the types in Interfaces.COBOL is COBOL-compatible."),(0,r.kt)("p",null,"The types Floating and Long_Floating correspond to the native types in COBOL for data items with computational usage implemented by floating point. The types Binary and Long_Binary correspond to the native types in COBOL for data items with binary usage, or with computational usage implemented by binary."),(0,r.kt)("p",null,"Max_Digits_Binary is the largest number of decimal digits in a numeric value that is represented as Binary. Max_Digits_Long_Binary is the largest number of decimal digits in a numeric value that is represented as Long_Binary."),(0,r.kt)("p",null,"The type Packed_Decimal corresponds to COBOL's packed-decimal usage."),(0,r.kt)("p",null,"The type COBOL_Character defines the run-time character set used in the COBOL implementation. Ada_To_COBOL and COBOL_To_Ada are the mappings between the Ada and COBOL run-time character sets. "),(0,r.kt)("p",null,(0,r.kt)("strong",null,"Reason: "),"The character mappings are visible variables, since the user needs the ability to modify them at run time. "),(0,r.kt)("p",null,"Type Alphanumeric corresponds to COBOL's alphanumeric data category."),(0,r.kt)("p",null,"Each of the functions To_COBOL and To_Ada converts its parameter based on the mappings Ada_To_COBOL and COBOL_To_Ada, respectively. The length of the result for each is the length of the parameter, and the lower bound of the result is 1. Each component of the result is obtained by applying the relevant mapping to the corresponding component of the parameter."),(0,r.kt)("p",null,"Each of the procedures To_COBOL and To_Ada copies converted elements from Item to Target, using the appropriate mapping (Ada_To_COBOL or COBOL_To_Ada, respectively). The index in Target of the last element assigned is returned in Last (0 if Item is a null array). If Item'Length exceeds Target'Length, Constraint_Error is propagated."),(0,r.kt)("p",null,"Type Numeric corresponds to COBOL's numeric data category with display usage."),(0,r.kt)("p",null,"The types Display_Format, Binary_Format, and Packed_Format are used in conversions between Ada decimal type values and COBOL internal or external data representations. The value of the constant Native_Binary is either High_Order_First or Low_Order_First, depending on the implementation. "),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"function Valid (Item   : in Numeric;","\n","                Format : in Display_Format) return Boolean;","\n"),(0,r.kt)("p",null,"The function Valid checks that the Item parameter has a value consistent with the value of Format. If the value of Format is other than Unsigned, Leading_Separate, and Trailing_Separate, the effect is implementation defined. If Format does have one of these values, the following rules apply: "),(0,r.kt)("p",null,"{",(0,r.kt)("em",null,"8652/0066"),"}"," ","{",(0,r.kt)("em",null,"AI95-00071-01"),"}"," ","{",(0,r.kt)("em",null,"AI05-0264-1"),"}"," Format=Unsigned: if Item comprises one or more decimal digit characters, then Valid returns True, else it returns False."),(0,r.kt)("p",null,"{",(0,r.kt)("em",null,"8652/0066"),"}"," ","{",(0,r.kt)("em",null,"AI95-00071-01"),"}"," Format=Leading_Separate: if Item comprises a single occurrence of the plus or minus sign character, and then one or more decimal digit characters, then Valid returns True, else it returns False."),(0,r.kt)("p",null,"{",(0,r.kt)("em",null,"8652/0066"),"}"," ","{",(0,r.kt)("em",null,"AI95-00071-01"),"}"," Format=Trailing_Separate: if Item comprises one or more decimal digit characters and finally a plus or minus sign character, then Valid returns True, else it returns False. "),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"function Length (Format : in Display_Format) return Natural;","\n"),(0,r.kt)("p",null,"The Length function returns the minimal length of a Numeric value sufficient to hold any value of type Num when represented as Format."),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"function To_Decimal (Item   : in Numeric;","\n","                     Format : in Display_Format) return Num;","\n"),(0,r.kt)("p",null,"Produces a value of type Num corresponding to Item as represented by Format. The number of digits after the assumed radix point in Item is Num'Scale. Conversion_Error is propagated if the value represented by Item is outside the range of Num. "),(0,r.kt)("p",null,(0,r.kt)("strong",null,"Discussion: "),"There is no issue of truncation versus rounding, since the number of decimal places is established by Num'Scale."),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"function To_Display (Item   : in Num;","\n","                     Format : in Display_Format) return Numeric;","\n"),(0,r.kt)("p",null,"{",(0,r.kt)("em",null,"8652/0067"),"}"," ","{",(0,r.kt)("em",null,"AI95-00072-01"),"}"," This function returns the Numeric value for Item, represented in accordance with Format. The length of the returned value is Length(Format), and the lower bound is 1. Conversion_Error is propagated if Num is negative and Format is Unsigned."),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"function Valid (Item   : in Packed_Decimal;","\n","                Format : in Packed_Format) return Boolean;","\n"),(0,r.kt)("p",null,"This function returns True if Item has a value consistent with Format, and False otherwise. The rules for the formation of Packed_Decimal values are implementation defined."),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"function Length (Format : in Packed_Format) return Natural;","\n"),(0,r.kt)("p",null,"This function returns the minimal length of a Packed_Decimal value sufficient to hold any value of type Num when represented as Format."),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"function To_Decimal (Item   : in Packed_Decimal;","\n","                     Format : in Packed_Format) return Num;","\n"),(0,r.kt)("p",null,"Produces a value of type Num corresponding to Item as represented by Format. Num'Scale is the number of digits after the assumed radix point in Item. Conversion_Error is propagated if the value represented by Item is outside the range of Num."),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"function To_Packed (Item   : in Num;","\n","                    Format : in Packed_Format) return Packed_Decimal;","\n"),(0,r.kt)("p",null,"{",(0,r.kt)("em",null,"8652/0067"),"}"," ","{",(0,r.kt)("em",null,"AI95-00072-01"),"}"," This function returns the Packed_Decimal value for Item, represented in accordance with Format. The length of the returned value is Length(Format), and the lower bound is 1. Conversion_Error is propagated if Num is negative and Format is Packed_Unsigned."),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"function Valid (Item   : in Byte_Array;","\n","                Format : in Binary_Format) return Boolean;","\n"),(0,r.kt)("p",null,"This function returns True if Item has a value consistent with Format, and False otherwise. "),(0,r.kt)("p",null,(0,r.kt)("strong",null,"Ramification: "),"This function returns False only when the represented value is outside the range of Num."),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"function Length (Format : in Binary_Format) return Natural;","\n"),(0,r.kt)("p",null,"This function returns the minimal length of a Byte_Array value sufficient to hold any value of type Num when represented as Format."),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"function To_Decimal (Item   : in Byte_Array;","\n","                     Format : in Binary_Format) return Num;","\n"),(0,r.kt)("p",null,"Produces a value of type Num corresponding to Item as represented by Format. Num'Scale is the number of digits after the assumed radix point in Item. Conversion_Error is propagated if the value represented by Item is outside the range of Num."),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"function To_Binary (Item   : in Num;","\n","                    Format : in Binary_Format) return Byte_Array;","\n"),(0,r.kt)("p",null,"{",(0,r.kt)("em",null,"8652/0067"),"}"," ","{",(0,r.kt)("em",null,"AI95-00072-01"),"}"," This function returns the Byte_Array value for Item, represented in accordance with Format. The length of the returned value is Length(Format), and the lower bound is 1."),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"function To_Decimal (Item : in Binary)      return Num;","\n","\n","function To_Decimal (Item : in Long_Binary) return Num;","\n"),(0,r.kt)("p",null,"These functions convert from COBOL binary format to a corresponding value of the decimal type Num. Conversion_Error is propagated if Item is too large for Num. "),(0,r.kt)("p",null,(0,r.kt)("strong",null,"Ramification: "),'There is no rescaling performed on the conversion. That is, the returned value in each case is a "bit copy" if Num has a binary radix. The programmer is responsible for maintaining the correct scale. '),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"function To_Binary      (Item : in Num)  return Binary;","\n","\n","function To_Long_Binary (Item : in Num)  return Long_Binary;","\n"),(0,r.kt)("p",null,"These functions convert from Ada decimal to COBOL binary format. Conversion_Error is propagated if the value of Item is too large to be represented in the result type. "),(0,r.kt)("p",null,(0,r.kt)("strong",null,"Discussion: "),"One style of interface supported for COBOL, similar to what is provided for C, is the ability to call and pass parameters to an existing COBOL program. Thus the interface package supplies types that can be used in an Ada program as parameters to subprograms whose bodies will be in COBOL. These types map to COBOL's alphanumeric and numeric data categories."),(0,r.kt)("p",null,"Several types are provided for support of alphanumeric data. Since COBOL's run-time character set is not necessarily the same as Ada's, Interfaces.COBOL declares an implementation-defined character type COBOL_Character, and mappings between Character and COBOL_Character. These mappings are visible variables (rather than, say, functions or constant arrays), since in the situation where COBOL_Character is EBCDIC, the flexibility of dynamically modifying the mappings is needed. Corresponding to COBOL's alphanumeric data is the string type Alphanumeric."),(0,r.kt)("p",null,'Numeric data may have either a "display" or "computational" representation in COBOL. On the Ada side, the data is of a decimal fixed point type. Passing an Ada decimal data item to a COBOL program requires conversion from the Ada decimal type to some type that reflects the representation expected on the COBOL side. '),(0,r.kt)("p",null,"Computational Representation"),(0,r.kt)("p",null,"Floating point representation is modeled by Ada floating point types, Floating and Long_Floating. Conversion between these types and Ada decimal types is obtained directly, since the type name serves as a conversion function."),(0,r.kt)("p",null,"Binary representation is modeled by an Ada integer type, Binary, and possibly other types such as Long_Binary. Conversion between, say, Binary and a decimal type is through functions from an instantiation of the generic package Decimal_Conversions."),(0,r.kt)("p",null,"Packed decimal representation is modeled by the Ada array type Packed_Decimal. Conversion between packed decimal and a decimal type is through functions from an instantiation of the generic package Decimal_Conversions."),(0,r.kt)("p",null,"Display Representation"),(0,r.kt)("p",null,"Display representation for numeric data is modeled by the array type Numeric. Conversion between display representation and a decimal type is through functions from an instantiation of the generic package Decimal_Conversions. A parameter to the conversion function indicates the desired interpretation of the data (e.g., signed leading separate, etc.) "),(0,r.kt)("p",null,"{",(0,r.kt)("em",null,"AI05-0229-1"),"}"," The Convention of a record type may be specified as COBOL to direct the compiler to choose a COBOL-compatible representation for objects of the type."),(0,r.kt)("p",null,"The package Interfaces.COBOL allows the Ada programmer to deal with data from files (or databases) created by a COBOL program. For data that is alphanumeric, or in display or packed decimal format, the approach is the same as for passing parameters (instantiate Decimal_Conversions to obtain the needed conversion functions). For binary data, the external representation is treated as a Byte array, and an instantiation of Decimal_IO produces a package that declares the needed conversion functions. A parameter to the conversion function indicates the desired interpretation of the data (e.g., high- versus low-order byte first). "),(0,r.kt)("h4",{id:"implementation-requirements"},"Implementation Requirements"),(0,r.kt)("p",null,"{",(0,r.kt)("em",null,"AI05-0229-1"),"}"," An implementation shall support specifying aspect Convention with a COBOL ",(0,r.kt)("em",null,"convention"),"_",(0,r.kt)("code",null,(0,r.kt)("a",{href:"./AA-2.3#S0002"},"identifier"))," for a COBOL-eligible type (see B.1). "),(0,r.kt)("p",null,(0,r.kt)("strong",null,"Ramification: "),'An implementation supporting this package shall ensure that if the bounds of a Packed_Decimal, Alphanumeric, or Numeric variable are static, then the representation of the object comprises solely the array components (that is, there is no implicit run-time "descriptor" that is part of the object). '),(0,r.kt)("h4",{id:"implementation-permissions"},"Implementation Permissions"),(0,r.kt)("p",null,"An implementation may provide additional constants of the private types Display_Format, Binary_Format, or Packed_Format. "),(0,r.kt)("p",null,(0,r.kt)("strong",null,"Reason: "),"This is to allow exploitation of other external formats that may be available in the COBOL implementation."),(0,r.kt)("p",null,"An implementation may provide further floating point and integer types in Interfaces.COBOL to match additional native COBOL types, and may also supply corresponding conversion functions in the generic package Decimal_Conversions. "),(0,r.kt)("h4",{id:"implementation-advice"},"Implementation Advice"),(0,r.kt)("p",null,"An Ada implementation should support the following interface correspondences between Ada and COBOL. "),(0,r.kt)("p",null,"An Ada ",(0,r.kt)("strong",null,"access"),' T parameter is passed as a "BY REFERENCE" data item of the COBOL type corresponding to T.'),(0,r.kt)("p",null,"An Ada ",(0,r.kt)("strong",null,"in"),' scalar parameter is passed as a "BY CONTENT" data item of the corresponding COBOL type.'),(0,r.kt)("p",null,'Any other Ada parameter is passed as a "BY REFERENCE" data item of the COBOL type corresponding to the Ada parameter type; for scalars, a local copy is used if necessary to ensure by-copy semantics. '),(0,r.kt)("p",null,(0,r.kt)("strong",null,"Implementation Advice: "),"If COBOL interfacing is supported, the interface correspondences between Ada and COBOL should be supported."),(0,r.kt)("p",null,"NOTE 1   ","{",(0,r.kt)("em",null,"AI05-0229-1"),"}"," An implementation is not required to support specifying aspect Convention for access types, nor is it required to support specifying aspects Import, Export, or Convention for functions. "),(0,r.kt)("p",null,(0,r.kt)("strong",null,"Reason: "),"COBOL does not have a pointer facility, and a COBOL program does not return a value. "),(0,r.kt)("p",null,"NOTE 2   ","{",(0,r.kt)("em",null,"AI12-0440-1"),"}",' If an Ada subprogram is exported to COBOL, then a call from COBOL call can specify either "BY CONTENT" or "BY REFERENCE". '),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("p",null,(0,r.kt)("em",null,"Examples of Interfaces.COBOL:")," "),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"with Interfaces.COBOL;","\n","procedure Test_Call is","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"-- Calling a foreign COBOL program","\n","   -- Assume that a COBOL program PROG has the following declaration","\n","   --  in its LINKAGE section:","\n","   --  01 Parameter-Area","\n","   --     05 NAME   PIC X(20).","\n","   --     05 SSN    PIC X(9).","\n","   --     05 SALARY PIC 99999V99 USAGE COMP.","\n","   -- The effect of PROG is to update SALARY based on some algorithm","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"package COBOL renames Interfaces.COBOL;","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"type Salary_Type is delta 0.01 digits 7;","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"{","AI05-0229-1","}","    type COBOL_Record is","\n","      record","\n","         Name   : COBOL.Numeric(1..20);","\n","         SSN    : COBOL.Numeric(1..9);","\n","         Salary : COBOL.Binary;  -- Assume Binary = 32 bits","\n","      end record","\n","      with Convention =",">"," COBOL;","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"{","AI05-0229-1","}","    procedure Prog (Item : in out COBOL_Record)","\n","      with Import =",">"," True, Convention =",">"," COBOL;","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"package Salary_Conversions is","\n","      new COBOL.Decimal_Conversions(Salary_Type);","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"Some_Salary : Salary_Type := 12_345.67;","\n","   Some_Record : COBOL_Record :=","\n","      (Name   =",">",' "Johnson, John       ",',"\n","       SSN    =",">",' "111223333",',"\n","       Salary =",">"," Salary_Conversions.To_Binary(Some_Salary));","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"begin","\n","   Prog (Some_Record);","\n","   ...","\n","end Test_Call;","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"with Interfaces.COBOL;","\n","with COBOL_Sequential_IO; -- Assumed to be supplied by implementation","\n","procedure Test_External_Formats is","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"{","AI12-0442-1","}","    -- Using data created by a COBOL program","\n","   -- Assume that a COBOL program has created a sequential file with","\n","   --  the following record structure, and that we want","\n","   --  process the records in an Ada program","\n","   --  01 EMPLOYEE-RECORD","\n","   --     05 NAME    PIC X(20).","\n","   --     05 SSN     PIC X(9).","\n","   --     05 SALARY  PIC 99999V99 USAGE COMP.","\n","   --     05 ADJUST  PIC S999V999 SIGN LEADING SEPARATE.","\n","   -- The COMP data is binary (32 bits), high-order byte first","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"package COBOL renames Interfaces.COBOL;","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"type Salary_Type      is delta 0.01  digits 7;","\n","   type Adjustments_Type is delta 0.001 digits 6;","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"{","AI05-0229-1","}","    type COBOL_Employee_Record_Type is  -- External representation","\n","      record","\n","         Name    : COBOL.Alphanumeric(1..20);","\n","         SSN     : COBOL.Alphanumeric(1..9);","\n","         Salary  : COBOL.Byte_Array(1..4);","\n","         Adjust  : COBOL.Numeric(1..7);  -- Sign and 6 digits","\n","      end record","\n","      with Convention =",">"," COBOL;","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"package COBOL_Employee_IO is","\n","      new COBOL_Sequential_IO(COBOL_Employee_Record_Type);","\n","   use COBOL_Employee_IO;","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"COBOL_File : File_Type;","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"type Ada_Employee_Record_Type is  -- Internal representation","\n","      record","\n","         Name    : String(1..20);","\n","         SSN     : String(1..9);","\n","         Salary  : Salary_Type;","\n","         Adjust  : Adjustments_Type;","\n","      end record;","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"COBOL_Record : COBOL_Employee_Record_Type;","\n","   Ada_Record   : Ada_Employee_Record_Type;","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"package Salary_Conversions is","\n","      new COBOL.Decimal_Conversions(Salary_Type);","\n","   use Salary_Conversions;","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"package Adjustments_Conversions is","\n","      new COBOL.Decimal_Conversions(Adjustments_Type);","\n","   use Adjustments_Conversions;","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"begin","\n","   Open (COBOL_File, Name =",">",' "Some_File");',"\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"loop","\n","     Read (COBOL_File, COBOL_Record);","\n"),(0,r.kt)(o.Z,{mdxType:"CodeBlock"},"{","AI12-0178-1","}","      Ada_Record.Name := COBOL.To_Ada(COBOL_Record.Name);","\n","     Ada_Record.SSN  := COBOL.To_Ada(COBOL_Record.SSN);","\n","     Ada_Record.Salary :=","\n","        To_Decimal(COBOL_Record.Salary, COBOL.High_Order_First);","\n","     Ada_Record.Adjust :=","\n","        To_Decimal(COBOL_Record.Adjust, COBOL.Leading_Separate);","\n","     ... -- Process Ada_Record","\n","   end loop;","\n","exception","\n","   when End_Error =",">"," ...","\n","end Test_External_Formats;","\n"),(0,r.kt)("h4",{id:"wording-changes-from-ada-95"},"Wording Changes from Ada 95"),(0,r.kt)("p",null,"{",(0,r.kt)("em",null,"8652/0066"),"}"," ","{",(0,r.kt)("em",null,"AI95-00071-01"),"}"," ",(0,r.kt)("strong",null,"Corrigendum:")," Corrected the definition of Valid to match COBOL."),(0,r.kt)("p",null,"{",(0,r.kt)("em",null,"8652/0067"),"}"," ","{",(0,r.kt)("em",null,"AI95-00072-01"),"}"," ",(0,r.kt)("strong",null,"Corrigendum:")," Specified the bounds of the results of To_Display, To_Packed, and To_Binary. "))}p.isMDXComponent=!0}}]);