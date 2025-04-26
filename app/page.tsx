"use client";

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { Plants } from "@/service";

import Col from "@/components/common/Col";
import Container from "@/components/common/Container";
import ContainerFullwidth from "@/components/common/ContainerFullwidth";
import FilterControls from "@/components/common/FilterControls";
import PlantCard from "@/components/common/PlantCard";
import ModalRemovePlant from "@/components/modals/ModalRemovePlant";

import { ModalTypes } from "@/contexts/ModalContext/modalContext.types";
import useModal from "@/hooks/useModal";

import { convertTextToEnglish } from "@/utils/convertTextToEnglish";
import { initialValueSearchFieldPaginatin } from "@/utils/initialValueSearchFieldPagination";

import { Plant } from "@/types/Plant";
import { ISearchFields, PageableInput, SortOrder } from "@/types/SearchFields";

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

  const [searchFields, setSearchFields] = useState<ISearchFields>(() => {
    return {
      pageableInput: initialValueSearchFieldPaginatin,
      searchTerm: "",
    };
  });
  const [filteredData, setFilteredData] = useState<Plant[]>(data || []);
  // mutations

  // formik

  // effect
  useEffect(() => {
    filterData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchFields, data]);
  // other variables/functions/handlers
  const filterDataBySearchTerm = (data: Plant[]) => {
    if (searchFields.searchTerm && searchFields.searchTerm.length > 0) {
      return data?.filter((plant) => plant.name.includes(searchFields?.searchTerm as string)) || [];
    } else {
      return data || [];
    }
  };
  const sortData = (data: any[], sortBy: string, sortOrder: SortOrder) => {
    const sortedData = data.sort((a, b) => {
      let valA = a[sortBy];
      let valB = b[sortBy];

      // if(date) {
      //   valA = new Date(valA).getTime();
      //   valB = new Date(valB).getTime();
      // }

      valA = convertTextToEnglish(valA);
      valB = convertTextToEnglish(valB);

      if (valA < valB) return sortOrder === SortOrder.ASC ? -1 : 1;
      if (valA > valB) return sortOrder === SortOrder.ASC ? 1 : -1;

      return 0;
    });
    return sortedData;
  };
  const filterData = () => {
    const filteredData = filterDataBySearchTerm(data || []);
    const sortedData = sortData(filteredData, (searchFields.pageableInput as PageableInput).sortBy, (searchFields.pageableInput as PageableInput).sortOrder);
    setFilteredData(sortedData);
  };
  // render
  return (
    <ContainerFullwidth>
      <Container>
        <FilterControls searchFields={searchFields} setSearchFields={setSearchFields} />
        <Col columnSize="4">
          {filteredData?.map((plant) => {
            return <PlantCard key={`PlantCard-${plant.id}`} plant={plant} />;
          })}
        </Col>
      </Container>
      {modals[ModalTypes.ModalRemovePlant] && <ModalRemovePlant />}
    </ContainerFullwidth>
  );
};

// export
export default App;
