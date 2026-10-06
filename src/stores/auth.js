import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

const savedUser = JSON.parse(localStorage.getItem('shopspot-user') || 'null')

export const useAuthStore = defineStore('auth', () => {
  const user = ref(savedUser)
  const isLoggedIn = computed(() => Boolean(user.value))

  function login(email, password, remember = true) {
    if (!email || !password) return { ok: false, message: 'Please enter your email and password.' }
    const name = email.split('@')[0].replace(/[._-]/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
    user.value = { name, email }
    if (remember) localStorage.setItem('shopspot-user', JSON.stringify(user.value))
    else sessionStorage.setItem('shopspot-user', JSON.stringify(user.value))
    return { ok: true }
  }

  function register(name, email) {
    user.value = { name, email }
    localStorage.setItem('shopspot-user', JSON.stringify(user.value))
    return { ok: true }
  }

  function logout() {
    user.value = null
    localStorage.removeItem('shopspot-user')
    sessionStorage.removeItem('shopspot-user')
  }

  return { user, isLoggedIn, login, register, logout }
})
