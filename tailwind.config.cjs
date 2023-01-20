/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    fontFamily: {
      rowdies: ['Rowdies', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      white: '#DEDEDE',
      'white-second': '#DFDFDF',
      'pure-white': '#FFFFFF',
      'white-gray': '#999999',
      'light-gray': '#2c2c2c',
      'dark-gray': '#202020',
      comment: '#ADADAD',
      pink: '#AA1BAD',
      purple: '#881BAD',
      'dark-blue': '#561BAD',
      blue: '#3168AF',
      green: '#31AF98',
      yellow: '#E0D428',
    },
    extend: {
      animation: {
        horizontal: 'horizontal 5s ease-in-out infinite',
        'horizontal-speed': 'horizontal 3s ease infinite',
      },
      keyframes: {
        horizontal: {
          '0%, 100%': {
            'background-position': '0 0',
          },
          '50%': {
            'background-position': '100% 0',
          },
        },
      },
    },
  },
  plugins: [],
};
