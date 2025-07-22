export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background: "rgba(var(--background))",
        border: "rgba(var(--border))",
        card: "rgba(var(--card))",
        cta: "rgba(var(--cta))",
        "cta-active":"rgba(var(--cta--active))",
        "cta-text":"rgba(var(--cta--text))",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 8px rgba(168, 85, 247, 0.6)',
          },
          '50%': {
            boxShadow: '0 0 16px rgba(168, 85, 247, 0.9)',
          },
        },
      },
      animation: {
        glow: 'glow 1.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
