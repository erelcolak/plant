"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import classNames from "classnames";

import PlantMetric from "../PlantMetric";

import { routes } from "@/utils/routes";

import { ColorVariant } from "@/types/ColorVariant";
import { PlantTypeLabels } from "@/types/PlantType";

import { IPlantCard } from "./plantCard.types";
import styles from "./plantCard.module.scss";
// PlantCard component
const PlantCard = (props: IPlantCard) => {
  // destructuring props
  const { plant, colorVariant = ColorVariant.light } = props;
  // state

  // context hooks
  const router = useRouter();
  // queries

  // mutations

  // formik

  // effect

  // other variables/functions/handlers

  // render
  return (
    <div className={classNames(styles.plantCard, styles[colorVariant])} onClick={() => router.push(routes.detail.url(plant.id))}>
      <div className={styles.coverImage}>
        <Image width={130} height={143} alt="" src={`/images/plants/${plant.plantType}.png`} className={styles.image} />
      </div>
      <div className={styles.titleContainer}>
        <div className={styles.title}>{PlantTypeLabels[plant.plantType]}</div>
        <div className={styles.subtitle}>{plant.name}</div>
      </div>
      <div className={styles.metrics}>
        <PlantMetric icon="droplet" title="SU MİKTARI" subtitle={plant.weeklyWaterNeeded.toString()} unit="ml" />
        <PlantMetric icon="moisture" title="NEM MİKTARI" subtitle={plant.expectedRelativeHumidity.toString()} unit="%" />
      </div>
      <div className={styles.overlay}></div>
    </div>
  );
};

// export
export default PlantCard;
