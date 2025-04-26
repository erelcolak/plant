"use client";

import Image from "next/image";

import Col from "../Col";
import Container from "../Container";
import ContainerFullwidth from "../ContainerFullwidth";

import { PlantTypeLabels } from "@/types/PlantType";

import { IPlantDetail } from "./plantDetail.types";
import Controls from "./components/Controls";
import Heading from "./components/Heading";
import styles from "./plantDetail.module.scss";
// PlantDetail component
const PlantDetail = (props: IPlantDetail) => {
  // destructuring props
  const { plant } = props;
  // state

  // context hooks

  // queries

  // mutations

  // formik

  // effect

  // other variables/functions/handlers

  // render
  return (
    <ContainerFullwidth>
      <Container>
        <Col columnSize="2">
          <Col>
            <Heading title={PlantTypeLabels[plant.plantType]} subtitle={plant.name} />
            <Controls plantId={plant.id} />
          </Col>
          <Col>
            <Image width={650} height={715} alt="" src={`/images/plants/${plant.plantType}.png`} className={styles.image} />
          </Col>
        </Col>
      </Container>
    </ContainerFullwidth>
  );
};

// export
export default PlantDetail;
