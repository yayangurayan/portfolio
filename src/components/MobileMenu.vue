<script setup>
import { RouterLink } from 'vue-router'
import ThemeToggle from './ThemeToggle.vue'
import LanguageToggle from './LanguageToggle.vue'

defineProps({
  open: {
    type: Boolean,
    required: true,
  },
  navLinks: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['close'])
</script>

<template>
  <!-- PERBAIKAN: Gunakan v-show dan transition untuk animasi slide -->
  <Transition name="slide">
    <div
      v-if="open"
      class="fixed inset-0 z-[100] lg:hidden"
      @click="emit('close')"
      aria-modal="true"
    >
      <!-- Backdrop -->
      <div class="fixed inset-0 bg-background/80 backdrop-blur-md"></div>

      <!-- Panel Menu -->
      <div
        class="fixed right-0 top-0 h-full w-full max-w-xs transform-gpu bg-background p-6 shadow-xl"
        @click.stop
      >
        <!-- Header Menu Mobile -->
        <div class="flex items-center justify-between">
          <RouterLink to="/" class="-m-1.5 p-1.5" @click="emit('close')">
            <span class="font-poppins text-lg font-bold text-text-main">Andrian.</span>
          </RouterLink>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-text-main/70"
            @click="emit('close')"
          >
            <span class="sr-only">Tutup menu</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Links -->
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <RouterLink
                v-for="link in navLinks"
                :key="link.name"
                :to="link.path"
                class="-mx-3 block rounded-lg px-3 py-2 font-poppins text-base font-semibold leading-7 text-text-main transition-colors hover:bg-white/5"
                active-class="bg-primary/10 text-primary"
                @click="emit('close')"
              >
                {{ link.name }}
              </RouterLink>
            </div>
            <!-- PERBAIKAN: Pisahkan toggle -->
            <div class="flex items-center gap-x-4 py-6">
              <ThemeToggle />
              <span class="font-mono text-sm text-text-main/50">Ganti Tema</span>
            </div>
            <div class="flex items-center gap-x-4 py-6">
              <LanguageToggle />
              <span class="font-mono text-sm text-text-main/50">Ganti Bahasa</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
/* Transisi untuk slide menu mobile */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-out;
}
.slide-enter-active > div:first-child,
.slide-leave-active > div:first-child {
  transition: opacity 0.3s ease-out;
}
.slide-enter-active > div:last-child,
.slide-leave-active > div:last-child {
  transition: transform 0.3s ease-out;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
.slide-enter-from > div:first-child,
.slide-leave-to > div:first-child {
  opacity: 0;
}
.slide-enter-from > div:last-child,
.slide-leave-to > div:last-child {
  transform: translateX(100%);
}
</style>
