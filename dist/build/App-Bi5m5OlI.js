import{hd as qe,df as nn,B as pr,dc as hr,b as fr,r as c,a as L,he as l,hf as rn,g4 as Me,hg as mr,f5 as xr,hh as yr,hi as br,hj as jr,hk as wr,hl as Mr,hm as it,u as Re,j as t,k as $e,y,g as I,v as me,fM as Cr,hn as fe,ci as vr,eT as Sr,ho as an,A as F,hp as Ir,hq as Dr,d as de,hr as _e,T as ne,H as Z,S as z,hs as $r,w as he,ht as De,bV as Te,dr as on,hu as kr,hv as Ar,hw as Er,E as Rr,hx as Tr,hy as Kt,cA as Xt,R as ln,b3 as dn,bD as Zt,b1 as cn,b2 as lt,bl as V,bT as gt,J as pt,cZ as Jt,fF as un,dT as gn,cB as P,cy as se,dZ as pn,hz as es,gi as Ce,n as Fr,M as Je,bU as Fe,dA as Lr,fV as xe,hA as Qe,dx as Or,dy as Pr,c as hn,hB as Nr,Y as Br,Q as _r,h as ts,e_ as Ur,f0 as zr,f2 as Kr,eZ as Hr,e$ as Vr,f1 as Wr,hC as qr,b4 as Gr,dh as Yr,F as ht,K as fn,hD as Qr,fL as Xr,gl as Zr,aa as Jr,fS as ft,I as mt,dQ as ke,cQ as Dt,hE as ea,bO as ta,hF as sa,an as mn,p as na,hG as ra,hH as aa,hI as oa,hJ as ia,hK as la,hL as da,hM as ca,L as Ms,P as xn,e2 as ua,hN as $t,gx as ga,gy as pa,hO as ha,hP as fa,fY as ma,W as xa,X as ya}from"./strapi-C8PilGjV.js";import{g as ba}from"./users-CHXWXr2I.js";import{m as ja,n as wa,D as Ma,q as Ca,l as va,P as Sa,u as yn,h as bn,f as jn}from"./core.esm-CHGmn4Nl.js";import{s as Ia}from"./modifiers.esm-BPPk2Exn.js";const Da=["image/png","image/jpeg","image/webp","image/heic","image/heif"],wn=e=>Da.includes(e),$a=20,Cs=$a*2,ka=qe.injectEndpoints({endpoints:e=>({getUploadSettings:e.query({query:()=>({url:"/upload/settings",method:"GET"})})})}),{useGetUploadSettingsQuery:ss}=ka,xt=e=>{const s=nn(),{data:n}=ss();return!s||!(n?.data?.aiMetadata??!1)?!1:e===void 0?!0:wn(e.mime)},{main:Rd,...Aa}=hr,ge=()=>{const{allowedActions:e,isLoading:s}=pr(Aa);return{isLoading:s,canCreate:!!e.canCreate,canUpdate:!!e.canUpdate,canDownload:!!e.canDownload,canCopyLink:!!e.canCopyLink}},Ea="v2",re="upload",ve=()=>{const{trackUsage:e}=fr(),{data:s}=ss(),n=nn();return{trackUsage:c.useCallback((a,o)=>e(a,{...o,...n?{isAiMediaLibraryConfigured:!!s?.data?.aiMetadata}:{},mediaLibraryVersion:Ea}),[e,n,s])}},ns=e=>encodeURIComponent(e).replace(/\+/g,"%2B"),Ra=e=>typeof e=="object"&&e!==null&&"data"in e,vs=e=>Ra(e)?e.data:e,Ta=qe.injectEndpoints({endpoints:e=>({getFolders:e.query({query:(s={})=>{const{parentId:n,sort:r,search:a,filters:o=[]}=s,i={sort:r??"name:ASC",populate:{parent:!0}};if(a)i._q=ns(a),o.length>0&&(i.filters={$and:[...o]});else{const d=n!=null?{parent:{id:n}}:{parent:{id:{$null:!0}}};i.filters={$and:[d,...o]}}return{url:"/upload/folders",method:"GET",config:{params:i}}},transformResponse:s=>vs(s),providesTags:s=>s?[...s.map(({id:n})=>({type:"Folder",id:n})),{type:"Folder",id:"LIST"}]:[{type:"Folder",id:"LIST"}]}),createFolder:e.mutation({query:s=>({url:"/upload/folders",method:"POST",data:s}),transformResponse:s=>s.data,invalidatesTags:[{type:"Folder",id:"LIST"},{type:"Folder",id:"STRUCTURE"}]}),updateFolder:e.mutation({query:({id:s,...n})=>({url:`/upload/folders/${s}`,method:"PUT",data:n}),transformResponse:s=>s.data,invalidatesTags:(s,n,{id:r})=>[{type:"Folder",id:r},{type:"Folder",id:"LIST"},{type:"Folder",id:"STRUCTURE"}]}),getFolderStructure:e.query({query:()=>({url:"/upload/folder-structure",method:"GET"}),transformResponse:s=>s?.data??s??[],providesTags:[{type:"Folder",id:"STRUCTURE"}]}),getAllFolders:e.query({query:()=>({url:"/upload/folders",method:"GET"}),transformResponse:s=>vs(s??[]),providesTags:s=>s?[...s.map(({id:n})=>({type:"Folder",id:n})),{type:"Folder",id:"LIST"}]:[{type:"Folder",id:"LIST"}]}),getFolder:e.query({query:({id:s})=>({url:`/upload/folders/${s}`,method:"GET",config:{params:{populate:{parent:{populate:{parent:"*"}},children:{count:!0},files:{count:!0}}}}}),transformResponse:s=>s.data,providesTags:(s,n,{id:r})=>[{type:"Folder",id:r},{type:"Folder",id:"LIST"}]}),bulkMove:e.mutation({query:({fileIds:s=[],folderIds:n=[],destinationFolderId:r})=>({url:"/upload/actions/bulk-move",method:"POST",data:{fileIds:s,folderIds:n,destinationFolderId:r}}),transformResponse:s=>s.data,invalidatesTags:[{type:"Asset",id:"LIST"},{type:"Folder",id:"LIST"},{type:"Folder",id:"STRUCTURE"}]})})}),{useCreateFolderMutation:Fa,useUpdateFolderMutation:La,useGetFoldersQuery:Oa,useGetFolderQuery:rs,useGetAllFoldersQuery:Pa,useGetFolderStructureQuery:as,useBulkMoveMutation:Mn}=Ta,Ge=e=>e==null?null:typeof e=="object"?e.id??null:typeof e=="number"?e:Number(e)||null,Cn={fileFolderId:()=>{},folderParentId:()=>{}},Na=(e,s)=>{const n=new Map,r=new Map;return e.forEach(a=>{n.set(a.id,Ge(a.folder))}),s.forEach(a=>{r.set(a.id,Ge(a.parent))}),{fileFolderId:a=>n.get(a),folderParentId:a=>r.get(a)}},dt=(e,s,n,r)=>{const a=s==="file"?e.fileFolderId(n):e.folderParentId(n);return a===void 0?r:a},Ba=e=>{if(!e||typeof e!="object")return;const{message:s}=e;return typeof s=="string"&&s.length>0?s:void 0},yt=()=>{const{formatMessage:e,messages:s}=L();return c.useCallback((n,r)=>{const a=Ba(n);if(!a)return r;const o=l(`apiError.${a}`);return s[o]?e({id:o}):a},[e,s])},_a=qe.injectEndpoints({endpoints:e=>({getAssets:e.query({query:(s={})=>{const{folder:n,search:r,filters:a=[],...o}=s,i={...o};if(r)i._q=ns(r),a.length>0&&(i.filters={$and:[...a]});else{const d=n!=null?{folder:{id:n}}:{folder:{id:{$null:!0}}};i.filters={$and:[d,...a]}}return{url:"/upload/files",method:"GET",config:{params:i}}},transformResponse:s=>s,providesTags:s=>s?[...s.results.map(({id:n})=>({type:"Asset",id:n})),{type:"Asset",id:"LIST"}]:[{type:"Asset",id:"LIST"}]}),getAsset:e.query({query:s=>({url:`/upload/files/${s}`,method:"GET"}),providesTags:(s,n,r)=>[{type:"Asset",id:r}]}),updateAsset:e.mutation({query:({id:s,fileInfo:n})=>{const r=new FormData;return r.append("fileInfo",JSON.stringify(n)),{url:`/upload/files/${s}`,method:"PUT",data:r}},invalidatesTags:(s,n,{id:r})=>[{type:"Asset",id:r},{type:"Asset",id:"LIST"},{type:"Folder",id:"LIST"}]}),replaceAsset:e.mutation({query:({id:s,file:n,fileInfo:r})=>{const a=new FormData;return a.append("files",n),r&&a.append("fileInfo",JSON.stringify(r)),{url:`/upload/files/${s}/replace`,method:"POST",data:a}},invalidatesTags:(s,n,{id:r})=>[{type:"Asset",id:r},{type:"Asset",id:"LIST"}]}),deleteAsset:e.mutation({query:s=>({url:`/upload/files/${s}`,method:"DELETE"}),invalidatesTags:(s,n,r)=>[{type:"Asset",id:r},{type:"Asset",id:"LIST"},{type:"Folder",id:"LIST"}]}),bulkDeleteItems:e.mutation({query:({fileIds:s,folderIds:n})=>({url:"/upload/actions/bulk-delete",method:"POST",data:{fileIds:s,folderIds:n}}),invalidatesTags:[{type:"Asset",id:"LIST"},{type:"Folder",id:"LIST"},{type:"Folder",id:"STRUCTURE"}]})})}),{useGetAssetsQuery:os,useGetAssetQuery:Ua,useUpdateAssetMutation:za,useReplaceAssetMutation:vn,useDeleteAssetMutation:Ka,useBulkDeleteItemsMutation:Ha}=_a,Sn=async(e,s)=>{const r=await(await fetch(e)).blob(),a=window.URL.createObjectURL(r),o=document.createElement("a");o.href=a,o.setAttribute("download",s),o.click(),window.URL.revokeObjectURL(a)},Va={pdf:Mr,csv:wr,xls:jr,zip:br},Xe=(e,s)=>{const n=rn(s);return e?.includes(Me.Image)?mr:e?.includes(Me.Video)?xr:e?.includes(Me.Audio)?yr:n?Va[n]||it:it},Wa={view:"STRAPI_UPLOAD_LIBRARY_VIEW"},We={GRID:0,TABLE:1},In="data-asset-details-trigger",Dn={[In]:""},$n="data-asset-item-control",ct={[$n]:""},qa=`[${$n}]`,Ga=`[${In}]`,Ss=[{name:"name",label:{id:l("list.table.header.name"),defaultMessage:"name"}},{name:"createdAt",label:{id:l("list.table.header.creationDate"),defaultMessage:"creation date"}},{name:"updatedAt",label:{id:l("list.table.header.lastModified"),defaultMessage:"last modified"}},{name:"size",label:{id:l("list.table.header.size"),defaultMessage:"size"}},{name:"actions",label:{id:l("list.table.header.actions"),defaultMessage:"actions"},isVisuallyHidden:!0}],kn=e=>{const{formatMessage:s}=L(),{data:n,isLoading:r}=rs({id:e},{skip:e===null}),{data:a,isLoading:o}=os({folder:null,pageSize:1},{skip:e!==null}),i=s({id:l("plugin.home"),defaultMessage:"Home"});return e===null?o?{title:i,itemCount:0}:{title:i,itemCount:a?.pagination?.total??0}:r||!n?{title:"",itemCount:0}:{title:n.name,itemCount:n.files?.count??0}},ot="assetId",An=e=>{const s=e?parseInt(e,10):NaN;return Number.isNaN(s)?null:s},Ya=()=>{const[{query:e}]=Re();return An(e?.[ot])!==null},Qa=y(I)`
  position: absolute;
  inset: 0;
  z-index: ${({$zIndex:e})=>e};
  align-items: center;
  justify-content: center;
  background: ${({theme:e})=>e.colors.neutral0};
  opacity: 0.7;
`,En=({children:e,zIndex:s=20,hideLabel:n=!1})=>t.jsx(Qa,{$zIndex:s,children:t.jsx($e,{small:n,children:e})}),Xa=1,Za=({anchorX:e,anchorY:s,point:n,aspectRatio:r})=>{let a=Math.abs(n.x-e),o=Math.abs(n.y-s);r&&(a/r>=o?o=a/r:a=o*r);const i=n.x<e?e-a:e,d=n.y<s?s-o:s;return{x:i,y:d,width:a,height:o}},Ja=()=>{const[e,s]=c.useState({width:0,height:0}),[n,r]=c.useState({x:0,y:0,width:0,height:0}),[a,o]=c.useState(null),i=c.useRef(null),d=c.useCallback(f=>{i.current=f;const m={width:f.naturalWidth,height:f.naturalHeight};s(m),r({x:0,y:0,width:m.width,height:m.height})},[]),u=(f,m,b)=>Math.min(b,Math.max(m,f)),p=c.useCallback(f=>{r(m=>{const b=e.width-m.x,j=e.height-m.y;let C=f.width!==void 0?u(f.width,1,b):m.width,k=f.height!==void 0?u(f.height,1,j):m.height;return a&&(f.width!==void 0?k=u(C/a,1,j):f.height!==void 0&&(C=u(k*a,1,b))),{...m,width:C,height:k}})},[e.width,e.height,a]),g=c.useCallback(f=>{r(m=>{const b=f.x!==void 0?u(f.x,0,e.width-m.width):m.x,j=f.y!==void 0?u(f.y,0,e.height-m.height):m.y;return{...m,x:b,y:j}})},[e.width,e.height]),h=c.useCallback(f=>{o(f),f&&r(m=>{const b=e.width-m.x,j=e.height-m.y;let C=m.width,k=C/f;return k>j&&(k=j,C=k*f),C>b&&(C=b,k=C/f),{...m,width:Math.round(C),height:Math.round(k)}})},[e.width,e.height]),x=c.useCallback((f,m,b)=>new Promise((j,C)=>{const k=i.current;if(!k){C(new Error("Image not ready: call init() before produceFile()."));return}const v=document.createElement("canvas");v.width=Math.max(1,Math.round(n.width)),v.height=Math.max(1,Math.round(n.height));const w=v.getContext("2d");if(!w){C(new Error("Could not get a 2D canvas context to crop the image."));return}w.drawImage(k,n.x,n.y,n.width,n.height,0,0,v.width,v.height),v.toBlob(A=>{if(!A){C(new Error("Could not export the cropped image to a blob."));return}j(new File([A],f,{type:m,lastModified:b?new Date(b).getTime():Date.now()}))},m,Xa)}),[n.x,n.y,n.width,n.height]);return{init:d,crop:n,naturalSize:e,aspectRatio:a,setCropSize:p,setCropPosition:g,setAspectRatio:h,produceFile:x,width:Math.round(n.width),height:Math.round(n.height)}},et=5.6,kt=12,eo=y(I)`
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
`,to=y(I)`
  width: 100%;
  gap: ${({theme:e})=>e.spaces[2]};
  padding: ${({theme:e})=>`${e.spaces[3]} ${e.spaces[5]}`};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
  background: ${({theme:e})=>e.colors.neutral0};
`,so=y(z)`
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
`,no=y.div`
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
`,ro=y.div`
  position: absolute;
  border: 1px dashed ${({theme:e})=>e.colors.primary600};
  box-shadow: 0 0 0 9999px rgba(33, 33, 52, 0.5);
  cursor: move;
  /* Without this, touch browsers claim the gesture for scrolling and fire
     pointercancel mid-drag — the crop drag dies while the finger is down. */
  touch-action: none;
`,tt=y.button`
  position: absolute;
  width: ${kt}px;
  height: ${kt}px;
  margin: -${kt/2}px;
  padding: 0;
  border: 1px solid ${({theme:e})=>e.colors.primary600};
  border-radius: 2px;
  background: ${({theme:e})=>e.colors.neutral0};
  cursor: ${({$cursor:e})=>e};
  touch-action: none;
`,ao=y.button`
  position: absolute;
  width: ${et}rem;
  height: ${et}rem;
  margin: ${-et/2}rem 0 0 ${-et/2}rem;
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
`,oo=y(z)`
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
`,io=y(I)`
  width: 100%;
  justify-content: space-between;
  padding: ${({theme:e})=>`${e.spaces[3]} ${e.spaces[5]}`};
  border-top: 1px solid ${({theme:e})=>e.colors.neutral150};
  background: ${({theme:e})=>e.colors.neutral0};
`,st=y(ne.Root)`
  flex-direction: row;
  align-items: center;
`,nt=y($r)`
  width: 8.4rem;
`,Is=y(ne.Label)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.6rem;
  height: 1.6rem;
