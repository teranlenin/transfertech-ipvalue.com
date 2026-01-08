import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          500: "#10b981",
          600: "#059669",
        },
        slate: {
          900: "#0f172a",
          950: "#020617",
        },
      },
    },
  },
  plugins: [],
};
export default config;