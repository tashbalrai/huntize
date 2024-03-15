"use client";

import { useThemeContext } from "@/contexts/ThemeContext";
import { useBoxAttributes } from "@/utils/theme";
import { Box, Flex } from "@components/ui";
import React from "react";

export default function Header() {
    const theme = useThemeContext();
    const { width: boxWidth, boxes } = useBoxAttributes();
    let more: React.ReactNode[] = [];
    for (let i = 0; i < boxes - 4; i++) {
        more.push(
            <Box
                key={`hbox-spacer-${i}`}
                height="h-hb"
                width={`${boxWidth / 16}rem`}
            >
                &nbsp;
            </Box>
        );
    }
    return (
        <header>
            <Flex>
                <Box height="h-hb" width={`${boxWidth / 16}rem`}>
                    Huntize
                </Box>
                <Box height="h-hb" width={`${boxWidth / 16}rem`}>
                    Huntize
                </Box>
                <Box height="h-hb" width={`${boxWidth / 16}rem`}>
                    Huntize
                </Box>
                <Box height="h-hb" width={`${boxWidth / 16}rem`}>
                    Huntize
                </Box>
                {more}
            </Flex>
        </header>
    );
}
