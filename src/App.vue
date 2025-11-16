<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
// import { useMouse } from '@vueuse/core' // Dihapus
import { computed, ref, watchEffect } from 'vue' // Tambahkan watchEffect
import ThemeToggle from './components/ThemeToggle.vue'
import MobileMenu from './components/MobileMenu.vue'
import LanguageToggle from './components/LanguageToggle.vue'
import { useLang } from './composable/useLang' // PERBAIKAN: Path

// --- Menghapus Kursor Kustom ---
// const { x, y } = useMouse() // Dihapus
// const cursorStyle = computed(...) // Dihapus

// --- Internasionalisasi (i18n) untuk Navigasi ---
const { lang } = useLang()
const navLinksData = {
  id: [
    { name: 'Beranda', path: '/' },
    { name: 'Tentang', path: '/about' },
    { name: 'Latar Belakang', path: '/background' },
    { name: 'Proyek', path: '/projects' },
    { name: 'Kontak', path: '/contact' },
  ],
  en: [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Background', path: '/background' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ],
}
// Link Navigasi dari WDD 4.2 (sekarang dinamis)
const navLinks = computed(() => navLinksData[lang.value])

// --- State untuk Mobile Menu (WDD 4.2) ---
const mobileMenuOpen = ref(false)

// --- Page Transitions (WDD 3.2) ---
const route = useRoute()

// PERBAIKAN: Tutup menu mobile jika navigasi terjadi (mis. tombol back browser)
watchEffect(() => {
  if (route.path) {
    mobileMenuOpen.value = false
  }
})
</script>

<template>
  <!-- Kursor Kustom Dihapus -->

  <div class="flex min-h-screen flex-col">
    <!-- Header & Navigasi (WDD 4.2) -->
    <header
      class="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md"
    >
      <nav class="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        <!-- Kiri: Logo/Inisial (WDD 4.2) -->
        <div class="flex lg:flex-1">
          <RouterLink to="/" class="-m-1.5 p-1.5">
            <span
              class="font-poppins text-lg font-bold text-text-main transition-colors hover:text-primary"
            >
              Andrian.
            </span>
          </RouterLink>
        </div>

        <!-- Tengah (Desktop): Links (WDD 4.2) -->
        <div class="hidden lg:flex lg:gap-x-12">
          <RouterLink
            v-for="link in navLinks"
            :key="link.name"
            :to="link.path"
            class="font-poppins text-sm font-semibold leading-6 text-text-main transition-colors hover:text-primary"
            active-class="text-primary"
          >
            {{ link.name }}
          </RouterLink>
        </div>

        <!-- Kanan: Fitur Lainnya (WDD 4.2) -->
        <div class="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <!-- Toggle Bahasa (WDD 3.2) -->
          <LanguageToggle />
          <!-- Toggle Dark Mode (WDD 3.2) -->
          <ThemeToggle />
        </div>

        <!-- Menu Mobile (Hamburger) - Sekarang Fungsional -->
        <div class="flex lg:hidden">
          <LanguageToggle class="mr-2" />
          <ThemeToggle class="mr-2" />
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-text-main/70"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Buka menu</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>
      <!-- Panel Menu Mobile (WDD 4.2) -->
      <MobileMenu :open="mobileMenuOpen" :navLinks="navLinks" @close="mobileMenuOpen = false" />
    </header>

    <!-- Konten Halaman Utama -->
    <main class="flex-1">
      <!-- WDD 3.2: Page Transitions -->
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" :key="route.path" />
        </Transition>
      </RouterView>
    </main>

    <!-- Footer -->
    <footer class="w-full border-t border-white/10 py-8">
      <div class="mx-auto max-w-7xl px-4 text-center text-sm text-text-main/50 lg:px-8">
        © 2025 Andrian. Dibuat dengan Vue.js & Tailwind CSS.
      </div>
    </footer>
  </div>
</template>

<style>
/* WDD 3.2: Page Transition (Fade) */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* PERBAIKAN: Menghapus style cursor kustom */
body:hover {
  cursor: default; /* Kembali ke kursor normal */
}
</style>
