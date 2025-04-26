"use client";

import classNames from "classnames";

import { IDropdownItem } from "./dropdownItem.types";
import styles from "./dropdownItem.module.scss";

// DropdownItem component
const DropdownItem = (props: IDropdownItem) => {
  // destructuring props
  const { icon, text, onClick, setOpen } = props;
  // state

  // context hooks

  // queries

  // effect

  // other variables/functions/handlers

  // render
  return (
    <div
      className={styles.dropdownItem}
      onClick={() => {
        onClick();
        setOpen(false);
      }}
    >
      {icon && <i className={classNames(styles.icon, `bi-${icon}`)}></i>}
      <span className={styles.text}>{text}</span>
    </div>
  );
};

// export
export default DropdownItem;
