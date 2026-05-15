"use strict";exports.id=8899,exports.ids=[8899],exports.modules={76291:(e,r,s)=>{s.d(r,{Z:()=>d});var a=s(10326);s(17577);var t=s(6162),i=s(58734);let l=({title:e,description:r,description2:s,question:l,yesLabel:d,noLabel:n,value:c,onChange:o,className:p="",highlightColor:m="text-red-500"})=>{let g=(0,t.T)("common"),u=d??g("yes"),h=n??g("no");return(0,a.jsxs)("div",{className:`
        bg-purple-50
        border
        border-purple-100
        rounded-lg
        p-6
        space-y-2
        ${p}
      `.trim().replace(/\s+/g," "),children:[a.jsx("h3",{className:"text-xl font-bold",children:e}),(0,a.jsxs)("div",{className:"space-y-2",children:[a.jsx("p",{className:"text-base font-bold leading-relaxed",children:r}),s&&a.jsx("p",{className:`text-base font-bold leading-relaxed ${m}`,children:s})]}),a.jsx("p",{className:"text-base font-bold",children:l}),(0,a.jsxs)("div",{className:"flex items-center gap-3 pt-2",children:[a.jsx(i.default,{variant:!0===c?"primary":"outline",size:"md",onClick:()=>{o?.(!0)},className:!0===c?"":"bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200",children:u}),a.jsx(i.default,{variant:!1===c?"primary":"outline",size:"md",onClick:()=>{o?.(!1)},className:!1===c?"":"bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200",children:h})]})]})};l.displayName="ExplanatoryCheckbox";let d=l},83428:(e,r,s)=>{s.r(r),s.d(r,{default:()=>c});var a=s(10326),t=s(17577);let i={sm:"h-10 px-3 text-sm",md:"h-12 px-4 text-base",lg:"h-14 px-5 text-lg"},l={default:"border-gray-200 bg-white focus:border-primary focus:ring-primary/20",outlined:"border-2 border-gray-200 bg-white focus:border-primary focus:ring-primary/20",filled:"border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-primary/20"},d={sm:"text-[24px] asd",md:"text-[20px]",lg:"text-[22px]"},n=(0,t.forwardRef)(({label:e,errorMessage:r,startIcon:s,endIcon:t,size:n="md",variant:c="default",fullWidth:o=!1,helperText:p,required:m,containerClassName:g="",wrapperClassName:u="",className:h="",disabled:x,...b},f)=>{let y=!!r,v=`
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
      ${l[c]}
      ${y?"border-red-500 focus:border-red-500 focus:ring-red-500/20":""}
      ${s?"pl-10":""}
      ${t?"pr-10":""}
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
      ${x?"text-gray-300":""}
    `.trim().replace(/\s+/g," ");return(0,a.jsxs)("div",{className:`space-y-1.5 ${o?"w-full":""} ${g}`.trim(),children:[e&&(0,a.jsxs)("label",{htmlFor:b.id,className:`
              text-sm
              font-semibold
              ${y?"text-red-600":"text-secondary-green"}
              ${x?"text-gray-400":""}
            `.trim().replace(/\s+/g," "),children:[e,m&&a.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),(0,a.jsxs)("div",{className:`relative ${o?"w-full":""} ${u}`.trim(),children:[s&&a.jsx("div",{className:j,children:a.jsx("div",{className:d[n]+" flex items-center justify-center",children:s})}),a.jsx("input",{ref:f,className:v,disabled:x,"aria-invalid":y,"aria-describedby":r||p?`${b.id||"input"}-${r?"error":"helper"}`:void 0,...b}),t&&a.jsx("div",{className:`
              absolute
              inset-y-0
              right-0
              pr-3
              flex
              items-center
              pointer-events-none
              text-gray-400
              ${y?"text-red-500":""}
              ${x?"text-gray-300":""}
            `.trim().replace(/\s+/g," "),children:a.jsx("div",{className:d[n]+" flex items-center justify-center",children:t})})]}),(r||p)&&(0,a.jsxs)("div",{children:[r&&a.jsx("p",{id:`${b.id||"input"}-error`,className:"text-sm text-red-600",role:"alert",children:r}),!r&&p&&a.jsx("p",{id:`${b.id||"input"}-helper`,className:"text-sm text-gray-500",children:p})]})]})});n.displayName="BaseInput";let c=n},48899:(e,r,s)=>{s.d(r,{default:()=>u});var a=s(10326),t=s(17577),i=s(6162),l=s(60494),d=s(85999),n=s(83428),c=s(58734),o=s(76291),p=s(97161),m=s(41292),g=s(77356);let u=({shippingCompany:e,onSuccess:r})=>{let s=(0,i.T)("shippingCompany.form"),u=(0,l.tv)(),{showApiMessageHandler:h}=(0,p.w)(),x=!!e,[b,f]=(0,t.useState)({name:"",code:"",description:"",isActive:!0}),[y,v]=(0,t.useState)(!1),[j,N]=(0,t.useState)({});(0,t.useEffect)(()=>{e?f({name:e.name??"",code:e.code??"",description:e.description??"",isActive:e.isActive??!0}):f({name:"",code:"",description:"",isActive:!0}),N({})},[e]);let $=()=>{let e={};return b.name.trim()||(e.name=s("errors.nameRequired")),b.name.length>200&&(e.name=s("errors.nameMaxLength")),b.code.trim()||(e.code=s("errors.codeRequired")),b.code.length>100&&(e.code=s("errors.codeMaxLength")),b.description.length>1e3&&(e.description=s("errors.descriptionMaxLength")),N(e),0===Object.keys(e).length},C=(0,t.useCallback)(async()=>{if($()){v(!0);try{let a={name:b.name.trim(),code:b.code.trim(),description:b.description.trim()||null,isActive:b.isActive};if(x&&e?.id){let t=await (0,g.C7)(e.id,a);h(t.data?.message,!1,t.data?.exceptionMessage),t.data?.message===m.ZB.OK&&(d.A.success(s("messages.updateSuccess")),r?.(),u.push("/shipping-companies"))}else{let e=await (0,g.Lt)(a);h(e.data?.message,!1,e.data?.exceptionMessage),e.data?.message===m.ZB.OK&&(d.A.success(s("messages.createSuccess")),r?.(),u.push("/shipping-companies"))}}catch{d.A.error(s("messages.genericError"))}finally{v(!1)}}},[b,x,e?.id,s,r,u,h]);return a.jsx("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200",children:(0,a.jsxs)("div",{className:"p-6 space-y-6",children:[(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[a.jsx(n.default,{label:s("fields.name.label"),placeholder:s("fields.name.placeholder"),value:b.name,onChange:e=>{f(r=>({...r,name:e.target.value})),N(e=>({...e,name:""}))},fullWidth:!0,size:"md",required:!0,errorMessage:j.name}),a.jsx(n.default,{label:s("fields.code.label"),placeholder:s("fields.code.placeholder"),value:b.code,onChange:e=>{f(r=>({...r,code:e.target.value})),N(e=>({...e,code:""}))},fullWidth:!0,size:"md",required:!0,errorMessage:j.code})]}),a.jsx(n.default,{label:s("fields.description.label"),placeholder:s("fields.description.placeholder"),value:b.description,onChange:e=>{f(r=>({...r,description:e.target.value})),N(e=>({...e,description:""}))},fullWidth:!0,size:"md",errorMessage:j.description}),a.jsx(o.Z,{title:s("fields.isActive.label"),description:s("fields.isActive.description"),description2:s("fields.isActive.description2"),question:s("fields.isActive.question"),yesLabel:s("fields.isActive.yesLabel"),noLabel:s("fields.isActive.noLabel"),value:b.isActive,onChange:e=>f(r=>({...r,isActive:e}))}),(0,a.jsxs)("div",{className:"flex flex-wrap gap-3 pt-4 border-t border-gray-200",children:[a.jsx(c.default,{variant:"ghost",size:"md",onClick:()=>u.back(),children:s("buttons.cancel")}),a.jsx(c.default,{variant:"primary",size:"md",loading:y,onClick:C,children:x?s("buttons.update"):s("buttons.create")})]})]})})}},97161:(e,r,s)=>{s.d(r,{w:()=>d});var a=s(6162),t=s(85999),i=s(17577),l=s(3957);function d(){let e=(0,a.T)("apiErrors"),r=(0,i.useCallback)((r,s)=>{if(!r||r===l.Z.OK)return;let a=s||r;try{let r=e(a);t.A.error(r===a?e("default"):r)}catch{t.A.error(e("default"))}},[e]),s=(0,i.useCallback)(r=>{r?t.A.success(e(r)):t.A.success(e("OK"))},[e]),d=(0,i.useCallback)((e,a=!1,t)=>{if(!e||e===l.Z.OK){if(!a)return;s(e??"")}r(e,t)},[r,s]);return{showApiError:r,showSuccess:s,showApiMessageHandler:d}}},77356:(e,r,s)=>{s.d(r,{C7:()=>d,ER:()=>p,G7:()=>c,Lt:()=>i});var a=s(18067);let t=()=>"/api/ShippingCompany/Create",i=async(e,r)=>(0,a.k)(t(),{...r,method:"POST",headers:{"Content-Type":"application/json",...r?.headers},body:JSON.stringify(e)}),l=e=>`/api/ShippingCompany/Update/${e}`,d=async(e,r,s)=>(0,a.k)(l(e),{...s,method:"PUT",headers:{"Content-Type":"application/json",...s?.headers},body:JSON.stringify(r)}),n=e=>{let r=new URLSearchParams;Object.entries(e||{}).forEach(([e,s])=>{void 0!==s&&r.append(e,null===s?"null":s.toString())});let s=r.toString();return s.length>0?`/api/ShippingCompany/GetAll?${s}`:"/api/ShippingCompany/GetAll"},c=async(e,r)=>(0,a.k)(n(e),{...r,method:"GET"}),o=e=>`/api/ShippingCompany/Delete/${e}`,p=async(e,r)=>(0,a.k)(o(e),{...r,method:"DELETE"})}};