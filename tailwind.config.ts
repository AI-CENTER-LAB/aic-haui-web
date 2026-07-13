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
        "hero-wash": "linear-gradient(135deg, rgb(255 250 240 / 0.96), rgb(234 245 255 / 0.96))",
      },
      fontFamily: {
        sans: ["Be Vietnam Pro", "Inter", "system-ui", "sans-serif"],
        display: ["Be Vietnam Pro", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
