import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useStoreUser } from '@/stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/home',
      name: 'auth',
      alias: '/',
      component: () => import('../views/AuthView.vue'),
      beforeEnter: () => {
        const userStore = useStoreUser()
        const isAuthenticated = userStore.isAuthenticated
        if (!isAuthenticated) {
          return { name: 'home' }
        }
      }
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('../views/UsersView.vue')
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('../views/TodoView.vue'),
      beforeEnter: () => {
        const userStore = useStoreUser()
        const isAuthenticated = userStore.isAuthenticated
        if (!isAuthenticated) {
          return { name: 'home' }
        }
      }
    }
  ]
})

export default router
