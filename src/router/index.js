import { createRouter, createWebHistory } from 'vue-router'

const HomeView = () => import('../views/HomeView.vue')
const ProductsView = () => import('../views/ProductsView.vue')
const ProductDetailsView = () => import('../views/ProductDetailsView.vue')
const CategoriesView = () => import('../views/CategoriesView.vue')
const WishlistView = () => import('../views/WishlistView.vue')
const CartView = () => import('../views/CartView.vue')
const LoginView = () => import('../views/LoginView.vue')
const RegisterView = () => import('../views/RegisterView.vue')
const DashboardView = () => import('../views/DashboardView.vue')
const OrdersView = () => import('../views/OrdersView.vue')
const AboutView = () => import('../views/AboutView.vue')
const ContactView = () => import('../views/ContactView.vue')

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    { path: '/', component: HomeView },
    { path: '/products', component: ProductsView },
    { path: '/products/:id', component: ProductDetailsView },
    { path: '/categories', component: CategoriesView },
    { path: '/wishlist', component: WishlistView },
    { path: '/cart', component: CartView },
    { path: '/login', component: LoginView },
    { path: '/register', component: RegisterView },
    { path: '/dashboard', component: DashboardView },
    { path: '/orders', component: OrdersView },
    { path: '/about', component: AboutView },
    { path: '/contact', component: ContactView },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ]
})

export default router
