import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors
        brand: {
          orange: "#C85A3F",
          "orange-dark": "#A04830",
          "orange-light": "#D97A5F",
        },
        // Background colors
        bg: {
          dark: "#F5F1E8",
          surface: "#FFFFFF",
          elevated: "#E8E0D0",
        },
        // Text colors
        text: {
          primary: "#1A1A1A",
          secondary: "#6B6B6B",
          muted: "#A8A8A8",
        },
        // Accent colors
        accent: {
          success: "#C85A3F",
          error: "#C85A3F",
          warning: "#C85A3F",
          info: "#C85A3F",
        },
      },
      fontFamily: {
        sans: ["Inter", "SF Pro Display", "-apple-system", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "8px",
        lg: "12px",
        xl: "16px",
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        "2xl": "48px",
        "3xl": "64px",
        "4xl": "96px",
      },
    },
  },
  plugins: [],
};

export default config;
