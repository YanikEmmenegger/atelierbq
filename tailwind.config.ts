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
        'AtelierBQ-Dark': "rgb(30, 30, 30)",
        'AtelierBQ-Light':"rgb(255 250 250)",
        'AtelierBQ-AccentLight': "rgb(254 215 170)",
        'AtelierBQ-AccentDark': "rgb(234 88 12)",
      },
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
