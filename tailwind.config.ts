import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            tablet: "640px",
            laptop: "1280px",
            desktop: "1920px",
        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                "body-white": "F5F7FA",
                "body-blue": "#0760A8",
                "body-black": "#000000",
                "body-orange": "#E85941",
                "card-bg": "#D9D9D9",
                line: "#E3E2E2",
                "text-black": "#000000",
                "text-yellow": "#EDEF4E",
            },
            height: {
                hb: "6.25rem",
                ab: "35.938rem",
            },
            spacing: {
                box: "26.563rem",
                sbox: "18.75rem",
            },
        },
        fontFamily: {
            sans: ["var(--font-inter)"],
        },
    },
    plugins: [],
};
export default config;
