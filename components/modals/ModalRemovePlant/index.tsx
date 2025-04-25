"use client";

import Modal from "@/components/common/Modal";
import Input from "@/components/form/Input";

import { ModalTypes } from "@/contexts/ModalContext/modalContext.types";
import useModal from "@/hooks/useModal";

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
        onClick: () => {
          // mutation
        },
      }}
    >
      <Input id="lorem" value="saşldfkjaislşdfkaildkf" onChange={(e) => {}} label="Bitki Adı" info="Bitki adını giriniz" />
    </Modal>
  );
};

// export
export default ModalRemovePlant;
