/** @type {import('tailwindcss').Config} */ export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      boxShadow: {
        orangeSoft: '0 2px 8px rgba(250, 110, 0, 0.1)',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('light', '.light &');
    },
  ],
};
