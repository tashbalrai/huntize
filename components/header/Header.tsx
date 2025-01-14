"use client";

import { useBoxAttributes } from "@/utils/theme";
import { Box, Flex } from "@components/ui";
import React from "react";
import LogoSvg from "../ui/svg/Logo";

export default function Header() {
    const { width: boxWidth, boxes } = useBoxAttributes();
    const noEmptyBoxes = boxes - 1;
    return (
        <header>
            <Flex>
                <Box height="h-hb" width={`${boxWidth / 16}rem`}>
                    <div className="h-hb px-5 flex flex-row text-textColor items-center gap-4">
                        <LogoSvg />
                        <div className="text-3xl text-textColor uppercase font-bold">
                            Huntize
                        </div>
                    </div>
                </Box>
                {noEmptyBoxes > 0 &&
                    [...Array(noEmptyBoxes)].map((_, i) => (
                        <Box
                            key={i}
                            height="h-hb"
                            width={`${boxWidth / 16}rem`}
                        >
                            &nbsp;
                        </Box>
                    ))}
            </Flex>
        </header>
    );
}
