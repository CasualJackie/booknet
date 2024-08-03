import { LIGHT_THEME, DARK_THEME } from "./constants";

export type ThemeColor = typeof LIGHT_THEME | typeof DARK_THEME;

export type ThemeProviderProps = {
  children?: React.ReactNode;
};

export type ThemeContext = {
  theme: string;
  setDarkTheme: () => void;
  setLightTheme: () => void;
};
