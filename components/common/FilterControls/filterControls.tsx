"use client";

import Input from "@/components/form/Input";

import { IFilterControls } from "./filterControls.types";
import styles from "./filterControls.module.scss";

// FilterControls component
const FilterControls = (props: IFilterControls) => {
  // destructuring props
  const {} = props;
  // state

  // context hooks

  // queries

  // mutations

  // formik

  // effect

  // other variables/functions/handlers

  // render
  return (
    <div className={styles.filterControls}>
      <Input id="" value="" onChange={(e) => {}} placeholder="Ara..." />
      <Input id="" value="" onChange={(e) => {}} placeholder="Ara..." />
    </div>
  );
};

// export
export default FilterControls;
