import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        // Custom theme colors using CSS variables
        nav: {
          DEFAULT: "rgb(var(--color-nav))",
        },
        buttonGroup: {
          DEFAULT: "rgb(var(--color-button-group))",
        },
        button: {
          DEFAULT: "rgb(var(--color-button))",
        },
        element: {
          DEFAULT: "rgba(var(--color-element), 0.1)",
        },
        footer: {
          DEFAULT: "rgb(var(--color-footer))",
        },
        borderElement: {
          DEFAULT: "rgb(var(--color-border))",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        // Custom gradients
        "gradient-header": "var(--gradient-header)",
        "gradient-about": "var(--gradient-about)",
        "gradient-services": "var(--gradient-services)",
        "gradient-testimonials": "var(--gradient-testimonials)",
        "gradient-footer": "var(--gradient-footer)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;