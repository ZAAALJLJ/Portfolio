/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme': {
          'dark': '#13111C',
          'darker': '#1A1625',
          'light': '#E2E1E6',
          'purple': '#9D8CFF',
          'purple-dark': '#7B6EDB',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
} 