exports.ids = [70,40];
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

/***/ 66:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3bd673e7_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3bd673e7_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3bd673e7_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3bd673e7_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3bd673e7_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Modal-video/index.vue?vue&type=template&id=3bd673e7&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.isOpen ? _c('div', [_vm._ssrNode("<div tabIndex=\"-1\" role=\"dialog\"" + _vm._ssrAttr("aria-label", _vm.aria.openMessage) + _vm._ssrClass(null, _vm.classNames.modalVideo) + " data-v-3bd673e7><div" + _vm._ssrClass(null, _vm.classNames.modalVideoBody) + " data-v-3bd673e7><button" + _vm._ssrAttr("aria-label", _vm.aria.dismissBtnMessage) + _vm._ssrClass(null, _vm.classNames.modalVideoCloseBtn) + " data-v-3bd673e7></button> <div" + _vm._ssrClass(null, _vm.classNames.modalVideoInner) + " data-v-3bd673e7><div" + _vm._ssrClass(null, _vm.classNames.modalVideoIframeWrap) + _vm._ssrStyle(null, {
    'padding-bottom': _vm.paddingBottom
  }, null) + " data-v-3bd673e7><iframe" + _vm._ssrAttr("src", _vm.src_video_institucion) + " frameBorder=\"0\"" + _vm._ssrAttr("allowFullScreen", _vm.allowFullScreen) + " tabIndex=\"-1\" data-v-3bd673e7></iframe></div></div></div></div>")]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Modal-video/index.vue?vue&type=template&id=3bd673e7&scoped=true&

// EXTERNAL MODULE: ./store/store.js
var store = __webpack_require__(61);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Modal-video/index.vue?vue&type=script&lang=js&

/* harmony default export */ var Modal_videovue_type_script_lang_js_ = ({
  props: {
    videoId: String,
    channel: String,
    isOpen: Boolean,
    youtube: {
      type: Object,
      default: function () {
        return {
          autoplay: 1,
          cc_load_policy: 1,
          color: null,
          controls: 1,
          disablekb: 0,
          enablejsapi: 0,
          end: null,
          fs: 1,
          h1: null,
          iv_load_policy: 1,
          list: null,
          listType: null,
          loop: 0,
          modestbranding: null,
          origin: null,
          playlist: null,
          playsinline: null,
          rel: 0,
          showinfo: 1,
          start: 0,
          wmode: "transparent",
          theme: "dark"
        };
      }
    },
    ratio: {
      type: String,
      default: "16:9"
    },
    vimeo: {
      type: Object,
      default: function () {
        return {
          api: false,
          autopause: true,
          autoplay: true,
          byline: true,
          callback: null,
          color: null,
          height: null,
          loop: false,
          maxheight: null,
          maxwidth: null,
          player_id: null,
          portrait: true,
          title: true,
          width: null,
          xhtml: false
        };
      }
    },
    allowFullScreen: {
      type: Boolean,
      default: true
    },
    animationSpeed: {
      type: Number,
      default: 300
    },
    classNames: {
      type: Object,
      default: function () {
        return {
          modalVideoEffect: "modal-video-effect",
          modalVideo: "modal-video",
          modalVideoClose: "modal-video-close",
          modalVideoBody: "modal-video-body",
          modalVideoInner: "modal-video-inner",
          modalVideoIframeWrap: "modal-video-movie-wrap",
          modalVideoCloseBtn: "modal-video-close-btn"
        };
      }
    },
    aria: {
      type: Object,
      default: function () {
        return {
          openMessage: "Modal video opened",
          dismissBtnMessage: "Close the modal video"
        };
      }
    }
  },
  async asyncData({
    $axios
  }) {
    try {
      const useInstitucion = Object(store["a" /* useInstitucionStore */])();
      if (Object(store["a" /* useInstitucionStore */])().institucion == null) {
        const institucion = await $axios.$get('/api/InstitucionUPEA/' + "7");
        useInstitucion.asignarInstitucion(institucion.Descripcion);
      }
    } catch (e) {
      console.error("error", e);
    }
  },
  data() {
    return {
      src_video_institucion: Object(store["a" /* useInstitucionStore */])().institucion.institucion_link_video_vision
    };
  },
  methods: {
    getQueryString(obj) {
      let url = "";
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (obj[key] !== null) {
            url += key + "=" + obj[key] + "&";
          }
        }
      }
      return url.substr(0, url.length - 1);
    },
    getYoutubeUrl(youtube, videoId) {
      const query = this.getQueryString(youtube);
      return "//www.youtube.com/embed/" + videoId + "?" + query;
    },
    getVimeoUrl(vimeo, videoId) {
      const query = this.getQueryString(vimeo);
      return "//player.vimeo.com/video/" + videoId + "?" + query;
    },
    getPadding(ratio) {
      const arr = ratio.split(":");
      const width = Number(arr[0]);
      const height = Number(arr[1]);
      const padding = height * 100 / width;
      return padding + "%";
    }
  },
  computed: {
    fullVideoUrl() {
      if (this.channel === "youtube") {
        return this.getYoutubeUrl(this.youtube, this.videoId);
      } else if (this.channel === "vimeo") {
        return this.getVimeoUrl(this.vimeo, this.videoId);
      }
    },
    paddingBottom() {
      return this.getPadding(this.ratio);
    }
  },
  watch: {
    isOpen: {
      handler: function (val) {
        this.$nextTick(() => {
          if (typeof this.$refs.closeBtn !== "undefined") {
            this.$refs.closeBtn.focus();
          }
        });
      },
      deep: true
    }
  }
});
// CONCATENATED MODULE: ./components/Modal-video/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Modal_videovue_type_script_lang_js_ = (Modal_videovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/Modal-video/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(68)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Modal_videovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3bd673e7",
  "e72e23ba"
  
)

