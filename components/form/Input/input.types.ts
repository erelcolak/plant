import { IFormItem } from "../FormItem/formItem.types";

export interface IInput extends Omit<IFormItem, "children"> {
  id: string;
  value: string | number | undefined;
  onChange: (e: any) => void;
  placeholder?: string;
  disabled?: boolean;
  type?: "text" | "number";
  inputRef?: any;
  rounded?: boolean;
}
