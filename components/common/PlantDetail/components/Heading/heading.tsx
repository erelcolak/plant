"use client";

import { IHeading } from "./heading.types";
import styles from "./heading.module.scss";

// Heading component
const Heading = (props: IHeading) => {
  // destructuring props
  const { title, subtitle } = props;
  // state

  // context hooks

  // queries

  // mutations

  // formik

  // effect

  // other variables/functions/handlers

  // render
  return (
    <div className={styles.heading}>
      <h1 className={styles.title}>{title}</h1>
      {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
    </div>
  );
};

// export
export default Heading;
