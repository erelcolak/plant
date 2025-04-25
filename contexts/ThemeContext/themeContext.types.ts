export interface IThemeContext {
  theme: Theme;
  switchTheme: () => void;
}

export enum Theme {
  DARK = "dark",
  LIGHT = "light",
}
