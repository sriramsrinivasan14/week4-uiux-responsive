<template>
  <section class="auth-page"><div class="auth-card card"><div class="auth-intro"><span class="brand-mark">S</span><span class="eyebrow">WELCOME BACK</span><h1>Good to see you.</h1><p>Sign in to view your saved products, cart and orders.</p></div><LoginForm /><p class="auth-switch">New to ShopSpot? <router-link to="/register">Create an account</router-link></p></div></section>
</template>
<script setup>
import LoginForm from '../components/auth/LoginForm.vue'
</script>
