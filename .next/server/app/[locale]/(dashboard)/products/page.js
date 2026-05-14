"use strict";(()=>{var e={};e.id=7319,e.ids=[7319],e.modules={72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},84770:e=>{e.exports=require("crypto")},32843:(e,r,t)=>{t.r(r),t.d(r,{GlobalError:()=>i.Z,__next_app__:()=>c,originalPathname:()=>p,pages:()=>d,routeModule:()=>u,tree:()=>n}),t(73909),t(38721),t(83498),t(64784),t(11506),t(35866);var s=t(23191),a=t(88716),i=t(48001),l=t(95231),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);t.d(r,o);let n=["",{children:["[locale]",{children:["(dashboard)",{children:["products",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,73909)),"/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/[locale]/(dashboard)/products/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,38721)),"/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/[locale]/(dashboard)/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,83498)),"/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/[locale]/layout.tsx"],loading:[()=>Promise.resolve().then(t.bind(t,64784)),"/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/[locale]/loading.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,11506)),"/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,35866,23)),"next/dist/client/components/not-found-error"]}],d=["/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/[locale]/(dashboard)/products/page.tsx"],p="/[locale]/(dashboard)/products/page",c={require:t,loadChunk:()=>Promise.resolve()},u=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/[locale]/(dashboard)/products/page",pathname:"/[locale]/products",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:n}})},83428:(e,r,t)=>{t.r(r),t.d(r,{default:()=>d});var s=t(10326),a=t(17577);let i={sm:"h-10 px-3 text-sm",md:"h-12 px-4 text-base",lg:"h-14 px-5 text-lg"},l={default:"border-gray-200 bg-white focus:border-primary focus:ring-primary/20",outlined:"border-2 border-gray-200 bg-white focus:border-primary focus:ring-primary/20",filled:"border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-primary/20"},o={sm:"text-[24px] asd",md:"text-[20px]",lg:"text-[22px]"},n=(0,a.forwardRef)(({label:e,errorMessage:r,startIcon:t,endIcon:a,size:n="md",variant:d="default",fullWidth:p=!1,helperText:c,required:u,containerClassName:x="",wrapperClassName:m="",className:g="",disabled:f,...b},h)=>{let y=!!r,v=`
      w-full
      rounded-lg
      border
      bg-white
      text-slate-900
      placeholder:text-gray-400
      font-display
      text-lg
      font-semibold
      focus:outline-none
      transition-shadow
      disabled:bg-gray-50
      disabled:text-gray-500
      disabled:cursor-not-allowed
      disabled:border-gray-200
      ${i[n]}
      ${l[d]}
      ${y?"border-red-500 focus:border-red-500 focus:ring-red-500/20":""}
      ${t?"pl-10":""}
      ${a?"pr-10":""}
      ${g}
    `.trim().replace(/\s+/g," "),w=`
      absolute
      inset-y-0
      left-0
      pl-3
      flex
      items-center
      pointer-events-none
      text-gray-400
      ${y?"text-red-500":""}
      ${f?"text-gray-300":""}
    `.trim().replace(/\s+/g," ");return(0,s.jsxs)("div",{className:`space-y-1.5 ${p?"w-full":""} ${x}`.trim(),children:[e&&(0,s.jsxs)("label",{htmlFor:b.id,className:`
              text-sm
              font-semibold
              ${y?"text-red-600":"text-secondary-green"}
              ${f?"text-gray-400":""}
            `.trim().replace(/\s+/g," "),children:[e,u&&s.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),(0,s.jsxs)("div",{className:`relative ${p?"w-full":""} ${m}`.trim(),children:[t&&s.jsx("div",{className:w,children:s.jsx("div",{className:o[n]+" flex items-center justify-center",children:t})}),s.jsx("input",{ref:h,className:v,disabled:f,"aria-invalid":y,"aria-describedby":r||c?`${b.id||"input"}-${r?"error":"helper"}`:void 0,...b}),a&&s.jsx("div",{className:`
              absolute
              inset-y-0
              right-0
              pr-3
              flex
              items-center
              pointer-events-none
              text-gray-400
              ${y?"text-red-500":""}
              ${f?"text-gray-300":""}
            `.trim().replace(/\s+/g," "),children:s.jsx("div",{className:o[n]+" flex items-center justify-center",children:a})})]}),(r||c)&&(0,s.jsxs)("div",{children:[r&&s.jsx("p",{id:`${b.id||"input"}-error`,className:"text-sm text-red-600",role:"alert",children:r}),!r&&c&&s.jsx("p",{id:`${b.id||"input"}-helper`,className:"text-sm text-gray-500",children:c})]})]})});n.displayName="BaseInput";let d=n},30607:(e,r,t)=>{t.d(r,{OH:()=>a,fy:()=>n,zk:()=>o});var s=t(21651);function a(e,r){return e?.length?e.find(e=>e.languageCode===r)?.value??"":""}let i=e=>e.toLowerCase().startsWith("en")?s.r.EN:s.r.TR,l=(e,r)=>{if(!e?.length)return"";if(r){let t=i(r),s=e.find(e=>e.languageCode===t);if(s?.value)return s.value}return e[0]?.value??""};function o(e,r){return e?l(e.localizedNames,r):""}function n(e,r){return e?l(e.localizedDescriptions,r):""}},21651:(e,r,t)=>{t.d(r,{r:()=>s});let s={TR:"TR",EN:"EN"}},12249:(e,r,t)=>{t.d(r,{l:()=>s});let s={Draft:"Draft",UnderReview:"UnderReview",Approved:"Approved",Rejected:"Rejected"}},64317:(e,r,t)=>{t.d(r,{o:()=>s});let s={Unique:"Unique",Rare:"Rare",Edition:"Edition",OpenEdition:"OpenEdition"}},73909:(e,r,t)=>{t.r(r),t.d(r,{default:()=>o});var s=t(19510),a=t(31022),i=t(95156),l=t(95255);async function o({params:e}){let r=await (0,a.Z)("product.page");return(0,s.jsxs)("div",{children:[s.jsx("div",{className:"mb-6",children:s.jsx(i.Z,{title:r("title"),description:r("description")})}),s.jsx(l.Z,{routePrefix:"/"})]})}}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[9276,6481,2128,9165,9571,4948,1662,7356,5681,485],()=>t(32843));module.exports=s})();