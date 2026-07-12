import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        aic: {
          navy: "#003f68",
          blue: "#005c92",
          ink: "#102a43",
          muted: "#526579",
          mist: "#eaf3f9",
          line: "#d3e0e8",
          gold: "#ffdd82",
          "gold-dark": "#b17a00",
        },
      },
      borderRadius: { card: "22px", media: "28px", hero: "32px" },
      boxShadow: {
        soft: "0 10px 30px rgb(0 63 104 / 0.07)",
        card: "0 20px 45px rgb(0 63 104 / 0.13)",
      },
      backgroundImage: {
        "hero-wash":
          "radial-gradient(circle at 15% 20%, rgb(255 221 130 / 0.18), transparent 24%), linear-gradient(135deg, #f6fafc 0%, #e8f3fa 100%)",
      },
      fontFamily: { display: ["Aptos Display", "Trebuchet MS", "sans-serif"] },
    },
  },
  plugins: [],
} satisfies Config;
