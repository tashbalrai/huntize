const Grid = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4">
            {children}
        </div>
    );
};

export { Grid as default, Grid };
