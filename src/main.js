import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { useTheme } from '@/composable/useTheme' // PERBAIKAN: Path dari 'src/...' ke '@/'
import { useLang } from '@/composable/useLang' // PERBAIKAN: Path dari 'src/...' ke '@/'

// --- PERBAIKAN: Menambahkan kembali inisialisasi ---
// Inisialisasi tema SEBELUM app di-mount untuk mencegah FOUC
const { initializeTheme } = useTheme()
initializeTheme()

// Inisialisasi bahasa (untuk <html lang="">)
const { lang } = useLang()
document.documentElement.lang = lang.value
// --- Selesai Perbaikan ---

const app = createApp(App)

app.use(router)

app.mount('#app')
