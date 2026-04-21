(()=>{var e={};e.id=7199,e.ids=[7199],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},84770:e=>{"use strict";e.exports=require("crypto")},90699:(e,s,r)=>{"use strict";r.r(s),r.d(s,{GlobalError:()=>l.Z,__next_app__:()=>p,originalPathname:()=>c,pages:()=>o,routeModule:()=>x,tree:()=>d}),r(13812),r(83498),r(64784),r(11506),r(35866);var t=r(23191),a=r(88716),l=r(48001),i=r(95231),n={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>i[e]);r.d(s,n);let d=["",{children:["[locale]",{children:["admin",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,13812)),"/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/[locale]/admin/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,83498)),"/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/[locale]/layout.tsx"],loading:[()=>Promise.resolve().then(r.bind(r,64784)),"/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/[locale]/loading.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,11506)),"/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"]}],o=["/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/[locale]/admin/page.tsx"],c="/[locale]/admin/page",p={require:r,loadChunk:()=>Promise.resolve()},x=new t.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/[locale]/admin/page",pathname:"/[locale]/admin",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},46534:(e,s,r)=>{Promise.resolve().then(r.bind(r,15396))},83428:(e,s,r)=>{"use strict";r.d(s,{Z:()=>o});var t=r(10326),a=r(17577);let l={sm:"h-10 px-3 text-sm",md:"h-12 px-4 text-base",lg:"h-14 px-5 text-lg"},i={default:"border-gray-200 bg-white focus:border-primary focus:ring-primary/20",outlined:"border-2 border-gray-200 bg-white focus:border-primary focus:ring-primary/20",filled:"border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-primary/20"},n={sm:"text-[18px]",md:"text-[20px]",lg:"text-[22px]"},d=(0,a.forwardRef)(({label:e,errorMessage:s,startIcon:r,endIcon:a,size:d="md",variant:o="default",fullWidth:c=!1,helperText:p,required:x,containerClassName:m="",wrapperClassName:u="",className:g="",disabled:h,...b},f)=>{let y=!!s,j=`
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
      ${l[d]}
      ${i[o]}
      ${y?"border-red-500 focus:border-red-500 focus:ring-red-500/20":""}
      ${r?"pl-10":""}
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
      ${h?"text-gray-300":""}
    `.trim().replace(/\s+/g," ");return(0,t.jsxs)("div",{className:`space-y-1.5 ${c?"w-full":""} ${m}`.trim(),children:[e&&(0,t.jsxs)("label",{htmlFor:b.id,className:`
              text-sm
              font-semibold
              ${y?"text-red-600":"text-secondary-green"}
              ${h?"text-gray-400":""}
            `.trim().replace(/\s+/g," "),children:[e,x&&t.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),(0,t.jsxs)("div",{className:`relative ${c?"w-full":""} ${u}`.trim(),children:[r&&t.jsx("div",{className:v,children:t.jsx("div",{className:n[d]+" flex items-center justify-center",children:r})}),t.jsx("input",{ref:f,className:j,disabled:h,"aria-invalid":y,"aria-describedby":s||p?`${b.id||"input"}-${s?"error":"helper"}`:void 0,...b}),a&&t.jsx("div",{className:`
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
            `.trim().replace(/\s+/g," "),children:t.jsx("div",{className:n[d]+" flex items-center justify-center",children:a})})]}),(s||p)&&(0,t.jsxs)("div",{children:[s&&t.jsx("p",{id:`${b.id||"input"}-error`,className:"text-sm text-red-600",role:"alert",children:s}),!s&&p&&t.jsx("p",{id:`${b.id||"input"}-helper`,className:"text-sm text-gray-500",children:p})]})]})});d.displayName="BaseInput";let o=d},15396:(e,s,r)=>{"use strict";r.d(s,{default:()=>m});var t=r(10326),a=r(6162),l=r(83428),i=r(58734),n=r(74721),d=r(17577),o=r(79265),c=r(97161),p=r(60494),x=r(50658);let m=()=>{let e=(0,a.T)("adminLogin"),{showApiMessageHandler:s}=(0,c.w)(),[r,m]=(0,d.useState)(!1),u=(0,d.useContext)(x.V),g=(0,p.tv)(),[h,b]=(0,d.useState)({username:"",password:""}),f=async e=>{e.preventDefault(),m(!0);try{let e=await (0,o.Kg)(h);s(e.data.message,!1,e.data.exceptionMessage),e.data.message===n.ZB.OK&&(u?.getAuthInfo("admin"),g.push("/dashboard"))}catch(e){console.error(e),s(n.ZB.INTERNAL_SERVER_ERROR)}finally{m(!1)}};return(0,t.jsxs)("div",{className:"w-full max-w-[440px] flex flex-col items-center",children:[(0,t.jsxs)("div",{className:"mb-10 text-center",children:[(0,t.jsxs)("div",{className:"flex items-center justify-center gap-3 mb-2",children:[t.jsx("span",{className:"material-symbols-outlined text-primary text-4xl",children:"gavel"}),t.jsx("span",{className:"text-3xl font-bold tracking-tighter font-serif text-primary",children:e("brandName")})]}),(0,t.jsxs)("div",{className:"inline-flex items-center gap-2 px-3 py-1 bg-primary/5 border border-primary/10 rounded-full",children:[t.jsx("span",{className:"material-symbols-outlined text-[14px] text-primary",children:"verified_user"}),t.jsx("span",{className:"text-[10px] uppercase tracking-widest font-bold text-primary",children:e("secureBadge")})]})]}),(0,t.jsxs)("div",{className:"w-full bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-10",children:[(0,t.jsxs)("div",{className:"mb-8",children:[t.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-2",children:e("title")}),t.jsx("p",{className:"text-sm text-gray-500",children:e("description")})]}),(0,t.jsxs)("form",{className:"space-y-6",onSubmit:f,children:[t.jsx(l.Z,{label:e("fields.email.label"),startIcon:t.jsx("span",{className:"material-symbols-outlined text-[20px]",children:"mail"}),placeholder:e("fields.email.placeholder"),type:"email",value:h.username,onChange:e=>b({...h,username:e.target.value})}),t.jsx(l.Z,{label:e("fields.password.label"),startIcon:t.jsx("span",{className:"material-symbols-outlined text-[20px]",children:"lock"}),placeholder:e("fields.password.placeholder"),type:"password",value:h.password,onChange:e=>b({...h,password:e.target.value})}),t.jsx(i.Z,{variant:"primary",size:"lg",block:!0,endIcon:t.jsx("span",{className:"material-symbols-outlined text-[18px]",children:"arrow_forward"}),type:"submit",loading:r,children:e("buttons.signIn")})]})]}),(0,t.jsxs)("div",{className:"mt-8 text-center space-y-4",children:[t.jsx("p",{className:"text-xs text-gray-400",children:e("security.warning")}),(0,t.jsxs)("div",{className:"flex items-center justify-center gap-6 pt-4 grayscale opacity-40",children:[(0,t.jsxs)("div",{className:"flex items-center gap-1",children:[t.jsx("span",{className:"material-symbols-outlined text-[16px]",children:"shield_lock"}),t.jsx("span",{className:"text-[10px] font-bold uppercase tracking-widest",children:e("security.encryption")})]}),(0,t.jsxs)("div",{className:"flex items-center gap-1",children:[t.jsx("span",{className:"material-symbols-outlined text-[16px]",children:"key"}),t.jsx("span",{className:"text-[10px] font-bold uppercase tracking-widest",children:e("security.twoFactor")})]})]})]})]})}},97161:(e,s,r)=>{"use strict";r.d(s,{w:()=>n});var t=r(6162),a=r(85999),l=r(17577),i=r(3957);function n(){let e=(0,t.T)("apiErrors"),s=(0,l.useCallback)((s,r)=>{if(!s||s===i.Z.OK)return;let t=r||s;try{let s=e(t);a.A.error(s===t?e("default"):s)}catch{a.A.error(e("default"))}},[e]),r=(0,l.useCallback)(s=>{s?a.A.success(e(s)):a.A.success(e("OK"))},[e]),n=(0,l.useCallback)((e,t=!1,a)=>{if(!e||e===i.Z.OK){if(!t)return;r(e??"")}s(e,a)},[s,r]);return{showApiError:s,showSuccess:r,showApiMessageHandler:n}}},13812:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>l});var t=r(19510);let a=(0,r(68570).createProxy)(String.raw`/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/components/Dashboard/AdminLogin/index.tsx#default`),l=()=>t.jsx("div",{className:"bg-background-light font-sans antialiased min-h-screen flex items-center justify-center p-6",children:t.jsx(a,{})})}};var s=require("../../../webpack-runtime.js");s.C(e);var r=e=>s(s.s=e),t=s.X(0,[9276,2298,3802,9830,4721],()=>r(90699));module.exports=t})();