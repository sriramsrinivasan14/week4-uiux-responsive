<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCartStore } from '../../stores/cart'
import { useWishlistStore } from '../../stores/wishlist'
import { useAuthStore } from '../../stores/auth'

const menuOpen = ref(false)
const route = useRoute()
const router = useRouter()
const cart = useCartStore()
const wishlist = useWishlistStore()
const auth = useAuthStore()

const links = [
  ['Home','/'], ['Products','/products'], ['Categories','/categories'],
  ['About','/about'], ['Contact','/contact']
]
const profileLabel = computed(() => auth.isLoggedIn ? 'Profile' : 'Login')

function closeMenu() { menuOpen.value = false }
function logout() {
  auth.logout()
  router.push('/')
  closeMenu()
  window.dispatchEvent(new CustomEvent('shopspot:notify', { detail: { message: 'You have been logged out.' } }))
}
</script>

<template>
  <header class="site-header">
    <div class="container nav-wrap">
      <router-link class="brand" to="/" @click="closeMenu">
        <span class="brand-mark">S</span>
        <span><strong>SHOPSPOT</strong><small>Discover. Shop. Enjoy.</small></span>
      </router-link>

      <nav class="desktop-nav" aria-label="Primary navigation">
        <router-link v-for="[label, path] in links" :key="path" :to="path" :class="{ active: route.path === path }">{{ label }}</router-link>
      </nav>

      <div class="nav-actions">
        <router-link class="nav-icon-link search-nav" to="/products" aria-label="Search products">⌕</router-link>
        <router-link class="nav-icon-link" to="/wishlist" aria-label="Wishlist">♡<b v-if="wishlist.count">{{ wishlist.count }}</b></router-link>
        <router-link class="nav-icon-link" to="/cart" aria-label="Shopping cart">🛒<b v-if="cart.totalItems">{{ cart.totalItems }}</b></router-link>
        <router-link class="profile-link" :to="auth.isLoggedIn ? '/dashboard' : '/login'">◯ {{ profileLabel }}</router-link>
        <button class="menu-toggle" :aria-expanded="menuOpen" aria-label="Open navigation menu" @click="menuOpen = !menuOpen">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>

    <transition name="slide">
      <div v-if="menuOpen" class="mobile-menu">
        <div class="container">
          <router-link v-for="[label, path] in links" :key="path" :to="path" @click="closeMenu">{{ label }}</router-link>
          <router-link to="/wishlist" @click="closeMenu">Wishlist <span>{{ wishlist.count }}</span></router-link>
          <router-link to="/cart" @click="closeMenu">Cart <span>{{ cart.totalItems }}</span></router-link>
          <router-link :to="auth.isLoggedIn ? '/dashboard' : '/login'" @click="closeMenu">{{ profileLabel }}</router-link>
          <button v-if="auth.isLoggedIn" class="mobile-logout" @click="logout">Log out</button>
        </div>
      </div>
    </transition>
  </header>
</template>
