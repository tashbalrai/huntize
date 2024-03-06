"use client";
import React, { createContext, useContext, useState } from "react";
import Theme, { GridSize, ThemeColor } from "@/types/theme";

const ThemeContext = createContext<Theme>({
    theme: ThemeColor.White,
    gridSize: GridSize.One,
});

export const ThemeContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [theme, setTheme] = useState(ThemeColor.White);
    const [gridSize, setGridSize] = useState(GridSize.Four);

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
