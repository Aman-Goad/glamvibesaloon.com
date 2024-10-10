/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          primary: '#7469B6',    // Example custom background color
          secondary: '#AD88C6',  // Example custom hover color
          accent: '#E1AFD1',     // Example custom text color
          text: '#FFE6E6', // Example custom background color
        },
      },
    },
  },
  plugins: [],
}