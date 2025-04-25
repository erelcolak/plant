"use client";
import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

import { CookieTheme } from "@/utils/constants";

import { IThemeContext, Theme } from "./themeContext.types";

const ThemeContext = createContext<IThemeContext>({
  theme: Theme.LIGHT,
  switchTheme: () => null,
});
// ThemeContextProvider component
const ThemeContextProvider = (props: any) => {
  // destructuring props

  // state
  const [theme, setTheme] = useState<Theme>(() => {
    const themeCookie = Cookies.get(CookieTheme) as Theme;
    return themeCookie || (Theme.LIGHT as string);
  });
  // context hooks

  // queries

  // effect
  useEffect(() => {
    // set cookie
    Cookies.set(CookieTheme, theme);
    // set html doc
    const html = document.querySelector("html");
    if (theme === Theme.DARK) {
      (html as any).dataset.theme = "dark";
    } else {
      (html as any).dataset.theme = "light";
    }
  }, [theme]);
  // other variables/functions/handlers
  const switchTheme = () => {
    setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };
  // render
  return (
    <ThemeContext.Provider
      value={{
        theme,
        switchTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

// export
export { ThemeContext, ThemeContextProvider };
