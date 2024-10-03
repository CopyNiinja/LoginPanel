/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html","./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
       backgroundImage: {
        'side': "url('./src/assets/bg.jpg')",
       
      },
      colors:{
        faiyaz: "#BD6B73"
      },
      fontFamily:{
        sans:["Mulish",'sans']
      }
    },
    screens: {
      'md': '535px',
      // => @media (min-width: 640px) { ... }

      'lg': '768px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}

