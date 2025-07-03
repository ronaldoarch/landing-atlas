/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        tivo: {
          black: '#000000',
          white: '#FFFFFF',
          orange: '#FC6A1D',
          gold: '#DAA520',
          dark: '#22232E',
          light: '#F6F5F0',
        },
      },
    },
  },
  plugins: [],
}

