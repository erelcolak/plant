import { ReactNode } from "react";

import { ModalTypes } from "@/contexts/ModalContext/modalContext.types";

import { IButton } from "../Button/button.types";

export interface IModal {
  id: ModalTypes;
  loading?: boolean;
  children: ReactNode;
  isFooterLeftButtonAvailable?: boolean;
  isFooterRightButtonAvailable?: boolean;
  footerLeftButton?: IButton;
  footerRightButton?: IButton;
}
