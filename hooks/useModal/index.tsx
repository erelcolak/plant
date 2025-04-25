"use client";

import { useContext } from "react";

import { ModalContext } from "@/contexts/ModalContext";
import { TModalData } from "@/contexts/ModalContext/modalContext.types";

const useModal = () => {
  const { modals, setModals, modalData, setModalData } = useContext(ModalContext);

  const showModal = <T extends keyof TModalData>(modalType: T, data?: TModalData[T]) => {
    document.body.classList.add("modal-open");
    setModals({ ...modals, [modalType]: true });
    setModalData({
      ...modalData,
      [modalType]: data,
    });
  };
  const hideModal = (modalType: keyof TModalData) => {
    document.body.classList.remove("modal-open");
    setModals({ ...modals, [modalType]: false });
    setModalData({
      ...modalData,
      [modalType]: {
        data: {},
      },
    });
    debugger;
  };
  return {
    modals,
    modalData,
    hideModal,
    showModal,
  };
};

export default useModal;
