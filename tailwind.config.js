/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#000000",
          card: "#0d0d0d",
          surface: "#0a0a0a",
        },
        navy: "#00122E",
        gold: "#60a5fa",
        "gold-light": "#93c5fd",
        cream: "#FFFDF7",
        platinum: "#e5e4e2",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.4)",
        glow: "0 0 40px rgba(96,165,250,0.18)",
        "glow-lg": "0 0 80px rgba(96,165,250,0.25)",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
}
