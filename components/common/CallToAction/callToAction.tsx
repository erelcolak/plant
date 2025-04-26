"use client";
import classNames from "classnames";

import { ICallToAction } from "./callToAction.types";
import styles from "./callToAction.module.scss";

// CallToAction component
const CallToAction = (props: ICallToAction) => {
  // destructuring props
  const { icon, subtitle, title } = props;
  // state

  // context hooks

  // queries

  // mutations

  // formik

  // effect

  // other variables/functions/handlers

  // render
  return (
    <div className={styles.callToAction}>
      <i className={classNames(styles.icon, `bi-${icon}`)}></i>
      <div className={styles.title}>{title}</div>
      <div className={styles.subtitle}>{subtitle}</div>
    </div>
  );
};

// export
export default CallToAction;
