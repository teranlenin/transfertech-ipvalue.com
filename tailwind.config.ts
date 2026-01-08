import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { emerald: { 500: "#10b981" }, slate: { 950: "#020617" } } } },
  plugins: [],
};
export default config;