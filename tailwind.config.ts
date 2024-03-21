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
                colorHeadings: "var(--text-h-color)",
                themeLight: "var(--color-bg-theme-light)",
                themeDark: "var(--color-bg-theme-dark)",
                themeBlue: "var(--color-bg-theme-blue)",
                themeOrange: "var(--color-bg-theme-orange)",
                line: "var(--line-color)",
                footerBg: "var(--color-bg-footer)",
                footerText: "var(--color-text-footer)",
                cardHover: "var(--color-bg-theme-card-hover)",
            },
            height: {
                hb: "6.25rem",
                ab: "35.938rem",
                f: "43rem",
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
