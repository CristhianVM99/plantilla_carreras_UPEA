exports.ids = [12];
exports.modules = {

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_69c82dcb_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_69c82dcb_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_69c82dcb_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_69c82dcb_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_69c82dcb_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blogs1/index.vue?vue&type=template&id=69c82dcb&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "blog section-padding sub-bg"
  }, [_vm.tipo == 'convocatorias' ? _vm._ssrNode("<div class=\"container\" data-v-69c82dcb>", "</div>", [_vm._ssrNode("<div class=\"row justify-content-center\" data-v-69c82dcb><div class=\"col-lg-8 col-md-10\" data-v-69c82dcb><div class=\"sec-head text-center\" data-v-69c82dcb><h6 data-wow-delay=\".5s\" class=\"wow fadeIn\" data-v-69c82dcb>" + _vm._ssrEscape(_vm._s(_vm.pretitle_convocatorias)) + "</h6> <h3 class=\"wow color-font\" data-v-69c82dcb>" + _vm._ssrEscape(_vm._s(_vm.title_convocatorias)) + "</h3></div></div></div> "), _vm._ssrNode("<div class=\"row\" data-v-69c82dcb>", "</div>", [_vm._l(_vm.carrera_convocatorias.slice(0, 1), function (conv) {
    return _vm._ssrNode("<div class=\"col-lg-4\" data-v-69c82dcb>", "</div>", [_vm._ssrNode("<div data-wow-delay=\".3s\" class=\"item md-mb50 wow fadeInUp\" data-v-69c82dcb>", "</div>", [_vm._ssrNode("<div class=\"img\" data-v-69c82dcb><img" + _vm._ssrAttr("src", _vm.url_api + '/Convocatorias/' + conv.con_foto_portada) + " alt class=\"img-style\" data-v-69c82dcb></div> "), _vm._ssrNode("<div class=\"cont\" data-v-69c82dcb>", "</div>", [_vm._ssrNode("<div data-v-69c82dcb>", "</div>", [_vm._ssrNode("<div class=\"info\" data-v-69c82dcb>", "</div>", [_c('NuxtLink', {
      staticClass: "date",
      attrs: {
        "to": {
          path: '/ConvocatoriasDetalle/convocatorias',
          query: {
            id: _vm.encryptID(conv.idconvocatorias)
          }
        }
      }
    }, [_c('span', [_vm._v(_vm._s(_vm.convertirFecha(conv.con_fecha_inicio)))])]), _vm._ssrNode(" <span data-v-69c82dcb>/</span> "), _c('NuxtLink', {
      staticClass: "tag",
      attrs: {
        "to": {
          path: '/ConvocatoriasDetalle/convocatorias',
          query: {
            id: _vm.encryptID(conv.idconvocatorias)
          }
        }
      }
    }, [_c('span', [_vm._v(_vm._s(conv.tipo_conv_comun.tipo_conv_comun_titulo))])])], 2), _vm._ssrNode(" "), _vm._ssrNode("<h5 data-v-69c82dcb>", "</h5>", [_c('NuxtLink', {
      attrs: {
        "to": {
          path: '/ConvocatoriasDetalle/convocatorias',
          query: {
            id: _vm.encryptID(conv.idconvocatorias)
          }
        }
      }
    }, [_vm._v("\n                  " + _vm._s(conv.con_titulo) + "\n                ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"btn-more\" data-v-69c82dcb>", "</div>", [_c('NuxtLink', {
      staticClass: "simple-btn",
      attrs: {
        "to": {
          path: '/ConvocatoriasDetalle/convocatorias',
          query: {
            id: _vm.encryptID(conv.idconvocatorias)
          }
        }
      }
    }, [_vm._v(" Mas Detalles ")])], 1)], 2)])], 2)]);
  }), _vm._ssrNode(" "), _vm._l(_vm.carrera_comunicados.slice(0, 1), function (com) {
    return _vm._ssrNode("<div class=\"col-lg-4\" data-v-69c82dcb>", "</div>", [_vm._ssrNode("<div data-wow-delay=\".5s\" class=\"item md-mb50 wow fadeInUp\" data-v-69c82dcb>", "</div>", [_vm._ssrNode("<div class=\"img\" data-v-69c82dcb><img" + _vm._ssrAttr("src", _vm.url_api + '/Convocatorias/' + com.con_foto_portada) + " alt class=\"img-style\" data-v-69c82dcb></div> "), _vm._ssrNode("<div class=\"cont\" data-v-69c82dcb>", "</div>", [_vm._ssrNode("<div data-v-69c82dcb>", "</div>", [_vm._ssrNode("<div class=\"info\" data-v-69c82dcb>", "</div>", [_c('NuxtLink', {
      staticClass: "date",
      attrs: {
        "to": {
          path: '/ConvocatoriasDetalle/comunicados',
          query: {
            id: _vm.encryptID(com.idconvocatorias)
          }
        }
      }
    }, [_c('span', [_vm._v(_vm._s(_vm.convertirFecha(com.con_fecha_inicio)))])]), _vm._ssrNode(" <span data-v-69c82dcb>/</span> "), _c('NuxtLink', {
      staticClass: "tag",
      attrs: {
        "to": {
          path: '/ConvocatoriasDetalle/comunicados',
          query: {
            id: _vm.encryptID(com.idconvocatorias)
          }
        }
      }
    }, [_c('span', [_vm._v(_vm._s(com.tipo_conv_comun.tipo_conv_comun_titulo))])])], 2), _vm._ssrNode(" "), _vm._ssrNode("<h5 data-v-69c82dcb>", "</h5>", [_c('NuxtLink', {
      attrs: {
        "to": {
          path: '/ConvocatoriasDetalle/comunicados',
          query: {
            id: _vm.encryptID(com.idconvocatorias)
          }
        }
      }
    }, [_vm._v("\n                  " + _vm._s(com.con_titulo) + "\n                ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"btn-more\" data-v-69c82dcb>", "</div>", [_c('NuxtLink', {
      staticClass: "simple-btn",
      attrs: {
        "to": {
          path: '/ConvocatoriasDetalle/comunicados',
          query: {
            id: _vm.encryptID(com.idconvocatorias)
          }
        }
      }
    }, [_vm._v(" Mas Detalles ")])], 1)], 2)])], 2)]);
  }), _vm._ssrNode(" "), _vm._l(_vm.carrera_avisos.slice(0, 1), function (avi) {
    return _vm._ssrNode("<div class=\"col-lg-4\" data-v-69c82dcb>", "</div>", [_vm._ssrNode("<div data-wow-delay=\".5s\" class=\"item md-mb50 wow fadeInUp\" data-v-69c82dcb>", "</div>", [_vm._ssrNode("<div class=\"img\" data-v-69c82dcb><img" + _vm._ssrAttr("src", _vm.url_api + '/Convocatorias/' + avi.con_foto_portada) + " alt class=\"img-style\" data-v-69c82dcb></div> "), _vm._ssrNode("<div class=\"cont\" data-v-69c82dcb>", "</div>", [_vm._ssrNode("<div data-v-69c82dcb>", "</div>", [_vm._ssrNode("<div class=\"info\" data-v-69c82dcb>", "</div>", [_c('NuxtLink', {
      staticClass: "date",
      attrs: {
        "to": {
          path: '/ConvocatoriasDetalle/avisos',
          query: {
            id: _vm.encryptID(avi.idconvocatorias)
          }
        }
      }
    }, [_c('span', [_vm._v(_vm._s(_vm.convertirFecha(avi.con_fecha_inicio)))])]), _vm._ssrNode(" <span data-v-69c82dcb>/</span> "), _c('NuxtLink', {
      staticClass: "tag",
      attrs: {
        "to": {
          path: '/ConvocatoriasDetalle/avisos',
          query: {
            id: _vm.encryptID(avi.idconvocatorias)
          }
        }
      }
    }, [_c('span', [_vm._v(_vm._s(avi.tipo_conv_comun.tipo_conv_comun_titulo))])])], 2), _vm._ssrNode(" "), _vm._ssrNode("<h5 data-v-69c82dcb>", "</h5>", [_c('NuxtLink', {
      attrs: {
        "to": {
          path: '/ConvocatoriasDetalle/avisos',
          query: {
            id: _vm.encryptID(avi.idconvocatorias)
          }
        }
      }
    }, [_vm._v("\n                  " + _vm._s(avi.con_titulo) + "\n                ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"btn-more\" data-v-69c82dcb>", "</div>", [_c('NuxtLink', {
      staticClass: "simple-btn",
      attrs: {
        "to": {
          path: '/ConvocatoriasDetalle/avisos',
          query: {
            id: _vm.encryptID(avi.idconvocatorias)
          }
        }
      }
    }, [_vm._v(" Mas Detalles ")])], 1)], 2)])], 2)]);
  })], 2)], 2) : _vm._e(), _vm._ssrNode(" "), _vm.tipo == 'cursos' ? _vm._ssrNode("<div class=\"container\" data-v-69c82dcb>", "</div>", [_vm._ssrNode("<div class=\"row justify-content-center\" data-v-69c82dcb><div class=\"col-lg-8 col-md-10\" data-v-69c82dcb><div class=\"sec-head text-center\" data-v-69c82dcb><h6 data-wow-delay=\".5s\" class=\"wow fadeIn\" data-v-69c82dcb>" + _vm._ssrEscape(_vm._s(_vm.pretitle_cursos)) + "</h6> <h3 class=\"wow color-font\" data-v-69c82dcb>" + _vm._ssrEscape(_vm._s(_vm.title_cursos)) + "</h3></div></div></div> "), _vm._ssrNode("<div class=\"row\" data-v-69c82dcb>", "</div>", [_vm._ssrNode("<div class=\"col-lg-2\" data-v-69c82dcb></div> "), _vm._l(_vm.carrera_cursos.slice(0, 1), function (cur) {
    return _vm._ssrNode("<div class=\"col-lg-4\" data-v-69c82dcb>", "</div>", [_vm._ssrNode("<div data-wow-delay=\".3s\" class=\"item md-mb50 wow fadeInUp\" data-v-69c82dcb>", "</div>", [_vm._ssrNode("<div class=\"img\" data-v-69c82dcb><img" + _vm._ssrAttr("src", _vm.url_api + '/Cursos/' + cur.det_img_portada) + " alt class=\"img-style\" data-v-69c82dcb></div> "), _vm._ssrNode("<div class=\"cont\" data-v-69c82dcb>", "</div>", [_vm._ssrNode("<div data-v-69c82dcb>", "</div>", [_vm._ssrNode("<div class=\"info\" data-v-69c82dcb>", "</div>", [_c('NuxtLink', {
      staticClass: "date",
      attrs: {
        "to": {
          path: '/ConvocatoriasDetalle/cursos',
          query: {
            id: _vm.encryptID(cur.iddetalle_cursos_academicos)
          }
        }
      }
    }, [_c('span', [_vm._v(_vm._s(_vm.convertirFecha(cur.det_fecha_ini)))])]), _vm._ssrNode(" <span data-v-69c82dcb>/</span> "), _c('NuxtLink', {
      staticClass: "tag",
      attrs: {
        "to": {
          path: '/ConvocatoriasDetalle/cursos',
          query: {
            id: _vm.encryptID(cur.iddetalle_cursos_academicos)
          }
        }
      }
    }, [_c('span', [_vm._v("Cursos")])])], 2), _vm._ssrNode(" "), _vm._ssrNode("<h5 data-v-69c82dcb>", "</h5>", [_c('NuxtLink', {
      attrs: {
        "to": {
          path: '/ConvocatoriasDetalle/cursos',
          query: {
            id: _vm.encryptID(cur.iddetalle_cursos_academicos)
          }
        }
      }
    }, [_vm._v("\n                  " + _vm._s(cur.det_titulo) + "\n                ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"btn-more\" data-v-69c82dcb>", "</div>", [_c('NuxtLink', {
      staticClass: "simple-btn",
      attrs: {
        "to": {
          path: '/ConvocatoriasDetalle/cursos',
          query: {
            id: _vm.encryptID(cur.iddetalle_cursos_academicos)
          }
        }
      }
    }, [_vm._v(" Mas detalles ")])], 1)], 2)])], 2)]);
  }), _vm._ssrNode(" "), _vm._l(_vm.carrera_seminarios.slice(0, 1), function (sem) {
    return _vm._ssrNode("<div class=\"col-lg-4\" data-v-69c82dcb>", "</div>", [_vm._ssrNode("<div data-wow-delay=\".5s\" class=\"item md-mb50 wow fadeInUp\" data-v-69c82dcb>", "</div>", [_vm._ssrNode("<div class=\"img\" data-v-69c82dcb><img" + _vm._ssrAttr("src", _vm.url_api + '/Cursos/' + sem.det_img_portada) + " alt class=\"img-style\" data-v-69c82dcb></div> "), _vm._ssrNode("<div class=\"cont\" data-v-69c82dcb>", "</div>", [_vm._ssrNode("<div data-v-69c82dcb>", "</div>", [_vm._ssrNode("<div class=\"info\" data-v-69c82dcb>", "</div>", [_c('NuxtLink', {
      staticClass: "date",
      attrs: {
        "to": {
          path: '/ConvocatoriasDetalle/seminarios',
          query: {
            id: _vm.encryptID(sem.iddetalle_cursos_academicos)
          }
        }
      }
    }, [_c('span', [_vm._v(_vm._s(_vm.convertirFecha(sem.det_fecha_ini)))])]), _vm._ssrNode(" <span data-v-69c82dcb>/</span> "), _c('NuxtLink', {
      staticClass: "tag",
      attrs: {
        "to": {
          path: '/ConvocatoriasDetalle/seminarios',
          query: {
            id: _vm.encryptID(sem.iddetalle_cursos_academicos)
          }
        }
      }
    }, [_c('span', [_vm._v("Seminarios")])])], 2), _vm._ssrNode(" "), _vm._ssrNode("<h5 data-v-69c82dcb>", "</h5>", [_c('NuxtLink', {
      attrs: {
        "to": {
          path: '/ConvocatoriasDetalle/seminarios',
          query: {
            id: _vm.encryptID(sem.iddetalle_cursos_academicos)
          }
        }
      }
    }, [_vm._v("\n                  " + _vm._s(sem.det_titulo) + "\n                ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"btn-more\" data-v-69c82dcb>", "</div>", [_c('NuxtLink', {
      staticClass: "simple-btn",
      attrs: {
        "to": {
          path: '/ConvocatoriasDetalle/seminarios',
          query: {
            id: _vm.encryptID(sem.iddetalle_cursos_academicos)
          }
        }
      }
    }, [_vm._v(" Mas detalles ")])], 1)], 2)])], 2)]);
  }), _vm._ssrNode(" <div class=\"col-lg-2\" data-v-69c82dcb></div>")], 2)], 2) : _vm._e(), _vm._ssrNode(" "), _vm.tipo == 'autoridades' ? _vm._ssrNode("<div class=\"container\" data-v-69c82dcb>", "</div>", [_vm._ssrNode("<div class=\"row justify-content-center\" data-v-69c82dcb><div class=\"col-lg-8 col-md-10\" data-v-69c82dcb><div class=\"sec-head text-center\" data-v-69c82dcb><h6 data-wow-delay=\".5s\" class=\"wow fadeIn\" data-v-69c82dcb>" + _vm._ssrEscape(_vm._s(_vm.pretitle_autoridades)) + "</h6> <h3 class=\"wow color-font\" data-v-69c82dcb>" + _vm._ssrEscape(_vm._s(_vm.title_autoridades)) + "</h3></div></div></div> "), _vm._ssrNode("<div class=\"row\" data-v-69c82dcb>", "</div>", _vm._l(_vm.institucion.autoridad, function (aut) {
    return _vm._ssrNode("<div class=\"col-lg-4\" data-v-69c82dcb>", "</div>", [_vm._ssrNode("<div data-wow-delay=\".3s\" class=\"item md-mb50 wow fadeInUp\" data-v-69c82dcb>", "</div>", [_vm._ssrNode("<div class=\"img\" data-v-69c82dcb><img" + _vm._ssrAttr("src", _vm.url_api + '/InstitucionUpea/Autoridad/' + aut.foto_autoridad) + " alt class=\"img-style\" data-v-69c82dcb></div> "), _vm._ssrNode("<div class=\"cont\" data-v-69c82dcb>", "</div>", [_vm._ssrNode("<div data-v-69c82dcb>", "</div>", [_vm._ssrNode("<div class=\"info\" data-v-69c82dcb>", "</div>", [_c('NuxtLink', {
      staticClass: "date",
      attrs: {
        "exact": "",
        "to": "/"
      }
    }, [_c('span', [_vm._v(_vm._s(_vm.institucion.institucion_iniciales))])]), _vm._ssrNode(" <span data-v-69c82dcb>/</span> "), _c('NuxtLink', {
      staticClass: "tag",
      attrs: {
        "exact": "",
        "to": "/"
      }
    }, [_c('span', [_vm._v(_vm._s(aut.cargo_autoridad))])])], 2), _vm._ssrNode(" "), _vm._ssrNode("<h5 data-v-69c82dcb>", "</h5>", [_c('NuxtLink', {
      attrs: {
        "exact": "",
        "to": "/"
      }
    }, [_vm._v("\n                  " + _vm._s(aut.nombre_autoridad) + "\n                ")])], 1), _vm._ssrNode(" <div class=\"btn-more\" data-v-69c82dcb><a" + _vm._ssrAttr("href", aut.facebook_autoridad) + " class=\"simple-btn\" data-v-69c82dcb> Facebook </a> <a" + _vm._ssrAttr("href", aut.celular_autoridad) + " class=\"simple-btn\" data-v-69c82dcb> WhatsaApp </a> <a" + _vm._ssrAttr("href", aut.twiter_autoridad) + " class=\"simple-btn\" data-v-69c82dcb> Twitter </a></div>")], 2)])], 2)]);
  }), 0)], 2) : _vm._e(), _vm._ssrNode(" "), _vm.tipo == 'default' ? _vm._ssrNode("<div class=\"container\" data-v-69c82dcb>", "</div>", [_vm._ssrNode("<div class=\"row justify-content-center\" data-v-69c82dcb><div class=\"col-lg-8 col-md-10\" data-v-69c82dcb><div class=\"sec-head text-center\" data-v-69c82dcb><h6 data-wow-delay=\".5s\" class=\"wow fadeIn\" data-v-69c82dcb>" + _vm._ssrEscape(_vm._s(_vm.pretitle_autoridades)) + "</h6> <h3 class=\"wow color-font\" data-v-69c82dcb>" + _vm._ssrEscape(_vm._s(_vm.title_autoridades)) + "</h3></div></div></div> "), _vm._ssrNode("<div class=\"row\" data-v-69c82dcb>", "</div>", [_vm._ssrNode("<div class=\"col-lg-4\" data-v-69c82dcb>", "</div>", [_vm._ssrNode("<div data-wow-delay=\".3s\" class=\"item md-mb50 wow fadeInUp\" data-v-69c82dcb>", "</div>", [_vm._ssrNode("<div class=\"img\" data-v-69c82dcb><img src=\"/img/blog/1.jpg\" alt data-v-69c82dcb></div> "), _vm._ssrNode("<div class=\"cont\" data-v-69c82dcb>", "</div>", [_vm._ssrNode("<div data-v-69c82dcb>", "</div>", [_vm._ssrNode("<div class=\"info\" data-v-69c82dcb>", "</div>", [_c('NuxtLink', {
    staticClass: "date",
    attrs: {
      "to": "#"
    }
  }, [_c('span', [_c('i', [_vm._v("06")]), _vm._v(" August ")])]), _vm._ssrNode(" <span data-v-69c82dcb>/</span> "), _c('NuxtLink', {
    staticClass: "tag",
    attrs: {
      "to": "#"
    }
  }, [_c('span', [_vm._v("WordPress")])])], 2), _vm._ssrNode(" "), _vm._ssrNode("<h5 data-v-69c82dcb>", "</h5>", [_c('NuxtLink', {
    attrs: {
      "to": "#"
    }
  }, [_vm._v("\n                  How to use solid color combine with simple furnitures.\n                ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"btn-more\" data-v-69c82dcb>", "</div>", [_c('NuxtLink', {
    staticClass: "simple-btn",
    attrs: {
      "to": "#"
    }
  }, [_vm._v(" Read More ")])], 1)], 2)])], 2)])])], 2) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Blogs1/index.vue?vue&type=template&id=69c82dcb&scoped=true&

// EXTERNAL MODULE: external "crypto-js"
var external_crypto_js_ = __webpack_require__(59);
var external_crypto_js_default = /*#__PURE__*/__webpack_require__.n(external_crypto_js_);

// EXTERNAL MODULE: ./store/store.js
var store = __webpack_require__(61);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blogs1/index.vue?vue&type=script&lang=js&


/* harmony default export */ var Blogs1vue_type_script_lang_js_ = ({
  props: ['tipo'],
  data() {
    return {
      url_api: "https://serviciopagina.upea.bo",
      institucion: Object(store["a" /* useInstitucionStore */])().institucion,
      pretitle_convocatorias: Object(store["a" /* useInstitucionStore */])().pretitle_convocatorias,
      pretitle_cursos: Object(store["a" /* useInstitucionStore */])().pretitle_cursos,
      pretitle_autoridades: Object(store["a" /* useInstitucionStore */])().pretitle_autoridades,
      title_convocatorias: Object(store["a" /* useInstitucionStore */])().title_convocatorias,
      title_cursos: Object(store["a" /* useInstitucionStore */])().title_cursos,
      title_autoridades: Object(store["a" /* useInstitucionStore */])().title_autoridades,
      carrera_convocatorias: Object(store["a" /* useInstitucionStore */])().carrera_convocatorias,
      carrera_comunicados: Object(store["a" /* useInstitucionStore */])().carrera_comunicados,
      carrera_avisos: Object(store["a" /* useInstitucionStore */])().carrera_avisos,
      carrera_cursos: Object(store["a" /* useInstitucionStore */])().carrera_cursos,
      carrera_seminarios: Object(store["a" /* useInstitucionStore */])().carrera_seminarios
    };
  },
  methods: {
    convertirFecha(fecha) {
      const fechaObjeto = new Date(fecha);
      const dia = fechaObjeto.getDate();
      const mes = fechaObjeto.getMonth() + 1;
      const año = fechaObjeto.getFullYear();
      return `${dia}/${mes}/${año}`;
    },
    encryptID(id) {
      const encryptionKey = 'UniversidadPublicaDeElAlto'; // Cambia esto por tu clave de encriptación
      const ciphertext = external_crypto_js_default.a.AES.encrypt(id.toString(), encryptionKey).toString();
      return ciphertext;
    }
  }
});
// CONCATENATED MODULE: ./components/Blogs1/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Blogs1vue_type_script_lang_js_ = (Blogs1vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/Blogs1/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(110)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Blogs1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "69c82dcb",
  "a2f91664"
  
)

/* harmony default export */ var Blogs1 = __webpack_exports__["default"] = (component.exports);

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

/***/ 92:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ })

};;
//# sourceMappingURL=blogs1.js.map