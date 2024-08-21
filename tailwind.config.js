/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './config/*.json',
    './templates/*.json',
    './layout/*.liquid',
    './assets/*.liquid',
    './sections/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
