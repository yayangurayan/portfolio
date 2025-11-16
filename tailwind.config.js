/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Menggunakan mode gelap berbasis class
  theme: {
    extend: {
      // Menambahkan palet warna kustom dari WDD 5.2
      colors: {
        'background': '#111827', // Latar Belakang (Utama) - bg-gray-900
        'text-main': '#E5E7EB', // Teks Utama - text-gray-200
        'primary': '#8B5CF6', // Primer (Aksen Utama) - text-violet-500
        'secondary': '#FBBF24', // Aksen Sekunder (Elegan) - text-amber-400
      },
      // Menambahkan font families kustom dari WDD 5.3
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans], // Body Text
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans], // Headings
        mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono], // Code
      },
    },
  },
  plugins: [],
}
