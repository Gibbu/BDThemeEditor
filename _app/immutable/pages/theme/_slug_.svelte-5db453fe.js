import{S as x,i as L,s as V,l as v,a as k,m as h,n as g,c as z,h as p,a5 as T,p as d,b as S,H as f,E as H,$ as y,a2 as A,a0 as b,Y as q,w as R,ab as G,x as I,y as X,f as B,t as O,B as P,o as N}from"../../chunks/index-94935a05.js";import{d as U,a as j,b as F,f as J,t as Y}from"../../chunks/index-c053f28b.js";import{l as _,p as D,T as C,i as w}from"../../chunks/stores-a7dcf35a.js";import"../../chunks/Addons.svelte_svelte_type_style_lang-d9dd705f.js";/* empty css                                                        */import"../../chunks/preload-helper-c28b9807.js";import"../../chunks/index-6085c32c.js";import"../../chunks/_commonjsHelpers-e864563f.js";function M(a){let t,i;return{c(){t=v("div"),i=v("div"),this.h()},l(e){t=h(e,"DIV",{class:!0});var o=g(t);i=h(o,"DIV",{class:!0}),g(i).forEach(p),o.forEach(p),this.h()},h(){d(i,"class","spinner svelte-1svewuq"),d(t,"class","loader svelte-1svewuq")},m(e,o){S(e,t,o),f(t,i)},d(e){e&&p(t)}}}function $(a){let t,i,e,o,s=!a[2]&&M();return{c(){t=v("div"),s&&s.c(),i=k(),e=v("iframe"),this.h()},l(l){t=h(l,"DIV",{class:!0});var n=g(t);s&&s.l(n),i=z(n),e=h(n,"IFRAME",{src:!0,title:!0,frameborder:!0,class:!0}),g(e).forEach(p),n.forEach(p),this.h()},h(){T(e.src,o="https://gibbu.github.io/ThemePreview?file="+a[0].join("|"))||d(e,"src",o),d(e,"title",""),d(e,"frameborder","0"),d(e,"class","svelte-1svewuq"),d(t,"class","preview svelte-1svewuq")},m(l,n){S(l,t,n),s&&s.m(t,null),f(t,i),f(t,e),a[3](e)},p(l,[n]){l[2]?s&&(s.d(1),s=null):s||(s=M(),s.c(),s.m(t,i)),n&1&&!T(e.src,o="https://gibbu.github.io/ThemePreview?file="+l[0].join("|"))&&d(e,"src",o)},i:H,o:H,d(l){l&&p(t),s&&s.d(),a[3](null)}}}function K(a,t,i){let e,o;y(a,_,r=>i(2,e=r)),y(a,D,r=>i(4,o=r));let{urls:s=[]}=t,l;A(()=>b(_,e=!1,e));function n(r){q[r?"unshift":"push"](()=>{l=r,i(1,l)})}return a.$$set=r=>{"urls"in r&&i(0,s=r.urls)},a.$$.update=()=>{a.$$.dirty&2&&l&&(b(_,e=!0,e),b(D,o=l,o))},[s,l,e,n]}class Q extends x{constructor(t){super(),L(this,t,K,$,V,{urls:0})}}const W={name:"Horizontal Server List",description:"Moves the server list from the left to the top of Discord.",developer:U,imports:["https://discordstyles.github.io/HorizontalServerList/dist/HorizontalServerList.css"],previewUrl:["https://discordstyles.github.io/HorizontalServerList/HorizontalServerList.theme.css"],group:"serverlist",selector:"hsl",use:!1,variables:[{type:"number",details:{addon:!0,variable:"HSL-server-icon-size",value:45,unit:"px",title:"Server icon size"}},{type:"number",details:{addon:!0,variable:"HSL-server-spacing",value:10,unit:"px",title:"Server icon spacing"}}]},Z={name:"ServerColumns",description:"Changes the Server List to a gridlike container to allow servers to be displayed in columns.",developer:j,imports:["https://mwittrien.github.io/BetterDiscordAddons/Themes/ServerColumns/ServerColumns.css"],previewUrl:["https://mwittrien.github.io/BetterDiscordAddons/Themes/ServerColumns/ServerColumns.theme.css"],group:"serverlist",selector:"columns",use:!1,variables:[{type:"number",details:{variable:"columns",value:3,min:1,title:"Number of columns",addon:!0}},{type:"number",details:{variable:"guildgap",value:3,min:0,title:"Server icon spacing",addon:!0}},{type:"select",details:{addon:!0,variable:"aligndms",value:"0",customValue:!1,options:[{label:"True",value:"0"},{label:"False",value:"1"}],title:"Align DMs"}}]},ee={name:"RadialStatus",description:"Changes the status icons to wrap around the avatar.",developer:U,imports:["https://discordstyles.github.io/RadialStatus/dist/RadialStatus.css"],previewUrl:["https://discordstyles.github.io/RadialStatus/RadialStatus.theme.css"],group:"avatar",selector:"rs",use:!1,variables:[{type:"slider",details:{variable:"rs-small-spacing",value:2,unit:"px",max:10,step:1,title:"Small avatar spacing",hint:"Chat, members, dms",addon:!0}},{type:"slider",details:{variable:"rs-medium-spacing",value:2,unit:"px",max:10,step:1,title:"Medium avatar spacing",hint:"User popout",addon:!0}},{type:"slider",details:{variable:"rs-large-spacing",value:2,unit:"px",max:10,step:1,title:"Large avatar spacing",hint:"User profiles",addon:!0}},{type:"slider",details:{variable:"rs-small-width",value:2,unit:"px",max:5,step:.5,title:"Small width",hint:"Thickness of the status border for members list/dms",addon:!0}},{type:"slider",details:{variable:"rs-medium-width",value:2,unit:"px",max:5,step:.5,title:"Medium width",hint:"Thickness of the status border for User popout",addon:!0}},{type:"slider",details:{variable:"rs-large-width",value:2,unit:"px",max:5,step:.5,title:"Large width",hint:"Thickness of the status border for User profile",addon:!0}},{type:"slider",details:{variable:"rs-avatar-shape",value:50,unit:"%",max:50,step:.5,title:"Avatar shape",hint:"0% = Square | 50% = Circle",addon:!0}},{type:"colour",details:{variable:"rs-online-color",value:"#43b581",type:"HEX",title:"Online status colour",addon:!0}},{type:"colour",details:{variable:"rs-idle-color",value:"#faa61a",type:"HEX",title:"Idle status colour",addon:!0}},{type:"colour",details:{variable:"rs-dnd-color",value:"#f04747",type:"HEX",title:"Do not disturb status colour",addon:!0}},{type:"colour",details:{variable:"rs-offline-color",value:"#636b75",type:"HEX",title:"Offline status colour",addon:!0}},{type:"colour",details:{variable:"rs-streaming-color",value:"#643da7",type:"HEX",title:"Streaming status colour",addon:!0}},{type:"select",details:{variable:"rs-phone-visible",customValue:!1,options:[{label:"Visible",value:"block"},{label:"Hidden",value:"none"}],value:"block",title:"Phone indicator visibility"}}],hiddenVars:[{variable:"rs-invisible-color",value:"#747f8d"}]},te={name:"Discolored",description:"Colorize Discord's boring SVGs.",developer:F,imports:["https://nyri4.github.io/Discolored/main.css"],previewUrl:["https://nyri4.github.io/Discolored/main.css"],group:"svgs",selector:"discolored",use:!1},se=[W,Z,ee,te];function re(a){let t,i,e,o,s,l,n,r;return document.title=t=a[0].name+" - Theme Editor",n=new Q({props:{urls:a[0].previewUrls}}),{c(){i=v("meta"),e=v("meta"),o=v("meta"),s=v("meta"),l=k(),R(n.$$.fragment),this.h()},l(u){const c=G('[data-svelte="svelte-bp1s3i"]',document.head);i=h(c,"META",{property:!0,content:!0}),e=h(c,"META",{name:!0,content:!0}),o=h(c,"META",{property:!0,content:!0}),s=h(c,"META",{property:!0,content:!0}),c.forEach(p),l=z(u),I(n.$$.fragment,u),this.h()},h(){d(i,"property","og:title"),d(i,"content",a[0].name+" - Theme Editor"),d(e,"name","description"),d(e,"content","Customize "+a[0].name+" with a easy to use interface"),d(o,"property","og:image"),d(o,"content",a[0].thumbnail),d(s,"property","og:description"),d(s,"content","Customize "+a[0].name+" with a easy to use interface")},m(u,c){f(document.head,i),f(document.head,e),f(document.head,o),f(document.head,s),S(u,l,c),X(n,u,c),r=!0},p(u,[c]){(!r||c&1)&&t!==(t=u[0].name+" - Theme Editor")&&(document.title=t)},i(u){r||(B(n.$$.fragment,u),r=!0)},o(u){O(n.$$.fragment,u),r=!1},d(u){p(i),p(e),p(o),p(s),u&&p(l),P(n,u)}}}const me=({params:a})=>J.includes(a.slug)?{status:200,props:{slug:a.slug}}:{status:404,error:"That theme does not exist."};function ae(a,t,i){var E;let e,o;y(a,w,m=>i(2,e=m)),y(a,C,m=>i(3,o=m));let{slug:s}=t;const[l,n]=JSON.parse(JSON.stringify([Y,se])),r=l.find(m=>m.name.toLowerCase().replace(/ /g,"")==s),u=r.addons?n.filter(m=>r.addons.includes(m.selector)):[],c=((E=r.varGroups)==null?void 0:E.length)>0?r.varGroups:[];return b(C,o={name:r.name,meta:r.meta,developer:r.developer,imports:r.imports,fonts:r.fonts||[],variables:r.variables,hiddenVars:r.hiddenVars,addons:u,varGroups:[":root",...c]},o),N(()=>b(w,e=!0,e)),A(()=>b(w,e=!1,e)),a.$$set=m=>{"slug"in m&&i(1,s=m.slug)},[r,s]}class ve extends x{constructor(t){super(),L(this,t,ae,re,V,{slug:1})}}export{ve as default,me as load};
