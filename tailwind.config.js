/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0d1117',
        'dark-bg-secondary': '#161b22',
        'dark-font': '#E5E7EB',
        'dark-font-secondary': '#8d96a0',
        'dark-border': '#30363d',
        'primary-1-dark': '#8B5CF6',
        'primary-2-dark': '#EC4899',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      keyframes: {
        spin: {
          'to': { transform: 'rotate(360deg)' },
        },
        fadeIn: {
          'from': { opacity: 0 },
          'to': { opacity: 1 },
        },
        fadeOut: {
          'from': { opacity: 1 },
          'to': { opacity: 0 },
        },
      },
      animation: {
        spin: 'spin 4s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'fade-out': 'fadeOut 0.5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}
