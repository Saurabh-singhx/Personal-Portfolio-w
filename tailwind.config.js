/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aliceblue: '#F0F8FF', // Define the AliceBlue color
      },
    },
  },
  plugins: [],
}

