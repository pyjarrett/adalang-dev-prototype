"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[7918],{4419:(e,t,r)=>{r.d(t,{Z:()=>k});var n=r(6687),a=r(4923),l=r(9324),o=r(6206),i=r(7860),c=r(4531),s=r(8412),m=r(5450),d=Object.defineProperty,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function v(e){return n.createElement("svg",((e,t)=>{for(var r in t||(t={}))p.call(t,r)&&f(e,r,t[r]);if(u)for(var r of u(t))b.call(t,r)&&f(e,r,t[r]);return e})({viewBox:"0 0 24 24"},e),n.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const y={breadcrumbsContainer:"breadcrumbsContainer_kKGI",breadcrumbHomeIcon:"breadcrumbHomeIcon_HHP1"};var g=Object.defineProperty,h=Object.defineProperties,O=Object.getOwnPropertyDescriptors,E=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,P=(e,t,r)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function N({children:e,href:t,isLast:r}){const a="breadcrumbs__link";return r?n.createElement("span",{className:a,itemProp:"name"},e):t?n.createElement(c.Z,{className:a,href:t,itemProp:"item"},n.createElement("span",{itemProp:"name"},e)):n.createElement("span",{className:a},e)}function L({children:e,active:t,index:r,addMicrodata:l}){return n.createElement("li",(o=((e,t)=>{for(var r in t||(t={}))j.call(t,r)&&P(e,r,t[r]);if(E)for(var r of E(t))w.call(t,r)&&P(e,r,t[r]);return e})({},l&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"}),i={className:(0,a.Z)("breadcrumbs__item",{"breadcrumbs__item--active":t})},h(o,O(i))),e,n.createElement("meta",{itemProp:"position",content:String(r+1)}));var o,i}function _(){const e=(0,s.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(c.Z,{"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,a.Z)("breadcrumbs__link",y.breadcrumbsItemLink),href:e},n.createElement(v,{className:y.breadcrumbHomeIcon})))}function k(){const e=(0,o.s1)(),t=(0,i.Ns)();return e?n.createElement("nav",{className:(0,a.Z)(l.k.docs.docBreadcrumbs,y.breadcrumbsContainer),"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(_,null),e.map(((t,r)=>{const a=r===e.length-1;return n.createElement(L,{key:r,active:a,index:r,addMicrodata:!!t.href},n.createElement(N,{href:t.href,isLast:a},t.label))})))):null}},815:(e,t,r)=>{r.r(t),r.d(t,{default:()=>_r});var n=r(6687),a=r(5434),l=r(6844);const o=n.createContext(null);function i({children:e,content:t}){const r=function(e){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(t);return n.createElement(o.Provider,{value:r},e)}function c(){const e=(0,n.useContext)(o);if(null===e)throw new l.i6("DocProvider");return e}function s(){var e;const{metadata:t,frontMatter:r,assets:l}=c();return n.createElement(a.d,{title:t.title,description:t.description,keywords:r.keywords,image:null!=(e=l.image)?e:r.image})}var m=r(4923),d=r(6910),u=r(3067);function p(){const{metadata:e}=c();return n.createElement(u.Z,{previous:e.previous,next:e.next})}var b=r(9583),f=r(180),v=r(9324),y=r(5450);function g({lastUpdatedAt:e,formattedLastUpdatedAt:t}){return n.createElement(y.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*e).toISOString()},t))}}," on {date}")}function h({lastUpdatedBy:e}){return n.createElement(y.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,e)}}," by {user}")}function O({lastUpdatedAt:e,formattedLastUpdatedAt:t,lastUpdatedBy:r}){return n.createElement("span",{className:v.k.common.lastUpdated},n.createElement(y.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:e&&t?n.createElement(g,{lastUpdatedAt:e,formattedLastUpdatedAt:t}):"",byUser:r?n.createElement(h,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}const E="iconEdit_IllD";var j=Object.defineProperty,w=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,L=(e,t,r)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function _(e){var t=e,{className:r}=t,a=((e,t)=>{var r={};for(var n in e)P.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&w)for(var n of w(e))t.indexOf(n)<0&&N.call(e,n)&&(r[n]=e[n]);return r})(t,["className"]);return n.createElement("svg",((e,t)=>{for(var r in t||(t={}))P.call(t,r)&&L(e,r,t[r]);if(w)for(var r of w(t))N.call(t,r)&&L(e,r,t[r]);return e})({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,m.Z)(E,r),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function k({editUrl:e}){return n.createElement("a",{href:e,target:"_blank",rel:"noreferrer noopener",className:v.k.common.editThisPage},n.createElement(_,null),n.createElement(y.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var x=r(4531);const Z="tag_HxKy",C="tagRegular_BogJ",T="tagWithCount_zHl2";function H({permalink:e,label:t,count:r}){return n.createElement(x.Z,{href:e,className:(0,m.Z)(Z,r?T:C)},t,r&&n.createElement("span",null,r))}const I="tags_Z4Yo",S="tag_rv1i";function U({tags:e}){return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(y.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,m.Z)(I,"padding--none","margin-left--sm")},e.map((({label:e,permalink:t})=>n.createElement("li",{key:t,className:S},n.createElement(H,{label:e,permalink:t}))))))}const A="lastUpdated_kKC4";var M=Object.defineProperty,D=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable,R=(e,t,r)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function z(e){return n.createElement("div",{className:(0,m.Z)(v.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(U,((e,t)=>{for(var r in t||(t={}))B.call(t,r)&&R(e,r,t[r]);if(D)for(var r of D(t))V.call(t,r)&&R(e,r,t[r]);return e})({},e))))}function F({editUrl:e,lastUpdatedAt:t,lastUpdatedBy:r,formattedLastUpdatedAt:a}){return n.createElement("div",{className:(0,m.Z)(v.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},e&&n.createElement(k,{editUrl:e})),n.createElement("div",{className:(0,m.Z)("col",A)},(t||r)&&n.createElement(O,{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:r})))}function J(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:r,formattedLastUpdatedAt:a,lastUpdatedBy:l,tags:o}=e,i=o.length>0,s=!!(t||r||l);return i||s?n.createElement("footer",{className:(0,m.Z)(v.k.docs.docFooter,"docusaurus-mt-lg")},i&&n.createElement(z,{tags:o}),s&&n.createElement(F,{editUrl:t,lastUpdatedAt:r,lastUpdatedBy:l,formattedLastUpdatedAt:a})):null}var q=r(4663),K=r(2638),Y=Object.defineProperty,$=Object.defineProperties,W=Object.getOwnPropertyDescriptors,G=Object.getOwnPropertySymbols,Q=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable,ee=(e,t,r)=>t in e?Y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,te=(e,t)=>{for(var r in t||(t={}))Q.call(t,r)&&ee(e,r,t[r]);if(G)for(var r of G(t))X.call(t,r)&&ee(e,r,t[r]);return e},re=(e,t)=>$(e,W(t));function ne(e){const t=e.map((e=>re(te({},e),{parentIndex:-1,children:[]}))),r=Array(7).fill(-1);t.forEach(((e,t)=>{const n=r.slice(2,e.level);e.parentIndex=Math.max(...n),r[e.level]=t}));const n=[];return t.forEach((e=>{const r=e,{parentIndex:a}=r,l=((e,t)=>{var r={};for(var n in e)Q.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&G)for(var n of G(e))t.indexOf(n)<0&&X.call(e,n)&&(r[n]=e[n]);return r})(r,["parentIndex"]);a>=0?t[a].children.push(l):n.push(l)})),n}function ae({toc:e,minHeadingLevel:t,maxHeadingLevel:r}){return e.flatMap((e=>{const n=ae({toc:e.children,minHeadingLevel:t,maxHeadingLevel:r});return function(e){return e.level>=t&&e.level<=r}(e)?[re(te({},e),{children:n})]:n}))}function le(e){const t=e.getBoundingClientRect();return t.top===t.bottom?le(e.parentNode):t}function oe(e,{anchorTopOffset:t}){var r,n;const a=e.find((e=>le(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(le(a))?a:null!=(r=e[e.indexOf(a)-1])?r:null}return null!=(n=e[e.length-1])?n:null}function ie(){const e=(0,n.useRef)(0),{navbar:{hideOnScroll:t}}=(0,K.L)();return(0,n.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function ce(e){const t=(0,n.useRef)(void 0),r=ie();(0,n.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:n,linkActiveClassName:a,minHeadingLevel:l,maxHeadingLevel:o}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(n),i=function({minHeadingLevel:e,maxHeadingLevel:t}){const r=[];for(let n=e;n<=t;n+=1)r.push(`h${n}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:l,maxHeadingLevel:o}),c=oe(i,{anchorTopOffset:r.current}),s=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,r){r?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===s)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,r])}const se=n.memo((function e({toc:t,className:r,linkClassName:a,isChild:l}){return t.length?n.createElement("ul",{className:l?void 0:r},t.map((t=>n.createElement("li",{key:t.id},n.createElement("a",{href:`#${t.id}`,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:t.value}}),n.createElement(e,{isChild:!0,toc:t.children,className:r,linkClassName:a}))))):null}));var me=Object.defineProperty,de=Object.getOwnPropertySymbols,ue=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable,be=(e,t,r)=>t in e?me(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function fe(e){var t=e,{toc:r,className:a="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:i,maxHeadingLevel:c}=t,s=((e,t)=>{var r={};for(var n in e)ue.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&de)for(var n of de(e))t.indexOf(n)<0&&pe.call(e,n)&&(r[n]=e[n]);return r})(t,["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"]);const m=(0,K.L)(),d=null!=i?i:m.tableOfContents.minHeadingLevel,u=null!=c?c:m.tableOfContents.maxHeadingLevel,p=function({toc:e,minHeadingLevel:t,maxHeadingLevel:r}){return(0,n.useMemo)((()=>ae({toc:ne(e),minHeadingLevel:t,maxHeadingLevel:r})),[e,t,r])}({toc:r,minHeadingLevel:d,maxHeadingLevel:u});return ce((0,n.useMemo)((()=>{if(l&&o)return{linkClassName:l,linkActiveClassName:o,minHeadingLevel:d,maxHeadingLevel:u}}),[l,o,d,u])),n.createElement(se,((e,t)=>{for(var r in t||(t={}))ue.call(t,r)&&be(e,r,t[r]);if(de)for(var r of de(t))pe.call(t,r)&&be(e,r,t[r]);return e})({toc:p,className:a,linkClassName:l},s))}const ve="tocCollapsibleButton_vKRO",ye="tocCollapsibleButtonExpanded_VedY";var ge=Object.defineProperty,he=Object.defineProperties,Oe=Object.getOwnPropertyDescriptors,Ee=Object.getOwnPropertySymbols,je=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable,Pe=(e,t,r)=>t in e?ge(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function Ne(e){var t,r,a=e,{collapsed:l}=a,o=((e,t)=>{var r={};for(var n in e)je.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&Ee)for(var n of Ee(e))t.indexOf(n)<0&&we.call(e,n)&&(r[n]=e[n]);return r})(a,["collapsed"]);return n.createElement("button",(t=((e,t)=>{for(var r in t||(t={}))je.call(t,r)&&Pe(e,r,t[r]);if(Ee)for(var r of Ee(t))we.call(t,r)&&Pe(e,r,t[r]);return e})({type:"button"},o),r={className:(0,m.Z)("clean-btn",ve,!l&&ye,o.className)},he(t,Oe(r))),n.createElement(y.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const Le="tocCollapsible_JtF0",_e="tocCollapsibleContent_NCx_",ke="tocCollapsibleExpanded_MTHC";function xe({toc:e,className:t,minHeadingLevel:r,maxHeadingLevel:a}){const{collapsed:l,toggleCollapsed:o}=(0,q.u)({initialState:!0});return n.createElement("div",{className:(0,m.Z)(Le,!l&&ke,t)},n.createElement(Ne,{collapsed:l,onClick:o}),n.createElement(q.z,{lazy:!0,className:_e,collapsed:l},n.createElement(fe,{toc:e,minHeadingLevel:r,maxHeadingLevel:a})))}const Ze="tocMobile_QPLc";function Ce(){const{toc:e,frontMatter:t}=c();return n.createElement(xe,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,m.Z)(v.k.docs.docTocMobile,Ze)})}const Te="tableOfContents_sLTc";var He=Object.defineProperty,Ie=Object.defineProperties,Se=Object.getOwnPropertyDescriptors,Ue=Object.getOwnPropertySymbols,Ae=Object.prototype.hasOwnProperty,Me=Object.prototype.propertyIsEnumerable,De=(e,t,r)=>t in e?He(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function Be(e){var t,r=e,{className:a}=r,l=((e,t)=>{var r={};for(var n in e)Ae.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&Ue)for(var n of Ue(e))t.indexOf(n)<0&&Me.call(e,n)&&(r[n]=e[n]);return r})(r,["className"]);return n.createElement("div",{className:(0,m.Z)(Te,"thin-scrollbar",a)},n.createElement(fe,(t=((e,t)=>{for(var r in t||(t={}))Ae.call(t,r)&&De(e,r,t[r]);if(Ue)for(var r of Ue(t))Me.call(t,r)&&De(e,r,t[r]);return e})({},l),Ie(t,Se({linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))))}function Ve(){const{toc:e,frontMatter:t}=c();return n.createElement(Be,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:v.k.docs.docTocDesktop})}var Re=r(4),ze=r(1716),Fe=r(6847),Je=Object.defineProperty,qe=Object.getOwnPropertySymbols,Ke=Object.prototype.hasOwnProperty,Ye=Object.prototype.propertyIsEnumerable,$e=(e,t,r)=>t in e?Je(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function We(e){var t;if((null==(t=e.props)?void 0:t.mdxType)&&e.props.originalType){const t=e.props,{mdxType:r,originalType:a}=t,l=((e,t)=>{var r={};for(var n in e)Ke.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&qe)for(var n of qe(e))t.indexOf(n)<0&&Ye.call(e,n)&&(r[n]=e[n]);return r})(t,["mdxType","originalType"]);return n.createElement(e.props.originalType,l)}return e}var Ge=r(8090),Qe=Object.defineProperty,Xe=Object.getOwnPropertySymbols,et=Object.prototype.hasOwnProperty,tt=Object.prototype.propertyIsEnumerable,rt=(e,t,r)=>t in e?Qe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,nt=(e,t)=>{for(var r in t||(t={}))et.call(t,r)&&rt(e,r,t[r]);if(Xe)for(var r of Xe(t))tt.call(t,r)&&rt(e,r,t[r]);return e};var at=Object.defineProperty,lt=Object.getOwnPropertySymbols,ot=Object.prototype.hasOwnProperty,it=Object.prototype.propertyIsEnumerable,ct=(e,t,r)=>t in e?at(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var st=Object.defineProperty,mt=Object.getOwnPropertySymbols,dt=Object.prototype.hasOwnProperty,ut=Object.prototype.propertyIsEnumerable,pt=(e,t,r)=>t in e?st(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,bt=(e,t)=>{for(var r in t||(t={}))dt.call(t,r)&&pt(e,r,t[r]);if(mt)for(var r of mt(t))ut.call(t,r)&&pt(e,r,t[r]);return e};var ft=r(6073);const vt="details_fRjv",yt="isBrowser_jVk4",gt="collapsibleContent_jO_w";var ht=Object.defineProperty,Ot=Object.defineProperties,Et=Object.getOwnPropertyDescriptors,jt=Object.getOwnPropertySymbols,wt=Object.prototype.hasOwnProperty,Pt=Object.prototype.propertyIsEnumerable,Nt=(e,t,r)=>t in e?ht(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function Lt(e){return!!e&&("SUMMARY"===e.tagName||Lt(e.parentElement))}function _t(e,t){return!!e&&(e===t||_t(e.parentElement,t))}function kt(e){var t=e,{summary:r,children:a}=t,l=((e,t)=>{var r={};for(var n in e)wt.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&jt)for(var n of jt(e))t.indexOf(n)<0&&Pt.call(e,n)&&(r[n]=e[n]);return r})(t,["summary","children"]);const o=(0,ft.Z)(),i=(0,n.useRef)(null),{collapsed:c,setCollapsed:s}=(0,q.u)({initialState:!l.open}),[d,u]=(0,n.useState)(l.open);return n.createElement("details",(p=((e,t)=>{for(var r in t||(t={}))wt.call(t,r)&&Nt(e,r,t[r]);if(jt)for(var r of jt(t))Pt.call(t,r)&&Nt(e,r,t[r]);return e})({},l),b={ref:i,open:d,"data-collapsed":c,className:(0,m.Z)(vt,o&&yt,l.className),onMouseDown:e=>{Lt(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;Lt(t)&&_t(t,i.current)&&(e.preventDefault(),c?(s(!1),u(!0)):s(!0))}},Ot(p,Et(b))),null!=r?r:n.createElement("summary",null,"Details"),n.createElement(q.z,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{s(e),u(!e)}},n.createElement("div",{className:gt},a)));var p,b}const xt="details_f55N";var Zt=Object.defineProperty,Ct=Object.defineProperties,Tt=Object.getOwnPropertyDescriptors,Ht=Object.getOwnPropertySymbols,It=Object.prototype.hasOwnProperty,St=Object.prototype.propertyIsEnumerable,Ut=(e,t,r)=>t in e?Zt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function At(e){var t,r,a=((e,t)=>{var r={};for(var n in e)It.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&Ht)for(var n of Ht(e))t.indexOf(n)<0&&St.call(e,n)&&(r[n]=e[n]);return r})(e,[]);return n.createElement(kt,(t=((e,t)=>{for(var r in t||(t={}))It.call(t,r)&&Ut(e,r,t[r]);if(Ht)for(var r of Ht(t))St.call(t,r)&&Ut(e,r,t[r]);return e})({},a),r={className:(0,m.Z)("alert alert--info",xt,a.className)},Ct(t,Tt(r))))}var Mt=Object.defineProperty,Dt=Object.defineProperties,Bt=Object.getOwnPropertyDescriptors,Vt=Object.getOwnPropertySymbols,Rt=Object.prototype.hasOwnProperty,zt=Object.prototype.propertyIsEnumerable,Ft=(e,t,r)=>t in e?Mt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Jt=Object.defineProperty,qt=Object.getOwnPropertySymbols,Kt=Object.prototype.hasOwnProperty,Yt=Object.prototype.propertyIsEnumerable,$t=(e,t,r)=>t in e?Jt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function Wt(e){return n.createElement(Re.Z,((e,t)=>{for(var r in t||(t={}))Kt.call(t,r)&&$t(e,r,t[r]);if(qt)for(var r of qt(t))Yt.call(t,r)&&$t(e,r,t[r]);return e})({},e))}const Gt="containsTaskList_jbJo";var Qt=Object.defineProperty,Xt=Object.defineProperties,er=Object.getOwnPropertyDescriptors,tr=Object.getOwnPropertySymbols,rr=Object.prototype.hasOwnProperty,nr=Object.prototype.propertyIsEnumerable,ar=(e,t,r)=>t in e?Qt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const lr="img_RNJN";var or=Object.defineProperty,ir=Object.defineProperties,cr=Object.getOwnPropertyDescriptors,sr=Object.getOwnPropertySymbols,mr=Object.prototype.hasOwnProperty,dr=Object.prototype.propertyIsEnumerable,ur=(e,t,r)=>t in e?or(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var pr=r(1256);var br=Object.defineProperty,fr=Object.getOwnPropertySymbols,vr=Object.prototype.hasOwnProperty,yr=Object.prototype.propertyIsEnumerable,gr=(e,t,r)=>t in e?br(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,hr=(e,t)=>{for(var r in t||(t={}))vr.call(t,r)&&gr(e,r,t[r]);if(fr)for(var r of fr(t))yr.call(t,r)&&gr(e,r,t[r]);return e};const Or={head:function(e){const t=n.Children.map(e.children,(e=>n.isValidElement(e)?We(e):e));return n.createElement(Fe.Z,((e,t)=>{for(var r in t||(t={}))Ke.call(t,r)&&$e(e,r,t[r]);if(qe)for(var r of qe(t))Ye.call(t,r)&&$e(e,r,t[r]);return e})({},e),t)},code:function(e){const t=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return n.Children.toArray(e.children).every((e=>{var r;return"string"==typeof e&&!e.includes("\n")||(0,n.isValidElement)(e)&&t.includes(null==(r=e.props)?void 0:r.mdxType)}))?n.createElement("code",nt({},e)):n.createElement(Ge.Z,nt({},e))},a:function(e){return n.createElement(x.Z,((e,t)=>{for(var r in t||(t={}))ot.call(t,r)&&ct(e,r,t[r]);if(lt)for(var r of lt(t))it.call(t,r)&&ct(e,r,t[r]);return e})({},e))},pre:function(e){var t;return n.createElement(Ge.Z,bt({},(0,n.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:bt({},e)))},details:function(e){const t=n.Children.toArray(e.children),r=t.find((e=>{var t;return n.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),a=n.createElement(n.Fragment,null,t.filter((e=>e!==r)));return n.createElement(At,(l=((e,t)=>{for(var r in t||(t={}))Rt.call(t,r)&&Ft(e,r,t[r]);if(Vt)for(var r of Vt(t))zt.call(t,r)&&Ft(e,r,t[r]);return e})({},e),Dt(l,Bt({summary:r}))),a);var l},ul:function(e){return n.createElement("ul",(t=((e,t)=>{for(var r in t||(t={}))rr.call(t,r)&&ar(e,r,t[r]);if(tr)for(var r of tr(t))nr.call(t,r)&&ar(e,r,t[r]);return e})({},e),r={className:(a=e.className,(0,m.Z)(a,(null==a?void 0:a.includes("contains-task-list"))&&Gt))},Xt(t,er(r))));var t,r,a},img:function(e){return n.createElement("img",(t=((e,t)=>{for(var r in t||(t={}))mr.call(t,r)&&ur(e,r,t[r]);if(sr)for(var r of sr(t))dr.call(t,r)&&ur(e,r,t[r]);return e})({loading:"lazy"},e),r={className:(a=e.className,(0,m.Z)(a,lr))},ir(t,cr(r))));var t,r,a},h1:e=>n.createElement(Wt,hr({as:"h1"},e)),h2:e=>n.createElement(Wt,hr({as:"h2"},e)),h3:e=>n.createElement(Wt,hr({as:"h3"},e)),h4:e=>n.createElement(Wt,hr({as:"h4"},e)),h5:e=>n.createElement(Wt,hr({as:"h5"},e)),h6:e=>n.createElement(Wt,hr({as:"h6"},e)),admonition:pr.Z,mermaid:()=>null};function Er({children:e}){return n.createElement(ze.Zo,{components:Or},e)}function jr({children:e}){const t=function(){const{metadata:e,frontMatter:t,contentTitle:r}=c();return t.hide_title||void 0!==r?null:e.title}();return n.createElement("div",{className:(0,m.Z)(v.k.docs.docMarkdown,"markdown")},t&&n.createElement("header",null,n.createElement(Re.Z,{as:"h1"},t)),n.createElement(Er,null,e))}var wr=r(4419);const Pr="docItemContainer_SBls",Nr="docItemCol_aYSd";function Lr({children:e}){const t=function(){const{frontMatter:e,toc:t}=c(),r=(0,d.i)(),a=e.hide_table_of_contents,l=!a&&t.length>0;return{hidden:a,mobile:l?n.createElement(Ce,null):void 0,desktop:!l||"desktop"!==r&&"ssr"!==r?void 0:n.createElement(Ve,null)}}();return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,m.Z)("col",!t.hidden&&Nr)},n.createElement(b.Z,null),n.createElement("div",{className:Pr},n.createElement("article",null,n.createElement(wr.Z,null),n.createElement(f.Z,null),t.mobile,n.createElement(jr,null,e),n.createElement(J,null)),n.createElement(p,null))),t.desktop&&n.createElement("div",{className:"col col--3"},t.desktop))}function _r(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,r=e.content;return n.createElement(i,{content:e.content},n.createElement(a.FG,{className:t},n.createElement(s,null),n.createElement(Lr,null,n.createElement(r,null))))}},3067:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(6687),a=r(5450),l=r(4923),o=r(4531);function i(e){const{permalink:t,title:r,subLabel:a,isNext:i}=e;return n.createElement(o.Z,{className:(0,l.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},a&&n.createElement("div",{className:"pagination-nav__sublabel"},a),n.createElement("div",{className:"pagination-nav__label"},r))}var c=Object.defineProperty,s=Object.defineProperties,m=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,b=(e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&b(e,r,t[r]);if(d)for(var r of d(t))p.call(t,r)&&b(e,r,t[r]);return e},v=(e,t)=>s(e,m(t));function y(e){const{previous:t,next:r}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,a.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&n.createElement(i,v(f({},t),{subLabel:n.createElement(a.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),r&&n.createElement(i,v(f({},r),{subLabel:n.createElement(a.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},180:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(6687),a=r(4923),l=r(5450),o=r(9324),i=r(1780);function c({className:e}){const t=(0,i.E)();return t.badge?n.createElement("span",{className:(0,a.Z)(e,o.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(l.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:t.label}},"Version: {versionLabel}")):null}},9583:(e,t,r)=>{r.d(t,{Z:()=>E});var n=r(6687),a=r(4923),l=r(7718),o=r(4531),i=r(5450),c=r(2443),s=r(9324),m=r(8240),d=r(1780),u=Object.defineProperty,p=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,v=(e,t,r)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const y={unreleased:function({siteTitle:e,versionMetadata:t}){return n.createElement(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:e,versionLabel:n.createElement("b",null,t.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function({siteTitle:e,versionMetadata:t}){return n.createElement(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:e,versionLabel:n.createElement("b",null,t.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function g(e){const t=y[e.versionMetadata.banner];return n.createElement(t,((e,t)=>{for(var r in t||(t={}))b.call(t,r)&&v(e,r,t[r]);if(p)for(var r of p(t))f.call(t,r)&&v(e,r,t[r]);return e})({},e))}function h({versionLabel:e,to:t,onClick:r}){return n.createElement(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:e,latestVersionLink:n.createElement("b",null,n.createElement(o.Z,{to:t,onClick:r},n.createElement(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function O({className:e,versionMetadata:t}){const{siteConfig:{title:r}}=(0,l.Z)(),{pluginId:o}=(0,c.gA)({failfast:!0}),{savePreferredVersionName:i}=(0,m.J)(o),{latestDocSuggestion:d,latestVersionSuggestion:u}=(0,c.Jo)(o),p=null!=d?d:(b=u).docs.find((e=>e.id===b.mainDocId));var b;return n.createElement("div",{className:(0,a.Z)(e,s.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(g,{siteTitle:r,versionMetadata:t})),n.createElement("div",{className:"margin-top--md"},n.createElement(h,{versionLabel:u.label,to:p.path,onClick:()=>i(u.name)})))}function E({className:e}){const t=(0,d.E)();return t.banner?n.createElement(O,{className:e,versionMetadata:t}):null}},4:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(6687),a=r(4923),l=r(5450),o=r(2638);const i="anchorWithStickyNavbar_HesH",c="anchorWithHideOnScrollNavbar_fef0";var s=Object.defineProperty,m=Object.defineProperties,d=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,v=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&f(e,r,t[r]);if(u)for(var r of u(t))b.call(t,r)&&f(e,r,t[r]);return e},y=(e,t)=>m(e,d(t));function g(e){var t=e,{as:r,id:s}=t,m=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&b.call(e,n)&&(r[n]=e[n]);return r})(t,["as","id"]);const{navbar:{hideOnScroll:d}}=(0,o.L)();return"h1"!==r&&s?n.createElement(r,y(v({},m),{className:(0,a.Z)("anchor",d?c:i),id:s}),m.children,n.createElement("a",{className:"hash-link",href:`#${s}`,title:(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):n.createElement(r,y(v({},m),{id:void 0}))}}}]);