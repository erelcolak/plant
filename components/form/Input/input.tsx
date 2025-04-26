"use client";

import classNames from "classnames";

import FormItem from "../FormItem";

import { SizeVariant } from "@/types/SizeVariant";

import { IInput } from "./input.types";
import styles from "./input.module.scss";

// Input component
const Input = (props: IInput) => {
  // destructuring props
  const { id, onChange, value, disabled, error, info, inputRef, label, placeholder, type = "text", sizeVariant = SizeVariant.default, rounded = false } = props;
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
      <input
        className={classNames(styles.input, styles[sizeVariant], disabled && styles.disabled, error && styles.error, rounded && styles.rounded)}
        disabled={disabled}
        id={id}
        name={id}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value || ""}
        ref={inputRef}
      />
    </FormItem>
  );
};

// export
export default Input;
