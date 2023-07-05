import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1ec252d2 = () => interopDefault(import('../pages/categorias/index.vue' /* webpackChunkName: "pages/categorias/index" */))
const _48eae30f = () => interopDefault(import('../pages/index2.vue' /* webpackChunkName: "pages/index2" */))
const _433233b2 = () => interopDefault(import('../pages/about/about-dark.vue' /* webpackChunkName: "pages/about/about-dark" */))
const _ef4d3e96 = () => interopDefault(import('../pages/about/about-light.vue' /* webpackChunkName: "pages/about/about-light" */))
const _78f185e3 = () => interopDefault(import('../pages/blog-details/blog-details-dark.vue' /* webpackChunkName: "pages/blog-details/blog-details-dark" */))
const _3f22b879 = () => interopDefault(import('../pages/blog-details/blog-details-light.vue' /* webpackChunkName: "pages/blog-details/blog-details-light" */))
const _0134a3c2 = () => interopDefault(import('../pages/blog-grid/blog-grid-dark.vue' /* webpackChunkName: "pages/blog-grid/blog-grid-dark" */))
const _f198d086 = () => interopDefault(import('../pages/blog-grid/blog-grid-light.vue' /* webpackChunkName: "pages/blog-grid/blog-grid-light" */))
const _2897776f = () => interopDefault(import('../pages/blog-list/blog-list-dark.vue' /* webpackChunkName: "pages/blog-list/blog-list-dark" */))
const _f78a0f26 = () => interopDefault(import('../pages/blog-list/blog-list-light.vue' /* webpackChunkName: "pages/blog-list/blog-list-light" */))
const _38d53903 = () => interopDefault(import('../pages/blog/blog-dark.vue' /* webpackChunkName: "pages/blog/blog-dark" */))
const _7bb56959 = () => interopDefault(import('../pages/blog/blog-light.vue' /* webpackChunkName: "pages/blog/blog-light" */))
const _0f21b27e = () => interopDefault(import('../pages/contact/contact-dark.vue' /* webpackChunkName: "pages/contact/contact-dark" */))
const _a14d994a = () => interopDefault(import('../pages/contact/contact-light.vue' /* webpackChunkName: "pages/contact/contact-light" */))
const _0f062bda = () => interopDefault(import('../pages/homepage/home1-dark.vue' /* webpackChunkName: "pages/homepage/home1-dark" */))
const _9df84b6e = () => interopDefault(import('../pages/homepage/home1-light.vue' /* webpackChunkName: "pages/homepage/home1-light" */))
const _2673499c = () => interopDefault(import('../pages/homepage/home2-dark.vue' /* webpackChunkName: "pages/homepage/home2-dark" */))
const _45e88d0a = () => interopDefault(import('../pages/homepage/home2-light.vue' /* webpackChunkName: "pages/homepage/home2-light" */))
const _3de0675e = () => interopDefault(import('../pages/homepage/home3-dark.vue' /* webpackChunkName: "pages/homepage/home3-dark" */))
const _4a65806a = () => interopDefault(import('../pages/homepage/home3-light.vue' /* webpackChunkName: "pages/homepage/home3-light" */))
const _554d8520 = () => interopDefault(import('../pages/homepage/home4-dark.vue' /* webpackChunkName: "pages/homepage/home4-dark" */))
const _6fb1f28c = () => interopDefault(import('../pages/homepage/home4-light.vue' /* webpackChunkName: "pages/homepage/home4-light" */))
const _6cbaa2e2 = () => interopDefault(import('../pages/homepage/home5-dark.vue' /* webpackChunkName: "pages/homepage/home5-dark" */))
const _0496a54d = () => interopDefault(import('../pages/homepage/home5-light.vue' /* webpackChunkName: "pages/homepage/home5-light" */))
const _8427c0a4 = () => interopDefault(import('../pages/homepage/home6-dark.vue' /* webpackChunkName: "pages/homepage/home6-dark" */))
const _cd094fe4 = () => interopDefault(import('../pages/homepage/home6-light.vue' /* webpackChunkName: "pages/homepage/home6-light" */))
const _9b94de66 = () => interopDefault(import('../pages/homepage/home7-dark.vue' /* webpackChunkName: "pages/homepage/home7-dark" */))
const _2e600acf = () => interopDefault(import('../pages/homepage/home7-light.vue' /* webpackChunkName: "pages/homepage/home7-light" */))
const _b301fc28 = () => interopDefault(import('../pages/homepage/home8-dark.vue' /* webpackChunkName: "pages/homepage/home8-dark" */))
const _797684e0 = () => interopDefault(import('../pages/homepage/home8-light.vue' /* webpackChunkName: "pages/homepage/home8-light" */))
const _03c52b43 = () => interopDefault(import('../pages/project-details2/project-details2-dark.vue' /* webpackChunkName: "pages/project-details2/project-details2-dark" */))
const _0ec3bf19 = () => interopDefault(import('../pages/project-details2/project-details2-light.vue' /* webpackChunkName: "pages/project-details2/project-details2-light" */))
const _7741bfba = () => interopDefault(import('../pages/showcase/showcase-dark.vue' /* webpackChunkName: "pages/showcase/showcase-dark" */))
const _61686639 = () => interopDefault(import('../pages/showcase/showcase-light.vue' /* webpackChunkName: "pages/showcase/showcase-light" */))
const _50f49cf7 = () => interopDefault(import('../pages/showcase2/showcase2-dark.vue' /* webpackChunkName: "pages/showcase2/showcase2-dark" */))
const _678283e5 = () => interopDefault(import('../pages/showcase2/showcase2-light.vue' /* webpackChunkName: "pages/showcase2/showcase2-light" */))
const _2cdfe475 = () => interopDefault(import('../pages/showcase3/showcase3-dark.vue' /* webpackChunkName: "pages/showcase3/showcase3-dark" */))
const _09002c27 = () => interopDefault(import('../pages/showcase3/showcase3-light.vue' /* webpackChunkName: "pages/showcase3/showcase3-light" */))
const _550a913d = () => interopDefault(import('../pages/works/works-dark.vue' /* webpackChunkName: "pages/works/works-dark" */))
const _33a9cf42 = () => interopDefault(import('../pages/works/works-light.vue' /* webpackChunkName: "pages/works/works-light" */))
const _75932efa = () => interopDefault(import('../pages/works2/works2-dark.vue' /* webpackChunkName: "pages/works2/works2-dark" */))
const _7b7a29d9 = () => interopDefault(import('../pages/works2/works2-light.vue' /* webpackChunkName: "pages/works2/works2-light" */))
const _0a29b7a3 = () => interopDefault(import('../pages/works3/works3-dark.vue' /* webpackChunkName: "pages/works3/works3-dark" */))
const _561e828e = () => interopDefault(import('../pages/works3/works3-light.vue' /* webpackChunkName: "pages/works3/works3-light" */))
const _7e385cb3 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _0f213f75 = () => interopDefault(import('../pages/convocatorias/_categoria.vue' /* webpackChunkName: "pages/convocatorias/_categoria" */))
const _08cb70e4 = () => interopDefault(import('../pages/convocatoriasDetalle/_detalle.vue' /* webpackChunkName: "pages/convocatoriasDetalle/_detalle" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/categorias",
    component: _1ec252d2,
    name: "categorias"
  }, {
    path: "/index2",
    component: _48eae30f,
    name: "index2"
  }, {
    path: "/about/about-dark",
    component: _433233b2,
    name: "about-about-dark"
  }, {
    path: "/about/about-light",
    component: _ef4d3e96,
    name: "about-about-light"
  }, {
    path: "/blog-details/blog-details-dark",
    component: _78f185e3,
    name: "blog-details-blog-details-dark"
  }, {
    path: "/blog-details/blog-details-light",
    component: _3f22b879,
    name: "blog-details-blog-details-light"
  }, {
    path: "/blog-grid/blog-grid-dark",
    component: _0134a3c2,
    name: "blog-grid-blog-grid-dark"
  }, {
    path: "/blog-grid/blog-grid-light",
    component: _f198d086,
    name: "blog-grid-blog-grid-light"
  }, {
    path: "/blog-list/blog-list-dark",
    component: _2897776f,
    name: "blog-list-blog-list-dark"
  }, {
    path: "/blog-list/blog-list-light",
    component: _f78a0f26,
    name: "blog-list-blog-list-light"
  }, {
    path: "/blog/blog-dark",
    component: _38d53903,
    name: "blog-blog-dark"
  }, {
    path: "/blog/blog-light",
    component: _7bb56959,
    name: "blog-blog-light"
  }, {
    path: "/contact/contact-dark",
    component: _0f21b27e,
    name: "contact-contact-dark"
  }, {
    path: "/contact/contact-light",
    component: _a14d994a,
    name: "contact-contact-light"
  }, {
    path: "/homepage/home1-dark",
    component: _0f062bda,
    name: "homepage-home1-dark"
  }, {
    path: "/homepage/home1-light",
    component: _9df84b6e,
    name: "homepage-home1-light"
  }, {
    path: "/homepage/home2-dark",
    component: _2673499c,
    name: "homepage-home2-dark"
  }, {
    path: "/homepage/home2-light",
    component: _45e88d0a,
    name: "homepage-home2-light"
  }, {
    path: "/homepage/home3-dark",
    component: _3de0675e,
    name: "homepage-home3-dark"
  }, {
    path: "/homepage/home3-light",
    component: _4a65806a,
    name: "homepage-home3-light"
  }, {
    path: "/homepage/home4-dark",
    component: _554d8520,
    name: "homepage-home4-dark"
  }, {
    path: "/homepage/home4-light",
    component: _6fb1f28c,
    name: "homepage-home4-light"
  }, {
    path: "/homepage/home5-dark",
    component: _6cbaa2e2,
    name: "homepage-home5-dark"
  }, {
    path: "/homepage/home5-light",
    component: _0496a54d,
    name: "homepage-home5-light"
  }, {
    path: "/homepage/home6-dark",
    component: _8427c0a4,
    name: "homepage-home6-dark"
  }, {
    path: "/homepage/home6-light",
    component: _cd094fe4,
    name: "homepage-home6-light"
  }, {
    path: "/homepage/home7-dark",
    component: _9b94de66,
    name: "homepage-home7-dark"
  }, {
    path: "/homepage/home7-light",
    component: _2e600acf,
    name: "homepage-home7-light"
  }, {
    path: "/homepage/home8-dark",
    component: _b301fc28,
    name: "homepage-home8-dark"
  }, {
    path: "/homepage/home8-light",
    component: _797684e0,
    name: "homepage-home8-light"
  }, {
    path: "/project-details2/project-details2-dark",
    component: _03c52b43,
    name: "project-details2-project-details2-dark"
  }, {
    path: "/project-details2/project-details2-light",
    component: _0ec3bf19,
    name: "project-details2-project-details2-light"
  }, {
    path: "/showcase/showcase-dark",
    component: _7741bfba,
    name: "showcase-showcase-dark"
  }, {
    path: "/showcase/showcase-light",
    component: _61686639,
    name: "showcase-showcase-light"
  }, {
    path: "/showcase2/showcase2-dark",
    component: _50f49cf7,
    name: "showcase2-showcase2-dark"
  }, {
    path: "/showcase2/showcase2-light",
    component: _678283e5,
    name: "showcase2-showcase2-light"
  }, {
    path: "/showcase3/showcase3-dark",
    component: _2cdfe475,
    name: "showcase3-showcase3-dark"
  }, {
    path: "/showcase3/showcase3-light",
    component: _09002c27,
    name: "showcase3-showcase3-light"
  }, {
    path: "/works/works-dark",
    component: _550a913d,
    name: "works-works-dark"
  }, {
    path: "/works/works-light",
    component: _33a9cf42,
    name: "works-works-light"
  }, {
    path: "/works2/works2-dark",
    component: _75932efa,
    name: "works2-works2-dark"
  }, {
    path: "/works2/works2-light",
    component: _7b7a29d9,
    name: "works2-works2-light"
  }, {
    path: "/works3/works3-dark",
    component: _0a29b7a3,
    name: "works3-works3-dark"
  }, {
    path: "/works3/works3-light",
    component: _561e828e,
    name: "works3-works3-light"
  }, {
    path: "/",
    component: _7e385cb3,
    name: "index"
  }, {
    path: "/convocatorias/:categoria?",
    component: _0f213f75,
    name: "convocatorias-categoria"
  }, {
    path: "/convocatoriasDetalle/:detalle?",
    component: _08cb70e4,
    name: "convocatoriasDetalle-detalle"
  }, {
    path: "/inicio",
    component: _7e385cb3,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
