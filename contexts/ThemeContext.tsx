"use client";
import React, { createContext, useContext, useState } from "react";
import ITheme, { IGridSize, IThemeColor } from "@/types/theme";

const ThemeContext = createContext<ITheme>({
    theme: IThemeColor.White,
    gridSize: IGridSize.One,
});

export const ThemeContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [theme, setTheme] = useState(IThemeColor.White);
    const [gridSize, setGridSize] = useState(IGridSize.Four);

    return (
        <ThemeContext.Provider
            value={{ theme, setTheme, gridSize, setGridSize }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => {
    return useContext(ThemeContext);
};
