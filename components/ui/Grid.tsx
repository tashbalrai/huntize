const Grid = ({
    children,
    className = "grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4",
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return <div className={className}>{children}</div>;
};

export { Grid as default, Grid };
