(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{708:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var o=r(113),n=Object(o.c)("Institucion",{state:function(){return{url_api:"https://serviciopagina.upea.bo",institucion:null,nombre:"ingenieria de sistemas",carrera_links_externos:null,carrera_convocatorias:null,carrera_avisos:null,carrera_comunicados:null,carrera_cursos:null,carrera_seminarios:null,carrera_autoridades:null,carrera_servicios:null,carrera_ofertasacademicas:null,carrera_publicaciones:null,carrera_gacetas:null,carrera_eventos:null,carrera_videos:null,fotosPagina:null,fotosPortada:null,title_index_about:"Perfil y Carrera de Licenciatura en ",title_index_services:"Informacion sobre la carrera",title_funfact:"Todos los comunicados de la Carrera",pretitle_convocatorias:"Lo ultimo de ...",title_convocatorias:"Convocatorias, Comunicados y Avisos",pretitle_cursos:"Lo ultimo de ...",title_cursos:"Curso y Seminarios",pretitle_autoridades:"Nuestras",title_autoridades:"Autoridades",title_index_organigrama:"Organigrama de la carrera de",title_categories:"Categorias",text_categories:"Estudiar en la Universidad Pública de El Alto es un privilegio que implica responsabilidad y entrega, pero también es una oportunidad para crecer y alcanzar nuestros sueños.",textBackground_categories:"Upea",title_contacto:"Contacto",pretitle_contacto:"contactate con la universidad para mas informacion sobre la carrera.",title_about:"Historia de la carrera"}},actions:{asignarInstitucion:function(t){this.institucion=t},asignarCarreraLinksExternos:function(t){this.carrera_links_externos=t},asignarConvocatorias:function(t){this.carrera_convocatorias=t},asignarComunicados:function(t){this.carrera_comunicados=t},asignarAvisos:function(t){this.carrera_avisos=t},asignarCursos:function(t){this.carrera_cursos=t},asignarSeminarios:function(t){this.carrera_seminarios=t},asignarFotosPagina:function(t){this.fotosPagina=t},asignarFotosPortada:function(t){this.fotosPortada=t},asignarServicios:function(t){this.carrera_servicios=t},asignarOfertasAcademicas:function(t){this.carrera_ofertasacademicas=t},asignarPublicaciones:function(t){this.carrera_publicaciones=t},asignarGacetas:function(t){this.carrera_gacetas=t},asignarEventos:function(t){this.carrera_eventos=t},asignarVideos:function(t){this.carrera_videos=t}}})},721:function(t){t.exports=JSON.parse('[{"id":1,"icon":"pe-7s-paint-bucket","title":"Graphic Design","content":"Tempore corrupti temporibus fuga earum asperiores fugit laudantium."},{"id":2,"icon":"pe-7s-phone","title":"Web & Mobile Design","content":"Tempore corrupti temporibus fuga earum asperiores fugit."},{"id":3,"icon":"pe-7s-display1","title":"Social Media Marketing","content":"Tempore corrupti temporibus fuga earum asperiores fugit."},{"id":4,"icon":"pe-7s-diskette","title":"Document Legal Policy","content":"Tempore corrupti temporibus fuga earum asperiores fugit laudantium."}]')},735:function(t,e,r){"use strict";r.r(e);var o=r(708),n=r(721),c={props:["lines","oStyle"],data:function(){return{featuresData:n,carrera_nombre:Object(o.a)().institucion.institucion_nombre,title:Object(o.a)().title_index_services,pretitle:Object(o.a)().institucion.institucion_iniciales,mision:Object(o.a)().institucion.institucion_mision,vision:Object(o.a)().institucion.institucion_vision,objetivos:Object(o.a)().institucion.institucion_objetivos}}},l=r(53),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("section",{class:"services bords section-padding ".concat("4item"===t.oStyle?"lficon":t.lines?"":"pt-0")},[e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-8 col-md-10"},[e("div",{staticClass:"sec-head text-center"},[e("h6",{staticClass:"wow fadeIn",attrs:{"data-wow-delay":".5s"}},[t._v(t._s(t.pretitle))]),t._v(" "),e("h3",{staticClass:"wow color-font"},[t._v("\n            "+t._s(t.title)+" "+t._s(t.carrera_nombre)+"\n          ")])])])]),t._v(" "),"4item"===t.oStyle?e("div",{staticClass:"row"},t._l(t.featuresData,(function(r){return e("div",{key:r.id,staticClass:"col-lg-6 wow fadeInLeft",attrs:{"data-wow-delay":"".concat(1==r.id?".5":2===r.id?".7":3===r.id?".9":"1.1","s")}},[e("div",{staticClass:"item-box"},[e("div",[e("span",{class:"icon ".concat(r.icon)})]),t._v(" "),e("div",{staticClass:"cont"},[e("h6",[t._v(t._s(r.title))]),t._v(" "),e("p",[t._v(t._s(r.content))])])])])})),0):e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-4 wow fadeInLeft",attrs:{"data-wow-delay":".5s"}},[e("div",{staticClass:"item-box md-mb50"},[e("span",{staticClass:"icon pe-7s-study"}),t._v(" "),e("h6",[t._v("Misión")]),t._v(" "),e("div",{domProps:{innerHTML:t._s(t.mision)}})])]),t._v(" "),e("div",{staticClass:"col-lg-4 wow fadeInLeft",attrs:{"data-wow-delay":".5s"}},[e("div",{staticClass:"item-box md-mb50"},[e("span",{staticClass:"icon pe-7s-flag"}),t._v(" "),e("h6",[t._v("Visión")]),t._v(" "),e("div",{domProps:{innerHTML:t._s(t.vision)}})])]),t._v(" "),e("div",{staticClass:"col-lg-4 wow fadeInLeft",attrs:{"data-wow-delay":".5s"}},[e("div",{staticClass:"item-box md-mb50"},[e("span",{staticClass:"icon pe-7s-search"}),t._v(" "),e("h6",[t._v("Objetivos")]),t._v(" "),e("div",{domProps:{innerHTML:t._s(t.objetivos)}})])])])]),t._v(" "),t.lines?e("div",{staticClass:"line top left"}):t._e(),t._v(" "),t.lines?e("div",{staticClass:"line bottom right"}):t._e()])}),[],!1,null,"5c9c1358",null);e.default=component.exports}}]);