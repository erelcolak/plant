"use client";

import { useQuery } from "@tanstack/react-query";

import { Plants } from "@/service";

import Col from "@/components/common/Col";
import Container from "@/components/common/Container";
import ContainerFullwidth from "@/components/common/ContainerFullwidth";
import PlantCard from "@/components/common/PlantCard";
import ModalRemovePlant from "@/components/modals/ModalRemovePlant";

import { ModalTypes } from "@/contexts/ModalContext/modalContext.types";
import useModal from "@/hooks/useModal";

import { getRandomColorVariant } from "@/utils/getRandomColorVariant";

// App component
const App = () => {
  // destructuring props

  // state

  // context hooks
  const { modals } = useModal();
  // queries
  const { data } = useQuery({
    queryKey: ["getAllPlants"],
    queryFn: () => Plants.getAllPlants(),
  });
  // mutations

  // formik

  // effect

  // other variables/functions/handlers

  // render
  return (
    <ContainerFullwidth>
      <Container>
        <Col columnSize="4">
          {data?.map((plant) => {
            return <PlantCard key={`PlantCard-${plant.id}`} plant={plant} colorVariant={getRandomColorVariant()} />;
          })}
        </Col>
      </Container>
      {modals[ModalTypes.ModalRemovePlant] && <ModalRemovePlant />}
    </ContainerFullwidth>
  );
};

// export
export default App;
