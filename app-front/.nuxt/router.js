import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _08b2b3ca = () => interopDefault(import('..\\pages\\CadastroEsportes.vue' /* webpackChunkName: "pages/CadastroEsportes" */))
const _3deec62a = () => interopDefault(import('..\\pages\\CadastroEstatisticas.vue' /* webpackChunkName: "pages/CadastroEstatisticas" */))
const _6419c1fc = () => interopDefault(import('..\\pages\\CadastroEvento.vue' /* webpackChunkName: "pages/CadastroEvento" */))
const _0c0826ec = () => interopDefault(import('..\\pages\\CadastroImprensa.vue' /* webpackChunkName: "pages/CadastroImprensa" */))
const _7b8cd92a = () => interopDefault(import('..\\pages\\CadastroJogador.vue' /* webpackChunkName: "pages/CadastroJogador" */))
const _47d43e10 = () => interopDefault(import('..\\pages\\CadastroLocais.vue' /* webpackChunkName: "pages/CadastroLocais" */))
const _25fa1094 = () => interopDefault(import('..\\pages\\CadastroPartida.vue' /* webpackChunkName: "pages/CadastroPartida" */))
const _8d38168a = () => interopDefault(import('..\\pages\\CadastroPatrocinio.vue' /* webpackChunkName: "pages/CadastroPatrocinio" */))
const _58bc4edc = () => interopDefault(import('..\\pages\\CadastroResultado.vue' /* webpackChunkName: "pages/CadastroResultado" */))
const _1cfb2d48 = () => interopDefault(import('..\\pages\\CadastroTecnico.vue' /* webpackChunkName: "pages/CadastroTecnico" */))
const _3f8965fa = () => interopDefault(import('..\\pages\\CadastroTime.vue' /* webpackChunkName: "pages/CadastroTime" */))
const _6e22a838 = () => interopDefault(import('..\\pages\\Calendario.vue' /* webpackChunkName: "pages/Calendario" */))
const _7be4b3b3 = () => interopDefault(import('..\\pages\\Home.vue' /* webpackChunkName: "pages/Home" */))
const _2da23c62 = () => interopDefault(import('..\\pages\\ListaEventos.vue' /* webpackChunkName: "pages/ListaEventos" */))
const _64450e7f = () => interopDefault(import('..\\pages\\ListaPartidas.vue' /* webpackChunkName: "pages/ListaPartidas" */))
const _1e96a945 = () => interopDefault(import('..\\pages\\Login.vue' /* webpackChunkName: "pages/Login" */))
const _51f6aa6e = () => interopDefault(import('..\\pages\\Registrar.vue' /* webpackChunkName: "pages/Registrar" */))
const _45063364 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/CadastroEsportes",
    component: _08b2b3ca,
    name: "CadastroEsportes"
  }, {
    path: "/CadastroEstatisticas",
    component: _3deec62a,
    name: "CadastroEstatisticas"
  }, {
    path: "/CadastroEvento",
    component: _6419c1fc,
    name: "CadastroEvento"
  }, {
    path: "/CadastroImprensa",
    component: _0c0826ec,
    name: "CadastroImprensa"
  }, {
    path: "/CadastroJogador",
    component: _7b8cd92a,
    name: "CadastroJogador"
  }, {
    path: "/CadastroLocais",
    component: _47d43e10,
    name: "CadastroLocais"
  }, {
    path: "/CadastroPartida",
    component: _25fa1094,
    name: "CadastroPartida"
  }, {
    path: "/CadastroPatrocinio",
    component: _8d38168a,
    name: "CadastroPatrocinio"
  }, {
    path: "/CadastroResultado",
    component: _58bc4edc,
    name: "CadastroResultado"
  }, {
    path: "/CadastroTecnico",
    component: _1cfb2d48,
    name: "CadastroTecnico"
  }, {
    path: "/CadastroTime",
    component: _3f8965fa,
    name: "CadastroTime"
  }, {
    path: "/Calendario",
    component: _6e22a838,
    name: "Calendario"
  }, {
    path: "/Home",
    component: _7be4b3b3,
    name: "Home"
  }, {
    path: "/ListaEventos",
    component: _2da23c62,
    name: "ListaEventos"
  }, {
    path: "/ListaPartidas",
    component: _64450e7f,
    name: "ListaPartidas"
  }, {
    path: "/Login",
    component: _1e96a945,
    name: "Login"
  }, {
    path: "/Registrar",
    component: _51f6aa6e,
    name: "Registrar"
  }, {
    path: "/",
    component: _45063364,
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
