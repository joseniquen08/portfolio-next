const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    typography: (theme) => ({}),
    screens: {
      'xs': '480px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        'inter': ['"Inter"', 'sans-serif'],
        'poppins': ["Poppins", defaultTheme.fontFamily.sans],
        'montserrat': ['"Montserrat"', 'sans-serif'],
      },
      height: {
        '104': '26rem',
        '108': '27rem',
        '112': '28rem',
        '116': '29rem',
        '120': '30rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
