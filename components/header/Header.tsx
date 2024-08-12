"use client";

import { useThemeContext } from "@/contexts/ThemeContext";
import { useBoxAttributes } from "@/utils/theme";
import { Box, Flex } from "@components/ui";
import React from "react";
import Image from "next/image";
import ThemePreviewBox from "../ui/ThemePreviewBox";
import { ThemeColor } from "@/types/theme";
import { motion } from "framer-motion";

export default function Header() {
    const theme = useThemeContext();
    const { width: boxWidth, boxes } = useBoxAttributes();

    return (
        <header>
            <Flex>
                <Box height="h-hb" width={`${boxWidth / 16}rem`}>
                    <div
                        className="h-hb px-5 flex flex-row items-center gap-4"
                        style={{ color: "green" }}
                    >
                        <Image
                            alt="Huntize"
                            src='data:image/svg+xml;utf8,<svg width="53" height="26" viewBox="0 0 53 26" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="M42.7182 2.24457L46.2538 5.7801M6.81854 2.24457L10.354 5.7801M16.049 2.24457L19.5845 5.7801M25.5108 2.24457L29.0463 5.7801M34.1147 2.24457L37.6502 5.7801M47.2086 6.34824L50.7441 9.88377M2.43237 6.58008L5.96791 10.1156M11.0358 6.58008L14.5714 10.1156M20.2663 6.58008L23.8019 10.1156M29.7281 6.58008L33.2636 10.1156M38.3321 6.58008L41.8676 10.1156M7.0072 10.9156L11.9569 15.8653M15.4224 11.2256L18.958 14.7611M24.6529 11.2256L28.1884 14.7611M34.1147 11.2256L37.6502 14.7611M41.304 15.7994L46.2537 10.8497M33.1941 15.5616L24.6523 24.1034M19.6466 15.5616L24.6529 20.5679" stroke="currentColor" stroke-width="5"/>
                            </g>
                            </svg>'
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
                    boxClass={`${boxes <= 3 ? "hidden" : ""}`}
                >
                    <ThemePreviewBox theme={ThemeColor.Blue} />
                </Box>
                <Box
                    height="h-hb"
                    width={`${boxWidth / 16}rem`}
                    boxClass={`${boxes <= 3 ? "hidden" : ""}`}
                >
                    <ThemePreviewBox theme={ThemeColor.Black} menu={true} />
                </Box>
                <Box
                    height="h-hb"
                    width={`${boxWidth / 16}rem`}
                    boxClass={`${boxes <= 3 ? "hidden" : ""}`}
                >
                    <ThemePreviewBox theme={ThemeColor.Orange} />
                </Box>
                {/* <div
                    className={`h-hb w-full flex flex-row gap-2 mx-1 ${
                        boxes > 3 ? "hidden" : ""
                    }`}
                >
                    <motion.div
                        whileHover="hover"
                        // variants={variants}
                        data-theme="blue"
                        className="theme h-hb bg-themeBg w-1/3 hover:cursor-pointer hover:relative"
                    ></motion.div>
                    <motion.div
                        whileHover="hover"
                        // variants={variants}
                        data-theme="dark"
                        className="theme h-hb bg-themeBg w-1/3 hover:cursor-pointer hover:relative"
                    >
                        <div className="h-hb w-full justify-items-center inline-flex justify-center">
                            <Image
                                src="menu.svg"
                                alt="Huntize"
                                width="45"
                                height="12"
                            />
                        </div>
                    </motion.div>
                    <motion.div
                        whileHover="hover"
                        // variants={variants}
                        data-theme="orange"
                        className="theme h-hb bg-themeBg w-1/3 hover:cursor-pointer hover:relative"
                    ></motion.div>
                </div> */}
            </Flex>
        </header>
    );
}
