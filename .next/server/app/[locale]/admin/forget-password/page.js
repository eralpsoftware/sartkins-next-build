(()=>{var e={};e.id=5336,e.ids=[5336],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},84770:e=>{"use strict";e.exports=require("crypto")},93021:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>l.Z,__next_app__:()=>x,originalPathname:()=>c,pages:()=>d,routeModule:()=>p,tree:()=>o}),t(74984),t(83498),t(64784),t(11506),t(35866);var s=t(23191),a=t(88716),l=t(48001),i=t(95231),n={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>i[e]);t.d(r,n);let o=["",{children:["[locale]",{children:["admin",{children:["forget-password",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,74984)),"/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/[locale]/admin/forget-password/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,83498)),"/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/[locale]/layout.tsx"],loading:[()=>Promise.resolve().then(t.bind(t,64784)),"/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/[locale]/loading.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,11506)),"/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,35866,23)),"next/dist/client/components/not-found-error"]}],d=["/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/[locale]/admin/forget-password/page.tsx"],c="/[locale]/admin/forget-password/page",x={require:t,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/[locale]/admin/forget-password/page",pathname:"/[locale]/admin/forget-password",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},75339:(e,r,t)=>{Promise.resolve().then(t.bind(t,24540))},83428:(e,r,t)=>{"use strict";t.d(r,{Z:()=>d});var s=t(10326),a=t(17577);let l={sm:"h-10 px-3 text-sm",md:"h-12 px-4 text-base",lg:"h-14 px-5 text-lg"},i={default:"border-gray-200 bg-white focus:border-primary focus:ring-primary/20",outlined:"border-2 border-gray-200 bg-white focus:border-primary focus:ring-primary/20",filled:"border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-primary/20"},n={sm:"text-[18px]",md:"text-[20px]",lg:"text-[22px]"},o=(0,a.forwardRef)(({label:e,errorMessage:r,startIcon:t,endIcon:a,size:o="md",variant:d="default",fullWidth:c=!1,helperText:x,required:p,containerClassName:m="",wrapperClassName:u="",className:g="",disabled:f,...h},b)=>{let y=!!r,w=`
      w-full
      rounded-lg
      border
      bg-white
      text-slate-900
      placeholder:text-gray-400
      font-display
      focus:outline-none
      transition-shadow
      disabled:bg-gray-50
      disabled:text-gray-500
      disabled:cursor-not-allowed
      disabled:border-gray-200
      ${l[o]}
      ${i[d]}
      ${y?"border-red-500 focus:border-red-500 focus:ring-red-500/20":""}
      ${t?"pl-10":""}
      ${a?"pr-10":""}
      ${g}
    `.trim().replace(/\s+/g," "),j=`
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
    `.trim().replace(/\s+/g," ");return(0,s.jsxs)("div",{className:`space-y-1.5 ${c?"w-full":""} ${m}`.trim(),children:[e&&(0,s.jsxs)("label",{htmlFor:h.id,className:`
              text-sm
              font-semibold
              ${y?"text-red-600":"text-secondary-green"}
              ${f?"text-gray-400":""}
            `.trim().replace(/\s+/g," "),children:[e,p&&s.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),(0,s.jsxs)("div",{className:`relative ${c?"w-full":""} ${u}`.trim(),children:[t&&s.jsx("div",{className:j,children:s.jsx("div",{className:n[o]+" flex items-center justify-center",children:t})}),s.jsx("input",{ref:b,className:w,disabled:f,"aria-invalid":y,"aria-describedby":r||x?`${h.id||"input"}-${r?"error":"helper"}`:void 0,...h}),a&&s.jsx("div",{className:`
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
            `.trim().replace(/\s+/g," "),children:s.jsx("div",{className:n[o]+" flex items-center justify-center",children:a})})]}),(r||x)&&(0,s.jsxs)("div",{children:[r&&s.jsx("p",{id:`${h.id||"input"}-error`,className:"text-sm text-red-600",role:"alert",children:r}),!r&&x&&s.jsx("p",{id:`${h.id||"input"}-helper`,className:"text-sm text-gray-500",children:x})]})]})});o.displayName="BaseInput";let d=o},24540:(e,r,t)=>{"use strict";t.d(r,{default:()=>p});var s=t(10326),a=t(17577),l=t(6162),i=t(58734),n=t(83428),o=t(60494),d=t(79265),c=t(3957),x=t(97161);let p=()=>{let e=(0,l.T)("adminForgetPassword"),{showApiMessageHandler:r}=(0,x.w)(),[t,p]=(0,a.useState)(""),[m,u]=(0,a.useState)(!1),[g,f]=(0,a.useState)(!1),h=async e=>{e.preventDefault(),u(!0),f(!1);try{let{message:e,exceptionMessage:s}=(await (0,d.u1)({email:t})).data;r(e,!1,s),e===c.Z.OK&&f(!0)}catch(e){console.error(e),r(c.Z.INTERNAL_SERVER_ERROR)}finally{u(!1)}};return g?(0,s.jsxs)("div",{className:"w-full max-w-[440px] flex flex-col items-center text-center",children:[(0,s.jsxs)("div",{className:"mb-8",children:[s.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-2",children:e("title")}),s.jsx("p",{className:"text-sm text-gray-500",children:e("successMessage")})]}),s.jsx(o.rU,{href:"/admin",children:s.jsx(i.Z,{variant:"primary",size:"lg",children:e("backToLogin")})})]}):s.jsx("div",{className:"w-full max-w-[440px] flex flex-col items-center",children:(0,s.jsxs)("div",{className:"w-full bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-10",children:[(0,s.jsxs)("div",{className:"mb-8",children:[s.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-2",children:e("title")}),s.jsx("p",{className:"text-sm text-gray-500",children:e("description")})]}),(0,s.jsxs)("form",{className:"space-y-6",onSubmit:h,children:[s.jsx(n.Z,{label:e("fields.email.label"),startIcon:s.jsx("span",{className:"material-symbols-outlined text-[20px]",children:"mail"}),placeholder:e("fields.email.placeholder"),type:"email",value:t,onChange:e=>p(e.target.value)}),s.jsx(i.Z,{variant:"primary",size:"lg",block:!0,endIcon:s.jsx("span",{className:"material-symbols-outlined text-[18px]",children:"arrow_forward"}),type:"submit",loading:m,children:e("buttons.submit")})]}),s.jsx("p",{className:"mt-6 text-center text-sm text-gray-500",children:s.jsx(o.rU,{href:"/admin",className:"text-primary hover:underline",children:e("backToLogin")})})]})})}},97161:(e,r,t)=>{"use strict";t.d(r,{w:()=>n});var s=t(6162),a=t(85999),l=t(17577),i=t(3957);function n(){let e=(0,s.T)("apiErrors"),r=(0,l.useCallback)((r,t)=>{if(!r||r===i.Z.OK)return;let s=t||r;try{let r=e(s);a.A.error(r===s?e("default"):r)}catch{a.A.error(e("default"))}},[e]),t=(0,l.useCallback)(r=>{r?a.A.success(e(r)):a.A.success(e("OK"))},[e]),n=(0,l.useCallback)((e,s=!1,a)=>{if(!e||e===i.Z.OK){if(!s)return;t(e??"")}r(e,a)},[r,t]);return{showApiError:r,showSuccess:t,showApiMessageHandler:n}}},74984:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>i});var s=t(19510);let a=(0,t(68570).createProxy)(String.raw`/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/components/Dashboard/ForgetPassword/ForgetPasswordForm.tsx#default`),l=()=>s.jsx("div",{className:"flex flex-col items-center justify-center w-full",children:s.jsx(a,{})}),i=()=>s.jsx("div",{className:"bg-background-light font-sans antialiased min-h-screen flex items-center justify-center p-6",children:s.jsx(l,{})})}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[9276,2298,1615,9719,9830],()=>t(93021));module.exports=s})();