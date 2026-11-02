import{a as T,hd as Ht,he as Wt,dm as l,r as i,v as ct,g6 as Vt,hf as be,j as t,ca as Gt,eK as Yt,hg as ut,A as N,d as J,di as Qt,h as C,hh as Xt,hi as Kt,hj as Ae,T as re,H as ie,y as b,S as k,hk as qt,gv as Ee,hl as ht,k as Ke,u as Zt,hm as Jt,hn as He,w as at,ho as ce,bV as qe,hp as es,dD as gt,hq as ts,hr as ss,hs as ns,ht as as,hu as os,hv as pt,hw as is,hx as rs,dp as ft,hy as ls,hz as ds,hA as cs,hB as Z,E as us,hC as hs,hD as gs,hE as ps,hF as fs,cu as Ze,R as mt,b3 as ms,bD as Je,b1 as xs,b2 as ot,bl as H,bT as bs,J as xt,c$ as ws,fj as js,hG as bt,dJ as ys,hH as Cs,hI as Ie,gJ as Le,hJ as vs,cB as wt,hK as Ms,hL as $s,hM as jt,hN as Ss,cz as oe,dP as yt,hO as Ct,hP as Ds,hQ as Rs,cS as We,hR as Es,ha as ke,hS as As,hT as Is,g5 as Ls,gc as vt,an as Mt,hU as ks,hV as Fs,hW as Ts,hX as Ps,hY as it,hZ as Os,h_ as Ns,h$ as _s,i0 as Bs,dq as zs,i1 as Us,i2 as Hs,i3 as Ws,L as rt,P as $t,dU as Vs,i4 as Ve,i5 as Gs,i6 as Ys,i7 as Qs,i8 as Xs,i9 as Ks,ia as qs,ib as Zs,ic as Js,id as en,gn as tn,W as sn,X as nn}from"./strapi-BDKWuskm.js";import{g as an}from"./users-CHXWXr2I.js";const St=e=>{const{formatMessage:s}=T(),{data:n,isLoading:r}=Ht({id:e},{skip:e===null}),{data:o,isLoading:d}=Wt({folder:null,pageSize:1},{skip:e!==null}),a=s({id:l("plugin.home"),defaultMessage:"Home"});return e===null?d?{title:a,itemCount:0}:{title:a,itemCount:o?.pagination?.total??0}:r||!n?{title:"",itemCount:0}:{title:n.name,itemCount:n.files?.count??0}},on=1,rn=({anchorX:e,anchorY:s,point:n,aspectRatio:r})=>{let o=Math.abs(n.x-e),d=Math.abs(n.y-s);r&&(o/r>=d?d=o/r:o=d*r);const a=n.x<e?e-o:e,h=n.y<s?s-d:s;return{x:a,y:h,width:o,height:d}},Dt=(e,s,n)=>s==="right"?{x:n.height-(e.y+e.height),y:e.x,width:e.height,height:e.width}:{x:e.y,y:n.width-(e.x+e.width),width:e.height,height:e.width},ln=(e,s,n)=>{let r=e,o=n;for(let d=0;d<s/90;d+=1)r=Dt(r,"left",o),o={width:o.height,height:o.width};return r},dn=(e,s)=>(e+(s==="right"?90:270))%360,cn=()=>{const[e,s]=i.useState({width:0,height:0}),[n,r]=i.useState({x:0,y:0,width:0,height:0}),[o,d]=i.useState(null),[a,h]=i.useState(0),g=i.useRef(null),f=i.useCallback(p=>{g.current=p;const c={width:p.naturalWidth,height:p.naturalHeight};s(c),r({x:0,y:0,width:c.width,height:c.height}),h(0)},[]),m=i.useCallback(p=>{r(c=>Dt(c,p,e)),s(c=>({width:c.height,height:c.width})),h(c=>dn(c,p)),d(c=>c&&1/c)},[e]),u=(p,c,E)=>Math.min(E,Math.max(c,p)),j=i.useCallback(p=>{r(c=>{const E=e.width-c.x,w=e.height-c.y;let M=p.width!==void 0?u(p.width,1,E):c.width,y=p.height!==void 0?u(p.height,1,w):c.height;return o&&(p.width!==void 0?y=u(M/o,1,w):p.height!==void 0&&(M=u(y*o,1,E))),{...c,width:M,height:y}})},[e.width,e.height,o]),$=i.useCallback(p=>{r(c=>{const E=p.x!==void 0?u(p.x,0,e.width-c.width):c.x,w=p.y!==void 0?u(p.y,0,e.height-c.height):c.y;return{...c,x:E,y:w}})},[e.width,e.height]),R=i.useCallback(p=>{d(p),p&&r(c=>{const E=e.width-c.x,w=e.height-c.y;let M=c.width,y=M/p;return y>w&&(y=w,M=y*p),M>E&&(M=E,y=M/p),{...c,width:Math.round(M),height:Math.round(y)}})},[e.width,e.height]),S=i.useCallback((p,c,E)=>new Promise((w,M)=>{const y=g.current;if(!y){M(new Error("Image not ready: call init() before produceFile()."));return}const P=document.createElement("canvas");P.width=Math.max(1,Math.round(n.width)),P.height=Math.max(1,Math.round(n.height));const v=P.getContext("2d");if(!v){M(new Error("Could not get a 2D canvas context to crop the image."));return}const F=ln(n,a,e);v.translate(P.width/2,P.height/2),v.rotate(a*Math.PI/180),v.drawImage(y,F.x,F.y,F.width,F.height,-F.width/2,-F.height/2,F.width,F.height),P.toBlob(_=>{if(!_){M(new Error("Could not export the cropped image to a blob."));return}w(new File([_],p,{type:c,lastModified:E?new Date(E).getTime():Date.now()}))},c,on)}),[n,a,e]);return{init:f,crop:n,naturalSize:e,rotation:a,rotate:m,aspectRatio:o,setCropSize:j,setCropPosition:$,setAspectRatio:R,produceFile:S,width:Math.round(n.width),height:Math.round(n.height)}},ve=5.6,Ge=12,un=b(C)`
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
`,hn=b(C)`
  position: absolute;
  top: ${({theme:e})=>e.spaces[3]};
  right: ${({theme:e})=>e.spaces[3]};
  z-index: 1;
`,gn=b(C)`
  width: 100%;
  gap: ${({theme:e})=>e.spaces[2]};
  padding: ${({theme:e})=>`${e.spaces[3]} ${e.spaces[5]}`};
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
  background: ${({theme:e})=>e.colors.neutral0};
`,pn=b(k)`
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
`,fn=b.div`
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
`,mn=b.div`
  position: absolute;
  border: 1px dashed ${({theme:e})=>e.colors.primary600};
  box-shadow: 0 0 0 9999px rgba(33, 33, 52, 0.5);
  cursor: move;
  /* Without this, touch browsers claim the gesture for scrolling and fire
     pointercancel mid-drag — the crop drag dies while the finger is down. */
  touch-action: none;
`,Me=b.button`
  position: absolute;
  width: ${Ge}px;
  height: ${Ge}px;
  margin: -${Ge/2}px;
  padding: 0;
  border: 1px solid ${({theme:e})=>e.colors.primary600};
  border-radius: 2px;
  background: ${({theme:e})=>e.colors.neutral0};
  cursor: ${({$cursor:e})=>e};
  touch-action: none;
`,xn=b.button`
  position: absolute;
  width: ${ve}rem;
  height: ${ve}rem;
  margin: ${-ve/2}rem 0 0 ${-ve/2}rem;
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
`,bn=b(k)`
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
`,wn=b(C)`
  width: 100%;
  justify-content: space-between;
  padding: ${({theme:e})=>`${e.spaces[3]} ${e.spaces[5]}`};
  border-top: 1px solid ${({theme:e})=>e.colors.neutral150};
  background: ${({theme:e})=>e.colors.neutral0};
`,$e=b(re.Root)`
  flex-direction: row;
  align-items: center;
`,Se=b(qt)`
  width: 8.4rem;
`,lt=b(re.Label)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.6rem;
  height: 1.6rem;
