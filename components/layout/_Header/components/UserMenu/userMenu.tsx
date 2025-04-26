"use client";

import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import Cookies from "js-cookie";

import Button from "@/components/common/Button/button";

import { ModalTypes } from "@/contexts/ModalContext/modalContext.types";
import { Theme } from "@/contexts/ThemeContext/themeContext.types";
import useModal from "@/hooks/useModal";
import useTheme from "@/hooks/useTheme";

import { CookieLanguage } from "@/utils/constants";

import { ColorVariant } from "@/types/ColorVariant";
import { Language } from "@/types/Language";
import { SizeVariant } from "@/types/SizeVariant";

import styles from "./userMenu.module.scss";

// UserMenu component
const UserMenu = () => {
  // destructuring props

  // state

  // context hooks
  const t = useTranslations();
  const router = useRouter();
  const { showModal } = useModal();
  const { theme, switchTheme } = useTheme();
  const currentLanguage = Cookies.get(CookieLanguage);
  // queries

  // mutations

  // formik

  // effect

  // other variables/functions/handlers
  const changeLanguage = (locale: string) => {
    Cookies.set(CookieLanguage, locale);
    router.refresh();
  };
  // render
  return (
    <div className={styles.userMenu}>
      <Button
        onClick={() => {
          showModal(ModalTypes.ModalAddPlant, {
            data: {},
          });
        }}
        icon="plus-lg"
        text={t("Header-Button-AddNew")}
        sizeVariant={SizeVariant.small}
        colorVariant={ColorVariant.light}
      />
      <Button onClick={switchTheme} onlyIcon icon={theme === Theme.DARK ? "moon" : "sun"} sizeVariant={SizeVariant.small} colorVariant={ColorVariant.light} />
      <Button
        onClick={() => {
          if (currentLanguage === Language.EN.toString()) {
            changeLanguage(Language.TR);
          } else {
            changeLanguage(Language.EN);
          }
        }}
        onlyIcon
        icon="translate"
        sizeVariant={SizeVariant.small}
        colorVariant={ColorVariant.light}
      />
    </div>
  );
};

// export
export default UserMenu;
