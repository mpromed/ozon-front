import{o as s,c as o,F as _,i as p,n as u,a as n,l as d,b as k,t as C}from"./index-198b97fd.js";const g="/ozon-front/assets/check-green-e3cfff55.svg";const f={class:"content-sections"},h=["onClick"],v={class:"section-image-container"},b=["src"],D=["src"],S={class:"section-text-container"},L={__name:"ContentSections",props:["componentData"],emits:["action"],setup(i,{emit:l}){const e=i,r=(c,a)=>{e.componentData.sectionsList[a].isComplete=!0,l("action",c)};return(c,a)=>(s(),o("div",f,[(s(!0),o(_,null,p(e.componentData.sectionsList,(t,m)=>(s(),o("div",{class:u(["section-button",{"section-button-complete":t.isComplete&&e.componentData.markCompletedSections!==!1}]),onClick:x=>r(t.action,m)},[n("div",v,[t.isComplete&&e.componentData.markCompletedSections!==!1?(s(),o("img",{key:0,src:d(g),alt:"section",class:"check-mark"},null,8,b)):k("",!0),n("img",{src:t.image.imageURL,alt:"section",class:"section-button-image"},null,8,D)]),n("div",S,C(t.buttonName),1)],10,h))),256))]))}};export{L as default};
