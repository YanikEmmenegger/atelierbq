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
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        // Fügen Sie hier Ihre angepasste Schriftfamilie hinzu
        'condensed': ['Roboto Condensed', 'sans-serif'], // Definieren Sie 'condensed' als benutzerdefinierte Schriftfamilie
      },
      fontWeight: {
        // Definieren oder überschreiben Sie Schriftgewichte, falls nötig
        //@ts-ignore
        'thin': 100,   // Thin
        //@ts-ignore
        'light': 300,  // Light
        //@ts-ignore
        'normal': 400, // Regular
      },
    },
  },
  plugins: [],
};

export default config;
