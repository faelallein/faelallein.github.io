(function(t){function e(e){for(var s,c,o=e[0],r=e[1],l=e[2],d=0,g=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&g.push(i[c][0]),i[c]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);u&&u(e);while(g.length)g.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],s=!0,o=1;o<n.length;o++){var r=n[o];0!==i[r]&&(s=!1)}s&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var s={},i={app:0},a=[];function c(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=s,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(n,s,function(e){return t[e]}.bind(null,s));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=r;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"01e3":function(t,e,n){t.exports=n.p+"img/arrow-right-icon.9d295710.svg"},"06d4":function(t,e,n){t.exports=n.p+"img/dote-logo-black-icon.def13b0e.svg"},"09bb":function(t,e,n){t.exports=n.p+"img/instagram-black-icon.74693461.svg"},"0b86":function(t,e,n){"use strict";n("48e2")},"0d35":function(t,e,n){"use strict";n("8b1f")},"127e":function(t,e,n){t.exports=n.p+"img/twitter-white-icon.dd7fceaf.svg"},"144c":function(t,e,n){t.exports=n.p+"img/twitter-black-icon.d0da6704.svg"},"15b9":function(t,e,n){"use strict";n("4135")},2178:function(t,e,n){},3326:function(t,e,n){t.exports=n.p+"img/linkedln-white-icon.0b48bfc6.svg"},"3a81":function(t,e,n){t.exports=n.p+"img/facebook-white-icon.e55096df.svg"},4135:function(t,e,n){},"48e2":function(t,e,n){},4982:function(t,e,n){t.exports=n.p+"img/banner-bg.839df8f8.png"},"51a0":function(t,e,n){t.exports=n.p+"img/square-green-icon.a69eca96.svg"},"56d7":function(t,e,n){"use strict";n.r(e);var s=n("2b0e"),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},a=[],c={},o=c,r=(n("6cd3"),n("2877")),l=Object(r["a"])(o,i,a,!1,null,null,null),u=l.exports,d=n("8c4f"),g=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("div",{staticClass:"banner w-100",style:`background-image: url(${n("4982")})`},[e("Sidebar",{on:{changeItsGreen:t.changeItsGreen}}),e("Banner")],1),e("About"),e("YourServices"),e("Partners"),e("Info"),e("Blog"),e("Footer",{on:{changeItsGreen:t.changeItsGreen}}),e("Contact",{attrs:{itsGreen:t.itsGreen}})],1)},f=[],b=function(){var t=this,e=t._self._c;return e("div",{staticClass:"banner-content w-100 row m-0"},[t._m(0),e("div",{staticClass:"d-flex m-0 px-0 banner-btns-content justify-content-between align-items-center"},[e("div",{staticClass:"d-flex socials-btns fade-in-down-to-up"},[e("DynamicIcon",{attrs:{icon:"facebook-white"}}),e("DynamicIcon",{attrs:{icon:"twitter-white"}}),e("DynamicIcon",{attrs:{icon:"linkedln-white"}}),e("DynamicIcon",{attrs:{icon:"instagram-white"}})],1),e("DynamicIcon",{attrs:{icon:"square-down-arrow"}}),e("b-button",{staticClass:"btn-base primary-btn",on:{click:t.abrirNovaAba}},[t._v("Fale Conosco "),e("DynamicIcon",{attrs:{icon:"arrow-right"}})],1)],1)])},p=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"row m-0 px-0 banner-text-content"},[e("p",{staticClass:"col-12 m-0 p-0 banner-text text-center fade-in-left-to-right"},[t._v("A digital media agency")]),e("p",{staticClass:"col-12 m-0 p-0 banner-text highlight text-center fade-in-left-to-right"},[t._v("Data, websites and apps "),e("br"),t._v(" that make you money")])])}],m=function(){var t=this,e=t._self._c;return e("img",{class:(t.classString?t.classString:"")+" icons-svg ",attrs:{src:n("feed")(`./${t.icon}-icon.svg`)},on:{click:function(e){return t.$emit("click")}}})},v=[],h={props:{icon:String,classString:String}},w=h,x=Object(r["a"])(w,m,v,!1,null,null,null),y=x.exports,_={components:{DynamicIcon:y},methods:{abrirNovaAba(){window.open("https://www.sua_pagina.com","_blank")}}},C=_,k=(n("8870"),n("888b"),Object(r["a"])(C,b,p,!1,null,"075ca86a",null)),I=k.exports,D=function(){var t=this,e=t._self._c;return e("div",{staticClass:"sidebar d-flex justify-content-between align-items-center"},[e("DynamicIcon",{attrs:{icon:"dote-logo-white"}}),t._m(0),e("div",{staticClass:"hamburguer"},[e("label",{attrs:{for:"checkboxSidebar"}},[e("DynamicIcon",{attrs:{icon:"hamburguer"}})],1),e("input",{attrs:{type:"checkbox",name:"checkboxSidebar",id:"checkboxSidebar"},domProps:{checked:t.showMenu},on:{change:t.changeCheckbox}}),e("div",{staticClass:"hamburguer-menu justify-content-end"},[e("div",{staticClass:"menu row m-0 px-4"},[e("div",{staticClass:"header p-4 d-flex justify-content-between align-items-center"},[e("DynamicIcon",{attrs:{icon:"dote-logo-black"}}),e("label",{attrs:{for:"checkboxSidebar"}},[e("DynamicIcon",{attrs:{icon:"x"}})],1)],1),e("div",{staticClass:"links d-flex p-4"},[e("a",{on:{click:t.close}},[t._v("Clientes")]),e("a",{attrs:{href:"#your-services"},on:{click:t.close}},[t._v("Serviços")]),e("a",{attrs:{href:"#blog"},on:{click:t.close}},[t._v("Blog")]),e("a",{attrs:{href:"#your-services"},on:{click:t.close}},[t._v("Contato")])]),e("div",{staticClass:"socials-btns w-100 p-4 d-flex justify-content-between"},[e("DynamicIcon",{attrs:{icon:"facebook-black"}}),e("DynamicIcon",{attrs:{icon:"twitter-black"}}),e("DynamicIcon",{attrs:{icon:"linkedln-black"}}),e("DynamicIcon",{attrs:{icon:"instagram-black"}})],1)])])])],1)},j=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"items-menu w-50 d-flex justify-content-between"},[e("a",[t._v("Clientes")]),e("a",{attrs:{href:"#your-services"}},[t._v("Serviços")]),e("a",{attrs:{href:"#blog"}},[t._v("Blog")]),e("a",{attrs:{href:"#your-services"}},[t._v("Contato")])])}],O={components:{DynamicIcon:y},data(){return{showMenu:!1}},methods:{close(){document.querySelector("#checkboxSidebar").checked=!1},changeCheckbox(t){this.$emit("changeItsGreen",t.target.checked)}}},S=O,T=(n("0b86"),Object(r["a"])(S,D,j,!1,null,"2838ccde",null)),P=T.exports,z=function(){var t=this,e=t._self._c;return e("div",{staticClass:"about-content w-100 row m-0"},[e("intersect",{on:{enter:t.onIntersect}},[e("div",{staticClass:"row m-0 px-0 about-text-content"},[e("div",{staticClass:"col-12 d-flex justify-content-center m-0 p-0 py-4"},[e("p",{staticClass:"about-text title font-space-odyssey",class:{"fade-in-left-to-right":t.intersecting}},[t._v(" Quem Somos ")])]),e("p",{staticClass:"col-12 m-0 p-0 about-text highlight text-center",class:{"fade-in-left-to-right":t.intersecting}},[t._v(" Uma agência que une dados e performance "),e("br"),t._v("para entregar resultados extraordinários. ")]),e("p",{staticClass:"col-12 m-0 mt-4 p-0 about-text subtitle text-center",class:{"fade-in-left-to-right":t.intersecting}},[t._v(" Fazemos o que for necessário para entregar o que prometemos."),e("br"),t._v(" Estamos na Crista do Digital."),e("br"),e("b",[t._v("All In One.")])])])])],1)},M=[],E=n("760e"),G={components:{Intersect:E["a"]},data(){return{intersecting:!1}},methods:{onIntersect(t){t[0].isIntersecting&&(this.intersecting=!0)}}},A=G,L=(n("6e2e"),Object(r["a"])(A,z,M,!1,null,"0b333bbe",null)),B=L.exports,W=function(){var t=this,e=t._self._c;return e("div",{staticClass:"your-services-content w-100 row m-0",attrs:{id:"your-services"}},[e("intersect",{on:{enter:t.onIntersect}},[e("div",{staticClass:"row m-0 px-0 your-services-text-content"},[e("div",{staticClass:"col-12 d-flex m-0 p-0 your-services-text-div-title"},[e("p",{staticClass:"your-services-text title font-space-odyssey",class:{"fade-in-left-to-right":t.intersecting}},[t._v("Nossos Serviços")])]),e("p",{staticClass:"col-12 m-0 p-0 mt-3 your-services-text highlight",class:{"fade-in-left-to-right":t.intersecting}},[t._v(" 360º Digital Services that "),e("b",[e("i",[t._v("make you money.")])])]),e("div",{staticClass:"row m-0 mt-4 p-0 your-services-text subtitle"},t._l(t.list,(function(n,s){return e("div",{key:s,staticClass:"col-lg-12 col-xl-3 m-0 p-0 mb-4 d-flex align-items-center",class:{"fade-in-down-to-up":t.intersecting}},[e("DynamicIcon",{attrs:{icon:"square-green"}}),t._v(" "),e("p",{staticClass:"w-75 px-4 mb-0"},[t._v(t._s(n))])],1)})),0)])])],1)},q=[],R={components:{DynamicIcon:y,Intersect:E["a"]},data(){return{list:["Social Media","CRM","Web Development","App Development","Tráfego Pago","Business Intelligence","Web App Development","IA Chat Bot"],intersecting:!1}},methods:{onIntersect(t){t[0].isIntersecting&&(this.intersecting=!0)}}},U=R,$=(n("15b9"),Object(r["a"])(U,W,q,!1,null,"663fcb29",null)),F=$.exports,N=function(){var t=this,e=t._self._c;return e("div",{staticClass:"partners-content w-100 row m-0"},[e("intersect",{on:{enter:t.onIntersect}},[e("div",{staticClass:"row m-0 px-0 partners-text-content"},[e("div",{staticClass:"col-12 d-flex justify-content-center m-0 p-0"},[e("p",{staticClass:"partners-text title",class:{"fade-in-left-to-right":t.intersecting}},[t._v("Parceiros")])]),e("p",{staticClass:"col-12 m-0 my-4 p-0 partners-text subtitle text-center",class:{"fade-in-left-to-right":t.intersecting}},[t._v(" We've been trusted by over 30 clients for over 5 years. ")]),t.isMobile?e("div",{staticClass:"row m-0 my-4 partners-cards",class:{"fade-in-left-to-right":t.intersecting}},t._l(t.listMobile,(function(t){return e("div",{key:t,staticClass:"col-6 p-4 d-flex justify-content-center mobile"},[e("DynamicIcon",{attrs:{icon:"logo-gray"}})],1)})),0):e("div",{staticClass:"row m-0 my-4 partners-cards",class:{"fade-in-left-to-right":t.intersecting}},t._l(t.list,(function(t){return e("div",{key:t,staticClass:"col-3 p-4 d-flex justify-content-center desktop"},[e("DynamicIcon",{attrs:{icon:"logo-gray"}})],1)})),0)])])],1)},Y=[],J={components:{DynamicIcon:y,Intersect:E["a"]},data(){return{list:[1,2,3,4,5,6,7,8,9,10,11,12],listMobile:[1,2,3,4,5,6,7,8],larguraDaTela:window.innerWidth,intersecting:!1}},computed:{isMobile(){return this.larguraDaTela<=950}},methods:{atualizarLarguraDaTela(){this.larguraDaTela=window.innerWidth},onIntersect(t){t[0].isIntersecting&&(this.intersecting=!0)}},mounted(){window.addEventListener("resize",this.atualizarLarguraDaTela)},beforeDestroy(){window.removeEventListener("resize",this.atualizarLarguraDaTela)}},H=J,Q=(n("6995"),Object(r["a"])(H,N,Y,!1,null,"6d28a452",null)),V=Q.exports,K=function(){var t=this,e=t._self._c;return e("div",{staticClass:"info-content w-100 row m-0",style:`background-image: url(${n("b506")})`},[t._m(0)])},X=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"row m-0 px-0 info-text-content"},[e("p",{staticClass:"col-12 m-0 p-0 info-text text-center"},[t._v(" Você não vai se arrepender. ")]),e("p",{staticClass:"col-12 m-0 p-0 info-text highlight text-center"},[t._v(" 95%+ dos nossos clientes continuam conosco. ")])])}],Z={},tt=Z,et=(n("0d35"),Object(r["a"])(tt,K,X,!1,null,"68670cc3",null)),nt=et.exports,st=function(){var t=this,e=t._self._c;return e("div",{staticClass:"blog-content w-100 row m-0",attrs:{id:"blog"}},[e("div",{staticClass:"row m-0 px-0 blog-text-content"},[e("p",{staticClass:"mb-4 blog-text title text-center highlight"},[t._v("Últimos posts do blog")]),e("div",{staticClass:"col-12 m-0 my-4 p-0 d-flex justify-content-between card-list text-center"},t._l(t.cardsList,(function(s,i){return e("div",{key:i,staticClass:"card-blog"},[e("div",{staticClass:"card-img",style:`background-image: url(${n("b506")})`}),e("div",{staticClass:"card-description py-4"},[e("p",{staticClass:"date"},[t._v(t._s(s.date))]),e("p",{staticClass:"title"},[t._v(t._s(s.title))])])])})),0),e("div",{staticClass:"w-100 my-4 p-0 d-flex justify-content-center blog-text pagination"},[e("DynamicIcon",{attrs:{icon:"circle-left-arrow"},on:{click:function(e){return t.changePage("back")}}}),e("p",{staticClass:"mb-0 mt-1 mx-4 px-4"},[t._v(t._s(t.page)+" / "+t._s(t.totalPages))]),e("DynamicIcon",{attrs:{icon:"circle-right-arrow"},on:{click:function(e){return t.changePage("next")}}})],1),t._m(0)])])},it=[function(){var t=this,e=t._self._c;return e("p",{staticClass:"col-12 m-0 mt-4 p-0 blog-text see-more subtitle text-center"},[e("u",[t._v("See all Blog posts")])])}];n("d9e2");const at=[{id:0,pathImg:"@/assets/banner-cta.png",date:"JULY 01",title:"Welcome DOTE!"},{id:1,pathImg:"@/assets/banner-cta.png",date:"APRIL 01",title:"Starbucks Rebrand"},{id:2,pathImg:"@/assets/banner-cta.png",date:"AUGUST 01",title:"Starbucks Rebrand"},{id:3,pathImg:"@/assets/banner-cta.png",date:"SEPTEMBER 01",title:"Welcome DOTE!"},{id:2,pathImg:"@/assets/banner-cta.png",date:"OCTOBER 01",title:"Welcome DOTE!"},{id:3,pathImg:"@/assets/banner-cta.png",date:"JANUARY 01",title:"Starbucks Rebrand"},{id:2,pathImg:"@/assets/banner-cta.png",date:"MARCH 01",title:"Starbucks Rebrand"},{id:3,pathImg:"@/assets/banner-cta.png",date:"MAY 01",title:"Welcome DOTE!"}];var ct={components:{DynamicIcon:y},data(){return{larguraDaTela:window.innerWidth,cards:[...at],page:1,size:window.innerWidth<=950?1:2}},computed:{cardsList(){const t=(this.page-1)*this.size,e=t+this.size;return t>=this.cards.length?[]:this.cards.slice(t,e)},totalPages(){if(this.size<=0)throw new Error("O tamanho da página deve ser maior que zero.");return Math.ceil(this.cards.length/this.size)},isMobile(){return this.larguraDaTela<=950}},methods:{changePage(t){if("back"==t){if(1==this.page)return;this.page--}if("next"==t){if(this.page==this.totalPages)return;this.page++}},atualizarLarguraDaTela(){this.size=window.innerWidth<=950?1:2}},mounted(){window.addEventListener("resize",this.atualizarLarguraDaTela)},beforeDestroy(){window.removeEventListener("resize",this.atualizarLarguraDaTela)}},ot=ct,rt=(n("7bca"),Object(r["a"])(ot,st,it,!1,null,"b0f62504",null)),lt=rt.exports,ut=function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer w-100 row m-0"},[e("intersect",{on:{enter:t.onIntersect,leave:t.offIntersect}},[e("div",{staticClass:"col-12 row m-0 mb-4"},[e("div",{staticClass:"col-4"},[e("p",{staticClass:"slogan-email"},[t._v("Vamos "),e("br"),t._v(" conversar "),e("br"),t._v(" sobre seu "),e("br"),t._v(" projeto?")]),e("p",{staticClass:"email"},[e("u",[t._v("email@doteag.com")])])]),e("div",{staticClass:"col-8 row m-0 p-0 links"},[e("div",{staticClass:"col-4 pl-4"},[e("a",[t._v("Quem somos")])]),e("div",{staticClass:"col-4 pl-4"},[e("a",[t._v("Blog")])]),e("div",{staticClass:"col-4 pl-4"},[e("a",[e("b",[e("u",[t._v("Políticas de Privacidade")])])])]),e("div",{staticClass:"col-4 pl-4"},[e("a",[t._v("Blog")])]),e("div",{staticClass:"col-4 pl-4"},[e("a",[t._v("Contato")])]),e("div",{staticClass:"col-4 pl-4"},[e("a",[e("b",[e("u",[t._v("Termos de Uso")])])])])])]),e("div",{staticClass:"d-flex m-0 justify-content-between my-4 logo-socials"},[e("div",{staticClass:"px-2"},[e("DynamicIcon",{attrs:{icon:"dote-logo-black"}})],1),e("div",{staticClass:"d-flex socials-btns"},[e("DynamicIcon",{attrs:{icon:"facebook-black"}}),e("DynamicIcon",{attrs:{icon:"twitter-black"}}),e("DynamicIcon",{attrs:{icon:"linkedln-black"}}),e("DynamicIcon",{attrs:{icon:"instagram-black"}})],1)]),e("div",{staticClass:"direitos pt-4 d-flex justify-content-between"},[e("div",{staticClass:"politica-termos d-flex justify-content-between mb-3"},[e("div",[e("a",[e("b",[e("u",[t._v("Políticas de Privacidade")])])])]),e("div",[e("a",[e("b",[e("u",[t._v("Termos de Uso")])])])])]),e("div",[t._v("@ 2023 "),e("b",[t._v("DOTE")]),t._v(". Todos os direitos reservados.")]),e("div",[t._v("Desenvolvido por: "),e("DynamicIcon",{attrs:{icon:"5k9"}})],1)])])],1)},dt=[],gt={components:{DynamicIcon:y,Intersect:E["a"]},data(){return{intersecting:!1}},methods:{onIntersect(t){t[0].isIntersecting&&(this.intersecting=!0,this.$emit("changeItsGreen",!0))},offIntersect(t){t[0].isIntersecting||this.$emit("changeItsGreen",!1)}}},ft=gt,bt=(n("a65e"),Object(r["a"])(ft,ut,dt,!1,null,"44d56f05",null)),pt=bt.exports,mt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"contact-bar justify-content-between align-items-center",class:t.itsGreen?"green":""},[e("p",[t._v("Fale Conosco")]),e("div",{staticClass:"line"}),e("div",{staticClass:"contact-bar-btns"},[t.itsGreen?e("DynamicIcon",{attrs:{icon:"messenger-black"}}):e("DynamicIcon",{attrs:{icon:"messenger-color"}}),t.itsGreen?e("DynamicIcon",{attrs:{icon:"wtp-black"}}):e("DynamicIcon",{attrs:{icon:"wtp-color"}})],1)])},vt=[],ht={components:{DynamicIcon:y},props:{itsGreen:Boolean}},wt=ht,xt=(n("5db3"),Object(r["a"])(wt,mt,vt,!1,null,"780e8ee2",null)),yt=xt.exports,_t={components:{Banner:I,Sidebar:P,About:B,YourServices:F,Partners:V,Info:nt,Blog:lt,Footer:pt,Contact:yt},data(){return{itsGreen:!1}},methods:{changeItsGreen(t){this.itsGreen=t}}},Ct=_t,kt=(n("5fb6"),Object(r["a"])(Ct,g,f,!1,null,"21753b1a",null)),It=kt.exports;s["default"].use(d["a"]);const Dt=[{name:"Home",path:"/",component:It},{name:"Not Found",path:"/*",redirect:"/"}],jt=new d["a"]({mode:"history",routes:Dt});var Ot=jt,St=n("5f5b"),Tt=n("b1e0");s["default"].use(St["a"]),s["default"].use(Tt["a"]),s["default"].use(d["a"]),s["default"].config.productionTip=!1;let Pt=new s["default"]({render:t=>t(u),router:Ot});Pt.$mount("#app");e["default"]=Pt},5950:function(t,e,n){t.exports=n.p+"img/x-icon.c436f4ad.svg"},"5db3":function(t,e,n){"use strict";n("efa5")},"5fb6":function(t,e,n){"use strict";n("8743")},6285:function(t,e,n){t.exports=n.p+"img/hamburguer-icon.2a927120.svg"},6995:function(t,e,n){"use strict";n("2178")},"6cd3":function(t,e,n){"use strict";n("b7f5")},"6e2e":function(t,e,n){"use strict";n("88d2")},"6f8d":function(t,e,n){t.exports=n.p+"img/square-down-arrow-icon.77c853c0.svg"},"789d":function(t,e,n){},"7bca":function(t,e,n){"use strict";n("789d")},"7e10":function(t,e,n){t.exports=n.p+"img/wtp-color-icon.be7f3cfb.svg"},8743:function(t,e,n){},8870:function(t,e,n){"use strict";n("f529")},"888b":function(t,e,n){"use strict";n("f4f3")},"88d2":function(t,e,n){},"8b1f":function(t,e,n){},"96db":function(t,e,n){t.exports=n.p+"img/wtp-black-icon.b1df55d4.svg"},9905:function(t,e,n){},a3ad:function(t,e,n){t.exports=n.p+"img/messenger-black-icon.9fb431cd.svg"},a63b:function(t,e,n){t.exports=n.p+"img/circle-right-arrow-icon.fc643540.svg"},a65e:function(t,e,n){"use strict";n("9905")},ae97:function(t,e,n){t.exports=n.p+"img/instagram-white-icon.415f676b.svg"},b297:function(t,e,n){t.exports=n.p+"img/circle-left-arrow-icon.70b76d39.svg"},b506:function(t,e,n){t.exports=n.p+"img/banner-cta.91261f95.png"},b7f5:function(t,e,n){},b876:function(t,e,n){t.exports=n.p+"img/dote-logo-white-icon.97cd00aa.svg"},b8bb:function(t,e,n){t.exports=n.p+"img/facebook-black-icon.deb17a19.svg"},bf14:function(t,e,n){t.exports=n.p+"img/messenger-color-icon.1f7dd7a4.svg"},c77d:function(t,e,n){t.exports=n.p+"img/logo-gray-icon.7be4a7a6.svg"},daee:function(t,e,n){t.exports=n.p+"img/linkedln-black-icon.6ebb036e.svg"},e73f:function(t,e,n){t.exports=n.p+"img/5k9-icon.e13618cc.svg"},efa5:function(t,e,n){},f4f3:function(t,e,n){},f529:function(t,e,n){},feed:function(t,e,n){var s={"./5k9-icon.svg":"e73f","./arrow-right-icon.svg":"01e3","./circle-left-arrow-icon.svg":"b297","./circle-right-arrow-icon.svg":"a63b","./dote-logo-black-icon.svg":"06d4","./dote-logo-white-icon.svg":"b876","./facebook-black-icon.svg":"b8bb","./facebook-white-icon.svg":"3a81","./hamburguer-icon.svg":"6285","./instagram-black-icon.svg":"09bb","./instagram-white-icon.svg":"ae97","./linkedln-black-icon.svg":"daee","./linkedln-white-icon.svg":"3326","./logo-gray-icon.svg":"c77d","./messenger-black-icon.svg":"a3ad","./messenger-color-icon.svg":"bf14","./square-down-arrow-icon.svg":"6f8d","./square-green-icon.svg":"51a0","./twitter-black-icon.svg":"144c","./twitter-white-icon.svg":"127e","./wtp-black-icon.svg":"96db","./wtp-color-icon.svg":"7e10","./x-icon.svg":"5950"};function i(t){var e=a(t);return n(e)}function a(t){if(!n.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}i.keys=function(){return Object.keys(s)},i.resolve=a,t.exports=i,i.id="feed"}});
//# sourceMappingURL=app.018b2f2c.js.map