(window.webpackJsonp=window.webpackJsonp||[]).push([[129,27,45,74,75],{708:function(t,o,e){"use strict";e.d(o,"a",(function(){return n}));var r=e(113),n=Object(r.c)("Institucion",{state:function(){return{url_api:"https://serviciopagina.upea.bo",institucion:null,nombre:"ingenieria de sistemas",carrera_links_externos:null,carrera_convocatorias:null,carrera_avisos:null,carrera_comunicados:null,carrera_cursos:null,carrera_seminarios:null,carrera_autoridades:null,carrera_servicios:null,carrera_ofertasacademicas:null,carrera_publicaciones:null,carrera_gacetas:null,carrera_eventos:null,carrera_videos:null,fotosPagina:null,fotosPortada:null,title_index_about:"Perfil y Carrera de Licenciatura en ",title_index_services:"Informacion sobre la carrera",title_funfact:"Todos los comunicados de la Carrera",pretitle_convocatorias:"Lo ultimo de ...",title_convocatorias:"Convocatorias, Comunicados y Avisos",pretitle_cursos:"Lo ultimo de ...",title_cursos:"Curso y Seminarios",pretitle_autoridades:"Nuestras",title_autoridades:"Autoridades",title_index_organigrama:"Organigrama de la carrera de",title_categories:"Categorias",text_categories:"Estudiar en la Universidad Pública de El Alto es un privilegio que implica responsabilidad y entrega, pero también es una oportunidad para crecer y alcanzar nuestros sueños.",textBackground_categories:"Upea",title_contacto:"Contacto",pretitle_contacto:"contactate con la universidad para mas informacion sobre la carrera.",title_about:"Historia de la carrera"}},actions:{asignarInstitucion:function(t){this.institucion=t},asignarCarreraLinksExternos:function(t){this.carrera_links_externos=t},asignarConvocatorias:function(t){this.carrera_convocatorias=t},asignarComunicados:function(t){this.carrera_comunicados=t},asignarAvisos:function(t){this.carrera_avisos=t},asignarCursos:function(t){this.carrera_cursos=t},asignarSeminarios:function(t){this.carrera_seminarios=t},asignarFotosPagina:function(t){this.fotosPagina=t},asignarFotosPortada:function(t){this.fotosPortada=t},asignarServicios:function(t){this.carrera_servicios=t},asignarOfertasAcademicas:function(t){this.carrera_ofertasacademicas=t},asignarPublicaciones:function(t){this.carrera_publicaciones=t},asignarGacetas:function(t){this.carrera_gacetas=t},asignarEventos:function(t){this.carrera_eventos=t},asignarVideos:function(t){this.carrera_videos=t}}})},709:function(t,o,e){"use strict";e.r(o);var r=e(11),n=(e(77),e(708)),c={props:["hideBGCOLOR"],asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function o(){var e,r,c;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(e=t.$axios,r=Object(n.a)(),null!=Object(n.a)().institucion){o.next=7;break}return o.next=5,e.$get("/api/InstitucionUPEA/7");case 5:c=o.sent,r.asignarInstitucion(c.Descripcion);case 7:case"end":return o.stop()}}),o)})))()},data:function(){return{url_api:"https://serviciopagina.upea.bo",carrera_celular1:Object(n.a)().institucion.institucion_celular1,carrera_celular2:Object(n.a)().institucion.institucion_celular2,carrera_telefono1:Object(n.a)().institucion.institucion_telefono1,carrera_telefono2:Object(n.a)().institucion.institucion_telefono2,carrera_correo1:Object(n.a)().institucion.institucion_correo1,carrera_correo2:Object(n.a)().institucion_correo2,carrera_facebook:Object(n.a)().institucion.institucion_facebook,carrera_youtube:Object(n.a)().institucion.institucion_youtube,carrera_twitter:Object(n.a)().institucion.institucion_twitter,carrera_direccion:Object(n.a)().institucion.institucion_direccion,carrera_logo:Object(n.a)().institucion.institucion_logo,carrera_nombre:Object(n.a)().institucion.institucion_nombre}}},l=e(53),component=Object(l.a)(c,(function(){var t=this,o=t._self._c;return o("footer",{class:"".concat(t.hideBGCOLOR?"":"sub-bg")},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-4"},[o("div",{staticClass:"item md-mb50"},[t._m(0),t._v(" "),o("ul",[o("li",[o("span",{staticClass:"icon pe-7s-map-marker"}),t._v(" "),o("div",{staticClass:"cont"},[o("h6",[t._v("direccion")]),t._v(" "),o("p",[t._v(t._s(t.carrera_direccion))])])]),t._v(" "),o("li",[o("span",{staticClass:"icon pe-7s-mail"}),t._v(" "),o("div",{staticClass:"cont"},[o("h6",[t._v("Correo")]),t._v(" "),o("p",[t._v(t._s(t.carrera_correo1))])])]),t._v(" "),o("li",[o("span",{staticClass:"icon pe-7s-call"}),t._v(" "),o("div",{staticClass:"cont"},[o("h6",[t._v("Telefono")]),t._v(" "),o("p",[t._v(t._s(t.carrera_telefono1))])])])])])]),t._v(" "),o("div",{staticClass:"col-lg-4"}),t._v(" "),o("div",{staticClass:"col-lg-4"},[o("div",{staticClass:"item"},[o("div",{staticClass:"logo"},[o("img",{attrs:{src:t.url_api+"/InstitucionUpea/"+t.carrera_logo,alt:"logo"}}),t._v(" "),o("span",[t._v(t._s(t.carrera_nombre))])]),t._v(" "),o("div",{staticClass:"social"},[o("a",{attrs:{href:t.carrera_facebook,target:"_blank"}},[o("i",{staticClass:"fab fa-facebook-f"})]),t._v(" "),o("a",{attrs:{href:t.carrera_twitter,target:"_blank"}},[o("i",{staticClass:"fab fa-twitter"})]),t._v(" "),o("a",{attrs:{href:t.carrera_youtube,target:"_blank"}},[o("i",{staticClass:"fab fa-youtube"})])]),t._v(" "),t._m(1)])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"title"},[t("h5",[this._v("Contacta con Nosotros")])])},function(){var t=this,o=t._self._c;return o("div",{staticClass:"copy-right"},[o("p",[t._v("\n              © 2023, Todos los derechos reservados \n              "),o("span",[t._v("Universidad Publica de El Alto")]),t._v(".\n            ")]),t._v(" "),o("p",[t._v("Desarrollador "),o("a",{attrs:{target:"_blank",href:"https://www.facebook.com/profile.php?id=100008367045999"}},[t._v("Cvm")])])])}],!1,null,"78e3ff5f",null);o.default=component.exports;installComponents(component,{Footer:e(709).default})},710:function(t,o,e){"use strict";o.a=function(t){var o=[];if(!t.parentNode)return o;for(var e=t.parentNode.firstChild;e;)1===e.nodeType&&e!==t&&o.push(e),e=e.nextSibling;return o}},711:function(t,o,e){"use strict";e.r(o);var r=e(11),n=(e(62),e(54),e(21),e(77),e(708)),c=e(710),l={props:["lr","theme","nr"],asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function o(){var e,r,c,l;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(e=t.$axios,o.prev=1,r=Object(n.a)(),null!=Object(n.a)().carrera_links_externos){o.next=8;break}return o.next=6,e.$get("/api/linksIntExtAll/7");case 6:c=o.sent,r.asignarCarreraLinksExternos(c);case 8:if(null!=Object(n.a)().institucion){o.next=13;break}return o.next=11,e.$get("/api/InstitucionUPEA/7");case 11:l=o.sent,r.asignarInstitucion(l.Descripcion);case 13:o.next=18;break;case 15:o.prev=15,o.t0=o.catch(1),console.error("el error es: ",o.t0);case 18:case"end":return o.stop()}}),o,null,[[1,15]])})))()},data:function(){return{url_api:"https://serviciopagina.upea.bo",carrera_logo:Object(n.a)().institucion.institucion_logo,carrera_nombre:Object(n.a)().institucion.institucion_nombre,carrera_links:Object(n.a)().carrera_links_externos}},created:function(){},methods:{handleDropdown:function(t){if(Object(c.a)(t.target.parentElement).filter((function(t){return t.classList.contains("show")})).map((function(t){t.classList.remove("show"),t.childNodes[0]&&t.childNodes[0].setAttribute("aria-expanded",!1),t.childNodes[2]&&t.childNodes[2].classList.remove("show")})),t.target.setAttribute("aria-expanded",!0),t.target.parentElement){t.target.parentElement.classList.toggle("show");var o=t.target.parentElement.childNodes[2];o&&o.classList.toggle("show")}},handleMobileDropdown:function(t){document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans")}}},d=e(53),component=Object(d.a)(l,(function(){var t=this,o=t._self._c;return o("nav",{ref:t.nr,staticClass:"navbar navbar-expand-lg change",class:"light"===t.theme?"light":""},[o("div",{staticClass:"container"},[o("NuxtLink",{staticClass:"logo",attrs:{to:"/"}},["light"===t.theme?o("img",{ref:"lr",attrs:{src:"/img/logo-dark.png",alt:"logo"}}):"themeD"===t.theme?o("img",{ref:"lr",attrs:{src:"/img/logo-light.png",alt:"logo"}}):o("img",{ref:"lr",attrs:{src:t.url_api+"/InstitucionUpea/"+t.carrera_logo,alt:"logo"}})]),t._v(" "),o("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},on:{click:t.handleMobileDropdown}},[t._m(0)]),t._v(" "),o("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[o("ul",{staticClass:"navbar-nav ml-auto"},[o("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[o("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Inicio\n          ")]),t._v(" "),o("div",{staticClass:"dropdown-menu"},[o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/about/about-dark"}},[t._v(" \n              Sobre Nosotros\n            ")])],1)]),t._v(" "),o("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[o("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Convocatorias\n          ")]),t._v(" "),o("div",{staticClass:"dropdown-menu"},[o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/convocatorias"}},[t._v("\n              Convocatorias\n            ")]),t._v(" "),o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/comunicados"}},[t._v("\n              Comunicados\n            ")]),t._v(" "),o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/avisos"}},[t._v("\n              Avisos\n            ")])],1)]),t._v(" "),o("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[o("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Cursos\n          ")]),t._v(" "),o("div",{staticClass:"dropdown-menu"},[o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/cursos"}},[t._v("\n              Cursos\n            ")]),t._v(" "),o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/seminarios"}},[t._v("\n              Seminarios\n            ")])],1)]),t._v(" "),o("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[o("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Mas\n          ")]),t._v(" "),o("div",{staticClass:"dropdown-menu"},[o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/servicios"}},[t._v("\n              Servicios\n            ")]),t._v(" "),o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/ofertasacademicas"}},[t._v("\n              Ofertas Academicas\n            ")]),t._v(" "),o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/publicaciones"}},[t._v("\n              Publicaciones\n            ")]),t._v(" "),o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/gacetas"}},[t._v("\n              Gacetas\n            ")]),t._v(" "),o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/eventos"}},[t._v("\n              Eventos\n            ")]),t._v(" "),o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/videos"}},[t._v("\n              Videos\n            ")])],1)]),t._v(" "),o("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[o("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Links\n          ")]),t._v(" "),o("div",{staticClass:"dropdown-menu"},t._l(t.carrera_links,(function(link,e){return o("a",{key:e,staticClass:"dropdown-item",attrs:{target:"_blank",href:link.ei_link}},[t._v("\n              "+t._s(link.ei_nombre)+"\n            ")])})),0)]),t._v(" "),o("li",{staticClass:"nav-item"},[o("NuxtLink",{staticClass:"nav-link",attrs:{to:"/contact/contact-dark"}},[t._v("\n            Contacto\n          ")])],1)])])],1)])}),[function(){var t=this._self._c;return t("span",{staticClass:"icon-bar"},[t("i",{staticClass:"fas fa-bars"})])}],!1,null,"26d2cc7e",null);o.default=component.exports},722:function(t,o,e){"use strict";e(21),e(47),e(92),e(286);var r=0,n=0;function c(t,time){setInterval(function(t){r=Number(window.getComputedStyle(t).getPropertyValue("opacity")),r<1?(r+=1,t.style.opacity=r):clearInterval(n)}(t),time)}function l(t,time){setInterval(function(t){r=Number(window.getComputedStyle(t).getPropertyValue("opacity")),r>0?(r=0,t.style.opacity=r):clearInterval(n)}(t),time)}o.a=function(){var t=document.createElement("div");t.classList.add("div-tooltip-tit"),document.body.appendChild(t);var o=document.createElement("div");o.classList.add("div-tooltip-sub"),document.body.appendChild(o),document.querySelectorAll("[data-tooltip-tit]").forEach((function(o){t=document.querySelector(".div-tooltip-tit"),o.addEventListener("mouseover",(function(){t.innerText=o.getAttribute("data-tooltip-tit")})),o.addEventListener("mousemove",(function(o){c(t,800),t.style.top=o.pageY+10+"px",t.style.left=o.pageX+20+"px",t.style.padding="0px 10px"})),o.addEventListener("mouseleave",(function(){l(t,800),t.style.padding=0}))})),document.querySelectorAll("[data-tooltip-sub]").forEach((function(t){o=document.querySelector(".div-tooltip-sub"),t.addEventListener("mouseover",(function(){o.innerText=t.getAttribute("data-tooltip-sub")})),t.addEventListener("mousemove",(function(t){c(o,800),o.style.top=t.pageY-15+"px",o.style.left=t.pageX+30+"px",o.style.padding="5px 10px"})),t.addEventListener("mouseleave",(function(){l(o,800),o.style.padding=0}))}))}},734:function(t,o,e){"use strict";e.r(o);var r={props:["sliderRef","title","text","Background"]},n=e(53),component=Object(n.a)(r,(function(){var t=this,o=t._self._c;return o("header",{ref:t.sliderRef,staticClass:"works-header fixed-slider hfixd valign sub-bg"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row justify-content-center"},[o("div",{staticClass:"col-lg-7 col-md-9 static"},[o("div",{staticClass:"capt mt-50"},[o("div",{staticClass:"parlx text-center"},[o("h1",{staticClass:"color-font"},[t._v(t._s(t.title?t.title:"amazing works"))]),t._v(" "),o("p",[t._v("\n              "+t._s(t.text?t.text:"Creativity involves breaking out of expected & repeatable patterns in order to look at things in different way than ever before.")+"\n            ")])]),t._v(" "),o("div",{staticClass:"bactxt custom-font valign"},[o("span",{staticClass:"full-width"},[t._v(t._s(t.Background?t.Background:"Works"))])])])])])])])}),[],!1,null,"3aa602e0",null);o.default=component.exports},832:function(t,o,e){"use strict";e.r(o);var r=e(722),n={mounted:function(){Object(r.a)()}},c=e(53),component=Object(c.a)(n,(function(){var t=this,o=t._self._c;return o("section",{staticClass:"works section-padding pb-70"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row lg-space"},[o("div",{staticClass:"col-lg-4 col-md-6"},[o("div",{staticClass:"item"},[o("NuxtLink",{attrs:{to:"/project-details2/project-details2-dark"}},[o("div",{staticClass:"img",attrs:{"data-tooltip-tit":"Work image","data-tooltip-sub":"Design"}},[o("img",{attrs:{src:"/img/portfolio/portfolio/1/1.jpg",alt:""}})])])],1)]),t._v(" "),o("div",{staticClass:"col-lg-4 col-md-6 valign"},[o("div",{staticClass:"item"},[o("NuxtLink",{attrs:{to:"/project-details2/project-details2-dark"}},[o("div",{staticClass:"img",attrs:{"data-tooltip-tit":"Work image","data-tooltip-sub":"Design"}},[o("img",{attrs:{src:"/img/portfolio/portfolio/2/1.jpg",alt:""}})])])],1)]),t._v(" "),o("div",{staticClass:"col-lg-4 col-md-6"},[o("div",{staticClass:"item"},[o("NuxtLink",{attrs:{to:"/project-details2/project-details2-dark"}},[o("div",{staticClass:"img",attrs:{"data-tooltip-tit":"Work image","data-tooltip-sub":"Design"}},[o("img",{attrs:{src:"/img/portfolio/portfolio/1/2.jpg",alt:""}})])])],1)]),t._v(" "),o("div",{staticClass:"col-lg-4 col-md-6 valign"},[o("div",{staticClass:"item"},[o("NuxtLink",{attrs:{to:"/project-details2/project-details2-dark"}},[o("div",{staticClass:"img",attrs:{"data-tooltip-tit":"Work image","data-tooltip-sub":"Design"}},[o("img",{attrs:{src:"/img/portfolio/portfolio/2/3.jpg",alt:""}})])])],1)]),t._v(" "),o("div",{staticClass:"col-lg-4 col-md-6"},[o("div",{staticClass:"item"},[o("NuxtLink",{attrs:{to:"/project-details2/project-details2-dark"}},[o("div",{staticClass:"img",attrs:{"data-tooltip-tit":"Work image","data-tooltip-sub":"Design"}},[o("img",{attrs:{src:"/img/portfolio/portfolio/1/3.jpg",alt:""}})])])],1)]),t._v(" "),o("div",{staticClass:"col-lg-4 col-md-6 valign"},[o("div",{staticClass:"item"},[o("NuxtLink",{attrs:{to:"/project-details2/project-details2-dark"}},[o("div",{staticClass:"img",attrs:{"data-tooltip-tit":"Work image","data-tooltip-sub":"Design"}},[o("img",{attrs:{src:"/img/portfolio/portfolio/2/4.jpg",alt:""}})])])],1)]),t._v(" "),o("div",{staticClass:"col-lg-4 col-md-6"},[o("div",{staticClass:"item"},[o("NuxtLink",{attrs:{to:"/project-details2/project-details2-dark"}},[o("div",{staticClass:"img",attrs:{"data-tooltip-tit":"Work image","data-tooltip-sub":"Design"}},[o("img",{attrs:{src:"/img/portfolio/portfolio/1/4.jpg",alt:""}})])])],1)]),t._v(" "),o("div",{staticClass:"col-lg-4 col-md-6 valign"},[o("div",{staticClass:"item"},[o("NuxtLink",{attrs:{to:"/project-details2/project-details2-dark"}},[o("div",{staticClass:"img",attrs:{"data-tooltip-tit":"Work image","data-tooltip-sub":"Design"}},[o("img",{attrs:{src:"/img/portfolio/portfolio/2/5.jpg",alt:""}})])])],1)]),t._v(" "),o("div",{staticClass:"col-lg-4 col-md-6"},[o("div",{staticClass:"item"},[o("NuxtLink",{attrs:{to:"/project-details2/project-details2-dark"}},[o("div",{staticClass:"img",attrs:{"data-tooltip-tit":"Work image","data-tooltip-sub":"Design"}},[o("img",{attrs:{src:"/img/portfolio/portfolio/1/5.jpg",alt:""}})])])],1)])])])])}),[],!1,null,"a595b24c",null);o.default=component.exports},922:function(t,o,e){"use strict";e.r(o);var r={layout:"dark",head:function(){return{titleTemplate:"%s - Works Dark"}},mounted:function(){if(this.$refs.fixedSlider.$el&&this.$refs.MainContent){var t=this.$refs.fixedSlider.$el.offsetHeight;this.$refs.MainContent.style.marginTop=t+"px"}var o=this.$refs.navbar.$el;window.pageYOffset>300?o.classList.add("nav-scroll"):o.classList.remove("nav-scroll"),window.addEventListener("scroll",(function(){window.pageYOffset>300?o.classList.add("nav-scroll"):o.classList.remove("nav-scroll")}))}},n=e(53),component=Object(n.a)(r,(function(){var t=this,o=t._self._c;return o("div",[t._m(0),t._v(" "),o("Navbar",{ref:"navbar",attrs:{lr:"logoRef"}}),t._v(" "),o("WorksHeader",{ref:"fixedSlider"}),t._v(" "),o("div",{ref:"MainContent",staticClass:"main-content"},[o("WorksStyle1"),t._v(" "),o("Footer")],1)],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"circle-bg"},[t("div",{staticClass:"circle-color fixed"},[t("div",{staticClass:"gradient-circle"}),this._v(" "),t("div",{staticClass:"gradient-circle two"})])])}],!1,null,"3cd43038",null);o.default=component.exports;installComponents(component,{Navbar:e(711).default,WorksHeader:e(734).default,WorksStyle1:e(832).default,Footer:e(709).default})}}]);