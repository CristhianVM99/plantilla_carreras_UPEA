import Vue from 'vue'

import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_plugin_3c5bce70 from 'nuxt_plugin_plugin_3c5bce70' // Source: ./components/plugin.js (mode: 'all')
import nuxt_plugin_plugin_1ba2dbb0 from 'nuxt_plugin_plugin_1ba2dbb0' // Source: ./composition-api/plugin.mjs (mode: 'all')
import nuxt_plugin_axios_2205a044 from 'nuxt_plugin_axios_2205a044' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_vuescrollto_7f703f2a from 'nuxt_plugin_vuescrollto_7f703f2a' // Source: ./vue-scrollto.js (mode: 'client')
import nuxt_plugin_distplugin1f96797e_648a844c from 'nuxt_plugin_distplugin1f96797e_648a844c' // Source: ./dist.plugin.1f96797e.mjs (mode: 'all')
import nuxt_plugin_particles_1e1352c0 from 'nuxt_plugin_particles_1e1352c0' // Source: ../plugins/particles.js (mode: 'all')
import nuxt_plugin_vueAwesomeSwiper_282933cc from 'nuxt_plugin_vueAwesomeSwiper_282933cc' // Source: ../plugins/vueAwesomeSwiper.js (mode: 'all')
import nuxt_plugin_vueSlickCarousel_c20e2362 from 'nuxt_plugin_vueSlickCarousel_c20e2362' // Source: ../plugins/vueSlickCarousel.js (mode: 'all')
import nuxt_plugin_vueEllipseProgress_6ae57c5c from 'nuxt_plugin_vueEllipseProgress_6ae57c5c' // Source: ../plugins/vueEllipseProgress.js (mode: 'client')
import nuxt_plugin_vueTyper_62ae74ef from 'nuxt_plugin_vueTyper_62ae74ef' // Source: ../plugins/vueTyper.js (mode: 'client')
import nuxt_plugin_vuepdfembed_366df154 from 'nuxt_plugin_vuepdfembed_366df154' // Source: ../plugins/vue-pdf-embed.js (mode: 'client')
import nuxt_plugin_meta_2aede2c2 from 'nuxt_plugin_meta_2aede2c2' // Source: ./composition-api/meta.mjs (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root ? this.$root.$options.$nuxt : null
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const store = null
  const router = await createRouter(ssrContext, config, { store })

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"UPEA | Universidad Publica de El Alto. ","htmlAttrs":{"lang":"es"},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"keywords","name":"keywords","content":"Nuxtjs Vue Template vie onepage themeforest"},{"hid":"description","name":"description","content":"vie - Onepage Multi-Purpose Vue Nuxtjs Template"},{"name":"format-detection","content":"telephone=no"}],"link":[{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Montserrat+Alternates:wght@100;200;300;400;500;600;700;800;900&display=swap"}],"script":[{"src":"\u002Fjs\u002Fwow.min.js"},{"src":"\u002Fjs\u002Fisotope.pkgd.min.js"},{"src":"\u002Fjs\u002Fpace.min.js"},{"src":"\u002Fjs\u002Fsplitting.min.js"},{"src":"\u002Fjs\u002FsimpleParallax.min.js"}],"style":[]},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    beforeSerializeFns: ssrContext ? ssrContext.beforeSerializeFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_3c5bce70 === 'function') {
    await nuxt_plugin_plugin_3c5bce70(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_1ba2dbb0 === 'function') {
    await nuxt_plugin_plugin_1ba2dbb0(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_2205a044 === 'function') {
    await nuxt_plugin_axios_2205a044(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuescrollto_7f703f2a === 'function') {
    await nuxt_plugin_vuescrollto_7f703f2a(app.context, inject)
  }

  if (typeof nuxt_plugin_distplugin1f96797e_648a844c === 'function') {
    await nuxt_plugin_distplugin1f96797e_648a844c(app.context, inject)
  }

  if (typeof nuxt_plugin_particles_1e1352c0 === 'function') {
    await nuxt_plugin_particles_1e1352c0(app.context, inject)
  }

  if (typeof nuxt_plugin_vueAwesomeSwiper_282933cc === 'function') {
    await nuxt_plugin_vueAwesomeSwiper_282933cc(app.context, inject)
  }

  if (typeof nuxt_plugin_vueSlickCarousel_c20e2362 === 'function') {
    await nuxt_plugin_vueSlickCarousel_c20e2362(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vueEllipseProgress_6ae57c5c === 'function') {
    await nuxt_plugin_vueEllipseProgress_6ae57c5c(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vueTyper_62ae74ef === 'function') {
    await nuxt_plugin_vueTyper_62ae74ef(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuepdfembed_366df154 === 'function') {
    await nuxt_plugin_vuepdfembed_366df154(app.context, inject)
  }

  if (typeof nuxt_plugin_meta_2aede2c2 === 'function') {
    await nuxt_plugin_meta_2aede2c2(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
