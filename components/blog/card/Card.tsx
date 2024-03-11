import { H2Tag, P1Tag, P2Tag, P3Tag } from "@/components/typography";
import { IArticle } from "@/types/blog";

const Card = ({ title, excerpt, category, author, publishedAt }: IArticle) => {
    return (
        <article className="flex flex-col">
            <p className="text-3xl font-semibold">{category}</p>
            <H2Tag>{title}</H2Tag>
            <P1Tag>{excerpt}</P1Tag>
            <P2Tag>{author}</P2Tag>
            <P3Tag>{publishedAt}</P3Tag>
        </article>
    );
};

export default Card;
