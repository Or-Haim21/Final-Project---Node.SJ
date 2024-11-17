/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#199e95",
        secondary: "#c5e3e1",
        cancel: "#e65069"
      }
    },
  },
  plugins: [],
}

