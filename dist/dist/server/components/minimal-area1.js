exports.ids = [38];
exports.modules = {

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Minimal-area1/index.vue?vue&type=template&id=668f5eaf&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "min-area sub-bg"
  }, [_vm._ssrNode("<div class=\"container\" data-v-668f5eaf><div class=\"row\" data-v-668f5eaf><div class=\"col-lg-6\" data-v-668f5eaf><div class=\"img\" data-v-668f5eaf><img" + _vm._ssrAttr("src", _vm.img_about) + " alt class=\"thumparallax-down\" style=\"object-fit: cover;height: 500px;\" data-v-668f5eaf></div></div> <div class=\"col-lg-6 valign\" data-v-668f5eaf><div class=\"content pt-0\" data-v-668f5eaf><h4 class=\"wow color-font\" data-v-668f5eaf>" + _vm._ssrEscape(_vm._s(_vm.carrera_nombre)) + "</h4> <p data-splitting class=\"wow txt\" data-v-668f5eaf>" + _vm._ssrEscape("\n            A continuacion tenemos mas informacion de la carrera de " + _vm._s(_vm.carrera_nombre) + "              \n          ") + "</p> <ul class=\"feat\" data-v-668f5eaf><li data-wow-delay=\".2s\" class=\"wow fadeInUp\" data-v-668f5eaf><h6 data-v-668f5eaf><span data-v-668f5eaf>1</span>Mision</h6> <div data-v-668f5eaf>" + _vm._s(_vm.mision) + "</div></li> <li data-wow-delay=\".4s\" class=\"wow fadeInUp\" data-v-668f5eaf><h6 data-v-668f5eaf><span data-v-668f5eaf>2</span>Vision</h6> <div data-v-668f5eaf>" + _vm._s(_vm.vision) + "</div></li> <li data-wow-delay=\".6s\" class=\"wow fadeInUp\" data-v-668f5eaf><h6 data-v-668f5eaf><span data-v-668f5eaf>3</span>Objetivos</h6> <div data-v-668f5eaf>" + _vm._s(_vm.objetivos) + "</div></li></ul></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Minimal-area1/index.vue?vue&type=template&id=668f5eaf&scoped=true&

// EXTERNAL MODULE: ./store/store.js
var store = __webpack_require__(61);

// EXTERNAL MODULE: ./common/thumparallaxDown.js
var thumparallaxDown = __webpack_require__(76);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Minimal-area1/index.vue?vue&type=script&lang=js&


/* harmony default export */ var Minimal_area1vue_type_script_lang_js_ = ({
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
          fotosPagina,
          institucion
        };
      }
    } catch (e) {
      console.error("error", e);
    }
  },
  data() {
    return {
      carrera_nombre: Object(store["a" /* useInstitucionStore */])().institucion.institucion_nombre,
      mision: Object(store["a" /* useInstitucionStore */])().institucion.institucion_mision,
      vision: Object(store["a" /* useInstitucionStore */])().institucion.institucion_vision,
      objetivos: Object(store["a" /* useInstitucionStore */])().institucion.institucion_objetivos,
      foto: Object(store["a" /* useInstitucionStore */])().fotosPagina[5],
      img_about: '/img/universidad/about2.png',
      url_api: "https://serviciopagina.upea.bo"
    };
  },
  methods: {
    setFoto() {
      if (this.foto != null && Object.keys(this.foto).length != 0) {
        this.img_about = `${this.url_api}/InstitucionUpea/Portada/${this.foto.portada_imagen}`;
      }
    },
    createdComponent() {
      this.setFoto();
    }
  },
  created() {
    this.createdComponent();
  },
  mounted() {
    Object(thumparallaxDown["a" /* default */])();
  }
});
// CONCATENATED MODULE: ./components/Minimal-area1/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Minimal_area1vue_type_script_lang_js_ = (Minimal_area1vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/Minimal-area1/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Minimal_area1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "668f5eaf",
  "128b7760"
  
)

/* harmony default export */ var Minimal_area1 = __webpack_exports__["default"] = (component.exports);

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

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const thumparallaxDown = () => {
  var imageDown = document.getElementsByClassName("thumparallax-down");
  if (imageDown) {
    new simpleParallax(imageDown, {
      orientation: "down",
      delay: 1,
      scale: 1.1
    });
  }
};
/* harmony default export */ __webpack_exports__["a"] = (thumparallaxDown);

/***/ })

};;
//# sourceMappingURL=minimal-area1.js.map