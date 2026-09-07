import{a as L,h9 as Xs,j as t,S as U,dr as Wt,g as S,A as T,ha as l,hb as ze,df as Js,B as la,dc as da,b as ca,r as c,hc as en,g0 as be,hd as ua,f7 as ga,he as ha,hf as pa,hg as fa,hh as ma,hi as xa,hj as lt,u as $e,k as Ce,y,v as me,fI as ya,hk as fe,ci as ba,eT as ja,hl as tn,hm as wa,hn as Ma,d as re,ho as Ve,T as J,H as Q,hp as Ca,w as pe,hq as Me,bV as ke,hr as va,hs as Sa,ht as Ia,E as Da,hu as $a,hv as Bt,cA as qt,R as sn,b3 as nn,bD as Gt,b1 as an,b2 as dt,bl as H,bT as gt,J as ht,cZ as Yt,hw as rn,dT as on,cB as _,cy as X,dZ as ln,hx as Qt,ge as ve,n as ka,M as et,bU as Ae,dA as Aa,fO as xe,hy as We,dx as Fa,dy as Ea,c as dn,hz as Ra,Y as Ta,Q as La,h as Zt,f0 as Oa,f2 as Pa,f4 as Ba,e$ as Na,f1 as _a,f3 as Ua,hA as za,b4 as Ka,dh as Ha,F as pt,K as cn,hB as Va,fH as Wa,gh as qa,aa as Ga,fS as ft,I as mt,dQ as Se,cQ as Mt,hC as Ya,bO as Qa,hD as Za,p as Xa,hE as Ja,hF as er,hG as tr,hH as sr,hI as nr,hJ as ar,L as xs,P as un,e2 as rr,hK as Ct,an as or,gt as ir,gu as lr,hL as dr,hM as cr,fU as ur,W as gr,X as hr}from"./strapi-AzH4viPV.js";import{g as pr}from"./users-CHXWXr2I.js";import{l as fr,m as mr,D as xr,p as yr,k as br,P as jr,u as gn,f as hn,e as pn}from"./core.esm-DkMufpi6.js";const wr=()=>{const{formatMessage:e}=L(),[s,n]=Xs("STRAPI_UPLOAD_LIBRARY_BETA_NOTICE_DISMISSED",!1);return s?null:t.jsx(U,{paddingBottom:4,children:t.jsx(Wt,{variant:"default",onClose:()=>n(!0),closeLabel:e({id:l("beta.notice.close"),defaultMessage:"Close"}),title:e({id:l("plugin.name"),defaultMessage:"Media Library"}),children:t.jsxs(S,{tag:"span",gap:2,alignItems:"center",children:[t.jsx(U,{tag:"span",background:"neutral150",hasRadius:!0,paddingLeft:2,paddingRight:2,shrink:0,children:t.jsx(T,{variant:"sigma",textColor:"neutral600",children:e({id:l("beta.badge"),defaultMessage:"Beta"})})}),t.jsx(T,{tag:"span",children:e({id:l("beta.notice.content"),defaultMessage:"This is a beta version of the Media Library. Some features are still in progress — please report any issue you run into."})})]})})})},Mr=["image/png","image/jpeg","image/webp","image/heic","image/heif"],fn=e=>Mr.includes(e),Cr=20,ys=Cr*2,vr=ze.injectEndpoints({endpoints:e=>({getUploadSettings:e.query({query:()=>({url:"/upload/settings",method:"GET"})})})}),{useGetUploadSettingsQuery:Xt}=vr,xt=e=>{const s=Js(),{data:n}=Xt();return!s||!(n?.data?.aiMetadata??!1)?!1:e===void 0?!0:fn(e.mime)},{main:ud,...Sr}=da,ce=()=>{const{allowedActions:e,isLoading:s}=la(Sr);return{isLoading:s,canCreate:!!e.canCreate,canUpdate:!!e.canUpdate,canDownload:!!e.canDownload,canCopyLink:!!e.canCopyLink}},Ir="v2",te="upload",je=()=>{const{trackUsage:e}=ca(),{data:s}=Xt(),n=Js();return{trackUsage:c.useCallback((r,o)=>e(r,{...o,...n?{isAiMediaLibraryConfigured:!!s?.data?.aiMetadata}:{},mediaLibraryVersion:Ir}),[e,n,s])}},Jt=e=>encodeURIComponent(e).replace(/\+/g,"%2B"),Dr=e=>typeof e=="object"&&e!==null&&"data"in e,bs=e=>Dr(e)?e.data:e,$r=ze.injectEndpoints({endpoints:e=>({getFolders:e.query({query:(s={})=>{const{parentId:n,sort:a,search:r,filters:o=[]}=s,i={sort:a??"name:ASC",populate:{parent:!0}};if(r)i._q=Jt(r),o.length>0&&(i.filters={$and:[...o]});else{const d=n!=null?{parent:{id:n}}:{parent:{id:{$null:!0}}};i.filters={$and:[d,...o]}}return{url:"/upload/folders",method:"GET",config:{params:i}}},transformResponse:s=>bs(s),providesTags:s=>s?[...s.map(({id:n})=>({type:"Folder",id:n})),{type:"Folder",id:"LIST"}]:[{type:"Folder",id:"LIST"}]}),createFolder:e.mutation({query:s=>({url:"/upload/folders",method:"POST",data:s}),transformResponse:s=>s.data,invalidatesTags:[{type:"Folder",id:"LIST"},{type:"Folder",id:"STRUCTURE"}]}),updateFolder:e.mutation({query:({id:s,...n})=>({url:`/upload/folders/${s}`,method:"PUT",data:n}),transformResponse:s=>s.data,invalidatesTags:(s,n,{id:a})=>[{type:"Folder",id:a},{type:"Folder",id:"LIST"},{type:"Folder",id:"STRUCTURE"}]}),getFolderStructure:e.query({query:()=>({url:"/upload/folder-structure",method:"GET"}),transformResponse:s=>s?.data??s??[],providesTags:[{type:"Folder",id:"STRUCTURE"}]}),getAllFolders:e.query({query:()=>({url:"/upload/folders",method:"GET"}),transformResponse:s=>bs(s??[]),providesTags:s=>s?[...s.map(({id:n})=>({type:"Folder",id:n})),{type:"Folder",id:"LIST"}]:[{type:"Folder",id:"LIST"}]}),getFolder:e.query({query:({id:s})=>({url:`/upload/folders/${s}`,method:"GET",config:{params:{populate:{parent:{populate:{parent:"*"}},children:{count:!0},files:{count:!0}}}}}),transformResponse:s=>s.data,providesTags:(s,n,{id:a})=>[{type:"Folder",id:a},{type:"Folder",id:"LIST"}]}),bulkMove:e.mutation({query:({fileIds:s=[],folderIds:n=[],destinationFolderId:a})=>({url:"/upload/actions/bulk-move",method:"POST",data:{fileIds:s,folderIds:n,destinationFolderId:a}}),transformResponse:s=>s.data,invalidatesTags:[{type:"Asset",id:"LIST"},{type:"Folder",id:"LIST"},{type:"Folder",id:"STRUCTURE"}]})})}),{useCreateFolderMutation:kr,useUpdateFolderMutation:Ar,useGetFoldersQuery:Fr,useGetFolderQuery:es,useGetAllFoldersQuery:Er,useGetFolderStructureQuery:ts,useBulkMoveMutation:mn}=$r,Ke=e=>e==null?null:typeof e=="object"?e.id??null:typeof e=="number"?e:Number(e)||null,xn={fileFolderId:()=>{},folderParentId:()=>{}},Rr=(e,s)=>{const n=new Map,a=new Map;return e.forEach(r=>{n.set(r.id,Ke(r.folder))}),s.forEach(r=>{a.set(r.id,Ke(r.parent))}),{fileFolderId:r=>n.get(r),folderParentId:r=>a.get(r)}},ct=(e,s,n,a)=>{const r=s==="file"?e.fileFolderId(n):e.folderParentId(n);return r===void 0?a:r},Tr=e=>{if(!e||typeof e!="object")return;const{message:s}=e;return typeof s=="string"&&s.length>0?s:void 0},yt=()=>{const{formatMessage:e,messages:s}=L();return c.useCallback((n,a)=>{const r=Tr(n);if(!r)return a;const o=l(`apiError.${r}`);return s[o]?e({id:o}):r},[e,s])},Lr=ze.injectEndpoints({endpoints:e=>({getAssets:e.query({query:(s={})=>{const{folder:n,search:a,filters:r=[],...o}=s,i={...o};if(a)i._q=Jt(a),r.length>0&&(i.filters={$and:[...r]});else{const d=n!=null?{folder:{id:n}}:{folder:{id:{$null:!0}}};i.filters={$and:[d,...r]}}return{url:"/upload/files",method:"GET",config:{params:i}}},transformResponse:s=>s,providesTags:s=>s?[...s.results.map(({id:n})=>({type:"Asset",id:n})),{type:"Asset",id:"LIST"}]:[{type:"Asset",id:"LIST"}]}),getAsset:e.query({query:s=>({url:`/upload/files/${s}`,method:"GET"}),providesTags:(s,n,a)=>[{type:"Asset",id:a}]}),updateAsset:e.mutation({query:({id:s,fileInfo:n})=>{const a=new FormData;return a.append("fileInfo",JSON.stringify(n)),{url:`/upload/files/${s}`,method:"PUT",data:a}},invalidatesTags:(s,n,{id:a})=>[{type:"Asset",id:a},{type:"Asset",id:"LIST"},{type:"Folder",id:"LIST"}]}),replaceAsset:e.mutation({query:({id:s,file:n,fileInfo:a})=>{const r=new FormData;return r.append("files",n),a&&r.append("fileInfo",JSON.stringify(a)),{url:`/upload/files/${s}/replace`,method:"POST",data:r}},invalidatesTags:(s,n,{id:a})=>[{type:"Asset",id:a},{type:"Asset",id:"LIST"}]}),deleteAsset:e.mutation({query:s=>({url:`/upload/files/${s}`,method:"DELETE"}),invalidatesTags:(s,n,a)=>[{type:"Asset",id:a},{type:"Asset",id:"LIST"},{type:"Folder",id:"LIST"}]}),bulkDeleteItems:e.mutation({query:({fileIds:s,folderIds:n})=>({url:"/upload/actions/bulk-delete",method:"POST",data:{fileIds:s,folderIds:n}}),invalidatesTags:[{type:"Asset",id:"LIST"},{type:"Folder",id:"LIST"},{type:"Folder",id:"STRUCTURE"}]})})}),{useGetAssetsQuery:ss,useGetAssetQuery:Or,useUpdateAssetMutation:Pr,useReplaceAssetMutation:yn,useDeleteAssetMutation:Br,useBulkDeleteItemsMutation:Nr}=Lr,bn=async(e,s)=>{const a=await(await fetch(e)).blob(),r=window.URL.createObjectURL(a),o=document.createElement("a");o.href=r,o.setAttribute("download",s),o.click(),window.URL.revokeObjectURL(r)},_r={pdf:xa,csv:ma,xls:fa,zip:pa},qe=(e,s)=>{const n=en(s);return e?.includes(be.Image)?ua:e?.includes(be.Video)?ga:e?.includes(be.Audio)?ha:n?_r[n]||lt:lt},jn=e=>{const{formatMessage:s}=L(),{data:n,isLoading:a}=es({id:e},{skip:e===null}),{data:r,isLoading:o}=ss({folder:null,pageSize:1},{skip:e!==null}),i=s({id:l("plugin.home"),defaultMessage:"Home"});return e===null?o?{title:i,itemCount:0}:{title:i,itemCount:r?.pagination?.total??0}:a||!n?{title:"",itemCount:0}:{title:n.name,itemCount:n.files?.count??0}},it="assetId",wn=e=>{const s=e?parseInt(e,10):NaN;return Number.isNaN(s)?null:s},Ur=()=>{const[{query:e}]=$e();return wn(e?.[it])!==null},zr=y(S)`
  position: absolute;
  inset: 0;
  z-index: ${({$zIndex:e})=>e};
  align-items: center;
  justify-content: center;
  background: ${({theme:e})=>e.colors.neutral0};
  opacity: 0.7;
`,Mn=({children:e,zIndex:s=20,hideLabel:n=!1})=>t.jsx(zr,{$zIndex:s,children:t.jsx(Ce,{small:n,children:e})}),Kr=1,Hr=({anchorX:e,anchorY:s,point:n,aspectRatio:a})=>{let r=Math.abs(n.x-e),o=Math.abs(n.y-s);a&&(r/a>=o?o=r/a:r=o*a);const i=n.x<e?e-r:e,d=n.y<s?s-o:s;return{x:i,y:d,width:r,height:o}},Vr=()=>{const[e,s]=c.useState({width:0,height:0}),[n,a]=c.useState({x:0,y:0,width:0,height:0}),[r,o]=c.useState(null),i=c.useRef(null),d=c.useCallback(h=>{i.current=h;const x={width:h.naturalWidth,height:h.naturalHeight};s(x),a({x:0,y:0,width:x.width,height:x.height})},[]),u=(h,x,v)=>Math.min(v,Math.max(x,h)),p=c.useCallback(h=>{a(x=>{const v=e.width-x.x,M=e.height-x.y;let b=h.width!==void 0?u(h.width,1,v):x.width,k=h.height!==void 0?u(h.height,1,M):x.height;return r&&(h.width!==void 0?k=u(b/r,1,M):h.height!==void 0&&(b=u(k*r,1,v))),{...x,width:b,height:k}})},[e.width,e.height,r]),g=c.useCallback(h=>{a(x=>{const v=h.x!==void 0?u(h.x,0,e.width-x.width):x.x,M=h.y!==void 0?u(h.y,0,e.height-x.height):x.y;return{...x,x:v,y:M}})},[e.width,e.height]),f=c.useCallback(h=>{o(h),h&&a(x=>{const v=e.width-x.x,M=e.height-x.y;let b=x.width,k=b/h;return k>M&&(k=M,b=k*h),b>v&&(b=v,k=b/h),{...x,width:Math.round(b),height:Math.round(k)}})},[e.width,e.height]),m=c.useCallback((h,x,v)=>new Promise((M,b)=>{const k=i.current;if(!k){b(new Error("Image not ready: call init() before produceFile()."));return}const C=document.createElement("canvas");C.width=Math.max(1,Math.round(n.width)),C.height=Math.max(1,Math.round(n.height));const w=C.getContext("2d");if(!w){b(new Error("Could not get a 2D canvas context to crop the image."));return}w.drawImage(k,n.x,n.y,n.width,n.height,0,0,C.width,C.height),C.toBlob(A=>{if(!A){b(new Error("Could not export the cropped image to a blob."));return}M(new File([A],h,{type:x,lastModified:v?new Date(v).getTime():Date.now()}))},x,Kr)}),[n.x,n.y,n.width,n.height]);return{init:d,crop:n,naturalSize:e,aspectRatio:r,setCropSize:p,setCropPosition:g,setAspectRatio:f,produceFile:m,width:Math.round(n.width),height:Math.round(n.height)}},tt=5.6,vt=12,Wr=y(S)`
  position: fixed;
  z-index: 1200;
  flex-direction: column;
  top: ${({theme:e})=>e.spaces[1]};
  left: ${({theme:e})=>e.spaces[1]};
  right: ${({theme:e})=>e.spaces[1]};
  bottom: ${({theme:e})=>e.spaces[1]};
  border-radius: ${({theme:e})=>e.borderRadius};
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
  background: ${({theme:e})=>e.colors.neutral0};
  /* Focused programmatically on open (tabIndex -1) — no visible ring needed. */
  outline: none;
`,qr=y(S)`
  width: 100%;
  gap: ${({theme:e})=>e.spaces[2]};
  padding: ${({theme:e})=>`${e.spaces[3]} ${e.spaces[5]}`};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
  background: ${({theme:e})=>e.colors.neutral0};
`,Gr=y(U)`
  width: 100%;
  position: relative;
  flex: 1;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0 ${({theme:e})=>e.spaces[4]};
  background: repeating-conic-gradient(
      ${({theme:e})=>e.colors.neutral100} 0% 25%,
      ${({theme:e})=>e.colors.neutral0} 0% 50%
    )
    50% / 20px 20px;
`,Yr=y.div`
  position: relative;
  max-width: 100%;
  max-height: 100%;
  ${({$aspect:e})=>e?`aspect-ratio: ${e};`:""}

  img {
    display: block;
    width: 100%;
    height: 100%;
    user-select: none;
    -webkit-user-drag: none;
  }
`,Qr=y.div`
  position: absolute;
  border: 1px dashed ${({theme:e})=>e.colors.primary600};
  box-shadow: 0 0 0 9999px rgba(33, 33, 52, 0.5);
  cursor: move;
  /* Without this, touch browsers claim the gesture for scrolling and fire
     pointercancel mid-drag — the crop drag dies while the finger is down. */
  touch-action: none;
`,st=y.button`
  position: absolute;
  width: ${vt}px;
  height: ${vt}px;
  margin: -${vt/2}px;
  padding: 0;
  border: 1px solid ${({theme:e})=>e.colors.primary600};
  border-radius: 2px;
  background: ${({theme:e})=>e.colors.neutral0};
  cursor: ${({$cursor:e})=>e};
  touch-action: none;
`,Zr=y.button`
  position: absolute;
  width: ${tt}rem;
  height: ${tt}rem;
  margin: ${-tt/2}rem 0 0 ${-tt/2}rem;
  border-radius: 50%;
  border: 1px solid ${({theme:e})=>e.colors.neutral800};
  background: transparent;
  cursor: grab;
  padding: 0;
  touch-action: none;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.16);
    transform: translate(-50%, -50%);
  }
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({theme:e})=>e.colors.neutral800};
    transform: translate(-50%, -50%);
  }

  &:active {
    cursor: grabbing;
  }
`,Xr=y(U)`
  display: none;

  ${({theme:e})=>e.breakpoints.medium} {
    display: block;
    position: absolute;
    right: ${({theme:e})=>e.spaces[1]};
    bottom: ${({theme:e})=>e.spaces[1]};
    width: 100%;
    max-width: 32rem;
    padding: ${({theme:e})=>e.spaces[3]};
    border-radius: ${({theme:e})=>e.borderRadius};
    background: ${({theme:e})=>e.colorScheme==="dark"?e.colors.neutral150:e.colors.neutral900};
    z-index: 20;
  }
`,Jr=y(S)`
  width: 100%;
  justify-content: space-between;
  padding: ${({theme:e})=>`${e.spaces[3]} ${e.spaces[5]}`};
  border-top: 1px solid ${({theme:e})=>e.colors.neutral150};
  background: ${({theme:e})=>e.colors.neutral0};
`,nt=y(J.Root)`
  flex-direction: row;
  align-items: center;
`,at=y(Ca)`
  width: 8.4rem;
`,js=y(J.Label)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.6rem;
  height: 1.6rem;
