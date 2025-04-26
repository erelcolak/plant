"use client";

import { useRef, useState } from "react";
import classNames from "classnames";
import { usePopper } from "react-popper";

import Button from "../Button/button";

import useOutsideClick from "@/hooks/useOutsideClick";

import { popperSettings } from "@/utils/popper";

import { SizeVariant } from "@/types/SizeVariant";

import { IDropdownMenu } from "./dropdownMenu.types";
import DropdownItem from "./components/DropdownItem";
import styles from "./dropdownMenu.module.scss";
// DropdownMenu component
const DropdownMenu = (props: IDropdownMenu) => {
  // destructuring props
  const { id, dropdownButton, dropdownMenuItems } = props;
  // state
  const [open, setOpen] = useState<boolean>(false);
  // context hooks
  const referenceElement = useRef<any>(null);
  const [popperElement, setPopperElement] = useState<any>(null);
  const { styles: popperStyles, attributes: popperAttributes } = usePopper(referenceElement.current, popperElement, popperSettings);
  const _dropdownMenuRef = useOutsideClick(() => {
    setOpen(false);
  });
  // queries

  // effect

  // other variables/functions/handlers

  // render
  return (
    <div className={classNames(styles.dropdownMenu, styles[dropdownButton.sizeVariant || SizeVariant.default])} ref={_dropdownMenuRef}>
      <Button {...dropdownButton} onClick={() => setOpen(!open)} htmlRef={referenceElement} />
      {open && (
        <div ref={setPopperElement} className={classNames(styles.dropdownContainer)} style={popperStyles.popper} {...popperAttributes.popper}>
          {dropdownMenuItems.map((dropdownItem, index) => (
            <DropdownItem key={`DropdownMenu-${id}-DropdownItem-${index}`} {...dropdownItem} setOpen={setOpen} />
          ))}
        </div>
      )}
    </div>
  );
};

// export
export default DropdownMenu;
