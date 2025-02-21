"use client";

import Flex from "./Flex";
import Box from "./Box";
import Logo from "../SVG/Logo";
import { useBoxAttributes } from "../../utils/hooks/UseBoxAttributes";

export default function Header() {
    const { width, boxes } = useBoxAttributes();

    return (
        <Flex>
            <Box height="h-[71px]" width={`${(width * boxes) / 16}rem`}>
                <div className="h-[71px] px-5 flex flex-row items-center justify-between">
                    <div className="h-[71px] px-5 flex flex-row items-center gap-4">
                        <a href="/">
                            <Logo />
                        </a>
                        <div className="text-3xl uppercase font-bold">
                            <a href="/">Huntize</a>
                        </div>
                    </div>
                    <p className="text-sm">
                        <a href="#">About Me</a>
                    </p>
                </div>
            </Box>
        </Flex>
    );
}
