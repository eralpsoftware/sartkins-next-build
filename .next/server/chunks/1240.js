"use strict";exports.id=1240,exports.ids=[1240],exports.modules={40593:(e,r,t)=>{t.d(r,{Z:()=>n});var a=t(10326),s=t(17577);let l={success:{container:"bg-green-50 border-green-200 text-green-800",icon:"text-green-500",title:"text-green-900",close:"text-green-600 hover:text-green-800"},error:{container:"bg-red-50 border-red-200 text-red-800",icon:"text-red-500",title:"text-red-900",close:"text-red-600 hover:text-red-800"},warning:{container:"bg-yellow-50 border-yellow-200 text-yellow-800",icon:"text-yellow-500",title:"text-yellow-900",close:"text-yellow-600 hover:text-yellow-800"},info:{container:"bg-blue-50 border-blue-200 text-blue-800",icon:"text-blue-500",title:"text-blue-900",close:"text-blue-600 hover:text-blue-800"}},i={success:a.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),error:a.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})}),warning:a.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})}),info:a.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})},o=({variant:e="info",title:r,children:t,message:o,closable:n=!0,onClose:d,className:c="",showIcon:m=!0})=>{let[x,p]=(0,s.useState)(!0);if(!x)return null;let u=l[e];return(0,a.jsxs)("div",{className:`
        relative
        flex
        gap-3
        p-4
        rounded-lg
        border
        ${u.container}
        ${c}
      `.trim().replace(/\s+/g," "),role:"alert",children:[m&&a.jsx("div",{className:`flex-shrink-0 flex items-center justify-center ${u.icon}`,children:i[e]}),(0,a.jsxs)("div",{className:"flex-1 min-w-0",children:[r&&a.jsx("h4",{className:`font-semibold mb-1 ${u.title}`,children:r}),o&&a.jsx("p",{className:"text-sm",children:o}),t&&a.jsx("div",{className:"text-sm",children:t})]}),n&&a.jsx("button",{onClick:()=>{p(!1),d?.()},className:`
            flex-shrink-0
            ml-auto
            ${u.close}
            transition-colors
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            rounded
          `.trim().replace(/\s+/g," "),"aria-label":"Kapat",children:a.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]})};o.displayName="BaseAlert";let n=o},89068:(e,r,t)=>{t.d(r,{Z:()=>c});var a=t(10326),s=t(17577),l=t(17272),i=t(65081),o=t(80619);t(98079),t(57756);var n=t(52113);let d=({initialContent:e,onChange:r,editable:t=!0,errorMessage:d,label:c,required:m,helperText:x,containerClassName:p=""})=>{let u=!!d,[h,f]=(0,s.useState)(void 0),[g,b]=(0,s.useState)(!0),y=(0,n.bU)();(0,s.useEffect)(()=>{(async()=>{if(!e){f(void 0),b(!1);return}try{let r=await o.lw.create(),t=await r.tryParseHTMLToBlocks(e);f(t)}catch(e){console.error("HTML parse hatası:",e),f(void 0)}finally{b(!1)}})()},[e]);let v=(0,l.$c)({initialContent:h,editable:t});return(0,s.useEffect)(()=>{if(!v||!r||g)return;let e=async()=>{try{let e=v.topLevelBlocks;r(e)}catch(e){console.error("Editor change hatası:",e)}},t=v.onChange(e);return()=>{t&&t()}},[v,r,g]),(0,s.useEffect)(()=>{if(!v||g)return;let e=async()=>{try{await v.replaceBlocks(v.topLevelBlocks,h||[])}catch(e){console.error("Editor update hatası:",e)}};void 0!==h&&e()},[h,v,g]),(0,a.jsxs)("div",{className:`space-y-1.5 w-full ${p}`.trim(),children:[c&&(0,a.jsxs)("label",{className:`
            text-sm
            font-semibold
            ${u?"text-red-600":"text-secondary-green"}
          `.trim().replace(/\s+/g," "),children:[c,m&&a.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),a.jsx("div",{className:`
          rounded-lg
          border
          ${u?"border-red-500":"border-gray-200"}
          overflow-hidden
          focus-within:ring-2
          py-6
          focus-within:ring-offset-2
          ${u?"focus-within:ring-red-500/20":"focus-within:ring-primary/20"}
          ${u?"focus-within:border-red-500":"focus-within:border-primary"}
          ${g?"min-h-[200px] flex items-center justify-center":"min-h-[400px]"}
          [&_.bn-container]:min-h-[400px]
          [&_.bn-container]:bg-white
          [&_.bn-container]:dark:bg-white
          [&_.bn-editor]:min-h-[400px]
        `.trim().replace(/\s+/g," "),children:g?a.jsx("div",{className:"text-gray-500 text-sm p-4",children:"Y\xfckleniyor..."}):v?a.jsx(i.L6,{editor:v,lang:y,theme:"light",className:"min-h-[400px]"}):a.jsx("div",{className:"text-gray-500 text-sm p-4",children:"Editor y\xfckleniyor..."})}),(d||x)&&(0,a.jsxs)("div",{children:[d&&a.jsx("p",{className:"text-sm text-red-600",role:"alert",children:d}),!d&&x&&a.jsx("p",{className:"text-sm text-gray-500",children:x})]})]})};d.displayName="BaseBlockNoteEditor";let c=d},32092:(e,r,t)=>{t.d(r,{Z:()=>s});var a=t(10326);let s=({id:e,label:r,checked:t,onChange:s})=>{let l=e??"cbx-46";return(0,a.jsxs)("div",{className:"checkbox-wrapper-46",children:[a.jsx("input",{className:"inp-cbx",id:l,type:"checkbox",checked:t,onChange:e=>s(e.target.checked)}),(0,a.jsxs)("label",{className:"cbx",htmlFor:l,children:[a.jsx("span",{children:a.jsx("svg",{width:"12px",height:"10px",viewBox:"0 0 12 10",children:a.jsx("polyline",{points:"1.5 6 4.5 9 10.5 1"})})}),a.jsx("i",{className:"ml-2",children:r})]})]})}},83428:(e,r,t)=>{t.d(r,{Z:()=>d});var a=t(10326),s=t(17577);let l={sm:"h-10 px-3 text-sm",md:"h-12 px-4 text-base",lg:"h-14 px-5 text-lg"},i={default:"border-gray-200 bg-white focus:border-primary focus:ring-primary/20",outlined:"border-2 border-gray-200 bg-white focus:border-primary focus:ring-primary/20",filled:"border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-primary/20"},o={sm:"text-[18px]",md:"text-[20px]",lg:"text-[22px]"},n=(0,s.forwardRef)(({label:e,errorMessage:r,startIcon:t,endIcon:s,size:n="md",variant:d="default",fullWidth:c=!1,helperText:m,required:x,containerClassName:p="",wrapperClassName:u="",className:h="",disabled:f,...g},b)=>{let y=!!r,v=`
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
      ${l[n]}
      ${i[d]}
      ${y?"border-red-500 focus:border-red-500 focus:ring-red-500/20":""}
      ${t?"pl-10":""}
      ${s?"pr-10":""}
      ${h}
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
    `.trim().replace(/\s+/g," ");return(0,a.jsxs)("div",{className:`space-y-1.5 ${c?"w-full":""} ${p}`.trim(),children:[e&&(0,a.jsxs)("label",{htmlFor:g.id,className:`
              text-sm
              font-semibold
              ${y?"text-red-600":"text-secondary-green"}
              ${f?"text-gray-400":""}
            `.trim().replace(/\s+/g," "),children:[e,x&&a.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),(0,a.jsxs)("div",{className:`relative ${c?"w-full":""} ${u}`.trim(),children:[t&&a.jsx("div",{className:j,children:a.jsx("div",{className:o[n]+" flex items-center justify-center",children:t})}),a.jsx("input",{ref:b,className:v,disabled:f,"aria-invalid":y,"aria-describedby":r||m?`${g.id||"input"}-${r?"error":"helper"}`:void 0,...g}),s&&a.jsx("div",{className:`
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
            `.trim().replace(/\s+/g," "),children:a.jsx("div",{className:o[n]+" flex items-center justify-center",children:s})})]}),(r||m)&&(0,a.jsxs)("div",{children:[r&&a.jsx("p",{id:`${g.id||"input"}-error`,className:"text-sm text-red-600",role:"alert",children:r}),!r&&m&&a.jsx("p",{id:`${g.id||"input"}-helper`,className:"text-sm text-gray-500",children:m})]})]})});n.displayName="BaseInput";let d=n},29238:(e,r,t)=>{t.d(r,{Z:()=>o});var a=t(10326),s=t(17577),l=t(4948);let i=(0,s.forwardRef)(({label:e,errorMessage:r,size:t="md",variant:i="default",fullWidth:o=!1,helperText:n,required:d,containerClassName:c="",wrapperClassName:m="",isDisabled:x=!1,id:p,...u},h)=>{let f=!!r,[g,b]=(0,s.useState)(null),y=(e,r)=>{g&&clearTimeout(g),b(setTimeout(()=>{u.onInputChange?.(e,r)},1e3))};return(0,a.jsxs)("div",{className:`space-y-1.5 ${o?"w-full":""} ${c}`.trim(),children:[e&&(0,a.jsxs)("label",{htmlFor:p,className:`
              text-sm
              font-semibold
              ${f?"text-red-600":"text-secondary-green"}
              ${x?"text-gray-400":""}
            `.trim().replace(/\s+/g," "),children:[e,d&&a.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),a.jsx("div",{className:`relative ${o?"w-full":""} ${m}`.trim(),children:a.jsx(l.ZP,{...u,ref:h,styles:{control:(e,r)=>({...e,minHeight:"sm"===t?"40px":"md"===t?"48px":"56px",height:"sm"===t?"40px":"md"===t?"48px":"56px",borderRadius:"0.5rem",borderColor:f?"#ef4444":r.isFocused?"#4e1319":"#e5e7eb",borderWidth:"outlined"===i?"2px":"1px",backgroundColor:x?"#f9fafb":"filled"===i?"#f9fafb":"#ffffff",boxShadow:r.isFocused?f?"0 0 0 3px rgba(239, 68, 68, 0.1)":"0 0 0 3px rgba(78, 19, 25, 0.1)":"none","&:hover":{borderColor:f?"#ef4444":r.isFocused?"#4e1319":"#d1d5db"},cursor:x?"not-allowed":"pointer",transition:"all 0.2s",fontFamily:"var(--font-montserrat), system-ui, Helvetica, sans-serif"}),valueContainer:e=>({...e,padding:"sm"===t?"0 12px":"md"===t?"0 16px":"0 20px",height:"100%"}),input:e=>({...e,margin:0,padding:0,color:"#0f172a",fontSize:"sm"===t?"0.875rem":"md"===t?"1rem":"1.125rem",fontFamily:"var(--font-montserrat), system-ui, Helvetica, sans-serif"}),placeholder:e=>({...e,color:"#9ca3af",fontSize:"sm"===t?"0.875rem":"md"===t?"1rem":"1.125rem",fontFamily:"var(--font-montserrat), system-ui, Helvetica, sans-serif"}),singleValue:e=>({...e,color:"#0f172a",fontSize:"sm"===t?"0.875rem":"md"===t?"1rem":"1.125rem",fontFamily:"var(--font-montserrat), system-ui, Helvetica, sans-serif"}),multiValue:e=>({...e,backgroundColor:"#f3f4f6",borderRadius:"0.375rem"}),multiValueLabel:e=>({...e,color:"#0f172a",fontSize:"sm"===t?"0.875rem":"md"===t?"1rem":"1.125rem",fontFamily:"var(--font-montserrat), system-ui, Helvetica, sans-serif"}),multiValueRemove:e=>({...e,color:"#6b7280","&:hover":{backgroundColor:"#e5e7eb",color:"#374151"}}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:(e,r)=>({...e,color:f?"#ef4444":"#6b7280",padding:"sm"===t?"8px":"md"===t?"10px":"12px","&:hover":{color:f?"#ef4444":"#374151"},transform:r.selectProps.menuIsOpen?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.2s"}),clearIndicator:e=>({...e,color:"#6b7280",padding:"sm"===t?"8px":"md"===t?"10px":"12px","&:hover":{color:"#374151"}}),menu:e=>({...e,borderRadius:"0.5rem",boxShadow:"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",marginTop:"4px",zIndex:10050}),menuPortal:e=>({...e,zIndex:10050}),menuList:e=>({...e,padding:"4px"}),option:(e,r)=>({...e,borderRadius:"0.375rem",padding:"sm"===t?"8px 12px":"md"===t?"10px 16px":"12px 20px",fontSize:"sm"===t?"0.875rem":"md"===t?"1rem":"1.125rem",fontFamily:"var(--font-montserrat), system-ui, Helvetica, sans-serif",backgroundColor:r.isSelected?"#4e1319":r.isFocused?"#f3f4f6":"transparent",color:r.isSelected?"#ffffff":"#0f172a",cursor:"pointer","&:active":{backgroundColor:r.isSelected?"#4e1319":"#e5e7eb"}})},isDisabled:x,instanceId:p,inputId:p,onInputChange:(e,r)=>y(e,r),"aria-invalid":f,"aria-describedby":r||n?`${p||"select"}-${r?"error":"helper"}`:void 0})}),(r||n)&&(0,a.jsxs)("div",{children:[r&&a.jsx("p",{id:`${p||"select"}-error`,className:"text-sm text-red-600",role:"alert",children:r}),!r&&n&&a.jsx("p",{id:`${p||"select"}-helper`,className:"text-sm text-gray-500",children:n})]})]})});i.displayName="BaseSelect";let o=i},3674:(e,r,t)=>{t.d(r,{Z:()=>n});var a=t(10326),s=t(17577);let l={sm:"px-3 py-2 text-sm",md:"px-4 py-3 text-base",lg:"px-5 py-4 text-lg"},i={default:"border-gray-200 bg-white focus:border-primary focus:ring-primary/20",outlined:"border-2 border-gray-200 bg-white focus:border-primary focus:ring-primary/20",filled:"border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-primary/20"},o=(0,s.forwardRef)(({label:e,errorMessage:r,size:t="md",variant:s="default",fullWidth:o=!1,helperText:n,required:d,containerClassName:c="",wrapperClassName:m="",className:x="",disabled:p,rows:u=4,...h},f)=>{let g=!!r,b=`
      w-full
      rounded-lg
      border
      bg-white
      text-slate-900
      placeholder:text-gray-400
      font-display
      focus:outline-none
      transition-shadow
      resize-y
      disabled:bg-gray-50
      disabled:text-gray-500
      disabled:cursor-not-allowed
      disabled:border-gray-200
      ${l[t]}
      ${i[s]}
      ${g?"border-red-500 focus:border-red-500 focus:ring-red-500/20":""}
      ${x}
    `.trim().replace(/\s+/g," ");return(0,a.jsxs)("div",{className:`space-y-1.5 ${o?"w-full":""} ${c}`.trim(),children:[e&&(0,a.jsxs)("label",{htmlFor:h.id,className:`
              text-sm
              font-semibold
              ${g?"text-red-600":"text-secondary-green"}
              ${p?"text-gray-400":""}
            `.trim().replace(/\s+/g," "),children:[e,d&&a.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),a.jsx("div",{className:`relative ${o?"w-full":""} ${m}`.trim(),children:a.jsx("textarea",{ref:f,className:b,disabled:p,rows:u,"aria-invalid":g,"aria-describedby":r||n?`${h.id||"textarea"}-${r?"error":"helper"}`:void 0,...h})}),(r||n)&&(0,a.jsxs)("div",{children:[r&&a.jsx("p",{id:`${h.id||"textarea"}-error`,className:"text-sm text-red-600",role:"alert",children:r}),!r&&n&&a.jsx("p",{id:`${h.id||"textarea"}-helper`,className:"text-sm text-gray-500",children:n})]})]})});o.displayName="BaseTextarea";let n=o},16803:(e,r,t)=>{t.d(r,{Z:()=>h});var a=t(10326),s=t(17577),l=t(6162),i=t(65568),o=t(31188),n=t(47710),d=t(3674),c=t(32092),m=t(29238),x=t(97161),p=t(85999);let u=[i._.Pending,i._.Approved,i._.Rejected,i._.RevisionRequested];function h({productId:e,open:r,onClose:t,onCreated:h,lastStatus:f}){let g=(0,l.T)("product.detail.tabApprovals"),{showApiMessageHandler:b}=(0,x.w)(),[y,v]=(0,s.useState)(f??i._.Pending),[j,w]=(0,s.useState)(""),[N,$]=(0,s.useState)(!1),[k,S]=(0,s.useState)(!1),C=e=>{if(!e)return"—";switch(e){case i._.Pending:return g("status.Pending");case i._.Approved:return g("status.Approved");case i._.Rejected:return g("status.Rejected");case i._.RevisionRequested:return g("status.RevisionRequested");default:return e}},P=()=>{v(i._.Pending),w(""),$(!1)},L=u.map(e=>({value:e,label:C(e)})),T=L.find(e=>String(e.value)===y)??L[0],E=()=>{P(),t()},R=async()=>{if(e){S(!0);try{let r=await (0,o.ID)({productId:e,status:y,note:j.trim()||null,isPrivate:N});b(r.data?.message,!1,r.data?.exceptionMessage),200===r.status&&r.data?.isSuccess?(p.A.success(g("toast.createSuccess")),P(),t(),await h?.()):p.A.error(g("toast.createError"))}catch{p.A.error(g("toast.genericError"))}finally{S(!1)}}};return a.jsx(n.Z,{open:r,onClose:E,title:g("modal.titleCreate"),size:"md",buttons:[{label:g("modal.cancel"),variant:"secondary",onClick:E,disabled:k},{label:g("modal.save"),variant:"primary",onClick:R,loading:k}],children:(0,a.jsxs)("div",{className:"space-y-4",children:[a.jsx(m.Z,{label:g("modal.fieldStatus"),options:L,value:T,onChange:e=>v(e?.value??i._.Pending),isClearable:!1,fullWidth:!0,size:"md"}),a.jsx(d.Z,{label:g("modal.fieldNote"),fullWidth:!0,rows:4,value:j,onChange:e=>w(e.target.value)}),a.jsx(c.Z,{label:g("modal.fieldPrivate"),checked:N,onChange:e=>$(e)})]})})}},30607:(e,r,t)=>{t.d(r,{OH:()=>s,fy:()=>n,zk:()=>o});var a=t(21651);function s(e,r){return e?.length?e.find(e=>e.languageCode===r)?.value??"":""}let l=e=>e.toLowerCase().startsWith("en")?a.r.EN:a.r.TR,i=(e,r)=>{if(!e?.length)return"";if(r){let t=l(r),a=e.find(e=>e.languageCode===t);if(a?.value)return a.value}return e[0]?.value??""};function o(e,r){return e?i(e.localizedNames,r):""}function n(e,r){return e?i(e.localizedDescriptions,r):""}},31188:(e,r,t)=>{t.d(r,{ID:()=>l,cB:()=>d,d6:()=>o,jS:()=>m});var a=t(7864);let s=()=>"/api/ProductApproval/Create",l=async(e,r)=>(0,a.k)(s(),{...r,method:"POST",headers:{"Content-Type":"application/json",...r?.headers},body:JSON.stringify(e)}),i=e=>`/api/ProductApproval/Update/${e}`,o=async(e,r,t)=>(0,a.k)(i(e),{...t,method:"PUT",headers:{"Content-Type":"application/json",...t?.headers},body:JSON.stringify(r)}),n=e=>{let r=new URLSearchParams;Object.entries(e||{}).forEach(([e,t])=>{void 0!==t&&r.append(e,null===t?"null":t.toString())});let t=r.toString();return t.length>0?`/api/ProductApproval/GetAll?${t}`:"/api/ProductApproval/GetAll"},d=async(e,r)=>(0,a.k)(n(e),{...r,method:"GET"}),c=e=>`/api/ProductApproval/Delete/${e}`,m=async(e,r)=>(0,a.k)(c(e),{...r,method:"DELETE"})},9634:(e,r,t)=>{t.d(r,{I6:()=>d,Up:()=>l,gm:()=>o,xi:()=>m});var a=t(7864);let s=()=>"/api/Product/Create",l=async(e,r)=>(0,a.k)(s(),{...r,method:"POST",headers:{"Content-Type":"application/json",...r?.headers},body:JSON.stringify(e)}),i=e=>`/api/Product/Update/${e}`,o=async(e,r,t)=>(0,a.k)(i(e),{...t,method:"PUT",headers:{"Content-Type":"application/json",...t?.headers},body:JSON.stringify(r)}),n=e=>{let r=new URLSearchParams;Object.entries(e||{}).forEach(([e,t])=>{void 0!==t&&r.append(e,null===t?"null":t.toString())});let t=r.toString();return t.length>0?`/api/Product/GetAll?${t}`:"/api/Product/GetAll"},d=async(e,r)=>(0,a.k)(n(e),{...r,method:"GET"}),c=e=>`/api/Product/Delete/${e}`,m=async(e,r)=>(0,a.k)(c(e),{...r,method:"DELETE"})}};