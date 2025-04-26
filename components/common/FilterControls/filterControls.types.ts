import { Dispatch, SetStateAction } from "react";

import { ISearchFields } from "@/types/SearchFields";

export interface IFilterControls {
  searchFields: ISearchFields;
  setSearchFields: Dispatch<SetStateAction<ISearchFields>>;
}
