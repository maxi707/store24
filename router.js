import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ProductPage from '../pages/ProductPage.vue'
import CategoryPage from '../pages/CategoryPage.vue'
import CartPage from '../pages/CartPage.vue'
import FavoritePage from '../pages/FavoritePage.vue'

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/category/:id',
    component: CategoryPage
  },
  {
    path: '/product/:id',
    component: ProductPage
  },
  {
    path: '/cart',
    component: CartPage
  },
  {
    path: '/favorite',
    component: FavoritePage
  },
  {
    path: '/:pathMatch(.*)*', // 404
    component: HomePage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
