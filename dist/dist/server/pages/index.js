exports.ids = [116,2,12,16,19,24,31,40,42,70];
exports.modules = {

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Clients1/index.vue?vue&type=template&id=05d47ac3&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "clients section-padding"
  }, [_vm._ssrNode("<div class=\"container\" data-v-05d47ac3><div class=\"row\" data-v-05d47ac3><div class=\"col-lg-4 valign md-mb50\" data-v-05d47ac3><div class=\"sec-head mb-0\" data-v-05d47ac3><h6 data-wow-delay=\".5s\" class=\"wow fadeIn\" data-v-05d47ac3>Upea</h6> <h3 class=\"wow mb-20 color-font\" data-v-05d47ac3>Links Externos</h3> <p data-v-05d47ac3>" + _vm._ssrEscape("\n            Los links que pertenecen a la carrera de " + _vm._s(_vm.carrera_nombre) + "\n          ") + "</p></div></div> <div class=\"col-lg-8\" data-v-05d47ac3><div data-v-05d47ac3><div class=\"row bord\" data-v-05d47ac3>" + _vm._ssrList(_vm.carrera_links, function (link, id_link) {
    return "<div" + _vm._ssrClass(null, `${id_link == 5 ? 'col-md-3 col-6 brands sm-mb30' : id_link == 6 ? 'col-md-3 col-6 brands sm-mb30' : id_link == 7 ? 'col-md-3 col-6 brands' : id_link == 8 ? 'col-md-3 col-6 brands' : ''}`) + " data-v-05d47ac3><div" + _vm._ssrAttr("data-wow-delay", `${id_link == 1 ? '.4' : id_link == 2 ? '.7' : id_link == 3 ? '.5' : id_link == 4 ? '.3' : ''}s`) + " class=\"item wow fadeIn\" data-v-05d47ac3><div class=\"img\" data-v-05d47ac3><a" + _vm._ssrAttr("href", link.ei_link) + " data-splitting target=\"_blank\" class=\"link words chars splitting\" data-v-05d47ac3>" + (_vm.theme === 'light' ? "<img" + _vm._ssrAttr("src", _vm.url_api + '/InstitucionUpea/LinksExternos/' + link.ei_imagen) + " width=\"300px\" alt=\"client image\" data-v-05d47ac3>" : "<img" + _vm._ssrAttr("src", _vm.url_api + '/InstitucionUpea/LinksExternos/' + link.ei_imagen) + " alt=\"client image\" style=\"height: 250px;width:250px;\" data-v-05d47ac3>") + "</a></div></div></div>";
  }) + "</div></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Clients1/index.vue?vue&type=template&id=05d47ac3&scoped=true&

// EXTERNAL MODULE: ./store/store.js
var store = __webpack_require__(61);

// EXTERNAL MODULE: ./data/clients.json
var clients = __webpack_require__(78);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Clients1/index.vue?vue&type=script&lang=js&


/* harmony default export */ var Clients1vue_type_script_lang_js_ = ({
  props: ["theme"],
  data() {
    return {
      url_api: "https://serviciopagina.upea.bo",
      clientsData: clients,
      carrera_nombre: Object(store["a" /* useInstitucionStore */])().institucion.institucion_nombre,
      carrera_links: Object(store["a" /* useInstitucionStore */])().carrera_links_externos
    };
  }
});
// CONCATENATED MODULE: ./components/Clients1/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Clients1vue_type_script_lang_js_ = (Clients1vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/Clients1/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Clients1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "05d47ac3",
  "090ff2b7"
  
)

/* harmony default export */ var Clients1 = __webpack_exports__["default"] = (component.exports);

/***/ }),

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

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_69c82dcb_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_69c82dcb_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_69c82dcb_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_69c82dcb_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_69c82dcb_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


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

