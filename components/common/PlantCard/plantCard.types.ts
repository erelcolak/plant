import { ColorVariant } from "@/types/ColorVariant";
import { Plant } from "@/types/Plant";

export interface IPlantCard {
  plant: Plant;
  colorVariant?: ColorVariant;
}
