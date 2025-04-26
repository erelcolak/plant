import { faker } from "@faker-js/faker";

import { Plant } from "@/types/Plant";
import { PlantStat } from "@/types/Plant/types";
import { PlantType } from "@/types/PlantType";
import { Room } from "@/types/Room";

import { getRandomColorVariant } from "../getRandomColorVariant";

export const createPlant = (): Plant => {
  return {
    id: faker.string.uuid(),
    name: faker.word.words(2),
    roomId: faker.string.uuid(),
    plantType: faker.helpers.arrayElement(Object.values(PlantType)),
    weeklyWaterNeeded: faker.number.int({ min: 100, max: 1000 }),
    expectedRelativeHumidity: faker.number.int({ min: 30, max: 80 }),
    createDate: faker.date.past(),
    lastWateringDate: faker.date.recent({ days: 10 }),
    colorVariant: getRandomColorVariant(),
  };
};

export const createPlantStats = (): PlantStat => {
  return {
    plantData: faker.helpers.multiple(() => faker.number.int({ min: 1, max: 50 }), {
      count: 7,
    }),
    weatherData: faker.helpers.multiple(() => faker.number.int({ min: 1, max: 50 }), {
      count: 7,
    }),
  };
};

export const createRoom = (): Room => {
  const roomNames = ["Oturma Odası", "Mutfak", "Balkon"];
  return {
    id: faker.string.uuid(),
    name: faker.helpers.arrayElement(roomNames),
  };
};
