import { useContext } from "react";

import { ThemeContext } from "@/contexts/ThemeContext";

const useTheme = () => {
  const { theme, switchTheme } = useContext(ThemeContext);
  return {
    theme,
    switchTheme,
  };
};

export default useTheme;
