"use client";
import classNames from "classnames";

import { IFormItem } from "./formItem.types";
import styles from "./formItem.module.scss";

// FormItem component
const FormItem = (props: IFormItem) => {
  // destructuring props
  const { children, error, info, label } = props;
  // state

  // context hooks

  // queries

  // mutations

  // formik

  // effect

  // other variables/functions/handlers

  // render
  return (
    <div className={styles.formItem}>
      {label && <div className={styles.title}>{label}</div>}
      <div className={styles.inputContainer}>{children}</div>
      {error && (
        <div className={classNames(styles.subtitle, styles.error)}>
          <i className={classNames(styles.icon, "bi-exclamation-circle")}></i>
          {error}
        </div>
      )}
      {info && (
        <div className={classNames(styles.subtitle, styles.info)}>
          <i className={classNames(styles.icon, "bi-info-circle")}></i>
          {info}
        </div>
      )}
    </div>
  );
};

// export
export default FormItem;
