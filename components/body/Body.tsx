"use client";
import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    preload: true,
});

export default function Body({ children }: { children: React.ReactNode }) {
    return (
        <body className={`${inter.variable} font-sans bg-bodyBgColor`}>
            <main>{children}</main>
        </body>
    );
}
