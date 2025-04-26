import { faker } from "@faker-js/faker";

import { Plant } from "@/types/Plant";
import { PlantType } from "@/types/PlantType";
import { getRandomColorVariant } from "../getRandomColorVariant";

export const createPlant = (): Plant => {
  return {
    id: faker.string.uuid(),
    name: faker.word.words(2),
    roomIds: [faker.string.uuid(), faker.string.uuid()],
    plantType: faker.helpers.arrayElement(Object.values(PlantType)),
    weeklyWaterNeeded: faker.number.int({ min: 100, max: 1000 }),
    expectedRelativeHumidity: faker.number.int({ min: 30, max: 80 }),
    createDate: faker.date.past(),
    lastWateringDate: faker.date.recent({ days: 10 }),
    colorVariant: getRandomColorVariant(),
  };
};
