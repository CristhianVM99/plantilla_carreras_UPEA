exports.ids = [56];
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

/***/ 71:
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"icon\":\"pe-7s-paint-bucket\",\"title\":\"Graphic Design\",\"content\":\"Tempore corrupti temporibus fuga earum asperiores fugit laudantium.\"},{\"id\":2,\"icon\":\"pe-7s-phone\",\"title\":\"Web & Mobile Design\",\"content\":\"Tempore corrupti temporibus fuga earum asperiores fugit.\"},{\"id\":3,\"icon\":\"pe-7s-display1\",\"title\":\"Social Media Marketing\",\"content\":\"Tempore corrupti temporibus fuga earum asperiores fugit.\"},{\"id\":4,\"icon\":\"pe-7s-diskette\",\"title\":\"Document Legal Policy\",\"content\":\"Tempore corrupti temporibus fuga earum asperiores fugit laudantium.\"}]");

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Services1/index.vue?vue&type=template&id=5c9c1358&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    class: `services bords section-padding ${_vm.oStyle === '4item' ? 'lficon' : _vm.lines ? '' : 'pt-0'}`
  }, [_vm._ssrNode("<div class=\"container\" data-v-5c9c1358><div class=\"row justify-content-center\" data-v-5c9c1358><div class=\"col-lg-8 col-md-10\" data-v-5c9c1358><div class=\"sec-head text-center\" data-v-5c9c1358><h6 data-wow-delay=\".5s\" class=\"wow fadeIn\" data-v-5c9c1358>" + _vm._ssrEscape(_vm._s(_vm.pretitle)) + "</h6> <h3 class=\"wow color-font\" data-v-5c9c1358>" + _vm._ssrEscape("\n            " + _vm._s(_vm.title) + " " + _vm._s(_vm.carrera_nombre) + "\n          ") + "</h3></div></div></div> " + (_vm.oStyle === '4item' ? "<div class=\"row\" data-v-5c9c1358>" + _vm._ssrList(_vm.featuresData, function (feature) {
    return "<div" + _vm._ssrAttr("data-wow-delay", `${feature.id == 1 ? '.5' : feature.id === 2 ? '.7' : feature.id === 3 ? '.9' : '1.1'}s`) + " class=\"col-lg-6 wow fadeInLeft\" data-v-5c9c1358><div class=\"item-box\" data-v-5c9c1358><div data-v-5c9c1358><span" + _vm._ssrClass(null, `icon ${feature.icon}`) + " data-v-5c9c1358></span></div> <div class=\"cont\" data-v-5c9c1358><h6 data-v-5c9c1358>" + _vm._ssrEscape(_vm._s(feature.title)) + "</h6> <p data-v-5c9c1358>" + _vm._ssrEscape(_vm._s(feature.content)) + "</p></div></div></div>";
  }) + "</div>" : "<div class=\"row\" data-v-5c9c1358><div data-wow-delay=\".5s\" class=\"col-lg-4 wow fadeInLeft\" data-v-5c9c1358><div class=\"item-box md-mb50\" data-v-5c9c1358><span class=\"icon pe-7s-study\" data-v-5c9c1358></span> <h6 data-v-5c9c1358>Misión</h6> <div data-v-5c9c1358>" + _vm._s(_vm.mision) + "</div></div></div> <div data-wow-delay=\".5s\" class=\"col-lg-4 wow fadeInLeft\" data-v-5c9c1358><div class=\"item-box md-mb50\" data-v-5c9c1358><span class=\"icon pe-7s-flag\" data-v-5c9c1358></span> <h6 data-v-5c9c1358>Visión</h6> <div data-v-5c9c1358>" + _vm._s(_vm.vision) + "</div></div></div> <div data-wow-delay=\".5s\" class=\"col-lg-4 wow fadeInLeft\" data-v-5c9c1358><div class=\"item-box md-mb50\" data-v-5c9c1358><span class=\"icon pe-7s-search\" data-v-5c9c1358></span> <h6 data-v-5c9c1358>Objetivos</h6> <div data-v-5c9c1358>" + _vm._s(_vm.objetivos) + "</div></div></div></div>") + "</div> " + (_vm.lines ? "<div class=\"line top left\" data-v-5c9c1358></div>" : "<!---->") + " " + (_vm.lines ? "<div class=\"line bottom right\" data-v-5c9c1358></div>" : "<!---->"))]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Services1/index.vue?vue&type=template&id=5c9c1358&scoped=true&

// EXTERNAL MODULE: ./store/store.js
var store = __webpack_require__(61);

// EXTERNAL MODULE: ./data/features.json
var features = __webpack_require__(71);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Services1/index.vue?vue&type=script&lang=js&


/* harmony default export */ var Services1vue_type_script_lang_js_ = ({
  props: ["lines", "oStyle"],
  data() {
    return {
      featuresData: features,
      carrera_nombre: Object(store["a" /* useInstitucionStore */])().institucion.institucion_nombre,
      title: Object(store["a" /* useInstitucionStore */])().title_index_services,
      pretitle: Object(store["a" /* useInstitucionStore */])().institucion.institucion_iniciales,
      mision: Object(store["a" /* useInstitucionStore */])().institucion.institucion_mision,
      vision: Object(store["a" /* useInstitucionStore */])().institucion.institucion_vision,
      objetivos: Object(store["a" /* useInstitucionStore */])().institucion.institucion_objetivos
    };
  }
});
// CONCATENATED MODULE: ./components/Services1/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Services1vue_type_script_lang_js_ = (Services1vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/Services1/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Services1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5c9c1358",
  "3d19cd9b"
  
)

/* harmony default export */ var Services1 = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=services1.js.map