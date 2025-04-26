import { IButton } from "../Button/button.types";
import { IDropdownItem } from "./components/DropdownItem/dropdownItem.types";

export interface IDropdownMenu {
  id: string;
  dropdownButton: IButton;
  dropdownMenuItems: IDropdownItem[];
  disabled?: boolean;
}
