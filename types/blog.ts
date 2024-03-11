export interface IArticle {
    title: string;
    category: string;
    tags: string[];
    excerpt: string;
    description: string;
    slug: string;
    image: string;
    publishedAt: string;
    readTime: string;
    author: string;
}

export interface ICardList {
    cards: IArticle[];
}
