import { NextResponse } from "next/server";

import { createPlantStats } from "@/utils/faker";

export async function GET() {
  const plantStats = createPlantStats();
  return NextResponse.json(plantStats);
}
