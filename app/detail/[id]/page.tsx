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
  console.log(data);
  // other variables/functions/handlers
  if (!data) return null;
  // render
  return <PlantDetail plant={data} />;
};

// export
export default Detail;
