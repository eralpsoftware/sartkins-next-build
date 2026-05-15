"use strict";(()=>{var e={};e.id=9869,e.ids=[9869],e.modules={72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},84770:e=>{e.exports=require("crypto")},6005:e=>{e.exports=require("node:crypto")},49411:e=>{e.exports=require("node:path")},97742:e=>{e.exports=require("node:process")},41041:e=>{e.exports=require("node:url")},18320:(e,t,r)=>{r.r(t),r.d(t,{GlobalError:()=>n.Z,__next_app__:()=>c,originalPathname:()=>p,pages:()=>d,routeModule:()=>u,tree:()=>o}),r(80014),r(38721),r(83498),r(11506),r(35866);var a=r(23191),s=r(88716),n=r(48001),i=r(95231),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let o=["",{children:["[locale]",{children:["(dashboard)",{children:["products",{children:["[productId]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,80014)),"/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/[locale]/(dashboard)/products/[productId]/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,38721)),"/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/[locale]/(dashboard)/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,83498)),"/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/[locale]/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,11506)),"/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"]}],d=["/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/[locale]/(dashboard)/products/[productId]/page.tsx"],p="/[locale]/(dashboard)/products/[productId]/page",c={require:r,loadChunk:()=>Promise.resolve()},u=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/[locale]/(dashboard)/products/[productId]/page",pathname:"/[locale]/products/[productId]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},83428:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d});var a=r(10326),s=r(17577);let n={sm:"h-10 px-3 text-sm",md:"h-12 px-4 text-base",lg:"h-14 px-5 text-lg"},i={default:"border-gray-200 bg-white focus:border-primary focus:ring-primary/20",outlined:"border-2 border-gray-200 bg-white focus:border-primary focus:ring-primary/20",filled:"border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-primary/20"},l={sm:"text-[24px] asd",md:"text-[20px]",lg:"text-[22px]"},o=(0,s.forwardRef)(({label:e,errorMessage:t,startIcon:r,endIcon:s,size:o="md",variant:d="default",fullWidth:p=!1,helperText:c,required:u,containerClassName:x="",wrapperClassName:m="",className:f="",disabled:h,...g},b)=>{let y=!!t,w=`
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
      ${n[o]}
      ${i[d]}
      ${y?"border-red-500 focus:border-red-500 focus:ring-red-500/20":""}
      ${r?"pl-10":""}
      ${s?"pr-10":""}
      ${f}
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
      ${h?"text-gray-300":""}
    `.trim().replace(/\s+/g," ");return(0,a.jsxs)("div",{className:`space-y-1.5 ${p?"w-full":""} ${x}`.trim(),children:[e&&(0,a.jsxs)("label",{htmlFor:g.id,className:`
              text-sm
              font-semibold
              ${y?"text-red-600":"text-secondary-green"}
              ${h?"text-gray-400":""}
            `.trim().replace(/\s+/g," "),children:[e,u&&a.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),(0,a.jsxs)("div",{className:`relative ${p?"w-full":""} ${m}`.trim(),children:[r&&a.jsx("div",{className:v,children:a.jsx("div",{className:l[o]+" flex items-center justify-center",children:r})}),a.jsx("input",{ref:b,className:w,disabled:h,"aria-invalid":y,"aria-describedby":t||c?`${g.id||"input"}-${t?"error":"helper"}`:void 0,...g}),s&&a.jsx("div",{className:`
              absolute
              inset-y-0
              right-0
              pr-3
              flex
              items-center
              pointer-events-none
              text-gray-400
              ${y?"text-red-500":""}
              ${h?"text-gray-300":""}
            `.trim().replace(/\s+/g," "),children:a.jsx("div",{className:l[o]+" flex items-center justify-center",children:s})})]}),(t||c)&&(0,a.jsxs)("div",{children:[t&&a.jsx("p",{id:`${g.id||"input"}-error`,className:"text-sm text-red-600",role:"alert",children:t}),!t&&c&&a.jsx("p",{id:`${g.id||"input"}-helper`,className:"text-sm text-gray-500",children:c})]})]})});o.displayName="BaseInput";let d=o},30607:(e,t,r)=>{r.d(t,{OH:()=>s,fy:()=>o,zk:()=>l});var a=r(21651);function s(e,t){return e?.length?e.find(e=>e.languageCode===t)?.value??"":""}let n=e=>e.toLowerCase().startsWith("en")?a.r.EN:a.r.TR,i=(e,t)=>{if(!e?.length)return"";if(t){let r=n(t),a=e.find(e=>e.languageCode===r);if(a?.value)return a.value}return e[0]?.value??""};function l(e,t){return e?i(e.localizedNames,t):""}function o(e,t){return e?i(e.localizedDescriptions,t):""}},80014:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var a=r(19510),s=r(62926),n=r(19986),i=r(58585);async function l({params:e}){let{productId:t}=await e,r=await (0,n.EC)(t,{next:{revalidate:0}});if(!r.data?.isSuccess||!r.data.data)return(0,i.notFound)();let l=r.data.data;return a.jsx(s.Z,{product:l,routePrefix:"/"})}},43259:(e,t,r)=>{r.d(t,{FH:()=>a,Hg:()=>s,ej:()=>i,wU:()=>l});let a="https://sartkins.eralpsoftware.net",s=e=>{let t=e.headers.get("content-type");return t&&t.includes("application/json")?e.json():t&&t.includes("application/pdf")?e.blob():e.text()},n=async()=>{try{let{cookies:e}=await r.e(1615).then(r.bind(r,71615));return e().getAll().map(e=>`${e.name}=${e.value}`).join("; ")||null}catch(e){return null}},i=async e=>{let t=await n();if(!t)return null;let r=t.split("; ").find(t=>t.startsWith(`${e}=`));return r?r.split("=")[1]:null},l=async e=>{let t={...e,"Content-Type":"application/json"},r=await n();return r?{...t,Cookie:r}:t}},82851:(e,t,r)=>{r.d(t,{k:()=>l});var a=r(43259),s=r(58585);let n=[401,403],i=async()=>{let e="/login";try{let{headers:t}=await Promise.resolve().then(r.bind(r,71615)),a=t().get("referer");if(a){let t=new URL(a),r=t.pathname+t.search;if(r&&"/login"!==r&&r.startsWith("/")&&!r.startsWith("//"))return`${e}?redirectTo=${encodeURIComponent(r)}`}}catch{}return e},l=async(e,t)=>{let r=`${a.FH}${e}`,l=await (0,a.wU)(t.headers),o=t.body instanceof FormData?(()=>{let{"Content-Type":e,...t}=l;return t})():l,d={...t,headers:o},p=t.next??{revalidate:60},c={...d,next:p},u=await fetch(r,c);if(n.includes(u.status)){let e=await (0,a.ej)("user_info");(0,s.redirect)("admin"===e?"/admin":await i())}let x=await (0,a.Hg)(u);return{status:u.status,data:x,headers:u.headers}}}};var t=require("../../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[9276,6481,2128,9165,9571,4948,6226,739,291,377,1292,7356,5681,8519,8532,4854,8353,4012],()=>r(18320));module.exports=a})();