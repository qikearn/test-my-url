(()=>{var e={};e.id=794,e.ids=[794],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},4870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},715:(e,r,t)=>{"use strict";t.r(r),t.d(r,{patchFetch:()=>k,routeModule:()=>d,serverHooks:()=>g,workAsyncStorage:()=>l,workUnitAsyncStorage:()=>x});var s={};t.r(s),t.d(s,{GET:()=>c});var n=t(2706),o=t(8203),i=t(5994);let a={};function u(){return Math.random().toString(36).substring(2)+Date.now().toString(36)}var p=t(9187);async function c(e){try{let r=new URL(e.url).searchParams.get("linkId");if(!r)return p.NextResponse.json({error:"Link ID is required."},{status:400});let t="http://localhost:3001",s=function(e,r){let t=u(),s=u();return a[e]={publisherUrl:r,taskToken:t,sessionToken:s,completed:!1},s}(r,t),n=p.NextResponse.json({redirectUrl:t});return n.cookies.set("sessionToken",s,{httpOnly:!0,secure:!1,maxAge:3600}),n}catch(r){let e=r instanceof Error?r.message:"Unknown error occurred";return p.NextResponse.json({error:e},{status:500})}}let d=new n.AppRouteRouteModule({definition:{kind:o.RouteKind.APP_ROUTE,page:"/api/getRedirect/route",pathname:"/api/getRedirect",filename:"route",bundlePath:"app/api/getRedirect/route"},resolvedPagePath:"C:\\Users\\heart\\Documents\\QikEarn\\link-share\\my-link\\app\\api\\getRedirect\\route.ts",nextConfigOutput:"",userland:s}),{workAsyncStorage:l,workUnitAsyncStorage:x,serverHooks:g}=d;function k(){return(0,i.patchFetch)({workAsyncStorage:l,workUnitAsyncStorage:x})}},6487:()=>{},8335:()=>{}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[638,452],()=>t(715));module.exports=s})();