"use client";

import Modal from "@/components/common/Modal";

import { ModalTypes } from "@/contexts/ModalContext/modalContext.types";
import useModal from "@/hooks/useModal";

import { ColorVariant } from "@/types/ColorVariant";

// ModalRemovePlant component
const ModalRemovePlant = () => {
  // destructuring props

  // state

  // context hooks
  const { modalData } = useModal();

  const _data = modalData[ModalTypes.ModalRemovePlant].data;
  const _callback = modalData[ModalTypes.ModalRemovePlant].callback;
  // queries

  // mutations

  // formik

  // effect

  // other variables/functions/handlers

  // render
  return (
    <Modal
      id={ModalTypes.ModalRemovePlant}
      loading={false}
      footerRightButton={{
        text: "Sil",
        colorVariant: ColorVariant.danger,
        onClick: () => {
          // mutation
        },
      }}
    >
      <></>
    </Modal>
  );
};

// export
export default ModalRemovePlant;
