"use client";

import Image from "next/image";

import Button from "@/components/common/Button/button";
import Col from "@/components/common/Col";
import Container from "@/components/common/Container";
import ContainerFullwidth from "@/components/common/ContainerFullwidth";

import { ColorVariant } from "@/types/ColorVariant";
import { PlantType, PlantTypeLabels } from "@/types/PlantType";

// PlantDetail component
const PlantDetail = ({ params }: any) => {
  // destructuring props

  // state

  // context hooks

  // queries

  // mutations

  // formik

  // effect

  // other variables/functions/handlers
  const plant = {
    plantType: PlantType.SUCCULENT,
  };
  // render
  return (
    <ContainerFullwidth>
      <Container>
        <Col columnSize="2">
          <Col>
            <h1>{PlantTypeLabels[plant.plantType]}</h1>
            <div>
              <Button colorVariant={ColorVariant.light} icon="trash" text="Sil" onClick={() => {}} />
              <Button colorVariant={ColorVariant.success} icon="pencil" text="Verileri Güncelle" onClick={() => {}} />
            </div>
          </Col>
          <Col>
            <Image width={650} height={715} alt="" src={`/images/plants/${plant.plantType}.png`} />
          </Col>
        </Col>
      </Container>
    </ContainerFullwidth>
  );
};

// export
export default PlantDetail;
