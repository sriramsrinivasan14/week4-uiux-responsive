<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const links = [['Dashboard','/dashboard','⌂'],['Orders','/orders','▣'],['Wishlist','/wishlist','♡'],['Cart','/cart','🛒']]
</script>
<template>
  <aside class="dashboard-sidebar">
    <div class="sidebar-title"><span>My space</span><strong>Account</strong></div>
    <nav>
      <router-link v-for="[label,path,icon] in links" :key="path" :to="path" :class="{ active: route.path === path }"><span>{{ icon }}</span>{{ label }}</router-link>
    </nav>
    <router-link class="sidebar-help" to="/contact"><strong>Need help?</strong><span>Talk to ShopSpot →</span></router-link>
  </aside>
</template>
