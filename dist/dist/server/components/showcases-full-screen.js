exports.ids = [62];
exports.modules = {

/***/ 128:
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"title\":{\"first\":\"Midnight\",\"second\":\"Snack\"},\"image\":\"/img/portfolio/full/1.jpg\",\"sub\":\"Design\"},{\"id\":2,\"title\":{\"first\":\"Fisherman\",\"second\":\"Portrait\"},\"image\":\"/img/portfolio/full/2.jpg\",\"sub\":\"Design\"},{\"id\":3,\"title\":{\"first\":\"Tribos\",\"second\":\"Urbanas\"},\"image\":\"/img/portfolio/full/3.jpg\",\"sub\":\"Design\"},{\"id\":4,\"title\":{\"first\":\"Monsoon\",\"second\":\"in the city\"},\"image\":\"/img/portfolio/full/3.jpg\",\"sub\":\"Design\"}]");

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Showcases-full-screen/index.vue?vue&type=template&id=487b3454&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('header', {
    ref: _vm.sliderRef,
    staticClass: "slider showcase-full"
  }, [_vm._ssrNode("<div class=\"swiper-container parallax-slider\" data-v-487b3454>", "</div>", [_c('swiper', {
    ref: "mySwiper",
    staticClass: "swiper-wrapper",
    attrs: {
      "options": _vm.swiperOptions
    },
    on: {
      "ready": _vm.handleSwiperReadied
    }
  }, _vm._l(_vm.showcasse1Data, function (slide) {
    return _c('swiper-slide', {
      key: slide.id,
      staticClass: "swiper-slide"
    }, [_c('div', {
      staticClass: "bg-img valign",
      style: `background-image: url(${slide.image})`,
      attrs: {
        "data-overlay-dark": "4"
      }
    }, [_c('div', {
      staticClass: "container"
    }, [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-lg-12"
    }, [_c('div', {
      staticClass: "caption"
    }, [_c('h1', [_c('NuxtLink', {
      attrs: {
        "to": "/project-details2/project-details2-dark"
      }
    }, [_c('div', {
      staticClass: "stroke",
      attrs: {
        "data-swiper-parallax": "-2000"
      }
    }, [_vm._v("\n                        " + _vm._s(slide.title.first) + "\n                      ")]), _vm._v(" "), _c('span', {
      attrs: {
        "data-swiper-parallax": "-5000"
      }
    }, [_vm._v("\n                        " + _vm._s(slide.title.second) + "\n                      ")])]), _vm._v(" "), _c('div', {
      staticClass: "bord"
    })], 1), _vm._v(" "), _c('div', {
      staticClass: "discover"
    }, [_c('NuxtLink', {
      attrs: {
        "to": "/project-details2/project-details2-dark"
      }
    }, [_c('span', [_vm._v("\n                        Explore "), _c('br'), _vm._v("\n                        More\n                      ")])])], 1)])])])])])]);
  }), 1), _vm._ssrNode(" <div class=\"txt-botm\" data-v-487b3454><div class=\"swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer\" data-v-487b3454><div data-v-487b3454><span data-v-487b3454>Next Slide</span></div> <div data-v-487b3454><i class=\"fas fa-chevron-right\" data-v-487b3454></i></div></div> <div class=\"swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer\" data-v-487b3454><div data-v-487b3454><i class=\"fas fa-chevron-left\" data-v-487b3454></i></div> <div data-v-487b3454><span data-v-487b3454>Prev Slide</span></div></div> <div class=\"swiper-pagination dots\" data-v-487b3454></div></div>")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Showcases-full-screen/index.vue?vue&type=template&id=487b3454&scoped=true&

// EXTERNAL MODULE: ./data/showcase1.json
var showcase1 = __webpack_require__(128);

// EXTERNAL MODULE: ./common/removeSlashpagination.js
var removeSlashpagination = __webpack_require__(65);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Showcases-full-screen/index.vue?vue&type=script&lang=js&


/* harmony default export */ var Showcases_full_screenvue_type_script_lang_js_ = ({
  props: ["sliderRef"],
  data() {
    return {
      showcasse1Data: showcase1,
      swiperOptions: {
        speed: 1000,
        slidesPerView: 1,
        mousewheel: true,
        parallax: true,
        navigation: {
          prevEl: ".txt-botm .swiper-button-prev",
          nextEl: ".txt-botm .swiper-button-next"
        }
      }
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
  }
});
// CONCATENATED MODULE: ./components/Showcases-full-screen/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Showcases_full_screenvue_type_script_lang_js_ = (Showcases_full_screenvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/Showcases-full-screen/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Showcases_full_screenvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "487b3454",
  "4c0299ea"
  
)

/* harmony default export */ var Showcases_full_screen = __webpack_exports__["default"] = (component.exports);

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

/***/ })

};;
//# sourceMappingURL=showcases-full-screen.js.map