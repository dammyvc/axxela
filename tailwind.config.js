/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/lib/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors: {
        partnership: '#0b3356',
        sustainable: '#6cafc7',
        growth: '#c7d522',
        vision: '#f5d000',
        grey9: '#76777a',
        grey7: '#979799',
        grey5: '#b0b0b0',
        grey3: '#c7c7c7',
        grey1: '#d8d8d6',
        light: '#f5f5f5',
        dark: '#1b1b1b',
        background: '#f6f6f9',
        white: '#ffffff',
      },
    },
    screens: {
      sm: { max: '749px' },
      md: { max: '999px' },
      // 'lg': {'min': '1024px'},
      // other breakpoints...
    },
  },
  plugins: [require('flowbite/plugin')],
};
