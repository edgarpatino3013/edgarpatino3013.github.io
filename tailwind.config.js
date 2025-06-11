/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#2563eb', // blue-600
            light: '#3b82f6',  // blue-500
            dark: '#1e40af',   // blue-800
          },
          background: {
            DEFAULT: '#18181b', // zinc-900
            light: '#27272a',   // zinc-800
          },
          surface: {
            DEFAULT: '#232336', // custom dark surface
            light: '#2d2d44',  // custom lighter surface
          },
          accent: {
            DEFAULT: '#60a5fa', // blue-400
          },
          text: {
            DEFAULT: '#f3f4f6', // gray-100
            muted: '#a1a1aa',   // zinc-400
          },
        },
      },
    },
    plugins: [],
  };
  