import { ICardList } from "@/types/blog";
import Card from "./Card";
import Grid from "@/components/ui/Grid";
import { Flex } from "@/components/ui";

const CardList = ({ cards }: ICardList) => {
    return (
        <Flex>
            {cards.map((card) => {
                return (
                    <Card
                        key={Math.random()}
                        title={card.title}
                        excerpt={card.excerpt}
                        category={card.category}
                        author={card.author}
                        publishedAt={card.publishedAt}
                    />
                );
            })}
        </Flex>
    );
};

export default CardList;
