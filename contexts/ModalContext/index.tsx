"use client";

import { createContext, useState } from "react";

import ModalRemovePlant from "@/components/modals/ModalRemovePlant";

import { IModalContext, initialValuesModalContext, initialValuesModalData, TModalData, TModals } from "./modalContext.types";

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
    </ModalContext.Provider>
  );
};

// export
export { ModalContext, ModalContextProvider };
