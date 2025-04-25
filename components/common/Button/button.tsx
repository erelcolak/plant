"use client";
import classNames from "classnames";

import { AlignVariant } from "@/types/AlignVariant";
import { ColorVariant } from "@/types/ColorVariant";
import { SizeVariant } from "@/types/SizeVariant";

import { IButton } from "./button.types";
import styles from "./button.module.scss";

// Button component
const Button = (props: IButton) => {
  // destructuring props
  const { id, alignVariant = AlignVariant.center, colorVariant = ColorVariant.primary, sizeVariant = SizeVariant.default } = props;
  // state

  // context hooks

  // queries

  // mutations

  // formik

  // effect

  // other variables/functions/handlers

  // render
  return <button id={id} className={classNames(styles.button, styles[alignVariant], styles[colorVariant], styles[sizeVariant])}></button>;
};

// export
export default Button;
