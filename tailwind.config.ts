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
          DEFAULT: "#8B1A2B",
          dark: "#6B1221",
          light: "#A52035",
        },
        dark: {
          DEFAULT: "#1a1a1a",
          secondary: "#2a2a2a",
        },
        cream: "#F5F0E8",
        "cream-dark": "#EDE8DF",
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
