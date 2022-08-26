"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[621],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(t),g=r,m=c["".concat(l,".").concat(g)]||c[g]||p[g]||o;return t?a.createElement(m,i(i({ref:n},u),{},{components:t})):a.createElement(m,i({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1287:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=t(7462),r=(t(7294),t(3905));const o={sidebar_position:1},i="Being More Terse",s={unversionedId:"tips/being-more-terse",id:"tips/being-more-terse",title:"Being More Terse",description:"Ada is known for being more verbose than other languages because it prefers",source:"@site/docs/tips/being-more-terse.md",sourceDirName:"tips",slug:"/tips/being-more-terse",permalink:"/docs/tips/being-more-terse",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tips/being-more-terse.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tips and Tricks",permalink:"/docs/category/tips-and-tricks"},next:{title:"Tutorial - Basics",permalink:"/docs/category/tutorial---basics"}},l={},d=[{value:"Expression Functions",id:"expression-functions",level:2},{value:"Don&#39;t repeat parameter types",id:"dont-repeat-parameter-types",level:2},{value:"Locally use packages",id:"locally-use-packages",level:2},{value:"Abbreviate conversions functions",id:"abbreviate-conversions-functions",level:2},{value:"Use default parameters",id:"use-default-parameters",level:2},{value:"Rename functions with default parameters",id:"rename-functions-with-default-parameters",level:2},{value:"Locally define helper functions",id:"locally-define-helper-functions",level:2},{value:"Use package renames within <code>package body</code>",id:"use-package-renames-within-package-body",level:2},{value:"Use a package at file scope",id:"use-a-package-at-file-scope",level:2},{value:"Provide abstraction without introducing more code",id:"provide-abstraction-without-introducing-more-code",level:2},{value:"Rename complicated expressions",id:"rename-complicated-expressions",level:2}],u={toc:d};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"being-more-terse"},"Being More Terse"),(0,r.kt)("p",null,"Ada is known for being more verbose than other languages because it prefers\nkeywords over symbology.  These techniques can help you compact your Ada text\nwhere you need it."),(0,r.kt)("h2",{id:"expression-functions"},"Expression Functions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},'function "-"(V : Vec3) return Vec3 is \nbegin                                 \n    return (-V.X, -V.Y, -V.Z);        \nend "-";\n')),(0,r.kt)("p",null,"Functions can return expressions without using a full ",(0,r.kt)("inlineCode",{parentName:"p"},"begin")," ... ",(0,r.kt)("inlineCode",{parentName:"p"},"end"),"\nsection.  Just wrap your expression in parentheses."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},'function "-"(V : Vec3) return Vec3 is (-V.X, -V.Y, -V.Z);\n')),(0,r.kt)("h2",{id:"dont-repeat-parameter-types"},"Don't repeat parameter types"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"function Add (Left : Integer; Right : Integer)\n    return Integer;\n")),(0,r.kt)("p",null,"If parameter types repeat, you can group them."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"function Add (Left, Right : Integer)\n    return Integer;\n")),(0,r.kt)("h2",{id:"locally-use-packages"},"Locally use packages"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},'procedure Test_Is_Quoted (Op : in out TT.Operation\'Class) is                   \nbegin                                                                          \n    Op.Register;                                                               \n    Op.Assert (not Is_Quoted (Ada.Characters.Latin_1.Quotation & "some text"));\nend Test_Is_Quoted;\n')),(0,r.kt)("p",null,"Using packages locally doesn't pollute your global namespace.                                "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},'procedure Test_Is_Quoted (Op : in out TT.Operation\'Class) is  \n    use Ada.Characters.Latin_1;                               \nbegin                                                         \n    Op.Register;                                              \n    Op.Assert (not Is_Quoted (Quotation & "some text"));      \nend Test_Is_Quoted; -- Visibility of Latin_1 ends here.       \n')),(0,r.kt)("h2",{id:"abbreviate-conversions-functions"},"Abbreviate conversions functions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},'Toggles.Append(Ada.Strings.Unbounded.To_Unbounded_String("--verbose"));      \nToggles.Append(Ada.Strings.Unbounded.To_Unbounded_String("--skip-errors"));                                                                                \n')),(0,r.kt)("p",null,"The usage of ",(0,r.kt)("inlineCode",{parentName:"p"},'"+"')," as a function to convert from ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," to\n",(0,r.kt)("inlineCode",{parentName:"p"},"Ada.Strings.Unbounded.Unbounded_String")," is common:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},'function "+"(S : String) return String renames Ada.Strings.Unbounded.To_Unbounded_String;\nToggles.Append(+"--verbose");                                                            \nToggles.Append(+"--skip-errors");\n')),(0,r.kt)("h2",{id:"use-default-parameters"},"Use default parameters"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"S : Spinner := Make (In_Place, 1);\n")),(0,r.kt)("p",null,"Default parameters allow you to apply common parameter values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"-- When this function signature is used...\nfunction Make (\n    Style          : Spinner_Style := In_Place;\n    Ticks_Per_Move : Positive := 1) return Spinner;\n\nS : Spinner := Make;\n")),(0,r.kt)("h2",{id:"rename-functions-with-default-parameters"},"Rename functions with default parameters"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},'S : String := Ada.Strings.Fixed.Trim ("  this is a string   ", Ada.Strings.Both);\n')),(0,r.kt)("p",null,"You can ",(0,r.kt)("inlineCode",{parentName:"p"},"rename")," a function with bound default parameters."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},'function Strip(Input : String; Sides : Ada.Strings.Trim_End:= Ada.Strings.Both)\n    renames Ada.Strings.Fixed.Trim;\n\nS : String := Strip ("  this is a string   ");\n')),(0,r.kt)("h2",{id:"locally-define-helper-functions"},"Locally define helper functions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},'procedure Test_Is_Quoted (Op : in out TT.Operation\'Class) is\n    use Ada.Characters.Latin_1;\nbegin\n    Op.Register;\n\n    Op.Assert (not Is_Quoted(""));\n    Op.Assert (not Is_Quoted ("not quoted"));\nend Test_Is_Quoted;\n')),(0,r.kt)("p",null,"Using a locally defined helper function to simplify repeated local logic.  Note\nthat these local subprograms don't pollute the global namespace."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},'procedure Test_Is_Quoted (Op : in out TT.Operation\'Class) is\n    use Ada.Characters.Latin_1;\n    procedure Not_Quoted (S : String) is\n    begin\n        Op.Assert (not Is_Quoted(S));\n    end Not_Quoted;\nbegin\n    Op.Register;\n    Not_Quoted ("");\n    Not_Quoted ("not quoted");        \nend Test_Is_Quoted;\n')),(0,r.kt)("h2",{id:"use-package-renames-within-package-body"},"Use package renames within ",(0,r.kt)("inlineCode",{parentName:"h2"},"package body")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},'with Ada.Text_IO;\npackage body Hello_World is\n    procedure Greet is\n    begin\n        Ada.Text_IO.New_Line;\n        Ada.Text_IO.Put_Line ("Hello, world!");\n        Ada.Text_IO.New_Line;\n    end Greet;\nend Hello_World;\n')),(0,r.kt)("p",null,"Show indication of where subprograms come from while shortening the names used\nfor them.  Names inside package bodies won't be visible."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},'with Ada.Text_IO;\npackage body Hello_World is\n    package AIO renames Ada.Text_IO;\n\n    procedure Greet is\n    begin\n        AIO.New_Line;\n        AIO.Put_Line ("Hello, world!");\n        AIO.New_Line;\n    end Greet;\nend Hello_World;\n')),(0,r.kt)("h2",{id:"use-a-package-at-file-scope"},"Use a package at file scope"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},'with Ada.Text_IO;\npackage body Hello_World is\n    procedure Greet is\n    begin\n        Ada.Text_IO.New_Line;\n        Ada.Text_IO.Put_Line ("Hello, world!");\n        Ada.Text_IO.New_Line;\n    end Greet;\nend Hello_World;\n')),(0,r.kt)("p",null,"Some packages provide well-recognizable subprograms and hence cannot be confused\neasily.  When these symbols are used often, using the package at the file scope\ncan cut down significantly on verboseness.  You're polluting the namespace\nheavily so this should be used judiciously."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},'with Ada.Text_IO;  use Ada.Text_IO;\npackage body Hello_World is\n    procedure Greet is\n    begin\n        New_Line;\n        Put_Line ("Hello, world!");\n        New_Line;\n    end Greet;\nend Hello_World;\n')),(0,r.kt)("h2",{id:"provide-abstraction-without-introducing-more-code"},"Provide abstraction without introducing more code"),(0,r.kt)("p",null,"You might not know how you want to use a subprogram, but still want to separate it\nfrom another one which could stand-in for it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"package RT.Debug is\n    procedure Print (Str : String) renames Ada.Text_IO.Put_Line;\nend RT.Debug;\n")),(0,r.kt)("h2",{id:"rename-complicated-expressions"},"Rename complicated expressions"),(0,r.kt)("p",null,"Sometimes you might have long complicated expressions, which you can rename,\nwhich assigns their value when the renaming occurs.  This is not text\nsubstitution, so the initial value cannot be modified."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ada"},"with Ada.Text_IO;\n\nprocedure Sample is\n    use Ada.Text_IO;\n\n    type Int_List is array (1 .. 10) of Integer;\n    Values : Int_List := (others => 0);\n    Index : Integer := 1;\n    First : Integer renames Values(Index);\n    Second : Integer renames Values(2);\nbegin\n    Put_Line (First'Image);\n    Put_Line (Second'Image);\n\n    New_Line;\n    First := 5;\n    Put_Line (\"First changed to 5\");\n    Put_Line (First'Image);\n    Put_Line (Second'Image);\n\n    New_Line;\n    Index := 2;\n    Put_Line (\"Index changed to 2\");\n    Put_Line (First'Image);\n    Put_Line (Second'Image);\n\n    New_Line;\n    First := 7;\n    Put_Line (\"First changed to 7\");\n    Put_Line (First'Image);\n    Put_Line (Second'Image);   \nend Sample;\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"0\n0\n\nFirst changed to 5\n5\n0\n\nIndex changed to 2\n5\n0\n\nFirst changed to 7\n7\n0\n")))}p.isMDXComponent=!0}}]);