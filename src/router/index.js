import { createRouter, createWebHistory } from 'vue-router'
import Clients from '@/views/ClientsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Clients,
    },
    {
      path: '/new-client',
      name: 'new-client',
      component: () => import ('../views/NewClientView.vue')
    },
   
  ],
})

export default router
