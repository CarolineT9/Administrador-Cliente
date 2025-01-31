import { createRouter, createWebHistory } from 'vue-router'
import CustomersView from '@/views/CustomersView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CustomersView,
    },
    {
      path: '/new-customers',
      name: 'new-customers',
      component: () => import ('../views/NewCustomerView.vue')
    },
   
  ],
})

export default router
