exports.ids = [1];
exports.modules = {

/***/ 116:
/***/ (function(module) {

module.exports = JSON.parse("{\"id\":1,\"title\":\"Who We Are ?\",\"paragraph1\":\"We develop creative solutions for small and big brands alike, build authentic product identities and much more.Lorem ipsum dolor sit amet, consectetur adipiscing elit sit non facilisis vitae eut.\",\"paragraph2\":\"lorem in id tristique in elementum leo nisi eleifend placerat magna lacus elementum ornare vehicula odio posuere quisque ultrices tempus cras id blandit maecenas in ornare quis dolor tempus risus vitae feugiat fames aliquet sed.\"}");

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/About-intro/index.vue?vue&type=template&id=6e268328&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "intro-section section-padding pb-0"
  }, [_vm._ssrNode("<div class=\"container\" data-v-6e268328><div class=\"row\" data-v-6e268328><div class=\"col-lg-3 col-md-4\" data-v-6e268328><div class=\"htit sm-mb30\" data-v-6e268328><h4 data-v-6e268328>" + _vm._ssrEscape(_vm._s(_vm.title_about)) + "</h4></div></div> <div class=\"col-lg-8 offset-lg-1 col-md-8\" data-v-6e268328><div class=\"text\" data-v-6e268328>" + _vm._s(_vm.carrera_historia) + "</div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/About-intro/index.vue?vue&type=template&id=6e268328&scoped=true&

// EXTERNAL MODULE: ./store/store.js
var store = __webpack_require__(61);

// EXTERNAL MODULE: ./data/about-info.json
var about_info = __webpack_require__(116);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/About-intro/index.vue?vue&type=script&lang=js&


/* harmony default export */ var About_introvue_type_script_lang_js_ = ({
  data() {
    return {
      AboutInfo1Data: about_info,
      title_about: Object(store["a" /* useInstitucionStore */])().title_about,
      carrera_historia: Object(store["a" /* useInstitucionStore */])().institucion.institucion_historia
    };
  }
});
// CONCATENATED MODULE: ./components/About-intro/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_About_introvue_type_script_lang_js_ = (About_introvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/About-intro/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_About_introvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6e268328",
  "0e72afb4"
  
)

/* harmony default export */ var About_intro = __webpack_exports__["default"] = (component.exports);

/***/ }),

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

/***/ })

};;
//# sourceMappingURL=about-intro.js.map