import { ITextTag } from "@/types/ui";

export const P20 = ({ children, className = "font-normal" }: ITextTag) => {
    return <p className={`text-xl ${className}`}>{children}</p>;
};

export const P18 = ({ children, className = "font-normal" }: ITextTag) => {
    return <p className={`text-lg ${className}`}>{children}</p>;
};

export const P14 = ({ children, className = "font-normal" }: ITextTag) => {
    return <p className={`text-sm ${className}`}>{children}</p>;
};

export const S18 = ({ children, className = "font-bold" }: ITextTag) => {
    return (
        <strong className={`text-lg text-colorHeadings ${className}`}>
            {children}
        </strong>
    );
};

export const S20 = ({ children, className = "font-bold" }: ITextTag) => {
    return (
        <strong className={`text-xl text-colorHeadings ${className}`}>
            {children}
        </strong>
    );
};

export const H72 = ({ children, className = "font-extrabold" }: ITextTag) => {
    return (
        <h1 className={`text-7xl text-colorHeadings ${className}`}>
            {children}
        </h1>
    );
};

export const H60 = ({ children, className = "font-extrabold" }: ITextTag) => {
    return (
        <h2 className={`text-6xl text-colorHeadings ${className}`}>
            {children}
        </h2>
    );
};

export const H48 = ({ children, className = "font-extrabold" }: ITextTag) => {
    return (
        <h3 className={`text-5xl text-colorHeadings ${className}`}>
            {children}
        </h3>
    );
};

export const H36 = ({ children, className = "font-bold" }: ITextTag) => {
    return (
        <h4 className={`text-4xl text-colorHeadings ${className}`}>
            {children}
        </h4>
    );
};

export const H30 = ({ children, className = "font-bold" }: ITextTag) => {
    return (
        <h5 className={`text-3xl text-colorHeadings ${className}`}>
            {children}
        </h5>
    );
};

export const H24 = ({ children, className = "font-bold" }: ITextTag) => {
    return (
        <h6 className={`text-2xl text-colorHeadings ${className}`}>
            {children}
        </h6>
    );
};
