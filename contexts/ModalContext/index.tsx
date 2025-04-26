"use client";

import { createContext, useState } from "react";
import dynamic from "next/dynamic";

import ModalAddPlant from "@/components/modals/ModalAddPlant";

import { IModalContext, initialValuesModalContext, initialValuesModalData, TModalData, TModals } from "./modalContext.types";

const ModalRemovePlant = dynamic(() => import("@/components/modals/ModalRemovePlant"), { ssr: false });
const ModalContext = createContext<IModalContext>(initialValuesModalContext);

// ModalContextProvider component
const ModalContextProvider = (props: any) => {
  // destructuring props

  // state
  const [modals, setModals] = useState<TModals>(initialValuesModalContext.modals);
  const [modalData, setModalData] = useState<TModalData>(initialValuesModalData);
  // context hooks

  // queries

  // mutations

  // formik

  // effect

  // other variables/functions/handlers

  // render
  return (
    <ModalContext.Provider
      value={{
        modals,
        setModals,
        modalData,
        setModalData,
      }}
    >
      {props.children}
      {modals["ModalRemovePlant"] && <ModalRemovePlant />}
      {modals["ModalAddPlant"] && <ModalAddPlant />}
    </ModalContext.Provider>
  );
};

// export
export { ModalContext, ModalContextProvider };
