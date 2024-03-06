import tailwindConfig from "@/tailwind.config";
import { GridSize } from "@/types/theme";

export const widthToGridSize = (width: number): number => {
    const screens = tailwindConfig.theme?.screens as Record<string, string>;
    const tablet = Number(screens?.tablet.replace("px", ""));
    const laptop = Number(screens?.laptop.replace("px", ""));

    if (screens && width >= tablet && width < laptop) {
        return GridSize.Two;
    } else if (screens && width >= laptop) {
        return GridSize.Four;
    }
    return GridSize.One;
};

export const getBorderClass = (count: number, size: GridSize): string => {
    if (size === GridSize.One) {
        return "";
    }
    const rem = count % size;
    if (rem === 0) {
        return "border-l";
    } else if (rem === 1) {
        return "border-r";
    }
    return "border-x";
};
