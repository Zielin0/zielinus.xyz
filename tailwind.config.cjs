/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    fontFamily: {
      rowdies: ['Rowdies', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
    colors: {
      white: '#DEDEDE',
      'white-second': '#DFDFDF',
      'pure-white': '#FFFFFF',
      'white-gray': '#999999',
      'light-gray': '#2D2D2D',
      'dark-gray': '#202020',
      comment: '#ADADAD',
      pink: '#AA1BAD',
      purple: '#881BAD',
      'dark-blue': '#561BAD',
      blue: '#3168AF',
      green: '#31AF98',
    },
    extend: {},
  },
  plugins: [],
};
