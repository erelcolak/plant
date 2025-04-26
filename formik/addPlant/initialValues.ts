import { PlantType } from "@/types/PlantType";

export const initialValuesAddPlant = {
  name: "",
  roomId: "",
  plantType: PlantType.CRASSULA_OVATA.toString(),
  weeklyWaterNeeded: 0,
  expectedRelativeHumidity: 0,
};
