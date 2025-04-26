"use client";

import Button from "@/components/common/Button/button";

import { Theme } from "@/contexts/ThemeContext/themeContext.types";
import useTheme from "@/hooks/useTheme";

import { ColorVariant } from "@/types/ColorVariant";
import { SizeVariant } from "@/types/SizeVariant";

import styles from "./userMenu.module.scss";

// UserMenu component
const UserMenu = () => {
  // destructuring props

  // state

  // context hooks
  const { theme, switchTheme } = useTheme();

  // queries

  // mutations

  // formik

  // effect

  // other variables/functions/handlers

  // render
  return (
    <div className={styles.userMenu}>
      <Button onClick={switchTheme} onlyIcon icon={theme === Theme.DARK ? "moon" : "sun"} sizeVariant={SizeVariant.small} colorVariant={ColorVariant.light} />
    </div>
  );
};

// export
export default UserMenu;
