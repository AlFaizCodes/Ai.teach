/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050816",
        secondary: "#0b1120",
        cyan: {
          glow: "#00e5ff",
        },
        purple: {
          accent: "#7c3aed",
        },
        gray: {
          text: "#94a3b8",
        }
      },
      fontFamily: {
        schibsted: ['"Schibsted Grotesk"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        noto: ['"Noto Sans"', 'sans-serif'],
        fustat: ['Fustat', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #00e5ff, 0 0 10px #00e5ff' },
          '100%': { boxShadow: '0 0 20px #00e5ff, 0 0 30px #00e5ff' },
        }
      }
    },
  },
  plugins: [],
}
