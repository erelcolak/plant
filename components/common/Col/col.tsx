"use client";

import { ICol } from "./col.types";
import styles from "./col.module.scss";

// Col component
const Col = (props: ICol) => {
  // destructuring props
  const { columnSize = "1", children } = props;
  // state

  // context hooks

  // queries

  // mutations

  // formik

  // effect

  // other variables/functions/handlers
  const renderColumnSizeStyle = () => {
    let style = "";
    for (let i = 0; i < Number(columnSize); i++) {
      style += "1fr" + (i + 1 !== Number(columnSize) ? " " : "");
    }
    return style;
  };
  // render
  return (
    <div
      className={styles.col}
      style={{
        gridTemplateColumns: renderColumnSizeStyle(),
      }}
    >
      {children}
    </div>
  );
};

// export
export default Col;
