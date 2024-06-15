/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#d3f501",
        gray: "#d7d9e5",
      },
    },
  },
  plugins: [],
};
