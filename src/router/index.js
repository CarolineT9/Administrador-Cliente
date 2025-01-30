import { createRouter, createWebHistory } from 'vue-router'
import Clients from '@/views/Clients.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'clients',
      component: Clients,
    },
   
  ],
})

export default router
