import{_ as i,u as n,o as t,c as a,a as s,n as c,b as l}from"./index-eb92f0d3.js";import{_ as r}from"./AnswerCheckMark-b09cde2c.js";const h={class:"answer-checkbox"},d={class:"answer-checkbox-container"},k={key:0,src:r,alt:"check mark"},u=["innerHTML"],x={__name:"CheckboxAnswer",props:{isChecked:{type:Boolean,default:!1},isDisable:{type:Boolean,default:!1},answerText:{type:String,default:""},isRight:{type:Boolean,default:!1},isRightAlt:{type:Boolean,default:!1},checkboxColor:{type:String,default:"#2ea809"}},setup(e){return n(o=>({"770be514":e.checkboxColor})),(o,b)=>(t(),a("li",null,[s("div",h,[s("div",d,[s("div",{class:c([{"white-checkbox":!e.isChecked||e.isDisable&&e.isRight,"cursor-pointer":!e.isDisable,"alt-checkbox":e.isDisable&&e.isRightAlt},"answer-checkbox-rectangle"])},[e.isChecked?(t(),a("img",k)):l("",!0)],2)]),s("div",{innerHTML:e.answerText,class:c([{"cursor-pointer":!e.isDisable},"answer-checkbox-text"])},null,10,u)])]))}},m=i(x,[["__scopeId","data-v-757020fe"]]);export{m as default};