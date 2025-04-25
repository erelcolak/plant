// app/api/plants/route.ts

import { NextResponse } from "next/server";

type Plant = {
  id: number;
  name: string;
  species: string;
};

const plants: Plant[] = [
  { id: 1, name: "Aloe Vera", species: "Aloe" },
  { id: 2, name: "Peace Lily", species: "Spathiphyllum" },
  { id: 3, name: "Snake Plant", species: "Sansevieria" },
];

export async function GET() {
  return NextResponse.json(plants);
}
