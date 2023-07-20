/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        karla: ["Karla", "sans-serif"]
      },
      colors:{
        olive: "#495e57",
        lemon: "#F4CE14"
      }
    },
  },
  plugins: [],
}

