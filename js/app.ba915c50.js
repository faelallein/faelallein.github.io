(function(t){function e(e){for(var o,s,c=e[0],r=e[1],l=e[2],u=0,f=[];u<c.length;u++)s=c[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,c=1;c<n.length;c++){var r=n[c];0!==i[r]&&(o=!1)}o&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},i={app:0},a=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=r;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"006e":function(t,e,n){"use strict";n("edb6")},"01e3":function(t,e,n){t.exports=n.p+"img/arrow-right-icon.9d295710.svg"},"0391":function(t,e,n){"use strict";n("f0b3")},"06d4":function(t,e,n){t.exports=n.p+"img/dote-logo-black-icon.def13b0e.svg"},"09bb":function(t,e,n){t.exports=n.p+"img/instagram-black-icon.74693461.svg"},"127e":function(t,e,n){t.exports=n.p+"img/twitter-white-icon.dd7fceaf.svg"},"144c":function(t,e,n){t.exports=n.p+"img/twitter-black-icon.d0da6704.svg"},"1dcf":function(t,e,n){"use strict";n("b06f")},"20da":function(t,e,n){},2226:function(t,e,n){"use strict";n("57d6")},"24a1":function(t,e,n){"use strict";n("751a")},"26cc":function(t,e,n){},"277c":function(t,e,n){t.exports=n.p+"img/at-icon.09c3188b.svg"},"2d85":function(t,e,n){"use strict";n("a561")},3105:function(t,e,n){},3326:function(t,e,n){t.exports=n.p+"img/linkedln-white-icon.0b48bfc6.svg"},"36ab":function(t,e,n){"use strict";n("5424")},"3a81":function(t,e,n){t.exports=n.p+"img/facebook-white-icon.e55096df.svg"},"407b":function(t,e,n){},4982:function(t,e,n){t.exports=n.p+"img/banner-bg.839df8f8.png"},"49ec":function(t,e,n){t.exports=n.p+"files/teste_pdf.34235017.pdf"},"4b72":function(t,e,n){},"51a0":function(t,e,n){t.exports=n.p+"img/square-green-icon.a69eca96.svg"},5318:function(t,e,n){t.exports=n.p+"img/faepol-icon.04cf3d9d.svg"},5424:function(t,e,n){},5447:function(t,e,n){"use strict";n("9a93")},"56d7":function(t,e,n){"use strict";n.r(e);var o=n("2b0e"),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},a=[],s={},c=s,r=(n("ce01"),n("2877")),l=Object(r["a"])(c,i,a,!1,null,null,null),d=l.exports,u=n("8c4f"),f=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home",class:t.itsGreen?"lockScreen":""},[e("Openning"),e("div",{staticClass:"banner w-100",style:`background-image: url(${n("4982")})`},[e("Sidebar",{on:{changeItsGreen:t.changeItsGreen}}),e("Banner")],1),e("About"),e("YourServices"),e("Partners"),e("Info"),e("Blog"),e("Footer",{on:{changeFooter:t.changeFooter}}),e("Contact",{attrs:{itsGreen:!(!t.itsGreen&&!t.inFooter)}})],1)},b=[],p=function(){var t=this,e=t._self._c;return e("div",{staticClass:"banner-content w-100 row m-0"},[t._m(0),e("div",{staticClass:"d-flex m-0 px-0 banner-btns-content justify-content-between align-items-center"},[e("div",{staticClass:"d-flex socials-btns fade-in-down-to-up"},[e("DynamicIcon",{attrs:{icon:"facebook-white"},on:{click:function(e){return t.abrirNovaAba("https://www.facebook.com/dote.agencia")}}}),e("DynamicIcon",{attrs:{icon:"twitter-white"},on:{click:function(e){return t.abrirNovaAba("https://www.google.com/")}}}),e("DynamicIcon",{attrs:{icon:"linkedln-white"},on:{click:function(e){return t.abrirNovaAba("https://www.linkedin.com/company/101275798/admin/feed/posts/?feedType=following")}}}),e("DynamicIcon",{attrs:{icon:"instagram-white"},on:{click:function(e){return t.abrirNovaAba("https://www.instagram.com/doteglobal/")}}})],1),e("a",{attrs:{href:"#about"}},[e("DynamicIcon",{attrs:{icon:"square-down-arrow"}})],1),e("b-button",{staticClass:"btn-base primary-btn",on:{click:function(e){return t.abrirNovaAba("https://api.whatsapp.com/send?phone=5521981982118&text=Olá.%20Gostaria%20de%20mandar%20uma%20mensagem.")}}},[t._v(" Fale Conosco "),e("DynamicIcon",{attrs:{icon:"arrow-right"}})],1)],1)])},m=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"row m-0 px-0 banner-text-content"},[e("p",{staticClass:"col-12 m-0 p-0 banner-text lowlight text-center fade-in-left-to-right"},[t._v("A digital media agency")]),e("p",{staticClass:"col-12 m-0 p-0 banner-text highlight text-center fade-in-left-to-right"},[t._v("Data, websites and apps "),e("br"),t._v(" that make you money")])])}],g=function(){var t=this,e=t._self._c;return e("img",{class:(t.classString?t.classString:"")+" icons-svg ",attrs:{src:n("feed")(`./${t.icon}-icon.svg`)},on:{click:function(e){return t.$emit("click")}}})},v=[],h={props:{icon:String,classString:String}},w=h,y=Object(r["a"])(w,g,v,!1,null,null,null),x=y.exports,k={components:{DynamicIcon:x},methods:{abrirNovaAba(t){window.open(t,"_blank")}}},_=k,C=(n("887d"),n("24a1"),Object(r["a"])(_,p,m,!1,null,"a1c50894",null)),I=C.exports,D=function(){var t=this,e=t._self._c;return e("div",{staticClass:"sidebar d-flex justify-content-between align-items-center"},[e("DynamicIcon",{attrs:{icon:"dote-logo-white"}}),e("div",{staticClass:"items-menu w-50 d-flex justify-content-between"},[e("a",{attrs:{href:"#partners"}},[t._v("Parceiros")]),e("a",{attrs:{href:"#your-services"}},[t._v("Serviços")]),e("a",{attrs:{href:"#blog"}},[t._v("Blog")]),e("a",{on:{click:function(e){return t.abrirNovaAba("https://api.whatsapp.com/send?phone=5521981982118&text=Olá.%20Gostaria%20de%20mandar%20uma%20mensagem.")}}},[t._v("Contato")])]),e("div",{staticClass:"hamburguer"},[e("label",{attrs:{for:"checkboxSidebar"}},[e("DynamicIcon",{attrs:{icon:"hamburguer"}})],1),e("input",{attrs:{type:"checkbox",name:"checkboxSidebar",id:"checkboxSidebar"},domProps:{checked:t.showMenu},on:{change:t.changeCheckbox}}),e("div",{staticClass:"hamburguer-menu justify-content-end"},[e("div",{staticClass:"menu row m-0 px-4"},[e("div",{staticClass:"header p-4 d-flex justify-content-between align-items-center"},[e("DynamicIcon",{attrs:{icon:"dote-logo-black"}}),e("label",{attrs:{for:"checkboxSidebar"}},[e("DynamicIcon",{attrs:{icon:"x"}})],1)],1),e("div",{staticClass:"links d-flex p-4"},[e("a",{attrs:{href:"#partners"},on:{click:t.close}},[t._v("Parceiros")]),e("a",{attrs:{href:"#your-services"},on:{click:t.close}},[t._v("Serviços")]),e("a",{attrs:{href:"#blog"},on:{click:t.close}},[t._v("Blog")]),e("a",{on:{click:function(e){return t.newTabAndClose("https://api.whatsapp.com/send?phone=5521981982118&text=Olá.%20Gostaria%20de%20mandar%20uma%20mensagem.")}}},[t._v("Contato")])]),e("div",{staticClass:"socials-btns w-100 p-4 d-flex justify-content-between"},[e("DynamicIcon",{attrs:{icon:"facebook-black"},on:{click:function(e){return t.abrirNovaAba("https://www.facebook.com/dote.agencia")}}}),e("DynamicIcon",{attrs:{icon:"twitter-black"},on:{click:function(e){return t.abrirNovaAba("https://www.google.com/")}}}),e("DynamicIcon",{attrs:{icon:"linkedln-black"},on:{click:function(e){return t.abrirNovaAba("https://www.linkedin.com/company/101275798/admin/feed/posts/?feedType=following")}}}),e("DynamicIcon",{attrs:{icon:"instagram-black"},on:{click:function(e){return t.abrirNovaAba("https://www.instagram.com/doteglobal/")}}})],1)])])])],1)},O=[],j={components:{DynamicIcon:x},data(){return{showMenu:!1}},methods:{close(){document.querySelector("#checkboxSidebar").checked=!1,this.$emit("changeItsGreen",!1)},changeCheckbox(t){this.$emit("changeItsGreen",t.target.checked)},abrirNovaAba(t){window.open(t,"_blank")},newTabAndClose(t){this.abrirNovaAba(t),this.close()}}},S=j,A=(n("e225"),Object(r["a"])(S,D,O,!1,null,"14806622",null)),$=A.exports,P=function(){var t=this,e=t._self._c;return e("div",{staticClass:"about-content w-100 row m-0",attrs:{id:"about"}},[e("intersect",{on:{enter:t.onIntersect}},[e("div",{staticClass:"row m-0 px-0 about-text-content"},[e("div",{staticClass:"col-12 d-flex justify-content-center m-0 p-0 py-4"},[e("p",{staticClass:"about-text title font-space-odyssey",class:{"fade-item-in-down-to-up":t.intersecting}},[t._v(" Quem Somos ")])]),e("p",{staticClass:"col-12 m-0 p-0 about-text highlight text-center",class:{"fade-item-in-down-to-up":t.intersecting}},[t._v(" Uma agência que une dados e performance "),e("br"),t._v("para entregar resultados extraordinários. ")]),e("p",{staticClass:"col-12 m-0 mt-4 p-0 about-text subtitle text-center",class:{"fade-item-in-down-to-up":t.intersecting}},[t._v(" Fazemos o que for necessário "),e("br",{staticClass:"mobile"}),t._v(" para entregar o que prometemos."),e("br"),t._v(" Estamos na Crista do Digital."),e("br"),e("b",[t._v("All In One.")])])])])],1)},M=[],N=n("760e"),T={components:{Intersect:N["a"]},data(){return{intersecting:!1}},methods:{onIntersect(t){t[0].isIntersecting&&(this.intersecting=!0)}}},F=T,L=(n("2d85"),Object(r["a"])(F,P,M,!1,null,"7ed4d8b5",null)),z=L.exports,B=function(){var t=this,e=t._self._c;return e("div",{staticClass:"your-services-content w-100 row m-0",attrs:{id:"your-services"}},[e("intersect",{on:{enter:t.onIntersect}},[e("div",{staticClass:"row m-0 px-0 your-services-text-content"},[e("div",{staticClass:"col-12 d-flex m-0 p-0 your-services-text-div-title"},[e("p",{staticClass:"your-services-text title font-space-odyssey",class:{"fade-item-in-down-to-up":t.intersecting}},[t._v("Nossos Serviços")])]),e("p",{staticClass:"col-12 m-0 p-0 mt-3 your-services-text highlight",class:{"fade-item-in-down-to-up":t.intersecting}},[t._v(" 360º Digital Services that "),e("b",[e("i",[t._v("make your perform.")])])]),e("div",{staticClass:"row m-0 mt-4 p-0 your-services-text subtitle"},t._l(t.list,(function(n,o){return e("div",{key:o,staticClass:"col-lg-12 col-xl-3 m-0 p-0 mb-4 d-flex align-items-center",class:{"fade-item-in-down-to-up":t.intersecting}},[e("DynamicIcon",{attrs:{icon:"square-green"}}),t._v(" "),e("p",{staticClass:"w-75 px-4 mb-0"},[t._v(t._s(n))])],1)})),0)])])],1)},G=[],q={components:{DynamicIcon:x,Intersect:N["a"]},data(){return{list:["Social Media","CRM","Web Development","App Development","Tráfego Pago","Business Intelligence","Web App Development","IA Chat Bot"],intersecting:!1}},methods:{onIntersect(t){t[0].isIntersecting&&(this.intersecting=!0)}}},E=q,W=(n("8daf"),Object(r["a"])(E,B,G,!1,null,"3efa4036",null)),U=W.exports,R=function(){var t=this,e=t._self._c;return e("div",{staticClass:"partners-content w-100 row m-0",attrs:{id:"partners"}},[e("intersect",{on:{enter:t.onIntersect}},[e("div",{staticClass:"row m-0 px-0 partners-text-content"},[e("div",{staticClass:"col-12 d-flex justify-content-center m-0 p-0"},[e("p",{staticClass:"partners-text title",class:{"fade-in-left-to-right":t.intersecting}},[t._v("Parceiros")])]),e("p",{staticClass:"col-12 m-0 my-4 p-0 partners-text subtitle text-center",class:{"fade-in-left-to-right":t.intersecting}},[t._v(" We've been trusted by over 30 clients for over 5 years. ")]),t.isMobile?e("div",{staticClass:"row m-0 my-4 partners-cards",class:{"fade-in-left-to-right":t.intersecting}},t._l(t.list,(function(t){return e("div",{key:t,staticClass:"col-6 p-4 d-flex justify-content-center mobile"},[e("DynamicIcon",{attrs:{icon:t}})],1)})),0):e("div",{staticClass:"row m-0 my-4 partners-cards",class:{"fade-in-left-to-right":t.intersecting}},t._l(t.list,(function(t){return e("div",{key:t,staticClass:"col-4 p-4 d-flex justify-content-center align-items-center desktop",class:t},[e("DynamicIcon",{attrs:{icon:t}})],1)})),0)])])],1)},V=[],J={components:{DynamicIcon:x,Intersect:N["a"]},data(){return{list:["oi","tim","snapdragon","at","faepol","ap"],listMobile:[1,2,3,4,5,6,7,8],larguraDaTela:window.innerWidth,intersecting:!1}},computed:{isMobile(){return this.larguraDaTela<=950}},methods:{atualizarLarguraDaTela(){this.larguraDaTela=window.innerWidth},onIntersect(t){t[0].isIntersecting&&(this.intersecting=!0)}},mounted(){window.addEventListener("resize",this.atualizarLarguraDaTela)},beforeDestroy(){window.removeEventListener("resize",this.atualizarLarguraDaTela)}},Y=J,H=(n("8d0d"),Object(r["a"])(Y,R,V,!1,null,"31c49ba1",null)),K=H.exports,Q=function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-100",style:`background-image: url(${n("b506")})`},[e("intersect",{on:{enter:t.onIntersect}},[e("div",{staticClass:"info-content w-100 row m-0"},[e("div",{staticClass:"row m-0 px-0 info-text-content"},[e("p",{staticClass:"col-12 m-0 p-0 info-text text-center",class:{"fade-item-in-down-to-up":t.intersecting}},[t._v(" Você não vai se arrepender. ")]),e("p",{staticClass:"col-12 m-0 p-0 info-text highlight text-center",class:{"fade-item-in-down-to-up":t.intersecting}},[t._v(" 95%+ dos nossos clientes continuam conosco. ")])])])])],1)},X=[],Z={components:{Intersect:N["a"]},data(){return{intersecting:!1}},methods:{onIntersect(t){t[0].isIntersecting&&(this.intersecting=!0)}}},tt=Z,et=(n("0391"),Object(r["a"])(tt,Q,X,!1,null,"1912601d",null)),nt=et.exports,ot=function(){var t=this,e=t._self._c;return e("div",{staticClass:"blog-content w-100 row m-0",attrs:{id:"blog"}},[e("intersect",{on:{enter:t.onIntersect}},[e("div",{staticClass:"row m-0 px-0 blog-text-content"},[e("p",{staticClass:"mb-4 blog-text title text-center highlight",class:{"fade-item-in-down-to-up":t.intersecting}},[t._v("Últimos posts do blog")]),e("div",{staticClass:"col-12 m-0 my-4 p-0 d-flex justify-content-between card-list text-center"},t._l(t.cardsList,(function(n,o){return e("div",{key:o,staticClass:"card-blog",class:{"fade-item-in-down-to-up":t.intersecting},on:{click:function(e){t.post=n}}},[e("div",{staticClass:"card-img",style:`background-image: url(${n.linkImg})`}),e("div",{staticClass:"card-description py-4"},[e("p",{staticClass:"date"},[t._v(t._s(t.converterFormatoData(n.date)))]),e("p",{staticClass:"title"},[t._v(t._s(n.titulo))])])])})),0),e("div",{staticClass:"w-100 my-4 p-0 d-flex justify-content-center blog-text pagination",class:{"fade-item-in-down-to-up":t.intersecting}},[e("DynamicIcon",{attrs:{icon:"circle-left-arrow"},on:{click:function(e){return t.changePage("back")}}}),e("p",{staticClass:"mb-0 mt-1 mx-4 px-4"},[t._v(t._s(t.page)+" / "+t._s(t.totalPages))]),e("DynamicIcon",{attrs:{icon:"circle-right-arrow"},on:{click:function(e){return t.changePage("next")}}})],1),e("p",{staticClass:"col-12 m-0 mt-4 p-0 blog-text see-more subtitle text-center",class:{"fade-item-in-down-to-up":t.intersecting}},[e("u",[t._v("See all Blog posts")])]),null!=t.post?e("ModalViewBlog",{attrs:{post:t.post},on:{closed:function(e){t.post=null}}}):t._e()],1)])],1)},it=[],at=(n("d9e2"),function(){var t=this,e=t._self._c;return e("b-modal",{attrs:{id:"modal-post",centered:"","modal-class":"modal",size:"md","hide-header":"","hide-footer":"",visible:!0},on:{hidden:function(e){return t.$emit("closed")}}},[e("div",{staticClass:"card-blog"},[e("div",{staticClass:"card-img d-flex justify-content-end",style:`background-image: url(${t.post.linkImg})`},[e("b-icon-x",{on:{click:function(e){return t.$emit("closed")}}})],1),e("div",{staticClass:"card-description py-4"},[e("div",{staticClass:"row justify-content-center mx-0"},[e("p",{staticClass:"col-12 title text-center mb-0"},[t._v(t._s(t.post.titulo))]),e("p",{staticClass:"col-12 date text-center"},[t._v(t._s(t.post.date))]),e("p",{staticClass:"col-12 conteudo text-center"},[t._v(t._s(t.post.conteudo))])])])])])}),st=[],ct={props:{post:Object}},rt=ct,lt=(n("8d14"),n("8b98"),Object(r["a"])(rt,at,st,!1,null,"0211c58f",null)),dt=lt.exports;const ut=["January","February","March","April","May","June","July","August","September","October","November","December"];var ft={components:{DynamicIcon:x,Intersect:N["a"],ModalViewBlog:dt},data(){return{larguraDaTela:window.innerWidth,cards:[],page:1,size:window.innerWidth<=950?1:2,intersecting:!1,post:null}},computed:{cardsList(){const t=(this.page-1)*this.size,e=t+this.size;return t>=this.cards.length?[]:this.cards.slice(t,e)},totalPages(){if(this.size<=0)throw new Error("O tamanho da página deve ser maior que zero.");return Math.ceil(this.cards.length/this.size)},isMobile(){return this.larguraDaTela<=950}},methods:{changePage(t){if("back"==t){if(1==this.page)return;this.page--}if("next"==t){if(this.page==this.totalPages)return;this.page++}},atualizarLarguraDaTela(){this.size=window.innerWidth<=950?1:2},onIntersect(t){t[0].isIntersecting&&(this.intersecting=!0)},async loadPosts(){const t=await this.$database.getOnDatabase("/post"),e=Object.keys(t).map(e=>({id:e,...t[e]}));this.cards=[...e]},converterFormatoData(t){const e=t.split("/"),n=e[0],o=parseInt(e[1],10)-1,i=ut[o];return`${i} ${n}`.toUpperCase()}},created(){this.loadPosts()},mounted(){window.addEventListener("resize",this.atualizarLarguraDaTela)},beforeDestroy(){window.removeEventListener("resize",this.atualizarLarguraDaTela)}},bt=ft,pt=(n("2226"),Object(r["a"])(bt,ot,it,!1,null,"53d7e1de",null)),mt=pt.exports,gt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer w-100 row m-0"},[e("intersect",{on:{enter:t.onIntersect,leave:t.offIntersect}},[e("div",{staticClass:"col-12 row m-0 mb-4"},[e("div",{staticClass:"col-4",class:{"fade-item-in-down-to-up":t.intersecting}},[e("p",{staticClass:"slogan-email"},[t._v("Vamos "),e("br"),t._v(" conversar "),e("br"),t._v(" sobre o seu "),e("br"),t._v(" projeto?")]),e("p",{staticClass:"email"},[e("u",[t._v("pipo@dote.global")])])]),e("div",{staticClass:"col-8 row m-0 p-0 links"},[e("div",{staticClass:"col-4 pl-4",class:{"fade-item-in-down-to-up":t.intersecting}},[e("a",{attrs:{href:"#about"}},[t._v("Quem somos")])]),e("div",{staticClass:"col-4 pl-4",class:{"fade-item-in-down-to-up":t.intersecting}},[e("a",{attrs:{href:"#blog"}},[t._v("Blog")])]),e("div",{staticClass:"col-4 pl-4",class:{"fade-item-in-down-to-up":t.intersecting}},[e("a",[e("b",[e("u",[t._v("Políticas de Privacidade")])])])]),e("div",{staticClass:"col-4 pl-4",class:{"fade-item-in-down-to-up":t.intersecting}},[e("a",{attrs:{href:"#your-services"}},[t._v("Serviços")])]),e("div",{staticClass:"col-4 pl-4",class:{"fade-item-in-down-to-up":t.intersecting}},[e("a",{attrs:{href:"#your-services"}},[t._v("Contato")])]),e("div",{staticClass:"col-4 pl-4",class:{"fade-item-in-down-to-up":t.intersecting}},[e("a",[e("b",[e("u",[t._v("Termos de Uso")])])])])]),e("div",{staticClass:"d-flex m-0 justify-content-between my-4 logo-socials"},[e("div",{staticClass:"px-2",class:{"fade-item-in-down-to-up":t.intersecting}},[e("DynamicIcon",{attrs:{icon:"dote-logo-black"}})],1),e("div",{staticClass:"d-flex socials-btns",class:{"fade-item-in-down-to-up":t.intersecting}},[e("DynamicIcon",{attrs:{icon:"facebook-black"},on:{click:function(e){return t.abrirNovaAba("https://www.facebook.com/dote.agencia")}}}),e("DynamicIcon",{attrs:{icon:"twitter-black"},on:{click:function(e){return t.abrirNovaAba("https://www.google.com/")}}}),e("DynamicIcon",{attrs:{icon:"linkedln-black"},on:{click:function(e){return t.abrirNovaAba("https://www.linkedin.com/company/101275798/admin/feed/posts/?feedType=following")}}}),e("DynamicIcon",{attrs:{icon:"instagram-black"},on:{click:function(e){return t.abrirNovaAba("https://www.instagram.com/doteglobal/")}}})],1)]),e("div",{staticClass:"direitos pt-4 d-flex justify-content-between"},[e("div",{staticClass:"politica-termos d-flex justify-content-between mb-3"},[e("div",[e("a",{attrs:{href:n("49ec"),target:"_blank"}},[e("b",[e("u",[t._v("Políticas de Privacidade")])])])]),e("div",[e("a",[e("b",[e("u",[t._v("Termos de Uso")])])])])]),e("div",{staticClass:"reservados",class:{"fade-item-in-down-to-up":t.intersecting}},[t._v("@ 2023 "),e("b",[t._v("DOTE")]),t._v(". Todos os direitos reservados.")]),e("div",[t._v("Desenvolvido por: "),e("DynamicIcon",{attrs:{icon:"5k9"},on:{click:function(e){return t.abrirNovaAba("https://www.behance.net/5K9")}}})],1)])])])],1)},vt=[],ht={components:{DynamicIcon:x,Intersect:N["a"]},data(){return{intersecting:!1}},methods:{onIntersect(t){t[0].isIntersecting&&(this.intersecting=!0,this.$emit("changeFooter",!0))},offIntersect(t){t[0].isIntersecting||this.$emit("changeFooter",!1)},abrirNovaAba(t){window.open(t,"_blank")}}},wt=ht,yt=(n("1dcf"),Object(r["a"])(wt,gt,vt,!1,null,"77715443",null)),xt=yt.exports,kt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"contact-bar justify-content-between align-items-center",class:t.itsGreen?"green":""},[e("p",[t._v("Fale Conosco")]),e("div",{staticClass:"line"}),e("div",{staticClass:"contact-bar-btns"},[t.itsGreen?e("DynamicIcon",{attrs:{icon:"messenger-black"},on:{click:t.openFb}}):e("DynamicIcon",{attrs:{icon:"messenger-color"},on:{click:t.openFb}}),t.itsGreen?e("DynamicIcon",{attrs:{icon:"wtp-black"},on:{click:t.openWtp}}):e("DynamicIcon",{attrs:{icon:"wtp-color"},on:{click:t.openWtp}})],1)])},_t=[],Ct={components:{DynamicIcon:x},props:{itsGreen:Boolean},methods:{abrirNovaAba(t){window.open(t,"_blank")},openWtp(){this.abrirNovaAba("")},openFb(){this.abrirNovaAba("")}}},It=Ct,Dt=(n("7754"),Object(r["a"])(It,kt,_t,!1,null,"4684b5ec",null)),Ot=Dt.exports,jt=function(){var t=this,e=t._self._c;return t.isPlaying?e("div",{staticClass:"openning fade-item"},[t._m(0)]):t._e()},St=[function(){var t=this,e=t._self._c;return e("video",{staticClass:"video",attrs:{autoplay:"",name:"media"}},[e("source",{attrs:{src:"https://firebasestorage.googleapis.com/v0/b/dote-290b0.appspot.com/o/into-dote.mp4?alt=media&token=f939cef1-716d-47bd-a0d4-48f5b9dd1345",type:"video/mp4"}})])}],At={data(){return{videoSource:null,isPlaying:!0}},methods:{},created(){setTimeout(()=>{this.isPlaying=!1},5e3)}},$t=At,Pt=(n("fa0d"),Object(r["a"])($t,jt,St,!1,null,"421aa070",null)),Mt=Pt.exports,Nt={components:{Banner:I,Sidebar:$,About:z,YourServices:U,Partners:K,Info:nt,Blog:mt,Footer:xt,Contact:Ot,Openning:Mt},data(){return{itsGreen:!1,inFooter:!1}},methods:{changeItsGreen(t){this.itsGreen=t},changeFooter(t){this.inFooter=t}}},Tt=Nt,Ft=(n("d970"),Object(r["a"])(Tt,f,b,!1,null,"03e6b259",null)),Lt=Ft.exports,zt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"painel"},[t.isLogado?e("Dashboard",{on:{deslogar:function(e){t.islogado=!1}}}):e("Login",{on:{logar:t.logar,deslogar:function(e){t.islogado=!1}}})],1)},Bt=[],Gt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"login d-flex justify-content-center align-items-center"},[e("div",{staticClass:"login-form d-flex justify-content-center"},[e("DynamicIcon",{attrs:{icon:"dote-logo-white"}}),e("b-form-group",{staticClass:"mt-4 col-12",attrs:{id:"input-group-1",label:"Login:","label-for":"input-1"}},[e("b-form-input",{attrs:{id:"input-1",type:"email",placeholder:"Login",required:""},model:{value:t.form.login,callback:function(e){t.$set(t.form,"login",e)},expression:"form.login"}})],1),e("b-form-group",{staticClass:"mt-2 col-12",attrs:{id:"input-group-2",label:"Senha:","label-for":"input-2"}},[e("b-form-input",{attrs:{id:"input-2",placeholder:"Senha",required:""},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),e("b-button",{staticClass:"btn-base primary-btn btn-logar mt-4",on:{click:t.logar}},[t._v(" Entrar ")]),t.isIncorrect?e("b-alert",{staticClass:"alert w-100 mt-3",attrs:{show:"",variant:"danger"}},[t._v(" Os Dados estão incorretos. ")]):t._e()],1)])},qt=[],Et={components:{DynamicIcon:x},data(){return{form:{login:null,password:null},isIncorrect:null}},methods:{logar(){this.isIncorrect=null,"admin"==this.form.login&&"admin"==this.form.password?this.$emit("logar"):this.isIncorrect=!0},deslogar(){this.$emit("deslogar")}}},Wt=Et,Ut=(n("006e"),Object(r["a"])(Wt,Gt,qt,!1,null,"d564f896",null)),Rt=Ut.exports,Vt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"dashboard"},[e("Navbar",{on:{change:t.change,deslogar:function(e){return t.$emit("deslogar")}}}),"blog"==t.view?e("Blog"):t._e()],1)},Jt=[],Yt=function(){var t=this,e=t._self._c;return e("div",[e("b-navbar",{staticClass:"navbar",attrs:{variant:"info"}},[e("DynamicIcon",{attrs:{icon:"dote-logo-white"},on:{click:function(e){return t.$emit("change",null)}}}),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),e("b-collapse",{staticClass:"navbar-items justify-content-end",attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",[e("b-nav-item",{on:{click:function(e){return t.$emit("change","blog")}}},[t._v("Blog")])],1),e("b-navbar-nav",{staticClass:"ml-auto"},[e("b-nav-item",{on:{click:function(e){return t.$emit("deslogar")}}},[t._v("Sair")])],1)],1)],1)],1)},Ht=[],Kt={components:{DynamicIcon:x},data(){return{}},methods:{}},Qt=Kt,Xt=(n("73c6"),Object(r["a"])(Qt,Yt,Ht,!1,null,"2b5373ec",null)),Zt=Xt.exports,te=function(){var t=this,e=t._self._c;return e("div",{staticClass:"blog"},[e("div",{staticClass:"header d-flex justify-content-between"},[e("p",[t._v("Posts do blog")]),e("b-button",{staticClass:"btn-base primary-btn btn-novo-post",on:{click:function(e){t.showModal=!0}}},[t._v("Novo Post")])],1),e("b-table",{attrs:{striped:"",hover:"",responsive:"",items:t.items,fields:t.headerFields},scopedSlots:t._u([{key:"cell(id)",fn:function({item:n}){return[e("div",{staticClass:"div-table-btns"},[e("b-button",{staticClass:"btn-base btn-table edit",on:{click:function(e){return t.openModal(n)}}},[e("b-icon-pencil",{staticClass:"listing-user-table-item-icon"})],1),e("b-button",{staticClass:"btn-base btn-table delete",on:{click:function(e){return t.destroy(n.id)}}},[e("b-icon-trash",{staticClass:"listing-user-table-item-icon"})],1)],1)]}}])}),1==t.showModal?e("ModalAdicionarPost",{attrs:{post:t.editModal},on:{closed:t.closeModal}}):t._e()],1)},ee=[],ne=function(){var t=this,e=t._self._c;return e("b-modal",{attrs:{id:"modal-adicionar-post",centered:"","modal-class":"modal",size:"md","hide-header-close":"",visible:!0},on:{hidden:function(e){return t.$emit("closed")}},scopedSlots:t._u([{key:"modal-title",fn:function(){return[t._v(" ADICIONAR POST ")]},proxy:!0},{key:"modal-footer",fn:function(){return[e("b-button",{staticClass:"btn-base btn-modal-novo-post cancel",on:{click:function(e){return t.$bvModal.hide("modal-adicionar-post")}}},[t._v(" CANCELAR ")]),e("b-button",{staticClass:"btn-base btn-modal-novo-post",on:{click:t.upload}},[t._v(" SALVAR ")])]},proxy:!0}])},[e("b-form-group",{staticClass:"mb-3",attrs:{label:"Título:","label-for":"titulo"}},[e("b-form-input",{attrs:{id:"titulo",maxlength:"30"},model:{value:t.form.titulo,callback:function(e){t.$set(t.form,"titulo",e)},expression:"form.titulo"}}),e("b-form-invalid-feedback",{attrs:{state:!t.validate.titulo&&null}},[t._v(t._s(t.validate.titulo))])],1),e("b-form-group",{staticClass:"mb-3",attrs:{label:"Anexar Imagem","label-for":"file"}},[e("b-form-file",{attrs:{name:"file",accept:".jpeg, .png, .jpg"},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}}),e("b-form-invalid-feedback",{attrs:{state:!t.validate.file&&null}},[t._v(t._s(t.validate.file))])],1),e("b-form-group",{staticClass:"mb-3",attrs:{label:"Conteúdo do Post: ","label-for":"conteudo"}},[e("b-form-textarea",{attrs:{id:"conteudo","no-resize":"",placeholder:"Digite aqui",maxlength:"500",rows:"4","max-rows":"4"},model:{value:t.form.conteudo,callback:function(e){t.$set(t.form,"conteudo",e)},expression:"form.conteudo"}}),e("b-form-invalid-feedback",{attrs:{state:!t.validate.conteudo&&null}},[t._v(t._s(t.validate.conteudo))])],1)],1)},oe=[],ie={props:{post:Object},data(){return{form:{titulo:null,conteudo:null,date:null,linkImg:null},validate:{titulo:null,conteudo:null,date:null},file:null}},methods:{async upload(){if(!this.isValid())return;null!=this.file&&(this.form.linkImg=await this.$storage.uploadOnStorage("imagens/post/"+this.file.name,this.file)),null==this.date&&(this.form.date=this.obterDataFormatada());let t={titulo:this.form.titulo,date:this.form.date,conteudo:this.form.conteudo,linkImg:this.form.linkImg};null==this.post?this.$database.createOnDatabase("post",t):this.$database.updateOnDatabase("post",this.post.id,t),this.$emit("closed")},isValid(){return this.validate={titulo:null,conteudo:null,file:null},null==this.form.titulo&&(this.validate.titulo="*Campo obrigatório."),null==this.form.conteudo&&(this.validate.conteudo="*Campo obrigatório."),this.post||null!=this.file||(this.validate.file="*Campo obrigatório."),!(this.validate.titulo||this.validate.conteudo||this.validate.file)},async excluir(t){await this.$storage.refFromURL(t).delete()},obterDataFormatada(){const t=new Date,e=t=>t.toString().padStart(2,"0");return`${e(t.getDate())}/${e(t.getMonth()+1)}/${t.getFullYear()} - ${e(t.getHours())}:${e(t.getMinutes())}:${e(t.getSeconds())}`}},created(){null!=this.post&&(this.form={titulo:this.post.titulo,conteudo:this.post.conteudo,date:this.post.date,linkImg:this.post.linkImg})}},ae=ie,se=(n("9d88"),n("36ab"),Object(r["a"])(ae,ne,oe,!1,null,"6f7fce84",null)),ce=se.exports;let re=[{key:"titulo",label:"Titulo"},{key:"date",label:"Data"},{key:"id",label:"Ações"}];var le={components:{ModalAdicionarPost:ce},data(){return{headerFields:[...re],items:[],showModal:null,editModal:null}},methods:{openModal(t){this.editModal=t,this.showModal=!0},closeModal(){this.showModal=null,this.editModal=null,this.loadPosts()},async loadPosts(){const t=await this.$database.getOnDatabase("/post"),e=Object.keys(t).map(e=>({id:e,...t[e]}));this.items=[...e]},async destroy(t){await this.$database.deleteOnDatabase("/post",t),this.loadPosts()}},async created(){this.loadPosts()}},de=le,ue=(n("5447"),Object(r["a"])(de,te,ee,!1,null,"878ecd52",null)),fe=ue.exports,be={components:{Navbar:Zt,Blog:fe},data(){return{view:null}},methods:{change(t){this.view=t}}},pe=be,me=(n("df6a"),Object(r["a"])(pe,Vt,Jt,!1,null,"44c25977",null)),ge=me.exports,ve={components:{Login:Rt,Dashboard:ge},data(){return{isLogado:!1}},methods:{logar(){this.isLogado=!0}}},he=ve,we=Object(r["a"])(he,zt,Bt,!1,null,"07bde462",null),ye=we.exports;o["default"].use(u["a"]);const xe=[{name:"Home",path:"/",component:Lt},{name:"Painel",path:"/painel",component:ye},{name:"Not Found",path:"/*",redirect:"/"}],ke=new u["a"]({mode:"history",routes:xe});var _e=ke,Ce=n("5f5b"),Ie=n("b1e0"),De=n("bc7b"),Oe=n("7c01");const je=t=>({refDatabase:Object(Oe["e"])(Object(Oe["c"])(t)),refSingleNode:function(e){return Object(Oe["e"])(Object(Oe["c"])(t),e)},getOnDatabase(t){return new Promise(e=>{Object(Oe["b"])(Object(Oe["a"])(this.refDatabase,t)).then(t=>e(t.val()))})},createOnDatabase:function(t,e){Object(Oe["d"])(Object(Oe["a"])(this.refDatabase,t),e)},updateOnDatabase:function(t,e,n){const o={};return o["/"+e]=n,Object(Oe["g"])(this.refSingleNode(t),o)},deleteOnDatabase:function(t,e){return new Promise(n=>{Object(Oe["f"])(this.refSingleNode(`${t}/${e}`)),n()})}});var Se=n("6a92");const Ae=t=>({refStorage:Object(Se["c"])(Object(Se["b"])(t)),refSingleStorage:function(e){return Object(Se["c"])(Object(Se["b"])(t),e)},uploadOnStorage:function(t,e){return new Promise(n=>{Object(Se["d"])(this.refSingleStorage(t),e).then(async t=>{n(await Object(Se["a"])(t.ref))})})},getSingleURL:function(t){return new Promise(e=>{e(Object(Se["a"])(this.refSingleStorage(t)))})}}),$e={apiKey:"AIzaSyBIU-ICI2sI0S5zebMYAbi726vRAL3BcOc",authDomain:"dote-290b0.firebaseapp.com",projectId:"dote-290b0",storageBucket:"dote-290b0.appspot.com",messagingSenderId:"296350654738",appId:"1:296350654738:web:40e94987a4e1be55d193cb"},Pe=Object(De["a"])($e),Me=Ae(Pe),Ne=je(Pe);o["default"].use(Ce["a"]),o["default"].use(Ie["a"]),o["default"].use(u["a"]),o["default"].config.productionTip=!1,o["default"].prototype.$storage=Me,o["default"].prototype.$database=Ne;let Te=new o["default"]({render:t=>t(d),router:_e});Te.$mount("#app");e["default"]=Te},"57d6":function(t,e,n){},5950:function(t,e,n){t.exports=n.p+"img/x-icon.c436f4ad.svg"},"5c1f":function(t,e,n){},6285:function(t,e,n){t.exports=n.p+"img/hamburguer-icon.2a927120.svg"},"6b14":function(t,e,n){},"6f8d":function(t,e,n){t.exports=n.p+"img/square-down-arrow-icon.77c853c0.svg"},"73c6":function(t,e,n){"use strict";n("4b72")},"751a":function(t,e,n){},7754:function(t,e,n){"use strict";n("5c1f")},7841:function(t,e,n){},"7e10":function(t,e,n){t.exports=n.p+"img/wtp-color-icon.be7f3cfb.svg"},"85fe":function(t,e,n){},"887d":function(t,e,n){"use strict";n("3105")},"8b98":function(t,e,n){"use strict";n("407b")},"8d0d":function(t,e,n){"use strict";n("d249")},"8d14":function(t,e,n){"use strict";n("7841")},"8daf":function(t,e,n){"use strict";n("b16f")},"96db":function(t,e,n){t.exports=n.p+"img/wtp-black-icon.b1df55d4.svg"},"9a93":function(t,e,n){},"9ccc":function(t,e,n){t.exports=n.p+"img/snapdragon-icon.d71758cb.svg"},"9d88":function(t,e,n){"use strict";n("a9eb")},a3ad:function(t,e,n){t.exports=n.p+"img/messenger-black-icon.9fb431cd.svg"},a561:function(t,e,n){},a63b:function(t,e,n){t.exports=n.p+"img/circle-right-arrow-icon.fc643540.svg"},a737:function(t,e,n){},a9eb:function(t,e,n){},ae97:function(t,e,n){t.exports=n.p+"img/instagram-white-icon.415f676b.svg"},b06f:function(t,e,n){},b16f:function(t,e,n){},b297:function(t,e,n){t.exports=n.p+"img/circle-left-arrow-icon.70b76d39.svg"},b506:function(t,e,n){t.exports=n.p+"img/banner-cta.91261f95.png"},b876:function(t,e,n){t.exports=n.p+"img/dote-logo-white-icon.97cd00aa.svg"},b8bb:function(t,e,n){t.exports=n.p+"img/facebook-black-icon.deb17a19.svg"},bab4:function(t,e,n){t.exports=n.p+"img/tim-icon.ec23c76b.svg"},bf14:function(t,e,n){t.exports=n.p+"img/messenger-color-icon.1f7dd7a4.svg"},c3a3:function(t,e,n){t.exports=n.p+"img/ap-icon.ad95d40f.svg"},c77d:function(t,e,n){t.exports=n.p+"img/logo-gray-icon.7be4a7a6.svg"},ce01:function(t,e,n){"use strict";n("20da")},d249:function(t,e,n){},d970:function(t,e,n){"use strict";n("6b14")},daee:function(t,e,n){t.exports=n.p+"img/linkedln-black-icon.6ebb036e.svg"},df6a:function(t,e,n){"use strict";n("a737")},e225:function(t,e,n){"use strict";n("85fe")},e73f:function(t,e,n){t.exports=n.p+"img/5k9-icon.e13618cc.svg"},edb6:function(t,e,n){},f0b3:function(t,e,n){},f919:function(t,e,n){t.exports=n.p+"img/oi-icon.0ea8de87.svg"},fa0d:function(t,e,n){"use strict";n("26cc")},feed:function(t,e,n){var o={"./5k9-icon.svg":"e73f","./ap-icon.svg":"c3a3","./arrow-right-icon.svg":"01e3","./at-icon.svg":"277c","./circle-left-arrow-icon.svg":"b297","./circle-right-arrow-icon.svg":"a63b","./dote-logo-black-icon.svg":"06d4","./dote-logo-white-icon.svg":"b876","./facebook-black-icon.svg":"b8bb","./facebook-white-icon.svg":"3a81","./faepol-icon.svg":"5318","./hamburguer-icon.svg":"6285","./instagram-black-icon.svg":"09bb","./instagram-white-icon.svg":"ae97","./linkedln-black-icon.svg":"daee","./linkedln-white-icon.svg":"3326","./logo-gray-icon.svg":"c77d","./messenger-black-icon.svg":"a3ad","./messenger-color-icon.svg":"bf14","./oi-icon.svg":"f919","./snapdragon-icon.svg":"9ccc","./square-down-arrow-icon.svg":"6f8d","./square-green-icon.svg":"51a0","./tim-icon.svg":"bab4","./twitter-black-icon.svg":"144c","./twitter-white-icon.svg":"127e","./wtp-black-icon.svg":"96db","./wtp-color-icon.svg":"7e10","./x-icon.svg":"5950"};function i(t){var e=a(t);return n(e)}function a(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}i.keys=function(){return Object.keys(o)},i.resolve=a,t.exports=i,i.id="feed"}});
//# sourceMappingURL=app.ba915c50.js.map