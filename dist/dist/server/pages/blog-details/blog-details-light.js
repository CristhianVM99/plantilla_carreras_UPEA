exports.ids = [88,8,24,42,46];
exports.modules = {

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blog-details/index.vue?vue&type=template&id=be2728bc&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "blog-pg single section-padding pt-0"
  }, [_vm._ssrNode("<div class=\"container\" data-v-be2728bc>", "</div>", [_vm._ssrNode("<div class=\"row justify-content-center\" data-v-be2728bc>", "</div>", [_vm._ssrNode("<div class=\"col-lg-11\" data-v-be2728bc>", "</div>", [_vm._ssrNode((_vm.tipo == 'convocatorias' || _vm.tipo == 'comunicados' || _vm.tipo == 'avisos' ? "<div class=\"post\" data-v-be2728bc><div class=\"img\" data-v-be2728bc><img" + _vm._ssrAttr("src", _vm.url_api + '/Convocatorias/' + _vm.colection[0].con_foto_portada) + " alt data-v-be2728bc></div> <div class=\"content pt-60\" data-v-be2728bc><div class=\"row justify-content-center\" data-v-be2728bc><div class=\"col-lg-10\" data-v-be2728bc><div class=\"cont\" data-v-be2728bc><h2 class=\"extra-title\" data-v-be2728bc>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.colection[0].con_titulo) + "\n                  ") + "</h2> <div class=\"spacial\" data-v-be2728bc>" + _vm._s(_vm.colection[0].con_descripcion) + "</div> <p data-v-be2728bc>" + _vm._ssrEscape("\n                    Fecha de Inicio : " + _vm._s(_vm.convertirFecha(_vm.colection[0].con_fecha_inicio))) + "<br data-v-be2728bc>" + _vm._ssrEscape("\n                    Fecha de Final : " + _vm._s(_vm.convertirFecha(_vm.colection[0].con_fecha_fin)) + "\n                  ") + "</p></div></div></div></div></div>" : "<!---->") + " " + (_vm.tipo == 'cursos' || _vm.tipo == 'seminarios' ? "<div class=\"post\" data-v-be2728bc><div class=\"img\" data-v-be2728bc><img" + _vm._ssrAttr("src", _vm.url_api + '/Cursos/' + _vm.colection[0].det_img_portada) + " alt data-v-be2728bc></div> <div class=\"content pt-60\" data-v-be2728bc><div class=\"row justify-content-center\" data-v-be2728bc><div class=\"col-lg-10\" data-v-be2728bc><div class=\"cont\" data-v-be2728bc><h2 class=\"extra-title\" data-v-be2728bc>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.colection[0].det_titulo) + "\n                  ") + "</h2> <br data-v-be2728bc> <h6 data-v-be2728bc>Descripcion</h6> <div class=\"spacial\" data-v-be2728bc>" + _vm._s(_vm.colection[0].det_descripcion) + "</div> <h6 data-v-be2728bc>Mas Informacion</h6> <p data-v-be2728bc>" + _vm._ssrEscape("\n                    Fecha de Inicio : " + _vm._s(_vm.convertirFecha(_vm.colection[0].det_fecha_ini))) + "<br data-v-be2728bc>" + _vm._ssrEscape("\n                    Fecha de Final : " + _vm._s(_vm.convertirFecha(_vm.colection[0].det_fecha_fin))) + "<br data-v-be2728bc>" + _vm._ssrEscape("\n                    Grupo de Whatsap : " + _vm._s(_vm.colection[0].det_grupo_whatssap)) + "<br data-v-be2728bc>" + _vm._ssrEscape("\n                    Modalidad : " + _vm._s(_vm.colection[0].det_modalidad)) + "<br data-v-be2728bc>" + _vm._ssrEscape("\n                    Lugar del Curso : " + _vm._s(_vm.colection[0].det_lugar_curso)) + "<br data-v-be2728bc>" + _vm._ssrEscape("\n                    Carga Horaria : " + _vm._s(_vm.colection[0].det_carga_horaria)) + "<br data-v-be2728bc>" + _vm._ssrEscape("                  \n                    Cupos del Curso : " + _vm._s(_vm.colection[0].det_cupo_max) + "\n                  ") + "</p> <h6 data-v-be2728bc>Costos</h6> <p data-v-be2728bc>" + _vm._ssrEscape("\n                    Costo Extranjero : " + _vm._s(_vm.colection[0].det_costo_ext)) + "<br data-v-be2728bc>" + _vm._ssrEscape("\n                    Costo Profesores : " + _vm._s(_vm.colection[0].det_costo_profe)) + "<br data-v-be2728bc>" + _vm._ssrEscape("\n                    Costo Estudiante : " + _vm._s(_vm.colection[0].det_costo)) + "<br data-v-be2728bc></p></div></div></div></div></div>" : "<!---->") + " " + (_vm.tipo == 'servicios' ? "<div class=\"post\" data-v-be2728bc><div class=\"img\" data-v-be2728bc><img" + _vm._ssrAttr("src", _vm.url_api + '/Carrera/Servicios/' + _vm.colection[0].serv_imagen) + " alt data-v-be2728bc></div> <div class=\"content pt-60\" data-v-be2728bc><div class=\"row justify-content-center\" data-v-be2728bc><div class=\"col-lg-10\" data-v-be2728bc><div class=\"cont\" data-v-be2728bc><h2 class=\"extra-title\" data-v-be2728bc>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.colection[0].serv_nombre) + "\n                  ") + "</h2> <br data-v-be2728bc> <h6 data-v-be2728bc>Descripcion</h6> <div class=\"spacial\" data-v-be2728bc>" + _vm._s(_vm.colection[0].serv_descripcion) + "</div> <h6 data-v-be2728bc>Mas Informacion</h6> <p data-v-be2728bc>" + _vm._ssrEscape("\n                    Fecha de Inicio : " + _vm._s(_vm.convertirFecha(_vm.colection[0].serv_registro))) + "<br data-v-be2728bc>" + _vm._ssrEscape("\n                    Fecha de Final : " + _vm._s(_vm.convertirFecha(_vm.colection[0].serv_update))) + "<br data-v-be2728bc>" + _vm._ssrEscape("\n                    Numero de Celular : " + _vm._s(_vm.colection[0].serv_nro_celular)) + "<br data-v-be2728bc></p></div></div></div></div></div>" : "<!---->") + " " + (_vm.tipo == 'ofertasacademicas' ? "<div class=\"post\" data-v-be2728bc><div class=\"img\" data-v-be2728bc><img" + _vm._ssrAttr("src", _vm.url_api + '/Carrera/OfertasAcademicas/' + _vm.colection[0].ofertas_imagen) + " alt data-v-be2728bc></div> <div class=\"content pt-60\" data-v-be2728bc><div class=\"row justify-content-center\" data-v-be2728bc><div class=\"col-lg-10\" data-v-be2728bc><div class=\"cont\" data-v-be2728bc><h2 class=\"extra-title\" data-v-be2728bc>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.colection[0].ofertas_titulo) + "\n                  ") + "</h2> <br data-v-be2728bc> <h6 data-v-be2728bc>Descripcion</h6> <div class=\"spacial\" data-v-be2728bc>" + _vm._s(_vm.colection[0].ofertas_descripcion) + "</div> <h6 data-v-be2728bc>Mas Informacion</h6> <p data-v-be2728bc>" + _vm._ssrEscape("\n                    Fecha de Inicio : " + _vm._s(_vm.convertirFecha(_vm.colection[0].ofertas_inscripciones_ini))) + "<br data-v-be2728bc>" + _vm._ssrEscape("\n                    Fecha de Final : " + _vm._s(_vm.convertirFecha(_vm.colection[0].ofertas_inscripciones_fin))) + "<br data-v-be2728bc>" + _vm._ssrEscape("\n                    Fecha de Examen : " + _vm._s(_vm.convertirFecha(_vm.colection[0].ofertas_fecha_examen))) + "<br data-v-be2728bc>" + _vm._ssrEscape("\n                    Referencia : " + _vm._s(_vm.colection[0].ofertas_referencia)) + "<br data-v-be2728bc></p></div></div></div></div></div>" : "<!---->") + " " + (_vm.tipo == 'publicaciones' ? "<div class=\"post\" data-v-be2728bc><div class=\"img\" data-v-be2728bc><img" + _vm._ssrAttr("src", _vm.url_api + '/Publicaciones/' + _vm.colection[0].publicaciones_imagen) + " alt data-v-be2728bc></div> <div class=\"content pt-60\" data-v-be2728bc><div class=\"row justify-content-center\" data-v-be2728bc><div class=\"col-lg-10\" data-v-be2728bc><div class=\"cont\" data-v-be2728bc><h2 class=\"extra-title\" data-v-be2728bc>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.colection[0].publicaciones_titulo) + "\n                  ") + "</h2> <br data-v-be2728bc> <h6 data-v-be2728bc>Descripcion</h6> <div class=\"spacial\" data-v-be2728bc>" + _vm._s(_vm.colection[0].publicaciones_descripcion) + "</div> <h6 data-v-be2728bc>Mas Informacion</h6> <p data-v-be2728bc>" + _vm._ssrEscape("\n                    Fecha de publicacion : " + _vm._s(_vm.convertirFecha(_vm.colection[0].publicaciones_fecha))) + "<br data-v-be2728bc>" + _vm._ssrEscape("\n                    Autor : " + _vm._s(_vm.colection[0].publicaciones_autor)) + "<br data-v-be2728bc></p></div></div></div></div></div>" : "<!---->") + " "), _vm.tipo == 'gacetas' ? _vm._ssrNode("<div class=\"post\" data-v-be2728bc>", "</div>", [_vm._ssrNode("<div class=\"img\" data-v-be2728bc>", "</div>", [_c('vue-pdf', {
    ref: "pdf",
    staticClass: "pdf-viewer",
    attrs: {
      "src": _vm.url_api + '/Gaceta/' + _vm.colection[0].gaceta_documento,
      "page": 1,
      "original-size": true
    }
  })], 1), _vm._ssrNode(" <div class=\"content pt-60\" data-v-be2728bc><div class=\"row justify-content-center\" data-v-be2728bc><div class=\"col-lg-10\" data-v-be2728bc><div class=\"cont\" data-v-be2728bc><h2 class=\"extra-title\" data-v-be2728bc>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.colection[0].gaceta_titulo) + "\n                  ") + "</h2> <br data-v-be2728bc> <h6 data-v-be2728bc>Mas Informacion</h6> <p data-v-be2728bc>" + _vm._ssrEscape("\n                    Fecha de Publicacion : " + _vm._s(_vm.convertirFecha(_vm.colection[0].gaceta_fecha))) + "<br data-v-be2728bc></p> <a target=\"_blank\"" + _vm._ssrAttr("href", _vm.url_api + '/Gaceta/' + _vm.colection[0].gaceta_documento) + " class=\"butn bord curve mt-30\" data-v-be2728bc>\n                    Descargar PDF\n                  </a></div></div></div></div>")], 2) : _vm._e(), _vm._ssrNode(" " + (_vm.tipo == 'eventos' ? "<div class=\"post\" data-v-be2728bc><div class=\"img\" data-v-be2728bc><img" + _vm._ssrAttr("src", _vm.url_api + '/Eventos/' + _vm.colection[0].evento_imagen) + " alt data-v-be2728bc></div> <div class=\"content pt-60\" data-v-be2728bc><div class=\"row justify-content-center\" data-v-be2728bc><div class=\"col-lg-10\" data-v-be2728bc><div class=\"cont\" data-v-be2728bc><h2 class=\"extra-title\" data-v-be2728bc>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.colection[0].evento_titulo) + "\n                  ") + "</h2> <br data-v-be2728bc> <h6 data-v-be2728bc>Descripcion</h6> <div class=\"spacial\" data-v-be2728bc>" + _vm._s(_vm.colection[0].evento_descripcion) + "</div> <h6 data-v-be2728bc>Mas Informacion</h6> <p data-v-be2728bc>" + _vm._ssrEscape("\n                    Fecha de Actividad : " + _vm._s(_vm.colection[0].evento_fecha)) + "<br data-v-be2728bc>" + _vm._ssrEscape("\n                    Hora : " + _vm._s(_vm.colection[0].evento_hora)) + "<br data-v-be2728bc>" + _vm._ssrEscape("\n                    Lugar : " + _vm._s(_vm.colection[0].evento_lugar)) + "<br data-v-be2728bc></p></div></div></div></div></div>" : "<!---->") + " " + (_vm.tipo == 'videos' ? "<div class=\"post\" data-v-be2728bc><div class=\"img\" data-v-be2728bc><iframe" + _vm._ssrAttr("src", _vm.colection[0].video_enlace) + " frameborder=\"0\" style=\"border-radius: 5px;width: 100%;height: 460px;\" data-v-be2728bc></iframe></div> <div class=\"content pt-60\" data-v-be2728bc><div class=\"row justify-content-center\" data-v-be2728bc><div class=\"col-lg-10\" data-v-be2728bc><div class=\"cont\" data-v-be2728bc><h2 class=\"extra-title\" data-v-be2728bc>" + _vm._ssrEscape("\n                    " + _vm._s(_vm.colection[0].video_titulo) + "\n                  ") + "</h2> <br data-v-be2728bc> <h6 data-v-be2728bc>Descripcion</h6> <div class=\"spacial\" data-v-be2728bc>" + _vm._s(_vm.colection[0].video_breve_descripcion) + "</div></div></div></div></div></div>" : "<!---->"))], 2)])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Blog-details/index.vue?vue&type=template&id=be2728bc&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blog-details/index.vue?vue&type=script&lang=js&
/* harmony default export */ var Blog_detailsvue_type_script_lang_js_ = ({
  props: ["theme", 'tipo', 'colection'],
  data() {
    return {
      url_api: "https://serviciopagina.upea.bo"
    };
  },
  methods: {
    convertirFecha(fecha) {
      const fechaObjeto = new Date(fecha);
      const dia = fechaObjeto.getDate();
      const mes = fechaObjeto.getMonth() + 1;
      const año = fechaObjeto.getFullYear();
      return `${dia}/${mes}/${año}`;
    }
  },
  created() {
    console.log("registro para" + this.tipo);
    console.log(this.colection);
  }
});
// CONCATENATED MODULE: ./components/Blog-details/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Blog_detailsvue_type_script_lang_js_ = (Blog_detailsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/Blog-details/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Blog_detailsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "be2728bc",
  "8dfb50b6"
  
)

/* harmony default export */ var Blog_details = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog-details/blog-details-light.vue?vue&type=template&id=5f304e90&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"circle-bg\" data-v-5f304e90><div class=\"circle-color fixed\" data-v-5f304e90><div class=\"gradient-circle\" data-v-5f304e90></div> <div class=\"gradient-circle two\" data-v-5f304e90></div></div></div> "), _c('Navbar', {
    ref: "navbar",
    attrs: {
      "theme": "light"
    }
  }), _vm._ssrNode(" "), _c('PageHeader', {
    attrs: {
      "title": "Blog Details.",
      "paragraph": "All the most current news and events of our creative team."
    }
  }), _vm._ssrNode(" "), _c('BlogDetails', {
    attrs: {
      "theme": "light"
    }
  }), _vm._ssrNode(" "), _c('Footer')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/blog-details/blog-details-light.vue?vue&type=template&id=5f304e90&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog-details/blog-details-light.vue?vue&type=script&lang=js&
/* harmony default export */ var blog_details_lightvue_type_script_lang_js_ = ({
  layout: 'light',
  head() {
    return {
      titleTemplate: '%s - Blog Details Light'
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
// CONCATENATED MODULE: ./pages/blog-details/blog-details-light.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_details_blog_details_lightvue_type_script_lang_js_ = (blog_details_lightvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./pages/blog-details/blog-details-light.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_details_blog_details_lightvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5f304e90",
  "7789ff9f"
  
)

/* harmony default export */ var blog_details_light = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navbar: __webpack_require__(64).default,PageHeader: __webpack_require__(74).default,BlogDetails: __webpack_require__(112).default,Footer: __webpack_require__(62).default})


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
//# sourceMappingURL=blog-details-light.js.map