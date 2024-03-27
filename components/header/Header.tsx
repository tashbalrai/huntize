"use client";

import { useThemeContext } from "@/contexts/ThemeContext";
import { useBoxAttributes } from "@/utils/theme";
import { Box, Flex } from "@components/ui";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ThemePreviewBox from "../ui/ThemePreviewBox";

const variants = {
    hover: {
        height: "42rem",
        transition: { type: "spring", duration: 0.8 },
    },
};

export default function Header() {
    const theme = useThemeContext();
    const { width: boxWidth, boxes } = useBoxAttributes();

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
                    boxClass={`${boxes <= 3 ? "hidden" : ""}`}
                >
                    <motion.div
                        whileHover="hover"
                        variants={variants}
                        className="theme h-hb bg-themeBg hover:cursor-pointer relative"
                        data-theme="blue"
                    >
                        <ThemePreviewBox />
                    </motion.div>
                </Box>
                <Box
                    height="h-hb"
                    width={`${boxWidth / 16}rem`}
                    boxClass={`${boxes <= 3 ? "hidden" : ""}`}
                >
                    <motion.div
                        whileHover="hover"
                        variants={variants}
                        className="theme h-hb bg-themeBg hover:cursor-pointer relative"
                        data-theme="dark"
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
                </Box>
                <Box
                    height="h-hb"
                    width={`${boxWidth / 16}rem`}
                    boxClass={`${boxes <= 3 ? "hidden" : ""}`}
                >
                    <motion.div
                        whileHover="hover"
                        variants={variants}
                        className="theme h-hb bg-themeBg hover:cursor-pointer relative"
                        data-theme="orange"
                    ></motion.div>
                </Box>
                <div
                    className={`h-hb w-full flex flex-row gap-2 mx-1 ${
                        boxes > 3 ? "hidden" : ""
                    }`}
                >
                    <motion.div
                        whileHover="hover"
                        variants={variants}
                        data-theme="blue"
                        className="theme h-hb bg-themeBg w-1/3 hover:cursor-pointer hover:relative"
                    ></motion.div>
                    <motion.div
                        whileHover="hover"
                        variants={variants}
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
                        variants={variants}
                        data-theme="orange"
                        className="theme h-hb bg-themeBg w-1/3 hover:cursor-pointer hover:relative"
                    ></motion.div>
                </div>
            </Flex>
        </header>
    );
}
