exports.ids = [85,1,24,38,42,47];
exports.modules = {

/***/ 116:
/***/ (function(module) {

module.exports = JSON.parse("{\"id\":1,\"title\":\"Who We Are ?\",\"paragraph1\":\"We develop creative solutions for small and big brands alike, build authentic product identities and much more.Lorem ipsum dolor sit amet, consectetur adipiscing elit sit non facilisis vitae eut.\",\"paragraph2\":\"lorem in id tristique in elementum leo nisi eleifend placerat magna lacus elementum ornare vehicula odio posuere quisque ultrices tempus cras id blandit maecenas in ornare quis dolor tempus risus vitae feugiat fames aliquet sed.\"}");

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Pages-header/index.vue?vue&type=template&id=161cd85f&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('header', {
    staticClass: "pages-header circle-bg valign"
  }, [_vm._ssrNode("<div class=\"container\" data-v-161cd85f>", "</div>", [_vm._ssrNode("<div class=\"row justify-content-center\" data-v-161cd85f>", "</div>", [_vm._ssrNode("<div class=\"col-lg-10\" data-v-161cd85f>", "</div>", [_vm._ssrNode("<div class=\"cont mt-100 mb-50 text-center\" data-v-161cd85f>", "</div>", [_vm._ssrNode("<h1 class=\"color-font fw-700\" data-v-161cd85f>", "</h1>", [_vm._t("title")], 2)])]), _vm._ssrNode(" <div class=\"col-lg-10\" data-v-161cd85f><div class=\"img\" data-v-161cd85f><img" + _vm._ssrAttr("src", _vm.imageLink) + " alt data-v-161cd85f></div></div>")], 2)]), _vm._ssrNode(" <div class=\"half sub-bg\" data-v-161cd85f><div class=\"circle-color\" data-v-161cd85f><div class=\"gradient-circle\" data-v-161cd85f></div> <div class=\"gradient-circle two\" data-v-161cd85f></div></div></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Pages-header/index.vue?vue&type=template&id=161cd85f&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Pages-header/index.vue?vue&type=script&lang=js&
/* harmony default export */ var Pages_headervue_type_script_lang_js_ = ({
  props: ["imageLink"]
});
// CONCATENATED MODULE: ./components/Pages-header/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Pages_headervue_type_script_lang_js_ = (Pages_headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/Pages-header/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Pages_headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "161cd85f",
  "0a4cb284"
  
)

/* harmony default export */ var Pages_header = __webpack_exports__["default"] = (component.exports);

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

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about/about-dark.vue?vue&type=template&id=4faf8e6f&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Navbar', {
    ref: "navbar"
  }), _vm._ssrNode(" "), _c('PagesHeader', {
    attrs: {
      "imageLink": _vm.img_about
    },
    scopedSlots: _vm._u([{
      key: "title",
      fn: function () {
        return [_vm._v("\n      " + _vm._s(_vm.carrera_nombre) + "\n    ")];
      },
      proxy: true
    }])
  }), _vm._ssrNode(" "), _c('AboutIntro'), _vm._ssrNode(" "), _c('MinimalArea1'), _vm._ssrNode(" "), _c('Footer')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/about/about-dark.vue?vue&type=template&id=4faf8e6f&scoped=true&

// EXTERNAL MODULE: ./store/store.js
var store = __webpack_require__(61);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about/about-dark.vue?vue&type=script&lang=js&

/* harmony default export */ var about_darkvue_type_script_lang_js_ = ({
  layout: "dark",
  async asyncData({
    $axios
  }) {
    try {
      const useInstitucion = Object(store["a" /* useInstitucionStore */])();
      if (Object(store["a" /* useInstitucionStore */])().institucion == null || Object(store["a" /* useInstitucionStore */])().fotosPagina || Object(store["a" /* useInstitucionStore */])().fotosPortada) {
        const carrera_links_externos = await $axios.$get('/api/linksIntExtAll/' + "7");
        useInstitucion.asignarCarreraLinksExternos(carrera_links_externos);
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
      img_about: '/img/universidad/about.jpg',
      foto: Object(store["a" /* useInstitucionStore */])().fotosPagina[4],
      url_api: "https://serviciopagina.upea.bo",
      carrera_titulo: Object(store["a" /* useInstitucionStore */])().institucion.institucion_nombre,
      institucion_logo: Object(store["a" /* useInstitucionStore */])().institucion.institucion_logo
    };
  },
  head() {
    return {
      title: this.carrera_titulo + ' | ' + this.$route.params.categoria,
      link: [{
        rel: 'icon',
        type: "image/x-icon",
        href: this.url_api + '/InstitucionUpea/' + this.institucion_logo
      }]
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
    var navbar = this.$refs.navbar.$el;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }
});
// CONCATENATED MODULE: ./pages/about/about-dark.vue?vue&type=script&lang=js&
 /* harmony default export */ var about_about_darkvue_type_script_lang_js_ = (about_darkvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./pages/about/about-dark.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  about_about_darkvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4faf8e6f",
  "e60a107e"
  
)

/* harmony default export */ var about_dark = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navbar: __webpack_require__(64).default,PagesHeader: __webpack_require__(131).default,AboutIntro: __webpack_require__(132).default,MinimalArea1: __webpack_require__(133).default,Footer: __webpack_require__(62).default})


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


/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const getSiblings = e => {
  let siblings = [];
  if (!e.parentNode) {
    return siblings;
  }
  let sibling = e.parentNode.firstChild;
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== e) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }
  return siblings;
};
/* harmony default export */ __webpack_exports__["a"] = (getSiblings);

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navbar/index.vue?vue&type=template&id=26d2cc7e&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('nav', {
    ref: _vm.nr,
    staticClass: "navbar navbar-expand-lg change",
    class: _vm.theme === 'light' ? 'light' : ''
  }, [_vm._ssrNode("<div class=\"container\" data-v-26d2cc7e>", "</div>", [_c('NuxtLink', {
    staticClass: "logo",
    attrs: {
      "to": "/"
    }
  }, [_vm.theme === 'light' ? _c('img', {
    ref: "lr",
    attrs: {
      "src": "/img/logo-dark.png",
      "alt": "logo"
    }
  }) : _vm.theme === 'themeD' ? _c('img', {
    ref: "lr",
    attrs: {
      "src": "/img/logo-light.png",
      "alt": "logo"
    }
  }) : _c('img', {
    ref: "lr",
    attrs: {
      "src": _vm.url_api + '/InstitucionUpea/' + _vm.carrera_logo,
      "alt": "logo"
    }
  })]), _vm._ssrNode(" <button type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" class=\"navbar-toggler\" data-v-26d2cc7e><span class=\"icon-bar\" data-v-26d2cc7e><i class=\"fas fa-bars\" data-v-26d2cc7e></i></span></button> "), _vm._ssrNode("<div id=\"navbarSupportedContent\" class=\"collapse navbar-collapse\" data-v-26d2cc7e>", "</div>", [_vm._ssrNode("<ul class=\"navbar-nav ml-auto\" data-v-26d2cc7e>", "</ul>", [_vm._ssrNode("<li class=\"nav-item dropdown\" data-v-26d2cc7e>", "</li>", [_vm._ssrNode("<span data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" class=\"nav-link dropdown-toggle\" data-v-26d2cc7e>\n            Inicio\n          </span> "), _vm._ssrNode("<div class=\"dropdown-menu\" data-v-26d2cc7e>", "</div>", [_c('NuxtLink', {
    staticClass: "dropdown-item",
    attrs: {
      "to": "/about/about-dark"
    }
  }, [_vm._v(" \n              Sobre Nosotros\n            ")])], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"nav-item dropdown\" data-v-26d2cc7e>", "</li>", [_vm._ssrNode("<span data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" class=\"nav-link dropdown-toggle\" data-v-26d2cc7e>\n            Convocatorias\n          </span> "), _vm._ssrNode("<div class=\"dropdown-menu\" data-v-26d2cc7e>", "</div>", [_c('NuxtLink', {
    staticClass: "dropdown-item",
    attrs: {
      "to": "/convocatorias/convocatorias"
    }
  }, [_vm._v("\n              Convocatorias\n            ")]), _vm._ssrNode(" "), _c('NuxtLink', {
    staticClass: "dropdown-item",
    attrs: {
      "to": "/convocatorias/comunicados"
    }
  }, [_vm._v("\n              Comunicados\n            ")]), _vm._ssrNode(" "), _c('NuxtLink', {
    staticClass: "dropdown-item",
    attrs: {
      "to": "/convocatorias/avisos"
    }
  }, [_vm._v("\n              Avisos\n            ")])], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"nav-item dropdown\" data-v-26d2cc7e>", "</li>", [_vm._ssrNode("<span data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" class=\"nav-link dropdown-toggle\" data-v-26d2cc7e>\n            Cursos\n          </span> "), _vm._ssrNode("<div class=\"dropdown-menu\" data-v-26d2cc7e>", "</div>", [_c('NuxtLink', {
    staticClass: "dropdown-item",
    attrs: {
      "to": "/convocatorias/cursos"
    }
  }, [_vm._v("\n              Cursos\n            ")]), _vm._ssrNode(" "), _c('NuxtLink', {
    staticClass: "dropdown-item",
    attrs: {
      "to": "/convocatorias/seminarios"
    }
  }, [_vm._v("\n              Seminarios\n            ")])], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"nav-item dropdown\" data-v-26d2cc7e>", "</li>", [_vm._ssrNode("<span data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" class=\"nav-link dropdown-toggle\" data-v-26d2cc7e>\n            Mas\n          </span> "), _vm._ssrNode("<div class=\"dropdown-menu\" data-v-26d2cc7e>", "</div>", [_c('NuxtLink', {
    staticClass: "dropdown-item",
    attrs: {
      "to": "/convocatorias/servicios"
    }
  }, [_vm._v("\n              Servicios\n            ")]), _vm._ssrNode(" "), _c('NuxtLink', {
    staticClass: "dropdown-item",
    attrs: {
      "to": "/convocatorias/ofertasacademicas"
    }
  }, [_vm._v("\n              Ofertas Academicas\n            ")]), _vm._ssrNode(" "), _c('NuxtLink', {
    staticClass: "dropdown-item",
    attrs: {
      "to": "/convocatorias/publicaciones"
    }
  }, [_vm._v("\n              Publicaciones\n            ")]), _vm._ssrNode(" "), _c('NuxtLink', {
    staticClass: "dropdown-item",
    attrs: {
      "to": "/convocatorias/gacetas"
    }
  }, [_vm._v("\n              Gacetas\n            ")]), _vm._ssrNode(" "), _c('NuxtLink', {
    staticClass: "dropdown-item",
    attrs: {
      "to": "/convocatorias/eventos"
    }
  }, [_vm._v("\n              Eventos\n            ")]), _vm._ssrNode(" "), _c('NuxtLink', {
    staticClass: "dropdown-item",
    attrs: {
      "to": "/convocatorias/videos"
    }
  }, [_vm._v("\n              Videos\n            ")])], 2)], 2), _vm._ssrNode(" <li class=\"nav-item dropdown\" data-v-26d2cc7e><span data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" class=\"nav-link dropdown-toggle\" data-v-26d2cc7e>\n            Links\n          </span> <div class=\"dropdown-menu\" data-v-26d2cc7e>" + _vm._ssrList(_vm.carrera_links, function (link, id_link) {
    return "<a target=\"_blank\"" + _vm._ssrAttr("href", link.ei_link) + " class=\"dropdown-item\" data-v-26d2cc7e>" + _vm._ssrEscape("\n              " + _vm._s(link.ei_nombre) + "\n            ") + "</a>";
  }) + "</div></li> "), _vm._ssrNode("<li class=\"nav-item\" data-v-26d2cc7e>", "</li>", [_c('NuxtLink', {
    staticClass: "nav-link",
    attrs: {
      "to": "/contact/contact-dark"
    }
  }, [_vm._v("\n            Contacto\n          ")])], 1)], 2)])], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Navbar/index.vue?vue&type=template&id=26d2cc7e&scoped=true&

// EXTERNAL MODULE: ./store/store.js
var store = __webpack_require__(61);

// EXTERNAL MODULE: ./common/getSiblings.js
var getSiblings = __webpack_require__(63);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navbar/index.vue?vue&type=script&lang=js&


/* harmony default export */ var Navbarvue_type_script_lang_js_ = ({
  props: ["lr", "theme", "nr"],
  async asyncData({
    $axios
  }) {
    try {
      const useInstitucion = Object(store["a" /* useInstitucionStore */])();
      if (Object(store["a" /* useInstitucionStore */])().carrera_links_externos == null) {
        const carrera_links_externos = await $axios.$get('/api/linksIntExtAll/' + "7");
        useInstitucion.asignarCarreraLinksExternos(carrera_links_externos);
      }
      if (Object(store["a" /* useInstitucionStore */])().institucion == null) {
        const institucion = await $axios.$get('/api/InstitucionUPEA/' + "7");
        useInstitucion.asignarInstitucion(institucion.Descripcion);
      }
    } catch (e) {
      console.error("el error es: ", e);
    }
  },
  data() {
    return {
      url_api: "https://serviciopagina.upea.bo",
      carrera_logo: Object(store["a" /* useInstitucionStore */])().institucion.institucion_logo,
      carrera_nombre: Object(store["a" /* useInstitucionStore */])().institucion.institucion_nombre,
      carrera_links: Object(store["a" /* useInstitucionStore */])().carrera_links_externos
    };
  },
  created() {},
  methods: {
    handleDropdown: e => {
      Object(getSiblings["a" /* default */])(e.target.parentElement).filter(item => item.classList.contains("show")).map(item => {
        item.classList.remove("show");
        if (item.childNodes[0]) {
          item.childNodes[0].setAttribute("aria-expanded", false);
        }
        if (item.childNodes[2]) {
          item.childNodes[2].classList.remove("show");
        }
      });
      e.target.setAttribute("aria-expanded", true);
      if (e.target.parentElement) {
        e.target.parentElement.classList.toggle("show");
        let dropdownMenu = e.target.parentElement.childNodes[2];
        if (dropdownMenu) {
          dropdownMenu.classList.toggle("show");
        }
      }
    },
    handleMobileDropdown: e => {
      document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans");
    }
  }
});
// CONCATENATED MODULE: ./components/Navbar/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Navbarvue_type_script_lang_js_ = (Navbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/Navbar/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Navbarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "26d2cc7e",
  "2d016f9e"
  
)

/* harmony default export */ var Navbar = __webpack_exports__["default"] = (component.exports);

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
//# sourceMappingURL=about-dark.js.map