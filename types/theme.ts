export enum ThemeColor {
    White = "white",
    Black = "black",
    Blue = "blue",
    Orange = "orange",
    System = "system"
}

export enum GridSize {
    One = 1,
    Two = 2,
    Three = 3,
    Four = 4,
}

export default interface ITheme {
    theme: ThemeColor;
    setTheme?: (theme: ThemeColor) => void;
}
