import{r,j as t,y as m,S as b,g9 as q,a as I,A as R,dp as h,h as D,ga as Q,gb as Je,cD as ve,gc as et,gd as tt,ge as we,gf as st,cB as T,d as ye,dR as Me,gg as Se,gh as nt,gi as rt,cU as se,gj as at,k as ot,gk as X,gl as it,bF as $e,gm as lt,gn as dt,go as Ce,ap as Ee,gp as Re,gq as ct,gr as ut,gs as gt,gt as pt,gu as ht,gv as ft,gw as mt,gx as xe,gy as xt,gz as bt,gA as jt,gB as vt,ds as wt,gC as yt,dr as Mt,gD as St,gE as $t,gF as Ct,L as be,P as De,bX as Et,dW as Rt,gG as ne,gH as Dt,gI as Tt,gJ as It,gK as Ft,gL as At,gM as Lt,gN as kt,gO as Ot,gP as Pt,gQ as _,gR as _t,gS as Nt,W as Ut,X as Ht}from"./strapi-CECxU5qA.js";const Te=r.createContext(null),Vt=m(b)`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
`,Wt=({children:e,onDrop:s,disabled:n=!1})=>{const[d,i]=r.useState(!1),c=r.useRef(0),g=r.useMemo(()=>({isDragging:d}),[d]);r.useEffect(()=>{const o=()=>{i(!1),c.current=0},f=M=>{M.relatedTarget||(i(!1),c.current=0)};return document.addEventListener("dragend",o),document.addEventListener("dragleave",f),()=>{document.removeEventListener("dragend",o),document.removeEventListener("dragleave",f)}},[]);const l=r.useCallback(o=>{o.preventDefault(),o.stopPropagation(),!n&&o.dataTransfer.types.includes("Files")&&(c.current+=1,i(!0))},[n]),a=r.useCallback(o=>{o.preventDefault(),o.stopPropagation(),c.current-=1,c.current<=0&&(i(!1),c.current=0)},[]),u=r.useCallback(o=>{o.preventDefault(),o.stopPropagation(),o.dataTransfer.dropEffect="copy"},[]),p=r.useCallback(o=>{if(o.preventDefault(),o.stopPropagation(),i(!1),c.current=0,n)return;const{files:f}=o.dataTransfer;f?.length&&s&&s(Array.from(f))},[s,n]);return t.jsx(Te.Provider,{value:g,children:t.jsx(Vt,{"data-testid":"assets-dropzone",onDragEnter:l,onDragLeave:a,onDragOver:u,onDrop:p,children:e})})},Ie=()=>{const e=r.useContext(Te);if(!e)throw new Error("useUploadDropZone must be used within UploadDropZone");return{isDragging:e.isDragging}},Bt=(e,s)=>`${e}${Math.floor(s*255).toString(16).padStart(2,"0")}`,zt=m(b)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({theme:e})=>Bt(e.colors.primary200,.3)};
  border: 1px solid ${({theme:e})=>e.colors.primary700};
  border-radius: ${({theme:e})=>e.borderRadius};
  z-index: 1;
  pointer-events: none;
