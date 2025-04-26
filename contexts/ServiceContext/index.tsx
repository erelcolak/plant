"use client";
import { createContext } from "react";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { QueryClient } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";

import { serviceOptions } from "@/service";

import { axiosInstance } from "@/utils/axios";

const ServiceContext = createContext<any | null>(null);

serviceOptions.axios = axiosInstance;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
});
// define persister
const localStoragePersister = createSyncStoragePersister({
  storage: typeof window !== "undefined" ? window.localStorage : undefined,
  key: "offlineCache",
});

// ServiceContextProvider component
const ServiceContextProvider = (props: any) => {
  // destructuring props

  // state

  // context hooks

  // queries

  // effect

  // other variables/functions/handlers

  // render
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{
        persister: localStoragePersister,
        dehydrateOptions: {
          // eslint-disable-next-line unused-imports/no-unused-vars
          shouldDehydrateQuery(query) {
            // control global keys for cache and dehydrate
            if (query.queryKey.includes("getAllRooms")) {
              return true;
            }
            return false;
          },
        },
      }}
    >
      <ServiceContext.Provider value={{ queryClient }}>{props.children}</ServiceContext.Provider>
    </PersistQueryClientProvider>
  );
};

// export
export { ServiceContext, ServiceContextProvider };
