import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      fontSize: {
        "head-600": "64px",
        "head-500": "50px",
        "head-400": "40px",
        "head-300": "32px",
        "head-200": "24px",
        "head-100": "30px",
        "head-50": "16px",
      },
      colors: {
        primary: "#bfb5af",
        primaryLight: '#e7ddcc',
        tertiary: "#7d4a5b",
        secondary: "#000000",
        gray: {
          700: "#1A1A1A",
          600: "#333333",
          500: "#3F3F3F",
          400: "#4F4F4F",
          300: "#9EA4AC",
          200: "#DADFE7",
          100: "#FAFAFA",
        },
      },
    },
  },
  plugins: [],
};
export default config;
