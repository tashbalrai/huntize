"use client";
import { BOX_MIN_WIDTH, BOX_STD_WIDTH, MOBILE_CUTOFF } from "@/app/constants";
import { useThemeContext } from "@/contexts/ThemeContext";
import { IBox } from "@/types/blog";
import React, { useEffect, useRef } from "react";

const Box = ({ children, height, boxClass }: IBox) => {
    const theme = useThemeContext();
    const boxEl = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (boxEl.current) {
            let width = BOX_STD_WIDTH;

            boxEl.current.style.maxWidth = `${width / 16}rem`;

            if (theme.windowWidth && theme.windowWidth > MOBILE_CUTOFF) {
                width = Math.round(
                    theme.windowWidth /
                        Math.round(theme.windowWidth / BOX_STD_WIDTH)
                );
            } else if (theme.windowWidth) {
                width = Math.round(
                    theme.windowWidth /
                        Math.round(theme.windowWidth / BOX_MIN_WIDTH)
                );
            }
            if (width < BOX_MIN_WIDTH) {
                width = theme.windowWidth || BOX_MIN_WIDTH;
            }
            boxEl.current.style.maxWidth = `${width / 16}rem`;
        }
    }, [theme.windowWidth]);

    return (
        <div ref={boxEl} className={`border-b border-line ${boxClass} grow `}>
            <div className={`${height} border-r border-line mx-1`}>
                {children}
            </div>
        </div>
    );
};

export { Box as default, Box };
