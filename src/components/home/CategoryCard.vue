<script setup>
defineProps({ category: Object })
</script>
<template>
  <router-link class="category-card" :to="`/products?category=${category.name}`">
    <img :src="category.image" :alt="category.name" @error="$event.target.style.display='none'">
    <div class="category-overlay"></div>
    <div class="category-content"><span class="category-icon">{{ category.icon }}</span><h3>{{ category.name }}</h3><p>{{ category.description }}</p><span class="category-arrow">Explore →</span></div>
  </router-link>
</template>
