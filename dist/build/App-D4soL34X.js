import{a as L,hd as an,j as t,S as _,dr as Xt,g as I,A as R,he as l,hf as qe,df as rn,B as ha,dc as fa,b as ma,r as c,hg as on,g4 as Me,hh as xa,f5 as ya,hi as ba,hj as ja,hk as wa,hl as Ma,hm as Ca,hn as it,u as Re,k as $e,y,v as me,fM as Sa,ho as fe,ci as va,eT as Ia,hp as ln,hq as Da,hr as $a,d as de,hs as _e,T as ne,H as Z,ht as ka,w as he,hu as De,bV as Te,hv as Aa,hw as Ea,hx as Ra,E as Ta,hy as Fa,hz as Kt,cA as Zt,R as dn,b3 as cn,bD as Jt,b1 as un,b2 as lt,bl as V,bT as gt,J as pt,cZ as es,fF as gn,dT as pn,cB as P,cy as se,dZ as hn,hA as ts,gi as Ce,n as La,M as Je,bU as Fe,dA as Oa,fS as xe,hB as Qe,dx as Pa,dy as Na,c as fn,hC as Ba,Y as _a,Q as Ua,h as ss,e_ as za,f0 as Ka,f2 as Ha,eZ as Va,e$ as Wa,f1 as qa,hD as Ga,b4 as Ya,dh as Qa,F as ht,K as mn,hE as Xa,fL as Za,gl as Ja,aa as er,fW as ft,I as mt,dQ as ke,cQ as Dt,hF as tr,bO as sr,hG as nr,an as xn,p as ar,hH as rr,hI as or,hJ as ir,hK as lr,hL as dr,hM as cr,L as Cs,P as yn,e2 as ur,hN as $t,gx as gr,gy as pr,hO as hr,hP as fr,fY as mr,W as xr,X as yr}from"./strapi-qWn5ezYw.js";import{g as br}from"./users-CHXWXr2I.js";import{l as jr,m as wr,D as Mr,p as Cr,k as Sr,P as vr,u as bn,f as jn,e as wn}from"./core.esm-D6lrk0Xg.js";const Ir=()=>{const{formatMessage:e}=L(),[s,n]=an("STRAPI_UPLOAD_LIBRARY_BETA_NOTICE_DISMISSED",!1);return s?null:t.jsx(_,{paddingBottom:4,children:t.jsx(Xt,{variant:"default",onClose:()=>n(!0),closeLabel:e({id:l("beta.notice.close"),defaultMessage:"Close"}),title:e({id:l("plugin.name"),defaultMessage:"Media Library"}),children:t.jsxs(I,{tag:"span",gap:2,alignItems:"center",children:[t.jsx(_,{tag:"span",background:"neutral150",hasRadius:!0,paddingLeft:2,paddingRight:2,shrink:0,children:t.jsx(R,{variant:"sigma",textColor:"neutral600",children:e({id:l("beta.badge"),defaultMessage:"Beta"})})}),t.jsx(R,{tag:"span",children:e({id:l("beta.notice.content"),defaultMessage:"This is a beta version of the Media Library. Some features are still in progress — please report any issue you run into."})})]})})})},Dr=["image/png","image/jpeg","image/webp","image/heic","image/heif"],Mn=e=>Dr.includes(e),$r=20,Ss=$r*2,kr=qe.injectEndpoints({endpoints:e=>({getUploadSettings:e.query({query:()=>({url:"/upload/settings",method:"GET"})})})}),{useGetUploadSettingsQuery:ns}=kr,xt=e=>{const s=rn(),{data:n}=ns();return!s||!(n?.data?.aiMetadata??!1)?!1:e===void 0?!0:Mn(e.mime)},{main:Ad,...Ar}=fa,ge=()=>{const{allowedActions:e,isLoading:s}=ha(Ar);return{isLoading:s,canCreate:!!e.canCreate,canUpdate:!!e.canUpdate,canDownload:!!e.canDownload,canCopyLink:!!e.canCopyLink}},Er="v2",ae="upload",Se=()=>{const{trackUsage:e}=ma(),{data:s}=ns(),n=rn();return{trackUsage:c.useCallback((r,o)=>e(r,{...o,...n?{isAiMediaLibraryConfigured:!!s?.data?.aiMetadata}:{},mediaLibraryVersion:Er}),[e,n,s])}},as=e=>encodeURIComponent(e).replace(/\+/g,"%2B"),Rr=e=>typeof e=="object"&&e!==null&&"data"in e,vs=e=>Rr(e)?e.data:e,Tr=qe.injectEndpoints({endpoints:e=>({getFolders:e.query({query:(s={})=>{const{parentId:n,sort:a,search:r,filters:o=[]}=s,i={sort:a??"name:ASC",populate:{parent:!0}};if(r)i._q=as(r),o.length>0&&(i.filters={$and:[...o]});else{const d=n!=null?{parent:{id:n}}:{parent:{id:{$null:!0}}};i.filters={$and:[d,...o]}}return{url:"/upload/folders",method:"GET",config:{params:i}}},transformResponse:s=>vs(s),providesTags:s=>s?[...s.map(({id:n})=>({type:"Folder",id:n})),{type:"Folder",id:"LIST"}]:[{type:"Folder",id:"LIST"}]}),createFolder:e.mutation({query:s=>({url:"/upload/folders",method:"POST",data:s}),transformResponse:s=>s.data,invalidatesTags:[{type:"Folder",id:"LIST"},{type:"Folder",id:"STRUCTURE"}]}),updateFolder:e.mutation({query:({id:s,...n})=>({url:`/upload/folders/${s}`,method:"PUT",data:n}),transformResponse:s=>s.data,invalidatesTags:(s,n,{id:a})=>[{type:"Folder",id:a},{type:"Folder",id:"LIST"},{type:"Folder",id:"STRUCTURE"}]}),getFolderStructure:e.query({query:()=>({url:"/upload/folder-structure",method:"GET"}),transformResponse:s=>s?.data??s??[],providesTags:[{type:"Folder",id:"STRUCTURE"}]}),getAllFolders:e.query({query:()=>({url:"/upload/folders",method:"GET"}),transformResponse:s=>vs(s??[]),providesTags:s=>s?[...s.map(({id:n})=>({type:"Folder",id:n})),{type:"Folder",id:"LIST"}]:[{type:"Folder",id:"LIST"}]}),getFolder:e.query({query:({id:s})=>({url:`/upload/folders/${s}`,method:"GET",config:{params:{populate:{parent:{populate:{parent:"*"}},children:{count:!0},files:{count:!0}}}}}),transformResponse:s=>s.data,providesTags:(s,n,{id:a})=>[{type:"Folder",id:a},{type:"Folder",id:"LIST"}]}),bulkMove:e.mutation({query:({fileIds:s=[],folderIds:n=[],destinationFolderId:a})=>({url:"/upload/actions/bulk-move",method:"POST",data:{fileIds:s,folderIds:n,destinationFolderId:a}}),transformResponse:s=>s.data,invalidatesTags:[{type:"Asset",id:"LIST"},{type:"Folder",id:"LIST"},{type:"Folder",id:"STRUCTURE"}]})})}),{useCreateFolderMutation:Fr,useUpdateFolderMutation:Lr,useGetFoldersQuery:Or,useGetFolderQuery:rs,useGetAllFoldersQuery:Pr,useGetFolderStructureQuery:os,useBulkMoveMutation:Cn}=Tr,Ge=e=>e==null?null:typeof e=="object"?e.id??null:typeof e=="number"?e:Number(e)||null,Sn={fileFolderId:()=>{},folderParentId:()=>{}},Nr=(e,s)=>{const n=new Map,a=new Map;return e.forEach(r=>{n.set(r.id,Ge(r.folder))}),s.forEach(r=>{a.set(r.id,Ge(r.parent))}),{fileFolderId:r=>n.get(r),folderParentId:r=>a.get(r)}},dt=(e,s,n,a)=>{const r=s==="file"?e.fileFolderId(n):e.folderParentId(n);return r===void 0?a:r},Br=e=>{if(!e||typeof e!="object")return;const{message:s}=e;return typeof s=="string"&&s.length>0?s:void 0},yt=()=>{const{formatMessage:e,messages:s}=L();return c.useCallback((n,a)=>{const r=Br(n);if(!r)return a;const o=l(`apiError.${r}`);return s[o]?e({id:o}):r},[e,s])},_r=qe.injectEndpoints({endpoints:e=>({getAssets:e.query({query:(s={})=>{const{folder:n,search:a,filters:r=[],...o}=s,i={...o};if(a)i._q=as(a),r.length>0&&(i.filters={$and:[...r]});else{const d=n!=null?{folder:{id:n}}:{folder:{id:{$null:!0}}};i.filters={$and:[d,...r]}}return{url:"/upload/files",method:"GET",config:{params:i}}},transformResponse:s=>s,providesTags:s=>s?[...s.results.map(({id:n})=>({type:"Asset",id:n})),{type:"Asset",id:"LIST"}]:[{type:"Asset",id:"LIST"}]}),getAsset:e.query({query:s=>({url:`/upload/files/${s}`,method:"GET"}),providesTags:(s,n,a)=>[{type:"Asset",id:a}]}),updateAsset:e.mutation({query:({id:s,fileInfo:n})=>{const a=new FormData;return a.append("fileInfo",JSON.stringify(n)),{url:`/upload/files/${s}`,method:"PUT",data:a}},invalidatesTags:(s,n,{id:a})=>[{type:"Asset",id:a},{type:"Asset",id:"LIST"},{type:"Folder",id:"LIST"}]}),replaceAsset:e.mutation({query:({id:s,file:n,fileInfo:a})=>{const r=new FormData;return r.append("files",n),a&&r.append("fileInfo",JSON.stringify(a)),{url:`/upload/files/${s}/replace`,method:"POST",data:r}},invalidatesTags:(s,n,{id:a})=>[{type:"Asset",id:a},{type:"Asset",id:"LIST"}]}),deleteAsset:e.mutation({query:s=>({url:`/upload/files/${s}`,method:"DELETE"}),invalidatesTags:(s,n,a)=>[{type:"Asset",id:a},{type:"Asset",id:"LIST"},{type:"Folder",id:"LIST"}]}),bulkDeleteItems:e.mutation({query:({fileIds:s,folderIds:n})=>({url:"/upload/actions/bulk-delete",method:"POST",data:{fileIds:s,folderIds:n}}),invalidatesTags:[{type:"Asset",id:"LIST"},{type:"Folder",id:"LIST"},{type:"Folder",id:"STRUCTURE"}]})})}),{useGetAssetsQuery:is,useGetAssetQuery:Ur,useUpdateAssetMutation:zr,useReplaceAssetMutation:vn,useDeleteAssetMutation:Kr,useBulkDeleteItemsMutation:Hr}=_r,In=async(e,s)=>{const a=await(await fetch(e)).blob(),r=window.URL.createObjectURL(a),o=document.createElement("a");o.href=r,o.setAttribute("download",s),o.click(),window.URL.revokeObjectURL(r)},Vr={pdf:Ca,csv:Ma,xls:wa,zip:ja},Xe=(e,s)=>{const n=on(s);return e?.includes(Me.Image)?xa:e?.includes(Me.Video)?ya:e?.includes(Me.Audio)?ba:n?Vr[n]||it:it},Wr={view:"STRAPI_UPLOAD_LIBRARY_VIEW"},We={GRID:0,TABLE:1},Dn="data-asset-details-trigger",$n={[Dn]:""},kn="data-asset-item-control",ct={[kn]:""},qr=`[${kn}]`,Gr=`[${Dn}]`,Is=[{name:"name",label:{id:l("list.table.header.name"),defaultMessage:"name"}},{name:"createdAt",label:{id:l("list.table.header.creationDate"),defaultMessage:"creation date"}},{name:"updatedAt",label:{id:l("list.table.header.lastModified"),defaultMessage:"last modified"}},{name:"size",label:{id:l("list.table.header.size"),defaultMessage:"size"}},{name:"actions",label:{id:l("list.table.header.actions"),defaultMessage:"actions"},isVisuallyHidden:!0}],An=e=>{const{formatMessage:s}=L(),{data:n,isLoading:a}=rs({id:e},{skip:e===null}),{data:r,isLoading:o}=is({folder:null,pageSize:1},{skip:e!==null}),i=s({id:l("plugin.home"),defaultMessage:"Home"});return e===null?o?{title:i,itemCount:0}:{title:i,itemCount:r?.pagination?.total??0}:a||!n?{title:"",itemCount:0}:{title:n.name,itemCount:n.files?.count??0}},ot="assetId",En=e=>{const s=e?parseInt(e,10):NaN;return Number.isNaN(s)?null:s},Yr=()=>{const[{query:e}]=Re();return En(e?.[ot])!==null},Qr=y(I)`
  position: absolute;
  inset: 0;
  z-index: ${({$zIndex:e})=>e};
  align-items: center;
  justify-content: center;
  background: ${({theme:e})=>e.colors.neutral0};
  opacity: 0.7;
`,Rn=({children:e,zIndex:s=20,hideLabel:n=!1})=>t.jsx(Qr,{$zIndex:s,children:t.jsx($e,{small:n,children:e})}),Xr=1,Zr=({anchorX:e,anchorY:s,point:n,aspectRatio:a})=>{let r=Math.abs(n.x-e),o=Math.abs(n.y-s);a&&(r/a>=o?o=r/a:r=o*a);const i=n.x<e?e-r:e,d=n.y<s?s-o:s;return{x:i,y:d,width:r,height:o}},Jr=()=>{const[e,s]=c.useState({width:0,height:0}),[n,a]=c.useState({x:0,y:0,width:0,height:0}),[r,o]=c.useState(null),i=c.useRef(null),d=c.useCallback(f=>{i.current=f;const m={width:f.naturalWidth,height:f.naturalHeight};s(m),a({x:0,y:0,width:m.width,height:m.height})},[]),u=(f,m,b)=>Math.min(b,Math.max(m,f)),p=c.useCallback(f=>{a(m=>{const b=e.width-m.x,j=e.height-m.y;let C=f.width!==void 0?u(f.width,1,b):m.width,k=f.height!==void 0?u(f.height,1,j):m.height;return r&&(f.width!==void 0?k=u(C/r,1,j):f.height!==void 0&&(C=u(k*r,1,b))),{...m,width:C,height:k}})},[e.width,e.height,r]),g=c.useCallback(f=>{a(m=>{const b=f.x!==void 0?u(f.x,0,e.width-m.width):m.x,j=f.y!==void 0?u(f.y,0,e.height-m.height):m.y;return{...m,x:b,y:j}})},[e.width,e.height]),h=c.useCallback(f=>{o(f),f&&a(m=>{const b=e.width-m.x,j=e.height-m.y;let C=m.width,k=C/f;return k>j&&(k=j,C=k*f),C>b&&(C=b,k=C/f),{...m,width:Math.round(C),height:Math.round(k)}})},[e.width,e.height]),x=c.useCallback((f,m,b)=>new Promise((j,C)=>{const k=i.current;if(!k){C(new Error("Image not ready: call init() before produceFile()."));return}const S=document.createElement("canvas");S.width=Math.max(1,Math.round(n.width)),S.height=Math.max(1,Math.round(n.height));const w=S.getContext("2d");if(!w){C(new Error("Could not get a 2D canvas context to crop the image."));return}w.drawImage(k,n.x,n.y,n.width,n.height,0,0,S.width,S.height),S.toBlob(A=>{if(!A){C(new Error("Could not export the cropped image to a blob."));return}j(new File([A],f,{type:m,lastModified:b?new Date(b).getTime():Date.now()}))},m,Xr)}),[n.x,n.y,n.width,n.height]);return{init:d,crop:n,naturalSize:e,aspectRatio:r,setCropSize:p,setCropPosition:g,setAspectRatio:h,produceFile:x,width:Math.round(n.width),height:Math.round(n.height)}},et=5.6,kt=12,eo=y(I)`
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
`,so=y(_)`
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
`,ao=y.div`
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
`,ro=y.button`
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
`,oo=y(_)`
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
`,nt=y(ka)`
  width: 8.4rem;
`,Ds=y(ne.Label)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.6rem;
  height: 1.6rem;
