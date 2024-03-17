import { Box, H36, P14, P18, S18 } from "@components/ui";
import { ICard } from "@/types/ui";

const Card = ({ data, boxWidth }: ICard) => {
    return (
        <Box height="h-ab" width={boxWidth}>
            <article className="flex flex-col h-full px-5 pt-11 pb-6 justify-between">
                <div className="flex flex-col gap-8">
                    <S18>/ {data.category}</S18>
                    <H36>{data.title}</H36>
                    <P18>{data.excerpt}</P18>
                </div>
                <div className="flex flex-row items-baseline gap-2">
                    <P18>{data.author}</P18>
                    <P14>{data.publishedAt}</P14>
                </div>
            </article>
        </Box>
    );
};

export default Card;