`,eo=y(U)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);

  svg {
    display: block;
  }
`,to=()=>t.jsx(eo,{children:t.jsx("svg",{width:"17",height:"49",viewBox:"0 0 17 49",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M0.5 0.5H8.5C12.9183 0.5 16.5 4.08172 16.5 8.5M0.5 48.5H8.5C12.9183 48.5 16.5 44.9183 16.5 40.5",stroke:"#666687",strokeLinecap:"round"})})}),so=({asset:e,isBusy:s=!1,onClose:n,onApply:a,onSaveAsCopy:r,canSaveAsCopy:o})=>{const{formatMessage:i}=L(),{toggleNotification:d}=me(),p=ya().colorScheme==="dark",g=p?"neutral1000":"neutral0",f=p?"neutral600":"neutral200",m=c.useRef(null),h=c.useRef(null),x=c.useRef(null);c.useEffect(()=>{x.current?.focus()},[]);const{init:v,crop:M,naturalSize:b,aspectRatio:k,setCropSize:C,setCropPosition:w,setAspectRatio:A,produceFile:j,width:$,height:P}=Vr(),[E,Y]=c.useState(!1),[N,I]=c.useState(e.focalPoint??{x:50,y:50}),D=fe(e.url),R=e.updatedAt&&!e.isUrlSigned?new Date(e.updatedAt).getTime():void 0,W=R!==void 0?`${D}${D.includes("?")?"&":"?"}updatedAt=${R}`:D,z=()=>{m.current&&v(m.current)},V=B=>{const G=h.current?.getBoundingClientRect();if(!G||!b.width||!b.height)return null;const q=b.width/G.width,ne=b.height/G.height;return{x:(B.clientX-G.left)*q,y:(B.clientY-G.top)*ne}},F=c.useRef(null);c.useEffect(()=>()=>{F.current?.()},[]);const O=(B,G)=>{B.preventDefault(),B.stopPropagation();const{pointerId:q}=B;try{B.currentTarget.setPointerCapture(q)}catch{}const ne=oe=>{oe.pointerId===q&&G(oe)},ae=()=>{window.removeEventListener("pointermove",ne),window.removeEventListener("pointerup",he),window.removeEventListener("pointercancel",he),F.current=null},he=oe=>{oe.pointerId===q&&ae()};F.current?.(),F.current=ae,window.addEventListener("pointermove",ne),window.addEventListener("pointerup",he),window.addEventListener("pointercancel",he)},K=B=>{const G=V(B);if(!G)return;const q={...M};O(B,ne=>{const ae=V(ne);ae&&w({x:q.x+(ae.x-G.x),y:q.y+(ae.y-G.y)})})},Z=B=>G=>{const q={...M},ne=B==="tl"||B==="bl"?q.x+q.width:q.x,ae=B==="tl"||B==="tr"?q.y+q.height:q.y;O(G,he=>{const oe=V(he);if(!oe)return;const{x:Xe,y:Je,width:bt,height:jt}=Hr({anchorX:ne,anchorY:ae,point:oe,aspectRatio:E?k:null});w({x:Xe,y:Je}),C({width:bt,height:jt})})},ie=()=>{Y(B=>{const G=!B;return A(G&&P?$/P:null),G})},ge=B=>{O(B,G=>{const q=V(G);if(!q)return;const ne=(q.x-M.x)/M.width*100,ae=(q.y-M.y)/M.height*100;I({x:Math.round(Math.min(100,Math.max(0,ne))),y:Math.round(Math.min(100,Math.max(0,ae)))})})},Ye=Math.round(N.x/100*$),Qe=Math.round(N.y/100*P),Pe=(B,G)=>{const q=B==="x"?$:P;if(!q)return;const ne=Math.min(100,Math.max(0,G/q*100));I(ae=>({...ae,[B]:Math.round(ne)}))},le=b.width&&b.height?{left:M.x/b.width*100,top:M.y/b.height*100,width:M.width/b.width*100,height:M.height/b.height*100}:null,Be=le!==null,Ze=async B=>{if(!Be)return;let G;try{G=await j(e.name,e.mime??"image/png",e.updatedAt)}catch{d({type:"danger",message:i({id:l("asset-details.crop.export-error"),defaultMessage:"Could not process the cropped image."})});return}const q={x:Math.round(N.x),y:Math.round(N.y)};B==="apply"?a(G,q):r(G,q)};return t.jsx(ba,{children:t.jsx(ja,{onEscape:n,skipAutoFocus:!0,children:t.jsxs(Wr,{ref:x,tabIndex:-1,children:[t.jsxs(qr,{alignItems:"center",children:[t.jsx(tn,{"aria-hidden":!0}),t.jsx(T,{variant:"omega",fontWeight:"bold",children:i({id:l("asset-details.crop.title"),defaultMessage:"Crop & Focus area"})})]}),t.jsxs(Gr,{children:[t.jsxs(Yr,{ref:h,$aspect:b.width&&b.height?b.width/b.height:void 0,children:[t.jsx("img",{ref:m,src:W,alt:e.name,crossOrigin:"anonymous",onLoad:z,draggable:!1}),le?t.jsxs(Qr,{style:{left:`${le.left}%`,top:`${le.top}%`,width:`${le.width}%`,height:`${le.height}%`},onPointerDown:K,children:[t.jsx(st,{type:"button","aria-label":i({id:l("asset-details.crop.resize.top-left"),defaultMessage:"Resize top-left"}),$cursor:"nwse-resize",style:{left:0,top:0},onPointerDown:Z("tl")}),t.jsx(st,{type:"button","aria-label":i({id:l("asset-details.crop.resize.top-right"),defaultMessage:"Resize top-right"}),$cursor:"nesw-resize",style:{right:0,top:0},onPointerDown:Z("tr")}),t.jsx(st,{type:"button","aria-label":i({id:l("asset-details.crop.resize.bottom-left"),defaultMessage:"Resize bottom-left"}),$cursor:"nesw-resize",style:{left:0,bottom:0},onPointerDown:Z("bl")}),t.jsx(st,{type:"button","aria-label":i({id:l("asset-details.crop.resize.bottom-right"),defaultMessage:"Resize bottom-right"}),$cursor:"nwse-resize",style:{right:0,bottom:0},onPointerDown:Z("br")}),t.jsx(Zr,{type:"button","aria-label":i({id:l("asset-details.crop.focal-point"),defaultMessage:"Focal point"}),style:{left:`${N.x}%`,top:`${N.y}%`},onPointerDown:ge})]}):null]}),t.jsxs(Xr,{children:[t.jsxs(S,{direction:"column",alignItems:"stretch",gap:1,paddingBottom:3,children:[t.jsx(T,{variant:"omega",fontWeight:"bold",textColor:g,children:i({id:l("asset-details.crop.title"),defaultMessage:"Crop & Focus area"})}),t.jsx(T,{variant:"pi",textColor:f,children:i({id:l("asset-details.crop.hint"),defaultMessage:"Set the crop area with the rectangle. Pin the always-visible area with the circle."})})]}),t.jsxs(S,{gap:6,alignItems:"center",children:[t.jsxs(S,{alignItems:"center",gap:2,children:[t.jsxs(S,{direction:"column",gap:2,children:[t.jsxs(nt,{name:"crop-width",gap:2,children:[t.jsx(js,{textColor:g,children:t.jsx(wa,{})}),t.jsx(at,{"aria-label":i({id:l("asset-details.crop.width"),defaultMessage:"Width (px)"}),value:$,min:1,max:b.width||void 0,onValueChange:B=>{B!==void 0&&C({width:B})}})]}),t.jsxs(nt,{name:"crop-height",gap:2,children:[t.jsx(js,{textColor:g,children:t.jsx(Ma,{})}),t.jsx(at,{"aria-label":i({id:l("asset-details.crop.height"),defaultMessage:"Height (px)"}),value:P,min:1,max:b.height||void 0,onValueChange:B=>{B!==void 0&&C({height:B})}})]})]}),t.jsxs(S,{position:"relative",children:[t.jsx(re,{label:i({id:l("asset-details.crop.aspect-lock"),defaultMessage:"Lock aspect ratio"}),variant:E?"secondary":"ghost",onClick:ie,children:t.jsx(Ve,{})}),t.jsx(to,{})]})]}),t.jsxs(S,{direction:"column",gap:2,marginLeft:"auto",children:[t.jsxs(nt,{name:"focal-x",gap:2,children:[t.jsx(J.Label,{textColor:g,children:i({id:l("asset-details.crop.focal-x-axis"),defaultMessage:"X"})}),t.jsx(at,{"aria-label":i({id:l("asset-details.crop.focal-x"),defaultMessage:"Focal point X (px)"}),value:Ye,onValueChange:B=>{B!==void 0&&Pe("x",B)}})]}),t.jsxs(nt,{name:"focal-y",gap:2,children:[t.jsx(J.Label,{textColor:g,children:i({id:l("asset-details.crop.focal-y-axis"),defaultMessage:"Y"})}),t.jsx(at,{"aria-label":i({id:l("asset-details.crop.focal-y"),defaultMessage:"Focal point Y (px)"}),value:Qe,onValueChange:B=>{B!==void 0&&Pe("y",B)}})]})]})]})]})]}),t.jsxs(Jr,{alignItems:"center",children:[t.jsx(Q,{variant:"tertiary",onClick:n,disabled:s,children:i({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),t.jsxs(S,{gap:2,children:[o&&t.jsx(Q,{variant:"secondary",onClick:()=>Ze("copy"),loading:s,disabled:!Be,children:i({id:l("asset-details.crop.save-as-copy"),defaultMessage:"Save as copy"})}),t.jsx(Q,{variant:"default",onClick:()=>Ze("apply"),loading:s,disabled:!Be,children:i({id:l("asset-details.crop.apply"),defaultMessage:"Apply"})})]})]})]})})})},_e=y(U)`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  max-height: 24rem;
  overflow: hidden;
  border-radius: ${({theme:e})=>e.borderRadius};
  padding: ${({theme:e})=>e.spaces[3]};
  background: repeating-conic-gradient(
      ${({theme:e})=>e.colors.neutral100} 0% 25%,
      transparent 0% 50%
    )
    50% / 20px 20px;
`,rt=y(S)`
  justify-content: center;
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
`,no=y.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`,ao=y(S)`
  position: absolute;
  top: ${({theme:e})=>e.spaces[3]};
  right: ${({theme:e})=>e.spaces[3]};
  z-index: 3;
`,ro=y.video`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`,oo=y.audio`
  width: 100%;
`,io=y.iframe`
  width: 100%;
  height: 100%;
  min-height: 200px;
  border: none;
`,lo=y(S)`
  height: 100%;
  aspect-ratio: 1;
  width: auto;
  max-width: 100%;
  margin: 0 auto;
  color: ${({theme:e})=>e.colors.neutral500};
  background: ${({theme:e})=>e.colors.neutral150};
`,co=y(S)`
  position: absolute;
  inset: 0;
  z-index: 1;
`,ot=()=>{const{formatMessage:e}=L();return t.jsx(co,{justifyContent:"center",alignItems:"center",children:t.jsx(Ce,{children:e({id:"app.loading",defaultMessage:"Loading..."})})})},uo=({asset:e,actions:s,isLoading:n=!1})=>{const{formatMessage:a}=L(),{alternativeText:r,ext:o,mime:i,url:d,updatedAt:u,isUrlSigned:p,isLocal:g}=e,f=u&&!p?new Date(u).getTime():void 0,m=C=>!C||f===void 0?C:C.includes("?")?`${C}&v=${f}`:`${C}?v=${f}`,h=m(fe(d)),[x,v]=c.useState(!1);c.useEffect(()=>{v(!1)},[h]);const M=c.useRef(null);if(c.useEffect(()=>{const C=M.current;if(!C)return;const w=()=>{const j=C.parentElement;if(!j)return;const $=j.getBoundingClientRect(),P=C.offsetWidth,E=C.offsetHeight;!P||!E||!$.width||$.height};w();const A=new ResizeObserver(w);return A.observe(C),C.parentElement&&A.observe(C.parentElement),()=>A.disconnect()},[x]),i?.includes(be.Image)){const C=m(fe(d));if(C)return t.jsxs(_e,{children:[(!x||n)&&t.jsx(ot,{}),s?t.jsx(ao,{children:s}):null,t.jsx(rt,{children:t.jsx(no,{ref:M,src:C,alt:r||e.name||"",crossOrigin:!g&&p?"anonymous":void 0,onLoad:()=>v(!0),onError:()=>v(!0)})})]})}if(i?.includes(be.Video)&&h)return t.jsxs(_e,{children:[!x&&t.jsx(ot,{}),t.jsx(rt,{children:t.jsx(ro,{src:h,controls:!0,title:e.name,onLoadedData:()=>v(!0),onError:()=>v(!0),children:a({id:l("asset-details.videoNotSupported"),defaultMessage:"Your browser does not support the video tag."})})})]});if(i?.includes(be.Audio)&&h)return t.jsxs(_e,{children:[!x&&t.jsx(ot,{}),t.jsx(rt,{children:t.jsx(S,{width:"100%",padding:4,justifyContent:"center",alignItems:"center",height:"100%",minHeight:"12rem",children:t.jsx(oo,{src:h,controls:!0,onLoadedData:()=>v(!0),onError:()=>v(!0)})})})]});if((o?.toLowerCase()==="pdf"||o?.toLowerCase()===".pdf"||i==="application/pdf")&&h)return t.jsxs(_e,{children:[!x&&t.jsx(ot,{}),t.jsx(rt,{children:t.jsx(io,{src:`${h}#toolbar=0`,title:e.name,onLoad:()=>v(!0)})})]});const k=qe(i,o);return t.jsx(_e,{children:t.jsxs(lo,{justifyContent:"center",alignItems:"center",gap:1,direction:"column",hasRadius:!0,children:[t.jsx(k,{width:24,height:24}),t.jsx(T,{variant:"pi",children:a({id:l("asset-details.noPreview"),defaultMessage:"No preview available"})})]})})},Cn=c.createContext(null),vn=()=>{const e=c.useContext(Cn);if(!e)throw new Error("useDrawerNotify must be used within AssetDetails");return e},Sn=c.createContext(null),In=()=>{const e=c.useContext(Sn);if(!e)throw new Error("useAssetOperation must be used within AssetDetails");return e},Dn=()=>{const[{query:e},s]=$e(),n=wn(e?.[it]),a=n!==null,[r,o]=c.useState(a),i=c.useRef(null);c.useEffect(()=>{a&&(i.current=n,o(!0))},[a,n]);const d=c.useCallback(g=>{g.target===g.currentTarget&&!a&&o(!1)},[a]),u=c.useCallback(g=>{s(pe(e,{[it]:String(g)}),"push",!0)},[e,s]),p=c.useCallback(()=>{s(pe(e,{[it]:void 0}),"push",!0)},[e,s]);return{assetId:a?n:i.current,isVisible:a,shouldRenderDrawer:r,onCloseAnimationEnd:d,openDetails:u,closeDetails:p}},go=y(S)`
  flex: 0 0 calc(50% - ${({theme:e})=>e.spaces[2]});
`,we=({label:e,value:s})=>t.jsxs(go,{direction:"column",justifyContent:"flex-start",alignItems:"flex-start",gap:1,children:[t.jsx(T,{variant:"sigma",textColor:"neutral600",fontWeight:"semiBold",textTransform:"uppercase",children:e}),t.jsx(T,{variant:"pi",textColor:"neutral700",children:s??"-"})]}),ho=y(U)`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;

  > form {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
    position: relative;
  }
`,po=y(U)`
  position: absolute;
  top: ${({theme:e})=>e.spaces[2]};
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  width: calc(100% - ${({theme:e})=>e.spaces[2]});
`,fo=e=>e.isDeleting?{id:l("asset-details.delete.loading"),defaultMessage:"Deleting the file…"}:e.isCropCopying?{id:l("asset-details.crop.loading"),defaultMessage:"Saving the cropped copy…"}:e.isReplacing?{id:l("asset-details.replace.loading"),defaultMessage:"Replacing the file…"}:null,mo=y(ht)`
  width: 1.6rem;
  height: 1.6rem;

  path {
    fill: ${({theme:e})=>e.colors.warning500};
  }
`,St=({name:e,label:s,required:n,disabled:a})=>{const{formatMessage:r}=L(),o=sn(e),i=qt("DetailField",f=>f.isSubmitting),d=o.value??"",[u,p]=c.useState(d);c.useEffect(()=>{p(d)},[d]);const g=r({id:l("asset-details.field.empty"),defaultMessage:"{label} is currently empty."},{label:s});return t.jsxs(J.Root,{name:e,required:n,children:[t.jsx(J.Label,{children:s}),t.jsx(nn,{value:u,onChange:f=>{p(f.target.value),o.onChange(e,f.target.value)},endAction:u?void 0:t.jsx(Gt,{label:g,children:t.jsx(mo,{"aria-label":g,role:"img"})}),type:"text",disabled:i||a})]})},xo=({label:e,rootLabel:s,folders:n,disabled:a})=>{const r=sn("folder"),o=qt("LocationField",i=>i.isSubmitting);return t.jsxs(J.Root,{name:"folder",required:!0,children:[t.jsx(J.Label,{children:e}),t.jsxs(an,{value:r.value==null?"":String(r.value),onChange:i=>{const d=i===""?null:Number(i);r.onChange("folder",d)},disabled:o||a,children:[t.jsx(dt,{value:"",children:s}),n.map(i=>t.jsx(dt,{value:String(i.id),children:i.name},i.id))]})]})},yo=()=>{const{formatMessage:e}=L(),{deleteAsset:s,isDeleting:n}=In(),[a,r]=c.useState(!1),o=async()=>{await s(),r(!1)},i=e({id:l("asset-details.delete.trigger"),defaultMessage:"Delete this file"});return t.jsxs(H.Root,{open:a,onOpenChange:r,children:[t.jsx(H.Trigger,{children:t.jsx(re,{label:i,variant:"danger-light",children:t.jsx(gt,{})})}),t.jsxs(H.Content,{children:[t.jsx(H.Header,{children:e({id:l("asset-details.delete.title"),defaultMessage:"Delete this media file?"})}),t.jsx(H.Body,{icon:t.jsx(ht,{width:"24px",height:"24px",fill:"danger600"}),textAlign:"center",children:e({id:l("asset-details.delete.description"),defaultMessage:"This file cannot be recovered once deleted. If it is currently in use, linked content will break and image containers will be empty."})}),t.jsxs(H.Footer,{children:[t.jsx(H.Cancel,{children:t.jsx(Q,{variant:"tertiary",disabled:n,fullWidth:!0,children:e({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})}),t.jsx(H.Action,{children:t.jsx(Q,{variant:"danger-light",loading:n,onClick:o,fullWidth:!0,children:e({id:"app.components.Button.confirm",defaultMessage:"Confirm"})})})]})]})]})},bo=({asset:e})=>{const{formatMessage:s}=L(),{copy:n}=Yt(),a=vn(),r=async()=>{const o=fe(e.url);if(!o)return;const i=await n(o);a({type:i?"success":"danger",message:s(i?{id:l("asset-details.copy-link.success"),defaultMessage:"Link copied."}:{id:l("asset-details.copy-link.error"),defaultMessage:"Failed to copy the link."})})};return t.jsx(re,{label:s({id:l("asset-details.copy-link.trigger"),defaultMessage:"Copy link"}),variant:"tertiary",onClick:r,children:t.jsx(Ve,{})})},jo=({asset:e})=>{const{formatMessage:s}=L(),n=vn(),[a,r]=c.useState(!1),o=async()=>{const i=fe(e.url);if(i){r(!0);try{await bn(i,e.name)}catch{n({type:"danger",message:s({id:l("asset-details.download.error"),defaultMessage:"Failed to download the file."})})}finally{r(!1)}}};return t.jsx(re,{label:s({id:l("asset-details.download.trigger"),defaultMessage:"Download"}),variant:"tertiary",onClick:o,disabled:a,children:t.jsx(rn,{})})},wo=({mime:e})=>{const{formatMessage:s}=L(),{replaceAsset:n,isReplacing:a}=In(),r=c.useRef(null),[o,i]=c.useState(!1),d=xt({mime:e}),u=()=>{i(!0)},p=()=>{i(!1),r.current?.click()},g=async f=>{const m=f.target.files?.[0];f.target.value="",m&&await n(m)};return t.jsxs(t.Fragment,{children:[t.jsx(ke,{children:t.jsx("input",{ref:r,type:"file",accept:e??"",multiple:!1,onChange:g,"aria-hidden":!0,tabIndex:-1})}),t.jsx(re,{label:s({id:l("asset-details.replace.trigger"),defaultMessage:"Replace this file"}),variant:"tertiary",onClick:u,disabled:a,children:t.jsx(on,{})}),t.jsx(H.Root,{open:o,onOpenChange:i,children:t.jsxs(H.Content,{children:[t.jsx(H.Header,{children:s({id:l("asset-details.replace.title"),defaultMessage:"Replace this media file?"})}),t.jsx(H.Body,{textAlign:"center",children:t.jsxs(S,{direction:"column",textAlign:"center",children:[t.jsx(T,{variant:"omega",children:s({id:l("asset-details.replace.description"),defaultMessage:"Current content will be permanently replaced."})}),d?t.jsx(T,{variant:"omega",children:s({id:l("asset-details.replace.description.ai"),defaultMessage:"AI will generate new metadata after upload."})}):null]})}),t.jsxs(H.Footer,{children:[t.jsx(H.Cancel,{children:t.jsx(Q,{variant:"tertiary",fullWidth:!0,children:s({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})}),t.jsx(H.Action,{children:t.jsx(Q,{variant:"secondary",onClick:p,fullWidth:!0,children:s({id:l("asset-details.replace.continue"),defaultMessage:"Continue"})})})]})]})})]})},Mo=({onCrop:e})=>{const{formatMessage:s}=L(),n=qt("AssetImageActions",a=>a.isSubmitting);return t.jsx(S,{direction:"column",gap:2,children:t.jsx(re,{label:s({id:l("asset-details.crop.trigger"),defaultMessage:"Crop"}),variant:"tertiary",onClick:e,disabled:n||!e,children:t.jsx(tn,{})})})},Co=({asset:e,closeDetails:s})=>{const{formatMessage:n,formatDate:a}=L(),r=yt(),{canCreate:o,canUpdate:i,canDownload:d,canCopyLink:u}=ce(),{data:p=[]}=Er(),{toggleNotification:g}=me(),[f]=Pr(),{trackUsage:m}=je(),[h,{isLoading:x}]=yn(),[v,{isLoading:M}]=Br(),[b,{isLoading:k}]=Ia(),[C,w]=c.useState(!1),[A,j]=c.useState(null);c.useEffect(()=>{if(!A)return;const F=window.setTimeout(()=>j(null),5e3);return()=>window.clearTimeout(F)},[A]);const $=c.useCallback(F=>j(F),[]),P=e.mime?.includes(be.Image),E={name:e.name??"",caption:e.caption??"",alternativeText:e.alternativeText??"",folder:typeof e.folder=="object"&&e.folder!==null?e.folder.id??null:e.folder??null},Y=async F=>{const O={name:F.name,caption:F.caption,alternativeText:F.alternativeText,folder:F.folder},K=await f({id:e.id,fileInfo:O});if("error"in K){$({type:"danger",message:r(K.error,n({id:l("asset-details.update.error"),defaultMessage:"Failed to update the file."}))});return}m("didEditMediaLibraryElements",{location:te,type:e.mime?.split("/")[0],changeLocation:F.folder!==E.folder}),$({type:"success",message:n({id:l("asset-details.update.success"),defaultMessage:"File updated"})})},{title:N}=jn(typeof e.folder=="object"&&e.folder!==null?e.folder.id??null:e.folder??null),I=c.useCallback(async F=>{const O=await h({id:e.id,file:F,fileInfo:{name:e.name}});if("error"in O){$({type:"danger",message:r(O.error,n({id:l("asset-details.replace.error"),defaultMessage:"Failed to replace the file."}))});return}m("didReplaceMedia",{location:te}),$({type:"success",message:n({id:l("asset-details.replace.success"),defaultMessage:"File replaced."})})},[e.id,e.name,n,r,$,h,m]),D=c.useCallback(async()=>{const F=await v(e.id);if("error"in F){$({type:"danger",message:r(F.error,n({id:l("asset-details.delete.error"),defaultMessage:"Failed to delete the asset."}))});return}g({type:"success",message:n({id:l("asset-details.delete.success"),defaultMessage:"1 element have been deleted from {folderName}"},{folderName:N})}),s()},[e.id,s,v,N,n,r,$,g]),R=F=>{$({type:"danger",message:r(F,n({id:l("asset-details.crop.error"),defaultMessage:"Failed to crop the file."}))})},W=async(F,O)=>{w(!1);const K=await h({id:e.id,file:F,fileInfo:{focalPoint:O}});if("error"in K){R(K.error);return}m("didCropFile",{location:te,duplicatedFile:!1}),$({type:"success",message:n({id:l("asset-details.crop.success"),defaultMessage:"File cropped."})})},z=async(F,O)=>{w(!1);const K=await b({file:F,fileInfo:{name:e.name,caption:e.caption??"",alternativeText:e.alternativeText??"",folder:E.folder,focalPoint:O}});if("error"in K){R(K.error);return}m("didCropFile",{location:te,duplicatedFile:!0}),$({type:"success",message:n({id:l("asset-details.crop.copy-success"),defaultMessage:"Copy created."})})},V=c.useMemo(()=>({replaceAsset:I,deleteAsset:D,isReplacing:x,isDeleting:M}),[I,D,x,M]);return t.jsx(Cn.Provider,{value:$,children:t.jsx(Sn.Provider,{value:V,children:t.jsx(ho,{children:t.jsx(Da,{method:"POST",initialValues:E,onSubmit:Y,children:({modified:F,isSubmitting:O,values:K,resetForm:Z})=>{const ie=(K.name??"").trim()==="",ge=fo({isDeleting:M,isReplacing:x,isCropCopying:k});return t.jsxs(t.Fragment,{children:[t.jsx($a,{onProceed:Z}),C&&P?t.jsx(so,{asset:e,onClose:()=>w(!1),onApply:W,onSaveAsCopy:z,canSaveAsCopy:o}):null,ge?t.jsx(Mn,{children:n(ge)}):null,A?t.jsx(po,{children:t.jsx(Wt,{variant:A.type==="success"?"success":"danger",closeLabel:n({id:"global.close",defaultMessage:"Close"}),onClose:()=>j(null),children:A.message})}):null,t.jsxs(Me.ScrollableContent,{children:[t.jsx(uo,{asset:e,actions:P&&i?t.jsx(Mo,{onCrop:()=>w(!0)}):null}),t.jsxs(S,{direction:"column",alignItems:"stretch",gap:4,paddingTop:4,paddingBottom:4,paddingLeft:5,paddingRight:5,children:[t.jsx(T,{variant:"beta",fontWeight:"semiBold",tag:"h3",children:n({id:l("asset-details.fileInfo"),defaultMessage:"File info"})}),t.jsxs(S,{wrap:"wrap",gap:4,background:"neutral100",paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:6,alignItems:"flex-start",children:[t.jsx(we,{label:n({id:l("asset-details.creationDate"),defaultMessage:"Creation date"}),value:e.createdAt?a(new Date(e.createdAt),{dateStyle:"long",timeStyle:"short"}):null}),t.jsx(we,{label:n({id:l("asset-details.lastUpdated"),defaultMessage:"Last updated"}),value:e.updatedAt?a(new Date(e.updatedAt),{dateStyle:"long",timeStyle:"short"}):null}),t.jsx(we,{label:n({id:l("asset-details.createdBy"),defaultMessage:"Created by"}),value:e.createdBy?pr({firstname:e.createdBy.firstname??void 0,lastname:e.createdBy.lastname??void 0,username:e.createdBy.username??void 0,email:e.createdBy.email??void 0})??"-":null}),t.jsx(we,{label:n({id:l("asset-details.size"),defaultMessage:"Size"}),value:e.size?Bt(e.size,1):null}),P&&(e.width!=null||e.height!=null)&&t.jsx(we,{label:n({id:l("asset-details.dimensions"),defaultMessage:"Dimensions"}),value:e.width!=null&&e.height!=null?`${e.width} × ${e.height}`:null}),t.jsx(we,{label:n({id:l("asset-details.extension"),defaultMessage:"Extension"}),value:en(e.ext)}),t.jsx(we,{label:n({id:l("asset-details.assetId"),defaultMessage:"Asset ID"}),value:String(e.id)})]}),t.jsx(St,{name:"name",label:n({id:l("asset-details.fileName"),defaultMessage:"File name"}),required:!0,disabled:!i}),t.jsx(xo,{label:n({id:l("asset-details.location"),defaultMessage:"Location"}),rootLabel:n({id:l("plugin.home"),defaultMessage:"Home"}),folders:p,disabled:!i}),t.jsx(St,{name:"caption",label:n({id:l("asset-details.caption"),defaultMessage:"Caption"}),disabled:!i}),t.jsx(St,{name:"alternativeText",label:n({id:l("asset-details.alternativeText"),defaultMessage:"Alternative text"}),disabled:!i})]})]}),(i||u||d)&&t.jsxs(S,{justifyContent:"space-between",alignItems:"center",gap:2,padding:3,borderColor:"neutral150",borderStyle:"solid",borderWidth:"1px 0 0 0",background:"neutral0",children:[t.jsxs(S,{gap:2,children:[i&&t.jsx(yo,{}),u&&t.jsx(bo,{asset:e}),d&&t.jsx(jo,{asset:e}),i&&t.jsx(wo,{mime:e.mime})]}),i&&t.jsx(Q,{type:"submit",variant:"default",loading:O,disabled:!F||O||ie,children:n({id:l("asset-details.save"),defaultMessage:"Save changes"})})]})]})}},e.id)})})})},vo=y(S)`
  flex-shrink: 0;
`,So=y(T)`
  min-width: 0;
`,Io=({asset:e,closeDetails:s})=>{const n=e?qe(e.mime,e.ext):va;return t.jsxs(S,{gap:2,paddingLeft:5,paddingTop:3,paddingBottom:3,paddingRight:3,borderColor:"neutral150",borderStyle:"solid",borderWidth:"0 0 1px 0",children:[t.jsx(vo,{children:t.jsx(n,{width:20,height:20})}),t.jsx(Me.Title,{asChild:!0,children:t.jsx(So,{variant:"omega",fontWeight:"semiBold",overflow:"hidden",ellipsis:!0,tag:"h2",children:e.name})}),t.jsx(U,{marginLeft:"auto",children:t.jsx(Me.CloseButton,{onClose:s,children:t.jsx(Sa,{})})})]})},Do=({assetId:e,closeDetails:s})=>{const{formatMessage:n}=L(),{data:a,isLoading:r,error:o}=Or(e,{refetchOnMountOrArgChange:!1,refetchOnReconnect:!1,refetchOnFocus:!1});return r?t.jsx(S,{justifyContent:"center",padding:8,children:t.jsx(Ce,{children:n({id:"app.loading",defaultMessage:"Loading..."})})}):o||!a?t.jsx(S,{direction:"column",alignItems:"stretch",gap:4,padding:4,children:t.jsx(Wt,{variant:"danger",closeLabel:n({id:"global.close",defaultMessage:"Close"}),onClose:s,children:n({id:l("asset-details.error"),defaultMessage:"Failed to load file details."})})}):t.jsxs(t.Fragment,{children:[t.jsx(Io,{asset:a,closeDetails:s}),t.jsx(Co,{asset:a,closeDetails:s})]})},$o=()=>{const{formatMessage:e}=L(),{assetId:s,isVisible:n,shouldRenderDrawer:a,onCloseAnimationEnd:r,closeDetails:o}=Dn();return!a||s===null?null:t.jsxs(Me.Root,{isVisible:n,onClose:o,children:[t.jsx("div",{children:t.jsxs(ke,{children:[t.jsx(Me.Title,{children:e({id:l("asset-details.title"),defaultMessage:"File details"})}),t.jsx(Me.Description,{children:e({id:l("asset-details.description"),defaultMessage:"Displays file information and metadata"})})]})}),t.jsx(Me.Body,{animationDirection:"left",width:"41.6rem",height:"100dvh",onAnimationEnd:r,children:t.jsx(Do,{assetId:s,closeDetails:o})})]})},se=e=>e.currentTarget instanceof Node&&e.target instanceof Node&&e.currentTarget.contains(e.target),Ie=e=>`asset:${e}`,De=e=>`folder:${e}`,ws=(e,s)=>{const n=new Set;return e.forEach(a=>{const[r,o]=a.split(":");r===s&&n.add(Number(o))}),n},$n=()=>({selectedKeys:new Set,anchorKey:null}),ko=(e,s)=>{const n=new Set(e.selectedKeys);return n.has(s)?n.delete(s):n.add(s),{selectedKeys:n,anchorKey:s}},Ao=(e,s)=>{const n=new Set(e.selectedKeys);return n.delete(s),{selectedKeys:n,anchorKey:e.anchorKey===s?null:e.anchorKey}},Fo=(e,s,n)=>{const a=s.indexOf(n);if(a===-1)return e;const r=e.anchorKey===null?-1:s.indexOf(e.anchorKey);if(r===-1)return{selectedKeys:new Set([n]),anchorKey:n};const o=Math.min(r,a),i=Math.max(r,a);return{selectedKeys:new Set(s.slice(o,i+1)),anchorKey:e.anchorKey}},Eo=e=>({selectedKeys:new Set(e),anchorKey:e.length>0?e[e.length-1]:null}),Ro=()=>$n(),To=(e,s)=>{if(s.length===0)return{allSelected:!1,isIndeterminate:!1};const n=s.reduce((r,o)=>e.has(o)?r+1:r,0),a=n===s.length;return{allSelected:a,isIndeterminate:n>0&&!a}},ns=c.createContext(null),Lo=({children:e,disabled:s=!1})=>{const[n,a]=c.useState($n),r=c.useCallback(h=>!s&&n.selectedKeys.has(h),[s,n.selectedKeys]),o=c.useCallback(h=>{s||a(x=>ko(x,h))},[s]),i=c.useCallback((h,x)=>{s||a(v=>Fo(v,h,x))},[s]),d=c.useCallback(h=>{s||a(Eo(h))},[s]),u=c.useCallback(h=>a(x=>Ao(x,h)),[]),p=c.useCallback(()=>a(Ro()),[]),g=c.useMemo(()=>ws(n.selectedKeys,"asset"),[n.selectedKeys]),f=c.useMemo(()=>ws(n.selectedKeys,"folder"),[n.selectedKeys]),m=c.useMemo(()=>({selectedKeys:n.selectedKeys,selectedIds:g,selectedFolderIds:f,anchorKey:n.anchorKey,isSelected:r,toggle:o,selectRange:i,selectAll:d,deselect:u,clear:p}),[n.selectedKeys,g,f,n.anchorKey,r,o,i,d,u,p]);return c.createElement(ns.Provider,{value:m},e)},ye=()=>{const e=c.useContext(ns);if(!e)throw new Error("useAssetSelection must be used within an AssetSelectionProvider");return e},Oo=()=>c.useContext(ns),kn=c.createContext(null),Po=({children:e})=>{const[s,n]=c.useState({}),a=c.useCallback((d,u)=>(n(p=>({...p,[d]:u})),()=>n(p=>{const{[d]:g,...f}=p;return f})),[]),r=c.useCallback(d=>s[d]!==void 0,[s]),o=c.useCallback(d=>s[d]??null,[s]),i=c.useMemo(()=>({isBusy:r,getBusyMessage:o,markBusy:a}),[r,o,a]);return c.createElement(kn.Provider,{value:i},e)},as=()=>c.useContext(kn),Bo=e=>{if(!e)return null;const s=Number(e);return Number.isFinite(s)?s:null},Ge=()=>{const[{query:e},s]=$e(),n=Bo(e?.folder),a=c.useCallback(d=>{s({folder:String(d.id),_q:void 0})},[s]),r=c.useCallback(()=>{s({folder:"",_q:""},"remove")},[s]),o=c.useCallback(()=>{s(pe(e,{folder:void 0}))},[e,s]);c.useEffect(()=>{e?.folder&&n===null&&o()},[e?.folder,n,o]);const i=c.useCallback(d=>{d==null?r():s({folder:String(d),_q:void 0})},[r,s]);return{currentFolderId:n,navigateToFolder:a,navigateToRoot:r,navigateToFolderId:i}},rs=({folders:e,assets:s,mixedItems:n})=>n?n.map(a=>a.kind==="folder"?De(a.folder.id):Ie(a.asset.id)):[...e.map(a=>De(a.id)),...s.map(a=>Ie(a.id))],An=y(_.Content).attrs({maxHeight:"min(var(--radix-popper-available-height, 100vh), 100vh)"})`
  scrollbar-width: thin;
  -ms-overflow-style: auto;

  &::-webkit-scrollbar {
    display: block;
    width: 0.4rem;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors.neutral300};
    border-radius: ${({theme:e})=>e.borderRadius};
  }
`,Fn=(e,s)=>{for(const n of e){if(n.id===s)return n;const a=Fn(n.children,s);if(a)return a}return null},No=e=>{const s=new Set,n=a=>{for(const r of a.children)r.id!=null&&s.add(r.id),n(r)};return n(e),s},_o=(e,s,n)=>{if(s===n)return!0;const a=Fn(e,s);return a?No(a).has(n):!1},Uo=e=>e.kind==="file"?e.folderId==null:e.parentId==null,Le=({items:e,targetFolderId:s,folderStructure:n})=>{if(e.length===0)return!1;if(s===null)return e.some(r=>!Uo(r));const a=new Set(e.filter(r=>r.kind==="folder").map(r=>r.id));if(a.has(s))return!1;for(const r of a)if(_o(n,r,s))return!1;for(const r of e)if(r.kind==="file"&&r.folderId===s||r.kind==="folder"&&r.parentId===s)return!1;return!0},os=(e,s=new Set,n="")=>e.flatMap(a=>{if(a.id==null||s.has(a.id))return[];const r=n?`${n} / ${a.name??""}`:a.name??"";return[{id:a.id,label:r},...os(a.children??[],s,r)]}),En=({formatMessage:e,count:s,source:n,destination:a})=>n===null?e({id:l("list.bulk-actions.move.success-multiple-sources"),defaultMessage:"{count, plural, =1 {# element has} other {# elements have}} been moved to {destination}"},{count:s,destination:a}):e({id:l("list.bulk-actions.move.success"),defaultMessage:"{count, plural, =1 {# element has} other {# elements have}} been moved from {source} to {destination}"},{count:s,source:n,destination:a}),He=e=>e.kind==="folder"?e.parentId:e.folderId,zo=e=>Rn(e)?He(e[0]):null,Rn=e=>{if(e.length===0)return!1;const s=He(e[0]);return e.every(n=>He(n)===s)},Ko=y(X.Content)`
  max-width: 51.6rem;
`,is=({open:e,onClose:s,items:n,onSuccess:a})=>{const{formatMessage:r}=L(),o=yt(),{toggleNotification:i}=me(),{data:d=[],isUninitialized:u,isLoading:p,isError:g}=ts(void 0,{skip:!e}),[f,{isLoading:m}]=mn(),h=c.useMemo(()=>n.filter(D=>D.kind==="file").map(D=>D.id),[n]),x=c.useMemo(()=>n.filter(D=>D.kind==="folder").map(D=>D.id),[n]),v=Rn(n),M=zo(n),{data:b}=es({id:M},{skip:M===null}),[k,C]=c.useState(""),w=r({id:l("plugin.name"),defaultMessage:"Media Library"}),A=c.useMemo(()=>os(d,new Set(x)).filter(D=>Le({items:n,targetFolderId:D.id,folderStructure:d})),[d,x,n]),j=c.useMemo(()=>Le({items:n,targetFolderId:null,folderStructure:d}),[n,d]),$=j?"":A[0]?.id.toString()??"";c.useEffect(()=>{C($)},[e,$]);const P=!u&&!p&&!g,E=P&&A.length===0&&!j,Y=n.length,N=async()=>{if(m||!P)return;const D=k===""?null:Number(k);try{await f({fileIds:h,folderIds:x,destinationFolderId:D}).unwrap()}catch(z){i({type:"danger",message:o(z,r({id:l("list.bulk-actions.move.error"),defaultMessage:"An error occurred while moving the items."}))});return}const R=v?M===null?w:b?.name??w:null,W=D===null?w:A.find(z=>z.id===D)?.label??w;i({type:"success",message:En({formatMessage:r,count:Y,source:R,destination:W})}),a?.(),s()},I=()=>g?t.jsx(T,{textColor:"danger600",children:r({id:l("list.bulk-actions.move.load-error"),defaultMessage:"Couldn't load the folder list. Please try again."})}):E?t.jsx(T,{textColor:"neutral600",children:r({id:l("list.bulk-actions.move.no-destination"),defaultMessage:"There is no other folder to move this to."})}):t.jsxs(J.Root,{name:"destination",children:[t.jsx(J.Label,{children:r({id:l("list.bulk-actions.move.location"),defaultMessage:"Location"})}),t.jsxs(an,{value:k,onChange:D=>C(String(D)),disabled:m||!P,children:[j&&t.jsx(dt,{value:"",children:w}),A.map(D=>t.jsx(dt,{value:String(D.id),children:D.label},D.id))]})]});return t.jsx(X.Root,{open:e,onOpenChange:D=>{!D&&!m&&s()},children:t.jsxs(Ko,{children:[t.jsx(X.Header,{children:t.jsx(X.Title,{children:r({id:l("list.bulk-actions.move.title"),defaultMessage:"Move elements to"})})}),t.jsx(X.Body,{children:I()}),t.jsx(X.Footer,{children:t.jsxs(S,{gap:2,justifyContent:"space-between",width:"100%",children:[t.jsx(Q,{variant:"tertiary",onClick:s,disabled:m,type:"button",children:r({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),t.jsx(Q,{onClick:N,loading:m,disabled:!P||E,children:r({id:l("list.bulk-actions.move.submit"),defaultMessage:"Move"})})]})})]})})},ls=({open:e,onClose:s,target:n,onSuccess:a,onPendingChange:r})=>{const{formatMessage:o}=L(),{toggleNotification:i}=me(),[d,{isLoading:u}]=Nr(),p=n.fileIds.length+n.folderIds.length;c.useEffect(()=>{r?.(u)},[u,r]);const g=async f=>{if(f.preventDefault(),u)return;if("error"in await d(n)){i({type:"danger",message:o({id:l("list.bulk-actions.delete.error"),defaultMessage:"An error occurred while deleting the items."})});return}s(),i({type:"success",message:o({id:l("list.bulk-actions.delete.success"),defaultMessage:"{count, plural, =1 {# item has been deleted} other {# items have been deleted}}"},{count:p})}),a?.()};return t.jsx(H.Root,{open:e,onOpenChange:f=>{!f&&!u&&s()},children:t.jsxs(H.Content,{children:[t.jsx(H.Header,{children:o({id:l("list.bulk-actions.delete.confirm.title"),defaultMessage:"Delete {count, plural, =1 {# item} other {# items}}?"},{count:p})}),t.jsx(H.Body,{icon:t.jsx(ht,{width:"24px",height:"24px",fill:"danger600"}),textAlign:"center",children:t.jsx(T,{children:o({id:l("list.bulk-actions.delete.confirm.description.are-you-sure"),defaultMessage:"These items cannot be recovered once deleted, and deleting a folder also deletes everything inside it. If they are currently in use, linked content will break and image containers will be empty."})})}),t.jsxs(H.Footer,{children:[t.jsx(H.Cancel,{children:t.jsx(Q,{variant:"tertiary",disabled:u,fullWidth:!0,children:o({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})}),t.jsx(H.Action,{children:t.jsx(Q,{variant:"danger-light",loading:u,onClick:g,fullWidth:!0,children:o({id:"app.components.Button.confirm",defaultMessage:"Confirm"})})})]})]})})},Tn=({asset:e,dragData:s})=>{const{formatMessage:n}=L(),a=yt(),{copy:r}=Yt(),{toggleNotification:o}=me(),{deselect:i}=ye(),d=as()?.markBusy??(()=>()=>{}),{canUpdate:u,canDownload:p,canCopyLink:g,isLoading:f}=ce(),[m,{isLoading:h}]=yn(),x=xt({mime:e.mime}),v=c.useRef(null),[M,b]=c.useState(!1),[k,C]=c.useState(!1),[w,A]=c.useState(!1),[j,$]=c.useState(!1),P=c.useMemo(()=>[s],[s]),E=()=>{b(!1),v.current?.click()},Y=async z=>{const V=z.target.files?.[0];if(z.target.value="",!V)return;const F=d(e.id,n({id:l("asset-details.replace.loading"),defaultMessage:"Replacing the file…"}));let O;try{O=await m({id:e.id,file:V,fileInfo:{name:e.name}})}finally{F()}if("error"in O){o({type:"danger",message:a(O.error,n({id:l("asset-details.replace.error"),defaultMessage:"Failed to replace the file."}))});return}o({type:"success",message:n({id:l("asset-details.replace.success"),defaultMessage:"File replaced."})})},N=async()=>{const z=fe(e.url);if(!z)return;const V=await r(z);o({type:V?"success":"danger",message:n(V?{id:l("asset-details.copy-link.success"),defaultMessage:"Link copied."}:{id:l("asset-details.copy-link.error"),defaultMessage:"Failed to copy the link."})})},I=async()=>{const z=fe(e.url);if(z){$(!0);try{await bn(z,e.name)}catch{o({type:"danger",message:n({id:l("asset-details.download.error"),defaultMessage:"Failed to download the file."})})}finally{$(!1)}}},D=u||g||p,R=u,W=(g||p)&&R;return!f&&!D&&!R?null:t.jsxs(t.Fragment,{children:[t.jsx(ke,{children:t.jsx("input",{ref:v,type:"file",multiple:!1,onChange:Y,"aria-hidden":!0,tabIndex:-1})}),t.jsxs(_.Root,{modal:!1,children:[t.jsx(_.Trigger,{tag:re,icon:t.jsx(ln,{}),variant:"ghost",label:n({id:l("control-card.more-actions"),defaultMessage:"More actions"})}),t.jsxs(An,{popoverPlacement:"bottom-end",zIndex:2,minWidth:"22rem",children:[u&&t.jsx(_.Item,{startIcon:t.jsx(on,{}),disabled:h,onSelect:()=>b(!0),children:n({id:l("list.assets.actions.replace"),defaultMessage:"Replace media"})}),g&&t.jsx(_.Item,{startIcon:t.jsx(Ve,{}),onSelect:N,children:n({id:l("list.assets.actions.copy-link"),defaultMessage:"Copy link to media"})}),p&&t.jsx(_.Item,{startIcon:t.jsx(rn,{}),disabled:j,onSelect:I,children:n({id:l("list.assets.actions.download"),defaultMessage:"Download media"})}),W&&t.jsx(_.Separator,{}),u&&t.jsxs(t.Fragment,{children:[t.jsx(_.Item,{startIcon:t.jsx(Qt,{}),onSelect:()=>C(!0),children:n({id:l("list.assets.actions.move"),defaultMessage:"Move to folder"})}),t.jsx(_.Item,{startIcon:t.jsx(gt,{}),variant:"danger",onSelect:()=>A(!0),children:n({id:l("list.assets.actions.delete"),defaultMessage:"Delete"})})]})]})]}),t.jsx(H.Root,{open:M,onOpenChange:b,children:t.jsxs(H.Content,{children:[t.jsx(H.Header,{children:n({id:l("asset-details.replace.title"),defaultMessage:"Replace this media file?"})}),t.jsx(H.Body,{textAlign:"center",children:t.jsxs(S,{direction:"column",textAlign:"center",children:[t.jsx(T,{variant:"omega",children:n({id:l("asset-details.replace.description"),defaultMessage:"Current content will be permanently replaced."})}),x?t.jsx(T,{variant:"omega",children:n({id:l("asset-details.replace.description.ai"),defaultMessage:"AI will generate new metadata after upload."})}):null]})}),t.jsxs(H.Footer,{children:[t.jsx(H.Cancel,{children:t.jsx(Q,{variant:"tertiary",fullWidth:!0,children:n({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})}),t.jsx(H.Action,{children:t.jsx(Q,{variant:"secondary",onClick:E,fullWidth:!0,children:n({id:l("asset-details.replace.continue"),defaultMessage:"Continue"})})})]})]})}),k&&t.jsx(is,{open:!0,onClose:()=>C(!1),items:P,onSuccess:()=>i(Ie(e.id))}),w&&t.jsx(ls,{open:!0,onClose:()=>A(!1),target:{fileIds:[e.id],folderIds:[]},onSuccess:()=>i(Ie(e.id))})]})},Ho=e=>{const s=[],n=[];for(const a of e)a.kind==="file"?s.push(a.id):n.push(a.id);return{fileIds:s,folderIds:n}},Ms=(e,s,n)=>{if(s===null)return n;const a=r=>{for(const o of r){if(o.id===s)return o;const i=a(o.children??[]);if(i)return i}return null};return a(e)?.name??n},Cs=(e,s,n,a)=>{const r=e.kind==="file"?Ie(e.id):De(e.id),o=He(e);if(!s||!s.has(r))return{items:[e],fromSelection:!1,activeSourceFolderId:o,spansMultipleSources:!1};const i=[];return s.forEach(d=>{const u=d.indexOf(":"),p=d.slice(0,u),g=Number(d.slice(u+1));if(p==="asset"){if(e.kind==="file"&&e.id===g){i.push(e);return}i.push({kind:"file",id:g,name:"",folderId:ct(n,"file",g,a)});return}if(e.kind==="folder"&&e.id===g){i.push(e);return}i.push({kind:"folder",id:g,name:"",parentId:ct(n,"folder",g,a)})}),{items:i,fromSelection:!0,activeSourceFolderId:o,spansMultipleSources:i.some(d=>He(d)!==o)}},Vo=(e,s)=>{const n=new Set;if(e.length===0)return n;Le({items:e,targetFolderId:null,folderStructure:s})&&n.add(null);for(const{id:a}of os(s))Le({items:e,targetFolderId:a,folderStructure:s})&&n.add(a);return n},Wo=e=>`file:${e}`,qo=e=>`folder:${e}`,Go=e=>`folder-target:${e}`,Yo=e=>{if(typeof e!="string")return null;const s=/^folder-target:(\d+)$/.exec(e);return s?Number(s[1]):null},Qo=e=>`folder-tree-target:${e}`,Ln="folder-tree-target:home",Zo=e=>{if(typeof e!="string")return null;if(e===Ln)return"root";const s=/^folder-tree-target:(\d+)$/.exec(e);return s?Number(s[1]):null},It=20,Dt=24,vs=24,On=y(S)`
  position: relative;
  align-items: center;
  gap: ${({theme:e})=>e.spaces[2]};
  padding: ${({theme:e})=>`${e.spaces[2]} ${e.spaces[3]}`};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.primary100};
  box-shadow: ${({theme:e})=>e.shadows.tableShadow};
  cursor: grabbing;
  max-width: 24rem;
`,Xo=y(On)`
  box-shadow:
    ${({theme:e})=>e.shadows.tableShadow},
    0 4px 0 -1px ${({theme:e})=>e.colors.primary100},
    0 4px 0 0 ${({theme:e})=>e.colors.primary200},
    0 7px 0 -1px ${({theme:e})=>e.colors.primary100},
    0 7px 0 0 ${({theme:e})=>e.colors.primary200};
`,Ss=y(S)`
  align-items: center;
  gap: ${({theme:e})=>e.spaces[1]};
`,$t=y(S)`
  flex-shrink: 0;
  width: ${vs}px;
  height: ${vs}px;
  align-items: center;
  justify-content: center;
`,Jo=y(S)`
  position: absolute;
  top: -${({theme:e})=>e.spaces[2]};
  right: -${({theme:e})=>e.spaces[2]};
  align-items: center;
  justify-content: center;
  min-width: ${({theme:e})=>e.spaces[5]};
  height: ${({theme:e})=>e.spaces[5]};
  padding: 0 ${({theme:e})=>e.spaces[1]};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.primary600};
`,ei=({items:e})=>{const{formatMessage:s}=L();if(e.length===0)return null;if(e.length===1){const o=e[0],i=o.kind==="folder",d=i?ve:lt,u=i?It:Dt;return t.jsxs(On,{children:[t.jsx($t,{children:t.jsx(d,{width:u,height:u})}),t.jsx(T,{textColor:"neutral800",fontWeight:"semiBold",ellipsis:!0,children:o.name})]})}const n=e.filter(o=>o.kind==="folder").length,a=e.filter(o=>o.kind==="file").length,r=n+a;return t.jsxs(Xo,{gap:3,children:[n>0?t.jsxs(Ss,{children:[t.jsx($t,{children:t.jsx(ve,{width:It,height:It})}),t.jsx(T,{textColor:"neutral800",fontWeight:"semiBold",children:s({id:l("dnd.overlay.folders"),defaultMessage:"{count, plural, one {# folder} other {# folders}}"},{count:n})})]}):null,a>0?t.jsxs(Ss,{children:[t.jsx($t,{children:t.jsx(lt,{width:Dt,height:Dt})}),t.jsx(T,{textColor:"neutral800",fontWeight:"semiBold",children:s({id:l("dnd.overlay.files"),defaultMessage:"{count, plural, one {# file} other {# files}}"},{count:a})})]}):null,t.jsx(Jo,{children:t.jsx(T,{textColor:"neutral0",fontWeight:"bold",variant:"pi",children:r})})]})},Pn=c.createContext(null),ue=()=>c.useContext(Pn),Is=e=>{const s=Yo(e);if(s!=null)return{destinationFolderId:s};const n=Zo(e);return n==="root"?{destinationFolderId:null}:typeof n=="number"?{destinationFolderId:n}:null},ti=Number.MAX_SAFE_INTEGER,si=({children:e,locations:s=xn})=>{const{formatMessage:n}=L(),a=yt(),{toggleNotification:r}=me(),o=Oo(),{currentFolderId:i}=Ge(),{data:d=[]}=ts(),u=n({id:l("plugin.name"),defaultMessage:"Media Library"}),[p,{isLoading:g}]=mn(),[f,m]=c.useState([]),[h,x]=c.useState(""),v=c.useRef({items:[],fromSelection:!1,activeSourceFolderId:null,spansMultipleSources:!1}),M=c.useCallback(N=>{x(""),requestAnimationFrame(()=>x(N))},[]),{canUpdate:b}=ce(),k=fr(mr(jr,{activationConstraint:{distance:b?8:ti}})),C=c.useMemo(()=>Vo(f,d),[f,d]),w=c.useCallback(N=>C.has(N),[C]),A=c.useMemo(()=>({isInternalDragActive:f.length>0,isMovePending:g,isValidDropTarget:w}),[f.length,g,w]),j=c.useCallback(()=>{v.current={items:[],fromSelection:!1,activeSourceFolderId:null,spansMultipleSources:!1},m([])},[]),$=c.useCallback(N=>{const I=N.active.data.current;if(!I){j();return}const D=Cs(I,o?.selectedKeys,s,i);v.current=D,m(D.items)},[j,i,s,o?.selectedKeys]),P=c.useCallback(async N=>{const{over:I}=N,{items:D,fromSelection:R,activeSourceFolderId:W,spansMultipleSources:z}=v.current;if(j(),g||!I||D.length===0)return;const V=Is(I.id);if(!V)return;const{destinationFolderId:F}=V;if(!Le({items:D,targetFolderId:F,folderStructure:d}))return;const O=Ho(D),K=En({formatMessage:n,count:D.length,source:z?null:Ms(d,W,u),destination:Ms(d,F,u)}),Z=n({id:l("list.bulk-actions.move.error"),defaultMessage:"An error occurred while moving the items."});try{await p({...O,destinationFolderId:F}).unwrap(),R&&o?.clear(),M(K),r({type:"success",message:K})}catch(ie){const ge=a(ie,Z);M(n({id:l("dnd.announce.move-failure"),defaultMessage:"Move failed. {message}"},{message:ge})),r({type:"danger",message:ge})}},[M,p,j,d,n,a,g,u,o,r]),E=c.useCallback(()=>{j()},[j]),Y=c.useMemo(()=>({onDragStart:({active:N})=>{const I=N.data.current;return I?n({id:l("dnd.announce.drag-start"),defaultMessage:"Picked up {name}. Drop on a folder to move."},{name:I.name}):""},onDragOver:()=>"",onDragEnd:({active:N,over:I})=>{if(!I)return n({id:l("dnd.announce.cancel"),defaultMessage:"Drag cancelled."});const D=Is(I.id),R=N.data.current;if(!D||!R)return"";const{items:W}=Cs(R,o?.selectedKeys,s,i);return Le({items:W,targetFolderId:D.destinationFolderId,folderStructure:d})?"":n({id:l("dnd.announce.invalid-drop"),defaultMessage:"Cannot move item to this folder."})},onDragCancel:()=>n({id:l("dnd.announce.cancel"),defaultMessage:"Drag cancelled."})}),[i,d,n,s,o?.selectedKeys]);return t.jsx(Pn.Provider,{value:A,children:t.jsxs(xr,{sensors:k,collisionDetection:yr,onDragStart:$,onDragEnd:P,onDragCancel:E,accessibility:{announcements:Y},children:[t.jsx(ke,{"aria-live":"polite","aria-atomic":"true",children:h}),t.jsx(S,{position:"relative",alignItems:"stretch",direction:"column",height:"100%",children:e}),t.jsx(br,{dropAnimation:null,children:f.length>0?t.jsx(ei,{items:f}):null})]})})},Bn=e=>{const{isMovePending:s}=ue()??{isMovePending:!1},n=c.useMemo(()=>({kind:"file",id:e.id,name:e.name,folderId:Ke(e.folder)}),[e.folder,e.id,e.name]);return{...hn({id:Wo(e.id),data:n,disabled:s}),dragData:n}},Nn=e=>{const{isMovePending:s,isValidDropTarget:n}=ue()??{isMovePending:!1,isValidDropTarget:()=>!1},{active:a}=gn(),r=Ke(e.parent),o=c.useMemo(()=>({kind:"folder",id:e.id,name:e.name,parentId:r}),[e.id,e.name,r]),i=c.useMemo(()=>({kind:"folder-target",id:e.id,name:e.name}),[e.id,e.name]),d=hn({id:qo(e.id),data:o,disabled:s}),u=pn({id:Go(e.id),data:i,disabled:s}),p=n(e.id),g=u.isOver,f=g&&p,m=g&&!p&&a!=null;return{dragData:o,draggable:d,droppable:u,isDragging:d.isDragging,showValidDropHighlight:f,showInvalidDropCursor:m}},ni=y(X.Content)`
  max-width: 51.6rem;
`,_n=e=>{const{open:s,parentFolderId:n,onClose:a,mode:r}=e,o=e.mode==="rename"?e.initialName:"",{formatMessage:i}=L(),{toggleNotification:d}=me(),{trackUsage:u}=je(),[p,g]=c.useState(o),[f,m]=c.useState(),h=c.useRef(null),[x,{isLoading:v}]=kr(),[M,{isLoading:b}]=Ar(),k=r==="rename"?b:v;c.useEffect(()=>{s&&(g(o),m(void 0),r==="rename"&&h.current?.select())},[s,o,r]);const C=async w=>{w.preventDefault();const A=p.trim();if(!A){m(i({id:l("folder.create.form.error.name-required"),defaultMessage:"Name is required"}));return}try{e.mode==="rename"?(await M({id:e.folderId,name:A,parent:n}).unwrap(),u("didEditMediaLibraryElements",{location:te,type:"folder",changeLocation:!1})):(await x({name:A,parent:n}).unwrap(),u("didAddMediaLibraryFolders",{location:te})),d({type:"success",message:i(r==="rename"?{id:l("folder.rename.success"),defaultMessage:"Folder has been renamed"}:{id:l("folder.create.success"),defaultMessage:"Folder has been created"})}),a()}catch(j){const $=j;$?.message?m($.message):d({type:"danger",message:i(r==="rename"?{id:l("folder.rename.form.error.unknown"),defaultMessage:"An error occurred while renaming the folder"}:{id:l("folder.create.form.error.unknown"),defaultMessage:"An error occurred while creating the folder"})})}};return t.jsx(X.Root,{open:s,onOpenChange:a,children:t.jsxs(ni,{children:[t.jsx(X.Header,{children:t.jsx(X.Title,{children:e.mode==="rename"?i({id:l("folder.rename.title"),defaultMessage:"Rename folder"}):i({id:l("folder.create.title-in"),defaultMessage:"New folder in {folderName}"},{folderName:e.parentFolderName})})}),t.jsxs("form",{onSubmit:C,children:[t.jsx(X.Body,{children:t.jsxs(J.Root,{error:f,name:"name",required:!0,children:[t.jsx(J.Label,{children:i({id:l("folder.form.name.label"),defaultMessage:"Folder name"})}),t.jsx(nn,{ref:h,value:p,onChange:w=>{g(w.target.value),m(void 0)},autoFocus:!0}),t.jsx(J.Error,{})]})}),t.jsx(X.Footer,{children:t.jsxs(S,{gap:2,justifyContent:"space-between",width:"100%",children:[t.jsx(Q,{variant:"tertiary",onClick:a,type:"button",children:i({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),t.jsx(Q,{type:"submit",loading:k,disabled:r==="rename"&&p.trim()===o.trim(),children:i(r==="rename"?{id:l("folder.rename.submit"),defaultMessage:"Save"}:{id:l("folder.create.submit"),defaultMessage:"Create folder"})})]})})]})]})})},Un=({folder:e,dragData:s})=>{const{formatMessage:n}=L(),{copy:a}=Yt(),{toggleNotification:r}=me(),{deselect:o}=ye(),[i,d]=c.useState(!1),[u,p]=c.useState(!1),[g,f]=c.useState(!1),m=c.useMemo(()=>[s],[s]),h=async()=>{const x=`${window.location.origin}${window.location.pathname}?folder=${e.id}`,v=await a(x);r({type:v?"success":"danger",message:n(v?{id:l("list.folder.actions.copy-link.success"),defaultMessage:"Folder link copied."}:{id:l("list.folder.actions.copy-link.error"),defaultMessage:"Failed to copy the folder link."})})};return t.jsxs(t.Fragment,{children:[t.jsxs(_.Root,{modal:!1,children:[t.jsx(_.Trigger,{tag:re,icon:t.jsx(ln,{}),variant:"ghost",label:n({id:l("control-card.more-actions"),defaultMessage:"More actions"})}),t.jsxs(An,{popoverPlacement:"bottom-end",zIndex:2,minWidth:"22rem",children:[t.jsx(_.Item,{startIcon:t.jsx(Ve,{}),onSelect:h,children:n({id:l("list.folder.actions.copy-link"),defaultMessage:"Copy link to folder"})}),t.jsx(_.Separator,{}),t.jsx(_.Item,{startIcon:t.jsx(ka,{}),onSelect:()=>d(!0),children:n({id:l("list.folder.actions.rename"),defaultMessage:"Rename folder"})}),t.jsx(_.Item,{startIcon:t.jsx(Qt,{}),onSelect:()=>p(!0),children:n({id:l("list.folder.actions.move"),defaultMessage:"Move to folder"})}),t.jsx(_.Item,{startIcon:t.jsx(gt,{}),variant:"danger",onSelect:()=>f(!0),children:n({id:l("list.folder.actions.delete"),defaultMessage:"Delete folder"})})]})]}),i&&t.jsx(_n,{open:!0,mode:"rename",folderId:e.id,initialName:e.name,parentFolderId:s.parentId,onClose:()=>d(!1)}),u&&t.jsx(is,{open:!0,onClose:()=>p(!1),items:m,onSuccess:()=>o(De(e.id))}),g&&t.jsx(ls,{open:!0,onClose:()=>f(!1),target:{fileIds:[],folderIds:[e.id]},onSuccess:()=>o(De(e.id))})]})},Re=e=>{se(e)&&e.stopPropagation()},ai=y(S)`
  position: absolute;
  top: ${({theme:e})=>e.spaces[3]};
  left: ${({theme:e})=>e.spaces[3]};
  z-index: 1;
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
`,ri=y(Fa)`
  border: 1px solid
    ${({theme:e,$isSelected:s})=>s?e.colors.primary600:e.colors.neutral200};
  border-radius: 8px;
  overflow: hidden;
  isolation: isolate;
  cursor: ${({$isMovePending:e,$isBusy:s})=>e||s?"wait":"pointer"};
  opacity: ${({$isDragging:e})=>e?.4:1};
  /* No opacity change while busy — the overlay does the dimming, and stacking
     one on the other would wash the card out. */
  pointer-events: ${({$isMovePending:e,$isBusy:s})=>e||s?"none":"auto"};
  background: ${({theme:e,$isSelected:s})=>s?e.colors.primary100:void 0};
  /* Shift+click range selection must not highlight card text. */
  user-select: none;

  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary600};
    outline-offset: 2px;
  }
`,oi=y(U)`
  grid-column: 1 / -1;
`,ii=y(S)`
  width: 100%;
  user-select: none;
  padding: ${({theme:e})=>`${e.spaces[2]} ${e.spaces[3]}`}; // 8px 12px
  align-items: center;
  gap: ${({theme:e})=>e.spaces[2]}; // 8px
  border: 1px solid
    ${({theme:e,$isSelected:s})=>s?e.colors.primary600:e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e,$isSelected:s})=>s?e.colors.primary100:e.colors.neutral0};
  cursor: ${({$isMovePending:e,$isInvalidDropTarget:s})=>e?"wait":s?"not-allowed":"pointer"};
  opacity: ${({$isDragging:e})=>e?.4:1};
  pointer-events: ${({$isMovePending:e})=>e?"none":"auto"};
  transition: background 0.2s;

  ${({$isValidDropTarget:e,theme:s})=>e&&xe`
      background: ${s.colors.primary100};
      border: 1px dashed ${s.colors.primary600};
    `}

  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary600};
    outline-offset: 2px;
  }
`,li=y(S)`
  flex-shrink: 0;
  color: ${({theme:e})=>e.colors.neutral600};
`,di=y(We)`
  flex: 1;
  min-width: 0;
`,ci=({folder:e,orderedItemKeys:s})=>{const{formatMessage:n}=L(),{navigateToFolder:a}=Ge(),{isMovePending:r}=ue()??{isMovePending:!1},{isSelected:o,toggle:i,selectRange:d}=ye(),{canUpdate:u}=ce(),{dragData:p,draggable:{attributes:g,listeners:f,setNodeRef:m,isDragging:h},droppable:{setNodeRef:x},showValidDropHighlight:v,showInvalidDropCursor:M}=Nn(e),b=De(e.id),k=j=>{m(j),x(j)},C=j=>{se(j)&&(j.shiftKey?d(s,b):j.metaKey||j.ctrlKey?i(b):a(e))},w=j=>{se(j)&&(j.key==="Enter"?(j.preventDefault(),a(e)):j.key===" "&&(j.preventDefault(),i(b)))},A=j=>{j.stopPropagation(),j.shiftKey?d(s,b):i(b)};return t.jsxs(ii,{ref:k,...g,...f,$isDragging:h,$isMovePending:r,$isValidDropTarget:v,$isInvalidDropTarget:M,$isSelected:o(b),onClick:C,onKeyDown:w,onPointerDown:j=>{se(j)&&f?.onPointerDown?.(j)},role:"listitem",tabIndex:0,children:[u&&t.jsx(S,{onKeyDown:j=>j.stopPropagation(),children:t.jsx(Ae,{checked:o(b),onClick:A,"aria-label":n({id:l("list.table.row.select"),defaultMessage:"Select {name}"},{name:e.name})})}),t.jsx(li,{children:t.jsx(ve,{width:20,height:20})}),t.jsx(di,{textColor:"neutral800",children:e.name}),t.jsx(S,{onClick:Re,onKeyDown:Re,onPointerDown:Re,children:t.jsx(Un,{folder:e,dragData:p})})]})},Ds=y(U)`
  position: relative;
  width: 100%;
  padding-bottom: 62.5%;
  height: 0;
  overflow: hidden;
  background: repeating-conic-gradient(
      ${({theme:e})=>e.colors.neutral100} 0% 25%,
      transparent 0% 50%
    )
    50% / 20px 20px;
`,ui=y.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,gi=y(S)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${({theme:e})=>e.colors.neutral500};
  background: ${({theme:e})=>e.colors.neutral100};
`,hi=({asset:e})=>{const{alternativeText:s,ext:n,formats:a,mime:r,url:o,updatedAt:i,isLocal:d,isUrlSigned:u}=e;if(r?.includes(be.Image)){const g=i&&!u?new Date(i).getTime():void 0,f=x=>g===void 0?x:x.includes("?")?`${x}&v=${g}`:`${x}?v=${g}`,m=fe(a?.thumbnail?.url)??fe(o),h=m&&f(m);if(h)return t.jsx(Ds,{children:t.jsx(ui,{src:h,alt:s||"",crossOrigin:!d&&u?"anonymous":void 0,draggable:!1,onDragStart:x=>x.preventDefault()})})}const p=qe(r,n);return t.jsx(Ds,{children:t.jsx(gi,{justifyContent:"center",alignItems:"center",children:t.jsx(p,{width:48,height:48})})})},pi=y(Ea)`
  position: relative;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
`,fi=y(S)`
  min-width: 0;
  width: 100%;
`,mi=y(S)`
  color: ${({theme:e})=>e.colors.neutral600};
  flex-shrink: 0;
`,xi=y(We)`
  flex: 1;
  min-width: 0;
`,yi=y.button`
  display: inline-flex;
  flex: 1;
  min-width: 0;
  border: none;
  background: transparent;
  padding: 0;
  margin: 0;
  cursor: pointer;
  text-align: left;
  color: inherit;
  font: inherit;

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary600};
    outline-offset: 2px;
    border-radius: 2px;
  }
`,bi=({asset:e,orderedItemKeys:s,onAssetItemClick:n})=>{const{formatMessage:a}=L(),r=qe(e.mime,e.ext),{isMovePending:o}=ue()??{isMovePending:!1},{attributes:i,listeners:d,setNodeRef:u,isDragging:p,dragData:g}=Bn(e),{isSelected:f,toggle:m,selectRange:h}=ye(),{canUpdate:x}=ce(),v=as()?.getBusyMessage(e.id)??null,M=Ie(e.id),b=f(M),k=j=>{se(j)&&(j.shiftKey?h(s,M):j.metaKey||j.ctrlKey?m(M):n(e.id))},C=j=>{se(j)&&(j.key==="Enter"?(j.preventDefault(),n(e.id)):j.key===" "&&(j.preventDefault(),m(M)))},w=j=>{j.stopPropagation(),n(e.id)},A=j=>{j.stopPropagation(),j.shiftKey?h(s,M):m(M)};return t.jsxs(ri,{ref:u,...i,...d,$isDragging:p,$isMovePending:o,$isBusy:v!==null,$isSelected:b,tabIndex:0,role:"listitem",onDragStart:j=>j.preventDefault(),onClick:k,onKeyDown:C,onPointerDown:j=>{se(j)&&d?.onPointerDown?.(j)},children:[t.jsxs(pi,{children:[x&&t.jsx(ai,{onKeyDown:j=>j.stopPropagation(),children:t.jsx(Ae,{checked:b,onClick:A,"aria-label":a({id:l("list.table.row.select"),defaultMessage:"Select {name}"},{name:e.name})})}),t.jsx(hi,{asset:e}),v!==null?t.jsx(Mn,{zIndex:2,children:v}):null]}),t.jsx(Aa,{children:t.jsxs(fi,{alignItems:"center",gap:2,children:[t.jsx(mi,{children:t.jsx(r,{width:20,height:20})}),t.jsx(yi,{type:"button",onClick:w,children:t.jsx(xi,{textColor:"primary800",children:e.name})}),t.jsx(S,{onClick:Re,onKeyDown:Re,onPointerDown:Re,children:t.jsx(Tn,{asset:e,dragData:g})})]})})]})},ji=({assets:e,folders:s=[],renderedKeys:n,onAssetItemClick:a})=>{const r=s.length+e.length,o=n??rs({folders:s,assets:e});return r===0?null:t.jsxs(et.Root,{gap:4,role:"list","data-testid":"assets-grid",children:[s.length>0&&t.jsx(oi,{children:t.jsx(et.Root,{gap:4,children:s.map(i=>t.jsx(et.Item,{col:3,m:4,s:6,xs:12,children:t.jsx(ci,{folder:i,orderedItemKeys:o})},`folder-${i.id}`))})}),e.map(i=>t.jsx(et.Item,{col:3,m:4,s:6,xs:12,direction:"column",alignItems:"stretch",children:t.jsx(bi,{asset:i,orderedItemKeys:o,onAssetItemClick:a})},i.id))]})},zn=()=>{const[{query:e},s]=$e(),n=e?._q??"",a=c.useCallback(o=>{o?s({_q:Jt(o)},"push",!0):s({_q:""},"remove",!0)},[s]),r=c.useCallback(()=>a(""),[a]);return{searchQuery:n,isSearching:n!=="",setSearchQuery:a,clearSearch:r}},wi=300,Mi=y(La)`
  > div {
    border: none;
  }
`,Ci=()=>{const{formatMessage:e}=L(),{searchQuery:s,setSearchQuery:n}=zn(),{trackUsage:a}=je(),r=dn(),[o,i]=c.useState(s),d=Ra(o,wi),u=c.useRef(s),[{query:p}]=$e(),g=p?.folder??"",f=c.useRef(g);c.useEffect(()=>{d!==u.current&&(u.current=d,d&&a("didSearchMediaLibraryElements",{location:te}),n(d))},[d,n,a]),c.useEffect(()=>{s!==u.current&&(u.current=s,i(s))},[s]),c.useEffect(()=>{g!==f.current&&(f.current=g,u.current=s,i(s))},[g,s]);const m=t.jsx(Mi,{onSubmit:h=>h.preventDefault(),children:t.jsx(Ta,{name:"search-assets",value:o,onChange:h=>i(h.target.value),onClear:()=>i(""),clearLabel:e({id:"clearLabel",defaultMessage:"Clear"}),placeholder:e({id:l("header.search.placeholder"),defaultMessage:"Search"}),size:"S",children:e({id:l("search.label"),defaultMessage:"Search for an asset"})})});return r?t.jsx(U,{width:"100%",children:m}):m},vi={view:"STRAPI_UPLOAD_LIBRARY_VIEW"},Ue={GRID:0,TABLE:1},$s=[{name:"name",label:{id:l("list.table.header.name"),defaultMessage:"name"}},{name:"createdAt",label:{id:l("list.table.header.creationDate"),defaultMessage:"creation date"}},{name:"updatedAt",label:{id:l("list.table.header.lastModified"),defaultMessage:"last modified"}},{name:"size",label:{id:l("list.table.header.size"),defaultMessage:"size"}},{name:"actions",label:{id:l("list.table.header.actions"),defaultMessage:"actions"},isVisuallyHidden:!0}],Si=y(Ba)`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
  border-radius: 4px;
  overflow: hidden;

  /* An auto layout lets every column but the name size itself to its content,
     so the dates never wrap. The name cell is what absorbs the leftover and
     ellipsizes — see NameTd. */
  table-layout: auto;

  & td:last-child,
  & th:last-child {
    width: 5.6rem;
    white-space: nowrap;
  }
`,Ii=y(Na)`
  background: ${({theme:e})=>e.colors.neutral100};

  tr {
    border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
  }
`,Kn=xe`
  width: 1%;
  white-space: nowrap;
`,Hn=xe`
  width: 100%;
  max-width: 0;
  overflow: hidden;
`,Nt=y(_a)`
  height: 40px;
  padding: 0 ${({theme:e})=>e.spaces[4]};
  text-align: left;

  ${({$flex:e})=>e?Hn:Kn}
`,Oe=y(Ua)`
  padding: 0 ${({theme:e})=>e.spaces[4]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
`,Vn=y(Oe)`
  ${Hn}
`,Te=y(Oe)`
  ${Kn}
`,Wn=y.tr`
  height: 48px;
  user-select: none;
  background: ${({theme:e,$isSelected:s})=>s?e.colors.primary100:e.colors.neutral0};
  cursor: ${({$isMovePending:e,$isBusy:s,$isInvalidDropTarget:n})=>e||s?"wait":n?"not-allowed":"pointer"};
  opacity: ${({$isDragging:e,$isBusy:s})=>e||s?.4:1};
  pointer-events: ${({$isMovePending:e,$isBusy:s})=>e||s?"none":"auto"};

  ${({$isValidDropTarget:e,theme:s})=>e&&xe`
      background: ${s.colors.primary100};
      outline: 1px dashed ${s.colors.primary600};
      outline-offset: -1px;
    `}

  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary600};
    outline-offset: -2px;
  }

  &:last-child {
    ${Oe} {
      border-bottom: 0;
    }
  }
`,qn=y(Oe)`
  width: 5.6rem;
  white-space: nowrap;
`,Di=y(Nt)`
  width: 5.6rem;
  white-space: nowrap;
`,$i=y(ht)`
  flex-shrink: 0;
  width: 1.6rem;
  height: 1.6rem;

  path {
    fill: ${({theme:e})=>e.colors.warning500};
  }
`,ki=y.button`
  display: inline-flex;
  max-width: 100%;
  border: none;
  background: transparent;
  padding: 0;
  margin: 0;
  cursor: pointer;
  text-align: left;
  color: inherit;
  font: inherit;

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary600};
    outline-offset: 2px;
    border-radius: 2px;
  }
`,de=e=>{se(e)&&e.stopPropagation()},Ai=({asset:e})=>{const{ext:s,mime:n}=e,a=qe(n,s);return t.jsx(S,{justifyContent:"center",alignItems:"center",borderRadius:"4px",color:"neutral500",width:"3.2rem",height:"3.2rem",shrink:0,children:t.jsx(a,{width:20,height:20})})},ks=({asset:e,orderedItemKeys:s,onAssetItemClick:n})=>{const a=Zt(),{formatDate:r,formatMessage:o}=L(),{isMovePending:i}=ue()??{isMovePending:!1},{attributes:d,listeners:u,setNodeRef:p,isDragging:g,dragData:f}=Bn(e),{isSelected:m,toggle:h,selectRange:x}=ye(),{canUpdate:v}=ce(),M=as()?.getBusyMessage(e.id)??null,b=Ie(e.id),k=m(b),C=!e.caption||!e.alternativeText,w=o({id:l("list.table.row.metadata-missing"),defaultMessage:"This asset is missing metadata (caption or alternative text)."}),A=E=>{se(E)&&(E.shiftKey?x(s,b):E.metaKey||E.ctrlKey?h(b):n(e.id))},j=E=>{se(E)&&(E.key==="Enter"?(E.preventDefault(),n(e.id)):E.key===" "&&(E.preventDefault(),h(b)))},$=E=>{E.stopPropagation(),n(e.id)},P=E=>{E.stopPropagation(),E.shiftKey?x(s,b):h(b)};return t.jsxs(Wn,{ref:p,...d,...u,$isDragging:g,$isMovePending:i,$isBusy:M!==null,$isSelected:k,tabIndex:0,role:"row",onDragStart:E=>E.preventDefault(),onClick:A,onKeyDown:j,onPointerDown:E=>{se(E)&&u?.onPointerDown?.(E)},children:[v&&t.jsx(qn,{onClick:de,onKeyDown:de,children:t.jsx(S,{children:t.jsx(Ae,{checked:k,onClick:P,"aria-label":o({id:l("list.table.row.select"),defaultMessage:"Select {name}"},{name:e.name})})})}),t.jsx(Vn,{children:t.jsxs(S,{alignItems:"center",justifyContent:"space-between",gap:2,minWidth:0,children:[t.jsxs(S,{gap:3,alignItems:"center",minWidth:0,children:[M!==null?t.jsx(S,{justifyContent:"center",width:"3.2rem",height:"3.2rem",children:t.jsx(Ce,{small:!0,children:M})}):t.jsx(Ai,{asset:e}),t.jsxs(S,{direction:"column",alignItems:"flex-start",minWidth:0,children:[t.jsx(ki,{type:"button",onClick:$,children:t.jsx(We,{textColor:"neutral800",fontWeight:"semiBold",children:e.name})}),!a&&t.jsx(T,{textColor:"neutral600",variant:"pi",children:e.size?Bt(e.size,1):"-"})]})]}),C&&t.jsx(Gt,{label:w,children:t.jsx($i,{"aria-label":w,role:"img"})})]})}),a&&t.jsxs(t.Fragment,{children:[t.jsx(Te,{children:t.jsx(T,{textColor:"neutral600",children:e.createdAt?r(new Date(e.createdAt),{dateStyle:"long"}):"-"})}),t.jsx(Te,{children:t.jsx(T,{textColor:"neutral600",children:e.updatedAt?r(new Date(e.updatedAt),{dateStyle:"long"}):"-"})}),t.jsx(Te,{children:t.jsx(T,{textColor:"neutral600",children:e.size?Bt(e.size,1):"-"})})]}),t.jsx(Oe,{onClick:de,onKeyDown:de,onPointerDown:de,children:t.jsx(S,{justifyContent:"flex-end",children:t.jsx(Tn,{asset:e,dragData:f})})})]})},Fi=y(Wn)`
  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
  }
`,As=({folder:e,orderedItemKeys:s})=>{const n=Zt(),{formatDate:a,formatMessage:r}=L(),{navigateToFolder:o}=Ge(),{isSelected:i,toggle:d,selectRange:u}=ye(),{canUpdate:p}=ce(),{isMovePending:g}=ue()??{isMovePending:!1},{dragData:f,draggable:{attributes:m,listeners:h,setNodeRef:x,isDragging:v},droppable:{setNodeRef:M},showValidDropHighlight:b,showInvalidDropCursor:k}=Nn(e),C=De(e.id),w=$=>{se($)&&($.shiftKey?u(s,C):$.metaKey||$.ctrlKey?d(C):o(e))},A=$=>{se($)&&($.key==="Enter"?($.preventDefault(),o(e)):$.key===" "&&($.preventDefault(),d(C)))},j=$=>{$.stopPropagation(),$.shiftKey?u(s,C):d(C)};return t.jsxs(Fi,{ref:$=>{x($),M($)},...m,...h,$isDragging:v,$isMovePending:g,$isValidDropTarget:b,$isInvalidDropTarget:k,$isSelected:i(C),tabIndex:0,role:"row",onDragStart:$=>{se($)&&$.preventDefault()},onClick:w,onKeyDown:A,onPointerDown:$=>{se($)&&h?.onPointerDown?.($)},children:[p&&t.jsx(qn,{onClick:de,onKeyDown:de,children:t.jsx(S,{children:t.jsx(Ae,{checked:i(C),onClick:j,"aria-label":r({id:l("list.table.row.select"),defaultMessage:"Select {name}"},{name:e.name})})})}),t.jsx(Vn,{children:t.jsxs(S,{gap:3,alignItems:"center",minWidth:0,children:[t.jsx(S,{justifyContent:"center",alignItems:"center",borderRadius:"4px",color:"neutral600",width:"3.2rem",height:"3.2rem",shrink:0,children:t.jsx(ve,{width:20,height:20})}),t.jsx(We,{textColor:"neutral800",fontWeight:"semiBold",children:e.name})]})}),n&&t.jsxs(t.Fragment,{children:[t.jsx(Te,{children:t.jsx(T,{textColor:"neutral600",children:e.createdAt?a(new Date(e.createdAt),{dateStyle:"long"}):"-"})}),t.jsx(Te,{children:t.jsx(T,{textColor:"neutral600",children:e.updatedAt?a(new Date(e.updatedAt),{dateStyle:"long"}):"-"})}),t.jsx(Te,{children:t.jsx(T,{textColor:"neutral600",children:"-"})})]}),t.jsx(Oe,{onClick:de,onKeyDown:de,onPointerDown:de,children:t.jsx(S,{justifyContent:"flex-end",children:t.jsx(Un,{folder:e,dragData:f})})})]})},Ei=({assets:e,folders:s=[],mixedItems:n=null,renderedKeys:a,onAssetItemClick:r})=>{const o=Zt(),{formatMessage:i}=L(),{selectedKeys:d,selectAll:u,clear:p}=ye(),{canUpdate:g}=ce(),{trackUsage:f}=je(),m=o?$s:$s.filter(w=>w.name==="name"||w.name==="actions"),h=g,x=m.length+(h?1:0),v=s.length+e.length,M=a??rs({folders:s,assets:e,mixedItems:n}),{allSelected:b,isIndeterminate:k}=To(d,M),C=()=>{b?p():(f("didSelectAllMediaLibraryElements"),u(M))};return v===0?null:t.jsxs(Si,{colCount:x,rowCount:(n?n.length:v)+1,children:[t.jsx(Ii,{children:t.jsxs(Oa,{children:[h&&t.jsx(Di,{children:t.jsx(S,{children:t.jsx(Ae,{checked:k?"indeterminate":b,disabled:M.length===0,onCheckedChange:C,"aria-label":i({id:l("list.table.header.select-all"),defaultMessage:"Select all"})})})}),m.map(w=>{const A=i(w.label);return"isVisuallyHidden"in w&&w.isVisuallyHidden?t.jsx(Nt,{$flex:w.name==="name",children:t.jsx(ke,{children:i({id:l("table.header.actions"),defaultMessage:"actions"})})},w.name):t.jsx(Nt,{$flex:w.name==="name",children:t.jsx(T,{textColor:"neutral600",variant:"sigma",children:A})},w.name)})]})}),t.jsxs(Pa,{children:[n?.map(w=>w.kind==="folder"?t.jsx(As,{folder:w.folder,orderedItemKeys:M},`folder-${w.folder.id}`):t.jsx(ks,{asset:w.asset,orderedItemKeys:M,onAssetItemClick:r},w.asset.id)),!n&&s.map(w=>t.jsx(As,{folder:w,orderedItemKeys:M},`folder-${w.id}`)),!n&&e.map(w=>t.jsx(ks,{asset:w,orderedItemKeys:M,onAssetItemClick:r},w.id))]})]})},Ri=(e,s,n,a)=>{const r=[];return e.forEach(o=>{r.push({kind:"file",id:o,name:"",folderId:ct(n,"file",o,a)})}),s.forEach(o=>{r.push({kind:"folder",id:o,name:"",parentId:ct(n,"folder",o,a)})}),r},Ti=y(S)`
  position: fixed;
  z-index: ${({theme:e})=>e.zIndices.popover};
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  gap: ${({theme:e})=>e.spaces[2]};
  padding: ${({theme:e})=>`${e.spaces[3]} ${e.spaces[2]} ${e.spaces[3]} ${e.spaces[6]}`};
  background: ${({theme:e})=>e.colors.neutral0};
  border: 0;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral150};
  border-radius: 0;
  box-shadow: ${({theme:e})=>e.shadows.popupShadow};

  /* Docked full-bleed at the bottom on mobile, which is exactly where the open
     drawer keeps its own actions — so it steps aside there, and only there. */
  display: ${({$isDrawerOpen:e})=>e?"none":"flex"};

  /* Mobile with the metadata action present: the labelled button plus the icons
     no longer fit beside the count on one line, so the count takes a row of its
     own and every button drops to the next.

     Addressed by slot rather than by position: these rules used to use
     nth-child, which silently retargeted the moment a control was inserted
     into the row. */
  ${({$isStacked:e})=>e&&xe`
      flex-wrap: wrap;
      justify-content: space-between;

      > [data-bar-slot='count'] {
        flex-basis: 100%;
        margin-right: 0;
      }

      > [data-bar-slot='actions'] {
        margin-left: 0;
      }

      /* The divider only existed to set the clear action apart from the rest;
         with the row spread it would hang in mid-air between them. */
      > [data-bar-slot='divider'] {
        display: none;
      }
    `}

  ${({theme:e})=>e.breakpoints.medium} {
    display: flex;
    left: 50%;
    right: auto;
    bottom: ${({theme:e})=>e.spaces[4]};
    transform: translateX(-50%);
    border: 1px solid ${({theme:e})=>e.colors.neutral150};
    border-radius: ${({theme:e})=>e.borderRadius};
    /* Sized by its content, capped so the pill can never span the whole
       viewport. The nowrap is what lets the content set that width — without it
       the labels wrap and the bar reads as narrow and tall. Inherited, so it
       covers every label inside.

       Deliberately not applied on mobile: there the bar is full-bleed and
       cannot grow, so refusing to wrap would clip the last action on a narrow
       phone rather than widen anything. */
    white-space: nowrap;
    max-width: 90%;

    /* One line again from tablet up, where it fits. */
    flex-wrap: nowrap;

    > [data-bar-slot='count'] {
      flex-basis: auto;
    }

    > [data-bar-slot='actions'] {
      margin-left: auto;
    }

    > [data-bar-slot='divider'] {
      display: block;
    }
  }
`,Li=y(S)`
  margin-left: auto;
  align-items: center;
  gap: ${({theme:e})=>e.spaces[2]};
`,Oi=y(U)`
  width: 1px;
  align-self: stretch;
  background: ${({theme:e})=>e.colors.neutral150};
  margin-left: ${({theme:e})=>e.spaces[1]};
`,Pi=({assets:e=[],locations:s=xn,renderedKeys:n=[]})=>{const{formatMessage:a}=L(),{toggleNotification:r}=me(),o=xt(),{canUpdate:i}=ce(),{selectedIds:d,selectedFolderIds:u,selectAll:p,clear:g}=ye(),{trackUsage:f}=je(),{currentFolderId:m}=Ge(),h=Ur(),[x,{isLoading:v}]=za(),[M,b]=c.useState(!1),[k,C]=c.useState(!1),[w,A]=c.useState(!1),j=d.size+u.size,$=()=>{f("didSelectAllMediaLibraryElements"),p(n)},P=w||v,E=c.useMemo(()=>Ri(d,u,s,m),[d,u,s,m]),Y=d.size>ys,N=c.useMemo(()=>{const W=new Map(e.map(({id:z,mime:V})=>[z,V]));return[...d].filter(z=>fn(W.get(z))).length},[e,d]),I=d.size>0&&N===0;let D;Y?D=a({id:l("list.bulk-actions.create-metadata.too-many"),defaultMessage:"Metadata can be generated for up to {max} assets at a time. Select fewer assets to continue."},{max:ys}):I&&(D=a({id:l("list.bulk-actions.create-metadata.no-eligible"),defaultMessage:"Metadata can only be generated for images. None of the selected assets are supported."}));const R=async()=>{if(v||Y||I)return;const W=Array.from(d),z=await x({fileIds:W});if("error"in z){r({type:"danger",message:a({id:l("list.bulk-actions.create-metadata.error"),defaultMessage:"An error occurred while generating metadata."})});return}const V=z.data.filter(({status:Z})=>Z==="success").length,F=z.data.filter(({status:Z})=>Z==="skipped").length,O=z.data.filter(({status:Z})=>Z==="error").length,K=u.size;if(O===z.data.length){r({type:"danger",message:a({id:l("list.bulk-actions.create-metadata.error"),defaultMessage:"An error occurred while generating metadata."})});return}r(F===0&&O===0&&K===0?{type:"success",message:a({id:l("list.bulk-actions.create-metadata.success"),defaultMessage:"{count, plural, =1 {Metadata generated for # asset} other {Metadata generated for # assets}}"},{count:V})}:{type:"warning",message:a({id:l("list.bulk-actions.create-metadata.partial"),defaultMessage:"{successCount} generated, {skippedCount} skipped (unsupported file type), {errorCount} failed{folderCount, plural, =0 {} one {, # folder ignored} other {, # folders ignored}}"},{successCount:V,skippedCount:F,errorCount:O,folderCount:K})}),g()};return j===0||!i?null:t.jsxs(Ti,{$isDrawerOpen:h,$isStacked:o,tag:"section",role:"region","aria-label":a({id:l("list.bulk-actions.label"),defaultMessage:"Bulk actions"}),children:[t.jsx(T,{"data-bar-slot":"count",fontWeight:"bold",textColor:"neutral800",marginRight:4,children:a({id:l("list.bulk-actions.selected-count"),defaultMessage:"{count, plural, =1 {# item selected} other {# items selected}}"},{count:j})}),t.jsx(Ka,{onClick:$,marginRight:4,disabled:P,children:a({id:l("list.bulk-actions.select-all"),defaultMessage:"Select all"})}),t.jsxs(Li,{"data-bar-slot":"actions",children:[o&&t.jsx(Gt,{label:D,children:t.jsx(U,{children:t.jsx(Q,{size:"S",startIcon:t.jsx(Ha,{}),disabled:P||d.size===0||Y||I,loading:v,onClick:R,children:a({id:l("list.bulk-actions.create-metadata"),defaultMessage:"Create metadata"})})})}),t.jsx(re,{variant:"tertiary",disabled:P,label:a({id:l("list.bulk-actions.move"),defaultMessage:"Move"}),onClick:()=>C(!0),children:t.jsx(Qt,{})}),t.jsx(is,{open:k,onClose:()=>C(!1),items:E,onSuccess:g}),t.jsx(re,{variant:"danger-light",disabled:P,label:a({id:l("list.bulk-actions.delete"),defaultMessage:"Delete"}),onClick:()=>b(!0),children:t.jsx(gt,{})}),t.jsx(ls,{open:M,onClose:()=>b(!1),target:{fileIds:Array.from(d),folderIds:Array.from(u)},onSuccess:g,onPendingChange:A})]}),t.jsx(Oi,{"data-bar-slot":"divider","aria-hidden":!0}),t.jsx(re,{variant:"ghost",label:a({id:l("list.bulk-actions.clear"),defaultMessage:"Clear selection"}),onClick:g,disabled:P,children:t.jsx(pt,{})})]})},Gn=c.createContext(null),Bi=y(U)`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
`,Ni=({children:e,onDrop:s,disabled:n=!1})=>{const[a,r]=c.useState(!1),o=c.useRef(0),i={isDragging:a};c.useEffect(()=>{const f=()=>{r(!1),o.current=0},m=h=>{h.relatedTarget||(r(!1),o.current=0)};return document.addEventListener("dragend",f),document.addEventListener("dragleave",m),()=>{document.removeEventListener("dragend",f),document.removeEventListener("dragleave",m)}},[]);const d=c.useCallback(f=>{f.preventDefault(),f.stopPropagation(),!n&&f.dataTransfer.types.includes("Files")&&(o.current+=1,r(!0))},[n]),u=c.useCallback(f=>{f.preventDefault(),f.stopPropagation(),o.current-=1,o.current<=0&&(r(!1),o.current=0)},[]),p=c.useCallback(f=>{f.preventDefault(),f.stopPropagation(),f.dataTransfer.dropEffect="copy"},[]),g=c.useCallback(f=>{if(f.preventDefault(),f.stopPropagation(),r(!1),o.current=0,n)return;const{files:m}=f.dataTransfer;m?.length&&s&&s(Array.from(m))},[s,n]);return t.jsx(Gn.Provider,{value:i,children:t.jsx(Bi,{"data-testid":"assets-dropzone",onDragEnter:d,onDragLeave:u,onDragOver:p,onDrop:g,children:e})})},Yn=()=>{const e=c.useContext(Gn);if(!e)throw new Error("useUploadDropZone must be used within UploadDropZone");return{isDragging:e.isDragging}},_i=(e,s)=>`${e}${Math.floor(s*255).toString(16).padStart(2,"0")}`,Ui=y(U)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({theme:e})=>_i(e.colors.primary200,.3)};
  border: 1px solid ${({theme:e})=>e.colors.primary700};
  border-radius: ${({theme:e})=>e.borderRadius};
  z-index: 1;
  pointer-events: none;
`,zi=({children:e})=>{const{isDragging:s}=Yn(),a=ue()?.isInternalDragActive??!1,r=s&&!a;return t.jsxs(U,{position:"relative",children:[r&&t.jsx(Ui,{}),e]})},Ki=y(U)`
  position: fixed;
  bottom: ${({theme:e})=>e.spaces[8]};
  left: 50%;
  transform: translateX(calc(-50% + ${({$leftContentWidth:e})=>e/2}px));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spaces[2]};
  background: ${({theme:e})=>e.colors.primary600};
  padding: ${({theme:e})=>e.spaces[4]} ${({theme:e})=>e.spaces[6]};
  border-radius: ${({theme:e})=>e.borderRadius};
  z-index: 2;
`,Hi=({uploadDropZoneRef:e,folderName:s})=>{const{formatMessage:n}=L(),{isDragging:a}=Yn(),o=ue()?.isInternalDragActive??!1,i=a&&!o,[d,u]=c.useState(0);return c.useEffect(()=>{if(!e?.current)return;const p=()=>{const f=e.current?.getBoundingClientRect();f&&u(m=>m!==f.left?f.left:m)};p();const g=new ResizeObserver(p);return g.observe(e.current),()=>g.disconnect()},[e]),i?t.jsxs(Ki,{$leftContentWidth:d,children:[t.jsx(T,{textColor:"neutral0",children:n({id:l("dropzone.upload.message"),defaultMessage:"Drop here to upload to"})}),t.jsxs(S,{gap:2,alignItems:"center",children:[t.jsx(ve,{width:20,height:20,fill:"neutral0"}),t.jsx(T,{textColor:"neutral0",fontWeight:"semiBold",children:s})]})]}):null},Vi=({onAddAssets:e,canAddAssets:s,searchQuery:n,onClearSearch:a})=>{const{formatMessage:r}=L(),o=!!n;return t.jsxs(S,{direction:"column",alignItems:"center",gap:6,padding:11,children:[t.jsx(cn,{width:"16rem",height:"8.8rem"}),t.jsxs(S,{direction:"column",alignItems:"center",gap:2,textAlign:"center",children:[t.jsx(T,{variant:"delta",tag:"p",fontWeight:"bold",textColor:"neutral800",children:r(o?{id:l("list.search.empty.title"),defaultMessage:"No results found"}:{id:l("list.empty.title"),defaultMessage:"No assets yet"})}),t.jsx(T,{textColor:"neutral600",children:o?r({id:l("list.search.empty.description"),defaultMessage:'No assets or folders match "{query}". Try a different search.'},{query:n}):r({id:l("list.empty.description"),defaultMessage:"Get started by uploading assets or creating a folder."})})]}),o?t.jsx(Q,{variant:"secondary",startIcon:t.jsx(pt,{"aria-hidden":!0}),onClick:a,children:r({id:l("list.search.empty.clear"),defaultMessage:"Clear search"})}):s&&t.jsx(Q,{onClick:e,children:r({id:l("list.empty.add-assets"),defaultMessage:"Add assets"})})]})},Wi=({onClearFilters:e})=>{const{formatMessage:s}=L();return t.jsxs(S,{direction:"column",alignItems:"center",gap:6,padding:11,children:[t.jsx(cn,{width:"16rem",height:"8.8rem"}),t.jsx(T,{textColor:"neutral600",children:s({id:l("list.filters.empty"),defaultMessage:"No items matched current filters"})}),t.jsx(Q,{variant:"secondary",startIcon:t.jsx(pt,{"aria-hidden":!0}),onClick:e,children:s({id:l("list.filters.clear"),defaultMessage:"Clear filters"})})]})},ds=["folder","picture","audio","video","document"],cs=["1day","3days","1week","1month","3months","6months","1year"],qi={created:"createdAt",updated:"updatedAt"},Gi={createdAt:"created",updatedAt:"updated"},Fs={exact:"isExactly",within:"withinLast",notwithin:"notWithinLast"},Yi={isExactly:"exact",withinLast:"within",notWithinLast:"notwithin"},Es={rangeis:"is",rangenot:"isNot"},Qi={is:"rangeis",isNot:"rangenot"},Rs=/^\d{4}-\d{2}-\d{2}$/,Zi=e=>ds.includes(e),Xi=e=>cs.includes(e),Ji=e=>{const[s,n,a]=e.split(":");if(!s||!n||!a)return null;if(s==="type"){if(n!=="is"&&n!=="not")return null;const o=a.split(",").filter(Zi);return o.length>0?{kind:"type",condition:n==="is"?"is":"isNot",values:o}:null}const r=qi[s];if(!r)return null;if(n in Fs)return Xi(a)?{kind:"date",field:r,mode:"preset",condition:Fs[n],preset:a}:null;if(n in Es){const[o,i]=a.split("..");return Rs.test(o??"")&&Rs.test(i??"")?{kind:"date",field:r,mode:"range",condition:Es[n],from:o,to:i}:null}return null},el=e=>typeof e!="string"||e===""?[]:e.split(";").map(Ji).filter(s=>s!==null),tl=e=>{if(e.kind==="type")return`type:${e.condition==="is"?"is":"not"}:${e.values.join(",")}`;const s=Gi[e.field];return e.mode==="preset"?`${s}:${Yi[e.condition]}:${e.preset}`:`${s}:${Qi[e.condition]}:${e.from}..${e.to}`},Ts=e=>e.map(tl).join(";"),sl=()=>{const[{query:e},s]=$e(),n=el(e?.filters),a=r=>{r.length===0?s(pe(e,{filters:void 0}),"push",!0):s(pe(e,{filters:Ts(r)}),"push",!0)};return{filters:n,serialized:Ts(n),addFilter:r=>a([...n,r]),updateFilter:(r,o)=>a(n.map((i,d)=>d===r?o:i)),removeFilter:r=>a(n.filter((o,i)=>i!==r)),clearFilters:()=>a([])}},_t={picture:"image",audio:"audio",video:"video"},Ls=Object.values(_t),nl={"1day":{days:1},"3days":{days:3},"1week":{days:7},"1month":{months:1},"3months":{months:3},"6months":{months:6},"1year":{years:1}},al=(e,s)=>{const{days:n=0,months:a=0,years:r=0}=nl[s],o=new Date(e.getTime());if(r||a){const i=o.getDate();o.setDate(1),o.setFullYear(o.getFullYear()-r),o.setMonth(o.getMonth()-a);const d=new Date(o.getFullYear(),o.getMonth()+1,0).getDate();o.setDate(Math.min(i,d))}return o.setDate(o.getDate()-n),o},Os=e=>{const s=new Date(e.getTime());return s.setHours(0,0,0,0),s},Ps=e=>{const s=new Date(e.getTime());return s.setHours(23,59,59,999),s},ut=e=>{const[s,n,a]=e.split("-").map(Number);return new Date(s,n-1,a)},rl=(e,s)=>{const{field:n}=e;if(e.mode==="preset"){const o=al(s,e.preset);switch(e.condition){case"withinLast":return{[n]:{$gte:o.toISOString()}};case"notWithinLast":return{[n]:{$lt:o.toISOString()}};case"isExactly":return{[n]:{$gte:Os(o).toISOString(),$lte:Ps(o).toISOString()}}}}const a=Os(ut(e.from)).toISOString(),r=Ps(ut(e.to)).toISOString();return e.condition==="is"?{[n]:{$gte:a,$lte:r}}:{$or:[{[n]:{$lt:a}},{[n]:{$gt:r}}]}},ol=e=>{const s=e.values.filter(r=>r!=="folder");if(s.length===0)return null;const n=s.map(r=>r==="document"?{$and:Ls.map(o=>({mime:{$notContains:o}}))}:{mime:{$contains:_t[r]}});if(e.condition==="is")return n.length===1?n[0]:{$or:n};const a=s.map(r=>r==="document"?{$or:Ls.map(o=>({mime:{$contains:o}}))}:{mime:{$notContains:_t[r]}});return a.length===1?a[0]:{$and:a}},il=(e,s)=>{const n=[],a=[];let r=!0,o=!0;for(const i of e){if(i.kind==="date"){const p=rl(i,s);n.push(p),a.push(p);continue}const d=i.values.includes("folder");(i.condition==="is"?!d:d)&&(r=!1);const u=ol(i);u?n.push(u):i.condition==="is"&&(o=!1)}return{fileClauses:n,folderClauses:a,showFolders:r,showFiles:o}},ll=y.button`
  width: 3rem;
  height: 3rem;
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius};
  cursor: pointer;
  font: inherit;
  color: ${({theme:e,$isEdge:s,$isMuted:n})=>s?e.colors.primary600:n?e.colors.neutral400:e.colors.neutral800};
  background: ${({theme:e,$inRange:s,$isEdge:n})=>n?e.colors.primary200:s?e.colors.primary100:"transparent"};

  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary600};
    outline-offset: -2px;
  }
`,Bs=e=>{const s=`${e.getMonth()+1}`.padStart(2,"0"),n=`${e.getDate()}`.padStart(2,"0");return`${e.getFullYear()}-${s}-${n}`},dl=e=>{const[s,n,a]=e.split("-").map(Number);return new Date(s,n-1,a)},cl=(e,s)=>{const n=new Date(e,s,1),a=new Date(n.getTime());a.setDate(n.getDate()-(n.getDay()+6)%7);const r=[],o=new Date(a.getTime());do{const i=[];for(let d=0;d<7;d+=1)i.push(new Date(o.getTime())),o.setDate(o.getDate()+1);r.push(i)}while(o.getMonth()===s&&o.getFullYear()===e);return r},Ut=({from:e,to:s,onSelect:n})=>{const{formatMessage:a,formatDate:r}=L(),o=e?dl(e):new Date,[i,d]=c.useState(o.getFullYear()),[u,p]=c.useState(o.getMonth()),[g,f]=c.useState(null),m=g??e??null,h=g?null:s??null,x=k=>{const C=new Date(i,u+k,1);d(C.getFullYear()),p(C.getMonth())},v=k=>{const C=Bs(k);if(!g){f(C);return}const[w,A]=C<g?[C,g]:[g,C];f(null),n(w,A)},M=cl(i,u),b=M[0].map(k=>r(k,{weekday:"short"}).slice(0,2));return t.jsxs(U,{padding:2,width:"100%",role:"group","aria-label":a({id:l("list.filters.calendar.label"),defaultMessage:"Select date range"}),"data-testid":"date-range-calendar",children:[t.jsxs(S,{justifyContent:"space-between",alignItems:"center",paddingBottom:2,children:[t.jsx(re,{variant:"ghost",label:a({id:l("list.filters.calendar.previous-month"),defaultMessage:"Previous month"}),onClick:()=>x(-1),children:t.jsx(Va,{})}),t.jsx(T,{fontWeight:"semiBold",textColor:"neutral800",children:r(new Date(i,u,1),{month:"long",year:"numeric"})}),t.jsx(re,{variant:"ghost",label:a({id:l("list.filters.calendar.next-month"),defaultMessage:"Next month"}),onClick:()=>x(1),children:t.jsx(Wa,{})})]}),t.jsx(S,{children:b.map((k,C)=>t.jsx(S,{width:"3rem",height:"2.4rem",justifyContent:"center",children:t.jsx(T,{variant:"pi",fontWeight:"semiBold",textColor:"neutral600",children:k})},C))}),M.map((k,C)=>t.jsx(S,{children:k.map(w=>{const A=Bs(w),j=A===m||A===h,$=m!==null&&h!==null&&A>m&&A<h;return t.jsxs(ll,{type:"button",$isEdge:j,$inRange:$,$isMuted:w.getMonth()!==u,onClick:()=>v(w),children:[t.jsx(ke,{children:r(w,{dateStyle:"long"})}),t.jsx("span",{"aria-hidden":!0,children:w.getDate()})]},A)})},C))]})},zt={folder:{id:l("list.filters.type.folder"),defaultMessage:"Folder"},picture:{id:l("list.filters.type.picture"),defaultMessage:"Picture"},audio:{id:l("list.filters.type.audio"),defaultMessage:"Audio"},video:{id:l("list.filters.type.video"),defaultMessage:"Video"},document:{id:l("list.filters.type.document"),defaultMessage:"Document"}},Kt={"1day":{id:l("list.filters.preset.1day"),defaultMessage:"1 day ago"},"3days":{id:l("list.filters.preset.3days"),defaultMessage:"3 days ago"},"1week":{id:l("list.filters.preset.1week"),defaultMessage:"1 week ago"},"1month":{id:l("list.filters.preset.1month"),defaultMessage:"1 month ago"},"3months":{id:l("list.filters.preset.3months"),defaultMessage:"3 months ago"},"6months":{id:l("list.filters.preset.6months"),defaultMessage:"6 months ago"},"1year":{id:l("list.filters.preset.1year"),defaultMessage:"1 year ago"}},Ht={createdAt:{id:l("list.filters.field.created"),defaultMessage:"Creation date"},updatedAt:{id:l("list.filters.field.updated"),defaultMessage:"Last modified"}},kt=y(_.SubTrigger)`
  width: 100%;
  justify-content: space-between;
`,Ee="24.2rem",At="70dvh",ul=`min(${Ee}, calc(100dvw - 2rem))`,Ft=y(_.Item)`
  width: 100%;
`,Ns=y(U)`
  width: 100%;

  > * {
    width: 100%;
  }

  /* menuitem, menuitemradio and menuitemcheckbox — every option row, plus the
     "Select date range" toggle, which sits at the same level. */
  > [role^='menuitem'] {
    padding-left: ${({theme:e})=>e.spaces[6]};
  }
`,Et=y(ft)`
  transition: transform 0.2s ease;
  transform: rotate(${({$open:e})=>e?"180deg":"0deg"});
`,Rt=y(_.SubContent)`
  margin-top: calc(-1 * (${({theme:e})=>e.spaces[1]} + 1px));
`,gl=y(Ga)`
  height: 1.6rem;
  min-width: auto;
  padding: 0 0.4rem;
`,hl=({listFilters:e})=>{const{formatMessage:s}=L(),{trackUsage:n}=je(),[a,r]=c.useState(!1),{filters:o,addFilter:i,updateFilter:d,removeFilter:u}=e,p=I=>n("didFilterMediaLibraryElements",{location:te,filter:I});let g=-1;for(let I=o.length-1;I>=0;I-=1)if(o[I].kind==="type"){g=I;break}const f=g>=0?o[g]:null,m=f&&f.kind==="type"?f.values:[],h=I=>{const D=!m.includes(I),R=D?[...m,I]:m.filter(W=>W!==I);D&&p("type"),f&&f.kind==="type"?R.length===0?u(g):d(g,{...f,values:R}):R.length>0&&i({kind:"type",condition:"is",values:R})},x=(I,D)=>{p(I);for(let R=o.length-1;R>=0;R-=1){const W=o[R];if(W.kind==="date"&&W.mode==="preset"&&W.field===I){d(R,{...W,preset:D});return}}i({kind:"date",field:I,mode:"preset",condition:"withinLast",preset:D})},v=(I,D)=>{p("createdAt"),i({kind:"date",field:"createdAt",mode:"range",condition:"is",from:I,to:D}),r(!1)},M=dn(),[b,k]=c.useState(null),[C,w]=c.useState(!1),A=I=>{r(I),I||(k(null),w(!1))},j=I=>{k(D=>D===I?null:I),w(!1)},$=ds.map(I=>t.jsx(_.Item,{role:"menuitemcheckbox","aria-checked":m.includes(I),onSelect:D=>{D.preventDefault(),h(I)},startIcon:t.jsx(Ae,{checked:m.includes(I),tabIndex:-1,"aria-hidden":!0}),children:s(zt[I])},I)),P=I=>{for(let D=o.length-1;D>=0;D-=1){const R=o[D];if(R.kind==="date"&&R.mode==="preset"&&R.field===I)return R.preset}return null},E=I=>{const D=P(I);return cs.map(R=>t.jsx(_.Item,{role:"menuitemradio","aria-checked":D===R,onSelect:()=>{x(I,R)},endIcon:D===R?t.jsx(mt,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem",fill:"primary600"}):null,children:s(Kt[R])},R))},Y=s({id:l("list.filters.field.type"),defaultMessage:"Type"}),N=s({id:l("list.filters.select-date-range"),defaultMessage:"Select date range"});return t.jsxs(_.Root,{open:a,onOpenChange:A,children:[t.jsx(_.Trigger,{variant:"tertiary",startIcon:t.jsx(qa,{"aria-hidden":!0}),endIcon:null,children:t.jsxs(S,{gap:2,alignItems:"center",tag:"span",children:[s({id:l("list.filters.trigger"),defaultMessage:"Filter"}),o.length>0&&t.jsx(gl,{children:o.length})]})}),t.jsx(_.Content,{popoverPlacement:"bottom-start",zIndex:2,maxHeight:At,width:M?ul:Ee,children:M?t.jsxs(t.Fragment,{children:[t.jsx(Ft,{"aria-expanded":b==="type",onSelect:I=>{I.preventDefault(),j("type")},endIcon:t.jsx(Et,{$open:b==="type","aria-hidden":!0}),children:Y}),b==="type"&&t.jsx(Ns,{children:$}),["createdAt","updatedAt"].map(I=>t.jsxs(U,{width:"100%",children:[t.jsx(Ft,{"aria-expanded":b===I,onSelect:D=>{D.preventDefault(),j(I)},endIcon:t.jsx(Et,{$open:b===I,"aria-hidden":!0}),children:s(Ht[I])}),b===I&&t.jsxs(Ns,{children:[E(I),I==="createdAt"&&t.jsxs(t.Fragment,{children:[t.jsx(Ft,{"aria-expanded":C,onSelect:D=>{D.preventDefault(),w(R=>!R)},endIcon:t.jsx(Et,{$open:C,"aria-hidden":!0}),children:N}),C&&t.jsx(U,{paddingLeft:2,children:t.jsx(Ut,{onSelect:v})})]})]})]},I))]}):t.jsxs(t.Fragment,{children:[t.jsxs(_.SubRoot,{children:[t.jsx(kt,{children:Y}),t.jsx(Rt,{zIndex:2,maxHeight:At,width:Ee,children:$})]}),["createdAt","updatedAt"].map(I=>t.jsxs(_.SubRoot,{children:[t.jsx(kt,{children:s(Ht[I])}),t.jsxs(Rt,{zIndex:2,maxHeight:At,width:Ee,children:[E(I),I==="createdAt"&&t.jsxs(_.SubRoot,{children:[t.jsx(kt,{children:N}),t.jsx(Rt,{zIndex:2,maxHeight:"none",width:Ee,children:t.jsx(Ut,{onSelect:v})})]})]})]},I))]})})]})},pl=y(S)`
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};
  overflow: hidden;
`,us=y.button`
  border: none;
  background: transparent;
  font: inherit;
  padding: ${({theme:e})=>`${e.spaces[2]} ${e.spaces[3]}`};
  cursor: ${({$interactive:e})=>e?"pointer":"default"};
  border-right: 1px solid ${({theme:e})=>e.colors.neutral200};

  ${({theme:e})=>e.breakpoints.medium} {
    padding: ${({theme:e})=>`${e.spaces[1]} ${e.spaces[2]}`};
  }
  ${({$interactive:e,theme:s})=>e&&`&:hover { background: ${s.colors.primary100}; }`}

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary600};
    outline-offset: -2px;
  }
`,fl=y.span`
  display: inline-flex;
  align-items: center;
  padding: ${({theme:e})=>`${e.spaces[1]} ${e.spaces[2]}`};
  border-right: 1px solid ${({theme:e})=>e.colors.neutral200};
`,gs=y(Se.Content)`
  width: ${Ee};
`,Qn=y.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spaces[4]};
  width: 100%;
  border: none;
  background: transparent;
  font-size: ${({theme:e})=>e.fontSizes[2]};
  line-height: ${({theme:e})=>e.lineHeights[4]};
  font-family: inherit;
  text-align: left;
  padding: ${({theme:e})=>`${e.spaces[2]} ${e.spaces[4]}`};
  border-radius: ${({theme:e})=>e.borderRadius};
  cursor: pointer;
  color: ${({theme:e})=>e.colors.neutral800};

  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary600};
    outline-offset: -2px;
  }
`,ml=y.button`
  border: none;
  background: transparent;
  display: inline-flex;
  align-items: center;
  padding: ${({theme:e})=>`0 ${e.spaces[2]}`};
  cursor: pointer;
  color: ${({theme:e})=>e.colors.neutral600};

  &:hover {
    color: ${({theme:e})=>e.colors.neutral800};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary600};
    outline-offset: -2px;
  }
`,_s={is:{id:l("list.filters.condition.is"),defaultMessage:"is"},isNot:{id:l("list.filters.condition.is-not"),defaultMessage:"is not"}},Us={isExactly:{id:l("list.filters.condition.is-exactly"),defaultMessage:"is exactly"},withinLast:{id:l("list.filters.condition.within-last"),defaultMessage:"within the last"},notWithinLast:{id:l("list.filters.condition.not-within-last"),defaultMessage:"not within the last"}},zs={is:{id:l("list.filters.condition.is"),defaultMessage:"is"},isNot:{id:l("list.filters.condition.is-not"),defaultMessage:"is not"}},Tt=({label:e,options:s,active:n,getOptionLabel:a,onPick:r})=>{const[o,i]=c.useState(!1);return t.jsxs(Se.Root,{open:o,onOpenChange:i,children:[t.jsx(Se.Trigger,{children:t.jsx(us,{type:"button",$interactive:!0,children:t.jsx(T,{variant:"pi",textColor:"neutral800",children:e})})}),t.jsx(gs,{children:t.jsx(S,{direction:"column",alignItems:"stretch",padding:1,children:s.map(d=>t.jsxs(Qn,{type:"button",onClick:()=>{r(d),i(!1)},children:[a(d),d===n&&t.jsx(mt,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem"})]},d))})})]})},xl=({filter:e,onChange:s})=>{const{formatMessage:n}=L(),[a,r]=c.useState(!1),o=e.values.map(d=>n(zt[d])).join(", "),i=d=>{const u=e.values.includes(d)?e.values.filter(p=>p!==d):[...e.values,d];u.length>0&&s({...e,values:u})};return t.jsxs(Se.Root,{open:a,onOpenChange:r,children:[t.jsx(Se.Trigger,{children:t.jsx(us,{type:"button",$interactive:!0,children:t.jsx(T,{variant:"pi",textColor:"neutral800",children:o})})}),t.jsx(gs,{children:t.jsx(S,{direction:"column",alignItems:"flex-start",padding:3,gap:2,children:ds.map(d=>t.jsx(Ae,{checked:e.values.includes(d),onCheckedChange:()=>i(d),children:n(zt[d])},d))})})]})},Ks=({filter:e,onChange:s})=>{const{formatMessage:n,formatDate:a}=L(),[r,o]=c.useState(!1),i=e.mode==="preset"?n(Kt[e.preset]):`${a(ut(e.from),{day:"2-digit",month:"short"})} - ${a(ut(e.to),{day:"2-digit",month:"short",year:"numeric"})}`;return t.jsxs(Se.Root,{open:r,onOpenChange:o,children:[t.jsx(Se.Trigger,{children:t.jsx(us,{type:"button",$interactive:!0,children:t.jsx(T,{variant:"pi",textColor:"neutral800",children:i})})}),t.jsx(gs,{children:e.mode==="preset"?t.jsx(S,{direction:"column",alignItems:"stretch",padding:1,children:cs.map(d=>t.jsxs(Qn,{type:"button",onClick:()=>{s({...e,preset:d}),o(!1)},children:[n(Kt[d]),d===e.preset&&t.jsx(mt,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem"})]},d))}):t.jsx(Ut,{from:e.from,to:e.to,onSelect:(d,u)=>{s({...e,from:d,to:u}),o(!1)}})})]})},yl=({filter:e,onChange:s,onRemove:n})=>{const{formatMessage:a}=L(),r=e.kind==="type"?a({id:l("list.filters.field.type"),defaultMessage:"Type"}):a(Ht[e.field]);return t.jsxs(pl,{alignItems:"stretch","data-testid":"filter-badge",children:[t.jsx(fl,{children:t.jsx(T,{variant:"pi",textColor:"neutral600",children:r})}),e.kind==="type"&&t.jsxs(t.Fragment,{children:[t.jsx(Tt,{label:a(_s[e.condition]),options:["is","isNot"],active:e.condition,getOptionLabel:o=>a(_s[o]),onPick:o=>s({...e,condition:o})}),t.jsx(xl,{filter:e,onChange:s})]}),e.kind==="date"&&e.mode==="preset"&&t.jsxs(t.Fragment,{children:[t.jsx(Tt,{label:a(Us[e.condition]),options:["isExactly","withinLast","notWithinLast"],active:e.condition,getOptionLabel:o=>a(Us[o]),onPick:o=>s({...e,condition:o})}),t.jsx(Ks,{filter:e,onChange:s})]}),e.kind==="date"&&e.mode==="range"&&t.jsxs(t.Fragment,{children:[t.jsx(Tt,{label:a(zs[e.condition]),options:["is","isNot"],active:e.condition,getOptionLabel:o=>a(zs[o]),onPick:o=>s({...e,condition:o})}),t.jsx(Ks,{filter:e,onChange:s})]}),t.jsx(ml,{type:"button",onClick:n,"aria-label":a({id:l("list.filters.remove"),defaultMessage:"Remove {filter} filter"},{filter:r}),children:t.jsx(pt,{width:"1.2rem",height:"1.2rem","aria-hidden":!0})})]})},bl=y(S)`
  padding-top: ${({theme:e,$compact:s})=>s?e.spaces[1]:e.spaces[6]};
  transition: padding-top 0.2s ease;
`,jl=({listFilters:e,compact:s=!1})=>{const{filters:n,updateFilter:a,removeFilter:r}=e;return n.length===0?null:t.jsx(bl,{$compact:s,gap:2,wrap:"wrap","data-testid":"filter-badges",children:n.map((o,i)=>t.jsx(yl,{filter:o,onChange:d=>a(i,d),onRemove:()=>r(i)},i))})},Zn=e=>{const{isMovePending:s,isValidDropTarget:n}=ue()??{isMovePending:!1,isValidDropTarget:()=>!1},{active:a}=gn(),r=e.id==null?Ln:Qo(e.id),o={kind:"folder-tree-target",id:e.id,name:e.name},i=pn({id:r,data:o,disabled:s}),d=n(e.id),u=i.isOver;return{droppable:i,isOver:u,showValidDropHighlight:u&&d,showInvalidDropCursor:u&&!d&&a!=null}},wl=600,Ml=({isOver:e,canExpand:s,onExpand:n})=>{c.useEffect(()=>{if(!e||!s)return;const a=setTimeout(n,wl);return()=>clearTimeout(a)},[e,s,n])},Xn=y.button`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spaces[2]};
  width: 100%;
  min-height: 3.2rem;
  padding: ${({theme:e})=>`${e.spaces[1]} ${e.spaces[2]}`};
  border: 0;
  background: ${({$isActive:e,$isValidDropTarget:s,theme:n})=>s||e?n.colors.primary100:"transparent"};
  color: ${({$isActive:e,theme:s})=>e?s.colors.primary700:s.colors.neutral800};
  border-radius: ${({theme:e})=>e.borderRadius};
  cursor: ${({$isMovePending:e,$isInvalidDropCursor:s})=>e?"wait":s?"not-allowed":"pointer"};
  text-align: left;
  font: inherit;
  pointer-events: ${({$isMovePending:e})=>e?"none":"auto"};

  ${({$isValidDropTarget:e,theme:s})=>e&&xe`
      outline: 1px dashed ${s.colors.primary600};
      outline-offset: -1px;
    `}

  &:hover {
    background: ${({$isActive:e,$isValidDropTarget:s,theme:n})=>s||e?n.colors.primary100:n.colors.neutral100};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary600};
    outline-offset: -2px;
  }
`,Cl=y(S)`
  cursor: ${({$isMovePending:e,$isInvalidDropCursor:s})=>e?"wait":s?"not-allowed":"default"};
  pointer-events: ${({$isMovePending:e})=>e?"none":"auto"};
  border-radius: ${({theme:e})=>e.borderRadius};

  ${({$isValidDropTarget:e,theme:s})=>e&&xe`
      background: ${s.colors.primary100};
      outline: 1px dashed ${s.colors.primary600};
      outline-offset: -1px;
    `}
`,Jn=(e,s,n=[])=>{for(const a of e){if(a.id===s)return n;if(a.children?.length){const r=a.id!=null?[...n,a.id]:n,o=Jn(a.children,s,r);if(o!==null)return o}}return null},vl=(e,s)=>{const[n,a]=c.useState(()=>new Set);c.useEffect(()=>{if(s==null)return;const d=Jn(e,s);!d||d.length===0||a(u=>{const p=new Set(u);let g=!1;for(const f of d)p.has(f)||(p.add(f),g=!0);return g?p:u})},[e,s]);const r=c.useCallback(d=>{a(u=>{const p=new Set(u);return p.has(d)?p.delete(d):p.add(d),p})},[]),o=c.useCallback(d=>{a(u=>{if(u.has(d))return u;const p=new Set(u);return p.add(d),p})},[]);return{isExpanded:c.useCallback(d=>n.has(d),[n]),toggleExpanded:r,expandFolder:o}},ea=y.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  /* Grid rather than block, and load-bearing despite rendering a single column:
     a minmax(0, 1fr) track contributes a minimum of 0, which is what stops each
     row propagating the min-content width of its own label.

     Folder names ellipsize, and text-overflow needs white-space: nowrap — so a
     label's min-content width is the entire name, and no box lays out narrower
     than its min-content. In block flow that floor travels up to the SubNav
     ScrollArea, which widens the rail and shows a horizontal scrollbar instead of
     truncating the name. Nesting makes it worse: the indent is spent before the
     label is measured, so shorter names trigger it the deeper you go.

     Measured in Chromium — dropping either declaration brings the scrollbar
     back, and neither min-width nor overflow on the row is a substitute. */
  display: grid;
  grid-template-columns: minmax(0, 1fr);
`,Sl=1.6,Il=y(re)`
  &&[aria-disabled='true'] {
    background: transparent;
    border-color: transparent;
    opacity: 0.3;
  }
`,Dl=y(ft)`
  transform: rotate(${({$expanded:e})=>e?"0deg":"-90deg"});
  transition: transform 0.2s ease;
`,$l=({id:e,name:s,folderChildren:n,level:a,currentFolderId:r,showActiveFolder:o,isExpanded:i,onToggle:d,onExpand:u,onSelect:p,isMovePending:g})=>{const{formatMessage:f}=L(),m=n.length>0,h=i(e),x=o&&r===e,{droppable:{setNodeRef:v},isOver:M,showValidDropHighlight:b,showInvalidDropCursor:k}=Zn({id:e,name:s}),C=c.useCallback(()=>u(e),[e,u]);return Ml({isOver:M,canExpand:m&&!h,onExpand:C}),t.jsxs("li",{children:[t.jsxs(Cl,{ref:v,alignItems:"center",paddingLeft:`${a*Sl}rem`,gap:1,$isValidDropTarget:b,$isInvalidDropCursor:k,$isMovePending:g,children:[t.jsx(Il,{label:m?f({id:l(h?"sidebar.tree.collapse":"sidebar.tree.expand"),defaultMessage:h?"Collapse {name}":"Expand {name}"},{name:s}):f({id:l("sidebar.tree.no-subfolders"),defaultMessage:"The folder {name} has no subfolders"},{name:s}),disabled:!m,onClick:w=>{w.stopPropagation(),d(e)},variant:"ghost",withTooltip:!1,"aria-expanded":m?h:void 0,children:t.jsx(Dl,{$expanded:h,fill:"neutral500"})}),t.jsx(U,{flex:"1",minWidth:0,children:t.jsx(Xn,{type:"button",$isActive:x,$isValidDropTarget:b,$isInvalidDropCursor:k,$isMovePending:g,"aria-current":x?"page":void 0,onClick:()=>p(e),"data-testid":`folder-tree-node-${e}`,"data-folder-id":e,children:t.jsx(We,{variant:"omega",fontWeight:x?"semiBold":"regular",children:s})})})]}),m&&h&&t.jsx(ea,{children:n.map(w=>t.jsx(ta,{node:w,level:a+1,currentFolderId:r,showActiveFolder:o,isExpanded:i,onToggle:d,onExpand:u,onSelect:p,isMovePending:g},w.id??w.name))})]})},ta=({node:e,...s})=>e.id==null?null:t.jsx($l,{...s,id:e.id,name:e.name??"",folderChildren:e.children??[]}),kl=({currentFolderId:e,showActiveFolder:s=!0,onSelectFolder:n})=>{const{formatMessage:a}=L(),{data:r=[],isLoading:o,isError:i}=ts(),{isExpanded:d,toggleExpanded:u,expandFolder:p}=vl(r,e),{isMovePending:g}=ue()??{isMovePending:!1},f=s&&e==null,m=a({id:l("sidebar.home"),defaultMessage:"Home"}),{droppable:{setNodeRef:h},showValidDropHighlight:x,showInvalidDropCursor:v}=Zn({id:null,name:m});return t.jsxs(Mt.Main,{"aria-label":a({id:l("sidebar.tree.aria-label"),defaultMessage:"Media library folders"}),children:[t.jsx(Mt.Header,{label:a({id:l("sidebar.title"),defaultMessage:"Media library"})}),t.jsx(Mt.Content,{children:t.jsxs(S,{direction:"column",alignItems:"stretch",gap:1,padding:3,children:[t.jsxs(Xn,{ref:h,type:"button",$isActive:f,$isValidDropTarget:x,$isInvalidDropCursor:v,$isMovePending:g,"aria-current":f?"page":void 0,onClick:()=>n(null),"data-testid":"folder-tree-home",children:[t.jsx(Ya,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem"}),t.jsx(T,{variant:"omega",fontWeight:f?"semiBold":"regular",children:m})]}),t.jsxs(U,{marginTop:4,children:[t.jsxs(S,{alignItems:"center",gap:1,paddingTop:1,paddingBottom:1,paddingLeft:2,paddingRight:2,marginBottom:2,children:[t.jsx(ve,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem",fill:"neutral500"}),t.jsx(T,{variant:"sigma",textColor:"neutral600",style:{textTransform:"uppercase"},children:a({id:l("sidebar.folders"),defaultMessage:"Folders"})})]}),o?t.jsx(S,{justifyContent:"center",padding:1,paddingTop:2,children:t.jsx(Ce,{children:a({id:l("sidebar.tree.loading"),defaultMessage:"Loading folders..."})})}):i?t.jsx(U,{padding:1,paddingTop:2,children:t.jsx(T,{variant:"pi",textColor:"danger600",children:a({id:l("sidebar.tree.error"),defaultMessage:"Could not load folders."})})}):r.length===0?t.jsx(U,{padding:1,paddingTop:2,children:t.jsx(T,{variant:"pi",textColor:"neutral500",children:a({id:l("sidebar.tree.empty"),defaultMessage:"No folders yet"})})}):t.jsx(ea,{children:r.map(M=>t.jsx(ta,{node:M,level:0,currentFolderId:e,showActiveFolder:s,isExpanded:d,onToggle:u,onExpand:p,onSelect:n,isMovePending:g},M.id??M.name))})]})]})})]})},Al=({open:e,onClose:s,onUpload:n})=>{const{formatMessage:a}=L(),[r,o]=c.useState(""),[i,d]=c.useState(null),u=()=>{o(""),d(null),s()},p=async g=>{g.preventDefault();const{urls:f,error:m}=Za(r);if(m){d(m);return}d(null),u(),await n(f)};return t.jsx(X.Root,{open:e,onOpenChange:g=>!g&&u(),children:t.jsx(X.Content,{children:t.jsxs("form",{onSubmit:p,children:[t.jsx(X.Header,{children:t.jsx(X.Title,{children:a({id:l("modal.url.title"),defaultMessage:"Import from URL"})})}),t.jsx(X.Body,{children:t.jsxs(J.Root,{error:i||void 0,hint:a({id:l("input.url.description"),defaultMessage:"Separate your URL links by a carriage return."}),children:[t.jsx(J.Label,{children:a({id:l("input.url.label"),defaultMessage:"URL(s)"})}),t.jsx(Qa,{name:"urls",minHeight:"unset",rows:Math.min(r.split(`
`).length,7),maxHeight:"10.5rem",placeholder:a({id:l("input.url.placeholder"),defaultMessage:"Empty"}),value:r,onChange:g=>{o(g.target.value),d(null)}}),t.jsx(J.Hint,{}),t.jsx(J.Error,{})]})}),t.jsxs(X.Footer,{children:[t.jsx(Q,{variant:"tertiary",onClick:u,children:a({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),t.jsx(Q,{type:"submit",children:a({id:l("modal.url.upload"),defaultMessage:"Upload"})})]})]})})})},Lt={oldestUploads:{id:l("list.sort.oldest-uploads"),defaultMessage:"Oldest uploads"},mostRecentUpdates:{id:l("list.sort.most-recent-updates"),defaultMessage:"Most recent updates"}},Ot={nameAsc:{id:l("list.sort.name-asc"),defaultMessage:"A to Z"},nameDesc:{id:l("list.sort.name-desc"),defaultMessage:"Z to A"},sizeAsc:{id:l("list.sort.size-asc"),defaultMessage:"File size ascending"},sizeDesc:{id:l("list.sort.size-desc"),defaultMessage:"File size descending"}},Hs={top:{id:l("list.sort.folders-on-top"),defaultMessage:"On top"},mixed:{id:l("list.sort.folders-mixed"),defaultMessage:"Mixed with files"}},Fl=y(_.Trigger)``,Vs=y(_.Label)`
  width: 100%;
  display: block;
  background: ${({theme:e})=>e.colorScheme==="dark"?e.colors.neutral150:e.colors.neutral100};
  padding-inline: ${({theme:e})=>e.spaces[3]};
  border-radius: ${({theme:e})=>e.borderRadius};
`,El=({sort:e,showFoldersGroup:s=!0})=>{const{formatMessage:n}=L(),{trackUsage:a}=je(),r=n({id:l("list.sort.trigger"),defaultMessage:"Sort: {active}"},{active:e.sortBy?n(Lt[e.sortBy]):n(Ot[e.direction])}),o=t.jsx(mt,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem",fill:"primary600"});return t.jsxs(_.Root,{children:[t.jsx(Fl,{variant:"ghost",endIcon:t.jsx(ft,{"aria-hidden":!0}),children:r}),t.jsxs(_.Content,{popoverPlacement:"bottom-end",zIndex:2,maxHeight:"70vh",minWidth:"25rem",children:[t.jsx(Vs,{children:n({id:l("list.sort.section"),defaultMessage:"Sort"})}),Object.keys(Lt).map(i=>t.jsx(_.Item,{role:"menuitemradio","aria-checked":e.sortBy===i,onSelect:d=>{d.preventDefault(),e.sortBy!==i&&a("didSortMediaLibraryElements",{location:te,sort:i}),e.setSortBy(e.sortBy===i?null:i)},endIcon:e.sortBy===i?o:null,children:n(Lt[i])},i)),Object.keys(Ot).map(i=>t.jsx(_.Item,{role:"menuitemradio","aria-checked":e.direction===i,onSelect:d=>{d.preventDefault(),e.direction!==i&&a("didSortMediaLibraryElements",{location:te,sort:i}),e.setDirection(e.direction===i?null:i)},endIcon:e.direction===i?o:null,children:n(Ot[i])},i)),s&&t.jsxs(t.Fragment,{children:[t.jsx(_.Separator,{}),t.jsx(Vs,{children:n({id:l("list.sort.folders"),defaultMessage:"Folders"})}),Object.keys(Hs).map(i=>t.jsx(_.Item,{role:"menuitemradio","aria-checked":e.foldersPosition===i,onSelect:d=>{d.preventDefault(),e.setFoldersPosition(i)},endIcon:e.foldersPosition===i?o:null,children:n(Hs[i])},i))]})]})]})},Rl=["createdAt","updatedAt","name","size"],Tl=e=>Rl.includes(e),Ll="updatedAt:DESC",Ol=(e,s,n)=>e==="size"?(s.size??0)-(n.size??0):e==="name"?s.name.localeCompare(n.name):(s[e]??"").localeCompare(n[e]??""),Pl=(e=Ll)=>{const[s,n]=e.split(":"),a=Tl(s),r=a?s:"updatedAt",i=(a?n:"DESC")==="ASC"?1:-1;return(d,u)=>{const p=Ol(r,d,u);return p!==0?i*p:i*(d.id-u.id)}},Bl=({assets:e,uploaded:s,sort:n,hasNextPage:a})=>{if(s.length===0)return e;const r=new Set(e.map(u=>u.id)),o=Pl(n),i=s.filter(u=>!r.has(u.id)).sort(o);if(i.length===0)return e;const d=[...e];for(const u of i){const p=d.findIndex(g=>o(u,g)<0);if(p===-1){if(a)continue;d.push(u)}else d.splice(p,0,u)}return d},sa=20,Nl=e=>{const s=new Map;for(const n of Object.keys(e).map(Number).sort((a,r)=>a-r))for(const a of e[n])s.set(a.id,a);return[...s.values()]},_l=({queryArgs:e,page:s,onRefreshed:n})=>{const{currentData:a}=ss({...e,page:s,pageSize:sa}),r=a?.results;return c.useEffect(()=>{r&&n(s,r)},[r,s,n]),null},Ul=({folder:e=null,sort:s,search:n,filters:a,enabled:r=!0}={})=>{const o={folder:e,sort:s,search:n,filters:a},i=JSON.stringify(o),d=JSON.stringify({folder:e,sort:s,filters:a}),[u,p]=c.useState({queryKey:i,page:1}),[g,f]=c.useState({queryKey:i,listKey:d,pages:{}}),m=u.queryKey===i?u.page:1;u.queryKey!==i&&p({queryKey:i,page:1});const{currentData:h,isLoading:x,isFetching:v,error:M,startedTimeStamp:b,fulfilledTimeStamp:k}=ss({...o,page:m,pageSize:sa},{skip:!r}),C=g.queryKey===i;h&&(!C||g.pages[m]!==h.results)&&f(C?{...g,pages:{...g.pages,[m]:h.results},pagination:h.pagination}:{queryKey:i,listKey:d,pages:{[m]:h.results},pagination:h.pagination});const w=c.useCallback((F,O)=>{f(K=>K.queryKey!==i||K.pages[F]===O?K:{...K,pages:{...K.pages,[F]:O}})},[i]),A=c.createElement(c.Fragment,null,Array.from({length:Math.max(0,m-1)},(F,O)=>O+1).map(F=>c.createElement(_l,{key:`${i}:${F}`,queryArgs:o,page:F,onRefreshed:w}))),j=Xa(),$=Ja(),P=c.useRef(e);c.useEffect(()=>{const F=P.current;if(P.current=e,F===e)return;const O=$.getState()[ze.reducerPath],K=ze.internalActions.removeQueryResult;Object.keys(O?.queries??{}).forEach(Z=>{if(!Z.startsWith("getAssets("))return;let ie;try{ie=JSON.parse(Z.slice(10,-1))}catch{return}ie.folder===F&&j(K({queryCacheKey:Z}))})},[e,j,$]);const E=g.listKey!==d,Y=c.useMemo(()=>E?[]:Nl(g.pages),[E,g.pages]),N=h?m<h.pagination.pageCount:!1,I=er(tr),D=!n&&(a?.length??0)===0,R=k!==void 0&&b!==void 0&&k>b?b:void 0,W=c.useMemo(()=>{if(!D||I.length===0)return Y;const F=I.filter(({asset:O,completedAt:K})=>Ke(O.folder)===e&&(R===void 0||K>R));return Bl({assets:Y,uploaded:F.map(({asset:O})=>O),sort:s,hasNextPage:N})},[D,I,Y,e,s,N,R]),z=v&&m>1,V=c.useCallback(()=>{p(F=>({queryKey:i,page:(F.queryKey===i?F.page:1)+1}))},[i]);return r?{assets:W,subscribers:A,pagination:h?.pagination??g.pagination,isLoading:x||E,isFetchingMore:z,hasNextPage:N,fetchNextPage:V,error:M}:{assets:[],subscribers:null,pagination:void 0,isLoading:!1,isFetchingMore:!1,hasNextPage:!1,fetchNextPage:V,error:void 0}},zl=({hasNextPage:e,isFetchingMore:s,onLoadMore:n,options:a})=>{const r=c.useRef(null),o=c.useRef(null),i=c.useRef(a);i.current=a;const d=c.useRef(n);d.current=n;const u=c.useRef(e);u.current=e;const p=c.useRef(s);p.current=s;const g=c.useCallback(f=>{if(r.current?.disconnect(),o.current=f,!f)return;const m=new IntersectionObserver(([h])=>{h.isIntersecting&&u.current&&!p.current&&d.current()},i.current);m.observe(f),r.current=m},[]);return c.useEffect(()=>()=>r.current?.disconnect(),[]),c.useEffect(()=>{s||!r.current||!o.current||(r.current.unobserve(o.current),r.current.observe(o.current))},[s]),g},hs={oldestUploads:"createdAt:ASC",mostRecentUpdates:"updatedAt:DESC"},ps={nameAsc:"name:ASC",nameDesc:"name:DESC",sizeAsc:"size:ASC",sizeDesc:"size:DESC"},Vt="mostRecentUpdates",Ws=Object.fromEntries(Object.entries(hs).map(([e,s])=>[s,e])),qs=Object.fromEntries(Object.entries(ps).map(([e,s])=>[s,e])),Kl=e=>{for(const s of(e??"").split(",")){if(s in Ws)return{sortBy:Ws[s],direction:null,isExplicit:!0};if(s in qs)return{sortBy:null,direction:qs[s],isExplicit:!0}}return{sortBy:Vt,direction:null,isExplicit:!1}},Gs=(e,s)=>[e&&hs[e],s&&ps[s]].filter(a=>!!a).join(","),Hl=()=>{const[{query:e},s]=$e(),{sortBy:n,direction:a,isExplicit:r}=Kl(e?.sort),o=e?.folders==="mixed"?"mixed":"top",i=(x,v)=>{x===null&&v===null&&(x=Vt);const M=Gs(x,v);s(x===Vt&&v===null?pe(e,{sort:void 0}):pe(e,{sort:M}))},d=x=>i(x,null),u=x=>i(null,x),p=x=>{s(x==="mixed"?pe(e,{folders:"mixed"}):pe(e,{folders:void 0}))},g=Gs(n,a),m=[n&&hs[n],a&&!a.startsWith("size")?ps[a]:null].filter(x=>!!x),h=r&&m.length>0?m.join(","):"name:ASC";return{sortBy:n,direction:a,foldersPosition:o,assetsSort:g,foldersSort:h,setSortBy:d,setDirection:u,setFoldersPosition:p}},Vl=({folderId:e,search:s,sort:n,filter:a})=>JSON.stringify({folderId:e,search:s,sort:n,filter:a}),Ys=(e,s)=>{switch(s){case"createdAt":case"updatedAt":return e[s]?new Date(e[s]).getTime():0;case"size":return e.size??0;case"name":default:return(e.name??"").toLowerCase()}},Wl=e=>{const s=e.split(",").map(n=>n.trim()).filter(Boolean).map(n=>{const[a,r]=n.split(":");return{field:a,desc:r?.toUpperCase()==="DESC"}});return(n,a)=>{for(const{field:r,desc:o}of s){const i=Ys(n,r),d=Ys(a,r);let u;if(typeof i=="string"||typeof d=="string"?u=String(i)<String(d)?-1:String(i)>String(d)?1:0:u=i-d,u!==0)return o?-u:u}return 0}},ql=({folders:e,assets:s,sort:n,hasNextPage:a})=>{const r=Wl(n),o=[...e].sort(r),i=s[s.length-1],d=!a||!i?a?[]:o:o.filter(g=>r(g,i)<=0),u=[];let p=0;for(const g of s){for(;p<d.length&&r(d[p],g)<=0;)u.push({kind:"folder",folder:d[p]}),p+=1;u.push({kind:"asset",asset:g})}for(;p<d.length;)u.push({kind:"folder",folder:d[p]}),p+=1;return u},Gl={threshold:0,rootMargin:"0px 0px -1px 0px"},Yl={threshold:0},Ql={id:l("header.content.item-count"),defaultMessage:"{count, plural, =1 {# item} other {# items}}"},Pt={both:{id:l("header.search-results.count"),defaultMessage:"{numberFolders, plural, one {1 folder} other {# folders}} - {numberAssets, plural, one {1 asset} other {# assets}}"},folders:{id:l("header.search-results.count.folders"),defaultMessage:"{numberFolders, plural, one {1 folder} other {# folders}}"},assets:{id:l("header.search-results.count.assets"),defaultMessage:"{numberAssets, plural, =0 {0 assets} one {1 asset} other {# assets}}"}},Zl=(e,s)=>e===0?Pt.assets:s===0?Pt.folders:Pt.both,Xl=({view:e,folders:s,isLoadingFolders:n,assets:a,isLoadingAssets:r,isFetchingMore:o,hasNextPage:i,fetchNextPage:d,error:u,locations:p,searchQuery:g,assetsSort:f,foldersPosition:m,hasActiveFilters:h,onClearFilters:x,onAssetItemClick:v,onAddAssets:M,canAddAssets:b,onClearSearch:k})=>{const{formatMessage:C}=L(),w=e===Ue.GRID,A=r||n,j=c.useMemo(()=>m==="mixed"&&!w?ql({folders:s,assets:a,sort:f,hasNextPage:i}):null,[m,w,s,a,f,i]),$=rs({folders:s,assets:a,mixedItems:j}),P=zl({hasNextPage:i,isFetchingMore:o,onLoadMore:d,options:Gl});return A?t.jsx(S,{justifyContent:"center",padding:8,children:t.jsx(Ce,{children:C({id:"app.loading",defaultMessage:"Loading..."})})}):u?t.jsx(U,{padding:8,children:t.jsx(T,{textColor:"danger600",children:C({id:l("list.assets.error"),defaultMessage:"An error occurred while fetching assets."})})}):s.length===0&&a.length===0?h&&!g?t.jsx(Wi,{onClearFilters:x}):t.jsx(Vi,{onAddAssets:M,canAddAssets:b,searchQuery:g,onClearSearch:k}):t.jsxs(t.Fragment,{children:[w?t.jsx(ji,{folders:s,assets:a,renderedKeys:$,onAssetItemClick:v}):t.jsx(Ei,{assets:a,folders:s,mixedItems:j,renderedKeys:$,onAssetItemClick:v}),t.jsx("div",{ref:P,style:{height:1}}),o&&t.jsx(S,{justifyContent:"center",padding:4,children:t.jsx(Ce,{children:C({id:l("list.assets.loading-more"),defaultMessage:"Loading more assets..."})})}),t.jsx(Pi,{assets:a,renderedKeys:$,locations:p})]})},Jl=({listQueryKey:e})=>{const{clear:s}=ye();return c.useEffect(()=>{s()},[e,s]),null},ed=y(dr)`
  display: flex;
  padding: ${({theme:e})=>e.spaces[1]};
  background: ${({theme:e})=>e.colors.neutral100};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
`,Qs=y(cr)`
  display: flex;
  flex: 1 1 50%;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spaces[2]};
  padding: 0.6rem ${({theme:e})=>e.spaces[3]};
  border: 1px solid transparent;
  border-radius: ${({theme:e})=>e.borderRadius};
  background: transparent;
  color: ${({theme:e})=>e.colors.neutral600};
  cursor: pointer;
  font-size: ${({theme:e})=>e.fontSizes[1]};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  white-space: nowrap;

  &:hover {
    color: ${({theme:e})=>e.colors.neutral700};
  }

  &[data-state='on'] {
    background: ${({theme:e})=>e.colors.neutral0};
    border-color: ${({theme:e})=>e.colors.neutral200};
    color: ${({theme:e})=>e.colors.primary600};
  }

  svg {
    width: 1.6rem;
    height: 1.6rem;
  }
`,td=y(U)`
  position: sticky;
  top: 0;
  z-index: 2;
  /* Transparent at rest (the grey page shows through); an opaque background +
     shadow appear only once it sticks and content scrolls under it. */
  background: transparent;
  /* Horizontal padding matches the list's default spacing (Layouts.Content /
     RESPONSIVE_DEFAULT_SPACING: 4 / 6 / 10) so the header lines up with the rows. */
  padding: ${({theme:e})=>`${e.spaces[6]} ${e.spaces[4]}`};
  transition:
    padding 0.2s ease,
    background 0.2s ease,
    box-shadow 0.2s ease;

  ${({theme:e})=>e.breakpoints.medium} {
    padding-left: ${({theme:e})=>e.spaces[6]};
    padding-right: ${({theme:e})=>e.spaces[6]};
  }
  ${({theme:e})=>e.breakpoints.large} {
    padding-left: ${({theme:e})=>e.spaces[10]};
    padding-right: ${({theme:e})=>e.spaces[10]};
  }

  /* Compacting is scoped to medium and up, where the header actually sticks. On
     mobile it scrolls away with the list, so shrinking it mid-scroll animated a
     header the user could no longer see — the transition read as a glitch on the
     way back up rather than as the header settling. */
  ${({$compact:e,theme:s})=>e&&xe`
      ${s.breakpoints.medium} {
        padding-top: ${s.spaces[3]};
        padding-bottom: ${s.spaces[3]};
        padding-left: ${s.spaces[4]};
        padding-right: ${s.spaces[4]};
        background: ${s.colors.neutral0};
        box-shadow: ${s.shadows.tableShadow};
      }
      ${s.breakpoints.large} {
        padding-left: ${s.spaces[6]};
        padding-right: ${s.spaces[6]};
      }
    `}
`,sd=y(S)`
  justify-content: space-between;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spaces[4]};

  h1 {
    font-size: 1.8rem;
  }
`,nd=y(S)`
  margin-top: ${({theme:e})=>e.spaces[5]};
  flex-direction: column;
  align-items: stretch;
  gap: ${({theme:e})=>e.spaces[3]};
  transition: margin-top 0.2s ease;

  /* Tightening the gap to the title belongs to the compact header, so it is
     scoped to the breakpoints that compact. On mobile the header never sticks,
     and this was the last thing still shifting as the page scrolled. */
  ${({$compact:e,theme:s})=>e&&xe`
      ${s.breakpoints.medium} {
        margin-top: ${s.spaces[2]};
      }
    `}

  ${({theme:e})=>e.breakpoints.large} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`,na=y(S)`
  align-items: center;
  gap: ${({theme:e})=>e.spaces[3]};
`,ad=y(na)``,rd=y(na)`
  justify-content: space-between;

  ${({theme:e})=>e.breakpoints.large} {
    justify-content: flex-end;
    flex: 0 0 auto;
  }
`,od=y(U)`
  flex: 1;

  ${({theme:e})=>e.breakpoints.large} {
    flex: 0 1 auto;
  }
`,Zs=y.span`
  display: none;

  ${({theme:e})=>e.breakpoints.large} {
    display: inline;
  }
`,id=()=>{const{formatMessage:e}=L(),{openDetails:s}=Dn(),{canCreate:n,canUpdate:a}=ce(),{currentFolderId:r,navigateToFolderId:o,navigateToRoot:i}=Ge(),{error:d}=es({id:r},{skip:r===null});c.useEffect(()=>{d?.name==="NotFoundError"&&i()},[d,i]);const{title:u,itemCount:p}=jn(r),{searchQuery:g,isSearching:f,clearSearch:m}=zn(),h=Hl(),x=sl(),v=c.useMemo(()=>il(x.filters,new Date),[x.serialized]),{assets:M,subscribers:b,pagination:k,isLoading:C,isFetchingMore:w,hasNextPage:A,fetchNextPage:j,error:$}=Ul({folder:r,search:g||void 0,sort:h.assetsSort,filters:v.fileClauses,enabled:v.showFiles}),{data:P=[],isLoading:E}=Fr({parentId:r,search:g||void 0,sort:h.foldersSort,filters:v.folderClauses},{skip:!v.showFolders}),Y=c.useMemo(()=>v.showFolders?P:[],[v.showFolders,P]),N=c.useMemo(()=>Rr(M,Y),[M,Y]),I=e(Ql,{count:p}),D=e({id:l("header.search-results"),defaultMessage:'Search results for "{query}"'},{query:g}),R=Y.length,W=k?.total??0,z=e(Zl(R,W),{numberFolders:R,numberAssets:W});let V;f?V=`${D} (${z})`:u?V=`${u} (${I})`:V=e({id:"app.loading",defaultMessage:"Loading..."});const[F,O]=c.useState(!1),[K,Z]=Xs(vi.view,Ue.GRID),ie=K===Ue.GRID,[ge,Ye]=c.useState(!1),Qe=c.useRef(null),Pe=c.useRef(null),[le,Be]=c.useState(!1),Ze=c.useCallback(ee=>Be(!ee),[]),B=sr(Ze,Yl),[G]=nr(),[q]=ar(),{data:ne}=Xt(),ae=ne?.data?.concurrentUploadRequests??1,he=xt(),{trackUsage:oe}=je(),Xe=async(ee,Ne)=>{if(ee.length===0)return;const oa=ee.reduce((Fe,ia)=>{const ms=ur(ia.type);return Fe[ms]=(Fe[ms]??0)+1,Fe},{});oe("willAddMediaLibraryAssets",{location:te,...oa});const wt=new FormData,fs=[];ee.forEach(Fe=>{wt.append("files",Fe),fs.push({name:Fe.name,caption:null,alternativeText:null,folder:Ne})}),wt.append("fileInfo",JSON.stringify(fs));try{await G({formData:wt,totalFiles:ee.length,concurrency:ae,generateAiMetadata:!!he}).unwrap()}catch{}},Je=()=>{Qe.current?.click()},bt=async ee=>{const Ne=ee.target.files;Ne&&Ne.length>0&&(oe("didSelectFile",{source:"computer",location:te}),await Xe(Array.from(Ne),r)),ee.target.value=""},jt=async ee=>{n&&(oe("didSelectFile",{source:"computer",location:te}),await Xe(ee,r))},aa=async ee=>{oe("didSelectFile",{source:"url",location:te}),oe("willAddMediaLibraryAssets",{location:te});try{await q({urls:ee,folderId:r,generateAiMetadata:!!he}).unwrap()}catch{}},ra=Vl({folderId:r,search:g,sort:`${h.assetsSort};folders=${h.foldersPosition}`,filter:x.serialized||null});return t.jsxs(t.Fragment,{children:[t.jsx(Ni,{onDrop:jt,disabled:!n,children:t.jsx(Lo,{disabled:!a,children:t.jsx(Po,{children:t.jsxs(si,{locations:N,children:[t.jsx(Jl,{listQueryKey:ra}),t.jsx(xs.Root,{sideNav:t.jsx(kl,{currentFolderId:r,showActiveFolder:!f,onSelectFolder:o}),children:t.jsx(un.Main,{children:t.jsxs(U,{ref:Pe,children:[t.jsx(ke,{children:t.jsx("input",{type:"file",ref:Qe,onChange:bt,multiple:!0})}),t.jsx(U,{ref:B,height:0,"aria-hidden":!0}),t.jsxs(td,{$compact:le,children:[t.jsxs(sd,{children:[t.jsx(T,{variant:"alpha",tag:"h1",children:V}),n&&t.jsxs(rr,{popoverPlacement:"bottom-end",variant:"default",endIcon:t.jsx(ft,{}),label:e({id:l("new"),defaultMessage:"New"}),children:[t.jsx(Ct,{onSelect:()=>O(!0),startIcon:t.jsx(ve,{}),children:e({id:l("folder.create.title"),defaultMessage:"New folder"})}),t.jsx(Ct,{onSelect:Je,startIcon:t.jsx(or,{}),children:e({id:l("import-files"),defaultMessage:"Import files"})}),t.jsx(Ct,{onSelect:()=>Ye(!0),startIcon:t.jsx(Ve,{}),children:e({id:l("import-from-url"),defaultMessage:"Import from URL"})})]})]}),t.jsxs(nd,{$compact:le,children:[t.jsxs(ad,{children:[t.jsx(U,{children:t.jsx(hl,{listFilters:x})}),t.jsx(od,{children:t.jsx(Ci,{})})]}),t.jsxs(rd,{children:[t.jsx(U,{children:t.jsx(El,{sort:h,showFoldersGroup:!ie})}),t.jsxs(ed,{type:"single",value:ie?"grid":"table",onValueChange:ee=>ee&&Z(ee==="grid"?Ue.GRID:Ue.TABLE),"aria-label":e({id:l("view.switch.label"),defaultMessage:"View options"}),children:[t.jsxs(Qs,{value:"table","aria-label":e({id:l("view.table"),defaultMessage:"Table view"}),children:[t.jsx(ir,{}),t.jsx(Zs,{children:e({id:l("view.table"),defaultMessage:"Table view"})})]}),t.jsxs(Qs,{value:"grid","aria-label":e({id:l("view.grid"),defaultMessage:"Grid view"}),children:[t.jsx(lr,{}),t.jsx(Zs,{children:e({id:l("view.grid"),defaultMessage:"Grid view"})})]})]})]})]}),t.jsx(jl,{listFilters:x,compact:le})]}),t.jsxs(xs.Content,{children:[t.jsx(wr,{}),b,t.jsxs(zi,{children:[t.jsx(Hi,{uploadDropZoneRef:Pe,folderName:u}),t.jsx(Xl,{view:K,folders:Y,isLoadingFolders:E,assets:M,isLoadingAssets:C,isFetchingMore:w,hasNextPage:A,fetchNextPage:j,error:$,locations:N,searchQuery:g,assetsSort:h.assetsSort,foldersPosition:h.foldersPosition,hasActiveFilters:x.filters.length>0,onClearFilters:x.clearFilters,onAssetItemClick:s,onAddAssets:Je,canAddAssets:n,onClearSearch:m})]})]})]})})})]})})})}),t.jsx(_n,{open:F,mode:"create",parentFolderName:u,parentFolderId:r,onClose:()=>O(!1)}),t.jsx(Al,{open:ge,onClose:()=>Ye(!1),onUpload:aa}),t.jsx($o,{})]})},gd=()=>{const{formatMessage:e}=L(),s=e({id:l("plugin.name"),defaultMessage:"Media Library"});return t.jsxs(t.Fragment,{children:[t.jsx(un.Title,{children:s}),t.jsx(gr,{children:t.jsx(hr,{index:!0,element:t.jsx(id,{})})})]})};export{gd as BetaMediaLibrary};
