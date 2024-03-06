"use client";
import React, { useEffect } from "react";
import { Inter } from "next/font/google";
import { useThemeContext } from "@/contexts/ThemeContext";
import { widthToGridSize } from "@/helpers/theme/theme";

const inter = Inter({ subsets: ["latin"] });

export default function Root({ children }: { children: React.ReactNode }) {
    const theme = useThemeContext();

    useEffect(() => {
        window.addEventListener("resize", handleResizeEvent);
        return () => {
            window.removeEventListener("resize", handleResizeEvent);
        };
    });

    const handleResizeEvent = (e: Event) => {
        const size = widthToGridSize(window.innerWidth);
        theme?.setGridSize?.(size);
    };

    return (
        <body className={inter.className}>
            <main>{children}</main>
        </body>
    );
}
