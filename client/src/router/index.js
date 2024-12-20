import { createRouter, createWebHistory } from 'vue-router'
import Client from '../views/Client/HomePage.vue'
import admin from '../views/Admin/DashBoard.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      
      component: Client,
    },
    {
      path: '/admin',
      name: 'Dashboard',
      
      component: admin,
    },

  ],
})

export default router
