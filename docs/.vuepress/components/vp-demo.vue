<template>
  <ClientOnly>
    <p text="sm" v-html="decodedDescription" />
  </ClientOnly>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  description: String
})
const decodedDescription = computed(() => decodeURIComponent(props.description))
</script>
