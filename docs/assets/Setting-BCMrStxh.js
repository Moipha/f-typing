import{r as T,S as X,a as B,p as c,q as g,E as U,m as r,e as t,G as x,l as Y,x as b,c as h,j as n,t as Z,f as D,F as y,_ as K,B as I,u as a,k as W,h as ee,n as te,y as oe,z as se}from"./index-CT5kUlc1.js";import{u as le}from"./useSettingStore-BB-JyVop.js";function ne(){const s=T("amber");localStorage.getItem("theme");const d=localStorage.getItem("theme")?JSON.parse(localStorage.getItem("theme")):null;d&&(s.value=d.name);const e={quasar:{desc:"Quasar默认主题",color:{active:"#1976d2",error:"#c10015",text:"white",btnText:"white",bg:"#1d1d1d"}},amber:{desc:"琥珀",color:{active:"#ffc107",error:"#c10015",text:"whitesmoke",btnText:"black",bg:"#282c34"}},vue:{desc:"Vue官网配色",color:{active:"#42b883",error:"#ff6464",text:"#213547",btnText:"#ffffff",bg:"#ffffff"}},bootstrap:{desc:"Bootstrap 配色",color:{active:"#007bff",error:"#dc3545",text:"#343a40",btnText:"#ffffff",bg:"#f8f9fa"}},flatUI:{desc:"Flat UI 配色",color:{active:"#18bc9c",error:"#e74c3c",text:"#2c3e50",btnText:"#ffffff",bg:"#ecf0f1"}},summerVibes:{desc:"夏日气息",color:{active:"#ff6f61",error:"#ffcc5c",text:"#293241",btnText:"#ffffff",bg:"#f2cc8f"}},oceanBreeze:{desc:"海洋微风",color:{active:"#40bad5",error:"#ff5e78",text:"#1f2833",btnText:"#ffffff",bg:"#90ced6"}},sunsetGlow:{desc:"日落余晖",color:{active:"#40bad5",error:"#ff8c94",text:"#6a0572",btnText:"#ffffff",bg:"#f4acb7"}},tropicalParadise:{desc:"热带天堂",color:{active:"#ffaf7b",error:"#ff4d4d",text:"#35477d",btnText:"#ffffff",bg:"#9ad3bc"}},midnightMagic:{desc:"午夜魔法",color:{active:"#ffc93c",error:"#ff6f61",text:"#2d3142",btnText:"#ffffff",bg:"#f8f9fa"}},springBlossom:{desc:"春日花开",color:{active:"#a8d8ea",error:"#ff7e67",text:"#4a4e69",btnText:"#ffffff",bg:"#f6f6f6"}}};function f(u){if(!(u in e)){console.error(`要切换的主题${u}不存在`);return}const m=e[u];Object.entries(m.color).forEach(([p,q])=>{X(p,q)}),s.value=u;const _={...m,name:u};localStorage.setItem("theme",JSON.stringify(_))}return{changeTheme:f,themes:e,current:s}}const ae={class:"card-inner"},ce={key:0,class:"icon-container"},re={class:"color-key q-ml-md"},ie={class:"color-value"},de=B({__name:"ThemeCard",props:["themeKey","value","current","changeTheme"],setup(s){return(d,e)=>{const f=c("q-icon"),u=c("q-card");return g(),U(u,{onClick:e[0]||(e[0]=m=>s.changeTheme(s.themeKey)),flat:""},{default:r(()=>[t("div",ae,[t("div",{class:"front shadow-5",style:x(`background-color: ${s.value.color.bg};color: ${s.value.color.active}`)},[Y(b(s.themeKey)+" ",1),s.current==s.themeKey?(g(),h("div",ce,[n(f,{name:"check_circle_outline",size:"3rem",class:"q-ma-sm"})])):Z("",!0)],4),t("div",{class:"back shadow-5 column justify-center",style:x(`background: linear-gradient(to bottom right ,${s.value.color.bg}, ${s.value.color.active})`)},[t("div",{class:"q-mb-sm",style:x(`color: ${s.value.color.active};text-shadow:  -1px -1px 0 ${s.value.color.btnText},  1px -1px 0 ${s.value.color.btnText},-1px  1px 0 ${s.value.color.btnText}, 1px  1px 0 ${s.value.color.btnText}; `)},b(s.value.desc),5),(g(!0),h(y,null,D(s.value.color,(m,_)=>(g(),h("div",{class:"row items-center q-px-xl",style:x(`color: ${m}`)},[t("div",{class:"color-square",style:x(`background-color: ${m}`)},null,4),t("div",re,b(_)+" : ",1),t("div",ie,b(m),1)],4))),256))],4)])]),_:1})}}}),fe=K(de,[["__scopeId","data-v-a46e19e8"]]),v=s=>(oe("data-v-28f8c3e6"),s=s(),se(),s),ue={class:"q-pa-md setting-tree"},me={class:"row items-center q-ma-xs"},ve={class:"q-px-lg q-py-sm"},ge=v(()=>t("div",{class:"text-h5"},"词组设置",-1)),xe={class:"q-pa-md q-mt-lg"},be={class:"row items-center"},_e=v(()=>t("span",{class:"text-subtitle1"},"使用默认词组",-1)),pe=v(()=>t("b",{style:{"font-size":"13px"}},"设置词组时注意词组间用 | 分隔；",-1)),he=v(()=>t("br",null,null,-1)),qe=v(()=>t("b",{style:{"font-size":"13px"}},"在保存时会自动忽略重复词组",-1)),Se={class:"words-count q-ml-lg"},we={class:"q-mt-sm words-setting"},Te={class:"row justify-end"},ye=v(()=>t("span",{class:"q-px-md"},"保存",-1)),ze=v(()=>t("div",{class:"text-h5 q-mt-xl"},"计时模式",-1)),Ve={class:"row q-pa-md q-mt-lg"},$e={class:"col"},ke=v(()=>t("div",{class:"text-h5"},"限时模式",-1)),Ce={class:"row q-pa-md q-mt-lg time-limit-setting"},Ie={class:"col row"},We={class:"q-px-lg q-py-sm row q-gutter-lg"},Be=B({__name:"Setting",setup(s){const{isPhone:d,settings:e,saveSettings:f}=le(),{themes:u,current:m,changeTheme:_}=ne(),p=I({get(){return e.useDefaultWords?e.wordsString:e.customString},set(i){e.useDefaultWords?e.wordsString=i:e.customString=i}}),q=T(d?30:20),S=T("通用"),N=T([{label:"设置",icon:"settings",fontSize:"1.5rem",iconSize:"2rem",children:[{label:"通用",icon:"tune",fontSize:"1rem",iconSize:"1.4rem"},{label:"主题",icon:"color_lens",fontSize:"1rem",iconSize:"1.4rem"}]}]),j=[{label:"20",value:20},{label:"30",value:30},{label:"40",value:40},{label:"50",value:50}];function E(i){e.generateWordsNum=i,f(e)}function F(i){e.useDefaultWords=i,f(e)}function O(){e.wordsString&&(e.wordsString+=" ",te(()=>{e.wordsString=e.wordsString.substring(0,e.wordsString.length-1)}))}const z=I({get(){return e.limitTime||20},set(i){i>0&&(e.limitTime=i)}});return(i,l)=>{const w=c("q-separator"),V=c("q-icon"),G=c("q-tree"),J=c("q-avatar"),M=c("q-toggle"),P=c("q-tooltip"),R=c("q-resize-observer"),$=c("q-input"),A=c("q-btn"),L=c("q-option-group"),k=c("q-tab-panel"),Q=c("q-tab-panels"),H=c("q-splitter");return g(),h(y,null,[n(w,{color:"text"}),n(H,{horizontal:a(d),modelValue:q.value,"onUpdate:modelValue":l[11]||(l[11]=o=>q.value=o),"separator-style":"background-color: var(--q-text)",style:{height:"calc(100vh - 170px)"}},{before:r(()=>[t("div",ue,[n(G,{dense:a(d),"no-selection-unset":"","text-color":"text",color:"text",nodes:N.value,"node-key":"label","selected-color":"active",selected:S.value,"onUpdate:selected":l[0]||(l[0]=o=>S.value=o),"default-expand-all":""},{"default-header":r(o=>[t("div",me,[n(V,{name:o.node.icon||"share",size:o.node.iconSize,class:"q-mr-sm"},null,8,["name","size"]),t("div",{class:"text-weight-bold",style:x(`font-size: ${o.node.fontSize}`)},b(o.node.label),5)])]),_:1},8,["dense","nodes","selected"])])]),separator:r(()=>[n(J,{color:"active","text-color":"btnText",size:"40px",icon:"drag_indicator"})]),after:r(()=>[n(Q,{class:"q-pa-sm",modelValue:S.value,"onUpdate:modelValue":l[10]||(l[10]=o=>S.value=o),animated:"","transition-prev":"slide-down","transition-next":"slide-up"},{default:r(()=>[n(k,{name:"通用"},{default:r(()=>[t("div",ve,[ge,t("div",xe,[t("div",be,[n(M,{"onUpdate:modelValue":[l[1]||(l[1]=o=>F(o)),l[2]||(l[2]=o=>a(e).useDefaultWords=o)],size:"50px",color:"active",dark:"","keep-color":"",modelValue:a(e).useDefaultWords},{default:r(()=>[_e]),_:1},8,["modelValue"]),n(V,{size:"20px",color:"text",class:"q-ml-xs cursor-pointer",name:"info"},{default:r(()=>[n(P,{"transition-show":"scale","transition-hide":"scale",class:"text-btnText bg-active",anchor:"top middle",self:"bottom middle",offset:[10,10]},{default:r(()=>[pe,he,qe]),_:1})]),_:1}),t("span",Se,"共"+b([...new Set(p.value.split("|"))].filter(o=>o.trim()!=="").length)+"词",1)]),t("div",we,[n($,{placeholder:"请在此处输入自定义词组...",disable:a(e).useDefaultWords,color:"active","input-class":"words-input",modelValue:p.value,"onUpdate:modelValue":l[3]||(l[3]=o=>p.value=o),autogrow:"",outlined:""},{default:r(()=>[n(R,{onResize:O})]),_:1},8,["disable","modelValue"]),t("div",Te,[n(A,{onClick:l[4]||(l[4]=o=>a(f)(a(e))),disable:a(e).useDefaultWords,push:"",class:"q-mt-sm q-mr-sm",size:"16px",color:"active","text-color":"btnText"},{default:r(()=>[ye]),_:1},8,["disable"])])])]),n(w,{class:"q-my-xl divider",color:"text"}),ze,t("div",Ve,[t("div",{class:W(["row items-center text-subtitle1 q-ml-sm",a(d)?"col-12":"col-2"])},"默认生成词数",2),t("div",$e,[n(L,{"onUpdate:modelValue":[l[5]||(l[5]=o=>E(o)),l[6]||(l[6]=o=>a(e).generateWordsNum=o)],modelValue:a(e).generateWordsNum,options:j,color:"active",dark:"",inline:""},null,8,["modelValue"])])]),n(w,{class:"q-my-xl divider",color:"text"}),ke,t("div",Ce,[t("div",{class:W(["row items-center text-subtitle1 q-ml-sm",a(d)?"col-12":"col-2"])},"默认限定时长",2),t("div",Ie,[n($,{onBlur:l[7]||(l[7]=o=>a(f)(a(e))),onKeydown:l[8]||(l[8]=ee(o=>a(f)(a(e)),["enter"])),suffix:"秒","input-class":"time-input",modelValue:z.value,"onUpdate:modelValue":l[9]||(l[9]=o=>z.value=o),color:"active",outlined:""},null,8,["modelValue"])])])])]),_:1}),n(k,{name:"主题"},{default:r(()=>[t("div",We,[(g(!0),h(y,null,D(a(u),(o,C)=>(g(),U(fe,{key:C,themeKey:C,value:o,current:a(m),changeTheme:a(_)},null,8,["themeKey","value","current","changeTheme"]))),128))])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["horizontal","modelValue"]),n(w,{color:"text"})],64)}}}),Ke=K(Be,[["__scopeId","data-v-28f8c3e6"]]);export{Ke as default};
