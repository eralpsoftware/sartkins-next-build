(()=>{var e={};e.id=2488,e.ids=[2488],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},84770:e=>{"use strict";e.exports=require("crypto")},6005:e=>{"use strict";e.exports=require("node:crypto")},49411:e=>{"use strict";e.exports=require("node:path")},97742:e=>{"use strict";e.exports=require("node:process")},41041:e=>{"use strict";e.exports=require("node:url")},31087:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>i.Z,__next_app__:()=>p,originalPathname:()=>c,pages:()=>d,routeModule:()=>u,tree:()=>n}),t(12079),t(38721),t(83498),t(11506),t(35866);var s=t(23191),a=t(88716),i=t(48001),l=t(95231),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);t.d(r,o);let n=["",{children:["[locale]",{children:["(dashboard)",{children:["products",{children:["new",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,12079)),"/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/[locale]/(dashboard)/products/new/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,38721)),"/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/[locale]/(dashboard)/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,83498)),"/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/[locale]/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,11506)),"/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,35866,23)),"next/dist/client/components/not-found-error"]}],d=["/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/[locale]/(dashboard)/products/new/page.tsx"],c="/[locale]/(dashboard)/products/new/page",p={require:t,loadChunk:()=>Promise.resolve()},u=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/[locale]/(dashboard)/products/new/page",pathname:"/[locale]/products/new",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:n}})},24367:(e,r,t)=>{Promise.resolve().then(t.bind(t,73007))},73007:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>o});var s=t(10326);t(17577);var a=t(6162),i=t(96327),l=t(49791);function o(){let e=(0,a.T)("product.page"),r=(0,a.T)("product.form");return(0,s.jsxs)("div",{children:[s.jsx("div",{className:"mb-6",children:s.jsx(i.Z,{title:r("title.create"),description:e("form.description.create")||e("description")})}),s.jsx(l.default,{routePrefix:"/"})]})}},83428:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>d});var s=t(10326),a=t(17577);let i={sm:"h-10 px-3 text-sm",md:"h-12 px-4 text-base",lg:"h-14 px-5 text-lg"},l={default:"border-gray-200 bg-white focus:border-primary focus:ring-primary/20",outlined:"border-2 border-gray-200 bg-white focus:border-primary focus:ring-primary/20",filled:"border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-primary/20"},o={sm:"text-[24px] asd",md:"text-[20px]",lg:"text-[22px]"},n=(0,a.forwardRef)(({label:e,errorMessage:r,startIcon:t,endIcon:a,size:n="md",variant:d="default",fullWidth:c=!1,helperText:p,required:u,containerClassName:x="",wrapperClassName:m="",className:f="",disabled:g,...h},b)=>{let y=!!r,v=`
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
      ${f}
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
      ${g?"text-gray-300":""}
    `.trim().replace(/\s+/g," ");return(0,s.jsxs)("div",{className:`space-y-1.5 ${c?"w-full":""} ${x}`.trim(),children:[e&&(0,s.jsxs)("label",{htmlFor:h.id,className:`
              text-sm
              font-semibold
              ${y?"text-red-600":"text-secondary-green"}
              ${g?"text-gray-400":""}
            `.trim().replace(/\s+/g," "),children:[e,u&&s.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),(0,s.jsxs)("div",{className:`relative ${c?"w-full":""} ${m}`.trim(),children:[t&&s.jsx("div",{className:w,children:s.jsx("div",{className:o[n]+" flex items-center justify-center",children:t})}),s.jsx("input",{ref:b,className:v,disabled:g,"aria-invalid":y,"aria-describedby":r||p?`${h.id||"input"}-${r?"error":"helper"}`:void 0,...h}),a&&s.jsx("div",{className:`
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
            `.trim().replace(/\s+/g," "),children:s.jsx("div",{className:o[n]+" flex items-center justify-center",children:a})})]}),(r||p)&&(0,s.jsxs)("div",{children:[r&&s.jsx("p",{id:`${h.id||"input"}-error`,className:"text-sm text-red-600",role:"alert",children:r}),!r&&p&&s.jsx("p",{id:`${h.id||"input"}-helper`,className:"text-sm text-gray-500",children:p})]})]})});n.displayName="BaseInput";let d=n},96327:(e,r,t)=>{"use strict";t.d(r,{Z:()=>a});var s=t(10326);let a=({title:e,description:r})=>(0,s.jsxs)("div",{children:[s.jsx("h1",{className:"text-2xl font-bold text-slate-900 mb-2",children:e}),s.jsx("p",{className:"text-gray-600 text-sm",children:r})]})},30607:(e,r,t)=>{"use strict";t.d(r,{OH:()=>a,fy:()=>n,zk:()=>o});var s=t(21651);function a(e,r){return e?.length?e.find(e=>e.languageCode===r)?.value??"":""}let i=e=>e.toLowerCase().startsWith("en")?s.r.EN:s.r.TR,l=(e,r)=>{if(!e?.length)return"";if(r){let t=i(r),s=e.find(e=>e.languageCode===t);if(s?.value)return s.value}return e[0]?.value??""};function o(e,r){return e?l(e.localizedNames,r):""}function n(e,r){return e?l(e.localizedDescriptions,r):""}},12079:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>s});let s=(0,t(68570).createProxy)(String.raw`/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/[locale]/(dashboard)/products/new/page.tsx#default`)}};var r=require("../../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[9276,6481,2128,9165,9571,4948,739,377,1292,7356,9791],()=>t(31087));module.exports=s})();