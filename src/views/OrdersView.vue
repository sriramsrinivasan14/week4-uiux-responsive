<script setup>
import { orders } from '../data/orders'
import DashboardSidebar from '../components/dashboard/DashboardSidebar.vue'
import OrderCard from '../components/dashboard/OrderCard.vue'
</script>
<template>
  <section class="dashboard-page"><div class="container dashboard-layout"><DashboardSidebar/><main class="dashboard-content">
    <div class="dashboard-welcome"><div><span class="eyebrow">ORDER HISTORY</span><h1>Your orders</h1><p>Sample orders for the academic frontend demonstration.</p></div></div>
    <div class="orders-stack"><OrderCard v-for="order in orders" :key="order.id" :order="order"/></div>
  </main></div></section>
</template>
