<script setup>
import { computed } from 'vue'
import { useCartStore } from '../stores/cart'
import CartItem from '../components/cart/CartItem.vue'
import EmptyState from '../components/common/EmptyState.vue'
const cart = useCartStore()
const shipping = computed(() => cart.totalPrice === 0 || cart.totalPrice >= 1999 ? 0 : 99)
const discount = computed(() => cart.totalPrice >= 3000 ? Math.round(cart.totalPrice * 0.08) : 0)
const grand = computed(() => cart.totalPrice + shipping.value - discount.value)
function checkout() {
  window.dispatchEvent(new CustomEvent('shopspot:notify', { detail: { message: 'Checkout is a frontend demo — no payment was processed.' } }))
}
</script>
<template>
  <section class="page-hero compact"><div class="container"><span class="eyebrow">YOUR BAG</span><h1>Shopping cart</h1></div></section>
  <section class="section"><div class="container">
    <EmptyState v-if="!cart.items.length" icon="🛒" title="Your cart is waiting." message="Add something you love and it will appear here." action-text="Start shopping" @action="$router.push('/products')" />
    <div v-else class="cart-layout">
      <div><div class="cart-list"><CartItem v-for="item in cart.items" :key="item.id" :item="item"/></div><button class="text-btn danger" @click="cart.clearCart">Clear cart</button></div>
      <aside class="summary card"><span class="eyebrow">ORDER SUMMARY</span><h2>Almost yours.</h2><div><span>Subtotal</span><strong>₹{{ cart.totalPrice.toLocaleString('en-IN') }}</strong></div><div><span>Shipping</span><strong>{{ shipping ? '₹'+shipping : 'Free' }}</strong></div><div><span>Discount</span><strong>- ₹{{ discount.toLocaleString('en-IN') }}</strong></div><hr><div class="grand"><span>Total</span><strong>₹{{ grand.toLocaleString('en-IN') }}</strong></div><button class="btn btn-dark btn-full" @click="checkout">Checkout</button><p class="form-note">Free shipping on orders above ₹1,999.</p></aside>
    </div>
  </div></section>
</template>
