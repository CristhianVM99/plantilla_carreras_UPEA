(window.webpackJsonp=window.webpackJsonp||[]).push([[132,27,45,74,76],{708:function(t,r,e){"use strict";e.d(r,"a",(function(){return n}));var o=e(113),n=Object(o.c)("Institucion",{state:function(){return{url_api:"https://serviciopagina.upea.bo",institucion:null,nombre:"ingenieria de sistemas",carrera_links_externos:null,carrera_convocatorias:null,carrera_avisos:null,carrera_comunicados:null,carrera_cursos:null,carrera_seminarios:null,carrera_autoridades:null,carrera_servicios:null,carrera_ofertasacademicas:null,carrera_publicaciones:null,carrera_gacetas:null,carrera_eventos:null,carrera_videos:null,fotosPagina:null,fotosPortada:null,title_index_about:"Perfil y Carrera de Licenciatura en ",title_index_services:"Informacion sobre la carrera",title_funfact:"Todos los comunicados de la Carrera",pretitle_convocatorias:"Lo ultimo de ...",title_convocatorias:"Convocatorias, Comunicados y Avisos",pretitle_cursos:"Lo ultimo de ...",title_cursos:"Curso y Seminarios",pretitle_autoridades:"Nuestras",title_autoridades:"Autoridades",title_index_organigrama:"Organigrama de la carrera de",title_categories:"Categorias",text_categories:"Estudiar en la Universidad Pública de El Alto es un privilegio que implica responsabilidad y entrega, pero también es una oportunidad para crecer y alcanzar nuestros sueños.",textBackground_categories:"Upea",title_contacto:"Contacto",pretitle_contacto:"contactate con la universidad para mas informacion sobre la carrera.",title_about:"Historia de la carrera"}},actions:{asignarInstitucion:function(t){this.institucion=t},asignarCarreraLinksExternos:function(t){this.carrera_links_externos=t},asignarConvocatorias:function(t){this.carrera_convocatorias=t},asignarComunicados:function(t){this.carrera_comunicados=t},asignarAvisos:function(t){this.carrera_avisos=t},asignarCursos:function(t){this.carrera_cursos=t},asignarSeminarios:function(t){this.carrera_seminarios=t},asignarFotosPagina:function(t){this.fotosPagina=t},asignarFotosPortada:function(t){this.fotosPortada=t},asignarServicios:function(t){this.carrera_servicios=t},asignarOfertasAcademicas:function(t){this.carrera_ofertasacademicas=t},asignarPublicaciones:function(t){this.carrera_publicaciones=t},asignarGacetas:function(t){this.carrera_gacetas=t},asignarEventos:function(t){this.carrera_eventos=t},asignarVideos:function(t){this.carrera_videos=t}}})},709:function(t,r,e){"use strict";e.r(r);var o=e(11),n=(e(77),e(708)),c={props:["hideBGCOLOR"],asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function r(){var e,o,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e=t.$axios,o=Object(n.a)(),null!=Object(n.a)().institucion){r.next=7;break}return r.next=5,e.$get("/api/InstitucionUPEA/7");case 5:c=r.sent,o.asignarInstitucion(c.Descripcion);case 7:case"end":return r.stop()}}),r)})))()},data:function(){return{url_api:"https://serviciopagina.upea.bo",carrera_celular1:Object(n.a)().institucion.institucion_celular1,carrera_celular2:Object(n.a)().institucion.institucion_celular2,carrera_telefono1:Object(n.a)().institucion.institucion_telefono1,carrera_telefono2:Object(n.a)().institucion.institucion_telefono2,carrera_correo1:Object(n.a)().institucion.institucion_correo1,carrera_correo2:Object(n.a)().institucion_correo2,carrera_facebook:Object(n.a)().institucion.institucion_facebook,carrera_youtube:Object(n.a)().institucion.institucion_youtube,carrera_twitter:Object(n.a)().institucion.institucion_twitter,carrera_direccion:Object(n.a)().institucion.institucion_direccion,carrera_logo:Object(n.a)().institucion.institucion_logo,carrera_nombre:Object(n.a)().institucion.institucion_nombre}}},l=e(53),component=Object(l.a)(c,(function(){var t=this,r=t._self._c;return r("footer",{class:"".concat(t.hideBGCOLOR?"":"sub-bg")},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-4"},[r("div",{staticClass:"item md-mb50"},[t._m(0),t._v(" "),r("ul",[r("li",[r("span",{staticClass:"icon pe-7s-map-marker"}),t._v(" "),r("div",{staticClass:"cont"},[r("h6",[t._v("direccion")]),t._v(" "),r("p",[t._v(t._s(t.carrera_direccion))])])]),t._v(" "),r("li",[r("span",{staticClass:"icon pe-7s-mail"}),t._v(" "),r("div",{staticClass:"cont"},[r("h6",[t._v("Correo")]),t._v(" "),r("p",[t._v(t._s(t.carrera_correo1))])])]),t._v(" "),r("li",[r("span",{staticClass:"icon pe-7s-call"}),t._v(" "),r("div",{staticClass:"cont"},[r("h6",[t._v("Telefono")]),t._v(" "),r("p",[t._v(t._s(t.carrera_telefono1))])])])])])]),t._v(" "),r("div",{staticClass:"col-lg-4"}),t._v(" "),r("div",{staticClass:"col-lg-4"},[r("div",{staticClass:"item"},[r("div",{staticClass:"logo"},[r("img",{attrs:{src:t.url_api+"/InstitucionUpea/"+t.carrera_logo,alt:"logo"}}),t._v(" "),r("span",[t._v(t._s(t.carrera_nombre))])]),t._v(" "),r("div",{staticClass:"social"},[r("a",{attrs:{href:t.carrera_facebook,target:"_blank"}},[r("i",{staticClass:"fab fa-facebook-f"})]),t._v(" "),r("a",{attrs:{href:t.carrera_twitter,target:"_blank"}},[r("i",{staticClass:"fab fa-twitter"})]),t._v(" "),r("a",{attrs:{href:t.carrera_youtube,target:"_blank"}},[r("i",{staticClass:"fab fa-youtube"})])]),t._v(" "),t._m(1)])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"title"},[t("h5",[this._v("Contacta con Nosotros")])])},function(){var t=this,r=t._self._c;return r("div",{staticClass:"copy-right"},[r("p",[t._v("\n              © 2023, Todos los derechos reservados \n              "),r("span",[t._v("Universidad Publica de El Alto")]),t._v(".\n            ")]),t._v(" "),r("p",[t._v("Desarrollador "),r("a",{attrs:{target:"_blank",href:"https://www.facebook.com/profile.php?id=100008367045999"}},[t._v("Cvm")])])])}],!1,null,"78e3ff5f",null);r.default=component.exports;installComponents(component,{Footer:e(709).default})},710:function(t,r,e){"use strict";r.a=function(t){var r=[];if(!t.parentNode)return r;for(var e=t.parentNode.firstChild;e;)1===e.nodeType&&e!==t&&r.push(e),e=e.nextSibling;return r}},711:function(t,r,e){"use strict";e.r(r);var o=e(11),n=(e(62),e(54),e(21),e(77),e(708)),c=e(710),l={props:["lr","theme","nr"],asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function r(){var e,o,c,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e=t.$axios,r.prev=1,o=Object(n.a)(),null!=Object(n.a)().carrera_links_externos){r.next=8;break}return r.next=6,e.$get("/api/linksIntExtAll/7");case 6:c=r.sent,o.asignarCarreraLinksExternos(c);case 8:if(null!=Object(n.a)().institucion){r.next=13;break}return r.next=11,e.$get("/api/InstitucionUPEA/7");case 11:l=r.sent,o.asignarInstitucion(l.Descripcion);case 13:r.next=18;break;case 15:r.prev=15,r.t0=r.catch(1),console.error("el error es: ",r.t0);case 18:case"end":return r.stop()}}),r,null,[[1,15]])})))()},data:function(){return{url_api:"https://serviciopagina.upea.bo",carrera_logo:Object(n.a)().institucion.institucion_logo,carrera_nombre:Object(n.a)().institucion.institucion_nombre,carrera_links:Object(n.a)().carrera_links_externos}},created:function(){},methods:{handleDropdown:function(t){if(Object(c.a)(t.target.parentElement).filter((function(t){return t.classList.contains("show")})).map((function(t){t.classList.remove("show"),t.childNodes[0]&&t.childNodes[0].setAttribute("aria-expanded",!1),t.childNodes[2]&&t.childNodes[2].classList.remove("show")})),t.target.setAttribute("aria-expanded",!0),t.target.parentElement){t.target.parentElement.classList.toggle("show");var r=t.target.parentElement.childNodes[2];r&&r.classList.toggle("show")}},handleMobileDropdown:function(t){document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans")}}},d=e(53),component=Object(d.a)(l,(function(){var t=this,r=t._self._c;return r("nav",{ref:t.nr,staticClass:"navbar navbar-expand-lg change",class:"light"===t.theme?"light":""},[r("div",{staticClass:"container"},[r("NuxtLink",{staticClass:"logo",attrs:{to:"/"}},["light"===t.theme?r("img",{ref:"lr",attrs:{src:"/img/logo-dark.png",alt:"logo"}}):"themeD"===t.theme?r("img",{ref:"lr",attrs:{src:"/img/logo-light.png",alt:"logo"}}):r("img",{ref:"lr",attrs:{src:t.url_api+"/InstitucionUpea/"+t.carrera_logo,alt:"logo"}})]),t._v(" "),r("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},on:{click:t.handleMobileDropdown}},[t._m(0)]),t._v(" "),r("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[r("ul",{staticClass:"navbar-nav ml-auto"},[r("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[r("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Inicio\n          ")]),t._v(" "),r("div",{staticClass:"dropdown-menu"},[r("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/about/about-dark"}},[t._v(" \n              Sobre Nosotros\n            ")])],1)]),t._v(" "),r("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[r("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Convocatorias\n          ")]),t._v(" "),r("div",{staticClass:"dropdown-menu"},[r("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/convocatorias"}},[t._v("\n              Convocatorias\n            ")]),t._v(" "),r("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/comunicados"}},[t._v("\n              Comunicados\n            ")]),t._v(" "),r("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/avisos"}},[t._v("\n              Avisos\n            ")])],1)]),t._v(" "),r("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[r("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Cursos\n          ")]),t._v(" "),r("div",{staticClass:"dropdown-menu"},[r("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/cursos"}},[t._v("\n              Cursos\n            ")]),t._v(" "),r("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/seminarios"}},[t._v("\n              Seminarios\n            ")])],1)]),t._v(" "),r("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[r("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Mas\n          ")]),t._v(" "),r("div",{staticClass:"dropdown-menu"},[r("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/servicios"}},[t._v("\n              Servicios\n            ")]),t._v(" "),r("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/ofertasacademicas"}},[t._v("\n              Ofertas Academicas\n            ")]),t._v(" "),r("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/publicaciones"}},[t._v("\n              Publicaciones\n            ")]),t._v(" "),r("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/gacetas"}},[t._v("\n              Gacetas\n            ")]),t._v(" "),r("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/eventos"}},[t._v("\n              Eventos\n            ")]),t._v(" "),r("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/videos"}},[t._v("\n              Videos\n            ")])],1)]),t._v(" "),r("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[r("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Links\n          ")]),t._v(" "),r("div",{staticClass:"dropdown-menu"},t._l(t.carrera_links,(function(link,e){return r("a",{key:e,staticClass:"dropdown-item",attrs:{target:"_blank",href:link.ei_link}},[t._v("\n              "+t._s(link.ei_nombre)+"\n            ")])})),0)]),t._v(" "),r("li",{staticClass:"nav-item"},[r("NuxtLink",{staticClass:"nav-link",attrs:{to:"/contact/contact-dark"}},[t._v("\n            Contacto\n          ")])],1)])])],1)])}),[function(){var t=this._self._c;return t("span",{staticClass:"icon-bar"},[t("i",{staticClass:"fas fa-bars"})])}],!1,null,"26d2cc7e",null);r.default=component.exports},714:function(t,r,e){"use strict";e(21),e(47);r.a=function(){var t,r=document.querySelectorAll(".gallery");r.length>=1&&r.forEach((function(r){t=new Isotope(r,{itemSelector:".items"})}));var e=document.querySelectorAll(".gallery-mons");e.length>=1&&e.forEach((function(r){t=new Isotope(r,{itemSelector:".items",masonry:{columnWidth:".width2"}})}));var o=document.querySelector(".filtering");if(o){var n=function(t){t.addEventListener("click",(function(r){matchesSelector(r.target,"span")&&(t.querySelector(".active").classList.remove("active"),r.target.classList.add("active"))}))};o.addEventListener("click",(function(r){if(matchesSelector(r.target,"span")){var e=r.target.getAttribute("data-filter");t.arrange({filter:e})}}));for(var c=document.querySelectorAll(".filtering"),i=0,l=c.length;i<l;i++){n(c[i])}}}},734:function(t,r,e){"use strict";e.r(r);var o={props:["sliderRef","title","text","Background"]},n=e(53),component=Object(n.a)(o,(function(){var t=this,r=t._self._c;return r("header",{ref:t.sliderRef,staticClass:"works-header fixed-slider hfixd valign sub-bg"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-lg-7 col-md-9 static"},[r("div",{staticClass:"capt mt-50"},[r("div",{staticClass:"parlx text-center"},[r("h1",{staticClass:"color-font"},[t._v(t._s(t.title?t.title:"amazing works"))]),t._v(" "),r("p",[t._v("\n              "+t._s(t.text?t.text:"Creativity involves breaking out of expected & repeatable patterns in order to look at things in different way than ever before.")+"\n            ")])]),t._v(" "),r("div",{staticClass:"bactxt custom-font valign"},[r("span",{staticClass:"full-width"},[t._v(t._s(t.Background?t.Background:"Works"))])])])])])])])}),[],!1,null,"3aa602e0",null);r.default=component.exports},760:function(t,r,e){"use strict";e.r(r);e(92);var o=e(714),n={props:["grid","filterPosition","hideFilter"],mounted:function(){setTimeout((function(){Object(o.a)()}),1e3)}},c=e(53),component=Object(c.a)(n,(function(){var t=this,r=t._self._c;return r("section",{class:"".concat(t.grid&&3===t.grid?"three-column":null," portfolio section-padding pb-70")},[t.hideFilter?t._e():r("div",{staticClass:"container"},[t._m(0)]),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[t.hideFilter?t._e():r("div",{class:"filtering ".concat("center"===t.filterPosition?"text-center":"left"===t.filterPosition?"text-left":"text-right"," col-12")},[t._m(1)]),t._v(" "),r("div",{staticClass:"gallery full-width"},[r("div",{class:"".concat(3===t.grid?"col-lg-4 col-md-6":2===t.grid?"col-md-6":"col-12"," items graphic wow fadeInUp"),attrs:{"data-wow-delay":".4s"}},[r("div",{staticClass:"item-img"},[r("NuxtLink",{staticClass:"imago wow",attrs:{to:"/project-details2/project-details2-dark"}},[r("img",{attrs:{src:"/img/portfolio/portfolio/1/1.jpg",alt:"image"}}),t._v(" "),r("div",{staticClass:"item-img-overlay"})])],1),t._v(" "),t._m(2)]),t._v(" "),r("div",{class:"".concat(3===t.grid?"col-lg-4 col-md-6":2===t.grid?"col-md-6":"col-12"," items web wow fadeInUp"),attrs:{"data-wow-delay":".4s"}},[r("div",{staticClass:"item-img"},[r("NuxtLink",{staticClass:"imago wow",attrs:{to:"/project-details2/project-details2-dark"}},[r("img",{attrs:{src:"/img/portfolio/portfolio/1/2.jpg",alt:"image"}}),t._v(" "),r("div",{staticClass:"item-img-overlay"})])],1),t._v(" "),t._m(3)]),t._v(" "),r("div",{class:"".concat(3===t.grid?"col-lg-4 col-md-6":2===t.grid?"col-md-6":"col-12"," items brand wow fadeInUp"),attrs:{"data-wow-delay":".4s"}},[r("div",{staticClass:"item-img"},[r("NuxtLink",{staticClass:"imago wow",attrs:{to:"/project-details2/project-details2-dark"}},[r("img",{attrs:{src:"/img/portfolio/portfolio/1/3.jpg",alt:"image"}}),t._v(" "),r("div",{staticClass:"item-img-overlay"})])],1),t._v(" "),t._m(4)]),t._v(" "),r("div",{class:"".concat(3===t.grid?"col-lg-4 col-md-6":2===t.grid?"col-md-6":"col-12"," items graphic wow fadeInUp"),attrs:{"data-wow-delay":".4s"}},[r("div",{staticClass:"item-img"},[r("NuxtLink",{staticClass:"imago wow",attrs:{to:"/project-details2/project-details2-dark"}},[r("img",{attrs:{src:"/img/portfolio/portfolio/1/4.jpg",alt:"image"}}),t._v(" "),r("div",{staticClass:"item-img-overlay"})])],1),t._v(" "),t._m(5)]),t._v(" "),r("div",{class:"".concat(3===t.grid?"col-lg-4 col-md-6":2===t.grid?"col-md-6":"col-12"," items web wow fadeInUp"),attrs:{"data-wow-delay":".4s"}},[r("div",{staticClass:"item-img"},[r("NuxtLink",{staticClass:"imago wow",attrs:{to:"/project-details2/project-details2-dark"}},[r("img",{attrs:{src:"/img/portfolio/portfolio/1/5.jpg",alt:"image"}}),t._v(" "),r("div",{staticClass:"item-img-overlay"})])],1),t._v(" "),t._m(6)]),t._v(" "),r("div",{class:"".concat(3===t.grid?"col-lg-4 col-md-6":2===t.grid?"col-md-6":"col-12"," items brand wow fadeInUp"),attrs:{"data-wow-delay":".4s"}},[r("div",{staticClass:"item-img"},[r("NuxtLink",{staticClass:"imago wow",attrs:{to:"/project-details2/project-details2-dark"}},[r("img",{attrs:{src:"/img/portfolio/portfolio/1/6.jpg",alt:"image"}}),t._v(" "),r("div",{staticClass:"item-img-overlay"})])],1),t._v(" "),t._m(7)])])])])])}),[function(){var t=this,r=t._self._c;return r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-lg-8 col-md-10"},[r("div",{staticClass:"sec-head text-center"},[r("h6",{staticClass:"wow fadeIn",attrs:{"data-wow-delay":".5s"}},[t._v("Portfolio")]),t._v(" "),r("h3",{staticClass:"wow color-font"},[t._v("\n            Our Recent Web Design & "),r("br"),t._v("\n            Some Past Projects.\n          ")])])])])},function(){var t=this,r=t._self._c;return r("div",{staticClass:"filter"},[r("span",{staticClass:"active",attrs:{"data-filter":"*"}},[t._v(" All ")]),t._v(" "),r("span",{attrs:{"data-filter":".brand"}},[t._v("Branding")]),t._v(" "),r("span",{attrs:{"data-filter":".web"}},[t._v("Mobile App")]),t._v(" "),r("span",{attrs:{"data-filter":".graphic"}},[t._v("Creative")])])},function(){var t=this,r=t._self._c;return r("div",{staticClass:"cont"},[r("h6",[t._v("Creativity Demand")]),t._v(" "),r("span",[r("a",{attrs:{href:"#0"}},[t._v("Design")]),t._v(", "),r("a",{attrs:{href:"#0"}},[t._v("WordPress")])])])},function(){var t=this,r=t._self._c;return r("div",{staticClass:"cont"},[r("h6",[t._v("Through The Breaking")]),t._v(" "),r("span",[r("a",{attrs:{href:"#0"}},[t._v("Design")]),t._v(", "),r("a",{attrs:{href:"#0"}},[t._v("WordPress")])])])},function(){var t=this,r=t._self._c;return r("div",{staticClass:"cont"},[r("h6",[t._v("Create With Creatives")]),t._v(" "),r("span",[r("a",{attrs:{href:"#0"}},[t._v("Design")]),t._v(", "),r("a",{attrs:{href:"#0"}},[t._v("WordPress")])])])},function(){var t=this,r=t._self._c;return r("div",{staticClass:"cont"},[r("h6",[t._v("Energies of Love")]),t._v(" "),r("span",[r("a",{attrs:{href:"#0"}},[t._v("Design")]),t._v(", "),r("a",{attrs:{href:"#0"}},[t._v("WordPress")])])])},function(){var t=this,r=t._self._c;return r("div",{staticClass:"cont"},[r("h6",[t._v("See It Yourself")]),t._v(" "),r("span",[r("a",{attrs:{href:"#0"}},[t._v("Design")]),t._v(", "),r("a",{attrs:{href:"#0"}},[t._v("WordPress")])])])},function(){var t=this,r=t._self._c;return r("div",{staticClass:"cont"},[r("h6",[t._v("Blast From The Past")]),t._v(" "),r("span",[r("a",{attrs:{href:"#0"}},[t._v("Design")]),t._v(", "),r("a",{attrs:{href:"#0"}},[t._v("WordPress")])])])}],!1,null,"b3e5e8de",null);r.default=component.exports},925:function(t,r,e){"use strict";e.r(r);var o={layout:"light",head:function(){return{titleTemplate:"%s - Works 2 Light"}},mounted:function(){if(this.$refs.fixedSlider.$el&&this.$refs.MainContent){var t=this.$refs.fixedSlider.$el.offsetHeight;this.$refs.MainContent.style.marginTop=t+"px"}var r=this.$refs.navbar.$el;window.pageYOffset>300?r.classList.add("nav-scroll"):r.classList.remove("nav-scroll"),window.addEventListener("scroll",(function(){window.pageYOffset>300?r.classList.add("nav-scroll"):r.classList.remove("nav-scroll")}))}},n=e(53),component=Object(n.a)(o,(function(){var t=this,r=t._self._c;return r("div",[t._m(0),t._v(" "),r("Navbar",{ref:"navbar",attrs:{lr:"logoRef",theme:"light"}}),t._v(" "),r("WorksHeader",{ref:"fixedSlider"}),t._v(" "),r("div",{ref:"MainContent",staticClass:"main-content"},[r("WorksStyle2",{attrs:{grid:3,filterPosition:"center"}}),t._v(" "),r("Footer")],1)],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"circle-bg"},[t("div",{staticClass:"circle-color fixed"},[t("div",{staticClass:"gradient-circle"}),this._v(" "),t("div",{staticClass:"gradient-circle two"})])])}],!1,null,"a2eafe2c",null);r.default=component.exports;installComponents(component,{Navbar:e(711).default,WorksHeader:e(734).default,WorksStyle2:e(760).default,Footer:e(709).default})}}]);