"use client";
import { motion } from "framer-motion";
import { H36, H48, P20 } from "./Typography";

const ThemePreviewBox = () => {
    return (
        <motion.div
            className="h-ab px-4 w-full flex flex-col justify-between"
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                x: [-100, 0],
                transition: { delay: 1, staggerChildren: 0.05 },
            }}
        >
            <motion.div>
                <H48>AaBbCcDd</H48>
            </motion.div>
            <motion.div>
                <H36>AaBbCcDd</H36>
            </motion.div>
            <motion.div>
                <P20>AaBbCcDd</P20>
            </motion.div>
        </motion.div>
    );
};

export default ThemePreviewBox;
