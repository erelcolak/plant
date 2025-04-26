"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import classNames from "classnames";
import { useQuery } from "@tanstack/react-query";

import { Plants } from "@/service";

import AreaChart from "@/components/charts/AreaChart";
import Col from "../Col";
import Container from "../Container";
import ContainerFullwidth from "../ContainerFullwidth";
import Loader from "../Loader";

import { IPlantDetail } from "./plantDetail.types";
import Controls from "./components/Controls";
import Heading from "./components/Heading";
import styles from "./plantDetail.module.scss";
// PlantDetail component
const PlantDetail = (props: IPlantDetail) => {
  // destructuring props
  const { id } = props;
  // state

  // context hooks
  const t = useTranslations();
  // queries
  const { data: plant, isFetching: plantIsFetching } = useQuery({
    queryKey: ["getPlantById", id],
    queryFn: () =>
      Plants.getPlantById({
        id: id,
      }),
  });
  const { data: plantStats, isFetching: plantStatsIsFetching } = useQuery({
    queryKey: ["getPlantStatsById"],
    queryFn: () =>
      Plants.getPlantStatsByPlantId({
        id: id,
      }),
  });
  // mutations

  // formik

  // effect

  // other variables/functions/handlers

  // render
  return (
    <ContainerFullwidth className={styles.plantDetail}>
      <Container>
        {plantIsFetching || (plantStatsIsFetching && <Loader />)}
        {plant && (
          <Col columnSize="2">
            <Col>
              <Heading title={t(`${plant.plantType}`)} subtitle={plant.name} />
              <Controls plantId={plant.id} />
              {plantStats && <AreaChart plantData={plantStats?.plantData} weatherData={plantStats?.weatherData} />}
            </Col>
            <Col>
              <Image width={650} height={715} alt="" src={`/images/plants/${plant.plantType}.png`} className={styles.image} />
              <div className={classNames(styles.overlay, styles[plant.colorVariant])}></div>
            </Col>
          </Col>
        )}
      </Container>
    </ContainerFullwidth>
  );
};

// export
export default PlantDetail;
