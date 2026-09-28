import{a as v,c8 as j,c9 as A,j as e,A as a,g as n,y as g,M as b,ca as f}from"./strapi-CSiAsVZ5.js";const u=g(f)`
  width: 100%;
  background-color: ${({theme:s})=>s.colors.neutral200};
  > div {
    background-color: ${({theme:s})=>s.colors.neutral700};
  }
`,C=g(b.Item)`
  ${({theme:s})=>s.breakpoints.large} {
    grid-column: 7 / 13;
  }
`,y=()=>{const{formatMessage:s}=v(),o=j(),{data:r,isLoading:m,error:x}=A(void 0,{refetchOnMountOrArgChange:!0,skip:!o});if(!o||m||x||!r||!r.subscription?.cmsAiEnabled)return null;const t=r.subscription.cmsAiCreditsBase,i=r.cmsAiCreditsUsed,l=r.subscription.cmsAiCreditsMaxUsage,c=i-t,p=i/t*100,h=i/l*100,d=c>0&&l!==t;return e.jsxs(C,{col:6,s:12,direction:"column",alignItems:"start",gap:2,children:[e.jsx(a,{variant:"sigma",textColor:"neutral600",children:s({id:"Settings.application.ai-usage",defaultMessage:"AI Usage"})}),e.jsxs(n,{gap:2,direction:"column",alignItems:"flex-start",children:[!d&&e.jsxs(e.Fragment,{children:[e.jsx(n,{width:"100%",children:e.jsx(u,{value:p,size:"M"})}),e.jsx(a,{variant:"omega",children:`${i.toFixed(2)} credits used from ${t} credits available in your plan`})]}),d&&e.jsxs(e.Fragment,{children:[e.jsx(n,{width:"100%",children:e.jsx(u,{value:h,size:"M",color:"danger"})}),e.jsx(a,{variant:"omega",textColor:"danger600",children:`${c.toFixed(2)} credits used above the ${t} credits available in your plan`})]})]})]})};export{y as AIUsage};
