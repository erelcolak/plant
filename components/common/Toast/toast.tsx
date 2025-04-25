"use client";

import classNames from "classnames";

import { ColorVariant } from "@/types/ColorVariant";

import { IToast, ToastStatus } from "./toast.types";
import styles from "./toast.module.scss";

// Toast component
const Toast = (props: IToast) => {
  // destructuring props
  const { text, id, status = ToastStatus.error } = props;
  // state

  // context hooks

  // queries

  // mutations

  // formik

  // effect

  // other variables/functions/handlers
  const getColorVariant = (): ColorVariant => {
    switch (status) {
      case ToastStatus.success:
        return ColorVariant.success;
      case ToastStatus.error:
        return ColorVariant.danger;
    }
  };
  const getIcon = (): string => {
    switch (status) {
      case ToastStatus.success:
        return "check2-circle";
      case ToastStatus.error:
        return "exclamation-triangle";
    }
  };
  // render
  return (
    <div id={id} className={classNames(styles.toast, styles[getColorVariant()])}>
      <i className={classNames(styles.icon, `bi-${getIcon()}`)}></i>
      {text}
    </div>
  );
};

// export
export default Toast;