/***/ 182:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1a7f549a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(182);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1a7f549a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1a7f549a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1a7f549a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1a7f549a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=1a7f549a&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Navbar', {
    ref: "navbar"
  }), _vm._ssrNode(" "), _c('IntroWithSlider', {
    ref: "fixedSlider"
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"main-content\" data-v-1a7f549a>", "</div>", [_c('AboutUs1'), _vm._ssrNode(" "), _c('CallToAction'), _vm._ssrNode(" "), _c('VideoWithTestimonials'), _vm._ssrNode(" "), _c('Blogs1', {
    attrs: {
      "tipo": "autoridades"
    }
  }), _vm._ssrNode(" " + (_vm.foto != null && Object.keys(_vm.foto).length != 0 ? "<div class=\"intermedio\"" + _vm._ssrStyle(null, `background-image: url(${_vm.url_api + '/InstitucionUpea/Portada/' + _vm.foto.portada_imagen});`, null) + " data-v-1a7f549a></div>" : "<div class=\"intermedio\" data-v-1a7f549a></div>") + " "), _c('Blogs1', {
    attrs: {
      "tipo": "convocatorias"
    }
  }), _vm._ssrNode(" " + (_vm.foto != null && Object.keys(_vm.foto).length != 0 ? "<div class=\"intermedio\"" + _vm._ssrStyle(null, `background-image: url(${_vm.url_api + '/InstitucionUpea/Portada/' + _vm.foto.portada_imagen});`, null) + " data-v-1a7f549a></div>" : "<div class=\"intermedio\" data-v-1a7f549a></div>") + " "), _c('Blogs1', {
    attrs: {
      "tipo": "cursos"
    }
  }), _vm._ssrNode(" "), _c('Clients1', {
    attrs: {
      "theme": "dark"
    }
  }), _vm._ssrNode(" "), _c('Footer')], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=1a7f549a&scoped=true&

// EXTERNAL MODULE: ./store/store.js
var store = __webpack_require__(61);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  layout: "dark",
  async asyncData({
    $axios
  }) {
    try {
      const useInstitucion = Object(store["a" /* useInstitucionStore */])();
      const institucion = await $axios.$get('/api/InstitucionUPEA/' + "7");
      const carrera_links_externos = await $axios.$get('/api/linksIntExtAll/' + "7");
      const ComunicadosFilter = await $axios.$get('/api/convocatoriasAll/' + "1");
      const CursosFilter = await $axios.$get('/api/cursosAll/' + "1");
      const carrera_servicios = await $axios.$get('/api/ServicioAll/' + "1");
      const carrera_ofertasacademicas = await $axios.$get('/api/OfertasAcademicasAll/' + "1");
      const carrera_publicaciones = await $axios.$get('/api/publicacionesAll/' + "7");
      const carrera_gacetas = await $axios.$get('/api/gacetaunivAll/' + "7");
      const carrera_eventos = await $axios.$get('/api/eventoAll/' + "7");
      const carrera_videos = await $axios.$get('/api/VideosAll/' + "7");
      let fotosPagina = institucion.Descripcion.portada.filter(port => port.portada_titulo === "PAGINA");
      let fotosPortada = institucion.Descripcion.portada.filter(port => port.portada_titulo != "PAGINA");
      let carrera_ConvocatoriasAll = ComunicadosFilter.filter(conv => conv.tipo_conv_comun.tipo_conv_comun_estado === "1");
      let carrera_CursosAll = CursosFilter.filter(cur => cur.det_estado === '1');
      let comunicados = carrera_ConvocatoriasAll.filter(conv => conv.tipo_conv_comun.tipo_conv_comun_titulo === "COMUNICADOS");
      let convocatorias = carrera_ConvocatoriasAll.filter(conv => conv.tipo_conv_comun.tipo_conv_comun_titulo === "CONVOCATORIAS");
      let avisos = carrera_ConvocatoriasAll.filter(conv => conv.tipo_conv_comun.tipo_conv_comun_titulo === "AVISOS");
      let cursos = carrera_CursosAll.filter(cur => cur.tipo_curso_otro.tipo_conv_curso_nombre === "CURSOS");
      let seminarios = carrera_CursosAll.filter(cur => cur.tipo_curso_otro.tipo_conv_curso_nombre === "SEMINARIOS");
      useInstitucion.asignarCarreraLinksExternos(carrera_links_externos);
      useInstitucion.asignarInstitucion(institucion.Descripcion);
      useInstitucion.asignarConvocatorias(convocatorias);
      useInstitucion.asignarComunicados(comunicados);
      useInstitucion.asignarAvisos(avisos);
      useInstitucion.asignarCursos(cursos);
      useInstitucion.asignarSeminarios(seminarios);
      useInstitucion.asignarServicios(carrera_servicios);
      useInstitucion.asignarOfertasAcademicas(carrera_ofertasacademicas);
      useInstitucion.asignarPublicaciones(carrera_publicaciones);
      useInstitucion.asignarGacetas(carrera_gacetas);
      useInstitucion.asignarEventos(carrera_eventos);
      useInstitucion.asignarVideos(carrera_videos);
      useInstitucion.asignarFotosPagina(fotosPagina);
      useInstitucion.asignarFotosPortada(fotosPortada);
      return {
        ComunicadosFilter,
        comunicados,
        convocatorias,
        avisos,
        fotosPortada,
        fotosPagina
      };
    } catch (e) {
      console.error("error", e);
    }
  },
  data() {
    return {
      carrera_nombre: Object(store["a" /* useInstitucionStore */])().institucion.institucion_nombre,
      institucion_logo: Object(store["a" /* useInstitucionStore */])().institucion.institucion_logo,
      url_api: "https://serviciopagina.upea.bo",
      carrera_colores: Object(store["a" /* useInstitucionStore */])().institucion.colorinstitucion,
      foto: Object(store["a" /* useInstitucionStore */])().fotosPagina[2]
    };
  },
  head() {
    return {
      title: 'UPEA | ' + this.carrera_nombre,
      link: [{
        rel: 'icon',
        type: "image/x-icon",
        href: this.url_api + '/InstitucionUpea/' + this.institucion_logo
      }]
    };
  },
  methods: {
    setColor() {
      if (Object.keys(this.carrera_colores).length != 0) {
        document.documentElement.style.setProperty('--color-primario', this.carrera_colores[0].color_primario);
        document.documentElement.style.setProperty('--color-secundario', this.carrera_colores[0].color_secundario);
        document.documentElement.style.setProperty('--color-terciario', this.carrera_colores[0].color_terciario);
      }
    },
    createdComponent() {
      this.setColor();
    }
  },
  mounted() {
    //this.createdComponent()
  },
  created() {
    console.log("fotos portada");
    console.log(this.fotosPortada);
    console.log("fotos pagina");
    console.log(this.fotosPagina);
  },
  mounted() {
    if (this.$refs.fixedSlider.$el && this.$refs.MainContent) {
      var slidHeight = this.$refs.fixedSlider.$el.offsetHeight;
      this.$refs.MainContent.style.marginTop = slidHeight + "px";
    }
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
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(189)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1a7f549a",
  "0e3f4759"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navbar: __webpack_require__(64).default,IntroWithSlider: __webpack_require__(83).default,AboutUs1: __webpack_require__(114).default,CallToAction: __webpack_require__(73).default,VideoWithTestimonials: __webpack_require__(87).default,Blogs1: __webpack_require__(115).default,Clients1: __webpack_require__(100).default,Footer: __webpack_require__(62).default})


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

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Call-to-action/index.vue?vue&type=template&id=32671d40&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "call-action section-padding sub-bg bg-img",
    style: `background-image: url(${_vm.img ? _vm.img : '/img/patrn.svg'})`
  }, [_vm._ssrNode("<div class=\"container\" data-v-32671d40>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-32671d40>", "</div>", [_vm._ssrNode("<div class=\"col-md-4 col-lg-6\" data-v-32671d40><div class=\"content sm-mb30\" data-v-32671d40><h6 data-splitting class=\"wow words chars splitting\" data-v-32671d40>" + _vm._ssrEscape(_vm._s(_vm.carrera_iniciales)) + "</h6> <h2 data-splitting class=\"wow words chars splitting\" data-v-32671d40>" + _vm._ssrEscape("\n            " + _vm._s(_vm.carrera_title_organigrama) + " ") + "<br data-v-32671d40> <b class=\"back-color\" data-v-32671d40>" + _vm._ssrEscape(_vm._s(_vm.carrera_nombre)) + "</b>.\n          </h2></div></div> "), _vm._ssrNode("<div class=\"col-md-6 col-lg-3\" data-v-32671d40>", "</div>", [_c('vue-pdf', {
    ref: "pdf",
    staticClass: "pdf-viewer",
    attrs: {
      "src": _vm.url_api + '/InstitucionUpea/' + _vm.carrera_organigrama,
      "page": 1,
      "original-size": true
    }
  })], 1), _vm._ssrNode(" <div class=\"col-md-4 col-lg-3 valign\" data-v-32671d40><a" + _vm._ssrAttr("href", _vm.url_api + '/InstitucionUpea/' + _vm.carrera_organigrama) + " target=\"_blank\" data-wow-delay=\".5s\" class=\"butn bord curve wow fadeInUp\" data-v-32671d40><span data-v-32671d40>Descargar Organigrama</span></a></div>")], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Call-to-action/index.vue?vue&type=template&id=32671d40&scoped=true&

// EXTERNAL MODULE: ./store/store.js
var store = __webpack_require__(61);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Call-to-action/index.vue?vue&type=script&lang=js&

/* harmony default export */ var Call_to_actionvue_type_script_lang_js_ = ({
  props: ["img"],
  async asyncData({
    $axios
  }) {
    try {
      const useInstitucion = Object(store["a" /* useInstitucionStore */])();
      if (Object(store["a" /* useInstitucionStore */])().institucion == null || Object(store["a" /* useInstitucionStore */])().carrera_links_externos == null) {
        const institucion = await $axios.$get('/api/InstitucionUPEA/' + "7");
        useInstitucion.asignarInstitucion(institucion.Descripcion);
      }
    } catch (e) {
      console.error("error", e);
    }
  },
  data() {
    return {
      url_api: "https://serviciopagina.upea.bo",
      carrera_organigrama: Object(store["a" /* useInstitucionStore */])().institucion.institucion_organigrama,
      carrera_title_organigrama: Object(store["a" /* useInstitucionStore */])().title_index_organigrama,
      carrera_nombre: Object(store["a" /* useInstitucionStore */])().institucion.institucion_nombre,
      carrera_iniciales: Object(store["a" /* useInstitucionStore */])().institucion.institucion_iniciales
    };
  }
});
// CONCATENATED MODULE: ./components/Call-to-action/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Call_to_actionvue_type_script_lang_js_ = (Call_to_actionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/Call-to-action/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Call_to_actionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "32671d40",
  "43e76267"
  
)

/* harmony default export */ var Call_to_action = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 78:
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"lightImage\":\"/img/clients/brands/light/01.png\",\"darkImage\":\"/img/clients/brands/dark/01.png\",\"url\":\"www.Vie.com\"},{\"id\":2,\"lightImage\":\"/img/clients/brands/light/02.png\",\"darkImage\":\"/img/clients/brands/dark/02.png\",\"url\":\"www.Vie.com\"},{\"id\":3,\"lightImage\":\"/img/clients/brands/light/03.png\",\"darkImage\":\"/img/clients/brands/dark/03.png\",\"url\":\"www.Vie.com\"},{\"id\":4,\"lightImage\":\"/img/clients/brands/light/04.png\",\"darkImage\":\"/img/clients/brands/dark/04.png\",\"url\":\"www.Vie.com\"},{\"id\":5,\"lightImage\":\"/img/clients/brands/light/05.png\",\"darkImage\":\"/img/clients/brands/dark/05.png\",\"url\":\"www.Vie.com\"},{\"id\":6,\"lightImage\":\"/img/clients/brands/light/06.png\",\"darkImage\":\"/img/clients/brands/dark/06.png\",\"url\":\"www.Vie.com\"},{\"id\":7,\"lightImage\":\"/img/clients/brands/light/07.png\",\"darkImage\":\"/img/clients/brands/dark/07.png\",\"url\":\"www.Vie.com\"},{\"id\":8,\"lightImage\":\"/img/clients/brands/light/08.png\",\"darkImage\":\"/img/clients/brands/dark/08.png\",\"url\":\"www.Vie.com\"}]");

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


/***/ }),

/***/ 91:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 92:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ })

};;
//# sourceMappingURL=index.js.map