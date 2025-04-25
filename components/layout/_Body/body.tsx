"use client";

import { IBody } from "./body.types";
import styles from "./body.module.scss";

// Body component
const Body = (props: IBody) => {
  // destructuring props
  const { children } = props;
  // state

  // context hooks

  // queries

  // effect

  // other variables/functions/handlers

  // render
  return <div className={styles.body}>{children}</div>;
};

// export
export default Body;
