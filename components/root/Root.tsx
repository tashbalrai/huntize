"use client";
import React from "react";
import { Inter } from "next/font/google";
import { useThemeContext } from "@/contexts/ThemeContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function Root({ children }: { children: React.ReactNode }) {
    const theme = useThemeContext();
    return (
        <body className={`${inter.variable} font-sans`}>
            <main>{children}</main>
        </body>
    );
}
