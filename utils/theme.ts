import {
    BOX_COUNT_PER_ROW,
    BOX_MIN_WIDTH,
    BOX_STD_WIDTH,
    MOBILE_CUTOFF,
} from "@/app/constants";
import { useCallback, useEffect, useState } from "react";

const useBoxAttributes = (): { width: number; boxes: number } => {
    const [attr, setAttr] = useState({
        width: BOX_STD_WIDTH,
        boxes: BOX_COUNT_PER_ROW,
    });

    const handleResizeEvent = useCallback(() => {
        const html = window.document.getElementsByTagName("html")[0];

        let count = Math.ceil(
            html.clientWidth > MOBILE_CUTOFF
                ? html.clientWidth / BOX_STD_WIDTH
                : html.clientWidth / BOX_MIN_WIDTH
        );
        count = count > 5 ? 5 : count;
        let width = Math.floor(html.clientWidth / count);
        const adjustment = Math.floor((html.clientWidth % width) / count);
        width = width + adjustment;

        if (width < BOX_MIN_WIDTH) {
            if (count > 2) {
                width = Math.floor(html.clientWidth / (count - 1));
                count = count - 1;
            } else {
                width = html.clientWidth || BOX_MIN_WIDTH;
                count = 1;
            }
        }

        setAttr({ width, boxes: count });
    }, []);

    useEffect(() => {
        handleResizeEvent();
        window.addEventListener("resize", handleResizeEvent);
        return () => {
            window.removeEventListener("resize", handleResizeEvent);
        };
    }, [handleResizeEvent]);

    return attr;
};

export { useBoxAttributes };
