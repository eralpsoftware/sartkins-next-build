(()=>{var e={};e.id=7199,e.ids=[7199],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},84770:e=>{"use strict";e.exports=require("crypto")},90699:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>l.Z,__next_app__:()=>p,originalPathname:()=>c,pages:()=>o,routeModule:()=>x,tree:()=>d}),t(13812),t(83498),t(64784),t(11506),t(35866);var r=t(23191),a=t(88716),l=t(48001),i=t(95231),n={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>i[e]);t.d(s,n);let d=["",{children:["[locale]",{children:["admin",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,13812)),"/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/[locale]/admin/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,83498)),"/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/[locale]/layout.tsx"],loading:[()=>Promise.resolve().then(t.bind(t,64784)),"/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/[locale]/loading.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,11506)),"/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,35866,23)),"next/dist/client/components/not-found-error"]}],o=["/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/[locale]/admin/page.tsx"],c="/[locale]/admin/page",p={require:t,loadChunk:()=>Promise.resolve()},x=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/[locale]/admin/page",pathname:"/[locale]/admin",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},46534:(e,s,t)=>{Promise.resolve().then(t.bind(t,15396))},83428:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>o});var r=t(10326),a=t(17577);let l={sm:"h-10 px-3 text-sm",md:"h-12 px-4 text-base",lg:"h-14 px-5 text-lg"},i={default:"border-gray-200 bg-white focus:border-primary focus:ring-primary/20",outlined:"border-2 border-gray-200 bg-white focus:border-primary focus:ring-primary/20",filled:"border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-primary/20"},n={sm:"text-[24px] asd",md:"text-[20px]",lg:"text-[22px]"},d=(0,a.forwardRef)(({label:e,errorMessage:s,startIcon:t,endIcon:a,size:d="md",variant:o="default",fullWidth:c=!1,helperText:p,required:x,containerClassName:m="",wrapperClassName:u="",className:g="",disabled:f,...h},b)=>{let y=!!s,j=`
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
      ${l[d]}
      ${i[o]}
      ${y?"border-red-500 focus:border-red-500 focus:ring-red-500/20":""}
      ${t?"pl-10":""}
      ${a?"pr-10":""}
      ${g}
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
    `.trim().replace(/\s+/g," ");return(0,r.jsxs)("div",{className:`space-y-1.5 ${c?"w-full":""} ${m}`.trim(),children:[e&&(0,r.jsxs)("label",{htmlFor:h.id,className:`
              text-sm
              font-semibold
              ${y?"text-red-600":"text-secondary-green"}
              ${f?"text-gray-400":""}
            `.trim().replace(/\s+/g," "),children:[e,x&&r.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),(0,r.jsxs)("div",{className:`relative ${c?"w-full":""} ${u}`.trim(),children:[t&&r.jsx("div",{className:v,children:r.jsx("div",{className:n[d]+" flex items-center justify-center",children:t})}),r.jsx("input",{ref:b,className:j,disabled:f,"aria-invalid":y,"aria-describedby":s||p?`${h.id||"input"}-${s?"error":"helper"}`:void 0,...h}),a&&r.jsx("div",{className:`
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
            `.trim().replace(/\s+/g," "),children:r.jsx("div",{className:n[d]+" flex items-center justify-center",children:a})})]}),(s||p)&&(0,r.jsxs)("div",{children:[s&&r.jsx("p",{id:`${h.id||"input"}-error`,className:"text-sm text-red-600",role:"alert",children:s}),!s&&p&&r.jsx("p",{id:`${h.id||"input"}-helper`,className:"text-sm text-gray-500",children:p})]})]})});d.displayName="BaseInput";let o=d},15396:(e,s,t)=>{"use strict";t.d(s,{default:()=>m});var r=t(10326),a=t(6162),l=t(83428),i=t(58734),n=t(41292),d=t(17577),o=t(79265),c=t(97161),p=t(60494),x=t(50658);let m=()=>{let e=(0,a.T)("adminLogin"),{showApiMessageHandler:s}=(0,c.w)(),[t,m]=(0,d.useState)(!1),u=(0,d.useContext)(x.V),g=(0,p.tv)(),[f,h]=(0,d.useState)({username:"",password:""}),b=async e=>{e.preventDefault(),m(!0);try{let e=await (0,o.Kg)(f);s(e.data?.message,!1,e.data?.exceptionMessage),e.data?.message===n.ZB.OK&&(u?.getAuthInfo("admin"),g.push("/dashboard"))}catch(e){console.error(e),s(n.ZB.INTERNAL_SERVER_ERROR)}finally{m(!1)}};return(0,r.jsxs)("div",{className:"w-full max-w-[440px] flex flex-col items-center",children:[(0,r.jsxs)("div",{className:"mb-10 text-center",children:[(0,r.jsxs)("div",{className:"flex items-center justify-center gap-3 mb-2",children:[r.jsx("span",{className:"material-symbols-outlined text-primary text-4xl",children:"gavel"}),r.jsx("span",{className:"text-3xl font-bold tracking-tighter font-serif text-primary",children:e("brandName")})]}),(0,r.jsxs)("div",{className:"inline-flex items-center gap-2 px-3 py-1 bg-primary/5 border border-primary/10 rounded-full",children:[r.jsx("span",{className:"material-symbols-outlined text-[14px] text-primary",children:"verified_user"}),r.jsx("span",{className:"text-sm uppercase tracking-widest font-bold text-primary",children:e("secureBadge")})]})]}),(0,r.jsxs)("div",{className:"w-full bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-10",children:[(0,r.jsxs)("div",{className:"mb-8",children:[r.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-2",children:e("title")}),r.jsx("p",{className:"text-sm text-gray-500",children:e("description")})]}),(0,r.jsxs)("form",{className:"space-y-6",onSubmit:b,children:[r.jsx(l.default,{label:e("fields.email.label"),startIcon:r.jsx("span",{className:"material-symbols-outlined text-[20px]",children:"mail"}),placeholder:e("fields.email.placeholder"),type:"email",value:f.username,onChange:e=>h({...f,username:e.target.value})}),r.jsx(l.default,{label:e("fields.password.label"),startIcon:r.jsx("span",{className:"material-symbols-outlined text-[20px]",children:"lock"}),placeholder:e("fields.password.placeholder"),type:"password",value:f.password,onChange:e=>h({...f,password:e.target.value})}),r.jsx(i.default,{variant:"primary",size:"lg",block:!0,endIcon:r.jsx("span",{className:"material-symbols-outlined text-[24px] asd",children:"arrow_forward"}),type:"submit",loading:t,children:e("buttons.signIn")})]})]}),(0,r.jsxs)("div",{className:"mt-8 text-center space-y-4",children:[r.jsx("p",{className:"text-xs text-gray-400",children:e("security.warning")}),(0,r.jsxs)("div",{className:"flex items-center justify-center gap-6 pt-4 grayscale opacity-40",children:[(0,r.jsxs)("div",{className:"flex items-center gap-1",children:[r.jsx("span",{className:"material-symbols-outlined text-[16px]",children:"shield_lock"}),r.jsx("span",{className:"text-sm font-bold uppercase tracking-widest",children:e("security.encryption")})]}),(0,r.jsxs)("div",{className:"flex items-center gap-1",children:[r.jsx("span",{className:"material-symbols-outlined text-[16px]",children:"key"}),r.jsx("span",{className:"text-sm font-bold uppercase tracking-widest",children:e("security.twoFactor")})]})]})]})]})}},97161:(e,s,t)=>{"use strict";t.d(s,{w:()=>n});var r=t(6162),a=t(85999),l=t(17577),i=t(3957);function n(){let e=(0,r.T)("apiErrors"),s=(0,l.useCallback)((s,t)=>{if(!s||s===i.Z.OK)return;let r=t||s;try{let s=e(r);a.A.error(s===r?e("default"):s)}catch{a.A.error(e("default"))}},[e]),t=(0,l.useCallback)(s=>{s?a.A.success(e(s)):a.A.success(e("OK"))},[e]),n=(0,l.useCallback)((e,r=!1,a)=>{if(!e||e===i.Z.OK){if(!r)return;t(e??"")}s(e,a)},[s,t]);return{showApiError:s,showSuccess:t,showApiMessageHandler:n}}},13812:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>l});var r=t(19510);let a=(0,t(68570).createProxy)(String.raw`/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/components/Dashboard/AdminLogin/index.tsx#default`),l=()=>r.jsx("div",{className:"bg-white font-sans antialiased min-h-screen flex items-center justify-center p-6",children:r.jsx(a,{})})}};var s=require("../../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),r=s.X(0,[9276,6481,2128,1662,1292],()=>t(90699));module.exports=r})();