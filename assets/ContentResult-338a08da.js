import{d as _,o as r,c as l,a as t,t as i,l as e,j as c,b as m}from"./index-8678b159.js";const d="/scenarios_front/assets/1-result-2572cce9.svg",u="/scenarios_front/assets/2-result-db21f43a.svg",g="/scenarios_front/assets/3-result-3fde65b4.svg";const f={class:"result"},y={class:"number"},F={class:"number"},D={class:"number"},b={class:"result-image"},x={key:0,src:d},v={key:1,src:u},S={key:2,src:g},z={__name:"ContentResult",props:["componentData"],setup(p){const s=p,n=_(),a=(n.rightAnswers/(n.rightAnswers+n.wrongAnswers)*100).toFixed(0);return(w,o)=>(r(),l("div",f,[o[3]||(o[3]=t("span",{class:"result-title"},"Ваш результат",-1)),t("div",{class:"result-item",style:c({fontSize:s.componentData.FontSize+"px",fontFamily:s.componentData.FontFamily,fontWeight:s.componentData.FontBold?"bold":"normal"})},[o[0]||(o[0]=t("span",{class:"text"},"Дано ответов:",-1)),t("span",y,i(e(n).rightAnswers+e(n).wrongAnswers),1)],4),t("div",{class:"result-item",style:c({fontSize:s.componentData.FontSize+"px",fontFamily:s.componentData.FontFamily,fontWeight:s.componentData.FontBold?"bold":"normal"})},[o[1]||(o[1]=t("span",{class:"text"},"Допущено ошибок:",-1)),t("span",F,i(e(n).wrongAnswers),1)],4),t("div",{class:"result-item",style:c({color:s.componentData.textColor,fontSize:s.componentData.FontSize+"px",fontFamily:s.componentData.FontFamily,fontWeight:s.componentData.FontBold?"bold":"normal"})},[o[2]||(o[2]=t("span",{class:"text"},"Процент верных ответов:",-1)),t("span",D,i(e(a))+"%",1)],4),t("div",b,[e(a)>=86?(r(),l("img",x)):m("",!0),e(a)>=51&&e(a)<=85?(r(),l("img",v)):m("",!0),e(a)<=50?(r(),l("img",S)):m("",!0)])]))}};export{z as default};
