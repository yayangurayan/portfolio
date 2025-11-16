<script setup>
import { RouterLink } from 'vue-router'
import { computed } from 'vue'

const props = defineProps({
  to: {
    type: String,
    default: null,
  },
  href: {
    type: String,
    default: null,
  },
  variant: {
    type: String,
    default: 'primary', // 'primary' atau 'outline'
  },
  target: {
    type: String,
    default: null,
  },
})

const baseClasses =
  'inline-block rounded-md px-4 py-2 text-sm font-poppins font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background'

const variantClasses = computed(() => {
  if (props.variant === 'primary') {
    return 'bg-primary text-white hover:bg-primary/90 focus:ring-primary'
  }
  if (props.variant === 'outline') {
    return 'border border-text-main/50 text-text-main hover:border-text-main hover:text-text-main focus:ring-text-main'
  }
  return ''
})

const componentType = computed(() => {
  if (props.to) return RouterLink
  if (props.href) return 'a'
  return 'button'
})
</script>

<template>
  <component :is="componentType" :to="to" :href="href" :target="target" :class="[baseClasses, variantClasses]">
    <slot />
  </component>
</template>
