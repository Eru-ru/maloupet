/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'wave-pattern': "url('https://i.ibb.co/wQZVxxk/wave.png')",
      },
      keyframes: {
        animateWaves: {
          '0%': { backgroundPositionX: '0' },
          '100%': { backgroundPositionX: '1000px' },
        },
        animate: {
          '0%': { backgroundPositionX: '0' },
          '100%': { backgroundPositionX: '-1000px' },
        },
      },
      animation: {
        animateWaves: 'animateWaves 4s linear infinite',
        animate: 'animate 4s linear infinite',
      }
    }
  },
  plugins: [],
}

