exports.ids = [93,11,24,42,46];
exports.modules = {

/***/ 118:
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"title\":\"Build a Beautiful Blog With Ease\",\"content\":\"My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.\",\"image\":\"/img/blog/b1.jpg\",\"tags\":[\"WordPress\",\"Themeforest\",\"Vie\"],\"date\":{\"day\":\"07\",\"month\":\"August\"}},{\"id\":2,\"title\":\"Build a Beautiful Blog With Ease\",\"content\":\"My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.\",\"image\":\"/img/blog/b2.jpg\",\"tags\":[\"WordPress\",\"Themeforest\",\"Vie\"],\"date\":{\"day\":\"07\",\"month\":\"August\"}},{\"id\":3,\"title\":\"Build a Beautiful Blog With Ease\",\"content\":\"My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.\",\"image\":\"/img/blog/b3.jpg\",\"tags\":[\"WordPress\",\"Themeforest\",\"Vie\"],\"date\":{\"day\":\"07\",\"month\":\"August\"}},{\"id\":4,\"title\":\"Build a Beautiful Blog With Ease\",\"content\":\"My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. These qualities can be combined perfectly natural. However, things like people look miserable, if these properties are connected.\",\"image\":\"/img/blog/b4.jpg\",\"tags\":[\"WordPress\",\"Themeforest\",\"Vie\"],\"date\":{\"day\":\"07\",\"month\":\"August\"}}]");

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blog-standerd/index.vue?vue&type=template&id=4064c5ee&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "blog-pg section-padding pt-0"
  }, [_vm._ssrNode("<div class=\"container\" data-v-4064c5ee>", "</div>", [_vm._ssrNode("<div class=\"row justify-content-center\" data-v-4064c5ee>", "</div>", [_vm._ssrNode("<div class=\"col-lg-11\" data-v-4064c5ee>", "</div>", [_vm._ssrNode("<div class=\"posts\" data-v-4064c5ee>", "</div>", [_vm._l(_vm.blogs, function (blogItem, index) {
    return _vm._ssrNode("<div" + _vm._ssrClass(null, `item ${index === _vm.blogs.length - 1 ? '' : 'mb-80'}`) + " data-v-4064c5ee>", "</div>", [_vm._ssrNode("<div class=\"img\" data-v-4064c5ee>", "</div>", [_c('NuxtLink', {
      attrs: {
        "to": "/blog-details/blog-details-dark"
      }
    }, [_c('img', {
      attrs: {
        "src": blogItem.image,
        "alt": ""
      }
    })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"content\" data-v-4064c5ee>", "</div>", [_vm._ssrNode("<div class=\"row justify-content-center\" data-v-4064c5ee>", "</div>", [_vm._ssrNode("<div class=\"col-10\" data-v-4064c5ee>", "</div>", [_c('NuxtLink', {
      staticClass: "date",
      attrs: {
        "to": "/blog/blog-dark"
      }
    }, [_c('span', {
      staticClass: "num"
    }, [_vm._v(_vm._s(blogItem.date.day))]), _vm._v(" "), _c('span', [_vm._v(_vm._s(blogItem.date.month))])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"tags\" data-v-4064c5ee>", "</div>", _vm._l(blogItem.tags, function (tag, index) {
      return _c('NuxtLink', {
        key: index,
        attrs: {
          "to": ""
        }
      }, [_vm._v("\n                      " + _vm._s(tag) + "\n                    ")]);
    }), 1), _vm._ssrNode(" "), _vm._ssrNode("<h4 class=\"title\" data-v-4064c5ee>", "</h4>", [_c('NuxtLink', {
      attrs: {
        "to": "/blog-details/blog-details-dark"
      }
    }, [_vm._v("\n                      " + _vm._s(blogItem.title) + "\n                    ")])], 1), _vm._ssrNode(" <p data-v-4064c5ee>" + _vm._ssrEscape(_vm._s(blogItem.content)) + "</p> "), _c('NuxtLink', {
      staticClass: "butn bord curve mt-30",
      attrs: {
        "to": "/blog-details/blog-details-dark"
      }
    }, [_vm._v("\n                    Read More\n                  ")])], 2)])])], 2);
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"pagination\" data-v-4064c5ee>", "</div>", [_vm._ssrNode("<span class=\"active\" data-v-4064c5ee>", "</span>", [_c('NuxtLink', {
    attrs: {
      "to": "/blog/blog-dark"
    }
  }, [_vm._v("1")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<span data-v-4064c5ee>", "</span>", [_c('NuxtLink', {
    attrs: {
      "to": "/blog/blog-dark"
    }
  }, [_vm._v("2")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<span data-v-4064c5ee>", "</span>", [_c('NuxtLink', {
    attrs: {
      "to": "/blog/blog-dark"
    }
  }, [_c('i', {
    staticClass: "fas fa-angle-right"
  })])], 1)], 2)], 2)])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Blog-standerd/index.vue?vue&type=template&id=4064c5ee&scoped=true&

// EXTERNAL MODULE: ./data/blogs1.json
var blogs1 = __webpack_require__(118);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blog-standerd/index.vue?vue&type=script&lang=js&

/* harmony default export */ var Blog_standerdvue_type_script_lang_js_ = ({
  data() {
    return {
      blogs: blogs1
    };
  }
});
// CONCATENATED MODULE: ./components/Blog-standerd/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Blog_standerdvue_type_script_lang_js_ = (Blog_standerdvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/Blog-standerd/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Blog_standerdvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4064c5ee",
  "576e7058"
  
)

/* harmony default export */ var Blog_standerd = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/blog-dark.vue?vue&type=template&id=6b431f36&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"circle-bg\" data-v-6b431f36><div class=\"circle-color fixed\" data-v-6b431f36><div class=\"gradient-circle\" data-v-6b431f36></div> <div class=\"gradient-circle two\" data-v-6b431f36></div></div></div> "), _c('Navbar', {
    ref: "navbar"
  }), _vm._ssrNode(" "), _c('PageHeader', {
    attrs: {
      "title": "Our News.",
      "paragraph": "All the most current news and events of our creative team."
    }
  }), _vm._ssrNode(" "), _c('BlogStanderd'), _vm._ssrNode(" "), _c('Footer')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/blog/blog-dark.vue?vue&type=template&id=6b431f36&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/blog-dark.vue?vue&type=script&lang=js&
/* harmony default export */ var blog_darkvue_type_script_lang_js_ = ({
  layout: 'dark',
  head() {
    return {
      titleTemplate: '%s - Blog Dark'
    };
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
// CONCATENATED MODULE: ./pages/blog/blog-dark.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_blog_darkvue_type_script_lang_js_ = (blog_darkvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./pages/blog/blog-dark.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_blog_darkvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6b431f36",
  "4ed62dc6"
  
)

/* harmony default export */ var blog_dark = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navbar: __webpack_require__(64).default,PageHeader: __webpack_require__(74).default,BlogStanderd: __webpack_require__(135).default,Footer: __webpack_require__(62).default})


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

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Page-header/index.vue?vue&type=template&id=1eba3886&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    class: `page-header ${_vm.classText && _vm.classText}`
  }, [_vm._ssrNode("<div class=\"container\" data-v-1eba3886><div class=\"row justify-content-center\" data-v-1eba3886><div class=\"col-lg-7 col-md-9\" data-v-1eba3886><div class=\"cont text-center\" data-v-1eba3886><h1 class=\"mb-10 color-font\" data-v-1eba3886>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</h1> <p data-v-1eba3886>" + _vm._ssrEscape(_vm._s(_vm.paragraph)) + "</p></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Page-header/index.vue?vue&type=template&id=1eba3886&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Page-header/index.vue?vue&type=script&lang=js&
/* harmony default export */ var Page_headervue_type_script_lang_js_ = ({
  props: ["title", "paragraph", "classText"]
});
// CONCATENATED MODULE: ./components/Page-header/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Page_headervue_type_script_lang_js_ = (Page_headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/Page-header/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Page_headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1eba3886",
  "5d9f0053"
  
)

/* harmony default export */ var Page_header = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=blog-dark.js.map