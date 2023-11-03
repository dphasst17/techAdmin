/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'ssm':'384px',
      // => @media (min-width: 480px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'smd':'700px',
      // => @media (min-width: 700px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      keyframes:{
        showDiv:{
          '0%': { opacity: '0', transform: 'scale(0)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        }
      },
      animation: {
        showDiv: 'showDiv .1s linear',
      },
    },
  },
  plugins: [],
}

