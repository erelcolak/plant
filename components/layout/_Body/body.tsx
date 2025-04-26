"use client";

import ContainerFullwidth from "@/components/common/ContainerFullwidth";

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
  return <ContainerFullwidth className={styles.body}>{children}</ContainerFullwidth>;
};

// export
export default Body;
