import { ProcessType } from "@/types/ProcessType";

export type TModalData = { [key in keyof ModalDataMap]: ModalDataMap[key] };

export type TModals = { [key in ModalTypes]: boolean };

export type BaseModalData<T> = {
  data: T;
  processType?: ProcessType;
  callback?: () => void;
};

export enum ModalTypes {
  ModalRemovePlant = "ModalRemovePlant",
  ModalAddPlant = "ModalAddPlant",
  ModalAddWaterToPlant = "ModalAddWaterToPlant",
}

export const initialValuesModals: TModals = {
  [ModalTypes.ModalRemovePlant]: false,
  [ModalTypes.ModalAddPlant]: false,
  [ModalTypes.ModalAddWaterToPlant]: false,
};
export type ModalDataMap = {
  [ModalTypes.ModalRemovePlant]: BaseModalData<{ plantId: string }>;
  [ModalTypes.ModalAddPlant]: BaseModalData<{
    id?: string;
  }>;
  [ModalTypes.ModalAddWaterToPlant]: BaseModalData<{
    id?: string;
  }>;
};
export const initialValuesModalData: TModalData = {
  [ModalTypes.ModalRemovePlant]: {
    data: {
      plantId: "",
    },
  },
  [ModalTypes.ModalAddPlant]: {
    data: {
      id: "",
    },
  },
  [ModalTypes.ModalAddWaterToPlant]: {
    data: {
      id: "",
    },
  },
};

export const initialValuesModalContext: IModalContext = {
  modals: initialValuesModals,
  modalData: initialValuesModalData,
  setModals: () => null,
  setModalData: () => null,
};

export interface IModalContext {
  modals: TModals;
  setModals: React.Dispatch<React.SetStateAction<TModals>>;
  modalData: TModalData;
  setModalData: React.Dispatch<React.SetStateAction<TModalData>>;
}
