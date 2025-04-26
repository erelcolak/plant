import { PageableInput, SortOrder } from "@/types/SearchFields";

export const initialValueSearchFieldPaginatin: PageableInput = {
  number: 0,
  size: 15,
  sortOrder: SortOrder.ASC,
  sortBy: "createDate",
};
