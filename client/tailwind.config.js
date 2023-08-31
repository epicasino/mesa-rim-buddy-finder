/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
      colors: {
        gunmetal: {
          100: '#668089',
          200: '#4d6b75',
          300: '#335561',
          400: '#1a404e',
          500: '#002b3a',
          600: '#002734',
          700: '#00222e',
          800: '#001e29',
          900: '#00161d',
        },
      },
    },
  },
  plugins: [],
};
