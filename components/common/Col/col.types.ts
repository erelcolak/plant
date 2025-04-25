import { ReactNode } from "react";

export interface ICol {
  children: ReactNode;
  columnSize?: "1" | "2" | "3" | "4" | "6" | "8" | "10" | "12";
}
