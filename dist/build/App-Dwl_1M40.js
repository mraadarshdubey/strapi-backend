import{r as d,j as t,R as se,hp as Is,B as lr,dj as dr,cp as bt,a as F,di as c,hq as Ds,gf as Ce,hr as cr,eS as ur,hs as gr,ht as pr,hu as fr,hv as hr,hw as mr,hx as yt,u as Le,k as Ee,y as M,h as $,v as ye,f$ as xr,hy as be,cb as br,eE as yr,hz as $s,A as P,d as ie,de as jr,hA as wr,hB as vr,hC as Ge,U as re,H as J,S as H,hD as Cr,w as xe,hE as ke,bW as Oe,dx as ks,hF as Mr,hG as Sr,hH as Ir,E as Dr,hI as $r,hJ as rn,cy as xn,T as Rs,b4 as Es,bE as bn,b2 as Ts,b3 as jt,bm as X,bU as Je,J as St,cX as yn,fn as Fs,dD as As,cz as O,cw as oe,hK as It,dJ as jn,gt as Me,n as kr,bV as Pe,fe as Rr,gX as je,hL as et,fb as Er,fc as Tr,c as Ls,hM as Fr,Y as Ar,Q as Lr,i as wn,eL as Or,eN as Pr,eP as _r,eK as Nr,eM as Br,eO as Ur,hN as zr,b5 as Kr,dn as Gr,F as Dt,K as Os,hO as Vr,f_ as Hr,gw as Wr,ab as qr,g5 as $t,I as kt,dA as Te,cO as zt,hP as Yr,bP as Qr,hQ as Xr,ao as Ps,p as Zr,hR as Jr,hS as ea,hT as ta,hU as na,hV as sa,hW as oa,hX as ra,L as Nn,P as _s,dO as aa,hY as Kt,gI as ia,gJ as la,g7 as da,X as ca,Z as ua}from"./strapi-kq85FBrz.js";import{b as ga,a as Ns,u as Se,M as le}from"./useTracking-D3J3Bfs0.js";import{g as pa}from"./users-CHXWXr2I.js";import{m as fa,n as ha,D as ma,q as xa,l as ba,P as ya,u as Bs,f as Us,e as zs}from"./core.esm-Y4MhjBZH.js";import{s as ja}from"./modifiers.esm-34ooeSPx.js";function vn(e,n=[]){let s=[];function o(i,a){const l=d.createContext(a),u=s.length;s=[...s,a];const p=f=>{const{scope:m,children:j,...b}=f,v=m?.[e]?.[u]||l,h=d.useMemo(()=>b,Object.values(b));return t.jsx(v.Provider,{value:h,children:j})};p.displayName=i+"Provider";function g(f,m){const j=m?.[e]?.[u]||l,b=d.useContext(j);if(b)return b;if(a!==void 0)return a;throw new Error(`\`${f}\` must be used within \`${i}\``)}return[p,g]}const r=()=>{const i=s.map(a=>d.createContext(a));return function(l){const u=l?.[e]||i;return d.useMemo(()=>({[`__scope${e}`]:{...l,[e]:u}}),[l,u])}};return r.scopeName=e,[o,wa(r,...n)]}function wa(...e){const n=e[0];if(e.length===1)return n;const s=()=>{const o=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(i){const a=o.reduce((l,{useScope:u,scopeName:p})=>{const f=u(i)[`__scope${p}`];return{...l,...f}},{});return d.useMemo(()=>({[`__scope${n.scopeName}`]:a}),[a])}};return s.scopeName=n.scopeName,s}function Bn(e,n){if(typeof e=="function")return e(n);e!=null&&(e.current=n)}function Ks(...e){return n=>{let s=!1;const o=e.map(r=>{const i=Bn(r,n);return!s&&typeof i=="function"&&(s=!0),i});if(s)return()=>{for(let r=0;r<o.length;r++){const i=o[r];typeof i=="function"?i():Bn(e[r],null)}}}}function an(...e){return d.useCallback(Ks(...e),e)}function ln(e){const n=va(e),s=d.forwardRef((o,r)=>{const{children:i,...a}=o,l=d.Children.toArray(i),u=l.find(Ma);if(u){const p=u.props.children,g=l.map(f=>f===u?d.Children.count(p)>1?d.Children.only(null):d.isValidElement(p)?p.props.children:null:f);return t.jsx(n,{...a,ref:r,children:d.isValidElement(p)?d.cloneElement(p,void 0,g):null})}return t.jsx(n,{...a,ref:r,children:i})});return s.displayName=`${e}.Slot`,s}function va(e){const n=d.forwardRef((s,o)=>{const{children:r,...i}=s;if(d.isValidElement(r)){const a=Ia(r),l=Sa(i,r.props);return r.type!==d.Fragment&&(l.ref=o?Ks(o,a):a),d.cloneElement(r,l)}return d.Children.count(r)>1?d.Children.only(null):null});return n.displayName=`${e}.SlotClone`,n}var Ca=Symbol("radix.slottable");function Ma(e){return d.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Ca}function Sa(e,n){const s={...n};for(const o in n){const r=e[o],i=n[o];/^on[A-Z]/.test(o)?r&&i?s[o]=(...l)=>{const u=i(...l);return r(...l),u}:r&&(s[o]=r):o==="style"?s[o]={...r,...i}:o==="className"&&(s[o]=[r,i].filter(Boolean).join(" "))}return{...e,...s}}function Ia(e){let n=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,s=n&&"isReactWarning"in n&&n.isReactWarning;return s?e.ref:(n=Object.getOwnPropertyDescriptor(e,"ref")?.get,s=n&&"isReactWarning"in n&&n.isReactWarning,s?e.props.ref:e.props.ref||e.ref)}var Da=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Qe=Da.reduce((e,n)=>{const s=ln(`Primitive.${n}`),o=d.forwardRef((r,i)=>{const{asChild:a,...l}=r,u=a?s:n;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),t.jsx(u,{...l,ref:i})});return o.displayName=`Primitive.${n}`,{...e,[n]:o}},{});function Re(e,n,{checkForDefaultPrevented:s=!0}={}){return function(r){if(e?.(r),s===!1||!r.defaultPrevented)return n?.(r)}}function $a(e){const n=e+"CollectionProvider",[s,o]=vn(n),[r,i]=s(n,{collectionRef:{current:null},itemMap:new Map}),a=v=>{const{scope:h,children:x}=v,S=se.useRef(null),C=se.useRef(new Map).current;return t.jsx(r,{scope:h,itemMap:C,collectionRef:S,children:x})};a.displayName=n;const l=e+"CollectionSlot",u=ln(l),p=se.forwardRef((v,h)=>{const{scope:x,children:S}=v,C=i(l,x),y=an(h,C.collectionRef);return t.jsx(u,{ref:y,children:S})});p.displayName=l;const g=e+"CollectionItemSlot",f="data-radix-collection-item",m=ln(g),j=se.forwardRef((v,h)=>{const{scope:x,children:S,...C}=v,y=se.useRef(null),k=an(h,y),E=i(g,x);return se.useEffect(()=>(E.itemMap.set(y,{ref:y,...C}),()=>void E.itemMap.delete(y))),t.jsx(m,{[f]:"",ref:k,children:S})});j.displayName=g;function b(v){const h=i(e+"CollectionConsumer",v);return se.useCallback(()=>{const S=h.collectionRef.current;if(!S)return[];const C=Array.from(S.querySelectorAll(`[${f}]`));return Array.from(h.itemMap.values()).sort((E,w)=>C.indexOf(E.ref.current)-C.indexOf(w.ref.current))},[h.collectionRef,h.itemMap])}return[{Provider:a,Slot:p,ItemSlot:j},b,o]}var Gs=globalThis?.document?d.useLayoutEffect:()=>{},ka=Is[" useId ".trim().toString()]||(()=>{}),Ra=0;function Ea(e){const[n,s]=d.useState(ka());return Gs(()=>{s(o=>o??String(Ra++))},[e]),n?`radix-${n}`:""}function Ta(e){const n=d.useRef(e);return d.useEffect(()=>{n.current=e}),d.useMemo(()=>(...s)=>n.current?.(...s),[])}var Fa=Is[" useInsertionEffect ".trim().toString()]||Gs;function Rt({prop:e,defaultProp:n,onChange:s=()=>{},caller:o}){const[r,i,a]=Aa({defaultProp:n,onChange:s}),l=e!==void 0,u=l?e:r;{const g=d.useRef(e!==void 0);d.useEffect(()=>{const f=g.current;f!==l&&console.warn(`${o} is changing from ${f?"controlled":"uncontrolled"} to ${l?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),g.current=l},[l,o])}const p=d.useCallback(g=>{if(l){const f=La(g)?g(e):g;f!==e&&a.current?.(f)}else i(g)},[l,e,i,a]);return[u,p]}function Aa({defaultProp:e,onChange:n}){const[s,o]=d.useState(e),r=d.useRef(s),i=d.useRef(n);return Fa(()=>{i.current=n},[n]),d.useEffect(()=>{r.current!==s&&(i.current?.(s),r.current=s)},[s,r]),[s,o,i]}function La(e){return typeof e=="function"}var Oa=d.createContext(void 0);function Vs(e){const n=d.useContext(Oa);return e||n||"ltr"}var Gt="rovingFocusGroup.onEntryFocus",Pa={bubbles:!1,cancelable:!0},tt="RovingFocusGroup",[dn,Hs,_a]=$a(tt),[Na,Ws]=vn(tt,[_a]),[Ba,Ua]=Na(tt),qs=d.forwardRef((e,n)=>t.jsx(dn.Provider,{scope:e.__scopeRovingFocusGroup,children:t.jsx(dn.Slot,{scope:e.__scopeRovingFocusGroup,children:t.jsx(za,{...e,ref:n})})}));qs.displayName=tt;var za=d.forwardRef((e,n)=>{const{__scopeRovingFocusGroup:s,orientation:o,loop:r=!1,dir:i,currentTabStopId:a,defaultCurrentTabStopId:l,onCurrentTabStopIdChange:u,onEntryFocus:p,preventScrollOnEntryFocus:g=!1,...f}=e,m=d.useRef(null),j=an(n,m),b=Vs(i),[v,h]=Rt({prop:a,defaultProp:l??null,onChange:u,caller:tt}),[x,S]=d.useState(!1),C=Ta(p),y=Hs(s),k=d.useRef(!1),[E,w]=d.useState(0);return d.useEffect(()=>{const I=m.current;if(I)return I.addEventListener(Gt,C),()=>I.removeEventListener(Gt,C)},[C]),t.jsx(Ba,{scope:s,orientation:o,dir:b,loop:r,currentTabStopId:v,onItemFocus:d.useCallback(I=>h(I),[h]),onItemShiftTab:d.useCallback(()=>S(!0),[]),onFocusableItemAdd:d.useCallback(()=>w(I=>I+1),[]),onFocusableItemRemove:d.useCallback(()=>w(I=>I-1),[]),children:t.jsx(Qe.div,{tabIndex:x||E===0?-1:0,"data-orientation":o,...f,ref:j,style:{outline:"none",...e.style},onMouseDown:Re(e.onMouseDown,()=>{k.current=!0}),onFocus:Re(e.onFocus,I=>{const G=!k.current;if(I.target===I.currentTarget&&G&&!x){const T=new CustomEvent(Gt,Pa);if(I.currentTarget.dispatchEvent(T),!T.defaultPrevented){const B=y().filter(W=>W.focusable),D=B.find(W=>W.active),R=B.find(W=>W.id===v),Y=[D,R,...B].filter(Boolean).map(W=>W.ref.current);Xs(Y,g)}}k.current=!1}),onBlur:Re(e.onBlur,()=>S(!1))})})}),Ys="RovingFocusGroupItem",Qs=d.forwardRef((e,n)=>{const{__scopeRovingFocusGroup:s,focusable:o=!0,active:r=!1,tabStopId:i,children:a,...l}=e,u=Ea(),p=i||u,g=Ua(Ys,s),f=g.currentTabStopId===p,m=Hs(s),{onFocusableItemAdd:j,onFocusableItemRemove:b,currentTabStopId:v}=g;return d.useEffect(()=>{if(o)return j(),()=>b()},[o,j,b]),t.jsx(dn.ItemSlot,{scope:s,id:p,focusable:o,active:r,children:t.jsx(Qe.span,{tabIndex:f?0:-1,"data-orientation":g.orientation,...l,ref:n,onMouseDown:Re(e.onMouseDown,h=>{o?g.onItemFocus(p):h.preventDefault()}),onFocus:Re(e.onFocus,()=>g.onItemFocus(p)),onKeyDown:Re(e.onKeyDown,h=>{if(h.key==="Tab"&&h.shiftKey){g.onItemShiftTab();return}if(h.target!==h.currentTarget)return;const x=Va(h,g.orientation,g.dir);if(x!==void 0){if(h.metaKey||h.ctrlKey||h.altKey||h.shiftKey)return;h.preventDefault();let C=m().filter(y=>y.focusable).map(y=>y.ref.current);if(x==="last")C.reverse();else if(x==="prev"||x==="next"){x==="prev"&&C.reverse();const y=C.indexOf(h.currentTarget);C=g.loop?Ha(C,y+1):C.slice(y+1)}setTimeout(()=>Xs(C))}}),children:typeof a=="function"?a({isCurrentTabStop:f,hasTabStop:v!=null}):a})})});Qs.displayName=Ys;var Ka={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Ga(e,n){return n!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function Va(e,n,s){const o=Ga(e.key,s);if(!(n==="vertical"&&["ArrowLeft","ArrowRight"].includes(o))&&!(n==="horizontal"&&["ArrowUp","ArrowDown"].includes(o)))return Ka[o]}function Xs(e,n=!1){const s=document.activeElement;for(const o of e)if(o===s||(o.focus({preventScroll:n}),document.activeElement!==s))return}function Ha(e,n){return e.map((s,o)=>e[(n+o)%e.length])}var Wa=qs,qa=Qs,Zs="Toggle",Js=d.forwardRef((e,n)=>{const{pressed:s,defaultPressed:o,onPressedChange:r,...i}=e,[a,l]=Rt({prop:s,onChange:r,defaultProp:o??!1,caller:Zs});return t.jsx(Qe.button,{type:"button","aria-pressed":a,"data-state":a?"on":"off","data-disabled":e.disabled?"":void 0,...i,ref:n,onClick:Re(e.onClick,()=>{e.disabled||l(!a)})})});Js.displayName=Zs;var Ie="ToggleGroup",[eo]=vn(Ie,[Ws]),to=Ws(),Cn=se.forwardRef((e,n)=>{const{type:s,...o}=e;if(s==="single"){const r=o;return t.jsx(Ya,{...r,ref:n})}if(s==="multiple"){const r=o;return t.jsx(Qa,{...r,ref:n})}throw new Error(`Missing prop \`type\` expected on \`${Ie}\``)});Cn.displayName=Ie;var[no,so]=eo(Ie),Ya=se.forwardRef((e,n)=>{const{value:s,defaultValue:o,onValueChange:r=()=>{},...i}=e,[a,l]=Rt({prop:s,defaultProp:o??"",onChange:r,caller:Ie});return t.jsx(no,{scope:e.__scopeToggleGroup,type:"single",value:se.useMemo(()=>a?[a]:[],[a]),onItemActivate:l,onItemDeactivate:se.useCallback(()=>l(""),[l]),children:t.jsx(oo,{...i,ref:n})})}),Qa=se.forwardRef((e,n)=>{const{value:s,defaultValue:o,onValueChange:r=()=>{},...i}=e,[a,l]=Rt({prop:s,defaultProp:o??[],onChange:r,caller:Ie}),u=se.useCallback(g=>l((f=[])=>[...f,g]),[l]),p=se.useCallback(g=>l((f=[])=>f.filter(m=>m!==g)),[l]);return t.jsx(no,{scope:e.__scopeToggleGroup,type:"multiple",value:a,onItemActivate:u,onItemDeactivate:p,children:t.jsx(oo,{...i,ref:n})})});Cn.displayName=Ie;var[Xa,Za]=eo(Ie),oo=se.forwardRef((e,n)=>{const{__scopeToggleGroup:s,disabled:o=!1,rovingFocus:r=!0,orientation:i,dir:a,loop:l=!0,...u}=e,p=to(s),g=Vs(a),f={role:"group",dir:g,...u};return t.jsx(Xa,{scope:s,rovingFocus:r,disabled:o,children:r?t.jsx(Wa,{asChild:!0,...p,orientation:i,dir:g,loop:l,children:t.jsx(Qe.div,{...f,ref:n})}):t.jsx(Qe.div,{...f,ref:n})})}),wt="ToggleGroupItem",ro=se.forwardRef((e,n)=>{const s=so(wt,e.__scopeToggleGroup),o=Za(wt,e.__scopeToggleGroup),r=to(e.__scopeToggleGroup),i=s.value.includes(e.value),a=o.disabled||e.disabled,l={...e,pressed:i,disabled:a},u=se.useRef(null);return o.rovingFocus?t.jsx(qa,{asChild:!0,...r,focusable:!a,active:i,ref:u,children:t.jsx(Un,{...l,ref:n})}):t.jsx(Un,{...l,ref:n})});ro.displayName=wt;var Un=se.forwardRef((e,n)=>{const{__scopeToggleGroup:s,value:o,...r}=e,i=so(wt,s),a={role:"radio","aria-checked":e.pressed,"aria-pressed":void 0},l=i.type==="single"?a:void 0;return t.jsx(Js,{...l,...r,ref:n,onPressedChange:u=>{u?i.onItemActivate(o):i.onItemDeactivate(o)}})}),Ja=Cn,ei=ro;const ti=["image/png","image/jpeg","image/webp","image/heic","image/heif"],ao=e=>ti.includes(e),ni=20,zn=ni*2,Et=e=>{const n=ga(),{data:s}=Ns();return!n||!(s?.data?.aiMetadata??!1)?!1:e===void 0?!0:ao(e.mime)},{main:hu,...si}=dr,ue=()=>{const{allowedActions:e,isLoading:n}=lr(si);return{isLoading:n,canCreate:!!e.canCreate,canUpdate:!!e.canUpdate,canDownload:!!e.canDownload,canCopyLink:!!e.canCopyLink}},Mn=e=>encodeURIComponent(e).replace(/\+/g,"%2B"),oi=e=>typeof e=="object"&&e!==null&&"data"in e,Kn=e=>oi(e)?e.data:e,ri=bt.injectEndpoints({endpoints:e=>({getFolders:e.query({query:(n={})=>{const{parentId:s,sort:o,search:r,filters:i=[]}=n,a={sort:o??"name:ASC",populate:{parent:!0}};if(r)a._q=Mn(r),i.length>0&&(a.filters={$and:[...i]});else{const l=s!=null?{parent:{id:s}}:{parent:{id:{$null:!0}}};a.filters={$and:[l,...i]}}return{url:"/upload/folders",method:"GET",config:{params:a}}},transformResponse:n=>Kn(n),providesTags:n=>n?[...n.map(({id:s})=>({type:"Folder",id:s})),{type:"Folder",id:"LIST"}]:[{type:"Folder",id:"LIST"}]}),createFolder:e.mutation({query:n=>({url:"/upload/folders",method:"POST",data:n}),transformResponse:n=>n.data,invalidatesTags:[{type:"Folder",id:"LIST"},{type:"Folder",id:"STRUCTURE"}]}),updateFolder:e.mutation({query:({id:n,...s})=>({url:`/upload/folders/${n}`,method:"PUT",data:s}),transformResponse:n=>n.data,invalidatesTags:(n,s,{id:o})=>[{type:"Folder",id:o},{type:"Folder",id:"LIST"},{type:"Folder",id:"STRUCTURE"}]}),getFolderStructure:e.query({query:()=>({url:"/upload/folder-structure",method:"GET"}),transformResponse:n=>n?.data??n??[],providesTags:[{type:"Folder",id:"STRUCTURE"}]}),getAllFolders:e.query({query:()=>({url:"/upload/folders",method:"GET"}),transformResponse:n=>Kn(n??[]),providesTags:n=>n?[...n.map(({id:s})=>({type:"Folder",id:s})),{type:"Folder",id:"LIST"}]:[{type:"Folder",id:"LIST"}]}),getFolder:e.query({query:({id:n})=>({url:`/upload/folders/${n}`,method:"GET",config:{params:{populate:{parent:{populate:{parent:"*"}},children:{count:!0},files:{count:!0}}}}}),transformResponse:n=>n.data,providesTags:(n,s,{id:o})=>[{type:"Folder",id:o},{type:"Folder",id:"LIST"}]}),bulkMove:e.mutation({query:({fileIds:n=[],folderIds:s=[],destinationFolderId:o})=>({url:"/upload/actions/bulk-move",method:"POST",data:{fileIds:n,folderIds:s,destinationFolderId:o}}),transformResponse:n=>n.data,invalidatesTags:[{type:"Asset",id:"LIST"},{type:"Folder",id:"LIST"},{type:"Folder",id:"STRUCTURE"}]})})}),{useCreateFolderMutation:ai,useUpdateFolderMutation:ii,useGetFoldersQuery:li,useGetFolderQuery:Sn,useGetAllFoldersQuery:di,useGetFolderStructureQuery:In,useBulkMoveMutation:io}=ri,Xe=e=>e==null?null:typeof e=="object"?e.id??null:typeof e=="number"?e:Number(e)||null,lo={fileFolderId:()=>{},folderParentId:()=>{}},ci=(e,n)=>{const s=new Map,o=new Map;return e.forEach(r=>{s.set(r.id,Xe(r.folder))}),n.forEach(r=>{o.set(r.id,Xe(r.parent))}),{fileFolderId:r=>s.get(r),folderParentId:r=>o.get(r)}},vt=(e,n,s,o)=>{const r=n==="file"?e.fileFolderId(s):e.folderParentId(s);return r===void 0?o:r},ui=e=>{if(!e||typeof e!="object")return;const{message:n}=e;return typeof n=="string"&&n.length>0?n:void 0},nt=()=>{const{formatMessage:e,messages:n}=F();return d.useCallback((s,o)=>{const r=ui(s);if(!r)return o;const i=c(`apiError.${r}`);return n[i]?e({id:i}):r},[e,n])},gi=bt.injectEndpoints({endpoints:e=>({getAssets:e.query({query:(n={})=>{const{folder:s,search:o,filters:r=[],...i}=n,a={...i};if(o)a._q=Mn(o),r.length>0&&(a.filters={$and:[...r]});else{const l=s!=null?{folder:{id:s}}:{folder:{id:{$null:!0}}};a.filters={$and:[l,...r]}}return{url:"/upload/files",method:"GET",config:{params:a}}},transformResponse:n=>n,providesTags:n=>n?[...n.results.map(({id:s})=>({type:"Asset",id:s})),{type:"Asset",id:"LIST"}]:[{type:"Asset",id:"LIST"}]}),getAsset:e.query({query:n=>({url:`/upload/files/${n}`,method:"GET"}),providesTags:(n,s,o)=>[{type:"Asset",id:o}]}),updateAsset:e.mutation({query:({id:n,fileInfo:s})=>{const o=new FormData;return o.append("fileInfo",JSON.stringify(s)),{url:`/upload/files/${n}`,method:"PUT",data:o}},invalidatesTags:(n,s,{id:o})=>[{type:"Asset",id:o},{type:"Asset",id:"LIST"},{type:"Folder",id:"LIST"}]}),replaceAsset:e.mutation({query:({id:n,file:s,fileInfo:o})=>{const r=new FormData;return r.append("files",s),o&&r.append("fileInfo",JSON.stringify(o)),{url:`/upload/files/${n}/replace`,method:"POST",data:r}},invalidatesTags:(n,s,{id:o})=>[{type:"Asset",id:o},{type:"Asset",id:"LIST"}]}),deleteAsset:e.mutation({query:n=>({url:`/upload/files/${n}`,method:"DELETE"}),invalidatesTags:(n,s,o)=>[{type:"Asset",id:o},{type:"Asset",id:"LIST"},{type:"Folder",id:"LIST"}]}),bulkDeleteItems:e.mutation({query:({fileIds:n,folderIds:s})=>({url:"/upload/actions/bulk-delete",method:"POST",data:{fileIds:n,folderIds:s}}),invalidatesTags:[{type:"Asset",id:"LIST"},{type:"Folder",id:"LIST"},{type:"Folder",id:"STRUCTURE"}]})})}),{useGetAssetsQuery:Dn,useGetAssetQuery:pi,useUpdateAssetMutation:fi,useReplaceAssetMutation:co,useDeleteAssetMutation:hi,useBulkDeleteItemsMutation:mi}=gi,uo=async(e,n)=>{const o=await(await fetch(e)).blob(),r=window.URL.createObjectURL(o),i=document.createElement("a");i.href=r,i.setAttribute("download",n),i.click(),window.URL.revokeObjectURL(r)},xi={pdf:mr,csv:hr,xls:fr,zip:pr},st=(e,n)=>{const s=Ds(n);return e?.includes(Ce.Image)?cr:e?.includes(Ce.Video)?ur:e?.includes(Ce.Audio)?gr:s?xi[s]||yt:yt},bi={view:"STRAPI_UPLOAD_LIBRARY_VIEW"},Ye={GRID:0,TABLE:1},go="data-asset-details-trigger",po={[go]:""},fo="data-asset-item-control",Ct={[fo]:""},yi=`[${fo}]`,ji=`[${go}]`,Gn=[{name:"name",label:{id:c("list.table.header.name"),defaultMessage:"name"}},{name:"createdAt",label:{id:c("list.table.header.creationDate"),defaultMessage:"creation date"}},{name:"updatedAt",label:{id:c("list.table.header.lastModified"),defaultMessage:"last modified"}},{name:"size",label:{id:c("list.table.header.size"),defaultMessage:"size"}},{name:"actions",label:{id:c("list.table.header.actions"),defaultMessage:"actions"},isVisuallyHidden:!0}],ho=e=>{const{formatMessage:n}=F(),{data:s,isLoading:o}=Sn({id:e},{skip:e===null}),{data:r,isLoading:i}=Dn({folder:null,pageSize:1},{skip:e!==null}),a=n({id:c("plugin.home"),defaultMessage:"Home"});return e===null?i?{title:a,itemCount:0}:{title:a,itemCount:r?.pagination?.total??0}:o||!s?{title:"",itemCount:0}:{title:s.name,itemCount:s.files?.count??0}},xt="assetId",mo=e=>{const n=e?parseInt(e,10):NaN;return Number.isNaN(n)?null:n},wi=()=>{const[{query:e}]=Le();return mo(e?.[xt])!==null},vi=M($)`
  position: absolute;
  inset: 0;
  z-index: ${({$zIndex:e})=>e};
  align-items: center;
  justify-content: center;
  background: ${({theme:e})=>e.colors.neutral0};
  opacity: 0.7;
`,xo=({children:e,zIndex:n=20,hideLabel:s=!1})=>t.jsx(vi,{$zIndex:n,children:t.jsx(Ee,{small:s,children:e})}),Ci=1,Mi=({anchorX:e,anchorY:n,point:s,aspectRatio:o})=>{let r=Math.abs(s.x-e),i=Math.abs(s.y-n);o&&(r/o>=i?i=r/o:r=i*o);const a=s.x<e?e-r:e,l=s.y<n?n-i:n;return{x:a,y:l,width:r,height:i}},bo=(e,n,s)=>n==="right"?{x:s.height-(e.y+e.height),y:e.x,width:e.height,height:e.width}:{x:e.y,y:s.width-(e.x+e.width),width:e.height,height:e.width},Si=(e,n,s)=>{let o=e,r=s;for(let i=0;i<n/90;i+=1)o=bo(o,"left",r),r={width:r.height,height:r.width};return o},Ii=(e,n)=>(e+(n==="right"?90:270))%360,Di=()=>{const[e,n]=d.useState({width:0,height:0}),[s,o]=d.useState({x:0,y:0,width:0,height:0}),[r,i]=d.useState(null),[a,l]=d.useState(0),u=d.useRef(null),p=d.useCallback(h=>{u.current=h;const x={width:h.naturalWidth,height:h.naturalHeight};n(x),o({x:0,y:0,width:x.width,height:x.height}),l(0)},[]),g=d.useCallback(h=>{o(x=>bo(x,h,e)),n(x=>({width:x.height,height:x.width})),l(x=>Ii(x,h)),i(x=>x&&1/x)},[e]),f=(h,x,S)=>Math.min(S,Math.max(x,h)),m=d.useCallback(h=>{o(x=>{const S=e.width-x.x,C=e.height-x.y;let y=h.width!==void 0?f(h.width,1,S):x.width,k=h.height!==void 0?f(h.height,1,C):x.height;return r&&(h.width!==void 0?k=f(y/r,1,C):h.height!==void 0&&(y=f(k*r,1,S))),{...x,width:y,height:k}})},[e.width,e.height,r]),j=d.useCallback(h=>{o(x=>{const S=h.x!==void 0?f(h.x,0,e.width-x.width):x.x,C=h.y!==void 0?f(h.y,0,e.height-x.height):x.y;return{...x,x:S,y:C}})},[e.width,e.height]),b=d.useCallback(h=>{i(h),h&&o(x=>{const S=e.width-x.x,C=e.height-x.y;let y=x.width,k=y/h;return k>C&&(k=C,y=k*h),y>S&&(y=S,k=y/h),{...x,width:Math.round(y),height:Math.round(k)}})},[e.width,e.height]),v=d.useCallback((h,x,S)=>new Promise((C,y)=>{const k=u.current;if(!k){y(new Error("Image not ready: call init() before produceFile()."));return}const E=document.createElement("canvas");E.width=Math.max(1,Math.round(s.width)),E.height=Math.max(1,Math.round(s.height));const w=E.getContext("2d");if(!w){y(new Error("Could not get a 2D canvas context to crop the image."));return}const I=Si(s,a,e);w.translate(E.width/2,E.height/2),w.rotate(a*Math.PI/180),w.drawImage(k,I.x,I.y,I.width,I.height,-I.width/2,-I.height/2,I.width,I.height),E.toBlob(G=>{if(!G){y(new Error("Could not export the cropped image to a blob."));return}C(new File([G],h,{type:x,lastModified:S?new Date(S).getTime():Date.now()}))},x,Ci)}),[s,a,e]);return{init:p,crop:s,naturalSize:e,rotation:a,rotate:g,aspectRatio:r,setCropSize:m,setCropPosition:j,setAspectRatio:b,produceFile:v,width:Math.round(s.width),height:Math.round(s.height)}},ut=5.6,Vt=12,$i=M($)`
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
`,ki=M($)`
  position: absolute;
  top: ${({theme:e})=>e.spaces[3]};
  right: ${({theme:e})=>e.spaces[3]};
  z-index: 1;
`,Ri=M($)`
  width: 100%;
  gap: ${({theme:e})=>e.spaces[2]};
  padding: ${({theme:e})=>`${e.spaces[3]} ${e.spaces[5]}`};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
  background: ${({theme:e})=>e.colors.neutral0};
`,Ei=M(H)`
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
`,Ti=M.div`
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
`,Fi=M.div`
  position: absolute;
  border: 1px dashed ${({theme:e})=>e.colors.primary600};
  box-shadow: 0 0 0 9999px rgba(33, 33, 52, 0.5);
  cursor: move;
  /* Without this, touch browsers claim the gesture for scrolling and fire
     pointercancel mid-drag — the crop drag dies while the finger is down. */
  touch-action: none;
`,gt=M.button`
  position: absolute;
  width: ${Vt}px;
  height: ${Vt}px;
  margin: -${Vt/2}px;
  padding: 0;
  border: 1px solid ${({theme:e})=>e.colors.primary600};
  border-radius: 2px;
  background: ${({theme:e})=>e.colors.neutral0};
  cursor: ${({$cursor:e})=>e};
  touch-action: none;
`,Ai=M.button`
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
`,Li=M(H)`
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
`,Oi=M($)`
  width: 100%;
  justify-content: space-between;
  padding: ${({theme:e})=>`${e.spaces[3]} ${e.spaces[5]}`};
  border-top: 1px solid ${({theme:e})=>e.colors.neutral150};
  background: ${({theme:e})=>e.colors.neutral0};
`,pt=M(re.Root)`
  flex-direction: row;
  align-items: center;
`,ft=M(Cr)`
  width: 8.4rem;
`,Vn=M(re.Label)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.6rem;
  height: 1.6rem;
`,Pi=M(H)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);

  svg {
    display: block;
  }
`,_i=()=>t.jsx(Pi,{children:t.jsx("svg",{width:"17",height:"49",viewBox:"0 0 17 49",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M0.5 0.5H8.5C12.9183 0.5 16.5 4.08172 16.5 8.5M0.5 48.5H8.5C12.9183 48.5 16.5 44.9183 16.5 40.5",stroke:"#666687",strokeLinecap:"round"})})}),Ni=({asset:e,isBusy:n=!1,onClose:s,onApply:o,onSaveAsCopy:r,canSaveAsCopy:i})=>{const{formatMessage:a}=F(),{toggleNotification:l}=ye(),p=xr().colorScheme==="dark",g=p?"neutral1000":"neutral0",f=p?"neutral600":"neutral200",m=d.useRef(null),j=d.useRef(null),b=d.useRef(null);d.useEffect(()=>{b.current?.focus()},[]);const{init:v,crop:h,naturalSize:x,aspectRatio:S,setCropSize:C,setCropPosition:y,setAspectRatio:k,produceFile:E,rotation:w,rotate:I,width:G,height:T}=Di(),[B,D]=d.useState(!1),[R,A]=d.useState(e.focalPoint??{x:50,y:50}),Y=L=>{I(L),A(Q=>({x:100-Q.y,y:Q.x}))},W=be(e.url),Z=e.updatedAt&&!e.isUrlSigned?new Date(e.updatedAt).getTime():void 0,U=Z!==void 0?`${W}${W.includes("?")?"&":"?"}updatedAt=${Z}`:W,K=w===90||w===270,V=d.useMemo(()=>{if(!w)return;const L=x.width&&x.height?x.width/x.height:void 0;return!K||!L?{transform:`rotate(${w}deg)`}:{position:"absolute",top:"50%",left:"50%",maxWidth:"none",maxHeight:"none",width:`${100/L}%`,height:`${100*L}%`,transform:`translate(-50%, -50%) rotate(${w}deg)`}},[w,K,x.width,x.height]),ee=()=>{m.current&&v(m.current)},z=L=>{const Q=j.current?.getBoundingClientRect();if(!Q||!x.width||!x.height)return null;const N=x.width/Q.width,ne=x.height/Q.height;return{x:(L.clientX-Q.left)*N,y:(L.clientY-Q.top)*ne}},_=d.useRef(null);d.useEffect(()=>()=>{_.current?.()},[]);const q=(L,Q)=>{L.preventDefault(),L.stopPropagation();const{pointerId:N}=L;try{L.currentTarget.setPointerCapture(N)}catch{}const ne=pe=>{pe.pointerId===N&&Q(pe)},ce=()=>{window.removeEventListener("pointermove",ne),window.removeEventListener("pointerup",ge),window.removeEventListener("pointercancel",ge),_.current=null},ge=pe=>{pe.pointerId===N&&ce()};_.current?.(),_.current=ce,window.addEventListener("pointermove",ne),window.addEventListener("pointerup",ge),window.addEventListener("pointercancel",ge)},ae=L=>{const Q=z(L);if(!Q)return;const N={...h};q(L,ne=>{const ce=z(ne);ce&&y({x:N.x+(ce.x-Q.x),y:N.y+(ce.y-Q.y)})})},de=L=>Q=>{const N={...h},ne=L==="tl"||L==="bl"?N.x+N.width:N.x,ce=L==="tl"||L==="tr"?N.y+N.height:N.y;q(Q,ge=>{const pe=z(ge);if(!pe)return;const{x:ve,y:Ut,width:ct,height:ir}=Mi({anchorX:ne,anchorY:ce,point:pe,aspectRatio:B?S:null});y({x:ve,y:Ut}),C({width:ct,height:ir})})},We=()=>{D(L=>{const Q=!L;return k(Q&&T?G/T:null),Q})},Ot=L=>{q(L,Q=>{const N=z(Q);if(!N)return;const ne=(N.x-h.x)/h.width*100,ce=(N.y-h.y)/h.height*100;A({x:Math.round(Math.min(100,Math.max(0,ne))),y:Math.round(Math.min(100,Math.max(0,ce)))})})},Pt=Math.round(R.x/100*G),_t=Math.round(R.y/100*T),rt=(L,Q)=>{const N=L==="x"?G:T;if(!N)return;const ne=Math.min(100,Math.max(0,Q/N*100));A(ce=>({...ce,[L]:Math.round(ne)}))},at=w,[Nt,Bt]=d.useState(0),[it,De]=d.useState(0),lt=()=>Bt(L=>L+1),_e=()=>De(L=>L+1),we=x.width&&x.height?{left:h.x/x.width*100,top:h.y/x.height*100,width:h.width/x.width*100,height:h.height/x.height*100}:null,Ne=we!==null,dt=async L=>{if(!Ne)return;let Q;try{Q=await E(e.name,e.mime??"image/png",e.updatedAt)}catch{l({type:"danger",message:a({id:c("asset-details.crop.export-error"),defaultMessage:"Could not process the cropped image."})});return}const N={x:Math.round(R.x),y:Math.round(R.y)};L==="apply"?o(Q,N):r(Q,N)};return t.jsx(br,{children:t.jsx(yr,{onEscape:s,skipAutoFocus:!0,children:t.jsxs($i,{ref:b,tabIndex:-1,children:[t.jsxs(Ri,{alignItems:"center",children:[t.jsx($s,{"aria-hidden":!0}),t.jsx(P,{variant:"omega",fontWeight:"bold",children:a({id:c("asset-details.crop.title"),defaultMessage:"Crop & Focus area"})})]}),t.jsxs(Ei,{children:[t.jsx(ki,{direction:"column",gap:1,children:t.jsx(ie,{disabled:!Ne,onClick:()=>Y("right"),label:a({id:c("asset-details.crop.rotate-right"),defaultMessage:"Rotate 90° right"}),children:t.jsx(jr,{})})}),t.jsxs(Ti,{ref:j,$aspect:x.width&&x.height?x.width/x.height:void 0,children:[K?t.jsx("div",{"aria-hidden":!0,style:{width:x.width,maxWidth:"100%"}}):null,t.jsx("img",{ref:m,"data-testid":"crop-editor-image",style:V,src:U,alt:e.name,crossOrigin:"anonymous",onLoad:ee,draggable:!1}),we?t.jsxs(Fi,{style:{left:`${we.left}%`,top:`${we.top}%`,width:`${we.width}%`,height:`${we.height}%`},onPointerDown:ae,children:[t.jsx(gt,{type:"button","aria-label":a({id:c("asset-details.crop.resize.top-left"),defaultMessage:"Resize top-left"}),$cursor:"nwse-resize",style:{left:0,top:0},onPointerDown:de("tl")}),t.jsx(gt,{type:"button","aria-label":a({id:c("asset-details.crop.resize.top-right"),defaultMessage:"Resize top-right"}),$cursor:"nesw-resize",style:{right:0,top:0},onPointerDown:de("tr")}),t.jsx(gt,{type:"button","aria-label":a({id:c("asset-details.crop.resize.bottom-left"),defaultMessage:"Resize bottom-left"}),$cursor:"nesw-resize",style:{left:0,bottom:0},onPointerDown:de("bl")}),t.jsx(gt,{type:"button","aria-label":a({id:c("asset-details.crop.resize.bottom-right"),defaultMessage:"Resize bottom-right"}),$cursor:"nwse-resize",style:{right:0,bottom:0},onPointerDown:de("br")}),t.jsx(Ai,{type:"button","aria-label":a({id:c("asset-details.crop.focal-point"),defaultMessage:"Focal point"}),style:{left:`${R.x}%`,top:`${R.y}%`},onPointerDown:Ot})]}):null]}),t.jsxs(Li,{children:[t.jsxs($,{direction:"column",alignItems:"stretch",gap:1,paddingBottom:3,children:[t.jsx(P,{variant:"omega",fontWeight:"bold",textColor:g,children:a({id:c("asset-details.crop.title"),defaultMessage:"Crop & Focus area"})}),t.jsx(P,{variant:"pi",textColor:f,children:a({id:c("asset-details.crop.hint"),defaultMessage:"Set the crop area with the rectangle. Pin the always-visible area with the circle."})})]}),t.jsxs($,{gap:6,alignItems:"center",children:[t.jsxs($,{alignItems:"center",gap:2,children:[t.jsxs($,{direction:"column",gap:2,children:[t.jsxs(pt,{name:"crop-width",gap:2,children:[t.jsx(Vn,{textColor:g,children:t.jsx(wr,{})}),t.jsx(ft,{"aria-label":a({id:c("asset-details.crop.width"),defaultMessage:"Width (px)"}),value:G,min:1,max:x.width||void 0,onValueChange:L=>{L!==void 0&&C({width:L})}},`crop-width-${at}`)]}),t.jsxs(pt,{name:"crop-height",gap:2,children:[t.jsx(Vn,{textColor:g,children:t.jsx(vr,{})}),t.jsx(ft,{"aria-label":a({id:c("asset-details.crop.height"),defaultMessage:"Height (px)"}),value:T,min:1,max:x.height||void 0,onValueChange:L=>{L!==void 0&&C({height:L})}},`crop-height-${at}`)]})]}),t.jsxs($,{position:"relative",children:[t.jsx(ie,{label:a({id:c("asset-details.crop.aspect-lock"),defaultMessage:"Lock aspect ratio"}),variant:B?"secondary":"ghost",onClick:We,children:t.jsx(Ge,{})}),t.jsx(_i,{})]})]}),t.jsxs($,{direction:"column",gap:2,marginLeft:"auto",children:[t.jsxs(pt,{name:"focal-x",gap:2,children:[t.jsx(re.Label,{textColor:g,children:a({id:c("asset-details.crop.focal-x-axis"),defaultMessage:"X"})}),t.jsx(ft,{"aria-label":a({id:c("asset-details.crop.focal-x"),defaultMessage:"Focal point X (px)"}),value:Pt,min:0,max:G||void 0,onValueChange:L=>{L!==void 0&&rt("x",L)},onBlur:lt},`focal-x-${Nt}`)]}),t.jsxs(pt,{name:"focal-y",gap:2,children:[t.jsx(re.Label,{textColor:g,children:a({id:c("asset-details.crop.focal-y-axis"),defaultMessage:"Y"})}),t.jsx(ft,{"aria-label":a({id:c("asset-details.crop.focal-y"),defaultMessage:"Focal point Y (px)"}),value:_t,min:0,max:T||void 0,onValueChange:L=>{L!==void 0&&rt("y",L)},onBlur:_e},`focal-y-${it}`)]})]})]})]})]}),t.jsxs(Oi,{alignItems:"center",children:[t.jsx(J,{variant:"tertiary",onClick:s,disabled:n,children:a({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),t.jsxs($,{gap:2,children:[i&&t.jsx(J,{variant:"secondary",onClick:()=>dt("copy"),loading:n,disabled:!Ne,children:a({id:c("asset-details.crop.save-as-copy"),defaultMessage:"Save as copy"})}),t.jsx(J,{variant:"default",onClick:()=>dt("apply"),loading:n,disabled:!Ne,children:a({id:c("asset-details.crop.apply"),defaultMessage:"Apply"})})]})]})]})})})},qe=M(H)`
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
`,Bi=M.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`,Ui=M($)`
  position: absolute;
  top: ${({theme:e})=>e.spaces[3]};
  right: ${({theme:e})=>e.spaces[3]};
  z-index: 3;
`,zi=M.video`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`,Ki=M.audio`
  width: 100%;
`,Gi=M.iframe`
  width: 100%;
  height: 100%;
  min-height: 200px;
  border: none;
`,Vi=M($)`
  height: 100%;
  aspect-ratio: 1;
  width: auto;
  max-width: 100%;
  margin: 0 auto;
  color: ${({theme:e})=>e.colors.neutral500};
  background: ${({theme:e})=>e.colors.neutral150};
`,Hi=M($)`
  position: absolute;
  inset: 0;
  z-index: 1;
`,mt=()=>{const{formatMessage:e}=F();return t.jsx(Hi,{justifyContent:"center",alignItems:"center",children:t.jsx(Ee,{children:e({id:"app.loading",defaultMessage:"Loading..."})})})},Wi=({asset:e,actions:n,isLoading:s=!1})=>{const{formatMessage:o}=F(),{alternativeText:r,ext:i,mime:a,url:l,updatedAt:u,isUrlSigned:p,isLocal:g}=e,f=u&&!p?new Date(u).getTime():void 0,m=C=>!C||f===void 0?C:C.includes("?")?`${C}&v=${f}`:`${C}?v=${f}`,j=m(be(l)),[b,v]=d.useState(!1);d.useEffect(()=>{v(!1)},[j]);const h=d.useRef(null);if(d.useEffect(()=>{const C=h.current;if(!C)return;const y=()=>{const E=C.parentElement;if(!E)return;const w=E.getBoundingClientRect(),I=C.offsetWidth,G=C.offsetHeight;!I||!G||!w.width||w.height};y();const k=new ResizeObserver(y);return k.observe(C),C.parentElement&&k.observe(C.parentElement),()=>k.disconnect()},[b]),a?.includes(Ce.Image)){const C=m(be(l));if(C)return t.jsxs(qe,{children:[(!b||s)&&t.jsx(mt,{}),n?t.jsx(Ui,{children:n}):null,t.jsx(ht,{children:t.jsx(Bi,{ref:h,src:C,alt:r||e.name||"",crossOrigin:!g&&p?"anonymous":void 0,onLoad:()=>v(!0),onError:()=>v(!0)})})]})}if(a?.includes(Ce.Video)&&j)return t.jsxs(qe,{children:[!b&&t.jsx(mt,{}),t.jsx(ht,{children:t.jsx(zi,{src:j,controls:!0,title:e.name,onLoadedData:()=>v(!0),onError:()=>v(!0),children:o({id:c("asset-details.videoNotSupported"),defaultMessage:"Your browser does not support the video tag."})})})]});if(a?.includes(Ce.Audio)&&j)return t.jsxs(qe,{children:[!b&&t.jsx(mt,{}),t.jsx(ht,{children:t.jsx($,{width:"100%",padding:4,justifyContent:"center",alignItems:"center",height:"100%",minHeight:"12rem",children:t.jsx(Ki,{src:j,controls:!0,onLoadedData:()=>v(!0),onError:()=>v(!0)})})})]});if((i?.toLowerCase()==="pdf"||i?.toLowerCase()===".pdf"||a==="application/pdf")&&j)return t.jsxs(qe,{children:[!b&&t.jsx(mt,{}),t.jsx(ht,{children:t.jsx(Gi,{src:`${j}#toolbar=0`,title:e.name,onLoad:()=>v(!0)})})]});const S=st(a,i);return t.jsx(qe,{children:t.jsxs(Vi,{justifyContent:"center",alignItems:"center",gap:1,direction:"column",hasRadius:!0,children:[t.jsx(S,{width:24,height:24}),t.jsx(P,{variant:"pi",children:o({id:c("asset-details.noPreview"),defaultMessage:"No preview available"})})]})})},yo=d.createContext(null),jo=()=>{const e=d.useContext(yo);if(!e)throw new Error("useDrawerNotify must be used within AssetDetails");return e},wo=d.createContext(null),vo=()=>{const e=d.useContext(wo);if(!e)throw new Error("useAssetOperation must be used within AssetDetails");return e},Co=()=>{const[{query:e},n]=Le(),s=mo(e?.[xt]),o=s!==null,[r,i]=d.useState(o),a=d.useRef(null);d.useEffect(()=>{o&&(a.current=s,i(!0))},[o,s]);const l=d.useCallback(g=>{g.target===g.currentTarget&&!o&&i(!1)},[o]),u=d.useCallback(g=>{n(xe(e,{[xt]:String(g)}),"push",!0)},[e,n]),p=d.useCallback(()=>{n(xe(e,{[xt]:void 0}),"push",!0)},[e,n]);return{assetId:o?s:a.current,isVisible:o,shouldRenderDrawer:r,onCloseAnimationEnd:l,openDetails:u,closeDetails:p}},qi=M($)`
  flex: 0 0 calc(50% - ${({theme:e})=>e.spaces[2]});
`,$e=({label:e,value:n})=>t.jsxs(qi,{direction:"column",justifyContent:"flex-start",alignItems:"flex-start",gap:1,children:[t.jsx(P,{variant:"sigma",textColor:"neutral600",fontWeight:"semiBold",textTransform:"uppercase",children:e}),t.jsx(P,{variant:"pi",textColor:"neutral700",children:n??"-"})]}),Yi=M(H)`
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
`,Qi=M(H)`
  position: absolute;
  top: ${({theme:e})=>e.spaces[2]};
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  width: calc(100% - ${({theme:e})=>e.spaces[2]});
`,Xi=e=>e.isDeleting?{id:c("asset-details.delete.loading"),defaultMessage:"Deleting the file…"}:e.isCropCopying?{id:c("asset-details.crop.loading"),defaultMessage:"Saving the copy…"}:e.isReplacing?{id:c("asset-details.replace.loading"),defaultMessage:"Replacing the file…"}:null,Zi=M(St)`
  width: 1.6rem;
  height: 1.6rem;

  path {
    fill: ${({theme:e})=>e.colors.warning500};
  }
`,Ht=({name:e,label:n,required:s,disabled:o})=>{const{formatMessage:r}=F(),i=Rs(e),a=xn("DetailField",f=>f.isSubmitting),l=i.value??"",[u,p]=d.useState(l);d.useEffect(()=>{p(l)},[l]);const g=r({id:c("asset-details.field.empty"),defaultMessage:"{label} is currently empty."},{label:n});return t.jsxs(re.Root,{name:e,required:s,children:[t.jsx(re.Label,{children:n}),t.jsx(Es,{value:u,onChange:f=>{p(f.target.value),i.onChange(e,f.target.value)},endAction:u?void 0:t.jsx(bn,{label:g,children:t.jsx(Zi,{"aria-label":g,role:"img"})}),type:"text",disabled:a||o})]})},Ji=({label:e,rootLabel:n,folders:s,disabled:o})=>{const r=Rs("folder"),i=xn("LocationField",a=>a.isSubmitting);return t.jsxs(re.Root,{name:"folder",required:!0,children:[t.jsx(re.Label,{children:e}),t.jsxs(Ts,{value:r.value==null?"":String(r.value),onChange:a=>{const l=a===""?null:Number(a);r.onChange("folder",l)},disabled:i||o,children:[t.jsx(jt,{value:"",children:n}),s.map(a=>t.jsx(jt,{value:String(a.id),children:a.name},a.id))]})]})},el=()=>{const{formatMessage:e}=F(),{deleteAsset:n,isDeleting:s}=vo(),[o,r]=d.useState(!1),i=async()=>{await n(),r(!1)},a=e({id:c("asset-details.delete.trigger"),defaultMessage:"Delete this file"});return t.jsxs(X.Root,{open:o,onOpenChange:r,children:[t.jsx(X.Trigger,{children:t.jsx(ie,{label:a,variant:"danger-light",children:t.jsx(Je,{})})}),t.jsxs(X.Content,{children:[t.jsx(X.Header,{children:e({id:c("asset-details.delete.title"),defaultMessage:"Delete this media file?"})}),t.jsx(X.Body,{icon:t.jsx(St,{width:"24px",height:"24px",fill:"danger600"}),textAlign:"center",children:e({id:c("asset-details.delete.description"),defaultMessage:"This file cannot be recovered once deleted. If it is currently in use, linked content will break and image containers will be empty."})}),t.jsxs(X.Footer,{children:[t.jsx(X.Cancel,{children:t.jsx(J,{variant:"tertiary",disabled:s,fullWidth:!0,children:e({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})}),t.jsx(X.Action,{children:t.jsx(J,{variant:"danger-light",loading:s,onClick:i,fullWidth:!0,children:e({id:"app.components.Button.confirm",defaultMessage:"Confirm"})})})]})]})]})},tl=({asset:e})=>{const{formatMessage:n}=F(),{copy:s}=yn(),o=jo(),r=async()=>{const i=be(e.url);if(!i)return;const a=await s(i);o({type:a?"success":"danger",message:n(a?{id:c("asset-details.copy-link.success"),defaultMessage:"Link copied."}:{id:c("asset-details.copy-link.error"),defaultMessage:"Failed to copy the link."})})};return t.jsx(ie,{label:n({id:c("asset-details.copy-link.trigger"),defaultMessage:"Copy link"}),variant:"tertiary",onClick:r,children:t.jsx(Ge,{})})},nl=({asset:e})=>{const{formatMessage:n}=F(),s=jo(),[o,r]=d.useState(!1),i=async()=>{const a=be(e.url);if(a){r(!0);try{await uo(a,e.name)}catch{s({type:"danger",message:n({id:c("asset-details.download.error"),defaultMessage:"Failed to download the file."})})}finally{r(!1)}}};return t.jsx(ie,{label:n({id:c("asset-details.download.trigger"),defaultMessage:"Download"}),variant:"tertiary",onClick:i,disabled:o,children:t.jsx(Fs,{})})},sl=({mime:e})=>{const{formatMessage:n}=F(),{replaceAsset:s,isReplacing:o}=vo(),r=d.useRef(null),[i,a]=d.useState(!1),l=Et({mime:e}),u=()=>{a(!0)},p=()=>{a(!1),r.current?.click()},g=async f=>{const m=f.target.files?.[0];f.target.value="",m&&await s(m)};return t.jsxs(t.Fragment,{children:[t.jsx(Oe,{children:t.jsx("input",{ref:r,type:"file",accept:e??"",multiple:!1,onChange:g,"aria-hidden":!0,tabIndex:-1})}),t.jsx(ie,{label:n({id:c("asset-details.replace.trigger"),defaultMessage:"Replace this file"}),variant:"tertiary",onClick:u,disabled:o,children:t.jsx(As,{})}),t.jsx(X.Root,{open:i,onOpenChange:a,children:t.jsxs(X.Content,{children:[t.jsx(X.Header,{children:n({id:c("asset-details.replace.title"),defaultMessage:"Replace this media file?"})}),t.jsx(X.Body,{textAlign:"center",children:t.jsxs($,{direction:"column",textAlign:"center",children:[t.jsx(P,{variant:"omega",children:n({id:c("asset-details.replace.description"),defaultMessage:"Current content will be permanently replaced."})}),l?t.jsx(P,{variant:"omega",children:n({id:c("asset-details.replace.description.ai"),defaultMessage:"AI will generate new metadata after upload."})}):null]})}),t.jsxs(X.Footer,{children:[t.jsx(X.Cancel,{children:t.jsx(J,{variant:"tertiary",fullWidth:!0,children:n({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})}),t.jsx(X.Action,{children:t.jsx(J,{variant:"secondary",onClick:p,fullWidth:!0,children:n({id:c("asset-details.replace.continue"),defaultMessage:"Continue"})})})]})]})})]})},ol=({onCrop:e})=>{const{formatMessage:n}=F(),s=xn("AssetImageActions",o=>o.isSubmitting);return t.jsx($,{direction:"column",gap:2,children:t.jsx(ie,{label:n({id:c("asset-details.crop.trigger"),defaultMessage:"Crop"}),variant:"tertiary",onClick:e,disabled:s||!e,children:t.jsx($s,{})})})},rl=({asset:e,closeDetails:n})=>{const{formatMessage:s,formatDate:o}=F(),r=nt(),{canCreate:i,canUpdate:a,canDownload:l,canCopyLink:u}=ue(),{data:p=[]}=di(),{toggleNotification:g}=ye(),[f]=fi(),{trackUsage:m}=Se(),[j,{isLoading:b}]=co(),[v,{isLoading:h}]=hi(),[x,{isLoading:S}]=Ir(),[C,y]=d.useState(!1),[k,E]=d.useState(null);d.useEffect(()=>{if(!k)return;const U=window.setTimeout(()=>E(null),5e3);return()=>window.clearTimeout(U)},[k]);const w=d.useCallback(U=>E(U),[]),I=e.mime?.includes(Ce.Image),G={name:e.name??"",caption:e.caption??"",alternativeText:e.alternativeText??"",folder:typeof e.folder=="object"&&e.folder!==null?e.folder.id??null:e.folder??null},T=async U=>{const K={name:U.name,caption:U.caption,alternativeText:U.alternativeText,folder:U.folder},V=await f({id:e.id,fileInfo:K});if("error"in V){w({type:"danger",message:r(V.error,s({id:c("asset-details.update.error"),defaultMessage:"Failed to update the file."}))});return}m("didEditMediaLibraryElements",{location:le,type:e.mime?.split("/")[0],changeLocation:U.folder!==G.folder}),w({type:"success",message:s({id:c("asset-details.update.success"),defaultMessage:"File updated"})})},{title:B}=ho(typeof e.folder=="object"&&e.folder!==null?e.folder.id??null:e.folder??null),D=d.useCallback(async U=>{const K=await j({id:e.id,file:U,fileInfo:{name:e.name}});if("error"in K){w({type:"danger",message:r(K.error,s({id:c("asset-details.replace.error"),defaultMessage:"Failed to replace the file."}))});return}m("didReplaceMedia",{location:le}),w({type:"success",message:s({id:c("asset-details.replace.success"),defaultMessage:"File replaced."})})},[e.id,e.name,s,r,w,j,m]),R=d.useCallback(async()=>{const U=await v(e.id);if("error"in U){w({type:"danger",message:r(U.error,s({id:c("asset-details.delete.error"),defaultMessage:"Failed to delete the asset."}))});return}g({type:"success",message:s({id:c("asset-details.delete.success"),defaultMessage:"1 element have been deleted from {folderName}"},{folderName:B})}),n()},[e.id,n,v,B,s,r,w,g]),A=U=>{w({type:"danger",message:r(U,s({id:c("asset-details.crop.error"),defaultMessage:"Failed to update the file."}))})},Y=async(U,K)=>{y(!1);const V=await j({id:e.id,file:U,fileInfo:{focalPoint:K}});if("error"in V){A(V.error);return}m("didCropFile",{location:le,duplicatedFile:!1}),w({type:"success",message:s({id:c("asset-details.crop.success"),defaultMessage:"File updated"})})},W=async(U,K)=>{y(!1);const V=await x({file:U,fileInfo:{name:e.name,caption:e.caption??"",alternativeText:e.alternativeText??"",folder:G.folder,focalPoint:K}});if("error"in V){A(V.error);return}m("didCropFile",{location:le,duplicatedFile:!0}),w({type:"success",message:s({id:c("asset-details.crop.copy-success"),defaultMessage:"Copy created."})})},Z=d.useMemo(()=>({replaceAsset:D,deleteAsset:R,isReplacing:b,isDeleting:h}),[D,R,b,h]);return t.jsx(yo.Provider,{value:w,children:t.jsx(wo.Provider,{value:Z,children:t.jsx(Yi,{children:t.jsx(Dr,{method:"POST",initialValues:G,onSubmit:T,children:({modified:U,isSubmitting:K,values:V,resetForm:ee})=>{const z=(V.name??"").trim()==="",_=Xi({isDeleting:h,isReplacing:b,isCropCopying:S});return t.jsxs(t.Fragment,{children:[t.jsx($r,{onProceed:ee}),C&&I?t.jsx(Ni,{asset:e,onClose:()=>y(!1),onApply:Y,onSaveAsCopy:W,canSaveAsCopy:i}):null,_?t.jsx(xo,{children:s(_)}):null,k?t.jsx(Qi,{children:t.jsx(ks,{variant:k.type==="success"?"success":"danger",closeLabel:s({id:"global.close",defaultMessage:"Close"}),onClose:()=>E(null),children:k.message})}):null,t.jsxs(ke.ScrollableContent,{children:[t.jsx(Wi,{asset:e,actions:I&&a?t.jsx(ol,{onCrop:()=>y(!0)}):null}),t.jsxs($,{direction:"column",alignItems:"stretch",gap:4,paddingTop:4,paddingBottom:4,paddingLeft:5,paddingRight:5,children:[t.jsx(P,{variant:"beta",fontWeight:"semiBold",tag:"h3",children:s({id:c("asset-details.fileInfo"),defaultMessage:"File info"})}),t.jsxs($,{wrap:"wrap",gap:4,background:"neutral100",paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:6,alignItems:"flex-start",children:[t.jsx($e,{label:s({id:c("asset-details.creationDate"),defaultMessage:"Creation date"}),value:e.createdAt?o(new Date(e.createdAt),{dateStyle:"long",timeStyle:"short"}):null}),t.jsx($e,{label:s({id:c("asset-details.lastUpdated"),defaultMessage:"Last updated"}),value:e.updatedAt?o(new Date(e.updatedAt),{dateStyle:"long",timeStyle:"short"}):null}),t.jsx($e,{label:s({id:c("asset-details.createdBy"),defaultMessage:"Created by"}),value:e.createdBy?pa({firstname:e.createdBy.firstname??void 0,lastname:e.createdBy.lastname??void 0,username:e.createdBy.username??void 0,email:e.createdBy.email??void 0})??"-":null}),t.jsx($e,{label:s({id:c("asset-details.size"),defaultMessage:"Size"}),value:e.size?rn(e.size,1):null}),I&&(e.width!=null||e.height!=null)&&t.jsx($e,{label:s({id:c("asset-details.dimensions"),defaultMessage:"Dimensions"}),value:e.width!=null&&e.height!=null?`${e.width} × ${e.height}`:null}),t.jsx($e,{label:s({id:c("asset-details.extension"),defaultMessage:"Extension"}),value:Ds(e.ext)}),t.jsx($e,{label:s({id:c("asset-details.assetId"),defaultMessage:"Asset ID"}),value:String(e.id)})]}),t.jsx(Ht,{name:"name",label:s({id:c("asset-details.fileName"),defaultMessage:"File name"}),required:!0,disabled:!a}),t.jsx(Ji,{label:s({id:c("asset-details.location"),defaultMessage:"Location"}),rootLabel:s({id:c("plugin.home"),defaultMessage:"Home"}),folders:p,disabled:!a}),t.jsx(Ht,{name:"caption",label:s({id:c("asset-details.caption"),defaultMessage:"Caption"}),disabled:!a}),t.jsx(Ht,{name:"alternativeText",label:s({id:c("asset-details.alternativeText"),defaultMessage:"Alternative text"}),disabled:!a})]})]}),(a||u||l)&&t.jsxs($,{justifyContent:"space-between",alignItems:"center",gap:2,padding:3,borderColor:"neutral150",borderStyle:"solid",borderWidth:"1px 0 0 0",background:"neutral0",children:[t.jsxs($,{gap:2,children:[a&&t.jsx(el,{}),u&&t.jsx(tl,{asset:e}),l&&t.jsx(nl,{asset:e}),a&&t.jsx(sl,{mime:e.mime})]}),a&&t.jsx(J,{type:"submit",variant:"default",loading:K,disabled:!U||K||z,children:s({id:c("asset-details.save"),defaultMessage:"Save changes"})})]})]})}},e.id)})})})},al=M($)`
  flex-shrink: 0;
`,il=M(P)`
  min-width: 0;
`,ll=({asset:e,closeDetails:n})=>{const s=e?st(e.mime,e.ext):Mr;return t.jsxs($,{gap:2,paddingLeft:5,paddingTop:3,paddingBottom:3,paddingRight:3,borderColor:"neutral150",borderStyle:"solid",borderWidth:"0 0 1px 0",children:[t.jsx(al,{children:t.jsx(s,{width:20,height:20})}),t.jsx(ke.Title,{asChild:!0,children:t.jsx(il,{variant:"omega",fontWeight:"semiBold",overflow:"hidden",ellipsis:!0,tag:"h2",children:e.name})}),t.jsx(H,{marginLeft:"auto",children:t.jsx(ke.CloseButton,{onClose:n,children:t.jsx(Sr,{})})})]})},dl=({assetId:e,closeDetails:n})=>{const{formatMessage:s}=F(),{data:o,isLoading:r,error:i}=pi(e,{refetchOnMountOrArgChange:!1,refetchOnReconnect:!1,refetchOnFocus:!1});return r?t.jsx($,{justifyContent:"center",padding:8,children:t.jsx(Ee,{children:s({id:"app.loading",defaultMessage:"Loading..."})})}):i||!o?t.jsx($,{direction:"column",alignItems:"stretch",gap:4,padding:4,children:t.jsx(ks,{variant:"danger",closeLabel:s({id:"global.close",defaultMessage:"Close"}),onClose:n,children:s({id:c("asset-details.error"),defaultMessage:"Failed to load file details."})})}):t.jsxs(t.Fragment,{children:[t.jsx(ll,{asset:o,closeDetails:n}),t.jsx(rl,{asset:o,closeDetails:n})]})},cl=(e,n)=>!n||e.detail.originalEvent.button!==0?!0:e.target instanceof Element?e.target.closest(ji)!==null&&e.target.closest(yi)===null:!1,ul=()=>{const{formatMessage:e}=F(),{assetId:n,isVisible:s,shouldRenderDrawer:o,onCloseAnimationEnd:r,closeDetails:i}=Co();return!o||n===null?null:t.jsxs(ke.Root,{isVisible:s,onClose:i,children:[t.jsx("div",{children:t.jsxs(Oe,{children:[t.jsx(ke.Title,{children:e({id:c("asset-details.title"),defaultMessage:"File details"})}),t.jsx(ke.Description,{children:e({id:c("asset-details.description"),defaultMessage:"Displays file information and metadata"})})]})}),t.jsx(ke.Body,{animationDirection:"left",width:"41.6rem",height:"100dvh",onAnimationEnd:r,onPointerDownOutside:a=>{cl(a,s)&&a.preventDefault()},children:t.jsx(dl,{assetId:n,closeDetails:i})})]})},te=e=>e.currentTarget instanceof Node&&e.target instanceof Node&&e.currentTarget.contains(e.target),Fe=e=>`asset:${e}`,Ae=e=>`folder:${e}`,Hn=(e,n)=>{const s=new Set;return e.forEach(o=>{const[r,i]=o.split(":");r===n&&s.add(Number(i))}),s},Mo=()=>({selectedKeys:new Set,anchorKey:null}),gl=(e,n)=>{const s=new Set(e.selectedKeys);return s.has(n)?s.delete(n):s.add(n),{selectedKeys:s,anchorKey:n}},pl=(e,n)=>{const s=new Set(e.selectedKeys);return s.delete(n),{selectedKeys:s,anchorKey:e.anchorKey===n?null:e.anchorKey}},fl=(e,n,s)=>{const o=n.indexOf(s);if(o===-1)return e;const r=e.anchorKey===null?-1:n.indexOf(e.anchorKey);if(r===-1)return{selectedKeys:new Set([s]),anchorKey:s};const i=Math.min(r,o),a=Math.max(r,o);return{selectedKeys:new Set(n.slice(i,a+1)),anchorKey:e.anchorKey}},Wn=e=>({selectedKeys:new Set(e),anchorKey:e.length>0?e[e.length-1]:null}),hl=()=>Mo(),ml=(e,n)=>{if(n.length===0)return{allSelected:!1,isIndeterminate:!1};const s=n.reduce((r,i)=>e.has(i)?r+1:r,0),o=s===n.length;return{allSelected:o,isIndeterminate:s>0&&!o}},$n=d.createContext(null),xl=({children:e,disabled:n=!1})=>{const[s,o]=d.useState(Mo),r=d.useCallback(b=>!n&&s.selectedKeys.has(b),[n,s.selectedKeys]),i=d.useCallback(b=>{n||o(v=>gl(v,b))},[n]),a=d.useCallback((b,v)=>{n||o(h=>fl(h,b,v))},[n]),l=d.useCallback(b=>{n||o(Wn(b))},[n]),u=d.useCallback(b=>{n||o(Wn([b]))},[n]),p=d.useCallback(b=>o(v=>pl(v,b)),[]),g=d.useCallback(()=>o(hl()),[]),f=d.useMemo(()=>Hn(s.selectedKeys,"asset"),[s.selectedKeys]),m=d.useMemo(()=>Hn(s.selectedKeys,"folder"),[s.selectedKeys]),j=d.useMemo(()=>({selectedKeys:s.selectedKeys,selectedIds:f,selectedFolderIds:m,anchorKey:s.anchorKey,isSelected:r,toggle:i,selectRange:a,selectAll:l,selectOnly:u,deselect:p,clear:g}),[s.selectedKeys,f,m,s.anchorKey,r,i,a,l,u,p,g]);return d.createElement($n.Provider,{value:j},e)},he=()=>{const e=d.useContext($n);if(!e)throw new Error("useAssetSelection must be used within an AssetSelectionProvider");return e},So=()=>d.useContext($n),Io=d.createContext(null),bl=({children:e})=>{const[n,s]=d.useState({}),o=d.useCallback((l,u)=>(s(p=>({...p,[l]:u})),()=>s(p=>{const{[l]:g,...f}=p;return f})),[]),r=d.useCallback(l=>n[l]!==void 0,[n]),i=d.useCallback(l=>n[l]??null,[n]),a=d.useMemo(()=>({isBusy:r,getBusyMessage:i,markBusy:o}),[r,i,o]);return d.createElement(Io.Provider,{value:a},e)},kn=()=>d.useContext(Io),yl=e=>{if(!e)return null;const n=Number(e);return Number.isFinite(n)?n:null},Ve=()=>{const[{query:e},n]=Le(),s=yl(e?.folder),o=d.useCallback(l=>{n({folder:String(l.id),_q:void 0})},[n]),r=d.useCallback(()=>{n({folder:"",_q:""},"remove")},[n]),i=d.useCallback(()=>{n(xe(e,{folder:void 0}))},[e,n]);d.useEffect(()=>{e?.folder&&s===null&&i()},[e?.folder,s,i]);const a=d.useCallback(l=>{l==null?r():n({folder:String(l),_q:void 0})},[r,n]);return{currentFolderId:s,navigateToFolder:o,navigateToRoot:r,navigateToFolderId:a}},Rn=({folders:e,assets:n,mixedItems:s})=>s?s.map(o=>o.kind==="folder"?Ae(o.folder.id):Fe(o.asset.id)):[...e.map(o=>Ae(o.id)),...n.map(o=>Fe(o.id))],ot=M(O.Content).attrs({maxHeight:"min(var(--radix-popper-available-height, 100vh), 100vh)"})`
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
`,Do=(e,n)=>{for(const s of e){if(s.id===n)return s;const o=Do(s.children,n);if(o)return o}return null},jl=e=>{const n=new Set,s=o=>{for(const r of o.children)r.id!=null&&n.add(r.id),s(r)};return s(e),n},wl=(e,n,s)=>{if(n===s)return!0;const o=Do(e,n);return o?jl(o).has(s):!1},vl=e=>e.kind==="file"?e.folderId==null:e.parentId==null,Ke=({items:e,targetFolderId:n,folderStructure:s})=>{if(e.length===0)return!1;if(n===null)return e.some(r=>!vl(r));const o=new Set(e.filter(r=>r.kind==="folder").map(r=>r.id));if(o.has(n))return!1;for(const r of o)if(wl(s,r,n))return!1;for(const r of e)if(r.kind==="file"&&r.folderId===n||r.kind==="folder"&&r.parentId===n)return!1;return!0},En=(e,n=new Set,s="")=>e.flatMap(o=>{if(o.id==null||n.has(o.id))return[];const r=s?`${s} / ${o.name??""}`:o.name??"";return[{id:o.id,label:r},...En(o.children??[],n,r)]}),$o=({formatMessage:e,count:n,source:s,destination:o})=>s===null?e({id:c("list.bulk-actions.move.success-multiple-sources"),defaultMessage:"{count, plural, =1 {# element has} other {# elements have}} been moved to {destination}"},{count:n,destination:o}):e({id:c("list.bulk-actions.move.success"),defaultMessage:"{count, plural, =1 {# element has} other {# elements have}} been moved from {source} to {destination}"},{count:n,source:s,destination:o}),Ze=e=>e.kind==="folder"?e.parentId:e.folderId,Cl=e=>ko(e)?Ze(e[0]):null,ko=e=>{if(e.length===0)return!1;const n=Ze(e[0]);return e.every(s=>Ze(s)===n)},Ml=M(oe.Content)`
  max-width: 51.6rem;
`,Tt=({open:e,onClose:n,items:s,onSuccess:o})=>{const{formatMessage:r}=F(),i=nt(),{toggleNotification:a}=ye(),{data:l=[],isUninitialized:u,isLoading:p,isError:g}=In(void 0,{skip:!e}),[f,{isLoading:m}]=io(),j=d.useMemo(()=>s.filter(R=>R.kind==="file").map(R=>R.id),[s]),b=d.useMemo(()=>s.filter(R=>R.kind==="folder").map(R=>R.id),[s]),v=ko(s),h=Cl(s),{data:x}=Sn({id:h},{skip:h===null}),[S,C]=d.useState(""),y=r({id:c("plugin.name"),defaultMessage:"Media Library"}),k=d.useMemo(()=>En(l,new Set(b)).filter(R=>Ke({items:s,targetFolderId:R.id,folderStructure:l})),[l,b,s]),E=d.useMemo(()=>Ke({items:s,targetFolderId:null,folderStructure:l}),[s,l]),w=E?"":k[0]?.id.toString()??"";d.useEffect(()=>{C(w)},[e,w]);const I=!u&&!p&&!g,G=I&&k.length===0&&!E,T=s.length,B=async()=>{if(m||!I)return;const R=S===""?null:Number(S);try{await f({fileIds:j,folderIds:b,destinationFolderId:R}).unwrap()}catch(W){a({type:"danger",message:i(W,r({id:c("list.bulk-actions.move.error"),defaultMessage:"An error occurred while moving the items."}))});return}const A=v?h===null?y:x?.name??y:null,Y=R===null?y:k.find(W=>W.id===R)?.label??y;a({type:"success",message:$o({formatMessage:r,count:T,source:A,destination:Y})}),o?.(),n()},D=()=>g?t.jsx(P,{textColor:"danger600",children:r({id:c("list.bulk-actions.move.load-error"),defaultMessage:"Couldn't load the folder list. Please try again."})}):G?t.jsx(P,{textColor:"neutral600",children:r({id:c("list.bulk-actions.move.no-destination"),defaultMessage:"There is no other folder to move this to."})}):t.jsxs(re.Root,{name:"destination",children:[t.jsx(re.Label,{children:r({id:c("list.bulk-actions.move.location"),defaultMessage:"Location"})}),t.jsxs(Ts,{value:S,onChange:R=>C(String(R)),disabled:m||!I,children:[E&&t.jsx(jt,{value:"",children:y}),k.map(R=>t.jsx(jt,{value:String(R.id),children:R.label},R.id))]})]});return t.jsx(oe.Root,{open:e,onOpenChange:R=>{!R&&!m&&n()},children:t.jsxs(Ml,{children:[t.jsx(oe.Header,{children:t.jsx(oe.Title,{children:r({id:c("list.bulk-actions.move.title"),defaultMessage:"Move elements to"})})}),t.jsx(oe.Body,{children:D()}),t.jsx(oe.Footer,{children:t.jsxs($,{gap:2,justifyContent:"space-between",width:"100%",children:[t.jsx(J,{variant:"tertiary",onClick:n,disabled:m,type:"button",children:r({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),t.jsx(J,{onClick:B,loading:m,disabled:!I||G,children:r({id:c("list.bulk-actions.move.submit"),defaultMessage:"Move"})})]})})]})})},Ft=({open:e,onClose:n,target:s,onSuccess:o,onPendingChange:r})=>{const{formatMessage:i}=F(),{toggleNotification:a}=ye(),l=nt(),[u,{isLoading:p}]=mi(),g=s.fileIds.length+s.folderIds.length;d.useEffect(()=>{r?.(p)},[p,r]);const f=async m=>{if(m.preventDefault(),p)return;const j=await u(s);if("error"in j){a({type:"danger",message:l(j.error,i({id:c("list.bulk-actions.delete.error"),defaultMessage:"An error occurred while deleting the items."}))});return}n(),a({type:"success",message:i({id:c("list.bulk-actions.delete.success"),defaultMessage:"{count, plural, =1 {# item has been deleted} other {# items have been deleted}}"},{count:g})}),o?.()};return t.jsx(X.Root,{open:e,onOpenChange:m=>{!m&&!p&&n()},children:t.jsxs(X.Content,{children:[t.jsx(X.Header,{children:i({id:c("list.bulk-actions.delete.confirm.title"),defaultMessage:"Delete {count, plural, =1 {# item} other {# items}}?"},{count:g})}),t.jsx(X.Body,{icon:t.jsx(St,{width:"24px",height:"24px",fill:"danger600"}),textAlign:"center",children:t.jsx(P,{children:i({id:c("list.bulk-actions.delete.confirm.description.are-you-sure"),defaultMessage:"These items cannot be recovered once deleted, and deleting a folder also deletes everything inside it. If they are currently in use, linked content will break and image containers will be empty."})})}),t.jsxs(X.Footer,{children:[t.jsx(X.Cancel,{children:t.jsx(J,{variant:"tertiary",disabled:p,fullWidth:!0,children:i({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})}),t.jsx(X.Action,{children:t.jsx(J,{variant:"danger-light",loading:p,onClick:f,fullWidth:!0,children:i({id:"app.components.Button.confirm",defaultMessage:"Confirm"})})})]})]})})},Ro=({asset:e,dragData:n,permissions:s,children:o})=>{const{formatMessage:r}=F(),i=nt(),{copy:a}=yn(),{toggleNotification:l}=ye(),{deselect:u}=he(),p=kn()?.markBusy??(()=>()=>{}),g=ue(),{canUpdate:f,canDownload:m,canCopyLink:j,isLoading:b}=s??g,[v,{isLoading:h}]=co(),x=Et({mime:e.mime}),S=d.useRef(null),[C,y]=d.useState(!1),[k,E]=d.useState(!1),[w,I]=d.useState(!1),[G,T]=d.useState(!1),[B,D]=d.useState(!1),R=d.useMemo(()=>[n],[n]);d.useEffect(()=>{const _=S.current;if(!_)return;const q=()=>D(!1);return _.addEventListener("cancel",q),()=>_.removeEventListener("cancel",q)},[]);const A=()=>{y(!1),D(!0),S.current?.click()},Y=async _=>{const q=_.target.files?.[0];if(_.target.value="",D(!1),!q)return;const ae=p(e.id,r({id:c("asset-details.replace.loading"),defaultMessage:"Replacing the file…"}));let de;try{de=await v({id:e.id,file:q,fileInfo:{name:e.name}})}finally{ae()}if("error"in de){l({type:"danger",message:i(de.error,r({id:c("asset-details.replace.error"),defaultMessage:"Failed to replace the file."}))});return}l({type:"success",message:r({id:c("asset-details.replace.success"),defaultMessage:"File replaced."})})},W=async()=>{const _=be(e.url);if(!_)return;const q=await a(_);l({type:q?"success":"danger",message:r(q?{id:c("asset-details.copy-link.success"),defaultMessage:"Link copied."}:{id:c("asset-details.copy-link.error"),defaultMessage:"Failed to copy the link."})})},Z=async()=>{const _=be(e.url);if(_){T(!0);try{await uo(_,e.name)}catch{l({type:"danger",message:r({id:c("asset-details.download.error"),defaultMessage:"Failed to download the file."})})}finally{T(!1)}}},U=f||j||m,K=f,V=(j||m)&&K,ee=t.jsxs(t.Fragment,{children:[f&&t.jsx(O.Item,{startIcon:t.jsx(As,{}),disabled:h,onSelect:()=>y(!0),children:r({id:c("list.assets.actions.replace"),defaultMessage:"Replace media"})}),j&&t.jsx(O.Item,{startIcon:t.jsx(Ge,{}),onSelect:W,children:r({id:c("list.assets.actions.copy-link"),defaultMessage:"Copy link to media"})}),m&&t.jsx(O.Item,{startIcon:t.jsx(Fs,{}),disabled:G,onSelect:Z,children:r({id:c("list.assets.actions.download"),defaultMessage:"Download media"})}),V&&t.jsx(O.Separator,{}),f&&t.jsxs(t.Fragment,{children:[t.jsx(O.Item,{startIcon:t.jsx(It,{}),onSelect:()=>E(!0),children:r({id:c("list.assets.actions.move"),defaultMessage:"Move to folder"})}),t.jsx(O.Item,{startIcon:t.jsx(Je,{}),variant:"danger",onSelect:()=>I(!0),children:r({id:c("list.assets.actions.delete"),defaultMessage:"Delete"})})]})]}),z=t.jsxs(t.Fragment,{children:[t.jsx(Oe,{children:t.jsx("input",{ref:S,type:"file",accept:e.mime??"",multiple:!1,onChange:Y,"aria-hidden":!0,tabIndex:-1})}),t.jsx(X.Root,{open:C,onOpenChange:y,children:t.jsxs(X.Content,{children:[t.jsx(X.Header,{children:r({id:c("asset-details.replace.title"),defaultMessage:"Replace this media file?"})}),t.jsx(X.Body,{textAlign:"center",children:t.jsxs($,{direction:"column",textAlign:"center",children:[t.jsx(P,{variant:"omega",children:r({id:c("asset-details.replace.description"),defaultMessage:"Current content will be permanently replaced."})}),x?t.jsx(P,{variant:"omega",children:r({id:c("asset-details.replace.description.ai"),defaultMessage:"AI will generate new metadata after upload."})}):null]})}),t.jsxs(X.Footer,{children:[t.jsx(X.Cancel,{children:t.jsx(J,{variant:"tertiary",fullWidth:!0,children:r({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})}),t.jsx(X.Action,{children:t.jsx(J,{variant:"secondary",onClick:A,fullWidth:!0,children:r({id:c("asset-details.replace.continue"),defaultMessage:"Continue"})})})]})]})}),k&&t.jsx(Tt,{open:!0,onClose:()=>E(!1),items:R,onSuccess:()=>u(Fe(e.id))}),w&&t.jsx(Ft,{open:!0,onClose:()=>I(!1),target:{fileIds:[e.id],folderIds:[]},onSuccess:()=>u(Fe(e.id))})]});return t.jsx(t.Fragment,{children:o({items:ee,dialogs:z,hasActions:b||U||K,isBusy:C||k||w||B})})},Eo=({asset:e,dragData:n})=>{const{formatMessage:s}=F();return t.jsx(Ro,{asset:e,dragData:n,children:({items:o,dialogs:r,hasActions:i})=>i?t.jsxs(t.Fragment,{children:[t.jsxs(O.Root,{modal:!1,children:[t.jsx(O.Trigger,{tag:ie,icon:t.jsx(jn,{}),variant:"ghost",label:s({id:c("control-card.more-actions"),defaultMessage:"More actions"})}),t.jsx(ot,{popoverPlacement:"bottom-end",zIndex:2,minWidth:"22rem",children:o})]}),r]}):null})},Sl=e=>{const n=[],s=[];for(const o of e)o.kind==="file"?n.push(o.id):s.push(o.id);return{fileIds:n,folderIds:s}},qn=(e,n,s)=>{if(n===null)return s;const o=r=>{for(const i of r){if(i.id===n)return i;const a=o(i.children??[]);if(a)return a}return null};return o(e)?.name??s},Yn=(e,n,s,o)=>{const r=e.kind==="file"?Fe(e.id):Ae(e.id),i=Ze(e);if(!n||!n.has(r))return{items:[e],fromSelection:!1,activeSourceFolderId:i,spansMultipleSources:!1};const a=[];return n.forEach(l=>{const u=l.indexOf(":"),p=l.slice(0,u),g=Number(l.slice(u+1));if(p==="asset"){if(e.kind==="file"&&e.id===g){a.push(e);return}a.push({kind:"file",id:g,name:"",folderId:vt(s,"file",g,o)});return}if(e.kind==="folder"&&e.id===g){a.push(e);return}a.push({kind:"folder",id:g,name:"",parentId:vt(s,"folder",g,o)})}),{items:a,fromSelection:!0,activeSourceFolderId:i,spansMultipleSources:a.some(l=>Ze(l)!==i)}},Il=(e,n)=>{const s=new Set;if(e.length===0)return s;Ke({items:e,targetFolderId:null,folderStructure:n})&&s.add(null);for(const{id:o}of En(n))Ke({items:e,targetFolderId:o,folderStructure:n})&&s.add(o);return s},Dl=e=>`file:${e}`,$l=e=>`folder:${e}`,kl=e=>`folder-target:${e}`,Rl=e=>{if(typeof e!="string")return null;const n=/^folder-target:(\d+)$/.exec(e);return n?Number(n[1]):null},El=e=>`folder-tree-target:${e}`,To="folder-tree-target:home",Tl=e=>{if(typeof e!="string")return null;if(e===To)return"root";const n=/^folder-tree-target:(\d+)$/.exec(e);return n?Number(n[1]):null},Wt=20,qt=24,Qn=24,Fo=M($).attrs({"data-testid":"drag-overlay-chip"})`
  position: relative;
  align-items: center;
  gap: ${({theme:e})=>e.spaces[2]};
  padding: ${({theme:e})=>`${e.spaces[2]} ${e.spaces[3]}`};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.primary100};
  box-shadow: ${({theme:e})=>e.shadows.tableShadow};
  cursor: grabbing;
  max-width: 24rem;
`,Fl=M(Fo)`
  box-shadow:
    ${({theme:e})=>e.shadows.tableShadow},
    0 4px 0 -1px ${({theme:e})=>e.colors.primary100},
    0 4px 0 0 ${({theme:e})=>e.colors.primary200},
    0 7px 0 -1px ${({theme:e})=>e.colors.primary100},
    0 7px 0 0 ${({theme:e})=>e.colors.primary200};
`,Xn=M($)`
  align-items: center;
  gap: ${({theme:e})=>e.spaces[1]};
`,Yt=M($)`
  flex-shrink: 0;
  width: ${Qn}px;
  height: ${Qn}px;
  align-items: center;
  justify-content: center;
`,Al=M($)`
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
`,Ll=({items:e})=>{const{formatMessage:n}=F();if(e.length===0)return null;if(e.length===1){const i=e[0],a=i.kind==="folder",l=a?Me:yt,u=a?Wt:qt;return t.jsxs(Fo,{children:[t.jsx(Yt,{children:t.jsx(l,{width:u,height:u})}),t.jsx(P,{textColor:"neutral800",fontWeight:"semiBold",ellipsis:!0,children:i.name})]})}const s=e.filter(i=>i.kind==="folder").length,o=e.filter(i=>i.kind==="file").length,r=s+o;return t.jsxs(Fl,{gap:3,children:[s>0?t.jsxs(Xn,{children:[t.jsx(Yt,{children:t.jsx(Me,{width:Wt,height:Wt})}),t.jsx(P,{textColor:"neutral800",fontWeight:"semiBold",children:n({id:c("dnd.overlay.folders"),defaultMessage:"{count, plural, one {# folder} other {# folders}}"},{count:s})})]}):null,o>0?t.jsxs(Xn,{children:[t.jsx(Yt,{children:t.jsx(yt,{width:qt,height:qt})}),t.jsx(P,{textColor:"neutral800",fontWeight:"semiBold",children:n({id:c("dnd.overlay.files"),defaultMessage:"{count, plural, one {# file} other {# files}}"},{count:o})})]}):null,t.jsx(Al,{children:t.jsx(P,{textColor:"neutral0",fontWeight:"bold",variant:"pi",children:r})})]})},Ao=d.createContext(null),me=()=>d.useContext(Ao),Zn=e=>{const n=Rl(e);if(n!=null)return{destinationFolderId:n};const s=Tl(e);return s==="root"?{destinationFolderId:null}:typeof s=="number"?{destinationFolderId:s}:null},Ol=Number.MAX_SAFE_INTEGER,Pl=[ja],_l=({children:e,locations:n=lo})=>{const{formatMessage:s}=F(),o=nt(),{toggleNotification:r}=ye(),i=So(),{currentFolderId:a}=Ve(),{data:l=[]}=In(),u=s({id:c("plugin.name"),defaultMessage:"Media Library"}),[p,{isLoading:g}]=io(),[f,m]=d.useState([]),[j,b]=d.useState(""),v=d.useRef({items:[],fromSelection:!1,activeSourceFolderId:null,spansMultipleSources:!1}),h=d.useCallback(B=>{b(""),requestAnimationFrame(()=>b(B))},[]),{canUpdate:x}=ue(),S=fa(ha(ya,{activationConstraint:{distance:x?8:Ol}})),C=d.useMemo(()=>Il(f,l),[f,l]),y=d.useCallback(B=>C.has(B),[C]),k=d.useMemo(()=>({isInternalDragActive:f.length>0,isMovePending:g,isValidDropTarget:y}),[f.length,g,y]),E=d.useCallback(()=>{v.current={items:[],fromSelection:!1,activeSourceFolderId:null,spansMultipleSources:!1},m([])},[]),w=d.useCallback(B=>{const D=B.active.data.current;if(!D){E();return}const R=Yn(D,i?.selectedKeys,n,a);v.current=R,m(R.items)},[E,a,n,i?.selectedKeys]),I=d.useCallback(async B=>{const{over:D}=B,{items:R,fromSelection:A,activeSourceFolderId:Y,spansMultipleSources:W}=v.current;if(E(),g||!D||R.length===0)return;const Z=Zn(D.id);if(!Z)return;const{destinationFolderId:U}=Z;if(!Ke({items:R,targetFolderId:U,folderStructure:l}))return;const K=Sl(R),V=$o({formatMessage:s,count:R.length,source:W?null:qn(l,Y,u),destination:qn(l,U,u)}),ee=s({id:c("list.bulk-actions.move.error"),defaultMessage:"An error occurred while moving the items."});try{await p({...K,destinationFolderId:U}).unwrap(),A&&i?.clear(),h(V),r({type:"success",message:V})}catch(z){const _=o(z,ee);h(s({id:c("dnd.announce.move-failure"),defaultMessage:"Move failed. {message}"},{message:_})),r({type:"danger",message:_})}},[h,p,E,l,s,o,g,u,i,r]),G=d.useCallback(()=>{E()},[E]),T=d.useMemo(()=>({onDragStart:({active:B})=>{const D=B.data.current;return D?s({id:c("dnd.announce.drag-start"),defaultMessage:"Picked up {name}. Drop on a folder to move."},{name:D.name}):""},onDragOver:()=>"",onDragEnd:({active:B,over:D})=>{if(!D)return s({id:c("dnd.announce.cancel"),defaultMessage:"Drag cancelled."});const R=Zn(D.id),A=B.data.current;if(!R||!A)return"";const{items:Y}=Yn(A,i?.selectedKeys,n,a);return Ke({items:Y,targetFolderId:R.destinationFolderId,folderStructure:l})?"":s({id:c("dnd.announce.invalid-drop"),defaultMessage:"Cannot move item to this folder."})},onDragCancel:()=>s({id:c("dnd.announce.cancel"),defaultMessage:"Drag cancelled."})}),[a,l,s,n,i?.selectedKeys]);return t.jsx(Ao.Provider,{value:k,children:t.jsxs(ma,{sensors:S,collisionDetection:xa,onDragStart:w,onDragEnd:I,onDragCancel:G,accessibility:{announcements:T},children:[t.jsx(Oe,{"aria-live":"polite","aria-atomic":"true",children:j}),t.jsx($,{position:"relative",alignItems:"stretch",direction:"column",height:"100%",children:e}),t.jsx(ba,{dropAnimation:null,modifiers:Pl,children:f.length>0?t.jsx(Ll,{items:f}):null})]})})},Lo=e=>{const{isMovePending:n}=me()??{isMovePending:!1},s=d.useMemo(()=>({kind:"file",id:e.id,name:e.name,folderId:Xe(e.folder)}),[e.folder,e.id,e.name]);return{...Us({id:Dl(e.id),data:s,disabled:n}),dragData:s}},Oo=e=>{const{isMovePending:n,isValidDropTarget:s}=me()??{isMovePending:!1,isValidDropTarget:()=>!1},{active:o}=Bs(),r=Xe(e.parent),i=d.useMemo(()=>({kind:"folder",id:e.id,name:e.name,parentId:r}),[e.id,e.name,r]),a=d.useMemo(()=>({kind:"folder-target",id:e.id,name:e.name}),[e.id,e.name]),l=Us({id:$l(e.id),data:i,disabled:n}),u=zs({id:kl(e.id),data:a,disabled:n}),p=s(e.id),g=u.isOver,f=g&&p,m=g&&!p&&o!=null;return{dragData:i,draggable:l,droppable:u,isDragging:l.isDragging,showValidDropHighlight:f,showInvalidDropCursor:m}},Nl=M(oe.Content)`
  max-width: 51.6rem;
`,Po=e=>{const{open:n,parentFolderId:s,onClose:o,mode:r}=e,i=e.mode==="rename"?e.initialName:"",{formatMessage:a}=F(),{toggleNotification:l}=ye(),{trackUsage:u}=Se(),[p,g]=d.useState(i),[f,m]=d.useState(),j=d.useRef(null),[b,{isLoading:v}]=ai(),[h,{isLoading:x}]=ii(),S=r==="rename"?x:v;d.useEffect(()=>{n&&(g(i),m(void 0),r==="rename"&&j.current?.select())},[n,i,r]);const C=async y=>{y.preventDefault();const k=p.trim();if(!k){m(a({id:c("folder.create.form.error.name-required"),defaultMessage:"Name is required"}));return}try{e.mode==="rename"?(await h({id:e.folderId,name:k,parent:s}).unwrap(),u("didEditMediaLibraryElements",{location:le,type:"folder",changeLocation:!1})):(await b({name:k,parent:s}).unwrap(),u("didAddMediaLibraryFolders",{location:le})),l({type:"success",message:a(r==="rename"?{id:c("folder.rename.success"),defaultMessage:"Folder has been renamed"}:{id:c("folder.create.success"),defaultMessage:"Folder has been created"})}),o()}catch(E){const w=E;w?.message?m(w.message):l({type:"danger",message:a(r==="rename"?{id:c("folder.rename.form.error.unknown"),defaultMessage:"An error occurred while renaming the folder"}:{id:c("folder.create.form.error.unknown"),defaultMessage:"An error occurred while creating the folder"})})}};return t.jsx(oe.Root,{open:n,onOpenChange:o,children:t.jsxs(Nl,{children:[t.jsx(oe.Header,{children:t.jsx(oe.Title,{children:e.mode==="rename"?a({id:c("folder.rename.title"),defaultMessage:"Rename folder"}):a({id:c("folder.create.title-in"),defaultMessage:"New folder in {folderName}"},{folderName:e.parentFolderName})})}),t.jsxs("form",{onSubmit:C,children:[t.jsx(oe.Body,{children:t.jsxs(re.Root,{error:f,name:"name",required:!0,children:[t.jsx(re.Label,{children:a({id:c("folder.form.name.label"),defaultMessage:"Folder name"})}),t.jsx(Es,{ref:j,value:p,onChange:y=>{g(y.target.value),m(void 0)},autoFocus:!0}),t.jsx(re.Error,{})]})}),t.jsx(oe.Footer,{children:t.jsxs($,{gap:2,justifyContent:"space-between",width:"100%",children:[t.jsx(J,{variant:"tertiary",onClick:o,type:"button",children:a({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),t.jsx(J,{type:"submit",loading:S,disabled:r==="rename"&&p.trim()===i.trim(),children:a(r==="rename"?{id:c("folder.rename.submit"),defaultMessage:"Save"}:{id:c("folder.create.submit"),defaultMessage:"Create folder"})})]})})]})]})})},Tn=({folder:e,dragData:n,showRename:s=!0,children:o})=>{const{formatMessage:r}=F(),{copy:i}=yn(),{toggleNotification:a}=ye(),l=So()?.deselect,[u,p]=d.useState(!1),[g,f]=d.useState(!1),[m,j]=d.useState(!1),b=d.useMemo(()=>[n],[n]),v=async()=>{const S=`${window.location.origin}${window.location.pathname}?folder=${e.id}`,C=await i(S);a({type:C?"success":"danger",message:r(C?{id:c("list.folder.actions.copy-link.success"),defaultMessage:"Folder link copied."}:{id:c("list.folder.actions.copy-link.error"),defaultMessage:"Failed to copy the folder link."})})},h=t.jsxs(t.Fragment,{children:[t.jsx(O.Item,{startIcon:t.jsx(Ge,{}),onSelect:v,children:r({id:c("list.folder.actions.copy-link"),defaultMessage:"Copy link to folder"})}),t.jsx(O.Separator,{}),s&&t.jsx(O.Item,{startIcon:t.jsx(kr,{}),onSelect:()=>p(!0),children:r({id:c("list.folder.actions.rename"),defaultMessage:"Rename folder"})}),t.jsx(O.Item,{startIcon:t.jsx(It,{}),onSelect:()=>f(!0),children:r({id:c("list.folder.actions.move"),defaultMessage:"Move to folder"})}),t.jsx(O.Item,{startIcon:t.jsx(Je,{}),variant:"danger",onSelect:()=>j(!0),children:r({id:c("list.folder.actions.delete"),defaultMessage:"Delete folder"})})]}),x=t.jsxs(t.Fragment,{children:[s&&u&&t.jsx(Po,{open:!0,mode:"rename",folderId:e.id,initialName:e.name,parentFolderId:n.parentId,onClose:()=>p(!1)}),g&&t.jsx(Tt,{open:!0,onClose:()=>f(!1),items:b,onSuccess:()=>l?.(Ae(e.id))}),m&&t.jsx(Ft,{open:!0,onClose:()=>j(!1),target:{fileIds:[],folderIds:[e.id]},onSuccess:()=>l?.(Ae(e.id))})]});return t.jsx(t.Fragment,{children:o({items:h,dialogs:x,isBusy:u||g||m})})},_o=({folder:e,dragData:n})=>{const{formatMessage:s}=F();return t.jsx(Tn,{folder:e,dragData:n,children:({items:o,dialogs:r})=>t.jsxs(t.Fragment,{children:[t.jsxs(O.Root,{modal:!1,children:[t.jsx(O.Trigger,{tag:ie,icon:t.jsx(jn,{}),variant:"ghost",label:s({id:c("control-card.more-actions"),defaultMessage:"More actions"})}),t.jsx(ot,{popoverPlacement:"bottom-end",zIndex:2,minWidth:"22rem",children:o})]}),r]})})},Bl={position:"fixed",width:0,height:0,minWidth:0,minHeight:0,padding:0,border:0,opacity:0,overflow:"hidden",pointerEvents:"none"},At=({position:e,open:n,label:s,returnFocusTo:o,onClose:r,children:i})=>t.jsxs(O.Root,{modal:!1,open:n,onOpenChange:a=>{a||r()},children:[t.jsx(O.Trigger,{tabIndex:-1,endIcon:null,"aria-label":s,style:{...Bl,top:e.y,left:e.x}}),t.jsx(ot,{popoverPlacement:"bottom-start",zIndex:2,minWidth:"22rem",onCloseAutoFocus:a=>{a.preventDefault(),(document.activeElement===null||document.activeElement===document.body)&&o?.isConnected&&o.focus()},children:i})]}),Ul=({asset:e,dragData:n,permissions:s,position:o,returnFocusTo:r,onClose:i})=>{const{formatMessage:a}=F(),[l,u]=d.useState(!0);return t.jsx(Ro,{asset:e,dragData:n,permissions:s,children:({items:p,dialogs:g,hasActions:f,isBusy:m})=>t.jsx(zl,{hasActions:f,isBusy:m,isMenuOpen:l,onMenuClose:()=>u(!1),onClose:i,position:o,returnFocusTo:r,label:a({id:c("list.assets.context-menu.label"),defaultMessage:"Asset actions"}),items:p,dialogs:g})})},zl=({hasActions:e,isBusy:n,isMenuOpen:s,onMenuClose:o,onClose:r,position:i,returnFocusTo:a,label:l,items:u,dialogs:p})=>(d.useEffect(()=>{(!e||!s&&!n)&&r()},[e,s,n,r]),e?t.jsxs(t.Fragment,{children:[t.jsx(At,{position:i,open:s,label:l,returnFocusTo:a,onClose:o,children:u}),p]}):null),Kl=({folder:e,dragData:n,showRename:s,position:o,returnFocusTo:r,onClose:i})=>{const{formatMessage:a}=F(),[l,u]=d.useState(!0);return t.jsx(Tn,{folder:e,dragData:n,showRename:s,children:({items:p,dialogs:g,isBusy:f})=>t.jsx(Gl,{isBusy:f,isMenuOpen:l,onMenuClose:()=>u(!1),onClose:i,position:o,returnFocusTo:r,label:a({id:c("list.folder.context-menu.label"),defaultMessage:"Folder actions"}),items:p,dialogs:g})})},Gl=({isBusy:e,isMenuOpen:n,onMenuClose:s,onClose:o,position:r,returnFocusTo:i,label:a,items:l,dialogs:u})=>(d.useEffect(()=>{!n&&!e&&o()},[n,e,o]),t.jsxs(t.Fragment,{children:[t.jsx(At,{position:r,open:n,label:a,returnFocusTo:i,onClose:s,children:l}),u]})),No=(e,n,s,o)=>{const r=[];return e.forEach(i=>{r.push({kind:"file",id:i,name:"",folderId:vt(s,"file",i,o)})}),n.forEach(i=>{r.push({kind:"folder",id:i,name:"",parentId:vt(s,"folder",i,o)})}),r},Bo=({locations:e,children:n})=>{const{formatMessage:s}=F(),{canUpdate:o,isLoading:r}=ue(),{selectedIds:i,selectedFolderIds:a,clear:l}=he(),{currentFolderId:u}=Ve(),[p,g]=d.useState(!1),[f,m]=d.useState(!1),j=i.size+a.size,b=p||f,v=r||o,h=d.useMemo(()=>No(i,a,e,u),[i,a,e,u]),x=t.jsxs(t.Fragment,{children:[t.jsx(O.Label,{children:t.jsx(P,{variant:"sigma",textColor:"neutral600",children:s({id:c("list.bulk-actions.selected-count"),defaultMessage:"{count, plural, =1 {# item selected} other {# items selected}}"},{count:j})})}),t.jsx(O.Separator,{}),t.jsx(O.Item,{startIcon:t.jsx(It,{}),onSelect:()=>g(!0),children:s({id:c("list.bulk-actions.move"),defaultMessage:"Move"})}),t.jsx(O.Item,{startIcon:t.jsx(Je,{}),variant:"danger",onSelect:()=>m(!0),children:s({id:c("list.bulk-actions.delete"),defaultMessage:"Delete"})})]}),S=t.jsxs(t.Fragment,{children:[p&&t.jsx(Tt,{open:!0,onClose:()=>g(!1),items:h,onSuccess:l}),f&&t.jsx(Ft,{open:!0,onClose:()=>m(!1),target:{fileIds:Array.from(i),folderIds:Array.from(a)},onSuccess:l})]});return t.jsx(t.Fragment,{children:n({count:j,hasActions:v,items:x,dialogs:S,isBusy:b})})},Vl=({position:e,returnFocusTo:n,locations:s,onClose:o})=>{const{formatMessage:r}=F();return t.jsx(Bo,{locations:s,children:({hasActions:i,items:a,dialogs:l,isBusy:u})=>t.jsx(Hl,{hasActions:i,isBusy:u,position:e,returnFocusTo:n,label:r({id:c("list.selection.context-menu.label"),defaultMessage:"Selection actions"}),items:a,dialogs:l,onClose:o})})},Hl=({hasActions:e,isBusy:n,position:s,returnFocusTo:o,label:r,items:i,dialogs:a,onClose:l})=>{const[u,p]=d.useState(!0);return d.useEffect(()=>{!u&&!n&&l()},[u,n,l]),d.useEffect(()=>{e||l()},[e,l]),e?t.jsxs(t.Fragment,{children:[t.jsx(At,{position:s,open:u,label:r,returnFocusTo:o,onClose:()=>p(!1),children:i}),a]}):null},Uo=d.createContext(null),Lt=()=>d.useContext(Uo),Wl=(e,n,s)=>n?e.canUpdate:s.kind==="asset"?e.canUpdate||e.canCopyLink||e.canDownload:!0,ql=({locations:e,children:n})=>{const{isSelected:s,selectOnly:o,selectedKeys:r}=he(),i=ue(),[a,l]=d.useState(null),u=d.useRef(0),p=d.useCallback((m,j,b)=>{const v=s(j)&&r.size>1;if(!i.isLoading&&!Wl(i,v,b))return;m.preventDefault();const h={x:m.clientX,y:m.clientY},x=m.currentTarget instanceof HTMLElement?m.currentTarget:null;u.current+=1;const S=u.current;if(v){l({id:S,position:h,returnFocusTo:x,payload:null});return}o(j),l({id:S,position:h,returnFocusTo:x,payload:b})},[s,o,r,i]),g=d.useCallback(m=>l(j=>j?.id===m?null:j),[]),f=d.useMemo(()=>p,[p]);return t.jsxs(Uo.Provider,{value:f,children:[n,a!==null&&(a.payload===null?t.jsx(Vl,{position:a.position,returnFocusTo:a.returnFocusTo,locations:e,onClose:()=>g(a.id)},a.id):a.payload.kind==="asset"?t.jsx(Ul,{asset:a.payload.asset,dragData:a.payload.dragData,permissions:i,position:a.position,returnFocusTo:a.returnFocusTo,onClose:()=>g(a.id)},a.id):t.jsx(Kl,{folder:a.payload.folder,dragData:a.payload.dragData,position:a.position,returnFocusTo:a.returnFocusTo,onClose:()=>g(a.id)},a.id))]})},Ue=e=>{te(e)&&e.stopPropagation()},Yl=M($)`
  position: absolute;
  top: ${({theme:e})=>e.spaces[3]};
  left: ${({theme:e})=>e.spaces[3]};
  z-index: 1;
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
`,Ql=M(Er)`
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
`,Xl=M(H)`
  grid-column: 1 / -1;
`,Zl="240px",Jn=M(H)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(${Zl}, 100%), 1fr));
  gap: ${({theme:e})=>e.spaces[4]};
`,Jl=M($)`
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
`,ed=M($)`
  flex-shrink: 0;
  color: ${({theme:e})=>e.colors.neutral600};
`,td=M(et)`
  flex: 1;
  min-width: 0;
`,nd=({folder:e,orderedItemKeys:n})=>{const{formatMessage:s}=F(),{navigateToFolder:o}=Ve(),{isMovePending:r}=me()??{isMovePending:!1},{isSelected:i,toggle:a,selectRange:l}=he(),{canUpdate:u}=ue(),p=Lt(),{dragData:g,draggable:{attributes:f,listeners:m,setNodeRef:j,isDragging:b},droppable:{setNodeRef:v},showValidDropHighlight:h,showInvalidDropCursor:x}=Oo(e),S=Ae(e.id),C=w=>{j(w),v(w)},y=w=>{te(w)&&(w.shiftKey?l(n,S):w.metaKey||w.ctrlKey?a(S):o(e))},k=w=>{te(w)&&(w.key==="Enter"?(w.preventDefault(),o(e)):w.key===" "&&(w.preventDefault(),a(S)))},E=w=>{w.stopPropagation(),w.shiftKey?l(n,S):a(S)};return t.jsxs(Jl,{ref:C,...f,...m,$isDragging:b,$isMovePending:r,$isValidDropTarget:h,$isInvalidDropTarget:x,$isSelected:i(S),onClick:y,onKeyDown:k,onPointerDown:w=>{te(w)&&m?.onPointerDown?.(w)},role:"listitem",tabIndex:0,"data-native-context-menu":!0,onContextMenu:w=>{te(w)&&p?.(w,S,{kind:"folder",folder:e,dragData:g})},children:[u&&t.jsx($,{onKeyDown:w=>w.stopPropagation(),children:t.jsx(Pe,{checked:i(S),onClick:E,"aria-label":s({id:c("list.table.row.select"),defaultMessage:"Select {name}"},{name:e.name})})}),t.jsx(ed,{children:t.jsx(Me,{width:20,height:20})}),t.jsx(td,{textColor:"neutral800",children:e.name}),t.jsx($,{onClick:Ue,onKeyDown:Ue,onPointerDown:Ue,children:t.jsx(_o,{folder:e,dragData:g})})]})},es=M(H)`
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
`,sd=M.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,od=M($)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${({theme:e})=>e.colors.neutral500};
  background: ${({theme:e})=>e.colors.neutral100};
`,rd=({asset:e})=>{const{alternativeText:n,ext:s,formats:o,mime:r,url:i,updatedAt:a,isLocal:l,isUrlSigned:u}=e;if(r?.includes(Ce.Image)){const g=a&&!u?new Date(a).getTime():void 0,f=b=>g===void 0?b:b.includes("?")?`${b}&v=${g}`:`${b}?v=${g}`,m=be(o?.thumbnail?.url)??be(i),j=m&&f(m);if(j)return t.jsx(es,{children:t.jsx(sd,{src:j,alt:n||"",crossOrigin:!l&&u?"anonymous":void 0,draggable:!1,onDragStart:b=>b.preventDefault()})})}const p=st(r,s);return t.jsx(es,{children:t.jsx(od,{justifyContent:"center",alignItems:"center",children:t.jsx(p,{width:48,height:48})})})},ad=M(Tr)`
  position: relative;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
`,id=M($)`
  min-width: 0;
  width: 100%;
`,ld=M($)`
  color: ${({theme:e})=>e.colors.neutral600};
  flex-shrink: 0;
`,dd=M(et)`
  flex: 1;
  min-width: 0;
`,cd=M.button`
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
`,ud=({asset:e,orderedItemKeys:n,onAssetItemClick:s})=>{const{formatMessage:o}=F(),r=st(e.mime,e.ext),{isMovePending:i}=me()??{isMovePending:!1},{attributes:a,listeners:l,setNodeRef:u,isDragging:p,dragData:g}=Lo(e),{isSelected:f,toggle:m,selectRange:j}=he(),{canUpdate:b}=ue(),v=kn()?.getBusyMessage(e.id)??null,h=Lt(),x=Fe(e.id),S=f(x),C=w=>{te(w)&&(w.shiftKey?j(n,x):w.metaKey||w.ctrlKey?m(x):s(e.id))},y=w=>{te(w)&&(w.key==="Enter"?(w.preventDefault(),s(e.id)):w.key===" "&&(w.preventDefault(),m(x)))},k=w=>{w.stopPropagation(),s(e.id)},E=w=>{w.stopPropagation(),w.shiftKey?j(n,x):m(x)};return t.jsxs(Ql,{ref:u,...a,...l,...po,$isDragging:p,$isMovePending:i,$isBusy:v!==null,$isSelected:S,tabIndex:0,role:"listitem","data-native-context-menu":!0,onContextMenu:w=>{te(w)&&h?.(w,x,{kind:"asset",asset:e,dragData:g})},onDragStart:w=>w.preventDefault(),onClick:C,onKeyDown:y,onPointerDown:w=>{te(w)&&l?.onPointerDown?.(w)},children:[t.jsxs(ad,{children:[b&&t.jsx(Yl,{...Ct,onKeyDown:w=>w.stopPropagation(),children:t.jsx(Pe,{checked:S,onClick:E,"aria-label":o({id:c("list.table.row.select"),defaultMessage:"Select {name}"},{name:e.name})})}),t.jsx(rd,{asset:e}),v!==null?t.jsx(xo,{zIndex:2,children:v}):null]}),t.jsx(Rr,{children:t.jsxs(id,{alignItems:"center",gap:2,children:[t.jsx(ld,{children:t.jsx(r,{width:20,height:20})}),t.jsx(cd,{type:"button",onClick:k,children:t.jsx(dd,{textColor:"primary800",children:e.name})}),t.jsx($,{...Ct,onClick:Ue,onKeyDown:Ue,onPointerDown:Ue,children:t.jsx(Eo,{asset:e,dragData:g})})]})})]})},gd=({assets:e,folders:n=[],renderedKeys:s,onAssetItemClick:o})=>{const r=n.length+e.length,i=s??Rn({folders:n,assets:e});return r===0?null:t.jsxs(Jn,{role:"list","data-testid":"assets-grid",children:[n.length>0&&t.jsx(Xl,{children:t.jsx(Jn,{children:n.map(a=>t.jsx(nd,{folder:a,orderedItemKeys:i},`folder-${a.id}`))})}),e.map(a=>t.jsx($,{direction:"column",alignItems:"stretch",children:t.jsx(ud,{asset:a,orderedItemKeys:i,onAssetItemClick:o})},a.id))]})},zo=()=>{const[{query:e},n]=Le(),s=e?._q??"",o=d.useCallback(i=>{i?n({_q:Mn(i)},"push",!0):n({_q:""},"remove",!0)},[n]),r=d.useCallback(()=>o(""),[o]);return{searchQuery:s,isSearching:s!=="",setSearchQuery:o,clearSearch:r}},pd=300,fd=M(Lr)`
  > div {
    border: none;
  }
`,hd=()=>{const{formatMessage:e}=F(),{searchQuery:n,setSearchQuery:s}=zo(),{trackUsage:o}=Se(),r=Ls(),[i,a]=d.useState(n),l=Fr(i,pd),u=d.useRef(n),[{query:p}]=Le(),g=p?.folder??"",f=d.useRef(g);d.useEffect(()=>{l!==u.current&&(u.current=l,l&&o("didSearchMediaLibraryElements",{location:le}),s(l))},[l,s,o]),d.useEffect(()=>{n!==u.current&&(u.current=n,a(n))},[n]),d.useEffect(()=>{g!==f.current&&(f.current=g,u.current=n,a(n))},[g,n]);const m=t.jsx(fd,{onSubmit:j=>j.preventDefault(),children:t.jsx(Ar,{name:"search-assets",value:i,onChange:j=>a(j.target.value),onClear:()=>a(""),clearLabel:e({id:"clearLabel",defaultMessage:"Clear"}),placeholder:e({id:c("header.search.placeholder"),defaultMessage:"Search"}),size:"S",children:e({id:c("search.label"),defaultMessage:"Search for an asset"})})});return r?t.jsx(H,{width:"100%",children:m}):m},md=M(_r)`
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
`,xd=M(Nr)`
  background: ${({theme:e})=>e.colors.neutral100};

  tr {
    border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
  }
`,Ko=je`
  width: 1%;
  white-space: nowrap;
`,Go=je`
  width: 100%;
  max-width: 0;
  overflow: hidden;
`,cn=M(Br)`
  height: 40px;
  padding: 0 ${({theme:e})=>e.spaces[4]};
  text-align: left;

  ${({$flex:e})=>e?Go:Ko}
`,He=M(Ur)`
  padding: 0 ${({theme:e})=>e.spaces[4]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
`,Vo=M(He)`
  ${Go}
`,ze=M(He)`
  ${Ko}
`,Ho=M.tr`
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
    ${He} {
      border-bottom: 0;
    }
  }
`,Wo=M(He)`
  width: 5.6rem;
  white-space: nowrap;
`,bd=M(cn)`
  width: 5.6rem;
  white-space: nowrap;
`,yd=M(St)`
  flex-shrink: 0;
  width: 1.6rem;
  height: 1.6rem;

  path {
    fill: ${({theme:e})=>e.colors.warning500};
  }
`,jd=M.button`
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
`,fe=e=>{te(e)&&e.stopPropagation()},wd=({asset:e})=>{const{ext:n,mime:s}=e,o=st(s,n);return t.jsx($,{justifyContent:"center",alignItems:"center",borderRadius:"4px",color:"neutral500",width:"3.2rem",height:"3.2rem",shrink:0,children:t.jsx(o,{width:20,height:20})})},ts=({asset:e,orderedItemKeys:n,onAssetItemClick:s})=>{const o=wn(),{formatDate:r,formatMessage:i}=F(),{isMovePending:a}=me()??{isMovePending:!1},{attributes:l,listeners:u,setNodeRef:p,isDragging:g,dragData:f}=Lo(e),{isSelected:m,toggle:j,selectRange:b}=he(),{canUpdate:v}=ue(),h=kn()?.getBusyMessage(e.id)??null,x=Lt(),S=Fe(e.id),C=m(S),y=!e.caption||!e.alternativeText,k=i({id:c("list.table.row.metadata-missing"),defaultMessage:"This asset is missing metadata (caption or alternative text)."}),E=T=>{te(T)&&(T.shiftKey?b(n,S):T.metaKey||T.ctrlKey?j(S):s(e.id))},w=T=>{te(T)&&(T.key==="Enter"?(T.preventDefault(),s(e.id)):T.key===" "&&(T.preventDefault(),j(S)))},I=T=>{T.stopPropagation(),s(e.id)},G=T=>{T.stopPropagation(),T.shiftKey?b(n,S):j(S)};return t.jsxs(Ho,{ref:p,...l,...u,...po,$isDragging:g,$isMovePending:a,$isBusy:h!==null,$isSelected:C,tabIndex:0,role:"row","data-native-context-menu":!0,onContextMenu:T=>{te(T)&&x?.(T,S,{kind:"asset",asset:e,dragData:f})},onDragStart:T=>T.preventDefault(),onClick:E,onKeyDown:w,onPointerDown:T=>{te(T)&&u?.onPointerDown?.(T)},children:[v&&t.jsx(Wo,{...Ct,onClick:fe,onKeyDown:fe,children:t.jsx($,{children:t.jsx(Pe,{checked:C,onClick:G,"aria-label":i({id:c("list.table.row.select"),defaultMessage:"Select {name}"},{name:e.name})})})}),t.jsx(Vo,{children:t.jsxs($,{alignItems:"center",justifyContent:"space-between",gap:2,minWidth:0,children:[t.jsxs($,{gap:3,alignItems:"center",minWidth:0,children:[h!==null?t.jsx($,{justifyContent:"center",width:"3.2rem",height:"3.2rem",children:t.jsx(Ee,{small:!0,children:h})}):t.jsx(wd,{asset:e}),t.jsxs($,{direction:"column",alignItems:"flex-start",minWidth:0,children:[t.jsx(jd,{type:"button",onClick:I,children:t.jsx(et,{textColor:"neutral800",fontWeight:"semiBold",children:e.name})}),!o&&t.jsx(P,{textColor:"neutral600",variant:"pi",children:e.size?rn(e.size,1):"-"})]})]}),y&&t.jsx(bn,{label:k,children:t.jsx(yd,{"aria-label":k,role:"img"})})]})}),o&&t.jsxs(t.Fragment,{children:[t.jsx(ze,{children:t.jsx(P,{textColor:"neutral600",children:e.createdAt?r(new Date(e.createdAt),{dateStyle:"long"}):"-"})}),t.jsx(ze,{children:t.jsx(P,{textColor:"neutral600",children:e.updatedAt?r(new Date(e.updatedAt),{dateStyle:"long"}):"-"})}),t.jsx(ze,{children:t.jsx(P,{textColor:"neutral600",children:e.size?rn(e.size,1):"-"})})]}),t.jsx(He,{...Ct,onClick:fe,onKeyDown:fe,onPointerDown:fe,children:t.jsx($,{justifyContent:"flex-end",children:t.jsx(Eo,{asset:e,dragData:f})})})]})},vd=M(Ho)`
  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
  }
`,ns=({folder:e,orderedItemKeys:n})=>{const s=wn(),{formatDate:o,formatMessage:r}=F(),{navigateToFolder:i}=Ve(),{isSelected:a,toggle:l,selectRange:u}=he(),{canUpdate:p}=ue(),g=Lt(),{isMovePending:f}=me()??{isMovePending:!1},{dragData:m,draggable:{attributes:j,listeners:b,setNodeRef:v,isDragging:h},droppable:{setNodeRef:x},showValidDropHighlight:S,showInvalidDropCursor:C}=Oo(e),y=Ae(e.id),k=I=>{te(I)&&(I.shiftKey?u(n,y):I.metaKey||I.ctrlKey?l(y):i(e))},E=I=>{te(I)&&(I.key==="Enter"?(I.preventDefault(),i(e)):I.key===" "&&(I.preventDefault(),l(y)))},w=I=>{I.stopPropagation(),I.shiftKey?u(n,y):l(y)};return t.jsxs(vd,{ref:I=>{v(I),x(I)},...j,...b,$isDragging:h,$isMovePending:f,$isValidDropTarget:S,$isInvalidDropTarget:C,$isSelected:a(y),tabIndex:0,role:"row","data-native-context-menu":!0,onContextMenu:I=>{te(I)&&g?.(I,y,{kind:"folder",folder:e,dragData:m})},onDragStart:I=>{te(I)&&I.preventDefault()},onClick:k,onKeyDown:E,onPointerDown:I=>{te(I)&&b?.onPointerDown?.(I)},children:[p&&t.jsx(Wo,{onClick:fe,onKeyDown:fe,children:t.jsx($,{children:t.jsx(Pe,{checked:a(y),onClick:w,"aria-label":r({id:c("list.table.row.select"),defaultMessage:"Select {name}"},{name:e.name})})})}),t.jsx(Vo,{children:t.jsxs($,{gap:3,alignItems:"center",minWidth:0,children:[t.jsx($,{justifyContent:"center",alignItems:"center",borderRadius:"4px",color:"neutral600",width:"3.2rem",height:"3.2rem",shrink:0,children:t.jsx(Me,{width:20,height:20})}),t.jsx(et,{textColor:"neutral800",fontWeight:"semiBold",children:e.name})]})}),s&&t.jsxs(t.Fragment,{children:[t.jsx(ze,{children:t.jsx(P,{textColor:"neutral600",children:e.createdAt?o(new Date(e.createdAt),{dateStyle:"long"}):"-"})}),t.jsx(ze,{children:t.jsx(P,{textColor:"neutral600",children:e.updatedAt?o(new Date(e.updatedAt),{dateStyle:"long"}):"-"})}),t.jsx(ze,{children:t.jsx(P,{textColor:"neutral600",children:"-"})})]}),t.jsx(He,{onClick:fe,onKeyDown:fe,onPointerDown:fe,children:t.jsx($,{justifyContent:"flex-end",children:t.jsx(_o,{folder:e,dragData:m})})})]})},Cd=({assets:e,folders:n=[],mixedItems:s=null,renderedKeys:o,onAssetItemClick:r})=>{const i=wn(),{formatMessage:a}=F(),{selectedKeys:l,selectAll:u,clear:p}=he(),{canUpdate:g}=ue(),{trackUsage:f}=Se(),m=i?Gn:Gn.filter(y=>y.name==="name"||y.name==="actions"),j=g,b=m.length+(j?1:0),v=n.length+e.length,h=o??Rn({folders:n,assets:e,mixedItems:s}),{allSelected:x,isIndeterminate:S}=ml(l,h),C=()=>{x?p():(f("didSelectAllMediaLibraryElements"),u(h))};return v===0?null:t.jsxs(md,{colCount:b,rowCount:(s?s.length:v)+1,children:[t.jsx(xd,{children:t.jsxs(Or,{children:[j&&t.jsx(bd,{children:t.jsx($,{children:t.jsx(Pe,{checked:S?"indeterminate":x,disabled:h.length===0,onCheckedChange:C,"aria-label":a({id:c("list.table.header.select-all"),defaultMessage:"Select all"})})})}),m.map(y=>{const k=a(y.label);return"isVisuallyHidden"in y&&y.isVisuallyHidden?t.jsx(cn,{$flex:y.name==="name",children:t.jsx(Oe,{children:a({id:c("table.header.actions"),defaultMessage:"actions"})})},y.name):t.jsx(cn,{$flex:y.name==="name",children:t.jsx(P,{textColor:"neutral600",variant:"sigma",children:k})},y.name)})]})}),t.jsxs(Pr,{children:[s?.map(y=>y.kind==="folder"?t.jsx(ns,{folder:y.folder,orderedItemKeys:h},`folder-${y.folder.id}`):t.jsx(ts,{asset:y.asset,orderedItemKeys:h,onAssetItemClick:r},y.asset.id)),!s&&n.map(y=>t.jsx(ns,{folder:y,orderedItemKeys:h},`folder-${y.id}`)),!s&&e.map(y=>t.jsx(ts,{asset:y,orderedItemKeys:h,onAssetItemClick:r},y.id))]})]})},Md=M($)`
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
`,Sd=M($)`
  margin-left: auto;
  align-items: center;
  gap: ${({theme:e})=>e.spaces[2]};
`,Id=M(H)`
  width: 1px;
  align-self: stretch;
  background: ${({theme:e})=>e.colors.neutral150};
  margin-left: ${({theme:e})=>e.spaces[1]};
`,Dd=({assets:e=[],locations:n=lo,renderedKeys:s=[]})=>{const{formatMessage:o}=F(),{toggleNotification:r}=ye(),i=Et(),{canUpdate:a}=ue(),{selectedIds:l,selectedFolderIds:u,selectAll:p,clear:g}=he(),{trackUsage:f}=Se(),{currentFolderId:m}=Ve(),j=wi(),[b,{isLoading:v}]=zr(),[h,x]=d.useState(!1),[S,C]=d.useState(!1),[y,k]=d.useState(!1),E=l.size+u.size,[w,I]=d.useState(null),[G,T]=d.useState(0);d.useEffect(()=>{if(!w){T(0);return}const K=()=>{const ee=w.getBoundingClientRect();T(ee.height===0?0:Math.max(0,window.innerHeight-ee.top))};K();const V=new ResizeObserver(K);return V.observe(w),window.addEventListener("resize",K),()=>{V.disconnect(),window.removeEventListener("resize",K)}},[w,j]);const B=()=>{f("didSelectAllMediaLibraryElements"),p(s)},D=y||v,R=d.useMemo(()=>No(l,u,n,m),[l,u,n,m]),A=l.size>zn,Y=d.useMemo(()=>{const K=new Map(e.map(({id:V,mime:ee})=>[V,ee]));return[...l].filter(V=>ao(K.get(V))).length},[e,l]),W=l.size>0&&Y===0;let Z;A?Z=o({id:c("list.bulk-actions.create-metadata.too-many"),defaultMessage:"Metadata can be generated for up to {max} assets at a time. Select fewer assets to continue."},{max:zn}):W&&(Z=o({id:c("list.bulk-actions.create-metadata.no-eligible"),defaultMessage:"Metadata can only be generated for images. None of the selected assets are supported."}));const U=async()=>{if(v||A||W)return;const K=Array.from(l),V=await b({fileIds:K});if("error"in V){r({type:"danger",message:o({id:c("list.bulk-actions.create-metadata.error"),defaultMessage:"An error occurred while generating metadata."})});return}const ee=V.data.filter(({status:ae})=>ae==="success").length,z=V.data.filter(({status:ae})=>ae==="skipped").length,_=V.data.filter(({status:ae})=>ae==="error").length,q=u.size;if(_===V.data.length){r({type:"danger",message:o({id:c("list.bulk-actions.create-metadata.error"),defaultMessage:"An error occurred while generating metadata."})});return}r(z===0&&_===0&&q===0?{type:"success",message:o({id:c("list.bulk-actions.create-metadata.success"),defaultMessage:"{count, plural, =1 {Metadata generated for # asset} other {Metadata generated for # assets}}"},{count:ee})}:{type:"warning",message:o({id:c("list.bulk-actions.create-metadata.partial"),defaultMessage:"{successCount} generated, {skippedCount} skipped (unsupported file type), {errorCount} failed{folderCount, plural, =0 {} one {, # folder ignored} other {, # folders ignored}}"},{successCount:ee,skippedCount:z,errorCount:_,folderCount:q})}),g()};return E===0||!a?null:t.jsxs(t.Fragment,{children:[t.jsx(H,{"aria-hidden":!0,height:`${G}px`,"data-bar-spacer":!0}),t.jsxs(Md,{ref:I,$isDrawerOpen:j,$isStacked:i,tag:"section",role:"region","data-native-context-menu":!0,"aria-label":o({id:c("list.bulk-actions.label"),defaultMessage:"Bulk actions"}),children:[t.jsx(P,{"data-bar-slot":"count",fontWeight:"bold",textColor:"neutral800",marginRight:4,children:o({id:c("list.bulk-actions.selected-count"),defaultMessage:"{count, plural, =1 {# item selected} other {# items selected}}"},{count:E})}),t.jsx(Kr,{onClick:B,marginRight:4,disabled:D,children:o({id:c("list.bulk-actions.select-all"),defaultMessage:"Select all"})}),t.jsxs(Sd,{"data-bar-slot":"actions",children:[i&&t.jsx(bn,{label:Z,children:t.jsx(H,{children:t.jsx(J,{size:"S",startIcon:t.jsx(Gr,{}),disabled:D||l.size===0||A||W,loading:v,onClick:U,children:o({id:c("list.bulk-actions.create-metadata"),defaultMessage:"Create metadata"})})})}),t.jsx(ie,{variant:"tertiary",disabled:D,label:o({id:c("list.bulk-actions.move"),defaultMessage:"Move"}),onClick:()=>C(!0),children:t.jsx(It,{})}),t.jsx(Tt,{open:S,onClose:()=>C(!1),items:R,onSuccess:g}),t.jsx(ie,{variant:"danger-light",disabled:D,label:o({id:c("list.bulk-actions.delete"),defaultMessage:"Delete"}),onClick:()=>x(!0),children:t.jsx(Je,{})}),t.jsx(Ft,{open:h,onClose:()=>x(!1),target:{fileIds:Array.from(l),folderIds:Array.from(u)},onSuccess:g,onPendingChange:k})]}),t.jsx(Id,{"data-bar-slot":"divider","aria-hidden":!0}),t.jsx(ie,{variant:"ghost",label:o({id:c("list.bulk-actions.clear"),defaultMessage:"Clear selection"}),onClick:g,disabled:D,children:t.jsx(Dt,{})})]})]})},qo=d.createContext(null),$d=M(H)`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
`,kd=({children:e,onDrop:n,disabled:s=!1})=>{const[o,r]=d.useState(!1),i=d.useRef(0),a={isDragging:o};d.useEffect(()=>{const f=()=>{r(!1),i.current=0},m=j=>{j.relatedTarget||(r(!1),i.current=0)};return document.addEventListener("dragend",f),document.addEventListener("dragleave",m),()=>{document.removeEventListener("dragend",f),document.removeEventListener("dragleave",m)}},[]);const l=d.useCallback(f=>{f.preventDefault(),f.stopPropagation(),!s&&f.dataTransfer.types.includes("Files")&&(i.current+=1,r(!0))},[s]),u=d.useCallback(f=>{f.preventDefault(),f.stopPropagation(),i.current-=1,i.current<=0&&(r(!1),i.current=0)},[]),p=d.useCallback(f=>{f.preventDefault(),f.stopPropagation(),f.dataTransfer.dropEffect="copy"},[]),g=d.useCallback(f=>{if(f.preventDefault(),f.stopPropagation(),r(!1),i.current=0,s)return;const{files:m}=f.dataTransfer;m?.length&&n&&n(Array.from(m))},[n,s]);return t.jsx(qo.Provider,{value:a,children:t.jsx($d,{"data-testid":"assets-dropzone",onDragEnter:l,onDragLeave:u,onDragOver:p,onDrop:g,children:e})})},Yo=()=>{const e=d.useContext(qo);if(!e)throw new Error("useUploadDropZone must be used within UploadDropZone");return{isDragging:e.isDragging}},Rd=(e,n)=>`${e}${Math.floor(n*255).toString(16).padStart(2,"0")}`,Ed=M(H)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({theme:e})=>Rd(e.colors.primary200,.3)};
  border: 1px solid ${({theme:e})=>e.colors.primary700};
  border-radius: ${({theme:e})=>e.borderRadius};
  z-index: 1;
  pointer-events: none;
`,Td=({children:e})=>{const{isDragging:n}=Yo(),o=me()?.isInternalDragActive??!1,r=n&&!o;return t.jsxs(H,{position:"relative",children:[r&&t.jsx(Ed,{}),e]})},Fd=M(H)`
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
`,Ad=({uploadDropZoneRef:e,folderName:n})=>{const{formatMessage:s}=F(),{isDragging:o}=Yo(),i=me()?.isInternalDragActive??!1,a=o&&!i,[l,u]=d.useState(0);return d.useEffect(()=>{if(!e?.current)return;const p=()=>{const f=e.current?.getBoundingClientRect();f&&u(m=>m!==f.left?f.left:m)};p();const g=new ResizeObserver(p);return g.observe(e.current),()=>g.disconnect()},[e]),a?t.jsxs(Fd,{$leftContentWidth:l,children:[t.jsx(P,{textColor:"neutral0",children:s({id:c("dropzone.upload.message"),defaultMessage:"Drop here to upload to"})}),t.jsxs($,{gap:2,alignItems:"center",children:[t.jsx(Me,{width:20,height:20,fill:"neutral0"}),t.jsx(P,{textColor:"neutral0",fontWeight:"semiBold",children:n})]})]}):null},Ld=({onAddAssets:e,canAddAssets:n,searchQuery:s,onClearSearch:o})=>{const{formatMessage:r}=F(),i=!!s;return t.jsxs($,{direction:"column",alignItems:"center",gap:6,padding:11,children:[t.jsx(Os,{width:"16rem",height:"8.8rem"}),t.jsxs($,{direction:"column",alignItems:"center",gap:2,textAlign:"center",children:[t.jsx(P,{variant:"delta",tag:"p",fontWeight:"bold",textColor:"neutral800",children:r(i?{id:c("list.search.empty.title"),defaultMessage:"No results found"}:{id:c("list.empty.title"),defaultMessage:"No assets yet"})}),t.jsx(P,{textColor:"neutral600",children:i?r({id:c("list.search.empty.description"),defaultMessage:'No assets or folders match "{query}". Try a different search.'},{query:s}):r({id:c("list.empty.description"),defaultMessage:"Get started by uploading assets or creating a folder."})})]}),i?t.jsx(J,{variant:"secondary",startIcon:t.jsx(Dt,{"aria-hidden":!0}),onClick:o,children:r({id:c("list.search.empty.clear"),defaultMessage:"Clear search"})}):n&&t.jsx(J,{onClick:e,children:r({id:c("list.empty.add-assets"),defaultMessage:"Add assets"})})]})},Od=({onClearFilters:e})=>{const{formatMessage:n}=F();return t.jsxs($,{direction:"column",alignItems:"center",gap:6,padding:11,children:[t.jsx(Os,{width:"16rem",height:"8.8rem"}),t.jsx(P,{textColor:"neutral600",children:n({id:c("list.filters.empty"),defaultMessage:"No items matched current filters"})}),t.jsx(J,{variant:"secondary",startIcon:t.jsx(Dt,{"aria-hidden":!0}),onClick:e,children:n({id:c("list.filters.clear"),defaultMessage:"Clear filters"})})]})},Fn=["folder","picture","audio","video","document"],An=["1day","3days","1week","1month","3months","6months","1year"],Pd={created:"createdAt",updated:"updatedAt"},_d={createdAt:"created",updatedAt:"updated"},ss={exact:"isExactly",within:"withinLast",notwithin:"notWithinLast"},Nd={isExactly:"exact",withinLast:"within",notWithinLast:"notwithin"},os={rangeis:"is",rangenot:"isNot"},Bd={is:"rangeis",isNot:"rangenot"},rs=/^\d{4}-\d{2}-\d{2}$/,Ud=e=>Fn.includes(e),zd=e=>An.includes(e),Kd=e=>{const[n,s,o]=e.split(":");if(!n||!s||!o)return null;if(n==="type"){if(s!=="is"&&s!=="not")return null;const i=o.split(",").filter(Ud);return i.length>0?{kind:"type",condition:s==="is"?"is":"isNot",values:i}:null}const r=Pd[n];if(!r)return null;if(s in ss)return zd(o)?{kind:"date",field:r,mode:"preset",condition:ss[s],preset:o}:null;if(s in os){const[i,a]=o.split("..");return rs.test(i??"")&&rs.test(a??"")?{kind:"date",field:r,mode:"range",condition:os[s],from:i,to:a}:null}return null},Gd=e=>typeof e!="string"||e===""?[]:e.split(";").map(Kd).filter(n=>n!==null),Vd=e=>{if(e.kind==="type")return`type:${e.condition==="is"?"is":"not"}:${e.values.join(",")}`;const n=_d[e.field];return e.mode==="preset"?`${n}:${Nd[e.condition]}:${e.preset}`:`${n}:${Bd[e.condition]}:${e.from}..${e.to}`},as=e=>e.map(Vd).join(";"),Hd=()=>{const[{query:e},n]=Le(),s=Gd(e?.filters),o=r=>{r.length===0?n(xe(e,{filters:void 0}),"push",!0):n(xe(e,{filters:as(r)}),"push",!0)};return{filters:s,serialized:as(s),addFilter:r=>o([...s,r]),updateFilter:(r,i)=>o(s.map((a,l)=>l===r?i:a)),removeFilter:r=>o(s.filter((i,a)=>a!==r)),clearFilters:()=>o([])}},un={picture:"image",audio:"audio",video:"video"},is=Object.values(un),Wd={"1day":{days:1},"3days":{days:3},"1week":{days:7},"1month":{months:1},"3months":{months:3},"6months":{months:6},"1year":{years:1}},qd=(e,n)=>{const{days:s=0,months:o=0,years:r=0}=Wd[n],i=new Date(e.getTime());if(r||o){const a=i.getDate();i.setDate(1),i.setFullYear(i.getFullYear()-r),i.setMonth(i.getMonth()-o);const l=new Date(i.getFullYear(),i.getMonth()+1,0).getDate();i.setDate(Math.min(a,l))}return i.setDate(i.getDate()-s),i},ls=e=>{const n=new Date(e.getTime());return n.setHours(0,0,0,0),n},ds=e=>{const n=new Date(e.getTime());return n.setHours(23,59,59,999),n},Mt=e=>{const[n,s,o]=e.split("-").map(Number);return new Date(n,s-1,o)},Yd=(e,n)=>{const{field:s}=e;if(e.mode==="preset"){const i=qd(n,e.preset);switch(e.condition){case"withinLast":return{[s]:{$gte:i.toISOString()}};case"notWithinLast":return{[s]:{$lt:i.toISOString()}};case"isExactly":return{[s]:{$gte:ls(i).toISOString(),$lte:ds(i).toISOString()}}}}const o=ls(Mt(e.from)).toISOString(),r=ds(Mt(e.to)).toISOString();return e.condition==="is"?{[s]:{$gte:o,$lte:r}}:{$or:[{[s]:{$lt:o}},{[s]:{$gt:r}}]}},Qd=e=>{const n=e.values.filter(r=>r!=="folder");if(n.length===0)return null;const s=n.map(r=>r==="document"?{$and:is.map(i=>({mime:{$notContains:i}}))}:{mime:{$contains:un[r]}});if(e.condition==="is")return s.length===1?s[0]:{$or:s};const o=n.map(r=>r==="document"?{$or:is.map(i=>({mime:{$contains:i}}))}:{mime:{$notContains:un[r]}});return o.length===1?o[0]:{$and:o}},Xd=(e,n)=>{const s=[],o=[];let r=!0,i=!0;for(const a of e){if(a.kind==="date"){const p=Yd(a,n);s.push(p),o.push(p);continue}const l=a.values.includes("folder");(a.condition==="is"?!l:l)&&(r=!1);const u=Qd(a);u?s.push(u):a.condition==="is"&&(i=!1)}return{fileClauses:s,folderClauses:o,showFolders:r,showFiles:i}},Zd=M.button`
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
`,cs=e=>{const n=`${e.getMonth()+1}`.padStart(2,"0"),s=`${e.getDate()}`.padStart(2,"0");return`${e.getFullYear()}-${n}-${s}`},Jd=e=>{const[n,s,o]=e.split("-").map(Number);return new Date(n,s-1,o)},ec=(e,n)=>{const s=new Date(e,n,1),o=new Date(s.getTime());o.setDate(s.getDate()-(s.getDay()+6)%7);const r=[],i=new Date(o.getTime());do{const a=[];for(let l=0;l<7;l+=1)a.push(new Date(i.getTime())),i.setDate(i.getDate()+1);r.push(a)}while(i.getMonth()===n&&i.getFullYear()===e);return r},gn=({from:e,to:n,onSelect:s})=>{const{formatMessage:o,formatDate:r}=F(),i=e?Jd(e):new Date,[a,l]=d.useState(i.getFullYear()),[u,p]=d.useState(i.getMonth()),[g,f]=d.useState(null),m=g??e??null,j=g?null:n??null,b=S=>{const C=new Date(a,u+S,1);l(C.getFullYear()),p(C.getMonth())},v=S=>{const C=cs(S);if(!g){f(C);return}const[y,k]=C<g?[C,g]:[g,C];f(null),s(y,k)},h=ec(a,u),x=h[0].map(S=>r(S,{weekday:"short"}).slice(0,2));return t.jsxs(H,{padding:2,width:"100%",role:"group","aria-label":o({id:c("list.filters.calendar.label"),defaultMessage:"Select date range"}),"data-testid":"date-range-calendar",children:[t.jsxs($,{justifyContent:"space-between",alignItems:"center",paddingBottom:2,children:[t.jsx(ie,{variant:"ghost",label:o({id:c("list.filters.calendar.previous-month"),defaultMessage:"Previous month"}),onClick:()=>b(-1),children:t.jsx(Vr,{})}),t.jsx(P,{fontWeight:"semiBold",textColor:"neutral800",children:r(new Date(a,u,1),{month:"long",year:"numeric"})}),t.jsx(ie,{variant:"ghost",label:o({id:c("list.filters.calendar.next-month"),defaultMessage:"Next month"}),onClick:()=>b(1),children:t.jsx(Hr,{})})]}),t.jsx($,{children:x.map((S,C)=>t.jsx($,{width:"3rem",height:"2.4rem",justifyContent:"center",children:t.jsx(P,{variant:"pi",fontWeight:"semiBold",textColor:"neutral600",children:S})},C))}),h.map((S,C)=>t.jsx($,{children:S.map(y=>{const k=cs(y),E=k===m||k===j,w=m!==null&&j!==null&&k>m&&k<j;return t.jsxs(Zd,{type:"button",$isEdge:E,$inRange:w,$isMuted:y.getMonth()!==u,onClick:()=>v(y),children:[t.jsx(Oe,{children:r(y,{dateStyle:"long"})}),t.jsx("span",{"aria-hidden":!0,children:y.getDate()})]},k)})},C))]})},pn={folder:{id:c("list.filters.type.folder"),defaultMessage:"Folder"},picture:{id:c("list.filters.type.picture"),defaultMessage:"Picture"},audio:{id:c("list.filters.type.audio"),defaultMessage:"Audio"},video:{id:c("list.filters.type.video"),defaultMessage:"Video"},document:{id:c("list.filters.type.document"),defaultMessage:"Document"}},fn={"1day":{id:c("list.filters.preset.1day"),defaultMessage:"1 day ago"},"3days":{id:c("list.filters.preset.3days"),defaultMessage:"3 days ago"},"1week":{id:c("list.filters.preset.1week"),defaultMessage:"1 week ago"},"1month":{id:c("list.filters.preset.1month"),defaultMessage:"1 month ago"},"3months":{id:c("list.filters.preset.3months"),defaultMessage:"3 months ago"},"6months":{id:c("list.filters.preset.6months"),defaultMessage:"6 months ago"},"1year":{id:c("list.filters.preset.1year"),defaultMessage:"1 year ago"}},hn={createdAt:{id:c("list.filters.field.created"),defaultMessage:"Creation date"},updatedAt:{id:c("list.filters.field.updated"),defaultMessage:"Last modified"}},Qt=M(O.SubTrigger)`
  width: 100%;
  justify-content: space-between;
`,Be="24.2rem",Xt="70dvh",tc=`min(${Be}, calc(100dvw - 2rem))`,Zt=M(O.Item)`
  width: 100%;
`,us=M(H)`
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
`,nc=M(qr)`
  height: 1.6rem;
  min-width: auto;
  padding: 0 0.4rem;
`,sc=({listFilters:e})=>{const{formatMessage:n}=F(),{trackUsage:s}=Se(),[o,r]=d.useState(!1),{filters:i,addFilter:a,updateFilter:l,removeFilter:u}=e,p=D=>s("didFilterMediaLibraryElements",{location:le,filter:D});let g=-1;for(let D=i.length-1;D>=0;D-=1)if(i[D].kind==="type"){g=D;break}const f=g>=0?i[g]:null,m=f&&f.kind==="type"?f.values:[],j=D=>{const R=!m.includes(D),A=R?[...m,D]:m.filter(Y=>Y!==D);R&&p("type"),f&&f.kind==="type"?A.length===0?u(g):l(g,{...f,values:A}):A.length>0&&a({kind:"type",condition:"is",values:A})},b=(D,R)=>{p(D);for(let A=i.length-1;A>=0;A-=1){const Y=i[A];if(Y.kind==="date"&&Y.mode==="preset"&&Y.field===D){l(A,{...Y,preset:R});return}}a({kind:"date",field:D,mode:"preset",condition:"withinLast",preset:R})},v=(D,R)=>{p("createdAt"),a({kind:"date",field:"createdAt",mode:"range",condition:"is",from:D,to:R}),r(!1)},h=Ls(),[x,S]=d.useState(null),[C,y]=d.useState(!1),k=D=>{r(D),D||(S(null),y(!1))},E=D=>{S(R=>R===D?null:D),y(!1)},w=Fn.map(D=>t.jsx(O.Item,{role:"menuitemcheckbox","aria-checked":m.includes(D),onSelect:R=>{R.preventDefault(),j(D)},startIcon:t.jsx(Pe,{checked:m.includes(D),tabIndex:-1,"aria-hidden":!0}),children:n(pn[D])},D)),I=D=>{for(let R=i.length-1;R>=0;R-=1){const A=i[R];if(A.kind==="date"&&A.mode==="preset"&&A.field===D)return A.preset}return null},G=D=>{const R=I(D);return An.map(A=>t.jsx(O.Item,{role:"menuitemradio","aria-checked":R===A,onSelect:()=>{b(D,A)},endIcon:R===A?t.jsx(kt,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem",fill:"primary600"}):null,children:n(fn[A])},A))},T=n({id:c("list.filters.field.type"),defaultMessage:"Type"}),B=n({id:c("list.filters.select-date-range"),defaultMessage:"Select date range"});return t.jsxs(O.Root,{open:o,onOpenChange:k,children:[t.jsx(O.Trigger,{variant:"tertiary",startIcon:t.jsx(Wr,{"aria-hidden":!0}),endIcon:null,children:t.jsxs($,{gap:2,alignItems:"center",tag:"span",children:[n({id:c("list.filters.trigger"),defaultMessage:"Filter"}),i.length>0&&t.jsx(nc,{children:i.length})]})}),t.jsx(O.Content,{popoverPlacement:"bottom-start",zIndex:2,maxHeight:Xt,width:h?tc:Be,children:h?t.jsxs(t.Fragment,{children:[t.jsx(Zt,{"aria-expanded":x==="type",onSelect:D=>{D.preventDefault(),E("type")},endIcon:t.jsx(Jt,{$open:x==="type","aria-hidden":!0}),children:T}),x==="type"&&t.jsx(us,{children:w}),["createdAt","updatedAt"].map(D=>t.jsxs(H,{width:"100%",children:[t.jsx(Zt,{"aria-expanded":x===D,onSelect:R=>{R.preventDefault(),E(D)},endIcon:t.jsx(Jt,{$open:x===D,"aria-hidden":!0}),children:n(hn[D])}),x===D&&t.jsxs(us,{children:[G(D),D==="createdAt"&&t.jsxs(t.Fragment,{children:[t.jsx(Zt,{"aria-expanded":C,onSelect:R=>{R.preventDefault(),y(A=>!A)},endIcon:t.jsx(Jt,{$open:C,"aria-hidden":!0}),children:B}),C&&t.jsx(H,{paddingLeft:2,children:t.jsx(gn,{onSelect:v})})]})]})]},D))]}):t.jsxs(t.Fragment,{children:[t.jsxs(O.SubRoot,{children:[t.jsx(Qt,{children:T}),t.jsx(en,{zIndex:2,maxHeight:Xt,width:Be,children:w})]}),["createdAt","updatedAt"].map(D=>t.jsxs(O.SubRoot,{children:[t.jsx(Qt,{children:n(hn[D])}),t.jsxs(en,{zIndex:2,maxHeight:Xt,width:Be,children:[G(D),D==="createdAt"&&t.jsxs(O.SubRoot,{children:[t.jsx(Qt,{children:B}),t.jsx(en,{zIndex:2,maxHeight:"none",width:Be,children:t.jsx(gn,{onSelect:v})})]})]})]},D))]})})]})},oc=M($)`
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
`,rc=M.span`
  display: inline-flex;
  align-items: center;
  padding: ${({theme:e})=>`${e.spaces[1]} ${e.spaces[2]}`};
  border-right: 1px solid ${({theme:e})=>e.colors.neutral200};
`,On=M(Te.Content)`
  width: ${Be};
`,Qo=M.button`
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
`,ac=M.button`
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
`,gs={is:{id:c("list.filters.condition.is"),defaultMessage:"is"},isNot:{id:c("list.filters.condition.is-not"),defaultMessage:"is not"}},ps={isExactly:{id:c("list.filters.condition.is-exactly"),defaultMessage:"is exactly"},withinLast:{id:c("list.filters.condition.within-last"),defaultMessage:"within the last"},notWithinLast:{id:c("list.filters.condition.not-within-last"),defaultMessage:"not within the last"}},fs={is:{id:c("list.filters.condition.is"),defaultMessage:"is"},isNot:{id:c("list.filters.condition.is-not"),defaultMessage:"is not"}},tn=({label:e,options:n,active:s,getOptionLabel:o,onPick:r})=>{const[i,a]=d.useState(!1);return t.jsxs(Te.Root,{open:i,onOpenChange:a,children:[t.jsx(Te.Trigger,{children:t.jsx(Ln,{type:"button",$interactive:!0,children:t.jsx(P,{variant:"pi",textColor:"neutral800",children:e})})}),t.jsx(On,{children:t.jsx($,{direction:"column",alignItems:"stretch",padding:1,children:n.map(l=>t.jsxs(Qo,{type:"button",onClick:()=>{r(l),a(!1)},children:[o(l),l===s&&t.jsx(kt,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem"})]},l))})})]})},ic=({filter:e,onChange:n})=>{const{formatMessage:s}=F(),[o,r]=d.useState(!1),i=e.values.map(l=>s(pn[l])).join(", "),a=l=>{const u=e.values.includes(l)?e.values.filter(p=>p!==l):[...e.values,l];u.length>0&&n({...e,values:u})};return t.jsxs(Te.Root,{open:o,onOpenChange:r,children:[t.jsx(Te.Trigger,{children:t.jsx(Ln,{type:"button",$interactive:!0,children:t.jsx(P,{variant:"pi",textColor:"neutral800",children:i})})}),t.jsx(On,{children:t.jsx($,{direction:"column",alignItems:"flex-start",padding:3,gap:2,children:Fn.map(l=>t.jsx(Pe,{checked:e.values.includes(l),onCheckedChange:()=>a(l),children:s(pn[l])},l))})})]})},hs=({filter:e,onChange:n})=>{const{formatMessage:s,formatDate:o}=F(),[r,i]=d.useState(!1),a=e.mode==="preset"?s(fn[e.preset]):`${o(Mt(e.from),{day:"2-digit",month:"short"})} - ${o(Mt(e.to),{day:"2-digit",month:"short",year:"numeric"})}`;return t.jsxs(Te.Root,{open:r,onOpenChange:i,children:[t.jsx(Te.Trigger,{children:t.jsx(Ln,{type:"button",$interactive:!0,children:t.jsx(P,{variant:"pi",textColor:"neutral800",children:a})})}),t.jsx(On,{children:e.mode==="preset"?t.jsx($,{direction:"column",alignItems:"stretch",padding:1,children:An.map(l=>t.jsxs(Qo,{type:"button",onClick:()=>{n({...e,preset:l}),i(!1)},children:[s(fn[l]),l===e.preset&&t.jsx(kt,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem"})]},l))}):t.jsx(gn,{from:e.from,to:e.to,onSelect:(l,u)=>{n({...e,from:l,to:u}),i(!1)}})})]})},lc=({filter:e,onChange:n,onRemove:s})=>{const{formatMessage:o}=F(),r=e.kind==="type"?o({id:c("list.filters.field.type"),defaultMessage:"Type"}):o(hn[e.field]);return t.jsxs(oc,{alignItems:"stretch","data-testid":"filter-badge",children:[t.jsx(rc,{children:t.jsx(P,{variant:"pi",textColor:"neutral600",children:r})}),e.kind==="type"&&t.jsxs(t.Fragment,{children:[t.jsx(tn,{label:o(gs[e.condition]),options:["is","isNot"],active:e.condition,getOptionLabel:i=>o(gs[i]),onPick:i=>n({...e,condition:i})}),t.jsx(ic,{filter:e,onChange:n})]}),e.kind==="date"&&e.mode==="preset"&&t.jsxs(t.Fragment,{children:[t.jsx(tn,{label:o(ps[e.condition]),options:["isExactly","withinLast","notWithinLast"],active:e.condition,getOptionLabel:i=>o(ps[i]),onPick:i=>n({...e,condition:i})}),t.jsx(hs,{filter:e,onChange:n})]}),e.kind==="date"&&e.mode==="range"&&t.jsxs(t.Fragment,{children:[t.jsx(tn,{label:o(fs[e.condition]),options:["is","isNot"],active:e.condition,getOptionLabel:i=>o(fs[i]),onPick:i=>n({...e,condition:i})}),t.jsx(hs,{filter:e,onChange:n})]}),t.jsx(ac,{type:"button",onClick:s,"aria-label":o({id:c("list.filters.remove"),defaultMessage:"Remove {filter} filter"},{filter:r}),children:t.jsx(Dt,{width:"1.2rem",height:"1.2rem","aria-hidden":!0})})]})},dc=M($)`
  padding-top: ${({theme:e,$compact:n})=>n?e.spaces[1]:e.spaces[6]};
  transition: padding-top 0.2s ease;
`,cc=({listFilters:e,compact:n=!1})=>{const{filters:s,updateFilter:o,removeFilter:r}=e;return s.length===0?null:t.jsx(dc,{$compact:n,gap:2,wrap:"wrap","data-testid":"filter-badges",children:s.map((i,a)=>t.jsx(lc,{filter:i,onChange:l=>o(a,l),onRemove:()=>r(a)},a))})},Xo=e=>{const{isMovePending:n,isValidDropTarget:s}=me()??{isMovePending:!1,isValidDropTarget:()=>!1},{active:o}=Bs(),r=e.id==null?To:El(e.id),i={kind:"folder-tree-target",id:e.id,name:e.name},a=zs({id:r,data:i,disabled:n}),l=s(e.id),u=a.isOver;return{droppable:a,isOver:u,showValidDropHighlight:u&&l,showInvalidDropCursor:u&&!l&&o!=null}},uc=M.div`
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
`,gc=({folder:e,parentId:n,menuPosition:s,returnFocusTo:o,onCloseMenu:r})=>{const{formatMessage:i}=F();return t.jsx(Tn,{folder:e,dragData:{kind:"folder",id:e.id,name:e.name,parentId:n},showRename:!1,children:({items:a,dialogs:l})=>t.jsxs(t.Fragment,{children:[t.jsx(uc,{children:t.jsxs(O.Root,{modal:!1,children:[t.jsx(O.Trigger,{tag:ie,icon:t.jsx(jn,{}),variant:"ghost",size:"S",onClick:u=>u.stopPropagation(),label:i({id:c("sidebar.tree.actions"),defaultMessage:"Actions for {name}"},{name:e.name})}),t.jsx(ot,{popoverPlacement:"bottom-end",zIndex:2,minWidth:"22rem",children:a})]})}),s!==null&&t.jsx(At,{position:s,open:!0,label:i({id:c("list.folder.context-menu.label"),defaultMessage:"Folder actions"}),returnFocusTo:o,onClose:r,children:a}),l]})})},pc=600,fc=({isOver:e,canExpand:n,onExpand:s})=>{d.useEffect(()=>{if(!e||!n)return;const o=setTimeout(s,pc);return()=>clearTimeout(o)},[e,n,s])},Zo=M.button`
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
`,Jo=M($)`
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
`,er=(e,n,s=[])=>{for(const o of e){if(o.id===n)return s;if(o.children?.length){const r=o.id!=null?[...s,o.id]:s,i=er(o.children,n,r);if(i!==null)return i}}return null},hc=(e,n)=>{const[s,o]=d.useState(()=>new Set);d.useEffect(()=>{if(n==null)return;const l=er(e,n);!l||l.length===0||o(u=>{const p=new Set(u);let g=!1;for(const f of l)p.has(f)||(p.add(f),g=!0);return g?p:u})},[e,n]);const r=d.useCallback(l=>{o(u=>{const p=new Set(u);return p.has(l)?p.delete(l):p.add(l),p})},[]),i=d.useCallback(l=>{o(u=>{if(u.has(l))return u;const p=new Set(u);return p.add(l),p})},[]);return{isExpanded:d.useCallback(l=>s.has(l),[s]),toggleExpanded:r,expandFolder:i}},tr=M.ul`
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
`,mc=1.6,nr=.8,sr=.4,ms=M($)`
  width: 2.4rem;
  height: 2.4rem;
  min-width: 2.4rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
`,xc=M(ie)`
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
`,bc=M($t)`
  transform: rotate(${({$expanded:e})=>e?"0deg":"-90deg"});
  transition: transform 0.2s ease;
`,yc=({id:e,name:n,parentId:s,folderChildren:o,level:r,currentFolderId:i,showActiveFolder:a,isExpanded:l,onToggle:u,onExpand:p,onSelect:g,isMovePending:f})=>{const{formatMessage:m}=F(),j=o.length>0,b=l(e)&&j,v=a&&i===e,{droppable:{setNodeRef:h},isOver:x,showValidDropHighlight:S,showInvalidDropCursor:C}=Xo({id:e,name:n}),y=d.useCallback(()=>p(e),[e,p]),[k,E]=d.useState(null),w=d.useRef(null);return fc({isOver:x,canExpand:j&&!b,onExpand:y}),t.jsxs("li",{children:[t.jsxs(Jo,{ref:h,"data-native-context-menu":!0,alignItems:"center",paddingLeft:`${r*mc+nr}rem`,paddingRight:`${sr}rem`,gap:1,$isActive:v,$isValidDropTarget:S,$isInvalidDropCursor:C,$isMovePending:f,onContextMenu:I=>{te(I)&&(I.preventDefault(),E({x:I.clientX,y:I.clientY}))},children:[t.jsx(xc,{label:j?m({id:c(b?"sidebar.tree.collapse":"sidebar.tree.expand"),defaultMessage:b?"Collapse {name}":"Expand {name}"},{name:n}):m({id:c("sidebar.tree.no-subfolders"),defaultMessage:"The folder {name} has no subfolders"},{name:n}),disabled:!j,onClick:I=>{I.stopPropagation(),u(e)},variant:"ghost",withTooltip:!1,"aria-expanded":j?b:void 0,children:t.jsx(bc,{$expanded:b,fill:"neutral500"})}),t.jsx(H,{flex:"1",minWidth:0,children:t.jsx(Zo,{ref:w,type:"button",$isActive:v,$isValidDropTarget:S,$isInvalidDropCursor:C,$isMovePending:f,"aria-current":v?"page":void 0,onClick:()=>g(e),"data-testid":`folder-tree-node-${e}`,"data-folder-id":e,children:t.jsx(et,{variant:"omega",fontWeight:v?"semiBold":"regular",children:n})})}),t.jsx(gc,{folder:{id:e,name:n},parentId:s,menuPosition:k,returnFocusTo:w.current,onCloseMenu:()=>E(null)})]}),j&&b&&t.jsx(tr,{children:o.map(I=>t.jsx(or,{node:I,parentId:e,level:r+1,currentFolderId:i,showActiveFolder:a,isExpanded:l,onToggle:u,onExpand:p,onSelect:g,isMovePending:f},I.id??I.name))})]})},or=({node:e,...n})=>e.id==null?null:t.jsx(yc,{...n,id:e.id,name:e.name??"",folderChildren:e.children??[]}),jc="[data-folder-tree-root]",wc=({currentFolderId:e,showActiveFolder:n=!0,onSelectFolder:s,backgroundContextMenu:o})=>{const{formatMessage:r}=F(),{data:i=[],isLoading:a,isError:l}=In(),{isExpanded:u,toggleExpanded:p,expandFolder:g}=hc(i,e),{isMovePending:f}=me()??{isMovePending:!1},m=n&&e==null,j=r({id:c("sidebar.home"),defaultMessage:"Home"}),{droppable:{setNodeRef:b},showValidDropHighlight:v,showInvalidDropCursor:h}=Xo({id:null,name:j});return t.jsxs(zt.Main,{"data-folder-tree-root":!0,"aria-label":r({id:c("sidebar.tree.aria-label"),defaultMessage:"Media library folders"}),children:[o,t.jsx(zt.Header,{label:r({id:c("sidebar.title"),defaultMessage:"Media library"})}),t.jsx(zt.Content,{children:t.jsxs($,{direction:"column",alignItems:"stretch",padding:3,children:[t.jsx(Jo,{ref:b,"data-native-context-menu":!0,alignItems:"center",paddingLeft:`${nr}rem`,paddingRight:`${sr}rem`,$isActive:m,$isValidDropTarget:v,$isInvalidDropCursor:h,$isMovePending:f,children:t.jsxs(Zo,{type:"button",$isActive:m,$isValidDropTarget:v,$isInvalidDropCursor:h,$isMovePending:f,"aria-current":m?"page":void 0,onClick:()=>s(null),"data-testid":"folder-tree-home",children:[t.jsx(ms,{children:t.jsx(Yr,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem"})}),t.jsx(P,{variant:"omega",fontWeight:m?"semiBold":"regular",children:j})]})}),t.jsxs(H,{marginTop:4,children:[t.jsxs($,{alignItems:"center",gap:1,paddingTop:1,paddingBottom:1,paddingLeft:2,paddingRight:2,children:[t.jsx(ms,{children:t.jsx(Me,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem",fill:"neutral500"})}),t.jsx(P,{variant:"sigma",textColor:"neutral600",style:{textTransform:"uppercase"},children:r({id:c("sidebar.folders"),defaultMessage:"Folders"})})]}),a?t.jsx($,{justifyContent:"center",padding:1,paddingTop:2,children:t.jsx(Ee,{children:r({id:c("sidebar.tree.loading"),defaultMessage:"Loading folders..."})})}):l?t.jsx(H,{padding:1,paddingTop:2,children:t.jsx(P,{variant:"pi",textColor:"danger600",children:r({id:c("sidebar.tree.error"),defaultMessage:"Could not load folders."})})}):i.length===0?t.jsx(H,{padding:1,paddingTop:2,children:t.jsx(P,{variant:"pi",textColor:"neutral500",children:r({id:c("sidebar.tree.empty"),defaultMessage:"No folders yet"})})}):t.jsx(tr,{children:i.map(x=>t.jsx(or,{node:x,parentId:null,level:0,currentFolderId:e,showActiveFolder:n,isExpanded:u,onToggle:p,onExpand:g,onSelect:s,isMovePending:f},x.id??x.name))})]})]})})]})},vc=({open:e,onClose:n,onUpload:s})=>{const{formatMessage:o}=F(),[r,i]=d.useState(""),[a,l]=d.useState(null),u=()=>{i(""),l(null),n()},p=async g=>{g.preventDefault();const{urls:f,error:m}=Xr(r);if(m){l(m);return}l(null),u(),await s(f)};return t.jsx(oe.Root,{open:e,onOpenChange:g=>!g&&u(),children:t.jsx(oe.Content,{children:t.jsxs("form",{onSubmit:p,children:[t.jsx(oe.Header,{children:t.jsx(oe.Title,{children:o({id:c("modal.url.title"),defaultMessage:"Import from URL"})})}),t.jsx(oe.Body,{children:t.jsxs(re.Root,{error:a||void 0,hint:o({id:c("input.url.description"),defaultMessage:"Separate your URL links by a carriage return."}),children:[t.jsx(re.Label,{children:o({id:c("input.url.label"),defaultMessage:"URL(s)"})}),t.jsx(Qr,{name:"urls",minHeight:"unset",rows:Math.min(r.split(`
`).length,7),maxHeight:"10.5rem",placeholder:o({id:c("input.url.placeholder"),defaultMessage:"Empty"}),value:r,onChange:g=>{i(g.target.value),l(null)}}),t.jsx(re.Hint,{}),t.jsx(re.Error,{})]})}),t.jsxs(oe.Footer,{children:[t.jsx(J,{variant:"tertiary",onClick:u,children:o({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),t.jsx(J,{type:"submit",children:o({id:c("modal.url.upload"),defaultMessage:"Upload"})})]})]})})})},Cc="[data-strapi-main-content]",Mc=["[data-native-context-menu]","thead","a","button","input","textarea","select",'[contenteditable="true"]'].join(", "),Sc={position:"fixed",width:0,height:0,minWidth:0,minHeight:0,padding:0,border:0,opacity:0,overflow:"hidden",pointerEvents:"none"},Ic={height:0},xs=({onCreateFolder:e,onImportFiles:n,onImportFromUrl:s,disabled:o,containerSelector:r=Cc,locations:i})=>{const{formatMessage:a}=F(),[l,u]=d.useState(null),[p,g]=d.useState(null),f=d.useCallback(b=>g(b),[]);d.useEffect(()=>{const b=p?.closest(r);if(!b||o)return;const v=h=>{h.target instanceof Element&&(h.target.closest(Mc)||(h.preventDefault(),u({x:h.clientX,y:h.clientY})))};return b.addEventListener("contextmenu",v),()=>b.removeEventListener("contextmenu",v)},[p,o,r]);const m=t.jsxs(t.Fragment,{children:[t.jsx(O.Item,{onSelect:e,startIcon:t.jsx(Me,{}),children:a({id:c("folder.create.title"),defaultMessage:"New folder"})}),t.jsx(O.Item,{onSelect:n,startIcon:t.jsx(Ps,{}),children:a({id:c("import-files"),defaultMessage:"File upload"})}),t.jsx(O.Item,{onSelect:s,startIcon:t.jsx(Ge,{}),children:a({id:c("import-from-url"),defaultMessage:"File upload from URL"})})]}),j=b=>t.jsxs(O.Root,{modal:!1,open:l!==null,onOpenChange:v=>{v||u(null)},children:[t.jsx(O.Trigger,{tabIndex:-1,endIcon:null,"aria-label":a({id:c("list.context-menu.label"),defaultMessage:"Media library actions"}),style:{...Sc,top:l?.y??0,left:l?.x??0}}),t.jsxs(ot,{popoverPlacement:"bottom-start",zIndex:2,minWidth:"22rem",onCloseAutoFocus:v=>v.preventDefault(),children:[b,m]})]});return t.jsxs(t.Fragment,{children:[t.jsx("div",{ref:f,style:Ic,"aria-hidden":!0}),!o&&(i?t.jsx(Bo,{locations:i,children:({count:b,hasActions:v,items:h,dialogs:x})=>t.jsxs(t.Fragment,{children:[j(b>0&&v?t.jsxs(t.Fragment,{children:[h,t.jsx(O.Separator,{})]}):null),x]})}):j(null))]})},nn={oldestUploads:{id:c("list.sort.oldest-uploads"),defaultMessage:"Oldest uploads"},mostRecentUpdates:{id:c("list.sort.most-recent-updates"),defaultMessage:"Most recent updates"}},sn={nameAsc:{id:c("list.sort.name-asc"),defaultMessage:"A to Z"},nameDesc:{id:c("list.sort.name-desc"),defaultMessage:"Z to A"},sizeAsc:{id:c("list.sort.size-asc"),defaultMessage:"File size ascending"},sizeDesc:{id:c("list.sort.size-desc"),defaultMessage:"File size descending"}},bs={top:{id:c("list.sort.folders-on-top"),defaultMessage:"On top"},mixed:{id:c("list.sort.folders-mixed"),defaultMessage:"Mixed with files"}},Dc=M(O.Trigger)``,ys=M(O.Label)`
  width: 100%;
  display: block;
  background: ${({theme:e})=>e.colorScheme==="dark"?e.colors.neutral150:e.colors.neutral100};
  padding-inline: ${({theme:e})=>e.spaces[3]};
  border-radius: ${({theme:e})=>e.borderRadius};
`,$c=({sort:e,showFoldersGroup:n=!0})=>{const{formatMessage:s}=F(),{trackUsage:o}=Se(),r=s({id:c("list.sort.trigger"),defaultMessage:"Sort: {active}"},{active:e.sortBy?s(nn[e.sortBy]):s(sn[e.direction])}),i=t.jsx(kt,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem",fill:"primary600"});return t.jsxs(O.Root,{children:[t.jsx(Dc,{variant:"ghost",endIcon:t.jsx($t,{"aria-hidden":!0}),children:r}),t.jsxs(O.Content,{popoverPlacement:"bottom-end",zIndex:2,maxHeight:"70vh",minWidth:"25rem",children:[t.jsx(ys,{children:s({id:c("list.sort.section"),defaultMessage:"Sort"})}),Object.keys(nn).map(a=>t.jsx(O.Item,{role:"menuitemradio","aria-checked":e.sortBy===a,onSelect:l=>{l.preventDefault(),e.sortBy!==a&&o("didSortMediaLibraryElements",{location:le,sort:a}),e.setSortBy(e.sortBy===a?null:a)},endIcon:e.sortBy===a?i:null,children:s(nn[a])},a)),Object.keys(sn).map(a=>t.jsx(O.Item,{role:"menuitemradio","aria-checked":e.direction===a,onSelect:l=>{l.preventDefault(),e.direction!==a&&o("didSortMediaLibraryElements",{location:le,sort:a}),e.setDirection(e.direction===a?null:a)},endIcon:e.direction===a?i:null,children:s(sn[a])},a)),n&&t.jsxs(t.Fragment,{children:[t.jsx(O.Separator,{}),t.jsx(ys,{children:s({id:c("list.sort.folders"),defaultMessage:"Folders"})}),Object.keys(bs).map(a=>t.jsx(O.Item,{role:"menuitemradio","aria-checked":e.foldersPosition===a,onSelect:l=>{l.preventDefault(),e.setFoldersPosition(a)},endIcon:e.foldersPosition===a?i:null,children:s(bs[a])},a))]})]})]})},kc=["createdAt","updatedAt","name","size"],Rc=e=>kc.includes(e),Ec="updatedAt:DESC",Tc=(e,n,s)=>e==="size"?(n.size??0)-(s.size??0):e==="name"?n.name.localeCompare(s.name):(n[e]??"").localeCompare(s[e]??""),Fc=(e=Ec)=>{const[n,s]=e.split(":"),o=Rc(n),r=o?n:"updatedAt",a=(o?s:"DESC")==="ASC"?1:-1;return(l,u)=>{const p=Tc(r,l,u);return p!==0?a*p:a*(l.id-u.id)}},Ac=({assets:e,uploaded:n,sort:s,hasNextPage:o})=>{if(n.length===0)return e;const r=new Set(e.map(u=>u.id)),i=Fc(s),a=n.filter(u=>!r.has(u.id)).sort(i);if(a.length===0)return e;const l=[...e];for(const u of a){const p=l.findIndex(g=>i(u,g)<0);if(p===-1){if(o)continue;l.push(u)}else l.splice(p,0,u)}return l},rr=20,Lc=10,Oc=e=>{const n=new Map;for(const s of Object.keys(e).map(Number).sort((o,r)=>o-r))for(const o of e[s])n.set(o.id,o);return[...n.values()]},Pc=e=>Object.keys(e).reduce((n,s)=>Math.max(n,Number(s)),1),_c=({queryArgs:e,page:n,onRefreshed:s})=>{const{currentData:o}=Dn({...e,page:n,pageSize:rr}),r=o?.results;return d.useEffect(()=>{r&&s(n,r)},[r,n,s]),null},Nc=({folder:e=null,sort:n,search:s,filters:o,enabled:r=!0}={})=>{const i={folder:e,sort:n,search:s,filters:o},a=JSON.stringify(i),l=JSON.stringify({folder:e,sort:n,filters:o}),[u,p]=d.useState({queryKey:a,page:1}),[g,f]=d.useState({queryKey:a,listKey:l,pages:{}}),m=d.useRef(new Map),j=u.queryKey!==a,b=j?m.current.get(a):void 0;let v;j?b?v=Pc(b.pages):v=1:v=u.page,j&&(p({queryKey:a,page:v}),b&&f(b));const{currentData:h,isLoading:x,isFetching:S,error:C,startedTimeStamp:y,fulfilledTimeStamp:k}=Dn({...i,page:v,pageSize:rr},{skip:!r}),E=g.queryKey===a;!b&&h&&(!E||g.pages[v]!==h.results)&&f(E?{...g,pages:{...g.pages,[v]:h.results},pagination:h.pagination}:{queryKey:a,listKey:l,pages:{[v]:h.results},pagination:h.pagination});const w=d.useCallback((z,_)=>{f(q=>q.queryKey!==a||q.pages[z]===_?q:{...q,pages:{...q.pages,[z]:_}})},[a]),I=d.createElement(d.Fragment,null,Array.from({length:Math.max(0,v-1)},(z,_)=>_+1).map(z=>d.createElement(_c,{key:`${a}:${z}`,queryArgs:i,page:z,onRefreshed:w})));d.useEffect(()=>{if(Object.keys(g.pages).length===0)return;const z=m.current;for(z.delete(g.queryKey),z.set(g.queryKey,g);z.size>Lc;){const _=z.keys().next();if(_.done)break;z.delete(_.value)}},[g]);const G=Zr(),T=Jr(),B=d.useRef(e);d.useEffect(()=>{const z=B.current;if(B.current=e,z===e)return;const _=T.getState()[bt.reducerPath],q=bt.internalActions.removeQueryResult;Object.keys(_?.queries??{}).forEach(ae=>{if(!ae.startsWith("getAssets("))return;let de;try{de=JSON.parse(ae.slice(10,-1))}catch{return}de.folder===z&&G(q({queryCacheKey:ae}))})},[e,G,T]);const D=g.listKey!==l,R=d.useMemo(()=>D?[]:Oc(g.pages),[D,g.pages]),A=h?v<h.pagination.pageCount:!1,Y=ea(ta),W=!s&&(o?.length??0)===0,Z=k!==void 0&&y!==void 0&&k>y?y:void 0,U=d.useMemo(()=>{if(!W||Y.length===0)return R;const z=Y.filter(({asset:_,completedAt:q})=>Xe(_.folder)===e&&(Z===void 0||q>Z));return Ac({assets:R,uploaded:z.map(({asset:_})=>_),sort:n,hasNextPage:A})},[W,Y,R,e,n,A,Z]),K=S&&v>1,V=D||x&&U.length===0,ee=d.useCallback(()=>{p(z=>({queryKey:a,page:(z.queryKey===a?z.page:1)+1}))},[a]);return r?{assets:U,subscribers:I,pagination:h?.pagination??g.pagination,isLoading:V,isFetchingMore:K,hasNextPage:A,fetchNextPage:ee,error:C}:{assets:[],subscribers:null,pagination:void 0,isLoading:!1,isFetchingMore:!1,hasNextPage:!1,fetchNextPage:ee,error:void 0}},Bc=({hasNextPage:e,isFetchingMore:n,onLoadMore:s,options:o})=>{const r=d.useRef(null),i=d.useRef(null),a=d.useRef(o);a.current=o;const l=d.useRef(s);l.current=s;const u=d.useRef(e);u.current=e;const p=d.useRef(n);p.current=n;const g=d.useCallback(f=>{if(r.current?.disconnect(),i.current=f,!f)return;const m=new IntersectionObserver(([j])=>{j.isIntersecting&&u.current&&!p.current&&l.current()},a.current);m.observe(f),r.current=m},[]);return d.useEffect(()=>()=>r.current?.disconnect(),[]),d.useEffect(()=>{n||!r.current||!i.current||(r.current.unobserve(i.current),r.current.observe(i.current))},[n]),g},Uc="[data-strapi-main-content]",zc=2e3,Kc=10,Gc=e=>{const n=d.useRef(new Map),s=d.useRef(null),o=d.useRef(null),r=d.useRef(e),i=d.useRef(null),a=d.useCallback(l=>{o.current?.(),o.current=null,s.current=null;const u=l?.closest(Uc);if(!u)return;const p=()=>{const g=n.current;for(g.delete(r.current),g.set(r.current,u.scrollTop);g.size>Kc;){const f=g.keys().next().value;if(f===void 0)break;g.delete(f)}};u.addEventListener("scroll",p,{passive:!0}),s.current=u,o.current=()=>u.removeEventListener("scroll",p)},[]);return d.useEffect(()=>()=>o.current?.(),[]),d.useLayoutEffect(()=>{const l=s.current;if(!l)return;r.current!==e&&(r.current=e,i.current={top:n.current.get(e)??0,deadline:Date.now()+zc});const u=i.current;if(u){if(Date.now()>u.deadline){i.current=null;return}l.scrollTop=u.top,l.scrollTop>=u.top&&(i.current=null)}}),a},Pn={oldestUploads:"createdAt:ASC",mostRecentUpdates:"updatedAt:DESC"},_n={nameAsc:"name:ASC",nameDesc:"name:DESC",sizeAsc:"size:ASC",sizeDesc:"size:DESC"},mn="mostRecentUpdates",js=Object.fromEntries(Object.entries(Pn).map(([e,n])=>[n,e])),ws=Object.fromEntries(Object.entries(_n).map(([e,n])=>[n,e])),Vc=e=>{for(const n of(e??"").split(",")){if(n in js)return{sortBy:js[n],direction:null,isExplicit:!0};if(n in ws)return{sortBy:null,direction:ws[n],isExplicit:!0}}return{sortBy:mn,direction:null,isExplicit:!1}},vs=(e,n)=>[e&&Pn[e],n&&_n[n]].filter(o=>!!o).join(","),Hc=()=>{const[{query:e},n]=Le(),{sortBy:s,direction:o,isExplicit:r}=Vc(e?.sort),i=e?.folders==="mixed"?"mixed":"top",a=(b,v)=>{b===null&&v===null&&(b=mn);const h=vs(b,v);n(b===mn&&v===null?xe(e,{sort:void 0}):xe(e,{sort:h}))},l=b=>a(b,null),u=b=>a(null,b),p=b=>{n(b==="mixed"?xe(e,{folders:"mixed"}):xe(e,{folders:void 0}))},g=vs(s,o),m=[s&&Pn[s],o&&!o.startsWith("size")?_n[o]:null].filter(b=>!!b),j=r&&m.length>0?m.join(","):"name:ASC";return{sortBy:s,direction:o,foldersPosition:i,assetsSort:g,foldersSort:j,setSortBy:l,setDirection:u,setFoldersPosition:p}},Wc=({folderId:e,search:n,sort:s,filter:o})=>JSON.stringify({folderId:e,search:n,sort:s,filter:o}),Cs=(e,n)=>{switch(n){case"createdAt":case"updatedAt":return e[n]?new Date(e[n]).getTime():0;case"size":return e.size??0;case"name":default:return(e.name??"").toLowerCase()}},qc=e=>{const n=e.split(",").map(s=>s.trim()).filter(Boolean).map(s=>{const[o,r]=s.split(":");return{field:o,desc:r?.toUpperCase()==="DESC"}});return(s,o)=>{for(const{field:r,desc:i}of n){const a=Cs(s,r),l=Cs(o,r);let u;if(typeof a=="string"||typeof l=="string"?u=String(a)<String(l)?-1:String(a)>String(l)?1:0:u=a-l,u!==0)return i?-u:u}return 0}},Yc=({folders:e,assets:n,sort:s,hasNextPage:o})=>{const r=qc(s),i=[...e].sort(r),a=n[n.length-1],l=!o||!a?o?[]:i:i.filter(g=>r(g,a)<=0),u=[];let p=0;for(const g of n){for(;p<l.length&&r(l[p],g)<=0;)u.push({kind:"folder",folder:l[p]}),p+=1;u.push({kind:"asset",asset:g})}for(;p<l.length;)u.push({kind:"folder",folder:l[p]}),p+=1;return u},Qc={threshold:0,rootMargin:"0px 0px -1px 0px"},Xc={threshold:0},Zc={id:c("header.content.item-count"),defaultMessage:"{count, plural, =1 {# item} other {# items}}"},on={both:{id:c("header.search-results.count"),defaultMessage:"{numberFolders, plural, one {1 folder} other {# folders}} - {numberAssets, plural, one {1 asset} other {# assets}}"},folders:{id:c("header.search-results.count.folders"),defaultMessage:"{numberFolders, plural, one {1 folder} other {# folders}}"},assets:{id:c("header.search-results.count.assets"),defaultMessage:"{numberAssets, plural, =0 {0 assets} one {1 asset} other {# assets}}"}},Jc=(e,n)=>e===0?on.assets:n===0?on.folders:on.both,eu=({view:e,folders:n,isLoadingFolders:s,assets:o,isLoadingAssets:r,isFetchingMore:i,hasNextPage:a,fetchNextPage:l,error:u,locations:p,searchQuery:g,assetsSort:f,foldersPosition:m,hasActiveFilters:j,onClearFilters:b,onAssetItemClick:v,onAddAssets:h,canAddAssets:x,onClearSearch:S})=>{const{formatMessage:C}=F(),y=e===Ye.GRID,k=r||s,E=d.useMemo(()=>m==="mixed"&&!y?Yc({folders:n,assets:o,sort:f,hasNextPage:a}):null,[m,y,n,o,f,a]),w=Rn({folders:n,assets:o,mixedItems:E}),I=Bc({hasNextPage:a,isFetchingMore:i,onLoadMore:l,options:Qc});return k?t.jsx($,{justifyContent:"center",padding:8,children:t.jsx(Ee,{children:C({id:"app.loading",defaultMessage:"Loading..."})})}):u?t.jsx(H,{padding:8,children:t.jsx(P,{textColor:"danger600",children:C({id:c("list.assets.error"),defaultMessage:"An error occurred while fetching assets."})})}):n.length===0&&o.length===0?j&&!g?t.jsx(Od,{onClearFilters:b}):t.jsx(Ld,{onAddAssets:h,canAddAssets:x,searchQuery:g,onClearSearch:S}):t.jsxs(t.Fragment,{children:[t.jsx(ql,{locations:p,children:y?t.jsx(gd,{folders:n,assets:o,renderedKeys:w,onAssetItemClick:v}):t.jsx(Cd,{assets:o,folders:n,mixedItems:E,renderedKeys:w,onAssetItemClick:v})}),t.jsx("div",{ref:I,style:{height:1}}),i&&t.jsx($,{justifyContent:"center",padding:4,children:t.jsx(Ee,{children:C({id:c("list.assets.loading-more"),defaultMessage:"Loading more assets..."})})}),t.jsx(Dd,{assets:o,renderedKeys:w,locations:p})]})},tu=({listQueryKey:e})=>{const{clear:n}=he();return d.useEffect(()=>{n()},[e,n]),null},nu=M(Ja)`
  display: flex;
  padding: ${({theme:e})=>e.spaces[1]};
  background: ${({theme:e})=>e.colors.neutral100};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
`,Ms=M(ei)`
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
`,su=M(H)`
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
`,ou=M($)`
  justify-content: space-between;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spaces[4]};

  h1 {
    font-size: 1.8rem;
  }
`,ru=M($)`
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
`,ar=M($)`
  align-items: center;
  gap: ${({theme:e})=>e.spaces[3]};
`,au=M(ar)``,iu=M(ar)`
  justify-content: space-between;

  ${({theme:e})=>e.breakpoints.large} {
    justify-content: flex-end;
    flex: 0 0 auto;
  }
`,lu=M(H)`
  flex: 1;

  ${({theme:e})=>e.breakpoints.large} {
    flex: 0 1 auto;
  }
`,Ss=M.span`
  display: none;

  ${({theme:e})=>e.breakpoints.large} {
    display: inline;
  }
`,du=()=>{const{formatMessage:e}=F(),{openDetails:n}=Co(),{canCreate:s,canUpdate:o}=ue(),{currentFolderId:r,navigateToFolderId:i,navigateToRoot:a}=Ve(),{error:l}=Sn({id:r},{skip:r===null});d.useEffect(()=>{l?.name==="NotFoundError"&&a()},[l,a]);const{title:u,itemCount:p}=ho(r),{searchQuery:g,isSearching:f,clearSearch:m}=zo(),j=Hc(),b=Hd(),v=d.useMemo(()=>Xd(b.filters,new Date),[b.serialized]),{assets:h,subscribers:x,pagination:S,isLoading:C,isFetchingMore:y,hasNextPage:k,fetchNextPage:E,error:w}=Nc({folder:r,search:g||void 0,sort:j.assetsSort,filters:v.fileClauses,enabled:v.showFiles}),{data:I=[],isLoading:G}=li({parentId:r,search:g||void 0,sort:j.foldersSort,filters:v.folderClauses},{skip:!v.showFolders}),T=d.useMemo(()=>v.showFolders?I:[],[v.showFolders,I]),B=d.useMemo(()=>ci(h,T),[h,T]),D=e(Zc,{count:p}),R=e({id:c("header.search-results"),defaultMessage:'Search results for "{query}"'},{query:g}),A=T.length,Y=S?.total??0,W=e(Jc(A,Y),{numberFolders:A,numberAssets:Y});let Z;f?Z=`${R} (${W})`:u?Z=`${u} (${D})`:Z=e({id:"app.loading",defaultMessage:"Loading..."});const[U,K]=d.useState(!1),[V,ee]=na(bi.view,Ye.GRID),z=V===Ye.GRID,[_,q]=d.useState(!1),ae=d.useRef(null),de=d.useRef(null),[We,Ot]=d.useState(!1),Pt=d.useCallback(N=>Ot(!N),[]),_t=sa(Pt,Xc),[rt]=oa(),[at]=ra(),{data:Nt}=Ns(),Bt=Nt?.data?.concurrentUploadRequests??1,it=Et(),{trackUsage:De}=Se(),lt=async(N,ne)=>{if(N.length===0)return;const ce=N.reduce((ve,Ut)=>{const ct=da(Ut.type);return ve[ct]=(ve[ct]??0)+1,ve},{});De("willAddMediaLibraryAssets",{location:le,...ce});const ge=new FormData,pe=[];N.forEach(ve=>{ge.append("files",ve),pe.push({name:ve.name,caption:null,alternativeText:null,folder:ne})}),ge.append("fileInfo",JSON.stringify(pe));try{await rt({formData:ge,totalFiles:N.length,concurrency:Bt,generateAiMetadata:!!it}).unwrap()}catch{}},_e=()=>{ae.current?.click()},we=async N=>{const ne=N.target.files;ne&&ne.length>0&&(De("didSelectFile",{source:"computer",location:le}),await lt(Array.from(ne),r)),N.target.value=""},Ne=async N=>{s&&(De("didSelectFile",{source:"computer",location:le}),await lt(N,r))},dt=async N=>{De("didSelectFile",{source:"url",location:le}),De("willAddMediaLibraryAssets",{location:le});try{await at({urls:N,folderId:r,generateAiMetadata:!!it}).unwrap()}catch{}},L=Wc({folderId:r,search:g,sort:`${j.assetsSort};folders=${j.foldersPosition}`,filter:b.serialized||null}),Q=Gc(L);return t.jsxs(t.Fragment,{children:[t.jsx(kd,{onDrop:Ne,disabled:!s,children:t.jsx(xl,{disabled:!o,children:t.jsx(bl,{children:t.jsxs(_l,{locations:B,children:[t.jsx(tu,{listQueryKey:L}),t.jsx(Nn.Root,{sideNav:t.jsx(wc,{currentFolderId:r,showActiveFolder:!f,onSelectFolder:i,backgroundContextMenu:t.jsx(xs,{disabled:!s,containerSelector:jc,onCreateFolder:()=>K(!0),onImportFiles:_e,onImportFromUrl:()=>q(!0)})}),children:t.jsx(_s.Main,{children:t.jsxs(H,{ref:de,children:[t.jsx(Oe,{children:t.jsx("input",{type:"file",ref:ae,onChange:we,multiple:!0})}),t.jsx(H,{ref:_t,height:0,"aria-hidden":!0}),t.jsx(H,{ref:Q,height:0,"aria-hidden":!0}),t.jsx(xs,{disabled:!s,locations:B,onCreateFolder:()=>K(!0),onImportFiles:_e,onImportFromUrl:()=>q(!0)}),t.jsxs(su,{$compact:We,children:[t.jsxs(ou,{children:[t.jsx(P,{variant:"alpha",tag:"h1",children:Z}),s&&t.jsxs(aa,{popoverPlacement:"bottom-end",variant:"default",endIcon:t.jsx($t,{}),label:e({id:c("new"),defaultMessage:"New"}),children:[t.jsx(Kt,{onSelect:()=>K(!0),startIcon:t.jsx(Me,{}),children:e({id:c("folder.create.title"),defaultMessage:"New folder"})}),t.jsx(Kt,{onSelect:_e,startIcon:t.jsx(Ps,{}),children:e({id:c("import-files"),defaultMessage:"File upload"})}),t.jsx(Kt,{onSelect:()=>q(!0),startIcon:t.jsx(Ge,{}),children:e({id:c("import-from-url"),defaultMessage:"File upload from URL"})})]})]}),t.jsxs(ru,{$compact:We,children:[t.jsxs(au,{children:[t.jsx(H,{children:t.jsx(sc,{listFilters:b})}),t.jsx(lu,{children:t.jsx(hd,{})})]}),t.jsxs(iu,{children:[t.jsx(H,{children:t.jsx($c,{sort:j,showFoldersGroup:!z})}),t.jsxs(nu,{type:"single",value:z?"grid":"table",onValueChange:N=>N&&ee(N==="grid"?Ye.GRID:Ye.TABLE),"aria-label":e({id:c("view.switch.label"),defaultMessage:"View options"}),children:[t.jsxs(Ms,{value:"table","aria-label":e({id:c("view.table"),defaultMessage:"Table view"}),children:[t.jsx(ia,{}),t.jsx(Ss,{children:e({id:c("view.table"),defaultMessage:"Table view"})})]}),t.jsxs(Ms,{value:"grid","aria-label":e({id:c("view.grid"),defaultMessage:"Grid view"}),children:[t.jsx(la,{}),t.jsx(Ss,{children:e({id:c("view.grid"),defaultMessage:"Grid view"})})]})]})]})]}),t.jsx(cc,{listFilters:b,compact:We})]}),t.jsxs(Nn.Content,{children:[x,t.jsxs(Td,{children:[t.jsx(Ad,{uploadDropZoneRef:de,folderName:u}),t.jsx(eu,{view:V,folders:T,isLoadingFolders:G,assets:h,isLoadingAssets:C,isFetchingMore:y,hasNextPage:k,fetchNextPage:E,error:w,locations:B,searchQuery:g,assetsSort:j.assetsSort,foldersPosition:j.foldersPosition,hasActiveFilters:b.filters.length>0,onClearFilters:b.clearFilters,onAssetItemClick:n,onAddAssets:_e,canAddAssets:s,onClearSearch:m})]})]})]})})})]})})})}),t.jsx(Po,{open:U,mode:"create",parentFolderName:u,parentFolderId:r,onClose:()=>K(!1)}),t.jsx(vc,{open:_,onClose:()=>q(!1),onUpload:dt}),t.jsx(ul,{})]})},mu=()=>{const{formatMessage:e}=F(),n=e({id:c("plugin.name"),defaultMessage:"Media Library"});return t.jsxs(t.Fragment,{children:[t.jsx(_s.Title,{children:n}),t.jsx(ca,{children:t.jsx(ua,{index:!0,element:t.jsx(du,{})})})]})};export{mu as MediaLibrary};
