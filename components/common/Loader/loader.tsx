"use client";

import classNames from "classnames";

import { ILoader } from "./loader.types";
import styles from "./loader.module.scss";

// Loader component
const Loader = (props: ILoader) => {
  // destructuring props
  const { rounded } = props;
  // state

  // context hooks

  // queries

  // effect

  // other variables/functions/handlers

  // render
  return (
    <div className={classNames(styles.loader, rounded && styles.rounded)}>
      <div className={styles.spinner}></div>
      <div className={styles.overlay}></div>
    </div>
  );
};

// export
export default Loader;
