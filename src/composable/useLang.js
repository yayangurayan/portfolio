import { useStorage } from '@vueuse/core'
import { watchEffect } from 'vue'

// Sesuai WDD 3.2 & 6.0: State Management untuk bahasa
// Default ke 'id' (Bahasa Indonesia)
const lang = useStorage('portfolio-lang', 'id')

// watchEffect untuk mengubah atribut <html lang=""> secara dinamis
watchEffect(() => {
  document.documentElement.lang = lang.value
})

export function useLang() {
  return {
    lang,
  }
}
