<script setup>
import BackgroundTabs from '@/components/BackgroundTabs.vue'
import { computed } from 'vue'
import { useLang } from '@/composable/useLang' // PERBAIKAN: Path

const { lang } = useLang()

const t = computed(() => {
  return {
    span: lang.value === 'id' ? 'Perjalanan Saya' : 'My Journey',
    title: lang.value === 'id' ? 'Latar Belakang Saya' : 'My Background',
    desc:
      lang.value === 'id'
        ? 'Perjalanan profesional, akademis, dan sertifikasi yang telah membentuk keahlian saya.'
        : 'The professional, academic, and certification journey that has shaped my expertise.',
  }
})
</script>

<template>
  <main>
    <div class="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <!-- Judul Halaman -->
      <div class="mb-12 max-w-3xl">
        <span class="font-mono text-sm uppercase text-primary">{{ t.span }}</span>
        <h1
          class="mt-2 font-poppins text-4xl font-bold tracking-tight text-text-main sm:text-5xl"
        >
          {{ t.title }}
        </h1>
        <p class="mt-4 text-lg text-text-main/70">
          {{ t.desc }}
        </p>
      </div>

      <!-- Komponen Tab -->
      <BackgroundTabs />
    </div>
  </main>
</template>
