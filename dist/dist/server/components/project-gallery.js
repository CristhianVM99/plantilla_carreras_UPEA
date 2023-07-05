exports.ids = [51];
exports.modules = {

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Project-gallery/index.vue?vue&type=template&id=5a5df6f0&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "projdtal"
  }, [_vm._ssrNode("<div class=\"popup-img\" data-v-5a5df6f0>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-5a5df6f0>", "</div>", _vm._l(_vm.projectGalleryData, function (imageLink, index) {
    return _c('NuxtLink', {
      key: index,
      class: `col-md-${index + 1 === _vm.projectGalleryData.length ? '12' : '3'} popimg`,
      attrs: {
        "to": "#0"
      }
    }, [_c('img', {
      attrs: {
        "alt": "",
        "src": imageLink
      }
    })]);
  }), 1)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Project-gallery/index.vue?vue&type=template&id=5a5df6f0&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Project-gallery/index.vue?vue&type=script&lang=js&
/* harmony default export */ var Project_galleryvue_type_script_lang_js_ = ({
  props: ["projectGalleryData"]
});
// CONCATENATED MODULE: ./components/Project-gallery/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Project_galleryvue_type_script_lang_js_ = (Project_galleryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/Project-gallery/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Project_galleryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5a5df6f0",
  "2ff24726"
  
)

/* harmony default export */ var Project_gallery = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=project-gallery.js.map