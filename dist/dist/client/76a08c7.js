(window.webpackJsonp=window.webpackJsonp||[]).push([[1,27,43,45,48,52,53,54,55,56],{708:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n(113),r=Object(o.c)("Institucion",{state:function(){return{url_api:"https://serviciopagina.upea.bo",institucion:null,nombre:"ingenieria de sistemas",carrera_links_externos:null,carrera_convocatorias:null,carrera_avisos:null,carrera_comunicados:null,carrera_cursos:null,carrera_seminarios:null,carrera_autoridades:null,carrera_servicios:null,carrera_ofertasacademicas:null,carrera_publicaciones:null,carrera_gacetas:null,carrera_eventos:null,carrera_videos:null,fotosPagina:null,fotosPortada:null,title_index_about:"Perfil y Carrera de Licenciatura en ",title_index_services:"Informacion sobre la carrera",title_funfact:"Todos los comunicados de la Carrera",pretitle_convocatorias:"Lo ultimo de ...",title_convocatorias:"Convocatorias, Comunicados y Avisos",pretitle_cursos:"Lo ultimo de ...",title_cursos:"Curso y Seminarios",pretitle_autoridades:"Nuestras",title_autoridades:"Autoridades",title_index_organigrama:"Organigrama de la carrera de",title_categories:"Categorias",text_categories:"Estudiar en la Universidad Pública de El Alto es un privilegio que implica responsabilidad y entrega, pero también es una oportunidad para crecer y alcanzar nuestros sueños.",textBackground_categories:"Upea",title_contacto:"Contacto",pretitle_contacto:"contactate con la universidad para mas informacion sobre la carrera.",title_about:"Historia de la carrera"}},actions:{asignarInstitucion:function(t){this.institucion=t},asignarCarreraLinksExternos:function(t){this.carrera_links_externos=t},asignarConvocatorias:function(t){this.carrera_convocatorias=t},asignarComunicados:function(t){this.carrera_comunicados=t},asignarAvisos:function(t){this.carrera_avisos=t},asignarCursos:function(t){this.carrera_cursos=t},asignarSeminarios:function(t){this.carrera_seminarios=t},asignarFotosPagina:function(t){this.fotosPagina=t},asignarFotosPortada:function(t){this.fotosPortada=t},asignarServicios:function(t){this.carrera_servicios=t},asignarOfertasAcademicas:function(t){this.carrera_ofertasacademicas=t},asignarPublicaciones:function(t){this.carrera_publicaciones=t},asignarGacetas:function(t){this.carrera_gacetas=t},asignarEventos:function(t){this.carrera_eventos=t},asignarVideos:function(t){this.carrera_videos=t}}})},709:function(t,e,n){"use strict";n.r(e);var o=n(11),r=(n(77),n(708)),c={props:["hideBGCOLOR"],asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.$axios,o=Object(r.a)(),null!=Object(r.a)().institucion){e.next=7;break}return e.next=5,n.$get("/api/InstitucionUPEA/7");case 5:c=e.sent,o.asignarInstitucion(c.Descripcion);case 7:case"end":return e.stop()}}),e)})))()},data:function(){return{url_api:"https://serviciopagina.upea.bo",carrera_celular1:Object(r.a)().institucion.institucion_celular1,carrera_celular2:Object(r.a)().institucion.institucion_celular2,carrera_telefono1:Object(r.a)().institucion.institucion_telefono1,carrera_telefono2:Object(r.a)().institucion.institucion_telefono2,carrera_correo1:Object(r.a)().institucion.institucion_correo1,carrera_correo2:Object(r.a)().institucion_correo2,carrera_facebook:Object(r.a)().institucion.institucion_facebook,carrera_youtube:Object(r.a)().institucion.institucion_youtube,carrera_twitter:Object(r.a)().institucion.institucion_twitter,carrera_direccion:Object(r.a)().institucion.institucion_direccion,carrera_logo:Object(r.a)().institucion.institucion_logo,carrera_nombre:Object(r.a)().institucion.institucion_nombre}}},l=n(53),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("footer",{class:"".concat(t.hideBGCOLOR?"":"sub-bg")},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-4"},[e("div",{staticClass:"item md-mb50"},[t._m(0),t._v(" "),e("ul",[e("li",[e("span",{staticClass:"icon pe-7s-map-marker"}),t._v(" "),e("div",{staticClass:"cont"},[e("h6",[t._v("direccion")]),t._v(" "),e("p",[t._v(t._s(t.carrera_direccion))])])]),t._v(" "),e("li",[e("span",{staticClass:"icon pe-7s-mail"}),t._v(" "),e("div",{staticClass:"cont"},[e("h6",[t._v("Correo")]),t._v(" "),e("p",[t._v(t._s(t.carrera_correo1))])])]),t._v(" "),e("li",[e("span",{staticClass:"icon pe-7s-call"}),t._v(" "),e("div",{staticClass:"cont"},[e("h6",[t._v("Telefono")]),t._v(" "),e("p",[t._v(t._s(t.carrera_telefono1))])])])])])]),t._v(" "),e("div",{staticClass:"col-lg-4"}),t._v(" "),e("div",{staticClass:"col-lg-4"},[e("div",{staticClass:"item"},[e("div",{staticClass:"logo"},[e("img",{attrs:{src:t.url_api+"/InstitucionUpea/"+t.carrera_logo,alt:"logo"}}),t._v(" "),e("span",[t._v(t._s(t.carrera_nombre))])]),t._v(" "),e("div",{staticClass:"social"},[e("a",{attrs:{href:t.carrera_facebook,target:"_blank"}},[e("i",{staticClass:"fab fa-facebook-f"})]),t._v(" "),e("a",{attrs:{href:t.carrera_twitter,target:"_blank"}},[e("i",{staticClass:"fab fa-twitter"})]),t._v(" "),e("a",{attrs:{href:t.carrera_youtube,target:"_blank"}},[e("i",{staticClass:"fab fa-youtube"})])]),t._v(" "),t._m(1)])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"title"},[t("h5",[this._v("Contacta con Nosotros")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"copy-right"},[e("p",[t._v("\n              © 2023, Todos los derechos reservados \n              "),e("span",[t._v("Universidad Publica de El Alto")]),t._v(".\n            ")]),t._v(" "),e("p",[t._v("Desarrollador "),e("a",{attrs:{target:"_blank",href:"https://www.facebook.com/profile.php?id=100008367045999"}},[t._v("Cvm")])])])}],!1,null,"78e3ff5f",null);e.default=component.exports;installComponents(component,{Footer:n(709).default})},710:function(t,e,n){"use strict";e.a=function(t){var e=[];if(!t.parentNode)return e;for(var n=t.parentNode.firstChild;n;)1===n.nodeType&&n!==t&&e.push(n),n=n.nextSibling;return e}},711:function(t,e,n){"use strict";n.r(e);var o=n(11),r=(n(62),n(54),n(21),n(77),n(708)),c=n(710),l={props:["lr","theme","nr"],asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.$axios,e.prev=1,o=Object(r.a)(),null!=Object(r.a)().carrera_links_externos){e.next=8;break}return e.next=6,n.$get("/api/linksIntExtAll/7");case 6:c=e.sent,o.asignarCarreraLinksExternos(c);case 8:if(null!=Object(r.a)().institucion){e.next=13;break}return e.next=11,n.$get("/api/InstitucionUPEA/7");case 11:l=e.sent,o.asignarInstitucion(l.Descripcion);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.error("el error es: ",e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})))()},data:function(){return{url_api:"https://serviciopagina.upea.bo",carrera_logo:Object(r.a)().institucion.institucion_logo,carrera_nombre:Object(r.a)().institucion.institucion_nombre,carrera_links:Object(r.a)().carrera_links_externos}},created:function(){},methods:{handleDropdown:function(t){if(Object(c.a)(t.target.parentElement).filter((function(t){return t.classList.contains("show")})).map((function(t){t.classList.remove("show"),t.childNodes[0]&&t.childNodes[0].setAttribute("aria-expanded",!1),t.childNodes[2]&&t.childNodes[2].classList.remove("show")})),t.target.setAttribute("aria-expanded",!0),t.target.parentElement){t.target.parentElement.classList.toggle("show");var e=t.target.parentElement.childNodes[2];e&&e.classList.toggle("show")}},handleMobileDropdown:function(t){document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans")}}},d=n(53),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("nav",{ref:t.nr,staticClass:"navbar navbar-expand-lg change",class:"light"===t.theme?"light":""},[e("div",{staticClass:"container"},[e("NuxtLink",{staticClass:"logo",attrs:{to:"/"}},["light"===t.theme?e("img",{ref:"lr",attrs:{src:"/img/logo-dark.png",alt:"logo"}}):"themeD"===t.theme?e("img",{ref:"lr",attrs:{src:"/img/logo-light.png",alt:"logo"}}):e("img",{ref:"lr",attrs:{src:t.url_api+"/InstitucionUpea/"+t.carrera_logo,alt:"logo"}})]),t._v(" "),e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},on:{click:t.handleMobileDropdown}},[t._m(0)]),t._v(" "),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav ml-auto"},[e("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[e("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Inicio\n          ")]),t._v(" "),e("div",{staticClass:"dropdown-menu"},[e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/about/about-dark"}},[t._v(" \n              Sobre Nosotros\n            ")])],1)]),t._v(" "),e("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[e("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Convocatorias\n          ")]),t._v(" "),e("div",{staticClass:"dropdown-menu"},[e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/convocatorias"}},[t._v("\n              Convocatorias\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/comunicados"}},[t._v("\n              Comunicados\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/avisos"}},[t._v("\n              Avisos\n            ")])],1)]),t._v(" "),e("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[e("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Cursos\n          ")]),t._v(" "),e("div",{staticClass:"dropdown-menu"},[e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/cursos"}},[t._v("\n              Cursos\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/seminarios"}},[t._v("\n              Seminarios\n            ")])],1)]),t._v(" "),e("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[e("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Mas\n          ")]),t._v(" "),e("div",{staticClass:"dropdown-menu"},[e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/servicios"}},[t._v("\n              Servicios\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/ofertasacademicas"}},[t._v("\n              Ofertas Academicas\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/publicaciones"}},[t._v("\n              Publicaciones\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/gacetas"}},[t._v("\n              Gacetas\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/eventos"}},[t._v("\n              Eventos\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/videos"}},[t._v("\n              Videos\n            ")])],1)]),t._v(" "),e("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[e("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Links\n          ")]),t._v(" "),e("div",{staticClass:"dropdown-menu"},t._l(t.carrera_links,(function(link,n){return e("a",{key:n,staticClass:"dropdown-item",attrs:{target:"_blank",href:link.ei_link}},[t._v("\n              "+t._s(link.ei_nombre)+"\n            ")])})),0)]),t._v(" "),e("li",{staticClass:"nav-item"},[e("NuxtLink",{staticClass:"nav-link",attrs:{to:"/contact/contact-dark"}},[t._v("\n            Contacto\n          ")])],1)])])],1)])}),[function(){var t=this._self._c;return t("span",{staticClass:"icon-bar"},[t("i",{staticClass:"fas fa-bars"})])}],!1,null,"26d2cc7e",null);e.default=component.exports},713:function(t,e,n){t.exports={}},716:function(t,e,n){"use strict";n(713)},718:function(t,e,n){"use strict";n.r(e);var o=n(11),r=(n(77),n(286),n(708)),c={props:{videoId:String,channel:String,isOpen:Boolean,youtube:{type:Object,default:function(){return{autoplay:1,cc_load_policy:1,color:null,controls:1,disablekb:0,enablejsapi:0,end:null,fs:1,h1:null,iv_load_policy:1,list:null,listType:null,loop:0,modestbranding:null,origin:null,playlist:null,playsinline:null,rel:0,showinfo:1,start:0,wmode:"transparent",theme:"dark"}}},ratio:{type:String,default:"16:9"},vimeo:{type:Object,default:function(){return{api:!1,autopause:!0,autoplay:!0,byline:!0,callback:null,color:null,height:null,loop:!1,maxheight:null,maxwidth:null,player_id:null,portrait:!0,title:!0,width:null,xhtml:!1}}},allowFullScreen:{type:Boolean,default:!0},animationSpeed:{type:Number,default:300},classNames:{type:Object,default:function(){return{modalVideoEffect:"modal-video-effect",modalVideo:"modal-video",modalVideoClose:"modal-video-close",modalVideoBody:"modal-video-body",modalVideoInner:"modal-video-inner",modalVideoIframeWrap:"modal-video-movie-wrap",modalVideoCloseBtn:"modal-video-close-btn"}}},aria:{type:Object,default:function(){return{openMessage:"Modal video opened",dismissBtnMessage:"Close the modal video"}}}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.$axios,e.prev=1,o=Object(r.a)(),null!=Object(r.a)().institucion){e.next=8;break}return e.next=6,n.$get("/api/InstitucionUPEA/7");case 6:c=e.sent,o.asignarInstitucion(c.Descripcion);case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error("error",e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))()},data:function(){return{src_video_institucion:Object(r.a)().institucion.institucion_link_video_vision}},methods:{getQueryString:function(t){var e="";for(var n in t)t.hasOwnProperty(n)&&null!==t[n]&&(e+=n+"="+t[n]+"&");return e.substr(0,e.length-1)},getYoutubeUrl:function(t,e){return"//www.youtube.com/embed/"+e+"?"+this.getQueryString(t)},getVimeoUrl:function(t,e){return"//player.vimeo.com/video/"+e+"?"+this.getQueryString(t)},getPadding:function(t){var e=t.split(":"),n=Number(e[0]);return 100*Number(e[1])/n+"%"}},computed:{fullVideoUrl:function(){return"youtube"===this.channel?this.getYoutubeUrl(this.youtube,this.videoId):"vimeo"===this.channel?this.getVimeoUrl(this.vimeo,this.videoId):void 0},paddingBottom:function(){return this.getPadding(this.ratio)}},watch:{isOpen:{handler:function(t){var e=this;this.$nextTick((function(){void 0!==e.$refs.closeBtn&&e.$refs.closeBtn.focus()}))},deep:!0}}},l=(n(716),n(53)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return t.isOpen?e("div",[e("div",{class:t.classNames.modalVideo,attrs:{tabIndex:"-1",role:"dialog","aria-label":t.aria.openMessage},on:{click:function(e){return t.$emit("update:isOpen",!1)},keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.$emit("update:isOpen",!1)}}},[e("div",{class:t.classNames.modalVideoBody},[e("button",{ref:"closeBtn",class:t.classNames.modalVideoCloseBtn,attrs:{"aria-label":t.aria.dismissBtnMessage},on:{click:function(e){return t.$emit("update:isOpen",!1)}}}),t._v(" "),e("div",{class:t.classNames.modalVideoInner},[e("div",{class:t.classNames.modalVideoIframeWrap,style:{"padding-bottom":t.paddingBottom}},[e("iframe",{attrs:{src:t.src_video_institucion,frameBorder:"0",allowFullScreen:t.allowFullScreen,tabIndex:"-1"}})])])])])]):t._e()}),[],!1,null,"3bd673e7",null);e.default=component.exports},719:function(t,e,n){var o=n(5),r=n(39),c=n(17),l=/"/g,d=o("".replace);t.exports=function(t,e,n,o){var v=c(r(t)),_="<"+e;return""!==n&&(_+=" "+n+'="'+d(c(o),l,"&quot;")+'"'),_+">"+v+"</"+e+">"}},720:function(t,e,n){var o=n(6);t.exports=function(t){return o((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},835:function(t,e,n){"use strict";var o=n(2),r=n(719);o({target:"String",proto:!0,forced:n(720)("small")},{small:function(){return r(this,"small","","")}})},836:function(t,e,n){"use strict";var o=n(2),r=n(719);o({target:"String",proto:!0,forced:n(720)("big")},{big:function(){return r(this,"big","","")}})},837:function(t,e,n){"use strict";var o=n(2),r=n(719);o({target:"String",proto:!0,forced:n(720)("link")},{link:function(t){return r(this,"a","href",t)}})},838:function(t,e,n){"use strict";n.r(e);n(835),n(836),n(837),n(56);var o={props:["projectHeaderData"]},r=n(53),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"page-header proj-det bg-img parallaxie valign",style:"background-image: url(".concat(t.projectHeaderData.projectHeaderImage,")"),attrs:{"data-overlay-dark":"4"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-7 col-md-9"},[e("div",{staticClass:"cont"},[e("h6",[t._v(t._s(t.projectHeaderData.title.small))]),t._v(" "),e("h2",[t._v(t._s(t.projectHeaderData.title.big))])])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-3"},[e("div",{staticClass:"item mt-30"},[e("h6",[t._v("Client")]),t._v(" "),e("p",[e("NuxtLink",{attrs:{to:t.projectHeaderData.clientURLLink}},[t._v("\n              "+t._s(t.projectHeaderData.clientURLName)+"\n            ")])],1)])]),t._v(" "),e("div",{staticClass:"col-lg-3"},[e("div",{staticClass:"item mt-30"},[e("h6",[t._v("Date")]),t._v(" "),e("p",[t._v(t._s(t.projectHeaderData.date))])])]),t._v(" "),e("div",{staticClass:"col-lg-3"},[e("div",{staticClass:"item mt-30"},[e("h6",[t._v("Categories")]),t._v(" "),e("p",t._l(t.projectHeaderData.categories,(function(n,o){return e("NuxtLink",{key:n.id,attrs:{to:n.link}},[t._v("\n              "+t._s(n.name)+"\n              "+t._s(t.projectHeaderData.categories.length!=o+1?" ,":"")+"\n            ")])})),1)])]),t._v(" "),e("div",{staticClass:"col-lg-3"},[e("div",{staticClass:"item mt-30"},[e("h6",[t._v("Tags")]),t._v(" "),e("p",t._l(t.projectHeaderData.tags,(function(n,o){return e("NuxtLink",{key:n.id,attrs:{to:"tag.link"}},[t._v("\n              "+t._s(n.name)+"\n              "+t._s(t.projectHeaderData.tags.length!=o+1?" ,":"")+"\n            ")])})),1)])])])])])}),[],!1,null,"faa41f94",null);e.default=component.exports},839:function(t,e,n){"use strict";n.r(e);n(56);var o={props:["projectIntroductionData"]},r=n(53),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"intro-section section-padding"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[t._m(0),t._v(" "),e("div",{staticClass:"col-lg-8 offset-lg-1 col-md-8"},[e("div",{staticClass:"text js-scroll__content"},[e("p",{staticClass:"extra-text"},[t._v("\n            "+t._s(t.projectIntroductionData.content)+"\n          ")]),t._v(" "),e("ul",{staticClass:"smp-list mt-30"},t._l(t.projectIntroductionData.spmList,(function(n){return e("li",{key:n.id},[t._v("\n              "+t._s(n.name)+"\n            ")])})),0)])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-3 col-md-4"},[e("div",{staticClass:"htit"},[e("h4",[e("span",[t._v("01 ")]),t._v(" Introduction")])])])}],!1,null,"aea13d04",null);e.default=component.exports},840:function(t,e,n){"use strict";n.r(e);var o={props:["projectGalleryData"]},r=n(53),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"projdtal"},[e("div",{staticClass:"popup-img"},[e("div",{staticClass:"row"},t._l(t.projectGalleryData,(function(n,o){return e("NuxtLink",{key:o,class:"col-md-".concat(o+1===t.projectGalleryData.length?"12":"3"," popimg"),attrs:{to:"#0"}},[e("img",{attrs:{alt:"",src:n}})])})),1)])])}),[],!1,null,"5a5df6f0",null);e.default=component.exports},841:function(t,e,n){"use strict";n.r(e);var o={props:["projectDescriptionData"]},r=n(53),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"intro-section section-padding"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[t._m(0),t._v(" "),e("div",{staticClass:"col-lg-8 offset-lg-1 col-md-8"},[e("div",{staticClass:"text js-scroll__content"},[e("p",{staticClass:"extra-text"},[t._v(t._s(t.projectDescriptionData.content))])])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-3 col-md-4"},[e("div",{staticClass:"htit"},[e("h4",[e("span",[t._v("02 ")]),t._v(" Description")])])])}],!1,null,"a930a848",null);e.default=component.exports},842:function(t,e,n){"use strict";n.r(e);var o={props:["projectVideoData"],data:function(){return{videoIsOpen:!1}},methods:{openVideo:function(){this.videoIsOpen=!this.videoIsOpen}},computed:{videoChannel:function(){return"vimeo"},videoId:function(){return"127203262"}}},r=n(53),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("section",[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"video-wrapper section-padding bg-img parallaxie valign",style:"\n          background-image: url(".concat(t.projectVideoData.projectHeaderImage,")"),attrs:{"data-overlay-dark":"4"}},[e("div",{staticClass:"full-width text-center"},[e("ModalVideo",{attrs:{channel:t.videoChannel,videoId:t.videoId,isOpen:t.videoIsOpen},on:{"update:isOpen":function(e){t.videoIsOpen=e},"update:is-open":function(e){t.videoIsOpen=e}}}),t._v(" "),e("a",{staticClass:"vid",on:{click:t.openVideo}},[t._m(0)])],1)])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"vid-butn"},[t("span",{staticClass:"icon"},[t("i",{staticClass:"fas fa-play"})])])}],!1,null,"27d4a85e",null);e.default=component.exports;installComponents(component,{ModalVideo:n(718).default})},843:function(t,e,n){"use strict";n.r(e);var o={},r=n(53),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"next-prog section-padding"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"box"},[e("div",{staticClass:"bg-img valign",staticStyle:{"background-image":"url(/img/portfolio/project2/6.jpg)"},attrs:{"data-overlay-dark":"4"}},[e("div",{staticClass:"caption ontop valign"},[e("div",{staticClass:"o-hidden full-width"},[e("h1",[e("NuxtLink",{attrs:{to:"#0"}},[e("div",{staticClass:"stroke"},[t._v("Natural plus modern.")])])],1)])]),t._v(" "),e("div",{staticClass:"copy-cap valign"},[e("div",{staticClass:"cap full-width"},[e("h1",[e("NuxtLink",{attrs:{to:"#0"}},[e("span",[t._v("Natural plus modern.")])])],1)])])])])])])])])}),[],!1,null,"9c586c9c",null);e.default=component.exports},847:function(t){t.exports=JSON.parse('{"id":1,"title":{"small":"art & illustration","big":"Inspiring new space."},"clientURLLink":"#","projectHeaderImage":"/img/portfolio/project2/bg.jpg","videoLink":"https://vimeo.com/127203262","clientURLName":"Envato.com","date":"6 August 2022","categories":[{"id":1,"name":"Web Design","link":"#"},{"id":2,"name":"WordPress","link":"#"}],"tags":[{"id":1,"name":"Minimal","link":"#"},{"id":2,"name":"Modern","link":"#"},{"id":3,"name":"Design","link":"#"}],"intro":{"content":"We are a Creative Agency & Startup Studio that provides Digital Products and Services turns to focus on client success. We specialize in user interface design, including front-end development which we consider to be an integral part.","spmList":[{"id":1,"name":"Aenean sollicitudin"},{"id":2,"name":"lorem quis bibendum auctor"},{"id":31,"name":"nisi elit conseq uat ipsum"},{"id":4,"name":"nec sagittis sem nibh id elit"}]},"gallery":["/img/portfolio/project2/1.jpg","/img/portfolio/project2/2.jpg","/img/portfolio/project2/3.jpg","/img/portfolio/project2/5.jpg","/img/portfolio/project2/7.jpg"],"description":{"content":"We are a Creative Agency & Startup Studio that provides Digital Products and Services turns to focus on client success. We specialize in user interface design, including front-end development which we consider to be an integral part."}}')}}]);