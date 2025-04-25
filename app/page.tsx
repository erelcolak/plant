"use client";

import Col from "@/components/common/Col";
import Container from "@/components/common/Container";
import ContainerFullwidth from "@/components/common/ContainerFullwidth";
import PlantCard from "@/components/common/PlantCard";

import { ColorVariant } from "@/types/ColorVariant";
import { PlantType } from "@/types/PlantType";

// App component
const App = () => {
  // destructuring props

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
        <Col columnSize="4">
          <PlantCard plantType={PlantType.CRASSULA_OVATA} colorVariant={ColorVariant.blue} />
          <PlantCard plantType={PlantType.DAISY} colorVariant={ColorVariant.danger} />
          <PlantCard plantType={PlantType.GERBERA} colorVariant={ColorVariant.dark} />
          <PlantCard plantType={PlantType.GUZMANIA} colorVariant={ColorVariant.light} />
          <PlantCard plantType={PlantType.LILIUM} colorVariant={ColorVariant.orange} />
          <PlantCard plantType={PlantType.OLIVE} colorVariant={ColorVariant.pink} />
          <PlantCard plantType={PlantType.ORCHID} colorVariant={ColorVariant.primary} />
          <PlantCard plantType={PlantType.ROSE} colorVariant={ColorVariant.secondary} />
          <PlantCard plantType={PlantType.SPATIFILYUM} colorVariant={ColorVariant.success} />
          <PlantCard plantType={PlantType.SUCCULENT} colorVariant={ColorVariant.warning} />
        </Col>
      </Container>
    </ContainerFullwidth>
  );
};

// export
export default App;
