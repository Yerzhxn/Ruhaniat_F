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
      path: '/dirs',
      name: 'dirs',
      component: () => import('./views/dirs/Dirs.vue')
    },
    {
      path: '/kurylym',
      name: 'kurylym',
      component: () => import('./views/dirs/Kurylym.vue')
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('./views/Map.vue')
    },
    {
      path: '/table1',
      name: 'table1',
      component: () => import('./views/Table/Table1.vue')
    },
    {
      path: '/table2',
      name: 'table2',
      component: () => import('./views/Table/Table2.vue')
    },
    {
      path: '/table3',
      name: 'table3',
      component: () => import('./views/Table/Table3.vue')
    },
    {
      path: '/table4',
      name: 'table4',
      component: () => import('./views/Table/Table4.vue')
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
