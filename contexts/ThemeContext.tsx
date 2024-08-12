"use client";
import React, { createContext, useContext, useState } from "react";
import ITheme, { GridSize, ThemeColor } from "@/types/theme";
import { BOX_COUNT_PER_ROW, BOX_MIN_WIDTH } from "@/app/constants";

const defaultThemeSettings = {
    theme: ThemeColor.White,
};

const ThemeContext = createContext<ITheme>(defaultThemeSettings);

export const ThemeContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [theme, setTheme] = useState(ThemeColor.White);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => {
    return useContext(ThemeContext);
};
