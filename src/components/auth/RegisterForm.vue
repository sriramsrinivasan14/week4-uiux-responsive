<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../../stores/auth'
const auth = useAuthStore()
const router = useRouter()
const name = ref(''), email = ref(''), password = ref(''), confirm = ref(''), error = ref(''), success = ref('')
function submit() {
  error.value = ''; success.value = ''
  if (!name.value.trim() || !email.value.trim() || !password.value || !confirm.value) return error.value = 'All fields are required.'
  if (!/^\S+@\S+\.\S+$/.test(email.value)) return error.value = 'Enter a valid email address.'
  if (password.value.length < 6) return error.value = 'Password must be at least 6 characters.'
  if (password.value !== confirm.value) return error.value = 'Passwords do not match.'
  auth.register(name.value.trim(), email.value.trim())
  success.value = 'Account created successfully.'
  setTimeout(() => router.push('/dashboard'), 500)
}
</script>
<template>
  <form class="auth-form" @submit.prevent="submit" novalidate>
    <div v-if="error" class="form-alert error" role="alert">{{ error }}</div>
    <div v-if="success" class="form-alert success" role="status">{{ success }}</div>
    <label>Full name<input v-model.trim="name" type="text" autocomplete="name" placeholder="Your full name"></label>
    <label>Email<input v-model.trim="email" type="email" autocomplete="email" placeholder="you@example.com"></label>
    <label>Password<input v-model="password" type="password" autocomplete="new-password" placeholder="At least 6 characters"></label>
    <label>Confirm password<input v-model="confirm" type="password" autocomplete="new-password" placeholder="Repeat your password"></label>
    <label class="check"><input type="checkbox" required> I agree to the demo terms.</label>
    <button class="btn btn-dark btn-full">Create account</button>
    <p class="form-note">Academic frontend demonstration — credentials are not sent to a server.</p>
  </form>
</template>
