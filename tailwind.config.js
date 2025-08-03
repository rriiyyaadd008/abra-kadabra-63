/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
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
        // Enhanced blue theme colors
        "dragon-blue": {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
        "electric-blue": {
          400: "#00d4ff",
          500: "#0ea5e9",
          600: "#0284c7",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        bounce: "bounce 2s infinite",
        spin: "spin 1s linear infinite",
        ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "dragon-glow": "dragonGlow 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        dragonGlow: {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(0, 212, 255, 0.3), 0 0 40px rgba(0, 212, 255, 0.2)",
          },
          "50%": {
            boxShadow: "0 0 30px rgba(0, 212, 255, 0.5), 0 0 60px rgba(0, 212, 255, 0.3)",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "dragon-gradient": "linear-gradient(135deg, #1e3a8a 0%, #1e40af 25%, #2563eb 50%, #3b82f6 75%, #60a5fa 100%)",
      },
      dropShadow: {
        glow: ["0 0px 20px rgba(6, 182, 212, 0.35)", "0 0px 65px rgba(6, 182, 212, 0.2)"],
        "dragon-glow": ["0 0px 25px rgba(0, 212, 255, 0.4)", "0 0px 50px rgba(0, 212, 255, 0.2)"],
      },
      screens: {
        xs: "475px",
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/container-queries")],
}
