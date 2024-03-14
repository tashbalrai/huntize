"use client";

import { Box, Flex, Grid } from "@components/ui";

export default function Header() {
    return (
        <header>
            <Flex>
                <Box height="h-hb">Huntize</Box>
                <Box height="h-hb" boxClass="max-tablet:hidden">
                    Huntize
                </Box>
                <Box height="h-hb" boxClass="max-laptop:hidden">
                    Huntize
                </Box>
                <Box height="h-hb" boxClass="max-desktop:hidden">
                    Huntize
                </Box>
            </Flex>
        </header>
    );
}
