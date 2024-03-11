export interface ICard {
    title: string;
    category: string;
    excerpt: string;
    author: string;
    publishedAt: string;
}

export interface ICardList {
    cards: ICard[];
}

export interface IArticle extends ICard {
    tags: string[];
    description: string;
    slug: string;
    image: string;
    readTime: string;
}

export interface IBox {
    height?: string;
    width?: string;
    children: React.ReactNode;
}
