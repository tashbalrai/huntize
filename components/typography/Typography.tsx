import { ITextTag } from "@/types/theme";

export const P1Tag = ({ children, className }: ITextTag) => {
    return <p className={`text-xl font-normal ${className}`}>{children}</p>;
};

export const P2Tag = ({ children, className }: ITextTag) => {
    return <p className={`text-lg font-normal ${className}`}>{children}</p>;
};

export const P3Tag = ({ children, className }: ITextTag) => {
    return <p className={`text-sm font-normal ${className}`}>{children}</p>;
};

export const P4Tag = ({ children, className }: ITextTag) => {
    return <p className={`text-xs font-normal ${className}`}>{children}</p>;
};

export const H1Tag = ({ children, className }: ITextTag) => {
    return (
        <h1 className={`text-7xl font-extrabold ${className}`}>{children}</h1>
    );
};

export const H2Tag = ({ children, className }: ITextTag) => {
    return (
        <h2 className={`text-6xl font-extrabold ${className}`}>{children}</h2>
    );
};

export const H3Tag = ({ children, className }: ITextTag) => {
    return (
        <h3 className={`text-5xl font-extrabold ${className}`}>{children}</h3>
    );
};

export const H4Tag = ({ children, className }: ITextTag) => {
    return (
        <h4 className={`text-4xl font-extrabold ${className}`}>{children}</h4>
    );
};

export const H5Tag = ({ children, className }: ITextTag) => {
    return <h5 className={`text-3xl font-bold ${className}`}>{children}</h5>;
};

export const H6Tag = ({ children, className }: ITextTag) => {
    return <h6 className={`text-2xl font-bold ${className}`}>{children}</h6>;
};
