(()=>{var e={};e.id=974,e.ids=[974],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},9551:e=>{"use strict";e.exports=require("url")},5216:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>a.a,__next_app__:()=>c,pages:()=>p,routeModule:()=>u,tree:()=>d});var n=t(260),i=t(8203),s=t(5155),a=t.n(s),o=t(7292),l={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);t.d(r,l);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,5104)),"C:\\Users\\heart\\Documents\\QikEarn\\link-share\\my-link\\app\\page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,6055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,9611)),"C:\\Users\\heart\\Documents\\QikEarn\\link-share\\my-link\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(t.t.bind(t,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(t.t.bind(t,1485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,6055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],p=["C:\\Users\\heart\\Documents\\QikEarn\\link-share\\my-link\\app\\page.tsx"],c={require:t,loadChunk:()=>Promise.resolve()},u=new n.AppPageRouteModule({definition:{kind:i.RouteKind.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},3477:(e,r,t)=>{Promise.resolve().then(t.bind(t,5728))},9925:(e,r,t)=>{Promise.resolve().then(t.bind(t,1156))},3660:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,3219,23)),Promise.resolve().then(t.t.bind(t,4863,23)),Promise.resolve().then(t.t.bind(t,5155,23)),Promise.resolve().then(t.t.bind(t,802,23)),Promise.resolve().then(t.t.bind(t,9350,23)),Promise.resolve().then(t.t.bind(t,8530,23)),Promise.resolve().then(t.t.bind(t,8921,23))},508:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,6959,23)),Promise.resolve().then(t.t.bind(t,3875,23)),Promise.resolve().then(t.t.bind(t,8903,23)),Promise.resolve().then(t.t.bind(t,7174,23)),Promise.resolve().then(t.t.bind(t,4178,23)),Promise.resolve().then(t.t.bind(t,7190,23)),Promise.resolve().then(t.t.bind(t,1365,23))},9128:()=>{},5976:()=>{},1156:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>s});var n=t(5512),i=t(8009);function s(){let[e,r]=(0,i.useState)(!1),t=async()=>{r(!0);try{let e=await fetch("/api/getRedirect?linkId=123abc"),r=await e.json();r.redirectUrl?window.location.href=r.redirectUrl:alert("Invalid redirect link.")}catch(e){console.error("Error fetching redirect URL:",e),alert("Error fetching redirect URL. Please try again.")}finally{r(!1)}};return(0,n.jsxs)("div",{style:{textAlign:"center",marginTop:"50px"},children:[(0,n.jsx)("h1",{children:"Ready to visit the publishers page?"}),(0,n.jsx)("button",{onClick:t,disabled:e,style:{padding:"10px 20px",fontSize:"16px",cursor:e?"not-allowed":"pointer",backgroundColor:e?"#ccc":"#0070f3",color:"white",border:"none",borderRadius:"5px",marginTop:"20px"},children:e?"Redirecting...":"Go to Publisher Page"})]})}},9611:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>d,metadata:()=>l});var n=t(2740),i=t(7879),s=t.n(i),a=t(3298),o=t.n(a);t(2704);let l={title:"Create Next App",description:"Generated by create next app"};function d({children:e}){return(0,n.jsx)("html",{lang:"en",children:(0,n.jsx)("body",{className:`${s().variable} ${o().variable} antialiased`,children:e})})}},5104:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>s});var n=t(2740),i=t(5728);function s(){return(0,n.jsx)("div",{className:"grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]",children:(0,n.jsx)(i.default,{})})}},5728:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>n});let n=(0,t(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\heart\\\\Documents\\\\QikEarn\\\\link-share\\\\my-link\\\\app\\\\share\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\heart\\Documents\\QikEarn\\link-share\\my-link\\app\\share\\page.tsx","default")},6055:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>i});var n=t(8077);let i=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,n.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},2704:()=>{}};var r=require("../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),n=r.X(0,[638,949,77],()=>t(5216));module.exports=n})();