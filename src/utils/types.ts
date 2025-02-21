export interface IArticle {
    [key: string]: any;
}

export interface ICard {
    data: IArticle;
    boxWidth?: string;
}

export interface ICardList {
    data: IArticle[];
}

export interface ITextTag {
    children: React.ReactNode;
    className?: string;
}

export interface IBox {
    height?: string;
    width?: string;
    children: React.ReactNode;
    boxClass?: string;
}

export enum ThemeNames {
    DARK = "dark",
    WHITE = "white",
}
