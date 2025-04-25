import { PlantMeta } from "./enums";

export type TPlantMetaLabels = {
  [key in `${keyof typeof PlantMeta}`]: string;
};

export const PlantMetaLabels: TPlantMetaLabels = {
  HUMIDITY: "Nem",
  WATER: "Su",
};
