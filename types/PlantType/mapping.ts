import { IOption } from "../Option";
import { PlantType } from "./enums";
import { PlantTypeLabels } from "./labels";

export const PlantTypeMapping: IOption[] = [
  {
    label: PlantTypeLabels.ASPARAGUS,
    value: PlantType.ASPARAGUS,
  },
  {
    label: PlantTypeLabels.CACTUS,
    value: PlantType.CACTUS,
  },
  {
    label: PlantTypeLabels.DIEFFENCBACHIA,
    value: PlantType.DIEFFENCBACHIA,
  },
  {
    label: PlantTypeLabels.GERBERA,
    value: PlantType.GERBERA,
  },
  {
    label: PlantTypeLabels.ORCHIDACEAE,
    value: PlantType.ORCHIDACEAE,
  },
  {
    label: PlantTypeLabels.ROSE,
    value: PlantType.ROSE,
  },
  {
    label: PlantTypeLabels.BONSAI,
    value: PlantType.BONSAI,
  },
];
