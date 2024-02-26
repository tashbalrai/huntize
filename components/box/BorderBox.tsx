"use client";
import React, { useEffect } from "react";

interface IProp {
    height?: string;
    width?: string;
    children: React.ReactNode;
}

export default function BorderBox({ height, width, children }: IProp) {
    const h = height || "h-[35rem]";
    const w = width || null;
    return (
        <div className={`${h} ${w} group border-b border-l-line`}>
            <div className={`${h}`}>{children}</div>
        </div>
    );
}
