import{u as x,d as A,r as T,e as k,f as y,o as s,c as o,g as l,b as i,h as b,a as h,F as p,i as D,n as g}from"./index-198b97fd.js";import v from"./ButtonAnswer-9265d653.js";import R from"./CheckboxAnswer-5ce02b4f.js";import _ from"./CheckboxImageAnswer-547cafa1.js";import $ from"./ContentImages-07fafbc4.js";import B from"./ContentAnswersOnImage-05b5aaf8.js";import I from"./ContentText-a9bcd49e.js";import"./answerCheckMark-a603ea0c.js";import"./ModalImage-67f7def1.js";const S={key:1,class:"left-side"},M={class:"content-answers"},H={key:0},U=["innerHTML"],V={key:1,class:"answers-checkboxes-list"},W={key:2,class:"answers-image-checkboxes-list"},N={key:3,class:"answers-buttons-list"},O=["innerHTML"],Q={__name:"ContentAnswers",props:["componentData","testStyle"],emits:["action","chooseAction"],setup(n,{emit:w}){const e=n;x(t=>({"0751a8ee":u.value})),A();const u=T("");e.componentData.columns?u.value=`repeat(${e.componentData.columns}, minmax(0, 1fr))`:u.value="repeat(2, minmax(0, 1fr))";const f=k(()=>`<p>${e.componentData.legendText} <span style="color: ${e.componentData.legendTextColor};">${e.componentData.legendColoredText}</span>`),m=t=>{if(!e.componentData.isComplete)if(e.componentData.multiple)e.componentData.answersList[t].isChecked?e.componentData.answersList[t].isChecked=!1:e.componentData.answersList[t].isChecked=!0;else{for(let c=0;c<e.componentData.answersList.length;c++)e.componentData.answersList[c].isChecked=!1;e.componentData.answersList[t].isChecked=!0,e.componentData.answersList[t].action&&e.componentData.answersList[t].action.clickAction?w("action",e.componentData.answersList[t].action):w("chooseAction",e.componentData.answersList[t].action)}},C=()=>{if(e.componentData.answersList)for(let t=e.componentData.answersList.length-1;t>0;t--){const c=Math.floor(Math.random()*(t+1));[e.componentData.answersList[t],e.componentData.answersList[c]]=[e.componentData.answersList[c],e.componentData.answersList[t]]}},L=k(()=>e.componentData.answersList.every(t=>!t.isChecked));return y(()=>{e.componentData.doShuffle&&L.value&&C()}),(t,c)=>(s(),o("div",{class:g({"multi-wrapper":n.componentData.isAnswersWithImage,"image-answers-wrapper":n.componentData.isAnswersOnImage})},[n.componentData.isAnswersOnImage?(s(),l(B,{key:0,componentData:e.componentData,onSwitchAnswer:m},null,8,["componentData"])):i("",!0),n.componentData.isAnswersWithImage?(s(),o("div",S,[b($,{componentData:n.componentData.imagesData},null,8,["componentData"])])):i("",!0),h("div",{class:g({"right-side":n.componentData.isAnswersWithImage})},[n.componentData.isAnswersWithImage&&n.componentData.textData!=null?(s(),l(I,{key:0,componentData:n.componentData.textData,testStyle:e.testStyle},null,8,["componentData","testStyle"])):i("",!0),h("div",M,[e.componentData.hints?(s(),o("div",H,[h("div",{innerHTML:e.componentData.hintText,class:"answers-hint-text"},null,8,U)])):i("",!0),e.componentData.answersButtonType==="checkboxes"?(s(),o("ul",V,[(s(!0),o(p,null,D(e.componentData.answersList,(a,r)=>(s(),l(R,{key:r,answerText:a.answerText,isChecked:!!a.isChecked,isDisable:!!e.componentData.isComplete,isRight:!!a.isRight,isRightAlt:!!a.isRightAlt,checkboxColor:n.componentData.legendTextColor,onClick:d=>m(r),class:"answers-checkboxes-list-iiem"},null,8,["answerText","isChecked","isDisable","isRight","isRightAlt","checkboxColor","onClick"]))),128))])):i("",!0),e.componentData.answersButtonType==="imageCheckboxes"?(s(),o("ul",W,[(s(!0),o(p,null,D(e.componentData.answersList,(a,r)=>(s(),l(_,{key:r,answerText:a.answerText,isChecked:!!a.isChecked,isDisable:!!e.componentData.isComplete,isRight:!!a.isRight,isRightAlt:!!a.isRightAlt,checkboxColor:n.componentData.legendTextColor,imageURL:a.image.imageURL,onClick:d=>m(r),class:"answers-checkboxeslist-image-iiem"},null,8,["answerText","isChecked","isDisable","isRight","isRightAlt","checkboxColor","imageURL","onClick"]))),128))])):i("",!0),e.componentData.answersButtonType==="buttons"?(s(),o("div",N,[(s(!0),o(p,null,D(e.componentData.answersList,(a,r)=>(s(),l(v,{answerText:a.answerText,isChecked:!!a.isChecked,onClick:d=>m(r),class:"answers-buttons-list-iiem"},null,8,["answerText","isChecked","onClick"]))),256))])):i("",!0),n.componentData.showLegend?(s(),o("div",{key:4,innerHTML:f.value,class:"answers-legend"},null,8,O)):i("",!0)])],2)],2))}};export{Q as default};
