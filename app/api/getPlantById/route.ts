import { NextResponse } from "next/server";

import { createPlant } from "@/utils/faker";

export async function GET() {
  const plant = createPlant();
  return NextResponse.json(plant);
}