`,lo=y(_)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);

  svg {
    display: block;
  }
`,co=()=>t.jsx(lo,{children:t.jsx("svg",{width:"17",height:"49",viewBox:"0 0 17 49",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M0.5 0.5H8.5C12.9183 0.5 16.5 4.08172 16.5 8.5M0.5 48.5H8.5C12.9183 48.5 16.5 44.9183 16.5 40.5",stroke:"#666687",strokeLinecap:"round"})})}),uo=({asset:e,isBusy:s=!1,onClose:n,onApply:a,onSaveAsCopy:r,canSaveAsCopy:o})=>{const{formatMessage:i}=L(),{toggleNotification:d}=me(),p=Sa().colorScheme==="dark",g=p?"neutral1000":"neutral0",h=p?"neutral600":"neutral200",x=c.useRef(null),f=c.useRef(null),m=c.useRef(null);c.useEffect(()=>{m.current?.focus()},[]);const{init:b,crop:j,naturalSize:C,aspectRatio:k,setCropSize:S,setCropPosition:w,setAspectRatio:A,produceFile:M,width:D,height:U}=Jr(),[T,X]=c.useState(!1),[N,v]=c.useState(e.focalPoint??{x:50,y:50}),$=fe(e.url),E=e.updatedAt&&!e.isUrlSigned?new Date(e.updatedAt).getTime():void 0,q=E!==void 0?`${$}${$.includes("?")?"&":"?"}updatedAt=${E}`:$,G=()=>{x.current&&b(x.current)},W=F=>{const Q=f.current?.getBoundingClientRect();if(!Q||!C.width||!C.height)return null;const H=C.width/Q.width,ie=C.height/Q.height;return{x:(F.clientX-Q.left)*H,y:(F.clientY-Q.top)*ie}},O=c.useRef(null);c.useEffect(()=>()=>{O.current?.()},[]);const B=(F,Q)=>{F.preventDefault(),F.stopPropagation();const{pointerId:H}=F;try{F.currentTarget.setPointerCapture(H)}catch{}const ie=ce=>{ce.pointerId===H&&Q(ce)},le=()=>{window.removeEventListener("pointermove",ie),window.removeEventListener("pointerup",we),window.removeEventListener("pointercancel",we),O.current=null},we=ce=>{ce.pointerId===H&&le()};O.current?.(),O.current=le,window.addEventListener("pointermove",ie),window.addEventListener("pointerup",we),window.addEventListener("pointercancel",we)},z=F=>{const Q=W(F);if(!Q)return;const H={...j};B(F,ie=>{const le=W(ie);le&&w({x:H.x+(le.x-Q.x),y:H.y+(le.y-Q.y)})})},J=F=>Q=>{const H={...j},ie=F==="tl"||F==="bl"?H.x+H.width:H.x,le=F==="tl"||F==="tr"?H.y+H.height:H.y;B(Q,we=>{const ce=W(we);if(!ce)return;const{x:St,y:te,width:ve,height:vt}=Zr({anchorX:ie,anchorY:le,point:ce,aspectRatio:T?k:null});w({x:St,y:te}),S({width:ve,height:vt})})},K=()=>{X(F=>{const Q=!F;return A(Q&&U?D/U:null),Q})},Y=F=>{B(F,Q=>{const H=W(Q);if(!H)return;const ie=(H.x-j.x)/j.width*100,le=(H.y-j.y)/j.height*100;v({x:Math.round(Math.min(100,Math.max(0,ie))),y:Math.round(Math.min(100,Math.max(0,le)))})})},ee=Math.round(N.x/100*D),oe=Math.round(N.y/100*U),be=(F,Q)=>{const H=F==="x"?D:U;if(!H)return;const ie=Math.min(100,Math.max(0,Q/H*100));v(le=>({...le,[F]:Math.round(ie)}))},[ze,bt]=c.useState(0),[jt,wt]=c.useState(0),Mt=()=>bt(F=>F+1),Ct=()=>wt(F=>F+1),je=C.width&&C.height?{left:j.x/C.width*100,top:j.y/C.height*100,width:j.width/C.width*100,height:j.height/C.height*100}:null,Ke=je!==null,He=async F=>{if(!Ke)return;let Q;try{Q=await M(e.name,e.mime??"image/png",e.updatedAt)}catch{d({type:"danger",message:i({id:l("asset-details.crop.export-error"),defaultMessage:"Could not process the cropped image."})});return}const H={x:Math.round(N.x),y:Math.round(N.y)};F==="apply"?a(Q,H):r(Q,H)};return t.jsx(va,{children:t.jsx(Ia,{onEscape:n,skipAutoFocus:!0,children:t.jsxs(eo,{ref:m,tabIndex:-1,children:[t.jsxs(to,{alignItems:"center",children:[t.jsx(ln,{"aria-hidden":!0}),t.jsx(R,{variant:"omega",fontWeight:"bold",children:i({id:l("asset-details.crop.title"),defaultMessage:"Crop & Focus area"})})]}),t.jsxs(so,{children:[t.jsxs(no,{ref:f,$aspect:C.width&&C.height?C.width/C.height:void 0,children:[t.jsx("img",{ref:x,src:q,alt:e.name,crossOrigin:"anonymous",onLoad:G,draggable:!1}),je?t.jsxs(ao,{style:{left:`${je.left}%`,top:`${je.top}%`,width:`${je.width}%`,height:`${je.height}%`},onPointerDown:z,children:[t.jsx(tt,{type:"button","aria-label":i({id:l("asset-details.crop.resize.top-left"),defaultMessage:"Resize top-left"}),$cursor:"nwse-resize",style:{left:0,top:0},onPointerDown:J("tl")}),t.jsx(tt,{type:"button","aria-label":i({id:l("asset-details.crop.resize.top-right"),defaultMessage:"Resize top-right"}),$cursor:"nesw-resize",style:{right:0,top:0},onPointerDown:J("tr")}),t.jsx(tt,{type:"button","aria-label":i({id:l("asset-details.crop.resize.bottom-left"),defaultMessage:"Resize bottom-left"}),$cursor:"nesw-resize",style:{left:0,bottom:0},onPointerDown:J("bl")}),t.jsx(tt,{type:"button","aria-label":i({id:l("asset-details.crop.resize.bottom-right"),defaultMessage:"Resize bottom-right"}),$cursor:"nwse-resize",style:{right:0,bottom:0},onPointerDown:J("br")}),t.jsx(ro,{type:"button","aria-label":i({id:l("asset-details.crop.focal-point"),defaultMessage:"Focal point"}),style:{left:`${N.x}%`,top:`${N.y}%`},onPointerDown:Y})]}):null]}),t.jsxs(oo,{children:[t.jsxs(I,{direction:"column",alignItems:"stretch",gap:1,paddingBottom:3,children:[t.jsx(R,{variant:"omega",fontWeight:"bold",textColor:g,children:i({id:l("asset-details.crop.title"),defaultMessage:"Crop & Focus area"})}),t.jsx(R,{variant:"pi",textColor:h,children:i({id:l("asset-details.crop.hint"),defaultMessage:"Set the crop area with the rectangle. Pin the always-visible area with the circle."})})]}),t.jsxs(I,{gap:6,alignItems:"center",children:[t.jsxs(I,{alignItems:"center",gap:2,children:[t.jsxs(I,{direction:"column",gap:2,children:[t.jsxs(st,{name:"crop-width",gap:2,children:[t.jsx(Ds,{textColor:g,children:t.jsx(Da,{})}),t.jsx(nt,{"aria-label":i({id:l("asset-details.crop.width"),defaultMessage:"Width (px)"}),value:D,min:1,max:C.width||void 0,onValueChange:F=>{F!==void 0&&S({width:F})}})]}),t.jsxs(st,{name:"crop-height",gap:2,children:[t.jsx(Ds,{textColor:g,children:t.jsx($a,{})}),t.jsx(nt,{"aria-label":i({id:l("asset-details.crop.height"),defaultMessage:"Height (px)"}),value:U,min:1,max:C.height||void 0,onValueChange:F=>{F!==void 0&&S({height:F})}})]})]}),t.jsxs(I,{position:"relative",children:[t.jsx(de,{label:i({id:l("asset-details.crop.aspect-lock"),defaultMessage:"Lock aspect ratio"}),variant:T?"secondary":"ghost",onClick:K,children:t.jsx(_e,{})}),t.jsx(co,{})]})]}),t.jsxs(I,{direction:"column",gap:2,marginLeft:"auto",children:[t.jsxs(st,{name:"focal-x",gap:2,children:[t.jsx(ne.Label,{textColor:g,children:i({id:l("asset-details.crop.focal-x-axis"),defaultMessage:"X"})}),t.jsx(nt,{"aria-label":i({id:l("asset-details.crop.focal-x"),defaultMessage:"Focal point X (px)"}),value:ee,min:0,max:D||void 0,onValueChange:F=>{F!==void 0&&be("x",F)},onBlur:Mt},`focal-x-${ze}`)]}),t.jsxs(st,{name:"focal-y",gap:2,children:[t.jsx(ne.Label,{textColor:g,children:i({id:l("asset-details.crop.focal-y-axis"),defaultMessage:"Y"})}),t.jsx(nt,{"aria-label":i({id:l("asset-details.crop.focal-y"),defaultMessage:"Focal point Y (px)"}),value:oe,min:0,max:U||void 0,onValueChange:F=>{F!==void 0&&be("y",F)},onBlur:Ct},`focal-y-${jt}`)]})]})]})]})]}),t.jsxs(io,{alignItems:"center",children:[t.jsx(Z,{variant:"tertiary",onClick:n,disabled:s,children:i({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),t.jsxs(I,{gap:2,children:[o&&t.jsx(Z,{variant:"secondary",onClick:()=>He("copy"),loading:s,disabled:!Ke,children:i({id:l("asset-details.crop.save-as-copy"),defaultMessage:"Save as copy"})}),t.jsx(Z,{variant:"default",onClick:()=>He("apply"),loading:s,disabled:!Ke,children:i({id:l("asset-details.crop.apply"),defaultMessage:"Apply"})})]})]})]})})})},Ve=y(_)`
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
`,at=y(I)`
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
`,rt=()=>{const{formatMessage:e}=L();return t.jsx(yo,{justifyContent:"center",alignItems:"center",children:t.jsx($e,{children:e({id:"app.loading",defaultMessage:"Loading..."})})})},bo=({asset:e,actions:s,isLoading:n=!1})=>{const{formatMessage:a}=L(),{alternativeText:r,ext:o,mime:i,url:d,updatedAt:u,isUrlSigned:p,isLocal:g}=e,h=u&&!p?new Date(u).getTime():void 0,x=S=>!S||h===void 0?S:S.includes("?")?`${S}&v=${h}`:`${S}?v=${h}`,f=x(fe(d)),[m,b]=c.useState(!1);c.useEffect(()=>{b(!1)},[f]);const j=c.useRef(null);if(c.useEffect(()=>{const S=j.current;if(!S)return;const w=()=>{const M=S.parentElement;if(!M)return;const D=M.getBoundingClientRect(),U=S.offsetWidth,T=S.offsetHeight;!U||!T||!D.width||D.height};w();const A=new ResizeObserver(w);return A.observe(S),S.parentElement&&A.observe(S.parentElement),()=>A.disconnect()},[m]),i?.includes(Me.Image)){const S=x(fe(d));if(S)return t.jsxs(Ve,{children:[(!m||n)&&t.jsx(rt,{}),s?t.jsx(po,{children:s}):null,t.jsx(at,{children:t.jsx(go,{ref:j,src:S,alt:r||e.name||"",crossOrigin:!g&&p?"anonymous":void 0,onLoad:()=>b(!0),onError:()=>b(!0)})})]})}if(i?.includes(Me.Video)&&f)return t.jsxs(Ve,{children:[!m&&t.jsx(rt,{}),t.jsx(at,{children:t.jsx(ho,{src:f,controls:!0,title:e.name,onLoadedData:()=>b(!0),onError:()=>b(!0),children:a({id:l("asset-details.videoNotSupported"),defaultMessage:"Your browser does not support the video tag."})})})]});if(i?.includes(Me.Audio)&&f)return t.jsxs(Ve,{children:[!m&&t.jsx(rt,{}),t.jsx(at,{children:t.jsx(I,{width:"100%",padding:4,justifyContent:"center",alignItems:"center",height:"100%",minHeight:"12rem",children:t.jsx(fo,{src:f,controls:!0,onLoadedData:()=>b(!0),onError:()=>b(!0)})})})]});if((o?.toLowerCase()==="pdf"||o?.toLowerCase()===".pdf"||i==="application/pdf")&&f)return t.jsxs(Ve,{children:[!m&&t.jsx(rt,{}),t.jsx(at,{children:t.jsx(mo,{src:`${f}#toolbar=0`,title:e.name,onLoad:()=>b(!0)})})]});const k=Xe(i,o);return t.jsx(Ve,{children:t.jsxs(xo,{justifyContent:"center",alignItems:"center",gap:1,direction:"column",hasRadius:!0,children:[t.jsx(k,{width:24,height:24}),t.jsx(R,{variant:"pi",children:a({id:l("asset-details.noPreview"),defaultMessage:"No preview available"})})]})})},Tn=c.createContext(null),Fn=()=>{const e=c.useContext(Tn);if(!e)throw new Error("useDrawerNotify must be used within AssetDetails");return e},Ln=c.createContext(null),On=()=>{const e=c.useContext(Ln);if(!e)throw new Error("useAssetOperation must be used within AssetDetails");return e},Pn=()=>{const[{query:e},s]=Re(),n=En(e?.[ot]),a=n!==null,[r,o]=c.useState(a),i=c.useRef(null);c.useEffect(()=>{a&&(i.current=n,o(!0))},[a,n]);const d=c.useCallback(g=>{g.target===g.currentTarget&&!a&&o(!1)},[a]),u=c.useCallback(g=>{s(he(e,{[ot]:String(g)}),"push",!0)},[e,s]),p=c.useCallback(()=>{s(he(e,{[ot]:void 0}),"push",!0)},[e,s]);return{assetId:a?n:i.current,isVisible:a,shouldRenderDrawer:r,onCloseAnimationEnd:d,openDetails:u,closeDetails:p}},jo=y(I)`
  flex: 0 0 calc(50% - ${({theme:e})=>e.spaces[2]});
`,Ie=({label:e,value:s})=>t.jsxs(jo,{direction:"column",justifyContent:"flex-start",alignItems:"flex-start",gap:1,children:[t.jsx(R,{variant:"sigma",textColor:"neutral600",fontWeight:"semiBold",textTransform:"uppercase",children:e}),t.jsx(R,{variant:"pi",textColor:"neutral700",children:s??"-"})]}),wo=y(_)`
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
`,Mo=y(_)`
  position: absolute;
  top: ${({theme:e})=>e.spaces[2]};
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  width: calc(100% - ${({theme:e})=>e.spaces[2]});
`,Co=e=>e.isDeleting?{id:l("asset-details.delete.loading"),defaultMessage:"Deleting the file…"}:e.isCropCopying?{id:l("asset-details.crop.loading"),defaultMessage:"Saving the cropped copy…"}:e.isReplacing?{id:l("asset-details.replace.loading"),defaultMessage:"Replacing the file…"}:null,So=y(pt)`
  width: 1.6rem;
  height: 1.6rem;

  path {
    fill: ${({theme:e})=>e.colors.warning500};
  }
`,At=({name:e,label:s,required:n,disabled:a})=>{const{formatMessage:r}=L(),o=dn(e),i=Zt("DetailField",h=>h.isSubmitting),d=o.value??"",[u,p]=c.useState(d);c.useEffect(()=>{p(d)},[d]);const g=r({id:l("asset-details.field.empty"),defaultMessage:"{label} is currently empty."},{label:s});return t.jsxs(ne.Root,{name:e,required:n,children:[t.jsx(ne.Label,{children:s}),t.jsx(cn,{value:u,onChange:h=>{p(h.target.value),o.onChange(e,h.target.value)},endAction:u?void 0:t.jsx(Jt,{label:g,children:t.jsx(So,{"aria-label":g,role:"img"})}),type:"text",disabled:i||a})]})},vo=({label:e,rootLabel:s,folders:n,disabled:a})=>{const r=dn("folder"),o=Zt("LocationField",i=>i.isSubmitting);return t.jsxs(ne.Root,{name:"folder",required:!0,children:[t.jsx(ne.Label,{children:e}),t.jsxs(un,{value:r.value==null?"":String(r.value),onChange:i=>{const d=i===""?null:Number(i);r.onChange("folder",d)},disabled:o||a,children:[t.jsx(lt,{value:"",children:s}),n.map(i=>t.jsx(lt,{value:String(i.id),children:i.name},i.id))]})]})},Io=()=>{const{formatMessage:e}=L(),{deleteAsset:s,isDeleting:n}=On(),[a,r]=c.useState(!1),o=async()=>{await s(),r(!1)},i=e({id:l("asset-details.delete.trigger"),defaultMessage:"Delete this file"});return t.jsxs(V.Root,{open:a,onOpenChange:r,children:[t.jsx(V.Trigger,{children:t.jsx(de,{label:i,variant:"danger-light",children:t.jsx(gt,{})})}),t.jsxs(V.Content,{children:[t.jsx(V.Header,{children:e({id:l("asset-details.delete.title"),defaultMessage:"Delete this media file?"})}),t.jsx(V.Body,{icon:t.jsx(pt,{width:"24px",height:"24px",fill:"danger600"}),textAlign:"center",children:e({id:l("asset-details.delete.description"),defaultMessage:"This file cannot be recovered once deleted. If it is currently in use, linked content will break and image containers will be empty."})}),t.jsxs(V.Footer,{children:[t.jsx(V.Cancel,{children:t.jsx(Z,{variant:"tertiary",disabled:n,fullWidth:!0,children:e({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})}),t.jsx(V.Action,{children:t.jsx(Z,{variant:"danger-light",loading:n,onClick:o,fullWidth:!0,children:e({id:"app.components.Button.confirm",defaultMessage:"Confirm"})})})]})]})]})},Do=({asset:e})=>{const{formatMessage:s}=L(),{copy:n}=es(),a=Fn(),r=async()=>{const o=fe(e.url);if(!o)return;const i=await n(o);a({type:i?"success":"danger",message:s(i?{id:l("asset-details.copy-link.success"),defaultMessage:"Link copied."}:{id:l("asset-details.copy-link.error"),defaultMessage:"Failed to copy the link."})})};return t.jsx(de,{label:s({id:l("asset-details.copy-link.trigger"),defaultMessage:"Copy link"}),variant:"tertiary",onClick:r,children:t.jsx(_e,{})})},$o=({asset:e})=>{const{formatMessage:s}=L(),n=Fn(),[a,r]=c.useState(!1),o=async()=>{const i=fe(e.url);if(i){r(!0);try{await In(i,e.name)}catch{n({type:"danger",message:s({id:l("asset-details.download.error"),defaultMessage:"Failed to download the file."})})}finally{r(!1)}}};return t.jsx(de,{label:s({id:l("asset-details.download.trigger"),defaultMessage:"Download"}),variant:"tertiary",onClick:o,disabled:a,children:t.jsx(gn,{})})},ko=({mime:e})=>{const{formatMessage:s}=L(),{replaceAsset:n,isReplacing:a}=On(),r=c.useRef(null),[o,i]=c.useState(!1),d=xt({mime:e}),u=()=>{i(!0)},p=()=>{i(!1),r.current?.click()},g=async h=>{const x=h.target.files?.[0];h.target.value="",x&&await n(x)};return t.jsxs(t.Fragment,{children:[t.jsx(Te,{children:t.jsx("input",{ref:r,type:"file",accept:e??"",multiple:!1,onChange:g,"aria-hidden":!0,tabIndex:-1})}),t.jsx(de,{label:s({id:l("asset-details.replace.trigger"),defaultMessage:"Replace this file"}),variant:"tertiary",onClick:u,disabled:a,children:t.jsx(pn,{})}),t.jsx(V.Root,{open:o,onOpenChange:i,children:t.jsxs(V.Content,{children:[t.jsx(V.Header,{children:s({id:l("asset-details.replace.title"),defaultMessage:"Replace this media file?"})}),t.jsx(V.Body,{textAlign:"center",children:t.jsxs(I,{direction:"column",textAlign:"center",children:[t.jsx(R,{variant:"omega",children:s({id:l("asset-details.replace.description"),defaultMessage:"Current content will be permanently replaced."})}),d?t.jsx(R,{variant:"omega",children:s({id:l("asset-details.replace.description.ai"),defaultMessage:"AI will generate new metadata after upload."})}):null]})}),t.jsxs(V.Footer,{children:[t.jsx(V.Cancel,{children:t.jsx(Z,{variant:"tertiary",fullWidth:!0,children:s({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})}),t.jsx(V.Action,{children:t.jsx(Z,{variant:"secondary",onClick:p,fullWidth:!0,children:s({id:l("asset-details.replace.continue"),defaultMessage:"Continue"})})})]})]})})]})},Ao=({onCrop:e})=>{const{formatMessage:s}=L(),n=Zt("AssetImageActions",a=>a.isSubmitting);return t.jsx(I,{direction:"column",gap:2,children:t.jsx(de,{label:s({id:l("asset-details.crop.trigger"),defaultMessage:"Crop"}),variant:"tertiary",onClick:e,disabled:n||!e,children:t.jsx(ln,{})})})},Eo=({asset:e,closeDetails:s})=>{const{formatMessage:n,formatDate:a}=L(),r=yt(),{canCreate:o,canUpdate:i,canDownload:d,canCopyLink:u}=ge(),{data:p=[]}=Pr(),{toggleNotification:g}=me(),[h]=zr(),{trackUsage:x}=Se(),[f,{isLoading:m}]=vn(),[b,{isLoading:j}]=Kr(),[C,{isLoading:k}]=Ra(),[S,w]=c.useState(!1),[A,M]=c.useState(null);c.useEffect(()=>{if(!A)return;const O=window.setTimeout(()=>M(null),5e3);return()=>window.clearTimeout(O)},[A]);const D=c.useCallback(O=>M(O),[]),U=e.mime?.includes(Me.Image),T={name:e.name??"",caption:e.caption??"",alternativeText:e.alternativeText??"",folder:typeof e.folder=="object"&&e.folder!==null?e.folder.id??null:e.folder??null},X=async O=>{const B={name:O.name,caption:O.caption,alternativeText:O.alternativeText,folder:O.folder},z=await h({id:e.id,fileInfo:B});if("error"in z){D({type:"danger",message:r(z.error,n({id:l("asset-details.update.error"),defaultMessage:"Failed to update the file."}))});return}x("didEditMediaLibraryElements",{location:ae,type:e.mime?.split("/")[0],changeLocation:O.folder!==T.folder}),D({type:"success",message:n({id:l("asset-details.update.success"),defaultMessage:"File updated"})})},{title:N}=An(typeof e.folder=="object"&&e.folder!==null?e.folder.id??null:e.folder??null),v=c.useCallback(async O=>{const B=await f({id:e.id,file:O,fileInfo:{name:e.name}});if("error"in B){D({type:"danger",message:r(B.error,n({id:l("asset-details.replace.error"),defaultMessage:"Failed to replace the file."}))});return}x("didReplaceMedia",{location:ae}),D({type:"success",message:n({id:l("asset-details.replace.success"),defaultMessage:"File replaced."})})},[e.id,e.name,n,r,D,f,x]),$=c.useCallback(async()=>{const O=await b(e.id);if("error"in O){D({type:"danger",message:r(O.error,n({id:l("asset-details.delete.error"),defaultMessage:"Failed to delete the asset."}))});return}g({type:"success",message:n({id:l("asset-details.delete.success"),defaultMessage:"1 element have been deleted from {folderName}"},{folderName:N})}),s()},[e.id,s,b,N,n,r,D,g]),E=O=>{D({type:"danger",message:r(O,n({id:l("asset-details.crop.error"),defaultMessage:"Failed to crop the file."}))})},q=async(O,B)=>{w(!1);const z=await f({id:e.id,file:O,fileInfo:{focalPoint:B}});if("error"in z){E(z.error);return}x("didCropFile",{location:ae,duplicatedFile:!1}),D({type:"success",message:n({id:l("asset-details.crop.success"),defaultMessage:"File cropped."})})},G=async(O,B)=>{w(!1);const z=await C({file:O,fileInfo:{name:e.name,caption:e.caption??"",alternativeText:e.alternativeText??"",folder:T.folder,focalPoint:B}});if("error"in z){E(z.error);return}x("didCropFile",{location:ae,duplicatedFile:!0}),D({type:"success",message:n({id:l("asset-details.crop.copy-success"),defaultMessage:"Copy created."})})},W=c.useMemo(()=>({replaceAsset:v,deleteAsset:$,isReplacing:m,isDeleting:j}),[v,$,m,j]);return t.jsx(Tn.Provider,{value:D,children:t.jsx(Ln.Provider,{value:W,children:t.jsx(wo,{children:t.jsx(Ta,{method:"POST",initialValues:T,onSubmit:X,children:({modified:O,isSubmitting:B,values:z,resetForm:J})=>{const K=(z.name??"").trim()==="",Y=Co({isDeleting:j,isReplacing:m,isCropCopying:k});return t.jsxs(t.Fragment,{children:[t.jsx(Fa,{onProceed:J}),S&&U?t.jsx(uo,{asset:e,onClose:()=>w(!1),onApply:q,onSaveAsCopy:G,canSaveAsCopy:o}):null,Y?t.jsx(Rn,{children:n(Y)}):null,A?t.jsx(Mo,{children:t.jsx(Xt,{variant:A.type==="success"?"success":"danger",closeLabel:n({id:"global.close",defaultMessage:"Close"}),onClose:()=>M(null),children:A.message})}):null,t.jsxs(De.ScrollableContent,{children:[t.jsx(bo,{asset:e,actions:U&&i?t.jsx(Ao,{onCrop:()=>w(!0)}):null}),t.jsxs(I,{direction:"column",alignItems:"stretch",gap:4,paddingTop:4,paddingBottom:4,paddingLeft:5,paddingRight:5,children:[t.jsx(R,{variant:"beta",fontWeight:"semiBold",tag:"h3",children:n({id:l("asset-details.fileInfo"),defaultMessage:"File info"})}),t.jsxs(I,{wrap:"wrap",gap:4,background:"neutral100",paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:6,alignItems:"flex-start",children:[t.jsx(Ie,{label:n({id:l("asset-details.creationDate"),defaultMessage:"Creation date"}),value:e.createdAt?a(new Date(e.createdAt),{dateStyle:"long",timeStyle:"short"}):null}),t.jsx(Ie,{label:n({id:l("asset-details.lastUpdated"),defaultMessage:"Last updated"}),value:e.updatedAt?a(new Date(e.updatedAt),{dateStyle:"long",timeStyle:"short"}):null}),t.jsx(Ie,{label:n({id:l("asset-details.createdBy"),defaultMessage:"Created by"}),value:e.createdBy?br({firstname:e.createdBy.firstname??void 0,lastname:e.createdBy.lastname??void 0,username:e.createdBy.username??void 0,email:e.createdBy.email??void 0})??"-":null}),t.jsx(Ie,{label:n({id:l("asset-details.size"),defaultMessage:"Size"}),value:e.size?Kt(e.size,1):null}),U&&(e.width!=null||e.height!=null)&&t.jsx(Ie,{label:n({id:l("asset-details.dimensions"),defaultMessage:"Dimensions"}),value:e.width!=null&&e.height!=null?`${e.width} × ${e.height}`:null}),t.jsx(Ie,{label:n({id:l("asset-details.extension"),defaultMessage:"Extension"}),value:on(e.ext)}),t.jsx(Ie,{label:n({id:l("asset-details.assetId"),defaultMessage:"Asset ID"}),value:String(e.id)})]}),t.jsx(At,{name:"name",label:n({id:l("asset-details.fileName"),defaultMessage:"File name"}),required:!0,disabled:!i}),t.jsx(vo,{label:n({id:l("asset-details.location"),defaultMessage:"Location"}),rootLabel:n({id:l("plugin.home"),defaultMessage:"Home"}),folders:p,disabled:!i}),t.jsx(At,{name:"caption",label:n({id:l("asset-details.caption"),defaultMessage:"Caption"}),disabled:!i}),t.jsx(At,{name:"alternativeText",label:n({id:l("asset-details.alternativeText"),defaultMessage:"Alternative text"}),disabled:!i})]})]}),(i||u||d)&&t.jsxs(I,{justifyContent:"space-between",alignItems:"center",gap:2,padding:3,borderColor:"neutral150",borderStyle:"solid",borderWidth:"1px 0 0 0",background:"neutral0",children:[t.jsxs(I,{gap:2,children:[i&&t.jsx(Io,{}),u&&t.jsx(Do,{asset:e}),d&&t.jsx($o,{asset:e}),i&&t.jsx(ko,{mime:e.mime})]}),i&&t.jsx(Z,{type:"submit",variant:"default",loading:B,disabled:!O||B||K,children:n({id:l("asset-details.save"),defaultMessage:"Save changes"})})]})]})}},e.id)})})})},Ro=y(I)`
  flex-shrink: 0;
`,To=y(R)`
  min-width: 0;
`,Fo=({asset:e,closeDetails:s})=>{const n=e?Xe(e.mime,e.ext):Aa;return t.jsxs(I,{gap:2,paddingLeft:5,paddingTop:3,paddingBottom:3,paddingRight:3,borderColor:"neutral150",borderStyle:"solid",borderWidth:"0 0 1px 0",children:[t.jsx(Ro,{children:t.jsx(n,{width:20,height:20})}),t.jsx(De.Title,{asChild:!0,children:t.jsx(To,{variant:"omega",fontWeight:"semiBold",overflow:"hidden",ellipsis:!0,tag:"h2",children:e.name})}),t.jsx(_,{marginLeft:"auto",children:t.jsx(De.CloseButton,{onClose:s,children:t.jsx(Ea,{})})})]})},Lo=({assetId:e,closeDetails:s})=>{const{formatMessage:n}=L(),{data:a,isLoading:r,error:o}=Ur(e,{refetchOnMountOrArgChange:!1,refetchOnReconnect:!1,refetchOnFocus:!1});return r?t.jsx(I,{justifyContent:"center",padding:8,children:t.jsx($e,{children:n({id:"app.loading",defaultMessage:"Loading..."})})}):o||!a?t.jsx(I,{direction:"column",alignItems:"stretch",gap:4,padding:4,children:t.jsx(Xt,{variant:"danger",closeLabel:n({id:"global.close",defaultMessage:"Close"}),onClose:s,children:n({id:l("asset-details.error"),defaultMessage:"Failed to load file details."})})}):t.jsxs(t.Fragment,{children:[t.jsx(Fo,{asset:a,closeDetails:s}),t.jsx(Eo,{asset:a,closeDetails:s})]})},Oo=(e,s)=>!s||e.detail.originalEvent.button!==0?!0:e.target instanceof Element?e.target.closest(Gr)!==null&&e.target.closest(qr)===null:!1,Po=()=>{const{formatMessage:e}=L(),{assetId:s,isVisible:n,shouldRenderDrawer:a,onCloseAnimationEnd:r,closeDetails:o}=Pn();return!a||s===null?null:t.jsxs(De.Root,{isVisible:n,onClose:o,children:[t.jsx("div",{children:t.jsxs(Te,{children:[t.jsx(De.Title,{children:e({id:l("asset-details.title"),defaultMessage:"File details"})}),t.jsx(De.Description,{children:e({id:l("asset-details.description"),defaultMessage:"Displays file information and metadata"})})]})}),t.jsx(De.Body,{animationDirection:"left",width:"41.6rem",height:"100dvh",onAnimationEnd:r,onPointerDownOutside:i=>{Oo(i,n)&&i.preventDefault()},children:t.jsx(Lo,{assetId:s,closeDetails:o})})]})},re=e=>e.currentTarget instanceof Node&&e.target instanceof Node&&e.currentTarget.contains(e.target),Ae=e=>`asset:${e}`,Ee=e=>`folder:${e}`,$s=(e,s)=>{const n=new Set;return e.forEach(a=>{const[r,o]=a.split(":");r===s&&n.add(Number(o))}),n},Nn=()=>({selectedKeys:new Set,anchorKey:null}),No=(e,s)=>{const n=new Set(e.selectedKeys);return n.has(s)?n.delete(s):n.add(s),{selectedKeys:n,anchorKey:s}},Bo=(e,s)=>{const n=new Set(e.selectedKeys);return n.delete(s),{selectedKeys:n,anchorKey:e.anchorKey===s?null:e.anchorKey}},_o=(e,s,n)=>{const a=s.indexOf(n);if(a===-1)return e;const r=e.anchorKey===null?-1:s.indexOf(e.anchorKey);if(r===-1)return{selectedKeys:new Set([n]),anchorKey:n};const o=Math.min(r,a),i=Math.max(r,a);return{selectedKeys:new Set(s.slice(o,i+1)),anchorKey:e.anchorKey}},Uo=e=>({selectedKeys:new Set(e),anchorKey:e.length>0?e[e.length-1]:null}),zo=()=>Nn(),Ko=(e,s)=>{if(s.length===0)return{allSelected:!1,isIndeterminate:!1};const n=s.reduce((r,o)=>e.has(o)?r+1:r,0),a=n===s.length;return{allSelected:a,isIndeterminate:n>0&&!a}},ls=c.createContext(null),Ho=({children:e,disabled:s=!1})=>{const[n,a]=c.useState(Nn),r=c.useCallback(f=>!s&&n.selectedKeys.has(f),[s,n.selectedKeys]),o=c.useCallback(f=>{s||a(m=>No(m,f))},[s]),i=c.useCallback((f,m)=>{s||a(b=>_o(b,f,m))},[s]),d=c.useCallback(f=>{s||a(Uo(f))},[s]),u=c.useCallback(f=>a(m=>Bo(m,f)),[]),p=c.useCallback(()=>a(zo()),[]),g=c.useMemo(()=>$s(n.selectedKeys,"asset"),[n.selectedKeys]),h=c.useMemo(()=>$s(n.selectedKeys,"folder"),[n.selectedKeys]),x=c.useMemo(()=>({selectedKeys:n.selectedKeys,selectedIds:g,selectedFolderIds:h,anchorKey:n.anchorKey,isSelected:r,toggle:o,selectRange:i,selectAll:d,deselect:u,clear:p}),[n.selectedKeys,g,h,n.anchorKey,r,o,i,d,u,p]);return c.createElement(ls.Provider,{value:x},e)},ye=()=>{const e=c.useContext(ls);if(!e)throw new Error("useAssetSelection must be used within an AssetSelectionProvider");return e},Vo=()=>c.useContext(ls),Bn=c.createContext(null),Wo=({children:e})=>{const[s,n]=c.useState({}),a=c.useCallback((d,u)=>(n(p=>({...p,[d]:u})),()=>n(p=>{const{[d]:g,...h}=p;return h})),[]),r=c.useCallback(d=>s[d]!==void 0,[s]),o=c.useCallback(d=>s[d]??null,[s]),i=c.useMemo(()=>({isBusy:r,getBusyMessage:o,markBusy:a}),[r,o,a]);return c.createElement(Bn.Provider,{value:i},e)},ds=()=>c.useContext(Bn),qo=e=>{if(!e)return null;const s=Number(e);return Number.isFinite(s)?s:null},Ze=()=>{const[{query:e},s]=Re(),n=qo(e?.folder),a=c.useCallback(d=>{s({folder:String(d.id),_q:void 0})},[s]),r=c.useCallback(()=>{s({folder:"",_q:""},"remove")},[s]),o=c.useCallback(()=>{s(he(e,{folder:void 0}))},[e,s]);c.useEffect(()=>{e?.folder&&n===null&&o()},[e?.folder,n,o]);const i=c.useCallback(d=>{d==null?r():s({folder:String(d),_q:void 0})},[r,s]);return{currentFolderId:n,navigateToFolder:a,navigateToRoot:r,navigateToFolderId:i}},cs=({folders:e,assets:s,mixedItems:n})=>n?n.map(a=>a.kind==="folder"?Ee(a.folder.id):Ae(a.asset.id)):[...e.map(a=>Ee(a.id)),...s.map(a=>Ae(a.id))],us=y(P.Content).attrs({maxHeight:"min(var(--radix-popper-available-height, 100vh), 100vh)"})`
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
`,_n=(e,s)=>{for(const n of e){if(n.id===s)return n;const a=_n(n.children,s);if(a)return a}return null},Go=e=>{const s=new Set,n=a=>{for(const r of a.children)r.id!=null&&s.add(r.id),n(r)};return n(e),s},Yo=(e,s,n)=>{if(s===n)return!0;const a=_n(e,s);return a?Go(a).has(n):!1},Qo=e=>e.kind==="file"?e.folderId==null:e.parentId==null,Be=({items:e,targetFolderId:s,folderStructure:n})=>{if(e.length===0)return!1;if(s===null)return e.some(r=>!Qo(r));const a=new Set(e.filter(r=>r.kind==="folder").map(r=>r.id));if(a.has(s))return!1;for(const r of a)if(Yo(n,r,s))return!1;for(const r of e)if(r.kind==="file"&&r.folderId===s||r.kind==="folder"&&r.parentId===s)return!1;return!0},gs=(e,s=new Set,n="")=>e.flatMap(a=>{if(a.id==null||s.has(a.id))return[];const r=n?`${n} / ${a.name??""}`:a.name??"";return[{id:a.id,label:r},...gs(a.children??[],s,r)]}),Un=({formatMessage:e,count:s,source:n,destination:a})=>n===null?e({id:l("list.bulk-actions.move.success-multiple-sources"),defaultMessage:"{count, plural, =1 {# element has} other {# elements have}} been moved to {destination}"},{count:s,destination:a}):e({id:l("list.bulk-actions.move.success"),defaultMessage:"{count, plural, =1 {# element has} other {# elements have}} been moved from {source} to {destination}"},{count:s,source:n,destination:a}),Ye=e=>e.kind==="folder"?e.parentId:e.folderId,Xo=e=>zn(e)?Ye(e[0]):null,zn=e=>{if(e.length===0)return!1;const s=Ye(e[0]);return e.every(n=>Ye(n)===s)},Zo=y(se.Content)`
  max-width: 51.6rem;
`,ps=({open:e,onClose:s,items:n,onSuccess:a})=>{const{formatMessage:r}=L(),o=yt(),{toggleNotification:i}=me(),{data:d=[],isUninitialized:u,isLoading:p,isError:g}=os(void 0,{skip:!e}),[h,{isLoading:x}]=Cn(),f=c.useMemo(()=>n.filter($=>$.kind==="file").map($=>$.id),[n]),m=c.useMemo(()=>n.filter($=>$.kind==="folder").map($=>$.id),[n]),b=zn(n),j=Xo(n),{data:C}=rs({id:j},{skip:j===null}),[k,S]=c.useState(""),w=r({id:l("plugin.name"),defaultMessage:"Media Library"}),A=c.useMemo(()=>gs(d,new Set(m)).filter($=>Be({items:n,targetFolderId:$.id,folderStructure:d})),[d,m,n]),M=c.useMemo(()=>Be({items:n,targetFolderId:null,folderStructure:d}),[n,d]),D=M?"":A[0]?.id.toString()??"";c.useEffect(()=>{S(D)},[e,D]);const U=!u&&!p&&!g,T=U&&A.length===0&&!M,X=n.length,N=async()=>{if(x||!U)return;const $=k===""?null:Number(k);try{await h({fileIds:f,folderIds:m,destinationFolderId:$}).unwrap()}catch(G){i({type:"danger",message:o(G,r({id:l("list.bulk-actions.move.error"),defaultMessage:"An error occurred while moving the items."}))});return}const E=b?j===null?w:C?.name??w:null,q=$===null?w:A.find(G=>G.id===$)?.label??w;i({type:"success",message:Un({formatMessage:r,count:X,source:E,destination:q})}),a?.(),s()},v=()=>g?t.jsx(R,{textColor:"danger600",children:r({id:l("list.bulk-actions.move.load-error"),defaultMessage:"Couldn't load the folder list. Please try again."})}):T?t.jsx(R,{textColor:"neutral600",children:r({id:l("list.bulk-actions.move.no-destination"),defaultMessage:"There is no other folder to move this to."})}):t.jsxs(ne.Root,{name:"destination",children:[t.jsx(ne.Label,{children:r({id:l("list.bulk-actions.move.location"),defaultMessage:"Location"})}),t.jsxs(un,{value:k,onChange:$=>S(String($)),disabled:x||!U,children:[M&&t.jsx(lt,{value:"",children:w}),A.map($=>t.jsx(lt,{value:String($.id),children:$.label},$.id))]})]});return t.jsx(se.Root,{open:e,onOpenChange:$=>{!$&&!x&&s()},children:t.jsxs(Zo,{children:[t.jsx(se.Header,{children:t.jsx(se.Title,{children:r({id:l("list.bulk-actions.move.title"),defaultMessage:"Move elements to"})})}),t.jsx(se.Body,{children:v()}),t.jsx(se.Footer,{children:t.jsxs(I,{gap:2,justifyContent:"space-between",width:"100%",children:[t.jsx(Z,{variant:"tertiary",onClick:s,disabled:x,type:"button",children:r({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),t.jsx(Z,{onClick:N,loading:x,disabled:!U||T,children:r({id:l("list.bulk-actions.move.submit"),defaultMessage:"Move"})})]})})]})})},hs=({open:e,onClose:s,target:n,onSuccess:a,onPendingChange:r})=>{const{formatMessage:o}=L(),{toggleNotification:i}=me(),[d,{isLoading:u}]=Hr(),p=n.fileIds.length+n.folderIds.length;c.useEffect(()=>{r?.(u)},[u,r]);const g=async h=>{if(h.preventDefault(),u)return;if("error"in await d(n)){i({type:"danger",message:o({id:l("list.bulk-actions.delete.error"),defaultMessage:"An error occurred while deleting the items."})});return}s(),i({type:"success",message:o({id:l("list.bulk-actions.delete.success"),defaultMessage:"{count, plural, =1 {# item has been deleted} other {# items have been deleted}}"},{count:p})}),a?.()};return t.jsx(V.Root,{open:e,onOpenChange:h=>{!h&&!u&&s()},children:t.jsxs(V.Content,{children:[t.jsx(V.Header,{children:o({id:l("list.bulk-actions.delete.confirm.title"),defaultMessage:"Delete {count, plural, =1 {# item} other {# items}}?"},{count:p})}),t.jsx(V.Body,{icon:t.jsx(pt,{width:"24px",height:"24px",fill:"danger600"}),textAlign:"center",children:t.jsx(R,{children:o({id:l("list.bulk-actions.delete.confirm.description.are-you-sure"),defaultMessage:"These items cannot be recovered once deleted, and deleting a folder also deletes everything inside it. If they are currently in use, linked content will break and image containers will be empty."})})}),t.jsxs(V.Footer,{children:[t.jsx(V.Cancel,{children:t.jsx(Z,{variant:"tertiary",disabled:u,fullWidth:!0,children:o({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})}),t.jsx(V.Action,{children:t.jsx(Z,{variant:"danger-light",loading:u,onClick:g,fullWidth:!0,children:o({id:"app.components.Button.confirm",defaultMessage:"Confirm"})})})]})]})})},Kn=({asset:e,dragData:s})=>{const{formatMessage:n}=L(),a=yt(),{copy:r}=es(),{toggleNotification:o}=me(),{deselect:i}=ye(),d=ds()?.markBusy??(()=>()=>{}),{canUpdate:u,canDownload:p,canCopyLink:g,isLoading:h}=ge(),[x,{isLoading:f}]=vn(),m=xt({mime:e.mime}),b=c.useRef(null),[j,C]=c.useState(!1),[k,S]=c.useState(!1),[w,A]=c.useState(!1),[M,D]=c.useState(!1),U=c.useMemo(()=>[s],[s]),T=()=>{C(!1),b.current?.click()},X=async G=>{const W=G.target.files?.[0];if(G.target.value="",!W)return;const O=d(e.id,n({id:l("asset-details.replace.loading"),defaultMessage:"Replacing the file…"}));let B;try{B=await x({id:e.id,file:W,fileInfo:{name:e.name}})}finally{O()}if("error"in B){o({type:"danger",message:a(B.error,n({id:l("asset-details.replace.error"),defaultMessage:"Failed to replace the file."}))});return}o({type:"success",message:n({id:l("asset-details.replace.success"),defaultMessage:"File replaced."})})},N=async()=>{const G=fe(e.url);if(!G)return;const W=await r(G);o({type:W?"success":"danger",message:n(W?{id:l("asset-details.copy-link.success"),defaultMessage:"Link copied."}:{id:l("asset-details.copy-link.error"),defaultMessage:"Failed to copy the link."})})},v=async()=>{const G=fe(e.url);if(G){D(!0);try{await In(G,e.name)}catch{o({type:"danger",message:n({id:l("asset-details.download.error"),defaultMessage:"Failed to download the file."})})}finally{D(!1)}}},$=u||g||p,E=u,q=(g||p)&&E;return!h&&!$&&!E?null:t.jsxs(t.Fragment,{children:[t.jsx(Te,{children:t.jsx("input",{ref:b,type:"file",accept:e.mime??"",multiple:!1,onChange:X,"aria-hidden":!0,tabIndex:-1})}),t.jsxs(P.Root,{modal:!1,children:[t.jsx(P.Trigger,{tag:de,icon:t.jsx(hn,{}),variant:"ghost",label:n({id:l("control-card.more-actions"),defaultMessage:"More actions"})}),t.jsxs(us,{popoverPlacement:"bottom-end",zIndex:2,minWidth:"22rem",children:[u&&t.jsx(P.Item,{startIcon:t.jsx(pn,{}),disabled:f,onSelect:()=>C(!0),children:n({id:l("list.assets.actions.replace"),defaultMessage:"Replace media"})}),g&&t.jsx(P.Item,{startIcon:t.jsx(_e,{}),onSelect:N,children:n({id:l("list.assets.actions.copy-link"),defaultMessage:"Copy link to media"})}),p&&t.jsx(P.Item,{startIcon:t.jsx(gn,{}),disabled:M,onSelect:v,children:n({id:l("list.assets.actions.download"),defaultMessage:"Download media"})}),q&&t.jsx(P.Separator,{}),u&&t.jsxs(t.Fragment,{children:[t.jsx(P.Item,{startIcon:t.jsx(ts,{}),onSelect:()=>S(!0),children:n({id:l("list.assets.actions.move"),defaultMessage:"Move to folder"})}),t.jsx(P.Item,{startIcon:t.jsx(gt,{}),variant:"danger",onSelect:()=>A(!0),children:n({id:l("list.assets.actions.delete"),defaultMessage:"Delete"})})]})]})]}),t.jsx(V.Root,{open:j,onOpenChange:C,children:t.jsxs(V.Content,{children:[t.jsx(V.Header,{children:n({id:l("asset-details.replace.title"),defaultMessage:"Replace this media file?"})}),t.jsx(V.Body,{textAlign:"center",children:t.jsxs(I,{direction:"column",textAlign:"center",children:[t.jsx(R,{variant:"omega",children:n({id:l("asset-details.replace.description"),defaultMessage:"Current content will be permanently replaced."})}),m?t.jsx(R,{variant:"omega",children:n({id:l("asset-details.replace.description.ai"),defaultMessage:"AI will generate new metadata after upload."})}):null]})}),t.jsxs(V.Footer,{children:[t.jsx(V.Cancel,{children:t.jsx(Z,{variant:"tertiary",fullWidth:!0,children:n({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})}),t.jsx(V.Action,{children:t.jsx(Z,{variant:"secondary",onClick:T,fullWidth:!0,children:n({id:l("asset-details.replace.continue"),defaultMessage:"Continue"})})})]})]})}),k&&t.jsx(ps,{open:!0,onClose:()=>S(!1),items:U,onSuccess:()=>i(Ae(e.id))}),w&&t.jsx(hs,{open:!0,onClose:()=>A(!1),target:{fileIds:[e.id],folderIds:[]},onSuccess:()=>i(Ae(e.id))})]})},Jo=e=>{const s=[],n=[];for(const a of e)a.kind==="file"?s.push(a.id):n.push(a.id);return{fileIds:s,folderIds:n}},ks=(e,s,n)=>{if(s===null)return n;const a=r=>{for(const o of r){if(o.id===s)return o;const i=a(o.children??[]);if(i)return i}return null};return a(e)?.name??n},As=(e,s,n,a)=>{const r=e.kind==="file"?Ae(e.id):Ee(e.id),o=Ye(e);if(!s||!s.has(r))return{items:[e],fromSelection:!1,activeSourceFolderId:o,spansMultipleSources:!1};const i=[];return s.forEach(d=>{const u=d.indexOf(":"),p=d.slice(0,u),g=Number(d.slice(u+1));if(p==="asset"){if(e.kind==="file"&&e.id===g){i.push(e);return}i.push({kind:"file",id:g,name:"",folderId:dt(n,"file",g,a)});return}if(e.kind==="folder"&&e.id===g){i.push(e);return}i.push({kind:"folder",id:g,name:"",parentId:dt(n,"folder",g,a)})}),{items:i,fromSelection:!0,activeSourceFolderId:o,spansMultipleSources:i.some(d=>Ye(d)!==o)}},ei=(e,s)=>{const n=new Set;if(e.length===0)return n;Be({items:e,targetFolderId:null,folderStructure:s})&&n.add(null);for(const{id:a}of gs(s))Be({items:e,targetFolderId:a,folderStructure:s})&&n.add(a);return n},ti=e=>`file:${e}`,si=e=>`folder:${e}`,ni=e=>`folder-target:${e}`,ai=e=>{if(typeof e!="string")return null;const s=/^folder-target:(\d+)$/.exec(e);return s?Number(s[1]):null},ri=e=>`folder-tree-target:${e}`,Hn="folder-tree-target:home",oi=e=>{if(typeof e!="string")return null;if(e===Hn)return"root";const s=/^folder-tree-target:(\d+)$/.exec(e);return s?Number(s[1]):null},Et=20,Rt=24,Es=24,Vn=y(I)`
  position: relative;
  align-items: center;
  gap: ${({theme:e})=>e.spaces[2]};
  padding: ${({theme:e})=>`${e.spaces[2]} ${e.spaces[3]}`};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.primary100};
  box-shadow: ${({theme:e})=>e.shadows.tableShadow};
  cursor: grabbing;
  max-width: 24rem;
`,ii=y(Vn)`
  box-shadow:
    ${({theme:e})=>e.shadows.tableShadow},
    0 4px 0 -1px ${({theme:e})=>e.colors.primary100},
    0 4px 0 0 ${({theme:e})=>e.colors.primary200},
    0 7px 0 -1px ${({theme:e})=>e.colors.primary100},
    0 7px 0 0 ${({theme:e})=>e.colors.primary200};
`,Rs=y(I)`
  align-items: center;
  gap: ${({theme:e})=>e.spaces[1]};
`,Tt=y(I)`
  flex-shrink: 0;
  width: ${Es}px;
  height: ${Es}px;
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
`,di=({items:e})=>{const{formatMessage:s}=L();if(e.length===0)return null;if(e.length===1){const o=e[0],i=o.kind==="folder",d=i?Ce:it,u=i?Et:Rt;return t.jsxs(Vn,{children:[t.jsx(Tt,{children:t.jsx(d,{width:u,height:u})}),t.jsx(R,{textColor:"neutral800",fontWeight:"semiBold",ellipsis:!0,children:o.name})]})}const n=e.filter(o=>o.kind==="folder").length,a=e.filter(o=>o.kind==="file").length,r=n+a;return t.jsxs(ii,{gap:3,children:[n>0?t.jsxs(Rs,{children:[t.jsx(Tt,{children:t.jsx(Ce,{width:Et,height:Et})}),t.jsx(R,{textColor:"neutral800",fontWeight:"semiBold",children:s({id:l("dnd.overlay.folders"),defaultMessage:"{count, plural, one {# folder} other {# folders}}"},{count:n})})]}):null,a>0?t.jsxs(Rs,{children:[t.jsx(Tt,{children:t.jsx(it,{width:Rt,height:Rt})}),t.jsx(R,{textColor:"neutral800",fontWeight:"semiBold",children:s({id:l("dnd.overlay.files"),defaultMessage:"{count, plural, one {# file} other {# files}}"},{count:a})})]}):null,t.jsx(li,{children:t.jsx(R,{textColor:"neutral0",fontWeight:"bold",variant:"pi",children:r})})]})},Wn=c.createContext(null),pe=()=>c.useContext(Wn),Ts=e=>{const s=ai(e);if(s!=null)return{destinationFolderId:s};const n=oi(e);return n==="root"?{destinationFolderId:null}:typeof n=="number"?{destinationFolderId:n}:null},ci=Number.MAX_SAFE_INTEGER,ui=({children:e,locations:s=Sn})=>{const{formatMessage:n}=L(),a=yt(),{toggleNotification:r}=me(),o=Vo(),{currentFolderId:i}=Ze(),{data:d=[]}=os(),u=n({id:l("plugin.name"),defaultMessage:"Media Library"}),[p,{isLoading:g}]=Cn(),[h,x]=c.useState([]),[f,m]=c.useState(""),b=c.useRef({items:[],fromSelection:!1,activeSourceFolderId:null,spansMultipleSources:!1}),j=c.useCallback(N=>{m(""),requestAnimationFrame(()=>m(N))},[]),{canUpdate:C}=ge(),k=jr(wr(vr,{activationConstraint:{distance:C?8:ci}})),S=c.useMemo(()=>ei(h,d),[h,d]),w=c.useCallback(N=>S.has(N),[S]),A=c.useMemo(()=>({isInternalDragActive:h.length>0,isMovePending:g,isValidDropTarget:w}),[h.length,g,w]),M=c.useCallback(()=>{b.current={items:[],fromSelection:!1,activeSourceFolderId:null,spansMultipleSources:!1},x([])},[]),D=c.useCallback(N=>{const v=N.active.data.current;if(!v){M();return}const $=As(v,o?.selectedKeys,s,i);b.current=$,x($.items)},[M,i,s,o?.selectedKeys]),U=c.useCallback(async N=>{const{over:v}=N,{items:$,fromSelection:E,activeSourceFolderId:q,spansMultipleSources:G}=b.current;if(M(),g||!v||$.length===0)return;const W=Ts(v.id);if(!W)return;const{destinationFolderId:O}=W;if(!Be({items:$,targetFolderId:O,folderStructure:d}))return;const B=Jo($),z=Un({formatMessage:n,count:$.length,source:G?null:ks(d,q,u),destination:ks(d,O,u)}),J=n({id:l("list.bulk-actions.move.error"),defaultMessage:"An error occurred while moving the items."});try{await p({...B,destinationFolderId:O}).unwrap(),E&&o?.clear(),j(z),r({type:"success",message:z})}catch(K){const Y=a(K,J);j(n({id:l("dnd.announce.move-failure"),defaultMessage:"Move failed. {message}"},{message:Y})),r({type:"danger",message:Y})}},[j,p,M,d,n,a,g,u,o,r]),T=c.useCallback(()=>{M()},[M]),X=c.useMemo(()=>({onDragStart:({active:N})=>{const v=N.data.current;return v?n({id:l("dnd.announce.drag-start"),defaultMessage:"Picked up {name}. Drop on a folder to move."},{name:v.name}):""},onDragOver:()=>"",onDragEnd:({active:N,over:v})=>{if(!v)return n({id:l("dnd.announce.cancel"),defaultMessage:"Drag cancelled."});const $=Ts(v.id),E=N.data.current;if(!$||!E)return"";const{items:q}=As(E,o?.selectedKeys,s,i);return Be({items:q,targetFolderId:$.destinationFolderId,folderStructure:d})?"":n({id:l("dnd.announce.invalid-drop"),defaultMessage:"Cannot move item to this folder."})},onDragCancel:()=>n({id:l("dnd.announce.cancel"),defaultMessage:"Drag cancelled."})}),[i,d,n,s,o?.selectedKeys]);return t.jsx(Wn.Provider,{value:A,children:t.jsxs(Mr,{sensors:k,collisionDetection:Cr,onDragStart:D,onDragEnd:U,onDragCancel:T,accessibility:{announcements:X},children:[t.jsx(Te,{"aria-live":"polite","aria-atomic":"true",children:f}),t.jsx(I,{position:"relative",alignItems:"stretch",direction:"column",height:"100%",children:e}),t.jsx(Sr,{dropAnimation:null,children:h.length>0?t.jsx(di,{items:h}):null})]})})},qn=e=>{const{isMovePending:s}=pe()??{isMovePending:!1},n=c.useMemo(()=>({kind:"file",id:e.id,name:e.name,folderId:Ge(e.folder)}),[e.folder,e.id,e.name]);return{...jn({id:ti(e.id),data:n,disabled:s}),dragData:n}},Gn=e=>{const{isMovePending:s,isValidDropTarget:n}=pe()??{isMovePending:!1,isValidDropTarget:()=>!1},{active:a}=bn(),r=Ge(e.parent),o=c.useMemo(()=>({kind:"folder",id:e.id,name:e.name,parentId:r}),[e.id,e.name,r]),i=c.useMemo(()=>({kind:"folder-target",id:e.id,name:e.name}),[e.id,e.name]),d=jn({id:si(e.id),data:o,disabled:s}),u=wn({id:ni(e.id),data:i,disabled:s}),p=n(e.id),g=u.isOver,h=g&&p,x=g&&!p&&a!=null;return{dragData:o,draggable:d,droppable:u,isDragging:d.isDragging,showValidDropHighlight:h,showInvalidDropCursor:x}},gi=y(se.Content)`
  max-width: 51.6rem;
`,Yn=e=>{const{open:s,parentFolderId:n,onClose:a,mode:r}=e,o=e.mode==="rename"?e.initialName:"",{formatMessage:i}=L(),{toggleNotification:d}=me(),{trackUsage:u}=Se(),[p,g]=c.useState(o),[h,x]=c.useState(),f=c.useRef(null),[m,{isLoading:b}]=Fr(),[j,{isLoading:C}]=Lr(),k=r==="rename"?C:b;c.useEffect(()=>{s&&(g(o),x(void 0),r==="rename"&&f.current?.select())},[s,o,r]);const S=async w=>{w.preventDefault();const A=p.trim();if(!A){x(i({id:l("folder.create.form.error.name-required"),defaultMessage:"Name is required"}));return}try{e.mode==="rename"?(await j({id:e.folderId,name:A,parent:n}).unwrap(),u("didEditMediaLibraryElements",{location:ae,type:"folder",changeLocation:!1})):(await m({name:A,parent:n}).unwrap(),u("didAddMediaLibraryFolders",{location:ae})),d({type:"success",message:i(r==="rename"?{id:l("folder.rename.success"),defaultMessage:"Folder has been renamed"}:{id:l("folder.create.success"),defaultMessage:"Folder has been created"})}),a()}catch(M){const D=M;D?.message?x(D.message):d({type:"danger",message:i(r==="rename"?{id:l("folder.rename.form.error.unknown"),defaultMessage:"An error occurred while renaming the folder"}:{id:l("folder.create.form.error.unknown"),defaultMessage:"An error occurred while creating the folder"})})}};return t.jsx(se.Root,{open:s,onOpenChange:a,children:t.jsxs(gi,{children:[t.jsx(se.Header,{children:t.jsx(se.Title,{children:e.mode==="rename"?i({id:l("folder.rename.title"),defaultMessage:"Rename folder"}):i({id:l("folder.create.title-in"),defaultMessage:"New folder in {folderName}"},{folderName:e.parentFolderName})})}),t.jsxs("form",{onSubmit:S,children:[t.jsx(se.Body,{children:t.jsxs(ne.Root,{error:h,name:"name",required:!0,children:[t.jsx(ne.Label,{children:i({id:l("folder.form.name.label"),defaultMessage:"Folder name"})}),t.jsx(cn,{ref:f,value:p,onChange:w=>{g(w.target.value),x(void 0)},autoFocus:!0}),t.jsx(ne.Error,{})]})}),t.jsx(se.Footer,{children:t.jsxs(I,{gap:2,justifyContent:"space-between",width:"100%",children:[t.jsx(Z,{variant:"tertiary",onClick:a,type:"button",children:i({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),t.jsx(Z,{type:"submit",loading:k,disabled:r==="rename"&&p.trim()===o.trim(),children:i(r==="rename"?{id:l("folder.rename.submit"),defaultMessage:"Save"}:{id:l("folder.create.submit"),defaultMessage:"Create folder"})})]})})]})]})})},Qn=({folder:e,dragData:s})=>{const{formatMessage:n}=L(),{copy:a}=es(),{toggleNotification:r}=me(),{deselect:o}=ye(),[i,d]=c.useState(!1),[u,p]=c.useState(!1),[g,h]=c.useState(!1),x=c.useMemo(()=>[s],[s]),f=async()=>{const m=`${window.location.origin}${window.location.pathname}?folder=${e.id}`,b=await a(m);r({type:b?"success":"danger",message:n(b?{id:l("list.folder.actions.copy-link.success"),defaultMessage:"Folder link copied."}:{id:l("list.folder.actions.copy-link.error"),defaultMessage:"Failed to copy the folder link."})})};return t.jsxs(t.Fragment,{children:[t.jsxs(P.Root,{modal:!1,children:[t.jsx(P.Trigger,{tag:de,icon:t.jsx(hn,{}),variant:"ghost",label:n({id:l("control-card.more-actions"),defaultMessage:"More actions"})}),t.jsxs(us,{popoverPlacement:"bottom-end",zIndex:2,minWidth:"22rem",children:[t.jsx(P.Item,{startIcon:t.jsx(_e,{}),onSelect:f,children:n({id:l("list.folder.actions.copy-link"),defaultMessage:"Copy link to folder"})}),t.jsx(P.Separator,{}),t.jsx(P.Item,{startIcon:t.jsx(La,{}),onSelect:()=>d(!0),children:n({id:l("list.folder.actions.rename"),defaultMessage:"Rename folder"})}),t.jsx(P.Item,{startIcon:t.jsx(ts,{}),onSelect:()=>p(!0),children:n({id:l("list.folder.actions.move"),defaultMessage:"Move to folder"})}),t.jsx(P.Item,{startIcon:t.jsx(gt,{}),variant:"danger",onSelect:()=>h(!0),children:n({id:l("list.folder.actions.delete"),defaultMessage:"Delete folder"})})]})]}),i&&t.jsx(Yn,{open:!0,mode:"rename",folderId:e.id,initialName:e.name,parentFolderId:s.parentId,onClose:()=>d(!1)}),u&&t.jsx(ps,{open:!0,onClose:()=>p(!1),items:x,onSuccess:()=>o(Ee(e.id))}),g&&t.jsx(hs,{open:!0,onClose:()=>h(!1),target:{fileIds:[],folderIds:[e.id]},onSuccess:()=>o(Ee(e.id))})]})},Pe=e=>{re(e)&&e.stopPropagation()},pi=y(I)`
  position: absolute;
  top: ${({theme:e})=>e.spaces[3]};
  left: ${({theme:e})=>e.spaces[3]};
  z-index: 1;
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
`,hi=y(Pa)`
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
`,fi=y(_)`
  grid-column: 1 / -1;
`,mi=y(I)`
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
`,xi=y(I)`
  flex-shrink: 0;
  color: ${({theme:e})=>e.colors.neutral600};
`,yi=y(Qe)`
  flex: 1;
  min-width: 0;
`,bi=({folder:e,orderedItemKeys:s})=>{const{formatMessage:n}=L(),{navigateToFolder:a}=Ze(),{isMovePending:r}=pe()??{isMovePending:!1},{isSelected:o,toggle:i,selectRange:d}=ye(),{canUpdate:u}=ge(),{dragData:p,draggable:{attributes:g,listeners:h,setNodeRef:x,isDragging:f},droppable:{setNodeRef:m},showValidDropHighlight:b,showInvalidDropCursor:j}=Gn(e),C=Ee(e.id),k=M=>{x(M),m(M)},S=M=>{re(M)&&(M.shiftKey?d(s,C):M.metaKey||M.ctrlKey?i(C):a(e))},w=M=>{re(M)&&(M.key==="Enter"?(M.preventDefault(),a(e)):M.key===" "&&(M.preventDefault(),i(C)))},A=M=>{M.stopPropagation(),M.shiftKey?d(s,C):i(C)};return t.jsxs(mi,{ref:k,...g,...h,$isDragging:f,$isMovePending:r,$isValidDropTarget:b,$isInvalidDropTarget:j,$isSelected:o(C),onClick:S,onKeyDown:w,onPointerDown:M=>{re(M)&&h?.onPointerDown?.(M)},role:"listitem",tabIndex:0,"data-native-context-menu":!0,children:[u&&t.jsx(I,{onKeyDown:M=>M.stopPropagation(),children:t.jsx(Fe,{checked:o(C),onClick:A,"aria-label":n({id:l("list.table.row.select"),defaultMessage:"Select {name}"},{name:e.name})})}),t.jsx(xi,{children:t.jsx(Ce,{width:20,height:20})}),t.jsx(yi,{textColor:"neutral800",children:e.name}),t.jsx(I,{onClick:Pe,onKeyDown:Pe,onPointerDown:Pe,children:t.jsx(Qn,{folder:e,dragData:p})})]})},Fs=y(_)`
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
`,ji=y.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,wi=y(I)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${({theme:e})=>e.colors.neutral500};
  background: ${({theme:e})=>e.colors.neutral100};
`,Mi=({asset:e})=>{const{alternativeText:s,ext:n,formats:a,mime:r,url:o,updatedAt:i,isLocal:d,isUrlSigned:u}=e;if(r?.includes(Me.Image)){const g=i&&!u?new Date(i).getTime():void 0,h=m=>g===void 0?m:m.includes("?")?`${m}&v=${g}`:`${m}?v=${g}`,x=fe(a?.thumbnail?.url)??fe(o),f=x&&h(x);if(f)return t.jsx(Fs,{children:t.jsx(ji,{src:f,alt:s||"",crossOrigin:!d&&u?"anonymous":void 0,draggable:!1,onDragStart:m=>m.preventDefault()})})}const p=Xe(r,n);return t.jsx(Fs,{children:t.jsx(wi,{justifyContent:"center",alignItems:"center",children:t.jsx(p,{width:48,height:48})})})},Ci=y(Na)`
  position: relative;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
`,Si=y(I)`
  min-width: 0;
  width: 100%;
`,vi=y(I)`
  color: ${({theme:e})=>e.colors.neutral600};
  flex-shrink: 0;
`,Ii=y(Qe)`
  flex: 1;
  min-width: 0;
`,Di=y.button`
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
`,$i=({asset:e,orderedItemKeys:s,onAssetItemClick:n})=>{const{formatMessage:a}=L(),r=Xe(e.mime,e.ext),{isMovePending:o}=pe()??{isMovePending:!1},{attributes:i,listeners:d,setNodeRef:u,isDragging:p,dragData:g}=qn(e),{isSelected:h,toggle:x,selectRange:f}=ye(),{canUpdate:m}=ge(),b=ds()?.getBusyMessage(e.id)??null,j=Ae(e.id),C=h(j),k=M=>{re(M)&&(M.shiftKey?f(s,j):M.metaKey||M.ctrlKey?x(j):n(e.id))},S=M=>{re(M)&&(M.key==="Enter"?(M.preventDefault(),n(e.id)):M.key===" "&&(M.preventDefault(),x(j)))},w=M=>{M.stopPropagation(),n(e.id)},A=M=>{M.stopPropagation(),M.shiftKey?f(s,j):x(j)};return t.jsxs(hi,{ref:u,...i,...d,...$n,$isDragging:p,$isMovePending:o,$isBusy:b!==null,$isSelected:C,tabIndex:0,role:"listitem","data-native-context-menu":!0,onDragStart:M=>M.preventDefault(),onClick:k,onKeyDown:S,onPointerDown:M=>{re(M)&&d?.onPointerDown?.(M)},children:[t.jsxs(Ci,{children:[m&&t.jsx(pi,{...ct,onKeyDown:M=>M.stopPropagation(),children:t.jsx(Fe,{checked:C,onClick:A,"aria-label":a({id:l("list.table.row.select"),defaultMessage:"Select {name}"},{name:e.name})})}),t.jsx(Mi,{asset:e}),b!==null?t.jsx(Rn,{zIndex:2,children:b}):null]}),t.jsx(Oa,{children:t.jsxs(Si,{alignItems:"center",gap:2,children:[t.jsx(vi,{children:t.jsx(r,{width:20,height:20})}),t.jsx(Di,{type:"button",onClick:w,children:t.jsx(Ii,{textColor:"primary800",children:e.name})}),t.jsx(I,{...ct,onClick:Pe,onKeyDown:Pe,onPointerDown:Pe,children:t.jsx(Kn,{asset:e,dragData:g})})]})})]})},ki=({assets:e,folders:s=[],renderedKeys:n,onAssetItemClick:a})=>{const r=s.length+e.length,o=n??cs({folders:s,assets:e});return r===0?null:t.jsxs(Je.Root,{gap:4,role:"list","data-testid":"assets-grid",children:[s.length>0&&t.jsx(fi,{children:t.jsx(Je.Root,{gap:4,children:s.map(i=>t.jsx(Je.Item,{col:3,m:4,s:6,xs:12,children:t.jsx(bi,{folder:i,orderedItemKeys:o})},`folder-${i.id}`))})}),e.map(i=>t.jsx(Je.Item,{col:3,m:4,s:6,xs:12,direction:"column",alignItems:"stretch",children:t.jsx($i,{asset:i,orderedItemKeys:o,onAssetItemClick:a})},i.id))]})},Xn=()=>{const[{query:e},s]=Re(),n=e?._q??"",a=c.useCallback(o=>{o?s({_q:as(o)},"push",!0):s({_q:""},"remove",!0)},[s]),r=c.useCallback(()=>a(""),[a]);return{searchQuery:n,isSearching:n!=="",setSearchQuery:a,clearSearch:r}},Ai=300,Ei=y(Ua)`
  > div {
    border: none;
  }
`,Ri=()=>{const{formatMessage:e}=L(),{searchQuery:s,setSearchQuery:n}=Xn(),{trackUsage:a}=Se(),r=fn(),[o,i]=c.useState(s),d=Ba(o,Ai),u=c.useRef(s),[{query:p}]=Re(),g=p?.folder??"",h=c.useRef(g);c.useEffect(()=>{d!==u.current&&(u.current=d,d&&a("didSearchMediaLibraryElements",{location:ae}),n(d))},[d,n,a]),c.useEffect(()=>{s!==u.current&&(u.current=s,i(s))},[s]),c.useEffect(()=>{g!==h.current&&(h.current=g,u.current=s,i(s))},[g,s]);const x=t.jsx(Ei,{onSubmit:f=>f.preventDefault(),children:t.jsx(_a,{name:"search-assets",value:o,onChange:f=>i(f.target.value),onClear:()=>i(""),clearLabel:e({id:"clearLabel",defaultMessage:"Clear"}),placeholder:e({id:l("header.search.placeholder"),defaultMessage:"Search"}),size:"S",children:e({id:l("search.label"),defaultMessage:"Search for an asset"})})});return r?t.jsx(_,{width:"100%",children:x}):x},Ti=y(Ha)`
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
`,Fi=y(Va)`
  background: ${({theme:e})=>e.colors.neutral100};

  tr {
    border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
  }
`,Zn=xe`
  width: 1%;
  white-space: nowrap;
`,Jn=xe`
  width: 100%;
  max-width: 0;
  overflow: hidden;
`,Ht=y(Wa)`
  height: 40px;
  padding: 0 ${({theme:e})=>e.spaces[4]};
  text-align: left;

  ${({$flex:e})=>e?Jn:Zn}
`,Ue=y(qa)`
  padding: 0 ${({theme:e})=>e.spaces[4]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
`,ea=y(Ue)`
  ${Jn}
`,Ne=y(Ue)`
  ${Zn}
`,ta=y.tr`
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
`,sa=y(Ue)`
  width: 5.6rem;
  white-space: nowrap;
`,Li=y(Ht)`
  width: 5.6rem;
  white-space: nowrap;
`,Oi=y(pt)`
  flex-shrink: 0;
  width: 1.6rem;
  height: 1.6rem;

  path {
    fill: ${({theme:e})=>e.colors.warning500};
  }
`,Pi=y.button`
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
`,ue=e=>{re(e)&&e.stopPropagation()},Ni=({asset:e})=>{const{ext:s,mime:n}=e,a=Xe(n,s);return t.jsx(I,{justifyContent:"center",alignItems:"center",borderRadius:"4px",color:"neutral500",width:"3.2rem",height:"3.2rem",shrink:0,children:t.jsx(a,{width:20,height:20})})},Ls=({asset:e,orderedItemKeys:s,onAssetItemClick:n})=>{const a=ss(),{formatDate:r,formatMessage:o}=L(),{isMovePending:i}=pe()??{isMovePending:!1},{attributes:d,listeners:u,setNodeRef:p,isDragging:g,dragData:h}=qn(e),{isSelected:x,toggle:f,selectRange:m}=ye(),{canUpdate:b}=ge(),j=ds()?.getBusyMessage(e.id)??null,C=Ae(e.id),k=x(C),S=!e.caption||!e.alternativeText,w=o({id:l("list.table.row.metadata-missing"),defaultMessage:"This asset is missing metadata (caption or alternative text)."}),A=T=>{re(T)&&(T.shiftKey?m(s,C):T.metaKey||T.ctrlKey?f(C):n(e.id))},M=T=>{re(T)&&(T.key==="Enter"?(T.preventDefault(),n(e.id)):T.key===" "&&(T.preventDefault(),f(C)))},D=T=>{T.stopPropagation(),n(e.id)},U=T=>{T.stopPropagation(),T.shiftKey?m(s,C):f(C)};return t.jsxs(ta,{ref:p,...d,...u,...$n,$isDragging:g,$isMovePending:i,$isBusy:j!==null,$isSelected:k,tabIndex:0,role:"row","data-native-context-menu":!0,onDragStart:T=>T.preventDefault(),onClick:A,onKeyDown:M,onPointerDown:T=>{re(T)&&u?.onPointerDown?.(T)},children:[b&&t.jsx(sa,{...ct,onClick:ue,onKeyDown:ue,children:t.jsx(I,{children:t.jsx(Fe,{checked:k,onClick:U,"aria-label":o({id:l("list.table.row.select"),defaultMessage:"Select {name}"},{name:e.name})})})}),t.jsx(ea,{children:t.jsxs(I,{alignItems:"center",justifyContent:"space-between",gap:2,minWidth:0,children:[t.jsxs(I,{gap:3,alignItems:"center",minWidth:0,children:[j!==null?t.jsx(I,{justifyContent:"center",width:"3.2rem",height:"3.2rem",children:t.jsx($e,{small:!0,children:j})}):t.jsx(Ni,{asset:e}),t.jsxs(I,{direction:"column",alignItems:"flex-start",minWidth:0,children:[t.jsx(Pi,{type:"button",onClick:D,children:t.jsx(Qe,{textColor:"neutral800",fontWeight:"semiBold",children:e.name})}),!a&&t.jsx(R,{textColor:"neutral600",variant:"pi",children:e.size?Kt(e.size,1):"-"})]})]}),S&&t.jsx(Jt,{label:w,children:t.jsx(Oi,{"aria-label":w,role:"img"})})]})}),a&&t.jsxs(t.Fragment,{children:[t.jsx(Ne,{children:t.jsx(R,{textColor:"neutral600",children:e.createdAt?r(new Date(e.createdAt),{dateStyle:"long"}):"-"})}),t.jsx(Ne,{children:t.jsx(R,{textColor:"neutral600",children:e.updatedAt?r(new Date(e.updatedAt),{dateStyle:"long"}):"-"})}),t.jsx(Ne,{children:t.jsx(R,{textColor:"neutral600",children:e.size?Kt(e.size,1):"-"})})]}),t.jsx(Ue,{...ct,onClick:ue,onKeyDown:ue,onPointerDown:ue,children:t.jsx(I,{justifyContent:"flex-end",children:t.jsx(Kn,{asset:e,dragData:h})})})]})},Bi=y(ta)`
  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
  }
`,Os=({folder:e,orderedItemKeys:s})=>{const n=ss(),{formatDate:a,formatMessage:r}=L(),{navigateToFolder:o}=Ze(),{isSelected:i,toggle:d,selectRange:u}=ye(),{canUpdate:p}=ge(),{isMovePending:g}=pe()??{isMovePending:!1},{dragData:h,draggable:{attributes:x,listeners:f,setNodeRef:m,isDragging:b},droppable:{setNodeRef:j},showValidDropHighlight:C,showInvalidDropCursor:k}=Gn(e),S=Ee(e.id),w=D=>{re(D)&&(D.shiftKey?u(s,S):D.metaKey||D.ctrlKey?d(S):o(e))},A=D=>{re(D)&&(D.key==="Enter"?(D.preventDefault(),o(e)):D.key===" "&&(D.preventDefault(),d(S)))},M=D=>{D.stopPropagation(),D.shiftKey?u(s,S):d(S)};return t.jsxs(Bi,{ref:D=>{m(D),j(D)},...x,...f,$isDragging:b,$isMovePending:g,$isValidDropTarget:C,$isInvalidDropTarget:k,$isSelected:i(S),tabIndex:0,role:"row","data-native-context-menu":!0,onDragStart:D=>{re(D)&&D.preventDefault()},onClick:w,onKeyDown:A,onPointerDown:D=>{re(D)&&f?.onPointerDown?.(D)},children:[p&&t.jsx(sa,{onClick:ue,onKeyDown:ue,children:t.jsx(I,{children:t.jsx(Fe,{checked:i(S),onClick:M,"aria-label":r({id:l("list.table.row.select"),defaultMessage:"Select {name}"},{name:e.name})})})}),t.jsx(ea,{children:t.jsxs(I,{gap:3,alignItems:"center",minWidth:0,children:[t.jsx(I,{justifyContent:"center",alignItems:"center",borderRadius:"4px",color:"neutral600",width:"3.2rem",height:"3.2rem",shrink:0,children:t.jsx(Ce,{width:20,height:20})}),t.jsx(Qe,{textColor:"neutral800",fontWeight:"semiBold",children:e.name})]})}),n&&t.jsxs(t.Fragment,{children:[t.jsx(Ne,{children:t.jsx(R,{textColor:"neutral600",children:e.createdAt?a(new Date(e.createdAt),{dateStyle:"long"}):"-"})}),t.jsx(Ne,{children:t.jsx(R,{textColor:"neutral600",children:e.updatedAt?a(new Date(e.updatedAt),{dateStyle:"long"}):"-"})}),t.jsx(Ne,{children:t.jsx(R,{textColor:"neutral600",children:"-"})})]}),t.jsx(Ue,{onClick:ue,onKeyDown:ue,onPointerDown:ue,children:t.jsx(I,{justifyContent:"flex-end",children:t.jsx(Qn,{folder:e,dragData:h})})})]})},_i=({assets:e,folders:s=[],mixedItems:n=null,renderedKeys:a,onAssetItemClick:r})=>{const o=ss(),{formatMessage:i}=L(),{selectedKeys:d,selectAll:u,clear:p}=ye(),{canUpdate:g}=ge(),{trackUsage:h}=Se(),x=o?Is:Is.filter(w=>w.name==="name"||w.name==="actions"),f=g,m=x.length+(f?1:0),b=s.length+e.length,j=a??cs({folders:s,assets:e,mixedItems:n}),{allSelected:C,isIndeterminate:k}=Ko(d,j),S=()=>{C?p():(h("didSelectAllMediaLibraryElements"),u(j))};return b===0?null:t.jsxs(Ti,{colCount:m,rowCount:(n?n.length:b)+1,children:[t.jsx(Fi,{children:t.jsxs(za,{children:[f&&t.jsx(Li,{children:t.jsx(I,{children:t.jsx(Fe,{checked:k?"indeterminate":C,disabled:j.length===0,onCheckedChange:S,"aria-label":i({id:l("list.table.header.select-all"),defaultMessage:"Select all"})})})}),x.map(w=>{const A=i(w.label);return"isVisuallyHidden"in w&&w.isVisuallyHidden?t.jsx(Ht,{$flex:w.name==="name",children:t.jsx(Te,{children:i({id:l("table.header.actions"),defaultMessage:"actions"})})},w.name):t.jsx(Ht,{$flex:w.name==="name",children:t.jsx(R,{textColor:"neutral600",variant:"sigma",children:A})},w.name)})]})}),t.jsxs(Ka,{children:[n?.map(w=>w.kind==="folder"?t.jsx(Os,{folder:w.folder,orderedItemKeys:j},`folder-${w.folder.id}`):t.jsx(Ls,{asset:w.asset,orderedItemKeys:j,onAssetItemClick:r},w.asset.id)),!n&&s.map(w=>t.jsx(Os,{folder:w,orderedItemKeys:j},`folder-${w.id}`)),!n&&e.map(w=>t.jsx(Ls,{asset:w,orderedItemKeys:j,onAssetItemClick:r},w.id))]})]})},Ui=(e,s,n,a)=>{const r=[];return e.forEach(o=>{r.push({kind:"file",id:o,name:"",folderId:dt(n,"file",o,a)})}),s.forEach(o=>{r.push({kind:"folder",id:o,name:"",parentId:dt(n,"folder",o,a)})}),r},zi=y(I)`
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
`,Ki=y(I)`
  margin-left: auto;
  align-items: center;
  gap: ${({theme:e})=>e.spaces[2]};
`,Hi=y(_)`
  width: 1px;
  align-self: stretch;
  background: ${({theme:e})=>e.colors.neutral150};
  margin-left: ${({theme:e})=>e.spaces[1]};
`,Vi=({assets:e=[],locations:s=Sn,renderedKeys:n=[]})=>{const{formatMessage:a}=L(),{toggleNotification:r}=me(),o=xt(),{canUpdate:i}=ge(),{selectedIds:d,selectedFolderIds:u,selectAll:p,clear:g}=ye(),{trackUsage:h}=Se(),{currentFolderId:x}=Ze(),f=Yr(),[m,{isLoading:b}]=Ga(),[j,C]=c.useState(!1),[k,S]=c.useState(!1),[w,A]=c.useState(!1),M=d.size+u.size,[D,U]=c.useState(null),[T,X]=c.useState(0);c.useEffect(()=>{if(!D){X(0);return}const B=()=>{const J=D.getBoundingClientRect();X(J.height===0?0:Math.max(0,window.innerHeight-J.top))};B();const z=new ResizeObserver(B);return z.observe(D),window.addEventListener("resize",B),()=>{z.disconnect(),window.removeEventListener("resize",B)}},[D,f]);const N=()=>{h("didSelectAllMediaLibraryElements"),p(n)},v=w||b,$=c.useMemo(()=>Ui(d,u,s,x),[d,u,s,x]),E=d.size>Ss,q=c.useMemo(()=>{const B=new Map(e.map(({id:z,mime:J})=>[z,J]));return[...d].filter(z=>Mn(B.get(z))).length},[e,d]),G=d.size>0&&q===0;let W;E?W=a({id:l("list.bulk-actions.create-metadata.too-many"),defaultMessage:"Metadata can be generated for up to {max} assets at a time. Select fewer assets to continue."},{max:Ss}):G&&(W=a({id:l("list.bulk-actions.create-metadata.no-eligible"),defaultMessage:"Metadata can only be generated for images. None of the selected assets are supported."}));const O=async()=>{if(b||E||G)return;const B=Array.from(d),z=await m({fileIds:B});if("error"in z){r({type:"danger",message:a({id:l("list.bulk-actions.create-metadata.error"),defaultMessage:"An error occurred while generating metadata."})});return}const J=z.data.filter(({status:oe})=>oe==="success").length,K=z.data.filter(({status:oe})=>oe==="skipped").length,Y=z.data.filter(({status:oe})=>oe==="error").length,ee=u.size;if(Y===z.data.length){r({type:"danger",message:a({id:l("list.bulk-actions.create-metadata.error"),defaultMessage:"An error occurred while generating metadata."})});return}r(K===0&&Y===0&&ee===0?{type:"success",message:a({id:l("list.bulk-actions.create-metadata.success"),defaultMessage:"{count, plural, =1 {Metadata generated for # asset} other {Metadata generated for # assets}}"},{count:J})}:{type:"warning",message:a({id:l("list.bulk-actions.create-metadata.partial"),defaultMessage:"{successCount} generated, {skippedCount} skipped (unsupported file type), {errorCount} failed{folderCount, plural, =0 {} one {, # folder ignored} other {, # folders ignored}}"},{successCount:J,skippedCount:K,errorCount:Y,folderCount:ee})}),g()};return M===0||!i?null:t.jsxs(t.Fragment,{children:[t.jsx(_,{"aria-hidden":!0,height:`${T}px`,"data-bar-spacer":!0}),t.jsxs(zi,{ref:U,$isDrawerOpen:f,$isStacked:o,tag:"section",role:"region","data-native-context-menu":!0,"aria-label":a({id:l("list.bulk-actions.label"),defaultMessage:"Bulk actions"}),children:[t.jsx(R,{"data-bar-slot":"count",fontWeight:"bold",textColor:"neutral800",marginRight:4,children:a({id:l("list.bulk-actions.selected-count"),defaultMessage:"{count, plural, =1 {# item selected} other {# items selected}}"},{count:M})}),t.jsx(Ya,{onClick:N,marginRight:4,disabled:v,children:a({id:l("list.bulk-actions.select-all"),defaultMessage:"Select all"})}),t.jsxs(Ki,{"data-bar-slot":"actions",children:[o&&t.jsx(Jt,{label:W,children:t.jsx(_,{children:t.jsx(Z,{size:"S",startIcon:t.jsx(Qa,{}),disabled:v||d.size===0||E||G,loading:b,onClick:O,children:a({id:l("list.bulk-actions.create-metadata"),defaultMessage:"Create metadata"})})})}),t.jsx(de,{variant:"tertiary",disabled:v,label:a({id:l("list.bulk-actions.move"),defaultMessage:"Move"}),onClick:()=>S(!0),children:t.jsx(ts,{})}),t.jsx(ps,{open:k,onClose:()=>S(!1),items:$,onSuccess:g}),t.jsx(de,{variant:"danger-light",disabled:v,label:a({id:l("list.bulk-actions.delete"),defaultMessage:"Delete"}),onClick:()=>C(!0),children:t.jsx(gt,{})}),t.jsx(hs,{open:j,onClose:()=>C(!1),target:{fileIds:Array.from(d),folderIds:Array.from(u)},onSuccess:g,onPendingChange:A})]}),t.jsx(Hi,{"data-bar-slot":"divider","aria-hidden":!0}),t.jsx(de,{variant:"ghost",label:a({id:l("list.bulk-actions.clear"),defaultMessage:"Clear selection"}),onClick:g,disabled:v,children:t.jsx(ht,{})})]})]})},na=c.createContext(null),Wi=y(_)`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
`,qi=({children:e,onDrop:s,disabled:n=!1})=>{const[a,r]=c.useState(!1),o=c.useRef(0),i={isDragging:a};c.useEffect(()=>{const h=()=>{r(!1),o.current=0},x=f=>{f.relatedTarget||(r(!1),o.current=0)};return document.addEventListener("dragend",h),document.addEventListener("dragleave",x),()=>{document.removeEventListener("dragend",h),document.removeEventListener("dragleave",x)}},[]);const d=c.useCallback(h=>{h.preventDefault(),h.stopPropagation(),!n&&h.dataTransfer.types.includes("Files")&&(o.current+=1,r(!0))},[n]),u=c.useCallback(h=>{h.preventDefault(),h.stopPropagation(),o.current-=1,o.current<=0&&(r(!1),o.current=0)},[]),p=c.useCallback(h=>{h.preventDefault(),h.stopPropagation(),h.dataTransfer.dropEffect="copy"},[]),g=c.useCallback(h=>{if(h.preventDefault(),h.stopPropagation(),r(!1),o.current=0,n)return;const{files:x}=h.dataTransfer;x?.length&&s&&s(Array.from(x))},[s,n]);return t.jsx(na.Provider,{value:i,children:t.jsx(Wi,{"data-testid":"assets-dropzone",onDragEnter:d,onDragLeave:u,onDragOver:p,onDrop:g,children:e})})},aa=()=>{const e=c.useContext(na);if(!e)throw new Error("useUploadDropZone must be used within UploadDropZone");return{isDragging:e.isDragging}},Gi=(e,s)=>`${e}${Math.floor(s*255).toString(16).padStart(2,"0")}`,Yi=y(_)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({theme:e})=>Gi(e.colors.primary200,.3)};
  border: 1px solid ${({theme:e})=>e.colors.primary700};
  border-radius: ${({theme:e})=>e.borderRadius};
  z-index: 1;
  pointer-events: none;
`,Qi=({children:e})=>{const{isDragging:s}=aa(),a=pe()?.isInternalDragActive??!1,r=s&&!a;return t.jsxs(_,{position:"relative",children:[r&&t.jsx(Yi,{}),e]})},Xi=y(_)`
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
`,Zi=({uploadDropZoneRef:e,folderName:s})=>{const{formatMessage:n}=L(),{isDragging:a}=aa(),o=pe()?.isInternalDragActive??!1,i=a&&!o,[d,u]=c.useState(0);return c.useEffect(()=>{if(!e?.current)return;const p=()=>{const h=e.current?.getBoundingClientRect();h&&u(x=>x!==h.left?h.left:x)};p();const g=new ResizeObserver(p);return g.observe(e.current),()=>g.disconnect()},[e]),i?t.jsxs(Xi,{$leftContentWidth:d,children:[t.jsx(R,{textColor:"neutral0",children:n({id:l("dropzone.upload.message"),defaultMessage:"Drop here to upload to"})}),t.jsxs(I,{gap:2,alignItems:"center",children:[t.jsx(Ce,{width:20,height:20,fill:"neutral0"}),t.jsx(R,{textColor:"neutral0",fontWeight:"semiBold",children:s})]})]}):null},Ji=({onAddAssets:e,canAddAssets:s,searchQuery:n,onClearSearch:a})=>{const{formatMessage:r}=L(),o=!!n;return t.jsxs(I,{direction:"column",alignItems:"center",gap:6,padding:11,children:[t.jsx(mn,{width:"16rem",height:"8.8rem"}),t.jsxs(I,{direction:"column",alignItems:"center",gap:2,textAlign:"center",children:[t.jsx(R,{variant:"delta",tag:"p",fontWeight:"bold",textColor:"neutral800",children:r(o?{id:l("list.search.empty.title"),defaultMessage:"No results found"}:{id:l("list.empty.title"),defaultMessage:"No assets yet"})}),t.jsx(R,{textColor:"neutral600",children:o?r({id:l("list.search.empty.description"),defaultMessage:'No assets or folders match "{query}". Try a different search.'},{query:n}):r({id:l("list.empty.description"),defaultMessage:"Get started by uploading assets or creating a folder."})})]}),o?t.jsx(Z,{variant:"secondary",startIcon:t.jsx(ht,{"aria-hidden":!0}),onClick:a,children:r({id:l("list.search.empty.clear"),defaultMessage:"Clear search"})}):s&&t.jsx(Z,{onClick:e,children:r({id:l("list.empty.add-assets"),defaultMessage:"Add assets"})})]})},el=({onClearFilters:e})=>{const{formatMessage:s}=L();return t.jsxs(I,{direction:"column",alignItems:"center",gap:6,padding:11,children:[t.jsx(mn,{width:"16rem",height:"8.8rem"}),t.jsx(R,{textColor:"neutral600",children:s({id:l("list.filters.empty"),defaultMessage:"No items matched current filters"})}),t.jsx(Z,{variant:"secondary",startIcon:t.jsx(ht,{"aria-hidden":!0}),onClick:e,children:s({id:l("list.filters.clear"),defaultMessage:"Clear filters"})})]})},fs=["folder","picture","audio","video","document"],ms=["1day","3days","1week","1month","3months","6months","1year"],tl={created:"createdAt",updated:"updatedAt"},sl={createdAt:"created",updatedAt:"updated"},Ps={exact:"isExactly",within:"withinLast",notwithin:"notWithinLast"},nl={isExactly:"exact",withinLast:"within",notWithinLast:"notwithin"},Ns={rangeis:"is",rangenot:"isNot"},al={is:"rangeis",isNot:"rangenot"},Bs=/^\d{4}-\d{2}-\d{2}$/,rl=e=>fs.includes(e),ol=e=>ms.includes(e),il=e=>{const[s,n,a]=e.split(":");if(!s||!n||!a)return null;if(s==="type"){if(n!=="is"&&n!=="not")return null;const o=a.split(",").filter(rl);return o.length>0?{kind:"type",condition:n==="is"?"is":"isNot",values:o}:null}const r=tl[s];if(!r)return null;if(n in Ps)return ol(a)?{kind:"date",field:r,mode:"preset",condition:Ps[n],preset:a}:null;if(n in Ns){const[o,i]=a.split("..");return Bs.test(o??"")&&Bs.test(i??"")?{kind:"date",field:r,mode:"range",condition:Ns[n],from:o,to:i}:null}return null},ll=e=>typeof e!="string"||e===""?[]:e.split(";").map(il).filter(s=>s!==null),dl=e=>{if(e.kind==="type")return`type:${e.condition==="is"?"is":"not"}:${e.values.join(",")}`;const s=sl[e.field];return e.mode==="preset"?`${s}:${nl[e.condition]}:${e.preset}`:`${s}:${al[e.condition]}:${e.from}..${e.to}`},_s=e=>e.map(dl).join(";"),cl=()=>{const[{query:e},s]=Re(),n=ll(e?.filters),a=r=>{r.length===0?s(he(e,{filters:void 0}),"push",!0):s(he(e,{filters:_s(r)}),"push",!0)};return{filters:n,serialized:_s(n),addFilter:r=>a([...n,r]),updateFilter:(r,o)=>a(n.map((i,d)=>d===r?o:i)),removeFilter:r=>a(n.filter((o,i)=>i!==r)),clearFilters:()=>a([])}},Vt={picture:"image",audio:"audio",video:"video"},Us=Object.values(Vt),ul={"1day":{days:1},"3days":{days:3},"1week":{days:7},"1month":{months:1},"3months":{months:3},"6months":{months:6},"1year":{years:1}},gl=(e,s)=>{const{days:n=0,months:a=0,years:r=0}=ul[s],o=new Date(e.getTime());if(r||a){const i=o.getDate();o.setDate(1),o.setFullYear(o.getFullYear()-r),o.setMonth(o.getMonth()-a);const d=new Date(o.getFullYear(),o.getMonth()+1,0).getDate();o.setDate(Math.min(i,d))}return o.setDate(o.getDate()-n),o},zs=e=>{const s=new Date(e.getTime());return s.setHours(0,0,0,0),s},Ks=e=>{const s=new Date(e.getTime());return s.setHours(23,59,59,999),s},ut=e=>{const[s,n,a]=e.split("-").map(Number);return new Date(s,n-1,a)},pl=(e,s)=>{const{field:n}=e;if(e.mode==="preset"){const o=gl(s,e.preset);switch(e.condition){case"withinLast":return{[n]:{$gte:o.toISOString()}};case"notWithinLast":return{[n]:{$lt:o.toISOString()}};case"isExactly":return{[n]:{$gte:zs(o).toISOString(),$lte:Ks(o).toISOString()}}}}const a=zs(ut(e.from)).toISOString(),r=Ks(ut(e.to)).toISOString();return e.condition==="is"?{[n]:{$gte:a,$lte:r}}:{$or:[{[n]:{$lt:a}},{[n]:{$gt:r}}]}},hl=e=>{const s=e.values.filter(r=>r!=="folder");if(s.length===0)return null;const n=s.map(r=>r==="document"?{$and:Us.map(o=>({mime:{$notContains:o}}))}:{mime:{$contains:Vt[r]}});if(e.condition==="is")return n.length===1?n[0]:{$or:n};const a=s.map(r=>r==="document"?{$or:Us.map(o=>({mime:{$contains:o}}))}:{mime:{$notContains:Vt[r]}});return a.length===1?a[0]:{$and:a}},fl=(e,s)=>{const n=[],a=[];let r=!0,o=!0;for(const i of e){if(i.kind==="date"){const p=pl(i,s);n.push(p),a.push(p);continue}const d=i.values.includes("folder");(i.condition==="is"?!d:d)&&(r=!1);const u=hl(i);u?n.push(u):i.condition==="is"&&(o=!1)}return{fileClauses:n,folderClauses:a,showFolders:r,showFiles:o}},ml=y.button`
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
`,Hs=e=>{const s=`${e.getMonth()+1}`.padStart(2,"0"),n=`${e.getDate()}`.padStart(2,"0");return`${e.getFullYear()}-${s}-${n}`},xl=e=>{const[s,n,a]=e.split("-").map(Number);return new Date(s,n-1,a)},yl=(e,s)=>{const n=new Date(e,s,1),a=new Date(n.getTime());a.setDate(n.getDate()-(n.getDay()+6)%7);const r=[],o=new Date(a.getTime());do{const i=[];for(let d=0;d<7;d+=1)i.push(new Date(o.getTime())),o.setDate(o.getDate()+1);r.push(i)}while(o.getMonth()===s&&o.getFullYear()===e);return r},Wt=({from:e,to:s,onSelect:n})=>{const{formatMessage:a,formatDate:r}=L(),o=e?xl(e):new Date,[i,d]=c.useState(o.getFullYear()),[u,p]=c.useState(o.getMonth()),[g,h]=c.useState(null),x=g??e??null,f=g?null:s??null,m=k=>{const S=new Date(i,u+k,1);d(S.getFullYear()),p(S.getMonth())},b=k=>{const S=Hs(k);if(!g){h(S);return}const[w,A]=S<g?[S,g]:[g,S];h(null),n(w,A)},j=yl(i,u),C=j[0].map(k=>r(k,{weekday:"short"}).slice(0,2));return t.jsxs(_,{padding:2,width:"100%",role:"group","aria-label":a({id:l("list.filters.calendar.label"),defaultMessage:"Select date range"}),"data-testid":"date-range-calendar",children:[t.jsxs(I,{justifyContent:"space-between",alignItems:"center",paddingBottom:2,children:[t.jsx(de,{variant:"ghost",label:a({id:l("list.filters.calendar.previous-month"),defaultMessage:"Previous month"}),onClick:()=>m(-1),children:t.jsx(Xa,{})}),t.jsx(R,{fontWeight:"semiBold",textColor:"neutral800",children:r(new Date(i,u,1),{month:"long",year:"numeric"})}),t.jsx(de,{variant:"ghost",label:a({id:l("list.filters.calendar.next-month"),defaultMessage:"Next month"}),onClick:()=>m(1),children:t.jsx(Za,{})})]}),t.jsx(I,{children:C.map((k,S)=>t.jsx(I,{width:"3rem",height:"2.4rem",justifyContent:"center",children:t.jsx(R,{variant:"pi",fontWeight:"semiBold",textColor:"neutral600",children:k})},S))}),j.map((k,S)=>t.jsx(I,{children:k.map(w=>{const A=Hs(w),M=A===x||A===f,D=x!==null&&f!==null&&A>x&&A<f;return t.jsxs(ml,{type:"button",$isEdge:M,$inRange:D,$isMuted:w.getMonth()!==u,onClick:()=>b(w),children:[t.jsx(Te,{children:r(w,{dateStyle:"long"})}),t.jsx("span",{"aria-hidden":!0,children:w.getDate()})]},A)})},S))]})},qt={folder:{id:l("list.filters.type.folder"),defaultMessage:"Folder"},picture:{id:l("list.filters.type.picture"),defaultMessage:"Picture"},audio:{id:l("list.filters.type.audio"),defaultMessage:"Audio"},video:{id:l("list.filters.type.video"),defaultMessage:"Video"},document:{id:l("list.filters.type.document"),defaultMessage:"Document"}},Gt={"1day":{id:l("list.filters.preset.1day"),defaultMessage:"1 day ago"},"3days":{id:l("list.filters.preset.3days"),defaultMessage:"3 days ago"},"1week":{id:l("list.filters.preset.1week"),defaultMessage:"1 week ago"},"1month":{id:l("list.filters.preset.1month"),defaultMessage:"1 month ago"},"3months":{id:l("list.filters.preset.3months"),defaultMessage:"3 months ago"},"6months":{id:l("list.filters.preset.6months"),defaultMessage:"6 months ago"},"1year":{id:l("list.filters.preset.1year"),defaultMessage:"1 year ago"}},Yt={createdAt:{id:l("list.filters.field.created"),defaultMessage:"Creation date"},updatedAt:{id:l("list.filters.field.updated"),defaultMessage:"Last modified"}},Ft=y(P.SubTrigger)`
  width: 100%;
  justify-content: space-between;
`,Oe="24.2rem",Lt="70dvh",bl=`min(${Oe}, calc(100dvw - 2rem))`,Ot=y(P.Item)`
  width: 100%;
`,Vs=y(_)`
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
`,jl=y(er)`
  height: 1.6rem;
  min-width: auto;
  padding: 0 0.4rem;
`,wl=({listFilters:e})=>{const{formatMessage:s}=L(),{trackUsage:n}=Se(),[a,r]=c.useState(!1),{filters:o,addFilter:i,updateFilter:d,removeFilter:u}=e,p=v=>n("didFilterMediaLibraryElements",{location:ae,filter:v});let g=-1;for(let v=o.length-1;v>=0;v-=1)if(o[v].kind==="type"){g=v;break}const h=g>=0?o[g]:null,x=h&&h.kind==="type"?h.values:[],f=v=>{const $=!x.includes(v),E=$?[...x,v]:x.filter(q=>q!==v);$&&p("type"),h&&h.kind==="type"?E.length===0?u(g):d(g,{...h,values:E}):E.length>0&&i({kind:"type",condition:"is",values:E})},m=(v,$)=>{p(v);for(let E=o.length-1;E>=0;E-=1){const q=o[E];if(q.kind==="date"&&q.mode==="preset"&&q.field===v){d(E,{...q,preset:$});return}}i({kind:"date",field:v,mode:"preset",condition:"withinLast",preset:$})},b=(v,$)=>{p("createdAt"),i({kind:"date",field:"createdAt",mode:"range",condition:"is",from:v,to:$}),r(!1)},j=fn(),[C,k]=c.useState(null),[S,w]=c.useState(!1),A=v=>{r(v),v||(k(null),w(!1))},M=v=>{k($=>$===v?null:v),w(!1)},D=fs.map(v=>t.jsx(P.Item,{role:"menuitemcheckbox","aria-checked":x.includes(v),onSelect:$=>{$.preventDefault(),f(v)},startIcon:t.jsx(Fe,{checked:x.includes(v),tabIndex:-1,"aria-hidden":!0}),children:s(qt[v])},v)),U=v=>{for(let $=o.length-1;$>=0;$-=1){const E=o[$];if(E.kind==="date"&&E.mode==="preset"&&E.field===v)return E.preset}return null},T=v=>{const $=U(v);return ms.map(E=>t.jsx(P.Item,{role:"menuitemradio","aria-checked":$===E,onSelect:()=>{m(v,E)},endIcon:$===E?t.jsx(mt,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem",fill:"primary600"}):null,children:s(Gt[E])},E))},X=s({id:l("list.filters.field.type"),defaultMessage:"Type"}),N=s({id:l("list.filters.select-date-range"),defaultMessage:"Select date range"});return t.jsxs(P.Root,{open:a,onOpenChange:A,children:[t.jsx(P.Trigger,{variant:"tertiary",startIcon:t.jsx(Ja,{"aria-hidden":!0}),endIcon:null,children:t.jsxs(I,{gap:2,alignItems:"center",tag:"span",children:[s({id:l("list.filters.trigger"),defaultMessage:"Filter"}),o.length>0&&t.jsx(jl,{children:o.length})]})}),t.jsx(P.Content,{popoverPlacement:"bottom-start",zIndex:2,maxHeight:Lt,width:j?bl:Oe,children:j?t.jsxs(t.Fragment,{children:[t.jsx(Ot,{"aria-expanded":C==="type",onSelect:v=>{v.preventDefault(),M("type")},endIcon:t.jsx(Pt,{$open:C==="type","aria-hidden":!0}),children:X}),C==="type"&&t.jsx(Vs,{children:D}),["createdAt","updatedAt"].map(v=>t.jsxs(_,{width:"100%",children:[t.jsx(Ot,{"aria-expanded":C===v,onSelect:$=>{$.preventDefault(),M(v)},endIcon:t.jsx(Pt,{$open:C===v,"aria-hidden":!0}),children:s(Yt[v])}),C===v&&t.jsxs(Vs,{children:[T(v),v==="createdAt"&&t.jsxs(t.Fragment,{children:[t.jsx(Ot,{"aria-expanded":S,onSelect:$=>{$.preventDefault(),w(E=>!E)},endIcon:t.jsx(Pt,{$open:S,"aria-hidden":!0}),children:N}),S&&t.jsx(_,{paddingLeft:2,children:t.jsx(Wt,{onSelect:b})})]})]})]},v))]}):t.jsxs(t.Fragment,{children:[t.jsxs(P.SubRoot,{children:[t.jsx(Ft,{children:X}),t.jsx(Nt,{zIndex:2,maxHeight:Lt,width:Oe,children:D})]}),["createdAt","updatedAt"].map(v=>t.jsxs(P.SubRoot,{children:[t.jsx(Ft,{children:s(Yt[v])}),t.jsxs(Nt,{zIndex:2,maxHeight:Lt,width:Oe,children:[T(v),v==="createdAt"&&t.jsxs(P.SubRoot,{children:[t.jsx(Ft,{children:N}),t.jsx(Nt,{zIndex:2,maxHeight:"none",width:Oe,children:t.jsx(Wt,{onSelect:b})})]})]})]},v))]})})]})},Ml=y(I)`
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};
  overflow: hidden;
`,xs=y.button`
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
`,Cl=y.span`
  display: inline-flex;
  align-items: center;
  padding: ${({theme:e})=>`${e.spaces[1]} ${e.spaces[2]}`};
  border-right: 1px solid ${({theme:e})=>e.colors.neutral200};
`,ys=y(ke.Content)`
  width: ${Oe};
`,ra=y.button`
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
`,Ws={is:{id:l("list.filters.condition.is"),defaultMessage:"is"},isNot:{id:l("list.filters.condition.is-not"),defaultMessage:"is not"}},qs={isExactly:{id:l("list.filters.condition.is-exactly"),defaultMessage:"is exactly"},withinLast:{id:l("list.filters.condition.within-last"),defaultMessage:"within the last"},notWithinLast:{id:l("list.filters.condition.not-within-last"),defaultMessage:"not within the last"}},Gs={is:{id:l("list.filters.condition.is"),defaultMessage:"is"},isNot:{id:l("list.filters.condition.is-not"),defaultMessage:"is not"}},Bt=({label:e,options:s,active:n,getOptionLabel:a,onPick:r})=>{const[o,i]=c.useState(!1);return t.jsxs(ke.Root,{open:o,onOpenChange:i,children:[t.jsx(ke.Trigger,{children:t.jsx(xs,{type:"button",$interactive:!0,children:t.jsx(R,{variant:"pi",textColor:"neutral800",children:e})})}),t.jsx(ys,{children:t.jsx(I,{direction:"column",alignItems:"stretch",padding:1,children:s.map(d=>t.jsxs(ra,{type:"button",onClick:()=>{r(d),i(!1)},children:[a(d),d===n&&t.jsx(mt,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem"})]},d))})})]})},vl=({filter:e,onChange:s})=>{const{formatMessage:n}=L(),[a,r]=c.useState(!1),o=e.values.map(d=>n(qt[d])).join(", "),i=d=>{const u=e.values.includes(d)?e.values.filter(p=>p!==d):[...e.values,d];u.length>0&&s({...e,values:u})};return t.jsxs(ke.Root,{open:a,onOpenChange:r,children:[t.jsx(ke.Trigger,{children:t.jsx(xs,{type:"button",$interactive:!0,children:t.jsx(R,{variant:"pi",textColor:"neutral800",children:o})})}),t.jsx(ys,{children:t.jsx(I,{direction:"column",alignItems:"flex-start",padding:3,gap:2,children:fs.map(d=>t.jsx(Fe,{checked:e.values.includes(d),onCheckedChange:()=>i(d),children:n(qt[d])},d))})})]})},Ys=({filter:e,onChange:s})=>{const{formatMessage:n,formatDate:a}=L(),[r,o]=c.useState(!1),i=e.mode==="preset"?n(Gt[e.preset]):`${a(ut(e.from),{day:"2-digit",month:"short"})} - ${a(ut(e.to),{day:"2-digit",month:"short",year:"numeric"})}`;return t.jsxs(ke.Root,{open:r,onOpenChange:o,children:[t.jsx(ke.Trigger,{children:t.jsx(xs,{type:"button",$interactive:!0,children:t.jsx(R,{variant:"pi",textColor:"neutral800",children:i})})}),t.jsx(ys,{children:e.mode==="preset"?t.jsx(I,{direction:"column",alignItems:"stretch",padding:1,children:ms.map(d=>t.jsxs(ra,{type:"button",onClick:()=>{s({...e,preset:d}),o(!1)},children:[n(Gt[d]),d===e.preset&&t.jsx(mt,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem"})]},d))}):t.jsx(Wt,{from:e.from,to:e.to,onSelect:(d,u)=>{s({...e,from:d,to:u}),o(!1)}})})]})},Il=({filter:e,onChange:s,onRemove:n})=>{const{formatMessage:a}=L(),r=e.kind==="type"?a({id:l("list.filters.field.type"),defaultMessage:"Type"}):a(Yt[e.field]);return t.jsxs(Ml,{alignItems:"stretch","data-testid":"filter-badge",children:[t.jsx(Cl,{children:t.jsx(R,{variant:"pi",textColor:"neutral600",children:r})}),e.kind==="type"&&t.jsxs(t.Fragment,{children:[t.jsx(Bt,{label:a(Ws[e.condition]),options:["is","isNot"],active:e.condition,getOptionLabel:o=>a(Ws[o]),onPick:o=>s({...e,condition:o})}),t.jsx(vl,{filter:e,onChange:s})]}),e.kind==="date"&&e.mode==="preset"&&t.jsxs(t.Fragment,{children:[t.jsx(Bt,{label:a(qs[e.condition]),options:["isExactly","withinLast","notWithinLast"],active:e.condition,getOptionLabel:o=>a(qs[o]),onPick:o=>s({...e,condition:o})}),t.jsx(Ys,{filter:e,onChange:s})]}),e.kind==="date"&&e.mode==="range"&&t.jsxs(t.Fragment,{children:[t.jsx(Bt,{label:a(Gs[e.condition]),options:["is","isNot"],active:e.condition,getOptionLabel:o=>a(Gs[o]),onPick:o=>s({...e,condition:o})}),t.jsx(Ys,{filter:e,onChange:s})]}),t.jsx(Sl,{type:"button",onClick:n,"aria-label":a({id:l("list.filters.remove"),defaultMessage:"Remove {filter} filter"},{filter:r}),children:t.jsx(ht,{width:"1.2rem",height:"1.2rem","aria-hidden":!0})})]})},Dl=y(I)`
  padding-top: ${({theme:e,$compact:s})=>s?e.spaces[1]:e.spaces[6]};
  transition: padding-top 0.2s ease;
`,$l=({listFilters:e,compact:s=!1})=>{const{filters:n,updateFilter:a,removeFilter:r}=e;return n.length===0?null:t.jsx(Dl,{$compact:s,gap:2,wrap:"wrap","data-testid":"filter-badges",children:n.map((o,i)=>t.jsx(Il,{filter:o,onChange:d=>a(i,d),onRemove:()=>r(i)},i))})},oa=e=>{const{isMovePending:s,isValidDropTarget:n}=pe()??{isMovePending:!1,isValidDropTarget:()=>!1},{active:a}=bn(),r=e.id==null?Hn:ri(e.id),o={kind:"folder-tree-target",id:e.id,name:e.name},i=wn({id:r,data:o,disabled:s}),d=n(e.id),u=i.isOver;return{droppable:i,isOver:u,showValidDropHighlight:u&&d,showInvalidDropCursor:u&&!d&&a!=null}},kl=600,Al=({isOver:e,canExpand:s,onExpand:n})=>{c.useEffect(()=>{if(!e||!s)return;const a=setTimeout(n,kl);return()=>clearTimeout(a)},[e,s,n])},ia=y.button`
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
`,El=y(I)`
  cursor: ${({$isMovePending:e,$isInvalidDropCursor:s})=>e?"wait":s?"not-allowed":"default"};
  pointer-events: ${({$isMovePending:e})=>e?"none":"auto"};
  border-radius: ${({theme:e})=>e.borderRadius};

  ${({$isValidDropTarget:e,theme:s})=>e&&xe`
      background: ${s.colors.primary100};
      outline: 1px dashed ${s.colors.primary600};
      outline-offset: -1px;
    `}
`,la=(e,s,n=[])=>{for(const a of e){if(a.id===s)return n;if(a.children?.length){const r=a.id!=null?[...n,a.id]:n,o=la(a.children,s,r);if(o!==null)return o}}return null},Rl=(e,s)=>{const[n,a]=c.useState(()=>new Set);c.useEffect(()=>{if(s==null)return;const d=la(e,s);!d||d.length===0||a(u=>{const p=new Set(u);let g=!1;for(const h of d)p.has(h)||(p.add(h),g=!0);return g?p:u})},[e,s]);const r=c.useCallback(d=>{a(u=>{const p=new Set(u);return p.has(d)?p.delete(d):p.add(d),p})},[]),o=c.useCallback(d=>{a(u=>{if(u.has(d))return u;const p=new Set(u);return p.add(d),p})},[]);return{isExpanded:c.useCallback(d=>n.has(d),[n]),toggleExpanded:r,expandFolder:o}},da=y.ul`
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
`,Tl=1.6,Fl=y(de)`
  &&[aria-disabled='true'] {
    background: transparent;
    border-color: transparent;
    opacity: 0.3;
  }
`,Ll=y(ft)`
  transform: rotate(${({$expanded:e})=>e?"0deg":"-90deg"});
  transition: transform 0.2s ease;
`,Ol=({id:e,name:s,folderChildren:n,level:a,currentFolderId:r,showActiveFolder:o,isExpanded:i,onToggle:d,onExpand:u,onSelect:p,isMovePending:g})=>{const{formatMessage:h}=L(),x=n.length>0,f=i(e),m=o&&r===e,{droppable:{setNodeRef:b},isOver:j,showValidDropHighlight:C,showInvalidDropCursor:k}=oa({id:e,name:s}),S=c.useCallback(()=>u(e),[e,u]);return Al({isOver:j,canExpand:x&&!f,onExpand:S}),t.jsxs("li",{children:[t.jsxs(El,{ref:b,alignItems:"center",paddingLeft:`${a*Tl}rem`,gap:1,$isValidDropTarget:C,$isInvalidDropCursor:k,$isMovePending:g,children:[t.jsx(Fl,{label:x?h({id:l(f?"sidebar.tree.collapse":"sidebar.tree.expand"),defaultMessage:f?"Collapse {name}":"Expand {name}"},{name:s}):h({id:l("sidebar.tree.no-subfolders"),defaultMessage:"The folder {name} has no subfolders"},{name:s}),disabled:!x,onClick:w=>{w.stopPropagation(),d(e)},variant:"ghost",withTooltip:!1,"aria-expanded":x?f:void 0,children:t.jsx(Ll,{$expanded:f,fill:"neutral500"})}),t.jsx(_,{flex:"1",minWidth:0,children:t.jsx(ia,{type:"button",$isActive:m,$isValidDropTarget:C,$isInvalidDropCursor:k,$isMovePending:g,"aria-current":m?"page":void 0,onClick:()=>p(e),"data-testid":`folder-tree-node-${e}`,"data-folder-id":e,children:t.jsx(Qe,{variant:"omega",fontWeight:m?"semiBold":"regular",children:s})})})]}),x&&f&&t.jsx(da,{children:n.map(w=>t.jsx(ca,{node:w,level:a+1,currentFolderId:r,showActiveFolder:o,isExpanded:i,onToggle:d,onExpand:u,onSelect:p,isMovePending:g},w.id??w.name))})]})},ca=({node:e,...s})=>e.id==null?null:t.jsx(Ol,{...s,id:e.id,name:e.name??"",folderChildren:e.children??[]}),Pl=({currentFolderId:e,showActiveFolder:s=!0,onSelectFolder:n})=>{const{formatMessage:a}=L(),{data:r=[],isLoading:o,isError:i}=os(),{isExpanded:d,toggleExpanded:u,expandFolder:p}=Rl(r,e),{isMovePending:g}=pe()??{isMovePending:!1},h=s&&e==null,x=a({id:l("sidebar.home"),defaultMessage:"Home"}),{droppable:{setNodeRef:f},showValidDropHighlight:m,showInvalidDropCursor:b}=oa({id:null,name:x});return t.jsxs(Dt.Main,{"aria-label":a({id:l("sidebar.tree.aria-label"),defaultMessage:"Media library folders"}),children:[t.jsx(Dt.Header,{label:a({id:l("sidebar.title"),defaultMessage:"Media library"})}),t.jsx(Dt.Content,{children:t.jsxs(I,{direction:"column",alignItems:"stretch",gap:1,padding:3,children:[t.jsxs(ia,{ref:f,type:"button",$isActive:h,$isValidDropTarget:m,$isInvalidDropCursor:b,$isMovePending:g,"aria-current":h?"page":void 0,onClick:()=>n(null),"data-testid":"folder-tree-home",children:[t.jsx(tr,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem"}),t.jsx(R,{variant:"omega",fontWeight:h?"semiBold":"regular",children:x})]}),t.jsxs(_,{marginTop:4,children:[t.jsxs(I,{alignItems:"center",gap:1,paddingTop:1,paddingBottom:1,paddingLeft:2,paddingRight:2,marginBottom:2,children:[t.jsx(Ce,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem",fill:"neutral500"}),t.jsx(R,{variant:"sigma",textColor:"neutral600",style:{textTransform:"uppercase"},children:a({id:l("sidebar.folders"),defaultMessage:"Folders"})})]}),o?t.jsx(I,{justifyContent:"center",padding:1,paddingTop:2,children:t.jsx($e,{children:a({id:l("sidebar.tree.loading"),defaultMessage:"Loading folders..."})})}):i?t.jsx(_,{padding:1,paddingTop:2,children:t.jsx(R,{variant:"pi",textColor:"danger600",children:a({id:l("sidebar.tree.error"),defaultMessage:"Could not load folders."})})}):r.length===0?t.jsx(_,{padding:1,paddingTop:2,children:t.jsx(R,{variant:"pi",textColor:"neutral500",children:a({id:l("sidebar.tree.empty"),defaultMessage:"No folders yet"})})}):t.jsx(da,{children:r.map(j=>t.jsx(ca,{node:j,level:0,currentFolderId:e,showActiveFolder:s,isExpanded:d,onToggle:u,onExpand:p,onSelect:n,isMovePending:g},j.id??j.name))})]})]})})]})},Nl=({open:e,onClose:s,onUpload:n})=>{const{formatMessage:a}=L(),[r,o]=c.useState(""),[i,d]=c.useState(null),u=()=>{o(""),d(null),s()},p=async g=>{g.preventDefault();const{urls:h,error:x}=nr(r);if(x){d(x);return}d(null),u(),await n(h)};return t.jsx(se.Root,{open:e,onOpenChange:g=>!g&&u(),children:t.jsx(se.Content,{children:t.jsxs("form",{onSubmit:p,children:[t.jsx(se.Header,{children:t.jsx(se.Title,{children:a({id:l("modal.url.title"),defaultMessage:"Import from URL"})})}),t.jsx(se.Body,{children:t.jsxs(ne.Root,{error:i||void 0,hint:a({id:l("input.url.description"),defaultMessage:"Separate your URL links by a carriage return."}),children:[t.jsx(ne.Label,{children:a({id:l("input.url.label"),defaultMessage:"URL(s)"})}),t.jsx(sr,{name:"urls",minHeight:"unset",rows:Math.min(r.split(`
`).length,7),maxHeight:"10.5rem",placeholder:a({id:l("input.url.placeholder"),defaultMessage:"Empty"}),value:r,onChange:g=>{o(g.target.value),d(null)}}),t.jsx(ne.Hint,{}),t.jsx(ne.Error,{})]})}),t.jsxs(se.Footer,{children:[t.jsx(Z,{variant:"tertiary",onClick:u,children:a({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),t.jsx(Z,{type:"submit",children:a({id:l("modal.url.upload"),defaultMessage:"Upload"})})]})]})})})},Bl="[data-strapi-main-content]",_l=["[data-native-context-menu]","thead","a","button","input","textarea","select",'[contenteditable="true"]'].join(", "),Ul={position:"fixed",width:0,height:0,minWidth:0,minHeight:0,padding:0,border:0,opacity:0,overflow:"hidden",pointerEvents:"none"},zl={height:0},Kl=({onCreateFolder:e,onImportFiles:s,onImportFromUrl:n,disabled:a})=>{const{formatMessage:r}=L(),[o,i]=c.useState(null),[d,u]=c.useState(null),p=c.useCallback(g=>u(g),[]);return c.useEffect(()=>{const g=d?.closest(Bl);if(!g||a)return;const h=x=>{x.target instanceof Element&&(x.target.closest(_l)||(x.preventDefault(),i({x:x.clientX,y:x.clientY})))};return g.addEventListener("contextmenu",h),()=>g.removeEventListener("contextmenu",h)},[d,a]),t.jsxs(t.Fragment,{children:[t.jsx("div",{ref:p,style:zl,"aria-hidden":!0}),!a&&t.jsxs(P.Root,{modal:!1,open:o!==null,onOpenChange:g=>{g||i(null)},children:[t.jsx(P.Trigger,{tabIndex:-1,endIcon:null,"aria-label":r({id:l("list.context-menu.label"),defaultMessage:"Media library actions"}),style:{...Ul,top:o?.y??0,left:o?.x??0}}),t.jsxs(us,{popoverPlacement:"bottom-start",zIndex:2,minWidth:"22rem",onCloseAutoFocus:g=>g.preventDefault(),children:[t.jsx(P.Item,{onSelect:e,startIcon:t.jsx(Ce,{}),children:r({id:l("folder.create.title"),defaultMessage:"New folder"})}),t.jsx(P.Item,{onSelect:s,startIcon:t.jsx(xn,{}),children:r({id:l("import-files"),defaultMessage:"File upload"})}),t.jsx(P.Item,{onSelect:n,startIcon:t.jsx(_e,{}),children:r({id:l("import-from-url"),defaultMessage:"File upload from URL"})})]})]})]})},_t={oldestUploads:{id:l("list.sort.oldest-uploads"),defaultMessage:"Oldest uploads"},mostRecentUpdates:{id:l("list.sort.most-recent-updates"),defaultMessage:"Most recent updates"}},Ut={nameAsc:{id:l("list.sort.name-asc"),defaultMessage:"A to Z"},nameDesc:{id:l("list.sort.name-desc"),defaultMessage:"Z to A"},sizeAsc:{id:l("list.sort.size-asc"),defaultMessage:"File size ascending"},sizeDesc:{id:l("list.sort.size-desc"),defaultMessage:"File size descending"}},Qs={top:{id:l("list.sort.folders-on-top"),defaultMessage:"On top"},mixed:{id:l("list.sort.folders-mixed"),defaultMessage:"Mixed with files"}},Hl=y(P.Trigger)``,Xs=y(P.Label)`
  width: 100%;
  display: block;
  background: ${({theme:e})=>e.colorScheme==="dark"?e.colors.neutral150:e.colors.neutral100};
  padding-inline: ${({theme:e})=>e.spaces[3]};
  border-radius: ${({theme:e})=>e.borderRadius};
`,Vl=({sort:e,showFoldersGroup:s=!0})=>{const{formatMessage:n}=L(),{trackUsage:a}=Se(),r=n({id:l("list.sort.trigger"),defaultMessage:"Sort: {active}"},{active:e.sortBy?n(_t[e.sortBy]):n(Ut[e.direction])}),o=t.jsx(mt,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem",fill:"primary600"});return t.jsxs(P.Root,{children:[t.jsx(Hl,{variant:"ghost",endIcon:t.jsx(ft,{"aria-hidden":!0}),children:r}),t.jsxs(P.Content,{popoverPlacement:"bottom-end",zIndex:2,maxHeight:"70vh",minWidth:"25rem",children:[t.jsx(Xs,{children:n({id:l("list.sort.section"),defaultMessage:"Sort"})}),Object.keys(_t).map(i=>t.jsx(P.Item,{role:"menuitemradio","aria-checked":e.sortBy===i,onSelect:d=>{d.preventDefault(),e.sortBy!==i&&a("didSortMediaLibraryElements",{location:ae,sort:i}),e.setSortBy(e.sortBy===i?null:i)},endIcon:e.sortBy===i?o:null,children:n(_t[i])},i)),Object.keys(Ut).map(i=>t.jsx(P.Item,{role:"menuitemradio","aria-checked":e.direction===i,onSelect:d=>{d.preventDefault(),e.direction!==i&&a("didSortMediaLibraryElements",{location:ae,sort:i}),e.setDirection(e.direction===i?null:i)},endIcon:e.direction===i?o:null,children:n(Ut[i])},i)),s&&t.jsxs(t.Fragment,{children:[t.jsx(P.Separator,{}),t.jsx(Xs,{children:n({id:l("list.sort.folders"),defaultMessage:"Folders"})}),Object.keys(Qs).map(i=>t.jsx(P.Item,{role:"menuitemradio","aria-checked":e.foldersPosition===i,onSelect:d=>{d.preventDefault(),e.setFoldersPosition(i)},endIcon:e.foldersPosition===i?o:null,children:n(Qs[i])},i))]})]})]})},Wl=["createdAt","updatedAt","name","size"],ql=e=>Wl.includes(e),Gl="updatedAt:DESC",Yl=(e,s,n)=>e==="size"?(s.size??0)-(n.size??0):e==="name"?s.name.localeCompare(n.name):(s[e]??"").localeCompare(n[e]??""),Ql=(e=Gl)=>{const[s,n]=e.split(":"),a=ql(s),r=a?s:"updatedAt",i=(a?n:"DESC")==="ASC"?1:-1;return(d,u)=>{const p=Yl(r,d,u);return p!==0?i*p:i*(d.id-u.id)}},Xl=({assets:e,uploaded:s,sort:n,hasNextPage:a})=>{if(s.length===0)return e;const r=new Set(e.map(u=>u.id)),o=Ql(n),i=s.filter(u=>!r.has(u.id)).sort(o);if(i.length===0)return e;const d=[...e];for(const u of i){const p=d.findIndex(g=>o(u,g)<0);if(p===-1){if(a)continue;d.push(u)}else d.splice(p,0,u)}return d},ua=20,Zl=10,Jl=e=>{const s=new Map;for(const n of Object.keys(e).map(Number).sort((a,r)=>a-r))for(const a of e[n])s.set(a.id,a);return[...s.values()]},ed=e=>Object.keys(e).reduce((s,n)=>Math.max(s,Number(n)),1),td=({queryArgs:e,page:s,onRefreshed:n})=>{const{currentData:a}=is({...e,page:s,pageSize:ua}),r=a?.results;return c.useEffect(()=>{r&&n(s,r)},[r,s,n]),null},sd=({folder:e=null,sort:s,search:n,filters:a,enabled:r=!0}={})=>{const o={folder:e,sort:s,search:n,filters:a},i=JSON.stringify(o),d=JSON.stringify({folder:e,sort:s,filters:a}),[u,p]=c.useState({queryKey:i,page:1}),[g,h]=c.useState({queryKey:i,listKey:d,pages:{}}),x=c.useRef(new Map),f=u.queryKey!==i,m=f?x.current.get(i):void 0;let b;f?m?b=ed(m.pages):b=1:b=u.page,f&&(p({queryKey:i,page:b}),m&&h(m));const{currentData:j,isLoading:C,isFetching:k,error:S,startedTimeStamp:w,fulfilledTimeStamp:A}=is({...o,page:b,pageSize:ua},{skip:!r}),M=g.queryKey===i;!m&&j&&(!M||g.pages[b]!==j.results)&&h(M?{...g,pages:{...g.pages,[b]:j.results},pagination:j.pagination}:{queryKey:i,listKey:d,pages:{[b]:j.results},pagination:j.pagination});const D=c.useCallback((K,Y)=>{h(ee=>ee.queryKey!==i||ee.pages[K]===Y?ee:{...ee,pages:{...ee.pages,[K]:Y}})},[i]),U=c.createElement(c.Fragment,null,Array.from({length:Math.max(0,b-1)},(K,Y)=>Y+1).map(K=>c.createElement(td,{key:`${i}:${K}`,queryArgs:o,page:K,onRefreshed:D})));c.useEffect(()=>{if(Object.keys(g.pages).length===0)return;const K=x.current;for(K.delete(g.queryKey),K.set(g.queryKey,g);K.size>Zl;){const Y=K.keys().next();if(Y.done)break;K.delete(Y.value)}},[g]);const T=ar(),X=rr(),N=c.useRef(e);c.useEffect(()=>{const K=N.current;if(N.current=e,K===e)return;const Y=X.getState()[qe.reducerPath],ee=qe.internalActions.removeQueryResult;Object.keys(Y?.queries??{}).forEach(oe=>{if(!oe.startsWith("getAssets("))return;let be;try{be=JSON.parse(oe.slice(10,-1))}catch{return}be.folder===K&&T(ee({queryCacheKey:oe}))})},[e,T,X]);const v=g.listKey!==d,$=c.useMemo(()=>v?[]:Jl(g.pages),[v,g.pages]),E=j?b<j.pagination.pageCount:!1,q=or(ir),G=!n&&(a?.length??0)===0,W=A!==void 0&&w!==void 0&&A>w?w:void 0,O=c.useMemo(()=>{if(!G||q.length===0)return $;const K=q.filter(({asset:Y,completedAt:ee})=>Ge(Y.folder)===e&&(W===void 0||ee>W));return Xl({assets:$,uploaded:K.map(({asset:Y})=>Y),sort:s,hasNextPage:E})},[G,q,$,e,s,E,W]),B=k&&b>1,z=v||C&&O.length===0,J=c.useCallback(()=>{p(K=>({queryKey:i,page:(K.queryKey===i?K.page:1)+1}))},[i]);return r?{assets:O,subscribers:U,pagination:j?.pagination??g.pagination,isLoading:z,isFetchingMore:B,hasNextPage:E,fetchNextPage:J,error:S}:{assets:[],subscribers:null,pagination:void 0,isLoading:!1,isFetchingMore:!1,hasNextPage:!1,fetchNextPage:J,error:void 0}},nd=({hasNextPage:e,isFetchingMore:s,onLoadMore:n,options:a})=>{const r=c.useRef(null),o=c.useRef(null),i=c.useRef(a);i.current=a;const d=c.useRef(n);d.current=n;const u=c.useRef(e);u.current=e;const p=c.useRef(s);p.current=s;const g=c.useCallback(h=>{if(r.current?.disconnect(),o.current=h,!h)return;const x=new IntersectionObserver(([f])=>{f.isIntersecting&&u.current&&!p.current&&d.current()},i.current);x.observe(h),r.current=x},[]);return c.useEffect(()=>()=>r.current?.disconnect(),[]),c.useEffect(()=>{s||!r.current||!o.current||(r.current.unobserve(o.current),r.current.observe(o.current))},[s]),g},ad="[data-strapi-main-content]",rd=2e3,od=10,id=e=>{const s=c.useRef(new Map),n=c.useRef(null),a=c.useRef(null),r=c.useRef(e),o=c.useRef(null),i=c.useCallback(d=>{a.current?.(),a.current=null,n.current=null;const u=d?.closest(ad);if(!u)return;const p=()=>{const g=s.current;for(g.delete(r.current),g.set(r.current,u.scrollTop);g.size>od;){const h=g.keys().next().value;if(h===void 0)break;g.delete(h)}};u.addEventListener("scroll",p,{passive:!0}),n.current=u,a.current=()=>u.removeEventListener("scroll",p)},[]);return c.useEffect(()=>()=>a.current?.(),[]),c.useLayoutEffect(()=>{const d=n.current;if(!d)return;r.current!==e&&(r.current=e,o.current={top:s.current.get(e)??0,deadline:Date.now()+rd});const u=o.current;if(u){if(Date.now()>u.deadline){o.current=null;return}d.scrollTop=u.top,d.scrollTop>=u.top&&(o.current=null)}}),i},bs={oldestUploads:"createdAt:ASC",mostRecentUpdates:"updatedAt:DESC"},js={nameAsc:"name:ASC",nameDesc:"name:DESC",sizeAsc:"size:ASC",sizeDesc:"size:DESC"},Qt="mostRecentUpdates",Zs=Object.fromEntries(Object.entries(bs).map(([e,s])=>[s,e])),Js=Object.fromEntries(Object.entries(js).map(([e,s])=>[s,e])),ld=e=>{for(const s of(e??"").split(",")){if(s in Zs)return{sortBy:Zs[s],direction:null,isExplicit:!0};if(s in Js)return{sortBy:null,direction:Js[s],isExplicit:!0}}return{sortBy:Qt,direction:null,isExplicit:!1}},en=(e,s)=>[e&&bs[e],s&&js[s]].filter(a=>!!a).join(","),dd=()=>{const[{query:e},s]=Re(),{sortBy:n,direction:a,isExplicit:r}=ld(e?.sort),o=e?.folders==="mixed"?"mixed":"top",i=(m,b)=>{m===null&&b===null&&(m=Qt);const j=en(m,b);s(m===Qt&&b===null?he(e,{sort:void 0}):he(e,{sort:j}))},d=m=>i(m,null),u=m=>i(null,m),p=m=>{s(m==="mixed"?he(e,{folders:"mixed"}):he(e,{folders:void 0}))},g=en(n,a),x=[n&&bs[n],a&&!a.startsWith("size")?js[a]:null].filter(m=>!!m),f=r&&x.length>0?x.join(","):"name:ASC";return{sortBy:n,direction:a,foldersPosition:o,assetsSort:g,foldersSort:f,setSortBy:d,setDirection:u,setFoldersPosition:p}},cd=({folderId:e,search:s,sort:n,filter:a})=>JSON.stringify({folderId:e,search:s,sort:n,filter:a}),tn=(e,s)=>{switch(s){case"createdAt":case"updatedAt":return e[s]?new Date(e[s]).getTime():0;case"size":return e.size??0;case"name":default:return(e.name??"").toLowerCase()}},ud=e=>{const s=e.split(",").map(n=>n.trim()).filter(Boolean).map(n=>{const[a,r]=n.split(":");return{field:a,desc:r?.toUpperCase()==="DESC"}});return(n,a)=>{for(const{field:r,desc:o}of s){const i=tn(n,r),d=tn(a,r);let u;if(typeof i=="string"||typeof d=="string"?u=String(i)<String(d)?-1:String(i)>String(d)?1:0:u=i-d,u!==0)return o?-u:u}return 0}},gd=({folders:e,assets:s,sort:n,hasNextPage:a})=>{const r=ud(n),o=[...e].sort(r),i=s[s.length-1],d=!a||!i?a?[]:o:o.filter(g=>r(g,i)<=0),u=[];let p=0;for(const g of s){for(;p<d.length&&r(d[p],g)<=0;)u.push({kind:"folder",folder:d[p]}),p+=1;u.push({kind:"asset",asset:g})}for(;p<d.length;)u.push({kind:"folder",folder:d[p]}),p+=1;return u},pd={threshold:0,rootMargin:"0px 0px -1px 0px"},hd={threshold:0},fd={id:l("header.content.item-count"),defaultMessage:"{count, plural, =1 {# item} other {# items}}"},zt={both:{id:l("header.search-results.count"),defaultMessage:"{numberFolders, plural, one {1 folder} other {# folders}} - {numberAssets, plural, one {1 asset} other {# assets}}"},folders:{id:l("header.search-results.count.folders"),defaultMessage:"{numberFolders, plural, one {1 folder} other {# folders}}"},assets:{id:l("header.search-results.count.assets"),defaultMessage:"{numberAssets, plural, =0 {0 assets} one {1 asset} other {# assets}}"}},md=(e,s)=>e===0?zt.assets:s===0?zt.folders:zt.both,xd=({view:e,folders:s,isLoadingFolders:n,assets:a,isLoadingAssets:r,isFetchingMore:o,hasNextPage:i,fetchNextPage:d,error:u,locations:p,searchQuery:g,assetsSort:h,foldersPosition:x,hasActiveFilters:f,onClearFilters:m,onAssetItemClick:b,onAddAssets:j,canAddAssets:C,onClearSearch:k})=>{const{formatMessage:S}=L(),w=e===We.GRID,A=r||n,M=c.useMemo(()=>x==="mixed"&&!w?gd({folders:s,assets:a,sort:h,hasNextPage:i}):null,[x,w,s,a,h,i]),D=cs({folders:s,assets:a,mixedItems:M}),U=nd({hasNextPage:i,isFetchingMore:o,onLoadMore:d,options:pd});return A?t.jsx(I,{justifyContent:"center",padding:8,children:t.jsx($e,{children:S({id:"app.loading",defaultMessage:"Loading..."})})}):u?t.jsx(_,{padding:8,children:t.jsx(R,{textColor:"danger600",children:S({id:l("list.assets.error"),defaultMessage:"An error occurred while fetching assets."})})}):s.length===0&&a.length===0?f&&!g?t.jsx(el,{onClearFilters:m}):t.jsx(Ji,{onAddAssets:j,canAddAssets:C,searchQuery:g,onClearSearch:k}):t.jsxs(t.Fragment,{children:[w?t.jsx(ki,{folders:s,assets:a,renderedKeys:D,onAssetItemClick:b}):t.jsx(_i,{assets:a,folders:s,mixedItems:M,renderedKeys:D,onAssetItemClick:b}),t.jsx("div",{ref:U,style:{height:1}}),o&&t.jsx(I,{justifyContent:"center",padding:4,children:t.jsx($e,{children:S({id:l("list.assets.loading-more"),defaultMessage:"Loading more assets..."})})}),t.jsx(Vi,{assets:a,renderedKeys:D,locations:p})]})},yd=({listQueryKey:e})=>{const{clear:s}=ye();return c.useEffect(()=>{s()},[e,s]),null},bd=y(hr)`
  display: flex;
  padding: ${({theme:e})=>e.spaces[1]};
  background: ${({theme:e})=>e.colors.neutral100};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
`,sn=y(fr)`
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
`,jd=y(_)`
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
`,wd=y(I)`
  justify-content: space-between;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spaces[4]};

  h1 {
    font-size: 1.8rem;
  }
