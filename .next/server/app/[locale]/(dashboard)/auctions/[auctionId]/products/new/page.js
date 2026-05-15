"use strict";(()=>{var e={};e.id=4999,e.ids=[4999],e.modules={72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},84770:e=>{e.exports=require("crypto")},94080:(e,t,r)=>{r.r(t),r.d(t,{GlobalError:()=>i.Z,__next_app__:()=>p,originalPathname:()=>c,pages:()=>d,routeModule:()=>u,tree:()=>o}),r(7373),r(38721),r(83498),r(11506),r(35866);var a=r(23191),s=r(88716),i=r(48001),n=r(95231),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);r.d(t,l);let o=["",{children:["[locale]",{children:["(dashboard)",{children:["auctions",{children:["[auctionId]",{children:["products",{children:["new",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,7373)),"/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/[locale]/(dashboard)/auctions/[auctionId]/products/new/page.tsx"]}]},{}]},{}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,38721)),"/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/[locale]/(dashboard)/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,83498)),"/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/[locale]/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,11506)),"/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"]}],d=["/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/[locale]/(dashboard)/auctions/[auctionId]/products/new/page.tsx"],c="/[locale]/(dashboard)/auctions/[auctionId]/products/new/page",p={require:r,loadChunk:()=>Promise.resolve()},u=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/[locale]/(dashboard)/auctions/[auctionId]/products/new/page",pathname:"/[locale]/auctions/[auctionId]/products/new",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},83428:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d});var a=r(10326),s=r(17577);let i={sm:"h-10 px-3 text-sm",md:"h-12 px-4 text-base",lg:"h-14 px-5 text-lg"},n={default:"border-gray-200 bg-white focus:border-primary focus:ring-primary/20",outlined:"border-2 border-gray-200 bg-white focus:border-primary focus:ring-primary/20",filled:"border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-primary/20"},l={sm:"text-[24px] asd",md:"text-[20px]",lg:"text-[22px]"},o=(0,s.forwardRef)(({label:e,errorMessage:t,startIcon:r,endIcon:s,size:o="md",variant:d="default",fullWidth:c=!1,helperText:p,required:u,containerClassName:x="",wrapperClassName:m="",className:h="",disabled:g,...b},f)=>{let y=!!t,w=`
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
      ${i[o]}
      ${n[d]}
      ${y?"border-red-500 focus:border-red-500 focus:ring-red-500/20":""}
      ${r?"pl-10":""}
      ${s?"pr-10":""}
      ${h}
    `.trim().replace(/\s+/g," "),v=`
      absolute
      inset-y-0
      left-0
      pl-3
      flex
      items-center
      pointer-events-none
      text-gray-400
      ${y?"text-red-500":""}
      ${g?"text-gray-300":""}
    `.trim().replace(/\s+/g," ");return(0,a.jsxs)("div",{className:`space-y-1.5 ${c?"w-full":""} ${x}`.trim(),children:[e&&(0,a.jsxs)("label",{htmlFor:b.id,className:`
              text-sm
              font-semibold
              ${y?"text-red-600":"text-secondary-green"}
              ${g?"text-gray-400":""}
            `.trim().replace(/\s+/g," "),children:[e,u&&a.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),(0,a.jsxs)("div",{className:`relative ${c?"w-full":""} ${m}`.trim(),children:[r&&a.jsx("div",{className:v,children:a.jsx("div",{className:l[o]+" flex items-center justify-center",children:r})}),a.jsx("input",{ref:f,className:w,disabled:g,"aria-invalid":y,"aria-describedby":t||p?`${b.id||"input"}-${t?"error":"helper"}`:void 0,...b}),s&&a.jsx("div",{className:`
              absolute
              inset-y-0
              right-0
              pr-3
              flex
              items-center
              pointer-events-none
              text-gray-400
              ${y?"text-red-500":""}
              ${g?"text-gray-300":""}
            `.trim().replace(/\s+/g," "),children:a.jsx("div",{className:l[o]+" flex items-center justify-center",children:s})})]}),(t||p)&&(0,a.jsxs)("div",{children:[t&&a.jsx("p",{id:`${b.id||"input"}-error`,className:"text-sm text-red-600",role:"alert",children:t}),!t&&p&&a.jsx("p",{id:`${b.id||"input"}-helper`,className:"text-sm text-gray-500",children:p})]})]})});o.displayName="BaseInput";let d=o},7373:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d});var a=r(19510),s=r(95156),i=r(13949),n=r(40509),l=r(58692),o=r(31022);async function d({params:e}){let{auctionId:t}=await e,r=await (0,o.Z)("auction.detail.tabProducts.createPage"),d=await (0,n.ix)(t),c=d.data?.data?.currency??l.J.Usd;return(0,a.jsxs)("div",{children:[a.jsx("div",{className:"mb-6",children:a.jsx(s.Z,{title:r("title"),description:r("description")})}),a.jsx(i.Z,{auctionId:t,auctionCurrency:c})]})}},43259:(e,t,r)=>{r.d(t,{FH:()=>a,Hg:()=>s,ej:()=>n,wU:()=>l});let a="https://sartkins.eralpsoftware.net",s=e=>{let t=e.headers.get("content-type");return t&&t.includes("application/json")?e.json():t&&t.includes("application/pdf")?e.blob():e.text()},i=async()=>{try{let{cookies:e}=await r.e(1615).then(r.bind(r,71615));return e().getAll().map(e=>`${e.name}=${e.value}`).join("; ")||null}catch(e){return null}},n=async e=>{let t=await i();if(!t)return null;let r=t.split("; ").find(t=>t.startsWith(`${e}=`));return r?r.split("=")[1]:null},l=async e=>{let t={...e,"Content-Type":"application/json"},r=await i();return r?{...t,Cookie:r}:t}},82851:(e,t,r)=>{r.d(t,{k:()=>l});var a=r(43259),s=r(58585);let i=[401,403],n=async()=>{let e="/login";try{let{headers:t}=await Promise.resolve().then(r.bind(r,71615)),a=t().get("referer");if(a){let t=new URL(a),r=t.pathname+t.search;if(r&&"/login"!==r&&r.startsWith("/")&&!r.startsWith("//"))return`${e}?redirectTo=${encodeURIComponent(r)}`}}catch{}return e},l=async(e,t)=>{let r=`${a.FH}${e}`,l=await (0,a.wU)(t.headers),o=t.body instanceof FormData?(()=>{let{"Content-Type":e,...t}=l;return t})():l,d={...t,headers:o},c=t.next??{revalidate:60},p={...d,next:c},u=await fetch(r,p);if(i.includes(u.status)){let e=await (0,a.ej)("user_info");(0,s.redirect)("admin"===e?"/admin":await n())}let x=await (0,a.Hg)(u);return{status:u.status,data:x,headers:u.headers}}}};var t=require("../../../../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[9276,6481,2128,9165,9571,4948,377,1292,7356,5681,8532,4854,5677],()=>r(94080));module.exports=a})();