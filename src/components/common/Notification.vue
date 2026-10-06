<script setup>
import { onMounted } from 'vue'
const props = defineProps({ message: String, type: { type: String, default: 'success' } })
const emit = defineEmits(['close'])
onMounted(() => setTimeout(() => emit('close'), 2800))
</script>
<template>
  <div class="toast" :class="`toast-${props.type}`" role="status">
    <span>{{ props.type === 'success' ? '✓' : '!' }}</span>
    <span>{{ message }}</span>
    <button class="icon-btn" aria-label="Close notification" @click="emit('close')">×</button>
  </div>
</template>
