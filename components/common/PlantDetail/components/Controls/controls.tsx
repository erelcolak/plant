"use client";

import { useRouter } from "next/navigation";

import Button from "@/components/common/Button/button";

import { ModalTypes } from "@/contexts/ModalContext/modalContext.types";
import useModal from "@/hooks/useModal";

import { routes } from "@/utils/routes";

import { ColorVariant } from "@/types/ColorVariant";
import { ProcessType } from "@/types/ProcessType";

import { IControls } from "./controls.types";
import styles from "./controls.module.scss";

// Controls component
const Controls = (props: IControls) => {
  // destructuring props
  const { plantId } = props;
  // state

  // context hooks
  const router = useRouter();
  const { showModal } = useModal();
  // queries

  // mutations

  // formik

  // effect

  // other variables/functions/handlers

  // render
  return (
    <div className={styles.controls}>
      <Button
        icon="trash"
        text="Sil"
        colorVariant={ColorVariant.light}
        onClick={() => {
          showModal(ModalTypes.ModalRemovePlant, {
            data: {
              plantId,
            },
            callback() {
              router.push(routes.home.url);
            },
          });
        }}
      />
      <Button
        icon="pencil"
        text="Düzenle"
        colorVariant={ColorVariant.secondary}
        onClick={() => {
          showModal(ModalTypes.ModalAddPlant, {
            data: {
              id: plantId,
            },
            processType: ProcessType.UPDATE,
            callback() {
              router.push(routes.home.url);
            },
          });
        }}
      />
    </div>
  );
};

// export
export default Controls;
