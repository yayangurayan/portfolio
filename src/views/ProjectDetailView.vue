<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { projects } from '@/data/projects.js'
import BaseButton from '@/components/BaseButton.vue'
import { useLang } from '@/composable/useLang' // PERBAIKAN: Path

const { lang } = useLang()
const route = useRoute()
const projectId = route.params.id

// WDD 3.1: Halaman Detail Proyek (Dinamis)
const project = computed(() => {
  return projects.find((p) => p.id === projectId)
})

// Teks dinamis
const t = computed(() => {
  return {
    back: lang.value === 'id' ? 'Kembali ke Proyek' : 'Back to Projects',
    desc: lang.value === 'id' ? 'Deskripsi Proyek' : 'Project Description',
    problem: lang.value === 'id' ? 'Masalah yang Dihadapi' : 'Problem Faced',
    solution: lang.value === 'id' ? 'Solusi yang Diterapkan' : 'Solution Implemented',
    demo: lang.value === 'id' ? 'Lihat Live Demo' : 'View Live Demo',
    repo: lang.value === 'id' ? 'Repositori Kode' : 'Code Repository',
    errTitle: lang.value === 'id' ? 'Proyek tidak ditemukan' : 'Project not found',
    errDesc:
      lang.value === 'id'
        ? 'Sepertinya proyek yang kamu cari tidak ada.'
        : 'It seems the project you are looking for does not exist.',
    errBtn: lang.value === 'id' ? 'Lihat Proyek Lain' : 'View Other Projects',
  }
})

// Properti proyek yang dinamis
const title = computed(() => project.value?.[`title_${lang.value}`])
const subtitle = computed(() => project.value?.[`subtitle_${lang.value}`])
const description = computed(() => project.value?.[`description_${lang.value}`])
const problem = computed(() => project.value?.[`problem_${lang.value}`])
const solution = computed(() => project.value?.[`solution_${lang.value}`])
</script>

<template>
  <main>
    <div v-if="project" class="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
      <!-- Tombol Kembali -->
      <RouterLink
        to="/projects"
        class="mb-8 inline-flex items-center gap-2 font-poppins text-sm text-text-main/70 transition-colors hover:text-text-main"
      >
        <svg
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        {{ t.back }}
      </RouterLink>

      <!-- Header Proyek -->
      <span class="font-mono text-sm uppercase text-primary">{{ subtitle }}</span>
      <h1
        class="mt-2 font-poppins text-4xl font-bold tracking-tight text-text-main sm:text-5xl"
      >
        {{ title }}
      </h1>

      <!-- Tags -->
      <div class="my-6 flex flex-wrap gap-2">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="rounded-full bg-secondary/10 px-3 py-0.5 font-mono text-xs font-medium text-secondary"
        >
          {{ tag }}
        </span>
      </div>

      <!-- Gambar Utama -->
      <img
        :src="project.imageUrl.replace('600x400', '1200x600')"
        :alt="title"
        class="my-12 w-full rounded-lg border border-text-main/10 object-cover shadow-lg"
      />

      <!-- WDD 3.1: Studi Kasus Mendalam -->
      <div class="prose prose-invert max-w-none prose-h2:font-poppins prose-p:font-sans">
        <h2>{{ t.desc }}</h2>
        <p>{{ description }}</p>

        <h2>{{ t.problem }}</h2>
        <p>{{ problem }}</p>

        <h2>{{ t.solution }}</h2>
        <p>{{ solution }}</p>
      </div>

      <!-- WDD 3.1: Link ke Live Demo & Repositori -->
      <div class="mt-12 flex items-center gap-x-6 border-t border-text-main/10 pt-8">
        <BaseButton :href="project.links.demo" target="_blank" variant="primary">
          {{ t.demo }}
        </BaseButton>
        <BaseButton :href="project.links.repo" target="_blank" variant="outline">
          {{ t.repo }}
        </BaseButton>
      </div>
    </div>

    <!-- Halaman Error jika proyek tidak ditemukan -->
    <div v-else class="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <h1 class="font-poppins text-4xl font-bold text-secondary">404</h1>
      <h2 class="mt-4 font-poppins text-2xl font-semibold text-text-main">
        {{ t.errTitle }}
      </h2>
      <p class="mt-4 text-text-main/70">
        {{ t.errDesc }}
      </p>
      <BaseButton to="/projects" variant="primary" class="mt-8">
        {{ t.errBtn }}
      </BaseButton>
    </div>
  </main>
</template>

<!-- Styling untuk konten studi kasus (WDD 3.1) -->
<style>
/* PERBAIKAN: Menghapus .DEFAULT dan menggunakan sintaks opacity yang benar */
.prose {
  color: theme('colors.text-main');
}
.prose h2 {
  color: theme('colors.text-main');
  font-weight: 600;
  margin-bottom: 0.5em;
  margin-top: 1.5em;
}
.prose p {
  color: theme('colors.text-main / 0.7');
  line-height: 1.7;
}
</style>
