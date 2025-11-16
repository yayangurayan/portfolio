<script setup>
import SkillBar from '@/components/SkillBar.vue'
import { computed } from 'vue'
import { useLang } from '@/composables/useLang'

const { lang } = useLang()

// Data Hard Skills (Teknis & Finansial) - WDD 3.1 & CV
const hardSkillCategoriesData = {
  id: [
    {
      name: 'Front-end & Web Development',
      skills: [
        { name: 'Vue.js', level: 80 },
        { name: 'JavaScript (ES6+)', level: 75 },
        { name: 'HTML5', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'CSS3', level: 70 },
      ],
    },
    {
      name: 'Programming & Finansial Tools',
      skills: [
        { name: 'C#', level: 65 },
        { name: 'Unity', level: 60 },
        { name: 'TradingView', level: 90 },
        { name: 'Analisis Pasar Modal', level: 85 },
        { name: 'Microsoft Office', level: 95 },
      ],
    },
  ],
  en: [
    {
      name: 'Front-end & Web Development',
      skills: [
        { name: 'Vue.js', level: 80 },
        { name: 'JavaScript (ES6+)', level: 75 },
        { name: 'HTML5', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'CSS3', level: 70 },
      ],
    },
    {
      name: 'Programming & Financial Tools',
      skills: [
        { name: 'C#', level: 65 },
        { name: 'Unity', level: 60 },
        { name: 'TradingView', level: 90 },
        { name: 'Capital Market Analysis', level: 85 },
        { name: 'Microsoft Office', level: 95 },
      ],
    },
  ],
}

// Data Soft Skills - CV
const softSkillsData = {
  id: [
    {
      name: 'Leadership (Kepemimpinan)',
      desc: 'Terbukti memimpin GIBEI UNIMED dengan 20+ anggota dan mengelola berbagai acara berskala besar.',
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372m-1.757-4.128a3.375 3.375 0 00-3.375-3.375h-1.5a3.375 3.375 0 00-3.375 3.375m9.75 0a9 9 0 01-9.75 0m9.75 0a3.375 3.375 0 01-3.375 3.375h-1.5a3.375 3.375 0 01-3.375-3.375m9.75 0c0 .621-.504 1.125-1.125 1.125v-2.25c.621 0 1.125.504 1.125 1.125z" />`,
    },
    {
      name: 'Public Speaking',
      desc: 'Berpengalaman dalam mengorganisir dan berbicara di 5+ acara literasi keuangan untuk 300+ audiens.',
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 11l5-3 5 3m-5 5v-5" />`,
    },
    {
      name: 'Problem Solving',
      desc: 'Merancang dan mengimplementasikan solusi teknis seperti Tapstok, mengurangi error inventaris hingga 70%.',
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />`,
    },
  ],
  en: [
    {
      name: 'Leadership',
      desc: 'Proven experience leading GIBEI UNIMED with 20+ members and managing various large-scale events.',
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372m-1.757-4.128a3.375 3.375 0 00-3.375-3.375h-1.5a3.375 3.375 0 00-3.375 3.375m9.75 0a9 9 0 01-9.75 0m9.75 0a3.375 3.375 0 01-3.375 3.375h-1.5a3.375 3.375 0 01-3.375-3.375m9.75 0c0 .621-.504 1.125-1.125 1.125v-2.25c.621 0 1.125.504 1.125 1.125z" />`,
    },
    {
      name: 'Public Speaking',
      desc: 'Experienced in organizing and speaking at 5+ financial literacy events for 300+ audiences.',
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 11l5-3 5 3m-5 5v-5" />`,
    },
    {
      name: 'Problem Solving',
      desc: 'Designed and implemented technical solutions like Tapstok, reducing inventory errors by up to 70%.',
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />`,
    },
  ],
}

// Data Bahasa - CV
const languagesData = {
  id: [
    { name: 'Bahasa Indonesia', level: 'Native' },
    { name: 'English', level: 'Fluent (Professional)' },
  ],
  en: [
    { name: 'Indonesian', level: 'Native' },
    { name: 'English', level: 'Fluent (Professional)' },
  ],
}

// Teks dinamis
const t = computed(() => {
  return {
    span: lang.value === 'id' ? 'Keahlian Saya' : 'My Arsenal',
    title: lang.value === 'id' ? 'Tumpukan Teknologi & Keahlian' : 'Tech Stack & Expertise',
    desc:
      lang.value === 'id'
        ? 'Kumpulan keahlian teknis, finansial, dan soft skills yang saya kuasai untuk menciptakan solusi yang efektif dan berbasis data.'
        : 'A collection of technical, financial, and soft skills I leverage to create effective, data-driven solutions.',
    softTitle:
      lang.value === 'id'
        ? 'Keahlian Interpersonal & Bahasa'
        : 'Interpersonal Skills & Languages',
    langTitle: lang.value === 'id' ? 'Bahasa' : 'Languages',
  }
})

// Data dinamis
const hardSkillCategories = computed(() => hardSkillCategoriesData[lang.value])
const softSkills = computed(() => softSkillsData[lang.value])
const languages = computed(() => languagesData[lang.value])
</script>

<template>
  <main>
    <div class="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <!-- Judul Halaman -->
      <div class="mb-16 max-w-3xl">
        <span class="font-mono text-sm uppercase text-primary">{{ t.span }}</span>
        <h1 class="mt-2 font-poppins text-4xl font-bold tracking-tight text-text-main sm:text-5xl">
          {{ t.title }}
        </h1>
        <p class="mt-4 text-lg text-text-main/70">
          {{ t.desc }}
        </p>
      </div>

      <!-- Bagian Hard Skills (WDD 3.2 Visualisasi) -->
      <div class="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2">
        <div v-for="category in hardSkillCategories" :key="category.name">
          <h2 class="mb-6 font-poppins text-xl font-semibold text-text-main">
            {{ category.name }}
          </h2>
          <dl class="space-y-6">
            <SkillBar
              v-for="skill in category.skills"
              :key="skill.name"
              :name="skill.name"
              :level="skill.level"
            />
          </dl>
        </div>
      </div>

      <!-- Pemisah -->
      <div class="my-24 h-px w-full bg-text-main/10"></div>

      <!-- Bagian Soft Skills & Bahasa -->
      <div>
        <h2 class="mb-12 text-center font-poppins text-3xl font-bold text-text-main">
          {{ t.softTitle }}
        </h2>
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <!-- Soft Skills -->
          <div
            v-for="skill in softSkills"
            :key="skill.name"
            class="rounded-xl border border-white/10 bg-background/50 p-6"
          >
            <div
              class="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary"
            >
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                v-html="skill.icon"
              ></svg>
            </div>
            <h3 class="mt-4 font-poppins text-lg font-semibold text-text-main">
              {{ skill.name }}
            </h3>
            <p class="mt-2 text-sm text-text-main/70">{{ skill.desc }}</p>
          </div>
        </div>

        <!-- Bahasa -->
        <div class="mt-12">
          <h3 class="mb-4 text-center font-poppins text-xl font-semibold text-text-main">
            {{ t.langTitle }}
          </h3>
          <div class="flex justify-center gap-8">
            <div v-for="lang in languages" :key="lang.name" class="text-center">
              <p class="font-poppins text-lg text-text-main">{{ lang.name }}</p>
              <span class="font-mono text-sm text-secondary">{{ lang.level }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
