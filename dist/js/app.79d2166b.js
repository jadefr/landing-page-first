(function(t){function e(e){for(var a,r,s=e[0],c=e[1],u=e[2],l=0,f=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"81ac23b1","chunk-0f2479b5":"91201a61","chunk-2d985f8b":"42c5e967"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-0f2479b5":1,"chunk-2d985f8b":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"31d6cfe0","chunk-0f2479b5":"68e28c1a","chunk-2d985f8b":"97df9d73"}[t]+".css",o=c.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return e()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],l=u.getAttribute("data-href");if(l===a||l===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[t],p.parentNode.removeChild(p),n(i)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",f.name="ChunkLoadError",f.type=a,f.request=r,n[1](f)}o[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"02b8":function(t,e,n){t.exports=n.p+"img/mauricio.65b1f041.jpeg"},2594:function(t,e,n){},"3d7e":function(t,e,n){t.exports=n.p+"img/rodrigo-lima-granato.f51a8002.png"},"48bd":function(t,e,n){t.exports=n.p+"img/credito.702f5b45.png"},"4ffd":function(t,e,n){t.exports=n.p+"img/logo.0360ff2e.png"},5699:function(t,e,n){t.exports=n.p+"img/assistencia.0b1d72d6.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[n("v-app",[n("v-app-bar",{attrs:{app:"",dense:"",dark:"",color:"#62050b",id:"navbar"}},[n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-app-bar-nav-icon",t._g({staticClass:"d-sm-none",attrs:{id:"nav-icon"}},a))]}}])},[n("v-list",t._l(t.items,(function(e,a){return n("v-list-item",{key:a,on:{click:function(n){return t.$vuetify.goTo(e.itemURL,t.linear,900,-6)}}},[n("v-list-item-title",[t._v(t._s(e.itemText))])],1)})),1)],1),n("v-spacer"),t._l(t.items,(function(t,e){return n("AppBarBtn",{key:e,attrs:{"item-u-r-l":t.itemURL,"item-text":t.itemText}})}))],2),n("router-link",{attrs:{to:"/"}}),n("router-view"),n("Footer")],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-view-container"},[a("v-card",{staticClass:"white--text text-center",attrs:{flat:"",tile:"",dark:""}},[a("div",{attrs:{id:"footer-container"}},[a("v-col",{staticClass:"pt-6 pb-4",attrs:{align:"center"}},[a("FooterInfo",{attrs:{title:t.mapaDoSite,items:t.mapaDoSiteArray}}),a("FooterInfo",{attrs:{title:t.contato,items:t.contatoArray,id:"contato"}}),a("div",{attrs:{id:"footer-logo"}},[a("v-lazy",{attrs:{options:{threshold:.5},"min-height":"240",transition:"fade-transition"},model:{value:t.isActive,callback:function(e){t.isActive=e},expression:"isActive"}},[a("a",{attrs:{href:"#"}},[a("v-img",{staticClass:"my-3",attrs:{id:"footer-logo-img",src:n("4ffd")}})],1)])],1)],1)],1),a("div",{staticClass:"footer-icons"},[a("v-card",t._l(t.icons,(function(e){return a("v-btn",{key:e,staticClass:"ma-4",attrs:{icon:""}},[a("v-icon",{attrs:{size:"24px"}},[t._v(t._s(e))])],1)})),1)],1),a("v-divider"),a("v-card",[a("v-card-text",{staticClass:"white--text mt-1 font-weight-light",attrs:{id:"credits"}},[a("p",[a("a",{attrs:{href:"https://jadeferreira.com.br/",target:"_blank"}},[t._v("Desenvolvido por Jade Ferreira")])])])],1)],1)],1)},s=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-info-container"},[n("v-row",{attrs:{justify:"center",tile:""}},[n("h3",{staticClass:"headline font-weight-regular"},[t._v(" "+t._s(t.title)+" ")])]),n("v-row",{attrs:{justify:"left",tile:""}},[t.isMapaDoSite?n("v-card-text",{staticClass:"subtitle-1 font-weight-light"},[t._l(t.items,(function(e){return n("p",{key:e,ref:"button",refInFor:!0,on:{click:function(n){return t.$vuetify.goTo(e.link,t.linear,900,-6)}}},[t._v(" "+t._s(e.text)+" ")])})),n("a",{staticStyle:{"text-decoration":"none",color:"white"},attrs:{href:"/politica-de-privacidade",target:"_blank"}},[n("p",[t._v("Política de Privacidade")])])],2):t._e(),t.isContato?n("v-card-text",{staticClass:"subtitle-1 font-weight-light"},t._l(t.items,(function(e){return n("p",{key:e,ref:"button",refInFor:!0,on:{click:function(n){return t.$vuetify.goTo(e.link,t.linear,900,-6)}}},[t._v(" "+t._s(e.text)+" ")])})),0):t._e()],1)],1)},u=[],l={name:"FooterInfo",props:{title:String,items:{link:String,text:String}},data:function(){return{isPrivacyPolicy:!1,isMapaDoSite:!1,isContato:!1}},created:function(){for(var t=0;t<this.$props.items.length;t++)"Política de Privacidade"===this.$props.items[t].text&&(this.isPrivacyPolicy=!0);"Mapa do Site"===this.$props.title&&(this.isMapaDoSite=!0),"Contato"===this.$props.title&&(this.isContato=!0)}},f=l,p=(n("ef1c"),n("2877")),d=n("6544"),m=n.n(d),v=n("99d9"),b=n("0fd9"),g=Object(p["a"])(f,c,u,!1,null,"2f0066f2",null),h=g.exports;m()(g,{VCardText:v["a"],VRow:b["a"]});var y={name:"Footer",components:{FooterInfo:h},data:function(){return{mapaDoSite:"Mapa do Site",contato:"Contato",icons:["fab fa-whatsapp","fab fa-facebook","fab fa-instagram","fab fa-linkedin","fab fa-youtube"],mapaDoSiteArray:[{text:"Sobre nós",link:"#sobre-nos"},{text:"Serviços",link:"#servicos"},{text:"Depoimentos",link:"#depoimentos"}],contatoArray:[{text:"lorem@ipsum.io",link:""},{text:"001110001101",link:""},{text:"Ipsam Ipsum Magnam",link:null}],isActive:!1}}},x=y,k=(n("9121"),n("8336")),_=n("b0af"),w=n("62ad"),C=n("ce7e"),S=n("132d"),j=n("adda"),T=n("b687"),A=Object(p["a"])(x,i,s,!1,null,"1ad29dc5",null),P=A.exports;m()(A,{VBtn:k["a"],VCard:_["a"],VCardText:v["a"],VCol:w["a"],VDivider:C["a"],VIcon:S["a"],VImg:j["a"],VLazy:T["a"]});var V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-bar-btn-container"},[n("v-btn",{ref:"button",staticClass:"mr-2 d-none d-sm-flex",attrs:{target:"_blank",text:""},on:{click:function(e){return t.$vuetify.goTo(t.itemURL,t.linear,900,-6)}}},[n("span",[t._v(t._s(t.itemText))])])],1)},L=[],O={name:"AppBarBtn",props:{itemURL:String,itemText:String}},I=O,B=(n("fcef"),Object(p["a"])(I,V,L,!1,null,"037e4a39",null)),D=B.exports;m()(B,{VBtn:k["a"]});var E={name:"App",components:{AppBarBtn:D,Footer:P},data:function(){return{items:[{itemURL:"#sobre-nos",itemText:"Sobre Nós"},{itemURL:"#servicos",itemText:"Serviços"},{itemURL:"#depoimentos",itemText:"Depoimentos"},{itemURL:"#contato",itemText:"Contato"}]}}},$=E,F=n("7496"),M=n("40dc"),R=n("5bc1"),U=n("8860"),N=n("da13"),z=n("5d23"),J=n("e449"),q=n("2fa4"),H=Object(p["a"])($,r,o,!1,null,null,null),K=H.exports;m()(H,{VApp:F["a"],VAppBar:M["a"],VAppBarNavIcon:R["a"],VList:U["a"],VListItem:N["a"],VListItemTitle:z["a"],VMenu:J["a"],VSpacer:q["a"]});n("d3b7");var G=n("8c4f");a["a"].use(G["a"]);var Q=[{path:"/",name:"LandingPage",component:function(){return n.e("chunk-0f2479b5").then(n.bind(null,"d115"))}},{path:"/politica-de-privacidade",name:"PrivacyPolicy",component:function(){return n.e("chunk-2d985f8b").then(n.bind(null,"729e"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],W=new G["a"]({mode:"history",base:"/",routes:Q}),X=W,Y=n("2f62"),Z=n("5699"),tt=n.n(Z),et=n("48bd"),nt=n.n(et),at=n("b8d5"),rt=n.n(at),ot=n("def7"),it=n.n(ot),st=n("6771"),ct=n.n(st),ut=n("58bd"),lt=n.n(ut),ft=n("3d7e"),pt=n.n(ft),dt=n("02b8"),mt=n.n(dt),vt={imgs:[tt.a,nt.a,rt.a,it.a,ct.a,lt.a,pt.a,mt.a]};a["a"].use(Y["a"]);var bt=new Y["a"].Store({state:vt,mutations:{},actions:{},modules:{}}),gt=n("f309");a["a"].use(gt["a"]);var ht=new gt["a"]({});a["a"].config.productionTip=!1,new a["a"]({router:X,store:bt,vuetify:ht,render:function(t){return t(K)}}).$mount("#app")},"58bd":function(t,e,n){t.exports=n.p+"img/jose-manuel-tiago.ac1faf71.jpg"},6771:function(t,e,n){t.exports=n.p+"img/carlos-joel.7313f91e.jpeg"},9121:function(t,e,n){"use strict";var a=n("2594"),r=n.n(a);r.a},a66a:function(t,e,n){},b8d5:function(t,e,n){t.exports=n.p+"img/pastejo.23ee7176.png"},def7:function(t,e,n){t.exports=n.p+"img/curso.dbe52350.png"},ef1c:function(t,e,n){"use strict";var a=n("fe51"),r=n.n(a);r.a},fcef:function(t,e,n){"use strict";var a=n("a66a"),r=n.n(a);r.a},fe51:function(t,e,n){}});
//# sourceMappingURL=app.79d2166b.js.map