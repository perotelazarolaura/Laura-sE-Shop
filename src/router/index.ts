import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import SignInView from '@/views/SignInView.vue'
import ProductListView from '@/views/ProductListView.vue'
import ProductDetailView from '@/views/ProductDetailView.vue'
import ProfileView from '@/views/ProfileView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: ProductListView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductListView
  },
  {
    path: '/products/:id',
    name: 'product-detail',
    component: ProductDetailView,
    props: (route) => {
      const id = Number(route.params.id)
      return { id }
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignInView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