`,Md=y(I)`
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
`,ga=y(I)`
  align-items: center;
  gap: ${({theme:e})=>e.spaces[3]};
`,Cd=y(ga)``,Sd=y(ga)`
  justify-content: space-between;

  ${({theme:e})=>e.breakpoints.large} {
    justify-content: flex-end;
    flex: 0 0 auto;
  }
`,vd=y(_)`
  flex: 1;

  ${({theme:e})=>e.breakpoints.large} {
    flex: 0 1 auto;
  }
`,nn=y.span`
  display: none;

  ${({theme:e})=>e.breakpoints.large} {
    display: inline;
  }
`,Id=()=>{const{formatMessage:e}=L(),{openDetails:s}=Pn(),{canCreate:n,canUpdate:a}=ge(),{currentFolderId:r,navigateToFolderId:o,navigateToRoot:i}=Ze(),{error:d}=rs({id:r},{skip:r===null});c.useEffect(()=>{d?.name==="NotFoundError"&&i()},[d,i]);const{title:u,itemCount:p}=An(r),{searchQuery:g,isSearching:h,clearSearch:x}=Xn(),f=dd(),m=cl(),b=c.useMemo(()=>fl(m.filters,new Date),[m.serialized]),{assets:j,subscribers:C,pagination:k,isLoading:S,isFetchingMore:w,hasNextPage:A,fetchNextPage:M,error:D}=sd({folder:r,search:g||void 0,sort:f.assetsSort,filters:b.fileClauses,enabled:b.showFiles}),{data:U=[],isLoading:T}=Or({parentId:r,search:g||void 0,sort:f.foldersSort,filters:b.folderClauses},{skip:!b.showFolders}),X=c.useMemo(()=>b.showFolders?U:[],[b.showFolders,U]),N=c.useMemo(()=>Nr(j,X),[j,X]),v=e(fd,{count:p}),$=e({id:l("header.search-results"),defaultMessage:'Search results for "{query}"'},{query:g}),E=X.length,q=k?.total??0,G=e(md(E,q),{numberFolders:E,numberAssets:q});let W;h?W=`${$} (${G})`:u?W=`${u} (${v})`:W=e({id:"app.loading",defaultMessage:"Loading..."});const[O,B]=c.useState(!1),[z,J]=an(Wr.view,We.GRID),K=z===We.GRID,[Y,ee]=c.useState(!1),oe=c.useRef(null),be=c.useRef(null),[ze,bt]=c.useState(!1),jt=c.useCallback(te=>bt(!te),[]),wt=lr(jt,hd),[Mt]=dr(),[Ct]=cr(),{data:je}=ns(),Ke=je?.data?.concurrentUploadRequests??1,He=xt(),{trackUsage:F}=Se(),Q=async(te,ve)=>{if(te.length===0)return;const vt=te.reduce((Le,pa)=>{const Ms=mr(pa.type);return Le[Ms]=(Le[Ms]??0)+1,Le},{});F("willAddMediaLibraryAssets",{location:ae,...vt});const It=new FormData,ws=[];te.forEach(Le=>{It.append("files",Le),ws.push({name:Le.name,caption:null,alternativeText:null,folder:ve})}),It.append("fileInfo",JSON.stringify(ws));try{await Mt({formData:It,totalFiles:te.length,concurrency:Ke,generateAiMetadata:!!He}).unwrap()}catch{}},H=()=>{oe.current?.click()},ie=async te=>{const ve=te.target.files;ve&&ve.length>0&&(F("didSelectFile",{source:"computer",location:ae}),await Q(Array.from(ve),r)),te.target.value=""},le=async te=>{n&&(F("didSelectFile",{source:"computer",location:ae}),await Q(te,r))},we=async te=>{F("didSelectFile",{source:"url",location:ae}),F("willAddMediaLibraryAssets",{location:ae});try{await Ct({urls:te,folderId:r,generateAiMetadata:!!He}).unwrap()}catch{}},ce=cd({folderId:r,search:g,sort:`${f.assetsSort};folders=${f.foldersPosition}`,filter:m.serialized||null}),St=id(ce);return t.jsxs(t.Fragment,{children:[t.jsx(qi,{onDrop:le,disabled:!n,children:t.jsx(Ho,{disabled:!a,children:t.jsx(Wo,{children:t.jsxs(ui,{locations:N,children:[t.jsx(yd,{listQueryKey:ce}),t.jsx(Cs.Root,{sideNav:t.jsx(Pl,{currentFolderId:r,showActiveFolder:!h,onSelectFolder:o}),children:t.jsx(yn.Main,{children:t.jsxs(_,{ref:be,children:[t.jsx(Te,{children:t.jsx("input",{type:"file",ref:oe,onChange:ie,multiple:!0})}),t.jsx(_,{ref:wt,height:0,"aria-hidden":!0}),t.jsx(_,{ref:St,height:0,"aria-hidden":!0}),t.jsx(Kl,{disabled:!n,onCreateFolder:()=>B(!0),onImportFiles:H,onImportFromUrl:()=>ee(!0)}),t.jsxs(jd,{$compact:ze,children:[t.jsxs(wd,{children:[t.jsx(R,{variant:"alpha",tag:"h1",children:W}),n&&t.jsxs(ur,{popoverPlacement:"bottom-end",variant:"default",endIcon:t.jsx(ft,{}),label:e({id:l("new"),defaultMessage:"New"}),children:[t.jsx($t,{onSelect:()=>B(!0),startIcon:t.jsx(Ce,{}),children:e({id:l("folder.create.title"),defaultMessage:"New folder"})}),t.jsx($t,{onSelect:H,startIcon:t.jsx(xn,{}),children:e({id:l("import-files"),defaultMessage:"File upload"})}),t.jsx($t,{onSelect:()=>ee(!0),startIcon:t.jsx(_e,{}),children:e({id:l("import-from-url"),defaultMessage:"File upload from URL"})})]})]}),t.jsxs(Md,{$compact:ze,children:[t.jsxs(Cd,{children:[t.jsx(_,{children:t.jsx(wl,{listFilters:m})}),t.jsx(vd,{children:t.jsx(Ri,{})})]}),t.jsxs(Sd,{children:[t.jsx(_,{children:t.jsx(Vl,{sort:f,showFoldersGroup:!K})}),t.jsxs(bd,{type:"single",value:K?"grid":"table",onValueChange:te=>te&&J(te==="grid"?We.GRID:We.TABLE),"aria-label":e({id:l("view.switch.label"),defaultMessage:"View options"}),children:[t.jsxs(sn,{value:"table","aria-label":e({id:l("view.table"),defaultMessage:"Table view"}),children:[t.jsx(gr,{}),t.jsx(nn,{children:e({id:l("view.table"),defaultMessage:"Table view"})})]}),t.jsxs(sn,{value:"grid","aria-label":e({id:l("view.grid"),defaultMessage:"Grid view"}),children:[t.jsx(pr,{}),t.jsx(nn,{children:e({id:l("view.grid"),defaultMessage:"Grid view"})})]})]})]})]}),t.jsx($l,{listFilters:m,compact:ze})]}),t.jsxs(Cs.Content,{children:[t.jsx(Ir,{}),C,t.jsxs(Qi,{children:[t.jsx(Zi,{uploadDropZoneRef:be,folderName:u}),t.jsx(xd,{view:z,folders:X,isLoadingFolders:T,assets:j,isLoadingAssets:S,isFetchingMore:w,hasNextPage:A,fetchNextPage:M,error:D,locations:N,searchQuery:g,assetsSort:f.assetsSort,foldersPosition:f.foldersPosition,hasActiveFilters:m.filters.length>0,onClearFilters:m.clearFilters,onAssetItemClick:s,onAddAssets:H,canAddAssets:n,onClearSearch:x})]})]})]})})})]})})})}),t.jsx(Yn,{open:O,mode:"create",parentFolderName:u,parentFolderId:r,onClose:()=>B(!1)}),t.jsx(Nl,{open:Y,onClose:()=>ee(!1),onUpload:we}),t.jsx(Po,{})]})},Ed=()=>{const{formatMessage:e}=L(),s=e({id:l("plugin.name"),defaultMessage:"Media Library"});return t.jsxs(t.Fragment,{children:[t.jsx(yn.Title,{children:s}),t.jsx(xr,{children:t.jsx(yr,{index:!0,element:t.jsx(Id,{})})})]})};export{Ed as BetaMediaLibrary};
