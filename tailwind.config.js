/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // important for theme toggling
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Josefin Sans'],
        special: ['Josefin Sans', 'cursive'],
      }
    }
  },
plugins: [
  require('@tailwindcss/forms'),
]
};
