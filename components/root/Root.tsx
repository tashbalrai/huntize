"use client";
import React, { useEffect, useContext } from "react";
import { Inter } from "next/font/google";
import { ThemeContext } from "@/contexts/ThemeContext";
import { widthToGridSize } from "@/helpers/theme/theme";

const inter = Inter({ subsets: ["latin"] });

export default function Root({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        window.addEventListener("resize", handleResizeEvent);
        return () => {
            window.removeEventListener("resize", handleResizeEvent);
        };
    });

    const handleResizeEvent = (e: Event) => {
        widthToGridSize(window.innerWidth);
    };

    return (
        <ThemeContext.Provider value={null}>
            <body className={inter.className}>
                <main>{children}</main>
            </body>
        </ThemeContext.Provider>
    );
}
