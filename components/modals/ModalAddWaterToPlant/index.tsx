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

import { PlantStat } from "@/types/Plant/types";

// ModalAddWaterToPlant component
const ModalAddWaterToPlant = () => {
  // destructuring props

  // state

  // context hooks
  const t = useTranslations();
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  const { modalData, hideModal } = useModal();
  const _data = modalData[ModalTypes.ModalAddWaterToPlant].data;
  const _callback = modalData[ModalTypes.ModalAddWaterToPlant].callback;
  // queries

  // mutations
  const addWaterToPlant = useMutation({
    mutationFn: () =>
      Plants.addWaterToPlant({
        id: _data.id as string,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getAllPlants"],
      });
      if (_callback) {
        _callback();
      }
      showToast({
        text: toastMessages.addWaterToPlant.success,
        status: ToastStatus.success,
      });
    },
    onError: () => {
      showToast({
        text: toastMessages.addWaterToPlant.failed,
      });
    },
    async onMutate() {
      // cancel refetch queries on mutation
      optimisticUpdatePlantStats();
      return { queryKey: ["getPlantStatsById"], previousTaskData: queryClient.getQueryData(["getPlantStatsById"]) };
    },
    onSettled: () => {
      hideModal(ModalTypes.ModalAddWaterToPlant);
    },
  });
  // formik

  // effect

  // other variables/functions/handlers
  const optimisticUpdatePlantStats = () => {
    // previous data
    const previousPlantStats: PlantStat = queryClient.getQueryData(["getPlantStatsById"]) as PlantStat;
    // set new fields
    let _tempPlantData: number[] = [...previousPlantStats.plantData];
    const _tempWeatherData: number[] = previousPlantStats.weatherData;
    _tempPlantData[_tempPlantData.length - 1] = _tempWeatherData[_tempWeatherData.length - 1];
    // set new data
    const newPlantStat: PlantStat = {
      ...previousPlantStats,
      plantData: _tempPlantData,
    };
    // set update
    queryClient.setQueryData(["getPlantStatsById"], () => newPlantStat);
  };
  // render
  return (
    <Modal
      id={ModalTypes.ModalAddWaterToPlant}
      loading={addWaterToPlant.isPending}
      footerRightButton={{
        icon: "droplet",
        text: t("ModalAddWaterToPlant-Button-Complete"),
        onClick: () => {
          addWaterToPlant.mutate();
        },
      }}
    >
      <CallToAction icon="droplet" title={t("ModalAddWaterToPlant-CTA-Title")} subtitle={t("ModalAddWaterToPlant-CTA-Subtitle")} />
    </Modal>
  );
};

// export
export default ModalAddWaterToPlant;
