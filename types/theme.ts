import React from "react";

export enum IThemeColor {
    White = "white",
    Black = "black",
    Blue = "blue",
    Orange = "orange",
}

export enum IGridSize {
    One = 1,
    Two = 2,
    Three = 3,
    Four = 4,
}

export default interface ITheme {
    theme: IThemeColor;
    windowWidth?: number;
    setWindowWidth?: (width: number) => void;
    setTheme?: (theme: IThemeColor) => void;
}

export interface ITextTag {
    children: React.ReactNode;
    className?: string;
}
