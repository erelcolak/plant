import { ColorVariant } from "@/types/ColorVariant";
import { PlantType } from "@/types/PlantType";

export interface IPlantCard {
  plantType: PlantType;
  colorVariant?: ColorVariant;
}
