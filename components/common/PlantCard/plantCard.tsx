"use client";

import { IPlantCard } from "./plantCard.types";

import styles from "./plantCard.module.scss";

// PlantCard component
const PlantCard = (props: IPlantCard) => {
  // destructuring props
  const {} = props;
  // state

  // context hooks

  // queries

  // mutations

  // formik

  // effect

  // other variables/functions/handlers

  // render
  return (
    <div className={styles.plantCard}>
      <div className={styles.image}></div>
      <div className={styles.contentContainer}>
        <div className={styles.titleContainer}>
          <div className={styles.title}></div>
          <div className={styles.subtitle}></div>
        </div>
        <div className={styles.metaDataContainer}></div>
      </div>
    </div>
  );
};

// export
export default PlantCard;
