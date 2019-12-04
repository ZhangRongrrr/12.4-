import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect:'news',
    children:[
      {
        path: '/news',
        name: 'news',
        component: () => import('../views/home/news.vue')
      },{
        path: '/my',
        name: 'my',
        component: () => import('../views/home/my.vue')
      },{
        path: '/play',
        name: 'play',
        component: () => import('../views/home/play.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
