/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '350px',
      ...defaultTheme.screens,
    },
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
      gridTemplateRows: {
        8: 'repeat(8, minmax(0, 1fr))',
      },
      backgroundImage: {
        homePage: `url('./assets/images/pexels_riccardo.jpg')`,
        formPage: `url('./assets/images/pexels_vladimir.png')`,
        dashboard: `url('./assets/images/jeremy_bishop_unsplash.jpeg')`,
      },
    },
  },
  plugins: [],
};
