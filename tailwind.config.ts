import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      // Your theme configuration
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;