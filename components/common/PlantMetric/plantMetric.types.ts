import { ColorVariant } from "@/types/ColorVariant";

export interface IPlantMetric {
  icon: string;
  title: string;
  subtitle?: string;
  unit?: string;
  colorVariant?: ColorVariant;
}
