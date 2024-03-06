"use client";
import { useThemeContext } from "@/contexts/ThemeContext";
import { getBorderClass } from "@/helpers/theme/theme";
import { GridSize } from "@/types/theme";
import React, { useCallback } from "react";

interface IProp {
    height?: string;
    width?: string;
    children: React.ReactNode;
    index: number;
}

export default function BorderBox({
    children,
    index,
    height = "h-[36rem]",
}: IProp) {
    const theme = useThemeContext();
    const borderClass = getBorderClass(index, theme?.gridSize);

    return (
        <div className={`border-b border-line`}>
            <div
                className={`${height}  ${
                    borderClass == "border-r"
                        ? "border-r"
                        : borderClass == "border-l"
                        ? "border-l"
                        : "border-x"
                } border-line mx-1`}
            >
                {children}
            </div>
        </div>
    );
}
