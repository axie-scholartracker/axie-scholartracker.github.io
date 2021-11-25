import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _72902845 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _c3054642 = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _b614ef9c = () => interopDefault(import('../pages/test/index.vue' /* webpackChunkName: "pages/test/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/axiemanagertracker.github.io/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/es",
    component: _72902845,
    name: "index___es"
  }, {
    path: "/login",
    component: _c3054642,
    name: "login___en"
  }, {
    path: "/test",
    component: _b614ef9c,
    name: "test___en"
  }, {
    path: "/es/login",
    component: _c3054642,
    name: "login___es"
  }, {
    path: "/es/test",
    component: _b614ef9c,
    name: "test___es"
  }, {
    path: "/",
    component: _72902845,
    name: "index___en"
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
