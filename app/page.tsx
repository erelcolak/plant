"use client";

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { Plants } from "@/service";

import Col from "@/components/common/Col";
import Container from "@/components/common/Container";
import ContainerFullwidth from "@/components/common/ContainerFullwidth";
import FilterControls from "@/components/common/FilterControls";
import PlantCard from "@/components/common/PlantCard";

import { convertTextToEnglish } from "@/utils/convertTextToEnglish";
import { initialValueSearchFieldPaginatin } from "@/utils/initialValueSearchFieldPagination";

import { Plant } from "@/types/Plant";
import { ISearchFields, SortOrder } from "@/types/SearchFields";

// App component
const App = () => {
  // destructuring props

  // state

  // context hooks

  // queries
  const { data } = useQuery({
    queryKey: ["getAllPlants"],
    queryFn: () => Plants.getAllPlants(),
  });

  const [searchFields, setSearchFields] = useState<ISearchFields>({
    pageableInput: initialValueSearchFieldPaginatin,
    searchTerm: "",
  });
  const [filteredData, setFilteredData] = useState<Plant[]>(data || []);
  // mutations

  // formik

  // effect
  useEffect(() => {
    if (data) {
      filterData();
    }
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
  const sortData = (data: any[]) => {
    const sortBy = searchFields.pageableInput.sortBy;
    const sortOrder = searchFields.pageableInput.sortOrder;
    const sortedData = data.sort((a, b) => {
      let valA = a[sortBy];
      let valB = b[sortBy];

      if (valA instanceof Date || valB instanceof Date || !isNaN(Date.parse(valA as any)) || !isNaN(Date.parse(valB as any))) {
        valA = new Date(valA as any).getTime();
        valB = new Date(valB as any).getTime();
      } else if (typeof valA === "number" && typeof valB === "number") {
        // do nothing
      } else {
        valA = convertTextToEnglish((valA ?? "").toString());
        valB = convertTextToEnglish((valB ?? "").toString());
      }

      if (valA < valB) return sortOrder === SortOrder.ASC ? -1 : 1;
      if (valA > valB) return sortOrder === SortOrder.ASC ? 1 : -1;
      return 0;
    });

    return sortedData;
  };
  const filterData = () => {
    const filteredData = filterDataBySearchTerm(data || []);
    const sortedData = sortData(filteredData);
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
    </ContainerFullwidth>
  );
};

// export
export default App;
