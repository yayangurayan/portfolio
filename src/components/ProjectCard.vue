<script setup>
import { RouterLink } from 'vue-router'
import BaseButton from '@/components/BaseButton.vue'
import { computed } from 'vue'
import { useLang } from '@/composable/useLang' // PERBAIKAN: Path

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})

const { lang } = useLang()

// Teks dinamis berdasarkan bahasa
const title = computed(() => props.project[`title_${lang.value}`])
const description = computed(() => props.project[`description_${lang.value}`])
const ctaText = computed(() => (lang.value === 'id' ? 'Lihat Studi Kasus' : 'View Case Study'))
</script>

<template>
  <article
    class="group relative flex flex-col overflow-hidden rounded-lg border border-text-main/10 bg-background/50 shadow-lg shadow-black/20 transition-all duration-300 hover:border-primary/50 hover:shadow-primary/10"
  >
    <!-- Gambar Proyek -->
    <div class="aspect-video overflow-hidden">
      <img
        :src="project.imageUrl"
        :alt="title"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    <!-- Konten Teks -->
    <div class="flex flex-1 flex-col p-6">
      <!-- Tags/Teknologi -->
      <div class="mb-2 flex flex-wrap gap-2">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="rounded-full bg-primary/10 px-3 py-0.5 font-mono text-xs font-medium text-primary"
        >
          {{ tag }}
        </span>
      </div>
      <!-- Judul -->
      <h3 class="mt-2 font-poppins text-lg font-semibold text-text-main">
        <RouterLink :to="`/projects/${project.id}`" class="focus:outline-none">
          <!-- Overlay link untuk seluruh kartu -->
          <span class="absolute inset-0" aria-hidden="true"></span>
          {{ title }}
        </RouterLink>
      </h3>
      <!-- Deskripsi Singkat -->
      <p class="mt-3 line-clamp-3 flex-1 text-sm text-text-main/70">
        {{ description }}
      </p>

      <!-- Tombol "Baca Lebih" (Muncul di atas overlay) -->
      <div class="mt-6">
        <span
          class="relative z-10 font-poppins text-sm font-semibold text-secondary transition-all group-hover:text-secondary/80"
        >
          {{ ctaText }} &rarr;
        </span>
      </div>
    </div>
  </article>
</template>
