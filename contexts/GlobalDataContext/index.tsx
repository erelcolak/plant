"use client";
import { createContext } from "react";
import { useQuery } from "@tanstack/react-query";

import { Rooms } from "@/service";

import { IGlobalDataContext, initialValuesGlobalDataContext } from "./globalDataContext.types";
import { defaultQueryStaleTime } from "@/utils/constants";

const GlobalDataContext = createContext<IGlobalDataContext>(initialValuesGlobalDataContext);

// GlobalDataContextProvider component
const GlobalDataContextProvider = (props: any) => {
  // destructuring props

  // state

  // context hooks

  // queries
  const { data: getAllRoomsData, isFetching: getAllRoomsIsFetching } = useQuery({
    queryKey: ["getAllRooms"],
    queryFn: () => Rooms.getAllRooms(),
    staleTime: defaultQueryStaleTime,
  });
  // effect

  // other variables/functions/handlers

  // render
  return (
    <GlobalDataContext.Provider
      value={{
        getAllRoomsData,
        getAllRoomsIsFetching,
      }}
    >
      {props.children}
    </GlobalDataContext.Provider>
  );
};

// export
export { GlobalDataContext, GlobalDataContextProvider };
