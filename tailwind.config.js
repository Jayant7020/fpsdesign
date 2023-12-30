/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'Acme':'Acme,  sans-serif',
        'Exo':'Exo, sans-serif',
        'Merriweather':'Merriweather, sans-serif'
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

