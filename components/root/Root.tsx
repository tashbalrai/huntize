"use client";
import { ThemeColor } from "@/types/theme";
import { Inter } from "next/font/google";
import { useEffect, useRef } from "react";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    preload: true,
});

export default function Root({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const themeName = localStorage.getItem("theme-name");
        //TODO: change this to theme switcher
        document
            .querySelector("body")
            ?.setAttribute("data-theme", themeName as string);
    }, []);

    return (
        <body className={`${inter.variable} font-sans theme`}>
            <main>{children}</main>
        </body>
    );
}
