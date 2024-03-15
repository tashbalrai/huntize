"use client";
import { useThemeContext } from "@/contexts/ThemeContext";
import { IBox } from "@/types/ui";
import { useBoxAttributes } from "@/utils/theme";
import React from "react";

const Box = ({ children, height, boxClass, width }: IBox) => {
    const theme = useThemeContext();
    return (
        <div
            className={`border-b border-line grow ${boxClass}`}
            style={{ maxWidth: width }}
        >
            <div className={`${height} border-r border-line mx-1`}>
                {children}
            </div>
        </div>
    );
};

export { Box as default, Box };
