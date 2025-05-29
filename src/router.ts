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
      path: '/news',
      name: 'news',
      component: () => import('./views/News/News.vue')
    },
    {
      path: '/news/:id',
      name: 'newsView',
      component: () => import('./views/News/NewsView.vue')
    },
    {
      path: '/achievements',
      name: 'achievements',
      component: () => import('./views/Achievements/Achievements.vue')
    },
    {
      path: '/achievements/:id',
      name: 'achievementsView',
      component: () => import('./views/Achievements/AchievementView.vue')
    },{
      path: '/youTubes',
      name: 'youTubes',
      component: () => import('./views/youTube/YouTube.vue')
    },
    {
      path: '/youTubes/:id',
      name: 'youTubesView',
      component: () => import('./views/youTube/YoutubeView.vue')
    },

    //old

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
