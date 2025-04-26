"use client";

import Input from "@/components/form/Input";
import Button from "../Button/button";

import { ColorVariant } from "@/types/ColorVariant";
import { SortOrder } from "@/types/SearchFields";

import { IFilterControls } from "./filterControls.types";
import styles from "./filterControls.module.scss";

// FilterControls component
const FilterControls = (props: IFilterControls) => {
  // destructuring props
  const { searchFields, setSearchFields } = props;
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
      <Input
        id="searchPlant"
        placeholder="Ara..."
        rounded
        value={searchFields.searchTerm}
        onChange={(e: any) => {
          setSearchFields({
            ...searchFields,
            searchTerm: e.target.value,
          });
        }}
      />
      <Button
        colorVariant={ColorVariant.light}
        text="Tarihe Göre Sırala"
        icon="calendar"
        onClick={() => {
          setSearchFields({
            ...searchFields,
            pageableInput: {
              ...searchFields.pageableInput,
              sortBy: "createDate",
              sortOrder: searchFields.pageableInput.sortOrder === SortOrder.DESC ? SortOrder.ASC : SortOrder.DESC,
            },
          });
        }}
      />
      <Button
        colorVariant={ColorVariant.light}
        icon="droplet"
        text="Su İhtiyacına Göre Sırala"
        onClick={() => {
          setSearchFields({
            ...searchFields,
            pageableInput: {
              ...searchFields.pageableInput,
              sortBy: "weeklyWaterNeeded",
              sortOrder: searchFields.pageableInput.sortOrder === SortOrder.DESC ? SortOrder.ASC : SortOrder.DESC,
            },
          });
        }}
      />
    </div>
  );
};

// export
export default FilterControls;
