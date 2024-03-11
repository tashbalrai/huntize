import { H5Tag, P1Tag, P3Tag, P4Tag, Box } from "@components/ui";
import { ICard } from "@/types/blog";

const Card = ({ title, excerpt, category, author, publishedAt }: ICard) => {
    return (
        <Box height="h-ab">
            <article className="flex flex-col h-full px-5 pt-11 pb-6 justify-between">
                <div className="flex flex-col gap-8">
                    <P1Tag>/ {category}</P1Tag>
                    <H5Tag>{title}</H5Tag>
                    <P3Tag>{excerpt}</P3Tag>
                </div>
                <div className="flex flex-row items-baseline gap-2">
                    <P3Tag>{author}</P3Tag>
                    <P4Tag>{publishedAt}</P4Tag>
                </div>
            </article>
        </Box>
    );
};

export default Card;
