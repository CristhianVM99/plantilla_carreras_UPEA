exports.ids = [37];
exports.modules = {

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Loading/index.vue?vue&type=template&id=3eba5061&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "showX"
  }, [_vm._ssrNode("<div class=\"loading\" data-v-3eba5061><span data-v-3eba5061>C</span> <span data-v-3eba5061>a</span> <span data-v-3eba5061>r</span> <span data-v-3eba5061>g</span> <span data-v-3eba5061>a</span> <span data-v-3eba5061>n</span> <span data-v-3eba5061>d</span> <span data-v-3eba5061>o</span></div> <div id=\"preloader\" data-v-3eba5061></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Loading/index.vue?vue&type=template&id=3eba5061&scoped=true&

// CONCATENATED MODULE: ./common/loadingPace.js
const loadingPace = () => {
  Pace.on("start", function () {
    document.querySelector("#preloader").classList.remove("isdone");
    document.querySelector(".loading").classList.remove("isdone");
  });
  Pace.on("done", function () {
    document.querySelector("#preloader").classList.add("isdone");
    document.querySelector(".loading").classList.add("isdone");
  });
  if (document.querySelector("body").classList.contains("pace-done")) {
    document.querySelector("#preloader").classList.add("isdone");
    document.querySelector(".loading").classList.add("isdone");
  }
  document.addEventListener("load", () => {
    document.querySelector("#preloader").classList.add("isdone");
    document.querySelector(".loading").classList.add("isdone");
  });
};
/* harmony default export */ var common_loadingPace = (loadingPace);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Loading/index.vue?vue&type=script&lang=js&

/* harmony default export */ var Loadingvue_type_script_lang_js_ = ({
  mounted() {
    if (window.Pace) {
      common_loadingPace();
    }
  }
});
// CONCATENATED MODULE: ./components/Loading/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Loadingvue_type_script_lang_js_ = (Loadingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/Loading/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Loadingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3eba5061",
  "194d8978"
  
)

/* harmony default export */ var Loading = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=loading.js.map