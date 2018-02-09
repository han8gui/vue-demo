import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Maps from './map'
const router = new Router(Maps)

router.beforeEach((to, from, next) => {
  next()
})

export default router

