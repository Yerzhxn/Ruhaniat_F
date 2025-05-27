import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/youtube',
      name: 'youtube',
      component: () => import('./views/Youtube.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/BizTuraly.vue')
    },
    {
      path: '/jetistikter',
      name: 'jetistikter',
      component: () => import('./views/Zhetistikter.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('./views/Zhanalyktar.vue')
    },
    {
      path: '/jet',
      name: 'jetDef',
      component: () => import('./views/ZhatistikDef.vue')
    },
    {
      path: '/jan',
      name: 'janDef',
      component: () => import('./views/zhanalykDef.vue')
    },
    {
      path: '/tabl',
      name: 'tables',
      component: () => import('./views/table.vue')
    },
    
  ]
})

export default router
