(()=>{var e={};e.id=9947,e.ids=[9947],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},84770:e=>{"use strict";e.exports=require("crypto")},36605:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>n.Z,__next_app__:()=>p,originalPathname:()=>c,pages:()=>d,routeModule:()=>g,tree:()=>i}),t(78152),t(38721),t(83498),t(64784),t(11506),t(35866);var a=t(23191),s=t(88716),n=t(48001),o=t(95231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);t.d(r,l);let i=["",{children:["[locale]",{children:["(dashboard)",{children:["categories",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,78152)),"/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/[locale]/(dashboard)/categories/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,38721)),"/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/[locale]/(dashboard)/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,83498)),"/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/[locale]/layout.tsx"],loading:[()=>Promise.resolve().then(t.bind(t,64784)),"/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/[locale]/loading.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,11506)),"/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,35866,23)),"next/dist/client/components/not-found-error"]}],d=["/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/app/[locale]/(dashboard)/categories/page.tsx"],c="/[locale]/(dashboard)/categories/page",p={require:t,loadChunk:()=>Promise.resolve()},g=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/[locale]/(dashboard)/categories/page",pathname:"/[locale]/categories",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:i}})},24844:(e,r,t)=>{Promise.resolve().then(t.bind(t,3462))},62744:(e,r,t)=>{"use strict";t.d(r,{Z:()=>i});var a=t(10326);t(17577);let s={sm:{container:"px-2 py-0.5 text-xs",icon:"w-3 h-3",close:"w-3 h-3 ml-1"},md:{container:"px-3 py-1 text-sm",icon:"w-4 h-4",close:"w-4 h-4 ml-1.5"},lg:{container:"px-4 py-1.5 text-base",icon:"w-5 h-5",close:"w-5 h-5 ml-2"}},n={filled:{primary:"bg-blue-100 text-blue-800 border-blue-200",secondary:"bg-gray-100 text-gray-800 border-gray-200",success:"bg-green-100 text-green-800 border-green-200",danger:"bg-red-100 text-red-800 border-red-200",warning:"bg-yellow-100 text-yellow-800 border-yellow-200",gray:"bg-gray-100 text-gray-800 border-gray-200"},outlined:{primary:"bg-transparent text-blue-600 border-blue-300",secondary:"bg-transparent text-gray-600 border-gray-300",success:"bg-transparent text-green-600 border-green-300",danger:"bg-transparent text-red-600 border-red-300",warning:"bg-transparent text-yellow-600 border-yellow-300",gray:"bg-transparent text-gray-600 border-gray-300"},ghost:{primary:"bg-transparent text-blue-600 border-transparent",secondary:"bg-transparent text-gray-600 border-transparent",success:"bg-transparent text-green-600 border-transparent",danger:"bg-transparent text-red-600 border-transparent",warning:"bg-transparent text-yellow-600 border-transparent",gray:"bg-transparent text-gray-600 border-transparent"}},o={primary:"bg-blue-600 text-white border-blue-600",secondary:"bg-gray-600 text-white border-gray-600",success:"bg-green-600 text-white border-green-600",danger:"bg-red-600 text-white border-red-600",warning:"bg-yellow-500 text-white border-yellow-500",gray:"bg-gray-600 text-white border-gray-600"},l=({children:e,variant:r="filled",color:t="primary",size:l="md",closable:i=!1,onClose:d,startIcon:c,endIcon:p,selectable:g=!1,selected:u=!1,onClick:x,className:b="",disabled:m=!1})=>{let y=`
    inline-flex
    items-center
    justify-center
    gap-1.5
    rounded-full
    border
    font-medium
    transition-all
    duration-200
    ${s[l].container}
    ${m?"opacity-50 cursor-not-allowed":""}
    ${g&&!m?"cursor-pointer hover:opacity-80":""}
    ${u?o[t]:n[r][t]}
    ${b}
  `.trim().replace(/\s+/g," ");return(0,a.jsxs)("span",{className:y,onClick:g?()=>{!m&&x&&x()}:void 0,role:g?"button":void 0,tabIndex:g&&!m?0:void 0,"aria-pressed":g?u:void 0,children:[c&&a.jsx("span",{className:s[l].icon,children:c}),a.jsx("span",{children:e}),p&&a.jsx("span",{className:s[l].icon,children:p}),i&&a.jsx("button",{type:"button",onClick:e=>{e.stopPropagation(),!m&&d&&d()},className:`
            ${s[l].close}
            flex-shrink-0
            rounded-full
            hover:bg-black/10
            focus:outline-none
            focus:ring-2
            focus:ring-offset-1
            transition-colors
            ${m?"cursor-not-allowed":""}
          `.trim().replace(/\s+/g," "),"aria-label":"Kapat",disabled:m,children:a.jsx("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",className:"w-full h-full",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]})};l.displayName="BaseChip";let i=l},83428:(e,r,t)=>{"use strict";t.d(r,{Z:()=>d});var a=t(10326),s=t(17577);let n={sm:"h-10 px-3 text-sm",md:"h-12 px-4 text-base",lg:"h-14 px-5 text-lg"},o={default:"border-gray-200 bg-white focus:border-primary focus:ring-primary/20",outlined:"border-2 border-gray-200 bg-white focus:border-primary focus:ring-primary/20",filled:"border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-primary/20"},l={sm:"text-[18px]",md:"text-[20px]",lg:"text-[22px]"},i=(0,s.forwardRef)(({label:e,errorMessage:r,startIcon:t,endIcon:s,size:i="md",variant:d="default",fullWidth:c=!1,helperText:p,required:g,containerClassName:u="",wrapperClassName:x="",className:b="",disabled:m,...y},h)=>{let f=!!r,w=`
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
      ${n[i]}
      ${o[d]}
      ${f?"border-red-500 focus:border-red-500 focus:ring-red-500/20":""}
      ${t?"pl-10":""}
      ${s?"pr-10":""}
      ${b}
    `.trim().replace(/\s+/g," "),v=`
      absolute
      inset-y-0
      left-0
      pl-3
      flex
      items-center
      pointer-events-none
      text-gray-400
      ${f?"text-red-500":""}
      ${m?"text-gray-300":""}
    `.trim().replace(/\s+/g," ");return(0,a.jsxs)("div",{className:`space-y-1.5 ${c?"w-full":""} ${u}`.trim(),children:[e&&(0,a.jsxs)("label",{htmlFor:y.id,className:`
              text-sm
              font-semibold
              ${f?"text-red-600":"text-secondary-green"}
              ${m?"text-gray-400":""}
            `.trim().replace(/\s+/g," "),children:[e,g&&a.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),(0,a.jsxs)("div",{className:`relative ${c?"w-full":""} ${x}`.trim(),children:[t&&a.jsx("div",{className:v,children:a.jsx("div",{className:l[i]+" flex items-center justify-center",children:t})}),a.jsx("input",{ref:h,className:w,disabled:m,"aria-invalid":f,"aria-describedby":r||p?`${y.id||"input"}-${r?"error":"helper"}`:void 0,...y}),s&&a.jsx("div",{className:`
              absolute
              inset-y-0
              right-0
              pr-3
              flex
              items-center
              pointer-events-none
              text-gray-400
              ${f?"text-red-500":""}
              ${m?"text-gray-300":""}
            `.trim().replace(/\s+/g," "),children:a.jsx("div",{className:l[i]+" flex items-center justify-center",children:s})})]}),(r||p)&&(0,a.jsxs)("div",{children:[r&&a.jsx("p",{id:`${y.id||"input"}-error`,className:"text-sm text-red-600",role:"alert",children:r}),!r&&p&&a.jsx("p",{id:`${y.id||"input"}-helper`,className:"text-sm text-gray-500",children:p})]})]})});i.displayName="BaseInput";let d=i},46260:(e,r,t)=>{"use strict";t.d(r,{Xg:()=>a,lv:()=>s});let a={DEFAULT_PAGE:1,DEFAULT_LIMIT:20,MAX_LIMIT:100},s={DEFAULT:{year:"numeric",month:"long",day:"numeric"},WITH_TIME:{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}}},59738:(e,r,t)=>{"use strict";t.d(r,{k:()=>s});var a=t(46260);let s=(e,r)=>e?e.toLocaleDateString(r,a.lv.WITH_TIME):null},21651:(e,r,t)=>{"use strict";t.d(r,{r:()=>a});let a={TR:"TR",EN:"EN"}},78152:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>l});var a=t(19510),s=t(31022),n=t(95156);let o=(0,t(68570).createProxy)(String.raw`/Users/eralpsoftwareweb/Desktop/sartkins/NEXT-BASE/components/Dashboard/Category/List.tsx#default`);async function l({params:e}){let r=await (0,s.Z)("category.page");return(0,a.jsxs)("div",{children:[a.jsx("div",{className:"mb-6",children:a.jsx(n.Z,{title:r("title"),description:r("description")})}),a.jsx(o,{})]})}},95156:(e,r,t)=>{"use strict";t.d(r,{Z:()=>s});var a=t(19510);let s=({title:e,description:r})=>(0,a.jsxs)("div",{children:[a.jsx("h1",{className:"text-2xl font-bold text-slate-900 mb-2",children:e}),a.jsx("p",{className:"text-gray-600 text-sm",children:r})]})},31022:(e,r,t)=>{"use strict";t.d(r,{Z:()=>l});var a=t(71159),s=t(68307),n=t(11859),o=(0,a.cache)(function(e,r){return function({_cache:e=(0,n.d)(),_formatters:r=(0,n.b)(e),getMessageFallback:t=n.f,messages:a,namespace:s,onError:o=n.g,...l}){return function({messages:e,namespace:r,...t},a){return e=e["!"],r=(0,n.r)(r,"!"),(0,n.e)({...t,messages:e,namespace:r})}({...l,onError:o,cache:e,formatters:r,getMessageFallback:t,messages:{"!":a},namespace:s?`!.${s}`:"!"},0)}({...e,namespace:r})}),l=(0,a.cache)(async function(e){let r,t;return"string"==typeof e?r=e:e&&(t=e.locale,r=e.namespace),o(await (0,s.Z)(t),r)})}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),a=r.X(0,[9276,2298,702,9165,4948,6226,1989,9830,7356,5681,3462],()=>t(36605));module.exports=a})();