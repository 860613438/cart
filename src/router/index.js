import Vue from 'vue'
import VueRouter from 'vue-router'
import Cart from '../pages/cart'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'cart',
    component: Cart
  },
  {
    path: '/addr',
    name: 'addr',
    component: () => import('../pages/address.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
