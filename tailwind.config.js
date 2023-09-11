/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.ts"],
  theme: {
    extend: {
      colors: {
        'ussa-blue': {
          '50': '#edf2ff',
          '100': '#dee6ff',
          '200': '#c4d0ff',
          '300': '#a0b0ff',
          '400': '#7b86fe',
          '500': '#5b5ef9',
          '600': '#483eed',
          '700': '#3d30d2',
          '800': '#332aa9',
          '900': '#2f2b8a',
          '950': '#1c184e',
      },
      'ussa-yellow': {
        '50': '#fefbe8',
        '100': '#fef7c3',
        '200': '#fde873',
        '300': '#fcd948',
        '400': '#f9c416',
        '500': '#e9ab09',
        '600': '#c98405',
        '700': '#a05d08',
        '800': '#84490f',
        '900': '#703c13',
        '950': '#421e06',
    }
      }
    },
  },
  plugins: [require("daisyui")],
}

