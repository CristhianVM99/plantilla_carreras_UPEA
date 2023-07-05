exports.ids = [19];
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

/***/ 78:
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"lightImage\":\"/img/clients/brands/light/01.png\",\"darkImage\":\"/img/clients/brands/dark/01.png\",\"url\":\"www.Vie.com\"},{\"id\":2,\"lightImage\":\"/img/clients/brands/light/02.png\",\"darkImage\":\"/img/clients/brands/dark/02.png\",\"url\":\"www.Vie.com\"},{\"id\":3,\"lightImage\":\"/img/clients/brands/light/03.png\",\"darkImage\":\"/img/clients/brands/dark/03.png\",\"url\":\"www.Vie.com\"},{\"id\":4,\"lightImage\":\"/img/clients/brands/light/04.png\",\"darkImage\":\"/img/clients/brands/dark/04.png\",\"url\":\"www.Vie.com\"},{\"id\":5,\"lightImage\":\"/img/clients/brands/light/05.png\",\"darkImage\":\"/img/clients/brands/dark/05.png\",\"url\":\"www.Vie.com\"},{\"id\":6,\"lightImage\":\"/img/clients/brands/light/06.png\",\"darkImage\":\"/img/clients/brands/dark/06.png\",\"url\":\"www.Vie.com\"},{\"id\":7,\"lightImage\":\"/img/clients/brands/light/07.png\",\"darkImage\":\"/img/clients/brands/dark/07.png\",\"url\":\"www.Vie.com\"},{\"id\":8,\"lightImage\":\"/img/clients/brands/light/08.png\",\"darkImage\":\"/img/clients/brands/dark/08.png\",\"url\":\"www.Vie.com\"}]");

/***/ })

};;
//# sourceMappingURL=clients1.js.map