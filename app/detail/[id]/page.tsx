"use client";

import { useQuery } from "@tanstack/react-query";

import { Plants } from "@/service";

import PlantDetail from "@/components/common/PlantDetail";

// Detail component
const Detail = ({ params }: any) => {
  // destructuring props

  // state

  // context hooks

  // queries
  const { data, isFetching } = useQuery({
    queryKey: ["getPlantById", params.id],
    queryFn: () =>
      Plants.getPlantById({
        id: params.id,
      }),
  });
  // mutations

  // formik

  // effect

  // other variables/functions/handlers

  // render
  return <PlantDetail plant={data} isFetching={isFetching} />;
};

// export
export default Detail;
