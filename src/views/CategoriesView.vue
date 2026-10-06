<script setup>
import { categories } from '../data/products'
import CategoryCard from '../components/home/CategoryCard.vue'
</script>
<template>
  <section class="page-hero"><div class="container"><span class="eyebrow">DISCOVER</span><h1>Categories made simple.</h1><p>Start broad or jump straight into the kind of products you're looking for.</p></div></section>
  <section class="section"><div class="container category-page-grid"><CategoryCard v-for="category in categories" :key="category.id" :category="category"/></div></section>
  <section class="container callout"><div><span class="eyebrow">NOT SURE?</span><h2>Start with our featured finds.</h2><p>Use search and sorting to quickly narrow down the catalogue.</p></div><router-link class="btn btn-dark" to="/products">Browse products →</router-link></section>
</template>
