<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { products } from '../data/products'
import { useCartStore } from '../stores/cart'
import { useWishlistStore } from '../stores/wishlist'
import ProductCard from '../components/products/ProductCard.vue'
const route = useRoute()
const cart = useCartStore()
const wishlist = useWishlistStore()
const product = computed(() => products.find(p => p.id === Number(route.params.id)))
const quantity = ref(1)
const selectedSize = ref('')
const selectedColor = ref('')
function notify(message) { window.dispatchEvent(new CustomEvent('shopspot:notify', { detail: { message } })) }
function add() { cart.addToCart(product.value, quantity.value); notify(`${product.value.name} added to cart.`) }
function toggleWish() { wishlist.isInWishlist(product.value.id) ? wishlist.removeFromWishlist(product.value.id) : wishlist.addToWishlist(product.value); notify('Wishlist updated.') }
const related = computed(() => products.filter(p => p.category === product.value?.category && p.id !== product.value?.id).slice(0,4))
</script>
<template>
  <section v-if="product" class="section"><div class="container">
    <div class="breadcrumbs"><router-link to="/products">Products</router-link><span>/</span><span>{{ product.name }}</span></div>
    <div class="details-grid">
      <div class="details-image"><img :src="product.image" :alt="product.name"></div>
      <div class="details-copy"><span class="eyebrow">{{ product.category }}</span><h1>{{ product.name }}</h1><div class="rating large">★ {{ product.rating }} <small>48 reviews</small></div><div class="detail-price"><strong>₹{{ product.price.toLocaleString('en-IN') }}</strong><del>₹{{ product.oldPrice.toLocaleString('en-IN') }}</del><span>-{{ product.discount }}%</span></div><p>{{ product.description }}</p>
        <div class="choice"><strong>Size</strong><div class="choice-list"><button v-for="size in product.sizes" :key="size" :class="{ selected: selectedSize===size }" @click="selectedSize=size">{{ size }}</button></div></div>
        <div class="choice"><strong>Color</strong><div class="choice-list"><button v-for="color in product.colors" :key="color" :class="{ selected: selectedColor===color }" @click="selectedColor=color">{{ color }}</button></div></div>
        <div class="purchase-row"><div class="quantity"><button aria-label="Decrease quantity" @click="quantity=Math.max(1,quantity-1)">−</button><span>{{ quantity }}</span><button aria-label="Increase quantity" @click="quantity++">+</button></div><button class="btn btn-dark" @click="add">Add to Cart</button><button class="wishlist-detail" :aria-label="wishlist.isInWishlist(product.id)?'Remove from wishlist':'Add to wishlist'" @click="toggleWish">{{ wishlist.isInWishlist(product.id) ? '♥' : '♡' }}</button></div>
        <div class="detail-notes"><span>✓ Demo-friendly shopping flow</span><span>✓ Local cart persistence</span><span>✓ Responsive product layout</span></div>
      </div>
    </div>
  </div></section>
  <section v-else class="section"><div class="container"><div class="empty-state card"><h2>Product not found</h2><router-link class="btn btn-dark" to="/products">Back to products</router-link></div></div></section>
  <section v-if="related.length" class="section soft-section"><div class="container"><div class="section-head"><div><span class="eyebrow">YOU MAY ALSO LIKE</span><h2>More {{ product.category }} picks</h2></div></div><div class="product-grid"><ProductCard v-for="p in related" :key="p.id" :product="p"/></div></div></section>
</template>
