/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#2C5530',
        'secondary': '#8B4513',
        'accent': '#D4A574',
        'warm-white': '#F9F7F4',
        'charcoal': '#333333'
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'serif']
      }
    },
  },
  plugins: [],
}