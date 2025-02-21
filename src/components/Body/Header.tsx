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
                <div className="h-[71px] px-5 flex flex-row">
                    <div className="h-[71px] px-5 flex flex-row items-center gap-4">
                        <Logo />
                        <div className="text-3xl uppercase font-bold">
                            Huntize
                        </div>
                    </div>
                    <strong>About Me</strong>
                </div>
            </Box>
        </Flex>
    );
}
