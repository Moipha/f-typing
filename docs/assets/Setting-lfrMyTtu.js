import{u as q}from"./useTypingStore-C3Piy8dk.js";import{d as B,s as R,r as _,b as F,c as $,j as s,m as a,u as n,F as j,p as l,e as r,z as A,t as E,k as M,l as v,n as P,x as G,y as H}from"./index-Dl64KmyA.js";import{_ as J}from"./_plugin-vue_export-helper-DlAUqK2U.js";const b=i=>(G("data-v-448c3bc4"),i=i(),H(),i),K={class:"q-pa-md"},L={class:"row items-center q-ma-xs"},O={class:"q-px-lg q-py-sm"},Q=b(()=>r("div",{class:"text-h5 q-pl-sm"},"词组设置",-1)),X=b(()=>r("span",{class:"text-subtitle1 q-ml-sm"},"使用默认词组",-1)),Y=b(()=>r("span",{class:"q-px-md"},"保存",-1)),Z={class:"row q-mt-xl"},ee={class:"col"},oe=B({__name:"Setting",setup(i){const{saveSettings:u,settings:o}=q(),{isPhone:d}=R(q()),f=_(d.value?30:20),c=_("计时模式"),S=_([{label:"设置",icon:"settings",fontSize:"1.5rem",iconSize:"2rem",children:[{label:"计时模式",icon:"alarm",fontSize:"1rem",iconSize:"1.4rem"},{label:"限时模式",icon:"notifications_none",fontSize:"1rem",iconSize:"1.4rem"},{label:"主题",icon:"color_lens",fontSize:"1rem",iconSize:"1.4rem"}]}]),x=[{label:"20",value:20},{label:"30",value:30},{label:"40",value:40},{label:"50",value:50}];function z(m){o.generateWordsNum=m,u(o)}function w(m){o.useDefaultWords=m,u(o)}function h(){o.wordsString&&(o.wordsString+=" ",P(()=>{o.wordsString=o.wordsString.substring(0,o.wordsString.length-1)}))}return(m,t)=>{const g=l("q-separator"),V=l("q-icon"),k=l("q-tree"),y=l("q-avatar"),W=l("q-toggle"),C=l("q-resize-observer"),N=l("q-input"),D=l("q-btn"),T=l("q-option-group"),p=l("q-tab-panel"),U=l("q-tab-panels"),I=l("q-splitter");return F(),$(j,null,[s(g,{color:"white"}),s(I,{horizontal:n(d),modelValue:f.value,"onUpdate:modelValue":t[8]||(t[8]=e=>f.value=e),"separator-style":"background-color: white",style:{height:"calc(100vh - 170px)"}},{before:a(()=>[r("div",K,[s(k,{dense:n(d),"no-selection-unset":"","text-color":"white",color:"white",nodes:S.value,"node-key":"label","selected-color":"amber",selected:c.value,"onUpdate:selected":t[0]||(t[0]=e=>c.value=e),"default-expand-all":""},{"default-header":a(e=>[r("div",L,[s(V,{name:e.node.icon||"share",size:e.node.iconSize,class:"q-mr-sm"},null,8,["name","size"]),r("div",{class:"text-weight-bold",style:A(`font-size: ${e.node.fontSize}`)},E(e.node.label),5)])]),_:1},8,["dense","nodes","selected"])])]),separator:a(()=>[s(y,{color:"amber","text-color":"black",size:"40px",icon:"drag_indicator"})]),after:a(()=>[s(U,{class:"q-pa-sm",modelValue:c.value,"onUpdate:modelValue":t[7]||(t[7]=e=>c.value=e),animated:"","transition-prev":"slide-down","transition-next":"slide-up"},{default:a(()=>[s(p,{name:"计时模式"},{default:a(()=>[r("div",O,[Q,s(W,{"onUpdate:modelValue":[t[1]||(t[1]=e=>w(e)),t[2]||(t[2]=e=>n(o).useDefaultWords=e)],class:"q-mt-lg",size:"50px",color:"amber",dark:"",modelValue:n(o).useDefaultWords},{default:a(()=>[X]),_:1},8,["modelValue"]),s(N,{disable:n(o).useDefaultWords,color:"amber","input-class":"words-input",class:"q-mt-sm",modelValue:n(o).wordsString,"onUpdate:modelValue":t[3]||(t[3]=e=>n(o).wordsString=e),autogrow:"",outlined:""},{default:a(()=>[s(C,{onResize:h})]),_:1},8,["disable","modelValue"]),s(D,{onClick:t[4]||(t[4]=e=>n(u)(n(o))),disable:n(o).useDefaultWords,push:"",class:"float-right q-mt-sm",size:"16px",color:"amber","text-color":"black"},{default:a(()=>[Y]),_:1},8,["disable"]),r("div",Z,[r("div",{class:M(["row items-center text-subtitle1 q-ml-md",n(d)?"col-12":"col-2"])},"默认生成词数",2),r("div",ee,[s(T,{"onUpdate:modelValue":[t[5]||(t[5]=e=>z(e)),t[6]||(t[6]=e=>n(o).generateWordsNum=e)],modelValue:n(o).generateWordsNum,options:x,color:"amber",dark:"",inline:""},null,8,["modelValue"])])])])]),_:1}),s(p,{name:"限时模式"},{default:a(()=>[v(" 限时模式设置 ")]),_:1}),s(p,{name:"主题"},{default:a(()=>[v(" 主题设置 ")]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["horizontal","modelValue"]),s(g,{color:"white"})],64)}}}),le=J(oe,[["__scopeId","data-v-448c3bc4"]]);export{le as default};
