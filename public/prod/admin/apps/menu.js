import{a as f}from"../chunk/app.js";import{I as l}from"../chunk/Icon.js";import{i as c}from"../chunk/m6cd080c8112b9076.js";import{d as y,a as e,f as t,F as o,g as p,k as _,v as a,A}from"../chunk/mc55b2a42316522d6.js";import{n as u,K as v}from"../chunk/ma6cfd38af5d4c661.js";import{_ as k}from"../chunk/_plugin-vue_export-helper.js";import"../chunk/m21bbc25c9f3922b4.js";import"../chunk/m64d389f71fee61f4.js";import"../chunk/m6bdda40d8bd2cf5a.js";import"../chunk/m78c574d5c3843a3d.js";const g={class:"menu"},M=["href"],b=["innerHTML"],H={class:"heading"},L={class:"sub-menu"},T=["href"],x=["innerHTML"],B=y({__name:"Menu",props:{list:{}},setup(V){const d=r=>r.filter(i=>i[2]).length>0;return(r,i)=>(e(),t("ul",g,[(e(!0),t(o,null,p(r.list,(s,h)=>(e(),t("li",{key:h,class:u({"has-sub-menu":!Array.isArray(s),active:Array.isArray(s)?s[3]:d(s.items)})},[Array.isArray(s)?(e(),t("a",{key:0,href:s[2]},[_(l,{path:c[s[0]]},null,8,["path"]),a("span",{class:"title",innerHTML:s[1]},null,8,b)],8,M)):(e(),t(o,{key:1},[a("div",H,[_(l,{path:c[s.title[0]]},null,8,["path"]),A(v(s.title[1]),1)]),a("ul",L,[(e(!0),t(o,null,p(s.items,(n,m)=>(e(),t("li",{key:m,class:u({active:n[2]})},[a("a",{href:n[1]},[a("span",{class:"title",innerHTML:n[0]},null,8,x)],8,T)],2))),128))])],64))],2))),128))]))}});const C=k(B,[["__scopeId","data-v-5b56eaba"]]),N=f("menu",C);N.mount();
