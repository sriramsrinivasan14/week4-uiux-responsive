<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../../stores/auth'
const auth = useAuthStore()
const router = useRouter()
const email = ref('')
const password = ref('')
const remember = ref(true)
const error = ref('')
function submit() {
  error.value = ''
  if (!email.value || !/^\S+@\S+\.\S+$/.test(email.value)) return error.value = 'Enter a valid email address.'
  if (password.value.length < 6) return error.value = 'Password must be at least 6 characters.'
  const result = auth.login(email.value, password.value, remember.value)
  if (!result.ok) return error.value = result.message
  window.dispatchEvent(new CustomEvent('shopspot:notify', { detail: { message: 'Welcome back to ShopSpot!' } }))
  router.push('/dashboard')
}
</script>
<template>
  <form class="auth-form" @submit.prevent="submit" novalidate>
    <div v-if="error" class="form-alert error" role="alert">{{ error }}</div>
    <label>Email<input v-model.trim="email" type="email" autocomplete="email" placeholder="you@example.com"></label>
    <label>Password<input v-model="password" type="password" autocomplete="current-password" placeholder="••••••••"></label>
    <div class="form-row"><label class="check"><input v-model="remember" type="checkbox"> Remember me</label><a href="#" @click.prevent>Forgot password?</a></div>
    <button class="btn btn-dark btn-full">Login to ShopSpot</button>
    <p class="form-note">Demo only — no real backend authentication is used.</p>
  </form>
</template>
