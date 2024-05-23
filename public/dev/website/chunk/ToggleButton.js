import{w as F}from"./m78c574d5c3843a3d.js";import{C as M}from"./CloseButton.js";import{O as q}from"./m3fc8d974e5d8216d.js";import{d as P,A as K,T as U,o as j,g as z,l as b,r as G,t as R,p as g,m as w,u as k,y as C,b as A,q as S,B as I,n as y,F as J}from"./mc55b2a42316522d6.js";import{K as Q}from"./ma6cfd38af5d4c661.js";import{r as c}from"./m6bdda40d8bd2cf5a.js";import{_ as H}from"./_plugin-vue_export-helper.js";import{B as W}from"./Button.js";const X={key:0,class:"offcanvas-title"},Y={class:"offcanvas-body"},Z=P({inheritAttrs:!1,__name:"Offcanvas",props:{title:{default:""},placement:{default:"start"},responsive:{default:null},backdrop:{type:[Boolean,String],default:"static"},keyboard:{type:Boolean,default:!1},scroll:{type:Boolean,default:!1},noHeader:{type:Boolean,default:!1},native:{type:Boolean,default:!1}},emits:["close","closed","prevented","open","opened"],setup(v,{expose:_,emit:n}){K();const o=c(null),t=c(null),r=c(!1),B=c(v.native?"div":U),u=e=>{n("close",e)},a=e=>{n("closed",e)},f=e=>{n("prevented",e)},l=e=>{n("open",e)},d=e=>{n("opened",e)},N=()=>{t.value=new q(o.value,{backdrop:v.backdrop,keyboard:v.keyboard,scroll:v.scroll}),o.value.addEventListener("hide.bs.offcanvas",u),o.value.addEventListener("hidden.bs.offcanvas",a),o.value.addEventListener("hidePrevented.bs.offcanvas",f),o.value.addEventListener("show.bs.offcanvas",l),o.value.addEventListener("shown.bs.offcanvas",d)},V=()=>{var e,s;(s=(e=t.value)==null?void 0:e.show)==null||s.call(e)},$=()=>{r.value=!0,y(()=>{var e,s;(s=(e=t.value)==null?void 0:e.hide)==null||s.call(e),setTimeout(()=>{r.value=!1},300)})};function D(){window.location.href="/"}return _({open:V,close:$}),j(()=>{N()}),z(()=>{var e,s,i,E,p,L,m,O,h,T;(s=(e=o.value)==null?void 0:e.removeEventListener)==null||s.call(e,"hide.bs.offcanvas",u),(E=(i=o.value)==null?void 0:i.removeEventListener)==null||E.call(i,"hidden.bs.offcanvas",a),(L=(p=o.value)==null?void 0:p.removeEventListener)==null||L.call(p,"hidePrevented.bs.offcanvas",f),(O=(m=o.value)==null?void 0:m.removeEventListener)==null||O.call(m,"show.bs.offcanvas",l),(T=(h=o.value)==null?void 0:h.removeEventListener)==null||T.call(h,"shown.bs.offcanvas",d)}),(e,s)=>(b(),G(I(B.value),{to:"body"},{default:R(()=>[g("div",S({ref_key:"offcanvasRef",ref:o,class:{[`offcanvas${e.responsive?"-${responsive}":""}`]:!0,[`offcanvas-${e.placement}`]:!0,show:!0,closing:r.value},tabindex:"-1","aria-labelledby":"offcanvasLabel"},e.$attrs),[e.noHeader?C("",!0):(b(),w("div",{key:0,class:"offcanvas-header",onClick:D},[e.$slots.title||e.title?(b(),w("div",X,[k(e.$slots,"title",{},()=>[g("h5",null,Q(e.title),1)])])):C("",!0),A(M,{onClick:F($,["prevent","stop"]),class:"ms-auto"},null,8,["onClick"])])),g("div",Y,[k(e.$slots,"default")])],16)]),_:3}))}});const fe=H(Z,[["__file","Offcanvas.vue"]]),x=P({inheritAttrs:!1,__name:"ToggleButton",emits:["open","close"],setup(v,{expose:_,emit:n}){const o=c(null),t=c(!1),r=()=>{t.value=!0,y(()=>{var a,f;(f=(a=o.value)==null?void 0:a.open)==null||f.call(a),y(()=>{var l,d;(d=(l=o.value)==null?void 0:l.update)==null||d.call(l),y(()=>{n("open")})})})},B=a=>{o.value=a},u=()=>{t.value=!1,n("close")};return _({open:r}),(a,f)=>(b(),w(J,null,[A(W,S({onClick:r},a.$attrs),{default:R(()=>[k(a.$slots,"default")]),_:3},16),t.value?k(a.$slots,"content",{key:0,element:B,closed:u}):C("",!0)],64))}}),ce=H(x,[["__file","ToggleButton.vue"]]);export{fe as O,ce as T};
//# sourceMappingURL=ToggleButton.js.map
