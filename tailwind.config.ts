import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      screens: {
        xs: "460px",
      },
      letterSpacing: {
        tightest: "0.15px",
        tighter: "0.25px",
        tight: "0.5px",
      },
      boxShadow: {
        sm: "0px 3px 24px 0px #0000000F",
        md: "0px -8px 40px -4px #2A2C324D",
        lg: "0px 18px 88px -4px #00000014",
      },
      colors: {
        enabled: {
          DEFAULT: "#83325A",
        },
        white: {
          DEFAULT: "#FFFFFF",
          100: "#D9D9D9",
        },
        black: {
          DEFAULT: "#171A1F",
          900: "#000000",
          800: "#19191A",
          700: "#232323",
          600: "#363636",
          500: "#555555",
          400: "#3D3D3D",
          300: "#969A9F",
        },
        gray: {
          600: "#424957",
          550: "#D5D5D6",
          500: "#F2F3F5",
          450: "#71747A",
          400: "#818C99",
          300: "#E1E3E6",
          200: "#B0B1B6",
        },
        yellow: {
          100: "#FAF8F2",
        },
      },
    },
  },
  plugins: [],
};
export default config;
