(window.webpackJsonp=window.webpackJsonp||[]).push([[91,11,27,45,49],{708:function(t,o,e){"use strict";e.d(o,"a",(function(){return r}));var n=e(113),r=Object(n.c)("Institucion",{state:function(){return{url_api:"https://serviciopagina.upea.bo",institucion:null,nombre:"ingenieria de sistemas",carrera_links_externos:null,carrera_convocatorias:null,carrera_avisos:null,carrera_comunicados:null,carrera_cursos:null,carrera_seminarios:null,carrera_autoridades:null,carrera_servicios:null,carrera_ofertasacademicas:null,carrera_publicaciones:null,carrera_gacetas:null,carrera_eventos:null,carrera_videos:null,fotosPagina:null,fotosPortada:null,title_index_about:"Perfil y Carrera de Licenciatura en ",title_index_services:"Informacion sobre la carrera",title_funfact:"Todos los comunicados de la Carrera",pretitle_convocatorias:"Lo ultimo de ...",title_convocatorias:"Convocatorias, Comunicados y Avisos",pretitle_cursos:"Lo ultimo de ...",title_cursos:"Curso y Seminarios",pretitle_autoridades:"Nuestras",title_autoridades:"Autoridades",title_index_organigrama:"Organigrama de la carrera de",title_categories:"Categorias",text_categories:"Estudiar en la Universidad Pública de El Alto es un privilegio que implica responsabilidad y entrega, pero también es una oportunidad para crecer y alcanzar nuestros sueños.",textBackground_categories:"Upea",title_contacto:"Contacto",pretitle_contacto:"contactate con la universidad para mas informacion sobre la carrera.",title_about:"Historia de la carrera"}},actions:{asignarInstitucion:function(t){this.institucion=t},asignarCarreraLinksExternos:function(t){this.carrera_links_externos=t},asignarConvocatorias:function(t){this.carrera_convocatorias=t},asignarComunicados:function(t){this.carrera_comunicados=t},asignarAvisos:function(t){this.carrera_avisos=t},asignarCursos:function(t){this.carrera_cursos=t},asignarSeminarios:function(t){this.carrera_seminarios=t},asignarFotosPagina:function(t){this.fotosPagina=t},asignarFotosPortada:function(t){this.fotosPortada=t},asignarServicios:function(t){this.carrera_servicios=t},asignarOfertasAcademicas:function(t){this.carrera_ofertasacademicas=t},asignarPublicaciones:function(t){this.carrera_publicaciones=t},asignarGacetas:function(t){this.carrera_gacetas=t},asignarEventos:function(t){this.carrera_eventos=t},asignarVideos:function(t){this.carrera_videos=t}}})},709:function(t,o,e){"use strict";e.r(o);var n=e(11),r=(e(77),e(708)),c={props:["hideBGCOLOR"],asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function o(){var e,n,c;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(e=t.$axios,n=Object(r.a)(),null!=Object(r.a)().institucion){o.next=7;break}return o.next=5,e.$get("/api/InstitucionUPEA/7");case 5:c=o.sent,n.asignarInstitucion(c.Descripcion);case 7:case"end":return o.stop()}}),o)})))()},data:function(){return{url_api:"https://serviciopagina.upea.bo",carrera_celular1:Object(r.a)().institucion.institucion_celular1,carrera_celular2:Object(r.a)().institucion.institucion_celular2,carrera_telefono1:Object(r.a)().institucion.institucion_telefono1,carrera_telefono2:Object(r.a)().institucion.institucion_telefono2,carrera_correo1:Object(r.a)().institucion.institucion_correo1,carrera_correo2:Object(r.a)().institucion_correo2,carrera_facebook:Object(r.a)().institucion.institucion_facebook,carrera_youtube:Object(r.a)().institucion.institucion_youtube,carrera_twitter:Object(r.a)().institucion.institucion_twitter,carrera_direccion:Object(r.a)().institucion.institucion_direccion,carrera_logo:Object(r.a)().institucion.institucion_logo,carrera_nombre:Object(r.a)().institucion.institucion_nombre}}},l=e(53),component=Object(l.a)(c,(function(){var t=this,o=t._self._c;return o("footer",{class:"".concat(t.hideBGCOLOR?"":"sub-bg")},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-4"},[o("div",{staticClass:"item md-mb50"},[t._m(0),t._v(" "),o("ul",[o("li",[o("span",{staticClass:"icon pe-7s-map-marker"}),t._v(" "),o("div",{staticClass:"cont"},[o("h6",[t._v("direccion")]),t._v(" "),o("p",[t._v(t._s(t.carrera_direccion))])])]),t._v(" "),o("li",[o("span",{staticClass:"icon pe-7s-mail"}),t._v(" "),o("div",{staticClass:"cont"},[o("h6",[t._v("Correo")]),t._v(" "),o("p",[t._v(t._s(t.carrera_correo1))])])]),t._v(" "),o("li",[o("span",{staticClass:"icon pe-7s-call"}),t._v(" "),o("div",{staticClass:"cont"},[o("h6",[t._v("Telefono")]),t._v(" "),o("p",[t._v(t._s(t.carrera_telefono1))])])])])])]),t._v(" "),o("div",{staticClass:"col-lg-4"}),t._v(" "),o("div",{staticClass:"col-lg-4"},[o("div",{staticClass:"item"},[o("div",{staticClass:"logo"},[o("img",{attrs:{src:t.url_api+"/InstitucionUpea/"+t.carrera_logo,alt:"logo"}}),t._v(" "),o("span",[t._v(t._s(t.carrera_nombre))])]),t._v(" "),o("div",{staticClass:"social"},[o("a",{attrs:{href:t.carrera_facebook,target:"_blank"}},[o("i",{staticClass:"fab fa-facebook-f"})]),t._v(" "),o("a",{attrs:{href:t.carrera_twitter,target:"_blank"}},[o("i",{staticClass:"fab fa-twitter"})]),t._v(" "),o("a",{attrs:{href:t.carrera_youtube,target:"_blank"}},[o("i",{staticClass:"fab fa-youtube"})])]),t._v(" "),t._m(1)])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"title"},[t("h5",[this._v("Contacta con Nosotros")])])},function(){var t=this,o=t._self._c;return o("div",{staticClass:"copy-right"},[o("p",[t._v("\n              © 2023, Todos los derechos reservados \n              "),o("span",[t._v("Universidad Publica de El Alto")]),t._v(".\n            ")]),t._v(" "),o("p",[t._v("Desarrollador "),o("a",{attrs:{target:"_blank",href:"https://www.facebook.com/profile.php?id=100008367045999"}},[t._v("Cvm")])])])}],!1,null,"78e3ff5f",null);o.default=component.exports;installComponents(component,{Footer:e(709).default})},710:function(t,o,e){"use strict";o.a=function(t){var o=[];if(!t.parentNode)return o;for(var e=t.parentNode.firstChild;e;)1===e.nodeType&&e!==t&&o.push(e),e=e.nextSibling;return o}},711:function(t,o,e){"use strict";e.r(o);var n=e(11),r=(e(62),e(54),e(21),e(77),e(708)),c=e(710),l={props:["lr","theme","nr"],asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function o(){var e,n,c,l;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(e=t.$axios,o.prev=1,n=Object(r.a)(),null!=Object(r.a)().carrera_links_externos){o.next=8;break}return o.next=6,e.$get("/api/linksIntExtAll/7");case 6:c=o.sent,n.asignarCarreraLinksExternos(c);case 8:if(null!=Object(r.a)().institucion){o.next=13;break}return o.next=11,e.$get("/api/InstitucionUPEA/7");case 11:l=o.sent,n.asignarInstitucion(l.Descripcion);case 13:o.next=18;break;case 15:o.prev=15,o.t0=o.catch(1),console.error("el error es: ",o.t0);case 18:case"end":return o.stop()}}),o,null,[[1,15]])})))()},data:function(){return{url_api:"https://serviciopagina.upea.bo",carrera_logo:Object(r.a)().institucion.institucion_logo,carrera_nombre:Object(r.a)().institucion.institucion_nombre,carrera_links:Object(r.a)().carrera_links_externos}},created:function(){},methods:{handleDropdown:function(t){if(Object(c.a)(t.target.parentElement).filter((function(t){return t.classList.contains("show")})).map((function(t){t.classList.remove("show"),t.childNodes[0]&&t.childNodes[0].setAttribute("aria-expanded",!1),t.childNodes[2]&&t.childNodes[2].classList.remove("show")})),t.target.setAttribute("aria-expanded",!0),t.target.parentElement){t.target.parentElement.classList.toggle("show");var o=t.target.parentElement.childNodes[2];o&&o.classList.toggle("show")}},handleMobileDropdown:function(t){document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans")}}},_=e(53),component=Object(_.a)(l,(function(){var t=this,o=t._self._c;return o("nav",{ref:t.nr,staticClass:"navbar navbar-expand-lg change",class:"light"===t.theme?"light":""},[o("div",{staticClass:"container"},[o("NuxtLink",{staticClass:"logo",attrs:{to:"/"}},["light"===t.theme?o("img",{ref:"lr",attrs:{src:"/img/logo-dark.png",alt:"logo"}}):"themeD"===t.theme?o("img",{ref:"lr",attrs:{src:"/img/logo-light.png",alt:"logo"}}):o("img",{ref:"lr",attrs:{src:t.url_api+"/InstitucionUpea/"+t.carrera_logo,alt:"logo"}})]),t._v(" "),o("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},on:{click:t.handleMobileDropdown}},[t._m(0)]),t._v(" "),o("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[o("ul",{staticClass:"navbar-nav ml-auto"},[o("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[o("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Inicio\n          ")]),t._v(" "),o("div",{staticClass:"dropdown-menu"},[o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/about/about-dark"}},[t._v(" \n              Sobre Nosotros\n            ")])],1)]),t._v(" "),o("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[o("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Convocatorias\n          ")]),t._v(" "),o("div",{staticClass:"dropdown-menu"},[o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/convocatorias"}},[t._v("\n              Convocatorias\n            ")]),t._v(" "),o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/comunicados"}},[t._v("\n              Comunicados\n            ")]),t._v(" "),o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/avisos"}},[t._v("\n              Avisos\n            ")])],1)]),t._v(" "),o("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[o("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Cursos\n          ")]),t._v(" "),o("div",{staticClass:"dropdown-menu"},[o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/cursos"}},[t._v("\n              Cursos\n            ")]),t._v(" "),o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/seminarios"}},[t._v("\n              Seminarios\n            ")])],1)]),t._v(" "),o("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[o("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Mas\n          ")]),t._v(" "),o("div",{staticClass:"dropdown-menu"},[o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/servicios"}},[t._v("\n              Servicios\n            ")]),t._v(" "),o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/ofertasacademicas"}},[t._v("\n              Ofertas Academicas\n            ")]),t._v(" "),o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/publicaciones"}},[t._v("\n              Publicaciones\n            ")]),t._v(" "),o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/gacetas"}},[t._v("\n              Gacetas\n            ")]),t._v(" "),o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/eventos"}},[t._v("\n              Eventos\n            ")]),t._v(" "),o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/videos"}},[t._v("\n              Videos\n            ")])],1)]),t._v(" "),o("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[o("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Links\n          ")]),t._v(" "),o("div",{staticClass:"dropdown-menu"},t._l(t.carrera_links,(function(link,e){return o("a",{key:e,staticClass:"dropdown-item",attrs:{target:"_blank",href:link.ei_link}},[t._v("\n              "+t._s(link.ei_nombre)+"\n            ")])})),0)]),t._v(" "),o("li",{staticClass:"nav-item"},[o("NuxtLink",{staticClass:"nav-link",attrs:{to:"/contact/contact-dark"}},[t._v("\n            Contacto\n          ")])],1)])])],1)])}),[function(){var t=this._self._c;return t("span",{staticClass:"icon-bar"},[t("i",{staticClass:"fas fa-bars"})])}],!1,null,"26d2cc7e",null);o.default=component.exports},725:function(t,o,e){"use strict";e.r(o);var n={props:["title","paragraph","classText"]},r=e(53),component=Object(r.a)(n,(function(){var t=this,o=t._self._c;return o("section",{class:"page-header ".concat(t.classText&&t.classText)},[o("div",{staticClass:"container"},[o("div",{staticClass:"row justify-content-center"},[o("div",{staticClass:"col-lg-7 col-md-9"},[o("div",{staticClass:"cont text-center"},[o("h1",{staticClass:"mb-10 color-font"},[t._v(t._s(t.title))]),t._v(" "),o("p",[t._v(t._s(t.paragraph))])])])])])])}),[],!1,null,"1eba3886",null);o.default=component.exports},770:function(t,o,e){"use strict";e.r(o);e(63);var n={props:["theme","tipo","colection"],data:function(){return{url_api:"https://serviciopagina.upea.bo"}},methods:{convertirFecha:function(t){var o=new Date(t),e=o.getDate(),n=o.getMonth()+1,r=o.getFullYear();return"".concat(e,"/").concat(n,"/").concat(r)}},created:function(){console.log("registro para"+this.tipo),console.log(this.colection)}},r=e(53),component=Object(r.a)(n,(function(){var t=this,o=t._self._c;return o("section",{staticClass:"blog-pg single section-padding pt-0"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row justify-content-center"},[o("div",{staticClass:"col-lg-11"},["convocatorias"==t.tipo||"comunicados"==t.tipo||"avisos"==t.tipo?o("div",{staticClass:"post"},[o("div",{staticClass:"img"},[o("img",{attrs:{src:t.url_api+"/Convocatorias/"+t.colection[0].con_foto_portada,alt:""}})]),t._v(" "),o("div",{staticClass:"content pt-60"},[o("div",{staticClass:"row justify-content-center"},[o("div",{staticClass:"col-lg-10"},[o("div",{staticClass:"cont"},[o("h2",{staticClass:"extra-title"},[t._v("\n                    "+t._s(t.colection[0].con_titulo)+"\n                  ")]),t._v(" "),o("div",{staticClass:"spacial",domProps:{innerHTML:t._s(t.colection[0].con_descripcion)}}),t._v(" "),o("p",[t._v("\n                    Fecha de Inicio : "+t._s(t.convertirFecha(t.colection[0].con_fecha_inicio))),o("br"),t._v("\n                    Fecha de Final : "+t._s(t.convertirFecha(t.colection[0].con_fecha_fin))+"\n                  ")])])])])])]):t._e(),t._v(" "),"cursos"==t.tipo||"seminarios"==t.tipo?o("div",{staticClass:"post"},[o("div",{staticClass:"img"},[o("img",{attrs:{src:t.url_api+"/Cursos/"+t.colection[0].det_img_portada,alt:""}})]),t._v(" "),o("div",{staticClass:"content pt-60"},[o("div",{staticClass:"row justify-content-center"},[o("div",{staticClass:"col-lg-10"},[o("div",{staticClass:"cont"},[o("h2",{staticClass:"extra-title"},[t._v("\n                    "+t._s(t.colection[0].det_titulo)+"\n                  ")]),t._v(" "),o("br"),t._v(" "),o("h6",[t._v("Descripcion")]),t._v(" "),o("div",{staticClass:"spacial",domProps:{innerHTML:t._s(t.colection[0].det_descripcion)}}),t._v(" "),o("h6",[t._v("Mas Informacion")]),t._v(" "),o("p",[t._v("\n                    Fecha de Inicio : "+t._s(t.convertirFecha(t.colection[0].det_fecha_ini))),o("br"),t._v("\n                    Fecha de Final : "+t._s(t.convertirFecha(t.colection[0].det_fecha_fin))),o("br"),t._v("\n                    Grupo de Whatsap : "+t._s(t.colection[0].det_grupo_whatssap)),o("br"),t._v("\n                    Modalidad : "+t._s(t.colection[0].det_modalidad)),o("br"),t._v("\n                    Lugar del Curso : "+t._s(t.colection[0].det_lugar_curso)),o("br"),t._v("\n                    Carga Horaria : "+t._s(t.colection[0].det_carga_horaria)),o("br"),t._v("                  \n                    Cupos del Curso : "+t._s(t.colection[0].det_cupo_max)+"\n                  ")]),t._v(" "),o("h6",[t._v("Costos")]),t._v(" "),o("p",[t._v("\n                    Costo Extranjero : "+t._s(t.colection[0].det_costo_ext)),o("br"),t._v("\n                    Costo Profesores : "+t._s(t.colection[0].det_costo_profe)),o("br"),t._v("\n                    Costo Estudiante : "+t._s(t.colection[0].det_costo)),o("br")])])])])])]):t._e(),t._v(" "),"servicios"==t.tipo?o("div",{staticClass:"post"},[o("div",{staticClass:"img"},[o("img",{attrs:{src:t.url_api+"/Carrera/Servicios/"+t.colection[0].serv_imagen,alt:""}})]),t._v(" "),o("div",{staticClass:"content pt-60"},[o("div",{staticClass:"row justify-content-center"},[o("div",{staticClass:"col-lg-10"},[o("div",{staticClass:"cont"},[o("h2",{staticClass:"extra-title"},[t._v("\n                    "+t._s(t.colection[0].serv_nombre)+"\n                  ")]),t._v(" "),o("br"),t._v(" "),o("h6",[t._v("Descripcion")]),t._v(" "),o("div",{staticClass:"spacial",domProps:{innerHTML:t._s(t.colection[0].serv_descripcion)}}),t._v(" "),o("h6",[t._v("Mas Informacion")]),t._v(" "),o("p",[t._v("\n                    Fecha de Inicio : "+t._s(t.convertirFecha(t.colection[0].serv_registro))),o("br"),t._v("\n                    Fecha de Final : "+t._s(t.convertirFecha(t.colection[0].serv_update))),o("br"),t._v("\n                    Numero de Celular : "+t._s(t.colection[0].serv_nro_celular)),o("br")])])])])])]):t._e(),t._v(" "),"ofertasacademicas"==t.tipo?o("div",{staticClass:"post"},[o("div",{staticClass:"img"},[o("img",{attrs:{src:t.url_api+"/Carrera/OfertasAcademicas/"+t.colection[0].ofertas_imagen,alt:""}})]),t._v(" "),o("div",{staticClass:"content pt-60"},[o("div",{staticClass:"row justify-content-center"},[o("div",{staticClass:"col-lg-10"},[o("div",{staticClass:"cont"},[o("h2",{staticClass:"extra-title"},[t._v("\n                    "+t._s(t.colection[0].ofertas_titulo)+"\n                  ")]),t._v(" "),o("br"),t._v(" "),o("h6",[t._v("Descripcion")]),t._v(" "),o("div",{staticClass:"spacial",domProps:{innerHTML:t._s(t.colection[0].ofertas_descripcion)}}),t._v(" "),o("h6",[t._v("Mas Informacion")]),t._v(" "),o("p",[t._v("\n                    Fecha de Inicio : "+t._s(t.convertirFecha(t.colection[0].ofertas_inscripciones_ini))),o("br"),t._v("\n                    Fecha de Final : "+t._s(t.convertirFecha(t.colection[0].ofertas_inscripciones_fin))),o("br"),t._v("\n                    Fecha de Examen : "+t._s(t.convertirFecha(t.colection[0].ofertas_fecha_examen))),o("br"),t._v("\n                    Referencia : "+t._s(t.colection[0].ofertas_referencia)),o("br")])])])])])]):t._e(),t._v(" "),"publicaciones"==t.tipo?o("div",{staticClass:"post"},[o("div",{staticClass:"img"},[o("img",{attrs:{src:t.url_api+"/Publicaciones/"+t.colection[0].publicaciones_imagen,alt:""}})]),t._v(" "),o("div",{staticClass:"content pt-60"},[o("div",{staticClass:"row justify-content-center"},[o("div",{staticClass:"col-lg-10"},[o("div",{staticClass:"cont"},[o("h2",{staticClass:"extra-title"},[t._v("\n                    "+t._s(t.colection[0].publicaciones_titulo)+"\n                  ")]),t._v(" "),o("br"),t._v(" "),o("h6",[t._v("Descripcion")]),t._v(" "),o("div",{staticClass:"spacial",domProps:{innerHTML:t._s(t.colection[0].publicaciones_descripcion)}}),t._v(" "),o("h6",[t._v("Mas Informacion")]),t._v(" "),o("p",[t._v("\n                    Fecha de publicacion : "+t._s(t.convertirFecha(t.colection[0].publicaciones_fecha))),o("br"),t._v("\n                    Autor : "+t._s(t.colection[0].publicaciones_autor)),o("br")])])])])])]):t._e(),t._v(" "),"gacetas"==t.tipo?o("div",{staticClass:"post"},[o("div",{staticClass:"img"},[o("vue-pdf",{ref:"pdf",staticClass:"pdf-viewer",attrs:{src:t.url_api+"/Gaceta/"+t.colection[0].gaceta_documento,page:1,"original-size":!0}})],1),t._v(" "),o("div",{staticClass:"content pt-60"},[o("div",{staticClass:"row justify-content-center"},[o("div",{staticClass:"col-lg-10"},[o("div",{staticClass:"cont"},[o("h2",{staticClass:"extra-title"},[t._v("\n                    "+t._s(t.colection[0].gaceta_titulo)+"\n                  ")]),t._v(" "),o("br"),t._v(" "),o("h6",[t._v("Mas Informacion")]),t._v(" "),o("p",[t._v("\n                    Fecha de Publicacion : "+t._s(t.convertirFecha(t.colection[0].gaceta_fecha))),o("br")]),t._v(" "),o("a",{staticClass:"butn bord curve mt-30",attrs:{target:"_blank",href:t.url_api+"/Gaceta/"+t.colection[0].gaceta_documento}},[t._v("\n                    Descargar PDF\n                  ")])])])])])]):t._e(),t._v(" "),"eventos"==t.tipo?o("div",{staticClass:"post"},[o("div",{staticClass:"img"},[o("img",{attrs:{src:t.url_api+"/Eventos/"+t.colection[0].evento_imagen,alt:""}})]),t._v(" "),o("div",{staticClass:"content pt-60"},[o("div",{staticClass:"row justify-content-center"},[o("div",{staticClass:"col-lg-10"},[o("div",{staticClass:"cont"},[o("h2",{staticClass:"extra-title"},[t._v("\n                    "+t._s(t.colection[0].evento_titulo)+"\n                  ")]),t._v(" "),o("br"),t._v(" "),o("h6",[t._v("Descripcion")]),t._v(" "),o("div",{staticClass:"spacial",domProps:{innerHTML:t._s(t.colection[0].evento_descripcion)}}),t._v(" "),o("h6",[t._v("Mas Informacion")]),t._v(" "),o("p",[t._v("\n                    Fecha de Actividad : "+t._s(t.colection[0].evento_fecha)),o("br"),t._v("\n                    Hora : "+t._s(t.colection[0].evento_hora)),o("br"),t._v("\n                    Lugar : "+t._s(t.colection[0].evento_lugar)),o("br")])])])])])]):t._e(),t._v(" "),"videos"==t.tipo?o("div",{staticClass:"post"},[o("div",{staticClass:"img"},[o("iframe",{staticStyle:{"border-radius":"5px",width:"100%",height:"460px"},attrs:{src:t.colection[0].video_enlace,frameborder:"0"}})]),t._v(" "),o("div",{staticClass:"content pt-60"},[o("div",{staticClass:"row justify-content-center"},[o("div",{staticClass:"col-lg-10"},[o("div",{staticClass:"cont"},[o("h2",{staticClass:"extra-title"},[t._v("\n                    "+t._s(t.colection[0].video_titulo)+"\n                  ")]),t._v(" "),o("br"),t._v(" "),o("h6",[t._v("Descripcion")]),t._v(" "),o("div",{staticClass:"spacial",domProps:{innerHTML:t._s(t.colection[0].video_breve_descripcion)}})])])])])]):t._e()])])])])}),[],!1,null,"be2728bc",null);o.default=component.exports},889:function(t,o,e){"use strict";e.r(o);var n={layout:"light",head:function(){return{titleTemplate:"%s - Blog Details Light"}},mounted:function(){var t=this.$refs.navbar.$el;window.pageYOffset>300?t.classList.add("nav-scroll"):t.classList.remove("nav-scroll"),window.addEventListener("scroll",(function(){window.pageYOffset>300?t.classList.add("nav-scroll"):t.classList.remove("nav-scroll")}))}},r=e(53),component=Object(r.a)(n,(function(){var t=this,o=t._self._c;return o("div",[t._m(0),t._v(" "),o("Navbar",{ref:"navbar",attrs:{theme:"light"}}),t._v(" "),o("PageHeader",{attrs:{title:"Blog Details.",paragraph:"All the most current news and events of our creative team."}}),t._v(" "),o("BlogDetails",{attrs:{theme:"light"}}),t._v(" "),o("Footer")],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"circle-bg"},[t("div",{staticClass:"circle-color fixed"},[t("div",{staticClass:"gradient-circle"}),this._v(" "),t("div",{staticClass:"gradient-circle two"})])])}],!1,null,"5f304e90",null);o.default=component.exports;installComponents(component,{Navbar:e(711).default,PageHeader:e(725).default,BlogDetails:e(770).default,Footer:e(709).default})}}]);