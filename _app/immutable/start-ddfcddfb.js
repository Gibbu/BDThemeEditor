import{S as Ye,i as We,s as Xe,a as Ze,e as D,c as Qe,b as F,g as Q,t as V,d as x,f as q,h as C,j as xe,o as Re,k as et,l as tt,m as nt,n as ke,p as z,q as rt,r as at,u as ot,v as J,w as G,x as ie,y as K,z as M,A as Ce}from"./chunks/index-5515a1cb.js";import{g as Fe,f as Je,s as Z,a as Oe,b as st,i as it}from"./chunks/singletons-7ca2bb53.js";import{_ as H}from"./chunks/preload-helper-b21cceae.js";import{R as Ge,H as Ie}from"./chunks/control-03134885.js";function lt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function ct(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}const ft=["href","pathname","search","searchParams","toString","toJSON"];function ut(r,e){const n=new URL(r);for(const o of ft){let s=n[o];Object.defineProperty(n,o,{get(){return e(),s},enumerable:!0,configurable:!0})}return pt(n),n}function pt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const dt="/__data.json";function ht(r){return r.replace(/\/$/,"")+dt}function mt(r){let e=5381;if(typeof r=="string"){let n=r.length;for(;n;)e=e*33^r.charCodeAt(--n)}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let o=n.length;for(;o;)e=e*33^n[--o]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const _e=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const o=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;me.delete(o)}return _e(r,e)};const me=new Map;function _t(r,e,n){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;(n==null?void 0:n.body)&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&(s+=`[data-hash="${mt(n.body)}"]`);const c=document.querySelector(s);if(c!=null&&c.textContent){const{body:t,...l}=JSON.parse(c.textContent),f=c.getAttribute("data-ttl");return f&&me.set(e,{body:t,init:l,ttl:1e3*Number(f)}),Promise.resolve(new Response(t,l))}return _e(r,n)}function gt(r,e){const n=me.get(r);if(n){if(performance.now()<n.ttl)return new Response(n.body,n.init);me.delete(r)}return _e(r,e)}const wt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function yt(r){const e=[],n=[],o=[];let s=!0;return{pattern:r==="/"?/^\/$/:new RegExp(`^${vt(r).map((t,l,f)=>{const d=decodeURIComponent(t),g=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(d);if(g)return e.push(g[1]),n.push(g[2]),o.push(!1),"(?:/(.*))?";const y=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(d);if(y)return e.push(y[1]),n.push(y[2]),o.push(!0),"(?:/([^/]+))?";const T=l===f.length-1;return d?"/"+d.split(/\[(.+?)\](?!\])/).map((U,B)=>{if(B%2){const Y=wt.exec(U);if(!Y)throw new Error(`Invalid param: ${U}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,X,le,ne,ce]=Y;return e.push(ne),n.push(ce),o.push(!!X),le?"(.*?)":X?"([^/]*)?":"([^/]+?)"}return T&&U.includes(".")&&(s=!1),U.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join(""):void 0}).join("")}${s?"/?":""}$`),names:e,types:n,optional:o}}function bt(r){return!/^\([^)]+\)$/.test(r)}function vt(r){return r.slice(1).split("/").filter(bt)}function Et(r,{names:e,types:n,optional:o},s){const c={};for(let t=0;t<e.length;t+=1){const l=e[t],f=n[t];let d=r[t+1];if(d||!o[t]){if(f){const g=s[f];if(!g)throw new Error(`Missing "${f}" param matcher`);if(!g(d))return}c[l]=d!=null?d:""}}return c}function kt(r,e,n,o){const s=new Set(e);return Object.entries(n).map(([l,[f,d,g]])=>{const{pattern:y,names:T,types:E,optional:ee}=yt(l),U={id:l,exec:B=>{const Y=y.exec(B);if(Y)return Et(Y,{names:T,types:E,optional:ee},o)},errors:[1,...g||[]].map(B=>r[B]),layouts:[0,...d||[]].map(t),leaf:c(f)};return U.errors.length=U.layouts.length=Math.max(U.errors.length,U.layouts.length),U});function c(l){const f=l<0;return f&&(l=~l),[f,r[l]]}function t(l){return l===void 0?l:[s.has(l),r[l]]}}function $t(r){let e,n,o;var s=r[0][0];function c(t){return{props:{data:t[2],form:t[1]}}}return s&&(e=J(s,c(r))),{c(){e&&G(e.$$.fragment),n=D()},l(t){e&&ie(e.$$.fragment,t),n=D()},m(t,l){e&&K(e,t,l),F(t,n,l),o=!0},p(t,l){const f={};if(l&4&&(f.data=t[2]),l&2&&(f.form=t[1]),s!==(s=t[0][0])){if(e){Q();const d=e;V(d.$$.fragment,1,0,()=>{M(d,1)}),x()}s?(e=J(s,c(t)),G(e.$$.fragment),q(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else s&&e.$set(f)},i(t){o||(e&&q(e.$$.fragment,t),o=!0)},o(t){e&&V(e.$$.fragment,t),o=!1},d(t){t&&C(n),e&&M(e,t)}}}function Rt(r){let e,n,o;var s=r[0][0];function c(t){return{props:{data:t[2],$$slots:{default:[Lt]},$$scope:{ctx:t}}}}return s&&(e=J(s,c(r))),{c(){e&&G(e.$$.fragment),n=D()},l(t){e&&ie(e.$$.fragment,t),n=D()},m(t,l){e&&K(e,t,l),F(t,n,l),o=!0},p(t,l){const f={};if(l&4&&(f.data=t[2]),l&1051&&(f.$$scope={dirty:l,ctx:t}),s!==(s=t[0][0])){if(e){Q();const d=e;V(d.$$.fragment,1,0,()=>{M(d,1)}),x()}s?(e=J(s,c(t)),G(e.$$.fragment),q(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else s&&e.$set(f)},i(t){o||(e&&q(e.$$.fragment,t),o=!0)},o(t){e&&V(e.$$.fragment,t),o=!1},d(t){t&&C(n),e&&M(e,t)}}}function Ot(r){let e,n,o;var s=r[0][1];function c(t){return{props:{data:t[3],form:t[1]}}}return s&&(e=J(s,c(r))),{c(){e&&G(e.$$.fragment),n=D()},l(t){e&&ie(e.$$.fragment,t),n=D()},m(t,l){e&&K(e,t,l),F(t,n,l),o=!0},p(t,l){const f={};if(l&8&&(f.data=t[3]),l&2&&(f.form=t[1]),s!==(s=t[0][1])){if(e){Q();const d=e;V(d.$$.fragment,1,0,()=>{M(d,1)}),x()}s?(e=J(s,c(t)),G(e.$$.fragment),q(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else s&&e.$set(f)},i(t){o||(e&&q(e.$$.fragment,t),o=!0)},o(t){e&&V(e.$$.fragment,t),o=!1},d(t){t&&C(n),e&&M(e,t)}}}function It(r){let e,n,o;var s=r[0][1];function c(t){return{props:{data:t[3],$$slots:{default:[St]},$$scope:{ctx:t}}}}return s&&(e=J(s,c(r))),{c(){e&&G(e.$$.fragment),n=D()},l(t){e&&ie(e.$$.fragment,t),n=D()},m(t,l){e&&K(e,t,l),F(t,n,l),o=!0},p(t,l){const f={};if(l&8&&(f.data=t[3]),l&1043&&(f.$$scope={dirty:l,ctx:t}),s!==(s=t[0][1])){if(e){Q();const d=e;V(d.$$.fragment,1,0,()=>{M(d,1)}),x()}s?(e=J(s,c(t)),G(e.$$.fragment),q(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else s&&e.$set(f)},i(t){o||(e&&q(e.$$.fragment,t),o=!0)},o(t){e&&V(e.$$.fragment,t),o=!1},d(t){t&&C(n),e&&M(e,t)}}}function St(r){let e,n,o;var s=r[0][2];function c(t){return{props:{data:t[4],form:t[1]}}}return s&&(e=J(s,c(r))),{c(){e&&G(e.$$.fragment),n=D()},l(t){e&&ie(e.$$.fragment,t),n=D()},m(t,l){e&&K(e,t,l),F(t,n,l),o=!0},p(t,l){const f={};if(l&16&&(f.data=t[4]),l&2&&(f.form=t[1]),s!==(s=t[0][2])){if(e){Q();const d=e;V(d.$$.fragment,1,0,()=>{M(d,1)}),x()}s?(e=J(s,c(t)),G(e.$$.fragment),q(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else s&&e.$set(f)},i(t){o||(e&&q(e.$$.fragment,t),o=!0)},o(t){e&&V(e.$$.fragment,t),o=!1},d(t){t&&C(n),e&&M(e,t)}}}function Lt(r){let e,n,o,s;const c=[It,Ot],t=[];function l(f,d){return f[0][2]?0:1}return e=l(r),n=t[e]=c[e](r),{c(){n.c(),o=D()},l(f){n.l(f),o=D()},m(f,d){t[e].m(f,d),F(f,o,d),s=!0},p(f,d){let g=e;e=l(f),e===g?t[e].p(f,d):(Q(),V(t[g],1,1,()=>{t[g]=null}),x(),n=t[e],n?n.p(f,d):(n=t[e]=c[e](f),n.c()),q(n,1),n.m(o.parentNode,o))},i(f){s||(q(n),s=!0)},o(f){V(n),s=!1},d(f){t[e].d(f),f&&C(o)}}}function Ke(r){let e,n=r[6]&&Me(r);return{c(){e=et("div"),n&&n.c(),this.h()},l(o){e=tt(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=nt(e);n&&n.l(s),s.forEach(C),this.h()},h(){ke(e,"id","svelte-announcer"),ke(e,"aria-live","assertive"),ke(e,"aria-atomic","true"),z(e,"position","absolute"),z(e,"left","0"),z(e,"top","0"),z(e,"clip","rect(0 0 0 0)"),z(e,"clip-path","inset(50%)"),z(e,"overflow","hidden"),z(e,"white-space","nowrap"),z(e,"width","1px"),z(e,"height","1px")},m(o,s){F(o,e,s),n&&n.m(e,null)},p(o,s){o[6]?n?n.p(o,s):(n=Me(o),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(o){o&&C(e),n&&n.d()}}}function Me(r){let e;return{c(){e=rt(r[7])},l(n){e=at(n,r[7])},m(n,o){F(n,e,o)},p(n,o){o&128&&ot(e,n[7])},d(n){n&&C(e)}}}function At(r){let e,n,o,s,c;const t=[Rt,$t],l=[];function f(g,y){return g[0][1]?0:1}e=f(r),n=l[e]=t[e](r);let d=r[5]&&Ke(r);return{c(){n.c(),o=Ze(),d&&d.c(),s=D()},l(g){n.l(g),o=Qe(g),d&&d.l(g),s=D()},m(g,y){l[e].m(g,y),F(g,o,y),d&&d.m(g,y),F(g,s,y),c=!0},p(g,[y]){let T=e;e=f(g),e===T?l[e].p(g,y):(Q(),V(l[T],1,1,()=>{l[T]=null}),x(),n=l[e],n?n.p(g,y):(n=l[e]=t[e](g),n.c()),q(n,1),n.m(o.parentNode,o)),g[5]?d?d.p(g,y):(d=Ke(g),d.c(),d.m(s.parentNode,s)):d&&(d.d(1),d=null)},i(g){c||(q(n),c=!0)},o(g){V(n),c=!1},d(g){l[e].d(g),g&&C(o),d&&d.d(g),g&&C(s)}}}function Nt(r,e,n){let{stores:o}=e,{page:s}=e,{components:c}=e,{form:t}=e,{data_0:l=null}=e,{data_1:f=null}=e,{data_2:d=null}=e;xe(o.page.notify);let g=!1,y=!1,T=null;return Re(()=>{const E=o.page.subscribe(()=>{g&&(n(6,y=!0),n(7,T=document.title||"untitled page"))});return n(5,g=!0),E}),r.$$set=E=>{"stores"in E&&n(8,o=E.stores),"page"in E&&n(9,s=E.page),"components"in E&&n(0,c=E.components),"form"in E&&n(1,t=E.form),"data_0"in E&&n(2,l=E.data_0),"data_1"in E&&n(3,f=E.data_1),"data_2"in E&&n(4,d=E.data_2)},r.$$.update=()=>{r.$$.dirty&768&&o.page.set(s)},[c,t,l,f,d,g,y,T,o,s]}class Pt extends Ye{constructor(e){super(),We(this,e,Nt,At,Xe,{stores:8,page:9,components:0,form:1,data_0:2,data_1:3,data_2:4})}}const jt={},ge=[()=>H(()=>import("./chunks/0-40fdb8f4.js"),["./chunks/0-40fdb8f4.js","./components/pages/_layout.svelte-08b2203c.js","./chunks/index-5515a1cb.js","./chunks/index-0a81dc8e.js","./assets/Select-3ae2d12e.css","./chunks/Modal-cf22e8e1.js","./chunks/uid-1541750c.js","./assets/_layout-8fc10078.css"],import.meta.url),()=>H(()=>import("./chunks/1-e5a291e7.js"),["./chunks/1-e5a291e7.js","./components/error.svelte-43d25d70.js","./chunks/index-5515a1cb.js","./chunks/stores-34efad09.js","./chunks/singletons-7ca2bb53.js"],import.meta.url),()=>H(()=>import("./chunks/2-fe91aca7.js"),["./chunks/2-fe91aca7.js","./components/pages/(editor)/theme/_slug_/_layout.svelte-aa273044.js","./chunks/index-5515a1cb.js"],import.meta.url),()=>H(()=>import("./chunks/3-1ae92ed2.js"),["./chunks/3-1ae92ed2.js","./components/pages/(site)/_layout.svelte-4ae09a53.js","./chunks/index-5515a1cb.js","./chunks/stores-34efad09.js","./chunks/singletons-7ca2bb53.js","./chunks/nprogress-d4c69774.js","./assets/_layout-ce019de1.css"],import.meta.url),()=>H(()=>import("./chunks/4-49fb3c20.js"),["./chunks/4-49fb3c20.js","./components/pages/(site)/_error.svelte-f0e9e1b6.js","./chunks/index-5515a1cb.js","./chunks/index-0a81dc8e.js","./assets/Select-3ae2d12e.css","./chunks/stores-34efad09.js","./chunks/singletons-7ca2bb53.js","./assets/_error-b3e1f7d1.css"],import.meta.url),()=>H(()=>import("./chunks/5-12925378.js"),["./chunks/5-12925378.js","./components/pages/(editor)/theme/_page.svelte-b5ffcfb8.js","./chunks/index-5515a1cb.js","./chunks/navigation-1076c97a.js","./chunks/singletons-7ca2bb53.js"],import.meta.url),()=>H(()=>import("./chunks/6-eb2b0939.js"),["./chunks/6-eb2b0939.js","./chunks/_page-4be97b38.js","./chunks/index-13c7b2a3.js","./chunks/index-e9ed3a62.js","./chunks/control-03134885.js","./components/pages/(editor)/theme/_slug_/_page.svelte-722b2f6b.js","./chunks/index-5515a1cb.js","./chunks/navigation-1076c97a.js","./chunks/singletons-7ca2bb53.js","./chunks/Input-a3151f46.js","./chunks/uid-1541750c.js","./assets/Select-3ae2d12e.css","./chunks/index-0a81dc8e.js","./chunks/nprogress-d4c69774.js","./chunks/preload-helper-b21cceae.js","./chunks/Modal-cf22e8e1.js","./chunks/MetaData-3e426c16.js","./assets/_page-3aa3aacf.css"],import.meta.url),()=>H(()=>import("./chunks/7-b835fd20.js"),["./chunks/7-b835fd20.js","./components/pages/(site)/_page.svelte-211c8d58.js","./chunks/index-5515a1cb.js","./chunks/index-0a81dc8e.js","./assets/Select-3ae2d12e.css","./chunks/MetaData-3e426c16.js","./assets/_page-e17cda10.css"],import.meta.url),()=>H(()=>import("./chunks/8-0d49a8d2.js"),["./chunks/8-0d49a8d2.js","./components/pages/(site)/themes/_page.svelte-1fdd5fdb.js","./chunks/index-5515a1cb.js","./chunks/index-13c7b2a3.js","./chunks/Input-a3151f46.js","./chunks/uid-1541750c.js","./assets/Select-3ae2d12e.css","./chunks/MetaData-3e426c16.js","./assets/_page-5d5dcde9.css"],import.meta.url)],Tt=[0,2],Ut={"/(site)":[7,[3],[4]],"/(site)/themes":[8,[3],[4]],"/(editor)/theme":[5],"/(editor)/theme/[slug]":[6,[2]]},Dt={handleError:({error:r})=>{console.error(r)}};async function Vt(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([o,s])=>[o,await s])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const qt=-1,Bt=-2,Ct=-3,Ft=-4,Jt=-5,Gt=-6;function Kt(r){const e=JSON.parse(r);if(typeof e=="number")return s(e);const n=e,o=Array(n.length);function s(c){if(c===qt)return;if(c===Ct)return NaN;if(c===Ft)return 1/0;if(c===Jt)return-1/0;if(c===Gt)return-0;if(c in o)return o[c];const t=n[c];if(!t||typeof t!="object")o[c]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":o[c]=new Date(t[1]);break;case"Set":const f=new Set;o[c]=f;for(let y=1;y<t.length;y+=1)f.add(s(t[y]));break;case"Map":const d=new Map;o[c]=d;for(let y=1;y<t.length;y+=2)d.set(s(t[y]),s(t[y+1]));break;case"RegExp":o[c]=new RegExp(t[1],t[2]);break;case"Object":o[c]=Object(t[1]);break;case"BigInt":o[c]=BigInt(t[1]);break;case"null":const g=Object.create(null);o[c]=g;for(let y=1;y<t.length;y+=2)g[t[y]]=s(t[y+1]);break}else{const l=new Array(t.length);o[c]=l;for(let f=0;f<t.length;f+=1){const d=t[f];d!==Bt&&(l[f]=s(d))}}else{const l={};o[c]=l;for(const f in t){const d=t[f];l[f]=s(d)}}return o[c]}return s(0)}const He="sveltekit:scroll",W="sveltekit:index",pe=kt(ge,Tt,Ut,jt),Se=ge[0],Le=ge[1];Se();Le();let se={};try{se=JSON.parse(sessionStorage[He])}catch{}function $e(r){se[r]=Oe()}function Mt({target:r,base:e,trailing_slash:n}){var Ve;const o=[];let s=null;const c={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},l=!1,f=!1,d=!0,g=!1,y=!1,T,E=(Ve=history.state)==null?void 0:Ve[W];E||(E=Date.now(),history.replaceState({...history.state,[W]:E},"",location.href));const ee=se[E];ee&&(history.scrollRestoration="manual",scrollTo(ee.x,ee.y));let U=!1,B,Y,X;async function le(){X=X||Promise.resolve(),await X,X=null;const a=new URL(location.href),p=be(a,!0);s=null,await Ae(p,a,[])}async function ne(a,{noscroll:p=!1,replaceState:h=!1,keepfocus:i=!1,state:u={},invalidateAll:m=!1},_,k){return typeof a=="string"&&(a=new URL(a,Fe(document))),ve({url:a,scroll:p?Oe():null,keepfocus:i,redirect_chain:_,details:{state:u,replaceState:h},nav_token:k,accepted:()=>{m&&(y=!0)},blocked:()=>{},type:"goto"})}async function ce(a){const p=be(a,!1);if(!p)throw new Error(`Attempted to prefetch a URL that does not belong to this app: ${a}`);return s={id:p.id,promise:je(p)},s.promise}async function Ae(a,p,h,i,u={},m){var k,$;Y=u;let _=a&&await je(a);if(_||(_=await De(p,null,oe(new Error(`Not found: ${p.pathname}`),{url:p,params:{},routeId:null}),404)),p=(a==null?void 0:a.url)||p,Y!==u)return!1;if(_.type==="redirect")if(h.length>10||h.includes(p.pathname))_=await fe({status:500,error:oe(new Error("Redirect loop"),{url:p,params:{},routeId:null}),url:p,routeId:null});else return ne(new URL(_.location,p).href,{},[...h,p.pathname],u),!1;else(($=(k=_.props)==null?void 0:k.page)==null?void 0:$.status)>=400&&await Z.updated.check()&&await ue(p);if(o.length=0,y=!1,g=!0,i&&i.details){const{details:b}=i,v=b.replaceState?0:1;b.state[W]=E+=v,history[b.replaceState?"replaceState":"pushState"](b.state,"",p)}if(s=null,f){t=_.state,_.props.page&&(_.props.page.url=p);const b=he();T.$set(_.props),b()}else Ne(_);if(i){const{scroll:b,keepfocus:v}=i;if(!v){const O=document.body,S=O.getAttribute("tabindex");O.tabIndex=-1,O.focus({preventScroll:!0}),setTimeout(()=>{var L;(L=getSelection())==null||L.removeAllRanges()}),S!==null?O.setAttribute("tabindex",S):O.removeAttribute("tabindex")}if(await Ce(),d){const O=p.hash&&document.getElementById(p.hash.slice(1));b?scrollTo(b.x,b.y):O?O.scrollIntoView():scrollTo(0,0)}}else await Ce();d=!0,_.props.page&&(B=_.props.page),m&&m(),g=!1}function Ne(a){var u,m;t=a.state;const p=document.querySelector("style[data-sveltekit]");p&&p.remove(),B=a.props.page;const h=he();T=new Pt({target:r,props:{...a.props,stores:Z},hydrate:!0}),h();const i={from:null,to:de("to",{params:t.params,routeId:(m=(u=t.route)==null?void 0:u.id)!=null?m:null,url:new URL(location.href)}),type:"load"};c.after_navigate.forEach(_=>_(i)),f=!0}async function re({url:a,params:p,branch:h,status:i,error:u,route:m,form:_}){var S;const k=h.filter(Boolean),$={type:"loaded",state:{url:a,params:p,branch:h,error:u,route:m},props:{components:k.map(L=>L.node.component)}};_!==void 0&&($.props.form=_);let b={},v=!B;for(let L=0;L<k.length;L+=1){const P=k[L];b={...b,...P.data},(v||!t.branch.some(j=>j===P))&&($.props[`data_${L}`]=b,v=v||Object.keys((S=P.data)!=null?S:{}).length>0)}if(v||(v=Object.keys(B.data).length!==Object.keys(b).length),!t.url||a.href!==t.url.href||t.error!==u||_!==void 0||v){$.props.page={error:u,params:p,routeId:m&&m.id,status:i,url:a,form:_,data:v?b:B.data};const L=(P,j)=>{Object.defineProperty($.props.page,P,{get:()=>{throw new Error(`$page.${P} has been replaced by $page.url.${j}`)}})};L("origin","origin"),L("path","pathname"),L("query","searchParams")}return $}async function we({loader:a,parent:p,url:h,params:i,routeId:u,server_data_node:m}){var b,v,O,S,L;let _=null;const k={dependencies:new Set,params:new Set,parent:!1,url:!1},$=await a();if((b=$.shared)!=null&&b.load){let P=function(...I){for(const w of I){const{href:R}=new URL(w,h);k.dependencies.add(R)}};const j={routeId:u,params:new Proxy(i,{get:(I,w)=>(k.params.add(w),I[w])}),data:(v=m==null?void 0:m.data)!=null?v:null,url:ut(h,()=>{k.url=!0}),async fetch(I,w){let R;I instanceof Request?(R=I.url,w={body:I.method==="GET"||I.method==="HEAD"?void 0:await I.blob(),cache:I.cache,credentials:I.credentials,headers:I.headers,integrity:I.integrity,keepalive:I.keepalive,method:I.method,mode:I.mode,redirect:I.redirect,referrer:I.referrer,referrerPolicy:I.referrerPolicy,signal:I.signal,...w}):R=I;const N=new URL(R,h).href;return P(N),f?gt(N,w):_t(R,N,w)},setHeaders:()=>{},depends:P,parent(){return k.parent=!0,p()}};Object.defineProperties(j,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),_=(O=await $.shared.load.call(null,j))!=null?O:null,_=_?await Vt(_):null}return{node:$,loader:a,server:m,shared:(S=$.shared)!=null&&S.load?{type:"data",data:_,uses:k}:null,data:(L=_!=null?_:m==null?void 0:m.data)!=null?L:null}}function Pe(a,p,h,i){if(y)return!0;if(!h)return!1;if(h.parent&&p||h.url&&a)return!0;for(const u of h.params)if(i[u]!==t.params[u])return!0;for(const u of h.dependencies)if(o.some(m=>m(new URL(u))))return!0;return!1}function ye(a,p){var h,i;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((h=a.uses.dependencies)!=null?h:[]),params:new Set((i=a.uses.params)!=null?i:[]),parent:!!a.uses.parent,url:!!a.uses.url}}:(a==null?void 0:a.type)==="skip"&&p!=null?p:null}async function je({id:a,invalidating:p,url:h,params:i,route:u}){var I;if((s==null?void 0:s.id)===a)return s.promise;const{errors:m,layouts:_,leaf:k}=u,$=[..._,k];m.forEach(w=>w==null?void 0:w().catch(()=>{})),$.forEach(w=>w==null?void 0:w[1]().catch(()=>{}));let b=null;const v=t.url?a!==t.url.pathname+t.url.search:!1,O=$.reduce((w,R,N)=>{var ae;const A=t.branch[N],te=!!(R!=null&&R[0])&&((A==null?void 0:A.loader)!==R[1]||Pe(v,w.some(Boolean),(ae=A.server)==null?void 0:ae.uses,i));return w.push(te),w},[]);if(O.some(Boolean)){try{b=await ze(h,O)}catch(w){return fe({status:500,error:oe(w,{url:h,params:i,routeId:u.id}),url:h,routeId:u.id})}if(b.type==="redirect")return b}const S=b==null?void 0:b.nodes;let L=!1;const P=$.map(async(w,R)=>{var ae;if(!w)return;const N=t.branch[R],A=S==null?void 0:S[R];if((!A||A.type==="skip")&&w[1]===(N==null?void 0:N.loader)&&!Pe(v,L,(ae=N.shared)==null?void 0:ae.uses,i))return N;if(L=!0,(A==null?void 0:A.type)==="error")throw A;return we({loader:w[1],url:h,params:i,routeId:u.id,parent:async()=>{var Be;const qe={};for(let Ee=0;Ee<R;Ee+=1)Object.assign(qe,(Be=await P[Ee])==null?void 0:Be.data);return qe},server_data_node:ye(A===void 0&&w[0]?{type:"skip"}:A!=null?A:null,N==null?void 0:N.server)})});for(const w of P)w.catch(()=>{});const j=[];for(let w=0;w<$.length;w+=1)if($[w])try{j.push(await P[w])}catch(R){if(R instanceof Ge)return{type:"redirect",location:R.location};let N=500,A;S!=null&&S.includes(R)?(N=(I=R.status)!=null?I:N,A=R.error):R instanceof Ie?(N=R.status,A=R.body):A=oe(R,{params:i,url:h,routeId:u.id});const te=await Te(w,j,m);return te?await re({url:h,params:i,branch:j.slice(0,te.idx).concat(te.node),status:N,error:A,route:u}):await De(h,u.id,A,N)}else j.push(void 0);return await re({url:h,params:i,branch:j,status:200,error:null,route:u,form:p?void 0:null})}async function Te(a,p,h){for(;a--;)if(h[a]){let i=a;for(;!p[i];)i-=1;try{return{idx:i+1,node:{node:await h[a](),loader:h[a],data:{},server:null,shared:null}}}catch{continue}}}async function fe({status:a,error:p,url:h,routeId:i}){var b;const u={},m=await Se();let _=null;if(m.server)try{const v=await ze(h,[!0]);if(v.type!=="data"||v.nodes[0]&&v.nodes[0].type!=="data")throw 0;_=(b=v.nodes[0])!=null?b:null}catch{(h.origin!==location.origin||h.pathname!==location.pathname||l)&&await ue(h)}const k=await we({loader:Se,url:h,params:u,routeId:i,parent:()=>Promise.resolve({}),server_data_node:ye(_)}),$={node:await Le(),loader:Le,shared:null,server:null,data:null};return await re({url:h,params:u,branch:[k,$],status:a,error:p,route:null})}function be(a,p){if(Ue(a))return;const h=decodeURI(a.pathname.slice(e.length)||"/");for(const i of pe){const u=i.exec(h);if(u){const m=new URL(a.origin+lt(a.pathname,n)+a.search+a.hash);return{id:m.pathname+m.search,invalidating:p,route:i,params:ct(u),url:m}}}}function Ue(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}async function ve({url:a,scroll:p,keepfocus:h,redirect_chain:i,details:u,type:m,delta:_,nav_token:k,accepted:$,blocked:b}){var P,j,I,w;let v=!1;const O=be(a,!1),S={from:de("from",{params:t.params,routeId:(j=(P=t.route)==null?void 0:P.id)!=null?j:null,url:t.url}),to:de("to",{params:(I=O==null?void 0:O.params)!=null?I:null,routeId:(w=O==null?void 0:O.route.id)!=null?w:null,url:a}),type:m};_!==void 0&&(S.delta=_);const L={...S,cancel:()=>{v=!0}};if(c.before_navigate.forEach(R=>R(L)),v){b();return}$e(E),$(),f&&Z.navigating.set(S),await Ae(O,a,i,{scroll:p,keepfocus:h,details:u},k,()=>{c.after_navigate.forEach(R=>R(S)),Z.navigating.set(null)})}async function De(a,p,h,i){return a.origin===location.origin&&a.pathname===location.pathname&&!l?await fe({status:i,error:h,url:a,routeId:p}):await ue(a)}function ue(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{Re(()=>(c.after_navigate.push(a),()=>{const p=c.after_navigate.indexOf(a);c.after_navigate.splice(p,1)}))},before_navigate:a=>{Re(()=>(c.before_navigate.push(a),()=>{const p=c.before_navigate.indexOf(a);c.before_navigate.splice(p,1)}))},disable_scroll_handling:()=>{(g||!f)&&(d=!1)},goto:(a,p={})=>ne(a,p,[]),invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")o.push(a);else{const{href:p}=new URL(a,location.href);o.push(h=>h.href===p)}return le()},invalidateAll:()=>(y=!0,le()),prefetch:async a=>{const p=new URL(a,Fe(document));await ce(p)},prefetch_routes:async a=>{const h=(a?pe.filter(i=>a.some(u=>i.exec(u))):pe).map(i=>Promise.all([...i.layouts,i.leaf].map(u=>u==null?void 0:u[1]())));await Promise.all(h)},apply_action:async a=>{if(a.type==="error"){const p=new URL(location.href),{branch:h,route:i}=t;if(!i)return;const u=await Te(t.branch.length,h,i.errors);if(u){const m=await re({url:p,params:t.params,branch:h.slice(0,u.idx).concat(u.node),status:500,error:a.error,route:i});t=m.state;const _=he();T.$set(m.props),_()}}else if(a.type==="redirect")ne(a.location,{invalidateAll:!0},[]);else{const p={form:a.data,page:{...B,form:a.data,status:a.status}},h=he();T.$set(p),h()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var _,k;let u=!1;const m={from:de("from",{params:t.params,routeId:(k=(_=t.route)==null?void 0:_.id)!=null?k:null,url:t.url}),to:null,type:"unload",cancel:()=>u=!0};c.before_navigate.forEach($=>$(m)),u?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){$e(E);try{sessionStorage[He]=JSON.stringify(se)}catch{}}});const a=i=>{const{url:u,options:m}=Je(i);if(u&&m.prefetch){if(Ue(u))return;ce(u)}};let p;const h=i=>{clearTimeout(p),p=setTimeout(()=>{var u;(u=i.target)==null||u.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",h),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const{a:u,url:m,options:_}=Je(i);if(!u||!m)return;const k=u instanceof SVGAElement;if(!k&&m.protocol!==location.protocol&&!(m.protocol==="https:"||m.protocol==="http:"))return;const $=(u.getAttribute("rel")||"").split(/\s+/);if(u.hasAttribute("download")||$.includes("external")||_.reload||(k?u.target.baseVal:u.target))return;const[b,v]=m.href.split("#");if(v!==void 0&&b===location.href.split("#")[0]){U=!0,$e(E),t.url=m,Z.page.set({...B,url:m}),Z.page.notify();return}ve({url:m,scroll:_.noscroll?Oe():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:m.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),addEventListener("popstate",i=>{if(i.state){if(i.state[W]===E)return;const u=i.state[W]-E;ve({url:new URL(location.href),scroll:se[i.state[W]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{E=i.state[W]},blocked:()=>{history.go(-u)},type:"popstate",delta:u})}}),addEventListener("hashchange",()=>{U&&(U=!1,history.replaceState({...history.state,[W]:++E},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&Z.navigating.set(null)})},_hydrate:async({status:a,error:p,node_ids:h,params:i,routeId:u,data:m,form:_})=>{var b;l=!0;const k=new URL(location.href);let $;try{const v=h.map(async(O,S)=>{const L=m[S];return we({loader:ge[O],url:k,params:i,routeId:u,parent:async()=>{const P={};for(let j=0;j<S;j+=1)Object.assign(P,(await v[j]).data);return P},server_data_node:ye(L)})});$=await re({url:k,params:i,branch:await Promise.all(v),status:a,error:p,form:_,route:(b=pe.find(O=>O.id===u))!=null?b:null})}catch(v){if(v instanceof Ge){await ue(new URL(v.location,location.href));return}$=await fe({status:v instanceof Ie?v.status:500,error:oe(v,{url:k,params:i,routeId:u}),url:k,routeId:u})}Ne($)}}}async function ze(r,e){const n=new URL(r);n.pathname=ht(r.pathname);const o=await _e(n.href,{headers:{"x-sveltekit-invalidated":e.map(c=>c?"1":"").join(",")}}),s=await o.text();if(!o.ok)throw new Error(JSON.parse(s));return Kt(s)}function oe(r,e){var n;return r instanceof Ie?r.body:(n=Dt.handleError({error:r,event:e}))!=null?n:{message:e.routeId!=null?"Internal Error":"Not Found"}}const zt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function de(r,e){for(const n of zt)Object.defineProperty(e,n,{get(){throw new Error(`The navigation shape changed - ${r}.${n} should now be ${r}.url.${n}`)},enumerable:!1});return e}function he(){return()=>{}}async function Zt({env:r,hydrate:e,paths:n,target:o,trailing_slash:s}){st(n);const c=Mt({target:o,base:n.base,trailing_slash:s});it({client:c}),e?await c._hydrate(e):c.goto(location.href,{replaceState:!0}),c._start_router()}export{Zt as start};