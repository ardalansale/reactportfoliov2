const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      peach: '#FEC5B9',
      tangerine:'#FE9881',
      bgdrk:'#39354D',
      eggplant:'#645E80',
      lavender:'#8A70FF',
      iris: '#DAB0F4',
      jasmine:'#E8D9F4',
      fuchsia:'#d946ef',
      rose:'#f43f5e',
      purple:'#a855f7',
      violet:'#8b5cf6',
      cyan:'#22d3ee',
      green:'#4ade80',
     indigo:{
       100:'#e0e7ff',
       200:'#c7d2fe',
       500:'#6366f1'
     },
     teal:{
       100:'#f0fdfa',
       200:'#99f6e4',
       500:'#5eead4',
     }, 
     lime:{
       50:'#f7fee7',
       200:'#d9f99d',
       300:'#bef264',
       400:'#a3e635',
     }, 
     pink:{
       50:'#fce7f3',
       100:'#f9a8d4',
       200:'#f472b6',
     }, 
    },
    extend: {
     
      width: {
        '18':'4.8rem',
        '128': '32.62rem',

      },
      height:{
        '13': '3.12rem',
        '129':'29.125rem',
        '130':'33.125rem',
        '150':'50.75rem'
      }
      // rotate:{
      //   '175':'-15deg'
      // },
    },
  },
  plugins: [],
}
