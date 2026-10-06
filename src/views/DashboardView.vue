<script setup>
import { computed } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useCartStore } from '../stores/cart'
import { useWishlistStore } from '../stores/wishlist'
import DashboardSidebar from '../components/dashboard/DashboardSidebar.vue'
import OrderCard from '../components/dashboard/OrderCard.vue'
import { orders } from '../data/orders'
const auth = useAuthStore()
const cart = useCartStore()
const wishlist = useWishlistStore()
const recent = computed(() => orders.slice(0, 2))
</script>
<template>
  <section class="dashboard-page"><div class="container dashboard-layout">
    <DashboardSidebar/>
    <main class="dashboard-content">
      <div class="dashboard-welcome"><div><span class="eyebrow">YOUR DASHBOARD</span><h1>Hello, {{ auth.user?.name || 'Shopper' }}.</h1><p>Your ShopSpot space, at a glance.</p></div><router-link class="btn btn-dark" to="/products">Continue shopping →</router-link></div>
      <div class="stats-grid"><div class="stat-card"><span>Orders</span><strong>{{ orders.length }}</strong><small>Demo orders</small></div><div class="stat-card"><span>Wishlist</span><strong>{{ wishlist.count }}</strong><small>Saved items</small></div><div class="stat-card"><span>Cart</span><strong>{{ cart.totalItems }}</strong><small>Items waiting</small></div><div class="stat-card"><span>Member since</span><strong>2026</strong><small>ShopSpot demo</small></div></div>
      <div class="dashboard-section-head"><h2>Recent orders</h2><router-link to="/orders" class="text-link">View all →</router-link></div>
      <div class="orders-stack"><OrderCard v-for="order in recent" :key="order.id" :order="order"/></div>
    </main>
  </div></section>
</template>
