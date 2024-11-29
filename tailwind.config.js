/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
        dark: {
          600: '#2d2d2d',
          700: '#262626',
          800: '#1a1a1a',
          900: '#0f0f0f',
        }
      },
    },
  },
  plugins: [],
};