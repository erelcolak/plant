import { IOption } from "../Option";
import { PlantType } from "./enums";
import { PlantTypeLabels } from "./labels";

export const PlantTypeMapping: IOption[] = [
  {
    label: PlantTypeLabels.CRASSULA_OVATA,
    value: PlantType.CRASSULA_OVATA,
  },
  {
    label: PlantTypeLabels.DAISY,
    value: PlantType.DAISY,
  },
  {
    label: PlantTypeLabels.GERBERA,
    value: PlantType.GERBERA,
  },
  {
    label: PlantTypeLabels.GUZMANIA,
    value: PlantType.GUZMANIA,
  },
  {
    label: PlantTypeLabels.LILIUM,
    value: PlantType.LILIUM,
  },
  {
    label: PlantTypeLabels.OLIVE,
    value: PlantType.OLIVE,
  },
  {
    label: PlantTypeLabels.ORCHID,
    value: PlantType.ORCHID,
  },
  {
    label: PlantTypeLabels.ROSE,
    value: PlantType.ROSE,
  },
  {
    label: PlantTypeLabels.SPATIFILYUM,
    value: PlantType.SPATIFILYUM,
  },
  {
    label: PlantTypeLabels.SUCCULENT,
    value: PlantType.SUCCULENT,
  },
];
