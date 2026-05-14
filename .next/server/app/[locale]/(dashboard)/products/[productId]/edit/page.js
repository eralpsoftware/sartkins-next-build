(()=>{var e={};e.id=3315,e.ids=[3315],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},84770:e=>{"use strict";e.exports=require("crypto")},6005:e=>{"use strict";e.exports=require("node:crypto")},49411:e=>{"use strict";e.exports=require("node:path")},97742:e=>{"use strict";e.exports=require("node:process")},41041:e=>{"use strict";e.exports=require("node:url")},44270:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.Z,__next_app__:()=>u,originalPathname:()=>c,pages:()=>d,routeModule:()=>p,tree:()=>l}),r(43141),r(38721),r(83498),r(64784),r(11506),r(35866);var s=r(23191),a=r(88716),i=r(48001),n=r(95231),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);r.d(t,o);let l=["",{children:["[locale]",{children:["(dashboard)",{children:["products",{children:["[productId]",{children:["edit",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,43141)),"/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/[locale]/(dashboard)/products/[productId]/edit/page.tsx"]}]},{}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,38721)),"/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/[locale]/(dashboard)/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,83498)),"/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/[locale]/layout.tsx"],loading:[()=>Promise.resolve().then(r.bind(r,64784)),"/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/[locale]/loading.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,11506)),"/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"]}],d=["/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/[locale]/(dashboard)/products/[productId]/edit/page.tsx"],c="/[locale]/(dashboard)/products/[productId]/edit/page",u={require:r,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/[locale]/(dashboard)/products/[productId]/edit/page",pathname:"/[locale]/products/[productId]/edit",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},7829:(e,t,r)=>{Promise.resolve().then(r.bind(r,49791))},83428:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var s=r(10326),a=r(17577);let i={sm:"h-10 px-3 text-sm",md:"h-12 px-4 text-base",lg:"h-14 px-5 text-lg"},n={default:"border-gray-200 bg-white focus:border-primary focus:ring-primary/20",outlined:"border-2 border-gray-200 bg-white focus:border-primary focus:ring-primary/20",filled:"border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-primary/20"},o={sm:"text-[24px] asd",md:"text-[20px]",lg:"text-[22px]"},l=(0,a.forwardRef)(({label:e,errorMessage:t,startIcon:r,endIcon:a,size:l="md",variant:d="default",fullWidth:c=!1,helperText:u,required:p,containerClassName:m="",wrapperClassName:x="",className:h="",disabled:f,...g},b)=>{let y=!!t,w=`
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
      ${i[l]}
      ${n[d]}
      ${y?"border-red-500 focus:border-red-500 focus:ring-red-500/20":""}
      ${r?"pl-10":""}
      ${a?"pr-10":""}
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
    `.trim().replace(/\s+/g," ");return(0,s.jsxs)("div",{className:`space-y-1.5 ${c?"w-full":""} ${m}`.trim(),children:[e&&(0,s.jsxs)("label",{htmlFor:g.id,className:`
              text-sm
              font-semibold
              ${y?"text-red-600":"text-secondary-green"}
              ${f?"text-gray-400":""}
            `.trim().replace(/\s+/g," "),children:[e,p&&s.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),(0,s.jsxs)("div",{className:`relative ${c?"w-full":""} ${x}`.trim(),children:[r&&s.jsx("div",{className:v,children:s.jsx("div",{className:o[l]+" flex items-center justify-center",children:r})}),s.jsx("input",{ref:b,className:w,disabled:f,"aria-invalid":y,"aria-describedby":t||u?`${g.id||"input"}-${t?"error":"helper"}`:void 0,...g}),a&&s.jsx("div",{className:`
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
            `.trim().replace(/\s+/g," "),children:s.jsx("div",{className:o[l]+" flex items-center justify-center",children:a})})]}),(t||u)&&(0,s.jsxs)("div",{children:[t&&s.jsx("p",{id:`${g.id||"input"}-error`,className:"text-sm text-red-600",role:"alert",children:t}),!t&&u&&s.jsx("p",{id:`${g.id||"input"}-helper`,className:"text-sm text-gray-500",children:u})]})]})});l.displayName="BaseInput";let d=l},30607:(e,t,r)=>{"use strict";r.d(t,{OH:()=>a,fy:()=>l,zk:()=>o});var s=r(21651);function a(e,t){return e?.length?e.find(e=>e.languageCode===t)?.value??"":""}let i=e=>e.toLowerCase().startsWith("en")?s.r.EN:s.r.TR,n=(e,t)=>{if(!e?.length)return"";if(t){let r=i(t),s=e.find(e=>e.languageCode===r);if(s?.value)return s.value}return e[0]?.value??""};function o(e,t){return e?n(e.localizedNames,t):""}function l(e,t){return e?n(e.localizedDescriptions,t):""}},43141:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var s=r(19510),a=r(95156),i=r(19441),n=r(19986),o=r(31022),l=r(58585);async function d({params:e}){let{productId:t}=await e,r=await (0,o.Z)("product.page"),d=await (0,o.Z)("product.form"),c=await (0,n.EC)(t);if(!c.data?.isSuccess||!c.data.data)return(0,l.notFound)();let u=c.data.data;return(0,s.jsxs)("div",{children:[s.jsx("div",{className:"mb-6",children:s.jsx(a.Z,{title:d("title.edit"),description:r("form.description.edit")||r("description")})}),s.jsx(i.Z,{product:u,routePrefix:"/"})]})}},95156:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var s=r(19510);let a=({title:e,description:t})=>(0,s.jsxs)("div",{children:[s.jsx("h1",{className:"text-2xl font-bold text-slate-900 mb-2",children:e}),s.jsx("p",{className:"text-gray-600 text-sm",children:t})]})},19441:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});let s=(0,r(68570).createProxy)(String.raw`/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/components/MyStore/Product/FormProduct.tsx#default`)},43259:(e,t,r)=>{"use strict";r.d(t,{FH:()=>s,Hg:()=>a,ej:()=>n,wU:()=>o});let s="https://sartkins.eralpsoftware.net",a=e=>{let t=e.headers.get("content-type");return t&&t.includes("application/json")?e.json():t&&t.includes("application/pdf")?e.blob():e.text()},i=async()=>{try{let{cookies:e}=await r.e(1615).then(r.bind(r,71615));return e().getAll().map(e=>`${e.name}=${e.value}`).join("; ")||null}catch(e){return null}},n=async e=>{let t=await i();if(!t)return null;let r=t.split("; ").find(t=>t.startsWith(`${e}=`));return r?r.split("=")[1]:null},o=async e=>{let t={...e,"Content-Type":"application/json"},r=await i();return r?{...t,Cookie:r}:t}},82851:(e,t,r)=>{"use strict";r.d(t,{k:()=>o});var s=r(43259),a=r(58585);let i=[401,403],n=async()=>{let e="/login";try{let{headers:t}=await Promise.resolve().then(r.bind(r,71615)),s=t().get("referer");if(s){let t=new URL(s),r=t.pathname+t.search;if(r&&"/login"!==r&&r.startsWith("/")&&!r.startsWith("//"))return`${e}?redirectTo=${encodeURIComponent(r)}`}}catch{}return e},o=async(e,t)=>{let r=`${s.FH}${e}`,o=await (0,s.wU)(t.headers),l=t.body instanceof FormData?(()=>{let{"Content-Type":e,...t}=o;return t})():o,d={...t,headers:l},c=t.next??{revalidate:60},u={...d,next:c},p=await fetch(r,u);if(i.includes(p.status)){let e=await (0,s.ej)("user_info");(0,a.redirect)("admin"===e?"/admin":await n())}let m=await (0,s.Hg)(p);return{status:p.status,data:m,headers:p.headers}}},19986:(e,t,r)=>{"use strict";r.d(t,{Ai:()=>o,EC:()=>i});var s=r(82851);let a=e=>`/api/Product/GetById/${e}`,i=async(e,t)=>(0,s.k)(a(e),{...t,method:"GET"}),n=()=>"/api/Product/GetAll",o=async(e,t)=>(0,s.k)(n(),{...t,method:"POST",headers:{"Content-Type":"application/json",...t?.headers},body:JSON.stringify(e)})},31022:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var s=r(71159),a=r(27432),i=r(11859),n=(0,s.cache)(function(e,t){return function({_cache:e=(0,i.d)(),_formatters:t=(0,i.b)(e),getMessageFallback:r=i.f,messages:s,namespace:a,onError:n=i.g,...o}){return function({messages:e,namespace:t,...r},s){return e=e["!"],t=(0,i.r)(t,"!"),(0,i.e)({...r,messages:e,namespace:t})}({...o,onError:n,cache:e,formatters:t,getMessageFallback:r,messages:{"!":s},namespace:a?`!.${a}`:"!"},0)}({...e,namespace:t})}),o=(0,s.cache)(async function(e){let t,r;return"string"==typeof e?t=e:e&&(r=e.locale,t=e.namespace),n(await (0,a.Z)(r),t)})}};var t=require("../../../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[9276,6481,2128,9165,9571,4948,739,1662,1292,7356,9791],()=>r(44270));module.exports=s})();