import { PlantType } from "./enums";

type TPlantTypeLabels = {
  [key in `${keyof typeof PlantType}`]: string;
};

export const PlantTypeLabels: TPlantTypeLabels = {
  CRASSULA_OVATA: "PARA ÇİÇEĞİ",
  DAISY: "PAPATYA",
  GERBERA: "GERBERA",
  GUZMANIA: "GUZMANIA",
  LILIUM: "LİLYUM",
  OLIVE: "ZEYTİN",
  ORCHID: "ORKİDE",
  ROSE: "GÜL",
  SPATIFILYUM: "SPATIFILYUM",
  SUCCULENT: "SUKULENT",
};
