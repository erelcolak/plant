"use client";

import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";

import Button from "@/components/common/Button/button";

import { ModalTypes } from "@/contexts/ModalContext/modalContext.types";
import useModal from "@/hooks/useModal";

import { routes } from "@/utils/routes";

import { ColorVariant } from "@/types/ColorVariant";

import { IControls } from "./controls.types";
import styles from "./controls.module.scss";

// Controls component
const Controls = (props: IControls) => {
  // destructuring props
  const { plantId } = props;
  // state

  // context hooks
  const router = useRouter();
  const queryClient = useQueryClient();
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
              queryClient.invalidateQueries({
                queryKey: ["getAllPlants"],
              });
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