/* harmony default export */ var Modal_video = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Video-with-testimonials/index.vue?vue&type=template&id=ce565818&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "block-sec"
  }, [_vm._ssrNode("<div data-overlay-dark=\"5\" class=\"background bg-img pt-100 pb-0 parallaxie\"" + _vm._ssrStyle(null, `background-image: url(${_vm.url})`, null) + " data-v-ce565818>", "</div>", [_vm._ssrNode("<div class=\"container\" data-v-ce565818>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-ce565818>", "</div>", [_vm._ssrNode("<div class=\"col-lg-6\" data-v-ce565818>", "</div>", [_vm._ssrNode("<div class=\"vid-area\" data-v-ce565818>", "</div>", [_vm._ssrNode("<span class=\"text\" data-v-ce565818>Ver Video</span> "), _c('ModalVideo', {
    attrs: {
      "channel": _vm.videoChannel,
      "videoId": _vm.videoId,
      "isOpen": _vm.videoIsOpen
    },
    on: {
      "update:isOpen": function ($event) {
        _vm.videoIsOpen = $event;
      },
      "update:is-open": function ($event) {
        _vm.videoIsOpen = $event;
      }
    }
  }), _vm._ssrNode(" <div class=\"vid-icon cursor-pointer\" data-v-ce565818><a class=\"vid\" data-v-ce565818><div class=\"vid-butn\" data-v-ce565818><span class=\"icon\" data-v-ce565818><i class=\"fas fa-play\" data-v-ce565818></i></span></div></a></div>")], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-lg-5 offset-lg-1\" data-v-ce565818>", "</div>", [_vm._ssrNode("<div class=\"testim-box\" data-v-ce565818>", "</div>", [_vm._ssrNode("<div class=\"head-box\" data-v-ce565818><h6 data-wow-delay=\".5s\" class=\"wow fadeIn\" data-v-ce565818>" + _vm._ssrEscape(_vm._s(_vm.carrera.institucion_nombre)) + "</h6></div> "), _c('VueSlickCarousel', _vm._b({
    staticClass: "slic-item wow fadeInUp",
    attrs: {
      "data-wow-delay": ".5s"
    }
  }, 'VueSlickCarousel', _vm.settings, false), [_c('div', {
    staticClass: "item"
  }, [_c('h4', [_vm._v("Mision")]), _vm._v(" "), _c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.mision)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_c('div', {
    staticClass: "img"
  }, [_c('div', {
    staticClass: "img-box"
  }, [_c('img', {
    attrs: {
      "src": _vm.url_api + '/InstitucionUpea/' + _vm.carrera_logo,
      "alt": ""
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "cont"
  }, [_c('div', {
    staticClass: "author"
  }, [_c('h6', {
    staticClass: "author-name"
  }, [_vm._v(_vm._s(_vm.carrera.institucion_nombre))]), _vm._v(" "), _c('span', {
    staticClass: "author-details"
  }, [_vm._v("\n                        " + _vm._s(_vm.carrera.institucion_iniciales) + "\n                      ")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_c('h4', [_vm._v("Vision")]), _vm._v(" "), _c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.vision)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_c('div', {
    staticClass: "img"
  }, [_c('div', {
    staticClass: "img-box"
  }, [_c('img', {
    attrs: {
      "src": _vm.url_api + '/InstitucionUpea/' + _vm.carrera_logo,
      "alt": ""
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "cont"
  }, [_c('div', {
    staticClass: "author"
  }, [_c('h6', {
    staticClass: "author-name"
  }, [_vm._v(_vm._s(_vm.carrera.institucion_nombre))]), _vm._v(" "), _c('span', {
    staticClass: "author-details"
  }, [_vm._v("\n                        " + _vm._s(_vm.carrera.institucion_iniciales) + "\n                      ")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_c('h4', [_vm._v("Objetivos")]), _vm._v(" "), _c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.objetivos)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_c('div', {
    staticClass: "img"
  }, [_c('div', {
    staticClass: "img-box"
  }, [_c('img', {
    attrs: {
      "src": _vm.url_api + '/InstitucionUpea/' + _vm.carrera_logo,
      "alt": ""
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "cont"
  }, [_c('div', {
    staticClass: "author"
  }, [_c('h6', {
    staticClass: "author-name"
  }, [_vm._v(_vm._s(_vm.carrera.institucion_nombre))]), _vm._v(" "), _c('span', {
    staticClass: "author-details"
  }, [_vm._v("\n                        " + _vm._s(_vm.carrera.institucion_iniciales) + "\n                      ")])])])])])])], 2)])], 2)])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Video-with-testimonials/index.vue?vue&type=template&id=ce565818&scoped=true&

// EXTERNAL MODULE: ./store/store.js
var store = __webpack_require__(61);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Video-with-testimonials/index.vue?vue&type=script&lang=js&

/* harmony default export */ var Video_with_testimonialsvue_type_script_lang_js_ = ({
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
      videoIsOpen: false,
      settings: {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      },
      url_api: "https://serviciopagina.upea.bo",
      foto: Object(store["a" /* useInstitucionStore */])().fotosPagina[1],
      url: '/img/universidad/video_fondo.jpeg',
      carrera: Object(store["a" /* useInstitucionStore */])().institucion,
      carrera_logo: Object(store["a" /* useInstitucionStore */])().institucion.institucion_logo,
      mision: Object(store["a" /* useInstitucionStore */])().institucion.institucion_mision,
      vision: Object(store["a" /* useInstitucionStore */])().institucion.institucion_vision,
      objetivos: Object(store["a" /* useInstitucionStore */])().institucion.institucion_objetivos
    };
  },
  methods: {
    openVideo() {
      this.videoIsOpen = !this.videoIsOpen;
    },
    createdComponent() {
      if (this.foto != null && Object.keys(this.foto).length != 0) {
        this.url = `${this.url_api}/InstitucionUpea/Portada/${this.foto.portada_imagen}`;
      }
    }
  },
  created() {
    this.createdComponent();
  },
  computed: {
    videoChannel: function () {
      return "vimeo";
    },
    videoId: function () {
      return "127203262";
    }
  }
});
// CONCATENATED MODULE: ./components/Video-with-testimonials/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Video_with_testimonialsvue_type_script_lang_js_ = (Video_with_testimonialsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/Video-with-testimonials/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Video_with_testimonialsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "ce565818",
  "b9aaf75e"
  
)

/* harmony default export */ var Video_with_testimonials = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ModalVideo: __webpack_require__(69).default})


/***/ })

};;
//# sourceMappingURL=video-with-testimonials.js.map