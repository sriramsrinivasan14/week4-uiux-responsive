<script setup>
defineProps({ modelValue: String })
defineEmits(['update:modelValue'])
</script>
<template>
  <label class="search-box">
    <span aria-hidden="true">⌕</span>
    <input :value="modelValue" type="search" placeholder="Search products..." aria-label="Search products" @input="$emit('update:modelValue', $event.target.value)">
  </label>
</template>
