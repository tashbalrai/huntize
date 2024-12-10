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
                bodyBgColor: "var(--bg-body-color)",
                gridColor: "var(--grid-color)",
                cardBgColor: "var(--bg-card-color)",
                cardBgColorAlt: "var(--hover-bg-card-color)",

                headingColor: "var(--heading-color)",
                headingColorAlt: "var(--hover-heading-color)",

                subHeadingColor: "var(--sub-heading-color)",
                subHeadingColorAlt: "var(--hover-sub-heading-color)",

                textColor: "var(--text-color)",
                textColorAlt: "var(--hover-text-color)",

                footerBgColor: "var(--bg-footer)",
                footerTextColor: "var(--text-footer-color)",
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
