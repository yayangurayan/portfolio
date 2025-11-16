<script setup>
import BaseButton from '@/components/BaseButton.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import { ref, computed } from 'vue' // Import computed
import { useTransition, TransitionPresets } from '@vueuse/core'
import { projects } from '@/data/projects.js'
import { useLang } from '@/composables/useLang' // Import

const { lang } = useLang() // Gunakan

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
  {
    name: 'GitHub',
    href: 'https://github.com/yayangurayan',
    icon: `<path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />`,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/andrian-kho-947a97264',
    icon: `<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />`,
  },
]

// Teks dinamis
const t = computed(() => {
  return {
    slogan:
      lang.value === 'id'
        ? 'Dari ide kompleks menjadi'
        : 'From complex ideas into',
    sloganHighlight: lang.value === 'id' ? 'kode yang elegan.' : 'elegant code.',
    subtitle:
      lang.value === 'id'
        ? 'Mahasiswa. Programmer. Analis.<br />Siap untuk tantangan berikutnya.'
        : 'Student. Programmer. Analyst.<br />Ready for the next challenge.',
    ctaContact: lang.value === 'id' ? 'Hubungi Saya' : 'Contact Me',
    ctaProjects: lang.value === 'id' ? 'Lihat Proyek' : 'View Projects',
    connect: lang.value === 'id' ? 'Terhubung:' : 'Connect:',
    orgExp: lang.value === 'id' ? 'Pengalaman Organisasi' : 'Organizational Experience',
    orgLead: lang.value === 'id' ? 'Tahun Memimpin GIBEI' : 'Year Leading GIBEI',
    featuredCount: lang.value === 'id' ? 'Proyek Unggulan' : 'Featured Projects',
    featuredDone: lang.value === 'id' ? 'Telah Selesai' : 'Completed',
    featuredTitle: lang.value === 'id' ? 'Proyek Unggulan' : 'Featured Projects',
    featuredSubtitle:
      lang.value === 'id'
        ? 'Beberapa studi kasus pilihan yang menunjukkan keahlian saya dalam memecahkan masalah.'
        : 'A selection of case studies showcasing my problem-solving skills.',
  }
})
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
            {{ t.slogan }}
            <span class="text-secondary">{{ t.sloganHighlight }}</span>
          </h1>
          <!-- Sub-headline / Persona (WDD 7.1 & CV Summary) -->
          <p class="mt-6 font-poppins text-lg leading-8 text-text-main/70" v-html="t.subtitle"></p>
          <!-- Tombol CTA (WDD 1.4 & 3.1) -->
          <div class="mt-10 flex items-center gap-x-6">
            <BaseButton to="/contact" variant="primary">{{ t.ctaContact }}</BaseButton>
            <BaseButton to="/projects" variant="outline">{{ t.ctaProjects }} &rarr;</BaseButton>
          </div>
          <!-- Social Links (WDD 3.1) -->
          <div class="mt-12 flex items-center gap-x-6">
            <span class="font-mono text-sm text-text-main/50">{{ t.connect }}</span>
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="flex h-8 w-8 items-center justify-center rounded-full border border-text-main/30 text-text-main/70 transition-colors hover:border-primary hover:bg-primary/10 hover:text-primary"
            >
              <span class="sr-only">{{ social.name }}</span>
              <!-- Ikon SVG Asli -->
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" v-html="social.icon"></svg>
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
            <p class="font-poppins text-sm font-medium text-text-main/70">{{ t.orgExp }}</p>
            <p class="font-poppins text-4xl font-bold text-primary">{{ Math.floor(outputOne) }}+</p>
            <p class="font-mono text-xs text-text-main/50">{{ t.orgLead }}</p>
          </div>
          <div
            class="absolute -right-10 -top-10 hidden rounded-xl border border-white/10 bg-background/80 p-4 backdrop-blur-md sm:block"
          >
            <p class="font-poppins text-sm font-medium text-text-main/70">{{ t.featuredCount }}</p>
            <p class="font-poppins text-4xl font-bold text-secondary">
              {{ Math.floor(outputThree) }}
            </p>
            <p class="font-mono text-xs text-text-main/50">{{ t.featuredDone }}</p>
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
            {{ t.featuredTitle }}
          </h2>
          <p class="mt-4 text-lg text-text-main/70">
            {{ t.featuredSubtitle }}
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
