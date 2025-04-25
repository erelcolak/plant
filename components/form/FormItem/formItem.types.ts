import { ReactNode } from "react";

import { SizeVariant } from "@/types/SizeVariant";

export interface IFormItem {
  children: ReactNode;
  error?: string;
  info?: string;
  label?: string;
  sizeVariant?: SizeVariant;
}
