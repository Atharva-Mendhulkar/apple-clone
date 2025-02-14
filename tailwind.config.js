/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 1s ease-out",
        'float': 'float 6s ease-in-out infinite',
        "slide-down": "slideDown 0.3s ease-out",
        'glow': 'glow 2s ease-in-out infinite',
        'gentle-float': 'gentleFloat 4s ease-in-out infinite',
        'neon-pulse': 'neonPulse 2s ease-in-out infinite',
        'slide-float': 'slideFloat 8s ease-in-out infinite',
        'rainbow-glow': 'rainbowGlow 3s ease-in-out infinite',
        'slow-rainbow-glow': 'rainbowGlow 5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideDown: {
          "0%": { transform: "translateY(-10px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        glow: {
          '0%, 100%': { filter: 'brightness(100%)' },
          '50%': { filter: 'brightness(120%) saturate(150%)' },
        },
        gentleFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        neonPulse: {
          '0%, 100%': {
            textShadow: '0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #0fa, 0 0 80px #0fa, 0 0 90px #0fa, 0 0 100px #0fa, 0 0 150px #0fa'
          },
          '50%': {
            textShadow: '0 0 4px #fff, 0 0 8px #fff, 0 0 15px #fff, 0 0 30px #0fa, 0 0 60px #0fa, 0 0 70px #0fa, 0 0 80px #0fa, 0 0 100px #0fa'
          }
        },
        slideFloat: {
          '0%': { transform: 'translateX(-10px)' },
          '50%': { transform: 'translateX(10px)' },
          '100%': { transform: 'translateX(-10px)' }
        },
        rainbowGlow: {
          '0%, 100%': {
            textShadow: '0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #0ff, 0 0 80px #0ff'
          },
          '33%': {
            textShadow: '0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #f0f, 0 0 80px #f0f'
          },
          '66%': {
            textShadow: '0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #ff0, 0 0 80px #ff0'
          }
        },
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      scale: {
        '102': '1.02',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

