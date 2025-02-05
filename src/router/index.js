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
      path: '/new-customer',
      name: 'new-customer',
      component: () => import ('../views/NewCustomerView.vue')
    },
    {
      path: '/edit-customer/:id',
      name: 'edit-customer',
      component: () => import ('../views/EditCustomer.vue'),
     
    },
   
  ],
})

export default router
