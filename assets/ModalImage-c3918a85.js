import{m as n,o as i,c as m,a as o,h as r,l as _,p as d}from"./index-8678b159.js";const p={class:"modal-image-container"},u=["src"],M={__name:"ModalImage",props:["imageURL"],emits:["closeModal"],setup(s,{emit:a}){const t=a,l=()=>{t("closeModal",!0)};return(g,e)=>{const c=n("el-button");return i(),m("div",{class:"modal-image-wrapper",onClick:e[0]||(e[0]=f=>l())},[o("div",p,[o("img",{src:s.imageURL,class:"modal-image"},null,8,u),r(c,{type:"info",class:"close-btn",icon:_(d),circle:""},null,8,["icon"])])])}}};export{M as default};
