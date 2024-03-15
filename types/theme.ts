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
    setTheme?: (theme: IThemeColor) => void;
}
