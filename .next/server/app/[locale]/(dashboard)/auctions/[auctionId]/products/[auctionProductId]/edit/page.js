"use strict";(()=>{var e={};e.id=6071,e.ids=[6071],e.modules={72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},84770:e=>{e.exports=require("crypto")},98950:(e,t,r)=>{r.r(t),r.d(t,{GlobalError:()=>i.Z,__next_app__:()=>u,originalPathname:()=>c,pages:()=>l,routeModule:()=>p,tree:()=>d}),r(75731),r(38721),r(83498),r(11506),r(35866);var a=r(23191),s=r(88716),i=r(48001),n=r(95231),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);r.d(t,o);let d=["",{children:["[locale]",{children:["(dashboard)",{children:["auctions",{children:["[auctionId]",{children:["products",{children:["[auctionProductId]",{children:["edit",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,75731)),"/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/[locale]/(dashboard)/auctions/[auctionId]/products/[auctionProductId]/edit/page.tsx"]}]},{}]},{}]},{}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,38721)),"/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/[locale]/(dashboard)/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,83498)),"/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/[locale]/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,11506)),"/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"]}],l=["/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/[locale]/(dashboard)/auctions/[auctionId]/products/[auctionProductId]/edit/page.tsx"],c="/[locale]/(dashboard)/auctions/[auctionId]/products/[auctionProductId]/edit/page",u={require:r,loadChunk:()=>Promise.resolve()},p=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/[locale]/(dashboard)/auctions/[auctionId]/products/[auctionProductId]/edit/page",pathname:"/[locale]/auctions/[auctionId]/products/[auctionProductId]/edit",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},83428:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var a=r(10326),s=r(17577);let i={sm:"h-10 px-3 text-sm",md:"h-12 px-4 text-base",lg:"h-14 px-5 text-lg"},n={default:"border-gray-200 bg-white focus:border-primary focus:ring-primary/20",outlined:"border-2 border-gray-200 bg-white focus:border-primary focus:ring-primary/20",filled:"border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-primary/20"},o={sm:"text-[24px] asd",md:"text-[20px]",lg:"text-[22px]"},d=(0,s.forwardRef)(({label:e,errorMessage:t,startIcon:r,endIcon:s,size:d="md",variant:l="default",fullWidth:c=!1,helperText:u,required:p,containerClassName:x="",wrapperClassName:m="",className:h="",disabled:f,...g},b)=>{let y=!!t,w=`
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
      ${i[d]}
      ${n[l]}
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
      ${f?"text-gray-300":""}
    `.trim().replace(/\s+/g," ");return(0,a.jsxs)("div",{className:`space-y-1.5 ${c?"w-full":""} ${x}`.trim(),children:[e&&(0,a.jsxs)("label",{htmlFor:g.id,className:`
              text-sm
              font-semibold
              ${y?"text-red-600":"text-secondary-green"}
              ${f?"text-gray-400":""}
            `.trim().replace(/\s+/g," "),children:[e,p&&a.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),(0,a.jsxs)("div",{className:`relative ${c?"w-full":""} ${m}`.trim(),children:[r&&a.jsx("div",{className:v,children:a.jsx("div",{className:o[d]+" flex items-center justify-center",children:r})}),a.jsx("input",{ref:b,className:w,disabled:f,"aria-invalid":y,"aria-describedby":t||u?`${g.id||"input"}-${t?"error":"helper"}`:void 0,...g}),s&&a.jsx("div",{className:`
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
            `.trim().replace(/\s+/g," "),children:a.jsx("div",{className:o[d]+" flex items-center justify-center",children:s})})]}),(t||u)&&(0,a.jsxs)("div",{children:[t&&a.jsx("p",{id:`${g.id||"input"}-error`,className:"text-sm text-red-600",role:"alert",children:t}),!t&&u&&a.jsx("p",{id:`${g.id||"input"}-helper`,className:"text-sm text-gray-500",children:u})]})]})});d.displayName="BaseInput";let l=d},75731:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var a=r(19510),s=r(95156),i=r(13949),n=r(40509),o=r(71713),d=r(58692),l=r(31022),c=r(58585);async function u({params:e}){let{auctionId:t,auctionProductId:r}=await e,u=await (0,l.Z)("auction.detail.tabProducts.createPage"),p=await (0,o.fI)(r,{next:{revalidate:0}});if(!p.data?.isSuccess||!p.data.data)return(0,c.notFound)();let x=p.data.data;if(x.auctionId!==t)return(0,c.notFound)();let m=await (0,n.ix)(t),h=m.data?.data?.currency??d.J.Usd;return(0,a.jsxs)("div",{children:[a.jsx("div",{className:"mb-6",children:a.jsx(s.Z,{title:u("editTitle"),description:u("editDescription")})}),a.jsx(i.Z,{auctionId:t,auctionCurrency:h,auctionProduct:x})]})}},43259:(e,t,r)=>{r.d(t,{FH:()=>a,Hg:()=>s,ej:()=>n,wU:()=>o});let a="https://sartkins.eralpsoftware.net",s=e=>{let t=e.headers.get("content-type");return t&&t.includes("application/json")?e.json():t&&t.includes("application/pdf")?e.blob():e.text()},i=async()=>{try{let{cookies:e}=await r.e(1615).then(r.bind(r,71615));return e().getAll().map(e=>`${e.name}=${e.value}`).join("; ")||null}catch(e){return null}},n=async e=>{let t=await i();if(!t)return null;let r=t.split("; ").find(t=>t.startsWith(`${e}=`));return r?r.split("=")[1]:null},o=async e=>{let t={...e,"Content-Type":"application/json"},r=await i();return r?{...t,Cookie:r}:t}},82851:(e,t,r)=>{r.d(t,{k:()=>o});var a=r(43259),s=r(58585);let i=[401,403],n=async()=>{let e="/login";try{let{headers:t}=await Promise.resolve().then(r.bind(r,71615)),a=t().get("referer");if(a){let t=new URL(a),r=t.pathname+t.search;if(r&&"/login"!==r&&r.startsWith("/")&&!r.startsWith("//"))return`${e}?redirectTo=${encodeURIComponent(r)}`}}catch{}return e},o=async(e,t)=>{let r=`${a.FH}${e}`,o=await (0,a.wU)(t.headers),d=t.body instanceof FormData?(()=>{let{"Content-Type":e,...t}=o;return t})():o,l={...t,headers:d},c=t.next??{revalidate:60},u={...l,next:c},p=await fetch(r,u);if(i.includes(p.status)){let e=await (0,a.ej)("user_info");(0,s.redirect)("admin"===e?"/admin":await n())}let x=await (0,a.Hg)(p);return{status:p.status,data:x,headers:p.headers}}},71713:(e,t,r)=>{r.d(t,{fI:()=>i});var a=r(82851);let s=e=>`/api/AuctionProduct/GetById/${e}`,i=async(e,t)=>(0,a.k)(s(e),{...t,method:"GET"})}};var t=require("../../../../../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[9276,6481,2128,9165,9571,4948,377,1292,7356,5681,8532,4854,5677],()=>r(98950));module.exports=a})();