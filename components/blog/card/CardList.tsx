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
                        title="Proof of Behaviour and rewards money can’t buy"
                        excerpt="The effectiveness of a static application security solution hinges on its ability to provide extensive vulnerability coverage and support for a wide range of languages and frameworks."
                        category="Javascript"
                        author="Vipan Balrai"
                        publishedAt="Today"
                    />
                );
            })}
        </Grid>
    );
};

export default CardList;
