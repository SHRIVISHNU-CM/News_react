/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Ga Maamli"],
        playwrite:["Playwrite PE"],
        cube:["Playwrite CU"],
        oswald:["Oswald"]
      }
    },
  },
  plugins: [
    daisyui
  ],
  daisyui:{
    themes: [ 'dracula', 'winter']}
}

