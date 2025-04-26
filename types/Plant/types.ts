import { ColorVariant } from "../ColorVariant";
import { PlantType } from "../PlantType";

export interface Plant {
  id: string;
  name: string;
  roomIds: string[];
  plantType: PlantType;
  weeklyWaterNeeded: number;
  expectedRelativeHumidity: number;
  createDate: Date;
  lastWateringDate: Date;
  colorVariant: ColorVariant;
}
