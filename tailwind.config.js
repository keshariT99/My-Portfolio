/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonGreen: '#39FF14',
        '1a1a1a': '#1a1a1a',
        '39FF14': '#39FF14',
      },

      keyframes: {
        movingUpDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },

        fadeInRight: {
          '0%': { transform: 'translateX(3rem)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },

        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'moving-up-down': 'movingUpDown 4s ease-in-out infinite',
        'fade-in-right': 'fadeInRight 0.7s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
    },
  },
  plugins: [],
}

