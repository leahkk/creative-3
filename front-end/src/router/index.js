import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Sell from '../views/Sell.vue'
import Host from '../views/Host.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sell',
    name: 'Sell',
    component: Sell
  },
  {
    path: '/host',
    name: 'Host',
    component: Host
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
