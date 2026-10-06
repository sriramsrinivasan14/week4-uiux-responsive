<script setup>
import { ref } from 'vue'
const form = ref({ name:'', email:'', subject:'', message:'' })
const errors = ref({})
const submitted = ref(false)
function submit() {
  errors.value = {}
  submitted.value = false
  if (!form.value.name.trim()) errors.value.name = 'Name is required.'
  if (!/^\S+@\S+\.\S+$/.test(form.value.email)) errors.value.email = 'Enter a valid email.'
  if (!form.value.subject.trim()) errors.value.subject = 'Subject is required.'
  if (form.value.message.trim().length < 10) errors.value.message = 'Please enter at least 10 characters.'
  if (Object.keys(errors.value).length) return
  submitted.value = true
  form.value = { name:'', email:'', subject:'', message:'' }
}
</script>
<template>
  <section class="page-hero compact"><div class="container"><span class="eyebrow">SAY HELLO</span><h1>We'd love to hear from you.</h1><p>This contact form is a frontend demonstration — no message is sent to a backend.</p></div></section>
  <section class="section"><div class="container contact-grid">
    <div class="contact-info"><span class="eyebrow">CONTACT</span><h2>Let’s make the experience better.</h2><p>Have feedback about the interface, accessibility or shopping flow? Use the demo form.</p><div class="contact-detail"><strong>Email</strong><span>hello@shopspot.demo</span></div><div class="contact-detail"><strong>Phone</strong><span>+91 98765 43210</span></div><div class="contact-detail"><strong>Address</strong><span>ShopSpot Studio, Chennai, India</span></div><div class="contact-detail"><strong>Hours</strong><span>Mon–Fri · 9:00 AM–6:00 PM</span></div></div>
    <form class="contact-form card" @submit.prevent="submit" novalidate><div v-if="submitted" class="form-alert success" role="status">Thanks! Your demo message was submitted successfully.</div><div class="form-two"><label>Name<input v-model="form.name" type="text" placeholder="Your name"><small v-if="errors.name">{{ errors.name }}</small></label><label>Email<input v-model="form.email" type="email" placeholder="you@example.com"><small v-if="errors.email">{{ errors.email }}</small></label></div><label>Subject<input v-model="form.subject" type="text" placeholder="How can we help?"><small v-if="errors.subject">{{ errors.subject }}</small></label><label>Message<textarea v-model="form.message" rows="6" placeholder="Write your message..."></textarea><small v-if="errors.message">{{ errors.message }}</small></label><button class="btn btn-dark btn-full">Send message →</button></form>
  </div></section>
</template>
