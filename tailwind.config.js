/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          100: '#E6E8F0',
          200: '#B3B9D9',
          300: '#808AC2',
          400: '#4D5BAB',
          500: '#1A2C94',
          600: '#152376',
          700: '#101A59',
          800: '#0A113B',
          900: '#05081E',
        },
      },
    },
  },
  plugins: [],
};