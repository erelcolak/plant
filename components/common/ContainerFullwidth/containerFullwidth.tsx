"use client";
import classNames from "classnames";

import { IContainerFullwidth } from "./containerFullwidth.types";
import styles from "./containerFullwidth.module.scss";

// ContainerFullwidth component
const ContainerFullwidth = (props: IContainerFullwidth) => {
  // destructuring props
  const { children, className } = props;
  // state

  // context hooks

  // queries

  // effect

  // other variables/functions/handlers

  // render
  return <div className={classNames(styles.containerFullwidth, className && className)}>{children}</div>;
};

// export
export default ContainerFullwidth;
