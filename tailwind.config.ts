import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        aic: {
          navy: "var(--aic-navy)",
          blue: "var(--aic-blue)",
          tech: "var(--aic-tech-blue)",
          ink: "var(--aic-ink)",
          muted: "var(--aic-muted)",
          mist: "var(--aic-mist)",
          line: "var(--aic-line)",
          gold: "var(--aic-gold)",
          "gold-dark": "var(--aic-gold-dark)",
          warm: "var(--aic-warm)",
        },
      },
      borderRadius: { card: "22px", media: "24px", video: "28px", hero: "32px" },
      boxShadow: {
        soft: "var(--shadow-soft)",
        card: "var(--shadow-card)",
        pill: "var(--shadow-pill-dark)",
      },
      backgroundImage: {
        "hero-wash": "linear-gradient(rgba(0, 47, 81, 0.7), rgba(0, 47, 81, 0.7)), url('/media/official/hero-bg.webp')",
        "hero-main": "linear-gradient(rgba(0, 47, 81, 0.4), rgba(0, 47, 81, 0.8)), url('/media/official/hero-bg.webp')",
      },
      fontFamily: {
        sans: ["Be Vietnam Pro", "Inter", "system-ui", "sans-serif"],
        display: ["Be Vietnam Pro", "Inter", "system-ui", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
