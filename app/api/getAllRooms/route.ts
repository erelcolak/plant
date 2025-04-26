import { faker } from "@faker-js/faker";
import { NextResponse } from "next/server";

import { createRoom } from "@/utils/faker";

const list = faker.helpers.multiple(createRoom, { count: 2 });

export async function GET() {
  return NextResponse.json(list);
}
