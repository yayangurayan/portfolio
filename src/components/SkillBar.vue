<script setup>
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    required: true,
  },
})

const bar = ref(null)
const isVisible = ref(false)

// WDD 3.2: Animasi Scroll
// Gunakan useIntersectionObserver untuk mendeteksi kapan elemen masuk ke viewport
const { stop } = useIntersectionObserver(
  bar,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      isVisible.value = true
      stop() // Hentikan observasi setelah animasi ter-trigger
    }
  },
  {
    threshold: 0.25, // Trigger saat 25% elemen terlihat
  }
)
</script>

<template>
  <div ref="bar" class="w-full">
    <!-- Label Skill dan Persentase -->
    <div class="mb-1 flex justify-between">
      <span class="font-poppins text-sm font-medium text-text-main">{{ name }}</span>
      <span class="font-mono text-sm font-medium text-text-main/70">{{ level }}%</span>
    </div>
    <!-- Latar Belakang Bar -->
    <div class="h-2 w-full overflow-hidden rounded-full bg-text-main/10">
      <!-- Bar Persentase (foreground) -->
      <div
        class="h-2 rounded-full bg-secondary shadow-lg shadow-secondary/30 transition-all duration-1000 ease-out"
        :style="{ width: isVisible ? `${level}%` : '0%' }"
      ></div>
    </div>
  </div>
</template>
