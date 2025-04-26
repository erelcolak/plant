import { IOption } from "@/types/Option";

import { IFormItem } from "../FormItem/formItem.types";

export interface ISelect extends Omit<IFormItem, "children"> {
  id: string;
  value: string | undefined;
  onChange: (e: any) => void;
  options: IOption[];
  disabled?: boolean;
  selectRef?: any;
}