`,Gt=({children:e})=>{const{isDragging:s}=Ie(),d=q()?.isInternalDragActive??!1,i=s&&!d;return t.jsxs(b,{position:"relative",children:[i&&t.jsx(zt,{}),e]})},qt=m(b)`
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
`,Qt=({uploadDropZoneRef:e,folderName:s})=>{const{formatMessage:n}=I(),{isDragging:d}=Ie(),c=q()?.isInternalDragActive??!1,g=d&&!c,[l,a]=r.useState(0);return r.useEffect(()=>{if(!e?.current)return;const u=()=>{const o=e.current?.getBoundingClientRect();o&&a(f=>f!==o.left?o.left:f)};u();const p=new ResizeObserver(u);return p.observe(e.current),()=>p.disconnect()},[e]),g?t.jsxs(qt,{$leftContentWidth:l,children:[t.jsx(R,{textColor:"neutral0",children:n({id:h("dropzone.upload.message"),defaultMessage:"Drop here to upload to"})}),t.jsxs(D,{gap:2,alignItems:"center",children:[t.jsx(Q,{width:20,height:20,fill:"neutral0"}),t.jsx(R,{textColor:"neutral0",fontWeight:"semiBold",children:s})]})]}):null},Fe=e=>{const{isMovePending:s,isValidDropTarget:n}=q()??{isMovePending:!1,isValidDropTarget:()=>!1},{active:d}=Je(),i=e.id==null?et:tt(e.id),c={kind:"folder-tree-target",id:e.id,name:e.name},g=ve({id:i,data:c,disabled:s}),l=n(e.id),a=g.isOver;return{droppable:g,isOver:a,showValidDropHighlight:a&&l,showInvalidDropCursor:a&&!l&&d!=null}},Xt=4,Zt=(e,s)=>{if(s==null)return null;const n=we(e,s);return!n||n.length-1<Xt?null:{root:n[0],hidden:n.slice(1,-2),parent:n[n.length-2]}},Kt=m.div`
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
`,Yt=({folder:e,parentId:s,menuPosition:n,returnFocusTo:d,onCloseMenu:i})=>{const{formatMessage:c}=I();return t.jsx(st,{folder:e,dragData:{kind:"folder",id:e.id,name:e.name,parentId:s},showRename:!1,children:({items:g,dialogs:l})=>t.jsxs(t.Fragment,{children:[t.jsx(Kt,{children:t.jsxs(T.Root,{modal:!1,children:[t.jsx(T.Trigger,{tag:ye,icon:t.jsx(Me,{}),variant:"ghost",size:"S",onClick:a=>a.stopPropagation(),label:c({id:h("sidebar.tree.actions"),defaultMessage:"Actions for {name}"},{name:e.name})}),t.jsx(Se,{popoverPlacement:"bottom-end",zIndex:2,minWidth:"22rem",children:g})]})}),n!==null&&t.jsx(nt,{position:n,open:!0,label:c({id:h("list.folder.context-menu.label"),defaultMessage:"Folder actions"}),returnFocusTo:d,onClose:i,children:g}),l]})})},Jt=600,Ae=({isOver:e,canExpand:s,onExpand:n})=>{r.useEffect(()=>{if(!e||!s)return;const d=setTimeout(n,Jt);return()=>clearTimeout(d)},[e,s,n])},oe=m.button`
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

  ${({$isValidDropTarget:e,theme:s})=>e&&X`
      outline: 1px dashed ${s.colors.primary600};
      outline-offset: -1px;
    `}

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary600};
    outline-offset: -2px;
  }
`,es=(e,s)=>({start:`${s} ${s} 0 0`,middle:"0",end:`0 0 ${s} ${s}`})[e],ie=m(D)`
  cursor: ${({$isMovePending:e,$isInvalidDropCursor:s})=>e?"wait":s?"not-allowed":"default"};
  pointer-events: ${({$isMovePending:e})=>e?"none":"auto"};
  border-radius: ${({$openPathSegment:e,theme:s})=>e?es(e,s.borderRadius):s.borderRadius};
  background: ${({$isActive:e,$openPathSegment:s,theme:n})=>e?n.colors.primary100:s?n.colors.neutral100:"transparent"};

  // The whole row lights up, so pointing anywhere along it — chevron, label or
  // the actions trigger — reads as one target. A path row steps past its tint
  // rather than to primary100, which would make it look like a second open
  // folder (and, in dark mode, is the same colour as the tint).
  &:hover {
    background: ${({$isActive:e,$openPathSegment:s,theme:n})=>e?n.colors.primary100:s?n.colors.neutral150:n.colors.neutral100};
  }

  ${({$isValidDropTarget:e,theme:s})=>e&&X`
      background: ${s.colors.primary100};
      outline: 1px dashed ${s.colors.primary600};
      outline-offset: -1px;

      &:hover {
        background: ${s.colors.primary100};
      }
    `}
