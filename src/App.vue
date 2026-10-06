<script setup>
import { ref, onMounted } from 'vue'
import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'
import Notification from './components/common/Notification.vue'

const notification = ref(null)

function showNotification(message, type = 'success') {
  notification.value = { message, type, id: Date.now() }
}

onMounted(() => {
  window.addEventListener('shopspot:notify', (event) => {
    showNotification(event.detail?.message || 'Done', event.detail?.type || 'success')
  })
})
</script>

<template>
  <div class="app-shell">
    <Navbar />
    <main id="main-content">
      <router-view />
    </main>
    <Footer />
    <Notification
      v-if="notification"
      :key="notification.id"
      :message="notification.message"
      :type="notification.type"
      @close="notification = null"
    />
  </div>
</template>
