import{r as d,j as t,R as se,hp as Is,hq as bt,a as A,dg as c,u as Ae,k as Re,y as M,h as $,v as ye,g0 as rr,hr as be,cb as ar,eE as ir,hs as Ds,A as P,d as re,dc as lr,ht as dr,hu as cr,hv as Ke,U as de,H as te,S as W,hw as ur,gg as Ye,hx as Je,w as xe,hy as $e,bW as Le,dx as $s,hz as gr,hA as pr,hB as ue,di as Me,hC as fr,hD as ae,E as hr,hE as mr,hF as rn,hG as xr,cw as xn,T as ks,b4 as Rs,bE as bn,b2 as Es,b3 as yt,bm as X,bU as et,J as Mt,cV as yn,fn as Ts,hH as St,dD as Fs,cu as ce,cx as O,hI as It,dJ as jn,hJ as tt,gu as Ce,hK as Nn,n as br,bV as Oe,fe as yr,gX as je,hL as nt,fb as jr,fc as wr,c as As,hM as vr,Y as Cr,Q as Mr,i as wn,eL as Sr,eN as Ir,eP as Dr,eK as $r,eM as kr,eO as Rr,hN as Er,hO as Bn,hP as Tr,b5 as Fr,dn as Ar,F as Dt,K as Ls,hQ as Lr,f$ as Or,gx as Pr,ab as _r,g6 as $t,I as kt,dA as Ee,cM as Ut,hR as Nr,ao as Os,p as Br,hS as Ur,hT as zr,hU as Kr,hV as Gr,hW as Vr,hX as Wr,hY as Hr,dj as qr,L as Un,P as Ps,dO as Yr,hZ as zt,gI as Qr,gJ as Xr,h_ as Zr,g8 as Jr,X as ea,Z as ta}from"./strapi-B9She8fn.js";import{g as na}from"./users-CHXWXr2I.js";import{m as sa,n as oa,D as ra,q as aa,l as ia,P as la,u as _s,f as Ns,e as Bs}from"./core.esm-fZnAspYO.js";import{s as da}from"./modifiers.esm-CyIt80ry.js";function vn(e,n=[]){let s=[];function o(i,a){const l=d.createContext(a),u=s.length;s=[...s,a];const p=f=>{const{scope:m,children:j,...b}=f,w=m?.[e]?.[u]||l,h=d.useMemo(()=>b,Object.values(b));return t.jsx(w.Provider,{value:h,children:j})};p.displayName=i+"Provider";function g(f,m){const j=m?.[e]?.[u]||l,b=d.useContext(j);if(b)return b;if(a!==void 0)return a;throw new Error(`\`${f}\` must be used within \`${i}\``)}return[p,g]}const r=()=>{const i=s.map(a=>d.createContext(a));return function(l){const u=l?.[e]||i;return d.useMemo(()=>({[`__scope${e}`]:{...l,[e]:u}}),[l,u])}};return r.scopeName=e,[o,ca(r,...n)]}function ca(...e){const n=e[0];if(e.length===1)return n;const s=()=>{const o=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(i){const a=o.reduce((l,{useScope:u,scopeName:p})=>{const f=u(i)[`__scope${p}`];return{...l,...f}},{});return d.useMemo(()=>({[`__scope${n.scopeName}`]:a}),[a])}};return s.scopeName=n.scopeName,s}function zn(e,n){if(typeof e=="function")return e(n);e!=null&&(e.current=n)}function Us(...e){return n=>{let s=!1;const o=e.map(r=>{const i=zn(r,n);return!s&&typeof i=="function"&&(s=!0),i});if(s)return()=>{for(let r=0;r<o.length;r++){const i=o[r];typeof i=="function"?i():zn(e[r],null)}}}}function an(...e){return d.useCallback(Us(...e),e)}function ln(e){const n=ua(e),s=d.forwardRef((o,r)=>{const{children:i,...a}=o,l=d.Children.toArray(i),u=l.find(pa);if(u){const p=u.props.children,g=l.map(f=>f===u?d.Children.count(p)>1?d.Children.only(null):d.isValidElement(p)?p.props.children:null:f);return t.jsx(n,{...a,ref:r,children:d.isValidElement(p)?d.cloneElement(p,void 0,g):null})}return t.jsx(n,{...a,ref:r,children:i})});return s.displayName=`${e}.Slot`,s}function ua(e){const n=d.forwardRef((s,o)=>{const{children:r,...i}=s;if(d.isValidElement(r)){const a=ha(r),l=fa(i,r.props);return r.type!==d.Fragment&&(l.ref=o?Us(o,a):a),d.cloneElement(r,l)}return d.Children.count(r)>1?d.Children.only(null):null});return n.displayName=`${e}.SlotClone`,n}var ga=Symbol("radix.slottable");function pa(e){return d.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===ga}function fa(e,n){const s={...n};for(const o in n){const r=e[o],i=n[o];/^on[A-Z]/.test(o)?r&&i?s[o]=(...l)=>{const u=i(...l);return r(...l),u}:r&&(s[o]=r):o==="style"?s[o]={...r,...i}:o==="className"&&(s[o]=[r,i].filter(Boolean).join(" "))}return{...e,...s}}function ha(e){let n=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,s=n&&"isReactWarning"in n&&n.isReactWarning;return s?e.ref:(n=Object.getOwnPropertyDescriptor(e,"ref")?.get,s=n&&"isReactWarning"in n&&n.isReactWarning,s?e.props.ref:e.props.ref||e.ref)}var ma=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Qe=ma.reduce((e,n)=>{const s=ln(`Primitive.${n}`),o=d.forwardRef((r,i)=>{const{asChild:a,...l}=r,u=a?s:n;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),t.jsx(u,{...l,ref:i})});return o.displayName=`Primitive.${n}`,{...e,[n]:o}},{});function ke(e,n,{checkForDefaultPrevented:s=!0}={}){return function(r){if(e?.(r),s===!1||!r.defaultPrevented)return n?.(r)}}function xa(e){const n=e+"CollectionProvider",[s,o]=vn(n),[r,i]=s(n,{collectionRef:{current:null},itemMap:new Map}),a=w=>{const{scope:h,children:x}=w,S=se.useRef(null),C=se.useRef(new Map).current;return t.jsx(r,{scope:h,itemMap:C,collectionRef:S,children:x})};a.displayName=n;const l=e+"CollectionSlot",u=ln(l),p=se.forwardRef((w,h)=>{const{scope:x,children:S}=w,C=i(l,x),y=an(h,C.collectionRef);return t.jsx(u,{ref:y,children:S})});p.displayName=l;const g=e+"CollectionItemSlot",f="data-radix-collection-item",m=ln(g),j=se.forwardRef((w,h)=>{const{scope:x,children:S,...C}=w,y=se.useRef(null),R=an(h,y),E=i(g,x);return se.useEffect(()=>(E.itemMap.set(y,{ref:y,...C}),()=>void E.itemMap.delete(y))),t.jsx(m,{[f]:"",ref:R,children:S})});j.displayName=g;function b(w){const h=i(e+"CollectionConsumer",w);return se.useCallback(()=>{const S=h.collectionRef.current;if(!S)return[];const C=Array.from(S.querySelectorAll(`[${f}]`));return Array.from(h.itemMap.values()).sort((E,v)=>C.indexOf(E.ref.current)-C.indexOf(v.ref.current))},[h.collectionRef,h.itemMap])}return[{Provider:a,Slot:p,ItemSlot:j},b,o]}var zs=globalThis?.document?d.useLayoutEffect:()=>{},ba=Is[" useId ".trim().toString()]||(()=>{}),ya=0;function ja(e){const[n,s]=d.useState(ba());return zs(()=>{s(o=>o??String(ya++))},[e]),n?`radix-${n}`:""}function wa(e){const n=d.useRef(e);return d.useEffect(()=>{n.current=e}),d.useMemo(()=>(...s)=>n.current?.(...s),[])}var va=Is[" useInsertionEffect ".trim().toString()]||zs;function Rt({prop:e,defaultProp:n,onChange:s=()=>{},caller:o}){const[r,i,a]=Ca({defaultProp:n,onChange:s}),l=e!==void 0,u=l?e:r;{const g=d.useRef(e!==void 0);d.useEffect(()=>{const f=g.current;f!==l&&console.warn(`${o} is changing from ${f?"controlled":"uncontrolled"} to ${l?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),g.current=l},[l,o])}const p=d.useCallback(g=>{if(l){const f=Ma(g)?g(e):g;f!==e&&a.current?.(f)}else i(g)},[l,e,i,a]);return[u,p]}function Ca({defaultProp:e,onChange:n}){const[s,o]=d.useState(e),r=d.useRef(s),i=d.useRef(n);return va(()=>{i.current=n},[n]),d.useEffect(()=>{r.current!==s&&(i.current?.(s),r.current=s)},[s,r]),[s,o,i]}function Ma(e){return typeof e=="function"}var Sa=d.createContext(void 0);function Ks(e){const n=d.useContext(Sa);return e||n||"ltr"}var Kt="rovingFocusGroup.onEntryFocus",Ia={bubbles:!1,cancelable:!0},st="RovingFocusGroup",[dn,Gs,Da]=xa(st),[$a,Vs]=vn(st,[Da]),[ka,Ra]=$a(st),Ws=d.forwardRef((e,n)=>t.jsx(dn.Provider,{scope:e.__scopeRovingFocusGroup,children:t.jsx(dn.Slot,{scope:e.__scopeRovingFocusGroup,children:t.jsx(Ea,{...e,ref:n})})}));Ws.displayName=st;var Ea=d.forwardRef((e,n)=>{const{__scopeRovingFocusGroup:s,orientation:o,loop:r=!1,dir:i,currentTabStopId:a,defaultCurrentTabStopId:l,onCurrentTabStopIdChange:u,onEntryFocus:p,preventScrollOnEntryFocus:g=!1,...f}=e,m=d.useRef(null),j=an(n,m),b=Ks(i),[w,h]=Rt({prop:a,defaultProp:l??null,onChange:u,caller:st}),[x,S]=d.useState(!1),C=wa(p),y=Gs(s),R=d.useRef(!1),[E,v]=d.useState(0);return d.useEffect(()=>{const I=m.current;if(I)return I.addEventListener(Kt,C),()=>I.removeEventListener(Kt,C)},[C]),t.jsx(ka,{scope:s,orientation:o,dir:b,loop:r,currentTabStopId:w,onItemFocus:d.useCallback(I=>h(I),[h]),onItemShiftTab:d.useCallback(()=>S(!0),[]),onFocusableItemAdd:d.useCallback(()=>v(I=>I+1),[]),onFocusableItemRemove:d.useCallback(()=>v(I=>I-1),[]),children:t.jsx(Qe.div,{tabIndex:x||E===0?-1:0,"data-orientation":o,...f,ref:j,style:{outline:"none",...e.style},onMouseDown:ke(e.onMouseDown,()=>{R.current=!0}),onFocus:ke(e.onFocus,I=>{const G=!R.current;if(I.target===I.currentTarget&&G&&!x){const T=new CustomEvent(Kt,Ia);if(I.currentTarget.dispatchEvent(T),!T.defaultPrevented){const B=y().filter(H=>H.focusable),D=B.find(H=>H.active),k=B.find(H=>H.id===w),Y=[D,k,...B].filter(Boolean).map(H=>H.ref.current);Ys(Y,g)}}R.current=!1}),onBlur:ke(e.onBlur,()=>S(!1))})})}),Hs="RovingFocusGroupItem",qs=d.forwardRef((e,n)=>{const{__scopeRovingFocusGroup:s,focusable:o=!0,active:r=!1,tabStopId:i,children:a,...l}=e,u=ja(),p=i||u,g=Ra(Hs,s),f=g.currentTabStopId===p,m=Gs(s),{onFocusableItemAdd:j,onFocusableItemRemove:b,currentTabStopId:w}=g;return d.useEffect(()=>{if(o)return j(),()=>b()},[o,j,b]),t.jsx(dn.ItemSlot,{scope:s,id:p,focusable:o,active:r,children:t.jsx(Qe.span,{tabIndex:f?0:-1,"data-orientation":g.orientation,...l,ref:n,onMouseDown:ke(e.onMouseDown,h=>{o?g.onItemFocus(p):h.preventDefault()}),onFocus:ke(e.onFocus,()=>g.onItemFocus(p)),onKeyDown:ke(e.onKeyDown,h=>{if(h.key==="Tab"&&h.shiftKey){g.onItemShiftTab();return}if(h.target!==h.currentTarget)return;const x=Aa(h,g.orientation,g.dir);if(x!==void 0){if(h.metaKey||h.ctrlKey||h.altKey||h.shiftKey)return;h.preventDefault();let C=m().filter(y=>y.focusable).map(y=>y.ref.current);if(x==="last")C.reverse();else if(x==="prev"||x==="next"){x==="prev"&&C.reverse();const y=C.indexOf(h.currentTarget);C=g.loop?La(C,y+1):C.slice(y+1)}setTimeout(()=>Ys(C))}}),children:typeof a=="function"?a({isCurrentTabStop:f,hasTabStop:w!=null}):a})})});qs.displayName=Hs;var Ta={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Fa(e,n){return n!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function Aa(e,n,s){const o=Fa(e.key,s);if(!(n==="vertical"&&["ArrowLeft","ArrowRight"].includes(o))&&!(n==="horizontal"&&["ArrowUp","ArrowDown"].includes(o)))return Ta[o]}function Ys(e,n=!1){const s=document.activeElement;for(const o of e)if(o===s||(o.focus({preventScroll:n}),document.activeElement!==s))return}function La(e,n){return e.map((s,o)=>e[(n+o)%e.length])}var Oa=Ws,Pa=qs,Qs="Toggle",Xs=d.forwardRef((e,n)=>{const{pressed:s,defaultPressed:o,onPressedChange:r,...i}=e,[a,l]=Rt({prop:s,onChange:r,defaultProp:o??!1,caller:Qs});return t.jsx(Qe.button,{type:"button","aria-pressed":a,"data-state":a?"on":"off","data-disabled":e.disabled?"":void 0,...i,ref:n,onClick:ke(e.onClick,()=>{e.disabled||l(!a)})})});Xs.displayName=Qs;var Se="ToggleGroup",[Zs]=vn(Se,[Vs]),Js=Vs(),Cn=se.forwardRef((e,n)=>{const{type:s,...o}=e;if(s==="single"){const r=o;return t.jsx(_a,{...r,ref:n})}if(s==="multiple"){const r=o;return t.jsx(Na,{...r,ref:n})}throw new Error(`Missing prop \`type\` expected on \`${Se}\``)});Cn.displayName=Se;var[eo,to]=Zs(Se),_a=se.forwardRef((e,n)=>{const{value:s,defaultValue:o,onValueChange:r=()=>{},...i}=e,[a,l]=Rt({prop:s,defaultProp:o??"",onChange:r,caller:Se});return t.jsx(eo,{scope:e.__scopeToggleGroup,type:"single",value:se.useMemo(()=>a?[a]:[],[a]),onItemActivate:l,onItemDeactivate:se.useCallback(()=>l(""),[l]),children:t.jsx(no,{...i,ref:n})})}),Na=se.forwardRef((e,n)=>{const{value:s,defaultValue:o,onValueChange:r=()=>{},...i}=e,[a,l]=Rt({prop:s,defaultProp:o??[],onChange:r,caller:Se}),u=se.useCallback(g=>l((f=[])=>[...f,g]),[l]),p=se.useCallback(g=>l((f=[])=>f.filter(m=>m!==g)),[l]);return t.jsx(eo,{scope:e.__scopeToggleGroup,type:"multiple",value:a,onItemActivate:u,onItemDeactivate:p,children:t.jsx(no,{...i,ref:n})})});Cn.displayName=Se;var[Ba,Ua]=Zs(Se),no=se.forwardRef((e,n)=>{const{__scopeToggleGroup:s,disabled:o=!1,rovingFocus:r=!0,orientation:i,dir:a,loop:l=!0,...u}=e,p=Js(s),g=Ks(a),f={role:"group",dir:g,...u};return t.jsx(Ba,{scope:s,rovingFocus:r,disabled:o,children:r?t.jsx(Oa,{asChild:!0,...p,orientation:i,dir:g,loop:l,children:t.jsx(Qe.div,{...f,ref:n})}):t.jsx(Qe.div,{...f,ref:n})})}),jt="ToggleGroupItem",so=se.forwardRef((e,n)=>{const s=to(jt,e.__scopeToggleGroup),o=Ua(jt,e.__scopeToggleGroup),r=Js(e.__scopeToggleGroup),i=s.value.includes(e.value),a=o.disabled||e.disabled,l={...e,pressed:i,disabled:a},u=se.useRef(null);return o.rovingFocus?t.jsx(Pa,{asChild:!0,...r,focusable:!a,active:i,ref:u,children:t.jsx(Kn,{...l,ref:n})}):t.jsx(Kn,{...l,ref:n})});so.displayName=jt;var Kn=se.forwardRef((e,n)=>{const{__scopeToggleGroup:s,value:o,...r}=e,i=to(jt,s),a={role:"radio","aria-checked":e.pressed,"aria-pressed":void 0},l=i.type==="single"?a:void 0;return t.jsx(Xs,{...l,...r,ref:n,onPressedChange:u=>{u?i.onItemActivate(o):i.onItemDeactivate(o)}})}),za=Cn,Ka=so;const Mn=e=>encodeURIComponent(e).replace(/\+/g,"%2B"),Ga=e=>typeof e=="object"&&e!==null&&"data"in e,Gn=e=>Ga(e)?e.data:e,Va=bt.injectEndpoints({endpoints:e=>({getFolders:e.query({query:(n={})=>{const{parentId:s,sort:o,search:r,filters:i=[]}=n,a={sort:o??"name:ASC",populate:{parent:!0}};if(r)a._q=Mn(r),i.length>0&&(a.filters={$and:[...i]});else{const l=s!=null?{parent:{id:s}}:{parent:{id:{$null:!0}}};a.filters={$and:[l,...i]}}return{url:"/upload/folders",method:"GET",config:{params:a}}},transformResponse:n=>Gn(n),providesTags:n=>n?[...n.map(({id:s})=>({type:"Folder",id:s})),{type:"Folder",id:"LIST"}]:[{type:"Folder",id:"LIST"}]}),createFolder:e.mutation({query:n=>({url:"/upload/folders",method:"POST",data:n}),transformResponse:n=>n.data,invalidatesTags:[{type:"Folder",id:"LIST"},{type:"Folder",id:"STRUCTURE"}]}),updateFolder:e.mutation({query:({id:n,...s})=>({url:`/upload/folders/${n}`,method:"PUT",data:s}),transformResponse:n=>n.data,invalidatesTags:(n,s,{id:o})=>[{type:"Folder",id:o},{type:"Folder",id:"LIST"},{type:"Folder",id:"STRUCTURE"}]}),getFolderStructure:e.query({query:()=>({url:"/upload/folder-structure",method:"GET"}),transformResponse:n=>n?.data??n??[],providesTags:[{type:"Folder",id:"STRUCTURE"}]}),getAllFolders:e.query({query:()=>({url:"/upload/folders",method:"GET"}),transformResponse:n=>Gn(n??[]),providesTags:n=>n?[...n.map(({id:s})=>({type:"Folder",id:s})),{type:"Folder",id:"LIST"}]:[{type:"Folder",id:"LIST"}]}),getFolder:e.query({query:({id:n})=>({url:`/upload/folders/${n}`,method:"GET",config:{params:{populate:{parent:{populate:{parent:"*"}},children:{count:!0},files:{count:!0}}}}}),transformResponse:n=>n.data,providesTags:(n,s,{id:o})=>[{type:"Folder",id:o},{type:"Folder",id:"LIST"}]}),bulkMove:e.mutation({query:({fileIds:n=[],folderIds:s=[],destinationFolderId:o})=>({url:"/upload/actions/bulk-move",method:"POST",data:{fileIds:n,folderIds:s,destinationFolderId:o}}),transformResponse:n=>n.data,invalidatesTags:[{type:"Asset",id:"LIST"},{type:"Folder",id:"LIST"},{type:"Folder",id:"STRUCTURE"}]})})}),{useCreateFolderMutation:Wa,useUpdateFolderMutation:Ha,useGetFoldersQuery:qa,useGetFolderQuery:Sn,useGetAllFoldersQuery:Ya,useGetFolderStructureQuery:In,useBulkMoveMutation:oo}=Va,Xe=e=>e==null?null:typeof e=="object"?e.id??null:typeof e=="number"?e:Number(e)||null,ro={fileFolderId:()=>{},folderParentId:()=>{}},Qa=(e,n)=>{const s=new Map,o=new Map;return e.forEach(r=>{s.set(r.id,Xe(r.folder))}),n.forEach(r=>{o.set(r.id,Xe(r.parent))}),{fileFolderId:r=>s.get(r),folderParentId:r=>o.get(r)}},wt=(e,n,s,o)=>{const r=n==="file"?e.fileFolderId(s):e.folderParentId(s);return r===void 0?o:r},Xa=e=>{if(!e||typeof e!="object")return;const{message:n}=e;return typeof n=="string"&&n.length>0?n:void 0},ot=()=>{const{formatMessage:e,messages:n}=A();return d.useCallback((s,o)=>{const r=Xa(s);if(!r)return o;const i=c(`apiError.${r}`);return n[i]?e({id:i}):r},[e,n])},Za=bt.injectEndpoints({endpoints:e=>({getAssets:e.query({query:(n={})=>{const{folder:s,search:o,filters:r=[],...i}=n,a={...i};if(o)a._q=Mn(o),r.length>0&&(a.filters={$and:[...r]});else{const l=s!=null?{folder:{id:s}}:{folder:{id:{$null:!0}}};a.filters={$and:[l,...r]}}return{url:"/upload/files",method:"GET",config:{params:a}}},transformResponse:n=>n,providesTags:n=>n?[...n.results.map(({id:s})=>({type:"Asset",id:s})),{type:"Asset",id:"LIST"}]:[{type:"Asset",id:"LIST"}]}),getAsset:e.query({query:n=>({url:`/upload/files/${n}`,method:"GET"}),providesTags:(n,s,o)=>[{type:"Asset",id:o}]}),updateAsset:e.mutation({query:({id:n,fileInfo:s})=>{const o=new FormData;return o.append("fileInfo",JSON.stringify(s)),{url:`/upload/files/${n}`,method:"PUT",data:o}},invalidatesTags:(n,s,{id:o})=>[{type:"Asset",id:o},{type:"Asset",id:"LIST"},{type:"Folder",id:"LIST"}]}),replaceAsset:e.mutation({query:({id:n,file:s,fileInfo:o})=>{const r=new FormData;return r.append("files",s),o&&r.append("fileInfo",JSON.stringify(o)),{url:`/upload/files/${n}/replace`,method:"POST",data:r}},invalidatesTags:(n,s,{id:o})=>[{type:"Asset",id:o},{type:"Asset",id:"LIST"}]}),deleteAsset:e.mutation({query:n=>({url:`/upload/files/${n}`,method:"DELETE"}),invalidatesTags:(n,s,o)=>[{type:"Asset",id:o},{type:"Asset",id:"LIST"},{type:"Folder",id:"LIST"}]}),bulkDeleteItems:e.mutation({query:({fileIds:n,folderIds:s})=>({url:"/upload/actions/bulk-delete",method:"POST",data:{fileIds:n,folderIds:s}}),invalidatesTags:[{type:"Asset",id:"LIST"},{type:"Folder",id:"LIST"},{type:"Folder",id:"STRUCTURE"}]})})}),{useGetAssetsQuery:Dn,useGetAssetQuery:Ja,useUpdateAssetMutation:ei,useReplaceAssetMutation:ao,useDeleteAssetMutation:ti,useBulkDeleteItemsMutation:ni}=Za,io=async(e,n)=>{const o=await(await fetch(e)).blob(),r=window.URL.createObjectURL(o),i=document.createElement("a");i.href=r,i.setAttribute("download",n),i.click(),window.URL.revokeObjectURL(r)},si={view:"STRAPI_UPLOAD_LIBRARY_VIEW"},qe={GRID:0,TABLE:1},lo="data-asset-details-trigger",co={[lo]:""},uo="data-asset-item-control",vt={[uo]:""},oi=`[${uo}]`,ri=`[${lo}]`,Vn=[{name:"name",label:{id:c("list.table.header.name"),defaultMessage:"name"}},{name:"createdAt",label:{id:c("list.table.header.creationDate"),defaultMessage:"creation date"}},{name:"updatedAt",label:{id:c("list.table.header.lastModified"),defaultMessage:"last modified"}},{name:"size",label:{id:c("list.table.header.size"),defaultMessage:"size"}},{name:"actions",label:{id:c("list.table.header.actions"),defaultMessage:"actions"},isVisuallyHidden:!0}],go=e=>{const{formatMessage:n}=A(),{data:s,isLoading:o}=Sn({id:e},{skip:e===null}),{data:r,isLoading:i}=Dn({folder:null,pageSize:1},{skip:e!==null}),a=n({id:c("plugin.home"),defaultMessage:"Home"});return e===null?i?{title:a,itemCount:0}:{title:a,itemCount:r?.pagination?.total??0}:o||!s?{title:"",itemCount:0}:{title:s.name,itemCount:s.files?.count??0}},xt="assetId",po=e=>{const n=e?parseInt(e,10):NaN;return Number.isNaN(n)?null:n},ai=()=>{const[{query:e}]=Ae();return po(e?.[xt])!==null},ii=M($)`
  position: absolute;
  inset: 0;
  z-index: ${({$zIndex:e})=>e};
  align-items: center;
  justify-content: center;
  background: ${({theme:e})=>e.colors.neutral0};
  opacity: 0.7;
`,fo=({children:e,zIndex:n=20,hideLabel:s=!1})=>t.jsx(ii,{$zIndex:n,children:t.jsx(Re,{small:s,children:e})}),li=1,di=({anchorX:e,anchorY:n,point:s,aspectRatio:o})=>{let r=Math.abs(s.x-e),i=Math.abs(s.y-n);o&&(r/o>=i?i=r/o:r=i*o);const a=s.x<e?e-r:e,l=s.y<n?n-i:n;return{x:a,y:l,width:r,height:i}},ho=(e,n,s)=>n==="right"?{x:s.height-(e.y+e.height),y:e.x,width:e.height,height:e.width}:{x:e.y,y:s.width-(e.x+e.width),width:e.height,height:e.width},ci=(e,n,s)=>{let o=e,r=s;for(let i=0;i<n/90;i+=1)o=ho(o,"left",r),r={width:r.height,height:r.width};return o},ui=(e,n)=>(e+(n==="right"?90:270))%360,gi=()=>{const[e,n]=d.useState({width:0,height:0}),[s,o]=d.useState({x:0,y:0,width:0,height:0}),[r,i]=d.useState(null),[a,l]=d.useState(0),u=d.useRef(null),p=d.useCallback(h=>{u.current=h;const x={width:h.naturalWidth,height:h.naturalHeight};n(x),o({x:0,y:0,width:x.width,height:x.height}),l(0)},[]),g=d.useCallback(h=>{o(x=>ho(x,h,e)),n(x=>({width:x.height,height:x.width})),l(x=>ui(x,h)),i(x=>x&&1/x)},[e]),f=(h,x,S)=>Math.min(S,Math.max(x,h)),m=d.useCallback(h=>{o(x=>{const S=e.width-x.x,C=e.height-x.y;let y=h.width!==void 0?f(h.width,1,S):x.width,R=h.height!==void 0?f(h.height,1,C):x.height;return r&&(h.width!==void 0?R=f(y/r,1,C):h.height!==void 0&&(y=f(R*r,1,S))),{...x,width:y,height:R}})},[e.width,e.height,r]),j=d.useCallback(h=>{o(x=>{const S=h.x!==void 0?f(h.x,0,e.width-x.width):x.x,C=h.y!==void 0?f(h.y,0,e.height-x.height):x.y;return{...x,x:S,y:C}})},[e.width,e.height]),b=d.useCallback(h=>{i(h),h&&o(x=>{const S=e.width-x.x,C=e.height-x.y;let y=x.width,R=y/h;return R>C&&(R=C,y=R*h),y>S&&(y=S,R=y/h),{...x,width:Math.round(y),height:Math.round(R)}})},[e.width,e.height]),w=d.useCallback((h,x,S)=>new Promise((C,y)=>{const R=u.current;if(!R){y(new Error("Image not ready: call init() before produceFile()."));return}const E=document.createElement("canvas");E.width=Math.max(1,Math.round(s.width)),E.height=Math.max(1,Math.round(s.height));const v=E.getContext("2d");if(!v){y(new Error("Could not get a 2D canvas context to crop the image."));return}const I=ci(s,a,e);v.translate(E.width/2,E.height/2),v.rotate(a*Math.PI/180),v.drawImage(R,I.x,I.y,I.width,I.height,-I.width/2,-I.height/2,I.width,I.height),E.toBlob(G=>{if(!G){y(new Error("Could not export the cropped image to a blob."));return}C(new File([G],h,{type:x,lastModified:S?new Date(S).getTime():Date.now()}))},x,li)}),[s,a,e]);return{init:p,crop:s,naturalSize:e,rotation:a,rotate:g,aspectRatio:r,setCropSize:m,setCropPosition:j,setAspectRatio:b,produceFile:w,width:Math.round(s.width),height:Math.round(s.height)}},ut=5.6,Gt=12,pi=M($)`
  position: fixed;
  z-index: ${({theme:e})=>e.zIndices.tooltip-100};
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
`,fi=M($)`
  position: absolute;
  top: ${({theme:e})=>e.spaces[3]};
  right: ${({theme:e})=>e.spaces[3]};
  z-index: 1;
`,hi=M($)`
  width: 100%;
  gap: ${({theme:e})=>e.spaces[2]};
  padding: ${({theme:e})=>`${e.spaces[3]} ${e.spaces[5]}`};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
  background: ${({theme:e})=>e.colors.neutral0};
`,mi=M(W)`
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
`,xi=M.div`
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
`,bi=M.div`
  position: absolute;
  border: 1px dashed ${({theme:e})=>e.colors.primary600};
  box-shadow: 0 0 0 9999px rgba(33, 33, 52, 0.5);
  cursor: move;
  /* Without this, touch browsers claim the gesture for scrolling and fire
     pointercancel mid-drag — the crop drag dies while the finger is down. */
  touch-action: none;
`,gt=M.button`
  position: absolute;
  width: ${Gt}px;
  height: ${Gt}px;
  margin: -${Gt/2}px;
  padding: 0;
  border: 1px solid ${({theme:e})=>e.colors.primary600};
  border-radius: 2px;
  background: ${({theme:e})=>e.colors.neutral0};
  cursor: ${({$cursor:e})=>e};
  touch-action: none;
`,yi=M.button`
  position: absolute;
  width: ${ut}rem;
  height: ${ut}rem;
  margin: ${-ut/2}rem 0 0 ${-ut/2}rem;
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
`,ji=M(W)`
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
`,wi=M($)`
  width: 100%;
  justify-content: space-between;
  padding: ${({theme:e})=>`${e.spaces[3]} ${e.spaces[5]}`};
  border-top: 1px solid ${({theme:e})=>e.colors.neutral150};
  background: ${({theme:e})=>e.colors.neutral0};
`,pt=M(de.Root)`
  flex-direction: row;
  align-items: center;
`,ft=M(ur)`
  width: 8.4rem;
`,Wn=M(de.Label)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.6rem;
  height: 1.6rem;
`,vi=M(W)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);

  svg {
    display: block;
  }
`,Ci=()=>t.jsx(vi,{children:t.jsx("svg",{width:"17",height:"49",viewBox:"0 0 17 49",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M0.5 0.5H8.5C12.9183 0.5 16.5 4.08172 16.5 8.5M0.5 48.5H8.5C12.9183 48.5 16.5 44.9183 16.5 40.5",stroke:"#666687",strokeLinecap:"round"})})}),Mi=({asset:e,isBusy:n=!1,onClose:s,onApply:o,onSaveAsCopy:r,canSaveAsCopy:i})=>{const{formatMessage:a}=A(),{toggleNotification:l}=ye(),p=rr().colorScheme==="dark",g=p?"neutral1000":"neutral0",f=p?"neutral600":"neutral200",m=d.useRef(null),j=d.useRef(null),b=d.useRef(null);d.useEffect(()=>{b.current?.focus()},[]);const{init:w,crop:h,naturalSize:x,aspectRatio:S,setCropSize:C,setCropPosition:y,setAspectRatio:R,produceFile:E,rotation:v,rotate:I,width:G,height:T}=gi(),[B,D]=d.useState(!1),[k,F]=d.useState(e.focalPoint??{x:50,y:50}),Y=L=>{I(L),F(Q=>({x:100-Q.y,y:Q.x}))},H=be(e.url),Z=e.updatedAt&&!e.isUrlSigned?new Date(e.updatedAt).getTime():void 0,U=Z!==void 0?`${H}${H.includes("?")?"&":"?"}updatedAt=${Z}`:H,K=v===90||v===270,V=d.useMemo(()=>{if(!v)return;const L=x.width&&x.height?x.width/x.height:void 0;return!K||!L?{transform:`rotate(${v}deg)`}:{position:"absolute",top:"50%",left:"50%",maxWidth:"none",maxHeight:"none",width:`${100/L}%`,height:`${100*L}%`,transform:`translate(-50%, -50%) rotate(${v}deg)`}},[v,K,x.width,x.height]),J=()=>{m.current&&w(m.current)},z=L=>{const Q=j.current?.getBoundingClientRect();if(!Q||!x.width||!x.height)return null;const N=x.width/Q.width,ne=x.height/Q.height;return{x:(L.clientX-Q.left)*N,y:(L.clientY-Q.top)*ne}},_=d.useRef(null);d.useEffect(()=>()=>{_.current?.()},[]);const q=(L,Q)=>{L.preventDefault(),L.stopPropagation();const{pointerId:N}=L;try{L.currentTarget.setPointerCapture(N)}catch{}const ne=pe=>{pe.pointerId===N&&Q(pe)},le=()=>{window.removeEventListener("pointermove",ne),window.removeEventListener("pointerup",ge),window.removeEventListener("pointercancel",ge),_.current=null},ge=pe=>{pe.pointerId===N&&le()};_.current?.(),_.current=le,window.addEventListener("pointermove",ne),window.addEventListener("pointerup",ge),window.addEventListener("pointercancel",ge)},oe=L=>{const Q=z(L);if(!Q)return;const N={...h};q(L,ne=>{const le=z(ne);le&&y({x:N.x+(le.x-Q.x),y:N.y+(le.y-Q.y)})})},ie=L=>Q=>{const N={...h},ne=L==="tl"||L==="bl"?N.x+N.width:N.x,le=L==="tl"||L==="tr"?N.y+N.height:N.y;q(Q,ge=>{const pe=z(ge);if(!pe)return;const{x:ve,y:Bt,width:ct,height:or}=di({anchorX:ne,anchorY:le,point:pe,aspectRatio:B?S:null});y({x:ve,y:Bt}),C({width:ct,height:or})})},We=()=>{D(L=>{const Q=!L;return R(Q&&T?G/T:null),Q})},Lt=L=>{q(L,Q=>{const N=z(Q);if(!N)return;const ne=(N.x-h.x)/h.width*100,le=(N.y-h.y)/h.height*100;F({x:Math.round(Math.min(100,Math.max(0,ne))),y:Math.round(Math.min(100,Math.max(0,le)))})})},Ot=Math.round(k.x/100*G),Pt=Math.round(k.y/100*T),rt=(L,Q)=>{const N=L==="x"?G:T;if(!N)return;const ne=Math.min(100,Math.max(0,Q/N*100));F(le=>({...le,[L]:Math.round(ne)}))},at=v,[_t,Nt]=d.useState(0),[it,Ie]=d.useState(0),lt=()=>Nt(L=>L+1),Pe=()=>Ie(L=>L+1),we=x.width&&x.height?{left:h.x/x.width*100,top:h.y/x.height*100,width:h.width/x.width*100,height:h.height/x.height*100}:null,_e=we!==null,dt=async L=>{if(!_e)return;let Q;try{Q=await E(e.name,e.mime??"image/png",e.updatedAt)}catch{l({type:"danger",message:a({id:c("asset-details.crop.export-error"),defaultMessage:"Could not process the cropped image."})});return}const N={x:Math.round(k.x),y:Math.round(k.y)};L==="apply"?o(Q,N):r(Q,N)};return t.jsx(ar,{children:t.jsx(ir,{onEscape:s,skipAutoFocus:!0,children:t.jsxs(pi,{ref:b,tabIndex:-1,children:[t.jsxs(hi,{alignItems:"center",children:[t.jsx(Ds,{"aria-hidden":!0}),t.jsx(P,{variant:"omega",fontWeight:"bold",children:a({id:c("asset-details.crop.title"),defaultMessage:"Crop & Focus area"})})]}),t.jsxs(mi,{children:[t.jsx(fi,{direction:"column",gap:1,children:t.jsx(re,{disabled:!_e,onClick:()=>Y("right"),label:a({id:c("asset-details.crop.rotate-right"),defaultMessage:"Rotate 90° right"}),children:t.jsx(lr,{})})}),t.jsxs(xi,{ref:j,$aspect:x.width&&x.height?x.width/x.height:void 0,children:[K?t.jsx("div",{"aria-hidden":!0,style:{width:x.width,maxWidth:"100%"}}):null,t.jsx("img",{ref:m,"data-testid":"crop-editor-image",style:V,src:U,alt:e.name,crossOrigin:"anonymous",onLoad:J,draggable:!1}),we?t.jsxs(bi,{style:{left:`${we.left}%`,top:`${we.top}%`,width:`${we.width}%`,height:`${we.height}%`},onPointerDown:oe,children:[t.jsx(gt,{type:"button","aria-label":a({id:c("asset-details.crop.resize.top-left"),defaultMessage:"Resize top-left"}),$cursor:"nwse-resize",style:{left:0,top:0},onPointerDown:ie("tl")}),t.jsx(gt,{type:"button","aria-label":a({id:c("asset-details.crop.resize.top-right"),defaultMessage:"Resize top-right"}),$cursor:"nesw-resize",style:{right:0,top:0},onPointerDown:ie("tr")}),t.jsx(gt,{type:"button","aria-label":a({id:c("asset-details.crop.resize.bottom-left"),defaultMessage:"Resize bottom-left"}),$cursor:"nesw-resize",style:{left:0,bottom:0},onPointerDown:ie("bl")}),t.jsx(gt,{type:"button","aria-label":a({id:c("asset-details.crop.resize.bottom-right"),defaultMessage:"Resize bottom-right"}),$cursor:"nwse-resize",style:{right:0,bottom:0},onPointerDown:ie("br")}),t.jsx(yi,{type:"button","aria-label":a({id:c("asset-details.crop.focal-point"),defaultMessage:"Focal point"}),style:{left:`${k.x}%`,top:`${k.y}%`},onPointerDown:Lt})]}):null]}),t.jsxs(ji,{children:[t.jsxs($,{direction:"column",alignItems:"stretch",gap:1,paddingBottom:3,children:[t.jsx(P,{variant:"omega",fontWeight:"bold",textColor:g,children:a({id:c("asset-details.crop.title"),defaultMessage:"Crop & Focus area"})}),t.jsx(P,{variant:"pi",textColor:f,children:a({id:c("asset-details.crop.hint"),defaultMessage:"Set the crop area with the rectangle. Pin the always-visible area with the circle."})})]}),t.jsxs($,{gap:6,alignItems:"center",children:[t.jsxs($,{alignItems:"center",gap:2,children:[t.jsxs($,{direction:"column",gap:2,children:[t.jsxs(pt,{name:"crop-width",gap:2,children:[t.jsx(Wn,{textColor:g,children:t.jsx(dr,{})}),t.jsx(ft,{"aria-label":a({id:c("asset-details.crop.width"),defaultMessage:"Width (px)"}),value:G,min:1,max:x.width||void 0,onValueChange:L=>{L!==void 0&&C({width:L})}},`crop-width-${at}`)]}),t.jsxs(pt,{name:"crop-height",gap:2,children:[t.jsx(Wn,{textColor:g,children:t.jsx(cr,{})}),t.jsx(ft,{"aria-label":a({id:c("asset-details.crop.height"),defaultMessage:"Height (px)"}),value:T,min:1,max:x.height||void 0,onValueChange:L=>{L!==void 0&&C({height:L})}},`crop-height-${at}`)]})]}),t.jsxs($,{position:"relative",children:[t.jsx(re,{label:a({id:c("asset-details.crop.aspect-lock"),defaultMessage:"Lock aspect ratio"}),variant:B?"secondary":"ghost",onClick:We,children:t.jsx(Ke,{})}),t.jsx(Ci,{})]})]}),t.jsxs($,{direction:"column",gap:2,marginLeft:"auto",children:[t.jsxs(pt,{name:"focal-x",gap:2,children:[t.jsx(de.Label,{textColor:g,children:a({id:c("asset-details.crop.focal-x-axis"),defaultMessage:"X"})}),t.jsx(ft,{"aria-label":a({id:c("asset-details.crop.focal-x"),defaultMessage:"Focal point X (px)"}),value:Ot,min:0,max:G||void 0,onValueChange:L=>{L!==void 0&&rt("x",L)},onBlur:lt},`focal-x-${_t}`)]}),t.jsxs(pt,{name:"focal-y",gap:2,children:[t.jsx(de.Label,{textColor:g,children:a({id:c("asset-details.crop.focal-y-axis"),defaultMessage:"Y"})}),t.jsx(ft,{"aria-label":a({id:c("asset-details.crop.focal-y"),defaultMessage:"Focal point Y (px)"}),value:Pt,min:0,max:T||void 0,onValueChange:L=>{L!==void 0&&rt("y",L)},onBlur:Pe},`focal-y-${it}`)]})]})]})]})]}),t.jsxs(wi,{alignItems:"center",children:[t.jsx(te,{variant:"tertiary",onClick:s,disabled:n,children:a({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),t.jsxs($,{gap:2,children:[i&&t.jsx(te,{variant:"secondary",onClick:()=>dt("copy"),loading:n,disabled:!_e,children:a({id:c("asset-details.crop.save-as-copy"),defaultMessage:"Save as copy"})}),t.jsx(te,{variant:"default",onClick:()=>dt("apply"),loading:n,disabled:!_e,children:a({id:c("asset-details.crop.apply"),defaultMessage:"Apply"})})]})]})]})})})},He=M(W)`
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
`,ht=M($)`
  justify-content: center;
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
`,Si=M.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`,Ii=M($)`
  position: absolute;
  top: ${({theme:e})=>e.spaces[3]};
  right: ${({theme:e})=>e.spaces[3]};
  z-index: 3;
`,Di=M.video`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`,$i=M.audio`
  width: 100%;
`,ki=M.iframe`
  width: 100%;
  height: 100%;
  min-height: 200px;
  border: none;
`,Ri=M($)`
  height: 100%;
  aspect-ratio: 1;
  width: auto;
  max-width: 100%;
  margin: 0 auto;
  color: ${({theme:e})=>e.colors.neutral500};
  background: ${({theme:e})=>e.colors.neutral150};
`,Ei=M($)`
  position: absolute;
  inset: 0;
  z-index: 1;
`,mt=()=>{const{formatMessage:e}=A();return t.jsx(Ei,{justifyContent:"center",alignItems:"center",children:t.jsx(Re,{children:e({id:"app.loading",defaultMessage:"Loading..."})})})},Ti=({asset:e,actions:n,isLoading:s=!1})=>{const{formatMessage:o}=A(),{alternativeText:r,ext:i,mime:a,url:l,updatedAt:u,isUrlSigned:p,isLocal:g}=e,f=u&&!p?new Date(u).getTime():void 0,m=C=>!C||f===void 0?C:C.includes("?")?`${C}&v=${f}`:`${C}?v=${f}`,j=m(be(l)),[b,w]=d.useState(!1);d.useEffect(()=>{w(!1)},[j]);const h=d.useRef(null);if(d.useEffect(()=>{const C=h.current;if(!C)return;const y=()=>{const E=C.parentElement;if(!E)return;const v=E.getBoundingClientRect(),I=C.offsetWidth,G=C.offsetHeight;!I||!G||!v.width||v.height};y();const R=new ResizeObserver(y);return R.observe(C),C.parentElement&&R.observe(C.parentElement),()=>R.disconnect()},[b]),a?.includes(Ye.Image)){const C=m(be(l));if(C)return t.jsxs(He,{children:[(!b||s)&&t.jsx(mt,{}),n?t.jsx(Ii,{children:n}):null,t.jsx(ht,{children:t.jsx(Si,{ref:h,src:C,alt:r||e.name||"",crossOrigin:!g&&p?"anonymous":void 0,onLoad:()=>w(!0),onError:()=>w(!0)})})]})}if(a?.includes(Ye.Video)&&j)return t.jsxs(He,{children:[!b&&t.jsx(mt,{}),t.jsx(ht,{children:t.jsx(Di,{src:j,controls:!0,title:e.name,onLoadedData:()=>w(!0),onError:()=>w(!0),children:o({id:c("asset-details.videoNotSupported"),defaultMessage:"Your browser does not support the video tag."})})})]});if(a?.includes(Ye.Audio)&&j)return t.jsxs(He,{children:[!b&&t.jsx(mt,{}),t.jsx(ht,{children:t.jsx($,{width:"100%",padding:4,justifyContent:"center",alignItems:"center",height:"100%",minHeight:"12rem",children:t.jsx($i,{src:j,controls:!0,onLoadedData:()=>w(!0),onError:()=>w(!0)})})})]});if((i?.toLowerCase()==="pdf"||i?.toLowerCase()===".pdf"||a==="application/pdf")&&j)return t.jsxs(He,{children:[!b&&t.jsx(mt,{}),t.jsx(ht,{children:t.jsx(ki,{src:`${j}#toolbar=0`,title:e.name,onLoad:()=>w(!0)})})]});const S=Je(a,i);return t.jsx(He,{children:t.jsxs(Ri,{justifyContent:"center",alignItems:"center",gap:1,direction:"column",hasRadius:!0,children:[t.jsx(S,{width:24,height:24}),t.jsx(P,{variant:"pi",children:o({id:c("asset-details.noPreview"),defaultMessage:"No preview available"})})]})})},mo=d.createContext(null),xo=()=>{const e=d.useContext(mo);if(!e)throw new Error("useDrawerNotify must be used within AssetDetails");return e},bo=d.createContext(null),yo=()=>{const e=d.useContext(bo);if(!e)throw new Error("useAssetOperation must be used within AssetDetails");return e},jo=()=>{const[{query:e},n]=Ae(),s=po(e?.[xt]),o=s!==null,[r,i]=d.useState(o),a=d.useRef(null);d.useEffect(()=>{o&&(a.current=s,i(!0))},[o,s]);const l=d.useCallback(g=>{g.target===g.currentTarget&&!o&&i(!1)},[o]),u=d.useCallback(g=>{n(xe(e,{[xt]:String(g)}),"push",!0)},[e,n]),p=d.useCallback(()=>{n(xe(e,{[xt]:void 0}),"push",!0)},[e,n]);return{assetId:o?s:a.current,isVisible:o,shouldRenderDrawer:r,onCloseAnimationEnd:l,openDetails:u,closeDetails:p}},Fi=M($)`
  flex: 0 0 calc(50% - ${({theme:e})=>e.spaces[2]});
`,De=({label:e,value:n})=>t.jsxs(Fi,{direction:"column",justifyContent:"flex-start",alignItems:"flex-start",gap:1,children:[t.jsx(P,{variant:"sigma",textColor:"neutral600",fontWeight:"semiBold",textTransform:"uppercase",children:e}),t.jsx(P,{variant:"pi",textColor:"neutral700",children:n??"-"})]}),Ai=M(W)`
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
`,Li=M(W)`
  position: absolute;
  top: ${({theme:e})=>e.spaces[2]};
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  width: calc(100% - ${({theme:e})=>e.spaces[2]});
`,Oi=e=>e.isDeleting?{id:c("asset-details.delete.loading"),defaultMessage:"Deleting the file…"}:e.isCropCopying?{id:c("asset-details.crop.loading"),defaultMessage:"Saving the copy…"}:e.isReplacing?{id:c("asset-details.replace.loading"),defaultMessage:"Replacing the file…"}:null,Pi=M(Mt)`
  width: 1.6rem;
  height: 1.6rem;

  path {
    fill: ${({theme:e})=>e.colors.warning500};
  }
`,Vt=({name:e,label:n,required:s,disabled:o})=>{const{formatMessage:r}=A(),i=ks(e),a=xn("DetailField",f=>f.isSubmitting),l=i.value??"",[u,p]=d.useState(l);d.useEffect(()=>{p(l)},[l]);const g=r({id:c("asset-details.field.empty"),defaultMessage:"{label} is currently empty."},{label:n});return t.jsxs(de.Root,{name:e,required:s,children:[t.jsx(de.Label,{children:n}),t.jsx(Rs,{value:u,onChange:f=>{p(f.target.value),i.onChange(e,f.target.value)},endAction:u?void 0:t.jsx(bn,{label:g,children:t.jsx(Pi,{"aria-label":g,role:"img"})}),type:"text",disabled:a||o})]})},_i=({label:e,rootLabel:n,folders:s,disabled:o})=>{const r=ks("folder"),i=xn("LocationField",a=>a.isSubmitting);return t.jsxs(de.Root,{name:"folder",required:!0,children:[t.jsx(de.Label,{children:e}),t.jsxs(Es,{value:r.value==null?"":String(r.value),onChange:a=>{const l=a===""?null:Number(a);r.onChange("folder",l)},disabled:i||o,children:[t.jsx(yt,{value:"",children:n}),s.map(a=>t.jsx(yt,{value:String(a.id),children:a.name},a.id))]})]})},Ni=()=>{const{formatMessage:e}=A(),{deleteAsset:n,isDeleting:s}=yo(),[o,r]=d.useState(!1),i=async()=>{await n(),r(!1)},a=e({id:c("asset-details.delete.trigger"),defaultMessage:"Delete this file"});return t.jsxs(X.Root,{open:o,onOpenChange:r,children:[t.jsx(X.Trigger,{children:t.jsx(re,{label:a,variant:"danger-light",children:t.jsx(et,{})})}),t.jsxs(X.Content,{children:[t.jsx(X.Header,{children:e({id:c("asset-details.delete.title"),defaultMessage:"Delete this media file?"})}),t.jsx(X.Body,{icon:t.jsx(Mt,{width:"24px",height:"24px",fill:"danger600"}),textAlign:"center",children:e({id:c("asset-details.delete.description"),defaultMessage:"This file cannot be recovered once deleted. If it is currently in use, linked content will break and image containers will be empty."})}),t.jsxs(X.Footer,{children:[t.jsx(X.Cancel,{children:t.jsx(te,{variant:"tertiary",disabled:s,fullWidth:!0,children:e({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})}),t.jsx(X.Action,{children:t.jsx(te,{variant:"danger-light",loading:s,onClick:i,fullWidth:!0,children:e({id:"app.components.Button.confirm",defaultMessage:"Confirm"})})})]})]})]})},Bi=({asset:e})=>{const{formatMessage:n}=A(),{copy:s}=yn(),o=xo(),r=async()=>{const i=be(e.url);if(!i)return;const a=await s(i);o({type:a?"success":"danger",message:n(a?{id:c("asset-details.copy-link.success"),defaultMessage:"Link copied."}:{id:c("asset-details.copy-link.error"),defaultMessage:"Failed to copy the link."})})};return t.jsx(re,{label:n({id:c("asset-details.copy-link.trigger"),defaultMessage:"Copy link"}),variant:"tertiary",onClick:r,children:t.jsx(Ke,{})})},Ui=({asset:e})=>{const{formatMessage:n}=A(),s=xo(),[o,r]=d.useState(!1),i=async()=>{const a=be(e.url);if(a){r(!0);try{await io(a,e.name)}catch{s({type:"danger",message:n({id:c("asset-details.download.error"),defaultMessage:"Failed to download the file."})})}finally{r(!1)}}};return t.jsx(re,{label:n({id:c("asset-details.download.trigger"),defaultMessage:"Download"}),variant:"tertiary",onClick:i,disabled:o,children:t.jsx(Ts,{})})},zi=({mime:e})=>{const{formatMessage:n}=A(),{replaceAsset:s,isReplacing:o}=yo(),r=d.useRef(null),[i,a]=d.useState(!1),l=St({mime:e}),u=()=>{a(!0)},p=()=>{a(!1),r.current?.click()},g=async f=>{const m=f.target.files?.[0];f.target.value="",m&&await s(m)};return t.jsxs(t.Fragment,{children:[t.jsx(Le,{children:t.jsx("input",{ref:r,type:"file",accept:e??"",multiple:!1,onChange:g,"aria-hidden":!0,tabIndex:-1})}),t.jsx(re,{label:n({id:c("asset-details.replace.trigger"),defaultMessage:"Replace this file"}),variant:"tertiary",onClick:u,disabled:o,children:t.jsx(Fs,{})}),t.jsx(X.Root,{open:i,onOpenChange:a,children:t.jsxs(X.Content,{children:[t.jsx(X.Header,{children:n({id:c("asset-details.replace.title"),defaultMessage:"Replace this media file?"})}),t.jsx(X.Body,{textAlign:"center",children:t.jsxs($,{direction:"column",textAlign:"center",children:[t.jsx(P,{variant:"omega",children:n({id:c("asset-details.replace.description"),defaultMessage:"Current content will be permanently replaced."})}),l?t.jsx(P,{variant:"omega",children:n({id:c("asset-details.replace.description.ai"),defaultMessage:"AI will generate new metadata after upload."})}):null]})}),t.jsxs(X.Footer,{children:[t.jsx(X.Cancel,{children:t.jsx(te,{variant:"tertiary",fullWidth:!0,children:n({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})}),t.jsx(X.Action,{children:t.jsx(te,{variant:"secondary",onClick:p,fullWidth:!0,children:n({id:c("asset-details.replace.continue"),defaultMessage:"Continue"})})})]})]})})]})},Ki=({onCrop:e})=>{const{formatMessage:n}=A(),s=xn("AssetImageActions",o=>o.isSubmitting);return t.jsx($,{direction:"column",gap:2,children:t.jsx(re,{label:n({id:c("asset-details.crop.trigger"),defaultMessage:"Crop"}),variant:"tertiary",onClick:e,disabled:s||!e,children:t.jsx(Ds,{})})})},Gi=({asset:e,closeDetails:n})=>{const{formatMessage:s,formatDate:o}=A(),r=ot(),{canCreate:i,canUpdate:a,canDownload:l,canCopyLink:u}=ue(),{data:p=[]}=Ya(),{toggleNotification:g}=ye(),[f]=ei(),{trackUsage:m}=Me(),[j,{isLoading:b}]=ao(),[w,{isLoading:h}]=ti(),[x,{isLoading:S}]=fr(),[C,y]=d.useState(!1),[R,E]=d.useState(null);d.useEffect(()=>{if(!R)return;const U=window.setTimeout(()=>E(null),5e3);return()=>window.clearTimeout(U)},[R]);const v=d.useCallback(U=>E(U),[]),I=e.mime?.includes(Ye.Image),G={name:e.name??"",caption:e.caption??"",alternativeText:e.alternativeText??"",folder:typeof e.folder=="object"&&e.folder!==null?e.folder.id??null:e.folder??null},T=async U=>{const K={name:U.name,caption:U.caption,alternativeText:U.alternativeText,folder:U.folder},V=await f({id:e.id,fileInfo:K});if("error"in V){v({type:"danger",message:r(V.error,s({id:c("asset-details.update.error"),defaultMessage:"Failed to update the file."}))});return}m("didEditMediaLibraryElements",{location:ae,type:e.mime?.split("/")[0],changeLocation:U.folder!==G.folder}),v({type:"success",message:s({id:c("asset-details.update.success"),defaultMessage:"File updated"})})},{title:B}=go(typeof e.folder=="object"&&e.folder!==null?e.folder.id??null:e.folder??null),D=d.useCallback(async U=>{const K=await j({id:e.id,file:U,fileInfo:{name:e.name}});if("error"in K){v({type:"danger",message:r(K.error,s({id:c("asset-details.replace.error"),defaultMessage:"Failed to replace the file."}))});return}m("didReplaceMedia",{location:ae}),v({type:"success",message:s({id:c("asset-details.replace.success"),defaultMessage:"File replaced."})})},[e.id,e.name,s,r,v,j,m]),k=d.useCallback(async()=>{const U=await w(e.id);if("error"in U){v({type:"danger",message:r(U.error,s({id:c("asset-details.delete.error"),defaultMessage:"Failed to delete the asset."}))});return}g({type:"success",message:s({id:c("asset-details.delete.success"),defaultMessage:"1 element have been deleted from {folderName}"},{folderName:B})}),n()},[e.id,n,w,B,s,r,v,g]),F=U=>{v({type:"danger",message:r(U,s({id:c("asset-details.crop.error"),defaultMessage:"Failed to update the file."}))})},Y=async(U,K)=>{y(!1);const V=await j({id:e.id,file:U,fileInfo:{focalPoint:K}});if("error"in V){F(V.error);return}m("didCropFile",{location:ae,duplicatedFile:!1}),v({type:"success",message:s({id:c("asset-details.crop.success"),defaultMessage:"File updated"})})},H=async(U,K)=>{y(!1);const V=await x({file:U,fileInfo:{name:e.name,caption:e.caption??"",alternativeText:e.alternativeText??"",folder:G.folder,focalPoint:K}});if("error"in V){F(V.error);return}m("didCropFile",{location:ae,duplicatedFile:!0}),v({type:"success",message:s({id:c("asset-details.crop.copy-success"),defaultMessage:"Copy created."})})},Z=d.useMemo(()=>({replaceAsset:D,deleteAsset:k,isReplacing:b,isDeleting:h}),[D,k,b,h]);return t.jsx(mo.Provider,{value:v,children:t.jsx(bo.Provider,{value:Z,children:t.jsx(Ai,{children:t.jsx(hr,{method:"POST",initialValues:G,onSubmit:T,children:({modified:U,isSubmitting:K,values:V,resetForm:J})=>{const z=(V.name??"").trim()==="",_=Oi({isDeleting:h,isReplacing:b,isCropCopying:S});return t.jsxs(t.Fragment,{children:[t.jsx(mr,{onProceed:J}),C&&I?t.jsx(Mi,{asset:e,onClose:()=>y(!1),onApply:Y,onSaveAsCopy:H,canSaveAsCopy:i}):null,_?t.jsx(fo,{children:s(_)}):null,R?t.jsx(Li,{children:t.jsx($s,{variant:R.type==="success"?"success":"danger",closeLabel:s({id:"global.close",defaultMessage:"Close"}),onClose:()=>E(null),children:R.message})}):null,t.jsxs($e.ScrollableContent,{children:[t.jsx(Ti,{asset:e,actions:I&&a?t.jsx(Ki,{onCrop:()=>y(!0)}):null}),t.jsxs($,{direction:"column",alignItems:"stretch",gap:4,paddingTop:4,paddingBottom:4,paddingLeft:5,paddingRight:5,children:[t.jsx(P,{variant:"beta",fontWeight:"semiBold",tag:"h3",children:s({id:c("asset-details.fileInfo"),defaultMessage:"File info"})}),t.jsxs($,{wrap:"wrap",gap:4,background:"neutral100",paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:6,alignItems:"flex-start",children:[t.jsx(De,{label:s({id:c("asset-details.creationDate"),defaultMessage:"Creation date"}),value:e.createdAt?o(new Date(e.createdAt),{dateStyle:"long",timeStyle:"short"}):null}),t.jsx(De,{label:s({id:c("asset-details.lastUpdated"),defaultMessage:"Last updated"}),value:e.updatedAt?o(new Date(e.updatedAt),{dateStyle:"long",timeStyle:"short"}):null}),t.jsx(De,{label:s({id:c("asset-details.createdBy"),defaultMessage:"Created by"}),value:e.createdBy?na({firstname:e.createdBy.firstname??void 0,lastname:e.createdBy.lastname??void 0,username:e.createdBy.username??void 0,email:e.createdBy.email??void 0})??"-":null}),t.jsx(De,{label:s({id:c("asset-details.size"),defaultMessage:"Size"}),value:e.size?rn(e.size,1):null}),I&&(e.width!=null||e.height!=null)&&t.jsx(De,{label:s({id:c("asset-details.dimensions"),defaultMessage:"Dimensions"}),value:e.width!=null&&e.height!=null?`${e.width} × ${e.height}`:null}),t.jsx(De,{label:s({id:c("asset-details.extension"),defaultMessage:"Extension"}),value:xr(e.ext)}),t.jsx(De,{label:s({id:c("asset-details.assetId"),defaultMessage:"Asset ID"}),value:String(e.id)})]}),t.jsx(Vt,{name:"name",label:s({id:c("asset-details.fileName"),defaultMessage:"File name"}),required:!0,disabled:!a}),t.jsx(_i,{label:s({id:c("asset-details.location"),defaultMessage:"Location"}),rootLabel:s({id:c("plugin.home"),defaultMessage:"Home"}),folders:p,disabled:!a}),t.jsx(Vt,{name:"caption",label:s({id:c("asset-details.caption"),defaultMessage:"Caption"}),disabled:!a}),t.jsx(Vt,{name:"alternativeText",label:s({id:c("asset-details.alternativeText"),defaultMessage:"Alternative text"}),disabled:!a})]})]}),(a||u||l)&&t.jsxs($,{justifyContent:"space-between",alignItems:"center",gap:2,padding:3,borderColor:"neutral150",borderStyle:"solid",borderWidth:"1px 0 0 0",background:"neutral0",children:[t.jsxs($,{gap:2,children:[a&&t.jsx(Ni,{}),u&&t.jsx(Bi,{asset:e}),l&&t.jsx(Ui,{asset:e}),a&&t.jsx(zi,{mime:e.mime})]}),a&&t.jsx(te,{type:"submit",variant:"default",loading:K,disabled:!U||K||z,children:s({id:c("asset-details.save"),defaultMessage:"Save changes"})})]})]})}},e.id)})})})},Vi=M($)`
  flex-shrink: 0;
`,Wi=M(P)`
  min-width: 0;
`,Hi=({asset:e,closeDetails:n})=>{const s=e?Je(e.mime,e.ext):gr;return t.jsxs($,{gap:2,paddingLeft:5,paddingTop:3,paddingBottom:3,paddingRight:3,borderColor:"neutral150",borderStyle:"solid",borderWidth:"0 0 1px 0",children:[t.jsx(Vi,{children:t.jsx(s,{width:20,height:20})}),t.jsx($e.Title,{asChild:!0,children:t.jsx(Wi,{variant:"omega",fontWeight:"semiBold",overflow:"hidden",ellipsis:!0,tag:"h2",children:e.name})}),t.jsx(W,{marginLeft:"auto",children:t.jsx($e.CloseButton,{onClose:n,children:t.jsx(pr,{})})})]})},qi=({assetId:e,closeDetails:n})=>{const{formatMessage:s}=A(),{data:o,isLoading:r,error:i}=Ja(e,{refetchOnMountOrArgChange:!1,refetchOnReconnect:!1,refetchOnFocus:!1});return r?t.jsx($,{justifyContent:"center",padding:8,children:t.jsx(Re,{children:s({id:"app.loading",defaultMessage:"Loading..."})})}):i||!o?t.jsx($,{direction:"column",alignItems:"stretch",gap:4,padding:4,children:t.jsx($s,{variant:"danger",closeLabel:s({id:"global.close",defaultMessage:"Close"}),onClose:n,children:s({id:c("asset-details.error"),defaultMessage:"Failed to load file details."})})}):t.jsxs(t.Fragment,{children:[t.jsx(Hi,{asset:o,closeDetails:n}),t.jsx(Gi,{asset:o,closeDetails:n})]})},Yi=(e,n)=>!n||e.detail.originalEvent.button!==0?!0:e.target instanceof Element?e.target.closest(ri)!==null&&e.target.closest(oi)===null:!1,Qi=()=>{const{formatMessage:e}=A(),{assetId:n,isVisible:s,shouldRenderDrawer:o,onCloseAnimationEnd:r,closeDetails:i}=jo();return!o||n===null?null:t.jsxs($e.Root,{isVisible:s,onClose:i,children:[t.jsx("div",{children:t.jsxs(Le,{children:[t.jsx($e.Title,{children:e({id:c("asset-details.title"),defaultMessage:"File details"})}),t.jsx($e.Description,{children:e({id:c("asset-details.description"),defaultMessage:"Displays file information and metadata"})})]})}),t.jsx($e.Body,{animationDirection:"left",width:"41.6rem",height:"100dvh",onAnimationEnd:r,onPointerDownOutside:a=>{Yi(a,s)&&a.preventDefault()},children:t.jsx(qi,{assetId:n,closeDetails:i})})]})},ee=e=>e.currentTarget instanceof Node&&e.target instanceof Node&&e.currentTarget.contains(e.target),Te=e=>`asset:${e}`,Fe=e=>`folder:${e}`,Hn=(e,n)=>{const s=new Set;return e.forEach(o=>{const[r,i]=o.split(":");r===n&&s.add(Number(i))}),s},wo=()=>({selectedKeys:new Set,anchorKey:null}),Xi=(e,n)=>{const s=new Set(e.selectedKeys);return s.has(n)?s.delete(n):s.add(n),{selectedKeys:s,anchorKey:n}},Zi=(e,n)=>{const s=new Set(e.selectedKeys);return s.delete(n),{selectedKeys:s,anchorKey:e.anchorKey===n?null:e.anchorKey}},Ji=(e,n,s)=>{const o=n.indexOf(s);if(o===-1)return e;const r=e.anchorKey===null?-1:n.indexOf(e.anchorKey);if(r===-1)return{selectedKeys:new Set([s]),anchorKey:s};const i=Math.min(r,o),a=Math.max(r,o);return{selectedKeys:new Set(n.slice(i,a+1)),anchorKey:e.anchorKey}},qn=e=>({selectedKeys:new Set(e),anchorKey:e.length>0?e[e.length-1]:null}),el=()=>wo(),tl=(e,n)=>{if(n.length===0)return{allSelected:!1,isIndeterminate:!1};const s=n.reduce((r,i)=>e.has(i)?r+1:r,0),o=s===n.length;return{allSelected:o,isIndeterminate:s>0&&!o}},$n=d.createContext(null),nl=({children:e,disabled:n=!1})=>{const[s,o]=d.useState(wo),r=d.useCallback(b=>!n&&s.selectedKeys.has(b),[n,s.selectedKeys]),i=d.useCallback(b=>{n||o(w=>Xi(w,b))},[n]),a=d.useCallback((b,w)=>{n||o(h=>Ji(h,b,w))},[n]),l=d.useCallback(b=>{n||o(qn(b))},[n]),u=d.useCallback(b=>{n||o(qn([b]))},[n]),p=d.useCallback(b=>o(w=>Zi(w,b)),[]),g=d.useCallback(()=>o(el()),[]),f=d.useMemo(()=>Hn(s.selectedKeys,"asset"),[s.selectedKeys]),m=d.useMemo(()=>Hn(s.selectedKeys,"folder"),[s.selectedKeys]),j=d.useMemo(()=>({selectedKeys:s.selectedKeys,selectedIds:f,selectedFolderIds:m,anchorKey:s.anchorKey,isSelected:r,toggle:i,selectRange:a,selectAll:l,selectOnly:u,deselect:p,clear:g}),[s.selectedKeys,f,m,s.anchorKey,r,i,a,l,u,p,g]);return d.createElement($n.Provider,{value:j},e)},he=()=>{const e=d.useContext($n);if(!e)throw new Error("useAssetSelection must be used within an AssetSelectionProvider");return e},vo=()=>d.useContext($n),Co=d.createContext(null),sl=({children:e})=>{const[n,s]=d.useState({}),o=d.useCallback((l,u)=>(s(p=>({...p,[l]:u})),()=>s(p=>{const{[l]:g,...f}=p;return f})),[]),r=d.useCallback(l=>n[l]!==void 0,[n]),i=d.useCallback(l=>n[l]??null,[n]),a=d.useMemo(()=>({isBusy:r,getBusyMessage:i,markBusy:o}),[r,i,o]);return d.createElement(Co.Provider,{value:a},e)},kn=()=>d.useContext(Co),ol=e=>{if(!e)return null;const n=Number(e);return Number.isFinite(n)?n:null},Ge=()=>{const[{query:e},n]=Ae(),s=ol(e?.folder),o=d.useCallback(l=>{n({folder:String(l.id),_q:void 0})},[n]),r=d.useCallback(()=>{n({folder:"",_q:""},"remove")},[n]),i=d.useCallback(()=>{n(xe(e,{folder:void 0}))},[e,n]);d.useEffect(()=>{e?.folder&&s===null&&i()},[e?.folder,s,i]);const a=d.useCallback(l=>{l==null?r():n({folder:String(l),_q:void 0})},[r,n]);return{currentFolderId:s,navigateToFolder:o,navigateToRoot:r,navigateToFolderId:a}},Rn=({folders:e,assets:n,mixedItems:s})=>s?s.map(o=>o.kind==="folder"?Fe(o.folder.id):Te(o.asset.id)):[...e.map(o=>Fe(o.id)),...n.map(o=>Te(o.id))],Mo=(e,n)=>{for(const s of e){if(s.id===n)return s;const o=Mo(s.children,n);if(o)return o}return null},rl=e=>{const n=new Set,s=o=>{for(const r of o.children)r.id!=null&&n.add(r.id),s(r)};return s(e),n},al=(e,n,s)=>{if(n===s)return!0;const o=Mo(e,n);return o?rl(o).has(s):!1},il=e=>e.kind==="file"?e.folderId==null:e.parentId==null,ze=({items:e,targetFolderId:n,folderStructure:s})=>{if(e.length===0)return!1;if(n===null)return e.some(r=>!il(r));const o=new Set(e.filter(r=>r.kind==="folder").map(r=>r.id));if(o.has(n))return!1;for(const r of o)if(al(s,r,n))return!1;for(const r of e)if(r.kind==="file"&&r.folderId===n||r.kind==="folder"&&r.parentId===n)return!1;return!0},En=(e,n=new Set,s="")=>e.flatMap(o=>{if(o.id==null||n.has(o.id))return[];const r=s?`${s} / ${o.name??""}`:o.name??"";return[{id:o.id,label:r},...En(o.children??[],n,r)]}),So=({formatMessage:e,count:n,source:s,destination:o})=>s===null?e({id:c("list.bulk-actions.move.success-multiple-sources"),defaultMessage:"{count, plural, =1 {# element has} other {# elements have}} been moved to {destination}"},{count:n,destination:o}):e({id:c("list.bulk-actions.move.success"),defaultMessage:"{count, plural, =1 {# element has} other {# elements have}} been moved from {source} to {destination}"},{count:n,source:s,destination:o}),Ze=e=>e.kind==="folder"?e.parentId:e.folderId,ll=e=>Io(e)?Ze(e[0]):null,Io=e=>{if(e.length===0)return!1;const n=Ze(e[0]);return e.every(s=>Ze(s)===n)},dl=M(ce.Content)`
  max-width: 51.6rem;
`,Et=({open:e,onClose:n,items:s,onSuccess:o})=>{const{formatMessage:r}=A(),i=ot(),{toggleNotification:a}=ye(),{data:l=[],isUninitialized:u,isLoading:p,isError:g}=In(void 0,{skip:!e}),[f,{isLoading:m}]=oo(),j=d.useMemo(()=>s.filter(k=>k.kind==="file").map(k=>k.id),[s]),b=d.useMemo(()=>s.filter(k=>k.kind==="folder").map(k=>k.id),[s]),w=Io(s),h=ll(s),{data:x}=Sn({id:h},{skip:h===null}),[S,C]=d.useState(""),y=r({id:c("plugin.name"),defaultMessage:"Media Library"}),R=d.useMemo(()=>En(l,new Set(b)).filter(k=>ze({items:s,targetFolderId:k.id,folderStructure:l})),[l,b,s]),E=d.useMemo(()=>ze({items:s,targetFolderId:null,folderStructure:l}),[s,l]),v=E?"":R[0]?.id.toString()??"";d.useEffect(()=>{C(v)},[e,v]);const I=!u&&!p&&!g,G=I&&R.length===0&&!E,T=s.length,B=async()=>{if(m||!I)return;const k=S===""?null:Number(S);try{await f({fileIds:j,folderIds:b,destinationFolderId:k}).unwrap()}catch(H){a({type:"danger",message:i(H,r({id:c("list.bulk-actions.move.error"),defaultMessage:"An error occurred while moving the items."}))});return}const F=w?h===null?y:x?.name??y:null,Y=k===null?y:R.find(H=>H.id===k)?.label??y;a({type:"success",message:So({formatMessage:r,count:T,source:F,destination:Y})}),o?.(),n()},D=()=>g?t.jsx(P,{textColor:"danger600",children:r({id:c("list.bulk-actions.move.load-error"),defaultMessage:"Couldn't load the folder list. Please try again."})}):G?t.jsx(P,{textColor:"neutral600",children:r({id:c("list.bulk-actions.move.no-destination"),defaultMessage:"There is no other folder to move this to."})}):t.jsxs(de.Root,{name:"destination",children:[t.jsx(de.Label,{children:r({id:c("list.bulk-actions.move.location"),defaultMessage:"Location"})}),t.jsxs(Es,{value:S,onChange:k=>C(String(k)),disabled:m||!I,children:[E&&t.jsx(yt,{value:"",children:y}),R.map(k=>t.jsx(yt,{value:String(k.id),children:k.label},k.id))]})]});return t.jsx(ce.Root,{open:e,onOpenChange:k=>{!k&&!m&&n()},children:t.jsxs(dl,{children:[t.jsx(ce.Header,{children:t.jsx(ce.Title,{children:r({id:c("list.bulk-actions.move.title"),defaultMessage:"Move elements to"})})}),t.jsx(ce.Body,{children:D()}),t.jsx(ce.Footer,{children:t.jsxs($,{gap:2,justifyContent:"space-between",width:"100%",children:[t.jsx(te,{variant:"tertiary",onClick:n,disabled:m,type:"button",children:r({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),t.jsx(te,{onClick:B,loading:m,disabled:!I||G,children:r({id:c("list.bulk-actions.move.submit"),defaultMessage:"Move"})})]})})]})})},Tt=({open:e,onClose:n,target:s,onSuccess:o,onPendingChange:r})=>{const{formatMessage:i}=A(),{toggleNotification:a}=ye(),l=ot(),[u,{isLoading:p}]=ni(),g=s.fileIds.length+s.folderIds.length;d.useEffect(()=>{r?.(p)},[p,r]);const f=async m=>{if(m.preventDefault(),p)return;const j=await u(s);if("error"in j){a({type:"danger",message:l(j.error,i({id:c("list.bulk-actions.delete.error"),defaultMessage:"An error occurred while deleting the items."}))});return}n(),a({type:"success",message:i({id:c("list.bulk-actions.delete.success"),defaultMessage:"{count, plural, =1 {# item has been deleted} other {# items have been deleted}}"},{count:g})}),o?.()};return t.jsx(X.Root,{open:e,onOpenChange:m=>{!m&&!p&&n()},children:t.jsxs(X.Content,{children:[t.jsx(X.Header,{children:i({id:c("list.bulk-actions.delete.confirm.title"),defaultMessage:"Delete {count, plural, =1 {# item} other {# items}}?"},{count:g})}),t.jsx(X.Body,{icon:t.jsx(Mt,{width:"24px",height:"24px",fill:"danger600"}),textAlign:"center",children:t.jsx(P,{children:i({id:c("list.bulk-actions.delete.confirm.description.are-you-sure"),defaultMessage:"These items cannot be recovered once deleted, and deleting a folder also deletes everything inside it. If they are currently in use, linked content will break and image containers will be empty."})})}),t.jsxs(X.Footer,{children:[t.jsx(X.Cancel,{children:t.jsx(te,{variant:"tertiary",disabled:p,fullWidth:!0,children:i({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})}),t.jsx(X.Action,{children:t.jsx(te,{variant:"danger-light",loading:p,onClick:f,fullWidth:!0,children:i({id:"app.components.Button.confirm",defaultMessage:"Confirm"})})})]})]})})},Do=({asset:e,dragData:n,permissions:s,children:o})=>{const{formatMessage:r}=A(),i=ot(),{copy:a}=yn(),{toggleNotification:l}=ye(),{deselect:u}=he(),p=kn()?.markBusy??(()=>()=>{}),g=ue(),{canUpdate:f,canDownload:m,canCopyLink:j,isLoading:b}=s??g,[w,{isLoading:h}]=ao(),x=St({mime:e.mime}),S=d.useRef(null),[C,y]=d.useState(!1),[R,E]=d.useState(!1),[v,I]=d.useState(!1),[G,T]=d.useState(!1),[B,D]=d.useState(!1),k=d.useMemo(()=>[n],[n]);d.useEffect(()=>{const _=S.current;if(!_)return;const q=()=>D(!1);return _.addEventListener("cancel",q),()=>_.removeEventListener("cancel",q)},[]);const F=()=>{y(!1),D(!0),S.current?.click()},Y=async _=>{const q=_.target.files?.[0];if(_.target.value="",D(!1),!q)return;const oe=p(e.id,r({id:c("asset-details.replace.loading"),defaultMessage:"Replacing the file…"}));let ie;try{ie=await w({id:e.id,file:q,fileInfo:{name:e.name}})}finally{oe()}if("error"in ie){l({type:"danger",message:i(ie.error,r({id:c("asset-details.replace.error"),defaultMessage:"Failed to replace the file."}))});return}l({type:"success",message:r({id:c("asset-details.replace.success"),defaultMessage:"File replaced."})})},H=async()=>{const _=be(e.url);if(!_)return;const q=await a(_);l({type:q?"success":"danger",message:r(q?{id:c("asset-details.copy-link.success"),defaultMessage:"Link copied."}:{id:c("asset-details.copy-link.error"),defaultMessage:"Failed to copy the link."})})},Z=async()=>{const _=be(e.url);if(_){T(!0);try{await io(_,e.name)}catch{l({type:"danger",message:r({id:c("asset-details.download.error"),defaultMessage:"Failed to download the file."})})}finally{T(!1)}}},U=f||j||m,K=f,V=(j||m)&&K,J=t.jsxs(t.Fragment,{children:[f&&t.jsx(O.Item,{startIcon:t.jsx(Fs,{}),disabled:h,onSelect:()=>y(!0),children:r({id:c("list.assets.actions.replace"),defaultMessage:"Replace media"})}),j&&t.jsx(O.Item,{startIcon:t.jsx(Ke,{}),onSelect:H,children:r({id:c("list.assets.actions.copy-link"),defaultMessage:"Copy link to media"})}),m&&t.jsx(O.Item,{startIcon:t.jsx(Ts,{}),disabled:G,onSelect:Z,children:r({id:c("list.assets.actions.download"),defaultMessage:"Download media"})}),V&&t.jsx(O.Separator,{}),f&&t.jsxs(t.Fragment,{children:[t.jsx(O.Item,{startIcon:t.jsx(It,{}),onSelect:()=>E(!0),children:r({id:c("list.assets.actions.move"),defaultMessage:"Move to folder"})}),t.jsx(O.Item,{startIcon:t.jsx(et,{}),variant:"danger",onSelect:()=>I(!0),children:r({id:c("list.assets.actions.delete"),defaultMessage:"Delete"})})]})]}),z=t.jsxs(t.Fragment,{children:[t.jsx(Le,{children:t.jsx("input",{ref:S,type:"file",accept:e.mime??"",multiple:!1,onChange:Y,"aria-hidden":!0,tabIndex:-1})}),t.jsx(X.Root,{open:C,onOpenChange:y,children:t.jsxs(X.Content,{children:[t.jsx(X.Header,{children:r({id:c("asset-details.replace.title"),defaultMessage:"Replace this media file?"})}),t.jsx(X.Body,{textAlign:"center",children:t.jsxs($,{direction:"column",textAlign:"center",children:[t.jsx(P,{variant:"omega",children:r({id:c("asset-details.replace.description"),defaultMessage:"Current content will be permanently replaced."})}),x?t.jsx(P,{variant:"omega",children:r({id:c("asset-details.replace.description.ai"),defaultMessage:"AI will generate new metadata after upload."})}):null]})}),t.jsxs(X.Footer,{children:[t.jsx(X.Cancel,{children:t.jsx(te,{variant:"tertiary",fullWidth:!0,children:r({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})}),t.jsx(X.Action,{children:t.jsx(te,{variant:"secondary",onClick:F,fullWidth:!0,children:r({id:c("asset-details.replace.continue"),defaultMessage:"Continue"})})})]})]})}),R&&t.jsx(Et,{open:!0,onClose:()=>E(!1),items:k,onSuccess:()=>u(Te(e.id))}),v&&t.jsx(Tt,{open:!0,onClose:()=>I(!1),target:{fileIds:[e.id],folderIds:[]},onSuccess:()=>u(Te(e.id))})]});return t.jsx(t.Fragment,{children:o({items:J,dialogs:z,hasActions:b||U||K,isBusy:C||R||v||B})})},$o=({asset:e,dragData:n})=>{const{formatMessage:s}=A();return t.jsx(Do,{asset:e,dragData:n,children:({items:o,dialogs:r,hasActions:i})=>i?t.jsxs(t.Fragment,{children:[t.jsxs(O.Root,{modal:!1,children:[t.jsx(O.Trigger,{tag:re,icon:t.jsx(jn,{}),variant:"ghost",label:s({id:c("control-card.more-actions"),defaultMessage:"More actions"})}),t.jsx(tt,{popoverPlacement:"bottom-end",zIndex:2,minWidth:"22rem",children:o})]}),r]}):null})},cl=e=>{const n=[],s=[];for(const o of e)o.kind==="file"?n.push(o.id):s.push(o.id);return{fileIds:n,folderIds:s}},Yn=(e,n,s)=>{if(n===null)return s;const o=r=>{for(const i of r){if(i.id===n)return i;const a=o(i.children??[]);if(a)return a}return null};return o(e)?.name??s},Qn=(e,n,s,o)=>{const r=e.kind==="file"?Te(e.id):Fe(e.id),i=Ze(e);if(!n||!n.has(r))return{items:[e],fromSelection:!1,activeSourceFolderId:i,spansMultipleSources:!1};const a=[];return n.forEach(l=>{const u=l.indexOf(":"),p=l.slice(0,u),g=Number(l.slice(u+1));if(p==="asset"){if(e.kind==="file"&&e.id===g){a.push(e);return}a.push({kind:"file",id:g,name:"",folderId:wt(s,"file",g,o)});return}if(e.kind==="folder"&&e.id===g){a.push(e);return}a.push({kind:"folder",id:g,name:"",parentId:wt(s,"folder",g,o)})}),{items:a,fromSelection:!0,activeSourceFolderId:i,spansMultipleSources:a.some(l=>Ze(l)!==i)}},ul=(e,n)=>{const s=new Set;if(e.length===0)return s;ze({items:e,targetFolderId:null,folderStructure:n})&&s.add(null);for(const{id:o}of En(n))ze({items:e,targetFolderId:o,folderStructure:n})&&s.add(o);return s},gl=e=>`file:${e}`,pl=e=>`folder:${e}`,fl=e=>`folder-target:${e}`,hl=e=>{if(typeof e!="string")return null;const n=/^folder-target:(\d+)$/.exec(e);return n?Number(n[1]):null},ml=e=>`folder-tree-target:${e}`,ko="folder-tree-target:home",xl=e=>{if(typeof e!="string")return null;if(e===ko)return"root";const n=/^folder-tree-target:(\d+)$/.exec(e);return n?Number(n[1]):null},Wt=20,Ht=24,Xn=24,Ro=M($).attrs({"data-testid":"drag-overlay-chip"})`
  position: relative;
  align-items: center;
  gap: ${({theme:e})=>e.spaces[2]};
  padding: ${({theme:e})=>`${e.spaces[2]} ${e.spaces[3]}`};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.primary100};
  box-shadow: ${({theme:e})=>e.shadows.tableShadow};
  cursor: grabbing;
  max-width: 24rem;
`,bl=M(Ro)`
  box-shadow:
    ${({theme:e})=>e.shadows.tableShadow},
    0 4px 0 -1px ${({theme:e})=>e.colors.primary100},
    0 4px 0 0 ${({theme:e})=>e.colors.primary200},
    0 7px 0 -1px ${({theme:e})=>e.colors.primary100},
    0 7px 0 0 ${({theme:e})=>e.colors.primary200};
`,Zn=M($)`
  align-items: center;
  gap: ${({theme:e})=>e.spaces[1]};
`,qt=M($)`
  flex-shrink: 0;
  width: ${Xn}px;
  height: ${Xn}px;
  align-items: center;
  justify-content: center;
`,yl=M($)`
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
`,jl=({items:e})=>{const{formatMessage:n}=A();if(e.length===0)return null;if(e.length===1){const i=e[0],a=i.kind==="folder",l=a?Ce:Nn,u=a?Wt:Ht;return t.jsxs(Ro,{children:[t.jsx(qt,{children:t.jsx(l,{width:u,height:u})}),t.jsx(P,{textColor:"neutral800",fontWeight:"semiBold",ellipsis:!0,children:i.name})]})}const s=e.filter(i=>i.kind==="folder").length,o=e.filter(i=>i.kind==="file").length,r=s+o;return t.jsxs(bl,{gap:3,children:[s>0?t.jsxs(Zn,{children:[t.jsx(qt,{children:t.jsx(Ce,{width:Wt,height:Wt})}),t.jsx(P,{textColor:"neutral800",fontWeight:"semiBold",children:n({id:c("dnd.overlay.folders"),defaultMessage:"{count, plural, one {# folder} other {# folders}}"},{count:s})})]}):null,o>0?t.jsxs(Zn,{children:[t.jsx(qt,{children:t.jsx(Nn,{width:Ht,height:Ht})}),t.jsx(P,{textColor:"neutral800",fontWeight:"semiBold",children:n({id:c("dnd.overlay.files"),defaultMessage:"{count, plural, one {# file} other {# files}}"},{count:o})})]}):null,t.jsx(yl,{children:t.jsx(P,{textColor:"neutral0",fontWeight:"bold",variant:"pi",children:r})})]})},Eo=d.createContext(null),me=()=>d.useContext(Eo),Jn=e=>{const n=hl(e);if(n!=null)return{destinationFolderId:n};const s=xl(e);return s==="root"?{destinationFolderId:null}:typeof s=="number"?{destinationFolderId:s}:null},wl=Number.MAX_SAFE_INTEGER,vl=[da],Cl=({children:e,locations:n=ro})=>{const{formatMessage:s}=A(),o=ot(),{toggleNotification:r}=ye(),i=vo(),{currentFolderId:a}=Ge(),{data:l=[]}=In(),u=s({id:c("plugin.name"),defaultMessage:"Media Library"}),[p,{isLoading:g}]=oo(),[f,m]=d.useState([]),[j,b]=d.useState(""),w=d.useRef({items:[],fromSelection:!1,activeSourceFolderId:null,spansMultipleSources:!1}),h=d.useCallback(B=>{b(""),requestAnimationFrame(()=>b(B))},[]),{canUpdate:x}=ue(),S=sa(oa(la,{activationConstraint:{distance:x?8:wl}})),C=d.useMemo(()=>ul(f,l),[f,l]),y=d.useCallback(B=>C.has(B),[C]),R=d.useMemo(()=>({isInternalDragActive:f.length>0,isMovePending:g,isValidDropTarget:y}),[f.length,g,y]),E=d.useCallback(()=>{w.current={items:[],fromSelection:!1,activeSourceFolderId:null,spansMultipleSources:!1},m([])},[]),v=d.useCallback(B=>{const D=B.active.data.current;if(!D){E();return}const k=Qn(D,i?.selectedKeys,n,a);w.current=k,m(k.items)},[E,a,n,i?.selectedKeys]),I=d.useCallback(async B=>{const{over:D}=B,{items:k,fromSelection:F,activeSourceFolderId:Y,spansMultipleSources:H}=w.current;if(E(),g||!D||k.length===0)return;const Z=Jn(D.id);if(!Z)return;const{destinationFolderId:U}=Z;if(!ze({items:k,targetFolderId:U,folderStructure:l}))return;const K=cl(k),V=So({formatMessage:s,count:k.length,source:H?null:Yn(l,Y,u),destination:Yn(l,U,u)}),J=s({id:c("list.bulk-actions.move.error"),defaultMessage:"An error occurred while moving the items."});try{await p({...K,destinationFolderId:U}).unwrap(),F&&i?.clear(),h(V),r({type:"success",message:V})}catch(z){const _=o(z,J);h(s({id:c("dnd.announce.move-failure"),defaultMessage:"Move failed. {message}"},{message:_})),r({type:"danger",message:_})}},[h,p,E,l,s,o,g,u,i,r]),G=d.useCallback(()=>{E()},[E]),T=d.useMemo(()=>({onDragStart:({active:B})=>{const D=B.data.current;return D?s({id:c("dnd.announce.drag-start"),defaultMessage:"Picked up {name}. Drop on a folder to move."},{name:D.name}):""},onDragOver:()=>"",onDragEnd:({active:B,over:D})=>{if(!D)return s({id:c("dnd.announce.cancel"),defaultMessage:"Drag cancelled."});const k=Jn(D.id),F=B.data.current;if(!k||!F)return"";const{items:Y}=Qn(F,i?.selectedKeys,n,a);return ze({items:Y,targetFolderId:k.destinationFolderId,folderStructure:l})?"":s({id:c("dnd.announce.invalid-drop"),defaultMessage:"Cannot move item to this folder."})},onDragCancel:()=>s({id:c("dnd.announce.cancel"),defaultMessage:"Drag cancelled."})}),[a,l,s,n,i?.selectedKeys]);return t.jsx(Eo.Provider,{value:R,children:t.jsxs(ra,{sensors:S,collisionDetection:aa,onDragStart:v,onDragEnd:I,onDragCancel:G,accessibility:{announcements:T},children:[t.jsx(Le,{"aria-live":"polite","aria-atomic":"true",children:j}),t.jsx($,{position:"relative",alignItems:"stretch",direction:"column",height:"100%",children:e}),t.jsx(ia,{dropAnimation:null,modifiers:vl,children:f.length>0?t.jsx(jl,{items:f}):null})]})})},To=e=>{const{isMovePending:n}=me()??{isMovePending:!1},s=d.useMemo(()=>({kind:"file",id:e.id,name:e.name,folderId:Xe(e.folder)}),[e.folder,e.id,e.name]);return{...Ns({id:gl(e.id),data:s,disabled:n}),dragData:s}},Fo=e=>{const{isMovePending:n,isValidDropTarget:s}=me()??{isMovePending:!1,isValidDropTarget:()=>!1},{active:o}=_s(),r=Xe(e.parent),i=d.useMemo(()=>({kind:"folder",id:e.id,name:e.name,parentId:r}),[e.id,e.name,r]),a=d.useMemo(()=>({kind:"folder-target",id:e.id,name:e.name}),[e.id,e.name]),l=Ns({id:pl(e.id),data:i,disabled:n}),u=Bs({id:fl(e.id),data:a,disabled:n}),p=s(e.id),g=u.isOver,f=g&&p,m=g&&!p&&o!=null;return{dragData:i,draggable:l,droppable:u,isDragging:l.isDragging,showValidDropHighlight:f,showInvalidDropCursor:m}},Ml=M(ce.Content)`
  max-width: 51.6rem;
`,Ao=e=>{const{open:n,parentFolderId:s,onClose:o,mode:r}=e,i=e.mode==="rename"?e.initialName:"",{formatMessage:a}=A(),{toggleNotification:l}=ye(),{trackUsage:u}=Me(),[p,g]=d.useState(i),[f,m]=d.useState(),j=d.useRef(null),[b,{isLoading:w}]=Wa(),[h,{isLoading:x}]=Ha(),S=r==="rename"?x:w;d.useEffect(()=>{n&&(g(i),m(void 0),r==="rename"&&j.current?.select())},[n,i,r]);const C=async y=>{y.preventDefault();const R=p.trim();if(!R){m(a({id:c("folder.create.form.error.name-required"),defaultMessage:"Name is required"}));return}try{e.mode==="rename"?(await h({id:e.folderId,name:R,parent:s}).unwrap(),u("didEditMediaLibraryElements",{location:ae,type:"folder",changeLocation:!1})):(await b({name:R,parent:s}).unwrap(),u("didAddMediaLibraryFolders",{location:ae})),l({type:"success",message:a(r==="rename"?{id:c("folder.rename.success"),defaultMessage:"Folder has been renamed"}:{id:c("folder.create.success"),defaultMessage:"Folder has been created"})}),o()}catch(E){const v=E;v?.message?m(v.message):l({type:"danger",message:a(r==="rename"?{id:c("folder.rename.form.error.unknown"),defaultMessage:"An error occurred while renaming the folder"}:{id:c("folder.create.form.error.unknown"),defaultMessage:"An error occurred while creating the folder"})})}};return t.jsx(ce.Root,{open:n,onOpenChange:o,children:t.jsxs(Ml,{children:[t.jsx(ce.Header,{children:t.jsx(ce.Title,{children:e.mode==="rename"?a({id:c("folder.rename.title"),defaultMessage:"Rename folder"}):a({id:c("folder.create.title-in"),defaultMessage:"New folder in {folderName}"},{folderName:e.parentFolderName})})}),t.jsxs("form",{onSubmit:C,children:[t.jsx(ce.Body,{children:t.jsxs(de.Root,{error:f,name:"name",required:!0,children:[t.jsx(de.Label,{children:a({id:c("folder.form.name.label"),defaultMessage:"Folder name"})}),t.jsx(Rs,{ref:j,value:p,onChange:y=>{g(y.target.value),m(void 0)},autoFocus:!0}),t.jsx(de.Error,{})]})}),t.jsx(ce.Footer,{children:t.jsxs($,{gap:2,justifyContent:"space-between",width:"100%",children:[t.jsx(te,{variant:"tertiary",onClick:o,type:"button",children:a({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),t.jsx(te,{type:"submit",loading:S,disabled:r==="rename"&&p.trim()===i.trim(),children:a(r==="rename"?{id:c("folder.rename.submit"),defaultMessage:"Save"}:{id:c("folder.create.submit"),defaultMessage:"Create folder"})})]})})]})]})})},Tn=({folder:e,dragData:n,showRename:s=!0,children:o})=>{const{formatMessage:r}=A(),{copy:i}=yn(),{toggleNotification:a}=ye(),l=vo()?.deselect,[u,p]=d.useState(!1),[g,f]=d.useState(!1),[m,j]=d.useState(!1),b=d.useMemo(()=>[n],[n]),w=async()=>{const S=`${window.location.origin}${window.location.pathname}?folder=${e.id}`,C=await i(S);a({type:C?"success":"danger",message:r(C?{id:c("list.folder.actions.copy-link.success"),defaultMessage:"Folder link copied."}:{id:c("list.folder.actions.copy-link.error"),defaultMessage:"Failed to copy the folder link."})})},h=t.jsxs(t.Fragment,{children:[t.jsx(O.Item,{startIcon:t.jsx(Ke,{}),onSelect:w,children:r({id:c("list.folder.actions.copy-link"),defaultMessage:"Copy link to folder"})}),t.jsx(O.Separator,{}),s&&t.jsx(O.Item,{startIcon:t.jsx(br,{}),onSelect:()=>p(!0),children:r({id:c("list.folder.actions.rename"),defaultMessage:"Rename folder"})}),t.jsx(O.Item,{startIcon:t.jsx(It,{}),onSelect:()=>f(!0),children:r({id:c("list.folder.actions.move"),defaultMessage:"Move to folder"})}),t.jsx(O.Item,{startIcon:t.jsx(et,{}),variant:"danger",onSelect:()=>j(!0),children:r({id:c("list.folder.actions.delete"),defaultMessage:"Delete folder"})})]}),x=t.jsxs(t.Fragment,{children:[s&&u&&t.jsx(Ao,{open:!0,mode:"rename",folderId:e.id,initialName:e.name,parentFolderId:n.parentId,onClose:()=>p(!1)}),g&&t.jsx(Et,{open:!0,onClose:()=>f(!1),items:b,onSuccess:()=>l?.(Fe(e.id))}),m&&t.jsx(Tt,{open:!0,onClose:()=>j(!1),target:{fileIds:[],folderIds:[e.id]},onSuccess:()=>l?.(Fe(e.id))})]});return t.jsx(t.Fragment,{children:o({items:h,dialogs:x,isBusy:u||g||m})})},Lo=({folder:e,dragData:n})=>{const{formatMessage:s}=A();return t.jsx(Tn,{folder:e,dragData:n,children:({items:o,dialogs:r})=>t.jsxs(t.Fragment,{children:[t.jsxs(O.Root,{modal:!1,children:[t.jsx(O.Trigger,{tag:re,icon:t.jsx(jn,{}),variant:"ghost",label:s({id:c("control-card.more-actions"),defaultMessage:"More actions"})}),t.jsx(tt,{popoverPlacement:"bottom-end",zIndex:2,minWidth:"22rem",children:o})]}),r]})})},Sl={position:"fixed",width:0,height:0,minWidth:0,minHeight:0,padding:0,border:0,opacity:0,overflow:"hidden",pointerEvents:"none"},Ft=({position:e,open:n,label:s,returnFocusTo:o,onClose:r,children:i})=>t.jsxs(O.Root,{modal:!1,open:n,onOpenChange:a=>{a||r()},children:[t.jsx(O.Trigger,{tabIndex:-1,endIcon:null,"aria-label":s,style:{...Sl,top:e.y,left:e.x}}),t.jsx(tt,{popoverPlacement:"bottom-start",zIndex:2,minWidth:"22rem",onCloseAutoFocus:a=>{a.preventDefault(),(document.activeElement===null||document.activeElement===document.body)&&o?.isConnected&&o.focus()},children:i})]}),Il=({asset:e,dragData:n,permissions:s,position:o,returnFocusTo:r,onClose:i})=>{const{formatMessage:a}=A(),[l,u]=d.useState(!0);return t.jsx(Do,{asset:e,dragData:n,permissions:s,children:({items:p,dialogs:g,hasActions:f,isBusy:m})=>t.jsx(Dl,{hasActions:f,isBusy:m,isMenuOpen:l,onMenuClose:()=>u(!1),onClose:i,position:o,returnFocusTo:r,label:a({id:c("list.assets.context-menu.label"),defaultMessage:"Asset actions"}),items:p,dialogs:g})})},Dl=({hasActions:e,isBusy:n,isMenuOpen:s,onMenuClose:o,onClose:r,position:i,returnFocusTo:a,label:l,items:u,dialogs:p})=>(d.useEffect(()=>{(!e||!s&&!n)&&r()},[e,s,n,r]),e?t.jsxs(t.Fragment,{children:[t.jsx(Ft,{position:i,open:s,label:l,returnFocusTo:a,onClose:o,children:u}),p]}):null),$l=({folder:e,dragData:n,showRename:s,position:o,returnFocusTo:r,onClose:i})=>{const{formatMessage:a}=A(),[l,u]=d.useState(!0);return t.jsx(Tn,{folder:e,dragData:n,showRename:s,children:({items:p,dialogs:g,isBusy:f})=>t.jsx(kl,{isBusy:f,isMenuOpen:l,onMenuClose:()=>u(!1),onClose:i,position:o,returnFocusTo:r,label:a({id:c("list.folder.context-menu.label"),defaultMessage:"Folder actions"}),items:p,dialogs:g})})},kl=({isBusy:e,isMenuOpen:n,onMenuClose:s,onClose:o,position:r,returnFocusTo:i,label:a,items:l,dialogs:u})=>(d.useEffect(()=>{!n&&!e&&o()},[n,e,o]),t.jsxs(t.Fragment,{children:[t.jsx(Ft,{position:r,open:n,label:a,returnFocusTo:i,onClose:s,children:l}),u]})),Oo=(e,n,s,o)=>{const r=[];return e.forEach(i=>{r.push({kind:"file",id:i,name:"",folderId:wt(s,"file",i,o)})}),n.forEach(i=>{r.push({kind:"folder",id:i,name:"",parentId:wt(s,"folder",i,o)})}),r},Po=({locations:e,children:n})=>{const{formatMessage:s}=A(),{canUpdate:o,isLoading:r}=ue(),{selectedIds:i,selectedFolderIds:a,clear:l}=he(),{currentFolderId:u}=Ge(),[p,g]=d.useState(!1),[f,m]=d.useState(!1),j=i.size+a.size,b=p||f,w=r||o,h=d.useMemo(()=>Oo(i,a,e,u),[i,a,e,u]),x=t.jsxs(t.Fragment,{children:[t.jsx(O.Label,{children:t.jsx(P,{variant:"sigma",textColor:"neutral600",children:s({id:c("list.bulk-actions.selected-count"),defaultMessage:"{count, plural, =1 {# item selected} other {# items selected}}"},{count:j})})}),t.jsx(O.Separator,{}),t.jsx(O.Item,{startIcon:t.jsx(It,{}),onSelect:()=>g(!0),children:s({id:c("list.bulk-actions.move"),defaultMessage:"Move"})}),t.jsx(O.Item,{startIcon:t.jsx(et,{}),variant:"danger",onSelect:()=>m(!0),children:s({id:c("list.bulk-actions.delete"),defaultMessage:"Delete"})})]}),S=t.jsxs(t.Fragment,{children:[p&&t.jsx(Et,{open:!0,onClose:()=>g(!1),items:h,onSuccess:l}),f&&t.jsx(Tt,{open:!0,onClose:()=>m(!1),target:{fileIds:Array.from(i),folderIds:Array.from(a)},onSuccess:l})]});return t.jsx(t.Fragment,{children:n({count:j,hasActions:w,items:x,dialogs:S,isBusy:b})})},Rl=({position:e,returnFocusTo:n,locations:s,onClose:o})=>{const{formatMessage:r}=A();return t.jsx(Po,{locations:s,children:({hasActions:i,items:a,dialogs:l,isBusy:u})=>t.jsx(El,{hasActions:i,isBusy:u,position:e,returnFocusTo:n,label:r({id:c("list.selection.context-menu.label"),defaultMessage:"Selection actions"}),items:a,dialogs:l,onClose:o})})},El=({hasActions:e,isBusy:n,position:s,returnFocusTo:o,label:r,items:i,dialogs:a,onClose:l})=>{const[u,p]=d.useState(!0);return d.useEffect(()=>{!u&&!n&&l()},[u,n,l]),d.useEffect(()=>{e||l()},[e,l]),e?t.jsxs(t.Fragment,{children:[t.jsx(Ft,{position:s,open:u,label:r,returnFocusTo:o,onClose:()=>p(!1),children:i}),a]}):null},_o=d.createContext(null),At=()=>d.useContext(_o),Tl=(e,n,s)=>n?e.canUpdate:s.kind==="asset"?e.canUpdate||e.canCopyLink||e.canDownload:!0,Fl=({locations:e,children:n})=>{const{isSelected:s,selectOnly:o,selectedKeys:r}=he(),i=ue(),[a,l]=d.useState(null),u=d.useRef(0),p=d.useCallback((m,j,b)=>{const w=s(j)&&r.size>1;if(!i.isLoading&&!Tl(i,w,b))return;m.preventDefault();const h={x:m.clientX,y:m.clientY},x=m.currentTarget instanceof HTMLElement?m.currentTarget:null;u.current+=1;const S=u.current;if(w){l({id:S,position:h,returnFocusTo:x,payload:null});return}o(j),l({id:S,position:h,returnFocusTo:x,payload:b})},[s,o,r,i]),g=d.useCallback(m=>l(j=>j?.id===m?null:j),[]),f=d.useMemo(()=>p,[p]);return t.jsxs(_o.Provider,{value:f,children:[n,a!==null&&(a.payload===null?t.jsx(Rl,{position:a.position,returnFocusTo:a.returnFocusTo,locations:e,onClose:()=>g(a.id)},a.id):a.payload.kind==="asset"?t.jsx(Il,{asset:a.payload.asset,dragData:a.payload.dragData,permissions:i,position:a.position,returnFocusTo:a.returnFocusTo,onClose:()=>g(a.id)},a.id):t.jsx($l,{folder:a.payload.folder,dragData:a.payload.dragData,position:a.position,returnFocusTo:a.returnFocusTo,onClose:()=>g(a.id)},a.id))]})},Al=[],Be=e=>{ee(e)&&e.stopPropagation()},Ll=M($)`
  position: absolute;
  top: ${({theme:e})=>e.spaces[3]};
  left: ${({theme:e})=>e.spaces[3]};
  z-index: 1;
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
`,Ol=M(jr)`
  border: 1px solid
    ${({theme:e,$isSelected:n})=>n?e.colors.primary600:e.colors.neutral200};
  border-radius: 8px;
  overflow: hidden;
  isolation: isolate;
  cursor: ${({$isMovePending:e,$isBusy:n})=>e||n?"wait":"pointer"};
  opacity: ${({$isDragging:e})=>e?.4:1};
  /* No opacity change while busy — the overlay does the dimming, and stacking
     one on the other would wash the card out. */
  pointer-events: ${({$isMovePending:e,$isBusy:n})=>e||n?"none":"auto"};
  background: ${({theme:e,$isSelected:n})=>n?e.colors.primary100:void 0};
  /* Shift+click range selection must not highlight card text. */
  user-select: none;

  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary600};
    outline-offset: 2px;
  }
`,Pl=M(W)`
  grid-column: 1 / -1;
`,_l="240px",es=M(W)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(${_l}, 100%), 1fr));
  gap: ${({theme:e})=>e.spaces[4]};
`,Nl=M($)`
  width: 100%;
  user-select: none;
  padding: ${({theme:e})=>`${e.spaces[2]} ${e.spaces[3]}`}; // 8px 12px
  align-items: center;
  gap: ${({theme:e})=>e.spaces[2]}; // 8px
  border: 1px solid
    ${({theme:e,$isSelected:n})=>n?e.colors.primary600:e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e,$isSelected:n})=>n?e.colors.primary100:e.colors.neutral0};
  cursor: ${({$isMovePending:e,$isInvalidDropTarget:n})=>e?"wait":n?"not-allowed":"pointer"};
  opacity: ${({$isDragging:e})=>e?.4:1};
  pointer-events: ${({$isMovePending:e})=>e?"none":"auto"};
  transition: background 0.2s;

  ${({$isValidDropTarget:e,theme:n})=>e&&je`
      background: ${n.colors.primary100};
      border: 1px dashed ${n.colors.primary600};
    `}

  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary600};
    outline-offset: 2px;
  }
`,Bl=M($)`
  flex-shrink: 0;
  color: ${({theme:e})=>e.colors.neutral600};
`,Ul=M(nt)`
  flex: 1;
  min-width: 0;
`,zl=({folder:e,orderedItemKeys:n})=>{const{formatMessage:s}=A(),{navigateToFolder:o}=Ge(),{isMovePending:r}=me()??{isMovePending:!1},{isSelected:i,toggle:a,selectRange:l}=he(),{canUpdate:u}=ue(),p=At(),{dragData:g,draggable:{attributes:f,listeners:m,setNodeRef:j,isDragging:b},droppable:{setNodeRef:w},showValidDropHighlight:h,showInvalidDropCursor:x}=Fo(e),S=Fe(e.id),C=v=>{j(v),w(v)},y=v=>{ee(v)&&(v.shiftKey?l(n,S):v.metaKey||v.ctrlKey?a(S):o(e))},R=v=>{ee(v)&&(v.key==="Enter"?(v.preventDefault(),o(e)):v.key===" "&&(v.preventDefault(),a(S)))},E=v=>{v.stopPropagation(),v.shiftKey?l(n,S):a(S)};return t.jsxs(Nl,{ref:C,...f,...m,$isDragging:b,$isMovePending:r,$isValidDropTarget:h,$isInvalidDropTarget:x,$isSelected:i(S),onClick:y,onKeyDown:R,onPointerDown:v=>{ee(v)&&m?.onPointerDown?.(v)},role:"listitem",tabIndex:0,"data-native-context-menu":!0,onContextMenu:v=>{ee(v)&&p?.(v,S,{kind:"folder",folder:e,dragData:g})},children:[u&&t.jsx($,{onKeyDown:v=>v.stopPropagation(),children:t.jsx(Oe,{checked:i(S),onClick:E,"aria-label":s({id:c("list.table.row.select"),defaultMessage:"Select {name}"},{name:e.name})})}),t.jsx(Bl,{children:t.jsx(Ce,{width:20,height:20})}),t.jsx(Ul,{textColor:"neutral800",children:e.name}),t.jsx($,{onClick:Be,onKeyDown:Be,onPointerDown:Be,children:t.jsx(Lo,{folder:e,dragData:g})})]})},ts=M(W)`
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
`,Kl=M.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Gl=M($)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${({theme:e})=>e.colors.neutral500};
  background: ${({theme:e})=>e.colors.neutral100};
`,Vl=({asset:e})=>{const{alternativeText:n,ext:s,formats:o,mime:r,url:i,updatedAt:a,isLocal:l,isUrlSigned:u}=e;if(r?.includes(Ye.Image)){const g=a&&!u?new Date(a).getTime():void 0,f=b=>g===void 0?b:b.includes("?")?`${b}&v=${g}`:`${b}?v=${g}`,m=be(o?.thumbnail?.url)??be(i),j=m&&f(m);if(j)return t.jsx(ts,{children:t.jsx(Kl,{src:j,alt:n||"",crossOrigin:!l&&u?"anonymous":void 0,draggable:!1,onDragStart:b=>b.preventDefault()})})}const p=Je(r,s);return t.jsx(ts,{children:t.jsx(Gl,{justifyContent:"center",alignItems:"center",children:t.jsx(p,{width:48,height:48})})})},Wl=M(wr)`
  position: relative;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
`,Hl=M($)`
  min-width: 0;
  width: 100%;
`,ql=M($)`
  color: ${({theme:e})=>e.colors.neutral600};
  flex-shrink: 0;
`,Yl=M(nt)`
  flex: 1;
  min-width: 0;
`,Ql=M.button`
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
`,Xl=({asset:e,orderedItemKeys:n,onAssetItemClick:s})=>{const{formatMessage:o}=A(),r=Je(e.mime,e.ext),{isMovePending:i}=me()??{isMovePending:!1},{attributes:a,listeners:l,setNodeRef:u,isDragging:p,dragData:g}=To(e),{isSelected:f,toggle:m,selectRange:j}=he(),{canUpdate:b}=ue(),w=kn()?.getBusyMessage(e.id)??null,h=At(),x=Te(e.id),S=f(x),C=v=>{ee(v)&&(v.shiftKey?j(n,x):v.metaKey||v.ctrlKey?m(x):s(e.id))},y=v=>{ee(v)&&(v.key==="Enter"?(v.preventDefault(),s(e.id)):v.key===" "&&(v.preventDefault(),m(x)))},R=v=>{v.stopPropagation(),s(e.id)},E=v=>{v.stopPropagation(),v.shiftKey?j(n,x):m(x)};return t.jsxs(Ol,{ref:u,...a,...l,...co,$isDragging:p,$isMovePending:i,$isBusy:w!==null,$isSelected:S,tabIndex:0,role:"listitem","data-native-context-menu":!0,onContextMenu:v=>{ee(v)&&h?.(v,x,{kind:"asset",asset:e,dragData:g})},onDragStart:v=>v.preventDefault(),onClick:C,onKeyDown:y,onPointerDown:v=>{ee(v)&&l?.onPointerDown?.(v)},children:[t.jsxs(Wl,{children:[b&&t.jsx(Ll,{...vt,onKeyDown:v=>v.stopPropagation(),children:t.jsx(Oe,{checked:S,onClick:E,"aria-label":o({id:c("list.table.row.select"),defaultMessage:"Select {name}"},{name:e.name})})}),t.jsx(Vl,{asset:e}),w!==null?t.jsx(fo,{zIndex:2,children:w}):null]}),t.jsx(yr,{children:t.jsxs(Hl,{alignItems:"center",gap:2,children:[t.jsx(ql,{children:t.jsx(r,{width:20,height:20})}),t.jsx(Ql,{type:"button",onClick:R,children:t.jsx(Yl,{textColor:"primary800",children:e.name})}),t.jsx($,{...vt,onClick:Be,onKeyDown:Be,onPointerDown:Be,children:t.jsx($o,{asset:e,dragData:g})})]})})]})},Zl=({assets:e,folders:n=Al,renderedKeys:s,onAssetItemClick:o})=>{const r=n.length+e.length,i=s??Rn({folders:n,assets:e});return r===0?null:t.jsxs(es,{role:"list","data-testid":"assets-grid",children:[n.length>0&&t.jsx(Pl,{children:t.jsx(es,{children:n.map(a=>t.jsx(zl,{folder:a,orderedItemKeys:i},`folder-${a.id}`))})}),e.map(a=>t.jsx($,{direction:"column",alignItems:"stretch",children:t.jsx(Xl,{asset:a,orderedItemKeys:i,onAssetItemClick:o})},a.id))]})},No=()=>{const[{query:e},n]=Ae(),s=e?._q??"",o=d.useCallback(i=>{i?n({_q:Mn(i)},"push",!0):n({_q:""},"remove",!0)},[n]),r=d.useCallback(()=>o(""),[o]);return{searchQuery:s,isSearching:s!=="",setSearchQuery:o,clearSearch:r}},Jl=300,ed=M(Mr)`
  > div {
    border: none;
  }
`,td=()=>{const{formatMessage:e}=A(),{searchQuery:n,setSearchQuery:s}=No(),{trackUsage:o}=Me(),r=As(),[i,a]=d.useState(n),l=vr(i,Jl),u=d.useRef(n),[{query:p}]=Ae(),g=p?.folder??"",f=d.useRef(g);d.useEffect(()=>{l!==u.current&&(u.current=l,l&&o("didSearchMediaLibraryElements",{location:ae}),s(l))},[l,s,o]),d.useEffect(()=>{n!==u.current&&(u.current=n,a(n))},[n]),d.useEffect(()=>{g!==f.current&&(f.current=g,u.current=n,a(n))},[g,n]);const m=t.jsx(ed,{onSubmit:j=>j.preventDefault(),children:t.jsx(Cr,{name:"search-assets",value:i,onChange:j=>a(j.target.value),onClear:()=>a(""),clearLabel:e({id:"clearLabel",defaultMessage:"Clear"}),placeholder:e({id:c("header.search.placeholder"),defaultMessage:"Search"}),size:"S",children:e({id:c("search.label"),defaultMessage:"Search for an asset"})})});return r?t.jsx(W,{width:"100%",children:m}):m},nd=[],sd=M(Dr)`
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
`,od=M($r)`
  background: ${({theme:e})=>e.colors.neutral100};

  tr {
    border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
  }
`,Bo=je`
  width: 1%;
  white-space: nowrap;
`,Uo=je`
  width: 100%;
  max-width: 0;
  overflow: hidden;
`,cn=M(kr)`
  height: 40px;
  padding: 0 ${({theme:e})=>e.spaces[4]};
  text-align: left;

  ${({$flex:e})=>e?Uo:Bo}
`,Ve=M(Rr)`
  padding: 0 ${({theme:e})=>e.spaces[4]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
`,zo=M(Ve)`
  ${Uo}
`,Ue=M(Ve)`
  ${Bo}
`,Ko=M.tr`
  height: 48px;
  user-select: none;
  background: ${({theme:e,$isSelected:n})=>n?e.colors.primary100:e.colors.neutral0};
  cursor: ${({$isMovePending:e,$isBusy:n,$isInvalidDropTarget:s})=>e||n?"wait":s?"not-allowed":"pointer"};
  opacity: ${({$isDragging:e,$isBusy:n})=>e||n?.4:1};
  pointer-events: ${({$isMovePending:e,$isBusy:n})=>e||n?"none":"auto"};

  ${({$isValidDropTarget:e,theme:n})=>e&&je`
      background: ${n.colors.primary100};
      outline: 1px dashed ${n.colors.primary600};
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
    ${Ve} {
      border-bottom: 0;
    }
  }
`,Go=M(Ve)`
  width: 5.6rem;
  white-space: nowrap;
`,rd=M(cn)`
  width: 5.6rem;
  white-space: nowrap;
`,ad=M(Mt)`
  flex-shrink: 0;
  width: 1.6rem;
  height: 1.6rem;

  path {
    fill: ${({theme:e})=>e.colors.warning500};
  }
`,id=M.button`
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
`,fe=e=>{ee(e)&&e.stopPropagation()},ld=({asset:e})=>{const{ext:n,mime:s}=e,o=Je(s,n);return t.jsx($,{justifyContent:"center",alignItems:"center",borderRadius:"4px",color:"neutral500",width:"3.2rem",height:"3.2rem",shrink:0,children:t.jsx(o,{width:20,height:20})})},ns=({asset:e,orderedItemKeys:n,onAssetItemClick:s})=>{const o=wn(),{formatDate:r,formatMessage:i}=A(),{isMovePending:a}=me()??{isMovePending:!1},{attributes:l,listeners:u,setNodeRef:p,isDragging:g,dragData:f}=To(e),{isSelected:m,toggle:j,selectRange:b}=he(),{canUpdate:w}=ue(),h=kn()?.getBusyMessage(e.id)??null,x=At(),S=Te(e.id),C=m(S),y=!e.caption||!e.alternativeText,R=i({id:c("list.table.row.metadata-missing"),defaultMessage:"This asset is missing metadata (caption or alternative text)."}),E=T=>{ee(T)&&(T.shiftKey?b(n,S):T.metaKey||T.ctrlKey?j(S):s(e.id))},v=T=>{ee(T)&&(T.key==="Enter"?(T.preventDefault(),s(e.id)):T.key===" "&&(T.preventDefault(),j(S)))},I=T=>{T.stopPropagation(),s(e.id)},G=T=>{T.stopPropagation(),T.shiftKey?b(n,S):j(S)};return t.jsxs(Ko,{ref:p,...l,...u,...co,$isDragging:g,$isMovePending:a,$isBusy:h!==null,$isSelected:C,tabIndex:0,role:"row","data-native-context-menu":!0,onContextMenu:T=>{ee(T)&&x?.(T,S,{kind:"asset",asset:e,dragData:f})},onDragStart:T=>T.preventDefault(),onClick:E,onKeyDown:v,onPointerDown:T=>{ee(T)&&u?.onPointerDown?.(T)},children:[w&&t.jsx(Go,{...vt,onClick:fe,onKeyDown:fe,children:t.jsx($,{children:t.jsx(Oe,{checked:C,onClick:G,"aria-label":i({id:c("list.table.row.select"),defaultMessage:"Select {name}"},{name:e.name})})})}),t.jsx(zo,{children:t.jsxs($,{alignItems:"center",justifyContent:"space-between",gap:2,minWidth:0,children:[t.jsxs($,{gap:3,alignItems:"center",minWidth:0,children:[h!==null?t.jsx($,{justifyContent:"center",width:"3.2rem",height:"3.2rem",children:t.jsx(Re,{small:!0,children:h})}):t.jsx(ld,{asset:e}),t.jsxs($,{direction:"column",alignItems:"flex-start",minWidth:0,children:[t.jsx(id,{type:"button",onClick:I,children:t.jsx(nt,{textColor:"neutral800",fontWeight:"semiBold",children:e.name})}),!o&&t.jsx(P,{textColor:"neutral600",variant:"pi",children:e.size?rn(e.size,1):"-"})]})]}),y&&t.jsx(bn,{label:R,children:t.jsx(ad,{"aria-label":R,role:"img"})})]})}),o&&t.jsxs(t.Fragment,{children:[t.jsx(Ue,{children:t.jsx(P,{textColor:"neutral600",children:e.createdAt?r(new Date(e.createdAt),{dateStyle:"long"}):"-"})}),t.jsx(Ue,{children:t.jsx(P,{textColor:"neutral600",children:e.updatedAt?r(new Date(e.updatedAt),{dateStyle:"long"}):"-"})}),t.jsx(Ue,{children:t.jsx(P,{textColor:"neutral600",children:e.size?rn(e.size,1):"-"})})]}),t.jsx(Ve,{...vt,onClick:fe,onKeyDown:fe,onPointerDown:fe,children:t.jsx($,{justifyContent:"flex-end",children:t.jsx($o,{asset:e,dragData:f})})})]})},dd=M(Ko)`
  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
  }
`,ss=({folder:e,orderedItemKeys:n})=>{const s=wn(),{formatDate:o,formatMessage:r}=A(),{navigateToFolder:i}=Ge(),{isSelected:a,toggle:l,selectRange:u}=he(),{canUpdate:p}=ue(),g=At(),{isMovePending:f}=me()??{isMovePending:!1},{dragData:m,draggable:{attributes:j,listeners:b,setNodeRef:w,isDragging:h},droppable:{setNodeRef:x},showValidDropHighlight:S,showInvalidDropCursor:C}=Fo(e),y=Fe(e.id),R=I=>{ee(I)&&(I.shiftKey?u(n,y):I.metaKey||I.ctrlKey?l(y):i(e))},E=I=>{ee(I)&&(I.key==="Enter"?(I.preventDefault(),i(e)):I.key===" "&&(I.preventDefault(),l(y)))},v=I=>{I.stopPropagation(),I.shiftKey?u(n,y):l(y)};return t.jsxs(dd,{ref:I=>{w(I),x(I)},...j,...b,$isDragging:h,$isMovePending:f,$isValidDropTarget:S,$isInvalidDropTarget:C,$isSelected:a(y),tabIndex:0,role:"row","data-native-context-menu":!0,onContextMenu:I=>{ee(I)&&g?.(I,y,{kind:"folder",folder:e,dragData:m})},onDragStart:I=>{ee(I)&&I.preventDefault()},onClick:R,onKeyDown:E,onPointerDown:I=>{ee(I)&&b?.onPointerDown?.(I)},children:[p&&t.jsx(Go,{onClick:fe,onKeyDown:fe,children:t.jsx($,{children:t.jsx(Oe,{checked:a(y),onClick:v,"aria-label":r({id:c("list.table.row.select"),defaultMessage:"Select {name}"},{name:e.name})})})}),t.jsx(zo,{children:t.jsxs($,{gap:3,alignItems:"center",minWidth:0,children:[t.jsx($,{justifyContent:"center",alignItems:"center",borderRadius:"4px",color:"neutral600",width:"3.2rem",height:"3.2rem",shrink:0,children:t.jsx(Ce,{width:20,height:20})}),t.jsx(nt,{textColor:"neutral800",fontWeight:"semiBold",children:e.name})]})}),s&&t.jsxs(t.Fragment,{children:[t.jsx(Ue,{children:t.jsx(P,{textColor:"neutral600",children:e.createdAt?o(new Date(e.createdAt),{dateStyle:"long"}):"-"})}),t.jsx(Ue,{children:t.jsx(P,{textColor:"neutral600",children:e.updatedAt?o(new Date(e.updatedAt),{dateStyle:"long"}):"-"})}),t.jsx(Ue,{children:t.jsx(P,{textColor:"neutral600",children:"-"})})]}),t.jsx(Ve,{onClick:fe,onKeyDown:fe,onPointerDown:fe,children:t.jsx($,{justifyContent:"flex-end",children:t.jsx(Lo,{folder:e,dragData:m})})})]})},cd=({assets:e,folders:n=nd,mixedItems:s=null,renderedKeys:o,onAssetItemClick:r})=>{const i=wn(),{formatMessage:a}=A(),{selectedKeys:l,selectAll:u,clear:p}=he(),{canUpdate:g}=ue(),{trackUsage:f}=Me(),m=i?Vn:Vn.filter(y=>y.name==="name"||y.name==="actions"),j=g,b=m.length+(j?1:0),w=n.length+e.length,h=o??Rn({folders:n,assets:e,mixedItems:s}),{allSelected:x,isIndeterminate:S}=tl(l,h),C=()=>{x?p():(f("didSelectAllMediaLibraryElements"),u(h))};return w===0?null:t.jsxs(sd,{colCount:b,rowCount:(s?s.length:w)+1,children:[t.jsx(od,{children:t.jsxs(Sr,{children:[j&&t.jsx(rd,{children:t.jsx($,{children:t.jsx(Oe,{checked:S?"indeterminate":x,disabled:h.length===0,onCheckedChange:C,"aria-label":a({id:c("list.table.header.select-all"),defaultMessage:"Select all"})})})}),m.map(y=>{const R=a(y.label);return"isVisuallyHidden"in y&&y.isVisuallyHidden?t.jsx(cn,{$flex:y.name==="name",children:t.jsx(Le,{children:a({id:c("table.header.actions"),defaultMessage:"actions"})})},y.name):t.jsx(cn,{$flex:y.name==="name",children:t.jsx(P,{textColor:"neutral600",variant:"sigma",children:R})},y.name)})]})}),t.jsxs(Ir,{children:[s?.map(y=>y.kind==="folder"?t.jsx(ss,{folder:y.folder,orderedItemKeys:h},`folder-${y.folder.id}`):t.jsx(ns,{asset:y.asset,orderedItemKeys:h,onAssetItemClick:r},y.asset.id)),!s&&n.map(y=>t.jsx(ss,{folder:y,orderedItemKeys:h},`folder-${y.id}`)),!s&&e.map(y=>t.jsx(ns,{asset:y,orderedItemKeys:h,onAssetItemClick:r},y.id))]})]})},ud=[],gd=[],pd=M($)`
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
  ${({$isStacked:e})=>e&&je`
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
`,fd=M($)`
  margin-left: auto;
  align-items: center;
  gap: ${({theme:e})=>e.spaces[2]};
`,hd=M(W)`
  width: 1px;
  align-self: stretch;
  background: ${({theme:e})=>e.colors.neutral150};
  margin-left: ${({theme:e})=>e.spaces[1]};
`,md=({assets:e=ud,locations:n=ro,renderedKeys:s=gd})=>{const{formatMessage:o}=A(),{toggleNotification:r}=ye(),i=St(),{canUpdate:a}=ue(),{selectedIds:l,selectedFolderIds:u,selectAll:p,clear:g}=he(),{trackUsage:f}=Me(),{currentFolderId:m}=Ge(),j=ai(),[b,{isLoading:w}]=Er(),[h,x]=d.useState(!1),[S,C]=d.useState(!1),[y,R]=d.useState(!1),E=l.size+u.size,[v,I]=d.useState(null),[G,T]=d.useState(0);d.useEffect(()=>{if(!v){T(0);return}const K=()=>{const J=v.getBoundingClientRect();T(J.height===0?0:Math.max(0,window.innerHeight-J.top))};K();const V=new ResizeObserver(K);return V.observe(v),window.addEventListener("resize",K),()=>{V.disconnect(),window.removeEventListener("resize",K)}},[v,j]);const B=()=>{f("didSelectAllMediaLibraryElements"),p(s)},D=y||w,k=d.useMemo(()=>Oo(l,u,n,m),[l,u,n,m]),F=l.size>Bn,Y=d.useMemo(()=>{const K=new Map(e.map(({id:V,mime:J})=>[V,J]));return[...l].filter(V=>Tr(K.get(V))).length},[e,l]),H=l.size>0&&Y===0;let Z;F?Z=o({id:c("list.bulk-actions.create-metadata.too-many"),defaultMessage:"Metadata can be generated for up to {max} assets at a time. Select fewer assets to continue."},{max:Bn}):H&&(Z=o({id:c("list.bulk-actions.create-metadata.no-eligible"),defaultMessage:"Metadata can only be generated for images. None of the selected assets are supported."}));const U=async()=>{if(w||F||H)return;const K=Array.from(l),V=await b({fileIds:K});if("error"in V){r({type:"danger",message:o({id:c("list.bulk-actions.create-metadata.error"),defaultMessage:"An error occurred while generating metadata."})});return}const J=V.data.filter(({status:oe})=>oe==="success").length,z=V.data.filter(({status:oe})=>oe==="skipped").length,_=V.data.filter(({status:oe})=>oe==="error").length,q=u.size;if(_===V.data.length){r({type:"danger",message:o({id:c("list.bulk-actions.create-metadata.error"),defaultMessage:"An error occurred while generating metadata."})});return}r(z===0&&_===0&&q===0?{type:"success",message:o({id:c("list.bulk-actions.create-metadata.success"),defaultMessage:"{count, plural, =1 {Metadata generated for # asset} other {Metadata generated for # assets}}"},{count:J})}:{type:"warning",message:o({id:c("list.bulk-actions.create-metadata.partial"),defaultMessage:"{successCount} generated, {skippedCount} skipped (unsupported file type), {errorCount} failed{folderCount, plural, =0 {} one {, # folder ignored} other {, # folders ignored}}"},{successCount:J,skippedCount:z,errorCount:_,folderCount:q})}),g()};return E===0||!a?null:t.jsxs(t.Fragment,{children:[t.jsx(W,{"aria-hidden":!0,height:`${G}px`,"data-bar-spacer":!0}),t.jsxs(pd,{ref:I,$isDrawerOpen:j,$isStacked:i,tag:"section",role:"region","data-native-context-menu":!0,"aria-label":o({id:c("list.bulk-actions.label"),defaultMessage:"Bulk actions"}),children:[t.jsx(P,{"data-bar-slot":"count",fontWeight:"bold",textColor:"neutral800",marginRight:4,children:o({id:c("list.bulk-actions.selected-count"),defaultMessage:"{count, plural, =1 {# item selected} other {# items selected}}"},{count:E})}),t.jsx(Fr,{onClick:B,marginRight:4,disabled:D,children:o({id:c("list.bulk-actions.select-all"),defaultMessage:"Select all"})}),t.jsxs(fd,{"data-bar-slot":"actions",children:[i&&t.jsx(bn,{label:Z,children:t.jsx(W,{children:t.jsx(te,{size:"S",startIcon:t.jsx(Ar,{}),disabled:D||l.size===0||F||H,loading:w,onClick:U,children:o({id:c("list.bulk-actions.create-metadata"),defaultMessage:"Create metadata"})})})}),t.jsx(re,{variant:"tertiary",disabled:D,label:o({id:c("list.bulk-actions.move"),defaultMessage:"Move"}),onClick:()=>C(!0),children:t.jsx(It,{})}),t.jsx(Et,{open:S,onClose:()=>C(!1),items:k,onSuccess:g}),t.jsx(re,{variant:"danger-light",disabled:D,label:o({id:c("list.bulk-actions.delete"),defaultMessage:"Delete"}),onClick:()=>x(!0),children:t.jsx(et,{})}),t.jsx(Tt,{open:h,onClose:()=>x(!1),target:{fileIds:Array.from(l),folderIds:Array.from(u)},onSuccess:g,onPendingChange:R})]}),t.jsx(hd,{"data-bar-slot":"divider","aria-hidden":!0}),t.jsx(re,{variant:"ghost",label:o({id:c("list.bulk-actions.clear"),defaultMessage:"Clear selection"}),onClick:g,disabled:D,children:t.jsx(Dt,{})})]})]})},Vo=d.createContext(null),xd=M(W)`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
`,bd=({children:e,onDrop:n,disabled:s=!1})=>{const[o,r]=d.useState(!1),i=d.useRef(0),a=d.useMemo(()=>({isDragging:o}),[o]);d.useEffect(()=>{const f=()=>{r(!1),i.current=0},m=j=>{j.relatedTarget||(r(!1),i.current=0)};return document.addEventListener("dragend",f),document.addEventListener("dragleave",m),()=>{document.removeEventListener("dragend",f),document.removeEventListener("dragleave",m)}},[]);const l=d.useCallback(f=>{f.preventDefault(),f.stopPropagation(),!s&&f.dataTransfer.types.includes("Files")&&(i.current+=1,r(!0))},[s]),u=d.useCallback(f=>{f.preventDefault(),f.stopPropagation(),i.current-=1,i.current<=0&&(r(!1),i.current=0)},[]),p=d.useCallback(f=>{f.preventDefault(),f.stopPropagation(),f.dataTransfer.dropEffect="copy"},[]),g=d.useCallback(f=>{if(f.preventDefault(),f.stopPropagation(),r(!1),i.current=0,s)return;const{files:m}=f.dataTransfer;m?.length&&n&&n(Array.from(m))},[n,s]);return t.jsx(Vo.Provider,{value:a,children:t.jsx(xd,{"data-testid":"assets-dropzone",onDragEnter:l,onDragLeave:u,onDragOver:p,onDrop:g,children:e})})},Wo=()=>{const e=d.useContext(Vo);if(!e)throw new Error("useUploadDropZone must be used within UploadDropZone");return{isDragging:e.isDragging}},yd=(e,n)=>`${e}${Math.floor(n*255).toString(16).padStart(2,"0")}`,jd=M(W)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({theme:e})=>yd(e.colors.primary200,.3)};
  border: 1px solid ${({theme:e})=>e.colors.primary700};
  border-radius: ${({theme:e})=>e.borderRadius};
  z-index: 1;
  pointer-events: none;
`,wd=({children:e})=>{const{isDragging:n}=Wo(),o=me()?.isInternalDragActive??!1,r=n&&!o;return t.jsxs(W,{position:"relative",children:[r&&t.jsx(jd,{}),e]})},vd=M(W)`
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
`,Cd=({uploadDropZoneRef:e,folderName:n})=>{const{formatMessage:s}=A(),{isDragging:o}=Wo(),i=me()?.isInternalDragActive??!1,a=o&&!i,[l,u]=d.useState(0);return d.useEffect(()=>{if(!e?.current)return;const p=()=>{const f=e.current?.getBoundingClientRect();f&&u(m=>m!==f.left?f.left:m)};p();const g=new ResizeObserver(p);return g.observe(e.current),()=>g.disconnect()},[e]),a?t.jsxs(vd,{$leftContentWidth:l,children:[t.jsx(P,{textColor:"neutral0",children:s({id:c("dropzone.upload.message"),defaultMessage:"Drop here to upload to"})}),t.jsxs($,{gap:2,alignItems:"center",children:[t.jsx(Ce,{width:20,height:20,fill:"neutral0"}),t.jsx(P,{textColor:"neutral0",fontWeight:"semiBold",children:n})]})]}):null},Md=({onAddAssets:e,canAddAssets:n,searchQuery:s,onClearSearch:o})=>{const{formatMessage:r}=A(),i=!!s;return t.jsxs($,{direction:"column",alignItems:"center",gap:6,padding:11,children:[t.jsx(Ls,{width:"16rem",height:"8.8rem"}),t.jsxs($,{direction:"column",alignItems:"center",gap:2,textAlign:"center",children:[t.jsx(P,{variant:"delta",tag:"p",fontWeight:"bold",textColor:"neutral800",children:r(i?{id:c("list.search.empty.title"),defaultMessage:"No results found"}:{id:c("list.empty.title"),defaultMessage:"No assets yet"})}),t.jsx(P,{textColor:"neutral600",children:i?r({id:c("list.search.empty.description"),defaultMessage:'No assets or folders match "{query}". Try a different search.'},{query:s}):r({id:c("list.empty.description"),defaultMessage:"Get started by uploading assets or creating a folder."})})]}),i?t.jsx(te,{variant:"secondary",startIcon:t.jsx(Dt,{"aria-hidden":!0}),onClick:o,children:r({id:c("list.search.empty.clear"),defaultMessage:"Clear search"})}):n&&t.jsx(te,{onClick:e,children:r({id:c("list.empty.add-assets"),defaultMessage:"Add assets"})})]})},Sd=({onClearFilters:e})=>{const{formatMessage:n}=A();return t.jsxs($,{direction:"column",alignItems:"center",gap:6,padding:11,children:[t.jsx(Ls,{width:"16rem",height:"8.8rem"}),t.jsx(P,{textColor:"neutral600",children:n({id:c("list.filters.empty"),defaultMessage:"No items matched current filters"})}),t.jsx(te,{variant:"secondary",startIcon:t.jsx(Dt,{"aria-hidden":!0}),onClick:e,children:n({id:c("list.filters.clear"),defaultMessage:"Clear filters"})})]})},Fn=["folder","picture","audio","video","document"],An=["1day","3days","1week","1month","3months","6months","1year"],Id={created:"createdAt",updated:"updatedAt"},Dd={createdAt:"created",updatedAt:"updated"},os={exact:"isExactly",within:"withinLast",notwithin:"notWithinLast"},$d={isExactly:"exact",withinLast:"within",notWithinLast:"notwithin"},rs={rangeis:"is",rangenot:"isNot"},kd={is:"rangeis",isNot:"rangenot"},as=/^\d{4}-\d{2}-\d{2}$/,Rd=e=>Fn.includes(e),Ed=e=>An.includes(e),Td=e=>{const[n,s,o]=e.split(":");if(!n||!s||!o)return null;if(n==="type"){if(s!=="is"&&s!=="not")return null;const i=o.split(",").filter(Rd);return i.length>0?{kind:"type",condition:s==="is"?"is":"isNot",values:i}:null}const r=Id[n];if(!r)return null;if(s in os)return Ed(o)?{kind:"date",field:r,mode:"preset",condition:os[s],preset:o}:null;if(s in rs){const[i,a]=o.split("..");return as.test(i??"")&&as.test(a??"")?{kind:"date",field:r,mode:"range",condition:rs[s],from:i,to:a}:null}return null},Fd=e=>typeof e!="string"||e===""?[]:e.split(";").map(Td).filter(n=>n!==null),Ad=e=>{if(e.kind==="type")return`type:${e.condition==="is"?"is":"not"}:${e.values.join(",")}`;const n=Dd[e.field];return e.mode==="preset"?`${n}:${$d[e.condition]}:${e.preset}`:`${n}:${kd[e.condition]}:${e.from}..${e.to}`},is=e=>e.map(Ad).join(";"),Ld=()=>{const[{query:e},n]=Ae(),s=Fd(e?.filters),o=r=>{r.length===0?n(xe(e,{filters:void 0}),"push",!0):n(xe(e,{filters:is(r)}),"push",!0)};return{filters:s,serialized:is(s),addFilter:r=>o([...s,r]),updateFilter:(r,i)=>o(s.map((a,l)=>l===r?i:a)),removeFilter:r=>o(s.filter((i,a)=>a!==r)),clearFilters:()=>o([])}},un={picture:"image",audio:"audio",video:"video"},ls=Object.values(un),Od={"1day":{days:1},"3days":{days:3},"1week":{days:7},"1month":{months:1},"3months":{months:3},"6months":{months:6},"1year":{years:1}},Pd=(e,n)=>{const{days:s=0,months:o=0,years:r=0}=Od[n],i=new Date(e.getTime());if(r||o){const a=i.getDate();i.setDate(1),i.setFullYear(i.getFullYear()-r),i.setMonth(i.getMonth()-o);const l=new Date(i.getFullYear(),i.getMonth()+1,0).getDate();i.setDate(Math.min(a,l))}return i.setDate(i.getDate()-s),i},ds=e=>{const n=new Date(e.getTime());return n.setHours(0,0,0,0),n},cs=e=>{const n=new Date(e.getTime());return n.setHours(23,59,59,999),n},Ct=e=>{const[n,s,o]=e.split("-").map(Number);return new Date(n,s-1,o)},_d=(e,n)=>{const{field:s}=e;if(e.mode==="preset"){const i=Pd(n,e.preset);switch(e.condition){case"withinLast":return{[s]:{$gte:i.toISOString()}};case"notWithinLast":return{[s]:{$lt:i.toISOString()}};case"isExactly":return{[s]:{$gte:ds(i).toISOString(),$lte:cs(i).toISOString()}}}}const o=ds(Ct(e.from)).toISOString(),r=cs(Ct(e.to)).toISOString();return e.condition==="is"?{[s]:{$gte:o,$lte:r}}:{$or:[{[s]:{$lt:o}},{[s]:{$gt:r}}]}},Nd=e=>{const n=e.values.filter(r=>r!=="folder");if(n.length===0)return null;const s=n.map(r=>r==="document"?{$and:ls.map(i=>({mime:{$notContains:i}}))}:{mime:{$contains:un[r]}});if(e.condition==="is")return s.length===1?s[0]:{$or:s};const o=n.map(r=>r==="document"?{$or:ls.map(i=>({mime:{$contains:i}}))}:{mime:{$notContains:un[r]}});return o.length===1?o[0]:{$and:o}},Bd=(e,n)=>{const s=[],o=[];let r=!0,i=!0;for(const a of e){if(a.kind==="date"){const p=_d(a,n);s.push(p),o.push(p);continue}const l=a.values.includes("folder");(a.condition==="is"?!l:l)&&(r=!1);const u=Nd(a);u?s.push(u):a.condition==="is"&&(i=!1)}return{fileClauses:s,folderClauses:o,showFolders:r,showFiles:i}},Ud=M.button`
  width: 3rem;
  height: 3rem;
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius};
  cursor: pointer;
  font: inherit;
  color: ${({theme:e,$isEdge:n,$isMuted:s})=>n?e.colors.primary600:s?e.colors.neutral400:e.colors.neutral800};
  background: ${({theme:e,$inRange:n,$isEdge:s})=>s?e.colors.primary200:n?e.colors.primary100:"transparent"};

  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary600};
    outline-offset: -2px;
  }
`,Yt=e=>{const n=`${e.getMonth()+1}`.padStart(2,"0"),s=`${e.getDate()}`.padStart(2,"0");return`${e.getFullYear()}-${n}-${s}`},zd=e=>{const[n,s,o]=e.split("-").map(Number);return new Date(n,s-1,o)},Kd=(e,n)=>{const s=new Date(e,n,1),o=new Date(s.getTime());o.setDate(s.getDate()-(s.getDay()+6)%7);const r=[],i=new Date(o.getTime());do{const a=[];for(let l=0;l<7;l+=1)a.push(new Date(i.getTime())),i.setDate(i.getDate()+1);r.push(a)}while(i.getMonth()===n&&i.getFullYear()===e);return r},gn=({from:e,to:n,onSelect:s})=>{const{formatMessage:o,formatDate:r}=A(),i=e?zd(e):new Date,[a,l]=d.useState(i.getFullYear()),[u,p]=d.useState(i.getMonth()),[g,f]=d.useState(null),m=g??e??null,j=g?null:n??null,b=S=>{const C=new Date(a,u+S,1);l(C.getFullYear()),p(C.getMonth())},w=S=>{const C=Yt(S);if(!g){f(C);return}const[y,R]=C<g?[C,g]:[g,C];f(null),s(y,R)},h=Kd(a,u),x=h[0].map(S=>({key:S.getDay(),label:r(S,{weekday:"short"}).slice(0,2)}));return t.jsxs(W,{padding:2,width:"100%",role:"group","aria-label":o({id:c("list.filters.calendar.label"),defaultMessage:"Select date range"}),"data-testid":"date-range-calendar",children:[t.jsxs($,{justifyContent:"space-between",alignItems:"center",paddingBottom:2,children:[t.jsx(re,{variant:"ghost",label:o({id:c("list.filters.calendar.previous-month"),defaultMessage:"Previous month"}),onClick:()=>b(-1),children:t.jsx(Lr,{})}),t.jsx(P,{fontWeight:"semiBold",textColor:"neutral800",children:r(new Date(a,u,1),{month:"long",year:"numeric"})}),t.jsx(re,{variant:"ghost",label:o({id:c("list.filters.calendar.next-month"),defaultMessage:"Next month"}),onClick:()=>b(1),children:t.jsx(Or,{})})]}),t.jsx($,{children:x.map(({key:S,label:C})=>t.jsx($,{width:"3rem",height:"2.4rem",justifyContent:"center",children:t.jsx(P,{variant:"pi",fontWeight:"semiBold",textColor:"neutral600",children:C})},S))}),h.map(S=>t.jsx($,{children:S.map(C=>{const y=Yt(C),R=y===m||y===j,E=m!==null&&j!==null&&y>m&&y<j;return t.jsxs(Ud,{type:"button",$isEdge:R,$inRange:E,$isMuted:C.getMonth()!==u,onClick:()=>w(C),children:[t.jsx(Le,{children:r(C,{dateStyle:"long"})}),t.jsx("span",{"aria-hidden":!0,children:C.getDate()})]},y)})},Yt(S[0])))]})},pn={folder:{id:c("list.filters.type.folder"),defaultMessage:"Folder"},picture:{id:c("list.filters.type.picture"),defaultMessage:"Picture"},audio:{id:c("list.filters.type.audio"),defaultMessage:"Audio"},video:{id:c("list.filters.type.video"),defaultMessage:"Video"},document:{id:c("list.filters.type.document"),defaultMessage:"Document"}},fn={"1day":{id:c("list.filters.preset.1day"),defaultMessage:"1 day ago"},"3days":{id:c("list.filters.preset.3days"),defaultMessage:"3 days ago"},"1week":{id:c("list.filters.preset.1week"),defaultMessage:"1 week ago"},"1month":{id:c("list.filters.preset.1month"),defaultMessage:"1 month ago"},"3months":{id:c("list.filters.preset.3months"),defaultMessage:"3 months ago"},"6months":{id:c("list.filters.preset.6months"),defaultMessage:"6 months ago"},"1year":{id:c("list.filters.preset.1year"),defaultMessage:"1 year ago"}},hn={createdAt:{id:c("list.filters.field.created"),defaultMessage:"Creation date"},updatedAt:{id:c("list.filters.field.updated"),defaultMessage:"Last modified"}},Qt=M(O.SubTrigger)`
  width: 100%;
  justify-content: space-between;
`,Ne="24.2rem",Xt="70dvh",Gd=`min(${Ne}, calc(100dvw - 2rem))`,Zt=M(O.Item)`
  width: 100%;
`,us=M(W)`
  width: 100%;

  > * {
    width: 100%;
  }

  /* menuitem, menuitemradio and menuitemcheckbox — every option row, plus the
     "Select date range" toggle, which sits at the same level. */
  > [role^='menuitem'] {
    padding-left: ${({theme:e})=>e.spaces[6]};
  }
`,Jt=M($t)`
  transition: transform 0.2s ease;
  transform: rotate(${({$open:e})=>e?"180deg":"0deg"});
`,en=M(O.SubContent)`
  margin-top: calc(-1 * (${({theme:e})=>e.spaces[1]} + 1px));
`,Vd=M(_r)`
  height: 1.6rem;
  min-width: auto;
  padding: 0 0.4rem;
`,Wd=({listFilters:e})=>{const{formatMessage:n}=A(),{trackUsage:s}=Me(),[o,r]=d.useState(!1),{filters:i,addFilter:a,updateFilter:l,removeFilter:u}=e,p=D=>s("didFilterMediaLibraryElements",{location:ae,filter:D});let g=-1;for(let D=i.length-1;D>=0;D-=1)if(i[D].kind==="type"){g=D;break}const f=g>=0?i[g]:null,m=f&&f.kind==="type"?f.values:[],j=D=>{const k=!m.includes(D),F=k?[...m,D]:m.filter(Y=>Y!==D);k&&p("type"),f&&f.kind==="type"?F.length===0?u(g):l(g,{...f,values:F}):F.length>0&&a({kind:"type",condition:"is",values:F})},b=(D,k)=>{p(D);for(let F=i.length-1;F>=0;F-=1){const Y=i[F];if(Y.kind==="date"&&Y.mode==="preset"&&Y.field===D){l(F,{...Y,preset:k});return}}a({kind:"date",field:D,mode:"preset",condition:"withinLast",preset:k})},w=(D,k)=>{p("createdAt"),a({kind:"date",field:"createdAt",mode:"range",condition:"is",from:D,to:k}),r(!1)},h=As(),[x,S]=d.useState(null),[C,y]=d.useState(!1),R=D=>{r(D),D||(S(null),y(!1))},E=D=>{S(k=>k===D?null:D),y(!1)},v=Fn.map(D=>t.jsx(O.Item,{role:"menuitemcheckbox","aria-checked":m.includes(D),onSelect:k=>{k.preventDefault(),j(D)},startIcon:t.jsx(Oe,{checked:m.includes(D),tabIndex:-1,"aria-hidden":!0}),children:n(pn[D])},D)),I=D=>{for(let k=i.length-1;k>=0;k-=1){const F=i[k];if(F.kind==="date"&&F.mode==="preset"&&F.field===D)return F.preset}return null},G=D=>{const k=I(D);return An.map(F=>t.jsx(O.Item,{role:"menuitemradio","aria-checked":k===F,onSelect:()=>{b(D,F)},endIcon:k===F?t.jsx(kt,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem",fill:"primary600"}):null,children:n(fn[F])},F))},T=n({id:c("list.filters.field.type"),defaultMessage:"Type"}),B=n({id:c("list.filters.select-date-range"),defaultMessage:"Select date range"});return t.jsxs(O.Root,{open:o,onOpenChange:R,children:[t.jsx(O.Trigger,{variant:"tertiary",startIcon:t.jsx(Pr,{"aria-hidden":!0}),endIcon:null,children:t.jsxs($,{gap:2,alignItems:"center",tag:"span",children:[n({id:c("list.filters.trigger"),defaultMessage:"Filter"}),i.length>0&&t.jsx(Vd,{children:i.length})]})}),t.jsx(O.Content,{popoverPlacement:"bottom-start",zIndex:2,maxHeight:Xt,width:h?Gd:Ne,children:h?t.jsxs(t.Fragment,{children:[t.jsx(Zt,{"aria-expanded":x==="type",onSelect:D=>{D.preventDefault(),E("type")},endIcon:t.jsx(Jt,{$open:x==="type","aria-hidden":!0}),children:T}),x==="type"&&t.jsx(us,{children:v}),["createdAt","updatedAt"].map(D=>t.jsxs(W,{width:"100%",children:[t.jsx(Zt,{"aria-expanded":x===D,onSelect:k=>{k.preventDefault(),E(D)},endIcon:t.jsx(Jt,{$open:x===D,"aria-hidden":!0}),children:n(hn[D])}),x===D&&t.jsxs(us,{children:[G(D),D==="createdAt"&&t.jsxs(t.Fragment,{children:[t.jsx(Zt,{"aria-expanded":C,onSelect:k=>{k.preventDefault(),y(F=>!F)},endIcon:t.jsx(Jt,{$open:C,"aria-hidden":!0}),children:B}),C&&t.jsx(W,{paddingLeft:2,children:t.jsx(gn,{onSelect:w})})]})]})]},D))]}):t.jsxs(t.Fragment,{children:[t.jsxs(O.SubRoot,{children:[t.jsx(Qt,{children:T}),t.jsx(en,{zIndex:2,maxHeight:Xt,width:Ne,children:v})]}),["createdAt","updatedAt"].map(D=>t.jsxs(O.SubRoot,{children:[t.jsx(Qt,{children:n(hn[D])}),t.jsxs(en,{zIndex:2,maxHeight:Xt,width:Ne,children:[G(D),D==="createdAt"&&t.jsxs(O.SubRoot,{children:[t.jsx(Qt,{children:B}),t.jsx(en,{zIndex:2,maxHeight:"none",width:Ne,children:t.jsx(gn,{onSelect:w})})]})]})]},D))]})})]})},Hd=M($)`
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};
  overflow: hidden;
`,Ln=M.button`
  border: none;
  background: transparent;
  font: inherit;
  padding: ${({theme:e})=>`${e.spaces[2]} ${e.spaces[3]}`};
  cursor: ${({$interactive:e})=>e?"pointer":"default"};
  border-right: 1px solid ${({theme:e})=>e.colors.neutral200};

  ${({theme:e})=>e.breakpoints.medium} {
    padding: ${({theme:e})=>`${e.spaces[1]} ${e.spaces[2]}`};
  }
  ${({$interactive:e,theme:n})=>e&&`&:hover { background: ${n.colors.primary100}; }`}

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary600};
    outline-offset: -2px;
  }
`,qd=M.span`
  display: inline-flex;
  align-items: center;
  padding: ${({theme:e})=>`${e.spaces[1]} ${e.spaces[2]}`};
  border-right: 1px solid ${({theme:e})=>e.colors.neutral200};
`,On=M(Ee.Content)`
  width: ${Ne};
`,Ho=M.button`
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
`,Yd=M.button`
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
`,gs={is:{id:c("list.filters.condition.is"),defaultMessage:"is"},isNot:{id:c("list.filters.condition.is-not"),defaultMessage:"is not"}},ps={isExactly:{id:c("list.filters.condition.is-exactly"),defaultMessage:"is exactly"},withinLast:{id:c("list.filters.condition.within-last"),defaultMessage:"within the last"},notWithinLast:{id:c("list.filters.condition.not-within-last"),defaultMessage:"not within the last"}},fs={is:{id:c("list.filters.condition.is"),defaultMessage:"is"},isNot:{id:c("list.filters.condition.is-not"),defaultMessage:"is not"}},tn=({label:e,options:n,active:s,getOptionLabel:o,onPick:r})=>{const[i,a]=d.useState(!1);return t.jsxs(Ee.Root,{open:i,onOpenChange:a,children:[t.jsx(Ee.Trigger,{children:t.jsx(Ln,{type:"button",$interactive:!0,children:t.jsx(P,{variant:"pi",textColor:"neutral800",children:e})})}),t.jsx(On,{children:t.jsx($,{direction:"column",alignItems:"stretch",padding:1,children:n.map(l=>t.jsxs(Ho,{type:"button",onClick:()=>{r(l),a(!1)},children:[o(l),l===s&&t.jsx(kt,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem"})]},l))})})]})},Qd=({filter:e,onChange:n})=>{const{formatMessage:s}=A(),[o,r]=d.useState(!1),i=e.values.map(l=>s(pn[l])).join(", "),a=l=>{const u=e.values.includes(l)?e.values.filter(p=>p!==l):[...e.values,l];u.length>0&&n({...e,values:u})};return t.jsxs(Ee.Root,{open:o,onOpenChange:r,children:[t.jsx(Ee.Trigger,{children:t.jsx(Ln,{type:"button",$interactive:!0,children:t.jsx(P,{variant:"pi",textColor:"neutral800",children:i})})}),t.jsx(On,{children:t.jsx($,{direction:"column",alignItems:"flex-start",padding:3,gap:2,children:Fn.map(l=>t.jsx(Oe,{checked:e.values.includes(l),onCheckedChange:()=>a(l),children:s(pn[l])},l))})})]})},hs=({filter:e,onChange:n})=>{const{formatMessage:s,formatDate:o}=A(),[r,i]=d.useState(!1),a=e.mode==="preset"?s(fn[e.preset]):`${o(Ct(e.from),{day:"2-digit",month:"short"})} - ${o(Ct(e.to),{day:"2-digit",month:"short",year:"numeric"})}`;return t.jsxs(Ee.Root,{open:r,onOpenChange:i,children:[t.jsx(Ee.Trigger,{children:t.jsx(Ln,{type:"button",$interactive:!0,children:t.jsx(P,{variant:"pi",textColor:"neutral800",children:a})})}),t.jsx(On,{children:e.mode==="preset"?t.jsx($,{direction:"column",alignItems:"stretch",padding:1,children:An.map(l=>t.jsxs(Ho,{type:"button",onClick:()=>{n({...e,preset:l}),i(!1)},children:[s(fn[l]),l===e.preset&&t.jsx(kt,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem"})]},l))}):t.jsx(gn,{from:e.from,to:e.to,onSelect:(l,u)=>{n({...e,from:l,to:u}),i(!1)}})})]})},Xd=({filter:e,onChange:n,onRemove:s})=>{const{formatMessage:o}=A(),r=e.kind==="type"?o({id:c("list.filters.field.type"),defaultMessage:"Type"}):o(hn[e.field]);return t.jsxs(Hd,{alignItems:"stretch","data-testid":"filter-badge",children:[t.jsx(qd,{children:t.jsx(P,{variant:"pi",textColor:"neutral600",children:r})}),e.kind==="type"&&t.jsxs(t.Fragment,{children:[t.jsx(tn,{label:o(gs[e.condition]),options:["is","isNot"],active:e.condition,getOptionLabel:i=>o(gs[i]),onPick:i=>n({...e,condition:i})}),t.jsx(Qd,{filter:e,onChange:n})]}),e.kind==="date"&&e.mode==="preset"&&t.jsxs(t.Fragment,{children:[t.jsx(tn,{label:o(ps[e.condition]),options:["isExactly","withinLast","notWithinLast"],active:e.condition,getOptionLabel:i=>o(ps[i]),onPick:i=>n({...e,condition:i})}),t.jsx(hs,{filter:e,onChange:n})]}),e.kind==="date"&&e.mode==="range"&&t.jsxs(t.Fragment,{children:[t.jsx(tn,{label:o(fs[e.condition]),options:["is","isNot"],active:e.condition,getOptionLabel:i=>o(fs[i]),onPick:i=>n({...e,condition:i})}),t.jsx(hs,{filter:e,onChange:n})]}),t.jsx(Yd,{type:"button",onClick:s,"aria-label":o({id:c("list.filters.remove"),defaultMessage:"Remove {filter} filter"},{filter:r}),children:t.jsx(Dt,{width:"1.2rem",height:"1.2rem","aria-hidden":!0})})]})},Zd=M($)`
  padding-top: ${({theme:e,$compact:n})=>n?e.spaces[1]:e.spaces[6]};
  transition: padding-top 0.2s ease;
`,Jd=({listFilters:e,compact:n=!1})=>{const{filters:s,updateFilter:o,removeFilter:r}=e,i=d.useId(),a=d.useRef(0),l=d.useRef([]);for(;l.current.length<s.length;)l.current.push(`${i}-${a.current}`),a.current+=1;l.current.length=s.length;const u=s.map((p,g)=>({filter:p,index:g,key:l.current[g]}));return s.length===0?null:t.jsx(Zd,{$compact:n,gap:2,wrap:"wrap","data-testid":"filter-badges",children:u.map(({filter:p,index:g,key:f})=>t.jsx(Xd,{filter:p,onChange:m=>o(g,m),onRemove:()=>{l.current.splice(g,1),r(g)}},f))})},qo=e=>{const{isMovePending:n,isValidDropTarget:s}=me()??{isMovePending:!1,isValidDropTarget:()=>!1},{active:o}=_s(),r=e.id==null?ko:ml(e.id),i={kind:"folder-tree-target",id:e.id,name:e.name},a=Bs({id:r,data:i,disabled:n}),l=s(e.id),u=a.isOver;return{droppable:a,isOver:u,showValidDropHighlight:u&&l,showInvalidDropCursor:u&&!l&&o!=null}},ec=M.div`
  opacity: 0;

  li:hover > div > &,
  &:focus-within,
  &:has([data-state='open']) {
    opacity: 1;
  }

  // Square, matching the chevron at the other end of the row. Descendant rather
  // than child: Menu.Root renders no element today, but that is Radix's
  // business, not something to depend on.
  && button {
    width: 2.4rem;
    height: 2.4rem;
    min-width: 2.4rem;
    min-height: 2.4rem;
    padding: 0.4rem;
  }

  // The row paints its own hover, so the trigger needs a stronger one of its own
  // to read as a separate target sitting on top of it.
  && button:hover,
  && button[data-state='open'] {
    background: ${({theme:e})=>e.colors.primary200};
  }
`,tc=({folder:e,parentId:n,menuPosition:s,returnFocusTo:o,onCloseMenu:r})=>{const{formatMessage:i}=A();return t.jsx(Tn,{folder:e,dragData:{kind:"folder",id:e.id,name:e.name,parentId:n},showRename:!1,children:({items:a,dialogs:l})=>t.jsxs(t.Fragment,{children:[t.jsx(ec,{children:t.jsxs(O.Root,{modal:!1,children:[t.jsx(O.Trigger,{tag:re,icon:t.jsx(jn,{}),variant:"ghost",size:"S",onClick:u=>u.stopPropagation(),label:i({id:c("sidebar.tree.actions"),defaultMessage:"Actions for {name}"},{name:e.name})}),t.jsx(tt,{popoverPlacement:"bottom-end",zIndex:2,minWidth:"22rem",children:a})]})}),s!==null&&t.jsx(Ft,{position:s,open:!0,label:i({id:c("list.folder.context-menu.label"),defaultMessage:"Folder actions"}),returnFocusTo:o,onClose:r,children:a}),l]})})},nc=600,sc=({isOver:e,canExpand:n,onExpand:s})=>{d.useEffect(()=>{if(!e||!n)return;const o=setTimeout(s,nc);return()=>clearTimeout(o)},[e,n,s])},Yo=M.button`
  display: flex;
  align-items: center;
  // Matches the row's own gap, so Home — the one row whose icon sits inside
  // this button rather than beside it — puts its label on the same line as a
  // folder's.
  gap: ${({theme:e})=>e.spaces[1]};
  width: 100%;
  min-height: 3.2rem;
  // No padding of its own: the row owns the inset, so the label lines up with
  // the icon boxes instead of being pushed in by a second layer of spacing.
  padding: 0;
  border: 0;
  // The surface — hover, active, drop target — is painted by the row behind
  // this, so it spans the chevron and the actions menu too, not just the label.
  background: transparent;
  color: ${({$isActive:e,theme:n})=>e?n.colors.primary700:n.colors.neutral800};
  border-radius: ${({theme:e})=>e.borderRadius};
  cursor: ${({$isMovePending:e,$isInvalidDropCursor:n})=>e?"wait":n?"not-allowed":"pointer"};
  text-align: left;
  font: inherit;
  pointer-events: ${({$isMovePending:e})=>e?"none":"auto"};

  ${({$isValidDropTarget:e,theme:n})=>e&&je`
      outline: 1px dashed ${n.colors.primary600};
      outline-offset: -1px;
    `}

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary600};
    outline-offset: -2px;
  }
`,Qo=M($)`
  cursor: ${({$isMovePending:e,$isInvalidDropCursor:n})=>e?"wait":n?"not-allowed":"default"};
  pointer-events: ${({$isMovePending:e})=>e?"none":"auto"};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({$isActive:e,theme:n})=>e?n.colors.primary100:"transparent"};

  // The whole row lights up, so pointing anywhere along it — chevron, label or
  // the actions trigger — reads as one target.
  &:hover {
    background: ${({$isActive:e,theme:n})=>e?n.colors.primary100:n.colors.neutral100};
  }

  ${({$isValidDropTarget:e,theme:n})=>e&&je`
      background: ${n.colors.primary100};
      outline: 1px dashed ${n.colors.primary600};
      outline-offset: -1px;

      &:hover {
        background: ${n.colors.primary100};
      }
    `}
`,Xo=(e,n,s=[])=>{for(const o of e){if(o.id===n)return s;if(o.children?.length){const r=o.id!=null?[...s,o.id]:s,i=Xo(o.children,n,r);if(i!==null)return i}}return null},oc=(e,n)=>{const[s,o]=d.useState(()=>new Set);d.useEffect(()=>{if(n==null)return;const l=Xo(e,n);!l||l.length===0||o(u=>{const p=new Set(u);let g=!1;for(const f of l)p.has(f)||(p.add(f),g=!0);return g?p:u})},[e,n]);const r=d.useCallback(l=>{o(u=>{const p=new Set(u);return p.has(l)?p.delete(l):p.add(l),p})},[]),i=d.useCallback(l=>{o(u=>{if(u.has(l))return u;const p=new Set(u);return p.add(l),p})},[]);return{isExpanded:d.useCallback(l=>s.has(l),[s]),toggleExpanded:r,expandFolder:i}},Zo=M.ul`
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
`,rc=1.6,Jo=.8,er=.4,ms=M($)`
  width: 2.4rem;
  height: 2.4rem;
  min-width: 2.4rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
`,ac=M(re)`
  // Square, so it and the actions trigger read as one pair of controls.
  && {
    width: 2.4rem;
    height: 2.4rem;
    min-width: 2.4rem;
    min-height: 2.4rem;
    padding: 0.4rem;
  }

  // The row paints its own hover, so the control needs a stronger one of its own
  // to read as a separate target sitting on top of it.
  &&:hover:not([aria-disabled='true']) {
    background: ${({theme:e})=>e.colors.primary200};
  }

  &&[aria-disabled='true'] {
    background: transparent;
    border-color: transparent;
    opacity: 0.3;
  }
`,ic=M($t)`
  transform: rotate(${({$expanded:e})=>e?"0deg":"-90deg"});
  transition: transform 0.2s ease;
`,lc=({id:e,name:n,parentId:s,folderChildren:o,level:r,currentFolderId:i,showActiveFolder:a,isExpanded:l,onToggle:u,onExpand:p,onSelect:g,isMovePending:f})=>{const{formatMessage:m}=A(),j=o.length>0,b=l(e)&&j,w=a&&i===e,{droppable:{setNodeRef:h},isOver:x,showValidDropHighlight:S,showInvalidDropCursor:C}=qo({id:e,name:n}),y=d.useCallback(()=>p(e),[e,p]),[R,E]=d.useState(null),v=d.useRef(null);return sc({isOver:x,canExpand:j&&!b,onExpand:y}),t.jsxs("li",{children:[t.jsxs(Qo,{ref:h,"data-native-context-menu":!0,alignItems:"center",paddingLeft:`${r*rc+Jo}rem`,paddingRight:`${er}rem`,gap:1,$isActive:w,$isValidDropTarget:S,$isInvalidDropCursor:C,$isMovePending:f,onContextMenu:I=>{ee(I)&&(I.preventDefault(),E({x:I.clientX,y:I.clientY}))},children:[t.jsx(ac,{label:j?m({id:c(b?"sidebar.tree.collapse":"sidebar.tree.expand"),defaultMessage:b?"Collapse {name}":"Expand {name}"},{name:n}):m({id:c("sidebar.tree.no-subfolders"),defaultMessage:"The folder {name} has no subfolders"},{name:n}),disabled:!j,onClick:I=>{I.stopPropagation(),u(e)},variant:"ghost",withTooltip:!1,"aria-expanded":j?b:void 0,children:t.jsx(ic,{$expanded:b,fill:"neutral500"})}),t.jsx(W,{flex:"1",minWidth:0,children:t.jsx(Yo,{ref:v,type:"button",$isActive:w,$isValidDropTarget:S,$isInvalidDropCursor:C,$isMovePending:f,"aria-current":w?"page":void 0,onClick:()=>g(e),"data-testid":`folder-tree-node-${e}`,"data-folder-id":e,children:t.jsx(nt,{variant:"omega",fontWeight:w?"semiBold":"regular",children:n})})}),t.jsx(tc,{folder:{id:e,name:n},parentId:s,menuPosition:R,returnFocusTo:v.current,onCloseMenu:()=>E(null)})]}),j&&b&&t.jsx(Zo,{children:o.map(I=>t.jsx(tr,{node:I,parentId:e,level:r+1,currentFolderId:i,showActiveFolder:a,isExpanded:l,onToggle:u,onExpand:p,onSelect:g,isMovePending:f},I.id??I.name))})]})},tr=({node:e,...n})=>e.id==null?null:t.jsx(lc,{...n,id:e.id,name:e.name??"",folderChildren:e.children??[]}),dc="[data-folder-tree-root]",cc=({currentFolderId:e,showActiveFolder:n=!0,onSelectFolder:s,backgroundContextMenu:o})=>{const{formatMessage:r}=A(),{data:i=[],isLoading:a,isError:l}=In(),{isExpanded:u,toggleExpanded:p,expandFolder:g}=oc(i,e),{isMovePending:f}=me()??{isMovePending:!1},m=n&&e==null,j=r({id:c("sidebar.home"),defaultMessage:"Home"}),{droppable:{setNodeRef:b},showValidDropHighlight:w,showInvalidDropCursor:h}=qo({id:null,name:j});return t.jsxs(Ut.Main,{"data-folder-tree-root":!0,"aria-label":r({id:c("sidebar.tree.aria-label"),defaultMessage:"Media library folders"}),children:[o,t.jsx(Ut.Header,{label:r({id:c("sidebar.title"),defaultMessage:"Media library"})}),t.jsx(Ut.Content,{children:t.jsxs($,{direction:"column",alignItems:"stretch",padding:3,children:[t.jsx(Qo,{ref:b,"data-native-context-menu":!0,alignItems:"center",paddingLeft:`${Jo}rem`,paddingRight:`${er}rem`,$isActive:m,$isValidDropTarget:w,$isInvalidDropCursor:h,$isMovePending:f,children:t.jsxs(Yo,{type:"button",$isActive:m,$isValidDropTarget:w,$isInvalidDropCursor:h,$isMovePending:f,"aria-current":m?"page":void 0,onClick:()=>s(null),"data-testid":"folder-tree-home",children:[t.jsx(ms,{children:t.jsx(Nr,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem"})}),t.jsx(P,{variant:"omega",fontWeight:m?"semiBold":"regular",children:j})]})}),t.jsxs(W,{marginTop:4,children:[t.jsxs($,{alignItems:"center",gap:1,paddingTop:1,paddingBottom:1,paddingLeft:2,paddingRight:2,children:[t.jsx(ms,{children:t.jsx(Ce,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem",fill:"neutral500"})}),t.jsx(P,{variant:"sigma",textColor:"neutral600",style:{textTransform:"uppercase"},children:r({id:c("sidebar.folders"),defaultMessage:"Folders"})})]}),a?t.jsx($,{justifyContent:"center",padding:1,paddingTop:2,children:t.jsx(Re,{children:r({id:c("sidebar.tree.loading"),defaultMessage:"Loading folders..."})})}):l?t.jsx(W,{padding:1,paddingTop:2,children:t.jsx(P,{variant:"pi",textColor:"danger600",children:r({id:c("sidebar.tree.error"),defaultMessage:"Could not load folders."})})}):i.length===0?t.jsx(W,{padding:1,paddingTop:2,children:t.jsx(P,{variant:"pi",textColor:"neutral500",children:r({id:c("sidebar.tree.empty"),defaultMessage:"No folders yet"})})}):t.jsx(Zo,{children:i.map(x=>t.jsx(tr,{node:x,parentId:null,level:0,currentFolderId:e,showActiveFolder:n,isExpanded:u,onToggle:p,onExpand:g,onSelect:s,isMovePending:f},x.id??x.name))})]})]})})]})},uc="[data-strapi-main-content]",gc=["[data-native-context-menu]","thead","a","button","input","textarea","select",'[contenteditable="true"]'].join(", "),pc={position:"fixed",width:0,height:0,minWidth:0,minHeight:0,padding:0,border:0,opacity:0,overflow:"hidden",pointerEvents:"none"},fc={height:0},xs=({onCreateFolder:e,onImportFiles:n,onImportFromUrl:s,disabled:o,containerSelector:r=uc,locations:i})=>{const{formatMessage:a}=A(),[l,u]=d.useState(null),[p,g]=d.useState(null),f=d.useCallback(b=>g(b),[]);d.useEffect(()=>{const b=p?.closest(r);if(!b||o)return;const w=h=>{h.target instanceof Element&&(h.target.closest(gc)||(h.preventDefault(),u({x:h.clientX,y:h.clientY})))};return b.addEventListener("contextmenu",w),()=>b.removeEventListener("contextmenu",w)},[p,o,r]);const m=t.jsxs(t.Fragment,{children:[t.jsx(O.Item,{onSelect:e,startIcon:t.jsx(Ce,{}),children:a({id:c("folder.create.title"),defaultMessage:"New folder"})}),t.jsx(O.Item,{onSelect:n,startIcon:t.jsx(Os,{}),children:a({id:c("import-files"),defaultMessage:"File upload"})}),t.jsx(O.Item,{onSelect:s,startIcon:t.jsx(Ke,{}),children:a({id:c("import-from-url"),defaultMessage:"File upload from URL"})})]}),j=b=>t.jsxs(O.Root,{modal:!1,open:l!==null,onOpenChange:w=>{w||u(null)},children:[t.jsx(O.Trigger,{tabIndex:-1,endIcon:null,"aria-label":a({id:c("list.context-menu.label"),defaultMessage:"Media library actions"}),style:{...pc,top:l?.y??0,left:l?.x??0}}),t.jsxs(tt,{popoverPlacement:"bottom-start",zIndex:2,minWidth:"22rem",onCloseAutoFocus:w=>w.preventDefault(),children:[b,m]})]});return t.jsxs(t.Fragment,{children:[t.jsx("div",{ref:f,style:fc,"aria-hidden":!0}),!o&&(i?t.jsx(Po,{locations:i,children:({count:b,hasActions:w,items:h,dialogs:x})=>t.jsxs(t.Fragment,{children:[j(b>0&&w?t.jsxs(t.Fragment,{children:[h,t.jsx(O.Separator,{})]}):null),x]})}):j(null))]})},nn={oldestUploads:{id:c("list.sort.oldest-uploads"),defaultMessage:"Oldest uploads"},mostRecentUpdates:{id:c("list.sort.most-recent-updates"),defaultMessage:"Most recent updates"}},sn={nameAsc:{id:c("list.sort.name-asc"),defaultMessage:"A to Z"},nameDesc:{id:c("list.sort.name-desc"),defaultMessage:"Z to A"},sizeAsc:{id:c("list.sort.size-asc"),defaultMessage:"File size ascending"},sizeDesc:{id:c("list.sort.size-desc"),defaultMessage:"File size descending"}},bs={top:{id:c("list.sort.folders-on-top"),defaultMessage:"On top"},mixed:{id:c("list.sort.folders-mixed"),defaultMessage:"Mixed with files"}},hc=M(O.Trigger)``,ys=M(O.Label)`
  width: 100%;
  display: block;
  background: ${({theme:e})=>e.colorScheme==="dark"?e.colors.neutral150:e.colors.neutral100};
  padding-inline: ${({theme:e})=>e.spaces[3]};
  border-radius: ${({theme:e})=>e.borderRadius};
`,mc=({sort:e,showFoldersGroup:n=!0})=>{const{formatMessage:s}=A(),{trackUsage:o}=Me(),r=s({id:c("list.sort.trigger"),defaultMessage:"Sort: {active}"},{active:e.sortBy?s(nn[e.sortBy]):s(sn[e.direction])}),i=t.jsx(kt,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem",fill:"primary600"});return t.jsxs(O.Root,{children:[t.jsx(hc,{variant:"ghost",endIcon:t.jsx($t,{"aria-hidden":!0}),children:r}),t.jsxs(O.Content,{popoverPlacement:"bottom-end",zIndex:2,maxHeight:"70vh",minWidth:"25rem",children:[t.jsx(ys,{children:s({id:c("list.sort.section"),defaultMessage:"Sort"})}),Object.keys(nn).map(a=>t.jsx(O.Item,{role:"menuitemradio","aria-checked":e.sortBy===a,onSelect:l=>{l.preventDefault(),e.sortBy!==a&&o("didSortMediaLibraryElements",{location:ae,sort:a}),e.setSortBy(e.sortBy===a?null:a)},endIcon:e.sortBy===a?i:null,children:s(nn[a])},a)),Object.keys(sn).map(a=>t.jsx(O.Item,{role:"menuitemradio","aria-checked":e.direction===a,onSelect:l=>{l.preventDefault(),e.direction!==a&&o("didSortMediaLibraryElements",{location:ae,sort:a}),e.setDirection(e.direction===a?null:a)},endIcon:e.direction===a?i:null,children:s(sn[a])},a)),n&&t.jsxs(t.Fragment,{children:[t.jsx(O.Separator,{}),t.jsx(ys,{children:s({id:c("list.sort.folders"),defaultMessage:"Folders"})}),Object.keys(bs).map(a=>t.jsx(O.Item,{role:"menuitemradio","aria-checked":e.foldersPosition===a,onSelect:l=>{l.preventDefault(),e.setFoldersPosition(a)},endIcon:e.foldersPosition===a?i:null,children:s(bs[a])},a))]})]})]})},xc=["createdAt","updatedAt","name","size"],bc=e=>xc.includes(e),yc="updatedAt:DESC",jc=(e,n,s)=>e==="size"?(n.size??0)-(s.size??0):e==="name"?n.name.localeCompare(s.name):(n[e]??"").localeCompare(s[e]??""),wc=(e=yc)=>{const[n,s]=e.split(":"),o=bc(n),r=o?n:"updatedAt",a=(o?s:"DESC")==="ASC"?1:-1;return(l,u)=>{const p=jc(r,l,u);return p!==0?a*p:a*(l.id-u.id)}},vc=({assets:e,uploaded:n,sort:s,hasNextPage:o})=>{if(n.length===0)return e;const r=new Set(e.map(u=>u.id)),i=wc(s),a=n.filter(u=>!r.has(u.id)).sort(i);if(a.length===0)return e;const l=[...e];for(const u of a){const p=l.findIndex(g=>i(u,g)<0);if(p===-1){if(o)continue;l.push(u)}else l.splice(p,0,u)}return l},nr=20,Cc=10,Mc=e=>{const n=new Map;for(const s of Object.keys(e).map(Number).sort((o,r)=>o-r))for(const o of e[s])n.set(o.id,o);return[...n.values()]},Sc=e=>Object.keys(e).reduce((n,s)=>Math.max(n,Number(s)),1),Ic=({queryArgs:e,page:n,onRefreshed:s})=>{const{currentData:o}=Dn({...e,page:n,pageSize:nr}),r=o?.results;return d.useEffect(()=>{r&&s(n,r)},[r,n,s]),null},Dc=({folder:e=null,sort:n,search:s,filters:o,enabled:r=!0}={})=>{const i={folder:e,sort:n,search:s,filters:o},a=JSON.stringify(i),l=JSON.stringify({folder:e,sort:n,filters:o}),[u,p]=d.useState({queryKey:a,page:1}),[g,f]=d.useState({queryKey:a,listKey:l,pages:{}}),m=d.useRef(new Map),j=u.queryKey!==a,b=j?m.current.get(a):void 0;let w;j?b?w=Sc(b.pages):w=1:w=u.page,j&&(p({queryKey:a,page:w}),b&&f(b));const{currentData:h,isLoading:x,isFetching:S,error:C,startedTimeStamp:y,fulfilledTimeStamp:R}=Dn({...i,page:w,pageSize:nr},{skip:!r}),E=g.queryKey===a;!b&&h&&(!E||g.pages[w]!==h.results)&&f(E?{...g,pages:{...g.pages,[w]:h.results},pagination:h.pagination}:{queryKey:a,listKey:l,pages:{[w]:h.results},pagination:h.pagination});const v=d.useCallback((z,_)=>{f(q=>q.queryKey!==a||q.pages[z]===_?q:{...q,pages:{...q.pages,[z]:_}})},[a]),I=d.createElement(d.Fragment,null,Array.from({length:Math.max(0,w-1)},(z,_)=>_+1).map(z=>d.createElement(Ic,{key:`${a}:${z}`,queryArgs:i,page:z,onRefreshed:v})));d.useEffect(()=>{if(Object.keys(g.pages).length===0)return;const z=m.current;for(z.delete(g.queryKey),z.set(g.queryKey,g);z.size>Cc;){const _=z.keys().next();if(_.done)break;z.delete(_.value)}},[g]);const G=Br(),T=Ur(),B=d.useRef(e);d.useEffect(()=>{const z=B.current;if(B.current=e,z===e)return;const _=T.getState()[bt.reducerPath],q=bt.internalActions.removeQueryResult;Object.keys(_?.queries??{}).forEach(oe=>{if(!oe.startsWith("getAssets("))return;let ie;try{ie=JSON.parse(oe.slice(10,-1))}catch{return}ie.folder===z&&G(q({queryCacheKey:oe}))})},[e,G,T]);const D=g.listKey!==l,k=d.useMemo(()=>D?[]:Mc(g.pages),[D,g.pages]),F=h?w<h.pagination.pageCount:!1,Y=zr(Kr),H=!s&&(o?.length??0)===0,Z=R!==void 0&&y!==void 0&&R>y?y:void 0,U=d.useMemo(()=>{if(!H||Y.length===0)return k;const z=Y.filter(({asset:_,completedAt:q})=>Xe(_.folder)===e&&(Z===void 0||q>Z));return vc({assets:k,uploaded:z.map(({asset:_})=>_),sort:n,hasNextPage:F})},[H,Y,k,e,n,F,Z]),K=S&&w>1,V=D||x&&U.length===0,J=d.useCallback(()=>{p(z=>({queryKey:a,page:(z.queryKey===a?z.page:1)+1}))},[a]);return r?{assets:U,subscribers:I,pagination:h?.pagination??g.pagination,isLoading:V,isFetchingMore:K,hasNextPage:F,fetchNextPage:J,error:C}:{assets:[],subscribers:null,pagination:void 0,isLoading:!1,isFetchingMore:!1,hasNextPage:!1,fetchNextPage:J,error:void 0}},$c=({hasNextPage:e,isFetchingMore:n,onLoadMore:s,options:o})=>{const r=d.useRef(null),i=d.useRef(null),a=d.useRef(o);a.current=o;const l=d.useRef(s);l.current=s;const u=d.useRef(e);u.current=e;const p=d.useRef(n);p.current=n;const g=d.useCallback(f=>{if(r.current?.disconnect(),i.current=f,!f)return;const m=new IntersectionObserver(([j])=>{j.isIntersecting&&u.current&&!p.current&&l.current()},a.current);m.observe(f),r.current=m},[]);return d.useEffect(()=>()=>r.current?.disconnect(),[]),d.useEffect(()=>{n||!r.current||!i.current||(r.current.unobserve(i.current),r.current.observe(i.current))},[n]),g},kc="[data-strapi-main-content]",Rc=2e3,Ec=10,Tc=e=>{const n=d.useRef(new Map),s=d.useRef(null),o=d.useRef(null),r=d.useRef(e),i=d.useRef(null),a=d.useCallback(l=>{o.current?.(),o.current=null,s.current=null;const u=l?.closest(kc);if(!u)return;const p=()=>{const g=n.current;for(g.delete(r.current),g.set(r.current,u.scrollTop);g.size>Ec;){const f=g.keys().next().value;if(f===void 0)break;g.delete(f)}};u.addEventListener("scroll",p,{passive:!0}),s.current=u,o.current=()=>u.removeEventListener("scroll",p)},[]);return d.useEffect(()=>()=>o.current?.(),[]),d.useLayoutEffect(()=>{const l=s.current;if(!l)return;r.current!==e&&(r.current=e,i.current={top:n.current.get(e)??0,deadline:Date.now()+Rc});const u=i.current;if(u){if(Date.now()>u.deadline){i.current=null;return}l.scrollTop=u.top,l.scrollTop>=u.top&&(i.current=null)}}),a},Pn={oldestUploads:"createdAt:ASC",mostRecentUpdates:"updatedAt:DESC"},_n={nameAsc:"name:ASC",nameDesc:"name:DESC",sizeAsc:"size:ASC",sizeDesc:"size:DESC"},mn="mostRecentUpdates",js=Object.fromEntries(Object.entries(Pn).map(([e,n])=>[n,e])),ws=Object.fromEntries(Object.entries(_n).map(([e,n])=>[n,e])),Fc=e=>{for(const n of(e??"").split(",")){if(n in js)return{sortBy:js[n],direction:null,isExplicit:!0};if(n in ws)return{sortBy:null,direction:ws[n],isExplicit:!0}}return{sortBy:mn,direction:null,isExplicit:!1}},vs=(e,n)=>[e&&Pn[e],n&&_n[n]].filter(o=>!!o).join(","),Ac=()=>{const[{query:e},n]=Ae(),{sortBy:s,direction:o,isExplicit:r}=Fc(e?.sort),i=e?.folders==="mixed"?"mixed":"top",a=(b,w)=>{b===null&&w===null&&(b=mn);const h=vs(b,w);n(b===mn&&w===null?xe(e,{sort:void 0}):xe(e,{sort:h}))},l=b=>a(b,null),u=b=>a(null,b),p=b=>{n(b==="mixed"?xe(e,{folders:"mixed"}):xe(e,{folders:void 0}))},g=vs(s,o),m=[s&&Pn[s],o&&!o.startsWith("size")?_n[o]:null].filter(b=>!!b),j=r&&m.length>0?m.join(","):"name:ASC";return{sortBy:s,direction:o,foldersPosition:i,assetsSort:g,foldersSort:j,setSortBy:l,setDirection:u,setFoldersPosition:p}},Lc=({folderId:e,search:n,sort:s,filter:o})=>JSON.stringify({folderId:e,search:n,sort:s,filter:o}),Cs=(e,n)=>{switch(n){case"createdAt":case"updatedAt":return e[n]?new Date(e[n]).getTime():0;case"size":return e.size??0;case"name":default:return(e.name??"").toLowerCase()}},Oc=e=>{const n=e.split(",").map(s=>s.trim()).filter(Boolean).map(s=>{const[o,r]=s.split(":");return{field:o,desc:r?.toUpperCase()==="DESC"}});return(s,o)=>{for(const{field:r,desc:i}of n){const a=Cs(s,r),l=Cs(o,r);let u;if(typeof a=="string"||typeof l=="string"?u=String(a)<String(l)?-1:String(a)>String(l)?1:0:u=a-l,u!==0)return i?-u:u}return 0}},Pc=({folders:e,assets:n,sort:s,hasNextPage:o})=>{const r=Oc(s),i=[...e].sort(r),a=n[n.length-1],l=!o||!a?o?[]:i:i.filter(g=>r(g,a)<=0),u=[];let p=0;for(const g of n){for(;p<l.length&&r(l[p],g)<=0;)u.push({kind:"folder",folder:l[p]}),p+=1;u.push({kind:"asset",asset:g})}for(;p<l.length;)u.push({kind:"folder",folder:l[p]}),p+=1;return u},_c={threshold:0,rootMargin:"0px 0px -1px 0px"},Nc={threshold:0},Bc={id:c("header.content.item-count"),defaultMessage:"{count, plural, =1 {# item} other {# items}}"},on={both:{id:c("header.search-results.count"),defaultMessage:"{numberFolders, plural, one {1 folder} other {# folders}} - {numberAssets, plural, one {1 asset} other {# assets}}"},folders:{id:c("header.search-results.count.folders"),defaultMessage:"{numberFolders, plural, one {1 folder} other {# folders}}"},assets:{id:c("header.search-results.count.assets"),defaultMessage:"{numberAssets, plural, =0 {0 assets} one {1 asset} other {# assets}}"}},Uc=(e,n)=>e===0?on.assets:n===0?on.folders:on.both,zc=({view:e,folders:n,isLoadingFolders:s,assets:o,isLoadingAssets:r,isFetchingMore:i,hasNextPage:a,fetchNextPage:l,error:u,locations:p,searchQuery:g,assetsSort:f,foldersPosition:m,hasActiveFilters:j,onClearFilters:b,onAssetItemClick:w,onAddAssets:h,canAddAssets:x,onClearSearch:S})=>{const{formatMessage:C}=A(),y=e===qe.GRID,R=r||s,E=d.useMemo(()=>m==="mixed"&&!y?Pc({folders:n,assets:o,sort:f,hasNextPage:a}):null,[m,y,n,o,f,a]),v=Rn({folders:n,assets:o,mixedItems:E}),I=$c({hasNextPage:a,isFetchingMore:i,onLoadMore:l,options:_c});return R?t.jsx($,{justifyContent:"center",padding:8,children:t.jsx(Re,{children:C({id:"app.loading",defaultMessage:"Loading..."})})}):u?t.jsx(W,{padding:8,children:t.jsx(P,{textColor:"danger600",children:C({id:c("list.assets.error"),defaultMessage:"An error occurred while fetching assets."})})}):n.length===0&&o.length===0?j&&!g?t.jsx(Sd,{onClearFilters:b}):t.jsx(Md,{onAddAssets:h,canAddAssets:x,searchQuery:g,onClearSearch:S}):t.jsxs(t.Fragment,{children:[t.jsx(Fl,{locations:p,children:y?t.jsx(Zl,{folders:n,assets:o,renderedKeys:v,onAssetItemClick:w}):t.jsx(cd,{assets:o,folders:n,mixedItems:E,renderedKeys:v,onAssetItemClick:w})}),t.jsx("div",{ref:I,style:{height:1}}),i&&t.jsx($,{justifyContent:"center",padding:4,children:t.jsx(Re,{children:C({id:c("list.assets.loading-more"),defaultMessage:"Loading more assets..."})})}),t.jsx(md,{assets:o,renderedKeys:v,locations:p})]})},Kc=({listQueryKey:e})=>{const{clear:n}=he();return d.useEffect(()=>{n()},[e,n]),null},Gc=M(za)`
  display: flex;
  padding: ${({theme:e})=>e.spaces[1]};
  background: ${({theme:e})=>e.colors.neutral100};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
`,Ms=M(Ka)`
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
`,Vc=M(W)`
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
  ${({$compact:e,theme:n})=>e&&je`
      ${n.breakpoints.medium} {
        padding-top: ${n.spaces[3]};
        padding-bottom: ${n.spaces[3]};
        padding-left: ${n.spaces[4]};
        padding-right: ${n.spaces[4]};
        background: ${n.colors.neutral0};
        box-shadow: ${n.shadows.tableShadow};
      }
      ${n.breakpoints.large} {
        padding-left: ${n.spaces[6]};
        padding-right: ${n.spaces[6]};
      }
    `}
`,Wc=M($)`
  justify-content: space-between;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spaces[4]};

  h1 {
    font-size: 1.8rem;
  }
`,Hc=M($)`
  margin-top: ${({theme:e})=>e.spaces[5]};
  flex-direction: column;
  align-items: stretch;
  gap: ${({theme:e})=>e.spaces[3]};
  transition: margin-top 0.2s ease;

  /* Tightening the gap to the title belongs to the compact header, so it is
     scoped to the breakpoints that compact. On mobile the header never sticks,
     and this was the last thing still shifting as the page scrolled. */
  ${({$compact:e,theme:n})=>e&&je`
      ${n.breakpoints.medium} {
        margin-top: ${n.spaces[2]};
      }
    `}

  ${({theme:e})=>e.breakpoints.large} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`,sr=M($)`
  align-items: center;
  gap: ${({theme:e})=>e.spaces[3]};
`,qc=M(sr)``,Yc=M(sr)`
  justify-content: space-between;

  ${({theme:e})=>e.breakpoints.large} {
    justify-content: flex-end;
    flex: 0 0 auto;
  }
`,Qc=M(W)`
  flex: 1;

  ${({theme:e})=>e.breakpoints.large} {
    flex: 0 1 auto;
  }
`,Ss=M.span`
  display: none;

  ${({theme:e})=>e.breakpoints.large} {
    display: inline;
  }
`,Xc=()=>{const{formatMessage:e}=A(),{openDetails:n}=jo(),{canCreate:s,canUpdate:o}=ue(),{currentFolderId:r,navigateToFolderId:i,navigateToRoot:a}=Ge(),{error:l}=Sn({id:r},{skip:r===null});d.useEffect(()=>{l?.name==="NotFoundError"&&a()},[l,a]);const{title:u,itemCount:p}=go(r),{searchQuery:g,isSearching:f,clearSearch:m}=No(),j=Ac(),b=Ld(),w=d.useMemo(()=>Bd(b.filters,new Date),[b.serialized]),{assets:h,subscribers:x,pagination:S,isLoading:C,isFetchingMore:y,hasNextPage:R,fetchNextPage:E,error:v}=Dc({folder:r,search:g||void 0,sort:j.assetsSort,filters:w.fileClauses,enabled:w.showFiles}),{data:I=[],isLoading:G}=qa({parentId:r,search:g||void 0,sort:j.foldersSort,filters:w.folderClauses},{skip:!w.showFolders}),T=d.useMemo(()=>w.showFolders?I:[],[w.showFolders,I]),B=d.useMemo(()=>Qa(h,T),[h,T]),D=e(Bc,{count:p}),k=e({id:c("header.search-results"),defaultMessage:'Search results for "{query}"'},{query:g}),F=T.length,Y=S?.total??0,H=e(Uc(F,Y),{numberFolders:F,numberAssets:Y});let Z;f?Z=`${k} (${H})`:u?Z=`${u} (${D})`:Z=e({id:"app.loading",defaultMessage:"Loading..."});const[U,K]=d.useState(!1),[V,J]=Gr(si.view,qe.GRID),z=V===qe.GRID,[_,q]=d.useState(!1),oe=d.useRef(null),ie=d.useRef(null),[We,Lt]=d.useState(!1),Ot=d.useCallback(N=>Lt(!N),[]),Pt=Vr(Ot,Nc),[rt]=Wr(),[at]=Hr(),{data:_t}=qr(),Nt=_t?.data?.concurrentUploadRequests??1,it=St(),{trackUsage:Ie}=Me(),lt=async(N,ne)=>{if(N.length===0)return;const le=N.reduce((ve,Bt)=>{const ct=Jr(Bt.type);return ve[ct]=(ve[ct]??0)+1,ve},{});Ie("willAddMediaLibraryAssets",{location:ae,...le});const ge=new FormData,pe=[];N.forEach(ve=>{ge.append("files",ve),pe.push({name:ve.name,caption:null,alternativeText:null,folder:ne})}),ge.append("fileInfo",JSON.stringify(pe));try{await rt({formData:ge,totalFiles:N.length,concurrency:Nt,generateAiMetadata:!!it}).unwrap()}catch{}},Pe=()=>{oe.current?.click()},we=async N=>{const ne=N.target.files;ne&&ne.length>0&&(Ie("didSelectFile",{source:"computer",location:ae}),await lt(Array.from(ne),r)),N.target.value=""},_e=async N=>{s&&(Ie("didSelectFile",{source:"computer",location:ae}),await lt(N,r))},dt=async N=>{Ie("didSelectFile",{source:"url",location:ae}),Ie("willAddMediaLibraryAssets",{location:ae});try{await at({urls:N,folderId:r,generateAiMetadata:!!it}).unwrap()}catch{}},L=Lc({folderId:r,search:g,sort:`${j.assetsSort};folders=${j.foldersPosition}`,filter:b.serialized||null}),Q=Tc(L);return t.jsxs(t.Fragment,{children:[t.jsx(bd,{onDrop:_e,disabled:!s,children:t.jsx(nl,{disabled:!o,children:t.jsx(sl,{children:t.jsxs(Cl,{locations:B,children:[t.jsx(Kc,{listQueryKey:L}),t.jsx(Un.Root,{sideNav:t.jsx(cc,{currentFolderId:r,showActiveFolder:!f,onSelectFolder:i,backgroundContextMenu:t.jsx(xs,{disabled:!s,containerSelector:dc,onCreateFolder:()=>K(!0),onImportFiles:Pe,onImportFromUrl:()=>q(!0)})}),children:t.jsx(Ps.Main,{children:t.jsxs(W,{ref:ie,children:[t.jsx(Le,{children:t.jsx("input",{type:"file",ref:oe,onChange:we,multiple:!0})}),t.jsx(W,{ref:Pt,height:0,"aria-hidden":!0}),t.jsx(W,{ref:Q,height:0,"aria-hidden":!0}),t.jsx(xs,{disabled:!s,locations:B,onCreateFolder:()=>K(!0),onImportFiles:Pe,onImportFromUrl:()=>q(!0)}),t.jsxs(Vc,{$compact:We,children:[t.jsxs(Wc,{children:[t.jsx(P,{variant:"alpha",tag:"h1",children:Z}),s&&t.jsxs(Yr,{popoverPlacement:"bottom-end",variant:"default",endIcon:t.jsx($t,{}),label:e({id:c("new"),defaultMessage:"New"}),children:[t.jsx(zt,{onSelect:()=>K(!0),startIcon:t.jsx(Ce,{}),children:e({id:c("folder.create.title"),defaultMessage:"New folder"})}),t.jsx(zt,{onSelect:Pe,startIcon:t.jsx(Os,{}),children:e({id:c("import-files"),defaultMessage:"File upload"})}),t.jsx(zt,{onSelect:()=>q(!0),startIcon:t.jsx(Ke,{}),children:e({id:c("import-from-url"),defaultMessage:"File upload from URL"})})]})]}),t.jsxs(Hc,{$compact:We,children:[t.jsxs(qc,{children:[t.jsx(W,{children:t.jsx(Wd,{listFilters:b})}),t.jsx(Qc,{children:t.jsx(td,{})})]}),t.jsxs(Yc,{children:[t.jsx(W,{children:t.jsx(mc,{sort:j,showFoldersGroup:!z})}),t.jsxs(Gc,{type:"single",value:z?"grid":"table",onValueChange:N=>N&&J(N==="grid"?qe.GRID:qe.TABLE),"aria-label":e({id:c("view.switch.label"),defaultMessage:"View options"}),children:[t.jsxs(Ms,{value:"table","aria-label":e({id:c("view.table"),defaultMessage:"Table view"}),children:[t.jsx(Qr,{}),t.jsx(Ss,{children:e({id:c("view.table"),defaultMessage:"Table view"})})]}),t.jsxs(Ms,{value:"grid","aria-label":e({id:c("view.grid"),defaultMessage:"Grid view"}),children:[t.jsx(Xr,{}),t.jsx(Ss,{children:e({id:c("view.grid"),defaultMessage:"Grid view"})})]})]})]})]}),t.jsx(Jd,{listFilters:b,compact:We})]}),t.jsxs(Un.Content,{children:[x,t.jsxs(wd,{children:[t.jsx(Cd,{uploadDropZoneRef:ie,folderName:u}),t.jsx(zc,{view:V,folders:T,isLoadingFolders:G,assets:h,isLoadingAssets:C,isFetchingMore:y,hasNextPage:R,fetchNextPage:E,error:v,locations:B,searchQuery:g,assetsSort:j.assetsSort,foldersPosition:j.foldersPosition,hasActiveFilters:b.filters.length>0,onClearFilters:b.clearFilters,onAssetItemClick:n,onAddAssets:Pe,canAddAssets:s,onClearSearch:m})]})]})]})})})]})})})}),t.jsx(Ao,{open:U,mode:"create",parentFolderName:u,parentFolderId:r,onClose:()=>K(!1)}),t.jsx(Zr,{open:_,onClose:()=>q(!1),onUpload:dt}),t.jsx(Qi,{})]})},nu=()=>{const{formatMessage:e}=A(),n=e({id:c("plugin.name"),defaultMessage:"Media Library"});return t.jsxs(t.Fragment,{children:[t.jsx(Ps.Title,{children:n}),t.jsx(ea,{children:t.jsx(ta,{index:!0,element:t.jsx(Xc,{})})})]})};export{nu as MediaLibrary};
