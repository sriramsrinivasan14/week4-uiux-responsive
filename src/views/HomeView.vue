<script setup>
import { computed } from 'vue'
import { products, categories } from '../data/products'
import CategoryCard from '../components/home/CategoryCard.vue'
import ProductCard from '../components/products/ProductCard.vue'
const featured = computed(() => products.slice(0, 8))
</script>
<template>
  <div>
    <section class="hero">
      <div class="container hero-grid">
        <div class="hero-copy">
          <span class="pill">CURATED FOR EVERYDAY</span>
          <h1>Find What <em>You Love.</em></h1>
          <p>Discover quality products at prices you'll love. Thoughtful essentials, fresh styles and useful finds — all in one easy place.</p>
          <div class="hero-actions"><router-link class="btn btn-dark" to="/products">Shop Now <span>→</span></router-link><router-link class="btn btn-light" to="/categories">Explore Categories</router-link></div>
          <div class="hero-trust"><span>✓ Easy discovery</span><span>✓ Curated picks</span><span>✓ Responsive shopping</span></div>
        </div>
        <div class="hero-visual"><img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85" alt="Curated fashion and shopping display"><div class="floating-card"><span>Today’s pick</span><strong>Made for your rhythm.</strong><small>Fresh arrivals · 24 new finds</small></div></div>
      </div>
    </section>

    <section class="section">
      <div class="container"><div class="section-head"><div><span class="eyebrow">EXPLORE</span><h2>Shop by category</h2></div><router-link class="text-link" to="/categories">View all →</router-link></div>
        <div class="category-grid"><CategoryCard v-for="category in categories" :key="category.id" :category="category" /></div>
      </div>
    </section>

    <section class="section soft-section">
      <div class="container"><div class="section-head"><div><span class="eyebrow">HANDPICKED</span><h2>Featured finds</h2><p>Products selected to make everyday choices feel a little easier.</p></div><router-link class="text-link" to="/products">Browse all →</router-link></div>
        <div class="product-grid"><ProductCard v-for="product in featured" :key="product.id" :product="product" /></div>
      </div>
    </section>

    <section class="container editorial">
      <div><span class="eyebrow">SHOPSPOT PROMISE</span><h2>Less noise.<br><em>Better choices.</em></h2><p>We designed ShopSpot around simple discovery — clear categories, helpful filters and a calm shopping flow that works on every screen.</p><router-link class="btn btn-dark" to="/about">Why ShopSpot?</router-link></div>
      <div class="editorial-stat"><strong>16</strong><span>curated demo products</span><strong>6</strong><span>easy-to-explore categories</span><strong>100%</strong><span>responsive interface</span></div>
    </section>
  </div>
</template>
