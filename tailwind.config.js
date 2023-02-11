/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'shadow-md-right': '4px 0 6px -1px rgba(0, 0, 0, 0.1);'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
