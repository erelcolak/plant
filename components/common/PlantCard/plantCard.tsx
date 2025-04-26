"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import classNames from "classnames";

import Button from "../Button/button";
import PlantMetric from "../PlantMetric";

import { ModalTypes } from "@/contexts/ModalContext/modalContext.types";
import useModal from "@/hooks/useModal";

import { dateFormatter } from "@/utils/dateFormatter";
import { routes } from "@/utils/routes";

import { ColorVariant } from "@/types/ColorVariant";
import { PlantTypeLabels } from "@/types/PlantType";
import { ProcessType } from "@/types/ProcessType";
import { SizeVariant } from "@/types/SizeVariant";

import { IPlantCard } from "./plantCard.types";
import styles from "./plantCard.module.scss";
// PlantCard component
const PlantCard = (props: IPlantCard) => {
  // destructuring props
  const { plant } = props;
  // state

  // context hooks
  const router = useRouter();
  const { showModal } = useModal();
  // queries

  // mutations

  // formik

  // effect

  // other variables/functions/handlers

  // render
  return (
    <div className={classNames(styles.plantCard, styles[plant.colorVariant])} onClick={() => router.push(routes.detail.url(plant.id))}>
      <div className={styles.coverImage}>
        <Image width={130} height={143} alt="" src={`/images/plants/${plant.plantType}.png`} className={styles.image} />
      </div>
      <div className={styles.titleContainer}>
        <div className={styles.title}>{PlantTypeLabels[plant.plantType]}</div>
        <div className={styles.subtitle}>{plant.name}</div>
        <div className={styles.date}>{dateFormatter(plant.createDate)}</div>
      </div>
      <div className={styles.metrics}>
        <PlantMetric icon="droplet" title="SU MİKTARI" subtitle={plant.weeklyWaterNeeded.toString()} unit="ml" />
        <PlantMetric icon="moisture" title="NEM MİKTARI" subtitle={plant.expectedRelativeHumidity.toString()} unit="%" />
      </div>
      <div className={styles.controls}>
        <Button
          sizeVariant={SizeVariant.small}
          colorVariant={ColorVariant.light}
          icon="trash"
          onlyIcon
          onClick={() => {
            showModal(ModalTypes.ModalRemovePlant, {
              data: {
                plantId: plant.id,
              },
            });
          }}
        />
        <Button
          icon="pencil"
          onlyIcon
          sizeVariant={SizeVariant.small}
          colorVariant={ColorVariant.secondary}
          onClick={() => {
            showModal(ModalTypes.ModalAddPlant, {
              data: {
                id: plant.id,
              },
              processType: ProcessType.UPDATE,
            });
          }}
        />
      </div>
      <div className={styles.overlay}></div>
    </div>
  );
};

// export
export default PlantCard;
