import{a as v,g as p,j as y,k as b,d as h,u as d,v as H,b as V,o as q,w as m,y as A,r as C,O as S,h as j,m as w,C as O,P as B,Q as M,R as P}from"./scheduler.BGjPv-1J.js";import{S as Q,i as R,t as g,g as z,c as F,a as k}from"./index.DGGgQIon.js";import{e as D}from"./Loader.DbTsSYa5.js";function E(r,a,s){const u=r.slice();return u[8]=a[s],u}function I(r){let a,s,u,_=`${r[0]}s`,f;const n=r[7].default,t=S(n,r,r[6],null);return{c(){a=p("div"),t&&t.c(),s=j(),this.h()},l(o){a=y(o,"DIV",{class:!0,title:!0});var l=b(a);t&&t.l(l),s=w(l),l.forEach(h),this.h()},h(){d(a,"class","text svelte-1frm6gb"),d(a,"title",u=r[8]),O(a,"animation-duration",_)},m(o,l){V(o,a,l),t&&t.m(a,null),q(a,s),f=!0},p(o,l){t&&t.p&&(!f||l&64)&&B(t,n,o,o[6],f?P(n,o[6],l,null):M(o[6]),null),(!f||l&2&&u!==(u=o[8]))&&d(a,"title",u),l&1&&_!==(_=`${o[0]}s`)&&O(a,"animation-duration",_)},i(o){f||(g(t,o),f=!0)},o(o){k(t,o),f=!1},d(o){o&&h(a),t&&t.d(o)}}}function G(r){let a,s,u,_,f,n=D(Array(r[1])),t=[];for(let l=0;l<n.length;l+=1)t[l]=I(E(r,n,l));const o=l=>k(t[l],1,1,()=>{t[l]=null});return{c(){a=p("div"),s=p("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){a=y(l,"DIV",{role:!0});var i=b(a);s=y(i,"DIV",{class:!0});var e=b(s);for(let c=0;c<t.length;c+=1)t[c].l(e);e.forEach(h),i.forEach(h),this.h()},h(){d(s,"class","content svelte-1frm6gb"),H(s,"paused",r[2]||r[3]&&r[4]),d(a,"role","none")},m(l,i){V(l,a,i),q(a,s);for(let e=0;e<t.length;e+=1)t[e]&&t[e].m(s,null);u=!0,_||(f=[m(a,"pointerover",r[5]),m(a,"pointerout",r[5]),m(a,"focus",r[5]),m(a,"blur",r[5])],_=!0)},p(l,[i]){if(i&67){n=D(Array(l[1]));let e;for(e=0;e<n.length;e+=1){const c=E(l,n,e);t[e]?(t[e].p(c,i),g(t[e],1)):(t[e]=I(c),t[e].c(),g(t[e],1),t[e].m(s,null))}for(z(),e=n.length;e<t.length;e+=1)o(e);F()}(!u||i&28)&&H(s,"paused",l[2]||l[3]&&l[4])},i(l){if(!u){for(let i=0;i<n.length;i+=1)g(t[i]);u=!0}},o(l){t=t.filter(Boolean);for(let i=0;i<t.length;i+=1)k(t[i]);u=!1},d(l){l&&h(a),A(t,l),_=!1,C(f)}}}function J(r,a,s){let{$$slots:u={},$$scope:_}=a,{duration:f=15}=a,{repeat:n=2}=a,{paused:t=!1}=a,{pauseOnHover:o=!1}=a,l=!1;function i(e){(e==null?void 0:e.type)==="mouseover"||(e==null?void 0:e.type)==="focus"?s(4,l=!0):((e==null?void 0:e.type)==="mouseout"||(e==null?void 0:e.type)==="blur")&&s(4,l=!1)}return r.$$set=e=>{"duration"in e&&s(0,f=e.duration),"repeat"in e&&s(1,n=e.repeat),"paused"in e&&s(2,t=e.paused),"pauseOnHover"in e&&s(3,o=e.pauseOnHover),"$$scope"in e&&s(6,_=e.$$scope)},[f,n,t,o,l,i,_,u]}class T extends Q{constructor(a){super(),R(this,a,J,G,v,{duration:0,repeat:1,paused:2,pauseOnHover:3})}}export{T as default};