"use client";
import { useThemeContext } from "@/contexts/ThemeContext";
import { IBox } from "@/types/ui";
import React from "react";

const Box = ({ children, height, boxClass, width }: IBox) => {
    const theme = useThemeContext();
    return (
        <div
            className={`border-b border-line grow w-full ${boxClass}`}
            style={width ? { maxWidth: width } : {}}
        >
            <div className={`${height} border-x border-line mx-1`}>
                {children}
            </div>
        </div>
    );
};

export { Box as default, Box };
