<script setup>
defineProps({ icon: { type: String, default: '○' }, title: String, message: String, actionText: String })
defineEmits(['action'])
</script>
<template>
  <div class="empty-state card">
    <div class="empty-icon" aria-hidden="true">{{ icon }}</div>
    <h2>{{ title }}</h2>
    <p>{{ message }}</p>
    <button v-if="actionText" class="btn btn-primary" @click="$emit('action')">{{ actionText }}</button>
  </div>
</template>
