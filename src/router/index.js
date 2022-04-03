import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/product',
    component: () => import('../views/ProductView.vue')
  },
  {
    path: '/detail/:id',
    component: () => import('../views/DetailView.vue')
  },
  {
    path: '/cart',
    component: () => import('../views/CartView.vue')
  },
  {
    path: '/login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/admin',
    component: () => import('../views/Dashboard/DashboardView.vue'),
    children: [
      {
        path: 'product',
        component: () => import('../views/Dashboard/AdminProductView.vue')
      },
      {
        path: 'order',
        component: () => import('../views/Dashboard/AdminOrderView.vue')
      },
      {
        path: 'upload',
        component: () => import('../views/Dashboard/UploadImage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active'
})

export default router
