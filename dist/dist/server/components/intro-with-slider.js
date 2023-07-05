exports.ids = [31];
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

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const removeSlashFromBagination = () => {
  if (document.querySelectorAll(".swiper-pagination")) {
    document.querySelectorAll(".swiper-pagination").forEach(item => {
      item.innerHTML = item.innerHTML.replace(" / ", "");
    });
  }
};
/* harmony default export */ __webpack_exports__["a"] = (removeSlashFromBagination);

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const fadeWhenScroll = element => {
  window.addEventListener("scroll", () => {
    var scrolled = window.pageYOffset;
    if (element) {
      element.forEach(item => {
        item.style.transform = "translate3d(0, " + -(scrolled * 0.2) + "px, 0)";
        item.style.opacity = 1 - scrolled / 600;
      });
    }
  });
};
/* harmony default export */ __webpack_exports__["a"] = (fadeWhenScroll);

/***/ }),

/***/ 79:
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"title\":\"Original Solutions\",\"content\":\"If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration.\",\"image\":\"/img/slid/02.jpg\"},{\"id\":2,\"title\":\"Digital Design Awards\",\"content\":\"If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration.\",\"image\":\"/img/slid/03.jpg\"},{\"id\":3,\"title\":\"Business value through digital products\",\"content\":\"\",\"image\":\"/img/slid/01.jpg\"}]");

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Intro-with-slider/index.vue?vue&type=template&id=2dbae5c1&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('header', {
    ref: _vm.sliderRef,
    staticClass: "slider slider-prlx fixed-slider text-center"
  }, [_vm._ssrNode("<div class=\"swiper-container parallax-slider\" data-v-2dbae5c1>", "</div>", [_c('swiper', {
    ref: "mySwiper",
    staticClass: "swiper-wrapper",
    attrs: {
      "options": _vm.swiperOptions
    },
    on: {
      "ready": _vm.handleSwiperReadied
    }
  }, _vm._l(_vm.portadas, function (port, id_port) {
    return _c('swiper-slide', {
      key: id_port,
      staticClass: "swiper-slide"
    }, [_c('div', {
      staticClass: "bg-img valign",
      style: `background-image: url(${_vm.url_api + '/InstitucionUpea/Portada/' + port.portada_imagen})`,
      attrs: {
        "data-overlay-dark": "6"
      }
    }, [_c('div', {
      staticClass: "container"
    }, [_c('div', {
      staticClass: "row justify-content-center"
    }, [_c('div', {
      staticClass: "col-lg-8 col-md-10"
    }, [_c('div', {
      staticClass: "caption center mt-30"
    }, [_c('h1', {
      staticClass: "color-font"
    }, [_vm._v(_vm._s(_vm.carrera_nombre))]), _vm._v(" "), _c('p', [_vm._v("\n                    La educación universitaria es la llave que abre las puertas hacia un futuro lleno de oportunidades y conocimiento.\n                  ")]), _vm._v(" "), _c('NuxtLink', {
      staticClass: "butn bord curve mt-30",
      attrs: {
        "to": "/categorias"
      }
    }, [_c('span', [_vm._v("Categorias")])])], 1)])])])])]);
  }), 1), _vm._ssrNode(" <div class=\"setone setwo\" data-v-2dbae5c1><div class=\"swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer\" data-v-2dbae5c1><i class=\"fas fa-chevron-right\" data-v-2dbae5c1></i></div> <div class=\"swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer\" data-v-2dbae5c1><i class=\"fas fa-chevron-left\" data-v-2dbae5c1></i></div></div> <div class=\"swiper-pagination top botm\" data-v-2dbae5c1></div> <div class=\"social-icon\" data-v-2dbae5c1><a" + _vm._ssrAttr("href", _vm.facebook) + " target=\"_blank\" data-v-2dbae5c1><i class=\"fab fa-facebook-f\" data-v-2dbae5c1></i></a> <a" + _vm._ssrAttr("href", _vm.twitter) + " target=\"_blank\" data-v-2dbae5c1><i class=\"fab fa-twitter\" data-v-2dbae5c1></i></a> <a" + _vm._ssrAttr("href", _vm.youtube) + " target=\"_blank\" data-v-2dbae5c1><i class=\"fab fa-youtube\" data-v-2dbae5c1></i></a></div>")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Intro-with-slider/index.vue?vue&type=template&id=2dbae5c1&scoped=true&

// EXTERNAL MODULE: ./store/store.js
var store = __webpack_require__(61);

// EXTERNAL MODULE: ./data/intro1.json
var intro1 = __webpack_require__(79);

// EXTERNAL MODULE: ./common/removeSlashpagination.js
var removeSlashpagination = __webpack_require__(65);

// EXTERNAL MODULE: ./common/fadeWhenScroll.js
var fadeWhenScroll = __webpack_require__(70);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Intro-with-slider/index.vue?vue&type=script&lang=js&




/* harmony default export */ var Intro_with_slidervue_type_script_lang_js_ = ({
  props: ["sliderRef"],
  data() {
    return {
      url_api: "https://serviciopagina.upea.bo",
      intro1Data: intro1,
      swiperOptions: {
        speed: 1000,
        navigation: {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next"
        },
        parallax: true,
        pagination: {
          type: "fraction",
          clickable: true,
          el: ".swiper-pagination"
        }
      },
      carrera_nombre: Object(store["a" /* useInstitucionStore */])().institucion.institucion_nombre,
      portadas: Object(store["a" /* useInstitucionStore */])().fotosPortada,
      facebook: Object(store["a" /* useInstitucionStore */])().institucion.institucion_facebook,
      youtube: Object(store["a" /* useInstitucionStore */])().institucion.institucion_youtube,
      twitter: Object(store["a" /* useInstitucionStore */])().institucion.institucion_twitter
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  methods: {
    handleSwiperReadied: swiper => {
      setTimeout(() => {
        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].childNodes[0].setAttribute("data-swiper-parallax", 0.75 * swiper.width);
        }
      });
    }
  },
  mounted() {
    Object(removeSlashpagination["a" /* default */])();
    Object(fadeWhenScroll["a" /* default */])(document.querySelectorAll(".fixed-slider .caption"));
  }
});
// CONCATENATED MODULE: ./components/Intro-with-slider/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Intro_with_slidervue_type_script_lang_js_ = (Intro_with_slidervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/Intro-with-slider/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Intro_with_slidervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2dbae5c1",
  "6a2519ef"
  
)

/* harmony default export */ var Intro_with_slider = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=intro-with-slider.js.map