/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gray_150: '#E3E6E9',
        gray_200: '#D3D8DC',
        gray_300: '#BEC5CC',
        gray_900: '#060E1E',
        blueButton: '#316FEA',
        playceholder: '#A1ABB5',
    },
    },
  },
  plugins: [],
};
