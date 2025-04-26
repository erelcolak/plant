"use client";

import classNames from "classnames";

import FormItem from "../FormItem";

import { SizeVariant } from "@/types/SizeVariant";

import { ISelect } from "./select.types";
import styles from "./select.module.scss";

// Select component
const Select = (props: ISelect) => {
  // destructuring props
  const { id, onChange, value, options, disabled, error, info, selectRef, label, sizeVariant = SizeVariant.default } = props;
  // state

  // context hooks

  // queries

  // mutations

  // formik

  // effect

  // other variables/functions/handlers

  // render
  return (
    <FormItem label={label} error={error} info={info}>
      <select
        className={classNames(styles.select, styles[sizeVariant], disabled && styles.disabled, error && styles.error)}
        disabled={disabled}
        id={id}
        name={id}
        onChange={onChange}
        value={value}
        ref={selectRef}
      >
        <option value="">Seçiniz</option>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </FormItem>
  );
};

// export
export default Select;
