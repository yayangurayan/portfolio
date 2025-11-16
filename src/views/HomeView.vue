<script setup>
import BaseButton from '@/components/BaseButton.vue'
import ProjectCard from '@/components/ProjectCard.vue' // Import ProjectCard
import { ref } from 'vue'
import { useTransition, TransitionPresets } from '@vueuse/core'
import { projects } from '@/data/projects.js' // Import data proyek

// --- Animasi Sederhana untuk Teks (WDD 3.2) ---
const countOne = ref(0)
const outputOne = useTransition(countOne, {
  duration: 1500,
  transition: TransitionPresets.easeOutCubic,
})
countOne.value = 1

// Ambil 3 proyek unggulan (WDD 3.1)
const featuredProjects = projects.filter((p) => p.featured).slice(0, 3)

const countThree = ref(0)
const outputThree = useTransition(countThree, {
  duration: 1500,
  transition: TransitionPresets.easeOutCubic,
})
countThree.value = featuredProjects.length // Set ke jumlah proyek unggulan

// Data untuk social links
const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/yayangurayan', icon: 'GH' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/andrian-kho-947a97264', icon: 'IN' },
]
</script>

<template>
  <main>
    <!-- Hero Section (WDD 3.1 & 7.1) -->
    <section class="relative overflow-hidden py-24 sm:py-32">
      <div class="mx-auto grid max-w-7xl grid-cols-1 gap-x-16 gap-y-10 px-6 lg:grid-cols-2 lg:px-8">
        <!-- Kolom Teks (Kiri) -->
        <div class="flex flex-col justify-center">
          <span class="mb-2 font-mono text-sm font-medium text-primary">Andrian.</span>
          <h1 class="font-poppins text-4xl font-bold tracking-tight text-text-main sm:text-6xl">
            Dari ide kompleks menjadi
            <span class="text-secondary">kode yang elegan.</span>
          </h1>
          <p class="mt-6 font-poppins text-lg leading-8 text-text-main/70">
            Mahasiswa. Programmer. Analis.
            <br />
            Siap untuk tantangan berikutnya.
          </p>
          <div class="mt-10 flex items-center gap-x-6">
            <BaseButton to="/contact" variant="primary">Hubungi Saya</BaseButton>
            <BaseButton to="/projects" variant="outline">Lihat Proyek &rarr;</BaseButton>
          </div>
          <div class="mt-12 flex items-center gap-x-6">
            <span class="font-mono text-sm text-text-main/50">Terhubung:</span>
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="flex h-8 w-8 items-center justify-center rounded-full border border-text-main/30 text-sm text-text-main/70 transition-colors hover:border-primary hover:bg-primary/10 hover:text-primary"
            >
              <span class="sr-only">{{ social.name }}</span>
              <span class="font-mono text-xs">{{ social.icon }}</span>
            </a>
          </div>
        </div>

        <!-- Kolom Visual (Kanan) -->
        <div class="relative flex items-center justify-center">
          <div
            class="aspect-[4/5] w-full max-w-sm rounded-2xl border-2 border-primary/20 bg-background p-4 shadow-2xl shadow-primary/10"
          >
            <div
              class="flex h-full w-full items-center justify-center rounded-lg border border-dashed border-text-main/30"
            >
              <span class="text-text-main/50">[Visual Keren Hadir Di Sini]</span>
            </div>
          </div>
          <div
            class="absolute -bottom-10 -left-10 hidden rounded-xl border border-white/10 bg-background/80 p-4 backdrop-blur-md sm:block"
          >
            <p class="font-poppins text-sm font-medium text-text-main/70">Pengalaman Organisasi</p>
            <p class="font-poppins text-4xl font-bold text-primary">{{ Math.floor(outputOne) }}+</p>
            <p class="font-mono text-xs text-text-main/50">Tahun Memimpin GIBEI</p>
          </div>
          <div
            class="absolute -right-10 -top-10 hidden rounded-xl border border-white/10 bg-background/80 p-4 backdrop-blur-md sm:block"
          >
            <p class="font-poppins text-sm font-medium text-text-main/70">Proyek Unggulan</p>
            <p class="font-poppins text-4xl font-bold text-secondary">
              {{ Math.floor(outputThree) }}
            </p>
            <p class="font-mono text-xs text-text-main/50">Telah Selesai</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Proyek Unggulan (WDD 3.1) - Sekarang diisi -->
    <section class="bg-text-main/5 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="max-w-2xl">
          <span class="font-mono text-sm uppercase text-primary">Portofolio</span>
          <h2 class="mt-2 font-poppins text-3xl font-bold tracking-tight text-text-main sm:text-4xl">
            Proyek Unggulan
          </h2>
          <p class="mt-4 text-lg text-text-main/70">
            Beberapa studi kasus pilihan yang menunjukkan keahlian saya dalam memecahkan masalah.
          </p>
        </div>
        <!-- Grid Proyek Unggulan -->
        <div
          class="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3"
        >
          <ProjectCard
            v-for="project in featuredProjects"
            :key="project.id"
            :project="project"
          />
        </div>
      </div>
    </section>
  </main>
</template>
