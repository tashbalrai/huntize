"use client";
import { useThemeContext } from "@/contexts/ThemeContext";
import { IBox } from "@/types/blog";
import React from "react";

const Box = ({ children, height }: IBox) => {
    const theme = useThemeContext();

    return (
        <div className={`border-b border-line`}>
            <div className={`${height} border-x border-line mx-1 `}>
                {children}
            </div>
        </div>
    );
};

export { Box as default, Box };
