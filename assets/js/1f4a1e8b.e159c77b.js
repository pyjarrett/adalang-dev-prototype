"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[9150],{5624:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(6687),i=t(4923);const o="tabItem_Vo3M";function r(e){let{children:n,hidden:t,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(o,r),hidden:t},n)}},7735:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(9440),i=t(6687),o=t(4923),r=t(5530),l=t(3895),s=t(8898),u=t(7466);const c="tabList_cuNH",d="tabItem_JP6x";function p(e){var n,t;const{lazy:r,block:p,defaultValue:m,values:g,groupId:h,className:v}=e,b=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=g?g:b.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),f=(0,l.l)(k,((e,n)=>e.value===n.value));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const C=null===m?m:null!=(n=null!=m?m:null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)?n:b[0].props.value;if(null!==C&&!k.some((e=>e.value===C)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+C+'" but none of its children has the corresponding value. Available values are: '+k.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:T}=(0,s.U)(),[w,I]=(0,i.useState)(C),A=[],{blockElementScrollPositionUntilNextRender:N}=(0,u.o5)();if(null!=h){const e=y[h];null!=e&&e!==w&&k.some((n=>n.value===e))&&I(e)}const _=e=>{const n=e.currentTarget,t=A.indexOf(n),a=k[t].value;a!==w&&(N(n),I(a),null!=h&&T(h,String(a)))},E=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{var a;const n=A.indexOf(e.currentTarget)+1;t=null!=(a=A[n])?a:A[0];break}case"ArrowLeft":{var i;const n=A.indexOf(e.currentTarget)-1;t=null!=(i=A[n])?i:A[A.length-1];break}}null==(n=t)||n.focus()};return i.createElement("div",{className:(0,o.Z)("tabs-container",c)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},v)},k.map((e=>{let{value:n,label:t,attributes:r}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:e=>A.push(e),onKeyDown:E,onFocus:_,onClick:_},r,{className:(0,o.Z)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":w===n})}),null!=t?t:n)}))),r?(0,i.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},b.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==w})))))}function m(e){const n=(0,r.Z)();return i.createElement(p,(0,a.Z)({key:String(n)},e))}},533:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var a=t(9440),i=(t(6687),t(1716)),o=t(5624),r=t(7735);const l={sidebar_position:1},s="Advanced Techniques",u={unversionedId:"tips/advanced-techniques",id:"tips/advanced-techniques",title:"Advanced Techniques",description:"RAII",source:"@site/docs/tips/advanced-techniques.mdx",sourceDirName:"tips",slug:"/tips/advanced-techniques",permalink:"/docs/tips/advanced-techniques",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tips and Tricks",permalink:"/docs/category/tips-and-tricks"},next:{title:"Being More Terse",permalink:"/docs/tips/being-more-terse"}},c={},d=[{value:"RAII",id:"raii",level:2},{value:"Timing out on a Blocking Operation",id:"timing-out-on-a-blocking-operation",level:2},{value:"Waiting for all tasks to complete",id:"waiting-for-all-tasks-to-complete",level:2}],p={toc:d};function m(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"advanced-techniques"},"Advanced Techniques"),(0,i.kt)("h2",{id:"raii"},"RAII"),(0,i.kt)("p",null,"Ada supports scope-based resources, also called ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Resource_acquisition_is_initialization"},"RAII"),"\nby extending the ",(0,i.kt)("inlineCode",{parentName:"p"},"Controlled")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"LimitedControlled")," types."),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"ada",label:"Ada",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ada"},"with Ada.Finalization;  use Ada.Finalization;\npackage Sample is\n    -- \"Controlled\" types exhibit RAII behavior:\n    type Capricorn is new Controlled with\n    record\n        Dummy : Integer;\n    end record;\n\n    overriding procedure Initialize(C : in out Capricorn);\n        -- Initialization after creation.\n\n    overriding procedure Adjust(C : in out Capricorn);\n        -- Adjustment after assignment.\n\n    overriding procedure Finalize(C : in out Capricorn);\n        -- Different than Java's Finalize, in that it's deterministic and more\n        -- analogous to a C++ destructor.\n\n    -- If you don't want one of these do to anything, you can avoid writing a\n    -- definition in the package body and define the function as \"do nothing\"\n    -- by writing:\n    --\n    -- overriding procedure Finalize(C : in out Capricorn) is null;\nend Sample;\n\npackage body Sample is\n    procedure Initialize(C : in out Capricorn) is\n    begin\n        -- Do something on initialize.\n    end Initialize;\n\n    procedure Adjust(C : in out Capricorn) is\n    begin\n        -- Adjustment after assignment.\n        --\n        -- If you want Adjust to do the same as Initialize and use the same object\n        -- code without generating a separate function, you can just do\n        -- procedure Adjust(C: in out Capricorn) renames Initialize;\n    end Adjust;\n\n    overriding procedure Finalize(C : in out Capricorn);\n        -- Different than Java's Finalize, in that it's deterministic and more\n        -- analogous to a C++ destructor.\nend Sample;\n"))),(0,i.kt)(o.Z,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Capricorn {\npublic:\n// Similar for all constructors.\nCapricorn () {}\n\n// Copy constructor.\nCapricorn(const Capricorn&) {}\n\n// Move constructor.\nCapricorn(Capricorn&&) {}\n\n// Copy assignment.\nCapricorn& operator=(const Capricorn&) { return *this; }\n\n// Move assignment.\nCapricorn& operator=(Capricorn&&) { return *this; }\n\n// Destructor.\n~Capricorn () {}\n};\n")))),(0,i.kt)("h2",{id:"timing-out-on-a-blocking-operation"},"Timing out on a Blocking Operation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ada"},"task body My_Task is\n    Elem : A_Queue_Element;\nbegin\n    loop -- processing loop\n        select\n            A_Queue.Blocking_Queue (Elem);\n        or\n            -- Stop processing after a 1 second timeout. Removing this delay causes\n            -- immediate exit if a block occurs.\n            delay 1.0;\n            exit;\n        end select;\n\n        -- ... process Elem ...\n    end loop\nend My_Task;\n")),(0,i.kt)("h2",{id:"waiting-for-all-tasks-to-complete"},"Waiting for all tasks to complete"),(0,i.kt)("p",null,"A list of statements doesn't exit until all tasks are complete, so by using\n",(0,i.kt)("inlineCode",{parentName:"p"},"declare ... begin ... end")," you can wait until all your tasks are done."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ada"},"declare\n    A_Task : My_Task;  -- task which needs to finish before more processing\nbegin\n    null; -- Just wait until the task is done.\nend;\n\n-- Continue other operations here.\n")))}m.isMDXComponent=!0}}]);