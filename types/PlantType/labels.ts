import { PlantType } from "./enums";

export type TPlantTypeLabels = {
  [key in `${keyof typeof PlantType}`]: string;
};

export const PlantTypeLabels: TPlantTypeLabels = {
  ASPARAGUS: "Kuşkonmaz",
  CACTUS: "Kaktüs",
  DIEFFENCBACHIA: "Difenbahya",
  GERBERA: "Gerbera",
  ROSE: "Gül",
  ORCHIDACEAE: "Orkide",
};
