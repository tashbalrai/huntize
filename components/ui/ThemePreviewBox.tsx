"use client";
import { motion } from "framer-motion";
import { H36, H48, P20, S20 } from "./Typography";
import { ThemeColor } from "@/types/theme";
import Image from "next/image";
import { useCallback, useState } from "react";
import { useThemeContext } from "@/contexts/ThemeContext";

const containerVariant = {
    open: {
        opacity: 1,
        scale: [0, 1],
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 24,
            scale: { duration: 0.4 },
        },
    },
    closed: {
        opacity: 0,
    },
};
const aVariants = {
    open: { display: "flex", opacity: [0, 1], transition: { duration: 0.3 } },
    closed: {
        opacity: 0,
        transitionEnd: { display: "none" },
    },
};

const ThemePreviewBox = ({
    theme,
    menu = false,
    className,
}: {
    theme: ThemeColor;
    menu?: boolean;
    className?: string;
}) => {
    const [isOver, setIsOver] = useState(false);
    const [boxTheme, setBoxTheme] = useState(theme);
    const themeContext = useThemeContext();

    const handlerTheme = () => {
        themeContext.setTheme?.(boxTheme);
        setBoxTheme(themeContext.theme);
    };

    return (
        <motion.div
            className={`theme group flex flex-col bg-themeBg relative ${className}`}
            initial={false}
            animate={`${isOver ? "open" : "closed"}`}
            data-theme={boxTheme}
            onHoverStart={() => setIsOver(true)}
            onHoverEnd={() => setIsOver(false)}
        >
            {/* Theme Heading */}
            <motion.div className="h-hb z-10 group-hover:border-b group-hover:border-line w-full flex gap-8 justify-center items-center">
                <motion.a
                    href="#"
                    className="hidden"
                    onClick={handlerTheme}
                    variants={aVariants}
                >
                    <S20>Apply this theme</S20>
                </motion.a>

                {menu && (
                    <Image
                        src="menu.svg"
                        alt="Huntize"
                        width="45"
                        height="12"
                    />
                )}
            </motion.div>
            {/* Theme preview text */}
            <motion.div
                variants={containerVariant}
                className="theme top-[100%] opacity-0 bg-themeBg w-full gap-8 flex flex-col justify-start p-8 mb-16 absolute z-9"
                data-theme={boxTheme}
            >
                <motion.ul className="gap-8 flex flex-col">
                    <motion.li>
                        <H48>AaBbCcDd</H48>
                    </motion.li>
                    <motion.li>
                        <H36>AaBbCcDd</H36>
                    </motion.li>
                    <motion.li>
                        <H36>Huntize</H36>
                    </motion.li>
                    <motion.li>
                        <H36>Huntize</H36>
                    </motion.li>
                    <motion.li>
                        <P20>It&apos;s all about hunting the right words.</P20>
                    </motion.li>
                </motion.ul>
            </motion.div>
        </motion.div>
    );
};

export default ThemePreviewBox;
