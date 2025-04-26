"use client";

import { useTranslations } from "next-intl";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Plants } from "@/service";

import CallToAction from "@/components/common/CallToAction/callToAction";
import Modal from "@/components/common/Modal";
import { ToastStatus } from "@/components/common/Toast/toast.types";

import { ModalTypes } from "@/contexts/ModalContext/modalContext.types";
import useModal from "@/hooks/useModal";
import useToast from "@/hooks/useToast";

import { toastMessages } from "@/utils/toastMessages";

import { ColorVariant } from "@/types/ColorVariant";

// ModalRemovePlant component
const ModalRemovePlant = () => {
  // destructuring props

  // state

  // context hooks
  const t = useTranslations();
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  const { modalData, hideModal } = useModal();
  const _data = modalData[ModalTypes.ModalRemovePlant].data;
  const _callback = modalData[ModalTypes.ModalRemovePlant].callback;
  // queries

  // mutations
  const removePlantByIdMutation = useMutation({
    mutationFn: () =>
      Plants.removePlantById({
        id: _data.plantId,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getAllPlants"],
      });
      if (_callback) {
        _callback();
      }
      showToast({
        text: toastMessages.removePlant.success,
        status: ToastStatus.success,
      });
    },
    onError: () => {
      showToast({
        text: toastMessages.removePlant.failed,
      });
    },
    onSettled: () => {
      hideModal(ModalTypes.ModalRemovePlant);
    },
  });
  // formik

  // effect

  // other variables/functions/handlers

  // render
  return (
    <Modal
      id={ModalTypes.ModalRemovePlant}
      loading={removePlantByIdMutation.isPending}
      footerRightButton={{
        colorVariant: ColorVariant.danger,
        icon: "trash",
        text: t("ModalRemovePlant-Button-Delete"),
        onClick: () => {
          removePlantByIdMutation.mutate();
        },
      }}
    >
      <CallToAction icon="trash" title={t("ModalRemovePlant-CTA-Title")} subtitle={t("ModalRemovePlant-CTA-Subtitle")} />
    </Modal>
  );
};

// export
export default ModalRemovePlant;
