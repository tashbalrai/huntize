"use client";

import { useThemeContext } from "@/contexts/ThemeContext";
import { useBoxAttributes } from "@/utils/theme";
import { Box, Flex } from "@components/ui";
import React from "react";
import Image from "next/image";

export default function Header() {
    const theme = useThemeContext();
    const { width: boxWidth, boxes } = useBoxAttributes();
    let more: React.ReactNode[] = [];
    for (let i = 0; i < boxes - 5; i++) {
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
                    <div className="h-hb px-5 flex flex-row items-center gap-4">
                        <Image
                            src="logo.svg"
                            alt="Huntize"
                            width="53"
                            height="26"
                        />
                        <div className="text-3xl text-colorHeadings uppercase font-bold">
                            Huntize
                        </div>
                    </div>
                </Box>
                {boxes >= 5 && (
                    <Box height="h-hb" width={`${boxWidth / 16}rem`}>
                        &nbsp;
                    </Box>
                )}
                <Box
                    height="h-hb"
                    width={`${boxWidth / 16}rem`}
                    boxClass={`${boxes <= 1 ? "hidden" : ""}`}
                >
                    <div className="h-hb bg-themeBlue"></div>
                </Box>
                <Box
                    height="h-hb"
                    width={`${boxWidth / 16}rem`}
                    boxClass={`${boxes <= 2 ? "hidden" : ""}`}
                >
                    <div className="h-hb bg-themeDark">
                        <div className="h-hb w-full justify-items-center inline-flex justify-center">
                            <Image
                                src="menu.svg"
                                alt="Huntize"
                                width="45"
                                height="12"
                            />
                        </div>
                    </div>
                </Box>
                <Box
                    height="h-hb"
                    width={`${boxWidth / 16}rem`}
                    boxClass={`${boxes <= 3 ? "hidden" : ""}`}
                >
                    <div className="h-hb bg-themeOrange"></div>
                </Box>
                {more}
            </Flex>
        </header>
    );
}
