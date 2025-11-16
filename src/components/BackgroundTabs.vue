<script setup>
import { ref, computed } from 'vue'
import BackgroundItem from './BackgroundItem.vue'
import { useLang } from '@/composable/useLang' // PERBAIKAN: Path

const { lang } = useLang()

const activeTab = ref('experience') // Default tab

// Data Tab dinamis
const tabsData = {
  id: [
    { id: 'experience', name: 'Pengalaman' },
    { id: 'education', name: 'Pendidikan' },
    { id: 'certifications', name: 'Sertifikasi' },
  ],
  en: [
    { id: 'experience', name: 'Experience' },
    { id: 'education', name: 'Education' },
    { id: 'certifications', name: 'Certifications' },
  ],
}
const tabs = computed(() => tabsData[lang.value])

// Data dinamis (i18n)
const experienceData = {
  id: [
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
  ],
  en: [
    {
      date: 'Oct 2024 - Present',
      title: 'President Director',
      subtitle: 'GIBEI UNIMED (Indonesia Stock Exchange Investment Gallery)',
      points: [
        'Led over 20 members in the campus investor education division.',
        'Organized 5+ financial literacy events reaching over 300 students.',
        'Improved event budget efficiency by 30%.',
        'Contributed to the creation of a Capital Market School program for students.',
      ],
    },
    {
      date: 'Aug 2024 - Oct 2024',
      title: 'Volunteer - Stocklab Competition Crew',
      subtitle: 'Youth Investment Competition (Unimed x Microskill x UMI)',
      points: [
        'Assisted in the execution of inter-campus stocklab competition involving 100+ participants.',
        'Supported technical setup, participant coordination, and timekeeping during the event.',
        'Ensured smooth competition flow under tight schedules and a collaborative cross-campus team.',
      ],
    },
  ],
}
const educationData = {
  id: [
    {
      date: 'Jun 2027 (Diharapkan)',
      title: 'S1 Bisnis Digital',
      subtitle: 'Universitas Negeri Medan (IPK: 3.86)',
      points: [
        'Fokus pada transformasi digital, aplikasi solusi digital untuk UMKM, dan analisis pasar modal.',
        'Mengembangkan pemahaman mendalam tentang bagaimana teknologi dapat meningkatkan efisiensi dan daya saing bisnis.',
      ],
    },
  ],
  en: [
    {
      date: 'June 2027 (Expected)',
      title: "Bachelor's Degree in Digital Business",
      subtitle: 'Universitas Negeri Medan (GPA: 3.86)',
      points: [
        'Focused on digital transformation, digital solutions for MSMEs, and capital market analysis.',
        'Developing a deep understanding of how technology can enhance business efficiency and competitiveness.',
      ],
    },
  ],
}
const certificationData = {
  id: [
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
  ],
  en: [
    {
      date: '2025',
      title: 'Capital Market School - Indonesia Stock Exchange',
      subtitle: 'Indonesia Stock Exchange (IDX)',
      points: [
        'Studied capital market instruments, investment strategies, and technical and fundamental analysis for financial decision-making.',
      ],
    },
    {
      date: '2024',
      title: 'Public Lecture on Financial System Stability and Macroprudential Policy',
      subtitle: 'Bank Indonesia Journals',
      points: [
        'Gained insights into the role of monetary policy and the national financial system, essential for understanding macroeconomic contexts in digital business strategy.',
      ],
    },
  ],
}

// Computed properties untuk data dinamis
const currentExperienceData = computed(() => experienceData[lang.value])
const currentEducationData = computed(() => educationData[lang.value])
const currentCertificationData = computed(() => certificationData[lang.value])
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
            v-for="(item, index) in currentExperienceData"
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
            v-for="(item, index) in currentEducationData"
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
            v-for="(item, index) in currentCertificationData"
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
