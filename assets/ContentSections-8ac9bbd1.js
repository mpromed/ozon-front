import{o as s,c as o,F as p,i as u,n as d,a as n,l as k,b as C,t as g}from"./index-eb92f0d3.js";const h="/ozon-front/assets/check-green-fa2e30dc.svg";const f={class:"content-sections"},v=["onClick"],b={class:"section-image-container"},D=["src"],S=["src"],x={class:"section-text-container"},B={__name:"ContentSections",props:["componentData"],emits:["action"],setup(i,{emit:l}){const e=i,r=l,m=(c,a)=>{e.componentData.sectionsList[a].isComplete=!0,r("action",c)};return(c,a)=>(s(),o("div",f,[(s(!0),o(p,null,u(e.componentData.sectionsList,(t,_)=>(s(),o("div",{class:d(["section-button",{"section-button-complete":t.isComplete&&e.componentData.markCompletedSections!==!1}]),onClick:y=>m(t.action,_)},[n("div",b,[t.isComplete&&e.componentData.markCompletedSections!==!1?(s(),o("img",{key:0,src:k(h),alt:"section",class:"check-mark"},null,8,D)):C("",!0),n("img",{src:t.image.imageURL,alt:"section",class:"section-button-image"},null,8,S)]),n("div",x,g(t.buttonName),1)],10,v))),256))]))}};export{B as default};
