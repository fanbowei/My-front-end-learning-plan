import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import me from '../views/me.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/1',
    name: 'Home',
    component: Home
  },
  {
    path:'/home',
    name:'Home',
    component:Home

  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/me',
    name:'',
    component:me,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
