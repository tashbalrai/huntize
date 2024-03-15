"use client";
import { ICardList } from "@/types/ui";
import Card from "./Card";
import { Flex } from "@/components/ui";
import { useBoxAttributes } from "@/utils/theme";

const CardList = ({ data }: ICardList) => {
    const { width: boxWidth } = useBoxAttributes();
    return (
        <Flex>
            {data.map((card) => {
                return (
                    <Card
                        key={Math.random()}
                        data={card}
                        boxWidth={`${boxWidth / 16}rem`}
                    />
                );
            })}
        </Flex>
    );
};

export default CardList;
