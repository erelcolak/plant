"use client";

import { useTranslations } from "next-intl";
import { useFormik } from "formik";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { initialValuesAddPlant, schemaAddPlant } from "@/formik/addPlant";
import { Plants } from "@/service";

import CallToAction from "@/components/common/CallToAction/callToAction";
import Modal from "@/components/common/Modal";
import { ToastStatus } from "@/components/common/Toast/toast.types";
import Input from "@/components/form/Input";
import Select from "@/components/form/Select";

import { ModalTypes } from "@/contexts/ModalContext/modalContext.types";
import useGlobalData from "@/hooks/useGlobalData";
import useModal from "@/hooks/useModal";
import useToast from "@/hooks/useToast";

import { mapEntityArrayToIOptionArray } from "@/utils/mapToIOption";
import { toastMessages } from "@/utils/toastMessages";

import { PlantTypeMapping } from "@/types/PlantType";
import { ProcessType } from "@/types/ProcessType";

// ModalAddPlant component
const ModalAddPlant = () => {
  // destructuring props

  // state

  // context hooks
  const t = useTranslations();
  const queryClient = useQueryClient();
  const { showToast } = useToast();
  const { getAllRoomsData, getAllRoomsIsFetching } = useGlobalData();
  const { modalData, hideModal } = useModal();
  const _data = modalData[ModalTypes.ModalAddPlant].data;
  const _processType = modalData[ModalTypes.ModalAddPlant].processType;
  const _callback = modalData[ModalTypes.ModalAddPlant].callback;
  // queries
  const { data: getPlantByIdData, isFetching: getPlantByIdIsFetching } = useQuery({
    queryKey: ["getPlantById", _data.id],
    queryFn: () =>
      Plants.getPlantById({
        id: _data.id as string,
      }),
    enabled: _processType === ProcessType.UPDATE,
  });
  // mutations
  const addPlantMutation = useMutation({
    mutationFn: () =>
      Plants.addPlant({
        body: {
          name: formik.values.name,
          expectedRelativeHumidity: formik.values.expectedRelativeHumidity,
          plantType: formik.values.plantType,
          roomId: formik.values.roomId,
          weeklyWaterNeeded: formik.values.weeklyWaterNeeded,
        },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getAllPlants"],
      });
      if (_callback) {
        _callback();
      }
      showToast({
        text: toastMessages.addPlant.success,
        status: ToastStatus.success,
      });
    },
    onError: () => {
      showToast({
        text: toastMessages.addPlant.failed,
      });
    },
    onSettled: () => {
      hideModal(ModalTypes.ModalAddPlant);
    },
  });
  const updatePlantMutation = useMutation({
    mutationFn: () =>
      Plants.updatePlant({
        body: {
          id: _data.id as string,
          name: formik.values.name,
          expectedRelativeHumidity: formik.values.expectedRelativeHumidity,
          plantType: formik.values.plantType,
          roomId: formik.values.roomId,
          weeklyWaterNeeded: formik.values.weeklyWaterNeeded,
        },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getAllPlants"],
      });
      if (_callback) {
        _callback();
      }
      showToast({
        text: toastMessages.addPlant.success,
        status: ToastStatus.success,
      });
    },
    onError: () => {
      showToast({
        text: toastMessages.addPlant.failed,
      });
    },
    onSettled: () => {
      hideModal(ModalTypes.ModalAddPlant);
    },
  });
  // formik
  const formik = useFormik({
    initialValues:
      _processType === ProcessType.UPDATE
        ? {
            ...initialValuesAddPlant,
            name: getPlantByIdData?.name || "",
            expectedRelativeHumidity: getPlantByIdData?.expectedRelativeHumidity || 0,
            plantType: getPlantByIdData?.plantType || "",
            weeklyWaterNeeded: getPlantByIdData?.weeklyWaterNeeded || 0,
          }
        : initialValuesAddPlant,
    validationSchema: schemaAddPlant(),
    validateOnChange: true,
    enableReinitialize: true,
    onSubmit: () => {
      _processType === ProcessType.UPDATE ? updatePlantMutation.mutate() : addPlantMutation.mutate();
    },
  });
  // effect

  // other variables/functions/handlers

  // render
  return (
    <Modal
      id={ModalTypes.ModalAddPlant}
      loading={getPlantByIdIsFetching || addPlantMutation.isPending || updatePlantMutation.isPending}
      footerRightButton={{
        icon: _processType === ProcessType.UPDATE ? "arrow-clockwise" : "plus-lg",
        text: _processType === ProcessType.UPDATE ? t("ModalAddPlan-Button-Update") : t("ModalAddPlan-Button-Add"),
        onClick: () => {
          formik.handleSubmit();
        },
      }}
    >
      {_processType !== ProcessType.UPDATE && (
        <CallToAction icon="plus-lg" title={t("ModalAddPlan-CTA-Add-Title")} subtitle={t("ModalAddPlan-CTA-Add-Subtitle")} />
      )}
      <Input
        id="name"
        label={t("ModalAddPlan-FormItem-Name-Label")}
        info={t("ModalAddPlan-FormItem-Name-Info")}
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.errors.name}
      />
      <Select
        id="roomId"
        label={t("ModalAddPlan-FormItem-Room-Label")}
        info={t("ModalAddPlan-FormItem-Room-Info")}
        options={mapEntityArrayToIOptionArray(getAllRoomsData || [])}
        value={formik.values.roomId}
        onChange={(e: any) => {
          formik.setFieldValue("roomId", e.target.value);
        }}
        disabled={getAllRoomsIsFetching}
        error={formik.errors.roomId}
      />
      <Select
        id="plantType"
        label={t("ModalAddPlan-FormItem-PlantType-Label")}
        info={t("ModalAddPlan-FormItem-PlantType-Info")}
        options={PlantTypeMapping || []}
        value={formik.values.plantType?.toString()}
        onChange={(e: any) => {
          formik.setFieldValue("plantType", e.target.value);
        }}
        disabled={getAllRoomsIsFetching}
        error={formik.errors.plantType}
      />
      <Input
        id="weeklyWaterNeeded"
        label={t("ModalAddPlan-FormItem-WeeklyWaterNeeded-Label")}
        info={t("ModalAddPlan-FormItem-WeeklyWaterNeeded-Info")}
        value={formik.values.weeklyWaterNeeded}
        onChange={formik.handleChange}
        error={formik.errors.weeklyWaterNeeded}
      />
      <Input
        id="expectedRelativeHumidity"
        label={t("ModalAddPlan-FormItem-ExpectedHumidity-Label")}
        info={t("ModalAddPlan-FormItem-ExpectedHumidity-Info")}
        value={formik.values.expectedRelativeHumidity}
        onChange={formik.handleChange}
        error={formik.errors.expectedRelativeHumidity}
      />
    </Modal>
  );
};

// export
export default ModalAddPlant;
