"use client";
import classNames from "classnames";

import { emptyFieldString } from "@/utils/constants";

import { ColorVariant } from "@/types/ColorVariant";

import { IPlantMetric } from "./plantMetric.types";
import styles from "./plantMetric.module.scss";

// PlantMetric component
const PlantMetric = (props: IPlantMetric) => {
  // destructuring props
  const { icon, title, subtitle, unit, colorVariant = ColorVariant.light } = props;
  // state

  // context hooks

  // queries

  // mutations

  // formik

  // effect

  // other variables/functions/handlers

  // render
  return (
    <div className={classNames(styles.plantMetric, styles[colorVariant])}>
      <i className={classNames(styles.icon, `bi-${icon}`)}></i>
      <div className={styles.titleContainer}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>
          {subtitle || emptyFieldString}
          {unit}
        </div>
      </div>
    </div>
  );
};

// export
export default PlantMetric;
