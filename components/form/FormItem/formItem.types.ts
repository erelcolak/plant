import { ReactNode } from "react";

export interface IFormItem {
  children: ReactNode;
  error?: string;
  info?: string;
  label?: string;
}