`,ts=(e,s)=>{const[n,d]=r.useState(()=>new Set);r.useEffect(()=>{if(s==null)return;const l=we(e,s)?.slice(0,-1).map(a=>a.id).filter(a=>a!=null);!l||l.length===0||d(a=>{const u=new Set(a);let p=!1;for(const o of l)u.has(o)||(u.add(o),p=!0);return p?u:a})},[e,s]);const i=r.useCallback(l=>{d(a=>{const u=new Set(a);return u.has(l)?u.delete(l):u.add(l),u})},[]),c=r.useCallback(l=>{d(a=>{if(a.has(l))return a;const u=new Set(a);return u.add(l),u})},[]);return{isExpanded:r.useCallback(l=>n.has(l),[n]),toggleExpanded:i,expandFolder:c}},Z=m.ul`
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
`,ss=1.6,ns=4,Le=e=>Math.min(e,ns)*ss,le=.8,de=.4,N=m(D)`
  width: 2.4rem;
  height: 2.4rem;
  min-width: 2.4rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
`,rs=m(ye)`
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
`,as=m(Ce)`
  transform: rotate(${({$expanded:e})=>e?"0deg":"-90deg"});
  transition: transform 0.2s ease;
`,os=({id:e,name:s,parentId:n,folderChildren:d,level:i,currentFolderId:c,showActiveFolder:g,isExpanded:l,onToggle:a,onExpand:u,onSelect:p,isMovePending:o,ancestorNames:f,isHiddenAncestor:M=!1,openPathSegment:j,subtree:v})=>{const{formatMessage:x}=I(),S=d.length>0,E=l(e)&&S,C=g&&c===e,F=[x({id:h("plugin.name"),defaultMessage:"Media Library"}),...f,s].join(" / "),{droppable:{setNodeRef:w},isOver:K,showValidDropHighlight:A,showInvalidDropCursor:H}=Fe({id:e,name:s}),Y=r.useCallback(()=>u(e),[e,u]),[V,k]=r.useState(null),W=r.useRef(null);return Ae({isOver:K,canExpand:!M&&S&&!E,onExpand:Y}),t.jsxs("li",{children:[t.jsxs(ie,{ref:w,"data-native-context-menu":!0,alignItems:"center",paddingLeft:`${Le(i)+le}rem`,paddingRight:`${de}rem`,gap:1,$isActive:C,$openPathSegment:j,$isValidDropTarget:A,$isInvalidDropCursor:H,$isMovePending:o,onContextMenu:y=>{lt(y)&&(y.preventDefault(),k({x:y.clientX,y:y.clientY}))},children:[M?t.jsx(N,{"aria-hidden":!0}):t.jsx(rs,{label:S?x({id:h(E?"sidebar.tree.collapse":"sidebar.tree.expand"),defaultMessage:E?"Collapse {name}":"Expand {name}"},{name:s}):x({id:h("sidebar.tree.no-subfolders"),defaultMessage:"The folder {name} has no subfolders"},{name:s}),disabled:!S,onClick:y=>{y.stopPropagation(),a(e)},variant:"ghost",withTooltip:!1,"aria-expanded":S?E:void 0,children:t.jsx(as,{$expanded:E,fill:"neutral500"})}),t.jsx(b,{flex:"1",minWidth:0,children:t.jsx($e,{label:F,children:t.jsx(oe,{ref:W,type:"button",$isActive:C,$isValidDropTarget:A,$isInvalidDropCursor:H,$isMovePending:o,"aria-current":C?"page":void 0,onClick:()=>p(e),"data-testid":`folder-tree-node-${e}`,"data-folder-id":e,children:t.jsx(R,{ellipsis:!0,variant:"omega",fontWeight:C?"semiBold":"regular",children:s})})})}),t.jsx(Yt,{folder:{id:e,name:s},parentId:n,menuPosition:V,returnFocusTo:W.current,onCloseMenu:()=>k(null)})]}),S&&E&&!M&&(v??t.jsx(Z,{children:d.map(y=>t.jsx(U,{node:y,parentId:e,level:i+1,currentFolderId:c,showActiveFolder:g,isExpanded:l,onToggle:a,onExpand:u,onSelect:p,isMovePending:o,ancestorNames:[...f,s]},y.id??y.name))}))]})},U=({node:e,...s})=>e.id==null?null:t.jsx(os,{...s,id:e.id,name:e.name??"",folderChildren:e.children??[]}),is=m(R)`
  font-style: italic;
