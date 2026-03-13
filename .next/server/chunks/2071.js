"use strict";exports.id=2071,exports.ids=[2071],exports.modules={83428:(e,r,t)=>{t.d(r,{Z:()=>o});var i=t(10326),l=t(17577);let d={sm:"h-10 px-3 text-sm",md:"h-12 px-4 text-base",lg:"h-14 px-5 text-lg"},a={default:"border-gray-200 bg-white focus:border-primary focus:ring-primary/20",outlined:"border-2 border-gray-200 bg-white focus:border-primary focus:ring-primary/20",filled:"border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-primary/20"},s={sm:"text-[18px]",md:"text-[20px]",lg:"text-[22px]"},n=(0,l.forwardRef)(({label:e,errorMessage:r,startIcon:t,endIcon:l,size:n="md",variant:o="default",fullWidth:c=!1,helperText:u,required:m,containerClassName:p="",wrapperClassName:g="",className:y="",disabled:x,...f},b)=>{let h=!!r,v=`
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
      ${d[n]}
      ${a[o]}
      ${h?"border-red-500 focus:border-red-500 focus:ring-red-500/20":""}
      ${t?"pl-10":""}
      ${l?"pr-10":""}
      ${y}
    `.trim().replace(/\s+/g," "),A=`
      absolute
      inset-y-0
      left-0
      pl-3
      flex
      items-center
      pointer-events-none
      text-gray-400
      ${h?"text-red-500":""}
      ${x?"text-gray-300":""}
    `.trim().replace(/\s+/g," ");return(0,i.jsxs)("div",{className:`space-y-1.5 ${c?"w-full":""} ${p}`.trim(),children:[e&&(0,i.jsxs)("label",{htmlFor:f.id,className:`
              text-sm
              font-semibold
              ${h?"text-red-600":"text-secondary-green"}
              ${x?"text-gray-400":""}
            `.trim().replace(/\s+/g," "),children:[e,m&&i.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),(0,i.jsxs)("div",{className:`relative ${c?"w-full":""} ${g}`.trim(),children:[t&&i.jsx("div",{className:A,children:i.jsx("div",{className:s[n]+" flex items-center justify-center",children:t})}),i.jsx("input",{ref:b,className:v,disabled:x,"aria-invalid":h,"aria-describedby":r||u?`${f.id||"input"}-${r?"error":"helper"}`:void 0,...f}),l&&i.jsx("div",{className:`
              absolute
              inset-y-0
              right-0
              pr-3
              flex
              items-center
              pointer-events-none
              text-gray-400
              ${h?"text-red-500":""}
              ${x?"text-gray-300":""}
            `.trim().replace(/\s+/g," "),children:i.jsx("div",{className:s[n]+" flex items-center justify-center",children:l})})]}),(r||u)&&(0,i.jsxs)("div",{children:[r&&i.jsx("p",{id:`${f.id||"input"}-error`,className:"text-sm text-red-600",role:"alert",children:r}),!r&&u&&i.jsx("p",{id:`${f.id||"input"}-helper`,className:"text-sm text-gray-500",children:u})]})]})});n.displayName="BaseInput";let o=n},97161:(e,r,t)=>{t.d(r,{w:()=>s});var i=t(6162),l=t(85999),d=t(17577),a=t(3957);function s(){let e=(0,i.T)("apiErrors"),r=(0,d.useCallback)((r,t)=>{if(!r||r===a.Z.OK)return;let i=t||r;try{let r=e(i);l.A.error(r===i?e("default"):r)}catch{l.A.error(e("default"))}},[e]),t=(0,d.useCallback)(r=>{r?l.A.success(e(r)):l.A.success(e("OK"))},[e]),s=(0,d.useCallback)((e,i=!1,l)=>{if(!e||e===a.Z.OK){if(!i)return;t(e??"")}r(e,l)},[r,t]);return{showApiError:r,showSuccess:t,showApiMessageHandler:s}}},53528:(e,r,t)=>{t.d(r,{t:()=>i});let i={Buyer:"Buyer",BuyerAndSeller:"BuyerAndSeller"}},73760:(e,r,t)=>{t.d(r,{c:()=>i});let i={Billing:"Billing",Shipping:"Shipping"}},5278:(e,r,t)=>{t.d(r,{l:()=>i});let i={Admin:"Admin",Specialist:"Specialist"}},34413:(e,r,t)=>{t.d(r,{n:()=>i});let i={Draft:"Draft",Published:"Published"}},37333:(e,r,t)=>{t.d(r,{i:()=>i});let i={DateRange:"DateRange",NumberRange:"NumberRange",Checkbox:"Checkbox",Radio:"Radio"}},30762:(e,r,t)=>{t.d(r,{d:()=>i});let i={Male:"Male",Female:"Female",Other:"Other"}},80120:(e,r,t)=>{t.d(r,{ZB:()=>i.Z}),t(53528),t(73760),t(5278),t(34413),t(37333);var i=t(3957);t(30762),t(21651),t(65404),t(13550),t(9329),t(12303),t(23673),t(25480)},21651:(e,r,t)=>{t.d(r,{r:()=>i});let i={TR:"TR",EN:"EN"}},65404:(e,r,t)=>{t.d(r,{y:()=>i});let i={TermsOfService:"TermsOfService",PrivacyPolicy:"PrivacyPolicy",AuctionTerms:"AuctionTerms",BuyerPremiumTerms:"BuyerPremiumTerms",SellerAgreement:"SellerAgreement",KycConsent:"KycConsent",MarketingConsent:"MarketingConsent",CookiePolicy:"CookiePolicy",BiddingRules:"BiddingRules"}},13550:(e,r,t)=>{t.d(r,{R:()=>i});let i={Draft:"Draft",Submitted:"Submitted",UnderReview:"UnderReview",NeedMoreInfo:"NeedMoreInfo",PhysicalInspectionRequired:"PhysicalInspectionRequired",ApprovedForConsignment:"ApprovedForConsignment",Rejected:"Rejected",ConsignmentSigned:"ConsignmentSigned",Completed:"Completed",Cancelled:"Cancelled"}},9329:(e,r,t)=>{t.d(r,{e:()=>i});let i={LotFeature:"LotFeature",AuctionBadge:"AuctionBadge",UserSegment:"UserSegment",SaleBadge:"SaleBadge",ContentTopic:"ContentTopic"}},12303:(e,r,t)=>{t.d(r,{l:()=>i});let i={Europe_Istanbul:"Europe_Istanbul",Europe_London:"Europe_London",America_New_York:"America_New_York",Asia_Tokyo:"Asia_Tokyo",Australia_Sydney:"Australia_Sydney"}},23673:(e,r,t)=>{t.d(r,{m:()=>i});let i={Active:"Active",Suspended:"Suspended",Deleted:"Deleted",Pending_Verification:"Pending_Verification"}},25480:(e,r,t)=>{t.d(r,{b:()=>i});let i={Individual:"Individual",Company:"Company"}}};