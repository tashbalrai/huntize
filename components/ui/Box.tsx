"use client";
import { IBox } from "@/types/ui";
import React from "react";

const Box = ({ children, height, boxClass, width }: IBox) => {
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
