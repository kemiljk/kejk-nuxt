import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _98d9a16c = () => interopDefault(import('../node_modules/@nuxtjs/tailwindcss/lib/ui/pages/index.vue' /* webpackChunkName: "" */))
const _7d61c42a = () => interopDefault(import('../pages/About.vue' /* webpackChunkName: "pages/About" */))
const _3909201a = () => interopDefault(import('../pages/Bookmarks.vue' /* webpackChunkName: "pages/Bookmarks" */))
const _1867d68c = () => interopDefault(import('../pages/Lazy-pdf.vue' /* webpackChunkName: "pages/Lazy-pdf" */))
const _07fd45e0 = () => interopDefault(import('../pages/thoughts/index.vue' /* webpackChunkName: "pages/thoughts/index" */))
const _128b9182 = () => interopDefault(import('../pages/Uses.vue' /* webpackChunkName: "pages/Uses" */))
const _17636378 = () => interopDefault(import('../pages/thoughts/_id.vue' /* webpackChunkName: "pages/thoughts/_id" */))
const _25a77f0f = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/_tailwind",
    component: _98d9a16c,
    name: "_tailwind"
  }, {
    path: "/About",
    component: _7d61c42a,
    name: "About"
  }, {
    path: "/Bookmarks",
    component: _3909201a,
    name: "Bookmarks"
  }, {
    path: "/Lazy-pdf",
    component: _1867d68c,
    name: "Lazy-pdf"
  }, {
    path: "/thoughts",
    component: _07fd45e0,
    name: "thoughts"
  }, {
    path: "/Uses",
    component: _128b9182,
    name: "Uses"
  }, {
    path: "/thoughts/:id",
    component: _17636378,
    name: "thoughts-id"
  }, {
    path: "/",
    component: _25a77f0f,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  const router = new Router(routerOptions)
  const resolve = router.resolve.bind(router)

  // encodeURI(decodeURI()) ~> support both encoded and non-encoded urls
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = encodeURI(decodeURI(to))
    }
    return resolve(to, current, append)
  }

  return router
}
