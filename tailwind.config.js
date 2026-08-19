/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        emerald: {
          deep: '#064e3b',
          mid: '#047857',
          light: '#10b981',
          glow: '#34d399',
        },
        slate: {
          deep: '#0f172a',
          mid: '#1e293b',
        },
        champagne: {
          light: '#f5e6c8',
          DEFAULT: '#e8c98a',
          deep: '#d4af6a',
          glow: '#f0d9a0',
        },
        gold: {
          light: '#fdf0c2',
          DEFAULT: '#e6c168',
          deep: '#c9a14a',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #e6c168 0%, #f0d9a0 50%, #c9a14a 100%)',
        'emerald-gradient': 'linear-gradient(135deg, #047857 0%, #064e3b 100%)',
        'glass-light': 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)',
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none' stroke='rgba(0,0,0,0.03)' stroke-width='1'/%3E%3C/svg%3E\")",
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'float-medium': 'float-medium 4s ease-in-out infinite',
        'float-fast': 'float-fast 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'spin-slow': 'spin 20s linear infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'badge-pulse': 'badge-pulse 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(37, 211, 102, 0.4), 0 0 40px rgba(37, 211, 102, 0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(37, 211, 102, 0.6), 0 0 60px rgba(37, 211, 102, 0.3)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'float-medium': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-fast': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'badge-pulse': {
          '0%, 100%': { opacity: '1', scale: '1' },
          '50%': { opacity: '0.85', scale: '1.03' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
        'glass-hover': '0 12px 40px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        'gold-glow': '0 0 30px rgba(230, 193, 104, 0.35), 0 8px 32px rgba(0, 0, 0, 0.1)',
        'emerald-glow': '0 0 30px rgba(16, 185, 129, 0.3), 0 8px 32px rgba(0, 0, 0, 0.1)',
        'whatsapp-glow': '0 0 20px rgba(37, 211, 102, 0.4), 0 0 40px rgba(37, 211, 102, 0.2)',
      },
    },
  },
  plugins: [],
};
