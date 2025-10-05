/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark Theme Colors from style.css
        'dark-bg': '#0d1117',
        'dark-bg-secondary': '#161b22',
        'dark-font': '#E5E7EB',
        'dark-font-secondary': '#8d96a0',
        'dark-border': '#30363d',

        // Light Theme Colors from style.css
        'light-bg': '#ffffff',
        'light-bg-secondary': '#f9fafb',
        'light-font': '#111827',
        'light-font-secondary': '#4B5563',
        'light-border': '#e5e7eb',

        // Primary Gradient Colors
        'primary-1': {
          light: '#7C3AED',
          dark: '#8B5CF6',
        },
        'primary-2': {
          light: '#D946EF',
          dark: '#EC4899',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      keyframes: {
        spin: {
          'to': { transform: 'rotate(360deg)' },
        },
        blink: {
          '50%': { 'border-color': 'transparent' },
        }
      },
      animation: {
        spin: 'spin 4s linear infinite',
        blink: 'blink 0.7s infinite',
      },
    },
  },
  plugins: [],
}
