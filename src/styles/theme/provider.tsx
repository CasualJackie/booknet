"use client";
import React, {
  useState,
  useEffect,
  useLayoutEffect,
  createContext,
  useContext,
  useMemo,
} from "react";
import { getLocalStorageItem, setLocalStorageItem } from "@/utils/localStorage";
import { LIGHT_THEME, DARK_THEME } from "./constants";
import type { ThemeColor, ThemeContext, ThemeProviderProps } from "./types";

export const themeContext = createContext<ThemeContext>(undefined!);

export const ThemeProvider = (props: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeColor>(LIGHT_THEME);

  const setClassAttrTheme = () => {
    const themeElement = document.getElementsByTagName("html")[0];

    if (themeElement) {
      if (theme === DARK_THEME) {
        themeElement.classList.add(DARK_THEME);
        themeElement.classList.remove(LIGHT_THEME);
      } else {
        themeElement.classList.add(LIGHT_THEME);
        themeElement.classList.remove(DARK_THEME);
      }
    }
  };

  const setDarkTheme = () => {
    setTheme(DARK_THEME);
    setLocalStorageItem("theme", DARK_THEME);
  };

  const setLightTheme = () => {
    setTheme(LIGHT_THEME);
    setLocalStorageItem("theme", LIGHT_THEME);
  };

  useEffect(() => {
    const isOsDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
    const themeLocal = getLocalStorageItem<ThemeColor>("theme");
    const osMode = isOsDarkMode.matches ? DARK_THEME : LIGHT_THEME;
    setTheme(themeLocal || osMode);
  }, []);

  useLayoutEffect(() => {
    setClassAttrTheme();
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setDarkTheme,
      setLightTheme,
    }),
    [theme],
  );

  return (
    <themeContext.Provider value={value}>
      {props.children}
    </themeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(themeContext);
  if (!context) {
    throw new Error("useThemeContext hook should be used within ThemeProvider");
  }
  return context;
};

export default ThemeProvider;
