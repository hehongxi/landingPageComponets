/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'scale(1)' },
          '60%': { transform: 'scale(0.95)' },
          '80%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        bounce: 'bounce 0.5s ease-in-out 1',
      },
    },
  },
  plugins: [],
}