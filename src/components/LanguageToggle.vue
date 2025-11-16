<script setup>
import { useLang } from '@/composables/useLang'
import { computed } from 'vue'

const { lang } = useLang()

// Tampilkan bahasa yang *tidak* aktif
const nextLang = computed(() => (lang.value === 'id' ? 'EN' : 'ID'))

function toggleLang() {
  lang.value = lang.value === 'id' ? 'en' : 'id'
}
</script>

<template>
  <button
    @click="toggleLang"
    class="flex h-8 w-8 items-center justify-center rounded-full border border-text-main/20 text-sm font-medium text-text-main/70 transition-colors hover:text-text-main"
    aria-label="Toggle language"
  >
    {{ nextLang }}
  </button>
</template>
