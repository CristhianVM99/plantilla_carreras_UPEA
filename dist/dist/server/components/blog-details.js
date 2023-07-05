exports.ids = [8];
exports.modules = {

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blog-details/index.vue?vue&type=template&id=be2728bc&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "blog-pg single section-padding pt-0"
  }, [_vm._ssrNode("<div class=\"container\" data-v-be2728bc>", "</div>", [_vm._ssrNode("<div class=\"row justify-content-center\" data-v-be2728bc>", "</div>", [_vm._ssrNode("<div class=\"col-lg-11\" data-v-be2728bc>", "</div>", [_vm._ssrNode((_vm.tipo == 'convocatorias' || _vm.tipo == 'comunicados' || _vm.tipo == 'avisos' ? "<div class=\"post\" data-v-be2728bc><div class=\"img\" data-v-be2728bc><img" + _vm._ssrAttr("src", _vm.url_api + '/Convocatorias/' + _vm.colection[0].con_foto_portada) + " alt data-v-be2728bc></div> <div class=\"content pt-60\" data-v-be2728bc><div class=\"row justify-content-center\" data-v-be2728bc><div class=\"col-lg-10\" data-v-be2728bc><div class=\"cont\" data-v-be2728bc><h2 class=\"extra-title\" data-v-be2728bc>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.colection[0].con_titulo) + "\n                  ") + "</h2> <div class=\"spacial\" data-v-be2728bc>" + _vm._s(_vm.colection[0].con_descripcion) + "</div> <p data-v-be2728bc>" + _vm._ssrEscape("\n                    Fecha de Inicio : " + _vm._s(_vm.convertirFecha(_vm.colection[0].con_fecha_inicio))) + "<br data-v-be2728bc>" + _vm._ssrEscape("\n                    Fecha de Final : " + _vm._s(_vm.convertirFecha(_vm.colection[0].con_fecha_fin)) + "\n                  ") + "</p></div></div></div></div></div>" : "<!---->") + " " + (_vm.tipo == 'cursos' || _vm.tipo == 'seminarios' ? "<div class=\"post\" data-v-be2728bc><div class=\"img\" data-v-be2728bc><img" + _vm._ssrAttr("src", _vm.url_api + '/Cursos/' + _vm.colection[0].det_img_portada) + " alt data-v-be2728bc></div> <div class=\"content pt-60\" data-v-be2728bc><div class=\"row justify-content-center\" data-v-be2728bc><div class=\"col-lg-10\" data-v-be2728bc><div class=\"cont\" data-v-be2728bc><h2 class=\"extra-title\" data-v-be2728bc>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.colection[0].det_titulo) + "\n                  ") + "</h2> <br data-v-be2728bc> <h6 data-v-be2728bc>Descripcion</h6> <div class=\"spacial\" data-v-be2728bc>" + _vm._s(_vm.colection[0].det_descripcion) + "</div> <h6 data-v-be2728bc>Mas Informacion</h6> <p data-v-be2728bc>" + _vm._ssrEscape("\n                    Fecha de Inicio : " + _vm._s(_vm.convertirFecha(_vm.colection[0].det_fecha_ini))) + "<br data-v-be2728bc>" + _vm._ssrEscape("\n                    Fecha de Final : " + _vm._s(_vm.convertirFecha(_vm.colection[0].det_fecha_fin))) + "<br data-v-be2728bc>" + _vm._ssrEscape("\n                    Grupo de Whatsap : " + _vm._s(_vm.colection[0].det_grupo_whatssap)) + "<br data-v-be2728bc>" + _vm._ssrEscape("\n                    Modalidad : " + _vm._s(_vm.colection[0].det_modalidad)) + "<br data-v-be2728bc>" + _vm._ssrEscape("\n                    Lugar del Curso : " + _vm._s(_vm.colection[0].det_lugar_curso)) + "<br data-v-be2728bc>" + _vm._ssrEscape("\n                    Carga Horaria : " + _vm._s(_vm.colection[0].det_carga_horaria)) + "<br data-v-be2728bc>" + _vm._ssrEscape("                  \n                    Cupos del Curso : " + _vm._s(_vm.colection[0].det_cupo_max) + "\n                  ") + "</p> <h6 data-v-be2728bc>Costos</h6> <p data-v-be2728bc>" + _vm._ssrEscape("\n                    Costo Extranjero : " + _vm._s(_vm.colection[0].det_costo_ext)) + "<br data-v-be2728bc>" + _vm._ssrEscape("\n                    Costo Profesores : " + _vm._s(_vm.colection[0].det_costo_profe)) + "<br data-v-be2728bc>" + _vm._ssrEscape("\n                    Costo Estudiante : " + _vm._s(_vm.colection[0].det_costo)) + "<br data-v-be2728bc></p></div></div></div></div></div>" : "<!---->") + " " + (_vm.tipo == 'servicios' ? "<div class=\"post\" data-v-be2728bc><div class=\"img\" data-v-be2728bc><img" + _vm._ssrAttr("src", _vm.url_api + '/Carrera/Servicios/' + _vm.colection[0].serv_imagen) + " alt data-v-be2728bc></div> <div class=\"content pt-60\" data-v-be2728bc><div class=\"row justify-content-center\" data-v-be2728bc><div class=\"col-lg-10\" data-v-be2728bc><div class=\"cont\" data-v-be2728bc><h2 class=\"extra-title\" data-v-be2728bc>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.colection[0].serv_nombre) + "\n                  ") + "</h2> <br data-v-be2728bc> <h6 data-v-be2728bc>Descripcion</h6> <div class=\"spacial\" data-v-be2728bc>" + _vm._s(_vm.colection[0].serv_descripcion) + "</div> <h6 data-v-be2728bc>Mas Informacion</h6> <p data-v-be2728bc>" + _vm._ssrEscape("\n                    Fecha de Inicio : " + _vm._s(_vm.convertirFecha(_vm.colection[0].serv_registro))) + "<br data-v-be2728bc>" + _vm._ssrEscape("\n                    Fecha de Final : " + _vm._s(_vm.convertirFecha(_vm.colection[0].serv_update))) + "<br data-v-be2728bc>" + _vm._ssrEscape("\n                    Numero de Celular : " + _vm._s(_vm.colection[0].serv_nro_celular)) + "<br data-v-be2728bc></p></div></div></div></div></div>" : "<!---->") + " " + (_vm.tipo == 'ofertasacademicas' ? "<div class=\"post\" data-v-be2728bc><div class=\"img\" data-v-be2728bc><img" + _vm._ssrAttr("src", _vm.url_api + '/Carrera/OfertasAcademicas/' + _vm.colection[0].ofertas_imagen) + " alt data-v-be2728bc></div> <div class=\"content pt-60\" data-v-be2728bc><div class=\"row justify-content-center\" data-v-be2728bc><div class=\"col-lg-10\" data-v-be2728bc><div class=\"cont\" data-v-be2728bc><h2 class=\"extra-title\" data-v-be2728bc>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.colection[0].ofertas_titulo) + "\n                  ") + "</h2> <br data-v-be2728bc> <h6 data-v-be2728bc>Descripcion</h6> <div class=\"spacial\" data-v-be2728bc>" + _vm._s(_vm.colection[0].ofertas_descripcion) + "</div> <h6 data-v-be2728bc>Mas Informacion</h6> <p data-v-be2728bc>" + _vm._ssrEscape("\n                    Fecha de Inicio : " + _vm._s(_vm.convertirFecha(_vm.colection[0].ofertas_inscripciones_ini))) + "<br data-v-be2728bc>" + _vm._ssrEscape("\n                    Fecha de Final : " + _vm._s(_vm.convertirFecha(_vm.colection[0].ofertas_inscripciones_fin))) + "<br data-v-be2728bc>" + _vm._ssrEscape("\n                    Fecha de Examen : " + _vm._s(_vm.convertirFecha(_vm.colection[0].ofertas_fecha_examen))) + "<br data-v-be2728bc>" + _vm._ssrEscape("\n                    Referencia : " + _vm._s(_vm.colection[0].ofertas_referencia)) + "<br data-v-be2728bc></p></div></div></div></div></div>" : "<!---->") + " " + (_vm.tipo == 'publicaciones' ? "<div class=\"post\" data-v-be2728bc><div class=\"img\" data-v-be2728bc><img" + _vm._ssrAttr("src", _vm.url_api + '/Publicaciones/' + _vm.colection[0].publicaciones_imagen) + " alt data-v-be2728bc></div> <div class=\"content pt-60\" data-v-be2728bc><div class=\"row justify-content-center\" data-v-be2728bc><div class=\"col-lg-10\" data-v-be2728bc><div class=\"cont\" data-v-be2728bc><h2 class=\"extra-title\" data-v-be2728bc>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.colection[0].publicaciones_titulo) + "\n                  ") + "</h2> <br data-v-be2728bc> <h6 data-v-be2728bc>Descripcion</h6> <div class=\"spacial\" data-v-be2728bc>" + _vm._s(_vm.colection[0].publicaciones_descripcion) + "</div> <h6 data-v-be2728bc>Mas Informacion</h6> <p data-v-be2728bc>" + _vm._ssrEscape("\n                    Fecha de publicacion : " + _vm._s(_vm.convertirFecha(_vm.colection[0].publicaciones_fecha))) + "<br data-v-be2728bc>" + _vm._ssrEscape("\n                    Autor : " + _vm._s(_vm.colection[0].publicaciones_autor)) + "<br data-v-be2728bc></p></div></div></div></div></div>" : "<!---->") + " "), _vm.tipo == 'gacetas' ? _vm._ssrNode("<div class=\"post\" data-v-be2728bc>", "</div>", [_vm._ssrNode("<div class=\"img\" data-v-be2728bc>", "</div>", [_c('vue-pdf', {
    ref: "pdf",
    staticClass: "pdf-viewer",
    attrs: {
      "src": _vm.url_api + '/Gaceta/' + _vm.colection[0].gaceta_documento,
      "page": 1,
      "original-size": true
    }
  })], 1), _vm._ssrNode(" <div class=\"content pt-60\" data-v-be2728bc><div class=\"row justify-content-center\" data-v-be2728bc><div class=\"col-lg-10\" data-v-be2728bc><div class=\"cont\" data-v-be2728bc><h2 class=\"extra-title\" data-v-be2728bc>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.colection[0].gaceta_titulo) + "\n                  ") + "</h2> <br data-v-be2728bc> <h6 data-v-be2728bc>Mas Informacion</h6> <p data-v-be2728bc>" + _vm._ssrEscape("\n                    Fecha de Publicacion : " + _vm._s(_vm.convertirFecha(_vm.colection[0].gaceta_fecha))) + "<br data-v-be2728bc></p> <a target=\"_blank\"" + _vm._ssrAttr("href", _vm.url_api + '/Gaceta/' + _vm.colection[0].gaceta_documento) + " class=\"butn bord curve mt-30\" data-v-be2728bc>\n                    Descargar PDF\n                  </a></div></div></div></div>")], 2) : _vm._e(), _vm._ssrNode(" " + (_vm.tipo == 'eventos' ? "<div class=\"post\" data-v-be2728bc><div class=\"img\" data-v-be2728bc><img" + _vm._ssrAttr("src", _vm.url_api + '/Eventos/' + _vm.colection[0].evento_imagen) + " alt data-v-be2728bc></div> <div class=\"content pt-60\" data-v-be2728bc><div class=\"row justify-content-center\" data-v-be2728bc><div class=\"col-lg-10\" data-v-be2728bc><div class=\"cont\" data-v-be2728bc><h2 class=\"extra-title\" data-v-be2728bc>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.colection[0].evento_titulo) + "\n                  ") + "</h2> <br data-v-be2728bc> <h6 data-v-be2728bc>Descripcion</h6> <div class=\"spacial\" data-v-be2728bc>" + _vm._s(_vm.colection[0].evento_descripcion) + "</div> <h6 data-v-be2728bc>Mas Informacion</h6> <p data-v-be2728bc>" + _vm._ssrEscape("\n                    Fecha de Actividad : " + _vm._s(_vm.colection[0].evento_fecha)) + "<br data-v-be2728bc>" + _vm._ssrEscape("\n                    Hora : " + _vm._s(_vm.colection[0].evento_hora)) + "<br data-v-be2728bc>" + _vm._ssrEscape("\n                    Lugar : " + _vm._s(_vm.colection[0].evento_lugar)) + "<br data-v-be2728bc></p></div></div></div></div></div>" : "<!---->") + " " + (_vm.tipo == 'videos' ? "<div class=\"post\" data-v-be2728bc><div class=\"img\" data-v-be2728bc><iframe" + _vm._ssrAttr("src", _vm.colection[0].video_enlace) + " frameborder=\"0\" style=\"border-radius: 5px;width: 100%;height: 460px;\" data-v-be2728bc></iframe></div> <div class=\"content pt-60\" data-v-be2728bc><div class=\"row justify-content-center\" data-v-be2728bc><div class=\"col-lg-10\" data-v-be2728bc><div class=\"cont\" data-v-be2728bc><h2 class=\"extra-title\" data-v-be2728bc>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.colection[0].video_titulo) + "\n                  ") + "</h2> <br data-v-be2728bc> <h6 data-v-be2728bc>Descripcion</h6> <div class=\"spacial\" data-v-be2728bc>" + _vm._s(_vm.colection[0].video_breve_descripcion) + "</div></div></div></div></div></div>" : "<!---->"))], 2)])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Blog-details/index.vue?vue&type=template&id=be2728bc&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blog-details/index.vue?vue&type=script&lang=js&
/* harmony default export */ var Blog_detailsvue_type_script_lang_js_ = ({
  props: ["theme", 'tipo', 'colection'],
  data() {
    return {
      url_api: "https://serviciopagina.upea.bo"
    };
  },
  methods: {
    convertirFecha(fecha) {
      const fechaObjeto = new Date(fecha);
      const dia = fechaObjeto.getDate();
      const mes = fechaObjeto.getMonth() + 1;
      const año = fechaObjeto.getFullYear();
      return `${dia}/${mes}/${año}`;
    }
  },
  created() {
    console.log("registro para" + this.tipo);
    console.log(this.colection);
  }
});
// CONCATENATED MODULE: ./components/Blog-details/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Blog_detailsvue_type_script_lang_js_ = (Blog_detailsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/Blog-details/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Blog_detailsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "be2728bc",
  "8dfb50b6"
  
)

/* harmony default export */ var Blog_details = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=blog-details.js.map