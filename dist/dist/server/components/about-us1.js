exports.ids = [2];
exports.modules = {

/***/ 108:
/***/ (function(module) {

module.exports = JSON.parse("{\"id\":1,\"smallTitle\":\"About Us\",\"title\":\"Our Comapny\",\"content\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.\",\"image\":\"/img/feat.jpg\",\"status\":[{\"id\":1,\"number\":\"3\",\"letter\":\"K\",\"statusName\":\"Happy Clients\"},{\"id\":2,\"number\":\"14\",\"letter\":\"K\",\"statusName\":\"Success Projects\"}]}");

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7dba86f0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7dba86f0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7dba86f0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7dba86f0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7dba86f0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/About-us1/index.vue?vue&type=template&id=7dba86f0&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "about-us section-padding"
  }, [_vm._ssrNode("<div class=\"container\" data-v-7dba86f0><div class=\"row\" data-v-7dba86f0><div class=\"col-lg-5 valign md-mb50\" data-v-7dba86f0><div class=\"mb-50\" data-v-7dba86f0><h6 class=\"fw-100 text-u ls10 mb-10\" data-v-7dba86f0>" + _vm._ssrEscape(_vm._s(_vm.pretitle)) + "</h6> <h3 class=\"fw-600 text-u ls1 mb-30 color-font\" data-v-7dba86f0>" + _vm._ssrEscape("\n            " + _vm._s(_vm.title) + " " + _vm._s(_vm.institucion_carrera.institucion_nombre) + "\n          ") + "</h3> <div id=\"content_home\"" + _vm._ssrClass(null, {
    'texto-limitado': !_vm.mostrarCompleto,
    'texto-completo': _vm.mostrarCompleto
  }) + " data-v-7dba86f0>" + _vm._s(_vm.institucion_carrera.institucion_sobre_ins) + "</div> <span class=\"butn bord curve mt-30\" data-v-7dba86f0>" + _vm._ssrEscape("\n            " + _vm._s(_vm.mostrarCompleto ? 'Disminuir texto' : 'Expandir texto') + "\n          ") + "</span></div></div> <div class=\"col-lg-7 img\" data-v-7dba86f0>" + (_vm.foto != null ? "<img" + _vm._ssrAttr("src", _vm.url_api + '/InstitucionUpea/Portada/' + _vm.foto.portada_imagen) + " alt class=\"img_about\" data-v-7dba86f0>" : "<img src=\"/img/universidad/upea-emblematico.jpg\" alt data-v-7dba86f0>") + "</div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/About-us1/index.vue?vue&type=template&id=7dba86f0&scoped=true&

// EXTERNAL MODULE: ./store/store.js
var store = __webpack_require__(61);

// EXTERNAL MODULE: ./data/about-us1.json
var about_us1 = __webpack_require__(108);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/About-us1/index.vue?vue&type=script&lang=js&


/* harmony default export */ var About_us1vue_type_script_lang_js_ = ({
  async asyncData({
    $axios
  }) {
    try {
      const useInstitucion = Object(store["a" /* useInstitucionStore */])();
      if (Object(store["a" /* useInstitucionStore */])().institucion == null || Object(store["a" /* useInstitucionStore */])().fotosPagina || Object(store["a" /* useInstitucionStore */])().fotosPortada) {
        const institucion = await $axios.$get('/api/InstitucionUPEA/' + "7");
        let fotosPagina = institucion.Descripcion.portada.filter(port => port.portada_titulo === "PAGINA");
        let fotosPortada = institucion.Descripcion.portada.filter(port => port.portada_titulo != "PAGINA");
        useInstitucion.asignarInstitucion(institucion.Descripcion);
        useInstitucion.asignarFotosPagina(fotosPagina);
        useInstitucion.asignarFotosPortada(fotosPortada);
        return {
          fotosPagina
        };
      }
    } catch (e) {
      console.error("error", e);
    }
  },
  data() {
    return {
      url_api: "https://serviciopagina.upea.bo",
      aboutData: about_us1,
      foto: Object(store["a" /* useInstitucionStore */])().fotosPagina[0],
      institucion_carrera: Object(store["a" /* useInstitucionStore */])().institucion,
      title: Object(store["a" /* useInstitucionStore */])().title_index_about,
      pretitle: Object(store["a" /* useInstitucionStore */])().institucion.institucion_iniciales,
      mostrarCompleto: false
    };
  },
  methods: {
    cambiarTamanoTexto() {
      this.mostrarCompleto = !this.mostrarCompleto;
      if (!this.mostrarCompleto) {
        const appElement = document.getElementById('content_home');
        appElement.scrollIntoView();
      }
    }
  }
});
// CONCATENATED MODULE: ./components/About-us1/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_About_us1vue_type_script_lang_js_ = (About_us1vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/About-us1/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(109)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_About_us1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7dba86f0",
  "74a17dca"
  
)

/* harmony default export */ var About_us1 = __webpack_exports__["default"] = (component.exports);

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

/***/ }),

/***/ 91:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ })

};;
//# sourceMappingURL=about-us1.js.map