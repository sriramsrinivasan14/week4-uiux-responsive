<script setup>
import { useWishlistStore } from '../stores/wishlist'
import { useCartStore } from '../stores/cart'
import EmptyState from '../components/common/EmptyState.vue'
import ProductCard from '../components/products/ProductCard.vue'
const wishlist = useWishlistStore()
const cart = useCartStore()
function moveAll() { wishlist.wishlistItems.forEach(p => cart.addToCart(p)); wishlist.wishlistItems = []; window.dispatchEvent(new CustomEvent('shopspot:notify',{detail:{message:'Wishlist items moved to cart.'}})) }
</script>
<template>
  <section class="page-hero compact"><div class="container"><span class="eyebrow">SAVED FOR LATER</span><h1>Your wishlist</h1><p>{{ wishlist.count }} item(s) saved.</p></div></section>
  <section class="section"><div class="container">
    <EmptyState v-if="!wishlist.count" icon="♡" title="Nothing saved yet." message="Tap the heart on any product to keep it close." action-text="Explore products" @action="$router.push('/products')" />
    <template v-else><div class="wishlist-actions"><button class="btn btn-light" @click="moveAll">Move all to cart</button></div><div class="product-grid"><ProductCard v-for="product in wishlist.wishlistItems" :key="product.id" :product="product"/></div></template>
  </div></section>
</template>
