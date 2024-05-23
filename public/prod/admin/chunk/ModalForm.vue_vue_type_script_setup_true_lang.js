import{w as A,a as x}from"./m78c574d5c3843a3d.js";import{I as N}from"./Icon.js";import{t as G,a as de,i as ce}from"./index.js";import{q as pe,r as ve,s as me,t as he,u as ge,f as fe,v as be,w as $e,x as ye,y as ke,z as Ce,A as Se,B as Pe,p as we}from"./m6cd080c8112b9076.js";import{s as Be}from"./m21bbc25c9f3922b4.js";import{p as Ve,c as Ie}from"./StringInput.vue_vue_type_script_setup_true_lang.js";import{D as ae,a as Ne,_ as De}from"./Modal.vue_vue_type_script_setup_true_lang.js";import{d as J,c as F,w as ee,a as u,f as c,y as b,v as i,k as S,F as R,g as _,b as K,e as I,A as H,r as g,p as Ae,G as ze,D as Me,E as Re,q as je,n as te}from"./mc55b2a42316522d6.js";import{r as $,u as m,v as Oe}from"./m6bdda40d8bd2cf5a.js";import{K as O,n as j}from"./ma6cfd38af5d4c661.js";import{_ as se}from"./_plugin-vue_export-helper.js";import{B as oe}from"./Button.js";import{a as Ue}from"./api.js";const Ee={class:"pagination-component"},Fe={key:0,class:"count"},_e={key:1,"aria-label":"Page navigation",class:"pages"},Ke={class:"pagination pagination-sm"},Te={key:0,class:"page-link"},Le=["onClick"],qe={class:"per-page"},We=J({__name:"Pagination",props:{page:{default:1},perPage:{default:10},total:{default:0},pages:{},buttons:{default:5},sizes:{default:()=>[5,10,25,50]}},emits:["update:page","update:perPage","update:total","update:buttons","change"],setup(t,{expose:h,emit:d}){const a=$(t.page),n=$(t.page),o=$(t.perPage),C=F(()=>Math.ceil(t.total/o.value)),P=F(()=>Ve(a.value,t.perPage,t.total,t.buttons)),w=$(null);ee([a,o],()=>{d("update:page",a),d("update:perPage",o),d("update:total",t.total),d("update:buttons",t.buttons),d("change",{page:a,perPage:o,total:t.total,pages:C.value,buttons:t.buttons})},{deep:!0}),ee(o,()=>{a.value=1});const y=l=>{a.value=l},z=()=>{n.value++,n.value>C.value&&(n.value=1)},p=()=>{n.value--,n.value<1&&(n.value=C.value)},v=l=>{o.value=l,w.value.close()};return h({goTo:y,increment:z,decrement:p,changeSize:v}),(l,V)=>(u(),c("div",Ee,[l.total>0?(u(),c("div",Fe,O(m(G)(":?-:? of :? rows",l.perPage*a.value-(l.perPage-1),l.perPage*a.value<=l.total?l.perPage*a.value:l.total,l.total)),1)):b("",!0),P.value.length>1?(u(),c("nav",_e,[i("ul",Ke,[i("li",{class:j(["page-item",{disabled:a.value===1}])},[i("a",{class:"page-link",href:"#",tabindex:"-1","aria-disabled":"true",onClick:V[0]||(V[0]=A(f=>y(1),["prevent"]))},[S(N,{path:m(pe)},null,8,["path"])])],2),i("li",{class:j(["page-item",{disabled:a.value===1}])},[i("a",{class:"page-link",href:"#",tabindex:"-1","aria-disabled":"true",onClick:V[1]||(V[1]=A(f=>y(a.value-1),["prevent"]))},[S(N,{path:m(ve)},null,8,["path"])])],2),(u(!0),c(R,null,_(P.value,f=>(u(),c("li",{class:j(["page-item",{active:f===a.value}]),key:f},[f===a.value?(u(),c("span",Te,O(f),1)):(u(),c("a",{key:1,class:"page-link",href:"#",onClick:A(B=>y(f),["prevent"])},O(f),9,Le))],2))),128)),i("li",{class:j(["page-item",{disabled:a.value===C.value}])},[i("a",{class:"page-link",href:"#",onClick:V[2]||(V[2]=A(f=>y(a.value+1),["prevent"]))},[S(N,{path:m(me)},null,8,["path"])])],2),i("li",{class:j(["page-item",{disabled:a.value===C.value}])},[i("a",{class:"page-link",href:"#",tabindex:"-1","aria-disabled":"true",onClick:V[3]||(V[3]=A(f=>y(C.value),["prevent"]))},[S(N,{path:m(he)},null,8,["path"])])],2)])])):b("",!0),i("div",qe,[l.total>0?(u(),K(ae,{key:0,ref_key:"dropDown",ref:w,title:`${l.perPage} ${m(G)("rows")}`,"auto-close":""},{default:I(()=>[(u(!0),c(R,null,_(l.sizes,(f,B)=>(u(),c(R,{key:f},[B===0||(l.sizes.at(B-1)??0)<=l.total?(u(),K(Ne,{key:0,onClick:A(U=>v(f),["prevent"])},{default:I(()=>[H(O(f)+" "+O(m(G)("rows")),1)]),_:2},1032,["onClick"])):b("",!0)],64))),128))]),_:1},8,["title"])):b("",!0)])]))}});const Ge=se(We,[["__scopeId","data-v-384302b9"]]),He={class:"input-group search-input-group"},Je=["placeholder","value","onKeydown"],Qe=["onClick"],Xe=J({__name:"Search",props:{modelValue:{}},emits:["update:modelValue","clear","search"],setup(t,{emit:h}){const d=o=>{h("update:modelValue",o.target.value.trim())},a=()=>{h("clear")},n=()=>{h("search")};return(o,C)=>(u(),c("div",He,[o.$slots["start-search"]?g(o.$slots,"start-search",{key:0}):b("",!0),o.modelValue!==""?(u(),c("button",{key:1,type:"button",class:"btn btn-primary",onClick:a},[S(N,{path:m(ge)},null,8,["path"])])):b("",!0),o.$slots["before-search"]?g(o.$slots,"before-search",{key:2}):b("",!0),i("input",{type:"text",class:"form-control",placeholder:m(G)("Search..."),value:o.modelValue,onInput:C[0]||(C[0]=P=>d(P)),onKeydown:[x(A(n,["stop"]),["enter"]),x(A(a,["stop"]),["esc"])]},null,40,Je),o.$slots["after-search"]?g(o.$slots,"after-search",{key:3}):b("",!0),i("button",{type:"button",class:"btn btn-primary",onClick:A(n,["prevent"])},[S(N,{path:m(fe)},null,8,["path"])],8,Qe),o.$slots["end-search"]?g(o.$slots,"end-search",{key:4}):b("",!0)]))}}),Ye=t=>(Me("data-v-04c473b0"),t=t(),Re(),t),Ze={class:"row"},xe={class:"col-md-5"},et={class:"d-flex flex-horizontal gap-3"},tt={class:"col-md-7"},at={class:"d-flex gap-2 justify-content-end align-items-center h-100"},st={class:"table-responsive"},ot={key:0,class:"fitable no-select"},lt=Ye(()=>i("th",{class:"fitable no-select"},"#",-1)),nt=["onClick"],rt=["colspan"],ut={key:0,class:"fitable no-select align-middle"},it={class:"fitable no-select align-middle"},dt={key:1,class:"fitable no-select align-middle"},ct={class:"d-flex gap-2 align-items-start"},pt={key:2,class:"fitable no-select align-middle"},vt={key:0},mt=["colspan"],ht=J({__name:"Crud",props:{fields:{},fetch:{type:Function},keyName:{default:"id"},theme:{type:[Boolean,String],default:!1},orderBy:{type:[Boolean,String],default:!1}},emits:["empty","noEmpty"],setup(t,{expose:h,emit:d}){const a=F(()=>t.fields),n=je(),o=de(),{isDarkTheme:C}=Be(o),P=Oe([]),w=$(1),y=$(5),z=$(""),p=$(t.orderBy||t.keyName),v=$(t.orderBy?!t.orderBy.startsWith("-"):!0),l=$(0),V=$(0),f=$(5),B=$({}),U=$(null),T=$(0),D=async()=>{var e,k,s,M;(k=(e=U.value)==null?void 0:e.start)==null||k.call(e);try{const r=await t.fetch({page:w.value,perPage:y.value,keyword:z.value,sort:`${v.value?"":"-"}${p.value}`.trim(),fields:a.value});console.log("response",r),P.value=r.data,l.value=(r==null?void 0:r.total)??0,w.value=(r==null?void 0:r.page)??1,y.value=(r==null?void 0:r.perPage)??1,V.value=(r==null?void 0:r.pages)??0,B.value={},P.value.length>0?d("noEmpty"):d("empty"),T.value++}catch{}(M=(s=U.value)==null?void 0:s.stop)==null||M.call(s)},L=async e=>{e.sortable&&(p.value=e.name,v.value=!v.value,D())},E=e=>{w.value=e.page.value,y.value=e.perPage.value,D()},q=()=>{w.value=1,D()},le=()=>{w.value=1,z.value="",D()},Z=()=>{D()},Q=e=>e.visible===void 0||e.visible,ne=F(()=>{var e,k,s,M,r,W;return t.fields.filter(ie=>Q(ie)).length+1+((k=(e=n==null?void 0:n.proxy)==null?void 0:e.$slots)!=null&&k.actions?1:0)+((M=(s=n==null?void 0:n.proxy)==null?void 0:s.$slots)!=null&&M.moreActions?1:0)+((W=(r=n==null?void 0:n.proxy)==null?void 0:r.$slots)!=null&&W.details?1:0)}),re=e=>{B.value={...B.value,[e[t.keyName]]:!X(e)}},X=e=>Object.hasOwn(B.value,e[t.keyName])&&B.value[e[t.keyName]],ue=F(()=>{var e;return((e=P.value)==null?void 0:e.length)??0});return Ae(()=>{D()}),h({refresh:Z,length:()=>ue.value,data:()=>P.value}),(e,k)=>(u(),c("div",{class:"crud-component",key:`crud-${T.value}`},[g(e.$slots,"start",{},void 0,!0),i("div",Ze,[i("div",xe,[i("div",et,[S(oe,{color:"primary",onClick:Z,ref_key:"refresher",ref:U,"spinner-small":"","spinner-color":"light",style:{"min-width":"50px"}},{default:I(()=>[S(N,{path:m(be)},null,8,["path"])]),_:1},512),S(Xe,{modelValue:z.value,"onUpdate:modelValue":k[0]||(k[0]=s=>z.value=s),onClear:le,onSearch:q},ze({_:2},[e.$slots.startSearch?{name:"start-search",fn:I(()=>[g(e.$slots,"startSearch",{},void 0,!0)]),key:"0"}:void 0,e.$slots.beforeSearch?{name:"before-search",fn:I(()=>[g(e.$slots,"beforeSearch",{},void 0,!0)]),key:"1"}:void 0,e.$slots.aftersearch?{name:"after-search",fn:I(()=>[g(e.$slots,"afterSearch",{},void 0,!0)]),key:"2"}:void 0,e.$slots.endSearch?{name:"end-search",fn:I(()=>[g(e.$slots,"endSearch",{},void 0,!0)]),key:"3"}:void 0]),1032,["modelValue"])])]),i("div",tt,[i("div",at,[g(e.$slots,"topActions",{},void 0,!0)])])]),g(e.$slots,"before",{},void 0,!0),i("div",st,[i("table",{class:j(["table table-bordered table-striped table-hover m-0",{"table-dark":!e.theme&&m(C)||e.theme&&e.theme==="dark"}])},[i("thead",null,[i("tr",null,[e.$slots.details?(u(),c("th",ot," ")):b("",!0),lt,(u(!0),c(R,null,_(a.value,(s,M)=>(u(),c(R,{key:`${s.name}-${M}`},[Q(s)?(u(),c("th",{key:0,class:j({fitable:s.fitable,"no-select":!0,pointer:s.sortable,"table-active":s.sortable&&p.value===s.name})},[i("div",{class:"d-flex gap-2",onClick:A(r=>L(s),["prevent","stop"])},[i("span",null,[g(e.$slots,`${s.name}Header`,{field:s},()=>[H(O(s.label),1)],!0)]),s.sortable&&p.value===s.name?(u(),K(N,{key:0,path:v.value?m($e):m(ye),class:j({"ms-auto":!0}),color:m(ce)()?"info":"primary"},null,8,["path","color"])):(u(),K(N,{key:1,path:m(ke),class:"ms-auto text-muted"},null,8,["path"]))],8,nt)],2)):b("",!0)],64))),128)),e.$slots.moreActions||e.$slots.actions?(u(),c("th",{key:1,colspan:e.$slots.moreActions&&e.$slots.actions?2:1,class:"fitable no-select"}," Actions ",8,rt)):b("",!0)])]),i("tbody",null,[(u(!0),c(R,null,_(P.value,(s,M)=>(u(),c(R,{key:s[e.keyName]},[i("tr",null,[e.$slots.details?(u(),c("td",ut,[S(N,{path:X(s)?m(Ce):m(Se),onClick:r=>re(s),class:"pointer"},null,8,["path","onClick"])])):b("",!0),i("td",it,O(M+1),1),(u(!0),c(R,null,_(a.value,(r,W)=>(u(),c(R,{key:`${r.name}-${W}`},[Q(r)?(u(),c("td",{key:0,class:j({fitable:r.fitable,"select-all":!0,"table-active":r.sortable&&p.value===r.name,border:r.sortable&&p.value===r.name,"align-middle":!0})},[g(e.$slots,`${r.name}Value`,{field:r,item:s},()=>[H(O(s[r.name]),1)],!0)],2)):b("",!0)],64))),128)),e.$slots.actions?(u(),c("td",dt,[i("div",ct,[g(e.$slots,"actions",{item:s},void 0,!0)])])):b("",!0),e.$slots.moreActions?(u(),c("td",pt,[S(ae,{"no-arrow":"",div:""},{button:I(()=>[S(N,{path:m(Pe)},null,8,["path"])]),default:I(()=>[g(e.$slots,"moreActions",{item:s},void 0,!0)]),_:2},1024)])):b("",!0)]),e.$slots.details&&X(s)?(u(),c("tr",vt,[i("td",{colspan:ne.value,class:"p-0 align-middle"},[g(e.$slots,"details",{item:s},void 0,!0)],8,mt)])):b("",!0)],64))),128))])],2)]),g(e.$slots,"after",{},void 0,!0),S(Ge,{page:w.value,"onUpdate:page":k[1]||(k[1]=s=>w.value=s),"per-page":y.value,"onUpdate:perPage":k[2]||(k[2]=s=>y.value=s),total:l.value,"onUpdate:total":k[3]||(k[3]=s=>l.value=s),buttons:f.value,"onUpdate:buttons":k[4]||(k[4]=s=>f.value=s),onChange:E},null,8,["page","per-page","total","buttons"]),g(e.$slots,"end",{},void 0,!0)]))}});const zt=se(ht,[["__scopeId","data-v-04c473b0"]]);function Y(t,h=null){const d=[];let a;for(a in t)if(t.hasOwnProperty(a)){const n=h?`${h}[${a}]`:a,o=t[a];d.push(o!==null&&typeof o=="object"?Y(o,n):`${encodeURIComponent(n)}=${encodeURIComponent(o)}`)}return d.join("&")}var gt=(t=>(t.Number="number",t.String="string",t.Enum="enum",t))(gt||{});const ft=({data:t,header:h})=>({data:t,total:parseInt(h("x-pagination-total-count"))??0,page:parseInt(h("x-pagination-current-page"))??1,perPage:parseInt(h("x-pagination-per-page"))??1,pages:parseInt(h("x-pagination-page-count"))??0}),bt=(t,h)=>{if(t){let d=[];for(const a of h)if(a.searchable){const n={};a.type==="number"&&/^\d+\.{0,1}\d{0,}$/.test(t)?n[a.name]=t:(a.type==="string"||a.type==="enum")&&(n[a.name]={like:t}),Object.keys(n).length>0&&d.push(n)}return d={or:d},Y(d,"filter")}return""},Mt=(t,h,d)=>({page:a,perPage:n,sort:o,keyword:C,fields:P})=>new Promise((w,y)=>{const z=()=>{if(d&&Object.keys(d).length>0){let v=[];for(let l in d)typeof d[l]=="object"?v.push(Y(d[l],l)):v.push(`${l}=${d[l]}`);return`&${v.join("&")}`}return""},p=bt(C,P);Ue().get(`${t}?${h?`expand=${h}&`:""}page=${a}&per-page=${n}&sort=${o}${p?`&${p}`:""}${z()}`).then(v=>{w(ft(v))}).catch(v=>{y(v)})}),Rt=(...t)=>[...t],jt=J({inheritAttrs:!1,__name:"ModalForm",props:{modelClass:{type:Function},name:{},size:{default:null},fullscreen:{type:[Boolean,String],default:!1}},emits:["save"],setup(t,{expose:h,emit:d}){const a=$(null),n=$(null),[o,C,P]=Ie(t.modelClass),w=p=>{C({...p??{}}),te(()=>{var v,l;(l=(v=a.value)==null?void 0:v.open)==null||l.call(v)})},y=()=>{var p,v,l,V;(V=(l=(v=(p=o.value)==null?void 0:p.validate)==null?void 0:v.call(p))==null?void 0:l.then)==null||V.call(l,f=>{var B,U;f&&o.value&&((U=(B=n.value)==null?void 0:B.start)==null||U.call(B),d("save",o.value,(T=!1)=>{var D,L;(L=(D=n.value)==null?void 0:D.stop)==null||L.call(D),T||te(()=>{var E,q;(q=(E=a.value)==null?void 0:E.close)==null||q.call(E)})}))})},z=()=>{P()};return h({open:w}),(p,v)=>m(o)?(u(),K(De,{key:0,ref_key:"modal",ref:a,tag:"form",title:`${m(o).isNewRecord?"Add New":"Edit"} ${p.name}`,size:p.size,fullscreen:p.fullscreen,onSubmit:A(y,["prevent"]),onClosed:z},{header:I(()=>[g(p.$slots,"header")]),buttons:I(()=>[S(oe,{type:"submit",ref_key:"button",ref:n,color:"primary","spinner-color":"info",style:{height:"42px"}},{default:I(()=>[S(N,{path:m(we),color:"info"},null,8,["path"]),H("Save ")]),_:1},512)]),default:I(()=>[g(p.$slots,"default",{model:m(o)})]),_:3},8,["title","size","fullscreen","onSubmit"])):b("",!0)}});export{zt as C,gt as F,jt as _,Rt as c,Mt as f};
