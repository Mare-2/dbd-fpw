import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import NewProductView from '@/views/NewProductView.vue'
import ProductsView from '@/views/ProductsView.vue'
import MembersView from '@/views/MembersView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/new-product',
      name: 'new-product',
      component: NewProductView,
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView,
    },
    {
      path: '/members',
      name: 'members',
      component: MembersView,
    },
  ],
})

export default router
