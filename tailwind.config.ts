import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#24402B",
        leaf: "#5E8B3A",
        paper: "#FAF8F3",
        ink: "#1E261C",
        olive: "#6B7340",
        sand: "#EAE2D0",
        soil: "#5A4A38",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
    },
  },
} satisfies Config;
