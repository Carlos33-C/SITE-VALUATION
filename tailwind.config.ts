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
        papel: "var(--papel)",
        tinta: "var(--tinta)",
        "tinta-suave": "var(--tinta-suave)",
        linha: "var(--linha)",
        "linha-forte": "var(--linha-forte)",
        selo: "var(--selo)",
        "selo-hover": "var(--selo-hover)",
        "selo-fraco": "var(--selo-fraco)",
        alerta: "var(--alerta)",
        "alerta-fraco": "var(--alerta-fraco)",
        risco: "var(--risco)",
        "risco-fraco": "var(--risco-fraco)",
        dourado: "var(--dourado)",
        "dourado-fraco": "var(--dourado-fraco)",
      },
      fontFamily: {
        editorial: ["Georgia", "Times New Roman", "serif"],
        dados: ["Courier New", "Courier", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;