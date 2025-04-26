"use client";

import Input from "@/components/form/Input";
import DropdownMenu from "../DropdownMenu";

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
        value={searchFields.searchTerm}
        onChange={(e: any) => {
          setSearchFields({
            ...searchFields,
            searchTerm: e.target.value,
          });
        }}
      />
      <DropdownMenu
        id="SortPlants"
        dropdownButton={{
          onClick: () => null,
          icon: "filter",
          onlyIcon: true,
          colorVariant: ColorVariant.light,
        }}
        dropdownMenuItems={[
          {
            text: "Oluşturma Tarihine Göre (Artan)",
            onClick: () => {
              setSearchFields({
                ...searchFields,
                pageableInput: {
                  ...searchFields.pageableInput,
                  sortBy: "createDate",
                  sortOrder: SortOrder.ASC,
                },
              });
            },
          },
          {
            text: "Oluşturma Tarihine Göre (Azalan)",
            onClick: () => {
              setSearchFields({
                ...searchFields,
                pageableInput: {
                  ...searchFields.pageableInput,
                  sortBy: "createDate",
                  sortOrder: SortOrder.DESC,
                },
              });
            },
          },
        ]}
      />
    </div>
  );
};

// export
export default FilterControls;
