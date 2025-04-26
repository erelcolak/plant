"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

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
  const { plant, isFetching } = props;
  // state

  // context hooks
  const t = useTranslations();
  // queries

  // mutations

  // formik

  // effect

  // other variables/functions/handlers

  // render
  return (
    <ContainerFullwidth>
      <Container>
        {isFetching && <Loader />}
        {plant && (
          <Col columnSize="2">
            <Col>
              <Heading title={t(`${plant.plantType}`)} subtitle={plant.name} />
              <Controls plantId={plant.id} />
            </Col>
            <Col>
              <Image width={650} height={715} alt="" src={`/images/plants/${plant.plantType}.png`} className={styles.image} />
            </Col>
          </Col>
        )}
      </Container>
    </ContainerFullwidth>
  );
};

// export
export default PlantDetail;
