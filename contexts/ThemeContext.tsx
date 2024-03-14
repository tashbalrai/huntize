"use client";
import React, { createContext, useContext, useState } from "react";
import ITheme, { IGridSize, IThemeColor } from "@/types/theme";

const ThemeContext = createContext<ITheme>({
    theme: IThemeColor.White,
});

export const ThemeContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [theme, setTheme] = useState(IThemeColor.White);
    const [windowWidth, setWindowWidth] = useState(0);

    return (
        <ThemeContext.Provider
            value={{ theme, setTheme, windowWidth, setWindowWidth }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => {
    return useContext(ThemeContext);
};
