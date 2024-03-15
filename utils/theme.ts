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

        const count = Math.ceil(
            html.clientWidth > MOBILE_CUTOFF
                ? html.clientWidth / BOX_STD_WIDTH
                : html.clientWidth / BOX_MIN_WIDTH
        );

        let width = Math.floor(html.clientWidth / count);
        const adjustment = Math.floor((html.clientWidth % width) / count);
        width = width + adjustment;

        if (width < BOX_MIN_WIDTH) {
            width = html.clientWidth || BOX_MIN_WIDTH;
        }
        console.log({ width, boxes: count });
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
