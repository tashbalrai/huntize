"use client";
import { createContext } from "react";
import Theme, { GridSize, ThemeColor } from "@/types/theme";

export const ThemeContext = createContext<Theme | null>(null);
