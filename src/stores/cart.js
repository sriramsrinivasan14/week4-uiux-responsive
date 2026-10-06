import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'

const saved = JSON.parse(localStorage.getItem('shopspot-cart') || '[]')

export const useCartStore = defineStore('cart', () => {
  const items = ref(saved)

  const totalItems = computed(() => items.value.reduce((sum, item) => sum + item.quantity, 0))
  const totalPrice = computed(() => items.value.reduce((sum, item) => sum + item.price * item.quantity, 0))

  function addToCart(product, quantity = 1) {
    const existing = items.value.find(item => item.id === product.id)
    if (existing) existing.quantity += quantity
    else items.value.push({ ...product, quantity })
  }
  function removeFromCart(id) {
    items.value = items.value.filter(item => item.id !== id)
  }
  function increaseQuantity(id) {
    const item = items.value.find(item => item.id === id)
    if (item) item.quantity++
  }
  function decreaseQuantity(id) {
    const item = items.value.find(item => item.id === id)
    if (!item) return
    if (item.quantity > 1) item.quantity--
    else removeFromCart(id)
  }
  function clearCart() { items.value = [] }

  watch(items, value => localStorage.setItem('shopspot-cart', JSON.stringify(value)), { deep: true })

  return { items, totalItems, totalPrice, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart }
})
