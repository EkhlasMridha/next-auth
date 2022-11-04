/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      // colors: {
      //   gray: {
      //     DEFAULT: "#495160",
      //     100: "#A7A7B1",
      //     200: "#22242C",
      //   },
      //   green: {
      //     DEFAULT: "#0FF807",
      //     100: "#D6FF8A",
      //   },
      //   primary: {
      //     DEFAULT: "#070707",
      //     100: "#181A23",
      //     200: "#101316",
      //     300: "#0A0A0B",
      //     400: "#0C0C0C",
      //     500: "#24243A",
      //     600: "#1D1A1A",
      //     700: "#292A33",
      //     800: "#B0B0B3",
      //     900: "#1A1B21",
      //     1000: "#9093AB",
      //     1100: "#8D8D90",
      //     1200: "#50515F",
      //   },
      // },
    },
  },
  plugins: [],
};
