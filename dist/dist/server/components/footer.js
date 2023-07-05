exports.ids = [24];
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

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer/index.vue?vue&type=template&id=78e3ff5f&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('footer', {
    class: `${!_vm.hideBGCOLOR ? 'sub-bg' : ''}`
  }, [_vm._ssrNode("<div class=\"container\" data-v-78e3ff5f><div class=\"row\" data-v-78e3ff5f><div class=\"col-lg-4\" data-v-78e3ff5f><div class=\"item md-mb50\" data-v-78e3ff5f><div class=\"title\" data-v-78e3ff5f><h5 data-v-78e3ff5f>Contacta con Nosotros</h5></div> <ul data-v-78e3ff5f><li data-v-78e3ff5f><span class=\"icon pe-7s-map-marker\" data-v-78e3ff5f></span> <div class=\"cont\" data-v-78e3ff5f><h6 data-v-78e3ff5f>direccion</h6> <p data-v-78e3ff5f>" + _vm._ssrEscape(_vm._s(_vm.carrera_direccion)) + "</p></div></li> <li data-v-78e3ff5f><span class=\"icon pe-7s-mail\" data-v-78e3ff5f></span> <div class=\"cont\" data-v-78e3ff5f><h6 data-v-78e3ff5f>Correo</h6> <p data-v-78e3ff5f>" + _vm._ssrEscape(_vm._s(_vm.carrera_correo1)) + "</p></div></li> <li data-v-78e3ff5f><span class=\"icon pe-7s-call\" data-v-78e3ff5f></span> <div class=\"cont\" data-v-78e3ff5f><h6 data-v-78e3ff5f>Telefono</h6> <p data-v-78e3ff5f>" + _vm._ssrEscape(_vm._s(_vm.carrera_telefono1)) + "</p></div></li></ul></div></div> <div class=\"col-lg-4\" data-v-78e3ff5f></div> <div class=\"col-lg-4\" data-v-78e3ff5f><div class=\"item\" data-v-78e3ff5f><div class=\"logo\" data-v-78e3ff5f><img" + _vm._ssrAttr("src", _vm.url_api + '/InstitucionUpea/' + _vm.carrera_logo) + " alt=\"logo\" data-v-78e3ff5f> <span data-v-78e3ff5f>" + _vm._ssrEscape(_vm._s(_vm.carrera_nombre)) + "</span></div> <div class=\"social\" data-v-78e3ff5f><a" + _vm._ssrAttr("href", _vm.carrera_facebook) + " target=\"_blank\" data-v-78e3ff5f><i class=\"fab fa-facebook-f\" data-v-78e3ff5f></i></a> <a" + _vm._ssrAttr("href", _vm.carrera_twitter) + " target=\"_blank\" data-v-78e3ff5f><i class=\"fab fa-twitter\" data-v-78e3ff5f></i></a> <a" + _vm._ssrAttr("href", _vm.carrera_youtube) + " target=\"_blank\" data-v-78e3ff5f><i class=\"fab fa-youtube\" data-v-78e3ff5f></i></a></div> <div class=\"copy-right\" data-v-78e3ff5f><p data-v-78e3ff5f>\n              © 2023, Todos los derechos reservados \n              <span data-v-78e3ff5f>Universidad Publica de El Alto</span>.\n            </p> <p data-v-78e3ff5f>Desarrollador <a target=\"_blank\" href=\"https://www.facebook.com/profile.php?id=100008367045999\" data-v-78e3ff5f>Cvm</a></p></div></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Footer/index.vue?vue&type=template&id=78e3ff5f&scoped=true&

// EXTERNAL MODULE: ./store/store.js
var store = __webpack_require__(61);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer/index.vue?vue&type=script&lang=js&

/* harmony default export */ var Footervue_type_script_lang_js_ = ({
  props: ['hideBGCOLOR'],
  async asyncData({
    $axios
  }) {
    const useInstitucion = Object(store["a" /* useInstitucionStore */])();
    if (Object(store["a" /* useInstitucionStore */])().institucion == null) {
      const institucion = await $axios.$get('/api/InstitucionUPEA/' + "7");
      useInstitucion.asignarInstitucion(institucion.Descripcion);
    }
  },
  data() {
    return {
      url_api: "https://serviciopagina.upea.bo",
      carrera_celular1: Object(store["a" /* useInstitucionStore */])().institucion.institucion_celular1,
      carrera_celular2: Object(store["a" /* useInstitucionStore */])().institucion.institucion_celular2,
      carrera_telefono1: Object(store["a" /* useInstitucionStore */])().institucion.institucion_telefono1,
      carrera_telefono2: Object(store["a" /* useInstitucionStore */])().institucion.institucion_telefono2,
      carrera_correo1: Object(store["a" /* useInstitucionStore */])().institucion.institucion_correo1,
      carrera_correo2: Object(store["a" /* useInstitucionStore */])().institucion_correo2,
      carrera_facebook: Object(store["a" /* useInstitucionStore */])().institucion.institucion_facebook,
      carrera_youtube: Object(store["a" /* useInstitucionStore */])().institucion.institucion_youtube,
      carrera_twitter: Object(store["a" /* useInstitucionStore */])().institucion.institucion_twitter,
      carrera_direccion: Object(store["a" /* useInstitucionStore */])().institucion.institucion_direccion,
      carrera_logo: Object(store["a" /* useInstitucionStore */])().institucion.institucion_logo,
      carrera_nombre: Object(store["a" /* useInstitucionStore */])().institucion.institucion_nombre
    };
  }
});
// CONCATENATED MODULE: ./components/Footer/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Footervue_type_script_lang_js_ = (Footervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/Footer/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Footervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "78e3ff5f",
  "7d42512e"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Footer: __webpack_require__(62).default})


/***/ })

};;
//# sourceMappingURL=footer.js.map