import { motion } from "framer-motion";
import React from "react";

const variants = {
    initial: {
        opacity: 1,
    },
    hover: {
        opacity: [0, 1],
        transition: {
            staggerChildren: 0.02,
        },
    },
};

export default function SplitText({ text }: { text: string }) {
    const ts = text.replaceAll(" ", "#").split("");
    return (
        <>
            <span className="sr-only">{text}</span>
            <motion.span
                initial="initial"
                whileHover="hover"
                variants={variants}
                aria-hidden
            >
                {ts.map((char, i) => (
                    <motion.span
                        variants={variants}
                        key={`char-${i}`}
                        className="inline-block"
                    >
                        {char === "#" ? <>&nbsp;</> : char}
                    </motion.span>
                ))}
            </motion.span>
        </>
    );
}
