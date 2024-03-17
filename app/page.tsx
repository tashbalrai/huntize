import Root from "@components/root";
import Header from "@components/header";
import CardList from "@components/blog/card";
import { IArticle } from "@/types/ui";
import Footer from "@/components/footer/Footer";

const cards: IArticle[] = [
    {
        title: "Proof of Behaviour and rewards money can’t buy",
        excerpt:
            "its ability to provide extensive vulnerability coverage and support for a wide range of languages and frameworks.",
        category: "Javascript",
        author: "V. Balrai",
        publishedAt: "Today",
    },
    {
        title: "Proof of Behaviour and rewards money can’t buy",
        excerpt:
            "The effectiveness of a static application security solution hinges on its ability to provide extensive vulnerability coverage and support for a wide range of languages and frameworks.",
        category: "Javascript",
        author: "V. Balrai",
        publishedAt: "Today",
    },
    {
        title: "Proof of Behaviour and rewards money can’t buy",
        excerpt:
            "The effectiveness of a static application security solution hinges on its ability to provide extensive vulnerability coverage and support for a wide range of languages and frameworks.",
        category: "Javascript",
        author: "V. Balrai",
        publishedAt: "Today",
    },
    {
        title: "Proof of Behaviour and rewards money can’t buy",
        excerpt:
            "The effectiveness of a static application security solution hinges on its ability to provide extensive vulnerability coverage and support for a wide range of languages and frameworks.",
        category: "Javascript",
        author: "V. Balrai",
        publishedAt: "Today",
    },
    {
        title: "Proof of Behaviour and rewards money can’t buy",
        excerpt:
            "The effectiveness of a static application security solution hinges on its ability to provide extensive vulnerability coverage and support for a wide range of languages and frameworks.",
        category: "Javascript",
        author: "V. Balrai",
        publishedAt: "Today",
    },
    {
        title: "Proof of Behaviour and rewards money can’t buy",
        excerpt:
            "The effectiveness of a static application security solution hinges on its ability to provide extensive vulnerability coverage and support for a wide range of languages and frameworks.",
        category: "Javascript",
        author: "V. Balrai",
        publishedAt: "Today",
    },
    {
        title: "Proof of Behaviour and rewards money can’t buy",
        excerpt:
            "The effectiveness of a static application security solution hinges on its ability to provide extensive vulnerability coverage and support for a wide range of languages and frameworks.",
        category: "Javascript",
        author: "V. Balrai",
        publishedAt: "Today",
    },
    {
        title: "Proof of Behaviour and rewards money can’t buy",
        excerpt:
            "The effectiveness of a static application security solution hinges on its ability to provide extensive vulnerability coverage and support for a wide range of languages and frameworks.",
        category: "Javascript",
        author: "V. Balrai",
        publishedAt: "Today",
    },
    {
        title: "Proof of Behaviour and rewards money can’t buy",
        excerpt:
            "The effectiveness of a static application security solution hinges on its ability to provide extensive vulnerability coverage and support for a wide range of languages and frameworks.",
        category: "Javascript",
        author: "V. Balrai",
        publishedAt: "Today",
    },
    {
        title: "Proof of Behaviour and rewards money can’t buy",
        excerpt:
            "The effectiveness of a static application security solution hinges on its ability to provide extensive vulnerability coverage and support for a wide range of languages and frameworks.",
        category: "Javascript",
        author: "V. Balrai",
        publishedAt: "Today",
    },
];

export default async function Home() {
    return (
        <Root>
            <Header />
            <CardList data={cards} />
            <Footer />
        </Root>
    );
}
