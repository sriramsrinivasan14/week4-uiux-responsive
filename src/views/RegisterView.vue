<template>
  <section class="auth-page"><div class="auth-card card"><div class="auth-intro"><span class="brand-mark">S</span><span class="eyebrow">JOIN SHOPSPOT</span><h1>Make shopping yours.</h1><p>Create a demo account to experience the complete ShopSpot flow.</p></div><RegisterForm /><p class="auth-switch">Already have an account? <router-link to="/login">Log in</router-link></p></div></section>
</template>
<script setup>
import RegisterForm from '../components/auth/RegisterForm.vue'
</script>