`,lo=y(z)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);

  svg {
    display: block;
  }
`,co=()=>t.jsx(lo,{children:t.jsx("svg",{width:"17",height:"49",viewBox:"0 0 17 49",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M0.5 0.5H8.5C12.9183 0.5 16.5 4.08172 16.5 8.5M0.5 48.5H8.5C12.9183 48.5 16.5 44.9183 16.5 40.5",stroke:"#666687",strokeLinecap:"round"})})}),uo=({asset:e,isBusy:s=!1,onClose:n,onApply:r,onSaveAsCopy:a,canSaveAsCopy:o})=>{const{formatMessage:i}=L(),{toggleNotification:d}=me(),p=Cr().colorScheme==="dark",g=p?"neutral1000":"neutral0",h=p?"neutral600":"neutral200",x=c.useRef(null),f=c.useRef(null),m=c.useRef(null);c.useEffect(()=>{m.current?.focus()},[]);const{init:b,crop:j,naturalSize:C,aspectRatio:k,setCropSize:v,setCropPosition:w,setAspectRatio:A,produceFile:M,width:D,height:_}=Ja(),[R,X]=c.useState(!1),[N,S]=c.useState(e.focalPoint??{x:50,y:50}),$=fe(e.url),E=e.updatedAt&&!e.isUrlSigned?new Date(e.updatedAt).getTime():void 0,q=E!==void 0?`${$}${$.includes("?")?"&":"?"}updatedAt=${E}`:$,G=()=>{x.current&&b(x.current)},W=T=>{const Q=f.current?.getBoundingClientRect();if(!Q||!C.width||!C.height)return null;const H=C.width/Q.width,ie=C.height/Q.height;return{x:(T.clientX-Q.left)*H,y:(T.clientY-Q.top)*ie}},O=c.useRef(null);c.useEffect(()=>()=>{O.current?.()},[]);const B=(T,Q)=>{T.preventDefault(),T.stopPropagation();const{pointerId:H}=T;try{T.currentTarget.setPointerCapture(H)}catch{}const ie=ce=>{ce.pointerId===H&&Q(ce)},le=()=>{window.removeEventListener("pointermove",ie),window.removeEventListener("pointerup",we),window.removeEventListener("pointercancel",we),O.current=null},we=ce=>{ce.pointerId===H&&le()};O.current?.(),O.current=le,window.addEventListener("pointermove",ie),window.addEventListener("pointerup",we),window.addEventListener("pointercancel",we)},U=T=>{const Q=W(T);if(!Q)return;const H={...j};B(T,ie=>{const le=W(ie);le&&w({x:H.x+(le.x-Q.x),y:H.y+(le.y-Q.y)})})},J=T=>Q=>{const H={...j},ie=T==="tl"||T==="bl"?H.x+H.width:H.x,le=T==="tl"||T==="tr"?H.y+H.height:H.y;B(Q,we=>{const ce=W(we);if(!ce)return;const{x:vt,y:te,width:Se,height:St}=Za({anchorX:ie,anchorY:le,point:ce,aspectRatio:R?k:null});w({x:vt,y:te}),v({width:Se,height:St})})},K=()=>{X(T=>{const Q=!T;return A(Q&&_?D/_:null),Q})},Y=T=>{B(T,Q=>{const H=W(Q);if(!H)return;const ie=(H.x-j.x)/j.width*100,le=(H.y-j.y)/j.height*100;S({x:Math.round(Math.min(100,Math.max(0,ie))),y:Math.round(Math.min(100,Math.max(0,le)))})})},ee=Math.round(N.x/100*D),oe=Math.round(N.y/100*_),be=(T,Q)=>{const H=T==="x"?D:_;if(!H)return;const ie=Math.min(100,Math.max(0,Q/H*100));S(le=>({...le,[T]:Math.round(ie)}))},[ze,bt]=c.useState(0),[jt,wt]=c.useState(0),Mt=()=>bt(T=>T+1),Ct=()=>wt(T=>T+1),je=C.width&&C.height?{left:j.x/C.width*100,top:j.y/C.height*100,width:j.width/C.width*100,height:j.height/C.height*100}:null,Ke=je!==null,He=async T=>{if(!Ke)return;let Q;try{Q=await M(e.name,e.mime??"image/png",e.updatedAt)}catch{d({type:"danger",message:i({id:l("asset-details.crop.export-error"),defaultMessage:"Could not process the cropped image."})});return}const H={x:Math.round(N.x),y:Math.round(N.y)};T==="apply"?r(Q,H):a(Q,H)};return t.jsx(vr,{children:t.jsx(Sr,{onEscape:n,skipAutoFocus:!0,children:t.jsxs(eo,{ref:m,tabIndex:-1,children:[t.jsxs(to,{alignItems:"center",children:[t.jsx(an,{"aria-hidden":!0}),t.jsx(F,{variant:"omega",fontWeight:"bold",children:i({id:l("asset-details.crop.title"),defaultMessage:"Crop & Focus area"})})]}),t.jsxs(so,{children:[t.jsxs(no,{ref:f,$aspect:C.width&&C.height?C.width/C.height:void 0,children:[t.jsx("img",{ref:x,src:q,alt:e.name,crossOrigin:"anonymous",onLoad:G,draggable:!1}),je?t.jsxs(ro,{style:{left:`${je.left}%`,top:`${je.top}%`,width:`${je.width}%`,height:`${je.height}%`},onPointerDown:U,children:[t.jsx(tt,{type:"button","aria-label":i({id:l("asset-details.crop.resize.top-left"),defaultMessage:"Resize top-left"}),$cursor:"nwse-resize",style:{left:0,top:0},onPointerDown:J("tl")}),t.jsx(tt,{type:"button","aria-label":i({id:l("asset-details.crop.resize.top-right"),defaultMessage:"Resize top-right"}),$cursor:"nesw-resize",style:{right:0,top:0},onPointerDown:J("tr")}),t.jsx(tt,{type:"button","aria-label":i({id:l("asset-details.crop.resize.bottom-left"),defaultMessage:"Resize bottom-left"}),$cursor:"nesw-resize",style:{left:0,bottom:0},onPointerDown:J("bl")}),t.jsx(tt,{type:"button","aria-label":i({id:l("asset-details.crop.resize.bottom-right"),defaultMessage:"Resize bottom-right"}),$cursor:"nwse-resize",style:{right:0,bottom:0},onPointerDown:J("br")}),t.jsx(ao,{type:"button","aria-label":i({id:l("asset-details.crop.focal-point"),defaultMessage:"Focal point"}),style:{left:`${N.x}%`,top:`${N.y}%`},onPointerDown:Y})]}):null]}),t.jsxs(oo,{children:[t.jsxs(I,{direction:"column",alignItems:"stretch",gap:1,paddingBottom:3,children:[t.jsx(F,{variant:"omega",fontWeight:"bold",textColor:g,children:i({id:l("asset-details.crop.title"),defaultMessage:"Crop & Focus area"})}),t.jsx(F,{variant:"pi",textColor:h,children:i({id:l("asset-details.crop.hint"),defaultMessage:"Set the crop area with the rectangle. Pin the always-visible area with the circle."})})]}),t.jsxs(I,{gap:6,alignItems:"center",children:[t.jsxs(I,{alignItems:"center",gap:2,children:[t.jsxs(I,{direction:"column",gap:2,children:[t.jsxs(st,{name:"crop-width",gap:2,children:[t.jsx(Is,{textColor:g,children:t.jsx(Ir,{})}),t.jsx(nt,{"aria-label":i({id:l("asset-details.crop.width"),defaultMessage:"Width (px)"}),value:D,min:1,max:C.width||void 0,onValueChange:T=>{T!==void 0&&v({width:T})}})]}),t.jsxs(st,{name:"crop-height",gap:2,children:[t.jsx(Is,{textColor:g,children:t.jsx(Dr,{})}),t.jsx(nt,{"aria-label":i({id:l("asset-details.crop.height"),defaultMessage:"Height (px)"}),value:_,min:1,max:C.height||void 0,onValueChange:T=>{T!==void 0&&v({height:T})}})]})]}),t.jsxs(I,{position:"relative",children:[t.jsx(de,{label:i({id:l("asset-details.crop.aspect-lock"),defaultMessage:"Lock aspect ratio"}),variant:R?"secondary":"ghost",onClick:K,children:t.jsx(_e,{})}),t.jsx(co,{})]})]}),t.jsxs(I,{direction:"column",gap:2,marginLeft:"auto",children:[t.jsxs(st,{name:"focal-x",gap:2,children:[t.jsx(ne.Label,{textColor:g,children:i({id:l("asset-details.crop.focal-x-axis"),defaultMessage:"X"})}),t.jsx(nt,{"aria-label":i({id:l("asset-details.crop.focal-x"),defaultMessage:"Focal point X (px)"}),value:ee,min:0,max:D||void 0,onValueChange:T=>{T!==void 0&&be("x",T)},onBlur:Mt},`focal-x-${ze}`)]}),t.jsxs(st,{name:"focal-y",gap:2,children:[t.jsx(ne.Label,{textColor:g,children:i({id:l("asset-details.crop.focal-y-axis"),defaultMessage:"Y"})}),t.jsx(nt,{"aria-label":i({id:l("asset-details.crop.focal-y"),defaultMessage:"Focal point Y (px)"}),value:oe,min:0,max:_||void 0,onValueChange:T=>{T!==void 0&&be("y",T)},onBlur:Ct},`focal-y-${jt}`)]})]})]})]})]}),t.jsxs(io,{alignItems:"center",children:[t.jsx(Z,{variant:"tertiary",onClick:n,disabled:s,children:i({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),t.jsxs(I,{gap:2,children:[o&&t.jsx(Z,{variant:"secondary",onClick:()=>He("copy"),loading:s,disabled:!Ke,children:i({id:l("asset-details.crop.save-as-copy"),defaultMessage:"Save as copy"})}),t.jsx(Z,{variant:"default",onClick:()=>He("apply"),loading:s,disabled:!Ke,children:i({id:l("asset-details.crop.apply"),defaultMessage:"Apply"})})]})]})]})})})},Ve=y(z)`
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
`,rt=y(I)`
  justify-content: center;
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
`,go=y.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`,po=y(I)`
  position: absolute;
  top: ${({theme:e})=>e.spaces[3]};
  right: ${({theme:e})=>e.spaces[3]};
  z-index: 3;
`,ho=y.video`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`,fo=y.audio`
  width: 100%;
`,mo=y.iframe`
  width: 100%;
  height: 100%;
  min-height: 200px;
  border: none;
`,xo=y(I)`
  height: 100%;
  aspect-ratio: 1;
  width: auto;
  max-width: 100%;
  margin: 0 auto;
  color: ${({theme:e})=>e.colors.neutral500};
  background: ${({theme:e})=>e.colors.neutral150};
`,yo=y(I)`
  position: absolute;
  inset: 0;
  z-index: 1;
`,at=()=>{const{formatMessage:e}=L();return t.jsx(yo,{justifyContent:"center",alignItems:"center",children:t.jsx($e,{children:e({id:"app.loading",defaultMessage:"Loading..."})})})},bo=({asset:e,actions:s,isLoading:n=!1})=>{const{formatMessage:r}=L(),{alternativeText:a,ext:o,mime:i,url:d,updatedAt:u,isUrlSigned:p,isLocal:g}=e,h=u&&!p?new Date(u).getTime():void 0,x=v=>!v||h===void 0?v:v.includes("?")?`${v}&v=${h}`:`${v}?v=${h}`,f=x(fe(d)),[m,b]=c.useState(!1);c.useEffect(()=>{b(!1)},[f]);const j=c.useRef(null);if(c.useEffect(()=>{const v=j.current;if(!v)return;const w=()=>{const M=v.parentElement;if(!M)return;const D=M.getBoundingClientRect(),_=v.offsetWidth,R=v.offsetHeight;!_||!R||!D.width||D.height};w();const A=new ResizeObserver(w);return A.observe(v),v.parentElement&&A.observe(v.parentElement),()=>A.disconnect()},[m]),i?.includes(Me.Image)){const v=x(fe(d));if(v)return t.jsxs(Ve,{children:[(!m||n)&&t.jsx(at,{}),s?t.jsx(po,{children:s}):null,t.jsx(rt,{children:t.jsx(go,{ref:j,src:v,alt:a||e.name||"",crossOrigin:!g&&p?"anonymous":void 0,onLoad:()=>b(!0),onError:()=>b(!0)})})]})}if(i?.includes(Me.Video)&&f)return t.jsxs(Ve,{children:[!m&&t.jsx(at,{}),t.jsx(rt,{children:t.jsx(ho,{src:f,controls:!0,title:e.name,onLoadedData:()=>b(!0),onError:()=>b(!0),children:r({id:l("asset-details.videoNotSupported"),defaultMessage:"Your browser does not support the video tag."})})})]});if(i?.includes(Me.Audio)&&f)return t.jsxs(Ve,{children:[!m&&t.jsx(at,{}),t.jsx(rt,{children:t.jsx(I,{width:"100%",padding:4,justifyContent:"center",alignItems:"center",height:"100%",minHeight:"12rem",children:t.jsx(fo,{src:f,controls:!0,onLoadedData:()=>b(!0),onError:()=>b(!0)})})})]});if((o?.toLowerCase()==="pdf"||o?.toLowerCase()===".pdf"||i==="application/pdf")&&f)return t.jsxs(Ve,{children:[!m&&t.jsx(at,{}),t.jsx(rt,{children:t.jsx(mo,{src:`${f}#toolbar=0`,title:e.name,onLoad:()=>b(!0)})})]});const k=Xe(i,o);return t.jsx(Ve,{children:t.jsxs(xo,{justifyContent:"center",alignItems:"center",gap:1,direction:"column",hasRadius:!0,children:[t.jsx(k,{width:24,height:24}),t.jsx(F,{variant:"pi",children:r({id:l("asset-details.noPreview"),defaultMessage:"No preview available"})})]})})},Rn=c.createContext(null),Tn=()=>{const e=c.useContext(Rn);if(!e)throw new Error("useDrawerNotify must be used within AssetDetails");return e},Fn=c.createContext(null),Ln=()=>{const e=c.useContext(Fn);if(!e)throw new Error("useAssetOperation must be used within AssetDetails");return e},On=()=>{const[{query:e},s]=Re(),n=An(e?.[ot]),r=n!==null,[a,o]=c.useState(r),i=c.useRef(null);c.useEffect(()=>{r&&(i.current=n,o(!0))},[r,n]);const d=c.useCallback(g=>{g.target===g.currentTarget&&!r&&o(!1)},[r]),u=c.useCallback(g=>{s(he(e,{[ot]:String(g)}),"push",!0)},[e,s]),p=c.useCallback(()=>{s(he(e,{[ot]:void 0}),"push",!0)},[e,s]);return{assetId:r?n:i.current,isVisible:r,shouldRenderDrawer:a,onCloseAnimationEnd:d,openDetails:u,closeDetails:p}},jo=y(I)`
  flex: 0 0 calc(50% - ${({theme:e})=>e.spaces[2]});
`,Ie=({label:e,value:s})=>t.jsxs(jo,{direction:"column",justifyContent:"flex-start",alignItems:"flex-start",gap:1,children:[t.jsx(F,{variant:"sigma",textColor:"neutral600",fontWeight:"semiBold",textTransform:"uppercase",children:e}),t.jsx(F,{variant:"pi",textColor:"neutral700",children:s??"-"})]}),wo=y(z)`
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
`,Mo=y(z)`
  position: absolute;
  top: ${({theme:e})=>e.spaces[2]};
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  width: calc(100% - ${({theme:e})=>e.spaces[2]});
`,Co=e=>e.isDeleting?{id:l("asset-details.delete.loading"),defaultMessage:"Deleting the file…"}:e.isCropCopying?{id:l("asset-details.crop.loading"),defaultMessage:"Saving the cropped copy…"}:e.isReplacing?{id:l("asset-details.replace.loading"),defaultMessage:"Replacing the file…"}:null,vo=y(pt)`
  width: 1.6rem;
  height: 1.6rem;

  path {
    fill: ${({theme:e})=>e.colors.warning500};
  }
`,At=({name:e,label:s,required:n,disabled:r})=>{const{formatMessage:a}=L(),o=ln(e),i=Xt("DetailField",h=>h.isSubmitting),d=o.value??"",[u,p]=c.useState(d);c.useEffect(()=>{p(d)},[d]);const g=a({id:l("asset-details.field.empty"),defaultMessage:"{label} is currently empty."},{label:s});return t.jsxs(ne.Root,{name:e,required:n,children:[t.jsx(ne.Label,{children:s}),t.jsx(dn,{value:u,onChange:h=>{p(h.target.value),o.onChange(e,h.target.value)},endAction:u?void 0:t.jsx(Zt,{label:g,children:t.jsx(vo,{"aria-label":g,role:"img"})}),type:"text",disabled:i||r})]})},So=({label:e,rootLabel:s,folders:n,disabled:r})=>{const a=ln("folder"),o=Xt("LocationField",i=>i.isSubmitting);return t.jsxs(ne.Root,{name:"folder",required:!0,children:[t.jsx(ne.Label,{children:e}),t.jsxs(cn,{value:a.value==null?"":String(a.value),onChange:i=>{const d=i===""?null:Number(i);a.onChange("folder",d)},disabled:o||r,children:[t.jsx(lt,{value:"",children:s}),n.map(i=>t.jsx(lt,{value:String(i.id),children:i.name},i.id))]})]})},Io=()=>{const{formatMessage:e}=L(),{deleteAsset:s,isDeleting:n}=Ln(),[r,a]=c.useState(!1),o=async()=>{await s(),a(!1)},i=e({id:l("asset-details.delete.trigger"),defaultMessage:"Delete this file"});return t.jsxs(V.Root,{open:r,onOpenChange:a,children:[t.jsx(V.Trigger,{children:t.jsx(de,{label:i,variant:"danger-light",children:t.jsx(gt,{})})}),t.jsxs(V.Content,{children:[t.jsx(V.Header,{children:e({id:l("asset-details.delete.title"),defaultMessage:"Delete this media file?"})}),t.jsx(V.Body,{icon:t.jsx(pt,{width:"24px",height:"24px",fill:"danger600"}),textAlign:"center",children:e({id:l("asset-details.delete.description"),defaultMessage:"This file cannot be recovered once deleted. If it is currently in use, linked content will break and image containers will be empty."})}),t.jsxs(V.Footer,{children:[t.jsx(V.Cancel,{children:t.jsx(Z,{variant:"tertiary",disabled:n,fullWidth:!0,children:e({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})}),t.jsx(V.Action,{children:t.jsx(Z,{variant:"danger-light",loading:n,onClick:o,fullWidth:!0,children:e({id:"app.components.Button.confirm",defaultMessage:"Confirm"})})})]})]})]})},Do=({asset:e})=>{const{formatMessage:s}=L(),{copy:n}=Jt(),r=Tn(),a=async()=>{const o=fe(e.url);if(!o)return;const i=await n(o);r({type:i?"success":"danger",message:s(i?{id:l("asset-details.copy-link.success"),defaultMessage:"Link copied."}:{id:l("asset-details.copy-link.error"),defaultMessage:"Failed to copy the link."})})};return t.jsx(de,{label:s({id:l("asset-details.copy-link.trigger"),defaultMessage:"Copy link"}),variant:"tertiary",onClick:a,children:t.jsx(_e,{})})},$o=({asset:e})=>{const{formatMessage:s}=L(),n=Tn(),[r,a]=c.useState(!1),o=async()=>{const i=fe(e.url);if(i){a(!0);try{await Sn(i,e.name)}catch{n({type:"danger",message:s({id:l("asset-details.download.error"),defaultMessage:"Failed to download the file."})})}finally{a(!1)}}};return t.jsx(de,{label:s({id:l("asset-details.download.trigger"),defaultMessage:"Download"}),variant:"tertiary",onClick:o,disabled:r,children:t.jsx(un,{})})},ko=({mime:e})=>{const{formatMessage:s}=L(),{replaceAsset:n,isReplacing:r}=Ln(),a=c.useRef(null),[o,i]=c.useState(!1),d=xt({mime:e}),u=()=>{i(!0)},p=()=>{i(!1),a.current?.click()},g=async h=>{const x=h.target.files?.[0];h.target.value="",x&&await n(x)};return t.jsxs(t.Fragment,{children:[t.jsx(Te,{children:t.jsx("input",{ref:a,type:"file",accept:e??"",multiple:!1,onChange:g,"aria-hidden":!0,tabIndex:-1})}),t.jsx(de,{label:s({id:l("asset-details.replace.trigger"),defaultMessage:"Replace this file"}),variant:"tertiary",onClick:u,disabled:r,children:t.jsx(gn,{})}),t.jsx(V.Root,{open:o,onOpenChange:i,children:t.jsxs(V.Content,{children:[t.jsx(V.Header,{children:s({id:l("asset-details.replace.title"),defaultMessage:"Replace this media file?"})}),t.jsx(V.Body,{textAlign:"center",children:t.jsxs(I,{direction:"column",textAlign:"center",children:[t.jsx(F,{variant:"omega",children:s({id:l("asset-details.replace.description"),defaultMessage:"Current content will be permanently replaced."})}),d?t.jsx(F,{variant:"omega",children:s({id:l("asset-details.replace.description.ai"),defaultMessage:"AI will generate new metadata after upload."})}):null]})}),t.jsxs(V.Footer,{children:[t.jsx(V.Cancel,{children:t.jsx(Z,{variant:"tertiary",fullWidth:!0,children:s({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})}),t.jsx(V.Action,{children:t.jsx(Z,{variant:"secondary",onClick:p,fullWidth:!0,children:s({id:l("asset-details.replace.continue"),defaultMessage:"Continue"})})})]})]})})]})},Ao=({onCrop:e})=>{const{formatMessage:s}=L(),n=Xt("AssetImageActions",r=>r.isSubmitting);return t.jsx(I,{direction:"column",gap:2,children:t.jsx(de,{label:s({id:l("asset-details.crop.trigger"),defaultMessage:"Crop"}),variant:"tertiary",onClick:e,disabled:n||!e,children:t.jsx(an,{})})})},Eo=({asset:e,closeDetails:s})=>{const{formatMessage:n,formatDate:r}=L(),a=yt(),{canCreate:o,canUpdate:i,canDownload:d,canCopyLink:u}=ge(),{data:p=[]}=Pa(),{toggleNotification:g}=me(),[h]=za(),{trackUsage:x}=ve(),[f,{isLoading:m}]=vn(),[b,{isLoading:j}]=Ka(),[C,{isLoading:k}]=Er(),[v,w]=c.useState(!1),[A,M]=c.useState(null);c.useEffect(()=>{if(!A)return;const O=window.setTimeout(()=>M(null),5e3);return()=>window.clearTimeout(O)},[A]);const D=c.useCallback(O=>M(O),[]),_=e.mime?.includes(Me.Image),R={name:e.name??"",caption:e.caption??"",alternativeText:e.alternativeText??"",folder:typeof e.folder=="object"&&e.folder!==null?e.folder.id??null:e.folder??null},X=async O=>{const B={name:O.name,caption:O.caption,alternativeText:O.alternativeText,folder:O.folder},U=await h({id:e.id,fileInfo:B});if("error"in U){D({type:"danger",message:a(U.error,n({id:l("asset-details.update.error"),defaultMessage:"Failed to update the file."}))});return}x("didEditMediaLibraryElements",{location:re,type:e.mime?.split("/")[0],changeLocation:O.folder!==R.folder}),D({type:"success",message:n({id:l("asset-details.update.success"),defaultMessage:"File updated"})})},{title:N}=kn(typeof e.folder=="object"&&e.folder!==null?e.folder.id??null:e.folder??null),S=c.useCallback(async O=>{const B=await f({id:e.id,file:O,fileInfo:{name:e.name}});if("error"in B){D({type:"danger",message:a(B.error,n({id:l("asset-details.replace.error"),defaultMessage:"Failed to replace the file."}))});return}x("didReplaceMedia",{location:re}),D({type:"success",message:n({id:l("asset-details.replace.success"),defaultMessage:"File replaced."})})},[e.id,e.name,n,a,D,f,x]),$=c.useCallback(async()=>{const O=await b(e.id);if("error"in O){D({type:"danger",message:a(O.error,n({id:l("asset-details.delete.error"),defaultMessage:"Failed to delete the asset."}))});return}g({type:"success",message:n({id:l("asset-details.delete.success"),defaultMessage:"1 element have been deleted from {folderName}"},{folderName:N})}),s()},[e.id,s,b,N,n,a,D,g]),E=O=>{D({type:"danger",message:a(O,n({id:l("asset-details.crop.error"),defaultMessage:"Failed to crop the file."}))})},q=async(O,B)=>{w(!1);const U=await f({id:e.id,file:O,fileInfo:{focalPoint:B}});if("error"in U){E(U.error);return}x("didCropFile",{location:re,duplicatedFile:!1}),D({type:"success",message:n({id:l("asset-details.crop.success"),defaultMessage:"File cropped."})})},G=async(O,B)=>{w(!1);const U=await C({file:O,fileInfo:{name:e.name,caption:e.caption??"",alternativeText:e.alternativeText??"",folder:R.folder,focalPoint:B}});if("error"in U){E(U.error);return}x("didCropFile",{location:re,duplicatedFile:!0}),D({type:"success",message:n({id:l("asset-details.crop.copy-success"),defaultMessage:"Copy created."})})},W=c.useMemo(()=>({replaceAsset:S,deleteAsset:$,isReplacing:m,isDeleting:j}),[S,$,m,j]);return t.jsx(Rn.Provider,{value:D,children:t.jsx(Fn.Provider,{value:W,children:t.jsx(wo,{children:t.jsx(Rr,{method:"POST",initialValues:R,onSubmit:X,children:({modified:O,isSubmitting:B,values:U,resetForm:J})=>{const K=(U.name??"").trim()==="",Y=Co({isDeleting:j,isReplacing:m,isCropCopying:k});return t.jsxs(t.Fragment,{children:[t.jsx(Tr,{onProceed:J}),v&&_?t.jsx(uo,{asset:e,onClose:()=>w(!1),onApply:q,onSaveAsCopy:G,canSaveAsCopy:o}):null,Y?t.jsx(En,{children:n(Y)}):null,A?t.jsx(Mo,{children:t.jsx(on,{variant:A.type==="success"?"success":"danger",closeLabel:n({id:"global.close",defaultMessage:"Close"}),onClose:()=>M(null),children:A.message})}):null,t.jsxs(De.ScrollableContent,{children:[t.jsx(bo,{asset:e,actions:_&&i?t.jsx(Ao,{onCrop:()=>w(!0)}):null}),t.jsxs(I,{direction:"column",alignItems:"stretch",gap:4,paddingTop:4,paddingBottom:4,paddingLeft:5,paddingRight:5,children:[t.jsx(F,{variant:"beta",fontWeight:"semiBold",tag:"h3",children:n({id:l("asset-details.fileInfo"),defaultMessage:"File info"})}),t.jsxs(I,{wrap:"wrap",gap:4,background:"neutral100",paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:6,alignItems:"flex-start",children:[t.jsx(Ie,{label:n({id:l("asset-details.creationDate"),defaultMessage:"Creation date"}),value:e.createdAt?r(new Date(e.createdAt),{dateStyle:"long",timeStyle:"short"}):null}),t.jsx(Ie,{label:n({id:l("asset-details.lastUpdated"),defaultMessage:"Last updated"}),value:e.updatedAt?r(new Date(e.updatedAt),{dateStyle:"long",timeStyle:"short"}):null}),t.jsx(Ie,{label:n({id:l("asset-details.createdBy"),defaultMessage:"Created by"}),value:e.createdBy?ba({firstname:e.createdBy.firstname??void 0,lastname:e.createdBy.lastname??void 0,username:e.createdBy.username??void 0,email:e.createdBy.email??void 0})??"-":null}),t.jsx(Ie,{label:n({id:l("asset-details.size"),defaultMessage:"Size"}),value:e.size?Kt(e.size,1):null}),_&&(e.width!=null||e.height!=null)&&t.jsx(Ie,{label:n({id:l("asset-details.dimensions"),defaultMessage:"Dimensions"}),value:e.width!=null&&e.height!=null?`${e.width} × ${e.height}`:null}),t.jsx(Ie,{label:n({id:l("asset-details.extension"),defaultMessage:"Extension"}),value:rn(e.ext)}),t.jsx(Ie,{label:n({id:l("asset-details.assetId"),defaultMessage:"Asset ID"}),value:String(e.id)})]}),t.jsx(At,{name:"name",label:n({id:l("asset-details.fileName"),defaultMessage:"File name"}),required:!0,disabled:!i}),t.jsx(So,{label:n({id:l("asset-details.location"),defaultMessage:"Location"}),rootLabel:n({id:l("plugin.home"),defaultMessage:"Home"}),folders:p,disabled:!i}),t.jsx(At,{name:"caption",label:n({id:l("asset-details.caption"),defaultMessage:"Caption"}),disabled:!i}),t.jsx(At,{name:"alternativeText",label:n({id:l("asset-details.alternativeText"),defaultMessage:"Alternative text"}),disabled:!i})]})]}),(i||u||d)&&t.jsxs(I,{justifyContent:"space-between",alignItems:"center",gap:2,padding:3,borderColor:"neutral150",borderStyle:"solid",borderWidth:"1px 0 0 0",background:"neutral0",children:[t.jsxs(I,{gap:2,children:[i&&t.jsx(Io,{}),u&&t.jsx(Do,{asset:e}),d&&t.jsx($o,{asset:e}),i&&t.jsx(ko,{mime:e.mime})]}),i&&t.jsx(Z,{type:"submit",variant:"default",loading:B,disabled:!O||B||K,children:n({id:l("asset-details.save"),defaultMessage:"Save changes"})})]})]})}},e.id)})})})},Ro=y(I)`
  flex-shrink: 0;
`,To=y(F)`
  min-width: 0;
`,Fo=({asset:e,closeDetails:s})=>{const n=e?Xe(e.mime,e.ext):kr;return t.jsxs(I,{gap:2,paddingLeft:5,paddingTop:3,paddingBottom:3,paddingRight:3,borderColor:"neutral150",borderStyle:"solid",borderWidth:"0 0 1px 0",children:[t.jsx(Ro,{children:t.jsx(n,{width:20,height:20})}),t.jsx(De.Title,{asChild:!0,children:t.jsx(To,{variant:"omega",fontWeight:"semiBold",overflow:"hidden",ellipsis:!0,tag:"h2",children:e.name})}),t.jsx(z,{marginLeft:"auto",children:t.jsx(De.CloseButton,{onClose:s,children:t.jsx(Ar,{})})})]})},Lo=({assetId:e,closeDetails:s})=>{const{formatMessage:n}=L(),{data:r,isLoading:a,error:o}=Ua(e,{refetchOnMountOrArgChange:!1,refetchOnReconnect:!1,refetchOnFocus:!1});return a?t.jsx(I,{justifyContent:"center",padding:8,children:t.jsx($e,{children:n({id:"app.loading",defaultMessage:"Loading..."})})}):o||!r?t.jsx(I,{direction:"column",alignItems:"stretch",gap:4,padding:4,children:t.jsx(on,{variant:"danger",closeLabel:n({id:"global.close",defaultMessage:"Close"}),onClose:s,children:n({id:l("asset-details.error"),defaultMessage:"Failed to load file details."})})}):t.jsxs(t.Fragment,{children:[t.jsx(Fo,{asset:r,closeDetails:s}),t.jsx(Eo,{asset:r,closeDetails:s})]})},Oo=(e,s)=>!s||e.detail.originalEvent.button!==0?!0:e.target instanceof Element?e.target.closest(Ga)!==null&&e.target.closest(qa)===null:!1,Po=()=>{const{formatMessage:e}=L(),{assetId:s,isVisible:n,shouldRenderDrawer:r,onCloseAnimationEnd:a,closeDetails:o}=On();return!r||s===null?null:t.jsxs(De.Root,{isVisible:n,onClose:o,children:[t.jsx("div",{children:t.jsxs(Te,{children:[t.jsx(De.Title,{children:e({id:l("asset-details.title"),defaultMessage:"File details"})}),t.jsx(De.Description,{children:e({id:l("asset-details.description"),defaultMessage:"Displays file information and metadata"})})]})}),t.jsx(De.Body,{animationDirection:"left",width:"41.6rem",height:"100dvh",onAnimationEnd:a,onPointerDownOutside:i=>{Oo(i,n)&&i.preventDefault()},children:t.jsx(Lo,{assetId:s,closeDetails:o})})]})},ae=e=>e.currentTarget instanceof Node&&e.target instanceof Node&&e.currentTarget.contains(e.target),Ae=e=>`asset:${e}`,Ee=e=>`folder:${e}`,Ds=(e,s)=>{const n=new Set;return e.forEach(r=>{const[a,o]=r.split(":");a===s&&n.add(Number(o))}),n},Pn=()=>({selectedKeys:new Set,anchorKey:null}),No=(e,s)=>{const n=new Set(e.selectedKeys);return n.has(s)?n.delete(s):n.add(s),{selectedKeys:n,anchorKey:s}},Bo=(e,s)=>{const n=new Set(e.selectedKeys);return n.delete(s),{selectedKeys:n,anchorKey:e.anchorKey===s?null:e.anchorKey}},_o=(e,s,n)=>{const r=s.indexOf(n);if(r===-1)return e;const a=e.anchorKey===null?-1:s.indexOf(e.anchorKey);if(a===-1)return{selectedKeys:new Set([n]),anchorKey:n};const o=Math.min(a,r),i=Math.max(a,r);return{selectedKeys:new Set(s.slice(o,i+1)),anchorKey:e.anchorKey}},Uo=e=>({selectedKeys:new Set(e),anchorKey:e.length>0?e[e.length-1]:null}),zo=()=>Pn(),Ko=(e,s)=>{if(s.length===0)return{allSelected:!1,isIndeterminate:!1};const n=s.reduce((a,o)=>e.has(o)?a+1:a,0),r=n===s.length;return{allSelected:r,isIndeterminate:n>0&&!r}},is=c.createContext(null),Ho=({children:e,disabled:s=!1})=>{const[n,r]=c.useState(Pn),a=c.useCallback(f=>!s&&n.selectedKeys.has(f),[s,n.selectedKeys]),o=c.useCallback(f=>{s||r(m=>No(m,f))},[s]),i=c.useCallback((f,m)=>{s||r(b=>_o(b,f,m))},[s]),d=c.useCallback(f=>{s||r(Uo(f))},[s]),u=c.useCallback(f=>r(m=>Bo(m,f)),[]),p=c.useCallback(()=>r(zo()),[]),g=c.useMemo(()=>Ds(n.selectedKeys,"asset"),[n.selectedKeys]),h=c.useMemo(()=>Ds(n.selectedKeys,"folder"),[n.selectedKeys]),x=c.useMemo(()=>({selectedKeys:n.selectedKeys,selectedIds:g,selectedFolderIds:h,anchorKey:n.anchorKey,isSelected:a,toggle:o,selectRange:i,selectAll:d,deselect:u,clear:p}),[n.selectedKeys,g,h,n.anchorKey,a,o,i,d,u,p]);return c.createElement(is.Provider,{value:x},e)},ye=()=>{const e=c.useContext(is);if(!e)throw new Error("useAssetSelection must be used within an AssetSelectionProvider");return e},Vo=()=>c.useContext(is),Nn=c.createContext(null),Wo=({children:e})=>{const[s,n]=c.useState({}),r=c.useCallback((d,u)=>(n(p=>({...p,[d]:u})),()=>n(p=>{const{[d]:g,...h}=p;return h})),[]),a=c.useCallback(d=>s[d]!==void 0,[s]),o=c.useCallback(d=>s[d]??null,[s]),i=c.useMemo(()=>({isBusy:a,getBusyMessage:o,markBusy:r}),[a,o,r]);return c.createElement(Nn.Provider,{value:i},e)},ls=()=>c.useContext(Nn),qo=e=>{if(!e)return null;const s=Number(e);return Number.isFinite(s)?s:null},Ze=()=>{const[{query:e},s]=Re(),n=qo(e?.folder),r=c.useCallback(d=>{s({folder:String(d.id),_q:void 0})},[s]),a=c.useCallback(()=>{s({folder:"",_q:""},"remove")},[s]),o=c.useCallback(()=>{s(he(e,{folder:void 0}))},[e,s]);c.useEffect(()=>{e?.folder&&n===null&&o()},[e?.folder,n,o]);const i=c.useCallback(d=>{d==null?a():s({folder:String(d),_q:void 0})},[a,s]);return{currentFolderId:n,navigateToFolder:r,navigateToRoot:a,navigateToFolderId:i}},ds=({folders:e,assets:s,mixedItems:n})=>n?n.map(r=>r.kind==="folder"?Ee(r.folder.id):Ae(r.asset.id)):[...e.map(r=>Ee(r.id)),...s.map(r=>Ae(r.id))],cs=y(P.Content).attrs({maxHeight:"min(var(--radix-popper-available-height, 100vh), 100vh)"})`
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
`,Bn=(e,s)=>{for(const n of e){if(n.id===s)return n;const r=Bn(n.children,s);if(r)return r}return null},Go=e=>{const s=new Set,n=r=>{for(const a of r.children)a.id!=null&&s.add(a.id),n(a)};return n(e),s},Yo=(e,s,n)=>{if(s===n)return!0;const r=Bn(e,s);return r?Go(r).has(n):!1},Qo=e=>e.kind==="file"?e.folderId==null:e.parentId==null,Be=({items:e,targetFolderId:s,folderStructure:n})=>{if(e.length===0)return!1;if(s===null)return e.some(a=>!Qo(a));const r=new Set(e.filter(a=>a.kind==="folder").map(a=>a.id));if(r.has(s))return!1;for(const a of r)if(Yo(n,a,s))return!1;for(const a of e)if(a.kind==="file"&&a.folderId===s||a.kind==="folder"&&a.parentId===s)return!1;return!0},us=(e,s=new Set,n="")=>e.flatMap(r=>{if(r.id==null||s.has(r.id))return[];const a=n?`${n} / ${r.name??""}`:r.name??"";return[{id:r.id,label:a},...us(r.children??[],s,a)]}),_n=({formatMessage:e,count:s,source:n,destination:r})=>n===null?e({id:l("list.bulk-actions.move.success-multiple-sources"),defaultMessage:"{count, plural, =1 {# element has} other {# elements have}} been moved to {destination}"},{count:s,destination:r}):e({id:l("list.bulk-actions.move.success"),defaultMessage:"{count, plural, =1 {# element has} other {# elements have}} been moved from {source} to {destination}"},{count:s,source:n,destination:r}),Ye=e=>e.kind==="folder"?e.parentId:e.folderId,Xo=e=>Un(e)?Ye(e[0]):null,Un=e=>{if(e.length===0)return!1;const s=Ye(e[0]);return e.every(n=>Ye(n)===s)},Zo=y(se.Content)`
  max-width: 51.6rem;
`,gs=({open:e,onClose:s,items:n,onSuccess:r})=>{const{formatMessage:a}=L(),o=yt(),{toggleNotification:i}=me(),{data:d=[],isUninitialized:u,isLoading:p,isError:g}=as(void 0,{skip:!e}),[h,{isLoading:x}]=Mn(),f=c.useMemo(()=>n.filter($=>$.kind==="file").map($=>$.id),[n]),m=c.useMemo(()=>n.filter($=>$.kind==="folder").map($=>$.id),[n]),b=Un(n),j=Xo(n),{data:C}=rs({id:j},{skip:j===null}),[k,v]=c.useState(""),w=a({id:l("plugin.name"),defaultMessage:"Media Library"}),A=c.useMemo(()=>us(d,new Set(m)).filter($=>Be({items:n,targetFolderId:$.id,folderStructure:d})),[d,m,n]),M=c.useMemo(()=>Be({items:n,targetFolderId:null,folderStructure:d}),[n,d]),D=M?"":A[0]?.id.toString()??"";c.useEffect(()=>{v(D)},[e,D]);const _=!u&&!p&&!g,R=_&&A.length===0&&!M,X=n.length,N=async()=>{if(x||!_)return;const $=k===""?null:Number(k);try{await h({fileIds:f,folderIds:m,destinationFolderId:$}).unwrap()}catch(G){i({type:"danger",message:o(G,a({id:l("list.bulk-actions.move.error"),defaultMessage:"An error occurred while moving the items."}))});return}const E=b?j===null?w:C?.name??w:null,q=$===null?w:A.find(G=>G.id===$)?.label??w;i({type:"success",message:_n({formatMessage:a,count:X,source:E,destination:q})}),r?.(),s()},S=()=>g?t.jsx(F,{textColor:"danger600",children:a({id:l("list.bulk-actions.move.load-error"),defaultMessage:"Couldn't load the folder list. Please try again."})}):R?t.jsx(F,{textColor:"neutral600",children:a({id:l("list.bulk-actions.move.no-destination"),defaultMessage:"There is no other folder to move this to."})}):t.jsxs(ne.Root,{name:"destination",children:[t.jsx(ne.Label,{children:a({id:l("list.bulk-actions.move.location"),defaultMessage:"Location"})}),t.jsxs(cn,{value:k,onChange:$=>v(String($)),disabled:x||!_,children:[M&&t.jsx(lt,{value:"",children:w}),A.map($=>t.jsx(lt,{value:String($.id),children:$.label},$.id))]})]});return t.jsx(se.Root,{open:e,onOpenChange:$=>{!$&&!x&&s()},children:t.jsxs(Zo,{children:[t.jsx(se.Header,{children:t.jsx(se.Title,{children:a({id:l("list.bulk-actions.move.title"),defaultMessage:"Move elements to"})})}),t.jsx(se.Body,{children:S()}),t.jsx(se.Footer,{children:t.jsxs(I,{gap:2,justifyContent:"space-between",width:"100%",children:[t.jsx(Z,{variant:"tertiary",onClick:s,disabled:x,type:"button",children:a({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),t.jsx(Z,{onClick:N,loading:x,disabled:!_||R,children:a({id:l("list.bulk-actions.move.submit"),defaultMessage:"Move"})})]})})]})})},ps=({open:e,onClose:s,target:n,onSuccess:r,onPendingChange:a})=>{const{formatMessage:o}=L(),{toggleNotification:i}=me(),[d,{isLoading:u}]=Ha(),p=n.fileIds.length+n.folderIds.length;c.useEffect(()=>{a?.(u)},[u,a]);const g=async h=>{if(h.preventDefault(),u)return;if("error"in await d(n)){i({type:"danger",message:o({id:l("list.bulk-actions.delete.error"),defaultMessage:"An error occurred while deleting the items."})});return}s(),i({type:"success",message:o({id:l("list.bulk-actions.delete.success"),defaultMessage:"{count, plural, =1 {# item has been deleted} other {# items have been deleted}}"},{count:p})}),r?.()};return t.jsx(V.Root,{open:e,onOpenChange:h=>{!h&&!u&&s()},children:t.jsxs(V.Content,{children:[t.jsx(V.Header,{children:o({id:l("list.bulk-actions.delete.confirm.title"),defaultMessage:"Delete {count, plural, =1 {# item} other {# items}}?"},{count:p})}),t.jsx(V.Body,{icon:t.jsx(pt,{width:"24px",height:"24px",fill:"danger600"}),textAlign:"center",children:t.jsx(F,{children:o({id:l("list.bulk-actions.delete.confirm.description.are-you-sure"),defaultMessage:"These items cannot be recovered once deleted, and deleting a folder also deletes everything inside it. If they are currently in use, linked content will break and image containers will be empty."})})}),t.jsxs(V.Footer,{children:[t.jsx(V.Cancel,{children:t.jsx(Z,{variant:"tertiary",disabled:u,fullWidth:!0,children:o({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})}),t.jsx(V.Action,{children:t.jsx(Z,{variant:"danger-light",loading:u,onClick:g,fullWidth:!0,children:o({id:"app.components.Button.confirm",defaultMessage:"Confirm"})})})]})]})})},zn=({asset:e,dragData:s})=>{const{formatMessage:n}=L(),r=yt(),{copy:a}=Jt(),{toggleNotification:o}=me(),{deselect:i}=ye(),d=ls()?.markBusy??(()=>()=>{}),{canUpdate:u,canDownload:p,canCopyLink:g,isLoading:h}=ge(),[x,{isLoading:f}]=vn(),m=xt({mime:e.mime}),b=c.useRef(null),[j,C]=c.useState(!1),[k,v]=c.useState(!1),[w,A]=c.useState(!1),[M,D]=c.useState(!1),_=c.useMemo(()=>[s],[s]),R=()=>{C(!1),b.current?.click()},X=async G=>{const W=G.target.files?.[0];if(G.target.value="",!W)return;const O=d(e.id,n({id:l("asset-details.replace.loading"),defaultMessage:"Replacing the file…"}));let B;try{B=await x({id:e.id,file:W,fileInfo:{name:e.name}})}finally{O()}if("error"in B){o({type:"danger",message:r(B.error,n({id:l("asset-details.replace.error"),defaultMessage:"Failed to replace the file."}))});return}o({type:"success",message:n({id:l("asset-details.replace.success"),defaultMessage:"File replaced."})})},N=async()=>{const G=fe(e.url);if(!G)return;const W=await a(G);o({type:W?"success":"danger",message:n(W?{id:l("asset-details.copy-link.success"),defaultMessage:"Link copied."}:{id:l("asset-details.copy-link.error"),defaultMessage:"Failed to copy the link."})})},S=async()=>{const G=fe(e.url);if(G){D(!0);try{await Sn(G,e.name)}catch{o({type:"danger",message:n({id:l("asset-details.download.error"),defaultMessage:"Failed to download the file."})})}finally{D(!1)}}},$=u||g||p,E=u,q=(g||p)&&E;return!h&&!$&&!E?null:t.jsxs(t.Fragment,{children:[t.jsx(Te,{children:t.jsx("input",{ref:b,type:"file",accept:e.mime??"",multiple:!1,onChange:X,"aria-hidden":!0,tabIndex:-1})}),t.jsxs(P.Root,{modal:!1,children:[t.jsx(P.Trigger,{tag:de,icon:t.jsx(pn,{}),variant:"ghost",label:n({id:l("control-card.more-actions"),defaultMessage:"More actions"})}),t.jsxs(cs,{popoverPlacement:"bottom-end",zIndex:2,minWidth:"22rem",children:[u&&t.jsx(P.Item,{startIcon:t.jsx(gn,{}),disabled:f,onSelect:()=>C(!0),children:n({id:l("list.assets.actions.replace"),defaultMessage:"Replace media"})}),g&&t.jsx(P.Item,{startIcon:t.jsx(_e,{}),onSelect:N,children:n({id:l("list.assets.actions.copy-link"),defaultMessage:"Copy link to media"})}),p&&t.jsx(P.Item,{startIcon:t.jsx(un,{}),disabled:M,onSelect:S,children:n({id:l("list.assets.actions.download"),defaultMessage:"Download media"})}),q&&t.jsx(P.Separator,{}),u&&t.jsxs(t.Fragment,{children:[t.jsx(P.Item,{startIcon:t.jsx(es,{}),onSelect:()=>v(!0),children:n({id:l("list.assets.actions.move"),defaultMessage:"Move to folder"})}),t.jsx(P.Item,{startIcon:t.jsx(gt,{}),variant:"danger",onSelect:()=>A(!0),children:n({id:l("list.assets.actions.delete"),defaultMessage:"Delete"})})]})]})]}),t.jsx(V.Root,{open:j,onOpenChange:C,children:t.jsxs(V.Content,{children:[t.jsx(V.Header,{children:n({id:l("asset-details.replace.title"),defaultMessage:"Replace this media file?"})}),t.jsx(V.Body,{textAlign:"center",children:t.jsxs(I,{direction:"column",textAlign:"center",children:[t.jsx(F,{variant:"omega",children:n({id:l("asset-details.replace.description"),defaultMessage:"Current content will be permanently replaced."})}),m?t.jsx(F,{variant:"omega",children:n({id:l("asset-details.replace.description.ai"),defaultMessage:"AI will generate new metadata after upload."})}):null]})}),t.jsxs(V.Footer,{children:[t.jsx(V.Cancel,{children:t.jsx(Z,{variant:"tertiary",fullWidth:!0,children:n({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})}),t.jsx(V.Action,{children:t.jsx(Z,{variant:"secondary",onClick:R,fullWidth:!0,children:n({id:l("asset-details.replace.continue"),defaultMessage:"Continue"})})})]})]})}),k&&t.jsx(gs,{open:!0,onClose:()=>v(!1),items:_,onSuccess:()=>i(Ae(e.id))}),w&&t.jsx(ps,{open:!0,onClose:()=>A(!1),target:{fileIds:[e.id],folderIds:[]},onSuccess:()=>i(Ae(e.id))})]})},Jo=e=>{const s=[],n=[];for(const r of e)r.kind==="file"?s.push(r.id):n.push(r.id);return{fileIds:s,folderIds:n}},$s=(e,s,n)=>{if(s===null)return n;const r=a=>{for(const o of a){if(o.id===s)return o;const i=r(o.children??[]);if(i)return i}return null};return r(e)?.name??n},ks=(e,s,n,r)=>{const a=e.kind==="file"?Ae(e.id):Ee(e.id),o=Ye(e);if(!s||!s.has(a))return{items:[e],fromSelection:!1,activeSourceFolderId:o,spansMultipleSources:!1};const i=[];return s.forEach(d=>{const u=d.indexOf(":"),p=d.slice(0,u),g=Number(d.slice(u+1));if(p==="asset"){if(e.kind==="file"&&e.id===g){i.push(e);return}i.push({kind:"file",id:g,name:"",folderId:dt(n,"file",g,r)});return}if(e.kind==="folder"&&e.id===g){i.push(e);return}i.push({kind:"folder",id:g,name:"",parentId:dt(n,"folder",g,r)})}),{items:i,fromSelection:!0,activeSourceFolderId:o,spansMultipleSources:i.some(d=>Ye(d)!==o)}},ei=(e,s)=>{const n=new Set;if(e.length===0)return n;Be({items:e,targetFolderId:null,folderStructure:s})&&n.add(null);for(const{id:r}of us(s))Be({items:e,targetFolderId:r,folderStructure:s})&&n.add(r);return n},ti=e=>`file:${e}`,si=e=>`folder:${e}`,ni=e=>`folder-target:${e}`,ri=e=>{if(typeof e!="string")return null;const s=/^folder-target:(\d+)$/.exec(e);return s?Number(s[1]):null},ai=e=>`folder-tree-target:${e}`,Kn="folder-tree-target:home",oi=e=>{if(typeof e!="string")return null;if(e===Kn)return"root";const s=/^folder-tree-target:(\d+)$/.exec(e);return s?Number(s[1]):null},Et=20,Rt=24,As=24,Hn=y(I).attrs({"data-testid":"drag-overlay-chip"})`
  position: relative;
  align-items: center;
  gap: ${({theme:e})=>e.spaces[2]};
  padding: ${({theme:e})=>`${e.spaces[2]} ${e.spaces[3]}`};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.primary100};
  box-shadow: ${({theme:e})=>e.shadows.tableShadow};
  cursor: grabbing;
  max-width: 24rem;
`,ii=y(Hn)`
  box-shadow:
    ${({theme:e})=>e.shadows.tableShadow},
    0 4px 0 -1px ${({theme:e})=>e.colors.primary100},
    0 4px 0 0 ${({theme:e})=>e.colors.primary200},
    0 7px 0 -1px ${({theme:e})=>e.colors.primary100},
    0 7px 0 0 ${({theme:e})=>e.colors.primary200};
`,Es=y(I)`
  align-items: center;
  gap: ${({theme:e})=>e.spaces[1]};
`,Tt=y(I)`
  flex-shrink: 0;
  width: ${As}px;
  height: ${As}px;
  align-items: center;
  justify-content: center;
`,li=y(I)`
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
`,di=({items:e})=>{const{formatMessage:s}=L();if(e.length===0)return null;if(e.length===1){const o=e[0],i=o.kind==="folder",d=i?Ce:it,u=i?Et:Rt;return t.jsxs(Hn,{children:[t.jsx(Tt,{children:t.jsx(d,{width:u,height:u})}),t.jsx(F,{textColor:"neutral800",fontWeight:"semiBold",ellipsis:!0,children:o.name})]})}const n=e.filter(o=>o.kind==="folder").length,r=e.filter(o=>o.kind==="file").length,a=n+r;return t.jsxs(ii,{gap:3,children:[n>0?t.jsxs(Es,{children:[t.jsx(Tt,{children:t.jsx(Ce,{width:Et,height:Et})}),t.jsx(F,{textColor:"neutral800",fontWeight:"semiBold",children:s({id:l("dnd.overlay.folders"),defaultMessage:"{count, plural, one {# folder} other {# folders}}"},{count:n})})]}):null,r>0?t.jsxs(Es,{children:[t.jsx(Tt,{children:t.jsx(it,{width:Rt,height:Rt})}),t.jsx(F,{textColor:"neutral800",fontWeight:"semiBold",children:s({id:l("dnd.overlay.files"),defaultMessage:"{count, plural, one {# file} other {# files}}"},{count:r})})]}):null,t.jsx(li,{children:t.jsx(F,{textColor:"neutral0",fontWeight:"bold",variant:"pi",children:a})})]})},Vn=c.createContext(null),pe=()=>c.useContext(Vn),Rs=e=>{const s=ri(e);if(s!=null)return{destinationFolderId:s};const n=oi(e);return n==="root"?{destinationFolderId:null}:typeof n=="number"?{destinationFolderId:n}:null},ci=Number.MAX_SAFE_INTEGER,ui=[Ia],gi=({children:e,locations:s=Cn})=>{const{formatMessage:n}=L(),r=yt(),{toggleNotification:a}=me(),o=Vo(),{currentFolderId:i}=Ze(),{data:d=[]}=as(),u=n({id:l("plugin.name"),defaultMessage:"Media Library"}),[p,{isLoading:g}]=Mn(),[h,x]=c.useState([]),[f,m]=c.useState(""),b=c.useRef({items:[],fromSelection:!1,activeSourceFolderId:null,spansMultipleSources:!1}),j=c.useCallback(N=>{m(""),requestAnimationFrame(()=>m(N))},[]),{canUpdate:C}=ge(),k=ja(wa(Sa,{activationConstraint:{distance:C?8:ci}})),v=c.useMemo(()=>ei(h,d),[h,d]),w=c.useCallback(N=>v.has(N),[v]),A=c.useMemo(()=>({isInternalDragActive:h.length>0,isMovePending:g,isValidDropTarget:w}),[h.length,g,w]),M=c.useCallback(()=>{b.current={items:[],fromSelection:!1,activeSourceFolderId:null,spansMultipleSources:!1},x([])},[]),D=c.useCallback(N=>{const S=N.active.data.current;if(!S){M();return}const $=ks(S,o?.selectedKeys,s,i);b.current=$,x($.items)},[M,i,s,o?.selectedKeys]),_=c.useCallback(async N=>{const{over:S}=N,{items:$,fromSelection:E,activeSourceFolderId:q,spansMultipleSources:G}=b.current;if(M(),g||!S||$.length===0)return;const W=Rs(S.id);if(!W)return;const{destinationFolderId:O}=W;if(!Be({items:$,targetFolderId:O,folderStructure:d}))return;const B=Jo($),U=_n({formatMessage:n,count:$.length,source:G?null:$s(d,q,u),destination:$s(d,O,u)}),J=n({id:l("list.bulk-actions.move.error"),defaultMessage:"An error occurred while moving the items."});try{await p({...B,destinationFolderId:O}).unwrap(),E&&o?.clear(),j(U),a({type:"success",message:U})}catch(K){const Y=r(K,J);j(n({id:l("dnd.announce.move-failure"),defaultMessage:"Move failed. {message}"},{message:Y})),a({type:"danger",message:Y})}},[j,p,M,d,n,r,g,u,o,a]),R=c.useCallback(()=>{M()},[M]),X=c.useMemo(()=>({onDragStart:({active:N})=>{const S=N.data.current;return S?n({id:l("dnd.announce.drag-start"),defaultMessage:"Picked up {name}. Drop on a folder to move."},{name:S.name}):""},onDragOver:()=>"",onDragEnd:({active:N,over:S})=>{if(!S)return n({id:l("dnd.announce.cancel"),defaultMessage:"Drag cancelled."});const $=Rs(S.id),E=N.data.current;if(!$||!E)return"";const{items:q}=ks(E,o?.selectedKeys,s,i);return Be({items:q,targetFolderId:$.destinationFolderId,folderStructure:d})?"":n({id:l("dnd.announce.invalid-drop"),defaultMessage:"Cannot move item to this folder."})},onDragCancel:()=>n({id:l("dnd.announce.cancel"),defaultMessage:"Drag cancelled."})}),[i,d,n,s,o?.selectedKeys]);return t.jsx(Vn.Provider,{value:A,children:t.jsxs(Ma,{sensors:k,collisionDetection:Ca,onDragStart:D,onDragEnd:_,onDragCancel:R,accessibility:{announcements:X},children:[t.jsx(Te,{"aria-live":"polite","aria-atomic":"true",children:f}),t.jsx(I,{position:"relative",alignItems:"stretch",direction:"column",height:"100%",children:e}),t.jsx(va,{dropAnimation:null,modifiers:ui,children:h.length>0?t.jsx(di,{items:h}):null})]})})},Wn=e=>{const{isMovePending:s}=pe()??{isMovePending:!1},n=c.useMemo(()=>({kind:"file",id:e.id,name:e.name,folderId:Ge(e.folder)}),[e.folder,e.id,e.name]);return{...bn({id:ti(e.id),data:n,disabled:s}),dragData:n}},qn=e=>{const{isMovePending:s,isValidDropTarget:n}=pe()??{isMovePending:!1,isValidDropTarget:()=>!1},{active:r}=yn(),a=Ge(e.parent),o=c.useMemo(()=>({kind:"folder",id:e.id,name:e.name,parentId:a}),[e.id,e.name,a]),i=c.useMemo(()=>({kind:"folder-target",id:e.id,name:e.name}),[e.id,e.name]),d=bn({id:si(e.id),data:o,disabled:s}),u=jn({id:ni(e.id),data:i,disabled:s}),p=n(e.id),g=u.isOver,h=g&&p,x=g&&!p&&r!=null;return{dragData:o,draggable:d,droppable:u,isDragging:d.isDragging,showValidDropHighlight:h,showInvalidDropCursor:x}},pi=y(se.Content)`
  max-width: 51.6rem;
`,Gn=e=>{const{open:s,parentFolderId:n,onClose:r,mode:a}=e,o=e.mode==="rename"?e.initialName:"",{formatMessage:i}=L(),{toggleNotification:d}=me(),{trackUsage:u}=ve(),[p,g]=c.useState(o),[h,x]=c.useState(),f=c.useRef(null),[m,{isLoading:b}]=Fa(),[j,{isLoading:C}]=La(),k=a==="rename"?C:b;c.useEffect(()=>{s&&(g(o),x(void 0),a==="rename"&&f.current?.select())},[s,o,a]);const v=async w=>{w.preventDefault();const A=p.trim();if(!A){x(i({id:l("folder.create.form.error.name-required"),defaultMessage:"Name is required"}));return}try{e.mode==="rename"?(await j({id:e.folderId,name:A,parent:n}).unwrap(),u("didEditMediaLibraryElements",{location:re,type:"folder",changeLocation:!1})):(await m({name:A,parent:n}).unwrap(),u("didAddMediaLibraryFolders",{location:re})),d({type:"success",message:i(a==="rename"?{id:l("folder.rename.success"),defaultMessage:"Folder has been renamed"}:{id:l("folder.create.success"),defaultMessage:"Folder has been created"})}),r()}catch(M){const D=M;D?.message?x(D.message):d({type:"danger",message:i(a==="rename"?{id:l("folder.rename.form.error.unknown"),defaultMessage:"An error occurred while renaming the folder"}:{id:l("folder.create.form.error.unknown"),defaultMessage:"An error occurred while creating the folder"})})}};return t.jsx(se.Root,{open:s,onOpenChange:r,children:t.jsxs(pi,{children:[t.jsx(se.Header,{children:t.jsx(se.Title,{children:e.mode==="rename"?i({id:l("folder.rename.title"),defaultMessage:"Rename folder"}):i({id:l("folder.create.title-in"),defaultMessage:"New folder in {folderName}"},{folderName:e.parentFolderName})})}),t.jsxs("form",{onSubmit:v,children:[t.jsx(se.Body,{children:t.jsxs(ne.Root,{error:h,name:"name",required:!0,children:[t.jsx(ne.Label,{children:i({id:l("folder.form.name.label"),defaultMessage:"Folder name"})}),t.jsx(dn,{ref:f,value:p,onChange:w=>{g(w.target.value),x(void 0)},autoFocus:!0}),t.jsx(ne.Error,{})]})}),t.jsx(se.Footer,{children:t.jsxs(I,{gap:2,justifyContent:"space-between",width:"100%",children:[t.jsx(Z,{variant:"tertiary",onClick:r,type:"button",children:i({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),t.jsx(Z,{type:"submit",loading:k,disabled:a==="rename"&&p.trim()===o.trim(),children:i(a==="rename"?{id:l("folder.rename.submit"),defaultMessage:"Save"}:{id:l("folder.create.submit"),defaultMessage:"Create folder"})})]})})]})]})})},Yn=({folder:e,dragData:s})=>{const{formatMessage:n}=L(),{copy:r}=Jt(),{toggleNotification:a}=me(),{deselect:o}=ye(),[i,d]=c.useState(!1),[u,p]=c.useState(!1),[g,h]=c.useState(!1),x=c.useMemo(()=>[s],[s]),f=async()=>{const m=`${window.location.origin}${window.location.pathname}?folder=${e.id}`,b=await r(m);a({type:b?"success":"danger",message:n(b?{id:l("list.folder.actions.copy-link.success"),defaultMessage:"Folder link copied."}:{id:l("list.folder.actions.copy-link.error"),defaultMessage:"Failed to copy the folder link."})})};return t.jsxs(t.Fragment,{children:[t.jsxs(P.Root,{modal:!1,children:[t.jsx(P.Trigger,{tag:de,icon:t.jsx(pn,{}),variant:"ghost",label:n({id:l("control-card.more-actions"),defaultMessage:"More actions"})}),t.jsxs(cs,{popoverPlacement:"bottom-end",zIndex:2,minWidth:"22rem",children:[t.jsx(P.Item,{startIcon:t.jsx(_e,{}),onSelect:f,children:n({id:l("list.folder.actions.copy-link"),defaultMessage:"Copy link to folder"})}),t.jsx(P.Separator,{}),t.jsx(P.Item,{startIcon:t.jsx(Fr,{}),onSelect:()=>d(!0),children:n({id:l("list.folder.actions.rename"),defaultMessage:"Rename folder"})}),t.jsx(P.Item,{startIcon:t.jsx(es,{}),onSelect:()=>p(!0),children:n({id:l("list.folder.actions.move"),defaultMessage:"Move to folder"})}),t.jsx(P.Item,{startIcon:t.jsx(gt,{}),variant:"danger",onSelect:()=>h(!0),children:n({id:l("list.folder.actions.delete"),defaultMessage:"Delete folder"})})]})]}),i&&t.jsx(Gn,{open:!0,mode:"rename",folderId:e.id,initialName:e.name,parentFolderId:s.parentId,onClose:()=>d(!1)}),u&&t.jsx(gs,{open:!0,onClose:()=>p(!1),items:x,onSuccess:()=>o(Ee(e.id))}),g&&t.jsx(ps,{open:!0,onClose:()=>h(!1),target:{fileIds:[],folderIds:[e.id]},onSuccess:()=>o(Ee(e.id))})]})},Pe=e=>{ae(e)&&e.stopPropagation()},hi=y(I)`
  position: absolute;
  top: ${({theme:e})=>e.spaces[3]};
  left: ${({theme:e})=>e.spaces[3]};
  z-index: 1;
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
`,fi=y(Or)`
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
`,mi=y(z)`
  grid-column: 1 / -1;
`,xi=y(I)`
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
`,yi=y(I)`
  flex-shrink: 0;
  color: ${({theme:e})=>e.colors.neutral600};
`,bi=y(Qe)`
  flex: 1;
  min-width: 0;
`,ji=({folder:e,orderedItemKeys:s})=>{const{formatMessage:n}=L(),{navigateToFolder:r}=Ze(),{isMovePending:a}=pe()??{isMovePending:!1},{isSelected:o,toggle:i,selectRange:d}=ye(),{canUpdate:u}=ge(),{dragData:p,draggable:{attributes:g,listeners:h,setNodeRef:x,isDragging:f},droppable:{setNodeRef:m},showValidDropHighlight:b,showInvalidDropCursor:j}=qn(e),C=Ee(e.id),k=M=>{x(M),m(M)},v=M=>{ae(M)&&(M.shiftKey?d(s,C):M.metaKey||M.ctrlKey?i(C):r(e))},w=M=>{ae(M)&&(M.key==="Enter"?(M.preventDefault(),r(e)):M.key===" "&&(M.preventDefault(),i(C)))},A=M=>{M.stopPropagation(),M.shiftKey?d(s,C):i(C)};return t.jsxs(xi,{ref:k,...g,...h,$isDragging:f,$isMovePending:a,$isValidDropTarget:b,$isInvalidDropTarget:j,$isSelected:o(C),onClick:v,onKeyDown:w,onPointerDown:M=>{ae(M)&&h?.onPointerDown?.(M)},role:"listitem",tabIndex:0,"data-native-context-menu":!0,children:[u&&t.jsx(I,{onKeyDown:M=>M.stopPropagation(),children:t.jsx(Fe,{checked:o(C),onClick:A,"aria-label":n({id:l("list.table.row.select"),defaultMessage:"Select {name}"},{name:e.name})})}),t.jsx(yi,{children:t.jsx(Ce,{width:20,height:20})}),t.jsx(bi,{textColor:"neutral800",children:e.name}),t.jsx(I,{onClick:Pe,onKeyDown:Pe,onPointerDown:Pe,children:t.jsx(Yn,{folder:e,dragData:p})})]})},Ts=y(z)`
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
`,wi=y.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Mi=y(I)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${({theme:e})=>e.colors.neutral500};
  background: ${({theme:e})=>e.colors.neutral100};
`,Ci=({asset:e})=>{const{alternativeText:s,ext:n,formats:r,mime:a,url:o,updatedAt:i,isLocal:d,isUrlSigned:u}=e;if(a?.includes(Me.Image)){const g=i&&!u?new Date(i).getTime():void 0,h=m=>g===void 0?m:m.includes("?")?`${m}&v=${g}`:`${m}?v=${g}`,x=fe(r?.thumbnail?.url)??fe(o),f=x&&h(x);if(f)return t.jsx(Ts,{children:t.jsx(wi,{src:f,alt:s||"",crossOrigin:!d&&u?"anonymous":void 0,draggable:!1,onDragStart:m=>m.preventDefault()})})}const p=Xe(a,n);return t.jsx(Ts,{children:t.jsx(Mi,{justifyContent:"center",alignItems:"center",children:t.jsx(p,{width:48,height:48})})})},vi=y(Pr)`
  position: relative;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
`,Si=y(I)`
  min-width: 0;
  width: 100%;
`,Ii=y(I)`
  color: ${({theme:e})=>e.colors.neutral600};
  flex-shrink: 0;
`,Di=y(Qe)`
  flex: 1;
  min-width: 0;
`,$i=y.button`
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
`,ki=({asset:e,orderedItemKeys:s,onAssetItemClick:n})=>{const{formatMessage:r}=L(),a=Xe(e.mime,e.ext),{isMovePending:o}=pe()??{isMovePending:!1},{attributes:i,listeners:d,setNodeRef:u,isDragging:p,dragData:g}=Wn(e),{isSelected:h,toggle:x,selectRange:f}=ye(),{canUpdate:m}=ge(),b=ls()?.getBusyMessage(e.id)??null,j=Ae(e.id),C=h(j),k=M=>{ae(M)&&(M.shiftKey?f(s,j):M.metaKey||M.ctrlKey?x(j):n(e.id))},v=M=>{ae(M)&&(M.key==="Enter"?(M.preventDefault(),n(e.id)):M.key===" "&&(M.preventDefault(),x(j)))},w=M=>{M.stopPropagation(),n(e.id)},A=M=>{M.stopPropagation(),M.shiftKey?f(s,j):x(j)};return t.jsxs(fi,{ref:u,...i,...d,...Dn,$isDragging:p,$isMovePending:o,$isBusy:b!==null,$isSelected:C,tabIndex:0,role:"listitem","data-native-context-menu":!0,onDragStart:M=>M.preventDefault(),onClick:k,onKeyDown:v,onPointerDown:M=>{ae(M)&&d?.onPointerDown?.(M)},children:[t.jsxs(vi,{children:[m&&t.jsx(hi,{...ct,onKeyDown:M=>M.stopPropagation(),children:t.jsx(Fe,{checked:C,onClick:A,"aria-label":r({id:l("list.table.row.select"),defaultMessage:"Select {name}"},{name:e.name})})}),t.jsx(Ci,{asset:e}),b!==null?t.jsx(En,{zIndex:2,children:b}):null]}),t.jsx(Lr,{children:t.jsxs(Si,{alignItems:"center",gap:2,children:[t.jsx(Ii,{children:t.jsx(a,{width:20,height:20})}),t.jsx($i,{type:"button",onClick:w,children:t.jsx(Di,{textColor:"primary800",children:e.name})}),t.jsx(I,{...ct,onClick:Pe,onKeyDown:Pe,onPointerDown:Pe,children:t.jsx(zn,{asset:e,dragData:g})})]})})]})},Ai=({assets:e,folders:s=[],renderedKeys:n,onAssetItemClick:r})=>{const a=s.length+e.length,o=n??ds({folders:s,assets:e});return a===0?null:t.jsxs(Je.Root,{gap:4,role:"list","data-testid":"assets-grid",children:[s.length>0&&t.jsx(mi,{children:t.jsx(Je.Root,{gap:4,children:s.map(i=>t.jsx(Je.Item,{col:3,m:4,s:6,xs:12,children:t.jsx(ji,{folder:i,orderedItemKeys:o})},`folder-${i.id}`))})}),e.map(i=>t.jsx(Je.Item,{col:3,m:4,s:6,xs:12,direction:"column",alignItems:"stretch",children:t.jsx(ki,{asset:i,orderedItemKeys:o,onAssetItemClick:r})},i.id))]})},Qn=()=>{const[{query:e},s]=Re(),n=e?._q??"",r=c.useCallback(o=>{o?s({_q:ns(o)},"push",!0):s({_q:""},"remove",!0)},[s]),a=c.useCallback(()=>r(""),[r]);return{searchQuery:n,isSearching:n!=="",setSearchQuery:r,clearSearch:a}},Ei=300,Ri=y(_r)`
  > div {
    border: none;
  }
`,Ti=()=>{const{formatMessage:e}=L(),{searchQuery:s,setSearchQuery:n}=Qn(),{trackUsage:r}=ve(),a=hn(),[o,i]=c.useState(s),d=Nr(o,Ei),u=c.useRef(s),[{query:p}]=Re(),g=p?.folder??"",h=c.useRef(g);c.useEffect(()=>{d!==u.current&&(u.current=d,d&&r("didSearchMediaLibraryElements",{location:re}),n(d))},[d,n,r]),c.useEffect(()=>{s!==u.current&&(u.current=s,i(s))},[s]),c.useEffect(()=>{g!==h.current&&(h.current=g,u.current=s,i(s))},[g,s]);const x=t.jsx(Ri,{onSubmit:f=>f.preventDefault(),children:t.jsx(Br,{name:"search-assets",value:o,onChange:f=>i(f.target.value),onClear:()=>i(""),clearLabel:e({id:"clearLabel",defaultMessage:"Clear"}),placeholder:e({id:l("header.search.placeholder"),defaultMessage:"Search"}),size:"S",children:e({id:l("search.label"),defaultMessage:"Search for an asset"})})});return a?t.jsx(z,{width:"100%",children:x}):x},Fi=y(Kr)`
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
`,Li=y(Hr)`
  background: ${({theme:e})=>e.colors.neutral100};

  tr {
    border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
  }
`,Xn=xe`
  width: 1%;
  white-space: nowrap;
`,Zn=xe`
  width: 100%;
  max-width: 0;
  overflow: hidden;
`,Ht=y(Vr)`
  height: 40px;
  padding: 0 ${({theme:e})=>e.spaces[4]};
  text-align: left;

  ${({$flex:e})=>e?Zn:Xn}
`,Ue=y(Wr)`
  padding: 0 ${({theme:e})=>e.spaces[4]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
`,Jn=y(Ue)`
  ${Zn}
`,Ne=y(Ue)`
  ${Xn}
`,er=y.tr`
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
    ${Ue} {
      border-bottom: 0;
    }
  }
`,tr=y(Ue)`
  width: 5.6rem;
  white-space: nowrap;
`,Oi=y(Ht)`
  width: 5.6rem;
  white-space: nowrap;
`,Pi=y(pt)`
  flex-shrink: 0;
  width: 1.6rem;
  height: 1.6rem;

  path {
    fill: ${({theme:e})=>e.colors.warning500};
  }
`,Ni=y.button`
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
`,ue=e=>{ae(e)&&e.stopPropagation()},Bi=({asset:e})=>{const{ext:s,mime:n}=e,r=Xe(n,s);return t.jsx(I,{justifyContent:"center",alignItems:"center",borderRadius:"4px",color:"neutral500",width:"3.2rem",height:"3.2rem",shrink:0,children:t.jsx(r,{width:20,height:20})})},Fs=({asset:e,orderedItemKeys:s,onAssetItemClick:n})=>{const r=ts(),{formatDate:a,formatMessage:o}=L(),{isMovePending:i}=pe()??{isMovePending:!1},{attributes:d,listeners:u,setNodeRef:p,isDragging:g,dragData:h}=Wn(e),{isSelected:x,toggle:f,selectRange:m}=ye(),{canUpdate:b}=ge(),j=ls()?.getBusyMessage(e.id)??null,C=Ae(e.id),k=x(C),v=!e.caption||!e.alternativeText,w=o({id:l("list.table.row.metadata-missing"),defaultMessage:"This asset is missing metadata (caption or alternative text)."}),A=R=>{ae(R)&&(R.shiftKey?m(s,C):R.metaKey||R.ctrlKey?f(C):n(e.id))},M=R=>{ae(R)&&(R.key==="Enter"?(R.preventDefault(),n(e.id)):R.key===" "&&(R.preventDefault(),f(C)))},D=R=>{R.stopPropagation(),n(e.id)},_=R=>{R.stopPropagation(),R.shiftKey?m(s,C):f(C)};return t.jsxs(er,{ref:p,...d,...u,...Dn,$isDragging:g,$isMovePending:i,$isBusy:j!==null,$isSelected:k,tabIndex:0,role:"row","data-native-context-menu":!0,onDragStart:R=>R.preventDefault(),onClick:A,onKeyDown:M,onPointerDown:R=>{ae(R)&&u?.onPointerDown?.(R)},children:[b&&t.jsx(tr,{...ct,onClick:ue,onKeyDown:ue,children:t.jsx(I,{children:t.jsx(Fe,{checked:k,onClick:_,"aria-label":o({id:l("list.table.row.select"),defaultMessage:"Select {name}"},{name:e.name})})})}),t.jsx(Jn,{children:t.jsxs(I,{alignItems:"center",justifyContent:"space-between",gap:2,minWidth:0,children:[t.jsxs(I,{gap:3,alignItems:"center",minWidth:0,children:[j!==null?t.jsx(I,{justifyContent:"center",width:"3.2rem",height:"3.2rem",children:t.jsx($e,{small:!0,children:j})}):t.jsx(Bi,{asset:e}),t.jsxs(I,{direction:"column",alignItems:"flex-start",minWidth:0,children:[t.jsx(Ni,{type:"button",onClick:D,children:t.jsx(Qe,{textColor:"neutral800",fontWeight:"semiBold",children:e.name})}),!r&&t.jsx(F,{textColor:"neutral600",variant:"pi",children:e.size?Kt(e.size,1):"-"})]})]}),v&&t.jsx(Zt,{label:w,children:t.jsx(Pi,{"aria-label":w,role:"img"})})]})}),r&&t.jsxs(t.Fragment,{children:[t.jsx(Ne,{children:t.jsx(F,{textColor:"neutral600",children:e.createdAt?a(new Date(e.createdAt),{dateStyle:"long"}):"-"})}),t.jsx(Ne,{children:t.jsx(F,{textColor:"neutral600",children:e.updatedAt?a(new Date(e.updatedAt),{dateStyle:"long"}):"-"})}),t.jsx(Ne,{children:t.jsx(F,{textColor:"neutral600",children:e.size?Kt(e.size,1):"-"})})]}),t.jsx(Ue,{...ct,onClick:ue,onKeyDown:ue,onPointerDown:ue,children:t.jsx(I,{justifyContent:"flex-end",children:t.jsx(zn,{asset:e,dragData:h})})})]})},_i=y(er)`
  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
  }
`,Ls=({folder:e,orderedItemKeys:s})=>{const n=ts(),{formatDate:r,formatMessage:a}=L(),{navigateToFolder:o}=Ze(),{isSelected:i,toggle:d,selectRange:u}=ye(),{canUpdate:p}=ge(),{isMovePending:g}=pe()??{isMovePending:!1},{dragData:h,draggable:{attributes:x,listeners:f,setNodeRef:m,isDragging:b},droppable:{setNodeRef:j},showValidDropHighlight:C,showInvalidDropCursor:k}=qn(e),v=Ee(e.id),w=D=>{ae(D)&&(D.shiftKey?u(s,v):D.metaKey||D.ctrlKey?d(v):o(e))},A=D=>{ae(D)&&(D.key==="Enter"?(D.preventDefault(),o(e)):D.key===" "&&(D.preventDefault(),d(v)))},M=D=>{D.stopPropagation(),D.shiftKey?u(s,v):d(v)};return t.jsxs(_i,{ref:D=>{m(D),j(D)},...x,...f,$isDragging:b,$isMovePending:g,$isValidDropTarget:C,$isInvalidDropTarget:k,$isSelected:i(v),tabIndex:0,role:"row","data-native-context-menu":!0,onDragStart:D=>{ae(D)&&D.preventDefault()},onClick:w,onKeyDown:A,onPointerDown:D=>{ae(D)&&f?.onPointerDown?.(D)},children:[p&&t.jsx(tr,{onClick:ue,onKeyDown:ue,children:t.jsx(I,{children:t.jsx(Fe,{checked:i(v),onClick:M,"aria-label":a({id:l("list.table.row.select"),defaultMessage:"Select {name}"},{name:e.name})})})}),t.jsx(Jn,{children:t.jsxs(I,{gap:3,alignItems:"center",minWidth:0,children:[t.jsx(I,{justifyContent:"center",alignItems:"center",borderRadius:"4px",color:"neutral600",width:"3.2rem",height:"3.2rem",shrink:0,children:t.jsx(Ce,{width:20,height:20})}),t.jsx(Qe,{textColor:"neutral800",fontWeight:"semiBold",children:e.name})]})}),n&&t.jsxs(t.Fragment,{children:[t.jsx(Ne,{children:t.jsx(F,{textColor:"neutral600",children:e.createdAt?r(new Date(e.createdAt),{dateStyle:"long"}):"-"})}),t.jsx(Ne,{children:t.jsx(F,{textColor:"neutral600",children:e.updatedAt?r(new Date(e.updatedAt),{dateStyle:"long"}):"-"})}),t.jsx(Ne,{children:t.jsx(F,{textColor:"neutral600",children:"-"})})]}),t.jsx(Ue,{onClick:ue,onKeyDown:ue,onPointerDown:ue,children:t.jsx(I,{justifyContent:"flex-end",children:t.jsx(Yn,{folder:e,dragData:h})})})]})},Ui=({assets:e,folders:s=[],mixedItems:n=null,renderedKeys:r,onAssetItemClick:a})=>{const o=ts(),{formatMessage:i}=L(),{selectedKeys:d,selectAll:u,clear:p}=ye(),{canUpdate:g}=ge(),{trackUsage:h}=ve(),x=o?Ss:Ss.filter(w=>w.name==="name"||w.name==="actions"),f=g,m=x.length+(f?1:0),b=s.length+e.length,j=r??ds({folders:s,assets:e,mixedItems:n}),{allSelected:C,isIndeterminate:k}=Ko(d,j),v=()=>{C?p():(h("didSelectAllMediaLibraryElements"),u(j))};return b===0?null:t.jsxs(Fi,{colCount:m,rowCount:(n?n.length:b)+1,children:[t.jsx(Li,{children:t.jsxs(Ur,{children:[f&&t.jsx(Oi,{children:t.jsx(I,{children:t.jsx(Fe,{checked:k?"indeterminate":C,disabled:j.length===0,onCheckedChange:v,"aria-label":i({id:l("list.table.header.select-all"),defaultMessage:"Select all"})})})}),x.map(w=>{const A=i(w.label);return"isVisuallyHidden"in w&&w.isVisuallyHidden?t.jsx(Ht,{$flex:w.name==="name",children:t.jsx(Te,{children:i({id:l("table.header.actions"),defaultMessage:"actions"})})},w.name):t.jsx(Ht,{$flex:w.name==="name",children:t.jsx(F,{textColor:"neutral600",variant:"sigma",children:A})},w.name)})]})}),t.jsxs(zr,{children:[n?.map(w=>w.kind==="folder"?t.jsx(Ls,{folder:w.folder,orderedItemKeys:j},`folder-${w.folder.id}`):t.jsx(Fs,{asset:w.asset,orderedItemKeys:j,onAssetItemClick:a},w.asset.id)),!n&&s.map(w=>t.jsx(Ls,{folder:w,orderedItemKeys:j},`folder-${w.id}`)),!n&&e.map(w=>t.jsx(Fs,{asset:w,orderedItemKeys:j,onAssetItemClick:a},w.id))]})]})},zi=(e,s,n,r)=>{const a=[];return e.forEach(o=>{a.push({kind:"file",id:o,name:"",folderId:dt(n,"file",o,r)})}),s.forEach(o=>{a.push({kind:"folder",id:o,name:"",parentId:dt(n,"folder",o,r)})}),a},Ki=y(I)`
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
`,Hi=y(I)`
  margin-left: auto;
  align-items: center;
  gap: ${({theme:e})=>e.spaces[2]};
`,Vi=y(z)`
  width: 1px;
  align-self: stretch;
  background: ${({theme:e})=>e.colors.neutral150};
  margin-left: ${({theme:e})=>e.spaces[1]};
`,Wi=({assets:e=[],locations:s=Cn,renderedKeys:n=[]})=>{const{formatMessage:r}=L(),{toggleNotification:a}=me(),o=xt(),{canUpdate:i}=ge(),{selectedIds:d,selectedFolderIds:u,selectAll:p,clear:g}=ye(),{trackUsage:h}=ve(),{currentFolderId:x}=Ze(),f=Ya(),[m,{isLoading:b}]=qr(),[j,C]=c.useState(!1),[k,v]=c.useState(!1),[w,A]=c.useState(!1),M=d.size+u.size,[D,_]=c.useState(null),[R,X]=c.useState(0);c.useEffect(()=>{if(!D){X(0);return}const B=()=>{const J=D.getBoundingClientRect();X(J.height===0?0:Math.max(0,window.innerHeight-J.top))};B();const U=new ResizeObserver(B);return U.observe(D),window.addEventListener("resize",B),()=>{U.disconnect(),window.removeEventListener("resize",B)}},[D,f]);const N=()=>{h("didSelectAllMediaLibraryElements"),p(n)},S=w||b,$=c.useMemo(()=>zi(d,u,s,x),[d,u,s,x]),E=d.size>Cs,q=c.useMemo(()=>{const B=new Map(e.map(({id:U,mime:J})=>[U,J]));return[...d].filter(U=>wn(B.get(U))).length},[e,d]),G=d.size>0&&q===0;let W;E?W=r({id:l("list.bulk-actions.create-metadata.too-many"),defaultMessage:"Metadata can be generated for up to {max} assets at a time. Select fewer assets to continue."},{max:Cs}):G&&(W=r({id:l("list.bulk-actions.create-metadata.no-eligible"),defaultMessage:"Metadata can only be generated for images. None of the selected assets are supported."}));const O=async()=>{if(b||E||G)return;const B=Array.from(d),U=await m({fileIds:B});if("error"in U){a({type:"danger",message:r({id:l("list.bulk-actions.create-metadata.error"),defaultMessage:"An error occurred while generating metadata."})});return}const J=U.data.filter(({status:oe})=>oe==="success").length,K=U.data.filter(({status:oe})=>oe==="skipped").length,Y=U.data.filter(({status:oe})=>oe==="error").length,ee=u.size;if(Y===U.data.length){a({type:"danger",message:r({id:l("list.bulk-actions.create-metadata.error"),defaultMessage:"An error occurred while generating metadata."})});return}a(K===0&&Y===0&&ee===0?{type:"success",message:r({id:l("list.bulk-actions.create-metadata.success"),defaultMessage:"{count, plural, =1 {Metadata generated for # asset} other {Metadata generated for # assets}}"},{count:J})}:{type:"warning",message:r({id:l("list.bulk-actions.create-metadata.partial"),defaultMessage:"{successCount} generated, {skippedCount} skipped (unsupported file type), {errorCount} failed{folderCount, plural, =0 {} one {, # folder ignored} other {, # folders ignored}}"},{successCount:J,skippedCount:K,errorCount:Y,folderCount:ee})}),g()};return M===0||!i?null:t.jsxs(t.Fragment,{children:[t.jsx(z,{"aria-hidden":!0,height:`${R}px`,"data-bar-spacer":!0}),t.jsxs(Ki,{ref:_,$isDrawerOpen:f,$isStacked:o,tag:"section",role:"region","data-native-context-menu":!0,"aria-label":r({id:l("list.bulk-actions.label"),defaultMessage:"Bulk actions"}),children:[t.jsx(F,{"data-bar-slot":"count",fontWeight:"bold",textColor:"neutral800",marginRight:4,children:r({id:l("list.bulk-actions.selected-count"),defaultMessage:"{count, plural, =1 {# item selected} other {# items selected}}"},{count:M})}),t.jsx(Gr,{onClick:N,marginRight:4,disabled:S,children:r({id:l("list.bulk-actions.select-all"),defaultMessage:"Select all"})}),t.jsxs(Hi,{"data-bar-slot":"actions",children:[o&&t.jsx(Zt,{label:W,children:t.jsx(z,{children:t.jsx(Z,{size:"S",startIcon:t.jsx(Yr,{}),disabled:S||d.size===0||E||G,loading:b,onClick:O,children:r({id:l("list.bulk-actions.create-metadata"),defaultMessage:"Create metadata"})})})}),t.jsx(de,{variant:"tertiary",disabled:S,label:r({id:l("list.bulk-actions.move"),defaultMessage:"Move"}),onClick:()=>v(!0),children:t.jsx(es,{})}),t.jsx(gs,{open:k,onClose:()=>v(!1),items:$,onSuccess:g}),t.jsx(de,{variant:"danger-light",disabled:S,label:r({id:l("list.bulk-actions.delete"),defaultMessage:"Delete"}),onClick:()=>C(!0),children:t.jsx(gt,{})}),t.jsx(ps,{open:j,onClose:()=>C(!1),target:{fileIds:Array.from(d),folderIds:Array.from(u)},onSuccess:g,onPendingChange:A})]}),t.jsx(Vi,{"data-bar-slot":"divider","aria-hidden":!0}),t.jsx(de,{variant:"ghost",label:r({id:l("list.bulk-actions.clear"),defaultMessage:"Clear selection"}),onClick:g,disabled:S,children:t.jsx(ht,{})})]})]})},sr=c.createContext(null),qi=y(z)`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
`,Gi=({children:e,onDrop:s,disabled:n=!1})=>{const[r,a]=c.useState(!1),o=c.useRef(0),i={isDragging:r};c.useEffect(()=>{const h=()=>{a(!1),o.current=0},x=f=>{f.relatedTarget||(a(!1),o.current=0)};return document.addEventListener("dragend",h),document.addEventListener("dragleave",x),()=>{document.removeEventListener("dragend",h),document.removeEventListener("dragleave",x)}},[]);const d=c.useCallback(h=>{h.preventDefault(),h.stopPropagation(),!n&&h.dataTransfer.types.includes("Files")&&(o.current+=1,a(!0))},[n]),u=c.useCallback(h=>{h.preventDefault(),h.stopPropagation(),o.current-=1,o.current<=0&&(a(!1),o.current=0)},[]),p=c.useCallback(h=>{h.preventDefault(),h.stopPropagation(),h.dataTransfer.dropEffect="copy"},[]),g=c.useCallback(h=>{if(h.preventDefault(),h.stopPropagation(),a(!1),o.current=0,n)return;const{files:x}=h.dataTransfer;x?.length&&s&&s(Array.from(x))},[s,n]);return t.jsx(sr.Provider,{value:i,children:t.jsx(qi,{"data-testid":"assets-dropzone",onDragEnter:d,onDragLeave:u,onDragOver:p,onDrop:g,children:e})})},nr=()=>{const e=c.useContext(sr);if(!e)throw new Error("useUploadDropZone must be used within UploadDropZone");return{isDragging:e.isDragging}},Yi=(e,s)=>`${e}${Math.floor(s*255).toString(16).padStart(2,"0")}`,Qi=y(z)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({theme:e})=>Yi(e.colors.primary200,.3)};
  border: 1px solid ${({theme:e})=>e.colors.primary700};
  border-radius: ${({theme:e})=>e.borderRadius};
  z-index: 1;
  pointer-events: none;
`,Xi=({children:e})=>{const{isDragging:s}=nr(),r=pe()?.isInternalDragActive??!1,a=s&&!r;return t.jsxs(z,{position:"relative",children:[a&&t.jsx(Qi,{}),e]})},Zi=y(z)`
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
`,Ji=({uploadDropZoneRef:e,folderName:s})=>{const{formatMessage:n}=L(),{isDragging:r}=nr(),o=pe()?.isInternalDragActive??!1,i=r&&!o,[d,u]=c.useState(0);return c.useEffect(()=>{if(!e?.current)return;const p=()=>{const h=e.current?.getBoundingClientRect();h&&u(x=>x!==h.left?h.left:x)};p();const g=new ResizeObserver(p);return g.observe(e.current),()=>g.disconnect()},[e]),i?t.jsxs(Zi,{$leftContentWidth:d,children:[t.jsx(F,{textColor:"neutral0",children:n({id:l("dropzone.upload.message"),defaultMessage:"Drop here to upload to"})}),t.jsxs(I,{gap:2,alignItems:"center",children:[t.jsx(Ce,{width:20,height:20,fill:"neutral0"}),t.jsx(F,{textColor:"neutral0",fontWeight:"semiBold",children:s})]})]}):null},el=({onAddAssets:e,canAddAssets:s,searchQuery:n,onClearSearch:r})=>{const{formatMessage:a}=L(),o=!!n;return t.jsxs(I,{direction:"column",alignItems:"center",gap:6,padding:11,children:[t.jsx(fn,{width:"16rem",height:"8.8rem"}),t.jsxs(I,{direction:"column",alignItems:"center",gap:2,textAlign:"center",children:[t.jsx(F,{variant:"delta",tag:"p",fontWeight:"bold",textColor:"neutral800",children:a(o?{id:l("list.search.empty.title"),defaultMessage:"No results found"}:{id:l("list.empty.title"),defaultMessage:"No assets yet"})}),t.jsx(F,{textColor:"neutral600",children:o?a({id:l("list.search.empty.description"),defaultMessage:'No assets or folders match "{query}". Try a different search.'},{query:n}):a({id:l("list.empty.description"),defaultMessage:"Get started by uploading assets or creating a folder."})})]}),o?t.jsx(Z,{variant:"secondary",startIcon:t.jsx(ht,{"aria-hidden":!0}),onClick:r,children:a({id:l("list.search.empty.clear"),defaultMessage:"Clear search"})}):s&&t.jsx(Z,{onClick:e,children:a({id:l("list.empty.add-assets"),defaultMessage:"Add assets"})})]})},tl=({onClearFilters:e})=>{const{formatMessage:s}=L();return t.jsxs(I,{direction:"column",alignItems:"center",gap:6,padding:11,children:[t.jsx(fn,{width:"16rem",height:"8.8rem"}),t.jsx(F,{textColor:"neutral600",children:s({id:l("list.filters.empty"),defaultMessage:"No items matched current filters"})}),t.jsx(Z,{variant:"secondary",startIcon:t.jsx(ht,{"aria-hidden":!0}),onClick:e,children:s({id:l("list.filters.clear"),defaultMessage:"Clear filters"})})]})},hs=["folder","picture","audio","video","document"],fs=["1day","3days","1week","1month","3months","6months","1year"],sl={created:"createdAt",updated:"updatedAt"},nl={createdAt:"created",updatedAt:"updated"},Os={exact:"isExactly",within:"withinLast",notwithin:"notWithinLast"},rl={isExactly:"exact",withinLast:"within",notWithinLast:"notwithin"},Ps={rangeis:"is",rangenot:"isNot"},al={is:"rangeis",isNot:"rangenot"},Ns=/^\d{4}-\d{2}-\d{2}$/,ol=e=>hs.includes(e),il=e=>fs.includes(e),ll=e=>{const[s,n,r]=e.split(":");if(!s||!n||!r)return null;if(s==="type"){if(n!=="is"&&n!=="not")return null;const o=r.split(",").filter(ol);return o.length>0?{kind:"type",condition:n==="is"?"is":"isNot",values:o}:null}const a=sl[s];if(!a)return null;if(n in Os)return il(r)?{kind:"date",field:a,mode:"preset",condition:Os[n],preset:r}:null;if(n in Ps){const[o,i]=r.split("..");return Ns.test(o??"")&&Ns.test(i??"")?{kind:"date",field:a,mode:"range",condition:Ps[n],from:o,to:i}:null}return null},dl=e=>typeof e!="string"||e===""?[]:e.split(";").map(ll).filter(s=>s!==null),cl=e=>{if(e.kind==="type")return`type:${e.condition==="is"?"is":"not"}:${e.values.join(",")}`;const s=nl[e.field];return e.mode==="preset"?`${s}:${rl[e.condition]}:${e.preset}`:`${s}:${al[e.condition]}:${e.from}..${e.to}`},Bs=e=>e.map(cl).join(";"),ul=()=>{const[{query:e},s]=Re(),n=dl(e?.filters),r=a=>{a.length===0?s(he(e,{filters:void 0}),"push",!0):s(he(e,{filters:Bs(a)}),"push",!0)};return{filters:n,serialized:Bs(n),addFilter:a=>r([...n,a]),updateFilter:(a,o)=>r(n.map((i,d)=>d===a?o:i)),removeFilter:a=>r(n.filter((o,i)=>i!==a)),clearFilters:()=>r([])}},Vt={picture:"image",audio:"audio",video:"video"},_s=Object.values(Vt),gl={"1day":{days:1},"3days":{days:3},"1week":{days:7},"1month":{months:1},"3months":{months:3},"6months":{months:6},"1year":{years:1}},pl=(e,s)=>{const{days:n=0,months:r=0,years:a=0}=gl[s],o=new Date(e.getTime());if(a||r){const i=o.getDate();o.setDate(1),o.setFullYear(o.getFullYear()-a),o.setMonth(o.getMonth()-r);const d=new Date(o.getFullYear(),o.getMonth()+1,0).getDate();o.setDate(Math.min(i,d))}return o.setDate(o.getDate()-n),o},Us=e=>{const s=new Date(e.getTime());return s.setHours(0,0,0,0),s},zs=e=>{const s=new Date(e.getTime());return s.setHours(23,59,59,999),s},ut=e=>{const[s,n,r]=e.split("-").map(Number);return new Date(s,n-1,r)},hl=(e,s)=>{const{field:n}=e;if(e.mode==="preset"){const o=pl(s,e.preset);switch(e.condition){case"withinLast":return{[n]:{$gte:o.toISOString()}};case"notWithinLast":return{[n]:{$lt:o.toISOString()}};case"isExactly":return{[n]:{$gte:Us(o).toISOString(),$lte:zs(o).toISOString()}}}}const r=Us(ut(e.from)).toISOString(),a=zs(ut(e.to)).toISOString();return e.condition==="is"?{[n]:{$gte:r,$lte:a}}:{$or:[{[n]:{$lt:r}},{[n]:{$gt:a}}]}},fl=e=>{const s=e.values.filter(a=>a!=="folder");if(s.length===0)return null;const n=s.map(a=>a==="document"?{$and:_s.map(o=>({mime:{$notContains:o}}))}:{mime:{$contains:Vt[a]}});if(e.condition==="is")return n.length===1?n[0]:{$or:n};const r=s.map(a=>a==="document"?{$or:_s.map(o=>({mime:{$contains:o}}))}:{mime:{$notContains:Vt[a]}});return r.length===1?r[0]:{$and:r}},ml=(e,s)=>{const n=[],r=[];let a=!0,o=!0;for(const i of e){if(i.kind==="date"){const p=hl(i,s);n.push(p),r.push(p);continue}const d=i.values.includes("folder");(i.condition==="is"?!d:d)&&(a=!1);const u=fl(i);u?n.push(u):i.condition==="is"&&(o=!1)}return{fileClauses:n,folderClauses:r,showFolders:a,showFiles:o}},xl=y.button`
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
`,Ks=e=>{const s=`${e.getMonth()+1}`.padStart(2,"0"),n=`${e.getDate()}`.padStart(2,"0");return`${e.getFullYear()}-${s}-${n}`},yl=e=>{const[s,n,r]=e.split("-").map(Number);return new Date(s,n-1,r)},bl=(e,s)=>{const n=new Date(e,s,1),r=new Date(n.getTime());r.setDate(n.getDate()-(n.getDay()+6)%7);const a=[],o=new Date(r.getTime());do{const i=[];for(let d=0;d<7;d+=1)i.push(new Date(o.getTime())),o.setDate(o.getDate()+1);a.push(i)}while(o.getMonth()===s&&o.getFullYear()===e);return a},Wt=({from:e,to:s,onSelect:n})=>{const{formatMessage:r,formatDate:a}=L(),o=e?yl(e):new Date,[i,d]=c.useState(o.getFullYear()),[u,p]=c.useState(o.getMonth()),[g,h]=c.useState(null),x=g??e??null,f=g?null:s??null,m=k=>{const v=new Date(i,u+k,1);d(v.getFullYear()),p(v.getMonth())},b=k=>{const v=Ks(k);if(!g){h(v);return}const[w,A]=v<g?[v,g]:[g,v];h(null),n(w,A)},j=bl(i,u),C=j[0].map(k=>a(k,{weekday:"short"}).slice(0,2));return t.jsxs(z,{padding:2,width:"100%",role:"group","aria-label":r({id:l("list.filters.calendar.label"),defaultMessage:"Select date range"}),"data-testid":"date-range-calendar",children:[t.jsxs(I,{justifyContent:"space-between",alignItems:"center",paddingBottom:2,children:[t.jsx(de,{variant:"ghost",label:r({id:l("list.filters.calendar.previous-month"),defaultMessage:"Previous month"}),onClick:()=>m(-1),children:t.jsx(Qr,{})}),t.jsx(F,{fontWeight:"semiBold",textColor:"neutral800",children:a(new Date(i,u,1),{month:"long",year:"numeric"})}),t.jsx(de,{variant:"ghost",label:r({id:l("list.filters.calendar.next-month"),defaultMessage:"Next month"}),onClick:()=>m(1),children:t.jsx(Xr,{})})]}),t.jsx(I,{children:C.map((k,v)=>t.jsx(I,{width:"3rem",height:"2.4rem",justifyContent:"center",children:t.jsx(F,{variant:"pi",fontWeight:"semiBold",textColor:"neutral600",children:k})},v))}),j.map((k,v)=>t.jsx(I,{children:k.map(w=>{const A=Ks(w),M=A===x||A===f,D=x!==null&&f!==null&&A>x&&A<f;return t.jsxs(xl,{type:"button",$isEdge:M,$inRange:D,$isMuted:w.getMonth()!==u,onClick:()=>b(w),children:[t.jsx(Te,{children:a(w,{dateStyle:"long"})}),t.jsx("span",{"aria-hidden":!0,children:w.getDate()})]},A)})},v))]})},qt={folder:{id:l("list.filters.type.folder"),defaultMessage:"Folder"},picture:{id:l("list.filters.type.picture"),defaultMessage:"Picture"},audio:{id:l("list.filters.type.audio"),defaultMessage:"Audio"},video:{id:l("list.filters.type.video"),defaultMessage:"Video"},document:{id:l("list.filters.type.document"),defaultMessage:"Document"}},Gt={"1day":{id:l("list.filters.preset.1day"),defaultMessage:"1 day ago"},"3days":{id:l("list.filters.preset.3days"),defaultMessage:"3 days ago"},"1week":{id:l("list.filters.preset.1week"),defaultMessage:"1 week ago"},"1month":{id:l("list.filters.preset.1month"),defaultMessage:"1 month ago"},"3months":{id:l("list.filters.preset.3months"),defaultMessage:"3 months ago"},"6months":{id:l("list.filters.preset.6months"),defaultMessage:"6 months ago"},"1year":{id:l("list.filters.preset.1year"),defaultMessage:"1 year ago"}},Yt={createdAt:{id:l("list.filters.field.created"),defaultMessage:"Creation date"},updatedAt:{id:l("list.filters.field.updated"),defaultMessage:"Last modified"}},Ft=y(P.SubTrigger)`
  width: 100%;
  justify-content: space-between;
`,Oe="24.2rem",Lt="70dvh",jl=`min(${Oe}, calc(100dvw - 2rem))`,Ot=y(P.Item)`
  width: 100%;
`,Hs=y(z)`
  width: 100%;

  > * {
    width: 100%;
  }

  /* menuitem, menuitemradio and menuitemcheckbox — every option row, plus the
     "Select date range" toggle, which sits at the same level. */
  > [role^='menuitem'] {
    padding-left: ${({theme:e})=>e.spaces[6]};
  }
`,Pt=y(ft)`
  transition: transform 0.2s ease;
  transform: rotate(${({$open:e})=>e?"180deg":"0deg"});
`,Nt=y(P.SubContent)`
  margin-top: calc(-1 * (${({theme:e})=>e.spaces[1]} + 1px));
`,wl=y(Jr)`
  height: 1.6rem;
  min-width: auto;
  padding: 0 0.4rem;
`,Ml=({listFilters:e})=>{const{formatMessage:s}=L(),{trackUsage:n}=ve(),[r,a]=c.useState(!1),{filters:o,addFilter:i,updateFilter:d,removeFilter:u}=e,p=S=>n("didFilterMediaLibraryElements",{location:re,filter:S});let g=-1;for(let S=o.length-1;S>=0;S-=1)if(o[S].kind==="type"){g=S;break}const h=g>=0?o[g]:null,x=h&&h.kind==="type"?h.values:[],f=S=>{const $=!x.includes(S),E=$?[...x,S]:x.filter(q=>q!==S);$&&p("type"),h&&h.kind==="type"?E.length===0?u(g):d(g,{...h,values:E}):E.length>0&&i({kind:"type",condition:"is",values:E})},m=(S,$)=>{p(S);for(let E=o.length-1;E>=0;E-=1){const q=o[E];if(q.kind==="date"&&q.mode==="preset"&&q.field===S){d(E,{...q,preset:$});return}}i({kind:"date",field:S,mode:"preset",condition:"withinLast",preset:$})},b=(S,$)=>{p("createdAt"),i({kind:"date",field:"createdAt",mode:"range",condition:"is",from:S,to:$}),a(!1)},j=hn(),[C,k]=c.useState(null),[v,w]=c.useState(!1),A=S=>{a(S),S||(k(null),w(!1))},M=S=>{k($=>$===S?null:S),w(!1)},D=hs.map(S=>t.jsx(P.Item,{role:"menuitemcheckbox","aria-checked":x.includes(S),onSelect:$=>{$.preventDefault(),f(S)},startIcon:t.jsx(Fe,{checked:x.includes(S),tabIndex:-1,"aria-hidden":!0}),children:s(qt[S])},S)),_=S=>{for(let $=o.length-1;$>=0;$-=1){const E=o[$];if(E.kind==="date"&&E.mode==="preset"&&E.field===S)return E.preset}return null},R=S=>{const $=_(S);return fs.map(E=>t.jsx(P.Item,{role:"menuitemradio","aria-checked":$===E,onSelect:()=>{m(S,E)},endIcon:$===E?t.jsx(mt,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem",fill:"primary600"}):null,children:s(Gt[E])},E))},X=s({id:l("list.filters.field.type"),defaultMessage:"Type"}),N=s({id:l("list.filters.select-date-range"),defaultMessage:"Select date range"});return t.jsxs(P.Root,{open:r,onOpenChange:A,children:[t.jsx(P.Trigger,{variant:"tertiary",startIcon:t.jsx(Zr,{"aria-hidden":!0}),endIcon:null,children:t.jsxs(I,{gap:2,alignItems:"center",tag:"span",children:[s({id:l("list.filters.trigger"),defaultMessage:"Filter"}),o.length>0&&t.jsx(wl,{children:o.length})]})}),t.jsx(P.Content,{popoverPlacement:"bottom-start",zIndex:2,maxHeight:Lt,width:j?jl:Oe,children:j?t.jsxs(t.Fragment,{children:[t.jsx(Ot,{"aria-expanded":C==="type",onSelect:S=>{S.preventDefault(),M("type")},endIcon:t.jsx(Pt,{$open:C==="type","aria-hidden":!0}),children:X}),C==="type"&&t.jsx(Hs,{children:D}),["createdAt","updatedAt"].map(S=>t.jsxs(z,{width:"100%",children:[t.jsx(Ot,{"aria-expanded":C===S,onSelect:$=>{$.preventDefault(),M(S)},endIcon:t.jsx(Pt,{$open:C===S,"aria-hidden":!0}),children:s(Yt[S])}),C===S&&t.jsxs(Hs,{children:[R(S),S==="createdAt"&&t.jsxs(t.Fragment,{children:[t.jsx(Ot,{"aria-expanded":v,onSelect:$=>{$.preventDefault(),w(E=>!E)},endIcon:t.jsx(Pt,{$open:v,"aria-hidden":!0}),children:N}),v&&t.jsx(z,{paddingLeft:2,children:t.jsx(Wt,{onSelect:b})})]})]})]},S))]}):t.jsxs(t.Fragment,{children:[t.jsxs(P.SubRoot,{children:[t.jsx(Ft,{children:X}),t.jsx(Nt,{zIndex:2,maxHeight:Lt,width:Oe,children:D})]}),["createdAt","updatedAt"].map(S=>t.jsxs(P.SubRoot,{children:[t.jsx(Ft,{children:s(Yt[S])}),t.jsxs(Nt,{zIndex:2,maxHeight:Lt,width:Oe,children:[R(S),S==="createdAt"&&t.jsxs(P.SubRoot,{children:[t.jsx(Ft,{children:N}),t.jsx(Nt,{zIndex:2,maxHeight:"none",width:Oe,children:t.jsx(Wt,{onSelect:b})})]})]})]},S))]})})]})},Cl=y(I)`
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};
  overflow: hidden;
`,ms=y.button`
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
`,vl=y.span`
  display: inline-flex;
  align-items: center;
  padding: ${({theme:e})=>`${e.spaces[1]} ${e.spaces[2]}`};
  border-right: 1px solid ${({theme:e})=>e.colors.neutral200};
`,xs=y(ke.Content)`
  width: ${Oe};
`,rr=y.button`
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
`,Sl=y.button`
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
`,Vs={is:{id:l("list.filters.condition.is"),defaultMessage:"is"},isNot:{id:l("list.filters.condition.is-not"),defaultMessage:"is not"}},Ws={isExactly:{id:l("list.filters.condition.is-exactly"),defaultMessage:"is exactly"},withinLast:{id:l("list.filters.condition.within-last"),defaultMessage:"within the last"},notWithinLast:{id:l("list.filters.condition.not-within-last"),defaultMessage:"not within the last"}},qs={is:{id:l("list.filters.condition.is"),defaultMessage:"is"},isNot:{id:l("list.filters.condition.is-not"),defaultMessage:"is not"}},Bt=({label:e,options:s,active:n,getOptionLabel:r,onPick:a})=>{const[o,i]=c.useState(!1);return t.jsxs(ke.Root,{open:o,onOpenChange:i,children:[t.jsx(ke.Trigger,{children:t.jsx(ms,{type:"button",$interactive:!0,children:t.jsx(F,{variant:"pi",textColor:"neutral800",children:e})})}),t.jsx(xs,{children:t.jsx(I,{direction:"column",alignItems:"stretch",padding:1,children:s.map(d=>t.jsxs(rr,{type:"button",onClick:()=>{a(d),i(!1)},children:[r(d),d===n&&t.jsx(mt,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem"})]},d))})})]})},Il=({filter:e,onChange:s})=>{const{formatMessage:n}=L(),[r,a]=c.useState(!1),o=e.values.map(d=>n(qt[d])).join(", "),i=d=>{const u=e.values.includes(d)?e.values.filter(p=>p!==d):[...e.values,d];u.length>0&&s({...e,values:u})};return t.jsxs(ke.Root,{open:r,onOpenChange:a,children:[t.jsx(ke.Trigger,{children:t.jsx(ms,{type:"button",$interactive:!0,children:t.jsx(F,{variant:"pi",textColor:"neutral800",children:o})})}),t.jsx(xs,{children:t.jsx(I,{direction:"column",alignItems:"flex-start",padding:3,gap:2,children:hs.map(d=>t.jsx(Fe,{checked:e.values.includes(d),onCheckedChange:()=>i(d),children:n(qt[d])},d))})})]})},Gs=({filter:e,onChange:s})=>{const{formatMessage:n,formatDate:r}=L(),[a,o]=c.useState(!1),i=e.mode==="preset"?n(Gt[e.preset]):`${r(ut(e.from),{day:"2-digit",month:"short"})} - ${r(ut(e.to),{day:"2-digit",month:"short",year:"numeric"})}`;return t.jsxs(ke.Root,{open:a,onOpenChange:o,children:[t.jsx(ke.Trigger,{children:t.jsx(ms,{type:"button",$interactive:!0,children:t.jsx(F,{variant:"pi",textColor:"neutral800",children:i})})}),t.jsx(xs,{children:e.mode==="preset"?t.jsx(I,{direction:"column",alignItems:"stretch",padding:1,children:fs.map(d=>t.jsxs(rr,{type:"button",onClick:()=>{s({...e,preset:d}),o(!1)},children:[n(Gt[d]),d===e.preset&&t.jsx(mt,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem"})]},d))}):t.jsx(Wt,{from:e.from,to:e.to,onSelect:(d,u)=>{s({...e,from:d,to:u}),o(!1)}})})]})},Dl=({filter:e,onChange:s,onRemove:n})=>{const{formatMessage:r}=L(),a=e.kind==="type"?r({id:l("list.filters.field.type"),defaultMessage:"Type"}):r(Yt[e.field]);return t.jsxs(Cl,{alignItems:"stretch","data-testid":"filter-badge",children:[t.jsx(vl,{children:t.jsx(F,{variant:"pi",textColor:"neutral600",children:a})}),e.kind==="type"&&t.jsxs(t.Fragment,{children:[t.jsx(Bt,{label:r(Vs[e.condition]),options:["is","isNot"],active:e.condition,getOptionLabel:o=>r(Vs[o]),onPick:o=>s({...e,condition:o})}),t.jsx(Il,{filter:e,onChange:s})]}),e.kind==="date"&&e.mode==="preset"&&t.jsxs(t.Fragment,{children:[t.jsx(Bt,{label:r(Ws[e.condition]),options:["isExactly","withinLast","notWithinLast"],active:e.condition,getOptionLabel:o=>r(Ws[o]),onPick:o=>s({...e,condition:o})}),t.jsx(Gs,{filter:e,onChange:s})]}),e.kind==="date"&&e.mode==="range"&&t.jsxs(t.Fragment,{children:[t.jsx(Bt,{label:r(qs[e.condition]),options:["is","isNot"],active:e.condition,getOptionLabel:o=>r(qs[o]),onPick:o=>s({...e,condition:o})}),t.jsx(Gs,{filter:e,onChange:s})]}),t.jsx(Sl,{type:"button",onClick:n,"aria-label":r({id:l("list.filters.remove"),defaultMessage:"Remove {filter} filter"},{filter:a}),children:t.jsx(ht,{width:"1.2rem",height:"1.2rem","aria-hidden":!0})})]})},$l=y(I)`
  padding-top: ${({theme:e,$compact:s})=>s?e.spaces[1]:e.spaces[6]};
  transition: padding-top 0.2s ease;
`,kl=({listFilters:e,compact:s=!1})=>{const{filters:n,updateFilter:r,removeFilter:a}=e;return n.length===0?null:t.jsx($l,{$compact:s,gap:2,wrap:"wrap","data-testid":"filter-badges",children:n.map((o,i)=>t.jsx(Dl,{filter:o,onChange:d=>r(i,d),onRemove:()=>a(i)},i))})},ar=e=>{const{isMovePending:s,isValidDropTarget:n}=pe()??{isMovePending:!1,isValidDropTarget:()=>!1},{active:r}=yn(),a=e.id==null?Kn:ai(e.id),o={kind:"folder-tree-target",id:e.id,name:e.name},i=jn({id:a,data:o,disabled:s}),d=n(e.id),u=i.isOver;return{droppable:i,isOver:u,showValidDropHighlight:u&&d,showInvalidDropCursor:u&&!d&&r!=null}},Al=600,El=({isOver:e,canExpand:s,onExpand:n})=>{c.useEffect(()=>{if(!e||!s)return;const r=setTimeout(n,Al);return()=>clearTimeout(r)},[e,s,n])},or=y.button`
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
`,Rl=y(I)`
  cursor: ${({$isMovePending:e,$isInvalidDropCursor:s})=>e?"wait":s?"not-allowed":"default"};
  pointer-events: ${({$isMovePending:e})=>e?"none":"auto"};
  border-radius: ${({theme:e})=>e.borderRadius};

  ${({$isValidDropTarget:e,theme:s})=>e&&xe`
      background: ${s.colors.primary100};
      outline: 1px dashed ${s.colors.primary600};
      outline-offset: -1px;
    `}
`,ir=(e,s,n=[])=>{for(const r of e){if(r.id===s)return n;if(r.children?.length){const a=r.id!=null?[...n,r.id]:n,o=ir(r.children,s,a);if(o!==null)return o}}return null},Tl=(e,s)=>{const[n,r]=c.useState(()=>new Set);c.useEffect(()=>{if(s==null)return;const d=ir(e,s);!d||d.length===0||r(u=>{const p=new Set(u);let g=!1;for(const h of d)p.has(h)||(p.add(h),g=!0);return g?p:u})},[e,s]);const a=c.useCallback(d=>{r(u=>{const p=new Set(u);return p.has(d)?p.delete(d):p.add(d),p})},[]),o=c.useCallback(d=>{r(u=>{if(u.has(d))return u;const p=new Set(u);return p.add(d),p})},[]);return{isExpanded:c.useCallback(d=>n.has(d),[n]),toggleExpanded:a,expandFolder:o}},lr=y.ul`
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
`,Fl=1.6,Ll=y(de)`
  &&[aria-disabled='true'] {
    background: transparent;
    border-color: transparent;
    opacity: 0.3;
  }
`,Ol=y(ft)`
  transform: rotate(${({$expanded:e})=>e?"0deg":"-90deg"});
  transition: transform 0.2s ease;
`,Pl=({id:e,name:s,folderChildren:n,level:r,currentFolderId:a,showActiveFolder:o,isExpanded:i,onToggle:d,onExpand:u,onSelect:p,isMovePending:g})=>{const{formatMessage:h}=L(),x=n.length>0,f=i(e),m=o&&a===e,{droppable:{setNodeRef:b},isOver:j,showValidDropHighlight:C,showInvalidDropCursor:k}=ar({id:e,name:s}),v=c.useCallback(()=>u(e),[e,u]);return El({isOver:j,canExpand:x&&!f,onExpand:v}),t.jsxs("li",{children:[t.jsxs(Rl,{ref:b,alignItems:"center",paddingLeft:`${r*Fl}rem`,gap:1,$isValidDropTarget:C,$isInvalidDropCursor:k,$isMovePending:g,children:[t.jsx(Ll,{label:x?h({id:l(f?"sidebar.tree.collapse":"sidebar.tree.expand"),defaultMessage:f?"Collapse {name}":"Expand {name}"},{name:s}):h({id:l("sidebar.tree.no-subfolders"),defaultMessage:"The folder {name} has no subfolders"},{name:s}),disabled:!x,onClick:w=>{w.stopPropagation(),d(e)},variant:"ghost",withTooltip:!1,"aria-expanded":x?f:void 0,children:t.jsx(Ol,{$expanded:f,fill:"neutral500"})}),t.jsx(z,{flex:"1",minWidth:0,children:t.jsx(or,{type:"button",$isActive:m,$isValidDropTarget:C,$isInvalidDropCursor:k,$isMovePending:g,"aria-current":m?"page":void 0,onClick:()=>p(e),"data-testid":`folder-tree-node-${e}`,"data-folder-id":e,children:t.jsx(Qe,{variant:"omega",fontWeight:m?"semiBold":"regular",children:s})})})]}),x&&f&&t.jsx(lr,{children:n.map(w=>t.jsx(dr,{node:w,level:r+1,currentFolderId:a,showActiveFolder:o,isExpanded:i,onToggle:d,onExpand:u,onSelect:p,isMovePending:g},w.id??w.name))})]})},dr=({node:e,...s})=>e.id==null?null:t.jsx(Pl,{...s,id:e.id,name:e.name??"",folderChildren:e.children??[]}),Nl=({currentFolderId:e,showActiveFolder:s=!0,onSelectFolder:n})=>{const{formatMessage:r}=L(),{data:a=[],isLoading:o,isError:i}=as(),{isExpanded:d,toggleExpanded:u,expandFolder:p}=Tl(a,e),{isMovePending:g}=pe()??{isMovePending:!1},h=s&&e==null,x=r({id:l("sidebar.home"),defaultMessage:"Home"}),{droppable:{setNodeRef:f},showValidDropHighlight:m,showInvalidDropCursor:b}=ar({id:null,name:x});return t.jsxs(Dt.Main,{"aria-label":r({id:l("sidebar.tree.aria-label"),defaultMessage:"Media library folders"}),children:[t.jsx(Dt.Header,{label:r({id:l("sidebar.title"),defaultMessage:"Media library"})}),t.jsx(Dt.Content,{children:t.jsxs(I,{direction:"column",alignItems:"stretch",gap:1,padding:3,children:[t.jsxs(or,{ref:f,type:"button",$isActive:h,$isValidDropTarget:m,$isInvalidDropCursor:b,$isMovePending:g,"aria-current":h?"page":void 0,onClick:()=>n(null),"data-testid":"folder-tree-home",children:[t.jsx(ea,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem"}),t.jsx(F,{variant:"omega",fontWeight:h?"semiBold":"regular",children:x})]}),t.jsxs(z,{marginTop:4,children:[t.jsxs(I,{alignItems:"center",gap:1,paddingTop:1,paddingBottom:1,paddingLeft:2,paddingRight:2,marginBottom:2,children:[t.jsx(Ce,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem",fill:"neutral500"}),t.jsx(F,{variant:"sigma",textColor:"neutral600",style:{textTransform:"uppercase"},children:r({id:l("sidebar.folders"),defaultMessage:"Folders"})})]}),o?t.jsx(I,{justifyContent:"center",padding:1,paddingTop:2,children:t.jsx($e,{children:r({id:l("sidebar.tree.loading"),defaultMessage:"Loading folders..."})})}):i?t.jsx(z,{padding:1,paddingTop:2,children:t.jsx(F,{variant:"pi",textColor:"danger600",children:r({id:l("sidebar.tree.error"),defaultMessage:"Could not load folders."})})}):a.length===0?t.jsx(z,{padding:1,paddingTop:2,children:t.jsx(F,{variant:"pi",textColor:"neutral500",children:r({id:l("sidebar.tree.empty"),defaultMessage:"No folders yet"})})}):t.jsx(lr,{children:a.map(j=>t.jsx(dr,{node:j,level:0,currentFolderId:e,showActiveFolder:s,isExpanded:d,onToggle:u,onExpand:p,onSelect:n,isMovePending:g},j.id??j.name))})]})]})})]})},Bl=({open:e,onClose:s,onUpload:n})=>{const{formatMessage:r}=L(),[a,o]=c.useState(""),[i,d]=c.useState(null),u=()=>{o(""),d(null),s()},p=async g=>{g.preventDefault();const{urls:h,error:x}=sa(a);if(x){d(x);return}d(null),u(),await n(h)};return t.jsx(se.Root,{open:e,onOpenChange:g=>!g&&u(),children:t.jsx(se.Content,{children:t.jsxs("form",{onSubmit:p,children:[t.jsx(se.Header,{children:t.jsx(se.Title,{children:r({id:l("modal.url.title"),defaultMessage:"Import from URL"})})}),t.jsx(se.Body,{children:t.jsxs(ne.Root,{error:i||void 0,hint:r({id:l("input.url.description"),defaultMessage:"Separate your URL links by a carriage return."}),children:[t.jsx(ne.Label,{children:r({id:l("input.url.label"),defaultMessage:"URL(s)"})}),t.jsx(ta,{name:"urls",minHeight:"unset",rows:Math.min(a.split(`
`).length,7),maxHeight:"10.5rem",placeholder:r({id:l("input.url.placeholder"),defaultMessage:"Empty"}),value:a,onChange:g=>{o(g.target.value),d(null)}}),t.jsx(ne.Hint,{}),t.jsx(ne.Error,{})]})}),t.jsxs(se.Footer,{children:[t.jsx(Z,{variant:"tertiary",onClick:u,children:r({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),t.jsx(Z,{type:"submit",children:r({id:l("modal.url.upload"),defaultMessage:"Upload"})})]})]})})})},_l="[data-strapi-main-content]",Ul=["[data-native-context-menu]","thead","a","button","input","textarea","select",'[contenteditable="true"]'].join(", "),zl={position:"fixed",width:0,height:0,minWidth:0,minHeight:0,padding:0,border:0,opacity:0,overflow:"hidden",pointerEvents:"none"},Kl={height:0},Hl=({onCreateFolder:e,onImportFiles:s,onImportFromUrl:n,disabled:r})=>{const{formatMessage:a}=L(),[o,i]=c.useState(null),[d,u]=c.useState(null),p=c.useCallback(g=>u(g),[]);return c.useEffect(()=>{const g=d?.closest(_l);if(!g||r)return;const h=x=>{x.target instanceof Element&&(x.target.closest(Ul)||(x.preventDefault(),i({x:x.clientX,y:x.clientY})))};return g.addEventListener("contextmenu",h),()=>g.removeEventListener("contextmenu",h)},[d,r]),t.jsxs(t.Fragment,{children:[t.jsx("div",{ref:p,style:Kl,"aria-hidden":!0}),!r&&t.jsxs(P.Root,{modal:!1,open:o!==null,onOpenChange:g=>{g||i(null)},children:[t.jsx(P.Trigger,{tabIndex:-1,endIcon:null,"aria-label":a({id:l("list.context-menu.label"),defaultMessage:"Media library actions"}),style:{...zl,top:o?.y??0,left:o?.x??0}}),t.jsxs(cs,{popoverPlacement:"bottom-start",zIndex:2,minWidth:"22rem",onCloseAutoFocus:g=>g.preventDefault(),children:[t.jsx(P.Item,{onSelect:e,startIcon:t.jsx(Ce,{}),children:a({id:l("folder.create.title"),defaultMessage:"New folder"})}),t.jsx(P.Item,{onSelect:s,startIcon:t.jsx(mn,{}),children:a({id:l("import-files"),defaultMessage:"File upload"})}),t.jsx(P.Item,{onSelect:n,startIcon:t.jsx(_e,{}),children:a({id:l("import-from-url"),defaultMessage:"File upload from URL"})})]})]})]})},_t={oldestUploads:{id:l("list.sort.oldest-uploads"),defaultMessage:"Oldest uploads"},mostRecentUpdates:{id:l("list.sort.most-recent-updates"),defaultMessage:"Most recent updates"}},Ut={nameAsc:{id:l("list.sort.name-asc"),defaultMessage:"A to Z"},nameDesc:{id:l("list.sort.name-desc"),defaultMessage:"Z to A"},sizeAsc:{id:l("list.sort.size-asc"),defaultMessage:"File size ascending"},sizeDesc:{id:l("list.sort.size-desc"),defaultMessage:"File size descending"}},Ys={top:{id:l("list.sort.folders-on-top"),defaultMessage:"On top"},mixed:{id:l("list.sort.folders-mixed"),defaultMessage:"Mixed with files"}},Vl=y(P.Trigger)``,Qs=y(P.Label)`
  width: 100%;
  display: block;
  background: ${({theme:e})=>e.colorScheme==="dark"?e.colors.neutral150:e.colors.neutral100};
  padding-inline: ${({theme:e})=>e.spaces[3]};
  border-radius: ${({theme:e})=>e.borderRadius};
`,Wl=({sort:e,showFoldersGroup:s=!0})=>{const{formatMessage:n}=L(),{trackUsage:r}=ve(),a=n({id:l("list.sort.trigger"),defaultMessage:"Sort: {active}"},{active:e.sortBy?n(_t[e.sortBy]):n(Ut[e.direction])}),o=t.jsx(mt,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem",fill:"primary600"});return t.jsxs(P.Root,{children:[t.jsx(Vl,{variant:"ghost",endIcon:t.jsx(ft,{"aria-hidden":!0}),children:a}),t.jsxs(P.Content,{popoverPlacement:"bottom-end",zIndex:2,maxHeight:"70vh",minWidth:"25rem",children:[t.jsx(Qs,{children:n({id:l("list.sort.section"),defaultMessage:"Sort"})}),Object.keys(_t).map(i=>t.jsx(P.Item,{role:"menuitemradio","aria-checked":e.sortBy===i,onSelect:d=>{d.preventDefault(),e.sortBy!==i&&r("didSortMediaLibraryElements",{location:re,sort:i}),e.setSortBy(e.sortBy===i?null:i)},endIcon:e.sortBy===i?o:null,children:n(_t[i])},i)),Object.keys(Ut).map(i=>t.jsx(P.Item,{role:"menuitemradio","aria-checked":e.direction===i,onSelect:d=>{d.preventDefault(),e.direction!==i&&r("didSortMediaLibraryElements",{location:re,sort:i}),e.setDirection(e.direction===i?null:i)},endIcon:e.direction===i?o:null,children:n(Ut[i])},i)),s&&t.jsxs(t.Fragment,{children:[t.jsx(P.Separator,{}),t.jsx(Qs,{children:n({id:l("list.sort.folders"),defaultMessage:"Folders"})}),Object.keys(Ys).map(i=>t.jsx(P.Item,{role:"menuitemradio","aria-checked":e.foldersPosition===i,onSelect:d=>{d.preventDefault(),e.setFoldersPosition(i)},endIcon:e.foldersPosition===i?o:null,children:n(Ys[i])},i))]})]})]})},ql=["createdAt","updatedAt","name","size"],Gl=e=>ql.includes(e),Yl="updatedAt:DESC",Ql=(e,s,n)=>e==="size"?(s.size??0)-(n.size??0):e==="name"?s.name.localeCompare(n.name):(s[e]??"").localeCompare(n[e]??""),Xl=(e=Yl)=>{const[s,n]=e.split(":"),r=Gl(s),a=r?s:"updatedAt",i=(r?n:"DESC")==="ASC"?1:-1;return(d,u)=>{const p=Ql(a,d,u);return p!==0?i*p:i*(d.id-u.id)}},Zl=({assets:e,uploaded:s,sort:n,hasNextPage:r})=>{if(s.length===0)return e;const a=new Set(e.map(u=>u.id)),o=Xl(n),i=s.filter(u=>!a.has(u.id)).sort(o);if(i.length===0)return e;const d=[...e];for(const u of i){const p=d.findIndex(g=>o(u,g)<0);if(p===-1){if(r)continue;d.push(u)}else d.splice(p,0,u)}return d},cr=20,Jl=10,ed=e=>{const s=new Map;for(const n of Object.keys(e).map(Number).sort((r,a)=>r-a))for(const r of e[n])s.set(r.id,r);return[...s.values()]},td=e=>Object.keys(e).reduce((s,n)=>Math.max(s,Number(n)),1),sd=({queryArgs:e,page:s,onRefreshed:n})=>{const{currentData:r}=os({...e,page:s,pageSize:cr}),a=r?.results;return c.useEffect(()=>{a&&n(s,a)},[a,s,n]),null},nd=({folder:e=null,sort:s,search:n,filters:r,enabled:a=!0}={})=>{const o={folder:e,sort:s,search:n,filters:r},i=JSON.stringify(o),d=JSON.stringify({folder:e,sort:s,filters:r}),[u,p]=c.useState({queryKey:i,page:1}),[g,h]=c.useState({queryKey:i,listKey:d,pages:{}}),x=c.useRef(new Map),f=u.queryKey!==i,m=f?x.current.get(i):void 0;let b;f?m?b=td(m.pages):b=1:b=u.page,f&&(p({queryKey:i,page:b}),m&&h(m));const{currentData:j,isLoading:C,isFetching:k,error:v,startedTimeStamp:w,fulfilledTimeStamp:A}=os({...o,page:b,pageSize:cr},{skip:!a}),M=g.queryKey===i;!m&&j&&(!M||g.pages[b]!==j.results)&&h(M?{...g,pages:{...g.pages,[b]:j.results},pagination:j.pagination}:{queryKey:i,listKey:d,pages:{[b]:j.results},pagination:j.pagination});const D=c.useCallback((K,Y)=>{h(ee=>ee.queryKey!==i||ee.pages[K]===Y?ee:{...ee,pages:{...ee.pages,[K]:Y}})},[i]),_=c.createElement(c.Fragment,null,Array.from({length:Math.max(0,b-1)},(K,Y)=>Y+1).map(K=>c.createElement(sd,{key:`${i}:${K}`,queryArgs:o,page:K,onRefreshed:D})));c.useEffect(()=>{if(Object.keys(g.pages).length===0)return;const K=x.current;for(K.delete(g.queryKey),K.set(g.queryKey,g);K.size>Jl;){const Y=K.keys().next();if(Y.done)break;K.delete(Y.value)}},[g]);const R=na(),X=ra(),N=c.useRef(e);c.useEffect(()=>{const K=N.current;if(N.current=e,K===e)return;const Y=X.getState()[qe.reducerPath],ee=qe.internalActions.removeQueryResult;Object.keys(Y?.queries??{}).forEach(oe=>{if(!oe.startsWith("getAssets("))return;let be;try{be=JSON.parse(oe.slice(10,-1))}catch{return}be.folder===K&&R(ee({queryCacheKey:oe}))})},[e,R,X]);const S=g.listKey!==d,$=c.useMemo(()=>S?[]:ed(g.pages),[S,g.pages]),E=j?b<j.pagination.pageCount:!1,q=aa(oa),G=!n&&(r?.length??0)===0,W=A!==void 0&&w!==void 0&&A>w?w:void 0,O=c.useMemo(()=>{if(!G||q.length===0)return $;const K=q.filter(({asset:Y,completedAt:ee})=>Ge(Y.folder)===e&&(W===void 0||ee>W));return Zl({assets:$,uploaded:K.map(({asset:Y})=>Y),sort:s,hasNextPage:E})},[G,q,$,e,s,E,W]),B=k&&b>1,U=S||C&&O.length===0,J=c.useCallback(()=>{p(K=>({queryKey:i,page:(K.queryKey===i?K.page:1)+1}))},[i]);return a?{assets:O,subscribers:_,pagination:j?.pagination??g.pagination,isLoading:U,isFetchingMore:B,hasNextPage:E,fetchNextPage:J,error:v}:{assets:[],subscribers:null,pagination:void 0,isLoading:!1,isFetchingMore:!1,hasNextPage:!1,fetchNextPage:J,error:void 0}},rd=({hasNextPage:e,isFetchingMore:s,onLoadMore:n,options:r})=>{const a=c.useRef(null),o=c.useRef(null),i=c.useRef(r);i.current=r;const d=c.useRef(n);d.current=n;const u=c.useRef(e);u.current=e;const p=c.useRef(s);p.current=s;const g=c.useCallback(h=>{if(a.current?.disconnect(),o.current=h,!h)return;const x=new IntersectionObserver(([f])=>{f.isIntersecting&&u.current&&!p.current&&d.current()},i.current);x.observe(h),a.current=x},[]);return c.useEffect(()=>()=>a.current?.disconnect(),[]),c.useEffect(()=>{s||!a.current||!o.current||(a.current.unobserve(o.current),a.current.observe(o.current))},[s]),g},ad="[data-strapi-main-content]",od=2e3,id=10,ld=e=>{const s=c.useRef(new Map),n=c.useRef(null),r=c.useRef(null),a=c.useRef(e),o=c.useRef(null),i=c.useCallback(d=>{r.current?.(),r.current=null,n.current=null;const u=d?.closest(ad);if(!u)return;const p=()=>{const g=s.current;for(g.delete(a.current),g.set(a.current,u.scrollTop);g.size>id;){const h=g.keys().next().value;if(h===void 0)break;g.delete(h)}};u.addEventListener("scroll",p,{passive:!0}),n.current=u,r.current=()=>u.removeEventListener("scroll",p)},[]);return c.useEffect(()=>()=>r.current?.(),[]),c.useLayoutEffect(()=>{const d=n.current;if(!d)return;a.current!==e&&(a.current=e,o.current={top:s.current.get(e)??0,deadline:Date.now()+od});const u=o.current;if(u){if(Date.now()>u.deadline){o.current=null;return}d.scrollTop=u.top,d.scrollTop>=u.top&&(o.current=null)}}),i},ys={oldestUploads:"createdAt:ASC",mostRecentUpdates:"updatedAt:DESC"},bs={nameAsc:"name:ASC",nameDesc:"name:DESC",sizeAsc:"size:ASC",sizeDesc:"size:DESC"},Qt="mostRecentUpdates",Xs=Object.fromEntries(Object.entries(ys).map(([e,s])=>[s,e])),Zs=Object.fromEntries(Object.entries(bs).map(([e,s])=>[s,e])),dd=e=>{for(const s of(e??"").split(",")){if(s in Xs)return{sortBy:Xs[s],direction:null,isExplicit:!0};if(s in Zs)return{sortBy:null,direction:Zs[s],isExplicit:!0}}return{sortBy:Qt,direction:null,isExplicit:!1}},Js=(e,s)=>[e&&ys[e],s&&bs[s]].filter(r=>!!r).join(","),cd=()=>{const[{query:e},s]=Re(),{sortBy:n,direction:r,isExplicit:a}=dd(e?.sort),o=e?.folders==="mixed"?"mixed":"top",i=(m,b)=>{m===null&&b===null&&(m=Qt);const j=Js(m,b);s(m===Qt&&b===null?he(e,{sort:void 0}):he(e,{sort:j}))},d=m=>i(m,null),u=m=>i(null,m),p=m=>{s(m==="mixed"?he(e,{folders:"mixed"}):he(e,{folders:void 0}))},g=Js(n,r),x=[n&&ys[n],r&&!r.startsWith("size")?bs[r]:null].filter(m=>!!m),f=a&&x.length>0?x.join(","):"name:ASC";return{sortBy:n,direction:r,foldersPosition:o,assetsSort:g,foldersSort:f,setSortBy:d,setDirection:u,setFoldersPosition:p}},ud=({folderId:e,search:s,sort:n,filter:r})=>JSON.stringify({folderId:e,search:s,sort:n,filter:r}),en=(e,s)=>{switch(s){case"createdAt":case"updatedAt":return e[s]?new Date(e[s]).getTime():0;case"size":return e.size??0;case"name":default:return(e.name??"").toLowerCase()}},gd=e=>{const s=e.split(",").map(n=>n.trim()).filter(Boolean).map(n=>{const[r,a]=n.split(":");return{field:r,desc:a?.toUpperCase()==="DESC"}});return(n,r)=>{for(const{field:a,desc:o}of s){const i=en(n,a),d=en(r,a);let u;if(typeof i=="string"||typeof d=="string"?u=String(i)<String(d)?-1:String(i)>String(d)?1:0:u=i-d,u!==0)return o?-u:u}return 0}},pd=({folders:e,assets:s,sort:n,hasNextPage:r})=>{const a=gd(n),o=[...e].sort(a),i=s[s.length-1],d=!r||!i?r?[]:o:o.filter(g=>a(g,i)<=0),u=[];let p=0;for(const g of s){for(;p<d.length&&a(d[p],g)<=0;)u.push({kind:"folder",folder:d[p]}),p+=1;u.push({kind:"asset",asset:g})}for(;p<d.length;)u.push({kind:"folder",folder:d[p]}),p+=1;return u},hd={threshold:0,rootMargin:"0px 0px -1px 0px"},fd={threshold:0},md={id:l("header.content.item-count"),defaultMessage:"{count, plural, =1 {# item} other {# items}}"},zt={both:{id:l("header.search-results.count"),defaultMessage:"{numberFolders, plural, one {1 folder} other {# folders}} - {numberAssets, plural, one {1 asset} other {# assets}}"},folders:{id:l("header.search-results.count.folders"),defaultMessage:"{numberFolders, plural, one {1 folder} other {# folders}}"},assets:{id:l("header.search-results.count.assets"),defaultMessage:"{numberAssets, plural, =0 {0 assets} one {1 asset} other {# assets}}"}},xd=(e,s)=>e===0?zt.assets:s===0?zt.folders:zt.both,yd=({view:e,folders:s,isLoadingFolders:n,assets:r,isLoadingAssets:a,isFetchingMore:o,hasNextPage:i,fetchNextPage:d,error:u,locations:p,searchQuery:g,assetsSort:h,foldersPosition:x,hasActiveFilters:f,onClearFilters:m,onAssetItemClick:b,onAddAssets:j,canAddAssets:C,onClearSearch:k})=>{const{formatMessage:v}=L(),w=e===We.GRID,A=a||n,M=c.useMemo(()=>x==="mixed"&&!w?pd({folders:s,assets:r,sort:h,hasNextPage:i}):null,[x,w,s,r,h,i]),D=ds({folders:s,assets:r,mixedItems:M}),_=rd({hasNextPage:i,isFetchingMore:o,onLoadMore:d,options:hd});return A?t.jsx(I,{justifyContent:"center",padding:8,children:t.jsx($e,{children:v({id:"app.loading",defaultMessage:"Loading..."})})}):u?t.jsx(z,{padding:8,children:t.jsx(F,{textColor:"danger600",children:v({id:l("list.assets.error"),defaultMessage:"An error occurred while fetching assets."})})}):s.length===0&&r.length===0?f&&!g?t.jsx(tl,{onClearFilters:m}):t.jsx(el,{onAddAssets:j,canAddAssets:C,searchQuery:g,onClearSearch:k}):t.jsxs(t.Fragment,{children:[w?t.jsx(Ai,{folders:s,assets:r,renderedKeys:D,onAssetItemClick:b}):t.jsx(Ui,{assets:r,folders:s,mixedItems:M,renderedKeys:D,onAssetItemClick:b}),t.jsx("div",{ref:_,style:{height:1}}),o&&t.jsx(I,{justifyContent:"center",padding:4,children:t.jsx($e,{children:v({id:l("list.assets.loading-more"),defaultMessage:"Loading more assets..."})})}),t.jsx(Wi,{assets:r,renderedKeys:D,locations:p})]})},bd=({listQueryKey:e})=>{const{clear:s}=ye();return c.useEffect(()=>{s()},[e,s]),null},jd=y(ha)`
  display: flex;
  padding: ${({theme:e})=>e.spaces[1]};
  background: ${({theme:e})=>e.colors.neutral100};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
`,tn=y(fa)`
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
`,wd=y(z)`
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
`,Md=y(I)`
  justify-content: space-between;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spaces[4]};

  h1 {
    font-size: 1.8rem;
  }
`,Cd=y(I)`
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
`,ur=y(I)`
  align-items: center;
  gap: ${({theme:e})=>e.spaces[3]};
`,vd=y(ur)``,Sd=y(ur)`
  justify-content: space-between;

  ${({theme:e})=>e.breakpoints.large} {
    justify-content: flex-end;
    flex: 0 0 auto;
  }
`,Id=y(z)`
  flex: 1;

  ${({theme:e})=>e.breakpoints.large} {
    flex: 0 1 auto;
  }
`,sn=y.span`
  display: none;

  ${({theme:e})=>e.breakpoints.large} {
    display: inline;
  }
`,Dd=()=>{const{formatMessage:e}=L(),{openDetails:s}=On(),{canCreate:n,canUpdate:r}=ge(),{currentFolderId:a,navigateToFolderId:o,navigateToRoot:i}=Ze(),{error:d}=rs({id:a},{skip:a===null});c.useEffect(()=>{d?.name==="NotFoundError"&&i()},[d,i]);const{title:u,itemCount:p}=kn(a),{searchQuery:g,isSearching:h,clearSearch:x}=Qn(),f=cd(),m=ul(),b=c.useMemo(()=>ml(m.filters,new Date),[m.serialized]),{assets:j,subscribers:C,pagination:k,isLoading:v,isFetchingMore:w,hasNextPage:A,fetchNextPage:M,error:D}=nd({folder:a,search:g||void 0,sort:f.assetsSort,filters:b.fileClauses,enabled:b.showFiles}),{data:_=[],isLoading:R}=Oa({parentId:a,search:g||void 0,sort:f.foldersSort,filters:b.folderClauses},{skip:!b.showFolders}),X=c.useMemo(()=>b.showFolders?_:[],[b.showFolders,_]),N=c.useMemo(()=>Na(j,X),[j,X]),S=e(md,{count:p}),$=e({id:l("header.search-results"),defaultMessage:'Search results for "{query}"'},{query:g}),E=X.length,q=k?.total??0,G=e(xd(E,q),{numberFolders:E,numberAssets:q});let W;h?W=`${$} (${G})`:u?W=`${u} (${S})`:W=e({id:"app.loading",defaultMessage:"Loading..."});const[O,B]=c.useState(!1),[U,J]=ia(Wa.view,We.GRID),K=U===We.GRID,[Y,ee]=c.useState(!1),oe=c.useRef(null),be=c.useRef(null),[ze,bt]=c.useState(!1),jt=c.useCallback(te=>bt(!te),[]),wt=la(jt,fd),[Mt]=da(),[Ct]=ca(),{data:je}=ss(),Ke=je?.data?.concurrentUploadRequests??1,He=xt(),{trackUsage:T}=ve(),Q=async(te,Se)=>{if(te.length===0)return;const St=te.reduce((Le,gr)=>{const ws=ma(gr.type);return Le[ws]=(Le[ws]??0)+1,Le},{});T("willAddMediaLibraryAssets",{location:re,...St});const It=new FormData,js=[];te.forEach(Le=>{It.append("files",Le),js.push({name:Le.name,caption:null,alternativeText:null,folder:Se})}),It.append("fileInfo",JSON.stringify(js));try{await Mt({formData:It,totalFiles:te.length,concurrency:Ke,generateAiMetadata:!!He}).unwrap()}catch{}},H=()=>{oe.current?.click()},ie=async te=>{const Se=te.target.files;Se&&Se.length>0&&(T("didSelectFile",{source:"computer",location:re}),await Q(Array.from(Se),a)),te.target.value=""},le=async te=>{n&&(T("didSelectFile",{source:"computer",location:re}),await Q(te,a))},we=async te=>{T("didSelectFile",{source:"url",location:re}),T("willAddMediaLibraryAssets",{location:re});try{await Ct({urls:te,folderId:a,generateAiMetadata:!!He}).unwrap()}catch{}},ce=ud({folderId:a,search:g,sort:`${f.assetsSort};folders=${f.foldersPosition}`,filter:m.serialized||null}),vt=ld(ce);return t.jsxs(t.Fragment,{children:[t.jsx(Gi,{onDrop:le,disabled:!n,children:t.jsx(Ho,{disabled:!r,children:t.jsx(Wo,{children:t.jsxs(gi,{locations:N,children:[t.jsx(bd,{listQueryKey:ce}),t.jsx(Ms.Root,{sideNav:t.jsx(Nl,{currentFolderId:a,showActiveFolder:!h,onSelectFolder:o}),children:t.jsx(xn.Main,{children:t.jsxs(z,{ref:be,children:[t.jsx(Te,{children:t.jsx("input",{type:"file",ref:oe,onChange:ie,multiple:!0})}),t.jsx(z,{ref:wt,height:0,"aria-hidden":!0}),t.jsx(z,{ref:vt,height:0,"aria-hidden":!0}),t.jsx(Hl,{disabled:!n,onCreateFolder:()=>B(!0),onImportFiles:H,onImportFromUrl:()=>ee(!0)}),t.jsxs(wd,{$compact:ze,children:[t.jsxs(Md,{children:[t.jsx(F,{variant:"alpha",tag:"h1",children:W}),n&&t.jsxs(ua,{popoverPlacement:"bottom-end",variant:"default",endIcon:t.jsx(ft,{}),label:e({id:l("new"),defaultMessage:"New"}),children:[t.jsx($t,{onSelect:()=>B(!0),startIcon:t.jsx(Ce,{}),children:e({id:l("folder.create.title"),defaultMessage:"New folder"})}),t.jsx($t,{onSelect:H,startIcon:t.jsx(mn,{}),children:e({id:l("import-files"),defaultMessage:"File upload"})}),t.jsx($t,{onSelect:()=>ee(!0),startIcon:t.jsx(_e,{}),children:e({id:l("import-from-url"),defaultMessage:"File upload from URL"})})]})]}),t.jsxs(Cd,{$compact:ze,children:[t.jsxs(vd,{children:[t.jsx(z,{children:t.jsx(Ml,{listFilters:m})}),t.jsx(Id,{children:t.jsx(Ti,{})})]}),t.jsxs(Sd,{children:[t.jsx(z,{children:t.jsx(Wl,{sort:f,showFoldersGroup:!K})}),t.jsxs(jd,{type:"single",value:K?"grid":"table",onValueChange:te=>te&&J(te==="grid"?We.GRID:We.TABLE),"aria-label":e({id:l("view.switch.label"),defaultMessage:"View options"}),children:[t.jsxs(tn,{value:"table","aria-label":e({id:l("view.table"),defaultMessage:"Table view"}),children:[t.jsx(ga,{}),t.jsx(sn,{children:e({id:l("view.table"),defaultMessage:"Table view"})})]}),t.jsxs(tn,{value:"grid","aria-label":e({id:l("view.grid"),defaultMessage:"Grid view"}),children:[t.jsx(pa,{}),t.jsx(sn,{children:e({id:l("view.grid"),defaultMessage:"Grid view"})})]})]})]})]}),t.jsx(kl,{listFilters:m,compact:ze})]}),t.jsxs(Ms.Content,{children:[C,t.jsxs(Xi,{children:[t.jsx(Ji,{uploadDropZoneRef:be,folderName:u}),t.jsx(yd,{view:U,folders:X,isLoadingFolders:R,assets:j,isLoadingAssets:v,isFetchingMore:w,hasNextPage:A,fetchNextPage:M,error:D,locations:N,searchQuery:g,assetsSort:f.assetsSort,foldersPosition:f.foldersPosition,hasActiveFilters:m.filters.length>0,onClearFilters:m.clearFilters,onAssetItemClick:s,onAddAssets:H,canAddAssets:n,onClearSearch:x})]})]})]})})})]})})})}),t.jsx(Gn,{open:O,mode:"create",parentFolderName:u,parentFolderId:a,onClose:()=>B(!1)}),t.jsx(Bl,{open:Y,onClose:()=>ee(!1),onUpload:we}),t.jsx(Po,{})]})},Td=()=>{const{formatMessage:e}=L(),s=e({id:l("plugin.name"),defaultMessage:"Media Library"});return t.jsxs(t.Fragment,{children:[t.jsx(xn.Title,{children:s}),t.jsx(xa,{children:t.jsx(ya,{index:!0,element:t.jsx(Dd,{})})})]})};export{Td as BetaMediaLibrary};
