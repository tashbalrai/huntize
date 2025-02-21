"use client";
import { useBoxAttributes } from "../../utils/hooks/UseBoxAttributes";
import type { ICardList } from "../../utils/types";
import Card from "./Card";
import Flex from "./Flex";
import Slogans from "./Slogans";

const CardList = ({ data }: ICardList) => {
    let i = 0;
    return (
        <Flex>
            <Slogans />
            {data.map((card) => {
                return <Card key={`card-${++i}`} data={card} />;
            })}
        </Flex>
    );
};

export default CardList;
