exports.ids = [16];
exports.modules = {

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useInstitucionStore; });
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pinia__WEBPACK_IMPORTED_MODULE_0__);

const useInstitucionStore = Object(pinia__WEBPACK_IMPORTED_MODULE_0__["defineStore"])("Institucion", {
  state: () => ({
    url_api: "https://serviciopagina.upea.bo",
    institucion: null,
    nombre: 'ingenieria de sistemas',
    carrera_links_externos: null,
    carrera_convocatorias: null,
    carrera_avisos: null,
    carrera_comunicados: null,
    carrera_cursos: null,
    carrera_seminarios: null,
    carrera_autoridades: null,
    carrera_servicios: null,
    carrera_ofertasacademicas: null,
    carrera_publicaciones: null,
    carrera_gacetas: null,
    carrera_eventos: null,
    carrera_videos: null,
    fotosPagina: null,
    fotosPortada: null,
    /* ================================== INDEX ========================= */

    /* INDEX - ABOUT - INFORMATION */
    title_index_about: 'Perfil y Carrera de Licenciatura en ',
    /* INDEX - SERVICES - INFORMATION */
    title_index_services: 'Informacion sobre la carrera',
    /* INDEX - FUNFACT - INFORMACION */
    title_funfact: 'Todos los comunicados de la Carrera',
    /* INDEX - BLOG - CONVOCATORIAS */
    pretitle_convocatorias: 'Lo ultimo de ...',
    title_convocatorias: 'Convocatorias, Comunicados y Avisos',
    /* INDEX - BLOG - CURSOS */
    pretitle_cursos: 'Lo ultimo de ...',
    title_cursos: 'Curso y Seminarios',
    /* INDEX - BLOG - AUTORIDADES */
    pretitle_autoridades: 'Nuestras',
    title_autoridades: 'Autoridades',
    /* INDEX - CALL - ORGANIGRAMA */
    title_index_organigrama: 'Organigrama de la carrera de',
    /*============================ CATEGORIES ============================== */
    title_categories: 'Categorias',
    text_categories: 'Estudiar en la Universidad Pública de El Alto es un privilegio que implica responsabilidad y entrega, pero también es una oportunidad para crecer y alcanzar nuestros sueños.',
    textBackground_categories: 'Upea',
    /*========================== CONTACTO =================================== */
    title_contacto: 'Contacto',
    pretitle_contacto: 'contactate con la universidad para mas informacion sobre la carrera.',
    /*========================== ABOUT ======================================== */
    title_about: 'Historia de la carrera'
  }),
  actions: {
    asignarInstitucion(colection) {
      this.institucion = colection;
    },
    asignarCarreraLinksExternos(colection) {
      this.carrera_links_externos = colection;
    },
    asignarConvocatorias(colection) {
      this.carrera_convocatorias = colection;
    },
    asignarComunicados(colection) {
      this.carrera_comunicados = colection;
    },
    asignarAvisos(colection) {
      this.carrera_avisos = colection;
    },
    asignarCursos(colection) {
      this.carrera_cursos = colection;
    },
    asignarSeminarios(colection) {
      this.carrera_seminarios = colection;
    },
    asignarFotosPagina(colection) {
      this.fotosPagina = colection;
    },
    asignarFotosPortada(colection) {
      this.fotosPortada = colection;
    },
    asignarServicios(colection) {
      this.carrera_servicios = colection;
    },
    asignarOfertasAcademicas(colection) {
      this.carrera_ofertasacademicas = colection;
    },
    asignarPublicaciones(colection) {
      this.carrera_publicaciones = colection;
    },
    asignarGacetas(colection) {
      this.carrera_gacetas = colection;
    },
    asignarEventos(colection) {
      this.carrera_eventos = colection;
    },
    asignarVideos(colection) {
      this.carrera_videos = colection;
    }
  }
});

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Call-to-action/index.vue?vue&type=template&id=32671d40&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "call-action section-padding sub-bg bg-img",
    style: `background-image: url(${_vm.img ? _vm.img : '/img/patrn.svg'})`
  }, [_vm._ssrNode("<div class=\"container\" data-v-32671d40>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-32671d40>", "</div>", [_vm._ssrNode("<div class=\"col-md-4 col-lg-6\" data-v-32671d40><div class=\"content sm-mb30\" data-v-32671d40><h6 data-splitting class=\"wow words chars splitting\" data-v-32671d40>" + _vm._ssrEscape(_vm._s(_vm.carrera_iniciales)) + "</h6> <h2 data-splitting class=\"wow words chars splitting\" data-v-32671d40>" + _vm._ssrEscape("\n            " + _vm._s(_vm.carrera_title_organigrama) + " ") + "<br data-v-32671d40> <b class=\"back-color\" data-v-32671d40>" + _vm._ssrEscape(_vm._s(_vm.carrera_nombre)) + "</b>.\n          </h2></div></div> "), _vm._ssrNode("<div class=\"col-md-6 col-lg-3\" data-v-32671d40>", "</div>", [_c('vue-pdf', {
    ref: "pdf",
    staticClass: "pdf-viewer",
    attrs: {
      "src": _vm.url_api + '/InstitucionUpea/' + _vm.carrera_organigrama,
      "page": 1,
      "original-size": true
    }
  })], 1), _vm._ssrNode(" <div class=\"col-md-4 col-lg-3 valign\" data-v-32671d40><a" + _vm._ssrAttr("href", _vm.url_api + '/InstitucionUpea/' + _vm.carrera_organigrama) + " target=\"_blank\" data-wow-delay=\".5s\" class=\"butn bord curve wow fadeInUp\" data-v-32671d40><span data-v-32671d40>Descargar Organigrama</span></a></div>")], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Call-to-action/index.vue?vue&type=template&id=32671d40&scoped=true&

// EXTERNAL MODULE: ./store/store.js
var store = __webpack_require__(61);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Call-to-action/index.vue?vue&type=script&lang=js&

/* harmony default export */ var Call_to_actionvue_type_script_lang_js_ = ({
  props: ["img"],
  async asyncData({
    $axios
  }) {
    try {
      const useInstitucion = Object(store["a" /* useInstitucionStore */])();
      if (Object(store["a" /* useInstitucionStore */])().institucion == null || Object(store["a" /* useInstitucionStore */])().carrera_links_externos == null) {
        const institucion = await $axios.$get('/api/InstitucionUPEA/' + "7");
        useInstitucion.asignarInstitucion(institucion.Descripcion);
      }
    } catch (e) {
      console.error("error", e);
    }
  },
  data() {
    return {
      url_api: "https://serviciopagina.upea.bo",
      carrera_organigrama: Object(store["a" /* useInstitucionStore */])().institucion.institucion_organigrama,
      carrera_title_organigrama: Object(store["a" /* useInstitucionStore */])().title_index_organigrama,
      carrera_nombre: Object(store["a" /* useInstitucionStore */])().institucion.institucion_nombre,
      carrera_iniciales: Object(store["a" /* useInstitucionStore */])().institucion.institucion_iniciales
    };
  }
});
// CONCATENATED MODULE: ./components/Call-to-action/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Call_to_actionvue_type_script_lang_js_ = (Call_to_actionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/Call-to-action/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Call_to_actionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "32671d40",
  "43e76267"
  
)

/* harmony default export */ var Call_to_action = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=call-to-action.js.map