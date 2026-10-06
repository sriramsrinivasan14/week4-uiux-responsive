import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'

const saved = JSON.parse(localStorage.getItem('shopspot-wishlist') || '[]')

export const useWishlistStore = defineStore('wishlist', () => {
  const wishlistItems = ref(saved)
  const count = computed(() => wishlistItems.value.length)

  function addToWishlist(product) {
    if (!wishlistItems.value.some(item => item.id === product.id)) wishlistItems.value.push(product)
  }
  function removeFromWishlist(id) {
    wishlistItems.value = wishlistItems.value.filter(item => item.id !== id)
  }
  function isInWishlist(id) {
    return wishlistItems.value.some(item => item.id === id)
  }

  watch(wishlistItems, value => localStorage.setItem('shopspot-wishlist', JSON.stringify(value)), { deep: true })
  return { wishlistItems, count, addToWishlist, removeFromWishlist, isInWishlist }
})
