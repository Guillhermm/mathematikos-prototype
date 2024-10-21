/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      boxShadow: {
        'text-shadow': '1px 1px 5px rgba(0, 0, 0, .5)',
      },
    },
  },
  plugins: [],
};
