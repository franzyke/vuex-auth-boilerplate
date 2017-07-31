import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

import store from '@/store'

Vue.use(Router)

const r = new Router({
  routes
})

r.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && store.getters['auth/status'] !== 1) {
    next({name: 'login'})
  }
  next()
})

export default r
