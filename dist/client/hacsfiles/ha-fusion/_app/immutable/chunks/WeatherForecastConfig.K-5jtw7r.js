import{a as qe,e as Ce,b as d,d as c,c as x,A as Pe,g as T,t as N,h as R,j as I,k as C,l as H,m as A,u as P,v as K,o as w,w as ie,x as pe,p as U,i as he,r as Ee,E as je,f as ze,D as Se}from"./scheduler.BGjPv-1J.js";import{S as Ge,i as Je,t as Y,g as We,a as J,c as Me,b as de,d as be,m as ke,e as ve}from"./index.DGGgQIon.js";import{h as Ke,i as De,j as Qe,s as Xe,k as Ze,m as $e,l as xe,r as et,u as tt,b as lt}from"./Loader.DbTsSYa5.js";import{a as it}from"./SidebarItemConfig.Ca0HNv_7.js";import{S as Ve}from"./Select.Dq9-hAzu.js";import{C as st}from"./ConfigButtons.Cc1o6-ot.js";import{I as ot}from"./Index.CWVzh7Hi.js";import{R as ye}from"./2.dCG7GHcU.js";function Fe(t){let e,s;return e=new ot({props:{$$slots:{title:[ft],default:[nt]},$$scope:{ctx:t}}}),{c(){de(e.$$.fragment)},l(o){be(e.$$.fragment,o)},m(o,l){ke(e,o,l),s=!0},p(o,l){const a={};l[0]&509|l[1]&4&&(a.$$scope={dirty:l,ctx:o}),e.$set(a)},i(o){s||(Y(e.$$.fragment,o),s=!0)},o(o){J(e.$$.fragment,o),s=!1},d(o){ve(e,o)}}}function Le(t){var o;let e,s;return e=new Ve({props:{computeIcons:!0,defaultIcon:"mdi:weather-cloudy",options:t[5],placeholder:t[7]("entity"),value:(o=t[0])==null?void 0:o.entity_id}}),e.$on("change",t[19]),{c(){de(e.$$.fragment)},l(l){be(e.$$.fragment,l)},m(l,a){ke(e,l,a),s=!0},p(l,a){var n;const _={};a[0]&32&&(_.options=l[5]),a[0]&128&&(_.placeholder=l[7]("entity")),a[0]&1&&(_.value=(n=l[0])==null?void 0:n.entity_id),e.$set(_)},i(l){s||(Y(e.$$.fragment,l),s=!0)},o(l){J(e.$$.fragment,l),s=!1},d(l){ve(e,l)}}}function at(t){var o;let e,s;return e=new Ve({props:{options:t[9],placeholder:t[7]("icon"),value:((o=t[0])==null?void 0:o.icon_pack)||"meteocons"}}),e.$on("change",t[20]),{c(){de(e.$$.fragment)},l(l){be(e.$$.fragment,l)},m(l,a){ke(e,l,a),s=!0},p(l,a){var n;const _={};a[0]&128&&(_.placeholder=l[7]("icon")),a[0]&1&&(_.value=((n=l[0])==null?void 0:n.icon_pack)||"meteocons"),e.$set(_)},i(l){s||(Y(e.$$.fragment,l),s=!0)},o(l){J(e.$$.fragment,l),s=!1},d(l){ve(e,l)}}}function Ne(t){let e,s,o,l,a;return{c(){e=T("input"),this.h()},l(_){e=I(_,"INPUT",{type:!0,class:!0,min:!0,max:!0,autocomplete:!0}),this.h()},h(){P(e,"type","number"),P(e,"class","input"),P(e,"min",s=t[4].min),P(e,"max",o=t[4].max),P(e,"autocomplete","off")},m(_,n){d(_,e,n),Se(e,t[2]),t[22](e),l||(a=[ie(e,"input",t[21]),ie(e,"change",t[10])],l=!0)},p(_,n){n[0]&16&&s!==(s=_[4].min)&&P(e,"min",s),n[0]&16&&o!==(o=_[4].max)&&P(e,"max",o),n[0]&4&&je(e.value)!==_[2]&&Se(e,_[2])},d(_){_&&c(e),t[22](null),l=!1,Ee(a)}}}function He(t){var B,S,F;let e,s=t[7]("forecast_type")+"",o,l,a,_,n,f=((B=t[6])==null?void 0:B.FORECAST_DAILY)&&Ue(t),m=((S=t[6])==null?void 0:S.FORECAST_HOURLY)&&Ye(t),h=((F=t[6])==null?void 0:F.FORECAST_TWICE_DAILY)&&Be(t);return{c(){e=T("h2"),o=N(s),l=R(),a=T("div"),f&&f.c(),_=R(),m&&m.c(),n=R(),h&&h.c(),this.h()},l(p){e=I(p,"H2",{});var v=C(e);o=H(v,s),v.forEach(c),l=A(p),a=I(p,"DIV",{class:!0});var E=C(a);f&&f.l(E),_=A(E),m&&m.l(E),n=A(E),h&&h.l(E),E.forEach(c),this.h()},h(){P(a,"class","button-container")},m(p,v){d(p,e,v),w(e,o),d(p,l,v),d(p,a,v),f&&f.m(a,null),w(a,_),m&&m.m(a,null),w(a,n),h&&h.m(a,null)},p(p,v){var E,z,b;v[0]&128&&s!==(s=p[7]("forecast_type")+"")&&U(o,s),(E=p[6])!=null&&E.FORECAST_DAILY?f?f.p(p,v):(f=Ue(p),f.c(),f.m(a,_)):f&&(f.d(1),f=null),(z=p[6])!=null&&z.FORECAST_HOURLY?m?m.p(p,v):(m=Ye(p),m.c(),m.m(a,n)):m&&(m.d(1),m=null),(b=p[6])!=null&&b.FORECAST_TWICE_DAILY?h?h.p(p,v):(h=Be(p),h.c(),h.m(a,null)):h&&(h.d(1),h=null)},d(p){p&&(c(e),c(l),c(a)),f&&f.d(),m&&m.d(),h&&h.d()}}}function Ue(t){let e,s=t[7]("forecast_daily")+"",o,l,a,_;return{c(){e=T("button"),o=N(s),this.h()},l(n){e=I(n,"BUTTON",{});var f=C(e);o=H(f,s),f.forEach(c),this.h()},h(){var n,f;K(e,"selected",((n=t[0])==null?void 0:n.forecast_type)==="daily"||!((f=t[0])!=null&&f.forecast_type))},m(n,f){d(n,e,f),w(e,o),a||(_=[ie(e,"click",t[23]),pe(l=ye.call(null,e,t[8]))],a=!0)},p(n,f){var m,h;f[0]&128&&s!==(s=n[7]("forecast_daily")+"")&&U(o,s),l&&he(l.update)&&f[0]&256&&l.update.call(null,n[8]),f[0]&1&&K(e,"selected",((m=n[0])==null?void 0:m.forecast_type)==="daily"||!((h=n[0])!=null&&h.forecast_type))},d(n){n&&c(e),a=!1,Ee(_)}}}function Ye(t){let e,s=t[7]("forecast_hourly")+"",o,l,a,_;return{c(){e=T("button"),o=N(s),this.h()},l(n){e=I(n,"BUTTON",{});var f=C(e);o=H(f,s),f.forEach(c),this.h()},h(){var n;K(e,"selected",((n=t[0])==null?void 0:n.forecast_type)==="hourly")},m(n,f){d(n,e,f),w(e,o),a||(_=[ie(e,"click",t[24]),pe(l=ye.call(null,e,t[8]))],a=!0)},p(n,f){var m;f[0]&128&&s!==(s=n[7]("forecast_hourly")+"")&&U(o,s),l&&he(l.update)&&f[0]&256&&l.update.call(null,n[8]),f[0]&1&&K(e,"selected",((m=n[0])==null?void 0:m.forecast_type)==="hourly")},d(n){n&&c(e),a=!1,Ee(_)}}}function Be(t){let e,s=t[7]("forecast_twice_daily")+"",o,l,a,_;return{c(){e=T("button"),o=N(s),this.h()},l(n){e=I(n,"BUTTON",{});var f=C(e);o=H(f,s),f.forEach(c),this.h()},h(){var n;K(e,"selected",((n=t[0])==null?void 0:n.forecast_type)==="twice_daily")},m(n,f){d(n,e,f),w(e,o),a||(_=[ie(e,"click",t[25]),pe(l=ye.call(null,e,t[8]))],a=!0)},p(n,f){var m;f[0]&128&&s!==(s=n[7]("forecast_twice_daily")+"")&&U(o,s),l&&he(l.update)&&f[0]&256&&l.update.call(null,n[8]),f[0]&1&&K(e,"selected",((m=n[0])==null?void 0:m.forecast_type)==="twice_daily")},d(n){n&&c(e),a=!1,Ee(_)}}}function nt(t){let e,s=t[7]("preview")+"",o,l,a,_,n,f,m=t[7]("entity")+"",h,B,S,F,p=t[7]("icon")+"",v,E,z,b,G=t[7]("days_to_show")+"",Q,j,X,fe=Object.keys(t[6]).filter(t[18]).length>1,Z,y,ee=t[7]("mobile")+"",se,oe,W,M,te=t[7]("visible")+"",ae,ne,ue,V,r=t[7]("hidden")+"",L,le,we,$,D,ge,Te;_=new it({props:{sel:t[0]}});let k=t[5]&&Le(t),q=t[9]&&at(t),O=t[5]&&Ne(t),g=fe&&He(t);return $=new st({props:{sel:t[0]}}),{c(){e=T("h2"),o=N(s),l=R(),a=T("div"),de(_.$$.fragment),n=R(),f=T("h2"),h=N(m),B=R(),k&&k.c(),S=R(),F=T("h2"),v=N(p),E=R(),q&&q.c(),z=R(),b=T("h2"),Q=N(G),j=R(),O&&O.c(),X=R(),g&&g.c(),Z=R(),y=T("h2"),se=N(ee),oe=R(),W=T("div"),M=T("button"),ae=N(te),ue=R(),V=T("button"),L=N(r),we=R(),de($.$$.fragment),this.h()},l(i){e=I(i,"H2",{});var u=C(e);o=H(u,s),u.forEach(c),l=A(i),a=I(i,"DIV",{class:!0});var re=C(a);be(_.$$.fragment,re),re.forEach(c),n=A(i),f=I(i,"H2",{});var _e=C(f);h=H(_e,m),_e.forEach(c),B=A(i),k&&k.l(i),S=A(i),F=I(i,"H2",{});var ce=C(F);v=H(ce,p),ce.forEach(c),E=A(i),q&&q.l(i),z=A(i),b=I(i,"H2",{});var me=C(b);Q=H(me,G),me.forEach(c),j=A(i),O&&O.l(i),X=A(i),g&&g.l(i),Z=A(i),y=I(i,"H2",{});var Ie=C(y);se=H(Ie,ee),Ie.forEach(c),oe=A(i),W=I(i,"DIV",{class:!0});var Oe=C(W);M=I(Oe,"BUTTON",{});var Re=C(M);ae=H(Re,te),Re.forEach(c),ue=A(Oe),V=I(Oe,"BUTTON",{});var Ae=C(V);L=H(Ae,r),Ae.forEach(c),Oe.forEach(c),we=A(i),be($.$$.fragment,i),this.h()},h(){var i,u;P(a,"class","preview"),K(M,"selected",((i=t[0])==null?void 0:i.hide_mobile)!==!0),K(V,"selected",((u=t[0])==null?void 0:u.hide_mobile)===!0),P(W,"class","button-container")},m(i,u){d(i,e,u),w(e,o),d(i,l,u),d(i,a,u),ke(_,a,null),d(i,n,u),d(i,f,u),w(f,h),d(i,B,u),k&&k.m(i,u),d(i,S,u),d(i,F,u),w(F,v),d(i,E,u),q&&q.m(i,u),d(i,z,u),d(i,b,u),w(b,Q),d(i,j,u),O&&O.m(i,u),d(i,X,u),g&&g.m(i,u),d(i,Z,u),d(i,y,u),w(y,se),d(i,oe,u),d(i,W,u),w(W,M),w(M,ae),w(W,ue),w(W,V),w(V,L),d(i,we,u),ke($,i,u),D=!0,ge||(Te=[ie(M,"click",t[26]),pe(ne=ye.call(null,M,t[8])),ie(V,"click",t[27]),pe(le=ye.call(null,V,t[8]))],ge=!0)},p(i,u){var ce,me;(!D||u[0]&128)&&s!==(s=i[7]("preview")+"")&&U(o,s);const re={};u[0]&1&&(re.sel=i[0]),_.$set(re),(!D||u[0]&128)&&m!==(m=i[7]("entity")+"")&&U(h,m),i[5]?k?(k.p(i,u),u[0]&32&&Y(k,1)):(k=Le(i),k.c(),Y(k,1),k.m(S.parentNode,S)):k&&(We(),J(k,1,1,()=>{k=null}),Me()),(!D||u[0]&128)&&p!==(p=i[7]("icon")+"")&&U(v,p),i[9]&&q.p(i,u),(!D||u[0]&128)&&G!==(G=i[7]("days_to_show")+"")&&U(Q,G),i[5]?O?O.p(i,u):(O=Ne(i),O.c(),O.m(X.parentNode,X)):O&&(O.d(1),O=null),u[0]&64&&(fe=Object.keys(i[6]).filter(i[18]).length>1),fe?g?g.p(i,u):(g=He(i),g.c(),g.m(Z.parentNode,Z)):g&&(g.d(1),g=null),(!D||u[0]&128)&&ee!==(ee=i[7]("mobile")+"")&&U(se,ee),(!D||u[0]&128)&&te!==(te=i[7]("visible")+"")&&U(ae,te),ne&&he(ne.update)&&u[0]&256&&ne.update.call(null,i[8]),(!D||u[0]&1)&&K(M,"selected",((ce=i[0])==null?void 0:ce.hide_mobile)!==!0),(!D||u[0]&128)&&r!==(r=i[7]("hidden")+"")&&U(L,r),le&&he(le.update)&&u[0]&256&&le.update.call(null,i[8]),(!D||u[0]&1)&&K(V,"selected",((me=i[0])==null?void 0:me.hide_mobile)===!0);const _e={};u[0]&1&&(_e.sel=i[0]),$.$set(_e)},i(i){D||(Y(_.$$.fragment,i),Y(k),Y(q),Y($.$$.fragment,i),D=!0)},o(i){J(_.$$.fragment,i),J(k),J(q),J($.$$.fragment,i),D=!1},d(i){i&&(c(e),c(l),c(a),c(n),c(f),c(B),c(S),c(F),c(E),c(z),c(b),c(j),c(X),c(Z),c(y),c(oe),c(W),c(we)),ve(_),k&&k.d(i),q&&q.d(i),O&&O.d(i),g&&g.d(i),ve($,i),ge=!1,Ee(Te)}}}function ft(t){let e,s=t[7]("weather_forecast")+"",o;return{c(){e=T("h1"),o=N(s),this.h()},l(l){e=I(l,"H1",{slot:!0});var a=C(e);o=H(a,s),a.forEach(c),this.h()},h(){P(e,"slot","title")},m(l,a){d(l,e,a),w(e,o)},p(l,a){a[0]&128&&s!==(s=l[7]("weather_forecast")+"")&&U(o,s)},d(l){l&&c(e)}}}function ut(t){let e,s,o=t[1]&&Fe(t);return{c(){o&&o.c(),e=Ce()},l(l){o&&o.l(l),e=Ce()},m(l,a){o&&o.m(l,a),d(l,e,a),s=!0},p(l,a){l[1]?o?(o.p(l,a),a[0]&2&&Y(o,1)):(o=Fe(l),o.c(),Y(o,1),o.m(e.parentNode,e)):o&&(We(),J(o,1,1,()=>{o=null}),Me())},i(l){s||(Y(o),s=!0)},o(l){J(o),s=!1},d(l){l&&c(e),o&&o.d(l)}}}function rt(t,e,s){let o,l,a,_,n,f,m,h,B,S,F,p,v,E;x(t,Ke,r=>s(28,m=r)),x(t,De,r=>s(29,h=r)),x(t,Qe,r=>s(16,B=r)),x(t,Xe,r=>s(17,S=r)),x(t,Ze,r=>s(30,F=r)),x(t,$e,r=>s(31,p=r)),x(t,xe,r=>s(7,v=r)),x(t,et,r=>s(8,E=r));let{isOpen:z}=e,{sel:b}=e,{demo:G=void 0}=e;G&&(p.splice(F,1),y("entity_id",G));let Q=(b==null?void 0:b.days_to_show)??7,j;const X=[{id:"meteocons",label:"meteocons"},{id:"weathericons",label:"weather icons"},{id:"materialsymbolslight",label:"materialsymbolslight"}];function fe(r){return Math.min(Math.max(parseInt(r),f.min),f.max)}function Z(r){var le;const L=fe((le=r==null?void 0:r.target)==null?void 0:le.value);y("days_to_show",L),j&&s(3,j.value=String(L),j)}function y(r,L){s(0,b=tt(b,r,L)),De.set(h)}Pe(()=>m());const ee=r=>_[r],se=r=>{y("forecast_type"),y("entity_id",r)},oe=r=>y("icon_pack",r);function W(){Q=je(this.value),s(2,Q)}function M(r){ze[r?"unshift":"push"](()=>{j=r,s(3,j)})}const te=()=>y("forecast_type","daily"),ae=()=>y("forecast_type","hourly"),ne=()=>y("forecast_type","twice_daily"),ue=()=>y("hide_mobile"),V=()=>y("hide_mobile",!0);return t.$$set=r=>{"isOpen"in r&&s(1,z=r.isOpen),"sel"in r&&s(0,b=r.sel),"demo"in r&&s(12,G=r.demo)},t.$$.update=()=>{var r,L;t.$$.dirty[0]&131073&&s(13,o=S[b==null?void 0:b.entity_id]),t.$$.dirty[0]&8192&&s(15,l=o==null?void 0:o.attributes),t.$$.dirty[0]&32768&&s(14,a=l==null?void 0:l.supported_features),t.$$.dirty[0]&16384&&s(6,_=lt(a,{FORECAST_DAILY:1,FORECAST_HOURLY:2,FORECAST_TWICE_DAILY:4})),t.$$.dirty[0]&65536&&s(5,n=B("weather")),t.$$.dirty[0]&8192&&s(4,f={min:1,max:Math.min(((L=(r=o==null?void 0:o.attributes)==null?void 0:r.forecast)==null?void 0:L.length)??7,7)})},[b,z,Q,j,f,n,_,v,E,X,Z,y,G,o,a,l,B,S,ee,se,oe,W,M,te,ae,ne,ue,V]}class vt extends Ge{constructor(e){super(),Je(this,e,rt,ut,qe,{isOpen:1,sel:0,demo:12},null,[-1,-1])}}export{vt as default};