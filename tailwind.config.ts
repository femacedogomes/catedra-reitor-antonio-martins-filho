import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#750e1f",
          dark: "#5a0b18",
          light: "#8f1226",
        },
        terracota: {
          DEFAULT: "#b53d00",
          light: "#cc4500",
          dark: "#8f3000",
        },
        "slate-brand": "#b6cac9",
        dark: {
          DEFAULT: "#101d1e",
          secondary: "#1a2e2f",
        },
        cream: "#e8e9d9",
        "cream-dark": "#dddece",
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        sans: ["'Trebuchet MS'", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
