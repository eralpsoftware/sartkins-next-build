"use strict";exports.id=7241,exports.ids=[7241],exports.modules={6966:(e,a,t)=>{t.d(a,{Z:()=>n});var r=t(10326);t(76045);var l=t(17577);let d={src:"/_next/static/media/default-image.dc045d4a.png",height:996,width:1196,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAIAAAC6O5sJAAAApklEQVR42hWOvQ6CMBRGb29LwaAQV+OiiVFfw5c3RifjoouLEiNiIhAKvf0Rtu8bTs5h3ntrHRlXN+ZXmVbbzWLCObJ3obK81WQ1OWAMvI9HfLtMsSNX1iQ4mybBQBC8vtS0BpM4iEJeKV9ULhqJ5/Gs8g8XQkQhhpLfDhchA4aQ769qXbvdqr9con2c7kgapYBkbAABgPVVqjNZVvZjcDsfSDGfpX9lqFpNtvQDZwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:7};var s=t(46226),i=t(90434);function n({objectKey:e,alt:a="",className:t="",objectFit:n="cover",type:h="image"}){let[o,c]=(0,l.useState)(null),[p,y]=(0,l.useState)(!1),[g,m]=(0,l.useState)(!0),f=`data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720" viewBox="0 0 1280 720">
      <rect width="1280" height="720" fill="#111827"/>
      <circle cx="640" cy="360" r="90" fill="rgba(255,255,255,0.14)"/>
      <polygon points="620,315 620,405 700,360" fill="#ffffff"/>
    </svg>
    `)}`;return p?r.jsx("div",{className:t,style:{objectFit:n},role:"img","aria-label":a||"G\xf6rsel",children:r.jsx("span",{className:"text-xs text-gray-500 dark:text-gray-400",children:r.jsx(s.default,{src:d,alt:"Default Image",width:100,height:100})})}):g||!o?r.jsx("div",{className:t,style:{objectFit:n},role:"img","aria-label":a||"G\xf6rsel",children:r.jsx("span",{className:"text-xs text-gray-500 dark:text-gray-400",children:"Y\xfckleniyor…"})}):"video"===h?r.jsx(i.default,{href:o,target:"_blank",children:r.jsx("img",{src:f,alt:a,className:t,style:{objectFit:n}})}):r.jsx("img",{src:o,alt:a,className:t,style:{objectFit:n},onError:()=>y(!0),loading:"lazy",decoding:"async",referrerPolicy:"no-referrer"})}},83428:(e,a,t)=>{t.d(a,{Z:()=>h});var r=t(10326),l=t(17577);let d={sm:"h-10 px-3 text-sm",md:"h-12 px-4 text-base",lg:"h-14 px-5 text-lg"},s={default:"border-gray-200 bg-white focus:border-primary focus:ring-primary/20",outlined:"border-2 border-gray-200 bg-white focus:border-primary focus:ring-primary/20",filled:"border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-primary/20"},i={sm:"text-[18px]",md:"text-[20px]",lg:"text-[22px]"},n=(0,l.forwardRef)(({label:e,errorMessage:a,startIcon:t,endIcon:l,size:n="md",variant:h="default",fullWidth:o=!1,helperText:c,required:p,containerClassName:y="",wrapperClassName:g="",className:m="",disabled:f,...x},u)=>{let k=!!a,v=`
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
      ${s[h]}
      ${k?"border-red-500 focus:border-red-500 focus:ring-red-500/20":""}
      ${t?"pl-10":""}
      ${l?"pr-10":""}
      ${m}
    `.trim().replace(/\s+/g," "),b=`
      absolute
      inset-y-0
      left-0
      pl-3
      flex
      items-center
      pointer-events-none
      text-gray-400
      ${k?"text-red-500":""}
      ${f?"text-gray-300":""}
    `.trim().replace(/\s+/g," ");return(0,r.jsxs)("div",{className:`space-y-1.5 ${o?"w-full":""} ${y}`.trim(),children:[e&&(0,r.jsxs)("label",{htmlFor:x.id,className:`
              text-sm
              font-semibold
              ${k?"text-red-600":"text-secondary-green"}
              ${f?"text-gray-400":""}
            `.trim().replace(/\s+/g," "),children:[e,p&&r.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),(0,r.jsxs)("div",{className:`relative ${o?"w-full":""} ${g}`.trim(),children:[t&&r.jsx("div",{className:b,children:r.jsx("div",{className:i[n]+" flex items-center justify-center",children:t})}),r.jsx("input",{ref:u,className:v,disabled:f,"aria-invalid":k,"aria-describedby":a||c?`${x.id||"input"}-${a?"error":"helper"}`:void 0,...x}),l&&r.jsx("div",{className:`
              absolute
              inset-y-0
              right-0
              pr-3
              flex
              items-center
              pointer-events-none
              text-gray-400
              ${k?"text-red-500":""}
              ${f?"text-gray-300":""}
            `.trim().replace(/\s+/g," "),children:r.jsx("div",{className:i[n]+" flex items-center justify-center",children:l})})]}),(a||c)&&(0,r.jsxs)("div",{children:[a&&r.jsx("p",{id:`${x.id||"input"}-error`,className:"text-sm text-red-600",role:"alert",children:a}),!a&&c&&r.jsx("p",{id:`${x.id||"input"}-helper`,className:"text-sm text-gray-500",children:c})]})]})});n.displayName="BaseInput";let h=n},68728:(e,a,t)=>{t.d(a,{o:()=>r});function r(e){return e?(e.name?.trim()||e.slug?.trim())??"":""}},59673:(e,a,t)=>{t.d(a,{Z:()=>r});let r=(0,t(25578).Z)("file-pen",[["path",{d:"M12.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v9.34",key:"o6klzx"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10.378 12.622a1 1 0 0 1 3 3.003L8.36 20.637a2 2 0 0 1-.854.506l-2.867.837a.5.5 0 0 1-.62-.62l.836-2.869a2 2 0 0 1 .506-.853z",key:"zhnas1"}]])},36283:(e,a,t)=>{t.d(a,{Z:()=>r});let r=(0,t(25578).Z)("file-text",[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]])},2114:(e,a,t)=>{t.d(a,{Z:()=>r});let r=(0,t(25578).Z)("folder-tree",[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]])},86645:(e,a,t)=>{t.d(a,{Z:()=>r});let r=(0,t(25578).Z)("handshake",[["path",{d:"m11 17 2 2a1 1 0 1 0 3-3",key:"efffak"}],["path",{d:"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",key:"9pr0kb"}],["path",{d:"m21 3 1 11h-2",key:"1tisrp"}],["path",{d:"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3",key:"1uvwmv"}],["path",{d:"M3 4h8",key:"1ep09j"}]])},71810:(e,a,t)=>{t.d(a,{Z:()=>r});let r=(0,t(25578).Z)("log-out",[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]])},60763:(e,a,t)=>{t.d(a,{Z:()=>r});let r=(0,t(25578).Z)("shield-check",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]])},22915:(e,a,t)=>{t.d(a,{Z:()=>r});let r=(0,t(25578).Z)("store",[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5",key:"slp6dd"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244",key:"o0xfot"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05",key:"wn3emo"}]])},40765:(e,a,t)=>{t.d(a,{Z:()=>r});let r=(0,t(25578).Z)("tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]])},72382:(e,a,t)=>{t.d(a,{Z:()=>r});let r=(0,t(25578).Z)("user-round",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]])},24061:(e,a,t)=>{t.d(a,{Z:()=>r});let r=(0,t(25578).Z)("users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]])},95999:(e,a,t)=>{t.d(a,{A2:()=>y,Ey:()=>i,WH:()=>h,fH:()=>c,gY:()=>d});var r=t(7864);let l=()=>"/api/Brand/Create",d=async(e,a)=>(0,r.k)(l(),{...a,method:"POST",headers:{"Content-Type":"application/json",...a?.headers},body:JSON.stringify(e)}),s=e=>`/api/Brand/Update/${e}`,i=async(e,a,t)=>(0,r.k)(s(e),{...t,method:"PUT",headers:{"Content-Type":"application/json",...t?.headers},body:JSON.stringify(a)}),n=e=>`/api/Brand/GetById/${e}`,h=async(e,a)=>(0,r.k)(n(e),{...a,method:"GET"}),o=e=>{let a=new URLSearchParams;Object.entries(e||{}).forEach(([e,t])=>{void 0!==t&&a.append(e,null===t?"null":t.toString())});let t=a.toString();return t.length>0?`/api/Brand/GetAll?${t}`:"/api/Brand/GetAll"},c=async(e,a)=>(0,r.k)(o(e),{...a,method:"GET"}),p=e=>`/api/Brand/Delete/${e}`,y=async(e,a)=>(0,r.k)(p(e),{...a,method:"DELETE"})},76045:(e,a,t)=>{t.d(a,{SJ:()=>d,iM:()=>i});var r=t(7864);let l=()=>"/api/MediaStorage/Upload",d=async(e,a)=>{let t=new FormData;return t.append("file",e.file),void 0!==e.folder&&t.append("folder",e.folder),(0,r.k)(l(),{...a,method:"POST",body:t})},s=e=>{let a=new URLSearchParams;Object.entries(e||{}).forEach(([e,t])=>{void 0!==t&&a.append(e,null===t?"null":t.toString())});let t=a.toString();return t.length>0?`/api/MediaStorage/GetSignedUrl?${t}`:"/api/MediaStorage/GetSignedUrl"},i=async(e,a)=>(0,r.k)(s(e),{...a,method:"GET"})}};