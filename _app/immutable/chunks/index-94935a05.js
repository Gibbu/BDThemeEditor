function b(){}const W=t=>t;function dt(t,e){for(const n in e)t[n]=e[n];return t}function Z(t){return t()}function X(){return Object.create(null)}function w(t){t.forEach(Z)}function D(t){return typeof t=="function"}function Lt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let M;function Rt(t,e){return M||(M=document.createElement("a")),M.href=e,t===M.href}function ht(t){return Object.keys(t).length===0}function mt(t,...e){if(t==null)return b;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Tt(t,e,n){t.$$.on_destroy.push(mt(e,n))}function zt(t,e,n,i){if(t){const s=tt(t,e,n,i);return t[0](s)}}function tt(t,e,n,i){return t[1]&&i?dt(n.ctx.slice(),t[1](i(e))):n.ctx}function Bt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const o=[],r=Math.max(e.dirty.length,s.length);for(let u=0;u<r;u+=1)o[u]=e.dirty[u]|s[u];return o}return e.dirty|s}return e.dirty}function Ft(t,e,n,i,s,o){if(s){const r=tt(e,n,i,o);t.p(r,s)}}function Ht(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function It(t){const e={};for(const n in t)e[n]=!0;return e}function Wt(t){return t==null?"":t}function Gt(t,e,n){return t.set(n),e}function Jt(t){return t&&D(t.destroy)?t.destroy:b}const et=typeof window<"u";let G=et?()=>window.performance.now():()=>Date.now(),J=et?t=>requestAnimationFrame(t):b;const k=new Set;function nt(t){k.forEach(e=>{e.c(t)||(k.delete(e),e.f())}),k.size!==0&&J(nt)}function K(t){let e;return k.size===0&&J(nt),{promise:new Promise(n=>{k.add(e={c:t,f:n})}),abort(){k.delete(e)}}}let B=!1;function pt(){B=!0}function yt(){B=!1}function gt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function bt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const _=e[l];_.claim_order!==void 0&&c.push(_)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,_=(s>0&&e[n[s]].claim_order<=l?s+1:gt(1,s,a=>e[n[a]].claim_order,l))-1;i[c]=n[_]+1;const f=_+1;n[f]=c,s=Math.max(f,s)}const o=[],r=[];let u=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(o.push(e[c-1]);u>=c;u--)r.push(e[u]);u--}for(;u>=0;u--)r.push(e[u]);o.reverse(),r.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<r.length;c++){for(;l<o.length&&r[c].claim_order>=o[l].claim_order;)l++;const _=l<o.length?o[l]:null;t.insertBefore(r[c],_)}}function $t(t,e){t.appendChild(e)}function it(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function xt(t){const e=st("style");return vt(it(t),e),e.sheet}function vt(t,e){return $t(t.head||t,e),e.sheet}function wt(t,e){if(B){for(bt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Kt(t,e,n){B&&!n?wt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function rt(t){t.parentNode.removeChild(t)}function Qt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function st(t){return document.createElement(t)}function kt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Q(t){return document.createTextNode(t)}function Ut(){return Q(" ")}function Vt(){return Q("")}function Xt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Yt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Zt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function te(t){return t===""?null:+t}function Et(t){return Array.from(t.childNodes)}function Nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ct(t,e,n,i,s=!1){Nt(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const u=t[r];if(e(u)){const c=n(u);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),u}}for(let r=t.claim_info.last_index-1;r>=0;r--){const u=t[r];if(e(u)){const c=n(u);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,u}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function ot(t,e,n,i){return ct(t,s=>s.nodeName===e,s=>{const o=[];for(let r=0;r<s.attributes.length;r++){const u=s.attributes[r];n[u.name]||o.push(u.name)}o.forEach(r=>s.removeAttribute(r))},()=>i(e))}function ee(t,e,n){return ot(t,e,n,st)}function ne(t,e,n){return ot(t,e,n,kt)}function At(t,e){return ct(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>Q(e),!0)}function ie(t){return At(t," ")}function re(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function se(t,e){t.value=e==null?"":e}function ce(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function oe(t,e,n){t.classList[n?"add":"remove"](e)}function ut(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function ue(t,e=document.body){return Array.from(e.querySelectorAll(t))}const L=new Map;let R=0;function Ct(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function St(t,e){const n={stylesheet:xt(e),rules:{}};return L.set(t,n),n}function T(t,e,n,i,s,o,r,u=0){const c=16.666/i;let l=`{
`;for(let m=0;m<=1;m+=c){const g=e+(n-e)*o(m);l+=m*100+`%{${r(g,1-g)}}
`}const _=l+`100% {${r(n,1-n)}}
}`,f=`__svelte_${Ct(_)}_${u}`,a=it(t),{stylesheet:d,rules:h}=L.get(a)||St(a,t);h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${_}`,d.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${f} ${i}ms linear ${s}ms 1 both`,R+=1,f}function z(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),R-=s,R||jt())}function jt(){J(()=>{R||(L.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&rt(e)}),L.clear())})}let j;function S(t){j=t}function N(){if(!j)throw new Error("Function called outside component initialization");return j}function le(t){N().$$.on_mount.push(t)}function ae(t){N().$$.after_update.push(t)}function fe(t){N().$$.on_destroy.push(t)}function _e(){const t=N();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const o=ut(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,o)}),!o.defaultPrevented}return!0}}function de(t,e){return N().$$.context.set(t,e),e}function he(t){return N().$$.context.get(t)}function me(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const C=[],Y=[],P=[],H=[],lt=Promise.resolve();let I=!1;function at(){I||(I=!0,lt.then(ft))}function pe(){return at(),lt}function E(t){P.push(t)}function ye(t){H.push(t)}const F=new Set;let q=0;function ft(){const t=j;do{for(;q<C.length;){const e=C[q];q++,S(e),Dt(e.$$)}for(S(null),C.length=0,q=0;Y.length;)Y.pop()();for(let e=0;e<P.length;e+=1){const n=P[e];F.has(n)||(F.add(n),n())}P.length=0}while(C.length);for(;H.length;)H.pop()();I=!1,F.clear(),S(t)}function Dt(t){if(t.fragment!==null){t.update(),w(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}let A;function U(){return A||(A=Promise.resolve(),A.then(()=>{A=null})),A}function v(t,e,n){t.dispatchEvent(ut(`${e?"intro":"outro"}${n}`))}const O=new Set;let y;function ge(){y={r:0,c:[],p:y}}function be(){y.r||w(y.c),y=y.p}function Mt(t,e){t&&t.i&&(O.delete(t),t.i(e))}function $e(t,e,n,i){if(t&&t.o){if(O.has(t))return;O.add(t),y.c.push(()=>{O.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const V={duration:0};function xe(t,e,n){let i=e(t,n),s=!1,o,r,u=0;function c(){o&&z(t,o)}function l(){const{delay:f=0,duration:a=300,easing:d=W,tick:h=b,css:p}=i||V;p&&(o=T(t,0,1,a,f,d,p,u++)),h(0,1);const m=G()+f,g=m+a;r&&r.abort(),s=!0,E(()=>v(t,!0,"start")),r=K($=>{if(s){if($>=g)return h(1,0),v(t,!0,"end"),c(),s=!1;if($>=m){const x=d(($-m)/a);h(x,1-x)}}return s})}let _=!1;return{start(){_||(_=!0,z(t),D(i)?(i=i(),U().then(l)):l())},invalidate(){_=!1},end(){s&&(c(),s=!1)}}}function ve(t,e,n){let i=e(t,n),s=!0,o;const r=y;r.r+=1;function u(){const{delay:c=0,duration:l=300,easing:_=W,tick:f=b,css:a}=i||V;a&&(o=T(t,1,0,l,c,_,a));const d=G()+c,h=d+l;E(()=>v(t,!1,"start")),K(p=>{if(s){if(p>=h)return f(0,1),v(t,!1,"end"),--r.r||w(r.c),!1;if(p>=d){const m=_((p-d)/l);f(1-m,m)}}return s})}return D(i)?U().then(()=>{i=i(),u()}):u(),{end(c){c&&i.tick&&i.tick(1,0),s&&(o&&z(t,o),s=!1)}}}function we(t,e,n,i){let s=e(t,n),o=i?0:1,r=null,u=null,c=null;function l(){c&&z(t,c)}function _(a,d){const h=a.b-o;return d*=Math.abs(h),{a:o,b:a.b,d:h,duration:d,start:a.start,end:a.start+d,group:a.group}}function f(a){const{delay:d=0,duration:h=300,easing:p=W,tick:m=b,css:g}=s||V,$={start:G()+d,b:a};a||($.group=y,y.r+=1),r||u?u=$:(g&&(l(),c=T(t,o,a,h,d,p,g)),a&&m(0,1),r=_($,h),E(()=>v(t,a,"start")),K(x=>{if(u&&x>u.start&&(r=_(u,h),u=null,v(t,r.b,"start"),g&&(l(),c=T(t,o,r.b,r.duration,0,p,s.css))),r){if(x>=r.end)m(o=r.b,1-o),v(t,r.b,"end"),u||(r.b?l():--r.group.r||w(r.group.c)),r=null;else if(x>=r.start){const _t=x-r.start;o=r.a+r.d*p(_t/r.duration),m(o,1-o)}}return!!(r||u)}))}return{run(a){D(s)?U().then(()=>{s=s(),f(a)}):f(a)},end(){l(),r=u=null}}}function ke(t,e){const n={},i={},s={$$scope:1};let o=t.length;for(;o--;){const r=t[o],u=e[o];if(u){for(const c in r)c in u||(i[c]=1);for(const c in u)s[c]||(n[c]=u[c],s[c]=1);t[o]=u}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function Ee(t){return typeof t=="object"&&t!==null?t:{}}function Ne(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Ae(t){t&&t.c()}function Ce(t,e){t&&t.l(e)}function qt(t,e,n,i){const{fragment:s,on_mount:o,on_destroy:r,after_update:u}=t.$$;s&&s.m(e,n),i||E(()=>{const c=o.map(Z).filter(D);r?r.push(...c):w(c),t.$$.on_mount=[]}),u.forEach(E)}function Pt(t,e){const n=t.$$;n.fragment!==null&&(w(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ot(t,e){t.$$.dirty[0]===-1&&(C.push(t),at(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Se(t,e,n,i,s,o,r,u=[-1]){const c=j;S(t);const l=t.$$={fragment:null,ctx:null,props:o,update:b,not_equal:s,bound:X(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:X(),dirty:u,skip_bound:!1,root:e.target||c.$$.root};r&&r(l.root);let _=!1;if(l.ctx=n?n(t,e.props||{},(f,a,...d)=>{const h=d.length?d[0]:a;return l.ctx&&s(l.ctx[f],l.ctx[f]=h)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](h),_&&Ot(t,f)),a}):[],l.update(),_=!0,w(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){pt();const f=Et(e.target);l.fragment&&l.fragment.l(f),f.forEach(rt)}else l.fragment&&l.fragment.c();e.intro&&Mt(t.$$.fragment),qt(t,e.target,e.anchor,e.customElement),yt(),ft()}S(c)}class je{$destroy(){Pt(this,1),this.$destroy=b}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!ht(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Tt as $,Ee as A,Pt as B,dt as C,pe as D,b as E,kt as F,ne as G,wt as H,W as I,zt as J,Xt as K,Jt as L,Ft as M,Ht as N,Bt as O,E as P,we as Q,w as R,je as S,_e as T,oe as U,me as V,te as W,se as X,Y,Ne as Z,ye as _,Ut as a,Gt as a0,Yt as a1,fe as a2,D as a3,Qt as a4,Rt as a5,xe as a6,ve as a7,he as a8,It as a9,Wt as aa,ue as ab,Kt as b,ie as c,be as d,Vt as e,Mt as f,ge as g,rt as h,Se as i,de as j,ae as k,st as l,ee as m,Et as n,le as o,Zt as p,ce as q,Q as r,Lt as s,$e as t,At as u,re as v,Ae as w,Ce as x,qt as y,ke as z};