/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#04152d",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
