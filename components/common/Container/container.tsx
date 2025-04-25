"use client";
import { IContainer } from "./container.types";
import styles from "./container.module.scss";

// Container component
const Container = (props: IContainer) => {
  // destructuring props
  const { children } = props;
  // state

  // context hooks

  // queries

  // effect

  // other variables/functions/handlers

  // render
  return <div className={styles.container}>{children}</div>;
};

// export
export default Container;
