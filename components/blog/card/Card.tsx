import { H5Tag, P1Tag, P3Tag, P4Tag, Box } from "@components/ui";
import { ICard } from "@/types/ui";

const Card = ({ data, boxWidth }: ICard) => {
    return (
        <Box height="h-ab" width={boxWidth}>
            <article className="flex flex-col h-full px-5 pt-11 pb-6 justify-between">
                <div className="flex flex-col gap-8">
                    <P1Tag>/ {data.category}</P1Tag>
                    <H5Tag>{data.title}</H5Tag>
                    <P3Tag>{data.excerpt}</P3Tag>
                </div>
                <div className="flex flex-row items-baseline gap-2">
                    <P3Tag>{data.author}</P3Tag>
                    <P4Tag>{data.publishedAt}</P4Tag>
                </div>
            </article>
        </Box>
    );
};

export default Card;
