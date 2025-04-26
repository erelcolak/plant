import { ColorVariant } from "@/types/ColorVariant";

export const getRandomColorVariant = (): ColorVariant => {
  const values = Object.values(ColorVariant);
  const randomIndex = Math.floor(Math.random() * values.length);
  return values[randomIndex];
};
