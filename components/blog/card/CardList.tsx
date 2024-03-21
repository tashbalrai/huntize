"use client";
import { ICardList } from "@/types/ui";
import Card from "./Card";
import { Box, Flex } from "@/components/ui";
import { useBoxAttributes } from "@/utils/theme";
import Image from "next/image";
import { motion } from "framer-motion";

const CardList = ({ data }: ICardList) => {
    const { width: boxWidth, boxes } = useBoxAttributes();
    let i = 0;
    return (
        <Flex>
            <Box
                key={`card-${++i}`}
                height="h-ab"
                width={`${boxWidth / 16}rem`}
            >
                <div className="h-ab w-full justify-items-center inline-flex justify-center">
                    <Image
                        src="slogan1.svg"
                        alt="Huntize"
                        width="281"
                        height="285"
                    />
                </div>
            </Box>
            <Box
                key={`card-${++i}`}
                height="h-ab"
                width={`${boxWidth / 16}rem`}
                boxClass={`${boxes <= 2 ? "hidden" : ""}`}
            >
                &nbsp;
            </Box>
            <Box
                key={`card-${++i}`}
                height="h-ab"
                width={`${boxWidth / 16}rem`}
            >
                <div className="h-ab w-full justify-items-center inline-flex justify-center">
                    <Image
                        src="slogan2.svg"
                        alt="Huntize"
                        width="225"
                        height="285"
                    />
                </div>
            </Box>
            {boxes >= 5 && (
                <Box height="h-ab" width={`${boxWidth / 16}rem`}>
                    &nbsp;
                </Box>
            )}

            <Box
                key={`card-${++i}`}
                height="h-ab"
                width={`${boxWidth / 16}rem`}
                boxClass={`${boxes <= 3 ? "hidden" : ""}`}
            >
                &nbsp;
            </Box>
            {data.map((card) => {
                return (
                    <Card
                        key={`card-${++i}`}
                        data={card}
                        boxWidth={`${boxWidth / 16}rem`}
                    />
                );
            })}
        </Flex>
    );
};

export default CardList;
