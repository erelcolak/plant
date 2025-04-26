import { faker } from "@faker-js/faker";
import { NextResponse } from "next/server";

import { createPlant } from "@/utils/faker";

const list = faker.helpers.multiple(createPlant, { count: 20 });

export async function GET() {
  return NextResponse.json(list);
}
