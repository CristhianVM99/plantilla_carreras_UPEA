(window.webpackJsonp=window.webpackJsonp||[]).push([[28,27],{708:function(t,r,e){"use strict";e.d(r,"a",(function(){return c}));var o=e(113),c=Object(o.c)("Institucion",{state:function(){return{url_api:"https://serviciopagina.upea.bo",institucion:null,nombre:"ingenieria de sistemas",carrera_links_externos:null,carrera_convocatorias:null,carrera_avisos:null,carrera_comunicados:null,carrera_cursos:null,carrera_seminarios:null,carrera_autoridades:null,carrera_servicios:null,carrera_ofertasacademicas:null,carrera_publicaciones:null,carrera_gacetas:null,carrera_eventos:null,carrera_videos:null,fotosPagina:null,fotosPortada:null,title_index_about:"Perfil y Carrera de Licenciatura en ",title_index_services:"Informacion sobre la carrera",title_funfact:"Todos los comunicados de la Carrera",pretitle_convocatorias:"Lo ultimo de ...",title_convocatorias:"Convocatorias, Comunicados y Avisos",pretitle_cursos:"Lo ultimo de ...",title_cursos:"Curso y Seminarios",pretitle_autoridades:"Nuestras",title_autoridades:"Autoridades",title_index_organigrama:"Organigrama de la carrera de",title_categories:"Categorias",text_categories:"Estudiar en la Universidad Pública de El Alto es un privilegio que implica responsabilidad y entrega, pero también es una oportunidad para crecer y alcanzar nuestros sueños.",textBackground_categories:"Upea",title_contacto:"Contacto",pretitle_contacto:"contactate con la universidad para mas informacion sobre la carrera.",title_about:"Historia de la carrera"}},actions:{asignarInstitucion:function(t){this.institucion=t},asignarCarreraLinksExternos:function(t){this.carrera_links_externos=t},asignarConvocatorias:function(t){this.carrera_convocatorias=t},asignarComunicados:function(t){this.carrera_comunicados=t},asignarAvisos:function(t){this.carrera_avisos=t},asignarCursos:function(t){this.carrera_cursos=t},asignarSeminarios:function(t){this.carrera_seminarios=t},asignarFotosPagina:function(t){this.fotosPagina=t},asignarFotosPortada:function(t){this.fotosPortada=t},asignarServicios:function(t){this.carrera_servicios=t},asignarOfertasAcademicas:function(t){this.carrera_ofertasacademicas=t},asignarPublicaciones:function(t){this.carrera_publicaciones=t},asignarGacetas:function(t){this.carrera_gacetas=t},asignarEventos:function(t){this.carrera_eventos=t},asignarVideos:function(t){this.carrera_videos=t}}})},709:function(t,r,e){"use strict";e.r(r);var o=e(11),c=(e(77),e(708)),n={props:["hideBGCOLOR"],asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function r(){var e,o,n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e=t.$axios,o=Object(c.a)(),null!=Object(c.a)().institucion){r.next=7;break}return r.next=5,e.$get("/api/InstitucionUPEA/7");case 5:n=r.sent,o.asignarInstitucion(n.Descripcion);case 7:case"end":return r.stop()}}),r)})))()},data:function(){return{url_api:"https://serviciopagina.upea.bo",carrera_celular1:Object(c.a)().institucion.institucion_celular1,carrera_celular2:Object(c.a)().institucion.institucion_celular2,carrera_telefono1:Object(c.a)().institucion.institucion_telefono1,carrera_telefono2:Object(c.a)().institucion.institucion_telefono2,carrera_correo1:Object(c.a)().institucion.institucion_correo1,carrera_correo2:Object(c.a)().institucion_correo2,carrera_facebook:Object(c.a)().institucion.institucion_facebook,carrera_youtube:Object(c.a)().institucion.institucion_youtube,carrera_twitter:Object(c.a)().institucion.institucion_twitter,carrera_direccion:Object(c.a)().institucion.institucion_direccion,carrera_logo:Object(c.a)().institucion.institucion_logo,carrera_nombre:Object(c.a)().institucion.institucion_nombre}}},l=e(53),component=Object(l.a)(n,(function(){var t=this,r=t._self._c;return r("footer",{class:"".concat(t.hideBGCOLOR?"":"sub-bg")},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-4"},[r("div",{staticClass:"item md-mb50"},[t._m(0),t._v(" "),r("ul",[r("li",[r("span",{staticClass:"icon pe-7s-map-marker"}),t._v(" "),r("div",{staticClass:"cont"},[r("h6",[t._v("direccion")]),t._v(" "),r("p",[t._v(t._s(t.carrera_direccion))])])]),t._v(" "),r("li",[r("span",{staticClass:"icon pe-7s-mail"}),t._v(" "),r("div",{staticClass:"cont"},[r("h6",[t._v("Correo")]),t._v(" "),r("p",[t._v(t._s(t.carrera_correo1))])])]),t._v(" "),r("li",[r("span",{staticClass:"icon pe-7s-call"}),t._v(" "),r("div",{staticClass:"cont"},[r("h6",[t._v("Telefono")]),t._v(" "),r("p",[t._v(t._s(t.carrera_telefono1))])])])])])]),t._v(" "),r("div",{staticClass:"col-lg-4"}),t._v(" "),r("div",{staticClass:"col-lg-4"},[r("div",{staticClass:"item"},[r("div",{staticClass:"logo"},[r("img",{attrs:{src:t.url_api+"/InstitucionUpea/"+t.carrera_logo,alt:"logo"}}),t._v(" "),r("span",[t._v(t._s(t.carrera_nombre))])]),t._v(" "),r("div",{staticClass:"social"},[r("a",{attrs:{href:t.carrera_facebook,target:"_blank"}},[r("i",{staticClass:"fab fa-facebook-f"})]),t._v(" "),r("a",{attrs:{href:t.carrera_twitter,target:"_blank"}},[r("i",{staticClass:"fab fa-twitter"})]),t._v(" "),r("a",{attrs:{href:t.carrera_youtube,target:"_blank"}},[r("i",{staticClass:"fab fa-youtube"})])]),t._v(" "),t._m(1)])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"title"},[t("h5",[this._v("Contacta con Nosotros")])])},function(){var t=this,r=t._self._c;return r("div",{staticClass:"copy-right"},[r("p",[t._v("\n              © 2023, Todos los derechos reservados \n              "),r("span",[t._v("Universidad Publica de El Alto")]),t._v(".\n            ")]),t._v(" "),r("p",[t._v("Desarrollador "),r("a",{attrs:{target:"_blank",href:"https://www.facebook.com/profile.php?id=100008367045999"}},[t._v("Cvm")])])])}],!1,null,"78e3ff5f",null);r.default=component.exports;installComponents(component,{Footer:e(709).default})},828:function(t,r,e){"use strict";e.r(r);var o={},c=e(53),component=Object(c.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var t=this,r=t._self._c;return r("footer",{staticClass:"sub-bg"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-4"},[r("div",{staticClass:"item md-mb50"},[r("div",{staticClass:"title"},[r("h5",[t._v("Contact Us")])]),t._v(" "),r("ul",[r("li",[r("span",{staticClass:"icon pe-7s-map-marker"}),t._v(" "),r("div",{staticClass:"cont"},[r("h6",[t._v("Officeal Address")]),t._v(" "),r("p",[t._v("504 White St . Dawsonville, GA 30534 , New York")])])]),t._v(" "),r("li",[r("span",{staticClass:"icon pe-7s-mail"}),t._v(" "),r("div",{staticClass:"cont"},[r("h6",[t._v("Email Us")]),t._v(" "),r("p",[t._v("support@gmail.com")])])]),t._v(" "),r("li",[r("span",{staticClass:"icon pe-7s-call"}),t._v(" "),r("div",{staticClass:"cont"},[r("h6",[t._v("Call Us")]),t._v(" "),r("p",[t._v("+87986451666")])])])])])]),t._v(" "),r("div",{staticClass:"col-lg-4"},[r("div",{staticClass:"item md-mb50"},[r("div",{staticClass:"title"},[r("h5",[t._v("Recent News")])]),t._v(" "),r("ul",[r("li",[r("div",{staticClass:"img"},[r("img",{attrs:{src:"/img/blog/1.jpg",alt:""}})]),t._v(" "),r("div",{staticClass:"sm-post"},[r("p",[t._v("\n                  The Start-Up Ultimate Guide to Make Your WordPress Journal.\n                ")]),t._v(" "),r("span",{staticClass:"date main-color"},[t._v("14 sep 2022")])])]),t._v(" "),r("li",[r("div",{staticClass:"img"},[r("img",{attrs:{src:"/img/blog/2.jpg",alt:""}})]),t._v(" "),r("div",{staticClass:"sm-post"},[r("p",[t._v("\n                  The Start-Up Ultimate Guide to Make Your WordPress Journal.\n                ")]),t._v(" "),r("span",{staticClass:"date main-color"},[t._v("14 sep 2022")])])]),t._v(" "),r("li",[r("div",{staticClass:"subscribe"},[r("input",{attrs:{type:"text",placeholder:"Type Your Email"}}),t._v(" "),r("span",{staticClass:"subs pe-7s-paper-plane back-color"})])])])])]),t._v(" "),r("div",{staticClass:"col-lg-4"},[r("div",{staticClass:"item"},[r("div",{staticClass:"logo"},[r("img",{attrs:{src:"{appData.lightLogo}",alt:""}})]),t._v(" "),r("div",{staticClass:"social"},[r("a",{attrs:{href:"#0"}},[r("i",{staticClass:"fab fa-facebook-f"})]),t._v(" "),r("a",{attrs:{href:"#0"}},[r("i",{staticClass:"fab fa-twitter"})]),t._v(" "),r("a",{attrs:{href:"#0"}},[r("i",{staticClass:"fab fa-instagram"})]),t._v(" "),r("a",{attrs:{href:"#0"}},[r("i",{staticClass:"fab fa-youtube"})])]),t._v(" "),r("div",{staticClass:"copy-right"},[r("p",[t._v("\n              © 2022, Vie Template. Made with passion by\n              "),r("a",{staticClass:"main-color",attrs:{href:"#0"}},[t._v(" ThemesCamp ")]),t._v("\n              .\n            ")])])])])])])])}],!1,null,"61fde016",null);r.default=component.exports;installComponents(component,{Footer:e(709).default})}}]);