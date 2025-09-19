/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {colors:{
      black1:'#191919',
      pink1:'#EE028C',
      skyblue:'#00AEF1',
      darkblue:'#2E3192',
      fadedWhite:'#f7f7f7',
    }},
  },
  plugins: [],
};
