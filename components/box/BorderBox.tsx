"use client";
import { useThemeContext } from "@/contexts/ThemeContext";
import React from "react";

interface IProp {
    height?: string;
    width?: string;
    children: React.ReactNode;
}

export default function BorderBox({ children, height = "h-[36rem]" }: IProp) {
    const theme = useThemeContext();

    return (
        <div className={`border-b border-line`}>
            <div className={`${height} border-x border-line mx-1 `}>
                {children}
            </div>
        </div>
    );
}
