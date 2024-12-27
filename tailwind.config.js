/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        fadeRotate: 'fadeRotate 1s ease-in-out',
      },
      keyframes: {
        fadeRotate: {
          '0%': { transform: 'rotate(0deg) scale(0.5)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
      },
      colors: {
        background: {
          light: '#ffffff',
          dark: '#000000',
        },
        foreground: {
          light: '#2d3748',
          dark: '#e2e8f0',
        },
      },
    },
  },
  plugins: [],
}