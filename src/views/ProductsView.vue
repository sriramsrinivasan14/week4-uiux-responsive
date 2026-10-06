<script setup>
import { computed, ref } from 'vue'
import { products, categories } from '../data/products'
import SearchBar from '../components/products/SearchBar.vue'
import ProductCard from '../components/products/ProductCard.vue'
const search = ref('')
const category = ref('All')
const sort = ref('default')
const maxPrice = ref(5000)

const filtered = computed(() => {
  let result = products.filter(p => p.price <= maxPrice.value)
  if (category.value !== 'All') result = result.filter(p => p.category === category.value)
  if (search.value.trim()) result = result.filter(p => `${p.name} ${p.category}`.toLowerCase().includes(search.value.toLowerCase()))
  return [...result].sort((a,b) => {
    if (sort.value === 'low') return a.price - b.price
    if (sort.value === 'high') return b.price - a.price
    if (sort.value === 'rating') return b.rating - a.rating
    if (sort.value === 'name') return a.name.localeCompare(b.name)
    return a.id - b.id
  })
})
</script>
<template>
  <section class="page-hero"><div class="container"><span class="eyebrow">THE COLLECTION</span><h1>Find your next favourite.</h1><p>Search, filter and sort our curated demo catalogue.</p></div></section>
  <section class="section"><div class="container products-layout">
    <aside class="filter-panel">
      <div class="filter-head"><strong>Filters</strong><button class="text-btn" @click="search='';category='All';sort='default';maxPrice=5000">Reset</button></div>
      <label>Category<select v-model="category"><option>All</option><option v-for="c in categories" :key="c.id">{{ c.name }}</option></select></label>
      <label>Maximum price <strong>₹{{ maxPrice.toLocaleString('en-IN') }}</strong><input v-model.number="maxPrice" type="range" min="500" max="5000" step="100"></label>
    </aside>
    <div class="products-main">
      <div class="products-toolbar"><SearchBar v-model="search" /><label class="sort-select">Sort by<select v-model="sort"><option value="default">Default</option><option value="low">Price: Low to High</option><option value="high">Price: High to Low</option><option value="rating">Rating</option><option value="name">Name</option></select></label></div>
      <div class="results-line"><span>{{ filtered.length }} products found</span><span v-if="search">for “{{ search }}”</span></div>
      <div v-if="filtered.length" class="product-grid"><ProductCard v-for="product in filtered" :key="product.id" :product="product" /></div>
      <div v-else class="empty-state card"><div class="empty-icon">⌕</div><h2>No products found</h2><p>Try changing your search or filters.</p><button class="btn btn-dark" @click="search='';category='All';maxPrice=5000">Clear filters</button></div>
    </div>
  </div></section>
</template>
