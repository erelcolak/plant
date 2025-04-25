import { IOption } from "../Option";
import { PlantMeta } from "./enums";
import { PlantMetaLabels } from "./labels";

export const PlantMetaMapping: IOption[] = [
  {
    label: PlantMetaLabels.HUMIDITY,
    value: PlantMeta.HUMIDITY,
  },
  {
    label: PlantMetaLabels.WATER,
    value: PlantMeta.WATER,
  },
];
