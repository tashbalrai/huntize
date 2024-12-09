"use client";
import React, { createContext, useContext, useState } from "react";
import ITheme, { ThemeColor } from "@/types/theme";

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
