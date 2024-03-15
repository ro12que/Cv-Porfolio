/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: "Bebas Neue",
        subTitle: "IBM Plex Sans Condensed",
        Text: "IBM Plex Sans",
      },
      colors: {
        primarioP: "#ba72e2",
        secundarioP: "#5c0b86",
        terciarioP: "#86d1fd",

        primarioD: "#3eb29a",
        secundarioD: "#39ffb1",
        terciarioD: "#005d4a",

        primarioC: "#73bdfd",
        secundarioC: "#1b57b8",
        terciarioC: "#52fffe",

        primarioW: "#fb896f",
        secundarioW: "#692324",
        terciarioW: "#fdde5f",
      },
      screens: {
        telf: '450px'
      }
    },
  },
  plugins: [],
}

