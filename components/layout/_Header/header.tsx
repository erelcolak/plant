"use client";

import Button from "@/components/common/Button/button";
import ContainerFullwidth from "@/components/common/ContainerFullwidth";

import { Theme } from "@/contexts/ThemeContext/themeContext.types";
import useTheme from "@/hooks/useTheme";

import { ColorVariant } from "@/types/ColorVariant";
import { SizeVariant } from "@/types/SizeVariant";

import styles from "./header.module.scss";

// Header component
const Header = () => {
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
    <ContainerFullwidth className={styles.header}>
      <Button onClick={switchTheme} onlyIcon icon={theme === Theme.DARK ? "moon" : "sun"} sizeVariant={SizeVariant.small} colorVariant={ColorVariant.light} />
    </ContainerFullwidth>
  );
};

// export
export default Header;
