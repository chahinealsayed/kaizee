var u=Object.defineProperty;var f=(n,t,e)=>t in n?u(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var h=(n,t,e)=>(f(n,typeof t!="symbol"?t+"":t,e),e);import{c as m}from"./m21bbc25c9f3922b4.js";import{c as v}from"./m78c574d5c3843a3d.js";function d(n){const t=new WeakMap,e=o=>{if(!t.has(o)){let s=typeof n=="function"?n():n;Array.isArray(s)?s=[...s]:typeof s=="object"&&(s={...s}),t.set(o,s)}return t.get(o)};return[e,(o,s)=>{typeof s=="function"?t.set(o,s(e(o))):t.set(o,s)}]}const[l,r]=d(!0),[w,p]=d([]);class A{constructor(t,e){this.name=t,this.sender=e,r(this,!0),p(this,[])}listen(t){p(this,e=>(e.push(t),e))}dispatch(t={}){l(this)&&w(this).forEach(e=>{e(t)})}activate(){r(this,!0)}deactivate(){r(this,!1)}}class g{constructor(t){h(this,"events");this._baseName=t,t||(this._baseName=this.constructor.name),this.events=this.defineEvents(),this.init()}init(){}get className(){return this._baseName}set className(t){this._baseName=t}defineEvents(){return new Proxy({},{get:(t,e,c)=>(t.hasOwnProperty(e)||Reflect.set(t,e,new A(e,this),c),Reflect.get(t,e,c))})}}const b=m();window.codendot=window.codendot??{};window.codendot.vueApps=window.codendot.vueApps??{};class P extends g{constructor(t,e){super("@/lib/Application"),this.name=t,this.component=e}mount(){this.events.init.dispatch({sender:this}),window.codendot.vueApps[this.name]=(t,e)=>new Promise(c=>{this.events.start.dispatch({sender:this});const i=v(this.component,e);i.config.globalProperties.$params=e,i.provide("app",i),i.config.warnHandler=(o,s,a)=>{console.warn(o,s,a)},i.config.errorHandler=(o,s,a)=>{console.error(o,s,a)},i.use(b),this.events.mount.dispatch({vue:i,sender:this}),i.mount(`#${t}`),this.events.mounted.dispatch({vue:i,sender:this}),c(i)})}}const x=(n,t)=>new P(n,t);export{g as B,x as a,d as c,b as p};
//# sourceMappingURL=app.js.map
