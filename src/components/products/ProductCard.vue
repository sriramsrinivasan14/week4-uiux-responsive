<script setup>
import { useRouter } from 'vue-router'
import { useCartStore } from '../../stores/cart'
import { useWishlistStore } from '../../stores/wishlist'

const props = defineProps({ product: Object })
const cart = useCartStore()
const wishlist = useWishlistStore()
const router = useRouter()

function notify(message) {
  window.dispatchEvent(new CustomEvent('shopspot:notify', { detail: { message } }))
}
function toggleWishlist() {
  if (wishlist.isInWishlist(props.product.id)) {
    wishlist.removeFromWishlist(props.product.id)
    notify('Removed from wishlist.')
  } else {
    wishlist.addToWishlist(props.product)
    notify('Added to wishlist.')
  }
}
function addCart() {
  cart.addToCart(props.product)
  notify(`${props.product.name} added to cart.`)
}
</script>

<template>
  <article class="product-card">
    <div class="product-image-wrap" @click="router.push(`/products/${product.id}`)">
      <img :src="product.image" :alt="product.name" @error="$event.target.style.opacity='0.25'">
      <span class="discount-badge">-{{ product.discount }}%</span>
      <button class="wishlist-btn" :class="{ selected: wishlist.isInWishlist(product.id) }" :aria-label="wishlist.isInWishlist(product.id) ? 'Remove from wishlist' : 'Add to wishlist'" @click.stop="toggleWishlist">{{ wishlist.isInWishlist(product.id) ? '♥' : '♡' }}</button>
    </div>
    <div class="product-info">
      <span class="eyebrow">{{ product.category }}</span>
      <router-link class="product-name" :to="`/products/${product.id}`">{{ product.name }}</router-link>
      <div class="rating"><span>★</span> {{ product.rating }} <small>· 48 reviews</small></div>
      <div class="price-row"><strong>₹{{ product.price.toLocaleString('en-IN') }}</strong><del>₹{{ product.oldPrice.toLocaleString('en-IN') }}</del></div>
      <button class="btn btn-dark add-cart-btn" @click="addCart">Add to cart</button>
    </div>
  </article>
</template>
