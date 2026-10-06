<script setup>
import { useCartStore } from '../../stores/cart'
const props = defineProps({ item: Object })
const cart = useCartStore()
</script>
<template>
  <article class="cart-item">
    <img :src="item.image" :alt="item.name">
    <div class="cart-item-info">
      <span class="eyebrow">{{ item.category }}</span>
      <h3>{{ item.name }}</h3>
      <strong>₹{{ item.price.toLocaleString('en-IN') }}</strong>
      <div class="quantity">
        <button aria-label="Decrease quantity" @click="cart.decreaseQuantity(item.id)">−</button>
        <span>{{ item.quantity }}</span>
        <button aria-label="Increase quantity" @click="cart.increaseQuantity(item.id)">+</button>
      </div>
    </div>
    <div class="cart-item-end"><strong>₹{{ (item.price * item.quantity).toLocaleString('en-IN') }}</strong><button class="text-btn danger" @click="cart.removeFromCart(item.id)">Remove</button></div>
  </article>
</template>
