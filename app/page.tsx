import Root from "@components/root";
import Header from "@components/header";
import CardList from "@components/blog/card";
import { ICard } from "@/types/blog";

export default async function Home() {
    const cards: ICard[] = [
        {
            title: "Proof of Behaviour and rewards money can’t buy",
            excerpt:
                "The effectiveness of a static application security solution hinges on its ability to provide extensive vulnerability coverage and support for a wide range of languages and frameworks.",
            category: "Javascript",
            author: "Vipan Balrai",
            publishedAt: "Today",
        },
        {
            title: "Proof of Behaviour and rewards money can’t buy",
            excerpt:
                "The effectiveness of a static application security solution hinges on its ability to provide extensive vulnerability coverage and support for a wide range of languages and frameworks.",
            category: "Javascript",
            author: "Vipan Balrai",
            publishedAt: "Today",
        },
        {
            title: "Proof of Behaviour and rewards money can’t buy",
            excerpt:
                "The effectiveness of a static application security solution hinges on its ability to provide extensive vulnerability coverage and support for a wide range of languages and frameworks.",
            category: "Javascript",
            author: "Vipan Balrai",
            publishedAt: "Today",
        },
        {
            title: "Proof of Behaviour and rewards money can’t buy",
            excerpt:
                "The effectiveness of a static application security solution hinges on its ability to provide extensive vulnerability coverage and support for a wide range of languages and frameworks.",
            category: "Javascript",
            author: "Vipan Balrai",
            publishedAt: "Today",
        },
    ];
    return (
        <Root>
            <Header />
            <CardList cards={cards} />
        </Root>
    );
}
