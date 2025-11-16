<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useMouse } from '@vueuse/core'
import { computed } from 'vue'

// Fitur "Mewah" (WDD 3.2): Kursor Kustom
const { x, y } = useMouse()
const cursorStyle = computed(() => ({
  transform: `translate3d(${x.value}px, ${y.value}px, 0)`,
}))

// Link Navigasi dari WDD 4.2
const navLinks = [
  { name: 'Beranda', path: '/' },
  { name: 'Tentang', path: '/about' },
  { name: 'Latar Belakang', path: '/background' },
  { name: 'Proyek', path: '/projects' },
  { name: 'Kontak', path: '/contact' },
]
</script>

<template>
  <!-- Kursor Kustom (WDD 3.2) -->
  <!-- Ini hanya akan muncul di desktop. Kita sembunyikan di mobile. -->
  <div
    class="pointer-events-none fixed -left-2 -top-2 z-[9999] hidden h-4 w-4 rounded-full bg-primary transition-transform duration-75 ease-out md:block"
    :style="cursorStyle"
  ></div>

  <div class="flex min-h-screen flex-col">
    <!-- Header & Navigasi (WDD 4.2) -->
    <header class="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
      <nav class="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        <!-- Kiri: Logo/Inisial (WDD 4.2) -->
        <div class="flex lg:flex-1">
          <RouterLink to="/" class="-m-1.5 p-1.5">
            <span class="font-poppins text-lg font-bold text-text-main transition-colors hover:text-primary">
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
          <!-- Placeholder untuk Toggle Bahasa & Mode -->
          <button class="h-8 w-8 rounded-full border border-white/20 text-sm text-white/50">ID</button>
          <button class="h-8 w-8 rounded-full border border-white/20 text-sm text-white/50">
            <!-- Icon Bulan/Matahari nanti -->
            B
          </button>
        </div>

        <!-- Menu Mobile (Hamburger) -->
        <div class="flex lg:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
          >
            <!-- Nanti kita buat state untuk open/close menu mobile -->
            <span class="sr-only">Buka menu</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </nav>
      <!-- TODO: Mobile menu panel (akan dibuat nanti) -->
    </header>

    <!-- Konten Halaman Utama -->
    <main class="flex-1">
      <RouterView />
    </main>

    <!-- Footer Sederhana (Bisa dikembangkan nanti) -->
    <footer class="w-full border-t border-white/10 py-8">
      <div class="mx-auto max-w-7xl px-4 text-center text-sm text-text-main/50 lg:px-8">
        © 2025 Andrian. Dibuat dengan Vue.js & Tailwind CSS.
      </div>
    </footer>
  </div>
</template>

<style>
/* Style untuk custom cursor, kita tidak ingin cursor default */
body:hover {
  /* cursor: none; */ /* Kita remark dulu agar tidak mengganggu development awal */
}
</style>
