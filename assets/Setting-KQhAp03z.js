import{u as U}from"./useSettingStore-DQK2CZ3_.js";import{r as V,S as J,a as z,q as c,c as g,E as N,p as a,f as e,G as h,m as R,x as T,e as q,i as s,t as A,g as j,F as C,_ as I,w as K,u as d,B as E,l as B,j as L,n as M,y as O,z as F,T as H}from"./index-BuP9ehad.js";const Q={vue:{desc:"Vue官网配色",color:{active:"#42b883",error:"#ff6464",text:"#213547",btnText:"#ffffff",bg:"#ffffff"}},amber:{desc:"琥珀",color:{active:"#ffc107",error:"#c10015",text:"whitesmoke",btnText:"black",bg:"#282c34"}},watermelon:{desc:"测试",color:{active:"#3F7A63",error:"#9f2218",text:"#000000",btnText:"#ffffff",bg:"#f29089"}},"red/blue":{desc:"测试2",color:{active:"#EA3A4A",error:"white",text:"#000000",btnText:"#ffffff",bg:"#92C8E9"}}};function X(){const n=V("vue");localStorage.getItem("theme");const l=localStorage.getItem("theme")?JSON.parse(localStorage.getItem("theme")):null;l&&(n.value=l.name);const t={...Q};function u(m){if(!(m in t)){console.error(`要切换的主题${m}不存在`);return}const r=t[m];Object.entries(r.color).forEach(([x,p])=>{J(x,p)}),n.value=m;const _={...r,name:m};localStorage.setItem("theme",JSON.stringify(_))}return{changeTheme:u,themes:t,current:n}}const Y={class:"card-inner"},Z={key:0,class:"icon-container"},ee={class:"color-key q-ml-md"},te={class:"color-value"},oe=z({__name:"ThemeCard",props:["themeKey","value","current","changeTheme"],setup(n){return(l,t)=>{const u=c("q-icon"),m=c("q-card");return g(),N(m,{onClick:t[0]||(t[0]=r=>n.changeTheme(n.themeKey)),flat:""},{default:a(()=>[e("div",Y,[e("div",{class:"front shadow-5",style:h(`background-color: ${n.value.color.bg};color: ${n.value.color.active}`)},[R(T(n.themeKey)+" ",1),n.current==n.themeKey?(g(),q("div",Z,[s(u,{name:"check_circle_outline",size:"3rem",class:"q-ma-sm"})])):A("",!0)],4),e("div",{class:"back shadow-5 column justify-center",style:h(`background: linear-gradient(to bottom right ,${n.value.color.bg}, ${n.value.color.active})`)},[(g(!0),q(C,null,j(n.value.color,(r,_)=>(g(),q("div",{class:"row items-center q-px-xl",style:h(`color: ${r}`)},[e("div",{class:"color-square",style:h(`background-color: ${r}`)},null,4),e("div",ee,T(_)+" : ",1),e("div",te,T(r),1)],4))),256))],4)])]),_:1})}}}),se=I(oe,[["__scopeId","data-v-55aa9883"]]),le={class:"q-pa-md setting-tree"},ne={class:"row items-center q-ma-xs"},ce=z({__name:"SettingTree",props:["modelValue"],emits:["update:modelValue"],setup(n,{emit:l}){const{isPhone:t}=U(),{modelValue:u}=n,m=l,r=V(u);K(()=>u,f=>{r.value=f});const _=["设置","主题"],x=V();K(r,(f,i)=>{if(_.includes(f)){r.value=i;const o=!x.value.isExpanded(f);x.value.setExpanded(f,o)}else m("update:modelValue",f)});const p=V([{label:"设置",icon:"settings",fontSize:"1.5rem",iconSize:"2rem",children:[{label:"通用",icon:"tune",fontSize:"1rem",iconSize:"1.4rem"},{label:"主题",icon:"color_lens",fontSize:"1rem",iconSize:"1.4rem",children:[{label:"切换主题",icon:"compare_arrows",fontSize:"1rem",iconSize:"1.4rem"},{label:"自定义主题",icon:"colorize",fontSize:"1rem",iconSize:"1.4rem"}]}]}]);return(f,i)=>{const o=c("q-icon"),$=c("q-tree");return g(),q("div",le,[s($,{ref_key:"tree",ref:x,dense:d(t),"no-selection-unset":"","text-color":"text",color:"text",nodes:p.value,"node-key":"label","selected-color":"active",selected:r.value,"onUpdate:selected":i[0]||(i[0]=w=>r.value=w),"default-expand-all":""},{"default-header":a(w=>[e("div",ne,[s(o,{name:w.node.icon||"share",size:w.node.iconSize,class:"q-mr-sm"},null,8,["name","size"]),e("div",{class:"text-weight-bold",style:h(`font-size: ${w.node.fontSize}`)},T(w.node.label),5)])]),_:1},8,["dense","nodes","selected"])])}}}),S=n=>(O("data-v-241e15ec"),n=n(),F(),n),ae={class:"q-px-lg q-py-sm"},re=S(()=>e("div",{class:"text-h5"},"词组设置",-1)),ie={class:"q-pa-md q-mt-lg"},de={class:"row items-center"},ue=S(()=>e("span",{class:"text-subtitle1"},"使用默认词组",-1)),me=S(()=>e("b",{style:{"font-size":"13px"}},"设置词组时注意词组间用 | 分隔；",-1)),_e=S(()=>e("br",null,null,-1)),ve=S(()=>e("b",{style:{"font-size":"13px"}},"在保存时会自动忽略重复词组",-1)),fe={class:"words-count q-ml-lg"},pe={class:"q-mt-sm words-setting"},he={class:"row justify-end"},ge=S(()=>e("span",{class:"q-px-md"},"保存",-1)),be=S(()=>e("div",{class:"text-h5 q-mt-xl"},"计时模式",-1)),qe={class:"row q-pa-md q-mt-lg"},xe={class:"col"},we=S(()=>e("div",{class:"text-h5"},"限时模式",-1)),$e={class:"row q-pa-md q-mt-lg time-limit-setting"},ye={class:"col row"},Se=z({__name:"GeneralSetting",setup(n){const{isPhone:l,settings:t,saveSettings:u}=U(),m=E({get(){return t.useDefaultWords?t.wordsString:t.customString},set(i){t.useDefaultWords?t.wordsString=i:t.customString=i}}),r=[{label:"20",value:20},{label:"30",value:30},{label:"40",value:40},{label:"50",value:50}];function _(i){t.generateWordsNum=i,u(t)}function x(i){t.useDefaultWords=i,u(t)}function p(){t.wordsString&&(t.wordsString+=" ",M(()=>{t.wordsString=t.wordsString.substring(0,t.wordsString.length-1)}))}const f=E({get(){return t.limitTime||20},set(i){i>0&&(t.limitTime=i)}});return(i,o)=>{const $=c("q-toggle"),w=c("q-tooltip"),y=c("q-icon"),k=c("q-resize-observer"),W=c("q-input"),G=c("q-btn"),D=c("q-separator"),P=c("q-option-group");return g(),q("div",ae,[re,e("div",ie,[e("div",de,[s($,{"onUpdate:modelValue":[o[0]||(o[0]=v=>x(v)),o[1]||(o[1]=v=>d(t).useDefaultWords=v)],size:"50px",color:"active",dark:"","keep-color":"",modelValue:d(t).useDefaultWords},{default:a(()=>[ue]),_:1},8,["modelValue"]),s(y,{size:"20px",color:"text",class:"q-ml-xs cursor-pointer",name:"info"},{default:a(()=>[s(w,{"transition-show":"scale","transition-hide":"scale",class:"text-btnText bg-active",anchor:"top middle",self:"bottom middle",offset:[10,10]},{default:a(()=>[me,_e,ve]),_:1})]),_:1}),e("span",fe,"共"+T([...new Set(m.value.split("|"))].filter(v=>v.trim()!=="").length)+"词",1)]),e("div",pe,[s(W,{placeholder:"请在此处输入自定义词组...",disable:d(t).useDefaultWords,color:"active","input-class":"words-input",modelValue:m.value,"onUpdate:modelValue":o[2]||(o[2]=v=>m.value=v),autogrow:"",outlined:""},{default:a(()=>[s(k,{onResize:p})]),_:1},8,["disable","modelValue"]),e("div",he,[s(G,{onClick:o[3]||(o[3]=v=>d(u)(d(t))),disable:d(t).useDefaultWords,push:"",class:"q-mt-sm q-mr-sm",size:"16px",color:"active","text-color":"btnText"},{default:a(()=>[ge]),_:1},8,["disable"])])])]),s(D,{class:"q-my-xl divider",color:"text"}),be,e("div",qe,[e("div",{class:B(["row items-center text-subtitle1 q-ml-sm",d(l)?"col-12":"col-2"])},"默认生成词数",2),e("div",xe,[s(P,{"onUpdate:modelValue":[o[4]||(o[4]=v=>_(v)),o[5]||(o[5]=v=>d(t).generateWordsNum=v)],modelValue:d(t).generateWordsNum,options:r,color:"active",dark:"",inline:""},null,8,["modelValue"])])]),s(D,{class:"q-my-xl divider",color:"text"}),we,e("div",$e,[e("div",{class:B(["row items-center text-subtitle1 q-ml-sm",d(l)?"col-12":"col-2"])},"默认限定时长",2),e("div",ye,[s(W,{onBlur:o[6]||(o[6]=v=>d(u)(d(t))),onKeydown:o[7]||(o[7]=L(v=>d(u)(d(t)),["enter"])),suffix:"秒","input-class":"time-input",modelValue:f.value,"onUpdate:modelValue":o[8]||(o[8]=v=>f.value=v),color:"active",outlined:""},null,8,["modelValue"])])])])}}}),Ve=I(Se,[["__scopeId","data-v-241e15ec"]]),b=n=>(O("data-v-6fd8163c"),n=n(),F(),n),Te={class:"q-px-lg q-py-sm"},ze=b(()=>e("div",{class:"text-h5 q-mb-xl"},"定制主题",-1)),ke={class:"q-pa-md q-mt-lg row"},Ce={class:"row q-gutter-lg justify-center"},Ie=b(()=>e("div",{class:"cn-word"},"示例",-1)),Ue=b(()=>e("div",{class:"en-word"},[e("code",null,"shili")],-1)),je=[Ie,Ue],We=b(()=>e("div",{class:"cn-word"},"示例",-1)),De=b(()=>e("div",{class:"en-word"},[e("code",null,"shili")],-1)),Ke=[We,De],Ee=b(()=>e("div",{class:"cn-word"},"示例",-1)),Be={class:"en-word",style:{opacity:"0.5"}},Ne=b(()=>e("code",null,"shili",-1)),Ae={class:"q-my-md row q-gutter-md justify-center"},Oe=b(()=>e("div",null,"示例",-1)),Fe=b(()=>e("div",null,"shili",-1)),Ge=b(()=>e("div",null,"示例",-1)),Pe=b(()=>e("div",null,"shili",-1)),Je=b(()=>e("div",null,"示例",-1)),Re=b(()=>e("div",null,"shili",-1)),Le={class:"column q-gutter-lg col-4 color-choose"},Me={class:"row items-center"},He=z({__name:"CustomTheme",setup(n){const l=V({desc:"",color:{active:"",error:"",bg:"",text:"",btnText:""}}),t={active:"#00aaff",error:"#ff0000",bg:"#ffffff",text:"#000000",btnText:"#ffffff"},u={active:"主题颜色",error:"错误颜色",bg:"背景颜色",text:"文字颜色",btnText:"按钮文字颜色"};return(m,r)=>{const _=c("q-card"),x=c("q-color"),p=c("q-popup-proxy"),f=c("q-icon"),i=c("q-input");return g(),q("div",Te,[ze,e("div",ke,[e("div",{class:"col q-mx-lg q-pa-md example-container column justify-center",style:h(`background: ${l.value.color.bg}`)},[e("div",Ce,[e("div",{class:"column items-center word-block",style:h(`color: ${l.value.color.active}`)},je,4),e("div",{class:"column items-center word-block",style:h(`color: ${l.value.color.error}`)},Ke,4),e("div",{class:"column items-center word-block",style:h(`color: ${l.value.color.text}`)},[Ee,e("div",Be,[e("div",{class:"caret waiting",style:h(`background: ${l.value.color.active}`)},null,4),Ne])],4)]),e("div",Ae,[s(_,{class:"column justify-center items-center shadow-3",style:h(`color: ${l.value.color.btnText};background: ${l.value.color.active}`)},{default:a(()=>[Oe,Fe]),_:1},8,["style"]),s(_,{class:"column justify-center items-center shadow-3",style:h(`color: ${l.value.color.btnText};background: ${l.value.color.error}`)},{default:a(()=>[Ge,Pe]),_:1},8,["style"]),s(_,{class:"column justify-center items-center shadow-3",style:h(`color: ${l.value.color.text}; background: ${l.value.color.bg}`)},{default:a(()=>[Je,Re]),_:1},8,["style"])])],4),e("div",Le,[(g(!0),q(C,null,j(Object.keys(t),o=>(g(),q("div",Me,[s(H,{name:"bot"},{default:a(()=>[l.value.color[o]?(g(),q("div",{key:0,class:"color-bot q-mr-sm",style:h(`background-color: ${l.value.color[o]}`)},null,4)):A("",!0)]),_:2},1024),s(i,{"input-class":"theme-input",color:"active","label-color":"text",modelValue:l.value.color[o],"onUpdate:modelValue":$=>l.value.color[o]=$,label:u[o],outlined:""},{append:a(()=>[s(f,{name:"colorize",color:"text",class:"cursor-pointer"},{default:a(()=>[s(p,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:a(()=>[s(x,{modelValue:l.value.color[o],"onUpdate:modelValue":$=>l.value.color[o]=$,"default-value":t[o],"no-header-tabs":""},null,8,["modelValue","onUpdate:modelValue","default-value"])]),_:2},1024)]),_:2},1024)]),_:2},1032,["modelValue","onUpdate:modelValue","label"])]))),256))])])])}}}),Qe=I(He,[["__scopeId","data-v-6fd8163c"]]),Xe={class:"q-px-lg q-py-md row q-gutter-lg"},Ye=z({__name:"Setting",setup(n){const{isPhone:l}=U(),{themes:t,current:u,changeTheme:m}=X(),r=V(l?30:20),_=V("通用");return(x,p)=>{const f=c("q-separator"),i=c("q-avatar"),o=c("q-tab-panel"),$=c("q-tab-panels"),w=c("q-splitter");return g(),q(C,null,[s(f,{color:"text"}),s(w,{horizontal:d(l),modelValue:r.value,"onUpdate:modelValue":p[2]||(p[2]=y=>r.value=y),"separator-style":"background-color: var(--q-text)",style:{height:"calc(100vh - 170px)"}},{before:a(()=>[s(ce,{modelValue:_.value,"onUpdate:modelValue":p[0]||(p[0]=y=>_.value=y)},null,8,["modelValue"])]),separator:a(()=>[s(i,{color:"active","text-color":"btnText",size:"40px",icon:"drag_indicator"})]),after:a(()=>[s($,{modelValue:_.value,"onUpdate:modelValue":p[1]||(p[1]=y=>_.value=y),animated:"","transition-prev":"slide-down","transition-next":"slide-up","transition-duration":"500"},{default:a(()=>[s(o,{name:"通用"},{default:a(()=>[s(Ve)]),_:1}),s(o,{name:"切换主题"},{default:a(()=>[e("div",Xe,[(g(!0),q(C,null,j(d(t),(y,k)=>(g(),N(se,{key:k,themeKey:k,value:y,current:d(u),changeTheme:d(m)},null,8,["themeKey","value","current","changeTheme"]))),128))])]),_:1}),s(o,{name:"自定义主题"},{default:a(()=>[s(Qe)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["horizontal","modelValue"]),s(f,{color:"text"})],64)}}}),tt=I(Ye,[["__scopeId","data-v-4a98f3db"]]);export{tt as default};