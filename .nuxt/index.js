import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_773fc3ce from 'nuxt_plugin_plugin_773fc3ce' // Source: ./components/plugin.js (mode: 'all')
import nuxt_plugin_vuescrollto_204e0c7a from 'nuxt_plugin_vuescrollto_204e0c7a' // Source: ./vue-scrollto.js (mode: 'client')
import nuxt_plugin_apollomodule_fa8ed90a from 'nuxt_plugin_apollomodule_fa8ed90a' // Source: ./apollo-module.js (mode: 'all')
import nuxt_plugin_axios_32f3e6af from 'nuxt_plugin_axios_32f3e6af' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_moment_3a3480c9 from 'nuxt_plugin_moment_3a3480c9' // Source: ./moment.js (mode: 'all')
import nuxt_plugin_vuemoment_732aa8ba from 'nuxt_plugin_vuemoment_732aa8ba' // Source: ../plugins/vue-moment.js (mode: 'all')
import nuxt_plugin_prism_a4560ee8 from 'nuxt_plugin_prism_a4560ee8' // Source: ../plugins/prism.js (mode: 'all')

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
    return this.$root.$options.$nuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule
const baseStoreOptions = { preserveState: process.client }

function registerModule (path, rawModule, options = {}) {
  return originalRegisterModule.call(this, path, rawModule, { ...baseStoreOptions, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"htmlAttrs":{"lang":"en-GB"},"title":"KEJK – Product Designer and Developer","meta":[{"charset":"utf-8"},{"name":"HandheldFriendly","content":"True"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"name":"apple-mobile-web-app-capable","content":"yes"},{"name":"apple-mobile-web-app-status-bar-style","content":"default"},{"name":"apple-mobile-web-app-title","content":"KEJK"},{"hid":"description","name":"description","content":"Product Designer and Frontend Developer"},{"hid":"description","name":"description","content":"Human-first Product Designer and Developer."},{"property":"og:site_name","content":"KEJK"},{"hid":"og:type","property":"og:type","content":"website"},{"hid":"og:url","property":"og:url","content":"https:\u002F\u002Fwww.kejk.tech"},{"hid":"og:title","property":"og:title","content":"Karl Emil James Koch"},{"hid":"og:description","property":"og:description","content":"Human-first Product Designer and Developer."},{"hid":"og:image","property":"og:image","content":"https:\u002F\u002Fres.cloudinary.com\u002Fkejk\u002Fimage\u002Fupload\u002Fq_auto,f_auto\u002Fv1610305389\u002FOG_Image_wlile7.png"},{"property":"og:image:width","content":"740"},{"property":"og:image:height","content":"300"},{"name":"twitter:site","content":"@_kejk"},{"name":"twitter:creator","content":"@_kejk"},{"name":"twitter:card","content":"summary_large_image"},{"hid":"twitter:url","name":"twitter:url","content":"https:\u002F\u002Fwww.kejk.tech"},{"hid":"twitter:title","name":"twitter:title","content":"Karl Emil James Koch"},{"hid":"twitter:description","name":"twitter:description","content":"Human-first Product Designer and Developer."},{"hid":"twitter:image:src","name":"twitter:image:src","content":"https:\u002F\u002Fres.cloudinary.com\u002Fkejk\u002Fimage\u002Fupload\u002Fq_auto,f_auto\u002Fv1610305390\u002FTwitter_Image_ah1nne.png"}],"link":[{"rel":"icon","href":"\u002Ffavicon.svg"},{"rel":"icon","href":"\u002Ffavicon.ico"},{"rel":"mask-icon","href":"\u002Fmask-icon.svg","color":"#667EEA"},{"rel":"apple-touch-icon","type":"image\u002Fx-icon","href":"\u002Fapple-icon.png"},{"rel":"apple-touch-icon","type":"image\u002Fx-icon","sizes":"57x57","href":"\u002Fapple-icon.png"},{"rel":"apple-touch-icon","type":"image\u002Fx-icon","sizes":"60x60","href":"\u002Fapple-icon.png"},{"rel":"apple-touch-icon","type":"image\u002Fx-icon","sizes":"72x72","href":"\u002Fapple-icon.png"},{"rel":"apple-touch-icon","type":"image\u002Fx-icon","sizes":"76x76","href":"\u002Fapple-icon.png"},{"rel":"apple-touch-icon","type":"image\u002Fx-icon","sizes":"114x114","href":"\u002Fapple-icon.png"},{"rel":"apple-touch-icon","type":"image\u002Fx-icon","sizes":"120x120","href":"\u002Fapple-icon.png"},{"rel":"apple-touch-icon","type":"image\u002Fx-icon","sizes":"144x144","href":"\u002Fapple-icon.png"},{"rel":"apple-touch-icon","type":"image\u002Fx-icon","sizes":"152x152","href":"\u002Fapple-icon.png"},{"rel":"apple-touch-icon","type":"image\u002Fx-icon","sizes":"180x180","href":"\u002Fapple-icon.png"},{"hid":"canonical","rel":"canonical","href":"https:\u002F\u002Fkejk.tech"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Inter:wght@400;500;600;700;800;900&display=swap"}],"style":[],"script":[]},

    store,
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

  // Make app available into store via this.app
  store.app = app

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
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
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

    // Add into store
    store[key] = app[key]

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

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_773fc3ce === 'function') {
    await nuxt_plugin_plugin_773fc3ce(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuescrollto_204e0c7a === 'function') {
    await nuxt_plugin_vuescrollto_204e0c7a(app.context, inject)
  }

  if (typeof nuxt_plugin_apollomodule_fa8ed90a === 'function') {
    await nuxt_plugin_apollomodule_fa8ed90a(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_32f3e6af === 'function') {
    await nuxt_plugin_axios_32f3e6af(app.context, inject)
  }

  if (typeof nuxt_plugin_moment_3a3480c9 === 'function') {
    await nuxt_plugin_moment_3a3480c9(app.context, inject)
  }

  if (typeof nuxt_plugin_vuemoment_732aa8ba === 'function') {
    await nuxt_plugin_vuemoment_732aa8ba(app.context, inject)
  }

  if (typeof nuxt_plugin_prism_a4560ee8 === 'function') {
    await nuxt_plugin_prism_a4560ee8(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, (err) => {
        // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
        if (!err._isRouter) return reject(err)
        if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
