import { NextResponse } from "next/server";

import { createPlant } from "@/utils/faker";

const plant = createPlant();

export async function GET(request: Request, { params }: { params: { id: string } }) {
  return NextResponse.json(plant);
}
