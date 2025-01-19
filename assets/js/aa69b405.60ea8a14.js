"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[3261],{9549:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>m,default:()=>g,frontMatter:()=>c,metadata:()=>t,toc:()=>p});const t=JSON.parse('{"id":"arm/AA-B/AA-B.2","title":"B.2. The Package Interfaces","description":"This Reference Manual output has not been verified,","source":"@site/docs/arm/AA-B/AA-B.2.mdx","sourceDirName":"arm/AA-B","slug":"/arm/AA-B/AA-B.2","permalink":"/docs/arm/AA-B/AA-B.2","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":142,"frontMatter":{"sidebar_position":142},"sidebar":"referenceManualSidebar","previous":{"title":"B.1. Interfacing Aspects","permalink":"/docs/arm/AA-B/AA-B.1"},"next":{"title":"B.3. Interfacing with C and C++","permalink":"/docs/arm/AA-B/AA-B.3"}}');var a=i(4848),s=i(8453),r=i(3204),o=i(4220),d=i(8069),l=i(8011),h=i(6465);const c={sidebar_position:142},m="B.2. The Package Interfaces",u={},p=[{value:"Static Semantics",id:"static-semantics",level:4},{value:"Implementation Requirements",id:"implementation-requirements",level:4},{value:"Implementation Permissions",id:"implementation-permissions",level:4},{value:"Implementation Advice",id:"implementation-advice",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4},{value:"Wording Changes from Ada 2005",id:"wording-changes-from-ada-2005",level:4}];function f(e){const n={a:"a",admonition:"admonition",h1:"h1",h4:"h4",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"b2-the-package-interfaces",children:"B.2. The Package Interfaces"})}),"\n",(0,a.jsx)(n.admonition,{type:"danger",children:(0,a.jsxs)(n.p,{children:["This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,a.jsx)(n.a,{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20",children:"tracking issue"})]})}),"\n","\n",(0,a.jsx)(l.A,{children:"1"}),"\n",(0,a.jsxs)("p",{children:["Package Interfaces is the parent of several library packages that declare types and other entities useful for interfacing to foreign languages. It also contains some implementation-defined types that are useful across more than one language (in particular for interfacing to assembly language). ",(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(o.A,{children:[(0,a.jsx)(l.A,{children:"1.a"}),(0,a.jsx)(r.A,{type:"aarm",aarm:"implementation-defined",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)("b",{}),"The contents of the visible part of package Interfaces and its language-defined descendants.",(0,a.jsx)("br",{})]})})]}),"\n",(0,a.jsx)(n.h4,{id:"static-semantics",children:"Static Semantics"}),"\n",(0,a.jsx)(l.A,{children:"2"}),"\n",(0,a.jsxs)("p",{children:["The library package Interfaces has the following skeletal declaration: ",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)(l.A,{children:"3/5"}),"\n",(0,a.jsx)(h.A,{items:["AI12-0414-1"]}),"\n",(0,a.jsx)(d.A,{language:"ada",children:(0,a.jsxs)(n.p,{children:["package Interfaces","\n","   with Pure is","\n","\n",(0,a.jsx)(l.A,{children:"4"}),"\ntype Integer","_","n is range -2","*","*","(n-1) .. 2","*","*","(n-1) - 1;  --2's complement","\n","\n",(0,a.jsx)(l.A,{children:"5"}),"\ntype Unsigned","_","n is mod 2","*","*","n;","\n","\n",(0,a.jsx)(l.A,{children:"6"}),"\nfunction Shift","_","Left  (Value : Unsigned","_","n; Amount : Natural)","\n","      return Unsigned","_","n;","\n","   function Shift","_","Right (Value : Unsigned","_","n; Amount : Natural)","\n","      return Unsigned","_","n;","\n","   function Shift","_","Right","_","Arithmetic (Value : Unsigned","_","n; Amount : Natural)","\n","      return Unsigned","_","n;","\n","   function Rotate","_","Left  (Value : Unsigned","_","n; Amount : Natural)","\n","      return Unsigned","_","n;","\n","   function Rotate","_","Right (Value : Unsigned","_","n; Amount : Natural)","\n","      return Unsigned","_","n;","\n","   ...","\n","end Interfaces;","\n"]})}),"\n",(0,a.jsx)(n.h4,{id:"implementation-requirements",children:"Implementation Requirements"}),"\n",(0,a.jsx)(l.A,{children:"7"}),"\n",(0,a.jsxs)("p",{children:["An implementation shall provide the following declarations in the visible part of package Interfaces: ",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)(l.A,{children:"8"}),"\n",(0,a.jsx)("ul",{children:(0,a.jsxs)("li",{children:["Signed and modular integer types of ",(0,a.jsx)("i",{children:"n"})," bits, if supported by the target architecture, for each ",(0,a.jsx)("i",{children:"n"})," that is at least the size of a storage element and that is a factor of the word size. The names of these types are of the form Integer","_",(0,a.jsx)("i",{children:"n"})," for the signed types, and Unsigned","_",(0,a.jsx)("i",{children:"n"})," for the modular types; ",(0,a.jsx)("br",{})]})}),"\n",(0,a.jsxs)(o.A,{children:[(0,a.jsx)(l.A,{children:"8.a"}),(0,a.jsx)(r.A,{type:"aarm",aarm:"ramification",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)("b",{}),"For example, for a typical 32-bit machine the corresponding types might be Integer","_","8, Unsigned","_","8, Integer","_","16, Unsigned","_","16, Integer","_","32, and Unsigned","_","32.",(0,a.jsx)("br",{})]})})]}),"\n",(0,a.jsxs)(o.A,{children:[(0,a.jsx)(l.A,{children:"8.b"}),(0,a.jsx)(r.A,{type:"aarm",aarm:"note",children:(0,a.jsxs)(n.p,{children:["The wording above implies, for example, that Integer","_","16'Size = Unsigned","_","16'Size = 16. Unchecked conversions between same-Sized types will work as expected. ",(0,a.jsx)("br",{})]})})]}),"\n",(0,a.jsx)(l.A,{children:"9"}),"\n",(0,a.jsx)("ul",{children:(0,a.jsxs)("li",{children:["For each such modular type in Interfaces, shifting and rotating subprograms as specified in the declaration of Interfaces above. These subprograms are Intrinsic. They operate on a bit-by-bit basis, using the binary representation of the value of the operands to yield a binary representation for the result. The Amount parameter gives the number of bits by which to shift or rotate. For shifting, zero bits are shifted in, except in the case of Shift","_","Right","_","Arithmetic, where one bits are shifted in if Value is at least half the modulus. ",(0,a.jsx)("br",{})]})}),"\n",(0,a.jsxs)(o.A,{children:[(0,a.jsx)(l.A,{children:"9.a"}),(0,a.jsx)(r.A,{type:"aarm",aarm:"reason",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)("b",{}),'We considered making shifting and rotating be primitive operations of all modular types. However, it is a design principle of Ada that all predefined operations should be operators (not functions named by identifiers). (Note that an early version of Ada had "',(0,a.jsx)("b",{children:"abs"}),'" as an identifier, but it was changed to a reserved word operator before standardization of Ada 83.) This is important because the implicit declarations would hide nonoverloadable declarations with the same name, whereas operators are always overloadable. Therefore, we would have had to make shift and rotate into reserved words, which would have been upward incompatible, or else invent new operator symbols, which seemed like too much mechanism. ',(0,a.jsx)("br",{})]})})]}),"\n",(0,a.jsxs)(o.A,{children:[(0,a.jsx)(l.A,{children:"9.b/5"}),(0,a.jsx)(h.A,{items:["AI12-0264-1"]}),(0,a.jsx)(r.A,{type:"aarm",aarm:"note",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)("b",{children:"To be honest: "}),"\u201cShifting\u201d and \u201crotating\u201d have the conventional meaning. Neither of these terms is usefully defined by the usual normative references of the Reference Manual, so we provide pseudo-code here to describe the intended semantics of the above wording (all operations in these examples are using modular semantics).",(0,a.jsx)("br",{})]})})]}),"\n",(0,a.jsxs)(o.A,{children:[(0,a.jsx)(l.A,{children:"9.c/5"}),(0,a.jsx)(d.A,{language:"ada",children:(0,a.jsxs)(n.p,{children:["function Rotate","_","Left (Value : Unsigned","_","n; Amount : Natural)","\n","   return Unsigned","_","n is","\n","   Result : Unsigned","_","n := Value;","\n","   Bit : Unsigned","_","n range 0 .. 1;","\n","begin","\n","   for Count in 1 .. Amount loop","\n","      Bit := Result/2","*","*","(n-1); -- High-bit of Result","\n","      Result := Result","*","2 + Bit;","\n","   end loop;","\n","   return Result;","\n","end Rotate","_","Left;","\n","\n",(0,a.jsx)(l.A,{children:"9.d/5"}),"\nfunction Rotate","_","Right (Value : Unsigned","_","n; Amount : Natural)","\n","   return Unsigned","_","n is","\n","   Result : Unsigned","_","n := Value;","\n","   Bit : Unsigned","_","n range 0 .. 1;","\n","begin","\n","   for Count in 1 .. Amount loop","\n","      Bit := Result mod 2; -- Low-bit of Result","\n","      Result := Result/2 + (Bit ","*"," 2","*","*","(n-1));","\n","   end loop;","\n","   return Result;","\n","end Rotate","_","Right;","\n","\n",(0,a.jsx)(l.A,{children:"9.e/5"}),"\nfunction Shift","_","Left (Value : Unsigned","_","n; Amount : Natural)","\n","   return Unsigned","_","n is","\n","   Result : Unsigned","_","n := Value;","\n","begin","\n","   for Count in 1 .. Amount loop","\n","      Result := Result ","*"," 2;","\n","   end loop;","\n","   return Result;","\n","end Shift","_","Left;","\n","\n",(0,a.jsx)(l.A,{children:"9.f/5"}),"\nfunction Shift","_","Right (Value : Unsigned","_","n; Amount : Natural)","\n","   return Unsigned","_","n is","\n","   Result : Unsigned","_","n := Value;","\n","begin","\n","   for Count in 1 .. Amount loop","\n","      Result := Result / 2;","\n","   end loop;","\n","   return Result;","\n","end Shift","_","Right;","\n","\n",(0,a.jsx)(l.A,{children:"9.g/5"}),"\nfunction Shift","_","Right","_","Arithmetic (Value : Unsigned","_","n; Amount : Natural)","\n","   return Unsigned","_","n is","\n","   Result : Unsigned","_","n := Value;","\n","   Neg : constant Boolean :=","\n","      Result/2","*","*","(n-1) = 1; -- High-bit of Result","\n","begin","\n","   for Count in 1 .. Amount loop","\n","      if Neg then","\n","         Result := Result / 2 + 2","*","*","(n-1);","\n","      else","\n","         Result := Result / 2;","\n","      end if;","\n","   end loop;","\n","   return Result;","\n","end Shift","_","Right","_","Arithmetic;","\n"]})})]}),"\n",(0,a.jsxs)(o.A,{children:[(0,a.jsx)(l.A,{children:"9.h/5"}),(0,a.jsx)(h.A,{items:["AI12-0264-1"]}),(0,a.jsx)(r.A,{type:"aarm",aarm:"note",children:(0,a.jsxs)(n.p,{children:["These generally correspond to machine instructions, although there may not be an exact match in terms of boundary conditions, as Ada requires the correct result to be produced for all values of Amount. ",(0,a.jsx)("br",{})]})})]}),"\n",(0,a.jsx)(l.A,{children:"10"}),"\n",(0,a.jsx)("ul",{children:(0,a.jsxs)("li",{children:["Floating point types corresponding to each floating point format fully supported by the hardware. ",(0,a.jsx)("br",{})]})}),"\n",(0,a.jsxs)(o.A,{children:[(0,a.jsx)(l.A,{children:"10.a"}),(0,a.jsx)(r.A,{type:"aarm",aarm:"implementation-note",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)("b",{}),"The names for these floating point types are not specified. However, if IEEE arithmetic is supported, then the names should be IEEE","_","Float","_","32 and IEEE","_","Float","_","64 for single and double precision, respectively.",(0,a.jsx)("br",{})]})})]}),"\n",(0,a.jsx)(n.h4,{id:"implementation-permissions",children:"Implementation Permissions"}),"\n",(0,a.jsx)(l.A,{children:"11"}),"\n",(0,a.jsxs)("p",{children:["An implementation may provide implementation-defined library units that are children of Interfaces, and may add declarations to the visible part of Interfaces in addition to the ones defined above. ",(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(o.A,{children:[(0,a.jsx)(l.A,{children:"11.a/2"}),(0,a.jsx)(r.A,{type:"aarm",aarm:"implementation-defined",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)("b",{}),"Implementation-defined children of package Interfaces.",(0,a.jsx)("br",{})]})})]}),"\n",(0,a.jsx)(l.A,{children:"11.1/3"}),"\n",(0,a.jsx)(h.A,{items:["AI95-00204-01","AI05-0229-1"]}),"\n",(0,a.jsxs)("p",{children:["A child package of package Interfaces with the name of a convention may be provided independently of whether the convention is supported by the Convention aspect and vice versa. Such a child package should contain any declarations that would be useful for interfacing to the language (implementation) represented by the convention. Any declarations useful for interfacing to any language on the given hardware architecture should be provided directly in Interfaces. ",(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(o.A,{children:[(0,a.jsx)(l.A,{children:"11.b/2"}),(0,a.jsx)(r.A,{type:"aarm",aarm:"ramification",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)("b",{}),"For example, package Interfaces.XYZ","_","Pascal might contain declarations of types that match the data types provided by the XYZ implementation of Pascal, so that it will be more convenient to pass parameters to a subprogram whose convention is XYZ","_","Pascal. ",(0,a.jsx)("br",{})]})})]}),"\n",(0,a.jsx)(n.h4,{id:"implementation-advice",children:"Implementation Advice"}),"\n",(0,a.jsx)(l.A,{children:"12/2"}),"\n",(0,a.jsx)(h.A,{items:["AI95-00204-01"]}),"\n",(0,a.jsxs)("p",{children:[(0,a.jsx)("i",{children:"This paragraph was deleted."}),(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(o.A,{children:[(0,a.jsx)(l.A,{children:"12.a/2"}),(0,a.jsxs)(r.A,{type:"aarm",aarm:"note",children:[(0,a.jsx)("i",{children:"This paragraph was deleted."}),(0,a.jsx)("br",{})]})]}),"\n",(0,a.jsx)(l.A,{children:"13/3"}),"\n",(0,a.jsx)(h.A,{items:["AI05-0299-1"]}),"\n",(0,a.jsxs)("p",{children:["An implementation supporting an interface to C, COBOL, or Fortran should provide the corresponding package or packages described in the following subclauses. ",(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(o.A,{children:[(0,a.jsx)(l.A,{children:"13.a.1/2"}),(0,a.jsx)(r.A,{type:"aarm",aarm:"implementation-advice",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)("b",{}),"If an interface to C, COBOL, or Fortran is provided, the corresponding package or packages described in ",(0,a.jsx)("a",{href:"/docs/arm/AA-B/",children:"Annex B"}),", \u201c",(0,a.jsx)("a",{href:"/docs/arm/AA-B/",children:"Interface to Other Languages"}),"\u201d should also be provided.",(0,a.jsx)("br",{})]})})]}),"\n",(0,a.jsxs)(o.A,{children:[(0,a.jsx)(l.A,{children:"13.a"}),(0,a.jsx)(r.A,{type:"aarm",aarm:"implementation-note",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)("b",{}),"The intention is that an implementation might support several implementations of the foreign language: Interfaces.This","_","Fortran and Interfaces.That","_","Fortran might both exist. The \u201cdefault\u201d implementation, overridable by the user, should be declared as a renaming: ",(0,a.jsx)("br",{})]})})]}),"\n",(0,a.jsxs)(o.A,{children:[(0,a.jsx)(l.A,{children:"13.b"}),(0,a.jsx)(d.A,{language:"ada",children:(0,a.jsxs)(n.p,{children:["package Interfaces.Fortran renames Interfaces.This","_","Fortran;","\n"]})})]}),"\n",(0,a.jsx)(o.A,{children:(0,a.jsx)(n.h4,{id:"wording-changes-from-ada-95",children:"Wording Changes from Ada 95"})}),"\n",(0,a.jsxs)(o.A,{children:[(0,a.jsx)(l.A,{children:"13.c/2"}),(0,a.jsx)(h.A,{items:["AI95-00204-01"]}),(0,a.jsx)(r.A,{type:"aarm",aarm:"note",children:(0,a.jsxs)(n.p,{children:["Clarified that interfacing to foreign languages is optional and has the same restrictions as a Specialized Needs Annex. ",(0,a.jsx)("br",{})]})})]}),"\n",(0,a.jsx)(o.A,{children:(0,a.jsx)(n.h4,{id:"wording-changes-from-ada-2005",children:"Wording Changes from Ada 2005"})}),"\n",(0,a.jsxs)(o.A,{children:[(0,a.jsx)(l.A,{children:"13.d/3"}),(0,a.jsx)(h.A,{items:["AI05-0262-1"]}),(0,a.jsx)(r.A,{type:"aarm",aarm:"note",children:(0,a.jsxs)(n.p,{children:["Move the restrictions on implementations of optional features to the start of this Annex. ",(0,a.jsx)("br",{})]})})]})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}}}]);