`,jn=b(k)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);

  svg {
    display: block;
  }
`,yn=()=>t.jsx(jn,{children:t.jsx("svg",{width:"17",height:"49",viewBox:"0 0 17 49",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M0.5 0.5H8.5C12.9183 0.5 16.5 4.08172 16.5 8.5M0.5 48.5H8.5C12.9183 48.5 16.5 44.9183 16.5 40.5",stroke:"#666687",strokeLinecap:"round"})})}),Cn=({asset:e,isBusy:s=!1,onClose:n,onApply:r,onSaveAsCopy:o,canSaveAsCopy:d})=>{const{formatMessage:a}=T(),{toggleNotification:h}=ct(),f=Vt().colorScheme==="dark",m=f?"neutral1000":"neutral0",u=f?"neutral600":"neutral200",j=i.useRef(null),$=i.useRef(null),R=i.useRef(null);i.useEffect(()=>{R.current?.focus()},[]);const{init:S,crop:p,naturalSize:c,aspectRatio:E,setCropSize:w,setCropPosition:M,setAspectRatio:y,produceFile:P,rotation:v,rotate:F,width:_,height:V}=cn(),[G,Q]=i.useState(!1),[L,ee]=i.useState(e.focalPoint??{x:50,y:50}),te=x=>{F(x),ee(D=>({x:100-D.y,y:D.x}))},X=be(e.url),ue=e.updatedAt&&!e.isUrlSigned?new Date(e.updatedAt).getTime():void 0,I=ue!==void 0?`${X}${X.includes("?")?"&":"?"}updatedAt=${ue}`:X,z=v===90||v===270,U=i.useMemo(()=>{if(!v)return;const x=c.width&&c.height?c.width/c.height:void 0;return!z||!x?{transform:`rotate(${v}deg)`}:{position:"absolute",top:"50%",left:"50%",maxWidth:"none",maxHeight:"none",width:`${100/x}%`,height:`${100*x}%`,transform:`translate(-50%, -50%) rotate(${v}deg)`}},[v,z,c.width,c.height]),he=()=>{j.current&&S(j.current)},K=x=>{const D=$.current?.getBoundingClientRect();if(!D||!c.width||!c.height)return null;const A=c.width/D.width,O=c.height/D.height;return{x:(x.clientX-D.left)*A,y:(x.clientY-D.top)*O}},Y=i.useRef(null);i.useEffect(()=>()=>{Y.current?.()},[]);const fe=(x,D)=>{x.preventDefault(),x.stopPropagation();const{pointerId:A}=x;try{x.currentTarget.setPointerCapture(A)}catch{}const O=le=>{le.pointerId===A&&D(le)},W=()=>{window.removeEventListener("pointermove",O),window.removeEventListener("pointerup",q),window.removeEventListener("pointercancel",q),Y.current=null},q=le=>{le.pointerId===A&&W()};Y.current?.(),Y.current=W,window.addEventListener("pointermove",O),window.addEventListener("pointerup",q),window.addEventListener("pointercancel",q)},Te=x=>{const D=K(x);if(!D)return;const A={...p};fe(x,O=>{const W=K(O);W&&M({x:A.x+(W.x-D.x),y:A.y+(W.y-D.y)})})},ge=x=>D=>{const A={...p},O=x==="tl"||x==="bl"?A.x+A.width:A.x,W=x==="tl"||x==="tr"?A.y+A.height:A.y;fe(D,q=>{const le=K(q);if(!le)return;const{x:_t,y:Bt,width:zt,height:Ut}=rn({anchorX:O,anchorY:W,point:le,aspectRatio:G?E:null});M({x:_t,y:Bt}),w({width:zt,height:Ut})})},Pe=()=>{Q(x=>{const D=!x;return y(D&&V?_/V:null),D})},Oe=x=>{fe(x,D=>{const A=K(D);if(!A)return;const O=(A.x-p.x)/p.width*100,W=(A.y-p.y)/p.height*100;ee({x:Math.round(Math.min(100,Math.max(0,O))),y:Math.round(Math.min(100,Math.max(0,W)))})})},Ne=Math.round(L.x/100*_),_e=Math.round(L.y/100*V),me=(x,D)=>{const A=x==="x"?_:V;if(!A)return;const O=Math.min(100,Math.max(0,D/A*100));ee(W=>({...W,[x]:Math.round(O)}))},se=v,[ye,pe]=i.useState(0),[Be,ze]=i.useState(0),Ue=()=>pe(x=>x+1),Ce=()=>ze(x=>x+1),ne=c.width&&c.height?{left:p.x/c.width*100,top:p.y/c.height*100,width:p.width/c.width*100,height:p.height/c.height*100}:null,B=ne!==null,ae=async x=>{if(!B)return;let D;try{D=await P(e.name,e.mime??"image/png",e.updatedAt)}catch{h({type:"danger",message:a({id:l("asset-details.crop.export-error"),defaultMessage:"Could not process the cropped image."})});return}const A={x:Math.round(L.x),y:Math.round(L.y)};x==="apply"?r(D,A):o(D,A)};return t.jsx(Gt,{children:t.jsx(Yt,{onEscape:n,skipAutoFocus:!0,children:t.jsxs(un,{ref:R,tabIndex:-1,children:[t.jsxs(gn,{alignItems:"center",children:[t.jsx(ut,{"aria-hidden":!0}),t.jsx(N,{variant:"omega",fontWeight:"bold",children:a({id:l("asset-details.crop.title"),defaultMessage:"Crop & Focus area"})})]}),t.jsxs(pn,{children:[t.jsx(hn,{direction:"column",gap:1,children:t.jsx(J,{disabled:!B,onClick:()=>te("right"),label:a({id:l("asset-details.crop.rotate-right"),defaultMessage:"Rotate 90° right"}),children:t.jsx(Qt,{})})}),t.jsxs(fn,{ref:$,$aspect:c.width&&c.height?c.width/c.height:void 0,children:[z?t.jsx("div",{"aria-hidden":!0,style:{width:c.width,maxWidth:"100%"}}):null,t.jsx("img",{ref:j,"data-testid":"crop-editor-image",style:U,src:I,alt:e.name,crossOrigin:"anonymous",onLoad:he,draggable:!1}),ne?t.jsxs(mn,{style:{left:`${ne.left}%`,top:`${ne.top}%`,width:`${ne.width}%`,height:`${ne.height}%`},onPointerDown:Te,children:[t.jsx(Me,{type:"button","aria-label":a({id:l("asset-details.crop.resize.top-left"),defaultMessage:"Resize top-left"}),$cursor:"nwse-resize",style:{left:0,top:0},onPointerDown:ge("tl")}),t.jsx(Me,{type:"button","aria-label":a({id:l("asset-details.crop.resize.top-right"),defaultMessage:"Resize top-right"}),$cursor:"nesw-resize",style:{right:0,top:0},onPointerDown:ge("tr")}),t.jsx(Me,{type:"button","aria-label":a({id:l("asset-details.crop.resize.bottom-left"),defaultMessage:"Resize bottom-left"}),$cursor:"nesw-resize",style:{left:0,bottom:0},onPointerDown:ge("bl")}),t.jsx(Me,{type:"button","aria-label":a({id:l("asset-details.crop.resize.bottom-right"),defaultMessage:"Resize bottom-right"}),$cursor:"nwse-resize",style:{right:0,bottom:0},onPointerDown:ge("br")}),t.jsx(xn,{type:"button","aria-label":a({id:l("asset-details.crop.focal-point"),defaultMessage:"Focal point"}),style:{left:`${L.x}%`,top:`${L.y}%`},onPointerDown:Oe})]}):null]}),t.jsxs(bn,{children:[t.jsxs(C,{direction:"column",alignItems:"stretch",gap:1,paddingBottom:3,children:[t.jsx(N,{variant:"omega",fontWeight:"bold",textColor:m,children:a({id:l("asset-details.crop.title"),defaultMessage:"Crop & Focus area"})}),t.jsx(N,{variant:"pi",textColor:u,children:a({id:l("asset-details.crop.hint"),defaultMessage:"Set the crop area with the rectangle. Pin the always-visible area with the circle."})})]}),t.jsxs(C,{gap:6,alignItems:"center",children:[t.jsxs(C,{alignItems:"center",gap:2,children:[t.jsxs(C,{direction:"column",gap:2,children:[t.jsxs($e,{name:"crop-width",gap:2,children:[t.jsx(lt,{textColor:m,children:t.jsx(Xt,{})}),t.jsx(Se,{"aria-label":a({id:l("asset-details.crop.width"),defaultMessage:"Width (px)"}),value:_,min:1,max:c.width||void 0,onValueChange:x=>{x!==void 0&&w({width:x})}},`crop-width-${se}`)]}),t.jsxs($e,{name:"crop-height",gap:2,children:[t.jsx(lt,{textColor:m,children:t.jsx(Kt,{})}),t.jsx(Se,{"aria-label":a({id:l("asset-details.crop.height"),defaultMessage:"Height (px)"}),value:V,min:1,max:c.height||void 0,onValueChange:x=>{x!==void 0&&w({height:x})}},`crop-height-${se}`)]})]}),t.jsxs(C,{position:"relative",children:[t.jsx(J,{label:a({id:l("asset-details.crop.aspect-lock"),defaultMessage:"Lock aspect ratio"}),variant:G?"secondary":"ghost",onClick:Pe,children:t.jsx(Ae,{})}),t.jsx(yn,{})]})]}),t.jsxs(C,{direction:"column",gap:2,marginLeft:"auto",children:[t.jsxs($e,{name:"focal-x",gap:2,children:[t.jsx(re.Label,{textColor:m,children:a({id:l("asset-details.crop.focal-x-axis"),defaultMessage:"X"})}),t.jsx(Se,{"aria-label":a({id:l("asset-details.crop.focal-x"),defaultMessage:"Focal point X (px)"}),value:Ne,min:0,max:_||void 0,onValueChange:x=>{x!==void 0&&me("x",x)},onBlur:Ue},`focal-x-${ye}`)]}),t.jsxs($e,{name:"focal-y",gap:2,children:[t.jsx(re.Label,{textColor:m,children:a({id:l("asset-details.crop.focal-y-axis"),defaultMessage:"Y"})}),t.jsx(Se,{"aria-label":a({id:l("asset-details.crop.focal-y"),defaultMessage:"Focal point Y (px)"}),value:_e,min:0,max:V||void 0,onValueChange:x=>{x!==void 0&&me("y",x)},onBlur:Ce},`focal-y-${Be}`)]})]})]})]})]}),t.jsxs(wn,{alignItems:"center",children:[t.jsx(ie,{variant:"tertiary",onClick:n,disabled:s,children:a({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),t.jsxs(C,{gap:2,children:[d&&t.jsx(ie,{variant:"secondary",onClick:()=>ae("copy"),loading:s,disabled:!B,children:a({id:l("asset-details.crop.save-as-copy"),defaultMessage:"Save as copy"})}),t.jsx(ie,{variant:"default",onClick:()=>ae("apply"),loading:s,disabled:!B,children:a({id:l("asset-details.crop.apply"),defaultMessage:"Apply"})})]})]})]})})})},xe=b(k)`
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
`,De=b(C)`
  justify-content: center;
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
`,vn=b.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`,Mn=b(C)`
  position: absolute;
  top: ${({theme:e})=>e.spaces[3]};
  right: ${({theme:e})=>e.spaces[3]};
  z-index: 3;
`,$n=b.video`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`,Sn=b.audio`
  width: 100%;
`,Dn=b.iframe`
  width: 100%;
  height: 100%;
  min-height: 200px;
  border: none;
`,Rn=b(C)`
  height: 100%;
  aspect-ratio: 1;
  width: auto;
  max-width: 100%;
  margin: 0 auto;
  color: ${({theme:e})=>e.colors.neutral500};
  background: ${({theme:e})=>e.colors.neutral150};
`,En=b(C)`
  position: absolute;
  inset: 0;
  z-index: 1;
`,Re=()=>{const{formatMessage:e}=T();return t.jsx(En,{justifyContent:"center",alignItems:"center",children:t.jsx(Ke,{children:e({id:"app.loading",defaultMessage:"Loading..."})})})},An=({asset:e,actions:s,isLoading:n=!1})=>{const{formatMessage:r}=T(),{alternativeText:o,ext:d,mime:a,url:h,updatedAt:g,isUrlSigned:f,isLocal:m}=e,u=g&&!f?new Date(g).getTime():void 0,j=w=>!w||u===void 0?w:w.includes("?")?`${w}&v=${u}`:`${w}?v=${u}`,$=j(be(h)),[R,S]=i.useState(!1);i.useEffect(()=>{S(!1)},[$]);const p=i.useRef(null);if(i.useEffect(()=>{const w=p.current;if(!w)return;const M=()=>{const P=w.parentElement;if(!P)return;const v=P.getBoundingClientRect(),F=w.offsetWidth,_=w.offsetHeight;!F||!_||!v.width||v.height};M();const y=new ResizeObserver(M);return y.observe(w),w.parentElement&&y.observe(w.parentElement),()=>y.disconnect()},[R]),a?.includes(Ee.Image)){const w=j(be(h));if(w)return t.jsxs(xe,{children:[(!R||n)&&t.jsx(Re,{}),s?t.jsx(Mn,{children:s}):null,t.jsx(De,{children:t.jsx(vn,{ref:p,src:w,alt:o||e.name||"",crossOrigin:!m&&f?"anonymous":void 0,onLoad:()=>S(!0),onError:()=>S(!0)})})]})}if(a?.includes(Ee.Video)&&$)return t.jsxs(xe,{children:[!R&&t.jsx(Re,{}),t.jsx(De,{children:t.jsx($n,{src:$,controls:!0,title:e.name,onLoadedData:()=>S(!0),onError:()=>S(!0),children:r({id:l("asset-details.videoNotSupported"),defaultMessage:"Your browser does not support the video tag."})})})]});if(a?.includes(Ee.Audio)&&$)return t.jsxs(xe,{children:[!R&&t.jsx(Re,{}),t.jsx(De,{children:t.jsx(C,{width:"100%",padding:4,justifyContent:"center",alignItems:"center",height:"100%",minHeight:"12rem",children:t.jsx(Sn,{src:$,controls:!0,onLoadedData:()=>S(!0),onError:()=>S(!0)})})})]});if((d?.toLowerCase()==="pdf"||d?.toLowerCase()===".pdf"||a==="application/pdf")&&$)return t.jsxs(xe,{children:[!R&&t.jsx(Re,{}),t.jsx(De,{children:t.jsx(Dn,{src:`${$}#toolbar=0`,title:e.name,onLoad:()=>S(!0)})})]});const E=ht(a,d);return t.jsx(xe,{children:t.jsxs(Rn,{justifyContent:"center",alignItems:"center",gap:1,direction:"column",hasRadius:!0,children:[t.jsx(E,{width:24,height:24}),t.jsx(N,{variant:"pi",children:r({id:l("asset-details.noPreview"),defaultMessage:"No preview available"})})]})})},Rt=i.createContext(null),Et=()=>{const e=i.useContext(Rt);if(!e)throw new Error("useDrawerNotify must be used within AssetDetails");return e},At=i.createContext(null),It=()=>{const e=i.useContext(At);if(!e)throw new Error("useAssetOperation must be used within AssetDetails");return e},Lt=()=>{const[{query:e},s]=Zt(),n=Jt(e?.[He]),r=n!==null,[o,d]=i.useState(r),a=i.useRef(null);i.useEffect(()=>{r&&(a.current=n,d(!0))},[r,n]);const h=i.useCallback(m=>{m.target===m.currentTarget&&!r&&d(!1)},[r]),g=i.useCallback(m=>{s(at(e,{[He]:String(m)}),"push",!0)},[e,s]),f=i.useCallback(()=>{s(at(e,{[He]:void 0}),"push",!0)},[e,s]);return{assetId:r?n:a.current,isVisible:r,shouldRenderDrawer:o,onCloseAnimationEnd:h,openDetails:g,closeDetails:f}},In=b(C)`
  flex: 0 0 calc(50% - ${({theme:e})=>e.spaces[2]});
`,de=({label:e,value:s})=>t.jsxs(In,{direction:"column",justifyContent:"flex-start",alignItems:"flex-start",gap:1,children:[t.jsx(N,{variant:"sigma",textColor:"neutral600",fontWeight:"semiBold",textTransform:"uppercase",children:e}),t.jsx(N,{variant:"pi",textColor:"neutral700",children:s??"-"})]}),Ln=b(k)`
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
`,kn=b(k)`
  position: absolute;
  top: ${({theme:e})=>e.spaces[2]};
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  width: calc(100% - ${({theme:e})=>e.spaces[2]});
`,Fn=e=>e.isDeleting?{id:l("asset-details.delete.loading"),defaultMessage:"Deleting the file…"}:e.isCropCopying?{id:l("asset-details.crop.loading"),defaultMessage:"Saving the copy…"}:e.isReplacing?{id:l("asset-details.replace.loading"),defaultMessage:"Replacing the file…"}:null,Tn=b(xt)`
  width: 1.6rem;
  height: 1.6rem;

  path {
    fill: ${({theme:e})=>e.colors.warning500};
  }
`,Ye=({name:e,label:s,required:n,disabled:r})=>{const{formatMessage:o}=T(),d=mt(e),a=Ze("DetailField",u=>u.isSubmitting),h=d.value??"",[g,f]=i.useState(h);i.useEffect(()=>{f(h)},[h]);const m=o({id:l("asset-details.field.empty"),defaultMessage:"{label} is currently empty."},{label:s});return t.jsxs(re.Root,{name:e,required:n,children:[t.jsx(re.Label,{children:s}),t.jsx(ms,{value:g,onChange:u=>{f(u.target.value),d.onChange(e,u.target.value)},endAction:g?void 0:t.jsx(Je,{label:m,children:t.jsx(Tn,{"aria-label":m,role:"img"})}),type:"text",disabled:a||r})]})},Pn=({label:e,rootLabel:s,folders:n,disabled:r})=>{const o=mt("folder"),d=Ze("LocationField",a=>a.isSubmitting);return t.jsxs(re.Root,{name:"folder",required:!0,children:[t.jsx(re.Label,{children:e}),t.jsxs(xs,{value:o.value==null?"":String(o.value),onChange:a=>{const h=a===""?null:Number(a);o.onChange("folder",h)},disabled:d||r,children:[t.jsx(ot,{value:"",children:s}),n.map(a=>t.jsx(ot,{value:String(a.id),children:a.name},a.id))]})]})},On=()=>{const{formatMessage:e}=T(),{deleteAsset:s,isDeleting:n}=It(),[r,o]=i.useState(!1),d=async()=>{await s(),o(!1)},a=e({id:l("asset-details.delete.trigger"),defaultMessage:"Delete this file"});return t.jsxs(H.Root,{open:r,onOpenChange:o,children:[t.jsx(H.Trigger,{children:t.jsx(J,{label:a,variant:"danger-light",children:t.jsx(bs,{})})}),t.jsxs(H.Content,{children:[t.jsx(H.Header,{children:e({id:l("asset-details.delete.title"),defaultMessage:"Delete this media file?"})}),t.jsx(H.Body,{icon:t.jsx(xt,{width:"24px",height:"24px",fill:"danger600"}),textAlign:"center",children:e({id:l("asset-details.delete.description"),defaultMessage:"This file cannot be recovered once deleted. If it is currently in use, linked content will break and image containers will be empty."})}),t.jsxs(H.Footer,{children:[t.jsx(H.Cancel,{children:t.jsx(ie,{variant:"tertiary",disabled:n,fullWidth:!0,children:e({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})}),t.jsx(H.Action,{children:t.jsx(ie,{variant:"danger-light",loading:n,onClick:d,fullWidth:!0,children:e({id:"app.components.Button.confirm",defaultMessage:"Confirm"})})})]})]})]})},Nn=({asset:e})=>{const{formatMessage:s}=T(),{copy:n}=ws(),r=Et(),o=async()=>{const d=be(e.url);if(!d)return;const a=await n(d);r({type:a?"success":"danger",message:s(a?{id:l("asset-details.copy-link.success"),defaultMessage:"Link copied."}:{id:l("asset-details.copy-link.error"),defaultMessage:"Failed to copy the link."})})};return t.jsx(J,{label:s({id:l("asset-details.copy-link.trigger"),defaultMessage:"Copy link"}),variant:"tertiary",onClick:o,children:t.jsx(Ae,{})})},_n=({asset:e})=>{const{formatMessage:s}=T(),n=Et(),[r,o]=i.useState(!1),d=async()=>{const a=be(e.url);if(a){o(!0);try{await Cs(a,e.name)}catch{n({type:"danger",message:s({id:l("asset-details.download.error"),defaultMessage:"Failed to download the file."})})}finally{o(!1)}}};return t.jsx(J,{label:s({id:l("asset-details.download.trigger"),defaultMessage:"Download"}),variant:"tertiary",onClick:d,disabled:r,children:t.jsx(js,{})})},Bn=({mime:e})=>{const{formatMessage:s}=T(),{replaceAsset:n,isReplacing:r}=It(),o=i.useRef(null),[d,a]=i.useState(!1),h=bt({mime:e}),g=()=>{a(!0)},f=()=>{a(!1),o.current?.click()},m=async u=>{const j=u.target.files?.[0];u.target.value="",j&&await n(j)};return t.jsxs(t.Fragment,{children:[t.jsx(qe,{children:t.jsx("input",{ref:o,type:"file",accept:e??"",multiple:!1,onChange:m,"aria-hidden":!0,tabIndex:-1})}),t.jsx(J,{label:s({id:l("asset-details.replace.trigger"),defaultMessage:"Replace this file"}),variant:"tertiary",onClick:g,disabled:r,children:t.jsx(ys,{})}),t.jsx(H.Root,{open:d,onOpenChange:a,children:t.jsxs(H.Content,{children:[t.jsx(H.Header,{children:s({id:l("asset-details.replace.title"),defaultMessage:"Replace this media file?"})}),t.jsx(H.Body,{textAlign:"center",children:t.jsxs(C,{direction:"column",textAlign:"center",children:[t.jsx(N,{variant:"omega",children:s({id:l("asset-details.replace.description"),defaultMessage:"Current content will be permanently replaced."})}),h?t.jsx(N,{variant:"omega",children:s({id:l("asset-details.replace.description.ai"),defaultMessage:"AI will generate new metadata after upload."})}):null]})}),t.jsxs(H.Footer,{children:[t.jsx(H.Cancel,{children:t.jsx(ie,{variant:"tertiary",fullWidth:!0,children:s({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})}),t.jsx(H.Action,{children:t.jsx(ie,{variant:"secondary",onClick:f,fullWidth:!0,children:s({id:l("asset-details.replace.continue"),defaultMessage:"Continue"})})})]})]})})]})},zn=({onCrop:e})=>{const{formatMessage:s}=T(),n=Ze("AssetImageActions",r=>r.isSubmitting);return t.jsx(C,{direction:"column",gap:2,children:t.jsx(J,{label:s({id:l("asset-details.crop.trigger"),defaultMessage:"Crop"}),variant:"tertiary",onClick:e,disabled:n||!e,children:t.jsx(ut,{})})})},Un=({asset:e,closeDetails:s})=>{const{formatMessage:n,formatDate:r}=T(),o=os(),{canCreate:d,canUpdate:a,canDownload:h,canCopyLink:g}=pt(),{data:f=[]}=is(),{toggleNotification:m}=ct(),[u]=rs(),{trackUsage:j}=ft(),[$,{isLoading:R}]=ls(),[S,{isLoading:p}]=ds(),[c,{isLoading:E}]=cs(),[w,M]=i.useState(!1),[y,P]=i.useState(null);i.useEffect(()=>{if(!y)return;const I=window.setTimeout(()=>P(null),5e3);return()=>window.clearTimeout(I)},[y]);const v=i.useCallback(I=>P(I),[]),F=e.mime?.includes(Ee.Image),_={name:e.name??"",caption:e.caption??"",alternativeText:e.alternativeText??"",folder:typeof e.folder=="object"&&e.folder!==null?e.folder.id??null:e.folder??null},V=async I=>{const z={name:I.name,caption:I.caption,alternativeText:I.alternativeText,folder:I.folder},U=await u({id:e.id,fileInfo:z});if("error"in U){v({type:"danger",message:o(U.error,n({id:l("asset-details.update.error"),defaultMessage:"Failed to update the file."}))});return}j("didEditMediaLibraryElements",{location:Z,type:e.mime?.split("/")[0],changeLocation:I.folder!==_.folder}),v({type:"success",message:n({id:l("asset-details.update.success"),defaultMessage:"File updated"})})},{title:G}=St(typeof e.folder=="object"&&e.folder!==null?e.folder.id??null:e.folder??null),Q=i.useCallback(async I=>{const z=await $({id:e.id,file:I,fileInfo:{name:e.name}});if("error"in z){v({type:"danger",message:o(z.error,n({id:l("asset-details.replace.error"),defaultMessage:"Failed to replace the file."}))});return}j("didReplaceMedia",{location:Z}),v({type:"success",message:n({id:l("asset-details.replace.success"),defaultMessage:"File replaced."})})},[e.id,e.name,n,o,v,$,j]),L=i.useCallback(async()=>{const I=await S(e.id);if("error"in I){v({type:"danger",message:o(I.error,n({id:l("asset-details.delete.error"),defaultMessage:"Failed to delete the asset."}))});return}m({type:"success",message:n({id:l("asset-details.delete.success"),defaultMessage:"1 element have been deleted from {folderName}"},{folderName:G})}),s()},[e.id,s,S,G,n,o,v,m]),ee=I=>{v({type:"danger",message:o(I,n({id:l("asset-details.crop.error"),defaultMessage:"Failed to update the file."}))})},te=async(I,z)=>{M(!1);const U=await $({id:e.id,file:I,fileInfo:{focalPoint:z}});if("error"in U){ee(U.error);return}j("didCropFile",{location:Z,duplicatedFile:!1}),v({type:"success",message:n({id:l("asset-details.crop.success"),defaultMessage:"File updated"})})},X=async(I,z)=>{M(!1);const U=await c({file:I,fileInfo:{name:e.name,caption:e.caption??"",alternativeText:e.alternativeText??"",folder:_.folder,focalPoint:z}});if("error"in U){ee(U.error);return}j("didCropFile",{location:Z,duplicatedFile:!0}),v({type:"success",message:n({id:l("asset-details.crop.copy-success"),defaultMessage:"Copy created."})})},ue=i.useMemo(()=>({replaceAsset:Q,deleteAsset:L,isReplacing:R,isDeleting:p}),[Q,L,R,p]);return t.jsx(Rt.Provider,{value:v,children:t.jsx(At.Provider,{value:ue,children:t.jsx(Ln,{children:t.jsx(us,{method:"POST",initialValues:_,onSubmit:V,children:({modified:I,isSubmitting:z,values:U,resetForm:he})=>{const K=(U.name??"").trim()==="",Y=Fn({isDeleting:p,isReplacing:R,isCropCopying:E});return t.jsxs(t.Fragment,{children:[t.jsx(hs,{onProceed:he}),w&&F?t.jsx(Cn,{asset:e,onClose:()=>M(!1),onApply:te,onSaveAsCopy:X,canSaveAsCopy:d}):null,Y?t.jsx(gs,{children:n(Y)}):null,y?t.jsx(kn,{children:t.jsx(gt,{variant:y.type==="success"?"success":"danger",closeLabel:n({id:"global.close",defaultMessage:"Close"}),onClose:()=>P(null),children:y.message})}):null,t.jsxs(ce.ScrollableContent,{children:[t.jsx(An,{asset:e,actions:F&&a?t.jsx(zn,{onCrop:()=>M(!0)}):null}),t.jsxs(C,{direction:"column",alignItems:"stretch",gap:4,paddingTop:4,paddingBottom:4,paddingLeft:5,paddingRight:5,children:[t.jsx(N,{variant:"beta",fontWeight:"semiBold",tag:"h3",children:n({id:l("asset-details.fileInfo"),defaultMessage:"File info"})}),t.jsxs(C,{wrap:"wrap",gap:4,background:"neutral100",paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:6,alignItems:"flex-start",children:[t.jsx(de,{label:n({id:l("asset-details.creationDate"),defaultMessage:"Creation date"}),value:e.createdAt?r(new Date(e.createdAt),{dateStyle:"long",timeStyle:"short"}):null}),t.jsx(de,{label:n({id:l("asset-details.lastUpdated"),defaultMessage:"Last updated"}),value:e.updatedAt?r(new Date(e.updatedAt),{dateStyle:"long",timeStyle:"short"}):null}),t.jsx(de,{label:n({id:l("asset-details.createdBy"),defaultMessage:"Created by"}),value:e.createdBy?an({firstname:e.createdBy.firstname??void 0,lastname:e.createdBy.lastname??void 0,username:e.createdBy.username??void 0,email:e.createdBy.email??void 0})??"-":null}),t.jsx(de,{label:n({id:l("asset-details.size"),defaultMessage:"Size"}),value:e.size?ps(e.size,1):null}),F&&(e.width!=null||e.height!=null)&&t.jsx(de,{label:n({id:l("asset-details.dimensions"),defaultMessage:"Dimensions"}),value:e.width!=null&&e.height!=null?`${e.width} × ${e.height}`:null}),t.jsx(de,{label:n({id:l("asset-details.extension"),defaultMessage:"Extension"}),value:fs(e.ext)}),t.jsx(de,{label:n({id:l("asset-details.assetId"),defaultMessage:"Asset ID"}),value:String(e.id)})]}),t.jsx(Ye,{name:"name",label:n({id:l("asset-details.fileName"),defaultMessage:"File name"}),required:!0,disabled:!a}),t.jsx(Pn,{label:n({id:l("asset-details.location"),defaultMessage:"Location"}),rootLabel:n({id:l("plugin.home"),defaultMessage:"Home"}),folders:f,disabled:!a}),t.jsx(Ye,{name:"caption",label:n({id:l("asset-details.caption"),defaultMessage:"Caption"}),disabled:!a}),t.jsx(Ye,{name:"alternativeText",label:n({id:l("asset-details.alternativeText"),defaultMessage:"Alternative text"}),disabled:!a})]})]}),(a||g||h)&&t.jsxs(C,{justifyContent:"space-between",alignItems:"center",gap:2,padding:3,borderColor:"neutral150",borderStyle:"solid",borderWidth:"1px 0 0 0",background:"neutral0",children:[t.jsxs(C,{gap:2,children:[a&&t.jsx(On,{}),g&&t.jsx(Nn,{asset:e}),h&&t.jsx(_n,{asset:e}),a&&t.jsx(Bn,{mime:e.mime})]}),a&&t.jsx(ie,{type:"submit",variant:"default",loading:z,disabled:!I||z||K,children:n({id:l("asset-details.save"),defaultMessage:"Save changes"})})]})]})}},e.id)})})})},Hn=b(C)`
  flex-shrink: 0;
`,Wn=b(N)`
  min-width: 0;
`,Vn=({asset:e,closeDetails:s})=>{const n=e?ht(e.mime,e.ext):ns;return t.jsxs(C,{gap:2,paddingLeft:5,paddingTop:3,paddingBottom:3,paddingRight:3,borderColor:"neutral150",borderStyle:"solid",borderWidth:"0 0 1px 0",children:[t.jsx(Hn,{children:t.jsx(n,{width:20,height:20})}),t.jsx(ce.Title,{asChild:!0,children:t.jsx(Wn,{variant:"omega",fontWeight:"semiBold",overflow:"hidden",ellipsis:!0,tag:"h2",children:e.name})}),t.jsx(k,{marginLeft:"auto",children:t.jsx(ce.CloseButton,{onClose:s,children:t.jsx(as,{})})})]})},Gn=({assetId:e,closeDetails:s})=>{const{formatMessage:n}=T(),{data:r,isLoading:o,error:d}=es(e,{refetchOnMountOrArgChange:!1,refetchOnReconnect:!1,refetchOnFocus:!1});return o?t.jsx(C,{justifyContent:"center",padding:8,children:t.jsx(Ke,{children:n({id:"app.loading",defaultMessage:"Loading..."})})}):d||!r?t.jsx(C,{direction:"column",alignItems:"stretch",gap:4,padding:4,children:t.jsx(gt,{variant:"danger",closeLabel:n({id:"global.close",defaultMessage:"Close"}),onClose:s,children:n({id:l("asset-details.error"),defaultMessage:"Failed to load file details."})})}):t.jsxs(t.Fragment,{children:[t.jsx(Vn,{asset:r,closeDetails:s}),t.jsx(Un,{asset:r,closeDetails:s})]})},Yn=(e,s)=>!s||e.detail.originalEvent.button!==0?!0:e.target instanceof Element?e.target.closest(ts)!==null&&e.target.closest(ss)===null:!1,Qn=()=>{const{formatMessage:e}=T(),{assetId:s,isVisible:n,shouldRenderDrawer:r,onCloseAnimationEnd:o,closeDetails:d}=Lt();return!r||s===null?null:t.jsxs(ce.Root,{isVisible:n,onClose:d,children:[t.jsx("div",{children:t.jsxs(qe,{children:[t.jsx(ce.Title,{children:e({id:l("asset-details.title"),defaultMessage:"File details"})}),t.jsx(ce.Description,{children:e({id:l("asset-details.description"),defaultMessage:"Displays file information and metadata"})})]})}),t.jsx(ce.Body,{animationDirection:"left",width:"41.6rem",height:"100dvh",onAnimationEnd:o,onPointerDownOutside:a=>{Yn(a,n)&&a.preventDefault()},children:t.jsx(Gn,{assetId:s,closeDetails:d})})]})},kt=i.createContext(null),Xn=b(k)`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
`,Kn=({children:e,onDrop:s,disabled:n=!1})=>{const[r,o]=i.useState(!1),d=i.useRef(0),a=i.useMemo(()=>({isDragging:r}),[r]);i.useEffect(()=>{const u=()=>{o(!1),d.current=0},j=$=>{$.relatedTarget||(o(!1),d.current=0)};return document.addEventListener("dragend",u),document.addEventListener("dragleave",j),()=>{document.removeEventListener("dragend",u),document.removeEventListener("dragleave",j)}},[]);const h=i.useCallback(u=>{u.preventDefault(),u.stopPropagation(),!n&&u.dataTransfer.types.includes("Files")&&(d.current+=1,o(!0))},[n]),g=i.useCallback(u=>{u.preventDefault(),u.stopPropagation(),d.current-=1,d.current<=0&&(o(!1),d.current=0)},[]),f=i.useCallback(u=>{u.preventDefault(),u.stopPropagation(),u.dataTransfer.dropEffect="copy"},[]),m=i.useCallback(u=>{if(u.preventDefault(),u.stopPropagation(),o(!1),d.current=0,n)return;const{files:j}=u.dataTransfer;j?.length&&s&&s(Array.from(j))},[s,n]);return t.jsx(kt.Provider,{value:a,children:t.jsx(Xn,{"data-testid":"assets-dropzone",onDragEnter:h,onDragLeave:g,onDragOver:f,onDrop:m,children:e})})},Ft=()=>{const e=i.useContext(kt);if(!e)throw new Error("useUploadDropZone must be used within UploadDropZone");return{isDragging:e.isDragging}},qn=(e,s)=>`${e}${Math.floor(s*255).toString(16).padStart(2,"0")}`,Zn=b(k)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({theme:e})=>qn(e.colors.primary200,.3)};
  border: 1px solid ${({theme:e})=>e.colors.primary700};
  border-radius: ${({theme:e})=>e.borderRadius};
  z-index: 1;
  pointer-events: none;
`,Jn=({children:e})=>{const{isDragging:s}=Ft(),r=Ie()?.isInternalDragActive??!1,o=s&&!r;return t.jsxs(k,{position:"relative",children:[o&&t.jsx(Zn,{}),e]})},ea=b(k)`
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
`,ta=({uploadDropZoneRef:e,folderName:s})=>{const{formatMessage:n}=T(),{isDragging:r}=Ft(),d=Ie()?.isInternalDragActive??!1,a=r&&!d,[h,g]=i.useState(0);return i.useEffect(()=>{if(!e?.current)return;const f=()=>{const u=e.current?.getBoundingClientRect();u&&g(j=>j!==u.left?u.left:j)};f();const m=new ResizeObserver(f);return m.observe(e.current),()=>m.disconnect()},[e]),a?t.jsxs(ea,{$leftContentWidth:h,children:[t.jsx(N,{textColor:"neutral0",children:n({id:l("dropzone.upload.message"),defaultMessage:"Drop here to upload to"})}),t.jsxs(C,{gap:2,alignItems:"center",children:[t.jsx(Le,{width:20,height:20,fill:"neutral0"}),t.jsx(N,{textColor:"neutral0",fontWeight:"semiBold",children:s})]})]}):null},Tt=e=>{const{isMovePending:s,isValidDropTarget:n}=Ie()??{isMovePending:!1,isValidDropTarget:()=>!1},{active:r}=vs(),o=e.id==null?Ms:$s(e.id),d={kind:"folder-tree-target",id:e.id,name:e.name},a=wt({id:o,data:d,disabled:s}),h=n(e.id),g=a.isOver;return{droppable:a,isOver:g,showValidDropHighlight:g&&h,showInvalidDropCursor:g&&!h&&r!=null}},sa=4,na=(e,s)=>{if(s==null)return null;const n=jt(e,s);return!n||n.length-1<sa?null:{root:n[0],hidden:n.slice(1,-2),parent:n[n.length-2]}},aa=b.div`
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
`,oa=({folder:e,parentId:s,menuPosition:n,returnFocusTo:r,onCloseMenu:o})=>{const{formatMessage:d}=T();return t.jsx(Ss,{folder:e,dragData:{kind:"folder",id:e.id,name:e.name,parentId:s},showRename:!1,children:({items:a,dialogs:h})=>t.jsxs(t.Fragment,{children:[t.jsx(aa,{children:t.jsxs(oe.Root,{modal:!1,children:[t.jsx(oe.Trigger,{tag:J,icon:t.jsx(yt,{}),variant:"ghost",size:"S",onClick:g=>g.stopPropagation(),label:d({id:l("sidebar.tree.actions"),defaultMessage:"Actions for {name}"},{name:e.name})}),t.jsx(Ct,{popoverPlacement:"bottom-end",zIndex:2,minWidth:"22rem",children:a})]})}),n!==null&&t.jsx(Ds,{position:n,open:!0,label:d({id:l("list.folder.context-menu.label"),defaultMessage:"Folder actions"}),returnFocusTo:r,onClose:o,children:a}),h]})})},ia=600,Pt=({isOver:e,canExpand:s,onExpand:n})=>{i.useEffect(()=>{if(!e||!s)return;const r=setTimeout(n,ia);return()=>clearTimeout(r)},[e,s,n])},et=b.button`
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
  color: ${({$isActive:e,theme:s})=>e?s.colors.primary700:s.colors.neutral800};
  border-radius: ${({theme:e})=>e.borderRadius};
  cursor: ${({$isMovePending:e,$isInvalidDropCursor:s})=>e?"wait":s?"not-allowed":"pointer"};
  text-align: left;
  font: inherit;
  pointer-events: ${({$isMovePending:e})=>e?"none":"auto"};

  ${({$isValidDropTarget:e,theme:s})=>e&&ke`
      outline: 1px dashed ${s.colors.primary600};
      outline-offset: -1px;
    `}

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary600};
    outline-offset: -2px;
  }
`,ra=(e,s)=>({start:`${s} ${s} 0 0`,middle:"0",end:`0 0 ${s} ${s}`})[e],tt=b(C)`
  cursor: ${({$isMovePending:e,$isInvalidDropCursor:s})=>e?"wait":s?"not-allowed":"default"};
  pointer-events: ${({$isMovePending:e})=>e?"none":"auto"};
  border-radius: ${({$openPathSegment:e,theme:s})=>e?ra(e,s.borderRadius):s.borderRadius};
  background: ${({$isActive:e,$openPathSegment:s,theme:n})=>e?n.colors.primary100:s?n.colors.neutral100:"transparent"};

  // The whole row lights up, so pointing anywhere along it — chevron, label or
  // the actions trigger — reads as one target. A path row steps past its tint
  // rather than to primary100, which would make it look like a second open
  // folder (and, in dark mode, is the same colour as the tint).
  &:hover {
    background: ${({$isActive:e,$openPathSegment:s,theme:n})=>e?n.colors.primary100:s?n.colors.neutral150:n.colors.neutral100};
  }

  ${({$isValidDropTarget:e,theme:s})=>e&&ke`
      background: ${s.colors.primary100};
      outline: 1px dashed ${s.colors.primary600};
      outline-offset: -1px;

      &:hover {
        background: ${s.colors.primary100};
      }
    `}
`,la=(e,s)=>{const[n,r]=i.useState(()=>new Set);i.useEffect(()=>{if(s==null)return;const h=jt(e,s)?.slice(0,-1).map(g=>g.id).filter(g=>g!=null);!h||h.length===0||r(g=>{const f=new Set(g);let m=!1;for(const u of h)f.has(u)||(f.add(u),m=!0);return m?f:g})},[e,s]);const o=i.useCallback(h=>{r(g=>{const f=new Set(g);return f.has(h)?f.delete(h):f.add(h),f})},[]),d=i.useCallback(h=>{r(g=>{if(g.has(h))return g;const f=new Set(g);return f.add(h),f})},[]);return{isExpanded:i.useCallback(h=>n.has(h),[n]),toggleExpanded:o,expandFolder:d}},Fe=b.ul`
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
`,da=1.6,ca=4,Ot=e=>Math.min(e,ca)*da,st=.8,nt=.4,we=b(C)`
  width: 2.4rem;
  height: 2.4rem;
  min-width: 2.4rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
`,ua=b(J)`
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
`,ha=b(vt)`
  transform: rotate(${({$expanded:e})=>e?"0deg":"-90deg"});
  transition: transform 0.2s ease;
`,ga=({id:e,name:s,parentId:n,folderChildren:r,level:o,currentFolderId:d,showActiveFolder:a,isExpanded:h,onToggle:g,onExpand:f,onSelect:m,isMovePending:u,ancestorNames:j,isHiddenAncestor:$=!1,openPathSegment:R,subtree:S})=>{const{formatMessage:p}=T(),c=r.length>0,E=h(e)&&c,w=a&&d===e,M=[p({id:l("plugin.name"),defaultMessage:"Media Library"}),...j,s].join(" / "),{droppable:{setNodeRef:y},isOver:P,showValidDropHighlight:v,showInvalidDropCursor:F}=Tt({id:e,name:s}),_=i.useCallback(()=>f(e),[e,f]),[V,G]=i.useState(null),Q=i.useRef(null);return Pt({isOver:P,canExpand:!$&&c&&!E,onExpand:_}),t.jsxs("li",{children:[t.jsxs(tt,{ref:y,"data-native-context-menu":!0,alignItems:"center",paddingLeft:`${Ot(o)+st}rem`,paddingRight:`${nt}rem`,gap:1,$isActive:w,$openPathSegment:R,$isValidDropTarget:v,$isInvalidDropCursor:F,$isMovePending:u,onContextMenu:L=>{Is(L)&&(L.preventDefault(),G({x:L.clientX,y:L.clientY}))},children:[$?t.jsx(we,{"aria-hidden":!0}):t.jsx(ua,{label:c?p({id:l(E?"sidebar.tree.collapse":"sidebar.tree.expand"),defaultMessage:E?"Collapse {name}":"Expand {name}"},{name:s}):p({id:l("sidebar.tree.no-subfolders"),defaultMessage:"The folder {name} has no subfolders"},{name:s}),disabled:!c,onClick:L=>{L.stopPropagation(),g(e)},variant:"ghost",withTooltip:!1,"aria-expanded":c?E:void 0,children:t.jsx(ha,{$expanded:E,fill:"neutral500"})}),t.jsx(k,{flex:"1",minWidth:0,children:t.jsx(Je,{label:M,children:t.jsx(et,{ref:Q,type:"button",$isActive:w,$isValidDropTarget:v,$isInvalidDropCursor:F,$isMovePending:u,"aria-current":w?"page":void 0,onClick:()=>m(e),"data-testid":`folder-tree-node-${e}`,"data-folder-id":e,children:t.jsx(N,{ellipsis:!0,variant:"omega",fontWeight:w?"semiBold":"regular",children:s})})})}),t.jsx(oa,{folder:{id:e,name:s},parentId:n,menuPosition:V,returnFocusTo:Q.current,onCloseMenu:()=>G(null)})]}),c&&E&&!$&&(S??t.jsx(Fe,{children:r.map(L=>t.jsx(je,{node:L,parentId:e,level:o+1,currentFolderId:d,showActiveFolder:a,isExpanded:h,onToggle:g,onExpand:f,onSelect:m,isMovePending:u,ancestorNames:[...j,s]},L.id??L.name))}))]})},je=({node:e,...s})=>e.id==null?null:t.jsx(ga,{...s,id:e.id,name:e.name??"",folderChildren:e.children??[]}),pa=b(N)`
  font-style: italic;
`,fa=b(Ls)`
  transform: rotate(${({$expanded:e})=>e?"90deg":"0deg"});
  transition: transform 0.2s ease;
`,ma=({branch:e,isOpen:s,onOpenChange:n,...r})=>{const{formatMessage:o}=T(),d=i.useId(),a=i.useCallback(()=>n(!0),[n]),h=e.root.name??"",g=e.hidden.map(u=>u.name??""),{setNodeRef:f,isOver:m}=wt({id:As(e.root.id),disabled:r.isMovePending});return Pt({isOver:m,canExpand:!s,onExpand:a}),t.jsxs("li",{children:[t.jsx(tt,{ref:f,"data-native-context-menu":!0,alignItems:"center",paddingLeft:`${Ot(1)+st}rem`,paddingRight:`${nt}rem`,$isInvalidDropCursor:m,$isMovePending:r.isMovePending,children:t.jsx(Je,{label:g.join(" / "),children:t.jsxs(et,{type:"button",$isActive:!1,$isInvalidDropCursor:m,$isMovePending:r.isMovePending,"aria-expanded":s,"aria-controls":s?d:void 0,onClick:()=>n(!s),"data-testid":"folder-tree-hidden-ancestors",children:[t.jsx(we,{children:t.jsx(yt,{"aria-hidden":!0,fill:"neutral500"})}),t.jsx(k,{flex:"1",minWidth:0,children:t.jsx(pa,{ellipsis:!0,variant:"omega",textColor:"neutral600",children:o({id:l("sidebar.tree.hidden-ancestors"),defaultMessage:"{count, plural, one {# parent folder} other {# parent folders}}"},{count:e.hidden.length})})}),t.jsx(we,{children:t.jsx(fa,{"aria-hidden":!0,$expanded:s,fill:"neutral500"})})]})})}),s&&t.jsx(Fe,{id:d,children:e.hidden.map((u,j)=>i.createElement(je,{...r,key:u.id??u.name,node:u,parentId:(j===0?e.root.id:e.hidden[j-1].id)??null,level:2,ancestorNames:[h,...g.slice(0,j)],isHiddenAncestor:!0,openPathSegment:j===0?"start":"middle"}))})]})},xa=({branch:e,...s})=>{const{currentFolderId:n}=s,[r,o]=i.useState(!1),[d,a]=i.useState(n);d!==n&&(a(n),o(!1));const h=[e.root,...e.hidden].map(g=>g.name??"");return t.jsx(je,{...s,node:e.root,parentId:null,level:0,ancestorNames:[],subtree:t.jsxs(Fe,{children:[t.jsx(ma,{...s,branch:e,isOpen:r,onOpenChange:o}),t.jsx(je,{...s,node:e.parent,parentId:e.hidden[e.hidden.length-1]?.id??e.root.id??null,level:2,ancestorNames:h,openPathSegment:r?"end":void 0})]})})},Xe="[data-folder-tree-root]",ba=({currentFolderId:e,showActiveFolder:s=!0,onSelectFolder:n,backgroundContextMenu:r})=>{const{formatMessage:o}=T(),{data:d=[],isLoading:a,isError:h}=Rs(),{isExpanded:g,toggleExpanded:f,expandFolder:m}=la(d,e),{isMovePending:u}=Ie()??{isMovePending:!1},j=i.useMemo(()=>na(d,e),[d,e]),$=i.useRef(!1),R=i.useCallback(y=>{$.current=y!==e&&document.activeElement?.closest(Xe)!=null,n(y)},[e,n]);i.useEffect(()=>{!$.current||e==null||($.current=!1,document.activeElement===document.body&&document.querySelector(`${Xe} [data-folder-id="${e}"]`)?.focus())},[e]);const S={currentFolderId:e,showActiveFolder:s,isExpanded:g,onToggle:f,onExpand:m,onSelect:R,isMovePending:u},p=s&&e==null,c=o({id:l("sidebar.home"),defaultMessage:"Home"}),{droppable:{setNodeRef:E},showValidDropHighlight:w,showInvalidDropCursor:M}=Tt({id:null,name:c});return t.jsxs(We.Main,{"data-folder-tree-root":!0,"aria-label":o({id:l("sidebar.tree.aria-label"),defaultMessage:"Media library folders"}),children:[r,t.jsx(We.Header,{label:o({id:l("sidebar.title"),defaultMessage:"Media library"})}),t.jsx(We.Content,{children:t.jsxs(C,{direction:"column",alignItems:"stretch",padding:3,children:[t.jsx(tt,{ref:E,"data-native-context-menu":!0,alignItems:"center",paddingLeft:`${st}rem`,paddingRight:`${nt}rem`,$isActive:p,$isValidDropTarget:w,$isInvalidDropCursor:M,$isMovePending:u,children:t.jsxs(et,{type:"button",$isActive:p,$isValidDropTarget:w,$isInvalidDropCursor:M,$isMovePending:u,"aria-current":p?"page":void 0,onClick:()=>n(null),"data-testid":"folder-tree-home",children:[t.jsx(we,{children:t.jsx(Es,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem"})}),t.jsx(N,{variant:"omega",fontWeight:p?"semiBold":"regular",children:c})]})}),t.jsxs(k,{marginTop:4,children:[t.jsxs(C,{alignItems:"center",gap:1,paddingTop:1,paddingBottom:1,paddingLeft:2,paddingRight:2,children:[t.jsx(we,{children:t.jsx(Le,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem",fill:"neutral500"})}),t.jsx(N,{variant:"sigma",textColor:"neutral600",style:{textTransform:"uppercase"},children:o({id:l("sidebar.folders"),defaultMessage:"Folders"})})]}),a?t.jsx(C,{justifyContent:"center",padding:1,paddingTop:2,children:t.jsx(Ke,{children:o({id:l("sidebar.tree.loading"),defaultMessage:"Loading folders..."})})}):h?t.jsx(k,{padding:1,paddingTop:2,children:t.jsx(N,{variant:"pi",textColor:"danger600",children:o({id:l("sidebar.tree.error"),defaultMessage:"Could not load folders."})})}):d.length===0?t.jsx(k,{padding:1,paddingTop:2,children:t.jsx(N,{variant:"pi",textColor:"neutral500",children:o({id:l("sidebar.tree.empty"),defaultMessage:"No folders yet"})})}):t.jsx(Fe,{children:d.map(y=>j&&y.id===j.root.id?t.jsx(xa,{branch:j,...S},y.id):t.jsx(je,{node:y,parentId:null,level:0,ancestorNames:[],...S},y.id??y.name))})]})]})})]})},wa="[data-strapi-main-content]",ja=["[data-native-context-menu]","thead","a","button","input","textarea","select",'[contenteditable="true"]'].join(", "),ya={position:"fixed",width:0,height:0,minWidth:0,minHeight:0,padding:0,border:0,opacity:0,overflow:"hidden",pointerEvents:"none"},Ca={height:0},dt=({onCreateFolder:e,onImportFiles:s,onImportFromUrl:n,disabled:r,containerSelector:o=wa,locations:d})=>{const{formatMessage:a}=T(),[h,g]=i.useState(null),[f,m]=i.useState(null),u=i.useCallback(R=>m(R),[]);i.useEffect(()=>{const R=f?.closest(o);if(!R||r)return;const S=p=>{p.target instanceof Element&&(p.target.closest(ja)||(p.preventDefault(),g({x:p.clientX,y:p.clientY})))};return R.addEventListener("contextmenu",S),()=>R.removeEventListener("contextmenu",S)},[f,r,o]);const j=t.jsxs(t.Fragment,{children:[t.jsx(oe.Item,{onSelect:e,startIcon:t.jsx(Le,{}),children:a({id:l("folder.create.title"),defaultMessage:"New folder"})}),t.jsx(oe.Item,{onSelect:s,startIcon:t.jsx(Mt,{}),children:a({id:l("import-files"),defaultMessage:"File upload"})}),t.jsx(oe.Item,{onSelect:n,startIcon:t.jsx(Ae,{}),children:a({id:l("import-from-url"),defaultMessage:"File upload from URL"})})]}),$=R=>t.jsxs(oe.Root,{modal:!1,open:h!==null,onOpenChange:S=>{S||g(null)},children:[t.jsx(oe.Trigger,{tabIndex:-1,endIcon:null,"aria-label":a({id:l("list.context-menu.label"),defaultMessage:"Media library actions"}),style:{...ya,top:h?.y??0,left:h?.x??0}}),t.jsxs(Ct,{popoverPlacement:"bottom-start",zIndex:2,minWidth:"22rem",onCloseAutoFocus:S=>S.preventDefault(),children:[R,j]})]});return t.jsxs(t.Fragment,{children:[t.jsx("div",{ref:u,style:Ca,"aria-hidden":!0}),!r&&(d?t.jsx(ks,{locations:d,children:({count:R,hasActions:S,items:p,dialogs:c})=>t.jsxs(t.Fragment,{children:[$(R>0&&S?t.jsxs(t.Fragment,{children:[p,t.jsx(oe.Separator,{})]}):null),c]})}):$(null))]})},va="[data-strapi-main-content]",Ma=2e3,$a=10,Sa=e=>{const s=i.useRef(new Map),n=i.useRef(null),r=i.useRef(null),o=i.useRef(e),d=i.useRef(null),a=i.useCallback(h=>{r.current?.(),r.current=null,n.current=null;const g=h?.closest(va);if(!g)return;const f=()=>{const m=s.current;for(m.delete(o.current),m.set(o.current,g.scrollTop);m.size>$a;){const u=m.keys().next().value;if(u===void 0)break;m.delete(u)}};g.addEventListener("scroll",f,{passive:!0}),n.current=g,r.current=()=>g.removeEventListener("scroll",f)},[]);return i.useEffect(()=>()=>r.current?.(),[]),i.useLayoutEffect(()=>{const h=n.current;if(!h)return;o.current!==e&&(o.current=e,d.current={top:s.current.get(e)??0,deadline:Date.now()+Ma});const g=d.current;if(g){if(Date.now()>g.deadline){d.current=null;return}h.scrollTop=g.top,h.scrollTop>=g.top&&(d.current=null)}}),a},Da=({folderId:e,search:s,sort:n,filter:r})=>JSON.stringify({folderId:e,search:s,sort:n,filter:r}),Ra={threshold:0},Ea={id:l("header.content.item-count"),defaultMessage:"{count, plural, =1 {# item} other {# items}}"},Qe={both:{id:l("header.search-results.count"),defaultMessage:"{numberFolders, plural, one {1 folder} other {# folders}} - {numberAssets, plural, one {1 asset} other {# assets}}"},folders:{id:l("header.search-results.count.folders"),defaultMessage:"{numberFolders, plural, one {1 folder} other {# folders}}"},assets:{id:l("header.search-results.count.assets"),defaultMessage:"{numberAssets, plural, =0 {0 assets} one {1 asset} other {# assets}}"}},Aa=(e,s)=>e===0?Qe.assets:s===0?Qe.folders:Qe.both,Ia=({listQueryKey:e})=>{const{clear:s}=en();return i.useEffect(()=>{s()},[e,s]),null},La=b(k)`
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
  ${({$compact:e,theme:s})=>e&&ke`
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
`,ka=b(C)`
  justify-content: space-between;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spaces[4]};

  h1 {
    font-size: 1.8rem;
  }
`,Fa=b(C)`
  margin-top: ${({theme:e})=>e.spaces[5]};
  flex-direction: column;
  align-items: stretch;
  gap: ${({theme:e})=>e.spaces[3]};
  transition: margin-top 0.2s ease;

  /* Tightening the gap to the title belongs to the compact header, so it is
     scoped to the breakpoints that compact. On mobile the header never sticks,
     and this was the last thing still shifting as the page scrolled. */
  ${({$compact:e,theme:s})=>e&&ke`
      ${s.breakpoints.medium} {
        margin-top: ${s.spaces[2]};
      }
    `}

  ${({theme:e})=>e.breakpoints.large} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`,Nt=b(C)`
  align-items: center;
  gap: ${({theme:e})=>e.spaces[3]};
`,Ta=b(Nt)``,Pa=b(Nt)`
  justify-content: space-between;

  ${({theme:e})=>e.breakpoints.large} {
    justify-content: flex-end;
    flex: 0 0 auto;
  }
`,Oa=b(k)`
  flex: 1;

  ${({theme:e})=>e.breakpoints.large} {
    flex: 0 1 auto;
  }
`,Na=()=>{const{formatMessage:e}=T(),{openDetails:s}=Lt(),{canCreate:n,canUpdate:r}=pt(),{currentFolderId:o,navigateToFolderId:d,searchQuery:a,isSearching:h,clearSearch:g,listSort:f,listFilters:m,assets:u,subscribers:j,pagination:$,isLoadingAssets:R,isFetchingMore:S,hasNextPage:p,fetchNextPage:c,assetsError:E,folders:w,isLoadingFolders:M}=Fs(),{title:y,itemCount:P}=St(o),v=i.useMemo(()=>Ts(u,w),[u,w]),F=e(Ea,{count:P}),_=e({id:l("header.search-results"),defaultMessage:'Search results for "{query}"'},{query:a}),V=w.length,G=$?.total??0,Q=e(Aa(V,G),{numberFolders:V,numberAssets:G});let L;h?L=`${_} (${Q})`:y?L=`${y} (${F})`:L=e({id:"app.loading",defaultMessage:"Loading..."});const[ee,te]=i.useState(!1),[X,ue]=Ps(Os.view,it.GRID),I=X===it.GRID,[z,U]=i.useState(!1),he=i.useRef(null),K=i.useRef(null),[Y,fe]=i.useState(!1),Te=i.useCallback(B=>fe(!B),[]),ge=Ns(Te,Ra),[Pe]=_s(),[Oe]=Bs(),{data:Ne}=zs(),_e=Ne?.data?.concurrentUploadRequests??1,me=bt(),{trackUsage:se}=ft(),ye=async(B,ae)=>{if(B.length===0)return;const x=B.reduce((O,W)=>{const q=tn(W.type);return O[q]=(O[q]??0)+1,O},{});se("willAddMediaLibraryAssets",{location:Z,...x});const D=new FormData,A=[];B.forEach(O=>{D.append("files",O),A.push({name:O.name,caption:null,alternativeText:null,folder:ae})}),D.append("fileInfo",JSON.stringify(A));try{await Pe({formData:D,totalFiles:B.length,concurrency:_e,generateAiMetadata:!!me}).unwrap()}catch{}},pe=()=>{he.current?.click()},Be=async B=>{const ae=B.target.files;ae&&ae.length>0&&(se("didSelectFile",{source:"computer",location:Z}),await ye(Array.from(ae),o)),B.target.value=""},ze=async B=>{n&&(se("didSelectFile",{source:"computer",location:Z}),await ye(B,o))},Ue=async B=>{se("didSelectFile",{source:"url",location:Z}),se("willAddMediaLibraryAssets",{location:Z});try{await Oe({urls:B,folderId:o,generateAiMetadata:!!me}).unwrap()}catch{}},Ce=Da({folderId:o,search:a,sort:`${f.assetsSort};folders=${f.foldersPosition}`,filter:m.serialized||null}),ne=Sa(Ce);return t.jsxs(t.Fragment,{children:[t.jsx(Kn,{onDrop:ze,disabled:!n,children:t.jsx(Us,{disabled:!r,children:t.jsx(Hs,{children:t.jsxs(Ws,{locations:v,children:[t.jsx(Ia,{listQueryKey:Ce}),t.jsx(rt.Root,{sideNav:t.jsx(ba,{currentFolderId:o,showActiveFolder:!h,onSelectFolder:d,backgroundContextMenu:t.jsx(dt,{disabled:!n,containerSelector:Xe,onCreateFolder:()=>te(!0),onImportFiles:pe,onImportFromUrl:()=>U(!0)})}),children:t.jsx($t.Main,{children:t.jsxs(k,{ref:K,children:[t.jsx(qe,{children:t.jsx("input",{type:"file",ref:he,onChange:Be,multiple:!0})}),t.jsx(k,{ref:ge,height:0,"aria-hidden":!0}),t.jsx(k,{ref:ne,height:0,"aria-hidden":!0}),t.jsx(dt,{disabled:!n,locations:v,onCreateFolder:()=>te(!0),onImportFiles:pe,onImportFromUrl:()=>U(!0)}),t.jsxs(La,{$compact:Y,children:[t.jsxs(ka,{children:[t.jsx(N,{variant:"alpha",tag:"h1",children:L}),n&&t.jsxs(Vs,{popoverPlacement:"bottom-end",variant:"default",endIcon:t.jsx(vt,{}),label:e({id:l("new"),defaultMessage:"New"}),children:[t.jsx(Ve,{onSelect:()=>te(!0),startIcon:t.jsx(Le,{}),children:e({id:l("folder.create.title"),defaultMessage:"New folder"})}),t.jsx(Ve,{onSelect:pe,startIcon:t.jsx(Mt,{}),children:e({id:l("import-files"),defaultMessage:"File upload"})}),t.jsx(Ve,{onSelect:()=>U(!0),startIcon:t.jsx(Ae,{}),children:e({id:l("import-from-url"),defaultMessage:"File upload from URL"})})]})]}),t.jsxs(Fa,{$compact:Y,children:[t.jsxs(Ta,{children:[t.jsx(k,{children:t.jsx(Gs,{listFilters:m})}),t.jsx(Oa,{children:t.jsx(Ys,{})})]}),t.jsxs(Pa,{children:[t.jsx(k,{children:t.jsx(Qs,{sort:f,showFoldersGroup:!I})}),t.jsx(Xs,{view:X,onChange:ue})]})]}),t.jsx(Ks,{listFilters:m,compact:Y})]}),t.jsxs(rt.Content,{children:[j,t.jsxs(Jn,{children:[t.jsx(ta,{uploadDropZoneRef:K,folderName:y}),t.jsx(qs,{view:X,folders:w,isLoadingFolders:M,assets:u,isLoadingAssets:R,isFetchingMore:S,hasNextPage:p,fetchNextPage:c,error:E,locations:v,searchQuery:a,assetsSort:f.assetsSort,foldersPosition:f.foldersPosition,hasActiveFilters:m.filters.length>0,onClearFilters:m.clearFilters,onAssetItemClick:s,onAddAssets:pe,canAddAssets:n,onClearSearch:g})]})]})]})})})]})})})}),t.jsx(Zs,{open:ee,mode:"create",parentFolderName:y,parentFolderId:o,onClose:()=>te(!1)}),t.jsx(Js,{open:z,onClose:()=>U(!1),onUpload:Ue}),t.jsx(Qn,{})]})},za=()=>{const{formatMessage:e}=T(),s=e({id:l("plugin.name"),defaultMessage:"Media Library"});return t.jsxs(t.Fragment,{children:[t.jsx($t.Title,{children:s}),t.jsx(sn,{children:t.jsx(nn,{index:!0,element:t.jsx(Na,{})})})]})};export{za as MediaLibrary};
