(window.webpackJsonp=window.webpackJsonp||[]).push([[102,11,27,45,49],{708:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var o=r(113),n=Object(o.c)("Institucion",{state:function(){return{url_api:"https://serviciopagina.upea.bo",institucion:null,nombre:"ingenieria de sistemas",carrera_links_externos:null,carrera_convocatorias:null,carrera_avisos:null,carrera_comunicados:null,carrera_cursos:null,carrera_seminarios:null,carrera_autoridades:null,carrera_servicios:null,carrera_ofertasacademicas:null,carrera_publicaciones:null,carrera_gacetas:null,carrera_eventos:null,carrera_videos:null,fotosPagina:null,fotosPortada:null,title_index_about:"Perfil y Carrera de Licenciatura en ",title_index_services:"Informacion sobre la carrera",title_funfact:"Todos los comunicados de la Carrera",pretitle_convocatorias:"Lo ultimo de ...",title_convocatorias:"Convocatorias, Comunicados y Avisos",pretitle_cursos:"Lo ultimo de ...",title_cursos:"Curso y Seminarios",pretitle_autoridades:"Nuestras",title_autoridades:"Autoridades",title_index_organigrama:"Organigrama de la carrera de",title_categories:"Categorias",text_categories:"Estudiar en la Universidad Pública de El Alto es un privilegio que implica responsabilidad y entrega, pero también es una oportunidad para crecer y alcanzar nuestros sueños.",textBackground_categories:"Upea",title_contacto:"Contacto",pretitle_contacto:"contactate con la universidad para mas informacion sobre la carrera.",title_about:"Historia de la carrera"}},actions:{asignarInstitucion:function(t){this.institucion=t},asignarCarreraLinksExternos:function(t){this.carrera_links_externos=t},asignarConvocatorias:function(t){this.carrera_convocatorias=t},asignarComunicados:function(t){this.carrera_comunicados=t},asignarAvisos:function(t){this.carrera_avisos=t},asignarCursos:function(t){this.carrera_cursos=t},asignarSeminarios:function(t){this.carrera_seminarios=t},asignarFotosPagina:function(t){this.fotosPagina=t},asignarFotosPortada:function(t){this.fotosPortada=t},asignarServicios:function(t){this.carrera_servicios=t},asignarOfertasAcademicas:function(t){this.carrera_ofertasacademicas=t},asignarPublicaciones:function(t){this.carrera_publicaciones=t},asignarGacetas:function(t){this.carrera_gacetas=t},asignarEventos:function(t){this.carrera_eventos=t},asignarVideos:function(t){this.carrera_videos=t}}})},709:function(t,e,r){"use strict";r.r(e);var o=r(11),n=(r(77),r(708)),c={props:["hideBGCOLOR"],asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.$axios,o=Object(n.a)(),null!=Object(n.a)().institucion){e.next=7;break}return e.next=5,r.$get("/api/InstitucionUPEA/7");case 5:c=e.sent,o.asignarInstitucion(c.Descripcion);case 7:case"end":return e.stop()}}),e)})))()},data:function(){return{url_api:"https://serviciopagina.upea.bo",carrera_celular1:Object(n.a)().institucion.institucion_celular1,carrera_celular2:Object(n.a)().institucion.institucion_celular2,carrera_telefono1:Object(n.a)().institucion.institucion_telefono1,carrera_telefono2:Object(n.a)().institucion.institucion_telefono2,carrera_correo1:Object(n.a)().institucion.institucion_correo1,carrera_correo2:Object(n.a)().institucion_correo2,carrera_facebook:Object(n.a)().institucion.institucion_facebook,carrera_youtube:Object(n.a)().institucion.institucion_youtube,carrera_twitter:Object(n.a)().institucion.institucion_twitter,carrera_direccion:Object(n.a)().institucion.institucion_direccion,carrera_logo:Object(n.a)().institucion.institucion_logo,carrera_nombre:Object(n.a)().institucion.institucion_nombre}}},l=r(53),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("footer",{class:"".concat(t.hideBGCOLOR?"":"sub-bg")},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-4"},[e("div",{staticClass:"item md-mb50"},[t._m(0),t._v(" "),e("ul",[e("li",[e("span",{staticClass:"icon pe-7s-map-marker"}),t._v(" "),e("div",{staticClass:"cont"},[e("h6",[t._v("direccion")]),t._v(" "),e("p",[t._v(t._s(t.carrera_direccion))])])]),t._v(" "),e("li",[e("span",{staticClass:"icon pe-7s-mail"}),t._v(" "),e("div",{staticClass:"cont"},[e("h6",[t._v("Correo")]),t._v(" "),e("p",[t._v(t._s(t.carrera_correo1))])])]),t._v(" "),e("li",[e("span",{staticClass:"icon pe-7s-call"}),t._v(" "),e("div",{staticClass:"cont"},[e("h6",[t._v("Telefono")]),t._v(" "),e("p",[t._v(t._s(t.carrera_telefono1))])])])])])]),t._v(" "),e("div",{staticClass:"col-lg-4"}),t._v(" "),e("div",{staticClass:"col-lg-4"},[e("div",{staticClass:"item"},[e("div",{staticClass:"logo"},[e("img",{attrs:{src:t.url_api+"/InstitucionUpea/"+t.carrera_logo,alt:"logo"}}),t._v(" "),e("span",[t._v(t._s(t.carrera_nombre))])]),t._v(" "),e("div",{staticClass:"social"},[e("a",{attrs:{href:t.carrera_facebook,target:"_blank"}},[e("i",{staticClass:"fab fa-facebook-f"})]),t._v(" "),e("a",{attrs:{href:t.carrera_twitter,target:"_blank"}},[e("i",{staticClass:"fab fa-twitter"})]),t._v(" "),e("a",{attrs:{href:t.carrera_youtube,target:"_blank"}},[e("i",{staticClass:"fab fa-youtube"})])]),t._v(" "),t._m(1)])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"title"},[t("h5",[this._v("Contacta con Nosotros")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"copy-right"},[e("p",[t._v("\n              © 2023, Todos los derechos reservados \n              "),e("span",[t._v("Universidad Publica de El Alto")]),t._v(".\n            ")]),t._v(" "),e("p",[t._v("Desarrollador "),e("a",{attrs:{target:"_blank",href:"https://www.facebook.com/profile.php?id=100008367045999"}},[t._v("Cvm")])])])}],!1,null,"78e3ff5f",null);e.default=component.exports;installComponents(component,{Footer:r(709).default})},710:function(t,e,r){"use strict";e.a=function(t){var e=[];if(!t.parentNode)return e;for(var r=t.parentNode.firstChild;r;)1===r.nodeType&&r!==t&&e.push(r),r=r.nextSibling;return e}},711:function(t,e,r){"use strict";r.r(e);var o=r(11),n=(r(62),r(54),r(21),r(77),r(708)),c=r(710),l={props:["lr","theme","nr"],asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.$axios,e.prev=1,o=Object(n.a)(),null!=Object(n.a)().carrera_links_externos){e.next=8;break}return e.next=6,r.$get("/api/linksIntExtAll/7");case 6:c=e.sent,o.asignarCarreraLinksExternos(c);case 8:if(null!=Object(n.a)().institucion){e.next=13;break}return e.next=11,r.$get("/api/InstitucionUPEA/7");case 11:l=e.sent,o.asignarInstitucion(l.Descripcion);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.error("el error es: ",e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})))()},data:function(){return{url_api:"https://serviciopagina.upea.bo",carrera_logo:Object(n.a)().institucion.institucion_logo,carrera_nombre:Object(n.a)().institucion.institucion_nombre,carrera_links:Object(n.a)().carrera_links_externos}},created:function(){},methods:{handleDropdown:function(t){if(Object(c.a)(t.target.parentElement).filter((function(t){return t.classList.contains("show")})).map((function(t){t.classList.remove("show"),t.childNodes[0]&&t.childNodes[0].setAttribute("aria-expanded",!1),t.childNodes[2]&&t.childNodes[2].classList.remove("show")})),t.target.setAttribute("aria-expanded",!0),t.target.parentElement){t.target.parentElement.classList.toggle("show");var e=t.target.parentElement.childNodes[2];e&&e.classList.toggle("show")}},handleMobileDropdown:function(t){document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans")}}},_=r(53),component=Object(_.a)(l,(function(){var t=this,e=t._self._c;return e("nav",{ref:t.nr,staticClass:"navbar navbar-expand-lg change",class:"light"===t.theme?"light":""},[e("div",{staticClass:"container"},[e("NuxtLink",{staticClass:"logo",attrs:{to:"/"}},["light"===t.theme?e("img",{ref:"lr",attrs:{src:"/img/logo-dark.png",alt:"logo"}}):"themeD"===t.theme?e("img",{ref:"lr",attrs:{src:"/img/logo-light.png",alt:"logo"}}):e("img",{ref:"lr",attrs:{src:t.url_api+"/InstitucionUpea/"+t.carrera_logo,alt:"logo"}})]),t._v(" "),e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},on:{click:t.handleMobileDropdown}},[t._m(0)]),t._v(" "),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav ml-auto"},[e("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[e("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Inicio\n          ")]),t._v(" "),e("div",{staticClass:"dropdown-menu"},[e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/about/about-dark"}},[t._v(" \n              Sobre Nosotros\n            ")])],1)]),t._v(" "),e("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[e("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Convocatorias\n          ")]),t._v(" "),e("div",{staticClass:"dropdown-menu"},[e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/convocatorias"}},[t._v("\n              Convocatorias\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/comunicados"}},[t._v("\n              Comunicados\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/avisos"}},[t._v("\n              Avisos\n            ")])],1)]),t._v(" "),e("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[e("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Cursos\n          ")]),t._v(" "),e("div",{staticClass:"dropdown-menu"},[e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/cursos"}},[t._v("\n              Cursos\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/seminarios"}},[t._v("\n              Seminarios\n            ")])],1)]),t._v(" "),e("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[e("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Mas\n          ")]),t._v(" "),e("div",{staticClass:"dropdown-menu"},[e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/servicios"}},[t._v("\n              Servicios\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/ofertasacademicas"}},[t._v("\n              Ofertas Academicas\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/publicaciones"}},[t._v("\n              Publicaciones\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/gacetas"}},[t._v("\n              Gacetas\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/eventos"}},[t._v("\n              Eventos\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/convocatorias/videos"}},[t._v("\n              Videos\n            ")])],1)]),t._v(" "),e("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[e("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Links\n          ")]),t._v(" "),e("div",{staticClass:"dropdown-menu"},t._l(t.carrera_links,(function(link,r){return e("a",{key:r,staticClass:"dropdown-item",attrs:{target:"_blank",href:link.ei_link}},[t._v("\n              "+t._s(link.ei_nombre)+"\n            ")])})),0)]),t._v(" "),e("li",{staticClass:"nav-item"},[e("NuxtLink",{staticClass:"nav-link",attrs:{to:"/contact/contact-dark"}},[t._v("\n            Contacto\n          ")])],1)])])],1)])}),[function(){var t=this._self._c;return t("span",{staticClass:"icon-bar"},[t("i",{staticClass:"fas fa-bars"})])}],!1,null,"26d2cc7e",null);e.default=component.exports},725:function(t,e,r){"use strict";r.r(e);var o={props:["title","paragraph","classText"]},n=r(53),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("section",{class:"page-header ".concat(t.classText&&t.classText)},[e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-7 col-md-9"},[e("div",{staticClass:"cont text-center"},[e("h1",{staticClass:"mb-10 color-font"},[t._v(t._s(t.title))]),t._v(" "),e("p",[t._v(t._s(t.paragraph))])])])])])])}),[],!1,null,"1eba3886",null);e.default=component.exports},748:function(t,e){},770:function(t,e,r){"use strict";r.r(e);r(63);var o={props:["theme","tipo","colection"],data:function(){return{url_api:"https://serviciopagina.upea.bo"}},methods:{convertirFecha:function(t){var e=new Date(t),r=e.getDate(),o=e.getMonth()+1,n=e.getFullYear();return"".concat(r,"/").concat(o,"/").concat(n)}},created:function(){console.log("registro para"+this.tipo),console.log(this.colection)}},n=r(53),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"blog-pg single section-padding pt-0"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-11"},["convocatorias"==t.tipo||"comunicados"==t.tipo||"avisos"==t.tipo?e("div",{staticClass:"post"},[e("div",{staticClass:"img"},[e("img",{attrs:{src:t.url_api+"/Convocatorias/"+t.colection[0].con_foto_portada,alt:""}})]),t._v(" "),e("div",{staticClass:"content pt-60"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-10"},[e("div",{staticClass:"cont"},[e("h2",{staticClass:"extra-title"},[t._v("\n                    "+t._s(t.colection[0].con_titulo)+"\n                  ")]),t._v(" "),e("div",{staticClass:"spacial",domProps:{innerHTML:t._s(t.colection[0].con_descripcion)}}),t._v(" "),e("p",[t._v("\n                    Fecha de Inicio : "+t._s(t.convertirFecha(t.colection[0].con_fecha_inicio))),e("br"),t._v("\n                    Fecha de Final : "+t._s(t.convertirFecha(t.colection[0].con_fecha_fin))+"\n                  ")])])])])])]):t._e(),t._v(" "),"cursos"==t.tipo||"seminarios"==t.tipo?e("div",{staticClass:"post"},[e("div",{staticClass:"img"},[e("img",{attrs:{src:t.url_api+"/Cursos/"+t.colection[0].det_img_portada,alt:""}})]),t._v(" "),e("div",{staticClass:"content pt-60"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-10"},[e("div",{staticClass:"cont"},[e("h2",{staticClass:"extra-title"},[t._v("\n                    "+t._s(t.colection[0].det_titulo)+"\n                  ")]),t._v(" "),e("br"),t._v(" "),e("h6",[t._v("Descripcion")]),t._v(" "),e("div",{staticClass:"spacial",domProps:{innerHTML:t._s(t.colection[0].det_descripcion)}}),t._v(" "),e("h6",[t._v("Mas Informacion")]),t._v(" "),e("p",[t._v("\n                    Fecha de Inicio : "+t._s(t.convertirFecha(t.colection[0].det_fecha_ini))),e("br"),t._v("\n                    Fecha de Final : "+t._s(t.convertirFecha(t.colection[0].det_fecha_fin))),e("br"),t._v("\n                    Grupo de Whatsap : "+t._s(t.colection[0].det_grupo_whatssap)),e("br"),t._v("\n                    Modalidad : "+t._s(t.colection[0].det_modalidad)),e("br"),t._v("\n                    Lugar del Curso : "+t._s(t.colection[0].det_lugar_curso)),e("br"),t._v("\n                    Carga Horaria : "+t._s(t.colection[0].det_carga_horaria)),e("br"),t._v("                  \n                    Cupos del Curso : "+t._s(t.colection[0].det_cupo_max)+"\n                  ")]),t._v(" "),e("h6",[t._v("Costos")]),t._v(" "),e("p",[t._v("\n                    Costo Extranjero : "+t._s(t.colection[0].det_costo_ext)),e("br"),t._v("\n                    Costo Profesores : "+t._s(t.colection[0].det_costo_profe)),e("br"),t._v("\n                    Costo Estudiante : "+t._s(t.colection[0].det_costo)),e("br")])])])])])]):t._e(),t._v(" "),"servicios"==t.tipo?e("div",{staticClass:"post"},[e("div",{staticClass:"img"},[e("img",{attrs:{src:t.url_api+"/Carrera/Servicios/"+t.colection[0].serv_imagen,alt:""}})]),t._v(" "),e("div",{staticClass:"content pt-60"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-10"},[e("div",{staticClass:"cont"},[e("h2",{staticClass:"extra-title"},[t._v("\n                    "+t._s(t.colection[0].serv_nombre)+"\n                  ")]),t._v(" "),e("br"),t._v(" "),e("h6",[t._v("Descripcion")]),t._v(" "),e("div",{staticClass:"spacial",domProps:{innerHTML:t._s(t.colection[0].serv_descripcion)}}),t._v(" "),e("h6",[t._v("Mas Informacion")]),t._v(" "),e("p",[t._v("\n                    Fecha de Inicio : "+t._s(t.convertirFecha(t.colection[0].serv_registro))),e("br"),t._v("\n                    Fecha de Final : "+t._s(t.convertirFecha(t.colection[0].serv_update))),e("br"),t._v("\n                    Numero de Celular : "+t._s(t.colection[0].serv_nro_celular)),e("br")])])])])])]):t._e(),t._v(" "),"ofertasacademicas"==t.tipo?e("div",{staticClass:"post"},[e("div",{staticClass:"img"},[e("img",{attrs:{src:t.url_api+"/Carrera/OfertasAcademicas/"+t.colection[0].ofertas_imagen,alt:""}})]),t._v(" "),e("div",{staticClass:"content pt-60"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-10"},[e("div",{staticClass:"cont"},[e("h2",{staticClass:"extra-title"},[t._v("\n                    "+t._s(t.colection[0].ofertas_titulo)+"\n                  ")]),t._v(" "),e("br"),t._v(" "),e("h6",[t._v("Descripcion")]),t._v(" "),e("div",{staticClass:"spacial",domProps:{innerHTML:t._s(t.colection[0].ofertas_descripcion)}}),t._v(" "),e("h6",[t._v("Mas Informacion")]),t._v(" "),e("p",[t._v("\n                    Fecha de Inicio : "+t._s(t.convertirFecha(t.colection[0].ofertas_inscripciones_ini))),e("br"),t._v("\n                    Fecha de Final : "+t._s(t.convertirFecha(t.colection[0].ofertas_inscripciones_fin))),e("br"),t._v("\n                    Fecha de Examen : "+t._s(t.convertirFecha(t.colection[0].ofertas_fecha_examen))),e("br"),t._v("\n                    Referencia : "+t._s(t.colection[0].ofertas_referencia)),e("br")])])])])])]):t._e(),t._v(" "),"publicaciones"==t.tipo?e("div",{staticClass:"post"},[e("div",{staticClass:"img"},[e("img",{attrs:{src:t.url_api+"/Publicaciones/"+t.colection[0].publicaciones_imagen,alt:""}})]),t._v(" "),e("div",{staticClass:"content pt-60"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-10"},[e("div",{staticClass:"cont"},[e("h2",{staticClass:"extra-title"},[t._v("\n                    "+t._s(t.colection[0].publicaciones_titulo)+"\n                  ")]),t._v(" "),e("br"),t._v(" "),e("h6",[t._v("Descripcion")]),t._v(" "),e("div",{staticClass:"spacial",domProps:{innerHTML:t._s(t.colection[0].publicaciones_descripcion)}}),t._v(" "),e("h6",[t._v("Mas Informacion")]),t._v(" "),e("p",[t._v("\n                    Fecha de publicacion : "+t._s(t.convertirFecha(t.colection[0].publicaciones_fecha))),e("br"),t._v("\n                    Autor : "+t._s(t.colection[0].publicaciones_autor)),e("br")])])])])])]):t._e(),t._v(" "),"gacetas"==t.tipo?e("div",{staticClass:"post"},[e("div",{staticClass:"img"},[e("vue-pdf",{ref:"pdf",staticClass:"pdf-viewer",attrs:{src:t.url_api+"/Gaceta/"+t.colection[0].gaceta_documento,page:1,"original-size":!0}})],1),t._v(" "),e("div",{staticClass:"content pt-60"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-10"},[e("div",{staticClass:"cont"},[e("h2",{staticClass:"extra-title"},[t._v("\n                    "+t._s(t.colection[0].gaceta_titulo)+"\n                  ")]),t._v(" "),e("br"),t._v(" "),e("h6",[t._v("Mas Informacion")]),t._v(" "),e("p",[t._v("\n                    Fecha de Publicacion : "+t._s(t.convertirFecha(t.colection[0].gaceta_fecha))),e("br")]),t._v(" "),e("a",{staticClass:"butn bord curve mt-30",attrs:{target:"_blank",href:t.url_api+"/Gaceta/"+t.colection[0].gaceta_documento}},[t._v("\n                    Descargar PDF\n                  ")])])])])])]):t._e(),t._v(" "),"eventos"==t.tipo?e("div",{staticClass:"post"},[e("div",{staticClass:"img"},[e("img",{attrs:{src:t.url_api+"/Eventos/"+t.colection[0].evento_imagen,alt:""}})]),t._v(" "),e("div",{staticClass:"content pt-60"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-10"},[e("div",{staticClass:"cont"},[e("h2",{staticClass:"extra-title"},[t._v("\n                    "+t._s(t.colection[0].evento_titulo)+"\n                  ")]),t._v(" "),e("br"),t._v(" "),e("h6",[t._v("Descripcion")]),t._v(" "),e("div",{staticClass:"spacial",domProps:{innerHTML:t._s(t.colection[0].evento_descripcion)}}),t._v(" "),e("h6",[t._v("Mas Informacion")]),t._v(" "),e("p",[t._v("\n                    Fecha de Actividad : "+t._s(t.colection[0].evento_fecha)),e("br"),t._v("\n                    Hora : "+t._s(t.colection[0].evento_hora)),e("br"),t._v("\n                    Lugar : "+t._s(t.colection[0].evento_lugar)),e("br")])])])])])]):t._e(),t._v(" "),"videos"==t.tipo?e("div",{staticClass:"post"},[e("div",{staticClass:"img"},[e("iframe",{staticStyle:{"border-radius":"5px",width:"100%",height:"460px"},attrs:{src:t.colection[0].video_enlace,frameborder:"0"}})]),t._v(" "),e("div",{staticClass:"content pt-60"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-10"},[e("div",{staticClass:"cont"},[e("h2",{staticClass:"extra-title"},[t._v("\n                    "+t._s(t.colection[0].video_titulo)+"\n                  ")]),t._v(" "),e("br"),t._v(" "),e("h6",[t._v("Descripcion")]),t._v(" "),e("div",{staticClass:"spacial",domProps:{innerHTML:t._s(t.colection[0].video_breve_descripcion)}})])])])])]):t._e()])])])])}),[],!1,null,"be2728bc",null);e.default=component.exports},930:function(t,e,r){"use strict";r.r(e);var o=r(11),n=(r(77),r(54),r(21),r(43),r(747)),c=r.n(n),l=r(708),_={layout:"dark",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,n,c,_,d,v,f,m,C,h,x,w,k,O,j,y,D,I,L,A;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.$axios,e.prev=1,o=Object(l.a)(),null!=Object(l.a)().institucion&&null!=Object(l.a)().carrera_links_externos){e.next=16;break}return e.next=6,r.$get("/api/InstitucionUPEA/7");case 6:return n=e.sent,c=n.Descripcion.portada.filter((function(t){return"PAGINA"===t.portada_titulo})),_=n.Descripcion.portada.filter((function(t){return"PAGINA"!=t.portada_titulo})),e.next=11,r.$get("/api/linksIntExtAll/7");case 11:d=e.sent,o.asignarCarreraLinksExternos(d),o.asignarFotosPagina(c),o.asignarFotosPortada(_),o.asignarInstitucion(n.Descripcion);case 16:if(null!=Object(l.a)().carrera_cursos&&null!=Object(l.a)().carrera_seminarios){e.next=25;break}return e.next=19,r.$get("/api/cursosAll/1");case 19:v=e.sent,f=v.filter((function(t){return"1"===t.det_estado})),m=f.filter((function(t){return"CURSOS"===t.tipo_curso_otro.tipo_conv_curso_nombre})),C=f.filter((function(t){return"SEMINARIOS"===t.tipo_curso_otro.tipo_conv_curso_nombre})),o.asignarCursos(m),o.asignarSeminarios(C);case 25:if(null!=Object(l.a)().carrera_convocatorias&&!Object(l.a)().carrera_avisos&&!Object(l.a)().carrera_comunicados){e.next=36;break}return e.next=28,r.$get("/api/convocatoriasAll/1");case 28:h=e.sent,x=h.filter((function(t){return"1"===t.tipo_conv_comun.tipo_conv_comun_estado})),w=x.filter((function(t){return"COMUNICADOS"===t.tipo_conv_comun.tipo_conv_comun_titulo})),k=x.filter((function(t){return"CONVOCATORIAS"===t.tipo_conv_comun.tipo_conv_comun_titulo})),O=x.filter((function(t){return"AVISOS"===t.tipo_conv_comun.tipo_conv_comun_titulo})),o.asignarConvocatorias(k),o.asignarComunicados(w),o.asignarAvisos(O);case 36:if(null!=Object(l.a)().carrera_servicios&&null!=Object(l.a)().carrera_ofertasacademicas){e.next=45;break}return e.next=39,r.$get("/api/ServicioAll/1");case 39:return j=e.sent,e.next=42,r.$get("/api/OfertasAcademicasAll/1");case 42:y=e.sent,o.asignarServicios(j),o.asignarOfertasAcademicas(y);case 45:if(null!=Object(l.a)().carrera_publicaciones&&null!=Object(l.a)().carrera_gacetas&&null!=Object(l.a)().carrera_eventos&&null!=Object(l.a)().carrera_videos){e.next=62;break}return e.next=48,r.$get("/api/publicacionesAll/7");case 48:return D=e.sent,e.next=51,r.$get("/api/gacetaunivAll/7");case 51:return I=e.sent,e.next=54,r.$get("/api/eventoAll/7");case 54:return L=e.sent,e.next=57,r.$get("/api/VideosAll/7");case 57:A=e.sent,o.asignarPublicaciones(D),o.asignarGacetas(I),o.asignarEventos(L),o.asignarVideos(A);case 62:e.next=67;break;case 64:e.prev=64,e.t0=e.catch(1),console.error("error",e.t0);case 67:case"end":return e.stop()}}),e,null,[[1,64]])})))()},data:function(){return{carrera_nombre:Object(l.a)().institucion.institucion_nombre,institucion_logo:Object(l.a)().institucion.institucion_logo,url_api:"https://serviciopagina.upea.bo",colection:null}},methods:{decryptID:function(t){return c.a.AES.decrypt(t,"UniversidadPublicaDeElAlto").toString(c.a.enc.Utf8)},createdComponent:function(){var t=this;switch(this.$route.params.detalle){case"convocatorias":this.colection=Object(l.a)().carrera_convocatorias.filter((function(e){return e.idconvocatorias==t.decryptID(t.$route.query.id)}));break;case"comunicados":this.colection=Object(l.a)().carrera_comunicados.filter((function(e){return e.idconvocatorias==t.decryptID(t.$route.query.id)}));break;case"avisos":this.colection=Object(l.a)().carrera_avisos.filter((function(e){return e.idconvocatorias==t.decryptID(t.$route.query.id)}));break;case"cursos":this.colection=Object(l.a)().carrera_cursos.filter((function(e){return e.iddetalle_cursos_academicos==t.decryptID(t.$route.query.id)}));break;case"seminarios":this.colection=Object(l.a)().carrera_seminarios.filter((function(e){return e.iddetalle_cursos_academicos==t.decryptID(t.$route.query.id)}));break;case"servicios":this.colection=Object(l.a)().carrera_servicios.filter((function(e){return e.serv_id==t.decryptID(t.$route.query.id)}));break;case"ofertasacademicas":this.colection=Object(l.a)().carrera_ofertasacademicas.filter((function(e){return e.ofertas_id==t.decryptID(t.$route.query.id)}));break;case"publicaciones":this.colection=Object(l.a)().carrera_publicaciones.filter((function(e){return e.publicaciones_id==t.decryptID(t.$route.query.id)}));break;case"gacetas":this.colection=Object(l.a)().carrera_gacetas.filter((function(e){return e.gaceta_id==t.decryptID(t.$route.query.id)}));break;case"eventos":this.colection=Object(l.a)().carrera_eventos.filter((function(e){return e.evento_id==t.decryptID(t.$route.query.id)}));break;case"videos":this.colection=Object(l.a)().carrera_videos.filter((function(e){return e.video_id==t.decryptID(t.$route.query.id)}))}}},created:function(){this.createdComponent()},head:function(){return{title:this.carrera_nombre+" | "+this.$route.params.detalle,link:[{rel:"icon",type:"image/x-icon",href:this.url_api+"/InstitucionUpea/"+this.institucion_logo}]}},mounted:function(){var t=this.$refs.navbar.$el;window.pageYOffset>300?t.classList.add("nav-scroll"):t.classList.remove("nav-scroll"),window.addEventListener("scroll",(function(){window.pageYOffset>300?t.classList.add("nav-scroll"):t.classList.remove("nav-scroll")}))}},d=r(53),component=Object(d.a)(_,(function(){var t=this,e=t._self._c;return e("div",[t._m(0),t._v(" "),e("Navbar",{ref:"navbar"}),t._v(" "),e("PageHeader",{attrs:{title:"Detalles de ".concat(t.$route.params.detalle),paragraph:"Todas las noticias y eventos más actuales de ".concat(t.carrera_nombre,".")}}),t._v(" "),e("BlogDetails",{attrs:{colection:t.colection,tipo:t.$route.params.detalle}}),t._v(" "),e("Footer")],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"circle-bg"},[t("div",{staticClass:"circle-color fixed"},[t("div",{staticClass:"gradient-circle"}),this._v(" "),t("div",{staticClass:"gradient-circle two"})])])}],!1,null,"0ab0b73a",null);e.default=component.exports;installComponents(component,{Navbar:r(711).default,PageHeader:r(725).default,BlogDetails:r(770).default,Footer:r(709).default})}}]);