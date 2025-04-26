import { AlignVariant } from "@/types/AlignVariant";
import { ColorVariant } from "@/types/ColorVariant";
import { SizeVariant } from "@/types/SizeVariant";

export interface IButton {
  id?: string;
  onClick: any;
  text?: string;
  icon?: string;
  onlyIcon?: boolean;
  colorVariant?: ColorVariant;
  alignVariant?: AlignVariant;
  sizeVariant?: SizeVariant;
  htmlRef?: any;
}
