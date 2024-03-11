import { ICardList } from "@/types/blog";
import Card from "./Card";
import Grid from "@/components/ui/Grid";

const CardList = ({ cards }: ICardList) => {
    return (
        <Grid>
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
        </Grid>
    );
};

export default CardList;