`,ls=m(dt)`
  transform: rotate(${({$expanded:e})=>e?"90deg":"0deg"});
  transition: transform 0.2s ease;
`,ds=({branch:e,isOpen:s,onOpenChange:n,...d})=>{const{formatMessage:i}=I(),c=r.useId(),g=r.useCallback(()=>n(!0),[n]),l=e.root.name??"",a=e.hidden.map(o=>o.name??""),{setNodeRef:u,isOver:p}=ve({id:it(e.root.id),disabled:d.isMovePending});return Ae({isOver:p,canExpand:!s,onExpand:g}),t.jsxs("li",{children:[t.jsx(ie,{ref:u,"data-native-context-menu":!0,alignItems:"center",paddingLeft:`${Le(1)+le}rem`,paddingRight:`${de}rem`,$isInvalidDropCursor:p,$isMovePending:d.isMovePending,children:t.jsx($e,{label:a.join(" / "),children:t.jsxs(oe,{type:"button",$isActive:!1,$isInvalidDropCursor:p,$isMovePending:d.isMovePending,"aria-expanded":s,"aria-controls":s?c:void 0,onClick:()=>n(!s),"data-testid":"folder-tree-hidden-ancestors",children:[t.jsx(N,{children:t.jsx(Me,{"aria-hidden":!0,fill:"neutral500"})}),t.jsx(b,{flex:"1",minWidth:0,children:t.jsx(is,{ellipsis:!0,variant:"omega",textColor:"neutral600",children:i({id:h("sidebar.tree.hidden-ancestors"),defaultMessage:"{count, plural, one {# parent folder} other {# parent folders}}"},{count:e.hidden.length})})}),t.jsx(N,{children:t.jsx(ls,{"aria-hidden":!0,$expanded:s,fill:"neutral500"})})]})})}),s&&t.jsx(Z,{id:c,children:e.hidden.map((o,f)=>r.createElement(U,{...d,key:o.id??o.name,node:o,parentId:(f===0?e.root.id:e.hidden[f-1].id)??null,level:2,ancestorNames:[l,...a.slice(0,f)],isHiddenAncestor:!0,openPathSegment:f===0?"start":"middle"}))})]})},cs=({branch:e,...s})=>{const{currentFolderId:n}=s,[d,i]=r.useState(!1),[c,g]=r.useState(n);c!==n&&(g(n),i(!1));const l=[e.root,...e.hidden].map(a=>a.name??"");return t.jsx(U,{...s,node:e.root,parentId:null,level:0,ancestorNames:[],subtree:t.jsxs(Z,{children:[t.jsx(ds,{...s,branch:e,isOpen:d,onOpenChange:i}),t.jsx(U,{...s,node:e.parent,parentId:e.hidden[e.hidden.length-1]?.id??e.root.id??null,level:2,ancestorNames:l,openPathSegment:d?"end":void 0})]})})},ae="[data-folder-tree-root]",us=({currentFolderId:e,showActiveFolder:s=!0,onSelectFolder:n,backgroundContextMenu:d})=>{const{formatMessage:i}=I(),{data:c=[],isLoading:g,isError:l}=rt(),{isExpanded:a,toggleExpanded:u,expandFolder:p}=ts(c,e),{isMovePending:o}=q()??{isMovePending:!1},f=r.useMemo(()=>Zt(c,e),[c,e]),M=r.useRef(!1),j=r.useCallback(w=>{M.current=w!==e&&document.activeElement?.closest(ae)!=null,n(w)},[e,n]);r.useEffect(()=>{!M.current||e==null||(M.current=!1,document.activeElement===document.body&&document.querySelector(`${ae} [data-folder-id="${e}"]`)?.focus())},[e]);const v={currentFolderId:e,showActiveFolder:s,isExpanded:a,onToggle:u,onExpand:p,onSelect:j,isMovePending:o},x=s&&e==null,S=i({id:h("sidebar.home"),defaultMessage:"Home"}),{droppable:{setNodeRef:E},showValidDropHighlight:C,showInvalidDropCursor:F}=Fe({id:null,name:S});return t.jsxs(se.Main,{"data-folder-tree-root":!0,"aria-label":i({id:h("sidebar.tree.aria-label"),defaultMessage:"Media library folders"}),children:[d,t.jsx(se.Header,{label:i({id:h("sidebar.title"),defaultMessage:"Media library"})}),t.jsx(se.Content,{children:t.jsxs(D,{direction:"column",alignItems:"stretch",padding:3,children:[t.jsx(ie,{ref:E,"data-native-context-menu":!0,alignItems:"center",paddingLeft:`${le}rem`,paddingRight:`${de}rem`,$isActive:x,$isValidDropTarget:C,$isInvalidDropCursor:F,$isMovePending:o,children:t.jsxs(oe,{type:"button",$isActive:x,$isValidDropTarget:C,$isInvalidDropCursor:F,$isMovePending:o,"aria-current":x?"page":void 0,onClick:()=>n(null),"data-testid":"folder-tree-home",children:[t.jsx(N,{children:t.jsx(at,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem"})}),t.jsx(R,{variant:"omega",fontWeight:x?"semiBold":"regular",children:S})]})}),t.jsxs(b,{marginTop:4,children:[t.jsxs(D,{alignItems:"center",gap:1,paddingTop:1,paddingBottom:1,paddingLeft:2,paddingRight:2,children:[t.jsx(N,{children:t.jsx(Q,{"aria-hidden":!0,width:"1.6rem",height:"1.6rem",fill:"neutral500"})}),t.jsx(R,{variant:"sigma",textColor:"neutral600",style:{textTransform:"uppercase"},children:i({id:h("sidebar.folders"),defaultMessage:"Folders"})})]}),g?t.jsx(D,{justifyContent:"center",padding:1,paddingTop:2,children:t.jsx(ot,{children:i({id:h("sidebar.tree.loading"),defaultMessage:"Loading folders..."})})}):l?t.jsx(b,{padding:1,paddingTop:2,children:t.jsx(R,{variant:"pi",textColor:"danger600",children:i({id:h("sidebar.tree.error"),defaultMessage:"Could not load folders."})})}):c.length===0?t.jsx(b,{padding:1,paddingTop:2,children:t.jsx(R,{variant:"pi",textColor:"neutral500",children:i({id:h("sidebar.tree.empty"),defaultMessage:"No folders yet"})})}):t.jsx(Z,{children:c.map(w=>f&&w.id===f.root.id?t.jsx(cs,{branch:f,...v},w.id):t.jsx(U,{node:w,parentId:null,level:0,ancestorNames:[],...v},w.id??w.name))})]})]})})]})},gs="[data-strapi-main-content]",ps=["[data-native-context-menu]","thead","a","button","input","textarea","select",'[contenteditable="true"]'].join(", "),hs={position:"fixed",width:0,height:0,minWidth:0,minHeight:0,padding:0,border:0,opacity:0,overflow:"hidden",pointerEvents:"none"},fs={height:0},je=({onCreateFolder:e,onImportFiles:s,onImportFromUrl:n,disabled:d,containerSelector:i=gs,locations:c})=>{const{formatMessage:g}=I(),[l,a]=r.useState(null),[u,p]=r.useState(null),o=r.useCallback(j=>p(j),[]);r.useEffect(()=>{const j=u?.closest(i);if(!j||d)return;const v=x=>{x.target instanceof Element&&(x.target.closest(ps)||(x.preventDefault(),a({x:x.clientX,y:x.clientY})))};return j.addEventListener("contextmenu",v),()=>j.removeEventListener("contextmenu",v)},[u,d,i]);const f=t.jsxs(t.Fragment,{children:[t.jsx(T.Item,{onSelect:e,startIcon:t.jsx(Q,{}),children:g({id:h("folder.create.title"),defaultMessage:"New folder"})}),t.jsx(T.Item,{onSelect:s,startIcon:t.jsx(Ee,{}),children:g({id:h("import-files"),defaultMessage:"File upload"})}),t.jsx(T.Item,{onSelect:n,startIcon:t.jsx(Re,{}),children:g({id:h("import-from-url"),defaultMessage:"File upload from URL"})})]}),M=j=>t.jsxs(T.Root,{modal:!1,open:l!==null,onOpenChange:v=>{v||a(null)},children:[t.jsx(T.Trigger,{tabIndex:-1,endIcon:null,"aria-label":g({id:h("list.context-menu.label"),defaultMessage:"Media library actions"}),style:{...hs,top:l?.y??0,left:l?.x??0}}),t.jsxs(Se,{popoverPlacement:"bottom-start",zIndex:2,minWidth:"22rem",onCloseAutoFocus:v=>v.preventDefault(),children:[j,f]})]});return t.jsxs(t.Fragment,{children:[t.jsx("div",{ref:o,style:fs,"aria-hidden":!0}),!d&&(c?t.jsx(ct,{locations:c,children:({count:j,hasActions:v,items:x,dialogs:S})=>t.jsxs(t.Fragment,{children:[M(j>0&&v?t.jsxs(t.Fragment,{children:[x,t.jsx(T.Separator,{})]}):null),S]})}):M(null))]})},ms="[data-strapi-main-content]",xs=2e3,bs=10,js=e=>{const s=r.useRef(new Map),n=r.useRef(null),d=r.useRef(null),i=r.useRef(e),c=r.useRef(null),g=r.useCallback(l=>{d.current?.(),d.current=null,n.current=null;const a=l?.closest(ms);if(!a)return;const u=()=>{const p=s.current;for(p.delete(i.current),p.set(i.current,a.scrollTop);p.size>bs;){const o=p.keys().next().value;if(o===void 0)break;p.delete(o)}};a.addEventListener("scroll",u,{passive:!0}),n.current=a,d.current=()=>a.removeEventListener("scroll",u)},[]);return r.useEffect(()=>()=>d.current?.(),[]),r.useLayoutEffect(()=>{const l=n.current;if(!l)return;i.current!==e&&(i.current=e,c.current={top:s.current.get(e)??0,deadline:Date.now()+xs});const a=c.current;if(a){if(Date.now()>a.deadline){c.current=null;return}l.scrollTop=a.top,l.scrollTop>=a.top&&(c.current=null)}}),g},vs=({folderId:e,search:s,sort:n,filter:d})=>JSON.stringify({folderId:e,search:s,sort:n,filter:d}),ws={threshold:0},ys={id:h("header.content.item-count"),defaultMessage:"{count, plural, =1 {# item} other {# items}}"},re={both:{id:h("header.search-results.count"),defaultMessage:"{numberFolders, plural, one {1 folder} other {# folders}} - {numberAssets, plural, one {1 asset} other {# assets}}"},folders:{id:h("header.search-results.count.folders"),defaultMessage:"{numberFolders, plural, one {1 folder} other {# folders}}"},assets:{id:h("header.search-results.count.assets"),defaultMessage:"{numberAssets, plural, =0 {0 assets} one {1 asset} other {# assets}}"}},Ms=(e,s)=>e===0?re.assets:s===0?re.folders:re.both,Ss=({listQueryKey:e})=>{const{clear:s}=_t();return r.useEffect(()=>{s()},[e,s]),null},$s=m(b)`
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
  ${({$compact:e,theme:s})=>e&&X`
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
`,Cs=m(D)`
  justify-content: space-between;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spaces[4]};

  h1 {
    font-size: 1.8rem;
  }
`,Es=m(D)`
  margin-top: ${({theme:e})=>e.spaces[5]};
  flex-direction: column;
  align-items: stretch;
  gap: ${({theme:e})=>e.spaces[3]};
  transition: margin-top 0.2s ease;

  /* Tightening the gap to the title belongs to the compact header, so it is
     scoped to the breakpoints that compact. On mobile the header never sticks,
     and this was the last thing still shifting as the page scrolled. */
  ${({$compact:e,theme:s})=>e&&X`
      ${s.breakpoints.medium} {
        margin-top: ${s.spaces[2]};
      }
    `}

  ${({theme:e})=>e.breakpoints.large} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`,ke=m(D)`
  align-items: center;
  gap: ${({theme:e})=>e.spaces[3]};
`,Rs=m(ke)``,Ds=m(ke)`
  justify-content: space-between;

  ${({theme:e})=>e.breakpoints.large} {
    justify-content: flex-end;
    flex: 0 0 auto;
  }
`,Ts=m(b)`
  flex: 1;

  ${({theme:e})=>e.breakpoints.large} {
    flex: 0 1 auto;
  }
`,Is=()=>{const{formatMessage:e}=I(),{openDetails:s}=ut(),{canCreate:n,canUpdate:d}=gt(),{currentFolderId:i,navigateToFolderId:c,searchQuery:g,isSearching:l,clearSearch:a,listSort:u,listFilters:p,assets:o,subscribers:f,pagination:M,isLoadingAssets:j,isFetchingMore:v,hasNextPage:x,fetchNextPage:S,assetsError:E,folders:C,isLoadingFolders:F}=pt(),{title:w,itemCount:K}=ht(i),A=r.useMemo(()=>ft(o,C),[o,C]),H=e(ys,{count:K}),Y=e({id:h("header.search-results"),defaultMessage:'Search results for "{query}"'},{query:g}),V=C.length,k=M?.total??0,W=e(Ms(V,k),{numberFolders:V,numberAssets:k});let y;l?y=`${Y} (${W})`:w?y=`${w} (${H})`:y=e({id:"app.loading",defaultMessage:"Loading..."});const[Oe,B]=r.useState(!1),[J,Pe]=mt(xt.view,xe.GRID),_e=J===xe.GRID,[Ne,z]=r.useState(!1),ce=r.useRef(null),ue=r.useRef(null),[ee,Ue]=r.useState(!1),He=r.useCallback($=>Ue(!$),[]),Ve=bt(He,ws),[We]=jt(),[Be]=vt(),{data:ze}=wt(),Ge=ze?.data?.concurrentUploadRequests??1,ge=yt(),{trackUsage:O}=Mt(),pe=async($,P)=>{if($.length===0)return;const Ke=$.reduce((L,Ye)=>{const me=Nt(Ye.type);return L[me]=(L[me]??0)+1,L},{});O("willAddMediaLibraryAssets",{location:_,...Ke});const te=new FormData,fe=[];$.forEach(L=>{te.append("files",L),fe.push({name:L.name,caption:null,alternativeText:null,folder:P})}),te.append("fileInfo",JSON.stringify(fe));try{await We({formData:te,totalFiles:$.length,concurrency:Ge,generateAiMetadata:!!ge}).unwrap()}catch{}},G=()=>{ce.current?.click()},qe=async $=>{const P=$.target.files;P&&P.length>0&&(O("didSelectFile",{source:"computer",location:_}),await pe(Array.from(P),i)),$.target.value=""},Qe=async $=>{n&&(O("didSelectFile",{source:"computer",location:_}),await pe($,i))},Xe=async $=>{O("didSelectFile",{source:"url",location:_}),O("willAddMediaLibraryAssets",{location:_});try{await Be({urls:$,folderId:i,generateAiMetadata:!!ge}).unwrap()}catch{}},he=vs({folderId:i,search:g,sort:`${u.assetsSort};folders=${u.foldersPosition}`,filter:p.serialized||null}),Ze=js(he);return t.jsxs(t.Fragment,{children:[t.jsx(Wt,{onDrop:Qe,disabled:!n,children:t.jsx(St,{disabled:!d,children:t.jsx($t,{children:t.jsxs(Ct,{locations:A,children:[t.jsx(Ss,{listQueryKey:he}),t.jsx(be.Root,{sideNav:t.jsx(us,{currentFolderId:i,showActiveFolder:!l,onSelectFolder:c,backgroundContextMenu:t.jsx(je,{disabled:!n,containerSelector:ae,onCreateFolder:()=>B(!0),onImportFiles:G,onImportFromUrl:()=>z(!0)})}),children:t.jsx(De.Main,{children:t.jsxs(b,{ref:ue,children:[t.jsx(Et,{children:t.jsx("input",{type:"file",ref:ce,onChange:qe,multiple:!0})}),t.jsx(b,{ref:Ve,height:0,"aria-hidden":!0}),t.jsx(b,{ref:Ze,height:0,"aria-hidden":!0}),t.jsx(je,{disabled:!n,locations:A,onCreateFolder:()=>B(!0),onImportFiles:G,onImportFromUrl:()=>z(!0)}),t.jsxs($s,{$compact:ee,children:[t.jsxs(Cs,{children:[t.jsx(R,{variant:"alpha",tag:"h1",children:y}),n&&t.jsxs(Rt,{popoverPlacement:"bottom-end",variant:"default",endIcon:t.jsx(Ce,{}),label:e({id:h("new"),defaultMessage:"New"}),children:[t.jsx(ne,{onSelect:()=>B(!0),startIcon:t.jsx(Q,{}),children:e({id:h("folder.create.title"),defaultMessage:"New folder"})}),t.jsx(ne,{onSelect:G,startIcon:t.jsx(Ee,{}),children:e({id:h("import-files"),defaultMessage:"File upload"})}),t.jsx(ne,{onSelect:()=>z(!0),startIcon:t.jsx(Re,{}),children:e({id:h("import-from-url"),defaultMessage:"File upload from URL"})})]})]}),t.jsxs(Es,{$compact:ee,children:[t.jsxs(Rs,{children:[t.jsx(b,{children:t.jsx(Dt,{listFilters:p})}),t.jsx(Ts,{children:t.jsx(Tt,{})})]}),t.jsxs(Ds,{children:[t.jsx(b,{children:t.jsx(It,{sort:u,showFoldersGroup:!_e})}),t.jsx(Ft,{view:J,onChange:Pe})]})]}),t.jsx(At,{listFilters:p,compact:ee})]}),t.jsxs(be.Content,{children:[f,t.jsxs(Gt,{children:[t.jsx(Qt,{uploadDropZoneRef:ue,folderName:w}),t.jsx(Lt,{view:J,folders:C,isLoadingFolders:F,assets:o,isLoadingAssets:j,isFetchingMore:v,hasNextPage:x,fetchNextPage:S,error:E,locations:A,searchQuery:g,assetsSort:u.assetsSort,foldersPosition:u.foldersPosition,hasActiveFilters:p.filters.length>0,onClearFilters:p.clearFilters,onAssetItemClick:s,onAddAssets:G,canAddAssets:n,onClearSearch:a})]})]})]})})})]})})})}),t.jsx(kt,{open:Oe,mode:"create",parentFolderName:w,parentFolderId:i,onClose:()=>B(!1)}),t.jsx(Ot,{open:Ne,onClose:()=>z(!1),onUpload:Xe}),t.jsx(Pt,{})]})},As=()=>{const{formatMessage:e}=I(),s=e({id:h("plugin.name"),defaultMessage:"Media Library"});return t.jsxs(t.Fragment,{children:[t.jsx(De.Title,{children:s}),t.jsx(Ut,{children:t.jsx(Ht,{index:!0,element:t.jsx(Is,{})})})]})};export{As as MediaLibrary};
