<script setup>
import { ref } from 'vue'
import BackgroundItem from './BackgroundItem.vue'

const activeTab = ref('experience') // Default tab

const tabs = [
  { id: 'experience', name: 'Pengalaman' },
  { id: 'education', name: 'Pendidikan' },
  { id: 'certifications', name: 'Sertifikasi' },
]

// Data diambil dari CV (My CV.pdf)
const experienceData = [
  {
    date: 'Okt 2024 - Sekarang',
    title: 'President Director',
    subtitle: 'GIBEI UNIMED (Galeri Investasi Bursa Efek Indonesia)',
    points: [
      'Memimpin lebih dari 20 anggota di divisi edukasi investor kampus.',
      'Mengorganisir 5+ acara literasi keuangan yang menjangkau lebih dari 300 mahasiswa.',
      'Meningkatkan efisiensi anggaran acara sebesar 30%.',
      'Berkontribusi dalam pembuatan program Sekolah Pasar Modal untuk mahasiswa.',
    ],
  },
  {
    date: 'Agu 2024 - Okt 2024',
    title: 'Volunteer - Stocklab Competition Crew',
    subtitle: 'Kompetisi Investasi Muda (Unimed x Microskill x UMI)',
    points: [
      'Membantu pelaksanaan kompetisi stocklab antarkampus yang melibatkan 100+ peserta.',
      'Mendukung penyiapan teknis, koordinasi peserta, dan pencatatan waktu selama acara.',
      'Memastikan kelancaran kompetisi di bawah jadwal yang padat dan tim kolaboratif lintas kampus.',
    ],
  },
]

const educationData = [
  {
    date: 'Jun 2027 (Diharapkan)',
    title: 'S1 Bisnis Digital',
    subtitle: 'Universitas Negeri Medan (IPK: 3.86)',
    points: [
      'Fokus pada transformasi digital, aplikasi solusi digital untuk UMKM, dan analisis pasar modal.',
      'Mengembangkan pemahaman mendalam tentang bagaimana teknologi dapat meningkatkan efisiensi dan daya saing bisnis.',
    ],
  },
]

const certificationData = [
  {
    date: '2025',
    title: 'Sekolah Pasar Modal - Bursa Efek Indonesia',
    subtitle: 'Bursa Efek Indonesia (Indonesia Stock Exchange)',
    points: [
      'Mempelajari instrumen pasar modal, strategi investasi, serta analisis teknikal dan fundamental untuk pengambilan keputusan finansial.',
    ],
  },
  {
    date: '2024',
    title: 'Kuliah Umum Stabilitas Sistem Keuangan dan Kebijakan Makroprudensial',
    subtitle: 'Jurnal Bank Indonesia',
    points: [
      'Memperoleh wawasan tentang peran kebijakan moneter dan sistem keuangan nasional, penting untuk memahami konteks makroekonomi dalam strategi bisnis digital.',
    ],
  },
]
</script>

<template>
  <div class="w-full">
    <!-- Tombol Tab -->
    <div class="mb-8 border-b border-text-main/10">
      <nav class="-mb-px flex space-x-8" aria-label="Tabs">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="activeTab = tab.id"
          :class="[
            activeTab === tab.id
              ? 'border-primary text-primary'
              : 'border-transparent text-text-main/50 hover:border-text-main/30 hover:text-text-main',
            'whitespace-nowrap border-b-2 px-1 py-4 font-poppins text-sm font-semibold transition-colors',
          ]"
        >
          {{ tab.name }}
        </button>
      </nav>
    </div>

    <!-- Konten Tab -->
    <div class="transition-opacity duration-300">
      <!-- Panel Pengalaman -->
      <div v-if="activeTab === 'experience'">
        <ol class="relative space-y-8">
          <BackgroundItem
            v-for="(item, index) in experienceData"
            :key="`exp-${index}`"
            :date="item.date"
            :title="item.title"
            :subtitle="item.subtitle"
            :points="item.points"
          />
        </ol>
      </div>

      <!-- Panel Pendidikan -->
      <div v-if="activeTab === 'education'">
        <ol class="relative space-y-8">
          <BackgroundItem
            v-for="(item, index) in educationData"
            :key="`edu-${index}`"
            :date="item.date"
            :title="item.title"
            :subtitle="item.subtitle"
            :points="item.points"
          />
        </ol>
      </div>

      <!-- Panel Sertifikasi -->
      <div v-if="activeTab === 'certifications'">
        <ol class="relative space-y-8">
          <BackgroundItem
            v-for="(item, index) in certificationData"
            :key="`cert-${index}`"
            :date="item.date"
            :title="item.title"
            :subtitle="item.subtitle"
            :points="item.points"
          />
        </ol>
      </div>
    </div>
  </div>
</template>
