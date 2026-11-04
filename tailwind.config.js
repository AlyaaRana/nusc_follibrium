/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        loopwear: {
          green: "#D9714B",      
          lightGreen: "#C4ECCF", 
          orange: "#D9714B",     
          cream: "#F3EEE3",     
          grey: "#DFD7C9",       
          dark: "#1A1A1A",
          muted: "#757575"
        }
      }
    },
  },
  plugins: [],
}