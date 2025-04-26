"use client";

import Image from "next/image";
import classNames from "classnames";

import { ColorVariant } from "@/types/ColorVariant";
import { PlantTypeLabels } from "@/types/PlantType";

import { IPlantCard } from "./plantCard.types";
import styles from "./plantCard.module.scss";
// PlantCard component
const PlantCard = (props: IPlantCard) => {
  // destructuring props
  const { plantType, colorVariant = ColorVariant.light } = props;
  // state

  // context hooks

  // queries

  // mutations

  // formik

  // effect

  // other variables/functions/handlers

  // render
  return (
    <div className={classNames(styles.plantCard, styles[colorVariant])}>
      <Image width={130} height={143} alt="" src={`/images/plants/${plantType}.png`} className={styles.image} />
      <div className={styles.title}>{PlantTypeLabels[plantType]}</div>
    </div>
  );
};

// export
export default PlantCard;
