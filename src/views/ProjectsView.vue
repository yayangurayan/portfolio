<script setup>
import { ref, computed } from 'vue'
import { projects } from '@/data/projects.js'
import ProjectCard from '@/components/ProjectCard.vue'

// Kumpulkan semua tag unik untuk filter
const allTags = [...new Set(projects.flatMap((p) => p.tags))]
const activeFilter = ref('All') // Filter default

// WDD 3.1: Sistem filter berdasarkan teknologi
const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') {
    return projects
  }
  return projects.filter((p) => p.tags.includes(activeFilter.value))
})

// Fungsi untuk meng-handle klik filter
function setFilter(tag) {
  activeFilter.value = tag
}
</script>

<template>
  <main>
    <div class="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <!-- Judul Halaman -->
      <div class="mb-16 max-w-3xl">
        <span class="font-mono text-sm uppercase text-primary">Portofolio Saya</span>
        <h1 class="mt-2 font-poppins text-4xl font-bold tracking-tight text-text-main sm:text-5xl">
          Galeri Proyek
        </h1>
        <p class="mt-4 text-lg text-text-main/70">
          Kumpulan studi kasus, eksperimen, dan solusi yang telah saya bangun.
        </p>
      </div>

      <!-- Tombol Filter (WDD 3.1) -->
      <div class="mb-12 flex flex-wrap gap-2">
        <button
          @click="setFilter('All')"
          :class="[
            'rounded-full px-4 py-1.5 font-mono text-sm font-medium transition-colors',
            activeFilter === 'All'
              ? 'bg-primary text-white'
              : 'bg-text-main/5 text-text-main/70 hover:bg-text-main/10 hover:text-text-main',
          ]"
        >
          All
        </button>
        <button
          v-for="tag in allTags"
          :key="tag"
          @click="setFilter(tag)"
          :class="[
            'rounded-full px-4 py-1.5 font-mono text-sm font-medium transition-colors',
            activeFilter === tag
              ? 'bg-primary text-white'
              : 'bg-text-main/5 text-text-main/70 hover:bg-text-main/10 hover:text-text-main',
          ]"
        >
          {{ tag }}
        </button>
      </div>

      <!-- Galeri Proyek (Grid) -->
      <div class="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard v-for="project in filteredProjects" :key="project.id" :project="project" />
      </div>

      <!-- Pesan jika filter tidak ada hasil -->
      <div
        v-if="filteredProjects.length === 0"
        class="mt-12 text-center text-text-main/70"
      >
        <p>Tidak ada proyek yang ditemukan dengan tag "{{ activeFilter }}".</p>
      </div>
    </div>
  </main>
</template>
