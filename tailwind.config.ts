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
            laptop: "1024px",
            desktop: "1280px",
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
        },
    },
    plugins: [],
};
export default config;
