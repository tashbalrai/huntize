"use client";
import { ICardList } from "@/types/ui";
import Card from "./Card";
import { Flex } from "@/components/ui";
import { useBoxAttributes } from "@/utils/theme";
import Slogans from "./Slogans";

const CardList = ({ data }: ICardList) => {
    const { width: boxWidth } = useBoxAttributes();
    let i = 0;
    return (
        <Flex>
            <Slogans />
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
