<script setup>
defineProps({ order: Object })
</script>
<template>
  <article class="order-card">
    <div class="order-head"><div><span class="eyebrow">{{ order.id }}</span><strong>{{ order.date }}</strong></div><span class="status" :class="order.status.toLowerCase()">{{ order.status }}</span></div>
    <div class="order-body"><div class="order-products"><img v-for="item in order.items" :key="item" :src="item.image" :alt="item.name"></div><div class="order-meta"><span>{{ order.items.length }} item(s)</span><strong>₹{{ order.total.toLocaleString('en-IN') }}</strong><button class="text-btn">View details →</button></div></div>
  </article>
</template>
