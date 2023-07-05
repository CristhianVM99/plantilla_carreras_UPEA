exports.ids = [119,24,40,42,45,49,50,51,52,53];
exports.modules = {

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Project-details2-header/index.vue?vue&type=template&id=faa41f94&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "page-header proj-det bg-img parallaxie valign",
    style: `background-image: url(${_vm.projectHeaderData.projectHeaderImage})`,
    attrs: {
      "data-overlay-dark": "4"
    }
  }, [_vm._ssrNode("<div class=\"container\" data-v-faa41f94>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-faa41f94><div class=\"col-lg-7 col-md-9\" data-v-faa41f94><div class=\"cont\" data-v-faa41f94><h6 data-v-faa41f94>" + _vm._ssrEscape(_vm._s(_vm.projectHeaderData.title.small)) + "</h6> <h2 data-v-faa41f94>" + _vm._ssrEscape(_vm._s(_vm.projectHeaderData.title.big)) + "</h2></div></div></div> "), _vm._ssrNode("<div class=\"row\" data-v-faa41f94>", "</div>", [_vm._ssrNode("<div class=\"col-lg-3\" data-v-faa41f94>", "</div>", [_vm._ssrNode("<div class=\"item mt-30\" data-v-faa41f94>", "</div>", [_vm._ssrNode("<h6 data-v-faa41f94>Client</h6> "), _vm._ssrNode("<p data-v-faa41f94>", "</p>", [_c('NuxtLink', {
    attrs: {
      "to": _vm.projectHeaderData.clientURLLink
    }
  }, [_vm._v("\n              " + _vm._s(_vm.projectHeaderData.clientURLName) + "\n            ")])], 1)], 2)]), _vm._ssrNode(" <div class=\"col-lg-3\" data-v-faa41f94><div class=\"item mt-30\" data-v-faa41f94><h6 data-v-faa41f94>Date</h6> <p data-v-faa41f94>" + _vm._ssrEscape(_vm._s(_vm.projectHeaderData.date)) + "</p></div></div> "), _vm._ssrNode("<div class=\"col-lg-3\" data-v-faa41f94>", "</div>", [_vm._ssrNode("<div class=\"item mt-30\" data-v-faa41f94>", "</div>", [_vm._ssrNode("<h6 data-v-faa41f94>Categories</h6> "), _vm._ssrNode("<p data-v-faa41f94>", "</p>", _vm._l(_vm.projectHeaderData.categories, function (cat, index) {
    return _c('NuxtLink', {
      key: cat.id,
      attrs: {
        "to": cat.link
      }
    }, [_vm._v("\n              " + _vm._s(cat.name) + "\n              " + _vm._s(_vm.projectHeaderData.categories.length != index + 1 ? " ," : "") + "\n            ")]);
  }), 1)], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-lg-3\" data-v-faa41f94>", "</div>", [_vm._ssrNode("<div class=\"item mt-30\" data-v-faa41f94>", "</div>", [_vm._ssrNode("<h6 data-v-faa41f94>Tags</h6> "), _vm._ssrNode("<p data-v-faa41f94>", "</p>", _vm._l(_vm.projectHeaderData.tags, function (tag, index) {
    return _c('NuxtLink', {
      key: tag.id,
      attrs: {
        "to": "tag.link"
      }
    }, [_vm._v("\n              " + _vm._s(tag.name) + "\n              " + _vm._s(_vm.projectHeaderData.tags.length != index + 1 ? " ," : "") + "\n            ")]);
  }), 1)], 2)])], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Project-details2-header/index.vue?vue&type=template&id=faa41f94&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Project-details2-header/index.vue?vue&type=script&lang=js&
/* harmony default export */ var Project_details2_headervue_type_script_lang_js_ = ({
  props: ["projectHeaderData"]
});
// CONCATENATED MODULE: ./components/Project-details2-header/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Project_details2_headervue_type_script_lang_js_ = (Project_details2_headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/Project-details2-header/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Project_details2_headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "faa41f94",
  "1fb3b19e"
  
)

/* harmony default export */ var Project_details2_header = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Project-introduction/index.vue?vue&type=template&id=aea13d04&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "intro-section section-padding"
  }, [_vm._ssrNode("<div class=\"container\" data-v-aea13d04><div class=\"row\" data-v-aea13d04><div class=\"col-lg-3 col-md-4\" data-v-aea13d04><div class=\"htit\" data-v-aea13d04><h4 data-v-aea13d04><span data-v-aea13d04>01 </span> Introduction</h4></div></div> <div class=\"col-lg-8 offset-lg-1 col-md-8\" data-v-aea13d04><div class=\"text js-scroll__content\" data-v-aea13d04><p class=\"extra-text\" data-v-aea13d04>" + _vm._ssrEscape("\n            " + _vm._s(_vm.projectIntroductionData.content) + "\n          ") + "</p> <ul class=\"smp-list mt-30\" data-v-aea13d04>" + _vm._ssrList(_vm.projectIntroductionData.spmList, function (item) {
    return "<li data-v-aea13d04>" + _vm._ssrEscape("\n              " + _vm._s(item.name) + "\n            ") + "</li>";
  }) + "</ul></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Project-introduction/index.vue?vue&type=template&id=aea13d04&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Project-introduction/index.vue?vue&type=script&lang=js&
/* harmony default export */ var Project_introductionvue_type_script_lang_js_ = ({
  props: ["projectIntroductionData"]
});
// CONCATENATED MODULE: ./components/Project-introduction/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Project_introductionvue_type_script_lang_js_ = (Project_introductionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/Project-introduction/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Project_introductionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "aea13d04",
  "fabcc9c8"
  
)

/* harmony default export */ var Project_introduction = __webpack_exports__["default"] = (component.exports);

/***/ }),

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

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Project-description/index.vue?vue&type=template&id=a930a848&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "intro-section section-padding"
  }, [_vm._ssrNode("<div class=\"container\" data-v-a930a848><div class=\"row\" data-v-a930a848><div class=\"col-lg-3 col-md-4\" data-v-a930a848><div class=\"htit\" data-v-a930a848><h4 data-v-a930a848><span data-v-a930a848>02 </span> Description</h4></div></div> <div class=\"col-lg-8 offset-lg-1 col-md-8\" data-v-a930a848><div class=\"text js-scroll__content\" data-v-a930a848><p class=\"extra-text\" data-v-a930a848>" + _vm._ssrEscape(_vm._s(_vm.projectDescriptionData.content)) + "</p></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Project-description/index.vue?vue&type=template&id=a930a848&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Project-description/index.vue?vue&type=script&lang=js&
/* harmony default export */ var Project_descriptionvue_type_script_lang_js_ = ({
  props: ["projectDescriptionData"]
});
// CONCATENATED MODULE: ./components/Project-description/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Project_descriptionvue_type_script_lang_js_ = (Project_descriptionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/Project-description/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Project_descriptionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a930a848",
  "ab1a7a60"
  
)

/* harmony default export */ var Project_description = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Project-video/index.vue?vue&type=template&id=27d4a85e&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', [_vm._ssrNode("<div class=\"container-fluid\" data-v-27d4a85e>", "</div>", [_vm._ssrNode("<div data-overlay-dark=\"4\" class=\"video-wrapper section-padding bg-img parallaxie valign\"" + _vm._ssrStyle(null, `
          background-image: url(${_vm.projectVideoData.projectHeaderImage})`, null) + " data-v-27d4a85e>", "</div>", [_vm._ssrNode("<div class=\"full-width text-center\" data-v-27d4a85e>", "</div>", [_c('ModalVideo', {
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
  }), _vm._ssrNode(" <a class=\"vid\" data-v-27d4a85e><div class=\"vid-butn\" data-v-27d4a85e><span class=\"icon\" data-v-27d4a85e><i class=\"fas fa-play\" data-v-27d4a85e></i></span></div></a>")], 2)])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Project-video/index.vue?vue&type=template&id=27d4a85e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Project-video/index.vue?vue&type=script&lang=js&
/* harmony default export */ var Project_videovue_type_script_lang_js_ = ({
  props: ["projectVideoData"],
  data() {
    return {
      videoIsOpen: false
    };
  },
  methods: {
    openVideo() {
      this.videoIsOpen = !this.videoIsOpen;
    }
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
// CONCATENATED MODULE: ./components/Project-video/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Project_videovue_type_script_lang_js_ = (Project_videovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/Project-video/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Project_videovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "27d4a85e",
  "21ee8162"
  
)

/* harmony default export */ var Project_video = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ModalVideo: __webpack_require__(69).default})


/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Next-project/index.vue?vue&type=template&id=9c586c9c&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "next-prog section-padding"
  }, [_vm._ssrNode("<div class=\"container\" data-v-9c586c9c>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-9c586c9c>", "</div>", [_vm._ssrNode("<div class=\"col-12\" data-v-9c586c9c>", "</div>", [_vm._ssrNode("<div class=\"box\" data-v-9c586c9c>", "</div>", [_vm._ssrNode("<div data-overlay-dark=\"4\" class=\"bg-img valign\" style=\"background-image: url(/img/portfolio/project2/6.jpg)\" data-v-9c586c9c>", "</div>", [_vm._ssrNode("<div class=\"caption ontop valign\" data-v-9c586c9c>", "</div>", [_vm._ssrNode("<div class=\"o-hidden full-width\" data-v-9c586c9c>", "</div>", [_vm._ssrNode("<h1 data-v-9c586c9c>", "</h1>", [_c('NuxtLink', {
    attrs: {
      "to": "#0"
    }
  }, [_c('div', {
    staticClass: "stroke"
  }, [_vm._v("Natural plus modern.")])])], 1)])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"copy-cap valign\" data-v-9c586c9c>", "</div>", [_vm._ssrNode("<div class=\"cap full-width\" data-v-9c586c9c>", "</div>", [_vm._ssrNode("<h1 data-v-9c586c9c>", "</h1>", [_c('NuxtLink', {
    attrs: {
      "to": "#0"
    }
  }, [_c('span', [_vm._v("Natural plus modern.")])])], 1)])])], 2)])])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Next-project/index.vue?vue&type=template&id=9c586c9c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Next-project/index.vue?vue&type=script&lang=js&
/* harmony default export */ var Next_projectvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/Next-project/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Next_projectvue_type_script_lang_js_ = (Next_projectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/Next-project/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Next_projectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "9c586c9c",
  "46eb58cd"
  
)

/* harmony default export */ var Next_project = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 180:
/***/ (function(module) {

module.exports = JSON.parse("{\"id\":1,\"title\":{\"small\":\"art & illustration\",\"big\":\"Inspiring new space.\"},\"clientURLLink\":\"#\",\"projectHeaderImage\":\"/img/portfolio/project2/bg.jpg\",\"videoLink\":\"https://vimeo.com/127203262\",\"clientURLName\":\"Envato.com\",\"date\":\"6 August 2022\",\"categories\":[{\"id\":1,\"name\":\"Web Design\",\"link\":\"#\"},{\"id\":2,\"name\":\"WordPress\",\"link\":\"#\"}],\"tags\":[{\"id\":1,\"name\":\"Minimal\",\"link\":\"#\"},{\"id\":2,\"name\":\"Modern\",\"link\":\"#\"},{\"id\":3,\"name\":\"Design\",\"link\":\"#\"}],\"intro\":{\"content\":\"We are a Creative Agency & Startup Studio that provides Digital Products and Services turns to focus on client success. We specialize in user interface design, including front-end development which we consider to be an integral part.\",\"spmList\":[{\"id\":1,\"name\":\"Aenean sollicitudin\"},{\"id\":2,\"name\":\"lorem quis bibendum auctor\"},{\"id\":31,\"name\":\"nisi elit conseq uat ipsum\"},{\"id\":4,\"name\":\"nec sagittis sem nibh id elit\"}]},\"gallery\":[\"/img/portfolio/project2/1.jpg\",\"/img/portfolio/project2/2.jpg\",\"/img/portfolio/project2/3.jpg\",\"/img/portfolio/project2/5.jpg\",\"/img/portfolio/project2/7.jpg\"],\"description\":{\"content\":\"We are a Creative Agency & Startup Studio that provides Digital Products and Services turns to focus on client success. We specialize in user interface design, including front-end development which we consider to be an integral part.\"}}");

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/project-details2/project-details2-light.vue?vue&type=template&id=65ac5486&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Navbar', {
    ref: "navbar",
    attrs: {
      "lr": "logoRef"
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"wrapper\" data-v-65ac5486>", "</div>", [_c('ProjectDetails2Header', {
    attrs: {
      "projectHeaderData": _vm.ProjectDate
    }
  }), _vm._ssrNode(" "), _c('ProjectIntroduction', {
    attrs: {
      "projectIntroductionData": _vm.ProjectDate.intro
    }
  }), _vm._ssrNode(" "), _c('ProjectGallery', {
    attrs: {
      "projectGalleryData": _vm.ProjectDate.gallery
    }
  }), _vm._ssrNode(" "), _c('ProjectDescription', {
    attrs: {
      "projectDescriptionData": _vm.ProjectDate.description
    }
  }), _vm._ssrNode(" "), _c('ProjectVideo', {
    attrs: {
      "projectVideoData": _vm.ProjectDate
    }
  }), _vm._ssrNode(" "), _c('NextProject'), _vm._ssrNode(" "), _c('Footer')], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/project-details2/project-details2-light.vue?vue&type=template&id=65ac5486&scoped=true&

// EXTERNAL MODULE: ./data/project-details2.json
var project_details2 = __webpack_require__(180);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/project-details2/project-details2-light.vue?vue&type=script&lang=js&

/* harmony default export */ var project_details2_lightvue_type_script_lang_js_ = ({
  layout: "light",
  head() {
    return {
      titleTemplate: '%s - Project Details Light'
    };
  },
  data() {
    return {
      ProjectDate: project_details2
    };
  },
  mounted() {
    var navbar = this.$refs.navbar.$el,
      logo = this.$refs.navbar.$refs.lr;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
        logo.setAttribute("src", "/img/logo-dark.png");
      } else {
        navbar.classList.remove("nav-scroll");
        logo.setAttribute("src", "/img/logo-light.png");
      }
    });
  }
});
// CONCATENATED MODULE: ./pages/project-details2/project-details2-light.vue?vue&type=script&lang=js&
 /* harmony default export */ var project_details2_project_details2_lightvue_type_script_lang_js_ = (project_details2_lightvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./pages/project-details2/project-details2-light.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  project_details2_project_details2_lightvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "65ac5486",
  "25c6ff82"
  
)

/* harmony default export */ var project_details2_light = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navbar: __webpack_require__(64).default,ProjectDetails2Header: __webpack_require__(170).default,ProjectIntroduction: __webpack_require__(171).default,ProjectGallery: __webpack_require__(172).default,ProjectDescription: __webpack_require__(173).default,ProjectVideo: __webpack_require__(174).default,NextProject: __webpack_require__(175).default,Footer: __webpack_require__(62).default})


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

/***/ })

};;
//# sourceMappingURL=project-details2-light.js.map