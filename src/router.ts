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
    {
      path: '/tabl',
      name: 'tables',
      component: () => import('./views/table.vue')
    },
    

    //old
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/BizTuraly.vue')
    },
    
    
  ]
})

export default router
