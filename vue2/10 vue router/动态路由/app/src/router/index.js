import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    meta:{
      needlogin:true,
      isauth:true,
      content:'这是首页'
    },
    // component: Home
    components:{
      nav: ()=> import('@/views/nav.vue'),
      aside: ()=>import('@/views/aside.vue'),
      a:()=>import('@/views/a.vue'),
      default:Home
    }
  },
  {
    path:'/nota',
    components:{
      nav: ()=> import('@/views/nav.vue'),
      aside: ()=>import('@/views/aside.vue'),
      a:()=>import('@/views/a.vue'),
    }
  },
  {
    path:'/red',
    redirect:'/weather/yidu'
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
    path:'/new/:id',
    component: () => import('../views/news.vue')
 
  },
  {
    path:'/new',
    name:'new',
    component: () => import('../views/news.vue')
 
  },
  {
    path:'/weather/:city',
    component: ()=> import('../views/weather.vue')
  },
  {
    path:'/bignews',
    component: ()=>import('../views/bignews.vue'),
    children:[{
      path:'litnew',
      component: ()=> import('../views/litnew.vue')
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
