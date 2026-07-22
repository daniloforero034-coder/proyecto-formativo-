import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        fondo: "#EAEAEA",

        "color-title": "#443C3C",
        "color-subtitle": "#6C959D",
        "color-parrafo": "#443C3C",

        "table-header": "#6C959D",
        "color-border": "#8B8484",
        "color-header": "#F7A306",

        "btn-confim": "#F7A306",
        "btn-cancel": "#8B8484",
        "btn-information": "#3881FF",

        "verde-exito": "#93FBC7",
        "verde-claro": "#DCF9A2",

        "amarillo-claro": "#FEC46D",
        "naranja-claro": "#FBB046",
      },
    },
  },

  plugins: [],
};

export default config; 