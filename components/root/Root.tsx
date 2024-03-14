"use client";
import React, { useCallback, useEffect } from "react";
import { Inter } from "next/font/google";
import { useThemeContext } from "@/contexts/ThemeContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function Root({ children }: { children: React.ReactNode }) {
    const theme = useThemeContext();
    useEffect(() => {
        setWindowWidth();

        window.addEventListener("resize", handleResizeEvent);
        return () => {
            window.removeEventListener("resize", handleResizeEvent);
        };
    });

    const setWindowWidth = useCallback(() => {
        const html = window.document.getElementsByTagName("html")[0];
        theme?.setWindowWidth?.(html.clientWidth);
    }, [theme]);

    const handleResizeEvent = useCallback(
        (e: Event) => {
            setWindowWidth();
        },
        [setWindowWidth]
    );
    return (
        <body className={`${inter.variable} font-sans `}>
            <main>{children}</main>
        </body>
    );
}
