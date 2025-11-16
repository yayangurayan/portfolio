<script setup>
import BaseButton from '@/components/BaseButton.vue'

// Data untuk Filosofi Kerja (WDD 3.1 & CV Soft Skills)
const principles = [
  {
    name: 'Inovasi Praktis',
    description:
      'Saya fokus pada solusi nyata. Baik itu membangun sistem NFC untuk UMKM (Tapstok) atau platform tiket, tujuannya adalah mengurangi inefisiensi dan memberikan dampak langsung.',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.31a15.96 15.96 0 01-3.75 0m3.75 0a15.96 15.96 0 00-3.75 0m6.75-4.5C15 12 12 14.083 12 14.083s-3-2.083-3-2.083m6 0a3 3 0 100-6 3 3 0 000 6z" />`,
  },
  {
    name: 'Pendekatan Analitis',
    description:
      'Pengalaman di pasar modal (GIBEI & Sertifikasi BEI) mengajari saya bahwa keputusan terbaik adalah yang berbasis data. Saya menerapkan pola pikir analitis ini dalam *coding* dan strategi bisnis.',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h12A2.25 2.25 0 0020.25 14.25V3m-16.5 0h16.5m-16.5 0A2.25 2.25 0 001.5 5.25v9A2.25 2.25 0 003.75 16.5m16.5-13.5A2.25 2.25 0 0122.5 5.25v9a2.25 2.25 0 01-2.25 2.25m0-13.5H3.75" />`,
  },
  {
    name: 'Kepemimpinan & Integritas',
    description:
      'Sebagai Presiden GIBEI, saya memegang teguh nilai integritas, disiplin, dan tanggung jawab. Saya memimpin dengan memberi contoh dan berdedikasi pada kesuksesan tim.',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372m-1.757-4.128a3.375 3.375 0 00-3.375-3.375h-1.5a3.375 3.375 0 00-3.375 3.375m9.75 0a9 9 0 01-9.75 0m9.75 0a3.375 3.375 0 01-3.375 3.375h-1.5a3.375 3.375 0 01-3.375-3.375m9.75 0c0 .621-.504 1.125-1.125 1.125v-2.25c.621 0 1.125.504 1.125 1.125z" />`,
  },
]
</script>

<template>
  <main>
    <!-- Bagian 1: Header & Intro -->
    <div class="relative overflow-hidden py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <!-- Kolom Teks -->
          <div>
            <span class="font-mono text-sm uppercase text-primary">Tentang Saya</span>
            <h1 class="mt-2 font-poppins text-4xl font-bold tracking-tight text-text-main sm:text-5xl">
              Menjembatani Teknologi, Analisis Data, dan Strategi Bisnis.
            </h1>
            <p class="mt-6 text-lg leading-8 text-text-main/70">
              Saya adalah seorang talenta teknis yang langka: programmer yang presisi, analis yang
              tajam, dan individu yang sangat termotivasi.
              <span class="font-bold text-secondary">(WDD 1.3)</span>
            </p>

            <!-- Biografi Mendalam (WDD 3.1 & CV Summary) -->
            <div class="mt-8 space-y-6 text-base leading-7 text-text-main/90">
              <p>
                Saat ini, saya adalah mahasiswa Bisnis Digital di Universitas Negeri Medan. Gairah
                saya terletak pada persimpangan antara teknologi dan bisnis, dengan misi khusus:
                mendorong transformasi digital di Indonesia, terutama untuk Usaha Mikro, Kecil, dan
                Menengah (UMKM).
              </p>
              <p>
                Misi ini saya wujudkan melalui keahlian teknis saya. Sebagai seorang
                <strong class="font-semibold text-text-main">programmer</strong>, saya fokus
                membangun aplikasi yang fungsional dan elegan. Proyek seperti Tapstok (sistem stok
                NFC) adalah bukti nyata bagaimana saya menerapkan teknologi untuk memecahkan masalah
                efisiensi di dunia nyata.
              </p>
              <p>
                Namun, membangun solusi saja tidak cukup. Di sinilah persona saya yang lain
                berperan: sebagai seorang
                <strong class="font-semibold text-text-main">analis</strong>. Ketertarikan mendalam
                saya pada analisis pasar modal, yang diasah melalui kepemimpinan di GIBEI UNIMED dan
                sertifikasi BEI, telah melatih saya untuk berpikir strategis dan mengambil keputusan
                berbasis data. Saya tidak hanya membangun; saya menganalisis 'mengapa' di baliknya.
              </p>
            </div>
          </div>

          <!-- Kolom Gambar -->
          <div class="flex items-center justify-center">
            <img
              src="https://placehold.co/600x600/8B5CF6/111827?text=Foto+Profesional\n(1:1)"
              alt="Foto Andrian"
              class="w-full max-w-md rounded-2xl object-cover shadow-2xl shadow-primary/20"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Bagian 2: Filosofi Kerja (WDD 3.1) -->
    <div class="bg-text-main/5 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
          <span class="font-mono text-sm uppercase text-primary">Filosofi Saya</span>
          <h2 class="mt-2 font-poppins text-3xl font-bold tracking-tight text-text-main sm:text-4xl">
            Pendekatan Saya dalam Bekerja
          </h2>
          <p class="mt-6 text-lg leading-8 text-text-main/70">
            Saya memegang tiga nilai inti yang membimbing setiap proyek dan kolaborasi yang saya
            lakukan.
          </p>
        </div>
        <div
          class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          <div
            v-for="principle in principles"
            :key="principle.name"
            class="flex flex-col rounded-xl border border-white/10 bg-background/50 p-6"
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
                aria-hidden="true"
                v-html="principle.icon"
              ></svg>
            </div>
            <h3 class="mt-4 font-poppins text-lg font-semibold text-text-main">
              {{ principle.name }}
            </h3>
            <p class="mt-2 flex-1 text-sm text-text-main/70">
              {{ principle.description }}
            </p>
          </div>
        </div>

        <!-- CTA di Bawah Halaman -->
        <div class="mt-20 text-center">
          <BaseButton to="/contact" variant="primary"
            >Mari Berkolaborasi</BaseButton
          >
        </div>
      </div>
    </div>
  </main>
</template>
