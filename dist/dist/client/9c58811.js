(window.webpackJsonp=window.webpackJsonp||[]).push([[94,13,27,45,49],{708:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n(113),r=Object(o.c)("Institucion",{state:function(){return{url_api:"https://serviciopagina.upea.bo",institucion:null,nombre:"ingenieria de sistemas",carrera_links_externos:null,carrera_convocatorias:null,carrera_avisos:null,carrera_comunicados:null,carrera_cursos:null,carrera_seminarios:null,carrera_autoridades:null,carrera_servicios:null,carrera_ofertasacademicas:null,carrera_publicaciones:null,carrera_gacetas:null,carrera_eventos:null,carrera_videos:null,fotosPagina:null,fotosPortada:null,title_index_about:"Perfil y Carrera de Licenciatura en ",title_index_services:"Informacion sobre la carrera",title_funfact:"Todos los comunicados de la Carrera",pretitle_convocatorias:"Lo ultimo de ...",title_convocatorias:"Convocatorias, Comunicados y Avisos",pretitle_cursos:"Lo ultimo de ...",title_cursos:"Curso y Seminarios",pretitle_autoridades:"Nuestras",title_autoridades:"Autoridades",title_index_organigrama:"Organigrama de la carrera de",title_categories:"Categorias",text_categories:"Estudiar en la Universidad Pública de El Alto es un privilegio que implica responsabilidad y entrega, pero también es una oportunidad para crecer y alcanzar nuestros sueños.",textBackground_categories:"Upea",title_contacto:"Contacto",pretitle_contacto:"contactate con la universidad para mas informacion sobre la carrera.",title_about:"Historia de la carrera"}},actions:{asignarInstitucion:function(t){this.institucion=t},asignarCarreraLinksExternos:function(t){this.carrera_links_externos=t},asignarConvocatorias:function(t){this.carrera_convocatorias=t},asignarComunicados:function(t){this.carrera_comunicados=t},asignarAvisos:function(t){this.carrera_avisos=t},asignarCursos:function(t){this.carrera_cursos=t},asignarSeminarios:function(t){this.carrera_seminarios=t},asignarFotosPagina:function(t){this.fotosPagina=t},asignarFotosPortada:function(t){this.fotosPortada=t},asignarServicios:function(t){this.carrera_servicios=t},asignarOfertasAcademicas:function(t){this.carrera_ofertasacademicas=t},asignarPublicaciones:function(t){this.carrera_publicaciones=t},asignarGacetas:function(t){this.carrera_gacetas=t},asignarEventos:function(t){this.carrera_eventos=t},asignarVideos:function(t){this.carrera_videos=t}}})},709:function(t,e,n){"use strict";n.r(e);var o=n(11),r=(n(77),n(708)),c={props:["hideBGCOLOR"],asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.$axios,o=Object(r.a)(),null!=Object(r.a)().institucion){e.next=7;break}return e.next=5,n.$get("/api/InstitucionUPEA/7");case 5:c=e.sent,o.asignarInstitucion(c.Descripcion);case 7:case"end":return e.stop()}}),e)})))()},data:function(){return{url_api:"https://serviciopagina.upea.bo",carrera_celular1:Object(r.a)().institucion.institucion_celular1,carrera_celular2:Object(r.a)().institucion.institucion_celular2,carrera_telefono1:Object(r.a)().institucion.institucion_telefono1,carrera_telefono2:Object(r.a)().institucion.institucion_telefono2,carrera_correo1:Object(r.a)().institucion.institucion_correo1,carrera_correo2:Object(r.a)().institucion_correo2,carrera_facebook:Object(r.a)().institucion.institucion_facebook,carrera_youtube:Object(r.a)().institucion.institucion_youtube,carrera_twitter:Object(r.a)().institucion.institucion_twitter,carrera_direccion:Object(r.a)().institucion.institucion_direccion,carrera_logo:Object(r.a)().institucion.institucion_logo,carrera_nombre:Object(r.a)().institucion.institucion_nombre}}},l=n(53),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("footer",{class:"".concat(t.hideBGCOLOR?"":"sub-bg")},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-4"},[e("div",{staticClass:"item md-mb50"},[t._m(0),t._v(" "),e("ul",[e("li",[e("span",{staticClass:"icon pe-7s-map-marker"}),t._v(" "),e("div",{staticClass:"cont"},[e("h6",[t._v("direccion")]),t._v(" "),e("p",[t._v(t._s(t.carrera_direccion))])])]),t._v(" "),e("li",[e("span",{staticClass:"icon pe-7s-mail"}),t._v(" "),e("div",{staticClass:"cont"},[e("h6",[t._v("Correo")]),t._v(" "),e("p",[t._v(t._s(t.carrera_correo1))])])]),t._v(" "),e("li",[e("span",{staticClass:"icon pe-7s-call"}),t._v(" "),e("div",{staticClass:"cont"},[e("h6",[t._v("Telefono")]),t._v(" "),e("p",[t._v(t._s(t.carrera_telefono1))])])])])])]),t._v(" "),e("div",{staticClass:"col-lg-4"}),t._v(" "),e("div",{staticClass:"col-lg-4"},[e("div",{staticClass:"item"},[e("div",{staticClass:"logo"},[e("img",{attrs:{src:t.url_api+"/InstitucionUpea/"+t.carrera_logo,alt:"logo"}}),t._v(" "),e("span",[t._v(t._s(t.carrera_nombre))])]),t._v(" "),e("div",{staticClass:"social"},[e("a",{attrs:{href:t.carrera_facebook,target:"_blank"}},[e("i",{staticClass:"fab fa-facebook-f"})]),t._v(" "),e("a",{attrs:{href:t.carrera_twitter,target:"_blank"}},[e("i",{staticClass:"fab fa-twitter"})]),t._v(" "),e("a",{attrs:{href:t.carrera_youtube,target:"_blank"}},[e("i",{staticClass:"fab fa-youtube"})])]),t._v(" "),t._m(1)])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"title"},[t("h5",[this._v("Contacta con Nosotros")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"copy-right"},[e("p",[t._v("\n              © 2023, Todos los derechos reservados \n              "),e("span",[t._v("Universidad Publica de El Alto")]),t._v(".\n            ")]),t._v(" "),e("p",[t._v("Desarrollador "),e("a",{attrs:{target:"_blank",href:"https://www.facebook.com/profile.php?id=100008367045999"}},[t._v("Cvm")])])])}],!1,null,"78e3ff5f",null);e.default=component.exports;installComponents(component,{Footer:n(709).default})},710:function(t,e,n){"use strict";e.a=function(t){var e=[];if(!t.parentNode)return e;for(var n=t.parentNode.firstChild;n;)1===n.nodeType&&n!==t&&e.push(n),n=n.nextSibling;return e}},711:function(t,e,n){"use strict";n.r(e);var o=n(11),r=(n(62),n(54),n(21),n(77),n(708)),c=n(710),l={props:["lr","theme","nr"],asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.$axios,e.prev=1,o=Object(r.a)(),null!=Object(r.a)().carrera_links_externos){e.next=8;break}return e.next=6,n.$get("/api/linksIntExtAll/7");case 6:c=e.sent,o.asignarCarreraLinksExternos(c);case 8:if(null!=Object(r.a)().institucion){e.next=13;break}return e.next=11,n.$get("/api/InstitucionUPEA/7");case 11:l=e.sent,o.asignarInstitucion(l.Descripcion);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.error("el error es: ",e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})))()},data:function(){return{url_api:"https://serviciopagina.upea.bo",carrera_logo:Object(r.a)().institucion.institucion_logo,carrera_nombre:Object(r.a)().institucion.institucion_nombre,carrera_links:Object(r.a)().carrera_links_externos}},created:function(){},methods:{handleDropdown:function(t){if(Object(c.a)(t.target.parentElement).filter((function(t){return t.classList.contains("show")})).map((function(t){t.classList.remove("show"),t.childNodes[0]&&t.childNodes[0].setAttribute("aria-expanded",!1),t.childNodes[2]&&t.childNodes[2].classList.remove("show")})),t.target.setAttribute("aria-expanded",!0),t.target.parentElement){t.target.parentElement.classList.toggle("show");var e=t.target.parentElement.childNodes[2];e&&e.classList.toggle("show")}},handleMobileDropdown:function(t){document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans")}}},d=n(53),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("nav",{ref:t.nr,staticClass:"navbar navbar-expand-lg change",class:"light"===t.theme?"light":""},[e("div",{staticClass:"container"},[e("NuxtLink",{staticClass:"logo",attrs:{to:"/"}},["light"===t.theme?e("img",{ref:"lr",attrs:{src:"/img/logo-dark.png",alt:"logo"}}):"themeD"===t.theme?e("img",{ref:"lr",attrs:{src:"/img/logo-light.png",alt:"logo"}}):e("img",{ref:"lr",attrs:{src:t.url_api+"/InstitucionUpea/"+t.carrera_logo,alt:"logo"}})]),t._v(" "),e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},on:{click:t.handleMobileDropdown}},[t._m(0)]),t._v(" "),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav ml-auto"},[e("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[e("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Inicio\n          ")]),t._v(" "),e("div",{staticClass:"dropdown-menu"},[e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/about/about-dark"}},[t._v(" \n              Sobre Nosotros\n            ")])],1)]),t._v(" "),e("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[e("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Convocatorias\n          ")]),t._v(" "),e("div",{staticClass:"dropdown-menu"},[e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/convocatorias"}},[t._v("\n              Convocatorias\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/comunicados"}},[t._v("\n              Comunicados\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/avisos"}},[t._v("\n              Avisos\n            ")])],1)]),t._v(" "),e("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[e("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Cursos\n          ")]),t._v(" "),e("div",{staticClass:"dropdown-menu"},[e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/cursos"}},[t._v("\n              Cursos\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/seminarios"}},[t._v("\n              Seminarios\n            ")])],1)]),t._v(" "),e("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[e("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Mas\n          ")]),t._v(" "),e("div",{staticClass:"dropdown-menu"},[e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/servicios"}},[t._v("\n              Servicios\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/ofertasacademicas"}},[t._v("\n              Ofertas Academicas\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/publicaciones"}},[t._v("\n              Publicaciones\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/gacetas"}},[t._v("\n              Gacetas\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/eventos"}},[t._v("\n              Eventos\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/videos"}},[t._v("\n              Videos\n            ")])],1)]),t._v(" "),e("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[e("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Links\n          ")]),t._v(" "),e("div",{staticClass:"dropdown-menu"},t._l(t.carrera_links,(function(link,n){return e("a",{key:n,staticClass:"dropdown-item",attrs:{target:"_blank",href:link.ei_link}},[t._v("\n              "+t._s(link.ei_nombre)+"\n            ")])})),0)]),t._v(" "),e("li",{staticClass:"nav-item"},[e("NuxtLink",{staticClass:"nav-link",attrs:{to:"/contact/contact-dark"}},[t._v("\n            Contacto\n          ")])],1)])])],1)])}),[function(){var t=this._self._c;return t("span",{staticClass:"icon-bar"},[t("i",{staticClass:"fas fa-bars"})])}],!1,null,"26d2cc7e",null);e.default=component.exports},725:function(t,e,n){"use strict";n.r(e);var o={props:["title","paragraph","classText"]},r=n(53),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("section",{class:"page-header ".concat(t.classText&&t.classText)},[e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-7 col-md-9"},[e("div",{staticClass:"cont text-center"},[e("h1",{staticClass:"mb-10 color-font"},[t._v(t._s(t.title))]),t._v(" "),e("p",[t._v(t._s(t.paragraph))])])])])])])}),[],!1,null,"1eba3886",null);e.default=component.exports},775:function(t){t.exports=JSON.parse('[{"id":1,"title":"How to use solid color combine with simple furnitures.","content":"My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.","image":"/img/blog/l1.jpg","tags":["WordPress","Themeforest","Vie"],"date":{"day":"07","month":"August"}},{"id":2,"title":"Build a Beautiful Blog With Ease","content":"My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.","image":"/img/blog/l2.jpg","tags":["WordPress"],"date":{"day":"07","month":"August"}},{"id":3,"title":"Build a Beautiful Blog With Ease","content":"My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.","image":"/img/blog/l3.jpg","tags":["WordPress","Themeforest","Vie"],"date":{"day":"07","month":"August"}}]')},793:function(t,e,n){"use strict";n.r(e);var o=n(775),r={data:function(){return{blogs:o}}},c=n(53),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"blog-pg blog-list section-padding pt-0"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-11"},[e("div",{staticClass:"posts mt-80"},[t._l(t.blogs,(function(n){return e("div",{key:n.id,staticClass:"item mb-80 wow fadeInUp",attrs:{"data-wow-delay":".3s"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6 valign"},[e("div",{staticClass:"img md-mb50"},[e("img",{attrs:{src:n.image,alt:""}})])]),t._v(" "),e("div",{staticClass:"col-lg-6 valign"},[e("div",{staticClass:"cont"},[e("div",[e("div",{staticClass:"info"},[e("NuxtLink",{staticClass:"date",attrs:{to:"#0"}},[e("span",[e("i",[t._v(t._s(n.date.day))]),t._v("\n                          "+t._s(n.date.month)+"\n                        ")])]),t._v(" "),e("span",[t._v("/")]),t._v(" "),t._l(n.tags,(function(n,o){return e("NuxtLink",{key:o,staticClass:"tag",attrs:{to:"#"}},[e("span",[t._v(t._s(n))])])}))],2),t._v(" "),e("h5",[e("NuxtLink",{attrs:{to:"/blog-details/blog-details-dark"}},[t._v("\n                        "+t._s(n.title)+"\n                      ")])],1),t._v(" "),e("p",{staticClass:"mt-10"},[t._v("\n                      "+t._s(n.content.substr(0,146)+"...")+"\n                    ")]),t._v(" "),e("div",{staticClass:"btn-more mt-30"},[e("NuxtLink",{staticClass:"simple-btn",attrs:{to:"/blog-details/blog-details-dark"}},[t._v("\n                        Read More\n                      ")])],1)])])])])])})),t._v(" "),e("div",{staticClass:"pagination"},[e("span",{staticClass:"active"},[e("NuxtLink",{attrs:{to:"/blog/blog-dark"}},[t._v("1")])],1),t._v(" "),e("span",[e("NuxtLink",{attrs:{to:"/blog/blog-dark"}},[t._v("2")])],1),t._v(" "),e("span",[e("NuxtLink",{attrs:{to:"/blog/blog-dark"}},[e("i",{staticClass:"fas fa-angle-right"})])],1)])],2)])])])])}),[],!1,null,"28e8b886",null);e.default=component.exports},892:function(t,e,n){"use strict";n.r(e);var o={layout:"dark",head:function(){return{titleTemplate:"%s - Blog-List Dark"}},mounted:function(){var t=this.$refs.navbar.$el;window.pageYOffset>300?t.classList.add("nav-scroll"):t.classList.remove("nav-scroll"),window.addEventListener("scroll",(function(){window.pageYOffset>300?t.classList.add("nav-scroll"):t.classList.remove("nav-scroll")}))}},r=n(53),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",[t._m(0),t._v(" "),e("Navbar",{ref:"navbar"}),t._v(" "),e("PageHeader",{attrs:{classText:"sub-bg",title:"Our News.",paragraph:"All the most current news and events of our creative team."}}),t._v(" "),e("BlogListed"),t._v(" "),e("Footer")],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"circle-bg"},[t("div",{staticClass:"circle-color fixed"},[t("div",{staticClass:"gradient-circle"}),this._v(" "),t("div",{staticClass:"gradient-circle two"})])])}],!1,null,"73c05211",null);e.default=component.exports;installComponents(component,{Navbar:n(711).default,PageHeader:n(725).default,BlogListed:n(793).default,Footer:n(709).default})}}]);