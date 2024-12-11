import { createRouter, createWebHistory } from 'vue-router'
import homeView from '../views/homeView.vue'
import SiglePost from '@/views/siglePost.vue'
import NotFoundView from '@/views/notFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homeView
    },
    {
      path: '/login',
      name: 'login',
      component: ()=> import('../views/loginView.vue')
    },
    {
      path: '/post/:id',
      name: 'siglePost',
      component: SiglePost
    },
    {
      path: '/contact/',
      name: 'contact',
      component: ()=> import('../views/contactView.vue')
    },
    {
      path: '/ressources/',
      name: 'ressources',
      component: ()=> import('../views/ressourcesView.vue')
    },
    {
      path:'/:anything(.*)',
      name:'notFound',
      component:NotFoundView
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
