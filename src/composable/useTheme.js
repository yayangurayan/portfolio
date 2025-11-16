import { useStorage } from '@vueuse/core'
import { watchEffect } from 'vue'

// Sesuai WDD 3.2 & 6.0: State Management menggunakan VueUse useStorage
// Default ke 'dark'
const isDark = useStorage('portfolio-theme-dark', true)

export function useTheme() {
  function initializeTheme() {
    // Terapkan tema saat inisialisasi
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  // Gunakan watchEffect untuk bereaksi terhadap perubahan
  // dan mengubah class di <html>
  watchEffect(() => {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  })

  return {
    isDark,
    initializeTheme,
  }
}
